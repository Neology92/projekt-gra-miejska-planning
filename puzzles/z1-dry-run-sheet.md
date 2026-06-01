# Z1 — arkusz dry-runu terenowego (dla Oskara)

> **Cel:** zweryfikować w terenie to, czego nie da się rozstrzygnąć zza biurka — **wypatrzalność detali `⚠`** i **realne czasy nóg granicznych**. Wynik domyka ścieżki G2/G4/G10 (reszta 7 jest stabilna). Niosisz ze sobą **draft mapy per ścieżka** (gdy będą gotowe) — sprawdzasz na miejscu „czy ten detal widać i czy ta noga ma sens".
>
> **Pomiar:** licznik kroków / GPS (metry) + stoper (czas marszu). Baseline planu = **~80 m/min**. **Pora dnia Z1:** wczesny etap gry — *potwierdź, w jakich godzinach grupy będą tu chodzić* (finał 20:30 wg pamięci, ale Z1 jest na początku; godziny otwarcia aptek/sklepów to realne ryzyko — patrz P1.1).
>
> **Zasada zapisu:** dla każdego detalu zaznacz `WIDAĆ / NIE WIDAĆ / WARUNKOWO`; dla każdej nogi zapisz **zmierzone metry + czas marszu**. Nie podmieniaj ścieżek w terenie — zapisz pomiar, decyzję o swapie podejmiemy z danymi.

---

## PRIORYTET 1 — detale `⚠` w łańcuchach (krytyczne: bust = ścieżka pada)

