/**
 * meta-card-gen.mjs
 * Reads a single .md meta-kartka file and writes a standalone HTML file to stdout (or path arg).
 *
 * Usage: node meta-card-gen.mjs <input.md> <output.html>
 */

import { readFileSync, writeFileSync } from 'fs'

const SECTION_META = {
  'W SKRÓCIE': { bg: '#2c1e10', fg: '#fff4e0', badge: null },
  'FAKT':       { bg: '#8b1a10', fg: '#fff0ee', badge: 'FAKT' },
  'LEGENDA':    { bg: '#5a2472', fg: '#f9f0ff', badge: 'LEGENDA' },
  'SPORNE':     { bg: '#7a5700', fg: '#fffbe8', badge: 'SPORNE' },
  'FABUŁA':     { bg: '#14527a', fg: '#eef6ff', badge: 'FABUŁA' },
  'ANACHRONIZM':{ bg: '#7a3c00', fg: '#fff7ee', badge: 'ANACHRONIZM' },
  'CIEKAWOSTKI':{ bg: '#1a5c30', fg: '#eefff4', badge: 'CIEKAWOSTKI' },
  'ŹRÓDŁA':     { bg: '#3c4c5a', fg: '#edf4f9', badge: 'ŹRÓDŁA WIKI' },
  'DEFAULT':    { bg: '#3a2a18', fg: '#fdf6ec', badge: null },
}

function getSectionMeta(heading) {
  const h = heading.toUpperCase()
  for (const [key, val] of Object.entries(SECTION_META)) {
    if (h.startsWith(key)) return { ...val, key }
  }
  return { ...SECTION_META.DEFAULT, key: 'DEFAULT' }
}

