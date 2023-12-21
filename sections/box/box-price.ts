import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("box-price",
    // language=HTML
    `
        <section class="tjs-box-price :: mobile :md:">
            <div class="tjs-wrapper tjs-box-price__border">
                <div class="tjs-box-price__disturber">
                    <slot data-select="blockquote"></slot>
                </div>
                <div class="tjs-box-price__content">
                    <div class="tjs-box-price__content--header">
                        <div class="tjs-box-price__content--header-prices"><slot data-select=".prices"></slot></div>
                        <div class="tjs-box-price__content--header-name"><slot data-select="h2"></slot></div>
                    </div>
                    <slot></slot>
                </div>
            </div>
        </section>
    `);
