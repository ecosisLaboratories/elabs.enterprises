(window.webpackJsonp=window.webpackJsonp||[]).push([[3,13],{242:function(t,e,n){var map={"./angelists_dark.png":243,"./angelists_transparent.png":244,"./aurora_dark.png":245,"./aurora_light.png":246,"./changenow_light.png":247,"./cunoro_dark.png":248,"./cunoro_transparent.png":249,"./ecosis_transparent.png":250,"./ecosis_transparent_dark.png":251,"./elabs.png":252,"./elabs_black.png":253,"./elabs_dark.png":254,"./elabs_transparent-bg.png":175,"./elabs_transparent.png":255,"./elabs_white.png":256,"./fab_light.png":257,"./revolut_light.png":258,"./shefan_light.png":259};function r(t){var e=l(t);return n(e)}function l(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=l,t.exports=r,r.id=242},243:function(t,e,n){t.exports=n.p+"img/angelists_dark.22ec5d0.png"},244:function(t,e,n){t.exports=n.p+"img/angelists_transparent.5b5f1ca.png"},245:function(t,e,n){t.exports=n.p+"img/aurora_dark.3361b39.png"},246:function(t,e,n){t.exports=n.p+"img/aurora_light.c3554e6.png"},247:function(t,e,n){t.exports=n.p+"img/changenow_light.c28c921.png"},248:function(t,e,n){t.exports=n.p+"img/cunoro_dark.0dcfd68.png"},249:function(t,e,n){t.exports=n.p+"img/cunoro_transparent.2ecbd5f.png"},250:function(t,e,n){t.exports=n.p+"img/ecosis_transparent.b804aca.png"},251:function(t,e,n){t.exports=n.p+"img/ecosis_transparent_dark.b1e8879.png"},252:function(t,e,n){t.exports=n.p+"img/elabs.3965b3d.png"},253:function(t,e,n){t.exports=n.p+"img/elabs_black.6366df9.png"},254:function(t,e,n){t.exports=n.p+"img/elabs_dark.88d2b13.png"},255:function(t,e,n){t.exports=n.p+"img/elabs_transparent.0f8bd8e.png"},256:function(t,e,n){t.exports=n.p+"img/elabs_white.549b708.png"},257:function(t,e,n){t.exports=n.p+"img/fab_light.adfeb8a.png"},258:function(t,e,n){t.exports=n.p+"img/revolut_light.843f7ab.png"},259:function(t,e,n){t.exports=n.p+"img/shefan_light.d101eb3.png"},260:function(t,e,n){"use strict";n.r(e);var r={props:{logo:String,name:String,desc:String,url:String},methods:{fetchImage:function(){return n(242)("./".concat(this.logo,".png"))}}},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"flex flex-col justify-start items-center h-auto ternary-dark text-white w-full rounded-lg md:w-1/5 m-2 p-4",attrs:{href:t.url,target:"_blank"}},[n("img",{staticClass:"w-32 p-2 my-8",attrs:{src:t.fetchImage()}}),t._v(" "),n("h2",{staticClass:"text-3xl font-bold leading-none mb-3"},[t._v(t._s(t.name))]),t._v(" "),n("p",{staticClass:"text-center"},[t._v(t._s(t.desc))])])}),[],!1,null,"c3266fea",null);e.default=component.exports},263:function(t,e,n){var content=n(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("182b2b96",content,!0,{sourceMap:!1})},268:function(t,e,n){"use strict";n(263)},269:function(t,e,n){var r=n(51)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\nh1{\n  margin-bottom:2rem;\n  font-size:3rem;\n  line-height:1;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(31, 41, 55, var(--tw-text-opacity))\n}\n.dark h1{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},276:function(t,e,n){"use strict";n.r(e);n(31),n(25),n(30),n(13),n(42),n(26),n(43);var r=n(17),l=n(33);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={data:function(){return{}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)(["clientsHeading","clients"]))},f=c,d=(n(268),n(9)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-10 sm:mt-20 text-center"},[t._m(0),t._v(" "),n("div",{staticClass:"w-full pt-8"},[n("h1",{staticClass:"w-full flex justify-center"},[t._v("Partner")]),t._v(" "),n("div",{staticClass:"flex flex-wrap justify-center"},[n("Partner",{attrs:{logo:"shefan_light",name:"SheFan Pro",desc:"Blockchain Infrastructure Project Management",url:"https://www.shefan.pro/"}}),t._v(" "),n("Partner",{attrs:{logo:"fab_light",name:"FAB",desc:"Fintech and Blockchain Association",url:"https://www.estglobalinc.com/"}}),t._v(" "),n("Partner",{attrs:{logo:"revolut_light",name:"Revolut",desc:"One App, All things Money",url:"https://www.revolut.com/"}}),t._v(" "),n("Partner",{attrs:{logo:"changenow_light",name:"ChangeNow",desc:"Crypto Exchange",url:"https://changenow.io/"}})],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full"},[n("h1",{staticClass:"w-full flex justify-center"},[t._v("Team")]),t._v(" "),n("div",{staticClass:"flex flex-wrap justify-center"},[n("a",{staticClass:"flex flex-col justify-start items-center h-auto ternary-dark text-white w-full rounded-lg md:w-1/4 m-2 p-4",attrs:{href:"https://www.linkedin.com/in/chrisElabs",target:"_blank"}},[n("img",{staticClass:"w-32 p-2 my-8 rounded-full",attrs:{src:"https://media.licdn.com/dms/image/C4E03AQG2Ij3kHXb5iA/profile-displayphoto-shrink_200_200/0/1661873099200?e=1681948800&v=beta&t=ebVOVEu54d0aYln7ARd9Lx3s8_hq-uv_-21wSCwSFrk"}}),t._v(" "),n("h2",{staticClass:"text-3xl font-bold leading-none mb-3"},[t._v("Chrstopher Müller")]),t._v(" "),n("p",{staticClass:"text-center"},[t._v("CEO")])]),t._v(" "),n("a",{staticClass:"flex flex-col justify-start items-center h-auto ternary-dark text-white w-full rounded-lg md:w-1/4 m-2 p-4",attrs:{href:"https://www.linkedin.com/in/marcuslawtonrecruiter/",target:"_blank"}},[n("img",{staticClass:"w-32 p-2 my-8 rounded-full",attrs:{src:"https://media.licdn.com/dms/image/C4D03AQGBEr_2eyx4vg/profile-displayphoto-shrink_100_100/0/1616572674152?e=1681948800&v=beta&t=_aw4bcnPYBHSur0QLUhiGoWbitwZxjgBy8jfgnRgSr4"}}),t._v(" "),n("h2",{staticClass:"text-3xl font-bold leading-none mb-3"},[t._v("Marcus Lawton")]),t._v(" "),n("p",{staticClass:"text-center"},[t._v("COO")])]),t._v(" "),n("a",{staticClass:"flex flex-col justify-start items-center h-auto ternary-dark text-white w-full rounded-lg md:w-1/4 m-2 p-4",attrs:{href:"https://www.linkedin.com/in/navneet-singhrol/",target:"_blank"}},[n("img",{staticClass:"w-32 p-2 my-8 rounded-full",attrs:{src:"https://media.licdn.com/dms/image/D4D03AQFbg3loGGw3QA/profile-displayphoto-shrink_100_100/0/1665387390807?e=1681948800&v=beta&t=W9v0mvLgndX7e4G8pbdawyEvQOUIIP9PL_25ZPqNoTY"}}),t._v(" "),n("h2",{staticClass:"text-3xl font-bold leading-none mb-3"},[t._v("Navneet Singhrol")]),t._v(" "),n("p",{staticClass:"text-center"},[t._v("CSO")])]),t._v(" "),n("a",{staticClass:"flex flex-col justify-start items-center h-auto ternary-dark text-white w-full rounded-lg md:w-1/4 m-2 p-4",attrs:{href:"https://www.linkedin.com/in/tyrese-t-73b09b161/",target:"_blank"}},[n("img",{staticClass:"w-32 p-2 my-8 rounded-full",attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}}),t._v(" "),n("h2",{staticClass:"text-3xl font-bold leading-none mb-3"},[t._v("Tyrese T.")]),t._v(" "),n("p",{staticClass:"text-center"},[t._v("Developer")])]),t._v(" "),n("a",{staticClass:"flex flex-col justify-start items-center h-auto ternary-dark text-white w-full rounded-lg md:w-1/4 m-2 p-4",attrs:{href:"https://www.linkedin.com/in/amaechi-okolobi-3b36811a6/",target:"_blank"}},[n("img",{staticClass:"w-32 p-2 my-8 rounded-full",attrs:{src:"https://media.licdn.com/dms/image/C4E03AQHYWb-McRKV9A/profile-displayphoto-shrink_100_100/0/1660577153729?e=1681948800&v=beta&t=NlLyFinksDsCfdfM3ZVvLwEktBqOv0wEvyQ4CNcOZ98"}}),t._v(" "),n("h2",{staticClass:"text-3xl font-bold leading-none mb-3"},[t._v("Amaechi Okolobi")]),t._v(" "),n("p",{staticClass:"text-center"},[t._v("Developer")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Partner:n(260).default})}}]);