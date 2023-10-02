/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dev.ts":
/*!****************!*\
  !*** ./dev.ts ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle_dev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle-dev */ "./workspaces/jodastyle-dev/index.ts");
/* harmony import */ var _src_dev_index_dev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src.dev/index-dev */ "./src.dev/index-dev.ts");




/***/ }),

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

/***/ "./node_modules/@kasimirjs/embed/dist/ce/custom-element.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/ce/custom-element.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaCustomElement: () => (/* binding */ KaCustomElement)
/* harmony export */ });
/* harmony import */ var _tpl_templatify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tpl/templatify.js */ "./node_modules/@kasimirjs/embed/dist/tpl/templatify.js");
/* harmony import */ var _tpl_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tpl/template.js */ "./node_modules/@kasimirjs/embed/dist/tpl/template.js");
/* harmony import */ var _core_query_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/query-select */ "./node_modules/@kasimirjs/embed/dist/core/query-select.js");
/* harmony import */ var _htmlFile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./htmlFile */ "./node_modules/@kasimirjs/embed/dist/ce/htmlFile.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




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
    get $tpl() {
        return this.__tpl;
    }
    isConnected() {
        return this.isConnected;
    }
    /**
     * @abstract
     * @return {Promise<void>}
     */
    connected($tpl, $this) {
        return __awaiter(this, void 0, void 0, function* () {
            console.warn("connected() method not overridden in", this);
        });
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            let callback = this.constructor.__callback;
            if (callback === null) {
            }
            else {
                callback.bind(this);
            }
            if (this.constructor.__tpl !== null) {
                let origTpl = this.constructor.__tpl;
                if (origTpl instanceof _htmlFile__WEBPACK_IMPORTED_MODULE_3__.RemoteTemplate)
                    origTpl = yield origTpl.load();
                let tpl = (0,_tpl_templatify_js__WEBPACK_IMPORTED_MODULE_0__.ka_templatify)(origTpl);
                if (this.constructor.__options.shadowDom === true) {
                    let shadowDom = this.attachShadow(this.constructor.__options.shadowDomOptions);
                    shadowDom.appendChild(tpl);
                }
                else {
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
                target.addEventListener(eventName, (event) => __awaiter(this, void 0, void 0, function* () {
                    callback(this.$tpl, this);
                    this.__isConnected = true;
                }));
                return;
            }
            if (callback === null) {
                // Class: Call connected() Method
                yield this.connected(this.$tpl, this);
                this.__isConnected = true;
                return;
            }
            // Function
            callback(this.$tpl, this);
            this.__isConnected = true;
        });
    }
}
;


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/ce/html.js":
/*!*******************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/ce/html.js ***!
  \*******************************************************/
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

/***/ "./node_modules/@kasimirjs/embed/dist/ce/htmlFile.js":
/*!***********************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/ce/htmlFile.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemoteTemplate: () => (/* binding */ RemoteTemplate)
/* harmony export */ });
/* harmony import */ var _loadHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadHtml */ "./node_modules/@kasimirjs/embed/dist/ce/loadHtml.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
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
        return __awaiter(this, void 0, void 0, function* () {
            if (this.tpl === null)
                this.tpl = yield (0,_loadHtml__WEBPACK_IMPORTED_MODULE_0__.ka_load_html)(this.url);
            return this.tpl;
        });
    }
}
/**
 * Load the Template on usage from remote location
 *
 *
 * @param url {string}
 * @return {RemoteTemplate}
 */
function htmlUrl(url) {
    return new RemoteTemplate(url);
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/ce/loadHtml.js":
/*!***********************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/ce/loadHtml.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_load_html: () => (/* binding */ ka_load_html)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 *
 * @param url {string}
 * @return {Promise<HTMLTemplateElement>}
 */
function ka_load_html(url) {
    return __awaiter(this, void 0, void 0, function* () {
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

/***/ "./node_modules/@kasimirjs/embed/dist/core/apply.js":
/*!**********************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/core/apply.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_apply: () => (/* binding */ ka_apply)
/* harmony export */ });
/* harmony import */ var _eval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eval.js */ "./node_modules/@kasimirjs/embed/dist/core/eval.js");
/* harmony import */ var _str_to_camelcase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./str-to-camelcase.js */ "./node_modules/@kasimirjs/embed/dist/core/str-to-camelcase.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions */ "./node_modules/@kasimirjs/embed/dist/functions.js");
/* harmony import */ var _element_KaCustomFragment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../element/KaCustomFragment */ "./node_modules/@kasimirjs/embed/dist/element/KaCustomFragment.js");
/* harmony import */ var _element_ka_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../element/ka-use */ "./node_modules/@kasimirjs/embed/dist/element/ka-use.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function ka_apply(selector, scope, recursive = false) {
    var _a;
    if (typeof selector === "string")
        selector = KaToolsV1.querySelector(selector);
    let attMap = {
        "textcontent": "textContent",
        "htmlcontent": "innerHTML",
        "innerhtml": "innerHTML",
    };
    for (let attName of selector.getAttributeNames()) {
        //console.log(attName);
        if (!attName.startsWith("ka.")) {
            continue;
        }
        let attVal = selector.getAttribute(attName);
        let attType = attName.split(".")[1];
        let attSelector = attName.split(".")[2];
        if (typeof attSelector === "undefined")
            attSelector = null;
        let registerEventHandler = function (element, action, callbackOrCode, scope) {
            if (typeof element._ka_on === "undefined")
                element._ka_on = {};
            if (typeof element._ka_on[action] === "undefined")
                element.addEventListener(action, (e) => element._ka_on[action](e));
            element._ka_on[action] = (e) => __awaiter(this, void 0, void 0, function* () {
                scope["$event"] = e;
                if (typeof callbackOrCode === "function") {
                    return callbackOrCode(e, element, scope);
                }
                else {
                    return (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(callbackOrCode, scope, element);
                }
            });
        };
        if (attType === "on") {
            let attScope = Object.assign({ $scope: scope }, scope);
            if (attSelector !== null) {
                registerEventHandler(selector, attSelector, attVal, attScope);
            }
            else {
                let callBackMap = KaToolsV1.eval(attVal, attScope, selector);
                for (let curAction in callBackMap) {
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
                if (!(selector instanceof _element_ka_use__WEBPACK_IMPORTED_MODULE_4__.KaUse)) {
                    let elem = new _element_ka_use__WEBPACK_IMPORTED_MODULE_4__.KaUse();
                    // Copy all attributes from selector to elem
                    for (let attName of selector.getAttributeNames()) {
                        elem.setAttribute(attName, selector.getAttribute(attName));
                    }
                    selector.replaceWith(elem);
                    selector = elem;
                }
                selector.use(r, scope);
                continue;
            case "become":
                if (!(r instanceof HTMLElement)) {
                    console.error("ka.become is only available on HTMLElements: Used on ", r, "found in ", selector);
                    throw "ka.become called on non HTMLElement.";
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
                if (!(r instanceof HTMLElement)) {
                    console.error("ka.content is only available on HTMLElements: Used on ", r, "found in ", selector);
                    throw "ka.content called on non HTMLElement.";
                }
                selector.append(r);
                continue;
            case "scope":
                if (!(r instanceof Object)) {
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
                if (attSelector !== null) {
                    if (r === true) {
                        selector.classList.add(attSelector);
                    }
                    else {
                        selector.classList.remove(attSelector);
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
                    }
                    else {
                        selector.classList.remove(cname);
                    }
                }
                break;
            case "style":
                if (attSelector !== null && attSelector.startsWith("--")) {
                    selector.style.setProperty(attSelector, r);
                    break;
                }
                if (attSelector !== null) {
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
                        scope = Object.assign({ $scope: scope }, scope);
                        scope = Object.assign(Object.assign({ $scope: scope }, scope), { __curVal: (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(selector.getAttribute("ka.bind.default"), scope, selector) });
                        (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(`${attVal} = __curVal`, scope, selector);
                        r = scope.__curVal;
                    }
                }
                if (!Array.isArray(r)) {
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
                        if (arr.indexOf(selector.value) !== -1 && !selector.checked)
                            arr = arr.filter((e) => e !== selector.value);
                        scope = Object.assign(Object.assign({ $scope: scope }, scope), { __curVal: arr });
                        (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(`${attVal} = __curVal`, scope, selector);
                        if (scope.$on && scope.$on.change)
                            scope.$on.change(event);
                    });
                    selector._kap_bind = true;
                }
                break;
            case "bind":
                if (attSelector === "default")
                    continue;
                if ((0,_functions__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(r)) {
                    // Bind default values
                    if ((0,_functions__WEBPACK_IMPORTED_MODULE_2__.isset)(selector.value)) {
                        scope = Object.assign(Object.assign({ $scope: scope }, scope), { __curVal: selector.value });
                        (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(`${attVal} = __curVal`, scope, selector);
                        r = scope.__curVal;
                    }
                    if (selector.hasAttribute("ka.bind.default")) {
                        scope = Object.assign({ $scope: scope }, scope);
                        scope = Object.assign(Object.assign({ $scope: scope }, scope), { __curVal: (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(selector.getAttribute("ka.bind.default"), scope, selector) });
                        (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(`${attVal} = __curVal`, scope, selector);
                        r = scope.__curVal;
                    }
                }
                if (selector.type === "checkbox" || selector.type === "radio") {
                    if (selector.hasAttribute("value")) {
                        if (r === selector.getAttribute("value"))
                            selector.checked = true;
                        else
                            selector.checked = false;
                    }
                    else {
                        if (r === true)
                            selector.checked = true;
                        else
                            selector.checked = false;
                    }
                }
                else {
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
                            }
                            else {
                                value = selector.checked;
                            }
                        }
                        else {
                            value = selector.value;
                        }
                        scope = Object.assign(Object.assign({ $scope: scope }, scope), { __curVal: value });
                        (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(`${attVal} = __curVal`, scope, selector);
                        if (scope.$on && scope.$on.change)
                            scope.$on.change(event);
                    });
                    selector.addEventListener("keyup", (event) => {
                        scope = Object.assign(Object.assign({ $scope: scope }, scope), { __curVal: selector.value });
                        (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(`${attVal} = __curVal`, scope, selector);
                        if (scope.$on && scope.$on.change)
                            scope.$on.change(event);
                    });
                    selector._kap_bind = true;
                }
                break;
            case "options":
                let value = selector.value;
                selector.innerHTML = "";
                for (let option in r) {
                    if (!Array.isArray(r)) {
                        // Object key => value value => text
                        selector.appendChild(new Option(r[option], option));
                    }
                    else {
                        // Array
                        if (((_a = r[option]) === null || _a === void 0 ? void 0 : _a.text) !== undefined) {
                            selector.appendChild(new Option(r[option].text, r[option].value));
                        }
                        else {
                            // Array value and text will be array value
                            selector.appendChild(new Option(r[option], r[option]));
                        }
                    }
                }
                if (value !== null)
                    selector.value = value;
                break;
            case "attr":
                if (attSelector !== null) {
                    if (r === null || r === false) {
                        selector.removeAttribute(attSelector);
                    }
                    else {
                        selector.setAttribute(attSelector, r);
                    }
                    break;
                }
                for (let cname in r) {
                    if (r[cname] === null || r[cname] === false) {
                        selector.removeAttribute(cname);
                    }
                    else {
                        selector.setAttribute(cname, r[cname]);
                    }
                }
                break;
            case "prop":
                if (attSelector !== null) {
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

/***/ "./node_modules/@kasimirjs/embed/dist/core/create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/core/create-element.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_create_element: () => (/* binding */ ka_create_element)
/* harmony export */ });
/**
 * Create a new Element
 *
 * @param tagName {string}      The Tag Name
 * @param attributes {string<string>}   Attributes to set initially
 * @param appendToElement {HTMLElement}
 * @param children {HTMLElement[]}
 * @return HTMLElement
 */
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

/***/ "./node_modules/@kasimirjs/embed/dist/core/debounce.js":
/*!*************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/core/debounce.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_debounce: () => (/* binding */ ka_debounce)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const _debounceInterval = { i: null, time: null };
/**
 * Debounce a event
 *
 *
 *
 * @param min   Minimum Time to wait
 * @param max   Trigger event automatically after this time
 * @return {Promise<unknown>}
 */
function ka_debounce(min, max = null) {
    return __awaiter(this, void 0, void 0, function* () {
        if (max === null)
            max = min;
        let dbi = _debounceInterval;
        return new Promise((resolve) => {
            if (dbi.time < (+new Date()) - max && dbi.i !== null) {
                return resolve();
            }
            if (dbi.i !== null) {
                return;
            }
            dbi.time = (+new Date());
            dbi.i = window.setTimeout(() => {
                dbi.i = null;
                return resolve();
            }, min);
        });
    });
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/core/debouncer.js":
/*!**************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/core/debouncer.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Debouncer: () => (/* binding */ Debouncer)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Debouncer_resolve, _Debouncer_interval, _Debouncer_time;
class Debouncer {
    constructor(min = 100, max = null) {
        this.min = min;
        this.max = max;
        _Debouncer_resolve.set(this, []);
        _Debouncer_interval.set(this, null);
        _Debouncer_time.set(this, null);
    }
    debounce(min = this.min, max = this.max) {
        return __awaiter(this, void 0, void 0, function* () {
            if (max === null)
                max = min;
            if (__classPrivateFieldGet(this, _Debouncer_interval, "f") !== null) {
                window.clearInterval(__classPrivateFieldGet(this, _Debouncer_interval, "f"));
            }
            __classPrivateFieldSet(this, _Debouncer_interval, window.setInterval(() => {
                __classPrivateFieldGet(this, _Debouncer_resolve, "f").forEach(r => r());
                __classPrivateFieldSet(this, _Debouncer_resolve, [], "f");
                window.clearInterval(__classPrivateFieldGet(this, _Debouncer_interval, "f"));
            }, min), "f");
            return new Promise((resolve) => {
                __classPrivateFieldGet(this, _Debouncer_resolve, "f").push(resolve);
            });
        });
    }
}
_Debouncer_resolve = new WeakMap(), _Debouncer_interval = new WeakMap(), _Debouncer_time = new WeakMap();


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/core/dom-ready.js":
/*!**************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/core/dom-ready.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_dom_ready: () => (/* binding */ ka_dom_ready)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Wait for DomContentLoaded or resolve immediate
 *
 * <example>
 * await MicxToolsVx.domReady();
 * </example>
 *
 * @return {Promise<string>}
 */
function ka_dom_ready() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            if (document.readyState === "complete" || document.readyState === "interactive")
                return resolve("loaded");
            document.addEventListener("DOMContentLoaded", () => resolve('DOMContentLoaded'));
        });
    });
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/core/elwalk.js":
/*!***********************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/core/elwalk.js ***!
  \***********************************************************/
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
function ka_elwalk(elem, fn, recursive = false, includeFirst = false) {
    if (Array.isArray(elem))
        elem.children = elem;
    if (typeof elem.children === "undefined")
        return;
    if (includeFirst && elem instanceof HTMLElement) {
        let ret = fn(elem);
        if (ret === false)
            return false;
    }
    for (let child of elem.children) {
        let ret = fn(child);
        if (ret === false)
            continue; // No recursiion
        if (recursive && typeof child.children !== "undefined")
            ka_elwalk(child, fn, recursive);
    }
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/core/eval.js":
/*!*********************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/core/eval.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_eval: () => (/* binding */ ka_eval)
/* harmony export */ });
function ka_eval(stmt, __scope, e, __refs) {
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
        r += `var ${__name} = __scope['${__name}'];`;
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
    }
    catch (ex) {
        console.error("cannot eval() stmt: '" + stmt + "': " + ex, " on element ", e, ex, "(context:", __scope, ")");
        throw "eval('" + stmt + "') failed: " + ex;
    }
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/core/ka-set-options.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/core/ka-set-options.js ***!
  \*******************************************************************/
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
        }
        else {
            if (typeof options[option].text !== "undefined") {
                element.appendChild(new Option(options[option].text, options[option].value));
            }
            else {
                element.appendChild(new Option(options[option], options[option]));
            }
        }
    }
    if (value !== null)
        element.value = value;
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/core/query-select.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/core/query-select.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_query_selector: () => (/* binding */ ka_query_selector)
/* harmony export */ });
/**
 * Query a Element or trigger an Exception
 *
 * @param query
 * @param parent
 * @param exception
 * @return {HTMLElement}
 */
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

/***/ "./node_modules/@kasimirjs/embed/dist/core/sleep.js":
/*!**********************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/core/sleep.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_sleep: () => (/* binding */ ka_sleep)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function ka_sleep(sleepms) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            window.setTimeout(() => {
                return resolve();
            }, sleepms);
        });
    });
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/core/storage.js":
/*!************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/core/storage.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_session_storage: () => (/* binding */ ka_session_storage)
/* harmony export */ });
/**
 * Return a Proxy handling saving / deleting / updating the object in the localStorage
 * @param object
 * @param scopeName
 */
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
        set: function (target, property, value, receiver) {
            target[property] = value;
            sessionStorage.setItem(scopeName, JSON.stringify(target));
            return true;
        }
    });
    return proxy;
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/core/str-to-camelcase.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/core/str-to-camelcase.js ***!
  \*********************************************************************/
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
function ka_str_to_camel_case(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (ltr, idx) => idx === 0 ? ltr.toLowerCase() : ltr.toUpperCase()).replace(/[^a-zA-Z0-9]+/g, '');
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/element/KaCustomElement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/element/KaCustomElement.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaCustomElement: () => (/* binding */ KaCustomElement)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./node_modules/@kasimirjs/embed/dist/types.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./node_modules/@kasimirjs/embed/dist/functions.js");
/* harmony import */ var _tpl_templatify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tpl/templatify */ "./node_modules/@kasimirjs/embed/dist/tpl/templatify.js");
/* harmony import */ var _ce_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ce/html */ "./node_modules/@kasimirjs/embed/dist/ce/html.js");
/* harmony import */ var _tpl_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tpl/template */ "./node_modules/@kasimirjs/embed/dist/tpl/template.js");
/* harmony import */ var _core_create_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/create-element */ "./node_modules/@kasimirjs/embed/dist/core/create-element.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






class ShadowRootConfig {
    constructor() {
        this.mode = null; // Default null: No shadowRoot
        this.stylesheets = [];
    }
}
class KaCustomElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this.__ka_stop_render = true; // Stop rendering if this element is reached
        this.shadowRootConfig = new ShadowRootConfig(); // Activate shadowRoot
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
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.scope.isInitialized())
                this.init({});
            // Check template set by customElement annotation
            // Cannot be done in constructor because of async behavior
            if ((0,_functions__WEBPACK_IMPORTED_MODULE_1__.isset)(this.constructor["html"])) {
                this.html = this.constructor["html"];
            }
            if (this.tplPrototype === null) {
                this.tplPrototype = (0,_tpl_templatify__WEBPACK_IMPORTED_MODULE_2__.ka_templatify)((0,_ce_html__WEBPACK_IMPORTED_MODULE_3__.ka_html)(this.html));
            }
            this.tpl = this.tplPrototype.cloneNode(true);
            this.scope.$tpl = new _tpl_template__WEBPACK_IMPORTED_MODULE_4__.KaTemplate(this.tpl);
            // Adding Shadow Root
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
            }
            else {
                domRoot.append(this.tpl);
            }
            this.scope.render();
        });
    }
    disconnectedCallback() {
        if (this.scope.$tpl !== undefined)
            this.scope.$tpl.dispose();
    }
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/element/KaCustomFragment.js":
/*!************************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/element/KaCustomFragment.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaCustomFragment: () => (/* binding */ KaCustomFragment)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./node_modules/@kasimirjs/embed/dist/types.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./node_modules/@kasimirjs/embed/dist/functions.js");
/* harmony import */ var _tpl_templatify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tpl/templatify */ "./node_modules/@kasimirjs/embed/dist/tpl/templatify.js");
/* harmony import */ var _ce_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ce/html */ "./node_modules/@kasimirjs/embed/dist/ce/html.js");
/* harmony import */ var _tpl_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tpl/template */ "./node_modules/@kasimirjs/embed/dist/tpl/template.js");
/* harmony import */ var _core_sleep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/sleep */ "./node_modules/@kasimirjs/embed/dist/core/sleep.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






class KaCustomFragment {
    constructor() {
        this.scope = (0,_types__WEBPACK_IMPORTED_MODULE_0__.createScopeObject)();
        this.html = null;
    }
    init(scope) {
        // Check template set by customElement annotation
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
        return __awaiter(this, void 0, void 0, function* () {
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

/***/ "./node_modules/@kasimirjs/embed/dist/element/KaCustomModal.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/element/KaCustomModal.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaCustomModal: () => (/* binding */ KaCustomModal)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./node_modules/@kasimirjs/embed/dist/types.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./node_modules/@kasimirjs/embed/dist/functions.js");
/* harmony import */ var _tpl_templatify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tpl/templatify */ "./node_modules/@kasimirjs/embed/dist/tpl/templatify.js");
/* harmony import */ var _ce_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ce/html */ "./node_modules/@kasimirjs/embed/dist/ce/html.js");
/* harmony import */ var _core_create_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/create-element */ "./node_modules/@kasimirjs/embed/dist/core/create-element.js");
/* harmony import */ var _tpl_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tpl/template */ "./node_modules/@kasimirjs/embed/dist/tpl/template.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _KaCustomModal_main, _KaCustomModal_configDefaults, _KaCustomModal_promise;






class KaCustomModal {
    adjustWidth(modalConfig) {
        let w = window.innerWidth;
        if (w > modalConfig.maxWidth)
            w = modalConfig.maxWidth;
        __classPrivateFieldGet(this, _KaCustomModal_main, "f").style.width = w + "px";
    }
    constructor(tagName = "ka-modal", shadowRootInit = null, modalConfig = {}) {
        this.scope = (0,_types__WEBPACK_IMPORTED_MODULE_0__.createScopeObject)();
        this.__html = "<div>No Template defined</div>";
        _KaCustomModal_main.set(this, void 0);
        _KaCustomModal_configDefaults.set(this, {
            parentElement: document.body,
            zIndex: 9999,
            styleBase: "position:fixed; top:0; bottom:0; left:0; right:0;",
            styleBackdrop: "background-color: #999;opacity:0.5;",
            maxWidth: 800,
        });
        _KaCustomModal_promise.set(this, {
            promise: null,
            reject: null,
            resolve: null,
        });
        let config = __classPrivateFieldGet(this, _KaCustomModal_configDefaults, "f");
        config = Object.assign(Object.assign({}, config), modalConfig);
        this.element = (0,_core_create_element__WEBPACK_IMPORTED_MODULE_4__.ka_create_element)(tagName, { hidden: "hidden" }, null, config.parentElement);
        this.backdrop = (0,_core_create_element__WEBPACK_IMPORTED_MODULE_4__.ka_create_element)("div", { style: `${config.styleBase};${config.styleBackdrop};z-index:${config.zIndex};` }, null, this.element);
        let master = (0,_core_create_element__WEBPACK_IMPORTED_MODULE_4__.ka_create_element)("div", { style: `position:fixed;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;z-index:${config.zIndex + 1};` }, null, this.element);
        __classPrivateFieldSet(this, _KaCustomModal_main, (0,_core_create_element__WEBPACK_IMPORTED_MODULE_4__.ka_create_element)("div", { style: `;max-height:100%;max-width:100%;` }, null, master), "f");
        this.adjustWidth(config);
        __classPrivateFieldGet(this, _KaCustomModal_promise, "f").promise = new Promise((resolve, reject) => { __classPrivateFieldGet(this, _KaCustomModal_promise, "f").resolve = resolve; __classPrivateFieldGet(this, _KaCustomModal_promise, "f").reject = reject; });
    }
    init(scope) {
        // Check template set by customElement annotation
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
        __classPrivateFieldGet(this, _KaCustomModal_promise, "f").resolve(value);
    }
    show(...params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.scope.isInitialized()) {
                this.init({});
            }
            this.tpl = this.tplPrototype.cloneNode(true);
            this.scope.$tpl = new _tpl_template__WEBPACK_IMPORTED_MODULE_5__.KaTemplate(this.tpl);
            __classPrivateFieldGet(this, _KaCustomModal_main, "f").append(this.tpl);
            this.element.removeAttribute("hidden");
            this.scope.render();
            return __classPrivateFieldGet(this, _KaCustomModal_promise, "f").promise;
        });
    }
    fragmentDisconnectedCallback() {
        this.scope.$tpl.dispose();
    }
}
_KaCustomModal_main = new WeakMap(), _KaCustomModal_configDefaults = new WeakMap(), _KaCustomModal_promise = new WeakMap();


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/element/KaCustomWrapper.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/element/KaCustomWrapper.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaCustomWrapper: () => (/* binding */ KaCustomWrapper)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./node_modules/@kasimirjs/embed/dist/types.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./node_modules/@kasimirjs/embed/dist/functions.js");
/* harmony import */ var _tpl_templatify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tpl/templatify */ "./node_modules/@kasimirjs/embed/dist/tpl/templatify.js");
/* harmony import */ var _ce_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ce/html */ "./node_modules/@kasimirjs/embed/dist/ce/html.js");
/* harmony import */ var _tpl_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tpl/template */ "./node_modules/@kasimirjs/embed/dist/tpl/template.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class KaCustomWrapper {
    constructor() {
        this.scope = (0,_types__WEBPACK_IMPORTED_MODULE_0__.createScopeObject)();
        this.html = null;
    }
    init(scope) {
        // Check template set by customElement annotation
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
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.scope.isInitialized()) {
                this.init({});
            }
            this.returnedTpl = this.tplPrototype;
            this.tpl = this.tplPrototype.cloneNode(true);
            this.scope.$tpl = new _tpl_template__WEBPACK_IMPORTED_MODULE_4__.KaTemplate(this.tpl);
        });
    }
    wrapFinish() {
        return __awaiter(this, void 0, void 0, function* () {
            this.scope.render();
        });
    }
    fragmentDisconnectedCallback() {
        this.scope.$tpl.dispose();
    }
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/element/KaHtmlElement.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/element/KaHtmlElement.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaHtmlElement: () => (/* binding */ KaHtmlElement)
/* harmony export */ });
/* harmony import */ var _tpl_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tpl/template */ "./node_modules/@kasimirjs/embed/dist/tpl/template.js");
/* harmony import */ var _tpl_templatify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tpl/templatify */ "./node_modules/@kasimirjs/embed/dist/tpl/templatify.js");
/* harmony import */ var _ce_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ce/html */ "./node_modules/@kasimirjs/embed/dist/ce/html.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions */ "./node_modules/@kasimirjs/embed/dist/functions.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * @deprecated
 */
class KaHtmlElement extends HTMLElement {
    constructor(shadowRootInit = null) {
        super();
        this.shadowRootInit = shadowRootInit;
        this.addEventListener("load", (e) => console.log(e));
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            let htmlTpl = null;
            if (typeof this.html === "function") {
                let fn = this.html;
                htmlTpl = yield fn(this);
            }
            else {
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
                }
                catch (e) {
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
        return __awaiter(this, void 0, void 0, function* () {
            this.$tpl.dispose();
            this.disconnected();
        });
    }
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/element/KaModal.js":
/*!***************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/element/KaModal.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaModal: () => (/* binding */ KaModal)
/* harmony export */ });
/* harmony import */ var _tpl_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tpl/template */ "./node_modules/@kasimirjs/embed/dist/tpl/template.js");
/* harmony import */ var _core_create_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/create-element */ "./node_modules/@kasimirjs/embed/dist/core/create-element.js");
/* harmony import */ var _ce_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ce/html */ "./node_modules/@kasimirjs/embed/dist/ce/html.js");
/* harmony import */ var _tpl_templatify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tpl/templatify */ "./node_modules/@kasimirjs/embed/dist/tpl/templatify.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types */ "./node_modules/@kasimirjs/embed/dist/types.js");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _KaModal_main, _KaModal_configDefaults, _KaModal_promise;





class KaModal {
    adjustWidth(modalConfig) {
        let w = window.innerWidth;
        if (w > modalConfig.maxWidth)
            w = modalConfig.maxWidth;
        __classPrivateFieldGet(this, _KaModal_main, "f").style.width = w + "px";
    }
    constructor(tagName = "ka-modal", shadowRootInit = null, modalConfig = {}) {
        this.scope = (0,_types__WEBPACK_IMPORTED_MODULE_4__.createScopeObject)();
        _KaModal_main.set(this, void 0);
        this.$tpl = null;
        _KaModal_configDefaults.set(this, {
            parentElement: document.body,
            zIndex: 9999,
            styleBase: "position:fixed; top:0; bottom:0; left:0; right:0;",
            styleBackdrop: "background-color: #999;opacity:0.5;",
            maxWidth: 800,
        });
        _KaModal_promise.set(this, {
            promise: null,
            reject: null,
            resolve: null,
        });
        let config = __classPrivateFieldGet(this, _KaModal_configDefaults, "f");
        config = Object.assign(Object.assign({}, config), modalConfig);
        this.element = (0,_core_create_element__WEBPACK_IMPORTED_MODULE_1__.ka_create_element)(tagName, { hidden: "hidden" }, null, config.parentElement);
        this.backdrop = (0,_core_create_element__WEBPACK_IMPORTED_MODULE_1__.ka_create_element)("div", { style: `${config.styleBase};${config.styleBackdrop};z-index:${config.zIndex};` }, null, this.element);
        let master = (0,_core_create_element__WEBPACK_IMPORTED_MODULE_1__.ka_create_element)("div", { style: `position:fixed;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;z-index:${config.zIndex + 1};` }, null, this.element);
        __classPrivateFieldSet(this, _KaModal_main, (0,_core_create_element__WEBPACK_IMPORTED_MODULE_1__.ka_create_element)("div", { style: `;max-height:100%;max-width:100%;` }, null, master), "f");
        this.adjustWidth(config);
        __classPrivateFieldGet(this, _KaModal_promise, "f").promise = new Promise((resolve, reject) => { __classPrivateFieldGet(this, _KaModal_promise, "f").resolve = resolve; __classPrivateFieldGet(this, _KaModal_promise, "f").reject = reject; });
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
            }
            catch (e) {
                console.log("error templatify for element", this, ":", e);
                throw e;
            }
            __classPrivateFieldGet(this, _KaModal_main, "f").appendChild(elem);
            this.$tpl = new _tpl_template__WEBPACK_IMPORTED_MODULE_0__.KaTemplate(elem);
        }
        this.$tpl.render(scope);
    }
    resolve(value) {
        this.element.remove();
        __classPrivateFieldGet(this, _KaModal_promise, "f").resolve(value);
    }
    show(...params) {
        this.element.removeAttribute("hidden");
        return __classPrivateFieldGet(this, _KaModal_promise, "f").promise;
    }
}
_KaModal_main = new WeakMap(), _KaModal_configDefaults = new WeakMap(), _KaModal_promise = new WeakMap();


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/element/ka-use.js":
/*!**************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/element/ka-use.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaUse: () => (/* binding */ KaUse)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./node_modules/@kasimirjs/embed/dist/functions.js");
/* harmony import */ var _KaCustomFragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KaCustomFragment */ "./node_modules/@kasimirjs/embed/dist/element/KaCustomFragment.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let KaUse = class KaUse extends HTMLElement {
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
        // If not specified scope is the parent scope.
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
KaUse = __decorate([
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.customElement)("ka-use-" + (0,_functions__WEBPACK_IMPORTED_MODULE_0__.random_string)().toLowerCase())
], KaUse);



/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/functions.js":
/*!*********************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/functions.js ***!
  \*********************************************************/
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
/* harmony import */ var _core_sleep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/sleep */ "./node_modules/@kasimirjs/embed/dist/core/sleep.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Check if parameter is undefined or null
 *
 * @param input
 */
function isset(input) {
    return (typeof input !== "undefined" && input !== null);
}
function isUndefined(input) {
    return (typeof input === "undefined");
}
/**
 * Defines a customElement
 *
 * Usage as class decorator @customElement("some-tag")
 *
 * @param tagName
 */
function customElement(tagName, template = null) {
    return function (classOrDescriptor) {
        if (template !== null) {
            classOrDescriptor["html"] = template;
        }
        //console.debug("registering custom element", classOrDescriptor, tagName);
        customElements.define(tagName, classOrDescriptor);
        return classOrDescriptor;
    };
}
function ka_await_element(selector, parent = document, maxWait = 2000) {
    return __awaiter(this, void 0, void 0, function* () {
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
function template(template) {
    return function (classOrDescriptor) {
        classOrDescriptor["html"] = template;
        return classOrDescriptor;
    };
}
function random_string(len = 12) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < len; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/index.js ***!
  \*****************************************************/
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
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./node_modules/@kasimirjs/embed/dist/functions.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./node_modules/@kasimirjs/embed/dist/types.js");
/* harmony import */ var _core_sleep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/sleep */ "./node_modules/@kasimirjs/embed/dist/core/sleep.js");
/* harmony import */ var _core_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/debounce */ "./node_modules/@kasimirjs/embed/dist/core/debounce.js");
/* harmony import */ var _core_create_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/create-element */ "./node_modules/@kasimirjs/embed/dist/core/create-element.js");
/* harmony import */ var _core_ka_set_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/ka-set-options */ "./node_modules/@kasimirjs/embed/dist/core/ka-set-options.js");
/* harmony import */ var _core_dom_ready__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/dom-ready */ "./node_modules/@kasimirjs/embed/dist/core/dom-ready.js");
/* harmony import */ var _element_KaHtmlElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./element/KaHtmlElement */ "./node_modules/@kasimirjs/embed/dist/element/KaHtmlElement.js");
/* harmony import */ var _element_KaCustomElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./element/KaCustomElement */ "./node_modules/@kasimirjs/embed/dist/element/KaCustomElement.js");
/* harmony import */ var _element_KaCustomFragment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./element/KaCustomFragment */ "./node_modules/@kasimirjs/embed/dist/element/KaCustomFragment.js");
/* harmony import */ var _element_KaCustomWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./element/KaCustomWrapper */ "./node_modules/@kasimirjs/embed/dist/element/KaCustomWrapper.js");
/* harmony import */ var _element_KaCustomModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./element/KaCustomModal */ "./node_modules/@kasimirjs/embed/dist/element/KaCustomModal.js");
/* harmony import */ var _tpl_template__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tpl/template */ "./node_modules/@kasimirjs/embed/dist/tpl/template.js");
/* harmony import */ var _element_KaModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./element/KaModal */ "./node_modules/@kasimirjs/embed/dist/element/KaModal.js");
/* harmony import */ var _core_query_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/query-select */ "./node_modules/@kasimirjs/embed/dist/core/query-select.js");
/* harmony import */ var _core_eval__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/eval */ "./node_modules/@kasimirjs/embed/dist/core/eval.js");
/* harmony import */ var _ce_html__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ce/html */ "./node_modules/@kasimirjs/embed/dist/ce/html.js");
/* harmony import */ var _tpl_templatify__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tpl/templatify */ "./node_modules/@kasimirjs/embed/dist/tpl/templatify.js");
/* harmony import */ var _core_debouncer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/debouncer */ "./node_modules/@kasimirjs/embed/dist/core/debouncer.js");
/* harmony import */ var _core_storage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/storage */ "./node_modules/@kasimirjs/embed/dist/core/storage.js");






















/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/tpl/template.js":
/*!************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/tpl/template.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaTemplate: () => (/* binding */ KaTemplate)
/* harmony export */ });
/* harmony import */ var _core_eval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/eval.js */ "./node_modules/@kasimirjs/embed/dist/core/eval.js");
/* harmony import */ var _core_elwalk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/elwalk.js */ "./node_modules/@kasimirjs/embed/dist/core/elwalk.js");
/* harmony import */ var _core_apply_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/apply.js */ "./node_modules/@kasimirjs/embed/dist/core/apply.js");
/* harmony import */ var _ce_custom_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ce/custom-element.js */ "./node_modules/@kasimirjs/embed/dist/ce/custom-element.js");




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
            let curScope = Object.assign({ $scope: $scope }, $scope);
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
        for (let remIdx = eIndex; remIdx < this.template.__kachilds.length;) {
            this._removeLastChild();
        }
    }
    _maintain($scope, childs, forIndex = 0) {
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
                if ((el instanceof HTMLElement && el.hasAttribute("ka.stop")) || el["__ka_stop_render"]) {
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
        }
        else {
            this._removeLastChild();
        }
    }
    /**
     * Remove all rendered element
     */
    dispose() {
        for (; this.template.__kachilds.length > 0;)
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
        }
        else if (this.template.hasAttribute("ka.if")) {
            this._renderIf($scope, this.template.getAttribute("ka.if"));
        }
        else {
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
}
;


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/tpl/templatify.js":
/*!**************************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/tpl/templatify.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_templatify: () => (/* binding */ ka_templatify)
/* harmony export */ });
/* harmony import */ var _core_query_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/query-select */ "./node_modules/@kasimirjs/embed/dist/core/query-select.js");
/* harmony import */ var _core_elwalk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/elwalk.js */ "./node_modules/@kasimirjs/embed/dist/core/elwalk.js");


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
function ka_templatify(elem, returnMode = true) {
    if (typeof elem === "string")
        elem = (0,_core_query_select__WEBPACK_IMPORTED_MODULE_0__.ka_query_selector)(elem);
    if (!(elem instanceof Node)) {
        console.error("[ka-templatify] Parameter 1 is not a html element: ", elem);
        throw `[ka-templify] Parameter 1 is not a html element: ${elem}`;
    }
    const elIdxName = "_ka_el_idx";
    if (window[elIdxName] === null)
        window[elIdxName] = 5;
    window[elIdxName]++;
    if (returnMode) {
        let returnTpl = document.createElement("template");
        returnTpl.setAttribute("_kaidx", (window[elIdxName]).toString());
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
        tpl.setAttribute("_kaidx", (window[elIdxName]).toString());
        let clonedEl = el.cloneNode(true);
        clonedEl.removeAttribute(attName);
        tpl.content.append(clonedEl);
        tpl.setAttribute(attName, attVal);
        el.replaceWith(tpl);
        return tpl;
    };
    (0,_core_elwalk_js__WEBPACK_IMPORTED_MODULE_1__.ka_elwalk)(elem, (el) => {
        //console.log(el);
        if (!(el instanceof HTMLElement))
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


/***/ }),

/***/ "./node_modules/@kasimirjs/embed/dist/types.js":
/*!*****************************************************!*\
  !*** ./node_modules/@kasimirjs/embed/dist/types.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createScopeObject: () => (/* binding */ createScopeObject)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./node_modules/@kasimirjs/embed/dist/functions.js");
