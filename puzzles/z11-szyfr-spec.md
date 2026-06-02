# Z11 — Finałowy szyfr krzyżaków (spec kanoniczny)

> **Rola pliku:** jedno źródło prawdy dla **finału toru krzyżackiego (Z11)** — mechanika dwóch tabel (symbol-klucz + tabula recta), dane, plaintext/ciphertext, weryfikacja MG, ryzyka. Lustro funkcjonalne Z7 (mieszczanie), ale **inna mechanika szyfru** [decyzja Oskara 2026-06-02].
> **Status:** 🟡 **szkic mechaniki zamknięty, dane robocze** [2026-06-02]. Mechanika dwóch tabel ROZSTRZYGNIĘTA; kolor szaty Jordana ROZSTRZYGNIĘTY (**brązowy**); parol + styl symboli + miejsce wydania Tabeli 2 = otwarte (patrz §8). Prop gracza (EN) → `materials/props/z11-tabela-symboli-draft.md`, `materials/props/z11-tabula-recta-draft.md`.
> **Powiązania:** tor KZ → `concept/05-tor-krzyzakow.md`; Z3Z (skąd Tabela 1) → `puzzles/zamek-krzyzacki-lista.md §Z3Z`; finał → `concept/04-faza-3-final.md`; lustro TR → `puzzles/z7-szyfr-spec.md`.

---

## 0. ASYMETRIA WOBEC Z7 [decyzja Oskara 2026-06-02]

Finały **przestają być lustrem mechanicznym**. Były symetryczne (oba Cezar +7, klucz przez porównanie nagłówków, świadomie BEZ tabeli/koła). Teraz:

| | **Z7 (mieszczanie)** | **Z11 (krzyżacy)** |
|---|---|---|
| Typ szyfru | Cezar shift +7 | podstawieniowy (tabula recta) |
| Klucz | przesunięcie odkryte przez **porównanie nagłówków** (motto Z3 jawne ↔ Z7 zaszyfrowane) | **symbol** odczytany z Tabeli 1 (kolor szaty Jordana × chochla) |
| Rekwizyt | brak (świadomie — koło = zbyt silna wskazówka) | **dwie tabele** (Tabela 1 lookup + Tabela 2 tabula recta) |
| Wynik | „HANS VON BAYSEN IS JORDAN THE COOK" (twist) | **parol** dla Albrechta (dowód godności) |

> **Symetria zachowana TEMATYCZNIE, nie mechanicznie:** oba tory kończą szyfrem rozwiązywanym z elementów 2B; oba dają wynik bramkujący finał. Mieszczanie *wykradają* sekret wroga (Cezar); krzyżacy *składają* swój klucz z dwóch obserwacji u Jordana (tabele). Stary model Z11 (Cezar, lustro Z7) → **§Backup** na dole; nie kasować.

---

## 1. MECHANIKA — dwie tabele

Łańcuch gracza: **dwie obserwacje → Tabela 1 → symbol → Tabela 2 → odszyfrowany parol.**

### Tabela 1 — lookup `kolor × przedmiot → symbol` (siatka 4×4)

- **4 wiersze = kolory** (etykiety: **słowa po angielsku** + próbka barwy — Red/Green/**Brown**/Black) [decyzja Oskara 2026-06-02].
- **4 kolumny = przedmioty** (etykiety: **rysunki / ikony SVG**, nie tekst — Gingerbread/Sword/**Ladle**/Candle) [decyzja Oskara 2026-06-02]. *Cloth usunięte (za blisko sukna z Z2) → zastąpione świecą; bread dropnięte do 4×4.*
- W każdej z 16 komórek inny **symbol**.
- **Klucz w ŚRODKU, nie na krawędzi** [decyzja Oskara 2026-06-02]: Brown = wiersz 3, Ladle = kolumna 3 → komórka klucza centralna (nie ostatni wiersz/kolumna).
- **Tekst-reguła gracza OGÓLNY** [decyzja Oskara 2026-06-02]: nie nazywa „szaty"/„chochli" wprost — „a colour and a thing, both belonging to the one you will meet". Gracz sam kojarzy (anty-prowadzenie-za-rączkę).
- Gracz wnosi **dwie obserwacje** zdobyte u Jordana (Z3Z):
  - **kolor** = barwa szaty Jordana → **brązowy (Brown)** [ROZSTRZYGNIĘTE 2026-06-02];
  - **przedmiot** = atrybut Jordana → **chochla (Ladle)**.
