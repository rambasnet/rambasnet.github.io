(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[215],{5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},7942:function(e,t,n){"use strict";var r=n(3038);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},s=n(4957),i=n(9898),c=n(639);var l={};function u(e,t,n,r){if(e&&s.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=i.useRouter(),f=a.default.useMemo((function(){var t=s.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?s.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,m=e.shallow,x=e.scroll,y=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var g=(t=a.default.Children.only(h))&&"object"===typeof t&&t.ref,j=c.useIntersection({rootMargin:"200px"}),b=r(j,2),w=b[0],_=b[1],k=a.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);a.default.useEffect((function(){var e=_&&n&&s.isLocalURL(d),t="undefined"!==typeof y?y:o&&o.locale,r=l[d+"%"+p+(t?"%"+t:"")];e&&!r&&u(o,d,p,{locale:t})}),[p,d,_,y,n,o]);var R={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:i}))}(e,o,d,p,v,m,x,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s.isLocalURL(d)&&u(o,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var L="undefined"!==typeof y?y:o&&o.locale,C=o&&o.isLocaleDomain&&s.getDomainLocale(p,L,o&&o.locales,o&&o.domainLocales);R.href=C||s.addBasePath(s.addLocale(p,L,o&&o.defaultLocale))}return a.default.cloneElement(t,R)};t.default=f},639:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,c=o.useRef(),l=o.useState(!1),u=r(l,2),f=u[0],d=u[1],p=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,s=r.elements;return s.set(e,t),a.observe(e),function(){s.delete(e),a.unobserve(e),0===s.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return o.useEffect((function(){if(!s&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=n(7294),a=n(6286),s="undefined"!==typeof IntersectionObserver;var i=new Map},3481:function(e,t,n){"use strict";n.r(t);var r=n(5671),o=n(3144),a=n(2531),s=n(245),i=n(1120),c=n(7294),l=(n(3935),n(5893));function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,i.Z)(e);if(t){var o=(0,i.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var f=function(e){(0,a.Z)(n,e);var t=u(n);function n(e){var o;return(0,r.Z)(this,n),(o=t.call(this,e)).state={name:"Dr. Ram Basnet",title:"Associate Professor of Computer Science",univer_url:"http://www.coloradomesa.edu",univer_logo:"/assets/cmu-logo.png",hide_logo:!1},o}return(0,o.Z)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize.bind(this)),this.resize()}},{key:"resize",value:function(){window.innerWidth<=760!==this.state.hide_logo&&(this.setState({hide_logo:window.innerWidth<=760}),this.state.hide_logo?document.getElementById("logo").style.display="none":document.getElementById("logo").style.display="block")}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize.bind(this))}},{key:"render",value:function(){return(0,l.jsxs)("div",{children:[(0,l.jsx)("a",{href:this.state.univer_url,target:"_blank",rel:"noreferrer",children:(0,l.jsx)("img",{id:"logo",src:this.state.univer_logo,style:{position:"absolute",top:"5px",left:"10px",height:"75px"},alt:"University Logo"})}),(0,l.jsx)("h1",{children:this.state.name}),(0,l.jsx)("p",{children:this.state.title})]})}}]),n}(c.Component);t.default=f},6825:function(e,t,n){"use strict";n.r(t);var r=n(5671),o=n(3144),a=n(2531),s=n(245),i=n(1120),c=n(7294),l=(n(3935),n(5893));function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,i.Z)(e);if(t){var o=(0,i.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var f=function(e){(0,a.Z)(n,e);var t=u(n);function n(e){var o;return(0,r.Z)(this,n),(o=t.call(this,e)).state={nav_text:["Home","Teaching","Research","Resources","Contact"],current_nav:0},o.year=new Date,o.year=o.year.getFullYear(),o}return(0,o.Z)(n,[{key:"render",value:function(){return(0,l.jsxs)("p",{className:"text-center",children:[(0,l.jsx)("span",{children:"|"}),this.state.nav_text.map((function(e,t){return(0,l.jsxs)("span",{children:["\xa0",(0,l.jsx)("a",{href:e.toLowerCase(),children:e}),"\xa0|"]})})),(0,l.jsxs)("span",{children:[" \xa0\xa0 \xa9 ",this.year]})]})}}]),n}(c.Component);t.default=f},4197:function(e,t,n){"use strict";n.r(t);var r=n(5671),o=n(3144),a=n(7326),s=n(2531),i=n(245),c=n(1120),l=n(4942),u=n(7294),f=n(1664),d=n(5893);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.Z)(e);if(t){var o=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,i.Z)(this,n)}}u.Component;var h=function(e){(0,s.Z)(n,e);var t=p(n);function n(e){var o;return(0,r.Z)(this,n),(o=t.call(this,e)).state={nav_text:["Home","Teaching","Research","Resources","Contact"],activeIndex:0,menu:!1},o}return(0,o.Z)(n,[{key:"render",value:function(){var e=this;this.state.menu;return(0,d.jsxs)("nav",{className:"navbar sticky-top navbar-expand-sm bg-dark navbar-dark",children:[(0,d.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,d.jsx)("span",{className:"navbar-toggler-icon"})}),(0,d.jsx)("div",{className:"collapse navbar-collapse ",id:"collapsibleNavbar",children:(0,d.jsx)("ul",{className:"navbar-nav",children:this.state.nav_text.map((function(t,n){return e.props.currentPage===t.toLocaleLowerCase()?(0,d.jsx)("a",{id:"currentPage",className:"nav-link",href:t.toLocaleLowerCase(),children:t}):(0,d.jsx)("a",{className:"nav-link",href:t.toLocaleLowerCase(),children:t})}))})})]})}}]),n}(u.Component);t.default=h},7215:function(e,t,n){"use strict";var r=n(5318),o=(r(n(7294)),r(n(3481))),a=r(n(4197)),s=r(n(6825)),i=n(5893);e.exports=function(e){return(0,i.jsxs)("html",{children:[(0,i.jsxs)("head",{children:[(0,i.jsx)("title",{children:e.title}),(0,i.jsx)("meta",{charset:"utf-8"}),(0,i.jsx)("link",{rel:"icon",href:"/assets/favicon_32.ico",type:"image/gif",sizes:"32x32"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"}),(0,i.jsx)("link",{rel:"stylesheet",href:"assets/style.css"}),(0,i.jsx)("script",{dangerouslySetInnerHTML:{__html:'\n          // This is making use of ES6 template strings, which allow for\n          // multiline strings. We specified "{jsx: {harmony: true}}" when\n          // creating the engine in app.js to get this feature.\n          console.log("hello world");\n        '}})]}),(0,i.jsx)("div",{id:"banner",className:"jumbotron text-center",style:{height:"200px"},children:(0,i.jsx)(o.default,{})}),(0,i.jsx)("div",{id:"navbar",style:{"margin-top":"-30px"},children:(0,i.jsx)(a.default,{currentPage:e.currentPage})}),(0,i.jsx)("body",{children:(0,i.jsx)("div",{children:e.children})}),(0,i.jsx)("div",{id:"footer",children:(0,i.jsx)(s.default,{})}),(0,i.jsx)("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"}),(0,i.jsx)("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"}),(0,i.jsx)("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"})]})}},1664:function(e,t,n){e.exports=n(7942)}}]);