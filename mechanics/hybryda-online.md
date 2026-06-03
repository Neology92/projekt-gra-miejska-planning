# Hybryda fizyczne / online — spec podziału + łańcuch kodów dostępu

> **Co to:** sposób rozegrania „Gry Miejskiej" w trybie **hybrydowym** — warstwa fabularna (briefy) w **aplikacji online za kodami dostępu**, fizycznie tylko **rekwizyty**. Decyzja: `todo/otwarte-pytania.md #77` [2026-06-03, Oskar].
> **Zakres tego pliku:** spec podziału + mapa kodów + luki. **Budowa samej aplikacji = osobna faza** (nie tu).
> **Powiązania:** model warstw koperty `envelopes/README.md` · nośnik treści `mechanics/koperty-mg.md §#76` · przebieg `materials/ops/mg-runsheet.md` · przydział grup `CLAUDE.md §Kanoniczny przydział`.

## Idea cięcia

Koperta dotąd = **BRIEF** (narracja) + **WKŁADKI/REKWIZYTY** (przedmioty). Hybryda rozcina to wzdłuż tej samej linii:

- **BRIEF → online.** Gracz wpisuje kod dostępu → apka uruchamia aktualny krok fabularny (to, co było w kopercie) na telefonie.
- **REKWIZYT → fizyczny.** Drukujemy/wręczamy tylko to, czego fizyczność jest mechaniką (zapach, kradziony pergamin, lakowa pieczęć, gra na instrumencie) albo pomocą trzymaną w ręku (mapa, deszyfrownik, tabele).

