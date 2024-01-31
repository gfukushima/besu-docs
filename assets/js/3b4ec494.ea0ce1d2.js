"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[98918],{2761:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(85893),o=r(11151),s=r(74866),a=r(85162);const i={title:"Use Sirato Explorer",sidebar_position:7,description:"Use Sirato Explorer on a privacy-enabled Besu network",tags:["private networks"]},l="Use Sirato Blockchain Explorer",c={id:"private-networks/how-to/monitor/sirato-explorer",title:"Use Sirato Explorer",description:"Use Sirato Explorer on a privacy-enabled Besu network",source:"@site/versioned_docs/version-23.4.1/private-networks/how-to/monitor/sirato-explorer.md",sourceDirName:"private-networks/how-to/monitor",slug:"/private-networks/how-to/monitor/sirato-explorer",permalink:"/23.4.1/private-networks/how-to/monitor/sirato-explorer",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/how-to/monitor/sirato-explorer.md",tags:[{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1706741450,formattedLastUpdatedAt:"Jan 31, 2024",sidebarPosition:7,frontMatter:{title:"Use Sirato Explorer",sidebar_position:7,description:"Use Sirato Explorer on a privacy-enabled Besu network",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use OpenTelemetry",permalink:"/23.4.1/private-networks/how-to/monitor/opentelemetry"},next:{title:"Use EEA-compliant privacy",permalink:"/23.4.1/private-networks/how-to/use-privacy/eea-compliant"}},d={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Start Sirato",id:"start-sirato",level:2},{value:"Use Sirato",id:"use-sirato",level:2},{value:"Stop Sirato",id:"stop-sirato",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"use-sirato-blockchain-explorer",children:"Use Sirato Blockchain Explorer"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.web3labs.com/sirato",children:"Sirato Blockchain Explorer"})," supports public and private EVM networks. This page describes how to use the free version of Sirato with its built-in support for ",(0,n.jsx)(t.a,{href:"/23.4.1/private-networks/concepts/privacy/",children:"privacy-enabled"})," Besu networks created using the ",(0,n.jsx)(t.a,{href:"/23.4.1/private-networks/tutorials/quickstart",children:"Developer Quickstart"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Sirato provides an overview of the entire network, including block information, contract metadata, transaction searches, and ",(0,n.jsx)(t.a,{href:"https://medium.com/web3labs/epirus-ethereum-saas-blockchain-explorer-d5d961717d15",children:"more"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["You must connect to one of the privacy nodes (for example, ",(0,n.jsx)(t.code,{children:"member1besu"}),"), not the dedicated RPC, in order to allow access for Besu ",(0,n.jsx)(t.a,{href:"/23.4.1/private-networks/reference/api/#priv-methods",children:"privacy API methods"}),". In production networks, you must ",(0,n.jsx)(t.a,{href:"/23.4.1/public-networks/how-to/use-besu-api/authenticate",children:"secure access"})," to RPC nodes."]})}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://docs.docker.com/compose/install/",children:"Docker and Docker Compose"})," installed."]}),"\n",(0,n.jsx)(t.h2,{id:"start-sirato",children:"Start Sirato"}),"\n",(0,n.jsxs)(t.p,{children:["Clone the ",(0,n.jsx)(t.a,{href:"https://github.com/web3labs/sirato-free",children:"Sirato GitHub repository"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/web3labs/sirato-free\n"})}),"\n",(0,n.jsx)(t.p,{children:"The repository contains Docker Compose scripts to allow Sirato to start with a Developer Quickstart test network."}),"\n",(0,n.jsx)(t.p,{children:"From the Sirato directory, run the following script:"}),"\n",(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(a.Z,{value:"Command",label:"Command",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"./start_sirato_besu.sh\n"})})}),(0,n.jsx)(a.Z,{value:"Result",label:"Result",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"*************************************\nSirator Explorer for Besu\n*************************************\nStarting explorer\n--------------------\n[+] Running 5/5\n  \u283f Container docker-compose-mongodb-1    Started                                                                                                                    3.3s\n  \u283f Container docker-compose-api-1        Started                                                                                                                    4.1s\n  \u283f Container docker-compose-ingestion-1  Started                                                                                                                    4.2s\n  \u283f Container docker-compose-web-1        Started                                                                                                                    4.4s\n  \u283f Container docker-compose-nginx-1      Started                                                                                                                    5.0s\n----------------------------------\nServices\n----------------------------------\nSirato explorer HTTP endpoint                 : http://localhost:260012\nSirato is connected to node                   : http://rpcnode:8545\n"})})})]}),"\n",(0,n.jsxs)(t.p,{children:["Open ",(0,n.jsx)(t.code,{children:"http://localhost/"})," on your browser. You\u2019ll see the new initialization page while it boots up. This may take 5\u201310 minutes for the all services to start and the ingestion sync to complete."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Sirato-dashboard",src:r(37229).Z+"",width:"2316",height:"1144"})}),"\n",(0,n.jsx)(t.h2,{id:"use-sirato",children:"Use Sirato"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Dashboard"})," page provides an aggregated view of network activities."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Epirus-dashboard",src:r(83298).Z+"",width:"2846",height:"1900"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Network"})," page provides an overview of the network status and connected peers. This page is disabled by default, and is only visible if you set ",(0,n.jsx)(t.code,{children:"DISPLAY_NETWOR_TAB=enabled"})," using the following command:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"NODE_ENDPOINT=http://member1besu:8545 DISPLAY_NETWORK_TAB=enabled docker-compose -f docker-compose.yml -f sirato-extensions/docker-compose-quorum-dev-quickstart.yml up\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Sirato network",src:r(49110).Z+"",width:"3106",height:"1944"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Blocks"})," page shows a real-time view of the finalized blocks."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Sirato blocks",src:r(71546).Z+"",width:"2904",height:"1854"})}),"\n",(0,n.jsx)(t.p,{children:"You can view a given block details by selecting a block hash or number."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Sirato block details",src:r(88588).Z+"",width:"2960",height:"1944"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Transactions"})," page shows a paginated view of new and historical transactions."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Sirato transactions",src:r(5130).Z+"",width:"2936",height:"1854"})}),"\n",(0,n.jsx)(t.h2,{id:"stop-sirato",children:"Stop Sirato"}),"\n",(0,n.jsx)(t.p,{children:"To stop all the services from running, run the following script:"}),"\n",(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(a.Z,{value:"Command",label:"Command",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"./stop.sh\n"})})}),(0,n.jsx)(a.Z,{value:"Result",label:"Result",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"*************************************\nSirator Explorer for Besu\n*************************************\nStopping explorer\n[+] Running 5/5\n  \u283f Container docker-compose-nginx-1      Stopped                                                                                                                    0.5s\n  \u283f Container docker-compose-ingestion-1  Stopped                                                                                                                    4.0s\n  \u283f Container docker-compose-web-1        Stopped                                                                                                                   10.3s\n  \u283f Container docker-compose-api-1        Stopped                                                                                                                    2.9s\n  \u283f Container docker-compose-mongodb-1    Stopped\n"})})})]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>a});r(67294);var n=r(36905);const o={tabItem:"tabItem_Ymn6"};var s=r(85893);function a(e){let{children:t,hidden:r,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,a),hidden:r,children:t})}},74866:(e,t,r)=>{r.d(t,{Z:()=>j});var n=r(67294),o=r(36905),s=r(12466),a=r(16550),i=r(20469),l=r(91980),c=r(67392),d=r(50012);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:o}}=e;return{value:t,label:r,attributes:n,default:o}}))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const o=(0,a.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(o.location.search);t.set(s,e),o.replace({...o.location,search:t.toString()})}),[s,o])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:o}=e,s=p(e),[a,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,u]=m({queryString:r,groupId:o}),[b,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,s]=(0,d.Nk)(r);return[o,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:o}),g=(()=>{const e=c??b;return h({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=r(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(85893);function v(e){let{className:t,block:r,selectedValue:n,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,r=l.indexOf(t),o=i[r].value;o!==n&&(c(t),a(o))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,o.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:o}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function k(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,o.Z)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...e,...t}),(0,x.jsx)(w,{...e,...t})]})}function j(e){const t=(0,f.Z)();return(0,x.jsx)(k,{...e,children:u(e.children)},String(t))}},88588:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sirato-block-details-4fe39667ff79ffe0115f5a48c0a8e294.png"},71546:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sirato-blocks-472b43066248113ec3f16c92ebc7e196.png"},83298:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sirato-dashboard-9171fbc2c387e54bea3707d0b8a2337e.png"},37229:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sirato-loading-b52fbd8dfeeeaef0a86f8af0cbf97052.png"},49110:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sirato-network-5929621eb2498f7eb4c162c465792700.png"},5130:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sirato-transactions-2c65c5f45b56e8fcad9ce2e639b3b459.png"},11151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>a});var n=r(67294);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);