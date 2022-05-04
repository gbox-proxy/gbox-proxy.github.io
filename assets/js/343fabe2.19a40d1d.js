"use strict";(self.webpackChunkgbox_proxy_github_io=self.webpackChunkgbox_proxy_github_io||[]).push([[201],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),g=i,m=d["".concat(u,".").concat(g)]||d[g]||c[g]||r;return t?a.createElement(m,o(o({ref:n},p),{},{components:t})):a.createElement(m,o({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1622:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],l={id:"caching-tagging",title:"Tagging",sidebar_label:"Tagging",image:"https://gbox-proxy.github.io/img/gbox-full.png",slug:"/caching/tagging"},u=void 0,s={unversionedId:"caching/caching-tagging",id:"caching/caching-tagging",title:"Tagging",description:"The following GraphQL query to Countries GraphQL API see how this is handled by GBox.",source:"@site/docs/04-caching/01-tagging.mdx",sourceDirName:"04-caching",slug:"/caching/tagging",permalink:"/caching/tagging",editUrl:"https://github.com/gbox-proxy/gbox-proxy.github.io/edit/main/docs/04-caching/01-tagging.mdx",tags:[],version:"current",lastUpdatedBy:"Minh Vuong",lastUpdatedAt:1651650491,formattedLastUpdatedAt:"5/4/2022",sidebarPosition:1,frontMatter:{id:"caching-tagging",title:"Tagging",sidebar_label:"Tagging",image:"https://gbox-proxy.github.io/img/gbox-full.png",slug:"/caching/tagging"},sidebar:"main",previous:{title:"Config",permalink:"/config"},next:{title:"Rules",permalink:"/caching/rules"}},p={},c=[{value:"Nested Types",id:"nested-types",level:2},{value:"Key Fields",id:"key-fields",level:2},{value:"Debug headers",id:"debug-headers",level:2}],d={toc:c};function g(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The following GraphQL query to ",(0,r.kt)("a",{parentName:"p",href:"https://countries.trevorblades.com/"},"Countries GraphQL API")," see how this is handled by GBox."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query GetContinents {\n    continents {\n        name\n        code\n    }\n}\n")),(0,r.kt)("p",null,"The response to the above query would look like the following JSON document:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "continents": [\n      {\n        "name": "Africa",\n        "code": "AF"\n      },\n      {\n        "name": "Antarctica",\n        "code": "AN"\n      },\n      {\n        "name": "Asia",\n        "code": "AS"\n      },\n      {\n        "name": "Europe",\n        "code": "EU"\n      },\n      {\n        "name": "North America",\n        "code": "NA"\n      },\n      {\n        "name": "Oceania",\n        "code": "OC"\n      },\n      {\n        "name": "South America",\n        "code": "SA"\n      }\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"GBox then takes a look at the response and figure out which types and instances of those types are included. This information informs which tags are added to the response when it is stored in the cache."),(0,r.kt)("p",null,"Based on the above query, those tags will look like the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"schema:xxxx"),": the schema hash."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"operation:GetContinents"),": the query operation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type:Query"),": the query root type."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type:Continent"),": the type (or types) returned by the query."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"field:Query:continents"),": the root field used."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"field:Continent:name"),": the Continent field used."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"field:Continent:code"),": the Continent field used.")),(0,r.kt)("h2",{id:"nested-types"},"Nested Types"),(0,r.kt)("p",null,"Similarly, if we extend our original query and ask for additional information available in nested types,\nGBox would add tags for those types as well. Asking for more information about the countries, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'query GetContinentCountries {\n  continents(filter: {code: {eq: "AN"}}) {\n    name\n    code\n    countries {\n      name\n    }\n  }\n}\n')),(0,r.kt)("p",null,"would return response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "continents": [\n      {\n        "name": "Antarctica",\n        "code": "AN",\n        "countries": [\n          {\n            "name": "Antarctica"\n          },\n          {\n            "name": "Bouvet Island"\n          },\n          {\n            "name": "South Georgia and the South Sandwich Islands"\n          },\n          {\n            "name": "Heard Island and McDonald Islands"\n          },\n          {\n            "name": "French Southern Territories"\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"GBox tagged response above with the following tags:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"schema:xxxx"),(0,r.kt)("li",{parentName:"ul"},"operation:GetContinents"),(0,r.kt)("li",{parentName:"ul"},"type:Query"),(0,r.kt)("li",{parentName:"ul"},"type:Continent"),(0,r.kt)("li",{parentName:"ul"},"type:Country"),(0,r.kt)("li",{parentName:"ul"},"field:Query:continents"),(0,r.kt)("li",{parentName:"ul"},"field:Continent:name"),(0,r.kt)("li",{parentName:"ul"},"field:Continent:code"),(0,r.kt)("li",{parentName:"ul"},"field:Continent:countries"),(0,r.kt)("li",{parentName:"ul"},"field:Country:name")),(0,r.kt)("h2",{id:"key-fields"},"Key Fields"),(0,r.kt)("p",null,"If you have additional key fields defined for your types, GBox tags documents with tags referencing those additional key fields as well."),(0,r.kt)("p",null,"For example, if field ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Continent")," type above that uniquely identifies a single continent, you could add this field to your list of key fields. Any query that fetches an entity of type Continent and also requests the code key field is then also tagged with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"schema:xxxx"),(0,r.kt)("li",{parentName:"ul"},"operation:GetContinents"),(0,r.kt)("li",{parentName:"ul"},"type:Query"),(0,r.kt)("li",{parentName:"ul"},"type:Continent"),(0,r.kt)("li",{parentName:"ul"},"field:Query:continents"),(0,r.kt)("li",{parentName:"ul"},"field:Continent:name"),(0,r.kt)("li",{parentName:"ul"},"field:Continent:code"),(0,r.kt)("li",{parentName:"ul"},"key:Continent:code:AN")),(0,r.kt)("p",null,"By default, GBox treat ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," field on your types as key field and tags responses with those.\nYou can however configure this according to your requirements."),(0,r.kt)("h2",{id:"debug-headers"},"Debug headers"),(0,r.kt)("p",null,"If you want to see how many tags were tagged on query results, set ",(0,r.kt)("inlineCode",{parentName:"p"},"GBOX_CACHING_DEBUG_HEADERS")," env value to ",(0,r.kt)("inlineCode",{parentName:"p"},'"true"'),"\nyou will see information about tags of query result in response headers."))}g.isMDXComponent=!0}}]);