(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1070:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),u=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),b=u(r),p=n,y=b["".concat(s,".").concat(p)]||b[p]||d[p]||i;return r?a.a.createElement(y,c(c({ref:t},o),{},{components:r})):a.a.createElement(y,c({ref:t},o))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var o=2;o<i;o++)s[o]=r[o];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},76:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),i=(r(0),r(1070)),s={id:"classic-interfaces-relay-query-request",title:"RelayQueryRequest",original_id:"classic-interfaces-relay-query-request"},c={unversionedId:"classic-interfaces-relay-query-request",id:"version-classic/classic-interfaces-relay-query-request",isDocsHomePage:!1,title:"RelayQueryRequest",description:"RelayQueryRequest encapsulates a query that Relay needs to send to the server. They are made available to network layers via the sendQueries method.",source:"@site/versioned_docs/version-classic/Classic-Interfaces-QueryRequest.md",slug:"/classic-interfaces-relay-query-request",permalink:"/docs/classic/classic-interfaces-relay-query-request",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/versioned_docs/version-classic/Classic-Interfaces-QueryRequest.md",version:"classic",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1614815387,sidebar:"version-classic/docs",previous:{title:"RelayNetworkLayer",permalink:"/docs/classic/classic-interfaces-relay-network-layer"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Methods",id:"methods",children:[{value:"getQueryString",id:"getquerystring",children:[]},{value:"getVariables",id:"getvariables",children:[]},{value:"getID",id:"getid",children:[]},{value:"getDebugName",id:"getdebugname",children:[]}]}],o={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"RelayQueryRequest")," encapsulates a query that Relay needs to send to the server. They are made available to network layers via the ",Object(i.b)("inlineCode",{parentName:"p"},"sendQueries")," method."),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Methods")),Object(i.b)("ul",{className:"apiIndex"},Object(i.b)("li",null,Object(i.b)("a",{href:"#getquerystring"},Object(i.b)("pre",null,"getQueryString()"))),Object(i.b)("li",null,Object(i.b)("a",{href:"#getvariables"},Object(i.b)("pre",null,"getVariables()"))),Object(i.b)("li",null,Object(i.b)("a",{href:"#getid"},Object(i.b)("pre",null,"getID()"))),Object(i.b)("li",null,Object(i.b)("a",{href:"#getdebugname"},Object(i.b)("pre",null,"getDebugName()")))),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"getquerystring"},"getQueryString"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\ngetQueryString(): string\n\n")),Object(i.b)("p",null,"Gets a string representation of the GraphQL query."),Object(i.b)("h3",{id:"getvariables"},"getVariables"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\ngetVariables(): {[name: string]: mixed}\n\n")),Object(i.b)("p",null,"Gets the variables used by the query. These variables should be serialized and sent in the GraphQL request."),Object(i.b)("h3",{id:"getid"},"getID"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\ngetID(): string\n\n")),Object(i.b)("p",null,"Gets a unique identifier for this query. These identifiers are useful for assigning response payloads to their corresponding queries when sent in a single GraphQL request."),Object(i.b)("h3",{id:"getdebugname"},"getDebugName"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"\ngetDebugName(): string\n\n")),Object(i.b)("p",null,"Gets a string name used to refer to this request for printing debug output."))}u.isMDXComponent=!0}}]);