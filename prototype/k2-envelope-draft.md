# K2 — After Z1 Envelope (draft)

> **Language:** English (player-facing). Planning notes in Polish below.
> **Status:** draft [2026-06-01] — awaiting Oskar's review.
> **Contents of physical envelope:** main note (this) + intermediary's note (separate slip).
> **Triggers:** MG hands this to group after they correctly report 4 locations in order.

---

## MAIN NOTE — K2 (player reads this)

---

*Four marks walked, four names given — and in return, this. We had hoped to find our contact waiting. Instead: an envelope, and a scrap of paper folded inside it.*

*The carnival is louder here, and stranger. Carts roll toward the square that the men swear are loaded with fireworks "for the feast" — but the crates ride heavy, and the men guarding them are not laughing. Under the masks and the music, the whole city feels wound tight, like a string before it snaps.*

---

**Messengers,**

Your contact is gone.

He left this note *(enclosed)* and nothing more. We do not know if he fled, was taken, or simply decided the risk was too great — though a contact who vanishes the same night the city arms itself is rarely a contact who chose to leave. What we know is that the letter still needs to reach its recipient before tonight.

You will have to find the way yourselves.

Before you do — you were on the streets of this city today. So were other people. Here is what they were saying.

---

*Overheard near the Old Town Square:*

> *"The Council meets after dark, tells no one, decides for everyone. Secret — because it fears the light."*

*A craftsman near the city wall:*

> *"We give the men and the weapons. When it's all over, the Council will still rule — not us."*

*Two merchants, arguing by a cart:*

> *"War comes — bread doubles in price. This is a lords' quarrel and the baker pays for it."*

*Whispered at the inn:*

> *"They say Bażyński is handing Prussia to the king in Kraków. Swapping one master for another."*

*An old woman, shaking her head:*

> *"Bażyński? His leg's gone stiff on him again — the great man can barely cross a room. And that's who means to bring down armoured knights."*

*An old man at the gate:*

> *"When it's done, some knight will walk away with all of Prussia in his pocket. The cities did the work. Someone else will take the prize."*

---

Now. Find your next contact.

**[Z2 — THE MORNING ERRANDS]**

Three people went into town this morning, and each bought one thing. Work out who bought what — and where each of them works.

*Where they work, and what is made there:*
- The Old Mill — bread
- Piccolo — hot food *(a kitchen — ladled out)*
- The Smithy — horseshoes

*The three:* Kordian · Lambert · Jordan
*What was bought:* food · a horseshoe · cloth

*Overheard this morning — all of it true:*
1. Lambert could have eaten at his own place, yet he went to buy his food elsewhere.
2. Jordan bought from the one who bought cloth.
3. The miller swears he bought nothing from Kordian.

Once you have placed Jordan, you will know where he works. Go there — and ask for him by name.

---

## INTERMEDIARY'S NOTE — separate slip (player reads this)

---

I cannot be there. Too dangerous now.

And it was never mine to keep — I was only ever to pass it on.

This letter is for the head of their Council. Their chairman. Into his own hand, and no other's.

Find the way. — R.

---

*So we are on our own. A riddle to point us at a man, a man to point us onward, and the letter still heavy in the bag. Whoever R. was, he is gone — we are not. Three people, three errands. Let us work it out.*

---

## PLANNING NOTES (nie dla gracza)

**Plotki dobrane z Puli A** (krytyka TR dla kurierów TR):
- A3 — Tajna Rada opaque, unelected (forshadow F2A)
- A5 — craftsmen shoulder the risk, Rada gets power (F3)
- A6 — bread prices, bunt costs the poor (accessible, F3)
- A7 — Bażyński giving Prussia to Poland (F3, inkorporacja)
- A8 — Bażyński will walk away with all of Prussia (strong F3 forshadow; spoilery? tak, celowo)
- **NOWA [2026-06-02] — kulawy Bażyński (klamra C2):** „his leg's gone stiff… can barely cross a room." Podwójna funkcja: (a) Pula A — słaby/dwuznaczny przywódca; (b) **forshadow tożsamości** — Jordan też kuleje (skrypt Piotra). Uważny gracz łączy w finale (Jordan=Bażyński). Świadomie **bez** wzmianki o tavernie/lokalu — żeby NIE spalić twistu przed wizytą u Jordana (kulającego w Piccolo). Pokrycie: Bażyński „kulawy bazyliszek", reumatyzm (`jan-bazynski.js`).

