"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[67006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,f=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(f,s(s({ref:t},l),{},{components:n})):a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:r,s[1]=c;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},77371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={title:"Transfer account funds",sidebar_position:1,description:"funds transfer transactions",tags:["private networks"]},s="Transfer funds between accounts in a transaction",c={unversionedId:"private-networks/tutorials/contracts/transfer-funds",id:"version-23.4.1/private-networks/tutorials/contracts/transfer-funds",title:"Transfer account funds",description:"funds transfer transactions",source:"@site/versioned_docs/version-23.4.1/private-networks/tutorials/contracts/transfer-funds.md",sourceDirName:"private-networks/tutorials/contracts",slug:"/private-networks/tutorials/contracts/transfer-funds",permalink:"/23.4.1/private-networks/tutorials/contracts/transfer-funds",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/tutorials/contracts/transfer-funds.md",tags:[{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1694057512,formattedLastUpdatedAt:"Sep 7, 2023",sidebarPosition:1,frontMatter:{title:"Transfer account funds",sidebar_position:1,description:"funds transfer transactions",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Deploy a smart contract",permalink:"/23.4.1/private-networks/tutorials/contracts/"},next:{title:"Interact with a deployed contract",permalink:"/23.4.1/private-networks/tutorials/contracts/interact"}},i={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Use <code>eth_sendSignedTransaction</code>",id:"use-eth_sendsignedtransaction",level:2},{value:"Use <code>eth_sendTransaction</code>",id:"use-eth_sendtransaction",level:2}],l={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transfer-funds-between-accounts-in-a-transaction"},"Transfer funds between accounts in a transaction"),(0,r.kt)("p",null,"You can get started with the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.1/private-networks/tutorials/quickstart"},"Developer Quickstart")," to rapidly generate local blockchain networks."),(0,r.kt)("p",null,"This tutorial shows you how to transfer funds (ETH) between accounts in a transaction."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"/23.4.1/private-networks/tutorials/quickstart"},"private network"))),(0,r.kt)("h2",{id:"use-eth_sendsignedtransaction"},"Use ",(0,r.kt)("inlineCode",{parentName:"h2"},"eth_sendSignedTransaction")),(0,r.kt)("p",null,"The simplest way to transfer funds between externally-owned accounts is using ",(0,r.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/en/v1.2.11/web3-eth.html#sendsignedtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendSignedTransaction")),". This example uses ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_sendSignedTransaction")," and one of the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.1/private-networks/reference/accounts-for-testing"},"test accounts")," to transfer funds to a newly created account."),(0,r.kt)("admonition",{title:"Do not use the test accounts on Ethereum Mainnet or any production network",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"The private key is publicly displayed, which means the account is not secure.")),(0,r.kt)("p",null,"Before making the transaction, check the balances of both accounts to verify the funds transfer after the transaction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const web3 = new Web3(host);\n// Pre-seeded account with 90000 ETH\nconst privateKeyA =\n  "0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3";\nconst accountA = web3.eth.accounts.privateKeyToAccount(privateKeyA);\nvar accountABalance = web3.utils.fromWei(\n  await web3.eth.getBalance(accountA.address),\n);\nconsole.log("Account A has balance of: " + accountABalance);\n\n// Create a new account to transfer ETH to\nvar accountB = web3.eth.accounts.create();\nvar accountBBalance = web3.utils.fromWei(\n  await web3.eth.getBalance(accountB.address),\n);\nconsole.log("Account B has balance of: " + accountBBalance);\n')),(0,r.kt)("p",null,"Use the test account address (Account A) for the ",(0,r.kt)("inlineCode",{parentName:"p"},"from")," parameter, the recipient account address (Account B) for the ",(0,r.kt)("inlineCode",{parentName:"p"},"to")," parameter, and the amount of ETH to transfer between accounts for the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," parameter. Sign the transaction with Account A's private key and send it using ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_sendSignedTransaction"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Send some ETH from A to B\nconst rawTxOptions = {\n  nonce: web3.utils.numberToHex(\n    await web3.eth.getTransactionCount(accountA.address),\n  ),\n  from: accountA.address,\n  to: accountB.address,\n  value: "0x100", // Amount of ETH to transfer\n  gasPrice: "0x0", // ETH per unit of gas\n  gasLimit: "0x24A22", // Max number of gas units the tx is allowed to use\n};\nconsole.log("Creating transaction...");\nconst tx = new Tx(rawTxOptions);\nconsole.log("Signing transaction...");\ntx.sign(Buffer.from(accountA.privateKey.substring(2), "hex"));\nconsole.log("Sending transaction...");\nvar serializedTx = tx.serialize();\nconst pTx = await web3.eth.sendSignedTransaction(\n  "0x" + serializedTx.toString("hex").toString("hex"),\n);\nconsole.log("tx transactionHash: " + pTx.transactionHash);\n')),(0,r.kt)("p",null,"Once it completes, you can see the updated balances."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// After the transaction, there should be some ETH transferred\nvar accountABalance = await getAccountBalance(host, accountA);\nconsole.log("Account A has an updated balance of: " + accountABalance);\nvar accountBBalance = await getAccountBalance(host, accountB);\nconsole.log("Account B has an updatedbalance of: " + accountBBalance);\n}\n')),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/1e8cc281098923802845cd829ec20c88513c2e1c/files/besu/smart_contracts/privacy/scripts/eth_tx.js"},"full example")," can be found in the Developer Quickstart."),(0,r.kt)("h2",{id:"use-eth_sendtransaction"},"Use ",(0,r.kt)("inlineCode",{parentName:"h2"},"eth_sendTransaction")),(0,r.kt)("p",null,"An alternative to using ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_sendSignedTransaction")," is ",(0,r.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/en/v1.2.11/web3-eth.html#sendtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendTransaction")),". However, Hyperledger Besu does not support the ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_sendTransaction")," API call and keeps account management separate for stronger security. Instead, Besu uses ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ethsigner.consensys.net/en/stable/"},"EthSigner")," to make the ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_sendTransaction")," API call."),(0,r.kt)("p",null,"An example can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.1/private-networks/tutorials/quickstart"},"Developer Quickstart")," where the RPC node is paired with EthSigner. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ethsigner.consensys.net/en/stable/"},"EthSigner documentation")," configuration details."),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_sendTransaction")," similarly to ",(0,r.kt)("a",{parentName:"p",href:"#use-eth_sendsignedtransaction"},"using ",(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendSignedTransaction"))," (without the signing step which is done by EthSigner):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const web3 = new Web3(host);\n// Pre-seeded account with 90000 ETH\nconst privateKeyA = "0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3";\nconst accountA = web3.eth.accounts.privateKeyToAccount(privateKeyA);\nvar accountABalance = web3.utils.fromWei(await web3.eth.getBalance(accountA.address));\nconsole.log("Account A has balance of: " + accountABalance);\n\n// Create a new account to transfer ETH to\nvar accountB = web3.eth.accounts.create();\nvar accountBBalance = web3.utils.fromWei(await web3.eth.getBalance(accountB.address));\nconsole.log("Account B has balance of: " + accountBBalance);\n\n// Send some ETH from A to B\nconst txOptions = {\n  from: accountA.address,\n  to: accountB.address,\n  value: "0x100",  // Amount of ETH to transfer\n  gasPrice: "0x0", // ETH per unit of gas\n  gasLimit: "0x24A22" // Max number of gas units the tx is allowed to use\n};\nconsole.log("Creating transaction...");\nconst pTx = await web3.eth.sendTransaction(txOptions);\nconsole.log("tx transactionHash: " + pTx.transactionHash);\n\n// After the transaction, there should be some ETH transferred\nvar accountABalance = await getAccountBalance(host, accountA);\nconsole.log("Account A has an updated balance of: " + accountABalance);\nvar accountBBalance = await getAccountBalance(host, accountB);\nconsole.log("Account B has an updatedbalance of: " + accountBBalance);\n}\n')))}d.isMDXComponent=!0}}]);