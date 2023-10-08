import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("cols-2-bg",
    // language=HTML
    `
        <section class="tjs-cols-2-bg :: mobile :md:">
            <div class="tjs-wrapper tjs-cols-2-bg__border container">
                <div class="tjs-cols-2-bg__disturber">
                    <slot data-select="blockquote"></slot>
                </div>
                <div class="tjs-cols-2-bg__row">
                    <div class="tjs-cols-2-bg__col tjs-cols-2-bg__col--image">
                        <slot data-select="img"></slot>
                    </div>
                    <div class="tjs-cols-2-bg__col tjs-cols-2-bg__col--text-content">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </section>
    `);