/* harmony import */ var _core_debouncer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/debouncer */ "./node_modules/@kasimirjs/embed/dist/core/debouncer.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return Object.assign({}, this);
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
                return true; // Nothing changed
            target[p] = value;
            let debouncer = new _core_debouncer__WEBPACK_IMPORTED_MODULE_1__.Debouncer(50, 50);
            if (p.startsWith("$") || p.startsWith("__"))
                return true;
            if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.isset)(scopeDef.$tpl))
                scopeDef.$tpl.render();
            (() => __awaiter(this, void 0, void 0, function* () {
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

/***/ "./node_modules/@kasimirjs/kit-bootstrap/dist/base/tab-pane.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@kasimirjs/kit-bootstrap/dist/base/tab-pane.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KitTabPane: () => (/* binding */ KitTabPane)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// language=html
const html = `
 <div>
    <ul class="nav nav-tabs">
      <li class="nav-item" ka.for="let tabName in tabs">
        <a class="nav-link" ka.classlist.fw-bold="selectedTabName === tabName" ka.classlist.active="selectedTabName === tabName" ka.on.click="$scope.selectedTabName = tabName" aria-current="page" href="javascript:void(0)">[[ tabName ]]</a>
      </li>
    </ul>
     <div class="p-3 border">
         <div ka.for="let curTabName in tabs">
             <div ka.if="curTabName === selectedTabName" >
                 <div ka.use="tabs[curTabName]" ka.scope="targetScope"></div>
             </div>
         </div>
     </div>
    
</div>
`;
let KitTabPane = class KitTabPane extends _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.KaCustomFragment {
    constructor(tabs) {
        super();
        this.tabs = tabs;
        let scope = this.init({
            targetScope: null,
            tabs,
            selectedTabName: Object.keys(tabs)[0]
        });
    }
    setScope(scope) {
        // Override default behaviou and pass scope to next
        this.scope["targetScope"] = scope;
    }
};
KitTabPane = __decorate([
    (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.template)(html),
    __metadata("design:paramtypes", [Object])
], KitTabPane);



/***/ }),

/***/ "./node_modules/@kasimirjs/kit-bootstrap/dist/form/form-input.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@kasimirjs/kit-bootstrap/dist/form/form-input.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KitFormInput: () => (/* binding */ KitFormInput)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./node_modules/@kasimirjs/kit-bootstrap/dist/functions.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let html = `
<div class="row g-3 align-items-center">
  <div class="col-auto">
    <label ka.attr.for="config.id" class="col-form-label">[[ config.title ]]</label>
  </div>
  <div class="col-auto">
    <input ka.if="config.type !== 'select' && config.type !== 'textarea'" ka.attr.readonly="config.readonly === true" ka.attr.type="config.type" ka.id="config.id" ka.bind="%%bind%%" class="form-control" aria-describedby="passwordHelpInline">
  </div>
  <div class="col-auto">
    <span id="passwordHelpInline" class="form-text">
      Must be 8-20 characters long.
    </span>
  </div>
</div>

`;
const KitFormInputDefaults = {
    title: "",
    type: "text",
    id: null
};
let KitFormInput = class KitFormInput extends _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.KaCustomFragment {
    /**
     * Example:
     *
     * new KitFormInput("$scope.name", {title: "Name:"});
     *
     * @param bindSelector
     * @param config
     */
    constructor(bindSelector, config) {
        super();
        this.bindSelector = bindSelector;
        config = Object.assign(Object.assign({}, KitFormInputDefaults), config);
        if (config.id === null) {
            config.id = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.random_string)();
        }
        let scope = this.init({
            config,
            bindValue: bindSelector
        });
    }
    init(scope) {
        if (typeof this.constructor["html"] !== "undefined")
            this["html"] = this.constructor['html'].replace("%%bind%%", this.bindSelector);
        return super.init(scope);
    }
};
KitFormInput = __decorate([
    (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.template)(html),
    __metadata("design:paramtypes", [String, Object])
], KitFormInput);



/***/ }),

/***/ "./node_modules/@kasimirjs/kit-bootstrap/dist/form/quick-input.js":
/*!************************************************************************!*\
  !*** ./node_modules/@kasimirjs/kit-bootstrap/dist/form/quick-input.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
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

// language=HTML
const tpl = `
    <div class="mb-1 row" ka.if="type === 'text'">
        <label ka.attr.for="id" class="col-sm-2 col-form-label">[[label]]</label>
        <div class="col-sm-10">
          <input type="text" ka.bind="$scope.value" class="form-control-plaintext form-control-sm bg-white" ka.attr.id="id">
        </div>
    </div>
    <div class="form-check form-switch mb-1" ka.if="type === 'switch'">
      <input class="form-check-input" type="checkbox" ka.bind="$scope.value" role="switch" ka.attr.id="id">
      <label class="form-check-label" ka.attr.for="id">[[ label ]]</label>
    </div>

`;
var elementIndex = 1;
let QuickInput = class QuickInput extends _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.KaCustomElement {
    get value() {
        return this.scope.value;
    }
    set value(value) {
        this.scope.value = value;
    }
    connectedCallback() {
        const _super = Object.create(null, {
            connectedCallback: { get: () => super.connectedCallback }
        });
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            let scope = this.init({
                id: (_a = this.dataset.id) !== null && _a !== void 0 ? _a : "quick-form-element-" + elementIndex++,
                type: (_b = this.dataset.type) !== null && _b !== void 0 ? _b : "text",
                name: (_c = this.dataset.name) !== null && _c !== void 0 ? _c : "data-name unset",
                label: (_e = (_d = this.dataset.label) !== null && _d !== void 0 ? _d : this.dataset.name) !== null && _e !== void 0 ? _e : "data-label unset",
                $on: {
                    change: (e) => {
                        //this.dispatchEvent(new Event("change"));
                    }
                }
            });
            _super.connectedCallback.call(this);
        });
    }
};
QuickInput = __decorate([
    (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.customElement)("quick-input", tpl)
], QuickInput);


/***/ }),

/***/ "./node_modules/@kasimirjs/kit-bootstrap/dist/functions.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@kasimirjs/kit-bootstrap/dist/functions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   random_string: () => (/* binding */ random_string)
/* harmony export */ });
function random_string(length = 8) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


/***/ }),

/***/ "./node_modules/@kasimirjs/kit-bootstrap/dist/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@kasimirjs/kit-bootstrap/dist/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlexModal: () => (/* reexport safe */ _modals_flex_modal__WEBPACK_IMPORTED_MODULE_5__.FlexModal),
/* harmony export */   FlexModalConfig: () => (/* reexport safe */ _modals_flex_modal__WEBPACK_IMPORTED_MODULE_5__.FlexModalConfig),
/* harmony export */   KitFormInput: () => (/* reexport safe */ _form_form_input__WEBPACK_IMPORTED_MODULE_2__.KitFormInput),
/* harmony export */   KitTabPane: () => (/* reexport safe */ _base_tab_pane__WEBPACK_IMPORTED_MODULE_1__.KitTabPane),
/* harmony export */   SidebarWrapper: () => (/* reexport safe */ _sidebar_sidebar_wrapper__WEBPACK_IMPORTED_MODULE_4__.SidebarWrapper),
/* harmony export */   SidebarWrapperConfig: () => (/* reexport safe */ _sidebar_sidebar_wrapper__WEBPACK_IMPORTED_MODULE_4__.SidebarWrapperConfig),
/* harmony export */   random_string: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.random_string)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./node_modules/@kasimirjs/kit-bootstrap/dist/functions.js");
/* harmony import */ var _base_tab_pane__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base/tab-pane */ "./node_modules/@kasimirjs/kit-bootstrap/dist/base/tab-pane.js");
/* harmony import */ var _form_form_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form-input */ "./node_modules/@kasimirjs/kit-bootstrap/dist/form/form-input.js");
/* harmony import */ var _form_quick_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/quick-input */ "./node_modules/@kasimirjs/kit-bootstrap/dist/form/quick-input.js");
/* harmony import */ var _sidebar_sidebar_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar/sidebar-wrapper */ "./node_modules/@kasimirjs/kit-bootstrap/dist/sidebar/sidebar-wrapper.js");
/* harmony import */ var _modals_flex_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modals/flex-modal */ "./node_modules/@kasimirjs/kit-bootstrap/dist/modals/flex-modal.js");








/***/ }),

/***/ "./node_modules/@kasimirjs/kit-bootstrap/dist/modals/flex-modal.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@kasimirjs/kit-bootstrap/dist/modals/flex-modal.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlexModal: () => (/* binding */ FlexModal),
/* harmony export */   FlexModalConfig: () => (/* binding */ FlexModalConfig)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const html = `
<div class="modal d-block" tabindex="-1">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">%%title%%</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" ka.on.click="$fn.close()" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                %%body%%
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" ka.on.click="$fn.close()">Close</button>
                %%buttons%%
            </div>
        </div>
    </div>
</div>`;
class FlexModalConfig {
    constructor() {
        this.title = "unnamed";
        this.size = "xl";
    }
}
class FlexModal extends _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.KaCustomModal {
    constructor(title, body, buttons, initScope = {}) {
        super();
        this.initScope = initScope;
        this.__html = html.replace("%%title%%", title).replace("%%body%%", body).replace("%%buttons%%", buttons.join(" "));
    }
    show(scope = {}, parser = (scope) => { return scope; }) {
        const _super = Object.create(null, {
            show: { get: () => super.show }
        });
        return __awaiter(this, void 0, void 0, function* () {
            let defaultScope = this.initScope;
            let instance = this;
            let myScope = this.init(Object.assign(Object.assign(Object.assign({}, defaultScope), scope), { $fn: {
                    close() {
                        return __awaiter(this, void 0, void 0, function* () {
                            instance.resolve(null);
                        });
                    },
                    resolve() {
                        return __awaiter(this, void 0, void 0, function* () {
                            instance.resolve(parser(myScope));
                        });
                    }
                } }));
            return _super.show.call(this);
        });
    }
}


/***/ }),

/***/ "./node_modules/@kasimirjs/kit-bootstrap/dist/sidebar/sidebar-wrapper.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@kasimirjs/kit-bootstrap/dist/sidebar/sidebar-wrapper.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarWrapper: () => (/* binding */ SidebarWrapper),
/* harmony export */   SidebarWrapperConfig: () => (/* binding */ SidebarWrapperConfig)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// language=HTML

const tpl = `
    <style>
        .sidepanel {
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            border: 0;
            width: 250px;
            z-index: 99999;
            transform: translateX(100%);
            transition: all 0.3s ease-in-out;


            background: linear-gradient(0deg, rgb(37, 32, 32) 0%, rgba(0, 0, 0, 1) 100%);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            padding: 5px
        }

        .sidepanel .activator {
            position: absolute;
            top: 38vh;
            height: 50px;
            width: 50px;
            left: -50px;
            cursor: pointer;
            background: linear-gradient(90deg, rgb(68, 63, 63) 0%, rgba(0, 0, 0, 1) 100%);
            z-index: 99999;
            color: #fff;
            border-radius: 20% 0 0 20%;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
            opacity: 0.8;
            transition: opacity 0.3s ease-in-out;
        }

        .sidepanel .activator svg {
            width: 100%;
            height: 100%;
            padding: 10px
        }

        .sidepanel.active .activator {
            opacity: 0.8;
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.9);
        }

        .sidepanel .activator:hover {
            opacity: 1;
        }

        .sidepanel.active {
            transform: translateX(0);
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.9);
        }

        .sidepanel .content {
            color: #fff;
            height: 100%;
            overflow: scroll;
        }

    </style>

    <nav class="sidepanel" ka.classlist.active="state.active">
        <div class="activator" ka.on.click="$fn.toggle()" ka.content="$scope.config.icon">B</div>
        <div class="content">
            <div ka.content="$content"></div>
        </div>
    </nav>
`;
class SidebarWrapperConfig {
    constructor() {
        this.icon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
</svg>`;
    }
}
let SidebarWrapper = class SidebarWrapper extends _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.KaCustomWrapper {
    constructor(config = null) {
        super();
        if (config === null)
            config = new SidebarWrapperConfig();
        let state = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_session_storage)({ active: false }, "switcher-element");
        let scope = this.init({
            state: state,
            config: config,
            $fn: {
                toggle: () => {
                    state.active = !state.active;
                    scope.render();
                }
            },
            $on: {
                change: (e) => {
                }
            }
        });
    }
};
SidebarWrapper = __decorate([
    (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.template)(tpl),
    __metadata("design:paramtypes", [SidebarWrapperConfig])
], SidebarWrapper);



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
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
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
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
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
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
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

/***/ "./src.dev/index-dev.ts":
/*!******************************!*\
  !*** ./src.dev/index-dev.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _showcase_default_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showcase/default-page */ "./src.dev/showcase/default-page.ts");



/***/ }),

/***/ "./src.dev/showcase/default-page.ts":
/*!******************************************!*\
  !*** ./src.dev/showcase/default-page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");

let html = `

<nav layout="use: #navbar-switch1">
    <div class="brand"><a href=""><img src="/images/logo-systemwebsite.webp"></a></div>
    <ul class="navbar-top">
        <li class=":: d-none :lg: "><a href="">Beratungstelefon</a></li>
        <li class=":: :lg: d-none"><a href="">Beratung-Tel.: (0201) 12345</a></li>
        <li><a href="">Angebot anfordern</a></li>
    </ul>
    <ul class="navbar-main">
        <li><a href="#home">Punkt1</a></li>
        <li><a href="#home">Punkt2</a></li>
        <li><a href="#home">Hello World</a></li>
        <li><a href="#home">Hello World</a></li>
    </ul>
    <ul class="nav-menu">
        <li><a href="#home">Home</a></li>
    </ul>
</nav>

# Wir entwickeln moderne<br> Webseiten f\xFCr <typewriter-element>Haus\xE4rzte, Zahn\xE4rzte, Kardiologen, Augen\xE4rzte, Gyn\xE4kologen,</typewriter-element>
{: layout="use: #header1"}

![Webdesign f\xFCr \xC4rzte](/images/hero-image.webp)

Sicher. Modular. Auf Ihre Bed\xFCrfnisse angepasst.

[Mehr erfahren](#)
{: .btn .btn-primary}


## Hero Section
{: layout="use: #disturber"}

Wir garantieren Ihnen 100% Zufriedenheit mit unserer <b class="text-primary">30 Tage Geld-zur\xFCck-Garantie!</b>


## Ihre Website vom Experten f\xFCr Webdesign-Pooling:
{: layout="use: #icon-catchprases"}

Individuell, effizient und schnell einsatzbereit.



- ![Some Image](/images/icons/icon-modularer-aufbau.webp) **Modularer<br>Aufbau**
- ![Some Image](/images/icons/icon-monitor-mobile.webp) *Mobil & SEO <br>optimiert*
- ![Some Image](/images/icons/icon-shield.webp) *DSGVO konform<br>& sicheres Hosting*
- ![Some Image](/images/icons/icon-time.webp) *Schnelle<br> Umsetzung*
- ![Some Image](/images/icons/icon-smiley.webp) *Zufriedenheits-<br>garantie*

## Service
{: layout="use: #service-slider"}

> Nutzen Sie unsere Leistungen f\xFCr Ihren Erfolg

Lorem ipsum

<a href="#" class="btn btn-outline-primary desktop-button">Alle Leistungen entdecken</a>


### Webdesign & Online-Services

![](/images/icons/icon-webdesign.webp)

Individuell gestaltet nach unserem Design-Pool-Konzept


### Praxis-Fotografie

![](/images/icons/icon-webdesign.webp)

Individuell gestaltet nach unserem Design-Pool-Konzept

### Fertige Texte & Bilder

![](/images/icons/icon-webdesign.webp)

Mit unseren Text- & Bildvorlagen f\xFCr alle Fachrichtungen kann Ihre
Website schnell online gehen. Fotos und Texte tauschen wir sp\xE4ter kostenlos aus.

### Logo-Design & Vorlagen

![](/images/icons/icon-webdesign.webp)

Wir erstellen Professionelle Logos und Vorlagen f\xFCr Briefk\xF6pfe,
Praxisschild, Visitenkarten, u.v.m.

### Google & Bing Optimierung

![](/images/icons/icon-webdesign.webp)

Damit Ihre Website \xFCberall gefunden wird: Als Google Partner..


## Praxiswert steigern
{: layout="use: #2-cols"}

![](/images/illustration-01.svg)

Eine gute Positionierung in den Suchmaschinen ist f\xFCr eine Praxis von gro\xDFer Bedeutung. Wir helfen Ihnen dabei, Ihre Praxis im Internet zu pr\xE4sentieren und Ihre Patienten zu informieren.

[Weiterlesen]()

## Mit Digiatlisierung sparen
{: layout="use: #2-cols"}

![](/images/illustration-03.svg)

Eine gute Positionierung in den Suchmaschinen ist f\xFCr eine Praxis von gro\xDFer Bedeutung. Wir helfen Ihnen dabei, Ihre Praxis im Internet zu pr\xE4sentieren und Ihre Patienten zu informieren.

[Weiterlesen]()

## Datenschutz vom Experten
{: layout="use: #2-cols-bg"}

![](/images/illustration-03.webp)

> Rundum Sorglos-Paket


Eine gute Positionierung in den Suchmaschinen ist f\xFCr eine Praxis von gro\xDFer Bedeutung. Wir helfen Ihnen dabei, Ihre Praxis im Internet zu pr\xE4sentieren und Ihre Patienten zu informieren.

[Mehr erfahren](#)



## Key Figures
{: layout="use: #key-figures"}


## Ablauf
{: layout="use: #cards-slider"}

> Was passiert, nachdem Sie ein Angebot von uns erhalten Haben?

Text, Text, Text

[Sie haben Fragen?](#)
{: .btn .btn-primary}



### Design-Entwurf

![](/images/icons/icon-webdesign.webp)

Dies ist ein Text

### Anpassen

![](/images/icons/icon-webdesign.webp)

Per Videokonferenz besprechen Sie Ihre Website mit einem Experten.
Wir \xE4ndern alles nach Ihren W\xFCnschen.

### Online gehen

![](/images/icons/icon-webdesign.webp)

Per Videokonferenz besprechen Sie Ihre Website mit einem Experten.
Wir \xE4ndern alles nach Ihren W\xFCnschen.

### Optimieren

![](/images/icons/icon-webdesign.webp)

Per Videokonferenz besprechen Sie Ihre Website mit einem Experten.
Wir \xE4ndern alles nach Ihren W\xFCnschen.

## Was sagen unsere Kunden?
{: layout="use: #customer-reviews"}

Lorem ipsum,...

### Robert XYZ

>  \u201EIch wollte schon die Polizei holen\u201C

[Zahnarztpraxis Robert]()

### Besser gehts nicht

>  \u201EIch wollte schon die Polizei holen\u201C


### Besser gehts nicht

>  \u201EIch wollte schon die Polizei holen\u201C



## Erhalten Sie kostenlos Ihr unverbindliches Angebot mit nur wenigen Klicks!
{: layout="use: #cta1"}

[Jetzt Konditionen freischalten](#){: class="btn btn-primary"}

## Kontakt
{: layout="use: #contact"}

Nehen Sie

[input type="text"  name="Name" required .mb-3]
[input type="email" name="E-Mail" data-invalid-msg="Bitte geben Sie eine g\xFCltige E-Mail Adresse ein" required .mb-3]
[input type="tel" name="Telefon" .mb-3]

## Newsletter
{: layout="use: #newsletter" data-section-style="padding-top: 160px;" data-section-class="dark"}

Melden Sie sich jetzt f\xFCr unseren Newsletter an und erhalten Sie alle paar Wochen aktuelle News, Design- und Funktionsvorschl\xE4ge und viele weitere hilfreiche Tipps f\xFCr Ihren Onlineauftritt.






## Systemwebsite.de
{: layout="use: #footer"}

> Ihr Partner f\xFCr moderne medizinische Webseiten-Entwicklung



### Links

- [Konditionen](#)
- [Leistungen](#)
- [FAQ](#)
- [Kontakt](#)

### Links

- [Konditionen](#)
- [Leistungen](#)
- [FAQ](#)
- [Kontakt](#)

### Folgen Sie uns

- [LinkedIn](#)
- [Xing](#)
- [Facebook](#)
- [Instragram](#)

---
{: .footer-nav}

Copyright (c) 2023 Systemwebsite by leuffen.de

- [AGB](#)
- [Datenschutz](#)
- [Impressum](#)

`;
_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.JodaDescriptionManager.addClass(
  "page",
  "themejs-sys",
  "themejs-sys",
  html,
  [],
  {
    bodyClasses: ["themejs-sys"]
  }
);


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
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
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
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
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
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
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

    <nav class="isl-navbar-switch1">

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
                    <div class="isl-navbar-switch1__nav--mobile-menu">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
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

/***/ "./workspaces/jodastyle-dev/index.ts":
/*!*******************************************!*\
  !*** ./workspaces/jodastyle-dev/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   joda_dev_config: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.joda_dev_config)
/* harmony export */ });
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ "./workspaces/jodastyle-dev/src/index.ts");



/***/ }),

/***/ "./workspaces/jodastyle-dev/src/components/ExampleSwitcherElement.ts":
/*!***************************************************************************!*\
  !*** ./workspaces/jodastyle-dev/src/components/ExampleSwitcherElement.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExampleSwitcherElement: () => (/* binding */ ExampleSwitcherElement)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
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


const tpl2 = `
<div>
    <select ka.options="$scope.desc" ka.bind="$scope.className" style="width:100%"></select>
    <input ka.bind="$scope.text">
</div>
`;
let ExampleSwitcherElement = class extends _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.KaCustomElement {
  constructor() {
    super();
    console.log(_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_1__.JodaDescriptionManager.classes);
    let scope = this.init({
      desc: _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_1__.JodaDescriptionManager.classes,
      text: "test",
      className: "test",
      $on: {
        change: (e) => {
          window.history.pushState({}, "", "?className=" + scope.className);
        }
      }
    });
    let last = "";
    setInterval(() => __async(this, null, function* () {
      var _a;
      if (last === window.location.href) {
        return;
      }
      last = window.location.href;
      let url = new URL(window.location.href);
      let className = url.searchParams.get("className");
      if (className === null) {
        return;
      }
      scope.className = className;
      let daba = document.getElementsByTagName("joda-content")[0];
      var MarkdownIt = __webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js");
      var markdownItAttrs = __webpack_require__(/*! markdown-it-attrs */ "./node_modules/markdown-it-attrs/index.js");
      var md = new MarkdownIt({
        html: true
        // Erlaubt HTML-Input.
      }, null);
      md.use(markdownItAttrs);
      let desc = _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_1__.JodaDescriptionManager.getDescription(className);
      if (desc === void 0 || desc === null) {
        let newElement2 = document.createElement("div");
        newElement2.innerHTML = "No description found";
        daba.replaceWith(newElement2);
        return;
      }
      document.body.classList.add(...desc.config.bodyClasses);
      let content = (_a = desc.example) != null ? _a : "No example found";
      if (desc.config.parseMarkdown) {
        content = content.replace(/\n{:/gm, "{:");
        content = md.render(content);
        content = "<joda-split>" + content + "</joda-split>";
      }
      let newElement = document.createElement("joda-content");
      newElement.innerHTML = content;
      daba.replaceWith(newElement);
    }), 100);
  }
};
ExampleSwitcherElement = __decorateClass([
  (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.customElement)("joda-example-switcher"),
  (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.template)(tpl2)
], ExampleSwitcherElement);


/***/ }),

/***/ "./workspaces/jodastyle-dev/src/components/JodaDevSidebarElement.ts":
/*!**************************************************************************!*\
  !*** ./workspaces/jodastyle-dev/src/components/JodaDevSidebarElement.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");
/* harmony import */ var _kasimirjs_kit_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kasimirjs/kit-bootstrap */ "./node_modules/@kasimirjs/kit-bootstrap/dist/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "./workspaces/jodastyle-dev/src/index.ts");
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




const config = {
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-display-fill" viewBox="0 0 16 16">
      <path d="M6 12c0 .667-.083 1.167-.25 1.5H5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-.75c-.167-.333-.25-.833-.25-1.5h4c2 0 2-2 2-2V4c0-2-2-2-2-2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h4z"/>
    </svg>`
};
const tpl2 = `
<div>
    
    <h3 class="">JodaStyle Dev</h3>
    <quick-input ka.bind="$scope.siteConfig.disable_split" data-label="Disable Joda Split " data-name="test" data-type="switch"></quick-input>
    <quick-input ka.bind="$scope.siteConfig.disable_templates" data-label="Disable Joda Templates " data-name="test" data-type="switch"></quick-input>
    <quick-input ka.bind="$scope.siteConfig.disable_responsive" data-label="Disable Joda Responsive" data-name="test" data-type="switch"></quick-input>
    <quick-input ka.bind="$scope.siteConfig.debug_visualize" data-label="Joda Debug Visualize" data-name="test" data-type="switch"></quick-input>
    <quick-input ka.if="siteConfig.debug_visualize" ka.bind="$scope.siteConfig.debug_visualize_attribute" data-label="Add Attributes to Visualize" data-name="test" data-type="switch"></quick-input>
    <hr>
    <joda-example-switcher></joda-example-switcher>
</div>
`;
let JodaDevSidebarElement = class extends _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.KaCustomElement {
  constructor() {
    super();
    this.shadowRootConfig.mode = "closed";
    this.shadowRootConfig.stylesheets = [
      _index__WEBPACK_IMPORTED_MODULE_3__.joda_dev_config.stylesheet
    ];
    this.wrap(new _kasimirjs_kit_bootstrap__WEBPACK_IMPORTED_MODULE_2__.SidebarWrapper(config));
    let scope = this.init({
      desc: _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_1__.JodaDescriptionManager.classes,
      siteConfig: _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_1__.jodaSiteConfig,
      $on: {
        change: (e) => __async(this, null, function* () {
          yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_sleep)(100);
          window.location.reload();
        })
      }
    });
    let last = "";
  }
};
JodaDevSidebarElement = __decorateClass([
  (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.customElement)("joda-dev-sidebar"),
  (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.template)(tpl2)
], JodaDevSidebarElement);
(() => __async(undefined, null, function* () {
  yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_dom_ready)();
  document.body.append(new JodaDevSidebarElement());
}))();


/***/ }),

/***/ "./workspaces/jodastyle-dev/src/components/JodaShowcaseElement.ts":
/*!************************************************************************!*\
  !*** ./workspaces/jodastyle-dev/src/components/JodaShowcaseElement.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./workspaces/jodastyle-dev/src/index.ts");
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



const tpl = `
    <div class="joda-showcase-element" ka.classlist="classes">
        <div class="row " >
            <div class="col col-auto" ka.for="let i of desc ">
                <div class="card">
                    <div class="card-body p-1 m-1">
                        <div class="preview">
                            <iframe ka.prop.src="'/html?className=' + i.className"></iframe>
                            <div class="overlay"><a ka.prop.href="'/html?className=' + i.className">Show</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
let JodaShowcaseElement = class extends _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_1__.KaCustomElement {
  constructor() {
    super();
    this.shadowRootConfig.mode = "closed";
    this.shadowRootConfig.stylesheets = [
      _index__WEBPACK_IMPORTED_MODULE_2__.joda_dev_config.stylesheet
    ];
    let scope = this.init({
      desc: _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.JodaDescriptionManager.data,
      classes: [],
      $on: {}
    });
  }
  connectedCallback() {
    return __async(this, null, function* () {
      yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_1__.ka_sleep)(1);
      this.scope.classes = this.getAttribute("class");
      this.scope.desc = _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.JodaDescriptionManager.data.filter((e) => e.category === this.getAttribute("data-category"));
      console.log("connectedCallback", this.scope.desc);
      __superGet(JodaShowcaseElement.prototype, this, "connectedCallback").call(this);
    });
  }
  disconnectedCallback() {
    return __async(this, null, function* () {
      console.log("disconnect", this);
      this.scope.desc = [];
      __superGet(JodaShowcaseElement.prototype, this, "disconnectedCallback").call(this);
    });
  }
};
JodaShowcaseElement = __decorateClass([
  (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_1__.template)(tpl),
  (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_1__.customElement)("joda-showcase-element")
], JodaShowcaseElement);


/***/ }),

/***/ "./workspaces/jodastyle-dev/src/config.ts":
/*!************************************************!*\
  !*** ./workspaces/jodastyle-dev/src/config.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   joda_dev_config: () => (/* binding */ joda_dev_config)
/* harmony export */ });
let joda_dev_config = {
  stylesheet: "/assets/dist/dev.css"
  // Define the stylsheet to use for shadowRoot
};


/***/ }),

/***/ "./workspaces/jodastyle-dev/src/index.ts":
/*!***********************************************!*\
  !*** ./workspaces/jodastyle-dev/src/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   joda_dev_config: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.joda_dev_config)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./workspaces/jodastyle-dev/src/config.ts");
/* harmony import */ var _components_JodaShowcaseElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/JodaShowcaseElement */ "./workspaces/jodastyle-dev/src/components/JodaShowcaseElement.ts");
/* harmony import */ var _components_JodaDevSidebarElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/JodaDevSidebarElement */ "./workspaces/jodastyle-dev/src/components/JodaDevSidebarElement.ts");
/* harmony import */ var _components_ExampleSwitcherElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ExampleSwitcherElement */ "./workspaces/jodastyle-dev/src/components/ExampleSwitcherElement.ts");






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
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
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
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
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
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
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
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
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
  (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.customElement)("joda-error"),
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
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");

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
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");


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
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
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
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");

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
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
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
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
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
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
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
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");

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
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
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

/***/ "./workspaces/liscom/src/slideshow/slideshow.ts":
/*!******************************************************!*\
  !*** ./workspaces/liscom/src/slideshow/slideshow.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./workspaces/liscom/src/index.ts");
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
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

/***/ "./node_modules/linkify-it/index.js":
/*!******************************************!*\
  !*** ./node_modules/linkify-it/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";



////////////////////////////////////////////////////////////////////////////////
// Helpers

// Merge objects
//
function assign(obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);

  sources.forEach(function (source) {
    if (!source) { return; }

    Object.keys(source).forEach(function (key) {
      obj[key] = source[key];
    });
  });

  return obj;
}

function _class(obj) { return Object.prototype.toString.call(obj); }
function isString(obj) { return _class(obj) === '[object String]'; }
function isObject(obj) { return _class(obj) === '[object Object]'; }
function isRegExp(obj) { return _class(obj) === '[object RegExp]'; }
function isFunction(obj) { return _class(obj) === '[object Function]'; }


function escapeRE(str) { return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&'); }

////////////////////////////////////////////////////////////////////////////////


var defaultOptions = {
  fuzzyLink: true,
  fuzzyEmail: true,
  fuzzyIP: false
};


function isOptionsObj(obj) {
  return Object.keys(obj || {}).reduce(function (acc, k) {
    return acc || defaultOptions.hasOwnProperty(k);
  }, false);
}


var defaultSchemas = {
  'http:': {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.http) {
        // compile lazily, because "host"-containing variables can change on tlds update.
        self.re.http =  new RegExp(
          '^\\/\\/' + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, 'i'
        );
      }
      if (self.re.http.test(tail)) {
        return tail.match(self.re.http)[0].length;
      }
      return 0;
    }
  },
  'https:':  'http:',
  'ftp:':    'http:',
  '//':      {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.no_http) {
      // compile lazily, because "host"-containing variables can change on tlds update.
        self.re.no_http =  new RegExp(
          '^' +
          self.re.src_auth +
          // Don't allow single-level domains, because of false positives like '//test'
          // with code comments
          '(?:localhost|(?:(?:' + self.re.src_domain + ')\\.)+' + self.re.src_domain_root + ')' +
          self.re.src_port +
          self.re.src_host_terminator +
          self.re.src_path,

          'i'
        );
      }

      if (self.re.no_http.test(tail)) {
        // should not be `://` & `///`, that protects from errors in protocol name
        if (pos >= 3 && text[pos - 3] === ':') { return 0; }
        if (pos >= 3 && text[pos - 3] === '/') { return 0; }
        return tail.match(self.re.no_http)[0].length;
      }
      return 0;
    }
  },
  'mailto:': {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.mailto) {
        self.re.mailto =  new RegExp(
          '^' + self.re.src_email_name + '@' + self.re.src_host_strict, 'i'
        );
      }
      if (self.re.mailto.test(tail)) {
        return tail.match(self.re.mailto)[0].length;
      }
      return 0;
    }
  }
};

/*eslint-disable max-len*/

// RE pattern for 2-character tlds (autogenerated by ./support/tlds_2char_gen.js)
var tlds_2ch_src_re = 'a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]';

// DON'T try to make PRs with changes. Extend TLDs with LinkifyIt.tlds() instead
var tlds_default = 'biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф'.split('|');

/*eslint-enable max-len*/

////////////////////////////////////////////////////////////////////////////////

function resetScanCache(self) {
  self.__index__ = -1;
  self.__text_cache__   = '';
}

function createValidator(re) {
  return function (text, pos) {
    var tail = text.slice(pos);

    if (re.test(tail)) {
      return tail.match(re)[0].length;
    }
    return 0;
  };
}

function createNormalizer() {
  return function (match, self) {
    self.normalize(match);
  };
}

// Schemas compiler. Build regexps.
//
function compile(self) {

  // Load & clone RE patterns.
  var re = self.re = __webpack_require__(/*! ./lib/re */ "./node_modules/linkify-it/lib/re.js")(self.__opts__);

  // Define dynamic patterns
  var tlds = self.__tlds__.slice();

  self.onCompile();

  if (!self.__tlds_replaced__) {
    tlds.push(tlds_2ch_src_re);
  }
  tlds.push(re.src_xn);

  re.src_tlds = tlds.join('|');

  function untpl(tpl) { return tpl.replace('%TLDS%', re.src_tlds); }

  re.email_fuzzy      = RegExp(untpl(re.tpl_email_fuzzy), 'i');
  re.link_fuzzy       = RegExp(untpl(re.tpl_link_fuzzy), 'i');
  re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), 'i');
  re.host_fuzzy_test  = RegExp(untpl(re.tpl_host_fuzzy_test), 'i');

  //
  // Compile each schema
  //

  var aliases = [];

  self.__compiled__ = {}; // Reset compiled data

  function schemaError(name, val) {
    throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
  }

  Object.keys(self.__schemas__).forEach(function (name) {
    var val = self.__schemas__[name];

    // skip disabled methods
    if (val === null) { return; }

    var compiled = { validate: null, link: null };

    self.__compiled__[name] = compiled;

    if (isObject(val)) {
      if (isRegExp(val.validate)) {
        compiled.validate = createValidator(val.validate);
      } else if (isFunction(val.validate)) {
        compiled.validate = val.validate;
      } else {
        schemaError(name, val);
      }

      if (isFunction(val.normalize)) {
        compiled.normalize = val.normalize;
      } else if (!val.normalize) {
        compiled.normalize = createNormalizer();
      } else {
        schemaError(name, val);
      }

      return;
    }

    if (isString(val)) {
      aliases.push(name);
      return;
    }

    schemaError(name, val);
  });

  //
  // Compile postponed aliases
  //

  aliases.forEach(function (alias) {
    if (!self.__compiled__[self.__schemas__[alias]]) {
      // Silently fail on missed schemas to avoid errons on disable.
      // schemaError(alias, self.__schemas__[alias]);
      return;
    }

    self.__compiled__[alias].validate =
      self.__compiled__[self.__schemas__[alias]].validate;
    self.__compiled__[alias].normalize =
      self.__compiled__[self.__schemas__[alias]].normalize;
  });

  //
  // Fake record for guessed links
  //
  self.__compiled__[''] = { validate: null, normalize: createNormalizer() };

  //
  // Build schema condition
  //
  var slist = Object.keys(self.__compiled__)
                      .filter(function (name) {
                        // Filter disabled & fake schemas
                        return name.length > 0 && self.__compiled__[name];
                      })
                      .map(escapeRE)
                      .join('|');
  // (?!_) cause 1.5x slowdown
  self.re.schema_test     = RegExp('(^|(?!_)(?:[><\uff5c]|' + re.src_ZPCc + '))(' + slist + ')', 'i');
  self.re.schema_search   = RegExp('(^|(?!_)(?:[><\uff5c]|' + re.src_ZPCc + '))(' + slist + ')', 'ig');
  self.re.schema_at_start = RegExp('^' + self.re.schema_search.source, 'i');

  self.re.pretest = RegExp(
    '(' + self.re.schema_test.source + ')|(' + self.re.host_fuzzy_test.source + ')|@',
    'i'
  );

  //
  // Cleanup
  //

  resetScanCache(self);
}

