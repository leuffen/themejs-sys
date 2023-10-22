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
        main.parse({
            layout,
            classes: (_b = layout.classes + " " + element.getAttribute("data-class")) !== null && _b !== void 0 ? _b : "",
            id: element.id,
            label: (_d = (_c = element.getAttribute("label")) !== null && _c !== void 0 ? _c : element.getAttribute("name")) !== null && _d !== void 0 ? _d : element.id
        });
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
exports.getTemplateFilledWithContent = exports.parseConfigString = exports.getCleanVariableValue = exports.splitChildrenBySelector = exports.jodaRenderer = exports.registerJodaRenderer = exports.wrapElement = exports.await_property = void 0;
const embed_1 = __webpack_require__(/*! @kasimirjs/embed */ "./node_modules/@kasimirjs/embed/dist/index.js");
const JodaElementException_1 = __webpack_require__(/*! ./JodaElementException */ "./node_modules/@leuffen/jodastyle/dist/helper/JodaElementException.js");
const QTemplate_1 = __webpack_require__(/*! ./QTemplate */ "./node_modules/@leuffen/jodastyle/dist/helper/QTemplate.js");
const joda_1 = __webpack_require__(/*! ../joda */ "./node_modules/@leuffen/jodastyle/dist/joda.js");
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
    return __awaiter(this, void 0, void 0, function* () {
        let templateHtml = joda_1.Joda.getRegisteredTemplate(templateSelector);
        if (templateHtml === null) {
            let template = document.querySelector(templateSelector);
            if (template === null) {
                throw new JodaElementException_1.JodaElementException("Template not found: " + templateSelector);
            }
            templateHtml = template.innerHTML;
        }
        // Load --layout-* variables to template parser
        let layout = {};
        let props = getComputedStyle(origElement);
        // Attention: Chrome cannot list defined CSS Variables!
        templateHtml = (0, QTemplate_1.template_parse)(templateHtml, {
            layout: new Proxy({}, {
                get: function (target, name) {
                    let val = props.getPropertyValue("--layout-" + name.toString());
                    //console.log("Get layout property: ", name, val);
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
                selected = Array.from([content.querySelector(select)]);
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
                    yield (0, embed_1.ka_sleep)(5);
                }
            }
            // Run layout-attribute processor (for whole style - already running on joda-split)
            let layoutProcessor = new LayoutProcessor_1.LayoutProcessor(this.logger);
            node.querySelectorAll("[layout]").forEach((node) => {
                layoutProcessor.processNode(node);
            });
            // Run jodastyle commands
            for (let child of [node, ...Array.from(node.querySelectorAll("*"))]) {
                if (child["joda-style-processed"] === true) {
                    continue;
                }
                child["joda-style-processed"] = true;
                let style = getComputedStyle(child);
                let keys = Object.keys(jodastyle_commands_1.jodaStyleCommands);
                for (let key of Array.from(keys)) {
                    let styleValue = style.getPropertyValue(key);
                    if (styleValue === "") {
                        continue;
                    }
                    if (styleValue === getComputedStyle(child.parentElement).getPropertyValue(key)) {
                        continue; // Inherited from parent
                    }
                    // Replace starting and ending with " or ' with nothing
                    styleValue = (0, functions_1.getCleanVariableValue)(styleValue);
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
        if (!first) {
            __classPrivateFieldGet(this, _Slideshow_curElement, "f").classList.add("animateIn");
            __classPrivateFieldGet(this, _Slideshow_curElement, "f").classList.remove("animateOut");
        }
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

/***/ "./sections/cards-slider/cards-slider.ts":
/*!***********************************************!*\
  !*** ./sections/cards-slider/cards-slider.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");


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
    `,
    {}, {
        onAfterAllTemplatesConnectedCallback: (element) => {
            console.log("onAfterAllTemplatesConnectedCallback", element);
        }
    }
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


_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("cols-2-bg",
    // language=HTML
    `
        <section class="tjs-cols-2-bg :: mobile :md:">
            <div class="tjs-wrapper tjs-cols-2-bg__border container">
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
        </section>
    `);


/***/ }),

/***/ "./sections/cols-2/cols-2.ts":
/*!***********************************!*\
  !*** ./sections/cols-2/cols-2.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");


_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("cols-2",
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
    `);


/***/ }),

/***/ "./sections/contact-form/contact-form.ts":
/*!***********************************************!*\
  !*** ./sections/contact-form/contact-form.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");




_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("contact-form",
    // language=HTML
    `
        <section class="tjs-contact-form :: mobile :lg:">
            <div class="tjs__wrapper container">
                <div class="tjs-contact-form__content--container">
                    <div class="tjs-contact-form__content--container-inner">
                        <div class="tjs-contact-form__col tjs-contact-form__text">
                            <slot data-select="img"></slot>
                            <slot data-select="ul"></slot>
                        </div>
                        <div class="tjs-contact-form__col tjs-contact-form__form">
                            <form>
                                <slot></slot>

                                <div class="tjs-contact-form__newsletter--privacy-wrapper">
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

/***/ "./sections/contact/contact.ts":
/*!*************************************!*\
  !*** ./sections/contact/contact.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");




_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("contact",
    // language=HTML
    `
        <section class="tjs-contact :: mobile :lg:">
            <div class="tjs__wrapper container-fluid">
                <div class="tjs-contact__content--container">
                    <div class="tjs-contact__content--container-inner container">
                        <div class="tjs-contact__col tjs-contact__newsletter--text">
                            <h2>Kontakt</h2>
                            <blockquote>Vereinbaren Sie ein kostenloses Beratungs&shy;gespräch.</blockquote>

                            <div class="tjs-contact__newsletter--text__list">
                                <strong>Ihre Vorteile</strong>
                                <ul>
                                    <li>Keine Einrichtungskosten</li>
                                    <li>Jederzeit kündbar</li>
                                    <li>30-Tage Geld-Zurück-Garantie</li>
                                </ul>
                            </div>
                        </div>
                        <div class="tjs-contact__col tjs-contact__newsletter--form">
                            <form>
                                <slot></slot>

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

                                <div class="tjs-contact__newsletter--privacy-wrapper">
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
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");



_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("cta1",
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
    `);


/***/ }),

/***/ "./sections/customer-reviews/customer-reviews.ts":
/*!*******************************************************!*\
  !*** ./sections/customer-reviews/customer-reviews.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");


_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("customer-reviews__carousel--slide",
    // language=HTML
    `
        <div class="tjs-customer-reviews__carousel--slide">
            <div class="tjs-customer-reviews__carousel--slide__stars">

            </div>
            <div class="tjs-customer-reviews__carousel--slide__text">
                <slot data-select="blockquote"></slot>
            </div>
            <div class="tjs-customer-reviews__carousel--slide__author">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i> 5/5 Sterne
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
                    <div class="tjs-customer-reviews__content">
                        <div class="tjs-customer-reviews__content--headline">
                            <slot><slot>
                        </div>
                        <div class="tjs-customer-reviews__content--row">
                            <div class="tjs-customer-reviews__content--col tjs-customer-reviews__carousel">
                                <div class="tjs-customer-reviews__carousel--navigation-prev">
                                    <img loading="lazy" src="https://cdn.leuffen.de/global/themejs-sys/elements/arrow-left.svg" width="500" height="500">
                                </div>
                                <div class="tjs-customer-reviews__carousel--navigation-next">
                                    <img loading="lazy" src="https://cdn.leuffen.de/global/themejs-sys/elements/arrow-right.svg" width="500" height="500">
                                </div>
                                <div class="tjs-customer-reviews__carousel--nav-points">
                                    <div class="tjs-customer-reviews__carousel--nav-points__point active" data-id="1"></div>
                                    <div class="tjs-customer-reviews__carousel--nav-points__point" data-id="2"></div>
                                    <div class="tjs-customer-reviews__carousel--nav-points__point" data-id="3"></div>
                                </div>

                                <liscom-slider class="tjs-customer-reviews__carousel--slides">
                                    <slot data-select=".children > *" data-child-layout="use: #customer-reviews__carousel--slide;"></slot>
                                </liscom-slider>

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
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");


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
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");




_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("footer",
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


/***/ }),

