"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[80783],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(86010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),o=n(67294),r=n(86010),i=n(12466),l=n(16550),s=n(91980),p=n(67392),d=n(50012);function c(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function u(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=u(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,p]=h({queryString:n,groupId:a}),[c,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,d.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),f=(()=>{const e=s??c;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),k(e)}),[p,k,r]),tabValues:r}}var f=n(72389);const N="tabList__CuJ",b="tabItem_LNqP";function g(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const t=e.currentTarget,n=d.indexOf(t),a=p[n].value;a!==l&&(c(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:u},i,{className:(0,r.Z)("tabs__item",b,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=k(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",N)},o.createElement(g,(0,a.Z)({},e,t)),o.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return o.createElement(v,(0,a.Z)({key:String(t)},e))}},55247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(87462),o=(n(67294),n(3905)),r=n(74866),i=n(85162);const l={title:"Create a permissioned network",sidebar_position:1,description:"Hyperledger Besu create a permissioned network",tags:["private networks"]},s="Create a permissioned network",p={unversionedId:"private-networks/tutorials/permissioning/index",id:"private-networks/tutorials/permissioning/index",title:"Create a permissioned network",description:"Hyperledger Besu create a permissioned network",source:"@site/docs/private-networks/tutorials/permissioning/index.md",sourceDirName:"private-networks/tutorials/permissioning",slug:"/private-networks/tutorials/permissioning/",permalink:"/development/private-networks/tutorials/permissioning/",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/tutorials/permissioning/index.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1695835674,formattedLastUpdatedAt:"Sep 27, 2023",sidebarPosition:1,frontMatter:{title:"Create a permissioned network",sidebar_position:1,description:"Hyperledger Besu create a permissioned network",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Create a privacy-enabled network using the Quorum Developer Quickstart",permalink:"/development/private-networks/tutorials/privacy/quickstart"},next:{title:"Get started with onchain permissioning",permalink:"/development/private-networks/tutorials/permissioning/onchain"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create folders",id:"1-create-folders",level:3},{value:"2. Create the configuration file",id:"2-create-the-configuration-file",level:3},{value:"3. Generate node keys and a genesis file",id:"3-generate-node-keys-and-a-genesis-file",level:3},{value:"4. Copy the genesis file to the Permissioned-Network directory",id:"4-copy-the-genesis-file-to-the-permissioned-network-directory",level:3},{value:"5. Copy the node private keys to the node directories",id:"5-copy-the-node-private-keys-to-the-node-directories",level:3},{value:"6. Create the permissions configuration file",id:"6-create-the-permissions-configuration-file",level:3},{value:"7. Start Node-1",id:"7-start-node-1",level:3},{value:"8. Start Node-2",id:"8-start-node-2",level:3},{value:"9. Start Node-3",id:"9-start-node-3",level:3},{value:"10. Start Node-4",id:"10-start-node-4",level:3},{value:"11. Add enode URLs for nodes to permissions configuration file",id:"11-add-enode-urls-for-nodes-to-permissions-configuration-file",level:3},{value:"12. Add nodes as peers",id:"12-add-nodes-as-peers",level:3},{value:"13. Confirm permissioned network is working",id:"13-confirm-permissioned-network-is-working",level:3},{value:"Check peer count",id:"check-peer-count",level:4},{value:"Send a transaction from an account in the allowlist",id:"send-a-transaction-from-an-account-in-the-allowlist",level:4},{value:"Try sending a transaction from an account not in the accounts allowlist",id:"try-sending-a-transaction-from-an-account-not-in-the-accounts-allowlist",level:3},{value:"Start a node not on the nodes allowlist",id:"start-a-node-not-on-the-nodes-allowlist",level:3},{value:"Stop nodes",id:"stop-nodes",level:2}],u={toc:c};function m(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-permissioned-network"},"Create a permissioned network"),(0,o.kt)("p",null,"The following steps set up a permissioned network with local node and account permissions. The network uses the ",(0,o.kt)("a",{parentName:"p",href:"/development/private-networks/how-to/configure/consensus/ibft"},"IBFT 2.0 proof of authority consensus protocol"),"."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"A permissioned Ethereum network as described here is not protected against all attack vectors. We recommend applying defense in depth to protect your infrastructure.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/development/private-networks/get-started/install/binary-distribution"},"Hyperledger Besu")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://curl.haxx.se/download.html"},"curl (or similar Web service client)"))),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("h3",{id:"1-create-folders"},"1. Create folders"),(0,o.kt)("p",null,"Each node requires a data directory for the blockchain data."),(0,o.kt)("p",null,"Create directories for your permissioned network and each of the three nodes, and a data directory for each node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Permissioned-Network/\n\u251c\u2500\u2500 Node-1\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u251c\u2500\u2500 Node-2\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2514\u2500\u2500 Node-3\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2514\u2500\u2500 Node-4\n    \u251c\u2500\u2500 data\n")),(0,o.kt)("h3",{id:"2-create-the-configuration-file"},"2. Create the configuration file"),(0,o.kt)("p",null,"The configuration file defines the ",(0,o.kt)("a",{parentName:"p",href:"/development/private-networks/how-to/configure/consensus/ibft#genesis-file"},"IBFT 2.0 genesis file")," and the number of node key pairs to generate."),(0,o.kt)("p",null,"The configuration file has two nested JSON nodes. The first is the ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis")," property defining the IBFT 2.0 genesis file, except for the ",(0,o.kt)("inlineCode",{parentName:"p"},"extraData")," string, which Besu generates automatically in the resulting genesis file. The second is the ",(0,o.kt)("inlineCode",{parentName:"p"},"blockchain")," property defining the number of key pairs to generate."),(0,o.kt)("p",null,"Copy the following configuration file definition to a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"ibftConfigFile.json")," and save it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Permissioned-Network")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "genesis": {\n    "config": {\n      "chainId": 1337,\n      "berlinBlock": 0,\n      "ibft2": {\n        "blockperiodseconds": 2,\n        "epochlength": 30000,\n        "requesttimeoutseconds": 4\n      }\n    },\n    "nonce": "0x0",\n    "timestamp": "0x58ee40ba",\n    "gasLimit": "0x47b760",\n    "difficulty": "0x1",\n    "mixHash": "0x63746963616c2062797a616e74696e65206661756c7420746f6c6572616e6365",\n    "coinbase": "0x0000000000000000000000000000000000000000",\n    "alloc": {\n      "fe3b557e8fb62b89f4916b721be55ceb828dbd73": {\n        "privateKey": "8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63",\n        "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n        "balance": "0xad78ebc5ac6200000"\n      },\n      "627306090abaB3A6e1400e9345bC60c78a8BEf57": {\n        "privateKey": "c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3",\n        "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n        "balance": "90000000000000000000000"\n      },\n      "f17f52151EbEF6C7334FAD080c5704D77216b732": {\n        "privateKey": "ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f",\n        "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n        "balance": "90000000000000000000000"\n      }\n    }\n  },\n  "blockchain": {\n    "nodes": {\n      "generate": true,\n      "count": 4\n    }\n  }\n}\n')),(0,o.kt)("admonition",{title:"Security warning",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Don't use the accounts in the genesis file on Mainnet or any public network except for testing. The private keys display, which means the accounts are not secure.")),(0,o.kt)("h3",{id:"3-generate-node-keys-and-a-genesis-file"},"3. Generate node keys and a genesis file"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"Permissioned-Network")," directory, generate the node key and genesis file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"besu operator generate-blockchain-config --config-file=ibftConfigFile.json --to=networkFiles --private-key-file-name=key\n")),(0,o.kt)("p",null,"Besu creates the following in the ",(0,o.kt)("inlineCode",{parentName:"p"},"networkFiles")," directory:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"genesis.json")," - The genesis file including the ",(0,o.kt)("inlineCode",{parentName:"li"},"extraData")," property specifying the four nodes are validators."),(0,o.kt)("li",{parentName:"ul"},"A directory for each node named using the node address and containing the public and private key for each node.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"networkFiles/\n\u251c\u2500\u2500 genesis.json\n\u2514\u2500\u2500 keys\n    \u251c\u2500\u2500 0x438821c42b812fecdcea7fe8235806a412712fc0\n    \u2502\xa0\xa0 \u251c\u2500\u2500 key\n    \u2502\xa0\xa0 \u2514\u2500\u2500 key.pub\n    \u251c\u2500\u2500 0xca9c2dfa62f4589827c0dd7dcf48259aa29f22f5\n    \u2502\xa0\xa0 \u251c\u2500\u2500 key\n    \u2502\xa0\xa0 \u2514\u2500\u2500 key.pub\n    \u251c\u2500\u2500 0xcd5629bd37155608a0c9b28c4fd19310d53b3184\n    \u2502\xa0\xa0 \u251c\u2500\u2500 key\n    \u2502\xa0\xa0 \u2514\u2500\u2500 key.pub\n    \u2514\u2500\u2500 0xe96825c5ab8d145b9eeca1aba7ea3695e034911a\n        \u251c\u2500\u2500 key\n        \u2514\u2500\u2500 key.pub\n")),(0,o.kt)("h3",{id:"4-copy-the-genesis-file-to-the-permissioned-network-directory"},"4. Copy the genesis file to the Permissioned-Network directory"),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis.json")," file to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Permisssioned-Network")," directory."),(0,o.kt)("h3",{id:"5-copy-the-node-private-keys-to-the-node-directories"},"5. Copy the node private keys to the node directories"),(0,o.kt)("p",null,"For each node, copy the key files to the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," directory for that node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Permissioned-Network/\n\u251c\u2500\u2500 genesis.json\n\u251c\u2500\u2500 Node-1\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key.pub\n\u251c\u2500\u2500 Node-2\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key.pub\n\u251c\u2500\u2500 Node-3\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key.pub\n\u251c\u2500\u2500 Node-4\n\u2502   \u251c\u2500\u2500 data\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key.pub\n")),(0,o.kt)("h3",{id:"6-create-the-permissions-configuration-file"},"6. Create the permissions configuration file"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/development/private-networks/how-to/use-permissioning/local#permissions-configuration-file"},"permissions configuration file")," defines the nodes and accounts allowlists."),(0,o.kt)("p",null,"Copy the following permissions configuration to a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"permissions_config.toml")," and save a copy in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Node-1/data"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Node-2/data"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Node-3/data"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Node-4/data")," directories:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="permissions_config.toml"',title:'"permissions_config.toml"'},'accounts-allowlist=["0xfe3b557e8fb62b89f4916b721be55ceb828dbd73", "0x627306090abaB3A6e1400e9345bC60c78a8BEf57"]\n\nnodes-allowlist=[]\n')),(0,o.kt)("p",null,"The permissions configuration file includes the first two accounts from the genesis file."),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"/development/private-networks/reference/api/#perm_addnodestoallowlist"},(0,o.kt)("inlineCode",{parentName:"a"},"perm_addNodesToAllowlist"))," JSON-RPC API method to add permissioned nodes after starting the nodes."),(0,o.kt)("h3",{id:"7-start-node-1"},"7. Start Node-1"),(0,o.kt)("p",null,"Use the following command:"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{label:"MacOS",value:"tab1",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=../genesis.json --permissions-nodes-config-file-enabled --permissions-accounts-config-file-enabled --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*"\n'))),(0,o.kt)(i.Z,{label:"Windows",value:"tab2",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=..\\genesis.json --permissions-nodes-config-file-enabled --permissions-accounts-config-file-enabled --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*"\n')))),(0,o.kt)("p",null,"The command line allows you to enable:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Nodes and accounts permissions using ",(0,o.kt)("a",{parentName:"li",href:"/development/private-networks/reference/cli/options#permissions-nodes-config-file-enabled"},(0,o.kt)("inlineCode",{parentName:"a"},"--permissions-nodes-config-file-enabled"))," and ",(0,o.kt)("a",{parentName:"li",href:"/development/private-networks/reference/cli/options#permissions-accounts-config-file-enabled"},(0,o.kt)("inlineCode",{parentName:"a"},"--permissions-accounts-config-file-enabled")),"."),(0,o.kt)("li",{parentName:"ul"},"The JSON-RPC API using ",(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#rpc-http-enabled"},(0,o.kt)("inlineCode",{parentName:"a"},"--rpc-http-enabled")),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"ADMIN"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"ETH"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"NET"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"PERM"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"IBFT")," APIs using ",(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#rpc-http-api"},(0,o.kt)("inlineCode",{parentName:"a"},"--rpc-http-api")),"."),(0,o.kt)("li",{parentName:"ul"},"All-host access to the HTTP JSON-RPC API using ",(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#host-allowlist"},(0,o.kt)("inlineCode",{parentName:"a"},"--host-allowlist")),"."),(0,o.kt)("li",{parentName:"ul"},"All-domain access to the node through the HTTP JSON-RPC API using ",(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#rpc-http-cors-origins"},(0,o.kt)("inlineCode",{parentName:"a"},"--rpc-http-cors-origins")),".")),(0,o.kt)("p",null,"When the node starts, the ",(0,o.kt)("a",{parentName:"p",href:"/development/public-networks/concepts/node-keys#enode-url"},"enode URL")," displays. You need the enode URL to specify Node-1 as a peer and update the permissions configuration file in the following steps."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Node 1 Enode URL",src:n(72836).Z,width:"988",height:"126"})),(0,o.kt)("h3",{id:"8-start-node-2"},"8. Start Node-2"),(0,o.kt)("p",null,"Start another terminal, change to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Node-2")," directory, and start Node-2:"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{label:"MacOS",value:"tab1",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=../genesis.json --permissions-nodes-config-file-enabled --permissions-accounts-config-file-enabled --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*" --p2p-port=30304 --rpc-http-port=8546\n'))),(0,o.kt)(i.Z,{label:"Windows",value:"tab2",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=..\\genesis.json --permissions-nodes-config-file-enabled --permissions-accounts-config-file-enabled --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*" --p2p-port=30304 --rpc-http-port=8546\n')))),(0,o.kt)("p",null,"The command line specifies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A different port to Node-1 for P2P discovery using ",(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#p2p-port"},(0,o.kt)("inlineCode",{parentName:"a"},"--p2p-port")),"."),(0,o.kt)("li",{parentName:"ul"},"A different port to Node-1 for HTTP JSON-RPC using ",(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#rpc-http-port"},(0,o.kt)("inlineCode",{parentName:"a"},"--rpc-http-port")),"."),(0,o.kt)("li",{parentName:"ul"},"A data directory for Node-2 using ",(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#data-path"},(0,o.kt)("inlineCode",{parentName:"a"},"--data-path")),"."),(0,o.kt)("li",{parentName:"ul"},"Other options as for ",(0,o.kt)("a",{parentName:"li",href:"#7-start-node-1"},"Node-1"),".")),(0,o.kt)("p",null,"When the node starts, the ",(0,o.kt)("a",{parentName:"p",href:"/development/public-networks/concepts/node-keys#enode-url"},"enode URL")," displays. You need the enode URL to update the permissions configuration file in the following steps."),(0,o.kt)("h3",{id:"9-start-node-3"},"9. Start Node-3"),(0,o.kt)("p",null,"Start another terminal, change to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Node-3")," directory, and start Node-3:"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{label:"MacOS",value:"tab1",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=../genesis.json --permissions-nodes-config-file-enabled --permissions-accounts-config-file-enabled --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*" --p2p-port=30305 --rpc-http-port=8547\n'))),(0,o.kt)(i.Z,{label:"Windows",value:"tab2",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=..\\genesis.json --permissions-nodes-config-file-enabled --permissions-accounts-config-file-enabled --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*" --p2p-port=30305 --rpc-http-port=8547\n')))),(0,o.kt)("p",null,"The command line specifies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A different port to Node-1 and Node-2 for P2P discovery using ",(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#p2p-port"},(0,o.kt)("inlineCode",{parentName:"a"},"--p2p-port")),"."),(0,o.kt)("li",{parentName:"ul"},"A different port to Node-1 and Node-2 for HTTP JSON-RPC using ",(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#rpc-http-port"},(0,o.kt)("inlineCode",{parentName:"a"},"--rpc-http-port")),"."),(0,o.kt)("li",{parentName:"ul"},"A data directory for Node-3 using ",(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#data-path"},(0,o.kt)("inlineCode",{parentName:"a"},"--data-path")),"."),(0,o.kt)("li",{parentName:"ul"},"Other options as for ",(0,o.kt)("a",{parentName:"li",href:"#7-start-node-1"},"Node-1"),".")),(0,o.kt)("p",null,"When the node starts, the ",(0,o.kt)("a",{parentName:"p",href:"/development/public-networks/concepts/node-keys#enode-url"},"enode URL")," displays. You need the enode URL to update the permissions configuration file in the following steps."),(0,o.kt)("h3",{id:"10-start-node-4"},"10. Start Node-4"),(0,o.kt)("p",null,"Start another terminal, change to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Node-4")," directory, and start Node-4:"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{label:"MacOS",value:"tab1",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=../genesis.json --permissions-nodes-config-file-enabled --permissions-accounts-config-file-enabled --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*" --p2p-port=30306 --rpc-http-port=8548\n'))),(0,o.kt)(i.Z,{label:"Windows",value:"tab2",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=..\\genesis.json --permissions-nodes-config-file-enabled --permissions-accounts-config-file-enabled --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*" --p2p-port=30306 --rpc-http-port=8548\n')))),(0,o.kt)("p",null,"The command line specifies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A different port to Node-1, Node-2, and Node-3 for P2P discovery using ",(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#p2p-port"},(0,o.kt)("inlineCode",{parentName:"a"},"--p2p-port")),"."),(0,o.kt)("li",{parentName:"ul"},"A different port to Node-1, Node-2, and Node-3 for HTTP JSON-RPC using ",(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#rpc-http-port"},(0,o.kt)("inlineCode",{parentName:"a"},"--rpc-http-port")),"."),(0,o.kt)("li",{parentName:"ul"},"A data directory for Node-4 using ",(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#data-path"},(0,o.kt)("inlineCode",{parentName:"a"},"--data-path")),"."),(0,o.kt)("li",{parentName:"ul"},"Other options as for ",(0,o.kt)("a",{parentName:"li",href:"#7-start-node-1"},"Node-1"),".")),(0,o.kt)("p",null,"When the node starts, the ",(0,o.kt)("a",{parentName:"p",href:"/development/public-networks/concepts/node-keys#enode-url"},"enode URL")," displays. You need the enode URL to update the permissions configuration file in the following steps."),(0,o.kt)("h3",{id:"11-add-enode-urls-for-nodes-to-permissions-configuration-file"},"11. Add enode URLs for nodes to permissions configuration file"),(0,o.kt)("p",null,"Start another terminal and use the ",(0,o.kt)("a",{parentName:"p",href:"/development/private-networks/reference/api/#perm_addnodestoallowlist"},(0,o.kt)("inlineCode",{parentName:"a"},"perm_addNodesToAllowlist"))," JSON-RPC API method to add the nodes to the permissions configuration file for each node."),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<EnodeNode1>"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<EnodeNode2>"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<EnodeNode3>"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"<EnodeNode4>")," with the enode URL displayed when starting each node."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{label:"Node-1",value:"tab1",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"perm_addNodesToAllowlist","params":[["<EnodeNode1>","<EnodeNode2>","<EnodeNode3>","EnodeNode4"]], "id":1}\' http://127.0.0.1:8545\n'))),(0,o.kt)(i.Z,{label:"Node-2",value:"tab2",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"perm_addNodesToAllowlist","params":[["<EnodeNode1>","<EnodeNode2>","<EnodeNode3>","EnodeNode4"]], "id":1}\' http://127.0.0.1:8546\n'))),(0,o.kt)(i.Z,{label:"Node-3",value:"tab3",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"perm_addNodesToAllowlist","params":[["<EnodeNode1>","<EnodeNode2>","<EnodeNode3>","EnodeNode4"]], "id":1}\' http://127.0.0.1:8547\n'))),(0,o.kt)(i.Z,{label:"Node-4",value:"tab4",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"perm_addNodesToAllowlist","params":[["<EnodeNode1>","<EnodeNode2>","<EnodeNode3>","EnodeNode4"]], "id":1}\' http://127.0.0.1:8548\n')))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The curl call is the same for each node except for the JSON-RPC endpoint.")),(0,o.kt)("h3",{id:"12-add-nodes-as-peers"},"12. Add nodes as peers"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"/development/public-networks/reference/api/#admin_addpeer"},(0,o.kt)("inlineCode",{parentName:"a"},"admin_addPeer"))," JSON-RPC API method to add Node-1 as a peer for Node-2, Node-3, and Node-4."),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<EnodeNode1>")," with the enode URL displayed when starting Node-1."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{label:"Node-2",value:"tab1",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"admin_addPeer","params":["<EnodeNode1>"],"id":1}\' http://127.0.0.1:8546\n'))),(0,o.kt)(i.Z,{label:"Node-3",value:"tab2",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"admin_addPeer","params":["<EnodeNode1>"],"id":1}\' http://127.0.0.1:8547\n'))),(0,o.kt)(i.Z,{label:"Node-4",value:"tab3",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"admin_addPeer","params":["<EnodeNode1>"],"id":1}\' http://127.0.0.1:8548\n')))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The curl call is the same for each node except for the JSON-RPC endpoint.")),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<EnodeNode2>")," with the enode URL displayed when starting Node-2."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{label:"Node-3",value:"tab1",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"admin_addPeer","params":["<EnodeNode2>"],"id":1}\' http://127.0.0.1:8547\n'))),(0,o.kt)(i.Z,{label:"Node-4",value:"tab2",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"admin_addPeer","params":["<EnodeNode2>"],"id":1}\' http://127.0.0.1:8548\n')))),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<EnodeNode3>")," with the enode URL displayed when starting Node-3."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"admin_addPeer","params":["<EnodeNode3>"],"id":1}\' http://127.0.0.1:8548\n')),(0,o.kt)("h3",{id:"13-confirm-permissioned-network-is-working"},"13. Confirm permissioned network is working"),(0,o.kt)("h4",{id:"check-peer-count"},"Check peer count"),(0,o.kt)("p",null,"Use curl to call the JSON-RPC API ",(0,o.kt)("a",{parentName:"p",href:"/development/public-networks/reference/api/#net_peercount"},(0,o.kt)("inlineCode",{parentName:"a"},"net_peerCount"))," method and confirm the nodes are functioning as peers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":1}\' localhost:8545\n')),(0,o.kt)("p",null,"The result confirms Node-1 (the node running the JSON-RPC service) has three peers (Node-2, Node-3 and Node-4):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "0x3"\n}\n')),(0,o.kt)("h4",{id:"send-a-transaction-from-an-account-in-the-allowlist"},"Send a transaction from an account in the allowlist"),(0,o.kt)("p",null,"Import the first account from the genesis file into MetaMask and send transactions, as described in ","[Quickstart tutorial]",":"),(0,o.kt)("admonition",{title:"Account 1",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Address: ",(0,o.kt)("inlineCode",{parentName:"li"},"0xfe3b557e8fb62b89f4916b721be55ceb828dbd73")),(0,o.kt)("li",{parentName:"ul"},"Private key : ",(0,o.kt)("inlineCode",{parentName:"li"},"0x8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63")),(0,o.kt)("li",{parentName:"ul"},"Initial balance : ",(0,o.kt)("inlineCode",{parentName:"li"},"0xad78ebc5ac6200000")," (200000000000000000000 in decimal)"))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Besu doesn't support ",(0,o.kt)("a",{parentName:"p",href:"/development/public-networks/how-to/send-transactions"},"private key management"),".")),(0,o.kt)("h3",{id:"try-sending-a-transaction-from-an-account-not-in-the-accounts-allowlist"},"Try sending a transaction from an account not in the accounts allowlist"),(0,o.kt)("p",null,"Import the third account from the genesis file into MetaMask and try to send a transaction, as described in ","[Quickstart tutorial]",":"),(0,o.kt)("admonition",{title:"Account 3",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Address: ",(0,o.kt)("inlineCode",{parentName:"li"},"0xf17f52151EbEF6C7334FAD080c5704D77216b732")),(0,o.kt)("li",{parentName:"ul"},"Private key: ",(0,o.kt)("inlineCode",{parentName:"li"},"0xae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f")),(0,o.kt)("li",{parentName:"ul"},"Initial balance: ",(0,o.kt)("inlineCode",{parentName:"li"},"0x90000000000000000000000")," (2785365088392105618523029504 in decimal)"))),(0,o.kt)("h3",{id:"start-a-node-not-on-the-nodes-allowlist"},"Start a node not on the nodes allowlist"),(0,o.kt)("p",null,"In your ",(0,o.kt)("inlineCode",{parentName:"p"},"Permissioned-Network")," directory, create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Node-5")," directory and ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," directory inside it."),(0,o.kt)("p",null,"Change to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Node-5")," directory and start Node-5 specifying the Node-1 enode URL as the bootnode:"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{label:"MacOS",value:"tab1",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --bootnodes="<EnodeNode1>" --genesis-file=../genesis.json --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*" --p2p-port=30307 --rpc-http-port=8549\n'))),(0,o.kt)(i.Z,{label:"Windows",value:"tab2",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --bootnodes="<EnodeNode1>" --genesis-file=..\\genesis.json --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*" --p2p-port=30307 --rpc-http-port=8549\n')))),(0,o.kt)("p",null,"Start another terminal and use curl to call the JSON-RPC API ",(0,o.kt)("a",{parentName:"p",href:"/development/public-networks/reference/api/#net_peercount"},(0,o.kt)("inlineCode",{parentName:"a"},"net_peerCount"))," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":1}\' localhost:8549\n')),(0,o.kt)("p",null,"The result confirms Node-5 has no peers even though it specifies Node-1 as a bootnode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "0x0"\n}\n')),(0,o.kt)("h2",{id:"stop-nodes"},"Stop nodes"),(0,o.kt)("p",null,"When finished using the permissioned network, stop all nodes using ++ctrl+c++ in each terminal window."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To restart the permissioned network in the future, start from ",(0,o.kt)("a",{parentName:"p",href:"#7-start-node-1"},"step 7"),".")))}m.isMDXComponent=!0},72836:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/EnodeStartup-145939e1c789c28e464db82faa0fb3ca.png"}}]);