/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./elements/e-card-default/e-card-default.ts":
/*!***************************************************!*\
  !*** ./elements/e-card-default/e-card-default.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");



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
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");



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
/* harmony import */ var _leuffen_liscom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/liscom */ "./node_modules/@leuffen/liscom/dist/index.js");
/* harmony import */ var _sections_sections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/sections */ "./sections/sections.ts");
/* harmony import */ var _elements_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/elements */ "./elements/elements.ts");
/* harmony import */ var _leuffen_isl_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @leuffen/isl-base */ "./node_modules/@leuffen/isl-base/dist/index.js");
/* harmony import */ var _leuffen_isl_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_leuffen_isl_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _leuffen_isl_base__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _leuffen_isl_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");
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
                // ka.become="variable" => Replace the current element with the value of the variable (must be HTMLElement)
                // e.g. to connect a Component defined in a variable to the DOM
                if (!(r instanceof HTMLElement)) {
                    console.error("ka.become is only available on HTMLElements: Used on ", r, "found in ", selector);
                    throw "ka.become called on non HTMLElement.";
                }
                let attributes = selector.attributes;
                selector.replaceWith(r);
                continue;
            case "content":
                // ka.content="variable" => Add the element to the current element
                selector.setAttribute("ka.stop", "");
                if (typeof r === "string") {
                    selector.innerHTML = r;
                    continue;
                }
                if (r === null || r === false) {
                    selector.innerHTML = "";
                    continue;
                }
                if (!(r instanceof HTMLElement)) {
                    console.error("ka.content is only available on HTMLElements: Used on ", r, "found in ", selector);
                    throw "ka.content called on non HTMLElement.";
                }
                if (selector.firstElementChild === r)
                    continue;
                selector.innerHTML = "";
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






class KaCustomElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this.__ka_stop_render = true; // Stop rendering if this element is reached
        this.shadowRootConfig = {}; // Activate shadowRoot
        this.html = "Undefined Template";
        this.scope = (0,_types__WEBPACK_IMPORTED_MODULE_0__.createScopeObject)();
        this.tplPrototype = null;
        this.wrapper = null;
    }
    init(scope, autorender = true) {
        this.scope.init(scope);
        return this.scope;
    }
    wrap(fragment) {
        this.wrapper = fragment;
    }
    setParentScope(scope) {
        this.scope.$parent = scope;
    }
    // @ts-nocheck
    connectedCallback() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.scope.isInitialized())
                this.init({});
            // Check template set by customElement annotation
            // Cannot be done in constructor because of async behavior
            if ((0,_functions__WEBPACK_IMPORTED_MODULE_1__.isset)(this.constructor["html"])) {
                this.html = this.constructor["html"];
            }
            if ((0,_functions__WEBPACK_IMPORTED_MODULE_1__.isset)(this.constructor["shadowRootConfig"])) {
                this.shadowRootConfig = this.constructor["shadowRootConfig"];
            }
            if (this.tplPrototype === null) {
                this.tplPrototype = (0,_tpl_templatify__WEBPACK_IMPORTED_MODULE_2__.ka_templatify)((0,_ce_html__WEBPACK_IMPORTED_MODULE_3__.ka_html)(this.html));
            }
            this.tpl = this.tplPrototype.cloneNode(true);
            this.scope.$tpl = new _tpl_template__WEBPACK_IMPORTED_MODULE_4__.KaTemplate(this.tpl);
            // Adding Shadow Root
            let domRoot = this;
            if (this.shadowRootConfig.mode !== null && this.shadowRootConfig.mode !== undefined) {
                domRoot = this.attachShadow({ mode: this.shadowRootConfig.mode });
                (_a = this.shadowRootConfig.stylesheets) === null || _a === void 0 ? void 0 : _a.forEach((stylesheet) => {
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
/* harmony export */   template: () => (/* binding */ template),
/* harmony export */   timeAgo: () => (/* binding */ timeAgo),
/* harmony export */   timeTo: () => (/* binding */ timeTo)
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
// @ts-nocheck
function customElement(tagName = null, template = null) {
    return function (classOrDescriptor) {
        if (template !== null) {
            classOrDescriptor["html"] = template;
        }
        if (window["_kasi_defined_custom_elements"] === undefined) {
            window["_kasi_defined_custom_elements"] = [];
        }
        if (tagName === null) {
            if (window["_kasi_anon_element_id"] === undefined) {
                window["_kasi_anon_element_id"] = 0;
            }
            tagName = "kasimirjs-anon-element-" + window["_kasi_anon_element_id"]++;
        }
        //console.debug("registering custom element", classOrDescriptor, tagName);
        if (!window["_kasi_defined_custom_elements"].includes(tagName)) {
            customElements.define(tagName, classOrDescriptor);
            window["_kasi_defined_custom_elements"].push(tagName);
        }
        return classOrDescriptor;
    };
}
// @ts-nocheck
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
function template(template, shadowRootConfig = { mode: null, stylesheets: [] }) {
    return function (classOrDescriptor) {
        classOrDescriptor["html"] = template;
        classOrDescriptor["shadowRootConfig"] = shadowRootConfig;
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
function timeTo(date) {
    const now = new Date();
    let seconds = Math.floor((date.getTime() - now.getTime()) / 1000);
    if (seconds < 0) {
        return 'today';
    }
    let interval = seconds / 31536000;
    if (interval > 1) {
        return 'In ' + Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return 'In ' + Math.floor(interval) + " months";
    }
    interval = seconds / 604800;
    if (interval > 1) {
        return 'In ' + Math.floor(interval) + " weeks";
    }
    interval = seconds / 86400;
    if (interval >= 1) {
        return 'In ' + Math.floor(interval) + " days";
    }
    return 'today';
}
function timeAgo(date) {
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) {
        return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
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
/* harmony export */   template: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.template),
/* harmony export */   timeAgo: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.timeAgo),
/* harmony export */   timeTo: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.timeTo)
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
    let setAction = (target, p, value, receiver) => {
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
    };
    let getAction = (target, prop, receiver) => {
        if (prop.startsWith("$"))
            return target[prop];
        return target[prop];
    };
    let proxy = new Proxy(scopeDef, {
        get: getAction,
        set: setAction,
    });
    if (init !== null)
        scopeDef.init(init);
    return proxy;
}


/***/ }),

/***/ "./node_modules/@leuffen/isl-base/dist/elements/accordion/accordion.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@leuffen/isl-base/dist/elements/accordion/accordion.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccordionLayout = void 0;
const embed_1 = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
const jodastyle_1 = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");
// language=HTML
const tpl = `
    <div class="as__image">
        <div class="header" data-ref="header"></div>
        <div class="image" data-ref="image">
        </div>
        <div class="footer" data-ref="footer"></div>
    </div>
`;
class AccordionLayout extends jodastyle_1.DefaultLayout {
    constructor() {
        super(...arguments);
        this.accordion_auto_open = "first";
    }
}
exports.AccordionLayout = AccordionLayout;
let Accordion = class Accordion {
    render(element, layout) {
        var _a;
        element.classList.add("as__accordion");
        Array.from(element.querySelectorAll(":scope > .children > .section-h3 > .content h3")).forEach((e, i) => __awaiter(this, void 0, void 0, function* () {
            let newElem = (0, embed_1.ka_create_element)("a", { class: "as__accordion-header" });
            e.parentNode.parentNode.insertBefore(newElem, e.parentNode);
            newElem.append(e);
            let update = () => {
                element.querySelectorAll(".section-h3 > .content,.children").forEach((e) => __awaiter(this, void 0, void 0, function* () {
                    e.style.setProperty("--orig-height", e.scrollHeight + "px");
                }));
            };
            newElem.onclick = () => {
                var _a;
                update();
                Array.from(newElem.closest(".children").children).forEach((e) => {
                    if (e === newElem.closest(".section-h3"))
                        return;
                    e.classList.remove("open");
                });
                (_a = newElem.closest(".section-h3")) === null || _a === void 0 ? void 0 : _a.classList.toggle("open");
            };
        }));
        console.log("acc", layout);
        if (layout.accordion_auto_open === "first") {
            (_a = element.querySelector(".section-h3")) === null || _a === void 0 ? void 0 : _a.classList.add("open");
        }
        return element;
    }
};
Accordion = __decorate([
    (0, jodastyle_1.jodaRenderer)("accordion", AccordionLayout)
], Accordion);


/***/ }),

/***/ "./node_modules/@leuffen/isl-base/dist/elements/hamburger/hamburger.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@leuffen/isl-base/dist/elements/hamburger/hamburger.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HamburgerLayout = void 0;
const embed_1 = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
const jodastyle_1 = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");
const jodastyle_2 = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");
// language=HTML
const tpl = (0, embed_1.ka_html)(`
<a class="as__hamburger" href="javascript:void(0);" aria-label="Menü">
    <div class="as__hamburger-bar" ></div>
    <div class="as__hamburger-bar" ></div>
    <div class="as__hamburger-bar" ></div>
    <div class="as__hamburger-menu">Menü</div>
</a>
`);
class HamburgerLayout extends jodastyle_1.DefaultLayout {
}
exports.HamburgerLayout = HamburgerLayout;
let Hamburger = class Hamburger {
    render(element, layout) {
        let main = new jodastyle_2.QTemplate(tpl);
        element.append(main.content);
        main.content.addEventListener("click", () => {
            document.body.classList.toggle("nav-open");
        });
        return element;
    }
};
Hamburger = __decorate([
    (0, jodastyle_1.jodaRenderer)("hamburger", HamburgerLayout)
], Hamburger);


/***/ }),

/***/ "./node_modules/@leuffen/isl-base/dist/elements/input/input.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@leuffen/isl-base/dist/elements/input/input.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InputLayout = void 0;
const embed_1 = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
const jodastyle_1 = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");
const jodastyle_2 = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");
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
class InputLayout extends jodastyle_1.DefaultLayout {
    constructor() {
        super(...arguments);
        this.style = "form-floating";
        this.classes = "";
    }
}
exports.InputLayout = InputLayout;
let idCounter = 0;
let Input = class Input {
    render(element, layout) {
        var _a, _b, _c, _d;
        let main = new jodastyle_2.QTemplate(tplDefault);
        if (element instanceof HTMLInputElement) {
            if (element.type === "checkbox" || element.type === "radio") {
                main = new jodastyle_2.QTemplate(tplCheckbox);
            }
            else if (element.type === "submit") {
                main = new jodastyle_2.QTemplate(`<div class="as__input [[classes]]"><div data-ref="main"></div></div>`);
            }
        }
        element.id = element.id === "" ? "as__input_" + idCounter++ : element.id;
        if (element instanceof HTMLSelectElement) {
            let options = [];
            // Default: No preset, no options
            options.push({ value: "", label: (_a = element.getAttribute("data-initial")) !== null && _a !== void 0 ? _a : "", disabled: true, selected: true });
            if (element.hasAttribute("data-options")) {
                // if dataset.options starts with [ tread as array, if { tread as object
                if (element.dataset.options.startsWith("[")) {
                    options.push(...JSON.parse(element.dataset.options).map((o) => {
                        return { value: o, label: o };
                    }));
                }
                else if (element.dataset.options.startsWith("{")) {
                    let data = JSON.parse(element.dataset.options);
                    options = Object.keys(data).map((o) => {
                        return { value: o, label: data[o] };
                    });
                }
                else {
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
                let opt = (0, embed_1.ka_create_element)("option", o, option.label);
                element.append(opt);
            }
        }
        let label = (_c = (_b = element["name"]) !== null && _b !== void 0 ? _b : element.id) !== null && _c !== void 0 ? _c : "undefinded";
        if (element instanceof HTMLInputElement && (element.type === "checkbox" || element.type === "radio")) {
            label = element.value;
        }
        if (element.hasAttribute("label")) {
            label = element.getAttribute("label");
        }
        if (element.hasAttribute("data-label")) {
            label = element.getAttribute("data-label");
        }
        main.parse({
            layout,
            classes: (_d = layout.classes + " " + element.getAttribute("class")) !== null && _d !== void 0 ? _d : "",
            id: element.id,
            label: label
        });
        element.setAttribute("class", "");
        if (element instanceof HTMLSelectElement) {
            element.classList.add("form-select");
        }
        else if (element instanceof HTMLInputElement && (element.type === "checkbox" || element.type === "radio")) {
            element.classList.add("form-check-input");
        }
        else if (element instanceof HTMLInputElement && element.type === "submit") {
            element.classList.add("btn", "bn-primary");
        }
        else {
            element.classList.add("form-control");
        }
        element.parentNode.replaceChild(main.content, element);
        main.select("main").selected.replaceWith(element);
        return main.content;
    }
};
Input = __decorate([
    (0, jodastyle_1.jodaRenderer)("input", InputLayout)
], Input);


/***/ }),

/***/ "./node_modules/@leuffen/isl-base/dist/elements/map/map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@leuffen/isl-base/dist/elements/map/map.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapLayout = void 0;
const jodastyle_1 = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");
const jodastyle_2 = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");
// language=HTML
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
        </script>
    </div>
`;
class MapLayout extends jodastyle_1.DefaultLayout {
    constructor() {
        super(...arguments);
        this.mapPreviewUrl = "https://cdn.leuffen.de/hyperpage-components/v1.0/google-maps/maps-preview.jpg";
    }
}
exports.MapLayout = MapLayout;
let Map = class Map {
    render(element, layout) {
        var _a;
        let main = new jodastyle_2.QTemplate(tpl);
        main.parse({ layout });
        let mapUrl = (_a = window["mapUrl"]) !== null && _a !== void 0 ? _a : null;
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
Map = __decorate([
    (0, jodastyle_1.jodaRenderer)("map", MapLayout)
], Map);


/***/ }),

/***/ "./node_modules/@leuffen/isl-base/dist/elements/navbar-switch1/navbar-switch1.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@leuffen/isl-base/dist/elements/navbar-switch1/navbar-switch1.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// language=HTML
const jodastyle_1 = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");
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
jodastyle_1.Joda.registerTemplate("navbar-switch1", html);


/***/ }),

/***/ "./node_modules/@leuffen/isl-base/dist/elements/screen/screen.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@leuffen/isl-base/dist/elements/screen/screen.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScreenLayout = void 0;
const jodastyle_1 = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");
const jodastyle_2 = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");
// language=HTML
const tpl = `
    <div class="as__screen [[layout.type]]">
        <div class="as__screen-shadow" style="background-image: url([[layout.cdnBaseUrl]]/screens/[[layout.type]]-shadow.svg);"></div>
        <div class="as__screen-image" data-ref="image"></div>
        <div class="as__screen-overlay" style="background-image: url([[layout.cdnBaseUrl]]/screens/[[layout.type]].svg)"></div>
    </div>
