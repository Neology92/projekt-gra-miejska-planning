# Z7 — Finałowy szyfrogram (spec kanoniczny)

> **Rola pliku:** jedno źródło prawdy dla **szyfrogramu Z7** — przechwyconego listu krzyżackiego, którego odszyfrowanie ujawnia twist „Jordan = Bażyński". Szyfr, klucz, plaintext, ciphertext, mechanika, weryfikacja MG, ryzyka.
> **Status:** 🔴 **W REWIZJI [2026-06-01 wieczór]** — decyzja autora: **OBA tory na szyfrze CEZARA** (nie Vigenère). Ciphertext Vigenère (§3) i mechanika tabula recta (§4) **NIEAKTUALNE** — do przeliczenia na Cezara po ustaleniu reguły „motto → przesunięcie". Reszta (klucz=motto z nagłówka Z3, plaintext, uzasadnienie, dystrybucja przez MG) — aktualna.
> **Powiązania:** klucz z nagłówka listy Z3 → `z3-lista-tr-spec.md`, `prototype/pergamin-lista-tr-draft.md`. Rekwizyt gracza (EN) → `prototype/z7-szyfrogram-draft.md`. Lustro krzyżackie (Z8/Z11) → `kalimba.md`, `concept/04-faza-3-final.md` (kanon modelu).

---

## 0. REWIZJA 2026-06-01 — Cezar zamiast Vigenère (oba tory)

Decyzje autora z tej sesji, **nadrzędne wobec §1–§4 poniżej**:

1. **Szyfr = Cezar, OBA tory** (mieszczanie Z7 i krzyżacy Z11). Wcześniej: TR=Vigenère, krzyżacy=Cezar — ujednolicone na Cezara (prostsze w terenie).
2. ✅ **Klucz = przesunięcie o LICZBĘ LITER motta** [decyzja 2026-06-01]. Motto „Helfen, Hilfen und Wehren" → `HELFENHILFENUNDWEHREN` = **21 liter** → **shift = 21** (≡ cofnięcie o 5, bo 21 = 26−5). Fabularnie klucz = „policz litery godła Zakonu".
3. **Dystrybucja:** szyfrogram (przechwycony list) wydaje **MG** po rozwiązaniu **jednej opcjonalnej** — mieszczanie po Z4/Z5/Z6, krzyżacy po Z8/Z9/Z10. Treść/plaintext bez zmian.
4. **Rekwizyt:** koło Cezara A4 (dwie tarcze), zamiast tabula recta Vigenère.

### Ciphertext Cezara (shift 21) — POLICZONY i zweryfikowany round-trip [2026-06-01]

- **Plaintext:** `JORDAN THE COOK IS HANS VON BAYSEN THEIR CHAIRMAN` (41 liter)
- **Ciphertext (szyfrowanie +21):** `EJMYV IOCZX JJFDN CVINQ JIWVT NZIOC ZDMXC VDMHV I`
- **Deszyfrowanie gracza:** cofnij każdą literę o **21** (równoważnie: przesuń o **+5**). Koło ustawione tak, że E→J, J→O, M→R… → `JORDAN…`.

→ §3 (ciphertext Vigenère) i §4 (tabula recta) niżej — **archiwalne**, zastąpione powyższym. Prop gracza → `prototype/z7-szyfrogram-draft.md` (ciphertext zaktualizowany).

> 🗄️ **Backup pełnej wersji Vigenère** (prop + oba ciphertexty + **kompletna tabula recta**) → `prototype/z7-szyfrogram-vigenere-backup.md`. Zachowany na wypadek powrotu do Vigenère.

---

## 1. Model (rozstrzygnięty 2026-06-01) — ⚠ §1 ZASTĄPIONY przez §0 (Cezar, oba tory)

- **Szyfr:** ~~Vigenère, alfabet 26-literowy A–Z (tabula recta)~~ → **Cezar** (patrz §0). *(Anachronizm Cezara mniejszy — szyfr przesuwny znany w starożytności.)*
- **Klucz = motto Zakonu** z **nagłówka listy nazwisk Z3** (ten sam motto-nagłówek pojawia się na obu dokumentach — to sygnał, że to słowo-klucz).
  - Motto: „**Helfen, Hilfen und Wehren**" → litery: `HELFENHILFENUNDWEHREN`.