/**
 * class Match
 *
 * Match result. Single element of array, returned by [[LinkifyIt#match]]
 **/
function Match(self, shift) {
  var start = self.__index__,
      end   = self.__last_index__,
      text  = self.__text_cache__.slice(start, end);

  /**
   * Match#schema -> String
   *
   * Prefix (protocol) for matched string.
   **/
  this.schema    = self.__schema__.toLowerCase();
  /**
   * Match#index -> Number
   *
   * First position of matched string.
   **/
  this.index     = start + shift;
  /**
   * Match#lastIndex -> Number
   *
   * Next position after matched string.
   **/
  this.lastIndex = end + shift;
  /**
   * Match#raw -> String
   *
   * Matched string.
   **/
  this.raw       = text;
  /**
   * Match#text -> String
   *
   * Notmalized text of matched string.
   **/
  this.text      = text;
  /**
   * Match#url -> String
   *
   * Normalized url of matched string.
   **/
  this.url       = text;
}

function createMatch(self, shift) {
  var match = new Match(self, shift);

  self.__compiled__[match.schema].normalize(match, self);

  return match;
}


/**
 * class LinkifyIt
 **/

/**
 * new LinkifyIt(schemas, options)
 * - schemas (Object): Optional. Additional schemas to validate (prefix/validator)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Creates new linkifier instance with optional additional schemas.
 * Can be called without `new` keyword for convenience.
 *
 * By default understands:
 *
 * - `http(s)://...` , `ftp://...`, `mailto:...` & `//...` links
 * - "fuzzy" links and emails (example.com, foo@bar.com).
 *
 * `schemas` is an object, where each key/value describes protocol/rule:
 *
 * - __key__ - link prefix (usually, protocol name with `:` at the end, `skype:`
 *   for example). `linkify-it` makes shure that prefix is not preceeded with
 *   alphanumeric char and symbols. Only whitespaces and punctuation allowed.
 * - __value__ - rule to check tail after link prefix
 *   - _String_ - just alias to existing rule
 *   - _Object_
 *     - _validate_ - validator function (should return matched length on success),
 *       or `RegExp`.
 *     - _normalize_ - optional function to normalize text & url of matched result
 *       (for example, for @twitter mentions).
 *
 * `options`:
 *
 * - __fuzzyLink__ - recognige URL-s without `http(s):` prefix. Default `true`.
 * - __fuzzyIP__ - allow IPs in fuzzy links above. Can conflict with some texts
 *   like version numbers. Default `false`.
 * - __fuzzyEmail__ - recognize emails without `mailto:` prefix.
 *
 **/
function LinkifyIt(schemas, options) {
  if (!(this instanceof LinkifyIt)) {
    return new LinkifyIt(schemas, options);
  }

  if (!options) {
    if (isOptionsObj(schemas)) {
      options = schemas;
      schemas = {};
    }
  }

  this.__opts__           = assign({}, defaultOptions, options);

  // Cache last tested result. Used to skip repeating steps on next `match` call.
  this.__index__          = -1;
  this.__last_index__     = -1; // Next scan position
  this.__schema__         = '';
  this.__text_cache__     = '';

  this.__schemas__        = assign({}, defaultSchemas, schemas);
  this.__compiled__       = {};

  this.__tlds__           = tlds_default;
  this.__tlds_replaced__  = false;

  this.re = {};

  compile(this);
}


/** chainable
 * LinkifyIt#add(schema, definition)
 * - schema (String): rule name (fixed pattern prefix)
 * - definition (String|RegExp|Object): schema definition
 *
 * Add new rule definition. See constructor description for details.
 **/
LinkifyIt.prototype.add = function add(schema, definition) {
  this.__schemas__[schema] = definition;
  compile(this);
  return this;
};


/** chainable
 * LinkifyIt#set(options)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Set recognition options for links without schema.
 **/
LinkifyIt.prototype.set = function set(options) {
  this.__opts__ = assign(this.__opts__, options);
  return this;
};


/**
 * LinkifyIt#test(text) -> Boolean
 *
 * Searches linkifiable pattern and returns `true` on success or `false` on fail.
 **/
LinkifyIt.prototype.test = function test(text) {
  // Reset scan cache
  this.__text_cache__ = text;
  this.__index__      = -1;

  if (!text.length) { return false; }

  var m, ml, me, len, shift, next, re, tld_pos, at_pos;

  // try to scan for link with schema - that's the most simple rule
  if (this.re.schema_test.test(text)) {
    re = this.re.schema_search;
    re.lastIndex = 0;
    while ((m = re.exec(text)) !== null) {
      len = this.testSchemaAt(text, m[2], re.lastIndex);
      if (len) {
        this.__schema__     = m[2];
        this.__index__      = m.index + m[1].length;
        this.__last_index__ = m.index + m[0].length + len;
        break;
      }
    }
  }

  if (this.__opts__.fuzzyLink && this.__compiled__['http:']) {
    // guess schemaless links
    tld_pos = text.search(this.re.host_fuzzy_test);
    if (tld_pos >= 0) {
      // if tld is located after found link - no need to check fuzzy pattern
      if (this.__index__ < 0 || tld_pos < this.__index__) {
        if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {

          shift = ml.index + ml[1].length;

          if (this.__index__ < 0 || shift < this.__index__) {
            this.__schema__     = '';
            this.__index__      = shift;
            this.__last_index__ = ml.index + ml[0].length;
          }
        }
      }
    }
  }

  if (this.__opts__.fuzzyEmail && this.__compiled__['mailto:']) {
    // guess schemaless emails
    at_pos = text.indexOf('@');
    if (at_pos >= 0) {
      // We can't skip this check, because this cases are possible:
      // 192.168.1.1@gmail.com, my.in@example.com
      if ((me = text.match(this.re.email_fuzzy)) !== null) {

        shift = me.index + me[1].length;
        next  = me.index + me[0].length;

        if (this.__index__ < 0 || shift < this.__index__ ||
            (shift === this.__index__ && next > this.__last_index__)) {
          this.__schema__     = 'mailto:';
          this.__index__      = shift;
          this.__last_index__ = next;
        }
      }
    }
  }

  return this.__index__ >= 0;
};


/**
 * LinkifyIt#pretest(text) -> Boolean
 *
 * Very quick check, that can give false positives. Returns true if link MAY BE
 * can exists. Can be used for speed optimization, when you need to check that
 * link NOT exists.
 **/
LinkifyIt.prototype.pretest = function pretest(text) {
  return this.re.pretest.test(text);
};


/**
 * LinkifyIt#testSchemaAt(text, name, position) -> Number
 * - text (String): text to scan
 * - name (String): rule (schema) name
 * - position (Number): text offset to check from
 *
 * Similar to [[LinkifyIt#test]] but checks only specific protocol tail exactly
 * at given position. Returns length of found pattern (0 on fail).
 **/
LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
  // If not supported schema check requested - terminate
  if (!this.__compiled__[schema.toLowerCase()]) {
    return 0;
  }
  return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
};


/**
 * LinkifyIt#match(text) -> Array|null
 *
 * Returns array of found link descriptions or `null` on fail. We strongly
 * recommend to use [[LinkifyIt#test]] first, for best speed.
 *
 * ##### Result match description
 *
 * - __schema__ - link schema, can be empty for fuzzy links, or `//` for
 *   protocol-neutral  links.
 * - __index__ - offset of matched text
 * - __lastIndex__ - index of next char after mathch end
 * - __raw__ - matched text
 * - __text__ - normalized text
 * - __url__ - link, generated from matched text
 **/
LinkifyIt.prototype.match = function match(text) {
  var shift = 0, result = [];

  // Try to take previous element from cache, if .test() called before
  if (this.__index__ >= 0 && this.__text_cache__ === text) {
    result.push(createMatch(this, shift));
    shift = this.__last_index__;
  }

  // Cut head if cache was used
  var tail = shift ? text.slice(shift) : text;

  // Scan string until end reached
  while (this.test(tail)) {
    result.push(createMatch(this, shift));

    tail = tail.slice(this.__last_index__);
    shift += this.__last_index__;
  }

  if (result.length) {
    return result;
  }

  return null;
};


/**
 * LinkifyIt#matchAtStart(text) -> Match|null
 *
 * Returns fully-formed (not fuzzy) link if it starts at the beginning
 * of the string, and null otherwise.
 **/
LinkifyIt.prototype.matchAtStart = function matchAtStart(text) {
  // Reset scan cache
  this.__text_cache__ = text;
  this.__index__      = -1;

  if (!text.length) return null;

  var m = this.re.schema_at_start.exec(text);
  if (!m) return null;

  var len = this.testSchemaAt(text, m[2], m[0].length);
  if (!len) return null;

  this.__schema__     = m[2];
  this.__index__      = m.index + m[1].length;
  this.__last_index__ = m.index + m[0].length + len;

  return createMatch(this, 0);
};


/** chainable
 * LinkifyIt#tlds(list [, keepOld]) -> this
 * - list (Array): list of tlds
 * - keepOld (Boolean): merge with current list if `true` (`false` by default)
 *
 * Load (or merge) new tlds list. Those are user for fuzzy links (without prefix)
 * to avoid false positives. By default this algorythm used:
 *
 * - hostname with any 2-letter root zones are ok.
 * - biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф
 *   are ok.
 * - encoded (`xn--...`) root zones are ok.
 *
 * If list is replaced, then exact match for 2-chars root zones will be checked.
 **/
LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
  list = Array.isArray(list) ? list : [ list ];

  if (!keepOld) {
    this.__tlds__ = list.slice();
    this.__tlds_replaced__ = true;
    compile(this);
    return this;
  }

  this.__tlds__ = this.__tlds__.concat(list)
                                  .sort()
                                  .filter(function (el, idx, arr) {
                                    return el !== arr[idx - 1];
                                  })
                                  .reverse();

  compile(this);
  return this;
};

/**
 * LinkifyIt#normalize(match)
 *
 * Default normalizer (if schema does not define it's own).
 **/
LinkifyIt.prototype.normalize = function normalize(match) {

  // Do minimal possible changes by default. Need to collect feedback prior
  // to move forward https://github.com/markdown-it/linkify-it/issues/1

  if (!match.schema) { match.url = 'http://' + match.url; }

  if (match.schema === 'mailto:' && !/^mailto:/i.test(match.url)) {
    match.url = 'mailto:' + match.url;
  }
};


/**
 * LinkifyIt#onCompile()
 *
 * Override to modify basic RegExp-s.
 **/
LinkifyIt.prototype.onCompile = function onCompile() {
};


module.exports = LinkifyIt;


/***/ }),

/***/ "./node_modules/linkify-it/lib/re.js":
/*!*******************************************!*\
  !*** ./node_modules/linkify-it/lib/re.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";



module.exports = function (opts) {
  var re = {};
  opts = opts || {};

  // Use direct extract instead of `regenerate` to reduse browserified size
  re.src_Any = (__webpack_require__(/*! uc.micro/properties/Any/regex */ "./node_modules/uc.micro/properties/Any/regex.js").source);
  re.src_Cc  = (__webpack_require__(/*! uc.micro/categories/Cc/regex */ "./node_modules/uc.micro/categories/Cc/regex.js").source);
  re.src_Z   = (__webpack_require__(/*! uc.micro/categories/Z/regex */ "./node_modules/uc.micro/categories/Z/regex.js").source);
  re.src_P   = (__webpack_require__(/*! uc.micro/categories/P/regex */ "./node_modules/uc.micro/categories/P/regex.js").source);

  // \p{\Z\P\Cc\CF} (white spaces + control + format + punctuation)
  re.src_ZPCc = [ re.src_Z, re.src_P, re.src_Cc ].join('|');

  // \p{\Z\Cc} (white spaces + control)
  re.src_ZCc = [ re.src_Z, re.src_Cc ].join('|');

  // Experimental. List of chars, completely prohibited in links
  // because can separate it from other part of text
  var text_separators = '[><\uff5c]';

  // All possible word characters (everything without punctuation, spaces & controls)
  // Defined via punctuation & spaces to save space
  // Should be something like \p{\L\N\S\M} (\w but without `_`)
  re.src_pseudo_letter       = '(?:(?!' + text_separators + '|' + re.src_ZPCc + ')' + re.src_Any + ')';
  // The same as abothe but without [0-9]
  // var src_pseudo_letter_non_d = '(?:(?![0-9]|' + src_ZPCc + ')' + src_Any + ')';

  ////////////////////////////////////////////////////////////////////////////////

  re.src_ip4 =

    '(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';

  // Prohibit any of "@/[]()" in user/pass to avoid wrong domain fetch.
  re.src_auth    = '(?:(?:(?!' + re.src_ZCc + '|[@/\\[\\]()]).)+@)?';

  re.src_port =

    '(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?';

  re.src_host_terminator =

    '(?=$|' + text_separators + '|' + re.src_ZPCc + ')' +
    '(?!' + (opts['---'] ? '-(?!--)|' : '-|') + '_|:\\d|\\.-|\\.(?!$|' + re.src_ZPCc + '))';

  re.src_path =

    '(?:' +
      '[/?#]' +
        '(?:' +
          '(?!' + re.src_ZCc + '|' + text_separators + '|[()[\\]{}.,"\'?!\\-;]).|' +
          '\\[(?:(?!' + re.src_ZCc + '|\\]).)*\\]|' +
          '\\((?:(?!' + re.src_ZCc + '|[)]).)*\\)|' +
          '\\{(?:(?!' + re.src_ZCc + '|[}]).)*\\}|' +
          '\\"(?:(?!' + re.src_ZCc + '|["]).)+\\"|' +
          "\\'(?:(?!" + re.src_ZCc + "|[']).)+\\'|" +
          "\\'(?=" + re.src_pseudo_letter + '|[-])|' +  // allow `I'm_king` if no pair found
          '\\.{2,}[a-zA-Z0-9%/&]|' + // google has many dots in "google search" links (#66, #81).
                                     // github has ... in commit range links,
                                     // Restrict to
                                     // - english
                                     // - percent-encoded
                                     // - parts of file path
                                     // - params separator
                                     // until more examples found.
          '\\.(?!' + re.src_ZCc + '|[.]|$)|' +
          (opts['---'] ?
            '\\-(?!--(?:[^-]|$))(?:-*)|' // `---` => long dash, terminate
            :
            '\\-+|'
          ) +
          ',(?!' + re.src_ZCc + '|$)|' +       // allow `,,,` in paths
          ';(?!' + re.src_ZCc + '|$)|' +       // allow `;` if not followed by space-like char
          '\\!+(?!' + re.src_ZCc + '|[!]|$)|' +  // allow `!!!` in paths, but not at the end
          '\\?(?!' + re.src_ZCc + '|[?]|$)' +
        ')+' +
      '|\\/' +
    ')?';

  // Allow anything in markdown spec, forbid quote (") at the first position
  // because emails enclosed in quotes are far more common
  re.src_email_name =

    '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';

  re.src_xn =

    'xn--[a-z0-9\\-]{1,59}';

  // More to read about domain names
  // http://serverfault.com/questions/638260/

  re.src_domain_root =

    // Allow letters & digits (http://test1)
    '(?:' +
      re.src_xn +
      '|' +
      re.src_pseudo_letter + '{1,63}' +
    ')';

  re.src_domain =

    '(?:' +
      re.src_xn +
      '|' +
      '(?:' + re.src_pseudo_letter + ')' +
      '|' +
      '(?:' + re.src_pseudo_letter + '(?:-|' + re.src_pseudo_letter + '){0,61}' + re.src_pseudo_letter + ')' +
    ')';

  re.src_host =

    '(?:' +
    // Don't need IP check, because digits are already allowed in normal domain names
    //   src_ip4 +
    // '|' +
      '(?:(?:(?:' + re.src_domain + ')\\.)*' + re.src_domain/*_root*/ + ')' +
    ')';

  re.tpl_host_fuzzy =

    '(?:' +
      re.src_ip4 +
    '|' +
      '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))' +
    ')';

  re.tpl_host_no_ip_fuzzy =

    '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))';

  re.src_host_strict =

    re.src_host + re.src_host_terminator;

  re.tpl_host_fuzzy_strict =

    re.tpl_host_fuzzy + re.src_host_terminator;

  re.src_host_port_strict =

    re.src_host + re.src_port + re.src_host_terminator;

  re.tpl_host_port_fuzzy_strict =

    re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;

  re.tpl_host_port_no_ip_fuzzy_strict =

    re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;


  ////////////////////////////////////////////////////////////////////////////////
  // Main rules

  // Rude test fuzzy links by host, for quick deny
  re.tpl_host_fuzzy_test =

    'localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:' + re.src_ZPCc + '|>|$))';

  re.tpl_email_fuzzy =

      '(^|' + text_separators + '|"|\\(|' + re.src_ZCc + ')' +
      '(' + re.src_email_name + '@' + re.tpl_host_fuzzy_strict + ')';

  re.tpl_link_fuzzy =
      // Fuzzy link can't be prepended with .:/\- and non punctuation.
      // but can start with > (markdown blockquote)
      '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|' + re.src_ZPCc + '))' +
      '((?![$+<=>^`|\uff5c])' + re.tpl_host_port_fuzzy_strict + re.src_path + ')';

  re.tpl_link_no_ip_fuzzy =
      // Fuzzy link can't be prepended with .:/\- and non punctuation.
      // but can start with > (markdown blockquote)
      '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|' + re.src_ZPCc + '))' +
      '((?![$+<=>^`|\uff5c])' + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ')';

  return re;
};


/***/ }),

/***/ "./node_modules/markdown-it-attrs/index.js":
/*!*************************************************!*\
  !*** ./node_modules/markdown-it-attrs/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const patternsConfig = __webpack_require__(/*! ./patterns.js */ "./node_modules/markdown-it-attrs/patterns.js");

const defaultOptions = {
  leftDelimiter: '{',
  rightDelimiter: '}',
  allowedAttributes: []
};

module.exports = function attributes(md, options_) {
  let options = Object.assign({}, defaultOptions);
  options = Object.assign(options, options_);

  const patterns = patternsConfig(options);

  function curlyAttrs(state) {
    const tokens = state.tokens;

    for (let i = 0; i < tokens.length; i++) {
      for (let p = 0; p < patterns.length; p++) {
        const pattern = patterns[p];
        let j = null; // position of child with offset 0
        const match = pattern.tests.every(t => {
          const res = test(tokens, i, t);
          if (res.j !== null) { j = res.j; }
          return res.match;
        });
        if (match) {
          pattern.transform(tokens, i, j);
          if (pattern.name === 'inline attributes' || pattern.name === 'inline nesting 0') {
            // retry, may be several inline attributes
            p--;
          }
        }
      }
    }
  }

  md.core.ruler.before('linkify', 'curly_attributes', curlyAttrs);
};

/**
 * Test if t matches token stream.
 *
 * @param {array} tokens
 * @param {number} i
 * @param {object} t Test to match.
 * @return {object} { match: true|false, j: null|number }
 */
function test(tokens, i, t) {
  const res = {
    match: false,
    j: null  // position of child
  };

  const ii = t.shift !== undefined
    ? i + t.shift
    : t.position;

  if (t.shift !== undefined && ii < 0) {
    // we should never shift to negative indexes (rolling around to back of array)
    return res;
  }

  const token = get(tokens, ii);  // supports negative ii


  if (token === undefined) { return res; }

  for (const key of Object.keys(t)) {
    if (key === 'shift' || key === 'position') { continue; }

    if (token[key] === undefined) { return res; }

    if (key === 'children' && isArrayOfObjects(t.children)) {
      if (token.children.length === 0) {
        return res;
      }
      let match;
      const childTests = t.children;
      const children = token.children;
      if (childTests.every(tt => tt.position !== undefined)) {
        // positions instead of shifts, do not loop all children
        match = childTests.every(tt => test(children, tt.position, tt).match);
        if (match) {
          // we may need position of child in transform
          const j = last(childTests).position;
          res.j = j >= 0 ? j : children.length + j;
        }
      } else {
        for (let j = 0; j < children.length; j++) {
          match = childTests.every(tt => test(children, j, tt).match);
          if (match) {
            res.j = j;
            // all tests true, continue with next key of pattern t
            break;
          }
        }
      }

      if (match === false) { return res; }

      continue;
    }

    switch (typeof t[key]) {
    case 'boolean':
    case 'number':
    case 'string':
      if (token[key] !== t[key]) { return res; }
      break;
    case 'function':
      if (!t[key](token[key])) { return res; }
      break;
    case 'object':
      if (isArrayOfFunctions(t[key])) {
        const r = t[key].every(tt => tt(token[key]));
        if (r === false) { return res; }
        break;
      }
    // fall through for objects !== arrays of functions
    default:
      throw new Error(`Unknown type of pattern test (key: ${key}). Test should be of type boolean, number, string, function or array of functions.`);
    }
  }

  // no tests returned false -> all tests returns true
  res.match = true;
  return res;
}

function isArrayOfObjects(arr) {
  return Array.isArray(arr) && arr.length && arr.every(i => typeof i === 'object');
}

function isArrayOfFunctions(arr) {
  return Array.isArray(arr) && arr.length && arr.every(i => typeof i === 'function');
}

/**
 * Get n item of array. Supports negative n, where -1 is last
 * element in array.
 * @param {array} arr
 * @param {number} n
 */
function get(arr, n) {
  return n >= 0 ? arr[n] : arr[arr.length + n];
}

// get last element of array, safe - returns {} if not found
function last(arr) {
  return arr.slice(-1)[0] || {};
}


/***/ }),

/***/ "./node_modules/markdown-it-attrs/patterns.js":
/*!****************************************************!*\
  !*** ./node_modules/markdown-it-attrs/patterns.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/**
 * If a pattern matches the token stream,
 * then run transform.
 */

const utils = __webpack_require__(/*! ./utils.js */ "./node_modules/markdown-it-attrs/utils.js");

module.exports = options => {
  const __hr = new RegExp('^ {0,3}[-*_]{3,} ?'
                          + utils.escapeRegExp(options.leftDelimiter)
                          + '[^' + utils.escapeRegExp(options.rightDelimiter) + ']');

  return ([
    {
      /**
       * ```python {.cls}
       * for i in range(10):
       *     print(i)
       * ```
       */
      name: 'fenced code blocks',
      tests: [
        {
          shift: 0,
          block: true,
          info: utils.hasDelimiters('end', options)
        }
      ],
      transform: (tokens, i) => {
        const token = tokens[i];
        const start = token.info.lastIndexOf(options.leftDelimiter);
        const attrs = utils.getAttrs(token.info, start, options);
        utils.addAttrs(attrs, token);
        token.info = utils.removeDelimiter(token.info, options);
      }
    }, {
      /**
       * bla `click()`{.c} ![](img.png){.d}
       *
       * differs from 'inline attributes' as it does
       * not have a closing tag (nesting: -1)
       */
      name: 'inline nesting 0',
      tests: [
        {
          shift: 0,
          type: 'inline',
          children: [
            {
              shift: -1,
              type: (str) => str === 'image' || str === 'code_inline'
            }, {
              shift: 0,
              type: 'text',
              content: utils.hasDelimiters('start', options)
            }
          ]
        }
      ],
      transform: (tokens, i, j) => {
        const token = tokens[i].children[j];
        const endChar = token.content.indexOf(options.rightDelimiter);
        const attrToken = tokens[i].children[j - 1];
        const attrs = utils.getAttrs(token.content, 0, options);
        utils.addAttrs(attrs, attrToken);
        if (token.content.length === (endChar + options.rightDelimiter.length)) {
          tokens[i].children.splice(j, 1);
        } else {
          token.content = token.content.slice(endChar + options.rightDelimiter.length);
        }
      }
    }, {
      /**
       * | h1 |
       * | -- |
       * | c1 |
       *
       * {.c}
       */
      name: 'tables',
      tests: [
        {
          // let this token be i, such that for-loop continues at
          // next token after tokens.splice
          shift: 0,
          type: 'table_close'
        }, {
          shift: 1,
          type: 'paragraph_open'
        }, {
          shift: 2,
          type: 'inline',
          content: utils.hasDelimiters('only', options)
        }
      ],
      transform: (tokens, i) => {
        const token = tokens[i + 2];
        const tableOpen = utils.getMatchingOpeningToken(tokens, i);
        const attrs = utils.getAttrs(token.content, 0, options);
        // add attributes
        utils.addAttrs(attrs, tableOpen);
        // remove <p>{.c}</p>
        tokens.splice(i + 1, 3);
      }
    }, {
      /**
       * *emphasis*{.with attrs=1}
       */
      name: 'inline attributes',
      tests: [
        {
          shift: 0,
          type: 'inline',
          children: [
            {
              shift: -1,
              nesting: -1  // closing inline tag, </em>{.a}
            }, {
              shift: 0,
              type: 'text',
              content: utils.hasDelimiters('start', options)
            }
          ]
        }
      ],
      transform: (tokens, i, j) => {
        const token = tokens[i].children[j];
        const content = token.content;
        const attrs = utils.getAttrs(content, 0, options);
        const openingToken = utils.getMatchingOpeningToken(tokens[i].children, j - 1);
        utils.addAttrs(attrs, openingToken);
        token.content = content.slice(content.indexOf(options.rightDelimiter) + options.rightDelimiter.length);
      }
    }, {
      /**
       * - item
       * {.a}
       */
      name: 'list softbreak',
      tests: [
        {
          shift: -2,
          type: 'list_item_open'
        }, {
          shift: 0,
          type: 'inline',
          children: [
            {
              position: -2,
              type: 'softbreak'
            }, {
              position: -1,
              type: 'text',
              content: utils.hasDelimiters('only', options)
            }
          ]
        }
      ],
      transform: (tokens, i, j) => {
        const token = tokens[i].children[j];
        const content = token.content;
        const attrs = utils.getAttrs(content, 0, options);
        let ii = i - 2;
        while (tokens[ii - 1] &&
          tokens[ii - 1].type !== 'ordered_list_open' &&
          tokens[ii - 1].type !== 'bullet_list_open') { ii--; }
        utils.addAttrs(attrs, tokens[ii - 1]);
        tokens[i].children = tokens[i].children.slice(0, -2);
      }
    }, {
      /**
       * - nested list
       *   - with double \n
       *   {.a} <-- apply to nested ul
       *
       * {.b} <-- apply to root <ul>
       */
      name: 'list double softbreak',
      tests: [
        {
          // let this token be i = 0 so that we can erase
          // the <p>{.a}</p> tokens below
          shift: 0,
          type: (str) =>
            str === 'bullet_list_close' ||
            str === 'ordered_list_close'
        }, {
          shift: 1,
          type: 'paragraph_open'
        }, {
          shift: 2,
          type: 'inline',
          content: utils.hasDelimiters('only', options),
          children: (arr) => arr.length === 1
        }, {
          shift: 3,
          type: 'paragraph_close'
        }
      ],
      transform: (tokens, i) => {
        const token = tokens[i + 2];
        const content = token.content;
        const attrs = utils.getAttrs(content, 0, options);
        const openingToken = utils.getMatchingOpeningToken(tokens, i);
        utils.addAttrs(attrs, openingToken);
        tokens.splice(i + 1, 3);
      }
    }, {
      /**
       * - end of {.list-item}
       */
      name: 'list item end',
      tests: [
        {
          shift: -2,
          type: 'list_item_open'
        }, {
          shift: 0,
          type: 'inline',
          children: [
            {
              position: -1,
              type: 'text',
              content: utils.hasDelimiters('end', options)
            }
          ]
        }
      ],
      transform: (tokens, i, j) => {
        const token = tokens[i].children[j];
        const content = token.content;
        const attrs = utils.getAttrs(content, content.lastIndexOf(options.leftDelimiter), options);
        utils.addAttrs(attrs, tokens[i - 2]);
        const trimmed = content.slice(0, content.lastIndexOf(options.leftDelimiter));
        token.content = last(trimmed) !== ' ' ?
          trimmed : trimmed.slice(0, -1);
      }
    }, {
      /**
       * something with softbreak
       * {.cls}
       */
      name: '\n{.a} softbreak then curly in start',
      tests: [
        {
          shift: 0,
          type: 'inline',
          children: [
            {
              position: -2,
              type: 'softbreak'
            }, {
              position: -1,
              type: 'text',
              content: utils.hasDelimiters('only', options)
            }
          ]
        }
      ],
      transform: (tokens, i, j) => {
        const token = tokens[i].children[j];
        const attrs = utils.getAttrs(token.content, 0, options);
        // find last closing tag
        let ii = i + 1;
        while (tokens[ii + 1] && tokens[ii + 1].nesting === -1) { ii++; }
        const openingToken = utils.getMatchingOpeningToken(tokens, ii);
        utils.addAttrs(attrs, openingToken);
        tokens[i].children = tokens[i].children.slice(0, -2);
      }
    }, {
      /**
       * horizontal rule --- {#id}
       */
      name: 'horizontal rule',
      tests: [
        {
          shift: 0,
          type: 'paragraph_open'
        },
        {
          shift: 1,
          type: 'inline',
          children: (arr) => arr.length === 1,
          content: (str) => str.match(__hr) !== null,
        },
        {
          shift: 2,
          type: 'paragraph_close'
        }
      ],
      transform: (tokens, i) => {
        const token = tokens[i];
        token.type = 'hr';
        token.tag = 'hr';
        token.nesting = 0;
        const content = tokens[i + 1].content;
        const start = content.lastIndexOf(options.leftDelimiter);
        const attrs = utils.getAttrs(content, start, options);
        utils.addAttrs(attrs, token);
        token.markup = content;
        tokens.splice(i + 1, 2);
      }
    }, {
      /**
       * end of {.block}
       */
      name: 'end of block',
      tests: [
        {
          shift: 0,
          type: 'inline',
          children: [
            {
              position: -1,
              content: utils.hasDelimiters('end', options),
              type: (t) => t !== 'code_inline' && t !== 'math_inline'
            }
          ]
        }
      ],
      transform: (tokens, i, j) => {
        const token = tokens[i].children[j];
        const content = token.content;
        const attrs = utils.getAttrs(content, content.lastIndexOf(options.leftDelimiter), options);
        let ii = i + 1;
        while (tokens[ii + 1] && tokens[ii + 1].nesting === -1) { ii++; }
        const openingToken = utils.getMatchingOpeningToken(tokens, ii);
        utils.addAttrs(attrs, openingToken);
        const trimmed = content.slice(0, content.lastIndexOf(options.leftDelimiter));
        token.content = last(trimmed) !== ' ' ?
          trimmed : trimmed.slice(0, -1);
      }
    }
  ]);
};

// get last element of array or string
function last(arr) {
  return arr.slice(-1)[0];
}


/***/ }),

/***/ "./node_modules/markdown-it-attrs/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/markdown-it-attrs/utils.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

/**
 * parse {.class #id key=val} strings
 * @param {string} str: string to parse
 * @param {int} start: where to start parsing (including {)
 * @returns {2d array}: [['key', 'val'], ['class', 'red']]
 */
exports.getAttrs = function (str, start, options) {
  // not tab, line feed, form feed, space, solidus, greater than sign, quotation mark, apostrophe and equals sign
  const allowedKeyChars = /[^\t\n\f />"'=]/;
  const pairSeparator = ' ';
  const keySeparator = '=';
  const classChar = '.';
  const idChar = '#';

  const attrs = [];
  let key = '';
  let value = '';
  let parsingKey = true;
  let valueInsideQuotes = false;

  // read inside {}
  // start + left delimiter length to avoid beginning {
  // breaks when } is found or end of string
  for (let i = start + options.leftDelimiter.length; i < str.length; i++) {
    if (str.slice(i, i + options.rightDelimiter.length) === options.rightDelimiter) {
      if (key !== '') { attrs.push([key, value]); }
      break;
    }
    const char_ = str.charAt(i);

    // switch to reading value if equal sign
    if (char_ === keySeparator && parsingKey) {
      parsingKey = false;
      continue;
    }

    // {.class} {..css-module}
    if (char_ === classChar && key === '') {
      if (str.charAt(i + 1) === classChar) {
        key = 'css-module';
        i += 1;
      } else {
        key = 'class';
      }
      parsingKey = false;
      continue;
    }

    // {#id}
    if (char_ === idChar && key === '') {
      key = 'id';
      parsingKey = false;
      continue;
    }

    // {value="inside quotes"}
    if (char_ === '"' && value === '' && !valueInsideQuotes) {
      valueInsideQuotes = true;
      continue;
    }
    if (char_ === '"' && valueInsideQuotes) {
      valueInsideQuotes = false;
      continue;
    }

    // read next key/value pair
    if ((char_ === pairSeparator && !valueInsideQuotes)) {
      if (key === '') {
        // beginning or ending space: { .red } vs {.red}
        continue;
      }
      attrs.push([key, value]);
      key = '';
      value = '';
      parsingKey = true;
      continue;
    }

    // continue if character not allowed
    if (parsingKey && char_.search(allowedKeyChars) === -1) {
      continue;
    }

    // no other conditions met; append to key/value
    if (parsingKey) {
      key += char_;
      continue;
    }
    value += char_;
  }

  if (options.allowedAttributes && options.allowedAttributes.length) {
    const allowedAttributes = options.allowedAttributes;

    return attrs.filter(function (attrPair) {
      const attr = attrPair[0];

      function isAllowedAttribute (allowedAttribute) {
        return (attr === allowedAttribute
          || (allowedAttribute instanceof RegExp && allowedAttribute.test(attr))
        );
      }

      return allowedAttributes.some(isAllowedAttribute);
    });

  }
  return attrs;

};

/**
 * add attributes from [['key', 'val']] list
 * @param {array} attrs: [['key', 'val']]
 * @param {token} token: which token to add attributes
 * @returns token
 */
exports.addAttrs = function (attrs, token) {
  for (let j = 0, l = attrs.length; j < l; ++j) {
    const key = attrs[j][0];
    if (key === 'class') {
      token.attrJoin('class', attrs[j][1]);
    } else if (key === 'css-module') {
      token.attrJoin('css-module', attrs[j][1]);
    } else {
      token.attrPush(attrs[j]);
    }
  }
  return token;
};

/**
 * Does string have properly formatted curly?
 *
 * start: '{.a} asdf'
 * end: 'asdf {.a}'
 * only: '{.a}'
 *
 * @param {string} where to expect {} curly. start, end or only.
 * @return {function(string)} Function which testes if string has curly.
 */
exports.hasDelimiters = function (where, options) {

  if (!where) {
    throw new Error('Parameter `where` not passed. Should be "start", "end" or "only".');
  }

  /**
   * @param {string} str
   * @return {boolean}
   */
  return function (str) {
    // we need minimum three chars, for example {b}
    const minCurlyLength = options.leftDelimiter.length + 1 + options.rightDelimiter.length;
    if (!str || typeof str !== 'string' || str.length < minCurlyLength) {
      return false;
    }

    function validCurlyLength (curly) {
      const isClass = curly.charAt(options.leftDelimiter.length) === '.';
      const isId = curly.charAt(options.leftDelimiter.length) === '#';
      return (isClass || isId)
        ? curly.length >= (minCurlyLength + 1)
        : curly.length >= minCurlyLength;
    }

    let start, end, slice, nextChar;
    const rightDelimiterMinimumShift = minCurlyLength - options.rightDelimiter.length;
    switch (where) {
    case 'start':
      // first char should be {, } found in char 2 or more
      slice = str.slice(0, options.leftDelimiter.length);
      start = slice === options.leftDelimiter ? 0 : -1;
      end = start === -1 ? -1 : str.indexOf(options.rightDelimiter, rightDelimiterMinimumShift);
      // check if next character is not one of the delimiters
      nextChar = str.charAt(end + options.rightDelimiter.length);
      if (nextChar && options.rightDelimiter.indexOf(nextChar) !== -1) {
        end = -1;
      }
      break;

    case 'end':
      // last char should be }
      start = str.lastIndexOf(options.leftDelimiter);
      end = start === -1 ? -1 : str.indexOf(options.rightDelimiter, start + rightDelimiterMinimumShift);
      end = end === str.length - options.rightDelimiter.length ? end : -1;
      break;

    case 'only':
      // '{.a}'
      slice = str.slice(0, options.leftDelimiter.length);
      start = slice === options.leftDelimiter ? 0 : -1;
      slice = str.slice(str.length - options.rightDelimiter.length);
      end = slice === options.rightDelimiter ? str.length - options.rightDelimiter.length : -1;
      break;

    default:
      throw new Error(`Unexpected case ${where}, expected 'start', 'end' or 'only'`);
    }

    return start !== -1 && end !== -1 && validCurlyLength(str.substring(start, end + options.rightDelimiter.length));
  };
};

/**
 * Removes last curly from string.
 */
exports.removeDelimiter = function (str, options) {
  const start = escapeRegExp(options.leftDelimiter);
  const end = escapeRegExp(options.rightDelimiter);

  const curly = new RegExp(
    '[ \\n]?' + start + '[^' + start + end + ']+' + end + '$'
  );
  const pos = str.search(curly);

  return pos !== -1 ? str.slice(0, pos) : str;
};

/**
 * Escapes special characters in string s such that the string
 * can be used in `new RegExp`. For example "[" becomes "\\[".
 *
 * @param {string} s Regex string.
 * @return {string} Escaped string.
 */
function escapeRegExp (s) {
  return s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}
exports.escapeRegExp = escapeRegExp;

/**
 * find corresponding opening block
 */
exports.getMatchingOpeningToken = function (tokens, i) {
  if (tokens[i].type === 'softbreak') {
    return false;
  }
  // non closing blocks, example img
  if (tokens[i].nesting === 0) {
    return tokens[i];
  }

  const level = tokens[i].level;
  const type = tokens[i].type.replace('_close', '_open');

  for (; i >= 0; --i) {
    if (tokens[i].type === type && tokens[i].level === level) {
      return tokens[i];
    }
  }

  return false;
};


/**
 * from https://github.com/markdown-it/markdown-it/blob/master/lib/common/utils.js
 */
const HTML_ESCAPE_TEST_RE = /[&<>"]/;
const HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
const HTML_REPLACEMENTS = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;'
};

function replaceUnsafeChar(ch) {
  return HTML_REPLACEMENTS[ch];
}

exports.escapeHtml = function (str) {
  if (HTML_ESCAPE_TEST_RE.test(str)) {
    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
  }
  return str;
};


/***/ }),

