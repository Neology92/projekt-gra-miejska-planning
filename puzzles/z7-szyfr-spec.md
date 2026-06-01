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

> Liczba **operacji deszyfrowania jest taka sama** w obu (1 odczyt z tabula recta na literę szyfrogramu) — długość klucza wpływa tylko na łatwość trzymania wyrównania. **Domyślny = pełne motto** (wierne i bez dwuznaczności nagłówka). Skrót tylko jeśli dry-run pokaże, że pełne motto za bardzo myli — wtedy nagłówek Z7 trzeba wyróżnić na „HELFEN".

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
- **Anachronizm:** szyfr Vigenère spopularyzowany ~1553 (Bellaso/Vigenère) — ~100 lat po 1454. Świadoma decyzja, jak kalimba. **Do zapisania w `lore/fakty-vs-fabula.md`.**
- **Dwuznaczność klucza:** jeśli pełne motto myli (gdzie zacząć/zapętlić) — przejść na `HELFEN` i wyróżnić to słowo w nagłówku Z7. Decyzja po dry-runie.
- **🔴 POJEDYNCZY PUNKT AWARII (klucz = kradziony pergamin).** Klucz (motto) żyje **tylko** w nagłówku listy Z3, a listę grupa **kradnie** Albrechtowi — i kradzież z założenia **nie zawsze się udaje** (`zamek-krzyzacki-lista.md` balansuje przeciw „tylko 1–2 grupy zdobywają"). W starym modelu klucz szedł z Z4 (osobne źródło) → brak listy kosztował tylko kontekst. **Teraz klucz i lista to ten sam obiekt: nieudana kradzież → brak motta → Z7 nierozwiązywalne (twardy stop).** Skonsolidowaliśmy klucz twistu na najbardziej zawodnym węźle łańcucha. **Fallback = decyzja Oskara** (patrz §8.6) — dry-run to wychwyci, ale lepiej rozstrzygnąć wcześniej.

---

## 8. Otwarte pytania (do Oskara)

1. **Treść plaintextu** — akceptacja „JORDAN THE COOK IS HANS VON BAYSEN THEIR CHAIRMAN" czy własna wersja (przeliczę ciphertext).
2. **Wariant klucza** — pełne motto (domyślny) czy skrót `HELFEN`.
3. **Czy „Hans von Baysen" jest na liście Z3** (plant) — rekomendacja: tak (patrz `z3-lista-tr-spec.md` Decyzja #2; zależność rozwiązana — Jordan zostaje kucharzem).
4. **Czy ramka listu jawna** (tylko rdzeń szyfrowany) — rekomendacja: tak (playability). Alternatywa: cały list szyfrowany (trudniej).
5. **Anachronizm Vigenère** — potwierdzić świadomą zgodę + zapis w `fakty-vs-fabula.md`.
6. **🔴 Fallback przy nieudanej kradzieży pergaminu Z3** (patrz §7) — łączy się z istniejącym Q4 w `zamek-krzyzacki-lista.md`. Skoro klucz = motto z kradzionej listy, brak kradzieży = Z7 nierozwiązywalne. Warianty do wyboru: (a) MG podaje motto jako hint po nieudanej próbie; (b) ścieżka częściowego zaliczenia; (c) kradzież Z3 **gwarantowana** (zawsze się udaje, dramaturgia idzie gdzie indziej); (d) drugie, niezależne źródło motta. **Decyzja Oskara.**

---

## 9. Status

- ✅ Model klucza (motto z nagłówka Z3) — rozstrzygnięty.
- ✅ Ciphertext (oba warianty) — policzony i zweryfikowany.
- 🟡 Treść plaintextu + wybór klucza — czeka na Oskara.
- 🟡 Prop (EN) + tabula recta → `prototype/z7-szyfrogram-draft.md`.
- ⬜ KF (instrukcje finału, dostarczenie listu) — następny element łańcucha.
