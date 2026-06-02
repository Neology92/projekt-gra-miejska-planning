# Z11 — Table 2 (tabula recta) — draft

> **Language:** player-facing (letters/symbols, language-neutral). Planning notes = Polish.
> **Status:** draft [2026-06-02] — working data; row count + symbol style pending Oskar (`puzzles/z11-szyfr-spec.md §8`).
> **Role:** KZ finale, step 2. Player takes the **key symbol** from Table 1, finds its **row** here, and decodes the Z11 ciphertext → the parole. Spec: `puzzles/z11-szyfr-spec.md`.
> **Delivered:** OTWARTE — z Tabelą 1 (K3-K) albo w finale z szyfrogramem (spec §6).

---

## STRUCTURE

- **Columns (top header): plaintext letters `A … Z`** (26 columns).
- **Rows (left label): the 16 symbols** `S01 … S16` (same glyphs as Table 1 cells). [4×4 → 16, decyzja Oskara 2026-06-02; mieści się na A4 landscape]
- **Each row = a different substitution alphabet** (a permutation of A–Z placed under the column letters).
- **Decode:** for each ciphertext letter, find it **inside the chosen symbol's row**, read the **column header above it** = plaintext letter.
- **Only the KEY row (S11, = `Brown × Ladle`) decodes to a readable parole**; the other 15 rows give gibberish (player's self-check).

---

## KEY ROW — S11 = keyword substitution `MARIENBURG`

```
column (plain):  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
row S11 (cell):  M A R I E N B U G C D F H J K L O P Q S T V W X Y Z
```
(unique letters of MARIENBURG: M-A-R-I-E-N-B-U-G, then remaining A–Z in order)

**Encode map (column → cell), for computing the ciphertext:**
`A→M B→A C→R D→I E→E F→N G→B H→U I→G J→C K→D L→F M→H N→J O→K P→L Q→O R→P S→Q T→S U→T V→V W→W X→X Y→Y Z→Z`

---

## CIPHERTEXT (the Z11 szyfrogram = the Order's motto, in the KZ finale envelope)

**Plaintext = the Order's MOTTO** [decyzja Oskara 2026-06-03] — the same motto that is the Z7 KEY for the mieszczanie:
```
HELFEN, HEILEN UND WEHREN!
```

**Ciphertext (encoded with row S11) — on the prop with punctuation [Oskar 2026-06-03]:**
```
UEFNEJ, UEGFEJ TJI WEUPEJ!
```

**Round-trip check (decode S11):** UEFNEJ → `HELFEN`; UEGFEJ → `HEILEN`; TJI → `UND`; WEUPEJ → `WEHREN`. ✓ = `HELFEN HEILEN UND WEHREN` (validation `cipher-data.js` PASS).

> Spoken to Albrecht at the finale (Przedzamcze, 20:30), the motto unlocks delivering the letter to him — for both factions. KZ groups get it by decoding Z11; TR defectors read it off the stolen list (Z3). **Punctuation (comma/!) is shown on the prop** in the same positions as the motto — it anchors the words (same device as Z7) and passes through 1:1 (not enciphered); validation round-trip uses letters + word spaces.

> ⚠ **Zmiana parolu:** wpisz nowy plaintext, zakoduj literę po literze przez „Encode map" wyżej → nowy ciphertext. Wiersz S11 (MARIENBURG) i pozostałe 15 wierszy bez zmian.

---

## DECOY ROWS (15 pozostałych)

15 pozostałych wierszy = inne permutacje alfabetu (deterministyczne, seed per symbol). Każdy zastosowany do ciphertextu daje **bełkot** — self-check gracza („czytelne tylko z właściwym symbolem"). Generowane w `tools/z11-cipher/cipher-data.js` (renderer tworzy z seedu i waliduje, że żaden inny wiersz nie daje parolu).

---

## PLANNING NOTES (nie dla gracza)

- **Rozmiar:** 16×26 — **mieści się na jednej A4 landscape** [zweryfikowane renderem 2026-06-02].
- **Walidacja renderu (twarda, w `cipher-data.js`):** (1) round-trip S11 → parol; (2) **żaden** z 15 wierszy decoy nie odszyfrowuje ciphertextu w parol; (3) wszystkie wiersze = pełne permutacje A–Z; (4) 16 unikalnych gmerków. PASS [2026-06-02].
- **Styl symboli:** patrz `z11-tabela-symboli-draft.md §SYMBOL STYLE` (gmerki rekomendowane). Te same glify w obu tabelach.
- **Render:** `tools/z11-cipher/` → `public/z11-tabela-2-tabula-recta.pdf`. Reuse `parchment.css`.
- **Hasło-substytucja MARIENBURG** = robocze; może być dowolne (byle round-trip). Tematyczne (siedziba WM) — ładny detal, ale gracz go nie widzi (to tylko sposób ułożenia wiersza S11).
