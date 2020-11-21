

<style>


.reveal div.example {
  background-color: #ddd;

  padding-top: 0.7rem;
  padding-right: 1.2rem;
  padding-bottom: 0.9rem;
  padding-left: 1.2rem;

  margin-top: 1rem;
  margin-bottom: .3rem;
}

.reveal div.example--h1 {
  font-size: 2rem;
}

.reveal div.example--rtl {
  text-align: right;
}

</style>


### HF Interactiondesign

# Ideation – <br />Inputs, Erarbeitung und Austausch

Stefan Huber, Zürich – 2020 <!-- .element: class="footer" -->
--s--
## Übersicht

* **8:15**
* Warm up
* Lokalisierung · Internationalisierung
* Erste Übung · Kalender
* **11:45** · Ende

--s--
## Übersicht

* **12:45**
* Zweite Übung
* Feedback
* **16:15** · Ende

--s--
## Card balance

* Ersatz für «Tag der Schrift»

--s--
## «Lernziele»

* UI-Pattern hinterfragen
* UI Ideation · Try. **Fail.** Learn. Repeat.
* UI-Pattern anwenden
* Have fun
* Dokumentieren

--s--

## Warm up


--s--

# Progress

--s--
## Try. 15 min · Einzelarbeit · breakout rooms

