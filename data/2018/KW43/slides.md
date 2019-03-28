### HF Interactiondesign

# Cookie Clicker

Stefan Huber, Zürich – 2018 <!-- .element: class="footer" -->
--s--
## Übersicht

* **12:45**
* Organisation/News/Agenda
* Animation
* Cookie Clicker
* **16:15** · Ende

--s--
# Organisation
--s--
## Arbeitslast

# Umfrage
* Wie war die Arbeitslast in den letzten Wochen? (😭 💤 ☺️)

--s--
## News
* [Google+ ist tot](https://thenextweb.com/google/2018/10/08/google-plus-dead-security-flaw/)
* [Photoshop auf iPad](https://www.bloomberg.com/news/articles/2018-07-13/adobe-is-said-to-plan-photoshop-for-ipad-in-app-strategy-shift)
* [Bloomberg Geschichte](https://www.bloomberg.com/news/features/2018-10-04/the-big-hack-how-china-used-a-tiny-chip-to-infiltrate-america-s-top-companies)
--s--
## Agenda
* 25. – 27. 10. 2018 – [Digitaltag](https://digitaltag.zhdk.ch/)
* 9. November 2018 – [Swiss Interactive Media Design Day](http://www.imdsg.ch/)
* 9. – 11. November 2018 – [→ gameZfestival 18](http://www.gamezfestival.ch/)

--s--
## Worknights

* [→ Worknights Anzeige](https://logrinto.ch/events/web-worknights-hs-2018/)
* **2.11.2018** – Lightning Talk – [ramdajs](https://ramdajs.com/)
* **09.11.2018** – Lightning Talk – Typografie vs. Web
* **23.11.2018** – Lightning Talk – [React.js](https://reactjs.org/)
* **07.12.2018** – Lightning Talk – [Git](https://git-scm.com/  ) & [→ Github](https://github.com/)





--s--
## Animation

* Über neue `class` anstossen
* Über Transition oder Animation animieren

--s--
## Anstossen


### use
```js
let cookie = document.getElementById("cookie")

cookie.classList.add("bounce");

```
--s--
## Transition

Definiert, wie von einem Objekt-Zustand in den Nächsten übergeführt wird.  
[→ Editor](https://matthewlein.com/tools/ceaser) [→ Beispiele](http://css3.bradshawenterprises.com/transitions/) [→ Beispiele](http://animista.net/)

### use
```css
#cookie {
  transition: transform 1s; /* transform 1s ease */
  transform: scale(1);
}

#cookie.bounce {
  transform: scale(0.5);
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
## Cookie Clicker




```
