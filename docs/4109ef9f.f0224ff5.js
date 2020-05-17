(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(2),r=(n(0),n(188));const o={id:"release-0.4.5",title:"Release v0.4.5",author:"Richard 'CWolf' Griffiths",author_title:"Developer",author_url:"https://github.com/cwolfs",author_image_url:"https://avatars0.githubusercontent.com/u/7622361",tags:["changelog","release","v0.4.5"]},i=[{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]},{value:"Changes",id:"changes",children:[]},{value:"Bugs Fixed",id:"bugs-fixed",children:[]}],l={permalink:"/blog/release-0.4.5",source:"@site/blog\\2020-01-26-release-0.4.5.md",description:"This release focuses on fixing bugs introduced by `v0.4.4`.",date:"2020-01-26T00:00:00.000Z",tags:[{label:"changelog",permalink:"/blog/tags/changelog"},{label:"release",permalink:"/blog/tags/release"},{label:"v0.4.5",permalink:"/blog/tags/v-0-4-5"}],title:"Release v0.4.5",prevItem:{title:"Release v0.4.6",permalink:"/blog/release-0.4.6"},nextItem:{title:"Release v0.4.4",permalink:"/blog/release-0.4.4"}},s={rightToc:i,metadata:l};function c({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This release focuses on fixing bugs introduced by ",Object(r.b)("inlineCode",{parentName:"p"},"v0.4.4"),"."),Object(r.b)("p",null,"Tracked by ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CWolfs/MissionControl/milestone/16?closed=1"}),"Milestone - v0.4.5")),Object(r.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If you're using MC without a modpack and none of your own changes, just delete the MC folder and move the new one into your mods folder"),Object(r.b)("li",{parentName:"ul"},"If you're using MC without a modpack but you've made some of your own changes to the configs:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Just copy the new ",Object(r.b)("inlineCode",{parentName:"li"},"MissionControl.dll")," and ",Object(r.b)("inlineCode",{parentName:"li"},"mod.json")," into your ",Object(r.b)("inlineCode",{parentName:"li"},"Mods/MissionControl")," folder"))),Object(r.b)("li",{parentName:"ul"},"If you're using MC as part of a modpack, let the modpack authors update MC for you")),Object(r.b)("h2",{id:"changes"},"Changes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Additional Lances: Reduced the lance reward from 150% to 75%.")),Object(r.b)("h2",{id:"bugs-fixed"},"Bugs Fixed"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Original Flashpoints: MC runs for original flashpoints regardless of the ",Object(r.b)("inlineCode",{parentName:"li"},"settings.json")," option. This doesn't affect Heavy Metal flashpoints.")))}c.isMDXComponent=!0},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a),o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},c=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),u=i(n),p=a,d=u[l+"."+p]||u[p]||s[p]||o;return n?r.a.createElement(d,Object.assign({},{ref:t},c,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);