/***/ "./node_modules/markdown-it/index.js":
/*!*******************************************!*\
  !*** ./node_modules/markdown-it/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";



module.exports = __webpack_require__(/*! ./lib/ */ "./node_modules/markdown-it/lib/index.js");


/***/ }),

/***/ "./node_modules/markdown-it/lib/common/entities.js":
/*!*********************************************************!*\
  !*** ./node_modules/markdown-it/lib/common/entities.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// HTML5 entities map: { name -> utf16string }
//


/*eslint quotes:0*/
module.exports = __webpack_require__(/*! entities/lib/maps/entities.json */ "./node_modules/entities/lib/maps/entities.json");


/***/ }),

/***/ "./node_modules/markdown-it/lib/common/html_blocks.js":
/*!************************************************************!*\
  !*** ./node_modules/markdown-it/lib/common/html_blocks.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
// List of valid html blocks names, accorting to commonmark spec
// http://jgm.github.io/CommonMark/spec.html#html-blocks




module.exports = [
  'address',
  'article',
  'aside',
  'base',
  'basefont',
  'blockquote',
  'body',
  'caption',
  'center',
  'col',
  'colgroup',
  'dd',
  'details',
  'dialog',
  'dir',
  'div',
  'dl',
  'dt',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'frame',
  'frameset',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hr',
  'html',
  'iframe',
  'legend',
  'li',
  'link',
  'main',
  'menu',
  'menuitem',
  'nav',
  'noframes',
  'ol',
  'optgroup',
  'option',
  'p',
  'param',
  'section',
  'source',
  'summary',
  'table',
  'tbody',
  'td',
  'tfoot',
  'th',
  'thead',
  'title',
  'tr',
  'track',
  'ul'
];


/***/ }),

/***/ "./node_modules/markdown-it/lib/common/html_re.js":
/*!********************************************************!*\
  !*** ./node_modules/markdown-it/lib/common/html_re.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
// Regexps to match html elements



var attr_name     = '[a-zA-Z_:][a-zA-Z0-9:._-]*';

var unquoted      = '[^"\'=<>`\\x00-\\x20]+';
var single_quoted = "'[^']*'";
var double_quoted = '"[^"]*"';

var attr_value  = '(?:' + unquoted + '|' + single_quoted + '|' + double_quoted + ')';

var attribute   = '(?:\\s+' + attr_name + '(?:\\s*=\\s*' + attr_value + ')?)';

var open_tag    = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>';

var close_tag   = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
var comment     = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
var processing  = '<[?][\\s\\S]*?[?]>';
var declaration = '<![A-Z]+\\s+[^>]*>';
var cdata       = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';

var HTML_TAG_RE = new RegExp('^(?:' + open_tag + '|' + close_tag + '|' + comment +
                        '|' + processing + '|' + declaration + '|' + cdata + ')');
var HTML_OPEN_CLOSE_TAG_RE = new RegExp('^(?:' + open_tag + '|' + close_tag + ')');

module.exports.HTML_TAG_RE = HTML_TAG_RE;
module.exports.HTML_OPEN_CLOSE_TAG_RE = HTML_OPEN_CLOSE_TAG_RE;


/***/ }),

/***/ "./node_modules/markdown-it/lib/common/utils.js":
/*!******************************************************!*\
  !*** ./node_modules/markdown-it/lib/common/utils.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
// Utilities
//



function _class(obj) { return Object.prototype.toString.call(obj); }

function isString(obj) { return _class(obj) === '[object String]'; }

var _hasOwnProperty = Object.prototype.hasOwnProperty;

function has(object, key) {
  return _hasOwnProperty.call(object, key);
}

// Merge objects
//
function assign(obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);

  sources.forEach(function (source) {
    if (!source) { return; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be object');
    }

    Object.keys(source).forEach(function (key) {
      obj[key] = source[key];
    });
  });

  return obj;
}

// Remove element from array and put another array at those position.
// Useful for some operations with tokens
function arrayReplaceAt(src, pos, newElements) {
  return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
}

////////////////////////////////////////////////////////////////////////////////

function isValidEntityCode(c) {
  /*eslint no-bitwise:0*/
  // broken sequence
  if (c >= 0xD800 && c <= 0xDFFF) { return false; }
  // never used
  if (c >= 0xFDD0 && c <= 0xFDEF) { return false; }
  if ((c & 0xFFFF) === 0xFFFF || (c & 0xFFFF) === 0xFFFE) { return false; }
  // control codes
  if (c >= 0x00 && c <= 0x08) { return false; }
  if (c === 0x0B) { return false; }
  if (c >= 0x0E && c <= 0x1F) { return false; }
  if (c >= 0x7F && c <= 0x9F) { return false; }
  // out of range
  if (c > 0x10FFFF) { return false; }
  return true;
}

function fromCodePoint(c) {
  /*eslint no-bitwise:0*/
  if (c > 0xffff) {
    c -= 0x10000;
    var surrogate1 = 0xd800 + (c >> 10),
        surrogate2 = 0xdc00 + (c & 0x3ff);

    return String.fromCharCode(surrogate1, surrogate2);
  }
  return String.fromCharCode(c);
}


var UNESCAPE_MD_RE  = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
var ENTITY_RE       = /&([a-z#][a-z0-9]{1,31});/gi;
var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + '|' + ENTITY_RE.source, 'gi');

var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;

var entities = __webpack_require__(/*! ./entities */ "./node_modules/markdown-it/lib/common/entities.js");

function replaceEntityPattern(match, name) {
  var code;

  if (has(entities, name)) {
    return entities[name];
  }

  if (name.charCodeAt(0) === 0x23/* # */ && DIGITAL_ENTITY_TEST_RE.test(name)) {
    code = name[1].toLowerCase() === 'x' ?
      parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);

    if (isValidEntityCode(code)) {
      return fromCodePoint(code);
    }
  }

  return match;
}

/*function replaceEntities(str) {
  if (str.indexOf('&') < 0) { return str; }

  return str.replace(ENTITY_RE, replaceEntityPattern);
}*/

function unescapeMd(str) {
  if (str.indexOf('\\') < 0) { return str; }
  return str.replace(UNESCAPE_MD_RE, '$1');
}

function unescapeAll(str) {
  if (str.indexOf('\\') < 0 && str.indexOf('&') < 0) { return str; }

  return str.replace(UNESCAPE_ALL_RE, function (match, escaped, entity) {
    if (escaped) { return escaped; }
    return replaceEntityPattern(match, entity);
  });
}

////////////////////////////////////////////////////////////////////////////////

var HTML_ESCAPE_TEST_RE = /[&<>"]/;
var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
var HTML_REPLACEMENTS = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;'
};

function replaceUnsafeChar(ch) {
  return HTML_REPLACEMENTS[ch];
}

function escapeHtml(str) {
  if (HTML_ESCAPE_TEST_RE.test(str)) {
    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
  }
  return str;
}

////////////////////////////////////////////////////////////////////////////////

var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;

function escapeRE(str) {
  return str.replace(REGEXP_ESCAPE_RE, '\\$&');
}

////////////////////////////////////////////////////////////////////////////////

function isSpace(code) {
  switch (code) {
    case 0x09:
    case 0x20:
      return true;
  }
  return false;
}

// Zs (unicode class) || [\t\f\v\r\n]
function isWhiteSpace(code) {
  if (code >= 0x2000 && code <= 0x200A) { return true; }
  switch (code) {
    case 0x09: // \t
    case 0x0A: // \n
    case 0x0B: // \v
    case 0x0C: // \f
    case 0x0D: // \r
    case 0x20:
    case 0xA0:
    case 0x1680:
    case 0x202F:
    case 0x205F:
    case 0x3000:
      return true;
  }
  return false;
}

////////////////////////////////////////////////////////////////////////////////

/*eslint-disable max-len*/
var UNICODE_PUNCT_RE = __webpack_require__(/*! uc.micro/categories/P/regex */ "./node_modules/uc.micro/categories/P/regex.js");

// Currently without astral characters support.
function isPunctChar(ch) {
  return UNICODE_PUNCT_RE.test(ch);
}


// Markdown ASCII punctuation characters.
//
// !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~
// http://spec.commonmark.org/0.15/#ascii-punctuation-character
//
// Don't confuse with unicode punctuation !!! It lacks some chars in ascii range.
//
function isMdAsciiPunct(ch) {
  switch (ch) {
    case 0x21/* ! */:
    case 0x22/* " */:
    case 0x23/* # */:
    case 0x24/* $ */:
    case 0x25/* % */:
    case 0x26/* & */:
    case 0x27/* ' */:
    case 0x28/* ( */:
    case 0x29/* ) */:
    case 0x2A/* * */:
    case 0x2B/* + */:
    case 0x2C/* , */:
    case 0x2D/* - */:
    case 0x2E/* . */:
    case 0x2F/* / */:
    case 0x3A/* : */:
    case 0x3B/* ; */:
    case 0x3C/* < */:
    case 0x3D/* = */:
    case 0x3E/* > */:
    case 0x3F/* ? */:
    case 0x40/* @ */:
    case 0x5B/* [ */:
    case 0x5C/* \ */:
    case 0x5D/* ] */:
    case 0x5E/* ^ */:
    case 0x5F/* _ */:
    case 0x60/* ` */:
    case 0x7B/* { */:
    case 0x7C/* | */:
    case 0x7D/* } */:
    case 0x7E/* ~ */:
      return true;
    default:
      return false;
  }
}

// Hepler to unify [reference labels].
//
function normalizeReference(str) {
  // Trim and collapse whitespace
  //
  str = str.trim().replace(/\s+/g, ' ');

  // In node v10 'ẞ'.toLowerCase() === 'Ṿ', which is presumed to be a bug
  // fixed in v12 (couldn't find any details).
  //
  // So treat this one as a special case
  // (remove this when node v10 is no longer supported).
  //
  if ('ẞ'.toLowerCase() === 'Ṿ') {
    str = str.replace(/ẞ/g, 'ß');
  }

  // .toLowerCase().toUpperCase() should get rid of all differences
  // between letter variants.
  //
  // Simple .toLowerCase() doesn't normalize 125 code points correctly,
  // and .toUpperCase doesn't normalize 6 of them (list of exceptions:
  // İ, ϴ, ẞ, Ω, K, Å - those are already uppercased, but have differently
  // uppercased versions).
  //
  // Here's an example showing how it happens. Lets take greek letter omega:
  // uppercase U+0398 (Θ), U+03f4 (ϴ) and lowercase U+03b8 (θ), U+03d1 (ϑ)
  //
  // Unicode entries:
  // 0398;GREEK CAPITAL LETTER THETA;Lu;0;L;;;;;N;;;;03B8;
  // 03B8;GREEK SMALL LETTER THETA;Ll;0;L;;;;;N;;;0398;;0398
  // 03D1;GREEK THETA SYMBOL;Ll;0;L;<compat> 03B8;;;;N;GREEK SMALL LETTER SCRIPT THETA;;0398;;0398
  // 03F4;GREEK CAPITAL THETA SYMBOL;Lu;0;L;<compat> 0398;;;;N;;;;03B8;
  //
  // Case-insensitive comparison should treat all of them as equivalent.
  //
  // But .toLowerCase() doesn't change ϑ (it's already lowercase),
  // and .toUpperCase() doesn't change ϴ (already uppercase).
  //
  // Applying first lower then upper case normalizes any character:
  // '\u0398\u03f4\u03b8\u03d1'.toLowerCase().toUpperCase() === '\u0398\u0398\u0398\u0398'
  //
  // Note: this is equivalent to unicode case folding; unicode normalization
  // is a different step that is not required here.
  //
  // Final result should be uppercased, because it's later stored in an object
  // (this avoid a conflict with Object.prototype members,
  // most notably, `__proto__`)
  //
  return str.toLowerCase().toUpperCase();
}

////////////////////////////////////////////////////////////////////////////////

// Re-export libraries commonly used in both markdown-it and its plugins,
// so plugins won't have to depend on them explicitly, which reduces their
// bundled size (e.g. a browser build).
//
exports.lib                 = {};
exports.lib.mdurl = __webpack_require__(/*! mdurl */ "./node_modules/mdurl/index.js");
exports.lib.ucmicro = __webpack_require__(/*! uc.micro */ "./node_modules/uc.micro/index.js");

exports.assign              = assign;
exports.isString            = isString;
exports.has                 = has;
exports.unescapeMd          = unescapeMd;
exports.unescapeAll         = unescapeAll;
exports.isValidEntityCode   = isValidEntityCode;
exports.fromCodePoint       = fromCodePoint;
// exports.replaceEntities     = replaceEntities;
exports.escapeHtml          = escapeHtml;
exports.arrayReplaceAt      = arrayReplaceAt;
exports.isSpace             = isSpace;
exports.isWhiteSpace        = isWhiteSpace;
exports.isMdAsciiPunct      = isMdAsciiPunct;
exports.isPunctChar         = isPunctChar;
exports.escapeRE            = escapeRE;
exports.normalizeReference  = normalizeReference;


/***/ }),

/***/ "./node_modules/markdown-it/lib/helpers/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/markdown-it/lib/helpers/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
// Just a shortcut for bulk export



exports.parseLinkLabel = __webpack_require__(/*! ./parse_link_label */ "./node_modules/markdown-it/lib/helpers/parse_link_label.js");
exports.parseLinkDestination = __webpack_require__(/*! ./parse_link_destination */ "./node_modules/markdown-it/lib/helpers/parse_link_destination.js");
exports.parseLinkTitle = __webpack_require__(/*! ./parse_link_title */ "./node_modules/markdown-it/lib/helpers/parse_link_title.js");


/***/ }),

/***/ "./node_modules/markdown-it/lib/helpers/parse_link_destination.js":
/*!************************************************************************!*\
  !*** ./node_modules/markdown-it/lib/helpers/parse_link_destination.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Parse link destination
//



var unescapeAll = (__webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").unescapeAll);


module.exports = function parseLinkDestination(str, start, max) {
  var code, level,
      pos = start,
      result = {
        ok: false,
        pos: 0,
        lines: 0,
        str: ''
      };

  if (str.charCodeAt(pos) === 0x3C /* < */) {
    pos++;
    while (pos < max) {
      code = str.charCodeAt(pos);
      if (code === 0x0A /* \n */) { return result; }
      if (code === 0x3C /* < */) { return result; }
      if (code === 0x3E /* > */) {
        result.pos = pos + 1;
        result.str = unescapeAll(str.slice(start + 1, pos));
        result.ok = true;
        return result;
      }
      if (code === 0x5C /* \ */ && pos + 1 < max) {
        pos += 2;
        continue;
      }

      pos++;
    }

    // no closing '>'
    return result;
  }

  // this should be ... } else { ... branch

  level = 0;
  while (pos < max) {
    code = str.charCodeAt(pos);

    if (code === 0x20) { break; }

    // ascii control characters
    if (code < 0x20 || code === 0x7F) { break; }

    if (code === 0x5C /* \ */ && pos + 1 < max) {
      if (str.charCodeAt(pos + 1) === 0x20) { break; }
      pos += 2;
      continue;
    }

    if (code === 0x28 /* ( */) {
      level++;
      if (level > 32) { return result; }
    }

    if (code === 0x29 /* ) */) {
      if (level === 0) { break; }
      level--;
    }

    pos++;
  }

  if (start === pos) { return result; }
  if (level !== 0) { return result; }

  result.str = unescapeAll(str.slice(start, pos));
  result.pos = pos;
  result.ok = true;
  return result;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/helpers/parse_link_label.js":
/*!******************************************************************!*\
  !*** ./node_modules/markdown-it/lib/helpers/parse_link_label.js ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
// Parse link label
//
// this function assumes that first character ("[") already matches;
// returns the end of the label
//


module.exports = function parseLinkLabel(state, start, disableNested) {
  var level, found, marker, prevPos,
      labelEnd = -1,
      max = state.posMax,
      oldPos = state.pos;

  state.pos = start + 1;
  level = 1;

  while (state.pos < max) {
    marker = state.src.charCodeAt(state.pos);
    if (marker === 0x5D /* ] */) {
      level--;
      if (level === 0) {
        found = true;
        break;
      }
    }

    prevPos = state.pos;
    state.md.inline.skipToken(state);
    if (marker === 0x5B /* [ */) {
      if (prevPos === state.pos - 1) {
        // increase level if we find text `[`, which is not a part of any token
        level++;
      } else if (disableNested) {
        state.pos = oldPos;
        return -1;
      }
    }
  }

  if (found) {
    labelEnd = state.pos;
  }

  // restore old state
  state.pos = oldPos;

  return labelEnd;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/helpers/parse_link_title.js":
/*!******************************************************************!*\
  !*** ./node_modules/markdown-it/lib/helpers/parse_link_title.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Parse link title
//



var unescapeAll = (__webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").unescapeAll);


module.exports = function parseLinkTitle(str, start, max) {
  var code,
      marker,
      lines = 0,
      pos = start,
      result = {
        ok: false,
        pos: 0,
        lines: 0,
        str: ''
      };

  if (pos >= max) { return result; }

  marker = str.charCodeAt(pos);

  if (marker !== 0x22 /* " */ && marker !== 0x27 /* ' */ && marker !== 0x28 /* ( */) { return result; }

  pos++;

  // if opening marker is "(", switch it to closing marker ")"
  if (marker === 0x28) { marker = 0x29; }

  while (pos < max) {
    code = str.charCodeAt(pos);
    if (code === marker) {
      result.pos = pos + 1;
      result.lines = lines;
      result.str = unescapeAll(str.slice(start + 1, pos));
      result.ok = true;
      return result;
    } else if (code === 0x28 /* ( */ && marker === 0x29 /* ) */) {
      return result;
    } else if (code === 0x0A) {
      lines++;
    } else if (code === 0x5C /* \ */ && pos + 1 < max) {
      pos++;
      if (str.charCodeAt(pos) === 0x0A) {
        lines++;
      }
    }

    pos++;
  }

  return result;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/markdown-it/lib/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Main parser class




var utils        = __webpack_require__(/*! ./common/utils */ "./node_modules/markdown-it/lib/common/utils.js");
var helpers      = __webpack_require__(/*! ./helpers */ "./node_modules/markdown-it/lib/helpers/index.js");
var Renderer     = __webpack_require__(/*! ./renderer */ "./node_modules/markdown-it/lib/renderer.js");
var ParserCore   = __webpack_require__(/*! ./parser_core */ "./node_modules/markdown-it/lib/parser_core.js");
var ParserBlock  = __webpack_require__(/*! ./parser_block */ "./node_modules/markdown-it/lib/parser_block.js");
var ParserInline = __webpack_require__(/*! ./parser_inline */ "./node_modules/markdown-it/lib/parser_inline.js");
var LinkifyIt    = __webpack_require__(/*! linkify-it */ "./node_modules/linkify-it/index.js");
var mdurl        = __webpack_require__(/*! mdurl */ "./node_modules/mdurl/index.js");
var punycode     = __webpack_require__(/*! punycode */ "./node_modules/punycode/punycode.es6.js");


var config = {
  default: __webpack_require__(/*! ./presets/default */ "./node_modules/markdown-it/lib/presets/default.js"),
  zero: __webpack_require__(/*! ./presets/zero */ "./node_modules/markdown-it/lib/presets/zero.js"),
  commonmark: __webpack_require__(/*! ./presets/commonmark */ "./node_modules/markdown-it/lib/presets/commonmark.js")
};

////////////////////////////////////////////////////////////////////////////////
//
// This validator can prohibit more than really needed to prevent XSS. It's a
// tradeoff to keep code simple and to be secure by default.
//
// If you need different setup - override validator method as you wish. Or
// replace it with dummy function and use external sanitizer.
//

var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;

function validateLink(url) {
  // url should be normalized at this point, and existing entities are decoded
  var str = url.trim().toLowerCase();

  return BAD_PROTO_RE.test(str) ? (GOOD_DATA_RE.test(str) ? true : false) : true;
}

////////////////////////////////////////////////////////////////////////////////


var RECODE_HOSTNAME_FOR = [ 'http:', 'https:', 'mailto:' ];

function normalizeLink(url) {
  var parsed = mdurl.parse(url, true);

  if (parsed.hostname) {
    // Encode hostnames in urls like:
    // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
    //
    // We don't encode unknown schemas, because it's likely that we encode
    // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
    //
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
      try {
        parsed.hostname = punycode.toASCII(parsed.hostname);
      } catch (er) { /**/ }
    }
  }

  return mdurl.encode(mdurl.format(parsed));
}

function normalizeLinkText(url) {
  var parsed = mdurl.parse(url, true);

  if (parsed.hostname) {
    // Encode hostnames in urls like:
    // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
    //
    // We don't encode unknown schemas, because it's likely that we encode
    // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
    //
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
      try {
        parsed.hostname = punycode.toUnicode(parsed.hostname);
      } catch (er) { /**/ }
    }
  }

  // add '%' to exclude list because of https://github.com/markdown-it/markdown-it/issues/720
  return mdurl.decode(mdurl.format(parsed), mdurl.decode.defaultChars + '%');
}


/**
 * class MarkdownIt
 *
 * Main parser/renderer class.
 *
 * ##### Usage
 *
 * ```javascript
 * // node.js, "classic" way:
 * var MarkdownIt = require('markdown-it'),
 *     md = new MarkdownIt();
 * var result = md.render('# markdown-it rulezz!');
 *
 * // node.js, the same, but with sugar:
 * var md = require('markdown-it')();
 * var result = md.render('# markdown-it rulezz!');
 *
 * // browser without AMD, added to "window" on script load
 * // Note, there are no dash.
 * var md = window.markdownit();
 * var result = md.render('# markdown-it rulezz!');
 * ```
 *
 * Single line rendering, without paragraph wrap:
 *
 * ```javascript
 * var md = require('markdown-it')();
 * var result = md.renderInline('__markdown-it__ rulezz!');
 * ```
 **/

/**
 * new MarkdownIt([presetName, options])
 * - presetName (String): optional, `commonmark` / `zero`
 * - options (Object)
 *
 * Creates parser instanse with given config. Can be called without `new`.
 *
 * ##### presetName
 *
 * MarkdownIt provides named presets as a convenience to quickly
 * enable/disable active syntax rules and options for common use cases.
 *
 * - ["commonmark"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/commonmark.js) -
 *   configures parser to strict [CommonMark](http://commonmark.org/) mode.
 * - [default](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/default.js) -
 *   similar to GFM, used when no preset name given. Enables all available rules,
 *   but still without html, typographer & autolinker.
 * - ["zero"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/zero.js) -
 *   all rules disabled. Useful to quickly setup your config via `.enable()`.
 *   For example, when you need only `bold` and `italic` markup and nothing else.
 *
 * ##### options:
 *
 * - __html__ - `false`. Set `true` to enable HTML tags in source. Be careful!
 *   That's not safe! You may need external sanitizer to protect output from XSS.
 *   It's better to extend features via plugins, instead of enabling HTML.
 * - __xhtmlOut__ - `false`. Set `true` to add '/' when closing single tags
 *   (`<br />`). This is needed only for full CommonMark compatibility. In real
 *   world you will need HTML output.
 * - __breaks__ - `false`. Set `true` to convert `\n` in paragraphs into `<br>`.
 * - __langPrefix__ - `language-`. CSS language class prefix for fenced blocks.
 *   Can be useful for external highlighters.
 * - __linkify__ - `false`. Set `true` to autoconvert URL-like text to links.
 * - __typographer__  - `false`. Set `true` to enable [some language-neutral
 *   replacement](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js) +
 *   quotes beautification (smartquotes).
 * - __quotes__ - `“”‘’`, String or Array. Double + single quotes replacement
 *   pairs, when typographer enabled and smartquotes on. For example, you can
 *   use `'«»„“'` for Russian, `'„“‚‘'` for German, and
 *   `['«\xA0', '\xA0»', '‹\xA0', '\xA0›']` for French (including nbsp).
 * - __highlight__ - `null`. Highlighter function for fenced code blocks.
 *   Highlighter `function (str, lang)` should return escaped HTML. It can also
 *   return empty string if the source was not changed and should be escaped
 *   externaly. If result starts with <pre... internal wrapper is skipped.
 *
 * ##### Example
 *
 * ```javascript
 * // commonmark mode
 * var md = require('markdown-it')('commonmark');
 *
 * // default mode
 * var md = require('markdown-it')();
 *
 * // enable everything
 * var md = require('markdown-it')({
 *   html: true,
 *   linkify: true,
 *   typographer: true
 * });
 * ```
 *
 * ##### Syntax highlighting
 *
 * ```js
 * var hljs = require('highlight.js') // https://highlightjs.org/
 *
 * var md = require('markdown-it')({
 *   highlight: function (str, lang) {
 *     if (lang && hljs.getLanguage(lang)) {
 *       try {
 *         return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value;
 *       } catch (__) {}
 *     }
 *
 *     return ''; // use external default escaping
 *   }
 * });
 * ```
 *
 * Or with full wrapper override (if you need assign class to `<pre>`):
 *
 * ```javascript
 * var hljs = require('highlight.js') // https://highlightjs.org/
 *
 * // Actual default values
 * var md = require('markdown-it')({
 *   highlight: function (str, lang) {
 *     if (lang && hljs.getLanguage(lang)) {
 *       try {
 *         return '<pre class="hljs"><code>' +
 *                hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
 *                '</code></pre>';
 *       } catch (__) {}
 *     }
 *
 *     return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
 *   }
 * });
 * ```
 *
 **/
function MarkdownIt(presetName, options) {
  if (!(this instanceof MarkdownIt)) {
    return new MarkdownIt(presetName, options);
  }

  if (!options) {
    if (!utils.isString(presetName)) {
      options = presetName || {};
      presetName = 'default';
    }
  }

  /**
   * MarkdownIt#inline -> ParserInline
   *
   * Instance of [[ParserInline]]. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/
  this.inline = new ParserInline();

  /**
   * MarkdownIt#block -> ParserBlock
   *
   * Instance of [[ParserBlock]]. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/
  this.block = new ParserBlock();

  /**
   * MarkdownIt#core -> Core
   *
   * Instance of [[Core]] chain executor. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/
  this.core = new ParserCore();

  /**
   * MarkdownIt#renderer -> Renderer
   *
   * Instance of [[Renderer]]. Use it to modify output look. Or to add rendering
   * rules for new token types, generated by plugins.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * function myToken(tokens, idx, options, env, self) {
   *   //...
   *   return result;
   * };
   *
   * md.renderer.rules['my_token'] = myToken
   * ```
   *
   * See [[Renderer]] docs and [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js).
   **/
  this.renderer = new Renderer();

  /**
   * MarkdownIt#linkify -> LinkifyIt
   *
   * [linkify-it](https://github.com/markdown-it/linkify-it) instance.
   * Used by [linkify](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/linkify.js)
   * rule.
   **/
  this.linkify = new LinkifyIt();

  /**
   * MarkdownIt#validateLink(url) -> Boolean
   *
   * Link validation function. CommonMark allows too much in links. By default
   * we disable `javascript:`, `vbscript:`, `file:` schemas, and almost all `data:...` schemas
   * except some embedded image types.
   *
   * You can change this behaviour:
   *
   * ```javascript
   * var md = require('markdown-it')();
   * // enable everything
   * md.validateLink = function () { return true; }
   * ```
   **/
  this.validateLink = validateLink;

  /**
   * MarkdownIt#normalizeLink(url) -> String
   *
   * Function used to encode link url to a machine-readable format,
   * which includes url-encoding, punycode, etc.
   **/
  this.normalizeLink = normalizeLink;

  /**
   * MarkdownIt#normalizeLinkText(url) -> String
   *
   * Function used to decode link url to a human-readable format`
   **/
  this.normalizeLinkText = normalizeLinkText;


  // Expose utils & helpers for easy acces from plugins

  /**
   * MarkdownIt#utils -> utils
   *
   * Assorted utility functions, useful to write plugins. See details
   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/common/utils.js).
   **/
  this.utils = utils;

  /**
   * MarkdownIt#helpers -> helpers
   *
   * Link components parser functions, useful to write plugins. See details
   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/helpers).
   **/
  this.helpers = utils.assign({}, helpers);


  this.options = {};
  this.configure(presetName);

  if (options) { this.set(options); }
}


/** chainable
 * MarkdownIt.set(options)
 *
 * Set parser options (in the same format as in constructor). Probably, you
 * will never need it, but you can change options after constructor call.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')()
 *             .set({ html: true, breaks: true })
 *             .set({ typographer, true });
 * ```
 *
 * __Note:__ To achieve the best possible performance, don't modify a
 * `markdown-it` instance options on the fly. If you need multiple configurations
 * it's best to create multiple instances and initialize each with separate
 * config.
 **/
MarkdownIt.prototype.set = function (options) {
  utils.assign(this.options, options);
  return this;
};


/** chainable, internal
 * MarkdownIt.configure(presets)
 *
 * Batch load of all options and compenent settings. This is internal method,
 * and you probably will not need it. But if you will - see available presets
 * and data structure [here](https://github.com/markdown-it/markdown-it/tree/master/lib/presets)
 *
 * We strongly recommend to use presets instead of direct config loads. That
 * will give better compatibility with next versions.
 **/
MarkdownIt.prototype.configure = function (presets) {
  var self = this, presetName;

  if (utils.isString(presets)) {
    presetName = presets;
    presets = config[presetName];
    if (!presets) { throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name'); }
  }

  if (!presets) { throw new Error('Wrong `markdown-it` preset, can\'t be empty'); }

  if (presets.options) { self.set(presets.options); }

  if (presets.components) {
    Object.keys(presets.components).forEach(function (name) {
      if (presets.components[name].rules) {
        self[name].ruler.enableOnly(presets.components[name].rules);
      }
      if (presets.components[name].rules2) {
        self[name].ruler2.enableOnly(presets.components[name].rules2);
      }
    });
  }
  return this;
};


/** chainable
 * MarkdownIt.enable(list, ignoreInvalid)
 * - list (String|Array): rule name or list of rule names to enable
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable list or rules. It will automatically find appropriate components,
 * containing rules with given names. If rule not found, and `ignoreInvalid`
 * not set - throws exception.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')()
 *             .enable(['sub', 'sup'])
 *             .disable('smartquotes');
 * ```
 **/
MarkdownIt.prototype.enable = function (list, ignoreInvalid) {
  var result = [];

  if (!Array.isArray(list)) { list = [ list ]; }

  [ 'core', 'block', 'inline' ].forEach(function (chain) {
    result = result.concat(this[chain].ruler.enable(list, true));
  }, this);

  result = result.concat(this.inline.ruler2.enable(list, true));

  var missed = list.filter(function (name) { return result.indexOf(name) < 0; });

  if (missed.length && !ignoreInvalid) {
    throw new Error('MarkdownIt. Failed to enable unknown rule(s): ' + missed);
  }

  return this;
};


/** chainable
 * MarkdownIt.disable(list, ignoreInvalid)
 * - list (String|Array): rule name or list of rule names to disable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * The same as [[MarkdownIt.enable]], but turn specified rules off.
 **/
MarkdownIt.prototype.disable = function (list, ignoreInvalid) {
  var result = [];

  if (!Array.isArray(list)) { list = [ list ]; }

  [ 'core', 'block', 'inline' ].forEach(function (chain) {
    result = result.concat(this[chain].ruler.disable(list, true));
  }, this);

  result = result.concat(this.inline.ruler2.disable(list, true));

  var missed = list.filter(function (name) { return result.indexOf(name) < 0; });

  if (missed.length && !ignoreInvalid) {
    throw new Error('MarkdownIt. Failed to disable unknown rule(s): ' + missed);
  }
  return this;
};


/** chainable
 * MarkdownIt.use(plugin, params)
 *
 * Load specified plugin with given params into current parser instance.
 * It's just a sugar to call `plugin(md, params)` with curring.
 *
 * ##### Example
 *
 * ```javascript
 * var iterator = require('markdown-it-for-inline');
 * var md = require('markdown-it')()
 *             .use(iterator, 'foo_replace', 'text', function (tokens, idx) {
 *               tokens[idx].content = tokens[idx].content.replace(/foo/g, 'bar');
 *             });
 * ```
 **/
MarkdownIt.prototype.use = function (plugin /*, params, ... */) {
  var args = [ this ].concat(Array.prototype.slice.call(arguments, 1));
  plugin.apply(plugin, args);
  return this;
};


/** internal
 * MarkdownIt.parse(src, env) -> Array
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Parse input string and return list of block tokens (special token type
 * "inline" will contain list of inline tokens). You should not call this
 * method directly, until you write custom renderer (for example, to produce
 * AST).
 *
 * `env` is used to pass data between "distributed" rules and return additional
 * metadata like reference info, needed for the renderer. It also can be used to
 * inject data in specific cases. Usually, you will be ok to pass `{}`,
 * and then pass updated object to renderer.
 **/
MarkdownIt.prototype.parse = function (src, env) {
  if (typeof src !== 'string') {
    throw new Error('Input data should be a String');
  }

  var state = new this.core.State(src, this, env);

  this.core.process(state);

  return state.tokens;
};


/**
 * MarkdownIt.render(src [, env]) -> String
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Render markdown string into html. It does all magic for you :).
 *
 * `env` can be used to inject additional metadata (`{}` by default).
 * But you will not need it with high probability. See also comment
 * in [[MarkdownIt.parse]].
 **/
MarkdownIt.prototype.render = function (src, env) {
  env = env || {};

  return this.renderer.render(this.parse(src, env), this.options, env);
};


/** internal
 * MarkdownIt.parseInline(src, env) -> Array
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * The same as [[MarkdownIt.parse]] but skip all block rules. It returns the
 * block tokens list with the single `inline` element, containing parsed inline
 * tokens in `children` property. Also updates `env` object.
 **/
MarkdownIt.prototype.parseInline = function (src, env) {
  var state = new this.core.State(src, this, env);

  state.inlineMode = true;
  this.core.process(state);

  return state.tokens;
};


/**
 * MarkdownIt.renderInline(src [, env]) -> String
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Similar to [[MarkdownIt.render]] but for single paragraph content. Result
 * will NOT be wrapped into `<p>` tags.
 **/
MarkdownIt.prototype.renderInline = function (src, env) {
  env = env || {};

  return this.renderer.render(this.parseInline(src, env), this.options, env);
};


module.exports = MarkdownIt;


/***/ }),

/***/ "./node_modules/markdown-it/lib/parser_block.js":
/*!******************************************************!*\
  !*** ./node_modules/markdown-it/lib/parser_block.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/** internal
 * class ParserBlock
 *
 * Block-level tokenizer.
 **/



var Ruler           = __webpack_require__(/*! ./ruler */ "./node_modules/markdown-it/lib/ruler.js");


