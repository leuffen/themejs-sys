import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("footer-copyright",
    // language=HTML
    `
        <div class="tjs-footer-copyright :: mobile :lg:">
            <div class="container">
                <hr>
                <div class="tjs-footer-copyright__legal">
                    <slot></slot>
                </div>
            </div>
        </div>

    `);
