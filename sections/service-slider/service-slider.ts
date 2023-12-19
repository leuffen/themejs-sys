import {Joda} from "@leuffen/jodastyle";
import { register } from 'swiper/element/bundle';
register();

Joda.registerTemplate("service-slider__carousel--slide",
    // language=HTML
    `
        <swiper-slide class="tjs-service-slider__carousel--slide">
            <div class="tjs-service-slider__carousel--slide__image">
                <slot data-select="img"></slot>
            </div>
            <div class="tjs-service-slider__carousel--slide__text">
                <slot></slot>
            </div>
        </swiper-slide>`
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
                                <div class="tjs-service-slider__carousel--navigation-prev">
                                    <img loading="lazy" src="https://cdn.leuffen.de/global/themejs-sys/elements/arrow-left.svg">
                                </div>
                                <div class="tjs-service-slider__carousel--navigation-next">
                                    <img loading="lazy" src="https://cdn.leuffen.de/global/themejs-sys/elements/arrow-right.svg">
                                </div>
                                <div class="tjs-service-slider__carousel--nav-points"></div>

                                <swiper-container init="false" class="tjs-service-slider__carousel--slides">
                                    <slot data-select=".children > *" data-child-layout="use: #service-slider__carousel--slide;" data-replace></slot>
                                </swiper-container>
                            </div>
                            <div class="tjs-service-slider__content--col tjs-service-slider__content--col__mobile-button">
                                <a href="#" class="btn btn-outline-primary">Alle Leistungen entdecken</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    {}, {
        onAfterAllTemplatesConnectedCallback: (element) => {
            const swiperEl = element.querySelector('.tjs-service-slider__carousel--slides');
            const swiperParams = {
                spaceBetween: 35,
                loop: true,
                slidesPerView: 1.2,
                pagination: {
                    el: '.tjs-service-slider__carousel--nav-points',
                    clickable: true,
                    bulletClass: 'tjs-service-slider__carousel--nav-points__point',
                },
                breakpoints: {
                    640: {
                        slidesPerView: 1.4,
                    },
                    1024: {
                        slidesPerView: 1.5,
                    },
                    1680: {
                        slidesPerView: 2.5,
                    },
                },
                navigation: {
                    nextEl: ".tjs-service-slider__carousel--navigation-next",
                    prevEl: ".tjs-service-slider__carousel--navigation-prev"
                }
            };
            Object.assign(swiperEl, swiperParams);
            swiperEl['initialize']();
        }
    });
