# Zagadka herbów hanzeatyckich — Z6

**Status**: szkicowe. Mechanika jasna. **Lokalizacja + lista miast zweryfikowane researchem [2026-06-02]** — patrz §Research lokalizacji. Zostaje decyzja Oskara: który odcinek gracze przechodzą i które 3 miasta = obecne vs 5 dystraktorów.

## Numeracja: **Z6** (tor mieszczan, opcjonalna, 2 grupy)

- Lustro **Z10** (polichromie w Biedronce, tor krzyżaków). Patrz `concept/03-faza-2b-asynchroniczne.md`, `puzzles/00-master-list.md`.
- Zastępuje poprzedni placeholder „anioły" na tym slocie.
- Output: **wymienialny „klucz" do finału Z7** (przez MG).

## Miejsce

> ⚠ **Korekta nazwy [2026-06-02]:** to NIE „Aleja Gmerków". Właściwa nazwa miejsca z herbami to **Aleja Herbów Miast Hanzeatyckich i Handlowych** (herby w bruku **ul. Szerokiej + Królowej Jadwigi**). „Aleja Gmerków" (25 gmerków kupieckich) to **inna ulica — Żeglarska** — i nie ma tam herbów miast. Wiki (`aleja-gmerkow.js`, pkt #37) zlepiło oba pod jedną nazwą/lokalizacją — błąd do zgłoszenia (patrz §Research). Dla Z6 liczą się **herby**, więc miejsce = **ul. Szeroka (główny ciąg) + Królowej Jadwigi (rozszerzenie)**.

- **Aleja Herbów** — herby miast hanzeatyckich/handlowych wmurowane w **bruk ul. Szerokiej** (22 herby, wiosna 2009) z kontynuacją w **bruku ul. Królowej Jadwigi** (8 herbów, 2010). Na **latarniach**: herby rodów patrycjuszowskich Torunia + średniowieczne znaki cechowe. Geneza: emblematy nawiązują do heraldyki dawnego Dworu Artusa.
- Dostępność: 24/7 (deptak publiczny).
- ⚠ **Kolizja przestrzenna z Z10:** główny ciąg herbów (Szeroka) **pokrywa się z miejscem Z10** — Biedronka to **Szeroka 22**, dosłownie wśród herbów. TR (Z6) i KZ (Z10) działają więc na tej samej ulicy. Do świadomej decyzji Oskara (czy to problem, czy nie — różne frakcje, różny czas).

## Research lokalizacji [2026-06-02] — współrzędne + źródła

**Herby (w bruku) — dwa ciągi, ~30 miast łącznie:**

- **ul. Szeroka** — `highway=pedestrian, surface=paving_stones`. **22 herby** (od wiosny 2009; stal/mosiądz/czarny kamień). Oś W→E:
  - koniec W (przy Rynku Staromiejskim): `53.010253, 18.605138`
  - koniec E (węzeł z Królowej Jadwigi): `53.010786, 18.609133`
  - środek ulicy ≈ `53.01055, 18.60714`
  - Miasta (kolejność z przewodnika): Chełmno, Toruń, Elbląg, Królewiec, Gdańsk (5 pruskich), dalej Brema, Dortmund, Soest, Lubeka, Osnabrück, Norymberga, Ratyzbona, Brunszwik, Kolonia, Hamburg, Wrocław, Stralsund, Rostock, Lejda, Naumburg, Erfurt, Münster.
- **ul. Królowej Jadwigi** — `highway=pedestrian, surface=sett`. **8 herbów** (2010). Oś (od węzła z Szeroką ku NE):
  - koniec SW (węzeł): `53.010786, 18.609133`
  - koniec NE: `53.011638, 18.610204`
  - środek ulicy ≈ `53.01121, 18.60965`
  - Miasta: Kraków, Lwów, Dorpat, Ryga, Londyn, Bergen, Brugia, Nowogród Wielki (4 ostatnie = kantory hanzeatyckie).

**Gmerki (≠ herby) — osobne miejsce, NIE dla Z6:**

- **ul. Żeglarska** (między Kopernika a Rabiańską, część Drogi Królewskiej) — **25 gmerków** (znaki kupieckie), odsłonięte X 2007. Zasięg ≈ `53.0082–53.0103, 18.6051–18.6062`.

> Źródła: OpenStreetMap (Overpass — geometria ulic, way 26839787/960726736 Szeroka, 34584518/960726737 Kr. Jadwigi); toruntour.pl/4615 i turystyka.torun.pl/art/210 (Aleja Herbów — listy miast, daty); turystyka.torun.pl/art/280 (Aleja Gmerków — Żeglarska, 25 gmerków). Współrzędne spójne z manifestem `B:\Dev\projekt_gra-miejska\tools\places-manifest.json`.

## Mechanika

1. Grupa dostaje **kartę z 8 herbami / nazwami miast hanzeatyckich**.
2. Idzie na **aleję herbów** (decyzja Oskara — który odcinek: Szeroka, Królowej Jadwigi, albo oba; patrz §Research), przeszukuje bruk i latarnie.
3. **3 z 8 są faktycznie obecne w bruku** — pozostałe 5 to wiarygodne miasta hanzeatyckie **nieobecne na wybranym odcinku** (dystraktory).
4. Znalezione 3 = odpowiedź / klucz do finału.

> **Decyzja projektowa (Oskar):** pole herbów to realnie ~30 miast na dwóch ulicach (22 Szeroka + 8 Kr. Jadwigi). To zmienia dobór dystraktorów — „obecne" jest dużym zbiorem, więc 5 dystraktorów muszą być miastami hanzeatyckimi **spoza** tej ~30. Najczystsze wyjście: **ograniczyć zadanie do jednego odcinka** (np. tylko 8 herbów Królowej Jadwigi — wtedy „3 obecne" wybiera się z tych 8, a 5 dystraktorów z miast nieobecnych tam), żeby zbiór obecnych był domknięty i sprawdzalny.

