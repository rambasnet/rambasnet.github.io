(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{3481:function(e,t,n){"use strict";n.r(t);var r=n(2777),s=n(2262),o=n(5959),i=n(3553),a=n(7247),c=n(7294),l=(n(3935),n(5893));function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,a.Z)(e);if(t){var s=(0,a.Z)(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return(0,i.Z)(this,n)}}var f=function(e){(0,o.Z)(n,e);var t=u(n);function n(e){var s;return(0,r.Z)(this,n),(s=t.call(this,e)).state={name:"Dr. Ram Basnet",title:"Professor of Computer Science and Cybersecurity",univer_url:"http://www.coloradomesa.edu",univer_logo:"/assets/cmu-logo.svg",hide_logo:!1},s}return(0,s.Z)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize.bind(this)),this.resize()}},{key:"resize",value:function(){window.innerWidth<=760!==this.state.hide_logo&&(this.setState({hide_logo:window.innerWidth<=760}),this.state.hide_logo?document.getElementById("logo").style.display="none":document.getElementById("logo").style.display="block")}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize.bind(this))}},{key:"render",value:function(){return(0,l.jsxs)("div",{children:[(0,l.jsx)("a",{href:this.state.univer_url,target:"_blank",rel:"noreferrer",children:(0,l.jsx)("img",{id:"logo",src:this.state.univer_logo,style:{position:"absolute",top:"5px",left:"10px",height:"75px"},alt:"University Logo"})}),(0,l.jsx)("h1",{children:this.state.name}),(0,l.jsx)("p",{children:this.state.title})]})}}]),n}(c.Component);t.default=f},6825:function(e,t,n){"use strict";n.r(t);var r=n(2777),s=n(2262),o=n(5959),i=n(3553),a=n(7247),c=n(7294),l=(n(3935),n(5893));function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,a.Z)(e);if(t){var s=(0,a.Z)(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return(0,i.Z)(this,n)}}var f=function(e){(0,o.Z)(n,e);var t=u(n);function n(e){var s;return(0,r.Z)(this,n),(s=t.call(this,e)).state={nav_text:["Home","Teaching","Research","Resources","Contact"],current_nav:0},s.year=new Date,s.year=s.year.getFullYear(),s}return(0,s.Z)(n,[{key:"render",value:function(){return(0,l.jsxs)("p",{className:"text-center",children:[(0,l.jsx)("span",{children:"|"}),this.state.nav_text.map((function(e,t){return(0,l.jsxs)("span",{children:["\xa0",(0,l.jsx)("a",{href:e.toLowerCase(),children:e}),"\xa0|"]})})),(0,l.jsxs)("span",{children:[" \xa0\xa0 \xa9 ",this.year]})]})}}]),n}(c.Component);t.default=f},4197:function(e,t,n){"use strict";n.r(t);var r=n(2777),s=n(2262),o=n(748),i=n(5959),a=n(3553),c=n(7247),l=n(9499),u=n(7294),f=n(1664),h=n.n(f),d=n(5893);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.Z)(e);if(t){var s=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return(0,a.Z)(this,n)}}u.Component;var v=function(e){(0,i.Z)(n,e);var t=p(n);function n(e){var s;return(0,r.Z)(this,n),(s=t.call(this,e)).state={nav_text:["Home","Teaching","Research","Resources","Contact"],activeIndex:0,menu:!1},s}return(0,s.Z)(n,[{key:"render",value:function(){var e=this;this.state.menu;return(0,d.jsxs)("nav",{className:"navbar sticky-top navbar-expand-sm bg-dark navbar-dark",children:[(0,d.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,d.jsx)("span",{className:"navbar-toggler-icon"})}),(0,d.jsx)("div",{className:"collapse navbar-collapse ",id:"collapsibleNavbar",children:(0,d.jsx)("ul",{className:"navbar-nav",children:this.state.nav_text.map((function(t,n){return e.props.currentPage===t.toLocaleLowerCase()?(0,d.jsx)("a",{id:"currentPage",className:"nav-link",href:t.toLocaleLowerCase(),children:t}):(0,d.jsx)("a",{className:"nav-link",href:t.toLocaleLowerCase(),children:t})}))})})]})}}]),n}(u.Component);t.default=v},7431:function(e,t,n){"use strict";n.r(t);var r=n(9499),s=n(2777),o=n(2262),i=n(5959),a=n(3553),c=n(7247),l=n(7294),u=n(7215),f=n.n(u),h=n(5893);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.Z)(e);if(t){var s=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return(0,a.Z)(this,n)}}var x=function(e){(0,i.Z)(n,e);var t=v(n);function n(e){var r;return(0,s.Z)(this,n),(r=t.call(this,e)).state={},r}return(0,o.Z)(n,[{key:"render",value:function(){return(0,h.jsx)(f(),p(p({},this.props),{},{currentPage:"contact",children:(0,h.jsx)("div",{className:"row",style:{margin:"50px"},children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsxs)("div",{className:"col-sm-4",children:[(0,h.jsx)("h2",{children:"Contact"}),(0,h.jsx)("div",{className:"profileImg",children:(0,h.jsx)("img",{src:"/assets/contact.jpeg",style:{width:"100%"},alt:"Contact"})}),(0,h.jsx)("br",{}),(0,h.jsx)("hr",{className:"d-sm-none"})]}),(0,h.jsxs)("div",{className:"col-sm-8",children:[(0,h.jsx)("h2",{children:"Mailing Address"}),(0,h.jsxs)("div",{children:["Colorado Mesa University ",(0,h.jsx)("br",{}),"Computer Science and Engineering Department ",(0,h.jsx)("br",{}),"1100 North Avenue ",(0,h.jsx)("br",{}),"Grand Junction, CO 81501 ",(0,h.jsx)("br",{})]}),(0,h.jsx)("br",{}),(0,h.jsx)("h2",{children:"Office"}),(0,h.jsxs)("div",{children:["Confluence Hall ",(0,h.jsx)("br",{}),"Room: 329 ",(0,h.jsx)("br",{}),"Office Hours: ",(0,h.jsx)("a",{href:"/teaching",children:"See Here"}),(0,h.jsx)("br",{}),(0,h.jsx)("a",{href:"https://twitter.com/rambuznet",children:"Twitter "})," ",(0,h.jsx)("br",{})]}),(0,h.jsx)("br",{})]})]})})}))}}]),n}(l.Component);t.default=x},7215:function(e,t,n){"use strict";var r=n(5877),s=(r(n(7294)),r(n(3481))),o=r(n(4197)),i=r(n(6825)),a=n(5893);e.exports=function(e){return(0,a.jsxs)("html",{children:[(0,a.jsxs)("head",{children:[(0,a.jsx)("title",{children:e.title}),(0,a.jsx)("meta",{charset:"utf-8"}),(0,a.jsx)("link",{rel:"icon",href:"/assets/favicon_32.ico",type:"image/gif",sizes:"32x32"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"}),(0,a.jsx)("link",{rel:"stylesheet",href:"assets/style.css"}),(0,a.jsx)("script",{dangerouslySetInnerHTML:{__html:'\n          // This is making use of ES6 template strings, which allow for\n          // multiline strings. We specified "{jsx: {harmony: true}}" when\n          // creating the engine in app.js to get this feature.\n          console.log("hello world");\n        '}})]}),(0,a.jsx)("div",{id:"banner",className:"jumbotron text-center",style:{height:"200px"},children:(0,a.jsx)(s.default,{})}),(0,a.jsx)("div",{id:"navbar",style:{"margin-top":"-30px"},children:(0,a.jsx)(o.default,{currentPage:e.currentPage})}),(0,a.jsx)("body",{children:(0,a.jsx)("div",{children:e.children})}),(0,a.jsx)("div",{id:"footer",children:(0,a.jsx)(i.default,{})}),(0,a.jsx)("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"}),(0,a.jsx)("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"}),(0,a.jsx)("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"})]})}},8105:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(7431)}])},5877:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0}},function(e){e.O(0,[697,774,888,179],(function(){return t=8105,e(e.s=t);var t}));var t=e.O();_N_E=t}]);