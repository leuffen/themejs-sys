import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("header1",
    // language=HTML
    `
        <section class="tjs-header1 :: mobile :lg: ">
            <div class="tjs-wrapper container-fluid">

                <div class="tjs-header1__hero container">
                    <div class="tjs-header1__hero--row">
                        <div class="tjs-header1__hero--col tjs-header1__hero--col-text">
                            <slot></slot>
                        </div>
                        <div class="tjs-header1__hero--col tjs-header1__hero--col-image">
                            <slot data-select="img" data-replace></slot>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    `);
