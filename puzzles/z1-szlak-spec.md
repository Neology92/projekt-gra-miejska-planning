# Z1 — Szlak symboli: spec mapy i zależności (ŹRÓDŁO KANONICZNE)

> **To jest jedyne źródło prawdy dla generowania artefaktów Z1.** Mapa (`prototype/mapa-z1-podglad.html`), karta deszyfrownika, treść startu w K1 i legenda **muszą zgadzać się z tym plikiem**. Gdy coś zmieniasz (miejsce, glif, detal, kolejność) — zmieniasz **tutaj**, a potem propagujesz do mapy/deszyfrownika/K1.
>
> Rationale projektowy, reguły tras, kalkulacja czasu → `puzzles/szlak-symboli.md`.

## Dwie warstwy znaków

1. **Glify (mapa)** — 9 prostych, **abstrakcyjnych** znaków, które mówią TYLKO *gdzie iść* i **nie zdradzają**, co tam jest. Na mapie nieodróżnialne (4 z łańcucha + 5 dystraktorów). Finalnie można je zastąpić **gmerkami** (toruńskie znaki kupieckie — zob. Aleja Gmerków).
   - Zestaw prototypowy: `△ trójkąt · ○ okrąg · □ kwadrat · ◇ romb · ⬡ heksagon · ☆ gwiazda · ✕ iks · ∿ fala · ⊙ tarcza`
2. **Piktogramy detali (deszyfrownik)** — **obrazkowe** symbole *co wypatrzeć* w terenie (np. 🎩 = melonik pieska Filusia). Grupa sama łączy piktogram z tym, co widzi — deszyfrownik **nie podaje nazw miejsc** (więcej główkowania).

Obie warstwy są **arbitralne** — można podmienić, ale podmiana = propagacja **wszędzie** (mapa + deszyfrownik + legenda + K1).

## Łańcuch (4 kroki)

```
START (K1) → △ glif → [detal 🍪] → ○ glif → [detal ⭐] → □ glif → [detal 🫏] → ◇ glif → [detal 🐬] → KONIEC (MG)
              Piernikarka            Pod Gwiazdą           osiołek               Kopernik
```

Mechanika kroku: idź do **glifu** na mapie → w terenie wypatrz **detal** pasujący do piktogramu w deszyfrowniku → piktogram wskazuje **następny glif**. Raport dla MG = **4 rozpoznane miejsca w kolejności**: `Piernikarka → Pod Gwiazdą → osiołek → Kopernik`.

## Tabela kanoniczna — 9 znaków

| Glif (mapa) | Detal (deszyfrownik) | Pozycja (schemat — zweryfikuj w terenie) | Miejsce / obiekt | Haczyk (gdzie szukać detalu) | Następny glif | Rola |
|---|---|---|---|---|---|---|
| △ trójkąt | 🍪 piernik | Rynek Nowomiejski | **Pomnik Piernikarki** | kosz pierników (brązowa kobieta, piesek szarpie suknię) | ○ okrąg | łańcuch 1 — **START (z K1)** |
| ○ okrąg | ⭐ gwiazda | Rynek Staromiejski 35 | **Kamienica Pod Gwiazdą** | pozłacana gwiazda na szczycie żółtej barokowej fasady (data 1697) | □ kwadrat | łańcuch 2 |
| □ kwadrat | 🫏 osioł | Rynek / zbieg z ul. Żeglarską | **osiołek** (pręgierz) | żelazny grzbiet osiołka-pręgierza | ◇ romb | łańcuch 3 |
| ◇ romb | 🐬 delfin | Rynek Staromiejski (przy Ratuszu) | **Pomnik Kopernika** | głowa delfina w studzience u podstawy cokołu | **KONIEC → MG** | łańcuch 4 |
| ⬡ heksagon | 🗼 wieża | ul. Pod Krzywą Wieżą (SW, mury) | **Krzywa Wieża** | przechylona baszta murów miejskich | — | dystraktor |
| ☆ gwiazda | 🎩 melonik | wylot ul. Chełmińskiej (NW Rynku) | **pies Filuś** | melonik prof. Filutka w pyszczku kundelka | — | dystraktor |
| ✕ iks | 🎺 trąbka | ul. Piekary 37 (W) | **Łuk Cezara** | Michał Archanioł z trąbką na attyce (+ szczątek torów pod sklepieniem) | — | dystraktor |
| ∿ fala | ⚖️ waga | Rynek Nowomiejski (przy Modrym Fartuchu) | **Pomnik Przekupki** | waga u stóp siedzącej przekupki (gęś, kosz jaj) | — | dystraktor |
| ⊙ tarcza | 🛡️ herb | Rynek Staromiejski 6 (naprzeciw Ratusza) | **Dwór Artusa** | herb Torunia na szczycie czerwonej fasady (daty 1311 / 1891) | — | dystraktor |