- **Szyfrogram Z7 = przechwycony list krzyżacki** (dostarczony w kopercie K8). Nagłówek = **to samo motto, CAPS**. Tylko **rdzeń wiadomości jest zaszyfrowany**; ramka listu (zwrot, podpis) jawna — żeby gracz deszyfrował ~41 liter, nie całość.
- **Po odszyfrowaniu:** ujawnienie tożsamości Jordana → wejście w finał (KF).
- **Co gracz musi mieć naraz:** pergamin Z3 (klucz w nagłówku, niesiony od F2B) **+** szyfrogram Z7 (K8). Motto łączy oba.

---

## 2. Klucz — dwa warianty (wybór Oskara)

| Wariant | Klucz (litery) | Za | Przeciw |
|---|---|---|---|
| **Pełne motto (domyślny)** | `HELFENHILFENUNDWEHREN` (21) | wierne „motto z nagłówka = klucz"; nagłówek pokazuje całe motto → brak dwuznaczności | dłuższy ciąg do wyrównania nad szyfrogramem |
| **Skrót** | `HELFEN` (6) | krótszy = łatwiej trzymać pozycję (mitygacja z roadmapy) | nagłówek pokazuje całe motto — trzeba graczowi zasygnalizować „użyj pierwszego słowa" |

> Liczba **operacji deszyfrowania jest taka sama** w obu (1 odczyt z tabula recta na literę szyfrogramu) — długość klucza wpływa tylko na łatwość trzymania wyrównania.
>
> ✅ **DECYZJA Oskara [2026-06-01]: pełne motto** `HELFENHILFENUNDWEHREN` (skrót odrzucony). Cały szyfrogram używa tego klucza.

---

## 3. Plaintext i ciphertext (ZWERYFIKOWANE round-trip)

**Plaintext (jawna treść po odszyfrowaniu, EN, do akceptacji Oskara):**

```
JORDAN THE COOK IS HANS VON BAYSEN THEIR CHAIRMAN
```
litery: `JORDANTHECOOKISHANSVONBAYSENTHEIRCHAIRMAN` (41 liter)

**Ciphertext — wariant PEŁNE MOTTO (`HELFENHILFENUNDWEHREN`):**
```
QSCIE AAPPH SBEVV DEUJZ BUFLD WRUBS JMEWU DEVTR R
```

**Ciphertext — wariant SKRÓT (`HELFEN`):**
```
QSCIE AALPH SBRMD MEAZZ ZSFNF WPSXU LMCHL NPVXF R
```

> Oba policzone skryptem i zweryfikowane: odszyfrowanie kluczem = dokładnie plaintext powyżej. Grupowanie po 5 liter = konwencja kryptograficzna (ukrywa granice słów). Jeśli Oskar zmieni treść plaintextu — przeliczam ciphertext na nowo (sekundy).

---

## 4. Mechanika gracza (deszyfrowanie tabula recta)

1. Wypisz klucz (motto) nad szyfrogramem, **powtarzając w kółko**: `H E L F E N H I L F E N U N D W E H R E N H E L F E N …`
2. Dla każdej litery szyfrogramu: wejdź w **wiersz** tabula recta oznaczony **literą klucza** nad nią.
3. Znajdź w tym wierszu **literę szyfrogramu**.
4. Litera na **szczycie tej kolumny** = litera jawna (plaintext).
5. Odczytaj całość → treść ujawniająca twist.

Tabula recta (materiał do druku) → `prototype/z7-szyfrogram-draft.md` (appendix). Finalny **A4** + stylizacja → po dry-runie.

---

## 5. Weryfikacja MG

- **Oczekiwana odpowiedź grupy:** odczytana treść = „JORDAN THE COOK IS HANS VON BAYSEN THEIR CHAIRMAN" (lub sens: *Jordan = Hans von Baysen, przywódca TR*).
- **Co to odblokowuje:** wejście w finał KF — grupa wie teraz, **kim naprawdę jest sojusznik z Piccolo**, i z tą wiedzą podejmuje decyzję o dostarczeniu listu.
- **Format odpowiedzi:** po deszyfrowaniu wychodzi **ciąg bez spacji** (`JORDANTHECOOKISHANSVONBAYSEN…`). **MG akceptuje odpowiedź bez rozdzielenia słów** — nie wymagaj spacji; liczy się sens.
- **Hint awaryjny (jeśli utkną):** wskaż, że **to samo motto** widnieje na pergaminie Z3 i na liście — „nagłówek, który się powtarza, to klucz".

---

## 6. Uzasadnienie fabularne

Szyfrogram = **dyspozycja komtura toruńskiego Albrechta Kalba do Malborka**, przechwycona przez kurierów. Ma realne pokrycie: wg wiki `donosiciele-1454.js` komtur toruński **raportował do Malborka o „spisku Rady z Bażyńskim"** (Toeppen IV nr 79, XI 1453). Tu Zakon idzie dalej — odkrył, że **pokorny kucharz Jordan to w istocie Hans von Baysen, przewodniczący Tajnej Rady**. Wróg sam, własnym wywiadem, zdradza sekret graczom.

