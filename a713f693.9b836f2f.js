(window.webpackJsonp=window.webpackJsonp||[]).push([[659],{1070:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=l(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=n,b=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return t?o.a.createElement(b,c(c({ref:r},u),{},{components:t})):o.a.createElement(b,c({ref:r},u))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1071:function(e,r,t){"use strict";(function(e){var n=this&&this.__createBinding||(Object.create?function(e,r,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,n){void 0===n&&(n=t),e[n]=r[t]}),o=this&&this.__setModuleDefault||(Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(r,e,t);return o(r,e),r};Object.defineProperty(r,"__esModule",{value:!0}),r.OssOnly=r.FbInternalOnly=r.isInternal=r.validateFbContentArgs=r.fbInternalOnly=r.fbContent=r.bloks=void 0,r.bloks=a(t(1074));const i=["internal","external"];let c;try{c=t(1072).usePluginData}catch(p){c=null}function s(e){return l(e),d()?"internal"in e?u(e.internal):[]:"external"in e?u(e.external):[]}function u(e){return"function"==typeof e?e():e}function l(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${i}. Instead got ${e}`);if(!Object.keys(e).find((e=>i.find((r=>r===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${i}`);const r=Object.keys(e).filter((e=>!i.find((r=>r===e))));if(r.length>0)throw new Error(`Unexpected keys ${r} found in fbContent() args. Accepted keys: ${i}`)}function d(){return e.env.FB_INTERNAL||c&&c("internaldocs-fb").FB_INTERNAL}r.fbContent=s,r.fbInternalOnly=function(e){return s({internal:e})},r.validateFbContentArgs=l,r.isInternal=d,r.FbInternalOnly=function(e){return d()?e.children:null},r.OssOnly=function(e){return d()?null:e.children}}).call(this,t(1073))},1072:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return o})),t.d(r,"useAllPluginInstancesData",(function(){return a})),t.d(r,"usePluginData",(function(){return i}));var n=t(22);function o(){var e=Object(n.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function a(e){var r=o()[e];if(!r)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return r}function i(e,r){void 0===r&&(r="default");var t=a(e)[r];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+r);return t}},1073:function(e,r){var t,n,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var s,u=[],l=!1,d=-1;function p(){l&&s&&(l=!1,s.length?u=s.concat(u):d=-1,u.length&&f())}function f(){if(!l){var e=c(p);l=!0;for(var r=u.length;r;){for(s=u,u=[];++d<r;)s&&s[d].run();d=-1,r=u.length}s=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(r){try{return n.call(null,e)}catch(r){return n.call(this,e)}}}(e)}}function b(e,r){this.fun=e,this.array=r}function h(){}o.nextTick=function(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];u.push(new b(e,r)),1!==u.length||l||c(f)},b.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},1074:function(e,r,t){"use strict";var n=this&&this.__awaiter||function(e,r,t,n){return new(t||(t=Promise))((function(o,a){function i(e){try{s(n.next(e))}catch(r){a(r)}}function c(e){try{s(n.throw(e))}catch(r){a(r)}}function s(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,c)}s((n=n.apply(e,r||[])).next())}))};Object.defineProperty(r,"__esModule",{value:!0}),r.getSpecInfo=void 0;const o=t(1075);r.getSpecInfo=function(e){return n(this,void 0,void 0,(function*(){return yield o.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},1075:function(e,r,t){"use strict";var n=this&&this.__awaiter||function(e,r,t,n){return new(t||(t=Promise))((function(o,a){function i(e){try{s(n.next(e))}catch(r){a(r)}}function c(e){try{s(n.throw(e))}catch(r){a(r)}}function s(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,c)}s((n=n.apply(e,r||[])).next())}))};Object.defineProperty(r,"__esModule",{value:!0}),r.call=void 0;let o=!1,a=0;const i={};r.call=function(e){return n(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));o||(o=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const r=e.data.id;r in i||console.error(`Recieved response for id: ${r} with no matching receiver`),"response"in e.data?i[r].resolve(e.data.response):i[r].reject(new Error(e.data.error)),delete i[r]})));const r=a++,t=new Promise(((e,t)=>{i[r]={resolve:e,reject:t}})),n={event:"static-docs-bridge-call",id:r,module:e.module,api:e.api,args:e.args},c="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(n,c),t}))}},1076:function(e,r,t){"use strict";t(60);var n=t(1071),o=t(0);var a=function(){var e=o.useState(!1),r=e[0],t=e[1],n=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return r?o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),"Thank you for letting us know!"):o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},i=function(){return null};r.a=function(){return Object(n.fbContent)({internal:o.createElement(i,null),external:o.createElement(a,null)})}},735:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return u})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return f}));var n,o=t(3),a=t(7),i=(t(0),t(1070)),c=t(1076),s=(t(1071),{id:"error-states",title:"Error States with ErrorBoundaries",slug:"/guided-tour/rendering/error-states/"}),u={unversionedId:"guided-tour/rendering/error-states",id:"guided-tour/rendering/error-states",isDocsHomePage:!1,title:"Error States with ErrorBoundaries",description:"Error States with Error Boundaries",source:"@site/docs/guided-tour/rendering/error-states.md",slug:"/guided-tour/rendering/error-states/",permalink:"/docs/next/guided-tour/rendering/error-states/",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/docs/guided-tour/rendering/error-states.md",version:"current",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1614815387,sidebar:"docs",previous:{title:"Loading States with Suspense",permalink:"/docs/next/guided-tour/rendering/loading-states/"},next:{title:"Environment",permalink:"/docs/next/guided-tour/rendering/environment/"}},l=[{value:"Error States with Error Boundaries",id:"error-states-with-error-boundaries",children:[{value:"Retrying after an Error",id:"retrying-after-an-error",children:[]},{value:"Accessing errors in GraphQL Responses",id:"accessing-errors-in-graphql-responses",children:[]}]}],d=(n="FbErrorBoundary",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),p={toc:l};function f(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)(d,{mdxType:"FbErrorBoundary"}),Object(i.b)("h2",{id:"error-states-with-error-boundaries"},"Error States with Error Boundaries"),Object(i.b)("p",null,"As you may have noticed, we mentioned that using ",Object(i.b)("inlineCode",{parentName:"p"},"usePreloadedQuery")," will render data from a query that was (or is) being fetched from the server, but we didn't elaborate on how to render UI to show an error if an error occurred during fetch. We will cover that in this section."),Object(i.b)("p",null,"We can use ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactjs.org/docs/error-boundaries.html"}),"Error Boundary")," components to catch errors that occur during render (due to a network error, or any kind of error), and render an alternative error UI when that occurs. The way it works is similar to how ",Object(i.b)("inlineCode",{parentName:"p"},"Suspense")," works, by wrapping a component tree in an error boundary, we can specify how we want to react when an error occurs, for example by rendering a fallback UI."),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactjs.org/docs/error-boundaries.html"}),"Error boundaries")," are simply components that implement the static ",Object(i.b)("inlineCode",{parentName:"p"},"getDerivedStateFromError")," method:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const React = require('React');\n\ntype State = {error: ?Error};\n\nclass ErrorBoundary extends React.Component<Props, State> {\n  static getDerivedStateFromError(error): State {\n    // Set some state derived from the caught error\n    return {error: error};\n  }\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"/**\n * App.react.js\n */\n\nconst ErrorBoundary = require('ErrorBoundary');\nconst React = require('React');\n\nconst MainContent = require('./MainContent.react');\nconst SecondaryContent = require('./SecondaryContent.react');\n\nfunction App() {\n  return (\n    // Render an ErrorSection if an error occurs within\n    // MainContent or Secondary Content\n    <ErrorBoundary fallback={error => <ErrorUI error={error} />}>\n      <MainContent />\n      <SecondaryContent />\n    </ErrorBoundary>\n  );\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We can use the Error Boundary to wrap subtrees and show a different UI when an error occurs within that subtree. When an error occurs, the specified ",Object(i.b)("inlineCode",{parentName:"li"},"fallback")," will be rendered instead of the content inside the boundary."),Object(i.b)("li",{parentName:"ul"},"Note that we can also control the granularity at which we render error UIs, by wrapping components at different levels with error boundaries. In this example, if any error occurs within ",Object(i.b)("inlineCode",{parentName:"li"},"MainContent")," or ",Object(i.b)("inlineCode",{parentName:"li"},"SecondaryContent"),", we will render an ",Object(i.b)("inlineCode",{parentName:"li"},"ErrorSection")," in place of the entire app content.")),Object(i.b)("h3",{id:"retrying-after-an-error"},"Retrying after an Error"),Object(i.b)("p",null,"In order to retry fetching a query after an error has occurred, we can attempt to re-mount the query component that produced an error:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"/**\n * ErrorBoundaryWithRetry.react.js\n */\n\nconst React = require('React');\n\ntype State = {error: ?Error};\n\n// Sample ErrorBoundary that supports retrying to render the content\n// that errored\nclass ErrorBoundaryWithRetry extends React.Component<Props, State> {\n  state = {error: null};\n\n  static getDerivedStateFromError(error): State {\n    return {error: error};\n  }\n\n  _retry = () => {\n    this.setState({error: null});\n  }\n\n  render() {\n    const {children, fallback} = this.props;\n    const {error} = this.state;\n    if (error) {\n      if (typeof fallback === 'function') {\n        return fallback(error, this._retry);\n      }\n      return fallback;\n    }\n    return children;\n  }\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"/**\n * App.react.js\n */\n\nconst ErrorBoundaryWithRetry = require('ErrorBoundaryWithRetry');\nconst React = require('React');\n\nconst MainContent = require('./MainContent.react');\n\nfunction App() {\n  return (\n    <ErrorBoundaryWithRetry\n      fallback={(error, retry) =>\n        <>\n          <ErrorUI error={error} />\n          {/* Render a button to retry; this will attempt to re-render the\n            content inside the boundary, i.e. the query component */}\n          <Button onPress={retry}>Retry</Button>\n        </>\n      }>\n      <MainContent />\n    </ErrorBoundaryWithRetry>\n  );\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The sample Error Boundary in this example code will provide a ",Object(i.b)("inlineCode",{parentName:"li"},"retry")," function to re-attempt to render the content that originally produced the error. By doing so, we will attempt to re-render our query component (that uses ",Object(i.b)("inlineCode",{parentName:"li"},"usePreloadedQuery"),"), and consequently attempt to fetch the query again.")),Object(i.b)("h3",{id:"accessing-errors-in-graphql-responses"},"Accessing errors in GraphQL Responses"),Object(i.b)("p",null,"By default, internally at fb, Relay will ",Object(i.b)("em",{parentName:"p"},"only")," surface errors to React that are returned in the top-level ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://graphql.org/learn/validation/"}),Object(i.b)("inlineCode",{parentName:"a"},"errors")," field")," if they are ether:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"of ",Object(i.b)("inlineCode",{parentName:"li"},"CRITICAL")," severity,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"or")," if the top-level ",Object(i.b)("inlineCode",{parentName:"li"},"data")," field wasn't returned in the response.")),Object(i.b)("p",null,"If you wish to access error information in your application to display user friendly messages, the recommended approach is to model and expose the error information as part of your GraphQL schema."),Object(i.b)("p",null,"For example, you could expose a field in your schema that returns either the expected result, or an Error object if an error occurred while resolving that field (instead of returning null):"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"type Error {\n  # User friendly message\n  message: String!\n}\n\ntype Foo {\n  bar: Result | Error\n}\n")),Object(i.b)(c.a,{mdxType:"DocsRating"}))}f.isMDXComponent=!0}}]);