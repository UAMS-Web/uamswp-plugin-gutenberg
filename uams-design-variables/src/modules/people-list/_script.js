import Fuse from "fuse.js";
//import { sanitize } from "dompurify";
import _groupBy from "lodash/groupBy";
import {
  uamsAriaExpanded,
  uamsAriaIsExpanded,
} from "../../../_assets/js/partials/uamsPartials";

const PeopleList = function (el) {
  const urlParams = new URLSearchParams(window.location.search);
  const apiEndpoint = el.dataset.baseUrl + "/wp-json/peopleapi/v1/people?";
  let isInitialized = false;
  const queryAttributes = [
    "count",
    "page",
    "nid",
    "classification",
    "university-category",
    "university-location",
    "university-organization",
    "tag",
    "photo-size",
    "profile-order",
  ];
  const filterAttributeMap = {
    location: "university_location",
    organization: "university_organization",
    classification: "classification",
    tag: "tag",
    category: "category",
  };
  const searcher = new Fuse([], {
    shouldSort: true,
    minMatchCharLength: 3,
    threshold: 0.3,
    keys: [
      {
        name: "name",
        weight: 3,
      },
      "title",
      "nid",
      "email",
      "phone",
    ],
  });
  const componentId = el.dataset.componentId;
  const profileLink = el.dataset.profileLink ?? "";
  const displayFields = el.dataset.displayFields.split(",");
  const onlyShowSelectedTermValues = el.dataset.onlyShowSelectedTermValues;
  const excludedTerms = el.dataset.excludeTermValues
    .split(",")
    .filter((r) => r !== "");
  const activeFilters = [];
  const categoryTerms = parseTermsAttribute(el.dataset.categoryFilterTerms);
  const tagTerms = parseTermsAttribute(el.dataset.tagFilterTerms);
  const locationTerms = parseTermsAttribute(el.dataset.locationFilterTerms);
  const organizationTerms = parseTermsAttribute(
    el.dataset.organizationFilterTerms
  );
  const classificationTerms = parseTermsAttribute(
    el.dataset.classificationFilterTerms
  );

  const includedTerms = [];
  let selectedFiltersList = [];
  let allPeopleString = "";
  let people;
  let peopleContainer;
  let peopleElements;
  let filtersContainer;
  let filterToggles;
  let searchInput;

  function getPersonHTML(person) {
    // console.log(person);

    const linkProfile =
      displayFields.includes("profile-link") || (profileLink && person.bio)
        ? true
        : false;
    const profileUrl = displayFields.includes("profile-link")
      ? person.profile_url
      : `${profileLink}?nid=${person.nid}`;

    return `<div class="uams-card uams-card-person uams-image-frame--ratio-square uams-card--outline-shadow js-people-list__person" data-nid="${
      person.nid
    }">
        ${
          displayFields.includes("photo")
            ? `
            <div class="uams-image-frame uams-card__person-image uams-people-list__person-image${
              person.photo ? " has-photo" : ""
            }">
                ${
                  person.photo
                    ? `
                    ${linkProfile ? `<a href="${profileUrl}">` : ""}<img src="${
                        person.photo
                      }"
                        ${
                          person.photo_srcset
                            ? `srcset="${person.photo_srcset}"`
                            : ""
                        }
                        ${
                          person.photo_srcset
                            ? `sizes="(min-width: 768px) 33.3vw, 100vw"`
                            : ""
                        } loading="lazy" alt="">${linkProfile ? `</a>` : ""}`
                    : ""
                }
            </div>`
            : ""
        }

        <div class="uams-card__content">
            ${
              displayFields.includes("name")
                ? `<${el.dataset.headingtag} class="uams-card__person-name">${person.name}</${el.dataset.headingtag}>`
                : ""
            }
            
            ${
              displayFields.includes("title") && Array.isArray(person.title)
                ? person.title
                    .map(
                      (t) => `<div class="uams-card__person-title">${t}</div>`
                    )
                    .join("")
                : ""
            }

            ${
              displayFields.includes("focus-area") &&
              Array.isArray(person.focus_area) &&
              person.focus_area.length > 0
                ? `
                <div class="uams-card__focus-area">
                    <div class="uams-card__focus-area-title">Focus Area</div>
                    <ul class="uams-card__focus-area-list">` +
                  person.focus_area.map((f) => `<li>${f.name}</li>`).join("") +
                  `
                    </ul>
                </div>`
                : ""
            }
            
            ${
              displayFields.includes("email") && person.email
                ? `
                <div class="uams-meta-email uams-meta--icon-crimson">
                    <span class="uams-screen-reader-only">Email Address</span>
                    <a href="mailto:${person.email}">${person.email}</a>
                </div>`
                : ""
            }

            ${
              displayFields.includes("office") && person.office
                ? `
                <div class="uams-meta-location uams-meta--icon-crimson">
                    <span class="uams-screen-reader-only">Location</span>
                    ${person.office}
                </div>`
                : ""
            }

            ${
              displayFields.includes("phone") && person.phone
                ? `
                <div class="uams-meta-phone uams-meta--icon-crimson">
                    <span class="uams-screen-reader-only">Phone</span>
                    <a href="tel:${person.phone}">${person.phone}</a>
                </div>`
                : ""
            }

            ${
              displayFields.includes("website") && person.website
                ? `
                <div class="uams-meta-website uams-meta--icon-crimson">
                    <a href="${person.website}">${el.dataset.websiteLinkText}</a>
                </div>`
                : ""
            }
            ${
              linkProfile
                ? `<div class="uams-card__person-link"><a href="${profileUrl}" class="uams-button uams-button--style-action">View Profile</a></div>`
                : ""
            }
        </div>
    </div>`;
  }

  function shouldIncludeTermValue(slug) {
    if (onlyShowSelectedTermValues === "true" && includedTerms.length > 0) {
      return includedTerms.includes(slug);
    } else if (
      onlyShowSelectedTermValues === "false" &&
      excludedTerms.length > 0
    ) {
      return !excludedTerms.includes(slug);
    }

    return true;
  }

  function parseTermsAttribute(attribute) {
    return attribute
      .split(",")
      .filter((r) => r !== "")
      .map((option) => {
        const parts = option.split("|");

        return { slug: parts[0], name: parts[1] };
      });
  }

  function createSelectFilterHTML(filter, people) {
    const appliedFilters = urlParams.has(filter)
      ? urlParams.get(filter).split(",")
      : [];

    let options = [];

    let includeTerms = [];

    switch (filter) {
      case "organization":
        includeTerms = organizationTerms;
        break;
      case "tag":
        includeTerms = tagTerms;
        break;
      case "location":
        includeTerms = locationTerms;
        break;
      case "classification":
        includeTerms = classificationTerms;
        break;
      case "category":
        includeTerms = categoryTerms;
        break;
    }

    // set filter options
    people.forEach((person) => {
      const filterOptions = person[filterAttributeMap[filter]];

      if (filterOptions && filterOptions.length > 0) {
        if (!activeFilters.includes(filter)) {
          activeFilters.push(filter);
        }

        filterOptions.forEach((v) => {
          if (includeTerms.length > 0) {
            if (
              includeTerms.findIndex((o) => o.slug === v.slug) !== -1 &&
              options.findIndex((o) => o.slug === v.slug) === -1
            ) {
              options.push(v);
            }
          } else if (options.findIndex((o) => o.slug === v.slug) === -1) {
            options.push(v);
          }
          /*if (
            shouldIncludeTermValue(v.slug) &&
            options.findIndex((o) => o.slug === v.slug) === -1
          ) {
            options.push(v);
          }*/
        });
      }
    });

    if (includeTerms.length > 0) {
      options = includeTerms.map((t) => {
        const existingOption = options.find((o) => o.slug === t.slug);

        if (existingOption) {
          return existingOption;
        }

        return t;
      });
    } else {
      // sort options alphabetically
      options.sort(function (a, b) {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
    }

    // class="uams-screen-reader-only"
    return options.length > 0
      ? `<div class="uams-people-list__select-filter">
            <button type="button" class="uams-button uams-people-list__filter-toggle" aria-expanded="false" aria-controls="${componentId}__content">${
          el.dataset[filter + "FilterLabel"]
        }</button>
            <div id="${componentId}__content" class="uams-people-list__select-list-container" aria-labelledby="${componentId}__title">
                <ul class="uams-people-list__select-list">
                    ${options
                      .map((o) => {
                        return `<li class="uams-people-list__select-list-item">
                              <label class="uams-people-list__fitler-label">
                                  <input class="uams-people-list__fitler-checkbox" type="checkbox" name="${filter}[]" value="${
                          o.slug
                        }" 
                                  ${
                                    appliedFilters.includes(o.slug)
                                      ? "checked"
                                      : ""
                                  } />
                                  ${o.name}                    
                              </label>
                          </li>`;
                      })
                      .join("")}
                </ul>
            </div>
        </div>`
      : "";
  }

  function createPeopleFilters(filtersString, people) {
    let content = "";
    const filters = filtersString.split(",");
    const nonSearchFilters = filters.filter((f) => f && f !== "search");

    // setup filters container
    const filtersContainer = document.createElement("form");
    filtersContainer.className = "uams-people-list__filters-container";

    // create non-search filters
    nonSearchFilters.forEach((filter) => {
      const selectFilter = createSelectFilterHTML(filter, people);
      content += selectFilter;
    });

    // create search filter
    if (filters.includes("search")) {
      const defaultValue = urlParams.has("search")
        ? urlParams.get("search")
        : "";
      content += `        
        <div class="uams-people-list__search-filter">
            <input class="uams-people-list__search-input" type="text" placeholder="${el.dataset.searchFilterLabel}" value="${defaultValue}"/>
        </div>`;
    }

    content += `
      <div class="uams-people-list__selected-filters-container">
        <ul class="uams-people-list__selected-filters-list">
        </ul>
      </div>
    `;

    // write filters to container
    filtersContainer.innerHTML = content;

    return filtersContainer;
  }

  function populatePeopleContainer(people, peopleContainer) {
    let peopleHTML = "";

    people.forEach((p) => {
      peopleHTML += getPersonHTML(p);
    });

    peopleContainer.innerHTML = peopleHTML;
  }

  function createPeopleContainer() {
    const container = document.createElement("div");
    container.className = `uams-card-wrapper uams-card-wrapper--per-row-${el.dataset.columns} js-people-list`;

    return container;
  }

  function updatePeopleList(people) {
    let i = 0;

    // show and sort people by filters
    people.forEach((person) => {
      const personElement = Array.from(peopleElements).find(
        (p) => p.dataset.nid === person.nid
      );

      if (personElement) {
        personElement.style.display = null;
        personElement.style.order = i;
        i++;
      }
    });

    // hide people not found in filtering
    const peopleToHide = Array.from(peopleElements).filter((personElement) => {
      return (
        people.findIndex((p) => p.nid === personElement.dataset.nid) === -1
      );
    });

    peopleToHide.forEach((personElement) => {
      personElement.style.display = "none";
      personElement.style.order = null;
    });

    people.length === 0
      ? el.classList.add("has-no-results")
      : el.classList.remove("has-no-results");
  }

  function updateUrlParams(selectedFilterInputs, searchInput) {
    const searchParams = new URLSearchParams();

    // update select filter params
    const groupedInputs = _groupBy(selectedFilterInputs, (i) =>
      i.name.replace("[]", "")
    );

    Object.keys(groupedInputs).forEach((key) => {
      const value = groupedInputs[key].map((i) => i.value).join(",");
      searchParams.set(key, value);
    });

    // update search param
    if (
      searchInput &&
      searchInput.value !== "" &&
      searchInput.value.length >= 3
    ) {
      searchParams.set("search", searchInput.value);
    }

    // update url
    var newRelativePathQuery =
      window.location.pathname + "?" + searchParams.toString();
    history.replaceState(null, "", newRelativePathQuery);
  }

  function updateSelectedFilters(selectedFilterInputs) {
    let content = "";

    selectedFilterInputs.forEach((input) => {
      content += `
        <li class="uams-people-list__selected-filters-list-item">
          <button class="uams-people-list__selected-filter-toggle" type="button" 
            data-filter-list="${input.name.replace("[]", "")}" 
            data-value="${input.value}">
            ${input.nextSibling.textContent.trim()}
          </button>
        </li>
      `;
    });

    selectedFiltersList.innerHTML = content;
  }

  function processPeopleFilters() {
    let selectedFilterInputs = [];
    let filteredPeople = JSON.parse(allPeopleString);

    activeFilters.forEach((f) => {
      let checkboxInputs = filtersContainer.elements[`${f}[]`];

      if (!checkboxInputs) {
        return;
      }

      checkboxInputs =
        checkboxInputs.length !== undefined
          ? Array.from(checkboxInputs)
          : [checkboxInputs];

      const selectedInputs = checkboxInputs.filter((f) => f.checked);
      if (selectedInputs.length > 0) {
        selectedFilterInputs = selectedFilterInputs.concat(selectedInputs);
        const selectedValues = selectedInputs.map((s) => s.value);

        filteredPeople = filteredPeople.filter((person) => {
          const personsValues = person[filterAttributeMap[f]];

          return selectedValues.some((v) => {
            return !(personsValues.findIndex((o) => v === o.slug) === -1);
          });
        });
      }
    });

    if (
      searchInput &&
      searchInput.value !== "" &&
      searchInput.value.length >= 3
    ) {
      searcher.setCollection(filteredPeople);
      const results = searcher.search(searchInput.value);

      filteredPeople = results.map((r) => r.item);
    }

    updateSelectedFilters(selectedFilterInputs);
    updatePeopleList(filteredPeople);
    isInitialized && updateUrlParams(selectedFilterInputs, searchInput);
  }

  function bindEvents(el) {
    filtersContainer = el.querySelector(".uams-people-list__filters-container");
    filterToggles = el.querySelectorAll(".uams-people-list__filter-toggle");
    searchInput = el.querySelector(".uams-people-list__search-input");
    selectedFiltersList = el.querySelector(
      ".uams-people-list__selected-filters-list"
    );
    peopleContainer = el.querySelector(".uams-people-list__filters-container");
    peopleElements = el.querySelectorAll(".js-people-list__person");

    // initial run for processing url params
    processPeopleFilters();

    // handle form submit
    filtersContainer.addEventListener("submit", function (e) {
      e.preventDefault();
      return false;
    });

    // filter on select option change
    filtersContainer.addEventListener("change", function (e) {
      if (e.target !== searchInput) {
        processPeopleFilters();
      }
    });

    // filter on search
    searchInput?.addEventListener("input", function (e) {
      processPeopleFilters(); // should consider debouncing?
    });

    // remove selected filter on toggle click
    selectedFiltersList.addEventListener("click", function (e) {
      const toggle = e.target.closest(
        ".uams-people-list__selected-filter-toggle"
      );

      if (toggle) {
        const input = filtersContainer.querySelector(
          `input[name^="${toggle.dataset.filterList}"][value="${toggle.dataset.value}"]`
        );
        if (input) {
          input.checked = false;
          processPeopleFilters();
        }
      }
    });

    // toggling select filters
    document.addEventListener(
      "click",
      function (e) {
        const clickedFiltersContainer = e.target.closest(
          ".uams-people-list__filters-container"
        );
        const toggle = e.target.closest(".uams-people-list__filter-toggle");
        const insideSelectFilter =
          e.target.closest(".uams-people-list__select-filter") !== null;

        // handle clicks inside clicked filtersContainer
        if (clickedFiltersContainer === filtersContainer) {
          if (toggle) {
            // close other open menus
            filterToggles.forEach((t) => {
              if (t !== toggle) {
                uamsAriaExpanded(t, false);
              }
            });

            uamsAriaExpanded(toggle, !uamsAriaIsExpanded(toggle));

            // close all menus in filterContainer if click was not in a toggle or select menu
          } else if (!insideSelectFilter) {
            filterToggles.forEach((t) => {
              uamsAriaExpanded(t, false);
            });
          }
        }

        // close all if click was outside current filtersContainer
        if (
          clickedFiltersContainer === null ||
          clickedFiltersContainer !== filtersContainer
        ) {
          filterToggles.forEach((t) => {
            uamsAriaExpanded(t, false);
          });
        }
      },
      false
    );
  }

  function generateHTML(people) {
    let content = "";

    // create filters
    const filtersContainer = createPeopleFilters(el.dataset.filters, people);
    content += filtersContainer.outerHTML;

    // create people list
    const peopleContainer = createPeopleContainer();
    populatePeopleContainer(people, peopleContainer);
    content += peopleContainer.outerHTML;

    // write html to dom
    el.innerHTML = content;
  }

  function getPeople() {
    // build request
    const params = queryAttributes
      .reduce(function (acc, curr, idx) {
        const attrValue = el.getAttribute("data-" + curr);

        if (attrValue) {
          acc.push(curr + "=" + attrValue);
        }

        return acc;
      }, [])
      .join("&");

    // make request
    return fetch(apiEndpoint + params)
      .then((response) => response.json())
      .catch(function (error) {
        console.error(error);
      });
  }

  function init() {
    getPeople().then((data) => {
      allPeopleString = JSON.stringify(data);
      people = data;

      generateHTML(people);
      setTimeout(() => {
        bindEvents(el);
        isInitialized = true;
      }, 0);
    });
  }

  init();
};

document.querySelectorAll(".uams-people-list").forEach((el) => {
  new PeopleList(el);
});
