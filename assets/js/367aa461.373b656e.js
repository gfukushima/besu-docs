"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[4144],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,d=u["".concat(l,".").concat(f)]||u[f]||v[f]||o;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},64996:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>v,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={title:"Alternative elliptic curves",description:"Using alternative elliptic curves in Besu",sidebar_position:8,tags:["private networks"]},a="Configure alternative elliptic curves",s={unversionedId:"private-networks/how-to/configure/curves",id:"version-23.4.1/private-networks/how-to/configure/curves",title:"Alternative elliptic curves",description:"Using alternative elliptic curves in Besu",source:"@site/versioned_docs/version-23.4.1/private-networks/how-to/configure/curves.md",sourceDirName:"private-networks/how-to/configure",slug:"/private-networks/how-to/configure/curves",permalink:"/stable/private-networks/how-to/configure/curves",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/how-to/configure/curves.md",tags:[{label:"private networks",permalink:"/stable/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1689101827,formattedLastUpdatedAt:"Jul 11, 2023",sidebarPosition:8,frontMatter:{title:"Alternative elliptic curves",description:"Using alternative elliptic curves in Besu",sidebar_position:8,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Block proposal permissioning",permalink:"/stable/private-networks/how-to/configure/block-proposal-permissioning"},next:{title:"Create and send transactions",permalink:"/stable/private-networks/how-to/send-transactions/"}},l={},c=[],p={toc:c},u="wrapper";function v(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configure-alternative-elliptic-curves"},"Configure alternative elliptic curves"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Configuring alternative elliptic curves is an early access feature.")),(0,i.kt)("p",null,"By default, Besu uses the Ethereum standard ",(0,i.kt)("inlineCode",{parentName:"p"},"secp256k1")," elliptic curve (EC). However, when running nodes in a private network, it is possible to configure an alternative elliptic curve."),(0,i.kt)("p",null,"The configuration for what elliptic curve Besu will use is done in the network configuration section of genesis file, using the ",(0,i.kt)("a",{parentName:"p",href:"/stable/public-networks/reference/genesis-items#Configuration_Items"},(0,i.kt)("inlineCode",{parentName:"a"},"ecCurve"))," key:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "genesis": {\n    "config": {\n      "ecCurve": "secp256k1",\n    [...]\n  },\n  [...]\n}\n')),(0,i.kt)("admonition",{title:"Important",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"All nodes in the network ",(0,i.kt)("strong",{parentName:"p"},"MUST")," use the same elliptic curve. Nodes with different EC configuration from the network won't be able to send messages to other nodes or verify transactions and blocks.")),(0,i.kt)("p",null,"Besu supports the following elliptic curves:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secp256k1")," (Ethereum default)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secp256r1"))))}v.isMDXComponent=!0}}]);