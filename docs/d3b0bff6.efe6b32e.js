(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"rightToc",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(1),i=a(6),o=(a(0),a(154)),l={id:"release-0.2.0",title:"Release v0.2.0",author:"Richard 'CWolf' Griffiths",author_title:"Developer",author_url:"https://github.com/cwolfs",author_image_url:"https://avatars0.githubusercontent.com/u/7622361",tags:["changelog","release","v0.2.0"]},r=[{value:"Major Features",id:"major-features",children:[]},{value:"Minor Features",id:"minor-features",children:[]},{value:"Changes",id:"changes",children:[]},{value:"Bugs Fixed",id:"bugs-fixed",children:[]}],s={permalink:"/MissionControl/blog/release-0.2.0",source:"@site/blog\\2019-01-13-release-0.2.0.md",description:"This is the full release version of v0.2.0. Like the pre-release it fully supports v1.3 and Flashpoints.",date:"2019-01-13T00:00:00.000Z",tags:[{label:"changelog",permalink:"/MissionControl/blog/tags/changelog"},{label:"release",permalink:"/MissionControl/blog/tags/release"},{label:"v0.2.0",permalink:"/MissionControl/blog/tags/v-0-2-0"}],title:"Release v0.2.0",prevItem:{title:"Release v0.2.1",permalink:"/MissionControl/blog/release-0.2.1"},nextItem:{title:"Release v0.1.0",permalink:"/MissionControl/blog/release-0.1.0"}},c={rightToc:r,metadata:s},d="wrapper";function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(d,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This is the full release version of v0.2.0. Like the pre-release it fully supports v1.3 and Flashpoints."),Object(o.b)("h2",{id:"major-features"},"Major Features"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Extended Lances - Increase the size of a faction's lances allowing for clan stars (5 mechs) and reinforced lances / comstar demi-lances (6 mechs). Works for vanilla spawns and Mission Control spawns."),Object(o.b)("li",{parentName:"ul"},"Additional Lances Faction Rep - Allow faction reputation range to select which lance to use"),Object(o.b)("li",{parentName:"ul"},"Additional Lances Elite Lances - Allow elite lances to be selected if allied or enemy with a faction"),Object(o.b)("li",{parentName:"ul"},"Flashpoint options - Allow for disabling Mission Control entirely, or just disabling only Additional Lances for FPs"),Object(o.b)("li",{parentName:"ul"},"Additional Lances Skull Lance Difficulty - Added a full initial set of lances to fit different difficulty levels"),Object(o.b)("li",{parentName:"ul"},"Ally Lance Combat Dialogue - Added more dialogue than the sample amount in v0.2.0a"),Object(o.b)("li",{parentName:"ul"},"Additional Lances Tonnage Restrictions - Ability to disable Additional Lances on various tonnage rules"),Object(o.b)("li",{parentName:"ul"},"BT v1.3 / FP Support"),Object(o.b)("li",{parentName:"ul"},"Ally Lance Combat Dialogue - Unique dialogue per contract type and MC contract type variations if you have an ally lance dropping with you."),Object(o.b)("li",{parentName:"ul"},"Additional Lances Skull Lance Difficulty - Additional Lances now take into account skull difficulty when selecting lances to drop into a contract."),Object(o.b)("li",{parentName:"ul"},"Additional Lances in Battle are Primary Objectives - This makes a lot of sense for a Battle as the contract sometimes would end seemingly at random when the original targets were destroyed."),Object(o.b)("li",{parentName:"ul"},"Hot Drop Safety Features - When dropping into close proximity of enemies hot drop safety features will take effect. In the ",Object(o.b)("inlineCode",{parentName:"li"},"settings.json")," you can modify these. It supports auto-guard, auto-evasion and an option to include the enemies in this protection mode too.")),Object(o.b)("h2",{id:"minor-features"},"Minor Features"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Added damaged lances to the Additional Lances selection"),Object(o.b)("li",{parentName:"ul"},"Added more pilot names for combat dialogue"),Object(o.b)("li",{parentName:"ul"},"Added more pilot portraits for combat dialogue"),Object(o.b)("li",{parentName:"ul"},"Added option to turn ally drop combat dialogue off")),Object(o.b)("h2",{id:"changes"},"Changes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Changed the Additional Lance keys from all uppercase to upper snake case."),Object(o.b)("li",{parentName:"ul"},"Tweaked the path finder checks for spawning to make it slightly more lenient on sloped spawns")),Object(o.b)("h2",{id:"bugs-fixed"},"Bugs Fixed"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Skirmish would crash if ally combat dialogue referenced 'Commander' string replacement as no Commander exists like in the Sim Game"),Object(o.b)("li",{parentName:"ul"},"Contract Loading Freezes - A few contract loading freezes were fixed"),Object(o.b)("li",{parentName:"ul"},"Contract Loading Loops - A few contract loading loop issues were fixed"),Object(o.b)("li",{parentName:"ul"},"Contract Loading Times Improved - Contract loading times are drastically improved"),Object(o.b)("li",{parentName:"ul"},"Random Spawns Fallback Fixes - Fallbacks weren't always activated correctly and when they were used sometimes the lance orientation was incorrect.")))}u.isMDXComponent=!0},154:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n),o=i.a.createContext({}),l=function(e){var t=i.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},r=function(e){var t=l(e.components);return i.a.createElement(o.Provider,{value:t},e.children)};var s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),d=l(a),u=n,p=d[r+"."+u]||d[u]||c[u]||o;return a?i.a.createElement(p,Object.assign({},{ref:t},s,{components:a})):i.a.createElement(p,Object.assign({},{ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[s]="string"==typeof e?e:n,l[1]=r;for(var u=2;u<o;u++)l[u]=a[u];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);