import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("header1",
    // language=HTML
    `
        <section class="tjs-header">
            <div class="tjs-wrapper container-fluid">
                <div class="tjs-header__top-bar container-xxl">
                    <div class="tjs-header__top-bar--item">
                        <div class="tjs-header__top-bar--item-inner d-none d-md-block">
                            <p><b>Service-Tel.:</b> +49 1234 56789-0</p>
                        </div>
                        <a href="#">
                            <div class="tjs-header__top-bar--item-inner d-md-none">
                                <p>Service anrufen</p>
                            </div>
                        </a>
                    </div>
                    <div class="tjs-header__top-bar--item">
                        <a href="#">
                            <div class="tjs-header__top-bar--item-inner">
                                <p>Angebot anfordern</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="tjs-header__nav">
                    <div class="container-xl">
                        <div class="tjs-header__nav--inner">
                            <div class="tjs-header__nav--logo">
                                <picture>
                                    <source srcset="/images/logo-systemwebsite.webp" type="image/webp">
                                    <source srcset="/images/logo-systemwebsite.png" type="image/png">
                                    <img src="/images/logo-systemwebsite.png">
                                </picture>
                            </div>
                            <div class="tjs-header__nav--items">
                                <a class="tjs-header__nav--items-item" href="#">Service</a>
                                <a class="tjs-header__nav--items-item" href="#">Vorteile</a>
                                <a class="tjs-header__nav--items-item" href="#">Ablauf</a>
                                <a class="tjs-header__nav--items-item" href="#">Kontakt</a>
                            </div>
                            <div class="tjs-header__nav--mobile-menu">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tjs-header__hero container">
                    <div class="tjs-header__hero--row">
                        <div class="tjs-header__hero--col tjs-header__hero--col-text">
                            <slot></slot>
                        </div>
                        <div class="tjs-header__hero--col tjs-header__hero--col-image">
                            <slot data-select="img"></slot>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    `);
