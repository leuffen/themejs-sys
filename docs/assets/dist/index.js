/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./elements/e-card-default/e-card-default.ts":
/*!***************************************************!*\
  !*** ./elements/e-card-default/e-card-default.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");



_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("e-card-default",
    // language=HTML
    `
        <div class="tjs__e-card-default">
            <div class="tjs__e-card-default__img">
                <slot data-select="img"></slot>
            </div>

            <div class="tjs__e-card-default__body text-format">
                <slot></slot>
            </div>
        </div>
    `);


/***/ }),

/***/ "./elements/e-form/e-form.ts":
/*!***********************************!*\
  !*** ./elements/e-form/e-form.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");



_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("e-form",
    // language=HTML
    `
        <form class="tjs__e-form" data-micx-formmail-preset="default" data-micx-formmail-sent-message="E-Mail erfolgreich gesendet!">
            <slot></slot>
        </form>
    `);


/***/ }),

/***/ "./elements/elements.ts":
/*!******************************!*\
  !*** ./elements/elements.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _e_card_default_e_card_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./e-card-default/e-card-default */ "./elements/e-card-default/e-card-default.ts");
/* harmony import */ var _e_form_e_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./e-form/e-form */ "./elements/e-form/e-form.ts");




/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccordionLayout: () => (/* reexport safe */ _leuffen_isl_base__WEBPACK_IMPORTED_MODULE_3__.AccordionLayout),
/* harmony export */   HamburgerLayout: () => (/* reexport safe */ _leuffen_isl_base__WEBPACK_IMPORTED_MODULE_3__.HamburgerLayout),
/* harmony export */   InputLayout: () => (/* reexport safe */ _leuffen_isl_base__WEBPACK_IMPORTED_MODULE_3__.InputLayout),
/* harmony export */   MapLayout: () => (/* reexport safe */ _leuffen_isl_base__WEBPACK_IMPORTED_MODULE_3__.MapLayout),
/* harmony export */   ScreenLayout: () => (/* reexport safe */ _leuffen_isl_base__WEBPACK_IMPORTED_MODULE_3__.ScreenLayout)
/* harmony export */ });
/* harmony import */ var _leuffen_liscom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/liscom */ "./workspaces/liscom/index.ts");
/* harmony import */ var _sections_sections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/sections */ "./sections/sections.ts");
/* harmony import */ var _elements_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/elements */ "./elements/elements.ts");
/* harmony import */ var _leuffen_isl_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @leuffen/isl-base */ "./workspaces/isl-base/index.ts");
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");
/* harmony import */ var _leuffen_liweco_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @leuffen/liweco-base */ "./node_modules/@leuffen/liweco-base/dist/index.js");










(0,_leuffen_liscom__WEBPACK_IMPORTED_MODULE_0__.liscom_enable)();





/***/ }),

/***/ "./node_modules/@leuffen/liweco-base/dist/business/office-hours.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@leuffen/liweco-base/dist/business/office-hours.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OfficeHours: () => (/* binding */ OfficeHours)
/* harmony export */ });
const DAY_OF_WEEK = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];
class OfficeHours {
    constructor() {
        this.openHours = new Map();
        this.vacations = [];
    }
    static convertToDateTime(input) {
        if (input instanceof Date) {
            return input;
        }
        else if (typeof input === 'string') {
            return new Date(input);
        }
        else {
            return new Date();
        }
    }
    addOpenHour(dayOfWeek, from, till) {
        const dayHours = this.openHours.get(dayOfWeek) || [];
        dayHours.push({ from, till });
        this.openHours.set(dayOfWeek, dayHours);
    }
    addVacation(fromDate, tillDate, title, text) {
        this.vacations.push({
            fromDate: OfficeHours.convertToDateTime(fromDate),
            tillDate: OfficeHours.convertToDateTime(tillDate),
            title,
            text
        });
    }
    isVacation(date = null) {
        const dateTime = OfficeHours.convertToDateTime(date);
        return this.vacations.some(vacation => dateTime >= vacation.fromDate && dateTime <= vacation.tillDate);
    }
    getVacation(date = null) {
        const dateTime = OfficeHours.convertToDateTime(date);
        const vacation = this.vacations.find(vac => dateTime >= vac.fromDate && dateTime <= vac.tillDate);
        return vacation ? { title: vacation.title, text: vacation.text } : null;
    }
    getUpcomingVacation(interval = null) {
        const currentDate = new Date();
        const endDate = new Date(currentDate);
        if (interval === null) {
            return this.vacations.filter(vacation => vacation.tillDate >= currentDate);
        }
        if (interval.days) {
            endDate.setDate(endDate.getDate() + interval.days);
        }
        if (interval.months) {
            endDate.setMonth(endDate.getMonth() + interval.months);
        }
        return this.vacations.filter(vacation => (vacation.fromDate >= currentDate && vacation.fromDate <= endDate) ||
            (vacation.tillDate >= currentDate && vacation.tillDate <= endDate) ||
            (vacation.fromDate <= currentDate && vacation.tillDate >= endDate));
    }
    isOpen(dateTime = null) {
        const dateObj = OfficeHours.convertToDateTime(dateTime);
        return !this.isVacation(dateObj) && this.getTodayOpenDates(dateObj).some(hour => {
            const currentTime = `${dateObj.getHours()}:${String(dateObj.getMinutes()).padStart(2, '0')}`;
            return currentTime >= hour.from && currentTime <= hour.till;
        });
    }
    getNextOpenDate(dateTime = null) {
        let nextDate = OfficeHours.convertToDateTime(dateTime);
        while (this.isVacation(nextDate) || !this.isOpen(nextDate)) {
            nextDate.setHours(0, 0, 0, 0); // Reset time to beginning of day
            nextDate.setDate(nextDate.getDate() + 1); // Go to the next day
        }
        return nextDate;
    }
    getTodayOpenDates(dateTime = null) {
        const dateObj = OfficeHours.convertToDateTime(dateTime);
        const dayOfWeek = DAY_OF_WEEK[dateObj.getDay()];
        return this.openHours.get(dayOfWeek) || [];
    }
    getHumanReadableOpenDates(dateTime = null) {
        const dateObj = OfficeHours.convertToDateTime(dateTime);
        if (this.isVacation(dateObj)) {
            const vacation = this.getVacation(dateObj);
            return `Closed due to vacation: ${vacation === null || vacation === void 0 ? void 0 : vacation.title}. Next open date: ${DAY_OF_WEEK[this.getNextOpenDate(dateObj).getDay()]} ${this.getNextOpenDate(dateObj).toLocaleDateString()} at 9:00.`;
        }
        else if (this.isOpen(dateObj)) {
            const openHours = this.getTodayOpenDates(dateObj);
            const currentOpenHour = openHours.find(hour => `${dateObj.getHours()}:${String(dateObj.getMinutes()).padStart(2, '0')}` <= hour.till);
            return `Currently open till ${currentOpenHour === null || currentOpenHour === void 0 ? void 0 : currentOpenHour.till}. Next open date: ${DAY_OF_WEEK[this.getNextOpenDate(dateObj).getDay()]} at 9:00.`;
        }
        else {
            const nextOpenDate = this.getNextOpenDate(dateObj);
            const nextOpenHours = this.getTodayOpenDates(nextOpenDate);
            const nextOpenDay = DAY_OF_WEEK[nextOpenDate.getDay()];
            const nextOpenDateStr = nextOpenHours.map(hour => `${hour.from} - ${hour.till}`).join(' and ');
            return `Closed now. Open next: ${nextOpenDay} ${nextOpenDateStr}.`;
        }
    }
    loadStruct(inputData) {
        // Clear existing data
        this.openHours.clear();
        this.vacations = [];
        // Load open hours
        inputData.json.forEach(hour => {
            if (hour.status === "open") { // Assuming you want to only add hours when the status is 'open'
                const day = typeof hour.dayOfWeek === 'number' ? DAY_OF_WEEK[hour.dayOfWeek] : hour.dayOfWeek;
                this.addOpenHour(day, hour.from, hour.to);
            }
        });
        // Load vacations
        if (!Array.isArray(inputData.vacation)) {
            return;
        }
        inputData.vacation.forEach(vac => {
            this.addVacation(vac.from, vac.till, vac.title, vac.text);
        });
    }
}


/***/ }),

/***/ "./node_modules/@leuffen/liweco-base/dist/components/liweco-collapse-openhour-table.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@leuffen/liweco-base/dist/components/liweco-collapse-openhour-table.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

let LiwecoCollapseOpenhourTable = class LiwecoCollapseOpenhourTable extends HTMLElement {
    constructor() {
        super(...arguments);
        this.origContent = null;
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("connected");
            yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_sleep)(1);
            if (this.origContent === null) {
                this.origContent = this.innerHTML;
            }
            this.innerHTML = this.origContent;
            let dayNames = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
            let dayName = dayNames[(new Date()).getDay()];
            let table = this.querySelector("table");
            if (!table.textContent.match(new RegExp(dayName, "im")))
                return;
            table.classList.add("mb-0");
            for (let el of Array.from(table.querySelectorAll("tr"))) {
                if (el.textContent.match(new RegExp(dayName, "im"))) {
                    el.firstElementChild.textContent = dayName + " (heute)";
                    //el.classList.add("text-primary");
                }
                else {
                    el.classList.add("collapse");
                    el.classList.add("text-muted");
                }
            }
            let footer = document.createElement("tfoot");
            table.appendChild(footer);
            footer.innerHTML = '<tr><td colspan="100"><button class="btn btn-sm w-100"><i class="bi bi-caret-down"></i> ganze Woche anzeigen</button></td></tr>';
            footer.firstElementChild.addEventListener("click", () => {
                footer.remove();
                table.querySelectorAll(".collapse").forEach((e) => e.classList.remove("collapse"));
            });
        });
    }
};
LiwecoCollapseOpenhourTable = __decorate([
    (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.customElement)('liweco-collapse-openhour-table')
], LiwecoCollapseOpenhourTable);


/***/ }),

/***/ "./node_modules/@leuffen/liweco-base/dist/components/liweco-news.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@leuffen/liweco-base/dist/components/liweco-news.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LiwecoVacationModal: () => (/* binding */ LiwecoVacationModal)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");
/* harmony import */ var _business_office_hours__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../business/office-hours */ "./node_modules/@leuffen/liweco-base/dist/business/office-hours.js");
/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/functions */ "./node_modules/@leuffen/liweco-base/dist/helper/functions.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let LiwecoVacationModal = class LiwecoVacationModal extends HTMLElement {
    constructor() {
        super();
        this.default = null;
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_dom_ready)();
            yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_sleep)(100);
            let dataClass = this.getAttribute("data-class");
            if (typeof window["openhours"] === "undefined") {
                console.error("[liweco-news] window.openhours not defined");
                return;
            }
            let openhoursData = window["openhours"];
            let openhours = new _business_office_hours__WEBPACK_IMPORTED_MODULE_1__.OfficeHours();
            openhours.loadStruct(openhoursData);
            if (this.default === null)
                this.default = this.innerHTML;
            this.innerHTML = "";
            let newsDiv = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("div", { "data-owner": "liweco-news", class: dataClass }, "", this);
            let msgCount = 0;
            for (let curVac of openhours.getUpcomingVacation(null)) {
                msgCount++;
                (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("p", { "data-owner": "liweco-vacaction" }, null, newsDiv).innerHTML = (0,_helper_functions__WEBPACK_IMPORTED_MODULE_2__.markdownToHtml)(curVac.title);
            }
            if (msgCount === 0) {
                this.classList.add("no-news");
                this.innerHTML = this.default;
            }
        });
    }
    disconnectedCallback() {
    }
};
LiwecoVacationModal = __decorate([
    (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.customElement)("liweco-news"),
    __metadata("design:paramtypes", [])
], LiwecoVacationModal);



/***/ }),

/***/ "./node_modules/@leuffen/liweco-base/dist/components/liweco-vacation-modal.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@leuffen/liweco-base/dist/components/liweco-vacation-modal.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LiwecoVacationModal: () => (/* binding */ LiwecoVacationModal)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");
/* harmony import */ var _business_office_hours__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../business/office-hours */ "./node_modules/@leuffen/liweco-base/dist/business/office-hours.js");
/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/functions */ "./node_modules/@leuffen/liweco-base/dist/helper/functions.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const defaultModalTemplate = `
<div class="modal-backdrop fade"></div>
<div class="leu-vacation-modal modal fade d-block" tabindex="-1" data-leu-dismiss="modal" >

    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable %%classes%%" role="dialog">
        <div class="modal-content">
            <div class="modal-header position-relative">
                <h5 class="modal-title">%%title%%</h5>
                <button type="button" class="btn-close position-absolute top-0 end-0 p-4" style="top: 0" data-leu-dismiss="modal" aria-label="Schließen"></button>
            </div>
            <div class="modal-body">
                %%body%%
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-leu-dismiss="modal">Schließen</button>
            </div>
        </div>
    </div>
</div>
`;
class OpenHoursInterface {
}
let LiwecoVacationModal = class LiwecoVacationModal extends HTMLElement {
    constructor() {
        super();
        this.origOverflow = "";
    }
    show(meta) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            this.origOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            let content = defaultModalTemplate;
            content = content.replace("%%title%%", (0,_helper_functions__WEBPACK_IMPORTED_MODULE_2__.markdownToHtml)(meta.title))
                .replace("%%body%%", (0,_helper_functions__WEBPACK_IMPORTED_MODULE_2__.markdownToHtml)(meta.text.replace(/\n/g, "<br>")))
                .replace("%%classes%%", (_a = meta.classes) !== null && _a !== void 0 ? _a : "");
            this.showElement.innerHTML = content;
            yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_sleep)(10);
            this.showElement.querySelectorAll(".fade").forEach((e) => e.classList.add("show"));
        });
    }
    hide() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.showElement.innerHTML === "")
                return;
            document.body.style.overflow = this.origOverflow;
            this.showElement.querySelectorAll(".fade").forEach((e) => e.classList.remove("show"));
            yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_sleep)(200);
            this.showElement.innerHTML = "";
        });
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            this.style.display = "none";
            yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_dom_ready)();
            yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_sleep)(100);
            if (typeof window["openhours"] === "undefined") {
                console.error("[liweco-vacation-modal] window.openhours not defined");
                return;
            }
            let openhoursData = window["openhours"];
            if (!Array.isArray(openhoursData.vacation)) {
                console.error("[liweco-vacation-modal] window.openhours.vacation is not a array");
                return;
            }
            let openhours = new _business_office_hours__WEBPACK_IMPORTED_MODULE_1__.OfficeHours();
            openhours.loadStruct(openhoursData);
            this.showElement = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("div", { "owner": "leu-vacation-modal" });
            document.body.append(this.showElement);
            this.showElement.addEventListener("click", (e) => {
                let target = e.target;
                if (target.hasAttribute("data-leu-dismiss")) {
                    // Push History (don't use history.back() - it will fail if the page was opend with anchor)
                    this.hide();
                }
            });
            if (openhours.isVacation(null)) {
                this.show(openhours.getVacation(null));
            }
        });
    }
    disconnectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            this.showElement.remove();
        });
    }
};
LiwecoVacationModal = __decorate([
    (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.customElement)("liweco-vacation-modal"),
    __metadata("design:paramtypes", [])
], LiwecoVacationModal);



/***/ }),

/***/ "./node_modules/@leuffen/liweco-base/dist/helper/functions.js":
/*!********************************************************************!*\
  !*** ./node_modules/@leuffen/liweco-base/dist/helper/functions.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   markdownToHtml: () => (/* binding */ markdownToHtml)
/* harmony export */ });
function markdownToHtml(input) {
    // Kursiv & Fett: ***text***
    let html = input.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
    // Fett: **text**
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    // Kursiv: *text*
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
    // Horizontaler Trennstrich: ---
    html = html.replace(/---/g, '<hr>');
    return html;
}


/***/ }),

/***/ "./node_modules/@leuffen/liweco-base/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@leuffen/liweco-base/dist/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeuOpenHours: () => (/* reexport safe */ _types_leu_openhours__WEBPACK_IMPORTED_MODULE_1__.LeuOpenHours),
/* harmony export */   LiwecoVacationModal: () => (/* reexport safe */ _components_liweco_vacation_modal__WEBPACK_IMPORTED_MODULE_2__.LiwecoVacationModal),
/* harmony export */   OfficeHours: () => (/* reexport safe */ _business_office_hours__WEBPACK_IMPORTED_MODULE_0__.OfficeHours)
/* harmony export */ });
/* harmony import */ var _business_office_hours__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./business/office-hours */ "./node_modules/@leuffen/liweco-base/dist/business/office-hours.js");
/* harmony import */ var _types_leu_openhours__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/leu-openhours */ "./node_modules/@leuffen/liweco-base/dist/types/leu-openhours.js");
/* harmony import */ var _components_liweco_vacation_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/liweco-vacation-modal */ "./node_modules/@leuffen/liweco-base/dist/components/liweco-vacation-modal.js");
/* harmony import */ var _components_liweco_news__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/liweco-news */ "./node_modules/@leuffen/liweco-base/dist/components/liweco-news.js");
/* harmony import */ var _components_liweco_collapse_openhour_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/liweco-collapse-openhour-table */ "./node_modules/@leuffen/liweco-base/dist/components/liweco-collapse-openhour-table.js");








/***/ }),

/***/ "./node_modules/@leuffen/liweco-base/dist/types/leu-openhours.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@leuffen/liweco-base/dist/types/leu-openhours.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeuOpenHours: () => (/* binding */ LeuOpenHours)
/* harmony export */ });
class LeuOpenHours {
}


/***/ }),

/***/ "./workspaces/isl-base/elements/accordion/accordion.ts":
/*!*************************************************************!*\
  !*** ./workspaces/isl-base/elements/accordion/accordion.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccordionLayout: () => (/* binding */ AccordionLayout)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};


const tpl = `
    <div class="as__image">
        <div class="header" data-ref="header"></div>
        <div class="image" data-ref="image">
        </div>
        <div class="footer" data-ref="footer"></div>
    </div>
`;
class AccordionLayout extends _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_1__.DefaultLayout {
  constructor() {
    super(...arguments);
    this.accordion_auto_open = "first";
  }
}
let Accordion = class {
  render(element, layout) {
    var _a;
    element.classList.add("as__accordion");
    Array.from(element.querySelectorAll(":scope > .children > .section-h3 > .content h3")).forEach((e, i) => __async(this, null, function* () {
      let newElem = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("a", { class: "as__accordion-header" });
      e.parentNode.parentNode.insertBefore(newElem, e.parentNode);
      newElem.append(e);
      let update = () => {
        element.querySelectorAll(".section-h3 > .content,.children").forEach((e2) => __async(this, null, function* () {
          e2.style.setProperty("--orig-height", e2.scrollHeight + "px");
        }));
      };
      newElem.onclick = () => {
        var _a2;
        update();
        Array.from(newElem.closest(".children").children).forEach((e2) => {
          if (e2 === newElem.closest(".section-h3"))
            return;
          e2.classList.remove("open");
        });
        (_a2 = newElem.closest(".section-h3")) == null ? void 0 : _a2.classList.toggle("open");
      };
    }));
    console.log("acc", layout);
    if (layout.accordion_auto_open === "first") {
      (_a = element.querySelector(".section-h3")) == null ? void 0 : _a.classList.add("open");
    }
    return element;
  }
};
Accordion = __decorateClass([
  (0,_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_1__.jodaRenderer)("accordion", AccordionLayout)
], Accordion);


/***/ }),

/***/ "./workspaces/isl-base/elements/hamburger/hamburger.ts":
/*!*************************************************************!*\
  !*** ./workspaces/isl-base/elements/hamburger/hamburger.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HamburgerLayout: () => (/* binding */ HamburgerLayout)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};



const tpl = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_html)(`
<a class="as__hamburger" href="javascript:void(0);" aria-label="Men\xFC">
    <div class="as__hamburger-bar" ></div>
    <div class="as__hamburger-bar" ></div>
    <div class="as__hamburger-bar" ></div>
    <div class="as__hamburger-menu">Men\xFC</div>
</a>
`);
class HamburgerLayout extends _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_1__.DefaultLayout {
}
let Hamburger = class {
  render(element, layout) {
    let main = new _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_1__.QTemplate(tpl);
    element.append(main.content);
    main.content.addEventListener("click", () => {
      document.body.classList.toggle("nav-open");
    });
    return element;
  }
};
Hamburger = __decorateClass([
  (0,_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_1__.jodaRenderer)("hamburger", HamburgerLayout)
], Hamburger);


/***/ }),

/***/ "./workspaces/isl-base/elements/input/input.ts":
/*!*****************************************************!*\
  !*** ./workspaces/isl-base/elements/input/input.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputLayout: () => (/* binding */ InputLayout)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};



const tplDefault = `
<div class="as__input [[layout.style]] [[classes]]">
  <div data-ref="main"></div>
  <label for="[[ id ]]">[[ label ]]</label>
</div>
`;
const tplCheckbox = `
<div class="as__input [[classes]] form-check">
 <div data-ref="main"></div>
  <label class="form-check-label" for="[[ id ]]">
    [[ label ]]
  </label>
