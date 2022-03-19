(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(t,e,n){var content=n(229);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("7abdbb3d",content,!0,{sourceMap:!1})},166:function(t,e,n){var content=n(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("a7087594",content,!0,{sourceMap:!1})},167:function(t,e,n){var content=n(233);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("073266c4",content,!0,{sourceMap:!1})},173:function(t,e,n){"use strict";n(19),n(36);var r=n(27),o=n.n(r),c={scrollToTop:!0,data:function(){return{}},mounted:function(){o.a.replace()}},l=(n(228),n(8)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-primary-dark"},[n("AppHeader"),t._v(" "),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("Nuxt")],1),t._v(" "),n("AppFooter"),t._v(" "),n("div",{staticClass:"\n      flex\n      space-x-2\n      mr-8\n      mb-6\n      right-0\n      bottom-0\n      z-50\n      fixed\n      items-center\n      sm:space-x-4\n    "},[n("BackToTop")],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{AppHeader:n(237).default,AppFooter:n(236).default,BackToTop:n(239).default})},174:function(t,e,n){"use strict";n.r(e);n(19),n(36);var r=n(27),o=n.n(r),c={props:["showModal","modal","categories"],data:function(){return{}},mounted:function(){o.a.replace()},methods:{}},l=(n(230),n(8)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.modal,expression:"modal"}],staticClass:"fixed inset-0 z-30"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.modal,expression:"modal"}],staticClass:"\n        bg-filter bg-black bg-opacity-50\n        fixed\n        inset-0\n        w-full\n        h-full\n        z-20\n      ",on:{click:function(e){return t.showModal()}}}),t._v(" "),n("main",{staticClass:"flex flex-col items-center justify-center h-full w-full"},[n("transition",{attrs:{name:"fade-up-down"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.modal,expression:"modal"}],staticClass:"modal-wrapper flex items-center z-30"},[n("div",{staticClass:"\n              modal\n              max-w-md\n              mx-5\n              xl:max-w-xl\n              lg:max-w-xl\n              md:max-w-xl\n              bg-primary-dark\n              max-h-screen\n              shadow-lg\n              flex-row\n              relative\n            "},[n("div",{staticClass:"\n                modal-header\n                flex\n                justify-between\n                gap-10\n                pt-5\n                pr-3\n                pb-5\n                pl-8\n                border-b border-ternary-dark\n              "},[n("h5",{staticClass:"\n                  text-primary-light\n                  text-lg\n                  md:text-2xl\n                "},[t._v("\n                What project are you looking for?\n              ")]),t._v(" "),n("button",{staticClass:"\n                  pr-2\n                  font-bold\n                  text-primary-light\n                ",on:{click:function(e){return t.showModal()}}},[n("i",{staticClass:"w-8 sm:w-12",attrs:{"data-feather":"x"}})])]),t._v(" "),n("div",{staticClass:"modal-body p-5 w-full h-full"},[n("form",{staticClass:"max-w-xl m-4 text-left",on:{submit:function(t){t.preventDefault}}},[n("div",{},[n("input",{staticClass:"\n                      w-full\n                      px-5\n                      py-2\n                      border-1 border-secondary-dark\n                      rounded-md\n                      text-md\n                      dark:font-medium\n                      bg-ternary-dark\n                      text-ternary-light\n                    ",attrs:{id:"name",name:"name",type:"text",required:"",placeholder:"Name","aria-label":"Name"}})]),t._v(" "),n("div",{staticClass:"mt-6"},[n("input",{staticClass:"\n                      w-full\n                      px-5\n                      py-2\n                      border-1 border-secondary-dark\n                      rounded-md\n                      text-md\n                      font-medium\n                      bg-ternary-dark\n                      text-ternary-light\n                    ",attrs:{id:"email",name:"email",type:"text",required:"",placeholder:"Email","aria-label":"Email"}})]),t._v(" "),n("div",{staticClass:"mt-6"},[n("select",{staticClass:"\n                      w-full\n                      px-5\n                      py-2\n                      border-1 border-secondary-dark\n                      rounded-md\n                      text-md\n                      font-medium\n                      bg-ternary-dark\n                      text-ternary-light\n                    ",attrs:{id:"subject",name:"subject",type:"text",required:"","aria-label":"Project Category"}},t._l(t.categories,(function(e){return n("option",{key:e.id,domProps:{value:e.value}},[t._v("\n                      "+t._s(e.name)+"\n                    ")])})),0)]),t._v(" "),n("div",{staticClass:"mt-6"},[n("textarea",{staticClass:"\n                      w-full\n                      px-5\n                      py-2\n                      border-1 border-secondary-dark\n                      rounded-md\n                      text-md\n                      font-medium\n                      bg-ternary-dark\n                      text-ternary-light\n                    ",attrs:{id:"message",name:"message",cols:"14",rows:"6","aria-label":"Details",placeholder:"Project description"}})]),t._v(" "),n("div",{staticClass:"mt-6 pb-4 sm:pb-1"},[n("button",{staticClass:"\n                      px-4\n                      sm:px-6\n                      py-2\n                      sm:py-2.5\n                      text-white\n                      font-normal\n                      sm:font-medium\n                      bg-indigo-500\n                      hover:bg-indigo-600\n                      rounded-md\n                      focus:ring-1 focus:ring-indigo-900\n                    ",attrs:{type:"submit","aria-label":"Submit Request"}},[t._v("\n                    Send Request\n                  ")])])])]),t._v(" "),n("div",{staticClass:"modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right"},[n("button",{staticClass:"\n                  px-4\n                  sm:px-6\n                  py-2\n                  bg-gray-600\n                  bg-ternary-dark\n                  text-secondary-dark\n                  hover:bg-primary-light\n                  rounded-md\n                  font-normal\n                  sm:font-bold\n                  focus:ring-1 focus:ring-indigo-900\n                ",attrs:{"aria-label":"Close Modal"},on:{click:function(e){return t.showModal()}}},[t._v("\n                Close\n              ")])])])])])],1)])])}),[],!1,null,null,null);e.default=component.exports},175:function(t,e,n){t.exports=n.p+"img/elabs_transparent-bg.671da06.png"},178:function(t,e,n){n(179),t.exports=n(180)},228:function(t,e,n){"use strict";n(165)},229:function(t,e,n){var r=n(51)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\nbody{\n  --tw-bg-opacity:1;\n  background-color:rgba(13, 36, 56, var(--tw-bg-opacity))\n}\n.vue-back-to-top{\n  --tw-bg-opacity:1;\n  background-color:rgba(99, 102, 241, var(--tw-bg-opacity))\n}\n.vue-back-to-top:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(79, 70, 229, var(--tw-bg-opacity))\n}\n.vue-back-to-top{\n  padding:0.5rem;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n@media (min-width: 640px){\n.vue-back-to-top{\n    padding:1rem\n}\n}\n.vue-back-to-top{\n  border-radius:50%;\n  font-size:22px;\n  line-height:22px\n}\n.fade-enter-active{\n  -webkit-animation:coming .4s;\n          animation:coming .4s;\n  -webkit-animation-delay:.2s;\n          animation-delay:.2s;\n  opacity:0\n}\n.fade-leave-active{\n  -webkit-animation:going .4s;\n          animation:going .4s\n}\n@-webkit-keyframes going{\n0%{\n    transform:translateX(0)\n}\nto{\n    transform:translateX(-10px);\n    opacity:0\n}\n}\n@keyframes going{\n0%{\n    transform:translateX(0)\n}\nto{\n    transform:translateX(-10px);\n    opacity:0\n}\n}\n@-webkit-keyframes coming{\n0%{\n    transform:translateX(-10px);\n    opacity:0\n}\nto{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes coming{\n0%{\n    transform:translateX(-10px);\n    opacity:0\n}\nto{\n    transform:translateX(0);\n    opacity:1\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},230:function(t,e,n){"use strict";n(166)},231:function(t,e,n){var r=n(51)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.modal-body{\n  max-height:500px\n}\n.bg-gray-800-opacity{\n  background-color:rgba(45,55,72,.3137254901960784)\n}\n@media screen and (max-width:768px){\n.modal-body{\n    max-height:400px\n}\n}\n.fade-up-down-enter-active,.fade-up-down-leave-active{\n  transition:all .3s ease\n}\n.fade-up-down-enter,.fade-up-down-leave-to{\n  transform:translateY(10%);\n  opacity:0\n}\n.fade-enter-active{\n  -webkit-transition:opacity 2s\n}\n.fade-enter-active,.fade-leave-active{\n  transition:opacity .3s\n}\n.fade-enter,.fade-leave-to{\n  opacity:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},232:function(t,e,n){"use strict";n(167)},233:function(t,e,n){var r=n(51)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n#nav .nuxt-link-active, #nav .nuxt-link-exact-active{\n  --tw-text-opacity:1;\n  color:rgba(245, 158, 11, var(--tw-text-opacity))\n}\n.dark #nav .nuxt-link-active, .dark #nav .nuxt-link-exact-active{\n  --tw-text-opacity:1;\n  color:rgba(245, 158, 11, var(--tw-text-opacity))\n}\n#nav .nuxt-link-active, #nav .nuxt-link-exact-active{\n  font-weight:700\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},234:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"getters",(function(){return c})),n.d(e,"mutations",(function(){return l})),n.d(e,"actions",(function(){return d}));n(235),n(13);var r=n(10),o=function(){return{projectsHeading:"Projects",projectsDescription:"From Products over Bounties to Grants",projects:[{id:"nomics-development",status:"Development",title:"Nomics",category:"Development",img:"images/eco1.png",publishDate:"Dec 21, 2021",tag:"Index Token",clientTitle:"About Partner",objectivesTitle:"Product",objectivesDetails:"Nomics is an Index Token with underlying Assets by ecosis Partners.",techTitle:"Technologies",detailsTitle:"About Project",socialTitle:"Community",projectImages:[{id:Object(r.a)(),title:"ecosis",img:"../images/eco1.png"},{id:Object(r.a)(),title:"ecosis",img:"../images/eco2.png"},{id:Object(r.a)(),title:"ecosis",img:"../images/eco3.png"}],companyInfos:{name:"ecosis",service:"Web 3 Partnership Network",website:"https://ecosis.network"},technologies:["Solidity","Typescript","JavaScript","Avalanche Network","NodeJS"],projectDetails:[{id:Object(r.a)(),details:"Nomics is a product of ecosis Network, which is a Partnership Network taking the advantages to adopt 'the real world'. The crypto space is full of amazing projects, which defines the new way of doing web, business and financials more accessible and transparent. Web 3 means platforms are owned by its communities."},{id:Object(r.a)(),details:"ecosis is a Gateway to the most sophisticated technologies. So this network partners with the most user adoption friendly Web 3 Platforms."},{id:Object(r.a)(),details:"The Nomics Index Token indexes Stakes of these projects."}],community:{discord:"https://discord.gg/CMz5dXpsTE"}},{id:"cunoro-development",status:"Testing",title:"cunoro",category:"Development",img:"images/coon1.png",publishDate:"Dec 21, 2021",tag:"Bond Treasury",clientTitle:"About Partner",objectivesTitle:"Product",objectivesDetails:"cunoro is a Cashflow Gateway with a Bond Treasury.",techTitle:"Technologies",detailsTitle:"About Project",socialTitle:"Community",projectImages:[{id:Object(r.a)(),title:"cunoro",img:"../images/coon1.png"},{id:Object(r.a)(),title:"cunoro",img:"../images/coon2.png"},{id:Object(r.a)(),title:"cunoro",img:"../images/coon3.png"}],companyInfos:{name:"cunoro",service:"Bond Treasury",website:"https://cunoro.finance"},technologies:["Solidity","Typescript","JavaScript","Avalanche Network","NodeJS"],projectDetails:[{id:Object(r.a)(),details:"cunoro is a Cashflow Gateway, which uses a Bond Treasury System to get Profits out of Staking."},{id:Object(r.a)(),details:"The Bond Treasury mints COON Token by Liquidity Providing. COON is a decentralized reserve currency protocol token and is backed by its provided basket of assets, which gives it a intrinsic value that cannot fall below."},{id:Object(r.a)(),details:"cunoro's specification is its Roadmap to adopt the real world and focuses on Multi-Crypto- and Fiat-Currency-usage. To gain drastic longterm sustainability, the system is extended for Cross-Network-Multi-Treasury-Investments."}],community:{}}],copyrightDate:(new Date).getFullYear(),socialProfiles:[{id:Object(r.a)(),name:"GitHub",icon:"github",url:"https://github.com/ecosisLaboratories"},{id:Object(r.a)(),name:"Twitter",icon:"twitter",url:"https://twitter.com/realstoman"},{id:Object(r.a)(),name:"Medium",icon:"book",url:"https://stoman.medium.com"}],categories:[{id:Object(r.a)(),value:"development",name:"Development"},{id:Object(r.a)(),value:"bounties",name:"Bounties"},{id:Object(r.a)(),value:"content",name:"Content Creation"},{id:Object(r.a)(),value:"event",name:"Events"}]}},c={getProjectById:function(t){return function(e){return t.projects.find((function(t){return t.id==e}))}}},l={},d={}},236:function(t,e,n){"use strict";n.r(e);var r=n(17),o=(n(19),n(36),n(31),n(25),n(30),n(13),n(42),n(26),n(43),n(33)),c=n(27),l=n.n(c),d=n(97),m=n(8),f=Object(m.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",t._g({attrs:{fill:"#fff",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20pt",height:"20pt"}},t.$listeners),[n("path",{attrs:{d:"M10.9 2.1c-4.6.5-8.3 4.2-8.8 8.7-.5 4.7 2.2 8.9 6.3 10.5.3.1.6-.1.6-.5v-1.6s-.4.1-.9.1c-1.4 0-2-1.2-2.1-1.9-.1-.4-.3-.7-.6-1-.3-.1-.4-.1-.4-.2 0-.2.3-.2.4-.2.6 0 1.1.7 1.3 1 .5.8 1.1 1 1.4 1 .4 0 .7-.1.9-.2.1-.7.4-1.4 1-1.8-2.3-.5-4-1.8-4-4 0-1.1.5-2.2 1.2-3-.1-.2-.2-.7-.2-1.4 0-.4 0-1 .3-1.6 0 0 1.4 0 2.8 1.3.5-.2 1.2-.3 1.9-.3s1.4.1 2 .3C15.3 6 16.8 6 16.8 6c.2.6.2 1.2.2 1.6 0 .8-.1 1.2-.2 1.4.7.8 1.2 1.8 1.2 3 0 2.2-1.7 3.5-4 4 .6.5 1 1.4 1 2.3v2.6c0 .3.3.6.7.5 3.7-1.5 6.3-5.1 6.3-9.3 0-6-5.1-10.7-11.1-10z"}})])}),[],!1,null,null,null).exports,v=Object(m.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",t._g({attrs:{fill:"#fff",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"90",height:"90"}},t.$listeners),[n("path",{attrs:{d:"M24 4H6a2 2 0 00-2 2v18a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2zM10.954 22h-2.95v-9.492h2.95V22zM9.449 11.151a1.72 1.72 0 110-3.44 1.72 1.72 0 010 3.44zM22.004 22h-2.948v-4.616c0-1.101-.02-2.517-1.533-2.517-1.535 0-1.771 1.199-1.771 2.437V22h-2.948v-9.492h2.83v1.297h.04c.394-.746 1.356-1.533 2.791-1.533 2.987 0 3.539 1.966 3.539 4.522V22z"}})])}),[],!1,null,null,null).exports;function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var x={data:function(){return{}},mounted:function(){l.a.replace()},updated:function(){l.a.replace()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)(["copyrightDate","socialProfiles"])),components:{Discord:d.a,Github:f,Linkedin:v}},w=x,y=Object(m.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto"},[n("div",{staticClass:"\n      pt-20\n      sm:pt-30\n      pb-8\n      mt-20\n      border-t-2 border-secondary-dark\n    "},[n("div",{staticClass:"flex flex-col justify-center items-center mb-12 sm:mb-28"},[n("p",{staticClass:"\n          text-3xl\n          sm:text-4xl\n          font-semibold\n          text-primary-light\n          mb-5\n        "},[t._v("\n        Community\n      ")]),t._v(" "),n("div",{staticClass:"flex w-full justify-center items-center"},[n("ul",{staticClass:"flex gap-4 sm:gap-8"},[n("a",{staticClass:"\n            text-gray-400\n            hover:text-indigo-400\n            cursor-pointer\n            rounded-lg\n            bg-ternary-dark\n            shadow-sm∫\n            p-4\n            mx-4\n            ",attrs:{href:"https://discord.gg/CMz5dXpsTE",target:"__blank"}},[n("Discord",{staticClass:"w-16 h-16"})],1)]),t._v(" "),n("ul",{staticClass:"flex gap-4 sm:gap-8"},[n("a",{staticClass:"\n            text-gray-400\n            hover:text-indigo-400\n            cursor-pointer\n            rounded-lg\n            bg-ternary-dark\n            shadow-sm∫\n            p-4\n            mx-4\n            ",attrs:{href:"https://github.com/ecosisLaboratories",target:"__blank"}},[n("Github",{staticClass:"w-16 h-16"})],1)]),t._v(" "),n("ul",{staticClass:"flex gap-4 sm:gap-8"},[n("a",{staticClass:"\n            text-gray-400\n            hover:text-indigo-400\n            cursor-pointer\n            rounded-lg\n            bg-ternary-dark\n            shadow-sm∫\n            p-4\n            mx-4\n            ",attrs:{href:"https://www.linkedin.com/company/ecosislaboratories/",target:"__blank"}},[n("Linkedin",{staticClass:"w-16 h-16"})],1)])])]),t._v(" "),n("div",{staticClass:"flex justify-center items-center text-center"},[n("div",{staticClass:"flex text-lg text-ternary-light"},[t._v("\n        © "+t._s(t.copyrightDate)+"\n        "),n("a",{staticClass:"\n            text-secondary-light\n            font-medium\n            hover:underline\n            ml-4 mr-2\n          ",attrs:{href:"https://ecosis.network",target:"__blank"}},[t._v("ecosis ")]),t._v(" "),n("p",{staticClass:"\n            text-secondary-light\n            font-medium\n          "},[t._v("Laboratories")])])])])])}),[],!1,null,"63edad8e",null);e.default=y.exports},237:function(t,e,n){"use strict";n.r(e);n(31),n(25),n(30),n(13),n(42),n(26),n(43);var r=n(17),o=n(33),c=n(174),l=n(97);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m=Object(r.a)({components:{HireMeModal:c.default},data:function(){return{isOpen:!1,modal:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)(["categories"])),methods:{themeSwitcher:function(){this.$colorMode.preference="light"==this.$colorMode.value?"dark":"light"},showModal:function(){this.modal?(document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden"),this.modal=!1):(document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden"),this.modal=!0)}}},"components",{Discord:l.a}),f=m,v=n(8),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"sm:container sm:mx-auto",attrs:{id:"nav"}},[n("div",{staticClass:"\n      z-10\n      max-w-screen-lg\n      xl:max-w-screen-xl\n      block\n      sm:flex sm:justify-between sm:items-center\n      py-6\n    "},[n("div",{staticClass:"flex justify-between items-center px-6 sm:px-0"},[n("div",[n("NuxtLink",{attrs:{to:"/"}},[n("AppLogoDark",{staticClass:"w-16 h-16"})],1)],1),t._v(" "),n("div",{staticClass:"sm:hidden"},[n("button",{staticClass:"focus:outline-none",attrs:{type:"button","aria-label":"Hamburger Menu"},on:{click:function(e){t.isOpen=!t.isOpen}}},[n("svg",{staticClass:"\n              h-7\n              w-7\n              mt-1\n              fill-current\n              text-ternary-light\n            ",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[t.isOpen?n("path",{attrs:{"fill-rule":"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z","clip-rule":"evenodd"}}):t._e(),t._v(" "),t.isOpen?t._e():n("path",{attrs:{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"}})])])])]),t._v(" "),n("AppNavigation",{attrs:{isOpen:t.isOpen,showModal:t.showModal,modal:t.modal,categories:t.categories}}),t._v(" "),n("div",{staticClass:"hidden sm:flex justify-between items-center flex-col md:flex-row"},[n("div",{staticClass:"hidden md:block"},[n("a",{staticClass:"\n            flex\n            items-center\n            text-md\n            font-medium\n            bg-secondary-dark\n            border border-yellow-700\n            hover:bg-yellow-500\n            text-white\n            shadow-sm\n            rounded-md\n            px-5\n            py-2.5\n          ",attrs:{href:"https://discord.gg/CMz5dXpsTE",target:"_blank"}},[n("Discord",{staticClass:"w-6 h-6 mr-2 mt-1"}),t._v(" Join Discord\n        ")],1)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppLogoDark:n(240).default,AppNavigation:n(238).default})},238:function(t,e,n){"use strict";n.r(e);var r={props:["isOpen","showModal","modal","categories"]},o=(n(232),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    m-0\n    sm:ml-4\n    mt-5\n    sm:mt-3 sm:flex\n    p-5\n    sm:p-0\n    justify-center\n    items-center\n    shadow-lg\n    sm:shadow-none\n  ",class:t.isOpen?"block":"hidden"},[n("NuxtLink",{staticClass:"\n      block\n      text-left text-lg\n      text-ternary-light\n      hover:text-secondary-light\n      sm:mx-4\n      mb-2\n      sm:py-2\n      border-t-2\n      pt-3\n      sm:pt-2 sm:border-t-0\n      border-secondary-dark\n    ",attrs:{to:"/about","aria-label":"About Me"}},[t._v("About")]),t._v(" "),n("NuxtLink",{staticClass:"\n      block\n      text-left text-lg\n      text-ternary-light\n      hover:text-secondary-light\n      sm:mx-4\n      mb-2\n      sm:py-2\n    ",attrs:{to:"/projects","aria-label":"Projects"}},[t._v("Projects")])],1)}),[],!1,null,null,null);e.default=component.exports},239:function(t,e,n){"use strict";n.r(e);n(19),n(36);var r=n(27),o=n.n(r),c={components:{},data:function(){return{userScrollPosition:0}},computed:{isScrolled:function(){return this.userScrollPosition>100}},mounted:function(){window.addEventListener("scroll",this.updateScrollPosition),o.a.replace()},updated:function(){o.a.replace()},beforeDestroy:function(){window.removeEventListener("scroll",this.updateScrollPosition)},methods:{updateScrollPosition:function(){this.userScrollPosition=window.scrollY},backToTop:function(){window.scrollTo(0,0)}}},l=n(8),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isScrolled,expression:"isScrolled"}],staticClass:"\n      transition\n      duration-500\n      ease-in-out\n      transform\n      hover:-translate-y-1 hover:scale-110\n      rounded-full\n      cursor-pointer\n      flex\n      p-2\n      bg-indigo-500\n      hover:bg-indigo-600\n      text-white\n      items-center\n      hover:shadow-sm\n      border-none\n      ring-none\n      outline-none\n    ",on:{click:t.backToTop}},[n("i",{attrs:{"data-feather":"chevron-up"}})])])}),[],!1,null,"35071d44",null);e.default=component.exports},240:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex items-center"},[r("img",{staticClass:"w-16 h-16 ml-8 mr-4",attrs:{src:n(175)}}),t._v(" "),r("p",{staticClass:"text-secondary-light text-2xl"},[t._v("eLabs")])])}],o=n(8),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),r,!1,null,null,null);e.default=component.exports},97:function(t,e,n){"use strict";var r=n(8),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20pt",height:"20pt",viewBox:"0 0 20 20"}},t.$listeners),[n("path",{attrs:{d:"M16.93 3.742c-1.274-.574-2.64-1-4.07-1.242-.012 0-.024 0-.036.008a.049.049 0 00-.031.023c-.172.309-.367.707-.504 1.028a15.477 15.477 0 00-4.574 0 10.093 10.093 0 00-.516-1.028c-.004-.011-.015-.02-.027-.027-.012-.004-.024-.008-.035-.004-1.43.242-2.797.668-4.074 1.242-.008.004-.02.012-.024.024C.445 7.578-.266 11.296.082 14.969c0 .008.004.015.008.023a.047.047 0 00.02.02 16.599 16.599 0 004.992 2.484.067.067 0 00.039 0 .085.085 0 00.03-.02c.388-.519.731-1.062 1.024-1.636.016-.035 0-.074-.035-.086-.539-.203-1.058-.45-1.558-.734a.04.04 0 01-.024-.02.074.074 0 01-.008-.031c-.004-.008 0-.02.004-.028a.04.04 0 01.02-.023c.105-.078.21-.16.308-.242.012-.004.02-.012.032-.012.011 0 .023 0 .035.004 3.273 1.473 6.816 1.473 10.05 0 .012-.004.024-.004.036-.004.011 0 .02.004.03.012.099.082.204.164.31.242a.04.04 0 01.02.023c.003.008.007.02.007.028a.044.044 0 01-.012.031.047.047 0 01-.02.02c-.5.289-1.015.53-1.562.73-.008.004-.015.008-.02.016-.007.007-.011.015-.015.023s-.004.016-.004.024c0 .011 0 .019.008.027.297.57.64 1.117 1.02 1.633a.06.06 0 00.03.023.067.067 0 00.04 0 16.594 16.594 0 005-2.484.047.047 0 00.02-.02c.003-.008.007-.015.007-.023.418-4.246-.7-7.934-2.957-11.203-.008-.008-.016-.02-.027-.024zM6.684 12.73c-.985 0-1.797-.89-1.797-1.98 0-1.094.797-1.984 1.797-1.984 1.007 0 1.812.898 1.796 1.984 0 1.09-.796 1.98-1.796 1.98zm6.644 0c-.984 0-1.797-.89-1.797-1.98 0-1.094.797-1.984 1.797-1.984 1.008 0 1.813.898 1.797 1.984 0 1.09-.785 1.98-1.797 1.98zm0 0",fill:"#fff"}})])}),[],!1,null,null,null);e.a=component.exports}},[[178,24,1,25]]]);