`;
class ScreenLayout extends jodastyle_1.DefaultLayout {
    constructor() {
        super(...arguments);
        this.cdnBaseUrl = "https://cdn.leuffen.de/hyperpage-components/v1.0";
        this.type = "mobile";
    }
}
exports.ScreenLayout = ScreenLayout;
let Screen = class Screen {
    render(element, layout) {
        let q = new jodastyle_2.QTemplate(tpl);
        q.parse({ layout: layout });
        q.content.classList.add(...Array.from(element.classList));
        q.content.setAttribute("style", element.getAttribute("style"));
        element.setAttribute("style", "");
        element.parentElement.replaceChild(q.content, element);
        q.select("image").append(element);
        return q.content;
    }
};
Screen = __decorate([
    (0, jodastyle_1.jodaRenderer)("screen", ScreenLayout)
], Screen);


/***/ }),

/***/ "./node_modules/@leuffen/isl-base/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@leuffen/isl-base/dist/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./elements/accordion/accordion */ "./node_modules/@leuffen/isl-base/dist/elements/accordion/accordion.js"), exports);
__exportStar(__webpack_require__(/*! ./elements/hamburger/hamburger */ "./node_modules/@leuffen/isl-base/dist/elements/hamburger/hamburger.js"), exports);
__exportStar(__webpack_require__(/*! ./elements/input/input */ "./node_modules/@leuffen/isl-base/dist/elements/input/input.js"), exports);
__exportStar(__webpack_require__(/*! ./elements/map/map */ "./node_modules/@leuffen/isl-base/dist/elements/map/map.js"), exports);
__exportStar(__webpack_require__(/*! ./elements/screen/screen */ "./node_modules/@leuffen/isl-base/dist/elements/screen/screen.js"), exports);
__exportStar(__webpack_require__(/*! ./elements/navbar-switch1/navbar-switch1 */ "./node_modules/@leuffen/isl-base/dist/elements/navbar-switch1/navbar-switch1.js"), exports);


/***/ }),

/***/ "./node_modules/@leuffen/jodastyle/dist/component/joda-content-element.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@leuffen/jodastyle/dist/component/joda-content-element.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _JodaContentElement_origContentTemplate, _JodaContentElement_outputDiv;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JodaContentElement = void 0;
const embed_1 = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
const jodastyle_1 = __webpack_require__(/*! ../processor/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/processor/jodastyle.js");
const jodaresponsive_1 = __webpack_require__(/*! ../processor/jodaresponsive */ "./node_modules/@leuffen/jodastyle/dist/processor/jodaresponsive.js");
const logger_1 = __webpack_require__(/*! ../helper/logger */ "./node_modules/@leuffen/jodastyle/dist/helper/logger.js");
const jodavisualize_1 = __webpack_require__(/*! ../processor/jodavisualize */ "./node_modules/@leuffen/jodastyle/dist/processor/jodavisualize.js");
const JodaSiteConfig_1 = __webpack_require__(/*! ../helper/JodaSiteConfig */ "./node_modules/@leuffen/jodastyle/dist/helper/JodaSiteConfig.js");
const functions_1 = __webpack_require__(/*! ../helper/functions */ "./node_modules/@leuffen/jodastyle/dist/helper/functions.js");
function getCSSRule(ruleName) {
    ruleName = ruleName.toLowerCase();
    var result = null;
    var find = Array.prototype.find;
    find.call(document.styleSheets, styleSheet => {
        result = find.call(styleSheet.cssRules, cssRule => {
            return cssRule instanceof CSSStyleRule
                && cssRule.selectorText.toLowerCase() == ruleName;
        });
        return result != null;
    });
    return result;
}
console.time("jodaTime");
let JodaContentElement = class JodaContentElement extends HTMLElement {
    constructor() {
        super(...arguments);
        _JodaContentElement_origContentTemplate.set(this, void 0);
        _JodaContentElement_outputDiv.set(this, void 0);
    }
    awaitStyles() {
        return __awaiter(this, void 0, void 0, function* () {
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
                yield (0, embed_1.ka_sleep)(50 + index);
            }
        });
    }
    setLoaded() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, embed_1.ka_sleep)(10);
            this.classList.add("loaded");
            yield (0, embed_1.ka_sleep)(100);
            document.body.classList.add("loaded");
            document.querySelector("html").classList.remove("loader");
        });
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            let logger = new logger_1.Logger("joda-content");
            yield (0, embed_1.ka_sleep)(1);
            yield this.awaitStyles();
            __classPrivateFieldSet(this, _JodaContentElement_origContentTemplate, (0, embed_1.ka_create_element)("template"), "f");
            __classPrivateFieldSet(this, _JodaContentElement_outputDiv, (0, embed_1.ka_create_element)("div"), "f");
            //this.#origContentTemplate.innerHTML = this.innerHTML;
            //this.innerHTML = "";
            //this.appendChild(this.#origContentTemplate);
            //this.appendChild(this.#outputDiv);
            if (JodaSiteConfig_1.jodaSiteConfig.disable_templates) {
                this.setLoaded();
                // For documentation: Add Class and Tag-Names
                if (JodaSiteConfig_1.jodaSiteConfig.debug_visualize && JodaSiteConfig_1.jodaSiteConfig.debug_visualize_attribute) {
                    (new jodavisualize_1.Jodavisualize()).process(this);
                }
                return;
            }
            // Process the content
            let jodaStyle = new jodastyle_1.Jodastyle(logger);
            yield jodaStyle.process(this);
            let jodaresponsive = new jodaresponsive_1.Jodaresponsive(logger);
            let currentBreakpoint = (0, jodaresponsive_1.getCurrentBreakpoint)();
            jodaresponsive.process(this);
            // For documentation: Add Class and Tag-Names
            if (JodaSiteConfig_1.jodaSiteConfig.debug_visualize && JodaSiteConfig_1.jodaSiteConfig.debug_visualize_attribute) {
                (new jodavisualize_1.Jodavisualize()).process(this);
            }
            this.setLoaded();
            window.addEventListener("resize", () => {
                if (currentBreakpoint === (0, jodaresponsive_1.getCurrentBreakpoint)()) {
                    return;
                }
                currentBreakpoint = (0, jodaresponsive_1.getCurrentBreakpoint)();
                logger.log("Breakpoint changed to " + currentBreakpoint);
                jodaresponsive.process(this);
            });
            // Run all allTemplateConnectedCallbacks registered
            for (let callback of functions_1.allTemplatesConnectedCallbacks) {
                yield callback();
            }
        });
    }
    setContent(content) {
        this.innerHTML = content;
        this.connectedCallback();
    }
};
exports.JodaContentElement = JodaContentElement;
_JodaContentElement_origContentTemplate = new WeakMap();
_JodaContentElement_outputDiv = new WeakMap();
exports.JodaContentElement = JodaContentElement = __decorate([
    (0, embed_1.customElement)("joda-content")
], JodaContentElement);


/***/ }),

/***/ "./node_modules/@leuffen/jodastyle/dist/component/joda-fetch.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@leuffen/jodastyle/dist/component/joda-fetch.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const embed_1 = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
const jodastyle_1 = __webpack_require__(/*! ../processor/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/processor/jodastyle.js");
const logger_1 = __webpack_require__(/*! ../helper/logger */ "./node_modules/@leuffen/jodastyle/dist/helper/logger.js");
let JodaFetch = class JodaFetch extends HTMLElement {
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            let select = this.getAttribute("data-select");
            let elem = document.querySelector(select);
            if (elem === null) {
                console.error("joda-fetch: Element not found", select, "in element", this);
                return;
            }
            let jodaStyle = new jodastyle_1.Jodastyle(new logger_1.Logger("joda-fetch"));
            this.innerHTML = elem.innerHTML;
            yield jodaStyle.process(this);
        });
    }
};
JodaFetch = __decorate([
    (0, embed_1.customElement)('joda-fetch')
], JodaFetch);


/***/ }),

/***/ "./node_modules/@leuffen/jodastyle/dist/component/joda-split.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@leuffen/jodastyle/dist/component/joda-split.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _JodaSplit_ready;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const embed_1 = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
const jodasplit_1 = __webpack_require__(/*! ../processor/jodasplit */ "./node_modules/@leuffen/jodastyle/dist/processor/jodasplit.js");
const logger_1 = __webpack_require__(/*! ../helper/logger */ "./node_modules/@leuffen/jodastyle/dist/helper/logger.js");
const jodashorts_1 = __webpack_require__(/*! ../processor/jodashorts */ "./node_modules/@leuffen/jodastyle/dist/processor/jodashorts.js");
const JodaSiteConfig_1 = __webpack_require__(/*! ../helper/JodaSiteConfig */ "./node_modules/@leuffen/jodastyle/dist/helper/JodaSiteConfig.js");
let JodaSplit = class JodaSplit extends HTMLElement {
    constructor() {
        super(...arguments);
        _JodaSplit_ready.set(this, false);
    }
    get ready() {
        return __classPrivateFieldGet(this, _JodaSplit_ready, "f");
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            let logger = new logger_1.Logger("joda-split");
            yield (0, embed_1.ka_sleep)(1);
            if (JodaSiteConfig_1.jodaSiteConfig.debug_visualize) {
                this.classList.add("joda-debug-visualize");
            }
            if (JodaSiteConfig_1.jodaSiteConfig.disable_split) {
                __classPrivateFieldSet(this, _JodaSplit_ready, true, "f");
                return;
            }
            let jodaShorts = new jodashorts_1.Jodashorts(logger);
            this.innerHTML = yield jodaShorts.process(this.innerHTML);
            let jodaSplit = new jodasplit_1.Jodasplit(logger);
            let fragment = document.createDocumentFragment();
            fragment.append(yield jodaSplit.process(this));
            this.innerHTML = "";
            this.append(fragment);
            __classPrivateFieldSet(this, _JodaSplit_ready, true, "f");
        });
    }
};
_JodaSplit_ready = new WeakMap();
JodaSplit = __decorate([
    (0, embed_1.customElement)('joda-split')
], JodaSplit);


/***/ }),

/***/ "./node_modules/@leuffen/jodastyle/dist/helper/JodaDescriptionManager.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@leuffen/jodastyle/dist/helper/JodaDescriptionManager.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JodaDescriptionManager = exports.__JodaDescriptionManager = void 0;
class __JodaDescriptionManager {
    addClass(category, className, description, example, modifiers, config = {}) {
        let defaultConfig = {
            bodyClasses: [],
            parseMarkdown: true
        };
        config = Object.assign(Object.assign({}, defaultConfig), config);
        if (window["jodastyle"] === undefined) {
            window["jodastyle"] = {};
        }
        if (window["jodastyle"]["descriptions"] === undefined) {
            window["jodastyle"]["descriptions"] = [];
        }
        window["jodastyle"]["descriptions"].push({ category, className, description, example, modifiers, config });
    }
    addMarkdownPage(uri, name) {
        if (window["jodastyle"] === undefined) {
            window["jodastyle"] = {};
        }
        if (window["jodastyle"]["descriptions"] === undefined) {
            window["jodastyle"]["descriptions"] = [];
        }
        window["jodastyle"]["descriptions"].push({
            category: "page",
            className: name,
            description: "A page with markdown content",
            exampleUri: uri,
            modifiers: [],
            config: {
                parseMarkdown: true
            }
        });
    }
    get data() {
        var _a;
        if (window["jodastyle"] === undefined) {
            console.warn("[jodastyle description manager] No jodastyle descriptions found (Make sure you imported a theme) => window.jodastyle is undefined");
            return [];
        }
        return (_a = window["jodastyle"]["descriptions"]) !== null && _a !== void 0 ? _a : [];
    }
    get classes() {
        return this.data.map(e => e.className);
    }
    getDescription(className) {
        return this.data.find(e => e.className === className);
    }
}
exports.__JodaDescriptionManager = __JodaDescriptionManager;
exports.JodaDescriptionManager = new __JodaDescriptionManager();


/***/ }),

/***/ "./node_modules/@leuffen/jodastyle/dist/helper/JodaElementException.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@leuffen/jodastyle/dist/helper/JodaElementException.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JodaElementException = void 0;
class JodaElementException {
    constructor(message, element = null, triggerCommand = null) {
        this.message = message;
        this.element = element;
        this.triggerCommand = triggerCommand;
    }
}
exports.JodaElementException = JodaElementException;


/***/ }),

/***/ "./node_modules/@leuffen/jodastyle/dist/helper/JodaErrorElement.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@leuffen/jodastyle/dist/helper/JodaErrorElement.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JodaErrorElement = void 0;
const embed_1 = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
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
let JodaErrorElement = class JodaErrorElement extends embed_1.KaCustomElement {
    constructor(message) {
        super();
        this.message = message;
        let scope = this.init({
            message: message
        });
    }
    connectedCallback() {
        const _super = Object.create(null, {
            connectedCallback: { get: () => super.connectedCallback }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.connectedCallback.call(this);
            this.scope.message = this.message;
        });
    }
};
exports.JodaErrorElement = JodaErrorElement;
exports.JodaErrorElement = JodaErrorElement = __decorate([
    (0, embed_1.customElement)('joda-error'),
    (0, embed_1.template)(tpl),
    __metadata("design:paramtypes", [Object])
], JodaErrorElement);


/***/ }),

/***/ "./node_modules/@leuffen/jodastyle/dist/helper/JodaRenderer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@leuffen/jodastyle/dist/helper/JodaRenderer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./node_modules/@leuffen/jodastyle/dist/helper/JodaSiteConfig.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@leuffen/jodastyle/dist/helper/JodaSiteConfig.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.jodaSiteConfig = void 0;
const embed_1 = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
class JodaSiteConfig {
    constructor() {
        this.disable_split = false;
        this.disable_templates = false;
        this.disable_responsive = false;
        this.debug_visualize = false;
        this.debug_visualize_attribute = false; // Add Attribution to visualized elements
    }
}
exports.jodaSiteConfig = (0, embed_1.ka_session_storage)(new JodaSiteConfig(), "jodaSiteConfig");


/***/ }),

/***/ "./node_modules/@leuffen/jodastyle/dist/helper/QTemplate.js":
/*!******************************************************************!*\
  !*** ./node_modules/@leuffen/jodastyle/dist/helper/QTemplate.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QTemplate = exports.template_parse = void 0;
const embed_1 = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
const embed_2 = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
/**
 * Searches for occurence of ${javascript expression} and replaces them with the result of the expression
 */
function template_parse(input, scope, element) {
    // Search for ${...} by preg and replace them with the result of the expression
    return input.replace(/\[\[(.*?)]]/gmi, (match, p1) => {
        let val = (0, embed_1.ka_eval)(p1, scope, element, {});
        return val;
    });
}
exports.template_parse = template_parse;
class QTemplate {
    constructor(content) {
        if (typeof content === "string") {
            this.content = (0, embed_2.ka_create_element)("template");
            this.content.innerHTML = content;
        }
        else {
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
        let tpl = (0, embed_2.ka_create_element)("template", {}, [], null);
        tpl.content.append(this.content);
        //console.log("Parse", this.content, this.content.toString());
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
            Array.from(element).forEach(e => this.selected.append(e));
            return this;
        }
        if (Array.isArray(element) || element instanceof NodeList) {
            element.forEach(e => this.selected.append(e));
            return this;
        }
        this.selected.append(element);
        return this;
    }
    clone() {
        return new QTemplate(this.content.cloneNode(true));
    }
}
exports.QTemplate = QTemplate;


/***/ }),

/***/ "./node_modules/@leuffen/jodastyle/dist/helper/functions.js":
/*!******************************************************************!*\
  !*** ./node_modules/@leuffen/jodastyle/dist/helper/functions.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.runCallbacksForTemplate = exports.getTemplateFilledWithContent = exports.parseConfigString = exports.getCleanVariableValue = exports.splitChildrenBySelector = exports.jodaRenderer = exports.registerJodaRenderer = exports.wrapElement = exports.await_property = exports.allTemplatesConnectedCallbacks = void 0;
const embed_1 = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
const JodaElementException_1 = __webpack_require__(/*! ./JodaElementException */ "./node_modules/@leuffen/jodastyle/dist/helper/JodaElementException.js");
const QTemplate_1 = __webpack_require__(/*! ./QTemplate */ "./node_modules/@leuffen/jodastyle/dist/helper/QTemplate.js");
const joda_1 = __webpack_require__(/*! ../joda */ "./node_modules/@leuffen/jodastyle/dist/joda.js");
exports.allTemplatesConnectedCallbacks = [];
function await_property(object, property, wait = 10) {
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof property === "string") {
            property = property.split(".");
        }
        let value = undefined;
        let index = 0;
        while (value === undefined) {
            index++;
            let curObject = object;
            for (let i = 0; i < property.length; i++) {
                if (curObject === undefined) {
                    break;
                }
                curObject = curObject[property[i]];
            }
            value = curObject;
            if (value === undefined)
                yield (0, embed_1.ka_sleep)(wait);
            if (index > 1000) {
                index = 0;
                console.warn("Still waiting for property: ", property, "in object", object);
            }
        }
        return value;
    });
}
exports.await_property = await_property;
function wrapElement(element, wrapper) {
    var _a;
    (_a = element.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(wrapper, element);
    wrapper.appendChild(element);
}
exports.wrapElement = wrapElement;
function registerJodaRenderer(name, renderer, config) {
    if (window["jodastyle"] === undefined) {
        window["jodastyle"] = {};
    }
    if (window["jodastyle"]["renderer"] === undefined) {
        window["jodastyle"]["renderer"] = {};
    }
    window["jodastyle"]["renderer"][name] = { renderer, config };
}
exports.registerJodaRenderer = registerJodaRenderer;
function jodaRenderer(name, config) {
    return function (classOrDescriptor) {
        registerJodaRenderer(name, classOrDescriptor, config);
    };
}
exports.jodaRenderer = jodaRenderer;
function splitChildrenBySelector(element, splitBySelctor) {
    let ret = [];
    Array.from(element.children).forEach(child => {
        if (child.matches(splitBySelctor)) {
            ret.push(document.createDocumentFragment());
        }
        if (ret.length > 0) {
            ret[ret.length - 1].append(child);
        }
    });
    return ret;
}
exports.splitChildrenBySelector = splitChildrenBySelector;
function getCleanVariableValue(styleValue) {
    return styleValue.trim().replace(/^["']/g, '').replace(/["']$/, '').trim();
}
exports.getCleanVariableValue = getCleanVariableValue;
/**
 * Parse config string formattes as key-value pairs like this: key1: value1; key2: value2; ... into an object.
 *
 * @param input String representing key-value pair separated by colon and each line separated by semicolon
 * @returns Object containing key-value pairs from string
 */
function parseConfigString(input) {
    // Check if input is null or undefined
    if (input == null) {
        return {};
    }
    // Split input string and filter invalid lines
    const obj = {};
    const lines = input.trim().split(';');
    for (let line of lines) {
        const parts = line.trim().split(':');
        if (parts.length == 2) {
            obj[parts[0].trim()] = parts[1].trim();
        }
    }
    return obj;
}
exports.parseConfigString = parseConfigString;
/**
 * Copy all data-child-* attributes from source to target element
 *
 * e.g. <slot data-child-class="abc"> Will result in <div class="abc">
 *     Also: <slot data-child-layout="use: #someElement"> Will result in <div layout="use: #someElement">
 * @param source
 * @param target
 */
function copyDataChildAttributes(source, target) {
    Array.from(source.attributes).forEach((attr) => {
        if (attr.name.startsWith("data-child-")) {
            // if attribute is class, append classed to existing class attribute
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
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        let templateConfig = joda_1.Joda.getRegisteredTemplate(templateSelector);
        let templateHtml = (_a = templateConfig === null || templateConfig === void 0 ? void 0 : templateConfig.template) !== null && _a !== void 0 ? _a : null;
        if (templateHtml === null) {
            let template = document.querySelector(templateSelector);
            if (template === null) {
                throw new JodaElementException_1.JodaElementException("Template not found: " + templateSelector);
            }
            templateHtml = template.innerHTML;
        }
        // Load --layout-* variables to template parser
        let props = getComputedStyle(origElement);
        // Attention: Chrome cannot list defined CSS Variables!
        templateHtml = (0, QTemplate_1.template_parse)(templateHtml, {
            layout: new Proxy({}, {
                get: function (target, name) {
                    var _a;
                    let val = props.getPropertyValue("--layout-" + name.toString());
                    if (val === "") {
                        // Return default from template config
                        return (_a = templateConfig === null || templateConfig === void 0 ? void 0 : templateConfig.layoutDefaults[name.toString()]) !== null && _a !== void 0 ? _a : "";
                    }
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
        clone.querySelectorAll("slot[data-select][data-copy]").forEach((slot) => {
            if (done.includes(slot)) {
                return;
            }
            done.push(slot);
            slot.setAttribute("_slotIndex", (++slotIndex).toString());
            let select = slot.getAttribute("data-select");
            let selected;
            if (slot.getAttribute("data-limit") === "1") {
                selected = Array.from([content.querySelector(select)]).map((element) => element.cloneNode(true));
            }
            else {
                selected = Array.from(content.querySelectorAll(select)).map((element) => element.cloneNode(true));
            }
            selected.forEach((element) => {
                copyDataChildAttributes(slot, element);
            });
            if (selected.length === 0) {
                console.warn("No element found for selector: " + select + " in template: " + templateSelector + " for slot: ", slot);
                return;
            }
            if (slot.hasAttribute("data-replace") && selected) {
                slot.replaceWith(...selected);
            }
            else if (selected) {
                slot.append(...selected);
            }
        });
        clone.querySelectorAll("slot[data-select]").forEach((slot) => {
            if (done.includes(slot)) {
                return;
            }
            done.push(slot);
            slot.setAttribute("_slotIndex", (++slotIndex).toString());
            let select = slot.getAttribute("data-select");
            let selected;
            if (slot.getAttribute("data-limit") === "1") {
                let curElements = content.querySelector(select);
                if (curElements === null) {
                    selected = [];
                }
                else {
                    selected = Array.from([content.querySelector(select)]);
                }
            }
            else {
                selected = Array.from(content.querySelectorAll(select));
            }
            if (selected.length === 0) {
                console.warn("No element found for selector: " + select + " in template: " + templateSelector + " for slot: ", slot);
                return;
            }
            selected.forEach((element) => {
                copyDataChildAttributes(slot, element);
            });
            if (slot.hasAttribute("data-replace") && selected) {
                slot.replaceWith(...selected);
            }
            else if (selected) {
                slot.append(...selected);
            }
        });
        // Select <slot> element with no data-select attribute
        let slot = clone.querySelector("slot:not([data-select])");
        if (slot !== null && slot.hasAttribute("data-class")) {
            if (done.includes(slot)) {
                return;
            }
            done.push(slot);
            slot.setAttribute("_slotIndex", (++slotIndex).toString());
            Array.from(content.children).forEach((element) => {
                // Add all classes from data-class attribute to selected element
                element.classList.add(...slot.getAttribute("data-class").split(" ").filter((value) => value !== ""));
            });
        }
        if (slot !== null && slot.hasAttribute("data-replace")) {
            slot.replaceWith(...Array.from(content.children));
        }
        else if (slot !== null) {
            slot.append(...Array.from(content.children));
        }
        else {
            content.remove();
        }
        return clone;
    });
}
exports.getTemplateFilledWithContent = getTemplateFilledWithContent;
function runCallbacksForTemplate(templateSelector, element) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        let templateConfig = joda_1.Joda.getRegisteredTemplate(templateSelector);
        if ((_a = templateConfig === null || templateConfig === void 0 ? void 0 : templateConfig.callbacks) === null || _a === void 0 ? void 0 : _a.onAfterConnectedCallback) {
            yield templateConfig.callbacks.onAfterConnectedCallback(element);
        }
        if ((_b = templateConfig === null || templateConfig === void 0 ? void 0 : templateConfig.callbacks) === null || _b === void 0 ? void 0 : _b.onAfterAllTemplatesConnectedCallback) {
            // Spool up callback (executed by jodastyle)
            exports.allTemplatesConnectedCallbacks.push(() => __awaiter(this, void 0, void 0, function* () { return templateConfig.callbacks.onAfterAllTemplatesConnectedCallback(element); }));
        }
    });
}
exports.runCallbacksForTemplate = runCallbacksForTemplate;


/***/ }),

/***/ "./node_modules/@leuffen/jodastyle/dist/helper/ka-quick-template.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@leuffen/jodastyle/dist/helper/ka-quick-template.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createElementTree = exports.createElement = exports.parseAttributeStr = exports.parseVariableStr = exports.parseVariableAndStyleStr = void 0;
const embed_1 = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
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
        }
        else {
            let res = match.split("=");
            attrs[type][res.shift()] = res.join("=").trim();
        }
        return "";
    });
    return attrs;
}
exports.parseVariableAndStyleStr = parseVariableAndStyleStr;
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
        }
        else {
            let res = match.split("=");
            attrs[res.shift()] = res.join("=").trim();
        }
        return "";
    });
    return attrs;
}
exports.parseVariableStr = parseVariableStr;
function parseAttributeStr(attrString) {
    return parseVariableStr(attrString, "@");
}
exports.parseAttributeStr = parseAttributeStr;
function createElement(definition) {
    let defRest = definition.trim();
    let tag = "div";
    defRest = defRest.replace(/^[a-z0-9_\:\-]+/ig, (match) => {
        tag = match;
        return "";
    });
    let attrs = parseAttributeStr(defRest);
    let element = (0, embed_1.ka_create_element)(tag, attrs);
    return element;
}
exports.createElement = createElement;
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
            // TextNode
            let el = document.createElement("div");
            if (splitted.length > 0)
                cur += ">" + splitted.join(">");
            el.innerHTML = cur.trim().substring(1);
            el.childNodes.forEach((e) => leaf.append(e.cloneNode(true)));
            el.remove();
            break;
        }
        let el = createElement(cur);
        /*if (refName !== null)
            this.#refs[refName] = el;
*/
        if (start === null) {
            start = leaf = el;
        }
        else {
            if (leaf instanceof HTMLTemplateElement) {
                leaf.content.appendChild(el);
            }
            else {
                leaf.appendChild(el);
            }
            leaf = el;
        }
    }
    return { start, leaf };
}
exports.createElementTree = createElementTree;


/***/ }),

/***/ "./node_modules/@leuffen/jodastyle/dist/helper/logger.js":
/*!***************************************************************!*\
  !*** ./node_modules/@leuffen/jodastyle/dist/helper/logger.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Logger = void 0;
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
exports.Logger = Logger;


/***/ }),

/***/ "./node_modules/@leuffen/jodastyle/dist/index.module.js":
/*!**************************************************************!*\
  !*** ./node_modules/@leuffen/jodastyle/dist/index.module.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultLayout: () => (/* reexport safe */ _types_DefaultLayout__WEBPACK_IMPORTED_MODULE_6__.DefaultLayout),
/* harmony export */   Joda: () => (/* reexport safe */ _joda__WEBPACK_IMPORTED_MODULE_11__.Joda),
/* harmony export */   JodaDescriptionManager: () => (/* reexport safe */ _helper_JodaDescriptionManager__WEBPACK_IMPORTED_MODULE_7__.JodaDescriptionManager),
/* harmony export */   Logger: () => (/* reexport safe */ _helper_logger__WEBPACK_IMPORTED_MODULE_8__.Logger),
/* harmony export */   QTemplate: () => (/* reexport safe */ _helper_QTemplate__WEBPACK_IMPORTED_MODULE_5__.QTemplate),
/* harmony export */   __JodaDescriptionManager: () => (/* reexport safe */ _helper_JodaDescriptionManager__WEBPACK_IMPORTED_MODULE_7__.__JodaDescriptionManager),
/* harmony export */   __esModule: () => (/* reexport safe */ _helper_JodaRenderer__WEBPACK_IMPORTED_MODULE_0__.__esModule),
/* harmony export */   jodaSiteConfig: () => (/* reexport safe */ _helper_JodaSiteConfig__WEBPACK_IMPORTED_MODULE_10__.jodaSiteConfig),
/* harmony export */   template_parse: () => (/* reexport safe */ _helper_QTemplate__WEBPACK_IMPORTED_MODULE_5__.template_parse)
/* harmony export */ });
/* harmony import */ var _helper_JodaRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/JodaRenderer */ "./node_modules/@leuffen/jodastyle/dist/helper/JodaRenderer.js");
/* harmony import */ var _component_joda_content_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/joda-content-element */ "./node_modules/@leuffen/jodastyle/dist/component/joda-content-element.js");
/* harmony import */ var _component_joda_content_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_component_joda_content_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _component_joda_content_element__WEBPACK_IMPORTED_MODULE_1__) if(["default","__esModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _component_joda_content_element__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _component_joda_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/joda-fetch */ "./node_modules/@leuffen/jodastyle/dist/component/joda-fetch.js");
/* harmony import */ var _component_joda_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_component_joda_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _component_joda_fetch__WEBPACK_IMPORTED_MODULE_2__) if(["default","__esModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _component_joda_fetch__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _component_joda_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/joda-split */ "./node_modules/@leuffen/jodastyle/dist/component/joda-split.js");
/* harmony import */ var _component_joda_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_component_joda_split__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _component_joda_split__WEBPACK_IMPORTED_MODULE_3__) if(["default","__esModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _component_joda_split__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper/functions */ "./node_modules/@leuffen/jodastyle/dist/helper/functions.js");
/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_helper_functions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _helper_functions__WEBPACK_IMPORTED_MODULE_4__) if(["default","__esModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _helper_functions__WEBPACK_IMPORTED_MODULE_4__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _helper_QTemplate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helper/QTemplate */ "./node_modules/@leuffen/jodastyle/dist/helper/QTemplate.js");
/* harmony import */ var _types_DefaultLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types/DefaultLayout */ "./node_modules/@leuffen/jodastyle/dist/types/DefaultLayout.js");
/* harmony import */ var _helper_JodaDescriptionManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helper/JodaDescriptionManager */ "./node_modules/@leuffen/jodastyle/dist/helper/JodaDescriptionManager.js");
/* harmony import */ var _helper_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helper/logger */ "./node_modules/@leuffen/jodastyle/dist/helper/logger.js");
/* harmony import */ var _processor_jodasplit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./processor/jodasplit */ "./node_modules/@leuffen/jodastyle/dist/processor/jodasplit.js");
/* harmony import */ var _processor_jodasplit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_processor_jodasplit__WEBPACK_IMPORTED_MODULE_9__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _processor_jodasplit__WEBPACK_IMPORTED_MODULE_9__) if(["default","__esModule","QTemplate","template_parse","DefaultLayout","JodaDescriptionManager","__JodaDescriptionManager","Logger"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _processor_jodasplit__WEBPACK_IMPORTED_MODULE_9__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _helper_JodaSiteConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helper/JodaSiteConfig */ "./node_modules/@leuffen/jodastyle/dist/helper/JodaSiteConfig.js");
/* harmony import */ var _joda__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./joda */ "./node_modules/@leuffen/jodastyle/dist/joda.js");















/***/ }),

/***/ "./node_modules/@leuffen/jodastyle/dist/joda.js":
/*!******************************************************!*\
  !*** ./node_modules/@leuffen/jodastyle/dist/joda.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Joda = void 0;
exports.Joda = new (class {
    /**
     * Register a template instead of adding <template id="...">...</template> to the DOM
     *
     * @param id
     * @param data
     * @param layoutDefaults
     * @param callbacks
     */
    registerTemplate(id, data, layoutDefaults = {}, callbacks = {}) {
        if (!window["jodastyle"])
            window["jodastyle"] = {};
        if (!window["jodastyle"]["templates"])
            window["jodastyle"]["templates"] = {};
        window["jodastyle"]["templates"][id] = {
            template: data,
            layoutDefaults: layoutDefaults,
            callbacks: callbacks
        };
    }
    getRegisteredTemplate(id) {
        var _a, _b, _c;
        if (id.startsWith("#"))
            id = id.substring(1);
        return (_c = (_b = (_a = window["jodastyle"]) === null || _a === void 0 ? void 0 : _a["templates"]) === null || _b === void 0 ? void 0 : _b[id]) !== null && _c !== void 0 ? _c : null;
    }
})();


/***/ }),

/***/ "./node_modules/@leuffen/jodastyle/dist/processor/LayoutProcessor.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@leuffen/jodastyle/dist/processor/LayoutProcessor.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LayoutProcessor = void 0;
const functions_1 = __webpack_require__(/*! ../helper/functions */ "./node_modules/@leuffen/jodastyle/dist/helper/functions.js");
const commands = ["use", "wrap"];
class LayoutProcessor {
    constructor(logger) {
        this.logger = logger;
    }
    processNode(node) {
        if (!node.hasAttribute("layout"))
            return node;
        let layout = (0, functions_1.parseConfigString)(node.getAttribute("layout"));
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
exports.LayoutProcessor = LayoutProcessor;


/***/ }),

/***/ "./node_modules/@leuffen/jodastyle/dist/processor/jodaresponsive.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@leuffen/jodastyle/dist/processor/jodaresponsive.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Jodaresponsive = exports.parseClassStr = exports.getCurrentBreakpoint = exports.breakpoints = void 0;
exports.breakpoints = {
    "xsm": 0,
    "sm": 576,
    "md": 768,
    "lg": 992,
    "xl": 1200,
    "xxl": 1400
};
function getCurrentBreakpoint() {
    let ret = "";
    Object.keys(exports.breakpoints).forEach((key) => {
        if (window.innerWidth >= exports.breakpoints[key]) {
            ret = key;
        }
    });
    return ret;
}
exports.getCurrentBreakpoint = getCurrentBreakpoint;
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
            //console.log("Breakpoint", bp, this[bp], breakpoint);
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
    ;
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
exports.parseClassStr = parseClassStr;
class Jodaresponsive {
    constructor(logger) {
        this.logger = logger;
    }
    processNode(node) {
        var _a;
        const origAttr = "data-class-orig";
        if (!node.hasAttribute(origAttr)) {
            let classes = (_a = node.getAttribute("class")) !== null && _a !== void 0 ? _a : "";
            if (classes.indexOf(":") === -1)
                return;
            node.setAttribute(origAttr, classes);
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
exports.Jodaresponsive = Jodaresponsive;


/***/ }),

/***/ "./node_modules/@leuffen/jodastyle/dist/processor/jodashorts.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@leuffen/jodastyle/dist/processor/jodashorts.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Jodashorts = void 0;
class Jodashorts {
    constructor(logger) {
        this.logger = logger;
    }
    process(source) {
        source = source.replace(/\[([a-z0-9\-)]+)(.*?)]/g, (match, name, attrStr) => {
            let attrs = {
                "class": []
            };
            // Search for name="value" or name='value'. Make sure that starting ' matches ending ' using back reference
            attrStr = attrStr.replace(/”/g, '"').replace(/“/g, '"').replace(/‘/g, "'").replace(/’/g, "'");
            attrStr = attrStr.replace(/([a-z0-9\-\.]+)=(["'])(.*?)\2/mig, (match, name, quote, value) => {
                if (name === "class") {
                    attrs["class"].push(...value.split(" "));
                    return "";
                }
                attrs[name] = value;
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
                }
                else {
                    attrstr += ` ${attr}="${attrs[attr]}"`;
                }
            }
            let ret = `<${name}${attrstr}></${name}>`;
            return ret;
        });
        return source;
    }
}
exports.Jodashorts = Jodashorts;


/***/ }),

/***/ "./node_modules/@leuffen/jodastyle/dist/processor/jodasplit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@leuffen/jodastyle/dist/processor/jodasplit.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Jodasplit_target, _Jodasplit_parents, _Jodasplit_currentParent, _Jodasplit_currentContent, _Jodasplit_currentChildren;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Jodasplit = void 0;
const embed_1 = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
/**
 * Copy attributes data-section-* from source to target
 *
 * So data-section-class becomes class on target
 *
 * On data-section-class it will add the classs to the existing classes
 * On data-section-style it will add the styles to existing styles
 *
 * @param source
 * @param target
 */
function copySectionAttributes(source, target) {
    source.getAttributeNames().forEach((name) => {
        if (!name.startsWith("data-section-")) {
            return;
        }
        let value = source.getAttribute(name);
        name = name.substr(13);
        if (name === "class") {
            // Filter empty classes
            target.classList.add(...value.split(" ").filter((c) => c.length > 0));
            return;
        }
        if (name === "style") {
            // Filter empty classes
            target.setAttribute("style", (target.getAttribute("style") || "") + value);
            return;
        }
        // default
        target.setAttribute(name, value);
    });
}
class Jodasplit {
    constructor(logger) {
        this.logger = logger;
        _Jodasplit_target.set(this, document.createDocumentFragment());
        _Jodasplit_parents.set(this, [__classPrivateFieldGet(this, _Jodasplit_target, "f")]);
        _Jodasplit_currentParent.set(this, (0, embed_1.ka_create_element)("section", { class: "section-h1pre" }));
        _Jodasplit_currentContent.set(this, (0, embed_1.ka_create_element)("div", { class: "content" }, [], __classPrivateFieldGet(this, _Jodasplit_currentParent, "f")));
        _Jodasplit_currentChildren.set(this, (0, embed_1.ka_create_element)("div", { class: "children" }, [], __classPrivateFieldGet(this, _Jodasplit_currentParent, "f")));
    }
    findParentElement(layer) {
        while (__classPrivateFieldGet(this, _Jodasplit_parents, "f").length > layer) {
            __classPrivateFieldGet(this, _Jodasplit_parents, "f").pop();
        }
        while (__classPrivateFieldGet(this, _Jodasplit_parents, "f")[__classPrivateFieldGet(this, _Jodasplit_parents, "f").length - 1] === undefined) {
            __classPrivateFieldGet(this, _Jodasplit_parents, "f").pop();
        }
        return __classPrivateFieldGet(this, _Jodasplit_parents, "f")[__classPrivateFieldGet(this, _Jodasplit_parents, "f").length - 1];
    }
    createNewElement(tagName, layer, tag) {
        tagName = tagName.toLowerCase();
        let curParent = this.findParentElement(layer);
        //console.log("createNewElement", tagName, curParent, this.#parents);
        let curParentChildren = curParent.childNodes[1];
        __classPrivateFieldSet(this, _Jodasplit_currentParent, (0, embed_1.ka_create_element)(tag, { class: "section-" + tagName }), "f");
        while (__classPrivateFieldGet(this, _Jodasplit_parents, "f").length < layer) {
            __classPrivateFieldGet(this, _Jodasplit_parents, "f").push(undefined);
        }
        __classPrivateFieldGet(this, _Jodasplit_parents, "f").push(__classPrivateFieldGet(this, _Jodasplit_currentParent, "f"));
        if (curParent === __classPrivateFieldGet(this, _Jodasplit_target, "f")) {
            curParent.appendChild(__classPrivateFieldGet(this, _Jodasplit_currentParent, "f"));
        }
        else {
            curParentChildren.append(__classPrivateFieldGet(this, _Jodasplit_currentParent, "f"));
        }
        __classPrivateFieldSet(this, _Jodasplit_currentContent, (0, embed_1.ka_create_element)("div", { class: "content" }, [], __classPrivateFieldGet(this, _Jodasplit_currentParent, "f")), "f");
        __classPrivateFieldSet(this, _Jodasplit_currentChildren, (0, embed_1.ka_create_element)("div", { class: "children" }, [], __classPrivateFieldGet(this, _Jodasplit_currentParent, "f")), "f");
        return __classPrivateFieldGet(this, _Jodasplit_currentParent, "f");
    }
    process(source) {
        let lastLayer = 1;
        __classPrivateFieldGet(this, _Jodasplit_target, "f").append(__classPrivateFieldGet(this, _Jodasplit_currentParent, "f"));
        // Layout Processor now in JodaStyle
        //let layoutProcessor = new LayoutProcessor(this.logger);
        Array.from(source.children).forEach((child) => {
            if (child instanceof HTMLElement && child.matches("footer")) {
                // Just copy node
                __classPrivateFieldGet(this, _Jodasplit_target, "f").appendChild(child);
                return;
            }
            if (child instanceof HTMLElement && child.matches("h1, h2, h3, h4, h5, h6, h7, h8, h9, hr:not(.hr), .section-h2, .section-h3, .section-h4")) {
                let layer = 1;
                let tag = "div";
                if (child.matches("h1,h2,.section-h2")) {
                    layer = lastLayer = 1;
                    tag = "section";
                }
                else if (child.matches("h3, h4, h5, h6, h7, h8, h9, .section-h3, .section-h4")) {
                    if (child.matches(".section-h3")) {
                        layer = lastLayer = 6;
                    }
                    else if (child.matches(".section-h4")) {
                        layer = lastLayer = 8;
                    }
                    else {
                        layer = lastLayer = parseInt(child.tagName.substr(1)) * 2; // Allow HR in between
                    }
                    tag = "div";
                }
                else if (child.matches("hr")) {
                    layer = lastLayer + 1; // hr crates subelement of the last element
                    tag = "div";
                }
                //console.log("layer is", layer, lastLayer, child.tagName, child);
                let e = this.createNewElement(child.tagName.toLowerCase(), layer, tag);
                e.setAttribute("layout", child.getAttribute("layout") || "");
                child.removeAttribute("layout");
                // Copy data-section-* attributes to the new element
                copySectionAttributes(child, e);
                if (child.tagName === "HR" && !child.classList.contains("hr")) {
                    // Only copy styles from HR Elements not marked as .hr
                    e.setAttribute("style", child.getAttribute("style") || "");
                    child.removeAttribute("style");
                    e.classList.add(...child.classList);
                    child.setAttribute("orig-class", child.getAttribute("class") || "");
                    child.setAttribute("class", "");
                }
                //layoutProcessor.processNode(e);
            }
            if (child.tagName === "HR" && !child.classList.contains("hr")) {
                child.setAttribute("orig-pre-split-class", child.getAttribute("class"));
                child.setAttribute("class", "d-none");
            }
            __classPrivateFieldGet(this, _Jodasplit_currentContent, "f").appendChild(child);
        });
        // Remove empty content elements
        Array.from(__classPrivateFieldGet(this, _Jodasplit_target, "f").querySelectorAll(".children")).forEach((child) => {
            if (child.children.length === 0) {
                child.remove();
            }
        });
        // Reove empty content elements
        Array.from(__classPrivateFieldGet(this, _Jodasplit_target, "f").querySelectorAll(".content")).forEach((child) => {
            if (child.children.length === 0) {
                child.remove();
            }
        });
        return __classPrivateFieldGet(this, _Jodasplit_target, "f");
    }
}
exports.Jodasplit = Jodasplit;
_Jodasplit_target = new WeakMap(), _Jodasplit_parents = new WeakMap(), _Jodasplit_currentParent = new WeakMap(), _Jodasplit_currentContent = new WeakMap(), _Jodasplit_currentChildren = new WeakMap();


/***/ }),

/***/ "./node_modules/@leuffen/jodastyle/dist/processor/jodastyle-commands.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@leuffen/jodastyle/dist/processor/jodastyle-commands.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.jodaStyleCommands = void 0;
const ka_quick_template_1 = __webpack_require__(/*! ../helper/ka-quick-template */ "./node_modules/@leuffen/jodastyle/dist/helper/ka-quick-template.js");
const functions_1 = __webpack_require__(/*! ../helper/functions */ "./node_modules/@leuffen/jodastyle/dist/helper/functions.js");
const embed_1 = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
exports.jodaStyleCommands = {};
/**
 * Replace the element with the given @class > @id=elementId template
 *
 * @param value
 * @param target
 * @param element
 * @param logger
 */
exports.jodaStyleCommands["--joda-replace-by"] = (value, target, element, logger) => {
    let parent = element.parentElement;
    let ret = (0, ka_quick_template_1.createElementTree)(value);
    parent.replaceChild(ret.start, element);
    Array.from(element.children).forEach((child) => {
        ret.leaf.append(child);
    });
    element.remove();
    return ret.leaf;
};
/**
 * Wrap the selected element with the Template
 *
 * @param value
 * @param target
 * @param element
 * @param logger
 */
exports.jodaStyleCommands["--joda-wrap"] = (value, target, element, logger) => __awaiter(void 0, void 0, void 0, function* () {
    let parent = element.parentElement;
    if (value.startsWith("#")) {
        console.log("Wrap element", element, "with template", value);
        let placeholder = document.createElement("div");
        parent.insertBefore(placeholder, element);
        // Move Element to placeholder (to be able to access it in <slot>)
        placeholder.append(element);
        let newElement = yield (0, functions_1.getTemplateFilledWithContent)(value, placeholder, element);
        placeholder.replaceWith(newElement);
        yield (0, functions_1.runCallbacksForTemplate)(value, element);
        return element;
    }
    else {
        let ret = (0, ka_quick_template_1.createElementTree)(value);
        parent.replaceChild(ret.start, element);
        ret.leaf.append(element);
        return element;
    }
});
exports.jodaStyleCommands["--joda-container"] = (value, target, element, logger) => {
    let ret = (0, ka_quick_template_1.createElementTree)(value);
    Array.from(element.children).forEach((child) => {
        ret.leaf.append(child);
    });
    element.append(ret.start);
    return element;
};
exports.jodaStyleCommands["--joda-unwrap"] = (value, target, element, logger) => {
    let parent = element.parentElement;
    let grandParent = parent.parentElement;
    grandParent.insertBefore(element, parent);
    if (parent.children.length === 0) {
        parent.remove();
    }
    return element;
};
/**
 * --joda-group: @row
 * @param value
 * @param target
 * @param element
 * @param logger
 */
exports.jodaStyleCommands["--joda-group"] = (value, target, element, logger) => {
    const groupByKey = "jodaIsGroupedBy";
    if (element[groupByKey] !== undefined) {
        return element;
    }
    let siblings = [];
    let curSibling = element.nextElementSibling;
    while (curSibling && (0, functions_1.getCleanVariableValue)(getComputedStyle(curSibling).getPropertyValue("--joda-group")) === value) {
        siblings.push(curSibling);
        curSibling[groupByKey] = true;
        curSibling = curSibling.nextElementSibling;
    }
    let parent = element.parentElement;
    let ret = (0, ka_quick_template_1.createElementTree)(value);
    // Insert the Element
    element.parentElement.insertBefore(ret.start, element);
    ret.leaf.append(element);
    siblings.forEach((sibling) => {
        ret.leaf.append(sibling);
    });
    return element;
};
exports.jodaStyleCommands["--joda-class"] = (value, target, element, logger) => {
    let ret = (0, ka_quick_template_1.createElementTree)(value);
    element.setAttribute("class", element.getAttribute("class") + " " + value);
    return element;
};
exports.jodaStyleCommands["--joda-use"] = (value, target, element, logger) => __awaiter(void 0, void 0, void 0, function* () {
    if (value.startsWith("#")) {
        let placeholder = document.createElement("div");
        Array.from(element.children).forEach((child) => {
            placeholder.append(child);
        });
        let newElement = yield (0, functions_1.getTemplateFilledWithContent)(value, placeholder, element);
        let firstElement = newElement.firstElementChild;
        firstElement["joda-style-processed"] = true; // Set style as processed (to prevent double processing)
        // Copy first line of the outerHTML string of the element
        let debugElement = element.outerHTML.split("\n")[0];
        firstElement.setAttribute("_orig_elem", debugElement);
        element.getAttributeNames().forEach((attrName) => {
            var _a, _b;
            // copy attributes but. Append class and styles
            if (attrName === "class") {
                firstElement.setAttribute(attrName, (_a = element.getAttribute(attrName) + " " + firstElement.getAttribute(attrName)) !== null && _a !== void 0 ? _a : "");
                return;
            }
            if (attrName === "style") {
                firstElement.setAttribute(attrName, (_b = element.getAttribute(attrName) + " " + firstElement.getAttribute(attrName)) !== null && _b !== void 0 ? _b : "");
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
        yield (0, functions_1.runCallbacksForTemplate)(value, firstElement);
        return firstElement;
    }
    let matches = value.match(/([a-z0-9\_-]+)\s*\((.*?)\)/);
    if (!matches) {
        console.error("Invalid --joda-use command: ", value, "in element", element, " should be in format: commandName(arg1: value1, arg2: value2, ...)");
        throw "Invalid --joda-use command: " + value + " should be in format: commandName(arg1: value1, arg2: value2, ...)";
    }
    logger.log("Using renderer: ", matches[1], "with args: ", matches[2], "on element", element);
    let commandName = matches[1];
    //console.log("interpret", "{" + matches[2] + "}")
    let args = (0, embed_1.ka_eval)("{" + matches[2] + "}", {}, target, {});
    let command = yield (0, functions_1.await_property)(window, ["jodastyle", "renderer", commandName]);
    let config = new command.config();
    let style = getComputedStyle(element);
    Object.keys(config).forEach((key) => {
        let val = style.getPropertyValue("--layout-" + key.replace(/\_/g, "-"));
        if (val !== "") {
            config[key] = val.replace(/^["']/g, '').replace(/["']$/, '').trim();
        }
    });
    Object.assign(config, args);
    return yield (new command.renderer).render(element, config);
});
exports.jodaStyleCommands["--joda-on-empty-class"] = (value, target, element, logger) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Check if element is empty", element.textContent.trim(), "and add class", value);
    if (element.textContent.trim() === "") {
        element.classList.add(value);
    }
    return element;
});


/***/ }),

/***/ "./node_modules/@leuffen/jodastyle/dist/processor/jodastyle.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@leuffen/jodastyle/dist/processor/jodastyle.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Jodastyle = void 0;
const jodastyle_commands_1 = __webpack_require__(/*! ./jodastyle-commands */ "./node_modules/@leuffen/jodastyle/dist/processor/jodastyle-commands.js");
const functions_1 = __webpack_require__(/*! ../helper/functions */ "./node_modules/@leuffen/jodastyle/dist/helper/functions.js");
const embed_1 = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
const JodaElementException_1 = __webpack_require__(/*! ../helper/JodaElementException */ "./node_modules/@leuffen/jodastyle/dist/helper/JodaElementException.js");
const JodaErrorElement_1 = __webpack_require__(/*! ../helper/JodaErrorElement */ "./node_modules/@leuffen/jodastyle/dist/helper/JodaErrorElement.js");
const LayoutProcessor_1 = __webpack_require__(/*! ./LayoutProcessor */ "./node_modules/@leuffen/jodastyle/dist/processor/LayoutProcessor.js");
class Jodastyle {
    constructor(logger) {
        this.logger = logger;
    }
    process(node) {
        return __awaiter(this, void 0, void 0, function* () {
            // Wait for all joda-split to be ready
            for (let child of Array.from(node.getElementsByTagName("joda-split"))) {
                while (child["ready"] !== true) {
                    yield (0, embed_1.ka_sleep)(10);
                }
            }
            // Run layout-attribute processor (for whole style - already running on joda-split)
            let layoutProcessor = new LayoutProcessor_1.LayoutProcessor(this.logger);
            node.querySelectorAll("[layout]").forEach((node) => {
                layoutProcessor.processNode(node);
            });
            // Run jodastyle commands
            for (let child of [node, ...Array.from(node.children)]) {
                if (child["joda-style-processed"] === true) {
                    continue;
                }
                child["joda-style-processed"] = true;
                let style = getComputedStyle(child);
                let parentStyle = null;
                if (child.parentElement) {
                    parentStyle = getComputedStyle(child.parentElement);
                }
                let keys = Object.keys(jodastyle_commands_1.jodaStyleCommands);
                for (let key of Array.from(keys)) {
                    let styleValue = style.getPropertyValue(key);
                    if (styleValue === "") {
                        continue;
                    }
                    if (parentStyle !== null && styleValue === parentStyle.getPropertyValue(key)) {
                        continue; // Inherited from parent
                    }
                    // Replace starting and ending with " or ' with nothing
                    styleValue = (0, functions_1.getCleanVariableValue)(styleValue);
                    //await ka_sleep(10);
                    let command = jodastyle_commands_1.jodaStyleCommands[key];
                    try {
                        child = (yield command(styleValue, node, child, this.logger));
                    }
                    catch (e) {
                        if (e instanceof JodaElementException_1.JodaElementException) {
                            e.triggerCommand = key + ": " + styleValue;
                            this.logger.warn(e.message, e.element);
                            child.replaceWith(new JodaErrorElement_1.JodaErrorElement(e.message + " (trigger by: " + e.triggerCommand + ")"));
                        }
                        else {
                            this.logger.warn("Unhandled exception", e, "on element", child, "triggered by", key + ": " + styleValue);
                            throw e;
                        }
                    }
                }
                yield this.process(child); // Recursive parse replaced elements
            }
        });
    }
}
exports.Jodastyle = Jodastyle;


/***/ }),

/***/ "./node_modules/@leuffen/jodastyle/dist/processor/jodavisualize.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@leuffen/jodastyle/dist/processor/jodavisualize.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Jodavisualize = void 0;
const embed_1 = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
class Jodavisualize {
    process(element) {
        [element, ...Array.from(element.querySelectorAll("*"))].forEach((e) => {
            e.insertBefore((0, embed_1.ka_create_element)("div", { class: "joda-visualize" }, `<${e.tagName.toLowerCase()}  class="${Array.from(e.classList).join(", ")}">`), e.firstElementChild);
        });
    }
}
exports.Jodavisualize = Jodavisualize;


/***/ }),

/***/ "./node_modules/@leuffen/jodastyle/dist/types/DefaultLayout.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@leuffen/jodastyle/dist/types/DefaultLayout.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultLayout = void 0;
class DefaultLayout {
    constructor() {
        this.container = "container";
        this.break1 = "xl";
    }
}
exports.DefaultLayout = DefaultLayout;


/***/ }),

/***/ "./node_modules/@leuffen/liscom/dist/details-title/details-title.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@leuffen/liscom/dist/details-title/details-title.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./node_modules/@leuffen/liscom/dist/index.js");


let observedDataDetailTitle = [];
setInterval(() => {
    if ((_index__WEBPACK_IMPORTED_MODULE_1__.__liscom_config === null || _index__WEBPACK_IMPORTED_MODULE_1__.__liscom_config === void 0 ? void 0 : _index__WEBPACK_IMPORTED_MODULE_1__.__liscom_config.detailsTitle) !== true) {
        return;
    }
    let elements = document.querySelectorAll("[data-details-title]");
    for (let e of Array.from(elements)) {
        // if already in observedDataDetailTitle, continue
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
}, 1000);


/***/ }),

/***/ "./node_modules/@leuffen/liscom/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@leuffen/liscom/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LiscomConfig: () => (/* binding */ LiscomConfig),
/* harmony export */   __liscom_config: () => (/* binding */ __liscom_config),
/* harmony export */   liscom_enable: () => (/* binding */ liscom_enable)
/* harmony export */ });
/* harmony import */ var _slideshow_slideshow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideshow/slideshow */ "./node_modules/@leuffen/liscom/dist/slideshow/slideshow.js");
/* harmony import */ var _details_title_details_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-title/details-title */ "./node_modules/@leuffen/liscom/dist/details-title/details-title.js");
/* harmony import */ var _typewriter_element_typewriter_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typewriter-element/typewriter-element */ "./node_modules/@leuffen/liscom/dist/typewriter-element/typewriter-element.js");
/* harmony import */ var _typewriter_element_typewriter_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_typewriter_element_typewriter_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _slider_liscom_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider/liscom-slider */ "./node_modules/@leuffen/liscom/dist/slider/liscom-slider.js");
/* harmony import */ var _slider_liscom_slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_slider_liscom_slider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scrollspy_scrollspy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scrollspy/scrollspy */ "./node_modules/@leuffen/liscom/dist/scrollspy/scrollspy.js");
/* harmony import */ var _scroll_to_top_scroll_to_top__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scroll-to-top/scroll-to-top */ "./node_modules/@leuffen/liscom/dist/scroll-to-top/scroll-to-top.js");
var __liscom_config = null;
class LiscomConfig {
    constructor() {
        this.slideshow = true;
        this.detailsTitle = true;
    }
}
/**
 * Activates the liscom components
 *
 * @param liscomConfig
 */
function liscom_enable(liscomConfig = {}) {
    let config = new LiscomConfig();
    config = Object.assign(Object.assign({}, config), liscomConfig);
    console.log("[liscom] enabled features: ", config);
    __liscom_config = config;
}








/***/ }),

/***/ "./node_modules/@leuffen/liscom/dist/scroll-to-top/scroll-to-top.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@leuffen/liscom/dist/scroll-to-top/scroll-to-top.js ***!
  \**************************************************************************/
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

let ScrollToTop = class ScrollToTop extends HTMLElement {
    connectedCallback() {
        console.log("scroll to top");
        this.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
        let active = false;
        if (this.innerHTML.trim() === "")
            this.innerHTML = "⬆️";
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300 && active === false) {
                this.classList.add("show");
                active = true;
            }
            if (window.scrollY < 300 && active === true) {
                this.classList.remove("show");
                active = false;
            }
        }, { passive: true });
    }
};
ScrollToTop = __decorate([
    (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.customElement)("liscom-scroll-to-top")
], ScrollToTop);


/***/ }),

/***/ "./node_modules/@leuffen/liscom/dist/scrollspy/scrollspy.js":
/*!******************************************************************!*\
  !*** ./node_modules/@leuffen/liscom/dist/scrollspy/scrollspy.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LiscomScrollspy: () => (/* binding */ LiscomScrollspy)
/* harmony export */ });
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



let LiscomScrollspy = class LiscomScrollspy extends HTMLElement {
    constructor() {
        super(...arguments);
        this.elements = {};
        // language=html
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_dom_ready)();
            // Allow attaching to any element
            this.style.display = "contents";
            document.querySelectorAll("[data-scrollspy-name]").forEach((el) => {
                let curName = el.getAttribute("data-scrollspy-name");
                let navElem = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("li", { class: "" }, [
                    (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("a", { href: window.location.pathname + "#" + el.getAttribute("id") }, curName)
                ], this);
                let curMo = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting) {
                        navElem.classList.add("active");
                    }
                    else {
                        navElem.classList.remove("active");
                    }
                });
                curMo.observe(el);
                this.elements[curName] = ({ target: el, nav: navElem, observer: curMo });
            });
        });
    }
    disconnectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            // disconnect all observers
            for (let key in this.elements) {
                this.elements[key].observer.disconnect();
                this.elements[key].nav.remove();
            }
        });
    }
};
LiscomScrollspy = __decorate([
    (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.customElement)("liscom-scrollspy")
], LiscomScrollspy);



/***/ }),

/***/ "./node_modules/@leuffen/liscom/dist/slider/liscom-slider.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@leuffen/liscom/dist/slider/liscom-slider.js ***!
  \*******************************************************************/
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
        /*
        this.container = this.shadowRoot!.querySelector('.container')!;
        this.prevBtn = this.shadowRoot!.getElementById('prevBtn')!;
        this.nextBtn = this.shadowRoot!.getElementById('nextBtn')!;
        this.sections = this.querySelectorAll('section');



        this.prevBtn.addEventListener('click', () => this.scroll(-1));
        this.nextBtn.addEventListener('click', () => this.scroll(1));
        */
        console.log("connected");
        this.addEventListener('mousedown', this.dragStart);
        this.addEventListener('mouseup', this.dragEnd);
        this.addEventListener('mouseleave', this.dragEnd);
        this.addEventListener('mousemove', this.dragMove);
    }
    doScroll(direction) {
        this.currentSection = Math.max(0, Math.min(this.sections.length - 1, this.currentSection + direction));
        this.sections[this.currentSection].scrollIntoView({ behavior: 'smooth' });
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
        this.style.cursor = 'grabbing';
    }
    dragEnd(e) {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        this.style.cursor = '';
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
customElements.define('liscom-slider', MyComponent);


/***/ }),

/***/ "./node_modules/@leuffen/liscom/dist/slideshow/slideshow.js":
/*!******************************************************************!*\
  !*** ./node_modules/@leuffen/liscom/dist/slideshow/slideshow.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./node_modules/@leuffen/liscom/dist/index.js");
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
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
var _Slideshow_curElement;


class Slideshow {
    constructor(element) {
        this.element = element;
        _Slideshow_curElement.set(this, null);
        let timeout = parseInt(element.getAttribute("data-delay"));
        if (isNaN(timeout))
            timeout = 5000;
        element.setAttribute("data-debug-liscom-element", "slideshow");
        setTimeout(() => this.switch(true), 100);
        setTimeout(() => this.switch(), 200);
        setInterval(() => this.switch(), timeout);
    }
    switch(first = false) {
        if (__classPrivateFieldGet(this, _Slideshow_curElement, "f") !== null) {
            __classPrivateFieldGet(this, _Slideshow_curElement, "f").classList.add("animateOut");
            __classPrivateFieldGet(this, _Slideshow_curElement, "f").classList.remove("show");
            __classPrivateFieldGet(this, _Slideshow_curElement, "f").classList.remove("animateIn");
        }
        if (__classPrivateFieldGet(this, _Slideshow_curElement, "f") === null) {
            __classPrivateFieldSet(this, _Slideshow_curElement, this.element.firstElementChild, "f");
            return;
        }
        else {
            __classPrivateFieldSet(this, _Slideshow_curElement, __classPrivateFieldGet(this, _Slideshow_curElement, "f").nextElementSibling, "f");
            if (__classPrivateFieldGet(this, _Slideshow_curElement, "f") === null)
                __classPrivateFieldSet(this, _Slideshow_curElement, this.element.firstElementChild, "f");
        }
        if (!first && __classPrivateFieldGet(this, _Slideshow_curElement, "f") !== null) {
            __classPrivateFieldGet(this, _Slideshow_curElement, "f").classList.add("animateIn");
            __classPrivateFieldGet(this, _Slideshow_curElement, "f").classList.remove("animateOut");
        }
        if (__classPrivateFieldGet(this, _Slideshow_curElement, "f") !== null)
            __classPrivateFieldGet(this, _Slideshow_curElement, "f").classList.add("show");
    }
}
_Slideshow_curElement = new WeakMap();
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_1__.ka_dom_ready)();
    yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_1__.ka_sleep)(1000);
    if ((_index__WEBPACK_IMPORTED_MODULE_0__.__liscom_config === null || _index__WEBPACK_IMPORTED_MODULE_0__.__liscom_config === void 0 ? void 0 : _index__WEBPACK_IMPORTED_MODULE_0__.__liscom_config.slideshow) !== true) {
        return;
    }
    document.querySelectorAll(".slideshow").forEach((e) => new Slideshow(e));
}))();


/***/ }),

/***/ "./node_modules/@leuffen/liscom/dist/typewriter-element/typewriter-element.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@leuffen/liscom/dist/typewriter-element/typewriter-element.js ***!
  \************************************************************************************/
/***/ (() => {

class TypewriterElement extends HTMLElement {
    constructor() {
        super();
        this.words = [];
        this.index = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        // Werte für die Timeouts
        this.writeSpeed = 100;
        this.deleteSpeed = 50;
        this.pauseBeforeDelete = 1500;
        this.pauseBeforeWrite = 500;
        this.curTimeout = null;
        this.container = document.createElement('span');
        this.cursor = document.createElement('span'); // Erstelle den Cursor Container
        this.cursor.textContent = '|'; // Setze den Textinhalt des Cursors
        // Füge den Text- und den Cursorcontainer zum Shadow DOM hinzu
        this.append(this.container, this.cursor);
    }
    connectedCallback() {
        if (!this.hasAttribute("data-words")) {
            this.setAttribute('data-words', this.textContent.trim().replace("|", ""));
            this.textContent = "";
        }
        this.words = this.dataset.words.trim().split(',').filter((word) => word.trim() !== "");
        //this.words = (this.getAttribute('words') || '').split(',');
        // Setze die Klasse für den Cursor
        this.cursor.className = 'cursor';
        this.index = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        // Werte aus den Data-Attributen lesen, wenn vorhanden
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
        }
        else {
            this.charIndex++;
        }
        this.container.textContent = currentWord.substring(0, this.charIndex);
        if (!this.isDeleting && this.charIndex === currentWord.length) {
            this.isDeleting = true;
            this.curTimeout = setTimeout(() => this.type(), this.pauseBeforeDelete);
        }
        else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.index = (this.index + 1) % this.words.length;
            this.curTimeout = setTimeout(() => this.type(), this.pauseBeforeWrite);
        }
        else {
            this.curTimeout = setTimeout(() => this.type(), typeSpeed + (Math.random() * typeSpeed));
        }
    }
}
customElements.define('typewriter-element', TypewriterElement);


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

/***/ "./sections/box/box-price.ts":
/*!***********************************!*\
  !*** ./sections/box/box-price.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");

_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "box-price",
  // language=HTML
  `
        <section class="tjs-box-price :: mobile :md:">
            <div class="tjs-wrapper tjs-box-price__border">
                    <slot data-select=".tjs-box-price__disturber" data-replace></slot>
                <div class="tjs-box-price__content">
                    <div class="tjs-box-price__content--header">
                        <div class="tjs-box-price__content--header-prices"><slot data-select=".prices"></slot></div>
                        <div class="tjs-box-price__content--header-name"><slot data-select="h3"></slot></div>
                    </div>
                    <slot></slot>
                </div>
            </div>
        </section>
    `
);
_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "box-prices",
  // language=HTML
  `
        <section class="tjs-box-prices container-fluid :: mobile :md:">
            <slot data-select=".children > *" data-child-layout="use: #box-price;" data-replace></slot>
        </section>
    `
);


/***/ }),

/***/ "./sections/box/box-white.ts":
/*!***********************************!*\
  !*** ./sections/box/box-white.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");

_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "box-white",
  // language=HTML
  `
        <div class="tjs-box-white">
            <div class="tjs-wrapper">
                <div class="tjs-box-white__content">
                    <slot></slot>
                </div>
            </div>
        </div>
    `
);
_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "box-white-container",
  // language=HTML
  `
        <section class="tjs-box-white-container container :: mobile :md:">
                <slot data-select=".children > *" data-child-layout="use: #box-white;" data-replace></slot>
            </div>
        </section>
    `
);


/***/ }),

/***/ "./sections/cards-slider/cards-slider.ts":
/*!***********************************************!*\
  !*** ./sections/cards-slider/cards-slider.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");

_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "cards-slider__list-item",
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
    `
);
_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "cards-slider",
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
    `
);


/***/ }),

/***/ "./sections/cols-2/cols-2-bg.ts":
/*!**************************************!*\
  !*** ./sections/cols-2/cols-2-bg.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");

_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "cols-2-bg",
  // language=HTML
  `
        <section class="tjs-cols-2-bg :: mobile :md:">
            <div class="container">
                <div class="tjs-wrapper tjs-cols-2-bg__border">
                    <div class="tjs-cols-2-bg__disturber">
                        <slot data-select="blockquote"></slot>
                    </div>
                    <div class="tjs-cols-2-bg__row">
                        <div class="tjs-cols-2-bg__col tjs-cols-2-bg__col--image">
                            <slot data-select="img"></slot>
                        </div>
                        <div class="tjs-cols-2-bg__col tjs-cols-2-bg__col--text-content">
                            <slot></slot>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
);


