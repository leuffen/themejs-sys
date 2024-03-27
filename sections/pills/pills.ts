import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("pill",
    // language=HTML
    `
        <div class="tjs-pill">
            <div class="tjs-wrapper">
                <div class="tjs-pill__content">
                    <slot></slot>
                </div>
            </div>
        </div>
    `);

Joda.registerTemplate("pills",
    // language=HTML
    `
        <section class="tjs-pills container element-margin-bottom :: mobile :md:">
            <slot data-select="h2"></slot>
            <slot data-select=".children > *" data-child-layout="use: #pill;" data-replace></slot>
        </section>
    `);
