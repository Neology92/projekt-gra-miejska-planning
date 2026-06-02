# Zagadka 2 - Droga do Jordana

**Status**: 🟡 **rdzeń logiczny gotowy, dochodzi NOWA WARSTWA [2026-06-02]** — zagadka logiczna kompletna (Oskar) i zweryfikowana, ale uwagi Oskara z 2026-06-02 dodają **warstwę glifów** (nawigacja) + **hasło dnia** i zmieniają sposób, w jaki gracz dociera do celu (nie „idź, gdzie Jordan pracuje"). Patrz `## REWIZJA [2026-06-02]` na dole. Rdzeń logiczny niżej **nietknięty**.

## Mechanika (z briefu autora)

Po wizycie u MG (koniec F1) grupa dostaje kopertę z:
1. **Plot twistem**: pośrednika nie ma.
2. **Trzy rzeczy do zestawienia** (jakaś forma zagadki logicznej).
3. Rozwiązanie = wskazówka *"udajcie się do [lokal] i znajdźcie osobę z [atrybut] o imieniu [imię]"*.
4. Atrybut: **chochla**. Imię: **Jordan**.
5. Lokal: **Picollo** (lub inny - do decyzji, patrz niżej).

## Trop celu kuriera — zasiany w K2 [2026-06-01, decyzja Oskara]

Koperta K2 (slip pośrednika R.) niesie **silny trop**: list ma trafić do **głowy Rady / chairmana**, w jego własne ręce — *bez zdradzania, kim chairman jest*. To ustawia cel kuriera na początku gry. Funkcja: w finale (Z7 „HANS VON BAYSEN IS JORDAN THE COOK") gracz sam spina, że chairman z K2 = Hans von Baysen z listy Z3 („they call him chairman") = poznany Jordan-kucharz. Anty-prowadzenie-za-rączkę. Pełny łańcuch i zależności → `envelopes/miasto-2-Z2.md`, `puzzles/z7-szyfr-spec.md §5`. **Ironia:** zagadka Z2 prowadzi ich do „następnego kontaktu" (Jordan) — a to właśnie do niego (jako chairmana) mieli zanieść list. Nie wiedzą tego aż do finału.

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

1. **Lokal** — ROZSTRZYGNIĘTE [2026-05-31]: **Piccolo** (patrz `todo/otwarte-pytania.md` #34). Otwarte: zgoda właściciela na gościnę 10 grup po 15-20 min każda.
2. **Czas trwania spotkania** vs harmonogram MG - lokal nie wytrzyma 10 grup naraz; potrzebny **slot system**?
3. **Rekwizyt "chochla"** - kucharz ją nosi widocznie? Czy gracze muszą się dopytać i wtedy ją wyjmuje?
4. **Co jeśli grupa wejdzie do innego lokalu i zapyta o Jordana?** Mechanizm fail-safe (właściciele okolicznych lokali mają instrukcję "Jordan jest u nas")?

## Co autor może zrobić sam vs gdzie pomocy

- **Sam**: wybór lokalu (negocjacje), stworzenie trzech rzeczy do zestawienia (kreatywna), nadanie imienia/stylu NPC Jordana.
- **Z pomocą agenta**: research dostępnych lokali w obrębie gry (mogę sprawdzić listę 45 miejsc), weryfikacja historyczna nazw, generacja 3-4 wariantów "trzech rzeczy do zestawienia" do wyboru.

---

## REWIZJA [2026-06-02] — uwagi Oskara (DO WPROWADZENIA, jeszcze nie wprowadzone)

> Rdzeń logiczny wyżej **zostaje**. To są nadbudowy nad nim. Pełny kontekst kopertowy → `envelopes/miasto-2-Z2.md §Rewizja`.

### C. NIE zdradzać z góry, że szukają Jordana / że pójdą tam, gdzie pracuje
- W K2 znika zdanie „*once you have placed Jordan, you will know where he works — go there and ask for him by name*". Gracze na tym etapie **nie mają wiedzieć, że szukają Jordana**.
- **Trzy rzeczy do samodzielnego zestawienia:** *Piccolo* (miejsce) · *Jordan* (imię) · *chochla* (atrybut). Cel ujawnia się dopiero po spięciu wszystkich trzech. „Jordan" = **odkrycie**, nie odczyt.

### D. Warstwa glifów — ROZSTRZYGNIĘTA STRUKTURA [2026-06-02, Oskar]
**Po rozwiązaniu zagadki gracze mają 3 pełne ścieżki `[glif]–[miejsce]–[osoba]–[atrybut]` — po jednej na każdą z trzech osób — z czego TYLKO JEDEN glif istnieje na mapie.** Stąd sami muszą ustalić, dokąd iść (to ten z prawdziwym glifem).

- Zagadka logiczna daje komplet dla wszystkich trzech (kto gdzie pracuje, co kupił, jaki glif ma jego miejsce):
  - Kordian → Kuźnia → sukno → glif ▢ (zmyślony)
  - Lambert → Stary Młyn → jedzenie → glif ▢ (zmyślony)
  - **Jordan → Piccolo → chochla → glif ▢ (PRAWDZIWY — jest na mapie Z1)**
- **Cel NIE jest wyłożony** — zagadka nie mówi „idź do Jordana/Piccolo". Trzy ścieżki są równorzędne; rozstrzygnięcie dokąd iść = **sprawdzić, który z trzech glifów występuje na mapie**. To domyka §C („odkrycie, nie odczyt"): cel odsłania dopiero porównanie glifów z mapą, nie zdanie w zagadce.
- Glify pochodzą z **wygenerowanej mapy Z1** (`public/maps/`). Glif Piccolo = realny punkt na mapie; glify Młyna i Kuźni = wiarygodne wizualnie, ale **nieobecne**.
- Gdy grupa ustali prawdziwy glif → ma komplet: **miejsce (Piccolo) + imię (Jordan) + atrybut (chochla)** → idzie tam i podaje hasło dnia (§E).

**Do rozpisania (szczegół, nie teraz finalnie):** trzeba zasiać graczom, że mają **porównać glify z mapą** (np. w K2 / slipie R.: „jeden z tych znaków odnajdziesz na swojej mapie — tam czeka twój człowiek"). Bez tego nie wiedzą, że glif jest kluczem nawigacyjnym.

> ⚠ **Zależność od mapy Z1 (techniczna, wciąż otwarta):** glif Piccolo **musi realnie istnieć** na wygenerowanej mapie (`public/maps/`) i być jednym z glifów deszyfrownika Z1. Przy generowaniu mapy **zarezerwować/wskazać glif punktu Piccolo**; dobrać 2 wiarygodne, ale nieistniejące glify dla Młyna i Kuźni. To sprzęga z pendingiem mapy/deszyfrownika.

### E. Hasło dnia — przekazuje je R. (w slipie K2), rozpoznaje Jordan
- Slip R. instruuje: **po dotarciu na miejsce zwrócić się do osoby PO IMIENIU i wskazać, co kupiła dziś rano (chochlę)** → wtedy będzie wiedziała, że są „od nas". To **hasło ustalone na dziś**.
- Łączy zagadkę z rozpoznaniem: imię (z dedukcji/zagadki) + atrybut-zakup (chochla) = parol. Spójne z „rozpoznają kucharza po chochli".
- ⚠ **Cross-ref do zsynchronizowania:** `prototype/jordan-actor-script-draft.md` — Jordan-aktor **musi rozpoznawać trigger** „imię Jordan + «kupiłeś dziś rano chochlę»" jako hasło wejścia (a nie samo „pytanie o Jordana").
