### HF Interactiondesign

# API & CMS

Stefan Huber · Zürich · 2020 <!-- .element: class="footer" -->
--s--
## Übersicht

* **12:45**
* API · Grundlage
* CMS · Grundlage
* Craft, Wordpress und Fostry
* Typo3, Neos und Drupal
* **16:15** · Ende

--s--
## Application programming interface (API)

--s--
## Was ist ein(e) API?

> Ein Programmteil, der anderen Programmen zur Anbindung zur Verfügung gestellt wird.

[Wikipedia](https://de.wikipedia.org/wiki/Programmierschnittstelle)


--s--

* RSS
--s--
## Was und weshalb
* …

--s--
## Klassische API
* …

--s--
## API mit Graphen




## CMS als API
* …

--s--
## Content Management System (CMS)
--s--
## Was ist ein CMS?

>  
--s--
## Was ist ein CMS?

> Software zur gemeinschaftlichen Erstellung, Bearbeitung und Organisation und Darstellung von digitalen Inhalten  

[Wikipedia](https://de.wikipedia.org/wiki/Content-Management-System)

--s--
## Aufgabe

Tragt in 3 Gruppen zusammen, was für folgende CMS-User entscheidende Punkte sind.

* Kunden/Redaktoren
* Designer
* Admin/IT


--s--
## Gestaltung traditionell

![](./img/design-tradition.svg) <!-- .element: class="pic" -->

--s--

## Gestaltung Interactiondesign

![](./img/design-web.svg) <!-- .element: class="pic" -->

--s--
## Templates
![](./img/design-templates.svg) <!-- .element: class="pic" -->

--s--
## Module
![](./img/design-modules.svg) <!-- .element: class="pic" -->




--s--
## Kunden/Redaktoren

<!--
* Inhalt möglichst einfach zu pflegen
* Preview & Freigabeprozesse
* Zusammenhang zwischen Backend & Frontend
-->

--s--
## Designer

<!--
* Flexibilität beim Design
* Redaktion sollte keine Design-Entscheidungen treffen müssen/können
* Eigene Inhaltstypen/Inhalsstruktruen möglich
-->
--s--
## Admin/IT

<!--
* Betriebssicherheit
* Community/Entwickler
* Kosteneffizienz
* Ausbaubar
-->

--s--
## Sprachen
* Schweiz hat vier Landessprachen
* heute oft auch Englisch
* Editor-Erlebnis sollte multilingual einfach machen

--s--
## Inhaltsdimensionen

* Sprachen
* Währung
* Audience


--s--
## Beispiel – Inhaltsdimensionen

* de_CH – German (CH)
* de_DE – German (DE)
* fr_CH – French
* it_CH – Italian
* rm_CH – Romansh

--s--
## Beispiel – Inhaltsdimensionen

* ~~de_CH – German (CH)~~
* ~~de_DE – German (DE)~~
* de_ALL – German
* fr_CH – French
* it_CH – Italian
* ~~rm_CH – Romansh~~


--s--
## Beispiel – Inhaltsdimensionen

* EUR
* CHF

--s--
## Versionen

* …

--s--
## Medienneutrale Aufbereitung für CMS

* Bilder möglichst grosse Auflösung
* Bilder möglichst unkomprimiert
* Vektoren möglichst präzise behalten
* Farbprofile erhalten

--s--
## Medienneutrale Aufbereitung für Browser

* Bilder möglichst passende Auflösung
* Bilder möglichst idealer Kompromiss zwischen Kompression und Qualität
* Farbprofile...

--s--
## ICC-Farbprofile im Browser

* ICC-Profile im Browser werden unterstützt
* CMS kümmern sich oft nicht darum
* sRGB verwenden keine schlechte Idee
* Farbprofile mit grösserem Farbumfang sind top
--s--
## Bild- & Video-Services
* …
--s--
## Demos
--s--

# Craft

## Vorteile

  * Custom Eingabemasken
  * Mehrsprachigkeit
  * Bild transformationen
  * E-Commerce (Plugin)

--s--
# Craft

## Nachteile

* Propietär und nur «Semi-Open-Source»
* Für ein kostenpflichtiges Produkt ist der Kundendienst etwas bemüht
* Neu


--s--

# Wordpress

## Vorteile

  * One click Setup bei Hostern
  * Bild transformationen
  * E-Commerce (Plugin [woocommerce](https://woocommerce.com/))
  * Mehrsprachigkeit (Plugin [wpml](https://wpml.org/))
  * Custom Eingabemasken (Plugin [ACF](https://www.advancedcustomfields.com/))
  * Sehr etabliert
--s--
# Wordpress

## Nachteile

  * viele Plugins → Gefahr von Konflikten
  * Plugin Qualität teilweise nicht sehr hoch

--s--

# Fostry

[Forestry](https://forestry.io/) speichert alle Inhalte in einem verbundenen Git repo als Dateien und eignet sich daher für Static Site Generators (Gatsby, Jekyll, 11ty)

## Vorteile

  * Alle Inhalte sind versioniert
  * Inhalts blöcke und custom Eingabemasken
  * Instant Preview

--s--
# Fostry

## Nachteile

* Von Haus aus keine Mehrsprachigkeit
* Neu

--s--
# Typo3
## Vorteile

[Beispiel](https://lm-a.ch/)


* Bulk-Edit
* Permissions
* Multilingual
* History

--s--

# Typo3
## Nachteile

* Eher kleine Community
* Eher kompliziertes Setup
* Updates sind eher Schmerzhaft

--s--
# Drupal

Beispiel E-Commerce & Beispiel grosse Content-Seite

## Vorteil
* Enterprise
* E-Commerce
* Modules

--s--
# Drupal
## Nachteile
* Eher kleine Community
* Wenige Devs auf dem Markt

--s--
# Neos
## Vorteile
* Editor Experience
* Content-Dimensions


--s--
# Neos
## Nachteile

* Kleine Community
* Wenig Module
* Backend hat kein gutes Rechtesystem
