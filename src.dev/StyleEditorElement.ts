import {JodaDescriptionManager} from "@leuffen/jodastyle";
import {customElement, ka_dom_ready, ka_sleep, KaCustomElement, template} from "@kasimirjs/embed";
import {SidebarWrapper} from "@kasimirjs/kit-bootstrap";


function getCSSVariables(element) {
    const computedStyles = window.getComputedStyle(element);
    const cssVariables = {};

    // Loop through computed styles and extract variables
    Array.from(computedStyles).forEach((property) => {
        if (property.startsWith("--")) {
            cssVariables[property] = computedStyles.getPropertyValue(property);
        }
    });

    return cssVariables;
}
class StyleManager {

    // Load all css variables on body Element that are not already defined in root element and
    // create a key value map
    getCustomStyles() {
        let style = getComputedStyle(document.body);
        console.log("computed style", style);
        let rootStyle = getComputedStyle(document.body.parentElement);
        let customStyles = getCSSVariables(document.body);

        return customStyles;

    }
}


// language=HTML
const tpl = `
<div class="row h-100 overflow-scroll style-editor">
    <div class="col col-auto" ka.for="let key in styles ">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">[[ key ]]</label>
            <input ka.if="$fn.getType(key) === 'text'" type="text" class="form-control" id="exampleFormControlInput1" ka.bind="styles[key]">
            <div ka.if="$fn.getType(key) === 'color'" class="input-group mb-3">
                <input type="text" class="form-control"  ka.bind="styles[key]">
                <input type="color" class="form-control"  ka.bind="styles[key]">
            </div>

        </div>

    </div>
    <style>
        .style-editor {
            font-size: 10px;
            font-family: monospace;
        }
        .style-editor input {
            font-size: 12px;
            padding: 0.2rem 0.5rem;
            width: 100%;
        }
    </style>
</div>
`;





@template(tpl)@customElement("style-editor-element")
export class StyleEditorElement extends KaCustomElement {

    #styleManager = new StyleManager();

    constructor() {
        super();

        this.wrap(new SidebarWrapper())
        let scope = this.init({
            styles: {},
            $fn: {
                getType: (key : string) => {
                    if (key.indexOf("color") !== -1) {
                        return "color";
                    }
                    return "text";
                }
            },
            $on: {
                change: (event : Event) => {
                    this.scope.render();
                }

            }
        });
    }

    async connectedCallback(): Promise<void> {
        await ka_dom_ready();
        await ka_sleep(1000);

        this.scope.styles = this.#styleManager.getCustomStyles();
        console.log("connectedCallback", this.scope.desc);
        super.connectedCallback();
    }

    async disconnectedCallback(): Promise<void> {
        console.log("disconnect", this);

        super.disconnectedCallback();

    }
}