</div>
`;
class InputLayout extends _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_1__.DefaultLayout {
  constructor() {
    super(...arguments);
    this.style = "form-floating";
    this.classes = "";
  }
}
let idCounter = 0;
let Input = class {
  render(element, layout) {
    var _a, _b, _c;
    let main = new _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_1__.QTemplate(tplDefault);
    if (element instanceof HTMLInputElement) {
      if (element.type === "checkbox" || element.type === "radio") {
        main = new _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_1__.QTemplate(tplCheckbox);
      } else if (element.type === "submit") {
        main = new _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_1__.QTemplate(`<div class="as__input [[classes]]"><div data-ref="main"></div></div>`);
      }
    }
    element.id = element.id === "" ? "as__input_" + idCounter++ : element.id;
    if (element instanceof HTMLSelectElement) {
      let options = [];
      options.push({ value: "", label: (_a = element.getAttribute("data-initial")) != null ? _a : "", disabled: true, selected: true });
      if (element.hasAttribute("data-options")) {
        if (element.dataset.options.startsWith("[")) {
          options.push(...JSON.parse(element.dataset.options).map((o) => {
            return { value: o, label: o };
          }));
        } else if (element.dataset.options.startsWith("{")) {
          let data = JSON.parse(element.dataset.options);
          options = Object.keys(data).map((o) => {
            return { value: o, label: data[o] };
          });
        } else {
          options.push(...element.dataset.options.split(",").map((o) => {
            return { value: o, label: o };
          }));
        }
      }
      for (let option of options) {
        let o = { value: option.value };
        if (option.selected) {
          o["selected"] = "selected";
        }
        if (option.disabled) {
          o["disabled"] = "true";
        }
        let opt = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("option", o, option.label);
        element.append(opt);
      }
    }
    main.parse({
      layout,
      classes: layout.classes + " " + element.getAttribute("data-class"),
      id: element.id,
      label: (_c = (_b = element.getAttribute("label")) != null ? _b : element.getAttribute("name")) != null ? _c : element.id
    });
    if (element instanceof HTMLSelectElement) {
      element.classList.add("form-select");
    } else if (element instanceof HTMLInputElement && (element.type === "checkbox" || element.type === "radio")) {
      element.classList.add("form-check-input");
    } else if (element instanceof HTMLInputElement && element.type === "submit") {
      element.classList.add("btn", "bn-primary");
    } else {
      element.classList.add("form-control");
    }
    element.parentNode.replaceChild(main.content, element);
    main.select("main").selected.replaceWith(element);
    return main.content;
  }
};
Input = __decorateClass([
  (0,_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_1__.jodaRenderer)("input", InputLayout)
], Input);


/***/ }),

/***/ "./workspaces/isl-base/elements/map/map.ts":
/*!*************************************************!*\
  !*** ./workspaces/isl-base/elements/map/map.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapLayout: () => (/* binding */ MapLayout)
/* harmony export */ });
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};


const tpl = `
    <div class="as__map [[ layout.mapClass ]]">
        <div class="as__map-overlay" data-ref="overlay">
            <img src="[[ layout.mapPreviewUrl ]]" loading="lazy" width="1461" height="729" alt="map preview" />
            <div>
                <div>

                    <button class="btn btn-secondary mx-auto my-auto btn-lg" data-ref="button">Mit Google Maps anzeigen</button>
                    <p class="mx-auto">Erst nach dem Klick werden Inhalte von Google Maps geladen.</p>
                </div>

            </div>
        </div>
        <iframe width="100%" hidden title="Google Maps" height="100%" data-ref="iframe"></iframe>
        <script>
        <\/script>
    </div>
`;
class MapLayout extends _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.DefaultLayout {
  constructor() {
    super(...arguments);
    this.mapPreviewUrl = "https://cdn.leuffen.de/hyperpage-components/v1.0/google-maps/maps-preview.jpg";
  }
}
let Map = class {
  render(element, layout) {
    var _a;
    let main = new _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.QTemplate(tpl);
    main.parse({ layout });
    let mapUrl = (_a = window["mapUrl"]) != null ? _a : null;
    if (element.hasAttribute("data-map-preview-url")) {
      mapUrl = element.getAttribute("data-map-url");
    }
    if (mapUrl === null) {
      console.warn("Missing data-map-url attribute on element (nor window[mapUrl] is set)", element);
    }
    main.select("button").selected.addEventListener("click", () => {
      main.select("iframe").selected.removeAttribute("hidden");
      main.select("iframe").selected.setAttribute("src", mapUrl);
      main.select("overlay").selected.setAttribute("hidden", "true");
    });
    element.append(main.content);
    return main.content;
  }
};
Map = __decorateClass([
  (0,_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.jodaRenderer)("map", MapLayout)
], Map);


/***/ }),

/***/ "./workspaces/isl-base/elements/navbar-switch1/navbar-switch1.ts":
/*!***********************************************************************!*\
  !*** ./workspaces/isl-base/elements/navbar-switch1/navbar-switch1.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");

const html = `

    <nav class="isl-navbar-switch1 :: mobile :xl:">

        <div class="isl-navbar-switch1__top-bar container-xxl">
            <slot data-select="ul.navbar-top"></slot>
        </div>
        <div class="isl-navbar-switch1__nav">
            <div class="container-xl">
                <div class="isl-navbar-switch1__nav--inner">
                    <div class="isl-navbar-switch1__nav--logo">
                        <slot data-select=".brand"></slot>
                    </div>
                    <div class="isl-navbar-switch1__nav--items">
                        <slot data-select="ul.navbar-main" data-child-class="isl-navbar-switch1__nav--items-item"></slot>
                    </div>
                    <div class="isl-navbar-switch1__nav--mobile-menu :: :xl: d-none" onclick="this.closest('nav').classList.toggle('sidebar')">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
        <aside>
            <div class="backdrop" onclick="this.closest('nav').classList.remove('sidebar')"></div>
            <div class="menu">
                <div class="menu-header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"  onclick="this.closest('nav').classList.remove('sidebar')">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </div>
                <slot data-select="ul.navbar-main" data-copy="1" data-child-class="isl-navbar-switch1__nav--items-item"></slot>
            </div>
        </aside>
    </nav>

`;
_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("navbar-switch1", html);


/***/ }),

/***/ "./workspaces/isl-base/elements/screen/screen.ts":
/*!*******************************************************!*\
  !*** ./workspaces/isl-base/elements/screen/screen.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenLayout: () => (/* binding */ ScreenLayout)
/* harmony export */ });
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};


const tpl = `
    <div class="as__screen [[layout.type]]">
        <div class="as__screen-shadow" style="background-image: url([[layout.cdnBaseUrl]]/screens/[[layout.type]]-shadow.svg);"></div>
        <div class="as__screen-image" data-ref="image"></div>
        <div class="as__screen-overlay" style="background-image: url([[layout.cdnBaseUrl]]/screens/[[layout.type]].svg)"></div>
    </div>
`;
class ScreenLayout extends _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.DefaultLayout {
  constructor() {
    super(...arguments);
    this.cdnBaseUrl = "https://cdn.leuffen.de/hyperpage-components/v1.0";
    this.type = "mobile";
  }
}
let Screen = class {
  render(element, layout) {
    let q = new _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.QTemplate(tpl);
    q.parse({ layout });
    q.content.classList.add(...Array.from(element.classList));
    q.content.setAttribute("style", element.getAttribute("style"));
    element.setAttribute("style", "");
    element.parentElement.replaceChild(q.content, element);
    q.select("image").append(element);
    return q.content;
  }
};
Screen = __decorateClass([
  (0,_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.jodaRenderer)("screen", ScreenLayout)
], Screen);


/***/ }),

/***/ "./workspaces/isl-base/index.ts":
/*!**************************************!*\
  !*** ./workspaces/isl-base/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccordionLayout: () => (/* reexport safe */ _elements_accordion_accordion__WEBPACK_IMPORTED_MODULE_0__.AccordionLayout),
/* harmony export */   HamburgerLayout: () => (/* reexport safe */ _elements_hamburger_hamburger__WEBPACK_IMPORTED_MODULE_1__.HamburgerLayout),
/* harmony export */   InputLayout: () => (/* reexport safe */ _elements_input_input__WEBPACK_IMPORTED_MODULE_2__.InputLayout),
/* harmony export */   MapLayout: () => (/* reexport safe */ _elements_map_map__WEBPACK_IMPORTED_MODULE_3__.MapLayout),
/* harmony export */   ScreenLayout: () => (/* reexport safe */ _elements_screen_screen__WEBPACK_IMPORTED_MODULE_4__.ScreenLayout)
/* harmony export */ });
/* harmony import */ var _elements_accordion_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements/accordion/accordion */ "./workspaces/isl-base/elements/accordion/accordion.ts");
/* harmony import */ var _elements_hamburger_hamburger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/hamburger/hamburger */ "./workspaces/isl-base/elements/hamburger/hamburger.ts");
/* harmony import */ var _elements_input_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/input/input */ "./workspaces/isl-base/elements/input/input.ts");
/* harmony import */ var _elements_map_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/map/map */ "./workspaces/isl-base/elements/map/map.ts");
/* harmony import */ var _elements_screen_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements/screen/screen */ "./workspaces/isl-base/elements/screen/screen.ts");
/* harmony import */ var _elements_navbar_switch1_navbar_switch1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/navbar-switch1/navbar-switch1 */ "./workspaces/isl-base/elements/navbar-switch1/navbar-switch1.ts");








/***/ }),

/***/ "./workspaces/jodastyle/index.ts":
/*!***************************************!*\
  !*** ./workspaces/jodastyle/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ "./workspaces/jodastyle/src/index.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _src_index__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _src_index__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



/***/ }),

/***/ "./workspaces/jodastyle/src/component/joda-content-element.ts":
/*!********************************************************************!*\
  !*** ./workspaces/jodastyle/src/component/joda-content-element.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JodaContentElement: () => (/* binding */ JodaContentElement)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");
/* harmony import */ var _processor_jodastyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../processor/jodastyle */ "./workspaces/jodastyle/src/processor/jodastyle.ts");
/* harmony import */ var _processor_jodaresponsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../processor/jodaresponsive */ "./workspaces/jodastyle/src/processor/jodaresponsive.ts");
/* harmony import */ var _helper_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/logger */ "./workspaces/jodastyle/src/helper/logger.ts");
/* harmony import */ var _processor_jodavisualize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../processor/jodavisualize */ "./workspaces/jodastyle/src/processor/jodavisualize.ts");
/* harmony import */ var _helper_JodaSiteConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helper/JodaSiteConfig */ "./workspaces/jodastyle/src/helper/JodaSiteConfig.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var _origContentTemplate, _outputDiv;






function getCSSRule(ruleName) {
  ruleName = ruleName.toLowerCase();
  var result = null;
  var find = Array.prototype.find;
  find.call(document.styleSheets, (styleSheet) => {
    result = find.call(styleSheet.cssRules, (cssRule) => {
      return cssRule instanceof CSSStyleRule && cssRule.selectorText.toLowerCase() == ruleName;
    });
    return result != null;
  });
  return result;
}
console.time("jodaTime");
let JodaContentElement = class extends HTMLElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _origContentTemplate, void 0);
    __privateAdd(this, _outputDiv, void 0);
  }
  awaitStyles() {
    return __async(this, null, function* () {
      let index = 0;
      while (true) {
        index++;
        let initValue = getComputedStyle(this).getPropertyValue("--joda-init");
        if (initValue.indexOf("true") !== -1) {
          break;
        }
        if (index > 100) {
          index = 0;
          console.warn("Still waiting for --joda-init: true", this, "current value:", initValue, "on url", window.location.href);
        }
        yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_sleep)(50 + index);
      }
    });
  }
  setLoaded() {
    return __async(this, null, function* () {
      yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_sleep)(10);
      this.classList.add("loaded");
      yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_sleep)(100);
      document.body.classList.add("loaded");
      document.querySelector("html").classList.remove("loader");
    });
  }
  connectedCallback() {
    return __async(this, null, function* () {
      let logger = new _helper_logger__WEBPACK_IMPORTED_MODULE_3__.Logger("joda-content");
      yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_sleep)(1);
      yield this.awaitStyles();
      __privateSet(this, _origContentTemplate, (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("template"));
      __privateSet(this, _outputDiv, (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("div"));
      if (_helper_JodaSiteConfig__WEBPACK_IMPORTED_MODULE_5__.jodaSiteConfig.disable_templates) {
        this.setLoaded();
        if (_helper_JodaSiteConfig__WEBPACK_IMPORTED_MODULE_5__.jodaSiteConfig.debug_visualize && _helper_JodaSiteConfig__WEBPACK_IMPORTED_MODULE_5__.jodaSiteConfig.debug_visualize_attribute) {
          new _processor_jodavisualize__WEBPACK_IMPORTED_MODULE_4__.Jodavisualize().process(this);
        }
        return;
      }
      let jodaStyle = new _processor_jodastyle__WEBPACK_IMPORTED_MODULE_1__.Jodastyle(logger);
      yield jodaStyle.process(this);
      let jodaresponsive = new _processor_jodaresponsive__WEBPACK_IMPORTED_MODULE_2__.Jodaresponsive(logger);
      let currentBreakpoint = (0,_processor_jodaresponsive__WEBPACK_IMPORTED_MODULE_2__.getCurrentBreakpoint)();
      jodaresponsive.process(this);
      if (_helper_JodaSiteConfig__WEBPACK_IMPORTED_MODULE_5__.jodaSiteConfig.debug_visualize && _helper_JodaSiteConfig__WEBPACK_IMPORTED_MODULE_5__.jodaSiteConfig.debug_visualize_attribute) {
        new _processor_jodavisualize__WEBPACK_IMPORTED_MODULE_4__.Jodavisualize().process(this);
      }
      this.setLoaded();
      window.addEventListener("resize", () => {
        if (currentBreakpoint === (0,_processor_jodaresponsive__WEBPACK_IMPORTED_MODULE_2__.getCurrentBreakpoint)()) {
          return;
        }
        currentBreakpoint = (0,_processor_jodaresponsive__WEBPACK_IMPORTED_MODULE_2__.getCurrentBreakpoint)();
        logger.log("Breakpoint changed to " + currentBreakpoint);
        jodaresponsive.process(this);
      });
    });
  }
  setContent(content) {
    this.innerHTML = content;
    this.connectedCallback();
  }
};
_origContentTemplate = new WeakMap();
_outputDiv = new WeakMap();
JodaContentElement = __decorateClass([
  (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.customElement)("joda-content")
], JodaContentElement);


/***/ }),

/***/ "./workspaces/jodastyle/src/component/joda-fetch.ts":
/*!**********************************************************!*\
  !*** ./workspaces/jodastyle/src/component/joda-fetch.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");
/* harmony import */ var _processor_jodastyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../processor/jodastyle */ "./workspaces/jodastyle/src/processor/jodastyle.ts");
/* harmony import */ var _helper_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/logger */ "./workspaces/jodastyle/src/helper/logger.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};



let JodaFetch = class extends HTMLElement {
  connectedCallback() {
    return __async(this, null, function* () {
      let select = this.getAttribute("data-select");
      let elem = document.querySelector(select);
      if (elem === null) {
        console.error("joda-fetch: Element not found", select, "in element", this);
        return;
      }
      let jodaStyle = new _processor_jodastyle__WEBPACK_IMPORTED_MODULE_1__.Jodastyle(new _helper_logger__WEBPACK_IMPORTED_MODULE_2__.Logger("joda-fetch"));
      this.innerHTML = elem.innerHTML;
      yield jodaStyle.process(this);
    });
  }
};
JodaFetch = __decorateClass([
  (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.customElement)("joda-fetch")
], JodaFetch);


/***/ }),

/***/ "./workspaces/jodastyle/src/component/joda-split.ts":
/*!**********************************************************!*\
  !*** ./workspaces/jodastyle/src/component/joda-split.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");
/* harmony import */ var _processor_jodasplit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../processor/jodasplit */ "./workspaces/jodastyle/src/processor/jodasplit.ts");
/* harmony import */ var _helper_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/logger */ "./workspaces/jodastyle/src/helper/logger.ts");
/* harmony import */ var _processor_jodashorts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../processor/jodashorts */ "./workspaces/jodastyle/src/processor/jodashorts.ts");
/* harmony import */ var _helper_JodaSiteConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/JodaSiteConfig */ "./workspaces/jodastyle/src/helper/JodaSiteConfig.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var _ready;





let JodaSplit = class extends HTMLElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _ready, false);
  }
  get ready() {
    return __privateGet(this, _ready);
  }
  connectedCallback() {
    return __async(this, null, function* () {
      let logger = new _helper_logger__WEBPACK_IMPORTED_MODULE_2__.Logger("joda-split");
      yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_sleep)(1);
      if (_helper_JodaSiteConfig__WEBPACK_IMPORTED_MODULE_4__.jodaSiteConfig.debug_visualize) {
        this.classList.add("joda-debug-visualize");
      }
      if (_helper_JodaSiteConfig__WEBPACK_IMPORTED_MODULE_4__.jodaSiteConfig.disable_split) {
        __privateSet(this, _ready, true);
        return;
      }
      let jodaShorts = new _processor_jodashorts__WEBPACK_IMPORTED_MODULE_3__.Jodashorts(logger);
      this.innerHTML = yield jodaShorts.process(this.innerHTML);
      let jodaSplit = new _processor_jodasplit__WEBPACK_IMPORTED_MODULE_1__.Jodasplit(logger);
      let fragment = document.createDocumentFragment();
      fragment.append(yield jodaSplit.process(this));
      this.innerHTML = "";
      this.append(fragment);
      __privateSet(this, _ready, true);
    });
  }
};
_ready = new WeakMap();
JodaSplit = __decorateClass([
  (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.customElement)("joda-split")
], JodaSplit);


/***/ }),

/***/ "./workspaces/jodastyle/src/helper/JodaDescriptionManager.ts":
/*!*******************************************************************!*\
  !*** ./workspaces/jodastyle/src/helper/JodaDescriptionManager.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JodaDescriptionManager: () => (/* binding */ JodaDescriptionManager),
/* harmony export */   __JodaDescriptionManager: () => (/* binding */ __JodaDescriptionManager)
/* harmony export */ });
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
class __JodaDescriptionManager {
  addClass(category, className, description, example, modifiers, config = {}) {
    let defaultConfig = {
      bodyClasses: [],
      parseMarkdown: true
    };
    config = __spreadValues(__spreadValues({}, defaultConfig), config);
    if (window["jodastyle"] === void 0) {
      window["jodastyle"] = {};
    }
    if (window["jodastyle"]["descriptions"] === void 0) {
      window["jodastyle"]["descriptions"] = [];
    }
    window["jodastyle"]["descriptions"].push({ category, className, description, example, modifiers, config });
  }
  get data() {
    var _a;
    if (window["jodastyle"] === void 0) {
      console.warn("[jodastyle description manager] No jodastyle descriptions found (Make sure you imported a theme) => window.jodastyle is undefined");
      return [];
    }
    return (_a = window["jodastyle"]["descriptions"]) != null ? _a : [];
  }
  get classes() {
    return this.data.map((e) => e.className);
  }
  getDescription(className) {
    return this.data.find((e) => e.className === className);
  }
}
const JodaDescriptionManager = new __JodaDescriptionManager();


/***/ }),

/***/ "./workspaces/jodastyle/src/helper/JodaElementException.ts":
/*!*****************************************************************!*\
  !*** ./workspaces/jodastyle/src/helper/JodaElementException.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JodaElementException: () => (/* binding */ JodaElementException)
/* harmony export */ });
class JodaElementException {
  constructor(message, element = null, triggerCommand = null) {
    this.message = message;
    this.element = element;
    this.triggerCommand = triggerCommand;
  }
}


/***/ }),

/***/ "./workspaces/jodastyle/src/helper/JodaErrorElement.ts":
/*!*************************************************************!*\
  !*** ./workspaces/jodastyle/src/helper/JodaErrorElement.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JodaErrorElement: () => (/* binding */ JodaErrorElement)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getProtoOf = Object.getPrototypeOf;
var __reflectGet = Reflect.get;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __superGet = (cls, obj, key) => __reflectGet(__getProtoOf(cls), key, obj);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

let tpl = `
<style>
.joda-error {
    display: block;
    background-color: rgba(241,179,179,0.17);
    margin: 1em;
    padding: 1em;
    color: red;
    font-weight: bold;
    border: 3px solid red;
}
</style>
<div class="joda-error">
    [[ message ]]
