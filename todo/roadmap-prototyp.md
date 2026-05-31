# Roadmap — Prototyp pojedynczej ścieżki (2 dni robocze, duża intensywność)

> Dokument-sprint. Widok długofalowy całej gry (3–4 mies.) → `todo/roadmap.md`.
> Ten plik celuje w **jeden milestone**: kompletny, przechodni **zestaw wydruków dla JEDNEJ ścieżki**, gotowy do druku i dry-runu na papierze. Pełne **MVP** (oba tory, 11 zagadek, produkcja na ~40 osób) to **następny** milestone.

## 0. Cel i definicja „gotowe"

- **Cel sprintu:** stos wydruków pozwalający przejść grę **end-to-end po jednej ścieżce** i wyłapać dziury w łańcuchu (fabuła → zagadka → klucz → następny etap → finał).
- **Wybrana ścieżka:** tor **TR**, zestaw **Z3 (obowiązkowa) + Z4 (kalimba, opcjonalna)**.
  Łańcuch: `K1 → Z1 (1 trasa) → K2 → Z2 → Jordan/Z2b → K3 → Z3 → Z4 → Z7 → KF (mechanika dostarczenia listu)`.
- **„Gotowe do druku" = funkcjonalne, nie finalne graficznie.** Treść kompletna, układ czytelny, łańcuch domknięty. Stylizacja manuskryptowa (pergamin, kaligrafia, UnifrakturMaguntia) → **deferred do MVP**.
- **Model pracy (ustalony):** Ty podajesz **mechanikę + konkretny system + spięcie z fabułą** → ja porządkuję, robię drafty, finalizuję **docelowe teksty w kopertach** → Ty zatwierdzasz/korygujesz.
  - Twój czas = **wąskie gardło** (decyzje + input + review).
  - Mój czas = produkcja draftów, interleaved/asynchronicznie — nie liczy się do Twojego kalendarza.

---

## 1. Co NIE wchodzi w te 2 dni (świadome cięcia)

Cięcie = priorytet. Te rzeczy są **albo zablokowane zewnętrznie** (teren, ludzie, zakupy), **albo to skalowanie/MVP** — nie da się ich domknąć przy biurku i nie są potrzebne do przejścia jednej ścieżki.

| Pozycja | Dlaczego poza sprintem | Kiedy |
|---|---|---|
| Cały tor krzyżacki (Z3Z, Z8, Z9, Z10, Z11) | druga połowa gry; prototyp testuje jeden tor | MVP |
| Pozostałe opcjonalne TR (Z5 piernik, Z6 anioły) | Z6 wymaga wizyty/researchu w terenie; jedna opcjonalna wystarcza do walidacji | MVP / po wizji lokalnej |
| Dywersyfikacja 5+5 (tabele przydziału zestawów) | prototyp = 1 zestaw, nie 10 grup | MVP |
| Produkcja w ilościach (10–40 kopii, wosk, pieczętowanie) | prototyp = **1 egzemplarz** | po playteście |
| Stylizacja graficzna manuskryptowa (mapa, szyfrownik, koperty) | funkcjonalny wydruk wystarcza do dry-runu | MVP |
| Zgoda właściciela lokalu Jordana | negocjacja zewnętrzna; prototyp używa nazwy-zaślepki | równolegle, poza zegarem |
| Zakup kalimby + nagranie dzwonu | rekwizyt; prototyp używa **drukowanego diagramu** kalimby | przed playtestem |
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
- [ ] **KF — finał:** instrukcje (gdzie, 20:00/8. bicie dzwonu, jak fizycznie dostarczyć list).

### B. Rekwizyty drukowane (8)
- [ ] **List zapieczętowany** — treść (rekwizyt, który grupa nosi całą grę).
- [ ] **Wiadomość pośrednika** — „radźcie sobie sami, dostarczcie osobiście".
- [ ] **Mapa Torunia z symbolami** (1 trasa, wersja funkcjonalna).
- [ ] **Szyfrownik** (obiekt terenowy → następny symbol).
- [ ] **Pergamin z listą nazwisk TR** (Z3, klucz; nazwiska z wiki `tajna-rada.js` — research mój).
- [ ] **Diagram kalimby z numeracją pręcików + zapis melodii** (Z4).
- [ ] **Arkusz szyfru Z7 + materiał deszyfrujący** (koło/tabela — zależnie od systemu, który podasz).
- [ ] **Etykiety dla mechaniki dostarczenia** (np. „Do Bażyńskiego" / „Do Albrechta" — wariant pudełek).

### C. Skrypt aktora (1)
- [ ] **Skrypt Jordana (Piotr):** dialog F2A (info o buncie + godzina 20:00) + treść testu zaufania Z2b + wręczenie K3.

### D. Dokumenty operacyjne MG (3)
- [ ] **Arkusz śledzenia MG:** grupa → która koperta następna, hasła/identyfikator, klucze do wymiany, odpowiedzi-wzorce per etap.
- [ ] **Instrukcja MG:** jak prowadzić ścieżkę, jak weryfikować każdy etap, hinty awaryjne, sloty czasowe.
- [ ] **Lista przedmiotów do uzyskania:** co kupić / wydrukować / zdobyć przed playtestem (oddzielone: prototyp vs MVP).

---

## 3. DZIEŃ 1 — Decyzje + rdzeń ścieżki (F1 → F2A)

> Cel dnia: domknięta i zdraftowana cała część `K1 → Z1 → K2 → Z2 → Jordan/Z2b`. Po Dniu 1 łańcuch „od startu do wręczenia F2B" jest na papierze.

