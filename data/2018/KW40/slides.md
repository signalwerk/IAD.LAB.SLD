### HF Interactiondesign

# Infografik

Stefan Huber, Zürich – 2018 <!-- .element: class="footer" -->
--s--
## Übersicht

* **12:45**
* Infografik
* Organisation/News/Agenda (kurz)
* Cookie Clicker
* GIT mit Alex
* Variable Font
* **16:15** · Ende

--s--
# Infografik

--s--
## DOM

`document.getElementById("cookie")` → liefert eine Referenz zum Dom-Objekt mit der `id="cookie"`

### use
HTML
```html
<div id="cookie" class="round"></div>
```

JS
```js
let cookie = document.getElementById("cookie")

cookie.classList.add("big");  //  <div id="cookie" class="big round"></div>
cookie.classList.remove("round"); //  <div id="cookie" class="big"></div>

```
--s--
## Event Listener

`cookie.addEventListener("click", clicker)`  
→ bei einem klick auf das Element (`cookie`), wird die funktion `clicker` ausgeführt;

### use

```js
let clicker = function(e) {
  alert("hello world");
}

let cookie = document.getElementById("cookie")
cookie.addEventListener("click", clicker);
```
--s--
## Kombination
Beim Klick auf das eine Objekt wird das andere Objekt ein-/ausgeblendet.

### use

```js
let button = document.getElementById("button")
let layer = document.getElementById("layer")

let clicker = function(e) {
  layer.classList.remove("hidden");  
}

button.addEventListener("click", clicker);
```


--s--
# Beispiel



--s--
# Organisation
--s--
## Arbeitslast

# Umfrage
* Wie war die Arbeitslast in den letzten Wochen? (😭 💤 ☺️)

--s--
## Worknights

* [→ Worknights Anzeige](https://logrinto.ch/events/web-worknights-hs-2018/)
  * **05.10.2018** – Lightning Talk – [paper.js](http://paperjs.org/)
  * **26.10.2018** – Lightning Talk – [ramdajs](https://ramdajs.com/)
  * **09.11.2018** – Lightning Talk – Typografie vs. Web
  * **23.11.2018** – Lightning Talk – [React.js](https://reactjs.org/)
  * **07.12.2018** – Lightning Talk – [Git](https://git-scm.com/  ) & [→ Github](https://github.com/)

--s--
## News
* [→ EU-Parlament – Reform des Urheberrechts](https://netzpolitik.org/2018/das-eu-parlament-legt-einen-schleier-ueber-das-internet-votum-fuer-upload-filter-und-leistungsschutzrecht/)
  * Leistungsschutzrecht
  * Upload-Filter
* Neue namen für WiFi-Standards
  * **Wi-Fi 6** = 802.11ax
  * **Wi-Fi 5** = 802.11ac
  * **Wi-Fi 4** = 802.11n
  * 802.11a, b, g bleiben offiziell unverändert

--s--
## Agenda
* 25. – 27. 10. 2018 – [Digitaltag](https://digitaltag.zhdk.ch/)
* 9. November 2018 – [Swiss Interactive Media Design Day](http://www.imdsg.ch/)
* 9. – 11. November 2018 – [→ gameZfestival 18](http://www.gamezfestival.ch/)


--s--
## Variable Font


--s--
## Cookie Clicker








--s--
## Freies Arbeiten

→ Abgabedatum



--s--