/***/ }),

/***/ "./sections/cols-2/cols-2.ts":
/*!***********************************!*\
  !*** ./sections/cols-2/cols-2.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");

_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "cols-2",
  // language=HTML
  `
        <section class="tjs-cols-2 :: mobile :md:">
            <div class="tjs-wrapper container ">
                <div class="tjs-cols-2__col tjs-cols-2__col--image">
                    <slot data-select="img"></slot>
                </div>
                <div class="tjs-cols-2__col tjs-cols-2__col--text-content">
                    <slot></slot>
                </div>
            </div>
        </section>
    `
);


/***/ }),

/***/ "./sections/contact-form/contact-form.ts":
/*!***********************************************!*\
  !*** ./sections/contact-form/contact-form.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");

_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "contact-form",
  // language=HTML
  `
        <section class="tjs-contact-form :: mobile :lg:">
            <div class="tjs__wrapper">
                <div class="tjs-contact-form__content--container">
                    <div class="tjs-contact-form__content--container-inner">
                        <div class="tjs-contact-form__col tjs-contact-form__text">
                            <slot></slot>
                        </div>
                        <div class="tjs-contact-form__col tjs-contact-form__form">
                            <form data-micx-formmail-preset="default" data-micx-formmail-sent-message="E-Mail erfolgreich gesendet!">
                                <slot data-select=".form, form"></slot>
                                <div class="tjs-contact__newsletter--callback-wrapper">
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
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
);


/***/ }),

