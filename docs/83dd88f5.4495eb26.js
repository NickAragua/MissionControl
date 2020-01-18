(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{136:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(1),o=a(6),r=(a(0),a(169)),l={id:"release-0.4.2",title:"Release v0.4.2",author:"Richard 'CWolf' Griffiths",author_title:"Developer",author_url:"https://github.com/cwolfs",author_image_url:"https://avatars0.githubusercontent.com/u/7622361",tags:["changelog","release","v0.4.2"]},i=[{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]},{value:"Changes",id:"changes",children:[]},{value:"Bugs Fixed",id:"bugs-fixed",children:[]},{value:"Known Issues",id:"known-issues",children:[]}],s={permalink:"/blog/release-0.4.2",source:"@site/blog\\2020-01-03-release-0.4.2.md",description:"This release is part 1 of 2 for a big drive to reduce bugs in Mission Control.",date:"2020-01-03T00:00:00.000Z",tags:[{label:"changelog",permalink:"/blog/tags/changelog"},{label:"release",permalink:"/blog/tags/release"},{label:"v0.4.2",permalink:"/blog/tags/v-0-4-2"}],title:"Release v0.4.2",prevItem:{title:"Release v0.4.3",permalink:"/blog/release-0.4.3"},nextItem:{title:"Release v0.4.1",permalink:"/blog/release-0.4.1"}},c={rightToc:i,metadata:s},u="wrapper";function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(u,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This release is part 1 of 2 for a big drive to reduce bugs in Mission Control."),Object(r.b)("p",null,"Tracked by ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/CWolfs/MissionControl/milestone/11?closed=1"}),"Milestone - v0.4.2")),Object(r.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If you're using MC without a modpack and none of your own changes, just delete the MC folder and move the new one into your mods folder"),Object(r.b)("li",{parentName:"ul"},"If you're using MC without a modpack but you've made some of your own changes to the configs:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Back up your old MC folder"),Object(r.b)("li",{parentName:"ul"},"Move your old MC folder out of your mod folder"),Object(r.b)("li",{parentName:"ul"},"Move the new MC folder into your mod folder"),Object(r.b)("li",{parentName:"ul"},"Manually make the changes back"),Object(r.b)("li",{parentName:"ul"},"If you prefer the old balance of lances, copy your entire ",Object(r.b)("inlineCode",{parentName:"li"},"config/AdditionalLances")," folder back to the new MC mod folder"))),Object(r.b)("li",{parentName:"ul"},"If you're using MC as part of a modpack, let the modpack authors update MC for you")),Object(r.b)("h2",{id:"changes"},"Changes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Balanced Additional Lances for every difficulty level.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"No enemy lances on very low difficulty contracts"),Object(r.b)("li",{parentName:"ul"},"Lances that appear should now be lower than your lance level so to not overload players"),Object(r.b)("li",{parentName:"ul"},"Higher levels are roughly the same as before"),Object(r.b)("li",{parentName:"ul"},"Default fallback lance is now a light lance instead of a range between light up to assault"),Object(r.b)("li",{parentName:"ul"},"Removed example MC lance configs that did nothing but resulted in using the fallback. This could lead to a case where a 1/2 skull contract would give you two enemy assault lances (yikes! sorry guys!)"))),Object(r.b)("li",{parentName:"ul"},"AI: Follow AI can now be configured.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Can decide the follow logic (",Object(r.b)("inlineCode",{parentName:"li"},"HeaviestMech")," or ",Object(r.b)("inlineCode",{parentName:"li"},"LanceOrder"),")"),Object(r.b)("li",{parentName:"ul"},"Can decide when to stop using this AI (",Object(r.b)("inlineCode",{parentName:"li"},"OnEnemyDetected"),", ",Object(r.b)("inlineCode",{parentName:"li"},"OnEnemyVisible"),", ",Object(r.b)("inlineCode",{parentName:"li"},"WhenNotNeeded")," ","[previous default]",")"),Object(r.b)("li",{parentName:"ul"},"Can decide how far away from the target the AI should only sprint to catch up")))),Object(r.b)("h2",{id:"bugs-fixed"},"Bugs Fixed"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Additional Lances: Units used to sometimes spawn inside each other. This was harmless for player units in player units but issues could occur with allies and enemies. If droppods were involved there was often a mess on the floor afterwards and a dead mech"),Object(r.b)("li",{parentName:"ul"},"Story / Restoration contracts: MC was running for ",Object(r.b)("inlineCode",{parentName:"li"},"Restoration")," contracts since ",Object(r.b)("inlineCode",{parentName:"li"},"v0.4.0"),". This has now been prevented and is a similar fix that went in for ",Object(r.b)("inlineCode",{parentName:"li"},"Story")," contracts in ",Object(r.b)("inlineCode",{parentName:"li"},"v0.4.1"),"."),Object(r.b)("li",{parentName:"ul"},"Extended Boundaries: Setting ",Object(r.b)("inlineCode",{parentName:"li"},"IncreaseBoundarySizeByPercentage")," was not read. This meant there was no way to manually change the boundary size."),Object(r.b)("li",{parentName:"ul"},"Extended Boundaries: Custom sizes, including the default of 20% increase, caused some contracts to have extraction points and other important locations to fall outside the boundary."),Object(r.b)("li",{parentName:"ul"},"AI: Follow AI has been improved. Now, the Follow AI no longer runs when a condition is met (defaults to ",Object(r.b)("inlineCode",{parentName:"li"},"OnEnemyDetected"),"). This means the allied units will actually fight instead of ignore combat."),Object(r.b)("li",{parentName:"ul"},"AI: Various contract types were missing Follow AI for important reasons. This could sometimes cause the AI to do nothing. This was reworked to allow the AI to run in all contract types."),Object(r.b)("li",{parentName:"ul"},"Encounters: Fixed the cause of ",Object(r.b)("inlineCode",{parentName:"li"},"SaveSpawnPositions")," errors")),Object(r.b)("h2",{id:"known-issues"},"Known Issues"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"It's possible the changes to the AI have also affected the friendly convoy escort missions. If you see weird behaviour there please report it to me")))}d.isMDXComponent=!0},169:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n),r=o.a.createContext({}),l=function(e){var t=o.a.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},i=function(e){var t=l(e.components);return o.a.createElement(r.Provider,{value:t},e.children)};var s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),u=l(a),d=n,b=u[i+"."+d]||u[d]||c[d]||r;return a?o.a.createElement(b,Object.assign({},{ref:t},s,{components:a})):o.a.createElement(b,Object.assign({},{ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<r;d++)l[d]=a[d];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);