* Erstelle ein [Google-Spreadsheet](https://www.google.com/sheets/about/)
* Formatiere alle Zellen etwa **quadratisch**
* Zeichne **drei** unterschiedliche Versionen eines «UI-Elemente», welches einen **Fortschritt** von etwa 60 % anzeigt
* Pro Element dürfen maximal **zwei Farben verwendet** werden
* 📄 Screenshot je Version mit Name und Überlegung in [HackMD](https://hackmd.io/kEx4mFC3ROGLoJGiznlcfg)

--s--
# 🤷‍
* Was sind zwei Farben?


--s--
## Fail.

* Oh nooo 😱 unsere Website ist in Hebräisch
* Und «er» ist erst noch [Farbenblind](https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Color_blindness.png/660px-Color_blindness.png)


--s--
## Learn.
--s--
## Laufrichtung des Textes
--s--
## left to right (ltr) und right to left (rtl)


<div class="example example--h1 example--rtl">
עברית
</div>
Hebräisch ist eine häufig verwendete rtl Sprache



(Übersetzung von Beispiel: Hebräisch)<!-- .element: class="footer" -->

--s--


## Beispiel · ltr/rtl

* [Twitter · Laufrichtung links nach rechts](https://twitter.com/sfgzzh?lang=de)
* [Twitter · Laufrichtung rechts nach links](https://twitter.com/sfgzzh?lang=ar)

--s--

## Vertikale Laufrichtungen

* [Beispiel MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode)
--s--



## Laufrichtung = Ordnung

* **v.l.n.r:** Hans, Verena, Karl, Susanne
* Zugverbindung: Zürich – Olten – Bern


--s--
## Sprache = Ordnung


--s--


## Sortierung – Deutscher Sprachraum

* DIN 5007 Variante 1 = Lexikon
* DIN 5007 Variante 2 = Telefonbuch
* Österreichische Sortierung (Telefonbuch)
--s--

## DIN 5007 Variante 1
* Göbel
* Goethe
* Goldmann
* Göthe
* Götz

**ö = o**

--s--

## DIN 5007 Variante 2
* Göbel
* Goethe
* Göthe
* Götz
* Goldmann



**ö = oe**
--s--

## Österreichische Sortierung
* Goethe
* Goldmann
* Göbel
* Göthe
* Götz


**ö folgt auf o**


--s--

## Ordnung in Orten


--s--

## Strassenlogik & Navigation

* Himmelsrichtungen
* Strassennummern

<style>
.reveal div.map-responsive{
    overflow:hidden;
    padding-bottom:55%;
    position:relative;
    height:0;
}
.reveal div.map-responsive iframe{
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
}
</style>





--s--

### Beispiel New York (Manhattan) · Av, Str


<div class="map-responsive">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6043.751152669622!2d-73.95981316386695!3d40.76476126977315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C+New+York%2C+NY%2C+USA!5e0!3m2!1sen!2sch!4v1553908088407!5m2!1sen!2sch" frameborder="0" style="border:0" allowfullscreen></iframe>
</div>

--s--

### Beispiel Washington · ABC, 123

<div class="map-responsive">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.088055169129!2d-77.02333333422055!3d38.89910164126649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C+DC%2C+USA!5e0!3m2!1sen!2sch!4v1553907503329!5m2!1sen!2sch" frameborder="0" style="border:0" allowfullscreen></iframe>
</div>




--s--

## Check für Farbenblinde

--s--

## Repeat. · Gruppe · breakout rooms

* Farben: Weiss/Schwarz
* Muss für RTL und LTR genau gleich funktionieren
* Zwei Versionen pro Gruppe
* 📄 Screenshot mit Name und Überlegung in [HackMD](https://hackmd.io/kEx4mFC3ROGLoJGiznlcfg)



--s--
# Lokalisierung · Internationalisierung

--s--
## Lokalisierung (l10n)

Mit «Lokalisierung» meint man den Vorgang, wie man Content und Produkte **an einen Kulturkreis anpasst**.

--s--
## Lokalisierung (l10n)

* Sprache
* Wähnrung
* Kulturelle Referenzen
* Farben
* Zeitangaben

--s--

## Internationalisierung (i18n)


Bei der «Internationalisierung» geht es darum **ein System oder Produkt so zu gestalten**, dass später **eine Lokalisierung möglich** ist.
--s--
## Internationalisierung (i18n)

* Dimensionen ermöglichen
* Fallbacks
* Templating

--s--

## Text

* Was habt Ihr für Erfahrungen gemacht?
* Andere Sprachen?
* Andere Kulturkreise?

--s--
## Text – Dimensionen

--s--

![](../../2019/KW12/img/text/skyscanner.png) <!-- .element: class="pic" -->

Quelle: [skyscanner](https://www.skyscanner.ch)
<!-- .element: class="footer" -->
--s--

## Text – Individualisierung
![](../../2019/KW12/img/text/macOS_10.14.png) <!-- .element: class="pic" -->


--s--


## Unicode

Das Unicode Konsortium wurde geschaffen um eine Standardisierung zu erreichen, welcher **Wert/Zeichencode (Codepoint)** welchem **Schriftzeichen (Glyph)** entspricht.

--s--

## Vorläufer
* Diverse Standards für verschiedene Betriebsysteme und Sprachregionen
* [ASCII](http://ascii-table.com/) diente für die ersten 127 Zeichen des späteren Unicode
--s--

## Unicode Version 1 · Oktober 1991
* 7161 Zeichen
* 24 Schriftsysteme
--s--

## Unicode Version 13 · März 2020
* 143 859 Zeichen
* 154 Schriftsysteme
--s--


## Beispiel

* Wert 65 entspricht einem lateinischen A (Grossbuchstabe)
* Notation meist in Hex `U+0041`
* In HTML in DEC `&#65;` oder HEX `&#x41;` geschrieben.
* [Unicode Eintrag für A](http://unicode.org/cldr/utility/character.jsp?a=0041)

--s--

## Encoding

Beim Encoding wird festgehalten, wie der Codepoint abgespeichert wird.

### Verbreitete Encodings für Unicode
* [UTF-8](https://en.wikipedia.org/wiki/UTF-8)
* UTF-16 (nur verwenden, wenn UTF-8 nicht möglich)
* UTF-32 (nur verwenden, wenn UTF-8 nicht möglich)

### Beispiel
* A = BIN `01000001` in UTF-8 Encoding

--s--

## Falsches Encoding
<div class="example example--h1">
Wörter → Wˆrter

</div>
Encoding «Windows Latin 1» als «Mac OS Roman» interpretiert.
--s--
## Fehlende Glyphen – replacement character

<div class="example example--h1">
W□rter – W�rter
</div>
--s--

## Noto
* [Google-Font Noto](https://www.google.com/get/noto/)
* Ziel: alle Zeichen des Unicode-Standards
* «No Tofu»
* «replacement character» □ = Tofu

--s--


## Übersetzungen

* Manuell
* Maschninell

--s--


## Schreibweise


--s--

## ß oder ss
<div class="example example--h1">
Grösse: 80 m <br />
Größe: 80 m
</div>

--s--

## US oder UK
<div class="example example--h1">
color gray <br />
colour grey
</div>

--s--

## Vergleiche & Bezüge

--s--
## Saarland

<div class="example example--h1">
«… ist etwa doppelt so groß wie das Saarland.»
</div>
~ 2570 km²

--s--

## Vorwissen


<div class="example example--h1">
«Noch während der chinesischen Kulturrevolution …»
</div>
~ 1966 – 1976
--s--
## Vorwissen

<div class="example example--h1">
«Noch während dem 2. Weltkrieg …»
</div>
~ 1939 – 1945

--s--


## Typografie


--s--

## Schweiz

<div class="example example--h1">
«Hallo Welt!»
</div>

<div class="example example--h1">
«Ich lese die Site ‹Typo-Nerd› täglich.»
</div>
--s--

## Deutschland

<div class="example example--h1">
„Hallo Welt!“  
</div>

<div class="example example--h1">
„Ich lese die Site ‚Typo-Nerd‘ täglich.“
</div>
--s--


## Französisch

<div class="example example--h1">
« Bonjour ! »  
</div>

<div class="example example--h1">
Jean a dit : « C'est la ‹ morale du film › »
</div>

--s--

## Englisch

<div class="example example--h1">
“The best is yet to come.”
</div>



<div class="example example--h1">
‘The best is yet to come.’
</div>

--s--

## Personennamen & Titel


![](../../2019/KW12/img/text/titel-small.png)

Beispiel der [Wiener Staatsoper](https://www.wiener-staatsoper.at/)
<!-- .element: class="footer" -->

--s--

## Masseinheiten

* [Internationales Einheitensystem (SI)](https://de.wikipedia.org/wiki/Internationales_Einheitensystem)
* Ausser Myanmar, Liberia und die USA
--s--
## Wie gross seit Ihr?

> “I'm five and a half foot tall.”

--s--
## US Längenmass
* 1 Punkt (DTP) = ~0.3527 mm
* 72 Punkt (DTP) = 1 Zoll
* 1 Zoll = 2.54 cm
* 1 Fuss = 12 Zoll = 30.48 cm
* 1 Meile = 63 360 Zoll = ~1.61 km

--s--

## Papiergrössen

### US-Letter
* 8.5 × 11 Zoll =  215.9 × 279.4 mm

### A4
* 210 × 297 mm
--s--
## Papiergrössen


![Papiergrössen](../../2019/KW13/img/SVG/letter-size.svg)

--s--
## Temperatur
* Welt – Grad Celsius (°C)
* USA – Grad Fahrenheit (°F)
--s--
## Zeit

* Zeit ist sehr Komplex
* Bitte nie selber etwas basteln. Immer Programm-Bibliotheken benutzen!

--s--

## 24-Stunden oder AM/PM

* AM/PM wird häufig in englischsprachigen Ländern verwendet
* Lateinamerika verwendet häufig AM/PM

--s--
## AM/PM Quiz

9:00 AM
--s--
## AM/PM Quiz

12:00 AM
--s--
## AM/PM Quiz

9:00 PM
--s--
## AM/PM Quiz

12:00 PM
--s--
## AM/PM

| AM/PM | [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) |
|-------|-----|
| 11:59 AM | 11:59 |
| 12:00 PM | 12:00 |
| 11:59 PM | 23:59 |
| 12:00 AM | 24:00 |

--s--

## Schaltsekunde


```txt
31.12.2011 23:59:59
31.12.2011 23:59:60 ← Schaltsekunde
01.01.2012 00:00:00
```

* Keine Logik
* Gewisse Firmen: über einen Tag verteilte Schaltsekunde


--s--

## Zeitzonen


![Zeitzonen](https://upload.wikimedia.org/wikipedia/commons/8/88/World_Time_Zones_Map.png) <!-- .element: class="pic" -->

Quelle: [Wikipedia](https://en.wikipedia.org/wiki/File:World_Time_Zones_Map.png)
<!-- .element: class="footer" -->
--s--
### Zeitzonen

* Versuch den Sonnenstand zu kompensieren
* Regionen/politische Einheiten zum Teil zusammen (China/Afganistan «Zeitsprung»)
* Können temporär ändern (Jahr 2000 Olymischen Sommerspiele in Australien)


--s--
## Try. 30 min · Gruppe · breakout rooms

* 📄 Name und Recherche in [HackMD](https://hackmd.io/kEx4mFC3ROGLoJGiznlcfg)
* Wireframe
* Macht eine Kalenderansicht eines Tages
* Darin eingetragen ein Flug von Zürich nach London
  * Flug-Start: 13:15 Uhr (Zürich)
  * Flug-End: 13:45 Uhr (London)
* 📄 Screenshot mit Name und Überlegung in [HackMD](https://hackmd.io/kEx4mFC3ROGLoJGiznlcfg)



--s--

## Learn.

--s--


## UTC – Coordinated Universal Time
* Seit 1884 [Nullmeridian](https://de.wikipedia.org/wiki/Nullmeridian) durch Greenwich (England)
* Seit 1972 Koordinierten Weltzeit genannt (UTC – Coordinated Universal Time) davor Greenwich Mean Time (GMT)

--s--
### UTC – Coordinated Universal Time

![Nullmeridian](https://upload.wikimedia.org/wikipedia/commons/e/e2/Breitenkreis-und-Nullmeridian.png)

Quelle: [Wikipedia](https://de.wikipedia.org/wiki/Nullmeridian)
<!-- .element: class="footer" -->
--s--

## CET – Central European Time
* Mitteleuropäische Zeit (MEZ) oder Central European Time (CET)
* Für Europa von zentraler Bedeutung
* Auch UTC+1
--s--
### CET – Central European Time

![](https://upload.wikimedia.org/wikipedia/commons/7/71/Time_zones_of_Europe.svg) <!-- .element: class="pic" -->

Quelle: [Wikipedia](https://de.wikipedia.org/wiki/Mitteleurop%C3%A4ische_Zeit)
<!-- .element: class="footer" -->
--s--

## Zeitzonen der USA
* [insgesammt 11 Zeitzonen](https://de.wikipedia.org/wiki/Zeitzonen_in_den_Vereinigten_Staaten)
* vier Zeitzonen auf dem zusammenhängenden Festlandgebiet
  * Eastern Time Zone – UTC−05:00
  * Central Time Zone – UTC−06:00
  * Mountain Time Zone – UTC−07:00
  * Pacific Time Zone – UTC−08:00
--s--
### Zeitzonen der USA

![](https://upload.wikimedia.org/wikipedia/commons/3/32/US-Timezones-post-2007.png) <!-- .element: class="pic" -->


Quelle: [Wikipedia](https://en.wikipedia.org/wiki/File:US-Timezones-post-2007.png)
<!-- .element: class="footer" -->
--s--

## Computer & Zeitzonen

* Server haben meist keine Zeitzone nach der Installation (UTC). Muss manuell eingestellt werden.
* Consumer-Geräte versuchen die Zeitzone meist zu erraten/ermitteln



--s--


## Sommerzeit

![](https://upload.wikimedia.org/wikipedia/commons/1/16/DST_Countries_Map.png) <!-- .element: class="pic" -->


Quelle: [Wikipedia](https://en.wikipedia.org/wiki/Daylight_saving_time)
<!-- .element: class="footer" -->

--s--
## EU

* Hmmmm…

--s--

## In welche Richtung wird gedreht?


--s--
## Merkhilfe

> spring forward

> fall back

--s--

## Fail?

--s--
## Review
--s--

## Let's Fail!



--s--

## Repeat. · Gruppe · breakout rooms

* Wireframe
* Kalenderansicht umbauen zur Darstellung der Dauer
* Kalenderdarstellung ergänzt um zwei Termine
  * A – Start: 27. 10. 2024 – 0:59 Uhr (Zürich)
  * A – End: 27. 10. 2024 – 2:01 Uhr (Zürich)
  * B – Start: 27. 10. 2024 – 2:59 Uhr (Zürich)
  * B – End: 27. 10. 2024 – 3:01 Uhr (Zürich)
* 📄 Screenshot mit Name und Überlegung in [HackMD](https://hackmd.io/kEx4mFC3ROGLoJGiznlcfg)

--s--


## Learn.

--s--

## Datum & Kalender
* Wir verwenden den [gregorianischen Kalender](https://de.wikipedia.org/wiki/Gregorianischer_Kalender)
* Seit 1582 von Papst Gregor XIII verordnet

--s--

## Jahr-2000-Problem

Kann sich noch jemand erinnern?
--s--
## Jahr-2000-Problem
* Schaltjahr falsch berechnet
* nur zwei Jahreszahlen statt vier gespeichert
  * 99 = 1999
  * 00 = 1900 statt 2000
--s--

## Regeln für Schaltjahre
* 1\. Regel: Jahreszahl durch vier ganzzahlig teilbaren = Schaltjahr
* 2\. Regel: Jahreszahl durch 100 ganzzahlig teilbaren = kein Schaltjahr (1. Regel überlegen)
* 3\. Regel: Jahreszahl durch 400 ganzzahlig teilbaren = Schaltjahr (2. Regel überlegen)
--s--

## Numerische Notation von Daten

| Standard | Format                     | Beispiel               |
|----------|----------------------------|------------------------|
| USA      | MM/DD/YYYY                 | 03/29/2000             |
| ISO 8601 | YYYY-MM-DD                 | 2000-03-29             |
| DIN 5008 | YYYY-MM-DD oder DD.MM.YYYY | 2000-03-29 / 29.3.2000 |
--s--

## Unix-Timestamp
* Sekunden seit 1. Januar 1970 um 0:00 Uhr
* Die Zahl kann ein Vorzeichen (Minus) haben
--s--

## Unix-Timestamp Beispiele
* 31. Dezember 1999, 23:59:59 = 946 684 799 000
* 22. November 1963, 18:30:00 = –192 778 200
--s--

## Jahr-2038-Problem

![](https://upload.wikimedia.org/wikipedia/commons/e/e9/Year_2038_problem.gif)

Quelle: [Wikipedia](https://de.wikipedia.org/wiki/Jahr-2038-Problem)
<!-- .element: class="footer" -->
--s--

# Und sonst?


--s--

## Zahlungsverkehr
--s--


## Besteuerung
* Meist Steuer im Land des Konsumenten/Käufers
* Lokale Regulierung beachten
--s--







## Mehrwertsteuer in der Schweiz (MwSt)
* Drei Mehrwertsteuersätze
* oder befreit von Mehrwertsteuer
--s--

## Mehrwertsteuer Beispiel
![MwSt](../../2019/KW13/img/mwst.png)

--s--

## Bankverkehr
* wenn möglich IBAN (International Bank Account Number) verwenden
* IBAN kann aber auch geheim sein (Deutschland)

--s--

## Checks
* USA sehr verbreitet
--s--

## PayPal
* Gebühren fallen an (für Geschäftskunden)
* Meistverbreitetes rein elektronisches Zahlungsmittel

--s--

## Kreditkarten für Online-Shops

* Braucht Zahlungsprozessor
* Gebühren
* Bitte Kreditkarten-Nummern nicht speichern (ausser ihr seit absolute Profis)
--s--
## Kreditkarten für Online-Shops

* [Saferpay/SIX](https://www.six-payment-services.com/en/site/e-commerce/solutions/paymentsolution.html) (im Schweizer Markt)
* [datatrans](https://www.datatrans.ch/)
* [Stripe](https://stripe.com/ch)
* [shopify](https://www.shopify.de/zahlungsportal/schweiz)
--s--

## Twint
* Nur in der Schweiz
* Nur für Personen mit Smartphones
--s--

## Apple-Pay & Google Pay
* Nur für Personen mit Smartphones
* Smartphone bildet in Hardware kontaktlose Karte nach

--s--

## Geografie
--s--

## Kartenprojektion

* Meist [Mercator-Projektion](https://de.wikipedia.org/wiki/Mercator-Projektion)
* Verzerrung beachten
--s--
## Mercator-Projektion


![Mercator-Projektionen](https://upload.wikimedia.org/wikipedia/commons/f/fa/Mercator-proj.png) <!-- .element: class="pic" -->


Quelle: [Wikipedia](https://de.wikipedia.org/wiki/Mercator-Projektion#/media/File:Mercator-proj.png)
<!-- .element: class="footer" -->
--s--
## Mercator-Projektion – Verzerrung


![](https://upload.wikimedia.org/wikipedia/commons/e/ee/Worlds_animate.gif) <!-- .element: class="pic" -->

Quelle: [Wikipedia](https://en.wikipedia.org/wiki/Mercator_projection#/media/File:Worlds_animate.gif)
<!-- .element: class="footer" -->
--s--

## Alternativen

* [Alternative Kartenprojektionen](https://en.wikipedia.org/wiki/List_of_map_projections)
* [XKCD](https://xkcd.com/977/)
--s--
## Postadressen


### Beispiel für England
```txt
Name
159 Brick Lane
London E1 6SB
```
### Beispiel für USA

```txt
Name
3605 N Damen Ave, Rear
60618 Chicago, IL
```
--s--

### Stockwerke

![](../../2019/KW13/img/SVG/storey.svg)
--s--

## Übung 2

--s--

## Dinge die man immer wieder macht…


--s--

## Try. 15 – 20 min · Gruppe · breakout rooms

* 📄 Name und Recherche in [HackMD](https://hackmd.io/kEx4mFC3ROGLoJGiznlcfg)
* Wählt ein UI-Element aus der Liste und entwerft dies als Wireframe
  * Sprachwähler
  * Ein-/Aus-Schalter für Darkmode
  * Einkaufskorb in CHF & Umrechnung in EUR
* 📄 Screenshot mit Name und Überlegung in [HackMD](https://hackmd.io/kEx4mFC3ROGLoJGiznlcfg)

--s--

## Fail? Try to change! Try to Fail!


--s--
## Kreativitätstechniken
* [Morphologischer Kasten](https://de.wikipedia.org/wiki/Morphologische_Analyse_(Kreativit%C3%A4tstechnik))
* [Walt-Disney-Methode](https://de.wikipedia.org/wiki/Walt-Disney-Methode)
* [BarCamp](https://de.wikipedia.org/wiki/Barcamp)

--s--
## Oblique Strategies

* **1975** · erste Publikation
* **Brian Eno** – Musikproduzent, Künstler, Musiker
* **Peter Schmidt** – Künstler, Musiker
* Die Karten werden wohl nicht passen!
* [Online-Version](http://brianeno.needsyourhelp.org/)
* [Kaufen](https://www.enoshop.co.uk/product/oblique-strategies)

--s--
## Learn?

* Lasst uns «Learn» später besprechen
* Die Karte ist nun das «Learn»

--s--
## Repeat! · Gruppe · breakout rooms

* [Zieht **eine** Karte](http://brianeno.needsyourhelp.org/)
* Passt die bisher gefundene Lösung an
* 📄 Screenshot mit Name, **Text** und Überlegung in [HackMD](https://hackmd.io/kEx4mFC3ROGLoJGiznlcfg)

--s--
## Learn

* Sprachwähler
* Ein-/Aus-Schalter für Darkmode
* Einkaufskorb in CHF & Umrechnung in EUR


--s--

## Feedback

* Gruppenarbeit?
* Kleine «Experimente»?
* Doku?

--s--

## Danke