</div>
`;
let JodaErrorElement = class extends _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.KaCustomElement {
  constructor(message) {
    super();
    this.message = message;
    let scope = this.init({
      message
    });
  }
  connectedCallback() {
    return __async(this, null, function* () {
      yield __superGet(JodaErrorElement.prototype, this, "connectedCallback").call(this);
      this.scope.message = this.message;
    });
  }
};
JodaErrorElement = __decorateClass([
  (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.customElement)(null),
  (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.template)(tpl)
], JodaErrorElement);


/***/ }),

/***/ "./workspaces/jodastyle/src/helper/JodaRenderer.ts":
/*!*********************************************************!*\
  !*** ./workspaces/jodastyle/src/helper/JodaRenderer.ts ***!
  \*********************************************************/
/***/ (() => {



/***/ }),

/***/ "./workspaces/jodastyle/src/helper/JodaSiteConfig.ts":
/*!***********************************************************!*\
  !*** ./workspaces/jodastyle/src/helper/JodaSiteConfig.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jodaSiteConfig: () => (/* binding */ jodaSiteConfig)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");

class JodaSiteConfig {
  constructor() {
    this.disable_split = false;
    this.disable_templates = false;
    this.disable_responsive = false;
    this.debug_visualize = false;
    this.debug_visualize_attribute = false;
  }
  // Add Attribution to visualized elements
}
const jodaSiteConfig = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_session_storage)(new JodaSiteConfig(), "jodaSiteConfig");


/***/ }),

/***/ "./workspaces/jodastyle/src/helper/QTemplate.ts":
/*!******************************************************!*\
  !*** ./workspaces/jodastyle/src/helper/QTemplate.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QTemplate: () => (/* binding */ QTemplate),
/* harmony export */   template_parse: () => (/* binding */ template_parse)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");


function template_parse(input, scope, element) {
  return input.replace(/\[\[(.*?)]]/gmi, (match, p1) => {
    let val = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(p1, scope, element, {});
    return val;
  });
}
class QTemplate {
  constructor(content) {
    if (typeof content === "string") {
      this.content = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("template");
      this.content.innerHTML = content;
    } else {
      this.content = content;
    }
    if (this.content instanceof HTMLTemplateElement) {
      if (this.content.content.children.length > 1) {
        throw new Error("Template must have exactly one root element. Found: " + this.content.innerHTML);
      }
      this.content = this.content.content.firstElementChild.cloneNode(true);
    }
    this.selected = null;
  }
  parse(scope) {
    let tpl = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("template", {}, [], null);
    tpl.content.append(this.content);
    tpl.innerHTML = template_parse(tpl.innerHTML, scope, tpl);
    this.content = tpl.content.firstElementChild;
    return this;
  }
  /**
   * Returns the element with the given data-ref attribute
   * @param data_ref
   */
  by(data_ref) {
    let selector = `[data-ref="${data_ref}"]`;
    if (this.content.matches(selector)) {
      return this.content;
    }
    return this.content.querySelector(selector);
  }
  select(data_ref) {
    this.selected = this.by(data_ref);
    if (this.selected === null) {
      console.error("Element with data-ref '" + data_ref + "' not found.", this.content);
      throw "Element with data-ref '" + data_ref + "' not found.";
    }
    return this;
  }
  /**
   * Pick elements by selector and append them to the selected element
   *
   * @param source
   * @param selector
   */
  pick(source, selector, modifier = null) {
    Array.from(source.querySelectorAll(selector)).forEach((e) => {
      if (modifier !== null) {
        e = modifier(e);
      }
      this.selected.append(e);
    });
    return this;
  }
  /**
   * Select and return own wrapper
   *
   * @param data_ref
   */
  with(data_ref) {
    let instance = new QTemplate(this.content);
    instance.select(data_ref);
    return instance;
  }
  append(element) {
    if (element instanceof QTemplate) {
      this.selected.append(element.content);
      return this;
    }
    if (element instanceof NodeList) {
      Array.from(element).forEach((e) => this.selected.append(e));
      return this;
    }
    if (Array.isArray(element) || element instanceof NodeList) {
      element.forEach((e) => this.selected.append(e));
      return this;
    }
    this.selected.append(element);
    return this;
  }
  clone() {
    return new QTemplate(this.content.cloneNode(true));
  }
}


/***/ }),

/***/ "./workspaces/jodastyle/src/helper/functions.ts":
/*!******************************************************!*\
  !*** ./workspaces/jodastyle/src/helper/functions.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   await_property: () => (/* binding */ await_property),
/* harmony export */   getCleanVariableValue: () => (/* binding */ getCleanVariableValue),
/* harmony export */   getTemplateFilledWithContent: () => (/* binding */ getTemplateFilledWithContent),
/* harmony export */   jodaRenderer: () => (/* binding */ jodaRenderer),
/* harmony export */   parseConfigString: () => (/* binding */ parseConfigString),
/* harmony export */   registerJodaRenderer: () => (/* binding */ registerJodaRenderer),
/* harmony export */   splitChildrenBySelector: () => (/* binding */ splitChildrenBySelector),
/* harmony export */   wrapElement: () => (/* binding */ wrapElement)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");
/* harmony import */ var _JodaElementException__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JodaElementException */ "./workspaces/jodastyle/src/helper/JodaElementException.ts");
/* harmony import */ var _QTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QTemplate */ "./workspaces/jodastyle/src/helper/QTemplate.ts");
/* harmony import */ var _joda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../joda */ "./workspaces/jodastyle/src/joda.ts");
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};




function await_property(object, property, wait = 10) {
  return __async(this, null, function* () {
    if (typeof property === "string") {
      property = property.split(".");
    }
    let value = void 0;
    let index = 0;
    while (value === void 0) {
      index++;
      let curObject = object;
      for (let i = 0; i < property.length; i++) {
        if (curObject === void 0) {
          break;
        }
        curObject = curObject[property[i]];
      }
      value = curObject;
      if (value === void 0)
        yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_sleep)(wait);
      if (index > 1e3) {
        index = 0;
        console.warn("Still waiting for property: ", property, "in object", object);
      }
    }
    return value;
  });
}
function wrapElement(element, wrapper) {
  var _a;
  (_a = element.parentNode) == null ? void 0 : _a.insertBefore(wrapper, element);
  wrapper.appendChild(element);
}
function registerJodaRenderer(name, renderer, config) {
  if (window["jodastyle"] === void 0) {
    window["jodastyle"] = {};
  }
  if (window["jodastyle"]["renderer"] === void 0) {
    window["jodastyle"]["renderer"] = {};
  }
  window["jodastyle"]["renderer"][name] = { renderer, config };
}
function jodaRenderer(name, config) {
  return function(classOrDescriptor) {
    registerJodaRenderer(name, classOrDescriptor, config);
  };
}
function splitChildrenBySelector(element, splitBySelctor) {
  let ret = [];
  Array.from(element.children).forEach((child) => {
    if (child.matches(splitBySelctor)) {
      ret.push(document.createDocumentFragment());
    }
    if (ret.length > 0) {
      ret[ret.length - 1].append(child);
    }
  });
  return ret;
}
function getCleanVariableValue(styleValue) {
  return styleValue.trim().replace(/^["']/g, "").replace(/["']$/, "").trim();
}
function parseConfigString(input) {
  if (input == null) {
    return {};
  }
  const obj = {};
  const lines = input.trim().split(";");
  for (let line of lines) {
    const parts = line.trim().split(":");
    if (parts.length == 2) {
      obj[parts[0].trim()] = parts[1].trim();
    }
  }
  return obj;
}
function copyDataChildAttributes(source, target) {
  Array.from(source.attributes).forEach((attr) => {
    if (attr.name.startsWith("data-child-")) {
      if (attr.name === "data-child-class") {
        target.classList.add(...attr.value.split(" ").filter((value) => value !== ""));
        return;
      }
      target.setAttribute(attr.name.substring(11), attr.value);
    }
  });
}
let slotIndex = 0;
function getTemplateFilledWithContent(templateSelector, content, origElement) {
  return __async(this, null, function* () {
    let templateHtml = _joda__WEBPACK_IMPORTED_MODULE_3__.Joda.getRegisteredTemplate(templateSelector);
    if (templateHtml === null) {
      let template2 = document.querySelector(templateSelector);
      if (template2 === null) {
        throw new _JodaElementException__WEBPACK_IMPORTED_MODULE_1__.JodaElementException("Template not found: " + templateSelector);
      }
      templateHtml = template2.innerHTML;
    }
    let layout = {};
    let props = getComputedStyle(origElement);
    templateHtml = (0,_QTemplate__WEBPACK_IMPORTED_MODULE_2__.template_parse)(templateHtml, {
      layout: new Proxy({}, {
        get: function(target, name) {
          let val = props.getPropertyValue("--layout-" + name.toString());
          if (val === "true")
            return true;
          if (val === "false")
            return false;
          return val;
        }
      })
    }, content);
    let clone = document.createRange().createContextualFragment(templateHtml);
    let done = [];
    clone.querySelectorAll("slot[data-select][data-copy]").forEach((slot2) => {
      if (done.includes(slot2)) {
        return;
      }
      done.push(slot2);
      slot2.setAttribute("_slotIndex", (++slotIndex).toString());
      let select = slot2.getAttribute("data-select");
      let selected;
      if (slot2.getAttribute("data-limit") === "1") {
        selected = Array.from([content.querySelector(select)]).map((element) => element.cloneNode(true));
      } else {
        selected = Array.from(content.querySelectorAll(select)).map((element) => element.cloneNode(true));
      }
      selected.forEach((element) => {
        copyDataChildAttributes(slot2, element);
      });
      if (selected.length === 0) {
        console.warn("No element found for selector: " + select + " in template: " + templateSelector + " for slot: ", slot2);
        return;
      }
      if (slot2.hasAttribute("data-replace") && selected) {
        slot2.replaceWith(...selected);
      } else if (selected) {
        slot2.append(...selected);
      }
    });
    clone.querySelectorAll("slot[data-select]").forEach((slot2) => {
      if (done.includes(slot2)) {
        return;
      }
      done.push(slot2);
      slot2.setAttribute("_slotIndex", (++slotIndex).toString());
      let select = slot2.getAttribute("data-select");
      let selected;
      if (slot2.getAttribute("data-limit") === "1") {
        selected = Array.from([content.querySelector(select)]);
      } else {
        selected = Array.from(content.querySelectorAll(select));
      }
      if (selected.length === 0) {
        console.warn("No element found for selector: " + select + " in template: " + templateSelector + " for slot: ", slot2);
        return;
      }
      selected.forEach((element) => {
        copyDataChildAttributes(slot2, element);
      });
      if (slot2.hasAttribute("data-replace") && selected) {
        slot2.replaceWith(...selected);
      } else if (selected) {
        slot2.append(...selected);
      }
    });
    let slot = clone.querySelector("slot:not([data-select])");
    if (slot !== null && slot.hasAttribute("data-class")) {
      if (done.includes(slot)) {
        return;
      }
      done.push(slot);
      slot.setAttribute("_slotIndex", (++slotIndex).toString());
      Array.from(content.children).forEach((element) => {
        element.classList.add(...slot.getAttribute("data-class").split(" ").filter((value) => value !== ""));
      });
    }
    if (slot !== null && slot.hasAttribute("data-replace")) {
      slot.replaceWith(...Array.from(content.children));
    } else if (slot !== null) {
      slot.append(...Array.from(content.children));
    } else {
      content.remove();
    }
    return clone;
  });
}


/***/ }),

/***/ "./workspaces/jodastyle/src/helper/ka-quick-template.ts":
/*!**************************************************************!*\
  !*** ./workspaces/jodastyle/src/helper/ka-quick-template.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   createElementTree: () => (/* binding */ createElementTree),
/* harmony export */   parseAttributeStr: () => (/* binding */ parseAttributeStr),
/* harmony export */   parseVariableAndStyleStr: () => (/* binding */ parseVariableAndStyleStr),
/* harmony export */   parseVariableStr: () => (/* binding */ parseVariableStr)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");

function parseVariableAndStyleStr(varString) {
  let attrs = { "$": {}, "@": {} };
  let regex = new RegExp(`([@$])[^@^$]+`, "gi");
  varString.replace(regex, (match, type) => {
    match = match.substring(1);
    if (match.indexOf("=") === -1 && type === "@") {
      if (typeof attrs[type].class === "undefined")
        attrs[type].class = "";
      attrs[type].class += " " + match;
      attrs[type].class = attrs[type].class.trim();
    } else {
      let res = match.split("=");
      attrs[type][res.shift()] = res.join("=").trim();
    }
    return "";
  });
  return attrs;
}
function parseVariableStr(varString, delimiter = "@") {
  let attrs = {};
  let regex = new RegExp(`\\${delimiter}[^${delimiter}]+`, "gi");
  varString.replace(regex, (match) => {
    match = match.substring(1);
    if (match.indexOf("=") === -1) {
      if (typeof attrs.class === "undefined")
        attrs.class = "";
      attrs.class += " " + match;
      attrs.class = attrs.class.trim();
    } else {
      let res = match.split("=");
      attrs[res.shift()] = res.join("=").trim();
    }
    return "";
  });
  return attrs;
}
function parseAttributeStr(attrString) {
  return parseVariableStr(attrString, "@");
}
function createElement(definition) {
  let defRest = definition.trim();
  let tag = "div";
  defRest = defRest.replace(/^[a-z0-9_\:\-]+/ig, (match) => {
    tag = match;
    return "";
  });
  let attrs = parseAttributeStr(defRest);
  let element = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)(tag, attrs);
  return element;
}
function createElementTree(def) {
  let start = null;
  let leaf = null;
  let splitted = def.split(">");
  while (splitted.length > 0) {
    let cur = splitted.shift();
    let refName = null;
    cur = cur.replace(/§([a-z0-9_\-]+)/, (a, name) => {
      refName = name;
      return "";
    });
    if (cur.trim().startsWith("|")) {
      let el2 = document.createElement("div");
      if (splitted.length > 0)
        cur += ">" + splitted.join(">");
      el2.innerHTML = cur.trim().substring(1);
      el2.childNodes.forEach((e) => leaf.append(e.cloneNode(true)));
      el2.remove();
      break;
    }
    let el = createElement(cur);
    if (start === null) {
      start = leaf = el;
    } else {
      if (leaf instanceof HTMLTemplateElement) {
        leaf.content.appendChild(el);
      } else {
        leaf.appendChild(el);
      }
      leaf = el;
    }
  }
  return { start, leaf };
}


/***/ }),

/***/ "./workspaces/jodastyle/src/helper/logger.ts":
/*!***************************************************!*\
  !*** ./workspaces/jodastyle/src/helper/logger.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Logger: () => (/* binding */ Logger)
/* harmony export */ });
class Logger {
  constructor(name) {
    this.name = name;
  }
  log(...args) {
    console.log("[" + this.name + "]", ...args);
  }
  warn(...args) {
    console.warn("[" + this.name + "]", ...args);
  }
}


/***/ }),

/***/ "./workspaces/jodastyle/src/index.ts":
/*!*******************************************!*\
  !*** ./workspaces/jodastyle/src/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultLayout: () => (/* reexport safe */ _types_DefaultLayout__WEBPACK_IMPORTED_MODULE_6__.DefaultLayout),
/* harmony export */   Joda: () => (/* reexport safe */ _joda__WEBPACK_IMPORTED_MODULE_11__.Joda),
/* harmony export */   JodaContentElement: () => (/* reexport safe */ _component_joda_content_element__WEBPACK_IMPORTED_MODULE_1__.JodaContentElement),
/* harmony export */   JodaDescriptionManager: () => (/* reexport safe */ _helper_JodaDescriptionManager__WEBPACK_IMPORTED_MODULE_7__.JodaDescriptionManager),
/* harmony export */   Jodasplit: () => (/* reexport safe */ _processor_jodasplit__WEBPACK_IMPORTED_MODULE_9__.Jodasplit),
/* harmony export */   Logger: () => (/* reexport safe */ _helper_logger__WEBPACK_IMPORTED_MODULE_8__.Logger),
/* harmony export */   QTemplate: () => (/* reexport safe */ _helper_QTemplate__WEBPACK_IMPORTED_MODULE_5__.QTemplate),
/* harmony export */   __JodaDescriptionManager: () => (/* reexport safe */ _helper_JodaDescriptionManager__WEBPACK_IMPORTED_MODULE_7__.__JodaDescriptionManager),
/* harmony export */   await_property: () => (/* reexport safe */ _helper_functions__WEBPACK_IMPORTED_MODULE_4__.await_property),
/* harmony export */   getCleanVariableValue: () => (/* reexport safe */ _helper_functions__WEBPACK_IMPORTED_MODULE_4__.getCleanVariableValue),
/* harmony export */   getTemplateFilledWithContent: () => (/* reexport safe */ _helper_functions__WEBPACK_IMPORTED_MODULE_4__.getTemplateFilledWithContent),
/* harmony export */   jodaRenderer: () => (/* reexport safe */ _helper_functions__WEBPACK_IMPORTED_MODULE_4__.jodaRenderer),
/* harmony export */   jodaSiteConfig: () => (/* reexport safe */ _helper_JodaSiteConfig__WEBPACK_IMPORTED_MODULE_10__.jodaSiteConfig),
/* harmony export */   parseConfigString: () => (/* reexport safe */ _helper_functions__WEBPACK_IMPORTED_MODULE_4__.parseConfigString),
/* harmony export */   registerJodaRenderer: () => (/* reexport safe */ _helper_functions__WEBPACK_IMPORTED_MODULE_4__.registerJodaRenderer),
/* harmony export */   splitChildrenBySelector: () => (/* reexport safe */ _helper_functions__WEBPACK_IMPORTED_MODULE_4__.splitChildrenBySelector),
/* harmony export */   template_parse: () => (/* reexport safe */ _helper_QTemplate__WEBPACK_IMPORTED_MODULE_5__.template_parse),
/* harmony export */   wrapElement: () => (/* reexport safe */ _helper_functions__WEBPACK_IMPORTED_MODULE_4__.wrapElement)
/* harmony export */ });
/* harmony import */ var _helper_JodaRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/JodaRenderer */ "./workspaces/jodastyle/src/helper/JodaRenderer.ts");
/* harmony import */ var _helper_JodaRenderer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_helper_JodaRenderer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _helper_JodaRenderer__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _helper_JodaRenderer__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _component_joda_content_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/joda-content-element */ "./workspaces/jodastyle/src/component/joda-content-element.ts");
/* harmony import */ var _component_joda_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/joda-fetch */ "./workspaces/jodastyle/src/component/joda-fetch.ts");
/* harmony import */ var _component_joda_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/joda-split */ "./workspaces/jodastyle/src/component/joda-split.ts");
/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper/functions */ "./workspaces/jodastyle/src/helper/functions.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _helper_JodaRenderer__WEBPACK_IMPORTED_MODULE_0__) if(["default","JodaContentElement","await_property","getCleanVariableValue","getTemplateFilledWithContent","jodaRenderer","parseConfigString","registerJodaRenderer","splitChildrenBySelector","wrapElement"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _helper_JodaRenderer__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _helper_QTemplate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helper/QTemplate */ "./workspaces/jodastyle/src/helper/QTemplate.ts");
/* harmony import */ var _types_DefaultLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types/DefaultLayout */ "./workspaces/jodastyle/src/types/DefaultLayout.ts");
/* harmony import */ var _helper_JodaDescriptionManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helper/JodaDescriptionManager */ "./workspaces/jodastyle/src/helper/JodaDescriptionManager.ts");
/* harmony import */ var _helper_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helper/logger */ "./workspaces/jodastyle/src/helper/logger.ts");
/* harmony import */ var _processor_jodasplit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./processor/jodasplit */ "./workspaces/jodastyle/src/processor/jodasplit.ts");
/* harmony import */ var _helper_JodaSiteConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helper/JodaSiteConfig */ "./workspaces/jodastyle/src/helper/JodaSiteConfig.ts");
/* harmony import */ var _joda__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./joda */ "./workspaces/jodastyle/src/joda.ts");















/***/ }),

/***/ "./workspaces/jodastyle/src/joda.ts":
/*!******************************************!*\
  !*** ./workspaces/jodastyle/src/joda.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Joda: () => (/* binding */ Joda)
/* harmony export */ });
const Joda = new class {
  /**
   * Register a template instead of adding <template id="...">...</template> to the DOM
   *
   * @param id
   * @param data
   */
  registerTemplate(id, data) {
    if (!window["jodastyle"])
      window["jodastyle"] = {};
    if (!window["jodastyle"]["templates"])
      window["jodastyle"]["templates"] = {};
    window["jodastyle"]["templates"][id] = data;
  }
  getRegisteredTemplate(id) {
    var _a, _b, _c;
    if (id.startsWith("#"))
      id = id.substring(1);
    return (_c = (_b = (_a = window["jodastyle"]) == null ? void 0 : _a["templates"]) == null ? void 0 : _b[id]) != null ? _c : null;
  }
}();


/***/ }),

/***/ "./workspaces/jodastyle/src/processor/LayoutProcessor.ts":
/*!***************************************************************!*\
  !*** ./workspaces/jodastyle/src/processor/LayoutProcessor.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutProcessor: () => (/* binding */ LayoutProcessor)
/* harmony export */ });
/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/functions */ "./workspaces/jodastyle/src/helper/functions.ts");

const commands = ["use", "wrap"];
class LayoutProcessor {
  constructor(logger) {
    this.logger = logger;
  }
  processNode(node) {
    if (!node.hasAttribute("layout"))
      return node;
    let layout = (0,_helper_functions__WEBPACK_IMPORTED_MODULE_0__.parseConfigString)(node.getAttribute("layout"));
    for (let key in layout) {
      if (commands.includes(key)) {
        node.style.setProperty("--joda-" + key, layout[key]);
        continue;
      }
      node.style.setProperty("--layout-" + key, layout[key]);
    }
    return node;
  }
}


/***/ }),

/***/ "./workspaces/jodastyle/src/processor/jodaresponsive.ts":
/*!**************************************************************!*\
  !*** ./workspaces/jodastyle/src/processor/jodaresponsive.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jodaresponsive: () => (/* binding */ Jodaresponsive),
/* harmony export */   breakpoints: () => (/* binding */ breakpoints),
/* harmony export */   getCurrentBreakpoint: () => (/* binding */ getCurrentBreakpoint),
/* harmony export */   parseClassStr: () => (/* binding */ parseClassStr)
/* harmony export */ });
const breakpoints = {
  "xsm": 0,
  "sm": 576,
  "md": 768,
  "lg": 992,
  "xl": 1200,
  "xxl": 1400
};
function getCurrentBreakpoint() {
  let ret = "";
  Object.keys(breakpoints).forEach((key) => {
    if (window.innerWidth >= breakpoints[key]) {
      ret = key;
    }
  });
  return ret;
}
class ResponsiveClass {
  constructor() {
    this.always = [];
    this.default = null;
    this.xsm = null;
    this.xs = null;
    this.sm = null;
    this.md = null;
    this.lg = null;
    this.xl = null;
    this.xxl = null;
    this.breakpoints = ["xsm", "xs", "sm", "md", "lg", "xl", "xxl"];
  }
  getClassesForBreakpoint(breakpoint = null) {
    if (breakpoint === null) {
      breakpoint = getCurrentBreakpoint();
    }
    let ret = [];
    ret.push(...this.always);
    let isDefault = true;
    for (let bp of this.breakpoints) {
      if (this[bp] !== null) {
        ret = this[bp];
        isDefault = false;
      }
      if (bp === breakpoint) {
        break;
      }
    }
    if (isDefault && this.default !== null) {
      ret.push(...this.default);
    }
    ret = ret.filter((item) => item !== "");
    return ret;
  }
}
function parseClassStr(input) {
  let ret = new ResponsiveClass();
  let pointer = "always";
  input.split(" ").map((item) => {
    let matches = item.match(/\:([a-zA-Z]*)\:/);
    if (matches === null) {
      ret[pointer].push(item);
      return;
    }
    pointer = matches[1];
    if (pointer === "") {
      pointer = "default";
    }
    if (ret[pointer] === null) {
      ret[pointer] = [];
    }
  });
  return ret;
}
class Jodaresponsive {
  constructor(logger) {
    this.logger = logger;
  }
  processNode(node) {
    var _a;
    const origAttr = "data-class-orig";
    if (!node.hasAttribute(origAttr)) {
      let classes2 = (_a = node.getAttribute("class")) != null ? _a : "";
      if (classes2.indexOf(":") === -1)
        return;
      node.setAttribute(origAttr, classes2);
    }
    let classes = node.getAttribute(origAttr);
    let responsiveClasses = parseClassStr(classes);
    node.setAttribute("class", "");
    node.classList.add(...responsiveClasses.always.filter((item) => item !== ""));
    node.classList.add(...responsiveClasses.getClassesForBreakpoint());
  }
  process(node) {
    Array.from([node, ...Array.from(node.querySelectorAll("*"))]).forEach((child) => {
      this.processNode(child);
    });
  }
}


/***/ }),

/***/ "./workspaces/jodastyle/src/processor/jodashorts.ts":
/*!**********************************************************!*\
  !*** ./workspaces/jodastyle/src/processor/jodashorts.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jodashorts: () => (/* binding */ Jodashorts)
/* harmony export */ });
class Jodashorts {
  constructor(logger) {
    this.logger = logger;
  }
  process(source) {
    source = source.replace(/\[([a-z0-9\-)]+)(.*?)]/g, (match, name, attrStr) => {
      let attrs = {
        "class": []
      };
      attrStr = attrStr.replace(/”/g, '"').replace(/“/g, '"').replace(/‘/g, "'").replace(/’/g, "'");
      attrStr = attrStr.replace(/([a-z0-9\-\.]+)=(["'])(.*?)\2/mig, (match2, name2, quote, value) => {
        if (name2 === "class") {
          attrs["class"].push(...value.split(" "));
          return "";
        }
        attrs[name2] = value;
        return "";
      });
      attrStr.split(" ").forEach((attr) => {
        attr = attr.trim();
        if (attr === "")
          return;
        if (attr.startsWith(".")) {
          attrs["class"].push(attr.substr(1));
          return;
        }
        attrs[attr] = "";
      });
      let attrstr = "";
      for (let attr in attrs) {
        if (attr === "class") {
          attrstr += ` class="${attrs[attr].join(" ")}"`;
        } else {
          attrstr += ` ${attr}="${attrs[attr]}"`;
        }
      }
      let ret = `<${name}${attrstr}></${name}>`;
      return ret;
    });
    return source;
  }
}


/***/ }),

/***/ "./workspaces/jodastyle/src/processor/jodasplit.ts":
/*!*********************************************************!*\
  !*** ./workspaces/jodastyle/src/processor/jodasplit.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jodasplit: () => (/* binding */ Jodasplit)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _target, _parents, _currentParent, _currentContent, _currentChildren;

function copySectionAttributes(source, target) {
  source.getAttributeNames().forEach((name) => {
    if (!name.startsWith("data-section-")) {
      return;
    }
    let value = source.getAttribute(name);
    name = name.substr(13);
    if (name === "class") {
      target.classList.add(...value.split(" ").filter((c) => c.length > 0));
      return;
    }
    if (name === "style") {
      target.setAttribute("style", (target.getAttribute("style") || "") + value);
      return;
    }
    target.setAttribute(name, value);
  });
}
class Jodasplit {
  constructor(logger) {
    this.logger = logger;
    __privateAdd(this, _target, document.createDocumentFragment());
    __privateAdd(this, _parents, [__privateGet(this, _target)]);
    __privateAdd(this, _currentParent, (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("section", { class: "section-h1pre" }));
    __privateAdd(this, _currentContent, (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("div", { class: "content" }, [], __privateGet(this, _currentParent)));
    __privateAdd(this, _currentChildren, (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("div", { class: "children" }, [], __privateGet(this, _currentParent)));
  }
  findParentElement(layer) {
    while (__privateGet(this, _parents).length > layer) {
      __privateGet(this, _parents).pop();
    }
    while (__privateGet(this, _parents)[__privateGet(this, _parents).length - 1] === void 0) {
      __privateGet(this, _parents).pop();
    }
    return __privateGet(this, _parents)[__privateGet(this, _parents).length - 1];
  }
  createNewElement(tagName, layer, tag) {
    tagName = tagName.toLowerCase();
    let curParent = this.findParentElement(layer);
    let curParentChildren = curParent.childNodes[1];
    __privateSet(this, _currentParent, (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)(tag, { class: "section-" + tagName }));
    while (__privateGet(this, _parents).length < layer) {
      __privateGet(this, _parents).push(void 0);
    }
    __privateGet(this, _parents).push(__privateGet(this, _currentParent));
    if (curParent === __privateGet(this, _target)) {
      curParent.appendChild(__privateGet(this, _currentParent));
    } else {
      curParentChildren.append(__privateGet(this, _currentParent));
    }
    __privateSet(this, _currentContent, (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("div", { class: "content" }, [], __privateGet(this, _currentParent)));
    __privateSet(this, _currentChildren, (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("div", { class: "children" }, [], __privateGet(this, _currentParent)));
    return __privateGet(this, _currentParent);
  }
  process(source) {
    let lastLayer = 1;
    __privateGet(this, _target).append(__privateGet(this, _currentParent));
    Array.from(source.children).forEach((child) => {
      if (child instanceof HTMLElement && child.matches("footer")) {
        __privateGet(this, _target).appendChild(child);
        return;
      }
      if (child instanceof HTMLElement && child.matches("h1, h2, h3, h4, h5, h6, h7, h8, h9, hr:not(.hr), .section-h2, .section-h3, .section-h4")) {
        let layer = 1;
        let tag = "div";
        if (child.matches("h1,h2,.section-h2")) {
          layer = lastLayer = 1;
          tag = "section";
        } else if (child.matches("h3, h4, h5, h6, h7, h8, h9, .section-h3, .section-h4")) {
          if (child.matches(".section-h3")) {
            layer = lastLayer = 6;
          } else if (child.matches(".section-h4")) {
            layer = lastLayer = 8;
          } else {
            layer = lastLayer = parseInt(child.tagName.substr(1)) * 2;
          }
          tag = "div";
        } else if (child.matches("hr")) {
          layer = lastLayer + 1;
          tag = "div";
        }
        let e = this.createNewElement(child.tagName.toLowerCase(), layer, tag);
        e.setAttribute("layout", child.getAttribute("layout") || "");
        child.removeAttribute("layout");
        copySectionAttributes(child, e);
        if (child.tagName === "HR" && !child.classList.contains("hr")) {
          e.setAttribute("style", child.getAttribute("style") || "");
          child.removeAttribute("style");
          e.classList.add(...child.classList);
          child.setAttribute("orig-class", child.getAttribute("class") || "");
          child.setAttribute("class", "");
        }
      }
      if (child.tagName === "HR" && !child.classList.contains("hr")) {
        child.setAttribute("orig-pre-split-class", child.getAttribute("class"));
        child.setAttribute("class", "d-none");
      }
      __privateGet(this, _currentContent).appendChild(child);
    });
    Array.from(__privateGet(this, _target).querySelectorAll(".children")).forEach((child) => {
      if (child.children.length === 0) {
        child.remove();
      }
    });
    Array.from(__privateGet(this, _target).querySelectorAll(".content")).forEach((child) => {
      if (child.children.length === 0) {
        child.remove();
      }
    });
    return __privateGet(this, _target);
  }
}
_target = new WeakMap();
_parents = new WeakMap();
_currentParent = new WeakMap();
_currentContent = new WeakMap();
_currentChildren = new WeakMap();


/***/ }),

/***/ "./workspaces/jodastyle/src/processor/jodastyle-commands.ts":
/*!******************************************************************!*\
  !*** ./workspaces/jodastyle/src/processor/jodastyle-commands.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jodaStyleCommands: () => (/* binding */ jodaStyleCommands)
/* harmony export */ });
/* harmony import */ var _helper_ka_quick_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/ka-quick-template */ "./workspaces/jodastyle/src/helper/ka-quick-template.ts");
/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/functions */ "./workspaces/jodastyle/src/helper/functions.ts");
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};



let jodaStyleCommands = {};
jodaStyleCommands["--joda-replace-by"] = (value, target, element, logger) => {
  let parent = element.parentElement;
  let ret = (0,_helper_ka_quick_template__WEBPACK_IMPORTED_MODULE_0__.createElementTree)(value);
  parent.replaceChild(ret.start, element);
  Array.from(element.children).forEach((child) => {
    ret.leaf.append(child);
  });
  element.remove();
  return ret.leaf;
};
jodaStyleCommands["--joda-wrap"] = (value, target, element, logger) => __async(void 0, null, function* () {
  let parent = element.parentElement;
  if (value.startsWith("#")) {
    console.log("Wrap element", element, "with template", value);
    let placeholder = document.createElement("div");
    parent.insertBefore(placeholder, element);
    placeholder.append(element);
    let newElement = yield (0,_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getTemplateFilledWithContent)(value, placeholder, element);
    placeholder.replaceWith(newElement);
    return element;
  } else {
    let ret = (0,_helper_ka_quick_template__WEBPACK_IMPORTED_MODULE_0__.createElementTree)(value);
    parent.replaceChild(ret.start, element);
    ret.leaf.append(element);
    return element;
  }
});
jodaStyleCommands["--joda-container"] = (value, target, element, logger) => {
  let ret = (0,_helper_ka_quick_template__WEBPACK_IMPORTED_MODULE_0__.createElementTree)(value);
  Array.from(element.children).forEach((child) => {
    ret.leaf.append(child);
  });
  element.append(ret.start);
  return element;
};
jodaStyleCommands["--joda-unwrap"] = (value, target, element, logger) => {
  let parent = element.parentElement;
  let grandParent = parent.parentElement;
  grandParent.insertBefore(element, parent);
  if (parent.children.length === 0) {
    parent.remove();
  }
  return element;
};
jodaStyleCommands["--joda-group"] = (value, target, element, logger) => {
  const groupByKey = "jodaIsGroupedBy";
  if (element[groupByKey] !== void 0) {
    return element;
  }
  let siblings = [];
  let curSibling = element.nextElementSibling;
  while (curSibling && (0,_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getCleanVariableValue)(getComputedStyle(curSibling).getPropertyValue("--joda-group")) === value) {
    siblings.push(curSibling);
    curSibling[groupByKey] = true;
    curSibling = curSibling.nextElementSibling;
  }
  let parent = element.parentElement;
  let ret = (0,_helper_ka_quick_template__WEBPACK_IMPORTED_MODULE_0__.createElementTree)(value);
  element.parentElement.insertBefore(ret.start, element);
  ret.leaf.append(element);
  siblings.forEach((sibling) => {
    ret.leaf.append(sibling);
  });
  return element;
};
jodaStyleCommands["--joda-class"] = (value, target, element, logger) => {
  let ret = (0,_helper_ka_quick_template__WEBPACK_IMPORTED_MODULE_0__.createElementTree)(value);
  element.setAttribute("class", element.getAttribute("class") + " " + value);
  return element;
};
jodaStyleCommands["--joda-use"] = (value, target, element, logger) => __async(void 0, null, function* () {
  if (value.startsWith("#")) {
    let placeholder = document.createElement("div");
    Array.from(element.children).forEach((child) => {
      placeholder.append(child);
    });
    let newElement = yield (0,_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getTemplateFilledWithContent)(value, placeholder, element);
    let firstElement = newElement.firstElementChild;
    firstElement["joda-style-processed"] = true;
    let debugElement = element.outerHTML.split("\n")[0];
    firstElement.setAttribute("_orig_elem", debugElement);
    element.getAttributeNames().forEach((attrName) => {
      if (attrName === "class") {
        firstElement.setAttribute(attrName, element.getAttribute(attrName) + " " + firstElement.getAttribute(attrName));
        return;
      }
      if (attrName === "style") {
        firstElement.setAttribute(attrName, element.getAttribute(attrName) + " " + firstElement.getAttribute(attrName));
        return;
      }
      if (attrName.startsWith("layout")) {
        firstElement.setAttribute("layout-orig", element.getAttribute(attrName));
        return;
      }
      firstElement.setAttribute(attrName, element.getAttribute(attrName));
    });
    element.parentElement.insertBefore(newElement, element);
    element.parentElement.removeChild(element);
    return firstElement;
  }
  let matches = value.match(/([a-z0-9\_-]+)\s*\((.*?)\)/);
  if (!matches) {
    console.error("Invalid --joda-use command: ", value, "in element", element, " should be in format: commandName(arg1: value1, arg2: value2, ...)");
    throw "Invalid --joda-use command: " + value + " should be in format: commandName(arg1: value1, arg2: value2, ...)";
  }
  logger.log("Using renderer: ", matches[1], "with args: ", matches[2], "on element", element);
  let commandName = matches[1];
  let args = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_2__.ka_eval)("{" + matches[2] + "}", {}, target, {});
  let command = yield (0,_helper_functions__WEBPACK_IMPORTED_MODULE_1__.await_property)(window, ["jodastyle", "renderer", commandName]);
  let config = new command.config();
  let style = getComputedStyle(element);
  Object.keys(config).forEach((key) => {
    let val = style.getPropertyValue("--layout-" + key.replace(/\_/g, "-"));
    if (val !== "") {
      config[key] = val.replace(/^["']/g, "").replace(/["']$/, "").trim();
    }
  });
  Object.assign(config, args);
  return yield new command.renderer().render(element, config);
});


/***/ }),

/***/ "./workspaces/jodastyle/src/processor/jodastyle.ts":
/*!*********************************************************!*\
  !*** ./workspaces/jodastyle/src/processor/jodastyle.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jodastyle: () => (/* binding */ Jodastyle)
/* harmony export */ });
/* harmony import */ var _jodastyle_commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jodastyle-commands */ "./workspaces/jodastyle/src/processor/jodastyle-commands.ts");
/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/functions */ "./workspaces/jodastyle/src/helper/functions.ts");
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");
/* harmony import */ var _helper_JodaElementException__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/JodaElementException */ "./workspaces/jodastyle/src/helper/JodaElementException.ts");
/* harmony import */ var _helper_JodaErrorElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/JodaErrorElement */ "./workspaces/jodastyle/src/helper/JodaErrorElement.ts");
/* harmony import */ var _LayoutProcessor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LayoutProcessor */ "./workspaces/jodastyle/src/processor/LayoutProcessor.ts");
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};






class Jodastyle {
  constructor(logger) {
    this.logger = logger;
  }
  process(node) {
    return __async(this, null, function* () {
      for (let child of Array.from(node.getElementsByTagName("joda-split"))) {
        while (child["ready"] !== true) {
          yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_2__.ka_sleep)(5);
        }
      }
      let layoutProcessor = new _LayoutProcessor__WEBPACK_IMPORTED_MODULE_5__.LayoutProcessor(this.logger);
      node.querySelectorAll("[layout]").forEach((node2) => {
        layoutProcessor.processNode(node2);
      });
      for (let child of [node, ...Array.from(node.querySelectorAll("*"))]) {
        if (child["joda-style-processed"] === true) {
          continue;
        }
        child["joda-style-processed"] = true;
        let style = getComputedStyle(child);
        let keys = Object.keys(_jodastyle_commands__WEBPACK_IMPORTED_MODULE_0__.jodaStyleCommands);
        for (let key of Array.from(keys)) {
          let styleValue = style.getPropertyValue(key);
          if (styleValue === "") {
            continue;
          }
          if (styleValue === getComputedStyle(child.parentElement).getPropertyValue(key)) {
            continue;
          }
          styleValue = (0,_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getCleanVariableValue)(styleValue);
          let command = _jodastyle_commands__WEBPACK_IMPORTED_MODULE_0__.jodaStyleCommands[key];
          try {
            child = yield command(styleValue, node, child, this.logger);
          } catch (e) {
            if (e instanceof _helper_JodaElementException__WEBPACK_IMPORTED_MODULE_3__.JodaElementException) {
              e.triggerCommand = key + ": " + styleValue;
              this.logger.warn(e.message, e.element);
              child.replaceWith(new _helper_JodaErrorElement__WEBPACK_IMPORTED_MODULE_4__.JodaErrorElement(e.message + " (trigger by: " + e.triggerCommand + ")"));
            } else {
              this.logger.warn("Unhandled exception", e, "on element", child, "triggered by", key + ": " + styleValue);
              throw e;
            }
          }
        }
        yield this.process(child);
      }
    });
  }
}


/***/ }),

/***/ "./workspaces/jodastyle/src/processor/jodavisualize.ts":
/*!*************************************************************!*\
  !*** ./workspaces/jodastyle/src/processor/jodavisualize.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jodavisualize: () => (/* binding */ Jodavisualize)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");

class Jodavisualize {
  process(element) {
    [element, ...Array.from(element.querySelectorAll("*"))].forEach((e) => {
      e.insertBefore((0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("div", { class: "joda-visualize" }, `<${e.tagName.toLowerCase()}  class="${Array.from(e.classList).join(", ")}">`), e.firstElementChild);
    });
  }
}


/***/ }),

/***/ "./workspaces/jodastyle/src/types/DefaultLayout.ts":
/*!*********************************************************!*\
  !*** ./workspaces/jodastyle/src/types/DefaultLayout.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultLayout: () => (/* binding */ DefaultLayout)
/* harmony export */ });
class DefaultLayout {
  constructor() {
    this.container = "container";
    this.break1 = "xl";
  }
}


/***/ }),

/***/ "./workspaces/kasi-embed/index.ts":
/*!****************************************!*\
  !*** ./workspaces/kasi-embed/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Debouncer: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.Debouncer),
/* harmony export */   KaCustomElement: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.KaCustomElement),
/* harmony export */   KaCustomFragment: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.KaCustomFragment),
/* harmony export */   KaCustomModal: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.KaCustomModal),
/* harmony export */   KaCustomWrapper: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.KaCustomWrapper),
/* harmony export */   KaHtmlElement: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.KaHtmlElement),
/* harmony export */   KaModal: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.KaModal),
/* harmony export */   KaTemplate: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.KaTemplate),
/* harmony export */   createScopeObject: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.createScopeObject),
/* harmony export */   customElement: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.customElement),
/* harmony export */   isUndefined: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.isUndefined),
/* harmony export */   isset: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.isset),
/* harmony export */   ka_await_element: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.ka_await_element),
/* harmony export */   ka_create_element: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.ka_create_element),
/* harmony export */   ka_debounce: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.ka_debounce),
/* harmony export */   ka_dom_ready: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.ka_dom_ready),
/* harmony export */   ka_eval: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.ka_eval),
/* harmony export */   ka_html: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.ka_html),
/* harmony export */   ka_query_selector: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.ka_query_selector),
/* harmony export */   ka_session_storage: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.ka_session_storage),
/* harmony export */   ka_set_options: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.ka_set_options),
/* harmony export */   ka_sleep: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.ka_sleep),
/* harmony export */   ka_templatify: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.ka_templatify),
/* harmony export */   random_string: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.random_string),
/* harmony export */   template: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.template)
/* harmony export */ });
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ "./workspaces/kasi-embed/src/index.ts");



/***/ }),

/***/ "./workspaces/kasi-embed/src/ce/html.ts":
/*!**********************************************!*\
  !*** ./workspaces/kasi-embed/src/ce/html.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_html: () => (/* binding */ ka_html)
/* harmony export */ });
function ka_html(htmlContent) {
  if (htmlContent instanceof HTMLTemplateElement) {
    return htmlContent;
  }
  let e = document.createElement("template");
  e.innerHTML = htmlContent;
  return e;
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/ce/htmlFile.ts":
/*!**************************************************!*\
  !*** ./workspaces/kasi-embed/src/ce/htmlFile.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemoteTemplate: () => (/* binding */ RemoteTemplate)
/* harmony export */ });
/* harmony import */ var _loadHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadHtml */ "./workspaces/kasi-embed/src/ce/loadHtml.ts");
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

class RemoteTemplate {
  constructor(url) {
    this.url = url;
    this.tpl = null;
  }
  /**
   *
   * @return {Promise<HTMLTemplateElement>}
   */
  load() {
    return __async(this, null, function* () {
      if (this.tpl === null)
        this.tpl = yield (0,_loadHtml__WEBPACK_IMPORTED_MODULE_0__.ka_load_html)(this.url);
      return this.tpl;
    });
  }
}
function htmlUrl(url) {
  return new RemoteTemplate(url);
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/ce/loadHtml.ts":
/*!**************************************************!*\
  !*** ./workspaces/kasi-embed/src/ce/loadHtml.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_load_html: () => (/* binding */ ka_load_html)
/* harmony export */ });
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
function ka_load_html(url) {
  return __async(this, null, function* () {
    let e = document.createElement("template");
    let result = yield fetch(url);
    if (!result.ok) {
      console.error(`[loadHtml] failed to load '${url}'`);
      throw `[loadHtml] failed to load '${url}'`;
    }
    let body = yield result.text();
    e.innerHTML = body;
    return e;
  });
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/core/create-element.ts":
/*!**********************************************************!*\
  !*** ./workspaces/kasi-embed/src/core/create-element.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_create_element: () => (/* binding */ ka_create_element)
/* harmony export */ });
function ka_create_element(tagName, attributes = null, children = null, appendToElement = null) {
  let e = document.createElement(tagName);
  if (attributes === null)
    attributes = {};
  for (let attName in attributes) {
    e.setAttribute(attName, attributes[attName]);
  }
  if (children instanceof NodeList) {
    children = Array.from(children);
  }
  if (Array.isArray(children)) {
    for (let ce of children) {
      e.appendChild(ce);
    }
  }
  if (typeof children === "string") {
    e.innerText = children;
  }
  if (appendToElement !== null) {
    appendToElement.appendChild(e);
  }
  return e;
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/core/debounce.ts":
/*!****************************************************!*\
  !*** ./workspaces/kasi-embed/src/core/debounce.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_debounce: () => (/* binding */ ka_debounce)
/* harmony export */ });
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
const _debounceInterval = { i: null, time: null };
function ka_debounce(min, max = null) {
  return __async(this, null, function* () {
    if (max === null)
      max = min;
    let dbi = _debounceInterval;
    return new Promise((resolve) => {
      if (dbi.time < +new Date() - max && dbi.i !== null) {
        return resolve();
      }
      if (dbi.i !== null) {
        return;
      }
      dbi.time = +new Date();
      dbi.i = window.setTimeout(() => {
        dbi.i = null;
        return resolve();
      }, min);
    });
  });
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/core/debouncer.ts":
/*!*****************************************************!*\
  !*** ./workspaces/kasi-embed/src/core/debouncer.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Debouncer: () => (/* binding */ Debouncer)
/* harmony export */ });
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var _resolve, _interval, _time;
class Debouncer {
  constructor(min = 100, max = null) {
    this.min = min;
    this.max = max;
    __privateAdd(this, _resolve, []);
    __privateAdd(this, _interval, null);
    __privateAdd(this, _time, null);
  }
  debounce() {
    return __async(this, arguments, function* (min = this.min, max = this.max) {
      if (max === null)
        max = min;
      if (__privateGet(this, _interval) !== null) {
        window.clearInterval(__privateGet(this, _interval));
      }
      __privateSet(this, _interval, window.setInterval(() => {
        __privateGet(this, _resolve).forEach((r) => r());
        __privateSet(this, _resolve, []);
        window.clearInterval(__privateGet(this, _interval));
      }, min));
      return new Promise((resolve) => {
        __privateGet(this, _resolve).push(resolve);
      });
    });
  }
}
_resolve = new WeakMap();
_interval = new WeakMap();
_time = new WeakMap();


/***/ }),

/***/ "./workspaces/kasi-embed/src/core/dom-ready.ts":
/*!*****************************************************!*\
  !*** ./workspaces/kasi-embed/src/core/dom-ready.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_dom_ready: () => (/* binding */ ka_dom_ready)
/* harmony export */ });
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
function ka_dom_ready() {
  return __async(this, null, function* () {
    return new Promise((resolve) => {
      if (document.readyState === "complete" || document.readyState === "interactive")
        return resolve("loaded");
      document.addEventListener("DOMContentLoaded", () => resolve("DOMContentLoaded"));
    });
  });
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/core/ka-set-options.ts":
/*!**********************************************************!*\
  !*** ./workspaces/kasi-embed/src/core/ka-set-options.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_set_options: () => (/* binding */ ka_set_options)
/* harmony export */ });
function ka_set_options(element, options, value = null) {
  element.innerHTML = "";
  for (let option in options) {
    if (isNaN(option)) {
      element.appendChild(new Option(options[option], option));
    } else {
      if (typeof options[option].text !== "undefined") {
        element.appendChild(new Option(options[option].text, options[option].value));
      } else {
        element.appendChild(new Option(options[option], options[option]));
      }
    }
  }
  if (value !== null)
    element.value = value;
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/core/query-select.ts":
/*!********************************************************!*\
  !*** ./workspaces/kasi-embed/src/core/query-select.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_query_selector: () => (/* binding */ ka_query_selector)
/* harmony export */ });
function ka_query_selector(query, parent = null, exception = null) {
  if (typeof exception === "undefined" || exception === null)
    exception = `querySelector '${query}' not found`;
  if (typeof parent === "undefined" || parent === null)
    parent = document;
  let e = parent.querySelectorAll(query);
  if (e.length === 0) {
    console.warn(exception, "on parent: ", parent);
    throw exception;
  }
  return e[0];
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/core/sleep.ts":
/*!*************************************************!*\
  !*** ./workspaces/kasi-embed/src/core/sleep.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_sleep: () => (/* binding */ ka_sleep)
/* harmony export */ });
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
function ka_sleep(sleepms) {
  return __async(this, null, function* () {
    return new Promise((resolve) => {
      window.setTimeout(() => {
        return resolve();
      }, sleepms);
    });
  });
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/core/storage.ts":
/*!***************************************************!*\
  !*** ./workspaces/kasi-embed/src/core/storage.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_session_storage: () => (/* binding */ ka_session_storage)
/* harmony export */ });
function ka_session_storage(object = {}, scopeName = null) {
  if (scopeName == null) {
    scopeName = "ka_session_storage";
  }
  if (object === null) {
    sessionStorage.removeItem(scopeName);
    return;
  }
  if (sessionStorage.getItem(scopeName) == null) {
    sessionStorage.setItem(scopeName, JSON.stringify(object));
  }
  let savedObject = JSON.parse(sessionStorage.getItem(scopeName));
  for (let key in object) {
    if (typeof savedObject[key] === "undefined") {
      savedObject[key] = object[key];
    }
  }
  let proxy = new Proxy(savedObject, {
    set: function(target, property, value, receiver) {
      target[property] = value;
      sessionStorage.setItem(scopeName, JSON.stringify(target));
      return true;
    }
  });
  return proxy;
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/element/KaCustomElement.ts":
/*!**************************************************************!*\
  !*** ./workspaces/kasi-embed/src/element/KaCustomElement.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaCustomElement: () => (/* binding */ KaCustomElement)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./workspaces/kasi-embed/src/types.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./workspaces/kasi-embed/src/functions.ts");
/* harmony import */ var _tpl_templatify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tpl/templatify */ "./workspaces/kasi-embed/src/tpl/templatify.js");
/* harmony import */ var _ce_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ce/html */ "./workspaces/kasi-embed/src/ce/html.ts");
/* harmony import */ var _tpl_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tpl/template */ "./workspaces/kasi-embed/src/tpl/template.js");
/* harmony import */ var _core_create_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/create-element */ "./workspaces/kasi-embed/src/core/create-element.ts");
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};






class ShadowRootConfig {
  constructor() {
    this.mode = null;
    // Default null: No shadowRoot
    this.stylesheets = [];
  }
}
class KaCustomElement extends HTMLElement {
  constructor() {
    super(...arguments);
    this.__ka_stop_render = true;
    // Stop rendering if this element is reached
    this.shadowRootConfig = new ShadowRootConfig();
    // Activate shadowRoot
    this.html = "Undefined Template";
    this.scope = (0,_types__WEBPACK_IMPORTED_MODULE_0__.createScopeObject)();
    this.tplPrototype = null;
    this.wrapper = null;
  }
  init(scope) {
    this.scope.init(scope);
    return this.scope;
  }
  wrap(fragment) {
    this.wrapper = fragment;
  }
  setParentScope(scope) {
    this.scope.$parent = scope;
  }
  connectedCallback() {
    return __async(this, null, function* () {
      if (!this.scope.isInitialized())
        this.init({});
      if ((0,_functions__WEBPACK_IMPORTED_MODULE_1__.isset)(this.constructor["html"])) {
        this.html = this.constructor["html"];
      }
      if (this.tplPrototype === null) {
        this.tplPrototype = (0,_tpl_templatify__WEBPACK_IMPORTED_MODULE_2__.ka_templatify)((0,_ce_html__WEBPACK_IMPORTED_MODULE_3__.ka_html)(this.html));
      }
      this.tpl = this.tplPrototype.cloneNode(true);
      this.scope.$tpl = new _tpl_template__WEBPACK_IMPORTED_MODULE_4__.KaTemplate(this.tpl);
      let domRoot = this;
      if (this.shadowRootConfig.mode !== null) {
        domRoot = this.attachShadow({ mode: this.shadowRootConfig.mode });
        this.shadowRootConfig.stylesheets.forEach((stylesheet) => {
          (0,_core_create_element__WEBPACK_IMPORTED_MODULE_5__.ka_create_element)("link", { rel: "stylesheet", href: stylesheet }, null, domRoot);
        });
      }
      if (this.wrapper !== null) {
        yield this.wrapper.fragmentConnectedCallback();
        domRoot.append(this.wrapper.wrapTemplate(this.tpl));
        this.wrapper.wrapFinish();
      } else {
        domRoot.append(this.tpl);
      }
      this.scope.render();
    });
  }
  disconnectedCallback() {
    if (this.scope.$tpl !== void 0)
      this.scope.$tpl.dispose();
  }
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/element/KaCustomFragment.ts":
/*!***************************************************************!*\
  !*** ./workspaces/kasi-embed/src/element/KaCustomFragment.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaCustomFragment: () => (/* binding */ KaCustomFragment)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./workspaces/kasi-embed/src/types.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./workspaces/kasi-embed/src/functions.ts");
/* harmony import */ var _tpl_templatify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tpl/templatify */ "./workspaces/kasi-embed/src/tpl/templatify.js");
/* harmony import */ var _ce_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ce/html */ "./workspaces/kasi-embed/src/ce/html.ts");
/* harmony import */ var _tpl_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tpl/template */ "./workspaces/kasi-embed/src/tpl/template.js");
/* harmony import */ var _core_sleep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/sleep */ "./workspaces/kasi-embed/src/core/sleep.ts");
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};






class KaCustomFragment {
  constructor() {
    this.scope = (0,_types__WEBPACK_IMPORTED_MODULE_0__.createScopeObject)();
    this.html = null;
  }
  init(scope) {
    if ((0,_functions__WEBPACK_IMPORTED_MODULE_1__.isset)(this.constructor["html"]) && this.html === null)
      this.html = this.constructor["html"];
    if (!(0,_functions__WEBPACK_IMPORTED_MODULE_1__.isset)(this.tplPrototype))
      this.tplPrototype = (0,_tpl_templatify__WEBPACK_IMPORTED_MODULE_2__.ka_templatify)((0,_ce_html__WEBPACK_IMPORTED_MODULE_3__.ka_html)(this.html));
    this.scope.init(scope);
    return this.scope;
  }
  setParentScope(scope) {
    this.scope.$parent = scope;
  }
  setScope(scope) {
    this.scope.importFrom(scope);
  }
  fragmentConnectedCallback(parentElement) {
    return __async(this, null, function* () {
      parentElement.setAttribute("ka.stop", "true");
      if (!this.scope.isInitialized()) {
        this.init({});
      }
      this.tpl = this.tplPrototype.cloneNode(true);
      this.scope.$tpl = new _tpl_template__WEBPACK_IMPORTED_MODULE_4__.KaTemplate(this.tpl);
      parentElement.append(this.tpl);
      yield (0,_core_sleep__WEBPACK_IMPORTED_MODULE_5__.ka_sleep)(1);
      this.scope.render();
    });
  }
  fragmentDisconnectedCallback() {
    this.scope.$tpl.dispose();
  }
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/element/KaCustomModal.ts":
/*!************************************************************!*\
  !*** ./workspaces/kasi-embed/src/element/KaCustomModal.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaCustomModal: () => (/* binding */ KaCustomModal)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./workspaces/kasi-embed/src/types.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./workspaces/kasi-embed/src/functions.ts");
/* harmony import */ var _tpl_templatify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tpl/templatify */ "./workspaces/kasi-embed/src/tpl/templatify.js");
/* harmony import */ var _ce_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ce/html */ "./workspaces/kasi-embed/src/ce/html.ts");
/* harmony import */ var _core_create_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/create-element */ "./workspaces/kasi-embed/src/core/create-element.ts");
/* harmony import */ var _tpl_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tpl/template */ "./workspaces/kasi-embed/src/tpl/template.js");
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var _main, _configDefaults, _promise;






class KaCustomModal {
  constructor(tagName = "ka-modal", shadowRootInit = null, modalConfig = {}) {
    this.scope = (0,_types__WEBPACK_IMPORTED_MODULE_0__.createScopeObject)();
    this.__html = "<div>No Template defined</div>";
    __privateAdd(this, _main, void 0);
    __privateAdd(this, _configDefaults, {
      parentElement: document.body,
      zIndex: 9999,
      styleBase: "position:fixed; top:0; bottom:0; left:0; right:0;",
      styleBackdrop: "background-color: #999;opacity:0.5;",
      maxWidth: 800
    });
    __privateAdd(this, _promise, {
      promise: null,
      reject: null,
      resolve: null
    });
    let config = __privateGet(this, _configDefaults);
    config = __spreadValues(__spreadValues({}, config), modalConfig);
    this.element = (0,_core_create_element__WEBPACK_IMPORTED_MODULE_4__.ka_create_element)(tagName, { hidden: "hidden" }, null, config.parentElement);
    this.backdrop = (0,_core_create_element__WEBPACK_IMPORTED_MODULE_4__.ka_create_element)("div", { style: `${config.styleBase};${config.styleBackdrop};z-index:${config.zIndex};` }, null, this.element);
    let master = (0,_core_create_element__WEBPACK_IMPORTED_MODULE_4__.ka_create_element)("div", { style: `position:fixed;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;z-index:${config.zIndex + 1};` }, null, this.element);
    __privateSet(this, _main, (0,_core_create_element__WEBPACK_IMPORTED_MODULE_4__.ka_create_element)("div", { style: `;max-height:100%;max-width:100%;` }, null, master));
    this.adjustWidth(config);
    __privateGet(this, _promise).promise = new Promise((resolve, reject) => {
      __privateGet(this, _promise).resolve = resolve;
      __privateGet(this, _promise).reject = reject;
    });
  }
  adjustWidth(modalConfig) {
    let w = window.innerWidth;
    if (w > modalConfig.maxWidth)
      w = modalConfig.maxWidth;
    __privateGet(this, _main).style.width = w + "px";
  }
  init(scope) {
    if ((0,_functions__WEBPACK_IMPORTED_MODULE_1__.isset)(this.constructor["html"]))
      this.__html = this.constructor["html"];
    if (!(0,_functions__WEBPACK_IMPORTED_MODULE_1__.isset)(this.tplPrototype))
      this.tplPrototype = (0,_tpl_templatify__WEBPACK_IMPORTED_MODULE_2__.ka_templatify)((0,_ce_html__WEBPACK_IMPORTED_MODULE_3__.ka_html)(this.__html));
    this.scope.init(scope);
    return this.scope;
  }
  setParentScope(scope) {
    this.scope.$parent = scope;
  }
  setScope(scope) {
    this.scope.importFrom(scope);
  }
  resolve(value) {
    this.element.remove();
    __privateGet(this, _promise).resolve(value);
  }
  show(...params) {
    return __async(this, null, function* () {
      if (!this.scope.isInitialized()) {
        this.init({});
      }
      this.tpl = this.tplPrototype.cloneNode(true);
      this.scope.$tpl = new _tpl_template__WEBPACK_IMPORTED_MODULE_5__.KaTemplate(this.tpl);
      __privateGet(this, _main).append(this.tpl);
      this.element.removeAttribute("hidden");
      this.scope.render();
      return __privateGet(this, _promise).promise;
    });
  }
  fragmentDisconnectedCallback() {
    this.scope.$tpl.dispose();
  }
}
_main = new WeakMap();
_configDefaults = new WeakMap();
_promise = new WeakMap();


/***/ }),

/***/ "./workspaces/kasi-embed/src/element/KaCustomWrapper.ts":
/*!**************************************************************!*\
  !*** ./workspaces/kasi-embed/src/element/KaCustomWrapper.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaCustomWrapper: () => (/* binding */ KaCustomWrapper)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./workspaces/kasi-embed/src/types.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./workspaces/kasi-embed/src/functions.ts");
/* harmony import */ var _tpl_templatify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tpl/templatify */ "./workspaces/kasi-embed/src/tpl/templatify.js");
/* harmony import */ var _ce_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ce/html */ "./workspaces/kasi-embed/src/ce/html.ts");
/* harmony import */ var _tpl_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tpl/template */ "./workspaces/kasi-embed/src/tpl/template.js");
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};





class KaCustomWrapper {
  constructor() {
    this.scope = (0,_types__WEBPACK_IMPORTED_MODULE_0__.createScopeObject)();
    this.html = null;
  }
  init(scope) {
    if ((0,_functions__WEBPACK_IMPORTED_MODULE_1__.isset)(this.constructor["html"]) && this.html === null)
      this.html = this.constructor["html"];
    if (!(0,_functions__WEBPACK_IMPORTED_MODULE_1__.isset)(this.tplPrototype))
      this.tplPrototype = (0,_tpl_templatify__WEBPACK_IMPORTED_MODULE_2__.ka_templatify)((0,_ce_html__WEBPACK_IMPORTED_MODULE_3__.ka_html)(this.html));
    this.scope.init(scope);
    return this.scope;
  }
  wrapTemplate(tpl) {
    this.scope.$content = tpl;
    return this.tpl;
  }
  fragmentConnectedCallback() {
    return __async(this, null, function* () {
      if (!this.scope.isInitialized()) {
        this.init({});
      }
      this.returnedTpl = this.tplPrototype;
      this.tpl = this.tplPrototype.cloneNode(true);
      this.scope.$tpl = new _tpl_template__WEBPACK_IMPORTED_MODULE_4__.KaTemplate(this.tpl);
    });
  }
  wrapFinish() {
    return __async(this, null, function* () {
      this.scope.render();
    });
  }
  fragmentDisconnectedCallback() {
    this.scope.$tpl.dispose();
  }
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/element/KaHtmlElement.ts":
/*!************************************************************!*\
  !*** ./workspaces/kasi-embed/src/element/KaHtmlElement.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaHtmlElement: () => (/* binding */ KaHtmlElement)
/* harmony export */ });
/* harmony import */ var _tpl_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tpl/template */ "./workspaces/kasi-embed/src/tpl/template.js");
/* harmony import */ var _tpl_templatify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tpl/templatify */ "./workspaces/kasi-embed/src/tpl/templatify.js");
/* harmony import */ var _ce_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ce/html */ "./workspaces/kasi-embed/src/ce/html.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions */ "./workspaces/kasi-embed/src/functions.ts");
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};




class KaHtmlElement extends HTMLElement {
  constructor(shadowRootInit = null) {
    super();
    this.shadowRootInit = shadowRootInit;
    this.addEventListener("load", (e) => console.log(e));
  }
  connectedCallback() {
    return __async(this, null, function* () {
      let htmlTpl = null;
      if (typeof this.html === "function") {
        let fn = this.html;
        htmlTpl = yield fn(this);
      } else {
        htmlTpl = this.html;
      }
      if (typeof htmlTpl === "string")
        htmlTpl = (0,_ce_html__WEBPACK_IMPORTED_MODULE_2__.ka_html)(htmlTpl);
      let attachTo = this;
      if (this.shadowRootInit !== null) {
        attachTo = this.attachShadow(this.shadowRootInit);
      }
      if ((0,_functions__WEBPACK_IMPORTED_MODULE_3__.isset)(htmlTpl)) {
        let tpl;
        try {
          tpl = (0,_tpl_templatify__WEBPACK_IMPORTED_MODULE_1__.ka_templatify)(htmlTpl);
        } catch (e) {
          console.error("Templatify failed on element", this, "for template", htmlTpl);
          throw e;
        }
        this.$tpl = new _tpl_template__WEBPACK_IMPORTED_MODULE_0__.KaTemplate(tpl);
        attachTo.appendChild(tpl);
      }
      this.connected();
    });
  }
  disconnectedCallback() {
    return __async(this, null, function* () {
      this.$tpl.dispose();
      this.disconnected();
    });
  }
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/element/KaModal.ts":
/*!******************************************************!*\
  !*** ./workspaces/kasi-embed/src/element/KaModal.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaModal: () => (/* binding */ KaModal)
/* harmony export */ });
/* harmony import */ var _tpl_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tpl/template */ "./workspaces/kasi-embed/src/tpl/template.js");
/* harmony import */ var _core_create_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/create-element */ "./workspaces/kasi-embed/src/core/create-element.ts");
/* harmony import */ var _ce_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ce/html */ "./workspaces/kasi-embed/src/ce/html.ts");
/* harmony import */ var _tpl_templatify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tpl/templatify */ "./workspaces/kasi-embed/src/tpl/templatify.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types */ "./workspaces/kasi-embed/src/types.ts");
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _main, _configDefaults, _promise;





class KaModal {
  constructor(tagName = "ka-modal", shadowRootInit = null, modalConfig = {}) {
    this.scope = (0,_types__WEBPACK_IMPORTED_MODULE_4__.createScopeObject)();
    __privateAdd(this, _main, void 0);
    this.$tpl = null;
    __privateAdd(this, _configDefaults, {
      parentElement: document.body,
      zIndex: 9999,
      styleBase: "position:fixed; top:0; bottom:0; left:0; right:0;",
      styleBackdrop: "background-color: #999;opacity:0.5;",
      maxWidth: 800
    });
    __privateAdd(this, _promise, {
      promise: null,
      reject: null,
      resolve: null
    });
    let config = __privateGet(this, _configDefaults);
    config = __spreadValues(__spreadValues({}, config), modalConfig);
    this.element = (0,_core_create_element__WEBPACK_IMPORTED_MODULE_1__.ka_create_element)(tagName, { hidden: "hidden" }, null, config.parentElement);
    this.backdrop = (0,_core_create_element__WEBPACK_IMPORTED_MODULE_1__.ka_create_element)("div", { style: `${config.styleBase};${config.styleBackdrop};z-index:${config.zIndex};` }, null, this.element);
    let master = (0,_core_create_element__WEBPACK_IMPORTED_MODULE_1__.ka_create_element)("div", { style: `position:fixed;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;z-index:${config.zIndex + 1};` }, null, this.element);
    __privateSet(this, _main, (0,_core_create_element__WEBPACK_IMPORTED_MODULE_1__.ka_create_element)("div", { style: `;max-height:100%;max-width:100%;` }, null, master));
    this.adjustWidth(config);
    __privateGet(this, _promise).promise = new Promise((resolve, reject) => {
      __privateGet(this, _promise).resolve = resolve;
      __privateGet(this, _promise).reject = reject;
    });
  }
  adjustWidth(modalConfig) {
    let w = window.innerWidth;
    if (w > modalConfig.maxWidth)
      w = modalConfig.maxWidth;
    __privateGet(this, _main).style.width = w + "px";
  }
  render(scope = null) {
    if (this.$tpl === null) {
      let html = this.html;
      if (typeof html === "string") {
        html = (0,_ce_html__WEBPACK_IMPORTED_MODULE_2__.ka_html)(html);
      }
      if (!(html instanceof HTMLTemplateElement)) {
        console.error("html is not HtmlTemplateElement", html, "on", this);
        throw "html is not HtmlTemplateElement";
      }
      console.log("html", html);
      let elem;
      try {
        elem = (0,_tpl_templatify__WEBPACK_IMPORTED_MODULE_3__.ka_templatify)(html);
      } catch (e) {
        console.log("error templatify for element", this, ":", e);
        throw e;
      }
      __privateGet(this, _main).appendChild(elem);
      this.$tpl = new _tpl_template__WEBPACK_IMPORTED_MODULE_0__.KaTemplate(elem);
    }
    this.$tpl.render(scope);
  }
  resolve(value) {
    this.element.remove();
    __privateGet(this, _promise).resolve(value);
  }
  show(...params) {
    this.element.removeAttribute("hidden");
    return __privateGet(this, _promise).promise;
  }
}
_main = new WeakMap();
_configDefaults = new WeakMap();
_promise = new WeakMap();


/***/ }),

/***/ "./workspaces/kasi-embed/src/element/ka-use.ts":
/*!*****************************************************!*\
  !*** ./workspaces/kasi-embed/src/element/ka-use.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaUse: () => (/* binding */ KaUse)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./workspaces/kasi-embed/src/functions.ts");
/* harmony import */ var _KaCustomFragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KaCustomFragment */ "./workspaces/kasi-embed/src/element/KaCustomFragment.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};


let KaUse = class extends HTMLElement {
  get component() {
    return this.myComponent;
  }
  set component(val) {
    this.myComponent = val;
    this.innerHTML = "";
    this.append(val);
  }
  /**
   * called from ka.use="" by apply()
   *
   * @param val
   */
  use(val, parentScope) {
    if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.isset)(val["setParentScope"]))
      val["setParentScope"](parentScope);
    this.myComponent = val;
    this.innerHTML = "";
    if (!this.hasAttribute("ka.scope"))
      val["setScope"](parentScope);
    if (val instanceof _KaCustomFragment__WEBPACK_IMPORTED_MODULE_1__.KaCustomFragment) {
      val.fragmentConnectedCallback(this);
      return;
    }
    this.append(val);
  }
  /**
   * set dedicated scope using ka.scope
   *
   * @param scope
   */
  setScope(scope) {
    if (this.myComponent instanceof _KaCustomFragment__WEBPACK_IMPORTED_MODULE_1__.KaCustomFragment) {
      this.myComponent.setScope(scope);
    }
  }
  disconnectedCallback() {
  }
  connectedCallback() {
    this.style.display = "contents";
    this.setAttribute("ka.stop", "true");
    if (this.myComponent instanceof _KaCustomFragment__WEBPACK_IMPORTED_MODULE_1__.KaCustomFragment) {
      this.myComponent.fragmentConnectedCallback(this);
    }
  }
};
KaUse = __decorateClass([
  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.customElement)("ka-use-" + (0,_functions__WEBPACK_IMPORTED_MODULE_0__.random_string)().toLowerCase())
], KaUse);


/***/ }),

/***/ "./workspaces/kasi-embed/src/functions.ts":
/*!************************************************!*\
  !*** ./workspaces/kasi-embed/src/functions.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customElement: () => (/* binding */ customElement),
/* harmony export */   isUndefined: () => (/* binding */ isUndefined),
/* harmony export */   isset: () => (/* binding */ isset),
/* harmony export */   ka_await_element: () => (/* binding */ ka_await_element),
/* harmony export */   random_string: () => (/* binding */ random_string),
/* harmony export */   template: () => (/* binding */ template)
/* harmony export */ });
/* harmony import */ var _core_sleep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/sleep */ "./workspaces/kasi-embed/src/core/sleep.ts");
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

function isset(input) {
  return typeof input !== "undefined" && input !== null;
}
function isUndefined(input) {
  return typeof input === "undefined";
}
function customElement(tagName = null, template2 = null) {
  return function(classOrDescriptor) {
    if (template2 !== null) {
      classOrDescriptor["html"] = template2;
    }
    if (window["_kasi_defined_custom_elements"] === void 0) {
      window["_kasi_defined_custom_elements"] = [];
    }
    if (tagName === null) {
      if (window["_kasi_anon_element_id"] === void 0) {
        window["_kasi_anon_element_id"] = 0;
      }
      tagName = "kasimirjs-anon-element-" + window["_kasi_anon_element_id"]++;
    }
    if (!window["_kasi_defined_custom_elements"].includes(tagName)) {
      customElements.define(tagName, classOrDescriptor);
      window["_kasi_defined_custom_elements"].push(tagName);
    }
    return classOrDescriptor;
  };
}
function ka_await_element(_0) {
  return __async(this, arguments, function* (selector, parent = document, maxWait = 2e3) {
    let elem = parent.querySelector(selector);
    let rounds = 1;
    while (elem === null && maxWait > 0) {
      let delay = 20 * rounds++;
      yield (0,_core_sleep__WEBPACK_IMPORTED_MODULE_0__.ka_sleep)(delay);
      elem = parent.querySelector(selector);
      maxWait -= delay;
    }
    return elem;
  });
}
function template(template2) {
  return function(classOrDescriptor) {
    classOrDescriptor["html"] = template2;
    return classOrDescriptor;
  };
}
function random_string(len = 12) {
  let result = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < len; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/index.ts":
/*!********************************************!*\
  !*** ./workspaces/kasi-embed/src/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Debouncer: () => (/* reexport safe */ _core_debouncer__WEBPACK_IMPORTED_MODULE_18__.Debouncer),
/* harmony export */   KaCustomElement: () => (/* reexport safe */ _element_KaCustomElement__WEBPACK_IMPORTED_MODULE_8__.KaCustomElement),
/* harmony export */   KaCustomFragment: () => (/* reexport safe */ _element_KaCustomFragment__WEBPACK_IMPORTED_MODULE_9__.KaCustomFragment),
/* harmony export */   KaCustomModal: () => (/* reexport safe */ _element_KaCustomModal__WEBPACK_IMPORTED_MODULE_11__.KaCustomModal),
/* harmony export */   KaCustomWrapper: () => (/* reexport safe */ _element_KaCustomWrapper__WEBPACK_IMPORTED_MODULE_10__.KaCustomWrapper),
/* harmony export */   KaHtmlElement: () => (/* reexport safe */ _element_KaHtmlElement__WEBPACK_IMPORTED_MODULE_7__.KaHtmlElement),
/* harmony export */   KaModal: () => (/* reexport safe */ _element_KaModal__WEBPACK_IMPORTED_MODULE_13__.KaModal),
/* harmony export */   KaTemplate: () => (/* reexport safe */ _tpl_template__WEBPACK_IMPORTED_MODULE_12__.KaTemplate),
/* harmony export */   createScopeObject: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_1__.createScopeObject),
/* harmony export */   customElement: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.customElement),
/* harmony export */   isUndefined: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.isUndefined),
/* harmony export */   isset: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.isset),
/* harmony export */   ka_await_element: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.ka_await_element),
/* harmony export */   ka_create_element: () => (/* reexport safe */ _core_create_element__WEBPACK_IMPORTED_MODULE_4__.ka_create_element),
/* harmony export */   ka_debounce: () => (/* reexport safe */ _core_debounce__WEBPACK_IMPORTED_MODULE_3__.ka_debounce),
/* harmony export */   ka_dom_ready: () => (/* reexport safe */ _core_dom_ready__WEBPACK_IMPORTED_MODULE_6__.ka_dom_ready),
/* harmony export */   ka_eval: () => (/* reexport safe */ _core_eval__WEBPACK_IMPORTED_MODULE_15__.ka_eval),
/* harmony export */   ka_html: () => (/* reexport safe */ _ce_html__WEBPACK_IMPORTED_MODULE_16__.ka_html),
/* harmony export */   ka_query_selector: () => (/* reexport safe */ _core_query_select__WEBPACK_IMPORTED_MODULE_14__.ka_query_selector),
/* harmony export */   ka_session_storage: () => (/* reexport safe */ _core_storage__WEBPACK_IMPORTED_MODULE_19__.ka_session_storage),
/* harmony export */   ka_set_options: () => (/* reexport safe */ _core_ka_set_options__WEBPACK_IMPORTED_MODULE_5__.ka_set_options),
/* harmony export */   ka_sleep: () => (/* reexport safe */ _core_sleep__WEBPACK_IMPORTED_MODULE_2__.ka_sleep),
/* harmony export */   ka_templatify: () => (/* reexport safe */ _tpl_templatify__WEBPACK_IMPORTED_MODULE_17__.ka_templatify),
/* harmony export */   random_string: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.random_string),
/* harmony export */   template: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.template)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./workspaces/kasi-embed/src/functions.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./workspaces/kasi-embed/src/types.ts");
/* harmony import */ var _core_sleep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/sleep */ "./workspaces/kasi-embed/src/core/sleep.ts");
/* harmony import */ var _core_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/debounce */ "./workspaces/kasi-embed/src/core/debounce.ts");
/* harmony import */ var _core_create_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/create-element */ "./workspaces/kasi-embed/src/core/create-element.ts");
/* harmony import */ var _core_ka_set_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/ka-set-options */ "./workspaces/kasi-embed/src/core/ka-set-options.ts");
/* harmony import */ var _core_dom_ready__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/dom-ready */ "./workspaces/kasi-embed/src/core/dom-ready.ts");
/* harmony import */ var _element_KaHtmlElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./element/KaHtmlElement */ "./workspaces/kasi-embed/src/element/KaHtmlElement.ts");
/* harmony import */ var _element_KaCustomElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./element/KaCustomElement */ "./workspaces/kasi-embed/src/element/KaCustomElement.ts");
/* harmony import */ var _element_KaCustomFragment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./element/KaCustomFragment */ "./workspaces/kasi-embed/src/element/KaCustomFragment.ts");
/* harmony import */ var _element_KaCustomWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./element/KaCustomWrapper */ "./workspaces/kasi-embed/src/element/KaCustomWrapper.ts");
/* harmony import */ var _element_KaCustomModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./element/KaCustomModal */ "./workspaces/kasi-embed/src/element/KaCustomModal.ts");
/* harmony import */ var _tpl_template__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tpl/template */ "./workspaces/kasi-embed/src/tpl/template.js");
/* harmony import */ var _element_KaModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./element/KaModal */ "./workspaces/kasi-embed/src/element/KaModal.ts");
/* harmony import */ var _core_query_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/query-select */ "./workspaces/kasi-embed/src/core/query-select.ts");
/* harmony import */ var _core_eval__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/eval */ "./workspaces/kasi-embed/src/core/eval.js");
/* harmony import */ var _ce_html__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ce/html */ "./workspaces/kasi-embed/src/ce/html.ts");
/* harmony import */ var _tpl_templatify__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tpl/templatify */ "./workspaces/kasi-embed/src/tpl/templatify.js");
/* harmony import */ var _core_debouncer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/debouncer */ "./workspaces/kasi-embed/src/core/debouncer.ts");
/* harmony import */ var _core_storage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/storage */ "./workspaces/kasi-embed/src/core/storage.ts");






















/***/ }),

/***/ "./workspaces/kasi-embed/src/types.ts":
/*!********************************************!*\
  !*** ./workspaces/kasi-embed/src/types.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createScopeObject: () => (/* binding */ createScopeObject)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./workspaces/kasi-embed/src/functions.ts");
/* harmony import */ var _core_debouncer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/debouncer */ "./workspaces/kasi-embed/src/core/debouncer.ts");
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};


class KaDefaultScope {
  constructor() {
    this.__isInitialized = false;
  }
  isInitialized() {
    return this.__isInitialized;
  }
  render() {
    return __async(this, null, function* () {
      this.$tpl.render(this);
    });
  }
  raw() {
    return this.$__scope_orig;
  }
  importFrom(scope) {
    for (let key of Object.keys(scope)) {
      if (key.startsWith("$") || key.startsWith("__"))
        continue;
      this["$__scope_orig"][key] = scope[key];
    }
  }
  dump() {
    return __spreadValues({}, this);
  }
  init(scopeDef) {
    if (this.isInitialized())
      throw "Scope is already initalized";
    this.__isInitialized = true;
    for (let key of Object.keys(scopeDef)) {
      this[key] = scopeDef[key];
    }
  }
}
function createScopeObject(init = null) {
  let scopeDef = new KaDefaultScope();
  scopeDef["$__scope_orig"] = scopeDef;
  let proxy = new Proxy(scopeDef, {
    get(target, prop, receiver) {
      if (prop.startsWith("$"))
        return target[prop];
      return target[prop];
    },
    set(target, p, value, receiver) {
      if (target[p] === value)
        return true;
      target[p] = value;
      let debouncer = new _core_debouncer__WEBPACK_IMPORTED_MODULE_1__.Debouncer(50, 50);
      if (p.startsWith("$") || p.startsWith("__"))
        return true;
      if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.isset)(scopeDef.$tpl))
        scopeDef.$tpl.render();
      (() => __async(this, null, function* () {
        yield debouncer.debounce();
      }))();
      return true;
    }
  });
  if (init !== null)
    scopeDef.init(init);
  return proxy;
}


/***/ }),

/***/ "./workspaces/liscom/index.ts":
/*!************************************!*\
  !*** ./workspaces/liscom/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LiscomConfig: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.LiscomConfig),
/* harmony export */   __liscom_config: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.__liscom_config),
/* harmony export */   liscom_enable: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.liscom_enable)
/* harmony export */ });
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ "./workspaces/liscom/src/index.ts");



/***/ }),

/***/ "./workspaces/liscom/src/details-title/details-title.ts":
/*!**************************************************************!*\
  !*** ./workspaces/liscom/src/details-title/details-title.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./workspaces/liscom/src/index.ts");


let observedDataDetailTitle = [];
setInterval(() => {
  var _a;
  if (((_a = _index__WEBPACK_IMPORTED_MODULE_1__.__liscom_config) == null ? void 0 : _a.detailsTitle) !== true) {
    return;
  }
  let elements = document.querySelectorAll("[data-details-title]");
  for (let e of Array.from(elements)) {
    if (observedDataDetailTitle.indexOf(e) !== -1)
      continue;
    observedDataDetailTitle.push(e);
    let title = e.getAttribute("data-details-title");
    let details = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("details", { "data-debug-liscom-element": "details-title" });
    let summary = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("summary", {}, [], details);
    e.parentElement.insertBefore(details, e);
    summary.append(title);
    details.append(e);
  }
}, 1e3);


/***/ }),

/***/ "./workspaces/liscom/src/index.ts":
/*!****************************************!*\
  !*** ./workspaces/liscom/src/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LiscomConfig: () => (/* binding */ LiscomConfig),
/* harmony export */   __liscom_config: () => (/* binding */ __liscom_config),
/* harmony export */   liscom_enable: () => (/* binding */ liscom_enable)
/* harmony export */ });
/* harmony import */ var _slideshow_slideshow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideshow/slideshow */ "./workspaces/liscom/src/slideshow/slideshow.ts");
/* harmony import */ var _details_title_details_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-title/details-title */ "./workspaces/liscom/src/details-title/details-title.ts");
/* harmony import */ var _typewriter_element_typewriter_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typewriter-element/typewriter-element */ "./workspaces/liscom/src/typewriter-element/typewriter-element.ts");
/* harmony import */ var _typewriter_element_typewriter_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_typewriter_element_typewriter_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _slider_liscom_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider/liscom-slider */ "./workspaces/liscom/src/slider/liscom-slider.ts");
/* harmony import */ var _slider_liscom_slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_slider_liscom_slider__WEBPACK_IMPORTED_MODULE_3__);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __liscom_config = null;
class LiscomConfig {
  constructor() {
    this.slideshow = true;
    this.detailsTitle = true;
  }
}
function liscom_enable(liscomConfig = {}) {
  let config = new LiscomConfig();
  config = __spreadValues(__spreadValues({}, config), liscomConfig);
  console.log("[liscom] enabled features: ", config);
  __liscom_config = config;
}






/***/ }),

/***/ "./workspaces/liscom/src/slider/liscom-slider.ts":
/*!*******************************************************!*\
  !*** ./workspaces/liscom/src/slider/liscom-slider.ts ***!
  \*******************************************************/
/***/ (() => {

class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.currentSection = 0;
    // Define your dragStart, dragEnd, and dragMove methods here to handle mouse drag
    this.isDragging = false;
    this.startY = 0;
    this.startX = 0;
    this.scrollStartY = 0;
    this.scrollStartX = 0;
  }
  connectedCallback() {
    console.log("connected");
    this.addEventListener("mousedown", this.dragStart);
    this.addEventListener("mouseup", this.dragEnd);
    this.addEventListener("mouseleave", this.dragEnd);
    this.addEventListener("mousemove", this.dragMove);
  }
  doScroll(direction) {
    this.currentSection = Math.max(0, Math.min(this.sections.length - 1, this.currentSection + direction));
    this.sections[this.currentSection].scrollIntoView({ behavior: "smooth" });
  }
  // ... other methods
  dragStart(e) {
    console.log("mousedown");
    e.preventDefault();
    this.isDragging = true;
    this.startY = e.clientY;
    this.startX = e.clientX;
    this.style.scrollSnapType = "unset";
    this.scrollStartY = this.scrollTop;
    this.scrollStartX = this.scrollLeft;
    this.style.cursor = "grabbing";
  }
  dragEnd(e) {
    if (!this.isDragging)
      return;
    this.isDragging = false;
    this.style.cursor = "";
    this.style.scrollSnapType = null;
    setTimeout(() => {
      this.scrollBy(1, 0);
      this.scrollBy(0, 1);
    }, 0);
  }
  dragMove(e) {
    if (!this.isDragging)
      return;
    const y = e.clientY;
    const x = e.clientX;
    const deltaY = this.startY - y;
    this.scrollTop = this.scrollStartY + deltaY;
    const deltaX = this.startX - x;
    this.scrollLeft = this.scrollStartX + deltaX;
  }
}
customElements.define("liscom-slider", MyComponent);


/***/ }),

/***/ "./workspaces/liscom/src/slideshow/slideshow.ts":
/*!******************************************************!*\
  !*** ./workspaces/liscom/src/slideshow/slideshow.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./workspaces/liscom/src/index.ts");
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var _curElement;


class Slideshow {
  constructor(element) {
    this.element = element;
    __privateAdd(this, _curElement, null);
    let timeout = parseInt(element.getAttribute("data-delay"));
    if (isNaN(timeout))
      timeout = 5e3;
    element.setAttribute("data-debug-liscom-element", "slideshow");
    setTimeout(() => this.switch(true), 100);
    setTimeout(() => this.switch(), 200);
    setInterval(() => this.switch(), timeout);
  }
  switch(first = false) {
    if (__privateGet(this, _curElement) !== null) {
      __privateGet(this, _curElement).classList.add("animateOut");
      __privateGet(this, _curElement).classList.remove("show");
      __privateGet(this, _curElement).classList.remove("animateIn");
    }
    if (__privateGet(this, _curElement) === null) {
      __privateSet(this, _curElement, this.element.firstElementChild);
      return;
    } else {
      __privateSet(this, _curElement, __privateGet(this, _curElement).nextElementSibling);
      if (__privateGet(this, _curElement) === null)
        __privateSet(this, _curElement, this.element.firstElementChild);
    }
    if (!first) {
      __privateGet(this, _curElement).classList.add("animateIn");
      __privateGet(this, _curElement).classList.remove("animateOut");
    }
    __privateGet(this, _curElement).classList.add("show");
  }
}
_curElement = new WeakMap();
(() => __async(undefined, null, function* () {
  var _a;
  yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_1__.ka_dom_ready)();
  yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_1__.ka_sleep)(1e3);
  if (((_a = _index__WEBPACK_IMPORTED_MODULE_0__.__liscom_config) == null ? void 0 : _a.slideshow) !== true) {
    return;
  }
  document.querySelectorAll(".slideshow").forEach((e) => new Slideshow(e));
}))();


/***/ }),

/***/ "./workspaces/liscom/src/typewriter-element/typewriter-element.ts":
/*!************************************************************************!*\
  !*** ./workspaces/liscom/src/typewriter-element/typewriter-element.ts ***!
  \************************************************************************/
/***/ (() => {

class TypewriterElement extends HTMLElement {
  constructor() {
    super();
    this.words = [];
    this.index = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    // Container für den Cursor
    // Werte für die Timeouts
    this.writeSpeed = 100;
    this.deleteSpeed = 50;
    this.pauseBeforeDelete = 1500;
    this.pauseBeforeWrite = 500;
    this.curTimeout = null;
    this.container = document.createElement("span");
    this.cursor = document.createElement("span");
    this.cursor.textContent = "|";
    this.append(this.container, this.cursor);
  }
  connectedCallback() {
    if (!this.hasAttribute("data-words")) {
      this.setAttribute("data-words", this.textContent.trim().replace("|", ""));
      this.textContent = "";
    }
    this.words = this.dataset.words.trim().split(",").filter((word) => word.trim() !== "");
    this.cursor.className = "cursor";
    this.index = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.writeSpeed = Number(this.dataset.writeSpeed) || this.writeSpeed;
    this.deleteSpeed = Number(this.dataset.deleteSpeed) || this.deleteSpeed;
    this.pauseBeforeDelete = Number(this.dataset.pauseBeforeDelete) || this.pauseBeforeDelete;
    this.pauseBeforeWrite = Number(this.dataset.pauseBeforeWrite) || this.pauseBeforeWrite;
    this.type();
  }
  type() {
    if (this.words.length === 0)
      return;
    const currentWord = this.words[this.index];
    const typeSpeed = this.isDeleting ? this.deleteSpeed : this.writeSpeed;
    if (this.curTimeout)
      clearTimeout(this.curTimeout);
    if (this.isDeleting) {
      this.charIndex--;
    } else {
      this.charIndex++;
    }
    this.container.textContent = currentWord.substring(0, this.charIndex);
    if (!this.isDeleting && this.charIndex === currentWord.length) {
      this.isDeleting = true;
      this.curTimeout = setTimeout(() => this.type(), this.pauseBeforeDelete);
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.index = (this.index + 1) % this.words.length;
      this.curTimeout = setTimeout(() => this.type(), this.pauseBeforeWrite);
    } else {
      this.curTimeout = setTimeout(() => this.type(), typeSpeed + Math.random() * typeSpeed);
    }
  }
}
customElements.define("typewriter-element", TypewriterElement);


/***/ }),

/***/ "./sections/2-cols/2-cols-bg.ts":
/*!**************************************!*\
  !*** ./sections/2-cols/2-cols-bg.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");


_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("2-cols-bg",
    // language=HTML
    `
        <section class="tjs-2-cols-bg :: mobile :md:">
            <div class="tjs-wrapper container ">
                <div class="tjs-2-cols-bg__disturber">
                    <slot data-select="blockquote"></slot>
                </div>
                <div class="tjs-2-cols__col tjs-2-cols__col--image">
                    <slot data-select="img"></slot>
                </div>
                <div class="tjs-2-cols__col tjs-2-cols__col--text-content">
                    <slot></slot>
                </div>
            </div>
        </section>
    `);


/***/ }),

/***/ "./sections/2-cols/2-cols.ts":
/*!***********************************!*\
  !*** ./sections/2-cols/2-cols.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");


_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("2-cols",
    // language=HTML
    `
        <section class="tjs-2-cols :: mobile :md:">
            <div class="tjs-wrapper container ">
                <div class="tjs-2-cols__col tjs-2-cols__col--image">
                    <slot data-select="img"></slot>
                </div>
                <div class="tjs-2-cols__col tjs-2-cols__col--text-content">
                    <slot></slot>
                </div>
            </div>
        </section>
    `);


/***/ }),

/***/ "./sections/cards-slider/cards-slider.ts":
/*!***********************************************!*\
  !*** ./sections/cards-slider/cards-slider.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");


_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("cards-slider__list-item",
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

_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("cards-slider",
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


/***/ }),

/***/ "./sections/contact/contact.ts":
/*!*************************************!*\
  !*** ./sections/contact/contact.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");




_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("contact",
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
                                <slot></slot>

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


/***/ }),

/***/ "./sections/cta1/cta1.ts":
/*!*******************************!*\
  !*** ./sections/cta1/cta1.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");



_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("cta1",
    // language=HTML
    `
        <section class="tjs-2-cols-bg :: mobile :lg:">
            <div class="tjs-wrapper tjs-2-cols-bg--special container">
                <div class="tjs-2-cols-bg__disturber-image">

                    <img loading="lazy" src="/images/man-showing.webp">

                </div>
                <div class="tjs-2-cols-bg__disturber-stars">

                        <img loading="lazy" class="tjs-2-cols-bg__disturber-stars--left" src="/images/stars.webp">
                    <img loading="lazy" class="tjs-2-cols-bg__disturber-stars--right" src="/images/stars.webp">

                </div>
                <div class="tjs-2-cols-bg__row tjs-2-cols-bg__row--special">
                    <div class="tjs-2-cols-bg__col tjs-2-cols-bg__col--text-content">
                        <slot></slot>
                    </div>
                    <div class="tjs-2-cols-bg__col tjs-2-cols-bg__col--button-content">
                        <slot data-select=".btn"></slot>
                    </div>
                </div>
            </div>
        </section>
    `);


/***/ }),

/***/ "./sections/customer-reviews/customer-reviews.ts":
/*!*******************************************************!*\
  !*** ./sections/customer-reviews/customer-reviews.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");


_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("customer-reviews__carousel--slide",
    // language=HTML
    `
        <div class="tjs-customer-reviews__carousel--slide">
            <div class="tjs-customer-reviews__carousel--slide__stars">
                Sterne Icon?
            </div>
            <div class="tjs-customer-reviews__carousel--slide__text">
                <slot data-select="blockquote"></slot>
            </div>
            <div class="tjs-customer-reviews__carousel--slide__author">
                <slot></slot>
            </div>
        </div>
    `)

_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("customer-reviews",
    // language=HTML
    `
        <section class="tjs-customer-reviews :: mobile :md:">
            <div class="tjs-wrapper container-fluid">
                <div class="tjs-customer-reviews__content--container">
                    <div class="tjs-customer-reviews__content container">
                        <div class="tjs-customer-reviews__content--headline">
                            <slot><slot>
                        </div>
                        <div class="tjs-customer-reviews__content--row">
                            <div class="tjs-customer-reviews__content--col tjs-customer-reviews__carousel">
                                <slot data-select=".children > *" data-child-layout="use: #customer-reviews__carousel--slide;"></slot>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `);


/***/ }),

/***/ "./sections/disturber/disturber.ts":
/*!*****************************************!*\
  !*** ./sections/disturber/disturber.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");


_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("disturber",
    // language=HTML
    `
        <section class="tjs-disturber">
            <div class="tjs-wrapper container">
                <div class="tjs-disturber__content container">
                    <slot data-select="p"></slot>
                </div>
            </div>
        </section>
    `);


/***/ }),

/***/ "./sections/footer/footer.ts":
/*!***********************************!*\
  !*** ./sections/footer/footer.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");




_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("footer",
    // language=HTML
    `
        <footer class="tjs__footer">
            <div class="tjs__footer__shape"></div>
            <div class="tjs__footer__shape"></div>
            <div class="tjs__wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-3">
                            <img
                                src="/static/images/logo-systemwebsite-white.png"
                                alt="Logo Systemwebseite"
                                class="tjs__footer__logo"
                            >
                            <p>Ihr Partner für moderne medizinische Webseiten-Entwicklung</p>
                        </div>
                        <div class="col-6 col-lg-2 offset-lg-3 tjs__footer_links">
                            <strong>Links</strong>
                            <div>
                                <a href="#">Konditionen</a>
                                <a href="#">Leistungen</a>
                                <a href="#">FAQ</a>
                                <a href="#">Kontakt</a>
                            </div>
                        </div>
                        <div class="col-6 col-lg-2 tjs__footer_links">
                            <strong>Links</strong>
                            <div>
                                <a href="#">Konditionen</a>
                                <a href="#">Leistungen</a>
                                <a href="#">FAQ</a>
                                <a href="#">Kontakt</a>
                            </div>
                        </div>
                        <div class="col-12 col-lg-2 tjs__footer_links tjs__footer_links__mobile__images">
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
                        <div class="tjs__footer__legal">
                            <span>Copyright &copy; 2023 SYSTEMWEBSEITE</span>
                            <div class="tjs__footer__legal__links">
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


