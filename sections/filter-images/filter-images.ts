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
                    <span class="tjs-filter-images__filters--filter selected" data-filter="all">Alle Projekte</span>
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
                            let itemFilters = item.querySelector('h3').getAttribute('data-section-data-tags');
                            if (itemFilters) {
                                let filtersArray = itemFilters.split(',').map(f => f.trim());
                                if (selectedFilter === 'all' || filtersArray.includes(selectedFilter)) {
                                    item.classList.remove('hide');
                                    item.classList.add('show');
                                } else {
                                    item.classList.add('hide');
                                    item.classList.remove('show');
                                }
                            }
                        });
                    });
                });
            }
        }
    });
