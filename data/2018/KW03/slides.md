### HF Interactiondesign
# Lab Grids & Modules



Stefan Huber, Zürich – 2018 <!-- .element: class="footer" -->
--s--
## Übersicht – Nachmittag
* **12:45**
  * Organisation/News/Agenda
  * Rückschau
  * Abgabe · «Dokumentation · Experimentelles Erzählen»
  * Review · «Dokumentation · Experimentelles Erzählen»
  * Rückmeldung Case Study
  * Grids & Modules · Praxisarbeit
* **16:15** · Ende
--s--
## Arbeitslast

# Umfrage
* Wie war die Arbeitslast in den letzten vier Wochen?

--s--
## Organisation
* Nadia hat Prüfung

<br>
<br>
**Arbeit an Grids & Modules bis ich zurück bin.**


--s--
## News
* Redesign [→ The Guardian](https://www.theguardian.com/)
* Start der [→ Republik](https://www.republik.ch/) mit ~3.5mio
* CES
* Meltdown & Spectre

--s--
## CES – Consumer Electronics Show
* Jährlich in Las Vegas
* 9–12. Januar 2018
* Eine der grössten Messen/Shows der Unterhaltungs-Branche

--s--
## Consumer Electronics Show
* Vielevieleviele TVs
* [→ HTC Vive Pro → 3K & Audio](https://www.t3.com/reviews/htc-vive-pro)
* Nichts von Oculus
* [→ Fingerprint-Sensor unter dem Bildschirm](https://www.theverge.com/circuitbreaker/2018/1/9/16867536/vivo-fingerprint-reader-integrated-display-biometric-ces-2018)
* [→ Smart Assistants](http://www.bbc.com/news/technology-42630606) – Aufholjagd von Google Assistant mit [→ diversen Produkten](https://www.androidauthority.com/lenovo-smart-display-specs-828378/)

--s--
## Meltdown & Spectre

### Wer ist betroffen?
* Meltdown betrifft «nur» Intel prozessoren
* Spectre betrifft Intel, AMD, ARM, ...
--s--
## Meltdown & Spectre

### Was ist das Problem
* Die Prozessoren haben eine Schwachstelle
* Unautorisierte Programme können **ganzen** Arbeitsspeicher auslesen.
--s--
## Meltdown & Spectre

### Was sind die Folgen
* Im Arbeitsspeicher befdinden sich sensible Daten von anderen Programmen/Usern
* Attacke geht theoretisch sogar über Browser mit JavaScript
--s--
## Meltdown & Spectre

### Folgen für Provider
* Viele Webserver laufen auf VM's (Virtual Machine)
* Mehrere Betriebsysteme teilen sich also eine Hardware
* Ausbrechen aus eigener VM und Lesen von anderen Webservern/Usern

--s--
## Meltdown & Spectre

![Hypervisor](https://images.anandtech.com/reviews/it/2008/virtualization-nuts-bolts/hypervisor.gif) <!-- .element: class="pic" -->

<div>
[Bildquelle: anandtech.com](https://www.anandtech.com/show/2480/2)
</div> <!-- .element: class="footer" -->


--s--
## Meltdown & Spectre

### Patches?
* [→ Intel/AMD patchen mit «microcode»](https://www.heise.de/newsticker/meldung/Intel-Benchmarks-zu-Meltdown-Spectre-Performance-sackt-um-bis-zu-10-Prozent-ab-SSD-I-O-deutlich-mehr-3938747.html)
* Restart von Infrastruktur nach Patch

--s--
## Agenda
* [Solothurner Filmtage](https://www.solothurnerfilmtage.ch/)
* [Abschlussprojekte Bachelor Art Education](https://www.zhdk.ch/veranstaltung/33973)

--s--
# Rückschau


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
![Internetnutzung nach Gerätetypen – Schweiz](../../2017/KW49/img/CH_device.svg) <!-- .element: class="stats" -->


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

![Internetnutzung nach Gerätetypen – Weltweit](../../2017/KW49/img/ALL_device.svg) <!-- .element: class="stats" -->

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
![Verkaufte Smartphones weltweit](../../2017/KW49/img/smartphones.svg) <!-- .element: class="stats" -->


Zum Vergleich: Im Jahr 2014 wurden weltweit 308 Millionen Computer verkauft. <!-- .element: class="footer" -->

--s--
##  Mobiles Internet – Datenübertragung

#### Mobilfunk-Standards – 3G und neuer
![Mobiles Internet – Datenübertragung](../../2017/KW49/img/mobile-datatransfer.svg) <!-- .element: class="stats" -->


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
# Abgabe

* Hat jeder seinen Aktuellen Stand auf Github?

--s--
# Probleme mit Github

* Grosse Dateien werden commited (nicht erlaubt)
* Falscher Branch/URL/... → ev. noch einmal neu Auschecken
* Berechtigungsprobleme → ev. noch einmal neu Klonen
--s--
# Review
* Jede Person reviewt eine andere Person
* Rückmeldung bis nächste Woche mit Pull-Request
--s--

## Zuteilung
<div style="font-size: 0.5em;">
  <ul>
    <li><b>Reviewer → Code</b></li>
    <li>Pascale Anderegg → Nicole Watrinet</li>
    <li>Marius Becker → Pascale Anderegg</li>
    <li>Nadia Bendinelli → Marius Becker <b>!!! Bitte Nadia informieren.</b></li>
    <li>Stephanie Fuchs → Nadia Bendinelli</li>
    <li>Marc Hatt → Stephanie Fuchs</li>
    <li>Severin Kilchhofer → Marc Hatt</li>
    <li>Matthias Koch → Severin Kilchhofer</li>
    <li>Lars Mäder → Matthias Koch</li>
    <li>Nils Mäder → Lars Mäder</li>
    <li>Tieu Khe Mayer → Nils Mäder</li>
    <li>Natasha Ruf → Tieu Khe Mayer</li>
    <li>Wolfgang Schoeck → Natasha Ruf</li>
    <li>Nicole Watrinet → Wolfgang Schoeck</li>
  </ul>

</div>

--s--
##  Review auf Github

* Code von Partner klonen (Button auf Website)
* [→ Code Prüfen](https://validator.w3.org/), Schreibfehler, ...
* Änderungen machen und sinnvoller Kommentar im Commit
* Pull-Request bis 25.1.2018 (Button auf Website)
* Merge bis 26.1.2018 (Button auf Website)

--s--
## Case Study

* Ihr müsst etwas doukmentieren – ich aber auch!
* Teil einer neuen Website – im Aufbau
* Note wird noch entfernt
* Bitte meldet Euch, wenn ihr nicht einverstanden seit
* [→ Grundlage](https://signalwerk.github.io/IAD.LAB.DOC/exercise-case-study/) für [→ Benotung](https://logrinto.github.io/website/posts/case-study-panel-sbb/)
* Bitte PR (Pull Request) für Fehler/Korrekturen

--s--
# Grids & Modules · Praxisarbeit

* [→ Doc von Foundation](https://foundation.zurb.com/)
* Kann jemand nicht arbeiten?
