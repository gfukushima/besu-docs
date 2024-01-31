"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[15626],{30979:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=r(85893),s=r(11151);const o={title:"Using the Quorum Explorer",sidebar_position:4,description:"Using the Quorum Explorer on a Kubernetes cluster",tags:["private networks"]},i="Use the Quorum Explorer",a={id:"private-networks/tutorials/kubernetes/quorum-explorer",title:"Using the Quorum Explorer",description:"Using the Quorum Explorer on a Kubernetes cluster",source:"@site/versioned_docs/version-23.4.1/private-networks/tutorials/kubernetes/quorum-explorer.md",sourceDirName:"private-networks/tutorials/kubernetes",slug:"/private-networks/tutorials/kubernetes/quorum-explorer",permalink:"/23.4.1/private-networks/tutorials/kubernetes/quorum-explorer",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/tutorials/kubernetes/quorum-explorer.md",tags:[{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1706741450,formattedLastUpdatedAt:"Jan 31, 2024",sidebarPosition:4,frontMatter:{title:"Using the Quorum Explorer",sidebar_position:4,description:"Using the Quorum Explorer on a Kubernetes cluster",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Deploying Charts",permalink:"/23.4.1/private-networks/tutorials/kubernetes/charts"},next:{title:"Maintenance",permalink:"/23.4.1/private-networks/tutorials/kubernetes/maintenance"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploy the Quorum Explorer helm chart",id:"deploy-the-quorum-explorer-helm-chart",level:2},{value:"Nodes",id:"nodes",level:2},{value:"Validators",id:"validators",level:2},{value:"Explorer",id:"explorer",level:2},{value:"Contracts",id:"contracts",level:2},{value:"Wallet",id:"wallet",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"use-the-quorum-explorer",children:"Use the Quorum Explorer"}),"\n",(0,n.jsx)(t.p,{children:"You can use the Quorum Explorer on a Kubernetes cluster."}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Clone the ",(0,n.jsx)(t.a,{href:"https://github.com/ConsenSys/quorum-kubernetes",children:"Quorum-Kubernetes"})," repository"]}),"\n",(0,n.jsxs)(t.li,{children:["A ",(0,n.jsx)(t.a,{href:"/23.4.1/private-networks/tutorials/kubernetes/cluster",children:"running Kubernetes cluster"})]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://kubernetes.io/docs/tasks/tools/",children:"Kubectl"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://helm.sh/docs/intro/install/",children:"Helm3"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/23.4.1/private-networks/tutorials/kubernetes/charts",children:"Existing network"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"deploy-the-quorum-explorer-helm-chart",children:"Deploy the Quorum Explorer helm chart"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/ConsenSys/quorum-explorer",children:"Quorum-Explorer"})," as a lightweight blockchain explorer. The Quorum Explorer is ",(0,n.jsx)(t.strong,{children:"not"})," recommended for use in production and is intended for demonstration or development purposes only."]}),"\n",(0,n.jsxs)(t.p,{children:["The explorer can provide an overview over the whole network, such as block information, voting or removing validators from the network, and demonstrates using the ",(0,n.jsx)(t.code,{children:"SimpleStorage"})," smart contract with privacy enabled, and sending transactions between wallets in one interface."]}),"\n",(0,n.jsxs)(t.p,{children:["To use the explorer, update the ",(0,n.jsx)(t.a,{href:"https://github.com/ConsenSys/quorum-kubernetes/blob/5920caff6dd15b4ca17f760ad9e4d7d2e43b41a1/helm/values/explorer-besu.yaml",children:"Quorum-Explorer values file"})," with your node details and endpoints, and then ",(0,n.jsx)(t.a,{href:"/23.4.1/private-networks/tutorials/kubernetes/charts",children:"deploy"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"nodes",children:"Nodes"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Nodes"})," page provides an overview of the nodes on the network. Select the node you would like to interact with from the drop-down on the top right, and you'll get details of the node, block height, peers, queued transactions etc."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"k8s-explorer",src:r(42840).Z+"",width:"1917",height:"944"})}),"\n",(0,n.jsx)(t.h2,{id:"validators",children:"Validators"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Validators"})," page simulates a production environment or consortium where each node individually runs API calls to vote to add a validator or remove an existing validator."]}),"\n",(0,n.jsx)(t.p,{children:"When using the buttons to remove, discard pending validators, or proposing a validator, the app sends an API request to the selected node in the drop-down only. To add or remove a validator you need to select a majority of the existing validator pool individually, and perform the vote API call by clicking the button. Each node can call a discard on the voting process during or after the validator has been added."}),"\n",(0,n.jsx)(t.p,{children:"The vote calls made from non-validator nodes have no effect on overall consensus."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"k8s-explorer-validators",src:r(45712).Z+"",width:"1896",height:"887"})}),"\n",(0,n.jsx)(t.h2,{id:"explorer",children:"Explorer"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Explorer"})," page gives you the latest blocks from the chain and the latest transactions as they occur on the network. In addition, you can search by block number or transaction hash using the respective search bar."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"k8s-explorer-explorer",src:r(8221).Z+"",width:"1901",height:"889"})}),"\n",(0,n.jsx)(t.h2,{id:"contracts",children:"Contracts"}),"\n",(0,n.jsxs)(t.p,{children:["Use the ",(0,n.jsx)(t.strong,{children:"Contracts"})," page to compile and deploy a smart contract. Currently, the only contract available for deployment through the app is the ",(0,n.jsx)(t.code,{children:"SimpleStorage"})," contract. However, in time, we plan to add more contracts to that view."]}),"\n",(0,n.jsxs)(t.p,{children:["In this example, we deploy from ",(0,n.jsx)(t.code,{children:"member-1"})," and select ",(0,n.jsx)(t.code,{children:"member-1"})," and ",(0,n.jsx)(t.code,{children:"member-3"})," in the ",(0,n.jsx)(t.strong,{children:"Private For"})," multi-select. Then click on ",(0,n.jsx)(t.code,{children:"Compile"})," and ",(0,n.jsx)(t.code,{children:"Deploy"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"k8s-explorer-contracts-1",src:r(31262).Z+"",width:"1890",height:"891"})}),"\n",(0,n.jsxs)(t.p,{children:["Once deployed, you can interact with the contract. As this is a new transaction, select ",(0,n.jsx)(t.code,{children:"member-1"})," and ",(0,n.jsx)(t.code,{children:"member-3"})," in ",(0,n.jsx)(t.strong,{children:"Interact"})," multi-select, and then click on the appropriate method call to ",(0,n.jsx)(t.code,{children:"get"})," or ",(0,n.jsx)(t.code,{children:"set"})," the value at the deployed contract address."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"k8s-explorer-contracts-set",src:r(4795).Z+"",width:"1899",height:"1042"})}),"\n",(0,n.jsxs)(t.p,{children:["To test the private transaction functionality, select ",(0,n.jsx)(t.code,{children:"member-2"})," from the drop-down on the top right, you'll notice that you are unable to interact with the contract because ",(0,n.jsx)(t.code,{children:"member-2"})," was not part of the transaction. Only ",(0,n.jsx)(t.code,{children:"members-1"})," and ",(0,n.jsx)(t.code,{children:"member-3"})," responds correctly."]}),"\n",(0,n.jsx)(t.h2,{id:"wallet",children:"Wallet"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Wallet"})," page gives you the functionality to send simple ETH transactions between accounts by providing the account's private key, the recipient's address, and transfer amount in Wei."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"k8s-explorer-wallet",src:r(92927).Z+"",width:"1918",height:"891"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},31262:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kubernetes-explorer-contracts-1-01181eb965e9c78057dc930f48fa2090.png"},4795:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kubernetes-explorer-contracts-set-dbfe4f65b418999410a999147d16df19.png"},8221:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kubernetes-explorer-explorer-443ae4a27618574d082103bcaa740065.png"},45712:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kubernetes-explorer-validators-5bd265d7bd401c159b2852dc84533ecf.png"},92927:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kubernetes-explorer-wallet-e14f1a64b75ae0b133d676ccee8f2ec0.png"},42840:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kubernetes-explorer-41af1feb005383ef1871e47d4792c3b5.png"},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>i});var n=r(67294);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);