import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("filter-image",
    // language=HTML
    `
        <div class="tjs-filter-images__item show" ontouchstart="this.classList.toggle('hover');">
            <div class="tjs-filter-images__item--content">
                <slot data-select="img" class="front"></slot>
                <div class="tjs-filter-images__item--information back">
                    <slot></slot>
                </div>
            </div>
        </div>
    `)

Joda.registerTemplate("filter-images",
    // language=HTML
    `
        <section id="tjs-filter-images" class="tjs-filter-images :: mobile :md:">
            <div class="tjs-wrapper container">
                <slot></slot>
                <div class="tjs-filter-images__filters">
                </div>
                <div class="tjs-filter-images__list">
                    <slot data-select=".children > *" data-child-layout="use: #filter-image;" data-replace></slot>
                </div>
            </div>
        </section>
    `,
    {}, {
        onAfterAllTemplatesConnectedCallback: (element) => {
            generateFilters();
            function generateFilters() {
                let tags = new Set();
                document.querySelectorAll('[data-section-data-tags]').forEach(function(elem) {
                    let tagList = elem.getAttribute('data-section-data-tags').split(', ');
                    tagList.forEach(tag => tags.add(tag));
                });

                let filterContainer = document.querySelector('.tjs-filter-images__filters');
                tags.forEach(tag => {
                    let filterButton = document.createElement('span');
                    filterButton.className = 'tjs-filter-images__filters--filter';
                    filterButton.dataset.filter = tag;
                    filterButton.textContent = tag.charAt(0).toUpperCase() + tag.slice(1);
                    filterContainer.appendChild(filterButton);
                });
                activateFilters();
            }

            function activateFilters() {
                const filters = document.querySelectorAll('.tjs-filter-images__filters--filter');

                filters.forEach(filter => {
                    filter.addEventListener('click', function() {
                        filters.forEach(f => f.classList.remove('selected'));
                        filter.classList.add('selected');

                        let selectedFilter = filter.getAttribute('data-filter');
                        let allItems = document.querySelectorAll('.tjs-filter-images__item');

                        allItems.forEach(item => {
                            item.classList.remove('is-animated');
                            let itemFilters = item.querySelector('h3').getAttribute('data-section-data-tags');
                            fadeOut(item, function() {
                                if (itemFilters) {
                                    let filtersArray = itemFilters.split(',').map(f => f.trim());

                                    if (filtersArray.includes(selectedFilter)) {
                                        item.classList.add('is-animated');

                                        fadeIn(item);
                                    }
                                }
                            });
                        });
                    });
                });
            }

            function fadeOut(el, callback) {
                el.style.opacity = 1;

                (function fade() {
                    if ((el.style.opacity -= 0.1) < 0) {
                        el.style.display = 'none';
                        callback();
                    } else {
                        setTimeout(fade, 50);
                    }
                })();
            }

            function fadeIn(el) {
                el.style.opacity = 0;
                el.style.display = '';

                (function fade() {
                    let val = parseFloat(el.style.opacity);
                    if (!((val += 1) > 1)) {
                        el.style.opacity = val;
                        setTimeout(fade, 50);
                    }
                })();
            }
        }
    });
