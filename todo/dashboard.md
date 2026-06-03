# 🗺️ Dashboard — Prototyp + MVP (widok jednoekranowy)

> Graficzny przegląd stanu — **jedyne źródło statusów**. Decyzje → `otwarte-pytania.md` · Plan faz → `roadmap.md` · Archiwum (snapshoty, zamknięte decyzje) → `todo/archive/`.
> **Legenda statusów:** ✅ gotowe · 🟡 draft/czeka na review · 🔄 w toku (input zewnętrzny) · ⬜ do zrobienia · 🔒 czeka na decyzję Oskara · 🚶 wymaga wizji lokalnej

---

# CZĘŚĆ I — PROTOTYP (1 ścieżka: tor TR · Z3 + Z4)

**Cel:** kompletny, przechodni stos wydruków dla JEDNEJ ścieżki, gotowy do dry-runu na papierze.

## Łańcuch gry — mapa przepływu

```
                          ┌─────────────────────────────────────────────────────────────────┐
                          │                 TOR MIESZCZAN (TR) — prototyp                    │
                          └─────────────────────────────────────────────────────────────────┘

  START                  FAZA 1                    FAZA 2A         FAZA 2B (Z3=2 koperty)        FINAŁ
   │                       │                          │              │                              │
   ▼                       ▼                          ▼              ▼                              ▼
┌────────────┐  ┌──────┐  ┌──────┐  ┌────────────┐  ┌──────┐  ┌────────────┐  ┌──────┐  ┌──────┐  ┌────────────┐
│poz.1  Z1   │─▶│  Z1  │─▶│  MG  │─▶│poz.2  Z2   │─▶│Jordan│─▶│poz.3  Z3   │─▶│  Z3  │─▶│  Z4  │─▶│poz.6  Z7   │
│wspolne-1   │  │szlak │  │raport│  │miasto-2    │  │(Piotr│  │miasto-3    │  │zamek │  │kalim.│  │miasto-6    │
│  Z1.md     │  │symb. │  │ 4 m. │  │  Z2.md     │  │/Z2b) │  │  Z3.md     │  │lista │  │melo→#│  │  Z7.md     │
└────────────┘  └──────┘  └──────┘  └────────────┘  │hasło │  └────────────┘  │ TR   │  └──────┘  └────────────┘
     🟡          🟡/🔒       ⬜           🟡          │+kolor│        ⬜         │  ↓   │   ⬜🔒          ⬜🔒
                                                       └──────┘                 │poz.4 │
                                                          ✅              ┌──────────────────┐
                                                                          │poz.4  Z3b        │
                                                                          │miasto-4-Z3b.md   │
                                                                          │(Albrecht wręcza) │
                                                                          └──────────────────┘
                                                                               ✅ · raport u MG →
                                                                          poz.5 Z4 [miasto-5-Z4]
                                                                               (opcjonalna; prototyp)
                                                                                    motto Z3 ─┐
                                                                                    (NIE Z4) ─┴─▶ Z7 ─▶ "Jordan=Bażyński"
```
> Numeracja poz. = kolejność otwierania koperty. Spec: `envelopes/README.md` (manifest). Stare nazwy K1–KF: `todo/archive/envelope-map.md`.

## A. Teksty kopert (7)

> Migracja [2026-06-02]: drafty przeniesione z `prototype/k*.md` → `envelopes/` (spec+manifest). Numeracja = kolejność otwierania (wstawka Z3b: opcjonalna→5, finał→6). Mapa starych↔nowych: `todo/archive/envelope-map.md`.

