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
                        <form data-micx-formmail-preset="default" data-micx-formmail-sent-message="E-Mail erfolgreich gesendet!">
                            <div class="input-group">
                                <slot data-select="input"></slot>
                                <span class="input-group-text inside">Anmelden</span>
                            </div>
                            <span class="input-group-text outside">Anmelden</span>
                        </form>
                    </div>

                    <div class="tjs-newsletter__disturber-stars">
                        <img loading="lazy" class="tjs-newsletter__stars--left" src="https://cdn.leuffen.de/global/themejs-sys/elements/stars.svg">
                        <img loading="lazy" class="tjs-newsletter__stars--right" src="https://cdn.leuffen.de/global/themejs-sys/elements/stars.svg">
                    </div>
                </div>
            </div>
        </section>
    `);
