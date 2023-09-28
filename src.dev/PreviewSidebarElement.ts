import {
    customElement,
    ka_create_element,
    ka_dom_ready,
    KaCustomElement,
    KaCustomWrapper,
    template
} from "@kasimirjs/embed";
import {ka_session_storage} from "@kasimirjs/embed";
import {JodaDescriptionManager, Jodasplit, Logger} from "@leuffen/jodastyle";
import {SidebarWrapper, SidebarWrapperConfig} from "@kasimirjs/kit-bootstrap";




const config : SidebarWrapperConfig = {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-display-fill" viewBox="0 0 16 16">
      <path d="M6 12c0 .667-.083 1.167-.25 1.5H5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-.75c-.167-.333-.25-.833-.25-1.5h4c2 0 2-2 2-2V4c0-2-2-2-2-2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h4z"/>
    </svg>`
}


// language=HTML
const tpl2 = `
<div>
    <select ka.options="$scope.desc" ka.bind="$scope.className" style="width:100%"></select>
    <input ka.bind="$scope.text">
</div>
`;


@customElement("preview-sidebar-element")
@template(tpl2)
class PreviewSidebarElement extends KaCustomElement {
    static html;
    constructor() {
        super();
        this.wrap(new SidebarWrapper(config));

        console.log(JodaDescriptionManager.classes);
        let scope = this.init({
            desc: JodaDescriptionManager.classes,
            text: "test",
            className: "test",
            $on: {
                change: (e) => {
                    window.history.pushState({}, "", "?className=" + scope.className);
                }
            }
        });

        let last = "";


    }
}


(async()=> {
    await ka_dom_ready();
    console.log("Wurst");
    document.body.append(new PreviewElement())
})()
