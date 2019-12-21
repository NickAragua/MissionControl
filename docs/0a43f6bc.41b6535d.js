(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{153:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a),i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),u=o(n),d=a,m=u[l+"."+d]||u[d]||c[d]||i;return n?r.a.createElement(m,Object.assign({},{ref:t},s,{components:n})):r.a.createElement(m,Object.assign({},{ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(6),i=(n(0),n(153)),o={id:"release-0.3.0",title:"Release v0.3.0",author:"Richard 'CWolf' Griffiths",author_title:"Developer",author_url:"https://github.com/cwolfs",author_image_url:"https://avatars0.githubusercontent.com/u/7622361",tags:["changelog","release","v0.3.0"]},l=[{value:"Major Features",id:"major-features",children:[]},{value:"Minor Features",id:"minor-features",children:[]},{value:"Improvements",id:"improvements",children:[]},{value:"Bugs Fixed",id:"bugs-fixed",children:[]}],s={permalink:"/MissionControl/blog/release-0.3.0",source:"@site/blog\\2019-09-01-release-0.3.0.md",description:"This release adds major and minor features, improvements, and bug fixes.",date:"2019-09-01T00:00:00.000Z",tags:[{label:"changelog",permalink:"/MissionControl/blog/tags/changelog"},{label:"release",permalink:"/MissionControl/blog/tags/release"},{label:"v0.3.0",permalink:"/MissionControl/blog/tags/v-0-3-0"}],title:"Release v0.3.0",prevItem:{title:"Release v0.3.1",permalink:"/MissionControl/blog/release-0.3.1"},nextItem:{title:"Release v0.2.2",permalink:"/MissionControl/blog/release-0.2.2"}},c={rightToc:l,metadata:s},u="wrapper";function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(u,Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This release adds major and minor features, improvements, and bug fixes."),Object(i.b)("h2",{id:"major-features"},"Major Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Extended Boundaries - Increases the map size to the maximum possible. Sometimes up to four times the size."),Object(i.b)("li",{parentName:"ul"},"Dynamic Withdraw - When withdrawing, a dynamic extraction zone is created that you must get your lance to before you can escape the mission"),Object(i.b)("li",{parentName:"ul"},"Added 'Attack Defend' contract type support"),Object(i.b)("li",{parentName:"ul"},"Added 'Fire Mission' contract type support")),Object(i.b)("h2",{id:"minor-features"},"Minor Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Extended Lances: Allowed for specifying a difficulty modifier to the faction to allow for individual lance selection tweaks"),Object(i.b)("li",{parentName:"ul"},"Extended Lances: Added Better Base Defence compatibility")),Object(i.b)("h2",{id:"improvements"},"Improvements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Map loading times are improved again"),Object(i.b)("li",{parentName:"ul"},"Prevented turret lances from being influenced by Extended Lances"),Object(i.b)("li",{parentName:"ul"},"Reduced the amount of bad lance spawns where you're stuck on a hill / mountain but can move a little bit")),Object(i.b)("h2",{id:"bugs-fixed"},"Bugs Fixed"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Fixed infinite load screen caused by Extended Lances"),Object(i.b)("li",{parentName:"ul"},"Fixed Extended Lances adding bad spawns for the additional lance units"),Object(i.b)("li",{parentName:"ul"},"Fixed a bug where Extended Lances couldn't handle a bad contract json usecase")))}d.isMDXComponent=!0}}]);