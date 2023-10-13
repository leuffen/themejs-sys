import {Joda} from "@leuffen/jodastyle";



Joda.registerTemplate("contact-form",
    // language=HTML
    `
        <section class="tjs-contact-form :: mobile :lg:">
            <div class="tjs__wrapper container">
                <div class="tjs-contact-form__content--container">
                    <div class="tjs-contact-form__content--container-inner">
                        <div class="tjs-contact-form__col tjs-contact-form__text">
                            <slot data-select="img"></slot>
                            <slot data-select="ul"></slot>
                        </div>
                        <div class="tjs-contact-form__col tjs-contact-form__form">
                            <form>
                                <slot></slot>

                                <div class="tjs-contact-form__newsletter--privacy-wrapper">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="contact-input-callback-privacy">
                                        <label class="form-check-label" for="contact-input-callback-privacy">
                                            Ich akzeptiere die <a href="#">Nutzungsbedingungen</a> und <a href="#">Datenschutzerklärungen</a>
                                        </label>
                                    </div>
                                </div>

                                <button type="submit">Absenden</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `);
