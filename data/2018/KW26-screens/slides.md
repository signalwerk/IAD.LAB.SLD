### HF Interactiondesign

# Bildschirme und Fonts

<style>
.reveal .embed-container {
  position: relative;
  padding-bottom: 50%;
  height: 0;
  overflow: hidden;
  max-width: 80%;
  height: auto;
}
.reveal .embed-container iframe,
.reveal .embed-container object,
.reveal .embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

Stefan Huber, Zürich – 2018 <!-- .element: class="footer" -->
--s--
## Übersicht

* **08:15**
* Organisation
* Rückschau & Festigung
* Bildschirme und Fonts
* **11:40** · Ende

--s--
# Organisation
* Lab am Nachmittag
--s--
# Organisation
* ~~Sa 16.06.2018 – Technologiegeschichte der Schrift~~
* ~~Fr 22.06.2018 – Bildschirme und Fonts (4 Lektionen)~~
* Fr 29.06.2018 – Bildschirme und Fonts (4 Lektionen)
--s--
# Rückschau


--s--


# Screens
--s--
### Standards
![](https://upload.wikimedia.org/wikipedia/commons/0/0c/Vector_Video_Standards8.svg)

--s--
## Visuelle Grösse

* [Size Calculator](https://sizecalc.com/)

--s--
## Auflösung
# 1920 ✕ 1080 vs. 72 dpi
--s--
## Auflösungsdichte – DPI

Angabe, wieviel Pixel (Punkte) auf einer Strecke von 1 Inch (25.4 mm) dargestellt werden.

--s--
## Rechnungsbeispiel

Höhe oder Breite des Bildes in Pixel <br>÷<br> Höhe oder Breite in Ausgabe (in Inch) <br>=<br> Auflösung in DPI (Dots per Inch)
>> 3000 Pixel ÷ 10 Inch (25,4 cm) = 300 Dots per Inch

--s--
## CSS

--s--
## Device Pixel Ratio/Pixel Density

[The Ultimate Guide To iPhone Resolutions](https://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions)

--s--
## Media-Query mit Pixel Density
```css
@media
only screen and ( min-device-pixel-ratio: 2),
only screen and ( min-resolution: 2dppx)
{
  /* Definitionen hier */
}
```
<!-- .element: class="footer" --> [Support-Matrix für Browser](https://caniuse.com/#feat=css-media-resolution)

--s--
## Media-Query mit DPI

```css
@media
only screen and ( min-resolution: 190dpi),
only screen and ( min-resolution: 75dpcm)
{
  /* Definitionen hier */
}
```
<!-- .element: class="footer" --> [Support-Matrix für Browser](https://caniuse.com/#feat=css-media-resolution)

--s--

## Display Technologien
--s--

## Elektrophoretische Anzeige

![](../KW25-screens/img/eInk-principle.svg)
--s--
## Geräte mit eInk
![](../KW25-screens/img/eInk.svg)
--s--
## LCD-Anzeige

![](../KW25-screens/img/tft-principle.svg)
--s--

## Geräte mit LCD
![](../KW25-screens/img/tft.svg)
--s--
#### OLED

<video controls>
  <source src="../KW25-screens/img/REC016.mp4" />
  <source src="../KW25-screens/img/REC016.webm" />
</video>

--s--
#### OLED


![](../KW25-screens/img/OLED_detail.jpg)

<!-- .element: class="footer" --> Bildquelle: [LG](http://www.lg.com/global/business/information-display/technology-solution/oled)


--s--
## Bildwiederholrate

* Animation flüssig: ab [20 – 30 Frames pro Sekunde (fps)](https://en.wikipedia.org/wiki/Frame_rate#/media/File:Animhorse.gif)
* Ideal: [60 Frames pro Sekunde](https://www.youtube.com/watch?v=pfiHFqnPLZ4)
* iPad Pro? Filme? TV? Games?

--s--
## Kennzahlen zu Bildschirmen
* [Lichtstärke – Lumen](https://de.wikipedia.org/wiki/Lumen)
* [Leuchtdichte – Nits](https://de.wikipedia.org/wiki/Leuchtdichte)
* [Farbraum](https://de.wikipedia.org/wiki/Farbraum)










--s--
## Unterlagen


--s--
## Übung

* Mach einen Screenshot vom Logo-Löwen auf [→ sfgz.ch](http://sfgz.ch/)
* Binde mit [→ Codepen](https://codepen.io/) und [→ imgur](https://imgur.com/) den Screenshot ein
--s--
## Film

<div class='embed-container'>
  <iframe src="https://player.vimeo.com/video/169809377" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>

--s--

## Kathodenstrahlröhre

* [Film Kathodenstrahlröhre (Cathode ray tube – CRT)](https://youtu.be/3BJU2drrtCM?t=2m17s)
* [Wikipedia](https://de.wikipedia.org/wiki/Kathodenstrahlr%C3%B6hre)