```
✅ poz.1 Z1 — startowa ......... draft gotowy (groźba „ucięcia rąk" + segment Z1)        [envelopes/wspolne-1-Z1.md]
✅ poz.2 Z2 — po Z1 ........... draft gotowy (Z2 Einsteina: Jordan/Piccolo/miecz; zakup-parol=miecz [06-02]; plotki Puli A; slip R.)  [envelopes/miasto-2-Z2.md]
✅ poz.3 Z3 — od Jordana ...... draft gotowy (brief F2B + Z3 zwiad; Z3b osobno)         [envelopes/miasto-3-Z3.md]
✅ poz.4 Z3b — kradzież ....... draft gotowy (2. koperta etapu Z3; narracja + cytat Albrechta)  [envelopes/miasto-4-Z3b.md]
🟡 poz.5 Z4 — melodia/kalimba . draft v2 (SCENA: martwy flisak=R. nad Wisłą, melodia=kod; instrument zatwierdzony) + doubt-beat/rozterka [2026-06-03]  [envelopes/miasto-5-Z4.md]
✅ 06a Z7 finałowy szyfr ...... szyfrogram + rama narracyjna v2 + ramka MG; wyrenderowany + stempel  [materials/props/z7-szyfrogram-draft.md · src/miasto-06a-Z7-list.html]
🟡 poz.6 Z7 — finał .......... draft gotowy (Przedzamcze, dziewiąte bicie, list nieotwarty, maski spadają) + przejście do Albrechta KUSZĄCE [2026-06-03]: kotwica spotkania (Z3) + kuszenie racją + beat motta (Oskar, „jak")  [envelopes/miasto-6-Z7.md]
```

## B. Rekwizyty drukowane (8)

```
✅ List zapieczętowany ........ WYBRANO V1-mute (brak adresata) [2026-06-03] → public/wspolne-1-Z1-list.pdf (2 str.; druk duplex, A6 4-up → wytnij 10).
                                Lico (adres EN) + pieczęć lakowa; faction-neutral. Warianty backup zostają: prototype/sealed-letter/ (v2-sigil/v3-redirected).
                                Regen: render.ps1 -Publish v1
🟡 Wiadomość pośrednika ....... jest w drafcie poz.2 Z2 (slip „— R.") — do wydzielenia  [envelopes/miasto-2-Z2.md]
🟡 Mapa Torunia z glifami ..... HTML istnieje w tools/map-gen/map.html; ⚠ BRAK PDF w public/ — render-map.ps1 do odpalenia; brakuje POI KZ (Biedronka Z10 + Aleja Herbów Z6) w map-data.js
✅ Deszyfrownik (karty) ....... generator tools/z1-decoder/ (derywuje z Z1_GROUPS); 10 PDF public/decoders/ per kolor grupy; walidacja PASS  [tools/z1-decoder/README.md]
🟡 Pergamin z listą nazwisk TR  research gotowy + draft (EN); klucz=Decyzja#1  [materials/props/pergamin-lista-tr-draft.md · puzzles/z3-lista-tr-spec.md]
✅ Zapis melodii Z4 + pręciki . nagranie gotowe; pręciki oznaczone liczbowo (C:1, D:2, …); kod 621454
🟡 Arkusz szyfru Z7 ........... Cezar +7 (nagłówki w tym samym foncie; Z3 jawny ↔ Z7 zaszyfrowane; brak koła)  [materials/props/z7-szyfrogram-draft.md]
✅ Mechanika dostarczenia ..... Przedzamcze 21:00 — list wręczany fizycznie aktorowi (Piotr/Bażyński lub Zosia/Albrecht); wybór fabularny, 1 grupa = 1 głos
```

## C. Skrypty/karty aktorów (2)

```
✅ Skrypt Jordana (Piotr) ..... draft gotowy (weryfikacja + dialog + K3). PART TWO [2026-06-03]: rola celu infiltracji KZ (gra nabranego, karmi/wręcza kupon, daje się obejrzeć — brąz+chochla, NIE daje K3)  [materials/actors/jordan-actor-script-draft.md]
✅ Karta gry Albrechta (Zosia)  draft gotowy (choreografia okna kradzieży + reakcje)   [materials/actors/albrecht-actor-card-draft.md]
```

## D. Dokumenty operacyjne MG (3)