| # | Blok | Twój input (decyzje/mechanika) | Mój output (drafty) | Twój czas | Mój czas |
|---|---|---|---|---|---|
| 1A | **Mikro-decyzje odblokowujące** | Zatwierdź najprostsze warianty (mam rekomendacje): lokal = „Gospoda Pod Chochlą" (stub), identyfikator = 1 cech, groźba = narracyjna, dostarczenie = pudełka, niedostarczenie = brak głosu | spis decyzji w plikach | ~30 min | ~15 min |
| 1B | **Z1 szlak symboli (rdzeń)** | Ile kroków (rekom. 5); wybór 5 miejsc z mojej listy 45; „kreatywne" mapowanie obiekt→symbol (czemu Kopernik→astrolabium) | tabela trasy + mapa (funkcjonalna) + szyfrownik + start w K1 + wzorzec „odpowiedzi" dla MG | ~1–1,5 h | ~1,5 h |
| 1C | **K1 + K2 (F1)** | Ton groźby; które plotki z Puli A (3–5); forma „trzech rzeczy" w Z2 (system, nie tekst) | docelowe teksty K1, K2, list-rekwizyt, wiadomość pośrednika, Z2 | ~1 h | ~1,5 h |
| 1D | **Z2b test Jordana + skrypt F2A** | Wybór formy testu (1–5 z `test-jordana.md`) + intencja (co sprawdza); zarys dialogu Jordana | treść testu + skrypt aktora (Piotr): dialog, bunt, 20:00, wręczenie K3 | ~45 min | ~1 h |

**Dzień 1 — Twój czas ≈ 3–3,5 h skupionej pracy** (reszta to moja produkcja między Twoimi sesjami).

---

## 4. DZIEŃ 2 — F2B (slice) + finał + montaż

> Cel dnia: domknięty `K3 → Z3 → Z4 → Z7 → KF` **oraz** dokumenty MG + lista przedmiotów + pass spójności. Po Dniu 2 stos jest gotowy do druku i dry-runu.

| # | Blok | Twój input (decyzje/mechanika) | Mój output (drafty) | Twój czas | Mój czas |
|---|---|---|---|---|---|
| 2A | **Model „klucza" + Z3 + Z4** | Co fizycznie jest kluczem z Z3 (lista nazwisk) i z Z4 (kod liczbowy); wariant mechaniki Z3 (A/C/D — bez żywego NPC poza Albrechtem); treść melodii Z4 i zasada kod→klucz | K3 + K-Z3 + K-Z4, pergamin z nazwiskami TR (research), diagram kalimby + melodia, definicja kluczy | ~1–1,5 h | ~1,5 h |
| 2B | **Z7 finał (najtrudniejsze spięcie)** | Jaki szyfr; **jak klucze Z3+Z4 sklejają wniosek „Jordan = Bażyński"**; co widzi gracz po rozwiązaniu | K8 (Z7): arkusz szyfru + materiał deszyfrujący + KF (instrukcje finału, dostarczenie listu) | ~45 min–1 h | ~1,5 h |
| 2C | **Montaż + dokumenty MG** | Review arkusza MG i instrukcji; akceptacja listy przedmiotów | arkusz śledzenia MG, instrukcja MG, lista przedmiotów (prototyp vs MVP), kompilacja stosu do druku | ~45 min | ~2 h |
| 2D | **Pass spójności + dry-run na papierze** | Przejdź ścieżkę czytając artefakty po kolei — czy każdy etap daje klucz, którego potrzebuje następny? Czy odpowiedzi się zgadzają? | korekty wyłapanych dziur | ~45 min | ~30 min |

**Dzień 2 — Twój czas ≈ 3,5–4 h skupionej pracy.**

---

## 5. Ścieżka krytyczna i ryzyka

- **Najtrudniejszy węzeł: Z7 + model klucza (blok 2B/2A).** Szyfr finałowy musi **mechanicznie** przyjąć klucz z Z3 (lista nazwisk, w której NIE ma „Jordana") + klucz z Z4 (kod) i wypluć wniosek „Jordan = Bażyński". Jeśli to nie domyka się czysto — kaskaduje na Z3, Z4, K3.
  → **Mitygacja:** projektujemy klucz+Z7 jako **jeden moduł**, walidujemy ręcznie (przejście liczbowe) zanim sfinalizujemy koperty.
- **Z1 to największy pojedynczy kawałek** (blok 1B). Jeśli zabraknie czasu — patrz „rdzeń minimalny" niżej (stub Z1, reszta łańcucha pełna).
- **Twój czas jest wąskim gardłem, nie mój.** Sprint działa, jeśli decyzje per blok wpadają **na bieżąco**; każda zwłoka w inpucie blokuje mój draft. Najlepiej: krótka sesja decyzyjna → ja drafuję → Ty robisz review następnego bloku.
- **Lokal / kalimba / wosk biegną RÓWNOLEGLE, poza zegarem sprintu** — to telefony/zakupy, nie praca przy biurku. Nie wliczam ich w 2 dni.

---

## 6. Rdzeń minimalny (jeśli czas mocno goni)

Gdyby z 2 dni zostało realnie ~1 dzień, **przechodni łańcuch fabularny** ma priorytet nad mechaniką szlaku:
1. **Z1 → stub** („idź do punktu X i wróć") — tracimy test mechaniki mapy, zachowujemy resztę.
2. Pełne: K1, K2, Z2, skrypt Jordana, K3, **model klucza + Z3 + Z4 + Z7**, KF.
3. Dokumenty MG w wersji skróconej (sam arkusz śledzenia + lista przedmiotów; instrukcja MG jako bullet-points).

To wciąż daje **przechodni prototyp do dry-runu** — tyle że bez walidacji samego szlaku symboli.

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
