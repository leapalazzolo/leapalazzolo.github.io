(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"9VDz":function(e,t,n){e.exports=n.p+"static/cover-8814106592a07b9dd7732af6574fbc2a.jpeg"},RXBc:function(e,t,n){"use strict";n.r(t);n("XfO3"),n("HEwt"),n("a1Th"),n("rE2o"),n("ioFf"),n("91GP"),n("rGqo"),n("yt8O"),n("Btvt");var r=n("q1tI"),i=n.n(r),o=n("U0YC"),a=n.n(o),s=n("vOnD"),c=n("boz2"),l=n("ma3e"),u=n("I/Ru"),f=n("0YEp"),m=n("wtQ5"),p=n("xlbW"),d=function(e){var t=e.title,n=void 0===t?"about":t,r=e.text,o=void 0===r?"":r;return i.a.createElement("div",null,i.a.createElement("h1",null,n),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:o}}))},h=(n("f3/d"),function(e){var t=e.className,n=e.name;e.level;return i.a.createElement("div",{className:t},i.a.createElement("label",{htmlFor:n+"-bar"},n),i.a.createElement("div",{id:n+"-bar",className:"skill__bar"},i.a.createElement("div",{className:"skill__level"})))});h.displaName="SkillBar";var g=Object(s.default)(h).withConfig({displayName:"skill-bar",componentId:"sc-1tv82hj-0"})(["width:100%;.skill__bar{width:100%;height:10px;background-color:lightgrey;padding:1px;}.skill__level{background-color:#25303b;width:","%;height:8px;}"],(function(e){return e.level||0})),b=Object(s.default)((function(e){var t=e.className,n=e.title,r=e.skills,o=void 0===r?[]:r;return i.a.createElement("div",{className:t},i.a.createElement("h1",null,n),o.map((function(e){return i.a.createElement(g,{key:e.name,name:e.name,level:e.level})})))})).withConfig({displayName:"skills",componentId:"sc-11il9ac-0"})(["width:100%;"]);function v(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  .timeline__item div.inner {\n    width: 40%;\n    margin: 5px 0 0 0;\n  }\n\n  .timeline__item div.inner h2:after {\n    top: 20px;\n    left: unset;\n    right: -5px;\n  }\n  .timeline__item:nth-child(2n+2) div.inner h2:after {\n    left: -5px;\n  }\n\n  "]);return v=function(){return e},e}var x=Object(s.default)((function(e){var t=e.className,n=e.jobs,r=e.title;return i.a.createElement("div",{className:t},i.a.createElement("h1",null,r),n&&n.map((function(e){return i.a.createElement("article",{key:e.begin.month+e.begin.year,className:"timeline__item"},i.a.createElement("div",{className:"inner"},i.a.createElement("span",{className:"timeline__date"},i.a.createElement("span",{className:"timeline__month"},e.begin.month),i.a.createElement("span",{className:"timeline__year"},e.begin.year)),i.a.createElement("h2",{className:"timeline__title"},e.occupation," ",i.a.createElement("br",null),i.a.createElement("small",{className:"timeline__title--subtitle"},e.company,i.a.createElement("br",null)),i.a.createElement("small",{className:"timeline__title--small"},"(",e.duration,")")),i.a.createElement("p",null,e.description)))})))})).withConfig({displayName:"timeline",componentId:"sc-1p0hdle-0"})(["position:relative;:before{content:'';display:block;position:absolute;left:50%;top:0;margin:70px 0 0 -1px;width:1px;height:calc(100% - 70px);background:#25303b;}.timeline__item{width:100%;margin:0 0 20px 0;position:relative;}.timeline__item:after{content:'';display:block;clear:both;}.timeline__item div.inner{width:100%;float:left;margin:85px 0 0 0;border-radius:6px;border:1px solid #25303b;}.timeline__date{display:block;width:60px;height:60px;padding:3px 5px;position:absolute;top:0;left:50%;margin:0 0 0 -30px;border-radius:100%;font-size:12px;font-weight:900;text-transform:uppercase;background:#25303b;color:#fff;box-shadow:0 0 0 7px #fff;}.timeline__date span{display:block;text-align:center;}.timeline__month{font-size:18px;padding-top:4px;}.timeline__year{font-size:10px;}.timeline__title{padding:15px;margin:0;color:#fff;font-size:20px;text-transform:uppercase;border-radius:3px 3px 0 0;position:relative;}.timeline__title:after{content:'';position:absolute;top:-5px;left:30%;width:10px;height:10px;transform:rotate(-45deg);}.timeline__item div.inner p{padding:15px;margin:0;font-size:14px;background:#fff;color:#656565;border-radius:0 0 6px 6px;}.timeline__item:nth-child(2n + 2) div.inner{float:right;}.timeline__title{background:#25303b;}.timeline__title:after{background:#25303b;}.timeline__title--subtitle{font-size:15px;}.timeline__title--small{font-size:10px;}",""],(function(e){return Object(c.config)().media.sm(v())})),y=Object(s.default)((function(e){return i.a.createElement("div",{className:e.className},i.a.createElement("h1",null,e.title),e.courses&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"courses__content"},e.courses.map((function(t){return i.a.createElement(i.a.Fragment,{key:t.name},i.a.createElement("div",{className:"courses__course"},i.a.createElement("a",{className:"courses__course-link",href:t.url},i.a.createElement("strong",null,t.name)),i.a.createElement("div",{className:"courses__course-date"},t.date),t.license&&i.a.createElement("div",{className:"courses__course-license"},t.license),t.certification&&i.a.createElement("div",{className:"courses__course-star"}," ",e.legend+" ★"," ")),i.a.createElement("hr",null))})))))})).withConfig({displayName:"courses",componentId:"sc-1vlyk5g-0"})(["position:relative;.courses__content{margin-bottom:40px;}.courses__course{position:relative;}.courses__course-link{text-decoration:none;color:#25303b;}.courses__course-date{font-size:14px;}.courses__course-license{color:#bbb;font-size:10px;}.courses__course-star{position:absolute;top:0;right:0;font-size:12px;}.courses__loader{display:flex;}hr{margin-top:16px;}"]),w=Object(s.default)((function(e){return i.a.createElement("div",{className:e.className},i.a.createElement("h1",null,e.title),e.education&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"education__content"},e.education.map((function(e){return i.a.createElement(i.a.Fragment,{key:e.name},i.a.createElement("div",{className:"education__course"},i.a.createElement("strong",null,e.name),i.a.createElement("div",{className:"education__course-date"},e.place," ",i.a.createElement("br",null),e.date.from+"-"+e.date.to)),i.a.createElement("hr",null))})))))})).withConfig({displayName:"education",componentId:"sc-1s7b1vv-0"})(["position:relative;.education__content{margin-bottom:40px;}.education__course{position:relative;}.education__course-link{text-decoration:none;color:#25303b;}.education__course-date{font-size:14px;}.education__course-license{color:#bbb;font-size:10px;}.education__course-star{position:absolute;top:0;right:0;font-size:12px;}.education__loader{display:flex;}hr{margin-top:16px;}"]);var _=s.default.hr.withConfig({displayName:"home__Separator",componentId:"wu0ree-0"})(["margin-top:24px;margin-bottom:16px;"]),E=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props.siteTitle,t=this.props.tabTitle,n=this.props.siteConfig.keywords;return i.a.createElement(u.a,{location:this.props.location,headerLinks:this.props.siteConfig.headerLinks,url:this.props.siteConfig.social.linkedin},i.a.createElement(m.a,{title:t,keywords:n,lang:this.props.language,description:this.props.authorDescription,author:this.props.siteConfig.twitterUsername}),i.a.createElement(f.a,{heroImg:this.props.cover,title:e}),i.a.createElement(p.a,{className:this.props.className},i.a.createElement(c.Container,{className:"page-content",fluid:!0},i.a.createElement(c.Row,null,i.a.createElement(c.Col,{xs:4,className:"avatar"},i.a.createElement("img",{className:"avatar__image",src:this.props.avatar,alt:"user avatar"}),i.a.createElement("div",{className:"social"},this.props.siteConfig.social.github&&i.a.createElement("a",{className:"social-link github",href:this.props.siteConfig.social.github},i.a.createElement(l.b,{className:"social-icon",size:"32"})),this.props.siteConfig.social.linkedin&&i.a.createElement("a",{className:"social-link linkedin",href:this.props.siteConfig.social.linkedin},i.a.createElement(l.c,{className:"social-icon",size:"32"})),this.props.siteConfig.social.twitter&&i.a.createElement("a",{className:"social-link twitter",href:this.props.siteConfig.social.twitter},i.a.createElement(l.d,{className:"social-icon",size:"32"})),this.props.siteConfig.social.email&&i.a.createElement("a",{className:"social-link email",href:"mailto:"+this.props.siteConfig.social.email},i.a.createElement(l.a,{className:"social-icon",size:"32"})),this.props.siteConfig.cellphone&&i.a.createElement("a",{className:"social-link whatsapp",href:"https://wa.me/"+this.props.siteConfig.cellphone+"?text="+encodeURIComponent(this.props.whatsappMessage)},i.a.createElement(l.e,{className:"social-icon",size:"32"}))))),i.a.createElement(c.Row,null,i.a.createElement(c.Col,{xs:4,sm:4},i.a.createElement(d,{title:this.props.titles.about,text:this.props.authorDescription})),i.a.createElement(c.Col,{xs:4,sm:4},i.a.createElement(b,{title:this.props.titles.skills,skills:this.props.siteConfig.skills}))),i.a.createElement(_,null),i.a.createElement(w,{education:this.props.education,title:this.props.titles.education}),i.a.createElement(x,{jobs:this.props.jobs,title:this.props.titles.experience}),i.a.createElement(_,null),i.a.createElement(y,{legend:this.props.titles.certified,courses:this.props.siteConfig.courses,title:this.props.titles.courses}))))},r}(i.a.Component),k=Object(s.default)(E).withConfig({displayName:"home",componentId:"wu0ree-1"})([".page-content{max-width:100%;margin-bottom:40px;}.avatar{align-items:center;margin-bottom:24px;flex-direction:column;}.avatar__image{box-shadow:3px 3px 15px 0px rgba(0,0,0,0.75);max-width:200px;border-radius:100px;margin:0 auto 24px;}.social{margin-top:12px;margin-bottom:12px;}.social-link{padding:8px;color:#555;}a.social-link.twitter:hover{color:#1da1f2;}a.social-link.github:hover{color:#24292e;}a.social-link.linkedin:hover{color:#0077b5;}a.social-link.email:hover{color:#c23a2b;}a.social-link.whatsapp:hover{color:#25d366;}"]),j=n("kCIJ"),N=n("9VDz"),O=n.n(N),S=n("jGz0"),C=n.n(S);function z(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.default=function(){var e=Object(j.useIntl)(),t=z(Array(a.a.jobsNumber).keys()).map((function(t){return{company:e.formatMessage({id:"jobs."+t+".company"}),begin:{month:e.formatMessage({id:"jobs."+t+".begin.month"}),year:e.formatMessage({id:"jobs."+t+".begin.year"})},duration:e.formatMessage({id:"jobs."+t+".duration"}),occupation:e.formatMessage({id:"jobs."+t+".occupation"}),description:e.formatMessage({id:"jobs."+t+".description"})}})),n=z(Array(a.a.educationNumber).keys()).map((function(t){return{name:e.formatMessage({id:"education."+t+".name"}),place:e.formatMessage({id:"education."+t+".place"}),date:{from:e.formatMessage({id:"education."+t+".date.from"}),to:e.formatMessage({id:"education."+t+".date.to"})}}})),r={about:e.formatMessage({id:"titles.about"}),skills:e.formatMessage({id:"titles.skills"}),experience:e.formatMessage({id:"titles.experience"}),courses:e.formatMessage({id:"titles.courses"}),certified:e.formatMessage({id:"titles.certified"}),education:e.formatMessage({id:"titles.education"})};return i.a.createElement(k,Object.assign({siteConfig:a.a,siteTitle:e.formatMessage({id:"siteTitle"}),tabTitle:e.formatMessage({id:"tabTitle"}),language:e.formatMessage({id:"language"}),authorDescription:e.formatMessage({id:"authorDescription"}),jobs:t,titles:r,education:n,whatsappMessage:e.formatMessage({id:"whatsappMessage"})},{cover:O.a,avatar:C.a}))}},UExd:function(e,t,n){var r=n("nh4g"),i=n("DVgA"),o=n("aCFj"),a=n("UqcF").f;e.exports=function(e){return function(t){for(var n,s=o(t),c=i(s),l=c.length,u=0,f=[];l>u;)n=c[u++],r&&!a.call(s,n)||f.push(e?[n,s[n]]:s[n]);return f}}},WLL4:function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperties:n("FJW5")})},boz2:function(e,t,n){n("hhXQ"),n("pIFo"),n("V+eJ"),n("LK8F"),n("bWfx"),n("DNiP"),n("8+KV"),n("0l/t"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("WLL4"),n("DW2E"),n("/SS/"),n("hHhE"),n("HAE/"),n("rE2o"),n("ioFf"),function(e,t,n,r){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var i="default"in n?n.default:n,o="default"in r?r.default:r;function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&function(e,t){(Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function d(){var e=p(["\n    @media "," {\n      ","\n    }\n  "]);return d=function(){return e},e}var h="awesomegrid",g=["xs","sm","md","lg","xl"],b={mediaQuery:"only screen",columns:{xs:4,sm:8,md:8,lg:12,xl:12},gutterWidth:{xs:1,sm:1,md:1.5,lg:1.5,xl:1.5},paddingWidth:{xs:1,sm:1,md:1.5,lg:1.5,xl:1.5},container:{xs:"full",sm:"full",md:"full",lg:90,xl:90},breakpoints:{xs:1,sm:48,md:64,lg:90,xl:120}},v=[],x=function(e){return JSON.stringify(e.theme&&e.theme[h]||{})},y=function(e){var t=e.theme&&e.theme[h]||{},r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){var r,i,o;r=e,o=n[i=t],i in r?Object.defineProperty(r,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[i]=o}))}return e}({},b,t);return r.media=Object.keys(r.breakpoints).reduce((function(e,t){var i,o=r.breakpoints[t];return e[t]=(i=[r.mediaQuery,0<=o&&"(min-width: ".concat(o,"rem)")].filter(Boolean).join(" and "),function(){return n.css(d(),i,n.css.apply(void 0,arguments))}),e}),{}),r};function w(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=x(e);if(v[0]===t)return v[1];var n=y(e);return v[0]=t,v[1]=n}function _(){var e=p(["\n    background-color: #5901ad40;\n    outline: #fff solid 1px;\n  "]);return _=function(){return e},e}function E(){var e=p(["\n      ","\n    "]);return E=function(){return e},e}function k(){var e=p(["\n    ","\n  "]);return k=function(){return e},e}function j(){var e=p(["\n      padding-left: ","rem;\n      padding-right: ","rem;\n    "]);return j=function(){return e},e}function N(){var e=p(["\n    ","\n  "]);return N=function(){return e},e}function O(){var e=p(["\n  margin-right: auto;\n  margin-left: auto;\n  max-width: 100%;\n  box-sizing: border-box;\n\n  ","\n  \n\n  ","\n\n  ","\n"]);return O=function(){return e},e}var S=i.div(O(),(function(e){return n.css(N(),g.map((function(t){return w(e).container[t]&&w(e).media[t](j(),w(e).paddingWidth[t],w(e).paddingWidth[t])})))}),(function(e){return!e.fluid&&n.css(k(),g.map((function(t){return w(e).container[t]&&w(e).media[t](E(),"number"==typeof w(e).container[t]?"width: ".concat(w(e).container[t],"rem;"):"width: 100%;")})))}),(function(e){return e.debug&&n.css(_())}));function C(){var e=p(["\n    background-color: #5901ad40;\n    outline: #fff solid 1px;\n  "]);return C=function(){return e},e}function z(){var e=p(["",""]);return z=function(){return e},e}function M(){var e=p(["\n    ","\n  "]);return M=function(){return e},e}function T(){var e=p(["",""]);return T=function(){return e},e}function L(){var e=p(["\n    ","\n  "]);return L=function(){return e},e}function P(){var e=p(["\n        flex-direction: ",";\n      "]);return P=function(){return e},e}function W(){var e=p(["\n    ","\n  "]);return W=function(){return e},e}function F(){var e=p(["\n      margin-left: -","rem;\n      margin-right: -","rem;\n    "]);return F=function(){return e},e}function I(){var e=p(["\n    ","\n  "]);return I=function(){return e},e}function D(){var e=p(["\n  box-sizing: border-box;\n  display: flex;\n  flex: 1 0 auto;\n  flex-wrap: wrap;\n  max-width: 100%;\n  \n  ","\n\n  ","\n\n  ","\n  \n  ","\n\n  ","\n"]);return D=function(){return e},e}S.displayName="Container",S.propTypes={fluid:t.bool,children:t.node,debug:t.bool};var A=i.div(D(),(function(e){return n.css(I(),g.map((function(t){return w(e).container[t]&&w(e).media[t](F(),w(e).gutterWidth[t]/2,w(e).gutterWidth[t]/2)})))}),(function(e){return e.reverse&&n.css(W(),Array.isArray(e.reverse)?g.map((function(t){return w(e).breakpoints[t]&&w(e).media[t](P(),-1!==e.reverse.indexOf(t)?"row-reverse":"row")})):"flex-direction: row-reverse;")}),(function(e){return e.align&&n.css(L(),"object"===a(e.align)?g.map((function(t){return w(e).breakpoints[t]&&w(e).media[t](T(),e.align[t]&&"align-items: ".concat(e.align[t]))})):"align-items: ".concat(e.align,";"))}),(function(e){return e.justify&&n.css(M(),"object"===a(e.justify)?g.map((function(t){return w(e).breakpoints[t]&&w(e).media[t](z(),e.justify[t]&&"justify-content: ".concat(e.justify[t]))})):"justify-content: ".concat(e.justify,";"))}),(function(e){return e.debug&&n.css(C())}));A.displayName="Row";var V=t.oneOfType([t.bool,t.array]),U=t.oneOfType([t.string,t.object]);function R(){var e=p(["\n    background-color: #5901ad40;\n    outline: #fff solid 1px;\n  "]);return R=function(){return e},e}function H(){var e=p(["",""]);return H=function(){return e},e}function B(){var e=p(["\n    ","\n  "]);return B=function(){return e},e}function G(){var e=p(["",""]);return G=function(){return e},e}function q(){var e=p(["\n    ","\n  "]);return q=function(){return e},e}function J(){var e=p(["\n        flex-direction: ",";\n      "]);return J=function(){return e},e}function X(){var e=p(["\n    ","\n  "]);return X=function(){return e},e}function Q(){var e=p(["\n    ",";\n    "]);return Q=function(){return e},e}function K(){var e=p(["\n    ","\n  "]);return K=function(){return e},e}function Y(){var e=p(["\n      ","\n    "]);return Y=function(){return e},e}function Z(){var e=p(["\n    ","\n  "]);return Z=function(){return e},e}function $(){var e=p(["\n      padding-right: ","rem;\n      padding-left: ","rem;\n    "]);return $=function(){return e},e}function ee(){var e=p(["\n    ","\n  "]);return ee=function(){return e},e}function te(){var e=p(["\n  box-sizing: border-box;\n  flex: 1 0 auto;\n  max-width: 100%;\n  display: flex;\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n  \n  ","\n  \n  ","\n"]);return te=function(){return e},e}A.propTypes={reverse:V,align:U,justify:U,children:t.node,debug:t.bool};var ne=i.div(te(),(function(e){return!e.noGutter&&n.css(ee(),g.map((function(t){return w(e).breakpoints[t]&&w(e).media[t]($(),w(e).gutterWidth[t]/2,w(e).gutterWidth[t]/2)})))}),(function(e){return n.css(Z(),g.map((function(t){return w(e).breakpoints[t]&&w(e).media[t](Y(),e[t]&&"\n        flex: 1 1 ".concat(e[t]/w(e).columns[t]*100,"%;\n        max-width: ").concat(e[t]/w(e).columns[t]*100,"%;\n      "))})))}),(function(e){return e.offset&&n.css(K(),g.map((function(t){return w(e).breakpoints[t]&&w(e).media[t](Q(),"object"===a(e.offset)?void 0!==e.offset[t]&&"margin-left: ".concat(0<e.offset[t]?e.offset[t]/w(e).columns[t]*100:0,"%"):"margin-left: ".concat(e.offset/w(e).columns.xs*100,"%"))})))}),(function(e){return e.reverse&&n.css(X(),Array.isArray(e.reverse)?g.map((function(t){return w(e).breakpoints[t]&&w(e).media[t](J(),-1!==e.reverse.indexOf(t)?"column-reverse":"column")})):"flex-direction: column-reverse;")}),(function(e){return e.align&&n.css(q(),"object"===a(e.align)?g.map((function(t){return w(e).breakpoints[t]&&w(e).media[t](G(),e.align[t]&&"align-items: ".concat(e.align[t]))})):"align-items: ".concat(e.align,";"))}),(function(e){return e.justify&&n.css(B(),"object"===a(e.justify)?g.map((function(t){return w(e).breakpoints[t]&&w(e).media[t](H(),e.justify[t]&&"justify-content: ".concat(e.justify[t]))})):"justify-content: ".concat(e.justify,";"))}),(function(e){return e.debug&&n.css(R())}));ne.displayName="Col";var re=t.oneOfType([t.string,t.number]),ie=t.oneOfType([t.string,t.object]),oe=t.oneOfType([t.bool,t.object]),ae=t.oneOfType([t.bool,t.array]);function se(){return"undefined"!=typeof window&&window.innerWidth?window.innerWidth:null}function ce(){var e,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},n=g,r=w(t).breakpoints,i="undefined"!=typeof window&&window.getComputedStyle(document.querySelector("html")).getPropertyValue("font-size").replace("px","")||16,o=Object.values(r).map((function(e){return e*i})),a=se();return a&&(e=n[0],o[1]&&a>=o[1]&&(e=n[1]),o[2]&&a>=o[2]&&(e=n[2]),o[3]&&a>=o[3]&&(e=n[3]),o[4]&&a>=o[4]&&(e=n[4])),e}ne.propTypes={xs:re,sm:re,md:re,lg:re,xl:re,align:ie,justify:ie,offSet:oe,reverse:ae,noGutter:t.bool,children:t.node,debug:t.bool};var le=function(e){function t(){var e;return s(this,t),(e=m(this,f(t).call(this))).setScreen=function(){var t=e.state.screen,n=ce(e.props);t&&t===n||(t=n,e.setState({screen:n}))},e.state={screen:"xs"},e}return u(t,r.Component),l(t,[{key:"componentDidMount",value:function(){this.setScreen(),"undefined"!=typeof window&&(window.addEventListener("orientationchange",this.setScreen,!1),window.addEventListener("resize",this.setScreen,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("orientationchange",this.setScreen),window.removeEventListener("resize",this.setScreen)}},{key:"isVisible",value:function(){var e=this.props,t=e.xs,n=e.sm,r=e.md,i=e.lg,o=e.xl;switch(this.state.screen){case"xs":return t;case"sm":return n;case"md":return r;case"lg":return i;case"xl":return o}}},{key:"render",value:function(){var e=this.props.children;return!!this.isVisible()&&o.createElement(o.Fragment,null,e)}}]),t}();le.defaultProps={xs:!1,sm:!1,md:!1,lg:!1,xl:!1,theme:{}},le.displayName="Visible",le.propTypes={xs:t.bool,sm:t.bool,md:t.bool,lg:t.bool,xl:t.bool,children:t.node};var ue=n.withTheme(le),fe=function(e){function t(){var e;return s(this,t),(e=m(this,f(t).call(this))).setScreen=function(){var t=e.state.screen,n=ce(e.props);t&&t===n||(t=n,e.setState({screen:n}))},e.state={screen:"xs"},e}return u(t,r.Component),l(t,[{key:"componentDidMount",value:function(){this.setScreen(),"undefined"!=typeof window&&(window.addEventListener("orientationchange",this.setScreen,!1),window.addEventListener("resize",this.setScreen,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("orientationchange",this.setScreen),window.removeEventListener("resize",this.setScreen)}},{key:"isHidden",value:function(){var e=this.props,t=e.xs,n=e.sm,r=e.md,i=e.lg,o=e.xl;switch(this.state.screen){case"xs":return t;case"sm":return n;case"md":return r;case"lg":return i;case"xl":return o}}},{key:"render",value:function(){var e=this.props.children;return!this.isHidden()&&o.createElement(o.Fragment,null,e)}}]),t}();fe.defaultProps={xs:!1,sm:!1,md:!1,lg:!1,xl:!1,theme:{}},fe.displayName="Hidden",fe.propTypes={xs:t.bool,sm:t.bool,md:t.bool,lg:t.bool,xl:t.bool,children:t.node};var me=n.withTheme(fe),pe=function(e){function t(){var e;return s(this,t),(e=m(this,f(t).call(this))).setScreen=function(){var t=e.state.screen,n=ce(e.props);t&&t===n||(t=n,e.setState({screen:n}))},e.state={screen:"xs"},e}return u(t,r.Component),l(t,[{key:"componentDidMount",value:function(){this.setScreen(),"undefined"!=typeof window&&(window.addEventListener("orientationchange",this.setScreen,!1),window.addEventListener("resize",this.setScreen,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("orientationchange",this.setScreen),window.removeEventListener("resize",this.setScreen)}},{key:"render",value:function(){var e=this.props.render;return o.createElement(o.Fragment,null,e&&e(this.state.screen))}}]),t}();pe.defaultProps={theme:{}},pe.displayName="ScreenClass",pe.propTypes={render:t.func};var de=n.withTheme(pe);function he(){var e=p(["\n      ::before {\n        content: '","'\n      }\n    "]);return he=function(){return e},e}function ge(){var e=p(["\n    ","\n  "]);return ge=function(){return e},e}function be(){var e=p(["\n    z-index: 10;\n    position: fixed;\n    font-size: 1.5rem;\n    font-weight: bold;\n    right: 10px;\n    bottom: 10px;\n    width: 50px;\n    height: 30px;\n    background-color: #5901ad40;\n    display: flex;\n    border-radius: 5px;\n    justify-content: center;\n    align-items: center;\n  ","\n"]);return be=function(){return e},e}var ve=i.div(be(),(function(e){return n.css(ge(),g.map((function(t){return w(e).breakpoints[t]&&w(e).media[t](he(),t)})))}));ve.displayName="ScreenBadge";var xe={getScreenClass:ce,getViewPort:se};e.Col=ne,e.Container=S,e.Hidden=me,e.Row=A,e.ScreenBadge=ve,e.ScreenClass=de,e.Visible=ue,e.config=w,e.util=xe,Object.defineProperty(e,"__esModule",{value:!0})}(t,n("17x9"),n("vOnD"),n("q1tI"))},hhXQ:function(e,t,n){var r=n("XKFU"),i=n("UExd")(!1);r(r.S,"Object",{values:function(e){return i(e)}})},jGz0:function(e,t,n){e.exports=n.p+"static/avatar-43b2b8ddfad2d3fa42866abcbb015c23.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-8408fc70526381731224.js.map