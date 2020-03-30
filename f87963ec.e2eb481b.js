(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{174:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(1),o=r(10),a=(r(0),r(177)),i=r(179),c={id:"roadmap",title:"Roadmap"},u={id:"roadmap",title:"Roadmap",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/../docs/roadmap.mdx",permalink:"/docs/roadmap",editUrl:"https://github.com/finos/open-developer-platform/edit/master/website/../docs/roadmap.mdx",sidebar:"mainSidebar",previous:{title:"Project Team",permalink:"/docs/team"}},p=[],s={rightToc:p};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This is the ODP Roadmap for 2020."),Object(a.b)("img",{alt:"odp-roadmap-2020",src:Object(i.a)("img/odp-roadmap-2020.png")}),Object(a.b)("p",null,"You can check progress on ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/finos/open-developer-platform/milestones"}),"github.com/finos/open-developer-platform/milestones")))}l.isMDXComponent=!0},177:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},l=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(r),m=n,d=l["".concat(i,".").concat(m)]||l[m]||f[m]||a;return r?o.a.createElement(d,c({ref:t},p,{components:r})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},178:function(e,t,r){"use strict";var n=r(0),o=r(56);t.a=function(){return Object(n.useContext)(o.a)}},179:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r(180);var n=r(178);function o(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},180:function(e,t,r){"use strict";var n=r(8),o=r(20),a=r(181),i="".startsWith;n(n.P+n.F*r(182)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),r=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return i?i.call(t,n,r):t.slice(r,r+n.length)===n}})},181:function(e,t,r){var n=r(76),o=r(28);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(e))}},182:function(e,t,r){var n=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(o){}}return!0}}}]);