import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("google-map",
    // language=HTML
    `
        <section class="tjs-google-map :: mobile :md:">
            <div style="width: 100%">
                <div layout="use: map()" style="height: 600px"></div>
            </div>
            <div class="tjs-wrapper container-fluid">
                <div class="tjs-google-map__address">
                    <slot></slot>
                </div>
            </div>
        </section>
    `);
