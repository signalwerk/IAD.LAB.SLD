## HF Interactiondesign

# Typografische Systeme

Stefan Huber, Zürich – 2021 <!-- .element: class="footer" -->
--s--



## Übersicht 

- **8:15**
- Typografie & Flexbox/Grid
- Werkstatt
- **11:45** · Ende

--s--

## Übersicht
* **12:45**
- OpenSource
- Werkstatt
* **16:15** · End

--s--
## Typografie



--s--
## Webfonts im Detail


--s--
## Webfonts

* [siehe Slides KW 48 · 4. 12. 2021](https://signalwerk.github.io/IAD.LAB.SLD/data/2021/KW37-2021/#/84)
* [Fonts · Verwendung ↗](https://interaction.signalwerk.ch/articles/font-use/)
* Web Open Font Format (.woff)
* Web Open Font Format 2.0 (.woff2)

--s--
## Browser mit WOFF-Unterstüzung
* Chrome 6+
* Internet Explorer 9+
* Microsoft Edge 1+
* Firefox 3.6+
* Safari 5.1+



[→ Can I use …](https://caniuse.com/#feat=woff)
<!-- .element: class="footer" -->
--s--
## Fonts mitsenden (Webfonts)


```css
@font-face {
  font-family: 'Open Sans';
  src: url('opensans-regular-webfont.woff2') format('woff2'),
  url('opensans-regular-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
```

anwenden
```CSS
p {
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
}
```

[→ Webfont konvertieren](http://www.fontsquirrel.com/tools/webfont-generator)
<!-- .element: class="footer" -->



--s--
## Fonts vom CDN

## CSS

```CSS
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

p {
  font-family: 'Open Sans', sans-serif;
}
```
--s--
## Fonts vom CDN

## HTML

```
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
```
## CSS

```CSS
p {
  font-family: 'Open Sans', sans-serif;
}
```



--s--
## OpenType Features 

* Woff 1/2 (Web-Fonts) sind technologisch (beinahe) OpenType-Fonts


--s--
## OpenType Features 

> Was sind OpenType-Features?


--s--
## OpenType Features 

* [Beispiel](https://code.thisarmy.com/fontsinfo/)

--s--
## Features

* Sollten vom Schriftenhersteller angegeben werden 
* [Beispiel FF Meta](https://www.fontshop.com/families/ff-meta)
* [fontdrop.info](https://fontdrop.info/) hilft
* für [Google-Fonts](https://fonts.google.com/) schwierig …


[→ Veraltete Übersicht für Google-Fonts (bei Font-Download)](https://code.thisarmy.com/fontsinfo/)
<!-- .element: class="footer" -->
--s--
## Einige Features

<div style="font-size: 0.5em">
<table>
<thead>
<tr>
<th>Feature</th>
<th>Englisch</th>
<th>Deutsch</th>
</tr>
</thead>
<tbody>
<tr>
<td>liga</td>
<td>Standard Ligatures</td>
<td>Standard Ligatures</td>
</tr>
<tr>
<td>dlig</td>
<td>Discretionary Ligatures</td>
<td>Bedingte Ligaturen</td>
</tr>
<tr>
<td>lnum</td>
<td>Lining figures</td>
<td>Versalziffern</td>
</tr>
<tr>
<td>onum</td>
<td>Oldstyle figures</td>
<td>Mediävalziffern (Minuskelziffern)</td>
</tr>
<tr>
<td>pnum</td>
<td>Proportional figures</td>
<td>Proportionale Ziffern (nicht gleiche Breite)</td>
</tr>
<tr>
<td>tnum</td>
<td>Tabular figures</td>
<td>Tabellenziffern (gleiche Breite)</td>
</tr>
<tr>
<td>frac</td>
<td>Fractions</td>
<td>Bruchziffern</td>
</tr>
<tr>
<td>smcp</td>
<td>Small caps</td>
<td>Kapitälchen</td>
</tr>
<tr>
<td>ss01–ss20</td>
<td>Stylistic sets</td>
<td>Formatsätze</td>
</tr>
<tr>
<td>sups</td>
<td>Superscript/Superior</td>
<td>Hochgestellt</td>
</tr>
<tr>
<td>subs</td>
<td>Subscript/Infirior</td>
<td>Tiefgestellt</td>
</tr>
<tr>
<td>numr</td>
<td>Numerator</td>
<td>Zähler</td>
</tr>
<tr>
<td>dnom</td>
<td>Denominator</td>
<td>Nenner</td>
</tr>
</tbody>
</table>
</div>



--s--
## CSS-Definition → Feature einschalten
```CSS
.bsp1  {
    font-feature-settings: "frac";
}
```

--s--
## CSS-Definition → Mehrere Feature einschalten
```CSS
.bsp2  {
    font-feature-settings: "pnum", "onum";
}
```

<br>

<div style="font-size: 0.8em">
  <table>
    <thead>
      <tr>
      <th>Feature</th>
      <th>Englisch</th>
      <th>Deutsch</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>lnum</td>
        <td>Lining figures</td>
        <td>Versalziffern</td>
      </tr>
      <tr>
        <td>onum</td>
        <td>Oldstyle figures</td>
        <td>Mediävalziffern (Minuskelziffern)</td>
      </tr>
      <tr>
        <td>pnum</td>
        <td>Proportional figures</td>
        <td>Proportionale Ziffern (nicht gleiche Breite)</td>
      </tr>
      <tr>
        <td>tnum</td>
        <td>Tabular figures</td>
        <td>Tabellenziffern (gleiche Breite)</td>
      </tr>
    </tbody>
  </table>
</div>


--s--

## CSS-Definition → Feature ausschalten
```CSS
.bsp3  {
    font-feature-settings: "liga" 0;
}
```

--s--

## Praxisarbeit

* Verwendet die mitgegebene «Open Sans» (variable font)
* Untersucht den font mit [fontdrop.info](https://fontdrop.info/) 
* Aktiviert entsprechende Features

```css
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300 800; /* anders als non-variable fonts */
  font-stretch: 100%;
  src: url("OpenSans[wght@300..800][subset@latin].woff2")
    format("woff2-variations"); /* anders als non-variable fonts */
}
```
--s--
## Variable Fonts
Features mit 0/1 (aus/ein) 
```CSS
.bsp3  {
    font-feature-settings: "liga" 0;
}
```
--s--
## Variable Fonts
Features mit Achsen

```CSS
.bsp3  {
  font-feature-settings: "wght" 455;
}
```

--s--
## Variable Fonts
Features mit Achsen

```CSS
.bsp3  {
  font-weight: 455; /* wäre auch so möglich */
}
```

--s--

## Flexbox/Grid


- [Flexbox – ausrichten von Elementen im Web ↗](https://publisher.signalwerk.ch/flexbox/)
* «Spalten» in CSS 

--s--
## «Spalten»

* `float: left;` → früher
* `display: flex;` → [einfache Handhabung](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* `display: grid;` → [neue Möglichkeiten](https://css-tricks.com/snippets/css/complete-guide-grid/)

--s--
## Flexbox · HTML

```html
<div class="container-grid">
  <div class="container-col">Spalte 1</div>
  <div class="container-col">Spalte 2</div>
  <div class="container-col">Spalte 3</div>
</div>
```

--s--
## Flexbox · Container

```css
.container-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
```

--s--
## Flexbox · Spalte

```css
.container-col {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 10%;
  max-width: 10%;
}
```
--s--
## Spaltenbreite in %

```css
:root {
  --colums: 3; /* Anzahl Spalten */
  --gutter-space: 3%; /* Spaltenabstands */
  --gutter-count: calc(var(--colums) - 1); /* Anzahl Spaltenabstände */
  --colum-width-1of3: calc(
    (100% - (var(--gutter-count) * var(--gutter-space))) / var(--colums)
  );
}
.container-col {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: var(--colum-width-1of3);
  max-width: var(--colum-width-1of3);
}
```



--s--
## Grid · HTML

```html
<div class="container-grid">
  <div class="container-col">Spalte 1</div>
  <div class="container-col">Spalte 2</div>
  <div class="container-col">Spalte 3</div>
</div>
```


--s--
## Grid · Container



```css
.container-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 3%;
}
```
--s--
## Grid · Spalte



```css
.container-col {
  grid-column: span 1;
}
```

--s--

## Werkstatt

* Update

--s--
# Aufgabe · Update

* Im Haupttext kann ein Heading 2 `<h2>Titel</h2>` eingefügt werden.
* Im Haupttext kann ein Paragraph `<p>… Text …</p>` eingefügt werden.
* Sowohl der Text wie auch der Paragraph fügen sich danach dem Styling der Seite passend.
* Beide Tags benötigen kein weiteres Styling/Klassen/ID, sondern werden richtig gestyled.

--s--
# Hintergründe OpenSource


--s--
## OpenSource was war das…?

--s--
## OpenSource

* Programmcode/Quellcode frei zugänglich
* meist mit dem Recht zu editieren
* häufig mit Pflichten verknüpft

--s--
## Was hat das mit Interactiondesign zu tun?

* Websites sind heute häufig Informatik-Projekte
* Technologie kann verursacht Kosten – dieses Geld fehlt dann für Design und UX

--s--
## Freie Inhalte

* Bilder/Texte/Medien/Auido frei zugänglich
* teils mit dem Recht zu editieren
* häufig mit der Pflicht zur nennung des Autors

--s--
## Hintergrund



--s--
## Zwerge auf den Schultern von Riesen
> «Wenn ich weiter geblickt habe, so deshalb, weil ich auf den Schultern von Riesen stehe.»

**Isaac Newton, 5. Februar 1676**

Geht zurück auf das Gleichnis von Bernhard von Chartres um 1120 <!-- .element: class="footer" -->


--s--
## Richard Stallman

* 1985 GNU Manifesto
* Emacs (text editor)
* GCC (C/C++ compiler)
* Erfinder von copyleft
* «Extremist»
* [Free Software Foundation](https://www.fsf.org/)
* [Video](https://www.youtube.com/watch?v=jUibaPTXSHk)
--s--
## Linus Torvalds
* 1991 – Linux (GNU-Lizenz)
* 2005 – Git (GNU-Lizenz)
* [Video](https://www.youtube.com/watch?v=o8NPllzkFhE)

--s--
## Grosse Projekte
--s--

## Linux
* Linux-Kernel – über 27.7 Mio. Code-Zeilen (LOC) [Stand 2020](https://www.linux.com/news/linux-in-2020-27-8-million-lines-of-code-in-the-kernel-1-3-million-in-systemd/)
* GNU Lizenz
* Wert [~ $14,725,449,000](https://en.wikipedia.org/wiki/Linux_kernel#Estimated_cost_to_redevelop) Stand 2018
* [Statistik zu Kernel Contributions](https://www.phoronix.com/scan.php?page=news_item&px=Linux-September-2018-Stats)

--s--

## Linux
* Linux-Kernel – über 27.7 Mio. Code-Zeilen (LOC) [Stand 2020](https://www.linux.com/news/linux-in-2020-27-8-million-lines-of-code-in-the-kernel-1-3-million-in-systemd/)
* GNU Lizenz
* Wert [~ $ 14 725 449 000](https://en.wikipedia.org/wiki/Linux_kernel#Estimated_cost_to_redevelop) Stand 2018
* [Statistik zu Kernel Contributions](https://www.phoronix.com/scan.php?page=news_item&px=Linux-September-2018-Stats)

--s--
## Sonstige

*	FireFox – über 31 Mio. Code-Zeilen (LOC) [Stand 2020](https://www.openhub.net/p/firefox/analyses/latest/languages_summary)
* [LOC Visualisierung](https://informationisbeautiful.net/visualizations/million-lines-of-code/)

--s--
## Bekannte Projekte/IAD Umfeld

* [GitHub trending](https://github.com/trending/html?since=monthly)
* [w3c](https://w3c.github.io/)
* [Bootstrap](https://github.com/twbs/bootstrap)
* [Free programming books](https://github.com/EbookFoundation/free-programming-books)

--s--
## Es muss nicht gross sein

## [catalog](https://github.com/interactivethings/catalog/) – Interactive Things

--s--
## Warum seine Arbeit verschenken?


--s--
## Warum seine Arbeit verschenken?

* Ideologie
* Andere arbeiten (auch) an meinem Produkt
* Lernen/Austausch

--s--
## Beispiel Facebook

* Das «Produkt» von Facebook ist Werbung/Werbeverkauf
* Die «Produktionsmittel» sind Menschen, die soziale Kontakte auf der Plattform pflegen
* Die Software dient das Produktionsmittel zu betreiben


--s--
## Beispiel Facebook

* Grundlegende Technologien werden zu einer Software zusammengesetzt (PHP, HTML, CSS, JS)
* Wenn die grundlegenden Technologien besser werden, wird auch das Produkt besser

--s--
## Beispiel reactjs

* Was ist reactjs?
* 2011 erstmals in Produktion gesehen
* 2013 als OpenSource veröffentlicht
* über 1500 Contributors
* Lizenz-Hickhack – heute MIT
* [react auf github](https://github.com/facebook/react)

--s--

## Ökosystem von React

* 2015 – [React Native](https://facebook.github.io/react-native/)
* 2015 (2012) – [GraphQL](https://graphql.org/)
--s--
## Was ist «Free Software»?
--s--
## Free?
* Free as in beer
* Free as in freedom of speech
--s--
## Gratis
* Free as in beer
* EN: Free/Gratis
* Freeware (Source-Code nicht verfügbar)

--s--
## Frei
* Free as in freedom of speech
* EN: Free/Libre
* Source-Code verfügbar
* Wenig bis keine Restriktion


--s--
## Urheber
* Der Schöpfer/Autor/Ersteller ist der Urheber
* Schöpfungshöhe muss erreicht sein
* Urheberrecht ist übertragbar
* Verzicht auf Urheberrecht ist möglich
--s--
## Assets-Lizenzen

* Assets (Bilder, Grafiken, Icons) fallen unter das Urheberrecht
* Lizenz Creative Commons Attribution-ShareAlike 4.0 International ([CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/))

- [Rechtslage – ein kleines 1 × 1](https://interaction.signalwerk.ch/articles/legal/)

--s--

## Software-Lizenzen

* Creative commons eignet sich nicht (oder nur sehr eingeschränkt) für Software-Lizenzierung (Distribution nicht klar)


--s--


##  Permissive licenses
## Freizügige Open-Source-Lizenz

* Beispiele: *MIT, BSD, ISC, ...*
* oft **kurz und leicht** zu verstehen
* Grundsätzlich: **Mach was du willst**
* Achtung! **Nie Copyrights entfernen** und zum Teil muss Lizenz mit Software ausgeliefert werden.

--s--

## Share-alike license
## Weitergabe unter gleichen Bedingungen

* Beispiele: *GPL, LGPL*
* Wenn GPL → Code wird auch zu GPL (**virale Lizenz**)
* Gewisse Bedingungen zur Veröffentlichung

--s--
## Lizenzen

* Prüfen was ist mit dem Kunden kompatibel ist
* Klar verständlich machen, was für eine Lizenz für seine eigene Arbeit gilt

--s--
## Die zwei Lager
* Permissive licenses → BSD/MIT

vs

* Share-alike license → GNU/Copyleft


--s--

## Software-Lizenzen

* Copyleft Lizenz (virale Verbreitung)
  * [GNU General Public License version 3.0 (GPLv3)](https://www.gnu.org/licenses/gpl-3.0.en.html)
  * [GNU Lesser General Public License v3.0 (LGPLv3)](https://choosealicense.com/licenses/lgpl-3.0/)
* Sehr freie Lizenzen 
  * [MIT](https://opensource.org/licenses/MIT)
  * [BSD-3](https://opensource.org/licenses/BSD-3-Clause) & [BSD-2](https://opensource.org/licenses/BSD-2-Clause)
  * [Apache](https://opensource.org/licenses/Apache-2.0)


--s--
## Mitarbeiten
* Wenn OpenSource im eigenen Projekt verwendet wird Fehler/Erweiterungen beitragen
* Für gewisse Projekte muss main ein [CLA – Contributor License Agreement](https://github.com/paperjs/paper.js) unterschreiben
* Jeder kann mitarbeiten. Ein Bug-Report ist oft schon motivation und Beitrag für die Entwickler
* Pull Requests können auch für [Kleinigkeiten](https://github.com/frankrausch/Typographizer/pull/10) gemacht werden
--s--
## Stiel
* «when in rome do as the romans do»
* [Allgemeine Richtlinien](https://github.com/prose/prose/blob/master/CONTRIBUTING.md)
* [Sprachliche styleguides](https://www.gatsbyjs.org/docs/gatsby-style-guide/#use-you-as-the-pronoun)
* [Code Style](https://google.github.io/styleguide/jsguide.html)


--s--
## Bug-Reporting

* Reproduzierbarkeit
* [Komplexe Zusammenhänge](https://signalwerk.github.io/css-opentype-substitution/) möglichst genau dokumentieren
* Freundlicher Ton [→ Gegenbeispiel und Korrektur](https://github.com/sass/sass/issues/871#issuecomment-436248915)
--s--
## Beitrag zu OpenSource

* Änderung generalisieren
* Änderung wieder zur Verfügung stellen (upstream contribution)
--s--
## Generalisieren

* Nicht den Sonderfall als Standard setzen
* Konfigurierbar machen
* Bestehende User nicht stören
--s--
## Upsream

* Änderung in privatem Fork machen und testen
* Generalisieren und in seiner Anwendung konsumieren
* Pull Request zum Projekt
* Wenn Pull Request durch ist, wieder Hauptentwicklung konsumieren

--s--
## Eigenes Projekt OpenSource machen

* [Demo](https://github.com/signalwerk/colorlab)
* [Dokumentieren](https://github.com/signalwerk/colorlab/issues/2)
* [Lizenz klären](https://github.com/signalwerk/colorlab/blob/master/LICENSE.txt)
* [Gute URL](https://colorlab.js.org/)

--s--

## Werkstatt

--s--

## Merci

