"use strict";(self.webpackChunkgbox_proxy_github_io=self.webpackChunkgbox_proxy_github_io||[]).push([[712],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8592:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],l={id:"introduction",title:"Introduction",hide_title:!0,sidebar_label:"Introduction",image:"https://gbox-proxy.github.io/img/gbox-full.png",slug:"/"},u=void 0,c={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"Fast reverse proxy in front of any GraphQL server for caching, securing and monitoring.",source:"@site/docs/01-introduction.md",sourceDirName:".",slug:"/",permalink:"/",editUrl:"https://github.com/gbox-proxy/gbox-proxy.github.io/edit/main/docs/01-introduction.md",tags:[],version:"current",lastUpdatedBy:"Minh Vuong",lastUpdatedAt:1651716211,formattedLastUpdatedAt:"5/5/2022",sidebarPosition:1,frontMatter:{id:"introduction",title:"Introduction",hide_title:!0,sidebar_label:"Introduction",image:"https://gbox-proxy.github.io/img/gbox-full.png",slug:"/"},sidebar:"main",next:{title:"Install",permalink:"/install"}},s={},p=[{value:"Features",id:"features",level:2},{value:"How it works",id:"how-it-works",level:2}],m={toc:p};function d(e){var t=e.components,l=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{align:"center"},(0,o.kt)("img",{width:"220px",src:"/img/gbox-full.png"})),(0,o.kt)("p",null,"Fast reverse proxy in front of any GraphQL server for caching, securing and monitoring."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud83d\udcbe Caching",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://httpwg.org/specs/rfc7234.html"},"RFC7234")," compliant HTTP Cache."),(0,o.kt)("li",{parentName:"ul"},"Cache query operations results through types."),(0,o.kt)("li",{parentName:"ul"},"Auto invalidate cache through mutation operations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://web.dev/stale-while-revalidate/"},"Swr")," query results in background."),(0,o.kt)("li",{parentName:"ul"},"Cache query results to specific headers, cookies (varies)."))),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udd10 Securing",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Disable introspection."),(0,o.kt)("li",{parentName:"ul"},"Limit operations depth, nodes and complexity."))),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udcc8 Monitoring (",(0,o.kt)("a",{parentName:"li",href:"https://prometheus.io/"},"Prometheus")," metrics)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Operations in flight."),(0,o.kt)("li",{parentName:"ul"},"Operations count."),(0,o.kt)("li",{parentName:"ul"},"Operations request durations."),(0,o.kt)("li",{parentName:"ul"},"Operations caching statuses.")))),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"Every single request sent by your clients will serve by GBox. The GBox reverse proxy will cache, validate, and collect metrics before pass through requests to your GraphQL server."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Diagram",src:r(5969).Z,width:"1296",height:"596"})))}d.isMDXComponent=!0},5969:function(e,t,r){t.Z=r.p+"assets/images/diagram-03423d3a08f6f45ee8e4672a6a5b9602.png"}}]);