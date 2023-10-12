(()=>{var __webpack_modules__={165:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";eval(`
;// CONCATENATED MODULE: ./node_modules/@kasimirjs/embed/dist/core/sleep.js
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function sleep_ka_sleep(sleepms) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            window.setTimeout(() => {
                return resolve();
            }, sleepms);
        });
    });
}

;// CONCATENATED MODULE: ./node_modules/@kasimirjs/embed/dist/functions.js
var functions_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
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
function functions_isset(input) {
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
    return functions_awaiter(this, void 0, void 0, function* () {
        let elem = parent.querySelector(selector);
        let rounds = 1;
        while (elem === null && maxWait > 0) {
            let delay = 20 * rounds++;
            yield ka_sleep(delay);
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

;// CONCATENATED MODULE: ./node_modules/@kasimirjs/embed/dist/core/debouncer.js
var debouncer_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
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
        return debouncer_awaiter(this, void 0, void 0, function* () {
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

;// CONCATENATED MODULE: ./node_modules/@kasimirjs/embed/dist/types.js
var types_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
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
        return types_awaiter(this, void 0, void 0, function* () {
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
function types_createScopeObject(init = null) {
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
            let debouncer = new Debouncer(50, 50);
            if (p.startsWith("$") || p.startsWith("__"))
                return true;
            if (functions_isset(scopeDef.$tpl))
                scopeDef.$tpl.render();
            (() => types_awaiter(this, void 0, void 0, function* () {
                yield debouncer.debounce();
            }))();
            return true;
        }
    });
    if (init !== null)
        scopeDef.init(init);
    return proxy;
}

;// CONCATENATED MODULE: ./node_modules/@kasimirjs/embed/dist/core/debounce.js
var debounce_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
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
    return debounce_awaiter(this, void 0, void 0, function* () {
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

;// CONCATENATED MODULE: ./node_modules/@kasimirjs/embed/dist/core/create-element.js
/**
 * Create a new Element
 *
 * @param tagName {string}      The Tag Name
 * @param attributes {string<string>}   Attributes to set initially
 * @param appendToElement {HTMLElement}
 * @param children {HTMLElement[]}
 * @return HTMLElement
 */
function create_element_ka_create_element(tagName, attributes = null, children = null, appendToElement = null) {
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

;// CONCATENATED MODULE: ./node_modules/@kasimirjs/embed/dist/core/dom-ready.js
var dom_ready_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
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
    return dom_ready_awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            if (document.readyState === "complete" || document.readyState === "interactive")
                return resolve("loaded");
            document.addEventListener("DOMContentLoaded", () => resolve('DOMContentLoaded'));
        });
    });
}

;// CONCATENATED MODULE: ./node_modules/@kasimirjs/embed/dist/core/eval.js
function ka_eval(stmt, __scope, e, __refs) {
    if (stmt.endsWith(";"))
        stmt = stmt.slice(0, -1);
    const reserved = ["var", "null", "let", "const", "function", "class", "in", "of", "for", "true", "false", "await", "$this"];
    let r = "var $this = e;";
    for (let __name in __scope) {
        if (reserved.indexOf(__name) !== -1)
            continue;
        if (__name.indexOf("-") !== -1) {
            console.error(\`Invalid scope key '\${__name}': Cannot contain - in scope:\`, __scope);
            throw \`eval() failed: Invalid scope key: '\${__name}': Cannot contain minus char '-'\`;
        }
        r += \`var \${__name} = __scope['\${__name}'];\`;
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

;// CONCATENATED MODULE: ./node_modules/@kasimirjs/embed/dist/core/elwalk.js
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

;// CONCATENATED MODULE: ./node_modules/@kasimirjs/embed/dist/core/str-to-camelcase.js
/**
 * Transform any input to CamelCase
 *
 * Example: some-class => someClass
 *
 * @param str {string}
 * @return {string}
 */
function ka_str_to_camel_case(str) {
    return str.replace(/(?:^\\w|[A-Z]|\\b\\w)/g, (ltr, idx) => idx === 0 ? ltr.toLowerCase() : ltr.toUpperCase()).replace(/[^a-zA-Z0-9]+/g, '');
}

;// CONCATENATED MODULE: ./node_modules/@kasimirjs/embed/dist/core/query-select.js
/**
 * Query a Element or trigger an Exception
 *
 * @param query
 * @param parent
 * @param exception
 * @return {HTMLElement}
 */
function query_select_ka_query_selector(query, parent = null, exception = null) {
    if (typeof exception === "undefined" || exception === null)
        exception = \`querySelector '\${query}' not found\`;
    if (typeof parent === "undefined" || parent === null)
        parent = document;
    let e = parent.querySelectorAll(query);
    if (e.length === 0) {
        console.warn(exception, "on parent: ", parent);
        throw exception;
    }
    return e[0];
}

;// CONCATENATED MODULE: ./node_modules/@kasimirjs/embed/dist/tpl/templatify.js


function quoteattr(s, preserveCR) {
    preserveCR = preserveCR ? '&#13;' : '\\n';
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
        .replace(/\\r\\n/g, preserveCR) /* Must be before the next replacement. */
        .replace(/[\\r\\n]/g, preserveCR);
    ;
}
window._ka_el_idx = 0;
/**
 * Generate a renderable Template from <template> Element
 *
 * @param {HTMLElement|string} elem
 * @return {HTMLTemplateElement}
 */
function templatify_ka_templatify(elem, returnMode = true) {
    if (typeof elem === "string")
        elem = query_select_ka_query_selector(elem);
    if (!(elem instanceof Node)) {
        console.error("[ka-templatify] Parameter 1 is not a html element: ", elem);
        throw \`[ka-templify] Parameter 1 is not a html element: \${elem}\`;
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
            .replace(/\\[\\[(.*?)\\]\\]/g, (matches, m1) => \`<span ka.textContent="\${quoteattr(m1)}"></span>\`);
        templatify_ka_templatify(returnTpl.content, false);
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
    ka_elwalk(elem, (el) => {
        //console.log(el);
        if (!(el instanceof HTMLElement))
            return;
        let tpl = null;
        for (let attrName of el.getAttributeNames()) {
            if (attrName === "ka.for") {
                tpl = wrapElem(el, "ka.for", el.getAttribute("ka.for"));
                templatify_ka_templatify(tpl, false);
                break;
            }
            if (attrName === "ka.if") {
                tpl = wrapElem(el, "ka.if", el.getAttribute("ka.if"));
                templatify_ka_templatify(tpl, false);
                break;
            }
        }
    }, true, false);
}

;// CONCATENATED MODULE: ./node_modules/@kasimirjs/embed/dist/ce/html.js
function html_ka_html(htmlContent) {
    if (htmlContent instanceof HTMLTemplateElement) {
        return htmlContent;
    }
    let e = document.createElement("template");
    e.innerHTML = htmlContent;
    return e;
}

;// CONCATENATED MODULE: ./node_modules/@kasimirjs/embed/dist/element/KaCustomFragment.js
var KaCustomFragment_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
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
        this.scope = types_createScopeObject();
        this.html = null;
    }
    init(scope) {
        // Check template set by customElement annotation
        if (functions_isset(this.constructor["html"]) && this.html === null)
            this.html = this.constructor["html"];
        if (!functions_isset(this.tplPrototype))
            this.tplPrototype = templatify_ka_templatify(html_ka_html(this.html));
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
        return KaCustomFragment_awaiter(this, void 0, void 0, function* () {
            parentElement.setAttribute("ka.stop", "true");
            if (!this.scope.isInitialized()) {
                this.init({});
            }
            this.tpl = this.tplPrototype.cloneNode(true);
            this.scope.$tpl = new template_KaTemplate(this.tpl);
            parentElement.append(this.tpl);
            yield sleep_ka_sleep(1);
            this.scope.render();
        });
    }
    fragmentDisconnectedCallback() {
        this.scope.$tpl.dispose();
    }
}

;// CONCATENATED MODULE: ./node_modules/@kasimirjs/embed/dist/element/ka-use.js
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
        if (functions_isset(val["setParentScope"]))
            val["setParentScope"](parentScope);
        this.myComponent = val;
        this.innerHTML = "";
        // If not specified scope is the parent scope.
        if (!this.hasAttribute("ka.scope"))
            val["setScope"](parentScope);
        if (val instanceof KaCustomFragment) {
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
        if (this.myComponent instanceof KaCustomFragment) {
            this.myComponent.setScope(scope);
        }
    }
    disconnectedCallback() {
    }
    connectedCallback() {
        this.style.display = "contents";
        this.setAttribute("ka.stop", "true");
        if (this.myComponent instanceof KaCustomFragment) {
            this.myComponent.fragmentConnectedCallback(this);
        }
    }
};
KaUse = __decorate([
    customElement("ka-use-" + random_string().toLowerCase())
], KaUse);


;// CONCATENATED MODULE: ./node_modules/@kasimirjs/embed/dist/core/apply.js
var apply_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
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
            element._ka_on[action] = (e) => apply_awaiter(this, void 0, void 0, function* () {
                scope["$event"] = e;
                if (typeof callbackOrCode === "function") {
                    return callbackOrCode(e, element, scope);
                }
                else {
                    return ka_eval(callbackOrCode, scope, element);
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
            r = ka_eval(attVal, scope, selector);
        switch (attType) {
            case "use":
                if (!(selector instanceof KaUse)) {
                    let elem = new KaUse();
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
                if (isUndefined(scope.$ref))
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
                    selector.style[ka_str_to_camel_case(attSelector)] = val;
                    break;
                }
                for (let cname in r) {
                    let val = r[cname];
                    if (typeof val === "number" && ["left", "top", "height", "width", "bottom", "right", "line-height", "font-size"].indexOf(cname) !== -1)
                        val = val + "px";
                    selector.style[ka_str_to_camel_case(cname)] = val;
                }
                break;
            case "bindarray":
                if (attSelector === "default")
                    continue;
                if (isUndefined(r)) {
                    // Bind default values
                    if (selector.hasAttribute("ka.bind.default")) {
                        scope = Object.assign({ $scope: scope }, scope);
                        scope = Object.assign(Object.assign({ $scope: scope }, scope), { __curVal: ka_eval(selector.getAttribute("ka.bind.default"), scope, selector) });
                        ka_eval(\`\${attVal} = __curVal\`, scope, selector);
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
                        let arr = ka_eval(attVal, scope, selector);
                        if (arr.indexOf(selector.value) === -1 && selector.checked)
                            arr.push(selector.value);
                        if (arr.indexOf(selector.value) !== -1 && !selector.checked)
                            arr = arr.filter((e) => e !== selector.value);
                        scope = Object.assign(Object.assign({ $scope: scope }, scope), { __curVal: arr });
                        ka_eval(\`\${attVal} = __curVal\`, scope, selector);
                        if (scope.$on && scope.$on.change)
                            scope.$on.change(event);
                    });
                    selector._kap_bind = true;
                }
                break;
            case "bind":
                if (attSelector === "default")
                    continue;
                if (isUndefined(r)) {
                    // Bind default values
                    if (functions_isset(selector.value)) {
                        scope = Object.assign(Object.assign({ $scope: scope }, scope), { __curVal: selector.value });
                        ka_eval(\`\${attVal} = __curVal\`, scope, selector);
                        r = scope.__curVal;
                    }
                    if (selector.hasAttribute("ka.bind.default")) {
                        scope = Object.assign({ $scope: scope }, scope);
                        scope = Object.assign(Object.assign({ $scope: scope }, scope), { __curVal: ka_eval(selector.getAttribute("ka.bind.default"), scope, selector) });
                        ka_eval(\`\${attVal} = __curVal\`, scope, selector);
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
                        ka_eval(\`\${attVal} = __curVal\`, scope, selector);
                        if (scope.$on && scope.$on.change)
                            scope.$on.change(event);
                    });
                    selector.addEventListener("keyup", (event) => {
                        scope = Object.assign(Object.assign({ $scope: scope }, scope), { __curVal: selector.value });
                        ka_eval(\`\${attVal} = __curVal\`, scope, selector);
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
                    selector[ka_str_to_camel_case(attSelector)] = r;
                    break;
                }
                for (let cname in r) {
                    selector[ka_str_to_camel_case(cname)] = r[cname];
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

;// CONCATENATED MODULE: ./node_modules/@kasimirjs/embed/dist/ce/loadHtml.js
var loadHtml_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
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
function loadHtml_ka_load_html(url) {
    return loadHtml_awaiter(this, void 0, void 0, function* () {
        let e = document.createElement("template");
        let result = yield fetch(url);
        if (!result.ok) {
            console.error(\`[loadHtml] failed to load '\${url}'\`);
            throw \`[loadHtml] failed to load '\${url}'\`;
        }
        let body = yield result.text();
        e.innerHTML = body;
        return e;
    });
}

;// CONCATENATED MODULE: ./node_modules/@kasimirjs/embed/dist/ce/htmlFile.js
var htmlFile_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class htmlFile_RemoteTemplate {
    constructor(url) {
        this.url = url;
        this.tpl = null;
    }
    /**
     *
     * @return {Promise<HTMLTemplateElement>}
     */
    load() {
        return htmlFile_awaiter(this, void 0, void 0, function* () {
            if (this.tpl === null)
                this.tpl = yield ka_load_html(this.url);
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
    return new htmlFile_RemoteTemplate(url);
}

;// CONCATENATED MODULE: ./node_modules/@kasimirjs/embed/dist/ce/custom-element.js
var custom_element_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class KaCustomElement extends (/* unused pure expression or super */ null && (HTMLElement)) {
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
        return custom_element_awaiter(this, void 0, void 0, function* () {
            console.warn("connected() method not overridden in", this);
        });
    }
    connectedCallback() {
        return custom_element_awaiter(this, void 0, void 0, function* () {
            let callback = this.constructor.__callback;
            if (callback === null) {
            }
            else {
                callback.bind(this);
            }
            if (this.constructor.__tpl !== null) {
                let origTpl = this.constructor.__tpl;
                if (origTpl instanceof RemoteTemplate)
                    origTpl = yield origTpl.load();
                let tpl = ka_templatify(origTpl);
                if (this.constructor.__options.shadowDom === true) {
                    let shadowDom = this.attachShadow(this.constructor.__options.shadowDomOptions);
                    shadowDom.appendChild(tpl);
                }
                else {
                    this.appendChild(tpl);
                }
                this.__tpl = new KaTemplate(tpl);
            }
            if (this.constructor.__options.waitEvent !== null) {
                let wd = this.constructor.__options.waitEvent.split("@");
                let eventName = wd[0];
                let target = document;
                if (wd.length === 2) {
                    target = ka_query_selector(wd[1]);
                }
                target.addEventListener(eventName, (event) => custom_element_awaiter(this, void 0, void 0, function* () {
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

;// CONCATENATED MODULE: ./node_modules/@kasimirjs/embed/dist/tpl/template.js




class template_KaTemplate {
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
        console.error(\`[ka-template] \${msg} on element\`, this.template);
        throw \`[ka-template] \${msg} on element\` + this.template;
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
        let matches = stmt.match(/^(let)?\\s*(?<target>.+)\\s+(?<type>of|in|repeat)\\s+(?<select>.+)$/);
        if (matches === null) {
            this._error(\`Can't parse ka.for='\${stmt}'\`);
        }
        let selectVal = ka_eval(matches.groups.select, $scope, this.template);
        if (matches.groups.type === "repeat") {
            if (typeof selectVal !== "number")
                this._error(\`Error ka.for='\${stmt}': Selected val must be number in repeat loop\`);
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
            ka_elwalk(child, (el) => {
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
                ka_apply(el, $scope);
                if ((el instanceof HTMLElement && el.hasAttribute("ka.stop")) || el["__ka_stop_render"]) {
                    return false; // Skip Element rendering
                }
            }, true, true);
        }
    }
    _renderIf($scope, stmt) {
        let selectVal = ka_eval(stmt, $scope, this.template);
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

;// CONCATENATED MODULE: ./node_modules/@kasimirjs/embed/dist/element/KaHtmlElement.js
var KaHtmlElement_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
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
class KaHtmlElement extends (/* unused pure expression or super */ null && (HTMLElement)) {
    constructor(shadowRootInit = null) {
        super();
        this.shadowRootInit = shadowRootInit;
        this.addEventListener("load", (e) => console.log(e));
    }
    connectedCallback() {
        return KaHtmlElement_awaiter(this, void 0, void 0, function* () {
            let htmlTpl = null;
            if (typeof this.html === "function") {
                let fn = this.html;
                htmlTpl = yield fn(this);
            }
            else {
                htmlTpl = this.html;
            }
            if (typeof htmlTpl === "string")
                htmlTpl = ka_html(htmlTpl);
            let attachTo = this;
            if (this.shadowRootInit !== null) {
                attachTo = this.attachShadow(this.shadowRootInit);
            }
            if (isset(htmlTpl)) {
                let tpl;
                try {
                    tpl = ka_templatify(htmlTpl);
                }
                catch (e) {
                    console.error("Templatify failed on element", this, "for template", htmlTpl);
                    throw e;
                }
                this.$tpl = new KaTemplate(tpl);
                attachTo.appendChild(tpl);
            }
            this.connected();
        });
    }
    disconnectedCallback() {
        return KaHtmlElement_awaiter(this, void 0, void 0, function* () {
            this.$tpl.dispose();
            this.disconnected();
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/@kasimirjs/embed/dist/element/KaCustomElement.js
var KaCustomElement_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
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
class KaCustomElement_KaCustomElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this.__ka_stop_render = true; // Stop rendering if this element is reached
        this.shadowRootConfig = new ShadowRootConfig(); // Activate shadowRoot
        this.html = "Undefined Template";
        this.scope = types_createScopeObject();
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
        return KaCustomElement_awaiter(this, void 0, void 0, function* () {
            if (!this.scope.isInitialized())
                this.init({});
            // Check template set by customElement annotation
            // Cannot be done in constructor because of async behavior
            if (functions_isset(this.constructor["html"])) {
                this.html = this.constructor["html"];
            }
            if (this.tplPrototype === null) {
                this.tplPrototype = templatify_ka_templatify(html_ka_html(this.html));
            }
            this.tpl = this.tplPrototype.cloneNode(true);
            this.scope.$tpl = new template_KaTemplate(this.tpl);
            // Adding Shadow Root
            let domRoot = this;
            if (this.shadowRootConfig.mode !== null) {
                domRoot = this.attachShadow({ mode: this.shadowRootConfig.mode });
                this.shadowRootConfig.stylesheets.forEach((stylesheet) => {
                    create_element_ka_create_element("link", { rel: "stylesheet", href: stylesheet }, null, domRoot);
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

;// CONCATENATED MODULE: ./node_modules/@kasimirjs/embed/dist/element/KaCustomWrapper.js
var KaCustomWrapper_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
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
        this.scope = createScopeObject();
        this.html = null;
    }
    init(scope) {
        // Check template set by customElement annotation
        if (isset(this.constructor["html"]) && this.html === null)
            this.html = this.constructor["html"];
        if (!isset(this.tplPrototype))
            this.tplPrototype = ka_templatify(ka_html(this.html));
        this.scope.init(scope);
        return this.scope;
    }
    wrapTemplate(tpl) {
        this.scope.$content = tpl;
        return this.tpl;
    }
    fragmentConnectedCallback() {
        return KaCustomWrapper_awaiter(this, void 0, void 0, function* () {
            if (!this.scope.isInitialized()) {
                this.init({});
            }
            this.returnedTpl = this.tplPrototype;
            this.tpl = this.tplPrototype.cloneNode(true);
            this.scope.$tpl = new KaTemplate(this.tpl);
        });
    }
    wrapFinish() {
        return KaCustomWrapper_awaiter(this, void 0, void 0, function* () {
            this.scope.render();
        });
    }
    fragmentDisconnectedCallback() {
        this.scope.$tpl.dispose();
    }
}

;// CONCATENATED MODULE: ./node_modules/@kasimirjs/embed/dist/element/KaCustomModal.js
var KaCustomModal_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var KaCustomModal_classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var KaCustomModal_classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
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
        KaCustomModal_classPrivateFieldGet(this, _KaCustomModal_main, "f").style.width = w + "px";
    }
    constructor(tagName = "ka-modal", shadowRootInit = null, modalConfig = {}) {
        this.scope = createScopeObject();
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
        let config = KaCustomModal_classPrivateFieldGet(this, _KaCustomModal_configDefaults, "f");
        config = Object.assign(Object.assign({}, config), modalConfig);
        this.element = ka_create_element(tagName, { hidden: "hidden" }, null, config.parentElement);
        this.backdrop = ka_create_element("div", { style: \`\${config.styleBase};\${config.styleBackdrop};z-index:\${config.zIndex};\` }, null, this.element);
        let master = ka_create_element("div", { style: \`position:fixed;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;z-index:\${config.zIndex + 1};\` }, null, this.element);
        KaCustomModal_classPrivateFieldSet(this, _KaCustomModal_main, ka_create_element("div", { style: \`;max-height:100%;max-width:100%;\` }, null, master), "f");
        this.adjustWidth(config);
        KaCustomModal_classPrivateFieldGet(this, _KaCustomModal_promise, "f").promise = new Promise((resolve, reject) => { KaCustomModal_classPrivateFieldGet(this, _KaCustomModal_promise, "f").resolve = resolve; KaCustomModal_classPrivateFieldGet(this, _KaCustomModal_promise, "f").reject = reject; });
    }
    init(scope) {
        // Check template set by customElement annotation
        if (isset(this.constructor["html"]))
            this.__html = this.constructor["html"];
        if (!isset(this.tplPrototype))
            this.tplPrototype = ka_templatify(ka_html(this.__html));
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
        KaCustomModal_classPrivateFieldGet(this, _KaCustomModal_promise, "f").resolve(value);
    }
    show(...params) {
        return KaCustomModal_awaiter(this, void 0, void 0, function* () {
            if (!this.scope.isInitialized()) {
                this.init({});
            }
            this.tpl = this.tplPrototype.cloneNode(true);
            this.scope.$tpl = new KaTemplate(this.tpl);
            KaCustomModal_classPrivateFieldGet(this, _KaCustomModal_main, "f").append(this.tpl);
            this.element.removeAttribute("hidden");
            this.scope.render();
            return KaCustomModal_classPrivateFieldGet(this, _KaCustomModal_promise, "f").promise;
        });
    }
    fragmentDisconnectedCallback() {
        this.scope.$tpl.dispose();
    }
}
_KaCustomModal_main = new WeakMap(), _KaCustomModal_configDefaults = new WeakMap(), _KaCustomModal_promise = new WeakMap();

;// CONCATENATED MODULE: ./node_modules/@kasimirjs/embed/dist/element/KaModal.js
var KaModal_classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var KaModal_classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
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
        KaModal_classPrivateFieldGet(this, _KaModal_main, "f").style.width = w + "px";
    }
    constructor(tagName = "ka-modal", shadowRootInit = null, modalConfig = {}) {
        this.scope = createScopeObject();
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
        let config = KaModal_classPrivateFieldGet(this, _KaModal_configDefaults, "f");
        config = Object.assign(Object.assign({}, config), modalConfig);
        this.element = ka_create_element(tagName, { hidden: "hidden" }, null, config.parentElement);
        this.backdrop = ka_create_element("div", { style: \`\${config.styleBase};\${config.styleBackdrop};z-index:\${config.zIndex};\` }, null, this.element);
        let master = ka_create_element("div", { style: \`position:fixed;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;z-index:\${config.zIndex + 1};\` }, null, this.element);
        KaModal_classPrivateFieldSet(this, _KaModal_main, ka_create_element("div", { style: \`;max-height:100%;max-width:100%;\` }, null, master), "f");
        this.adjustWidth(config);
        KaModal_classPrivateFieldGet(this, _KaModal_promise, "f").promise = new Promise((resolve, reject) => { KaModal_classPrivateFieldGet(this, _KaModal_promise, "f").resolve = resolve; KaModal_classPrivateFieldGet(this, _KaModal_promise, "f").reject = reject; });
    }
    render(scope = null) {
        if (this.$tpl === null) {
            let html = this.html;
            if (typeof html === "string") {
                html = ka_html(html);
            }
            if (!(html instanceof HTMLTemplateElement)) {
                console.error("html is not HtmlTemplateElement", html, "on", this);
                throw "html is not HtmlTemplateElement";
            }
            console.log("html", html);
            let elem;
            try {
                elem = ka_templatify(html);
            }
            catch (e) {
                console.log("error templatify for element", this, ":", e);
                throw e;
            }
            KaModal_classPrivateFieldGet(this, _KaModal_main, "f").appendChild(elem);
            this.$tpl = new KaTemplate(elem);
        }
        this.$tpl.render(scope);
    }
    resolve(value) {
        this.element.remove();
        KaModal_classPrivateFieldGet(this, _KaModal_promise, "f").resolve(value);
    }
    show(...params) {
        this.element.removeAttribute("hidden");
        return KaModal_classPrivateFieldGet(this, _KaModal_promise, "f").promise;
    }
}
_KaModal_main = new WeakMap(), _KaModal_configDefaults = new WeakMap(), _KaModal_promise = new WeakMap();

;// CONCATENATED MODULE: ./node_modules/@kasimirjs/embed/dist/core/storage.js
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

;// CONCATENATED MODULE: ./node_modules/@kasimirjs/embed/dist/index.js





















;// CONCATENATED MODULE: ./workspaces/liscom/src/slideshow/slideshow.ts
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
  yield ka_dom_ready();
  yield sleep_ka_sleep(1e3);
  if (((_a = __liscom_config) == null ? void 0 : _a.slideshow) !== true) {
    return;
  }
  document.querySelectorAll(".slideshow").forEach((e) => new Slideshow(e));
}))();

;// CONCATENATED MODULE: ./workspaces/liscom/src/details-title/details-title.ts


let observedDataDetailTitle = [];
setInterval(() => {
  var _a;
  if (((_a = __liscom_config) == null ? void 0 : _a.detailsTitle) !== true) {
    return;
  }
  let elements = document.querySelectorAll("[data-details-title]");
  for (let e of Array.from(elements)) {
    if (observedDataDetailTitle.indexOf(e) !== -1)
      continue;
    observedDataDetailTitle.push(e);
    let title = e.getAttribute("data-details-title");
    let details = create_element_ka_create_element("details", { "data-debug-liscom-element": "details-title" });
    let summary = create_element_ka_create_element("summary", {}, [], details);
    e.parentElement.insertBefore(details, e);
    summary.append(title);
    details.append(e);
  }
}, 1e3);

// EXTERNAL MODULE: ./workspaces/liscom/src/typewriter-element/typewriter-element.ts
var typewriter_element = __webpack_require__(838);
// EXTERNAL MODULE: ./workspaces/liscom/src/slider/liscom-slider.ts
var liscom_slider = __webpack_require__(560);
;// CONCATENATED MODULE: ./workspaces/liscom/src/index.ts
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





;// CONCATENATED MODULE: ./workspaces/liscom/index.ts


// EXTERNAL MODULE: ./workspaces/jodastyle/src/helper/JodaRenderer.ts
var JodaRenderer = __webpack_require__(825);
;// CONCATENATED MODULE: ./workspaces/jodastyle/src/helper/ka-quick-template.ts

function parseVariableAndStyleStr(varString) {
  let attrs = { "$": {}, "@": {} };
  let regex = new RegExp(\`([@$])[^@^$]+\`, "gi");
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
  let regex = new RegExp(\`\\\\\${delimiter}[^\${delimiter}]+\`, "gi");
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
  defRest = defRest.replace(/^[a-z0-9_\\:\\-]+/ig, (match) => {
    tag = match;
    return "";
  });
  let attrs = parseAttributeStr(defRest);
  let element = create_element_ka_create_element(tag, attrs);
  return element;
}
function createElementTree(def) {
  let start = null;
  let leaf = null;
  let splitted = def.split(">");
  while (splitted.length > 0) {
    let cur = splitted.shift();
    let refName = null;
    cur = cur.replace(/\xA7([a-z0-9_\\-]+)/, (a, name) => {
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

;// CONCATENATED MODULE: ./workspaces/jodastyle/src/helper/JodaElementException.ts
class JodaElementException {
  constructor(message, element = null, triggerCommand = null) {
    this.message = message;
    this.element = element;
    this.triggerCommand = triggerCommand;
  }
}

;// CONCATENATED MODULE: ./workspaces/jodastyle/src/helper/QTemplate.ts


function template_parse(input, scope, element) {
  return input.replace(/\\[\\[(.*?)]]/gmi, (match, p1) => {
    let val = ka_eval(p1, scope, element, {});
    return val;
  });
}
class QTemplate {
  constructor(content) {
    if (typeof content === "string") {
      this.content = create_element_ka_create_element("template");
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
    let tpl = create_element_ka_create_element("template", {}, [], null);
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
    let selector = \`[data-ref="\${data_ref}"]\`;
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

;// CONCATENATED MODULE: ./workspaces/jodastyle/src/joda.ts
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

;// CONCATENATED MODULE: ./workspaces/jodastyle/src/helper/functions.ts
var functions_async = (__this, __arguments, generator) => {
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
  return functions_async(this, null, function* () {
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
        yield sleep_ka_sleep(wait);
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
  return functions_async(this, null, function* () {
    let templateHtml = Joda.getRegisteredTemplate(templateSelector);
    if (templateHtml === null) {
      let template2 = document.querySelector(templateSelector);
      if (template2 === null) {
        throw new JodaElementException("Template not found: " + templateSelector);
      }
      templateHtml = template2.innerHTML;
    }
    let layout = {};
    let props = getComputedStyle(origElement);
    templateHtml = template_parse(templateHtml, {
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

;// CONCATENATED MODULE: ./workspaces/jodastyle/src/processor/jodastyle-commands.ts
var jodastyle_commands_async = (__this, __arguments, generator) => {
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
  let ret = createElementTree(value);
  parent.replaceChild(ret.start, element);
  Array.from(element.children).forEach((child) => {
    ret.leaf.append(child);
  });
  element.remove();
  return ret.leaf;
};
jodaStyleCommands["--joda-wrap"] = (value, target, element, logger) => jodastyle_commands_async(void 0, null, function* () {
  let parent = element.parentElement;
  if (value.startsWith("#")) {
    console.log("Wrap element", element, "with template", value);
    let placeholder = document.createElement("div");
    parent.insertBefore(placeholder, element);
    placeholder.append(element);
    let newElement = yield getTemplateFilledWithContent(value, placeholder, element);
    placeholder.replaceWith(newElement);
    return element;
  } else {
    let ret = createElementTree(value);
    parent.replaceChild(ret.start, element);
    ret.leaf.append(element);
    return element;
  }
});
jodaStyleCommands["--joda-container"] = (value, target, element, logger) => {
  let ret = createElementTree(value);
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
  while (curSibling && getCleanVariableValue(getComputedStyle(curSibling).getPropertyValue("--joda-group")) === value) {
    siblings.push(curSibling);
    curSibling[groupByKey] = true;
    curSibling = curSibling.nextElementSibling;
  }
  let parent = element.parentElement;
  let ret = createElementTree(value);
  element.parentElement.insertBefore(ret.start, element);
  ret.leaf.append(element);
  siblings.forEach((sibling) => {
    ret.leaf.append(sibling);
  });
  return element;
};
jodaStyleCommands["--joda-class"] = (value, target, element, logger) => {
  let ret = createElementTree(value);
  element.setAttribute("class", element.getAttribute("class") + " " + value);
  return element;
};
jodaStyleCommands["--joda-use"] = (value, target, element, logger) => jodastyle_commands_async(void 0, null, function* () {
  if (value.startsWith("#")) {
    let placeholder = document.createElement("div");
    Array.from(element.children).forEach((child) => {
      placeholder.append(child);
    });
    let newElement = yield getTemplateFilledWithContent(value, placeholder, element);
    let firstElement = newElement.firstElementChild;
    firstElement["joda-style-processed"] = true;
    let debugElement = element.outerHTML.split("\\n")[0];
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
  let matches = value.match(/([a-z0-9\\_-]+)\\s*\\((.*?)\\)/);
  if (!matches) {
    console.error("Invalid --joda-use command: ", value, "in element", element, " should be in format: commandName(arg1: value1, arg2: value2, ...)");
    throw "Invalid --joda-use command: " + value + " should be in format: commandName(arg1: value1, arg2: value2, ...)";
  }
  logger.log("Using renderer: ", matches[1], "with args: ", matches[2], "on element", element);
  let commandName = matches[1];
  let args = ka_eval("{" + matches[2] + "}", {}, target, {});
  let command = yield await_property(window, ["jodastyle", "renderer", commandName]);
  let config = new command.config();
  let style = getComputedStyle(element);
  Object.keys(config).forEach((key) => {
    let val = style.getPropertyValue("--layout-" + key.replace(/\\_/g, "-"));
    if (val !== "") {
      config[key] = val.replace(/^["']/g, "").replace(/["']$/, "").trim();
    }
  });
  Object.assign(config, args);
  return yield new command.renderer().render(element, config);
});

;// CONCATENATED MODULE: ./workspaces/jodastyle/src/helper/JodaErrorElement.ts
var JodaErrorElement_defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getProtoOf = Object.getPrototypeOf;
var __reflectGet = Reflect.get;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    JodaErrorElement_defProp(target, key, result);
  return result;
};
var __superGet = (cls, obj, key) => __reflectGet(__getProtoOf(cls), key, obj);
var JodaErrorElement_async = (__this, __arguments, generator) => {
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

let tpl = \`
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
\`;
let JodaErrorElement = class extends KaCustomElement_KaCustomElement {
  constructor(message) {
    super();
    this.message = message;
    let scope = this.init({
      message
    });
  }
  connectedCallback() {
    return JodaErrorElement_async(this, null, function* () {
      yield __superGet(JodaErrorElement.prototype, this, "connectedCallback").call(this);
      this.scope.message = this.message;
    });
  }
};
JodaErrorElement = __decorateClass([
  customElement("joda-error"),
  template(tpl)
], JodaErrorElement);

;// CONCATENATED MODULE: ./workspaces/jodastyle/src/processor/LayoutProcessor.ts

const commands = ["use", "wrap"];
class LayoutProcessor {
  constructor(logger) {
    this.logger = logger;
  }
  processNode(node) {
    if (!node.hasAttribute("layout"))
      return node;
    let layout = parseConfigString(node.getAttribute("layout"));
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

;// CONCATENATED MODULE: ./workspaces/jodastyle/src/processor/jodastyle.ts
var jodastyle_async = (__this, __arguments, generator) => {
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
    return jodastyle_async(this, null, function* () {
      for (let child of Array.from(node.getElementsByTagName("joda-split"))) {
        while (child["ready"] !== true) {
          yield sleep_ka_sleep(5);
        }
      }
      let layoutProcessor = new LayoutProcessor(this.logger);
      node.querySelectorAll("[layout]").forEach((node2) => {
        layoutProcessor.processNode(node2);
      });
      for (let child of [node, ...Array.from(node.querySelectorAll("*"))]) {
        if (child["joda-style-processed"] === true) {
          continue;
        }
        child["joda-style-processed"] = true;
        let style = getComputedStyle(child);
        let keys = Object.keys(jodaStyleCommands);
        for (let key of Array.from(keys)) {
          let styleValue = style.getPropertyValue(key);
          if (styleValue === "") {
            continue;
          }
          if (styleValue === getComputedStyle(child.parentElement).getPropertyValue(key)) {
            continue;
          }
          styleValue = getCleanVariableValue(styleValue);
          let command = jodaStyleCommands[key];
          try {
            child = yield command(styleValue, node, child, this.logger);
          } catch (e) {
            if (e instanceof JodaElementException) {
              e.triggerCommand = key + ": " + styleValue;
              this.logger.warn(e.message, e.element);
              child.replaceWith(new JodaErrorElement(e.message + " (trigger by: " + e.triggerCommand + ")"));
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

;// CONCATENATED MODULE: ./workspaces/jodastyle/src/processor/jodaresponsive.ts
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
    let matches = item.match(/\\:([a-zA-Z]*)\\:/);
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

;// CONCATENATED MODULE: ./workspaces/jodastyle/src/helper/logger.ts
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

;// CONCATENATED MODULE: ./workspaces/jodastyle/src/processor/jodavisualize.ts

class Jodavisualize {
  process(element) {
    [element, ...Array.from(element.querySelectorAll("*"))].forEach((e) => {
      e.insertBefore(create_element_ka_create_element("div", { class: "joda-visualize" }, \`<\${e.tagName.toLowerCase()}  class="\${Array.from(e.classList).join(", ")}">\`), e.firstElementChild);
    });
  }
}

;// CONCATENATED MODULE: ./workspaces/jodastyle/src/helper/JodaSiteConfig.ts

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
const jodaSiteConfig = ka_session_storage(new JodaSiteConfig(), "jodaSiteConfig");

;// CONCATENATED MODULE: ./workspaces/jodastyle/src/component/joda-content-element.ts
var joda_content_element_defProp = Object.defineProperty;
var joda_content_element_getOwnPropDesc = Object.getOwnPropertyDescriptor;
var joda_content_element_decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? joda_content_element_getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    joda_content_element_defProp(target, key, result);
  return result;
};
var joda_content_element_accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var joda_content_element_privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var joda_content_element_privateSet = (obj, member, value, setter) => {
  joda_content_element_accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var joda_content_element_async = (__this, __arguments, generator) => {
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
    joda_content_element_privateAdd(this, _origContentTemplate, void 0);
    joda_content_element_privateAdd(this, _outputDiv, void 0);
  }
  awaitStyles() {
    return joda_content_element_async(this, null, function* () {
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
        yield sleep_ka_sleep(50 + index);
      }
    });
  }
  setLoaded() {
    return joda_content_element_async(this, null, function* () {
      yield sleep_ka_sleep(10);
      this.classList.add("loaded");
      yield sleep_ka_sleep(100);
      document.body.classList.add("loaded");
      document.querySelector("html").classList.remove("loader");
    });
  }
  connectedCallback() {
    return joda_content_element_async(this, null, function* () {
      let logger = new Logger("joda-content");
      yield sleep_ka_sleep(1);
      yield this.awaitStyles();
      joda_content_element_privateSet(this, _origContentTemplate, create_element_ka_create_element("template"));
      joda_content_element_privateSet(this, _outputDiv, create_element_ka_create_element("div"));
      if (jodaSiteConfig.disable_templates) {
        this.setLoaded();
        if (jodaSiteConfig.debug_visualize && jodaSiteConfig.debug_visualize_attribute) {
          new Jodavisualize().process(this);
        }
        return;
      }
      let jodaStyle = new Jodastyle(logger);
      yield jodaStyle.process(this);
      let jodaresponsive = new Jodaresponsive(logger);
      let currentBreakpoint = getCurrentBreakpoint();
      jodaresponsive.process(this);
      if (jodaSiteConfig.debug_visualize && jodaSiteConfig.debug_visualize_attribute) {
        new Jodavisualize().process(this);
      }
      this.setLoaded();
      window.addEventListener("resize", () => {
        if (currentBreakpoint === getCurrentBreakpoint()) {
          return;
        }
        currentBreakpoint = getCurrentBreakpoint();
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
JodaContentElement = joda_content_element_decorateClass([
  customElement("joda-content")
], JodaContentElement);

;// CONCATENATED MODULE: ./workspaces/jodastyle/src/component/joda-fetch.ts
var joda_fetch_defProp = Object.defineProperty;
var joda_fetch_getOwnPropDesc = Object.getOwnPropertyDescriptor;
var joda_fetch_decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? joda_fetch_getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    joda_fetch_defProp(target, key, result);
  return result;
};
var joda_fetch_async = (__this, __arguments, generator) => {
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
    return joda_fetch_async(this, null, function* () {
      let select = this.getAttribute("data-select");
      let elem = document.querySelector(select);
      if (elem === null) {
        console.error("joda-fetch: Element not found", select, "in element", this);
        return;
      }
      let jodaStyle = new Jodastyle(new Logger("joda-fetch"));
      this.innerHTML = elem.innerHTML;
      yield jodaStyle.process(this);
    });
  }
};
JodaFetch = joda_fetch_decorateClass([
  customElement("joda-fetch")
], JodaFetch);

;// CONCATENATED MODULE: ./workspaces/jodastyle/src/processor/jodasplit.ts
var jodasplit_accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var jodasplit_privateGet = (obj, member, getter) => {
  jodasplit_accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var jodasplit_privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var jodasplit_privateSet = (obj, member, value, setter) => {
  jodasplit_accessCheck(obj, member, "write to private field");
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
    jodasplit_privateAdd(this, _target, document.createDocumentFragment());
    jodasplit_privateAdd(this, _parents, [jodasplit_privateGet(this, _target)]);
    jodasplit_privateAdd(this, _currentParent, create_element_ka_create_element("section", { class: "section-h1pre" }));
    jodasplit_privateAdd(this, _currentContent, create_element_ka_create_element("div", { class: "content" }, [], jodasplit_privateGet(this, _currentParent)));
    jodasplit_privateAdd(this, _currentChildren, create_element_ka_create_element("div", { class: "children" }, [], jodasplit_privateGet(this, _currentParent)));
  }
  findParentElement(layer) {
    while (jodasplit_privateGet(this, _parents).length > layer) {
      jodasplit_privateGet(this, _parents).pop();
    }
    while (jodasplit_privateGet(this, _parents)[jodasplit_privateGet(this, _parents).length - 1] === void 0) {
      jodasplit_privateGet(this, _parents).pop();
    }
    return jodasplit_privateGet(this, _parents)[jodasplit_privateGet(this, _parents).length - 1];
  }
  createNewElement(tagName, layer, tag) {
    tagName = tagName.toLowerCase();
    let curParent = this.findParentElement(layer);
    let curParentChildren = curParent.childNodes[1];
    jodasplit_privateSet(this, _currentParent, create_element_ka_create_element(tag, { class: "section-" + tagName }));
    while (jodasplit_privateGet(this, _parents).length < layer) {
      jodasplit_privateGet(this, _parents).push(void 0);
    }
    jodasplit_privateGet(this, _parents).push(jodasplit_privateGet(this, _currentParent));
    if (curParent === jodasplit_privateGet(this, _target)) {
      curParent.appendChild(jodasplit_privateGet(this, _currentParent));
    } else {
      curParentChildren.append(jodasplit_privateGet(this, _currentParent));
    }
    jodasplit_privateSet(this, _currentContent, create_element_ka_create_element("div", { class: "content" }, [], jodasplit_privateGet(this, _currentParent)));
    jodasplit_privateSet(this, _currentChildren, create_element_ka_create_element("div", { class: "children" }, [], jodasplit_privateGet(this, _currentParent)));
    return jodasplit_privateGet(this, _currentParent);
  }
  process(source) {
    let lastLayer = 1;
    jodasplit_privateGet(this, _target).append(jodasplit_privateGet(this, _currentParent));
    Array.from(source.children).forEach((child) => {
      if (child instanceof HTMLElement && child.matches("footer")) {
        jodasplit_privateGet(this, _target).appendChild(child);
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
      jodasplit_privateGet(this, _currentContent).appendChild(child);
    });
    Array.from(jodasplit_privateGet(this, _target).querySelectorAll(".children")).forEach((child) => {
      if (child.children.length === 0) {
        child.remove();
      }
    });
    Array.from(jodasplit_privateGet(this, _target).querySelectorAll(".content")).forEach((child) => {
      if (child.children.length === 0) {
        child.remove();
      }
    });
    return jodasplit_privateGet(this, _target);
  }
}
_target = new WeakMap();
_parents = new WeakMap();
_currentParent = new WeakMap();
_currentContent = new WeakMap();
_currentChildren = new WeakMap();

;// CONCATENATED MODULE: ./workspaces/jodastyle/src/processor/jodashorts.ts
class Jodashorts {
  constructor(logger) {
    this.logger = logger;
  }
  process(source) {
    source = source.replace(/\\[([a-z0-9\\-)]+)(.*?)]/g, (match, name, attrStr) => {
      let attrs = {
        "class": []
      };
      attrStr = attrStr.replace(/\u201D/g, '"').replace(/\u201C/g, '"').replace(/\u2018/g, "'").replace(/\u2019/g, "'");
      attrStr = attrStr.replace(/([a-z0-9\\-\\.]+)=(["'])(.*?)\\2/mig, (match2, name2, quote, value) => {
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
          attrstr += \` class="\${attrs[attr].join(" ")}"\`;
        } else {
          attrstr += \` \${attr}="\${attrs[attr]}"\`;
        }
      }
      let ret = \`<\${name}\${attrstr}></\${name}>\`;
      return ret;
    });
    return source;
  }
}

;// CONCATENATED MODULE: ./workspaces/jodastyle/src/component/joda-split.ts
var joda_split_defProp = Object.defineProperty;
var joda_split_getOwnPropDesc = Object.getOwnPropertyDescriptor;
var joda_split_decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? joda_split_getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    joda_split_defProp(target, key, result);
  return result;
};
var joda_split_accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var joda_split_privateGet = (obj, member, getter) => {
  joda_split_accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var joda_split_privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var joda_split_privateSet = (obj, member, value, setter) => {
  joda_split_accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var joda_split_async = (__this, __arguments, generator) => {
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
    joda_split_privateAdd(this, _ready, false);
  }
  get ready() {
    return joda_split_privateGet(this, _ready);
  }
  connectedCallback() {
    return joda_split_async(this, null, function* () {
      let logger = new Logger("joda-split");
      yield sleep_ka_sleep(1);
      if (jodaSiteConfig.debug_visualize) {
        this.classList.add("joda-debug-visualize");
      }
      if (jodaSiteConfig.disable_split) {
        joda_split_privateSet(this, _ready, true);
        return;
      }
      let jodaShorts = new Jodashorts(logger);
      this.innerHTML = yield jodaShorts.process(this.innerHTML);
      let jodaSplit = new Jodasplit(logger);
      let fragment = document.createDocumentFragment();
      fragment.append(yield jodaSplit.process(this));
      this.innerHTML = "";
      this.append(fragment);
      joda_split_privateSet(this, _ready, true);
    });
  }
};
_ready = new WeakMap();
JodaSplit = joda_split_decorateClass([
  customElement("joda-split")
], JodaSplit);

;// CONCATENATED MODULE: ./workspaces/jodastyle/src/types/DefaultLayout.ts
class DefaultLayout {
  constructor() {
    this.container = "container";
    this.break1 = "xl";
  }
}

;// CONCATENATED MODULE: ./workspaces/jodastyle/src/helper/JodaDescriptionManager.ts
var JodaDescriptionManager_defProp = Object.defineProperty;
var JodaDescriptionManager_getOwnPropSymbols = Object.getOwnPropertySymbols;
var JodaDescriptionManager_hasOwnProp = Object.prototype.hasOwnProperty;
var JodaDescriptionManager_propIsEnum = Object.prototype.propertyIsEnumerable;
var JodaDescriptionManager_defNormalProp = (obj, key, value) => key in obj ? JodaDescriptionManager_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var JodaDescriptionManager_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (JodaDescriptionManager_hasOwnProp.call(b, prop))
      JodaDescriptionManager_defNormalProp(a, prop, b[prop]);
  if (JodaDescriptionManager_getOwnPropSymbols)
    for (var prop of JodaDescriptionManager_getOwnPropSymbols(b)) {
      if (JodaDescriptionManager_propIsEnum.call(b, prop))
        JodaDescriptionManager_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
class __JodaDescriptionManager {
  addClass(category, className, description, example, modifiers, config = {}) {
    let defaultConfig = {
      bodyClasses: [],
      parseMarkdown: true
    };
    config = JodaDescriptionManager_spreadValues(JodaDescriptionManager_spreadValues({}, defaultConfig), config);
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

;// CONCATENATED MODULE: ./workspaces/jodastyle/src/index.ts














;// CONCATENATED MODULE: ./workspaces/jodastyle/index.ts


;// CONCATENATED MODULE: ./workspaces/themejs1/sections/navbar-blox/navbar-blox.ts

Joda.registerTemplate(
  "navbar-blox",
  // language=HTML
  \`

        <div class="tjs__navbar-blox">
            <div class="wrapper">
                <div class="firstline">
                    <div class="tjs__content [[ layout.container ]]">
                        <slot data-select=".brand" data-copy data-replace></slot>
                    </div>
                </div>

                <div class="secondline" style="box-shadow: 0px 1px 2px #00000029;background: white">
                    <div class="tjs__main-container [[ layout.container ]]">
                        <div class="tjs__row1">


                            <div class="tjs__logo :: mobile :md: " href="/" aria-label="Home">
                                <slot data-select=".brand" data-replace></slot>
                            </div>



                            <div class="tjs__row2">
                                <div class="tjs__nav-main" >

                                    <slot data-select=".nav-bar-main" data-replace></slot>

                                </div>


                                <div class="tjs__hamburger">
                                    <div class="use-hamburger :: justify-content-center :lg: text-start"
                                         style="display: flex; padding-right:20px; align-items: center; justify-content: right; height:100%;width:100%"></div>
                                </div>
                            </div>


                        </div>
                        <div class="sidenav-positioner">
                            <div class="sidenav">
                                <slot data-select=".nav-menu"></slot>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    \`
);

;// CONCATENATED MODULE: ./workspaces/themejs1/sections/sec-legal-content/sec-legal-content.ts

Joda.registerTemplate(
  "sec-legal-content",
  // language=HTML
  \`

        <section class="tjs__sec-legal-content :: mobile :lg:">
            <div class="out-wrapper">
                <div class="container p-0">
                    <div class="inner-wrapper :: p-4 :lg: p-5">
                            <div class="tjs__section-text">
                                <slot></slot>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    \`
);

;// CONCATENATED MODULE: ./workspaces/themejs1/sections/sec-testimonial-ribbon/sec-testimonial-ribbon.ts

Joda.registerTemplate(
  "sec-testimonial-ribbon",
  // language=HTML
  \`

        <div class="tjs__sec-testimonial-ribbon :: mobile :lg:">
            <div class="tjs__sec-testimonial-ribbon--wrapper">
                <div class="tjs__sec-testimonial-ribbon--container [[layout.container]] :: :xl: mt-0">
                    <div class="row">
                        <div class="col-lg-3 image-round mx-auto ::  :xl: my-auto">
                            <div class="ratio ratio-1x1">
                                <slot data-select="img" data-replace=""></slot>
                            </div>

                        </div>
                        <div class="col-lg-9 text-format :: :lg: my-auto">
                            <slot></slot>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    \`
);

;// CONCATENATED MODULE: ./workspaces/themejs1/sections/sec-card-2col/sec-card-2col.ts

Joda.registerTemplate(
  "sec-card-2col",
  // language=HTML
  \`

        <section class="tjs__sec-card-2col">
            <div class="tjs__sec-card-2col--container [[layout.container]]">
                <div class="row [[layout.order === 'reverse' ? 'flex-row-reverse': '']] [[layout.mobile_reverse === 'yes' ? ':: flex-row-reverse :lg:': '']]">
                    <div class="tjs__sec-card-2col--col-start tjs__section-text">
                        <slot></slot>
                    </div>
                    <div class="tjs__sec-card-2col--col-end image-side ">
                        <slot class="[[layout.slideshow === true ? 'slideshow' : '']]" data-select="img, .children > .section-hr.aside, .aside" [[layout.slideshow !== true ? 'data-limit="1"' : '' ]]></slot>
                    </div>
                </div>
            </div>
        </section>
    \`
);

;// CONCATENATED MODULE: ./workspaces/themejs1/sections/hero-max/hero-max.ts

Joda.registerTemplate(
  "hero-max",
  // language=HTML
  \`

        <section class="tjs__hero-max [[layout.class]] [[layout.autoheight === false ? '' : 'tjs__hero-max--autoheight' ]] :: mobile :lg: desktop">
            <slot data-select="img.background, :scope>.content>p.background>img" class="slideshow"></slot>
            <div class="tjs__hero-max--out-wrapper ">
                <div class="tjs__hero-max--container [[layout.container]]">
                    <div class="tjs__hero-max--inner-wrapper">
                            <div class="tjs__hero-max--section-text">
                                <slot></slot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    \`
);

;// CONCATENATED MODULE: ./workspaces/themejs1/sections/hero-ribbon/hero-ribbon.ts

Joda.registerTemplate(
  "hero-ribbon",
  // language=HTML
  \`

        <div class="tjs__hero-ribbon">
            <slot data-select="h2" class="d-none"></slot>
            <div class="tjs__hero-ribbon--wrapper">
                <div class="tjs__hero-ribbon--container [[layout.container]]">
                    <div class="row ">

                        <slot data-select=".section-h3 > .content"></slot>

                    </div>
                </div>
            </div>

        </div>
    \`
);

;// CONCATENATED MODULE: ./workspaces/themejs1/sections/footer-base/footer-base.ts

Joda.registerTemplate(
  "footer-base",
  // language=HTML
  \`

        <footer class="tjs__footer-base [[layout.class]]">
            <div class="[[layout.container]] h-100">
                <div class="row">
                    <slot data-select=".section-h3 > .content" data-child-class=":: col-12 :xl: col"></slot>
                </div>
            </div>
            <div class="subfooter">
                <slot data-select="#minifooter"></slot>
            </div>
        </footer>
    \`
);

;// CONCATENATED MODULE: ./workspaces/themejs1/sections/cta-base/cta-base.ts

Joda.registerTemplate(
  "cta-base",
  // language=HTML
  \`

        <section class="tjs__cta-base">
            <div class="[[layout.container]]">
                <slot></slot>
            </div>
        </section>
    \`
);

;// CONCATENATED MODULE: ./workspaces/themejs1/sections/sec-multi-card/sec-multi-card.ts

Joda.registerTemplate(
  "sec-multi-card__item",
  // language=HTML
  \`
        <div class="col tjs__sec-multi-card__item">
            <div class="wrapper">

                <slot class="tjs__sec-multi-card__item-img" data-select="img"></slot>


                <div class="tjs__sec-multi-card__item__body text-format">
                    <slot></slot>
                </div>
            </div>

        </div>
    \`
);
Joda.registerTemplate(
  "sec-multi-card",
  // language=HTML
  \`

        <div class="tjs__sec-multi-card">
            <div class="container header">
                <slot data-select=":scope > .content"></slot>
            </div>
            <div class="container">
                <slot class="row g-3 row-cols-1 row-cols-lg-[[ layout.cols ?? 3 ]]" data-select=":scope > .children > *"  data-child-layout="use: #sec-multi-card__item"></slot>
            </div>
        </div>
    \`
);

;// CONCATENATED MODULE: ./workspaces/themejs1/sections/sec-card-feature/sec-card-feature.ts

Joda.registerTemplate(
  "sec-card-feature",
  // language=HTML
  \`
        <div class="tjs__sec-card-feature [[layout.class]]">
            <div class="container">
                <div class="header_image">
                    <slot data-select=":scope > .content img, map" data-replace data-limit="1"></slot>
                </div>
                <div class="row">
                    <div class="col-12 col-lg-6 text-format p-4 p-lg-5 tjs__section-text">
                        <slot></slot>
                    </div>
                    <div class="col-12 col-lg-6 text-format p-4 p-lg-5">
                        <slot data-select=":scope > .children"></slot>
                    </div>
                </div>
            </div>
        </div>
    \`
);

;// CONCATENATED MODULE: ./workspaces/themejs1/sections/hero-title-small/hero-title-small.ts

Joda.registerTemplate(
  "hero-title-small",
  // language=HTML
  \`

    <div class="tjs__hero-title-small">
        <div class="imagewrapper">
            <slot data-select="img, .top"></slot>
        </div>

        <slot></slot>
    </div>
    \`
);

;// CONCATENATED MODULE: ./workspaces/themejs1/sections/cta-form/cta-form.ts

Joda.registerTemplate(
  "cta-form",
  // language=HTML
  \`
        <section class="tjs__cta-form">
            <form  data-micx-formmail-preset="default" data-micx-formmail-sent-message="E-Mail erfolgreich gesendet!">
                <div class="container">
                    <slot data-select=":scope h2"></slot>
                </div>
                <div class="wrapper">
                    <div class="container">
                        <div class="row g-3">
                            <slot data-select=".section-hr" data-replace=""></slot>

                        </div>
                    </div>
                </div>

            </form>
        </section>
    \`
);

;// CONCATENATED MODULE: ./workspaces/themejs1/sections/image-gallery1/image-gallery1.ts

Joda.registerTemplate(
  "image-gallery1__images-image",
  // language=HTML
  \`

        <slot class="tjs-image-gallery1__images-image" data-select="img"></slot>

    \`
);
Joda.registerTemplate(
  "image-gallery1",
  // language=HTML
  \`

        <section class="tjs-image-gallery1 container :: mobile :lg: desktop">
            <slot class="tjs-image-gallery1__header"></slot>
            <slot class="tjs-image-gallery1__images" data-select="ul > li" data-child-layout="use: #image-gallery1__images-image"></slot>
        </section>

    \`
);

;// CONCATENATED MODULE: ./workspaces/themejs1/sections/sections.ts














;// CONCATENATED MODULE: ./workspaces/themejs1/elements/e-form/e-form.ts

Joda.registerTemplate(
  "e-form",
  // language=HTML
  \`
        <form class="tjs__e-form" data-micx-formmail-preset="default" data-micx-formmail-sent-message="E-Mail erfolgreich gesendet!">
            <slot></slot>
        </form>
    \`
);

;// CONCATENATED MODULE: ./workspaces/themejs1/elements/elements.ts


;// CONCATENATED MODULE: ./workspaces/isl-base/elements/accordion/accordion.ts
var accordion_defProp = Object.defineProperty;
var accordion_getOwnPropDesc = Object.getOwnPropertyDescriptor;
var accordion_decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? accordion_getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    accordion_defProp(target, key, result);
  return result;
};
var accordion_async = (__this, __arguments, generator) => {
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


const accordion_tpl = (/* unused pure expression or super */ null && (\`
    <div class="as__image">
        <div class="header" data-ref="header"></div>
        <div class="image" data-ref="image">
        </div>
        <div class="footer" data-ref="footer"></div>
    </div>
\`));
class AccordionLayout extends DefaultLayout {
  constructor() {
    super(...arguments);
    this.accordion_auto_open = "first";
  }
}
let Accordion = class {
  render(element, layout) {
    var _a;
    element.classList.add("as__accordion");
    Array.from(element.querySelectorAll(":scope > .children > .section-h3 > .content h3")).forEach((e, i) => accordion_async(this, null, function* () {
      let newElem = create_element_ka_create_element("a", { class: "as__accordion-header" });
      e.parentNode.parentNode.insertBefore(newElem, e.parentNode);
      newElem.append(e);
      let update = () => {
        element.querySelectorAll(".section-h3 > .content,.children").forEach((e2) => accordion_async(this, null, function* () {
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
Accordion = accordion_decorateClass([
  jodaRenderer("accordion", AccordionLayout)
], Accordion);

;// CONCATENATED MODULE: ./workspaces/isl-base/elements/hamburger/hamburger.ts
var hamburger_defProp = Object.defineProperty;
var hamburger_getOwnPropDesc = Object.getOwnPropertyDescriptor;
var hamburger_decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? hamburger_getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    hamburger_defProp(target, key, result);
  return result;
};



const hamburger_tpl = html_ka_html(\`
<a class="as__hamburger" href="javascript:void(0);" aria-label="Men\\xFC">
    <div class="as__hamburger-bar" ></div>
    <div class="as__hamburger-bar" ></div>
    <div class="as__hamburger-bar" ></div>
    <div class="as__hamburger-menu">Men\\xFC</div>
</a>
\`);
class HamburgerLayout extends DefaultLayout {
}
let Hamburger = class {
  render(element, layout) {
    let main = new QTemplate(hamburger_tpl);
    element.append(main.content);
    main.content.addEventListener("click", () => {
      document.body.classList.toggle("nav-open");
    });
    return element;
  }
};
Hamburger = hamburger_decorateClass([
  jodaRenderer("hamburger", HamburgerLayout)
], Hamburger);

;// CONCATENATED MODULE: ./workspaces/isl-base/elements/input/input.ts
var input_defProp = Object.defineProperty;
var input_getOwnPropDesc = Object.getOwnPropertyDescriptor;
var input_decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? input_getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    input_defProp(target, key, result);
  return result;
};



const tplDefault = \`
<div class="as__input [[layout.style]] [[classes]]">
  <div data-ref="main"></div>
  <label for="[[ id ]]">[[ label ]]</label>
</div>
\`;
const tplCheckbox = \`
<div class="as__input [[classes]] form-check">
 <div data-ref="main"></div>
  <label class="form-check-label" for="[[ id ]]">
    [[ label ]]
  </label>
</div>
\`;
class InputLayout extends DefaultLayout {
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
    let main = new QTemplate(tplDefault);
    if (element instanceof HTMLInputElement) {
      if (element.type === "checkbox" || element.type === "radio") {
        main = new QTemplate(tplCheckbox);
      } else if (element.type === "submit") {
        main = new QTemplate(\`<div class="as__input [[classes]]"><div data-ref="main"></div></div>\`);
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
        let opt = create_element_ka_create_element("option", o, option.label);
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
Input = input_decorateClass([
  jodaRenderer("input", InputLayout)
], Input);

;// CONCATENATED MODULE: ./workspaces/isl-base/elements/map/map.ts
var map_defProp = Object.defineProperty;
var map_getOwnPropDesc = Object.getOwnPropertyDescriptor;
var map_decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? map_getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    map_defProp(target, key, result);
  return result;
};


const map_tpl = \`
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
        <\\/script>
    </div>
\`;
class MapLayout extends DefaultLayout {
  constructor() {
    super(...arguments);
    this.mapPreviewUrl = "https://cdn.leuffen.de/hyperpage-components/v1.0/google-maps/maps-preview.jpg";
  }
}
let map_Map = class {
  render(element, layout) {
    var _a;
    let main = new QTemplate(map_tpl);
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
map_Map = map_decorateClass([
  jodaRenderer("map", MapLayout)
], map_Map);

;// CONCATENATED MODULE: ./workspaces/isl-base/elements/screen/screen.ts
var screen_defProp = Object.defineProperty;
var screen_getOwnPropDesc = Object.getOwnPropertyDescriptor;
var screen_decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? screen_getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    screen_defProp(target, key, result);
  return result;
};


const screen_tpl = \`
    <div class="as__screen [[layout.type]]">
        <div class="as__screen-shadow" style="background-image: url([[layout.cdnBaseUrl]]/screens/[[layout.type]]-shadow.svg);"></div>
        <div class="as__screen-image" data-ref="image"></div>
        <div class="as__screen-overlay" style="background-image: url([[layout.cdnBaseUrl]]/screens/[[layout.type]].svg)"></div>
    </div>
\`;
class ScreenLayout extends DefaultLayout {
  constructor() {
    super(...arguments);
    this.cdnBaseUrl = "https://cdn.leuffen.de/hyperpage-components/v1.0";
    this.type = "mobile";
  }
}
let Screen = class {
  render(element, layout) {
    let q = new QTemplate(screen_tpl);
    q.parse({ layout });
    q.content.classList.add(...Array.from(element.classList));
    q.content.setAttribute("style", element.getAttribute("style"));
    element.setAttribute("style", "");
    element.parentElement.replaceChild(q.content, element);
    q.select("image").append(element);
    return q.content;
  }
};
Screen = screen_decorateClass([
  jodaRenderer("screen", ScreenLayout)
], Screen);

;// CONCATENATED MODULE: ./workspaces/isl-base/elements/navbar-switch1/navbar-switch1.ts

const html = \`

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

\`;
Joda.registerTemplate("navbar-switch1", html);

;// CONCATENATED MODULE: ./workspaces/isl-base/index.ts







;// CONCATENATED MODULE: ./node_modules/@leuffen/liweco-base/dist/business/office-hours.js
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
            const currentTime = \`\${dateObj.getHours()}:\${String(dateObj.getMinutes()).padStart(2, '0')}\`;
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
            return \`Closed due to vacation: \${vacation === null || vacation === void 0 ? void 0 : vacation.title}. Next open date: \${DAY_OF_WEEK[this.getNextOpenDate(dateObj).getDay()]} \${this.getNextOpenDate(dateObj).toLocaleDateString()} at 9:00.\`;
        }
        else if (this.isOpen(dateObj)) {
            const openHours = this.getTodayOpenDates(dateObj);
            const currentOpenHour = openHours.find(hour => \`\${dateObj.getHours()}:\${String(dateObj.getMinutes()).padStart(2, '0')}\` <= hour.till);
            return \`Currently open till \${currentOpenHour === null || currentOpenHour === void 0 ? void 0 : currentOpenHour.till}. Next open date: \${DAY_OF_WEEK[this.getNextOpenDate(dateObj).getDay()]} at 9:00.\`;
        }
        else {
            const nextOpenDate = this.getNextOpenDate(dateObj);
            const nextOpenHours = this.getTodayOpenDates(nextOpenDate);
            const nextOpenDay = DAY_OF_WEEK[nextOpenDate.getDay()];
            const nextOpenDateStr = nextOpenHours.map(hour => \`\${hour.from} - \${hour.till}\`).join(' and ');
            return \`Closed now. Open next: \${nextOpenDay} \${nextOpenDateStr}.\`;
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

;// CONCATENATED MODULE: ./node_modules/@leuffen/liweco-base/dist/helper/functions.js
function markdownToHtml(input) {
    // Kursiv & Fett: ***text***
    let html = input.replace(/\\*\\*\\*(.+?)\\*\\*\\*/g, '<strong><em>$1</em></strong>');
    // Fett: **text**
    html = html.replace(/\\*\\*(.+?)\\*\\*/g, '<strong>$1</strong>');
    // Kursiv: *text*
    html = html.replace(/\\*(.+?)\\*/g, '<em>$1</em>');
    // Horizontaler Trennstrich: ---
    html = html.replace(/---/g, '<hr>');
    return html;
}

;// CONCATENATED MODULE: ./node_modules/@leuffen/liweco-base/dist/components/liweco-vacation-modal.js
var liweco_vacation_modal_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var liweco_vacation_modal_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const defaultModalTemplate = \`
<div class="modal-backdrop fade"></div>
<div class="leu-vacation-modal modal fade d-block" tabindex="-1" data-leu-dismiss="modal" >

    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable %%classes%%" role="dialog">
        <div class="modal-content">
            <div class="modal-header position-relative">
                <h5 class="modal-title">%%title%%</h5>
                <button type="button" class="btn-close position-absolute top-0 end-0 p-4" style="top: 0" data-leu-dismiss="modal" aria-label="Schlie\xDFen"></button>
            </div>
            <div class="modal-body">
                %%body%%
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-leu-dismiss="modal">Schlie\xDFen</button>
            </div>
        </div>
    </div>
</div>
\`;
class OpenHoursInterface {
}
let LiwecoVacationModal = class LiwecoVacationModal extends HTMLElement {
    constructor() {
        super();
        this.origOverflow = "";
    }
    show(meta) {
        var _a;
        return liweco_vacation_modal_awaiter(this, void 0, void 0, function* () {
            this.origOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            let content = defaultModalTemplate;
            content = content.replace("%%title%%", markdownToHtml(meta.title))
                .replace("%%body%%", markdownToHtml(meta.text.replace(/\\n/g, "<br>")))
                .replace("%%classes%%", (_a = meta.classes) !== null && _a !== void 0 ? _a : "");
            this.showElement.innerHTML = content;
            yield sleep_ka_sleep(10);
            this.showElement.querySelectorAll(".fade").forEach((e) => e.classList.add("show"));
        });
    }
    hide() {
        return liweco_vacation_modal_awaiter(this, void 0, void 0, function* () {
            if (this.showElement.innerHTML === "")
                return;
            document.body.style.overflow = this.origOverflow;
            this.showElement.querySelectorAll(".fade").forEach((e) => e.classList.remove("show"));
            yield sleep_ka_sleep(200);
            this.showElement.innerHTML = "";
        });
    }
    connectedCallback() {
        return liweco_vacation_modal_awaiter(this, void 0, void 0, function* () {
            this.style.display = "none";
            yield ka_dom_ready();
            yield sleep_ka_sleep(100);
            if (typeof window["openhours"] === "undefined") {
                console.error("[liweco-vacation-modal] window.openhours not defined");
                return;
            }
            let openhoursData = window["openhours"];
            if (!Array.isArray(openhoursData.vacation)) {
                console.error("[liweco-vacation-modal] window.openhours.vacation is not a array");
                return;
            }
            let openhours = new OfficeHours();
            openhours.loadStruct(openhoursData);
            this.showElement = create_element_ka_create_element("div", { "owner": "leu-vacation-modal" });
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
        return liweco_vacation_modal_awaiter(this, void 0, void 0, function* () {
            this.showElement.remove();
        });
    }
};
LiwecoVacationModal = liweco_vacation_modal_decorate([
    customElement("liweco-vacation-modal"),
    __metadata("design:paramtypes", [])
], LiwecoVacationModal);


;// CONCATENATED MODULE: ./node_modules/@leuffen/liweco-base/dist/components/liweco-news.js
var liweco_news_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var liweco_news_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var liweco_news_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let liweco_news_LiwecoVacationModal = class LiwecoVacationModal extends HTMLElement {
    constructor() {
        super();
        this.default = null;
    }
    connectedCallback() {
        return liweco_news_awaiter(this, void 0, void 0, function* () {
            yield ka_dom_ready();
            yield sleep_ka_sleep(100);
            let dataClass = this.getAttribute("data-class");
            if (typeof window["openhours"] === "undefined") {
                console.error("[liweco-news] window.openhours not defined");
                return;
            }
            let openhoursData = window["openhours"];
            let openhours = new OfficeHours();
            openhours.loadStruct(openhoursData);
            if (this.default === null)
                this.default = this.innerHTML;
            this.innerHTML = "";
            let newsDiv = create_element_ka_create_element("div", { "data-owner": "liweco-news", class: dataClass }, "", this);
            let msgCount = 0;
            for (let curVac of openhours.getUpcomingVacation(null)) {
                msgCount++;
                create_element_ka_create_element("p", { "data-owner": "liweco-vacaction" }, null, newsDiv).innerHTML = markdownToHtml(curVac.title);
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
liweco_news_LiwecoVacationModal = liweco_news_decorate([
    customElement("liweco-news"),
    liweco_news_metadata("design:paramtypes", [])
], liweco_news_LiwecoVacationModal);


;// CONCATENATED MODULE: ./node_modules/@leuffen/liweco-base/dist/components/liweco-collapse-openhour-table.js
var liweco_collapse_openhour_table_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var liweco_collapse_openhour_table_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
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
        return liweco_collapse_openhour_table_awaiter(this, void 0, void 0, function* () {
            console.log("connected");
            yield sleep_ka_sleep(1);
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
LiwecoCollapseOpenhourTable = liweco_collapse_openhour_table_decorate([
    customElement('liweco-collapse-openhour-table')
], LiwecoCollapseOpenhourTable);

;// CONCATENATED MODULE: ./node_modules/@leuffen/liweco-base/dist/index.js







;// CONCATENATED MODULE: ./workspaces/themejs1/index.ts







liscom_enable();

;// CONCATENATED MODULE: ./node_modules/@micx/lib-js/dist/mediastore/MicxImageUrlDecoderV2.js
class MicxImageUrlDecoderV2Result {
}
class MicxImageUrlDecoderV2 {
    constructor(url) {
        this.url = url;
    }
    decode() {
        const parts = this.url.split('/');
        if (parts.length < 4)
            throw new Error("Invalid url format");
        const id = parts[1];
        let [encodedAspect, encodedWidths] = parts[2].split("_");
        const [filename, extensions] = parts[3].split(".");
        encodedWidths = encodedWidths.replaceAll(/([a-zA-Z])/g, (w) => { var _a; return "-" + ((_a = MicxImageUrlDecoderV2.WIDTH_SHORTCUTS[w]) !== null && _a !== void 0 ? _a : w) + "-"; });
        encodedAspect = encodedAspect.replaceAll(/([a-zA-Z])/g, (w) => { var _a; return (_a = MicxImageUrlDecoderV2.RATIO_SHORTCUTS[w]) !== null && _a !== void 0 ? _a : w; });
        const aspect = encodedAspect.split('-').join('/');
        const widths = encodedWidths.split('-').filter(w => w.trim() !== "");
        return {
            id,
            aspectRatio: aspect,
            widths,
            filename,
            extensions: extensions.split("_"),
        };
    }
}
MicxImageUrlDecoderV2.RATIO_SHORTCUTS = {
    "a": "1-1",
    "b": "4-3",
    "c": "3-2",
    "d": "16-9",
    "e": "21-9",
    "B": "3-4",
    "C": "2-3",
    "D": "9-16",
    "E": "9-21"
};
MicxImageUrlDecoderV2.WIDTH_SHORTCUTS = {
    "a": "260",
    "b": "414",
    "c": "896",
    "d": "1280",
    "e": "1440",
    "f": "1920",
    "g": "2560",
};

;// CONCATENATED MODULE: ./node_modules/@micx/lib-js/dist/mediastore/MicxImageUrlEncoderV2.js
class MicxImageUrlEncoderV2 {
    constructor(id, filename) {
        this.id = id;
        this.filename = filename;
        this.widths = [];
        this.extensions = [];
        this.ratio = '';
    }
    setAspectRatio(width, height) {
        this.ratio = \`\${width}-\${height}\`;
    }
    setReatio(ratio) {
        ratio = ratio.replaceAll("/", "-");
        this.ratio = ratio;
    }
    setWidths(widths) {
        console.log("set widths", widths);
        this.widths = widths.map(width => width.toString());
        return this;
    }
    addWidth(width) {
        this.widths.push(width.toString());
    }
    setExtensions(extensions) {
        this.extensions = extensions;
        return this;
    }
    toString() {
        let widths = this.widths.join("-");
        let extensions = this.extensions.join("_");
        let aspect = this.ratio;
        aspect = aspect.replace(/([0-9\\-]+)/, (w) => { var _a; return (_a = MicxImageUrlEncoderV2.RATIO_SHORTCUTS[w]) !== null && _a !== void 0 ? _a : w; });
        widths = widths.replace(/([0-9]+)/g, (w) => { var _a; return (_a = MicxImageUrlEncoderV2.WIDTH_SHORTCUTS[w]) !== null && _a !== void 0 ? _a : w; });
        return \`v2/\${this.id}/\${aspect}_\${widths}/\${this.filename}.\${extensions}\`;
    }
}
MicxImageUrlEncoderV2.RATIO_SHORTCUTS = {
    "1-1": "a",
    "4-3": "b",
    "3-2": "c",
    "16-9": "d",
    "21-9": "e",
    "3-4": "B",
    "2-3": "C",
    "9-16": "D",
    "9-21": "E"
};
MicxImageUrlEncoderV2.WIDTH_SHORTCUTS = {
    "260": "a",
    "414": "b",
    "896": "c",
    "1280": "d",
    "1440": "e",
    "1920": "f",
    "2560": "g",
};

;// CONCATENATED MODULE: ./node_modules/@micx/lib-js/dist/helper/functions.js
var helper_functions_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function dom_ready() {
    return helper_functions_awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            if (document.readyState === "complete" || document.readyState === "interactive")
                return resolve("loaded");
            document.addEventListener("DOMContentLoaded", () => resolve('DOMContentLoaded'));
        });
    });
}
function sleep(sleepms) {
    return helper_functions_awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            window.setTimeout(() => {
                return resolve();
            }, sleepms);
        });
    });
}

;// CONCATENATED MODULE: ./node_modules/@micx/lib-js/dist/hit-index.js
var _a, _b;
let state = sessionStorage.getItem("micx_hit_index");
if (state === null) {
    sessionStorage.setItem("micx_hit_index", "0");
}
sessionStorage.setItem("micx_hit_index", "" + (parseInt((_a = sessionStorage.getItem("micx_hit_index")) !== null && _a !== void 0 ? _a : "0") + 1));
const hitIndex = parseInt((_b = sessionStorage.getItem("micx_hit_index")) !== null && _b !== void 0 ? _b : "0");

;// CONCATENATED MODULE: ./node_modules/@micx/lib-js/dist/mediastore/MicxCdnImgElement.js
var MicxCdnImgElement_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const loadDirect = 2;
class MicxCdnImgElement {
    constructor(image, index) {
        this.image = image;
        this.isPreloaded = false;
        this.myElementIndex = index;
        let uri = image.src;
        uri.replace(/^(.*?\\/)(v2\\/.*)$/, (p0, base, path) => {
            this.base = base;
            this.path = path;
            return "";
        });
        let dimensions = (new MicxImageUrlDecoderV2(this.path)).decode();
        this.setOptimalImageDimensions(dimensions);
        // wait for image to be fully loaded
        let listener = () => {
            this.image.removeEventListener("load", listener);
            this.loadHiRes(dimensions);
        };
        this.image.addEventListener("load", listener);
        if (this.image.complete === true || this.myElementIndex < loadDirect) {
            this.loadHiRes(dimensions);
        }
    }
    loadHiRes(dimensions) {
        return MicxCdnImgElement_awaiter(this, void 0, void 0, function* () {
            yield dom_ready();
            // If first load of website: wait 2 seconds to load styles first.
            if (hitIndex === 1) {
                yield sleep(2000);
            }
            yield sleep(40); // Settle image size
            // detect actual dimensions of image element (Fallback innerWidth for Safari Garbage)
            let w = this.image.getBoundingClientRect().width;
            if (w === 0 || w === null)
                w = window.innerWidth;
            // Get best fitting width from dimensions
            let bestWidth = parseInt(dimensions.widths[0]);
            for (let wn of dimensions.widths) {
                let wnI = parseInt(wn);
                if (wnI < w) {
                    break;
                }
                bestWidth = wnI;
            }
            let e2 = new MicxImageUrlEncoderV2(dimensions.id, dimensions.filename);
            e2.setReatio(dimensions.aspectRatio);
            e2.addWidth(bestWidth);
            e2.setExtensions(dimensions.extensions);
            let url = this.base + "/" + e2.toString();
            if (this.myElementIndex < loadDirect && !this.isPreloaded) {
                this.isPreloaded = true;
                let preloadLink = document.createElement("link");
                preloadLink.setAttribute("rel", "preload");
                preloadLink.setAttribute("fetchpriority", "high");
                preloadLink.setAttribute("as", "image");
                preloadLink.setAttribute("href", url);
                document.head.append(preloadLink);
            }
            let preload = new Image();
            preload.src = url;
            preload.addEventListener("load", () => {
                this.image.setAttribute("src", url);
                this.image.classList.remove("micx-image-loader");
            });
        });
    }
    /**
     * Set the Image Dimensions to the optimal (best width) for the current screen size
     *
     * @private
     */
    setOptimalImageDimensions(dimensions) {
        let aspectRatioMultiplier = dimensions.aspectRatio.split("/").map((v) => parseInt(v));
        // Devide first by second
        let aspectRatio = aspectRatioMultiplier[0] / aspectRatioMultiplier[1];
        let w = parseInt(dimensions.widths[0]);
        for (let wn of dimensions.widths) {
            let wnI = parseInt(wn);
            if (wnI < window.innerWidth) {
                break;
            }
            w = wnI;
        }
        if (this.myElementIndex >= loadDirect) {
            // set lazy loading
            this.image.setAttribute("loading", "lazy");
            this.image.setAttribute("src", this.image.getAttribute("src"));
        }
        this.image.setAttribute("width", w.toString());
        this.image.setAttribute("height", (w / aspectRatio).toString());
        this.image.classList.add("micx-image-loader");
        if (this.image.hasAttribute("alt") === false)
            this.image.setAttribute("alt", dimensions.filename);
    }
}

;// CONCATENATED MODULE: ./node_modules/@micx/lib-js/dist/mediastore/MicxCdnImageObserver.js
var MicxCdnImageObserver_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let cdnIdx = 0;
class MicxCdnImageObserver {
    applyToImg(image) {
        if (image["micx_cdn_observer"] === true)
            return;
        image["micx_cdn_observer"] = true;
        if (image.src.indexOf("/v2/") === -1)
            return; // Not a CDN image
        if (!image.hasAttribute("micx_cdn_idx"))
            image.setAttribute("micx_cdn_idx", "" + cdnIdx++);
        let e = new MicxCdnImgElement(image, parseInt(image.getAttribute("micx_cdn_idx")));
    }
    observe() {
        return MicxCdnImageObserver_awaiter(this, void 0, void 0, function* () {
            let round = 1;
            while (true) {
                yield sleep(20 * round++);
                document.querySelectorAll("img").forEach(img => {
                    this.applyToImg(img);
                });
                if (round > 50)
                    round = 50;
            }
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/@micx/lib-js/dist/formmail/MicxFormmailerApi.js
var MicxFormmailerApi_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class MicxFormmailerApi {
    constructor(subscription_id, endpoint_url) {
        this.subscription_id = subscription_id;
        this.endpoint_url = endpoint_url;
        console.log('MicxFormmailer constructor');
    }
    sendData(data, preset = "default") {
        return MicxFormmailerApi_awaiter(this, void 0, void 0, function* () {
            console.log('MicxFormmailer send data', data);
            data["__sending_hostname"] = window.location.href;
            data["__micxlib_rev"] = MicxlibRev;
            // make all keys of data lowercase and replace - and space by _
            let data2 = {};
            for (let key in data) {
                let key2 = key.toLowerCase().replace(/[\\s]/g, "_").replace(/-/g, "");
                data2[key2] = data[key];
            }
            data = data2;
            let result = yield fetch(this.endpoint_url + \`?&subscription_id=\${this.subscription_id}&preset=\${preset}\`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data),
                cache: "no-cache"
            });
            if (!result.ok) {
                let errorMsg = yield result.text();
                console.error(\`Formmail Server Error\`, errorMsg);
                throw "Cannot send mail: " + errorMsg;
            }
            let successMsg = yield result.json();
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/@micx/lib-js/dist/Micx.js
var Micx_a;

class Micx {
    static get formMailerApi() {
        return new MicxFormmailerApi(Micx.subscription_id, Micx.endpoint_root_url + "/v1/formmailer/send");
    }
}
Micx.endpoint_root_url = "https://ws.micx.io";
Micx.subscription_id = (Micx_a = window["micx_subscription_id"]) !== null && Micx_a !== void 0 ? Micx_a : null;

;// CONCATENATED MODULE: ./node_modules/@micx/lib-js/dist/formmail/MicxFormmailHelper.js
class MicxFormmailHelper {
    static collectFormData(form) {
        var _a;
        let invalidForms = [];
        let formdata = {};
        let unnamedFieldIndex = 0;
        for (let el of form.querySelectorAll("input,select,textarea")) {
            let valid = el.validity.valid;
            if (el.type.toLowerCase() === "email" && el.value.trim() !== "") {
                el.value = el.value.trim(); // Trim EMail
                valid = el.validity.valid;
                if (el.value.match(/^[\\p{L}\\d._%+-]+@[\\p{L}\\d.-]+.[\\p{L}]{2,}$/u) === null)
                    valid = false;
            }
            if (valid === false)
                invalidForms.push(el);
            if (el.name === "" && el.id === "") {
                if (el.type !== "submit")
                    console.warn("[Warning] Skipping Form-Element without id or name attribute", el);
                continue;
            }
            let name = el.name;
            if (name === "")
                name = el.id;
            if (name === "")
                name = (_a = el.getAttribute("label")) !== null && _a !== void 0 ? _a : "unnamed_" + unnamedFieldIndex++;
            name = name.trim();
            if (el.type === "checkbox" && el["checked"] === false)
                continue;
            if (name.endsWith("[]")) {
                name = name.slice(0, -2);
                if (!Array.isArray(formdata[name]))
                    formdata[name] = [];
                formdata[name].push(el.value);
            }
            else {
                formdata[name] = el.value;
            }
        }
        return { formdata, invalidForms };
    }
}

;// CONCATENATED MODULE: ./node_modules/@micx/lib-js/dist/formmail/MicxFormmailDefaultBootstrapStyle.js
const invalidFeedbackAttr = "__micxformmail_invalid_feedback";
class MicxFormmailDefaultBootstrapStyle {
    constructor() {
        this.bntOrigText = "";
    }
    markInvalid(el) {
        el.classList.add("is-invalid");
        if (el.dataset.invalidMsg) {
            let node = document.createElement("div");
            node.classList.add("invalid-feedback");
            node.innerHTML = el.dataset.invalidMsg;
            el.insertAdjacentElement("afterend", node);
            el[invalidFeedbackAttr] = node;
        }
    }
    markValid(el) {
        el.classList.add("is-valid");
    }
    setFormInvalid(form) {
    }
    setFormSending(form) {
        let btn = form.querySelector("input[type='submit'],button[type='submit']");
        let orig = "";
        if (btn instanceof HTMLInputElement) {
            this.bntOrigText = btn.value;
            btn.value = "Sending...";
        }
        else {
            this.bntOrigText = btn.innerHTML;
            btn.innerHTML = "Sending...";
        }
    }
    setFormSentError(form) {
        if (this.bntOrigText !== "") {
            let btn = form.querySelector("input[type='submit'],button[type='submit']");
            if (btn instanceof HTMLInputElement) {
                btn.value = this.bntOrigText;
            }
            else {
                btn.innerHTML = this.bntOrigText;
            }
        }
        alert("[Error] Sending email failed! See browser console for details.");
    }
    setFormSentOk(form) {
        var _a;
        form.querySelectorAll("input,textarea").forEach(e => e.setAttribute("readonly", "readonly"));
        let node = document.createElement("div");
        let message = (_a = form.getAttribute("data-micx-formmail-sent-message")) !== null && _a !== void 0 ? _a : "E-Mail sent successfully!";
        node.innerHTML = \`<div class='alert alert-success'>\${message}</div>\`;
        form.querySelector("input[type='submit'],button[type='submit']").replaceWith(node);
    }
    setFormValid(form) {
    }
    unmarkInvalid(el) {
        el.classList.remove("is-invalid");
    }
    unmarkValid(el) {
        el.classList.remove("is-valid");
    }
    resetValidation(form) {
        form.querySelectorAll(".is-invalid").forEach((e) => {
            if (e[invalidFeedbackAttr] !== undefined) {
                e[invalidFeedbackAttr].remove();
                delete e[invalidFeedbackAttr];
            }
            e.classList.remove("is-invalid");
        });
        form.querySelectorAll(".is-valid").forEach(e => e.classList.remove("is-valid"));
    }
}

;// CONCATENATED MODULE: ./node_modules/@micx/lib-js/dist/formmail/MicxFormmailFacade.js
var MicxFormmailFacade_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class MicxFormmailConfig {
    constructor() {
        /**
         * Prevent observed Forms from submitting by pressing Enter
         */
        this.preventEnterSubmitForm = true;
    }
}
class MicxFormmailFacade {
    constructor(formMailer = Micx.formMailerApi, config = new MicxFormmailConfig(), formatter = new MicxFormmailDefaultBootstrapStyle()) {
        this.formMailer = formMailer;
        this.config = config;
        this.formatter = formatter;
    }
    isMicxFormElement(element) {
        return MicxFormmailFacade_awaiter(this, void 0, void 0, function* () {
            if (element.tagName !== "FORM")
                element = element.closest("form");
            if (element === null)
                return false;
            if (!element.hasAttribute("data-micx-formmail-preset"))
                return false;
            return true;
        });
    }
    /**
     * Observe for submit events from <form data-micx-formmail-preset="default"> forms
     *
     * @param htmlElement
     */
    observe(htmlElement = null) {
        return MicxFormmailFacade_awaiter(this, void 0, void 0, function* () {
            yield dom_ready();
            htmlElement = htmlElement || document.body;
            if (this.config.preventEnterSubmitForm) {
                htmlElement.addEventListener("submit", (e) => MicxFormmailFacade_awaiter(this, void 0, void 0, function* () {
                    console.log("submit", e);
                    if (!this.isMicxFormElement(e.target))
                        return;
                    e.preventDefault();
                    e.stopPropagation();
                }));
                htmlElement.addEventListener('keydown', (event) => MicxFormmailFacade_awaiter(this, void 0, void 0, function* () {
                    if (!this.isMicxFormElement(event.target))
                        return;
                    if (event.key === "Enter" && event.target["type"] !== "submit" && event.target["type"] !== "textarea") {
                        event.preventDefault();
                    }
                }));
            }
            htmlElement.addEventListener("click", (e) => {
                let target = e.target;
                if (!this.isMicxFormElement(target))
                    return;
                let button = target.closest("button[type='submit'],input[type='submit']");
                if (button === null)
                    return;
                let form = target.closest("form");
                e.preventDefault();
                e.stopPropagation();
                this.processForm(form);
            });
        });
    }
    processForm(form) {
        var _a;
        return MicxFormmailFacade_awaiter(this, void 0, void 0, function* () {
            let formCollectedData = MicxFormmailHelper.collectFormData(form);
            this.formatter.resetValidation(form);
            if (formCollectedData.invalidForms.length > 0) {
                for (let el of formCollectedData.invalidForms) {
                    this.formatter.markInvalid(el);
                }
                this.formatter.setFormInvalid(form);
                form.dispatchEvent(new Event("invalid", {}));
                return;
            }
            let submitButton = form.querySelector("[type='submit']");
            submitButton.setAttribute("disabled", "disabled");
            this.formatter.setFormSending(form);
            try {
                let response = yield this.formMailer.sendData(formCollectedData.formdata, (_a = form.getAttribute("data-micx-formmail-preset")) !== null && _a !== void 0 ? _a : "default");
                submitButton.removeAttribute("disabled");
                this.formatter.setFormSentOk(form);
            }
            catch (e) {
                submitButton.removeAttribute("disabled");
                this.formatter.setFormSentError(form);
            }
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/@micx/lib-js/dist/index.js

const MicxlibRev = "1.0.6";






let o = new MicxCdnImageObserver();
o.observe();

;// CONCATENATED MODULE: ./src/index.ts


new MicxFormmailFacade().observe();


//# sourceURL=webpack:///./src/index.ts_+_95_modules?`)},825:()=>{eval(`

//# sourceURL=webpack:///./workspaces/jodastyle/src/helper/JodaRenderer.ts?`)},560:()=>{eval(`class MyComponent extends HTMLElement {
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


//# sourceURL=webpack:///./workspaces/liscom/src/slider/liscom-slider.ts?`)},838:()=>{eval(`class TypewriterElement extends HTMLElement {
  constructor() {
    super();
    this.words = [];
    this.index = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    // Container f\xFCr den Cursor
    // Werte f\xFCr die Timeouts
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


//# sourceURL=webpack:///./workspaces/liscom/src/typewriter-element/typewriter-element.ts?`)}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(t!==void 0)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}var __webpack_exports__=__webpack_require__(165)})();
