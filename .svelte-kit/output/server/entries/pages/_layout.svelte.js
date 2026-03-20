import { a as attr_style, s as slot, b as stringify } from "../../chunks/index.js";
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let cursorX = 0;
    let cursorY = 0;
    let cursorScale = 1;
    let cursorBlend = "multiply";
    let cursorColor = "#0A0A0A";
    $$renderer2.push(`<div class="cursor svelte-12qhfyh"${attr_style(` left:${stringify(cursorX)}px; top:${stringify(cursorY)}px; transform:translate(-50%,-50%) scale(${stringify(cursorScale)}); mix-blend-mode:${stringify(cursorBlend)}; background:${stringify(cursorColor)}; opacity:${stringify(0)}; `)}>`);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  _layout as default
};
