import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("box-white",
    // language=HTML
    `
        <div class="tjs-box-white element-margin-bottom">
            <div class="tjs-wrapper">
                <div class="tjs-box-white__content">
                    <slot></slot>
                </div>
            </div>
        </div>
    `);

Joda.registerTemplate("box-white-container",
    // language=HTML
    `
        <section class="tjs-box-white-container container :: mobile :md:">
            <slot data-select=".children > *" data-child-layout="use: #box-white;" data-replace></slot>
        </section>
    `);
