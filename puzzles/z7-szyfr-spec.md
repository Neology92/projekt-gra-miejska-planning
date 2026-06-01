# Z7 — Finałowy szyfrogram (spec kanoniczny)

> **Rola pliku:** jedno źródło prawdy dla **szyfrogramu Z7** — przechwyconego listu krzyżackiego, którego odszyfrowanie ujawnia twist „Jordan = Bażyński". Szyfr, klucz, plaintext, ciphertext, mechanika, weryfikacja MG, ryzyka.
> **Status:** 🟡 **W REWIZJI [2026-06-01]** — mechanika klucza zmieniona: **porównanie nagłówków** (nie liczenie liter motta). Dwie wersje testowe: A (shift +3) i B (shift +7, kandydat). §0 = kanon nowej mechaniki; §3 archiwalne Vigenère; §4 zaktualizowane. Prop gracza → `prototype/z7-szyfrogram-draft.md`.
> **Powiązania:** klucz z nagłówka listy Z3 → `z3-lista-tr-spec.md`, `prototype/pergamin-lista-tr-draft.md`. Rekwizyt gracza (EN) → `prototype/z7-szyfrogram-draft.md`. Lustro krzyżackie (Z8/Z11) → `kalimba.md`, `concept/04-faza-3-final.md` (kanon modelu).

---

## 0. MECHANIKA NAGŁÓWKOWA [2026-06-01, po sesji z Piotrem]

Zmiana modelu klucza — **nadrzędna wobec poprzedniego §0 (liczba liter motta)**:

1. **Szyfr = Cezar, OBA tory** — bez zmian.
2. **Klucz = odkryty przez PORÓWNANIE NAGŁÓWKÓW** (nie przez liczenie liter):
   - Nagłówek **Z3** (pergamin listy): motto Zakonu w **charakterystycznym foncie** (np. Fraktur/kursywa) — **jawne**: „HELFEN, HEILEN UND WEHREN!"
   - Nagłówek **Z7** (przechwycony list): **to samo motto, TEN SAM FONT, zaszyfrowane Cezarem** — interpunkcja (przecinek, wykrzyknik) w tych samych pozycjach co w Z3, więc gracz natychmiast widzi odpowiadające sobie słowa.
   - **Mechanika odkrycia:** gracz kładzie oba dokumenty obok siebie, porównuje litera po literze → H→K, E→H, L→O, F→I… → każda litera przesunięta o tę samą wartość → odkrywa przesunięcie **bez liczenia liter, bez wzoru, bez rekwizytu**.
   - **Brak koła — świadoma decyzja:** koło Cezara byłoby zbyt silną wskazówką. Gracz odkrywa i stosuje przesunięcie ołówkiem/palcem na papierze lub po prostu licząc w głowie/na dłoni.
3. **Dystrybucja** — bez zmian: szyfrogram wydaje MG po jednej opcjonalnej (Z4/Z5/Z6 mieszczanie, Z8/Z9/Z10 krzyżacy). Plaintext bez zmian.
5. **Układ spacji** — bez zmian: zachowuje granice słów plaintextu (nie grupy po 5).

### Wybrane przesunięcie: shift +7 ✅ [DECYZJA Oskara 2026-06-01]

**Shift = 7** — niestandardowy, mniej oczywisty niż klasyczny Cezar +3, ciekawsze odkrycie w terenie:

- Zaszyfrowane motto (nagłówek Z7, ten sam font co Z3): `OLSMLU, OLPSLU BUK DLOYLU!`
- Zaszyfrowane ciało (układ spacji jak w plaintexcie): `OHUZ CVU IHFZLU PZ QVYKHU AOL JVVR`
- Deszyfrowanie: cofnij każdą literę o **7** (= naprzód o 19). A↔H na palcach lub ołówkiem na papierze.

> 🗄️ **Backup shift +3** (klasyczny Cezar, łatwiejszy — porzucony; ryzyko że znający historię rozpoznają bez odkrywania): motto `KHOIHQ, KLOIHQ XQG ZHKUHQ!`, ciało `KDQV YRQ EDBVHQ LV MRUGDQ WKH FRRN`.