var _rules = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  [ 'table',      __webpack_require__(/*! ./rules_block/table */ "./node_modules/markdown-it/lib/rules_block/table.js"),      [ 'paragraph', 'reference' ] ],
  [ 'code',       __webpack_require__(/*! ./rules_block/code */ "./node_modules/markdown-it/lib/rules_block/code.js") ],
  [ 'fence',      __webpack_require__(/*! ./rules_block/fence */ "./node_modules/markdown-it/lib/rules_block/fence.js"),      [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
  [ 'blockquote', __webpack_require__(/*! ./rules_block/blockquote */ "./node_modules/markdown-it/lib/rules_block/blockquote.js"), [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
  [ 'hr',         __webpack_require__(/*! ./rules_block/hr */ "./node_modules/markdown-it/lib/rules_block/hr.js"),         [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
  [ 'list',       __webpack_require__(/*! ./rules_block/list */ "./node_modules/markdown-it/lib/rules_block/list.js"),       [ 'paragraph', 'reference', 'blockquote' ] ],
  [ 'reference',  __webpack_require__(/*! ./rules_block/reference */ "./node_modules/markdown-it/lib/rules_block/reference.js") ],
  [ 'html_block', __webpack_require__(/*! ./rules_block/html_block */ "./node_modules/markdown-it/lib/rules_block/html_block.js"), [ 'paragraph', 'reference', 'blockquote' ] ],
  [ 'heading',    __webpack_require__(/*! ./rules_block/heading */ "./node_modules/markdown-it/lib/rules_block/heading.js"),    [ 'paragraph', 'reference', 'blockquote' ] ],
  [ 'lheading',   __webpack_require__(/*! ./rules_block/lheading */ "./node_modules/markdown-it/lib/rules_block/lheading.js") ],
  [ 'paragraph',  __webpack_require__(/*! ./rules_block/paragraph */ "./node_modules/markdown-it/lib/rules_block/paragraph.js") ]
];


/**
 * new ParserBlock()
 **/
function ParserBlock() {
  /**
   * ParserBlock#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of block rules.
   **/
  this.ruler = new Ruler();

  for (var i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1], { alt: (_rules[i][2] || []).slice() });
  }
}


// Generate tokens for input range
//
ParserBlock.prototype.tokenize = function (state, startLine, endLine) {
  var ok, i, prevLine,
      rules = this.ruler.getRules(''),
      len = rules.length,
      line = startLine,
      hasEmptyLines = false,
      maxNesting = state.md.options.maxNesting;

  while (line < endLine) {
    state.line = line = state.skipEmptyLines(line);
    if (line >= endLine) { break; }

    // Termination condition for nested calls.
    // Nested calls currently used for blockquotes & lists
    if (state.sCount[line] < state.blkIndent) { break; }

    // If nesting level exceeded - skip tail to the end. That's not ordinary
    // situation and we should not care about content.
    if (state.level >= maxNesting) {
      state.line = endLine;
      break;
    }

    // Try all possible rules.
    // On success, rule should:
    //
    // - update `state.line`
    // - update `state.tokens`
    // - return true
    prevLine = state.line;

    for (i = 0; i < len; i++) {
      ok = rules[i](state, line, endLine, false);
      if (ok) {
        if (prevLine >= state.line) {
          throw new Error("block rule didn't increment state.line");
        }
        break;
      }
    }

    // this can only happen if user disables paragraph rule
    if (!ok) throw new Error('none of the block rules matched');

    // set state.tight if we had an empty line before current tag
    // i.e. latest empty line should not count
    state.tight = !hasEmptyLines;

    // paragraph might "eat" one newline after it in nested lists
    if (state.isEmpty(state.line - 1)) {
      hasEmptyLines = true;
    }

    line = state.line;

    if (line < endLine && state.isEmpty(line)) {
      hasEmptyLines = true;
      line++;
      state.line = line;
    }
  }
};


/**
 * ParserBlock.parse(str, md, env, outTokens)
 *
 * Process input string and push block tokens into `outTokens`
 **/
ParserBlock.prototype.parse = function (src, md, env, outTokens) {
  var state;

  if (!src) { return; }

  state = new this.State(src, md, env, outTokens);

  this.tokenize(state, state.line, state.lineMax);
};


ParserBlock.prototype.State = __webpack_require__(/*! ./rules_block/state_block */ "./node_modules/markdown-it/lib/rules_block/state_block.js");


module.exports = ParserBlock;


/***/ }),

/***/ "./node_modules/markdown-it/lib/parser_core.js":
/*!*****************************************************!*\
  !*** ./node_modules/markdown-it/lib/parser_core.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/** internal
 * class Core
 *
 * Top-level rules executor. Glues block/inline parsers and does intermediate
 * transformations.
 **/



var Ruler  = __webpack_require__(/*! ./ruler */ "./node_modules/markdown-it/lib/ruler.js");


var _rules = [
  [ 'normalize',      __webpack_require__(/*! ./rules_core/normalize */ "./node_modules/markdown-it/lib/rules_core/normalize.js")      ],
  [ 'block',          __webpack_require__(/*! ./rules_core/block */ "./node_modules/markdown-it/lib/rules_core/block.js")          ],
  [ 'inline',         __webpack_require__(/*! ./rules_core/inline */ "./node_modules/markdown-it/lib/rules_core/inline.js")         ],
  [ 'linkify',        __webpack_require__(/*! ./rules_core/linkify */ "./node_modules/markdown-it/lib/rules_core/linkify.js")        ],
  [ 'replacements',   __webpack_require__(/*! ./rules_core/replacements */ "./node_modules/markdown-it/lib/rules_core/replacements.js")   ],
  [ 'smartquotes',    __webpack_require__(/*! ./rules_core/smartquotes */ "./node_modules/markdown-it/lib/rules_core/smartquotes.js")    ],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  [ 'text_join',      __webpack_require__(/*! ./rules_core/text_join */ "./node_modules/markdown-it/lib/rules_core/text_join.js")      ]
];


/**
 * new Core()
 **/
function Core() {
  /**
   * Core#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of core rules.
   **/
  this.ruler = new Ruler();

  for (var i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1]);
  }
}


/**
 * Core.process(state)
 *
 * Executes core chain rules.
 **/
Core.prototype.process = function (state) {
  var i, l, rules;

  rules = this.ruler.getRules('');

  for (i = 0, l = rules.length; i < l; i++) {
    rules[i](state);
  }
};

Core.prototype.State = __webpack_require__(/*! ./rules_core/state_core */ "./node_modules/markdown-it/lib/rules_core/state_core.js");


module.exports = Core;


/***/ }),

/***/ "./node_modules/markdown-it/lib/parser_inline.js":
/*!*******************************************************!*\
  !*** ./node_modules/markdown-it/lib/parser_inline.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/** internal
 * class ParserInline
 *
 * Tokenizes paragraph content.
 **/



var Ruler           = __webpack_require__(/*! ./ruler */ "./node_modules/markdown-it/lib/ruler.js");


////////////////////////////////////////////////////////////////////////////////
// Parser rules

var _rules = [
  [ 'text',            __webpack_require__(/*! ./rules_inline/text */ "./node_modules/markdown-it/lib/rules_inline/text.js") ],
  [ 'linkify',         __webpack_require__(/*! ./rules_inline/linkify */ "./node_modules/markdown-it/lib/rules_inline/linkify.js") ],
  [ 'newline',         __webpack_require__(/*! ./rules_inline/newline */ "./node_modules/markdown-it/lib/rules_inline/newline.js") ],
  [ 'escape',          __webpack_require__(/*! ./rules_inline/escape */ "./node_modules/markdown-it/lib/rules_inline/escape.js") ],
  [ 'backticks',       __webpack_require__(/*! ./rules_inline/backticks */ "./node_modules/markdown-it/lib/rules_inline/backticks.js") ],
  [ 'strikethrough',   (__webpack_require__(/*! ./rules_inline/strikethrough */ "./node_modules/markdown-it/lib/rules_inline/strikethrough.js").tokenize) ],
  [ 'emphasis',        (__webpack_require__(/*! ./rules_inline/emphasis */ "./node_modules/markdown-it/lib/rules_inline/emphasis.js").tokenize) ],
  [ 'link',            __webpack_require__(/*! ./rules_inline/link */ "./node_modules/markdown-it/lib/rules_inline/link.js") ],
  [ 'image',           __webpack_require__(/*! ./rules_inline/image */ "./node_modules/markdown-it/lib/rules_inline/image.js") ],
  [ 'autolink',        __webpack_require__(/*! ./rules_inline/autolink */ "./node_modules/markdown-it/lib/rules_inline/autolink.js") ],
  [ 'html_inline',     __webpack_require__(/*! ./rules_inline/html_inline */ "./node_modules/markdown-it/lib/rules_inline/html_inline.js") ],
  [ 'entity',          __webpack_require__(/*! ./rules_inline/entity */ "./node_modules/markdown-it/lib/rules_inline/entity.js") ]
];

// `rule2` ruleset was created specifically for emphasis/strikethrough
// post-processing and may be changed in the future.
//
// Don't use this for anything except pairs (plugins working with `balance_pairs`).
//
var _rules2 = [
  [ 'balance_pairs',   __webpack_require__(/*! ./rules_inline/balance_pairs */ "./node_modules/markdown-it/lib/rules_inline/balance_pairs.js") ],
  [ 'strikethrough',   (__webpack_require__(/*! ./rules_inline/strikethrough */ "./node_modules/markdown-it/lib/rules_inline/strikethrough.js").postProcess) ],
  [ 'emphasis',        (__webpack_require__(/*! ./rules_inline/emphasis */ "./node_modules/markdown-it/lib/rules_inline/emphasis.js").postProcess) ],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  [ 'fragments_join',  __webpack_require__(/*! ./rules_inline/fragments_join */ "./node_modules/markdown-it/lib/rules_inline/fragments_join.js") ]
];


/**
 * new ParserInline()
 **/
function ParserInline() {
  var i;

  /**
   * ParserInline#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of inline rules.
   **/
  this.ruler = new Ruler();

  for (i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1]);
  }

  /**
   * ParserInline#ruler2 -> Ruler
   *
   * [[Ruler]] instance. Second ruler used for post-processing
   * (e.g. in emphasis-like rules).
   **/
  this.ruler2 = new Ruler();

  for (i = 0; i < _rules2.length; i++) {
    this.ruler2.push(_rules2[i][0], _rules2[i][1]);
  }
}


// Skip single token by running all rules in validation mode;
// returns `true` if any rule reported success
//
ParserInline.prototype.skipToken = function (state) {
  var ok, i, pos = state.pos,
      rules = this.ruler.getRules(''),
      len = rules.length,
      maxNesting = state.md.options.maxNesting,
      cache = state.cache;


  if (typeof cache[pos] !== 'undefined') {
    state.pos = cache[pos];
    return;
  }

  if (state.level < maxNesting) {
    for (i = 0; i < len; i++) {
      // Increment state.level and decrement it later to limit recursion.
      // It's harmless to do here, because no tokens are created. But ideally,
      // we'd need a separate private state variable for this purpose.
      //
      state.level++;
      ok = rules[i](state, true);
      state.level--;

      if (ok) {
        if (pos >= state.pos) { throw new Error("inline rule didn't increment state.pos"); }
        break;
      }
    }
  } else {
    // Too much nesting, just skip until the end of the paragraph.
    //
    // NOTE: this will cause links to behave incorrectly in the following case,
    //       when an amount of `[` is exactly equal to `maxNesting + 1`:
    //
    //       [[[[[[[[[[[[[[[[[[[[[foo]()
    //
    // TODO: remove this workaround when CM standard will allow nested links
    //       (we can replace it by preventing links from being parsed in
    //       validation mode)
    //
    state.pos = state.posMax;
  }

  if (!ok) { state.pos++; }
  cache[pos] = state.pos;
};


// Generate tokens for input range
//
ParserInline.prototype.tokenize = function (state) {
  var ok, i, prevPos,
      rules = this.ruler.getRules(''),
      len = rules.length,
      end = state.posMax,
      maxNesting = state.md.options.maxNesting;

  while (state.pos < end) {
    // Try all possible rules.
    // On success, rule should:
    //
    // - update `state.pos`
    // - update `state.tokens`
    // - return true
    prevPos = state.pos;

    if (state.level < maxNesting) {
      for (i = 0; i < len; i++) {
        ok = rules[i](state, false);
        if (ok) {
          if (prevPos >= state.pos) { throw new Error("inline rule didn't increment state.pos"); }
          break;
        }
      }
    }

    if (ok) {
      if (state.pos >= end) { break; }
      continue;
    }

    state.pending += state.src[state.pos++];
  }

  if (state.pending) {
    state.pushPending();
  }
};


/**
 * ParserInline.parse(str, md, env, outTokens)
 *
 * Process input string and push inline tokens into `outTokens`
 **/
ParserInline.prototype.parse = function (str, md, env, outTokens) {
  var i, rules, len;
  var state = new this.State(str, md, env, outTokens);

  this.tokenize(state);

  rules = this.ruler2.getRules('');
  len = rules.length;

  for (i = 0; i < len; i++) {
    rules[i](state);
  }
};


ParserInline.prototype.State = __webpack_require__(/*! ./rules_inline/state_inline */ "./node_modules/markdown-it/lib/rules_inline/state_inline.js");


module.exports = ParserInline;


/***/ }),

/***/ "./node_modules/markdown-it/lib/presets/commonmark.js":
/*!************************************************************!*\
  !*** ./node_modules/markdown-it/lib/presets/commonmark.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
// Commonmark default options




module.exports = {
  options: {
    html:         true,         // Enable HTML tags in source
    xhtmlOut:     true,         // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // autoconvert URL-like texts to links

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */

    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,

    maxNesting:   20            // Internal protection, recursion limit
  },

  components: {

    core: {
      rules: [
        'normalize',
        'block',
        'inline',
        'text_join'
      ]
    },

    block: {
      rules: [
        'blockquote',
        'code',
        'fence',
        'heading',
        'hr',
        'html_block',
        'lheading',
        'list',
        'reference',
        'paragraph'
      ]
    },

    inline: {
      rules: [
        'autolink',
        'backticks',
        'emphasis',
        'entity',
        'escape',
        'html_inline',
        'image',
        'link',
        'newline',
        'text'
      ],
      rules2: [
        'balance_pairs',
        'emphasis',
        'fragments_join'
      ]
    }
  }
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/presets/default.js":
/*!*********************************************************!*\
  !*** ./node_modules/markdown-it/lib/presets/default.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
// markdown-it default options




module.exports = {
  options: {
    html:         false,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // autoconvert URL-like texts to links

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */

    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,

    maxNesting:   100            // Internal protection, recursion limit
  },

  components: {

    core: {},
    block: {},
    inline: {}
  }
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/presets/zero.js":
/*!******************************************************!*\
  !*** ./node_modules/markdown-it/lib/presets/zero.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
// "Zero" preset, with nothing enabled. Useful for manual configuring of simple
// modes. For example, to parse bold/italic only.




module.exports = {
  options: {
    html:         false,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // autoconvert URL-like texts to links

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */

    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,

    maxNesting:   20            // Internal protection, recursion limit
  },

  components: {

    core: {
      rules: [
        'normalize',
        'block',
        'inline',
        'text_join'
      ]
    },

    block: {
      rules: [
        'paragraph'
      ]
    },

    inline: {
      rules: [
        'text'
      ],
      rules2: [
        'balance_pairs',
        'fragments_join'
      ]
    }
  }
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/renderer.js":
/*!**************************************************!*\
  !*** ./node_modules/markdown-it/lib/renderer.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * class Renderer
 *
 * Generates HTML from parsed token stream. Each instance has independent
 * copy of rules. Those can be rewritten with ease. Also, you can add new
 * rules if you create plugin and adds new token types.
 **/



var assign          = (__webpack_require__(/*! ./common/utils */ "./node_modules/markdown-it/lib/common/utils.js").assign);
var unescapeAll     = (__webpack_require__(/*! ./common/utils */ "./node_modules/markdown-it/lib/common/utils.js").unescapeAll);
var escapeHtml      = (__webpack_require__(/*! ./common/utils */ "./node_modules/markdown-it/lib/common/utils.js").escapeHtml);


////////////////////////////////////////////////////////////////////////////////

var default_rules = {};


default_rules.code_inline = function (tokens, idx, options, env, slf) {
  var token = tokens[idx];

  return  '<code' + slf.renderAttrs(token) + '>' +
          escapeHtml(token.content) +
          '</code>';
};


default_rules.code_block = function (tokens, idx, options, env, slf) {
  var token = tokens[idx];

  return  '<pre' + slf.renderAttrs(token) + '><code>' +
          escapeHtml(tokens[idx].content) +
          '</code></pre>\n';
};


default_rules.fence = function (tokens, idx, options, env, slf) {
  var token = tokens[idx],
      info = token.info ? unescapeAll(token.info).trim() : '',
      langName = '',
      langAttrs = '',
      highlighted, i, arr, tmpAttrs, tmpToken;

  if (info) {
    arr = info.split(/(\s+)/g);
    langName = arr[0];
    langAttrs = arr.slice(2).join('');
  }

  if (options.highlight) {
    highlighted = options.highlight(token.content, langName, langAttrs) || escapeHtml(token.content);
  } else {
    highlighted = escapeHtml(token.content);
  }

  if (highlighted.indexOf('<pre') === 0) {
    return highlighted + '\n';
  }

  // If language exists, inject class gently, without modifying original token.
  // May be, one day we will add .deepClone() for token and simplify this part, but
  // now we prefer to keep things local.
  if (info) {
    i        = token.attrIndex('class');
    tmpAttrs = token.attrs ? token.attrs.slice() : [];

    if (i < 0) {
      tmpAttrs.push([ 'class', options.langPrefix + langName ]);
    } else {
      tmpAttrs[i] = tmpAttrs[i].slice();
      tmpAttrs[i][1] += ' ' + options.langPrefix + langName;
    }

    // Fake token just to render attributes
    tmpToken = {
      attrs: tmpAttrs
    };

    return  '<pre><code' + slf.renderAttrs(tmpToken) + '>'
          + highlighted
          + '</code></pre>\n';
  }


  return  '<pre><code' + slf.renderAttrs(token) + '>'
        + highlighted
        + '</code></pre>\n';
};


default_rules.image = function (tokens, idx, options, env, slf) {
  var token = tokens[idx];

  // "alt" attr MUST be set, even if empty. Because it's mandatory and
  // should be placed on proper position for tests.
  //
  // Replace content with actual value

  token.attrs[token.attrIndex('alt')][1] =
    slf.renderInlineAsText(token.children, options, env);

  return slf.renderToken(tokens, idx, options);
};


default_rules.hardbreak = function (tokens, idx, options /*, env */) {
  return options.xhtmlOut ? '<br />\n' : '<br>\n';
};
default_rules.softbreak = function (tokens, idx, options /*, env */) {
  return options.breaks ? (options.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
};


default_rules.text = function (tokens, idx /*, options, env */) {
  return escapeHtml(tokens[idx].content);
};


default_rules.html_block = function (tokens, idx /*, options, env */) {
  return tokens[idx].content;
};
default_rules.html_inline = function (tokens, idx /*, options, env */) {
  return tokens[idx].content;
};


/**
 * new Renderer()
 *
 * Creates new [[Renderer]] instance and fill [[Renderer#rules]] with defaults.
 **/
function Renderer() {

  /**
   * Renderer#rules -> Object
   *
   * Contains render rules for tokens. Can be updated and extended.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * md.renderer.rules.strong_open  = function () { return '<b>'; };
   * md.renderer.rules.strong_close = function () { return '</b>'; };
   *
   * var result = md.renderInline(...);
   * ```
   *
   * Each rule is called as independent static function with fixed signature:
   *
   * ```javascript
   * function my_token_render(tokens, idx, options, env, renderer) {
   *   // ...
   *   return renderedHTML;
   * }
   * ```
   *
   * See [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js)
   * for more details and examples.
   **/
  this.rules = assign({}, default_rules);
}


/**
 * Renderer.renderAttrs(token) -> String
 *
 * Render token attributes to string.
 **/
Renderer.prototype.renderAttrs = function renderAttrs(token) {
  var i, l, result;

  if (!token.attrs) { return ''; }

  result = '';

  for (i = 0, l = token.attrs.length; i < l; i++) {
    result += ' ' + escapeHtml(token.attrs[i][0]) + '="' + escapeHtml(token.attrs[i][1]) + '"';
  }

  return result;
};


/**
 * Renderer.renderToken(tokens, idx, options) -> String
 * - tokens (Array): list of tokens
 * - idx (Numbed): token index to render
 * - options (Object): params of parser instance
 *
 * Default token renderer. Can be overriden by custom function
 * in [[Renderer#rules]].
 **/
Renderer.prototype.renderToken = function renderToken(tokens, idx, options) {
  var nextToken,
      result = '',
      needLf = false,
      token = tokens[idx];

  // Tight list paragraphs
  if (token.hidden) {
    return '';
  }

  // Insert a newline between hidden paragraph and subsequent opening
  // block-level tag.
  //
  // For example, here we should insert a newline before blockquote:
  //  - a
  //    >
  //
  if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
    result += '\n';
  }

  // Add token name, e.g. `<img`
  result += (token.nesting === -1 ? '</' : '<') + token.tag;

  // Encode attributes, e.g. `<img src="foo"`
  result += this.renderAttrs(token);

  // Add a slash for self-closing tags, e.g. `<img src="foo" /`
  if (token.nesting === 0 && options.xhtmlOut) {
    result += ' /';
  }

  // Check if we need to add a newline after this tag
  if (token.block) {
    needLf = true;

    if (token.nesting === 1) {
      if (idx + 1 < tokens.length) {
        nextToken = tokens[idx + 1];

        if (nextToken.type === 'inline' || nextToken.hidden) {
          // Block-level tag containing an inline tag.
          //
          needLf = false;

        } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
          // Opening tag + closing tag of the same type. E.g. `<li></li>`.
          //
          needLf = false;
        }
      }
    }
  }

  result += needLf ? '>\n' : '>';

  return result;
};


/**
 * Renderer.renderInline(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to render
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * The same as [[Renderer.render]], but for single token of `inline` type.
 **/
Renderer.prototype.renderInline = function (tokens, options, env) {
  var type,
      result = '',
      rules = this.rules;

  for (var i = 0, len = tokens.length; i < len; i++) {
    type = tokens[i].type;

    if (typeof rules[type] !== 'undefined') {
      result += rules[type](tokens, i, options, env, this);
    } else {
      result += this.renderToken(tokens, i, options);
    }
  }

  return result;
};


/** internal
 * Renderer.renderInlineAsText(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to render
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * Special kludge for image `alt` attributes to conform CommonMark spec.
 * Don't try to use it! Spec requires to show `alt` content with stripped markup,
 * instead of simple escaping.
 **/
Renderer.prototype.renderInlineAsText = function (tokens, options, env) {
  var result = '';

  for (var i = 0, len = tokens.length; i < len; i++) {
    if (tokens[i].type === 'text') {
      result += tokens[i].content;
    } else if (tokens[i].type === 'image') {
      result += this.renderInlineAsText(tokens[i].children, options, env);
    } else if (tokens[i].type === 'softbreak') {
      result += '\n';
    }
  }

  return result;
};


/**
 * Renderer.render(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to render
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * Takes token stream and generates HTML. Probably, you will never need to call
 * this method directly.
 **/
Renderer.prototype.render = function (tokens, options, env) {
  var i, len, type,
      result = '',
      rules = this.rules;

  for (i = 0, len = tokens.length; i < len; i++) {
    type = tokens[i].type;

    if (type === 'inline') {
      result += this.renderInline(tokens[i].children, options, env);
    } else if (typeof rules[type] !== 'undefined') {
      result += rules[type](tokens, i, options, env, this);
    } else {
      result += this.renderToken(tokens, i, options, env);
    }
  }

  return result;
};

module.exports = Renderer;


/***/ }),

/***/ "./node_modules/markdown-it/lib/ruler.js":
/*!***********************************************!*\
  !*** ./node_modules/markdown-it/lib/ruler.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
/**
 * class Ruler
 *
 * Helper class, used by [[MarkdownIt#core]], [[MarkdownIt#block]] and
 * [[MarkdownIt#inline]] to manage sequences of functions (rules):
 *
 * - keep rules in defined order
 * - assign the name to each rule
 * - enable/disable rules
 * - add/replace rules
 * - allow assign rules to additional named chains (in the same)
 * - cacheing lists of active rules
 *
 * You will not need use this class directly until write plugins. For simple
 * rules control use [[MarkdownIt.disable]], [[MarkdownIt.enable]] and
 * [[MarkdownIt.use]].
 **/



/**
 * new Ruler()
 **/
function Ruler() {
  // List of added rules. Each element is:
  //
  // {
  //   name: XXX,
  //   enabled: Boolean,
  //   fn: Function(),
  //   alt: [ name2, name3 ]
  // }
  //
  this.__rules__ = [];

  // Cached rule chains.
  //
  // First level - chain name, '' for default.
  // Second level - diginal anchor for fast filtering by charcodes.
  //
  this.__cache__ = null;
}

////////////////////////////////////////////////////////////////////////////////
// Helper methods, should not be used directly


// Find rule index by name
//
Ruler.prototype.__find__ = function (name) {
  for (var i = 0; i < this.__rules__.length; i++) {
    if (this.__rules__[i].name === name) {
      return i;
    }
  }
  return -1;
};


// Build rules lookup cache
//
Ruler.prototype.__compile__ = function () {
  var self = this;
  var chains = [ '' ];

  // collect unique names
  self.__rules__.forEach(function (rule) {
    if (!rule.enabled) { return; }

    rule.alt.forEach(function (altName) {
      if (chains.indexOf(altName) < 0) {
        chains.push(altName);
      }
    });
  });

  self.__cache__ = {};

  chains.forEach(function (chain) {
    self.__cache__[chain] = [];
    self.__rules__.forEach(function (rule) {
      if (!rule.enabled) { return; }

      if (chain && rule.alt.indexOf(chain) < 0) { return; }

      self.__cache__[chain].push(rule.fn);
    });
  });
};


/**
 * Ruler.at(name, fn [, options])
 * - name (String): rule name to replace.
 * - fn (Function): new rule function.
 * - options (Object): new rule options (not mandatory).
 *
 * Replace rule by name with new function & options. Throws error if name not
 * found.
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * Replace existing typographer replacement rule with new one:
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.core.ruler.at('replacements', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler.prototype.at = function (name, fn, options) {
  var index = this.__find__(name);
  var opt = options || {};

  if (index === -1) { throw new Error('Parser rule not found: ' + name); }

  this.__rules__[index].fn = fn;
  this.__rules__[index].alt = opt.alt || [];
  this.__cache__ = null;
};


/**
 * Ruler.before(beforeName, ruleName, fn [, options])
 * - beforeName (String): new rule will be added before this one.
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Add new rule to chain before one with given name. See also
 * [[Ruler.after]], [[Ruler.push]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.block.ruler.before('paragraph', 'my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler.prototype.before = function (beforeName, ruleName, fn, options) {
  var index = this.__find__(beforeName);
  var opt = options || {};

  if (index === -1) { throw new Error('Parser rule not found: ' + beforeName); }

  this.__rules__.splice(index, 0, {
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};


/**
 * Ruler.after(afterName, ruleName, fn [, options])
 * - afterName (String): new rule will be added after this one.
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Add new rule to chain after one with given name. See also
 * [[Ruler.before]], [[Ruler.push]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.inline.ruler.after('text', 'my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler.prototype.after = function (afterName, ruleName, fn, options) {
  var index = this.__find__(afterName);
  var opt = options || {};

  if (index === -1) { throw new Error('Parser rule not found: ' + afterName); }

  this.__rules__.splice(index + 1, 0, {
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};

/**
 * Ruler.push(ruleName, fn [, options])
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Push new rule to the end of chain. See also
 * [[Ruler.before]], [[Ruler.after]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.core.ruler.push('my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler.prototype.push = function (ruleName, fn, options) {
  var opt = options || {};

  this.__rules__.push({
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};


/**
 * Ruler.enable(list [, ignoreInvalid]) -> Array
 * - list (String|Array): list of rule names to enable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable rules with given names. If any rule name not found - throw Error.
 * Errors can be disabled by second param.
 *
 * Returns list of found rule names (if no exception happened).
 *
 * See also [[Ruler.disable]], [[Ruler.enableOnly]].
 **/
Ruler.prototype.enable = function (list, ignoreInvalid) {
  if (!Array.isArray(list)) { list = [ list ]; }

  var result = [];

  // Search by name and enable
  list.forEach(function (name) {
    var idx = this.__find__(name);

    if (idx < 0) {
      if (ignoreInvalid) { return; }
      throw new Error('Rules manager: invalid rule name ' + name);
    }
    this.__rules__[idx].enabled = true;
    result.push(name);
  }, this);

  this.__cache__ = null;
  return result;
};


/**
 * Ruler.enableOnly(list [, ignoreInvalid])
 * - list (String|Array): list of rule names to enable (whitelist).
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable rules with given names, and disable everything else. If any rule name
 * not found - throw Error. Errors can be disabled by second param.
 *
 * See also [[Ruler.disable]], [[Ruler.enable]].
 **/
Ruler.prototype.enableOnly = function (list, ignoreInvalid) {
  if (!Array.isArray(list)) { list = [ list ]; }

  this.__rules__.forEach(function (rule) { rule.enabled = false; });

  this.enable(list, ignoreInvalid);
};


/**
 * Ruler.disable(list [, ignoreInvalid]) -> Array
 * - list (String|Array): list of rule names to disable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Disable rules with given names. If any rule name not found - throw Error.
 * Errors can be disabled by second param.
 *
 * Returns list of found rule names (if no exception happened).
 *
 * See also [[Ruler.enable]], [[Ruler.enableOnly]].
 **/
Ruler.prototype.disable = function (list, ignoreInvalid) {
  if (!Array.isArray(list)) { list = [ list ]; }

  var result = [];

  // Search by name and disable
  list.forEach(function (name) {
    var idx = this.__find__(name);

    if (idx < 0) {
      if (ignoreInvalid) { return; }
      throw new Error('Rules manager: invalid rule name ' + name);
    }
    this.__rules__[idx].enabled = false;
    result.push(name);
  }, this);

  this.__cache__ = null;
  return result;
};


/**
 * Ruler.getRules(chainName) -> Array
 *
 * Return array of active functions (rules) for given chain name. It analyzes
 * rules configuration, compiles caches if not exists and returns result.
 *
 * Default chain name is `''` (empty string). It can't be skipped. That's
 * done intentionally, to keep signature monomorphic for high speed.
 **/
Ruler.prototype.getRules = function (chainName) {
  if (this.__cache__ === null) {
    this.__compile__();
  }

  // Chain can be empty, if rules disabled. But we still have to return Array.
  return this.__cache__[chainName] || [];
};

module.exports = Ruler;


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_block/blockquote.js":
/*!****************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_block/blockquote.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Block quotes



var isSpace = (__webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isSpace);


module.exports = function blockquote(state, startLine, endLine, silent) {
  var adjustTab,
      ch,
      i,
      initial,
      l,
      lastLineEmpty,
      lines,
      nextLine,
      offset,
      oldBMarks,
      oldBSCount,
      oldIndent,
      oldParentType,
      oldSCount,
      oldTShift,
      spaceAfterMarker,
      terminate,
      terminatorRules,
      token,
      isOutdented,
      oldLineMax = state.lineMax,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  // check the block quote marker
  if (state.src.charCodeAt(pos) !== 0x3E/* > */) { return false; }

  // we know that it's going to be a valid blockquote,
  // so no point trying to find the end of it in silent mode
  if (silent) { return true; }

  oldBMarks  = [];
  oldBSCount = [];
  oldSCount  = [];
  oldTShift  = [];

  terminatorRules = state.md.block.ruler.getRules('blockquote');

  oldParentType = state.parentType;
  state.parentType = 'blockquote';

  // Search the end of the block
  //
  // Block ends with either:
  //  1. an empty line outside:
  //     ```
  //     > test
  //
  //     ```
  //  2. an empty line inside:
  //     ```
  //     >
  //     test
  //     ```
  //  3. another tag:
  //     ```
  //     > test
  //      - - -
  //     ```
  for (nextLine = startLine; nextLine < endLine; nextLine++) {
    // check if it's outdented, i.e. it's inside list item and indented
    // less than said list item:
    //
    // ```
    // 1. anything
    //    > current blockquote
    // 2. checking this line
    // ```
    isOutdented = state.sCount[nextLine] < state.blkIndent;

    pos = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];

    if (pos >= max) {
      // Case 1: line is not inside the blockquote, and this line is empty.
      break;
    }

    if (state.src.charCodeAt(pos++) === 0x3E/* > */ && !isOutdented) {
      // This line is inside the blockquote.

      // set offset past spaces and ">"
      initial = state.sCount[nextLine] + 1;

      // skip one optional space after '>'
      if (state.src.charCodeAt(pos) === 0x20 /* space */) {
        // ' >   test '
        //     ^ -- position start of line here:
        pos++;
        initial++;
        adjustTab = false;
        spaceAfterMarker = true;
      } else if (state.src.charCodeAt(pos) === 0x09 /* tab */) {
        spaceAfterMarker = true;

        if ((state.bsCount[nextLine] + initial) % 4 === 3) {
          // '  >\t  test '
          //       ^ -- position start of line here (tab has width===1)
          pos++;
          initial++;
          adjustTab = false;
        } else {
          // ' >\t  test '
          //    ^ -- position start of line here + shift bsCount slightly
          //         to make extra space appear
          adjustTab = true;
        }
      } else {
        spaceAfterMarker = false;
      }

      offset = initial;
      oldBMarks.push(state.bMarks[nextLine]);
      state.bMarks[nextLine] = pos;

      while (pos < max) {
        ch = state.src.charCodeAt(pos);

        if (isSpace(ch)) {
          if (ch === 0x09) {
            offset += 4 - (offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
          } else {
            offset++;
          }
        } else {
          break;
        }

        pos++;
      }

      lastLineEmpty = pos >= max;

      oldBSCount.push(state.bsCount[nextLine]);
      state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);

      oldSCount.push(state.sCount[nextLine]);
      state.sCount[nextLine] = offset - initial;

      oldTShift.push(state.tShift[nextLine]);
      state.tShift[nextLine] = pos - state.bMarks[nextLine];
      continue;
    }

    // Case 2: line is not inside the blockquote, and the last line was empty.
    if (lastLineEmpty) { break; }

    // Case 3: another tag found.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }

    if (terminate) {
      // Quirk to enforce "hard termination mode" for paragraphs;
      // normally if you call `tokenize(state, startLine, nextLine)`,
      // paragraphs will look below nextLine for paragraph continuation,
      // but if blockquote is terminated by another tag, they shouldn't
      state.lineMax = nextLine;

      if (state.blkIndent !== 0) {
        // state.blkIndent was non-zero, we now set it to zero,
        // so we need to re-calculate all offsets to appear as
        // if indent wasn't changed
        oldBMarks.push(state.bMarks[nextLine]);
        oldBSCount.push(state.bsCount[nextLine]);
        oldTShift.push(state.tShift[nextLine]);
        oldSCount.push(state.sCount[nextLine]);
        state.sCount[nextLine] -= state.blkIndent;
      }

      break;
    }

    oldBMarks.push(state.bMarks[nextLine]);
    oldBSCount.push(state.bsCount[nextLine]);
    oldTShift.push(state.tShift[nextLine]);
    oldSCount.push(state.sCount[nextLine]);

    // A negative indentation means that this is a paragraph continuation
    //
    state.sCount[nextLine] = -1;
  }

  oldIndent = state.blkIndent;
  state.blkIndent = 0;

  token        = state.push('blockquote_open', 'blockquote', 1);
  token.markup = '>';
  token.map    = lines = [ startLine, 0 ];

  state.md.block.tokenize(state, startLine, nextLine);

  token        = state.push('blockquote_close', 'blockquote', -1);
  token.markup = '>';

  state.lineMax = oldLineMax;
  state.parentType = oldParentType;
  lines[1] = state.line;

  // Restore original tShift; this might not be necessary since the parser
  // has already been here, but just to make sure we can do that.
  for (i = 0; i < oldTShift.length; i++) {
    state.bMarks[i + startLine] = oldBMarks[i];
    state.tShift[i + startLine] = oldTShift[i];
    state.sCount[i + startLine] = oldSCount[i];
    state.bsCount[i + startLine] = oldBSCount[i];
  }
  state.blkIndent = oldIndent;

  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_block/code.js":
/*!**********************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_block/code.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
// Code block (4 spaces padded)




module.exports = function code(state, startLine, endLine/*, silent*/) {
  var nextLine, last, token;

  if (state.sCount[startLine] - state.blkIndent < 4) { return false; }

  last = nextLine = startLine + 1;

  while (nextLine < endLine) {
    if (state.isEmpty(nextLine)) {
      nextLine++;
      continue;
    }

    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      nextLine++;
      last = nextLine;
      continue;
    }
    break;
  }

  state.line = last;

  token         = state.push('code_block', 'code', 0);
  token.content = state.getLines(startLine, last, 4 + state.blkIndent, false) + '\n';
  token.map     = [ startLine, state.line ];

  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_block/fence.js":
/*!***********************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_block/fence.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
// fences (``` lang, ~~~ lang)




module.exports = function fence(state, startLine, endLine, silent) {
  var marker, len, params, nextLine, mem, token, markup,
      haveEndMarker = false,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  if (pos + 3 > max) { return false; }

  marker = state.src.charCodeAt(pos);

  if (marker !== 0x7E/* ~ */ && marker !== 0x60 /* ` */) {
    return false;
  }

  // scan marker length
  mem = pos;
  pos = state.skipChars(pos, marker);

  len = pos - mem;

  if (len < 3) { return false; }

  markup = state.src.slice(mem, pos);
  params = state.src.slice(pos, max);

  if (marker === 0x60 /* ` */) {
    if (params.indexOf(String.fromCharCode(marker)) >= 0) {
      return false;
    }
  }

  // Since start is found, we can report success here in validation mode
  if (silent) { return true; }

  // search end of block
  nextLine = startLine;

  for (;;) {
    nextLine++;
    if (nextLine >= endLine) {
      // unclosed block should be autoclosed by end of document.
      // also block seems to be autoclosed by end of parent
      break;
    }

    pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];

    if (pos < max && state.sCount[nextLine] < state.blkIndent) {
      // non-empty line with negative indent should stop the list:
      // - ```
      //  test
      break;
    }

    if (state.src.charCodeAt(pos) !== marker) { continue; }

    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      // closing fence should be indented less than 4 spaces
      continue;
    }

    pos = state.skipChars(pos, marker);

    // closing code fence must be at least as long as the opening one
    if (pos - mem < len) { continue; }

    // make sure tail has spaces only
    pos = state.skipSpaces(pos);

    if (pos < max) { continue; }

    haveEndMarker = true;
    // found!
    break;
  }

  // If a fence has heading spaces, they should be removed from its inner block
  len = state.sCount[startLine];

  state.line = nextLine + (haveEndMarker ? 1 : 0);

  token         = state.push('fence', 'code', 0);
  token.info    = params;
  token.content = state.getLines(startLine + 1, nextLine, len, true);
  token.markup  = markup;
  token.map     = [ startLine, state.line ];

  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_block/heading.js":
