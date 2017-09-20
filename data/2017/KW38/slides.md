### HF Interactiondesign
# URL & DNS



Stefan Huber, Zürich – 2017 <!-- .element: class="footer" -->
--s--
## News
* BlueBorne: Bluetooth hack
--s--
## Agenda
* [ZHdK Highlights](https://www.zhdk.ch/veranstaltung/32483)
--s--
# Rückschau

--s--
## Distribution von Information
* Persistent (schriftlich)
* Flüchtig (mündlich)
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

<img class="stats" src="../KW37/img/bookproduction_log.svg" alt="" title="">

--s--
## Information reist schneller als ein Medium
Informationsübertragung nach London in km/h <!-- .element: class="small" -->


<img class="stats" src="../KW37/img/infospeed.svg" alt="" title="">


A Farewell to Alms – A Brief Economic History of the World, Gregory Clark, Princeton University Press, 2007 <!-- .element: class="footer" -->

--s--
## Das Physische Medium wird überflüssig

<img class="pic" src="../KW37/img/edison_stockticker.png" alt="Börsentelegrafen" title="Börsentelegrafen">


Börsentelegrafen, Thomas Edison, 1869 <!-- .element: class="footer" -->

--s--
## Struktur des Internet
<img class="pic" src="../KW37/img/First_Four_Nodes_on_the_ARPANET.jpg" alt="" title="">


ARPAnet 1969 <!-- .element: class="footer" -->
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

![Tim Berners-Lee](../KW37/img/Tim_Berners-Lee_2012.jpg) <!-- .element: class="pic" -->

<div>
[Wikimedia – Tim Berners-Lee – 2012](https://en.wikipedia.org/wiki/File:Tim_Berners-Lee_2012.jpg)
</div> <!-- .element: class="footer" -->

--s--
## Git-Client

* GUI → einfacheres Handling
* Push & Pull wesentlich einfacher
* History einfach einsehbar

--s--
# HTML · 1×1

--s--
## CSS

* Cascading Style Sheets (CSS)
* 1996 publiziert
* Inhalt und Darstellung werden auseinander gehalten

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
## Arbeitslast

# Umfrage
* Wie war die Arbeitslast der letzten (KW38) Woche?

--s--
# Und heute?

--s--
## Übersicht – Nachmittag

* **12:45**
  * URL & DNS
  * Praxisarbeit
* **16:15** · Ende
--s--
## Jobangebote...

--s--
## URL

# URL = uniform resource locator
* Wo eine Datei/Resource sich befindet
* Wie darauf zugegriffen wird (Protokoll)

--s--
## Bestandteile einer URL


# http://www.switch.ch/index.html

| Teil    | Bedeutung                 |
|---------|---------------------------|
| http:// | Angabe über das Protokoll |
| www     | Subdomain                 |
| switch  | Domain                    |
| ch      | Top-Level Domain          |
| index   | Dateiname                 |
| html    | Dateiendung               |

--s--
## http → Protokoll

# HTTP = The Hypertext Transfer Protocol

--s--
## Was ist ein Kommunikationsprotokoll?

Eine Vereinbarung zur Datenübertragung.
* mindestens zwei Teilnehmer
* durch Regeln definiert (Standards)

--s--
## Welcher Teil wird geregelt?

# Alle Teile des [OSI-Modell](https://de.wikipedia.org/wiki/OSI-Modell)
* Schicht 1 – Bitübertragungsschicht (Physical Layer)
* Schicht 2 – Sicherungsschicht (Data Link Layer)
* Schicht 3 – Vermittlungsschicht (Network Layer)
* Schicht 4 – Transportschicht (Transport Layer)
* Schicht 5 – Sitzungsschicht (Session Layer)
* Schicht 6 – Darstellungsschicht (Presentation Layer)
* Schicht 7 – Anwendungsschicht (Application Layer)
--s--
## Scherzhaft
# Layer 8 Problem
--s--
## Wer setzt die Regeln?
# [Internet Engineering Task Force](https://de.wikipedia.org/wiki/Internet_Engineering_Task_Force)
* Definieren Standr als RFC
  * [Request for Comments → Podcast](https://requestforcomments.de/)

RFC = Request for Comments <!-- .element: class="footer" -->
--s--
## http = Layer 7

# Anwendungsschicht
--s--
## Layer 7 – Application Layer
* Am nächsten beim User
* Implementierung einer Kommunikation in der Software
* Dateneingabe und -ausgabe
* Entscheidet ob Anfrage erfolgreich ist oder nicht

--s--
## HTTP != HTTP

Verschiedene Revisionen

* [RFC 1945 HTTP/1.0 (1996)](https://tools.ietf.org/html/rfc1945)
* [RFC 2616 HTTP/1.1 (1999)](https://tools.ietf.org/html/rfc2616)
* [RFC 7540 HTTP/2 (2015)](https://tools.ietf.org/html/rfc7540)
--s--
##  HTTP/1.0 – 1996
* Ursrüngliche Implementierung
* Heute (fast) nicht mehr in Verwendung
* Für jede Anfrage wird ein eine Verbindung benötigt
* Textbasiert

--s--
##  HTTP/1.1 – 1999
* Verbindungen können wiederverwendet werden
* Daten können nun auch gesendet/verändert werden (DELETE & PUT)
--s--
##  HTTP/2 – 2015
* Mehrere Anfragen auf einmal an den Server
  * Durch SPDY (Google) und HTTP Speed+Mobility (Microsoft) inspiriert
  * Hauptgrund für Geschwindigkeitsgewinn
* Binäre Übertragung
* Mehr Kompressionsmöglichkeiten
* Push-Möglichkeit vom Server zum Client


--s--
# Domains
# http://www.switch.ch/index.html

| Teil    | Bedeutung                 |
|---------|---------------------------|
| www     | Subdomain                 |
| switch  | Domain                    |
| ch      | Top-Level Domain          |
--s--
## Wichtigkeit
* ch – Top-Level Domain
* switch – Domain
* www – Subdomain
--s--
# Top-Level Domain  
* .com
* .ch/.swiss
* ...

--s--
# Domain

* Immer eine NIC pro TLD
  * Internationale NIC
  * Swiss NIC

TLD = Top-Level Domain <!-- .element: class="footer" -->
--s--
## Domains in der Schweiz
* Switch ist nicht mehr zuständig (seit 1. Januar 2015 )
* Diverse Registrare
--s--
## .ch
* für Schweizer gut erkennbar als Domain
* Kann ohne Probleme erworben werden
* Fr. 10 und 20.– pro Jahr → alle bieten die selbe Leistung
--s--
## .swiss
Gemäss BAKOM: «Gesuchsteller für einen .swiss Domain-Namen müssen eine ausreichende Verbindung zur Schweiz darlegen.»

* für Schweizer eher schwer als Domain erkennbar → hans.swiss
* kann mit Subdomain `www` unterstützt werden → www.hans.swiss
--s--
## Subdomains

--s--
# www...
* `www` ist nur eine mögliche Subdomain
  * Unterscheidet sich technisch nicht von allen anderen Subdomains
--s--
## Subdomains

* Können beliebig vergeben werden
* Müssen nicht zentral registriert werden
  * Handling auf Webserver
--s--
# Dateipfad

## switch.ch/kontakt/index.html
  * `kontakt` → Ordner – dient der Gliederung
  * `index` → Dateiname – möglichst sinnvoll
  * `html` → Dateiendung – bestimmt oft die Art der Auslieferung an den Browser ([MIME](https://de.wikipedia.org/wiki/Multipurpose_Internet_Mail_Extensions))
--s--
# URL für den Browser
--s--
## Kommunikation über IP

* Schicht 3 – Vermittlungsschicht (Network Layer)

ISP = Internet protocol  <!-- .element: class="footer" -->
--s--
## Kommunikation an Adresse
* Jeder Client/Server hat eine Adresse
* Eindeutlig im «sichtbaren» Netzwerk
  * lokale Adressen
  * globale Adressen
--s--
## Internet protocol
* Version 4 → knapper Adressraum (4x 8bit)
* Version 6 → sehr sehr viele Adressen
--s--
## DNS
# Domain Name System
* Menschen sind schlecht mit Nummern
* Menschen sind ok mit Domains (Namen)
* DNS verwandelt Domains zu Nummern
--s--
## Domains für den Browser
* Browser lösst Domains in IP's auf
* DNS sind dezentral und abhängig vom Client/ISP-Provider

ISP = Internet Service Provider <!-- .element: class="footer" -->
--s--
## DNS – Browser

![DNS](../KW37/img/dns-host.svg) <!-- .element: class="pic" -->
--s--
## DNS – Struktur

![DNS](../KW37/img/dns-server.svg) <!-- .element: class="pic" -->

--s--
# Praxisarbeit
--s--
## 7 Wochen ohne Tec-Stuff...
* Kann jeder Arbeiten?
* Kann jeder publizieren? (github)
* Fonts, Grundlayout, `H1`, `H2`, `H3`, `p`, `img`
--s--
# Merci
