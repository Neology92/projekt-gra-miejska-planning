# 🗄️ BACKUP — wersja VIGENÈRE (archiwalna)

> **To jest BACKUP odrzuconego wariantu Vigenère** [zachowany 2026-06-01].
> **Bieżący model gry = Cezar shift+7, mechanika nagłówkowa** (`puzzles/z7-szyfr-spec.md §0`, `prototype/z7-szyfrogram-draft.md`). [Nota: w momencie zapisu backupu aktualny był +21; od sesji z Piotrem 2026-06-01 zmieniono na shift+7 z porównaniem nagłówków.]
> Ten plik zachowano **na wypadek powrotu do Vigenère** — zawiera pełny prop, **oba ciphertexty Vigenère** (pełne motto + skrót `HELFEN`) oraz **kompletną tabula recta** (deszyfrator Vigenère), których aktywny draft już nie nosi.
> Źródło: stan `git HEAD` (commit `6419ea7`) sprzed zmiany na Cezara. **Nie używać do druku bez świadomej decyzji o powrocie do Vigenère.**
>
> ⚠ Ciphertext skrótu `HELFEN` jest w `z7-szyfr-spec.md §3` (sekcja archiwalna). Pełny ciphertext + tabula recta — poniżej.

---

# Prop — Z7 Intercepted Teutonic Dispatch (cipher) — draft [VIGENÈRE, archiwalny]

> **Language:** English (player-facing). Planning notes in Polish below.
> **Status:** draft [2026-06-01] — ciphertext verified (round-trip). Awaiting Oskar's review of wording + key choice. Canon → `puzzles/z7-szyfr-spec.md`.
> **What it is:** an intercepted letter from the Komtur of Thorn to Marienburg, carried in envelope **K8**. Its enciphered core reveals the twist.
> **Key:** the Order's motto in the CAPS header — the SAME motto that heads the Z3 names list the group already carries. That repetition is the clue: the motto is the keyword.
> **Default key shown here:** full motto `HELFENHILFENUNDWEHREN`. (Short variant `HELFEN` ciphertext is in the spec.)

---

## PROP TEXT — Z7 dispatch (player reads this)

---

**HELFEN · HILFEN · UND · WEHREN**

*To the Hochmeister at Marienburg. In haste — and for your eyes alone.*

You pressed me to learn the head of their secret council — the one who hides himself among them. I have it. I will not trust the plain words to any road. I set it down by our word, as we agreed:

---

```
QSCIE  AAPPH  SBEVV  DEUJZ  BUFLD
WRUBS  JMEWU  DEVTR  R
```

---

*Read it, then burn it. If this falls into the wrong hands before you, our word still keeps it shut.*

*— by the hand of the Komtur of Thorn*

---

## HOW TO READ IT (player aid — decryption)

You have seen this motto before — it heads the list of names you took. **The motto is the key.**

1. Write the motto across the cipher, repeating it, one letter per cipher letter:
   `H E L F E N H I L F E N U N D W E H R E N H E L F E N …`
2. For each cipher letter, find the **row** of the table marked with the **key letter** written above it.
3. Run along that row until you find the **cipher letter**.
4. The letter at the **top of that column** is the true letter.
5. Read all the true letters in order.

### Tabula recta (decryption table)

```
    A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
A | A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
B | B C D E F G H I J K L M N O P Q R S T U V W X Y Z A
C | C D E F G H I J K L M N O P Q R S T U V W X Y Z A B
D | D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
E | E F G H I J K L M N O P Q R S T U V W X Y Z A B C D
F | F G H I J K L M N O P Q R S T U V W X Y Z A B C D E
G | G H I J K L M N O P Q R S T U V W X Y Z A B C D E F
H | H I J K L M N O P Q R S T U V W X Y Z A B C D E F G
I | I J K L M N O P Q R S T U V W X Y Z A B C D E F G H
J | J K L M N O P Q R S T U V W X Y Z A B C D E F G H I
K | K L M N O P Q R S T U V W X Y Z A B C D E F G H I J
L | L M N O P Q R S T U V W X Y Z A B C D E F G H I J K
M | M N O P Q R S T U V W X Y Z A B C D E F G H I J K L
N | N O P Q R S T U V W X Y Z A B C D E F G H I J K L M
O | O P Q R S T U V W X Y Z A B C D E F G H I J K L M N
P | P Q R S T U V W X Y Z A B C D E F G H I J K L M N O
Q | Q R S T U V W X Y Z A B C D E F G H I J K L M N O P
R | R S T U V W X Y Z A B C D E F G H I J K L M N O P Q
S | S T U V W X Y Z A B C D E F G H I J K L M N O P Q R
T | T U V W X Y Z A B C D E F G H I J K L M N O P Q R S
U | U V W X Y Z A B C D E F G H I J K L M N O P Q R S T
V | V W X Y Z A B C D E F G H I J K L M N O P Q R S T U
W | W X Y Z A B C D E F G H I J K L M N O P Q R S T U V
X | X Y Z A B C D E F G H I J K L M N O P Q R S T U V W
Y | Y Z A B C D E F G H I J K L M N O P Q R S T U V W X
Z | Z A B C D E F G H I J K L M N O P Q R S T U V W X Y
```

*(Decrypted, the message reads: JORDAN THE COOK IS HANS VON BAYSEN THEIR CHAIRMAN — do NOT print this line on the player copy.)*

---

## PLANNING NOTES (nie dla gracza)

**Klucz [DECYZJA Oskara 2026-06-01: pełne motto]:** `HELFENHILFENUNDWEHREN` → ciphertext `QSCIE AAPPH SBEVV DEUJZ BUFLD WRUBS JMEWU DEVTR R`. Skrót `HELFEN` odrzucony.

**Szyfrowany tylko rdzeń (41 liter), ramka jawna** — żeby praca w terenie była wykonalna. Ramka (zwrot „To the Hochmeister…", podpis Komtura) buduje klimat i kontekst bez kosztu deszyfrowania.

**Fabuła:** to dyspozycja Albrechta Kalba (komtur toruński) do Malborka — wróg, którego grupa okradła z listy w Z3, sam zdradza tożsamość Jordana. Pokrycie: `donosiciele-1454.js` (komtur raportował do Malborka „spisek Rady z Bażyńskim").

**Link do Z3:** nagłówek-motto MUSI być identyczny z nagłówkiem pergaminu Z3 (`prototype/pergamin-lista-tr-draft.md`). Powtórzenie = wskazówka, że to klucz.

**Płatność:** plaintext „…HANS VON BAYSEN…" domyka się z plantem na liście Z3 (jeśli „Hans von Baysen" tam jest — gracz wraca i widzi, że kucharz był na szczycie listy gończej Zakonu).

**Do akceptacji Oskara:** treść plaintextu, wariant klucza, anachronizm Vigenère (~1553). Patrz `z7-szyfr-spec.md §8`.

**Stylizacja:** finalny list — pergamin, Fraktur, łac./niem. zwroty, pieczęć komtura; tabula recta jako osobny **A4** do druku. Po dry-runie.
