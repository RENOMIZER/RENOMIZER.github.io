import{s as w,n as d,c as E,u as x,v as L,w as D,x as I}from"../chunks/scheduler.Dw93JyHj.js";import{S as C,i as H,e as v,c as g,m as M,l as k,g as p,d as _,a as T,y as V,s as y,q as S,z as q,f as z,A,r as b,u as O,v as h,B,w as N}from"../chunks/index.CP83Fsla.js";import{p as P}from"../chunks/stores.Y5sYYTnb.js";import{b as $}from"../chunks/paths.DNIAPdIb.js";const F=!0,se=Object.freeze(Object.defineProperty({__proto__:null,prerender:F},Symbol.toStringTag,{value:"Module"}));function G(i){let e,r=`<a href="${$}/" class="text svelte-b3jpbz">[Home]</a> <a href="${$}/underconstruction" class="text svelte-b3jpbz">[About]</a> <a href="${$}/blog" class="text svelte-b3jpbz">[Blog]</a> <a href="${$}/underconstruction" class="text svelte-b3jpbz">[Links]</a>`;return{c(){e=v("div"),e.innerHTML=r,this.h()},l(t){e=g(t,"DIV",{class:!0,"data-svelte-h":!0}),M(e)!=="svelte-oppe59"&&(e.innerHTML=r),this.h()},h(){k(e,"class","header svelte-b3jpbz")},m(t,s){p(t,e,s)},p:d,i:d,o:d,d(t){t&&_(e)}}}class J extends C{constructor(e){super(),H(this,e,null,G,w,{})}}function K(i){let e;return{c(){e=v("div"),this.h()},l(r){e=g(r,"DIV",{class:!0}),T(e).forEach(_),this.h()},h(){k(e,"class","scanlines svelte-kjhipc")},m(r,t){p(r,e,t)},p:d,i:d,o:d,d(r){r&&_(e)}}}class Q extends C{constructor(e){super(),H(this,e,null,K,w,{})}}function R(i){let e,r,t,s,n,u="_",c;e=new J({});const m=i[2].default,o=x(m,i,i[1],null);return{c(){V(e.$$.fragment),r=y(),t=v("div"),o&&o.c(),s=y(),n=v("h1"),n.textContent=u,this.h()},l(a){q(e.$$.fragment,a),r=z(a),t=g(a,"DIV",{class:!0});var l=T(t);o&&o.l(l),l.forEach(_),s=z(a),n=g(a,"H1",{class:!0,"data-svelte-h":!0}),M(n)!=="svelte-16joifb"&&(n.textContent=u),this.h()},h(){k(t,"class","container main-container svelte-a3aglh"),k(n,"class","text underscore svelte-a3aglh")},m(a,l){A(e,a,l),p(a,r,l),p(a,t,l),o&&o.m(t,null),p(a,s,l),p(a,n,l),c=!0},p(a,l){o&&o.p&&(!c||l&2)&&L(o,m,a,a[1],c?I(m,a[1],l,null):D(a[1]),null)},i(a){c||(h(e.$$.fragment,a),h(o,a),c=!0)},o(a){b(e.$$.fragment,a),b(o,a),c=!1},d(a){a&&(_(r),_(t),_(s),_(n)),B(e,a),o&&o.d(a)}}}function U(i){let e;const r=i[2].default,t=x(r,i,i[1],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&2)&&L(t,r,s,s[1],e?I(r,s[1],n,null):D(s[1]),null)},i(s){e||(h(t,s),e=!0)},o(s){b(t,s),e=!1},d(s){t&&t.d(s)}}}function W(i){let e,r,t,s,n,u,c;e=new Q({});const m=[U,R],o=[];function a(l,f){return f&1&&(t=null),t==null&&(t=!!l[0].url.pathname.includes("/underconstruction")),t?0:1}return s=a(i,-1),n=o[s]=m[s](i),{c(){V(e.$$.fragment),r=y(),n.c(),u=S()},l(l){q(e.$$.fragment,l),r=z(l),n.l(l),u=S()},m(l,f){A(e,l,f),p(l,r,f),o[s].m(l,f),p(l,u,f),c=!0},p(l,[f]){let j=s;s=a(l,f),s===j?o[s].p(l,f):(N(),b(o[j],1,1,()=>{o[j]=null}),O(),n=o[s],n?n.p(l,f):(n=o[s]=m[s](l),n.c()),h(n,1),n.m(u.parentNode,u))},i(l){c||(h(e.$$.fragment,l),h(n),c=!0)},o(l){b(e.$$.fragment,l),b(n),c=!1},d(l){l&&(_(r),_(u)),B(e,l),o[s].d(l)}}}function X(i,e,r){let t;E(i,P,u=>r(0,t=u));let{$$slots:s={},$$scope:n}=e;return i.$$set=u=>{"$$scope"in u&&r(1,n=u.$$scope)},[t,n,s]}class le extends C{constructor(e){super(),H(this,e,X,W,w,{})}}export{le as component,se as universal};