**Wiadomość pośrednika:** lakoniczna, tylko inicjał (nie wiadomo kto to R. — niepotrzebna wiedza). Mechanika: gracze dostają ją jako „dowód" że pośrednik istniał, ale uciekł.

**TROP CELU — „dostarcz chairmanowi" [2026-06-01, decyzja Oskara]:** slip R. zasiewa **silny trop**, że list ma trafić do **głowy Rady / chairmana**, w jego własne ręce. To ustawia cel kuriera na początku gry — **bez zdradzania, kim chairman jest**. Funkcja: w finale, gdy Z7 odszyfruje „HANS VON BAYSEN IS JORDAN THE COOK", gracz sam spina wątki: chairman z K2 = Hans von Baysen z listy Z3 (wpis #1 „they call him chairman") = Jordan-kucharz, którego poznali. Splice player-derived, anty-prowadzenie-za-rączkę. Dlatego list Z7 **został odchudzony** (nie zapowiada już rodzaju informacji) — ciężar znaczenia niosą trzy wątki: ten trop + „chairman" przy wpisie #1 Z3 + sam szyfr. Patrz `prototype/z7-szyfrogram-draft.md` (nota „List ODCHUDZONY") i `puzzles/z7-szyfr-spec.md`.

> ⚠ **Wersja Krzyżacy:** ich K2 prowadzi do Albrechta (nie chairmana TR) — trop celu musi być inny (parole/hasło do komtura, nie „chairman Rady"). Do napisania przy MVP. NIE kopiować tropu TR 1:1.

**Z2 — wpisana wersja themingowa [2026-06-01]:** zagadka logiczna 3 osoby × {miejsce pracy, zakup}, rdzeń Oskara z nałożoną trójką **Jordan / Piccolo / chochla**. Rozwiązanie jednoznaczne (dowód: `puzzles/droga-do-jordana.md`). Wynik = **Jordan pracuje w Piccolo** → gracz idzie tam, pyta o Jordana (imię = jednocześnie hasło-test wejścia, patrz `concept/02-faza-2a-jordan.md`), rozpoznaje go po **chochli**. „ladled out / ask for him by name" niesie atrybut + hasło bez meta-gadania.
- **Imiona prowizoryczne** (Kordian/Lambert/Jordan): „Kordian" anachroniczny (XIX w.); do podmiany przy period-themingu. Tylko **Jordan** jest kanoniczny (kontakt TR).
- **Wersja krzyżacka:** inne K2 — Z2 prowadzi do **Albrechta**, nie Jordana/Piccolo; ta sama struktura logiczna, inny cel (imię/miejsce). Do napisania przy MVP. NIE kopiować 1:1.

**Wersja Krzyżacy:** inne K2 (Pula B zamiast A; Z2 prowadzi do Albrechta, nie Jordana). Do napisania przy skalowaniu do MVP.

**Ton:** plot twist (pośrednik zniknął) podany sucho, bez dramatyzmu — bardziej straszny tak niż z fanfarami.

**Pass atmosferyczny [2026-06-02]:**
- **Klamra A1 (R. → martwy flisak w Z4):** wzmocniono cień „was taken" („a contact who vanishes the same night the city arms itself is rarely a contact who chose to leave"). Payoff w K-Z4: R. = martwy boatman nad Wisłą, zginął strzegąc przechwyconej dyspozycji. Nie zdradzać tu — tylko zasiać.
- **Klamra B3 (broń „na fajerwerki"):** „carts… loaded with fireworks 'for the feast' — but the crates ride heavy" → proch do dział wnoszony pod osłoną zapustów. Forshadow szturmu/finału. Pokrycie: `karnawal-1454.js` (broń/proch „na turniej/fajerwerki").
- **Eskalacja napięcia:** K1 = „miasto nie wie, że ma się bać"; K2 = „wound tight, like a string before it snaps" — napięcie rośnie w godzinach (oś 6 II, jeden wieczór).
- **Maski (kontynuacja A2):** „under the masks and the music" — utrzymuje motyw przebrania zasiany w K1, wiodący do K3.

**Dwa rejestry [2026-06-01]:** dorzucone *otwarcie* i *zamknięcie* = kursywa (narracja z głów); main note + slip R. = roman (wiadomości z nadawcą — slip przeniesiony z kursywy na roman dla spójności klucza). Wiadomości **nieruszone treściowo**, tylko oprawa + format. ⚠ **Plotki (overheard)** = przytoczone słowa świata → docelowo roman; zostawione kursywą do passu stylizacyjnego (nie rozszerzam scope). Klucz: kursywa=głowa, roman=słowa świata (`mechanics/koperty-mg.md`).