/***/ "./sections/contact/contact.ts":
/*!*************************************!*\
  !*** ./sections/contact/contact.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");

_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "contact",
  // language=HTML
  `
        <section class="tjs-contact :: mobile :lg:">
            <div class="tjs__wrapper container-fluid">
                <div class="tjs-contact__content--container">
                    <div class="tjs-contact__content--container-inner container">
                        <div class="tjs-contact__col tjs-contact__newsletter--text">
                            <slot></slot>

                        </div>
                        <div class="tjs-contact__col tjs-contact__newsletter--form">
                            <form data-micx-formmail-preset="default" data-micx-formmail-sent-message="E-Mail erfolgreich gesendet!">
                                <slot data-select=".form, form"></slot>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
);


/***/ }),

/***/ "./sections/cta1/cta1.ts":
/*!*******************************!*\
  !*** ./sections/cta1/cta1.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");

_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "cta1",
  // language=HTML
  `
        <section class="tjs-cols-2-bg :: mobile :lg:">
            <div class="tjs-wrapper tjs-cols-2-bg--special container">
                <div class="tjs-cols-2-bg__disturber-image">

                    <img loading="lazy" src="https://cdn.leuffen.de/global/themejs-sys/elements/man-showing.svg" width="433" height="500">

                </div>
                <div class="tjs-cols-2-bg__disturber-stars">

                    <img loading="lazy" class="tjs-cols-2-bg__disturber-stars--left" src="https://cdn.leuffen.de/global/themejs-sys/elements/stars.svg" width="389" height="500">
                    <img loading="lazy" class="tjs-cols-2-bg__disturber-stars--right" src="https://cdn.leuffen.de/global/themejs-sys/elements/stars.svg" width="389" height="500">

                </div>
                <div class="tjs-cols-2-bg__row tjs-cols-2-bg__row--special">
                    <div class="tjs-cols-2-bg__col tjs-cols-2-bg__col--text-content">
                        <slot></slot>
                    </div>
                    <div class="tjs-cols-2-bg__col tjs-cols-2-bg__col--button-content">
                        <slot data-select=".btn"></slot>
                    </div>
                </div>
            </div>
        </section>
    `
);


/***/ }),

