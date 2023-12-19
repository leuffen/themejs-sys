import {JodaDescriptionManager} from "@leuffen/jodastyle";

let html =`

<nav layout="use: #navbar-switch1" class="floating">
    <div class="brand"><a href=""><img src="/images/logo-systemwebsite.webp"></a></div>
    <ul class="navbar-top">
        <li class=":: d-none :lg: "><a href="">Beratungstelefon</a></li>
        <li class=":: :lg: d-none"><a href="">Beratung-Tel.: (0201) 12345</a></li>
        <li><a href="">Angebot anfordern</a></li>
    </ul>
    <ul class="navbar-main">
        <li><a href="#home">Punkt1</a></li>
        <li><a href="#home">Punkt2</a></li>
        <li><a href="#home">Hello World</a></li>
        <li><a href="#home">Hello World</a></li>
    </ul>
    <ul class="nav-menu">
        <li><a href="#home">Home</a></li>
    </ul>
</nav>

# Wir sind für Sie da! Sprechen Sie uns an.
{: layout="use: #header1" data-section-class="decreased-height"}

Vereinbaren Sie einen 30-minütigen Anruf oder Video-Call mit einem unserer Experten und erfahren Sie, wie SYSTEMWEBSITE Ihnen helfen kann, Ihre Praxis perfekt zu präsentieren.


### Füllen Sie das Formular aus und wir melden uns schnellstens bei Ihnen zurück.
{: layout="use: #contact-form}

Ihre Vorteile auf einen Blick
<ul class="list-check-circle">
    <li>Direkter Ansprechpartner für Ihre Wünsche</li>
    <li>Faire Preise & keine verstecken Kosten</li>
    <li>30 Tage Geld-zurück-Zufriedenheitsgarantie</li>
</ul>

<div class="form">
[input type="text"  name="Name" required .mb-3]
[input type="email" name="E-Mail" data-invalid-msg="Bitte geben Sie eine gültige E-Mail Adresse ein" required .mb-3]
[textarea name="Nachricht" .mb-3]
</div>

<!--Header und Subheader aus Markdown, andere Elemente auch als HTML mit Klasse // <span class="price-top"></span>-->
## Web-Packet <span>M</span>
{: layout="use: #box"}
> <b>Bestseller</b>
1. € 849,-
2. 999,-

Mit individuellen Themenschwer-punkten besser gefunden werden.
<ul class="list-check-circle">
    <li>Exklusives Webdesign</li>
    <li>Responsive Design</li>
    <li>Alle Online-Funktionen verfügbar</li>
    <li>Mehrsprachige Website</li>
    <li>Hosting & Service</li>
    <li>30 Tage Geld-zurück-Garantie</li>
</ul>

DSGVO-konforme Datensparsamkeit und Datensicherheit sind für uns selbstverständlich. Standardmäßig sind alle unsere Websites Cookie-frei. Natürlich mit sicherem SSL-Zertifikat und BSI zertifiziertem E-Mail-Postfach (optional).


## Key Figures
{: layout="use: #key-figures"}


## SYSTEMWEBSITE – Ihr Partner für medizinische Webseiten
{: layout="use: #cols-2" data-section-class="reversed-rows"}

![](https://cdn.leuffen.de//leu-systemwebsite/v2/4/232-211_475.87/illustration-01.svg)

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

# Maps
{: layout="use: #google-map"}
![](/images/logo-systemwebsite.webp)
Leuffen & Zimmermann GbR\\
Mathildenstraße 9–11\\
45130 Essen\\
Deutschland


## Newsletter
{: layout="use: #newsletter" data-section-style="padding-top: 80px;" data-section-class="dark"}

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
    "contact-page",
    "contact-page",
    html,
    []
    ,
    {
        bodyClasses: ["themejs-sys"]
    }
);
