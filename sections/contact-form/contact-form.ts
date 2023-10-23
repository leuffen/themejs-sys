import {Joda} from "@leuffen/jodastyle";



Joda.registerTemplate("contact-form",
    // language=HTML
    `
        <section class="tjs-contact-form :: mobile :lg:">
            <div class="tjs__wrapper container">
                <div class="tjs-contact-form__content--container">
                    <div class="tjs-contact-form__content--container-inner">
                        <div class="tjs-contact-form__col tjs-contact-form__text">
                            <slot></slot>
                        </div>
                        <div class="tjs-contact-form__col tjs-contact-form__form">
                            <form data-micx-formmail-preset="default" data-micx-formmail-sent-message="E-Mail erfolgreich gesendet!">
                                <slot data-select=".form, form"></slot>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `);