/***/ "./sections/customer-reviews/customer-reviews-quote.ts":
/*!*************************************************************!*\
  !*** ./sections/customer-reviews/customer-reviews-quote.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");

_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "customer-reviews-quote",
  // language=HTML
  `
        <section class="tjs-customer-reviews-quote :: mobile :md:">
            <div class="container">
                <div class="tjs-wrapper">
                    <i class="bi bi-quote tjs-customer-reviews-quote__quote-icon"></i>
                    <img loading="lazy" class="tjs-customer-reviews-quote__stars" src="https://cdn.leuffen.de/global/themejs-sys/elements/stars.svg" width="389" height="500">
                    <slot data-select="h2"></slot>
                    <div class="tjs-customer-reviews-quote__author">
                        <slot data-replace></slot>
                    </div>
                </div>
            </div>
        </section>
    `
);


/***/ }),

/***/ "./sections/customer-reviews/customer-reviews-slider.ts":
/*!**************************************************************!*\
  !*** ./sections/customer-reviews/customer-reviews-slider.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");

_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "customer-reviews__carousel--slide",
  // language=HTML
  `
        <swiper-slide class="tjs-customer-reviews-slider__carousel--slide">
            <div class="tjs-customer-reviews-slider__carousel--slide__stars">

            </div>
            <div class="tjs-customer-reviews-slider__carousel--slide__text">
                <slot data-select="blockquote"></slot>
            </div>
            <div class="tjs-customer-reviews-slider__carousel--slide__author">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i> 5/5 Sterne
                <slot></slot>
            </div>
        </swiper-slide>
    `
);
_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "customer-reviews-slider",
  // language=HTML
  `
        <section class="tjs-customer-reviews-slider :: mobile :md:">
            <div class="tjs-wrapper container-fluid">
                <div class="tjs-customer-reviews-slider__content--container">
                    <div class="tjs-customer-reviews-slider__content">
                        <div class="tjs-customer-reviews-slider__content--headline">
                            <slot><slot>
                        </div>
                        <div class="tjs-customer-reviews-slider__content--row">
                            <div class="tjs-customer-reviews-slider__content--col tjs-customer-reviews-slider__carousel">
                                <div class="tjs-customer-reviews-slider__carousel--navigation-prev">
                                    <img loading="lazy" src="https://cdn.leuffen.de/global/themejs-sys/elements/arrow-left.svg" width="500" height="500">
                                </div>
                                <div class="tjs-customer-reviews-slider__carousel--navigation-next">
                                    <img loading="lazy" src="https://cdn.leuffen.de/global/themejs-sys/elements/arrow-right.svg" width="500" height="500">
                                </div>
                                <div class="tjs-customer-reviews-slider__carousel--nav-points"></div>

                                <swiper-container init="false" class="tjs-customer-reviews-slider__carousel--slides">
                                    <slot data-select=".children > *" data-child-layout="use: #customer-reviews__carousel--slide;" data-replace></slot>
                                </swiper-container>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
  {},
  {
    onAfterAllTemplatesConnectedCallback: (element) => {
    }
  }
);


/***/ }),

/***/ "./sections/customer-reviews/customer-reviews.ts":
/*!*******************************************************!*\
  !*** ./sections/customer-reviews/customer-reviews.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");

_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "customer-reviews__review",
  // language=HTML
  `
        <div class="tjs-customer-reviews__review">
            <div class="tjs-customer-reviews__review--stars">

            </div>
            <div class="tjs-customer-reviews__review--text">
                <slot data-select="blockquote"></slot>
            </div>
            <div class="tjs-customer-reviews__review--author">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i> 5/5 Sterne
                <slot></slot>
            </div>
        </div>
    `
);
_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "customer-reviews",
  // language=HTML
  `
        <section class="tjs-customer-reviews :: mobile :md:">
            <div class="tjs-wrapper container">
                <div class="tjs-customer-reviews__content">
                    <div class="tjs-customer-reviews__content--headline">
                        <slot><slot>
                    </div>
                    <div class="tjs-customer-reviews__content--row">
                        <slot data-select=".children > *" data-child-layout="use: #customer-reviews__review;" data-replace></slot>
                    </div>
                </div>
            </div>
        </section>
    `
);


/***/ }),

/***/ "./sections/disturber/disturber.ts":
/*!*****************************************!*\
  !*** ./sections/disturber/disturber.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");

_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "disturber",
  // language=HTML
  `
        <section class="tjs-disturber">
            <div class="tjs-wrapper container">
                <div class="tjs-disturber__content container">
                    <slot data-select="p"></slot>
                </div>
            </div>
        </section>
    `
);


/***/ }),

/***/ "./sections/filter-images/filter-images.ts":
/*!*************************************************!*\
  !*** ./sections/filter-images/filter-images.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");

_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "filter-image",
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
    `
);
_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "filter-images",
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
  {},
  {
    onAfterAllTemplatesConnectedCallback: (element) => {
      generateFilters();
      function generateFilters() {
        let tags = /* @__PURE__ */ new Set();
        document.querySelectorAll("[data-section-data-tags]").forEach(function(elem) {
          let tagList = elem.getAttribute("data-section-data-tags").split(", ");
          tagList.forEach((tag) => tags.add(tag));
        });
        let filterContainer = document.querySelector(".tjs-filter-images__filters");
        tags.forEach((tag) => {
          let filterButton = document.createElement("span");
          filterButton.className = "tjs-filter-images__filters--filter";
          filterButton.dataset.filter = tag;
          filterButton.textContent = tag.charAt(0).toUpperCase() + tag.slice(1);
          filterContainer.appendChild(filterButton);
        });
        activateFilters();
      }
      function activateFilters() {
        const filters = document.querySelectorAll(".tjs-filter-images__filters--filter");
        filters.forEach((filter) => {
          filter.addEventListener("click", function() {
            filters.forEach((f) => f.classList.remove("selected"));
            filter.classList.add("selected");
            let selectedFilter = filter.getAttribute("data-filter");
            let allItems = document.querySelectorAll(".tjs-filter-images__item");
            allItems.forEach((item) => {
              let itemFilters = item.querySelector("h3").getAttribute("data-section-data-tags");
              if (itemFilters) {
                let filtersArray = itemFilters.split(",").map((f) => f.trim());
                if (selectedFilter === "all" || filtersArray.includes(selectedFilter)) {
                  item.classList.remove("hide");
                  item.classList.add("show");
                } else {
                  item.classList.add("hide");
                  item.classList.remove("show");
                }
              }
            });
          });
        });
      }
    }
  }
);


