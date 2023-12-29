import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("headline",
    // language=HTML
    `
        <section class="tjs-headline :: mobile :md:">
            <div class="container">
                <div class="tjs-wrapper">
                    <img loading="lazy" class="tjs-headline--star-top-left" src="https://cdn.leuffen.de/global/themejs-sys/elements/stars.svg" width="389" height="500">
                    <slot data-select="blockquote"></slot>
                    <slot></slot>
                </div>
            </div>
        </section>
    `);
