### HF Interactiondesign

# Abschluss

Stefan Huber, Zürich – 2018 <!-- .element: class="footer" -->
--s--
## Übersicht

* **12:45**
* Organisation/News/Agenda
* CSS-Boxmodel
* Schriftmuster
* Variable Fonts (wenn Zeit)
* **16:15** · Ende

--s--
# Organisation
* Zeugnis – 1. Woche nach Ferien (Projektwoche)
* Zeichensetzung – Prüfung zurück

--s--
## Arbeitslast

# Umfrage
* Wie war die Arbeitslast in den letzten Wochen? (😭 💤 ☺️)

--s--
## News
* [→ MacBook Pro – <br>Keyboard Service Program](https://www.apple.com/support/keyboard-service-program-for-macbook-and-macbook-pro/) & [MacBook Pro Update](https://www.cnet.com/news/apple-macbook-pro-gets-a-surprise-update-new-intel-chips-more-ram-true-tone-screen/)
* [→ (noch) keine Uploadfilter und Leistungsschutzrecht](https://netzpolitik.org/2018/chance-fuer-aenderung-eu-parlament-verhindert-durchwinken-von-uploadfiltern-und-leistungsschutzrecht/). <br>Wie weiter mit Urheberrecht?
* [→ Instagram TV – Hochformat, 1h](https://www.bloomberg.com/news/articles/2018-06-20/instagram-adds-mobile-tv-feature-after-reaching-1-billion-users)
* [→ Unicode 11](https://unicode.org/versions/Unicode11.0.0/)
--s--
## Medienzukunft
* [→ Disney & Comcast wollen 21st Century Fox übernehmen](https://www.theringer.com/2018/6/20/17485022/fox-disney-comcast-acquisition-71-billion-bid-netflix)
* [→ AT&T will Time Warner übernehmen](https://www.heise.de/newsticker/meldung/US-Regierung-legt-im-Kartellrechtsstreit-mit-AT-T-Berufung-ein-4109200.html)
* [→ Netflix hat mehr Emmy Nominationen als HBO](https://www.forbes.com/sites/tonifitzgerald/2018/07/12/what-does-it-mean-that-netflix-passed-hbo-in-emmy-nominations/#7e9cb310a9ae)

--s--
## The Unicode Consortium
* [→ Zeichencode Standard](http://www.unicode.org/)
* [→ Sortierung](https://www.unicode.org/reports/tr10/tr10-38.html) [(→ siehe auch Wikipedia)](https://de.wikipedia.org/wiki/Alphabetische_Sortierung)
* [→ Normalisierung – ß = ss](http://unicode.org/reports/tr15/)
* [→ Quelle für Lokalisierung](https://www.unicode.org/cldr/charts/33/summary/root.html)

--s--
## Unicode encoding

Standardisiert, welcher Wert/Zeichencode (Codepoint) welchem Schriftzeichen (Glyph) entspricht.
--s--
## Beispiel

* Wert 65 entspricht einem lateinischen A (Grossbuchstabe)
* Notation meist in Hex `U+0041`
* In HTML in DEC `&#65;` oder HEX `&#x41;`

[→ Unicode Eintrag](http://unicode.org/cldr/utility/character.jsp?a=0041)

--s--
## Vorläufer

* Diverse Standards für verschiedene Betriebsysteme und Sprachregionen
* ASCII diente für die ersten 127 Zeichen von Unicode

--s--
## Unicode 11
* 5. Juli 2018
* 137 374 Zeichen
* 7 neue Sprachen
* Neue Emojis
* [→ Halbe Sterne](https://www.unicode.org/L2/L2016/16230-half-star-unicode.pdf)
* Copyleft symbol

--s--
## Encoding

Beim Encoding wird festgehalten, wie der Codepoint abgespeichert wird.

--s--
## UTF-8 Encoding
### A = BIN `01000001`
<br>
Verbreitete Standards für Unicode:
* [→ UTF-8](https://en.wikipedia.org/wiki/UTF-8)
* UTF-16 (nur verwenden, wenn UTF-8 nicht möglich)
* UTF-32 (nur verwenden, wenn UTF-8 nicht möglich)


 <!-- .element: class="footer" --> siehe auch [→ ASCII-Table](http://ascii-table.com/)

--s--
## HTML Encoding

```HTML
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    <title>title</title>
  </head>
  <body>
    <!-- page content -->
  </body>
</html>
```
 <!-- .element: class="footer" --> siehe auch [→ Verbreitung](https://googleblog.blogspot.com/2012/02/unicode-over-60-percent-of-web.html)

--s--
## Agenda
* 13. – 16. 9. 2018 – [Digital Festival, Zürich](http://digitalfestival.ch/)
* Ferien! 💫


--s--
# CSS-Boxmodel

* [→ Beispiel](https://codepen.io/anon/pen/MBaRbm)
* [Weitere Edge-Cases](https://jonathan-harrell.com/whats-the-deal-with-margin-collapse/)


--s--
# Schriftmuster

--s--
# LAB 2. Semester
--s--
## Rückschau
* Timeline «Medien-/Technologiegeschichte»
* Vortrag Renato Casutt
* DNS
* Papierschriftmuster
* Anatomie einer Schrift
* Medienneutrale Aufbereitung für CMS/Browser
* Separation of Concerns (SoC)
* Zeichensetzung
--s--
## Rückschau
* Gesellschaftliche Themen
  * Digitale Abstimmung
  * Cambride Analytica
  * EU-Datenschutzgrundverordnung
  * Geldspielgesetz (Netzsperren vs. Firewall)
  * Uploadfilter
  * Leistungsschutzrecht
--s--
## Rückschau
* Webfonts
  * Formate
  * Einbinden
  * Lizenzen
  * OpenType Features
  * Variable Fonts
--s--
## Rückschau
* CSS-Boxmodel
* CSS Mediaquery
* CSS Units
--s--
## Eigene Kritik

* Zu viele Themen für zu wenig Zeit
* Konnte Begeisterung für «etwas Gemeinsames» wohl zu wenig aktivieren
* Teils Änderungen wegen Zeitnot
* Zu wenig enge Begleitung beim Projekt
* Entkopplung von anderen Fächern
* Entwicklung des Schriftmusters war eventuell zu offen.
--s--
# Schriftmuster

--s--
## Rückschau

* Gemeinsam ein Schriftmuster
* Wie seine Schrift präsentieren

<!-- .element: class="footer" --> [→ siehe Aufgabe](https://signalwerk.github.io/IAD.LAB.DOC/exercise-webfont/)
--s--
## Anforderung

* Text zum Font & Designer (2000 Zeichen)
* Review von zwei Texten
* Zwei Beispiele von eigenem Text
* Übersichtsbilder
* Gruppenarbeit

Hausaufgaben: 30 Stunden  

--s--
# Positiv

* Gut in Klasse gearbeitet
* Einige sehr initiative Personen
* Schaubeispiele mehrheitlich toll!
* Es gab auch sehr tolle Texte

--s--
# Kritik

* Bei Abgabe laden Bilder nicht
* Falsche Schriften werden geladen
* SVG mit falschen Schriften
* Quellen
* Text mit falscher Zeichensetzung
* Text 1:1 kopiert (Plagiat)
* Text 1:1 kopiert und mit google Translate verhauen

--s--
# Quellen

«Quellen müssen korrekt und vollständig angegeben werden. Ein kritischer Umgang mit der Zuverlässigkeit der Quellen ist gefordert.»

* im Text angezeichnet
* Zitate als solche markeirt


 <!-- .element: class="footer" --> [→ siehe Aufgabe](https://signalwerk.github.io/IAD.LAB.DOC/exercise-webfont/)

--s--
## Links

* Links sind ein wesentlicher Teil des Internets
* Ein Link soll dem menschen Erklären, was ihn bei klick erwartet.


--s--
## Probleme

* Woran hat es glegen?
* Was sagt ihr zur «Klassenarbeit»?
* Wie habt ihr die Arbeit empfunden?

--s--
## LAB-Umfrage

[→ Umfrage](https://umfragen.sfgz.ch/kurs/977946 )

--s--
## Wie weiter?

* Quellen
* Fonts in Übersichtsseite
* sonstiges?

--s--
## Variable Fonts fixen

* gleiche Anzahl Punkte
* gleiche Reihenfolge der Konturen
* Prüfen ob alles stimmt
