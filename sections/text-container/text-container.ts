import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("text-container",
    // language=HTML
    `
        <section class="tjs-text-container  :: mobile :md:">
            <div class="tjs-wrapper container">
                <slot></slot>
            </div>
        </section>

    `);
