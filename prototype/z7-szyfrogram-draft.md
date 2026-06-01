# Prop — Z7 Intercepted Teutonic Dispatch (cipher) — draft

> **Language:** English (player-facing). Planning notes in Polish below.
> 🟢 **ZAKTUALIZOWANO — MECHANIKA NAGŁÓWKOWA + SHIFT +7 [2026-06-01]:** szyfr = Cezar shift+7, klucz = porównanie nagłówków (nie liczenie liter), brak koła. Prop poniżej = **wersja finalna (shift +7)**. Backup shift+3 → `puzzles/z7-szyfr-spec.md §0`.
> 🗄️ Backup Vigenère → `prototype/z7-szyfrogram-vigenere-backup.md`. Backup modelu +21 → `puzzles/z7-szyfr-spec.md §0`.
> **Status:** draft [2026-06-01] — Canon → `puzzles/z7-szyfr-spec.md`.
> **What it is:** an intercepted letter from the Komtur of Thorn to Marienburg, carried in envelope **K8**. Its enciphered core reveals the twist.
> **Key:** the Order's motto appears in a distinctive script at the top of this letter — the SAME script (and punctuation) as the motto heading the Z3 names list the group already carries. Compare the two headers letter by letter to find the shift. No extra tool needed.

---

## PROP TEXT — Z7 dispatch (player reads this)

---

*Whatever road brought it into our hands, here it is — a letter the Order never meant any of us to read. A dispatch from the castle, taken on its way to Marienburg, never delivered. And the heading is the same hand, the same proud script, as the list of names we carry. The two belong together.*

---

**OLSMLU, OPSMLU BUK DLOYLU!**

*To the Hochmeister at Marienburg. In haste — and for your eyes alone.*

What you asked of me, I have. I will not trust it to any road in plain words — too many hands lie between here and Marienburg. I set it down by our word, as we agreed:

---

```
OHUZ  CVU  IHFZLU  PZ  QVYKHU  AOL  JVVR
```

---

*Read it, then burn it. If this falls into the wrong hands before you, our word still keeps it shut.*

*— by the hand of the Komtur of Thorn*

---

*The Order's own word locks it — but we hold their word too, headed across the list of names. Set the one against the other.*

---

## HOW TO READ IT (player aid — decryption)

You have seen this script before — it is the same hand that headed the list of names you took. Compare the two headers, word by word, letter by letter. The punctuation marks the word boundaries. Each letter has moved the same number of steps along the alphabet — find that number, then apply it to the message below.

*(Decrypted, the message reads: HANS VON BAYSEN IS JORDAN THE COOK — do NOT print this line on the player copy.)*

---

## PLANNING NOTES (nie dla gracza)

**Szyfr: Cezar, shift +7 [DECYZJA Oskara 2026-06-01]:** przesunięcie odkrywane przez porównanie nagłówka Z7 z jawnym nagłówkiem Z3 — brak rekwizytu (koła). Motto z interpunkcją: `HELFEN, HILFEN UND WEHREN!`. Zaszyfrowane motto (nagłówek Z7): `OLSMLU, OPSMLU BUK DLOYLU!`. Ciphertext ciała (round-trip ✓): `OHUZ CVU IHFZLU PZ QVYKHU AOL JVVR`. ~~Cezar +3 (wariant A) — porzucony.~~ ~~Cezar +21 (stary model liczenia liter) — archiwalny.~~ ~~Vigenère — archiwalny.~~

**Rama narracyjna UNIWERSALNA [decyzja Oskara 2026-06-02]:** dodano otwarcie i domknięcie *kursywą* (z głów) — „Whatever road brought it into our hands… a letter the Order never meant any of us to read." **Method-agnostic**: K8 = ten sam przechwycony list niezależnie którą opcjonalną (Z4/Z5/Z6) grupa zrobiła. Realizuje „uniwersalna treść Z7" + zasadę koperta=scena (`mechanics/koperty-mg.md §Zasada nadrzędna #2`). Domknięcie kieruje do mechaniki: „we hold their word too, headed across the list of names. Set the one against the other" (porównanie nagłówków). Szyfr i sam dispatch — **nietknięte**.

