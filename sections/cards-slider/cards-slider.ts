import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("cards-slider__list-item",
    // language=HTML
    `
        <li class="tjs-cards-slider__list-item" data-card-id="1">
            <div class="tjs-cards-slider__list-item-body">
                <div class="tjs-cards-slider__list-item-body--row">
                    <div class="tjs-cards-slider__list-item-body--row__col">
                        <slot data-select="h3"></slot>
                    </div>
                    <div class="tjs-cards-slider__list-item-body--row__col">
                        <slot data-select="img"></slot>
                    </div>
                </div>
                <div class="tjs-cards-slider__list-item-body--text">
                   <slot></slot>
                </div>
            </div>
        </li>
    `,
    )

Joda.registerTemplate("cards-slider",
    // language=HTML
    `
        <section class="tjs-cards-slider :: mobile :lg:">
            <div class="tjs-wrapper container">
                <div class="tjs-cards-slider__col">
                    <div class="tjs-cards-slider__text">
                        <slot></slot>
                    </div>
                </div>
                <div class="tjs-cards-slider__col">
                    <ul class="tjs-cards-slider__list">
                        <slot data-select=".children > *" data-child-layout="use: #cards-slider__list-item;"></slot>


                    </ul>
                </div>
            </div>
        </section>
    `);
