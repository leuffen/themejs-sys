import {Joda} from "@leuffen/jodastyle";


Joda.registerTemplate("newsletter",
    // language=HTML
    `
        <section class="tjs-newsletter dark :: mobile :lg:">
            <div class="tjs__wrapper container">
                <div class="tjs-newsletter__content--container">
                    <div class="tjs-newsletter__col tjs-newsletter__text">
                        <slot data-select="h2"></slot>
                        <slot></slot>
                    </div>
                    <div class="tjs-newsletter__col tjs-newsletter__input-wrapper">
                        <div class="input-group">
                            <slot data-select="input"></slot>
                            <span class="input-group-text inside">Anmelden</span>
                        </div>
                        <span class="input-group-text outside">Anmelden</span>
                    </div>
                    <div class="tjs-newsletter__disturber-stars">
                        <img loading="lazy" class="tjs-newsletter__stars--left" src="/images/stars.webp">
                        <img loading="lazy" class="tjs-newsletter__stars--right" src="/images/stars.webp">
                    </div>
                </div>
            </div>
        </section>
    `);