**Szyfrowany tylko rdzeń (41 liter), ramka jawna** — żeby praca w terenie była wykonalna. Ramka (zwrot „To the Hochmeister…", podpis Komtura) buduje klimat i kontekst bez kosztu deszyfrowania.

**Układ spacji = jak w odszyfrowanym zdaniu** [decyzja Oskara 2026-06-01]: szyfrogram zachowuje **granice słów identyczne z plaintextem** (`OHUZ CVU IHFZLU PZ QVYKHU AOL JVVR` → 4-3-6-2-6-3-4), NIE grupy po 5. Rationale: (a) Cezar i tak łatwo złamać; (b) jak gracz pomyli literę, granice słów pozwalają **uzupełnić ją domysłem** (np. „QVYKH_" → QVYKHU); (c) równe kolumny są ładne, ale w trudnej zagadce terenowej **mylące**. Czytelność > czystość kryptograficzna.

**Fabuła:** to dyspozycja Albrechta Kalba (komtur toruński) do Malborka — wróg, którego grupa okradła z listy w Z3, sam zdradza tożsamość Jordana. Pokrycie: `donosiciele-1454.js` (komtur raportował do Malborka „spisek Rady z Bażyńskim").

**Link do Z3:** nagłówek Z7 MUSI używać **tego samego charakterystycznego fontu** co nagłówek pergaminu Z3 (`prototype/pergamin-lista-tr-draft.md`). Font + identyczna interpunkcja (przecinek, wykrzyknik) = sygnał wizualny, że oba nagłówki są związane — to cały hint.

**Płatność:** plaintext „…HANS VON BAYSEN…" domyka się z plantem na liście Z3 — gracz wraca i widzi, że kucharz był na szczycie listy gończej Zakonu.

**List ODCHUDZONY [2026-06-01, decyzja Oskara — anty-prowadzenie-za-rączkę]:** ciało listu NIE zapowiada już, *jaki rodzaj* informacji niesie szyfrogram. Usunięto „You pressed me to learn the head of their secret council — the one who hides himself among them" → zostało lakoniczne „What you asked of me, I have…". Gracz odszyfrowuje zdanie **na zimno**, bez ramki mówiącej „to tożsamość głowy Rady". Sens skleja sam, dopiero po zestawieniu trzech wątków:
- **K2 (trop celu):** „dostarcz list **chairmanowi** Rady, w jego własne ręce" — zasiane na początku.
- **Pergamin Z3:** wpis #1 „Hans von Baysen — *they call him chairman*".
- **Z7 (ten szyfr):** „HANS VON BAYSEN IS JORDAN THE COOK".
→ chairman, do którego mieli zanieść list = Hans von Baysen = Jordan-kucharz. Splice w pełni z materiałów gracza. **Warunek konieczny:** pergamin Z3 musi zachować frazę „they call him chairman" przy wpisie #1 (nośnik znaczenia po odchudzeniu listu).

**Plaintext ZATWIERDZONY [2026-06-01, skrócony — Jordan na końcu jako zaskoczenie]:** „HANS VON BAYSEN IS JORDAN THE COOK" (28 liter). Szyfr = Cezar +7. Brak rekwizytu (koła). Anachronizm minimalny. *(Poprzedni, dłuższy: „JORDAN THE COOK IS HANS VON BAYSEN THEIR CHAIRMAN" — backup w `puzzles/z7-szyfr-spec.md §0`.)*

**Stylizacja:** finalny list — pergamin, Fraktur, łac./niem. zwroty, pieczęć komtura. Bez koła Cezara — świadoma decyzja. Po dry-runie.