- Przecięcie `wiersz Brown × kolumna Ladle` = **symbol-klucz** (jeden, wspólny dla całej frakcji KZ — patrz §3 „klucz wspólny").
- **Co bramkuje:** nie różnicowanie grup, lecz „znajdź właściwe współrzędne" — gracz musi *wiedzieć*, że kolorem jest szata Jordana, a przedmiotem chochla, i poprawnie je przeciąć. Pozostałe 24 komórki = dystraktory (prowadzą do złych wierszy Tabeli 2 = bełkot).

### Tabela 2 — tabula recta (`symbol → alfabet podstawienia`)

- **Pionowo (nagłówek kolumn): kolejne litery alfabetu A–Z** (= litery jawne / plaintext).
- **Poziomo (etykiety wierszy): symbole** (te same 25 znaków co w komórkach Tabeli 1).
- **W każdym wierszu inne ustawienie liter alfabetu** — czyli każdy wiersz to osobny alfabet podstawieniowy. **Tylko wiersz symbolu-klucza** odszyfrowuje ciphertext w sensowny parol; pozostałe dają bełkot (self-check gracza: „czytelne czy bełkot").
- **Deszyfrowanie:** dla danej litery ciphertextu gracz **szuka jej w wierszu symbolu-klucza** i odczytuje **literę nagłówka kolumny** nad nią = litera jawna. (Klasyczny odczyt tabula recta: cell→column-header.)

---

## 2. DANE ROBOCZE (round-trip ✓)

> Wartości robocze do prototypu — **parol i styl symboli wymienialne** (§8). Mechanika i round-trip policzone na tych danych.

**Tabela 1 (4×4):**
- Wiersze (kolory): **Red · Green · Brown · Black**. Klucz = **Brown** (szata Jordana), wiersz 3 (centralny).
- Kolumny (przedmioty, rysunki): **Gingerbread · Sword · Ladle · Candle**. Klucz = **Ladle** (chochla), kolumna 3 (centralna).
- Komórka `Brown × Ladle` = **symbol-klucz** = **S11** (row-major idx 10; centralna, nie na krawędzi). Pozostałe 15 komórek = pozostałe symbole (dystraktory).

**Tabela 2 (16 wierszy) — wiersz symbolu-klucza (S11) = podstawienie kluczem `MARIENBURG`:**

```
kolumna (jawna):  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
wiersz ★KLUCZ:     M A R I E N B U G C D F H J K L O P Q S T V W X Y Z
```
(alfabet z hasła MARIENBURG: unikalne litery M-A-R-I-E-N-B-U-G, potem reszta C-D-F-H-J-K-L-O-P-Q-S-T-V-W-X-Y-Z)

**Plaintext (parol) — ROBOCZY [kandydat B1 z `concept/04`; do wyboru Oskara, §8]:**
```
ONE CROSS ONE OATH
```

**Ciphertext (szyfrogram Z11, wydawany w Z8/Z9/Z10) — szyfrowanie wierszem ★KLUCZ:**
```
KJE RPKQQ KJE KMSU
```
(O→K, N→J, E→E, C→R, R→P, S→Q, A→M, T→S, H→U; round-trip do `ONE CROSS ONE OATH` ✓)

> ⚠ **Przy zmianie parolu**: przelicz ciphertext tym samym wierszem ★KLUCZ (`materials/props/z11-tabula-recta-draft.md` ma tabelę kodowania). Hasło-substytucja MARIENBURG może zostać niezależnie od parolu.

---

## 3. MECHANIKA GRACZA (krok po kroku)

1. **Po Z2** kurierzy KZ trafiają do **Albrechta** (Zosia — handler toru KZ), który wręcza im zadanie infiltracji Piccolo + **Tabelę 1** (K3-K). **W Piccolo** grupa obserwuje **Jordana** (cel infiltracji): barwę szaty (brązowa) + atrybut (chochla), wyciąga godzinę buntu (20:30). Patrz §6.
2. **Po godzinie buntu / w finale** grupa ma **szyfrogram** (z Z8/Z9/Z10) i **Tabelę 2**.
3. **Tabela 1:** przecina wiersz `Brown` z kolumną `Ladle` → odczytuje **symbol-klucz**.
4. **Tabela 2:** odnajduje **wiersz oznaczony tym symbolem**.
5. **Deszyfruje** szyfrogram literą po literze (cell→column-header) → odczytuje **parol**.
6. **Podaje parol Albrechtowi** (lub — wolny wybór — dostarcza list Bażyńskiemu; patrz `concept/04`).

> **Klucz wspólny dla całej frakcji KZ** [decyzja Oskara 2026-06-02]: kolor i przedmiot są stałe (jeden aktor Jordan, stały atrybut), więc **wszystkie 5 grup KZ wyciąga ten sam symbol → ten sam wiersz → ten sam parol**. To celowe — parol jest frakcyjnym hasłem rozpoznawczym, nie kluczem per grupa (analogicznie do modelu parolu w kanonie). Bramką jest *poprawne złożenie współrzędnych*, nie unikatowość.

---

## 4. WERYFIKACJA MG

- **Oczekiwana odpowiedź grupy:** odczytany parol = `ONE CROSS ONE OATH` (lub finalny parol po wyborze Oskara). Podany Albrechtowi jako dowód godności.
- **Co odblokowuje:** Albrecht uznaje kuriera za „swojego" → grupa może dostarczyć list (wolny wybór strony, `concept/04`).
- **Hint awaryjny (jeśli utkną):**
  - nie wiedzą, jaki kolor/przedmiot → przypomnij: „co nosił człowiek z Piccolo? co miał w dłoni?" (brązowa szata + chochla);
  - mają symbol, nie umieją Tabeli 2 → wskaż, że szukają litery ciphertextu **wewnątrz** wiersza i czytają **nagłówek kolumny** nad nią;
  - zły wiersz (bełkot) → „sprawdź, czy na pewno wziąłeś właściwą komórkę Tabeli 1".

---

## 5. UZASADNIENIE FABULARNE (`zasada-uzasadnienie-fabularne`)

- **Tabela 1 (kolor × przedmiot)** = krzyżacki **klucz rozpoznawczy do swoich**: Zakon nie ufa nikomu na słowo — by udowodnić, że byłeś u właściwego człowieka (infiltrowałeś Piccolo i *widziałeś* Jordana), musisz znać szczegóły, których nie zna postronny: barwę jego szaty i narzędzie. Te dwa fakty „odblokowują" Zakonowi symbol z ich własnej tablicy.
- **Tabela 2 (tabula recta)** = szyfr Zakonu; tylko „swój" (kto zna symbol) odczyta dyspozycję.
- **Parol** = mechaniczne ucieleśnienie **bramy godności** (Albrecht jawny, żąda dowodu — `concept/05`). Podwójna brama: symbol-klucz (tylko kto był u Jordana) + poprawny odczyt tabula recta.
- **Spięcie z torem TR (symbole):** kolumny Tabeli 1 (sukno/chleb/miecz/piernik/chochla) **celowo cytują motywy z zagadki Z2 mieszczan** (sukno, chleb, piernik) + chochlę (atrybut Jordana). Wspólny słownik przedmiotów spina oba tory wizualnie, choć szyfr jest inny.

---

## 6. DYSTRYBUCJA REKWIZYTÓW

| Element | Skąd gracz go ma | Status |
|---|---|---|
| **Tabela 1** (lookup) | **Albrecht (Zosia) wręcza w K3-K po Z2** — handler toru KZ; grupa niesie ją do Piccolo, gdzie obserwuje Jordana (kolor szaty + chochla) | kanon [2026-06-02] |
| **Szyfrogram Z11** | **MG wydaje po opcjonalnej Z8/Z9/Z10** (wymienialny, jak w Z7) | kanon |
| **Tabela 2** (tabula recta) | **DO WYBRANIA**: (a) razem z Tabelą 1 w K3-K, albo (b) dopiero w finale (z szyfrogramem) | OTWARTE [2026-06-02] — patrz §8 |

---

## 7. RYZYKA / co mierzy dry-run

- **Rozmiar Tabeli 2:** 16 wierszy × 26 kolumn — **mieści się na jednej stronie A4 landscape** [zweryfikowane renderem 2026-06-02]. (Było 25/A3; zmniejszone do 4×4 → 16 decyzją Oskara.)
- **Brute-force Tabeli 2:** sprytna grupa może próbować kolejnych 16 wierszy aż „wyjdzie czytelne", omijając Tabelę 1. Akceptowalne (i tak muszą umieć tabula recta); 16 wierszy = umiarkowany koszt brute-force.
- **Kolor szaty = brązowy** koliduje wizualnie z **opaską grupy G9 (brąz)** — drobne; szata Jordana ≠ opaska lidera, ale oflagować przy kostiumie Piotra.
- **Anachronizm:** szyfr podstawieniowy / tabula recta znany od starożytności (podstawienie) — tablica Trithemiusa to ~1508, ale „tabela podstawień" jako koncept jest wcześniejsza i mało rażąca. Patrz `lore/fakty-vs-fabula.md` (dopisać poz.).

---

## 8. OTWARTE PYTANIA (do Oskara)

1. ✅ **Mechanika = dwie tabele, KZ-only** [2026-06-02]. TR (Z7) zostaje Cezar+nagłówek. Finały asymetryczne.
2. ✅ **Kolor szaty Jordana = brązowy** [2026-06-02]. (Wymóg: kostium Piotra musi to potwierdzić; jednoznacznie rozpoznawalny; brąz = jeden z 5 wierszy.)
3. ✅ **Siatka 4×4** [2026-06-02]. Kolumny (rysunki) = **Gingerbread/Sword/Ladle/Candle** (podkowa→miecz; cloth→świeca bo za blisko sukna z Z2; bread dropnięte do 4×4). Wiersze = Red/Green/Brown/Black. Klucz centralny (Brown×Ladle=S11).
4. ✅ **Klucz wspólny dla frakcji KZ** [2026-06-02] (nie per grupa).
4a. ✅ **Tabelę 1 wręcza Albrecht (Zosia) po Z2** [2026-06-02] — handler toru KZ (nie Jordan). Patrz `concept/05-tor-krzyzakow.md`, `puzzles/zamek-krzyzacki-lista.md §Z3Z`.
4b. ✅ **Tabela 1: kolumny = rysunki przedmiotów (SVG), wiersze = kolory po angielsku** [2026-06-02].
5. ⬜ **Parol (plaintext Z11)** — kandydaci w `concept/04` (A1 `THE VIRGIN GUARDS HER OWN`, A2 `SUB TUUM PRAESIDIUM`, B1 `ONE CROSS ONE OATH` ⭐, B2 `OBEDIENT UNTO MARIENBURG`, C1 `THE KEEP STILL STANDS`, C2 challenge-response). Roboczo B1. Po wyborze przeliczyć ciphertext.
6. ⬜ **Styl symboli** — 3 propozycje w `materials/props/z11-tabela-symboli-draft.md` (gmerki / pieczęcie heraldyczne / znaki astronomiczne). Wymóg: **wyraźnie inne niż glify mapy Z1** (geometryczne △○□) **i niż piktogramy miejsc** (Kopernik, osiołek). Rekomendacja: gmerki.
7. ✅ **Liczba wierszy Tabeli 2 = 16** [2026-06-02] (z 4×4) — mieści się na jednej A4 landscape (zweryfikowane renderem).
8. ⬜ **Gdzie wydać Tabelę 2** — z Tabelą 1 (K3-K) czy w finale. §6.
9. ⬜ **Hasło-substytucja** — robocze MARIENBURG; może być inne (nie musi być tematyczne, byle round-trip).

---

## 9. STATUS

- ✅ Mechanika — **dwie tabele (symbol-klucz + tabula recta), KZ-only** [2026-06-02].
- ✅ Siatka **4×4**; wiersz-klucz = **Brown** (szata Jordana), kolumna-klucz = **Ladle** (chochla); klucz **S11** centralny. Klucz wspólny dla frakcji.
- ✅ Kolumny (rysunki) = Gingerbread/Sword/Ladle/Candle; wiersze = Red/Green/Brown/Black; tekst-reguła ogólny.
- ✅ Dane + round-trip (parol `ONE CROSS ONE OATH`, ciphertext `KJE RPKQQ KJE KMSU`, hasło MARIENBURG, 16 wierszy).
- ✅ **Rekwizyty wyrenderowane** [2026-06-02]: `public/z11-tabela-1-symbole.pdf` (A4), `public/z11-tabela-2-tabula-recta.pdf` (A4 landscape). Generator: `tools/z11-cipher/` (walidacja PASS). Styl symboli = gmerki **roboczo** (do wyboru, §8.6).
- ⬜ Parol finalny, styl symboli (gmerki/heraldyka/astro), miejsce wydania Tabeli 2 — §8.

---

## Backup — stary model Z11 (Cezar, lustro Z7) [do 2026-06-02]

> Zachowane wg `feedback_zachowuj-backupy-wariantow`. Zastąpione modelem dwóch tabel.

- **Z11 = lustro Z7:** Cezar shift +7, klucz = przesunięcie odkryte przez **porównanie nagłówków** (motto `HELFEN, HEILEN UND WEHREN!` w tym samym foncie: znane krzyżakom jawne ↔ zaszyfrowane w nagłówku Z11). Brak rekwizytu (koło = zbyt silna wskazówka).
- **Asymetria pozyskania klucza:** mieszczanie wykradają motto (lista Z3); krzyżacy znają je z przynależności do Zakonu.
- **Wynik:** parol dla Albrechta (te same kandydaty co §8.5).
- Pełny kanon tej wersji: `puzzles/z7-szyfr-spec.md §0` + `concept/04-faza-3-final.md` (sekcja „Model szyfru finałowego [KANON 2026-06-01]", przed rewizją 2026-06-02).
