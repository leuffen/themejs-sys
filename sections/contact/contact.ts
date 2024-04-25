import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("tjs-contact-person",
    // language=HTML
    `
        <div class="tjs-contact-person">
            <div class="img">
                <slot  data-select="img"></slot>
            </div>

            <slot class="text"></slot>
        </div>
    `);


Joda.registerTemplate("contact",
    // language=HTML
    `
        <section class="tjs-contact element-margin-bottom :: mobile :lg:">
            <div class="tjs__wrapper container-fluid">
                <div class="tjs-contact__content--container">
                    <div class="tjs-contact__content--container-inner container">
                        <div class="tjs-contact__col tjs-contact__newsletter--text">
                            <slot></slot>

                            <slot data-select=".contact-person" data-child-layout="wrap: #tjs-contact-person"></slot>
                        </div>
                        <div class="tjs-contact__col tjs-contact__newsletter--form">
                            <form data-micx-formmail-preset="default" data-micx-formmail-sent-message="E-Mail erfolgreich gesendet!">
                                <slot data-select=".form, form"></slot>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `);
