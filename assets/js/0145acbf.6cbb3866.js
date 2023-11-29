"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[45440],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5910:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={title:"Data storage formats",sidebar_position:3,description:"Learn about storing data using Forest of Tries and Bonsai Tries.",tags:["public networks"]},s="Data storage formats",i={unversionedId:"public-networks/concepts/data-storage-formats",id:"public-networks/concepts/data-storage-formats",title:"Data storage formats",description:"Learn about storing data using Forest of Tries and Bonsai Tries.",source:"@site/docs/public-networks/concepts/data-storage-formats.md",sourceDirName:"public-networks/concepts",slug:"/public-networks/concepts/data-storage-formats",permalink:"/development/public-networks/concepts/data-storage-formats",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/concepts/data-storage-formats.md",tags:[{label:"public networks",permalink:"/development/tags/public-networks"}],version:"current",lastUpdatedAt:1701300211,formattedLastUpdatedAt:"Nov 29, 2023",sidebarPosition:3,frontMatter:{title:"Data storage formats",sidebar_position:3,description:"Learn about storing data using Forest of Tries and Bonsai Tries.",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Attestations",permalink:"/development/public-networks/concepts/proof-of-stake/attestations"},next:{title:"Transaction types",permalink:"/development/public-networks/concepts/transactions/types"}},l={},d=[{value:"Forest of Tries",id:"forest-of-tries",level:2},{value:"Pruning",id:"pruning",level:3},{value:"Bonsai Tries",id:"bonsai-tries",level:2},{value:"Forest of Tries vs. Bonsai Tries",id:"forest-of-tries-vs-bonsai-tries",level:2},{value:"Storage requirements",id:"storage-requirements",level:3},{value:"Accessing data",id:"accessing-data",level:3},{value:"Syncing nodes",id:"syncing-nodes",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-storage-formats"},"Data storage formats"),(0,r.kt)("p",null,"Besu offers two formats for storing the world state, ",(0,r.kt)("a",{parentName:"p",href:"#forest-of-tries"},"Forest of Tries")," and ",(0,r.kt)("a",{parentName:"p",href:"#bonsai-tries"},"Bonsai Tries"),"."),(0,r.kt)("h2",{id:"forest-of-tries"},"Forest of Tries"),(0,r.kt)("p",null,"Forest of Tries, also called forest mode, is the default storage format."),(0,r.kt)("p",null,"In forest mode, each node in the trie is saved in a key-value store by hash. For each block, the world state is updated with new nodes, leaf nodes, and a new state root. Old leaf nodes remain in the underlying data store. Data is accessed and stored by hash, which increases the size of the database and increases the resources and time needed to access account data."),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"forest_of_tries",src:n(47794).Z,width:"828",height:"631"}))),(0,r.kt)("h3",{id:"pruning"},"Pruning"),(0,r.kt)("p",null,"Pruning reduces the storage required by removing state trie nodes unreachable from ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#pruning-blocks-retained"},"recent blocks"),"."),(0,r.kt)("p",null,"Pruning is disabled by default, and can be enabled with the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#pruning-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--pruning-enabled"))," command line option."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Using pruning with ",(0,r.kt)("a",{parentName:"p",href:"../../private-networks/concepts/privacy/private-transactions"},"private transactions"),"\\\nisn't supported.")),(0,r.kt)("p",null,"Pruning might increase block import times, but it doesn't affect the ability of nodes to stay in sync."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Pruning is being deprecated for ",(0,r.kt)("a",{parentName:"p",href:"#bonsai-tries"},"Bonsai Tries")," and is currently not being updated.")),(0,r.kt)("h2",{id:"bonsai-tries"},"Bonsai Tries"),(0,r.kt)("p",null,"Bonsai Tries is a data storage layout policy designed to reduce storage requirements and increase read performance."),(0,r.kt)("p",null,"Bonsai stores leaf values in a trie log, separate from the branches of the trie. Bonsai stores nodes by the location of the node instead of the hash of the node. Bonsai can access the leaf from the underlying storage directly using the account key. This greatly reduces the disk space needed for storage and allows for less resource-demanding and faster read performance. Bonsai inherently prunes orphaned nodes and old branches."),(0,r.kt)("p",null,"To run a node with Bonsai Tries data storage format, use the command line option ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#data-storage-format"},(0,r.kt)("inlineCode",{parentName:"a"},"--data-storage-format=BONSAI")),"."),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonsai_tries",src:n(73677).Z,width:"828",height:"513"}))),(0,r.kt)("h2",{id:"forest-of-tries-vs-bonsai-tries"},"Forest of Tries vs. Bonsai Tries"),(0,r.kt)("h3",{id:"storage-requirements"},"Storage requirements"),(0,r.kt)("p",null,"Forest mode uses significantly more memory than Bonsai. With an ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/get-started/connect/sync-node#run-an-archive-node"},"archive node"),", forest mode uses an estimated 12 TB of storage, while Bonsai uses an estimated 1100 GB of storage. With a ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/get-started/connect/sync-node#run-a-full-node"},"full node"),", forest mode uses an estimated 750 GB of storage, while Bonsai uses an estimated 650 GB of storage."),(0,r.kt)("h3",{id:"accessing-data"},"Accessing data"),(0,r.kt)("p",null,"Forest mode must go through all the branches by hash to read a leaf value. Bonsai can access the leaf from the underlying storage directly using the account key. Bonsai will generally read faster than forest mode, particularly if the blocks are more recent."),(0,r.kt)("p",null,"However, Bonsai becomes increasingly more resource-intensive the further in history you try to read data. To prevent this, you can limit how far Bonsai looks back while reconstructing data. The default limit Bonsai looks back is 512. To change the parameter, use the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#bonsai-historical-block-limit"},(0,r.kt)("inlineCode",{parentName:"a"},"--bonsai-historical-block-limit"))," option."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"--bonsai-historical-block-limit"),' doesn\'t affect the size of the database being stored, only how far back to load. This means there is no "safe minimum" value to use with this option.')),(0,r.kt)("h3",{id:"syncing-nodes"},"Syncing nodes"),(0,r.kt)("p",null,"The following table shows the ways you can ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/get-started/connect/sync-node#run-a-full-node"},"sync a full node")," with the different data storage formats using ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/get-started/connect/sync-node#fast-synchronization"},"fast")," and ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/get-started/connect/sync-node#snap-synchronization"},"snap")," sync."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data storage format"),(0,r.kt)("th",{parentName:"tr",align:null},"Sync mode"),(0,r.kt)("th",{parentName:"tr",align:null},"Storage estimate"),(0,r.kt)("th",{parentName:"tr",align:null},"Can other nodes sync to your node?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bonsai"),(0,r.kt)("td",{parentName:"tr",align:null},"Fast"),(0,r.kt)("td",{parentName:"tr",align:null},"650 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bonsai"),(0,r.kt)("td",{parentName:"tr",align:null},"Snap"),(0,r.kt)("td",{parentName:"tr",align:null},"650 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"To be implemented")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Forest"),(0,r.kt)("td",{parentName:"tr",align:null},"Fast"),(0,r.kt)("td",{parentName:"tr",align:null},"750 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Forest"),(0,r.kt)("td",{parentName:"tr",align:null},"Snap"),(0,r.kt)("td",{parentName:"tr",align:null},"750 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We recommend using snap sync with Bonsai for the fastest sync and lowest storage requirements.")))}u.isMDXComponent=!0},73677:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Bonsai_tries-5faad47fa3a0b807cd2bb30bce6b38b9.png"},47794:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/forest_of_tries-b2da450e9ecbfc38e09bd13505c66aed.png"}}]);