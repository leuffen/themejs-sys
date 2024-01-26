import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("customer-reviews__review",
    // language=HTML
    `
        <div class="tjs-customer-reviews__review">
            <div class="tjs-customer-reviews__review--stars">

            </div>
            <div class="tjs-customer-reviews__review--text">
                <slot data-select="blockquote"></slot>
            </div>
            <div class="tjs-customer-reviews__review--author">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i> 5/5 Sterne
                <slot></slot>
            </div>
        </div>
    `)

Joda.registerTemplate("customer-reviews",
    // language=HTML
    `
        <section class="tjs-customer-reviews element-margin-bottom :: mobile :md:">
            <div class="tjs-wrapper container">
                <div class="tjs-customer-reviews__content">
                    <div class="tjs-customer-reviews__content--headline element-margin-bottom">
                        <slot><slot>
                    </div>
                    <div class="tjs-customer-reviews__content--row">
                        <slot data-select=".children > *" data-child-layout="use: #customer-reviews__review;" data-replace></slot>
                    </div>
                </div>
            </div>
        </section>
    `);
