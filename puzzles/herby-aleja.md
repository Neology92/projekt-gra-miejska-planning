# Zagadka herbów hanzeatyckich — Z6

**Status**: **mechanika + klucz ROZSTRZYGNIĘTE [2026-06-03]** (mechanika Piotra: dopasowanie herbów nadawca↔odbiorca + dedukcja „kto nie dotarł"; **odpowiedź = Chełmno**). Koperta gracza → `envelopes/miasto-5-Z6.md` (draft EN, nazwy z bruku). **Lokalizacja + lista miast zweryfikowane researchem [2026-06-02]** — patrz §Research lokalizacji. **Zostaje:** (a) review Oskara koperty; (b) spot-check herbów in loco (czytelność tarcz); (c) decyzja Z6↔Z10 kolizja przestrzenna; (d) karta-rekwizyt do produkcji.

## Numeracja: **Z6** (tor mieszczan, opcjonalna, 2 grupy)

- **Lustro Z10 w ROLI, nie w mechanice.** Z10 (polichromie/Bestiariusz, KZ) i Z6 dają ten sam *typ outputu* — **wymienialny klucz do finału** (Z7 dla TR) przez MG — i obie żyją na ul. Szerokiej. Ale **mechanika jest inna**: Z10 = „karta-z-ośmioma → znajdź, które są obecne in loco"; Z6 (wersja Piotra) = „dopasuj odbiorców do nadawców po podobieństwie herbu → wyklucz tego bez pary". ⚠ Pliki `krzyzacy-4-Z10.md` i stary opis tu nazywały to „tą samą mechaniką" — to już nieaktualne (do decyzji Oskara, czy zostawić Z10 jako jest). Patrz `concept/03-faza-2b-asynchroniczne.md`, `puzzles/00-master-list.md`.
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

## Mechanika [wersja Piotra — kanoniczna 2026-06-03]

> **Treść źródłowa (wiadomość Piotra, 2026-06-03):** *„Przedstawiciele kupców z ważnych miast Związku Pruskiego — Gdańska, Królewca, Elbląga, Chełmna i Torunia — wysłali poselstwa do zaprzyjaźnionych miast o wsparcie ich w organizacji buntu. Tak się złożyło, że miasta, do których dotarły wiadomości, mają herby podobne do miast-nadawców. Poselstwa trafiły do Hamburga, Kolonii i aż 2 do Lubeki. Z którego miasta wysłana wiadomość nie dotarła?"* + *„Odległości między tymi herbami to dobre kilka metrów — więc nie chcę bardzo utrudniać."*

**Typ zadania: dopasowanie + eliminacja (NIE „znajdź obecne").** Wszystkie potrzebne herby SĄ w bruku — gracz nie szuka obecnych/nieobecnych, tylko **paruje** odbiorców z nadawcami po podobieństwie herbu i wskazuje nadawcę bez pary.

1. **5 nadawców** (miasta Związku Pruskiego): **Gdańsk, Królewiec, Elbląg, Chełmno, Toruń**.
2. **4 poselstwa dotarły** — do miast: **Hamburg, Kolonia, Lubeka, Lubeka** (Lubeka 2×).
3. **Reguła** (podana graczowi WPROST — Piotr chce łatwo): każdy poseł trafił do miasta-sojusznika o herbie **podobnym** do herbu swojego miasta. Gracz dopasowuje każde z 4 miast-odbiorców do nadawcy o zbliżonym herbie.
4. **Odpowiedź = ten 1 nadawca, którego herb nie przypomina żadnego z {Hamburg, Kolonia, Lubeka}** — jego poselstwo „nie dotarło".

**Realizacja terenowa:** wszystkie 8 miast (5 pruskich + Hamburg + Kolonia + Lubeka) leżą w bruku **ul. Szerokiej** (patrz §Research — lista 22 herbów). Gracze chodzą po deptaku, oglądają tarcze, parują wizualnie. To **rozstrzyga dawne otwarte pytanie „który odcinek"** → **Szeroka** (wymuszona przez dobór miast; Królowej Jadwigi NIE zawiera tych miast).

> **Trudność celowo niska** (życzenie Piotra). Brief modeluje zadanie jednym gotowym dopasowaniem (Toruń↔Hamburg, patrz §Klucz), żeby gracz złapał regułę; reszta to kilka kroków po bruku.

## Klucz MG — ✅ ROZSTRZYGNIĘTY

> **Odpowiedź = CHEŁMNO** [Oskar/Piotr, 2026-06-03]. Poselstwo z **Chełmna** nie dotarło — herb Chełmna nie przypomina żadnego z {Hamburg, Kolonia, Lubeka}.

- **Klucz dla MG:** grupa raportuje miasto-nadawcę bez pary. **Poprawna odpowiedź = Chełmno.** MG zalicza tylko „Chełmno".
- **Struktura parowań:** Toruń↔Hamburg (zamek z 3 wieżami — pewne, użyte w briefie jako przykład); pozostała trójka {Gdańsk, Królewiec, Elbląg} paruje z {Kolonia, Lubeka, Lubeka}; **Chełmno bez pary = odpowiedź**.
- **Do hintów (opcjonalnie):** dokładne przypisanie Gdańsk/Królewiec/Elbląg → Kolonia/Lubeka×2 zna Piotr; do grania nie jest potrzebne (MG sprawdza tylko końcową odpowiedź = Chełmno). Jeśli MG chce drabinkę hintów, dopytać Piotra o pełne parowania.
- Klucz NIE trafia na egzemplarz gracza; mieszka tu + do osadzenia w `mg-*-klucz` przy renderze rekwizytów.

## Uzasadnienie fabularne [wdrożone w `miasto-5-Z6.md`]

- **Tajna Rada rozesłała 5 posłów** do hanzeatyckich sojuszników Związku Pruskiego z prośbą o wsparcie buntu. **Czterech odpowiedziało** (z Hamburga, Kolonii, dwukrotnie z Lubeki); **piąty poseł zamilkł na drodze** — Rada nie wie, którą z pięciu dróg „połknęła".
- **Czemu herby:** stary obyczaj bractwa kupieckiego — miasto wita miasto **po herbie**; posła wysyłano do „siostrzanej tarczy" podobnej do własnej. By ustalić, który z naszych posłów zaginął, kurier paruje herby miast-odbiorców (które odpowiedziały) z ich pruskimi „siostrami" w bruku Szerokiej; pruskie miasto bez pary = utracony poseł. → naturalny powód, by „czytać bruk".
- **Pokrycie wiki:** Hanza + sojusze handlowe Torunia (`handel-hanza.js`), Związek Pruski i miasta-sygnatariusze (`zwiazek-pruski.js`), emblematy z Dworu Artusa (`aleja-gmerkow.js`). Patrz meta-kartka `lore/meta-kartki/miasto-5-Z6.md`.

## Karta-rekwizyt (do produkcji)

- **Funkcja:** nazwać graczowi 5 nadawców + 4 potwierdzenia (Hamburg/Kolonia/Lubeka×2) + regułę podobieństwa. Może nieść drobne rysunki herbów (pomoc), ale realne parowanie dzieje się przy bruku.
- **Styl:** pergamin/dispatch Rady, A5, nazwy w gotyku.
- ✅ **Nazwy = formy z bruku [decyzja Oskara 2026-06-03]:** materiały gracza używają nazw **tak jak na bruku** (formy Piotra): **Gdańsk, Królewiec, Elbląg, Chełmno, Toruń** / **Hamburg, Kolonia, Lubeka**. Koperta (mimo EN) niesie te polskie nazwy własne — gracz dopasowuje wprost do tabliczek, brak mostu EN↔PL. (Odrzucono formy hanzeatyckie Danzig/Königsberg/… by uniknąć gapu nazwa↔kamień.)

## Co weryfikuje?

- Mieszczanie: znajomość hanzeatyckich sojuszy Torunia (wiarygodność kurierska).
- **Nie jest twardym filtrem klas** — mechanika rozwiązywalna przez każdego (czyta bruk, paruje herby); dostępna tylko mieszczanom (krzyżacy mają Z10), ale nie ujawnia tajemnicy klasowej.

## Konsekwencja po rozwiązaniu

- Grupa raportuje MG **nazwę miasta-nadawcy, którego poselstwo nie dotarło**.
- MG sprawdza wg klucza i wydaje **wymienialny klucz/szyfrogram do finału Z7** (ten sam co Z4/Z5).

## Otwarte pytania

1. ✅ **Klucz: które miasto „nie dotarło"?** — ROZSTRZYGNIĘTE [Oskar/Piotr 2026-06-03]: **Chełmno** (patrz §Klucz MG).
2. ✅ **Który odcinek?** — ROZSTRZYGNIĘTE: **Szeroka** (wymuszone doborem miast; wszystkie 8 są w bruku Szerokiej).
3. ✅ **Które herby faktycznie są?** — ustalone researchem (lista 22 Szeroka w §Research); zostaje spot-check (ubytki płyt, czytelność).
4. **Karta** — same nazwy czy rysunki herbów? Rysunki autentyczniejsze (i pomagają parować), ale wymagają nakładu graficznego.
5. ✅ **Most nazw EN↔bruk** — ROZSTRZYGNIĘTE [Oskar 2026-06-03]: materiały gracza używają nazw z bruku (polskich); brak mostu (patrz §Karta-rekwizyt).
6. 🔒 **Kolizja przestrzenna z Z10** — Z6 (TR) i Z10 (KZ, Biedronka = Szeroka 22) na tej samej ulicy. Różne frakcje/czas → prawdopodobnie OK, ale do świadomej decyzji Oskara.

## Co autor może zrobić sam vs gdzie pomocy

- **Piotr**: potwierdzić klucz (parowania + miasto „nie dotarło") — zna intencję; spot-check tarcz w bruku Szerokiej.
- **Z pomocą agenta**: redakcja karty-rekwizytu, most nazw EN↔bruk, dobór plotek/atmosfery (zrobione w kopercie), warianty stylistyczne.
