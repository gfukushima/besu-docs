"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[25021],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>w});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),k=o,w=u["".concat(p,".").concat(k)]||u[k]||m[k]||i;return r?n.createElement(w,a(a({ref:t},c),{},{components:r})):n.createElement(w,a({ref:t},c))}));function w(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},76636:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={description:"Monitoring using metrics and logging",tags:["private networks"]},a="Monitoring",s={unversionedId:"private-networks/how-to/monitor/index",id:"version-23.7.2/private-networks/how-to/monitor/index",title:"Monitoring",description:"Monitoring using metrics and logging",source:"@site/versioned_docs/version-23.7.2/private-networks/how-to/monitor/index.md",sourceDirName:"private-networks/how-to/monitor",slug:"/private-networks/how-to/monitor/",permalink:"/23.7.2/private-networks/how-to/monitor/",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.2/private-networks/how-to/monitor/index.md",tags:[{label:"private networks",permalink:"/23.7.2/tags/private-networks"}],version:"23.7.2",lastUpdatedAt:1700018025,formattedLastUpdatedAt:"Nov 15, 2023",frontMatter:{description:"Monitoring using metrics and logging",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Include revert reason",permalink:"/23.7.2/private-networks/how-to/send-transactions/revert-reason"},next:{title:"Use Grafana Loki",permalink:"/23.7.2/private-networks/how-to/monitor/loki"}},p={},l=[],c={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monitoring"},"Monitoring"),(0,o.kt)("p",null,"Use monitoring to identify node and network issues. In private networks, you can ",(0,o.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/how-to/monitor/"},"configure metrics and logging")," as in public networks."),(0,o.kt)("p",null,"You can also use the following monitoring tools in private networks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.7.2/private-networks/how-to/monitor/loki"},"Loki")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.7.2/private-networks/how-to/monitor/elastic-stack"},"Elastic Stack")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.7.2/private-networks/how-to/monitor/quorum-hibernate"},"Quorum Hibernate")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.7.2/private-networks/how-to/monitor/splunk"},"Splunk")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.7.2/private-networks/how-to/monitor/opentelemetry"},"OpenTelemetry")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.7.2/private-networks/how-to/monitor/chainlens"},"Chainlens Explorer"))),(0,o.kt)("p",null,"For an overview of monitoring Hyperledger Besu, view ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=7BuutRe0I28&feature=youtu.be"},"this recording"),"."))}u.isMDXComponent=!0}}]);