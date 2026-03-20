import { a3 as fallback, a4 as attr_class, a5 as clsx, a as attr_style, a6 as bind_props, b as stringify, a7 as ensure_array_like, e as escape_html, a8 as head } from "../../chunks/index.js";
import "clsx";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function Logo($$renderer, $$props) {
  let height = fallback(
    $$props["height"],
    40
    // control size via prop
  );
  let className = fallback($$props["className"], "");
  $$renderer.push(`<svg${attr_class(clsx(className))}${attr_style(`height:${stringify(height)}px; width:auto; display:block;`)} viewBox="0 0 913.69 190.41" xmlns="http://www.w3.org/2000/svg" aria-label="wemake.video" role="img"><defs>`);
  $$renderer.push(`<style>
      .cls-1 { fill: #f0b644; }
      .cls-2 { fill: #232021; }
      .cls-3 { fill: #fdfdfd; }
    </style>`);
  $$renderer.push(`</defs><g><g><path class="cls-1" d="M478.94,0l-62.91,7.75v36.08c-14.31-9.33-34.16-8.27-50.06-3.76-10,2.84-20.2,8.46-25.71,17.49-10.79-12.82-28.06-14.64-43.2-8.86-1.93.74-8.58,4.83-9.33,4.88-1.01.06-6.53-2.21-8.5-2.54-12.34-2.11-18.96,2.12-30.07,3.82-16.2,2.48-32.91,2.8-49.07,5.42-.38.06-1.93.36-1.99.44-.33.39.14,3.92-.05,4.82-14.93-6.68-32.77-5.11-47.19,2.21-1.28.38-.25-1.8-.88-1.77L0,83.23v38.74c0,.19.69.74,1.06.64l11.78-.87,19.47,68.43,1.13.23,91.18-10.65,7.62-24.8c13.01,24.56,47.05,26.8,69.12,13.73.56.33,0,2,.22,2.21.09.09,1.96.03,2.43,0,51.02-4.16,101.87-13.03,152.86-17.7,10.66,1.53,20.01,1.36,30.14-2.65,1.4-.55,7.51-3.96,7.96-3.98.6-.02,3.14,1.26,4.22,1.53,11.29,2.8,20.22.87,30.84-3.27,35.63-4.53,71.55-7.27,107.14-12.05,2.44-.33,1.45-1.39,1.59-3.49,17.93,6.53,41.02,2.78,55.39-9.96,3.95-3.5,7.13-7.76,9.93-12.22,2.21-3.52,1.32-5.62,6.9-4.83v22.14l105.01-11.95v-2.66c7.84,3.6,15.86,2.12,23.75-.4l28.68-3.22c1.28-.24.5-2.76.74-3.02,14.9,4.97,32.68,1.39,43.19-10.52,11.4,8.93,26.81,8.37,39.52,2.63l6.78-4.07v9.74l14.17-7.53,8.63,18.05,25.94-11.86-8.42-18.58,14.35-5.29c1.08-.85-.41-.96-.83-1.35-15.32-14.23-32.71-26.99-48.39-40.88-4.02-8.62-9.39-16.69-18.01-21.19-15.01-7.85-34.43-3.18-45.77,8.88-11.94-9.29-29-8.37-41.81-1.28V.89l-39.88,4.42-.02,15.92c-4.57.31-8.67,2.33-12.83,4.01V7.08l-39.41,4.45-.05,16.78-54.92,6.22,7.99,25.43c-.05.48-8.85,1.72-9.56.71-.29-.42-1.28-5.94-1.66-7.2-10.51-35.28-42.13-45.66-74.16-28.76-1.01.53-2.7,1.97-3.48,2.28-1.6.64.32-4.61-1.32-4.43l-50.29,5.76V0Z"></path><g><g><path class="cls-2" d="M478.94,0v28.33l50.29-5.76c1.64-.18-.28,5.07,1.32,4.43.77-.31,2.47-1.75,3.48-2.28,32.03-16.9,63.65-6.53,74.16,28.76.37,1.26,1.37,6.78,1.66,7.2.71,1.01,9.51-.23,9.56-.71l-7.99-25.43,54.92-6.22.05-16.78,39.41-4.45v18.15c4.16-1.67,8.26-3.69,12.83-4.01l.02-15.92,39.88-4.42v19.04c12.8-7.09,29.87-8.01,41.81,1.28,11.34-12.07,30.76-16.74,45.77-8.88,8.61,4.51,13.99,12.58,18.01,21.19,15.68,13.89,33.07,26.65,48.39,40.88.41.38,1.91.5.83,1.35l-14.35,5.29,8.42,18.58-25.94,11.86-8.63-18.05-14.17,7.53v-9.74l-6.78,4.07c-12.71,5.74-28.12,6.29-39.52-2.63-10.51,11.91-28.29,15.49-43.19,10.52-.24.26.54,2.78-.74,3.02l-28.68,3.22c-7.89,2.51-15.91,4-23.75.4v2.66s-105.01,11.95-105.01,11.95v-22.14c-5.58-.78-4.69,1.31-6.9,4.83-2.8,4.45-5.98,8.72-9.93,12.22-14.37,12.74-37.46,16.48-55.39,9.96-.14,2.1.85,3.17-1.59,3.49-35.59,4.78-71.51,7.52-107.14,12.05-10.62,4.14-19.55,6.07-30.84,3.27-1.08-.27-3.62-1.55-4.22-1.53-.44.01-6.56,3.42-7.96,3.98-10.12,4.01-19.47,4.18-30.14,2.65-51,4.67-101.84,13.54-152.86,17.7-.47.04-2.35.09-2.43,0-.22-.22.35-1.89-.22-2.21-22.07,13.08-56.1,10.84-69.12-13.73l-7.62,24.8-91.18,10.65-1.13-.23L12.85,121.75l-11.78.87c-.37.1-1.06-.45-1.06-.64v-38.74l149.97-17.27c.63-.03-.39,2.15.88,1.77,14.42-7.31,32.26-8.88,47.19-2.21.19-.9-.28-4.43.05-4.82.07-.08,1.61-.37,1.99-.44,16.17-2.62,32.87-2.95,49.07-5.42,11.11-1.7,17.73-5.92,30.07-3.82,1.97.34,7.49,2.61,8.5,2.54.74-.05,7.4-4.14,9.33-4.88,15.14-5.78,32.41-3.96,43.2,8.86,5.5-9.03,15.71-14.65,25.71-17.49,15.91-4.51,35.75-5.57,50.06,3.76V7.75l62.91-7.75ZM462.99,13.28l-34.12,3.54v11.95c2.35.12,7.37-1.51,9.07.46.67.78,1.06,5.41,1.14,6.83.93,16.46.91,38.91,0,55.38-.08,1.45-.27,4.38-.56,5.64-.87,3.91-6.75,3.04-9.66,3.85v11.95l41.21-4.42c-.54-2.98.75-9.11-.07-11.67-.52-1.6-4.43.76-6.03-.84-1.43-1.42-.88-6.45-1-8.44l11.32-10.05c.9-.19.54.22.75.56,2.81,4.59,5.72,9.13,8.31,13.85,1.52,3.85-6.63,2.6-6.63,3.95v11.07c0,.34,1.01.85,1.48.64l41.05-4.85v-11.95h-6.87c-.56,0-3.12-1.96-3.51-2.69l-17.05-26.24c6.73-6.31,12.27-14.29,22.55-14.01v-11.95l-42.09,5.09v11.07c0,.28.58.56,1,.58,1.66.06,8.56-2.29,9.59-.76l-.19,1.72-19.71,18.16V13.28ZM748.32,15.5l-16.39,1.77v19.04c-7.36-5.05-18.83-1.22-24.11,5.35-6.97,8.67-8.49,27.28-.03,35.38,6.18,5.92,19.16,4.47,23.92-2.65.87.51.54,3.41.66,3.54.55.58,13.96-1.67,15.95-1.77V15.5ZM696.04,21.69l-16.84,1.77v11.51l15.73-1.77c.36.02,1.11-.42,1.11-.66v-10.85ZM827.97,21.82c-33.92,3.82-30.64,57.08,6.75,44.82,24.64-8.08,23.89-48.27-6.75-44.82ZM596.77,62.85c1.48-15.19-5.7-30.99-21.67-34.3-23.29-4.83-46.52,9.03-49.58,33.27-3.14,24.83,11.54,41.37,36.94,38.24,16.7-2.06,29.49-12.54,33.01-29.21-2.12.16-16.6,1.22-17.22,1.83-.2.2-.86,4.15-1.44,5.42-3.18,6.89-15.63,10.58-21.62,5.78-4.36-3.5-4.53-10.6-4.91-15.68l46.5-5.34ZM800.09,51.29c1.08-14.69-5.61-25.05-21.37-23.79-13,1.04-23.09,9.38-24.2,22.75-1.34,16.29,7.02,25.8,23.64,23.62,9.68-1.27,19.3-7.06,21.1-17.21-2.35.29-14.85.91-15.84,1.88-.91.89-.82,2.4-2.9,3.52-5.7,3.07-9.7-1.55-9.6-7.15l29.16-3.62ZM696.04,38.52l-16.84,1.77v43.83l16.84-1.77v-43.83ZM675.21,40.73l-16.19,2.19-6.41,30.57-6.69-29.17-17.68,1.72,14.16,42.3,18.66-2.31,14.14-45.31ZM427.1,99.83c.35-3.74-.25-7.94,0-11.73l-8.86.88c-.22,2.97.96,11.08-2.32,12.51-3.94,1.72-4.58-3.29-4.78-6.07-.76-10.59.83-22.2.01-32.77-.64-8.35-4.61-11.78-12.56-13.57-15.43-3.48-52.91,1.5-50.35,23.75,1.33,11.58,23.34,9.13,23.89-2.73.1-2.05-.73-4.63-2.4-5.9l-5.53-2.21c7.57-5.26,25.84-5.91,24.25,7.19-.68,5.59-4.63,8.04-9.33,10.16-12.98,5.83-32.86,6.34-33.99,24.91-1.18,19.31,17.78,21.83,32.08,15.67,5.2-2.24,8.68-5.62,12.47-9.67l4.67,5.5c12.94,6.35,31.32-.39,32.76-15.91ZM867.5,49.14v34.98c1.62.3,8.59-4.95,9.3-4.43l8.42,18.41c1.07.68,7.1-3.51,8.87-3.36l-8.45-19.21,8.9-3.59-27.03-22.8ZM340.71,111.12c-4.74.18-10.05,2.7-10.65-3.75-1.03-11.03,2.79-36.21-3.35-44.47-8.41-11.33-27.46-5.64-36.3,2.61-.87.81-3.45,4.29-4.01,4.42-.62.14-3.61-4.86-4.85-5.28-7.51-5.76-22.89-2.76-30.04,2.72-2.79,2.14-4.81,5.1-7.39,7.45v-8.41l-33.67,4.21v11.29c3.05-.06,9.12-2.1,10.1,2.08,1.48,6.31.99,25.54.55,32.69-.11,1.87-.37,5.24-1.35,6.62-1.96,2.77-6.38,2.01-9.3,2.88v11.51l41.2-4.43v-11.95c0-.52-5.73,1.93-6.53-3.44-.89-5.95-.58-28.52,1.31-33.87.96-2.72,2.94-5.59,5.66-6.74,6.87-2.88,10.98.5,11.54,7.51.79,10.04-.54,21.19-.12,31.34-.66,3.62-3.86,3.62-6.54,4.97v11.29l37.22-3.98v-11.95c-3.94.12-5.89.53-6.53-3.88-.88-6.04-.61-27.16,1.08-32.78s7.08-10.02,12.98-7.83c3.44,1.28,4.2,5.52,4.45,8.83.53,6.85.82,23.07-.13,29.56-.65,4.42-3,4.51-6.53,5.87v11.29l41.2-4.43v-11.95ZM211.76,107.12c1.48-15.19-5.7-30.99-21.67-34.3-23.29-4.83-46.52,9.03-49.58,33.27s11.54,41.37,36.94,38.24c16.7-2.06,29.49-12.54,33.01-29.21-2.12.16-16.6,1.22-17.22,1.83-.2.2-.86,4.15-1.44,5.42-3.18,6.89-15.63,10.58-21.62,5.78-4.36-3.5-4.53-10.6-4.91-15.68l46.5-5.34ZM630.02,72.61l-16.39,1.77v17.27l16.39-1.77v-17.27ZM134.25,79.25l-30.57,3.1v11.51c2.52.29,6.55-1.63,7.11,1.97l-10.88,37.43c-2.51-9.2-5.92-18.25-8.41-27.45-2.1-7.77-3.46-10.26,6.42-11.07v-11.51l-39.43,4.43v11.51c2.78-.04,7.82-2.06,7.51,2.37-3.06,12.48-7.61,24.58-10.61,37.03-.6.13-.5-.46-.65-.89-1.52-4.23-2.71-9.32-4-13.72-1.14-3.93-5.88-18.41-5-21.38.78-2.64,5.38-2.06,6.99-3.19v-10.85l-39.87,4.43v11.51c5.88-.36,8.44.42,10.71,5.9l13.72,47.17c8.57-.37,17.04-1.91,25.57-2.65l10.47-34.47,10.01,31.83,25.15-2.67,15.04-52.04c1.7-4.84,5.94-6.38,10.71-6.78v-11.51Z"></path><path class="cls-3" d="M340.71,111.12v11.95l-41.2,4.43v-11.29c3.52-1.36,5.88-1.46,6.53-5.87.95-6.49.66-22.71.13-29.56-.26-3.31-1.02-7.55-4.45-8.83-5.89-2.19-11.3,2.27-12.98,7.83s-1.96,26.74-1.08,32.78c.64,4.4,2.59,3.99,6.53,3.88v11.95l-37.22,3.98v-11.29c2.68-1.36,5.88-1.36,6.54-4.97-.42-10.15.91-21.31.12-31.34-.55-7.01-4.67-10.39-11.54-7.51-2.72,1.14-4.7,4.02-5.66,6.74-1.89,5.36-2.2,27.92-1.31,33.87.8,5.37,6.53,2.92,6.53,3.44v11.95l-41.2,4.43v-11.51c2.92-.87,7.34-.11,9.3-2.88.98-1.39,1.23-4.75,1.35-6.62.43-7.15.93-26.38-.55-32.69-.98-4.18-7.04-2.14-10.1-2.08v-11.29l33.67-4.21v8.41c2.57-2.35,4.6-5.31,7.39-7.45,7.15-5.49,22.53-8.48,30.04-2.72,1.25.42,4.23,5.42,4.85,5.28.55-.13,3.14-3.61,4.01-4.42,8.85-8.24,27.89-13.94,36.3-2.61,6.13,8.26,2.31,33.44,3.35,44.47.6,6.44,5.91,3.92,10.65,3.75Z"></path><path class="cls-3" d="M134.25,79.25v11.51c-4.77.4-9.01,1.94-10.71,6.78l-15.04,52.04-25.15,2.67-10.01-31.83-10.47,34.47c-8.53.74-17.01,2.28-25.57,2.65l-13.72-47.17c-2.27-5.47-4.83-6.25-10.71-5.9v-11.51l39.87-4.43v10.85c-1.62,1.13-6.21.55-6.99,3.19-.88,2.97,3.86,17.46,5,21.38,1.28,4.4,2.48,9.49,4,13.72.15.43.05,1.02.65.89,3.01-12.44,7.55-24.55,10.61-37.03.31-4.43-4.73-2.41-7.51-2.37v-11.51l39.43-4.43v11.51c-9.88.81-8.53,3.3-6.42,11.07,2.49,9.2,5.91,18.25,8.41,27.45l10.88-37.43c-.57-3.6-4.59-1.69-7.11-1.97v-11.51l30.57-3.1Z"></path><path class="cls-3" d="M462.99,13.28v58.44l19.71-18.16.19-1.72c-1.03-1.53-7.93.82-9.59.76-.41-.01-1-.3-1-.58v-11.07l42.09-5.09v11.95c-10.28-.29-15.82,7.7-22.55,14.01l17.05,26.24c.39.73,2.94,2.69,3.51,2.69h6.87v11.95l-41.05,4.85c-.47.21-1.48-.31-1.48-.64v-11.07c0-1.35,8.16-.1,6.63-3.95-2.6-4.72-5.51-9.26-8.31-13.85-.21-.34.15-.75-.75-.56l-11.32,10.05c.11,1.98-.43,7.01,1,8.44,1.6,1.59,5.51-.76,6.03.84.83,2.56-.47,8.68.07,11.67l-41.21,4.42v-11.95c2.91-.82,8.79.05,9.66-3.85.28-1.27.48-4.2.56-5.64.91-16.47.93-38.92,0-55.38-.08-1.42-.47-6.05-1.14-6.83-1.69-1.97-6.72-.33-9.07-.46v-11.95l34.12-3.54Z"></path><path class="cls-3" d="M427.1,99.83c-1.43,15.52-19.82,22.26-32.76,15.91l-4.67-5.5c-3.79,4.05-7.28,7.44-12.47,9.67-14.3,6.16-33.26,3.64-32.08-15.67,1.13-18.57,21.02-19.08,33.99-24.91,4.7-2.11,8.65-4.56,9.33-10.16,1.59-13.1-16.68-12.44-24.25-7.19l5.53,2.21c1.68,1.27,2.5,3.85,2.4,5.9-.55,11.86-22.55,14.31-23.89,2.73-2.56-22.25,34.92-27.22,50.35-23.75,7.95,1.79,11.92,5.22,12.56,13.57.81,10.58-.78,22.19-.01,32.77.2,2.78.84,7.78,4.78,6.07,3.28-1.43,2.1-9.54,2.32-12.51l8.86-.88c-.25,3.79.35,7.99,0,11.73ZM388.12,85c-.87-.03-1.62.57-2.35.98-3,1.67-11.21,6.3-13.38,8.32-4.02,3.76-3.36,11.39,2.68,12.37,6.18,1,13.04-4.01,13.04-10.38v-11.29Z"></path><path class="cls-3" d="M596.77,62.85l-46.5,5.34c.37,5.08.55,12.18,4.91,15.68,5.99,4.81,18.44,1.12,21.62-5.78.59-1.27,1.24-5.22,1.44-5.42.61-.61,15.1-1.67,17.22-1.83-3.52,16.67-16.31,27.15-33.01,29.21-25.39,3.14-40.08-13.4-36.94-38.24,3.07-24.24,26.3-38.1,49.58-33.27,15.97,3.31,23.15,19.12,21.67,34.3ZM572.43,54.01c.64-9.08-5.19-17.09-14.79-12.34-5.74,2.83-6.59,8.73-6.92,14.56l21.71-2.21Z"></path><path class="cls-2" d="M388.12,85v11.29c0,6.37-6.87,11.38-13.04,10.38-6.04-.98-6.7-8.6-2.68-12.37,2.16-2.03,10.38-6.66,13.38-8.32.73-.41,1.48-1.01,2.35-.98Z"></path><path class="cls-2" d="M572.43,54.01l-21.71,2.21c.33-5.82,1.19-11.72,6.92-14.56,9.61-4.74,15.43,3.27,14.79,12.34Z"></path><g><path class="cls-3" d="M211.76,107.12l-46.5,5.34c.37,5.08.55,12.18,4.91,15.68,5.99,4.81,18.44,1.12,21.62-5.78.59-1.27,1.24-5.22,1.44-5.42.61-.61,15.1-1.67,17.22-1.83-3.52,16.67-16.31,27.15-33.01,29.21-25.39,3.14-40.08-13.4-36.94-38.24s26.3-38.1,49.58-33.27c15.97,3.31,23.15,19.12,21.67,34.3ZM187.41,98.29c.64-9.08-5.19-17.09-14.79-12.34-5.74,2.83-6.59,8.73-6.92,14.56l21.71-2.21Z"></path><path class="cls-2" d="M187.41,98.29l-21.71,2.21c.33-5.82,1.19-11.72,6.92-14.56,9.61-4.74,15.43,3.27,14.79,12.34Z"></path></g></g><g><polygon class="cls-1" points="675.21 40.73 661.07 86.04 642.41 88.35 628.25 46.05 645.93 44.32 652.61 73.49 659.02 42.92 675.21 40.73"></polygon><polygon class="cls-1" points="696.04 38.52 696.04 82.35 679.2 84.12 679.2 40.29 696.04 38.52"></polygon><path class="cls-3" d="M867.5,49.14l27.03,22.8-8.9,3.59,8.45,19.21c-1.77-.15-7.8,4.04-8.87,3.36l-8.42-18.41c-.71-.52-7.68,4.73-9.3,4.43v-34.98Z"></path><polygon class="cls-1" points="630.02 72.61 630.02 89.87 613.63 91.64 613.63 74.38 630.02 72.61"></polygon><path class="cls-1" d="M696.04,21.69v10.85c0,.25-.74.68-1.11.66l-15.73,1.77v-11.51l16.84-1.77Z"></path><g><path class="cls-1" d="M748.32,15.5v60.65c-1.99.1-15.4,2.36-15.95,1.77-.13-.13.21-3.03-.66-3.54-4.76,7.12-17.74,8.57-23.92,2.65-8.45-8.09-6.93-26.71.03-35.38,5.28-6.57,16.75-10.4,24.11-5.35v-19.04l16.39-1.77ZM730,66.7c3.15-3.05,2.99-12.66,2.25-16.78-1.33-7.43-10.07-5.95-12.31.31-1.35,3.78-1.74,14.26,1.56,17.07,2.24,1.91,6.47,1.37,8.5-.6Z"></path><path class="cls-2" d="M730,66.7c-2.03,1.97-6.26,2.51-8.5.6-3.29-2.81-2.91-13.29-1.56-17.07,2.24-6.26,10.98-7.74,12.31-.31.74,4.12.9,13.73-2.25,16.78Z"></path></g><g><path class="cls-1" d="M827.97,21.82c30.64-3.45,31.39,36.73,6.75,44.82-37.39,12.27-40.66-41-6.75-44.82ZM823.19,57.11l13.73-13.5-13.73-13.5v27.01Z"></path><polygon class="cls-2" points="823.19 57.11 823.19 30.11 836.92 43.61 823.19 57.11"></polygon></g><g><path class="cls-1" d="M800.09,51.29l-29.16,3.62c-.1,5.6,3.9,10.22,9.6,7.15,2.08-1.12,1.99-2.63,2.9-3.52.99-.97,13.49-1.59,15.84-1.88-1.8,10.14-11.42,15.94-21.1,17.21-16.63,2.17-24.98-7.34-23.64-23.62,1.1-13.37,11.2-21.71,24.2-22.75,15.76-1.26,22.45,9.1,21.37,23.79ZM771.35,46.05c1.68-.18,10.8-.56,11.55-1.08,1.63-1.13-.14-5.74-2.25-6.67-4.97-2.19-9.97,2.65-9.31,7.75Z"></path><path class="cls-2" d="M771.35,46.05c-.66-5.1,4.34-9.93,9.31-7.75,2.11.93,3.88,5.54,2.25,6.67-.75.52-9.87.9-11.55,1.08Z"></path></g></g></g></g></g></svg>`);
  bind_props($$props, { height, className });
}
function Nav($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let dark = true;
    $$renderer2.push(`<nav${attr_class("svelte-1h32yp1", void 0, { "dark": dark })}><a href="/" class="logo-link svelte-1h32yp1" aria-label="wemake.video home">`);
    Logo($$renderer2, { height: 36 });
    $$renderer2.push(`<!----></a> <ul class="svelte-1h32yp1"><li><a href="#disciplines" class="svelte-1h32yp1">Work</a></li> <li><a href="#work" class="svelte-1h32yp1">Projects</a></li> <li><a href="#about" class="svelte-1h32yp1">Studio</a></li> <li><a href="#contact" class="nav-cta svelte-1h32yp1">Start a project</a></li></ul></nav>`);
  });
}
function Hero($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let titleLines = ["We don't", "just film."];
    function splitChars(text) {
      return text.split("").map((c, i) => c === " " ? `<span class="char space"> </span>` : `<span class="char">${c}</span>`).join("");
    }
    $$renderer2.push(`<section id="hero" class="svelte-1q37ri0"><canvas class="particle-canvas svelte-1q37ri0"></canvas> <div class="video-wrap svelte-1q37ri0"><video autoplay="" muted="" loop="" playsinline="" class="svelte-1q37ri0"><source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4" class="svelte-1q37ri0"/></video> <div class="video-overlay svelte-1q37ri0"></div></div> <div class="hero-content svelte-1q37ri0"><p class="hero-label svelte-1q37ri0">Production Company — UK</p> <h1 class="hero-title svelte-1q37ri0" style="perspective: 800px"><!--[-->`);
    const each_array = ensure_array_like(titleLines);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let line = each_array[i];
      $$renderer2.push(`<span${attr_class("title-line svelte-1q37ri0", void 0, { "yellow": i === 1 })}>${html(splitChars(line))}</span>`);
    }
    $$renderer2.push(`<!--]--></h1> <div class="hero-bottom svelte-1q37ri0"><p class="hero-tagline svelte-1q37ri0">A creative production studio specialising in<br class="svelte-1q37ri0"/>Filming, 3D Work &amp; Motion Graphics.</p> <a href="#work" class="hero-cta magnetic svelte-1q37ri0" data-cursor="VIEW">See our work</a></div></div> <div class="scroll-hint svelte-1q37ri0"><span class="svelte-1q37ri0">Scroll</span> <div class="scroll-line svelte-1q37ri0"></div></div></section>`);
  });
}
function Ticker($$renderer) {
  const items = [
    "Filming",
    "3D Work",
    "Motion Graphics",
    "Brand Films",
    "Visual Effects",
    "Animation",
    "Direction",
    "Post Production"
  ];
  $$renderer.push(`<div class="ticker svelte-1lmn4fy"><div class="ticker-track svelte-1lmn4fy"><!--[-->`);
  const each_array = ensure_array_like([...items, ...items]);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$renderer.push(`<span class="ticker-item svelte-1lmn4fy">${escape_html(item)}</span> <span class="ticker-dot svelte-1lmn4fy">✦</span>`);
  }
  $$renderer.push(`<!--]--></div></div>`);
}
function Disciplines($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const disciplines = [
      {
        num: "01",
        title: "Filming",
        desc: "From single-camera docs to full-crew commercial shoots. Every frame is intentional, crafted, and built to last beyond the trend cycle."
      },
      {
        num: "02",
        title: "3D Work",
        desc: "Product visualisation, architectural renders, character animation. We build worlds that don't exist yet — and make them look like they always did."
      },
      {
        num: "03",
        title: "Motion\nGraphics",
        desc: "Title sequences, brand animations, explainer content. Motion that communicates at the speed of attention."
      }
    ];
    $$renderer2.push(`<section id="disciplines" class="svelte-1dg7q7v"><p class="section-label svelte-1dg7q7v">What we do</p> <div class="grid svelte-1dg7q7v"><!--[-->`);
    const each_array = ensure_array_like(disciplines);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let d = each_array[i];
      $$renderer2.push(`<div class="discipline svelte-1dg7q7v"><p class="num svelte-1dg7q7v">${escape_html(d.num)}</p> <h3 class="title svelte-1dg7q7v">${escape_html(d.title)}</h3> <p class="desc svelte-1dg7q7v">${escape_html(d.desc)}</p> <div class="arrow svelte-1dg7q7v"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="svelte-1dg7q7v"><path d="M3 8h10M8 3l5 5-5 5"></path></svg></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></section>`);
  });
}
function Work($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const projects = [
      {
        title: "Project Aurora",
        cat: "Brand Film · Filming",
        span: 7,
        gradient: "linear-gradient(135deg,#1a1a2e,#16213e)",
        glow: "rgba(245,168,0,0.15)"
      },
      {
        title: "Vertex Series",
        cat: "3D Work · Visualisation",
        span: 5,
        gradient: "linear-gradient(135deg,#2d1b00,#1a0d00)",
        glow: "rgba(245,168,0,0.2)"
      },
      {
        title: "Title: Sequence",
        cat: "Motion Graphics",
        span: 4,
        gradient: "linear-gradient(135deg,#0d1117,#1c2526)",
        glow: "rgba(100,200,255,0.1)"
      },
      {
        title: "Midnight Campaign",
        cat: "Filming · Commercial",
        span: 5,
        gradient: "linear-gradient(135deg,#1a0020,#0d0015)",
        glow: "rgba(200,100,255,0.12)"
      },
      {
        title: "Form Study",
        cat: "3D · Animation",
        span: 3,
        gradient: "linear-gradient(135deg,#001a0d,#000f08)",
        glow: "rgba(0,255,150,0.08)"
      }
    ];
    $$renderer2.push(`<section id="work" class="svelte-17ndl8v"><div class="work-header svelte-17ndl8v"><div><p class="section-label svelte-17ndl8v">Selected projects</p> <h2 class="work-title svelte-17ndl8v">The <em class="svelte-17ndl8v">work</em><br/>speaks.</h2></div> <a href="/projects" class="view-all svelte-17ndl8v">View all projects →</a></div> <div class="work-grid svelte-17ndl8v"><!--[-->`);
    const each_array = ensure_array_like(projects);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let p = each_array[i];
      $$renderer2.push(`<div class="work-card svelte-17ndl8v"${attr_style(`grid-column: span ${stringify(p.span)}`)}><div class="card-inner svelte-17ndl8v"${attr_style(`background:${stringify(p.gradient)}`)}><div class="card-glow svelte-17ndl8v"${attr_style(`background:radial-gradient(circle at 60% 50%, ${stringify(p.glow)} 0%, transparent 65%)`)}></div> <div class="card-info svelte-17ndl8v"><p class="card-cat svelte-17ndl8v">${escape_html(p.cat)}</p> <h3 class="card-title svelte-17ndl8v">${escape_html(p.title)}</h3></div> <div class="card-hover-line svelte-17ndl8v"></div></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></section>`);
  });
}
function About($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let stat1 = 0;
    let stat2 = 0;
    let stat3 = 0;
    $$renderer2.push(`<section id="about" class="svelte-7hpc9t"><div class="left"><p class="section-label reveal svelte-7hpc9t">The studio</p> <h2 class="about-title reveal svelte-7hpc9t">We <span class="on-black svelte-7hpc9t">make</span><br/> things<br/> <em class="svelte-7hpc9t">move.</em></h2></div> <div class="right"><p class="body-text reveal svelte-7hpc9t">We're a creative production studio built around a simple belief — that great video should feel like something. We combine on-location filming, photorealistic 3D, and kinetic motion design to tell stories that actually land.</p> <p class="body-text reveal svelte-7hpc9t" style="margin-top: -16px">Clients come to us when they need work that goes beyond the brief. We don't do average. We don't do template. We do <em class="svelte-7hpc9t">wemake.video.</em></p> <div class="stats reveal svelte-7hpc9t"><div class="stat"><p class="stat-num svelte-7hpc9t">${escape_html(stat1)}<span class="svelte-7hpc9t">+</span></p> <p class="stat-label svelte-7hpc9t">Years active</p></div> <div class="stat"><p class="stat-num svelte-7hpc9t">${escape_html(stat2)}<span class="svelte-7hpc9t">+</span></p> <p class="stat-label svelte-7hpc9t">Projects delivered</p></div> <div class="stat"><p class="stat-num svelte-7hpc9t">${escape_html(stat3)}<span class="svelte-7hpc9t">+</span></p> <p class="stat-label svelte-7hpc9t">Clients worldwide</p></div></div></div></section>`);
  });
}
function Contact($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<section id="contact" class="svelte-wt4tt0"><div class="bg-text svelte-wt4tt0" aria-hidden="true">wemake</div> <p class="contact-label reveal svelte-wt4tt0">Start something</p> <h2 class="contact-title reveal svelte-wt4tt0">Got a<br/><em class="svelte-wt4tt0">project?</em></h2> <p class="contact-sub reveal svelte-wt4tt0">Let's make something worth watching.</p> <a href="mailto:hello@wemake.video" class="email reveal svelte-wt4tt0">hello@wemake.video</a> <div class="actions reveal svelte-wt4tt0"><a href="mailto:hello@wemake.video" class="btn-primary magnetic svelte-wt4tt0" data-cursor="LET'S GO">Start a project</a> <a href="#work" class="btn-ghost svelte-wt4tt0">See our work first</a></div></section>`);
  });
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    $$renderer2.push(`<footer class="svelte-jz8lnl"><a href="/" class="logo-link svelte-jz8lnl" aria-label="wemake.video home">`);
    Logo($$renderer2, { height: 28 });
    $$renderer2.push(`<!----></a> <p class="copy svelte-jz8lnl">© ${escape_html(year)} wemake.video — All rights reserved</p> <div class="socials svelte-jz8lnl"><a href="https://instagram.com" class="svelte-jz8lnl">Instagram</a> <a href="https://vimeo.com" class="svelte-jz8lnl">Vimeo</a> <a href="https://linkedin.com" class="svelte-jz8lnl">LinkedIn</a></div></footer>`);
  });
}
function _page($$renderer) {
  head("1uha8ag", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>wemake.video — Filming. 3D. Motion.</title>`);
    });
    $$renderer2.push(`<meta name="description" content="A creative production studio specialising in Filming, 3D Work and Motion Graphics."/>`);
  });
  Nav($$renderer);
  $$renderer.push(`<!----> `);
  Hero($$renderer);
  $$renderer.push(`<!----> `);
  Ticker($$renderer);
  $$renderer.push(`<!----> `);
  Disciplines($$renderer);
  $$renderer.push(`<!----> `);
  Work($$renderer);
  $$renderer.push(`<!----> `);
  About($$renderer);
  $$renderer.push(`<!----> `);
  Contact($$renderer);
  $$renderer.push(`<!----> `);
  Footer($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
