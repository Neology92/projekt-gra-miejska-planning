# Roadmap — Prototyp pojedynczej ścieżki (2 dni robocze, duża intensywność)

> Dokument-sprint. Widok długofalowy całej gry (3–4 mies.) → `todo/roadmap.md`.
> Ten plik celuje w **jeden milestone**: kompletny, przechodni **zestaw wydruków dla JEDNEJ ścieżki**, gotowy do druku i dry-runu na papierze. Pełne **MVP** (oba tory, 11 zagadek, produkcja na ~40 osób) to **następny** milestone.

## 🔴 Stan i priorytet [2026-05-31]

**Z1-ART: drafty gotowe [2026-05-31]** — czekają na review Oskara. Artefakty:
- **Dane kanoniczne** → `puzzles/z1-szlak-spec.md` (jedno źródło prawdy: glif↔detal↔miejsce, deszyfrownik, legenda, klucz MG, checklista generacji).
- **Mock mapy + deszyfrownik** → `prototype/mapa-z1-podglad.html` (9 abstrakcyjnych glifów na mapie + deszyfrownik „piktogram detalu → następny glif", bez nazw + klucz MG). Funkcjonalny, nie finalny.
- **Treść startu w K1** → `puzzles/szlak-symboli.md`, sekcja „Treść startu w K1".
- **Mechanika dwuwarstwowa** [decyzja 2026-05-31]: glify = *gdzie* (abstrakcyjne), piktogramy detali = *co wypatrzeć* (deszyfrownik bez nazw → więcej główkowania).
- Format „wyniku dla MG" **rozstrzygnięty: (a) 4 miejsca w kolejności**. Przeciek deszyfrownika: **opcja B — fałszywe tropy** (dystraktory → pętla glifów `⬡→☆→✕→∿→⊙→⬡`, bez „ślepych zaułków"; karta nie zdradza łańcucha) [decyzja 2026-05-31].

