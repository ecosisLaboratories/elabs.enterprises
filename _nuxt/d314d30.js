(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{288:function(t,e,r){"use strict";r.r(e);r(19),r(36);var n=r(27),l=r.n(n),c={scrollToTop:!0,data:function(){return{}},computed:{project:function(){return this.$store.getters.getProjectById(this.$route.params.id)}},mounted:function(){l.a.replace()},updated:function(){l.a.replace()},components:{Discord:r(97).a}},o=r(8),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mx-auto"},[t.project?r("div",[r("div",[r("p",{staticClass:"\n          text-left text-3xl\n          sm:text-4xl\n          font-bold\n          text-primary-dark\n          dark:text-primary-light\n          mt-7\n          sm:mt-20\n          mb-7\n        "},[t._v("\n        "+t._s(t.project.title)+"\n      ")]),t._v(" "),r("div",{staticClass:"flex"},[r("div",{staticClass:"flex items-center mr-10"},[r("i",{staticClass:"w-4 h-4 text-ternary-dark dark:text-ternary-light",attrs:{"data-feather":"clock"}}),t._v(" "),r("span",{staticClass:"\n              ml-2\n              leading-none\n              text-primary-dark\n              dark:text-primary-light\n            "},[t._v(t._s(t.project.publishDate))])]),t._v(" "),r("div",{staticClass:"flex items-center"},[r("i",{staticClass:"w-4 h-4 text-ternary-dark dark:text-ternary-light",attrs:{"data-feather":"tag"}}),t._v(" "),r("span",{staticClass:"\n              ml-2\n              leading-none\n              text-primary-dark\n              dark:text-primary-light\n            "},[t._v(t._s(t.project.tag))])])])]),t._v(" "),r("div",{staticClass:"grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12"},t._l(t.project.projectImages,(function(t){return r("div",{key:t.id,staticClass:"mb-10 sm:mb-0"},[r("img",{staticClass:"rounded-xl cursor-pointer shadow-lg sm:shadow-none",attrs:{src:t.img}})])})),0),t._v(" "),r("div",{staticClass:"block sm:flex gap-0 sm:gap-10 mt-14"},[r("div",{staticClass:"w-full sm:w-1/3 text-left"},[r("div",{staticClass:"mb-7"},[r("p",{staticClass:"\n              text-2xl\n              font-semibold\n              text-secondary-dark\n              dark:text-secondary-light\n              mb-2\n            "},[t._v("\n            "+t._s(t.project.clientTitle)+"\n          ")]),t._v(" "),r("div",{staticClass:"leading-loose text-ternary-dark dark:text-ternary-light"},[r("div",{staticClass:"flex"},[r("p",{staticClass:"mr-6"},[t._v("Name:")]),t._v(" "),r("p",[t._v(t._s(t.project.companyInfos.name))])]),t._v(" "),r("div",{staticClass:"flex"},[r("p",{staticClass:"mr-4"},[t._v("Service:")]),t._v(" "),r("p",[t._v(t._s(t.project.companyInfos.service))])]),t._v(" "),r("div",{staticClass:"flex"},[r("p",{staticClass:"mr-2"},[t._v("Website:")]),t._v(" "),r("a",{staticClass:"hover:underline cursor-pointer",attrs:{href:t.project.companyInfos.website,target:"_blank"}},[t._v(t._s(t.project.companyInfos.website))])])])]),t._v(" "),r("div",{staticClass:"mb-7"},[r("p",{staticClass:"\n                text-2xl\n                font-semibold\n                text-secondary-dark\n                dark:text-secondary-light\n                mb-2\n              "},[t._v("\n              Status\n            ")]),t._v(" "),r("p",{staticClass:"text-primary-dark dark:text-ternary-light"},[t._v("\n              "+t._s(t.project.status)+"\n            ")])]),t._v(" "),r("div",{staticClass:"mb-7"},[r("p",{staticClass:"\n              text-2xl\n              font-semibold\n              text-ternary-dark\n              dark:text-ternary-light\n              mb-2\n            "},[t._v("\n            "+t._s(t.project.objectivesTitle)+"\n          ")]),t._v(" "),r("p",{staticClass:"text-primary-dark dark:text-ternary-light"},[t._v("\n            "+t._s(t.project.objectivesDetails)+"\n          ")])]),t._v(" "),r("div",{staticClass:"mb-7"},[r("p",{staticClass:"\n              text-2xl\n              font-semibold\n              text-ternary-dark\n              dark:text-ternary-light\n              mb-2\n            "},[t._v("\n            "+t._s(t.project.techTitle)+"\n          ")]),t._v(" "),r("p",{staticClass:"text-primary-dark dark:text-ternary-light"},[t._v("\n            "+t._s(t.project.technologies.join(", "))+"\n          ")])]),t._v(" "),r("div",[t.project.community.discord?r("p",{staticClass:"\n              text-2xl\n              font-semibold\n              text-ternary-dark\n              dark:text-ternary-light\n              mb-2\n            "},[t._v("\n            Community\n          ")]):t._e(),t._v(" "),t.project.community.discord?r("div",{staticClass:"flex items-center gap-3 mt-5"},[r("a",{staticClass:"\n                text-gray-400\n                hover:text-indigo-500\n                dark:hover:text-indigo-400\n                cursor-pointer\n                rounded-lg\n                bg-gray-50\n                dark:bg-ternary-dark\n                hover:bg-gray-100\n                shadow-sm∫\n                p-2\n              ",attrs:{href:t.project.community.discord,target:"__blank"}},[r("Discord",{staticClass:"w-6 h-6"})],1)]):t._e()])]),t._v(" "),r("div",{staticClass:"w-full sm:w-2/3 text-left mt-10 sm:mt-0"},[r("p",{staticClass:"\n            text-primary-dark\n            dark:text-primary-light\n            text-xl\n            font-bold\n            mb-7\n          "},[t._v("\n          "+t._s(t.project.detailsTitle)+"\n        ")]),t._v(" "),t._l(t.project.projectDetails,(function(e){return r("p",{key:e.id,staticClass:"mb-5 text-lg text-ternary-dark dark:text-ternary-light"},[t._v("\n          "+t._s(e.details)+"\n        ")])}))],2)])]):r("div",{staticClass:"container mx-auto text-center"},[r("h1",[t._v("No projects yet")])])])}),[],!1,null,"3ca960e8",null);e.default=component.exports}}]);