/***/ }),

/***/ "./sections/header1/header1.ts":
/*!*************************************!*\
  !*** ./sections/header1/header1.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");


_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("header1",
    // language=HTML
    `
        <section class="tjs-header1 :: mobile :lg: ">
            <div class="tjs-wrapper container-fluid">

                <div class="tjs-header1__hero container">
                    <div class="tjs-header1__hero--row">
                        <div class="tjs-header1__hero--col tjs-header1__hero--col-text">
                            <slot></slot>
                        </div>
                        <div class="tjs-header1__hero--col tjs-header1__hero--col-image">
                            <slot data-select="img" data-replace></slot>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    `);


/***/ }),

/***/ "./sections/icon-catchprases/icon-catchphrases.ts":
/*!********************************************************!*\
  !*** ./sections/icon-catchprases/icon-catchphrases.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");


_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("icon-catchprases__item",
    // language=HTML
    `
        <div class="tjs-icon-catchphrases__items--item">
            <div class="tjs-icon-catchphrases__items--item-icon">
                <slot data-select="img">
            </div>
            <div class="tjs-icon-catchphrases__items--item-text">
                <slot></slot>
            </div>
        </div>`
    );


_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("icon-catchprases",
    // language=HTML
    `
        <section class="tjs-icon-catchphrases :: mobile :lg:">
            <div class="tjs-wrapper container">
                <div class="tjs-icon-catchphrases__text">
                    <slot></slot>
                </div>
                <div class="tjs-icon-catchphrases__items">
                    <slot data-select="ul > li" data-child-layout="use:  #icon-catchprases__item"></slot>
                </div>
            </div>
        </section>

    `);


/***/ }),

