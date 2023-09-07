"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[19204],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,k=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(k,i(i({ref:t},l),{},{components:n})):a.createElement(k,i({ref:t},l))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},88247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={description:"Hyperledger Besu high availability",tags:["public networks","private networks"]},i="High availability of JSON-RPC and RPC Pub/Sub APIs",s={unversionedId:"public-networks/how-to/configure-ha/index",id:"version-23.7.1/public-networks/how-to/configure-ha/index",title:"High availability of JSON-RPC and RPC Pub/Sub APIs",description:"Hyperledger Besu high availability",source:"@site/versioned_docs/version-23.7.1/public-networks/how-to/configure-ha/index.md",sourceDirName:"public-networks/how-to/configure-ha",slug:"/public-networks/how-to/configure-ha/",permalink:"/public-networks/how-to/configure-ha/",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.1/public-networks/how-to/configure-ha/index.md",tags:[{label:"public networks",permalink:"/tags/public-networks"},{label:"private networks",permalink:"/tags/private-networks"}],version:"23.7.1",lastUpdatedAt:1694057512,formattedLastUpdatedAt:"Sep 7, 2023",frontMatter:{description:"Hyperledger Besu high availability",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Configure logging",permalink:"/public-networks/how-to/monitor/logging"},next:{title:"Sample load balancer configurations",permalink:"/public-networks/how-to/configure-ha/sample-configuration"}},p={},c=[{value:"Determine when a node is ready",id:"determine-when-a-node-is-ready",level:2},{value:"Transaction nonces",id:"transaction-nonces",level:2},{value:"Subscriptions",id:"subscriptions",level:2},{value:"Recover from dropped subscriptions",id:"recover-from-dropped-subscriptions",level:2},{value:"New headers",id:"new-headers",level:3},{value:"Logs",id:"logs",level:3},{value:"New pending transactions",id:"new-pending-transactions",level:3},{value:"Dropped pending transactions",id:"dropped-pending-transactions",level:3},{value:"Syncing",id:"syncing",level:3}],l={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"high-availability-of-json-rpc-and-rpc-pubsub-apis"},"High availability of JSON-RPC and RPC Pub/Sub APIs"),(0,r.kt)("p",null,"To enable high availability to the ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/how-to/use-besu-api/rpc-pubsub"},"RPC Pub/Sub API over WebSocket")," or the ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/how-to/use-besu-api/json-rpc"},"JSON-RPC API"),", run and synchronize more than one Hyperledger Besu node to the network. Use a load balancer to distribute requests across nodes in the cluster that are ready to receive requests."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Load Balancer",src:n(94821).Z,width:"1394",height:"1152"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We don't recommend putting ",(0,r.kt)("a",{parentName:"p",href:"/private-networks/how-to/configure/bootnodes"},"bootnodes")," behind a load balancer.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We recommend using load balancers over WebSockets because WebSockets are persistent connections associated with specific nodes. If you use load balancers configured in sticky mode over HTTP instead, the connection sticks to the associated node even when the node is congested and there is a lower load node available. If you use load balancers not configured in sticky mode over HTTP, the connections may switch from node to node, so some JSON-RPC requests may not provide expected results (for example, ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#admin-methods"},(0,r.kt)("inlineCode",{parentName:"a"},"admin")," methods"),", ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#net_enode"},(0,r.kt)("inlineCode",{parentName:"a"},"net_enode")),", ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#net_peercount"},(0,r.kt)("inlineCode",{parentName:"a"},"net_peerCount")),", and ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#eth_syncing"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_syncing")),").")),(0,r.kt)("h2",{id:"determine-when-a-node-is-ready"},"Determine when a node is ready"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/how-to/use-besu-api/json-rpc#readiness-and-liveness-endpoints"},"readiness endpoint")," to determine when a node is ready."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The minimum number of peers and number of blocks from the best known block for determining if a node considered ready is deployment specific.")),(0,r.kt)("h2",{id:"transaction-nonces"},"Transaction nonces"),(0,r.kt)("p",null,"Besu obtains the nonce for the next transaction using ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#eth_gettransactioncount"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getTransactionCount")),". The nonce depends on the transactions in the ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/concepts/transactions/pool"},"transaction pool"),". If sending ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#eth_gettransactioncount"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getTransactionCount"))," and ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#eth_sendrawtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendRawTransaction"))," requests for a specific account to more than one node, the ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#eth_gettransactioncount"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getTransactionCount"))," results might be incorrect."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If using ",(0,r.kt)("a",{parentName:"p",href:"/private-networks/concepts/privacy/private-transactions/"},"private transactions"),", retrieve the nonce using ",(0,r.kt)("a",{parentName:"p",href:"/private-networks/reference/api/#priv_gettransactioncount"},(0,r.kt)("inlineCode",{parentName:"a"},"priv_getTransactionCount"))," or ",(0,r.kt)("a",{parentName:"p",href:"/private-networks/reference/api/#priv_geteeatransactioncount"},(0,r.kt)("inlineCode",{parentName:"a"},"priv_getEeaTransactionCount"))," and send the private transactions using ",(0,r.kt)("a",{parentName:"p",href:"/private-networks/reference/api/#eea_sendrawtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction")),".")),(0,r.kt)("p",null,"To get correct nonces when distributing requests across a cluster, either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Track the next nonce outside of the Besu node (as MetaMask does)."),(0,r.kt)("li",{parentName:"ul"},"Configure the load balancer in sticky mode to send requests from a specific account to a single node, unless that node is unavailable.")),(0,r.kt)("h2",{id:"subscriptions"},"Subscriptions"),(0,r.kt)("p",null,"You can subscribe to events using:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/public-networks/how-to/use-besu-api/rpc-pubsub"},"RPC Pub/Sub over WebSockets"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/public-networks/how-to/use-besu-api/access-logs"},"Filters over HTTP"),".")),(0,r.kt)("p",null,"We recommend using ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/how-to/use-besu-api/rpc-pubsub"},"RPC Pub/Sub over WebSocket")," because WebSockets connections associate with a specific node and do not require using the load balancer in sticky mode."),(0,r.kt)("p",null,"If using ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/how-to/use-besu-api/access-logs"},"filters over HTTP"),", configure the load balancer in sticky mode to associate the subscription with a specific node."),(0,r.kt)("h2",{id:"recover-from-dropped-subscriptions"},"Recover from dropped subscriptions"),(0,r.kt)("p",null,"Dropped subscriptions can occur because of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A disconnected WebSockets connection"),(0,r.kt)("li",{parentName:"ul"},"The removal of the node serving the subscription from the ready pool.")),(0,r.kt)("p",null,"If there is a dropped subscription, missed events might occur while reconnecting to a different node. To recover dropped messages, create another subscription and follow the process for that ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/how-to/use-besu-api/rpc-pubsub#subscribe"},"subscription type"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#new-headers"},(0,r.kt)("inlineCode",{parentName:"a"},"newHeads"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#logs"},(0,r.kt)("inlineCode",{parentName:"a"},"logs"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#new-pending-transactions"},(0,r.kt)("inlineCode",{parentName:"a"},"newPendingTransactions"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#dropped-pending-transactions"},(0,r.kt)("inlineCode",{parentName:"a"},"droppedPendingTransactions"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#syncing"},(0,r.kt)("inlineCode",{parentName:"a"},"syncing")),".")),(0,r.kt)("h3",{id:"new-headers"},"New headers"),(0,r.kt)("p",null,"To request information on blocks from the last block before the subscription dropped to the first block received from the new subscription, use ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#eth_getblockbynumber"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getBlockByNumber")),"."),(0,r.kt)("h3",{id:"logs"},"Logs"),(0,r.kt)("p",null,"To request logs from the block number of the last log received before the subscription dropped to the current chain head, use ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#eth_getlogs"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getLogs")),"."),(0,r.kt)("h3",{id:"new-pending-transactions"},"New pending transactions"),(0,r.kt)("p",null,"To request all pending transactions for the new node, use ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#txpool_besutransactions"},(0,r.kt)("inlineCode",{parentName:"a"},"txpool_besuTransactions")),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Nodes do not all store the same pending transactions.")),(0,r.kt)("h3",{id:"dropped-pending-transactions"},"Dropped pending transactions"),(0,r.kt)("p",null,"To request all pending transactions for the new node, use ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#txpool_besutransactions"},(0,r.kt)("inlineCode",{parentName:"a"},"txpool_besuTransactions")),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Nodes do not all store the same pending transactions.")),(0,r.kt)("h3",{id:"syncing"},"Syncing"),(0,r.kt)("p",null,"The syncing state of each node is specific to that node. To retrieve the syncing state of the new node, use ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#eth_syncing"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_syncing")),"."))}u.isMDXComponent=!0},94821:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/LoadBalancer-826ae74f729e635521c18cce763c439d.png"}}]);