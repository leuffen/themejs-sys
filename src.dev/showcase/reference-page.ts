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
