import{s as xt,n as vt}from"../chunks/scheduler.Dw93JyHj.js";import{S as Ct,i as Et,e as f,s as E,t as A,c as _,m as N,f as y,a as k,b as H,d as n,l as v,g as b,h,j as $,p as gt}from"../chunks/index.CP83Fsla.js";import{e as Z}from"../chunks/each.D6YF6ztN.js";import{b as P}from"../chunks/paths.DNIAPdIb.js";function mt(u,l,r){const o=u.slice();return o[1]=l[r],o}function dt(u,l,r){const o=u.slice();return o[1]=l[r],o}function bt(u){let l,r=u[1].title+"",o,c,x,p,g;return{c(){l=f("a"),o=A(r),c=A(" >>"),p=E(),g=f("br"),this.h()},l(s){l=_(s,"A",{href:!0,class:!0});var a=k(l);o=H(a,r),c=H(a," >>"),a.forEach(n),p=y(s),g=_(s,"BR",{}),this.h()},h(){v(l,"href",x=P+"/blog/mythoughts/music/"+u[1].slug),v(l,"class","text")},m(s,a){b(s,l,a),h(l,o),h(l,c),b(s,p,a),b(s,g,a)},p(s,a){a&1&&r!==(r=s[1].title+"")&&$(o,r),a&1&&x!==(x=P+"/blog/mythoughts/music/"+s[1].slug)&&v(l,"href",x)},d(s){s&&(n(l),n(p),n(g))}}}function pt(u){let l,r=u[1].title+"",o,c,x,p,g;return{c(){l=f("a"),o=A(r),c=A(" >>"),p=E(),g=f("br"),this.h()},l(s){l=_(s,"A",{href:!0,class:!0});var a=k(l);o=H(a,r),c=H(a," >>"),a.forEach(n),p=y(s),g=_(s,"BR",{}),this.h()},h(){v(l,"href",x=P+"/blog/mythoughts/game/"+u[1].slug),v(l,"class","text")},m(s,a){b(s,l,a),h(l,o),h(l,c),b(s,p,a),b(s,g,a)},p(s,a){a&1&&r!==(r=s[1].title+"")&&$(o,r),a&1&&x!==(x=P+"/blog/mythoughts/game/"+s[1].slug)&&v(l,"href",x)},d(s){s&&(n(l),n(p),n(g))}}}function yt(u){let l,r="<title>My thoughts - All</title>",o,c,x="All of my thoughts:",p,g,s="This is my thoughts on things that really got me.",a,C,I,ut="My latest thoughts:",tt,q,et,j,z=u[0].gthoughts[0].title+"",J,lt,st,at,M,ht,F,G=u[0].mthoughts[0].title+"",K,nt,Q,B,O,R,ct="My previous thoughts on music:",it,ot,w,S,ft="My previous thoughts on games:",rt,V=Z(u[0].mthoughts.slice(1,-1)),m=[];for(let t=0;t<V.length;t+=1)m[t]=bt(dt(u,V,t));let L=Z(u[0].gthoughts.slice(1,-1)),d=[];for(let t=0;t<L.length;t+=1)d[t]=pt(mt(u,L,t));return{c(){l=f("header"),l.innerHTML=r,o=E(),c=f("h1"),c.textContent=x,p=E(),g=f("span"),g.textContent=s,a=E(),C=f("div"),I=f("h1"),I.textContent=ut,tt=E(),q=f("a"),et=A("- On game "),j=f("b"),J=A(z),lt=A(" >>"),st=f("br"),at=E(),M=f("a"),ht=A("- On track "),F=f("b"),K=A(G),nt=A(" >>"),Q=E(),B=f("section"),O=f("div"),R=f("h1"),R.textContent=ct,it=E();for(let t=0;t<m.length;t+=1)m[t].c();ot=E(),w=f("div"),S=f("h1"),S.textContent=ft,rt=E();for(let t=0;t<d.length;t+=1)d[t].c();this.h()},l(t){l=_(t,"HEADER",{"data-svelte-h":!0}),N(l)!=="svelte-vk7u4b"&&(l.innerHTML=r),o=y(t),c=_(t,"H1",{class:!0,"data-svelte-h":!0}),N(c)!=="svelte-1me78bw"&&(c.textContent=x),p=y(t),g=_(t,"SPAN",{class:!0,"data-svelte-h":!0}),N(g)!=="svelte-14b2rkw"&&(g.textContent=s),a=y(t),C=_(t,"DIV",{class:!0});var i=k(C);I=_(i,"H1",{class:!0,"data-svelte-h":!0}),N(I)!=="svelte-1frwq1v"&&(I.textContent=ut),tt=y(i),q=_(i,"A",{href:!0,class:!0});var e=k(q);et=H(e,"- On game "),j=_(e,"B",{});var D=k(j);J=H(D,z),D.forEach(n),lt=H(e," >>"),e.forEach(n),st=_(i,"BR",{}),at=y(i),M=_(i,"A",{href:!0,class:!0});var U=k(M);ht=H(U,"- On track "),F=_(U,"B",{});var _t=k(F);K=H(_t,G),_t.forEach(n),nt=H(U," >>"),U.forEach(n),i.forEach(n),Q=y(t),B=_(t,"SECTION",{class:!0});var W=k(B);O=_(W,"DIV",{class:!0});var X=k(O);R=_(X,"H1",{class:!0,"data-svelte-h":!0}),N(R)!=="svelte-6zuwad"&&(R.textContent=ct),it=y(X);for(let T=0;T<m.length;T+=1)m[T].l(X);X.forEach(n),ot=y(W),w=_(W,"DIV",{class:!0});var Y=k(w);S=_(Y,"H1",{class:!0,"data-svelte-h":!0}),N(S)!=="svelte-eim6ul"&&(S.textContent=ft),rt=y(Y);for(let T=0;T<d.length;T+=1)d[T].l(Y);Y.forEach(n),W.forEach(n),this.h()},h(){v(c,"class","text"),v(g,"class","text"),v(I,"class","text"),v(q,"href",P+"/blog/mythoughts/game/latest"),v(q,"class","text"),v(M,"href",P+"/blog/mythoughts/music/latest"),v(M,"class","text"),v(C,"class","container latest-container svelte-1vtq2f6"),v(R,"class","text"),v(O,"class","container music svelte-1vtq2f6"),v(S,"class","text"),v(w,"class","container games svelte-1vtq2f6"),v(B,"class","rest svelte-1vtq2f6")},m(t,i){b(t,l,i),b(t,o,i),b(t,c,i),b(t,p,i),b(t,g,i),b(t,a,i),b(t,C,i),h(C,I),h(C,tt),h(C,q),h(q,et),h(q,j),h(j,J),h(q,lt),h(C,st),h(C,at),h(C,M),h(M,ht),h(M,F),h(F,K),h(M,nt),b(t,Q,i),b(t,B,i),h(B,O),h(O,R),h(O,it);for(let e=0;e<m.length;e+=1)m[e]&&m[e].m(O,null);h(B,ot),h(B,w),h(w,S),h(w,rt);for(let e=0;e<d.length;e+=1)d[e]&&d[e].m(w,null)},p(t,[i]){if(i&1&&z!==(z=t[0].gthoughts[0].title+"")&&$(J,z),i&1&&G!==(G=t[0].mthoughts[0].title+"")&&$(K,G),i&1){V=Z(t[0].mthoughts.slice(1,-1));let e;for(e=0;e<V.length;e+=1){const D=dt(t,V,e);m[e]?m[e].p(D,i):(m[e]=bt(D),m[e].c(),m[e].m(O,null))}for(;e<m.length;e+=1)m[e].d(1);m.length=V.length}if(i&1){L=Z(t[0].gthoughts.slice(1,-1));let e;for(e=0;e<L.length;e+=1){const D=mt(t,L,e);d[e]?d[e].p(D,i):(d[e]=pt(D),d[e].c(),d[e].m(w,null))}for(;e<d.length;e+=1)d[e].d(1);d.length=L.length}},i:vt,o:vt,d(t){t&&(n(l),n(o),n(c),n(p),n(g),n(a),n(C),n(Q),n(B)),gt(m,t),gt(d,t)}}}function kt(u,l,r){let{data:o}=l;return u.$$set=c=>{"data"in c&&r(0,o=c.data)},[o]}class Bt extends Ct{constructor(l){super(),Et(this,l,kt,yt,xt,{data:0})}}export{Bt as component};