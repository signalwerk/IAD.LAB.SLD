### HF Interactiondesign

# Fonts · <br>Eigenschaften & Verwendung

Stefan Huber, Zürich – 2018 <!-- .element: class="footer" -->

--s--
## Eierfrage

--s--

## Übersicht – Vormittag

* **12:45**
  * Organisation/News/Agenda
  * Rückschau & Festigung
  * Timeline «Medien-/Technologiegeschichte»
  * Fonts · Eigenschaften & Verwendung
* **16:15** · Ende

--s--
# Organisation

--s--

## Auswertung 1. Semester

--s--
## Module

* es gibt einen Wunsch längere Module zu machen
* Module können durch die Dozierenden bedingt nicht immer verlängert werden
* Wir versuchen unser bestes die Module zu koordinieren. Jedes Thema soll aber mehrfach angeschnitten werden.

--s--
## Semestergebühren

Ob Umfang/Gebühren um 15% gekürzt wird oder nicht ist im Klassendurchschnitt nicht ausschlaggebend.
--s--
## Arbeitssituation

Wechselt den Job, wenn ihr in der Praxis zu wenig digitalen Kommunikation/Interaktion habt!

--s--
## Unterstützung bei Ausbildung

Drei Personen (von 11) werden vom Arbeitgeber unterstütz.


--s--
## Lohngleichheit

