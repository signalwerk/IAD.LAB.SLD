



--s--
## Selektoren
* Tag
* Klasse (class)
* ID (id)
--s--
## Tag-Selektoren

### HTML
```
<p>Hier steht Text</p>
```

### CSS
```
p {
  color: red;
}
```

--s--
## Tag-Selektoren

### HTML
```
<p class="blau">Hier steht Text</p>
```

### CSS
```
.blau {
  color: blue;
}
```

--s--
## ID-Selektoren

### HTML
```
<p id="text">Hier steht Text</p>
```

### CSS
```
#text {
  color: green;
}
```

--s--
## Cascading Style Sheets (CSS)

### Cascading!
Definitionen können sich ergänzen!


### HTML
```
<p class="big">Test</p>
<p class="blau">Test</p>
<p class="blau big">Test</p>
```

### CSS
```
.blau {
  color: blue;
}
.big {
  font-size: 4em;
}
```



--s--
## Tags zum Strukturieren
* `div` um Blöcke zu bilden
* `span` um im Text zu formatieren



### HTML
```
<div class="blau">
  <p class="big">Test</p>
  <p>Test <span class="green">Text</span></p>
</div>
```

### CSS
```
.blau {
  color: blue;
}
.green {
  color: green;
}
.big { font-size: 4em; }

```
