import {Joda} from "@leuffen/jodastyle";



Joda.registerTemplate("contact",
    // language=HTML
    `
        <section class="tjs-contact :: mobile :lg:">
            <div class="tjs__wrapper container-fluid">
                <div class="tjs-contact__content--container">
                    <div class="tjs-contact__content--container-inner container">
                        <div class="tjs-contact__col tjs-contact__newsletter--text">
                            <slot></slot>

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