```
🟡 Arkusz śledzenia MG ........ draft gotowy (flow strip, tabela etapów, klucze odpowiedzi, lista rekwizytów)  [materials/ops/mg-tracking-sheet.md]
🟡 Instrukcja MG .............. draft gotowy (fazy, drabinki hintów, protokoły awaryjne)  [materials/ops/mg-runsheet.md]
→MVP Lista przedmiotów ........ co kupić/wydrukować/zdobyć — zakres pełnej gry
```

## E. Domknięcie

```
✅ Pass spójności ............. łańcuch spójny end-to-end; jedyne niedomknięcie = glify Z1 (zależne od mapy)  [todo/archive/pass-spojnosci-prototyp.md]
✅ Dry-run na papierze ........ DONE [2026-06-02]: przejście ścieżki, wnioski → MVP
```

## 🔒 Decyzje Oskara blokujące prototyp (aktualne)

```
┌─ Z1 ──────────── ✅ trasa = Wariant A [2026-06-02]: Piernikarka→osiołek→Krzywa Wieża→Kopernik (4 kroki).
│                  Zostaje (nie-decyzyjne): repropagacja glifów/deszyfrownika (z1-szlak-spec §baner) +
│                  kolizja ☆/⭐ [agent glify]
└─ K8/Z7 ─────────  ✅ ZATWIERDZONE [2026-06-02]: rama narracyjna + meta-instrukcja MG wdrożone
```

> Log zamkniętych decyzji → `todo/archive/decyzje-zamkniete.md` (nie trzymamy changelogu w dashboardzie — git + archiwum).

## 🔄 Przesunięte na MVP

```
Z1 dry-run R3 — Oskar testuje w terenie całe 10 ścieżek z kartami (deszyfrownik G1–G10 + mapa
               wspólna); pomiar czasu/postoju per przystanek. R2 (sightline 6 par + S02) ZROBIONE →
               macierz v3.2 + 10 kart (public/decoders/) + mapa wygenerowane i spójne z map-data.js.
```

## 🖨 Render kopert — ODBLOKOWANY ✅

```
Port prozy v2 → 7 HTML-i WYKONANY [2026-06-02]: markery RENDER-BLOCK usunięte (k1,k2,k2-slip,k3,kZ3b,kZ4,kF),
proza v2 (2. os. „you" + sceny + .mg-note) w HTML, klasa CSS .mg-note dodana. render.ps1 przechodzi —
10 PDF-ów w public/ (v2). To są drafty do REVIEW Oskara, NIE zatwierdzone finały.
Szczegóły: mechanics/koperty-mg.md §ZAŁOŻENIA PRZED RENDEREM · prototype/print/README.md §Staleness guard
```

---
---

# CZĘŚĆ II — MVP (pełna gra · oba tory · 11 zagadek · ~40 osób / 10 grup)

**Cel:** produkcja na realną rozgrywkę. Wszystko z prototypu **× skala + drugi tor + dywersyfikacja**.

## Struktura podwójnego toru

```
                                  ┌──────── K1 (wspólna, nie zdradza frakcji) ────────┐
                                  │                                                    │
                              Z1 szlak ──▶ MG ──▶ K2 ──▶ Z2 ──┐                        │
                                  (różne trasy per grupa)      │                        │
                                                               ▼                        │
                              ┌──────────────── ROZDZIAŁ TORÓW (po Z2) ───────────────┐
                              ▼                                                         ▼
              ┌─────── TOR MIESZCZAN (5 grup) ───────┐         ┌─────── TOR KRZYŻAKÓW (5 grup) ───────┐
              │  Jordan (Piotr) — sojusznik          │         │  Albrecht (Zosia) — żąda dowodu       │
              │  Z3 infiltr. zamku (obowiązkowa)     │         │  Z3Z infiltr. Piccolo (obowiązkowa)  │
              │  + 1 opcjonalna:                     │         │  + 1 opcjonalna:                      │
              │     Z4 kalimba / Z5 piernik / Z6 herby│         │     Z8 kalimba / Z9 piernik / Z10 polichr.
              │  Z7 finał (Cezar+7, „Jordan=Bażyń.") │         │  Z11 finał (BRAK twistu, duma Albrechta)
              └──────────────────┬───────────────────┘         └──────────────────┬───────────────────┘
                                 │                                                  │
                                 └───────────────▶  FINAŁ wspólny (KF)  ◀───────────┘
                                       Bażyński vs Albrecht · wolny wybór dostawy · 1 grupa = 1 głos
```

