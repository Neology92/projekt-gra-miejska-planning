# index — mapa projektu `projekt_gra-miejska-planning`

> **Co to:** planowanie gry terenowej *Toruń 1454* (bunt mieszczan, 6 II 1454). Mapa „gdzie czego szukać" + głęboki detal kopert dla rotujących agentów. **Pełny kontekst, zasady pracy, struktura folderów i konwencja utrzymania → `CLAUDE.md`** (auto-ładowany co sesję; tu się nie powtarza).

## Gdzie jest prawda (źródła statusu i decyzji)

| Czego szukasz | Plik |
|---|---|
| Stan / co gotowe / następny krok | `todo/dashboard.md` |
| Decyzje (otwarte + rozstrzygnięte) | `todo/otwarte-pytania.md` |
| Kolejność faz A–E | `todo/roadmap.md` |
| Struktura folderów + zasady + faktografia | `CLAUDE.md` |
| Fakty historyczne (źródło prawdy) | wiki-siostra `B:/Dev/projekt_gra-miejska/` (patrz `CLAUDE.md`) |

## Materiały do gry — język wg adresata

- **Gracz → EN**: `envelopes/`, `materials/props/`, mapy, karty deszyfrujące.
- **Aktorzy + MG → PL**: `materials/actors/`, `materials/ops/` (wyjątek: cytaty treści zagadek / odpowiedzi gracza = EN).
- Pełna reguła → `CLAUDE.md` §Workflow → Język materiałów.

## Koperty gracza — gdzie co (najczęstsze źródło pomyłek agentów)

Trzy foldery trzymają **lustrzane** pliki o tej samej nazwie `[frakcja]-[nr]-[Zx]` (**join-key**):

| Folder | Warstwa | Język |
|---|---|---|
| `envelopes/` | **SPEC + MANIFEST + gotowy tekst koperty** (źródło prawdy montażu) | meta PL / tekst EN |
| `prototype/meta-cards/` | kartka „od autora" dołączana do koperty (player-facing) | EN |
| `lore/meta-kartki/` | surowiec do kartki meta (źródła, cytaty wiki) | PL/EN |

- **Reguła numeracji:** `nr` = **kolejność otwierania** koperty na ścieżce frakcji (nie etap MG). Czytaj `envelopes/README.md` (trzy osie rozbieżności + manifest).
- **Manifest ścieżki prototypu:** `todo/archive/envelope-map.md` (mapowanie stare `k*` → nowe `envelopes/*`).
- **Konwencja głosu kopert** (kursywa=głowa / roman=słowa świata, wręczenie przez NPC = meta): `mechanics/koperty-mg.md`.

> Konwencja utrzymania trackingu (kiedy aktualizować dashboard, gdzie zapisywać decyzje) → `CLAUDE.md` §Konwencja utrzymania.
