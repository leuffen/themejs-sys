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
        <section class="tjs-icon-catchphrases element-margin-bottom :: mobile :lg:">
            <div class="tjs-wrapper container">
                <div class="tjs-icon-catchphrases__text">
                    <slot></slot>
                </div>
                <div class="tjs-icon-catchphrases__items">
                    <slot data-select="ul > li" data-child-layout="use:  #icon-catchprases__item"></slot>
                </div>
                <div class="text-center mt-5">
                    <slot data-select=".btn"></slot>
                </div>
            </div>
        </section>

    `);
