import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("customer-reviews__carousel--slide",
    // language=HTML
    `
        <div class="tjs-customer-reviews__carousel--slide">
            <div class="tjs-customer-reviews__carousel--slide__stars">

            </div>
            <div class="tjs-customer-reviews__carousel--slide__text">
                <slot data-select="blockquote"></slot>
            </div>
            <div class="tjs-customer-reviews__carousel--slide__author">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i> 5/5 Sterne
                <slot></slot>
            </div>
        </div>
    `)

Joda.registerTemplate("customer-reviews",
    // language=HTML
    `
        <section class="tjs-customer-reviews :: mobile :md:">
            <div class="tjs-wrapper container-fluid">
                <div class="tjs-customer-reviews__content--container">
                    <div class="tjs-customer-reviews__content">
                        <div class="tjs-customer-reviews__content--headline">
                            <slot><slot>
                        </div>
                        <div class="tjs-customer-reviews__content--row">
                            <div class="tjs-customer-reviews__content--col tjs-customer-reviews__carousel">
                                <div class="tjs-customer-reviews__carousel--navigation-prev">
                                    <img loading="lazy" src="https://cdn.leuffen.de/global/themejs-sys/elements/arrow-left.svg" width="500" height="500">
                                </div>
                                <div class="tjs-customer-reviews__carousel--navigation-next">
                                    <img loading="lazy" src="https://cdn.leuffen.de/global/themejs-sys/elements/arrow-right.svg" width="500" height="500">
                                </div>
                                <div class="tjs-customer-reviews__carousel--nav-points">
                                    <div class="tjs-customer-reviews__carousel--nav-points__point active" data-id="1"></div>
                                    <div class="tjs-customer-reviews__carousel--nav-points__point" data-id="2"></div>
                                    <div class="tjs-customer-reviews__carousel--nav-points__point" data-id="3"></div>
                                </div>

                                <liscom-slider class="tjs-customer-reviews__carousel--slides">
                                    <slot data-select=".children > *" data-child-layout="use: #customer-reviews__carousel--slide;"></slot>
                                </liscom-slider>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `);
