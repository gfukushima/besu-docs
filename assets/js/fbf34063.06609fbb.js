"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[26470],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var a=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,i=function(e,r){if(null==e)return{};var t,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),l=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=l(e.components);return a.createElement(s.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},v=a.forwardRef((function(e,r){var t=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(t),v=i,d=u["".concat(s,".").concat(v)]||u[v]||m[v]||n;return t?a.createElement(d,p(p({ref:r},c),{},{components:t})):a.createElement(d,p({ref:r},c))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var n=t.length,p=new Array(n);p[0]=v;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[u]="string"==typeof e?e:i,p[1]=o;for(var l=2;l<n;l++)p[l]=t[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},90854:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var a=t(87462),i=(t(67294),t(3905));const n={title:"Use flexible privacy groups",description:"Use flexible privacy groups",sidebar_position:5},p="Use flexible privacy groups",o={unversionedId:"private-networks/how-to/use-privacy/flexible",id:"version-23.4.0/private-networks/how-to/use-privacy/flexible",title:"Use flexible privacy groups",description:"Use flexible privacy groups",source:"@site/versioned_docs/version-23.4.0/private-networks/how-to/use-privacy/flexible.md",sourceDirName:"private-networks/how-to/use-privacy",slug:"/private-networks/how-to/use-privacy/flexible",permalink:"/23.4.0/private-networks/how-to/use-privacy/flexible",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/private-networks/how-to/use-privacy/flexible.md",tags:[],version:"23.4.0",lastUpdatedAt:1695835674,formattedLastUpdatedAt:"Sep 27, 2023",sidebarPosition:5,frontMatter:{title:"Use flexible privacy groups",description:"Use flexible privacy groups",sidebar_position:5},sidebar:"privateDocSidebar",previous:{title:"Create and manage privacy groups",permalink:"/23.4.0/private-networks/how-to/use-privacy/privacy-groups"},next:{title:"Access private and privacy marker transactions",permalink:"/23.4.0/private-networks/how-to/use-privacy/access-private-transactions"}},s={},l=[{value:"Enable flexible privacy groups",id:"enable-flexible-privacy-groups",level:2},{value:"Simple flexible privacy group example",id:"simple-flexible-privacy-group-example",level:2},{value:"Add and remove members",id:"add-and-remove-members",level:2}],c={toc:l};function u(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"use-flexible-privacy-groups"},"Use flexible privacy groups"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/web3js-quorum"},(0,i.kt)("inlineCode",{parentName:"a"},"web3js-quorum")," library")," to create and update membership of ",(0,i.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/concepts/privacy/flexible-privacy"},"flexible privacy groups"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Because group membership for flexible privacy groups is stored in a smart contract, flexible privacy groups are also known as onchain privacy groups.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/concepts/privacy/flexible-privacy"},"Flexible privacy groups")," are an early access feature. Don't use in production networks."),(0,i.kt)("p",{parentName:"admonition"},"The flexible privacy group interfaces may change between releases. There might not be an upgrade path from flexible privacy groups created using v1.5 or earlier to enable use of flexible privacy group functionality in future versions."),(0,i.kt)("p",{parentName:"admonition"},"We don't recommend creating flexible privacy groups in a chain with existing ",(0,i.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/concepts/privacy/privacy-groups"},"offchain privacy groups"),".")),(0,i.kt)("h2",{id:"enable-flexible-privacy-groups"},"Enable flexible privacy groups"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/reference/cli/options#privacy-flexible-groups-enabled"},(0,i.kt)("inlineCode",{parentName:"a"},"--privacy-flexible-groups-enabled"))," command line option to enable ",(0,i.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/concepts/privacy/flexible-privacy"},"flexible privacy groups"),". When flexible privacy groups are enabled, the ",(0,i.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/reference/api/#priv_createprivacygroup"},(0,i.kt)("inlineCode",{parentName:"a"},"priv_createPrivacyGroup")),", ",(0,i.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/reference/api/#priv_deleteprivacygroup"},(0,i.kt)("inlineCode",{parentName:"a"},"priv_deletePrivacyGroup")),", and ",(0,i.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/reference/api/#priv_findprivacygroup"},(0,i.kt)("inlineCode",{parentName:"a"},"priv_findPrivacyGroup"))," methods for ",(0,i.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/concepts/privacy/privacy-groups"},"offchain privacy groups")," are disabled."),(0,i.kt)("h2",{id:"simple-flexible-privacy-group-example"},"Simple flexible privacy group example"),(0,i.kt)("p",null,"To create and find a ",(0,i.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/concepts/privacy/flexible-privacy"},"flexible privacy group")," using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/web3js-quorum"},(0,i.kt)("inlineCode",{parentName:"a"},"web3js-quorum")," library"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Update the ",(0,i.kt)("inlineCode",{parentName:"p"},"example/keys.js")," file to match your network configuration.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd example/onchainPrivacy\nnode simpleExample.js\n")),(0,i.kt)("p",{parentName:"li"},"This script creates the flexible privacy group with two members. ",(0,i.kt)("inlineCode",{parentName:"p"},"findPrivacyGroup")," finds and displays the created privacy group."))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The Tessera logs for Tessera 1 and Tessera 2 display ",(0,i.kt)("inlineCode",{parentName:"p"},"PrivacyGroupNotFound")," errors. This is expected behavior because private transactions check offchain and onchain to find the privacy group for a private transaction.")),(0,i.kt)("h2",{id:"add-and-remove-members"},"Add and remove members"),(0,i.kt)("p",null,"To add and remove members from a ",(0,i.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/concepts/privacy/flexible-privacy"},"flexible privacy group"),", use the ",(0,i.kt)("inlineCode",{parentName:"p"},"addTo")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"removeFrom")," methods in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/web3js-quorum"},(0,i.kt)("inlineCode",{parentName:"a"},"web3js-quorum")," library")," client library."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"When adding a member, Besu pushes all existing group transactions to the new member and processes them. If there are a large number of existing transactions, adding the member may take some time.")))}u.isMDXComponent=!0}}]);