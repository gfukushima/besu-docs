"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[14725],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={title:"Transaction pool",sidebar_position:2,description:"Transaction pool overview",tags:["public networks","private networks"]},i="Transaction pool",p={unversionedId:"public-networks/concepts/transactions/pool",id:"public-networks/concepts/transactions/pool",title:"Transaction pool",description:"Transaction pool overview",source:"@site/docs/public-networks/concepts/transactions/pool.md",sourceDirName:"public-networks/concepts/transactions",slug:"/public-networks/concepts/transactions/pool",permalink:"/development/public-networks/concepts/transactions/pool",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/concepts/transactions/pool.md",tags:[{label:"public networks",permalink:"/development/tags/public-networks"},{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1698969477,formattedLastUpdatedAt:"Nov 2, 2023",sidebarPosition:2,frontMatter:{title:"Transaction pool",sidebar_position:2,description:"Transaction pool overview",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Transaction types",permalink:"/development/public-networks/concepts/transactions/types"},next:{title:"Transaction validation",permalink:"/development/public-networks/concepts/transactions/validation"}},l={},s=[{value:"Layered transaction pool",id:"layered-transaction-pool",level:2},{value:"Dropping transactions when the transaction pool is full",id:"dropping-transactions-when-the-transaction-pool-is-full",level:2},{value:"Replacing transactions with the same sender and nonce",id:"replacing-transactions-with-the-same-sender-and-nonce",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"transaction-pool"},"Transaction pool"),(0,a.kt)("p",null,"All nodes maintain a transaction pool to store pending transactions before processing."),(0,a.kt)("p",null,"Options and methods for configuring and monitoring the transaction pool include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/development/public-networks/reference/api/#txpool_besutransactions"},(0,a.kt)("inlineCode",{parentName:"a"},"txpool_besuTransactions"))," API method to\nlist transactions in the transaction pool."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#tx-pool"},(0,a.kt)("inlineCode",{parentName:"a"},"--tx-pool"))," option to specify the type of transaction\npool to use."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#tx-pool-layer-max-capacity"},(0,a.kt)("inlineCode",{parentName:"a"},"--tx-pool-layer-max-capacity"))," option\nto specify the maximum memory capacity of the transaction pool."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#tx-pool-price-bump"},(0,a.kt)("inlineCode",{parentName:"a"},"--tx-pool-price-bump"))," option to specify the\nprice bump percentage to replace an existing transaction."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#tx-pool-priority-senders"},(0,a.kt)("inlineCode",{parentName:"a"},"--tx-pool-priority-senders")),"\noption to specify sender addresses to prioritize in the transaction pool."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/use-besu-api/rpc-pubsub#pending-transactions"},(0,a.kt)("inlineCode",{parentName:"a"},"newPendingTransactions"))," and\n",(0,a.kt)("a",{parentName:"li",href:"/development/public-networks/how-to/use-besu-api/rpc-pubsub#dropped-transactions"},(0,a.kt)("inlineCode",{parentName:"a"},"droppedPendingTransactions"))," RPC\nsubscriptions to notify you of transactions added to and dropped from the transaction pool.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"When submitting ",(0,a.kt)("a",{parentName:"p",href:"/development/private-networks/concepts/privacy/private-transactions/#nonce-validation"},"private transactions"),",\nthe ",(0,a.kt)("a",{parentName:"p",href:"/development/private-networks/concepts/privacy/private-transactions/processing"},"privacy marker transaction"),"\nis submitted to the transaction pool, not the private transaction itself.")),(0,a.kt)("h2",{id:"layered-transaction-pool"},"Layered transaction pool"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/besu/pull/5290"},"layered transaction pool")," is the default\ntransaction pool implementation.\nThis implementation separates the pool into layers according to value and executability of the transactions.\nThat is, the first layer keeps only transactions with the highest value and that could feasibly go\ninto the next produced block.\nThe two other layers ensure that Besu always has a backlog of transactions to fill blocks, gaining\nthe maximum amount of fees."),(0,a.kt)("p",null,"With the layered transaction pool, Besu produces more profitable blocks more quickly, with more\ndenial-of-service protection, and using less CPU than with the legacy transaction pool."),(0,a.kt)("p",null,"If you previously configured transaction pool behavior, upgrade to the layered transaction pool by:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Removing the ",(0,a.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#tx-pool-retention-hours"},(0,a.kt)("inlineCode",{parentName:"a"},"--tx-pool-retention-hours")),"\noption, which is not applicable because old transactions will expire when the memory cache is full."),(0,a.kt)("li",{parentName:"ul"},"Replacing the ",(0,a.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#tx-pool-limit-by-account-percentage"},(0,a.kt)("inlineCode",{parentName:"a"},"--tx-pool-limit-by-account-percentage")),"\noption with ",(0,a.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#tx-pool-max-future-by-sender"},(0,a.kt)("inlineCode",{parentName:"a"},"--tx-pool-max-future-by-sender")),"\nto limit the number of sequential transactions, instead of percentage of transactions, from a single\nsender kept in the pool."),(0,a.kt)("li",{parentName:"ul"},"Removing the ",(0,a.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#tx-pool-max-size"},(0,a.kt)("inlineCode",{parentName:"a"},"--tx-pool-max-size"))," option,\nwhich is not applicable because the layered pool is limited by memory size instead of the number\nof transactions.\nTo configure the maximum memory capacity, use ",(0,a.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#tx-pool-layer-max-capacity"},(0,a.kt)("inlineCode",{parentName:"a"},"--tx-pool-layer-max-capacity")),".")),(0,a.kt)("p",null,"You can opt out of the layered transaction pool implementation by setting the\n",(0,a.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#tx-pool"},(0,a.kt)("inlineCode",{parentName:"a"},"--tx-pool"))," option to ",(0,a.kt)("inlineCode",{parentName:"p"},"legacy"),", but the legacy\nimplementation will be deprecated soon, so we recommend using the layered pool."),(0,a.kt)("h2",{id:"dropping-transactions-when-the-transaction-pool-is-full"},"Dropping transactions when the transaction pool is full"),(0,a.kt)("p",null,"When the transaction pool is full, it accepts and retains local transactions in preference to remote transactions. If the transaction pool is full of local transactions, Besu drops the oldest local transactions first. That is, a full transaction pool continues to accept new local transactions by first dropping remote transactions and then by dropping the oldest local transactions."),(0,a.kt)("h2",{id:"replacing-transactions-with-the-same-sender-and-nonce"},"Replacing transactions with the same sender and nonce"),(0,a.kt)("p",null,"You can replace a pending transaction with a transaction that has the same sender and nonce but a higher gas price."),(0,a.kt)("p",null,"If sending a ",(0,a.kt)("a",{parentName:"p",href:"/development/public-networks/concepts/transactions/types#frontier-transactions"},"legacy transaction"),", the old transaction is replaced if the new transaction has a gas price higher than the existing gas price by the percentage specified by ",(0,a.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#tx-pool-price-bump"},(0,a.kt)("inlineCode",{parentName:"a"},"--tx-pool-price-bump")),"."),(0,a.kt)("p",null,"If sending an ",(0,a.kt)("a",{parentName:"p",href:"/development/public-networks/concepts/transactions/types#eip1559-transactions"},(0,a.kt)("inlineCode",{parentName:"a"},"EIP1559")," transaction"),", the old transaction is replaced if one of the following is true:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The new transaction's effective gas price is higher than the existing gas price by the percentage specified by ",(0,a.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#tx-pool-price-bump"},(0,a.kt)("inlineCode",{parentName:"a"},"--tx-pool-price-bump"))," AND the new effective priority fee is greater than or equal to the existing priority fee.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The new transaction's effective gas price is the equal to the existing gas price AND the new effective priority fee is higher than the existing priority fee by the percentage specified by ",(0,a.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#tx-pool-price-bump"},(0,a.kt)("inlineCode",{parentName:"a"},"--tx-pool-price-bump")),"."))),(0,a.kt)("p",null,"The default value for ",(0,a.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#tx-pool-price-bump"},(0,a.kt)("inlineCode",{parentName:"a"},"--tx-pool-price-bump"))," is 10%."))}u.isMDXComponent=!0}}]);