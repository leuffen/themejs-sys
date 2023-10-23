import {JodaDescriptionManager} from "@leuffen/jodastyle";

let html =`

# Element styles

## List Styles

- Element 1
- Element 2
- Element 3
{: .list-check}





`;

JodaDescriptionManager.addClass("page",
    "content-elements",
    "Elmente wie listen buttons etc",
    html,
    []
    ,
    {
        bodyClasses: ["themejs-sys"]
    }
);
