# Z1 — Szlak symboli: spec mapy i zależności (ŹRÓDŁO KANONICZNE)

> **To jest jedyne źródło prawdy dla generowania artefaktów Z1.** Mapa (`prototype/mapa-z1-podglad.html`), karta deszyfrownika, treść startu w K1 i legenda **muszą zgadzać się z tym plikiem**. Gdy coś zmieniasz (miejsce, glif, detal, kolejność) — zmieniasz **tutaj**, a potem propagujesz do mapy/deszyfrownika/K1.
>
> Rationale projektowy, reguły tras, kalkulacja czasu → `puzzles/szlak-symboli.md`. Cechy/piktogramy miejsc (rosnący katalog) → `puzzles/ikonografia-miejsc.md`.

> ⚠️ **TRASA ZMIENIONA [2026-06-02, Oskar] — Wariant A. TABELA NIŻEJ WYMAGA REPROPAGACJI.**
> Nowy łańcuch (4 kroki): **Piernikarka → osiołek → Krzywa Wieża → Kopernik → KONIEC (MG)** (rationale: `szlak-symboli.md §Trasa prototypu Wariant A`).
> **Zamiana ról:** *Pod Gwiazdą [⭐]* wychodzi z łańcucha → **dystraktor**; *Krzywa Wieża [🗼]* wchodzi do łańcucha (była dystraktorem ⬡). Nowe 5 dystraktorów: Pod Gwiazdą, Filuś, Łuk Cezara, Przekupka, Dwór Artusa.
> **DO ZROBIENIA (koordynuj z pracą nad glifami/mapą — toczy się równolegle):** przepiąć w tabeli 9-znaków przypisania glif↔detal↔miejsce dla łańcucha △○□◇, przebudować pętlę dystraktorów (rozłączną, 5 miejsc), zaktualizować deszyfrownik + ASCII łańcucha + raport MG. **Tabela poniżej = jeszcze STARY łańcuch** — nie traktuj jej jako prawdy, dopóki nie zsynchronizowana z tym banerem.
> Uboczny efekt: kolizja ☆/⭐ zmienia kontekst (⭐ jest teraz detalem dystraktora Pod Gwiazdą) — uwzględnij przy rozwiązywaniu kolizji glifów.

## Dwie warstwy znaków

1. **Glify (mapa)** — 9 prostych, **abstrakcyjnych** znaków, które mówią TYLKO *gdzie iść* i **nie zdradzają**, co tam jest. Na mapie nieodróżnialne (4 z łańcucha + 5 dystraktorów). Finalnie można je zastąpić **gmerkami** (toruńskie znaki kupieckie — zob. Aleja Gmerków).
   - Zestaw prototypowy: `△ trójkąt · ○ okrąg · □ kwadrat · ◇ romb · ⬡ heksagon · ☆ gwiazda · ✕ iks · ∿ fala · ⊙ tarcza`
2. **Piktogramy detali (deszyfrownik)** — **obrazkowe** symbole *co wypatrzeć* w terenie (np. 🎩 = melonik pieska Filusia). Grupa sama łączy piktogram z tym, co widzi — deszyfrownik **nie podaje nazw miejsc** (więcej główkowania).

Obie warstwy są **arbitralne** — można podmienić, ale podmiana = propagacja **wszędzie** (mapa + deszyfrownik + legenda + K1).

## Łańcuch (4 kroki)

```
START (K1) → △ glif → [detal 🍪] → ○ glif → [detal ⭐] → □ glif → [detal 🫏] → ◇ glif → [detal 🌐] → KONIEC (MG)
              Piernikarka            Pod Gwiazdą           osiołek               Kopernik
```

Mechanika kroku: idź do **glifu** na mapie → w terenie wypatrz **detal** pasujący do piktogramu w deszyfrowniku → piktogram wskazuje **następny glif**. Raport dla MG = **4 rozpoznane miejsca w kolejności**: `Piernikarka → Pod Gwiazdą → osiołek → Kopernik`.

## Tabela kanoniczna — 9 znaków

