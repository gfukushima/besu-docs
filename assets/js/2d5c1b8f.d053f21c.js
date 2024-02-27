"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[50485],{42179:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=i(85893),r=i(11151);const a={title:"Privacy plugin",description:"Privacy plugin",sidebar_position:5},s="Privacy plugin",o={id:"private-networks/concepts/privacy/plugin",title:"Privacy plugin",description:"Privacy plugin",source:"@site/versioned_docs/version-23.10.2/private-networks/concepts/privacy/plugin.md",sourceDirName:"private-networks/concepts/privacy",slug:"/private-networks/concepts/privacy/plugin",permalink:"/23.10.2/private-networks/concepts/privacy/plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.2/private-networks/concepts/privacy/plugin.md",tags:[],version:"23.10.2",lastUpdatedAt:1709013712,formattedLastUpdatedAt:"Feb 27, 2024",sidebarPosition:5,frontMatter:{title:"Privacy plugin",description:"Privacy plugin",sidebar_position:5},sidebar:"privateDocSidebar",previous:{title:"Multi-tenancy",permalink:"/23.10.2/private-networks/concepts/privacy/multi-tenancy"},next:{title:"Permissioning",permalink:"/23.10.2/private-networks/concepts/permissioning/"}},c={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Use the payload provider interface",id:"use-the-payload-provider-interface",level:2},{value:"Send transactions",id:"send-transactions",level:3},{value:"Mine transactions",id:"mine-transactions",level:3},{value:"Transaction factory",id:"transaction-factory",level:2},{value:"Register your plugin",id:"register-your-plugin",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"privacy-plugin",children:"Privacy plugin"}),"\n",(0,t.jsx)(n.p,{children:"You can define your own strategy for private transactions by building a plugin that extends Hyperledger Besu functionality."}),"\n",(0,t.jsx)(n.p,{children:"The plugin can take many forms, but it must provide Besu with a private transaction when required."}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"The privacy plugin is an early access feature and plugin interfaces are subject to change between releases."})}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Enable the privacy plugin by starting Besu and including the ",(0,t.jsx)(n.code,{children:"--Xprivacy-plugin-enabled"})," command line option. The registered plugin must implement the ",(0,t.jsx)(n.code,{children:"PrivacyPluginPayloadProvider"})," interface."]}),"\n",(0,t.jsx)(n.h2,{id:"use-the-payload-provider-interface",children:"Use the payload provider interface"}),"\n",(0,t.jsxs)(n.p,{children:["The privacy plugin must define the ",(0,t.jsx)(n.a,{href:"/23.10.2/private-networks/how-to/use-privacy/access-private-transactions",children:"privacy marker transaction (PMT)"})," payload. Use the payload to retrieve the contents of the private transaction which could be a link to a location in an enclave, or an encrypted form of the private payload itself."]}),"\n",(0,t.jsx)(n.p,{children:"Besu doesn't need to know how the private transaction is distributed, it just needs to know what the private transaction for the PMT is."}),"\n",(0,t.jsx)(n.h3,{id:"send-transactions",children:"Send transactions"}),"\n",(0,t.jsxs)(n.p,{children:["When submitting a private transaction using ",(0,t.jsx)(n.a,{href:"/23.10.2/public-networks/reference/api/#eea_sendrawtransaction",children:(0,t.jsx)(n.code,{children:"eea_sendRawTransaction"})}),", the signed transaction must be sent to ",(0,t.jsx)(n.code,{children:"0x000000000000000000000000000000000000007a"})," to indicate which ",(0,t.jsx)(n.a,{href:"/23.10.2/private-networks/concepts/privacy/private-transactions/processing",children:"privacy precompiled contract"})," is being used."]}),"\n",(0,t.jsx)(n.p,{children:"The transaction flow is as follows:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"The JSON-RPC endpoint passes the private transaction to the private transaction manager (for example Tessera)."}),"\n",(0,t.jsx)(n.li,{children:"The private transaction manager sends the private transaction to the privacy plugin."}),"\n",(0,t.jsx)(n.li,{children:"The plugin decides what data to store onchain in the payload, for example the encrypted and serialized private transaction."}),"\n",(0,t.jsx)(n.li,{children:"The plugin returns what needs to be stored in the payload for the PMT."}),"\n",(0,t.jsx)(n.li,{children:"The private transaction handler creates a PMT for the private transaction, and propagates the PMT using devP2P in the same way as a public Ethereum transaction."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"mine-transactions",children:"Mine transactions"}),"\n",(0,t.jsx)(n.p,{children:"The process of mining transactions happens in reverse to sending transactions."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The Mainnet transaction processor processes the PMT in the same way as any other public transaction. On nodes containing the ",(0,t.jsx)(n.a,{href:"/23.10.2/public-networks/reference/api/#priv_getprivacyprecompileaddress",children:"privacy precompile contract"})," specified in the ",(0,t.jsx)(n.code,{children:"to"})," attribute of the PMT, the Mainnet transaction processor passes the PMT to the privacy precompile contract."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Nodes receiving the PMT that do not contain the specified privacy precompile contract will ignore the PMT."})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The privacy precompile contract queries the plugin for the private transaction using the PMT."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The privacy precompile contract passes the private transaction to the private transaction manager. The privacy group ID specifies the private world state to use."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The private transaction manager executes the transaction. The private transaction manager can read and write to the private world state, and read from the public world state."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"transaction-factory",children:"Transaction factory"}),"\n",(0,t.jsx)(n.p,{children:"An additional extension is available to help you define how PMTs are signed. Currently, Besu supports fixed or random key signing for PMTs."}),"\n",(0,t.jsx)(n.p,{children:"The extension allows you to use a more dynamic approach, for example different keys for different groups."}),"\n",(0,t.jsxs)(n.p,{children:["Your plugin needs to register the ",(0,t.jsx)(n.code,{children:"PrivateMarkerTransactionFactory"})," interface which is called before submitting a PMT to the transaction pool. The responsibility then lies with the plugin to sign and serialize the PMT."]}),"\n",(0,t.jsx)(n.h2,{id:"register-your-plugin",children:"Register your plugin"}),"\n",(0,t.jsxs)(n.p,{children:["To enable Besu to use your privacy plugin, you must implement the ",(0,t.jsx)(n.code,{children:"PrivacyPluginService"})," interface and you must call ",(0,t.jsx)(n.code,{children:"setPayloadProvider"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"\n@AutoService(BesuPlugin.class)\npublic class TestPrivacyPlugin implements BesuPlugin {\n\n    private PrivacyPluginService service;\n\n    @Override\n    public void register(BesuContext context) {\n        service = context.getService(PrivacyPluginService.class).get();\n    }\n\n    @Override\n    public void start() {\n        service.setPayloadProvider(new PrivacyPluginPayloadProvider() {\n            @Override\n            public Bytes generateMarkerPayload(PrivateTransaction privateTransaction, String privacyUserId) {\n                // perform logic to serialize the payload of the marker transaction\n                // in this example we are serialising the private transaction using rlp https://ethereum.org/en/developers/docs/data-structures-and-encoding/rlp/\n                return org.hyperledger.besu.ethereum.privacy.PrivateTransaction.serialize(privateTransaction).encoded();\n            }\n\n            @Override\n            public Optional<PrivateTransaction> getPrivateTransactionFromPayload(Transaction transaction) {\n                // perform logic to deserialize payload from the marker transaction\n\n                final BytesValueRLPInput bytesValueRLPInput =\n                        new BytesValueRLPInput(transaction.getPayload(), false);\n\n                return Optional.of(org.hyperledger.besu.ethereum.privacy.PrivateTransaction.readFrom(bytesValueRLPInput));\n            }\n        });\n    }\n\n    @Override\n    public void stop() {\n\n    }\n}\n\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>s});var t=i(67294);const r={},a=t.createContext(r);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);