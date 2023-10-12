(()=>{"use strict";var __webpack_modules__={769:()=>{eval(`
;// CONCATENATED MODULE: ./workspaces/themejs1/src/hit-index.ts
var _a, _b;
const indexName = "themejs_hit_index";
let state = sessionStorage.getItem(indexName);
if (state === null) {
  sessionStorage.setItem(indexName, "0");
}
sessionStorage.setItem(indexName, "" + (parseInt((_a = sessionStorage.getItem(indexName)) != null ? _a : "0") + 1));
const hitIndex = parseInt((_b = sessionStorage.getItem(indexName)) != null ? _b : "0");

;// CONCATENATED MODULE: ./workspaces/themejs1/src/helper/loader.ts

console.time("loader");
function initLoader() {
  let interval = setInterval(() => {
    if (document.querySelector("body")) {
      clearInterval(interval);
      let img = document.querySelector("img").cloneNode(true);
      let loader = document.createElement("div");
      loader.classList.add("loader");
      loader.appendChild(img);
      img.setAttribute("class", "");
      img.setAttribute("loading", "eager");
      let loaderBar = document.createElement("div");
      loaderBar.classList.add("loader-bar");
      loader.appendChild(loaderBar);
      document.querySelector("body").appendChild(loader);
    }
  }, hitIndex === 1 ? 10 : 350);
}

;// CONCATENATED MODULE: ./workspaces/themejs1/embed.ts

initLoader();

;// CONCATENATED MODULE: ./src/index_embed.ts



//# sourceURL=webpack:///./src/index_embed.ts_+_3_modules?`)}},__webpack_exports__={};__webpack_modules__[769]()})();
