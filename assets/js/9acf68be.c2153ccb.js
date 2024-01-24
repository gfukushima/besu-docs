"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[29895],{2159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>h});var r=n(85893),s=n(11151),i=n(74866),o=n(85162);const a={title:"Create a Clique network",sidebar_position:4,description:"Create a private network using the Clique consensus protocol.",tags:["private networks"]},l="Create a private network using Clique",d={id:"private-networks/tutorials/clique",title:"Create a Clique network",description:"Create a private network using the Clique consensus protocol.",source:"@site/versioned_docs/version-24.1.0/private-networks/tutorials/clique.md",sourceDirName:"private-networks/tutorials",slug:"/private-networks/tutorials/clique",permalink:"/private-networks/tutorials/clique",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.1.0/private-networks/tutorials/clique.md",tags:[{label:"private networks",permalink:"/tags/private-networks"}],version:"24.1.0",lastUpdatedAt:1706065193,formattedLastUpdatedAt:"Jan 24, 2024",sidebarPosition:4,frontMatter:{title:"Create a Clique network",sidebar_position:4,description:"Create a private network using the Clique consensus protocol.",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Add and removing IBFT 2.0 validators",permalink:"/private-networks/tutorials/ibft/validators"},next:{title:"Create an Ethash network",permalink:"/private-networks/tutorials/ethash"}},c={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create directories",id:"1-create-directories",level:3},{value:"2. Get the address for Node-1",id:"2-get-the-address-for-node-1",level:3},{value:"3. Create the genesis file",id:"3-create-the-genesis-file",level:3},{value:"4. Start the first node as the bootnode",id:"4-start-the-first-node-as-the-bootnode",level:3},{value:"5. Start Node-2",id:"5-start-node-2",level:3},{value:"6. Start Node-3",id:"6-start-node-3",level:3},{value:"7. Confirm the private network is working",id:"7-confirm-the-private-network-is-working",level:3},{value:"Next steps",id:"next-steps",level:2},{value:"Stop the nodes",id:"stop-the-nodes",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"create-a-private-network-using-clique",children:"Create a private network using Clique"}),"\n",(0,r.jsxs)(t.p,{children:["A private network provides a configurable network for testing. This private network uses the ",(0,r.jsx)(t.a,{href:"/private-networks/how-to/configure/consensus/clique",children:"Clique (proof of authority) consensus protocol"}),"."]}),"\n",(0,r.jsx)(t.admonition,{type:"danger",children:(0,r.jsx)(t.p,{children:"The steps in this tutorial create an isolated, but not protected or secure, Ethereum private network. We recommend running the private network behind a properly configured firewall."})}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/private-networks/get-started/install/binary-distribution",children:"Hyperledger Besu"})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://curl.haxx.se/download.html",children:"Curl (or similar webservice client)"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,r.jsx)(t.p,{children:"Listed on the right-hand side of the page are the steps to create a private network using Clique."}),"\n",(0,r.jsx)(t.h3,{id:"1-create-directories",children:"1. Create directories"}),"\n",(0,r.jsxs)(t.p,{children:["Each node requires a data directory for the blockchain data. When the node starts, Besu saves the ",(0,r.jsx)(t.a,{href:"/public-networks/concepts/node-keys",children:"node key"})," in this directory."]}),"\n",(0,r.jsx)(t.p,{children:"Create directories for your private network, each of the three nodes, and a data directory for each node:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"Clique-Network/\n\u251c\u2500\u2500 Node-1\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u251c\u2500\u2500 Node-2\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2514\u2500\u2500 Node-3\n    \u251c\u2500\u2500 data\n"})}),"\n",(0,r.jsx)(t.h3,{id:"2-get-the-address-for-node-1",children:"2. Get the address for Node-1"}),"\n",(0,r.jsx)(t.p,{children:"In Clique networks, you must include the address of at least one initial signer in the genesis file. For this Clique network, we'll use Node-1 as the initial signer. This requires obtaining the address for Node-1."}),"\n",(0,r.jsxs)(t.p,{children:["To get the address for Node-1, in the ",(0,r.jsx)(t.code,{children:"Node-1"})," directory, use the ",(0,r.jsx)(t.a,{href:"/public-networks/reference/cli/subcommands#export-address",children:(0,r.jsx)(t.code,{children:"public-key export-address"})})," subcommand to write the node address to the specified file (",(0,r.jsx)(t.code,{children:"node1Address"})," in this example)."]}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(o.Z,{value:"MacOS",label:"MacOS",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"besu --data-path=data public-key export-address --to=data/node1Address\n"})})}),(0,r.jsx)(o.Z,{value:"Windows",label:"Windows",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"besu --data-path=data public-key export-address --to=data\\node1Address\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"3-create-the-genesis-file",children:"3. Create the genesis file"}),"\n",(0,r.jsxs)(t.p,{children:["The genesis file defines the genesis block of the blockchain (that is, the start of the blockchain). The ",(0,r.jsx)(t.a,{href:"/private-networks/how-to/configure/consensus/clique#genesis-file",children:"Clique genesis file"})," includes the address of Node-1 as the initial signer in the ",(0,r.jsx)(t.code,{children:"extraData"})," field."]}),"\n",(0,r.jsx)(t.p,{children:"All nodes in a network must use the same genesis file."}),"\n",(0,r.jsxs)(t.p,{children:["Copy the following genesis definition to a file called ",(0,r.jsx)(t.code,{children:"cliqueGenesis.json"})," and save it in the ",(0,r.jsx)(t.code,{children:"Clique-Network"})," directory:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "config": {\n    "chainId": 1337,\n    "berlinBlock": 0,\n    "clique": {\n      "blockperiodseconds": 15,\n      "epochlength": 30000\n    }\n  },\n  "coinbase": "0x0000000000000000000000000000000000000000",\n  "difficulty": "0x1",\n\n  "extraData": "0x0000000000000000000000000000000000000000000000000000000000000000<Node 1 Address>0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n  "gasLimit": "0xa00000",\n  "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",\n  "nonce": "0x0",\n  "timestamp": "0x5c51a607",\n  "alloc": {\n    "fe3b557e8fb62b89f4916b721be55ceb828dbd73": {\n      "privateKey": "8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63",\n      "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n      "balance": "0xad78ebc5ac6200000"\n    },\n    "627306090abaB3A6e1400e9345bC60c78a8BEf57": {\n      "privateKey": "c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3",\n      "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n      "balance": "90000000000000000000000"\n    },\n    "f17f52151EbEF6C7334FAD080c5704D77216b732": {\n      "privateKey": "ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f",\n      "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n      "balance": "90000000000000000000000"\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["We recommend specifying the latest ",(0,r.jsx)(t.a,{href:"/public-networks/reference/genesis-items#milestone-blocks",children:"milestone"})," when creating the genesis file for a private network. This ensures you are using the most up-to-date protocol and have access to the most recent opcodes."]})}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.code,{children:"extraData"}),", replace ",(0,r.jsx)(t.code,{children:"<Node 1 Address>"})," with the ",(0,r.jsx)(t.a,{href:"#2-get-the-address-for-node-1",children:"address for Node-1"}),", excluding the 0x prefix."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  ...\n"extraData":"0x0000000000000000000000000000000000000000000000000000000000000000b9b81ee349c3807e46bc71aa2632203c5b4620340000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n  ...\n}\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["Do not use the accounts in ",(0,r.jsx)(t.code,{children:"alloc"})," in the genesis file on Mainnet or any public network except for testing. The private keys display, which means the accounts are not secure."]})}),"\n",(0,r.jsx)(t.h3,{id:"4-start-the-first-node-as-the-bootnode",children:"4. Start the first node as the bootnode"}),"\n",(0,r.jsx)(t.p,{children:"Start Node-1:"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(o.Z,{value:"MacOS",label:"MacOS",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../cliqueGenesis.json --network-id 123 --rpc-http-enabled --rpc-http-api=ETH,NET,CLIQUE --host-allowlist="*" --rpc-http-cors-origins="all"\n'})})}),(0,r.jsx)(o.Z,{value:"Windows",label:"Windows",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\cliqueGenesis.json --network-id 123 --rpc-http-enabled --rpc-http-api=ETH,NET,CLIQUE --host-allowlist="*" --rpc-http-cors-origins="all"\n'})})})]}),"\n",(0,r.jsx)(t.p,{children:"The command line enables:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The JSON-RPC API using the ",(0,r.jsx)(t.a,{href:"/public-networks/reference/cli/options#rpc-http-enabled",children:(0,r.jsx)(t.code,{children:"--rpc-http-enabled"})})," option"]}),"\n",(0,r.jsxs)(t.li,{children:["The ETH, NET, and CLIQUE APIs using the ",(0,r.jsx)(t.a,{href:"/public-networks/reference/cli/options#rpc-http-api",children:(0,r.jsx)(t.code,{children:"--rpc-http-api"})})," option"]}),"\n",(0,r.jsxs)(t.li,{children:["All-host access to the HTTP JSON-RPC API using the ",(0,r.jsx)(t.a,{href:"/public-networks/reference/cli/options#host-allowlist",children:(0,r.jsx)(t.code,{children:"--host-allowlist"})})," option"]}),"\n",(0,r.jsxs)(t.li,{children:["All-domain access to the node through the HTTP JSON-RPC API using the ",(0,r.jsx)(t.a,{href:"/public-networks/reference/cli/options#rpc-http-cors-origins",children:(0,r.jsx)(t.code,{children:"--rpc-http-cors-origins"})})," option"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["When the node starts, the ",(0,r.jsx)(t.a,{href:"/public-networks/concepts/node-keys#enode-url",children:"enode URL"})," displays. Copy the enode URL to specify Node-1 as the bootnode in the following steps."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Node 1 Enode URL",src:n(83612).Z+"",width:"988",height:"126"})}),"\n",(0,r.jsx)(t.h3,{id:"5-start-node-2",children:"5. Start Node-2"}),"\n",(0,r.jsxs)(t.p,{children:["Start another terminal, change to the ",(0,r.jsx)(t.code,{children:"Node-2"})," directory and start Node-2 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"]}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(o.Z,{value:"MacOS",label:"MacOS",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../cliqueGenesis.json --bootnodes=<Node-1 Enode URL> --network-id 123 --p2p-port=30304 --rpc-http-enabled --rpc-http-api=ETH,NET,CLIQUE --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8546\n'})})}),(0,r.jsx)(o.Z,{value:"Windows",label:"Windows",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\cliqueGenesis.json --bootnodes=<Node-1 Enode URL> --network-id 123 --p2p-port=30304 --rpc-http-enabled --rpc-http-api=ETH,NET,CLIQUE --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8546\n'})})})]}),"\n",(0,r.jsx)(t.p,{children:"The command line specifies:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["A different port to Node-1 for P2P discovery using the ",(0,r.jsx)(t.a,{href:"/public-networks/reference/cli/options#p2p-port",children:(0,r.jsx)(t.code,{children:"--p2p-port"})})," option."]}),"\n",(0,r.jsxs)(t.li,{children:["A different port to Node-1 for HTTP JSON-RPC using the ",(0,r.jsx)(t.a,{href:"/public-networks/reference/cli/options#rpc-http-port",children:(0,r.jsx)(t.code,{children:"--rpc-http-port"})})," option."]}),"\n",(0,r.jsxs)(t.li,{children:["The enode URL of Node-1 using the ",(0,r.jsx)(t.a,{href:"/public-networks/reference/cli/options#bootnodes",children:(0,r.jsx)(t.code,{children:"--bootnodes"})})," option."]}),"\n",(0,r.jsxs)(t.li,{children:["The data directory for Node-2 using the ",(0,r.jsx)(t.a,{href:"/public-networks/reference/cli/options#data-path",children:(0,r.jsx)(t.code,{children:"--data-path"})})," option."]}),"\n",(0,r.jsxs)(t.li,{children:["Other options as for ",(0,r.jsx)(t.a,{href:"#4-start-the-first-node-as-the-bootnode",children:"Node-1"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"6-start-node-3",children:"6. Start Node-3"}),"\n",(0,r.jsxs)(t.p,{children:["Start another terminal, change to the ",(0,r.jsx)(t.code,{children:"Node-3"})," directory and start Node-3 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"]}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(o.Z,{value:"MacOS",label:"MacOS",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../cliqueGenesis.json --bootnodes=<Node-1 Enode URL> --network-id 123 --p2p-port=30305 --rpc-http-enabled --rpc-http-api=ETH,NET,CLIQUE --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8547\n'})})}),(0,r.jsx)(o.Z,{value:"Windows",label:"Windows",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\cliqueGenesis.json --bootnodes=<Node-1 Enode URL> --network-id 123 --p2p-port=30305 --rpc-http-enabled --rpc-http-api=ETH,NET,CLIQUE --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8547\n'})})})]}),"\n",(0,r.jsx)(t.p,{children:"The command line specifies:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["A different port to Node-1 and Node-2 for P2P discovery using the ",(0,r.jsx)(t.a,{href:"/public-networks/reference/cli/options#p2p-port",children:(0,r.jsx)(t.code,{children:"--p2p-port"})})," option."]}),"\n",(0,r.jsxs)(t.li,{children:["A different port to Node-1 and Node-2 for HTTP JSON-RPC using the ",(0,r.jsx)(t.a,{href:"/public-networks/reference/cli/options#rpc-http-port",children:(0,r.jsx)(t.code,{children:"--rpc-http-port"})})," option."]}),"\n",(0,r.jsxs)(t.li,{children:["The data directory for Node-3 using the ",(0,r.jsx)(t.a,{href:"/public-networks/reference/cli/options#data-path",children:(0,r.jsx)(t.code,{children:"--data-path"})})," option."]}),"\n",(0,r.jsxs)(t.li,{children:["The bootnode as for ",(0,r.jsx)(t.a,{href:"#5-start-node-2",children:"Node-2"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Other options as for ",(0,r.jsx)(t.a,{href:"#4-start-the-first-node-as-the-bootnode",children:"Node-1"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"7-confirm-the-private-network-is-working",children:"7. Confirm the private network is working"}),"\n",(0,r.jsxs)(t.p,{children:["Start another terminal, use curl to call the JSON-RPC API ",(0,r.jsx)(t.a,{href:"/public-networks/reference/api/#net_peercount",children:(0,r.jsx)(t.code,{children:"net_peerCount"})})," method and confirm the nodes are functioning as peers:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":1}\' localhost:8545\n'})}),"\n",(0,r.jsx)(t.p,{children:"The result confirms Node-1 has two peers (Node-2 and Node-3):"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "0x2"\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,r.jsx)(t.p,{children:"Look at the logs displayed to confirm Node-1 is producing blocks and Node-2 and Node-3 are importing blocks."}),"\n",(0,r.jsxs)(t.p,{children:["Use the ",(0,r.jsx)(t.a,{href:"/private-networks/how-to/configure/consensus/clique#add-and-remove-signers",children:"Clique API to add"})," Node-2 or Node-3 as a signer."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["To add Node-2 or Node-3 as a signer you need the ",(0,r.jsx)(t.a,{href:"#2-get-the-address-for-node-1",children:"node address as when specifying Node-1"})," as the initial signer."]})}),"\n",(0,r.jsxs)(t.p,{children:["Import accounts to MetaMask and send transactions, as described in the ",(0,r.jsx)(t.a,{href:"/private-networks/tutorials/quickstart#create-a-transaction-using-metamask",children:"Quickstart tutorial"}),"."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Besu doesn't support ",(0,r.jsx)(t.a,{href:"/public-networks/how-to/send-transactions",children:"private key management"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"stop-the-nodes",children:"Stop the nodes"}),"\n",(0,r.jsx)(t.p,{children:"When finished using the private network, stop all nodes using ++ctrl+c++ in each terminal window."}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["To restart the Clique network in the future, start from ",(0,r.jsx)(t.a,{href:"#4-start-the-first-node-as-the-bootnode",children:"4. Start First Node as Bootnode"}),"."]})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var r=n(36905);const s={tabItem:"tabItem_Ymn6"};var i=n(85893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(67294),s=n(36905),i=n(12466),o=n(16550),a=n(20469),l=n(91980),d=n(67392),c=n(50012);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[d,h]=f({queryString:n,groupId:s}),[x,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,c.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),j=(()=>{const e=d??x;return u({value:e,tabValues:i})?e:null})();(0,a.Z)((()=>{j&&l(j)}),[j]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),b(e)}),[h,b,i]),tabValues:i}}var b=n(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function m(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),s=a[n].value;s!==r&&(d(t),o(s))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:h,onClick:c,...i,className:(0,s.Z)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=x(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",j.tabList),children:[(0,g.jsx)(m,{...e,...t}),(0,g.jsx)(v,{...e,...t})]})}function k(e){const t=(0,b.Z)();return(0,g.jsx)(w,{...e,children:h(e.children)},String(t))}},83612:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/EnodeStartup-145939e1c789c28e464db82faa0fb3ca.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var r=n(67294);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);