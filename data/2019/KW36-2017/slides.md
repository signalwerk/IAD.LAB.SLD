### HF Interactiondesign

# Thesis

Stefan Huber · Zürich · 2019 <!-- .element: class="footer" -->
--s--
## Übersicht

* **12:45**
* Organisation/News/Agenda
* Rückschau & Festigung
* Abgabe Boris
* Thesis
* **16:15** · Ende

--s--
# Organisation
* [Case Study – Interface](https://logrinto.github.io/IAD2017.timetable/#KW37-2019)
  * Schulzimmer per Slack
  * Zusammen mit IAD2019

--s--
# Organisation

* Rückmeldung LAB

--s--
## Arbeitslast

# Umfrage
* Wie war die Arbeitslast in den letzten Wochen? (😭 💤 ☺️)

--s--
## News
* Facebook Libra Coin
* [Facebook Leak](https://techcrunch.com/2019/09/04/facebook-phone-numbers-exposed/)
* [Facebook Dating](https://www.theverge.com/2019/9/5/20850307/facebook-dating-united-states-launch)
* Jony Ive verlässt Apple

--s--
## Facebook Libra Coin
* Breites Konsortium (Libra Association)
* Hauptsitz in Genf
* Blockchain der Libra Association
* Soll im 2020 starten
* Smart Contracts möglich
* Währungskorb sichert Libra

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
## Jony Ive
* **1985** · Jobs verlässt Apple
* **1992** · Ive kommt zu Apple
* **1997** · Apple is doomed!
* **1997** · Jobs kommt zurück zu Apple
* **1997** · Ive wird senior vice president of industrial design

Quelle: <!-- .element: class="footer" --> [Wikipedia](https://en.wikipedia.org/wiki/Jony_Ive)

--s--
## Jony Ive
* **2011** · Jobs stirbt
* **2012** · «provide leadership and direction for Human Interface (HI) across the company in addition to his role as the leader of Industrial Design.»
* **2013** · Senior Vice President of Design
* **2015** · chief design officer (CDO)
* **2019** · Ive verlässt Apple


Quelle: <!-- .element: class="footer" --> [Wikipedia](https://en.wikipedia.org/wiki/Jony_Ive)


--s--
## UI Design
* [2013 · iOS 7](http://osxdaily.com/2013/06/11/ios-7-vs-ios-6-visual-comparison/)

--s--
## Jony Ive – Design fails

* Was ist das schlimmste Design von Ive?

--s--
## Jony Ive – Design fails
* [1998 · Hockey Puck Mouse](https://www.google.com/search?q=hockey+puck+mouse&tbm=isch)
* [2015 · Magic Mouse 2](https://www.google.com/search?q=magic+mouse+2+fail&tbm=isch)


--s--
## Buchempfehlung
[Designed by Apple in California](https://www.apple.com/uk/shop/product/MLXF2LL/A/designed-by-apple-in-california-260x324-mm)

--s--
## Agenda
* [Tÿpo St. Gallen](https://www.typo-stgallen.ch/) · 8. – 10. 11. 2019
* [Das Internet](https://neu.schauspielhaus.ch/de/spielplan/403/das-internet) · September 2019

--s--
## Responsive Design · Abgabe Boris

* [Rückmeldungen Anschauen](https://github.com/logrinto/website/issues)
* (Header-)bilder haben keine Quellangaben (am Ende des Posts einfügen)
* Sind die verwendeten Bilder wirklich copyright-frei?
* Links bitte mit Text!

--s--
## Links

* [https://www.balblaba.de/pfad/lang/wäk](https://www.balblaba.de/pfad/lang/wäk)
* [Blogpost über fluide Typografie von Karsten Fischer](https://www.balblaba.de/pfad/lang/wäk)

--s--
# Thesis

--s--
## Thesis · Aufgabestellung

* [Aufgabestellung](https://signalwerk.github.io/IAD.LAB.DOC/thesis/)
* Entwicklung in eigenem Branch & fortwährend push (= Backup)
* push to `master` von Zeit zu Zeit (Empfehlung)
* Abgabe digital auf [Repository](https://github.com/logrinto/IAD2017.thesis)

--s--
## Thesis · Installation

* [Node installieren (Version **10** – 12)](https://nodejs.org/en/)
  * Kennt ihr [nvm](https://github.com/nvm-sh/nvm#installation-and-update)?
* [yarn installieren](https://yarnpkg.com/lang/en/docs/install/#mac-stable)
  * Kennt ihr [brew](https://brew.sh/)? `brew install yarn`
  * sonst: `curl -o- -L https://yarnpkg.com/install.sh | bash`


--s--
## Thesis · Vorbereiten

* [Repository klonen](https://github.com/logrinto/IAD2017.thesis)
* Branch erstellen (`{{vorname}}`)
* Beispiel von `sites/example/src/pages/-example/` kopieren
  * Zielpfad: `sites/example/src/pages/IAD2017--{{vorname}}/`


--s--
## Thesis · 1st Steps

* edit `.../IAD2017--{{vorname}}/index.md`
* `path: "/posts/2020/example/"` ändern in
  * `path: "/posts/2020/{{vorname}}/"`
* später könnt ihr `{{vorname}}` durch einen sinnvollen [slug](https://prettylinks.com/2018/03/url-slugs/) ersetzen

--s--
## Thesis · Starten

* im Verzeichnis: `yarn` ausführen (für installation) nicht `npm install`!!
* im Verzeichnis: `npm run start` ausführen
* öffne [http://localhost:8000/](http://localhost:8000/)
* öffne [http://localhost:8000/posts/2020/{{vorname}}/](http://localhost:8000/posts/2020/{{vorname}}/)
--s--
## Probleme

* URL wurde angepasst aber wird nicht angezeigt → erneut `npm run start`
* Bilder aktualisieren nicht → `/sites/example/.cache` löschen & `npm run start`

--s--
## OK?

* Hat alles funktoniert?
* Kann jeder Pushen?
* **Jetzt** branch pushen
  * Checkout `master`
  * Pull `master`
  * Merge `{{vorname}}`
  * Push zu `master`
  * Checkout `{{vorname}}`
--s--
## Website wird erstellt

* Status [![Build Status](https://travis-ci.org/logrinto/IAD2017.thesis.svg?branch=master)](https://travis-ci.org/logrinto/IAD2017.thesis)
* https://thesis.logrinto.ch/

--s--

## Freies arbeiten

--s--
## Hausaufgabe
