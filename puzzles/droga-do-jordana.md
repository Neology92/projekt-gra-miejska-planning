# Zagadka 2 - Droga do Jordana

**Status**: ✅ **gotowe [2026-06-01]** — zagadka logiczna kompletna (Oskar), wersja themingowa Jordan/Piccolo/chochla zweryfikowana, wpisana do K2 (`prototype/k2-envelope-draft.md`).

## Mechanika (z briefu autora)

Po wizycie u MG (koniec F1) grupa dostaje kopertę z:
1. **Plot twistem**: pośrednika nie ma.
2. **Trzy rzeczy do zestawienia** (jakaś forma zagadki logicznej).
3. Rozwiązanie = wskazówka *"udajcie się do [lokal] i znajdźcie osobę z [atrybut] o imieniu [imię]"*.
4. Atrybut: **chochla**. Imię: **Jordan**.
5. Lokal: **Picollo** (lub inny - do decyzji, patrz niżej).

## Trop celu kuriera — zasiany w K2 [2026-06-01, decyzja Oskara]

Koperta K2 (slip pośrednika R.) niesie **silny trop**: list ma trafić do **głowy Rady / chairmana**, w jego własne ręce — *bez zdradzania, kim chairman jest*. To ustawia cel kuriera na początku gry. Funkcja: w finale (Z7 „HANS VON BAYSEN IS JORDAN THE COOK") gracz sam spina, że chairman z K2 = Hans von Baysen z listy Z3 („they call him chairman") = poznany Jordan-kucharz. Anty-prowadzenie-za-rączkę. Pełny łańcuch i zależności → `prototype/k2-envelope-draft.md`, `puzzles/z7-szyfr-spec.md §5`. **Ironia:** zagadka Z2 prowadzi ich do „następnego kontaktu" (Jordan) — a to właśnie do niego (jako chairmana) mieli zanieść list. Nie wiedzą tego aż do finału.

## Treść zagadki Z2 — OTRZYMANA [2026-06-01, od Oskara]

> Zagadka logiczna (typ Einsteina). **Rdzeń logiczny wspólny dla obu frakcji**; konkretne postacie/miejsca różnią się per frakcja (theming). Poniżej wersja-wzorzec Oskara. Zastępuje stary placeholder „4 osoby × 3 cechy (Piotr)".

**Polecenie:** Te trzy osoby poszły dziś rano na miasto i każda coś kupiła. Wskaż, kto co kupił oraz gdzie pracują.

**Miejsca (i co wytwarzają):** Stary Młyn — chleby · Cukiernia — pierniki · Kuźnia — podkowy
**Imiona:** Kordian, Lambert, Ulrich
**Zakupy:** jedzenie, podkowa, sukno

**Pogłoski (prawdziwe):**
1. Lambert mógł zjeść coś u siebie, ale poszedł kupić jedzenie gdzieś indziej.
2. Ulrich zrobił zakupy u osoby, która kupiła sukno.
3. Młynarz zarzeka się, że nie kupił nic od Kordiana.

### Weryfikacja (agent) — rozwiązanie JEDNOZNACZNE ✓

| Osoba | Pracuje | Kupił(a) |
|---|---|---|
| **Kordian** | Kuźnia (podkowy) | sukno |
| **Lambert** | Stary Młyn (chleby) | jedzenie (pierniki — od Ulricha) |
| **Ulrich** | Cukiernia (pierniki) | podkowa (od Kordiana) |

**Łańcuch dedukcji (wszystkie 3 pogłoski są nośne — bez którejkolwiek brak jednoznaczności):**
- P1 ⇒ Lambert kupił **jedzenie**, pracuje w miejscu „spożywczym" (Młyn lub Cukiernia).
- Sukno: nie Lambert (jedzenie), nie Ulrich (P2 ⇒ Ulrich kupił *u* nabywcy sukna, więc sam nim nie jest) ⇒ **Kordian = sukno**. Reszta: Ulrich = podkowa.
- P2 ⇒ Ulrich kupił podkowę u Kordiana ⇒ Kordian sprzedaje podkowy ⇒ **Kordian = Kuźnia**.
- P3 ⇒ jedyny nabywca czegokolwiek od Kordiana to Ulrich (podkowa). Młynarz ≠ ten nabywca ⇒ młynarz ≠ Ulrich ⇒ **Ulrich = Cukiernia, Lambert = Młyn (młynarz)**.
- P1 domknięte: Lambert (młynarz, piecze chleb) kupił jedzenie *gdzie indziej* = pierniki u Ulricha. ✓
- **Alternatywa** (Lambert=Cukiernia, Ulrich=Młyn) ginie wyłącznie przez P3 → dlatego P3 jest konieczna.

### Detale konstrukcyjne do ZACHOWANIA przy themingu
- **„Sukno" = jedyny zakup nieprodukowany w żadnym z 3 miejsc** — to silnik P2 (nabywca sukna identyfikowany jako *sprzedawca własnego wyrobu*; sukno przyszło „z zewnątrz"). Themingując, zachowaj jeden zakup-spoza-trójki.
- Wszystkie 3 pogłoski muszą zostać — każda konieczna do jednoznaczności.
- (drobne) „Kordian" to imię literackie XIX w. (Słowacki) → anachronizm dla 1454; przy period-accurate themingu podmień. Lambert/Ulrich OK germańsko.

### ✅ Most do „Jordan + Piccolo + chochla" — ROZSTRZYGNIĘTY [2026-06-01, decyzja Oskara]