/***/ }),

/***/ "./sections/footer-copyright/footer-copyright.ts":
/*!*******************************************************!*\
  !*** ./sections/footer-copyright/footer-copyright.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");

_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "footer-copyright",
  // language=HTML
  `
        <div class="tjs-footer-copyright :: mobile :lg:">
            <div class="container">
                <hr>
                <div class="tjs-footer-copyright__legal">
                    <slot></slot>
                </div>
            </div>
        </div>

    `
);


/***/ }),

/***/ "./sections/footer/footer.ts":
/*!***********************************!*\
  !*** ./sections/footer/footer.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");

_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "footer-links",
  `
        <div class="tjs-footer__links">
            <slot></slot>
        </div>
    `
);
_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "footer",
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

                                <slot></slot>
                            </div>
                        </div>
                        <div class="tjs-footer__col">
                            <div class="tjs-footer__col--inner">
                                <slot data-select=".section-h3" data-child-layout="use: #footer-links">
                                </slot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    `
);


/***/ }),

/***/ "./sections/google-map/google-map.ts":
/*!*******************************************!*\
  !*** ./sections/google-map/google-map.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");

_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "google-map",
  // language=HTML
  `
        <section class="tjs-google-map :: mobile :md:">
            <div style="width: 100%">
                <iframe width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
            </div>
            <div class="tjs-wrapper container-fluid">
                <div class="tjs-google-map__address">
                    <slot></slot>
                </div>
            </div>
        </section>
    `
);


/***/ }),

/***/ "./sections/header1/header1.ts":
/*!*************************************!*\
  !*** ./sections/header1/header1.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");

_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "header1",
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
    `
);


/***/ }),

/***/ "./sections/headline/headline.ts":
/*!***************************************!*\
  !*** ./sections/headline/headline.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");

_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "headline",
  // language=HTML
  `
        <section class="tjs-headline :: mobile :md:">
            <div class="container">
                <div class="tjs-wrapper">
                    <img loading="lazy" class="tjs-headline--star-top-left" src="https://cdn.leuffen.de/global/themejs-sys/elements/stars.svg" width="389" height="500">
                    <slot data-select="blockquote"></slot>
                    <slot></slot>
                </div>
            </div>
        </section>
    `
);


/***/ }),

/***/ "./sections/icon-catchprases/icon-catchphrases.ts":
/*!********************************************************!*\
  !*** ./sections/icon-catchprases/icon-catchphrases.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");

_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "icon-catchprases__item",
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
_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "icon-catchprases",
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

    `
);


/***/ }),

/***/ "./sections/image-slider/image-slider.ts":
/*!***********************************************!*\
  !*** ./sections/image-slider/image-slider.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");

_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "image-slider__carousel--slide",
  // language=HTML
  `
        <div class="tjs-image-slider__carousel--slide">
            <div class="tjs-image-slider__carousel--slide__image">
                <slot data-select="img"></slot>
            </div>
            <div class="tjs-image-slider__carousel--slide__links">
                <slot data-select="p"></slot>
            </div>
        </div>
    `
);
_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "image-slider",
  // language=HTML
  `
        <section class="tjs-image-slider :: mobile :md:">
            <div class="tjs-wrapper container-fluid">
                <div class="tjs-image-slider__content--container">
                    <img loading="lazy" class="tjs-image-slider__stars--left" src="https://cdn.leuffen.de/global/themejs-sys/elements/stars.svg">
                    <img loading="lazy" class="tjs-image-slider__stars--right" src="https://cdn.leuffen.de/global/themejs-sys/elements/stars.svg">
                    <div class="tjs-image-slider__content">
                        <div class="tjs-image-slider__content--headline">
                            <slot><slot>
                        </div>
                        <div class="tjs-image-slider__content--row">
                            <div class="tjs-image-slider__content--col tjs-image-slider__carousel">
                                <div class="tjs-image-slider__carousel--navigation-prev">
                                    <img loading="lazy" src="https://cdn.leuffen.de/global/themejs-sys/elements//arrow-left.svg" width="500" height="500">
                                </div>
                                <div class="tjs-image-slider__carousel--navigation-next">
                                    <img loading="lazy" src="https://cdn.leuffen.de/global/themejs-sys/elements/arrow-right.svg" width="500" height="500">
                                </div>
                                <div class="tjs-image-slider__carousel--nav-points">
                                    <div class="tjs-image-slider__carousel--nav-points__point active" data-id="1"></div>
                                    <div class="tjs-image-slider__carousel--nav-points__point" data-id="2"></div>
                                    <div class="tjs-image-slider__carousel--nav-points__point" data-id="3"></div>
                                </div>

                                <liscom-slider class="tjs-image-slider__carousel--slides">
                                    <slot data-select=".children > *" data-child-layout="use: #image-slider__carousel--slide;"></slot>
                                </liscom-slider>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
);


/***/ }),

/***/ "./sections/key-figures/key-figures.ts":
/*!*********************************************!*\
  !*** ./sections/key-figures/key-figures.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");

_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "key-figures",
  // language=HTML
  `
   <section class="tjs-key-figures :: mobile :lg:">
        <div class="tjs-wrapper container-fluid">
            <div class="tjs-key-figures__content--container">
                <div class="tjs-key-figures__content--bg-image">
                    <img alt="Background" loading="lazy" src="https://cdn.leuffen.de/global/themejs-sys/elements/bar-stripes.svg" width="1900" height="500">
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
    `
);


/***/ }),

/***/ "./sections/newsletter/newsletter.ts":
/*!*******************************************!*\
  !*** ./sections/newsletter/newsletter.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");

_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "newsletter",
  // language=HTML
  `
        <section class="tjs-newsletter dark :: mobile :lg:">
            <div class="tjs__wrapper container">
                <div class="tjs-newsletter__content--container">
                    <div class="tjs-newsletter__col tjs-newsletter__text">
                        <slot data-select="h2"></slot>
                        <slot></slot>
                    </div>
                    <div class="tjs-newsletter__col tjs-newsletter__input-wrapper">
                        <form data-micx-formmail-preset="default" data-micx-formmail-sent-message="E-Mail erfolgreich gesendet!">
                            <div class="input-group">
                                <slot data-select="input"></slot>
                                <span class="input-group-text inside">Anmelden</span>
                            </div>
                            <span class="input-group-text outside">Anmelden</span>
                        </form>
                    </div>

                    <div class="tjs-newsletter__disturber-stars">
                        <img loading="lazy" class="tjs-newsletter__stars--left" src="https://cdn.leuffen.de/global/themejs-sys/elements/stars.svg">
                        <img loading="lazy" class="tjs-newsletter__stars--right" src="https://cdn.leuffen.de/global/themejs-sys/elements/stars.svg">
                    </div>
                </div>
            </div>
        </section>
    `
);


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
/* harmony import */ var _cols_2_cols_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cols-2/cols-2 */ "./sections/cols-2/cols-2.ts");
/* harmony import */ var _cols_2_cols_2_bg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cols-2/cols-2-bg */ "./sections/cols-2/cols-2-bg.ts");
/* harmony import */ var _key_figures_key_figures__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./key-figures/key-figures */ "./sections/key-figures/key-figures.ts");
/* harmony import */ var _cards_slider_cards_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cards-slider/cards-slider */ "./sections/cards-slider/cards-slider.ts");
/* harmony import */ var _customer_reviews_customer_reviews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer-reviews/customer-reviews */ "./sections/customer-reviews/customer-reviews.ts");
/* harmony import */ var _customer_reviews_customer_reviews_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customer-reviews/customer-reviews-slider */ "./sections/customer-reviews/customer-reviews-slider.ts");
/* harmony import */ var _customer_reviews_customer_reviews_quote__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customer-reviews/customer-reviews-quote */ "./sections/customer-reviews/customer-reviews-quote.ts");
/* harmony import */ var _headline_headline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./headline/headline */ "./sections/headline/headline.ts");
/* harmony import */ var _image_slider_image_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./image-slider/image-slider */ "./sections/image-slider/image-slider.ts");
/* harmony import */ var _cta1_cta1__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cta1/cta1 */ "./sections/cta1/cta1.ts");
/* harmony import */ var _text_container_text_container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./text-container/text-container */ "./sections/text-container/text-container.ts");
/* harmony import */ var _contact_form_contact_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact-form/contact-form */ "./sections/contact-form/contact-form.ts");
/* harmony import */ var _google_map_google_map__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./google-map/google-map */ "./sections/google-map/google-map.ts");
/* harmony import */ var _box_box_price__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./box/box-price */ "./sections/box/box-price.ts");
/* harmony import */ var _box_box_white__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./box/box-white */ "./sections/box/box-white.ts");
/* harmony import */ var _filter_images_filter_images__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./filter-images/filter-images */ "./sections/filter-images/filter-images.ts");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./footer/footer */ "./sections/footer/footer.ts");
/* harmony import */ var _footer_copyright_footer_copyright__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./footer-copyright/footer-copyright */ "./sections/footer-copyright/footer-copyright.ts");
/* harmony import */ var _newsletter_newsletter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./newsletter/newsletter */ "./sections/newsletter/newsletter.ts");
/* harmony import */ var _contact_contact__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./contact/contact */ "./sections/contact/contact.ts");


























/***/ }),

/***/ "./sections/service-slider/service-slider.ts":
/*!***************************************************!*\
  !*** ./sections/service-slider/service-slider.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
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



_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "service-slider__carousel--slide",
  // language=HTML
  `
        <swiper-slide class="tjs-service-slider__carousel--slide swiper-slide">
            <div class="tjs-service-slider__carousel--slide__image">
                <slot data-select="img"></slot>
            </div>
            <div class="tjs-service-slider__carousel--slide__text">
                <slot></slot>
            </div>
        </swiper-slide>`
);
_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "service-slider",
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
                            <div class="tjs-service-slider__content--col tjs-service-slider__carousel swiper">
                                <div class="tjs-service-slider__carousel--navigation-prev">
                                    <img loading="lazy" src="https://cdn.leuffen.de/global/themejs-sys/elements/arrow-left.svg">
                                </div>
                                <div class="tjs-service-slider__carousel--navigation-next">
                                    <img loading="lazy" src="https://cdn.leuffen.de/global/themejs-sys/elements/arrow-right.svg">
                                </div>
                                <div class="tjs-service-slider__carousel--nav-points"></div>


                                <slot class="swiper-wrapper" data-select=".children > *" data-child-layout="use: #service-slider__carousel--slide;" style="display:block;"></slot>

                            </div>
                            <div class="tjs-service-slider__content--col tjs-service-slider__content--col__mobile-button">
                                <a href="#" class="btn btn-outline-primary">Alle Leistungen entdecken</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
  {},
  {
    onAfterAllTemplatesConnectedCallback: (element) => __async(undefined, null, function* () {
      yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_2__.ka_sleep)(1e3);
      const swiperEl = element.querySelector(".swiper");
      if (!swiperEl) {
        throw new Error("swiperEl not found");
      }
      const swiperParams = {
        spaceBetween: 35,
        loop: true,
        slidesPerView: 1.2,
        pagination: {
          el: ".tjs-service-slider__carousel--nav-points",
          clickable: true,
          bulletClass: "tjs-service-slider__carousel--nav-points__point"
        },
        breakpoints: {
          640: {
            slidesPerView: 1.4
          },
          1024: {
            slidesPerView: 1.5
          },
          1680: {
            slidesPerView: 2.5
          }
        },
        navigation: {
          nextEl: ".tjs-service-slider__carousel--navigation-next",
          prevEl: ".tjs-service-slider__carousel--navigation-prev"
        }
      };
      console.log("Swiper", swiperEl);
      const swiper = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"](swiperEl, swiperParams);
    })
  }
);


/***/ }),

/***/ "./sections/text-container/text-container.ts":
/*!***************************************************!*\
  !*** ./sections/text-container/text-container.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");

_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate(
  "text-container",
  // language=HTML
  `
        <section class="tjs-text-container  :: mobile :md:">
            <div class="tjs-wrapper container">
                <slot></slot>
            </div>
        </section>

    `
);


/***/ }),

/***/ "./node_modules/swiper/shared/ssr-window.esm.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/shared/ssr-window.esm.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ getWindow),
/* harmony export */   g: () => (/* binding */ getDocument)
/* harmony export */ });
/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */
/* eslint-disable no-param-reassign */
function isObject(obj) {
  return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
}
function extend(target, src) {
  if (target === void 0) {
    target = {};
  }
  if (src === void 0) {
    src = {};
  }
  Object.keys(src).forEach(key => {
    if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}
const ssrDocument = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: ''
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {}
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  }
};
function getDocument() {
  const doc = typeof document !== 'undefined' ? document : {};
  extend(doc, ssrDocument);
  return doc;
}
const ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ''
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {}
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return '';
      }
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === 'undefined') {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === 'undefined') {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  const win = typeof window !== 'undefined' ? window : {};
  extend(win, ssrWindow);
  return win;
}




/***/ }),

/***/ "./node_modules/swiper/shared/swiper-core.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/shared/swiper-core.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ Swiper),
/* harmony export */   d: () => (/* binding */ defaults)
/* harmony export */ });
/* harmony import */ var _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



let support;
function calcSupport() {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  return {
    smoothScroll: document.documentElement && document.documentElement.style && 'scrollBehavior' in document.documentElement.style,
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}

let deviceCached;
function calcDevice(_temp) {
  let {
    userAgent
  } = _temp === void 0 ? {} : _temp;
  const support = getSupport();
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const platform = window.navigator.platform;
  const ua = userAgent || window.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === 'Win32';
  let macos = platform === 'MacIntel';

  // iPadOs 13 fix
  const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
  if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  }

  // Android
  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }

  // Export object
  return device;
}
function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}

let browser;
function calcBrowser() {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let needPerspectiveFix = false;
  function isSafari() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }
  if (isSafari()) {
    const ua = String(window.navigator.userAgent);
    if (ua.includes('Version/')) {
      const [major, minor] = ua.split('Version/')[1].split(' ')[0].split('.').map(num => Number(num));
      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
    }
  }
  return {
    isSafari: needPerspectiveFix || isSafari(),
    needPerspectiveFix,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}

function Resize(_ref) {
  let {
    swiper,
    on,
    emit
  } = _ref;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('beforeResize');
    emit('resize');
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver(entries => {
      animationFrame = window.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(_ref2 => {
          let {
            contentBoxSize,
            contentRect,
            target
          } = _ref2;
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('orientationchange');
  };
  on('init', () => {
    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
      createObserver();
      return;
    }
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', orientationChangeHandler);
  });
  on('destroy', () => {
    removeObserver();
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('orientationchange', orientationChangeHandler);
  });
}

function Observer(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const observers = [];
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const attach = function (target, options) {
    if (options === void 0) {
      options = {};
    }
    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    const observer = new ObserverFunc(mutations => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (swiper.__preventObserver__) return;
      if (mutations.length === 1) {
        emit('observerUpdate', mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate() {
        emit('observerUpdate', mutations[0]);
      };
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(swiper.hostEl);
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    }
    // Observe container
    attach(swiper.hostEl, {
      childList: swiper.params.observeSlideChildren
    });

    // Observe wrapper
    attach(swiper.wrapperEl, {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach(observer => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on('init', init);
  on('destroy', destroy);
}

/* eslint-disable no-underscore-dangle */

var eventsEmitter = {
  on(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(event => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    function onceHandler() {
      self.off(events, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      handler.apply(self, args);
    }
    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }
    return self;
  },
  off(events, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(event => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit() {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events;
    let data;
    let context;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(event => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(eventHandler => {
          eventHandler.apply(context, [event, ...data]);
        });
      }
      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(eventHandler => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};

function updateSize() {
  const swiper = this;
  let width;
  let height;
  const el = swiper.el;
  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = el.clientWidth;
  }
  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = el.clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }

  // Subtract paddings
  width = width - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el, 'padding-left') || 0, 10) - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el, 'padding-right') || 0, 10);
  height = height - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el, 'padding-top') || 0, 10) - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el, 'padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}

function updateSlides() {
  const swiper = this;
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    wrapperEl,
    slidesEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === 'undefined') {
    return;
  }
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  swiper.virtualSize = -spaceBetween;

  // reset margins
  slides.forEach(slideEl => {
    if (rtl) {
      slideEl.style.marginLeft = '';
    } else {
      slideEl.style.marginRight = '';
    }
    slideEl.style.marginBottom = '';
    slideEl.style.marginTop = '';
  });

  // reset cssMode offsets
  if (params.centeredSlides && params.cssMode) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-before', '');
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-after', '');
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slides);
  } else if (swiper.grid) {
    swiper.grid.unsetSlides();
  }

  // Calc slides
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
    return typeof params.breakpoints[key].slidesPerView !== 'undefined';
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    let slide;
    if (slides[i]) slide = slides[i];
    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide, slides);
    }
    if (slides[i] && (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(slide, 'display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      if (shouldResetSlideSize) {
        slides[i].style[swiper.getDirectionLabel('width')] = ``;
      }
      const slideStyles = getComputedStyle(slide);
      const currentTransform = slide.style.transform;
      const currentWebKitTransform = slide.style.webkitTransform;
      if (currentTransform) {
        slide.style.transform = 'none';
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = 'none';
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)(slide, 'width', true) : (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)(slide, 'height', true);
      } else {
        // eslint-disable-next-line
        const width = getDirectionPropertyValue(slideStyles, 'width');
        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        const boxSizing = slideStyles.getPropertyValue('box-sizing');
        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide.style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);
      if (slides[i]) {
        slides[i].style[swiper.getDirectionLabel('width')] = `${slideSize}px`;
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (params.setWrapperSize) {
    wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid);
  }

  // Remove last grid elements depending on width
  if (!params.centeredSlides) {
    const newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + spaceBetween;
    if (params.slidesPerGroup > 1) {
      const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
      const groupSize = size * params.slidesPerGroup;
      for (let i = 0; i < groups; i += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
      }
    }
    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
      swiper.virtualSize += size;
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];
  if (spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? 'marginLeft' : swiper.getDirectionLabel('marginRight');
    slides.filter((_, slideIndex) => {
      if (!params.cssMode || params.loop) return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).forEach(slideEl => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(snap => {
      if (snap <= 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  swiper.emit('slidesUpdated');
  if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass);
    }
  }
}

function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;
  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = index => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)];
    }
    return swiper.slides[index];
  };
  // Find slides currently in view
  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || []).forEach(slide => {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }

  // Find new height from highest slide in view
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }

  // Update Height
  if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}

