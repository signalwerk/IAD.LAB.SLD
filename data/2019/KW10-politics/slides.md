### HF Interactiondesign

# Politik und Gesellschaft

Stefan Huber, Zürich – 2019 <!-- .element: class="footer" -->
--s--
## Übersicht

* KW10 · Sa · 09.03.2019 · 13:15 – 16:45
* KW11 · Fr · 15.03.2019 · 13:15 – 16:45


--s--

## KW11 · Fr · 15.03.2019
* [Erik Schönenberger · Digitale Gesellschaft](https://www.digitale-gesellschaft.ch/)
* [Markus Kummer · Internet Society Switzerland](https://www.isoc.ch/)
  * [ICANN · DNS/TLD/IP](https://icannwiki.org/Markus_Kummer)

--s--
# Aufgabe · 15. März 2019

* Was habe ich für Fragen zur (aktuellen) Netzpolitik?

--s--
## Übersicht


* **12:45**
* Vorbereitung
* [Marco Lardelli · Artificial intelligence (AI)](https://kanohi.ch/)
* Organisation
* Stefan Huber · Blockchain
* **16:15** · Ende

--s--
# Vorbereitung
* AI
* Blockchain
--s--
## Zweiergruppe

Die vorbereiteten Fragen, Inputs, Ideen gemeinsam besprechen und [zusammentragen](https://docs.google.com/document/d/139vGVa7F2kw9ZqXzycxU_6v_NUfRuWLymhCIF9ieoNg/edit?usp=sharing). Klasse über Masse.

Die Gruppe notiert später im Dokument auch die Antwort.

--s--
## Strategie

* Was könnte ich die Dozierenden fragen, was ich nicht einfach in Wikipedia nachlesen kann?
* Ist mir eine Einschätzung wichtig? In welchen Bereichen?

--s--
# Organisation
--s--
# Tag der Schrift

* [Haus der elektronischen Künste Basel ](https://www.hek.ch/)
* Vorträge bis 13 Uhr
* Museum 14:45 Uhr
* Abschluss 16:45 Uhr

--s--
# Alternativen

* Freies Arbeiten am Nachmittag (Case Study)
* [Museum für Kommunikation, Bern](https://www.mfk.ch/)

--s--
## Blockchain

--s--
## Warum?

* Wunsch aus Klasse
* Digitale Kompetenz. «Brauchen wir dafür eine Blockchain?»
--s--
## Lernziel

* Verstehen, wie eine Blockchain funktioniert
* Verstehen, welche Eigenschaften eine Blockchain auszeichnet
* Grundverständnis von Bitcoin/Ethereum

--s--
## Vorwissen

* Was wisst ihr?
* Buzzword
* Fintech/Bitcoin

--s--
## Aber...
* Ich bin kein Kryptologe
* Ich kann die kleinen Implementierungs-Details von Bitcoin nicht genau erläutern.
--s--
## Grundlage

* Peer-to-Peer-Netze (P2P)
* Hash-Funktionen

--s--
## Peer-to-Peer-Netze (P2P)

Kennt Ihr Peer-to-Peer-Netze? Wichtige Vertreter?

--s--
## Peer-to-Peer-Netze (P2P)

* Es gibt keinen zentralen Server
* Peers finden sich gegenseitig im Netzwerk
* Peers sind einander gleichgestellt
* Es muss funktionen geben um einander zu Prüfen, da Vertrauen nicht funktioniert
--s--
## Peer-to-Peer-Netze (P2P)

Um Blockchain zu erklären gehen wir nun davon aus, dass wir ein funktionierendes P2P haben.
--s--
## Hash-Funktionen

* Haben wir bereits einmal bei Passwörtern gehabt
* Für Blockchain brauchen wir eine Einweg-Hashfunktion
* Hash ermöglicht kein Restore des Originals

--s--
## Hash-Funktionen

### Beispiel Quersumme als «Hash»
* **115 → 7** kann in eine Richtung ausgeführt werden  
* **7 → ???** nicht aber in die Andere

--s--
## Verwendung

* Sichere Datenübertragung (Bittorrent, Updates, ...)
* [GIT](https://github.com/logrinto/IAD2017.mobile-menu/commits/master)
* ...

--s--
## Bekannte Hashes

* MD5 (unsicher)
* SHA-1
* ...

--s--
## Beispiel – SHA-1

Aus **katze.123** wird mit SHA-1 **3f410a362f229340652275bddd3a72fa4a013063**

[Online Testen](http://www.sha1-online.com/)

--s--
## Hash-Funktionen

Um Blockchain zu erklären gehen wir nun davon aus, dass wir eine sichere Hash-Funktion haben. Im Beispiel wird mit SHA-1 gerechnet.

--s--
## Hash-Funktionen

Im Terminal berechnen.

```sh
echo -n 'Hallo Welt!' | openssl sha1
# 726c3e8861ab0652a5043ea5faff6d3ef33fb209
```

--s--
## Praxisbeispiel

--s--

## Implementierung «IAD-Coin»
# 🤑
--s--
## Disclaimer

Sehr vereinfacht. ID, Wallets und Coins alles nicht so einfach...
--s--
## Blockchain

* Eine Blockchain ist eine Verkettung von Blöcken, die so aufgebaut ist, dass jeder Block garantieren kann, dass die vorhergehenden Blöcke korrekt geschrieben sind.
* Die Blöcke enthalten Daten

--s--
## Hilfe

* [Blockchain](https://docs.google.com/spreadsheets/d/1gwlj9iS4x3neJnJfIENQKRpmLjkWCXovvK323hStnbI/edit?usp=sharing)
* [Gruppe A](https://docs.google.com/spreadsheets/d/12CmhIgvjXh1OP1N-mNVNHJK9T9ymS30zePjnt2ZOD-c/edit?usp=sharing)
* [Gruppe B](https://docs.google.com/spreadsheets/d/12wRQrVtGj1xlLlxtzR2Mz69PUZL2bAswbfgTWqKEdEA/edit?usp=sharing)
* [Gruppe C](https://docs.google.com/spreadsheets/d/199O_qWGtM0KARkN0OkRUgUme41n3I2aofAn9hFV4Ew8/edit?usp=sharing)

--s--
## Bestandteile
* Personen
* Blöcke
* Coins

--s--
## Regeln für unsere Blockchain

* Clients verständigen sich auf ein Regelset
* Clients haben das Interesse das Regelset durchzusetzen.
  * Kein double spend
  * Keine Machtkonzentration
  * ...
--s--
## Person
* Jede Person ist Eindeutig
--s--
## Coin

* Die kleineste Einheit ist ein Coin (C0–C∞)
* Coins können nur von Personen ausgegeben werden, die diese besitzen
* Ein Coin wird beim Abschluss eines Blocks «erfunden» (kommt von Person Z)
* Person Z hat den ersten Coin (C0)

--s--
## Block

* Jeder Block hat drei Transaktionen
* Jeder Block hat den Hash vom zuvorhergehenden Block
* Jeder Block hat ein Zufälliger Wert (max. 20 Zeichen lang)

--s--
## Blockabschluss
Ein Block gilt dann als abgeschlossen, wenn jedes Zeichen der ersten x-Zeichen vom errechneten Hash dem Wert `0` entspricht. Wobei `x = Difficulty` von Stefan bestimmt wird. Die erste Lösung, die den Random-Wert so verändert, dass der Block korrekt abgeschlossen wird, ist von den Clients akzeptiert.
--s--
## Blockchain
* Resistent gegen Angriffe auf die alten Blöcke
* Relativ simple Idee
* Verteilte History

--s--
## Bitcoin (cryptocurrency)
* Satoshi Nakamoto publizierte das Paper Ende 2008
* Satoshi Nakamoto publizierte Code & «genesis block» 2009
* Währung
* Blockchain mit Proof of Work
* Reward nimmt ab
* Transaction-Fee möglich

Quelle: [Wikipedia](https://en.wikipedia.org/wiki/Bitcoin)
<!-- .element: class="footer" -->

--s--
## Bedeutung global
* denzentrale «Währung»
* sachenrechtliches Eigentum
* Gewisse Regierungen wehren sich
* Initial Coin Offering (ICO)

Quelle: [MME Legal](https://www.mme.ch/de/magazin/wie_muessen_bitcoins_deklariert_werden/)
<!-- .element: class="footer" -->
--s--
## Bedeutung Schweiz
* Crypto-Valley → Zug
* [Trust Square](https://www.trustsquare.ch/) → Zürich
* ...

--s--
## Bedeutung für Enduser

* SBB
* Webshop
* Bankomat
* ...
--s--

## Fragen
* Ist Bitcoin anonym?
* Ist Bitcoin transparent?
--s--
## Ethereum (smart contract)
* Seit 2015
* Anstatt transaktionen werden Programme gespeichert
--s--
# Weitere Fragen?

--s--