Theming: **podmieniony cukiernik** → miejsce „spożywcze" (Cukiernia) staje się **Piccolo**, a osoba tam pracująca to **Jordan** (kucharz, atrybut **chochla**). Struktura logiczna i zdania-pogłoski **nietknięte** (izomorfizm ⇒ jednoznaczność zachowana). Wynik = „Jordan pracuje w Piccolo" → gracz idzie tam i rozpoznaje kontakt po **chochli**. Fundament (Kordian/Lambert/Ulrich, Cukiernia) zostaje wyżej jako baza; wersja themingowa niżej.

#### Wersja themingowa (Jordan / Piccolo / chochla) — tor TR

> Zmiana wobec fundamentu: Cukiernia → **Piccolo**, jej produkt pierniki → **gorąca strawa** (wydawana chochlą), Ulrich → **Jordan**; Kuźnia – produkt podkowy → **metalowe przedmioty** (kucharz kupuje u kowala). Reszta identyczna.

**Polecenie:** Te trzy osoby poszły dziś rano na miasto i każda coś kupiła. Wskaż, kto co kupił oraz gdzie pracują.

**Miejsca (i co tam wytwarzają):**
- Stary Młyn – chleb
- **Piccolo – gorąca strawa** *(kuchnia; wydawana chochlą)*
- Kuźnia – metalowe przedmioty

**Imiona:** Kordian, Lambert, **Jordan**
**Zakupy:** jedzenie, chochla, sukno

**Pogłoski (prawdziwe):**
1. Lambert mógł zjeść coś u siebie, ale poszedł kupić jedzenie gdzieś indziej.
2. Jordan zrobił zakupy u osoby, która kupiła sukno.
3. Młynarz zarzeka się, że nie kupił nic od Kordiana.

**Rozwiązanie (jednoznaczne ✓):**
| Osoba | Pracuje | Kupił(a) |
|---|---|---|
| Kordian | Kuźnia (metalowe przedmioty) | sukno |
| Lambert | Stary Młyn (chleb) | jedzenie (strawa — z Piccolo) |
| **Jordan** | **Piccolo (strawa)** | chochla (od Kordiana) |

**Wyjście = imię + miejsce + atrybut:** rozwiązanie mówi, że **Jordan pracuje w Piccolo**. Gracz idzie do Piccolo i rozpoznaje kontakt — **kucharza z chochlą** = Jordan. Imię (z zagadki) + miejsce (z dedukcji) + atrybut (chochla = narzędzie kucharza w Piccolo, sygnał rozpoznawczy na miejscu, spójny z hasłem-testem „imię Jordan"). Dodatkowa spójność: Jordan kupuje chochlę u kowala (kucharz kompletuje wyposażenie kuchni) — chochla pełni podwójną rolę: zakup w zagadce i atrybut rozpoznawczy w Piccolo.

**Drobna do ewentualnej decyzji:**
- „Piccolo" anachroniczne wobec 1454 (CLAUDE.md) — użyte zgodnie z Twoją trójką jako realna nazwa lokalu docelowego; w fikcji opisane jako kuchnia/gospoda.
- **Theming krzyżacki:** ten wzorzec prowadzi do Jordana/Piccolo (TR). Krzyżacy idą do Albrechta — ich Z2 potrzebuje innego celu (inne imię/miejsce), **ta sama struktura logiczna**.

> Stare propozycje formy (nieaktualne): trójkąt skojarzeń, trzy rebusy, trzy daty, trzy postaci.

## Lokal - decyzja

Autor wymienił "Picollo". Sprawdzenie:
- **Pierogarnia "Picollo"** (jeśli istnieje w Toruniu i serwuje, można jako lokalizacja - wymaga ustalenia z właścicielem).
- **Alternatywne lokale historyczne** w Toruniu: Pierogarnia Stary Toruń, Manekin (Rynek), Karczma Spichrz.
- Jeśli używamy nazwy współczesnej (Picollo) → łamiemy stylistykę "Toruń 1454". Lepiej **stylizowana nazwa**: "Gospoda Pod Chochlą" / "U Jordana" / "Pod Czerwonym Kogutem".

## Mechanika spotkania

1. Grupa przychodzi do lokalu.
2. Pyta o "Jordana" / "osobę z chochlą".
3. NPC (Jordan) potwierdza tożsamość.
4. Grupa siada → zaczyna się Faza 2A (patrz `concept/02-faza-2a-jordan.md`).

## Otwarte pytania

1. **Lokal** - który konkretnie? Wymaga zgody właściciela na gościnę 12 grup po 15-20 min każda.
2. **Czas trwania spotkania** vs harmonogram MG - lokal nie wytrzyma 12 grup naraz; potrzebny **slot system**?
3. **Rekwizyt "chochla"** - kucharz ją nosi widocznie? Czy gracze muszą się dopytać i wtedy ją wyjmuje?
4. **Co jeśli grupa wejdzie do innego lokalu i zapyta o Jordana?** Mechanizm fail-safe (właściciele okolicznych lokali mają instrukcję "Jordan jest u nas")?

## Co autor może zrobić sam vs gdzie pomocy

- **Sam**: wybór lokalu (negocjacje), stworzenie trzech rzeczy do zestawienia (kreatywna), nadanie imienia/stylu NPC Jordana.
- **Z pomocą agenta**: research dostępnych lokali w obrębie gry (mogę sprawdzić listę 45 miejsc), weryfikacja historyczna nazw, generacja 3-4 wariantów "trzech rzeczy do zestawienia" do wyboru.
