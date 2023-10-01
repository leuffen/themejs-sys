import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("2-cols",
    // language=HTML
    `
        <section class="tjs-2-cols [[ layout.class ]]">
            <div class="tjs-wrapper container ">
                <div class="tjs-2-cols-bg__disturber">
                    <slot data-select="blockquote"></slot>
                </div>
                <div class="tjs-2-cols__col tjs-2-cols__col--image">
                    <slot data-select="img"></slot>
                </div>
                <div class="tjs-2-cols__col tjs-2-cols__col--text-content">
                    <slot></slot>
                </div>
            </div>
        </section>
    `);
