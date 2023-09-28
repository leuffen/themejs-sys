import {JodaDescriptionManager} from "@leuffen/jodastyle";
import {customElement, ka_sleep, KaCustomElement, template} from "@kasimirjs/embed";

// language=HTML
const tpl = `
<div class="row">
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
`;



@template(tpl)@customElement("showcase-element")
class ShowcaseElement extends KaCustomElement {

    constructor() {
        super();

        let scope = this.init({
            desc: JodaDescriptionManager.data,
            $on: {

            }
        });
    }

    async connectedCallback(): Promise<void> {
        await ka_sleep(1);

        this.scope.desc = JodaDescriptionManager.data.filter(e => e.category === this.getAttribute("data-category"));
        console.log("connectedCallback", this.scope.desc);
        super.connectedCallback();
    }

    async disconnectedCallback(): Promise<void> {
        console.log("disconnect", this);
        this.scope.desc = [];
        super.disconnectedCallback();

    }
}
