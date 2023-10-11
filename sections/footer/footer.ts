import {Joda} from "@leuffen/jodastyle";



Joda.registerTemplate("footer",
    // language=HTML
    `
        <footer class="tjs-footer :: mobile :lg:">
            <div class="tjs-footer__shape"></div>
            <div class="tjs-footer__shape"></div>
            <div class="tjs__wrapper">
                <div class="container">
                    <div class="tjs-footer__content--container">
                        <div class="tjs-footer__col tjs-footer__col--double">
                            <div class="tjs-footer__col--double-inner">
                                <img
                                    src="/static/images/logo-systemwebsite-white.png"
                                    alt="Logo Systemwebseite"
                                    class="tjs-footer__logo"
                                >
                                <p>Ihr Partner für moderne medizinische Webseiten-Entwicklung</p>
                            </div>
                        </div>
                        <div class="tjs-footer__col">
                            <div class="tjs-footer__col--inner">
                                <div class="tjs-footer__links">
                                    <strong>Links</strong>
                                    <div>
                                        <a href="#">Konditionen</a>
                                        <a href="#">Leistungen</a>
                                        <a href="#">FAQ</a>
                                        <a href="#">Kontakt</a>
                                    </div>
                                </div>
                                <div class="tjs-footer__col tjs-footer__links">
                                    <strong>Links</strong>
                                    <div>
                                        <a href="#">Konditionen</a>
                                        <a href="#">Leistungen</a>
                                        <a href="#">FAQ</a>
                                        <a href="#">Kontakt</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tjs-footer__col tjs-footer__links tjs-footer__links__mobile__images">
                            <strong>Folgen Sie Uns</strong>
                            <div>
                                <a href="#">
                                    <img src="/static/icons/linkedin.svg" alt="">
                                    <span>LinkedIn</span>
                                </a>
                                <a href="#">
                                    <img src="/static/icons/xing.svg" alt="">
                                    <span>Xing</span>
                                </a>
                                <a href="#">
                                    <img src="/static/icons/facebook.svg" alt="">
                                    <span>Facebook</span>
                                </a>
                                <a href="#">
                                    <img src="/static/icons/instagram.svg" alt="">
                                    <span>Instagram</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <hr>
                        <div class="tjs-footer__legal">
                            <span>Copyright &copy; 2023 SYSTEMWEBSEITE</span>
                            <div class="tjs-footer__legal__links">
                                <span><a href="#">AGB</a></span>
                                <span><a href="#">Datenschutz</a></span>
                                <span><a href="#">Impressum</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    `);