/***/ "./sections/key-figures/key-figures.ts":
/*!*********************************************!*\
  !*** ./sections/key-figures/key-figures.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");


_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("key-figures",
    // language=HTML
    `
   <section class="tjs-key-figures :: mobile :lg:">
        <div class="tjs-wrapper container-fluid">
            <div class="tjs-key-figures__content--container">
                <div class="tjs-key-figures__content--bg-image">
                    <img alt="Background" src="/images/bar-stripes.svg">
                    <slot data-select="img.background"></slot>
                </div>
                <div class="tjs-key-figures__content container">
                    <div class="tjs-key-figures__content--row">
                        <div class="tjs-key-figures__content--col">
                            <div class="tjs-key-figures__content--col__figure">123</div>
                            <div class="tjs-key-figures__content--col__text">Websiten erstellt</div>
                        </div>
                        <div class="tjs-key-figures__content--col">
                            <div class="tjs-key-figures__content--col__figure">+50</div>
                            <div class="tjs-key-figures__content--col__text">zufriedene Kunden</div>
                        </div>
                        <div class="tjs-key-figures__content--col">
                            <div class="tjs-key-figures__content--col__figure">20</div>
                            <div class="tjs-key-figures__content--col__text">Jahre Erfahrung</div>
                        </div>
                        <div class="tjs-key-figures__content--col">
                            <div class="tjs-key-figures__content--col__figure">98%</div>
                            <div class="tjs-key-figures__content--col__text">Erfolgsquote</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `);


/***/ }),

