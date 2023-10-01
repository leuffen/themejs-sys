import {Joda} from "@leuffen/jodastyle";



Joda.registerTemplate("contact",
    // language=HTML
    `
        <section class="tjs__contact overlap-next">
            <div class="tjs__wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-6 tjs__newsletter__text">
                            <strong>Kontakt</strong>
                            <h2>Vereinbaren Sie ein kostenloses Beratungs&shy;gespräch.</h2>

                            <div class="tjs__newsletter__list">
                                <strong>Ihre Vorteile</strong>
                                <ul>
                                    <li>Keine Einrichtungskosten</li>
                                    <li>Jederzeit kündbar</li>
                                    <li>30-Tage Geld-Zurück-Garantie</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <form>
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" placeholder="Ihr Vor- und Nachname" id="contact-input-name" required>
                                    <label for="contact-input-name">Ihr Vor- und Nachname</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" placeholder="Ihre E-Mail-Adresse" id="contact-input-email" required>
                                    <label for="contact-input-email">Ihre E-Mail-Adresse</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="tel" class="form-control" placeholder="Ihre Telefonnummer (optional)" id="contact-input-phone">
                                    <label for="contact-input-phone">Ihre Telefonnummer (optional)</label>
                                </div>

                                <div class="tjs__newsletter__callback-wrapper">
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

                                <div class="tjs__newsletter__privacy-wrapper">
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
