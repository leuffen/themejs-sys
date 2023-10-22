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

# Kontakt
{: layout="use: #header1" data-section-class="decreased-height"}

Vielen Dank für Ihr Interesse. Nutzen Sie das Formular oder schreiben sie uns unter [kontakt@leuffen.de](kontakt@leuffen.de).


## Kontaktformular
{: layout="use: #contact-form"}

![Some Image](/images/illustration-a1.webp)

- <i class="bi bi-geo-alt-fill"></i> Mathildenstr. 9-11, 45130 Essen
- <i class="bi bi-telephone-fill"></i> (0201) 7 58 59 936
- <i class="bi bi-envelope-fill"></i> kontakt@leuffen.de

[input type="text"  name="Name" required .mb-3]
[input type="email" name="E-Mail" data-invalid-msg="Bitte geben Sie eine gültige E-Mail Adresse ein" required .mb-3]
[textarea name="Nachricht" .mb-3]


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