function escape(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function mdInline(text) {
  text = escape(text)
  text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  text = text.replace(/`([^`]+)`/g, '<code>$1</code>')
  text = text.replace(/\*([^*]+)\*/g, '<em>$1</em>')
  text = text.replace(/⚠/g, '<span class="warn">⚠</span>')
  text = text.replace(/✓/g, '<span class="ok">✓</span>')
  text = text.replace(/✗/g, '<span class="no">✗</span>')
  // wiki refs → styled dim
  text = text.replace(/\(wiki: ([^)]+)\)/g, '<span class="wref">(wiki: $1)</span>')
  // planning refs
  text = text.replace(/`([^`]+)`/g, '<code>$1</code>')
  return text
}

/**
 * Convert a block of markdown lines to HTML.
 * Handles: bullet lists (-, *), numbered lists, blockquotes, tables, plain paragraphs.
 */
function mdBlock(lines) {
  const html = []
  let inList = false
  let inOl = false
  let inTable = false
  let tableRows = []

  function flushList() {
    if (inList) { html.push('</ul>'); inList = false }
    if (inOl)   { html.push('</ol>'); inOl   = false }
  }
  function flushTable() {
    if (!inTable) return
    inTable = false
    html.push('<table class="wiki-table">')
    tableRows.forEach((row, idx) => {
      const tag = idx === 0 ? 'th' : 'td'
      const cells = row.split('|').map(c => c.trim()).filter((c, i, a) => i > 0 && i < a.length - 1)
      html.push('<tr>' + cells.map(c => `<${tag}>${mdInline(c)}</${tag}>`).join('') + '</tr>')
    })
    html.push('</table>')
    tableRows = []
  }

  for (const raw of lines) {
    const line = raw.trimEnd()
    if (!line || line === '---') {
      flushList()
      flushTable()
      continue
    }
    // Table row
    if (line.startsWith('|')) {
      flushList()
      if (line.match(/^\|[-| :]+\|$/)) continue  // separator row
      inTable = true
      tableRows.push(line)
      continue
    }
    flushTable()
    // Blockquote
    if (line.startsWith('> ')) {
      flushList()
      html.push(`<blockquote>${mdInline(line.slice(2))}</blockquote>`)
      continue
    }
    // Bullet list
    if (/^[-*]\s+/.test(line)) {
      if (!inList) { flushList(); html.push('<ul>'); inList = true }
      html.push(`<li>${mdInline(line.replace(/^[-*]\s+/, ''))}</li>`)
      continue
    }
    // Numbered list
    if (/^\d+\.\s+/.test(line)) {
      if (!inOl) { flushList(); html.push('<ol>'); inOl = true }
      html.push(`<li>${mdInline(line.replace(/^\d+\.\s+/, ''))}</li>`)
      continue
    }
    // H3 sub-heading
    if (line.startsWith('### ')) {
      flushList()
      html.push(`<h3>${mdInline(line.slice(4))}</h3>`)
      continue
    }
    // Paragraph
    flushList()
    html.push(`<p>${mdInline(line)}</p>`)
  }
  flushList()
  flushTable()
  return html.join('\n')
}

function parseCard(md) {
  const lines = md.split('\n')
  let title = '', subtitle = '', koperta = '', zadanie = '', tor = ''
  let isSpoiler = false
  const sections = []
  let curHeading = null
  let curLines = []

  for (const raw of lines) {
    const line = raw.trimEnd()
    if (line.startsWith('# ')) {
      title = line.slice(2).replace(/^Kartka autorska — /, '').trim()
    } else if (line.startsWith('> ')) {
      subtitle = line.slice(2).trim()
      if (subtitle.toUpperCase().includes('SPOILER')) isSpoiler = true
    } else if (line.startsWith('**Koperta:**')) {
      const m = line.match(/Koperta:\*\*\s*([^·]+?)·\s*\*\*Zadanie:\*\*\s*([^·]+?)·\s*\*\*Tor:\*\*\s*(.+)/)
      if (m) { koperta = m[1].trim(); zadanie = m[2].trim(); tor = m[3].trim() }
    } else if (line.startsWith('## ')) {
      if (curHeading !== null) sections.push({ heading: curHeading, lines: curLines })
      curHeading = line.slice(3).trim()
      curLines = []
    } else if (curHeading !== null) {
      curLines.push(line)
    }
  }
  if (curHeading !== null) sections.push({ heading: curHeading, lines: curLines })

  return { title, subtitle, koperta, zadanie, tor, isSpoiler, sections }
}

function renderHTML(card, slug) {
  const { title, subtitle, koperta, zadanie, tor, isSpoiler, sections } = card

  const spoilerBanner = isSpoiler
    ? `<div class="spoiler-banner">⚠ SPOILER — ${escape(subtitle.replace(/^⚠\s*SPOILER\s*[—–]\s*/, ''))}</div>`
    : ''

  const sectionsHtml = sections.map(({ heading, lines }) => {
    const meta = getSectionMeta(heading)
    // Skip empty sections
    const content = lines.filter(l => l.trim() && l.trim() !== '---').join('\n')
    if (!content.trim()) return ''
    const badge = meta.badge ? `<span class="section-badge">${meta.badge}</span>` : ''
    const bodyHtml = mdBlock(lines)
    return `
<div class="section" style="--sec-bg:${meta.bg};--sec-fg:${meta.fg}">
  <div class="section-head">
    <span class="section-title">${escape(heading)}</span>${badge}
  </div>
  <div class="section-body">${bodyHtml}</div>
</div>`
  }).join('\n')

  return `<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="UTF-8">
<title>${escape(title)}</title>
<style>
@page { size: A4; margin: 12mm 14mm 14mm; }
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: "Segoe UI", Calibri, system-ui, sans-serif; font-size: 8.5pt; color: #1e1209; background: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; }

/* header */
.card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 5mm; padding-bottom: 3mm; border-bottom: 2pt solid #2c1e10; }
.card-title { font-size: 13pt; font-weight: 700; color: #2c1e10; line-height: 1.2; }
.card-slug { font-size: 7pt; color: #907060; font-family: Consolas, monospace; margin-top: 1mm; }
.card-meta { text-align: right; font-size: 7.5pt; color: #60503a; line-height: 1.6; }
.card-meta strong { color: #3a2818; }

/* spoiler */
.spoiler-banner { background: #7a1010; color: #fff; text-align: center; padding: 3px 8px; font-size: 8pt; font-weight: 700; border-radius: 3px; margin-bottom: 4mm; -webkit-print-color-adjust: exact; print-color-adjust: exact; }

/* sections */
.section { margin-bottom: 3.5mm; border-radius: 5px; overflow: hidden; border: 1pt solid rgba(0,0,0,0.15); -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.section-head { background: var(--sec-bg); color: #fff; padding: 3px 8px; display: flex; align-items: center; gap: 6px; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.section-title { font-weight: 700; font-size: 8pt; letter-spacing: 0.06em; flex: 1; }
.section-badge { font-size: 6.5pt; background: rgba(255,255,255,0.2); padding: 1px 4px; border-radius: 2px; }
.section-body { background: var(--sec-fg); padding: 4px 8px 5px; line-height: 1.45; -webkit-print-color-adjust: exact; print-color-adjust: exact; }

/* section body elements */
.section-body p { margin-bottom: 2.5mm; }
.section-body p:last-child { margin-bottom: 0; }
.section-body ul, .section-body ol { padding-left: 12pt; margin-bottom: 2mm; }
.section-body li { margin-bottom: 1.5pt; }
.section-body blockquote { border-left: 2pt solid rgba(0,0,0,0.3); padding-left: 6pt; margin: 2mm 0; color: #504030; font-style: italic; font-size: 8pt; }
.section-body h3 { font-size: 8.5pt; color: var(--sec-bg); margin: 3mm 0 1mm; border-bottom: 0.5pt solid currentColor; padding-bottom: 1px; }
.section-body code { font-family: Consolas, monospace; font-size: 7.5pt; background: rgba(0,0,0,0.07); padding: 1px 3px; border-radius: 2px; }
.section-body strong { color: #2a1408; }
.section-body em { color: #4a3420; }
.wref { color: #807060; font-size: 7pt; }
.warn { color: #c04000; font-weight: 700; }
.ok   { color: #2e7d32; }
.no   { color: #b71c1c; }

/* wiki table */
.wiki-table { width: 100%; border-collapse: collapse; font-size: 7.5pt; margin: 2mm 0; }
.wiki-table th { background: rgba(0,0,0,0.12); font-weight: 700; padding: 2px 5px; border: 0.5pt solid rgba(0,0,0,0.2); -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.wiki-table td { padding: 2px 5px; border: 0.5pt solid rgba(0,0,0,0.15); vertical-align: top; }

/* two-column layout for wide sections */
.section-body .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 0 8mm; }
</style>
</head>
<body>

<div class="card-header">
  <div>
    <div class="card-title">${mdInline(title)}</div>
    <div class="card-slug">${escape(slug)}</div>
  </div>
  <div class="card-meta">
    <div><strong>Koperta:</strong> ${escape(koperta)}</div>
    <div><strong>Zadanie:</strong> ${escape(zadanie)}</div>
    <div><strong>Tor:</strong> ${escape(tor)}</div>
  </div>
</div>

${spoilerBanner}
${sectionsHtml}

</body>
</html>`
}

// Main
const [,, inputMd, outputHtml] = process.argv
if (!inputMd) {
  console.error('Usage: node meta-card-gen.mjs <input.md> <output.html>')
  process.exit(1)
}

const md = readFileSync(inputMd, 'utf8')
const slug = inputMd.split(/[\\/]/).pop().replace('.md', '')
const card = parseCard(md)
const html = renderHTML(card, slug)

if (outputHtml) {
  writeFileSync(outputHtml, html, 'utf8')
  console.log(`OK: ${outputHtml}`)
} else {
  process.stdout.write(html)
}
