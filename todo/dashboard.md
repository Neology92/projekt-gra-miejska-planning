# 🗺️ Dashboard — Prototyp + MVP (widok jednoekranowy)

> Graficzny przegląd stanu. Szczegóły sprintu prototypu → `roadmap-prototyp.md`. Decyzje → `otwarte-pytania.md`.
> **Legenda statusów:** ✅ gotowe · 🟡 draft/czeka na review · 🔄 w toku (input zewnętrzny) · ⬜ do zrobienia · 🔒 czeka na decyzję Oskara · 🚶 wymaga wizji lokalnej

---

# CZĘŚĆ I — PROTOTYP (1 ścieżka: tor TR · Z3 + Z4)

**Cel:** kompletny, przechodni stos wydruków dla JEDNEJ ścieżki, gotowy do dry-runu na papierze.

## Łańcuch gry — mapa przepływu

```
                          ┌─────────────────────────────────────────────────┐
                          │           TOR MIESZCZAN (TR) — prototyp          │
                          └─────────────────────────────────────────────────┘

  START                  FAZA 1                       FAZA 2A              FAZA 2B               FINAŁ
   │                       │                             │                    │                    │
   ▼                       ▼                             ▼                    ▼                    ▼
┌──────┐   ┌──────┐   ┌──────┐   ┌──────┐   ┌────────┐   ┌──────┐   ┌──────┐   ┌──────┐   ┌──────┐   ┌──────┐
│  K1  │──▶│  Z1  │──▶│  MG  │──▶│  K2  │──▶│   Z2   │──▶│Jordan│──▶│  K3  │──▶│  Z3  │──▶│  Z4  │──▶│  Z7  │──▶ KF
│start │   │szlak │   │raport│   │twist │   │Einstein│   │ /Z2b │   │brief │   │zamek │   │kalim.│   │szyfr │
└──────┘   │symbol│   │ 4 m. │   │plotki│   │ (Piotr)│   │hasło │   │ F2B  │   │lista │   │ melo→#   │Cezar │
   🟡       └──────┘   └──────┘   └──────┘   └────────┘   │+kolor│   └──────┘   │ TR   │   └──────┘   └──────┘
            🟡/🔒        ⬜         🟡        🔄(Piotr)    └──────┘     ⬜        ⬜🔒       ⬜🔒        ⬜🔒
                                                              ✅
                                                                                    motto Z3 ─┐
                                                                                    (NIE Z4) ─┴─▶ Z7 ─▶ "Jordan=Bażyński"   (klucz = motto z nagłówka listy Z3)
```

## A. Teksty kopert (7)

```
✅ K1 — startowa ............... draft gotowy (groźba „ucięcia rąk" + segment Z1)        [prototype/k1-envelope-draft.md]
✅ K2 — po Z1 ................. draft gotowy (Z2 Einsteina wpisana: Jordan/Piccolo/chochla; plotki Puli A; slip R.)  [prototype/k2-envelope-draft.md]
✅ K3 — od Jordana ............ draft gotowy (brief F2B + Z3 zwiad; K-Z3b osobno)         [prototype/k3-envelope-draft.md]
✅ K-Z3b — ujawnienie kradzieży  draft gotowy (dwuetapowa; narracja + cytat Albrechta)   [prototype/kZ3b-envelope-draft.md]
⬜ K-Z4 — melodia/kalimba ..... brak draftu — czeka: instrument narracyjny (decyzja Oskara)
🟡 K8 — Z7 finałowy szyfr ..... szyfrogram gotowy (Cezar+7; „OHUZ CVU IHFZLU PZ QVYKHU AOL JVVR"); koperta do draftu  [prototype/z7-szyfrogram-draft.md]
⬜ KF — finał ................. brak draftu — instrukcje (gdzie, 8. bicie, jak dostarczyć)
```

## B. Rekwizyty drukowane (8)

