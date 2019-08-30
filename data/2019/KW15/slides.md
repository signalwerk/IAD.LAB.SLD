### HF Interactiondesign

# Komponenten

Stefan Huber, Zürich – 2019 <!-- .element: class="footer" -->
--s--
## Übersicht

* **12:45**
* Organisation/News/Agenda
* Präsentationen
* Komponenten · Aufgabe
* **16:15** · Ende

--s--
# Organisation

* HF oder FH?
* Zeugnis

--s--
## Arbeitslast

# Umfrage
* Wie war die Arbeitslast in den letzten Wochen? (😭 💤 ☺️)

--s--
## News
* [Amazon Alexa hört mit](https://www.bloomberg.com/news/articles/2019-04-10/is-anyone-listening-to-you-on-alexa-a-global-team-reviews-audio)
--s--
## Agenda
* [re:publica](https://re-publica.com/) · 6. – 8. Mai 2019
* [uxcamp](http://uxcamp.ch/) · 11. Mai 2019
* [The Libre Graphics Meeting](https://libregraphicsmeeting.org/2019/) · 29. Mai – 2. Juni 2019
--s--
## Präsentationen
--s--
## Komponenten · Aufgabe

--s--
## Chat-Client

* Funktion ist Festgelegt → Wir können erweitern
* Komponenten sind programmiert → Anforderungen formulieren!
* Ganzes System in React

--s--
## Zusammenarbeit

* Alle DOM-Änderungen müssen von allen Studierenden mitgemacht werden.
* Alle Studierende arbeiten in Ihrem Branch in GitHub. KEIN PUSH AUF MASTER!
* Gruppenarbeit bis 2 Personen möglich

--s--
## Komponenten

* Wiederverwendbarkeit
* Klarer Scope
* Verschachtelung von Komponenten

--s--
## Naming

>> «There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.»

Phil Karlton/Leon Bambrick

--s--
## Block Element Modifier
CSS-Klassen sind nach [BEM](https://cssguidelin.es/#bem-like-naming) benannt.

* Elemente sind durch zwei Unterstrichen (`__`) abgetrennt
* Modifikatoren sind durch zwei Bindestriche (`--`) abgetrennt
--s--
## Block

```html
<div class="Avatar">
  …
</div>
```

<br/>

## CSS

```css
.Avatar {
  width: 50%;
  height: 10rem;
}
```



--s--
## Modifier

```html
<div class="Avatar Avatar--aktiv">
  …
</div>
```
<br/>

## CSS

```css
.Avatar {
  width: 50%;
  height: 10rem;
}

.Avatar--aktiv {
  background-color: red;
}
```



--s--
## Element

```html
<div class="Avatar">
  <img class="Avatar__Bild" src="…" />
  <h3 class="Avatar__Name">…</h3>
</div>
```
<br/>

## CSS

```css
.Avatar__Name {
  font-size: 2rem;
}
```

--s--
## Modifier

```html
<div class="Avatar Avatar--aktiv">
  <img class="Avatar__Bild" src="…" />
  <h3 class="Avatar__Name">…</h3>
</div>
```

<br/>

## CSS

```css
.Avatar__Name {
  font-size: 2rem;
}

.Avatar--aktiv .Avatar__Name {
  color: red;
}
```
--s--
## Modifier

```html
<div class="Avatar Avatar--aktiv">
  <img class="Avatar__Bild" src="…" />
  <h3 class="Avatar__Name Avatar__Name--aktiv">…</h3>
</div>
```

<br/>

## CSS

```css
.Avatar__Name {
  font-size: 2rem;
}

.Avatar__Name--aktiv {
  color: red;
}
```


--s--
## Modifier

```html
<div class="Avatar">
  <img class="Avatar__Bild" src="…" />
  <h3 class="Avatar__Name Avatar__Name--aktiv">…</h3>
</div>
```

<br/>

## CSS

```css
.Avatar__Name {
  font-size: 2rem;
}

.Avatar__Name--aktiv {
  color: red;
}
```

--s--
## Empfohlenes Vorgehen

* Skizze (wenn nötig)
* Groblayout mit CSS erstellen
* Assets erstellen – Icons & Bilder
* Iterationen – Wir haben Zeit

--s--
## Updates
* Am 10. Mai 2019 wird es ein Update der Aufgabe geben

--s--
## Start

* [Node installieren](https://nodejs.org/en/download/)
* [Repository Klonen](https://github.com/logrinto/IAD2017.chat)
* Branch erstellen!
* in Verzeichnis wechseln `cd ...`
* `npm install` → Installiert die benötigten Module

--s--
## Hausaufgabe 10. Mai 2019

* Groblayout
* Icons
* Kurzpräsentation

--s--
