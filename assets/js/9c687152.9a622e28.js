"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[19502],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>u});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},c="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),c=d(a),m=n,u=c["".concat(p,".").concat(m)]||c[m]||k[m]||i;return a?r.createElement(u,o(o({ref:e},s),{},{components:a})):r.createElement(u,o({ref:e},s))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[c]="string"==typeof t?t:n,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},30165:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const i={title:"Private network API objects",sidebar_position:2,description:"Hyperledger Besu private network API objects reference"},o="Private network API objects",l={unversionedId:"private-networks/reference/api/objects",id:"version-23.4.0/private-networks/reference/api/objects",title:"Private network API objects",description:"Hyperledger Besu private network API objects reference",source:"@site/versioned_docs/version-23.4.0/private-networks/reference/api/objects.md",sourceDirName:"private-networks/reference/api",slug:"/private-networks/reference/api/objects",permalink:"/23.4.0/private-networks/reference/api/objects",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/private-networks/reference/api/objects.md",tags:[],version:"23.4.0",lastUpdatedAt:1696836477,formattedLastUpdatedAt:"Oct 9, 2023",sidebarPosition:2,frontMatter:{title:"Private network API objects",sidebar_position:2,description:"Hyperledger Besu private network API objects reference"},sidebar:"privateDocSidebar",previous:{title:"Private network API methods",permalink:"/23.4.0/private-networks/reference/api/"},next:{title:"Accounts for testing",permalink:"/23.4.0/private-networks/reference/accounts-for-testing"}},p={},d=[{value:"Private transaction object",id:"private-transaction-object",level:2},{value:"Private transaction receipt object",id:"private-transaction-receipt-object",level:2}],s={toc:d};function c(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"private-network-api-objects"},"Private network API objects"),(0,n.kt)("p",null,"The following objects are parameters for or returned by Besu private network API methods."),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"This reference contains API objects that apply to only private networks. For API objects that apply to both private and public networks, see the ",(0,n.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/api/objects"},"public network API objects reference"),".")),(0,n.kt)("h2",{id:"private-transaction-object"},"Private transaction object"),(0,n.kt)("p",null,"Returned by ",(0,n.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/reference/api/#priv_getprivatetransaction"},(0,n.kt)("inlineCode",{parentName:"a"},"priv_getPrivateTransaction")),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"from")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Data, 20","\xa0","bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"Address of the sender.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"gas")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Quantity"),(0,n.kt)("td",{parentName:"tr",align:null},"Gas provided by the sender.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"gasPrice")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Quantity"),(0,n.kt)("td",{parentName:"tr",align:null},"Gas price, in Wei, provided by the sender.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"input")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Data"),(0,n.kt)("td",{parentName:"tr",align:null},"The data to create or invoke a contract.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"nonce")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Quantity"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of transactions made by the sender to the privacy group before this one.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"to")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Data, 20","\xa0","bytes"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"null")," if a contract creation transaction, otherwise, the contract address.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"value")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Quantity"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"null")," because private transactions cannot transfer Ether.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"v")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Quantity"),(0,n.kt)("td",{parentName:"tr",align:null},"ECDSA Recovery ID.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"r")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Data, 32","\xa0","bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"ECDSA signature r.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"s")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Data, 32","\xa0","bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"ECDSA signature s.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"privateFrom")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Data, 32","\xa0","bytes"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.tessera.consensys.net/"},"Tessera")," public key of the sender.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"privateFor")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Array of Data, 32","\xa0","bytes each"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.tessera.consensys.net/"},"Tessera")," public keys of recipients. Not returned if using ",(0,n.kt)("inlineCode",{parentName:"td"},"privacyGroupId")," to ",(0,n.kt)("a",{parentName:"td",href:"/23.4.0/private-networks/concepts/privacy/privacy-groups#privacy-types"},"send the transaction"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"privacyGroupId")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Data, 32","\xa0","bytes"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.tessera.consensys.net/"},"Tessera")," privacy group ID of recipients. Not returned if using ",(0,n.kt)("inlineCode",{parentName:"td"},"privateFor")," to ",(0,n.kt)("a",{parentName:"td",href:"/23.4.0/private-networks/concepts/privacy/privacy-groups#privacy-types"},"send the transaction"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"restriction")),(0,n.kt)("td",{parentName:"tr",align:"center"},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Must be ",(0,n.kt)("a",{parentName:"td",href:"/23.4.0/private-networks/concepts/privacy/private-transactions/"},(0,n.kt)("inlineCode",{parentName:"a"},"restricted")),".")))),(0,n.kt)("h2",{id:"private-transaction-receipt-object"},"Private transaction receipt object"),(0,n.kt)("p",null,"Returned by ",(0,n.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/reference/api/#priv_gettransactionreceipt"},(0,n.kt)("inlineCode",{parentName:"a"},"priv_getTransactionReceipt")),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"blockHash")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Data, 32","\xa0","bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"Hash of block containing this transaction.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"blockNumber")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Quantity"),(0,n.kt)("td",{parentName:"tr",align:null},"Block number of block containing this transaction.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"contractAddress")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Data, 20","\xa0","bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"Contract address created if a contract creation transaction, otherwise, ",(0,n.kt)("inlineCode",{parentName:"td"},"null"),". A failed contract creation transaction still produces a contract address value.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"from")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Data, 20","\xa0","bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"Address of the sender.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"logs")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Array"),(0,n.kt)("td",{parentName:"tr",align:null},"Array of ",(0,n.kt)("a",{parentName:"td",href:"/23.4.0/public-networks/reference/api/objects#log-object"},"log objects")," generated by this private transaction.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"to")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Data, 20","\xa0","bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"Address of the receiver, if sending ether, otherwise, null.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"transactionIndex")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Quantity, Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"Index position of transaction in the block.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"revertReason")),(0,n.kt)("td",{parentName:"tr",align:"center"},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"ABI-encoded string that displays the ",(0,n.kt)("a",{parentName:"td",href:"/23.4.0/private-networks/how-to/send-transactions/revert-reason"},"reason for reverting the transaction"),". Only available if revert reason is ",(0,n.kt)("a",{parentName:"td",href:"/23.4.0/private-networks/reference/cli/options#revert-reason-enabled"},"enabled"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"output")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Data"),(0,n.kt)("td",{parentName:"tr",align:null},"RLP-encoded return value of a contract call if a value returns, otherwise, ",(0,n.kt)("inlineCode",{parentName:"td"},"null"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"commitmentHash")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Data, 32","\xa0","bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"Hash of the privacy marker transaction.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"status")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Quantity"),(0,n.kt)("td",{parentName:"tr",align:null},"Either ",(0,n.kt)("inlineCode",{parentName:"td"},"0x1")," (success) or ",(0,n.kt)("inlineCode",{parentName:"td"},"0x0")," (failure).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"privateFrom")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Data, 32","\xa0","bytes"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.tessera.consensys.net/"},"Tessera")," public key of the sender.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"privateFor")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"privacyGroupId")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Array or Data, 32","\xa0","bytes"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.tessera.consensys.net/"},"Tessera")," public keys or privacy group ID of the recipients.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"logsBloom")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Data, 256","\xa0","bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"Bloom filter for light clients to quickly retrieve related logs.")))))}c.isMDXComponent=!0}}]);