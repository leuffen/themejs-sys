import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("icon-catchprases__item",
    // language=HTML
    `
        <div class="tjs-icon-catchphrases__items--item">
            <div class="tjs-icon-catchphrases__items--item-icon">
                <slot data-select="img">
            </div>
            <div class="tjs-icon-catchphrases__items--item-text">
                <slot></slot>
            </div>
        </div>`
    );


Joda.registerTemplate("icon-catchprases",
    // language=HTML
    `
        <section class="tjs-icon-catchphrases">
            <div class="tjs-wrapper container">
                <div class="tjs-icon-catchphrases__text">
                    <slot></slot>
                </div>
                <div class="tjs-icon-catchphrases__items">
                    <slot data-select="ul > li"></slot>
                </div>
            </div>
        </section>

    `);