| Glif (mapa) | Detal (deszyfrownik) | Pozycja (schemat — zweryfikuj w terenie) | Miejsce / obiekt | Haczyk (gdzie szukać detalu) | Następny glif | Rola |
|---|---|---|---|---|---|---|
| △ trójkąt | 🍪 piernik | Rynek Nowomiejski | **Pomnik Piernikarki** | kosz pierników (brązowa kobieta, piesek szarpie suknię) | ○ okrąg | łańcuch 1 — **START (z K1)** |
| ○ okrąg | ⭐ gwiazda | Rynek Staromiejski 35 | **Kamienica Pod Gwiazdą** | pozłacana gwiazda na szczycie żółtej barokowej fasady (data 1697) | □ kwadrat | łańcuch 2 |
| □ kwadrat | 🫏 osioł | Rynek / zbieg z ul. Żeglarską | **osiołek** (pręgierz) | żelazny grzbiet osiołka-pręgierza | ◇ romb | łańcuch 3 |
| ◇ romb | 🌐 astrolabium | Rynek Staromiejski (przy Ratuszu) | **Pomnik Kopernika** | **astrolabium / sfera armilarna w dłoni posągu — FAKT [autor, 2026-06-01], must-have** (wiki #1 wymienia tylko wąsik i delfina, ale posąg trzyma instrument) | **KONIEC → MG** | łańcuch 4 |
| ⬡ heksagon | 🗼 wieża | ul. Pod Krzywą Wieżą (SW, mury) | **Krzywa Wieża** | przechylona baszta murów miejskich | ☆ gwiazda | fałszywy trop ↻ |
| ☆ gwiazda | 🎩 melonik | wylot ul. Chełmińskiej (NW Rynku) | **pies Filuś** | melonik prof. Filutka w pyszczku kundelka | ✕ iks | fałszywy trop ↻ |
| ✕ iks | 🎺 trąbka | ul. Piekary 37 (W) | **Łuk Cezara** | Michał Archanioł z trąbką na attyce (+ szczątek torów pod sklepieniem) | ∿ fala | fałszywy trop ↻ |
| ∿ fala | ⚖️ waga | Rynek Nowomiejski (przy Modrym Fartuchu) | **Pomnik Przekupki** | waga u stóp siedzącej przekupki (gęś, kosz jaj) | ⊙ tarcza | fałszywy trop ↻ |
| ⊙ tarcza | 🛡️ herb | Rynek Staromiejski 6 (naprzeciw Ratusza) | **Dwór Artusa** | herb Torunia na szczycie czerwonej fasady (daty 1311 / 1891) | ⬡ heksagon | fałszywy trop ↻ |

> **Fałszywe tropy = zamknięta pętla** ⬡→☆→✕→∿→⊙→⬡, **rozłączna** z łańcuchem △→○→□→◇. Dzięki temu (a) deszyfrownik wygląda jednolicie (każdy wiersz prowadzi do glifu — nie da się wytypować łańcucha z karty), (b) zbłąkana grupa krąży wśród dystraktorów, **nie zalicza przypadkiem finału** i nie wpada na łańcuch. Koszt: samokorekta nie jest natychmiastowa — patrz „Przeciek / samokorekta" niżej.

Wszystkie 9 miejsc: 24/7 z ulicy. Haczyki zweryfikowane z wiki (`przewodnik-miejsc-gry.js`).

> ⚠ **Kolizja warstw:** glif mapy „☆ gwiazda" (miejsce Filusia) i piktogram detalu „⭐ gwiazda" (Pod Gwiazdą) to dwa różne znaki w dwóch różnych warstwach. Jeśli przy generacji finalnej będzie mylić — podmień jeden z nich (np. glif Filusia na inny kształt).

## Granica spoilera — kto co widzi

| Artefakt | Widzi GRACZ | Tylko AUTOR/MG |
|---|---|---|
| **Mapa** | 9 glifów na pozycjach, **bez nazw, bez detali** | — |
| **Deszyfrownik** | 9 wierszy: **piktogram detalu → następny glif** (każdy prowadzi dalej; 1 wiersz kończy = KONIEC). Bez nazw miejsc, bez tego, które są łańcuchem. | — |
| **Legenda** | 9 pustych pól (glif → ____) | — |
| **K1** | start = △ + zasada (glif → detal → następny glif) + raport = 4 miejsca w kolejności | — |
| **Klucz glif↔detal↔miejsce** (tabela wyżej) | NIE | TAK |
| **Klucz odpowiedzi** (4 miejsca w kolejności) | NIE | TAK |

## Deszyfrownik gracza — zawartość

9 wierszy, każdy: **piktogram detalu → następny glif**. **Brak „ślepych zaułków"** [decyzja 2026-05-31] — dystraktory też wskazują prawdziwy glif z mapy (fałszywy trop), żeby karta była jednolita i nie zdradzała łańcucha. Jedyny wyróżnik to wiersz kończący (KONIEC). **Bez nazw miejsc, bez opisów** — grupa łączy piktogram z obserwacją. **Kolejność wierszy wymieszana.**

```
🗼 → ☆ gwiazda        🍪 → ○ okrąg          🛡️ → ⬡ heksagon
🫏 → ◇ romb            ⚖️ → ⊙ tarcza         ⭐ → □ kwadrat
🎩 → ✕ iks             🌐 → KONIEC → MG       🎺 → ∿ fala
```

(Na karcie gracza glify pokazujemy samym znakiem, bez nazwy — nazwy tu tylko dla czytelności.)

## Legenda gracza (puste, 9 glifów)

```
△ trójkąt = ______   ⬡ heksagon = ______   □ kwadrat = ______
○ okrąg   = ______   ☆ gwiazda  = ______   ✕ iks     = ______
◇ romb    = ______   ∿ fala     = ______   ⊙ tarcza  = ______
```

Na swojej trasie grupa wypełni 4; reszta pusta (lub wypełniona przy błądzeniu).

## Odpowiedź dla MG

**(a) 4 miejsca w kolejności:** `Piernikarka → Pod Gwiazdą → osiołek → Kopernik`. MG weryfikuje wg wzorca (`mechanics/koperty-mg.md`) i wydaje K2.

## Przeciek / samokorekta — ROZSTRZYGNIĘTE [2026-05-31]: opcja B (fałszywe tropy)

Wszystkie 9 wierszy deszyfrownika wskazują **prawdziwy glif z mapy** → **karta jest jednolita** i nie zdradza, które wiersze należą do łańcucha (zbiór 4 nie wycieka). Dodatkowo format „detal→glif" (nie „glif→miejsce") + piktogramy zamiast nazw sprawiają, że z samej karty nie da się odtworzyć trasy bez chodzenia.

