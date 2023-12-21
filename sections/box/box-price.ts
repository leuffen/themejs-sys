import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("box-price",
    // language=HTML
    `
        <section class="tjs-box-price :: mobile :md:">
            <div class="tjs-wrapper tjs-box-price__border">
                    <slot data-select=".tjs-box-price__disturber" data-replace></slot>
                <div class="tjs-box-price__content">
                    <div class="tjs-box-price__content--header">
                        <div class="tjs-box-price__content--header-prices"><slot data-select=".prices"></slot></div>
                        <div class="tjs-box-price__content--header-name"><slot data-select="h3"></slot></div>
                    </div>
                    <slot></slot>
                </div>
            </div>
        </section>
    `);

Joda.registerTemplate("box-prices",
    // language=HTML
    `
        <section class="tjs-box-prices container-fluid :: mobile :md:">
            <slot data-select=".children > *" data-child-layout="use: #box-price;" data-replace></slot>
        </section>
    `);


// TODO: Preisboxen auf verschiedene Columns konfigurierbar machen