function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  // eslint-disable-next-line
  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
  }
}

function updateSlidesProgress(translate) {
  if (translate === void 0) {
    translate = this && this.translate || 0;
  }
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate;

  // Visible Slides
  slides.forEach(slideEl => {
    slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass);
  });
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    let slideOffset = slide.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide);
      swiper.visibleSlidesIndexes.push(i);
      slides[i].classList.add(params.slideVisibleClass);
    }
    if (isFullyVisible) {
      slides[i].classList.add(params.slideFullyVisibleClass);
    }
    slide.progress = rtl ? -slideProgress : slideProgress;
    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}

function updateProgress(translate) {
  const swiper = this;
  if (typeof translate === 'undefined') {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    // eslint-disable-next-line
    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd,
    progressLoop
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
    const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0;
    isEnd = isEndRounded || progress >= 1;
    if (isBeginningRounded) progress = 0;
    if (isEndRounded) progress = 1;
  }
  if (params.loop) {
    const firstSlideIndex = swiper.getSlideIndexByData(0);
    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
    const translateAbs = Math.abs(translate);
    if (translateAbs >= firstSlideTranslate) {
      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
    } else {
      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
    }
    if (progressLoop > 1) progressLoop -= 1;
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }
  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }
  swiper.emit('progress', progress);
}

function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const getFilteredSlide = selector => {
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  slides.forEach(slideEl => {
    slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
  });
  let activeSlide;
  let prevSlide;
  let nextSlide;
  if (isVirtual) {
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
      if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
      if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else {
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    }
  } else {
    if (gridEnabled) {
      activeSlide = slides.filter(slideEl => slideEl.column === activeIndex)[0];
      nextSlide = slides.filter(slideEl => slideEl.column === activeIndex + 1)[0];
      prevSlide = slides.filter(slideEl => slideEl.column === activeIndex - 1)[0];
    } else {
      activeSlide = slides[activeIndex];
    }
  }
  if (activeSlide) {
    // Active classes
    activeSlide.classList.add(params.slideActiveClass);
    if (gridEnabled) {
      if (nextSlide) {
        nextSlide.classList.add(params.slideNextClass);
      }
      if (prevSlide) {
        prevSlide.classList.add(params.slidePrevClass);
      }
    } else {
      // Next Slide
      nextSlide = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.o)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !nextSlide) {
        nextSlide = slides[0];
      }
      if (nextSlide) {
        nextSlide.classList.add(params.slideNextClass);
      }

      // Prev Slide
      prevSlide = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !prevSlide === 0) {
        prevSlide = slides[slides.length - 1];
      }
      if (prevSlide) {
        prevSlide.classList.add(params.slidePrevClass);
      }
    }
  }
  swiper.emitSlidesClasses();
}

const processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  const slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    if (!lazyEl && swiper.isElement) {
      if (slideEl.shadowRoot) {
        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      } else {
        // init later
        requestAnimationFrame(() => {
          if (slideEl.shadowRoot) {
            lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (lazyEl) lazyEl.remove();
          }
        });
      }
    }
    if (lazyEl) lazyEl.remove();
  }
};
const unlazy = (swiper, index) => {
  if (!swiper.slides[index]) return;
  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  if (imageEl) imageEl.removeAttribute('loading');
};
const preload = swiper => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  let amount = swiper.params.lazyPreloadPrevNext;
  const len = swiper.slides.length;
  if (!len || !amount || amount < 0) return;
  amount = Math.min(amount, len);
  const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
  const activeIndex = swiper.activeIndex;
  if (swiper.params.grid && swiper.params.grid.rows > 1) {
    const activeColumn = activeIndex;
    const preloadColumns = [activeColumn - amount];
    preloadColumns.push(...Array.from({
      length: amount
    }).map((_, i) => {
      return activeColumn + slidesPerView + i;
    }));
    swiper.slides.forEach((slideEl, i) => {
      if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
    });
    return;
  }
  const slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind || swiper.params.loop) {
    for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
      const realIndex = (i % len + len) % len;
      if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
  } else {
    for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
      if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
        unlazy(swiper, i);
      }
    }
  }
};

function getActiveIndexByTranslate(swiper) {
  const {
    slidesGrid,
    params
  } = swiper;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  let activeIndex;
  for (let i = 0; i < slidesGrid.length; i += 1) {
    if (typeof slidesGrid[i + 1] !== 'undefined') {
      if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
        activeIndex = i;
      } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
        activeIndex = i + 1;
      }
    } else if (translate >= slidesGrid[i]) {
      activeIndex = i;
    }
  }
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
  }
  return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  const getVirtualRealIndex = aIndex => {
    let realIndex = aIndex - swiper.virtual.slidesBefore;
    if (realIndex < 0) {
      realIndex = swiper.virtual.slides.length + realIndex;
    }
    if (realIndex >= swiper.virtual.slides.length) {
      realIndex -= swiper.virtual.slides.length;
    }
    return realIndex;
  };
  if (typeof activeIndex === 'undefined') {
    activeIndex = getActiveIndexByTranslate(swiper);
  }
  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex && !swiper.params.loop) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }
    return;
  }
  if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
    swiper.realIndex = getVirtualRealIndex(activeIndex);
    return;
  }
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;

  // Get real index
  let realIndex;
  if (swiper.virtual && params.virtual.enabled && params.loop) {
    realIndex = getVirtualRealIndex(activeIndex);
  } else if (gridEnabled) {
    const firstSlideInColumn = swiper.slides.filter(slideEl => slideEl.column === activeIndex)[0];
    let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute('data-swiper-slide-index'), 10);
    if (Number.isNaN(activeSlideIndex)) {
      activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
    }
    realIndex = Math.floor(activeSlideIndex / params.grid.rows);
  } else if (swiper.slides[activeIndex]) {
    const slideIndex = swiper.slides[activeIndex].getAttribute('data-swiper-slide-index');
    if (slideIndex) {
      realIndex = parseInt(slideIndex, 10);
    } else {
      realIndex = activeIndex;
    }
  } else {
    realIndex = activeIndex;
  }
  Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  if (swiper.initialized) {
    preload(swiper);
  }
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }
    swiper.emit('slideChange');
  }
}

function updateClickedSlide(el, path) {
  const swiper = this;
  const params = swiper.params;
  let slide = el.closest(`.${params.slideClass}, swiper-slide`);
  if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) {
    [...path.slice(path.indexOf(el) + 1, path.length)].forEach(pathEl => {
      if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
        slide = pathEl;
      }
    });
  }
  let slideFound = false;
  let slideIndex;
  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide && slideFound) {
    swiper.clickedSlide = slide;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};

function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? 'x' : 'y';
  }
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate,
    wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }
  if (params.cssMode) {
    return translate;
  }
  let currentTranslate = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(wrapperEl, axis);
  currentTranslate += swiper.cssOverflowAdjustment();
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

function setTranslate(translate, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x -= swiper.cssOverflowAdjustment();
    } else {
      y -= swiper.cssOverflowAdjustment();
    }
    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  }

  // Check if we need to update progress
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }
  swiper.emit('setTranslate', swiper.translate, byController);
}

function minTranslate() {
  return -this.snapGrid[0];
}

function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
  if (translate === void 0) {
    translate = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (translateBounds === void 0) {
    translateBounds = true;
  }
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate = swiper.minTranslate();
  const maxTranslate = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate;

  // Update progress
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: -newTranslate,
        behavior: 'smooth'
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }
      swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}

var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};

function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
    swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : '';
  }
  swiper.emit('setTransition', duration, byController);
}

function transitionEmit(_ref) {
  let {
    swiper,
    runCallbacks,
    direction,
    step
  } = _ref;
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === 'next') {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}

function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'Start'
  });
}

function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'End'
  });
}

var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};

function slideTo(index, speed, runCallbacks, internal, initial) {
  if (index === void 0) {
    index = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === 'string') {
    index = parseInt(index, 10);
  }
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
    return false;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  const translate = -snapGrid[snapIndex];
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  }
  // Directions locks
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) {
        return false;
      }
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  // Update progress
  swiper.updateProgress(translate);
  let direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset';

  // Update Index
  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex);
    // Update Height
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }
    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate : -translate;
    if (speed === 0) {
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = 'none';
        swiper._immediateVirtual = true;
      }
      if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
        swiper._cssModeVirtualInitialSet = true;
        requestAnimationFrame(() => {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        });
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      }
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = '';
          swiper._immediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)({
          swiper,
          targetPosition: t,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: t,
        behavior: 'smooth'
      });
    }
    return true;
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit('beforeTransitionStart', speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}

function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === 'string') {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual.enabled) {
      // eslint-disable-next-line
      newIndex = newIndex + swiper.virtual.slidesBefore;
    } else {
      let targetSlideIndex;
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        targetSlideIndex = swiper.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex)[0].column;
      } else {
        targetSlideIndex = swiper.getSlideIndexByData(newIndex);
      }
      const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
      const {
        centeredSlides
      } = swiper.params;
      let slidesPerView = swiper.params.slidesPerView;
      if (slidesPerView === 'auto') {
        slidesPerView = swiper.slidesPerViewDynamic();
      } else {
        slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
        if (centeredSlides && slidesPerView % 2 === 0) {
          slidesPerView = slidesPerView + 1;
        }
      }
      let needLoopFix = cols - targetSlideIndex < slidesPerView;
      if (centeredSlides) {
        needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
      }
      if (needLoopFix) {
        const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? 'prev' : 'next' : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? 'next' : 'prev';
        swiper.loopFix({
          direction,
          slideTo: true,
          activeSlideIndex: direction === 'next' ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
          slideRealIndex: direction === 'next' ? swiper.realIndex : undefined
        });
      }
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        newIndex = swiper.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex)[0].column;
      } else {
        newIndex = swiper.getSlideIndexByData(newIndex);
      }
    }
  }
  requestAnimationFrame(() => {
    swiper.slideTo(newIndex, speed, runCallbacks, internal);
  });
  return swiper;
}

/* eslint no-unused-vars: "off" */
function slideNext(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled) return swiper;
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'next'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
    if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
      });
      return true;
    }
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slidePrev(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled) return swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'prev'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  const translate = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === 'undefined' && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        // prevSnap = snap;
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== 'undefined') {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
    requestAnimationFrame(() => {
      swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    });
    return true;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideReset(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (threshold === void 0) {
    threshold = 0.5;
  }
  const swiper = this;
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

function slideToClickedSlide() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = swiper.getSlideIndex((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};

function loopCreate(slideRealIndex) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  const initSlides = () => {
    const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
    slides.forEach((el, index) => {
      el.setAttribute('data-swiper-slide-index', index);
    });
  };
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
  const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
  const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
  const addBlankSlides = amountOfSlides => {
    for (let i = 0; i < amountOfSlides; i += 1) {
      const slideEl = swiper.isElement ? (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('swiper-slide', [params.slideBlankClass]) : (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', [params.slideClass, params.slideBlankClass]);
      swiper.slidesEl.append(slideEl);
    }
  };
  if (shouldFillGroup) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.r)('Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
    }
    initSlides();
  } else if (shouldFillGrid) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.r)('Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
    }
    initSlides();
  } else {
    initSlides();
  }
  swiper.loopFix({
    slideRealIndex,
    direction: params.centeredSlides ? undefined : 'next'
  });
}

function loopFix(_temp) {
  let {
    slideRealIndex,
    slideTo = true,
    direction,
    setTranslate,
    activeSlideIndex,
    byController,
    byMousewheel
  } = _temp === void 0 ? {} : _temp;
  const swiper = this;
  if (!swiper.params.loop) return;
  swiper.emit('beforeLoopFix');
  const {
    slides,
    allowSlidePrev,
    allowSlideNext,
    slidesEl,
    params
  } = swiper;
  const {
    centeredSlides
  } = params;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual.enabled) {
    if (slideTo) {
      if (!params.centeredSlides && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
      } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
        swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit('loopFix');
    return;
  }
  let slidesPerView = params.slidesPerView;
  if (slidesPerView === 'auto') {
    slidesPerView = swiper.slidesPerViewDynamic();
  } else {
    slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
    if (centeredSlides && slidesPerView % 2 === 0) {
      slidesPerView = slidesPerView + 1;
    }
  }
  const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
  let loopedSlides = slidesPerGroup;
  if (loopedSlides % slidesPerGroup !== 0) {
    loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
  }
  loopedSlides += params.loopAdditionalSlides;
  swiper.loopedSlides = loopedSlides;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (slides.length < slidesPerView + loopedSlides) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.r)('Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters');
  } else if (gridEnabled && params.grid.fill === 'row') {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.r)('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
  }
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  let activeIndex = swiper.activeIndex;
  if (typeof activeSlideIndex === 'undefined') {
    activeSlideIndex = swiper.getSlideIndex(slides.filter(el => el.classList.contains(params.slideActiveClass))[0]);
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === 'next' || !direction;
  const isPrev = direction === 'prev' || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
  const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
  const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === 'undefined' ? -slidesPerView / 2 + 0.5 : 0);
  // prepend last slides before start
  if (activeColIndexWithShift < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
    for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        const colIndexToPrepend = cols - index - 1;
        for (let i = slides.length - 1; i >= 0; i -= 1) {
          if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
        }
        // slides.forEach((slide, slideIndex) => {
        //   if (slide.column === colIndexToPrepend) prependSlidesIndexes.push(slideIndex);
        // });
      } else {
        prependSlidesIndexes.push(cols - index - 1);
      }
    }
  } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
    slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
    for (let i = 0; i < slidesAppended; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        slides.forEach((slide, slideIndex) => {
          if (slide.column === index) appendSlidesIndexes.push(slideIndex);
        });
      } else {
        appendSlidesIndexes.push(index);
      }
    }
  }
  swiper.__preventObserver__ = true;
  requestAnimationFrame(() => {
    swiper.__preventObserver__ = false;
  });
  if (isPrev) {
    prependSlidesIndexes.forEach(index => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.prepend(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach(index => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.append(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === 'auto') {
    swiper.updateSlides();
  } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
    swiper.slides.forEach((slide, slideIndex) => {
      swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
    });
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (slideTo) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
          if (setTranslate) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        if (setTranslate) {
          const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
          swiper.touchEventsData.currentTranslate = swiper.translate;
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
          if (setTranslate) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
        swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
      }
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.controller && swiper.controller.control && !byController) {
    const loopParams = {
      slideRealIndex,
      direction,
      setTranslate,
      activeSlideIndex,
      byController: true
    };
    if (Array.isArray(swiper.controller.control)) {
      swiper.controller.control.forEach(c => {
        if (!c.destroyed && c.params.loop) c.loopFix({
          ...loopParams,
          slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
        });
      });
    } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
      swiper.controller.control.loopFix({
        ...loopParams,
        slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
      });
    }
  }
  swiper.emit('loopFix');
}

function loopDestroy() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  swiper.recalcSlides();
  const newSlidesOrder = [];
  swiper.slides.forEach(slideEl => {
    const index = typeof slideEl.swiperSlideIndex === 'undefined' ? slideEl.getAttribute('data-swiper-slide-index') * 1 : slideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  });
  swiper.slides.forEach(slideEl => {
    slideEl.removeAttribute('data-swiper-slide-index');
  });
  newSlidesOrder.forEach(slideEl => {
    slidesEl.append(slideEl);
  });
  swiper.recalcSlides();
  swiper.slideTo(swiper.realIndex, 0);
}

var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};

function setGrabCursor(moving) {
  const swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  el.style.cursor = 'move';
  el.style.cursor = moving ? 'grabbing' : 'grab';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

function unsetGrabCursor() {
  const swiper = this;
  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};

// Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }
  function __closestFrom(el) {
    if (!el || el === (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)() || el === (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function preventEdgeSwipe(swiper, event, startX) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const {
    params
  } = swiper;
  const edgeSwipeDetection = params.edgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
      return true;
    }
    return false;
  }
  return true;
}
function onTouchStart(event) {
  const swiper = this;
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  const data = swiper.touchEventsData;
  if (e.type === 'pointerdown') {
    if (data.pointerId !== null && data.pointerId !== e.pointerId) {
      return;
    }
    data.pointerId = e.pointerId;
  } else if (e.type === 'touchstart' && e.targetTouches.length === 1) {
    data.touchId = e.targetTouches[0].identifier;
  }
  if (e.type === 'touchstart') {
    // don't proceed touch event
    preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
    return;
  }
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === 'mouse') return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let targetEl = e.target;
  if (params.touchEventsTarget === 'wrapper') {
    if (!swiper.wrapperEl.contains(targetEl)) return;
  }
  if ('which' in e && e.which === 3) return;
  if ('button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;

  // change target el for shadow root component
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
  // eslint-disable-next-line
  const eventPath = e.composedPath ? e.composedPath() : e.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    targetEl = eventPath[0];
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);

  // use closestElement for shadow root element to get the actual closest for nested shadow root element
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!targetEl.closest(params.swipeHandler)) return;
  }
  touches.currentX = e.pageX;
  touches.currentY = e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;

  // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  if (!preventEdgeSwipe(swiper, e, startX)) {
    return;
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;
  let preventDefault = true;
  if (targetEl.matches(data.focusableElements)) {
    preventDefault = false;
    if (targetEl.nodeName === 'SELECT') {
      data.isTouched = false;
    }
  }
  if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) {
    document.activeElement.blur();
  }
  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
    e.preventDefault();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit('touchStart', e);
}

