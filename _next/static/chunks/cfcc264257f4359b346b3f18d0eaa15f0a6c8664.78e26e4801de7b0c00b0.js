(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/D43":function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("1OyB"),c=n("vuIU"),a=n("JX7q"),i=n("Ji7U"),s=n("md7G"),u=n("foSv"),l=n("rePB"),f=n("q1tI"),p=n.n(f),d=n("YFqc"),h=n.n(d);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var o=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}p.a.Component;var b=function(e){Object(i.a)(n,e);var t=v(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={nav_text:["Home","Teaching","Research","Resources","Contact"],activeIndex:0,menu:!1},r}return Object(c.a)(n,[{key:"render",value:function(){var e=this;this.state.menu;return Object(r.jsxs)("nav",{className:"navbar sticky-top navbar-expand-sm bg-dark navbar-dark",children:[Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsx)("div",{className:"collapse navbar-collapse ",id:"collapsibleNavbar",children:Object(r.jsx)("ul",{className:"navbar-nav",children:this.state.nav_text.map((function(t,n){return e.props.currentPage===t.toLocaleLowerCase()?Object(r.jsx)("a",{id:"currentPage",className:"nav-link",href:t.toLocaleLowerCase(),children:t}):Object(r.jsx)("a",{className:"nav-link",href:t.toLocaleLowerCase(),children:t})}))})})]})}}]),n}(p.a.Component);t.default=b},"1OyB":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},JX7q:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},Ji7U:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))},MFDk:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("1OyB"),c=n("vuIU"),a=n("Ji7U"),i=n("md7G"),s=n("foSv"),u=n("q1tI"),l=n.n(u);n("i8i4");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(s.a)(e);if(t){var o=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var p=function(e){Object(a.a)(n,e);var t=f(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={nav_text:["Home","Teaching","Research","Resources","Contact"],current_nav:0},r.year=new Date,r.year=r.year.getFullYear(),r}return Object(c.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("p",{className:"text-center",children:[Object(r.jsx)("span",{children:"|"}),this.state.nav_text.map((function(e,t){return Object(r.jsxs)("span",{children:["\xa0",Object(r.jsx)("a",{href:e.toLowerCase(),children:e}),"\xa0|"]})})),Object(r.jsxs)("span",{children:[" \xa0\xa0 \xa9 ",this.year]})]})}}]),n}(l.a.Component);t.default=p},YFqc:function(e,t,n){e.exports=n("cTJO")},Zz6l:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("1OyB"),c=n("vuIU"),a=n("Ji7U"),i=n("md7G"),s=n("foSv"),u=n("q1tI"),l=n.n(u);n("i8i4");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(s.a)(e);if(t){var o=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var p=function(e){Object(a.a)(n,e);var t=f(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={name:"Dr. Ram Basnet",title:"Associate Professor of Computer Science",univer_url:"http://www.coloradomesa.edu",univer_logo:"/assets/cmu-logo.png",hide_logo:!1},r}return Object(c.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize.bind(this)),this.resize()}},{key:"resize",value:function(){window.innerWidth<=760!==this.state.hide_logo&&(this.setState({hide_logo:window.innerWidth<=760}),this.state.hide_logo?document.getElementById("logo").style.display="none":document.getElementById("logo").style.display="block")}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize.bind(this))}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("a",{href:this.state.univer_url,target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{id:"logo",src:this.state.univer_logo,style:{position:"absolute",top:"5px",left:"10px",height:"75px"},alt:"University Logo"})}),Object(r.jsx)("h1",{children:this.state.name}),Object(r.jsx)("p",{children:this.state.title})]})}}]),n}(l.a.Component);t.default=p},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var c=o(n("q1tI")),a=n("elyg"),i=n("nOHt"),s=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.pathname||"/",f=c.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),c=n[0],i=n[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):i||c}}),[o,e.href,e.as]),p=f.href,d=f.as,h=e.children,v=e.replace,b=e.shallow,y=e.scroll,j=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var m=c.Children.only(h),g=m&&"object"===typeof m&&m.ref,x=(0,s.useIntersection)({rootMargin:"200px"}),O=r(x,2),w=O[0],_=O[1],k=c.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);(0,c.useEffect)((function(){var e=_&&t&&(0,a.isLocalURL)(p),r="undefined"!==typeof j?j:n&&n.locale,o=u[p+"%"+d+(r?"%"+r:"")];e&&!o&&l(n,p,d,{locale:r})}),[d,p,_,j,t,n]);var R={ref:k,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:c,locale:s,scroll:i}))}(e,n,p,d,v,b,y,j)},onMouseEnter:function(e){(0,a.isLocalURL)(p)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),l(n,p,d,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var L="undefined"!==typeof j?j:n&&n.locale,C=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(d,L,n&&n.locales,n&&n.domainLocales);R.href=C||(0,a.addBasePath)((0,a.addLocale)(d,L,n&&n.defaultLocale))}return c.default.cloneElement(m,R)};t.default=f},foSv:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},md7G:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return c}));var o=n("JX7q");function c(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(o.a)(e):t}},qyjm:function(e,t,n){"use strict";var r=n("TqRt"),o=n("nKUr"),c=(r(n("q1tI")),r(n("Zz6l"))),a=r(n("/D43")),i=r(n("MFDk"));e.exports=function(e){return(0,o.jsxs)("html",{children:[(0,o.jsxs)("head",{children:[(0,o.jsx)("title",{children:e.title}),(0,o.jsx)("meta",{charset:"utf-8"}),(0,o.jsx)("link",{rel:"icon",href:"/assets/favicon_32.ico",type:"image/gif",sizes:"32x32"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,o.jsx)("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"}),(0,o.jsx)("link",{rel:"stylesheet",href:"assets/style.css"}),(0,o.jsx)("script",{dangerouslySetInnerHTML:{__html:'\n          // This is making use of ES6 template strings, which allow for\n          // multiline strings. We specified "{jsx: {harmony: true}}" when\n          // creating the engine in app.js to get this feature.\n          console.log("hello world");\n        '}})]}),(0,o.jsx)("div",{id:"banner",className:"jumbotron text-center",style:{height:"200px"},children:(0,o.jsx)(c.default,{})}),(0,o.jsx)("div",{id:"navbar",style:{"margin-top":"-30px"},children:(0,o.jsx)(a.default,{currentPage:e.currentPage})}),(0,o.jsx)("body",{children:(0,o.jsx)("div",{children:e.children})}),(0,o.jsx)("div",{id:"footer",children:(0,o.jsx)(i.default,{})}),(0,o.jsx)("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"}),(0,o.jsx)("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"}),(0,o.jsx)("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"})]})}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=(0,o.useRef)(),u=(0,o.useState)(!1),l=r(u,2),f=l[0],p=l[1],d=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,c=r.observer,a=r.elements;return a.set(e,t),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,c.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[d,f]};var o=n("q1tI"),c=n("0G5g"),a="undefined"!==typeof IntersectionObserver;var i=new Map},vuIU:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))}}]);