
### Kontakt

{% include el/address.html %}

### Info

{{page.description}}

### Links

{% assign navi2 = site.pages | where: "lang", page.lang | where: "ptags", "footernav" | sort: "order" %}
{%- for it in navi2 -%}
{%- assign title = it.short_title | default: it.title -%}
- [{{title}}]({%- include do/link.html pid=it.pid -%})
{% endfor %}



<h2>Öffnungszeiten</h2>
<p id="minifooter">

    <a class="text-decoration-none" href="{{ site.data.defaults.footer_leuffen_logo_href }}">
        <img width="67" height="22" src="{{ site.data.defaults.footer_leuffen_logo_url }}" style="height: 22px; margin-top:-8px;" alt="{{ site.data.defaults.footer_leuffen_logo_url }}">
    </a>
    <a class="text-decoration-none" href="{{ site.data.defaults.footer_leuffen_text_href }}">{{ site.data.defaults.footer_leuffen_text }}</a>
    <a class="ps-5" rel="nofollow" href="{% include el/pagebuilder-link.html %}" title="Seite editieren">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg>
    </a>
</p>
