### HF Interactiondesign

# Typografische Systeme

Stefan Huber · Zürich · 2019 <!-- .element: class="footer" -->
--s--
## Übersicht

* **08:15**
* Korrekte Zeichensetzung
* Aufbau von typografischen Strukturen
* **11:45** · Ende

--s--
## Übersicht

* **12:45**
* Grids
* [CSS Zen Garden](http://www.csszengarden.com/)
* **16:15** · Ende
--s--
## Nächste Woche

* Wichtige IAD Zulassungsgespräche (Audit 2)
* Selbständige Arbeit 2–3 Lektionen

--s--
## Nächste Woche

* Selbständige Arbeit 2 – 3 Lektionen
--s--
## Nächste Woche

* Selbständige Arbeit 2 – 3 Lektionen

--s--
## Lernziele
* können Mengentext typografisch korrekt Aufbereiten und Formatieren. K3
* können mit mittels typografischer Gestaltung inhaltliche Strukturen unterstützen. K3
* können die Grundlagen der Satztechnik bezogen auf digitale Medien anwenden, beurteilen und bewerten. K6
* verstehen, wie die Leseführung in verschiedenen Ausgabegeräten zu gewährleisten ist. K4

--s--
## Uuups... 🙈

# Achtung! Live Coding.

--s--
# Zeichensetzung

--s--
# Unterlagen

* [Typografie im Web](https://webtypo.signalwerk.ch/)

--s--
## Anführungszeichen
# In der Schweiz nur so: «Zitat»

<br>

# «Ich lese die Site ‹Typo-Nerd› täglich.»

--s--
## Eingabe
* Eingabe über Tastatur
* Textersetzung bei Eingabe
* Helfer ([Alfred](https://www.alfredapp.com/))

--s--
## Geschützte Leerzeichen
# 10 Liter
#### (10␣Liter)
# Seite 3
#### (Seite␣3)
# Grau AG
#### (Grau␣AG)

--s--
## Geschützte schmales Leerzeichen
# 18. August 2018
#### (18.¦August␣2018)

<br>

## falsch
# 18. August 2018
--s--
## Geschützte schmales Leerzeichen
# 18. 8. 2018
#### 18.¦8.¦2018

<br>

## falsch
# 18. 8. 2018
--s--
## Geschützte schmales Leerzeichen
# 20 000
#### (20¦000)
<br>

## falsch
# 20 000
# 20000
--s--
## Geschützte schmales Leerzeichen
# 2000
#### (2000)
<br>

## falsch
# 2 000

--s--
## Ziffer-Leerzeichen
# Fr. 10.–
# Fr.  9.–
#### (Fr.·9.–)
--s--
## Halbgeviertstrich

# 14 – 16 Uhr
#### (14¦–¦16␣Uhr)
<br>

## falsch
# 14 – 16 Uhr
# 14 - 16 Uhr
--s--
## Halbgeviertstrich

# Winterthur – Bern
# Er ging – so glaubten wir – heim.
<br>

## falsch
# Winterthur - Bern
# Er ging - so glaubten wir - heim.
--s--
## Divis
# Kuppel-Wörter

<br>

# bei Tren-<br>nung
#### (Bitte nicht manuell einfügen!)

--s--
## Zeichensetzung · Praxisarbeit A

### 20 min lesen & umsetzen | 15 min Austausch
* [→ Typografie im Web](https://webtypo.signalwerk.ch/)
* Jede Person bekommt eine Datei
* Datei in HTML umsetzen
* Mikrotypografie korrigieren (vorher/nachher)
* Austausch mit einer anderen Person
* Korrekturen in Gruppe besprechen
* Besprechung in Klasse

--s--
## Aufbau

* zwei Übungen falsche Anführungszeichen
* [E-Mail|E-Games]–[Übertragung|Newsletter];
* Ort – Ort
* Mathe
* Auslassung …
* Langes und kurzes Datum
--s--
## Aufbau
* Kurzform SI-Einheit
* Ausgeschriebene Einheit
* Titel/Namen
* 30 °C
* § 10

--s--
# Aufbau von typografischen Strukturen


--s--
##  Regelsatz

Was wird bei den meisten Sites verwendet?


--s--
##  Typografie

* Grundschrift
* Titel
* Auszeichnungen/Links
* ((Bilder))

--s--
##  Erweiterte Typografie

* Tabellen (!)
* Listen
* ((Zitate))
* ...
--s--
## normalize.css ...

* [normalize.css Download](https://necolas.github.io/normalize.css/)
* [Normalisiert Browser-Standards](https://css-tricks.com/modern-normalize/)
* Kann man machen
* Heute aber auch ohne gut möglich
* Diverse CSS-Resets ([Meyer's CSS Rest](https://meyerweb.com/eric/tools/css/reset/index.html), [Minimal CSS Reset](https://alligator.io/css/minimal-css-reset/), [signalwerk Reset](https://gist.github.com/signalwerk/cede1b5b5ca02fb545bfff8c02875578))

--s--
## Grundschrift

* Wie breit läuft der Text?
* Zeilenabstand
* Laufweite (Tracking)

--s--
## Titel

* Wie viele Titel-Stufen gibt es?
* Auszeichnungen im Titel?

--s--
## Abstufungen

* Grundtext is die Ausgangslage
* 50 – 80 Zeichen – eher 50 als 80

--s--
## Strukturen · Praxisarbeit B

* Erstelle ein minimales HTML
* Setze [Bildtext](http://www.blindtextgenerator.de/) in einer zentrierten Textspalte (ohne Titel)
* Definiere die Grundschrift als [Open Sans Regular](https://fonts.google.com/specimen/Open+Sans?selection.family=Open+Sans)
* Definiere eine angenehme Lesegrösse für Desktop-Computer

### Erweiterung
* Definiere, wie viel Raum zwischen zwei `p`-Tags stehen soll.
* Gibt es einen Einzug?


--s--
## Analyse

* Wie wurde die Schriftgrösse definiert?
* Wie wurde der Zeilenabstand definiert?
* Wie wurde die Spaltenbreite definiert?
* Wie breit ist ein Desktop-Bildschirm?
--s--
## Schriftgrösse


```css
html {
  font-size: 16px;
}

body {
  font-size: 1rem;
}

```
--s--
## Zeilenabstand


```css
body {
  line-height: 1.3;
}
```

--s--
## Spaltenbreite

* Wie wurde die Spaltenbreite definiert?
--s--
## Bildschirmgrösse
![](https://upload.wikimedia.org/wikipedia/commons/0/0c/Vector_Video_Standards8.svg)


--s--
## Responsive


```css
html {
  font-size: 14px;
}
@media only screen and (min-width: 600px) { /* oder rem/em */
  html {
    font-size: 16px;
  }
}
```

--s--
## Strukturen · Praxisarbeit C

* Wechsle den Text aus mit `loos.html`
* Wähle drei Breakpoints Mobile, Desktop, Big-Desktop
* Definiere die Grundschriftgrössen
* Mobile first! → Dev-Tools
* Ergänze fehlendes Styling

--s--
## Analyse

* Wie wurde der Breakpoint definiert?

--s--
## Titelabstufung
# h1
## h2
### h3
#### h4
--s--
## Titelabstufung

* [W3C Recommendation](https://www.w3.org/TR/html5/rendering.html#sections-and-headings)
* [Bootstrap](https://getbootstrap.com/docs/4.1/content/typography/)
* [Foundation](https://foundation.zurb.com/sites/docs/typography-base.html)
* [Materialize](https://materializecss.com/typography.html)

--s--
## Titelabstufung

![](https://signalwerk.github.io/IAD.Chart/charts/Headings.svg) <!-- .element: class="pic" -->
--s--
## Titelabstufung

# `h1` = 2 rem
# `h2` = ? rem
# `h3` = 1 rem

--s--
## Titelabstufung

# `h1` = 2 rem
# `h2` = 1.5 rem
# `h3` = 1 rem
--s--
## Titelabstufung

# `h1` = 2 rem
### 100 % ÷ 1.5 × 2 = 133.33 %
# `h2` = 1.5 rem
### 100 % ÷ 1 × 1.5 = 150 %
# `h3` = 1 rem

--s--
## Titelabstufung

# `h1` = 2 rem
### 100 % ÷ 1.414 × 2 = 141.4 %
# `h2` = 1.414 rem
### 100 % ÷ 1 × 1.414 = 141.4 %
# `h3` = 1 rem

Rechner: [Geometrisches Mittel](https://www.hackmath.net/en/calculator/geometric-mean)
<!-- .element: class="footer" -->
--s--
## Titelabstufung

![Interpolation Theory](https://www.lucasfonts.com/fileadmin/user_upload/about/interpolation-theory/extra-Interpol.gif)

Quelle: [Interpolation Theory](https://www.lucasfonts.com/about/interpolation-theory/)
<!-- .element: class="footer" -->



--s--
# CSS-Boxmodel

* Treffen zwei Margins aufeinander «gewinnt» der grössere!
* [Erklärung](https://jonathan-harrell.com/whats-the-deal-with-margin-collapse/)


--s--
## Einzug erstellen


```css
p {
  text-indent: 1.5em;
}

```
Probleme?

--s--
## Einzug erstellen

```css
p + p {
  text-indent: 1.5em;
  margin-top: 0;
}
```



--s--
## Strukturen · Praxisarbeit D


* Erstelle eine Titelabstufung mit dem Text in `structure.html`
* Ergänze fehlendes Styling
--s--
## Analyse

* Welche Tags mussten ergänzt werden?
* Zeigt mal eure Tabellen

--s--
## Tabellen

* [Spick](https://github.com/signalwerk/signalwerk.styles/blob/master/src/css/table.css)
* Abstand zwischen Spalten
* Spaltenlinien nur in horizontaler Richtung
* Mobile immer ein Problem
--s--
## Praxis

--s--
# Grids

--s--
# Grids

* Tapfer sein 🙈
--s--
## Grids

* `float: left;` → früher
* `display: flex;` → [einfache Handhabung](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* `display: grid;` → [neue Möglichkeiten](https://css-tricks.com/snippets/css/complete-guide-grid/)

--s--
## Flexbox: Grids-Container

```css
.container-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
```

--s--
## Flexbox: Grids-Item

```css
.container-item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 10%;
  max-width: 10%;
}
```
--s--
## Spaltenbreite in %

```scss
$col: 12;
$gutter: 3;
$total-breite: 100;
$col-breite: ($total-breite - (($col - 1) * $gutter)) / $col;
```

* `$col` =  Anzahl Spalten
* `$gutter` = Abstand zwischen Spalten
* `$total-breite` = Totale Breite
* `$col-breite` = Spaltenbreite


--s--
## Strukturen · Praxisarbeit E

* Erstelle ein 12-spaltiges Grid mit 3 % Spaltenabstand
* Erstelle im Grid zwei Spalten: Breiten; 8 Spalten, 4 Spalten
--s--
## Strukturen · Praxisarbeit F

* Erstelle im (!) 8 spaltigen Container zwei Spalten zu je 4 Spalten


--s--
## Flexbox: Grids-Container

```css
.container-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


--s--
## CSS-Grid: Grids-Container

```css
.container-grid-x {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 3%;
}
```
--s--
## Flexbox: Grids-Item

```scss
// 4 columns, 3% gutter
.container-item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 22.75%;
  max-width: 22.75%;
}
```

--s--
## CSS-Grid: Grids-Item

```scss
.column-1to3 {
  grid-column-start: 1;
  grid-column-end: 4;
}
```

```scss
.column-4to12 {
  grid-column-start: 4;
  grid-column-end: span 9;
}
```

--s--
## Strukturen · Praxisarbeit G

* Erstelle ein CSS-Grid mit 12 Spalten
* Erstelle zwei Spalten
  * 3 Spalten breit
  * 9 Spalten breit

--s--
## Strukturen · Praxisarbeit H

* Erstelle ein CSS-Grid mit 12 Spalten und 12 Zeilen (column/row)
* Erstelle drei Grid-Items
  * 3 Spalten breit, 3 Zeilen hoch
  * 3 Spalten breit, 9 Zeilen hoch
  * 9 Spalten breit, 12 Zeilen hoch

--s--
## CSS-Grid: Grids-Item

* Items können auch frei «fliessen»

```scss
.card-2-4 {
  grid-column: span 2;
  grid-row: span 4;
}
```

--s--
## CSS-Grid: Grids-Container

* Containder soll Löcher füllen

```scss
.container-grid-dense {
  grid-auto-flow: dense;
}
```
--s--
## CSS Zen Garden

* [CSS Zen Garden](http://www.csszengarden.com/)
* Seit vielen Jahren bestehend
* Gut strukturiertes HTML
* siehe Gallery
--s--
## Strukturen · Praxisarbeit I

* Versucht einen Entwurf für CSS Zen Garden zu erstellen.




--s--
## Danke
