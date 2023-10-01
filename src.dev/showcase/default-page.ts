import {JodaDescriptionManager} from "@leuffen/jodastyle";

let html =`

<!--nav layout="use: #navbar-blox">
    <div class="brand">Logo</div>
    <ul class="nav-bar-main">
        <li><a href="#home">Hello World</a></li>
    </ul>
    <ul class="nav-menu">
        <li><a href="#home">Home</a></li>
    </ul>
</ul>
</nav-->

# Die perfekte Website für <br><typewriter-element>Ärzte, Zahnärzte, Hausärzte, Fachärzte, Gynäkologen,</typewriter-element>
{: layout="use: #header1"}


![Titelbild](/images/illustration-01.svg)

Facharzt für Neurologie <br> Facharzt für Psychiatrie


## Hero Section
{: layout="use: #disturber"}

Jetzt 30 Tage Geld-zurück-Garantie sichern!


## Was wir können, kann keiner
{: layout="use: #icon-catchprases"}

- ![Some Image](/images/icons/icon-modularer-aufbau.webp) *Wir können das*
- ![Some Image](/images/icons/icon-modularer-aufbau.webp) <span>Wir können das</span>
- ![Some Image](/images/icons/icon-modularer-aufbau.webp) Wir können das
- ![Some Image](/images/icons/icon-modularer-aufbau.webp) Wir können das
- ![Some Image](/images/icons/icon-modularer-aufbau.webp) Wir können das

## Service
{: layout="use: #service-slider"}

> Nutzen Sie unsere Leistungen für Ihren Erfolg

Hier steht noch ein kleiner Text

<a href="#" class="btn btn-outline-primary desktop-button">Alle Leistungen entdecken</a>


### Webdesign & Online-Services

![](/images/icons/icon-webdesign.webp)

Individuell gestaltet nach unserem Design-Pool-Konzept



## Praxiswert steigern
{: layout="use: #2-cols"}

![](/images/illustration-01.svg)

Eine gute Positionierung in den Suchmaschinen ist für eine Praxis von großer Bedeutung. Wir helfen Ihnen dabei, Ihre Praxis im Internet zu präsentieren und Ihre Patienten zu informieren.

[Weiterlesen]()

## Praxiswert steigern
{: layout="use: #2-cols"}

![](/images/illustration-01.svg)

Eine gute Positionierung in den Suchmaschinen ist für eine Praxis von großer Bedeutung. Wir helfen Ihnen dabei, Ihre Praxis im Internet zu präsentieren und Ihre Patienten zu informieren.

[Weiterlesen]()

## Praxiswert steigern
{: layout="use: #2-cols;class:tjs-2-cols-bg"}

> Disturber

![](/images/illustration-03.webp)

Eine gute Positionierung in den Suchmaschinen ist für eine Praxis von großer Bedeutung. Wir helfen Ihnen dabei, Ihre Praxis im Internet zu präsentieren und Ihre Patienten zu informieren.

[Weiterlesen]()


## Key Figures
{: layout="use: #key-figures"}


## Cards
{: layout="use: #cards-slider"}

> Warum sollten sich für uns entscheiden?

Hier gibt es nichts zu sehen




### Webdesign & Online-Services

![](/images/icons/icon-webdesign.webp)

Dies ist ein Text

### Webdesign & Online-Services

![](/images/icons/icon-webdesign.webp)

Diest ist ein Text


## Was unsere Kunden Sagen
{: layout="use: #customer-reviews"}

> Das sagen unsere Kunden über uns

Es kann ihnen eigentlich egal sein aber hier

### Besser gehts nicht

>  „Ich wollte schon die Polizei holen“

### Besser gehts nicht

>  „Ich wollte schon die Polizei holen“


### Besser gehts nicht

>  „Ich wollte schon die Polizei holen“



## Jetzt kostenlos beraten lassen
{: layout="use: #cta1"}

[Jetzt Konditionen freischalten](#){: class="btn btn-primary"}

## Kontakt
{: layout="use: #contact"}

Nehen Sie


## Newsletter
{: layout="use: #newsletter" data-section-style="padding-top: 160px;" data-section-class="dark"}

Melden Sie sich jetzt für unseren Newsletter an und erhalten Sie alle paar Wochen aktuelle News, Design- und Funktionsvorschläge und viele weitere hilfreiche Tipps für Ihren Onlineauftritt.





## Systemwebsite.de
{: layout="use: #footer"}

> Ihr Partner für moderne medizinische Webseiten-Entwicklung



### Links

- [Konditionen](#)
- [Leistungen](#)
- [FAQ](#)
- [Kontakt](#)

### Links

- [Konditionen](#)
- [Leistungen](#)
- [FAQ](#)
- [Kontakt](#)

### Folgen Sie uns

- [LinkedIn](#)
- [Xing](#)
- [Facebook](#)
- [Instragram](#)

---
{: .footer-nav}

Copyright (c) 2023 Systemwebsite by leuffen.de

- [AGB](#)
- [Datenschutz](#)
- [Impressum](#)

`;

JodaDescriptionManager.addClass("page",
    "themejs-sys",
    "themejs-sys",
    html,
    []
    ,
    {
        bodyClasses: ["themejs-sys"]
    }
);
