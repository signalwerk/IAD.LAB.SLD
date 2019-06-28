### HF Interactiondesign

# Chat

Stefan Huber, Zürich – 2019 <!-- .element: class="footer" -->
--s--
## Übersicht

* **12:45**
* Organisation/News/Agenda
* Dark Mode
* Chat · Präsentation
* Blog · Boris
* **16:15** · Ende

--s--
# Organisation

* Krankheit
--s--
# Blog
* Heute – Blog aufbereiten – Schwierigkeiten ausmachen
* 12. 07. 2019 → Boris Blog publizieren

--s--
## Arbeitslast

# Umfrage
* Wie war die Arbeitslast in den letzten Wochen? (😭 💤 ☺️)

--s--
## Agenda

* [Frontend Conference ZH](https://frontconference.com/) · 29/30. 08. 2019
* Sommerpause?!

--s--
## News
* ZHdK – Diplomausstellung
* [WWDC – Apple — 3. 6. 2019](https://www.apple.com/uk/newsroom/2019/06/the-new-ipados-powers-unique-experiences-designed-for-ipad/)
  * iOS 13 – Fonts
  * iOS 13 – Dark Mode

--s--
## Fonts in iOS

* Können über App Store installiert/gekauft werden
* Nur «boutique and major vendors» kommen in den Store (Adobe, DynaComware, Monotype, Morisawa, Founder)
* Fonts könne auf der Ebene des Betriebsystems installiert werden (alle Apps haben Zugriff)
* Für Websites ändert sich nichts (da Webfonts)

--s--
## Dark Mode

--s--
## Dark Mode

* **OLED-Displays** → brauchen für hellere Farben mehr Strom
* **LCD-Displays** → bruachen für alle Farben immer (etwa) gleichviel Strom


--s--
## Apps

* Programme konnten (schon immer) ihre eigenen UI-Farben wählen
* Auf Mobile unterstützten einige Apps einen Dark Mode über Settings
--s--
## Neu

* User wählt im OS was für ein Farbschema gewünscht ist
* Settings werden von Apps respektiert
* User muss nicht jede App einzeln umstellen
* Darkmode kann zum Beispiel zeitgesteuert ein-/ausgeschaltet werden

--s--
## Betriebsystem
* **MacOS Mojave (2018)** erster Dark Mode auf Desktop
* **Android 9 (2018)** erster Dark Mode auf Mobile
* **iOS 13 (2019)** Dark Mode auch auf Apple Mobiles

--s--
## Browser

* neue Browser können CSS gemäss Mode (light/dark) aktivieren
* User erhält seine prefärenz auch auf Website

--s--
## Light Mode · Default

```css
/* light mode */
body {
  color: black;
}
```
--s--
## Media Query · Viewport

```css
/* viewport width */
@media only screen and (min-width: 960px) {
  /* definition here */
}
```
--s--
## Media Query · Dark Mode

```css
/* cark mode */
@media (prefers-color-scheme: dark) {
  /* definition here */
}
```
--s--
## Media Query

```css
/* light mode */
body {
  color: black;
}

/* dark mode */
@media (prefers-color-scheme: dark) {
  body {
    color: #eee;
    background-color: #222;
  }
}
```
--s--
## Browser Support

* Firefox 67 (aktuelle Version)
* Safari 12.1 (aktuelle Version)
* Chrome 76 (next) kommende Version

--s--
## Browser Support
* [Chrome · Schedule](https://www.chromestatus.com/features/schedule)
* [Chrome · prefers-color-scheme](https://www.chromestatus.com/feature/5109758977638400)

--s--
## Übung

* [Test](https://codepen.io/signalwerk/pen/PrOXgz)

--s--
## Stolpersteine

* Dark ≠ Black
* Farbabstufung muss neu gelernt werden
* Mail-Clients können auch Black Mode!
* Assets (Bilder) müssen passen
* [Black Smearing](https://gist.githack.com/signalwerk/a4084f47fb6b56f79ca33055dd2ea9a3/raw/592a8821f8f7448d57c25f39ddcc3778f649ebdc/black-smearing.html)

--s--
## Black Smearing

* Welche Mobiles haben wir?
* Let's test it!

--s--
## Chat · Ablauf

* 1 Minute – Review
* 5 Minuten pro Person
  * +2 Minuten pro Gruppe
* 1 Minute – 3 Fragen

--s--
## Review
* 2er Gruppe
* Was ist gut/schlecht an der responsiven Ansicht?


--s--
## Chat · Präsentation

1. Schwierigkeit · Design
2. Schwierigkeit · Technik
3. Was finde ich bemerkenswert?

--s--
## Rückmeldung Chat

* Was denkt Ihr über diese Aufgabe?
* Nutzen oder Ärger?

--s--
## Website Logrinto

* [Repository](https://github.com/logrinto/website)
* Installieren
* Starten
* Blog in `/src/pages/articles` gemäss <br />`2017-10-26---Test`
* [Zusammenfassung einbauen](https://hackmd.io/bxGr1STTTlmpe-r_Q5UhEw?view)
