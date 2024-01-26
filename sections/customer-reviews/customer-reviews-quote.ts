import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("customer-reviews-quote",
    // language=HTML
    `
        <section class="tjs-customer-reviews-quote element-margin-bottom :: mobile :md:">
            <div class="container">
                <div class="tjs-wrapper">
                    <i class="bi bi-quote tjs-customer-reviews-quote__quote-icon"></i>
                    <img loading="lazy" class="tjs-customer-reviews-quote__stars" src="https://cdn.leuffen.de/global/themejs-sys/elements/stars.svg" width="389" height="500">
                    <slot data-select="h2"></slot>
                    <div class="tjs-customer-reviews-quote__author">
                        <slot data-replace></slot>
                    </div>
                </div>
            </div>
        </section>
    `);
