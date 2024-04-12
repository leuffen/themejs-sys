import {Joda} from "@leuffen/jodastyle";


Joda.registerTemplate("cta1",
    // language=HTML
    `
        <section class="tjs-cols-2-bg ani-container  :: mobile :lg:">
            <div class="tjs-wrapper tjs-cols-2-bg--special container">
                <div class="tjs-cols-2-bg__disturber-image ani ani-plop ani-delay-3">

                    <img loading="lazy" src="https://cdn.leuffen.de/global/themejs-sys/elements/man-showing.svg" alt="Jetzt klicken" width="433" height="500">

                </div>
                <div class="tjs-cols-2-bg__disturber-stars ">

                    <img loading="lazy" class="tjs-cols-2-bg__disturber-stars--left ani ani-fadeIn ani-delay-1" src="https://cdn.leuffen.de/global/themejs-sys/elements/stars.svg" alt="sterne" width="389" height="500">
                    <img loading="lazy" class="tjs-cols-2-bg__disturber-stars--right ani ani-fadeIn ani-delay-2" src="https://cdn.leuffen.de/global/themejs-sys/elements/stars.svg" alt="sterne" width="389" height="500">

                </div>
                <div class="tjs-cols-2-bg__row tjs-cols-2-bg__row--special">
                    <div class="tjs-cols-2-bg__col tjs-cols-2-bg__col--text-content">
                        <slot></slot>
                    </div>
                    <div class="tjs-cols-2-bg__col tjs-cols-2-bg__col--button-content">
                        <slot data-select=".btn"></slot>
                    </div>
                </div>
            </div>
        </section>
    `);
