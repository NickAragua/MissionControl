(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{110:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a(1),r=a(6),l=(a(0),a(154)),c={id:"extended-lances",title:"Extended Lances"},i=[{value:"Settings Breakdown",id:"settings-breakdown",children:[{value:"Lance Sizes",id:"lance-sizes",children:[]},{value:"Lance Sizes Data",id:"lance-sizes-data",children:[]}]}],b={id:"features/extended-lances",title:"Extended Lances",description:"Increase the sizes of lances where it makes sense. For the vanilla game this does nothing. If another mod is using Mission Control, then they can set Clan stars (5 mechs) or Comstar Demi-lances / Reinforced lances (6 mechs).",source:"@site/docs\\features\\extended-lances.md",permalink:"/MissionControl/docs/features/extended-lances",sidebar:"docs",previous:{title:"Encounter Rulesets",permalink:"/MissionControl/docs/features/encounter-rulesets"},next:{title:"Extended Boundaries",permalink:"/MissionControl/docs/features/extended-boundaries"}},o={rightToc:i,metadata:b},s="wrapper";function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)(s,Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Increase the sizes of lances where it makes sense. For the vanilla game this does nothing. If another mod is using Mission Control, then they can set Clan stars (5 mechs) or Comstar Demi-lances / Reinforced lances (6 mechs)."),Object(l.b)("p",null,"This works for both vanilla spawn points for contract types and spawns created by Mission Control."),Object(l.b)("p",null,"Extended lances can change the lance size of vanilla lance spawns and ones created with Mission Control's ",Object(l.b)("inlineCode",{parentName:"p"},"Additional Lances")," feature."),Object(l.b)("h2",{id:"settings-breakdown"},"Settings Breakdown"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"ExtendedLances": {\n  "Enable": true,\n  "Autofill": true,\n  "LanceSizes": {\n    "5": [\n      {\n        "Faction": "AuriganRestoration",\n        "DifficultyMod": -1\n      },\n      {\n        "Faction": "TaurianConcordat",\n        "DifficultyMod": -2\n      }\n    ],\n    "6": [\n      {\n      "Faction": "Comstar",\n      "DifficultyMod": -4\n      }\n    ],\n  }\n}\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Path"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Enable")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Should this feature be enabled or not?")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Autofill")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If a lance is selected for a spawn that has below the require number of units - should Extended Lances fill the lance up to the right size?")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"LanceSizes")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets which faction should have higher lance sizes. By default all faction lances are 4 units like vanilla.")))),Object(l.b)("h3",{id:"lance-sizes"},"Lance Sizes"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Path"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'Any string number above 4 (e.g. "5")'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See Table Below"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(l.b)("h3",{id:"lance-sizes-data"},"Lance Sizes Data"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Path"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Faction")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The faction short name is used to identify which faction should have the set number of units"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"DifficultyMod")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The difficulty modifier changes the lance selection criteria so a lower, or higher, difficulty lance is selected"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))))}d.isMDXComponent=!0},154:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n),l=r.a.createContext({}),c=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},i=function(e){var t=c(e.components);return r.a.createElement(l.Provider,{value:t},e.children)};var b="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),s=c(a),d=n,u=s[i+"."+d]||s[d]||o[d]||l;return a?r.a.createElement(u,Object.assign({},{ref:t},b,{components:a})):r.a.createElement(u,Object.assign({},{ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[b]="string"==typeof e?e:n,c[1]=i;for(var d=2;d<l;d++)c[d]=a[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);