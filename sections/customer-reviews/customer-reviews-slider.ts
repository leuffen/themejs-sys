import {Joda} from "@leuffen/jodastyle";
import {SwiperOptions} from "swiper/types";
import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';

Joda.registerTemplate("customer-reviews__carousel--slide",
    // language=HTML
    `
        <swiper-slide class="tjs-customer-reviews-slider__carousel--slide">
            <div class="tjs-customer-reviews-slider__carousel--slide__stars">

            </div>
            <div class="tjs-customer-reviews-slider__carousel--slide__text">
                <slot data-select="blockquote"></slot>
            </div>
            <div class="tjs-customer-reviews-slider__carousel--slide__author">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i> 5/5 Sterne
                <slot></slot>
            </div>
        </swiper-slide>
    `)

Joda.registerTemplate("customer-reviews-slider",
    // language=HTML
    `
        <section class="tjs-customer-reviews-slider :: mobile :md:">
            <div class="tjs-wrapper container-fluid">
                <div class="tjs-customer-reviews-slider__content--container">
                    <div class="tjs-customer-reviews-slider__content">
                        <div class="tjs-customer-reviews-slider__content--headline">
                            <slot><slot>
                        </div>
                        <div class="tjs-customer-reviews-slider__content--row">
                            <div class="tjs-customer-reviews-slider__content--col tjs-customer-reviews-slider__carousel swiper">
                                <div class="tjs-customer-reviews-slider__carousel--navigation-prev">
                                    <img loading="lazy" src="https://cdn.leuffen.de/global/themejs-sys/elements/arrow-left.svg" width="500" height="500">
                                </div>
                                <div class="tjs-customer-reviews-slider__carousel--navigation-next">
                                    <img loading="lazy" src="https://cdn.leuffen.de/global/themejs-sys/elements/arrow-right.svg" width="500" height="500">
                                </div>
                                <div class="tjs-customer-reviews-slider__carousel--nav-points"></div>

                                <slot class="swiper-wrapper" data-select=".children > *" data-child-layout="use: #customer-reviews__carousel--slide;"></slot>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    {}, {
        onAfterAllTemplatesConnectedCallback: (element) => {
            const swiperEl = element.querySelector('.swiper') as HTMLElement;
            if (!swiperEl) {
                throw new Error("swiperEl not found");
            }

            const swiperParams = {
                modules: [Navigation, Pagination],
                spaceBetween: 35,
                slidesPerView: 1,
                loop: true,
                pagination: {
                    el: '.tjs-customer-reviews-slider__carousel--nav-points',
                    clickable: true,
                    bulletClass: 'tjs-customer-reviews-slider__carousel--nav-points__point',
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 2,
                    },
                    1680: {
                        slidesPerView: 3,
                    },
                },
                navigation: {
                    nextEl: ".tjs-customer-reviews-slider__carousel--navigation-next",
                    prevEl: ".tjs-customer-reviews-slider__carousel--navigation-prev"
                }
            } as SwiperOptions;
            const swiper = new Swiper(swiperEl, swiperParams);
        }
    });
