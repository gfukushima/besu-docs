"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[2704],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),s=n(16550),l=n(91980),p=n(67392),d=n(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=u(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,p]=m({queryString:n,groupId:a}),[c,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=l??c;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),k(e)}),[p,k,o]),tabValues:o}}var f=n(72389);const b="tabList__CuJ",N="tabItem_LNqP";function g(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const t=e.currentTarget,n=d.indexOf(t),a=p[n].value;a!==s&&(c(t),l(a))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:h,onClick:u},i,{className:(0,o.Z)("tabs__item",N,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},45054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),i=n(85162);const s={title:"Create a Clique network",sidebar_position:4,description:"Create a private network using the Clique consensus protocol.",tags:["private networks"]},l="Create a private network using Clique",p={unversionedId:"private-networks/tutorials/clique",id:"private-networks/tutorials/clique",title:"Create a Clique network",description:"Create a private network using the Clique consensus protocol.",source:"@site/docs/private-networks/tutorials/clique.md",sourceDirName:"private-networks/tutorials",slug:"/private-networks/tutorials/clique",permalink:"/development/private-networks/tutorials/clique",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/tutorials/clique.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1694057512,formattedLastUpdatedAt:"Sep 7, 2023",sidebarPosition:4,frontMatter:{title:"Create a Clique network",sidebar_position:4,description:"Create a private network using the Clique consensus protocol.",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Add and removing IBFT 2.0 validators",permalink:"/development/private-networks/tutorials/ibft/validators"},next:{title:"Create an Ethash network",permalink:"/development/private-networks/tutorials/ethash"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create directories",id:"1-create-directories",level:3},{value:"2. Get the address for Node-1",id:"2-get-the-address-for-node-1",level:3},{value:"3. Create the genesis file",id:"3-create-the-genesis-file",level:3},{value:"4. Start the first node as the bootnode",id:"4-start-the-first-node-as-the-bootnode",level:3},{value:"5. Start Node-2",id:"5-start-node-2",level:3},{value:"6. Start Node-3",id:"6-start-node-3",level:3},{value:"7. Confirm the private network is working",id:"7-confirm-the-private-network-is-working",level:3},{value:"Next steps",id:"next-steps",level:2},{value:"Stop the nodes",id:"stop-the-nodes",level:2}],u={toc:c};function h(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-private-network-using-clique"},"Create a private network using Clique"),(0,r.kt)("p",null,"A private network provides a configurable network for testing. This private network uses the ",(0,r.kt)("a",{parentName:"p",href:"/development/private-networks/how-to/configure/consensus/clique"},"Clique (proof of authority) consensus protocol"),"."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"The steps in this tutorial create an isolated, but not protected or secure, Ethereum private network. We recommend running the private network behind a properly configured firewall.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/development/private-networks/get-started/install/binary-distribution"},"Hyperledger Besu")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://curl.haxx.se/download.html"},"Curl (or similar webservice client)"),".")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("p",null,"Listed on the right-hand side of the page are the steps to create a private network using Clique."),(0,r.kt)("h3",{id:"1-create-directories"},"1. Create directories"),(0,r.kt)("p",null,"Each node requires a data directory for the blockchain data. When the node starts, Besu saves the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/concepts/node-keys"},"node key")," in this directory."),(0,r.kt)("p",null,"Create directories for your private network, each of the three nodes, and a data directory for each node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Clique-Network/\n\u251c\u2500\u2500 Node-1\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u251c\u2500\u2500 Node-2\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2514\u2500\u2500 Node-3\n    \u251c\u2500\u2500 data\n")),(0,r.kt)("h3",{id:"2-get-the-address-for-node-1"},"2. Get the address for Node-1"),(0,r.kt)("p",null,"In Clique networks, you must include the address of at least one initial signer in the genesis file. For this Clique network, we'll use Node-1 as the initial signer. This requires obtaining the address for Node-1."),(0,r.kt)("p",null,"To get the address for Node-1, in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Node-1")," directory, use the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/subcommands#export-address"},(0,r.kt)("inlineCode",{parentName:"a"},"public-key export-address"))," subcommand to write the node address to the specified file (",(0,r.kt)("inlineCode",{parentName:"p"},"node1Address")," in this example)."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"MacOS",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu --data-path=data public-key export-address --to=data/node1Address\n"))),(0,r.kt)(i.Z,{label:"Windows",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu --data-path=data public-key export-address --to=data\\node1Address\n")))),(0,r.kt)("h3",{id:"3-create-the-genesis-file"},"3. Create the genesis file"),(0,r.kt)("p",null,"The genesis file defines the genesis block of the blockchain (that is, the start of the blockchain). The ",(0,r.kt)("a",{parentName:"p",href:"/development/private-networks/how-to/configure/consensus/clique#genesis-file"},"Clique genesis file")," includes the address of Node-1 as the initial signer in the ",(0,r.kt)("inlineCode",{parentName:"p"},"extraData")," field."),(0,r.kt)("p",null,"All nodes in a network must use the same genesis file."),(0,r.kt)("p",null,"Copy the following genesis definition to a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"cliqueGenesis.json")," and save it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Clique-Network")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "config": {\n    "chainId": 1337,\n    "berlinBlock": 0,\n    "clique": {\n      "blockperiodseconds": 15,\n      "epochlength": 30000\n    }\n  },\n  "coinbase": "0x0000000000000000000000000000000000000000",\n  "difficulty": "0x1",\n\n  "extraData": "0x0000000000000000000000000000000000000000000000000000000000000000<Node 1 Address>0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n  "gasLimit": "0xa00000",\n  "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",\n  "nonce": "0x0",\n  "timestamp": "0x5c51a607",\n  "alloc": {\n    "fe3b557e8fb62b89f4916b721be55ceb828dbd73": {\n      "privateKey": "8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63",\n      "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n      "balance": "0xad78ebc5ac6200000"\n    },\n    "627306090abaB3A6e1400e9345bC60c78a8BEf57": {\n      "privateKey": "c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3",\n      "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n      "balance": "90000000000000000000000"\n    },\n    "f17f52151EbEF6C7334FAD080c5704D77216b732": {\n      "privateKey": "ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f",\n      "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n      "balance": "90000000000000000000000"\n    }\n  }\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We recommend specifying the latest ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/genesis-items#milestone-blocks"},"milestone")," when creating the genesis file for a private network. This ensures you are using the most up-to-date protocol and have access to the most recent opcodes.")),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"extraData"),", replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<Node 1 Address>")," with the ",(0,r.kt)("a",{parentName:"p",href:"#2-get-the-address-for-node-1"},"address for Node-1"),", excluding the 0x prefix."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n"extraData":"0x0000000000000000000000000000000000000000000000000000000000000000b9b81ee349c3807e46bc71aa2632203c5b4620340000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n  ...\n}\n')),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Do not use the accounts in ",(0,r.kt)("inlineCode",{parentName:"p"},"alloc")," in the genesis file on Mainnet or any public network except for testing. The private keys display, which means the accounts are not secure.")),(0,r.kt)("h3",{id:"4-start-the-first-node-as-the-bootnode"},"4. Start the first node as the bootnode"),(0,r.kt)("p",null,"Start Node-1:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"MacOS",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=../cliqueGenesis.json --network-id 123 --rpc-http-enabled --rpc-http-api=ETH,NET,CLIQUE --host-allowlist="*" --rpc-http-cors-origins="all"\n'))),(0,r.kt)(i.Z,{label:"Windows",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=..\\cliqueGenesis.json --network-id 123 --rpc-http-enabled --rpc-http-api=ETH,NET,CLIQUE --host-allowlist="*" --rpc-http-cors-origins="all"\n')))),(0,r.kt)("p",null,"The command line enables:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The JSON-RPC API using the ",(0,r.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#rpc-http-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-enabled"))," option"),(0,r.kt)("li",{parentName:"ul"},"The ETH, NET, and CLIQUE APIs using the ",(0,r.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#rpc-http-api"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-api"))," option"),(0,r.kt)("li",{parentName:"ul"},"All-host access to the HTTP JSON-RPC API using the ",(0,r.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#host-allowlist"},(0,r.kt)("inlineCode",{parentName:"a"},"--host-allowlist"))," option"),(0,r.kt)("li",{parentName:"ul"},"All-domain access to the node through the HTTP JSON-RPC API using the ",(0,r.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#rpc-http-cors-origins"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-cors-origins"))," option")),(0,r.kt)("p",null,"When the node starts, the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/concepts/node-keys#enode-url"},"enode URL")," displays. Copy the enode URL to specify Node-1 as the bootnode in the following steps."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Node 1 Enode URL",src:n(72836).Z,width:"988",height:"126"})),(0,r.kt)("h3",{id:"5-start-node-2"},"5. Start Node-2"),(0,r.kt)("p",null,"Start another terminal, change to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Node-2")," directory and start Node-2 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"MacOS",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=../cliqueGenesis.json --bootnodes=<Node-1 Enode URL> --network-id 123 --p2p-port=30304 --rpc-http-enabled --rpc-http-api=ETH,NET,CLIQUE --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8546\n'))),(0,r.kt)(i.Z,{label:"Windows",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=..\\cliqueGenesis.json --bootnodes=<Node-1 Enode URL> --network-id 123 --p2p-port=30304 --rpc-http-enabled --rpc-http-api=ETH,NET,CLIQUE --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8546\n')))),(0,r.kt)("p",null,"The command line specifies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A different port to Node-1 for P2P discovery using the ",(0,r.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#p2p-port"},(0,r.kt)("inlineCode",{parentName:"a"},"--p2p-port"))," option."),(0,r.kt)("li",{parentName:"ul"},"A different port to Node-1 for HTTP JSON-RPC using the ",(0,r.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#rpc-http-port"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-port"))," option."),(0,r.kt)("li",{parentName:"ul"},"The enode URL of Node-1 using the ",(0,r.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#bootnodes"},(0,r.kt)("inlineCode",{parentName:"a"},"--bootnodes"))," option."),(0,r.kt)("li",{parentName:"ul"},"The data directory for Node-2 using the ",(0,r.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#data-path"},(0,r.kt)("inlineCode",{parentName:"a"},"--data-path"))," option."),(0,r.kt)("li",{parentName:"ul"},"Other options as for ",(0,r.kt)("a",{parentName:"li",href:"#4-start-the-first-node-as-the-bootnode"},"Node-1"),".")),(0,r.kt)("h3",{id:"6-start-node-3"},"6. Start Node-3"),(0,r.kt)("p",null,"Start another terminal, change to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Node-3")," directory and start Node-3 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"MacOS",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=../cliqueGenesis.json --bootnodes=<Node-1 Enode URL> --network-id 123 --p2p-port=30305 --rpc-http-enabled --rpc-http-api=ETH,NET,CLIQUE --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8547\n'))),(0,r.kt)(i.Z,{label:"Windows",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=..\\cliqueGenesis.json --bootnodes=<Node-1 Enode URL> --network-id 123 --p2p-port=30305 --rpc-http-enabled --rpc-http-api=ETH,NET,CLIQUE --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8547\n')))),(0,r.kt)("p",null,"The command line specifies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A different port to Node-1 and Node-2 for P2P discovery using the ",(0,r.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#p2p-port"},(0,r.kt)("inlineCode",{parentName:"a"},"--p2p-port"))," option."),(0,r.kt)("li",{parentName:"ul"},"A different port to Node-1 and Node-2 for HTTP JSON-RPC using the ",(0,r.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#rpc-http-port"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-port"))," option."),(0,r.kt)("li",{parentName:"ul"},"The data directory for Node-3 using the ",(0,r.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#data-path"},(0,r.kt)("inlineCode",{parentName:"a"},"--data-path"))," option."),(0,r.kt)("li",{parentName:"ul"},"The bootnode as for ",(0,r.kt)("a",{parentName:"li",href:"#5-start-node-2"},"Node-2"),"."),(0,r.kt)("li",{parentName:"ul"},"Other options as for ",(0,r.kt)("a",{parentName:"li",href:"#4-start-the-first-node-as-the-bootnode"},"Node-1"),".")),(0,r.kt)("h3",{id:"7-confirm-the-private-network-is-working"},"7. Confirm the private network is working"),(0,r.kt)("p",null,"Start another terminal, use curl to call the JSON-RPC API ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/api/#net_peercount"},(0,r.kt)("inlineCode",{parentName:"a"},"net_peerCount"))," method and confirm the nodes are functioning as peers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":1}\' localhost:8545\n')),(0,r.kt)("p",null,"The result confirms Node-1 has two peers (Node-2 and Node-3):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "0x2"\n}\n')),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"Look at the logs displayed to confirm Node-1 is producing blocks and Node-2 and Node-3 are importing blocks."),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"/development/private-networks/how-to/configure/consensus/clique#add-and-remove-signers"},"Clique API to add")," Node-2 or Node-3 as a signer."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To add Node-2 or Node-3 as a signer you need the ",(0,r.kt)("a",{parentName:"p",href:"#2-get-the-address-for-node-1"},"node address as when specifying Node-1")," as the initial signer.")),(0,r.kt)("p",null,"Import accounts to MetaMask and send transactions, as described in the ",(0,r.kt)("a",{parentName:"p",href:"/development/private-networks/tutorials/quickstart#create-a-transaction-using-metamask"},"Quickstart tutorial"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Besu doesn't support ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/how-to/send-transactions"},"private key management"),".")),(0,r.kt)("h2",{id:"stop-the-nodes"},"Stop the nodes"),(0,r.kt)("p",null,"When finished using the private network, stop all nodes using ++ctrl+c++ in each terminal window."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To restart the Clique network in the future, start from ",(0,r.kt)("a",{parentName:"p",href:"#4-start-the-first-node-as-the-bootnode"},"4. Start First Node as Bootnode"),".")))}h.isMDXComponent=!0},72836:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/EnodeStartup-145939e1c789c28e464db82faa0fb3ca.png"}}]);