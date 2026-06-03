# prototype/sealed-letter — zalakowany list kurierów (rekwizyt K1)

Grafika rekwizytu **„tajnego listu"**, który kurierzy dostają na starcie i noszą całą grę — *zapieczętowanego i zakazanego do czytania*. To **nie** jest nota instrukcyjna K1 (ta żyje w `envelopes/wspolne-1-Z1.md` → `public/wspolne-1-Z1.pdf`). To **sam zalakowany list** — wkładka wymieniona w zawartości koperty K1 („*the thing itself — the letter you are paid to carry, and forbidden to read*").

## 3 warianty do wyboru (Oskar wybiera)

Wszystkie mają **identyczny format i ten sam kanon** — różnią się tylko **traktowaniem adresata** (ile narracji niesie lico) + odcieniem laku/znakiem pieczęci:

| Plik | Adresat na licu | Lak / znak | Ile narracji |
|---|---|---|---|
| `v1-mute.html` | **brak** — tylko „Into his hands" | oksblood / rozeta | najmniej (najbezpieczniejszy) |
| `v2-sigil.html` | **nieznany znak** („to the bearer of this mark") — ten sam znak co pieczęć | crimson / merchant's mark | mało, tajemniczo |
| `v3-redirected.html` | **skreślony** bazgroł + „— not where he was named —" | vermilion / spirala | ⚠ **najwięcej** — zasiewa beat K2 (pośrednika nie ma) |

> ⚠ **V3 oflagowany:** skreślony adresat to *zdarzenie fabularne* (ktoś był celem → już go nie ma) i dotyka twistu K2. Bazgroł jest **nieczytelny** (nie koduje osoby ani frakcji), więc niesie samo zdarzenie. Wybierz V3 tylko jeśli chcesz, by lico foreshadowało. Jeśli zero spoilera → V1/V2.

## Kanon (trzymany we wszystkich wariantach)

- **Faction-neutral.** W Fazie 1 nikt nie wie, że są dwie klasy (`concept/01-faza-1-kurierzy`). List jest **celowo identyczny dla 10 grup** i nie zdradza strony: pieczęć = nieznany **house-mark** (gmerk), **nie** herb, **nie** krzyż Zakonu, **nie** korona/orzeł; miasto = **„Toruń"** (nie niem. „Thorn"); bleed-through za adresem jest **nieczytelny**.
- **Player-facing → angielski** (lico listu; treść w środku zostaje zapieczętowana).
- Data **Toruń, 6 II 1454**; „before the eighth bell" (= 20:30, **nie** Tuba Dei — anachronizm); groźba w nocie K1 („with their hands"), nie tu.

## Format / druk

- Karty **A6** (105×148,5 mm), **4 na arkusz A4**, **wszystkie identyczne**.
- Każdy PDF = **2 strony**: strona 1 = cztery **lica (adres)**, strona 2 = cztery **pieczęcie**.
- Drukuj **DWUSTRONNIE (duplex, odbicie wzdłuż dłuższej krawędzi)** → 1 arkusz = 4 listy. **3 arkusze → 12 → wytnij 10.**
- *Dlaczego all-identical:* (1) odporność na dryf duplexu — żadna strona nie wymaga lustrzanego dopasowania; (2) to także kanon (jeden list dla wszystkich). Pieczęć wyśrodkowana, krytyka z dala od linii cięcia → kilkumilimetrowy dryf nie utnie.
- **Kolor:** zaprojektowane w kolorze (lak = czerwień). Drukuj kolorowo; na mono nadal czyta się tonalnie.
- Można dodatkowo **złożyć raz** (załamania składania są nadrukowane) — opcjonalne, działa też płasko.

## Regeneracja

```powershell
pwsh -File render.ps1            # PDF-y (druk) + PNG-i QA (preview/)
pwsh -File render.ps1 -PdfOnly   # bez screenshotów
```

Wymaga Chrome lub Edge. PDF-y do druku lądują w tym folderze; podglądy QA (front/tył każdej wersji) w `preview/`.
Styl dzieli krój **IM Fell English** + tekstury pergaminu z `../print/src/` (font ładowany ścieżką względną).

## Po wyborze

Wybrany wariant → `public/` jako **`wspolne-1-Z1-list.pdf`** (pozycja 1, frakcja wspólna; konwencja `envelopes/README.md §Systematyka nazw`). Pozostałe warianty zostają tu jako backup. Aktualizuj `todo/dashboard.md §B`.
