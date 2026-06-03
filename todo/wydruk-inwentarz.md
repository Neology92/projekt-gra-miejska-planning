# 🖨 Inwentarz wydruku — wszystkie materiały + czeklisty ręczne

> **Co to:** jeden przegląd **wszystkiego, co trafia do ostatecznego wydruku** (oba tory: TR mieszczanie G1–G5, KZ krzyżacy G6–G10; zagadki Z1–Z11; finały Z7/Z11). Tabela u góry = warstwy gotowości każdego materiału. Pod tabelą = **ręczne czeklisty per dokument** (sprawdzenia wymagające oceny człowieka — NIE automatyczne).
>
> **Stosunek do `todo/dashboard.md`:** dashboard = żywy status prac (co robimy dalej). Ten plik = **widok gotowości-do-druku** (czy plik realnie istnieje, czy jest render, czy przeszedł review). Przy rozbieżności statusu „w toku" wygrywa dashboard; przy pytaniu „czy jest plik / render" wygrywa ten plik (oparty na realnym `ls`, stan 2026-06-03).
> **Auto-checki (grep/skrypt):** osobny plik → `todo/wydruk-auto-checki.md`.

## Legenda warstw gotowości

Każdy materiał przechodzi przez warstwy — kolumny tabeli pokazują, jak daleko dotarł:

| Warstwa | Znaczenie |
|---|---|
| **Plan** | jest decyzja/miejsce w manifeście, że ten materiał ma powstać |
| **Draft** | istnieje plik źródłowy z treścią (`.md` / `.html`); `🟡` = draft v2 / niedomknięty element |
| **Render** | istnieje gotowy plik do druku w `public/` (PDF/PNG) |
| **Review** | Oskar przejrzał i zaakceptował **finalną** wersję (treść + wygląd) |

Symbole: `✅` zrobione · `🟡` częściowe/draft · `⬜` do zrobienia · `—` nie dotyczy · `❌` brak pliku mimo że manifest go wymienia.

> ⚠ **Render ≠ Review.** Prawie wszystko z prototypu jest **wyrenderowane, ale niezreviewowane** — review przesunięty do MVP (decyzja Oskara, `dashboard.md`). Render to drafty PDF, nie zatwierdzone finały.

---

## A. Koperty gracza (briefy) — `envelopes/`

