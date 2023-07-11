"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[2432],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),k=n,f=u["".concat(l,".").concat(k)]||u[k]||b[k]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=k;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},55468:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={title:"Trace transactions",sidebar_position:2,description:"How to trace transactions",tags:["public networks","private networks"]},i="Trace transactions",c={unversionedId:"public-networks/how-to/troubleshoot/trace-transactions",id:"version-23.4.1/public-networks/how-to/troubleshoot/trace-transactions",title:"Trace transactions",description:"How to trace transactions",source:"@site/versioned_docs/version-23.4.1/public-networks/how-to/troubleshoot/trace-transactions.md",sourceDirName:"public-networks/how-to/troubleshoot",slug:"/public-networks/how-to/troubleshoot/trace-transactions",permalink:"/stable/public-networks/how-to/troubleshoot/trace-transactions",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/public-networks/how-to/troubleshoot/trace-transactions.md",tags:[{label:"public networks",permalink:"/stable/tags/public-networks"},{label:"private networks",permalink:"/stable/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1689101827,formattedLastUpdatedAt:"Jul 11, 2023",sidebarPosition:2,frontMatter:{title:"Trace transactions",sidebar_position:2,description:"How to trace transactions",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Use EVM tool",permalink:"/stable/public-networks/how-to/troubleshoot/evm-tool"},next:{title:"Troubleshoot performance",permalink:"/stable/public-networks/how-to/troubleshoot/performance"}},l={},s=[{value:"Ad-hoc tracing APIs",id:"ad-hoc-tracing-apis",level:2},{value:"Transaction-trace filtering APIs",id:"transaction-trace-filtering-apis",level:2}],p={toc:s},u="wrapper";function b(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"trace-transactions"},"Trace transactions"),(0,n.kt)("p",null,"To get detailed information about transaction processing, use the ",(0,n.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/api/#trace-methods"},(0,n.kt)("inlineCode",{parentName:"a"},"TRACE")," API"),". Enable the ",(0,n.kt)("inlineCode",{parentName:"p"},"TRACE")," API using the ",(0,n.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/cli/options#rpc-http-api"},(0,n.kt)("inlineCode",{parentName:"a"},"--rpc-http-api"))," or ",(0,n.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/cli/options#rpc-ws-api"},(0,n.kt)("inlineCode",{parentName:"a"},"--rpc-ws-api"))," command line options."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"TRACE")," API has two sets of trace calls, ",(0,n.kt)("a",{parentName:"p",href:"#ad-hoc-tracing-apis"},"ad-hoc tracing APIs")," and ",(0,n.kt)("a",{parentName:"p",href:"#transaction-trace-filtering-apis"},"transaction-trace filtering APIs"),"."),(0,n.kt)("h2",{id:"ad-hoc-tracing-apis"},"Ad-hoc tracing APIs"),(0,n.kt)("p",null,"These APIs allow you to use the ",(0,n.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/trace-types"},(0,n.kt)("inlineCode",{parentName:"a"},"trace"),", ",(0,n.kt)("inlineCode",{parentName:"a"},"vmTrace"),", or ",(0,n.kt)("inlineCode",{parentName:"a"},"stateDiff"))," diagnostic options when tracing calls or transactions."),(0,n.kt)("p",null,"To use the ad-hoc tracing APIs, the requested block or transaction must be within the number of ",(0,n.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/cli/options#pruning-blocks-retained"},"blocks retained")," with ",(0,n.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/cli/options#pruning-enabled"},"pruning enabled")," (by default, 1024)."),(0,n.kt)("p",null,"The ad-hoc tracing APIs are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/api/#trace_call"},(0,n.kt)("inlineCode",{parentName:"a"},"trace_call"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/api/#trace_callmany"},(0,n.kt)("inlineCode",{parentName:"a"},"trace_callMany"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/api/#trace_rawtransaction"},(0,n.kt)("inlineCode",{parentName:"a"},"trace_rawTransaction"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/api/#trace_replayblocktransactions"},(0,n.kt)("inlineCode",{parentName:"a"},"trace_replayBlockTransactions")))),(0,n.kt)("h2",{id:"transaction-trace-filtering-apis"},"Transaction-trace filtering APIs"),(0,n.kt)("p",null,"These APIs allow you to filter and search by specific information such as the block, address, or transaction. These APIs only use the ",(0,n.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/trace-types#trace"},(0,n.kt)("inlineCode",{parentName:"a"},"trace")," type"),"."),(0,n.kt)("p",null,"To use the transaction-trace filtering APIs, your node must be an archive node (that is, synchronized without pruning or fast sync) or the requested block or transaction must be within the number of ",(0,n.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/cli/options#pruning-blocks-retained"},"blocks retained")," with ",(0,n.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/cli/options#pruning-enabled"},"pruning enabled")," (by default, 1024)."),(0,n.kt)("p",null,"The transaction-trace filtering APIs are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/api/#trace_block"},(0,n.kt)("inlineCode",{parentName:"a"},"trace_block"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/api/#trace_filter"},(0,n.kt)("inlineCode",{parentName:"a"},"trace_filter"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/api/#trace_get"},(0,n.kt)("inlineCode",{parentName:"a"},"trace_get"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/stable/public-networks/reference/api/#trace_transaction"},(0,n.kt)("inlineCode",{parentName:"a"},"trace_transaction")))))}b.isMDXComponent=!0}}]);