/***/ "./sections/header1/header1.ts":
/*!*************************************!*\
  !*** ./sections/header1/header1.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");


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
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");


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

/***/ "./sections/image-slider/image-slider.ts":
/*!***********************************************!*\
  !*** ./sections/image-slider/image-slider.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");


_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("image-slider__carousel--slide",
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
    `)

_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("image-slider",
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
    `);


/***/ }),

/***/ "./sections/key-figures/key-figures.ts":
/*!*********************************************!*\
  !*** ./sections/key-figures/key-figures.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");


_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("key-figures",
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
    `);


/***/ }),

/***/ "./sections/newsletter/newsletter.ts":
/*!*******************************************!*\
  !*** ./sections/newsletter/newsletter.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");



_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("newsletter",
    // language=HTML
    `
        <section class="tjs-newsletter dark :: mobile :lg:">
            <div class="tjs__wrapper container">
                <div class="tjs-newsletter__content--container">
                    <div class="tjs-newsletter__col tjs-newsletter__text">
                        <strong>Newsletter</strong>
                        <p>Melden Sie sich zum Newsletter an und erhalten Sie alle paar Wochen aktuelle News, Design- und Funktionsvorschläge und viele weitere hilfreiche Tipps für Ihren Onlineauftritt.</p>
                    </div>
                    <div class="tjs-newsletter__col tjs-newsletter__input-wrapper">
                        <div class="input-group">
                            <input type="email" class="form-control" placeholder="E-Mail eintragen">
                            <span class="input-group-text inside">Anmelden</span>
                        </div>
                        <span class="input-group-text outside">Anmelden</span>
                    </div>
                    <div class="tjs-newsletter__disturber-stars">
                        <img loading="lazy" class="tjs-newsletter__stars--left" src="/images/stars.webp">
                        <img loading="lazy" class="tjs-newsletter__stars--right" src="/images/stars.webp">
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
/* harmony import */ var _cols_2_cols_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cols-2/cols-2 */ "./sections/cols-2/cols-2.ts");
/* harmony import */ var _cols_2_cols_2_bg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cols-2/cols-2-bg */ "./sections/cols-2/cols-2-bg.ts");
/* harmony import */ var _key_figures_key_figures__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./key-figures/key-figures */ "./sections/key-figures/key-figures.ts");
/* harmony import */ var _cards_slider_cards_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cards-slider/cards-slider */ "./sections/cards-slider/cards-slider.ts");
/* harmony import */ var _customer_reviews_customer_reviews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer-reviews/customer-reviews */ "./sections/customer-reviews/customer-reviews.ts");
/* harmony import */ var _image_slider_image_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./image-slider/image-slider */ "./sections/image-slider/image-slider.ts");
/* harmony import */ var _cta1_cta1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cta1/cta1 */ "./sections/cta1/cta1.ts");
/* harmony import */ var _text_container_text_container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./text-container/text-container */ "./sections/text-container/text-container.ts");
/* harmony import */ var _contact_form_contact_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact-form/contact-form */ "./sections/contact-form/contact-form.ts");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer */ "./sections/footer/footer.ts");
/* harmony import */ var _newsletter_newsletter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./newsletter/newsletter */ "./sections/newsletter/newsletter.ts");
/* harmony import */ var _contact_contact__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact/contact */ "./sections/contact/contact.ts");




















