## HF Interactiondesign

# Typografische Systeme 

Stefan Huber, Zürich – 2021 <!-- .element: class="footer" -->


<style>
.reveal .embed-container {
  position: relative;
  padding-bottom: 50%;
  height: 0;
  overflow: hidden;
  max-width: 80%;
  height: auto;
}
.reveal .embed-container iframe,
.reveal .embed-container video,
.reveal .embed-container object,
.reveal .embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>



--s--
## Übersicht

* **8:15**
* Rückschau & Auswertung
* Werkstatt & Abgabe
* **10:15** · Präsentation & Ausblick
* **11:45** · Ende


--s--
# Rückschau

* Bildschirme und Fonts 
* Open Source & Communities
* Typografische Systeme
* Technologiegeschichte der Schrift


--s--

## Dokumentation

* [iad2021.signalwerk.ch](https://iad2021.signalwerk.ch/)
* [Cool URIs don't change](https://www.w3.org/Provider/Style/URI)

--s--

## Bildschirme und Fonts


--s--
## Visuelle Grösse
![](../../media/data/device/reading-distance/SizeCalculator.png)

Bildquelle: [Size Calculator](https://sizecalc.com/)
<!-- .element: class="footer" -->



--s--

## Auflösung
# 1920 ✕ 1080 vs. 72 dpi


--s--

## Display Technologien
--s--


## Elektrophoretische Anzeige

![](../../2018/KW25-screens/img/eInk-principle.svg)
--s--
## Geräte mit eInk
![](../../2018/KW25-screens/img/eInk.svg)
--s--
## LCD-Anzeige

![](../../2018/KW25-screens/img/tft-principle.svg)
--s--

## Geräte mit LCD
![](../../2018/KW25-screens/img/tft.svg)

--s--
#### OLED


![](../../2018/KW25-screens/img/OLED_detail.jpg)

Bildquelle: [LG](http://www.lg.com/global/business/information-display/technology-solution/oled)
<!-- .element: class="footer" -->


--s--
#### OLED

<video controls>
  <source src="../../2018/KW25-screens/img/REC016.mp4" type="video/mp4" />
  <source src="../../2018/KW25-screens/img/REC016.webm" type="video/webm" />
</video>


--s--
## Vektor zu Pixel


![Buchstabe a als Outline](../../2018/KW26-rendering/img/normal/Arial_a_outline.png) <!-- .element: class="pic" -->



--s--
## 1-Bit (Bitmap)

![Buchstabe a als Pixel ohne Hinting](../../2018/KW26-rendering/img/normal/Arial_a_no_hint.png) <!-- .element: class="pic" -->

--s--
## Schriftgrösse
![DNS](../../2018/KW11/img/anatomy/SVG/font-lines.svg) <!-- .element: class="pic" -->


- [Fonts · Eigenschaften](https://interaction.signalwerk.ch/articles/font-anatomy/)



--s--
## Auflösung


![Arial as in s/w gerendert](../../2018/KW26-rendering/img/Microsoft_BW_Arial_a_waterfall@10x.png)

Microsoft Arial Unicode – MS-Renderer – S/W – 8 bis 48 Pixel Höhe (PPM) <!-- .element: class="footer" -->

--s--
## Wirkung


![Textworte in Arial als s/w in 8–18px mit Microsoft Renderer](../../2018/KW26-rendering/img/Microsoft_BW_Arial_word_waterfall_8_18px@10x.png)  <!-- .element: class="pic" -->




Microsoft Arial Unicode – MS-Renderer – S/W – 8 bis 18 Pixel Höhe (PPM) <!-- .element: class="footer" -->






--s--
## Fonts im Browser

* Web Safe Fonts (Systemfonts)
* Fonts mitsenden (Webfonts)



--s--
## Moderne Formate – Web Open Font Format
* **2009** [WOFF](https://www.w3.org/TR/WOFF/) (.woff)
  * Komprimierter OpenType-Font
* **2014** [WOFF 2.0](https://www.w3.org/TR/WOFF2/) (.woff2)
  * wie WOFF aber mit [Brotli-Kompression](https://en.wikipedia.org/wiki/Brotli)


[→ sfgz.ch](http://sfgz.ch/)
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



# OpenSource und Communities

--s--

## OpenSource

* Programmcode/Quellcode frei zugänglich
* meist mit dem Recht zu editieren
* häufig mit Pflichten verknüpft

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
## Grosse Projekte

--s--

## Linux
* Linux-Kernel – über 27.7 Mio. Code-Zeilen (LOC) [Stand 2020](https://www.linux.com/news/linux-in-2020-27-8-million-lines-of-code-in-the-kernel-1-3-million-in-systemd/)
* GNU Lizenz
* Wert [~ $ 14 725 449 000](https://en.wikipedia.org/wiki/Linux_kernel#Estimated_cost_to_redevelop) Stand 2018
* [Statistik zu Kernel Contributions](https://www.phoronix.com/scan.php?page=news_item&px=Linux-September-2018-Stats)

--s--
## Warum seine Arbeit verschenken?

* Ideologie
* Andere arbeiten (auch) an meinem Produkt
* Lernen/Austausch
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
## Communities

* Mozilla Foundation
* ISOC/IETF/ICANN/IANA
* Wikipedia
* Digitale Gesellschaft & Piraten Partei



--s--

# Typografische Systeme

--s--

## Grundlagen – Aufgabe


![](https://publisher.signalwerk.ch/design-systems/img/design-tradition.svg) <!-- .element: class="pic" -->


Mehr: <!-- .element: class="footer" --> [Design-Systeme im Web](https://publisher.signalwerk.ch/design-systems/)

--s--

## Grundlagen – Aufgabe


![](https://publisher.signalwerk.ch/design-systems/img/design-web.svg) <!-- .element: class="pic" -->



Mehr: <!-- .element: class="footer" --> [Design-Systeme im Web](https://publisher.signalwerk.ch/design-systems/)

--s--



## Typografische Strukturen


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
## Viewportabhängige CSS-Einheiten
* `vh` – 1% der Fensterhöhe (Viewport)
* `vw` – 1% der Fensterbreite (Viewport)
* `vmin` – 1% der schmaleren Fensterdimension (Viewport)
* `vmax` – 1% der grösseren Fensterdimension (Viewport)

Mehr: <!-- .element: class="footer" --> [Masseinheiten im Web – relative oder absolute Angaben](https://publisher.signalwerk.ch/css-units/)




--s--
## Titelabstufung  
# h1
## h2
### h3
#### h4


--s--
## Titelabstufung

![](https://signalwerk.github.io/IAD.Chart/charts/Headings.svg) <!-- .element: class="pic" -->

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
## OpenType Features 

* Woff 1/2 (Web-Fonts) sind technologisch (beinahe) OpenType-Fonts


--s--
## OpenType Features 

* [Beispiel](https://code.thisarmy.com/fontsinfo/)

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
## Variable Fonts
Features mit Achsen

```CSS
.bsp3  {
  font-feature-settings: "wght" 455;
}
```


--s--

## Flexbox/Grid


- [Flexbox – ausrichten von Elementen im Web ↗](https://publisher.signalwerk.ch/flexbox/)

--s--
## «Spalten»

* `float: left;` → früher
* `display: flex;` → [einfache Handhabung](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* `display: grid;` → [neue Möglichkeiten](https://css-tricks.com/snippets/css/complete-guide-grid/)

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

# Technologiegeschichte der Schrift



--s--
## Römische Capitalis Monumentalis
![](../../2018/KW24-font-technology/img/capitalis/capitalis_monumentalis.jpg)
--s--
## Karolingische Minuskel
![](../../2018/KW24-font-technology/img/carolingianMinuscule/karolingische.jpg)
--s--
## Werkzeug
![](../../2018/KW24-font-technology/img/stroke/ambroise_noordzij.png) <!-- .element: class="pic" -->

--s--
## Johann Gensfleisch zum Gutenberg

![](../../2018/KW24-font-technology/img/typesetting/gutenberg.png) <!-- .element: class="pic" -->

Kupferstich nach André Thevet, 1584. <!-- .element: class="footer" -->

--s--
## Buchproduktion pro Jahr
Vergleich handschriftliche Codices vs. modernem Buch <!-- .element: class="small" -->



![](https://signalwerk.github.io/IAD.Chart/charts/Bookproduction_linear.svg) <!-- .element: class="pic" -->

--s--
## Licht- & Lasersatzsysteme ab ~1965



--s--
## Systeme ohne Monitor
![](../../2018/KW24-font-technology/img/phototypesetting/digiset/digise1.jpg) <!-- .element: class="pic" -->

--s--
## Kathodenstralröhre
![](../../2018/KW24-font-technology/img/phototypesetting/crt/crt2.png) <!-- .element: class="pic" -->


--s--

## Erste WYSIWYG-Systeme ~1980


![](../../2018/KW24-font-technology/img/phototypesetting/scantext/9013683843_df249dd8b6_o.jpg) <!-- .element: class="pic" -->



--s--
## Adobe und Apple · 1984


![](../../2018/KW24-font-technology/img/mac/official/Macintosh-Plus.jpg) <!-- .element: class="pic" -->


LaserWriter <!-- .element: class="footer" -->
--s--
## Kubische Kurven (PostScript)
![](../../2018/KW24-font-technology/img/bezier/bezier_3_big.gif)



--s--
## MacOS 7 – TrueType · 1991
![](../../2018/KW24-font-technology/img/mac/apple/3065804-inline-i-2-how-apple-helped-democratize-type.png)

--s--
## Quadratische Kurven (TrueType)

![](../../2018/KW24-font-technology/img/bezier/bezier_2_big.gif)
--s--



# OpenType

--s--

## Kerning mit OpenType · 1996

![Polo](https://cdn.jsdelivr.net/gh/signalwerk/talk.fonts2019@6d66b94b7dd8bd143cae5c902761916ff0b2e60a/img/kerning/Kerning-class-preview.png) <!-- .element: class="pic" -->


Font: Paratype · PT Sans · Bold <!-- .element: class="footer" -->




--s--
# 2018 · OpenType specification 1.8 


## Variable Fonts

--s--
## Design-Achsen · Variable Fonts


<div class='embed-container'>
  <iframe src="https://signalwerk.github.io/fontkit-demo/?url=AmstelvarAlpha-VF.ttf&hideInput=true&sampleText=HALLO&fontSize=350" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>



Font: Amstelvar Alpha <!-- .element: class="footer" -->


--s--
## Feedback

--s--
## Feedback

* [Board](https://easyretro.io/publicboard/hyaiAgwAytaxRF7N9sbkVFsnBT23/e2c14e98-6d1b-4062-82b9-98aecaee57a5)

--s--
## Feedback

* [Umfrage](https://umfragen.sfgz.ch/kurs/592725)

--s--
## Abgabe

* Repository erstellen
* Dateien hochladen
* Page veröffentlichen (Settings → Pages)
* URL in repository details
* GitHub URL in Slack-Channel

--s--
## Präsentation & Ausblick

* **10:15** · Start
* Kurz zeigen, was man gemacht hat
* responsive?
* Schriftliches Feedback


--s--





--s--

<!-- 

Zeichensetzung?!

https://www.economiesuisse.ch/de/artikel/urg-revision-klarere-grundsaetze-bei-fotografien

HackMD

 -->