> Krok łańcucha z **niewypatrzalnym** detalem jest **nierozwiązywalny** (nie „trudny"). Jeśli detal nie jest widoczny z ulicy w porze gry → krok trzeba przenieść do dystraktorów, a do łańcucha wstawić detal pewny.

### 1.1 🔴 `N04` — lew (Apteka Pod Złotym Lwem, Rynek Nowomiejski 13) — NAJWAŻNIEJSZE
**Bramkuje DWIE ścieżki naraz:** G2 (krok P2) **i** G4 (krok P1). Łamie regułę „24/7" (`map.md §2.3`) — to apteka, ma godziny.
- [ ] Czy pozłacana **rzeźba lwa we wnęce muru przy wejściu** jest widoczna **z ulicy, gdy apteka zamknięta**? (kluczowe — jeśli lew jest tylko w witrynie/wnętrzu, po godzinach nie istnieje dla gracza)
- [ ] Godziny otwarcia apteki: __________ . Czy **pokrywają porę dnia Z1**? (jeśli Z1 wieczorem → prawdopodobnie zamknięte → lew niewidoczny → **G2 i G4 wymagają swapu**)
- **Werdykt:** WIDAĆ 24/7 / WIDAĆ tylko w godz. / NIE WIDAĆ → __________
- **Jeśli NIE/warunkowo:** zgłoś — przebudujemy G2 i G4 (kandydat zastępczy z puli pewnych: `N06` szafa / inny C).

### 1.2 `N03` — fartuch (Gospoda Pod Modrym Fartuchem, Rynek Nowomiejski 8)
Łańcuch: G2 (P1), G5 (P2). Wiki potwierdza tylko **nazwę** — nie fizyczne godło.
- [ ] Czy jest **fizyczny szyld / godło „modry fartuch"** widoczne z ulicy (nie tylko nazwa lokalu)? __________
- **Werdykt:** WIDAĆ / NIE WIDAĆ → __________ (jeśli nie — `N03` zostaje wyłącznie dystraktorem, G2/G5 dostają inny P1/P2)

### 1.3 `N05` — bazylika / łuki przyporowe (Kościół św. Jakuba, Rynek Nowomiejski)
Łańcuch: G2 (P3), G5 (P1), G6 (P2). Rozpoznanie „bazylika gotycka" jest eksperckie → piktogram = **sylwetka łuków przyporowych** (nawa główna wyższa od bocznych).
- [ ] Czy **łuki przyporowe** są czytelne z poziomu ulicy przy normalnym podejściu (nie wymagają obejścia kościoła / wiedzy fachowej)? __________
- **Werdykt:** WIDAĆ / WARUNKOWO / NIE → __________ (jeśli warunkowo — z którego podejścia widać najlepiej? to wpłynie na kierunek nogi)

### 1.4 `S06` — wąska uliczka z łukami odporowymi (Ulica Ciasna, Podmurna–Mostowa)
Łańcuch: G7 (P1). 3 m szer., łuki odporowe między spichlerzami.
- [ ] Czy **łuki odporowe** są oczywistym, wypatrzalnym detalem (a nie po prostu „wąska ulica")? __________
- **Werdykt:** WIDAĆ / NIE → __________

---

## PRIORYTET 2 — nogi graniczne budżetu (swap triggery inline)

> Budżety w `z1-10-sciezek.md` liczone **~80 m/min BEZ czasu na odczyt** (znalezienie glifu na mapie + wypatrzenie detalu + deszyfracja). Zmierz **realny czas marszu** ORAZ **czas postoju**.

### 2.1 🔴 Czas postoju na przystanek (dotyczy WSZYSTKICH ścieżek)
- [ ] Zmierz na 2–3 przystankach realny czas: *dojście pod glif → wypatrzenie detalu → odczyt deszyfrownika → ruszenie dalej*: __________ min/postój
- **Implikacja:** jeśli ~0,5–1 min/postój × 4 = **+2–4 min do każdej ścieżki**. Ścieżki „~15 min" realnie ~17–19. *To zmienia próg akceptacji* — ustalimy po pomiarze, czy 12±2 trzymamy, czy podnosimy do ~15±3.

### 2.2 `G4` noga `N06`→`C09` (Baj Pomorski → Katedra Janów) — ~620 m (najdłuższa w zestawie)
- [ ] Zmierzone metry: ______ m, czas marszu: ______ min
- **SWAP TRIGGER:** jeśli marsz **> 8 min** (lub całość G4 z postojami **> 17 min**) → zgłoś, podmienimy `C09` na bliższy endpoint albo skrócimy wcześniejszą nogę.

### 2.3 `G10` noga briefing (Rynek Nowomiejski) → `C03` (Filuś) przez ul. Chełmińską
Plan zakładał ~700 m / ~8,5 min, ale to mogło być przeszacowane.
- [ ] Zmierzone metry Chełmińską: ______ m, czas: ______ min
- **SWAP TRIGGER:** jeśli **~500 m / ~6 min** → G10 spada do ~13 min, zostaje bez zmian. Jeśli **≥700 m** i całość **> 17 min** → zgłoś, rozważymy zamianę startu G10.

### 2.4 `G8` pierwsza noga briefing → `C09` (Katedra, Żeglarska 16) — ~580 m
- [ ] Zmierzone metry: ______ m, czas: ______ min (kontrola — to też głęboki start)

---

## PRIORYTET 3 — nogi krótkie / nawrotne (jakość, nie blokada)

### 3.1 `G7` noga `C04`→`C07` (Ratusz → Dwór Artusa) — ~50 m
- [ ] Czy ten krok nie jest **trywialny** (oba obiekty w zasięgu wzroku z Rynku)? Ocena: czy gracz w ogóle „idzie", czy stoi w miejscu? __________
- (jeśli trywialny — rozważymy, czy G7 nie potrzebuje innego P3)

### 3.2 `G4` noga `C09`→`C02` (Katedra → Osiołek) — ~180 m w górę Żeglarskiej (lekki nawrót)
- [ ] Czy idąc od Katedry do Osiołka widać, że to „powrót" w stronę Rynku? __________
- **Uwaga do K1:** koperta startowa G4 **nie może zdradzać**, że Osiołek leży na drodze powrotnej (inaczej spoiler kierunku).

### 3.3 Mikro-wahnięcia w Nowym Mieście
- [ ] `G1` `N01`→`N02`, `G6` `N06`→`N05` (< ~100 m) — czy czytelne jako osobne kroki? __________

---

## Tabela zbiorcza pomiarów (uzupełnij w terenie)

| Element | Co sprawdzam | Wynik | Decyzja/flaga |
|---|---|---|---|
| `N04` lew | widać 24/7? godziny? | | |
| `N03` fartuch | fizyczne godło? | | |
| `N05` łuki przyp. | wypatrzalne? | | |
| `S06` łuki odpor. | wypatrzalne? | | |
| czas/postój | min na przystanek | | |
| G4 `N06`→`C09` | m / min | | |
| G10 brief→`C03` | m / min | | |
| G8 brief→`C09` | m / min | | |
| G7 `C04`→`C07` | trywialny? | | |

> Po dry-runie: wynik wraca do `z1-10-sciezek.md` (aktualizacja budżetów + rozstrzygnięcie ryzyka G2), potem domykamy mapy 3 ścieżek kontyngentnych (G2/G4/G10). Pozostałe 7 ścieżek i ich mapy są niezależne od wyniku.
