import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("google-map",
    // language=HTML
    `
        <section class="tjs-google-map :: mobile :md:">
            <div style="width: 100%">
                <iframe width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
            </div>
            <div class="tjs-wrapper container-fluid">
                <div class="tjs-google-map__address">
                    <slot></slot>
                </div>
            </div>
        </section>
    `);
