### HF Interactiondesign

# Typografische Systeme

Stefan Huber, Zürich – 2018 <!-- .element: class="footer" -->
--s--
## Übersicht

* **08:15**
* Grundlagen & Best practice
* SCSS
* **11:45** · Ende

--s--
## Übersicht

* **12:45**
* Grids
* [CSS Zen Garden](http://www.csszengarden.com/)
* **16:15** · Ende

--s--
## Lernziele
* können Mengentext typografisch korrekt Aufbereiten und Formatieren. K3
* können mit mittels typografischer Gestaltung inhaltliche Strukturen unterstützen. K3
* können die Grundlagen der Satztechnik bezogen auf digitale Medien anwenden, beurteilen und bewerten. K6
* verstehen, wie die Leseführung in verschiedenen Ausgabegeräten zu gewährleisten ist. K4
--s--
## Grundlagen – Aufgabe
![iad](./img/design-tradition.png)


--s--
## Grundlagen – Aufgabe

![iad](./img/design-tradition-kill.png)

![iad](./img/design-new.png)

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

* Normalisiert Browser-Standards
* Kann man machen
* Heute aber auch ohne gut möglich

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
## Übung A

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
## Visuelle Grösse

* [Size Calculator](https://sizecalc.com/)

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
## Übung B

* Wechsle den Text aus mit `text/loos.html`
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
* [Foundation](https://foundation.zurb.com/sites/docs/v/5.5.3/components/typography.html)
* [Materialize](https://materializecss.com/typography.html)

--s--
## Titelabstufung


![](./img/headings.svg)

--s--
## Titelabstufung

# `h1` = 2 rem
# `h2` = ? rem
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
## CSS-Preprocessor

* Erzeugen CSS
* Vereinfachen das schreiben
* Benötigen einen Build-Step

--s--
## Wichtige Vertreter

* **SCSS/SASS** → wohl am weitesten Verbreitet
* **LESS** → ähnlich SCSS
* **PostCSS** → lässt sich sehr gut erweitern
* **CSS durch JS erzeugen** → lässt sich sehr gut erweitern – cascading wird oft vergessen

--s--
## SCSS

Wichtigste Funktionen:
* **Variablen & Rechnen** – in neuerem CSS (vanilla) auch möglich
* **Verschachtelungen**
* **Mixins**

--s--
## SCSS – Variablen & Rechnen
```scss
p {
  color: black;

  .important {
    color: red;
  }
  .deactivated {
    color: gray;
  }
}
```

CSS
```css
p {
  color: black;
}
p .important {
  color: red;
}
p .deactivated {
  color: gray;
}
```


--s--
## SCSS – Variablen & Rechnen

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
## Generiertes CSS

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
## Mixins

Have a look at it...
--s--
## Übung C

* Installiere den [Starter-Kit](https://github.com/logrinto/IAD2017.TypeSystem)
* Erstelle eine Titelabstufung mit dem Text in `text/structure.html`
* Ergänze fehlendes Styling
--s--
## Analyse

* Welche Tags mussten ergänzt werden?
* Zeigt mal eure Tabellen

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

--s--
## Übung D

* Erstelle ein 12-spaltiges Grid mit 3 % Spaltenabstand
* Erstelle im Grid zwei Spalten: Breiten; 8 Spalten, 4 Spalten
--s--
## Übung E

* Erstelle im (!) 8 spaltigen Container zwei Spalten zu je 4 Spalten

--s--
## CSS Zen Garden

* Seit vielen Jahren bestehend
* Gut strukturiertes HTML
* siehe Gallery
--s--
## Übung F

* Versucht einen Entwurf für CSS Zen Garden zu erstellen.

--s--
## Danke