/***/ "./sections/newsletter/newsletter.ts":
/*!*******************************************!*\
  !*** ./sections/newsletter/newsletter.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");



_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("newsletter",
    // language=HTML
    `
        <section class="tjs__newsletter dark">
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
        </section>
    `);


/***/ }),

/***/ "./sections/sections.ts":
/*!******************************!*\
  !*** ./sections/sections.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header1_header1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header1/header1 */ "./sections/header1/header1.ts");
/* harmony import */ var _disturber_disturber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./disturber/disturber */ "./sections/disturber/disturber.ts");
/* harmony import */ var _icon_catchprases_icon_catchphrases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon-catchprases/icon-catchphrases */ "./sections/icon-catchprases/icon-catchphrases.ts");
/* harmony import */ var _service_slider_service_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-slider/service-slider */ "./sections/service-slider/service-slider.ts");
/* harmony import */ var _2_cols_2_cols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./2-cols/2-cols */ "./sections/2-cols/2-cols.ts");
/* harmony import */ var _2_cols_2_cols_bg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./2-cols/2-cols-bg */ "./sections/2-cols/2-cols-bg.ts");
/* harmony import */ var _key_figures_key_figures__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./key-figures/key-figures */ "./sections/key-figures/key-figures.ts");
/* harmony import */ var _cards_slider_cards_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cards-slider/cards-slider */ "./sections/cards-slider/cards-slider.ts");
/* harmony import */ var _customer_reviews_customer_reviews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer-reviews/customer-reviews */ "./sections/customer-reviews/customer-reviews.ts");
/* harmony import */ var _cta1_cta1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cta1/cta1 */ "./sections/cta1/cta1.ts");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer */ "./sections/footer/footer.ts");
/* harmony import */ var _newsletter_newsletter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./newsletter/newsletter */ "./sections/newsletter/newsletter.ts");
/* harmony import */ var _contact_contact__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact */ "./sections/contact/contact.ts");

















