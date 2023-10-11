import {Joda} from "@leuffen/jodastyle";


Joda.registerTemplate("newsletter",
    // language=HTML
    `
        <section class="tjs-newsletter dark :: mobile :lg:">
            <div class="tjs__wrapper container">
                <div class="tjs-newsletter__content--container">
                    <div class="tjs-newsletter__col tjs-newsletter__text">
                        <strong>Newsletter</strong>
                        <p>Melden Sie sich zum Newsletter an und erhalten Sie alle paar Wochen aktuelle News, Design- und Funktionsvorschläge und viele weitere hilfreiche Tipps für Ihren Onlineauftritt.</p>
                    </div>
                    <div class="tjs-newsletter__col tjs-newsletter__input-wrapper">
                        <div class="input-group">
                            <input type="email" class="form-control" placeholder="E-Mail eintragen">
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
