# Pass spójności — ścieżka prototypu (tor miasta, Z3+Z4)

> Weryfikacja [2026-06-02]: czy każdy etap wydaje klucz, którego potrzebuje następny. Zakres = pełny przechodni łańcuch jednej grupy mieszczan. Źródło prawdy treści: `envelopes/*`, `prototype/*-draft.md`, `puzzles/*`.

## Łańcuch klucz-wyjściowy → klucz-wejściowy

| # | Etap (koperta) | Co gracz produkuje | Kto/co tego wymaga | Status |
|---|---|---|---|---|
| 1 | Z1 (`k1`) | 4 miejsca w kolejności → raport MG | MG weryfikuje → wydaje `k2` | ✅ ramka MG obecna |
| 2 | Z2 (`k2` + slip R.) | dedukcja → Jordan / Piccolo / chochla | Jordan-aktor: parol „imię + chochla" | ✅ zsynchronizowane |
| 3 | F2A (Jordan → `k3`) | poprawny parol + kolor opaski | Jordan wręcza `k3` | ✅ STEP 1 zgadza się ze slipem R. |
| 4 | Z3 (`k3` → Albrecht) | zbliżenie do Albrechta (zwiad) | Albrecht wręcza `kZ3b` (meta) | ✅ |
| 5 | Z3b (`kZ3b`) | **kradzież pergaminu Z3** → raport MG | MG wydaje opcjonalną (`kZ4`) | ✅ ramka MG; pergamin niesiony dalej |
| 6 | Z4 (`kZ4`) | melodia → kod **621454** → raport MG | MG wydaje `k8` (przechwycony list) | ✅ ramka MG; kod zgodny z `kalimba.md` |
| 7 | Z7 (`k8` przechwycony list) | porównanie nagłówków → odszyfrowanie → „HANS VON BAYSEN IS JORDAN THE COOK" | MG weryfikuje → wydaje `kF` | ✅ ramka MG; **wymaga pergaminu Z3 z etapu 5** |
| 8 | Finał (`kF`) | wybór strony + oddanie listu | — (koniec) | ✅ bez ramki (zgodne ze spec) |

## Zazębienia krytyczne — zweryfikowane

1. **Z2 → F2A (hasło).** Slip R. (`k2-slip`): *„speak his name, and tell him what he bought this morning"*. Jordan-actor STEP 1: rozpoznaje *„Jordan + kupiłeś dziś rano chochlę (a ladle)"*. Zagadka K2 daje jednoznacznie Jordan=ladle (`droga-do-jordana.md` §weryfikacja: rozwiązanie unikalne, izomorfizm z fundamentem zachowany). **Spójne.**
2. **Z3b → Z7 (klucz szyfru).** Pergamin Z3 nosi jawne motto `HELFEN, HEILEN UND WEHREN!`; `k8` nosi to samo motto zaszyfrowane `OLSMLU, OLPSLU BUK DLOYLU!`. Round-trip +7 sprawdzony: H→O, E→L, L→S, F→M, E→L, N→U. **Zgodne.** Pergamin niesiony od etapu 5 → dostępny w etapie 7. Kradzież obligatoryjna (`z7-szyfr-spec.md §7`) → brak twardego stopu.
3. **Splice finałowy (3 wątki).** „chairman" z K2 (trop celu) + wpis #1 pergaminu „Hans von Baysen — *they call him chairman*" + plaintext Z7. Wszystkie trzy nośniki obecne w treści. **Spójne.**
4. **Kod kalimby.** `kZ4` → 6 liczb → `621454`; `kalimba.md` potwierdza melodię→kod. **Zgodne.**
5. **Ramki MG (trzeci rejestr).** Obecne w `k1`, `kZ3b`, `kZ4`, `k8` (etapy kończące się raportem do MG). Brak w `k2` (→ Jordan), `k3` (→ Albrecht), `kF` (finał). **Zgodne z `koperty-mg.md §Trzeci rejestr`.**

## ⚠ Otwarte zależności (nie błędy spójności narracyjnej)

- **Glify nawigacyjne — niefinalne.** `k1` ma startowy glif `△` = placeholder; `k2` ma `⟨mark⟩ ×3` (1 prawdziwy = Piccolo, 2 zmyślone = Młyn/Kuźnia). Oba zależą od **wygenerowanej mapy Z1** (`public/maps/`) i przypisania glifu punktu Piccolo. Dopóki mapa Z1 nie domknie deszyfrownika, te symbole są zastępcze. Sprzęga z pendingiem mapy (`droga-do-jordana.md §D`, dashboard „Z1 dry-run R2").
- **Zasianie mechaniki glifów w K2.** `droga-do-jordana.md §D` wymaga zdania typu „jeden z tych znaków odnajdziesz na mapie — tam czeka twój człowiek". Obecny `k2` ma: *„Only one of those three marks is on your map. That is the door you go to."* — **pokryte.**

## Drobne flagi do decyzji Oskara (nie blokujące)

- **`k3` STEP 4 Jordana — „Don't open it out here".** Wypowiedź NPC w świecie (ostrożny kucharz) vs bliskość wycinanego meta („open once clear"). Już oznaczone w `jordan-actor-script-draft.md §Rewizja pkt 2`. Do rozstrzygnięcia przy review aktorskim.
- **Rejestr typograficzny dispatcha Z7 / pergaminu.** `.lead`/`.seal` renderują się kursywą, choć konceptualnie to „słowa świata" (roman). Dokumenty in-world render-zweryfikowane wcześniej; rama narracyjna v2 (`.narration`) dołożona nad/pod. Wizualnie spójne (oba italic ink-soft), ale jeśli Oskar chce twardego rozdziału rejestrów — drobny pass CSS. **Nie blokuje.**

## Werdykt

**Łańcuch prototypu jest spójny end-to-end.** Każdy etap produkuje dokładnie to, czego wymaga następny; żaden klucz nie wisi w próżni i nie ma twardego stopu. Jedyne niedomknięcia to **glify nawigacyjne** (zależne od mapy Z1, znane, śledzone) — placeholdery, nie sprzeczności. Gotowe do dry-runu na papierze po: (a) domknięciu mapy Z1 z glifem Piccolo, (b) review treści przez Oskara/Piotra.
