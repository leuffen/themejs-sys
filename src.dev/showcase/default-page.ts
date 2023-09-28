import {JodaDescriptionManager} from "@leuffen/jodastyle";

let html =`

<nav layout="use: #navbar-blox">
    <div class="brand">Logo</div>
    <ul class="nav-bar-main">
        <li><a href="#home">Hello World</a></li>
    </ul>
    <ul class="nav-menu">
        <li><a href="#home">Home</a></li>
    </ul>
</ul>
</nav>

# Willkommen bei <br>Dr. med. XXX XXX
{: layout="use: #header1"}


![Neuronen Hintergrundbild](https://cdn.leuffen.de//leu-stock/v2/7/121-46_gfedcba/AdobeStock_354842358.webp)

Facharzt für Neurologie <br> Facharzt für Psychiatrie


## Hero Section
{: layout="use: #hero-ribbon"}




### Notfall?

Sie erreichen den ärztlichen Notdienst unter der Telefon-Nr: [116 117](tel:+49116117)

### Termine & Rezeptabholung

Wir sind eine **Terminpraxis**. Für Terminvergaben, Anfragen und Rezeptabholungen beachten Sie bitte
die Öffnungszeiten des Empfangs.

### Öffnungszeiten Empfang

{% include el/openhours.html %}


## Über mich
{: layout="use: #sec-card-2col"}

> Dr. med. X. Kelloggs

![Bild Dr. med. XXX Kelloggs](https://cdn.leuffen.de//leu-stock/v2/26/c_gfedcba/AdobeStock_172186647.webp){: style="padding: 4rem"}

### Werdegang

Berufstätigkeit in der Neurologie, Psychiatrie, Inneren Medizin und Orthopädie.

Zuletzt klinisch tätig als Oberarzt einer neurologischen Rehaklinik. Seit 2001 tätig als niedergelassener Neurologe
und Psychiater.

Focus Empfehlung: 2017, 2018, 2019



## Medizinischer Schwerpunkt
{: layout="use: #sec-multi-card; cols:2"}

### Neurologie

Interessengebiete:

- Schlaganfall und Arteriosklerose
- Parkinsonerkrankung
- Gedächtnisstörung
- Prävention und Ernährungsmedizin bei neurologischen Erkrankungen

*Bitte beachten: Bei speziellen Medikamenten für Multiple Sklerose und Myasthenie wenden Sie sich bitte an ein
spezialisiertes neurologisches Zentrum.*

Apparative Untersuchungen:

- Farbduplexsonographie der hirnversorgenden Halsgefäße
- Messung der Nervenleitgeschwindigkeit bei Verdacht auf Karpaltunnelsyndrom, Polyneuropathie und Ulnaris-Neuropathie

Beispiele für häufigere Beschwerden: Schwäche und Lähmung. Taubheit und Missempfindungen. Schwindel,
Gleichgewichtsstörungen und Gangstörungen. Bewusstseinsstörung. Zittern. Kopfschmerzen und sonstige Schmerzen. Änderung des
Denkvermögens und der Sprache.


### Psychiatrie

- Psychiatrische Diagnostik und Behandlung
- Interessengebiet: Prävention und Ernährungsmedizin bei psychischen Erkrankungen

Beispiele für häufigere Beschwerden: Anspannung, Unruhe, Reizbarkeit, aufdrängende Gedanken, Grübeln,
Vermeidung, Ängste, Panikanfälle. Vegetative Beschwerden wie Herzklopfen, Atembeschwerden, Schwitzen, Schwindel, usw. Schlafstörungen.
Änderung der Stimmung, des Antriebs, des Denkvermögens, der Wahrnehmung und des Verhaltens.

---
{: .hr}

Bei Vorliegen einer Notlage und akuter Beschwerden: wenden Sie sich bitte direkt an die Aufnahme einer
Klinik. Empfehlung für weitere Informationen: [www.neurologen-und-psychiater-im-netz.org](https://www.neurologen-und-psychiater-im-netz.org)








## Kontakt aufnehmen
{: layout="use: #cta-base"}

[Kontakt](/kontakt)


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
