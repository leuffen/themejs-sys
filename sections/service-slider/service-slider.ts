import {Joda} from "@leuffen/jodastyle";
import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';
import {SwiperOptions} from "swiper/types";


Joda.registerTemplate("service-slider__carousel--slide",
    // language=HTML
    `
        <swiper-slide class="tjs-service-slider__carousel--slide swiper-slide">
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
                            <div class="tjs-service-slider__content--col tjs-service-slider__carousel swiper">
                                <div class="tjs-service-slider__carousel--navigation-prev">
                                    <img loading="lazy" src="https://cdn.leuffen.de/global/themejs-sys/elements/arrow-left.svg">
                                </div>
                                <div class="tjs-service-slider__carousel--navigation-next">
                                    <img loading="lazy" src="https://cdn.leuffen.de/global/themejs-sys/elements/arrow-right.svg">
                                </div>
                                <div class="tjs-service-slider__carousel--nav-points"></div>

                                <slot class="swiper-wrapper" data-select=".children > *" data-child-layout="use: #service-slider__carousel--slide;"></slot>

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
        onAfterAllTemplatesConnectedCallback: async (element) => {
            const swiperEl = element.querySelector('.swiper') as HTMLElement;
            if (!swiperEl) {
                throw new Error("swiperEl not found");
            }


            const swiperParams = {
                modules: [Navigation, Pagination],
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
            } as SwiperOptions;
            const swiper = new Swiper(swiperEl, swiperParams);
        }
    });
