### HF Interactiondesign

# Typografische Systeme

Stefan Huber, Zürich – 2021 <!-- .element: class="footer" -->
--s--


## Übersicht
* **12:45**
* Typografie skallieren
* calc() · Rückschau
* CSS-Variablen vs. SCSS
* Responsive Proportionen
* Grids
* **16:15** · End


--s--
## Lernziele
* können Mengentext typografisch korrekt Aufbereiten und Formatieren. K3
* können mit mittels typografischer Gestaltung inhaltliche Strukturen unterstützen. K3
* können die Grundlagen der Satztechnik bezogen auf digitale Medien anwenden, beurteilen und bewerten. K6
* verstehen, wie die Leseführung in verschiedenen Ausgabegeräten zu gewährleisten ist. K4

--s--

## Grundlagen – Aufgabe


![](https://publisher.signalwerk.ch/design-systems/img/design-tradition.svg) <!-- .element: class="pic" -->


Mehr: <!-- .element: class="footer" --> [Design-Systeme im Web](https://publisher.signalwerk.ch/design-systems/)

--s--

## Grundlagen – Aufgabe


![](https://publisher.signalwerk.ch/design-systems/img/design-web.svg) <!-- .element: class="pic" -->



Mehr: <!-- .element: class="footer" --> [Design-Systeme im Web](https://publisher.signalwerk.ch/design-systems/)

--s--

## Grundlagen – Template


![](https://publisher.signalwerk.ch/design-systems/img/design-templates.svg) <!-- .element: class="pic" -->




--s--

## Grundlagen – Module


![](https://publisher.signalwerk.ch/design-systems/img/design-modules.svg) <!-- .element: class="pic" -->




--s--

## Typografischen Strukturen


--s--
##  Grundstrukturen

* Grundschrift
* Titel
* Auszeichnungen/Links
* ((Bilder))

--s--
##  Erweiterte Strukturen

* Tabellen 
* Listen
* Zitate
* ...

--s--
## Grundschrift

* Schriftwahl
* Schriftgrösse
* Zeilenabstand
* Laufweite (Tracking)
* Spaltenbreite


--s--
## Abstufungen

* Grundtext ist die Ausgangslage
* 50 – 80 Zeichen – eher 50 als 80

--s--
## Strukturen · Praxisarbeit

Definitionen für die Ansicht auf Desktop-Computer erstellen

### Grundschrift 
`p`-Tags 

* ~~Schriftwahl~~
* Schriftgrösse 
* Zeilenabstand 
* Laufweite (Tracking)
* Spaltenbreite



--s--
## Analyse · Schriftgrösse

* Wie wurde die Schriftgrösse definiert?




--s--
## Schriftgrösse


```css
:root {
  font-size: 16px;
}
```

--s--
## Bildschirmgrösse
![](https://upload.wikimedia.org/wikipedia/commons/0/0c/Vector_Video_Standards8.svg)



--s--
## Viewport-Breite zu Schriftgrösse


![](https://signalwerk.github.io/IAD.Chart/charts/Basefont.svg) <!-- .element: class="pic" -->


--s--
## Responsive


```css
:root {
  font-size: 14px;
}

@media only screen and (min-width: 600px) {
  :root {
    font-size: 16px;
  }
}
```


--s--
## Veschiedene Arten von Einheiten

* fixe Einheiten (immer gleich)
* flexieble Einheiten (abhängig von Kontext)
* ohne Einheiten
* Mischung von Einheiten

--s--
## Gebräuchliche fixe Einheiten

### Fixe CSS-Einheiten für Screens
* `px` – Pixel (1 px = 1 Inch ÷ 96)

### Fixe CSS-Einheiten (nur für Druck!)
* `pt` – Punkt (1 pt = 1 Inch ÷ 72)
* `mm` – Millimeter (25.4 mm = 1 Inch)




Mehr: <!-- .element: class="footer" --> [Masseinheiten im Web – relative oder absolute Angaben](https://publisher.signalwerk.ch/css-units/)


--s--
## Viewportabhängige CSS-Einheiten
* `vh` – 1% der Fensterhöhe (Viewport)
* `vw` – 1% der Fensterbreite (Viewport)
* `vmin` – 1% der schmaleren Fensterdimension (Viewport)
* `vmax` – 1% der grösseren Fensterdimension (Viewport)

--s--
## Responsive


```css
:root {
  font-size: 3vw;
}
```
--s--
## Analyse · Zeilenabstand

* Wie wurde der Zeilenabstand definiert?

--s--
## Zeilenabstand – absolut


```css
:root {
  line-height: 12px;
}
```

--s--
## Zeilenabstand – relativ


```css
:root {
  line-height: 1.4;
}
```

--s--
## Analyse · Laufweite

* Wie wurde die Laufweite definiert?


--s--


## Laufweite (Tracking) – absolut

```css
:root {
  letter-spacing: 4px;
}
```

--s--
## Pixel-Werte


### Nachteil
* Laufweite muss für jede Änderung an der Schriftgrösse neu errechnet werden
* Verhältnis von Laufweite zur Schriftgrösse nicht «intuitiv», da Schriftgrösse und Laufweite nicht unabhängig sind

--s--

## Gebräuchliche flexieble Einheiten

* Dokumenteabhängige CSS-Einheiten
* Viewportabhängige CSS-Einheiten

--s--
## Dokumenteabhängige CSS-Einheiten
* `%` – Relativ zum Parent-Element
* `rem` – Entspricht der Schriftgrösse des Root-Elements (`:root` = `html`)
* `em` – Entspricht der aktuellen Schriftgrösse des Elements

--s--
## Laufweite (Tracking) – relativ zur Schriftgrösse

```css
:root {
  letter-spacing: 0.1em;
}
```

--s--
## Analyse · Spaltenbreite

* Wie breit ist ein Desktop-Bildschirm?
* Wie wurde die Spaltenbreite definiert?


--s--
## Spaltenbreite – absolut


```css
.container {
  width: 92%;
  max-width: 1200px;
}
```

--s--

## Spaltenbreite – relativ


```css
.container {
  width: 92%;
  max-width: 50rem;
}
```






--s--
## Titel

* Wie viele Titel-Stufen gibt es?
* Auszeichnungen im Titel?




--s--
## Titelabstufung  
# h1
## h2
### h3
#### h4



--s--
## Strukturen · Praxisarbeit

* Ergänze fehlendes Schriftgrössen für `h1` – `h4`


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

![Interpolation Theory](https://www.lucasfonts.com/media/extra-Interpol.gif)

Quelle: [Interpolation Theory](https://www.lucasfonts.com/about/interpolation-theory/)
<!-- .element: class="footer" -->




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

![](https://signalwerk.github.io/IAD.Chart/charts/Headings_details.svg) <!-- .element: class="pic" -->




--s--
## Rechnen

* `calc()` ermöglicht es verschiedene Einheiten im CSS zu mischen
* `calc()` ermöglicht Werte zu errechnen

--s--
## Titelabstufung



```css
h1 {
  font-size: calc(1rem * 1.5 * 1.5 * 1.5 * 1.5);
}
h2 {
  font-size: calc(1rem * 1.5 * 1.5 * 1.5);
}
h3 {
  font-size: calc(1rem * 1.5 * 1.5);
}
h4 {
  font-size: calc(1rem * 1.5);
}
```

--s--
## Titelabstufung



```css
h1 {
  font-size: calc(1rem * 1.2 * 1.2 * 1.2 * 1.2);
}

@media only screen and (min-width: 600px) {
  h1 {
    font-size: calc(1rem * 1.5 * 1.5 * 1.5 * 1.5);
  }
}
```


--s--
## Titelabstufung

```css
:root {
  --titel-scaler: 1.5;
}

h1 {
  font-size: calc(
    1rem * var(--titel-scaler) * var(--titel-scaler) * var(--titel-scaler) *
      var(--titel-scaler)
  );
}
```

--s--
## Titelabstufung

```css
:root {
  --titel-scaler: 1.2;
}
@media only screen and (min-width: 600px) {
  :root {
    --titel-scaler: 1.5;
  }
}

h1 {
  font-size: calc(
    1rem * var(--titel-scaler) * var(--titel-scaler) * var(--titel-scaler) *
      var(--titel-scaler)
  );
}
```



--s--
## Strukturen · Praxisarbeit


### Erweiterung
* Definiere, wie viel Raum zwischen zwei `p`-Tags stehen soll.



--s--
## Margin



```css
p {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

```

--s--
# CSS-Boxmodel

* Treffen zwei Margins aufeinander «gewinnt» der grössere!
* [Erklärung](https://jonathan-harrell.com/whats-the-deal-with-margin-collapse/)


--s--
## Einzug
* Gibt es einen Einzug?

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
## Analyse für die Praxisarbeit

* Welche Tags mussten ergänzt werden?
* Tabellen…

--s--
## Tabellen

* [Spick](https://github.com/signalwerk/signalwerk.styles/blob/master/src/css/table.css)
* Abstand zwischen Spalten
* Spaltenlinien nur in horizontaler Richtung
* Mobile immer ein Problem

--s--
## Praxis



--s--


--s--


Zeichensetzung?!

Masseinheiten! (publisher)


- [Masseinheiten im Web – relative oder absolute Angaben ↗](https://publisher.signalwerk.ch/css-units/)


https://www.economiesuisse.ch/de/artikel/urg-revision-klarere-grundsaetze-bei-fotografien





Zeichensetzung










![](https://signalwerk.github.io/IAD.Chart/charts/Headings.svg) <!-- .element: class="pic" -->
![](https://signalwerk.github.io/IAD.Chart/charts/Headings_details.svg) <!-- .element: class="pic" -->
