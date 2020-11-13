### HF Interactiondesign

# Typografie

Stefan Huber · Zürich · 2020 <!-- .element: class="footer" -->
--s--
## Übersicht


* **12:45**
* Organisation/News/Agenda
* Typografie
* Gespräche
* **16:15** · Ende

--s--

# Organisation


--s--

## Jahreseinkommen – HF2017 (Durchschnitt)

![](https://signalwerk.github.io/IAD.Chart/charts/IAD2017_income.svg) <!-- .element: class="pic" -->

--s--

## Jahreseinkommen – HF2019 (Durchschnitt)

![](https://signalwerk.github.io/IAD.Chart/charts/IAD2019_income.svg) <!-- .element: class="pic" -->



--s--

## Jahreseinkommen – HF2017 (Mittelwert)


![](https://signalwerk.github.io/IAD.Chart/charts/IAD2017_income_median.svg) <!-- .element: class="pic" -->


Höchst- und Tiefstverdienende gestrichen <!-- .element: class="footer" -->

--s--

## Jahreseinkommen – HF2019 (Mittelwert)


![](https://signalwerk.github.io/IAD.Chart/charts/IAD2019_income_median.svg) <!-- .element: class="pic" -->


Höchst- und Tiefstverdienende gestrichen <!-- .element: class="footer" -->

--s--

## Schriftmuster – FabLab & Bleisatz


--s--

## Arbeitslast

# Umfrage
* Wie war die Arbeitslast in den letzten Wochen? (😭 💤 ☺️)

--s--
## Zeugnis



--s--
## News

* [Link to Text](https://www.chromestory.com/2019/02/chrome-scroll-to-text/)
* [Prototype Fund](https://prototypefund.opendata.ch/)
* [Internet Health Report 2019](https://internethealthreport.org/2019/)
* ℹ️ Coronavirus
* ℹ️ [Twitter «Fleets»](https://9to5mac.com/2020/03/12/first-look-at-twitters-fleets-instagram-stories-like-feature/)
--s--
## 2020 Coronavirus (COVID-19)

* Anwesenheitspflicht
* Massnahmen


--s--
## 2020 Coronavirus (COVID-19)

* Digitalisierung bietet Chancen
* Homeoffice → wie arbeiten?
* Versorgung → wie einkaufen/liefern?
* Messen sind abgesagt → wie präsentieren?
* Kongresse sind abgesagt → wie verbinden?
* Kultur/Konzerte sind abgesagt → wie erleben?

--s--
## 2003 SARS

![sars](https://upload.wikimedia.org/wikipedia/commons/e/e0/2003_Probable_cases_of_SARS_-_Worldwide.svg)   <!-- .element: class="pic" -->


Quelle: <!-- .element: class="footer" --> [Wikipedia](https://en.wikipedia.org/wiki/Severe_acute_respiratory_syndrome)

--s--
## 2003 SARS

* **2003** [Taobao](https://www.digitalcommerce360.com/2020/02/05/how-sars-contributed-to-the-birth-of-china-ecommerce/) startet
  * Grösste e-Commerce-Site
  * c2c → taobao.com
  * b2b → alibaba.com
  * c2c → aliexpress.com


--s--
## Twitter «Fleets»

* Start in Brasilien
* kurzlebige Posts (ephemer/ephemeral)
* Twitters Form von «Stories»


--s--
## Stories

* **2013** [Snapchat](https://en.wikipedia.org/wiki/Timeline_of_Snapchat) (2011 gegründet)
* **2016** [Instagram](https://www.theverge.com/2016/8/2/12348354/instagram-stories-announced-snapchat-kevin-systrom-interview)
* **2017** [WhatsApp](https://techcrunch.com/2017/02/20/whatsapp-status/)
* **2019** [Facebook](https://home.bt.com/tech-gadgets/internet/social-media/facebook-stories-what-is-it-and-how-does-it-work-11364169985164)


--s--
## Instagram

* **2010** gegründet
* **2012** Facebook kauft [Instagram](https://www.zdnet.com/article/why-facebook-acquired-instagram-for-1-billion/)
  * Kaufpreis: $1 Milliard
  * 13 Angestellte
  * Kevin Systrom (CEO) wollte wohl das [doppelte](https://www.zdnet.com/article/instagram-ceo-wanted-2-billion-from-facebook-rumor/)

--s--
## WhatsApp
* **2009** gegründet
* **2014** Facebook kauft [WhatsApp](https://www.wsj.com/articles/facebook-to-buy-whatsapp-for-16-billion-1392847766)
  * Kaufpreis: ~[$19 Milliard](https://www.wsj.com/articles/facebook-to-buy-whatsapp-for-16-billion-1392847766)
* **2015** [Populärster Messanger](https://www.fool.com/investing/general/2015/09/11/facebook-incs-whatsapp-hits-900-million-users-what.aspx)
* **2020** [2 Miliarden User](https://blog.whatsapp.com/10000666/Two-Billion-Users--Connecting-the-World-Privately)



--s--
## Agenda

* [Games – Landesmuseum](https://www.landesmuseum.ch/games) · 17. 1. – 13. 4. 2020
* [Raven Kwok](https://muda.co/ravenkwokopening/) · 7. 3. – 19. 7. 2020

--s--
# Fonts im Web

--s--
## Variable Font

* [Aufgabe Variable Font einbauen](https://github.com/logrinto/IAD2019.variable-fonts)





--s--
## Fonts im Browser

* Web Safe Fonts (Systemfonts)
* Fonts mitsenden (Webfonts)
--s--
## Web Safe Fonts (Systemfonts)
--s--
## Web Safe Fonts (Systemfonts)

```CSS
p {
  font-family: Arial, Helvetica, sans-serif;
}
```

* Schrift ist auf Host installiert
* Fallbacks um mehrere mögliche Schriften ab zu decken

[→ sfgz.ch](http://sfgz.ch/)
<!-- .element: class="footer" -->

--s--
## Fonts mitsenden (Webfonts)

--s--
## Browser mit Webfont-Unterstüzung
* Internet Explorer 4+ (seit 1997 möglich!)
* Chrome 4.0+
* Firefox 3.5+
* Safari 3.1+
* Opera 10+

[→ Can I use …](https://caniuse.com/#feat=fontface)
<!-- .element: class="footer" -->

--s--
## Verschiedene Formate

* Embedded OpenType (.eot)
* Web Open Font Format (.woff)
* Web Open Font Format 2.0 (.woff2)
* andere (svg/otf/fft)
--s--
## Fallbacks


```css
@font-face {
  font-family: 'Open Sans';
  src: url('opensans-regular-webfont.eot');
  src: url('opensans-regular-webfont.eot?#iefix') format('embedded-opentype'),
  url('opensans-regular-webfont.woff2') format('woff2'),
  url('opensans-regular-webfont.woff') format('woff'),
  url('opensans-regular-webfont.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
```

--s--
## Moderne Formate – Web Open Font Format
* **2009** [WOFF](https://www.w3.org/TR/WOFF/) (.woff)
  * Komprimierter OpenType-Font
* **2014** [WOFF 2.0](https://www.w3.org/TR/WOFF2/) (.woff2)
  * wie WOFF aber mit [Brotli-Kompression](https://en.wikipedia.org/wiki/Brotli)


[→ sfgz.ch](http://sfgz.ch/)
<!-- .element: class="footer" -->
--s--
## Browser mit WOFF-Unterstüzung
* Internet Explorer 9+
* Chrome 5+
* Firefox 3.6+
* Safari 5.1+
* Opera 11.5+
* Microsoft Edge


[→ Can I use …](https://caniuse.com/#feat=woff)
<!-- .element: class="footer" -->
--s--
## Fonts mitsenden (Webfonts)


```css
@font-face {
  font-family: 'Open Sans';
  src: url('opensans-regular-webfont.woff2') format('woff2'),
  url('opensans-regular-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
```

anwenden
```CSS
p {
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
}
```

[→ Webfont konvertieren](http://www.fontsquirrel.com/tools/webfont-generator)
<!-- .element: class="footer" -->



--s--
## Fonts vom CDN

### CSS

```CSS
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

p {
  font-family: 'Open Sans', sans-serif;
}
```
--s--
## Fonts vom CDN

### HTML

```
<link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet'>
```
### CSS

```CSS
p {
  font-family: 'Open Sans', sans-serif;
}
```



--s--
# Variable Fonts

--s--
## Variable Fonts

### Vorläufer
* [Viewport Sized Typography](https://css-tricks.com/examples/ViewportTypography/)
* [A List Apart – Live font interpolation](https://alistapart.com/article/live-font-interpolation-on-the-web/)
* [Font‑To‑Width](http://font-to-width.com/)
--s--
## Variable Fonts

* [→ Oktober 2016 Standardisiert](https://blog.typekit.com/2016/09/14/variable-fonts-a-new-kind-of-font-for-flexible-design/)
* [→ Browser Support](https://caniuse.com/#feat=variable-fonts)

--s--
## Variable Fonts

Demo [→ nobotoflex](https://www.axis-praxis.org/specimens/nobotoflex)



```CSS
p {
  font-variation-settings: "wdth" 600, "wght" 200, "opsz" 48;
}
```





--s--
## Transitions
Definiert, wie von einem Objekt-Zustand in den Nächsten übergeführt wird.  

* [→ Eigenschaften](http://css3.bradshawenterprises.com/transitions/)
* [→ Diverse Beispiele](http://animista.net/)

--s--
## Transitions

* [→ Codepen](https://codepen.io/pen/)
* [→ Editor](https://matthewlein.com/tools/ceaser)

### use
```css
.tst {
  transition: transform 1s; /* transform 1s ease */
  transform: scale(1);
}

.tst:hover {
  transform: scale(1.5);
}
```

--s--
## Animation
Ermöglicht diverse Zwischenschritte der Animation.  
[→ Editor](http://cssanimate.com/) [→ Editor](http://angrytools.com/css/animation/)

### use
```css
.bounce {
  animation-duration: 1s;
  animation-name: bounce;
}

@keyframes bounce {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
}

```

--s--

## Variable Font – Steps

* [Variable Font einbauen](https://github.com/logrinto/IAD2019.variable-fonts)
* [Pull Requests?!🤓](https://github.com/logrinto/IAD2019.variable-fonts/pulls)
* siehe `/docs/fonts/-example/`)
* GitHub-Repo klonen
* Font nach `/docs/fonts/{name}/webfont/` kopieren
* CSS in `/docs/fonts/{name}/styles.css` ergänzen
* in HTML-Seite Testwort einsetzen





--s--
## Aufgabe

* [Aufgabe · Fachwörter](https://signalwerk.github.io/IAD2019/exercise-type-terms/)

* Bis 21. 3. 2020 gegenseitiges Review
* Entwürfe im Code (Austausch)
* Transitions?


--s--
## Font einbauen

* Jede Person wählt ein Fachwort (Nachricht in Slack für Koordinatino) – Gerne auch eigene Fachwörter
* Gemeinsam machen wir eine Arbeit
* Jede·r visualisiert dieses Fachwort und schreibt einen Text dazu



--s--
## Gespräch

* Rückschau 1. Semester
* Zwischenprüfung
* Noten & [Case Study 5. Semester](https://logrinto.ch/posts/case-study-self-Service/)
* Ist alles OK?

--s--
## Gespräch
* Nina Diem
* Patrick Hoffmann
* Samira Duddek
* Sina Obitsch
* Sam Diener

--s--
## Gespräch
* Selina Strickler
* Desirée Lanz
* Joshua Kehrer
* Chantal Hugentobler