## Co dochodzi względem prototypu

### 🟦 Drugi tor (krzyżacki) — lustro

> **STAN [2026-06-03]:** Treść kopert KZ ISTNIEJE — wszystkie drafty napisane. **Realna luka = brak renderów HTML → PDF** (5 kopert bez pliku HTML w `prototype/print/src/`). Kolejność: review Oskara → HTML → render → public/.

```
🟡 K2-K (wersja krzyżacka) ...... draft v2 [2026-06-03]: rama (N. + Pula B) + zagadka Z2 (routing A; parol „Komtur's seal"). Cel Albrecht JAWNY. Zostaje: review Oskara + glify ⟨mark⟩ + HTML render  [envelopes/krzyzacy-2-Z2.md]
                                 ⚠ BRAK HTML → BRAK PDF (5 kolorów KZ do wyrenderowania)
🟡 Skrypt Albrechta (Zosia) F2A . handler KZ DOPISANY [2026-06-03] jako PART TWO karty  [materials/actors/albrecht-actor-card-draft.md PART TWO]
🟡 Z3Z — infiltracja Piccolo .... draft v2 [2026-06-03]: obserwacja (kolor+chochla→Z11), cover=udawanie TR, kupon, plotki B7/B8/B9. Jednokopertowe. Zostaje: review Oskara + HTML render  [envelopes/krzyzacy-3-Z3Z.md]
                                 ⚠ BRAK HTML → BRAK PDF (5 kolorów KZ do wyrenderowania)
🟡 Z8 — melodia zakonu .......... draft v2 [2026-06-03]: kalimba, kod 621454, klimat zakonny + doubt-beat. Zostaje: review Oskara + HTML render  [envelopes/krzyzacy-4-Z8.md]
                                 ⚠ BRAK HTML → BRAK PDF (G6 niebieski + G7 fioletowy)
🟡 Z9 — sensoryczna piernik ..... brief v3 [2026-06-03]: dwa kanały krytyki Zakonu; rekwizyty wyrenderowane [2026-06-02] (public/krzyzacy-bialy-4-Z9.pdf + z5z9-* + mg-Z5Z9-klucz). ⚠ tekst zmieniony po renderze → re-render po review. Zostaje: review Oskara  [envelopes/krzyzacy-4-Z9.md]
🟡 Z10 — polichromie Biedronka .. draft v1 [2026-06-03]: leaf 8 bestii A–H, klucz A/B/E; doubt-beat. Zostaje: review Oskara + spot-check A/B/E in loco + HTML render  [envelopes/krzyzacy-4-Z10.md]
                                 ⚠ BRAK HTML → BRAK PDF (G9 brązowy + G10 czarny)
🟡 Z11 — finał krzyżaków ........ koperta gracza draft [2026-06-03]: brama = motto Zakonu (odszyfrowane przez tabelę 1 + tabula recta), wolny wybór dostawy, BRAK twistu. Zostaje: review Oskara + HTML render  [envelopes/krzyzacy-5-Z11.md]
                                 ⚠ BRAK HTML → BRAK PDF (5 kolorów KZ do wyrenderowania)
✅ Tabela 1 (lookup) KZ ......... wyrenderowana × 5 kolorów KZ  [public/krzyzacy-*-5-Z11-tabela-symbole.pdf · tools/z11-cipher/]
✅ Tabela 2 (tabula recta) KZ ... wyrenderowana × 5 kolorów KZ  [public/krzyzacy-*-5-Z11-tabela-recta.pdf]
   ⬜ Otwarte do Z11: styl symboli (gmerki robocze) · dystrybucja Tabeli 2 (spec §8)
```

### 🟩 Pozostałe opcjonalne TR

