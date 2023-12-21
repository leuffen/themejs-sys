import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("box-white",
    // language=HTML
    `
        <section class="tjs-box-white :: mobile :md:">
            <div class="tjs-wrapper">
                <div class="tjs-box-white__content">
                    <slot></slot>
                </div>
            </div>
        </section>
    `);
