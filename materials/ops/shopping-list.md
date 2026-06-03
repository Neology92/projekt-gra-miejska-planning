# Lista Zakupów — Prototyp (ścieżka TR)

> **Język:** polski (operacyjny).
> **Zakres:** tylko prototyp — jedna ścieżka TR.
> Ilości: **SUCHY PRZEBIEG** = 2–3 kopie (test papierowy, bez aktorów); **NA ŻYWO ×2** = pełny przebieg z 2 grupami + 1 zapas.
> **Legenda statusu:** ✅ gotowy do druku (PDF w `public/`) · ⬜ plik istnieje, ale wymaga pracy przed drukiem · 🔒 zablokowany na decyzji · ❌ nie wykonany

---

## BLOK 1 — PROTOTYP (suchy przebieg + test na żywo, 2 grupy)

### 1A. DRUK — dokumenty i koperty

Wszystkie PDF kopert renderuje `prototype/print/render.ps1` → output do `public/`.
Karty deszyfrujące renderuje `tools/z1-decoder/` → output do `public/decoders/`.

| Dokument | Plik w `public/` | Status | Suchy ilość | Na żywo ×2 | Uwagi |
|---|---|---|---|---|---|
| Koperta K1 | *(brak osobnego PDF — treść w `envelopes/wspolne-1-Z1.md`)* | ⬜ | 2–3 | 2 + 1 zapas | Preferowany papier pergaminowy |
| Mapa Z1 | `maps/map.pdf` | ✅ | 2–3 | 2 + 1 zapas | A4 kolor lub A3 jeśli czytelna |
| Karta deszyfrująca Z1 (per kolor grupy) | `decoders/decoder-G1.pdf` … `decoder-G2.pdf` | ✅ | G1 + G2, po 1 | G1 + G2, po 1 | Dopasuj do koloru opaski |
| Koperta K2 (nota główna + slip) | `miasto-2-Z2.pdf` + `miasto-2-Z2-slip.pdf` | ✅ | 2–3 zestawy | 2 zestawy + 1 zapas każdego | Drukuj slip osobno — mniejsze cięcie |
| Koperta K3 (wręcza Jordan) | *(treść: `envelopes/miasto-3-Z3.md` → brak osobnego PDF)* | ⬜ | 2–3 | 2 + 1 zapas | Piotr trzyma przy sobie w Piccolo |
| Koperta K-Z3b (wręcza Albrecht) | `miasto-4-Z3b.pdf` | ✅ | 2–3 | 2 + 1 zapas | Zosia trzyma przy sobie na Przedzamczu |
| Pergamin Z3 (lista imion — kradną) | `miasto-04b-Z3-pergamin.pdf` | ✅ | 3–4 (1 na kradzież + zapasy) | 4–6 (reset między grupami; Zosia ma stos) | Drukuj na papierze pergaminowym — to jest fizyczny rekwizyt |
| Koperta K-Z4 | `miasto-5-Z4.pdf` | ✅ | 2–3 | 2 + 1 zapas | Preferowany papier pergaminowy |
| Szyfrogram Z7 (przechwycony list, 06a) + notatka finałowa (06b) | `miasto-06a-Z7-list.pdf` + `miasto-6-Z7.pdf` | ✅ | 2–3 | 2 + 1 zapas | 06a wręczana/rozwiązywana pierwsza, 06b po weryfikacji MG |
| Klucz odpowiedzi Z3/Z7 (tylko MG) | `mg-Z3Z7-klucz.pdf` | ✅ | 1 | 1 | Torba MG — NIE wręczaj graczom (bez stempla) |
| Koperta KF (finał) | *(treść: `envelopes/` — brak osobnego PDF)* | 🔒 | 2–3 | 2 + 1 zapas | Zablokowane: treść KF jeszcze nie napisana |
| Tracking sheet MG | `materials/ops/mg-tracking-sheet.md` (drukuj ręcznie) | ⬜ | 1 | 1 | Drukuj z .md lub konwertuj do PDF |
| Runsheet MG | `materials/ops/mg-runsheet.md` | ⬜ | 1 | 1 | Referencja MG — może być na telefonie |
| Skrypt aktora Jordan | `materials/actors/jordan-actor-script-draft.md` | ⬜ | 1 (Piotr) | 1 (Piotr) | Czeka na recenzję Oskara/Piotra przed drukiem |
| Karta aktora Albrecht | `materials/actors/albrecht-actor-card-draft.md` | ⬜ | 1 (Zosia) | 1 (Zosia) | Czeka na recenzję Oskara/Zosi przed drukiem |

