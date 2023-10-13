import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("image-slider__carousel--slide",
    // language=HTML
    `
        <div class="tjs-image-slider__carousel--slide">
            <div class="tjs-image-slider__carousel--slide__image">
                <slot data-select="img"></slot>
            </div>
            <div class="tjs-image-slider__carousel--slide__links">
                <slot data-select="p"></slot>
            </div>
        </div>
    `)

Joda.registerTemplate("image-slider",
    // language=HTML
    `
        <section class="tjs-image-slider :: mobile :md:">
            <div class="tjs-wrapper container-fluid">
                <div class="tjs-image-slider__content--container">
                    <div class="tjs-image-slider__content">
                        <div class="tjs-image-slider__content--headline">
                            <slot><slot>
                        </div>
                        <div class="tjs-image-slider__content--row">
                            <div class="tjs-image-slider__content--col tjs-image-slider__carousel">
                                <div class="tjs-image-slider__carousel--navigation-prev">
                                    <picture>
                                        <source srcset="/images/icons/arrow-left.webp" type="image/webp">
                                        <source srcset="/images/icons/arrow-left.svg" type="image/svg">
                                        <img src="/images/icons/arrow-left.svg">
                                    </picture>
                                </div>
                                <div class="tjs-image-slider__carousel--navigation-next">
                                    <picture>
                                        <source srcset="/images/icons/arrow-right.webp" type="image/webp">
                                        <source srcset="/images/icons/arrow-right.svg" type="image/svg">
                                        <img src="/images/icons/arrow-right.svg">
                                    </picture>
                                </div>
                                <div class="tjs-image-slider__carousel--nav-points">
                                    <div class="tjs-image-slider__carousel--nav-points__point active" data-id="1"></div>
                                    <div class="tjs-image-slider__carousel--nav-points__point" data-id="2"></div>
                                    <div class="tjs-image-slider__carousel--nav-points__point" data-id="3"></div>
                                </div>

                                <liscom-slider class="tjs-image-slider__carousel--slides">
                                    <slot data-select=".children > *" data-child-layout="use: #image-slider__carousel--slide;"></slot>
                                </liscom-slider>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `);
