import { Joda } from "@leuffen/jodastyle";

Joda.registerTemplate("header2",
    // language=HTML
    `
        <section class="tjs-header2 ani-container ani-start-threshold-0 element-margin-bottom :: mobile :lg: ">
            <div class="x-container container">
                <div class="row align-items-center">
                    <div class="col-12 col-md-6 order-2 order-md-1">
                        <slot></slot>
                    </div>
                    <div class="col-12 col-md-6 order-1 order-md-2 text-center">
                        <slot data-select=".aside || img.main || img" data-replace></slot>
                    </div>
                </div>
            </div>
        </section>
    `);
