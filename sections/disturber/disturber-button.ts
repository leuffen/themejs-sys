import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("disturber-button",
    // language=HTML
    `
        <section class="tjs-disturber-button element-margin-bottom text-center">
            <div class="tjs-wrapper container">
                <slot></slot>
            </div>
        </section>
    `);
