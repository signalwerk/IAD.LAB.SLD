### HF Interactiondesign
# Mobile Daten



Stefan Huber, Zürich – 2017 <!-- .element: class="footer" -->
--s--
## Übersicht – Vormittag

* **8:15**
  * Organisation/Arbeitslast
  * News/Agenda
  * Rückschau & Festigung
  * Mobiles Internet
  * Know your Editor
  * LAB · Praxisarbeit
* **11:45**

--s--
## Übersicht – Nachmittag
* **12:45**
  * (optional) ZeTeCo – Abstraktion im Design
  * LAB · Praxisarbeit
* **16:15** · Ende
--s--

## Organisation
* Ulrike krank
* Evaluation der Module
* Slack
* Wissenssicherung/Wissenstransfer

--s--
## Evaluation

* Eine Evaluation pro Modul (durch Schule)
* Einmal pro Semester Evaluation über den Lehrgang

--s--
## Slack

* Matthias ist neu Slack-Admin
* Nach 10k werden die ältesten Nachrichten gelöscht

--s--
## Inhalte

### Ziele
* Wissenssicherung sollte gewährt sein
* Wissenstransfer auch digital im Kontext erhalten

### Fragen
* Wie organisiert Ihr euch?
* Wo sind die grössten Probleme?

--s--
## News
* Bitcoin – über $10k – 28.11.2017
* Follow-up – Digitec
* macOS High Sierra – root login bug
--s--
## Black Firday bei Digitec

### [→ Blogpost zu Black Firday](https://www.digitec.ch/de/page/black-friday-wie-ein-riskantes-experiment-den-tag-gerettet-hat-6364)
* **Pro:** Kommunikation über eigene Schwächen
* **Contra:** 200% Last offenbar nicht dauerhaft zu leisten (Elastizität)
* **Contra:** Interne Tools behindern produktives System
* **Contra:** Caching nicht ernst genommen

--s--
## Caching

>> «There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.»

Phil Karlton/Leon Bambrick

--s--
## macOS High Sierra – root login bug