/***/ }),

/***/ "./sections/service-slider/service-slider.ts":
/*!***************************************************!*\
  !*** ./sections/service-slider/service-slider.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");


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
                                <div class="tjs-service-slider__carousel--navigation-prev">
                                    <img loading="lazy" src="https://cdn.leuffen.de/global/themejs-sys/elements/arrow-left.svg">
                                </div>
                                <div class="tjs-service-slider__carousel--navigation-next">
                                    <img loading="lazy" src="https://cdn.leuffen.de/global/themejs-sys/elements/arrow-right.svg">
                                </div>
                                <div class="tjs-service-slider__carousel--nav-points">
                                    <div class="tjs-service-slider__carousel--nav-points__point active" data-id="1"></div>
                                    <div class="tjs-service-slider__carousel--nav-points__point" data-id="2"></div>
                                    <div class="tjs-service-slider__carousel--nav-points__point" data-id="3"></div>
                                </div>

                                <liscom-slider class="tjs-service-slider__carousel--slides">
                                    <slot data-select=".children > *" data-child-layout="use: #service-slider__carousel--slide;"></slot>
                                </liscom-slider>
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

/***/ "./sections/text-container/text-container.ts":
/*!***************************************************!*\
  !*** ./sections/text-container/text-container.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./node_modules/@leuffen/jodastyle/dist/index.module.js");


_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.Joda.registerTemplate("text-container",
    // language=HTML
    `
        <section class="tjs-text-container  :: mobile :md:">
            <div class="tjs-wrapper container">
                <slot></slot>
            </div>
        </section>

    `);


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