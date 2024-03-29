import {Joda} from "@leuffen/jodastyle";
import {SwiperOptions} from "swiper/types";
import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';

Joda.registerTemplate("customer-reviews__carousel--slide-2",
    // language=HTML
    `
        <div class="tjs-customer-reviews-slider-2__carousel--slide swiper-slide">
            <div class="tjs-customer-reviews-slider-2__carousel--slide__text">
                <slot data-select="blockquote"></slot>
            </div>
            <div layout="use: #screens">
                <slot class="prev" data-select="img"></slot>
            </div>

            <div class="tjs-customer-reviews-slider-2__carousel--slide__author">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i> 5/5 Sterne
                <slot></slot>
            </div>
        </div>
    `)

Joda.registerTemplate("customer-reviews-slider-2",
    // language=HTML
    `
        <section class="tjs-customer-reviews-slider-2 element-margin-bottom :: mobile :md:">
            <div class="tjs-wrapper">
                <div class="container-fluid">
                    <div class="tjs-customer-reviews-slider-2__content--container">
                        <div class="tjs-customer-reviews-slider-2__content">
                            <div class="tjs-customer-reviews-slider-2__content--headline element-margin-bottom">
                                <slot><slot>
                            </div>
                            <div class="tjs-customer-reviews-slider-2__content--row container">
                                <div class="tjs-customer-reviews-slider-2__content--col tjs-customer-reviews-slider-2__carousel swiper">
                                    <slot class="swiper-wrapper" data-select=".children > *" data-child-layout="use: #customer-reviews__carousel--slide-2;"></slot>
                                </div>
                                <div class="tjs-customer-reviews-slider-2__carousel--nav-points"></div>
                                <div class="tjs-customer-reviews-slider-2__carousel--navigation-prev">
                                    <img loading="lazy" src="https://cdn.leuffen.de/global/themejs-sys/elements/arrow-left.svg" width="500" height="500">
                                </div>
                                <div class="tjs-customer-reviews-slider-2__carousel--navigation-next">
                                    <img loading="lazy" src="https://cdn.leuffen.de/global/themejs-sys/elements/arrow-right.svg" width="500" height="500">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `,
    {}, {
        onAfterAllTemplatesConnectedCallback: (element) => {
            const swiperEl = element.querySelector('.swiper') as HTMLElement;
            if (!swiperEl) {
                throw new Error("swiperEl not found");
            }

            const swiperParams = {
                modules: [Navigation, Pagination],
                spaceBetween: 20,
                slidesPerView: 1.1,
                loop: true,
                navigation: {
                    nextEl: ".tjs-customer-reviews-slider-2__carousel--navigation-next",
                    prevEl: ".tjs-customer-reviews-slider-2__carousel--navigation-prev"
                },
                pagination: {
                    el: '.tjs-customer-reviews-slider-2__carousel--nav-points',
                    clickable: true,
                    bulletClass: 'tjs-customer-reviews-slider-2__carousel--nav-points__point',
                },
                breakpoints: {
                    768: {
                        spaceBetween: 25,
                        slidesPerView: 2,
                        loop: true,
                    },
                    992: {
                        spaceBetween: 30,
                        slidesPerView: 3,
                        loop: true,
                    }
                },
            } as SwiperOptions;
            const swiper = new Swiper(swiperEl, swiperParams);
        }
    });
