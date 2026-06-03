# Instrukcja druku — co kolorem, co czarno-białe

> Dokument dla Oskara/MG (PL). Generowany ręcznie — **nie** trafia do galerii (galeria bierze tylko PDF/PNG/audio).
> Konwencja nazw plików: `CLAUDE.md §KONWENCJA NAZW public/` + `envelopes/README.md §Systematyka nazw`.

## Zasada nadrzędna

**Domyślnie wszystko drukujemy CZARNO-BIAŁO.** Gra jest celowo monochromatyczno-funkcjonalna: nawigacja idzie po **glifach** (nie kolorach), szyfry i piernik są bezbarwne, a tam gdzie pojawia się kolor grupy — niesie go **nazwa tekstem** (deszyfrownik, tabela Z11), więc przeżywa skalę szarości.

Kolor zostawiamy tam, gdzie **realnie coś wnosi**: albo kolor **jest** zagadką, albo przyspiesza pracę operatorom. Budżet: max ~2–3 rzeczy kolorem na ekipę, ~20–30 „przedmiotów" kolorowych łącznie (gracze) + ściągawki operatorów.

## Jak czytać nazwę pliku (do pakowania)

```
miasto-zolty-3-Z3.pdf
└┬───┘ └─┬─┘ │ └┬┘
frakcja kolor nr  zadanie     → koperta nr 3 ścieżki MIASTA, grupa ŻÓŁTA (G3)
```

Prefiks mówi, dla kogo: `wspolne-`/`miasto-`/`krzyzacy-` = gracz · `mg-` = Mistrz Gry · `aktor-jordan-`/`aktor-albrecht-` = aktorzy. Pionowy blady stempel na brzegu kartki gracza (`m03-zolty`) = ta sama informacja, do sortowania luźnych wydruków.

---

## 1) KOLOR WYMAGANY — bez koloru zagadka/funkcja nie działa

| Pozycja | Pliki | Dlaczego kolor jest konieczny | Status |
|---|---|---|---|
| **Opaski grup + znaczniki na koperty** | (papier kolorowy / naklejki, nie PDF) | Kolor **jest** tożsamością grupy — gracz nosi opaskę, koperta ma kropkę koloru. 10 grup. | do przygotowania |
| **Z6 — herby hanzeatyckie** | `miasto-{zielony,turkusowy}-5-Z6-*` (G4, G5) | Herby rozróżnia się po **barwach heraldycznych** (tynktury) — B&W zlewa je. | ⏳ placeholder (jeszcze nie zbudowane) |
| **Z10 — polichromie „Pod Biedronką"** | `krzyzacy-{brazowy,czarny}-4-Z10-*` (G9, G10) | Zagadka oparta na **kolorach malowidła** — B&W ją zabija. | ⏳ placeholder |

> Razem „kolor wymagany" gracza: **4 karty** (Z6×2 + Z10×2), gdy powstaną. Opaski/znaczniki = kolor z natury (papier), poza budżetem druku.

## 2) KOLOR ZALECANY — działa w B&W, ale kolor daje realną korzyść

| Pliki | Co daje kolor | Decyzja |
|---|---|---|
| **Deszyfrowniki** `wspolne-{kolor}-1-Z1-deszyfrownik` ×10 | Rożek koloru = **błyskawiczna identyfikacja grupy** przy sortowaniu 10 stosów kopert. Największy zysk praktyczny. (B&W fallback: wydrukowana nazwa koloru.) | **KOLOR — rekomendacja** (1/ekipa = 10 szt.) |
| **Karty meta** (ciekawostki autorskie) | Akcent wizualny, „nagroda" za etap. | opcjonalnie, jeśli zostaje budżet |
| **Mapa** `wspolne-{kolor}-1-Z1-mapa` | Ton pergaminu/relief ładniejszy w kolorze; do czytania glifów B&W wystarcza. | B&W OK (kolor = luksus) |

## 3) KOLOR WYMAGANY — materiały operatorów (znaczenie / czytelność na żywo)

Oskar: aktorzy i MG mają mieć **kolorki do zaznaczania** statusów/grup na żywo.

| Pliki | Adresat |
|---|---|
| `aktor-jordan-quick-ref`, `aktor-albrecht-quick-ref` | aktorzy (Piotr, Zosia) |
| `mg-karty-grup`, `mg-tablica-statusow`, `mg-szybkie-podpowiedzi` | MG — tracking 10 grup |
| `mg-Z3Z7-klucz`, `mg-Z5Z9-klucz`, `mg-Z1-mapa` | MG — klucze odpowiedzi |

> Razem operatorzy: **8 arkuszy** kolorem (poza budżetem gracza).

## 4) CZARNO-BIAŁE — cała reszta (domyślnie)

- **Wszystkie briefy** gracza: `wspolne-*`, `miasto-*`, `krzyzacy-*` (pergamin monochromatyczny).
- **Rekwizyty tekstowe**: `*-slip`, `*-pergamin`, `*-list` (szyfr Z7).
- **Piernik**: `*-Z5-przepis`, `*-Z5-rozpiska`, `*-Z9-*` — zagadka węchowa, kolor nieistotny.
- **Tabele Z11**: `krzyzacy-*-5-Z11-tabela-*` — kolor opisany **nazwą** (Red/Brown…), więc B&W bezpieczne.

---

## Budżet — podsumowanie

| Kategoria | Kolorem | W ramach budżetu Oskara |
|---|---|---|
| Gracz — kolor wymagany (Z6, Z10) | 4 (gdy powstaną) | tak |
| Gracz — kolor zalecany (deszyfrowniki) | 10 (1/ekipa) | tak (≈14/30) |
| Operatorzy (aktorzy + MG) | 8 | osobno (Oskar zażyczył) |
| **Reszta** | **B&W** | — |

**~14 kart gracza kolorem** (z marginesem do ~30, jeśli chcesz dorzucić np. 1 kartę meta/ekipę) + **8 arkuszy operatorów**. Mieści się w „2–3 kolorowe rzeczy na ekipę".

## Uwaga — objętość „per grupa"

Każdy plik gracza istnieje w 5–10 kopiach (po jednej na grupę), różniących się tylko stemplem. To świadomy wybór (1 plik ↔ 1 koperta przy pakowaniu), ale `public/` puchnie (np. 10× mapa ≈ 28 MB). Jeśli kiedyś będzie nie do uniesienia — można wrócić do modelu „jeden master + stempel przy druku" (patrz `envelopes/README.md §Systematyka nazw`, wariant odrzucony 2026-06-03).
