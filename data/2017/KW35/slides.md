
### HF Interactiondesign
# Herzlich willkommen!



Stefan Huber, Zürich – 2017 <!-- .element: class="footer" -->
--s--
## Rückschau
--s--
## Diverses
* Semester & Lernziele
* Marshmallow Challenge

--s--
## Passwörter – Usersicht

* **Hohe Entropie (Chaos)** → pro Account neues Passowrt
* **Länge unbekannt** → möglichst lange
* **Verwendete Zeichen unbekannt** → fehlende Länge wettmachen
--s--
## Passwörter – Usersicht

* Verwendet ein Passwort-Manager!

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
`qs(salt + zahl)` → `hash`
--s--
## Passwörter – Anbietersicht
# Beispiel A
`qs(5 + 13)` → `qs(18)` → `9`
# Beispiel B
`qs(7 + 13)` → `qs(20)` → `2`

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
* Aufgabe · «Experimentelles Erzählen»
* HTML · 1×1
* **15:00** · Sitzung (~30min)
* HTML 1×1
* **16:15** · Ende

--s--
## Zur Erinnerung

**8:15 – 11:45** · eine Pause (30 min)  
Mittag 1h  
**12:45 – 16:15** · eine Pause (30 min)  
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
* kann später auch noch ausgebaut werden

--s--
## Wiki
# Github ist simpel

--s--
## Accounts erstellen

Einige haben schon einen Account!

# Github (Versionsverwaltung)
* [Anmeldung](https://github.com)
* [Education-Program](https://education.github.com/pack)
--s--
## Neues Repo erstellen

--s--
# Repository
* Technologie: git
* Eine Zusammenstellung an Dateien
* Versionsverwaltung als Ziel
* Sonstige Dienste dazu
--s--
## Divis vs. Halbgeviert

# - oder –
* Wo werden diese gebraucht?
* Wie werden diese eingegeben?
* Beispiele
--s--
## Kontakte sammeln per Slack

* {Vorname} | {Nachname} | {Slack-Namen} | {Github-Namen}

### Beispiel
* Stefan | Huber | signalwerk | signalwerk

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
## Lass uns das Ding sabotieren!
* Regel einhalten, aber sich einen Spezialfall überlegen

--s--
## Beispiel (unfair)
Heute hatten wir:  
(! Lab)  
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

#1. Schultag
Heute hatten wir:  
! Lab
--s--
## Beispiel
{1. Schultag}(Heute hatten wir:  
! Lab)  
<hr>
## Interpretation B

#1. Schultag <!-- .element: style="display: inline-block;" -->
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
## Was hat das mit Web zu tun?

* Web = HTML
* HTML = strukturierte Information

--s--
## Wenige Regeln
* Inhalt steht zwischen zwei Tags (`<p>Inhalt</p>`)
* Ein öffnender Tag am Anfang vom Inhalt (`<p>`)
* Ein schliessender Tag am Ende vom Inhalt (`</p>`)
* ...
--s--
## Simple Tags

* `<p>...</p>` = Paragraph (Textabschnitt)
* `<h1>...</h1>` = Heading 1 (Titel 1. Stufe)
* `<ul>...</ul>` = Unordered List (Liste ungeordnet)
* `<li>...</li>`  =  List Item (Listenelement)
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
## Next Step
[→ codecademy](https://www.codecademy.com/learn/learn-html-css)

--s--
## Hausaufgaben

* In jedem Semester sollen zwei Arbeiten im Portfolio dokumentiert werden
  * 1. Quartal – Experimentelles Erzählen
  * 2. Quartal – Grids & Modules
--s--
## Hausaufgaben

* [Dokumentation · Experimentelles Erzählen](https://signalwerk.github.io/IAD.LAB.DOC/exercise-exp-story/)




--s--
## Merci
--s--
