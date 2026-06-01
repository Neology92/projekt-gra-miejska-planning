# Mechanika - koperty i Mistrz Gry

## Mistrz Gry (MG)

- **Osoba (autor / animator)** prowadząca grę.
- **Mobilny** - przemieszcza się po wyznaczonych punktach miasta.
- **Funkcje**:
  - Przyjmuje raporty od grup po zakończeniu etapów.
  - Weryfikuje odpowiedzi.
  - Wydaje kolejne koperty z briefem.
  - Trzyma harmonogram (kto kiedy gdzie).
  - Sygnalizuje finał (lub - alternatywnie - dzwon to robi).

## Czy jeden MG czy więcej?

- **Jeden MG** = ryzyko bottlenecku, 12 grup obciąża go za mocno.
- **Wielu MG** (2-3) = łatwiejsze, ale wymaga koordynacji (każdy ma swoje koperty, swoich graczy).
- **Sugestia**: **2 MG**, jeden dla TR, drugi dla krzyżaków. Naturalna separacja klas.

## Mapa pozycji MG

- **Lokalizacja stała czy wędrowna?**
  - Stała = grupy wiedzą gdzie iść, ale tłok.
  - Wędrowna = mniej tłoku, ale trzeba wskazywać gdzie aktualnie jest (np. SMS-em).
- **Hybryda**: stała w fazach 1 i 3 (znane punkty), wędrowna w F2B (wielość zagadek = mobilność).

## Koperty - struktura

Każda koperta zawiera **5 elementów**:

1. **Brief narracyjny** (1-2 akapity tekstu fabularnego)
2. **Cel zadania** (1 zdanie, co konkretnie zrobić)
3. **Zagadka / wskazówka** (treść do rozwiązania)
4. **Plotki / forshadowing** (opcjonalnie - kolorowe smaczki, podpowiedzi do późniejszych zagadek)
5. **Co po rozwiązaniu** (gdzie wrócić - punkt MG, godzina)

### Zasada nadrzędna: każde zadanie uzasadnione fabularnie

**Każde zadanie w grze musi mieć powód w świecie gry, podany w kopercie.** Gracz nie „rozwiązuje zagadkę" — *pomaga piekarzowi*, *udowadnia, że jest swój*, *wykrada listę komturowi*. Cel: pogłębić immersję i **zminimalizować poczucie bezsensu** wykonywanych czynności. Brief (element 1) ma odpowiedzieć: **kto** tego chce, **dlaczego akurat my** (gracze), **co z tego wyniknie**. Dotyczy **całej gry**, nie tylko F2B.

> Wzorzec [2026-05-31]: Z5/Z9 — piekarz, któremu pomieszały się składniki, + ukryty test „jestem swój" (znajomość przepisu jako hasło wiarygodności). Patrz `puzzles/zagadka-sensoryczna.md`.

### Zasada nadrzędna #2: koperta = SCENA, nie zawsze wiadomość [decyzja Oskara 2026-06-02]

**Domyślnie koperta to SCENA/AKCJA napotkana w świecie gry — nie wiadomość od nadawcy.** Cel: immersja jak w tabletop RPG — coś *się dzieje*, grupa *bierze w tym udział*, narracja jest soczysta i wciągająca, a nie sztywnym listem od zleceniodawcy. Gracze fizycznie dostają kopertę od MG (meta-interakcja, jak rozdanie karty), ale **treść opisuje zdarzenie**, nie nadawcę.

- **Wiadomość z nadawcą = WYJĄTEK, nie reguła.** Dopuszczalna gdy ktoś realnie pisze do grupy: K1 (zleceniodawca), K2 (slip „— R."), K3 (Jordan zleca Z3). Poza tym — scena.
- **Senderless scene** rozwiązuje problem nośnika: koperta bez nadawcy nie wymaga uzasadnienia „kto ją dał" — to materializacja tego, co grupa widzi/odkrywa. Wzorce: **K-Z3b** (olśnienie: „to była lista") i **K-Z4** (znalezisko: martwy flisak nad Wisłą).
- **Komponuje się z dwoma rejestrami (niżej), nie zastępuje ich.** Scena = narracja z głów (kursywa) + ewentualne słowa świata (roman: napis, zapis, cytat NPC).
- **Opcjonalne zagadki (Z4/Z5/Z6) = sceny przechwycenia krzyżackiego listu** — każda inną drogą; po rozwiązaniu MG wydaje przechwycony list (K8/Z7). To fabularny powód, czemu opcjonalna „daje szyfrogram". Patrz `concept/03-faza-2b-asynchroniczne.md`, `concept/04-faza-3-final.md`.

