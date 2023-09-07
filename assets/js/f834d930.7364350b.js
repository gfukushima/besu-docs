"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[1462],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,v=u["".concat(c,".").concat(d)]||u[d]||m[d]||p;return r?n.createElement(v,o(o({ref:t},l),{},{components:r})):n.createElement(v,o({ref:t},l))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<p;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36954:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const p={title:"Use EEA-compliant privacy",description:"Hyperledger Besu JSON-RPC methods to use for EEA-compliant privacy",sidebar_position:1,tags:["private networks"]},o="Use EEA-compliant privacy",i={unversionedId:"private-networks/how-to/use-privacy/eea-compliant",id:"private-networks/how-to/use-privacy/eea-compliant",title:"Use EEA-compliant privacy",description:"Hyperledger Besu JSON-RPC methods to use for EEA-compliant privacy",source:"@site/docs/private-networks/how-to/use-privacy/eea-compliant.md",sourceDirName:"private-networks/how-to/use-privacy",slug:"/private-networks/how-to/use-privacy/eea-compliant",permalink:"/development/private-networks/how-to/use-privacy/eea-compliant",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/use-privacy/eea-compliant.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1694057512,formattedLastUpdatedAt:"Sep 7, 2023",sidebarPosition:1,frontMatter:{title:"Use EEA-compliant privacy",description:"Hyperledger Besu JSON-RPC methods to use for EEA-compliant privacy",sidebar_position:1,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use Chainlens Explorer",permalink:"/development/private-networks/how-to/monitor/chainlens"},next:{title:"Use Besu-extended privacy",permalink:"/development/private-networks/how-to/use-privacy/besu-extended"}},c={},s=[{value:"Privacy group type",id:"privacy-group-type",level:2}],l={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"use-eea-compliant-privacy"},"Use EEA-compliant privacy"),(0,a.kt)("p",null,"When using Hyperledger Besu ",(0,a.kt)("a",{parentName:"p",href:"/development/private-networks/concepts/privacy/privacy-groups"},"EEA-compliant privacy"),", the group of nodes specified by ",(0,a.kt)("inlineCode",{parentName:"p"},"privateFrom")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"privateFor")," form a privacy group, to which Tessera assigns a unique privacy group ID."),(0,a.kt)("p",null,"To enable the ",(0,a.kt)("a",{parentName:"p",href:"/development/private-networks/reference/api/#eea-methods"},(0,a.kt)("inlineCode",{parentName:"a"},"EEA")," API methods"),", use the ",(0,a.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#rpc-http-api"},(0,a.kt)("inlineCode",{parentName:"a"},"--rpc-http-api"))," or ",(0,a.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#rpc-ws-api"},(0,a.kt)("inlineCode",{parentName:"a"},"--rpc-ws-api"))," command line options."),(0,a.kt)("p",null,"To create an EEA-compliant private transaction, specify ",(0,a.kt)("inlineCode",{parentName:"p"},"privateFor")," when creating the signed transaction passed as an input parameter to ",(0,a.kt)("a",{parentName:"p",href:"/development/private-networks/reference/api/#eea_sendrawtransaction"},(0,a.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction")),"."),(0,a.kt)("h2",{id:"privacy-group-type"},"Privacy group type"),(0,a.kt)("p",null,"Privacy groups created when specifying ",(0,a.kt)("inlineCode",{parentName:"p"},"privateFrom")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"privateFor")," have a ",(0,a.kt)("inlineCode",{parentName:"p"},"LEGACY")," privacy group type when returned by ",(0,a.kt)("a",{parentName:"p",href:"/development/private-networks/reference/api/#priv_findprivacygroup"},(0,a.kt)("inlineCode",{parentName:"a"},"priv_findPrivacyGroup")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": [\n    {\n      "privacyGroupId": "68/Cq0mVjB8FbXDLE1tbDRAvD/srluIok137uFOaClM=",\n      "name": "legacy",\n      "description": "Privacy groups to support the creation of groups by privateFor and privateFrom",\n      "type": "LEGACY",\n      "members": [\n        "g59BmTeJIn7HIcnq8VQWgyh/pDbvbt2eyP0Ii60aDDw=",\n        "negmDcN2P4ODpqn/6WkJ02zT/0w0bjhGpkZ8UP6vARk="\n      ]\n    }\n  ]\n}\n')))}u.isMDXComponent=!0}}]);