/*!*************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_block/heading.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// heading (#, ##, ...)



var isSpace = (__webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isSpace);


module.exports = function heading(state, startLine, endLine, silent) {
  var ch, level, tmp, token,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  ch  = state.src.charCodeAt(pos);

  if (ch !== 0x23/* # */ || pos >= max) { return false; }

  // count heading level
  level = 1;
  ch = state.src.charCodeAt(++pos);
  while (ch === 0x23/* # */ && pos < max && level <= 6) {
    level++;
    ch = state.src.charCodeAt(++pos);
  }

  if (level > 6 || (pos < max && !isSpace(ch))) { return false; }

  if (silent) { return true; }

  // Let's cut tails like '    ###  ' from the end of string

  max = state.skipSpacesBack(max, pos);
  tmp = state.skipCharsBack(max, 0x23, pos); // #
  if (tmp > pos && isSpace(state.src.charCodeAt(tmp - 1))) {
    max = tmp;
  }

  state.line = startLine + 1;

  token        = state.push('heading_open', 'h' + String(level), 1);
  token.markup = '########'.slice(0, level);
  token.map    = [ startLine, state.line ];

  token          = state.push('inline', '', 0);
  token.content  = state.src.slice(pos, max).trim();
  token.map      = [ startLine, state.line ];
  token.children = [];

  token        = state.push('heading_close', 'h' + String(level), -1);
  token.markup = '########'.slice(0, level);

  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_block/hr.js":
/*!********************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_block/hr.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Horizontal rule



var isSpace = (__webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isSpace);


module.exports = function hr(state, startLine, endLine, silent) {
  var marker, cnt, ch, token,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  marker = state.src.charCodeAt(pos++);

  // Check hr marker
  if (marker !== 0x2A/* * */ &&
      marker !== 0x2D/* - */ &&
      marker !== 0x5F/* _ */) {
    return false;
  }

  // markers can be mixed with spaces, but there should be at least 3 of them

  cnt = 1;
  while (pos < max) {
    ch = state.src.charCodeAt(pos++);
    if (ch !== marker && !isSpace(ch)) { return false; }
    if (ch === marker) { cnt++; }
  }

  if (cnt < 3) { return false; }

  if (silent) { return true; }

  state.line = startLine + 1;

  token        = state.push('hr', 'hr', 0);
  token.map    = [ startLine, state.line ];
  token.markup = Array(cnt + 1).join(String.fromCharCode(marker));

  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_block/html_block.js":
/*!****************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_block/html_block.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// HTML block




var block_names = __webpack_require__(/*! ../common/html_blocks */ "./node_modules/markdown-it/lib/common/html_blocks.js");
var HTML_OPEN_CLOSE_TAG_RE = (__webpack_require__(/*! ../common/html_re */ "./node_modules/markdown-it/lib/common/html_re.js").HTML_OPEN_CLOSE_TAG_RE);

// An array of opening and corresponding closing sequences for html tags,
// last argument defines whether it can terminate a paragraph or not
//
var HTML_SEQUENCES = [
  [ /^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true ],
  [ /^<!--/,        /-->/,   true ],
  [ /^<\?/,         /\?>/,   true ],
  [ /^<![A-Z]/,     />/,     true ],
  [ /^<!\[CDATA\[/, /\]\]>/, true ],
  [ new RegExp('^</?(' + block_names.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, true ],
  [ new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + '\\s*$'),  /^$/, false ]
];


module.exports = function html_block(state, startLine, endLine, silent) {
  var i, nextLine, token, lineText,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  if (!state.md.options.html) { return false; }

  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

  lineText = state.src.slice(pos, max);

  for (i = 0; i < HTML_SEQUENCES.length; i++) {
    if (HTML_SEQUENCES[i][0].test(lineText)) { break; }
  }

  if (i === HTML_SEQUENCES.length) { return false; }

  if (silent) {
    // true if this sequence can be a terminator, false otherwise
    return HTML_SEQUENCES[i][2];
  }

  nextLine = startLine + 1;

  // If we are here - we detected HTML block.
  // Let's roll down till block end.
  if (!HTML_SEQUENCES[i][1].test(lineText)) {
    for (; nextLine < endLine; nextLine++) {
      if (state.sCount[nextLine] < state.blkIndent) { break; }

      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];
      lineText = state.src.slice(pos, max);

      if (HTML_SEQUENCES[i][1].test(lineText)) {
        if (lineText.length !== 0) { nextLine++; }
        break;
      }
    }
  }

  state.line = nextLine;

  token         = state.push('html_block', '', 0);
  token.map     = [ startLine, nextLine ];
  token.content = state.getLines(startLine, nextLine, state.blkIndent, true);

  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_block/lheading.js":
/*!**************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_block/lheading.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
// lheading (---, ===)




module.exports = function lheading(state, startLine, endLine/*, silent*/) {
  var content, terminate, i, l, token, pos, max, level, marker,
      nextLine = startLine + 1, oldParentType,
      terminatorRules = state.md.block.ruler.getRules('paragraph');

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  oldParentType = state.parentType;
  state.parentType = 'paragraph'; // use paragraph to match terminatorRules

  // jump line-by-line until empty one or EOF
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    // this would be a code block normally, but after paragraph
    // it's considered a lazy continuation regardless of what's there
    if (state.sCount[nextLine] - state.blkIndent > 3) { continue; }

    //
    // Check for underline in setext header
    //
    if (state.sCount[nextLine] >= state.blkIndent) {
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];

      if (pos < max) {
        marker = state.src.charCodeAt(pos);

        if (marker === 0x2D/* - */ || marker === 0x3D/* = */) {
          pos = state.skipChars(pos, marker);
          pos = state.skipSpaces(pos);

          if (pos >= max) {
            level = (marker === 0x3D/* = */ ? 1 : 2);
            break;
          }
        }
      }
    }

    // quirk for blockquotes, this line should already be checked by that rule
    if (state.sCount[nextLine] < 0) { continue; }

    // Some tags can terminate paragraph without empty line.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }
  }

  if (!level) {
    // Didn't find valid underline
    return false;
  }

  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();

  state.line = nextLine + 1;

  token          = state.push('heading_open', 'h' + String(level), 1);
  token.markup   = String.fromCharCode(marker);
  token.map      = [ startLine, state.line ];

  token          = state.push('inline', '', 0);
  token.content  = content;
  token.map      = [ startLine, state.line - 1 ];
  token.children = [];

  token          = state.push('heading_close', 'h' + String(level), -1);
  token.markup   = String.fromCharCode(marker);

  state.parentType = oldParentType;

  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_block/list.js":
/*!**********************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_block/list.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Lists



var isSpace = (__webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isSpace);


// Search `[-+*][\n ]`, returns next pos after marker on success
// or -1 on fail.
function skipBulletListMarker(state, startLine) {
  var marker, pos, max, ch;

  pos = state.bMarks[startLine] + state.tShift[startLine];
  max = state.eMarks[startLine];

  marker = state.src.charCodeAt(pos++);
  // Check bullet
  if (marker !== 0x2A/* * */ &&
      marker !== 0x2D/* - */ &&
      marker !== 0x2B/* + */) {
    return -1;
  }

  if (pos < max) {
    ch = state.src.charCodeAt(pos);

    if (!isSpace(ch)) {
      // " -test " - is not a list item
      return -1;
    }
  }

  return pos;
}

// Search `\d+[.)][\n ]`, returns next pos after marker on success
// or -1 on fail.
function skipOrderedListMarker(state, startLine) {
  var ch,
      start = state.bMarks[startLine] + state.tShift[startLine],
      pos = start,
      max = state.eMarks[startLine];

  // List marker should have at least 2 chars (digit + dot)
  if (pos + 1 >= max) { return -1; }

  ch = state.src.charCodeAt(pos++);

  if (ch < 0x30/* 0 */ || ch > 0x39/* 9 */) { return -1; }

  for (;;) {
    // EOL -> fail
    if (pos >= max) { return -1; }

    ch = state.src.charCodeAt(pos++);

    if (ch >= 0x30/* 0 */ && ch <= 0x39/* 9 */) {

      // List marker should have no more than 9 digits
      // (prevents integer overflow in browsers)
      if (pos - start >= 10) { return -1; }

      continue;
    }

    // found valid marker
    if (ch === 0x29/* ) */ || ch === 0x2e/* . */) {
      break;
    }

    return -1;
  }


  if (pos < max) {
    ch = state.src.charCodeAt(pos);

    if (!isSpace(ch)) {
      // " 1.test " - is not a list item
      return -1;
    }
  }
  return pos;
}

function markTightParagraphs(state, idx) {
  var i, l,
      level = state.level + 2;

  for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
    if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
      state.tokens[i + 2].hidden = true;
      state.tokens[i].hidden = true;
      i += 2;
    }
  }
}


module.exports = function list(state, startLine, endLine, silent) {
  var ch,
      contentStart,
      i,
      indent,
      indentAfterMarker,
      initial,
      isOrdered,
      itemLines,
      l,
      listLines,
      listTokIdx,
      markerCharCode,
      markerValue,
      max,
      offset,
      oldListIndent,
      oldParentType,
      oldSCount,
      oldTShift,
      oldTight,
      pos,
      posAfterMarker,
      prevEmptyEnd,
      start,
      terminate,
      terminatorRules,
      token,
      nextLine = startLine,
      isTerminatingParagraph = false,
      tight = true;

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[nextLine] - state.blkIndent >= 4) { return false; }

  // Special case:
  //  - item 1
  //   - item 2
  //    - item 3
  //     - item 4
  //      - this one is a paragraph continuation
  if (state.listIndent >= 0 &&
      state.sCount[nextLine] - state.listIndent >= 4 &&
      state.sCount[nextLine] < state.blkIndent) {
    return false;
  }

  // limit conditions when list can interrupt
  // a paragraph (validation mode only)
  if (silent && state.parentType === 'paragraph') {
    // Next list item should still terminate previous list item;
    //
    // This code can fail if plugins use blkIndent as well as lists,
    // but I hope the spec gets fixed long before that happens.
    //
    if (state.sCount[nextLine] >= state.blkIndent) {
      isTerminatingParagraph = true;
    }
  }

  // Detect list type and position after marker
  if ((posAfterMarker = skipOrderedListMarker(state, nextLine)) >= 0) {
    isOrdered = true;
    start = state.bMarks[nextLine] + state.tShift[nextLine];
    markerValue = Number(state.src.slice(start, posAfterMarker - 1));

    // If we're starting a new ordered list right after
    // a paragraph, it should start with 1.
    if (isTerminatingParagraph && markerValue !== 1) return false;

  } else if ((posAfterMarker = skipBulletListMarker(state, nextLine)) >= 0) {
    isOrdered = false;

  } else {
    return false;
  }

  // If we're starting a new unordered list right after
  // a paragraph, first line should not be empty.
  if (isTerminatingParagraph) {
    if (state.skipSpaces(posAfterMarker) >= state.eMarks[nextLine]) return false;
  }

  // For validation mode we can terminate immediately
  if (silent) { return true; }

  // We should terminate list on style change. Remember first one to compare.
  markerCharCode = state.src.charCodeAt(posAfterMarker - 1);

  // Start list
  listTokIdx = state.tokens.length;

  if (isOrdered) {
    token       = state.push('ordered_list_open', 'ol', 1);
    if (markerValue !== 1) {
      token.attrs = [ [ 'start', markerValue ] ];
    }

  } else {
    token       = state.push('bullet_list_open', 'ul', 1);
  }

  token.map    = listLines = [ nextLine, 0 ];
  token.markup = String.fromCharCode(markerCharCode);

  //
  // Iterate list items
  //

  prevEmptyEnd = false;
  terminatorRules = state.md.block.ruler.getRules('list');

  oldParentType = state.parentType;
  state.parentType = 'list';

  while (nextLine < endLine) {
    pos = posAfterMarker;
    max = state.eMarks[nextLine];

    initial = offset = state.sCount[nextLine] + posAfterMarker - (state.bMarks[nextLine] + state.tShift[nextLine]);

    while (pos < max) {
      ch = state.src.charCodeAt(pos);

      if (ch === 0x09) {
        offset += 4 - (offset + state.bsCount[nextLine]) % 4;
      } else if (ch === 0x20) {
        offset++;
      } else {
        break;
      }

      pos++;
    }

    contentStart = pos;

    if (contentStart >= max) {
      // trimming space in "-    \n  3" case, indent is 1 here
      indentAfterMarker = 1;
    } else {
      indentAfterMarker = offset - initial;
    }

    // If we have more than 4 spaces, the indent is 1
    // (the rest is just indented code block)
    if (indentAfterMarker > 4) { indentAfterMarker = 1; }

    // "  -  test"
    //  ^^^^^ - calculating total length of this thing
    indent = initial + indentAfterMarker;

    // Run subparser & write tokens
    token        = state.push('list_item_open', 'li', 1);
    token.markup = String.fromCharCode(markerCharCode);
    token.map    = itemLines = [ nextLine, 0 ];
    if (isOrdered) {
      token.info = state.src.slice(start, posAfterMarker - 1);
    }

    // change current state, then restore it after parser subcall
    oldTight = state.tight;
    oldTShift = state.tShift[nextLine];
    oldSCount = state.sCount[nextLine];

    //  - example list
    // ^ listIndent position will be here
    //   ^ blkIndent position will be here
    //
    oldListIndent = state.listIndent;
    state.listIndent = state.blkIndent;
    state.blkIndent = indent;

    state.tight = true;
    state.tShift[nextLine] = contentStart - state.bMarks[nextLine];
    state.sCount[nextLine] = offset;

    if (contentStart >= max && state.isEmpty(nextLine + 1)) {
      // workaround for this case
      // (list item is empty, list terminates before "foo"):
      // ~~~~~~~~
      //   -
      //
      //     foo
      // ~~~~~~~~
      state.line = Math.min(state.line + 2, endLine);
    } else {
      state.md.block.tokenize(state, nextLine, endLine, true);
    }

    // If any of list item is tight, mark list as tight
    if (!state.tight || prevEmptyEnd) {
      tight = false;
    }
    // Item become loose if finish with empty line,
    // but we should filter last element, because it means list finish
    prevEmptyEnd = (state.line - nextLine) > 1 && state.isEmpty(state.line - 1);

    state.blkIndent = state.listIndent;
    state.listIndent = oldListIndent;
    state.tShift[nextLine] = oldTShift;
    state.sCount[nextLine] = oldSCount;
    state.tight = oldTight;

    token        = state.push('list_item_close', 'li', -1);
    token.markup = String.fromCharCode(markerCharCode);

    nextLine = state.line;
    itemLines[1] = nextLine;

    if (nextLine >= endLine) { break; }

    //
    // Try to check if list is terminated or continued.
    //
    if (state.sCount[nextLine] < state.blkIndent) { break; }

    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[nextLine] - state.blkIndent >= 4) { break; }

    // fail if terminating block found
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }

    // fail if list has another type
    if (isOrdered) {
      posAfterMarker = skipOrderedListMarker(state, nextLine);
      if (posAfterMarker < 0) { break; }
      start = state.bMarks[nextLine] + state.tShift[nextLine];
    } else {
      posAfterMarker = skipBulletListMarker(state, nextLine);
      if (posAfterMarker < 0) { break; }
    }

    if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) { break; }
  }

  // Finalize list
  if (isOrdered) {
    token = state.push('ordered_list_close', 'ol', -1);
  } else {
    token = state.push('bullet_list_close', 'ul', -1);
  }
  token.markup = String.fromCharCode(markerCharCode);

  listLines[1] = nextLine;
  state.line = nextLine;

  state.parentType = oldParentType;

  // mark paragraphs tight if needed
  if (tight) {
    markTightParagraphs(state, listTokIdx);
  }

  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_block/paragraph.js":
/*!***************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_block/paragraph.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
// Paragraph




module.exports = function paragraph(state, startLine, endLine) {
  var content, terminate, i, l, token, oldParentType,
      nextLine = startLine + 1,
      terminatorRules = state.md.block.ruler.getRules('paragraph');

  oldParentType = state.parentType;
  state.parentType = 'paragraph';

  // jump line-by-line until empty one or EOF
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    // this would be a code block normally, but after paragraph
    // it's considered a lazy continuation regardless of what's there
    if (state.sCount[nextLine] - state.blkIndent > 3) { continue; }

    // quirk for blockquotes, this line should already be checked by that rule
    if (state.sCount[nextLine] < 0) { continue; }

    // Some tags can terminate paragraph without empty line.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }
  }

  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();

  state.line = nextLine;

  token          = state.push('paragraph_open', 'p', 1);
  token.map      = [ startLine, state.line ];

  token          = state.push('inline', '', 0);
  token.content  = content;
  token.map      = [ startLine, state.line ];
  token.children = [];

  token          = state.push('paragraph_close', 'p', -1);

  state.parentType = oldParentType;

  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_block/reference.js":
/*!***************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_block/reference.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";



var normalizeReference   = (__webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").normalizeReference);
var isSpace              = (__webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isSpace);


module.exports = function reference(state, startLine, _endLine, silent) {
  var ch,
      destEndPos,
      destEndLineNo,
      endLine,
      href,
      i,
      l,
      label,
      labelEnd,
      oldParentType,
      res,
      start,
      str,
      terminate,
      terminatorRules,
      title,
      lines = 0,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine],
      nextLine = startLine + 1;

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  if (state.src.charCodeAt(pos) !== 0x5B/* [ */) { return false; }

  // Simple check to quickly interrupt scan on [link](url) at the start of line.
  // Can be useful on practice: https://github.com/markdown-it/markdown-it/issues/54
  while (++pos < max) {
    if (state.src.charCodeAt(pos) === 0x5D /* ] */ &&
        state.src.charCodeAt(pos - 1) !== 0x5C/* \ */) {
      if (pos + 1 === max) { return false; }
      if (state.src.charCodeAt(pos + 1) !== 0x3A/* : */) { return false; }
      break;
    }
  }

  endLine = state.lineMax;

  // jump line-by-line until empty one or EOF
  terminatorRules = state.md.block.ruler.getRules('reference');

  oldParentType = state.parentType;
  state.parentType = 'reference';

  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    // this would be a code block normally, but after paragraph
    // it's considered a lazy continuation regardless of what's there
    if (state.sCount[nextLine] - state.blkIndent > 3) { continue; }

    // quirk for blockquotes, this line should already be checked by that rule
    if (state.sCount[nextLine] < 0) { continue; }

    // Some tags can terminate paragraph without empty line.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }
  }

  str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
  max = str.length;

  for (pos = 1; pos < max; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 0x5B /* [ */) {
      return false;
    } else if (ch === 0x5D /* ] */) {
      labelEnd = pos;
      break;
    } else if (ch === 0x0A /* \n */) {
      lines++;
    } else if (ch === 0x5C /* \ */) {
      pos++;
      if (pos < max && str.charCodeAt(pos) === 0x0A) {
        lines++;
      }
    }
  }

  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A/* : */) { return false; }

  // [label]:   destination   'title'
  //         ^^^ skip optional whitespace here
  for (pos = labelEnd + 2; pos < max; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 0x0A) {
      lines++;
    } else if (isSpace(ch)) {
      /*eslint no-empty:0*/
    } else {
      break;
    }
  }

  // [label]:   destination   'title'
  //            ^^^^^^^^^^^ parse this
  res = state.md.helpers.parseLinkDestination(str, pos, max);
  if (!res.ok) { return false; }

  href = state.md.normalizeLink(res.str);
  if (!state.md.validateLink(href)) { return false; }

  pos = res.pos;
  lines += res.lines;

  // save cursor state, we could require to rollback later
  destEndPos = pos;
  destEndLineNo = lines;

  // [label]:   destination   'title'
  //                       ^^^ skipping those spaces
  start = pos;
  for (; pos < max; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 0x0A) {
      lines++;
    } else if (isSpace(ch)) {
      /*eslint no-empty:0*/
    } else {
      break;
    }
  }

  // [label]:   destination   'title'
  //                          ^^^^^^^ parse this
  res = state.md.helpers.parseLinkTitle(str, pos, max);
  if (pos < max && start !== pos && res.ok) {
    title = res.str;
    pos = res.pos;
    lines += res.lines;
  } else {
    title = '';
    pos = destEndPos;
    lines = destEndLineNo;
  }

  // skip trailing spaces until the rest of the line
  while (pos < max) {
    ch = str.charCodeAt(pos);
    if (!isSpace(ch)) { break; }
    pos++;
  }

  if (pos < max && str.charCodeAt(pos) !== 0x0A) {
    if (title) {
      // garbage at the end of the line after title,
      // but it could still be a valid reference if we roll back
      title = '';
      pos = destEndPos;
      lines = destEndLineNo;
      while (pos < max) {
        ch = str.charCodeAt(pos);
        if (!isSpace(ch)) { break; }
        pos++;
      }
    }
  }

  if (pos < max && str.charCodeAt(pos) !== 0x0A) {
    // garbage at the end of the line
    return false;
  }

  label = normalizeReference(str.slice(1, labelEnd));
  if (!label) {
    // CommonMark 0.20 disallows empty labels
    return false;
  }

  // Reference can not terminate anything. This check is for safety only.
  /*istanbul ignore if*/
  if (silent) { return true; }

  if (typeof state.env.references === 'undefined') {
    state.env.references = {};
  }
  if (typeof state.env.references[label] === 'undefined') {
    state.env.references[label] = { title: title, href: href };
  }

  state.parentType = oldParentType;

  state.line = startLine + lines + 1;
  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_block/state_block.js":
/*!*****************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_block/state_block.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Parser state class



var Token = __webpack_require__(/*! ../token */ "./node_modules/markdown-it/lib/token.js");
var isSpace = (__webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isSpace);


function StateBlock(src, md, env, tokens) {
  var ch, s, start, pos, len, indent, offset, indent_found;

  this.src = src;

  // link to parser instance
  this.md     = md;

  this.env = env;

  //
  // Internal state vartiables
  //

  this.tokens = tokens;

  this.bMarks = [];  // line begin offsets for fast jumps
  this.eMarks = [];  // line end offsets for fast jumps
  this.tShift = [];  // offsets of the first non-space characters (tabs not expanded)
  this.sCount = [];  // indents for each line (tabs expanded)

  // An amount of virtual spaces (tabs expanded) between beginning
  // of each line (bMarks) and real beginning of that line.
  //
  // It exists only as a hack because blockquotes override bMarks
  // losing information in the process.
  //
  // It's used only when expanding tabs, you can think about it as
  // an initial tab length, e.g. bsCount=21 applied to string `\t123`
  // means first tab should be expanded to 4-21%4 === 3 spaces.
  //
  this.bsCount = [];

  // block parser variables
  this.blkIndent  = 0; // required block content indent (for example, if we are
                       // inside a list, it would be positioned after list marker)
  this.line       = 0; // line index in src
  this.lineMax    = 0; // lines count
  this.tight      = false;  // loose/tight mode for lists
  this.ddIndent   = -1; // indent of the current dd block (-1 if there isn't any)
  this.listIndent = -1; // indent of the current list block (-1 if there isn't any)

  // can be 'blockquote', 'list', 'root', 'paragraph' or 'reference'
  // used in lists to determine if they interrupt a paragraph
  this.parentType = 'root';

  this.level = 0;

  // renderer
  this.result = '';

  // Create caches
  // Generate markers.
  s = this.src;
  indent_found = false;

  for (start = pos = indent = offset = 0, len = s.length; pos < len; pos++) {
    ch = s.charCodeAt(pos);

    if (!indent_found) {
      if (isSpace(ch)) {
        indent++;

        if (ch === 0x09) {
          offset += 4 - offset % 4;
        } else {
          offset++;
        }
        continue;
      } else {
        indent_found = true;
      }
    }

    if (ch === 0x0A || pos === len - 1) {
      if (ch !== 0x0A) { pos++; }
      this.bMarks.push(start);
      this.eMarks.push(pos);
      this.tShift.push(indent);
      this.sCount.push(offset);
      this.bsCount.push(0);

      indent_found = false;
      indent = 0;
      offset = 0;
      start = pos + 1;
    }
  }

  // Push fake entry to simplify cache bounds checks
  this.bMarks.push(s.length);
  this.eMarks.push(s.length);
  this.tShift.push(0);
  this.sCount.push(0);
  this.bsCount.push(0);

  this.lineMax = this.bMarks.length - 1; // don't count last fake line
}

// Push new token to "stream".
//
StateBlock.prototype.push = function (type, tag, nesting) {
  var token = new Token(type, tag, nesting);
  token.block = true;

  if (nesting < 0) this.level--; // closing tag
  token.level = this.level;
  if (nesting > 0) this.level++; // opening tag

  this.tokens.push(token);
  return token;
};

StateBlock.prototype.isEmpty = function isEmpty(line) {
  return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
};

StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
  for (var max = this.lineMax; from < max; from++) {
    if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
      break;
    }
  }
  return from;
};

// Skip spaces from given position.
StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
  var ch;

  for (var max = this.src.length; pos < max; pos++) {
    ch = this.src.charCodeAt(pos);
    if (!isSpace(ch)) { break; }
  }
  return pos;
};

// Skip spaces from given position in reverse.
StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
  if (pos <= min) { return pos; }

  while (pos > min) {
    if (!isSpace(this.src.charCodeAt(--pos))) { return pos + 1; }
  }
  return pos;
};

// Skip char codes from given position
StateBlock.prototype.skipChars = function skipChars(pos, code) {
  for (var max = this.src.length; pos < max; pos++) {
    if (this.src.charCodeAt(pos) !== code) { break; }
  }
  return pos;
};

// Skip char codes reverse from given position - 1
StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
  if (pos <= min) { return pos; }

  while (pos > min) {
    if (code !== this.src.charCodeAt(--pos)) { return pos + 1; }
  }
  return pos;
};

// cut lines range from source.
StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
  var i, lineIndent, ch, first, last, queue, lineStart,
      line = begin;

  if (begin >= end) {
    return '';
  }

  queue = new Array(end - begin);

  for (i = 0; line < end; line++, i++) {
    lineIndent = 0;
    lineStart = first = this.bMarks[line];

    if (line + 1 < end || keepLastLF) {
      // No need for bounds check because we have fake entry on tail.
      last = this.eMarks[line] + 1;
    } else {
      last = this.eMarks[line];
    }

    while (first < last && lineIndent < indent) {
      ch = this.src.charCodeAt(first);

      if (isSpace(ch)) {
        if (ch === 0x09) {
          lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
        } else {
          lineIndent++;
        }
      } else if (first - lineStart < this.tShift[line]) {
        // patched tShift masked characters to look like spaces (blockquotes, list markers)
        lineIndent++;
      } else {
        break;
      }

      first++;
    }

    if (lineIndent > indent) {
      // partially expanding tabs in code blocks, e.g '\t\tfoobar'
      // with indent=2 becomes '  \tfoobar'
      queue[i] = new Array(lineIndent - indent + 1).join(' ') + this.src.slice(first, last);
    } else {
      queue[i] = this.src.slice(first, last);
    }
  }

  return queue.join('');
};

// re-export Token class to use in block rules
StateBlock.prototype.Token = Token;


module.exports = StateBlock;


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_block/table.js":
/*!***********************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_block/table.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// GFM table, https://github.github.com/gfm/#tables-extension-



var isSpace = (__webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isSpace);


function getLine(state, line) {
  var pos = state.bMarks[line] + state.tShift[line],
      max = state.eMarks[line];

  return state.src.slice(pos, max);
}

function escapedSplit(str) {
  var result = [],
      pos = 0,
      max = str.length,
      ch,
      isEscaped = false,
      lastPos = 0,
      current = '';

  ch  = str.charCodeAt(pos);

  while (pos < max) {
    if (ch === 0x7c/* | */) {
      if (!isEscaped) {
        // pipe separating cells, '|'
        result.push(current + str.substring(lastPos, pos));
        current = '';
        lastPos = pos + 1;
      } else {
        // escaped pipe, '\|'
        current += str.substring(lastPos, pos - 1);
        lastPos = pos;
      }
    }

    isEscaped = (ch === 0x5c/* \ */);
    pos++;

    ch = str.charCodeAt(pos);
  }

  result.push(current + str.substring(lastPos));

  return result;
}


module.exports = function table(state, startLine, endLine, silent) {
  var ch, lineText, pos, i, l, nextLine, columns, columnCount, token,
      aligns, t, tableLines, tbodyLines, oldParentType, terminate,
      terminatorRules, firstCh, secondCh;

  // should have at least two lines
  if (startLine + 2 > endLine) { return false; }

  nextLine = startLine + 1;

  if (state.sCount[nextLine] < state.blkIndent) { return false; }

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[nextLine] - state.blkIndent >= 4) { return false; }

  // first character of the second line should be '|', '-', ':',
  // and no other characters are allowed but spaces;
  // basically, this is the equivalent of /^[-:|][-:|\s]*$/ regexp

  pos = state.bMarks[nextLine] + state.tShift[nextLine];
  if (pos >= state.eMarks[nextLine]) { return false; }

  firstCh = state.src.charCodeAt(pos++);
  if (firstCh !== 0x7C/* | */ && firstCh !== 0x2D/* - */ && firstCh !== 0x3A/* : */) { return false; }

  if (pos >= state.eMarks[nextLine]) { return false; }

  secondCh = state.src.charCodeAt(pos++);
  if (secondCh !== 0x7C/* | */ && secondCh !== 0x2D/* - */ && secondCh !== 0x3A/* : */ && !isSpace(secondCh)) {
    return false;
  }

  // if first character is '-', then second character must not be a space
  // (due to parsing ambiguity with list)
  if (firstCh === 0x2D/* - */ && isSpace(secondCh)) { return false; }

  while (pos < state.eMarks[nextLine]) {
    ch = state.src.charCodeAt(pos);

    if (ch !== 0x7C/* | */ && ch !== 0x2D/* - */ && ch !== 0x3A/* : */ && !isSpace(ch)) { return false; }

    pos++;
  }

  lineText = getLine(state, startLine + 1);

  columns = lineText.split('|');
  aligns = [];
  for (i = 0; i < columns.length; i++) {
    t = columns[i].trim();
    if (!t) {
      // allow empty columns before and after table, but not in between columns;
      // e.g. allow ` |---| `, disallow ` ---||--- `
      if (i === 0 || i === columns.length - 1) {
        continue;
      } else {
        return false;
      }
    }

    if (!/^:?-+:?$/.test(t)) { return false; }
    if (t.charCodeAt(t.length - 1) === 0x3A/* : */) {
      aligns.push(t.charCodeAt(0) === 0x3A/* : */ ? 'center' : 'right');
    } else if (t.charCodeAt(0) === 0x3A/* : */) {
      aligns.push('left');
    } else {
      aligns.push('');
    }
  }

  lineText = getLine(state, startLine).trim();
  if (lineText.indexOf('|') === -1) { return false; }
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }
  columns = escapedSplit(lineText);
  if (columns.length && columns[0] === '') columns.shift();
  if (columns.length && columns[columns.length - 1] === '') columns.pop();

  // header row will define an amount of columns in the entire table,
  // and align row should be exactly the same (the rest of the rows can differ)
  columnCount = columns.length;
  if (columnCount === 0 || columnCount !== aligns.length) { return false; }

  if (silent) { return true; }

  oldParentType = state.parentType;
  state.parentType = 'table';

  // use 'blockquote' lists for termination because it's
  // the most similar to tables
  terminatorRules = state.md.block.ruler.getRules('blockquote');

  token     = state.push('table_open', 'table', 1);
  token.map = tableLines = [ startLine, 0 ];

  token     = state.push('thead_open', 'thead', 1);
  token.map = [ startLine, startLine + 1 ];

  token     = state.push('tr_open', 'tr', 1);
  token.map = [ startLine, startLine + 1 ];

  for (i = 0; i < columns.length; i++) {
    token          = state.push('th_open', 'th', 1);
    if (aligns[i]) {
      token.attrs  = [ [ 'style', 'text-align:' + aligns[i] ] ];
    }

    token          = state.push('inline', '', 0);
    token.content  = columns[i].trim();
    token.children = [];

    token          = state.push('th_close', 'th', -1);
  }

  token     = state.push('tr_close', 'tr', -1);
  token     = state.push('thead_close', 'thead', -1);

  for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
    if (state.sCount[nextLine] < state.blkIndent) { break; }

    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }

    if (terminate) { break; }
    lineText = getLine(state, nextLine).trim();
    if (!lineText) { break; }
    if (state.sCount[nextLine] - state.blkIndent >= 4) { break; }
    columns = escapedSplit(lineText);
    if (columns.length && columns[0] === '') columns.shift();
    if (columns.length && columns[columns.length - 1] === '') columns.pop();

    if (nextLine === startLine + 2) {
      token     = state.push('tbody_open', 'tbody', 1);
      token.map = tbodyLines = [ startLine + 2, 0 ];
    }

    token     = state.push('tr_open', 'tr', 1);
    token.map = [ nextLine, nextLine + 1 ];

    for (i = 0; i < columnCount; i++) {
      token          = state.push('td_open', 'td', 1);
      if (aligns[i]) {
        token.attrs  = [ [ 'style', 'text-align:' + aligns[i] ] ];
      }

      token          = state.push('inline', '', 0);
      token.content  = columns[i] ? columns[i].trim() : '';
      token.children = [];

      token          = state.push('td_close', 'td', -1);
    }
    token = state.push('tr_close', 'tr', -1);
  }

  if (tbodyLines) {
    token = state.push('tbody_close', 'tbody', -1);
    tbodyLines[1] = nextLine;
  }

  token = state.push('table_close', 'table', -1);
  tableLines[1] = nextLine;

  state.parentType = oldParentType;
  state.line = nextLine;
  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_core/block.js":
