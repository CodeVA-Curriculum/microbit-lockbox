import{s as T,c as M,u as R,g as Y,d as B,i as F}from"./scheduler.4eff0beb.js";import{S as G,i as H,g as p,h as w,j as g,f as v,k as a,a as J,d as K,t as Q,s as y,m as L,c as C,y as U,n as N,x as d}from"./index.fe4a55db.js";function W(i){let e,s;const h=i[1].default,t=M(h,i,i[0],null);return{c(){e=p("div"),t&&t.c(),this.h()},l(l){e=w(l,"DIV",{class:!0});var u=g(e);t&&t.l(u),u.forEach(v),this.h()},h(){a(e,"class","paragraph block")},m(l,u){J(l,e,u),t&&t.m(e,null),s=!0},p(l,[u]){t&&t.p&&(!s||u&1)&&R(t,h,l,l[0],s?B(h,l[0],u,null):Y(l[0]),null)},i(l){s||(K(t,l),s=!0)},o(l){Q(t,l),s=!1},d(l){l&&v(e),t&&t.d(l)}}}function X(i,e,s){let{$$slots:h={},$$scope:t}=e;return i.$$set=l=>{"$$scope"in l&&s(0,t=l.$$scope)},[t,h]}class te extends G{constructor(e){super(),H(this,e,X,W,T,{})}}function Z(i){let e,s,h,t,l="You may find it useful to open your own copy of the slides as you work. Click the button below to pull up a public version of the slide deck in a new browser tab.",u,_,n,D,P,b,V,A,k,o,I,m;const O=i[4].default,f=M(O,i,i[3],null);return{c(){e=p("div"),s=p("div"),f&&f.c(),h=y(),t=p("p"),t.textContent=l,u=y(),_=p("div"),n=p("a"),D=L("Open Slides in New Tab"),P=y(),b=p("a"),V=L("Open Lesson Plan"),A=y(),k=p("div"),o=p("iframe"),this.h()},l(r){e=w(r,"DIV",{class:!0});var c=g(e);s=w(c,"DIV",{class:!0});var E=g(s);f&&f.l(E),h=C(E),t=w(E,"P",{class:!0,"data-svelte-h":!0}),U(t)!=="svelte-aegh6j"&&(t.textContent=l),u=C(E),_=w(E,"DIV",{class:!0});var S=g(_);n=w(S,"A",{class:!0,href:!0,target:!0});var j=g(n);D=N(j,"Open Slides in New Tab"),j.forEach(v),P=C(S),b=w(S,"A",{class:!0,href:!0,target:!0});var q=g(b);V=N(q,"Open Lesson Plan"),q.forEach(v),S.forEach(v),E.forEach(v),A=C(c),k=w(c,"DIV",{class:!0});var z=g(k);o=w(z,"IFRAME",{title:!0,src:!0,frameborder:!0,width:!0,height:!0,mozallowfullscreen:!0,webkitallowfullscreen:!0}),g(o).forEach(v),z.forEach(v),c.forEach(v),this.h()},h(){a(t,"class","block"),a(n,"class","button is-primary"),a(n,"href",i[0]),a(n,"target","_blank"),a(b,"class","button"),a(b,"href",i[2]),a(b,"target","_blank"),a(_,"class","has-text-centered"),a(s,"class","column"),a(o,"title",i[1]),F(o.src,I=`${i[0]}/embed?start=false&loop=false&delayms=60000`)||a(o,"src",I),a(o,"frameborder","0"),a(o,"width","480"),a(o,"height","299"),o.allowFullscreen="true",a(o,"mozallowfullscreen","true"),a(o,"webkitallowfullscreen","true"),a(k,"class","column"),a(e,"class","slides columns block")},m(r,c){J(r,e,c),d(e,s),f&&f.m(s,null),d(s,h),d(s,t),d(s,u),d(s,_),d(_,n),d(n,D),d(_,P),d(_,b),d(b,V),d(e,A),d(e,k),d(k,o),m=!0},p(r,[c]){f&&f.p&&(!m||c&8)&&R(f,O,r,r[3],m?B(O,r[3],c,null):Y(r[3]),null),(!m||c&1)&&a(n,"href",r[0]),(!m||c&4)&&a(b,"href",r[2]),(!m||c&2)&&a(o,"title",r[1]),(!m||c&1&&!F(o.src,I=`${r[0]}/embed?start=false&loop=false&delayms=60000`))&&a(o,"src",I)},i(r){m||(K(f,r),m=!0)},o(r){Q(f,r),m=!1},d(r){r&&v(e),f&&f.d(r)}}}function $(i,e,s){let{$$slots:h={},$$scope:t}=e,{link:l=""}=e,{title:u="An embedded slideshow"}=e,{lesson:_=""}=e;return i.$$set=n=>{"link"in n&&s(0,l=n.link),"title"in n&&s(1,u=n.title),"lesson"in n&&s(2,_=n.lesson),"$$scope"in n&&s(3,t=n.$$scope)},[l,u,_,t,h]}class se extends G{constructor(e){super(),H(this,e,$,Z,T,{link:0,title:1,lesson:2})}}export{te as P,se as S};
