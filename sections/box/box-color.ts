import {Joda} from "@leuffen/jodastyle";
import {SwiperOptions} from "swiper/types";
import Swiper from "swiper";
import { Pagination } from 'swiper/modules';

Joda.registerTemplate("box-color",
    // language=HTML
    `
        <div class="tjs-box-color swiper-slide">
            <div class="tjs-wrapper">
                <div class="tjs-box-color__content">
                    <slot data-select="blockquote"></slot>
                    <slot data-select="h3"></slot>
                    <div class="text-center">
                        <slot data-select="img"></slot>
                    </div>
                    <slot data-select="ul" data-replace></slot>
                    <slot></slot>
                </div>
            </div>
        </div>
    `);

Joda.registerTemplate("boxes-color",
    // language=HTML
    `
        <section class="tjs-box-color-container container element-margin-bottom :: mobile :md:">
            <div class="row">
                <div class="col-12">

                </div>
            </div>
            <div class="text-center">
                <slot></slot>
            </div>
            <div class="tjs-box-color-container__inner">
                <div class="tjs-box-color__carousel swiper">
                    <div class="swiper-wrapper">
                        <slot class="swiper-wrapper" data-select=".children > *" data-child-layout="use: #box-color;" data-replace></slot>
                    </div>
                </div>
                <div class="tjs-box-color__carousel--nav-points"></div>
            </div>
            <slot class="footer-wrapper" data-select=".footer"></slot>
        </section>
    `,{}, {
        onAfterAllTemplatesConnectedCallback: (element) => {
            const swiperEl = element.querySelector('.swiper') as HTMLElement;
            let init = false;
            let swiper;
            if (!swiperEl) {
                throw new Error("swiperEl not found");
            }

            initializeSwiper();
            window.addEventListener("resize", initializeSwiper);
            function initializeSwiper() {
                if (window.innerWidth <= 768) {
                    console.log("test");
                    if (!init) {
                        init = true;
                        const swiperParams = {
                            modules: [Pagination],
                            spaceBetween: 20,
                            slidesPerView: 1.1,
                            loop: true,
                            pagination: {
                                el: '.tjs-box-color__carousel--nav-points',
                                clickable: true,
                                bulletClass: 'tjs-box-color__carousel--nav-points__point',
                            },
                        } as SwiperOptions;
                        console.log("test2ssss");
                        swiper = new Swiper(swiperEl, swiperParams);
                    }
                } else if (init) {
                    swiper.destroy();
                    init = false;
                }
            }
        }
    });
