import {Joda} from "@leuffen/jodastyle";


Joda.registerTemplate("cta1",
    // language=HTML
    `
        <section class="tjs-2-cols-bg">
            <div class="tjs-wrapper tjs-2-cols-bg--special container">
                <div class="tjs-2-cols-bg__disturber-image">

                    <img loading="lazy" src="/images/man-showing.webp">

                </div>
                <div class="tjs-2-cols-bg__disturber-stars">

                        <img loading="lazy" class="tjs-2-cols-bg__disturber-stars--left" src="/images/stars.webp">
                    <img loading="lazy" class="tjs-2-cols-bg__disturber-stars--right" src="/images/stars.webp">

                </div>
                <div class="tjs-2-cols-bg__row tjs-2-cols-bg__row--special">
                    <div class="tjs-2-cols-bg__col tjs-2-cols-bg__col--text-content">
                        <slot></slot>
                    </div>
                    <div class="tjs-2-cols-bg__col tjs-2-cols-bg__col--button-content">
                        <slot data-select=".btn"></slot>
                    </div>
                </div>
            </div>
        </section>
    `);