Wszystkie 9 miejsc: 24/7 z ulicy. Haczyki zweryfikowane z wiki (`przewodnik-miejsc-gry.js`).

> ⚠ **Kolizja warstw:** glif mapy „☆ gwiazda" (miejsce Filusia) i piktogram detalu „⭐ gwiazda" (Pod Gwiazdą) to dwa różne znaki w dwóch różnych warstwach. Jeśli przy generacji finalnej będzie mylić — podmień jeden z nich (np. glif Filusia na inny kształt).

## Granica spoilera — kto co widzi

| Artefakt | Widzi GRACZ | Tylko AUTOR/MG |
|---|---|---|
| **Mapa** | 9 glifów na pozycjach, **bez nazw, bez detali** | — |
| **Deszyfrownik** | 9 wierszy: **piktogram detalu → następny glif** (lub „—"). Bez nazw miejsc. | — |
| **Legenda** | 9 pustych pól (glif → ____) | — |
| **K1** | start = △ + zasada (glif → detal → następny glif) + raport = 4 miejsca w kolejności | — |
| **Klucz glif↔detal↔miejsce** (tabela wyżej) | NIE | TAK |
| **Klucz odpowiedzi** (4 miejsca w kolejności) | NIE | TAK |

## Deszyfrownik gracza — zawartość

9 wierszy, każdy: **piktogram detalu → następny glif** (4 z łańcucha) **lub → „ślepy zaułek"** (5 dystraktorów). **Bez nazw miejsc, bez opisów** — grupa łączy piktogram z obserwacją. **Kolejność wierszy wymieszana.**

```
🗼 → ślepy zaułek      🍪 → ○ okrąg          🛡️ → ślepy zaułek
🫏 → ◇ romb            ⚖️ → ślepy zaułek      ⭐ → □ kwadrat
🎩 → ślepy zaułek      🐬 → KONIEC → MG       🎺 → ślepy zaułek
```

## Legenda gracza (puste, 9 glifów)

```
△ trójkąt = ______   ⬡ heksagon = ______   □ kwadrat = ______
○ okrąg   = ______   ☆ gwiazda  = ______   ✕ iks     = ______
◇ romb    = ______   ∿ fala     = ______   ⊙ tarcza  = ______
```

Na swojej trasie grupa wypełni 4; reszta pusta (lub wypełniona przy błądzeniu).

## Odpowiedź dla MG

**(a) 4 miejsca w kolejności:** `Piernikarka → Pod Gwiazdą → osiołek → Kopernik`. MG weryfikuje wg wzorca (`mechanics/koperty-mg.md`) i wydaje K2.

## Przeciek deszyfrownika — ROZSTRZYGNIĘTE [2026-05-31]: opcja A

Dystraktory **bez** następnego glifu (ślepy zaułek) → samokorekta w terenie. Czytając kartę da się wytypować **zbiór** 4 detali łańcucha, ale (a) trzeba je jeszcze zinterpretować i powiązać z miejscami, (b) **kolejności** nie da się odczytać (karta jest „detal→glif", nie „glif→detal/miejsce") — a MG weryfikuje kolejność, więc bez chodzenia nie zdasz. Format „piktogram zamiast nazwy" dodatkowo zaciemnia przeciek (trzeba zgadnąć, co piktogram oznacza w terenie). Opcję B (fałszywe tropy u dystraktorów) odrzucono: pogarsza UX (błąd → długa pętla zamiast natychmiastowego „ślepego zaułka").

## Checklista spójności (przed finalną generacją)

- [ ] Mapa pokazuje **dokładnie 9 glifów** z tabeli, na właściwych pozycjach, **bez nazw i bez detali**, markery nieodróżnialne.
- [ ] Deszyfrownik ma **9 wierszy** = 9 piktogramów detali; **4 z następnym glifem** zgodnym z łańcuchem (△→○→□→◇→KONIEC), **5 ze „ślepym zaułkiem"**. **Bez nazw.**
- [ ] Każdy „następny glif" w deszyfrowniku **istnieje na mapie**.
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
