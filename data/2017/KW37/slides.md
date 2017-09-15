
### HF Interactiondesign
# Internet 1×1



Stefan Huber, Zürich – 2017 <!-- .element: class="footer" -->
--s--
## News
* [Apple Keynote](https://www.apple.com/)
* iPhone X · animo
  * [Technologie](https://www.youtube.com/watch?v=F-N1CLArUUQ)
  * [Beispiel](https://www.youtube.com/watch?v=7a58ZH63EU0)
  * [Microsoft Kinect](https://en.wikipedia.org/wiki/Kinect)
  * [Z-Information](https://www.youtube.com/watch?v=uq9SEJxZiUg)
  * Z-Information (Depth-of-Field) seit iPhone 7 Plus
--s--
## Agenda
* [Digital Festival](http://digitalfestival.ch/)
* [ZHdK Highlights](https://www.zhdk.ch/veranstaltung/32483)
--s--
## Krankheit & Abwesenheit
* Koordination unter den Studierenden
* Material/Links weiter geben
* Wo nötig Dozierende anfragen
--s--
# Rückschau
--s--
## Github.com
* Versionsverwaltung
* Technologie: git
* [→ Wiki](https://github.com/logrinto/webtypo/wiki)
  * Wolfgang Schoeck – bitte Einladung annehmen
  * Marc Hatt – bitte Einladung annehmen
* [→ Issues](https://github.com/logrinto/IAD2017/issues)
* Pull Requests (mehr Infos heute)
--s--
## Kontakte & Passworte
* [→ Online Kontakte](https://logrinto.github.io/IAD2017.students/)
  * Pascale – bitte nachreichen
--s--
## Rückschau Dokumente Strukturieren
--s--
## Wo startet und wo endet Tag
Zum Teil nicht ganz einfach zu unterscheiden.

<br>

## Beispiel
* ! Start  ! Party ! more Party  

oder gar
* ! Start!  ! Party! ! more Party!
--s--
## Escaping

* Zeichen die Inhalt sind, aber als Strukturierung kollidieren

<br>

## Beispiel
* `{Titel}` <br>→ `{` `}` = Strukturierung  
* `{Schnautzklammern sind: {}}` <br>→ `{` `}` = Strukturierung oder Inhalt
--s--
## Weissraum
* Wo steht eine Blindzeile? Wo ein Wortabstand?

<br>

## Beispiel
{Titel}(Text)  
--s--
## HTML 1×1
--s--
## Wenige Regeln
* Inhalt steht zwischen zwei Tags (`<p>`Inhalt`</p>`)
* Ein öffnender Tag am Anfang vom Inhalt (`<p>`)
* Ein schliessender Tag am Ende vom Inhalt (`</p>`)
* ...
--s--
## Simple Tags

* `<p>`...`</p>` = Paragraph (Textabschnitt)
* `<h1>`...`</h1>` = Heading 1 (Titel 1. Stufe)
* `<ul>`...`</ul>` = Unordered List (Liste ungeordnet)
* `<li>`...`</li>`  =  List Item (Listenelement)
* ...
--s--
## Escaping im Inhalt

* `<`  wird zu `&lt;`
* `>`  wird zu `&gt;`
* `&`  wird zu `&amp;`
* ...

--s--
## Beispiel

```
<h1>Titel</h1>
<p>Text</p>
<ul>
  <li>Eintrag A</li>
  <li>Eintrag B</li>
</ul>
```
--s--
## «HTML-Rumpf»
```
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    <title>Test</title>
  </head>
  <body>
    ...
  </body>
</html>
```
--s--
# Go online mit Github
--s--
## Arbeitslast

# Umfrage
* Wie war die Arbeitslast die letzten (KW36 – KW37) Wochen?

--s--
# Und heute?

--s--
## Übersicht – Nachmittag

* **12:45**
  * Internet · 1×1
  * HTML · 1×1 («Experimentelles Erzählen»)
    * CSS
    * Git-Client · Installation
    * Pull Requests
  * DNS · Domains
* **16:15** · Ende
--s--
# Internet · 1×1
* Informationsausbreitung
* Entwicklung vom «modernen» Internet
--s--
# Internet <br>= Distribution von Information
--s--
# Pre-Internet

--s--
## Distribution von Information
* Persistent (schriftlich)
* Flüchtig (mündlich)
--s--
## Schriftliche Distribution
* Bruchstücke von Information
* Werke (Bücher)
--s--
## Bruchstücke von Information
Zettel, Notizen, mnemonische Hilfsmittel
* Privat
* Formell oder informell
* Loser Verbund an Information
* Updates durch Ergänzung/Streichung (Editierung)
* Lokale Verbreitung
--s--
## Werke (Bücher)
* Kulturträger
* Abschliessender Umfang an Information
* Aktualisierung nur bei Neuauflage
* Über Jahrhunderte sehr teuer (Material nicht Arbeit)
* Hohe Verbreitung
--s--
## Buchproduktion
Vergleich handschriftliche Codices vs. modernem Buch <!-- .element: class="small" -->


<img class="stats" src="./img/bookproduction.svg" alt="" title="">
--s--
## Buchproduktion
Vergleich handschriftliche Codices vs. modernem Buch <!-- .element: class="small" -->

<img class="stats" src="./img/bookproduction_log.svg" alt="" title="">

--s--
## Information reist schneller als ein Medium
Informationsübertragung nach London in km/h <!-- .element: class="small" -->


<img class="stats" src="./img/infospeed.svg" alt="" title="">


A Farewell to Alms – A Brief Economic History of the World, Gregory Clark, Princeton University Press, 2007 <!-- .element: class="footer" -->

--s--
## Das Physische Medium wird überflüssig

<img class="pic" src="./img/edison_stockticker.png" alt="Börsentelegrafen" title="Börsentelegrafen">


Börsentelegrafen, Thomas Edison, 1869 <!-- .element: class="footer" -->

--s--
# Telegrafen – Kabel
* Demo

--s--
## Paketvermittelte Kommunikation

Information wird in kleinere Einheiten verpackt.

### Vorteile
* Last- und Risikoverteilung
* Teile können neu gesendet werden

--s--
## ARPAnet/Internet

* Auftrag vom US-Verteidigungsministerium
* Verbindet 1969 vier Universitäts-Rechner
* Start an der Westküste – Silicon Valley
* Flexiebles Kommunikationsprotokoll TCP/IP

ARPAnet = Advanced Research Projects Agency Network <br>
TCP/IP = (Transmission Control Protocol/Internet Protocol) <!-- .element: class="footer" -->
--s--
## Struktur des Internet
<img class="pic" src="./img/First_Four_Nodes_on_the_ARPANET.jpg" alt="" title="">


ARPAnet 1969 <!-- .element: class="footer" -->
--s--

## Struktur des Internet
<img class="pic" src="./img/early_internet.gif" alt="" title="">


ARPAnet 1971 <!-- .element: class="footer" -->
--s--
## Struktur des Internet

![ARPAnet 1980](./img/arpanet4_small.gif) <!-- .element: class="pic" -->

ARPAnet 1980 <!-- .element: class="footer" -->
--s--
## Struktur des Internet

![ISP heute](./img/ISP.svg) <!-- .element: class="pic" -->

ISP = Internet Service Provider <!-- .element: class="footer" -->

--s--
## Frage

Was ist der Unterschied zwischen www und Internet?

www = World Wide Web <!-- .element: class="footer" -->

--s--
## Antwort

Am ehesten so:

### Internet
* Infrastruktur auf dem Services betrieben werden können

### www
* Ein spezifisches Set an Services (HTTP/HTML)


HTTP = Hypertext Transfer Protocol  <!-- .element: class="footer" -->
--s--
## WWW wird erfunden

* Wurde in Genf entwickelt (CERN)
* Informationen verknüpfen (to browse)
* Information strukturiert zugänglich machen, aber Struktur nicht vorgeben.
* Inhalt zählte – nicht deren Aussehen
* 1989 Vorschlag WWW (mit HTML)
* 1990 erste Website
* 1991 Publikation über das CERN hinaus

--s--

## Tim Berners-Lee

![Tim Berners-Lee](./img/Tim_Berners-Lee_2012.jpg) <!-- .element: class="pic" -->

<div>
[Wikimedia – Tim Berners-Lee – 2012](https://en.wikipedia.org/wiki/File:Tim_Berners-Lee_2012.jpg)
</div> <!-- .element: class="footer" -->
--s--
## Erster Webserver

![Erster Webserver](./img/First_Web_Server.jpg) <!-- .element: class="pic" -->


<div>
[Wikimedia – First Web server](https://en.wikipedia.org/wiki/File:First_Web_Server.jpg)
</div> <!-- .element: class="footer" -->
--s--
## Erste Website
<iframe class="browser" src="http://info.cern.ch/hypertext/WWW/TheProject.html" frameborder="0"></iframe>


<div>
[Erste Website ](http://info.cern.ch/hypertext/WWW/TheProject.html)
</div> <!-- .element: class="footer" -->
--s--

## Kommunikation hat sich verschoben
Briefpost in den USA seit 2001 rückläufig – Angaben in Millionen <!-- .element: class="small" -->
<div class="ct-golden-section box">



<svg xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" class="ct-chart-line" style="width: 100%; height: 100%;" version="1.1" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 600 400"><g class="ct-grids"><line x1="50" y1="327.48" x2="50" y2="336" class="ct-grid ct-horizontal ct-special-line"></line><line x1="133.2153504502312" y1="327.48" x2="133.2153504502312" y2="336" class="ct-grid ct-horizontal ct-special-line"></line><line x1="192.668836699927" y1="327.48" x2="192.668836699927" y2="336" class="ct-grid ct-horizontal ct-special-line"></line><line x1="252.10604770017036" y1="327.48" x2="252.10604770017036" y2="336" class="ct-grid ct-horizontal ct-special-line"></line><line x1="311.55953394986614" y1="327.48" x2="311.55953394986614" y2="336" class="ct-grid ct-horizontal ct-special-line"></line><line x1="370.99674495010953" y1="327.48" x2="370.99674495010953" y2="336" class="ct-grid ct-horizontal ct-special-line"></line><line x1="430.45023119980533" y1="327.48" x2="430.45023119980533" y2="336" class="ct-grid ct-horizontal ct-special-line"></line><line x1="489.88744220004867" y1="327.48" x2="489.88744220004867" y2="336" class="ct-grid ct-horizontal ct-special-line"></line><line x1="549.3409284497445" y1="327.48" x2="549.3409284497445" y2="336" class="ct-grid ct-horizontal ct-special-line"></line><line y1="336" y2="336" x1="50" x2="585" class="ct-grid ct-vertical"></line><line y1="263.04545454545456" y2="263.04545454545456" x1="50" x2="585" class="ct-grid ct-vertical"></line><line y1="190.0909090909091" y2="190.0909090909091" x1="50" x2="585" class="ct-grid ct-vertical"></line><line y1="117.13636363636363" y2="117.13636363636363" x1="50" x2="585" class="ct-grid ct-vertical"></line><line y1="44.18181818181819" y2="44.18181818181819" x1="50" x2="585" class="ct-grid ct-vertical"></line></g><g><g series-name="USA" class="ct-series ct-series-a"><path d="M50,291.451L55.94,288.48L61.881,287.249L67.838,285.895L73.778,286.68L79.719,289.823L85.659,293.4L91.616,304.256L97.556,302.275L103.497,299.529L109.437,298.849L115.394,295.49L121.334,294.486L127.275,293.228L133.215,291.574L139.172,289.341L145.113,286.473L156.993,276.148L162.95,274.692L168.891,277.464L174.831,275.696L180.772,271.952L186.728,268.281L192.669,264.505L198.609,261.359L204.55,258.662L210.507,256.459L216.447,256.961L222.387,252.21L228.328,248.227L234.285,243.899L240.225,241.982L246.166,241.819L252.106,239.014L258.063,235.938L264.003,232.892L269.944,231.433L275.884,228.194L281.841,224.911L287.781,218.041L293.722,213.442L299.662,209.984L305.619,200.564L311.56,194.06L317.5,189.986L323.44,193.205L329.397,187.275L335.338,185.439L341.278,186.084L347.219,183.939L353.175,179.428L359.116,172.637L365.056,166.961L370.997,160.104L376.953,156.794L382.894,154.489L388.834,148.516L394.775,136.312L400.732,124.607L406.672,113.672L412.613,105.846L418.553,88.687L424.51,85.459L430.45,75.494L436.391,72.532L442.331,71.085L448.288,67.034L454.228,57.801L460.169,54.991L466.109,49.388L472.066,45.174L478.007,42.915L483.947,38.529L489.887,33.892L495.844,33.513L501.785,37.239L507.725,46.928L513.666,50.234L519.622,48.364L525.563,49.971L531.503,54.988L537.444,71.406L543.4,94.588L549.341,109.572L555.281,124.368L561.222,135.597L567.179,144.118L573.119,149.677L579.06,153.325L585,157.352" class="ct-line"></path></g></g><g class="ct-labels"><foreignObject style="overflow: visible;" x="50" y="341" width="83.2153504502312" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 83px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">1926</span></foreignObject><foreignObject style="overflow: visible;" x="133.2153504502312" y="341" width="59.4534862496958" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 59px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">1940</span></foreignObject><foreignObject style="overflow: visible;" x="192.668836699927" y="341" width="59.437211000243366" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 59px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">1950</span></foreignObject><foreignObject style="overflow: visible;" x="252.10604770017036" y="341" width="59.45348624969577" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 59px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">1960</span></foreignObject><foreignObject style="overflow: visible;" x="311.55953394986614" y="341" width="59.437211000243394" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 59px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">1970</span></foreignObject><foreignObject style="overflow: visible;" x="370.99674495010953" y="341" width="59.4534862496958" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 59px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">1980</span></foreignObject><foreignObject style="overflow: visible;" x="430.45023119980533" y="341" width="59.43721100024334" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 59px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">1990</span></foreignObject><foreignObject style="overflow: visible;" x="489.88744220004867" y="341" width="59.4534862496958" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 59px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">2000</span></foreignObject><foreignObject style="overflow: visible;" x="549.3409284497445" y="341" width="35.65907155025553" height="20"><span class="ct-label ct-horizontal ct-end" style="width: 36px; height: 20px" xmlns="http://www.w3.org/1999/xhtml">2010</span></foreignObject><foreignObject style="overflow: visible;" y="263.04545454545456" x="10" height="72.95454545454545" width="30"><span class="ct-label ct-vertical ct-start" style="height: 73px; width: 30px" xmlns="http://www.w3.org/1999/xhtml"></span></foreignObject><foreignObject style="overflow: visible;" y="190.09090909090912" x="10" height="72.95454545454545" width="30"><span class="ct-label ct-vertical ct-start" style="height: 73px; width: 30px" xmlns="http://www.w3.org/1999/xhtml">25000</span></foreignObject><foreignObject style="overflow: visible;" y="117.13636363636363" x="10" height="72.95454545454547" width="30"><span class="ct-label ct-vertical ct-start" style="height: 73px; width: 30px" xmlns="http://www.w3.org/1999/xhtml">50000</span></foreignObject><foreignObject style="overflow: visible;" y="44.18181818181819" x="10" height="72.95454545454544" width="30"><span class="ct-label ct-vertical ct-start" style="height: 73px; width: 30px" xmlns="http://www.w3.org/1999/xhtml">75000</span></foreignObject><foreignObject style="overflow: visible;" y="14.181818181818187" x="10" height="30" width="30"><span class="ct-label ct-vertical ct-start" style="height: 30px; width: 30px" xmlns="http://www.w3.org/1999/xhtml">100000</span></foreignObject></g></svg>


</div>


<div>
[First-Class Mail Volume Since 1926](http://about.usps.com/who-we-are/postal-history/first-class-mail-since-1926.htm)
</div> <!-- .element: class="footer" -->


--s--
# Jetzt HTML 😻
--s--
# Installation – git

--s--
## Git-Client

* GUI → einfacheres Handling
* Push & Pull wesentlich einfacher
* History einfach einsehbar


--s--
## Git-Client
### Top
* [Sourcetree – Gratis](https://www.sourcetreeapp.com/)
* [Tower](https://www.git-tower.com/mac/)
* ...

### Flop
* [Github-Desktop](https://desktop.github.com/)

--s--
## Pull Requests
* Dient zur Zusammenarbeit
* Einfaches Reviewing

--s--
## Demo Pull Requests
* [larsmaeder](https://larsmaeder.github.io/portfolio/)
  * relativer Pfad



--s--
# HTML · 1×1




--s--
## CSS

* Cascading Style Sheets (CSS)
* 1996 publiziert
* Inhalt und Darstellung werden auseinander gehalten

--s--
## Prinzipien

* Selektorne wählen Inhalt aus
* Eigenschaften werden angewendet

--s--
## CSS einbinden

```
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    <title>Test</title>
  </head>
  <body>
    <h1>Titel</h1>
    <p>Text</p>
    <ul>
      <li>Eintrag A</li>
      <li>Eintrag B</li>
    </ul>
  </body>
</html>
```

--s--
## CSS einbinden

```
  <head>
    <meta charset="utf-8">
    <title>Test</title>
  </head>
```

--s--
## CSS einbinden

Datei `portfolio.css` im Ordner `styles` erstellen.

### Zeile Einfügen
```
    <link rel="stylesheet" type="text/css" href="./styles/portfolio.css">
```

### Neuer Header

```
  <head>
    <meta charset="utf-8">
    <title>Test</title>
    <link rel="stylesheet" type="text/css" href="./styles/portfolio.css">
  </head>
```



--s--
## Selektoren
* Tag
* Klasse (class)
* ID (id)
--s--
## Tag-Selektoren

### HTML
```
<p>Hier steht Text</p>
```

### CSS
```
p {
  color: red;
}
```

--s--
## Tag-Selektoren

### HTML
```
<p class="blau">Hier steht Text</p>
```

### CSS
```
.blau {
  color: blue;
}
```

--s--
## ID-Selektoren

### HTML
```
<p id="text">Hier steht Text</p>
```

### CSS
```
#text {
  color: green;
}
```

--s--
## Cascading Style Sheets (CSS)

### Cascading!
Definitionen können sich ergänzen!


### HTML
```
<p class="big">Test</p>
<p class="blau">Test</p>
<p class="blau big">Test</p>
```

### CSS
```
.blau {
  color: blue;
}
.big {
  font-size: 4em;
}
```



--s--
## Tags zum Strukturieren
* `div` um Blöcke zu bilden
* `span` um im Text zu formatieren



### HTML
```
<div class="blau">
  <p class="big">Test</p>
  <p>Test <span class="green">Text</span></p>
</div>
```

### CSS
```
.blau {
  color: blue;
}
.green {
  color: green;
}
.big { font-size: 4em; }

```



--s--
## Freie Arbeit
* [codecademy.com](https://www.codecademy.com/learn/learn-html-css)
* [w3schools.com](https://www.w3schools.com/html/)
* [Google Fonts](https://fonts.google.com/)

--s--
## Struktur des Internet
--s--
## DNS – Browser

![DNS](./img/dns-host.svg) <!-- .element: class="pic" -->
--s--
## DNS – Struktur

![DNS](./img/dns-server.svg) <!-- .element: class="pic" -->

--s--
# Merci
