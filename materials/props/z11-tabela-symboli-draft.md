# Z11 — Table 1 (symbol lookup) — draft

> **Language:** player-facing labels = **English** (color words) + **drawings** (objects). Planning notes = Polish.
> **Status:** draft [2026-06-02] — working data; symbol style + count pending Oskar (patrz `puzzles/z11-szyfr-spec.md §8`).
> **Role:** KZ finale, step 1. Player intersects `color of Jordan's robe × object` → reads the **key symbol**, then uses it as the row in Table 2 (tabula recta). Spec: `puzzles/z11-szyfr-spec.md`.
> **Delivered by:** Albrecht (Zosia) in K3-K, after Z2 (handler toru KZ). Carried into Piccolo (Z3Z).

---

## THE GRID (4 rows × 4 columns) [decyzja Oskara 2026-06-02]

- **Rows = colours, labelled in English + swatch:** **Red · Green · Brown · Black**.
- **Columns = objects, drawn as icons** (no text): **Gingerbread · Sword · Ladle · Candle**. *(Cloth usunięte — za blisko sukna z Z2; bread dropnięte do 4×4; podkowa→miecz.)*
- **Each of the 16 cells = one distinct symbol.**

```
              [Gingerbr] [Sword]  [Ladle]  [Candle]
   Red          S01        S02      S03      S04
   Green        S05        S06      S07      S08
   Brown        S09        S10      S11 ◀ KEY S12
   Black        S13        S14      S15      S16
```

- **KEY CELL = `Brown × Ladle` = S11** — **centralna, nie na krawędzi** [decyzja Oskara 2026-06-02]. (Brown = szata Jordana; Ladle = jego chochla.)
- S11 is the label of the **MARIENBURG row** in Table 2 — the only row that decodes the Z11 ciphertext.
- The other 15 cells are real symbols too (each labels a decoy row in Table 2) — so the player must *find the right coordinates*, not guess.
- **Rule text on the prop is GENERIC** [decyzja Oskara 2026-06-02]: nie nazywa „robe"/„ladle" — *"A colour and a thing, both belonging to the one you will meet. Where they cross, you will find your sign."* Gracz sam kojarzy szatę + chochlę.

> **Klucz wspólny dla całej frakcji KZ** — wszystkie 5 grup KZ trafiają na tę samą komórkę (Brown×Ladle), bo kolor szaty i chochla są stałe. Tabela bramkuje „znajdź właściwe współrzędne z dwóch obserwacji", nie różnicowanie grup. Patrz spec §3.

---

## SYMBOL STYLE — 3 OPCJE DO WYBORU (Oskar)

Wymóg: symbole **wyraźnie inne** niż (a) abstrakcyjne glify mapy Z1 (△ ○ □ ◇ — geometryczne) i (b) piktogramy miejsc w deszyfrowniku (Kopernik, osiołek — obrazkowe). Muszą czytać się jako „znaki/pieczęcie", nie jako mapa ani obrazki.

| # | Styl | Opis | Za | Ryzyko |
|---|---|---|---|---|
| **A ⭐** | **Gmerki (znaki gmerkowe / kupieckie)** | pionowa laska + warianty poprzeczek, haczyków, rozwidleń — jak XV-w. znaki domowe/kupieckie | period-accurate; **ties do wiki** (Aleja Gmerków, `aleja-gmerkow.js`); łatwo wygenerować 25 odmiennych; klimat „tajny znak cechowy/zakonny" | przy złym rysunku mogą zbliżyć się do geometrii glifów mapy — trzymać asymetrię/laskę |
| B | Pieczęcie heraldyczne | mały krzyż / lilia / gwiazda / rozeta **w okręgu (roundel)** | wyraźnie inne (wypełniony krążek vs linia); klimat zakonny (krzyże) | trudniej zrobić 25 *odmiennych* czytelnie w małym polu |
| C | Znaki astronomiczno-alchemiczne | ☉ ☽ ☿ ♂ ♀ ♃ … | bardzo rozpoznawalnie „szyfr/ezoteryka" | lekki anachronizm/ezoteryka; mniej osadzone w temacie Zakonu |

**Rekomendacja: A (gmerki)** — najlepiej spina się z Toruniem i jest łatwe do wygenerowania w 25 wariantach. Prototyp wyrenderuję w stylu A (do podmiany).

---

## PLANNING NOTES (nie dla gracza)

- **Rysunki przedmiotów (kolumny):** 4 ikony SVG (zrobione w `cipher-data.js`) — Gingerbread (serce toruńskie), Sword (miecz), Ladle (chochla), Candle (świeca). Styl brąz/beż, stroke ~2.4px, viewBox 32×32 — spójny z `prototype/icons/` (`feedback_ikony-wektorowe`).
- **Kolory wierszy:** słowo EN + mała próbka barwy (Red/Green/Brown/Black).
- **Brown ↔ opaska G9:** brąz to też kolor grupy G9. Szata Jordana ≠ opaska — oflagować przy kostiumie Piotra, żeby nie myliło.
- **Render:** `tools/z11-cipher/` (HTML + render-z11.ps1, walidacja) → `public/z11-tabela-1-symbole.pdf` (A4). Reuse `parchment.css`. **WYRENDEROWANE [2026-06-02].**
- **Zależność:** S11 (Brown×Ladle) MUSI = etykieta wiersza MARIENBURG w Tabeli 2 (`z11-tabula-recta-draft.md`). Spójność pilnuje `cipher-data.js` (KEY_IDX=10) + walidacja.
