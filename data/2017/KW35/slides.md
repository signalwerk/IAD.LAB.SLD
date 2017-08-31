
### HF Interactiondesign
# Herzlich willkommen!



Stefan Huber, Zürich – 2017 <!-- .element: class="footer" -->
--s--
## News
# [WhatsApp business](https://faq.whatsapp.com/general/26000052)
* davor max. 256 Personen in Gruppe
* Schnittstellen fehlten bis jetzt
* Geschäfte können einen Badge bekommen
* User können Geschäfte blocken
--s--
## Agenda
# [Maker Faire Zürich](http://www.makerfairezurich.ch/de/)
# [Digital Festival](http://digitalfestival.ch/)
--s--
# Rückschau
--s--
## Diverses
* Semester & Lernziele
* Marshmallow Challenge
* Informatik
* Schulhaus
* ...
--s--
## Passwörter – Usersicht

* **Hohe Entropie (Chaos)** <br>→ pro Account neues «schlaues» Passwort
* **Länge unbekannt** <br>→ möglichst lange
* **Verwendete Zeichen unbekannt** <br>→ fehlende Länge wettmachen
--s--
## Passwörter – Usersicht

# Verwendet ein Passwort-Manager!

--s--
## Passwörter – Anbietersicht
# 3 Dinge speichern
* Username
* Salt
* Hash
--s--
# Salt? Hash?
--s--
# Zur Notation:

`add(1, 2)` → `3`

`add` = Funktionsname  
`1` = erstes Argument  
`2` = zweites Argument  
`3` = Ergebnis/Rückgabewert  
--s--
## Passwörter – Anbietersicht

# Hash
* `hash(salt + passwort)` → <br><br> <small>`$2a$07$ZX48iEznJwnHHcIMn0JgcOwzlpqCwpywNmv6gE9GcNnyy2kzorjcG`</small>

--s--
## Passwörter – Anbietersicht

# Schlechtes Beispiel mit Quersumme
`quersumme(salt + zahl)` → `hash`
--s--
## Passwörter – Anbietersicht
# Beispiel A
`quersumme(5 + 13)` → `quersumme(18)` → `9`
# Beispiel B
`quersumme(7 + 13)` → `quersumme(20)` → `2`

--s--
## Aufgabe
# Struktur soll übermittelt werden
* Titel (1 Level)
* Text
* Liste
--s--
# Und heute?

--s--
## Übersicht – Nachmittag

* **12:45** · Accounts erstellen & Installation
* Dokumente Strukturieren
* HTML · 1×1
* Aufgabe · «Experimentelles Erzählen»
* **15:00** · Sitzung LP517 (~30min)
* **16:15** · Ende

--s--
## Zur Erinnerung

**8:15 – 11:45** · eine Pause (30 min)  
Mittag 1h  
**12:45 – 16:15** · eine Pause (30 min)  
<br><br>
## [→ Online Stundenplan](https://logrinto.github.io/IAD2017.timetable/)
--s--
## Informatik-Probleme

*  Wie ist der Stand mit Christian Huber?
--s--
## Slack

* join #iad2017
--s--
## Arbeitslast

# Umfrage
* Wie war die Arbeitslast diese (KW35) Woche?

--s--
## Korrekte Zeichensetzung

# Divis vs. Halbgeviert
--s--
## Divis vs. Halbgeviert

# - oder –
* Wo werden diese gebraucht?
* Wie werden diese eingegeben?
* Beispiele
--s--
# hmm...
## Wohl nicht die letzte Frage
--s--
## Wiki zu Web-Typografie

* Jeder kann editieren
* Keine grosse Installation
* Kann später auch noch ausgebaut werden

--s--
## Wiki
# Github ist simpel
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
## Accounts erstellen

# Github.com
Einige haben schon einen Account!

