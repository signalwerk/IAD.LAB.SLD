### HF Interactiondesign

# Schriftmuster

Stefan Huber, Zürich – 2018 <!-- .element: class="footer" -->
--s--
## Übersicht

* **12:45**
* Organisation/News/Agenda
* Rückschau & Festigung
* Figma
* Prüfung zurück
* Schriftmuster
* Variable Font
* **16:15** · Ende
--s--
# Organisation
--s--
# Organisation

* [github education](https://education.github.com/partners/schools)
* DropBox (2017 verschoben)

--s--
## Arbeitslast

# Umfrage
* Wie war die Arbeitslast in den letzten Wochen? (😭 💤 ☺️)

--s--
## News
* [→ 25 Jahre PDF (15. Juni 1993)](https://theblog.adobe.com/evolution-digital-document-celebrating-adobe-acrobats-25th-anniversary/)
* [→ SwissID](https://swissid.ch/) & [→ SuisseID](https://www.postsuisseid.ch/)
* [Yearbook of Type III](https://www.slanted.de/shop/yearbook-type-lll) [→ Fit](https://djr.com/fit/variable.html) [→ Calcula](https://www.typotheque.com/articles/calcula)
--s--
## PDF

* 15. Juni 1993 – Adobe Acrobat 1.0 – PDF 1.0
* WYSIWYG für Dokumenteaustausch
* Seietenbeschreibung (mit fixer Geometrie)
* Linearized PDF – «streaming» von Dokumenten ab 1996 ([→ PDF 1.2](http://www.orpalis.com/blog/linearized-pdf/))
* ISO 32000-1:2008 = PDF 1.7
* ISO 32000-2:2017 = PDF 2
* PDF/A (ISO 19005) – PDF/X (ISO 15930)

--s--
## OAuth2 (Open Authorization)

* Industriestandard (Amazon, Google, Facebook, Microsoft, Twitter, ...)
* Entkopplung von Identität-Provider und Resoucen-Provider
* [→ Beispiel](https://youtu.be/zEysfgIbqlg?t=2m21s)

--s--
## Agenda
* [27. 5. – 4. 11. – Hello, Robot.](https://www.gewerbemuseum.ch/en/exhibitions/hello-robot)

--s--
# Rückschau

--s--
# CSS Units
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

--s--
## Pixel-Werte
```css
html {
  font-size: 16px;
  line-height: 24px;
}
h1 {
  font-size: 32px;
  line-height: 48px;
}
```

### Nachteil
* Verhältnis von Schriftgrösse und Zeilenabstand nicht intuitiv (muss errechnet werden)
* Verhältnis von H1 zur normalen Schriftgrösse schwer ersichtlich


--s--
## CSS Values
```css
html {
  font-size: 16px;
  line-height: 1.5;
}
h1 {
  font-size: 32px;
}
```

### Nachteil
* Verhältnis von H1 zur normalen Schriftgrösse schwer ersichtlich

--s--

## Gebräuchliche flexieble Einheiten

* Dokumenteabhängige CSS-Einheiten
* Viewportabhängige CSS-Einheiten
--s--
## Dokumenteabhängige CSS-Einheiten
* `%` – Relativ zum Parent-Element
* `rem` – Entspricht der Schriftgrösse des Root-Elements (`HTML`)
* `em` – Entspricht der aktuellen Schriftgrösse des Elements
--s--
## Viewportabhängige CSS-Einheiten
* `vh` – 1% der Fensterhöhe (Viewport)
* `vw` – 1% der Fensterbreite (Viewport)
* `vmin` – 1% der schmaleren Fensterdimension (Viewport)
* `vmax` – 1% der grösseren Fensterdimension (Viewport)
--s--
# CSS Values
```css
html {
  font-size: 16px;
  line-height: 1.5;
}
h1 {
  font-size: 32px;
}
```

### Nachteil
* Verhältnis von H1 zur normalen Schriftgrösse schwer ersichtlich
--s--
# CSS Values
```css
html {
  font-size: 16px;
  line-height: 1.5;
}
h1 {
  font-size: 2rem;
}
```
--s--
## Mischung

* `calc()` ermöglicht es verschiedene Einheiten im CSS zu mischen
* nur nutzen, wenn flexieble und variable Einheiten gemischt werden müssen
--s--
## Mischung

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
# CSS Mediaquery

Je nach Eigenschaft des Ausgabemediums andere CSS-Definition


--s--
# Grössenabhängig

```css
@media screen and (min-width: 30em) {
  html {
    font-size: 16px;
  }
}
```
Mediaquery wird aktiv, wenn das Ausgabemedium ein Bildschirm ist und die Breite mehr als `30 rem` ist.

--s--
## Mobile first

```css
html {
  font-size: 12px;
  line-height: 1.5;
}
@media screen and (min-width: 30em) {
  html {
    font-size: 16px;
  }
}
```
Beim Aufbau von CSS-Formatierungen empfiehlt es sich vom kleinsten Screen aus zu gehen und die grösseren Screens als «Ausnahmen» zu sehen.


[→ MDN Media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
<!-- .element: class="footer" -->



--s--
## Figma

Marc zeigt uns kurz [figma](https://www.figma.com/)

--s--
## Prüfung

* Natasha Prüfung
* Prüfung zurück

--s--
## Schriftmuster

--s--
## Rückschau

* Gemeinsam ein Schriftmuster
* Wie seine Schrift präsentieren

--s--
## Stand pro Person

* Ein Text zum Font
* Ein Text zum Designer
* Review von zwei Texten
* Zwei Beispiele von eigenem Text
* Übersichtsbild
--s--
## Stand pro Gruppe

* Design vorgeschlagen
* Revisionen gemacht
--s--
## Stand als Klasse

* Untersuchung zu bestehenden Papier-Schriftmustern
* Digitale Schriftmuster einander Vorgestellt

--s--
## Website

Können wir die alten Texte löschen?
--s--
## Revision

* Jede Gruppe macht noch einmal Anweisungen
* Jeder darf jedem einen Vorschlag machen

--s--
## Hausaufgaben

* 14.07.2018 – letztes LAB
* Was macht das Schriftmuster zum Schriftmuster? Was ist gut, was schlecht?
* Bis wann geben wir noch Feedback?

--s--
## Variable Font

Praxisarbeit