/***/ }),

/***/ "./sections/service-slider/service-slider.ts":
/*!***************************************************!*\
  !*** ./sections/service-slider/service-slider.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");


_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("service-slider__carousel--slide",
    // language=HTML
    `
        <div class="tjs-service-slider__carousel--slide">
            <div class="tjs-service-slider__carousel--slide__image">
                <slot data-select="img"></slot>
            </div>
            <div class="tjs-service-slider__carousel--slide__text">
                <slot></slot>
            </div>
        </div>`
    );


_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("service-slider",
    // language=HTML
    `
        <section class="tjs-service-slider  :: mobile :md:">
            <div class="tjs-wrapper container-fluid">
                <div class="tjs-service-slider__content--container">
                    <div class="tjs-service-slider__content">
                        <div class="tjs-service-slider__content--row">
                            <div class="tjs-service-slider__content--col tjs-service-slider__content--col-text">
                                <slot></slot>
                            </div>
                            <liscom-slider class="tjs-service-slider__content--col tjs-service-slider__carousel">
                                <div class="tjs-service-slider__carousel--navigation">
                                    <div class="tjs-service-slider__carousel--navigation-prev">
                                        <picture>
                                            <source srcset="/images/icons/arrow-left.webp" type="image/webp">
                                            <source srcset="/images/icons/arrow-left.svg" type="image/svg">
                                            <img src="/images/icons/arrow-left.svg">
                                        </picture>
                                    </div>
                                    <div class="tjs-service-slider__carousel--navigation-next">
                                        <picture>
                                            <source srcset="/images/icons/arrow-right.webp" type="image/webp">
                                            <source srcset="/images/icons/arrow-right.svg" type="image/svg">
                                            <img src="/images/icons/arrow-right.svg">
                                        </picture>
                                    </div>
                                </div>
                                <div class="tjs-service-slider__carousel--nav-points">
                                    <div class="tjs-service-slider__carousel--nav-points__point active" data-id="1"></div>
                                    <div class="tjs-service-slider__carousel--nav-points__point" data-id="2"></div>
                                    <div class="tjs-service-slider__carousel--nav-points__point" data-id="3"></div>
                                </div>

                                <slot data-select=".children > *" data-child-layout="use: #service-slider__carousel--slide;"></slot>
                            </liscom-slider>
                            <div class="tjs-service-slider__content--col tjs-service-slider__content--col__mobile-button">
                                <a href="#" class="btn btn-outline-primary">Alle Leistungen entdecken</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    `);


/***/ }),

/***/ "./workspaces/kasi-embed/src/ce/custom-element.js":
/*!********************************************************!*\
  !*** ./workspaces/kasi-embed/src/ce/custom-element.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaCustomElement: () => (/* binding */ KaCustomElement)
/* harmony export */ });
/* harmony import */ var _tpl_templatify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tpl/templatify.js */ "./workspaces/kasi-embed/src/tpl/templatify.js");
/* harmony import */ var _tpl_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tpl/template.js */ "./workspaces/kasi-embed/src/tpl/template.js");
/* harmony import */ var _core_query_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/query-select */ "./workspaces/kasi-embed/src/core/query-select.ts");
/* harmony import */ var _htmlFile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./htmlFile */ "./workspaces/kasi-embed/src/ce/htmlFile.ts");





class KaCustomElement extends HTMLElement {

    constructor(props) {
        super(props);

        /**
         *
         * @protected
         * @var {KaTemplate}
         */
        this.__tpl = null;

        this.__isConnected = false;
    }

    /**
     * The Template associated with this Element
     *
     * @return {KaTemplate}
     */
    get $tpl () {
        return this.__tpl
    }

    isConnected() {
        return this.isConnected;
    }

    /**
     * @abstract
     * @return {Promise<void>}
     */
    async connected($tpl, $this) {
        console.warn("connected() method not overridden in", this);
    }

    async connectedCallback() {
        let callback = this.constructor.__callback;
        if (callback === null) {
        } else {
            callback.bind(this);
        }

        if (this.constructor.__tpl !== null) {
            let origTpl = this.constructor.__tpl;
            if (origTpl instanceof _htmlFile__WEBPACK_IMPORTED_MODULE_3__.RemoteTemplate)
                origTpl = await origTpl.load();

            let tpl = (0,_tpl_templatify_js__WEBPACK_IMPORTED_MODULE_0__.ka_templatify)(origTpl);

            if (this.constructor.__options.shadowDom === true) {
                let shadowDom = this.attachShadow(this.constructor.__options.shadowDomOptions);
                shadowDom.appendChild(tpl);
            } else {
                this.appendChild(tpl);
            }

            this.__tpl = new _tpl_template_js__WEBPACK_IMPORTED_MODULE_1__.KaTemplate(tpl);
        }

        if (this.constructor.__options.waitEvent !== null) {
            let wd = this.constructor.__options.waitEvent.split("@");
            let eventName = wd[0];
            let target = document;
            if (wd.length === 2) {
                target = (0,_core_query_select__WEBPACK_IMPORTED_MODULE_2__.ka_query_selector)(wd[1]);
            }
            target.addEventListener(eventName, async (event) => {
                callback(this.$tpl, this);
                this.__isConnected = true;
            })
            return;
        }

        if (callback === null) {
            // Class: Call connected() Method
            await this.connected(this.$tpl, this);
            this.__isConnected = true;
            return
        }

        // Function
        callback(this.$tpl, this);
        this.__isConnected = true;
    }

};


/***/ }),

/***/ "./workspaces/kasi-embed/src/core/apply.js":
/*!*************************************************!*\
  !*** ./workspaces/kasi-embed/src/core/apply.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_apply: () => (/* binding */ ka_apply)
/* harmony export */ });
/* harmony import */ var _eval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eval.js */ "./workspaces/kasi-embed/src/core/eval.js");
/* harmony import */ var _str_to_camelcase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./str-to-camelcase.js */ "./workspaces/kasi-embed/src/core/str-to-camelcase.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions */ "./workspaces/kasi-embed/src/functions.ts");
/* harmony import */ var _element_KaCustomFragment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../element/KaCustomFragment */ "./workspaces/kasi-embed/src/element/KaCustomFragment.ts");
/* harmony import */ var _element_ka_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../element/ka-use */ "./workspaces/kasi-embed/src/element/ka-use.ts");