### Konwencja głosu — dwa rejestry [decyzja Oskara 2026-06-01]

Koperta łączy **dwa rejestry**, rozróżniane **typograficznie**:

1. **Narracja z głów kurierów** — *kursywa (light)*. Co grupa widzi, myśli, jaki wniosek się nasuwa („narrator z ich głów"). Tu przemycamy mechanikę jako **rozumowanie grupy** („on odwraca się tak samo za każdym razem… czekaj na obrót"), nie imperatyw z zewnątrz.
2. **Wiadomości z nadawcą** — tekst **prosty (roman)**, z podpisem/nadawcą (zleceniodawca, „— R.", „— J."). Fizyczny dokument, który grupa czyta. Tu też **wypowiedziane kwestie NPC** (cytaty w cudzysłowie) — słowa świata, więc roman.

> **Klucz nadrzędny:** ***kursywa = wewnątrz głowy; roman = słowa świata*** (napisana wiadomość albo wypowiedź NPC).

- **Hybryda, nie „albo/albo":** koperta-wiadomość (np. K1 list zleceniodawcy) dostaje **oprawę narracyjną** (otwarcie/zamknięcie z głów) — **nie jest przepisywana, tylko rozszerzana**. Koperta bez nadawcy (np. K-Z3b) bywa w całości rejestrem narracyjnym, z cytatem NPC roman w środku.
- **Wręczenie koperty przez NPC** (np. Albrecht wręcza K-Z3b) = **meta-interakcja poza światem gry** (jak rozdanie karty). W fikcji nikt jej nie „daje".
- **Po co narracja:** immersja + rozwiązuje problem nośnika — koperta bez nadawcy nie wymaga uzasadnienia, kto ją podał.
- **Wzorce:** `prototype/kZ3b-envelope-draft.md` (pełna narracja + cytat roman) · `prototype/k1-envelope-draft.md`, `k2-envelope-draft.md` (hybryda: wiadomość + oprawa narracyjna).

### Numeracja kopert

- **K1** - startowa, wszystkie grupy dostają.
- **K2** - po Z1 (szlak symboli), zawiera plot twist i drogę do Jordana.
- **K3** - od Jordana w F2A, zawiera 4 zagadki F2B.
- **K4-7** - jedna na każdą zagadkę F2B (zagadki 3, 4, 5, 6).
- **K8** - zagadka 7 (finałowa).
- **KF** - finał, instrukcje finałowe (gdzie iść o 20:30, jak dostarczyć list).

### Wygląd kopert

- **Stylizowane na manuskrypt** (zgodnie z estetyką wiki).
- Pieczęć woskowa (rekwizyt) - powiela atmosferę listu który gracze noszą.
- Każda klasa może mieć **inny kolor / pieczęć** (na zewnątrz nieodróżnialne, ale wewnątrz inny brief).

## Logistyka kopert

- **Drukowanie**: 12 grup × 8 etapów = 96 kopert minimum.
- **Przygotowanie**: foldowanie, pieczętowanie, pakowanie - praca manualna.
- **Trzymanie**: torba MG, posortowane wg etapu i klasy.

## Komunikacja MG ↔ grupy

- **Hasło / kod grupy**: każda grupa ma identyfikator — kolor opaski lidera (pasek papieru sklejony w bransoletkę) → MG identyfikuje przy raporcie bez pytania o nazwę.
- **Telefon** dla awarii: numer MG na karcie startowej, gdy grupa utknie.

## Awaryjne sytuacje

- **Grupa się gubi** → MG udziela hinta przez telefon / SMS.
- **Grupa nie rozwiązuje zagadki w czasie** → po X minutach MG daje "wskazówkę pomocniczą" lub przepuszcza dalej z karą.
- **Grupa znajduje "ukryte" rzeczy nie po kolei** (np. wcześniej trafia na komtura Albrechta) → MG improwizuje.

## Otwarte pytania

1. ~~Ilu MG?~~ ROZSTRZYGNIĘTE [2026-05-29]: **1 MG = Oskar**. ⚠️ Konsekwencja: 1 MG na ~12 grup to wąskie gardło — kluczowy staje się **slot/timing** wizyt (patrz #3) i być może rozłożenie kopert tak, by nie wymagały częstych powrotów do MG.
2. **Lokalizacja MG** w fazie 1, 2A, 2B, 3 - konkretne miejsca?
3. **Czas trwania** każdej wizyty u MG (przyjąć max 5 min na grupę żeby się nie kolejkowali).
4. **Logistyka pieczętowania kopert** - kto to robi przed grą? Ile czasu?
5. **Komunikacja awaryjna** - SMS, telefon, czy aplikacja (np. Telegram bot)?
