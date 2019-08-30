### HF Interactiondesign

# Typografische Systeme

Stefan Huber, Zürich – 2019 <!-- .element: class="footer" -->
--s--
## Übersicht

* **8:15**
* Typografie skallieren
* calc() · Rückschau
* CSS-Variablen vs. SCSS
* **11:45** · Ende
--s--
## Übersicht
* **12:45**
* Responsive Proportionen
* Grids
* [CSS Zen Garden](http://www.csszengarden.com/)
* **16:15** · End


--s--
## Ziele für den Tag

# Mittels kleinen Untersuchungen und Versuchen, responsive typografische Systeme verstehen.

--s--
## Lernziele
* können Mengentext typografisch korrekt Aufbereiten und Formatieren. K3
* können mit mittels typografischer Gestaltung inhaltliche Strukturen unterstützen. K3
* können die Grundlagen der Satztechnik bezogen auf digitale Medien anwenden, beurteilen und bewerten. K6
* verstehen, wie die Leseführung in verschiedenen Ausgabegeräten zu gewährleisten ist. K4
--s--
## Achtung

* Live-Coding kann schief gehen...
--s--
## Vorbereitung

* [Node installieren](https://nodejs.org/en/download/)
* [TypeSystem Repository Klonen](https://github.com/logrinto/IAD2017.TypeSystem)
* in Verzeichnis wechseln `cd ...`
* `npm install` → Installiert die benötigten Module
* `npm start` → startet für die Entwicklung
* Text aus `text/loos.html` nach `src/index.html` kopieren
* `<div class="column"> … </div>` um Inhalt machen
* Slides öffnen

--s--
## Typografie skallieren


--s--
## Titelabstufung · Rückschau


![](../../2018/KW38-TypeSystem/img/headings.svg)
--s--
## Titelabstufung SCSS · Rückschau

```scss
$base-font-size: 16px;
$font-scale: 1.41421356237;


html {
  font-size: $base-font-size;
}

h2 {
  font-size: 1rem * $font-scale;
}

h1 {
  font-size: 1rem * $font-scale * $font-scale;
}
```
--s--
## Titelabstufung CSS · Rückschau

```css
html {
  font-size: 16px;
}

h2 {
  font-size: 1.4142135624rem;
}

h1 {
  font-size: 2rem;
}
```
--s--
## Bildschirmgrösse
![](https://upload.wikimedia.org/wikipedia/commons/0/0c/Vector_Video_Standards8.svg)
--s--
## Schriftgrösse · Rückschau


```css
html {
  font-size: 16px;
}

body {
  font-size: 1rem;
}

```

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

body {
  font-size: 1rem;
}
```

--s--
## Viewport-Breite zu Schriftgrösse


![](./img/basefont.svg)

--s--
## Übung A

**Schätzungen?**
* Untersuche den `p`-Tag von drei Artikeln von News-Portalen
  * [Zeit Online](https://www.zeit.de/)
  * [The Guardian](https://www.theguardian.com/)
  * [The New York Times](https://www.nytimes.com/)
* Welches Art der Schriftskallierung wurde verwendet (Breakpoint, Linear, S-Kurve)
* Wenn Breakpoints; Wieviele? (nur für Schriftgrösse)

--s--
## Viewport-Breite zu Schriftgrösse


![](./img/basefont.svg)
--s--
## Wo verwenden wir Linear?
--s--
## Übung B

* Richte eine Spaltenbreite mit 94 % des Viewports ein (`width: 94%;`).
* Nimmt zwei Wörter mit stark unterschiedlichen Zeichenlängen
* Beide Wörter stehen auf separaten Zeilen
* Richte die Wörterlänge auf die Spaltenbreite
--s--
## Übung B.1

* Erstelle eine maximale Breite für die Spalte (`max-width: 50rem;`).
* Richte die Wörterlänge auf die Spaltenbreite (in allen Breiten)
--s--
## Übung B.2

* Wie können wir nun mit dem `p`-Tag eine S-Kurve erreichen?

--s--
## calc · Rückschau

* `calc()` ermöglicht es verschiedene Einheiten im CSS zu mischen
* nur nutzen, wenn verschiedene Einheiten gemischt werden müssen

--s--
## calc · Rückschau

```css
html {
  font-size: 16px;
  line-height: 1.5;
}
.fullsreen {
  width: calc(100vw - 2rem);
  height: calc(100vh - 2rem);
}
```
--s--
## calc · Rückschau

```css
p {
  font-size: calc(0.5rem + 1.5vw);
}
```
--s--
## CSS-Variablen vs. SCSS
--s--
## SCSS-Variablen
* Preprozesspor erforderlich
* Browser weiss von nichts

--s--
## SCSS

```scss
$primary-color: #468faa;


h1, h3 {
  color: $primary-color;
}

hr {
  border: 0;
  height: 2rem;
  background-color: $primary-color;
}
```

--s--
## CSS von SCSS


```css
h1, h3 {
  color: #468faa;
}

hr {
  border: 0;
  height: 2rem;
  background-color: #468faa;
}
```
--s--
## CSS-Variablen
* Kein Preprozesspor erforderlich
* Nativ im Browser
* Nicht alle Browser unterstützen CSS-Variablen <br />[→ caniuse.com](https://caniuse.com/#feat=css-variables)
* mächtigere Fähigkeiten

--s--
## CSS-Variablen

```css
:root {
  --primary-color: #468faa;
}

h1, h3 {
  color: var(--primary-color);
}

hr {
  border: 0;
  height: 2rem;
  background-color: var(--primary-color);
}
```
--s--

## Übung C

* Definiere `h1`, `h3` und `hr` mit CSS-Variablen in einer Farbe
* Mache einen kurzen Test

--s--
## CSS-Variablen

* Werden vererbt wie zum Beispiel `color`

```css
:root {
  --primary-color: #468faa;
}

.special {
  --primary-color: white;
}

.special-pink {
  --primary-color: pink;
}
```
--s--

## Übung C.1

* Füge `h1`, `h3` und `hr` in einen `div` mit einer zusätzlichen Klasse
* überschreibe in der erstellten Klasse die CSS-Variable

--s--
## Übung D · Spaltenbreite in %

* Responsive Spalten (1 Spalte, 2 Spalten, 4 Spalten)

```css
.container-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.container-item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: var(--col-breite);
  max-width: var(--col-breite);
}
```
--s--
# Mittag
--s--
## Responsive Proportionen


--s--
## Responsive Proportionen

* Bisschen ein Hack
* Funktioniert aber absolut zuverlässig

--s--
## Responsive Proportionen
* Äusserer Container enthält proportion
* Innerer Container füllt proportion

--s--
## Responsive Proportionen

```html
<div class="responsive-container">
  <div class="responsive-item">…</div>
</div>
```

--s--
## Responsive Proportionen

```scss
.responsive-container {
  position: relative;
  padding-bottom: 100%; // hier die Proportion zur Breite
  height: 0;
  overflow: hidden;
  max-width: 100%;
}

.responsive-item  {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

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
## Übung E · Responsive Proportionen

* Erstelle ein Vierspalter (responsive)
* Fülle in jede Spalte Boxen
* Diese Boxen sollen nun die Proportion 1:1 (Quadratisch) haben

--s--
## Übung E.1 · Responsive Proportionen

* Stelle den Abstand zwischen den Boxen gleich ein, wie der Spaltenabstand

--s--
## Grids

--s--
## Bosshard!
--s--
## Grids

* `float: left;` → früher
* `display: flex;` → [einfache Handhabung](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* `display: grid;` → [neue Möglichkeiten](https://css-tricks.com/snippets/css/complete-guide-grid/)

--s--
## CSS-Grids

* Flexbox meist ausreichend, wenn nur Spalten gewünscht
* absolute Fexibilität!
* eher kompliziert
* [Support beachten](https://caniuse.com/#search=grid)
* Heute schauen wir zwei Möglichkeiten an

--s--
## 12 Spalten

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
## Übung F · CSS-Grid

* Erstelle ein CSS-Grid mit 12 Spalten
* Erstelle zwei Spalten
  * 3 Spalten breit
  * 9 Spalten breit

--s--
## Übung F.1 · CSS-Grid

* Erstelle ein CSS-Grid mit 12 Spalten und 12 Zeilen
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
## Übung G

* Versucht einen Entwurf für CSS Zen Garden zu erstellen.

--s--
# Rückmeldung
