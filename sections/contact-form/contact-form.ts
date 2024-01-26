import {Joda} from "@leuffen/jodastyle";



Joda.registerTemplate("contact-form",
    // language=HTML
    `
        <section class="tjs-contact-form element-margin-bottom :: mobile :lg:">
            <div class="tjs__wrapper">
                <div class="tjs-contact-form__content--container">
                    <div class="tjs-contact-form__content--container-inner">
                        <div class="tjs-contact-form__col tjs-contact-form__text">
                            <slot></slot>
                        </div>
                        <div class="tjs-contact-form__col tjs-contact-form__form">
                            <form data-micx-formmail-preset="default" data-micx-formmail-sent-message="E-Mail erfolgreich gesendet!">
                                <slot data-select=".form, form"></slot>
                                <div class="tjs-contact__newsletter--callback-wrapper">
                                    <span>Kontaktieren Sie mich per:</span>
                                    <div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="contact-input-callback-type" id="contact-input-callback-type-phone">
                                            <label class="form-check-label" for="contact-input-callback-type-phone">
                                                Telefon
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="contact-input-callback-type" id="contact-input-callback-type-email" checked>
                                            <label class="form-check-label" for="contact-input-callback-type-email">
                                                E-Mail
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `);
