
neues semester
  - travis
  - github
  - git-cli, git-flow
  - cli
  - animation
  - cookie clicker
  - semesterumfrage
  - bekannte internet personen

  * Falsche Farben >>>
    https://logrinto.github.io/IAD2017.schriftmuster/  → Roboto
    internezzo.ch → color





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