### Frauen verdienen 10–20% weniger Lohn! <br>Das geht so nicht!
* [→ Lohnunterschied](https://www.bfs.admin.ch/bfs/de/home/statistiken/arbeit-erwerb/loehne-erwerbseinkommen-arbeitskosten/lohnniveau-schweiz/lohnunterschied.html)
* Wollt ihr wissen, was die anderen verdienen?

--s--
## Sonstiges
* Die Vermittlung kan besser sein
* Welcher Anteil an Technik?
* Welcher Anteil an Gruppenarbeit?
* Mischung aus Teorie und Praxis
* (Zeit-) Planung

--s--
## Semestersitzung
* Zwei Vertreter der Klasse
* Do. 31.5.2018 – 18:00 → Sitzungszimmer 110
--s--
## Technik

* MacOS, Adobe CC und Fonts ok?
* Google Drive ok? → alte Daten?
--s--
## Tag der Schrift

--s--
## News
* [→ Museum für Gestaltung](http://www.museum-gestaltung.ch/de/information/ueber-uns/standorte/ausstellungsstrasse/eroeffnungsfest/)
* [→ Rektorat](https://www.nouvellenoire.ch/)
* Abstimmungen digital/analog
--s--
## Abstimmung (4. März 2018)
Testbetrieb in einigen St. Galler Gemeinden <br>(zusammen mit Genf).

### Das hohe Gut der demokratischen Abstimmung
* Stimmgeheimnis
* Korrektheit
* Nachvollziehbarkeit

<!-- .element: class="footer" --> [Stellungnahme: Verein Coredump
](https://www.coredump.ch/stellungnahme-e-voting-pilot-in-der-gemeinde-rapperswil-jona/)

--s--
## Agenda
* ~~6\. April 2018 HeK~~
* 26.–30. April 2018 [→ The Libre Graphics Meeting](https://libregraphicsmeeting.org/2018/)
* 2.–4. Mai 2018 [→ re:publica](https://re-publica.com/)

--s--
## Entwurf

* Wie entwerft ihr?
* Wie kommt ihr mit der Technik klar?
--s--
## Entwurf
* Vorstellung verschiedener Tools?
  * Indesign PDF → verlinkung
  * Illustrator
  * PSD → Pixelgenau
  * Sketch
  * Adobe XD
  * Code
  * others?


--s--
## Arbeitslast

# Umfrage
* Wie war die Arbeitslast in den letzten Wochen?


--s--
# Rückschau
## Schriftmuster-Analyse


--s--
## Timeline

* Braucht ihr Unterstützung? Gibt es offene Fragen?
  * [→ keine konkreten Daten](https://docs.google.com/spreadsheets/d/1Jqfkhyp_sn_OGEMgknTVqcSZDiEUNrg8o9wfjz_g01k/edit#gid=0)
  * Themen in Gruppen zusammenfassen (Unicode Icons?)

<!-- .element: class="footer" --> [→ Beispiel](https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1Jqfkhyp_sn_OGEMgknTVqcSZDiEUNrg8o9wfjz_g01k&font=Default&lang=en&initial_zoom=2&height=550)
--s--
## Fonts · Eigenschaften & Verwendung
--s--
## Was gibt die Schriftgrösse an?
--s--
## Anatomie einer Schrift
![DNS](./img/anatomy/SVG/font-lines.svg) <!-- .element: class="pic" -->

--s--
## Anatomie einer Schrift

![DNS](./img/anatomy/SVG/font-anatomy-01.svg) <!-- .element: class="pic" -->


--s--
## Anatomie einer Schrift


![DNS](./img/anatomy/SVG/font-anatomy-02.svg) <!-- .element: class="pic" -->


--s--
## Anatomie einer Schrift

![DNS](./img/anatomy/SVG/font-character-forms.svg) <!-- .element: class="pic" -->
--s--
## Grundlegende Eigenschaften


* Serifenschrift | serifenlose Schrift
* Offene Punzen | geschlossene Punzen
* Horizontale oder vertikale orientierung
* ...
--s--
## Heimarbeit

# Präsentation · Schrift


--s--
# Fonts im Web
--s--
## Fonts im Web

* Web Safe Fonts (Systemfonts)
* Fonts mitsenden (Webfonts)
--s--
## Web Safe Fonts (Systemfonts)

```CSS
p {
  font-family: Arial, Helvetica, sans-serif;
}
```

* Schrift ist bei Host installiert
* Fallbacks um mehrere mögliche Schriften ab zu decken

<!-- .element: class="footer" --> [→ sfgz.ch](http://sfgz.ch/)

--s--
## Fonts mitsenden (Webfonts)
* mit Internet Explorer seit 1997 möglich
* 2009 einführung WOFF (Web Open Font Format)

--s--
## Fonts mitsenden (Webfonts)

* Verschiedene Formate
  * .woff2 (2014)
  * .woff
  * .eot
  * andere (svg/otf/fft)

--s--
## Browser mit Webfont-Unterstüzung
* Chrome 4.0+
* Internet Explorer 4+
* Firefox 3.5+
* Safari 3.1+
* Opera 10+

--s--
## Fonts mitsenden (Webfonts)


```css
@font-face {
  font-family: 'Open Sans';
  src: url('opensans-regular-webfont.eot');
  src: url('opensans-regular-webfont.eot?#iefix') format('embedded-opentype'),
  url('opensans-regular-webfont.woff2') format('woff2'),
  url('opensans-regular-webfont.woff') format('woff'),
  url('opensans-regular-webfont.ttf') format('truetype');
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

<!-- .element: class="footer" --> [→ Webfont konvertieren](http://www.fontsquirrel.com/tools/webfont-generator)


--s--
## Fonts vom CDN

### CSS

```CSS
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

p {
  font-family: 'Open Sans', sans-serif;
}
```
--s--
## Fonts vom CDN

### HTML

```
<link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet'>
```
### CSS

```CSS
p {
  font-family: 'Open Sans', sans-serif;
}
```
--s--
## Variable Fonts

### Vorläufer
* [Viewport Sized Typography](https://css-tricks.com/examples/ViewportTypography/)
* [A List Apart – Live font interpolation](http://alistapart.com/d/412/interpolation/)
* [Font‑To‑Width](http://font-to-width.com/)
--s--
## Variable Fonts

* [→ Oktober 2016 Standardisiert](https://blog.typekit.com/2016/09/14/variable-fonts-a-new-kind-of-font-for-flexible-design/)
* [→ Browser Support](https://caniuse.com/#feat=variable-fonts)

--s--
## Variable Fonts

Demo [→ nobotoflex](https://www.axis-praxis.org/specimens/nobotoflex)

```CSS
p {
  font-variation-settings: "wdth" 600, "wght" 200, "opsz" 48;
}
```
--s--
# Fonts beziehen

--s--
## Fonts beziehen

* Kosten mit Kunde klären
* Keine Lizenzgeschäfte?!
* Zeichensatz ausreichend

--s--
## Lizenzen

* Mieten (pro Monat)
* Fonts einmalig kaufen
* Views Kaufen
* Gratis-Fonts
* Fonts erstellen

--s--
## Mieten (pro Monat)
* [fonts.com](https://www.fonts.com/unlimited#pricing)
* [Typekit](https://typekit.com/plans)
--s--
## Fonts einmalig kaufen
* [→ URW++](https://www.urwpp.de/) (zeitlich beschränkt)
* [→ Fontshop](https://www.fontshop.com/)
--s--
## Views Kaufen
* [→ linotype.com](https://www.linotype.com/de/)
--s--
## Gratis-Fonts
* [→ google Fonts](https://fonts.google.com)
* Womit bezahlen wir?
--s--
## Fonts erstellen
* [→ Icon-Fonts](http://fontello.com/)
--s--
## Prsxisarbeit

* Woff ab [→ Fontdatei](https://www.dafont.com/) mit [→ fontsquirrel](https://www.fontsquirrel.com/tools/webfont-generator) erstellen
* [→ Icon-Fonts](http://fontello.com/) erstellen
* HTML erstellen und beide Schriften anwenden

--s--
## Heimarbeit

* 3 Schriftmuster
  * 2 Schrifthersteller
  * redaktioneller Inhalt

--s--
## Präsentation · Schrift
* Dokumentation der Schriftwahl
* Dokumentation der «digitalen Schriftmuster»


--s--
## Medienneutrale Aufbereitung

* Bilder möglichst grosse Auflösung
* Bilder möglichst unkomprimiert
* Vektoren möglichs präzise behalten
* Farbprofile erhalten

--s--
## Hausarbeit
* SVG-Testdatei korrigieren
* 1000 Zeichen zur Schrift verfassen
