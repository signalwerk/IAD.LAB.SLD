### HF Interactiondesign

# Build-System

Stefan Huber · Zürich · 2020 <!-- .element: class="footer" -->
--s--

## Übersicht

- **8:15** · Start
- **8:30** · Yvonne Koppitsch
- Organisation/News/Agenda
- Build-System
- Grids
- Aufgabe
- **11:45** · Ende

--s--

# Organisation

* Corona…
--s--

## Arbeitslast

--s--

## Arbeitslast

# Umfrage

* Wie war die Arbeitslast in den letzten Wochen? (😭 💤 ☺️)

--s--

## News

* [US Justizministerium vs Google](https://www.heise.de/news/US-Regierung-zieht-gegen-Googles-Marktmacht-vor-Gericht-4933307.html)
  * Einschränkung des Wettbewerbs (Standardsuche)
  * Suchergebnisse begünstigen eigene Services/Inhalte


* [«New York Post»-Artikel auf Social Media geblockt](https://www.welt.de/politik/ausland/article217962472/Twitter-blockiert-New-York-Post-Artikel-ueber-Biden-und-erntet-Kritik.html)

* [Zero Rating scheitert vor Europäische Gerichtshof (EuGH)](https://netzpolitik.org/2020/eugh-zur-netzneutralitaet-provider-duerfen-angebote-nicht-selektiv-drosseln/)

* 10 Jahre Instagram

--s--
## Instagram

* **2010** gegründet
* **2012** Facebook kauft [Instagram](https://www.zdnet.com/article/why-facebook-acquired-instagram-for-1-billion/)
  * Kaufpreis: $1 Milliard
  * ~ 30 Millionen aktive User pro Monat [Quelle](https://en.wikipedia.org/wiki/Instagram)
  * 13 Angestellte
  * Kevin Systrom (CEO) wollte wohl das [doppelte](https://www.zdnet.com/article/instagram-ceo-wanted-2-billion-from-facebook-rumor/)
* **2020** Etwa 1 Milliard aktive User pro Monat [Quelle](https://www.facebook.com/business/marketing/instagram#)


--s--
## Zero Rating


* Gewisse Dienste werden nicht ans Datenvolumen gerechnet
* Gewisse Dienste werden nicht gedrosselt nach Erreichung des Datenvolumen
* [Situation Schweiz seit 2019](https://www.digitale-gesellschaft.ch/2019/03/08/schweiz-erhaelt-gesetzlich-festgeschriebene-netzneutralitaet-geschafft/)
* Was ist daran schlimm?
* Was ist die alternative?
* Was ist erlaubt?








--s--

## Agenda
In Corona-Zeiten ist's doch zuhause auch ganz schön.


* [Netflix · The Social Dilemma](https://www.netflix.com/ch-en/title/81254224)
* [🤯 Talk](https://underware.nl/case-studies/grammatography/) von [Underware Fonts](https://www.underware.nl/fonts/) über [Grammato](http://grammato.com/) <br />(oder villeicht eher [Higher Order Interpolation for Variable Fonts](https://underware.nl/case-studies/hoi/) 🤓)


--s--

## Build-System

- Ermöglichen JavaScript und CSS zu verarbeiten
- Sollen das Leben bei der Entwicklung einfacher machen
- Aufteilung in verschiedene Dateien

--s--

## CSS-Preprocessor

- Erzeugen CSS
- Vereinfachen das schreiben
- Benötigen einen Build-Step

--s--

## Wichtige Vertreter

- **SCSS/SASS** → wohl am weitesten Verbreitet
- **LESS** → ähnlich SCSS
- **PostCSS** → lässt sich sehr gut erweitern
- **CSS durch JS erzeugen** → lässt sich sehr gut erweitern – cascading wird oft vergessen

--s--

## SCSS

Wichtigste Funktionen:

- **Verschachtelungen**
- **Variablen & Rechnen**
- **Mixins & Funktionen**

--s--

## SCSS – Verschachtelungen

SCSS

```scss
.important {
  color: red;

  p {
    color: black;
  }
}
```

CSS

```css
.important {
  color: red;
}
.important p {
  color: black;
}
```

--s--

## SCSS – Variablen & Rechnen

```scss
$font-scale: 1.41421356237;

html {
  font-size: 16px;
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

## SCSS – Mixins & Funktionen

- Ermöglicht Abstraktion von gewissen Definitionen
- Siehe Beispiel später

--s--

## CSS-Variablen vs. SCSS · Rückschau

--s--

## calc · Rückschau

CSS & SCSS
```css
.fullsreen {
  width: calc(100% - 2rem);
}
```

SCSS
```scss
.fullsreen {
  width: 100% - 2%;
}
```
Generiertes CSS
```scss
.fullsreen {
  width: 98%;
}
```
--s--

## SCSS-Variablen

- Preprozesspor erforderlich
- Browser weiss von nichts

--s--

## SCSS-Variablen

SCSS
```scss
$primary-color: #468faa;

h1 {
  color: $primary-color;
}
```

Generiertes CSS


```css
h1 {
  color: #468faa;
}
```

--s--

## CSS-Variablen · Rückschau

- Kein Preprozesspor erforderlich
- Nativ im Browser
- Nicht alle Browser unterstützen CSS-Variablen <br />[→ caniuse.com](https://caniuse.com/#feat=css-variables)
- mächtigere Fähigkeiten

--s--

## CSS-Variablen

```css
:root {
  --primary-color: #468faa;
}

h1 {
  color: var(--primary-color);
}
```

--s--

## Beispiel

- [Repository download/fork](https://github.com/signalwerk/IAD.minimal-starter)
- [Node installieren](https://nodejs.org/en/download/)
- in Verzeichnis wechseln `cd ...`
- `npm install` → Installiert die benötigten Komponenten
- `npm run start` → startet für die Entwicklung
- `npm run build` → erzeugt die endgültige Version im Verzeichnis `docs`


--s--

## Grid

- **Disclaimer!** Ich verwende häufig noch `display: flex;` (Flexbox) um IE11 zu unterstützen

- `display: flex;`
- [Visueller Grid-Editor](https://grid.layoutit.com/)


--s--

## Grids

- `float: left;` → früher
- `display: flex;` → [einfache Handhabung](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- `display: grid;` → [neue Möglichkeiten](https://css-tricks.com/snippets/css/complete-guide-grid/)

--s--

## CSS-Grid: Grids-Container

```css
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 3%;
}
```

--s--

## CSS-Grid: Grids-Item


```scss
.column-A {
  grid-column-start: 1;
  grid-column-end: 4;
}
```

```scss
.column-B {
  grid-column-start: 4;
  grid-column-end: span 9;
}
```

--s--
## Aufgabe

--s--

## Auf heute

>> Am **23. 10. 2020** sollen alle Inhalte vorliegen. Zudem soll es einen Entwurf (nicht in HTML nötig) für Mobile und Desktop geben.

--s--
## Austausch


--s--

## Inhalt

* Welche Inhalte?
* Redesign von einer bestehenden Seite?


--s--

## Komponenten

* Navigation
* Teaser zu Artikeln
* Teaser zu Kolumne (Meinung)
* Wetter-Widget
* Werbung
* Herz/Thumbs Up/Like von Artikeln muss bereits im Teaser möglich sein

--s--

## Aufgabe


--s--
