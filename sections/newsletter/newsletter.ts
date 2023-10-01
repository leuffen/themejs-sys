import {Joda} from "@leuffen/jodastyle";


Joda.registerTemplate("newsletter",
    // language=HTML
    `
        <div class="tjs__newsletter dark">
            <div class="tjs__wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-6 tjs__newsletter__text">
                            <strong>Newsletter</strong>
                            <p>Melden Sie sich zum Newsletter an und erhalten Sie alle paar Wochen aktuelle News, Design- und Funktionsvorschläge und viele weitere hilfreiche Tipps für Ihren Onlineauftritt.</p>
                        </div>
                        <div class="col-12 col-md-6 tjs__newsletter__input-wrapper">
                            <div class="input-group">
                                <input type="email" class="form-control" placeholder="E-Mail eintragen">
                                <span class="input-group-text inside">Anmelden</span>
                            </div>
                            <span class="input-group-text outside">Anmelden</span>
                        </div>
                        <img src="/images/icons/stars-left.svg" alt="0" class="tjs__newsletter__icon">
                        <img src="/images/icons/stars-right.svg" alt="0" class="tjs__newsletter__icon">
                    </div>
                </div>
            </div>
        </div>
    `);