* [Anmeldung](https://github.com)
* [Education-Program](https://education.github.com/pack)

--s--
## Kontakte sammeln per Slack

* {Vorname} | {Nachname} | {Slack-Namen} | {Github-Namen}

### Beispiel
* Stefan | Huber | signalwerk | signalwerk
--s--
# Repository
* Eine Zusammenstellung an Dateien
* Versionsverwaltung als Ziel
* Sonstige Dienste (Wiki, Issues, ...) dazu
--s--
## Neues Repo erstellen

--s--
## Divis vs. Halbgeviert

# - oder –
* Wo werden diese gebraucht?
* Wie werden diese eingegeben?
* Beispiele
--s--
## Installation
# Atom (Text-Editor)
* [Download](https://atom.io/)

--s--
## Social media
Wer macht Instagram?

--s--
## Dokumente Strukturieren
--s--
## Verschiedene Konzepte

* Umschliessende Formatierungen
  * davor/dahinter gleich: `°.°`Einkaufsliste`°.°`
  * davor/dahinter anders: `(T)`Titel`(T).`
* Prefix Formatierungen
  * `(1)`Die erste Aufgabe
  * `..`erster Schultag
--s--
## Beispiel-Regelsatz

* Ein Titel ist von öffnenden und schliessenden Nasenklammern umschlossen: `{Titel}`
* Ein Text ist von öffnenden und schliessenden Rundklammern umschlossen: `(Text text)`
* Eine Aufzählung/Liste beginnt immer auf einer neuen Zeile und startet mit einem Ausrufezeichen:<br>`! Liste`
--s--
## Beispiel Nachricht

{1. Schultag}  
(Heute hatten wir:)  
! Lab  
! Informatik-Einführung  
! Marshmallow Challenge  
--s--
## Lass uns das Ding sabotieren!
* Regel einhalten, aber sich einen Spezialfall überlegen

--s--
## Beispiel
{1. Schultag}(Heute hatten wir:  
! Lab)  
--s--
## Beispiel
{1. Schultag}(Heute hatten wir:  
! Lab)  
<hr>
## Interpretation A

# 1. Schultag
Heute hatten wir:  
! Lab
--s--
## Beispiel
{1. Schultag}(Heute hatten wir:  
! Lab)  
<hr>
## Interpretation B

# 1. Schultag <!-- .element: style="display: inline-block;" -->
Heute hatten wir: <!-- .element: style="display: inline-block;" -->
<ul style="display: block;">
  <li>Lab</li>
</ul>
--s--
## Sabotage!
* [3 Minuten](https://www.youtube.com/watch?v=z5rRZdiu1UE)
--s--
## Regeln Nachbessern!

* Umfang maximal Verdoppeln – sonst neu
--s--
## Sabotage!
* [3 Minuten](https://www.youtube.com/watch?v=z5rRZdiu1UE)
--s--
## Was waren die Probleme?
--s--
## Mögliche Probleme
* Escaping
* Weissraum
* Wo startet und wo endet Tag
* Wo startet und wo endet Liste
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
{1. Schultag}(Heute hatten wir:)  

--s--
## Wo startet und wo endet Tag
Zum Teil nicht ganz einfach zu unterscheiden.

<br>

## Beispiel
* ! Lab  ! Informatik-Einführung ! Marshmallow Challenge  

oder gar
* ! Lab!  ! Informatik-Einführung! ! Marshmallow Challenge!
--s--
## Wo startet und wo endet Liste
Semantisch muss zwischen Listen-Eintrag und Liste unterschieden werden.

<br>

## Beispiel
<hr>
* Lab  
* Informatik-Einführung  

<hr>
* Marshmallow Challenge  

<hr>

--s--
## Was hat das mit Web zu tun?

* Web = HTML
* HTML = strukturierte Information

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
# Go online!


--s--
## Hausaufgaben

* In jedem Semester sollen zwei Arbeiten im Portfolio dokumentiert werden
  * 1. Quartal – Experimentelles Erzählen
  * 2. Quartal – Grids & Modules
--s--
## Hausaufgaben

* [Dokumentation · Experimentelles Erzählen](https://signalwerk.github.io/IAD.LAB.DOC/exercise-exp-story/)


--s--
## Next Step
[→ codecademy](https://www.codecademy.com/learn/learn-html-css)



--s--
## Merci
--s--
