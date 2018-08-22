### HF Interactiondesign

# 3. Semester #yay

Stefan Huber, Zürich – 2018 <!-- .element: class="footer" -->
--s--
## Übersicht

* **08:15**
* Organisation/News/Agenda
* Cookie-Clicker
* Font für Laserung aufbereiten
* **11:45** · Ende
--s--

## Übersicht

* **12:45**
* CLI
* Variable Fonts aufbereiten
* Cookie-Clicker
* **16:15** · Ende

--s--
# Organisation

--s--
## 3. Semester

* [→ Semesterplan](https://logrinto.github.io/IAD2017.timetable/)
  * Userinterface & Editorial Design
  * Infografik & Motion Design
  * Code & Design
--s--
## Lab

* Kleinere Aufgaben
* Agileres Vorgehen
* Unterstützung von Infografik
* Arbeiten mit Inhalt geht weiter... 🧐

--s--
## Lab
* [→ Lernziele](https://github.com/logrinto/IAD2017/blob/master/lernziele/2018HS/lab.md)
  * JavaScript
  * CLI
  * CSS-Transitions und -Animations
  * …
--s--
## 31.08.2018

### Digital Fabrication
* Fablab Zürich, Zimmerlistrasse 6, 8004 Zürich
* Thomas Amberg
* Mittagessen eher schwierig

--s--
## 07.09.2018

### Digitale/Analoge Produktionsmittel
* Lp U56 – Bleisatzzimmer
* Rudolf Barmettler
* Gestaltung vor Technologie
--s--
## Worknights

--s--
# Case Study
* [Bewertung](http://logrinto.ch/posts/case-study-redesign-etherpad/)
* OK zum an die Mailingliste zu submitten?
--s--
# Lab
* Bewertung
--s--
## Zeugnisse

* Ab Semester 3 jeweils vor Semesterende

--s--
## Umfrage

* Gibt es Redebedarf? Wünsche?
* [Umfrage zum 2. Semester]()

--s--
## News
* Twitter API [→ Mastodon](https://mastodon.social/)
  * Tuut
--s--
## Mastodon

* Föderiertes System (Verteilte Instanzen)
* Jeder Benutzer ist bei einer Instanz

--s--
## Agenda
* Digital Festivals
* [gameZfestival 18](http://www.gamezfestival.ch/)

--s--
# CLI
--s--
## Git

* Git nur die Grundlagen
* Alex wird Details mit euch machen

--s--
## CLI

* Commandline Interface (CLI)
  * Unix-Ursprung
  * Terminal als Interface
  * Maus nicht unterstützt oder nur rudimentär

--s--
## Linux
* Linux is das meist verwendete Serverbetriebsystem
* Die meisten Server haben kein GUI-Interface sondern nur das Terminal
* Verbinung auf Server mittels `ssh`

--s--
## Demo

* [sfgz.ch](http://sfgz.ch)

--s--
## MacOS

* MacOS hatte als Basis BSD
* BSD/MacOS sind POSIX kompatibel (Standard)
* MacOS hat viele der Unix-Tools im Standardlieferumfang
* MacOS verwendet bash als CLI andere CLI können installiert werden

--s--
## Wichtige Befehle

* `cd ...` → in ein Verzeichnis wechseln (change directory)
* `ls` → inhalt im aktuellen Verzeichnis anzeigen
--s--
## Flags

* `ls`
* `ls -l`
* `ls -a`
* `ls -l -a`
* `ls -la`

--s--
## Parameter
* `ls .`
* `ls test`
* `open test`

--s--
## manual pages
* `man ls`

--s--
## Laufzeit

* Die meisten Befehle werden ausgeführt und das Programm endet
* Einige Programme haben interfaces und enden nicht automatisch
* Wenn ein Program abgebrochen werden soll, so kann dies häufig mit `ctrl+c` geschehen

--s--
## Verzeichnisse

* `cd test` → wechselt in Verzeichnis `test`  
* `cd ..` → wechselt in Parent-Verzeichnis
* `cd ~` → wechselt ins Benutzer-Verzeichnis

--s--
## Erstellen und Löschen

* `mkdir test` → Verzeichnis `test` erstellen
* `touch test.txt` → Datei `test.txt` erstellen

* `rm test.txt` → Datei `test.txt` löschen
* `rm -r test` → Verzeichnis `test` löschen

--s--
## Curl

* `curl -o index.html http://...` → Datei herunterladen und als `index.html` speichern

--s--
## Git

* `git clone ...` → Klonen eines Repositories
* `git status` → zeigt veränderte Files
* `git add test` → fügt ein File zum Tracken hinzu
* `git commit -m Test` → macht einen Commit (Eintrag) mit dem Kommentar `Test`
* `git push orgin` → Publiziert die Commits auf einen anderen Server namens `orgin`

--s--
## Erweiterung

* [Brew]() erweitert um neue Tools
* Mit `brew cask instal ...` können viele GUI tools installiert ewrden

--s--
## Beispiel – Bilder skallieren

* `brew cask instal convert`

```
convert test.tiff -resize 2000 -quality 80 -colorspace sRGB test.jpg
```
--s--
## Beispiel in Kombination
```
for f in *.tif;
  do  
    convert "$f" -resize 2000 -quality 80 -colorspace sRGB "$(basename "$f" .tif).jpg";
done
```
--s--
## Aufgabe

* Erstellt ein `bash`-Script
  * Holt von einem github-Repo ein «Starter-HTML» mit dem namen `index.html`
  * Erstellt ein Ordner «assets» für Bilder und Fonts
  * Erstellt im Ordner «styles» ein leeres CSS mit dem Namen `main.css`
  * Erstellt im Ordner «js» ein leeres JS mit dem Namen `main.js`

--s--
## Cookie-Clicker

* Kennt jemand den Begriff Cookie-Clicker?
--s--
## Sinnlos

* Cookie-Clicker
* Shwarmaspin

--s--
## Aufgabe

* Jeder macht seinen "Cookie-Clicker"
* Es muss kein Cookie sein
* Überlegt euch weitere Spielmechaniken
* Wir brauchen eine Intro-Seite

--s--
## Was wir brauchen

* Konzept
* Design
* Code
--s--
## Konzept

* Jede Person denkt sich eine Spielmechanik aus
* Spielmechanik und Design sollten passen

--s--
## Design
* Beginnen mit statischem Inhalt → später simple Animation
* Mobile und Desktop berücksichtigen

--s--
## Code

* Interaktion auf Cookies
* Zähler

--s--
## JavaScript

* Programmiersprache
* Interpretiert und nicht Kompiliert
* Meist verwendet in Browser
* Kann auch auf Server verwendet werden
* Diverse Revisionen (ES3, ES5, ES2017, ...)
--s--
# Fokus

* Der Bedarf soll die Neugier wecken
* Kein Vollständiger JavaScript-Kurs
* Touringcomplete → man kann alles machen
* Hannah wird in Code & Design auf den Grundlagen aufbauen

--s--
## Standardisierung

--s--
## Referenzen

* [Codecademy](https://www.codecademy.com/learn/learn-javascript)
* [MDN Web Do](https://developer.mozilla.org/)
* [Stackoverflow](https://stackoverflow.com/)
--s--
## Libraries

* Vereinfacht gewisse Arbeitsschritte (Abstraction)
* Erweitert Funktionsumfang

--s--
## Einbinden



--s--
## Keywords

`let` / `var` → Variable definieren;
### use
```  
let counter = 0;
let message = "Hallo";
```

--s--
## Nützliches

`console.log()` → Variable definieren;
`//`  → Kommentar


--s--
## Font für Laserung aufbereiten
* Box um Font
* Alles in Pfad umgewandelt

--s--
## Variable Fonts aufbereiten
* gleiche Anzahl Punkte
* gleiche Reihenfolge der Konturen
* Prüfen ob alles stimmt



* Falsche Farben >>>
  https://logrinto.github.io/IAD2017.schriftmuster/  → Roboto
  internezzo.ch → color





– Font korrigieren
Font aufbereiten.

neues semester
  - travis
  - github
  - git-cli, git-flow
  - cli
  - animation
  - cookie clicker
  - semesterumfrage
  - bekannte internet personen