**Decyzje Oskara do domknięcia Z1** (`z1-szlak-spec.md`, „Otwarte"): ostateczny dobór 4 miejsc + 5 dystraktorów + piktogramów detali (propozycja do podmiany); zestaw glifów (geometryczny placeholder vs gmerki); rozwiązać kolizję glif ☆ vs detal ⭐.

**PRIORYTET TERAZ → opcja B: fabularny rdzeń F1→F2A** (K1, K2, Z2 + skrypt Jordana/Z2b). Wymaga inputu Oskara: forma „trzech rzeczy" w Z2 + forma testu Jordana.

**Zablokowane decyzje (gotowe do użycia):**
- **Zakres:** pionowy wycinek, ścieżka **TR + Z4**; poziom = **docelowe rozwiązania** (mock tylko do testu). Sekcja 0.
- **Z1:** łańcuch + abstrakcyjne glify na mapie + szyfrownik obiekt→następny glif + legenda do autouzupełnienia; **4 kroki**; kończy u **MG na Rynku Staromiejskim** (Piccolo dopiero w Z2). Reguły tras + trasa w `puzzles/szlak-symboli.md`.
- **Identyfikatory grup:** 10 kolorów (`mechanics/grupy-i-klasy.md`).
- **Lokal Jordana:** Piccolo (ul. Prosta 20). **Z7:** Cezar shift+7 (porównanie nagłówków; brak koła). **Z3:** żywy Albrecht (Zosia) + karta choreografii kradzieży. **Dostarczenie listu:** osobiste (mock: stół prawa=Bażyński / lewa=Albrecht).

---

## 0. Cel i definicja „gotowe"

- **Cel sprintu:** stos wydruków pozwalający przejść grę **end-to-end po jednej ścieżce** i wyłapać dziury w łańcuchu (fabuła → zagadka → klucz → następny etap → finał).
- **Wybrana ścieżka:** tor **TR**, zestaw **Z3 (obowiązkowa) + Z4 (kalimba, opcjonalna)**.
  Łańcuch: `K1 → Z1 (1 trasa) → K2 → Z2 → Jordan/Z2b → K3 → Z3 → Z4 → Z7 → KF (mechanika dostarczenia listu)`.
- **Poziom = DOCELOWE rozwiązania dla jednej ścieżki**, nie wersje-zaślepki. Mechanika, teksty, szyfr, trasa = takie jak w finalnej grze. **Mockowanie** (ręczne wydruki, prowizoryczne rekwizyty) służy tylko fizycznemu testowi — nie jest kompromisem projektowym.
- **„Gotowe" = treść/projekt kompletny i docelowy; oprawa graficzna może poczekać.** Łańcuch domknięty. Finalna stylizacja manuskryptowa (pergamin, kaligrafia, UnifrakturMaguntia) i druk produkcyjny → osobno, po dry-runie.
- **Model pracy (ustalony):** Ty podajesz **mechanikę + konkretny system + spięcie z fabułą** → ja porządkuję, robię drafty, finalizuję **docelowe teksty w kopertach** → Ty zatwierdzasz/korygujesz.
  - Twój czas = **wąskie gardło** (decyzje + input + review).
  - Mój czas = produkcja draftów, interleaved/asynchronicznie — nie liczy się do Twojego kalendarza.

---

## 1. Co NIE wchodzi w te 2 dni (świadome cięcia)

Cięcie = priorytet. Te rzeczy są **albo zablokowane zewnętrznie** (teren, ludzie, zakupy), **albo to skalowanie/MVP** — nie da się ich domknąć przy biurku i nie są potrzebne do przejścia jednej ścieżki.

| Pozycja | Dlaczego poza sprintem | Kiedy |
|---|---|---|
| Cały tor krzyżacki (Z3Z, Z8, Z9, Z10, Z11) | druga połowa gry; prototyp testuje jeden tor | MVP |
| Pozostałe opcjonalne TR (Z5 piernik, Z6 herby hanzeatyckie) | Z6 wymaga wizyty na ul. Królowej Jadwigi (spis herbów w terenie); jedna opcjonalna wystarcza do walidacji | MVP / po wizji lokalnej |
| Dywersyfikacja 5+5 (tabele przydziału zestawów) | prototyp = 1 zestaw, nie 10 grup | MVP |
| Produkcja w ilościach (10–40 kopii, wosk, pieczętowanie) | prototyp = **1 egzemplarz** | po playteście |
| Stylizacja graficzna manuskryptowa (mapa, szyfrownik, koperty) | funkcjonalny wydruk wystarcza do dry-runu | MVP |
| Zgoda właściciela lokalu Jordana | negocjacja zewnętrzna; prototyp używa nazwy-zaślepki | równolegle, poza zegarem |
| Nagranie/rekwizyt dzwonu finałowego | rekwizyt dnia gry; prototyp papierowy go nie potrzebuje (kalimba JUŻ jest — Z4 używa fizycznego instrumentu) | przed dniem gry |
| Scenka aktorska finału (Bażyński vs Albrecht, warianty wyniku) | wymaga 2 aktorów + zbiórki grup — nietestowalna solo na papierze | przed dniem gry |
| Rozstrzygnięcia „remis / co jeśli nie dostarczą / punkty zaufania ważone" | prototyp bierze **najprostszy wariant** (1 grupa = 1 głos, niedostarczenie = brak głosu) | MVP |
| Kostiumy, lokalizacje MG, harmonogram fal, formularz zapisów | logistyka dnia gry | przed dniem gry |

**Zasada na czas sprintu:** jeśli zadanie nie leży na łańcuchu `K1→KF` jednej ścieżki — nie robimy go teraz.

---

## 2. Lista artefaktów prototypu (żeby zobaczyć zakres)

To jest **cała** lista do wyprodukowania dla jednej ścieżki. ~20 pozycji.

### A. Teksty kopert (7)
- [ ] **K1 — startowa:** brief wspólny + groźba (motywacja kurierów, wariant narracyjny) + odesłanie do listu-rekwizytu + wskazówka do 1. symbolu Z1.
- [ ] **K2 — po Z1:** plot twist (pośrednika nie ma) + odesłanie do wiadomości pośrednika + 3–5 plotek (z Puli A) + Z2 („trzy rzeczy" → Jordan).
- [ ] **K3 — od Jordana:** brief F2B + przydział zestawu (Z3 + Z4) + co dalej.
- [ ] **K-Z3 — infiltracja zamku:** brief + zagadka + „co po rozwiązaniu" (kontakt z listą nazwisk).
- [ ] **K-Z4 — melodia/kalimba:** brief + zagadka + output (kod → klucz).
- [ ] **K8 — Z7 finałowy szyfr:** brief + szyfr + ujawnienie kierunku (komu oddać list).
- [ ] **KF — finał:** instrukcje (gdzie, 20:30/8. bicie dzwonu, jak fizycznie dostarczyć list).

### B. Rekwizyty drukowane (8)
- [ ] **List zapieczętowany** — treść (rekwizyt, który grupa nosi całą grę).
- [ ] **Wiadomość pośrednika** — „radźcie sobie sami, dostarczcie osobiście".
- [ ] **Mapa Torunia z symbolami** (1 trasa, wersja funkcjonalna).
- [ ] **Szyfrownik** (obiekt terenowy → następny symbol).
- [ ] **Pergamin z listą nazwisk TR** (Z3, klucz; nazwiska z wiki `tajna-rada.js` — research mój).
- [ ] **Zapis melodii Z4 + mapa numeracji pręcików** (kalimba fizyczna już jest; karta = referencja: nuty/sekwencja → numery pręcików → kod liczbowy).
- [ ] **Arkusz szyfru Z7 + materiał deszyfrujący** — szyfr **Cezara shift+7** (klucz = porównanie nagłówka Z7 z mottem Z3 — ten sam font, ta sama interpunkcja; brak koła; NIE kalimba). Prop gracza gotowy → `prototype/z7-szyfrogram-draft.md`. *(Backup Vigenère → `prototype/z7-szyfrogram-vigenere-backup.md`.)*
- [ ] **Mechanika dostarczenia = osobiste przekazanie aktorowi** (Bażyński/Piotr i Albrecht/Zosia przy stole finałowym; gracz wręcza list wybranej stronie). Mock testowy: list na prawą (Bażyński) / lewą (Albrecht) stronę stołu.

### C. Skrypty/karty aktorów (2)
- [ ] **Skrypt Jordana (Piotr):** dialog F2A (info o buncie + godzina 20:30) + treść testu zaufania Z2b + wręczenie K3.
- [ ] **Karta gry Albrechta (Zosia) — Z3:** choreografia „okna na kradzież listy" (telegrafowane obroty: najpierw ciało, potem głowa → gracze mają czas na reakcję) + reakcje gdy grupa złapana / gdy się uda + jak trzyma listę „luźno".

### D. Dokumenty operacyjne MG (3)
- [ ] **Arkusz śledzenia MG:** grupa → która koperta następna, hasła/identyfikator, klucze do wymiany, odpowiedzi-wzorce per etap.
- [ ] **Instrukcja MG:** jak prowadzić ścieżkę, jak weryfikować każdy etap, hinty awaryjne, sloty czasowe.
- [ ] **Lista przedmiotów do uzyskania:** co kupić / wydrukować / zdobyć przed playtestem (oddzielone: prototyp vs MVP).

---

## 2a. Backlog dorzucony w trakcie [2026-06-01]

Zadania zgłoszone przez Oskara po domknięciu rdzenia Z3↔Z7. Każde z funkcją bramkującą.

- [x] **Układ spacji szyfrogramu Z7 = jak w zdaniu** (NIE grupy po 5) — ZROBIONE [2026-06-01]. Aktualny ciphertext (shift+7, skrócony [2026-06-01] — „HANS VON BAYSEN IS JORDAN THE COOK", Jordan na końcu jako zaskoczenie): `OHUZ CVU IHFZLU PZ QVYKHU AOL JVVR`. *Funkcja:* granice słów pozwalają uzupełnić pomyłkową literę domysłem w trudnej zagadce terenowej. Detale → `puzzles/z7-szyfr-spec.md §0`, `prototype/z7-szyfrogram-draft.md`.
- [ ] **Negatywne plotki o WŁASNEJ frakcji — nagroda za opcjonalną (Z4–6 mieszczanie / Z8–10 krzyżacy).** Po wykonaniu opcjonalnej grupa dostaje plotki obciążające *swoją* stronę (mieszczanie → cień na TR; krzyżacy → cień na Zakon). *Funkcja:* zasiewa wątpliwość moralną → finałowa decyzja „komu dać list" przestaje być oczywista. Wymaga: puli plotek negatywnych per frakcja (research/draft mój) + przypisania do MG. Zakres: Z4 = prototyp; Z5–6 + Z8–10 = MVP. Powiązania: `lore/plotki-i-pogloski.md` (Pula A/B), `concept/04-faza-3-final.md` („Co napędza decyzję").
- [ ] **System oznaczania kopert: kolor grupy + numer koperty, BEZ frakcji i BEZ numeru zadania.** Koperta nosi tylko kolor (1 z 10 grup) + numer sekwencyjny. *Funkcja:* anti-spoiler — gracz nie odgaduje toru ani treści zadania z opisu; MG mapuje kolor+numer → zawartość przez arkusz śledzenia. Zakres: prototyp (1 grupa) → MVP (10). Plik docelowy: `mechanics/koperty-mg.md`.
- [x] ~~**Zajawka ucząca liczyć litery (onboarding klucza Z7)**~~ — **NIEAKTUALNE [2026-06-01]:** klucz to teraz porównanie nagłówków (nie liczenie liter) → onboarding liczenia liter odpada. Mechanika odkrycia jest czytelna przez samą interpunkcję w nagłówku. Zarchiwizowane.

---

## 3. DZIEŃ 1 — Decyzje + rdzeń ścieżki (F1 → F2A)

> Cel dnia: domknięta i zdraftowana cała część `K1 → Z1 → K2 → Z2 → Jordan/Z2b`. Po Dniu 1 łańcuch „od startu do wręczenia F2B" jest na papierze.

| # | Blok | Twój input (decyzje/mechanika) | Mój output (drafty) | Twój czas | Mój czas |
|---|---|---|---|---|---|
| 1A | **Mikro-decyzje odblokowujące** | ✅ Rozstrzygnięte [2026-05-31]: lokal = **Piccolo** (realny, NE od Rynku, serwuje posiłki); identyfikator grupy = **kolor** (10 kolorów — patrz `mechanics/grupy-i-klasy.md`; przydział losowy, nie zdradza klasy); dostarczenie listu = **osobiste przekazanie aktorowi** (mock testowy: list na stół, prawa = Bażyński / lewa = Albrecht); groźba = narracyjna; niedostarczenie = brak głosu | spis decyzji w plikach | ~10 min | ~10 min |
| 1B | **Z1 szlak symboli (rdzeń)** | Ile kroków (rekom. 5); wybór 5 miejsc z mojej listy 45; „kreatywne" mapowanie obiekt→symbol (czemu Kopernik→astrolabium) | tabela trasy + mapa (funkcjonalna) + szyfrownik + start w K1 + wzorzec „odpowiedzi" dla MG | ~1–1,5 h | ~1,5 h |
| 1C | **K1 + K2 (F1)** | Ton groźby; które plotki z Puli A (3–5); forma „trzech rzeczy" w Z2 (system, nie tekst) | docelowe teksty K1, K2, list-rekwizyt, wiadomość pośrednika, Z2 | ~1 h | ~1,5 h |
| 1D | **Z2b test Jordana + skrypt F2A** | Wybór formy testu (1–5 z `test-jordana.md`) + intencja (co sprawdza); zarys dialogu Jordana | treść testu + skrypt aktora (Piotr): dialog, bunt, 20:30, wręczenie K3 | ~45 min | ~1 h |

**Dzień 1 — Twój czas ≈ 3–3,5 h skupionej pracy** (reszta to moja produkcja między Twoimi sesjami).

---

## 4. DZIEŃ 2 — F2B (slice) + finał + montaż

> Cel dnia: domknięty `K3 → Z3 → Z4 → Z7 → KF` **oraz** dokumenty MG + lista przedmiotów + pass spójności. Po Dniu 2 stos jest gotowy do druku i dry-runu.

| # | Blok | Twój input (decyzje/mechanika) | Mój output (drafty) | Twój czas | Mój czas |
|---|---|---|---|---|---|
| 2A | **Model „klucza" + Z3 + Z4** | Z3 = **żywy Albrecht (Zosia)** + choreografia okna na kradzież listy (telegrafowane obroty); **Model klucza [2026-06-01]:** **nagłówek listy Z3 niesie motto = klucz Cezara** (przesunięcie = liczba liter, 21); szyfrogram wydaje **MG po opcjonalnej (Z4/5/6)**; kalimba (Z4) = prosta zagadka melodia→liczby | K3 + K-Z3 + K-Z4, pergamin z nazwiskami TR (research), karta gry Albrechta, zapis melodii + mapa pręcików, definicja kluczy | ~1–1,5 h | ~1,5 h |
| 2B | **Z7 finał (spięcie)** | Szyfr = **Cezar shift+7**; klucz = porównanie nagłówków (Z3 jawny ↔ Z7 zaszyfrowany, ten sam font+interpunkcja); szyfrogram = przechwycony list krzyżacki ujawniający „Jordan = Bażyński" (wydawany przez MG po opcjonalnej); brak koła | K8 (Z7): szyfrogram + KF (instrukcje finału, dostarczenie listu) | ~45 min–1 h | ~1,5 h |
| 2C | **Montaż + dokumenty MG** | Review arkusza MG i instrukcji; akceptacja listy przedmiotów | arkusz śledzenia MG, instrukcja MG, lista przedmiotów (prototyp vs MVP), kompilacja stosu do druku | ~45 min | ~2 h |
| 2D | **Pass spójności + dry-run na papierze** | Przejdź ścieżkę czytając artefakty po kolei — czy każdy etap daje klucz, którego potrzebuje następny? Czy odpowiedzi się zgadzają? | korekty wyłapanych dziur | ~45 min | ~30 min |

**Dzień 2 — Twój czas ≈ 3,5–4 h skupionej pracy.**

---

## 5. Ścieżka krytyczna i ryzyka

- **Węzeł: Z7 + model klucza (blok 2B/2A).** Model [zaktualizowany 2026-06-01, sesja z Piotrem]: **klucz = porównanie nagłówków** (Z3 jawny `HELFEN, HILFEN UND WEHREN!` ↔ Z7 zaszyfrowany shift+7 w tym samym foncie) → Cezar shift+7. **Szyfrogram** wydaje **MG po opcjonalnej (Z4/5/6)**. Brak koła. Kalimba = prosta zagadka melodia→liczby. Patrz `z7-szyfr-spec.md §0`.
  - **Ryzyko trudności w terenie:** dry-run mierzy czy gracze samodzielnie połączą oba nagłówki + minuty na odszyfrowanie. Mitygacja: interpunkcja lokuje słowa, granice słów w szyfrogramie pozwalają uzupełnić pomyłki.
  - **Anachronizm: minimalny** — Cezar znany od starożytności (inaczej niż Vigenère ~1553). Backup Vigenère → `prototype/z7-szyfrogram-vigenere-backup.md`.
  - Jeśli spięcie nie domyka się czysto — kaskaduje na Z3, Z4, K3. Walidujemy ręcznie (przejście liczbowe) przed finalizacją kopert.
  → **Mitygacja:** projektujemy klucz+Z7 jako **jeden moduł**, walidujemy ręcznie (przejście liczbowe) zanim sfinalizujemy koperty.
- **Z1 to największy pojedynczy kawałek** (blok 1B). Jeśli zabraknie czasu — patrz „rdzeń minimalny" niżej (stub Z1, reszta łańcucha pełna).
- **Twój czas jest wąskim gardłem, nie mój.** Sprint działa, jeśli decyzje per blok wpadają **na bieżąco**; każda zwłoka w inpucie blokuje mój draft. Najlepiej: krótka sesja decyzyjna → ja drafuję → Ty robisz review następnego bloku.
- **Poziom docelowy (nie placeholder) = więcej iteracji review per komponent.** Estymaty są realne dla JEDNEJ ścieżki, ale napięte; bufor czasowy to **skrócenie ścieżki** (sekcja 6), nie obniżenie jakości.
- **Uzgodnienie z Piccolo / wosk-pieczęć / druk biegną RÓWNOLEGLE, poza zegarem sprintu** — to telefony/zakupy/produkcja, nie praca przy biurku. Nie wliczam ich w 2 dni. (Kalimbę już masz.)

---

## 6. Rdzeń minimalny (jeśli czas mocno goni)

Skoro chcemy **docelowe rozwiązania, nie zaślepki** — gdy zabraknie czasu, **skracamy ścieżkę**, a nie upraszczamy komponenty. Każdy dostarczony fragment jest finalny.
1. **Priorytet 1 (sesja 1):** domknięty łańcuch `K1 → Z1 (1 trasa) → K2 → Z2 → Jordan/Z2b → K3` na docelowym poziomie — samodzielnie testowalny kawałek (start → wręczenie F2B).
2. **Priorytet 2 (sesja 2):** `Z3 → Z4 → Z7 → KF` + dokumenty MG.
3. Cięcie = **mniej etapów w pełni gotowych**, nie te same etapy „na pół gwizdka".

---

## 7. Definicja ukończenia sprintu (checklista do druku)

- [ ] Wszystkie 7 tekstów kopert gotowe i spójne (każda kończy się jasnym „co dalej").
- [ ] 8 rekwizytów drukowanych ma treść (graficznie funkcjonalne).
- [ ] Skrypt Jordana kompletny (dialog + test + wręczenie K3).
- [ ] Łańcuch kluczy zweryfikowany ręcznie: Z3-klucz + Z4-klucz → Z7 → „Jordan = Bażyński".
- [ ] Arkusz MG pozwala śledzić, którą kopertę wręczyć następną.
- [ ] Lista przedmiotów rozdziela: „na prototyp" vs „na MVP/playtest".
- [ ] Dry-run na papierze przeszedł bez martwych punktów.
- [ ] Stos skompilowany i uporządkowany do zlecenia druku (druk = osobno, poza tym sprintem).

---

## 8. Po sprincie (poza 2 dniami)

1. **Zlecenie druku** prototypu (osobno).
2. **Dry-run terenowy** solo lub w 2 osoby (przejście trasy z wydrukami).
3. Korekty → dopiero potem **skalowanie do MVP** (drugi tor, pozostałe opcjonalne, dywersyfikacja, produkcja ilościowa).