function onTouchMove(event) {
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === 'mouse') return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (e.type === 'pointermove') {
    if (data.touchId !== null) return; // return from pointer if we use touch
    const id = e.pointerId;
    if (id !== data.pointerId) return;
  }
  let targetTouch;
  if (e.type === 'touchmove') {
    targetTouch = [...e.changedTouches].filter(t => t.identifier === data.touchId)[0];
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  } else {
    targetTouch = e;
  }
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    return;
  }
  const pageX = targetTouch.pageX;
  const pageY = targetTouch.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!e.target.matches(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
    }
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }
  if (document.activeElement) {
    if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }
  touches.previousX = touches.currentX;
  touches.previousY = touches.currentY;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
  if (typeof data.isScrolling === 'undefined') {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }
  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  let diff = swiper.isHorizontal() ? diffX : diffY;
  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  if (params.oneWayMovement) {
    diff = Math.abs(diff) * (rtl ? 1 : -1);
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
  }
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) {
    diff = -diff;
    touchesDiff = -touchesDiff;
  }
  const prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';
  const isLoop = swiper.params.loop && !params.cssMode;
  const allowLoopFix = swiper.touchesDirection === 'next' && swiper.allowSlideNext || swiper.touchesDirection === 'prev' && swiper.allowSlidePrev;
  if (!data.isMoved) {
    if (isLoop && allowLoopFix) {
      swiper.loopFix({
        direction: swiper.swipeDirection
      });
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      const evt = new window.CustomEvent('transitionend', {
        bubbles: true,
        cancelable: true
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data.allowMomentumBounce = false;
    // Grab Cursor
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit('sliderFirstMove', e);
  }
  let loopFixed;
  new Date().getTime();
  if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
    Object.assign(touches, {
      startX: pageX,
      startY: pageY,
      currentX: pageX,
      currentY: pageY,
      startTranslate: data.currentTranslate
    });
    data.loopSwapReset = true;
    data.startTranslate = data.currentTranslate;
    return;
  }
  swiper.emit('sliderMove', e);
  data.isMoved = true;
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] : swiper.minTranslate())) {
      swiper.loopFix({
        direction: 'prev',
        setTranslate: true,
        activeSlideIndex: 0
      });
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      }
    }
  } else if (diff < 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] : swiper.maxTranslate())) {
      swiper.loopFix({
        direction: 'next',
        setTranslate: true,
        activeSlideIndex: swiper.slides.length - (params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
      });
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }
    }
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }

  // Directions locks
  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }

  // Threshold
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode) return;

  // Update active index in free mode
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  // Update progress
  swiper.updateProgress(data.currentTranslate);
  // Update translate
  swiper.setTranslate(data.currentTranslate);
}

function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let targetTouch;
  const isTouchEvent = e.type === 'touchend' || e.type === 'touchcancel';
  if (!isTouchEvent) {
    if (data.touchId !== null) return; // return from pointer if we use touch
    if (e.pointerId !== data.pointerId) return;
    targetTouch = e;
  } else {
    targetTouch = [...e.changedTouches].filter(t => t.identifier === data.touchId)[0];
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  }
  if (['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(e.type)) {
    const proceed = ['pointercancel', 'contextmenu'].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  data.pointerId = null;
  data.touchId = null;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === 'mouse') return;
  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  // Return Grab Cursor
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }

  // Time diff
  const touchEndTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  const timeDiff = touchEndTime - data.touchStartTime;

  // Tap, doubleTap, Click
  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
    swiper.emit('tap click', e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }
  data.lastClickTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }

  // Find current slide
  const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment] !== 'undefined') {
      if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment] - slidesGrid[i];
      }
    } else if (swipeToLast || currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  // Find current slide size
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return;

  // Breakpoints
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }

  // Save locks
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

  // Disable locks on resize
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  const isVirtualLoop = isVirtual && params.loop;
  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    clearTimeout(swiper.autoplay.resizeTimeout);
    swiper.autoplay.resizeTimeout = setTimeout(() => {
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.resume();
      }
    }, 500);
  }
  // Return locks after resize
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  // eslint-disable-next-line
  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit('setTranslate', swiper.translate, false);
}

function onLoad(e) {
  const swiper = this;
  processLazyPreloader(swiper, e.target);
  if (swiper.params.cssMode || swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight) {
    return;
  }
  swiper.update();
}

function onDocumentTouchStart() {
  const swiper = this;
  if (swiper.documentTouchHandlerProceeded) return;
  swiper.documentTouchHandlerProceeded = true;
  if (swiper.params.touchReleaseOnEdges) {
    swiper.el.style.touchAction = 'auto';
  }
}

const events = (swiper, method) => {
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const {
    params,
    el,
    wrapperEl,
    device
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
  const swiperMethod = method;

  // Touch Events
  document[domMethod]('touchstart', swiper.onDocumentTouchStart, {
    passive: false,
    capture
  });
  el[domMethod]('touchstart', swiper.onTouchStart, {
    passive: false
  });
  el[domMethod]('pointerdown', swiper.onTouchStart, {
    passive: false
  });
  document[domMethod]('touchmove', swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]('pointermove', swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]('touchend', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerup', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointercancel', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('touchcancel', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerout', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerleave', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('contextmenu', swiper.onTouchEnd, {
    passive: true
  });

  // Prevent Links Clicks
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]('click', swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]('scroll', swiper.onScroll);
  }

  // Resize handler
  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
  } else {
    swiper[swiperMethod]('observerUpdate', onResize, true);
  }

  // Images loader
  el[domMethod]('load', swiper.onLoad, {
    capture: true
  });
};
function attachEvents() {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  swiper.onLoad = onLoad.bind(swiper);
  events(swiper, 'on');
}
function detachEvents() {
  const swiper = this;
  events(swiper, 'off');
}
var events$1 = {
  attachEvents,
  detachEvents
};

const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
  const swiper = this;
  const {
    realIndex,
    initialized,
    params,
    el
  } = swiper;
  const breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;

  // Get breakpoint for window width and update parameters
  const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    el.classList.add(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
      el.classList.add(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }

  // Toggle navigation, pagination, scrollbar
  ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
    if (typeof breakpointParams[prop] === 'undefined') return;
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  const wasLoop = params.loop;
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  const hasLoop = swiper.params.loop;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);
  if (initialized) {
    if (needsReLoop) {
      swiper.loopDestroy();
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (!wasLoop && hasLoop) {
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (wasLoop && !hasLoop) {
      swiper.loopDestroy();
    }
  }
  swiper.emit('breakpoint', breakpointParams);
}

function getBreakpoint(breakpoints, base, containerEl) {
  if (base === void 0) {
    base = 'window';
  }
  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  let breakpoint = false;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints).map(point => {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];
    if (base === 'window') {
      if (window.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || 'max';
}

var breakpoints = {
  setBreakpoint,
  getBreakpoint
};

function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach(item => {
    if (typeof item === 'object') {
      Object.keys(item).forEach(classNames => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    el,
    device
  } = swiper;
  // prettier-ignore
  const suffixes = prepareClasses(['initialized', params.direction, {
    'free-mode': swiper.params.freeMode && params.freeMode.enabled
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'grid': params.grid && params.grid.rows > 1
  }, {
    'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }, {
    'centered': params.cssMode && params.centeredSlides
  }, {
    'watch-progress': params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  el.classList.add(...classNames);
  swiper.emitContainerClasses();
}

function removeClasses() {
  const swiper = this;
  const {
    el,
    classNames
  } = swiper;
  el.classList.remove(...classNames);
  swiper.emitContainerClasses();
}

var classes = {
  addClasses,
  removeClasses
};

function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
  }
}
var checkOverflow$1 = {
  checkOverflow
};

var defaults = {
  init: true,
  direction: 'horizontal',
  oneWayMovement: false,
  touchEventsTarget: 'wrapper',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  eventsPrefix: 'swiper',
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 5,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // loop
  loop: false,
  loopAddBlankSlides: true,
  loopAdditionalSlides: 0,
  loopPreventsSliding: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: 'swiper-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-blank',
  slideActiveClass: 'swiper-slide-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideFullyVisibleClass: 'swiper-slide-fully-visible',
  slideNextClass: 'swiper-slide-next',
  slidePrevClass: 'swiper-slide-prev',
  wrapperClass: 'swiper-wrapper',
  lazyPreloaderClass: 'swiper-lazy-preloader',
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};

function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj) {
    if (obj === void 0) {
      obj = {};
    }
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== 'object' || moduleParams === null) {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (moduleParamName === 'navigation' && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
      params[moduleParamName].auto = true;
    }
    if (['pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
      params[moduleParamName].auto = true;
    }
    if (!(moduleParamName in params && 'enabled' in moduleParams)) {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)(allModulesParams, obj);
      return;
    }
    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)(allModulesParams, obj);
  };
}

/* eslint no-param-reassign: "off" */
const prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes
};
const extendedDefaults = {};
class Swiper {
  constructor() {
    let el;
    let params;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};
    params = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)({}, params);
    if (el && !params.el) params.el = el;
    const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    if (params.el && typeof params.el === 'string' && document.querySelectorAll(params.el).length > 1) {
      const swipers = [];
      document.querySelectorAll(params.el).forEach(containerEl => {
        const newParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      // eslint-disable-next-line no-constructor-return
      return swipers;
    }

    // Swiper Instance
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];
    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }
    const allModulesParams = {};
    swiper.modules.forEach(mod => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });

    // Extend defaults with modules params
    const swiperParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)({}, defaults, allModulesParams);

    // Extend defaults with passed params
    swiper.params = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)({}, swiper.params);
    swiper.passedParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)({}, params);

    // add event listeners
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(eventName => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }

    // Extend Swiper
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        // Returns 0 unless `translate` is > 2**23
        // Should be subtracted from css values to prevent overflow
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        startMoving: undefined,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit('_swiper');

    // Init
    if (swiper.params.init) {
      swiper.init();
    }

    // Return app instance
    // eslint-disable-next-line no-constructor-return
    return swiper;
  }
  getDirectionLabel(property) {
    if (this.isHorizontal()) {
      return property;
    }
    // prettier-ignore
    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }
  getSlideIndex(slideEl) {
    const {
      slidesEl,
      params
    } = this;
    const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
    const firstSlideIndex = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.g)(slides[0]);
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.g)(slideEl) - firstSlideIndex;
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === index)[0]);
  }
  recalcSlides() {
    const swiper = this;
    const {
      slidesEl,
      params
    } = swiper;
    swiper.slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit('enable');
  }
  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit('disable');
  }
  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(' ').filter(className => {
      return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', cls.join(' '));
  }
  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return '';
    return slideEl.className.split(' ').filter(className => {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  }
  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.forEach(slideEl => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  }
  slidesPerViewDynamic(view, exact) {
    if (view === void 0) {
      view = 'current';
    }
    if (exact === void 0) {
      exact = false;
    }
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (typeof params.slidesPerView === 'number') return params.slidesPerView;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      // eslint-disable-next-line
      if (view === 'current') {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        // previous
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper;
    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      }
    });
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
      setTranslate();
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
        translated = swiper.slideTo(slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit('update');
  }
  changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }
    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }
    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.forEach(slideEl => {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  }
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
    swiper.rtl = direction === 'rtl';
    swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
    if (swiper.rtl) {
      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'rtl';
    } else {
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'ltr';
    }
    swiper.update();
  }
  mount(element) {
    const swiper = this;
    if (swiper.mounted) return true;

    // Find el
    let el = element || swiper.params.el;
    if (typeof el === 'string') {
      el = document.querySelector(el);
    }
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === 'SWIPER-CONTAINER') {
      swiper.isElement = true;
    }
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = el.shadowRoot.querySelector(getWrapperSelector());
        // Children needs to return slot items
        return res;
      }
      return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(el, getWrapperSelector())[0];
    };
    // Find Wrapper
    let wrapperEl = getWrapper();
    if (!wrapperEl && swiper.params.createElements) {
      wrapperEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.wrapperClass);
      el.append(wrapperEl);
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(el, `.${swiper.params.slideClass}`).forEach(slideEl => {
        wrapperEl.append(slideEl);
      });
    }
    Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
      hostEl: swiper.isElement ? el.parentNode.host : el,
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el, 'direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el, 'direction') === 'rtl'),
      wrongRTL: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(wrapperEl, 'display') === '-webkit-box'
    });
    return true;
  }
  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit');

    // Set breakpoint
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Add Classes
    swiper.addClasses();

    // Update size
    swiper.updateSize();

    // Update slides
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }

    // Set Grab Cursor
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }

    // Slide To Initial Slide
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }

    // Create loop
    if (swiper.params.loop) {
      swiper.loopCreate();
    }

    // Attach events
    swiper.attachEvents();
    const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
    if (swiper.isElement) {
      lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
    }
    lazyElements.forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      } else {
        imageEl.addEventListener('load', e => {
          processLazyPreloader(swiper, e.target);
        });
      }
    });
    preload(swiper);

    // Init Flag
    swiper.initialized = true;
    preload(swiper);

    // Emit
    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  }
  destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }
    if (cleanStyles === void 0) {
      cleanStyles = true;
    }
    const swiper = this;
    const {
      params,
      el,
      wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }
    swiper.emit('beforeDestroy');

    // Init Flag
    swiper.initialized = false;

    // Detach events
    swiper.detachEvents();

    // Destroy loop
    if (params.loop) {
      swiper.loopDestroy();
    }

    // Cleanup styles
    if (cleanStyles) {
      swiper.removeClasses();
      el.removeAttribute('style');
      wrapperEl.removeAttribute('style');
      if (slides && slides.length) {
        slides.forEach(slideEl => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          slideEl.removeAttribute('style');
          slideEl.removeAttribute('data-swiper-slide-index');
        });
      }
    }
    swiper.emit('destroy');

    // Detach emitter events
    Object.keys(swiper.eventsListeners).forEach(eventName => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      swiper.el.swiper = null;
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults;
  }
  static installModule(mod) {
    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
    const modules = Swiper.prototype.__modules__;
    if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }
  static use(module) {
    if (Array.isArray(module)) {
      module.forEach(m => Swiper.installModule(m));
      return Swiper;
    }
    Swiper.installModule(module);
    return Swiper;
  }
}
Object.keys(prototypes).forEach(prototypeGroup => {
  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([Resize, Observer]);




/***/ }),

/***/ "./node_modules/swiper/shared/utils.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/shared/utils.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ elementParents),
/* harmony export */   b: () => (/* binding */ elementOffset),
/* harmony export */   c: () => (/* binding */ createElement),
/* harmony export */   d: () => (/* binding */ now),
/* harmony export */   e: () => (/* binding */ elementChildren),
/* harmony export */   f: () => (/* binding */ elementOuterSize),
/* harmony export */   g: () => (/* binding */ elementIndex),
/* harmony export */   h: () => (/* binding */ classesToTokens),
/* harmony export */   i: () => (/* binding */ getTranslate),
/* harmony export */   j: () => (/* binding */ elementTransitionEnd),
/* harmony export */   k: () => (/* binding */ isObject),
/* harmony export */   l: () => (/* binding */ getSlideTransformEl),
/* harmony export */   m: () => (/* binding */ elementStyle),
/* harmony export */   n: () => (/* binding */ nextTick),
/* harmony export */   o: () => (/* binding */ elementNextAll),
/* harmony export */   p: () => (/* binding */ elementPrevAll),
/* harmony export */   q: () => (/* binding */ animateCSSModeScroll),
/* harmony export */   r: () => (/* binding */ showWarning),
/* harmony export */   s: () => (/* binding */ setCSSProperty),
/* harmony export */   t: () => (/* binding */ extend),
/* harmony export */   u: () => (/* binding */ deleteProps)
/* harmony export */ });
/* harmony import */ var _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");


function classesToTokens(classes) {
  if (classes === void 0) {
    classes = '';
  }
  return classes.trim().split(' ').filter(c => !!c.trim());
}

function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach(key => {
    try {
      object[key] = null;
    } catch (e) {
      // no getter for object
    }
    try {
      delete object[key];
    } catch (e) {
      // something got wrong
    }
  });
}
function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle(el) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let style;
  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = 'x';
  }
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle(el);
  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
    }
    // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case
    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }
  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }
  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}
function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend() {
  const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
  const noExtend = ['__proto__', 'constructor', 'prototype'];
  for (let i = 1; i < arguments.length; i += 1) {
    const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll(_ref) {
  let {
    swiper,
    targetPosition,
    side
  } = _ref;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = 'none';
  window.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? 'next' : 'prev';
  const isOutOfBound = (current, target) => {
    return dir === 'next' && current >= target || dir === 'prev' && current <= target;
  };
  const animate = () => {
    time = new Date().getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.scrollSnapType = '';
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = '';
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window.requestAnimationFrame(animate);
  };
  animate();
}
function getSlideTransformEl(slideEl) {
  return slideEl.querySelector('.swiper-slide-transform') || slideEl.shadowRoot && slideEl.shadowRoot.querySelector('.swiper-slide-transform') || slideEl;
}
function elementChildren(element, selector) {
  if (selector === void 0) {
    selector = '';
  }
  return [...element.children].filter(el => el.matches(selector));
}
function showWarning(text) {
  try {
    console.warn(text);
    return;
  } catch (err) {
    // err
  }
}
function createElement(tag, classes) {
  if (classes === void 0) {
    classes = [];
  }
  const el = document.createElement(tag);
  el.classList.add(...(Array.isArray(classes) ? classes : classesToTokens(classes)));
  return el;
}
function elementOffset(el) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const box = el.getBoundingClientRect();
  const body = document.body;
  const clientTop = el.clientTop || body.clientTop || 0;
  const clientLeft = el.clientLeft || body.clientLeft || 0;
  const scrollTop = el === window ? window.scrollY : el.scrollTop;
  const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}
function elementPrevAll(el, selector) {
  const prevEls = [];
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line
    if (selector) {
      if (prev.matches(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  const nextEls = [];
  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line
    if (selector) {
      if (next.matches(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  return window.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
  let child = el;
  let i;
  if (child) {
    i = 0;
    // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return undefined;
}
function elementParents(el, selector) {
  const parents = []; // eslint-disable-line
  let parent = el.parentElement; // eslint-disable-line
  while (parent) {
    if (selector) {
      if (parent.matches(selector)) parents.push(parent);
    } else {
      parents.push(parent);
    }
    parent = parent.parentElement;
  }
  return parents;
}
function elementTransitionEnd(el, callback) {
  function fireCallBack(e) {
    if (e.target !== el) return;
    callback.call(el, e);
    el.removeEventListener('transitionend', fireCallBack);
  }
  if (callback) {
    el.addEventListener('transitionend', fireCallBack);
  }
}
function elementOuterSize(el, size, includeMargins) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  if (includeMargins) {
    return el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom'));
  }
  return el.offsetWidth;
}




/***/ }),

/***/ "./node_modules/swiper/swiper.mjs":
/*!****************************************!*\
  !*** ./node_modules/swiper/swiper.mjs ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Swiper: () => (/* reexport safe */ _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   "default": () => (/* reexport safe */ _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__.S)
/* harmony export */ });
/* harmony import */ var _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/swiper-core.mjs */ "./node_modules/swiper/shared/swiper-core.mjs");
/**
 * Swiper 11.0.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 22, 2023
 */




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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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