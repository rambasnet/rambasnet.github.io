(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[465],{3481:function(e,n,t){"use strict";t.r(n);var a=t(2777),i=t(2262),r=t(5959),o=t(3553),s=t(7247),l=t(7294),c=(t(3935),t(5893));function u(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=(0,s.Z)(e);if(n){var i=(0,s.Z)(this).constructor;t=Reflect.construct(a,arguments,i)}else t=a.apply(this,arguments);return(0,o.Z)(this,t)}}var p=function(e){(0,r.Z)(t,e);var n=u(t);function t(e){var i;return(0,a.Z)(this,t),(i=n.call(this,e)).state={name:"Dr. Ram Basnet",title:"Professor of Computer Science and Cybersecurity",univer_url:"http://www.coloradomesa.edu",univer_logo:"/assets/cmu-logo.svg",hide_logo:!1},i}return(0,i.Z)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize.bind(this)),this.resize()}},{key:"resize",value:function(){window.innerWidth<=760!==this.state.hide_logo&&(this.setState({hide_logo:window.innerWidth<=760}),this.state.hide_logo?document.getElementById("logo").style.display="none":document.getElementById("logo").style.display="block")}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize.bind(this))}},{key:"render",value:function(){return(0,c.jsxs)("div",{children:[(0,c.jsx)("a",{href:this.state.univer_url,target:"_blank",rel:"noreferrer",children:(0,c.jsx)("img",{id:"logo",src:this.state.univer_logo,style:{position:"absolute",top:"5px",left:"10px",height:"75px"},alt:"University Logo"})}),(0,c.jsx)("h1",{children:this.state.name}),(0,c.jsx)("p",{children:this.state.title})]})}}]),t}(l.Component);n.default=p},6825:function(e,n,t){"use strict";t.r(n);var a=t(2777),i=t(2262),r=t(5959),o=t(3553),s=t(7247),l=t(7294),c=(t(3935),t(5893));function u(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=(0,s.Z)(e);if(n){var i=(0,s.Z)(this).constructor;t=Reflect.construct(a,arguments,i)}else t=a.apply(this,arguments);return(0,o.Z)(this,t)}}var p=function(e){(0,r.Z)(t,e);var n=u(t);function t(e){var i;return(0,a.Z)(this,t),(i=n.call(this,e)).state={nav_text:["Home","Teaching","Research","Resources","Contact"],current_nav:0},i.year=new Date,i.year=i.year.getFullYear(),i}return(0,i.Z)(t,[{key:"render",value:function(){return(0,c.jsxs)("p",{className:"text-center",children:[(0,c.jsx)("span",{children:"|"}),this.state.nav_text.map((function(e,n){return(0,c.jsxs)("span",{children:["\xa0",(0,c.jsx)("a",{href:e.toLowerCase(),children:e}),"\xa0|"]})})),(0,c.jsxs)("span",{children:[" \xa0\xa0 \xa9 ",this.year]})]})}}]),t}(l.Component);n.default=p},4197:function(e,n,t){"use strict";t.r(n);var a=t(2777),i=t(2262),r=t(748),o=t(5959),s=t(3553),l=t(7247),c=t(9499),u=t(7294),p=t(1664),d=t.n(p),f=t(5893);function h(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=(0,l.Z)(e);if(n){var i=(0,l.Z)(this).constructor;t=Reflect.construct(a,arguments,i)}else t=a.apply(this,arguments);return(0,s.Z)(this,t)}}u.Component;var g=function(e){(0,o.Z)(t,e);var n=h(t);function t(e){var i;return(0,a.Z)(this,t),(i=n.call(this,e)).state={nav_text:["Home","Teaching","Research","Resources","Contact"],activeIndex:0,menu:!1},i}return(0,i.Z)(t,[{key:"render",value:function(){var e=this;this.state.menu;return(0,f.jsxs)("nav",{className:"navbar sticky-top navbar-expand-sm bg-dark navbar-dark",children:[(0,f.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,f.jsx)("span",{className:"navbar-toggler-icon"})}),(0,f.jsx)("div",{className:"collapse navbar-collapse ",id:"collapsibleNavbar",children:(0,f.jsx)("ul",{className:"navbar-nav",children:this.state.nav_text.map((function(n,t){return e.props.currentPage===n.toLocaleLowerCase()?(0,f.jsx)("a",{id:"currentPage",className:"nav-link",href:n.toLocaleLowerCase(),children:n}):(0,f.jsx)("a",{className:"nav-link",href:n.toLocaleLowerCase(),children:n})}))})})]})}}]),t}(u.Component);n.default=g},2200:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var a=t(2777),i=t(2262),r=t(5959),o=t(3553),s=t(7247),l=t(7294),c=JSON.parse('[{"title":"Forecasting Bitcoin Returns via Machine Learning Algorithms with Technical and Economic Indicators","url":"Best Paper Award","author":"Yen-Sheng Lee and Ram Basnet","pub_info":"In Proc. of the 2024 International Conference in Management Sciences and Decision Making, May 2024, Taiwan"},{"title":"BIE: Binary Image Encoding for the Classification of Tabular Data","url":"https://jds-online.org/journal/JDS/article/1360/info","author":"James Halladay, Drake Cullen, Nathan Briner, Darrin Miller, Riley Primeau, Abraham Avilla, Warin Watson, Ram Basnet, and Tenzin Doleck","pub_info":"Journal of Data Science, pp. 1-21, 2024, doi: 10.6339/24-JDS1122"},{"title":"Tabular-to-Image Transformations for the Classification of Anonymous Network Traffic Using Deep Residual Networks","url":"https://ieeexplore.ieee.org/document/10278393","author":"Nathan Briner, Drake Cullen, James Halladay, Darrin Miller, Riley Primeau, Abraham Avilla, Ram Basnet, and Tenzin Doleck","pub_info":"IEEE Access, vol. 11, pp. 113100-113113, 2023, doi: 10.1109/ACCESS.2023.3323927"},{"title":"Evaluation of Synthetic Data Generation Techniques in the Domain of Anonymous Traffic Classification","url":"https://ieeexplore.ieee.org/document/9980373","author":"Drake Cullen, James Halladay, Nathan Briner, Ram Basnet, Jeremy Bergen, and Tenzin Doleck","pub_info":"IEEE Access, vol. 10, pp. 129612-129625, 2022, doi: 10.1109/ACCESS.2022.3228507"},{"title":"Dropout prediction in Moocs using deep learning and machine learning","url":"/pdfs/DropoutPrediction2022.pdf","author":"Ram Basnet, Clayton Johnson and Tenzin Doleck","pub_info":"Education and Information Technologies, SpringerLink, May 2022, DOI: 10.1007/s10639-022-11068-7"},{"title":"Detection and Characterization of DDoS Attacks using Time-based Features","url":"https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9770771","author":"James Halladay, Drake Cullen, Nathan Briner, Jackson Warren, Karson Fye, Ram Basnet, Jeremy Bergen, and Tenzin Doleck","pub_info":"IEEE Access, Vol. 10, pp. 1-14, May 2022, DOI: 10.1109/ACCESS.2022.3173319"},{"title":"Instructional interventions for computation thinking: Examining the link between computation thinking and academic performance","url":"https://www.sciencedirect.com/science/article/pii/S2666557321000276?via%3Dihub","author":"D. J. Lemay, R. B. Basnet, T. Doleck, P. Bazelais, A. Saxena","pub_info":"Computer and Education Open, Elsevier, Vol. 2, Dec. 2021, DOI: 10.1016/j.caeo.2021.100056"},{"title":"Feature Engineering and Machine Learning Model Comparison for Malicious Activity Detection in the DNS-Over-HTTPS Protocol","url":"https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9540699","author":"M. Behnke, N. Briner, D. Cullen, K. Schwerdtfeger, J. Warren, R. Basnet and T. Doleck","pub_info":"IEEE Access, Vol. 9, pp. 129902-129916, Sept. 2021, DOI: 10.1109/ACCESS.2021.3113294"},{"title":"Switching intentions in the context of open-source software movement: The paradox of choice","url":"https://link.springer.com/article/10.1007/s10639-021-10646-5","author":"D. J. Lemay, R. Basnet, T. Doleck","pub_info":"Education and Inforamtion Technologies, SpringerLink, July 2021"},{"title":"Application of Deep Learning on the Characterization of Tor Traffic using Time based Features","url":"http://isyou.info/jisis/vol11/no1/jisis-2021-vol11-no1-03.pdf","author":"C. Johnson, B. Khadka, E. Ruiz., J. Halladay, T. Doleck, and R. Basnet","pub_info":"JISIS - Journal of Internet Services and Information Security, pp. 44-63, Vol. 11, No. 1, March 2021"},{"title":"Towards Detecting and Classifying Malicious URLs Using Deep Learning","url":"http://isyou.info/jowua/papers/jowua-v11n4-3.pdf","author":"C. Johnson, B. Khadka, R. B. Basnet, and T. Doleck","pub_info":"Journal of Wireless Mobile Networks, Ubiquitous Computing, and Dependable Applications (JoWUA), 11(4):31-48, Dec. 2020 DOI:10.22667/JOWUA.2020.12.31.031"},{"title":"Fearing the Robot Apocalypse: Correlates of AI Anxiety","url":"https://www.online-journals.org/index.php/i-jai/article/view/16759","author":"D. J. Lemay, R. B. Basnet, and T. Doleck","pub_info":"iJAI - International Journal of Learning Analytics and Artificial Intelligence for Education, Vol. 2, No. 2, pp. 24-33, Aug. 2020"},{"title":"Examining the Relationship between Threat and Coping Appraisal in Phishing Detection among College Students","url":"http://isyou.info/jisis/vol10/no1/jisis-2020-vol10-no1-03.pdf","author":"D.J. Lemay, R.B. Basnet, and T. Doleck","pub_info":"Journal of Internet Services and Information Security, Vol. 10, No. 1, pp. 38-49, Mar. 2020"},{"title":"Towards Detecting and Classifying Network Intrusion Traffic Using Deep Learning Frameworks","url":"http://isyou.info/jisis/vol9/no4/jisis-2019-vol9-no4-01.pdf","author":"R.B. Basnet, R. Shash, C. Johnson, L. Walgren, and T. Doleck","pub_info":"Journal of Internet Services and Information Security, Vol. 9, No. 4, pp. 1-17, Nov. 2019"},{"title":"Predictive analytics in education - a comparison of deep learning frameworks","url":"/pdfs/DeepLearningEducation.pdf","author":"T. Doleck, D.J. Lemay, R.B. Basnet, and P. Bazelais","pub_info":"Education and Inforamtion Technologies, SpringerLink, pp. 1-13, Nov. 2019"},{"title":"Social network analysis of twitter use during the AERA 2017 annual conference","url":"/pdfs/TwitterAERA2017.pdf","author":"D.J. Lemay, R.B. Basnet, T. Doleck, and P. Bazelais","pub_info":"Education and Information Technologies, Springer US 24(1) 459-470, Jan. 2019"},{"title":"Developing Next Generation of Innovators - Teaching Entrepreneurial Mindset Elements across Disciplines","url":"http://www.sciedu.ca/journal/index.php/ijhe/article/view/13967/8797","author":"L.S. Nadelson, A. Palmer, T. Benton, R. Basnet, M. Bissonette, et al.","pub_info":"International Journal of Higher Education, Sept. 2018"},{"title":"Exploring Bimodality in Introductory Computer Science Performance Distributions","url":"/pdfs/ExploringBimodality.pdf","author":"R.B. Basnet, L.K. Payne, T. Doleck, D.J. Lemay, and P. Bazelais","pub_info":"EURASIA Journal of Mathematics, Science and Technology Education, July 2018, 14(10)"},{"title":"Exploring computer science students\' continuance intentions to use Kattis","url":"/pdfs/kattis.pdf","author":"R.B. Basnet, T.Doleck, D.J. Lemay, and P. Bazelais","pub_info":"Journal of Computers in Education, Springer, Oct. 2017"},{"title":"Algorithmic thinking, cooperativity, creativity, critical thinking, and problem solving - exploring the relationship between computational thinking skills and academic performance","url":"/pdfs/ComputationalThinking.pdf","author":"T. Doleck, P. Bazelais, D.J. Lemay, A. Saxena, and R.B. Basnet","pub_info":"Journal of Computers in Education, Springer, Aug. 2017"},{"title":"Mining learner-system interaction data- implications for modeling learner behaviors and improving overlay models","url":"/pdfs/ModelingLearnerBehaviors.pdf","author":"T. Doleck, R. Basnet, E. Poitras, and S. Lajoie","pub_info":"Journal of Computers in Education, Springer, Aug. 2015"},{"title":"Towards examining learner behaviors in a medical intelligent tutoring system - A Hidden Markov Model approach","url":"/pdfs/IEEEIACC_HMM.pdf","author":"T. Doleck, R. Basnet, E. Poitras, S. Lajoie","pub_info":"In Proc. of the 2015 IEEE International Conference on Advance Computing Conference (IACC 2015), June 2015, Banglore, India"},{"title":"The Critical Feature Dimension and Critical Sampling Problems","url":"https://www.researchgate.net/publication/282953973_The_Critical_Feature_Dimension_and_Critical_Sampling_Problems","author":"B. M. Ribeiro, A. Sung, D. Suryakumar, and R. Basnet","pub_info":"In Proc. of the International Conference on Pattern Recognition Applications and Methods (ICPRAM 2015), January 2015, Lisbon, Protugal."},{"title":"Towards Developing a Tool to Detect Phishing URLs- A Machine Learning Approach","url":"/pdfs/IEEECICTPhishingTools.pdf","author":"Basnet, R.B. and Doleck, T.","pub_info":"In Proc. of 2015 IEEE International Conference on Computational Intelligence & Communication Technology (CICT), Feb. 2015"},{"title":"Exploring the Link Between Initial and Final Diagnosis in a Medical Intelligent Tutoring System","url":"/pdfs/ExploringLinkMedical.pdf","author":"Doleck, T., Basnet, R. B., Poitras, E., and Lajoie, S.","pub_info":"In Proc. of IEEE International Conference on MOOC, Innovation and Technology in Education (MITE)  India IEEE 2014"},{"title":"BioWorldParser - A Suite of Parsers for Leveraging Educational Data Mining Techniques","url":"/pdfs/BioWorldParser.pdf","author":"Doleck, T., Basnet, R. B., Poitras, E., and Lajoie, S.","pub_info":"In Proc. of IEEE International Conference on MOOC, Innovation and Technology in Education (MITE)</i>, India, IEEE, 2014"},{"title":"Augmenting the Novice-Expert Overlay Model in an Intelligent Tutoring System - Using Confidence-Weighted Linear Classifiers","url":"/pdfs/LearnersBehaviorsCWLC.pdf","author":"Tenzin Doleck, Ram B. Basnet, Eric Poitras and Susan Lajoie","pub_info":"In Proceedings of IEEE International Conference on Computational Intelligence & Computing Research (ICCIC), Tamil Nadu, India, 2014."},{"title":"Learning to Detect Phishing Webpages","url":"http://isyou.info/jisis/vol4/no3/jisis-2014-vol4-no3-02.pdf","author":"Ram B. Basnet and Andrew H. Sung","pub_info":"JISIS - Journal of Internet Services and Information Security, pp. 21-39, Vol. 3, No. 4, August, 2014"},{"title":"Learning to Detect Phishing URLs","url":"/pdfs/IJRET_PhishingURLs.pdf","author":"Ram B. Basnet, Andrew H. Sung, and Quingzhong Liu","pub_info":"IJRET - International Journal of Research in Engineering and Technology, Vol. 3, Issue 6, June 2014"},{"title":"Mining Web to Detect Phishing URLs","url":"/pdfs/MiningWebToDetectPhishingURLs.pdf","author":"Ram B. Basnet and Andrew H. Sung","pub_info":"In Proc. of the 11th International Conference on Machine Learning and Applications (ICMLA), pp. 568-573. Boca Raton, FL, USA 2012"},{"title":"Feature Selection for Improved Phishing Detection","url":"/pdfs/FeatureSelectionForImprovedPhishingDetection.pdf","author":"Ram B. Basnet, Andrew H. Sung, and Quingzhong Liu","pub_info":"In Proc. of the 25th International Conference on Industrial, Engineering & Other Applications of Applied Intelligent Systems (IEA/AIE 2012), pp. 252-261. Dalian, China, Jun. 2012"},{"title":"Rule-Based Phishing Attack Detection","url":"/pdfs/RuleBasedPhishingAttackDetection.pdf","author":"Ram B. Basnet, Andrew H. Sung, and Quingzhong Liu","pub_info":"In Proc. of the International Conference on Security and Management-SAM\'11, pp. 624-630, Las Vegas, NV, USA, Jul. 2011"},{"title":"Classifying Phishing Emails Using Confidence-Weighted Linear Classifiers","url":"/pdfs/PhishingEmailCWLC.pdf","author":"Ram B. Basnet and Andrew H. Sung","pub_info":"In Proc. of the International Conference on Information Security and Artificial Intelligence (ISAI 2010), Vol. 1, pp. 108-112. Chengdu, China, Dec. 2010"},{"title":"Event Detection and Localization Using Sensor Networks","url":"/pdfs/EventDetectionAndLocalizationUsingSensorNetworks.pdf","author":"Ram B. Basnet and Srinivas Mukkamala","pub_info":"In Proc. of International Conference on Wireless Networks, Vol. II, pp. 103-108, Las Vegas, Nevada, USA, Jul. 2009"},{"title":"A Similarity Measure for Clustering and its Applications","url":"pdfs/ClusteringSimilarityAndItsApplications.pdf","author":"Guadalupe J. Torres, Ram B. Basnet, Andrew H. Sung, and Srinivas Mukkamala","pub_info":"In Proc. of World Academy of Science, Engineering and Technology, Vol. 31, ISSN 1307-6884, pp.490-496, Vienna, Austria, July 2008."},{"title":"Translation Based Arabic Text Categorization","url":"/pdfs/TranslationBasedArabicLanguageTC.pdf","author":"Madhu K. Shankarapani, Ram B. Basnet, Srinivas Mukkamala, Andrew H. Sung, and Bernardete M. Ribeiro","pub_info":"In Proc. of 2nd International Conference on Information Systems Technology and Management, 2008."},{"title":"Detection of Phishing Attacks - A Machine Learning Approach","url":"/pdfs/DetectionOfPhishingAttacks.pdf","author":"Ram B. Basnet, Srinivas Mukkamala, and Andrew. H. Sung","pub_info":"Soft Computing Applications in Industry, Springer, pp. 373-383, 2008."},{"title":"Detecting Coordinated Distributed Multiple Attacks","url":"pdfs/DetectingCDMAAttacks.pdf","author":"S. Mukkamala, K. Yendrapalli, R. B. Basnet, and A. H. Sung","pub_info":"In Proc. 21st International Conference on Advanced Information Networking and Applications (AINA 2007), Vol. 1, Niagara Falls, Canada, May 2007."},{"title":"Detection of Virtual Environments and Low Interaction Honeypots","url":"/pdfs/DetectingHoneypots.pdf","author":"S. Mukkamala, K. Yendrapalli, R. B. Basnet, M. K. Shankarpani, and A. H. Sung","pub_info":"Information Assurance and Security Workshop, IEEE SMC, Vol. 1, pp. 92-98, West Point, NY, June 2007."}]'),u=t(5893);function p(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=(0,s.Z)(e);if(n){var i=(0,s.Z)(this).constructor;t=Reflect.construct(a,arguments,i)}else t=a.apply(this,arguments);return(0,o.Z)(this,t)}}var d=function(e){(0,r.Z)(t,e);var n=p(t);function t(e){var i;return(0,a.Z)(this,t),(i=n.call(this,e)).state={pub:c},i}return(0,i.Z)(t,[{key:"render",value:function(){return(0,u.jsxs)("div",{class:"col-sm-8",children:[(0,u.jsx)("h2",{children:"PUBLICATIONS"}),(0,u.jsx)("br",{}),(0,u.jsx)("table",{className:"table table-striped",children:(0,u.jsx)("tbody",{children:this.state.pub.map((function(e){return(0,u.jsx)("tr",{children:(0,u.jsxs)("td",{children:[(0,u.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.title}),(0,u.jsx)("br",{}),e.author,(0,u.jsx)("br",{}),(0,u.jsx)("em",{children:e.pub_info})]})})}))})})]})}}]),t}(l.Component)},7215:function(e,n,t){"use strict";var a=t(5877),i=(a(t(7294)),a(t(3481))),r=a(t(4197)),o=a(t(6825)),s=t(5893);e.exports=function(e){return(0,s.jsxs)("html",{children:[(0,s.jsxs)("head",{children:[(0,s.jsx)("title",{children:e.title}),(0,s.jsx)("meta",{charset:"utf-8"}),(0,s.jsx)("link",{rel:"icon",href:"/assets/favicon_32.ico",type:"image/gif",sizes:"32x32"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,s.jsx)("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"}),(0,s.jsx)("link",{rel:"stylesheet",href:"assets/style.css"}),(0,s.jsx)("script",{dangerouslySetInnerHTML:{__html:'\n          // This is making use of ES6 template strings, which allow for\n          // multiline strings. We specified "{jsx: {harmony: true}}" when\n          // creating the engine in app.js to get this feature.\n          console.log("hello world");\n        '}})]}),(0,s.jsx)("div",{id:"banner",className:"jumbotron text-center",style:{height:"200px"},children:(0,s.jsx)(i.default,{})}),(0,s.jsx)("div",{id:"navbar",style:{"margin-top":"-30px"},children:(0,s.jsx)(r.default,{currentPage:e.currentPage})}),(0,s.jsx)("body",{children:(0,s.jsx)("div",{children:e.children})}),(0,s.jsx)("div",{id:"footer",children:(0,s.jsx)(o.default,{})}),(0,s.jsx)("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"}),(0,s.jsx)("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"}),(0,s.jsx)("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"})]})}},1997:function(e,n,t){"use strict";t.r(n);var a=t(9499),i=t(2777),r=t(2262),o=t(5959),s=t(3553),l=t(7247),c=t(7294),u=t(2200),p=t(7215),d=t.n(p),f=t(5893);function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=(0,l.Z)(e);if(n){var i=(0,l.Z)(this).constructor;t=Reflect.construct(a,arguments,i)}else t=a.apply(this,arguments);return(0,s.Z)(this,t)}}var v=function(e){(0,o.Z)(t,e);var n=m(t);function t(e){var a;return(0,i.Z)(this,t),(a=n.call(this,e)).state={interests:["Phishing attack detection","Data science and applications","Network and web application security","Computer Science education"]},a}return(0,r.Z)(t,[{key:"render",value:function(){return(0,f.jsx)(d(),g(g({},this.props),{},{currentPage:"research",children:(0,f.jsx)("div",{className:"row",style:{margin:"50px"},children:(0,f.jsxs)("div",{className:"row",children:[(0,f.jsxs)("div",{className:"col-sm-4",children:[(0,f.jsx)("h2",{children:"Research"}),(0,f.jsx)("div",{children:(0,f.jsx)("img",{src:"/assets/research.jpg",style:{width:"100%"},alt:"Research"})}),(0,f.jsx)("br",{}),(0,f.jsx)("h5",{children:"Research Interests"}),(0,f.jsx)("ul",{className:"list-group",children:this.state.interests.map((function(e){return(0,f.jsx)("li",{className:"list-group-item",children:e})}))}),(0,f.jsx)("br",{}),(0,f.jsx)("h5",{children:(0,f.jsx)("a",{href:"https://scholar.google.com/citations?user=--sMoY0AAAAJ&hl=en",target:"_blank",rel:"noreferrer",children:"Google Scholar"})}),(0,f.jsx)("h5",{children:(0,f.jsx)("a",{href:"https://www.researchgate.net/profile/Ram_Basnet2",target:"_blank",rel:"noreferrer",children:"ResearchGate"})}),(0,f.jsx)("h5",{children:(0,f.jsx)("a",{href:"http://conquer.cra.org/",target:"_blank",rel:"noreferrer",children:"Ungergraduate CS Research"})}),(0,f.jsx)("hr",{className:"d-sm-none"})]}),(0,f.jsx)(u.default,{})]})})}))}}]),t}(c.Component);n.default=v},3878:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/research",function(){return t(1997)}])},5877:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0}},function(e){e.O(0,[697,774,888,179],(function(){return n=3878,e(e.s=n);var n}));var n=e.O();_N_E=n}]);