(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{105:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"rightToc",(function(){return i})),t.d(n,"Highlight",(function(){return p})),t.d(n,"metadata",(function(){return u})),t.d(n,"default",(function(){return l}));var r=t(1),o=t(6),a=(t(0),t(154)),c={id:"mdx",title:"Powered by MDX"},i=[],p=function(e){var n=e.children,t=e.color;return Object(a.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},u={id:"mdx",title:"Powered by MDX",description:"You can write JSX and use React components within your Markdown thanks to [MDX](https://mdxjs.com/).",source:"@site/docs\\mdx.md",permalink:"/MissionControl/docs/mdx"},d={rightToc:i,Highlight:p,metadata:u},s="wrapper";function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)(s,Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can write JSX and use React components within your Markdown thanks to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://mdxjs.com/"}),"MDX"),"."),Object(a.b)(p,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," and ",Object(a.b)(p,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.",Object(a.b)("p",null,"I can write ",Object(a.b)("strong",{parentName:"p"},"Markdown")," alongside my ",Object(a.b)("em",{parentName:"p"},"JSX"),"!"))}l.isMDXComponent=!0},154:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return s}));var r=t(0),o=t.n(r),a=o.a.createContext({}),c=function(e){var n=o.a.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},i=function(e){var n=c(e.components);return o.a.createElement(a.Provider,{value:n},e.children)};var p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),d=c(t),s=r,l=d[i+"."+s]||d[s]||u[s]||a;return t?o.a.createElement(l,Object.assign({},{ref:n},p,{components:t})):o.a.createElement(l,Object.assign({},{ref:n},p))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);