(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(6),o=(n(0),n(178)),i={id:"release-0.4.5",title:"Release v0.4.5",author:"Richard 'CWolf' Griffiths",author_title:"Developer",author_url:"https://github.com/cwolfs",author_image_url:"https://avatars0.githubusercontent.com/u/7622361",tags:["changelog","release","v0.4.5"]},l=[{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]},{value:"Changes",id:"changes",children:[]},{value:"Bugs Fixed",id:"bugs-fixed",children:[]}],s={permalink:"/blog/release-0.4.5",source:"@site/blog\\2020-01-26-release-0.4.5.md",description:"This release focuses on fixing bugs introduced by `v0.4.4`.",date:"2020-01-26T00:00:00.000Z",tags:[{label:"changelog",permalink:"/blog/tags/changelog"},{label:"release",permalink:"/blog/tags/release"},{label:"v0.4.5",permalink:"/blog/tags/v-0-4-5"}],title:"Release v0.4.5",prevItem:{title:"Release v0.4.6",permalink:"/blog/release-0.4.6"},nextItem:{title:"Release v0.4.4",permalink:"/blog/release-0.4.4"}},c={rightToc:l,metadata:s},u="wrapper";function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(u,Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This release focuses on fixing bugs introduced by ",Object(o.b)("inlineCode",{parentName:"p"},"v0.4.4"),"."),Object(o.b)("p",null,"Tracked by ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CWolfs/MissionControl/milestone/16?closed=1"}),"Milestone - v0.4.5")),Object(o.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you're using MC without a modpack and none of your own changes, just delete the MC folder and move the new one into your mods folder"),Object(o.b)("li",{parentName:"ul"},"If you're using MC without a modpack but you've made some of your own changes to the configs:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Just copy the new ",Object(o.b)("inlineCode",{parentName:"li"},"MissionControl.dll")," and ",Object(o.b)("inlineCode",{parentName:"li"},"mod.json")," into your ",Object(o.b)("inlineCode",{parentName:"li"},"Mods/MissionControl")," folder"))),Object(o.b)("li",{parentName:"ul"},"If you're using MC as part of a modpack, let the modpack authors update MC for you")),Object(o.b)("h2",{id:"changes"},"Changes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Additional Lances: Reduced the lance reward from 150% to 75%.")),Object(o.b)("h2",{id:"bugs-fixed"},"Bugs Fixed"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Original Flashpoints: MC runs for original flashpoints regardless of the ",Object(o.b)("inlineCode",{parentName:"li"},"settings.json")," option. This doesn't affect Heavy Metal flashpoints.")))}p.isMDXComponent=!0},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a),o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),u=i(n),p=a,d=u[l+"."+p]||u[p]||c[p]||o;return n?r.a.createElement(d,Object.assign({},{ref:t},s,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);