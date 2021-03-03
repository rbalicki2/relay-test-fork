(window.webpackJsonp=window.webpackJsonp||[]).push([[814],{1070:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),s=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return t?a.a.createElement(b,c(c({ref:n},d),{},{components:t})):a.a.createElement(b,c({ref:n},d))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=t[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},888:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(1070)),i={id:"relay-environment",title:"Relay Environment",original_id:"relay-environment"},c={unversionedId:"relay-environment",id:"version-v9.1.0/relay-environment",isDocsHomePage:!1,title:"Relay Environment",description:'The Relay "Environment" bundles together the configuration, cache storage, and network-handling that Relay needs in order to operate.',source:"@site/versioned_docs/version-v9.1.0/Modern-RelayEnvironment.md",slug:"/relay-environment",permalink:"/docs/v9.1.0/relay-environment",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/versioned_docs/version-v9.1.0/Modern-RelayEnvironment.md",version:"v9.1.0",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1614815387,sidebar:"version-v9.1.0/docs",previous:{title:"GraphQL in Relay",permalink:"/docs/v9.1.0/graphql-in-relay"},next:{title:"Network Layer",permalink:"/docs/v9.1.0/network-layer"}},l=[{value:"A simple example",id:"a-simple-example",children:[]},{value:"Adding a <code>handlerProvider</code>",id:"adding-a-handlerprovider",children:[]}],d={toc:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,'The Relay "Environment" bundles together the configuration, cache storage, and network-handling that Relay needs in order to operate.'),Object(o.b)("p",null,"Most applications will create a single Environment instance and use it throughout. In specific situations, however, you may want to create multiple environments for different purposes. For example, you may create a new environment instance whenever the user logs in or out in order to prevent data for different users being cached together. Similarly, a server rendered application may create a new environment instance per request, so that each request gets its own cache and user data does not overlap. Alternatively, you might have multiple products or features within a larger application, and you want each one to have product-specific network-handling or caching."),Object(o.b)("h2",{id:"a-simple-example"},"A simple example"),Object(o.b)("p",null,"To create an environment instance in Relay Modern, use the ",Object(o.b)("inlineCode",{parentName:"p"},"RelayModernEnvironment")," class:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\nconst {\n  Environment,\n  Network,\n  RecordSource,\n  Store,\n} = require('relay-runtime');\n\nconst source = new RecordSource();\nconst store = new Store(source);\nconst network = Network.create(/*...*/); // see note below\nconst handlerProvider = null;\n\nconst environment = new Environment({\n  handlerProvider, // Can omit.\n  network,\n  store,\n});\n\n")),Object(o.b)("p",null,"For more details on creating a Network, see the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./network-layer"}),"NetworkLayer guide"),"."),Object(o.b)("p",null,"Once you have an environment, you can pass it in to your ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./query-renderer"}),Object(o.b)("inlineCode",{parentName:"a"},"QueryRenderer"))," instance, or into mutations via the ",Object(o.b)("inlineCode",{parentName:"p"},"commitUpdate"),' function (see "',Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./mutations"}),"Mutations"),'").'),Object(o.b)("h2",{id:"adding-a-handlerprovider"},"Adding a ",Object(o.b)("inlineCode",{parentName:"h2"},"handlerProvider")),Object(o.b)("p",null,"The example above did not configure a ",Object(o.b)("inlineCode",{parentName:"p"},"handlerProvider"),", which means that a default one will be provided. Relay Modern comes with a built-in handler that augment the core with special functionality for handling connections (which is not a standard GraphQL feature, but a set of pagination conventions used at Facebook, specified in detail in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://relay.dev/graphql/connections.htm"}),"Relay Cursor Connections Specification"),", and well-supported by Relay itself)."),Object(o.b)("p",null,"If you wish to provide your own ",Object(o.b)("inlineCode",{parentName:"p"},"handlerProvider"),", you can do so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\nconst {\n  ConnectionHandler,\n} = require('relay-runtime');\n\nfunction handlerProvider(handle) {\n  switch (handle) {\n    // Augment (or remove from) this list:\n    case 'connection': return ConnectionHandler;\n  }\n  throw new Error(\n    `handlerProvider: No handler provided for ${handle}`\n  );\n}\n\n")))}s.isMDXComponent=!0}}]);