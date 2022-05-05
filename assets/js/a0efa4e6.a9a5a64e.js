"use strict";(self.webpackChunkgbox_proxy_github_io=self.webpackChunkgbox_proxy_github_io||[]).push([[279],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),y=p(n),d=i,g=y["".concat(s,".").concat(d)]||y[d]||u[d]||o;return n?r.createElement(g,a(a({ref:t},l),{},{components:n})):r.createElement(g,a({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9152:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={id:"caching-concepts-type-keys",title:"Type keys",sidebar_label:"Type keys",image:"https://gbox-proxy.github.io/img/gbox-full.png",slug:"/caching/concepts/type-keys"},s=void 0,p={unversionedId:"caching/concepts/caching-concepts-type-keys",id:"caching/concepts/caching-concepts-type-keys",title:"Type keys",description:"To know which fields identify individual resources in your schema the GBox needs to know which field holds the unique identifier for a certain node type.",source:"@site/docs/04-caching/01-concepts/03-type-keys.mdx",sourceDirName:"04-caching/01-concepts",slug:"/caching/concepts/type-keys",permalink:"/caching/concepts/type-keys",editUrl:"https://github.com/gbox-proxy/gbox-proxy.github.io/edit/main/docs/04-caching/01-concepts/03-type-keys.mdx",tags:[],version:"current",lastUpdatedBy:"Minh Vuong",lastUpdatedAt:1651749311,formattedLastUpdatedAt:"5/5/2022",sidebarPosition:3,frontMatter:{id:"caching-concepts-type-keys",title:"Type keys",sidebar_label:"Type keys",image:"https://gbox-proxy.github.io/img/gbox-full.png",slug:"/caching/concepts/type-keys"},sidebar:"main",previous:{title:"Varies",permalink:"/caching/concepts/varies"},next:{title:"Tagging",permalink:"/caching/tagging"}},l={},u=[{value:"Declaring type keys",id:"declaring-type-keys",level:2}],y={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To know which fields identify individual resources in your schema the GBox needs to know which field holds the unique identifier for a certain node type.\nThis is mainly used for invalidate changed results from the cache store, either via automatic cache invalidation or the admin API."),(0,o.kt)("p",null,"By default, the GBox looks for ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," field on your types. However, sometimes you have other unique fields (like e.g. User.email)."),(0,o.kt)("h2",{id:"declaring-type-keys"},"Declaring type keys"),(0,o.kt)("p",null,"The GBox use ",(0,o.kt)("a",{parentName:"p",href:"https://caddyserver.com/docs/caddyfile/concepts#structure"},"Caddyfile syntax")," to declaring type keys via ",(0,o.kt)("inlineCode",{parentName:"p"},"GBOX_CACHING_TYPE_KEYS")," environment variable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"GBOX_CACHING_TYPE_KEYS: |\n  User email # Directive will be use as a type and next args are field keys.\n")),(0,o.kt)("p",null,"Now you can invalidate cached query results via admin purging api:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n    purgeTypeKey(type: "User", field: "email", key: "cached email")\n}\n')))}d.isMDXComponent=!0}}]);