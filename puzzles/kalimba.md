# Zagadka kalimbowa

**Status**: 🟢 **rdzeń zamknięty** [2026-06-01]. Kalimba = rekwizyt dwóch zagadek lustrzanych:
- **Z4 — melodia flisaka** (tor mieszczan, opcjonalna, 1 grupa).
- **Z8 — melodia zakonu** (tor krzyżaków, opcjonalna, 2 grupy).

Razem 3 grupy → wystarczy 1-2 egz. kalimby (grupy rozłożone w czasie).

> **Decyzja anachronizmu — ROZSTRZYGNIĘTA [2026-06-01]:** rekwizyt fizyczny = **kalimba** (zostaje, działa najlepiej mechanicznie), ale **opis fabularny w kopercie nazywa instrument historyczny** (zamiennik z XV w.). Czyli: gracz trzyma kalimbę, ale narracja mówi np. o piszczałce flisackiej / psałterionie. Anachronizm zostaje świadomie ukryty pod warstwą fabularną. Dobór konkretnego instrumentu narracyjnego → patrz `## Instrument narracyjny`.
>
> **Rekwizyt FIZYCZNY gotowy [2026-06-01]:** Oskar zakleił nieużywane pręciki i oznaczył pierwszy dźwięk melodii. ✅

> **Kalimba to PROSTA, OSOBNA zagadka** [doprecyzowanie 2026-06-01]: odtwórz melodię ze słuchu → spisz liczby z zagranych dźwięków → podaj MG. **Żadnego szyfru ani koła deszyfrującego tutaj.** Po oddaniu rozwiązania MG wydaje szyfrogram do finału (Z7/Z11) — ale szyfr/koło to element **finału**, nie kalimby. Patrz `concept/04-faza-3-final.md`, `puzzles/z7-szyfr-spec.md`.

## Pomysł autora (cytat skondensowany)

> Drużyna musi powtórzyć na kalimbie dany motyw muzyczny i spisać liczby, które wychodzą z zagranych dźwięków (nuty oznaczone liczbami na kalimbie). To będzie kod, który podać MG.

## Mechanika

1. Kalimba (instrument lamellofoniczny, kciukowy) z **dźwiękami oznaczonymi liczbami**: C:1, D:2, E:3, F:4, G:5, A:6, … (mapowanie nuta→liczba naniesione na pręciki).
2. Gracze **odtwarzają melodię ze słuchu** (nagranie / zagrane przez MG).
3. Grając, czytają liczby przypisane do trafionych dźwięków.
4. **Spisują liczby** → kod liczbowy (np. Z8 = `621454`).
5. **Podają kod MG** = rozwiązanie zagadki. MG w zamian wydaje szyfrogram do finału (patrz model 2B→finał).

**TODO rekwizyt** (z briefu autora 2026-06-01) — ✅ WYKONANE przez Oskara:
- [x] **Oznaczyć pierwszy dźwięk** melodii (żeby grupa wiedziała, skąd zacząć).
- [x] **Zakleić dźwięki nieużywane** w grze (ułatwienie — zostają tylko pręciki potrzebne do melodii).

## Instrument narracyjny (zamiennik historyczny w kopercie)

Rekwizyt = kalimba, ale **koperta nazywa instrument z epoki**. Dobór konkretnego = **decyzja Oskara** (model autorstwa: „wybór instrumentu" jest po stronie autora). Propozycje per tor — różnicują flavour obu lustrzanych zagadek:

| Tor | Instrument narracyjny — propozycje | Klimat |
|---|---|---|
| **Z4 — flisak (mieszczanie)** | piszczałka / fujarka flisacka, fletnia (instrument ludowy, „rzeczny") | swojski, wiślany, mieszczański |
| **Z8 — zakon (krzyżacy)** | psałterion (gęśle), dzwonki/cymbałki klasztorne, chime bars | sakralny, ezoteryczny, „zimny" |

- Mechanika numerowanych pręcików/nut zostaje bez zmian — zmienia się tylko **nazwa i opis** w tekście koperty.
- Anachronizm kalimby zostaje świadomie schowany; meta-wyjaśnienie („to była kalimba") trafi do osobnej **kartki autorskiej** dołączanej do koperty — patrz `lore/meta-kartki-autorskie.md` (zadanie na PÓŹNIEJ, po wygenerowaniu wszystkich kopert).

## Kiedy w grze? — ROZSTRZYGNIĘTE

- **Z4 — melodia flisaka** (mieszczanie, opcjonalna).
- **Z8 — melodia zakonu** (krzyżacy, opcjonalna). Wariant D (kalimba jako ezoteryczny element zakonu) ładnie pasuje tu fabularnie.

## Melodie — co grają (per tor)

> **DECYZJA [2026-06-01]: Z4 = ta sama melodia i ten sam kod co Z8 (`621454`).** Nie rozdrabniamy — identyczna mechanika, identyczne liczby, **różni tylko oprawa fabularna** (flisak vs zakon) + instrument narracyjny (patrz wyżej). Jedno nagranie/jedna melodia obsługuje oba tory.

| Zagadka | Tor | Melodia → kod | Znaczenie / oprawa |
|---|---|---|---|
| **Z8 — melodia zakonu** | krzyżacy | **6 · 2 · 1 · 4 · 5 · 4** = `621454` | **6.2.1454** = 6 lutego 1454, data buntu toruńskiego (data własnej klęski Zakonu) |
| **Z4 — melodia flisaka** | mieszczanie | **6 · 2 · 1 · 4 · 5 · 4** = `621454` | ta sama melodia/kod; inna oprawa — flisak nuci datę zrywu miasta |

- Kod (liczby) = **rozwiązanie zagadki**, podawane MG. Nic więcej kalimba nie robi.
- Po oddaniu kodu MG wydaje **szyfrogram do finału** (Z7 mieszczanie / Z11 krzyżacy). Szyfr, klucz (motto) i koło deszyfrujące — patrz `concept/04-faza-3-final.md`, `puzzles/z7-szyfr-spec.md`. **Tu, w kalimbie, ich nie ma.**

## Otwarte pytania

1. ~~Czy używać kalimby~~ ROZSTRZYGNIĘTE: **tak** (Z4 + Z8).
2. ~~Gdzie~~ ROZSTRZYGNIĘTE: Z4 (melodia flisaka) + Z8 (melodia zakonu).
3. ~~Czy zmieniamy na historyczny instrument~~ ROZSTRZYGNIĘTE [2026-06-01]: rekwizyt = kalimba, **opis fabularny = instrument historyczny**; anachronizm schowany, meta-wyjaśnienie w kartce autorskiej.
4. ~~Treść melodii Z4 (flisak)~~ ROZSTRZYGNIĘTE [2026-06-01]: **= Z8 (`621454`)**, różni tylko oprawa.
5. **Który instrument narracyjny per tor** (z propozycji w `## Instrument narracyjny`) — do wyboru Oskara, gdy będziemy pisać teksty kopert Z4/Z8.

## Co autor może zrobić sam vs gdzie pomocy

- **Sam**: ~~decyzja czy używamy~~ ✅, wybór instrumentu narracyjnego (pkt 5), casting muzyczny.
- **Z pomocą agenta**: research instrumentów XV-wiecznych do oprawy (zrobione — propozycje w tabeli), draft tekstów kopert Z4/Z8 gdy ruszymy z oprawą.
