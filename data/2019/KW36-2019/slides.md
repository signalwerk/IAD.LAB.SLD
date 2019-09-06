### HF Interactiondesign

# HTML & CSS 1×1

Stefan Huber · Zürich · 2019 <!-- .element: class="footer" -->
--s--
## Übersicht


* **12:45**
* Organisation/News/Agenda
* Rückschau & Festigung
* Setup Git-Client
* HTML & CSS 1×1
* Zeit für Dokumentation
* **16:15** · Ende


--s--
# Organisation
* [Case Study – Interface](https://logrinto.github.io/IAD2019.timetable/#KW37-2019)
  * Schulzimmer per Slack
  * Zusemmen mit IAD2017

--s--
## Dropbox/Google-Drive
* Einsammeln der Unterlagen
* Gemeinsame Website?

--s--
## Arbeitslast

# Umfrage
* Wie war die Arbeitslast in den letzten Wochen? (😭 💤 ☺️)

--s--
## Lohnumfrage

--s--

## News
* [Facebook Leak](https://techcrunch.com/2019/09/04/facebook-phone-numbers-exposed/)
* [Facebook Dating](https://www.theverge.com/2019/9/5/20850307/facebook-dating-united-states-launch)
--s--
## Facebook Leak

* Verlieren 419 Millionen Datensätze
* E-Mail, Telefon, Geschlecht, ...
--s--
## Dating-App
* Schnell wachsender Markt
* [Mark langfristig tot?](https://www.toptal.com/finance/business-model-consultants/online-dating-industry)
* [20 % Marktanteil für Tinder (US)](https://sensortower.com/blog/dating-apps-1-million-revenue-q1-2019)
* [okcupid Blog](https://theblog.okcupid.com/daters-got-woke-in-2017-48737600974c)


--s--
## Agenda
* [Tÿpo St. Gallen](https://www.typo-stgallen.ch/) · 8. – 10. 11. 2019
* [Das Internet](https://neu.schauspielhaus.ch/de/spielplan/403/das-internet) · September 2019




--s--
# Rückschau

--s--
## Passwörter speichern

* Nie im Klartext speichern!
* Hacker oder Administratoren könnten sonst das Passort klauen
--s--

## Passwörter speichern

# In meiner Datenbank steht:  
**Username:** stefan  
**Passwort:**  
<small>$2a$07$ZX48iEznJwnHHcIMn0JgcOwzlpqCwpywNmv6gE9GcNnyy2kzorjcG</small>
--s--
# Im Jahr 2019 😻
--s--
# Im Jahr 2119 😭?
--s--
##  Struktur soll übermittelt werden
* Titel (1 Level)
* Text
* Liste
--s--
## Verschiedene Konzepte

* Umschliessende Formatierungen
  * davor/dahinter gleich: `°.°`Einkaufsliste`°.°`
  * davor/dahinter anders: `(..T)`Titel`(T..)`
* Prefix Formatierungen
  * `(1)`Die erste Aufgabe
  * `..`erster Schultag

--s--
## HTML Tags

* `<p>`...`</p>` = Paragraph (Textabschnitt)
* `<h1>`...`</h1>` = Heading 1 (Titel 1. Stufe)
* `<ul>`...`</ul>` = Unordered List (Liste ungeordnet)
* `<li>`...`</li>`  =  List Item (Listenelement)
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
## «HTML-Rumpf» fehlt
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




## Github?
* Anbieter: [github.com](https://github.com/)
* Technologie: git
<br>
<br>

## Dienste
* Versionsverwaltung (git)
* Wiki
* Issues


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
## Demo mit Sourcetree

* [Repo](https://github.com/signalwerk/portfolio-iad2019)

--s--
## Pull Requests
* Dient zur Zusammenarbeit
* Einfaches Reviewing
--s--
## Pull Requests

# Demo
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

Datei `main.css` im Ordner `styles` erstellen.

### Zeile Einfügen
```
    <link rel="stylesheet" type="text/css" href="./styles/main.css">
```

### Neuer Header

```
  <head>
    <meta charset="utf-8">
    <title>Test</title>
    <link rel="stylesheet" type="text/css" href="./styles/main.css">
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
