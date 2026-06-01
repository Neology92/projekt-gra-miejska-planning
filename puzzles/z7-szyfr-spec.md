# Z7 — Finałowy szyfrogram (spec kanoniczny)

> **Rola pliku:** jedno źródło prawdy dla **szyfrogramu Z7** — przechwyconego listu krzyżackiego, którego odszyfrowanie ujawnia twist „Jordan = Bażyński". Szyfr, klucz, plaintext, ciphertext (zweryfikowane), mechanika, weryfikacja MG, ryzyka.
> **Status:** draft [2026-06-01] — ciphertext policzony i zweryfikowany round-trip. Czeka na review Oskara (treść + wybór klucza).
> **Powiązania:** klucz pochodzi z nagłówka listy Z3 → `z3-lista-tr-spec.md`, `prototype/pergamin-lista-tr-draft.md`. Rekwizyt gracza (EN) → `prototype/z7-szyfrogram-draft.md`. Lustro krzyżackie (Cezara → parole) → `kalimba.md` (Z8/Z11).

---

## 1. Model (rozstrzygnięty 2026-06-01)

- **Szyfr:** Vigenère, alfabet **26-literowy A–Z** (tabula recta). *(Anachronizm — patrz §7.)*
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

**Spięcie z Z3:** w F2B grupa **kradnie listę Albrechtowi**; w Z7 **odszyfrowuje własną dyspozycję Albrechta**. Godło Zakonu (motto na obu) jest kluczem do obu finałów (TR: Vigenère→twist; Krzyżacy: Cezara→parole). Domyka `zasada-uzasadnienie-fabularne`.

---

## 7. Ryzyka i co mierzy dry-run

- **Trudność w terenie:** Vigenère łamie się ręcznie wolniej niż Cezar. Mitygacja: **krótki rdzeń (41 liter)** + **jawna ramka listu** (szyfrowany tylko sekret) + **czytelna tabula recta** + jasna instrukcja. **Dry-run ma zmierzyć minuty na odszyfrowanie** — to jeden z głównych celów prototypu.
- **Anachronizm:** szyfr Vigenère spopularyzowany ~1553 (Bellaso/Vigenère) — ~100 lat po 1454. ✅ **Świadoma decyzja [2026-06-01], zapisana w `lore/fakty-vs-fabula.md` (poz. 7).**
- **Dwuznaczność klucza:** jeśli pełne motto myli (gdzie zacząć/zapętlić) — przejść na `HELFEN` i wyróżnić to słowo w nagłówku Z7. Decyzja po dry-runie.
- **✅ POJEDYNCZY PUNKT AWARII — ROZWIĄZANY [2026-06-01].** Klucz (motto) żyje tylko w nagłówku kradzionej listy Z3 → kradzież była węzłem krytycznym. **Decyzja Oskara: kradzież listy jest OBLIGATORYJNA dla każdej grupy mieszczan** (gwarantowana — projektowana tak, by każda grupa się udała; patrz `zamek-krzyzacki-lista.md` „Trudność — balans"). Brak ścieżki „nie zdobył" → brak twardego stopu. **Wymóg projektowy:** karta choreografii Albrechta musi dawać powtarzalne, niezawodne okno (nie jednostrzałowe).

---

## 8. Otwarte pytania (do Oskara)

1. **Treść plaintextu** — akceptacja „JORDAN THE COOK IS HANS VON BAYSEN THEIR CHAIRMAN" czy własna wersja (przeliczę ciphertext).
2. ✅ **Wariant klucza — ROZSTRZYGNIĘTE [2026-06-01]: pełne motto** `HELFENHILFENUNDWEHREN` (skrót odrzucony).
3. **Czy „Hans von Baysen" jest na liście Z3** (plant) — rekomendacja: tak (patrz `z3-lista-tr-spec.md` Decyzja #2; zależność rozwiązana — Jordan zostaje kucharzem).
4. **Czy ramka listu jawna** (tylko rdzeń szyfrowany) — rekomendacja: tak (playability). Alternatywa: cały list szyfrowany (trudniej).
5. ✅ **Anachronizm Vigenère — ROZSTRZYGNIĘTE [2026-06-01]: świadomy**, zapisany w `lore/fakty-vs-fabula.md` (poz. 7).
6. ✅ **Fallback przy nieudanej kradzieży — ROZSTRZYGNIĘTE [2026-06-01]: kradzież OBLIGATORYJNA** (wariant c — gwarantowana; każda grupa mieszczan zdobywa listę → brak twardego stopu). Szczegóły → `zamek-krzyzacki-lista.md`.

---

## 9. Status

- ✅ Model klucza (motto z nagłówka Z3) — rozstrzygnięty.
- ✅ Wariant klucza — **pełne motto** `HELFENHILFENUNDWEHREN` [2026-06-01].
- ✅ Ciphertext (pełne motto) — policzony, round-trip ✓, odszyfrowany ręcznie z tabula recta ✓.
- ✅ Kradzież listy Z3 **obligatoryjna** → brak twardego stopu [2026-06-01].
- ✅ Anachronizm Vigenère — świadomy, zapisany w `lore/fakty-vs-fabula.md` poz. 7 [2026-06-01].
- ✅ Prop (EN) + tabula recta → `prototype/z7-szyfrogram-draft.md`.
- 🟡 Treść plaintextu — sens „Jordan=Bażyński" ustalony; **sformułowanie do akceptacji Oskara** (przy zmianie przeliczam ciphertext).
- ⬜ KF (instrukcje finału, dostarczenie listu) — następny element łańcucha.
