import{a as _,f as x,s as L}from"../chunks/CqNvrnYF.js";import{i as $}from"../chunks/2yvOfQPp.js";import{h as k,g as q,A as B,I as C,B as F,C as y,D as S,J as e,F as b,w as s,G as A,H as X,K as a}from"../chunks/DrT0ZMPV.js";import{i as Y}from"../chunks/B_F1-HWf.js";import{s as D}from"../chunks/C2smn3M1.js";function G(p,l,u,i,m){var c;k&&q();var t=(c=l.$$slots)==null?void 0:c[u],o=!1;t===!0&&(t=l.children,o=!0),t===void 0||t(p,o?()=>i:i)}var H=x('<span class="cursor-label svelte-12qhfyh"> </span>'),I=x('<div class="cursor svelte-12qhfyh"><!></div> <!>',1);function j(p,l){B(l,!1);let u=a(0),i=a(0),m=a(1),t=a("multiply"),o=a("#0A0A0A"),c=a(!1),f=a("");C(()=>{const n=r=>{e(u,r.clientX),e(i,r.clientY),e(c,!0)};return window.addEventListener("mousemove",n),document.querySelectorAll("a, button, .magnetic").forEach(r=>{r.addEventListener("mouseenter",()=>{e(m,3.5),e(t,"normal"),e(o,"#F5A800"),e(f,r.dataset.cursor||"")}),r.addEventListener("mouseleave",()=>{e(m,1),e(t,"multiply"),e(o,"#0A0A0A"),e(f,"")})}),()=>window.removeEventListener("mousemove",n)}),$();var h=I(),d=F(h),g=b(d);{var w=n=>{var v=H(),r=b(v,!0);A(v),y(()=>L(r,s(f))),_(n,v)};Y(g,n=>{s(f)&&n(w)})}A(d);var E=X(d,2);G(E,l,"default",{}),y(()=>D(d,`
    left:${s(u)??""}px;
    top:${s(i)??""}px;
    transform:translate(-50%,-50%) scale(${s(m)??""});
    mix-blend-mode:${s(t)??""};
    background:${s(o)??""};
    opacity:${s(c)?1:0};
  `)),_(p,h),S()}export{j as component};
