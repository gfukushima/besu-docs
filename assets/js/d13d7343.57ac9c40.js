"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[43657],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),v=a,m=u["".concat(p,".").concat(v)]||u[v]||l[v]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=v;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},82086:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Send concurrent private transactions",description:"Creating and sending concurrent private transactions with Hyperledger Besu",sidebar_position:2,tags:["private networks"]},i="Send concurrent private transactions",s={unversionedId:"private-networks/how-to/send-transactions/concurrent-private-transactions",id:"private-networks/how-to/send-transactions/concurrent-private-transactions",title:"Send concurrent private transactions",description:"Creating and sending concurrent private transactions with Hyperledger Besu",source:"@site/docs/private-networks/how-to/send-transactions/concurrent-private-transactions.md",sourceDirName:"private-networks/how-to/send-transactions",slug:"/private-networks/how-to/send-transactions/concurrent-private-transactions",permalink:"/development/private-networks/how-to/send-transactions/concurrent-private-transactions",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/send-transactions/concurrent-private-transactions.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1689101827,formattedLastUpdatedAt:"Jul 11, 2023",sidebarPosition:2,frontMatter:{title:"Send concurrent private transactions",description:"Creating and sending concurrent private transactions with Hyperledger Besu",sidebar_position:2,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Create and send private transactions",permalink:"/development/private-networks/how-to/send-transactions/private-transactions"},next:{title:"Include revert reason",permalink:"/development/private-networks/how-to/send-transactions/revert-reason"}},p={},c=[],d={toc:c},u="wrapper";function l(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"send-concurrent-private-transactions"},"Send concurrent private transactions"),(0,a.kt)("p",null,"Private transaction processing involves two transactions, the private transaction and the ",(0,a.kt)("a",{parentName:"p",href:"/development/private-networks/concepts/privacy/private-transactions/processing"},"privacy marker transaction (PMT)"),". The private transaction and the PMT each have their own ",(0,a.kt)("a",{parentName:"p",href:"/development/private-networks/concepts/privacy/private-transactions/#nonces"},"nonce"),"."),(0,a.kt)("p",null,"If your private transaction rate requires sending private transactions without waiting for the previous private transaction to be mined, using ",(0,a.kt)("a",{parentName:"p",href:"/development/public-networks/reference/api/#eth_gettransactioncount"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_getTransactionCount"))," and ",(0,a.kt)("a",{parentName:"p",href:"/development/private-networks/reference/api/#eea_sendrawtransaction"},(0,a.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction"))," may result in ",(0,a.kt)("a",{parentName:"p",href:"/development/private-networks/concepts/privacy/private-transactions/#private-nonce-management"},"incorrect nonces"),"."),(0,a.kt)("p",null,"In this case, use ",(0,a.kt)("a",{parentName:"p",href:"/development/private-networks/how-to/send-transactions/private-transactions#priv_distributerawtransaction"},(0,a.kt)("inlineCode",{parentName:"a"},"priv_distributeRawTransaction"))," instead of ",(0,a.kt)("a",{parentName:"p",href:"/development/private-networks/reference/api/#eea_sendrawtransaction"},(0,a.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction")),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can use ",(0,a.kt)("a",{parentName:"p",href:"/development/private-networks/reference/api/#priv_gettransactioncount"},(0,a.kt)("inlineCode",{parentName:"a"},"priv_getTransactionCount"))," or ",(0,a.kt)("a",{parentName:"p",href:"/development/private-networks/reference/api/#priv_geteeatransactioncount"},(0,a.kt)("inlineCode",{parentName:"a"},"priv_getEeaTransactionCount"))," to get the nonce for an account for the specified privacy group or participants.")),(0,a.kt)("p",null,"Send the corresponding PMT using ",(0,a.kt)("a",{parentName:"p",href:"/development/public-networks/reference/api/#eth_sendrawtransaction"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_sendRawTransaction")),", specifying the public PMT nonce. This method allows you to create and send the PMT yourself rather than ",(0,a.kt)("a",{parentName:"p",href:"/development/private-networks/reference/api/#eea_sendrawtransaction"},(0,a.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction"))," handling the PMT."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"When using ",(0,a.kt)("inlineCode",{parentName:"p"},"priv_distributeRawTransaction")," to distribute transactions with consecutive nonces for the same account, the corresponding PMTs must use one account with the nonces in the same order as the private transactions."),(0,a.kt)("p",{parentName:"admonition"},"This is to ensure that the private transactions are executed in the correct order.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/web3js-quorum/tree/master/example/concurrentPrivateTransactions"},"web3js-quorum library")," includes an example of how to send concurrent private transactions. The example uses ",(0,a.kt)("a",{parentName:"p",href:"/development/private-networks/concepts/privacy/privacy-groups"},"offchain privacy groups"),". Use ",(0,a.kt)("a",{parentName:"p",href:"/development/private-networks/reference/api/#priv_getprivacyprecompileaddress"},(0,a.kt)("inlineCode",{parentName:"a"},"priv_getPrivacyPrecompileAddress"))," to get the precompile address to specify in the ",(0,a.kt)("inlineCode",{parentName:"p"},"to")," field when creating the PMT.")))}l.isMDXComponent=!0}}]);