| Materiał (plik) | Frakcja | Zadanie | Adresat | Plan | Draft | Render (public/) | Review |
|---|---|---|---|:--:|:--:|:--:|:--:|
| `wspolne-1-Z1.md` | wspólne | Z1 | gracz EN | ✅ | ✅ | ✅ `wspolne-1-Z1.pdf` | ⬜ |
| `miasto-2-Z2.md` | TR | Z2 | gracz EN | ✅ | ✅ glify wstawione [06-03] | 🟡 `miasto-2-Z2.pdf` do re-renderu (po glifach) | ⬜ |
| `miasto-3-Z3.md` | TR | Z3 | gracz EN | ✅ | ✅ | ✅ `miasto-3-Z3.pdf` | ⬜ |
| `miasto-4-Z3b.md` | TR | Z3 (2. koperta) | gracz EN | ✅ | ✅ | ✅ `miasto-4-Z3b.pdf` | ⬜ |
| `miasto-5-Z4.md` | TR | Z4 (opc. A) | gracz EN | ✅ | 🟡 v2 | ✅ `miasto-5-Z4.pdf` | ⬜ |
| `miasto-5-Z5.md` | TR | Z5 (opc. B) | gracz EN | ✅ | ✅ | ✅ `miasto-5-Z5.pdf` | ⬜ |
| `miasto-5-Z6` (herby) | TR | Z6 (opc. C) | gracz EN | ✅ | ❌ brak pliku (README mówi „placeholder", pliku nie ma) | ⬜ | ⬜ |
| `miasto-6-Z7.md` | TR | Z7 / finał | gracz EN | ✅ | ✅ | ✅ `miasto-6-Z7.pdf` | ⬜ |
| `krzyzacy-2-Z2.md` | KZ | Z2 | gracz EN | ✅ | ✅ (nowy 2026-06-03) | ⬜ | ⬜ |
| `krzyzacy-3-Z3Z` | KZ | Z3Z | gracz EN | ✅ | ❌ brak pliku (tylko meta-kartka) | ⬜ | ⬜ |
| `krzyzacy-4-Z8.md` | KZ | Z8 (opc.) | gracz EN | ✅ | 🟡 draft | ⬜ | ⬜ |
| `krzyzacy-4-Z9.md` | KZ | Z9 (opc.) | gracz EN | ✅ | ✅ | ✅ `krzyzacy-4-Z9.pdf` | ⬜ |
| `krzyzacy-4-Z10` (polichromie) | KZ | Z10 (opc.) | gracz EN | ✅ | ❌ brak pliku (tylko meta-kartka) | ⬜ | ⬜ |
| `krzyzacy-5-Z11.md` | KZ | Z11 / finał | gracz EN | ✅ | ✅ (nowy 2026-06-03) | ⬜ | ⬜ |

## B. Rekwizyty drukowane (player-facing) — `materials/props/` + `prototype/print/src/`

| Materiał | Frakcja | Zadanie | Plan | Draft (źródło) | Render (public/) | Review |
|---|---|---|:--:|:--:|:--:|:--:|
| Mapa Torunia (gracz) | wspólne | Z1 | ✅ | ✅ `tools/map-gen/map.html` | ✅ `maps/map.pdf`+`.png` | ⬜ |
| Deszyfrowniki G1–G10 (10 szt.) | wspólne | Z1 | ✅ | ✅ `tools/z1-decoder/` | ✅ `decoders/decoder-G1..G10.pdf` | ⬜ |
| Slip „— R." (wkładka Z2) | TR | Z2 | ✅ | ✅ `…/miasto-2-Z2-slip.html` | ✅ `miasto-2-Z2-slip.pdf` | ⬜ |
| Pergamin — lista TR (łup Z3b) | TR | Z3 | ✅ | ✅ `pergamin-lista-tr-draft.md` | ✅ `miasto-04b-Z3-pergamin.pdf` | ⬜ |
| Szyfrogram Z7 (Cezar +7) | TR | Z7 | ✅ | ✅ `z7-szyfrogram-draft.md` | ✅ `miasto-06a-Z7-list.pdf` | ⬜ |
| Stacja Z5/Z9 — przepis | wspólne | Z5+Z9 | ✅ | ✅ `…/z5z9-przepis.html` | ✅ `z5z9-przepis.pdf` | ⬜ |
| Stacja Z5/Z9 — etykiety słojów | wspólne | Z5+Z9 | ✅ | ✅ | ✅ `z5z9-etykiety.pdf` | ⬜ |
| Stacja Z5/Z9 — rozpiska (blank) | wspólne | Z5+Z9 | ✅ | ✅ | ✅ `z5z9-rozpiska.pdf` | ⬜ |
| Tabela 1 — symbole (lookup) | KZ | Z11 | ✅ | ✅ `z11-tabela-symboli-draft.md` | ✅ `z11-tabela-1-symbole.pdf` | ⬜ |
| Tabela 2 — tabula recta | KZ | Z11 | ✅ | ✅ `z11-tabula-recta-draft.md` | ✅ `z11-tabela-2-tabula-recta.pdf` | ⬜ |
| Melodia Z4/Z8 (audio) | TR+KZ | Z4/Z8 | ✅ | — (nagranie) | ✅ `z4-song-loop.mp3` | ⬜ |
| Kalimba + pręciki numerowane | TR+KZ | Z4/Z8 | ✅ | — (rekwizyt fizyczny) | — | ⬜ |
| Zapieczętowany list (noszony całą grę) | wspólne | Z1→finał | ✅ | ❌ brak treści/pliku | ⬜ | ⬜ |
| Slip Pula B (wkładka Z2 KZ) | KZ | Z2 | ✅ | ❌ brak pliku (w `krzyzacy-2-Z2.md` jako „N." — do wydzielenia) | ⬜ | ⬜ |
| Karta herbów hanzeatyckich | TR | Z6 | ✅ | ❌ brak (grafiki u Piotra, poza repo) | ⬜ | ⬜ |
| Polichromie Biedronka (grafiki) | KZ | Z10 | ✅ | ❌ brak w repo (grafiki u Piotra) | ⬜ | ⬜ |
| Szyfrogram Z11 (jako rekwizyt finału) | KZ | Z11 | ✅ | 🟡 treść w `krzyzacy-5-Z11.md`; brak osobnego renderu-listu | ⬜ | ⬜ |

## C. Skrypty / karty aktorów — `materials/actors/` (PL docelowo)

| Materiał | Rola | Plan | Draft | Render | Review | PL? |
|---|---|:--:|:--:|:--:|:--:|:--:|
| `jordan-actor-script-draft.md` | Jordan/Piotr — handler TR, cel KZ | ✅ | ✅ (EN) | ✅ `archive/…/jordan-quick-ref.pdf` | ⬜ | ⬜ EN→PL |
| `albrecht-actor-card-draft.md` | Albrecht/Zosia — handler KZ, cel TR | ✅ | ✅ (EN) | ✅ `archive/…/albrecht-quick-ref.pdf` | ⬜ | ⬜ EN→PL |

## D. Dokumenty operacyjne MG — `materials/ops/` (PL docelowo)

| Materiał | Plan | Draft | Render | Review | PL? |
|---|:--:|:--:|:--:|:--:|:--:|
| `mg-runsheet.md` (instrukcja MG) | ✅ | ✅ (EN) | ⬜ (brak PDF) | ⬜ | ⬜ EN→PL |
| `mg-tracking-sheet.md` (śledzenie) | ✅ | ✅ (EN) | ⬜ (brak PDF) | ⬜ | ⬜ EN→PL |
| `mg-master-board.md` (tablica statusów) | ✅ | ✅ (EN) | ✅ `archive/…/mg-tablica-statusow.pdf` | ⬜ | ⬜ EN→PL |
| `mg-quick-hints.md` (podpowiedzi) | ✅ | ✅ (EN) | ✅ `archive/…/mg-szybkie-podpowiedzi.pdf` | ⬜ | ⬜ EN→PL |
| `mg-group-cards.md` (karty grup ×10) | ✅ | ✅ (EN) | ✅ `archive/…/mg-karty-grup.pdf` | ⬜ | ⬜ EN→PL |
| `shopping-list.md` (lista zakupów) | ✅ | 🟡 (zakres prototypu) | ⬜ | ⬜ | ⬜ EN→PL |
| `koperty-kody-lista.md` (kody 65 kopert) | ✅ | ✅ (PL) | ✅ `ops/koperty-kody-lista.pdf` | ⬜ | ✅ PL |
| `koperty-rozpiska.md` (zawartość kopert) | ✅ | ✅ (PL) | ⬜ | ⬜ | ✅ PL |

## E. Mapy / klucze szyfrów MG (nie dla gracza) — `public/` + `tools/`

| Materiał | Zadanie | Plan | Draft | Render | Review |
|---|---|:--:|:--:|:--:|:--:|
| Mapa MG z kluczem | Z1 | ✅ | ✅ `tools/map-gen/gm-key.html` | ✅ `maps/map-mg.pdf`+`.png` | ⬜ |
| Klucz MG Z3+Z7 (Cezar +7) | Z3/Z7 | ✅ | ✅ | ✅ `mg-Z3Z7-klucz.pdf` | ⬜ |
| Klucz MG Z5+Z9 (słoje) | Z5/Z9 | ✅ | ✅ | ✅ `mg-Z5Z9-klucz.pdf` | ⬜ |
| Klucz MG Z11 (parol + mapowanie) | Z11 | ✅ | 🟡 dane w `cipher-data.js`; brak osobnego PDF | ⬜ | ⬜ |
| Klucz MG Z4/Z8 (kod 621454) | Z4/Z8 | ✅ | 🟡 w `mg-runsheet`/`kalimba.md`; brak osobnego PDF | ⬜ | ⬜ |
| Klucz MG Z6 / Z10 | Z6/Z10 | ✅ | ❌ brak | ⬜ | ⬜ |

---

## Największe luki (czysty plan — brak pliku)

1. **Tor KZ — brakujące koperty gracza:** `krzyzacy-3-Z3Z`, `krzyzacy-4-Z10` (oraz `miasto-5-Z6` na torze TR). Mechanika Z3Z ma otwarte pytania projektowe → bloker treści MVP-KZ.
2. **Wersje PL** wszystkich aktorów + dokumentów MG (dziś EN).
3. **Zapieczętowany list** (rekwizyt niesiony całą grę) — brak treści.
4. **Karta herbów Z6 / polichromie Z10** — grafiki u Piotra, poza repo.
5. **Klucze MG Z4/Z8, Z6/Z10, Z11** jako osobne PDF — dane istnieją, brak renderu do torby MG.
6. **Slip Pula B** (KZ, analog slipu „— R.") — do wydzielenia z `krzyzacy-2-Z2.md`.

---
---

# CZEKLISTY RĘCZNE (per dokument) — sprawdzenia wymagające oceny

> Te checki **NIE są automatyczne** (wymagają oceny człowieka: rozwiązywalność zagadki, ton, autentyczność, czytelność druku). Auto-checki (fakty, nazwy, zakazane stringi) → `todo/wydruk-auto-checki.md`. Sprawdzaj dokument przy review/przed drukiem.

## Wspólne dla WSZYSTKICH kopert gracza

- [ ] **Instrukcja zadania jest wprost** — gracz wie, CO ma zrobić, bez łopatologii. (Audyt: większość ✅; patrz wyjątki niżej.)
- [ ] **Ramka „↪ TO THE GAME MASTER"** obecna, jeśli z zagadki wraca się z czymś do MG — i mówi, że MG **wręczy kolejne zadanie**.
- [x] **Ramka MG podaje GDZIE czeka MG** — DODANE [06-03]: „the Game Master, who keeps to the Rynek Staromiejski (the Old Town market square)" we wszystkich ramkach. *(zostaje: ew. zróżnicowanie po fazach w `mg-runsheet` — dziś MG „krąży po rynku" globalnie)*
- [ ] **Rejestry głosu** zgodne z `mechanics/koperty-mg.md`: kursywa=głowa (2. os. „you"), roman=słowa świata, ramka=meta MG.
- [ ] **Stempel** `__STAMP__` w źródle HTML (nie hardkod); render `-Color` podmienia.
- [ ] **Nazwa miasta** = wyłącznie „Toruń" (reguła C4; zamiana wdrożona 06-03).

### `wspolne-1-Z1.md`
- [ ] **Glif startowy** w tekście (`△`) zgadza się z realnym **pierwszym glifem łańcucha danej grupy** na mapie (różny per grupa — `puzzles/z1-10-sciezek.md`). Dziś placeholder.
- [ ] **„exactly four steps"** zgadza się z realną długością łańcucha (4 kroki — Wariant A).
- [ ] W kopercie fizycznie są: mapa + deszyfrownik (per kolor) + zapieczętowany list + opaska koloru.
- [ ] Groźba „with their hands" — ton zatwierdzony (krótki, medievalny).
- [x] **Graficzna pieczęć zlecenia** — DODANA [06-03] do `wspolne-1-Z1.html` (nieznany sygil, B/W-safe, koniec arkusza 1). ⚠ do oceny wizualnej po re-renderze.

### `miasto-2-Z2.md` ⚠ najwięcej do sprawdzenia
- [ ] **Zagadka logiczna ma JEDNOZNACZNE rozwiązanie** (Jordan=Piccolo=miecz). Re-weryfikacja po każdej zmianie nazw/atrybutów (`puzzles/droga-do-jordana.md`).
- [x] **Trzy znaki miejsc wpisane** [06-03]: Piccolo = **≡** (L01, te same współrzędne); Młyn = **✚**, Kuźnia = **⊥** (dystraktory spoza alfabetu mapy). `.md` + `miasto-2-Z2.html` (inline-SVG). ⚠ do re-renderu.
- [ ] **Instrukcja nawigacyjna**: „tylko jeden z tych znaków jest na twojej mapie — tam idziesz" — obecna (jest, linia 54).
- [ ] **Brak ramki MG = celowe** (gracz idzie do Jordana, nie do MG) — ale ciągłość do następnego etapu jasna (przez slip R. + skrypt Jordana).
- [ ] **Hasło dnia** („kupił dziś rano miecz") spięte 1:1 ze skryptem Jordana (`jordan-actor-script`).
- [ ] Imiona okresowe: „Kordian" anachroniczny — do podmiany przy period-themingu (tylko „Jordan" kanoniczny).

### `miasto-3-Z3.md`
- [ ] Instrukcja infiltracji jasna (przebranie, „draw him out").
- [ ] **Brak checkpointu MG tutaj = celowe** — raport dopiero po Z3b. Zweryfikować, że `mg-runsheet.md` to odnotowuje (żeby MG nie czekał na grupę po Z3).
- [ ] Klamra masek (callback z Z1).

### `miasto-4-Z3b.md`
- [ ] Ramka MG ✅ — sprawdzić, czy mówi o wręczeniu kolejnego zadania (mówi „what comes next is waiting there").
- [ ] Pergamin (łup) zgodny z `z3-lista-tr-spec.md`; wpis #1 „chairman" zasiewa finał Z7.

### `miasto-5-Z4.md`
- [ ] **Kod 621454** round-trip z zapisem melodii (pręciki numerowane).
- [ ] Instrument = kalimba (zatwierdzony); R. = martwy flisak (payoff klamry z Z2).
- [ ] Ramka MG ✅ („what R. hid will be given to you").

### `miasto-5-Z5.md`
- [ ] 7 słojów + przepis + zmyłkowe nazwy spójne ze stacją (`z5z9-*`) i kluczem MG (`mg-Z5Z9-klucz`).
- [ ] Ramka MG ✅; **hak nagrody** doprecyzować po decyzji #9 (co konkretnie gracz dostaje).

### `miasto-6-Z7.md` (KF, finał TR)
- [ ] **Czysta scena, bez nadawcy/podpisu** (zasada „koperta=scena").
- [ ] Wolny wybór strony — neutralny, bez oceny.
- [ ] Ósme bicie = 20:30; nie „Tuba Dei"; Przedzamcze (realna nazwa).
- [ ] Reveal „Jordan = Hans von Baysen" — domknięcie, nie nowe zaskoczenie.

### `krzyzacy-2-Z2.md` (nowy)
- [ ] Lustro `miasto-2-Z2`, ale cel = **Albrecht**, nie Jordan; Pula B plotek (krytyka Zakonu).
- [ ] Zagadka logiczna ma jednoznaczne rozwiązanie (własna trójka, NIE kopia TR).
- [ ] **Trop celu inny niż TR** (nie „chairman Rady" — parol do komtura).
- [ ] Pośrednik „N." (nie „R.") — spójność z resztą toru KZ.
- [ ] Glify miejsc: jeden realny (cel KZ na mapie) + dwa dystraktory.

### `krzyzacy-4-Z8.md`
- [ ] Lustro Z4: kod 621454, kalimba, klimat zakonny.
- [ ] **TONE FLAG**: gorycz vs lojalność (decyzja Oskara).
- [ ] Klucz finału Z11 (co wydaje MG) — doprecyzować.

### `krzyzacy-4-Z9.md`
- [ ] Lustro Z5; ten sam zestaw słojów (1 zestaw obsługuje Z5+Z9).
- [ ] Klucz finału Z11 — doprecyzować.
- [ ] Ramka MG ✅.

### `krzyzacy-5-Z11.md` (nowy, finał KZ)
- [ ] Szyfrogram = **motto Zakonu** (nie „Jordan=Bażyński" — KZ bez twistu tożsamości).
- [ ] Tabula recta: klucz = **MARIENBURG**; round-trip parolu PASS.
- [ ] Symbol-klucz: **Brown × Ladle → S11** (centralny).
- [ ] Brama Albrechta = wypowiedzenie motta; ósme bicie 20:30; Przedzamcze.
- [ ] **Dystrybucja Tabeli 2** (gdzie wydać) — otwarte (`z11-szyfr-spec §6/§8`).

## Rekwizyty

### Pergamin — lista TR (`pergamin-lista-tr-draft.md`)
- [ ] Wpis #1 oznaczony jako „chairman" (klucz do finałowego splice'u).
- [x] „Komtur of Toruń" — zamienione z „Thorn" [06-03].
- [ ] Stylizacja okresowa; brak anachronizmów; brak nazw miast spoza Torunia.

### Szyfrogram Z7 (`z7-szyfrogram-draft.md`)
- [ ] Ciphertext = **+7** z „HANS VON BAYSEN IS JORDAN THE COOK" (round-trip ręczny).
- [ ] Dwa nagłówki **tym samym fontem** (mechanika porównania) — Z3 jawny ↔ Z7 zaszyfrowany.
- [ ] Brak koła/rekwizytu deszyfrującego (czysty Cezar).

### Tabela 1 — symbole (`z11-tabela-symboli-draft.md`)
- [ ] Siatka 4×4: kolory EN × rysunki (piernik/miecz/chochla/świeca); Brown×Ladle = klucz centralny.
- [ ] **Styl symboli** (gmerki robocze) — decyzja o finalnym wyglądzie (otwarte).

### Tabela 2 — tabula recta (`z11-tabula-recta-draft.md`)
- [ ] 16 wierszy × A–Z; klucz wiersza = MARIENBURG; walidacja round-trip PASS.

### Mapa gracza (`tools/map-gen/`)
- [ ] Wszystkie 19 miejsc + 4 landmarki (L01–L04) renderują się; **Piccolo ≡ czytelny**.
- [ ] Brak etykiet nazw (no spoilers); inset Rynku czytelny.
- [ ] Pierwszy glif każdej grupy obecny i rozróżnialny.

### Deszyfrowniki G1–G10
- [ ] Każdy łańcuch zgodny z `z1-10-sciezek.md §v3.2` (4 kroki + 5 dystraktorów).
- [ ] Ikony detali zgodne; kolor = kolor grupy; brak kolizji ☆/⭐ (rozwiązana).

## Aktorzy (PL docelowo)

### Jordan (`jordan-actor-script-draft.md`)
- [ ] **Test hasła**: imię „Jordan" + „kupiłeś dziś rano miecz" → wpuszcza grupę.
- [ ] Kuleje (foreshadow „Jordan=Bażyński").
- [ ] Wręcza kopertę K3 (Z3); **mówi graczom, co dalej** po F2A (ciągłość bez ramki MG w Z2).
- [ ] Tłumaczenie EN→PL.

### Albrecht (`albrecht-actor-card-draft.md`)
- [ ] Choreografia okna kradzieży (Z3b) + reakcje na wpadkę.
- [ ] Rola podwójna: handler KZ / cel infiltracji TR.
- [ ] Tłumaczenie EN→PL.

## Dokumenty MG (PL docelowo)

### `mg-runsheet.md`
- [ ] Odnotowuje, że **Z3 nie ma checkpointu** (raport po Z3b).
- [ ] Podaje **punkty/lokalizacje MG** w fazach (źródło dla ramek MG w kopertach).
- [ ] Drabinki hintów + protokoły awaryjne kompletne.
- [ ] Skalowanie na 2 tory + 10 grup; tłumaczenie EN→PL.

### `mg-tracking-sheet.md` / `mg-master-board.md` / `mg-group-cards.md` / `mg-quick-hints.md`
- [ ] Klucze odpowiedzi poprawne (zgodne z auto-checkami faktów).
- [ ] Karty grup × 10 (kolory + hex zgodne z `grupy-i-klasy.md`).
- [ ] Tłumaczenie EN→PL.

### `shopping-list.md`
- [ ] Pokrywa wszystkie rekwizyty z tabeli B (ilości × liczba grup).
- [ ] Rozszerzenie z prototypu na pełny MVP; tłumaczenie EN→PL.

---

## Czeki cross-cutting (dotyczą wielu plików — jedna decyzja, wiele edycji)

- [x] **Lokalizacja MG w ramkach** — DODANE [06-03]: MG krąży po **Rynku Staromiejskim** — wpisane do ramki Z1 + wszystkich ramek raportu (Z3b/Z4/Z5/Z3Z/Z9/Z7). ⚠ PDF do re-renderu.
- [x] **Toruń / Thorn** — ROZSTRZYGNIĘTE + WDROŻONE [06-03]: **wyłącznie „Toruń"**, nigdy „Thorn". Zamiana zrobiona w plikach źródłowych; grep `Thorn`=0. Stała reguła C4 w `wydruk-auto-checki.md`. ⚠ dotknięte PDF do re-renderu.
- [ ] **Period-theming imion** — „Kordian" (XIX w.) i inne anachroniczne imiona do podmiany na zgodne z XV w.
- [ ] **Stempel** — przy renderze każdej karty gracza podać `-Color <kolor grupy>`; dokumenty MG bez stempla.
- [ ] **Re-render po edycjach** — pliki z `🟡`/zmienioną treścią (zwł. `miasto-2-Z2` po wstawieniu glifów) wymagają ponownego renderu do `public/`.