**Spięcie z Z3:** w F2B grupa **kradnie listę Albrechtowi**; w Z7 **odszyfrowuje własną dyspozycję Albrechta**. Godło Zakonu (motto na obu) jest kluczem do obu finałów — **oba Cezar** (TR: szyfrogram→twist; Krzyżacy: szyfrogram→parole). Domyka `zasada-uzasadnienie-fabularne`.

---

## 7. Ryzyka i co mierzy dry-run

- **Trudność w terenie:** Cezar (jedno przesunięcie) łamie się **szybciej** niż Vigenère — zmiana obniża ryzyko. Mitygacja dalej: **krótki rdzeń (41 liter)** + **jawna ramka listu** + **czytelne koło Cezara** + jasna instrukcja. **Dry-run i tak mierzy minuty na odszyfrowanie.**
- **Anachronizm:** Cezar (szyfr przesuwny) znany od starożytności — **minimalny/żaden** (inaczej niż Vigenère ~1553). Patrz `lore/fakty-vs-fabula.md` poz. 7.
- **Reguła klucza:** przesunięcie = **liczba liter motta (21)**. Jednoznaczne — brak wariantów pełne/skrót.
- **✅ POJEDYNCZY PUNKT AWARII — ROZWIĄZANY [2026-06-01].** Klucz (motto) żyje tylko w nagłówku kradzionej listy Z3 → kradzież była węzłem krytycznym. **Decyzja Oskara: kradzież listy jest OBLIGATORYJNA dla każdej grupy mieszczan** (gwarantowana — projektowana tak, by każda grupa się udała; patrz `zamek-krzyzacki-lista.md` „Trudność — balans"). Brak ścieżki „nie zdobył" → brak twardego stopu. **Wymóg projektowy:** karta choreografii Albrechta musi dawać powtarzalne, niezawodne okno (nie jednostrzałowe).

---

## 8. Otwarte pytania (do Oskara)

1. **Treść plaintextu** — akceptacja „JORDAN THE COOK IS HANS VON BAYSEN THEIR CHAIRMAN" czy własna wersja (przeliczę ciphertext).
2. ✅ **Klucz — ROZSTRZYGNIĘTE [2026-06-01]: Cezar, przesunięcie = liczba liter motta (21)**. (Vigenère + warianty pełne/skrót — porzucone, backup `prototype/z7-szyfrogram-vigenere-backup.md`.)
3. **Czy „Hans von Baysen" jest na liście Z3** (plant) — rekomendacja: tak (patrz `z3-lista-tr-spec.md` Decyzja #2; zależność rozwiązana — Jordan zostaje kucharzem).
4. **Czy ramka listu jawna** (tylko rdzeń szyfrowany) — rekomendacja: tak (playability). Alternatywa: cały list szyfrowany (trudniej).
5. ✅ **Anachronizm — ROZSTRZYGNIĘTE [2026-06-01]: Cezar minimalny/żaden** (porzucono Vigenère). `lore/fakty-vs-fabula.md` poz. 7.
6. ✅ **Fallback przy nieudanej kradzieży — ROZSTRZYGNIĘTE [2026-06-01]: kradzież OBLIGATORYJNA** (wariant c — gwarantowana; każda grupa mieszczan zdobywa listę → brak twardego stopu). Szczegóły → `zamek-krzyzacki-lista.md`.

---

## 9. Status

- ✅ Model klucza (motto z nagłówka Z3) — rozstrzygnięty.
- ✅ Szyfr — **Cezar, przesunięcie = liczba liter motta (21)** [2026-06-01 wieczór]. Oba tory.
- ✅ Ciphertext Cezara — policzony, round-trip ✓ (skrypt). `EJMYV IOCZX JJFDN…` (§0).
- ✅ Kradzież listy Z3 **obligatoryjna** → brak twardego stopu [2026-06-01].
- ✅ Anachronizm — Cezar minimalny; backup Vigenère → `prototype/z7-szyfrogram-vigenere-backup.md`.
- ✅ Prop (EN) + koło Cezara → `prototype/z7-szyfrogram-draft.md`.
- 🟡 Treść plaintextu — sens „Jordan=Bażyński" ustalony; **sformułowanie do akceptacji Oskara** (przy zmianie przeliczam ciphertext).
- ⬜ KF (instrukcje finału, dostarczenie listu) — następny element łańcucha.
