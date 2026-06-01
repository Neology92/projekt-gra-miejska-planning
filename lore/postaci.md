# Postaci

**Konwencja**: ★ = postać historyczna (link do wiki), ☆ = fikcyjna (autorska).

## Obsada — twarde ograniczenie

**Tylko 2 aktorów NPC + 1 MG. Reszta postaci = na papierze** (karty, listy, rekwizyty w kopertach).

| Rola | Kto | Obecność |
|------|-----|----------|
| **Jordan / Jan Bażyński** | **Piotr** (Aktor A — gra obie role, to plot twist) | F2A (jako Jordan) + finał (ujawnia się jako Bażyński) |
| **Komtur Albrecht Kalb** | **Zosia** (Aktor B) | krąży w F2B (Z3) + finał |
| **MG** | **Oskar** (autor), nie postać | cała gra (logistyka) |
| Rzemieślnik (piekarz), Tileman, pośrednik, brat zakonny, donosiciele, obserwatorzy | **papier** | karty/listy/rekwizyty |

Obsada aktorów i MG = **wyznaczone osoby** (casting zamknięty, nie planujemy go).

Dlaczego akurat ci dwaj aktorzy: finał = jednoczesne starcie Bażyński vs Albrecht → przy limicie 2 aktorów te role są wymuszone, na innych nie ma obsady.

## NPCs aktywnie obecni w grze (= 2 aktorzy)

### ★ Jan Bażyński (Hans von Baysen) - lider Tajnej Rady

- **Aktor**: **Piotr** (gra też Jordana — to ta sama osoba, w tym sedno twistu).
- **Wiki**: `src/pages/jan-bazynski.js`
- **Historyczność**: przewodniczący Tajnej Rady Związku Pruskiego, twórca aktu wypowiedzenia posłuszeństwa.
- **W grze**: ukryty pod pseudonimem **Jordan, kucharz**. Plot twist w F3.
- **Rezydencja**: kamienica Rynek Staromiejski 16 (wg wiki).
- **Cecha rozpoznawcza**: przezwisko "**kulawy bazyliszek**" (reumatyzm).
- **W spotkaniu (F2A)**: gra rolę kucharza Jordana - prosty, gościnny, ale testujący.
- **W finale (F3)**: ujawnia tożsamość, prowadzi stronę mieszczan w scence z Albrechtem.

### ★ Komtur Albrecht Kalb - przeciwnik

- **Aktor**: **Zosia**.
- **Wiki**: `src/pages/albrecht-kalb.js`
- **Historyczność**: komtur toruński, dowódca obrony zamku przed mieszczanami w lutym 1454.
- **W grze**: NPC na mieście (faza F2B i F3). Nosi przy sobie **listę nazwisk TR**.
- **Cecha rozpoznawcza**: strój krzyżacki (płaszcz biały z czarnym krzyżem), broda?
- **Rola w fabule**:
  - F2B (Z3): grupa może go odnaleźć i ukraść listę.
  - F3: alternatywny adresat listu kurierów. Aktorski finał pod zamkiem.

### ★ Tileman vom Wege - drugorzędny

- **Wiki**: `src/pages/tileman-vom-wege.js`
- **Historyczność**: drugi kluczowy przywódca buntu, obok Bażyńskiego.
- **W grze (PAPIER, nie aktor)**: wyłącznie jako nazwisko/wzmianka — w plotkach, na materiałach Z5 (Związek Pruski) lub Z6 (pogłębienie info o TR). Brak żywej obsady.
- **Funkcja narracyjna**: pokazuje że bunt nie jest dziełem jednej osoby.

### ☆ Jordan, kucharz - pseudonim Bażyńskiego