/*!**********************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_core/block.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";



module.exports = function block(state) {
  var token;

  if (state.inlineMode) {
    token          = new state.Token('inline', '', 0);
    token.content  = state.src;
    token.map      = [ 0, 1 ];
    token.children = [];
    state.tokens.push(token);
  } else {
    state.md.block.parse(state.src, state.md, state.env, state.tokens);
  }
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_core/inline.js":
/*!***********************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_core/inline.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function inline(state) {
  var tokens = state.tokens, tok, i, l;

  // Parse inlines
  for (i = 0, l = tokens.length; i < l; i++) {
    tok = tokens[i];
    if (tok.type === 'inline') {
      state.md.inline.parse(tok.content, state.md, state.env, tok.children);
    }
  }
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_core/linkify.js":
/*!************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_core/linkify.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Replace link-like texts with link nodes.
//
// Currently restricted by `md.validateLink()` to http/https/ftp
//



var arrayReplaceAt = (__webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").arrayReplaceAt);


function isLinkOpen(str) {
  return /^<a[>\s]/i.test(str);
}
function isLinkClose(str) {
  return /^<\/a\s*>/i.test(str);
}


module.exports = function linkify(state) {
  var i, j, l, tokens, token, currentToken, nodes, ln, text, pos, lastPos,
      level, htmlLinkLevel, url, fullUrl, urlText,
      blockTokens = state.tokens,
      links;

  if (!state.md.options.linkify) { return; }

  for (j = 0, l = blockTokens.length; j < l; j++) {
    if (blockTokens[j].type !== 'inline' ||
        !state.md.linkify.pretest(blockTokens[j].content)) {
      continue;
    }

    tokens = blockTokens[j].children;

    htmlLinkLevel = 0;

    // We scan from the end, to keep position when new tags added.
    // Use reversed logic in links start/end match
    for (i = tokens.length - 1; i >= 0; i--) {
      currentToken = tokens[i];

      // Skip content of markdown links
      if (currentToken.type === 'link_close') {
        i--;
        while (tokens[i].level !== currentToken.level && tokens[i].type !== 'link_open') {
          i--;
        }
        continue;
      }

      // Skip content of html tag links
      if (currentToken.type === 'html_inline') {
        if (isLinkOpen(currentToken.content) && htmlLinkLevel > 0) {
          htmlLinkLevel--;
        }
        if (isLinkClose(currentToken.content)) {
          htmlLinkLevel++;
        }
      }
      if (htmlLinkLevel > 0) { continue; }

      if (currentToken.type === 'text' && state.md.linkify.test(currentToken.content)) {

        text = currentToken.content;
        links = state.md.linkify.match(text);

        // Now split string to nodes
        nodes = [];
        level = currentToken.level;
        lastPos = 0;

        // forbid escape sequence at the start of the string,
        // this avoids http\://example.com/ from being linkified as
        // http:<a href="//example.com/">//example.com/</a>
        if (links.length > 0 &&
            links[0].index === 0 &&
            i > 0 &&
            tokens[i - 1].type === 'text_special') {
          links = links.slice(1);
        }

        for (ln = 0; ln < links.length; ln++) {
          url = links[ln].url;
          fullUrl = state.md.normalizeLink(url);
          if (!state.md.validateLink(fullUrl)) { continue; }

          urlText = links[ln].text;

          // Linkifier might send raw hostnames like "example.com", where url
          // starts with domain name. So we prepend http:// in those cases,
          // and remove it afterwards.
          //
          if (!links[ln].schema) {
            urlText = state.md.normalizeLinkText('http://' + urlText).replace(/^http:\/\//, '');
          } else if (links[ln].schema === 'mailto:' && !/^mailto:/i.test(urlText)) {
            urlText = state.md.normalizeLinkText('mailto:' + urlText).replace(/^mailto:/, '');
          } else {
            urlText = state.md.normalizeLinkText(urlText);
          }

          pos = links[ln].index;

          if (pos > lastPos) {
            token         = new state.Token('text', '', 0);
            token.content = text.slice(lastPos, pos);
            token.level   = level;
            nodes.push(token);
          }

          token         = new state.Token('link_open', 'a', 1);
          token.attrs   = [ [ 'href', fullUrl ] ];
          token.level   = level++;
          token.markup  = 'linkify';
          token.info    = 'auto';
          nodes.push(token);

          token         = new state.Token('text', '', 0);
          token.content = urlText;
          token.level   = level;
          nodes.push(token);

          token         = new state.Token('link_close', 'a', -1);
          token.level   = --level;
          token.markup  = 'linkify';
          token.info    = 'auto';
          nodes.push(token);

          lastPos = links[ln].lastIndex;
        }
        if (lastPos < text.length) {
          token         = new state.Token('text', '', 0);
          token.content = text.slice(lastPos);
          token.level   = level;
          nodes.push(token);
        }

        // replace current node
        blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
      }
    }
  }
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_core/normalize.js":
/*!**************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_core/normalize.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
// Normalize input string




// https://spec.commonmark.org/0.29/#line-ending
var NEWLINES_RE  = /\r\n?|\n/g;
var NULL_RE      = /\0/g;


module.exports = function normalize(state) {
  var str;

  // Normalize newlines
  str = state.src.replace(NEWLINES_RE, '\n');

  // Replace NULL characters
  str = str.replace(NULL_RE, '\uFFFD');

  state.src = str;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_core/replacements.js":
/*!*****************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_core/replacements.js ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
// Simple typographic replacements
//
// (c) (C) → ©
// (tm) (TM) → ™
// (r) (R) → ®
// +- → ±
// ... → … (also ?.... → ?.., !.... → !..)
// ???????? → ???, !!!!! → !!!, `,,` → `,`
// -- → &ndash;, --- → &mdash;
//


// TODO:
// - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
// - multiplications 2 x 4 -> 2 × 4

var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;

// Workaround for phantomjs - need regex without /g flag,
// or root check will fail every second time
var SCOPED_ABBR_TEST_RE = /\((c|tm|r)\)/i;

var SCOPED_ABBR_RE = /\((c|tm|r)\)/ig;
var SCOPED_ABBR = {
  c: '©',
  r: '®',
  tm: '™'
};

function replaceFn(match, name) {
  return SCOPED_ABBR[name.toLowerCase()];
}

function replace_scoped(inlineTokens) {
  var i, token, inside_autolink = 0;

  for (i = inlineTokens.length - 1; i >= 0; i--) {
    token = inlineTokens[i];

    if (token.type === 'text' && !inside_autolink) {
      token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
    }

    if (token.type === 'link_open' && token.info === 'auto') {
      inside_autolink--;
    }

    if (token.type === 'link_close' && token.info === 'auto') {
      inside_autolink++;
    }
  }
}

function replace_rare(inlineTokens) {
  var i, token, inside_autolink = 0;

  for (i = inlineTokens.length - 1; i >= 0; i--) {
    token = inlineTokens[i];

    if (token.type === 'text' && !inside_autolink) {
      if (RARE_RE.test(token.content)) {
        token.content = token.content
          .replace(/\+-/g, '±')
          // .., ..., ....... -> …
          // but ?..... & !..... -> ?.. & !..
          .replace(/\.{2,}/g, '…').replace(/([?!])…/g, '$1..')
          .replace(/([?!]){4,}/g, '$1$1$1').replace(/,{2,}/g, ',')
          // em-dash
          .replace(/(^|[^-])---(?=[^-]|$)/mg, '$1\u2014')
          // en-dash
          .replace(/(^|\s)--(?=\s|$)/mg, '$1\u2013')
          .replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, '$1\u2013');
      }
    }

    if (token.type === 'link_open' && token.info === 'auto') {
      inside_autolink--;
    }

    if (token.type === 'link_close' && token.info === 'auto') {
      inside_autolink++;
    }
  }
}


module.exports = function replace(state) {
  var blkIdx;

  if (!state.md.options.typographer) { return; }

  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

    if (state.tokens[blkIdx].type !== 'inline') { continue; }

    if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
      replace_scoped(state.tokens[blkIdx].children);
    }

    if (RARE_RE.test(state.tokens[blkIdx].content)) {
      replace_rare(state.tokens[blkIdx].children);
    }

  }
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_core/smartquotes.js":
/*!****************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_core/smartquotes.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Convert straight quotation marks to typographic ones
//



var isWhiteSpace   = (__webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isWhiteSpace);
var isPunctChar    = (__webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isPunctChar);
var isMdAsciiPunct = (__webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isMdAsciiPunct);

var QUOTE_TEST_RE = /['"]/;
var QUOTE_RE = /['"]/g;
var APOSTROPHE = '\u2019'; /* ’ */


function replaceAt(str, index, ch) {
  return str.slice(0, index) + ch + str.slice(index + 1);
}

function process_inlines(tokens, state) {
  var i, token, text, t, pos, max, thisLevel, item, lastChar, nextChar,
      isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace,
      canOpen, canClose, j, isSingle, stack, openQuote, closeQuote;

  stack = [];

  for (i = 0; i < tokens.length; i++) {
    token = tokens[i];

    thisLevel = tokens[i].level;

    for (j = stack.length - 1; j >= 0; j--) {
      if (stack[j].level <= thisLevel) { break; }
    }
    stack.length = j + 1;

    if (token.type !== 'text') { continue; }

    text = token.content;
    pos = 0;
    max = text.length;

    /*eslint no-labels:0,block-scoped-var:0*/
    OUTER:
    while (pos < max) {
      QUOTE_RE.lastIndex = pos;
      t = QUOTE_RE.exec(text);
      if (!t) { break; }

      canOpen = canClose = true;
      pos = t.index + 1;
      isSingle = (t[0] === "'");

      // Find previous character,
      // default to space if it's the beginning of the line
      //
      lastChar = 0x20;

      if (t.index - 1 >= 0) {
        lastChar = text.charCodeAt(t.index - 1);
      } else {
        for (j = i - 1; j >= 0; j--) {
          if (tokens[j].type === 'softbreak' || tokens[j].type === 'hardbreak') break; // lastChar defaults to 0x20
          if (!tokens[j].content) continue; // should skip all tokens except 'text', 'html_inline' or 'code_inline'

          lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
          break;
        }
      }

      // Find next character,
      // default to space if it's the end of the line
      //
      nextChar = 0x20;

      if (pos < max) {
        nextChar = text.charCodeAt(pos);
      } else {
        for (j = i + 1; j < tokens.length; j++) {
          if (tokens[j].type === 'softbreak' || tokens[j].type === 'hardbreak') break; // nextChar defaults to 0x20
          if (!tokens[j].content) continue; // should skip all tokens except 'text', 'html_inline' or 'code_inline'

          nextChar = tokens[j].content.charCodeAt(0);
          break;
        }
      }

      isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
      isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));

      isLastWhiteSpace = isWhiteSpace(lastChar);
      isNextWhiteSpace = isWhiteSpace(nextChar);

      if (isNextWhiteSpace) {
        canOpen = false;
      } else if (isNextPunctChar) {
        if (!(isLastWhiteSpace || isLastPunctChar)) {
          canOpen = false;
        }
      }

      if (isLastWhiteSpace) {
        canClose = false;
      } else if (isLastPunctChar) {
        if (!(isNextWhiteSpace || isNextPunctChar)) {
          canClose = false;
        }
      }

      if (nextChar === 0x22 /* " */ && t[0] === '"') {
        if (lastChar >= 0x30 /* 0 */ && lastChar <= 0x39 /* 9 */) {
          // special case: 1"" - count first quote as an inch
          canClose = canOpen = false;
        }
      }

      if (canOpen && canClose) {
        // Replace quotes in the middle of punctuation sequence, but not
        // in the middle of the words, i.e.:
        //
        // 1. foo " bar " baz - not replaced
        // 2. foo-"-bar-"-baz - replaced
        // 3. foo"bar"baz     - not replaced
        //
        canOpen = isLastPunctChar;
        canClose = isNextPunctChar;
      }

      if (!canOpen && !canClose) {
        // middle of word
        if (isSingle) {
          token.content = replaceAt(token.content, t.index, APOSTROPHE);
        }
        continue;
      }

      if (canClose) {
        // this could be a closing quote, rewind the stack to get a match
        for (j = stack.length - 1; j >= 0; j--) {
          item = stack[j];
          if (stack[j].level < thisLevel) { break; }
          if (item.single === isSingle && stack[j].level === thisLevel) {
            item = stack[j];

            if (isSingle) {
              openQuote = state.md.options.quotes[2];
              closeQuote = state.md.options.quotes[3];
            } else {
              openQuote = state.md.options.quotes[0];
              closeQuote = state.md.options.quotes[1];
            }

            // replace token.content *before* tokens[item.token].content,
            // because, if they are pointing at the same token, replaceAt
            // could mess up indices when quote length != 1
            token.content = replaceAt(token.content, t.index, closeQuote);
            tokens[item.token].content = replaceAt(
              tokens[item.token].content, item.pos, openQuote);

            pos += closeQuote.length - 1;
            if (item.token === i) { pos += openQuote.length - 1; }

            text = token.content;
            max = text.length;

            stack.length = j;
            continue OUTER;
          }
        }
      }

      if (canOpen) {
        stack.push({
          token: i,
          pos: t.index,
          single: isSingle,
          level: thisLevel
        });
      } else if (canClose && isSingle) {
        token.content = replaceAt(token.content, t.index, APOSTROPHE);
      }
    }
  }
}


module.exports = function smartquotes(state) {
  /*eslint max-depth:0*/
  var blkIdx;

  if (!state.md.options.typographer) { return; }

  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

    if (state.tokens[blkIdx].type !== 'inline' ||
        !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
      continue;
    }

    process_inlines(state.tokens[blkIdx].children, state);
  }
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_core/state_core.js":
/*!***************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_core/state_core.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Core state object
//


var Token = __webpack_require__(/*! ../token */ "./node_modules/markdown-it/lib/token.js");


function StateCore(src, md, env) {
  this.src = src;
  this.env = env;
  this.tokens = [];
  this.inlineMode = false;
  this.md = md; // link to parser instance
}

// re-export Token class to use in core rules
StateCore.prototype.Token = Token;


module.exports = StateCore;


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_core/text_join.js":
/*!**************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_core/text_join.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
// Join raw text tokens with the rest of the text
//
// This is set as a separate rule to provide an opportunity for plugins
// to run text replacements after text join, but before escape join.
//
// For example, `\:)` shouldn't be replaced with an emoji.
//



module.exports = function text_join(state) {
  var j, l, tokens, curr, max, last,
      blockTokens = state.tokens;

  for (j = 0, l = blockTokens.length; j < l; j++) {
    if (blockTokens[j].type !== 'inline') continue;

    tokens = blockTokens[j].children;
    max = tokens.length;

    for (curr = 0; curr < max; curr++) {
      if (tokens[curr].type === 'text_special') {
        tokens[curr].type = 'text';
      }
    }

    for (curr = last = 0; curr < max; curr++) {
      if (tokens[curr].type === 'text' &&
          curr + 1 < max &&
          tokens[curr + 1].type === 'text') {

        // collapse two adjacent text nodes
        tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
      } else {
        if (curr !== last) { tokens[last] = tokens[curr]; }

        last++;
      }
    }

    if (curr !== last) {
      tokens.length = last;
    }
  }
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/autolink.js":
/*!***************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/autolink.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
// Process autolinks '<protocol:...>'




/*eslint max-len:0*/
var EMAIL_RE    = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
var AUTOLINK_RE = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;


module.exports = function autolink(state, silent) {
  var url, fullUrl, token, ch, start, max,
      pos = state.pos;

  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

  start = state.pos;
  max = state.posMax;

  for (;;) {
    if (++pos >= max) return false;

    ch = state.src.charCodeAt(pos);

    if (ch === 0x3C /* < */) return false;
    if (ch === 0x3E /* > */) break;
  }

  url = state.src.slice(start + 1, pos);

  if (AUTOLINK_RE.test(url)) {
    fullUrl = state.md.normalizeLink(url);
    if (!state.md.validateLink(fullUrl)) { return false; }

    if (!silent) {
      token         = state.push('link_open', 'a', 1);
      token.attrs   = [ [ 'href', fullUrl ] ];
      token.markup  = 'autolink';
      token.info    = 'auto';

      token         = state.push('text', '', 0);
      token.content = state.md.normalizeLinkText(url);

      token         = state.push('link_close', 'a', -1);
      token.markup  = 'autolink';
      token.info    = 'auto';
    }

    state.pos += url.length + 2;
    return true;
  }

  if (EMAIL_RE.test(url)) {
    fullUrl = state.md.normalizeLink('mailto:' + url);
    if (!state.md.validateLink(fullUrl)) { return false; }

    if (!silent) {
      token         = state.push('link_open', 'a', 1);
      token.attrs   = [ [ 'href', fullUrl ] ];
      token.markup  = 'autolink';
      token.info    = 'auto';

      token         = state.push('text', '', 0);
      token.content = state.md.normalizeLinkText(url);

      token         = state.push('link_close', 'a', -1);
      token.markup  = 'autolink';
      token.info    = 'auto';
    }

    state.pos += url.length + 2;
    return true;
  }

  return false;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/backticks.js":
/*!****************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/backticks.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
// Parse backticks




module.exports = function backtick(state, silent) {
  var start, max, marker, token, matchStart, matchEnd, openerLength, closerLength,
      pos = state.pos,
      ch = state.src.charCodeAt(pos);

  if (ch !== 0x60/* ` */) { return false; }

  start = pos;
  pos++;
  max = state.posMax;

  // scan marker length
  while (pos < max && state.src.charCodeAt(pos) === 0x60/* ` */) { pos++; }

  marker = state.src.slice(start, pos);
  openerLength = marker.length;

  if (state.backticksScanned && (state.backticks[openerLength] || 0) <= start) {
    if (!silent) state.pending += marker;
    state.pos += openerLength;
    return true;
  }

  matchEnd = pos;

  // Nothing found in the cache, scan until the end of the line (or until marker is found)
  while ((matchStart = state.src.indexOf('`', matchEnd)) !== -1) {
    matchEnd = matchStart + 1;

    // scan marker length
    while (matchEnd < max && state.src.charCodeAt(matchEnd) === 0x60/* ` */) { matchEnd++; }

    closerLength = matchEnd - matchStart;

    if (closerLength === openerLength) {
      // Found matching closer length.
      if (!silent) {
        token     = state.push('code_inline', 'code', 0);
        token.markup  = marker;
        token.content = state.src.slice(pos, matchStart)
          .replace(/\n/g, ' ')
          .replace(/^ (.+) $/, '$1');
      }
      state.pos = matchEnd;
      return true;
    }

    // Some different length found, put it in cache as upper limit of where closer can be found
    state.backticks[closerLength] = matchStart;
  }

  // Scanned through the end, didn't find anything
  state.backticksScanned = true;

  if (!silent) state.pending += marker;
  state.pos += openerLength;
  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/balance_pairs.js":
/*!********************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/balance_pairs.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
// For each opening emphasis-like marker find a matching closing one
//



function processDelimiters(delimiters) {
  var closerIdx, openerIdx, closer, opener, minOpenerIdx, newMinOpenerIdx,
      isOddMatch, lastJump,
      openersBottom = {},
      max = delimiters.length;

  if (!max) return;

  // headerIdx is the first delimiter of the current (where closer is) delimiter run
  var headerIdx = 0;
  var lastTokenIdx = -2; // needs any value lower than -1
  var jumps = [];

  for (closerIdx = 0; closerIdx < max; closerIdx++) {
    closer = delimiters[closerIdx];

    jumps.push(0);

    // markers belong to same delimiter run if:
    //  - they have adjacent tokens
    //  - AND markers are the same
    //
    if (delimiters[headerIdx].marker !== closer.marker || lastTokenIdx !== closer.token - 1) {
      headerIdx = closerIdx;
    }

    lastTokenIdx = closer.token;

    // Length is only used for emphasis-specific "rule of 3",
    // if it's not defined (in strikethrough or 3rd party plugins),
    // we can default it to 0 to disable those checks.
    //
    closer.length = closer.length || 0;

    if (!closer.close) continue;

    // Previously calculated lower bounds (previous fails)
    // for each marker, each delimiter length modulo 3,
    // and for whether this closer can be an opener;
    // https://github.com/commonmark/cmark/commit/34250e12ccebdc6372b8b49c44fab57c72443460
    if (!openersBottom.hasOwnProperty(closer.marker)) {
      openersBottom[closer.marker] = [ -1, -1, -1, -1, -1, -1 ];
    }

    minOpenerIdx = openersBottom[closer.marker][(closer.open ? 3 : 0) + (closer.length % 3)];

    openerIdx = headerIdx - jumps[headerIdx] - 1;

    newMinOpenerIdx = openerIdx;

    for (; openerIdx > minOpenerIdx; openerIdx -= jumps[openerIdx] + 1) {
      opener = delimiters[openerIdx];

      if (opener.marker !== closer.marker) continue;

      if (opener.open && opener.end < 0) {

        isOddMatch = false;

        // from spec:
        //
        // If one of the delimiters can both open and close emphasis, then the
        // sum of the lengths of the delimiter runs containing the opening and
        // closing delimiters must not be a multiple of 3 unless both lengths
        // are multiples of 3.
        //
        if (opener.close || closer.open) {
          if ((opener.length + closer.length) % 3 === 0) {
            if (opener.length % 3 !== 0 || closer.length % 3 !== 0) {
              isOddMatch = true;
            }
          }
        }

        if (!isOddMatch) {
          // If previous delimiter cannot be an opener, we can safely skip
          // the entire sequence in future checks. This is required to make
          // sure algorithm has linear complexity (see *_*_*_*_*_... case).
          //
          lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ?
            jumps[openerIdx - 1] + 1 :
            0;

          jumps[closerIdx] = closerIdx - openerIdx + lastJump;
          jumps[openerIdx] = lastJump;

          closer.open  = false;
          opener.end   = closerIdx;
          opener.close = false;
          newMinOpenerIdx = -1;
          // treat next token as start of run,
          // it optimizes skips in **<...>**a**<...>** pathological case
          lastTokenIdx = -2;
          break;
        }
      }
    }

    if (newMinOpenerIdx !== -1) {
      // If match for this delimiter run failed, we want to set lower bound for
      // future lookups. This is required to make sure algorithm has linear
      // complexity.
      //
      // See details here:
      // https://github.com/commonmark/cmark/issues/178#issuecomment-270417442
      //
      openersBottom[closer.marker][(closer.open ? 3 : 0) + ((closer.length || 0) % 3)] = newMinOpenerIdx;
    }
  }
}


module.exports = function link_pairs(state) {
  var curr,
      tokens_meta = state.tokens_meta,
      max = state.tokens_meta.length;

  processDelimiters(state.delimiters);

  for (curr = 0; curr < max; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      processDelimiters(tokens_meta[curr].delimiters);
    }
  }
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/emphasis.js":
/*!***************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/emphasis.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
// Process *this* and _that_
//



// Insert each marker as a separate text token, and add it to delimiter list
//
module.exports.tokenize = function emphasis(state, silent) {
  var i, scanned, token,
      start = state.pos,
      marker = state.src.charCodeAt(start);

  if (silent) { return false; }

  if (marker !== 0x5F /* _ */ && marker !== 0x2A /* * */) { return false; }

  scanned = state.scanDelims(state.pos, marker === 0x2A);

  for (i = 0; i < scanned.length; i++) {
    token         = state.push('text', '', 0);
    token.content = String.fromCharCode(marker);

    state.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: marker,

      // Total length of these series of delimiters.
      //
      length: scanned.length,

      // A position of the token this delimiter corresponds to.
      //
      token:  state.tokens.length - 1,

      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end:    -1,

      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open:   scanned.can_open,
      close:  scanned.can_close
    });
  }

  state.pos += scanned.length;

  return true;
};


function postProcess(state, delimiters) {
  var i,
      startDelim,
      endDelim,
      token,
      ch,
      isStrong,
      max = delimiters.length;

  for (i = max - 1; i >= 0; i--) {
    startDelim = delimiters[i];

    if (startDelim.marker !== 0x5F/* _ */ && startDelim.marker !== 0x2A/* * */) {
      continue;
    }

    // Process only opening markers
    if (startDelim.end === -1) {
      continue;
    }

    endDelim = delimiters[startDelim.end];

    // If the previous delimiter has the same marker and is adjacent to this one,
    // merge those into one strong delimiter.
    //
    // `<em><em>whatever</em></em>` -> `<strong>whatever</strong>`
    //
    isStrong = i > 0 &&
               delimiters[i - 1].end === startDelim.end + 1 &&
               // check that first two markers match and adjacent
               delimiters[i - 1].marker === startDelim.marker &&
               delimiters[i - 1].token === startDelim.token - 1 &&
               // check that last two markers are adjacent (we can safely assume they match)
               delimiters[startDelim.end + 1].token === endDelim.token + 1;

    ch = String.fromCharCode(startDelim.marker);

    token         = state.tokens[startDelim.token];
    token.type    = isStrong ? 'strong_open' : 'em_open';
    token.tag     = isStrong ? 'strong' : 'em';
    token.nesting = 1;
    token.markup  = isStrong ? ch + ch : ch;
    token.content = '';

    token         = state.tokens[endDelim.token];
    token.type    = isStrong ? 'strong_close' : 'em_close';
    token.tag     = isStrong ? 'strong' : 'em';
    token.nesting = -1;
    token.markup  = isStrong ? ch + ch : ch;
    token.content = '';

    if (isStrong) {
      state.tokens[delimiters[i - 1].token].content = '';
      state.tokens[delimiters[startDelim.end + 1].token].content = '';
      i--;
    }
  }
}


// Walk through delimiter list and replace text tokens with tags
//
module.exports.postProcess = function emphasis(state) {
  var curr,
      tokens_meta = state.tokens_meta,
      max = state.tokens_meta.length;

  postProcess(state, state.delimiters);

  for (curr = 0; curr < max; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      postProcess(state, tokens_meta[curr].delimiters);
    }
  }
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/entity.js":
/*!*************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/entity.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Process html entity - &#123;, &#xAF;, &quot;, ...



var entities          = __webpack_require__(/*! ../common/entities */ "./node_modules/markdown-it/lib/common/entities.js");
var has               = (__webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").has);
var isValidEntityCode = (__webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isValidEntityCode);
var fromCodePoint     = (__webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").fromCodePoint);


var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
var NAMED_RE   = /^&([a-z][a-z0-9]{1,31});/i;


module.exports = function entity(state, silent) {
  var ch, code, match, token, pos = state.pos, max = state.posMax;

  if (state.src.charCodeAt(pos) !== 0x26/* & */) return false;

  if (pos + 1 >= max) return false;

  ch = state.src.charCodeAt(pos + 1);

  if (ch === 0x23 /* # */) {
    match = state.src.slice(pos).match(DIGITAL_RE);
    if (match) {
      if (!silent) {
        code = match[1][0].toLowerCase() === 'x' ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);

        token         = state.push('text_special', '', 0);
        token.content = isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(0xFFFD);
        token.markup  = match[0];
        token.info    = 'entity';
      }
      state.pos += match[0].length;
      return true;
    }
  } else {
    match = state.src.slice(pos).match(NAMED_RE);
    if (match) {
      if (has(entities, match[1])) {
        if (!silent) {
          token         = state.push('text_special', '', 0);
          token.content = entities[match[1]];
          token.markup  = match[0];
          token.info    = 'entity';
        }
        state.pos += match[0].length;
        return true;
      }
    }
  }

  return false;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/escape.js":
/*!*************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/escape.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Process escaped chars and hardbreaks



var isSpace = (__webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isSpace);

var ESCAPED = [];

for (var i = 0; i < 256; i++) { ESCAPED.push(0); }

'\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'
  .split('').forEach(function (ch) { ESCAPED[ch.charCodeAt(0)] = 1; });


module.exports = function escape(state, silent) {
  var ch1, ch2, origStr, escapedStr, token, pos = state.pos, max = state.posMax;

  if (state.src.charCodeAt(pos) !== 0x5C/* \ */) return false;
  pos++;

  // '\' at the end of the inline block
  if (pos >= max) return false;

  ch1 = state.src.charCodeAt(pos);

  if (ch1 === 0x0A) {
    if (!silent) {
      state.push('hardbreak', 'br', 0);
    }

    pos++;
    // skip leading whitespaces from next line
    while (pos < max) {
      ch1 = state.src.charCodeAt(pos);
      if (!isSpace(ch1)) break;
      pos++;
    }

    state.pos = pos;
    return true;
  }

  escapedStr = state.src[pos];

  if (ch1 >= 0xD800 && ch1 <= 0xDBFF && pos + 1 < max) {
    ch2 = state.src.charCodeAt(pos + 1);

    if (ch2 >= 0xDC00 && ch2 <= 0xDFFF) {
      escapedStr += state.src[pos + 1];
      pos++;
    }
  }

  origStr = '\\' + escapedStr;

  if (!silent) {
    token = state.push('text_special', '', 0);

    if (ch1 < 256 && ESCAPED[ch1] !== 0) {
      token.content = escapedStr;
    } else {
      token.content = origStr;
    }

    token.markup = origStr;
    token.info   = 'escape';
  }

  state.pos = pos + 1;
  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/fragments_join.js":
/*!*********************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/fragments_join.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
// Clean up tokens after emphasis and strikethrough postprocessing:
// merge adjacent text nodes into one and re-calculate all token levels
//
// This is necessary because initially emphasis delimiter markers (*, _, ~)
// are treated as their own separate text tokens. Then emphasis rule either
// leaves them as text (needed to merge with adjacent text) or turns them
// into opening/closing tags (which messes up levels inside).
//



module.exports = function fragments_join(state) {
  var curr, last,
      level = 0,
      tokens = state.tokens,
      max = state.tokens.length;

  for (curr = last = 0; curr < max; curr++) {
    // re-calculate levels after emphasis/strikethrough turns some text nodes
    // into opening/closing tags
    if (tokens[curr].nesting < 0) level--; // closing tag
    tokens[curr].level = level;
    if (tokens[curr].nesting > 0) level++; // opening tag

    if (tokens[curr].type === 'text' &&
        curr + 1 < max &&
        tokens[curr + 1].type === 'text') {

      // collapse two adjacent text nodes
      tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
    } else {
      if (curr !== last) { tokens[last] = tokens[curr]; }

      last++;
    }
  }

  if (curr !== last) {
    tokens.length = last;
  }
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/html_inline.js":
/*!******************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/html_inline.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Process html tags




var HTML_TAG_RE = (__webpack_require__(/*! ../common/html_re */ "./node_modules/markdown-it/lib/common/html_re.js").HTML_TAG_RE);


function isLinkOpen(str) {
  return /^<a[>\s]/i.test(str);
}
function isLinkClose(str) {
  return /^<\/a\s*>/i.test(str);
}


function isLetter(ch) {
  /*eslint no-bitwise:0*/
  var lc = ch | 0x20; // to lower case
  return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */);
}


module.exports = function html_inline(state, silent) {
  var ch, match, max, token,
      pos = state.pos;

  if (!state.md.options.html) { return false; }

  // Check start
  max = state.posMax;
  if (state.src.charCodeAt(pos) !== 0x3C/* < */ ||
      pos + 2 >= max) {
    return false;
  }

  // Quick fail on second char
  ch = state.src.charCodeAt(pos + 1);
  if (ch !== 0x21/* ! */ &&
      ch !== 0x3F/* ? */ &&
      ch !== 0x2F/* / */ &&
      !isLetter(ch)) {
    return false;
  }

  match = state.src.slice(pos).match(HTML_TAG_RE);
  if (!match) { return false; }

  if (!silent) {
    token         = state.push('html_inline', '', 0);
    token.content = match[0];

    if (isLinkOpen(token.content))  state.linkLevel++;
    if (isLinkClose(token.content)) state.linkLevel--;
  }
  state.pos += match[0].length;
  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/image.js":
/*!************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/image.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Process ![image](<src> "title")



var normalizeReference   = (__webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").normalizeReference);
var isSpace              = (__webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isSpace);


module.exports = function image(state, silent) {
  var attrs,
      code,
      content,
      label,
      labelEnd,
      labelStart,
      pos,
      ref,
      res,
      title,
      token,
      tokens,
      start,
      href = '',
      oldPos = state.pos,
      max = state.posMax;

  if (state.src.charCodeAt(state.pos) !== 0x21/* ! */) { return false; }
  if (state.src.charCodeAt(state.pos + 1) !== 0x5B/* [ */) { return false; }

  labelStart = state.pos + 2;
  labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);

  // parser failed to find ']', so it's not a valid link
  if (labelEnd < 0) { return false; }

  pos = labelEnd + 1;
  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
    //
    // Inline link
    //

    // [link](  <href>  "title"  )
    //        ^^ skipping these spaces
    pos++;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (!isSpace(code) && code !== 0x0A) { break; }
    }
    if (pos >= max) { return false; }

    // [link](  <href>  "title"  )
    //          ^^^^^^ parsing link destination
    start = pos;
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
    if (res.ok) {
      href = state.md.normalizeLink(res.str);
      if (state.md.validateLink(href)) {
        pos = res.pos;
      } else {
        href = '';
      }
    }

    // [link](  <href>  "title"  )
    //                ^^ skipping these spaces
    start = pos;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (!isSpace(code) && code !== 0x0A) { break; }
    }

    // [link](  <href>  "title"  )
    //                  ^^^^^^^ parsing link title
    res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
    if (pos < max && start !== pos && res.ok) {
      title = res.str;
      pos = res.pos;

      // [link](  <href>  "title"  )
      //                         ^^ skipping these spaces
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (!isSpace(code) && code !== 0x0A) { break; }
      }
    } else {
      title = '';
    }

    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
      state.pos = oldPos;
      return false;
    }
    pos++;
  } else {
    //
    // Link reference
    //
    if (typeof state.env.references === 'undefined') { return false; }

    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
      start = pos + 1;
      pos = state.md.helpers.parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    }

    // covers label === '' and label === undefined
    // (collapsed reference link and shortcut reference link respectively)
    if (!label) { label = state.src.slice(labelStart, labelEnd); }

    ref = state.env.references[normalizeReference(label)];
    if (!ref) {
      state.pos = oldPos;
      return false;
    }
    href = ref.href;
    title = ref.title;
  }

  //
  // We found the end of the link, and know for a fact it's a valid link;
  // so all that's left to do is to call tokenizer.
  //
  if (!silent) {
    content = state.src.slice(labelStart, labelEnd);

    state.md.inline.parse(
      content,
      state.md,
      state.env,
      tokens = []
    );

    token          = state.push('image', 'img', 0);
    token.attrs    = attrs = [ [ 'src', href ], [ 'alt', '' ] ];
    token.children = tokens;
    token.content  = content;

    if (title) {
      attrs.push([ 'title', title ]);
    }
  }

  state.pos = pos;
  state.posMax = max;
  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/link.js":
/*!***********************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/link.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Process [link](<to> "stuff")



var normalizeReference   = (__webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").normalizeReference);
var isSpace              = (__webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isSpace);


module.exports = function link(state, silent) {
  var attrs,
      code,
      label,
      labelEnd,
      labelStart,
      pos,
      res,
      ref,
      token,
      href = '',
      title = '',
      oldPos = state.pos,
      max = state.posMax,
      start = state.pos,
      parseReference = true;

  if (state.src.charCodeAt(state.pos) !== 0x5B/* [ */) { return false; }

  labelStart = state.pos + 1;
  labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true);

  // parser failed to find ']', so it's not a valid link
  if (labelEnd < 0) { return false; }

  pos = labelEnd + 1;
  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
    //
    // Inline link
    //

    // might have found a valid shortcut link, disable reference parsing
    parseReference = false;

    // [link](  <href>  "title"  )
    //        ^^ skipping these spaces
    pos++;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (!isSpace(code) && code !== 0x0A) { break; }
    }
    if (pos >= max) { return false; }

    // [link](  <href>  "title"  )
    //          ^^^^^^ parsing link destination
    start = pos;
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
    if (res.ok) {
      href = state.md.normalizeLink(res.str);
      if (state.md.validateLink(href)) {
        pos = res.pos;
      } else {
        href = '';
      }

      // [link](  <href>  "title"  )
      //                ^^ skipping these spaces
      start = pos;
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (!isSpace(code) && code !== 0x0A) { break; }
      }

      // [link](  <href>  "title"  )
      //                  ^^^^^^^ parsing link title
      res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
      if (pos < max && start !== pos && res.ok) {
        title = res.str;
        pos = res.pos;

        // [link](  <href>  "title"  )
        //                         ^^ skipping these spaces
        for (; pos < max; pos++) {
          code = state.src.charCodeAt(pos);
          if (!isSpace(code) && code !== 0x0A) { break; }
        }
      }
    }

    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
      // parsing a valid shortcut link failed, fallback to reference
      parseReference = true;
    }
    pos++;
  }

  if (parseReference) {
    //
    // Link reference
    //
    if (typeof state.env.references === 'undefined') { return false; }

    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
      start = pos + 1;
      pos = state.md.helpers.parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    }

    // covers label === '' and label === undefined
    // (collapsed reference link and shortcut reference link respectively)
    if (!label) { label = state.src.slice(labelStart, labelEnd); }

    ref = state.env.references[normalizeReference(label)];
    if (!ref) {
      state.pos = oldPos;
      return false;
    }
    href = ref.href;
    title = ref.title;
  }

  //
  // We found the end of the link, and know for a fact it's a valid link;
  // so all that's left to do is to call tokenizer.
  //
  if (!silent) {
    state.pos = labelStart;
    state.posMax = labelEnd;

    token        = state.push('link_open', 'a', 1);
    token.attrs  = attrs = [ [ 'href', href ] ];
    if (title) {
      attrs.push([ 'title', title ]);
    }

    state.linkLevel++;
    state.md.inline.tokenize(state);
    state.linkLevel--;

    token        = state.push('link_close', 'a', -1);
  }

  state.pos = pos;
  state.posMax = max;
  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/linkify.js":
/*!**************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/linkify.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
// Process links like https://example.org/




// RFC3986: scheme = ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
var SCHEME_RE = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;


module.exports = function linkify(state, silent) {
  var pos, max, match, proto, link, url, fullUrl, token;

  if (!state.md.options.linkify) return false;
  if (state.linkLevel > 0) return false;

  pos = state.pos;
  max = state.posMax;

  if (pos + 3 > max) return false;
  if (state.src.charCodeAt(pos) !== 0x3A/* : */) return false;
  if (state.src.charCodeAt(pos + 1) !== 0x2F/* / */) return false;
  if (state.src.charCodeAt(pos + 2) !== 0x2F/* / */) return false;

  match = state.pending.match(SCHEME_RE);
  if (!match) return false;

  proto = match[1];

  link = state.md.linkify.matchAtStart(state.src.slice(pos - proto.length));
  if (!link) return false;

  url = link.url;

  // invalid link, but still detected by linkify somehow;
  // need to check to prevent infinite loop below
  if (url.length <= proto.length) return false;

  // disallow '*' at the end of the link (conflicts with emphasis)
  url = url.replace(/\*+$/, '');

  fullUrl = state.md.normalizeLink(url);
  if (!state.md.validateLink(fullUrl)) return false;

  if (!silent) {
    state.pending = state.pending.slice(0, -proto.length);

    token         = state.push('link_open', 'a', 1);
    token.attrs   = [ [ 'href', fullUrl ] ];
    token.markup  = 'linkify';
    token.info    = 'auto';

    token         = state.push('text', '', 0);
    token.content = state.md.normalizeLinkText(url);

    token         = state.push('link_close', 'a', -1);
    token.markup  = 'linkify';
    token.info    = 'auto';
  }

  state.pos += url.length - proto.length;
  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/newline.js":
