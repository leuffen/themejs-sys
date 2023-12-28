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

# „Nutzen auch Sie unser Know-how und unsere Erfahrungen im Erstellen von medizinischen Webseiten für Ihre optimale Internetpräsenz.“
{: layout="use: #header1"}

[Referenzen ansehen](#tjs-filter-images)
{: .btn .btn-primary}

## Eine Praxis-Website auf Ihre Bedürfnisse angepasst
{: layout="use: #cols-2" data-section-class="hide-headline images-full-width"}

![](/images/reference-example-image.png)
Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen. Manchmal Sätze, die alle Buchstaben des Alphabets enthalten - man nennt diese Sätze »Pangrams«.
<ul class="list-check">
    <li>Exklusives Webdesign</li>
    <li>Responsive Design</li>
    <li>Alle Online-Funktionen verfügbar</li>
    <li>Mehrsprachige Website</li>
    <li>Hosting & Service</li>
    <li>30 Tage Geld-zurück-Garantie</li>
</ul>


## Individuelle Services nach Ihren Wünschen
{: layout="use: #cols-2-bg" data-section-class="no-disturber reversed-rows"}

Wir bieten umfangreiche Leistungen für eine stimmige On- & Offline-Kommunikation Ihrer Praxis und gehen dabei auch auf individuelle Bedürfnisse ein.
<br><a href="#">Sie haben Fragen? Wir beraten Sie gerne persönlich.</a>
<br><br><br>
[Beratungsgespräch vereinbaren](#)
{: .btn .btn-primary}
![](https://cdn.leuffen.de//leu-systemwebsite/v2/5/387-290_391.56/illustration-03.svg)


## Schauen Sie sich weitere Projekte an
{: layout="use: #filter-images"}

### Referenz 1
{: data-section-data-tags="Website, Print" }
Hallo Test
![](/images/filter-1.png)

### Referenz 2
{: data-section-data-tags="Website" }
Hallo Test
![](/images/filter-1.png)

### Referenz 3
{: data-section-data-tags="Print" }
Hallo Test
![](/images/filter-1.png)

### Referenz 4
{: data-section-data-tags="Fotografie, Print" }
Hallo Test
![](/images/filter-1.png)

### Referenz 5
{: data-section-data-tags="Fotografie" }
Hallo Test
![](/images/filter-1.png)

### Referenz 6
{: data-section-data-tags="Website" }
Hallo Test
![](/images/filter-1.png)

## Das sagen unsere Kunden
{: layout="use: #customer-reviews"}

### Dr. med. Eleni Deutereou, Berlin

>  „Alle geäußerten Wünsche wurden zeitnah umgesetzt und mit dem Ergebnis sind wir sehr zufrieden. Die Webseite lässt auch über unser Personal einfach nach Bedarf verändern. Ich kann Herrn Leuffen uneingeschränkt empfehlen! “

[www.hoefner-deutereou.de](https://www.hoefner-deutereou.de){: target="_blank"}

### Robert Sedlmaier, München

>  „Eine klasse Idee sehr gut und schnell umgesetzt! Wir sind sehr zufrieden mit dem Ergebnis der Homepage, und besonders auch mit der sehr einfach und variabel zu bedienenden Admin-Umgebung. Wir freuen uns auf eine lange Partnerschaft! “

[www.zahnarztpraxis-sedlmaier.de](https://www.zahnarztpraxis-sedlmaier.de){: target="_blank"}


## Kontakt
{: layout="use: #contact"}

> Vereinbaren Sie ein kostenloses Beratungsgespräch.

**Ihre Vorteile**
- Keine Einrichtungskosten
- Jederzeit kündbar
- 30-Tage Geld-Zurück-Garantie

[input type="text"  name="Name" required .mb-3]
[input type="email" name="E-Mail" data-invalid-msg="Bitte geben Sie eine gültige E-Mail Adresse ein" required .mb-3]
[input type="tel" name="Telefon" .mb-3]
{.form}

## Newsletter
{: layout="use: #newsletter" data-section-style="padding-top: 160px;" data-section-class="dark"}

Melden Sie sich jetzt für unseren Newsletter an und erhalten Sie alle paar Wochen aktuelle News, Design- und Funktionsvorschläge und viele weitere hilfreiche Tipps für Ihren Onlineauftritt.

[input type="email" name="E-Mail eintragen" placeholder="E-Mail eintragen"]


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



<footer layout="use:#footer-copyright">
    <p>Copyright (c) 2023 Systemwebsite by leuffen.de</p>
    <ul>
        <li><a href="{%- include do/link.html pid=it.pid -%}">AGB</a></li>
        <li><a href="{%- include do/link.html pid=it.pid -%}">Datenschutz</a></li>
        <li><a href="{%- include do/link.html pid=it.pid -%}">Impressum</a></li>
    </ul>
</footer>
`;

JodaDescriptionManager.addClass("page",
    "reference-page",
    "reference-page",
    html,
    []
    ,
    {
        bodyClasses: ["themejs-sys"]
    }
);
