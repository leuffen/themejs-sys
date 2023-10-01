import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("customer-reviews__carousel--slide",
    // language=HTML
    `
        <div class="tjs-customer-reviews__carousel--slide">
            <div class="tjs-customer-reviews__carousel--slide__stars">
                Sterne Icon?
            </div>
            <div class="tjs-customer-reviews__carousel--slide__text">
                <slot data-select="blockquote"></slot>
            </div>
            <div class="tjs-customer-reviews__carousel--slide__author">
                <slot></slot>
            </div>
        </div>
    `)

Joda.registerTemplate("customer-reviews",
    // language=HTML
    `
        <div class="tjs-customer-reviews">
            <div class="tjs-wrapper container-fluid">
                <div class="tjs-customer-reviews__content--container">
                    <div class="tjs-customer-reviews__content container">
                        <div class="tjs-customer-reviews__content--headline">
                            <slot><slot>
                        </div>
                        <div class="tjs-customer-reviews__content--row">
                            <div class="tjs-customer-reviews__content--col tjs-customer-reviews__carousel">
                                <slot data-select=".children > *" data-child-layout="use: #customer-reviews__carousel--slide;"></slot>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);
