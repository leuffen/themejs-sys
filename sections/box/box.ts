import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("box",
    // language=HTML
    `
        <section class="tjs-box :: mobile :md:">
            <div class="tjs-wrapper tjs-box__border">
                <div class="tjs-box__disturber">
                    <slot data-select="blockquote"></slot>
                </div>
                <div class="tjs-box__col--content">
                    <slot></slot>
                </div>
            </div>
        </section>
    `);
