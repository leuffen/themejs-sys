import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("cols-2",
    // language=HTML
    `
        <section class="tjs-cols-2 element-margin-bottom :: mobile :md:">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="tjs-wrapper">
                            <div class="tjs-cols-2__col tjs-cols-2__col--image">
                                <slot data-select=".aside || img"></slot>
                            </div>
                            <div class="tjs-cols-2__col tjs-cols-2__col--text-content">
                                <slot></slot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `);
