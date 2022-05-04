"use strict";(self.webpackChunkgbox_proxy_github_io=self.webpackChunkgbox_proxy_github_io||[]).push([[998],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(a),m=i,g=s["".concat(l,".").concat(m)]||s[m]||d[m]||r;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},3875:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],p={id:"caching-admin-api",title:"Admin API",sidebar_label:"Admin API",image:"https://gbox-proxy.github.io/img/gbox-full.png",slug:"/caching/admin-api"},l=void 0,u={unversionedId:"caching/caching-admin-api",id:"caching/caching-admin-api",title:"Admin API",description:"The GBox provides a custom admin GraphQL API (a.k.a.Purging cache API), allows you to invalidate cached data.",source:"@site/docs/04-caching/05-admin-api.mdx",sourceDirName:"04-caching",slug:"/caching/admin-api",permalink:"/caching/admin-api",editUrl:"https://github.com/gbox-proxy/gbox-proxy.github.io/edit/main/docs/04-caching/05-admin-api.mdx",tags:[],version:"current",lastUpdatedBy:"Minh Vuong",lastUpdatedAt:1651650491,formattedLastUpdatedAt:"5/4/2022",sidebarPosition:5,frontMatter:{id:"caching-admin-api",title:"Admin API",sidebar_label:"Admin API",image:"https://gbox-proxy.github.io/img/gbox-full.png",slug:"/caching/admin-api"},sidebar:"main",previous:{title:"Type Keys",permalink:"/caching/type-keys"}},c={},d=[{value:"Admin Endpoints",id:"admin-endpoints",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Purging cached data",id:"purging-cached-data",level:2},{value:"Purge via an operation name",id:"purge-via-an-operation-name",level:3},{value:"Purge via specific type",id:"purge-via-specific-type",level:3},{value:"Purge via query root field",id:"purge-via-query-root-field",level:3},{value:"Purge via type key",id:"purge-via-type-key",level:3}],s={toc:d};function m(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The GBox provides a custom admin GraphQL API (a.k.a.Purging cache API), allows you to invalidate cached data."),(0,r.kt)("h2",{id:"admin-endpoints"},"Admin Endpoints"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GraphQL playground available at path ",(0,r.kt)("inlineCode",{parentName:"li"},"/admin")),(0,r.kt)("li",{parentName:"ul"},"GraphQL API available at path ",(0,r.kt)("inlineCode",{parentName:"li"},"/admin/graphql"))),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"Everyone can access the admin GraphQL API, but you can enable basic auth for it. To enable basic auth you must set value of ",(0,r.kt)("inlineCode",{parentName:"p"},"GBOX_ENABLED_ADMIN_AUTH")," environment variable to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"Default basic auth username's ",(0,r.kt)("inlineCode",{parentName:"p"},"gbox")," and password's ",(0,r.kt)("inlineCode",{parentName:"p"},"gbox")," too, you can change them via ",(0,r.kt)("inlineCode",{parentName:"p"},"GBOX_ADMIN_USERNAME")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"GBOX_ADMIN_PASSWORD")," envs, the password must be base64 encrypted with ",(0,r.kt)("inlineCode",{parentName:"p"},"bcrypt")," algorithm."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://caddyserver.com/docs/command-line#caddy-hash-password"},"gbox hash-password")," cmd to generate the admin password."))),(0,r.kt)("h2",{id:"purging-cached-data"},"Purging cached data"),(0,r.kt)("p",null,"Now you could try to use admin GraphQL api to purge cached data."),(0,r.kt)("h3",{id:"purge-via-an-operation-name"},"Purge via an operation name"),(0,r.kt)("p",null,"With this mutation, you can purge all cached results of the query with the operation name you provide."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Mutation {\n    purgeOperation(name: String!): Boolean!\n}\n")),(0,r.kt)("p",null,"For example, to invalidate all results of queries named ",(0,r.kt)("inlineCode",{parentName:"p"},"getUsers"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n    purgeOperation(name: "getUsers")\n}\n')),(0,r.kt)("h3",{id:"purge-via-specific-type"},"Purge via specific type"),(0,r.kt)("p",null,"With this mutation, you can purge all cached results contain fields have specific type given."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Mutation {\n    purgeType(type: String!): Boolean!\n}\n")),(0,r.kt)("p",null,"For example, to invalidate all results contain fields have ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n    purgeType(type: "User")\n}\n')),(0,r.kt)("h3",{id:"purge-via-query-root-field"},"Purge via query root field"),(0,r.kt)("p",null,"With this mutation, you can purge all cached results contain query root field given."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Mutation {\n    purgeQueryRootField(field: String!): Boolean!\n}\n")),(0,r.kt)("p",null,"For example, to invalidate all results contain query root field ",(0,r.kt)("inlineCode",{parentName:"p"},"users"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n    purgeQueryRootField(field: "users")\n}\n')),(0,r.kt)("h3",{id:"purge-via-type-key"},"Purge via type key"),(0,r.kt)("p",null,"If you want to purge an arbitrary type, limited by specific type key you can pass in as an argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Mutation {\n    purgeTypeKey(\n        type: String!\n        field: String!\n        key: String!\n    ): Boolean\n}\n")),(0,r.kt)("p",null,"For example to either purge all cached query results have ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," type identified by the key field ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," with value ",(0,r.kt)("inlineCode",{parentName:"p"},"email@example.org")," run the following mutations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  purgeTypeKey(type: "User", field: "email", key: "email@example.org")\n}\n')))}m.isMDXComponent=!0}}]);