```
🟡 Z5 — sensoryczna z piernikiem  spec+draft gotowe; brief + 3 wspólne rekwizyty (przepis/etykiety/rozpiska) + klucz MG wyrenderowane [2026-06-02]
                                 (public/miasto-5-Z5.pdf · z5z9-przepis/etykiety/rozpiska.pdf · mg-Z5Z9-klucz.pdf — 1 zestaw słojów obsługuje Z5+Z9);
                                 zostaje: review Oskara + klucz finału (#9)
🟡 Z6 — herby hanzeatyckie ...... mechanika Piotra + koperta gracza draft v1 [2026-06-03]: dopasowanie
                                 nadawca↔odbiorca (5 posłów Związku Pruskiego → 4 dotarły: Hamburg/Kolonia/Lubeka×2;
                                 nadawca bez pary = nie dotarło). KLUCZ = Chełmno ✅. Reguła wprost, kanał A (A4 herby/
                                 turnieje) + doubt-beat; lokalizacja = ul. Szeroka; nazwy gracza = z bruku (PL). Zostaje:
                                 review Oskara + spot-check tarcz in loco + karta-rekwizyt do produkcji
                                 [envelopes/miasto-5-Z6.md · puzzles/herby-aleja.md]
```

### 🟨 Dywersyfikacja (10 grup)

```
🟡 Różne trasy Z1 per grupa ..... macierz v3.2 (10 łańcuchów) + mapa wspólna + deszyfrowniki 10 (public/decoders/) GOTOWE; zostaje dry-run R3 w terenie
⬜ Miejscówki zadań KZ na mapie . PO ustaleniu ścieżek krzyżaków → nanieść POI zadań KZ na mapę do druku.
                                 Nowe: „Biedronka" (Z10 polichromie). Piccolo (Z3Z) już jest. Z8 (kalimba)/Z9
                                 (piernik) = rekwizyt wydawany przez MG, bez POI. [poboczne TR: Aleja Herbów (ul. Szeroka)
                                 dla Z6 też brak na mapie]. Edycja: tools/map-gen/map-data.js
⬜ Tabele przydziału zestawów ... A/B/C × 2 tory (patrz concept/03 — model 5+5)
✅ Mechanika klucza 2B→finał .... ROZSTRZYGNIĘTE [2026-06-03, Oskar]: odpowiedź do MG → koperta finałowa; wymienialność 1:1 (#27b)
```

### 🟧 Produkcja ilościowa

```
⬜ 10–40 kopii kopert ........... druk całego stosu × liczba grup
⬜ Stylizacja manuskryptowa ..... pergamin, kaligrafia, UnifrakturMaguntia, wosk, pieczęć
⬜ Kostiumy 2 aktorów ........... chochla (Jordan, przykrywka) + płaszcz/krzyż (Albrecht)
⬜ Rekwizyty × ilość ............ 1–2× kalimba, 1–2× zestaw sensoryczny, mapy/szyfrowniki, 1× miecz (zakup Z2 = broń finału Bażyńskiego)
```

### 🌐 Lokalizacja językowa — aktorzy/MG = PL (decyzja #70)

```
✅ Tłumaczenie EN→PL ............ ZROBIONE [2026-06-03]: materials/actors/ (jordan, albrecht) +
                                 materials/ops/ (mg-runsheet, mg-tracking, mg-group-cards,
                                 mg-master-board, mg-quick-hints, shopping-list) przełożone na PL.
                                 Wyjątek zachowany: cytaty treści zagadek / odpowiedzi gracza =
                                 EN (kody, parole, ciphertext, kwestie aktorów do graczy).
                                 materials/props/ (pergamin, szyfrogram) = EN (gracz) — bez zmian.
                                 ⚠ Do weryfikacji ręcznej: ramki ASCII (║) mogą być nierówne (PL ≠ EN
                                 długość); koperty-kody-lista.html/.pdf = artefakty pochodne, niegen.
⬜ Skalowanie ops/actors ........ zweryfikowane [2026-06-02]: mg-runsheet/shopping-list nadal w zakresie
                                 „prototype only — single TR path". MVP: rozszerzyć na OBA tory + 10 grup
                                 (tracking/master-board/group-cards × 10; runsheet z fazą KZ). Idzie w parze
                                 z tłumaczeniem (przepisuj od razu na PL).
```