> 🗄️ **Backup modelu „liczba liter motta (shift +21)"** [poprzedni §0, 2026-06-01 wieczór]: ciphertext `EJMYVI OCZ XJJF DN CVIN QJI WVTNZI OCZDM XCVDMHVI`, instrukcja „policz litery motta (21) = przesunięcie". Zastąpiony mechaniką nagłówkową. *(Uwaga: ciphertext koduje POPRZEDNI plaintext „JORDAN THE COOK IS HANS VON BAYSEN THEIR CHAIRMAN" sprzed skrócenia [2026-06-01]; nieaktualizowany bo backup deep-archive.)*

> 🗄️ **Backup poprzedniego plaintextu** [sprzed skrócenia, 2026-06-01]: `JORDAN THE COOK IS HANS VON BAYSEN THEIR CHAIRMAN` (41 liter, Jordan na początku), ciphertext +7 `QVYKHU AOL JVVR PZ OHUZ CVU IHFZLU AOLPY JOHPYTHU`. Skrócony i odwrócony (Jordan → koniec jako zaskoczenie) decyzją Oskara.
>
> 🗄️ **Backup pełnej wersji Vigenère** → `prototype/z7-szyfrogram-vigenere-backup.md`.

---

## 1. Model — ⚠ mechanika klucza → §0; reszta aktualna

- **Szyfr:** Cezar, oba tory (patrz §0).
- **Klucz = odkryty przez porównanie nagłówków** (patrz §0): Z3 nosi motto jawne, Z7 to samo motto zaszyfrowane — **ten sam charakterystyczny font** sygnalizuje związek. Interpunkcja (przecinek, wykrzyknik): `HELFEN, HEILEN UND WEHREN!`.
- **Szyfrogram Z7 = przechwycony list krzyżacki** (dostarczony w kopercie K8). Nagłówek = **to samo motto, ten sam font co Z3, ALE ZASZYFROWANE CEZAREM** — gracz widzi niezrozumiały ciąg w miejscu, gdzie Z3 ma znane motto. Tylko **rdzeń wiadomości jest zaszyfrowany**; ramka listu (zwrot, podpis) jawna — żeby gracz deszyfrował ~41 liter, nie całość.
- **Po odszyfrowaniu:** ujawnienie tożsamości Jordana → wejście w finał (KF).
- **Co gracz musi mieć naraz:** pergamin Z3 (z jawnym mottem w nagłówku, niesiony od F2B) **+** szyfrogram Z7 (K8). Font nagłówka łączy oba.

---

## 2. [ARCHIWALNE] Warianty klucza Vigenère — zastąpione przez §0

> Ta sekcja dotyczyła wariantów klucza Vigenère (pełne motto vs skrót) — nieaktualna od przejścia na Cezar z mechaniką nagłówkową. Pozostawiona dla dokumentacji decyzji. Szyfr i mechanika klucza → §0.

| [ARCHIWALNE] Wariant | Klucz (litery) | Za | Przeciw |
|---|---|---|---|
| **Pełne motto** | `HELFENHILFENUNDWEHREN` (21) | wierne motto z nagłówka | dłuższy ciąg do wyrównania |
| **Skrót** | `HELFEN` (6) | krótszy | trzeba zasygnalizować „tylko pierwsze słowo" |

> ~~DECYZJA Oskara [2026-06-01]: pełne motto~~ — nieaktualne (Vigenère porzucone). Patrz §0: mechanika nagłówkowa, dwie wersje A (+3) i B (+7).

---

## 3. Plaintext i ciphertext ← aktualne w §0; poniżej archiwum Vigenère

> **Cezar Ver. A (shift +3) i Ver. B (shift +7) — ciphertexty i zaszyfrowane motta → §0** (autorytatywne, round-trip ✓).

**Plaintext — ZATWIERDZONY [2026-06-01, skrócony — Jordan na końcu jako zaskoczenie]:**

```
HANS VON BAYSEN IS JORDAN THE COOK
```
litery: `HANSVONBAYSENISJORDANTHECOOK` (28 liter)

**[ARCHIWALNE] Vigenère — wariant PEŁNE MOTTO (`HELFENHILFENUNDWEHREN`):**
```
QSCIE AAPPH SBEVV DEUJZ BUFLD WRUBS JMEWU DEVTR R
```

**[ARCHIWALNE] Vigenère — wariant SKRÓT (`HELFEN`):**
```
QSCIE AALPH SBRMD MEAZZ ZSFNF WPSXU LMCHL NPVXF R
```

> Vigenère zweryfikowane skryptem; porzucone (za trudne w terenie + anachronizm). Backup: `prototype/z7-szyfrogram-vigenere-backup.md`.

---

## 4. Mechanika gracza (deszyfrowanie kołem Cezara bez rekwizytu)

1. **Odkryj przesunięcie:** połóż Z3 (pergamin listy) i Z7 (przechwycony list) obok siebie. Oba mają nagłówek z mottem w tym samym charakterystycznym foncie — Z3 jawny, Z7 zaszyfrowany. Przecinek i wykrzyknik są w tych samych miejscach → gracz od razu widzi, które słowo Z7 odpowiada któremu słowu Z3. Porównuje pierwszą literę: nagłówek Z3 zaczyna się na `H`, nagłówek Z7 na `K` (Ver. A) lub `O` (Ver. B). Sprawdza kolejne litery — stałe przesunięcie potwierdza.
2. **Odszyfruj ciało:** cofnij każdą literę szyfrogramu o odkrytą wartość. Można liczyć na palcach, ołówkiem na boku papieru, lub w głowie (alfabet A–Z jest cykliczny: po Z wraca A).
3. **Odczytaj:** litery jawne w kolejności dają plaintext. Układ spacji jak w zdaniu — pomyłka w jednej literze jest naprawialna domysłem ze słowa.

Brak rekwizytu (koła/tabeli) — świadoma decyzja (koło byłoby zbyt silną wskazówką). Prop gracza (szyfrogram) → `prototype/z7-szyfrogram-draft.md`.

---

## 5. Weryfikacja MG

- **Oczekiwana odpowiedź grupy:** odczytana treść = „HANS VON BAYSEN IS JORDAN THE COOK" (lub sens: *Jordan = Hans von Baysen, przywódca TR*).
- **Co to odblokowuje:** wejście w finał KF — grupa wie teraz, **kim naprawdę jest sojusznik z Piccolo**, i z tą wiedzą podejmuje decyzję o dostarczeniu listu.
- **Format odpowiedzi:** szyfrogram zachowuje granice słów (układ jak w zdaniu), więc gracz odczyta naturalnie rozdzielone słowa → `HANS VON BAYSEN IS JORDAN THE COOK`. **MG akceptuje sens** (Jordan = Hans von Baysen, przewodniczący TR) — drobne pomyłki literowe nie blokują, bo granice słów pozwalają je uzupełnić domysłem.
- **List odchudzony — splice gracza [2026-06-01]:** przechwycony list **NIE zapowiada**, jaki rodzaj informacji niesie szyfrogram (usunięto „learn the head of their secret council…" → zostało lakoniczne „What you asked of me, I have…"). Gracz odszyfrowuje zdanie **na zimno** i sam spina sens z **trzech wątków**: (1) trop z **K2** („dostarcz list **chairmanowi** Rady, w jego własne ręce"), (2) wpis #1 **pergaminu Z3** („Hans von Baysen — *they call him chairman*"), (3) ten szyfr („HANS VON BAYSEN IS JORDAN THE COOK"). → chairman = Hans von Baysen = Jordan-kucharz. Anty-prowadzenie-za-rączkę (`zasada-uzasadnienie-fabularne`). **Zależność twarda:** pergamin Z3 musi zachować frazę „they call him chairman" przy wpisie #1, a K2 — trop o chairmanie; bez nich odszyfrowane zdanie wisi bez kontekstu.
- **Hint awaryjny (jeśli utkną):** wskaż, że **to samo motto** widnieje na pergaminie Z3 i na liście — „nagłówek, który się powtarza, to klucz". Jeśli odszyfrowali, ale nie rozumieją sensu → odeślij do **listy nazwisk** (kto na niej jest „chairman?") i do tego, **komu mieli zanieść list** (K2).

---

## 6. Uzasadnienie fabularne

Szyfrogram = **dyspozycja komtura toruńskiego Albrechta Kalba do Malborka**, przechwycona przez kurierów. Ma realne pokrycie: wg wiki `donosiciele-1454.js` komtur toruński **raportował do Malborka o „spisku Rady z Bażyńskim"** (Toeppen IV nr 79, XI 1453). Tu Zakon idzie dalej — odkrył, że **pokorny kucharz Jordan to w istocie Hans von Baysen, przewodniczący Tajnej Rady**. Wróg sam, własnym wywiadem, zdradza sekret graczom.

**Spięcie z Z3:** w F2B grupa **kradnie listę Albrechtowi**; w Z7 **odszyfrowuje własną dyspozycję Albrechta**. Godło Zakonu (motto na obu) jest kluczem do obu finałów — **oba Cezar** (TR: szyfrogram→twist; Krzyżacy: szyfrogram→parole). Domyka `zasada-uzasadnienie-fabularne`.

---

## 7. Ryzyka i co mierzy dry-run

- **Trudność w terenie:** Cezar bez rekwizytu (koła) — gracze sami odkrywają przesunięcie przez porównanie. **Dry-run mierzy: (a) czy gracze samodzielnie połączą oba nagłówki jako klucz, (b) minuty na odszyfrowanie ciała.** Mitygacje: krótki rdzeń (41 liter) + jawna ramka listu + przecinek/wykrzyknik jako lokatory słów w nagłówku.
- **Shift +7 — wybrany [2026-06-01].** Mniej oczywisty niż klasyczny +3; ciekawsze odkrycie. Backup +3 → §0.
- **Anachronizm:** Cezar (szyfr przesuwny) znany od starożytności — **minimalny/żaden** (inaczej niż Vigenère ~1553). Patrz `lore/fakty-vs-fabula.md` poz. 7.
- **✅ POJEDYNCZY PUNKT AWARII — ROZWIĄZANY [2026-06-01].** Klucz (nagłówek Z3) żyje tylko w kradzionej liście → kradzież była węzłem krytycznym. **Decyzja Oskara: kradzież OBLIGATORYJNA** (gwarantowana dla każdej grupy mieszczan; patrz `zamek-krzyzacki-lista.md`). Brak ścieżki „nie zdobył" → brak twardego stopu.

---

## 8. Otwarte pytania (do Oskara)

1. ✅ **Treść plaintextu — ZATWIERDZONA [2026-06-01]:** „HANS VON BAYSEN IS JORDAN THE COOK" (Oskar zaakceptował). Ciphertext Cezara +7 policzony i zamknięty (§0).
2. ✅ **Szyfr = Cezar, shift +7** — rozstrzygnięte [2026-06-01]. ✅ **Mechanika klucza = porównanie nagłówków** (Z3 jawny ↔ Z7 zaszyfrowany, ten sam font, ta sama interpunkcja) — rozstrzygnięte [sesja z Piotrem]. (Vigenère + model liczenia liter + shift +3 — porzucone, backup `prototype/z7-szyfrogram-vigenere-backup.md` i §0.)
3. **Czy „Hans von Baysen" jest na liście Z3** (plant) — rekomendacja: tak (patrz `z3-lista-tr-spec.md` Decyzja #2; zależność rozwiązana — Jordan zostaje kucharzem).
4. **Czy ramka listu jawna** (tylko rdzeń szyfrowany) — rekomendacja: tak (playability). Alternatywa: cały list szyfrowany (trudniej).
5. ✅ **Anachronizm — ROZSTRZYGNIĘTE [2026-06-01]: Cezar minimalny/żaden** (porzucono Vigenère). `lore/fakty-vs-fabula.md` poz. 7.
6. ✅ **Fallback przy nieudanej kradzieży — ROZSTRZYGNIĘTE [2026-06-01]: kradzież OBLIGATORYJNA** (wariant c — gwarantowana; każda grupa mieszczan zdobywa listę → brak twardego stopu). Szczegóły → `zamek-krzyzacki-lista.md`.

---

## 9. Status

- ✅ Szyfr — **Cezar, oba tory** [2026-06-01].
- ✅ Mechanika klucza — **porównanie nagłówków** (Z3 jawny ↔ Z7 zaszyfrowany, ten sam font + ta sama interpunkcja) [2026-06-01, sesja z Piotrem].
- ✅ Interpunkcja motta: `HELFEN, HEILEN UND WEHREN!` (przecinek + wykrzyknik) — oba dokumenty.
- ✅ Brak rekwizytu (koła) — świadoma decyzja.
- ✅ Ciphertexty (Ver. A shift+3 i Ver. B shift+7) — policzone, round-trip ✓. → §0.
- ✅ Treść plaintextu — **ZATWIERDZONA [2026-06-01]:** „HANS VON BAYSEN IS JORDAN THE COOK".
- ✅ Kradzież listy Z3 **obligatoryjna** → brak twardego stopu [2026-06-01].
- ✅ Anachronizm — Cezar minimalny; backup Vigenère → `prototype/z7-szyfrogram-vigenere-backup.md`.
- ✅ Przesunięcie — **shift +7** [DECYZJA Oskara 2026-06-01]. Backup +3 → §0.
- ⬜ KF (instrukcje finału, dostarczenie listu) — następny element łańcucha.
