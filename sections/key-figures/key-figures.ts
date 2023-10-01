import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("key-figures",
    // language=HTML
    `
   <section class="tjs-key-figures">
        <div class="tjs-wrapper container-fluid">
            <div class="tjs-key-figures__content--container">
                <div class="tjs-key-figures__content--bg-image">
                    <img alt="Background" src="/images/bar-stripes.svg">
                    <slot data-select="img.background"></slot>
                </div>
                <div class="tjs-key-figures__content container">
                    <div class="tjs-key-figures__content--row">
                        <div class="tjs-key-figures__content--col">
                            <div class="tjs-key-figures__content--col__figure">123</div>
                            <div class="tjs-key-figures__content--col__text">Websiten erstellt</div>
                        </div>
                        <div class="tjs-key-figures__content--col">
                            <div class="tjs-key-figures__content--col__figure">+50</div>
                            <div class="tjs-key-figures__content--col__text">zufriedene Kunden</div>
                        </div>
                        <div class="tjs-key-figures__content--col">
                            <div class="tjs-key-figures__content--col__figure">20</div>
                            <div class="tjs-key-figures__content--col__text">Jahre Erfahrung</div>
                        </div>
                        <div class="tjs-key-figures__content--col">
                            <div class="tjs-key-figures__content--col__figure">98%</div>
                            <div class="tjs-key-figures__content--col__text">Erfolgsquote</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `);
