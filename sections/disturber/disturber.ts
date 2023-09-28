import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("disturber",
    // language=HTML
    `
        <div class="tjs-disturber">
            <div class="tjs-wrapper container">
                <div class="tjs-disturber__content container">
                    <slot data-select="p"></slot>
                </div>
            </div>
        </div>
    `);
