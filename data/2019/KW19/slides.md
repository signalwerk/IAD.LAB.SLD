### HF Interactiondesign

# Chat

Stefan Huber, Zürich – 2019 <!-- .element: class="footer" -->
--s--
## Übersicht

* **12:45**
* Organisation/News/Agenda
* Chat
* Icons
* **16:15** · Ende

--s--
# Organisation
--s--
## Website Logrinto

* [Repository](https://github.com/logrinto/website)

--s--
## Rückmeldung
* Case Study
* Doku
--s--
## Arbeitslast

# Umfrage
* Wie war die Arbeitslast in den letzten Wochen? (😭 💤 ☺️)

--s--
## News


* [RFC wird 50](https://www.internetsociety.org/blog/2019/04/celebrating-50-years-of-the-rfcs-that-define-how-the-internet-works/)
* [Google](https://edition.cnn.com/2019/05/07/tech/google-io-conference/index.html)
  * Dark Mode für Android
  * Verbesserung für google Assistant (weather → and tomorrow)
--s--
## RFC

* Request for Comments
* [IETF | Internet Engineering Task Force](https://www.ietf.org/)
* RFC 1 – ARPA Network
* [Podcast](https://requestforcomments.de/)

--s--
## Agenda

* [E-Learning Konferenz](https://paul.zhdk.ch/course/view.php?id=215) · 16./17. Mai 2019,
* Juni ZHdK Diplomausstellung
* [Videoex](https://videoex.ch/) · 25. Mai – 2. Juni
  * [B-Sides Festival 2019](http://festival.b-sides.ch/2019/)
  * [B-Sides Festival 2016](http://festival.b-sides.ch/2016/)

--s--
# Chat
* Update
* Austausch in Klasse
* Issues
--s--
## Gruppenarbeit?

* Wer macht eine Gruppenarbeit?
* Organisation?

--s--
## Update

[Update für Aufgabe](https://signalwerk.github.io/IAD.LAB.DOC/exercise-chat/)

* Anzeige neue Nachrichten in Chat-Übersicht
* ~~Preview im Chatverlauf für YouTube-Filme~~
* Header oberhalb von Chat (Danke an Nils)

--s--
## Austausch in Klasse

* Chat-Verlauf
* Schreiben/Senden
* Konversationsübersicht

--s--
## Arbeitsart
* Statischer Entwurf
* Code

--s--
## Chat-Verlauf

* Screenshot: zwei Bubbles (du/ich)
* Wo steht die Zeit? Warum?
* Wer ist links, wer ist rechts? Warum?
* Form/Farbe von Bubble?
* Wie breit ist die Bubble?
* Hintergrund?

--s--
## Schreiben/Senden

* Screenshot: Eingabemaske
* Wie hoch? Wie ist das Padding?
* Sende-Button? Hover?

--s--
## Konversationsübersicht

* Screenshot: zwei Items
* Form/Proportion von Bild?
* letzter Text: Länge? Position?
* Aktiv-State?

--s--
### Alles

* Screenshot: Desktop
* Screenshot: Mobile

--s--
## Präsi 24. Mai 2019

* Kurzpräsentation von Grundlayout in CSS
* Mobile und Desktop Skallierung/Platzierung von Chat-Verlauf, Schreiben/Senden und Konversationsübersicht
* Inhalte müssen noch nicht stimmen

--s--
## Programmierung
--s--
## Complexity Points
* Keine Zeit sondern Komplexität
* Mit der Erfahrung kann man aus der Komplexität, Umfang und Risiko/Unklarheit etwa Zeiten ableiten
* [Artikel](https://www.atlassian.com/agile/project-management/estimation)
* Ich schaffe 9 Punke an Complexity bis 24. Mai 2019 (oder ein 13er)
--s--
## Issues
* [Neue Funktionen](https://github.com/logrinto/IAD2017.chat/issues)
--s--
## Icons
--s--
## Arbeitsart
* Hat jemand eine Animation entworfen?
--s--
## Alle Icons

* [Icons Sitchen](https://www.fotor.com/features/photo-stitch.html)
* Wo braucht es ein Icon? Warum?
* Wie ist der Hover-State? Animation?

--s--
## Merci

--s--
# Icons
* Guide
* Tools
* CSS Animation
--s--
## Guide

* [Interface Icons](https://medium.muz.li/icon-set-3b4fc87dc6b5?gi=8e9a175acfe7)

--s--
## Tools
* [ImageOptim Bildoptimierung](https://imageoptim.com/mac)
* [SVG Komression](https://jakearchibald.github.io/svgomg/)
* [cssanimate Editor](http://cssanimate.com/)
* [angrytools Editor](http://angrytools.com/css/animation/)
* [svgcircus Editor](https://svgcircus.com/) (Achtung! JS-Export)
* [shapeshifter Editor](https://shapeshifter.design/) (Achtung! Export...)
* [Icons von SVG als Font](http://fontello.com/)
--s--
## CSS Animation mit Keyframes
Ermöglicht Zwischenschritte in Animation.  

```css
circle {
  animation-duration: 1500ms;
  animation-name: bounce;
  animation-iteration-count: infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20%);
  }
}

```

--s--
## Verzögerung
```css
  #ovalTwo {
    animation-delay: 500ms;
  }

```
--s--
## Zusammenbauen

```html
<svg ...>
    <style type="text/css" >
        <![CDATA[
          ...css...
        ]]>
    </style>
    ...geometrie...
</svg>

```


--s--
## Artikel

* [Animating SVG with CSS](https://css-tricks.com/lodge/svg/22-animating-svg-css/)
* [Animating SVG with SMIL](https://css-tricks.com/lodge/svg/23-animating-svg-smil/)
  * [SMIL Beispiel](https://cdn.jsdelivr.net/gh/signalwerk/talk.fonts2019@6d66b94b7dd8bd143cae5c902761916ff0b2e60a/img/replace/Logical/SVG/cat-animation.svg)
  * [SMIL Beispiel](https://sfgz.ch/_Resources/Static/Packages/signalwerk.sfgz/Assets/Images/logo/generated/disappear/background04_d.svg)
--s--
## Freies Arbeiten
--s--
Merci
--s--






--s--

bandbreite von Black Hole
