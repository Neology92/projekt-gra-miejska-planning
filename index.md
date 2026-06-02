# index — mapa projektu `projekt_gra-miejska-planning`

> **Co to:** planowanie gry terenowej *Toruń 1454* (bunt mieszczan, 6 II 1454). Indeks „gdzie czego szukać" dla rotujących agentów. Pełny kontekst + zasady pracy: **`CLAUDE.md`**.

## Gdzie jest prawda (źródła statusu i decyzji)

| Czego szukasz | Plik |
|---|---|
| Stan / co gotowe / następny krok | `todo/dashboard.md` |
| Decyzje (otwarte + rozstrzygnięte) | `todo/otwarte-pytania.md` |
| Kolejność faz A–E | `todo/roadmap.md` |
| Fakty historyczne (źródło prawdy) | wiki-siostra `B:/Dev/projekt_gra-miejska/` (patrz `CLAUDE.md`) |

## Warstwy projektu (planning → prototype → MVP)

- **Pliki planistyczne (`.md`)** = po polsku, „jak gra działa". Mieszkają w `concept/`, `puzzles/`, `mechanics/`, `lore/`, `todo/`.
- **`prototype/`** = generowane artefakty **jednej konkretnej ścieżki** (1 kolor, frakcja miasto, opcja Z4) — materiały gracza po **angielsku** (druk, rekwizyty, skrypty NPC, mapy).
- **`mvp/`** *(jeszcze nie istnieje)* = skalowanie do 10 grup × 2 frakcje × zestawy A/B/C.

## Legenda folderów

| Folder | Co tam jest |
|---|---|
| `concept/` | *co się dzieje* w grze — fazy, klasy, finał, tor krzyżaków |
| `puzzles/` | *jak gracze rozwiązują* etapy — zagadki Z1–Z11, mapy/ścieżki Z1 |
| **`envelopes/`** | **SPEC + MANIFEST kopert gracza** (warstwa montażowa NAD zagadkami; źródło prawdy składania wydruku) |
| `mechanics/` | *jak gra działa logistycznie* — koperty (MG), grupy/klasy/kolory, mapy/szyfrownik, finałowe liczenie |
| `lore/` | *co opowiadamy graczom* — postacie, miejsca, plotki, fakty-vs-fabuła, surowiec kartek meta (`lore/meta-kartki/`) |
| `prototype/` | artefakty do druku ścieżki prototypu (EN) — koperty (spec w `envelopes/`), kartki meta (`meta-cards/`), mapy, skrypty aktorów, arkusze MG |
| `tools/` | generatory (np. `map-gen/`) |
| `todo/` | dashboard, roadmap, otwarte pytania, archiwum |

## Koperty gracza — gdzie co (najczęstsze źródło pomyłek agentów)

Trzy foldery trzymają **lustrzane** pliki o tej samej nazwie `[frakcja]-[nr]-[Zx]` (**join-key**):

| Folder | Warstwa | Język |
|---|---|---|
| `envelopes/` | **SPEC + MANIFEST + gotowy tekst koperty** (źródło prawdy montażu) | meta PL / tekst EN |
| `prototype/meta-cards/` | kartka „od autora" dołączana do koperty (player-facing) | EN |
| `lore/meta-kartki/` | surowiec do kartki meta (źródła, cytaty wiki) | PL/EN |

- **Reguła numeracji:** `nr` = **kolejność otwierania** koperty na ścieżce frakcji (nie etap MG). Czytaj `envelopes/README.md` (trzy osie rozbieżności + manifest).
- **Manifest ścieżki prototypu:** `prototype/envelope-map.md` (mapowanie stare `k*` → nowe `envelopes/*`).
- **Konwencja głosu kopert** (kursywa=głowa / roman=słowa świata, wręczenie przez NPC = meta): `mechanics/koperty-mg.md`.

## Konwencja utrzymania (żeby tracking się „działał")

- Po ukończeniu jednostki (koperta/zagadka/rekwizyt) → zaktualizuj `todo/dashboard.md` w tym samym commicie.
- Nie pisz logów „było→jest" w żywych plikach — `git log` jest changelogiem; `todo/archive/` trzyma odrzucone projekty.
- Decyzje → `todo/otwarte-pytania.md` jako „**temat** — ROZSTRZYGNIĘTE [data]: …".
