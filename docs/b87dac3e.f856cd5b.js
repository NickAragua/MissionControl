(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(1),i=n(6),r=(n(0),n(154)),o={id:"release-0.3.2",title:"Release v0.3.2",author:"Richard 'CWolf' Griffiths",author_title:"Developer",author_url:"https://github.com/cwolfs",author_image_url:"https://avatars0.githubusercontent.com/u/7622361",tags:["changelog","release","v0.3.2"]},l=[{value:"Major Features",id:"major-features",children:[]},{value:"Minor Features",id:"minor-features",children:[]},{value:"Bugs Fixed",id:"bugs-fixed",children:[]}],s={permalink:"/MissionControl/blog/release-0.3.2",source:"@site/blog\\2019-11-30-release-0.3.2.md",description:"This release brings in BT 1.8 compatibility and some features and bugfixes. Sadly, I haven't been able to fix the spawn and load issues yet but I am working on it.",date:"2019-11-30T00:00:00.000Z",tags:[{label:"changelog",permalink:"/MissionControl/blog/tags/changelog"},{label:"release",permalink:"/MissionControl/blog/tags/release"},{label:"v0.3.2",permalink:"/MissionControl/blog/tags/v-0-3-2"}],title:"Release v0.3.2",prevItem:{title:"Welcome",permalink:"/MissionControl/blog/welcome"},nextItem:{title:"Release v0.3.1",permalink:"/MissionControl/blog/release-0.3.1"}},c={rightToc:l,metadata:s},u="wrapper";function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(u,Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This release brings in BT 1.8 compatibility and some features and bugfixes. Sadly, I haven't been able to fix the spawn and load issues yet but I am working on it."),Object(r.b)("p",null,"Tracked by ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CWolfs/MissionControl/milestone/9"}),"Milestone - v0.3.2")),Object(r.b)("h2",{id:"major-features"},"Major Features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Added BattleTech 1.8 support"),Object(r.b)("li",{parentName:"ul"},"Additional Lances: Added contract rewards for destroying Additional Lance enemy lances.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Read the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/blob/master/docs/additional-lances.md"}),"AL documentation")," for the ",Object(r.b)("inlineCode",{parentName:"li"},"RewardsPerLance")," section. Default is 20% contract value reward."))),Object(r.b)("li",{parentName:"ul"},"Extended Boundaries: Provided more control on the size of the encounter boundaries",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Read the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/blob/master/docs/extended-boundaries.md"}),"EB documentarion")," for how to control the boundary size."))),Object(r.b)("li",{parentName:"ul"},"Added ability to prevent specific Additional Lance lance configs from autofilling with Extended Lance autofill",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Read the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/blob/master/docs/additional-lances.md"}),"AL documentation")," for the ",Object(r.b)("inlineCode",{parentName:"li"},"supportAutofill")," property.")))),Object(r.b)("h2",{id:"minor-features"},"Minor Features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Random Spawns: Provided a setting to turn off random spawns for the original map spawns (Additional Lances and Extended Lances will still spawn according to their spawn profile even with this turned to ",Object(r.b)("inlineCode",{parentName:"li"},"false"),")")),Object(r.b)("h2",{id:"bugs-fixed"},"Bugs Fixed"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Quick Skirmish: Launching into a Quick Skirmish is now fixed. Thanks ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CMiSSioN"}),"KMiSSioN")),Object(r.b)("li",{parentName:"ul"},"Quick Skmirish: Completing a Quick Skirmish fight is now fixed.")))}b.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a),r=i.a.createContext({}),o=function(e){var t=i.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=o(e.components);return i.a.createElement(r.Provider,{value:t},e.children)};var s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),u=o(n),b=a,d=u[l+"."+b]||u[b]||c[b]||r;return n?i.a.createElement(d,Object.assign({},{ref:t},s,{components:n})):i.a.createElement(d,Object.assign({},{ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var b=2;b<r;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);