**Papier do kupienia na druk:**
- Papier A4 o fakturze pergaminowej (kremowy/kość słoniowa) — na koperty, pergamin Z3, zapieczętowane listy.
  - Suchy przebieg: ~20 arkuszy (testowe rendery, wiele prób)
  - Na żywo ×2: ~40–50 arkuszy
  - *Gdzie:* sklep papierniczy / Amazon; szukaj „parchment paper A4 laser" (upewnij się że laser-safe jeśli drukarka laserowa). ~10–20 PLN za pakiet 25 arkuszy.
- Zwykły A4 biały — na dokumenty MG, skrypty aktorów, karty deszyfrujące: standardowy.
- A3 kolor (opcjonalnie) — jeśli mapa Z1 potrzebuje większego formatu dla czytelności.

---

### 1B. KUPIĆ / ZAOPATRZYĆ — rekwizyty fizyczne

| Przedmiot | Do którego etapu | Suchy | Na żywo ×2 | Uwagi / gdzie znaleźć |
|---|---|---|---|---|
| **Rekwizyt zapieczętowanego listu** (niesiony przez grupę cały dzień) | Wręczenie K1 → wszystkie etapy | 2–3 | 2 + 1 zapas | Patrz sekcja „zrób" poniżej; albo kup gotowe postarzane zwoje |
| **Opaski / kolorowe opaski na rękę** (ID grupy) | Cały dzień | 2 kolory (np. G1 + G2) | 2 kolory minimum | Kolorowe opaski materiałowe lub silikonowe; ~2–5 PLN/szt. Sklepy papiernicze / Allegro. 4–6 na grupę jeśli wieloosobowa |
| **Drumla / kalimba** | Z4 | 1 | 1–2 (grupy rotują) | „Jaw harp", „jews harp", „drumla". Sklepy z muzyką dawną, Allegro, etsy. ~20–60 PLN. Ćwicz przed dniem gry — melodia musi być powtarzalna |
| ~~**Dzwonek ręczny** (finał, 8 uderzeń)~~ | Finał KF | — | — | **PORZUCONE [2026-06-03, Oskar #49]: brak dedykowanego rekwizytu dźwiękowego.** „Dziewiąty dzwon" zostaje wyłącznie *narracyjnym* znacznikiem czasu (aktor/MG podaje godzinę w scenie finałowej). NIE kupuj dzwonka ani nie nagrywaj. |
| **Chochla** (rekwizyt Jordan/Piotr) | F2A (scena Jordana) | 1 | 1 | Przykrywka kucharza (NIE hasło — rozpoznanie to imię + parol „kupiłeś miecz"). Drewniana lub metalowa; sklep kuchenny. Pasująca do epoki. ~10–20 PLN |
| **Miecz** (rekwizyt Jordan→Bażyński) | Finał KF (scena Bażyńskiego) | 1 | 1 | „Poranny zakup" Jordana z Z2 = parol, a potem broń Bażyńskiego w konfrontacji finałowej (callback). Schowany podczas F2A. Teatralny/piankowy lub tępy dekoracyjny; pasujący do epoki. Allegro/rekwizyty teatralne. ~30–80 PLN |
| **Stos kopii pergaminu Z3** (Albrecht/Zosia) | Scena kradzieży Z3 | 4–6 wydrukowanych | 6–8 wydrukowanych | Już policzone w sekcji druku powyżej — Zosia potrzebuje torby lub teczki na zapasy |
| **Przenośna powierzchnia dla Albrechta** (ekspozycja listy) | Scena kradzieży Z3 | Opcjonalna przy suchym | 1 | Mały składany stolik, pulpit lub drewniana skrzynka. Albrecht odkłada na nią listę podczas patrolu. Musi być stabilna na zewnątrz |
| **Lak do pieczętowania + stempel** | Rekwizyt zapieczętowanego listu | 1 zestaw | 1 zestaw | Laski laku + stempel mosiężny/metalowy. Zestawy na Allegro/Amazon: ~20–40 PLN. Na prototyp: krzyż Zakonu lub neutralny stempel heraldyczny |
| **Świeca lub topnik wosku** | Pieczętowanie listów | 1 | 1 | Do topienia laku. Tealight wystarczy. Trzymaj bezpiecznie — unikaj na zewnątrz przy wietrze |

---

### 1C. KOSTIUM — aktorzy

| Przedmiot | Kto | Suchy | Na żywo ×2 | Uwagi |
|---|---|---|---|---|
| **Fartuch + chochla** (Jordan/kucharz) | Piotr | ⬜ minimalny | ⬜ pełny | Gruby materiałowy fartuch czytelnie oznacza „kucharza". Chochla sprzedaje przykrywkę (rozpoznanie to imię + parol, nie chochla). Na prototyp nie potrzeba pełnego stroju średniowiecznego. Miecz = osobny rekwizyt finałowy (patrz tabela rekwizytów) |
| **Ciemny płaszcz / opończa + emblemat krzyża** (Albrecht/Komtur) | Zosia | ⬜ minimalny | ⬜ sugestywny dla Zakonu | Ciemna opończa + biały krzyż na czarnym tle lub czarny na białym. Na prototyp NIE musi to być pełny habit krzyżacki — sugestia wystarczy. Uszyj odznakę z filcu (~10–20 PLN tkanina) lub kup teatralny rekwizyt krzyża. Patrz `albrecht-actor-card-draft.md §ZANIM PRZYJDĄ GRUPY` — „kostium TBD, pytanie #33" |
| **Kamizelka MG / smycz** | MG (Oskar) | ⬜ | ⬜ | Opcjonalne, ale przydatne żeby gracze zidentyfikowali MG. Kamizelka odblaskowa, albo po prostu smycz z identyfikatorem |

---

### 1D. ZRÓB / SKONSTRUUJ

| Przedmiot | Co to jest | Nakład | Uwagi |
|---|---|---|---|
| **Rekwizyt zapieczętowanego listu** | Arkusz A5 lub A4 zwinięty lub złożony, zapieczętowany stemplem woskowym, niesiony przez grupę cały dzień | Niski | Wydrukuj prosty tekst na papierze pergaminowym ("To Jan Bażyński — for his eyes only"), złóż lub zwiń, zapieczętuj woskiem. Zrób 2 + 1 zapas (jeden zapas podróżuje nieużywany). Pieczętuj PO złożeniu |
| **Pergamin Z3 — wiele wydrukowanych kopii** | Identyczne kopie `miasto-04b-Z3-pergamin.pdf` na papierze pergaminowym, z postrzępionymi krawędziami lub postarzony | Niski | Wydrukuj, potnij do rozmiaru. Opcjonalnie: lekko pociągnij krawędzie herbatą dla faktury. Każda skradziona kopia jest skonsumowana; Zosia resetuje ze stosu |
| **Karta referencyjna kolorów dla aktorów** | Mała wydrukowana kartka z listą: kolor grupy → jak wygląda opaska → numer grupy | Bardzo niski | 1 karta dla Piotra (Jordan) + 1 dla Zosi (Albrecht). Drukuj z tracking sheet MG |
| **Nagranie ćwiczebne drumli** | Nagranie audio melodii Z4 (621454 w tonach drumli) na telefon | Niski | Nagraj przed dniem gry jako backup. MG odtwarza jeśli instrument zawiedzie. Potwierdź że melodia pasuje do `puzzles/kalimba.md` |

---

## BLOK 2 — MVP (10 grup, 2 ścieżki, ~40 graczy)

> Dla celów referencyjnych i planowania — NIE zamawiaj jeszcze. Ilości skalują się z NA ŻYWO ×2 powyżej.

### 2A. DRUK — współczynnik skalowania

| Dokument | Ilość prototyp | Ilość MVP | Uwagi |
|---|---|---|---|
| Wszystkie typy kopert (K1, K2, K3, K-Z3b, K-Z4, K8, KF) | 2–3 każdy | 10 na typ + 10 zapas (każda ścieżka) | 2 ścieżki × 10 grup |
| Pergamin Z3 (rekwizyt kradzieży) | 4–6 | 30–40 | Zosia potrzebuje ~3–4 na grupę; 10 grup |
| Mapy Z1 | 2–3 | 10 + 5 zapas | Jedna na grupę |
| Karty deszyfrujące | G1–G2 | G1–G10 | `public/decoders/` ma już G1–G10 — ✅ |
| Tracking sheet MG | 1 | 2–3 (jedna na MG/asystenta) | MVP prawdopodobnie wymaga 2 MG |
| Skrypty aktorów | 1 każdy | 1 każdy (te same — skrypty się nie skalują) | Najpierw przejrzyj wersje |
| Papier pergaminowy | ~50 arkuszy | 200–300 arkuszy | Kupuj hurtowo — lepsza cena za arkusz |

### 2B. REKWIZYTY FIZYCZNE — współczynnik skalowania

| Przedmiot | Ilość prototyp | Ilość MVP | Uwagi |
|---|---|---|---|
| Opaski | 2 kolory, ~6 opasek/kolor | 10 kolorów, 4–6 opasek/kolor = ~50–60 razem | Każda z 10 grup potrzebuje odrębnego koloru |
| Drumle | 1–2 | 3–4 (rotacja przez 10 grup) | Więcej drumli → mniejszy wąskie gardło przy Z4 |
| Zapieczętowane listy | 2–3 | 10–12 | Jeden na grupę (tylko ścieżka TR) |
| ~~Dzwonek ręczny~~ | — | — | PORZUCONE [2026-06-03 #49] — dziewiąty dzwon tylko narracyjny, bez rekwizytu dźwiękowego |
| Zestaw pieczętujący woskiem | 1 | 2–3 | Szybkość pieczętowania listów |
| Stos pergaminów Z3 | ~6 | ~40 | Zosia + ewentualnie drugi Albrecht dla 10 grup |
| Przenośna powierzchnia (Albrecht) | 1 | 1 | To samo ustawienie, więcej grup rotuje |

### 2C. KOSTIUM — współczynnik skalowania

Taki sam jak prototyp — kostiumy się nie mnożą. Jeśli MVP doda drugiego aktora Albrechta, potrzeba drugiego kostiumu Komtura. Patrz `todo/otwarte-pytania.md` pytanie #33.

---

## NATYCHMIASTOWE NASTĘPNE KROKI (przed zamówieniem czegokolwiek)

1. **Wydrukuj PDF-y z ✅ i najpierw zrób suchy przebieg papierowy** — nie kupuj rekwizytów fizycznych dopóki przepływ papierowy nie jest zweryfikowany.
2. **Rozwiąż treść KF** (🔒 zablokowane) przed drukiem koperty KF.
3. **Uzupełnij glif mapy Z1 dla Piccolo** — placeholdery w K1/K2 nierozwiązane do tego czasu. Patrz `pass-spojnosci-prototyp.md §Otwarte zależności`.
4. **Drumla — kup wcześnie** — potrzeba czasu na ćwiczenia przed dniem gry.
5. **Papier pergaminowy** — zamów z wyprzedzeniem; przetestuj że drukarka go obsługuje bez zacięcia (najpierw jeden testowy wydruk na zwykłym papierze).
6. **Kolory opasek** — zdecyduj które 2 kolory na prototyp (muszą pasować do kart deszyfrujących G1/G2 w `public/decoders/`); kup te pierwsze.
