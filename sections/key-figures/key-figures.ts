import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("key-figures",
    // language=HTML
    `
        <section class="tjs-key-figures element-margin-bottom :: mobile :lg:">
            <div class="tjs-wrapper container-fluid">
                <div class="tjs-key-figures__content--container">
                    <div class="tjs-key-figures__content--bg-image">
                        <img alt="Background" loading="lazy"
                             src="https://cdn.leuffen.de/global/themejs-sys/elements/bar-stripes.svg" width="1900"
                             height="500">
                        <slot data-select="img.background"></slot>
                    </div>
                    <div class="tjs-key-figures__content container">
                        <div class="tjs-key-figures__content--row">
                            <div class="tjs-key-figures__content--col">
                                <div class="tjs-key-figures__content--col__figure">849€</div>
                                <div class="tjs-key-figures__content--col__text">Einmalige Kosten</div>
                            </div>
                            <div class="tjs-key-figures__content--col">
                                <div class="tjs-key-figures__content--col__figure">10</div>
                                <div class="tjs-key-figures__content--col__text">In Tagen fertig</div>
                            </div>
                            <div class="tjs-key-figures__content--col">
                                <div class="tjs-key-figures__content--col__figure">20+</div>
                                <div class="tjs-key-figures__content--col__text">Jahre Erfahrung</div>
                            </div>
                            <div class="tjs-key-figures__content--col">
                                <div class="tjs-key-figures__content--col__figure">100+</div>
                                <div class="tjs-key-figures__content--col__text">Erfolgreiche Kunden</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `, {}, {
        onAfterAllTemplatesConnectedCallback: (element) => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            observer.unobserve(element)
                            entry.target.classList.add("visible");
                        }
                    });
            }, {threshold: 1.0});
            observer.observe(element);
        }
    }
);
