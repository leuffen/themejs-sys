import {customElement, ka_create_element, KaCustomElement, KaCustomWrapper, template} from "@kasimirjs/embed";
import {ka_session_storage} from "@kasimirjs/embed";
import {JodaDescriptionManager, Jodasplit, Logger} from "@leuffen/jodastyle";
import {SidebarWrapper} from "@kasimirjs/kit-bootstrap";



// language=HTML
const tpl2 = `
<div>
    <select ka.options="$scope.desc" ka.bind="$scope.className" style="width:100%"></select>
    <input ka.bind="$scope.text">
</div>
`;


@customElement("switcher-element")
@template(tpl2)
class SubElement extends KaCustomElement {
    static html;
    constructor() {
        super();
        this.wrap(new SidebarWrapper());

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
        setInterval(async () => {
            if (last === window.location.href) {
                return;
            }
            console.log(window.location.href, last)
            last = window.location.href;
            let url = new URL(window.location.href);
            let className = url.searchParams.get("className");
            scope.className = className;
            let daba = document.getElementsByTagName("joda-content")[0];


            var MarkdownIt = require('markdown-it');
            var markdownItAttrs = require('markdown-it-attrs');

            var md = new MarkdownIt({
                html: true  // Erlaubt HTML-Input.
            });

            md.use(markdownItAttrs);

            let desc = JodaDescriptionManager.getDescription(className);
            if (desc === null) {
                newElement.innerHTML = "No description found";
                daba.replaceWith(newElement);
                return;
            }

            document.body.classList.add(...desc.config.bodyClasses);


            let content = desc.example ?? "No example found"
            if (desc.config.parseMarkdown) {
                content = content.replace(/\n{:/gm, "{:");
                content = md.render(content);
                content = "<joda-split>" + content + "</joda-split>";
            }

            let newElement = document.createElement("joda-content");
            newElement.innerHTML = content;

            daba.replaceWith(newElement);
        }, 100);

    }
}

