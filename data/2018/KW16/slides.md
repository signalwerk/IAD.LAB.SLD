
### HF Interactiondesign

# Zeichensetzung

Stefan Huber, Zürich – 2018 <!-- .element: class="footer" -->
--s--
## Übersicht

* **12:45**
* Organisation/News/Agenda
* Rückschau & Festigung
* Schriftvorstellung
* Zeichensetzung
* Navigation
* **16:15** · Ende

--s--
# Organisation
--s--
## DIY

# Bitte bringt Material zurück.

--s--
## Arbeitslast

# Umfrage
* Wie war die Arbeitslast in den letzten Wochen? (😭 💤 ☺️)

--s--
## News

* [siroop](https://www.blick.ch/news/wirtschaft/coop-uebernimmt-komplett-swisscom-gibt-onlineshop-siroop-ch-den-schuh-id8244357.html)
* [Google-Fonts – Koreanisch](https://googlefonts.github.io/korean/)
* [1.1.1.1](https://1.1.1.1/) – [9.9.9.9](https://www.quad9.net/) – [8.8.8.8](https://en.wikipedia.org/wiki/Google_Public_DNS)
* [Telegram vs. Russia ](https://arstechnica.com/information-technology/2018/04/in-effort-to-shut-down-telegram-russia-blocks-amazon-google-network-addresses/)

--s--
## Agenda
* [Protest! Widerstand im Plakat](https://museum-gestaltung.ch/en/ausstellung/protest/)

--s--
# Rückschau

--s--
## Tag der Schrift

--s--
## ICC-Farbprofile

--s--
## Medienneutrale Aufbereitung für CMS

* Bilder möglichst grosse Auflösung
* Bilder möglichst unkomprimiert
* Vektoren möglichs präzise behalten
* Farbprofile erhalten

--s--
## Medienneutrale Aufbereitung für Browser

* Bilder möglichst passende Auflösung
* Bilder möglichst idealer Kompromiss zwischen Kompression und Qualität
* Farbprofile...

--s--
## ICC-Farbprofile im Browser

* ICC-Profile werden unterstützt
* Meist ergibt es (noch) keinen Sinn
* sRGB verwenden (ohne Profil einbetten)
* Thema Farben kommt noch (allenfalls sogar dieses Semester ein Gast)


--s--
## Separation of Concerns (SoC)

In der Informatik wird als «Separation of Concerns» (~ Trennung der Verantwortlichkeiten) ein Prinzip zur Trennung eines Programms in verschiedene Teile benannt, so dass jeder Teile ein einzelnes Anliegen adressiert.

--s--
## Separation of Concerns (SoC)

* Ein Backofen und eine Uhr sollten getrennt funktionieren
* Eine Uhr und das Stromnetz sollten getrennt funktionieren

--s--
## SoC – Beispiel Website

### Gängige Unterteilung
* HTML → Inhalt (Semantik)
* CSS → Gestalt
* JS → Interaktion

--s--
## SoC – Beispiel Website

### Alternative Unterteilung
* Button
* Text
* Eingabeformular

<!-- .element: class="footer" -->  [→ Tweet Michele Bertoli](https://twitter.com/MicheleBertoli/status/868078729662279680)
--s--
# Schriftvorstellung

## Jede Person stellt Ihren Font vor und erzählt über Designer & Design
--s--
## Hausarbeit

* 1000 Zeichen zu Designer/Foundry (nächstes mal Vorstellung)
* Beispiel-Website(n) suchen mit eigener Schrift mit pro/con

--s--
## Hausarbeit

### Github
* Clone
* Branch
* Push
* PR

--s--
## OpenType Features

--s--
### Features

* Müssen vom Schriftenhersteller angegeben werden
* Try & error
--s--
### Features

<div style="font-size: 0.6em">
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
### CSS-Definition → Feature einschalten
```CSS
.bsp1  {
    font-feature-settings: "frac";
}
```

--s--
### CSS-Definition → Mehrere Feature einschalten
```CSS
.bsp2  {
    font-feature-settings: "lnum", "onum";
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
### CSS-Definition → Feature ausschalten
```CSS
.bsp3  {
    font-feature-settings: "liga" 0;
}
```
--s--
# Zeichensetzung
--s--
## Anführungszeichen
# In der Schweiz nur so: «Zitat»

<br>

# «Ich lese die Site ‹Typo-Nerd› täglich.»

--s--
## Ziffer-Leerzeichen
# Fr. 10.–
# Fr.  9.–
#### (Fr.·9.–)
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
#### (nicht manuell einfügen)

--s--
## Zeichensetzung · Praxisarbeit

* [→ Webtypo Wiki](https://github.com/logrinto/webtypo/wiki)

--s--
## Prüfung

# Nächstes mal Prüfung über Zeichensetzung!
* HTML5 Dokumnent erstellen – minimal!
* CSS extern erstellen
* Schrift in CSS einbetten
* Text gemäss Vorlage setzen

--s--
## Hausarbeit
* Fact-Check für Partner
* Zwei Schriftmuster (HTML) abgeben – Streng & Frei
* Zeichensetzung – Prüfung
--s--
# Merci
--s--
