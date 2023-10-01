import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("service-slider__carousel--slide",
    // language=HTML
    `
        <div class="tjs-service-slider__carousel--slide">
            <div class="tjs-service-slider__carousel--slide__image">
                <slot data-select="img"></slot>
            </div>
            <div class="tjs-service-slider__carousel--slide__text">
                <slot></slot>
            </div>
        </div>`
    );


Joda.registerTemplate("service-slider",
    // language=HTML
    `
        <section class="tjs-service-slider  :: mobile :md:">
            <div class="tjs-wrapper container-fluid">
                <div class="tjs-service-slider__content--container">
                    <div class="tjs-service-slider__content">
                        <div class="tjs-service-slider__content--row">
                            <div class="tjs-service-slider__content--col tjs-service-slider__content--col-text">
                                <slot></slot>
                            </div>
                            <div class="tjs-service-slider__content--col tjs-service-slider__carousel">
                                <div class="tjs-service-slider__carousel--navigation">
                                    <div class="tjs-service-slider__carousel--navigation-prev">
                                        <picture>
                                            <source srcset="/images/icons/arrow-left.webp" type="image/webp">
                                            <source srcset="/images/icons/arrow-left.svg" type="image/svg">
                                            <img src="/images/icons/arrow-left.svg">
                                        </picture>
                                    </div>
                                    <div class="tjs-service-slider__carousel--navigation-next">
                                        <picture>
                                            <source srcset="/images/icons/arrow-right.webp" type="image/webp">
                                            <source srcset="/images/icons/arrow-right.svg" type="image/svg">
                                            <img src="/images/icons/arrow-right.svg">
                                        </picture>
                                    </div>
                                </div>
                                <div class="tjs-service-slider__carousel--nav-points">
                                    <div class="tjs-service-slider__carousel--nav-points__point active" data-id="1"></div>
                                    <div class="tjs-service-slider__carousel--nav-points__point" data-id="2"></div>
                                    <div class="tjs-service-slider__carousel--nav-points__point" data-id="3"></div>
                                </div>

                                <slot data-select=".children > *" data-child-layout="use: #service-slider__carousel--slide;"></slot>
                            </div>
                            <div class="tjs-service-slider__content--col tjs-service-slider__content--col__mobile-button">
                                <a href="#" class="btn btn-outline-primary">Alle Leistungen entdecken</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    `);