- **Aktor**: **Piotr** (ten sam co Bażyński — twist).
- **Pochodzenie**: legenda XIX-wieczna, najwcześniejsza wzmianka 1520 (rachunek budowlany).
- **Wiki**: `src/pages/legenda-jordan.js` (jeśli istnieje - sprawdzić)
- **W grze (autorska fikcja)**: Jordan = pseudonim Bażyńskiego. Plot twist F3.
- **Cecha rozpoznawcza**: **chochla** (atrybut wskazany w Z2 - "znajdźcie osobę z chochlą o imieniu Jordan").
- **Lokalizacja**: lokal gastronomiczny (Picollo / "Gospoda Pod Chochlą" / inny - patrz `puzzles/droga-do-jordana.md`).
- **Angielska wersja twistu** (dla materiałów gracza): Jordan = **Hans von Baysen** [ustalone 2026-06-01] — w materiałach EN używamy formy niemieckiej (rozpoznawalna, prusko-hanzeatycka), nie polskiej „Jan Bażyński".

### Twist fabularny per frakcja [2026-06-01]

| Frakcja | Twist | Status |
|---------|-------|--------|
| Mieszczanie (TR) | Jordan = **Hans von Baysen** (= Jan Bażyński; sojusznik okazuje się przywódcą buntu). Materiały EN: forma niemiecka. | ✅ ustalony |
| Krzyżacy | **BRAK twistu** [ustalone 2026-06-01] — asymetria celowa. Brama krzyżaków = duma Albrechta + weryfikacja F2B, nie zwrot tożsamości. Uzasadnienie: `concept/05-tor-krzyzakow.md`. | ✅ ustalony |

### ☆ Rzemieślnik (piekarz) - kontr-narracja

- **W grze (PAPIER, nie aktor)**: wątek piekarza wchodzi w **Z5** (Związek Pruski działa wbrew rzemieślnikom) jako **karta/list/świadectwo** (np. skarga piekarza, cennik, notatka) — bez żywego NPC.
- **Funkcja**: pokazuje że nie wszyscy mieszczanie kibicują TR. Bunt to też straty (handel, dostawy).
- **Tło**: realne - cech piekarski był ważnym graczem ekonomicznym; cechy wiki `cechy-rzemieslnicze.js`.

### ☆ MG = Oskar

- Niewidzialny fabularnie - "głos narratora", "łącznik", logistyka i zliczanie.
- **Nie odgrywa postaci** i nie jest stylizowany na konkretną figurę — przy limicie obsady cała narracja postaci idzie na papierze w kopertach.

## NPCs wzmiankowani (nie aktywni w grze)

### ★ Ludwig von Erlichshausen - Wielki Mistrz

- **Wiki**: `src/pages/ludwig-erlichshausen.js`
- **Funkcja**: wzmiankowany w fabule jako "powaga w Malborku". Nie pojawia się fizycznie.
- **Wykorzystanie**: w plotkach F1 ("przyjdzie pomoc z Malborka"), w Z5 (Związek Pruski w opozycji do niego).

### ★ Donosiciele 1454 - autentyczni

- **Wiki**: `src/pages/donosiciele-1454.js`
- **Nazwiska autentyczne**: Peter Sleszer, Jacob Scolim, Hans Bischoff (z korespondencji OBA).
- **Wykorzystanie**: w Z5/Z6 lub na liście nazwisk TR (jako "ujawnieni szpiedzy").

### ★ Pozostali członkowie TR

- **Wiki**: `src/pages/tajna-rada.js` (lista członków)
- **Wykorzystanie**: nazwiska na liście Z3.

## Weryfikacja imion - poprawione

Autor wymienił błędne / niepewne imiona:
- **"Jan Obrzyński"** → POPRAWNIE: **Jan Bażyński** (Hans von Baysen).
- **"Komtur Albrecht"** → POPRAWNIE: **Albrecht Kalb**.
- **"Kucharz Jordan"** → OK (postać legendarna, używamy świadomie).

## Otwarte pytania

1. **Stylizacja kostiumów 2 aktorów** - autentyczne XV-wieczne (drogie) czy "sugestywne" (chochla = Jordan/Piotr; płaszcz + krzyż = Albrecht/Zosia)?

> ROZSTRZYGNIĘTE [2026-05-29]: obsada zamknięta — **MG = Oskar**, **Jordan/Bażyński = Piotr**, **Albrecht = Zosia**. Tylko ci **2 aktorzy + MG**; rzemieślnik (piekarz), Tileman, brat zakonny, pośrednik, obserwatorzy = **papier**. Casting nie jest już pytaniem otwartym.
