(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{1069:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,h=p["".concat(a,".").concat(m)]||p[m]||d[m]||o;return r?i.a.createElement(h,c(c({ref:t},s),{},{components:r})):i.a.createElement(h,c({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},341:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(7),o=(r(0),r(1069)),a={id:"architecture-overview",title:"Architecture Overview",original_id:"architecture-overview"},c={unversionedId:"architecture-overview",id:"version-v1.7.0/architecture-overview",isDocsHomePage:!1,title:"Architecture Overview",description:'This document, together with Runtime Architecture and Compiler Architecture, describes the high-level architecture of Relay "Modern". The intended audience includes developers interested in contributing to Relay, developers hoping to utilize the building blocks of Relay to create higher-level APIs, and anyone interested in understanding more about Relay internals. For developers wanting to learn more about using Relay to build products, the other sections might be more helpful.',source:"@site/versioned_docs/version-v1.7.0/PrinciplesAndArchitecture-Overview.md",slug:"/architecture-overview",permalink:"/docs/v1.7.0/architecture-overview",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/versioned_docs/version-v1.7.0/PrinciplesAndArchitecture-Overview.md",version:"v1.7.0",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1614277257,sidebar:"version-v1.7.0/docs",previous:{title:"Thinking In Relay",permalink:"/docs/v1.7.0/thinking-in-relay"},next:{title:"Compiler Architecture",permalink:"/docs/v1.7.0/compiler-architecture"}},l=[{value:"Core Modules",id:"core-modules",children:[]}],s={toc:l};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document, together with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"./runtime-architecture"}),"Runtime Architecture")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"./compiler-architecture"}),"Compiler Architecture"),', describes the high-level architecture of Relay "Modern". The intended audience includes developers interested in contributing to Relay, developers hoping to utilize the building blocks of Relay to create higher-level APIs, and anyone interested in understanding more about Relay internals. For developers wanting to learn more about ',Object(o.b)("em",{parentName:"p"},"using")," Relay to build products, the other sections might be more helpful."),Object(o.b)("h2",{id:"core-modules"},"Core Modules"),Object(o.b)("p",null,"Relay Modern is composed of three core modules:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Relay Compiler:")," A GraphQL to GraphQL optimizing ",Object(o.b)("em",{parentName:"li"},"compiler"),", providing general utilities for transforming and optimizing queries as well as generating build artifacts. A novel feature of the compiler is that it facilitates experimentation with new GraphQL features - in the form of custom directives - by making it easy to translate code using these directives into standard, spec-compliant GraphQL."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Relay Runtime:")," A full-featured, high-performance GraphQL ",Object(o.b)("em",{parentName:"li"},"runtime"),' that can be used to build higher-level client APIs. The runtime features a normalized object cache, optimized "write" and "read" operations, a generic abstraction for incrementally fetching field data (such as for pagination), garbage collection for removing unreferenced cache entries, optimistic mutations with arbitrary logic,  support for building subscriptions and live queries, and more.'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"React/Relay:")," A high-level ",Object(o.b)("em",{parentName:"li"},"product API")," that integrates the Relay Runtime with React. This is the primary public interface to Relay for most product developers, featuring APIs to fetch the data for a query or define data dependencies for reusable components (aka containers).")),Object(o.b)("p",null,"Note that these modules are ",Object(o.b)("em",{parentName:"p"},"loosely coupled"),'. For example, the compiler emits representations of queries in a well-defined format that the runtime consumes (the "Concrete" node interfaces in ',Object(o.b)("inlineCode",{parentName:"p"},"RelayConcreteNode"),"), such that the compiler implementation can be swapped out if desired. React/Relay relies only on the well-documented public interface of the runtime, such that the actual implementation can be swapped out (in fact, we've upgraded the classic Relay core to also implement this same API). We hope that this loose coupling will allow the community to explore new use-cases such as the development of specialized product APIs using the Relay runtime or integrations of the runtime with view libraries other than React."))}u.isMDXComponent=!0}}]);