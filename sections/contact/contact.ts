import {Joda} from "@leuffen/jodastyle";



Joda.registerTemplate("contact",
    // language=HTML
    `
        <section class="tjs-contact :: mobile :lg:">
            <div class="tjs__wrapper container-fluid">
                <div class="tjs-contact__content--container">
                    <div class="tjs-contact__content--container-inner container">
                        <div class="tjs-contact__col tjs-contact__newsletter--text">
                            <slot data-select="h2"></slot>
                            <slot data-select="blockquote"></slot>

                            <div class="tjs-contact__newsletter--text__list">
                                <slot data-select="strong"></slot>
                                <slot data-select="ul"></slot>
                            </div>
                        </div>
                        <div class="tjs-contact__col tjs-contact__newsletter--form">
                            <form>
                                <slot></slot>

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

                                <div class="tjs-contact__newsletter--privacy-wrapper">
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
