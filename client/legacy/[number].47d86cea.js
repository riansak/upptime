import{_ as n,a as t,b as e,c,i as r,s as a,d as o,S as i,z as s,o as u,e as f,t as l,M as h,j as d,p,f as m,g as v,h as g,k as E,l as b,m as $,q as D,r as w,u as y,v as R,w as _,x as T,y as x,N as L,L as S,A,n as O,B as H,C as k,D as C,E as M,F as N,G as P}from"./client.149f2472.js";import{c as I,_ as B,h as F,a as U,L as V}from"./createOctokit.c3453266.js";function j(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,a=t(n);if(c){var o=t(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return e(this,r)}}function G(n,t,e){var c=n.slice();return c[9]=t[e],c}function q(n){var t,e,c,r,a,o=n[4].title+"",i=("closed"===n[4].state?s.i18n.incidentFixed:s.i18n.incidentOngoing)+"";return{c:function(){t=l(o),e=u(),c=f("span"),r=l(i),this.h()},l:function(n){t=g(n,o),e=p(n),c=m(n,"SPAN",{class:!0});var a=v(c);r=g(a,i),a.forEach(d),this.h()},h:function(){E(c,"class",a=S("tag ".concat(n[4].state))+" svelte-4o16l6")},m:function(n,a){b(n,t,a),b(n,e,a),b(n,c,a),$(c,r)},p:function(n,e){16&e&&o!==(o=n[4].title+"")&&A(t,o),16&e&&i!==(i=("closed"===n[4].state?s.i18n.incidentFixed:s.i18n.incidentOngoing)+"")&&A(r,i),16&e&&a!==(a=S("tag ".concat(n[4].state))+" svelte-4o16l6")&&E(c,"class",a)},d:function(n){n&&d(t),n&&d(e),n&&d(c)}}}function z(n){var t,e=s.i18n.incidentDetails+"";return{c:function(){t=l(e)},l:function(n){t=g(n,e)},m:function(n,e){b(n,t,e)},p:O,d:function(n){n&&d(t)}}}function J(n){for(var t,e,c,r,a,o,i,h,D,w,y,R,_,T,x,L,S,C,M,N=s.i18n.incidentOpenedAt+"",P=new Date(n[4].created_at).toLocaleString()+"",I=s.i18n.incidentSubscribe+"",B=s.i18n.incidentViewOnGitHub+"",F=n[4].closed_at&&Q(n),U=n[3],V=[],j=0;j<U.length;j+=1)V[j]=W(G(n,U,j));return{c:function(){t=f("div"),e=f("dl"),c=f("dt"),r=l(N),a=f("dd"),o=l(P),F&&F.c(),i=u(),h=f("div"),D=f("p"),w=f("a"),y=l(I),_=u(),T=f("p"),x=f("a"),L=l(B),C=u();for(var n=0;n<V.length;n+=1)V[n].c();M=H(),this.h()},l:function(n){t=m(n,"DIV",{class:!0});var s=v(t);e=m(s,"DL",{});var u=v(e);c=m(u,"DT",{});var f=v(c);r=g(f,N),f.forEach(d),a=m(u,"DD",{});var l=v(a);o=g(l,P),l.forEach(d),F&&F.l(u),u.forEach(d),i=p(s),h=m(s,"DIV",{class:!0});var E=v(h);D=m(E,"P",{class:!0});var b=v(D);w=m(b,"A",{href:!0});var $=v(w);y=g($,I),$.forEach(d),b.forEach(d),_=p(E),T=m(E,"P",{class:!0});var R=v(T);x=m(R,"A",{href:!0});var S=v(x);L=g(S,B),S.forEach(d),R.forEach(d),E.forEach(d),s.forEach(d),C=p(n);for(var A=0;A<V.length;A+=1)V[A].l(n);M=H(),this.h()},h:function(){E(w,"href",R="https://github.com/".concat(s.owner,"/").concat(s.repo,"/issues/").concat(n[0])),E(D,"class","svelte-4o16l6"),E(x,"href",S="https://github.com/".concat(s.owner,"/").concat(s.repo,"/issues/").concat(n[0])),E(T,"class","svelte-4o16l6"),E(h,"class","r svelte-4o16l6"),E(t,"class","f")},m:function(n,s){b(n,t,s),$(t,e),$(e,c),$(c,r),$(e,a),$(a,o),F&&F.m(e,null),$(t,i),$(t,h),$(h,D),$(D,w),$(w,y),$(h,_),$(h,T),$(T,x),$(x,L),b(n,C,s);for(var u=0;u<V.length;u+=1)V[u].m(n,s);b(n,M,s)},p:function(n,t){if(16&t&&P!==(P=new Date(n[4].created_at).toLocaleString()+"")&&A(o,P),n[4].closed_at?F?F.p(n,t):((F=Q(n)).c(),F.m(e,null)):F&&(F.d(1),F=null),1&t&&R!==(R="https://github.com/".concat(s.owner,"/").concat(s.repo,"/issues/").concat(n[0]))&&E(w,"href",R),1&t&&S!==(S="https://github.com/".concat(s.owner,"/").concat(s.repo,"/issues/").concat(n[0]))&&E(x,"href",S),40&t){var c;for(U=n[3],c=0;c<U.length;c+=1){var r=G(n,U,c);V[c]?V[c].p(r,t):(V[c]=W(r),V[c].c(),V[c].m(M.parentNode,M))}for(;c<V.length;c+=1)V[c].d(1);V.length=U.length}},i:O,o:O,d:function(n){n&&d(t),F&&F.d(),n&&d(C),k(V,n),n&&d(M)}}}function K(n){var t,e;return t=new V({}),{c:function(){C(t.$$.fragment)},l:function(n){M(t.$$.fragment,n)},m:function(n,c){N(t,n,c),e=!0},p:O,i:function(n){e||(_(t.$$.fragment,n),e=!0)},o:function(n){y(t.$$.fragment,n),e=!1},d:function(n){P(t,n)}}}function Q(n){var t,e,c,r,a=s.i18n.incidentClosedAt+"",o=new Date(n[4].closed_at).toLocaleString()+"";return{c:function(){t=f("dt"),e=l(a),c=f("dd"),r=l(o)},l:function(n){t=m(n,"DT",{});var i=v(t);e=g(i,a),i.forEach(d),c=m(n,"DD",{});var s=v(c);r=g(s,o),s.forEach(d)},m:function(n,a){b(n,t,a),$(t,e),b(n,c,a),$(c,r)},p:function(n,t){16&t&&o!==(o=new Date(n[4].closed_at).toLocaleString()+"")&&A(r,o)},d:function(n){n&&d(t),n&&d(c)}}}function W(n){var t,e,c,r,a,o=n[5](n[9].body)+"",i=s.i18n.incidentCommentSummary.replace(/\$DATE/,"<a href=".concat(n[9].html_url,">").concat(new Date(n[9].created_at).toLocaleString(),"</a>")).replace(/\$AUTHOR/,"<a href=".concat(n[9].user.html_url,">@").concat(n[9].user.login,"</a>"))+"";return{c:function(){t=f("article"),e=f("p"),c=u(),r=f("div"),a=u(),this.h()},l:function(n){t=m(n,"ARTICLE",{});var o=v(t);e=m(o,"P",{class:!0}),v(e).forEach(d),c=p(o),r=m(o,"DIV",{}),v(r).forEach(d),a=p(o),o.forEach(d),this.h()},h:function(){E(e,"class","svelte-4o16l6")},m:function(n,s){b(n,t,s),$(t,e),e.innerHTML=o,$(t,c),$(t,r),r.innerHTML=i,$(t,a)},p:function(n,t){8&t&&o!==(o=n[5](n[9].body)+"")&&(e.innerHTML=o),8&t&&i!==(i=s.i18n.incidentCommentSummary.replace(/\$DATE/,"<a href=".concat(n[9].html_url,">").concat(new Date(n[9].created_at).toLocaleString(),"</a>")).replace(/\$AUTHOR/,"<a href=".concat(n[9].user.html_url,">@").concat(n[9].user.login,"</a>"))+"")&&(r.innerHTML=i)},d:function(n){n&&d(t)}}}function X(n){var t,e,c,r,a,o,i,T,x,L,S,A,O=s.i18n.incidentBack+"";function H(n,t){return n[2]?z:q}document.title=t=s.i18n.incidentTitle.replace("$NUMBER",n[0]);var k=H(n),C=k(n),M=[K,J],N=[];function P(n,t){return n[1]?0:1}return o=P(n),i=N[o]=M[o](n),{c:function(){e=u(),c=f("h2"),C.c(),r=u(),a=f("section"),i.c(),T=u(),x=f("footer"),L=f("a"),S=l(O),this.h()},l:function(n){h('[data-svelte="svelte-1txp228"]',document.head).forEach(d),e=p(n),c=m(n,"H2",{class:!0});var t=v(c);C.l(t),t.forEach(d),r=p(n),a=m(n,"SECTION",{});var o=v(a);i.l(o),o.forEach(d),T=p(n),x=m(n,"FOOTER",{class:!0});var s=v(x);L=m(s,"A",{href:!0});var u=v(L);S=g(u,O),u.forEach(d),s.forEach(d),this.h()},h:function(){E(c,"class","svelte-4o16l6"),E(L,"href",s.path),E(x,"class","svelte-4o16l6")},m:function(n,t){b(n,e,t),b(n,c,t),C.m(c,null),b(n,r,t),b(n,a,t),N[o].m(a,null),b(n,T,t),b(n,x,t),$(x,L),$(L,S),A=!0},p:function(n,e){var r=D(e,1)[0];(!A||1&r)&&t!==(t=s.i18n.incidentTitle.replace("$NUMBER",n[0]))&&(document.title=t),k===(k=H(n))&&C?C.p(n,r):(C.d(1),(C=k(n))&&(C.c(),C.m(c,null)));var u=o;(o=P(n))===u?N[o].p(n,r):(w(),y(N[u],1,1,(function(){N[u]=null})),R(),(i=N[o])?i.p(n,r):(i=N[o]=M[o](n)).c(),_(i,1),i.m(a,null))},i:function(n){A||(_(i),A=!0)},o:function(n){y(i),A=!1},d:function(n){n&&d(e),n&&d(c),C.d(),n&&d(r),n&&d(a),N[o].d(),n&&d(T),n&&d(x)}}}function Y(n,t,e){var c=t.number,r=L,a=!0,o=!0,i=I(),u=s.owner,f=s.repo,l=[],h={};return T(B(x.mark((function n(){return x.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.t0=e,n.next=4,U("issue-".concat(u,"-").concat(f,"-").concat(c),(function(){return i.issues.get({owner:u,repo:f,issue_number:c,sort:"created",direction:"desc"})}));case 4:n.t1=h=n.sent.data,(0,n.t0)(4,n.t1),n.next=11;break;case 8:n.prev=8,n.t2=n.catch(0),F(n.t2);case 11:return e(2,o=!1),n.prev=12,n.t3=e,n.next=16,U("issue-comments-".concat(u,"-").concat(f,"-").concat(c),(function(){return i.issues.listComments({owner:u,repo:f,issue_number:c})}));case 16:n.t4=l=n.sent.data.reverse(),(0,n.t3)(3,n.t4),n.next=23;break;case 20:n.prev=20,n.t5=n.catch(12),F(n.t5);case 23:e(1,a=!1);case 24:case"end":return n.stop()}}),n,null,[[0,8],[12,20]])})))),n.$$set=function(n){"number"in n&&e(0,c=n.number)},[c,a,o,l,h,r]}var Z=function(t){n(s,i);var e=j(s);function s(n){var t;return c(this,s),t=e.call(this),r(o(t),n,Y,X,a,{number:0}),t}return s}();function nn(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,a=t(n);if(c){var o=t(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return e(this,r)}}function tn(n){var t,e;return t=new Z({props:{number:n[0]}}),{c:function(){C(t.$$.fragment)},l:function(n){M(t.$$.fragment,n)},m:function(n,c){N(t,n,c),e=!0},p:function(n,e){var c={};1&D(e,1)[0]&&(c.number=n[0]),t.$set(c)},i:function(n){e||(_(t.$$.fragment,n),e=!0)},o:function(n){y(t.$$.fragment,n),e=!1},d:function(n){P(t,n)}}}function en(n){return cn.apply(this,arguments)}function cn(){return(cn=B(x.mark((function n(t){var e;return x.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.params.number,n.abrupt("return",{number:e});case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function rn(n,t,e){var c=t.number;return n.$$set=function(n){"number"in n&&e(0,c=n.number)},[c]}var an=function(t){n(s,i);var e=nn(s);function s(n){var t;return c(this,s),t=e.call(this),r(o(t),n,rn,tn,a,{number:0}),t}return s}();export default an;export{en as preload};