```
🟡 List zapieczętowany ........ treść (rekwizyt noszony całą grę) — do napisania
🟡 Wiadomość pośrednika ....... jest w drafcie K2 (slip „— R.") — do wydzielenia
🟡 Mapa Torunia z glifami ..... mock funkcjonalny istnieje                              [prototype/mapa-z1-podglad.html]
🟡 Szyfrownik (deszyfrownik) .. w tym samym mocku — czeka na dobór piktogramów
🟡 Pergamin z listą nazwisk TR  research gotowy + draft (EN); klucz=Decyzja#1  [prototype/pergamin-lista-tr-draft.md · puzzles/z3-lista-tr-spec.md]
⬜ Zapis melodii Z4 + pręciki . karta referencyjna: nuty → numery pręcików → kod
🟡 Arkusz szyfru Z7 ........... Cezar +7 (nagłówki w tym samym foncie; Z3 jawny ↔ Z7 zaszyfrowane; brak koła)  [prototype/z7-szyfrogram-draft.md]
⬜ Mechanika dostarczenia ..... mock: list na prawą (Bażyński) / lewą (Albrecht) stronę stołu
```

## C. Skrypty/karty aktorów (2)

```
✅ Skrypt Jordana (Piotr) ..... draft gotowy (weryfikacja + dialog + K3)               [prototype/jordan-actor-script-draft.md]
✅ Karta gry Albrechta (Zosia)  draft gotowy (choreografia okna kradzieży + reakcje)   [prototype/albrecht-actor-card-draft.md]
```

## D. Dokumenty operacyjne MG (3)

```
⬜ Arkusz śledzenia MG ........ grupa → następna koperta, klucze, odpowiedzi-wzorce
⬜ Instrukcja MG .............. jak prowadzić ścieżkę, hinty awaryjne, sloty
⬜ Lista przedmiotów .......... co kupić/wydrukować (prototyp vs MVP)
```

## E. Domknięcie

```
⬜ Pass spójności ............. czy każdy etap daje klucz dla następnego
⬜ Dry-run na papierze ........ przejście ścieżki, pomiar czasu (zwł. szyfr Cezara Z7)
```

## 🔒 Decyzje Oskara blokujące prototyp (aktualne)

```
┌─ Z1 ──────────── akceptacja propozycji miejsc (Piernikarka/Pod Gwiazdą/osiołek/Kopernik + 5 dystr.)
│                  + podmiana kolizji glif ☆ vs detal ⭐ przed generacją finalną
├─ Z4 ──────────── instrument narracyjny per tor (piszczałka flisacka? fujarka? — jedno zdanie w K-Z4)
├─ K8/Z7 ─────────  review szyfrogramu + finalna treść koperty
└─ KF ──────────── mechanika dostarczenia listu (osobiste wręczenie, mock stołowy)
```

✅ Zamknięte: K2 plotki · Z2 zagadka (Oskar) · Z3 mechanika (dwuetapowa) · Jordan skrypt · Albrecht karta · Z7 szyfrogram

## 🔄 Czeka na zewnątrz

```
Z1 dry-run R2 — Oskar weryfikuje sightline 6 par + S02 kaszownik (z1-dry-run-sheet.md §RUNDA 2)
                → potem domknięcie macierzy v2 + regeneracja 10 kart (MVP / dyspersja)
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

```
⬜ K2-K (wersja krzyżacka) ...... Pula B plotek (krytyka Zakonu) + Z2 → Albrecht
⬜ Skrypt Albrechta (Zosia) F2A . spotkanie krzyżaków + żądanie dowodu godności
⬜ Z3Z — infiltracja Piccolo .... lustro Z3: kradzież „zaopatrzenia" + wyciągnięcie godziny 20:30
⬜ Z8 — melodia zakonu .......... lustro Z4 (kalimba)
⬜ Z9 — sensoryczna piernik ..... lustro Z5
⬜ Z10 — polichromie Biedronka .. 🚶 Bestiariusz Krzyżowca (wymaga researchu na miejscu)
⬜ Z11 — finał krzyżaków ........ BRAK plot twistu; brama = duma Albrechta
⬜ KF — wariant krzyżacki ....... dostawa listu stronie Zakonu
```

### 🟩 Pozostałe opcjonalne TR

```
⬜ Z5 — sensoryczna z piernikiem  mechanika zapach/smak/dotyk → klucz
⬜ Z6 — herby hanzeatyckie ...... 🚶 Aleja Gmerków (ul. Królowej Jadwigi) — WYMAGA WIZYTY + spisu herbów
                                                                              [puzzles/herby-aleja.md]