**Koszt (świadomy):** brak natychmiastowej samokorekty. Zamiast „ślepego zaułka" błąd wpuszcza grupę w **pętlę dystraktorów** (rozłączną z łańcuchem). Samokorekta działa pośrednio:
- łańcuch ma **dokładnie 4 kroki** i kończy się przy kontakcie (KONIEC) — brak KONIEC po 4 krokach = błąd;
- pętla **wraca do już odwiedzonego znaku** (wpisanego w legendzie) → „byliśmy tu";
- backstop: **hint MG** (`mechanics/koperty-mg.md`).

(Wcześniej rozważano opcję A — dystraktory jako „ślepe zaułki": natychmiastowa samokorekta, ale karta zdradzała zbiór 4 wierszy łańcucha. Oskar wybrał **B** — priorytet: nieczytelność karty bez chodzenia.)

## Checklista spójności (przed finalną generacją)

- [ ] Mapa pokazuje **dokładnie 9 glifów** z tabeli, na właściwych pozycjach, **bez nazw i bez detali**, markery nieodróżnialne.
- [ ] Deszyfrownik ma **9 wierszy** = 9 piktogramów detali; **wszystkie wskazują glif z mapy**. 4 to łańcuch (△→○→□→◇→KONIEC), 5 to fałszywe tropy = **pętla** ⬡→☆→✕→∿→⊙→⬡. **Bez nazw, bez „ślepych zaułków".**
- [ ] Każdy „następny glif" w deszyfrowniku **istnieje na mapie**; pętla dystraktorów jest **rozłączna** z łańcuchem (nie wpada na △/○/□/◇).
- [ ] Każdy detal jest **realnie wypatrzalny** w danym miejscu (haczyk w kolumnie tabeli).
- [ ] K1: start = **△**; zasada glif→detal→glif; raport = **4 miejsca w kolejności**.
- [ ] Legenda = **9 glifów** (puste).
- [ ] Klucz (glif↔detal↔miejsce) i klucz odpowiedzi **nie trafiają** na materiały gracza.
- [ ] Podmiana glifu/detalu/miejsca propagowana do **wszystkich** artefaktów.

## Otwarte (do akceptacji Oskara)

- **Dobór 4 miejsc + 5 dystraktorów** — propozycja powyżej, do podmiany (Twój wybór). Świadomie pominięto Fontannę Flisaka (motyw flisaka → Z4).
- **Zestaw glifów** — geometryczny placeholder; rozważ gmerki (klimat XV w.).
- **Dobór piktogramów detali** — propozycja; sprawdź, czy każdy jest jednoznaczny w terenie i nie myli z innym miejscem. Rozwiąż kolizję ☆/⭐ (wyżej).
- **Pozycje na mapie** — schematyczne; zweryfikuj dystanse/widoczność podczas dry-runu.
