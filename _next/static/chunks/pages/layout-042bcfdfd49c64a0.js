(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[482],{7530:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/layout",function(){return s(8082)}])},3949:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var a=s(4848),r=s(6540);s(961);class n extends r.Component{componentDidMount(){window.addEventListener("resize",this.resize.bind(this)),this.resize()}resize(){window.innerWidth<=760!==this.state.hide_logo&&(this.setState({hide_logo:window.innerWidth<=760}),this.state.hide_logo?document.getElementById("logo").style.display="none":document.getElementById("logo").style.display="block")}componentWillUnmount(){window.removeEventListener("resize",this.resize.bind(this))}render(){return(0,a.jsxs)("div",{children:[(0,a.jsx)("a",{href:this.state.univer_url,target:"_blank",rel:"noreferrer",children:(0,a.jsx)("img",{id:"logo",src:this.state.univer_logo,style:{position:"absolute",top:"5px",left:"10px",height:"75px"},alt:"University Logo"})}),(0,a.jsx)("h1",{children:this.state.name}),(0,a.jsx)("p",{children:this.state.title})]})}constructor(e){super(e),this.state={name:"Dr. Ram Basnet",title:"Professor of Computer Science and Cybersecurity",univer_url:"http://www.coloradomesa.edu",univer_logo:"/assets/cmu-logo.svg",hide_logo:!1}}}let i=n},7212:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var a=s(4848),r=s(6540);s(961);class n extends r.Component{render(){return(0,a.jsxs)("p",{className:"text-center",children:[(0,a.jsx)("span",{children:"|"}),this.state.nav_text.map((e,t)=>(0,a.jsxs)("span",{children:["\xa0",(0,a.jsx)("a",{href:e.toLowerCase(),children:e}),"\xa0|"]})),(0,a.jsxs)("span",{children:[" \xa0\xa0 \xa9 ",this.year]})]})}constructor(e){super(e),this.state={nav_text:["Home","Teaching","Research","Resources","Contact"],current_nav:0},this.year=new Date,this.year=this.year.getFullYear()}}let i=n},2073:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var a=s(4848),r=s(6540);s(1106);class n extends r.Component{render(){return this.state.menu,(0,a.jsxs)("nav",{className:"navbar sticky-top navbar-expand-sm bg-dark navbar-dark",children:[(0,a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,a.jsx)("span",{className:"navbar-toggler-icon"})}),(0,a.jsx)("div",{className:"collapse navbar-collapse ",id:"collapsibleNavbar",children:(0,a.jsx)("ul",{className:"navbar-nav",children:this.state.nav_text.map((e,t)=>this.props.currentPage===e.toLocaleLowerCase()?(0,a.jsx)("a",{id:"currentPage",className:"nav-link",href:e.toLocaleLowerCase(),children:e}):(0,a.jsx)("a",{className:"nav-link",href:e.toLocaleLowerCase(),children:e}))})})]})}constructor(e){super(e),this.state={nav_text:["Home","Teaching","Research","Resources","Contact"],activeIndex:0,menu:!1}}}let i=n},8082:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var a=s(4848),r=s(6540),n=s(3368),i=s.n(n),l=s(3949),o=s(2073),c=s(7212);let d=e=>{let{children:t,title:s,currentPage:n}=e;return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsxs)(i(),{children:[(0,a.jsx)("title",{children:s}),(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsx)("link",{rel:"icon",href:"/assets/favicon_32.ico",type:"image/gif",sizes:"32x32"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,a.jsx)("div",{id:"banner",className:"jumbotron text-center",style:{height:"200px"},children:(0,a.jsx)(l.default,{})}),(0,a.jsx)("div",{id:"navbar",style:{marginTop:"-30px"},children:(0,a.jsx)(o.default,{currentPage:n})}),(0,a.jsx)("main",{children:(0,a.jsx)("div",{children:t})}),(0,a.jsx)("div",{id:"footer",children:(0,a.jsx)(c.default,{})})]})}},3368:(e,t,s)=>{e.exports=s(6085)}},e=>{var t=t=>e(e.s=t);e.O(0,[106,636,593,792],()=>t(7530)),_N_E=e.O()}]);