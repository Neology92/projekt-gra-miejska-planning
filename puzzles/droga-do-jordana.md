# Zagadka 2 - Droga do Jordana

**Status**: 🟡 **rdzeń logiczny gotowy, dochodzi NOWA WARSTWA [2026-06-02]** — zagadka logiczna kompletna (Oskar) i zweryfikowana, ale uwagi Oskara z 2026-06-02 dodają **warstwę glifów** (nawigacja) + **hasło dnia** i zmieniają sposób, w jaki gracz dociera do celu (nie „idź, gdzie Jordan pracuje"). Patrz `## REWIZJA [2026-06-02]` na dole. Rdzeń logiczny niżej **nietknięty**.

> ### ⚔ ZMIANA ATRYBUTU [2026-06-02, decyzja Oskara] — chochla → **miecz**
> Poranny zakup Jordana w zagadce (i zarazem **parol dnia**) to teraz **miecz**, nie chochla. Powód: miecz **wraca w finale** — Bażyński (= Jordan) walczy nim w scence pod zamkiem (`concept/04-faza-3-final.md`). Zakup Jordana zyskuje funkcję bramkującą całą grę (foreshadow → payoff), czego chochla nie miała.
> - **Wariant rozpoznania = B („ukryty zakup, parol, broń finału"):** Jordan zostaje kucharzem — **chochla pozostaje** jako jego narzędzie/przykrywka i tie‑in z legendą („Jordan z chochlą", wiki `legenda-jordan.js`). Miecz jest **kupiony i schowany**; NIE jest noszony jako widoczny atrybut. Rozpoznanie na miejscu = **imię „Jordan" + parol „kupiłeś dziś rano miecz"** (nie „człowiek z mieczem"). Przykrywka kucharza nienaruszona.
> - **Logika zagadki bez zmian (izomorfizm):** miecz to *ironwork* z Kuźni — wpada dokładnie w slot, który miała chochla (przedmiot metalowy kupiony u kowala Kordiana). Rozwiązanie dalej jednoznaczne; „sukno" wciąż jedynym zakupem spoza trójki (silnik P2).
> - Poprzedni wariant (chochla jako zakup/atrybut/parol) był ROZSTRZYGNIĘTY [2026-06-01]; pełna treść chochla w `git log` tego pliku. Wzmianki o chochli **jako narzędziu kucharza / legendzie** zostają w mocy.

## Mechanika (z briefu autora)

Po wizycie u MG (koniec F1) grupa dostaje kopertę z:
1. **Plot twistem**: pośrednika nie ma.
2. **Trzy rzeczy do zestawienia** (jakaś forma zagadki logicznej).
3. Rozwiązanie = wskazówka *"udajcie się do [lokal] i znajdźcie osobę o imieniu [imię], która kupiła dziś rano [zakup]"*.
4. Zakup-parol: **miecz** (zob. baner „ZMIANA ATRYBUTU" wyżej). Imię: **Jordan**. Kucharz Jordan dalej nosi **chochlę** (przykrywka/legenda), ale rozpoznanie idzie przez imię + parol, nie przez widoczny atrybut.
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

### ✅ Most do „Jordan + Piccolo + miecz" — ROZSTRZYGNIĘTY [2026-06-01; zakup-parol zmieniony chochla → miecz 2026-06-02]

Theming: **podmieniony cukiernik** → miejsce „spożywcze" (Cukiernia) staje się **Piccolo**, a osoba tam pracująca to **Jordan** (kucharz; chochla = jego narzędzie/przykrywka). Struktura logiczna i zdania-pogłoski **nietknięte** (izomorfizm ⇒ jednoznaczność zachowana). Wynik = „Jordan pracuje w Piccolo" → gracz idzie tam i rozpoznaje kontakt przez **imię + parol „kupiłeś dziś rano miecz"** (patrz §E i baner „ZMIANA ATRYBUTU"). Fundament (Kordian/Lambert/Ulrich, Cukiernia) zostaje wyżej jako baza; wersja themingowa niżej.

#### Wersja themingowa (Jordan / Piccolo / miecz) — tor TR

> Zmiana wobec fundamentu: Cukiernia → **Piccolo**, jej produkt pierniki → **gorąca strawa** (wydawana chochlą — flavor kuchni), Ulrich → **Jordan**; Kuźnia – produkt podkowy → **metalowe przedmioty / ironwork** (kucharz kupuje miecz u kowala). Reszta identyczna.

**Polecenie:** Te trzy osoby poszły dziś rano na miasto i każda coś kupiła. Wskaż, kto co kupił oraz gdzie pracują.

**Miejsca (i co tam wytwarzają):**
- Stary Młyn – chleb
- **Piccolo – gorąca strawa** *(kuchnia; wydawana chochlą)*
- Kuźnia – metalowe przedmioty

**Imiona:** Kordian, Lambert, **Jordan**
**Zakupy:** jedzenie, miecz, sukno

**Pogłoski (prawdziwe):**
1. Lambert mógł zjeść coś u siebie, ale poszedł kupić jedzenie gdzieś indziej.
2. Jordan zrobił zakupy u osoby, która kupiła sukno.
3. Młynarz zarzeka się, że nie kupił nic od Kordiana.

**Rozwiązanie (jednoznaczne ✓):**
| Osoba | Pracuje | Kupił(a) |
|---|---|---|
| Kordian | Kuźnia (metalowe przedmioty) | sukno |
| Lambert | Stary Młyn (chleb) | jedzenie (strawa — z Piccolo) |
| **Jordan** | **Piccolo (strawa)** | miecz (od Kordiana) |

**Wyjście = imię + miejsce + zakup-parol:** rozwiązanie mówi, że **Jordan pracuje w Piccolo** oraz że **kupił dziś rano miecz**. Gracz idzie do Piccolo, podaje imię + parol („kupiłeś dziś rano miecz") i tak rozpoznaje kontakt. Imię (z zagadki) + miejsce (z dedukcji) + parol-zakup (miecz). **Uwaga projektowa:** parol „miecz" jest celowo *kontrintuicyjny* — oczywisty strzał „kucharz → chochla" jest błędny; tylko gracz, który rzeczywiście rozwiązał zagadkę, wskaże miecz. To wzmacnia bramkę (parol testuje dedukcję, nie zgadywanie). Spójność fabularna: kucharz kupujący miecz w dniu buntu = cichy foreshadow (gracz tego nie widzi na miejscu — miecz schowany — ale wraca w finale jako broń Bażyńskiego). Chochla zostaje jako narzędzie kucharza / przykrywka, nie jako klucz rozpoznania.

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
2. Podaje imię „Jordan" + parol „kupiłeś dziś rano miecz".
3. NPC (Jordan) potwierdza tożsamość.
4. Grupa siada → zaczyna się Faza 2A (patrz `concept/02-faza-2a-jordan.md`).

## Otwarte pytania

1. **Lokal** — ROZSTRZYGNIĘTE [2026-05-31]: **Piccolo** (patrz `todo/otwarte-pytania.md` #34). Otwarte: zgoda właściciela na gościnę 10 grup po 15-20 min każda.
2. **Czas trwania spotkania** vs harmonogram MG - lokal nie wytrzyma 10 grup naraz; potrzebny **slot system**?
3. **Rekwizyt "chochla"** - kucharz ją nosi widocznie jako przykrywkę (tak — flavor kuchni). **Rekwizyt „miecz"** - schowany (zakup poranny), NIE pokazywany w Piccolo; wypływa dopiero w finale jako broń Bażyńskiego (`concept/04-faza-3-final.md`). Do produkcji: 1× miecz (rekwizyt finałowy).
4. **Co jeśli grupa wejdzie do innego lokalu i zapyta o Jordana?** Mechanizm fail-safe (właściciele okolicznych lokali mają instrukcję "Jordan jest u nas")?

## Co autor może zrobić sam vs gdzie pomocy

- **Sam**: wybór lokalu (negocjacje), stworzenie trzech rzeczy do zestawienia (kreatywna), nadanie imienia/stylu NPC Jordana.
- **Z pomocą agenta**: research dostępnych lokali w obrębie gry (mogę sprawdzić listę 45 miejsc), weryfikacja historyczna nazw, generacja 3-4 wariantów "trzech rzeczy do zestawienia" do wyboru.

---

## REWIZJA [2026-06-02] — uwagi Oskara (DO WPROWADZENIA, jeszcze nie wprowadzone)

> Rdzeń logiczny wyżej **zostaje**. To są nadbudowy nad nim. Pełny kontekst kopertowy → `envelopes/miasto-2-Z2.md §Rewizja`.

### C. NIE zdradzać z góry, że szukają Jordana / że pójdą tam, gdzie pracuje
- W K2 znika zdanie „*once you have placed Jordan, you will know where he works — go there and ask for him by name*". Gracze na tym etapie **nie mają wiedzieć, że szukają Jordana**.
- **Trzy rzeczy do samodzielnego zestawienia:** *Piccolo* (miejsce) · *Jordan* (imię) · *miecz* (zakup-parol). Cel ujawnia się dopiero po spięciu wszystkich trzech. „Jordan" = **odkrycie**, nie odczyt.

### D. Warstwa glifów — ROZSTRZYGNIĘTA STRUKTURA [2026-06-02, Oskar]
**Po rozwiązaniu zagadki gracze mają 3 pełne ścieżki `[glif]–[miejsce]–[osoba]–[atrybut]` — po jednej na każdą z trzech osób — z czego TYLKO JEDEN glif istnieje na mapie.** Stąd sami muszą ustalić, dokąd iść (to ten z prawdziwym glifem).

- Zagadka logiczna daje komplet dla wszystkich trzech (kto gdzie pracuje, co kupił, jaki glif ma jego miejsce):
  - Kordian → Kuźnia → sukno → glif ▢ (zmyślony)
  - Lambert → Stary Młyn → jedzenie → glif ▢ (zmyślony)
  - **Jordan → Piccolo → miecz → glif ▢ (PRAWDZIWY — jest na mapie Z1)**
- **Cel NIE jest wyłożony** — zagadka nie mówi „idź do Jordana/Piccolo". Trzy ścieżki są równorzędne; rozstrzygnięcie dokąd iść = **sprawdzić, który z trzech glifów występuje na mapie**. To domyka §C („odkrycie, nie odczyt"): cel odsłania dopiero porównanie glifów z mapą, nie zdanie w zagadce.
- Glify pochodzą z **wygenerowanej mapy Z1** (`public/maps/`). Glif Piccolo = realny punkt na mapie; glify Młyna i Kuźni = wiarygodne wizualnie, ale **nieobecne**.
- Gdy grupa ustali prawdziwy glif → ma komplet: **miejsce (Piccolo) + imię (Jordan) + zakup-parol (miecz)** → idzie tam i podaje hasło dnia (§E).

**Do rozpisania (szczegół, nie teraz finalnie):** trzeba zasiać graczom, że mają **porównać glify z mapą** (np. w K2 / slipie R.: „jeden z tych znaków odnajdziesz na swojej mapie — tam czeka twój człowiek"). Bez tego nie wiedzą, że glif jest kluczem nawigacyjnym.

> ✅ **Zależność od mapy Z1 — ZWERYFIKOWANE [2026-06-03]:** Piccolo = landmark **L01** (`tools/map-gen/map-data.js`), glif **≡** (trzy poziome kreski, y=11/16/21) — renderowany na wszystkich 10 mapach jako always-on landmark. Glif ≡ jest odrębny od alfabetu Z1_GLYPHS (żaden kod nie ma poziomych kresek). Dystraktory w zagadce: **✚** (Młyn) i **⊥** (Kuźnia) — oba **nieobecne w Z1_GLYPHS i Z1_LANDMARKS** ✓. ⚠ **Jedna uwaga do Oskara:** C04 (Ratusz) ma glif ⊞ (kwadrat z krzyżem w środku) — przy małej skali markera r≈21 jego wewnętrzny krzyż może być wzięty za ✚. C04 występuje na mapach G1, G3, G5, G6, G10. Jeśli gracze tych grup dojdą do zagadki Z2 (tylko G1–G5 to TR), G3/G5 mają C04 aktywny → potencjalny fałszywy trop. Decyzja: pozostawić ✚ jako dystraktor z tą uwagą, albo podmienić ✚ na inny zmyślony znak (np. ✦). Nie zmieniam bez Twojej decyzji.

### E. Hasło dnia — przekazuje je R. (w slipie K2), rozpoznaje Jordan
- Slip R. instruuje: **po dotarciu na miejsce zwrócić się do osoby PO IMIENIU i wskazać, co kupiła dziś rano (miecz)** → wtedy będzie wiedziała, że są „od nas". To **hasło ustalone na dziś**.
- Łączy zagadkę z rozpoznaniem: imię (z dedukcji/zagadki) + zakup (miecz) = parol. Parol kontrintuicyjny (kucharz, a kupił miecz) → testuje dedukcję, nie zgadywanie „chochla".
- ⚠ **Cross-ref ZSYNCHRONIZOWANY:** `materials/actors/jordan-actor-script-draft.md` — Jordan-aktor rozpoznaje trigger „imię Jordan + «kupiłeś dziś rano miecz»" jako hasło wejścia (a nie samo „pytanie o Jordana").
