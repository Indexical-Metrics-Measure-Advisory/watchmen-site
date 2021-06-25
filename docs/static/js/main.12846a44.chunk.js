(this["webpackJsonpwatchmen-site"]=this["webpackJsonpwatchmen-site"]||[]).push([[0],{50:function(t,e,n){"use strict";n.r(e);var a,i=n(1),o=n.n(i),r=n(23),s=n.n(r),c=n(29),l=n(4);!function(t){t.HOME="/home",t.SERVICES="/services",t.GET_A_QUOTE="/get-a-quote",t.PLAN_AND_PRICING="/plan-and-pricing",t.CLIENTS="/clients",t.ABOUT="/about"}(a||(a={}));var d,p,g,h,u,b=n(10),j=n(3),m=n(2),f=m.c.header.attrs({"data-widget":"header"})(d||(d=Object(j.a)(["\n\tdisplay: grid;\n\tposition: relative;\n\tgrid-template-columns: auto auto 1fr auto;\n\talign-items: center;\n\twidth: 100%;\n\theight: 120px;\n\tpadding: 32px 64px;\n\tbackground-color: var(--dark-bg-color);\n\n\t> svg {\n\t\twidth: 40px;\n\t\theight: 40px;\n\t}\n"]))),x=m.c.div.attrs({"data-widget":"header-company-name"})(p||(p=Object(j.a)(["\n\tdisplay: flex;\n\tposition: relative;\n\talign-items: center;\n\tfont-family: Poppins, sans-serif;\n\tfont-weight: 700;\n\tfont-size: 24px;\n\tcolor: var(--dark-font-color);\n\tmargin-left: 16px;\n"]))),v=m.c.div.attrs({"data-widget":"header-menus"})(g||(g=Object(j.a)(["\n\tdisplay: flex;\n\tposition: relative;\n\talign-items: center;\n"]))),O=m.c.div.attrs((function(t){var e=t.active;return{"data-widget":"header-menu",style:{color:e?"var(--button-hover-color)":void 0,textDecoration:e?"underline":void 0}}}))(h||(h=Object(j.a)(["\n\tdisplay: flex;\n\tposition: relative;\n\talign-items: center;\n\tfont-family: Montserrat, sans-serif;\n\tfont-size: 14px;\n\tcolor: var(--dark-font-color);\n\tpadding: 0 16px;\n\tline-height: 2em;\n\tcursor: pointer;\n\ttransition: color 300ms ease-in-out;\n\t&:hover {\n\t\tcolor: var(--button-hover-color);\n\t}\n"]))),y=n(6),w=n(0),k=m.c.svg.attrs((function(t){return{"data-widget":t["data-widget"]||"logo"}}))(u||(u=Object(j.a)(["\n\t> g {\n\t\t> ellipse {\n\t\t\tfill   : var(--logo-bg-color);\n\t\t\tstroke : var(--logo-bg-color);\n\t\t}\n\t\t> path {\n\t\t\tstroke : var(--logo-path-color);\n\t\t}\n\t}\n"]))),C=function(t){return Object(w.jsxs)(k,Object(y.a)(Object(y.a)({xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"541px",height:"558px",viewBox:"-0.5 -0.5 541 558"},t),{},{children:[Object(w.jsx)("defs",{}),Object(w.jsxs)("g",{children:[Object(w.jsx)("ellipse",{cx:"265",cy:"265",rx:"265",ry:"265",pointerEvents:"none"}),Object(w.jsx)("path",{d:"M 64.8 508.8 Q 453.6 402.8 280.8 318 Q 108 233.2 300.05 149.43",fill:"none",strokeWidth:"96",strokeMiterlimit:"10",pointerEvents:"none"}),Object(w.jsx)("path",{d:"M 321.02 199.19 L 398.42 106.51 L 277.84 100.2",fill:"none",strokeWidth:"96",strokeMiterlimit:"10",pointerEvents:"none"})]})]}))},E=n(27),M=n.n(E),S=o.a.createContext({});S.displayName="RouteEventBus";var A,z=function(t){var e=t.children,n=Object(i.useState)((new M.a).setMaxListeners(999999)),a=Object(b.a)(n,1)[0],o=Object(i.useState)({fire:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return a.emit.apply(a,[t].concat(n)),r},on:function(t,e){return a.rawListeners(t).includes(e)&&console.error("Listener on [".concat(t,"] was added into route event bus, check it.")),a.on(t,e),r},off:function(t,e){return a.off(t,e),r}}),r=Object(b.a)(o,1)[0];return Object(w.jsx)(S.Provider,{value:r,children:e})};!function(t){t.ROUTE_CHANGED="route-changed"}(A||(A={}));var T,N,I,_,P,R,B,L,H,D,q,G,U,F,W,Q,J,Z,V,Y,$,K,X,tt,et,nt,at,it,ot,rt,st=function(){var t=Object(i.useState)(a.HOME),e=Object(b.a)(t,2),n=e[0],o=e[1],r=Object(i.useContext)(S),s=r.on,c=r.off;return Object(i.useEffect)((function(){var t=function(t){o(t)};return s(A.ROUTE_CHANGED,t),function(){c(A.ROUTE_CHANGED,t)}}),[s,c]),Object(w.jsxs)(f,{children:[Object(w.jsx)(C,{}),Object(w.jsx)(x,{children:"Matryoshka Data"}),Object(w.jsx)("div",{}),Object(w.jsxs)(v,{children:[Object(w.jsx)(O,{active:n===a.HOME,children:"Home"}),Object(w.jsx)(O,{active:n===a.SERVICES,children:"Services"}),Object(w.jsx)(O,{active:n===a.GET_A_QUOTE,children:"Get A Quote"}),Object(w.jsx)(O,{active:n===a.PLAN_AND_PRICING,children:"Plan & Pricing"}),Object(w.jsx)(O,{active:n===a.CLIENTS,children:"Clients"}),Object(w.jsx)(O,{active:n===a.ABOUT,children:"About"})]})]})},ct=n(15),lt=n.n(ct),dt=n.p+"static/media/home-primary-compressed.7deac8fb.jpg",pt={code:"default",darkBgColor:"rgb(24,24,24,0.95)",darkFontColor:"rgb(249,249,249)",lightBgColor:"rgb(249,249,249)",lightFontColor:"rgb(24,24,24)",buttonHoverColor:"rgba(255,167,78,0.9)",logoBgColor:"rgba(255,167,78,1)",logoPathColor:"rgb(255,255,255)",dangerColor:"rgb(215,11,11)"},gt=(n(44),Object(m.b)(T||(T=Object(j.a)(["\n\t*, *:before, *:after {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tbox-sizing: border-box;\n\t}\n\n\thtml {\n\t\t","\n\t\twidth: 100%;\n\t}\n\n\tbody {\n\t\tmargin: 0;\n\t\tfont-family: var(--font-family);\n\t\tfont-size: var(--font-size);\n\t\tcolor: var(--font-color);\n\t\t-webkit-font-smoothing: antialiased;\n\t\t-moz-osx-font-smoothing: grayscale;\n\t\tposition: relative;\n\t\tbackground-color: var(--bg-color);\n\t\toverflow-x: hidden;\n\t\twidth: 100%;\n\t\tmin-width: 980px;\n\t\t//font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n\t}\n\n\ta,\n\ta:visited {\n\t\tcolor: var(--font-color);\n\t}\n\n\tbutton {\n\t\tborder: 0;\n\t}\n\n\tinput::placeholder {\n\t\tcolor: var(--placeholder-color);\n\t}\n\n\tcode {\n\t\tfont-family: var(--code-font-family);\n\t}\n"])),(function(t){return function(t){return Object.keys(t).map((function(e){var n=function(t){return"--"+t.split("").map((function(t){return t>="A"&&t<="Z"?"-".concat(t.toLowerCase()):t})).join("")}(e),a=t[e];return"number"===typeof a?function(t){return t.includes("FontWeight")}(e)?"".concat(n,": ").concat(a,";"):"".concat(n,": ").concat(a,"px;"):"".concat(n,": ").concat(a,";")}))}(t.theme)}))),ht=function(){return pt},ut=function(){return Object(w.jsx)(m.a,{theme:pt,children:Object(w.jsx)(gt,{})})},bt=m.c.div.attrs({"data-widget":"home-section-main"})(N||(N=Object(j.a)(["\n\tposition: relative;\n\twidth: 100%;\n\theight: 900px;\n\tbackground-image: url(",");\n\tbackground-position: center;\n\tbackground-size: contain;\n"])),dt),jt=m.c.div.attrs({"data-widget":"home-section-main-content"})(I||(I=Object(j.a)(["\n\tdisplay: flex;\n\tposition: relative;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\ttop: 0;\n\tleft: 0;\n\twidth: 50%;\n\theight: 100%;\n\tpadding: 120px 20px;\n\tbackground-color: ",";\n"])),(function(){return lt()(ht().darkBgColor).alpha(.4).toString()})),mt=m.c.span.attrs({"data-widget":"home-section-biggest-slogan"})(_||(_=Object(j.a)(["\n\tdisplay: inline-flex;\n\tposition: relative;\n\tfont-family: Oswald, sans-serif;\n\tfont-weight: 500;\n\tfont-size: 88px;\n\tcolor: var(--dark-font-color);\n\ttext-transform: uppercase;\n"]))),ft=m.c.span.attrs({"data-widget":"home-section-minor-slogan"})(P||(P=Object(j.a)(["\n\tdisplay: inline-flex;\n\tposition: relative;\n\tfont-family: Oswald, sans-serif;\n\tfont-weight: 500;\n\tfont-size: 22px;\n\tmargin: 32px 0;\n\tcolor: var(--dark-font-color);\n"]))),xt=m.c.span.attrs({"data-widget":"home-section-major-comment"})(R||(R=Object(j.a)(["\n\tdisplay: inline-flex;\n\tposition: relative;\n\tfont-family: Poppins, sans-serif;\n\tfont-weight: 400;\n\tfont-size: 18px;\n\tline-height: 1.5em;\n\tcolor: var(--dark-font-color);\n\twidth: 60%;\n\ttext-align: center;\n"]))),vt=function(){return Object(w.jsx)(bt,{children:Object(w.jsxs)(jt,{children:[Object(w.jsxs)(mt,{children:["Data Has",Object(w.jsx)("br",{})," A Better Idea"]}),Object(w.jsx)(ft,{children:"We Get the IT Job Done"}),Object(w.jsx)(xt,{children:"In today\u2019s business climate, every minute counts. Managing your data and services can be time consuming and often frustrating. With our winning IT solutions, matryoshka is here to help. We\u2019ll provide your organization with all the data analysis and services that you need - so you have the peace of mind to focus on the rest of your business."})]})})},Ot=m.c.div.attrs({"data-widget":"home-section-services"})(B||(B=Object(j.a)(["\n\tdisplay: flex;\n\tposition: relative;\n\tflex-direction: column;\n\twidth: 100%;\n\tpadding: 108px 64px;\n\tbackground-color: var(--light-bg-color);\n\tcolor: var(--light-font-color);\n\t> div[data-widget=section-title] {\n\t\tpadding-bottom: 32px;\n\t}\n\t> div[data-widget=section-minor-title] {\n\t\tpadding-bottom: 48px;\n\t}\n\t> div[data-widget=section-comment] {\n\t\twidth: 60%;\n\t}\n"]))),yt=m.c.div.attrs({"data-widget":"home-service-cards"})(L||(L=Object(j.a)(["\n\tdisplay: grid;\n\tposition: relative;\n\tgrid-template-columns: 1fr 1fr 1fr;\n\tgrid-column-gap: 48px;\n\tmargin-top: 108px;\n"]))),wt=m.c.div.attrs({"data-widget":"home-service-card"})(H||(H=Object(j.a)(["\n\tdisplay: flex;\n\tposition: relative;\n\tflex-direction: column;\n"]))),kt=m.c.div.attrs((function(t){var e=t.image;return{"data-widget":"home-service-card-image",style:{backgroundImage:"url(".concat(e,")")}}}))(D||(D=Object(j.a)(["\n\tposition: relative;\n\theight: 300px;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n"]))),Ct=m.c.div.attrs({"data-widget":"home-service-card-content"})(q||(q=Object(j.a)(["\n\tdisplay: grid;\n\tposition: relative;\n\tgrid-template-columns: 1fr;\n\tgrid-template-rows: 1fr 1fr;\n\theight: 320px;\n\tbackground-color: var(--dark-bg-color);\n\tpadding: 64px 48px;\n"]))),Et=m.c.div.attrs({"data-widget":"service-card-slogan"})(G||(G=Object(j.a)(["\n\tposition: relative;\n\tfont-family: Oswald, sans-serif;\n\tfont-size: 28px;\n\tfont-weight: 500;\n\tline-height: 1.5em;\n\ttext-align: center;\n\tcolor: var(--dark-font-color);\n"]))),Mt=m.c.button.attrs({"data-widget":"service-card-button"})(U||(U=Object(j.a)(["\n\tdisplay: flex;\n\tposition: relative;\n\talign-items: center;\n\talign-self: end;\n\tjustify-content: center;\n\tjustify-self: center;\n\theight: 48px;\n\tfont-family: Raleway, sans-serif;\n\tfont-size: 18px;\n\tfont-weight: 400;\n\tpadding: 0 24px;\n\tbackground-color: var(--light-bg-color);\n\tcolor: var(--light-font-color);\n\twhite-space: nowrap;\n\tcursor: pointer;\n\ttransition: background-color 300ms ease-in-out;\n\t&:hover {\n\t\tbackground-color: var(--button-hover-color);\n\t}\n"]))),St=m.c.div.attrs({"data-widget":"home"})(F||(F=Object(j.a)(["\n"]))),At=m.c.div.attrs({"data-widget":"section-title"})(W||(W=Object(j.a)(["\n\tposition: relative;\n\tfont-family: Oswald, sans-serif;\n\tfont-weight: 500;\n\tfont-size: 50px;\n\tline-height: 1.5em;\n\ttext-transform: uppercase;\n\tmargin: 0 auto;\n"]))),zt=m.c.div.attrs({"data-widget":"section-minor-title"})(Q||(Q=Object(j.a)(["\n\tposition: relative;\n\tfont-family: Raleway, sans-serif;\n\tfont-weight: 400;\n\tfont-size: 22px;\n\tline-height: 1.5em;\n\tmargin: 0 auto;\n"]))),Tt=m.c.div.attrs({"data-widget":"section-comment"})(J||(J=Object(j.a)(["\n\tposition: relative;\n\tfont-family: Raleway, sans-serif;\n\tfont-weight: 400;\n\tfont-size: 18px;\n\tline-height: 1.5em;\n\tmargin: 0 auto;\n\ttext-align: center;\n"]))),Nt=n.p+"static/media/service-pipeline.c6495c10.jpeg",It=n.p+"static/media/service-governance.d7bcaaef.jpeg",_t=n.p+"static/media/service-content.02354b30.jpeg",Pt=function(){return Object(w.jsxs)(yt,{children:[Object(w.jsxs)(wt,{children:[Object(w.jsx)(kt,{image:Nt}),Object(w.jsxs)(Ct,{children:[Object(w.jsx)(Et,{children:"Lake, Pipelines and Streams"}),Object(w.jsx)(Mt,{children:"Learn More"})]})]}),Object(w.jsxs)(wt,{children:[Object(w.jsx)(kt,{image:It}),Object(w.jsxs)(Ct,{children:[Object(w.jsx)(Et,{children:"Consanguinity and Governance"}),Object(w.jsx)(Mt,{children:"Learn More"})]})]}),Object(w.jsxs)(wt,{children:[Object(w.jsx)(kt,{image:_t}),Object(w.jsxs)(Ct,{children:[Object(w.jsx)(Et,{children:"Business Content and Advisory"}),Object(w.jsx)(Mt,{children:"Learn More"})]})]})]})},Rt=function(){return Object(w.jsxs)(Ot,{children:[Object(w.jsx)(At,{children:"Our Comprehensive Services"}),Object(w.jsx)(zt,{children:"Intelligent IT Solutions"}),Object(w.jsx)(Tt,{children:"Matryoshka Data provides a variety of innovative and comprehensive IT solutions. We deliver quality services in the most efficient way, and our experts will work collaboratively with you to customize our offerings to your particular needs. Book a meeting with one of our consultants to hear more about how we can assist your operation."}),Object(w.jsx)(Pt,{})]})},Bt=m.c.div.attrs({"data-widget":"home-section-clients"})(Z||(Z=Object(j.a)(["\n\tdisplay: flex;\n\tposition: relative;\n\tflex-direction: column;\n\twidth: 100%;\n\tpadding: 108px 64px;\n\tbackground-color: var(--dark-bg-color);\n\tcolor: var(--dark-font-color);\n\t> div[data-widget=section-title] {\n\t\tpadding-bottom: 0;\n\t}\n\t> div[data-widget=section-minor-title] {\n\t\tpadding-bottom: 48px;\n\t}\n\n"]))),Lt=m.c.div.attrs({"data-widget":"home-client-cards"})(V||(V=Object(j.a)(["\n\tdisplay: grid;\n\tposition: relative;\n\tgrid-template-columns: 1fr 1fr 1fr 1fr;\n\tgrid-column-gap: 48px;\n\tmargin: 32px 64px 0;\n"]))),Ht=m.c.div.attrs({"data-widget":"home-client-card"})(Y||(Y=Object(j.a)(["\n\tdisplay: flex;\n\tposition: relative;\n\tflex-direction: column;\n"]))),Dt=m.c.div.attrs((function(t){var e=t.image;return{"data-widget":"home-client-card-image",style:{backgroundImage:"url(".concat(e,")")}}}))($||($=Object(j.a)(["\n\tposition: relative;\n\theight: 200px;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n\tbackground-size: contain;\n"]))),qt=m.c.div.attrs({"data-widget":"home-client-card-content"})(K||(K=Object(j.a)(["\n\tdisplay: grid;\n\tposition: relative;\n\tgrid-template-columns: 1fr;\n\tpadding: 32px 0 0;\n\tjustify-items: center;\n\t> div[data-widget=section-comment] {\n\t\twidth: 80%;\n\t\tmargin: 32px 0 0;\n\t}\n"]))),Gt=m.c.div.attrs({"data-widget":"client-card-name"})(X||(X=Object(j.a)(["\n\tposition: relative;\n\tfont-family: Oswald, sans-serif;\n\tfont-size: 28px;\n\tfont-weight: 500;\n\tline-height: 1.5em;\n\tcolor: var(--dark-font-color);\n\ttext-transform: uppercase;\n"]))),Ut=n.p+"static/media/client-hexa.4a4836c7.png",Ft=n.p+"static/media/client-itaka.e4fc4f5d.png",Wt=n.p+"static/media/client-polar.a2fcfc44.png",Qt=n.p+"static/media/client-targo.957fd161.png",Jt=function(){return Object(w.jsxs)(Lt,{children:[Object(w.jsxs)(Ht,{children:[Object(w.jsx)(Dt,{image:Ut}),Object(w.jsxs)(qt,{children:[Object(w.jsx)(Gt,{children:"Hexa"}),Object(w.jsx)(Tt,{children:'"Matryoshka transformed our company by taking us mobile and implementing cloud solutions, which gave our employees the flexibility they needed to work most efficiently."'})]})]}),Object(w.jsxs)(Ht,{children:[Object(w.jsx)(Dt,{image:Ft}),Object(w.jsxs)(qt,{children:[Object(w.jsx)(Gt,{children:"Itaka"}),Object(w.jsx)(Tt,{children:'"Our company has confidently chosen matryoshka for our IT needs over many years. They always make sure we\u2019re ahead of the technology curve, and are also very enjoyable to work with."'})]})]}),Object(w.jsxs)(Ht,{children:[Object(w.jsx)(Dt,{image:Wt}),Object(w.jsxs)(qt,{children:[Object(w.jsx)(Gt,{children:"Polar"}),Object(w.jsx)(Tt,{children:'"By really listening to our technology needs, matryoshka provided solutions that fit our unique business model. Their ongoing support and services have been instrumental to our company\u2019s growth."'})]})]}),Object(w.jsxs)(Ht,{children:[Object(w.jsx)(Dt,{image:Qt}),Object(w.jsxs)(qt,{children:[Object(w.jsx)(Gt,{children:"Targo"}),Object(w.jsx)(Tt,{children:"Best technology, helped us!"})]})]})]})},Zt=function(){return Object(w.jsxs)(Bt,{children:[Object(w.jsx)(At,{children:"Meet Our Clients"}),Object(w.jsx)(zt,{children:"Success-Driven Partnerships"}),Object(w.jsx)(Jt,{})]})},Vt=n(18),Yt=n.n(Vt),$t=n(28),Kt=n.p+"static/media/contact-us.3c7e49e4.jpeg",Xt=m.c.div.attrs({"data-widget":"home-section-contact-us"})(tt||(tt=Object(j.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-column-gap: var(--h-margin);\n\tposition: relative;\n\twidth: 100%;\n\theight: 800px;\n\tpadding: 96px 64px 64px;\n\tcolor: var(--dark-font-color);\n\t&:before {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tbackground-image: url(",");\n\t\tbackground-position: center;\n\t\tbackground-size: contain;\n\t\tfilter: saturate(1.2) hue-rotate(315deg) opacity(0.95);\n\t\tz-index: -1;\n\t}\n"])),Kt),te=m.c.div.attrs({"data-widget":"home-section-contact-us-content"})(et||(et=Object(j.a)(["\n\tdisplay: flex;\n\tposition: relative;\n\tflex-direction: column;\n\t> div[data-widget=section-title] {\n\t\tpadding-bottom: 0;\n\t\tmargin: 0 auto;\n\t}\n\t> div[data-widget=section-comment] {\n\t\tmargin: 32px auto 0;\n\t\tmax-width: 50%;\n\t\t&:nth-child(3),\n\t\t&:nth-child(4) {\n\t\t\tfont-family: Poppins, sans-serif;\n\t\t\tfont-weight: 500;\n\t\t}\n\t}\n"]))),ee=m.c.div.attrs({"data-widget":"form-field-name"})(nt||(nt=Object(j.a)(["\n\tposition: relative;\n\tfont-family: Raleway, sans-serif;\n\tfont-weight: 500;\n\tfont-size: 18px;\n\tline-height: 1.5em;\n\tmargin-bottom: 4px;\n\t&:first-child {\n\t\tpadding-top: 12px;\n\t}\n\t&:after {\n\t\tcontent: '*';\n\t\tdisplay: ",";\n\t\tmargin-left: 4px;\n\t}\n"])),(function(t){return t.required?"inline-block":"none"})),ne=m.c.input.attrs((function(t){var e=t.pass;return{"data-widget":"form-field-input",style:{backgroundColor:e?void 0:lt()(ht().dangerColor).alpha(.1),borderColor:e?void 0:"var(--danger-color)"}}}))(at||(at=Object(j.a)(["\n\tposition: relative;\n\tfont-family: Raleway, sans-serif;\n\tcolor: var(--dark-font-color);\n\tbackground-color: transparent;\n\twidth: 60%;\n\theight: 48px;\n\tpadding: 0 12px;\n\tmargin-bottom: 20px;\n\tappearance: none;\n\toutline: none;\n\tborder: 1px solid var(--dark-font-color);\n\ttransition: all 300ms ease-in-out;\n\t&::placeholder {\n\t\tcolor: var(--dark-font-color);\n\t}\n"]))),ae=m.c.textarea.attrs((function(t){var e=t.pass;return{"data-widget":"form-field-minput",style:{backgroundColor:e?void 0:lt()(ht().dangerColor).alpha(.1),borderColor:e?void 0:"var(--danger-color)"}}}))(it||(it=Object(j.a)(["\n\tposition: relative;\n\tfont-family: Raleway, sans-serif;\n\tcolor: var(--dark-font-color);\n\tbackground-color: transparent;\n\twidth: 60%;\n\theight: 192px;\n\tpadding: 12px;\n\tmargin-bottom: 20px;\n\tappearance: none;\n\toutline: none;\n\tborder: 1px solid var(--dark-font-color);\n\tresize: none;\n\ttransition: all 300ms ease-in-out;\n\t&::placeholder {\n\t\tcolor: var(--dark-font-color);\n\t}\n"]))),ie=m.c.button.attrs({"data-widget":"form-submit-button"})(ot||(ot=Object(j.a)(["\n\tdisplay: flex;\n\tposition: relative;\n\talign-items: center;\n\tjustify-content: center;\n\tfont-family: Raleway, sans-serif;\n\tfont-size: 18px;\n\tfont-weight: 500;\n\tcolor: var(--dark-bg-color);\n\tbackground-color: var(--dark-font-color);\n\twidth: 60%;\n\theight: var(--input-height);\n\tpadding: 12px;\n\tappearance: none;\n\tcursor: pointer;\n\ttransition: background-color 300ms ease-in-out;\n\t&:hover {\n\t\tbackground-color: var(--button-hover-color);\n\t}\n"]))),oe=/^([A-Za-z0-9_\-.\u4e00-\u9fa5])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,8})$/,re=function(){var t=Object(i.useState)({name:"",email:"",subject:"",message:""}),e=Object(b.a)(t,2),n=e[0],a=e[1],o=Object(i.useState)(!1),r=Object(b.a)(o,2),s=r[0],c=r[1],l=Object(i.useState)({passName:!0,passEmail:!0,passMessage:!0,passAll:!0}),d=Object(b.a)(l,2),p=d[0],g=d[1],h=function(){var t=Object($t.a)(Yt.a.mark((function t(){var e,a,i,o,r,s;return Yt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=!0,a=!0,i=!0,0===n.name.trim().length&&(e=!1),0!==n.email.trim().length&&oe.test(n.email.trim())||(a=!1),0===n.message.trim().length&&(i=!1),e&&a&&i){t.next=9;break}return g({passName:e,passEmail:a,passMessage:i,passAll:!1}),t.abrupt("return");case 9:return t.prev=9,"https://open.feishu.cn/open-apis/bot/v2/hook/f94b26a3-6cf2-4110-a70d-d79577a79271",o={"Content-Type":"application/json"},r=JSON.stringify({msg_type:"interactive",card:{config:{wide_screen_mode:!0},header:{title:{tag:"plain_text",content:"\u6709\u6d88\u606f\u4eceMatryoshka\u5b98\u7f51\u6765\u4e86!"}},elements:[{tag:"hr"},{tag:"div",text:{tag:"lark_md",content:"Name: ".concat(n.name.trim())}},{tag:"div",text:{tag:"lark_md",content:"Email: ".concat(n.email.trim())}},{tag:"hr"},{tag:"div",text:{tag:"lark_md",content:"Subject: ".concat(n.subject.trim())}},{tag:"hr"},{tag:"div",text:{tag:"lark_md",content:n.message.trim()}},{tag:"hr"},{tag:"action",actions:[{tag:"button",text:{tag:"plain_text",content:"Reply it! You have to, boy!"},type:"primary",url:"mailto:".concat(n.email.trim()||"")}]}]}}),t.next=15,fetch("https://open.feishu.cn/open-apis/bot/v2/hook/f94b26a3-6cf2-4110-a70d-d79577a79271",{method:"POST",headers:o,body:r});case 15:if(s=t.sent,!s.ok){t.next=24;break}return t.next=20,s.json();case 20:"0"==t.sent.StatusCode&&(c(!0),setTimeout((function(){c(!1)}),1e4)),t.next=26;break;case 24:g({passName:!0,passEmail:!0,passMessage:!0,passAll:!1}),setTimeout((function(){g({passName:!0,passEmail:!0,passMessage:!0,passAll:!0})}),5e3);case 26:t.next=32;break;case 28:t.prev=28,t.t0=t.catch(9),g({passName:!0,passEmail:!0,passMessage:!0,passAll:!1}),setTimeout((function(){g({passName:!0,passEmail:!0,passMessage:!0,passAll:!0})}),5e3);case 32:case"end":return t.stop()}}),t,null,[[9,28]])})));return function(){return t.apply(this,arguments)}}();return Object(w.jsxs)(Xt,{children:[Object(w.jsxs)(te,{children:[Object(w.jsx)(At,{children:"Contact Us"}),Object(w.jsx)(Tt,{children:"We always want to hear from you at matryoshka. Contact us today to find the customized IT solutions that best fit your needs."}),Object(w.jsx)(Tt,{children:"Haikou, Hainan, China"}),Object(w.jsx)(Tt,{children:Object(w.jsx)("a",{href:"mailto:market@matrdata.com",target:"_blank",rel:"noreferrer",children:"market@matrdata.com"})})]}),Object(w.jsxs)(te,{children:[Object(w.jsx)(ee,{required:!0,children:"Name"}),Object(w.jsx)(ne,{placeholder:p.passName?"Enter your name":"Name is required",value:n.name,onChange:function(t){var e=t.target.value;a(Object(y.a)(Object(y.a)({},n),{},{name:e})),g(Object(y.a)(Object(y.a)({},p),{},{passName:0!==e.trim().length,passAll:!0}))},pass:p.passName}),Object(w.jsx)(ee,{required:!0,children:"Email"}),Object(w.jsx)(ne,{placeholder:p.passEmail?"Enter your email":"Email is required",value:n.email,onChange:function(t){var e=t.target.value;a(Object(y.a)(Object(y.a)({},n),{},{email:e})),g(Object(y.a)(Object(y.a)({},p),{},{passEmail:0!==e.trim().length,passAll:!0}))},pass:p.passEmail}),Object(w.jsx)(ee,{required:!1,children:"Subject"}),Object(w.jsx)(ne,{placeholder:"Type the subject",value:n.subject,onChange:function(t){var e=t.target.value;a(Object(y.a)(Object(y.a)({},n),{},{subject:e}))},pass:!0}),Object(w.jsx)(ee,{required:!0,children:"Message"}),Object(w.jsx)(ae,{placeholder:p.passMessage?"Type your message here...":"Message is required",value:n.message,onChange:function(t){var e=t.target.value;a(Object(y.a)(Object(y.a)({},n),{},{message:e})),g(Object(y.a)(Object(y.a)({},p),{},{passMessage:0!==e.trim().length,passAll:!0}))},pass:p.passMessage}),Object(w.jsx)(ie,{onClick:h,children:s?"Appreciate you, we will contact you soon.":p.passAll?"Submit":"Something went error..."})]})]})},se=function(){return Object(w.jsxs)(St,{children:[Object(w.jsx)(vt,{}),Object(w.jsx)(Rt,{}),Object(w.jsx)(Zt,{}),Object(w.jsx)(re,{})]})},ce=m.c.header.attrs({"data-widget":"footer"})(rt||(rt=Object(j.a)(["\n\tdisplay: grid;\n\tposition: relative;\n\tgrid-template-columns: 1fr;\n\talign-items: center;\n\ttext-align: center;\n\twidth: 100%;\n\theight: 120px;\n\tpadding: 64px 64px 0;\n\tbackground-color: var(--dark-bg-color);\n\tcolor: var(--dark-font-color);\n\tfont-size: 14px;\n\tfont-family: Poppins, sans-serif;\n"]))),le=function(){return Object(w.jsx)(ce,{children:"\xa92021 by Matryoshka Data."})},de=function(){return Object(w.jsxs)(i.Suspense,{fallback:Object(w.jsx)("div",{}),children:[Object(w.jsx)(st,{}),Object(w.jsx)(c.a,{children:Object(w.jsxs)(l.d,{children:[Object(w.jsx)(l.b,{path:a.HOME,children:Object(w.jsx)(se,{})}),Object(w.jsx)(l.b,{path:"*",children:Object(w.jsx)(l.a,{to:a.HOME})})]})}),Object(w.jsx)(le,{})]})},pe=function(){return Object(w.jsxs)(z,{children:[Object(w.jsx)(ut,{}),Object(w.jsx)(de,{})]})},ge=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),i(t),o(t),r(t)}))};s.a.render(Object(w.jsx)(o.a.StrictMode,{children:Object(w.jsx)(pe,{})}),document.getElementById("root")),ge()}},[[50,1,2]]]);
//# sourceMappingURL=main.12846a44.chunk.js.map