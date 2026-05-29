# Postaci

**Konwencja**: ★ = postać historyczna (link do wiki), ☆ = fikcyjna (autorska).

## NPCs aktywnie obecni w grze

### ★ Jan Bażyński (Hans von Baysen) - lider Tajnej Rady

- **Wiki**: `src/pages/jan-bazynski.js`
- **Historyczność**: przewodniczący Tajnej Rady Związku Pruskiego, twórca aktu wypowiedzenia posłuszeństwa.
- **W grze**: ukryty pod pseudonimem **Jordan, kucharz**. Plot twist w F3.
- **Rezydencja**: kamienica Rynek Staromiejski 16 (wg wiki).
- **Cecha rozpoznawcza**: przezwisko "**kulawy bazyliszek**" (reumatyzm).
- **W spotkaniu (F2A)**: gra rolę kucharza Jordana - prosty, gościnny, ale testujący.
- **W finale (F3)**: ujawnia tożsamość, prowadzi stronę mieszczan w scence z Albrechtem.

### ★ Komtur Albrecht Kalb - przeciwnik

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
- **W grze**: **opcjonalna** postać. Może pojawić się w Z6 (Związek Pruski) lub jako wzmianka w plotkach.
- **Funkcja narracyjna**: pokazuje że bunt nie jest dziełem jednej osoby.

### ☆ Jordan, kucharz - pseudonim Bażyńskiego

- **Pochodzenie**: legenda XIX-wieczna, najwcześniejsza wzmianka 1520 (rachunek budowlany).
- **Wiki**: `src/pages/legenda-jordan.js` (jeśli istnieje - sprawdzić)
- **W grze (autorska fikcja)**: Jordan = pseudonim Bażyńskiego. Plot twist F3.
- **Cecha rozpoznawcza**: **chochla** (atrybut wskazany w Z2 - "znajdźcie osobę z chochlą o imieniu Jordan").
- **Lokalizacja**: lokal gastronomiczny (Picollo / "Gospoda Pod Chochlą" / inny - patrz `puzzles/droga-do-jordana.md`).

### ☆ Mieśnik piekarz (lub rzeźnik) - kontr-narracja

- **W grze**: NPC w Z4 (perspektywa anti-buntownicza).
- **Funkcja**: pokazuje że nie wszyscy mieszczanie kibicują TR. Bunt to też straty (handel, dostawy).
- **Tło**: realne - cech rzeźniczy/piekarski był ważnym graczem ekonomicznym; cechy wiki `cechy-rzemieslnicze.js`.

### ☆ MG / animatorzy

- Postaci niewidzialne fabularnie - "głos narratora", "łącznik".
- Mogą być stylizowani na **kupców** / **zakonników** / **strażników miejskich** dla immersji.

## NPCs wzmiankowani (nie aktywni w grze)

### ★ Ludwig von Erlichshausen - Wielki Mistrz

- **Wiki**: `src/pages/ludwig-erlichshausen.js`
- **Funkcja**: wzmiankowany w fabule jako "powaga w Malborku". Nie pojawia się fizycznie.
- **Wykorzystanie**: w plotkach F1 ("przyjdzie pomoc z Malborka"), w Z6 (Związek Pruski w opozycji do niego).

### ★ Donosiciele 1454 - autentyczni

- **Wiki**: `src/pages/donosiciele-1454.js`
- **Nazwiska autentyczne**: Peter Sleszer, Jacob Scolim, Hans Bischoff (z korespondencji OBA).
- **Wykorzystanie**: w Z6 lub na liście nazwisk TR (jako "ujawnieni szpiedzy").

### ★ Pozostali członkowie TR

- **Wiki**: `src/pages/tajna-rada.js` (lista członków)
- **Wykorzystanie**: nazwiska na liście Z3.

## Weryfikacja imion - poprawione

Autor wymienił błędne / niepewne imiona:
- **"Jan Obrzyński"** → POPRAWNIE: **Jan Bażyński** (Hans von Baysen).
- **"Komtur Albrecht"** → POPRAWNIE: **Albrecht Kalb**.
- **"Kucharz Jordan"** → OK (postać legendarna, używamy świadomie).

## Otwarte pytania

1. **Kto gra Jordana** (aktor potrzebny na 2-3h spotkań)?
2. **Kto gra Albrechta** (aktor mobilny, krążący po mieście)?
3. **Kto gra Tilemana** jeśli decydujemy go włączyć?
4. **Mieśnik piekarz** - aktor czy nagranie? (Zagadka Z4 może działać z nagraniem, ale aktor immersyjniejszy.)
5. **Stylizacja kostiumów** - autentyczne XV-wieczne (drogie) czy "sugestywne" (płaszcz + krzyż = krzyżak)?
