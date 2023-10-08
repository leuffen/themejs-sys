import {Joda} from "@leuffen/jodastyle";


Joda.registerTemplate("cta1",
    // language=HTML
    `
        <section class="tjs-cols-2-bg :: mobile :lg:">
            <div class="tjs-wrapper tjs-cols-2-bg--special container">
                <div class="tjs-cols-2-bg__disturber-image">

                    <img loading="lazy" src="/images/man-showing.webp">

                </div>
                <div class="tjs-cols-2-bg__disturber-stars">

                        <img loading="lazy" class="tjs-cols-2-bg__disturber-stars--left" src="/images/stars.webp">
                    <img loading="lazy" class="tjs-cols-2-bg__disturber-stars--right" src="/images/stars.webp">

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
