import {Joda} from "@leuffen/jodastyle";


Joda.registerTemplate("e-card-default",
    // language=HTML
    `
        <div class="tjs__e-card-default">
            <div class="tjs__e-card-default__img">
                <slot data-select="img"></slot>
            </div>

            <div class="tjs__e-card-default__body text-format">
                <slot></slot>
            </div>
        </div>
    `);