### Unberechtige Benutzer <br> konnten Root-Rechte erlangen 😱
[→ Demo](https://www.youtube.com/watch?v=ahng1wyrXac)

--s--
## Unix-Rechte

### Dateien/Ordner haben drei Klassen von Benutzern
* Inhaber (ownder)
* Gruppe (group)
* Andere (other)


[→ Wikipedia – File system permissions](https://en.wikipedia.org/wiki/File_system_permissions#Numeric_notation)
<!-- .element: class="footer" -->
--s--
## Unix-Rechte

* Unix ist ein Betriebsystem
* Aktuelle «Server-Betriebsysteme» sind oft [Unix-like](https://en.wikipedia.org/wiki/Unix-like)
* MacOS hat Teile von FreeBSD (Betriebsystem)

--s--
## Unix-Rechte

### Jede Benutzer-Klasse kann folgende rechte haben
* lesen (read)
* schreiben (write)
* ausführen (execute)

--s--
## Unix-Rechte
# root-User hat alle Rechte 😱
* auf «normalen» macOS-Geräten deaktiviert
* [→ Demo](http://pad.signalwerk.ch/test/)

--s--
## Arbeitslast

# Umfrage
* Wie war die Arbeitslast in den letzten zwei Wochen?
--s--
## Agenda
* 27.12 – 30.12. – Chaos Communication Congress [(34c3)](https://events.ccc.de/tag/34c3/)


--s--
# Rückschau

* DNS – war bereits eine Rückschau
* Heute vertiefen

--s--
## DNS – Struktur

![DNS](../KW37/img/dns-server.svg) <!-- .element: class="pic" -->

--s--
## Portfolio mit eigener Domain

### Was brauchen wir?


* Website <!-- .element: class="fragment" -->
* Hoster <!-- .element: class="fragment" -->
* Domain <!-- .element: class="fragment" -->
* Nameserver <!-- .element: class="fragment" -->

--s--
## Portfolio mit eigener Domain

### Was haben wir?

* Website <!-- .element: class="fragment" -->
* Hoster <!-- .element: class="fragment" -->

--s--
## Portfolio mit eigener Domain

### Wir brauchen eine Domain
* Registrar verkauft Domains
* Es gibt freie Domains 😻🦄 (*.tk)

--s--
## Domain

### [→ freenom.com](https://freenom.com/)
* Account erstellen
* Domain registrieren

--s--
## Nameserver

* [→ DNS A-Record erstellen](https://help.github.com/articles/setting-up-an-apex-domain/)


[→ Wikipedia – List of DNS record types](https://en.wikipedia.org/wiki/List_of_DNS_record_types)
<!-- .element: class="footer" -->
--s--
## Hoster

* Domain für Hosting vermerken

--s--
# Mobiles Internet

--s--
## Mobiles Internet


### Wichtige Einführungen von neuen Geräten

* iPhone, 29. Juni 2007
* iPad, 3. April 2010
--s--
## Mobiles Internet
#### Schweiz – Internetnutzung nach Gerätetypen in %
![Internetnutzung nach Gerätetypen – Schweiz](./img/CH_device.svg) <!-- .element: class="stats" -->


<div class="chart-caption">
  <div class="svg ct-series-a chartist-legend">
    <svg xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" class="ct-chart-line" style="width: 2em; height: 1em;" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 15">
      <line class="ct-line" x1="3" y1="10" x2="27" y2="10"></line>
    </svg>
    <span>Desktop</span>
  </div>
  <div class="svg ct-series-b chartist-legend">
    <svg xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" class="ct-chart-line" style="width: 2em; height: 1em;" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 15">
      <line class="ct-line" x1="3" y1="10" x2="27" y2="10"></line>
    </svg>
    <span>Mobile</span>
  </div>
  <div class="svg ct-series-c chartist-legend">
    <svg xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" class="ct-chart-line" style="width: 2em; height: 1em;" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 15">
      <line class="ct-line" x1="3" y1="10" x2="27" y2="10"></line>
    </svg>
    <span>Tablet</span>
  </div>
</div>


--s--
## Mobiles Internet
#### Weltweit – Internetnutzung nach Gerätetypen in %

![Internetnutzung nach Gerätetypen – Weltweit](./img/ALL_device.svg) <!-- .element: class="stats" -->

<div class="chart-caption">
  <div class="svg ct-series-a chartist-legend">
    <svg xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" class="ct-chart-line" style="width: 2em; height: 1em;" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 15">
      <line class="ct-line" x1="3" y1="10" x2="27" y2="10"></line>
    </svg>
    <span>Desktop</span>
  </div>
  <div class="svg ct-series-b chartist-legend">
    <svg xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" class="ct-chart-line" style="width: 2em; height: 1em;" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 15">
      <line class="ct-line" x1="3" y1="10" x2="27" y2="10"></line>
    </svg>
    <span>Mobile</span>
  </div>
  <div class="svg ct-series-c chartist-legend">
    <svg xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" class="ct-chart-line" style="width: 2em; height: 1em;" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 15">
      <line class="ct-line" x1="3" y1="10" x2="27" y2="10"></line>
    </svg>
    <span>Tablet</span>
  </div>
</div>


--s--
##  Smartphone

#### Weltweit – Verkaufte Smartphones in Mio.
![Verkaufte Smartphones weltweit](./img/smartphones.svg) <!-- .element: class="stats" -->


Zum Vergleich: Im Jahr 2014 wurden weltweit 308 Millionen Computer verkauft. <!-- .element: class="footer" -->

--s--
##  Mobiles Internet – Datenübertragung

#### Mobilfunk-Standards – 3G und neuer
![Mobiles Internet – Datenübertragung](./img/mobile-datatransfer.svg) <!-- .element: class="stats" -->


<div class="chart-caption">
  <div class="svg ct-series-a chartist-legend">
    <svg xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" class="ct-chart-bar" style="width: 2em; height: 1em;" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 15">
      <line class="ct-bar" x1="3" y1="10" x2="27" y2="10"></line>
    </svg>
    <span>Download</span>
  </div>
  <div class="svg ct-series-b chartist-legend">
    <svg xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" class="ct-chart-bar" style="width: 2em; height: 1em;" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 15">
      <line class="ct-bar" x1="3" y1="10" x2="27" y2="10"></line>
    </svg>
    <span>Upload</span>
  </div>
</div>





![Mobiles Internet – Datenübertragung](./img/mobile-datatransfer.svg) <!-- .element: class="stats" -->

Angaben in MBit/s  <!-- .element: class="footer" -->


--s--
## Netzabdeckung

* [Swisscom](https://scmplc.begasoft.ch/plcapp/pages/gis/netzabdeckung.jsf?lang=de)
* [Sunrise](https://www.sunrise.ch/de/privatkunden/mobil/mobilnetz/netzabdeckung/netzabdeckungskarte.html)
* [USA](https://www.uscellular.com/coverage-map/coverage-indicator.html)
--s--
## Mobiles Internet – Datenübertragung

### 5G Standard
* Technisch noch nicht abgeschlossen
* Kleinere Zellen (weniger Benutzer pro Base-Station)
* Höhere Übertragungsraten
* Swisscom möchte ab 2020 5G eingeführt haben
--s--
## Mobiles Internet – schlechte Verbindung

# DEMO
* Verbindung messen [→ speedtest.net](http://speedtest.net/) [→ fast.com](https://fast.com/)
* Verbrauch messen
* Bandwidth throttling

--s--
# Know your Editor

--s--
## Multiple Selektion

* Multiline Selektion + Tab → Einzug
* Atom: command + click → mehrere Cursor
* Atom: command + D  → Gleiches selektieren
* Atom mit [Extension](https://atom.io/packages/Sublime-Style-Column-Selection): alt + selektion → vertikale Selektion

--s--
## LAB · Praxisarbeit
* Kann jeder Arbeiten?
* [→ Aufgabe ist inhaltlich](https://signalwerk.github.io/IAD.LAB.DOC/exercise-exp-story/)
* [→ einfache Gestaltung genügt](https://signalwerk.github.io/portfolio/)

--s--
## Abstraktion im Design


--s--
# Merci