### 🟥 Logistyka dnia gry

```
✅ Harmonogram fal grup ......... [#] bez formalnego harmonogramu — Oskar zarządza kolejką na żywo (mała grupa)
✅ Formularz zapisów ............ [#39] bez znaczenia — gra dla znajomych, brak rejestracji
✅ Komunikacja awaryjna ......... [#41] bez znaczenia — MG mobilny na Rynku
✅ Lokalizacje MG w fazach ...... [#36] MG mobilny wokół Rynku Staromiejskiego (F1–F3); finał=Przedzamcze
✅ Dźwięk dzwonu finału ......... [#49] bez rekwizytu — „dziewiąte bicie" tylko narracyjnie (znacznik czasu)
⬜ Scenka aktorska finału ....... Bażyński vs Albrecht, warianty wg wyniku (treść = Oskar)
✅ Mechanika zliczania głosów ... [#50] Jordan i Albrecht liczą odebrane listy tuż przed scenką (Wariant B)
```

## ✅ Decyzje strategiczne — ROZSTRZYGNIĘTE [2026-06-03, Oskar]

```
#3  Data rozgrywki ......... DZISIAJ (2026-06-03); druk na miejscu
#6  Mapa + szyfrownik ...... mapa WSPÓLNA (identyczna dla wszystkich); deszyfrownik PER DRUŻYNA (10 różnych, nie per frakcja)
#15 Brak dostawy listu ..... nie liczony, neutralnie, bez kary (nie wariant 3)
#59 Budżet ................. druk domowy w dniu gry; brak osobnej produkcji; aktorzy=znajomi
#51-55 Naginki ............. pokryte kanonem (Piccolo tak / kalimba tak / Tuba Dei nie / zakończenie=hybryda #16)
```

```
WCIĄŻ OTWARTE (nieblokujące):
#1  Tytuł gry — ROZSTRZYGNIĘTE [2026-06-03]: „Gra Miejska"
#24 Rename „Aleja Gmerków"→„Aleja Herbów" — ROZSTRZYGNIĘTE [2026-06-03]: wszystkie pliki planistyczne zaktualizowane.
#27b Klucz 2B→finał — ROZSTRZYGNIĘTE [2026-06-03]: brak osobnego klucza/itemu; odpowiedź do MG → koperta finałowa (Z7/Z11); wymienialność 1:1
```

---

## 📊 Pasek postępu

```
PROTOTYP   ████████████████████  ZAMKNIĘTY [2026-06-02] — wszystko wyrenderowane; review przesunięty do MVP (decyzja Oskara)
MVP treść  ████████████████░░░░  ~80%   (wszystkie koperty TR + KZ mają drafty; czeka review Oskara)
MVP rendery████████████████████  100%   ✅ GOTOWE [2026-06-03] — TR + KZ + mapy + wszystkie HTML-e wyrenderowane
MVP całość █████░░░░░░░░░░░░░░░  ~25%   (review + rendery + ops-skalowanie + produkcja przed nami)
```

> **Wąskie gardło [2026-06-03]:** **review Oskara** (treści kopert KZ/Z6) → publikacja → ops-skalowanie (runsheet/tracking na 10 grup).

## 🎯 Następny krok krytyczny

```
✅ MVP Phase A — decyzje strategiczne ROZSTRZYGNIĘTE [2026-06-03]
✅ MVP Phase B — treść tor KZ + opcjonalne TR — NAPISANE [2026-06-03]
✅ MVP Phase C — HTML-rendery + mapa — GOTOWE [2026-06-03] (wszystkie PDF-y w public/)
► MVP Phase D — review Oskara (treści kopert KZ/Z6) → publikacja (usunąć spoilery z galerii)
► MVP Phase E (równolegle) — ops-skalowanie (runsheet/tracking na oba tory + 10 grup) + scenka finałowa (Oskar)
```
