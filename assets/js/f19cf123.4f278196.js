"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[48194],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||n;return r?a.createElement(b,s(s({ref:t},p),{},{components:r})):a.createElement(b,s({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<n;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(67294),o=r(86010);const n="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(n,s),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>S});var a=r(87462),o=r(67294),n=r(86010),s=r(12466),i=r(16550),l=r(91980),c=r(67392),p=r(50012);function u(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:o}}=e;return{value:t,label:r,attributes:a,default:o}}))}function d(e){const{values:t,children:r}=e;return(0,o.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(n),(0,o.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(a.location.search);t.set(n,e),a.replace({...a.location,search:t.toString()})}),[n,a])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,n=d(e),[s,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:n}))),[l,c]=b({queryString:r,groupId:a}),[u,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,n]=(0,p.Nk)(r);return[a,(0,o.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:a}),f=(()=>{const e=l??u;return m({value:e,tabValues:n})?e:null})();(0,o.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,n]),tabValues:n}}var f=r(72389);const k="tabList__CuJ",g="tabItem_LNqP";function v(e){let{className:t,block:r,selectedValue:i,selectValue:l,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),d=e=>{const t=e.currentTarget,r=p.indexOf(t),a=c[r].value;a!==i&&(u(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},s,{className:(0,n.Z)("tabs__item",g,s?.className,{"tabs__item--active":i===t})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:a}=e;const n=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=h(e);return o.createElement("div",{className:(0,n.Z)("tabs-container",k)},o.createElement(v,(0,a.Z)({},e,t)),o.createElement(w,(0,a.Z)({},e,t)))}function S(e){const t=(0,f.Z)();return o.createElement(y,(0,a.Z)({key:String(t)},e))}},51972:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=r(87462),o=(r(67294),r(3905)),n=r(74866),s=r(85162);const i={title:"Use Sirato Explorer",sidebar_position:7,description:"Use Sirato Explorer on a privacy-enabled Besu network"},l="Use Sirato Blockchain Explorer",c={unversionedId:"private-networks/how-to/monitor/sirato-explorer",id:"version-23.4.0/private-networks/how-to/monitor/sirato-explorer",title:"Use Sirato Explorer",description:"Use Sirato Explorer on a privacy-enabled Besu network",source:"@site/versioned_docs/version-23.4.0/private-networks/how-to/monitor/sirato-explorer.md",sourceDirName:"private-networks/how-to/monitor",slug:"/private-networks/how-to/monitor/sirato-explorer",permalink:"/23.4.0/private-networks/how-to/monitor/sirato-explorer",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/private-networks/how-to/monitor/sirato-explorer.md",tags:[],version:"23.4.0",lastUpdatedAt:1700078551,formattedLastUpdatedAt:"Nov 15, 2023",sidebarPosition:7,frontMatter:{title:"Use Sirato Explorer",sidebar_position:7,description:"Use Sirato Explorer on a privacy-enabled Besu network"},sidebar:"privateDocSidebar",previous:{title:"Use OpenTelemetry",permalink:"/23.4.0/private-networks/how-to/monitor/opentelemetry"},next:{title:"Use EEA-compliant privacy",permalink:"/23.4.0/private-networks/how-to/use-privacy/eea-compliant"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Start Sirato",id:"start-sirato",level:2},{value:"Use Sirato",id:"use-sirato",level:2},{value:"Stop Sirato",id:"stop-sirato",level:2}],d={toc:u};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-sirato-blockchain-explorer"},"Use Sirato Blockchain Explorer"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.web3labs.com/sirato"},"Sirato Blockchain Explorer")," supports public and private EVM networks. This page describes how to use the free version of Sirato with its built-in support for ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/concepts/privacy/"},"privacy-enabled")," Besu networks created using the ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/tutorials/quickstart"},"Developer Quickstart"),"."),(0,o.kt)("p",null,"Sirato provides an overview of the entire network, including block information, contract metadata, transaction searches, and ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/web3labs/epirus-ethereum-saas-blockchain-explorer-d5d961717d15"},"more"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You must connect to one of the privacy nodes (for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"member1besu"),"), not the dedicated RPC, in order to allow access for Besu ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/reference/api/#priv-methods"},"privacy API methods"),". In production networks, you must ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/how-to/use-besu-api/authenticate"},"secure access")," to RPC nodes.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker and Docker Compose")," installed."),(0,o.kt)("h2",{id:"start-sirato"},"Start Sirato"),(0,o.kt)("p",null,"Clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/web3labs/sirato-free"},"Sirato GitHub repository"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/web3labs/sirato-free\n")),(0,o.kt)("p",null,"The repository contains Docker Compose scripts to allow Sirato to start with a Developer Quickstart test network."),(0,o.kt)("p",null,"From the Sirato directory, run the following script:"),(0,o.kt)(n.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{label:"Command",value:"tab1",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./start_sirato_besu.sh\n"))),(0,o.kt)(s.Z,{label:"Result",value:"tab2",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"*************************************\nSirator Explorer for Besu\n*************************************\nStarting explorer\n--------------------\n[+] Running 5/5\n  \u283f Container docker-compose-mongodb-1    Started                                                                                                                    3.3s\n  \u283f Container docker-compose-api-1        Started                                                                                                                    4.1s\n  \u283f Container docker-compose-ingestion-1  Started                                                                                                                    4.2s\n  \u283f Container docker-compose-web-1        Started                                                                                                                    4.4s\n  \u283f Container docker-compose-nginx-1      Started                                                                                                                    5.0s\n----------------------------------\nServices\n----------------------------------\nSirato explorer HTTP endpoint                 : http://localhost:260012\nSirato is connected to node                   : http://rpcnode:8545\n")))),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost/")," on your browser. You\u2019ll see the new initialization page while it boots up. This may take 5\u201310 minutes for the all services to start and the ingestion sync to complete."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"`Sirato-dashboard`",src:r(55254).Z,width:"2316",height:"1144"})),(0,o.kt)("h2",{id:"use-sirato"},"Use Sirato"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Dashboard")," page provides an aggregated view of network activities."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"`Epirus-dashboard`",src:r(81129).Z,width:"2846",height:"1900"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Network")," page provides an overview of the network status and connected peers. This page is disabled by default, and is only visible if you set ",(0,o.kt)("inlineCode",{parentName:"p"},"DISPLAY_NETWOR_TAB=enabled")," using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"NODE_ENDPOINT=http://member1besu:8545 DISPLAY_NETWORK_TAB=enabled docker-compose -f docker-compose.yml -f sirato-extensions/docker-compose-quorum-dev-quickstart.yml up\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sirato network",src:r(21270).Z,width:"3106",height:"1944"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Blocks")," page shows a real-time view of the finalized blocks."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sirato blocks",src:r(95038).Z,width:"2904",height:"1854"})),(0,o.kt)("p",null,"You can view a given block details by selecting a block hash or number."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sirato block details",src:r(38160).Z,width:"2960",height:"1944"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Transactions")," page shows a paginated view of new and historical transactions."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sirato transactions",src:r(56822).Z,width:"2936",height:"1854"})),(0,o.kt)("h2",{id:"stop-sirato"},"Stop Sirato"),(0,o.kt)("p",null,"To stop all the services from running, run the following script:"),(0,o.kt)(n.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{label:"Command",value:"tab1",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./stop.sh\n"))),(0,o.kt)(s.Z,{label:"Result",value:"tab2",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"*************************************\nSirator Explorer for Besu\n*************************************\nStopping explorer\n[+] Running 5/5\n  \u283f Container docker-compose-nginx-1      Stopped                                                                                                                    0.5s\n  \u283f Container docker-compose-ingestion-1  Stopped                                                                                                                    4.0s\n  \u283f Container docker-compose-web-1        Stopped                                                                                                                   10.3s\n  \u283f Container docker-compose-api-1        Stopped                                                                                                                    2.9s\n  \u283f Container docker-compose-mongodb-1    Stopped\n")))))}m.isMDXComponent=!0},38160:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/sirato-block-details-4fe39667ff79ffe0115f5a48c0a8e294.png"},95038:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/sirato-blocks-472b43066248113ec3f16c92ebc7e196.png"},81129:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/sirato-dashboard-9171fbc2c387e54bea3707d0b8a2337e.png"},55254:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/sirato-loading-b52fbd8dfeeeaef0a86f8af0cbf97052.png"},21270:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/sirato-network-5929621eb2498f7eb4c162c465792700.png"},56822:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/sirato-transactions-2c65c5f45b56e8fcad9ce2e639b3b459.png"}}]);