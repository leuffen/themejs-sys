import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("footer-links",
    `
        <div class="tjs-footer__links">
            <slot></slot>
        </div>
    `);

Joda.registerTemplate("footer",
    // language=HTML
    `
        <footer class="tjs-footer :: mobile :lg:">
            <div class="tjs-footer__shape"></div>
            <div class="tjs-footer__shape"></div>
            <div class="tjs__wrapper">
                <div class="container">
                    <div class="tjs-footer__content--container">
                        <div class="tjs-footer__col tjs-footer__col--double">
                            <div class="tjs-footer__col--double-inner">

                                <slot></slot>
                            </div>
                        </div>
                        <div class="tjs-footer__col">
                            <div class="tjs-footer__col--inner">
                                <slot data-select=".section-h3" data-child-layout="use: #footer-links">
                                </slot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    `);
