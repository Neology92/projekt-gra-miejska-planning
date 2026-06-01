# Prop — Z7 Intercepted Teutonic Dispatch (cipher) — draft

> **Language:** English (player-facing). Planning notes in Polish below.
> 🟢 **ZAKTUALIZOWANO na CEZAR +21 [2026-06-01 wieczór]:** szyfr = Cezar, przesunięcie = liczba liter motta (21). Ciphertext i instrukcja poniżej — już Cezar. Treść listu (ramka + plaintext) bez zmian.
> 🗄️ **Backup poprzedniej wersji Vigenère** (z pełną tabula recta) → `prototype/z7-szyfrogram-vigenere-backup.md` — gdybyśmy wrócili do Vigenère.
> **Status:** draft [2026-06-01] — Canon → `puzzles/z7-szyfr-spec.md`.
> **What it is:** an intercepted letter from the Komtur of Thorn to Marienburg, carried in envelope **K8**. Its enciphered core reveals the twist.
> **Key:** the Order's motto in the CAPS header — the SAME motto that heads the Z3 names list the group already carries. **Count its letters** (`HELFENHILFENUNDWEHREN` = 21) — that number is the Caesar shift. The repeated motto is the clue.

---

## PROP TEXT — Z7 dispatch (player reads this)

---

**HELFEN · HILFEN · UND · WEHREN**

*To the Hochmeister at Marienburg. In haste — and for your eyes alone.*

You pressed me to learn the head of their secret council — the one who hides himself among them. I have it. I will not trust the plain words to any road. I set it down by our word, as we agreed:

---

```
EJMYVI  OCZ  XJJF  DN  CVIN  QJI  WVTNZI  OCZDM  XCVDMHVI
```

---

*Read it, then burn it. If this falls into the wrong hands before you, our word still keeps it shut.*

*— by the hand of the Komtur of Thorn*

---

## HOW TO READ IT (player aid — decryption)

You have seen this motto before — it heads the list of names you took. **The motto is the key — count its letters.**

1. Count the letters of the motto in the header: `HELFENHILFENUNDWEHREN` = **21**.
2. On the cipher wheel, that is your shift: **step each cipher letter back by 21** (the wheel loops — back 21 is the same as forward 5).
3. Do it letter by letter across the message.
4. Read all the true letters in order.

> Cipher wheel (two discs, A4) → separate print. **TODO:** design the wheel prop (outer ring A–Z, inner ring A–Z, set to shift 21).

*(Decrypted, the message reads: JORDAN THE COOK IS HANS VON BAYSEN THEIR CHAIRMAN — do NOT print this line on the player copy.)*

---

## PLANNING NOTES (nie dla gracza)

**Klucz [DECYZJA Oskara 2026-06-01 wieczór: Cezar +21]:** szyfr **Cezara**, przesunięcie = **liczba liter motta** = 21 (`HELFENHILFENUNDWEHREN`). Ciphertext (zweryfikowany round-trip): `EJMYV IOCZX JJFDN CVINQ JIWVT NZIOC ZDMXC VDMHV I`. ~~Wcześniejszy Vigenère `QSCIE…` — archiwalny.~~

**Szyfrowany tylko rdzeń (41 liter), ramka jawna** — żeby praca w terenie była wykonalna. Ramka (zwrot „To the Hochmeister…", podpis Komtura) buduje klimat i kontekst bez kosztu deszyfrowania.

**Układ spacji = jak w odszyfrowanym zdaniu** [decyzja Oskara 2026-06-01]: szyfrogram zachowuje **granice słów identyczne z plaintextem** (`EJMYVI OCZ XJJF DN CVIN QJI WVTNZI OCZDM XCVDMHVI` → 6-3-4-2-4-3-6-5-8), NIE grupy po 5. Rationale: (a) Cezar i tak łatwo złamać — ukrywanie granic nie chroni nic istotnego; (b) jak gracz pomyli pojedynczą literę, granice słów pozwalają **uzupełnić ją domysłem** (np. „JORDA_" → JORDAN); (c) równe kolumny są ładne, ale w już trudnej zagadce terenowej **mylące**. Czytelność > czystość kryptograficzna.

**Fabuła:** to dyspozycja Albrechta Kalba (komtur toruński) do Malborka — wróg, którego grupa okradła z listy w Z3, sam zdradza tożsamość Jordana. Pokrycie: `donosiciele-1454.js` (komtur raportował do Malborka „spisek Rady z Bażyńskim").

**Link do Z3:** nagłówek-motto MUSI być identyczny z nagłówkiem pergaminu Z3 (`prototype/pergamin-lista-tr-draft.md`). Powtórzenie = wskazówka, że to klucz.

**Płatność:** plaintext „…HANS VON BAYSEN…" domyka się z plantem na liście Z3 (jeśli „Hans von Baysen" tam jest — gracz wraca i widzi, że kucharz był na szczycie listy gończej Zakonu).

**Plaintext ZATWIERDZONY [2026-06-01]:** „JORDAN THE COOK IS HANS VON BAYSEN THEIR CHAIRMAN" (Oskar). Klucz/szyfr ustalone (Cezar +21), ciphertext zamknięty. Anachronizm Cezara minimalny (szyfr przesuwny znany w starożytności) — w przeciwieństwie do Vigenère nie wymaga noty w `fakty-vs-fabula.md`.

**Stylizacja:** finalny list — pergamin, Fraktur, łac./niem. zwroty, pieczęć komtura; **koło Cezara** (dwie tarcze A–Z) jako osobny **A4** do druku. Po dry-runie.