```

### 🟨 Dywersyfikacja (10 grup)

```
⬜ Różne trasy Z1 per grupa ..... model różnych pierwszych glifów (dyspersja, brak tłoku)
⬜ Tabele przydziału zestawów ... A/B/C × 2 tory (patrz concept/03 — model 5+5)
⬜ Mechanika klucza 2B→finał .... dla wszystkich par zagadek (wymienialność 1:1)
```

### 🟧 Produkcja ilościowa

```
⬜ 10–40 kopii kopert ........... druk całego stosu × liczba grup
⬜ Stylizacja manuskryptowa ..... pergamin, kaligrafia, UnifrakturMaguntia, wosk, pieczęć
⬜ Kostiumy 2 aktorów ........... chochla (Jordan) + płaszcz/krzyż (Albrecht)
⬜ Rekwizyty × ilość ............ 1–2× kalimba, 1–2× zestaw sensoryczny, mapy/szyfrowniki
```

### 🟥 Logistyka dnia gry

```
⬜ Harmonogram fal grup ......... rozłożenie 10 grup w czasie (Jordan/Piotr = wąskie gardło)
⬜ Formularz zapisów ............ sposób rejestracji graczy (#39)
⬜ Komunikacja awaryjna ......... SMS/telefon/aplikacja (#41)
⬜ Lokalizacje MG w fazach ...... gdzie stoi MG w F1/2A/2B/3 (#36)
⬜ Dźwięk dzwonu finału ......... rekwizyt 8. bicia (nie Tuba Dei — anachronizm) (#49)
⬜ Scenka aktorska finału ....... Bażyński vs Albrecht, warianty wg wyniku
⬜ Mechanika zliczania głosów ... pudełka / NPC / cyfrowo (#50)
```

## 🔒 Decyzje strategiczne otwarte (MVP)

```
#1  Tytuł gry
#3  Data rozgrywki (deadline planowania)
#6  Mapa + szyfrownik — wspólne czy osobne per klasa
#15 Co jeśli grupa nie dostarczy listu (warianty 1/2/3)
#59 Budżet (rekwizyty/druk/aktorzy)
#51-55 Naginki: Piccolo / kalimba / Tuba Dei / alt-history zakończenie
```

---

## 📊 Pasek postępu

```
PROTOTYP   █████████████░░░░░░░  ~65%   (K1/K2/K3/K-Z3b/Z7/Jordan/Albrecht zdraftowane; K-Z4 + KF + dokumenty MG + dry-run zostają)
MVP        ██░░░░░░░░░░░░░░░░░░  ~10%   (architektura ustalona; Z1 dyspersja czeka R2; produkcja, drugi tor, skalowanie przed nami)
```

## 🎯 Następny krok krytyczny

```
► Prototyp — do napisania: K-Z4 (czeka: instrument narracyjny Oskara) · KF · arkusz MG · instrukcja MG
► Prototyp — review: K1/K2/K3/K-Z3b/Jordan/Albrecht — czekają na Oskara i Piotra
► Z1 dyspersja (MVP) — czeka: dry-run R2 (Oskar w terenie) → z1-dry-run-sheet.md §RUNDA 2
```