Konsekwencja: rekwizyty dotąd jechały **w kopertach** (decyzja #76). Po przeniesieniu briefów online tracą nośnik → potrzebna **nowa dystrybucja** (sekcja B) = **pakiet startowy + wręczenia w scenach**.

---

## A. Podział fizyczne ↔ online

| FIZYCZNE / DRUK (wręczane na żywo) | ONLINE (apka za kodem) |
|---|---|
| deszyfrowniki (10, per grupa) | wszystkie BRIEFy: Z1, Z2, Z3, Z3b, Z4–Z7 (TR); Z2, Z3Z, Z8–Z11 (KZ) |
| mapy (wspólna) | **melodia-wzorzec Z4/Z8 — audio odtwarzane z telefonu graczy** |
| **kalimba — fizyczny instrument (Z4/Z8)** | meta-kartki „od autora" (ciekawostki historyczne) |
| lista nazwisk TR — pergamin (łup kradzieży) | szyfrogram / ciphertext Z7 + Z11 (klucz zostaje fizyczny) |
| przepis na pierniki (Z5/Z9) | slip „— R." (Z2) |
| karta uzupełniania przypraw (Z5/Z9) | dokumenty MG (tracking, klucze odpowiedzi, drabinki hintów) |
| tabele 1 i 2 — Z11 (symbole + tabula recta) | quick-refy aktorów (Jordan/Albrecht) |
| polichromie — Z10 (arkusz „Bestiariusza") | |
| list zapieczętowany (1 na grupę; niesiony całą grę, oddawany w finale) | |

**Kalimba — uwaga:** instrument **zostaje fizyczny** (gracze na nim grają i odczytują cyfry z ponumerowanych sztabek C:1, D:2…). Online jest **tylko melodia-wzorzec** — gracze puszczają ją z telefonu (zamiast MG odtwarzającego nagranie) i odtwarzają na instrumencie. Reuse istniejącego audio: `public/miasto-czerwony-5-Z4-audio.mp3`.

**Cechy terenowe (Z6 herby / Z10 polichromie):** obserwowane **w mieście** — nie drukujemy ich „treści", tylko ewentualną kartę-pomoc (herby Z6, arkusz bestiariusza Z10). Brief „co obserwować" idzie online.

---

## B. Łańcuch kodów dostępu

Typ kodu odblokowującego kolejny krok online:

- **MG** — kod od Mistrza Gry (Oskar). Stosowany tam, gdzie MG i tak wręcza fizyczny pakiet/rekwizyt.
- **AKTOR** — kod od aktora prowadzącego scenę (Jordan/Piotr lub Albrecht/Zosia).
- **PREV** — kodem jest **rozwiązanie poprzedniej zagadki**; apka sama waliduje, MG niepotrzebny.

| Przejście | TR (miasto) | KZ (krzyżacy) | Typ | Rekwizyt wręczany na tym etapie |
|---|---|---|---|---|
| START → Z1 | MG daje pakiet startowy | jw. | **MG** | mapa + deszyfrownik + list zapieczętowany |
| Z1 → Z2 | apka waliduje 4 lokacje szlaku | jw. | **PREV** | — |
| Z2 → Z3 / Z3Z | Jordan (Piotr) | Albrecht (Zosia) | **AKTOR** | TR: brak · KZ: tabele 1+2 |
| Z3 → Z3b | Albrecht (Zosia) | — (brak lustra Z3b) | **AKTOR** | pergamin (łup kradzieży) |
| Z3b / Z3Z → opcjonalna | MG wręcza prop | jw. | **MG** | Z4/Z8: **kalimba** · Z5/Z9: przepis+przyprawy+słoje · Z6: karta herbów · Z10: arkusz polichromii |
| opcjonalna → finał (Z7/Z11) | apka waliduje odpowiedź | jw. | **PREV** | — (klucz już w ręku: pergamin TR / tabele KZ) |
| finał → dostawa (KF) | apka waliduje Z7 | apka waliduje Z11 | **PREV** | — (fizyczne oddanie listu aktorowi, 21:00) |

**Przydział opcjonalnych (CLAUDE.md) → wszystkie = kod-MG** (każda wręcza fizyczny rekwizyt):
G1 Z4 (kalimba) · G2,G3 Z5 (piernik) · G4,G5 Z6 (herby) · G6,G7 Z8 (kalimba) · G8 Z9 (piernik) · G9,G10 Z10 (polichromie). Melodia-wzorzec jest online, ale gracz sięga po nią dopiero po wejściu na podstronę odblokowaną kodem-MG.

### Wniosek — gdzie MG jest realnie potrzebny

Bieganie MG redukuje się do **czterech rodzajów momentów**:
1. **START** — pakiet startowy + kod (wszystkie grupy).
2. **Handoff opcjonalnej** — kalimba / słoje / karta (wszystkie grupy, raz).
3. **Scena Jordana** (Z2→Z3) i **scena Albrechta** (Z3/Z3Z) — kody-aktora (prowadzą Piotr/Zosia, nie MG).

Wszystkie pozostałe przejścia (Z1→Z2, opcjonalna→finał, finał→dostawa) = **PREV**: apka odblokowuje po poprawnej odpowiedzi, bez udziału MG.

---

## C. Ramka-przypominajka rekwizytu (fail-safe prowadzącego)

Każda podstrona online niesie blok **„REKWIZYT NA TYM ETAPIE"** — żeby gracz/prowadzący zorientował się, że czegoś brakuje, gdyby aktor/MG zapomniał wręczyć. Treść bloku:

1. **CO** — jaki przedmiot gracz powinien już mieć / właśnie dostać.
2. **OD KOGO** — MG / Jordan / Albrecht.
3. **SKĄD** — pakiet startowy czy wręczenie w scenie.

Wyprowadzenie per etap (z kolumny „Rekwizyt" tabeli B):

| Podstrona | Ramka „REKWIZYT NA TYM ETAPIE" |
|---|---|
| Z1 | „Masz mieć: mapę + deszyfrownik + zapieczętowany list — od MG na starcie." |
| Z2 | „Brak nowego rekwizytu. (slip »— R.« jest na tej stronie.)" |
| Z3 (TR) | „Brak rekwizytu — Jordan przekazuje tylko zlecenie." |
| Z3Z (KZ) | „Masz mieć: Tabelę 1 + Tabelę 2 — od Albrechta. Zachowaj na finał." |
| Z3b (TR) | „Masz mieć: skradziony pergamin z listą nazwisk." |
| opcjonalna Z4/Z8 | „Masz mieć: kalimbę — od MG. Melodię puść z tej strony, odtwórz na instrumencie." |
| opcjonalna Z5/Z9 | „Masz mieć: słoje + przepis + kartę przypraw — od MG." |
| opcjonalna Z6 | „Masz mieć: kartę herbów — od MG." |
| opcjonalna Z10 | „Masz mieć: arkusz polichromii — od MG." |
| finał Z7 (TR) | „Klucz = nagłówek skradzionego pergaminu (masz go już)." |
| finał Z11 (KZ) | „Klucz = Tabela 1 + Tabela 2 (masz je już)." |

> Język ramki: docelowo **EN** (gracz) — tu PL dla planowania. Spójne z `CLAUDE.md §Język materiałów`.

---

## D. Luki / decyzje do podjęcia (Oskar)

- **Melodia-wzorzec online** — gdzie żyje plik audio (osadzony na podstronie Z4/Z8 czy osobny odtwarzacz), czy z legendą nut→cyfry. Kalimba fizyczna ma ponumerowane sztabki; apka tylko puszcza wzorzec. Reuse `public/miasto-czerwony-5-Z4-audio.mp3` (+ analog Z8).
- **Z7/Z11 ciphertext online** — potwierdzić, że klucz (pergamin / tabele) zostaje fizyczny (rekomendacja: tak — ciphertext na ekranie, deszyfrowanie offline z trzymanego rekwizytu).
- **Format kodów dostępu** + gdzie MG trzyma listę kodów → przyszły dokument `materials/ops/mg-*` w fazie budowy.
- **Łączność / offline w terenie** — PWA / cache, bateria na ~3 h gry → faza budowy.
- **Bramkowanie spoilerowe meta-kartek** — reguła „kartkę etapu N otwiera się przy etapie N+1" (`prototype/meta-cards/README.md`) przeniesiona do logiki apki.
- **Stos technologiczny** — rekomendacja: drugi target wyjścia z istniejących źródeł `prototype/print/src/*.html` + deploy na działającym już Netlify (`torun-1454-materialy.netlify.app`). Osobna iteracja.

---

## Co zostaje bez zmian

- Treść briefów, rekwizytów, kluczy — bez przepisywania (tylko nośnik się zmienia: koperta → podstrona).
- Finał fizyczny: oddanie zapieczętowanego listu aktorowi o 21:00, liczenie listów przez Jordana/Albrechta (#50).
- Przydział grup, kolory, asymetria torów (TR 6 / KZ 5 pozycji) — `envelopes/README.md`.