/*!**************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/newline.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Proceess '\n'



var isSpace = (__webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isSpace);


module.exports = function newline(state, silent) {
  var pmax, max, ws, pos = state.pos;

  if (state.src.charCodeAt(pos) !== 0x0A/* \n */) { return false; }

  pmax = state.pending.length - 1;
  max = state.posMax;

  // '  \n' -> hardbreak
  // Lookup in pending chars is bad practice! Don't copy to other rules!
  // Pending string is stored in concat mode, indexed lookups will cause
  // convertion to flat mode.
  if (!silent) {
    if (pmax >= 0 && state.pending.charCodeAt(pmax) === 0x20) {
      if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 0x20) {
        // Find whitespaces tail of pending chars.
        ws = pmax - 1;
        while (ws >= 1 && state.pending.charCodeAt(ws - 1) === 0x20) ws--;

        state.pending = state.pending.slice(0, ws);
        state.push('hardbreak', 'br', 0);
      } else {
        state.pending = state.pending.slice(0, -1);
        state.push('softbreak', 'br', 0);
      }

    } else {
      state.push('softbreak', 'br', 0);
    }
  }

  pos++;

  // skip heading spaces for next line
  while (pos < max && isSpace(state.src.charCodeAt(pos))) { pos++; }

  state.pos = pos;
  return true;
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/state_inline.js":
/*!*******************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/state_inline.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Inline parser state




var Token          = __webpack_require__(/*! ../token */ "./node_modules/markdown-it/lib/token.js");
var isWhiteSpace   = (__webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isWhiteSpace);
var isPunctChar    = (__webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isPunctChar);
var isMdAsciiPunct = (__webpack_require__(/*! ../common/utils */ "./node_modules/markdown-it/lib/common/utils.js").isMdAsciiPunct);


function StateInline(src, md, env, outTokens) {
  this.src = src;
  this.env = env;
  this.md = md;
  this.tokens = outTokens;
  this.tokens_meta = Array(outTokens.length);

  this.pos = 0;
  this.posMax = this.src.length;
  this.level = 0;
  this.pending = '';
  this.pendingLevel = 0;

  // Stores { start: end } pairs. Useful for backtrack
  // optimization of pairs parse (emphasis, strikes).
  this.cache = {};

  // List of emphasis-like delimiters for current tag
  this.delimiters = [];

  // Stack of delimiter lists for upper level tags
  this._prev_delimiters = [];

  // backtick length => last seen position
  this.backticks = {};
  this.backticksScanned = false;

  // Counter used to disable inline linkify-it execution
  // inside <a> and markdown links
  this.linkLevel = 0;
}


// Flush pending text
//
StateInline.prototype.pushPending = function () {
  var token = new Token('text', '', 0);
  token.content = this.pending;
  token.level = this.pendingLevel;
  this.tokens.push(token);
  this.pending = '';
  return token;
};


// Push new token to "stream".
// If pending text exists - flush it as text token
//
StateInline.prototype.push = function (type, tag, nesting) {
  if (this.pending) {
    this.pushPending();
  }

  var token = new Token(type, tag, nesting);
  var token_meta = null;

  if (nesting < 0) {
    // closing tag
    this.level--;
    this.delimiters = this._prev_delimiters.pop();
  }

  token.level = this.level;

  if (nesting > 0) {
    // opening tag
    this.level++;
    this._prev_delimiters.push(this.delimiters);
    this.delimiters = [];
    token_meta = { delimiters: this.delimiters };
  }

  this.pendingLevel = this.level;
  this.tokens.push(token);
  this.tokens_meta.push(token_meta);
  return token;
};


// Scan a sequence of emphasis-like markers, and determine whether
// it can start an emphasis sequence or end an emphasis sequence.
//
//  - start - position to scan from (it should point at a valid marker);
//  - canSplitWord - determine if these markers can be found inside a word
//
StateInline.prototype.scanDelims = function (start, canSplitWord) {
  var pos = start, lastChar, nextChar, count, can_open, can_close,
      isLastWhiteSpace, isLastPunctChar,
      isNextWhiteSpace, isNextPunctChar,
      left_flanking = true,
      right_flanking = true,
      max = this.posMax,
      marker = this.src.charCodeAt(start);

  // treat beginning of the line as a whitespace
  lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 0x20;

  while (pos < max && this.src.charCodeAt(pos) === marker) { pos++; }

  count = pos - start;

  // treat end of the line as a whitespace
  nextChar = pos < max ? this.src.charCodeAt(pos) : 0x20;

  isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
  isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));

  isLastWhiteSpace = isWhiteSpace(lastChar);
  isNextWhiteSpace = isWhiteSpace(nextChar);

  if (isNextWhiteSpace) {
    left_flanking = false;
  } else if (isNextPunctChar) {
    if (!(isLastWhiteSpace || isLastPunctChar)) {
      left_flanking = false;
    }
  }

  if (isLastWhiteSpace) {
    right_flanking = false;
  } else if (isLastPunctChar) {
    if (!(isNextWhiteSpace || isNextPunctChar)) {
      right_flanking = false;
    }
  }

  if (!canSplitWord) {
    can_open  = left_flanking  && (!right_flanking || isLastPunctChar);
    can_close = right_flanking && (!left_flanking  || isNextPunctChar);
  } else {
    can_open  = left_flanking;
    can_close = right_flanking;
  }

  return {
    can_open:  can_open,
    can_close: can_close,
    length:    count
  };
};


// re-export Token class to use in block rules
StateInline.prototype.Token = Token;


module.exports = StateInline;


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/strikethrough.js":
/*!********************************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/strikethrough.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
// ~~strike through~~
//



// Insert each marker as a separate text token, and add it to delimiter list
//
module.exports.tokenize = function strikethrough(state, silent) {
  var i, scanned, token, len, ch,
      start = state.pos,
      marker = state.src.charCodeAt(start);

  if (silent) { return false; }

  if (marker !== 0x7E/* ~ */) { return false; }

  scanned = state.scanDelims(state.pos, true);
  len = scanned.length;
  ch = String.fromCharCode(marker);

  if (len < 2) { return false; }

  if (len % 2) {
    token         = state.push('text', '', 0);
    token.content = ch;
    len--;
  }

  for (i = 0; i < len; i += 2) {
    token         = state.push('text', '', 0);
    token.content = ch + ch;

    state.delimiters.push({
      marker: marker,
      length: 0,     // disable "rule of 3" length checks meant for emphasis
      token:  state.tokens.length - 1,
      end:    -1,
      open:   scanned.can_open,
      close:  scanned.can_close
    });
  }

  state.pos += scanned.length;

  return true;
};


function postProcess(state, delimiters) {
  var i, j,
      startDelim,
      endDelim,
      token,
      loneMarkers = [],
      max = delimiters.length;

  for (i = 0; i < max; i++) {
    startDelim = delimiters[i];

    if (startDelim.marker !== 0x7E/* ~ */) {
      continue;
    }

    if (startDelim.end === -1) {
      continue;
    }

    endDelim = delimiters[startDelim.end];

    token         = state.tokens[startDelim.token];
    token.type    = 's_open';
    token.tag     = 's';
    token.nesting = 1;
    token.markup  = '~~';
    token.content = '';

    token         = state.tokens[endDelim.token];
    token.type    = 's_close';
    token.tag     = 's';
    token.nesting = -1;
    token.markup  = '~~';
    token.content = '';

    if (state.tokens[endDelim.token - 1].type === 'text' &&
        state.tokens[endDelim.token - 1].content === '~') {

      loneMarkers.push(endDelim.token - 1);
    }
  }

  // If a marker sequence has an odd number of characters, it's splitted
  // like this: `~~~~~` -> `~` + `~~` + `~~`, leaving one marker at the
  // start of the sequence.
  //
  // So, we have to move all those markers after subsequent s_close tags.
  //
  while (loneMarkers.length) {
    i = loneMarkers.pop();
    j = i + 1;

    while (j < state.tokens.length && state.tokens[j].type === 's_close') {
      j++;
    }

    j--;

    if (i !== j) {
      token = state.tokens[j];
      state.tokens[j] = state.tokens[i];
      state.tokens[i] = token;
    }
  }
}


// Walk through delimiter list and replace text tokens with tags
//
module.exports.postProcess = function strikethrough(state) {
  var curr,
      tokens_meta = state.tokens_meta,
      max = state.tokens_meta.length;

  postProcess(state, state.delimiters);

  for (curr = 0; curr < max; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      postProcess(state, tokens_meta[curr].delimiters);
    }
  }
};


/***/ }),

/***/ "./node_modules/markdown-it/lib/rules_inline/text.js":
/*!***********************************************************!*\
  !*** ./node_modules/markdown-it/lib/rules_inline/text.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
// Skip text characters for text token, place those to pending buffer
// and increment current pos




// Rule to skip pure text
// '{}$%@~+=:' reserved for extentions

// !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~

// !!!! Don't confuse with "Markdown ASCII Punctuation" chars
// http://spec.commonmark.org/0.15/#ascii-punctuation-character
function isTerminatorChar(ch) {
  switch (ch) {
    case 0x0A/* \n */:
    case 0x21/* ! */:
    case 0x23/* # */:
    case 0x24/* $ */:
    case 0x25/* % */:
    case 0x26/* & */:
    case 0x2A/* * */:
    case 0x2B/* + */:
    case 0x2D/* - */:
    case 0x3A/* : */:
    case 0x3C/* < */:
    case 0x3D/* = */:
    case 0x3E/* > */:
    case 0x40/* @ */:
    case 0x5B/* [ */:
    case 0x5C/* \ */:
    case 0x5D/* ] */:
    case 0x5E/* ^ */:
    case 0x5F/* _ */:
    case 0x60/* ` */:
    case 0x7B/* { */:
    case 0x7D/* } */:
    case 0x7E/* ~ */:
      return true;
    default:
      return false;
  }
}

module.exports = function text(state, silent) {
  var pos = state.pos;

  while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
    pos++;
  }

  if (pos === state.pos) { return false; }

  if (!silent) { state.pending += state.src.slice(state.pos, pos); }

  state.pos = pos;

  return true;
};

// Alternative implementation, for memory.
//
// It costs 10% of performance, but allows extend terminators list, if place it
// to `ParcerInline` property. Probably, will switch to it sometime, such
// flexibility required.

/*
var TERMINATOR_RE = /[\n!#$%&*+\-:<=>@[\\\]^_`{}~]/;

module.exports = function text(state, silent) {
  var pos = state.pos,
      idx = state.src.slice(pos).search(TERMINATOR_RE);

  // first char is terminator -> empty text
  if (idx === 0) { return false; }

  // no terminator -> text till end of string
  if (idx < 0) {
    if (!silent) { state.pending += state.src.slice(pos); }
    state.pos = state.src.length;
    return true;
  }

  if (!silent) { state.pending += state.src.slice(pos, pos + idx); }

  state.pos += idx;

  return true;
};*/


/***/ }),

/***/ "./node_modules/markdown-it/lib/token.js":
/*!***********************************************!*\
  !*** ./node_modules/markdown-it/lib/token.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
// Token class




/**
 * class Token
 **/

/**
 * new Token(type, tag, nesting)
 *
 * Create new token and fill passed properties.
 **/
function Token(type, tag, nesting) {
  /**
   * Token#type -> String
   *
   * Type of the token (string, e.g. "paragraph_open")
   **/
  this.type     = type;

  /**
   * Token#tag -> String
   *
   * html tag name, e.g. "p"
   **/
  this.tag      = tag;

  /**
   * Token#attrs -> Array
   *
   * Html attributes. Format: `[ [ name1, value1 ], [ name2, value2 ] ]`
   **/
  this.attrs    = null;

  /**
   * Token#map -> Array
   *
   * Source map info. Format: `[ line_begin, line_end ]`
   **/
  this.map      = null;

  /**
   * Token#nesting -> Number
   *
   * Level change (number in {-1, 0, 1} set), where:
   *
   * -  `1` means the tag is opening
   * -  `0` means the tag is self-closing
   * - `-1` means the tag is closing
   **/
  this.nesting  = nesting;

  /**
   * Token#level -> Number
   *
   * nesting level, the same as `state.level`
   **/
  this.level    = 0;

  /**
   * Token#children -> Array
   *
   * An array of child nodes (inline and img tokens)
   **/
  this.children = null;

  /**
   * Token#content -> String
   *
   * In a case of self-closing tag (code, html, fence, etc.),
   * it has contents of this tag.
   **/
  this.content  = '';

  /**
   * Token#markup -> String
   *
   * '*' or '_' for emphasis, fence string for fence, etc.
   **/
  this.markup   = '';

  /**
   * Token#info -> String
   *
   * Additional information:
   *
   * - Info string for "fence" tokens
   * - The value "auto" for autolink "link_open" and "link_close" tokens
   * - The string value of the item marker for ordered-list "list_item_open" tokens
   **/
  this.info     = '';

  /**
   * Token#meta -> Object
   *
   * A place for plugins to store an arbitrary data
   **/
  this.meta     = null;

  /**
   * Token#block -> Boolean
   *
   * True for block-level tokens, false for inline tokens.
   * Used in renderer to calculate line breaks
   **/
  this.block    = false;

  /**
   * Token#hidden -> Boolean
   *
   * If it's true, ignore this element when rendering. Used for tight lists
   * to hide paragraphs.
   **/
  this.hidden   = false;
}


/**
 * Token.attrIndex(name) -> Number
 *
 * Search attribute index by name.
 **/
Token.prototype.attrIndex = function attrIndex(name) {
  var attrs, i, len;

  if (!this.attrs) { return -1; }

  attrs = this.attrs;

  for (i = 0, len = attrs.length; i < len; i++) {
    if (attrs[i][0] === name) { return i; }
  }
  return -1;
};


/**
 * Token.attrPush(attrData)
 *
 * Add `[ name, value ]` attribute to list. Init attrs if necessary
 **/
Token.prototype.attrPush = function attrPush(attrData) {
  if (this.attrs) {
    this.attrs.push(attrData);
  } else {
    this.attrs = [ attrData ];
  }
};


/**
 * Token.attrSet(name, value)
 *
 * Set `name` attribute to `value`. Override old value if exists.
 **/
Token.prototype.attrSet = function attrSet(name, value) {
  var idx = this.attrIndex(name),
      attrData = [ name, value ];

  if (idx < 0) {
    this.attrPush(attrData);
  } else {
    this.attrs[idx] = attrData;
  }
};


/**
 * Token.attrGet(name)
 *
 * Get the value of attribute `name`, or null if it does not exist.
 **/
Token.prototype.attrGet = function attrGet(name) {
  var idx = this.attrIndex(name), value = null;
  if (idx >= 0) {
    value = this.attrs[idx][1];
  }
  return value;
};


/**
 * Token.attrJoin(name, value)
 *
 * Join value to existing attribute via space. Or create new attribute if not
 * exists. Useful to operate with token classes.
 **/
Token.prototype.attrJoin = function attrJoin(name, value) {
  var idx = this.attrIndex(name);

  if (idx < 0) {
    this.attrPush([ name, value ]);
  } else {
    this.attrs[idx][1] = this.attrs[idx][1] + ' ' + value;
  }
};


module.exports = Token;


/***/ }),

/***/ "./node_modules/mdurl/decode.js":
/*!**************************************!*\
  !*** ./node_modules/mdurl/decode.js ***!
  \**************************************/
/***/ ((module) => {

"use strict";




/* eslint-disable no-bitwise */

var decodeCache = {};

function getDecodeCache(exclude) {
  var i, ch, cache = decodeCache[exclude];
  if (cache) { return cache; }

  cache = decodeCache[exclude] = [];

  for (i = 0; i < 128; i++) {
    ch = String.fromCharCode(i);
    cache.push(ch);
  }

  for (i = 0; i < exclude.length; i++) {
    ch = exclude.charCodeAt(i);
    cache[ch] = '%' + ('0' + ch.toString(16).toUpperCase()).slice(-2);
  }

  return cache;
}


// Decode percent-encoded string.
//
function decode(string, exclude) {
  var cache;

  if (typeof exclude !== 'string') {
    exclude = decode.defaultChars;
  }

  cache = getDecodeCache(exclude);

  return string.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
    var i, l, b1, b2, b3, b4, chr,
        result = '';

    for (i = 0, l = seq.length; i < l; i += 3) {
      b1 = parseInt(seq.slice(i + 1, i + 3), 16);

      if (b1 < 0x80) {
        result += cache[b1];
        continue;
      }

      if ((b1 & 0xE0) === 0xC0 && (i + 3 < l)) {
        // 110xxxxx 10xxxxxx
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);

        if ((b2 & 0xC0) === 0x80) {
          chr = ((b1 << 6) & 0x7C0) | (b2 & 0x3F);

          if (chr < 0x80) {
            result += '\ufffd\ufffd';
          } else {
            result += String.fromCharCode(chr);
          }

          i += 3;
          continue;
        }
      }

      if ((b1 & 0xF0) === 0xE0 && (i + 6 < l)) {
        // 1110xxxx 10xxxxxx 10xxxxxx
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
        b3 = parseInt(seq.slice(i + 7, i + 9), 16);

        if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80) {
          chr = ((b1 << 12) & 0xF000) | ((b2 << 6) & 0xFC0) | (b3 & 0x3F);

          if (chr < 0x800 || (chr >= 0xD800 && chr <= 0xDFFF)) {
            result += '\ufffd\ufffd\ufffd';
          } else {
            result += String.fromCharCode(chr);
          }

          i += 6;
          continue;
        }
      }

      if ((b1 & 0xF8) === 0xF0 && (i + 9 < l)) {
        // 111110xx 10xxxxxx 10xxxxxx 10xxxxxx
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
        b3 = parseInt(seq.slice(i + 7, i + 9), 16);
        b4 = parseInt(seq.slice(i + 10, i + 12), 16);

        if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80 && (b4 & 0xC0) === 0x80) {
          chr = ((b1 << 18) & 0x1C0000) | ((b2 << 12) & 0x3F000) | ((b3 << 6) & 0xFC0) | (b4 & 0x3F);

          if (chr < 0x10000 || chr > 0x10FFFF) {
            result += '\ufffd\ufffd\ufffd\ufffd';
          } else {
            chr -= 0x10000;
            result += String.fromCharCode(0xD800 + (chr >> 10), 0xDC00 + (chr & 0x3FF));
          }

          i += 9;
          continue;
        }
      }

      result += '\ufffd';
    }

    return result;
  });
}


decode.defaultChars   = ';/?:@&=+$,#';
decode.componentChars = '';


module.exports = decode;


/***/ }),

/***/ "./node_modules/mdurl/encode.js":
/*!**************************************!*\
  !*** ./node_modules/mdurl/encode.js ***!
  \**************************************/
/***/ ((module) => {

"use strict";




var encodeCache = {};


// Create a lookup array where anything but characters in `chars` string
// and alphanumeric chars is percent-encoded.
//
function getEncodeCache(exclude) {
  var i, ch, cache = encodeCache[exclude];
  if (cache) { return cache; }

  cache = encodeCache[exclude] = [];

  for (i = 0; i < 128; i++) {
    ch = String.fromCharCode(i);

    if (/^[0-9a-z]$/i.test(ch)) {
      // always allow unencoded alphanumeric characters
      cache.push(ch);
    } else {
      cache.push('%' + ('0' + i.toString(16).toUpperCase()).slice(-2));
    }
  }

  for (i = 0; i < exclude.length; i++) {
    cache[exclude.charCodeAt(i)] = exclude[i];
  }

  return cache;
}


// Encode unsafe characters with percent-encoding, skipping already
// encoded sequences.
//
//  - string       - string to encode
//  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
//  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
//
function encode(string, exclude, keepEscaped) {
  var i, l, code, nextCode, cache,
      result = '';

  if (typeof exclude !== 'string') {
    // encode(string, keepEscaped)
    keepEscaped  = exclude;
    exclude = encode.defaultChars;
  }

  if (typeof keepEscaped === 'undefined') {
    keepEscaped = true;
  }

  cache = getEncodeCache(exclude);

  for (i = 0, l = string.length; i < l; i++) {
    code = string.charCodeAt(i);

    if (keepEscaped && code === 0x25 /* % */ && i + 2 < l) {
      if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
        result += string.slice(i, i + 3);
        i += 2;
        continue;
      }
    }

    if (code < 128) {
      result += cache[code];
      continue;
    }

    if (code >= 0xD800 && code <= 0xDFFF) {
      if (code >= 0xD800 && code <= 0xDBFF && i + 1 < l) {
        nextCode = string.charCodeAt(i + 1);
        if (nextCode >= 0xDC00 && nextCode <= 0xDFFF) {
          result += encodeURIComponent(string[i] + string[i + 1]);
          i++;
          continue;
        }
      }
      result += '%EF%BF%BD';
      continue;
    }

    result += encodeURIComponent(string[i]);
  }

  return result;
}

encode.defaultChars   = ";/?:@&=+$,-_.!~*'()#";
encode.componentChars = "-_.!~*'()";


module.exports = encode;


/***/ }),

/***/ "./node_modules/mdurl/format.js":
/*!**************************************!*\
  !*** ./node_modules/mdurl/format.js ***!
  \**************************************/
/***/ ((module) => {

"use strict";




module.exports = function format(url) {
  var result = '';

  result += url.protocol || '';
  result += url.slashes ? '//' : '';
  result += url.auth ? url.auth + '@' : '';

  if (url.hostname && url.hostname.indexOf(':') !== -1) {
    // ipv6 address
    result += '[' + url.hostname + ']';
  } else {
    result += url.hostname || '';
  }

  result += url.port ? ':' + url.port : '';
  result += url.pathname || '';
  result += url.search || '';
  result += url.hash || '';

  return result;
};


/***/ }),

/***/ "./node_modules/mdurl/index.js":
/*!*************************************!*\
  !*** ./node_modules/mdurl/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";



module.exports.encode = __webpack_require__(/*! ./encode */ "./node_modules/mdurl/encode.js");
module.exports.decode = __webpack_require__(/*! ./decode */ "./node_modules/mdurl/decode.js");
module.exports.format = __webpack_require__(/*! ./format */ "./node_modules/mdurl/format.js");
module.exports.parse = __webpack_require__(/*! ./parse */ "./node_modules/mdurl/parse.js");


/***/ }),

/***/ "./node_modules/mdurl/parse.js":
/*!*************************************!*\
  !*** ./node_modules/mdurl/parse.js ***!
  \*************************************/
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



//
// Changes from joyent/node:
//
// 1. No leading slash in paths,
//    e.g. in `url.parse('http://foo?bar')` pathname is ``, not `/`
//
// 2. Backslashes are not replaced with slashes,
//    so `http:\\example.org\` is treated like a relative path
//
// 3. Trailing colon is treated like a part of the path,
//    i.e. in `http://example.org:foo` pathname is `:foo`
//
// 4. Nothing is URL-encoded in the resulting object,
//    (in joyent/node some chars in auth and paths are encoded)
//
// 5. `url.parse()` does not have `parseQueryString` argument
//
// 6. Removed extraneous result properties: `host`, `path`, `query`, etc.,
//    which can be constructed using other parts of the url.
//


function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.pathname = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = [ '<', '>', '"', '`', ' ', '\r', '\n', '\t' ],

    // RFC 2396: characters not allowed for various reasons.
    unwise = [ '{', '}', '|', '\\', '^', '`' ].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = [ '\'' ].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = [ '%', '/', '?', ';', '#' ].concat(autoEscape),
    hostEndingChars = [ '/', '?', '#' ],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    /* eslint-disable no-script-url */
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    };
    /* eslint-enable no-script-url */

function urlParse(url, slashesDenoteHost) {
  if (url && url instanceof Url) { return url; }

  var u = new Url();
  u.parse(url, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, slashesDenoteHost) {
  var i, l, lowerProto, hec, slashes,
      rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    lowerProto = proto.toLowerCase();
    this.protocol = proto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (i = 0; i < hostEndingChars.length; i++) {
      hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
        hostEnd = hec;
      }
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = auth;
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (i = 0; i < nonHostChars.length; i++) {
      hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
        hostEnd = hec;
      }
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1) {
      hostEnd = rest.length;
    }

    if (rest[hostEnd - 1] === ':') { hostEnd--; }
    var host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost(host);

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) { continue; }
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    }

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
    }
  }

  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    rest = rest.slice(0, qm);
  }
  if (rest) { this.pathname = rest; }
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '';
  }

  return this;
};

Url.prototype.parseHost = function(host) {
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) { this.hostname = host; }
};

module.exports = urlParse;


/***/ }),

/***/ "./node_modules/punycode/punycode.es6.js":
/*!***********************************************!*\
  !*** ./node_modules/punycode/punycode.es6.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decode: () => (/* binding */ decode),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   encode: () => (/* binding */ encode),
/* harmony export */   toASCII: () => (/* binding */ toASCII),
/* harmony export */   toUnicode: () => (/* binding */ toUnicode),
/* harmony export */   ucs2decode: () => (/* binding */ ucs2decode),
/* harmony export */   ucs2encode: () => (/* binding */ ucs2encode)
/* harmony export */ });


/** Highest positive signed 32-bit float value */
const maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

/** Bootstring parameters */
const base = 36;
const tMin = 1;
const tMax = 26;
const skew = 38;
const damp = 700;
const initialBias = 72;
const initialN = 128; // 0x80
const delimiter = '-'; // '\x2D'

/** Regular expressions */
const regexPunycode = /^xn--/;
const regexNonASCII = /[^\0-\x7F]/; // Note: U+007F DEL is excluded too.
const regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

/** Error messages */
const errors = {
	'overflow': 'Overflow: input needs wider integers to process',
	'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
	'invalid-input': 'Invalid input'
};

/** Convenience shortcuts */
const baseMinusTMin = base - tMin;
const floor = Math.floor;
const stringFromCharCode = String.fromCharCode;

/*--------------------------------------------------------------------------*/

/**
 * A generic error utility function.
 * @private
 * @param {String} type The error type.
 * @returns {Error} Throws a `RangeError` with the applicable error message.
 */
function error(type) {
	throw new RangeError(errors[type]);
}

/**
 * A generic `Array#map` utility function.
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} callback The function that gets called for every array
 * item.
 * @returns {Array} A new array of values returned by the callback function.
 */
function map(array, callback) {
	const result = [];
	let length = array.length;
	while (length--) {
		result[length] = callback(array[length]);
	}
	return result;
}

/**
 * A simple `Array#map`-like wrapper to work with domain name strings or email
 * addresses.
 * @private
 * @param {String} domain The domain name or email address.
 * @param {Function} callback The function that gets called for every
 * character.
 * @returns {String} A new string of characters returned by the callback
 * function.
 */
function mapDomain(domain, callback) {
	const parts = domain.split('@');
	let result = '';
	if (parts.length > 1) {
		// In email addresses, only the domain name should be punycoded. Leave
		// the local part (i.e. everything up to `@`) intact.
		result = parts[0] + '@';
		domain = parts[1];
	}
	// Avoid `split(regex)` for IE8 compatibility. See #17.
	domain = domain.replace(regexSeparators, '\x2E');
	const labels = domain.split('.');
	const encoded = map(labels, callback).join('.');
	return result + encoded;
}

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 * @see `punycode.ucs2.encode`
 * @see <https://mathiasbynens.be/notes/javascript-encoding>
 * @memberOf punycode.ucs2
 * @name decode
 * @param {String} string The Unicode input string (UCS-2).
 * @returns {Array} The new array of code points.
 */
function ucs2decode(string) {
	const output = [];
	let counter = 0;
	const length = string.length;
	while (counter < length) {
		const value = string.charCodeAt(counter++);
		if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
			// It's a high surrogate, and there is a next character.
			const extra = string.charCodeAt(counter++);
			if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
				output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
			} else {
				// It's an unmatched surrogate; only append this code unit, in case the
				// next code unit is the high surrogate of a surrogate pair.
				output.push(value);
				counter--;
			}
		} else {
			output.push(value);
		}
	}
	return output;
}

/**
 * Creates a string based on an array of numeric code points.
 * @see `punycode.ucs2.decode`
 * @memberOf punycode.ucs2
 * @name encode
 * @param {Array} codePoints The array of numeric code points.
 * @returns {String} The new Unicode string (UCS-2).
 */
const ucs2encode = codePoints => String.fromCodePoint(...codePoints);

/**
 * Converts a basic code point into a digit/integer.
 * @see `digitToBasic()`
 * @private
 * @param {Number} codePoint The basic numeric code point value.
 * @returns {Number} The numeric value of a basic code point (for use in
 * representing integers) in the range `0` to `base - 1`, or `base` if
 * the code point does not represent a value.
 */
const basicToDigit = function(codePoint) {
	if (codePoint >= 0x30 && codePoint < 0x3A) {
		return 26 + (codePoint - 0x30);
	}
	if (codePoint >= 0x41 && codePoint < 0x5B) {
		return codePoint - 0x41;
	}
	if (codePoint >= 0x61 && codePoint < 0x7B) {
		return codePoint - 0x61;
	}
	return base;
};

/**
 * Converts a digit/integer into a basic code point.
 * @see `basicToDigit()`
 * @private
 * @param {Number} digit The numeric value of a basic code point.
 * @returns {Number} The basic code point whose value (when used for
 * representing integers) is `digit`, which needs to be in the range
 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
 * used; else, the lowercase form is used. The behavior is undefined
 * if `flag` is non-zero and `digit` has no uppercase form.
 */
const digitToBasic = function(digit, flag) {
	//  0..25 map to ASCII a..z or A..Z
	// 26..35 map to ASCII 0..9
	return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 * @private
 */
const adapt = function(delta, numPoints, firstTime) {
	let k = 0;
	delta = firstTime ? floor(delta / damp) : delta >> 1;
	delta += floor(delta / numPoints);
	for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
		delta = floor(delta / baseMinusTMin);
	}
	return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
 * symbols.
 * @memberOf punycode
 * @param {String} input The Punycode string of ASCII-only symbols.
 * @returns {String} The resulting string of Unicode symbols.
 */
const decode = function(input) {
	// Don't use UCS-2.
	const output = [];
	const inputLength = input.length;
	let i = 0;
	let n = initialN;
	let bias = initialBias;

	// Handle the basic code points: let `basic` be the number of input code
	// points before the last delimiter, or `0` if there is none, then copy
	// the first basic code points to the output.

	let basic = input.lastIndexOf(delimiter);
	if (basic < 0) {
		basic = 0;
	}

	for (let j = 0; j < basic; ++j) {
		// if it's not a basic code point
		if (input.charCodeAt(j) >= 0x80) {
			error('not-basic');
		}
		output.push(input.charCodeAt(j));
	}

	// Main decoding loop: start just after the last delimiter if any basic code
	// points were copied; start at the beginning otherwise.

	for (let index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

		// `index` is the index of the next character to be consumed.
		// Decode a generalized variable-length integer into `delta`,
		// which gets added to `i`. The overflow checking is easier
		// if we increase `i` as we go, then subtract off its starting
		// value at the end to obtain `delta`.
		const oldi = i;
		for (let w = 1, k = base; /* no condition */; k += base) {

			if (index >= inputLength) {
				error('invalid-input');
			}

			const digit = basicToDigit(input.charCodeAt(index++));

			if (digit >= base) {
				error('invalid-input');
			}
			if (digit > floor((maxInt - i) / w)) {
				error('overflow');
			}

			i += digit * w;
			const t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

			if (digit < t) {
				break;
			}

			const baseMinusT = base - t;
			if (w > floor(maxInt / baseMinusT)) {
				error('overflow');
			}

			w *= baseMinusT;

		}

		const out = output.length + 1;
		bias = adapt(i - oldi, out, oldi == 0);

		// `i` was supposed to wrap around from `out` to `0`,
		// incrementing `n` each time, so we'll fix that now:
		if (floor(i / out) > maxInt - n) {
			error('overflow');
		}

		n += floor(i / out);
		i %= out;

		// Insert `n` at position `i` of the output.
		output.splice(i++, 0, n);

	}

	return String.fromCodePoint(...output);
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 * @memberOf punycode
 * @param {String} input The string of Unicode symbols.
 * @returns {String} The resulting Punycode string of ASCII-only symbols.
 */
const encode = function(input) {
	const output = [];

	// Convert the input in UCS-2 to an array of Unicode code points.
	input = ucs2decode(input);

	// Cache the length.
	const inputLength = input.length;

	// Initialize the state.
	let n = initialN;
	let delta = 0;
	let bias = initialBias;

	// Handle the basic code points.
	for (const currentValue of input) {
		if (currentValue < 0x80) {
			output.push(stringFromCharCode(currentValue));
		}
	}

	const basicLength = output.length;
	let handledCPCount = basicLength;

	// `handledCPCount` is the number of code points that have been handled;
	// `basicLength` is the number of basic code points.

	// Finish the basic string with a delimiter unless it's empty.
	if (basicLength) {
		output.push(delimiter);
	}

	// Main encoding loop:
	while (handledCPCount < inputLength) {

		// All non-basic code points < n have been handled already. Find the next
		// larger one:
		let m = maxInt;
		for (const currentValue of input) {
			if (currentValue >= n && currentValue < m) {
				m = currentValue;
			}
		}

		// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
		// but guard against overflow.
		const handledCPCountPlusOne = handledCPCount + 1;
		if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
			error('overflow');
		}

		delta += (m - n) * handledCPCountPlusOne;
		n = m;

		for (const currentValue of input) {
			if (currentValue < n && ++delta > maxInt) {
				error('overflow');
			}
			if (currentValue === n) {
				// Represent delta as a generalized variable-length integer.
				let q = delta;
				for (let k = base; /* no condition */; k += base) {
					const t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
					if (q < t) {
						break;
					}
					const qMinusT = q - t;
					const baseMinusT = base - t;
					output.push(
						stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
					);
					q = floor(qMinusT / baseMinusT);
				}

				output.push(stringFromCharCode(digitToBasic(q, 0)));
				bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
				delta = 0;
				++handledCPCount;
			}
		}

		++delta;
		++n;

	}
	return output.join('');
};

/**
 * Converts a Punycode string representing a domain name or an email address
 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
 * it doesn't matter if you call it on a string that has already been
 * converted to Unicode.
 * @memberOf punycode
 * @param {String} input The Punycoded domain name or email address to
 * convert to Unicode.
 * @returns {String} The Unicode representation of the given Punycode
 * string.
 */
const toUnicode = function(input) {
	return mapDomain(input, function(string) {
		return regexPunycode.test(string)
			? decode(string.slice(4).toLowerCase())
			: string;
	});
};

/**
 * Converts a Unicode string representing a domain name or an email address to
 * Punycode. Only the non-ASCII parts of the domain name will be converted,
 * i.e. it doesn't matter if you call it with a domain that's already in
 * ASCII.
 * @memberOf punycode
 * @param {String} input The domain name or email address to convert, as a
 * Unicode string.
 * @returns {String} The Punycode representation of the given domain name or
 * email address.
 */
const toASCII = function(input) {
	return mapDomain(input, function(string) {
		return regexNonASCII.test(string)
			? 'xn--' + encode(string)
			: string;
	});
};

/*--------------------------------------------------------------------------*/

/** Define the public API */
const punycode = {
	/**
	 * A string representing the current Punycode.js version number.
	 * @memberOf punycode
	 * @type String
	 */
	'version': '2.1.0',
	/**
	 * An object of methods to convert from JavaScript's internal character
	 * representation (UCS-2) to Unicode code points, and back.
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode
	 * @type Object
	 */
	'ucs2': {
		'decode': ucs2decode,
		'encode': ucs2encode
	},
	'decode': decode,
	'encode': encode,
	'toASCII': toASCII,
	'toUnicode': toUnicode
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (punycode);


/***/ }),

/***/ "./node_modules/uc.micro/categories/Cc/regex.js":
/*!******************************************************!*\
  !*** ./node_modules/uc.micro/categories/Cc/regex.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports=/[\0-\x1F\x7F-\x9F]/

/***/ }),

/***/ "./node_modules/uc.micro/categories/Cf/regex.js":
/*!******************************************************!*\
  !*** ./node_modules/uc.micro/categories/Cf/regex.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/

/***/ }),

/***/ "./node_modules/uc.micro/categories/P/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uc.micro/categories/P/regex.js ***!
  \*****************************************************/
/***/ ((module) => {

module.exports=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/

/***/ }),

/***/ "./node_modules/uc.micro/categories/Z/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uc.micro/categories/Z/regex.js ***!
  \*****************************************************/
/***/ ((module) => {

module.exports=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/

/***/ }),

/***/ "./node_modules/uc.micro/index.js":
/*!****************************************!*\
  !*** ./node_modules/uc.micro/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.Any = __webpack_require__(/*! ./properties/Any/regex */ "./node_modules/uc.micro/properties/Any/regex.js");
exports.Cc = __webpack_require__(/*! ./categories/Cc/regex */ "./node_modules/uc.micro/categories/Cc/regex.js");
exports.Cf = __webpack_require__(/*! ./categories/Cf/regex */ "./node_modules/uc.micro/categories/Cf/regex.js");
exports.P = __webpack_require__(/*! ./categories/P/regex */ "./node_modules/uc.micro/categories/P/regex.js");
exports.Z = __webpack_require__(/*! ./categories/Z/regex */ "./node_modules/uc.micro/categories/Z/regex.js");


/***/ }),

/***/ "./node_modules/uc.micro/properties/Any/regex.js":
/*!*******************************************************!*\
  !*** ./node_modules/uc.micro/properties/Any/regex.js ***!
  \*******************************************************/
/***/ ((module) => {

module.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/

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
                            <div class="tjs-service-slider__content--col tjs-service-slider__carousel">
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
                            </div>
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

/***/ "./node_modules/entities/lib/maps/entities.json":
/*!******************************************************!*\
  !*** ./node_modules/entities/lib/maps/entities.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}');

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
/* harmony import */ var _dev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dev */ "./dev.ts");



})();

/******/ })()
;
//# sourceMappingURL=index.js.map