Analogia z Z10 (polichromie): zamiast odszukać sylwetki bestii na malowidłach, szukasz tarcz herbowych w terenie. Weryfikacja przez fizyczną obecność in loco.

## Uzasadnienie fabularne (do spięcia przez autora)

- Tajna Rada szuka miast-sojuszników Związku Pruskiego wśród partnerów hanzeatyckich Torunia.
- „Które z tych miast mają swoich przedstawicieli w mieście na czas karnawału?" → kurierzy sprawdzają ślady przy Dworze Artusa (aleja to dosłownie przeniesione emblematy z Dworu Artusa).
- Konkretne spięcie z fabułą: **Oskar decyduje**.

## Treści do dobrania

- **Lista faktycznych miast** — ✅ ustalona researchem (patrz §Research). Zostaje tylko weryfikacja w terenie, czy wszystkie nadal są (remonty, ubytki płyt). Haczyk wiki „ile herbów na latarniach, ile w bruku" — dobre pytanie rozgrzewkowe.
- **Lista 8 miast na karcie** = 3 obecne + 5 dystraktorów. Teraz, gdy znamy zbiór obecnych:
  - jeśli odcinek = **Królowej Jadwigi** (8 herbów): obecne dobierasz z {Kraków, Lwów, Dorpat, Ryga, Londyn, Bergen, Brugia, Nowogród}; dystraktory = miasta hanzeatyckie spoza tej ósemki (np. Lubeka, Hamburg, Brema, Stralsund — które są na Szerokiej, ale NIE na Kr. Jadwigi → fabularnie spójne).
  - jeśli odcinek = **Szeroka** (22 herby): zbiór obecnych jest duży → trudniej o wiarygodne dystraktory; rozważ węższą kartę.
  - **uwaga na dystraktory:** nie używaj jako „nieobecnego" miasta, które realnie JEST na drugim odcinku — gracz może je znaleźć i zaliczyć błędnie.
- **Karta** — styl: pergamin, wydruk A5, herby jako rysunki lub same nazwy w gotyku, bez podpisów (gracze muszą sami zmatchować).

## Co weryfikuje?

- Mieszczanie: wiedzą o hanzeatyckich sojuszach Torunia (wiarygodność kurierskia / lojalność).
- Zagadka nie jest filtrem klas — dostępna tylko dla mieszczan (krzyżacy mają polichromie Z10), ale mechanika nie ujawnia żadnej tajemnicy klasowej.

## Konsekwencja po rozwiązaniu

- Grupa raportuje 3 znalezione herby do MG / kontaktu Tajnej Rady.
- Otrzymuje **klucz wymienialny do finału Z7**.

## Otwarte pytania

1. ✅ **Które herby faktycznie są?** — ustalone researchem (22 Szeroka + 8 Kr. Jadwigi, listy w §Research). Zostaje tylko spot-check w terenie (ubytki).
2. 🔒 **Który odcinek gracze przechodzą?** (Szeroka / Królowej Jadwigi / oba) — DECYZJA OSKARA; determinuje zbiór „obecnych" i dobór dystraktorów oraz pin na mapie. **To główne otwarte pytanie Z6.**
3. **Karta** — same nazwy miast czy rysunki herbów? Rysunki autentyczniejsze, ale wymagają nakładu graficznego.
4. **Herby (bruk) vs latarnie** — w bruku są herby miast; na latarniach herby rodów patrycjuszy + znaki cechowe (inny zbiór). Można zrobić warstwę („w bruku, nie na latarni"), ale uważaj, by nie mylić graczy.
5. Czy potrzebujemy crosscheck-dokumentu (jak Bestiariusz Krzyżowca w Z10), czy samo fizyczne znalezienie wystarczy jako weryfikacja?

## Co autor może zrobić sam vs gdzie pomocy

- **Sam**: wizyta na ul. Królowej Jadwigi, spis herbów w bruku i na latarniach, zdjęcia.
- **Z pomocą agenta**: identyfikacja herbów (który herb = które miasto), dobór 5 dystraktorów (historyczne miasta hanzeatyckie, wiarygodne, nieobecne na aleji), projekt karty.
