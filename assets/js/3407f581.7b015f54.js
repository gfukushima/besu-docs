"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[7905],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,k=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(k,i(i({ref:t},l),{},{components:n})):r.createElement(k,i({ref:t},l))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2593:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"Concepts",description:"private networks concepts overview",sidebar_position:3,tags:["private networks"]},i="Concepts",s={unversionedId:"private-networks/concepts/index",id:"version-23.7.1/private-networks/concepts/index",title:"Concepts",description:"private networks concepts overview",source:"@site/versioned_docs/version-23.7.1/private-networks/concepts/index.md",sourceDirName:"private-networks/concepts",slug:"/private-networks/concepts/",permalink:"/23.7.1/private-networks/concepts/",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.1/private-networks/concepts/index.md",tags:[{label:"private networks",permalink:"/23.7.1/tags/private-networks"}],version:"23.7.1",lastUpdatedAt:1701300211,formattedLastUpdatedAt:"Nov 29, 2023",sidebarPosition:3,frontMatter:{title:"Concepts",description:"private networks concepts overview",sidebar_position:3,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Upgrade",permalink:"/23.7.1/private-networks/how-to/upgrade"},next:{title:"Proof of authority consensus",permalink:"/23.7.1/private-networks/concepts/poa"}},p={},c=[],l={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"concepts"},"Concepts"),(0,o.kt)("p",null,"This section provides background information and context about private network features."),(0,o.kt)("p",null,"The following features are shared with ",(0,o.kt)("a",{parentName:"p",href:"/23.7.1/public-networks/"},"public networks")," and the content can be found in the public networks section:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Transactions:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/concepts/transactions/types"},"Transaction types")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/concepts/transactions/pool"},"Transaction pool")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/concepts/transactions/validation"},"Transaction validation")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/concepts/network-and-chain-id"},"Network ID and chain ID")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/concepts/events-and-logs"},"Events and logs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/concepts/genesis-file"},"Genesis file")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/concepts/node-keys"},"Node keys"))))}d.isMDXComponent=!0}}]);