function ka_apply (selector, scope, recursive=false) {
    if (typeof selector === "string")
        selector = KaToolsV1.querySelector(selector);

    let attMap = {
        "textcontent": "textContent",
        "htmlcontent": "innerHTML",
        "innerhtml": "innerHTML",
    }

    for(let attName of selector.getAttributeNames()) {
        //console.log(attName);
        if ( ! attName.startsWith("ka.")) {
            continue;
        }

        let attVal = selector.getAttribute(attName);

        let attType = attName.split(".")[1];
        let attSelector = attName.split(".")[2];
        if (typeof attSelector === "undefined")
            attSelector = null;


        let registerEventHandler = function(element, action, callbackOrCode, scope) {
            if (typeof element._ka_on === "undefined")
                element._ka_on = {};

            if (typeof element._ka_on[action] === "undefined")
                element.addEventListener(action, (e) => element._ka_on[action](e));

            element._ka_on[action] = async(e) => {
                scope["$event"] = e;
                if (typeof callbackOrCode === "function") {
                    return callbackOrCode(e, element, scope);
                } else {
                    return (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(callbackOrCode, scope, element);
                }
            };
        }

        if (attType === "on") {
            let attScope = {$scope: scope, ...scope}
            if (attSelector !== null) {
                registerEventHandler(selector, attSelector, attVal, attScope);
            } else {
                let callBackMap = KaToolsV1.eval(attVal, attScope, selector);
                for(let curAction in callBackMap) {
                    registerEventHandler(selector, curAction, callBackMap[curAction], attScope);
                }

            }
            continue;
        }

        let r = null;
        if (typeof attVal !== "undefined" && typeof attVal !== null && attVal !== "")
            r = (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(attVal, scope, selector);

        switch (attType) {
            case "use":
                if ( ! (selector instanceof _element_ka_use__WEBPACK_IMPORTED_MODULE_4__.KaUse)) {
                    let elem = new _element_ka_use__WEBPACK_IMPORTED_MODULE_4__.KaUse();

                    // Copy all attributes from selector to elem
                    for(let attName of selector.getAttributeNames()) {
                        elem.setAttribute(attName, selector.getAttribute(attName));
                    }
                    selector.replaceWith(elem);
                    selector = elem;
                }

                selector.use(r, scope)
                continue;

            case "become":
                if ( ! (r instanceof HTMLElement)) {
                    console.error("ka.become is only available on HTMLElements: Used on ", r, "found in ", selector);
                    throw "ka.become called on non HTMLElement."
                }
                let attributes = selector.attributes;

                selector.replaceWith(r);

                continue;

            case "content":
                selector.setAttribute("ka.stop", "");
                if (typeof r === "string") {
                    selector.innerHTML = r;
                    continue;
                }
                if ( ! (r instanceof HTMLElement)) {
                    console.error("ka.content is only available on HTMLElements: Used on ", r, "found in ", selector);
                    throw "ka.content called on non HTMLElement."
                }
                selector.append(r);
                continue;

            case "scope":
                if ( ! (r instanceof Object)) {
                    console.error("ka.scope must be object type <ka-use/> Elements: Value is ", r, "found in ", selector);
                    throw "ka.scope insuffient value";
                }

                selector.setScope(r);
                continue;

            case "stop":
                continue;

            case "debug":
                console.log("ka.debug on element", selector, "value:", r, "scope:", scope);
                continue;

            case "ref":
                if ((0,_functions__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(scope.$ref))
                    scope.$ref = {};
                // Allow ref without parameter to use $ref.$last
                if (r !== null)
                    scope.$ref[r] = selector;
                scope.$ref.$last = selector;
                break;

            case "classlist":
                if (attSelector  !== null) {
                    if (r === true) {
                        selector.classList.add(attSelector)
                    } else {
                        selector.classList.remove(attSelector)
                    }
                    break;
                }
                if (typeof r === "string") {
                    // Split and add all classes
                    r = r.split(" ").filter((e) => e.trim() !== "");
                }
                if (Array.isArray(r)) {
                    for (let cname of r) {
                        if (cname.trim() === "")
                            continue;
                        selector.classList.add(cname);
                    }
                    break;
                }
                for (let cname in r) {
                    if (r[cname] === true) {
                        selector.classList.add(cname);
                    } else {
                        selector.classList.remove(cname);
                    }
                }
                break;

            case "style":

                if (attSelector !== null && attSelector.startsWith("--")) {
                    selector.style.setProperty(attSelector, r);
                    break;
                }
                if (attSelector  !== null) {
                    let val = r;
                    if (typeof val === "number" && ["left", "top", "height", "width", "bottom", "right", "line-height", "font-size"].indexOf(attSelector) !== -1)
                        val = val + "px";
                    selector.style[(0,_str_to_camelcase_js__WEBPACK_IMPORTED_MODULE_1__.ka_str_to_camel_case)(attSelector)] = val;
                    break;
                }
                for (let cname in r) {
                    let val = r[cname];
                    if (typeof val === "number" && ["left", "top", "height", "width", "bottom", "right", "line-height", "font-size"].indexOf(cname) !== -1)
                        val = val + "px";
                    selector.style[(0,_str_to_camelcase_js__WEBPACK_IMPORTED_MODULE_1__.ka_str_to_camel_case)(cname)] = val;
                }
                break;

            case "bindarray":
                if (attSelector === "default")
                    continue;
                if ((0,_functions__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(r)) {
                    // Bind default values
                    if (selector.hasAttribute("ka.bind.default")) {
                        scope = {$scope: scope, ...scope};
                        scope = {$scope: scope, ...scope, __curVal: (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(selector.getAttribute("ka.bind.default"), scope, selector)}
                        ;(0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(`${attVal} = __curVal`, scope, selector);
                        r = scope.__curVal;
                    }
                }
                if ( ! Array.isArray(r)) {
                    console.error("kap:bindarr: Not an array!", r, selector);
                    return;
                }
                if (r.indexOf(selector.value) === -1)
                    selector.checked = false;
                else
                    selector.checked = true;

                if (typeof selector._kap_bind === "undefined") {
                    selector.addEventListener("change", (event) => {

                        let arr = (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(attVal, scope, selector);

                        if (arr.indexOf(selector.value) === -1 && selector.checked)
                            arr.push(selector.value);
                        if (arr.indexOf(selector.value) !== -1 && ! selector.checked)
                            arr = arr.filter((e) => e !== selector.value);
                        scope = {$scope: scope, ...scope, __curVal: arr};
                        (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(`${attVal} = __curVal`, scope, selector);
                        if (scope.$on && scope.$on.change)
                            scope.$on.change(event);
                    })
                    selector._kap_bind = true;
                }
                break;

            case "bind":
                if (attSelector === "default")
                    continue;
                if ((0,_functions__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(r)) {
                    // Bind default values
                    if ((0,_functions__WEBPACK_IMPORTED_MODULE_2__.isset) (selector.value)) {
                        scope = {$scope: scope,...scope, __curVal: selector.value}
                        ;(0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(`${attVal} = __curVal`, scope, selector);
                        r = scope.__curVal;
                    }
                    if (selector.hasAttribute("ka.bind.default")) {
                        scope = {$scope: scope, ...scope};
                        scope = {$scope: scope, ...scope, __curVal: (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(selector.getAttribute("ka.bind.default"), scope, selector)}
                        ;(0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(`${attVal} = __curVal`, scope, selector);
                        r = scope.__curVal;
                    }
                }
                if (selector.type === "checkbox" || selector.type === "radio") {
                    if (selector.hasAttribute("value")) {
                        if (r === selector.getAttribute("value"))
                            selector.checked = true;
                        else
                            selector.checked = false;
                    } else {
                        if (r === true)
                            selector.checked = true;
                        else
                            selector.checked = false;
                    }
                } else {
                    selector.value = typeof r !== "undefined" ? r : "";
                }

                if (typeof selector._kap_bind === "undefined") {
                    selector.addEventListener("change", (event) => {

                        let value = null;
                        if (selector.type === "checkbox" || selector.type === "radio") {
                            if (selector.hasAttribute("value")) {
                                if (selector.checked === false)
                                    return;
                                value = selector.getAttribute("value");
                            } else {
                                value = selector.checked
                            }
                        } else {
                            value = selector.value
                        }
                        scope = {$scope: scope, ...scope, __curVal: value}
                        ;(0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(`${attVal} = __curVal`, scope, selector);
                        if (scope.$on && scope.$on.change)
                            scope.$on.change(event);
                    })
                    selector.addEventListener("keyup", (event) => {
                        scope = {$scope: scope,...scope, __curVal: selector.value}
                        ;(0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(`${attVal} = __curVal`, scope, selector);
                        if (scope.$on && scope.$on.change)
                            scope.$on.change(event);

                    })
                    selector._kap_bind = true;
                }
                break;

            case "options":
                let value = selector.value;
                selector.innerHTML = "";
                for (let option in r) {
                    if (! Array.isArray(r)) {
                        // Object key => value value => text
                        selector.appendChild(new Option(r[option], option));
                    } else {
                        // Array
                        if (r[option]?.text !== undefined) {
                            selector.appendChild(new Option(r[option].text, r[option].value));
                        } else {
                            // Array value and text will be array value
                            selector.appendChild(new Option(r[option], r[option]));
                        }
                    }
                }
                if (value !== null)
                    selector.value = value;
                break;

            case "attr":
                if (attSelector  !== null) {
                    if (r === null || r === false) {
                        selector.removeAttribute(attSelector)
                    } else {
                        selector.setAttribute(attSelector, r);
                    }
                    break;
                }
                for (let cname in r) {
                    if (r[cname] ===null || r[cname] === false) {
                        selector.removeAttribute(cname);
                    } else {
                        selector.setAttribute(cname, r[cname]);
                    }
                }
                break;

            case "prop":
                if (attSelector  !== null) {
                    // Set Property directly
                    selector[(0,_str_to_camelcase_js__WEBPACK_IMPORTED_MODULE_1__.ka_str_to_camel_case)(attSelector)] = r;
                    break;
                }
                for (let cname in r) {
                    selector[(0,_str_to_camelcase_js__WEBPACK_IMPORTED_MODULE_1__.ka_str_to_camel_case)(cname)] = r[cname];
                }
                break;

            default:
                if (typeof attMap[attType] !== "undefined")
                    attType = attMap[attType];
                if (typeof selector[attType] === "undefined") {
                    console.warn("apply(): trying to set undefined property ", attType, "on element", selector);
                }
                selector[attType] = r;
                break;
        }



    }
    if (recursive) {
        for (let e of selector.children) {
            ka_apply(e, scope, recursive);
        }
    }
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/core/elwalk.js":
/*!**************************************************!*\
  !*** ./workspaces/kasi-embed/src/core/elwalk.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_elwalk: () => (/* binding */ ka_elwalk)
/* harmony export */ });


/**
 *
 * @param {HTMLElement} elem
 * @param fn
 * @param recursive
 */
function ka_elwalk (elem, fn, recursive=false, includeFirst=false) {
    if (Array.isArray(elem))
        elem.children = elem;
    if (typeof elem.children === "undefined")
        return;
    if (includeFirst && elem instanceof HTMLElement) {
        let ret = fn(elem);
        if (ret === false)
            return false;
    }
    for(let child of elem.children) {
        let ret = fn(child);
        if (ret === false)
            continue; // No recursiion

        if (recursive && typeof child.children !== "undefined")
            ka_elwalk(child, fn, recursive);

    }
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/core/eval.js":
/*!************************************************!*\
  !*** ./workspaces/kasi-embed/src/core/eval.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_eval: () => (/* binding */ ka_eval)
/* harmony export */ });

function ka_eval (stmt, __scope, e, __refs) {
    if (stmt.endsWith(";"))
        stmt = stmt.slice(0, -1);

    const reserved = ["var", "null", "let", "const", "function", "class", "in", "of", "for", "true", "false", "await", "$this"];
    let r = "var $this = e;";
    for (let __name in __scope) {
        if (reserved.indexOf(__name) !== -1)
            continue;
        if (__name.indexOf("-") !== -1) {
            console.error(`Invalid scope key '${__name}': Cannot contain - in scope:`, __scope);
            throw `eval() failed: Invalid scope key: '${__name}': Cannot contain minus char '-'`;
        }
        r += `var ${__name} = __scope['${__name}'];`
    }
    // If the scope was cloned, the original will be in $scope. This is important when
    // Using events [on.click], e.g.
    if (typeof __scope.$scope === "undefined") {
        r += "var $scope = __scope;";
    }
    try {
        // console.log(r + '(' + stmt + ')');
        const func = new Function('e', '__scope', r + '; return ' + stmt);
        return func(e, __scope);
    } catch (ex) {
        console.error("cannot eval() stmt: '" + stmt + "': " + ex, " on element ", e, ex, "(context:", __scope, ")");
        throw "eval('" + stmt + "') failed: " + ex;
    }
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/core/str-to-camelcase.js":
/*!************************************************************!*\
  !*** ./workspaces/kasi-embed/src/core/str-to-camelcase.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_str_to_camel_case: () => (/* binding */ ka_str_to_camel_case)
/* harmony export */ });


/**
 * Transform any input to CamelCase
 *
 * Example: some-class => someClass
 *
 * @param str {string}
 * @return {string}
 */
function ka_str_to_camel_case (str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (ltr, idx) => idx === 0 ? ltr.toLowerCase() : ltr.toUpperCase()).replace(/[^a-zA-Z0-9]+/g, '');
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/tpl/template.js":
/*!***************************************************!*\
  !*** ./workspaces/kasi-embed/src/tpl/template.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaTemplate: () => (/* binding */ KaTemplate)
/* harmony export */ });
/* harmony import */ var _core_eval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/eval.js */ "./workspaces/kasi-embed/src/core/eval.js");
/* harmony import */ var _core_elwalk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/elwalk.js */ "./workspaces/kasi-embed/src/core/elwalk.js");
/* harmony import */ var _core_apply_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/apply.js */ "./workspaces/kasi-embed/src/core/apply.js");
/* harmony import */ var _ce_custom_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ce/custom-element.js */ "./workspaces/kasi-embed/src/ce/custom-element.js");






class KaTemplate {

    constructor(template) {
        this.template = template;
        if (typeof this.template.__kachilds === "undefined")
            this.template.__kachilds = [];
        if (typeof this.template.__kasibling === "undefined")
            this.template.__kasibling = this.template.nextElementSibling;

        this.__renderCount = 0;
        this.$scope = {};
    }

    _error(msg) {
        console.error(`[ka-template] ${msg} on element`, this.template);
        throw `[ka-template] ${msg} on element` + this.template;
    }

    _appendTemplate() {
        let elements = this.template.content;

        let elList = [];
        for (let curE of elements.children) {
            curE = curE.cloneNode(true);
            curE._ka_maintained_by = this.template.getAttribute("_kaidx");
            elList.push(curE);
            this.template.parentNode.insertBefore(curE, this.template.__kasibling);
        }
        this.template.__kachilds.push(elList);
    }

    _removeLastChild() {
        if (this.template.__kachilds.length === 0)
            return;
        let childs = this.template.__kachilds[this.template.__kachilds.length - 1];
        for (let curE of childs) {
            this.template.parentElement.removeChild(curE);
        }
        this.template.__kachilds.length = this.template.__kachilds.length - 1;

    }

    _renderFor($scope, stmt) {
        //console.log("kachilds", this.template.__kachilds);
        let matches = stmt.match(/^(let)?\s*(?<target>.+)\s+(?<type>of|in|repeat)\s+(?<select>.+)$/);
        if (matches === null) {
            this._error(`Can't parse ka.for='${stmt}'`);
        }
        let selectVal = (0,_core_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(matches.groups.select, $scope, this.template);

        if (matches.groups.type === "repeat") {
            if (typeof selectVal !== "number")
                this._error(`Error ka.for='${stmt}': Selected val must be number in repeat loop`);
            selectVal = new Array(selectVal).fill(null);
        }

        let eIndex = 0;
        for (let index in selectVal) {
            let curScope = {$scope: $scope, ...$scope};
            curScope[matches.groups.target] = index;

            if (matches.groups.type === "of")
                curScope[matches.groups.target] = selectVal[index];

            if (this.template.__kachilds.length < eIndex + 1) {
                //console.log("append", eIndex, this.template.__kachilds.length);
                this._appendTemplate();
            }
            this._maintain(curScope, this.template.__kachilds[eIndex], eIndex);
            eIndex++;
        }
        for(let remIdx = eIndex; remIdx < this.template.__kachilds.length; ) {
            this._removeLastChild();
        }

    }

    _maintain($scope, childs, forIndex=0) {
        for (let child of childs) {
            child._ka_for_index = forIndex;
            (0,_core_elwalk_js__WEBPACK_IMPORTED_MODULE_1__.ka_elwalk)(child, (el) => {
                //console.log("walk", el);

                if (el instanceof HTMLTemplateElement) {
                    //console.log("maintain", el);
                    let r = new this.constructor(el);
                    r.render($scope);
                    return false;
                }

                if (typeof el._ka_maintained_by !== "undefined" && el._ka_maintained_by !== this.template.getAttribute("_kaidx")) {
                    return false;
                }

                (0,_core_apply_js__WEBPACK_IMPORTED_MODULE_2__.ka_apply)(el, $scope);
                if ((el instanceof HTMLElement && el.hasAttribute("ka.stop" )) || el["__ka_stop_render"]) {
                    return false; // Skip Element rendering
                }

            }, true, true);
        }
    }


    _renderIf($scope, stmt) {
         let selectVal = (0,_core_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(stmt, $scope, this.template);
        if (selectVal === true) {
            if (this.template.__kachilds.length === 0)
                this._appendTemplate();

            this._maintain($scope, this.template.__kachilds[0]);
        } else {
            this._removeLastChild();
        }
    }

    /**
     * Remove all rendered element
     */
    dispose() {
        for(;this.template.__kachilds.length > 0;)
            this._removeLastChild();
    }


    setScope($scope) {
        this.$scope = $scope;
    }

    /**
     * Render / Update the Template
     *
     * Once the scope in parameter 1 was set, it will render
     * without any parameters. Scope is available via property $scope
     *
     * @param $scope
     */
    render($scope = null) {
        if ($scope === null)
            $scope = this.$scope;
        this.$scope = $scope;
        this.__renderCount++;

        if (this.template.hasAttribute("ka.for")) {
            this._renderFor($scope, this.template.getAttribute("ka.for"));
        } else if (this.template.hasAttribute("ka.if")) {
            this._renderIf($scope, this.template.getAttribute("ka.if"));
        } else {
            if (typeof this.template._ka_active === "undefined") {
                this._appendTemplate();
                this.template._ka_active = true;
            }
            this._maintain($scope, this.template.__kachilds);
        }
    }

    /**
     * Return true if this template was renderd the first time
     *
     * @returns {boolean}
     */
    isFirstRender() {
        return this.__renderCount === 1;
    }

};


/***/ }),

/***/ "./workspaces/kasi-embed/src/tpl/templatify.js":
/*!*****************************************************!*\
  !*** ./workspaces/kasi-embed/src/tpl/templatify.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_templatify: () => (/* binding */ ka_templatify)
/* harmony export */ });
/* harmony import */ var _core_query_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/query-select */ "./workspaces/kasi-embed/src/core/query-select.ts");
/* harmony import */ var _core_elwalk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/elwalk.js */ "./workspaces/kasi-embed/src/core/elwalk.js");



function quoteattr(s, preserveCR) {
    preserveCR = preserveCR ? '&#13;' : '\n';
    return ('' + s) /* Forces the conversion to string. */
        .replace(/&/g, '&amp;') /* This MUST be the 1st replacement. */
        .replace(/'/g, '&apos;') /* The 4 other predefined entities, required. */
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        /*
        You may add other replacements here for HTML only
        (but it's not necessary).
        Or for XML, only if the named entities are defined in its DTD.
        */
        .replace(/\r\n/g, preserveCR) /* Must be before the next replacement. */
        .replace(/[\r\n]/g, preserveCR);
    ;
}

window._ka_el_idx = 0;
/**
 * Generate a renderable Template from <template> Element
 *
 * @param {HTMLElement|string} elem
 * @return {HTMLTemplateElement}
 */
function ka_templatify (elem, returnMode=true) {
    if (typeof elem === "string")
        elem = (0,_core_query_select__WEBPACK_IMPORTED_MODULE_0__.ka_query_selector)(elem);

    if ( ! (elem instanceof Node)) {
        console.error("[ka-templatify] Parameter 1 is not a html element: ", elem)
        throw `[ka-templify] Parameter 1 is not a html element: ${elem}`;
    }

    const elIdxName = "_ka_el_idx";
    if (window[elIdxName] === null)
        window[elIdxName] = 5;
    window[elIdxName]++;


    if (returnMode) {
        let returnTpl = document.createElement("template");
        returnTpl.setAttribute("_kaidx", (window[elIdxName]).toString())
        /* @var {HTMLTemplateElement} returnTpl */
        returnTpl.innerHTML = elem.innerHTML
            .replace(/\[\[(.*?)\]\]/g, (matches, m1) => `<span ka.textContent="${quoteattr(m1)}"></span>`);

        ka_templatify(returnTpl.content, false);
        return returnTpl;
    }

    if (elem instanceof HTMLTemplateElement)
        elem = elem.content;




    let wrapElem = (el, attName, attVal) => {
        let tpl = document.createElement("template");
        tpl.setAttribute("_kaidx", (window[elIdxName]).toString())
        let clonedEl = el.cloneNode(true);
        clonedEl.removeAttribute(attName);
        tpl.content.append(clonedEl);
        tpl.setAttribute(attName, attVal);
        el.replaceWith(tpl);
        return tpl;
    }

    ;(0,_core_elwalk_js__WEBPACK_IMPORTED_MODULE_1__.ka_elwalk)(elem, (el) => {
        //console.log(el);
        if ( ! (el instanceof HTMLElement))
            return;
        let tpl = null;
        for (let attrName of el.getAttributeNames()) {
            if (attrName === "ka.for") {
                tpl = wrapElem(el, "ka.for", el.getAttribute("ka.for"));
                ka_templatify(tpl, false);
                break;
            }
            if (attrName === "ka.if") {
                tpl = wrapElem(el, "ka.if", el.getAttribute("ka.if"));
                ka_templatify(tpl, false);
                break;
            }
        }
    }, true, false);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./docs/_src/index.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ "./index.ts");



})();

/******/ })()
;
//# sourceMappingURL=index.js.map