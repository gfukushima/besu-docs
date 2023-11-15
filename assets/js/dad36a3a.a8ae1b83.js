"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[51742,15493],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),s=a(16550),i=a(91980),p=a(67392),c=a(50012);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,p]=h({queryString:a,groupId:n}),[u,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),b=(()=>{const e=i??u;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),k(e)}),[p,k,o]),tabValues:o}}var b=a(72389);const N="tabList__CuJ",f="tabItem_LNqP";function g(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=p[a].value;n!==s&&(u(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",f,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",N)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},10218:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,s={unversionedId:"global/postman",id:"version-23.4.0/global/postman",title:"postman",description:"View the Besu JSON-RPC APIs documentation in the Postman format and obtain example requests in multiple coding languages.",source:"@site/versioned_docs/version-23.4.0/global/postman.md",sourceDirName:"global",slug:"/global/postman",permalink:"/23.4.0/global/postman",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/global/postman.md",tags:[],version:"23.4.0",lastUpdatedAt:1700078551,formattedLastUpdatedAt:"Nov 15, 2023",frontMatter:{}},i={},p=[],c={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Besu JSON-RPC APIs documentation in Postman format",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"View the ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/hyperledger/workspace/hyperledger-besu/collection/11610746-f334929f-c8c3-43ed-bb73-69a6f0d728d8"},"Besu JSON-RPC APIs documentation")," in the Postman format and obtain example requests in multiple coding languages."),(0,r.kt)("h4",{parentName:"admonition",id:"run-in-postman"},"Run in Postman"),(0,r.kt)("p",{parentName:"admonition"},"Click the following button to fork the collection and run requests directly on your local network."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://god.gw.postman.com/run-collection/11610746-f334929f-c8c3-43ed-bb73-69a6f0d728d8?action=collection%2Ffork&collection-url=entityId%3D11610746-f334929f-c8c3-43ed-bb73-69a6f0d728d8%26entityType%3Dcollection%26workspaceId%3Dc4b60b6f-9f15-42d0-8327-7ebabca6f0fd#?env%5BBesu%20node%20on%20local%20host%5D=W3sia2V5IjoicnBjLWh0dHAtaG9zdCIsInZhbHVlIjoibG9jYWxob3N0IiwiZW5hYmxlZCI6ZmFsc2V9LHsia2V5IjoicnBjLWh0dHAtcG9ydCIsInZhbHVlIjoiODU0NSIsImVuYWJsZWQiOmZhbHNlfV0="},(0,r.kt)("img",{parentName:"a",src:"https://run.pstmn.io/button.svg",alt:"Run in Postman"})),"."),(0,r.kt)("h4",{parentName:"admonition",id:"download-collection"},"Download collection"),(0,r.kt)("p",{parentName:"admonition"},"Alternatively you can ",(0,r.kt)("a",{target:"_blank",href:a(93508).Z},"download the JSON collection file"),".")))}u.isMDXComponent=!0},55879:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162),s=a(10218);const i={title:"Use JSON-RPC over HTTP, WS, and IPC",sidebar_position:1,description:"How to access the Hyperledger Besu API using JSON-RPC",tags:["private networks"]},p="Use JSON-RPC over HTTP, WebSocket, and IPC",c={unversionedId:"public-networks/how-to/use-besu-api/json-rpc",id:"version-23.4.0/public-networks/how-to/use-besu-api/json-rpc",title:"Use JSON-RPC over HTTP, WS, and IPC",description:"How to access the Hyperledger Besu API using JSON-RPC",source:"@site/versioned_docs/version-23.4.0/public-networks/how-to/use-besu-api/json-rpc.md",sourceDirName:"public-networks/how-to/use-besu-api",slug:"/public-networks/how-to/use-besu-api/json-rpc",permalink:"/23.4.0/public-networks/how-to/use-besu-api/json-rpc",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/public-networks/how-to/use-besu-api/json-rpc.md",tags:[{label:"private networks",permalink:"/23.4.0/tags/private-networks"}],version:"23.4.0",lastUpdatedAt:1700078551,formattedLastUpdatedAt:"Nov 15, 2023",sidebarPosition:1,frontMatter:{title:"Use JSON-RPC over HTTP, WS, and IPC",sidebar_position:1,description:"How to access the Hyperledger Besu API using JSON-RPC",tags:["private networks"]},sidebar:"publicDocSidebar",previous:{title:"Access the Hyperledger Besu API",permalink:"/23.4.0/public-networks/how-to/use-besu-api/"},next:{title:"Use RPC Pub/Sub over WS",permalink:"/23.4.0/public-networks/how-to/use-besu-api/rpc-pubsub"}},u={},d=[{value:"Geth console",id:"geth-console",level:2},{value:"JSON-RPC authentication",id:"json-rpc-authentication",level:2},{value:"HTTP and WebSocket requests",id:"http-and-websocket-requests",level:2},{value:"HTTP",id:"http",level:3},{value:"WebSocket",id:"websocket",level:3},{value:"Readiness and liveness endpoints",id:"readiness-and-liveness-endpoints",level:2},{value:"Readiness",id:"readiness",level:3},{value:"Liveness",id:"liveness",level:3},{value:"API methods enabled by default",id:"api-methods-enabled-by-default",level:2},{value:"Block parameter",id:"block-parameter",level:2}],m={toc:d};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-json-rpc-over-http-websocket-and-ipc"},"Use JSON-RPC over HTTP, WebSocket, and IPC"),(0,r.kt)("p",null,"JSON-RPC APIs allow you to interact with your node. JSON-RPC endpoints are not enabled by default."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You should secure access to your node's JSON-RPC endpoints. Users with access to your node via JSON-RPC can make calls directly to your node, causing your node to consume resources.")),(0,r.kt)("p",null,"To enable JSON-RPC over HTTP or WebSocket, use the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#rpc-http-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-enabled"))," and ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#rpc-ws-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-ws-enabled"))," options."),(0,r.kt)("p",null,"To enable JSON-RPC over an ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/how-to/use-besu-api/#socket-path"},"IPC socket"),", use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--Xrpc-ipc-enabled")," option."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"--Xrpc-ipc-enabled")," is an early access option.")),(0,r.kt)(s.default,{mdxType:"Postman"}),(0,r.kt)("h2",{id:"geth-console"},"Geth console"),(0,r.kt)("p",null,"The geth console is a REPL (Read, Evaluate, & Print Loop) JavaScript console. Use JSON-RPC APIs supported by geth and Hyperledger Besu directly in the console."),(0,r.kt)("p",null,"To use the geth console with Besu:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start Besu with the ",(0,r.kt)("a",{parentName:"li",href:"/23.4.0/public-networks/reference/cli/options#rpc-http-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-enabled"))," or ",(0,r.kt)("inlineCode",{parentName:"li"},"--Xrpc-ipc-enabled")," option."),(0,r.kt)("li",{parentName:"ol"},"Specify which APIs to enable using the ",(0,r.kt)("a",{parentName:"li",href:"/23.4.0/public-networks/reference/cli/options#rpc-http-api"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-api"))," or ",(0,r.kt)("inlineCode",{parentName:"li"},"--Xrpc-ipc-api")," option."),(0,r.kt)("li",{parentName:"ol"},"Start the geth console specifying the JSON-RPC endpoint:")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{label:"HTTP endpoint",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"geth attach http://localhost:8545\n"))),(0,r.kt)(l.Z,{label:"IPC endpoint",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"geth attach /path/to/besu.ipc\n")),(0,r.kt)("p",null,"Use the geth console to call ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/api/"},"JSON-RPC API methods")," that geth and Besu share."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"eth.syncing\n")),(0,r.kt)("h2",{id:"json-rpc-authentication"},"JSON-RPC authentication"),(0,r.kt)("p",null,"Besu disables ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/how-to/use-besu-api/authenticate"},"Authentication")," by default."),(0,r.kt)("h2",{id:"http-and-websocket-requests"},"HTTP and WebSocket requests"),(0,r.kt)("h3",{id:"http"},"HTTP"),(0,r.kt)("p",null,"To make RPC requests over HTTP, you can use ",(0,r.kt)("a",{parentName:"p",href:"https://curl.haxx.se/download.html"},(0,r.kt)("inlineCode",{parentName:"a"},"curl")),".")),(0,r.kt)(l.Z,{label:"Syntax",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","id":<request-ID>,"method":"<method-name>","params":[<method-parameters>]}\' <JSON-RPC-http-endpoint:port>\n'))),(0,r.kt)(l.Z,{label:"curl HTTP request",value:"tab4",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","id":"1","method":"eth_blockNumber","params":[]}\' http://127.0.0.1:8555\n'))),(0,r.kt)(l.Z,{label:"JSON result",value:"tab5",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": "1",\n  "result": "0x60e"\n}\n')))),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," to make multiple RPC requests (batch requests) over HTTP at the same time. Send the requests as an array, and receive an array of responses. The default number of allowed requests in a RPC batch request is ",(0,r.kt)("inlineCode",{parentName:"p"},"1024"),". Use the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#rpc-http-max-batch-size"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-max-batch-size"))," command line option to update the default value."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{label:"curl HTTP request",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'[{"jsonrpc":"2.0","id":"1","method":"eth_blockNumber","params":[]}, {"jsonrpc":"2.0","id":"2","method":"admin_peers","params":[]}]\' http://127.0.0.1:8555\n'))),(0,r.kt)(l.Z,{label:"JSON result",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "jsonrpc": "2.0",\n    "id": "1",\n    "result": "0x60e"\n  },\n  {\n    "jsonrpc": "2.0",\n    "id": "2",\n    "result": []\n  }\n]\n')))),(0,r.kt)("h3",{id:"websocket"},"WebSocket"),(0,r.kt)("p",null,"To make RPC requests over WebSocket, you can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/websockets/wscat"},(0,r.kt)("inlineCode",{parentName:"a"},"wscat")),", a Node.js based command-line tool."),(0,r.kt)("p",null,"First connect to the WebSocket server using ",(0,r.kt)("inlineCode",{parentName:"p"},"wscat")," (you only need to connect once per session):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wscat -c ws://<JSON-RPC-ws-endpoint:port>\n")),(0,r.kt)("p",null,"After you establish a connection, the terminal displays a '>' prompt. Send individual requests as a JSON data package at each prompt."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{"jsonrpc":"2.0","id":<request-ID>,"method":"<method-name>","params":[<method-parameters>]}\n'))),(0,r.kt)(l.Z,{label:"wscat WS request",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{"jsonrpc":"2.0","id":"1","method":"eth_blockNumber","params":[]}\n'))),(0,r.kt)(l.Z,{label:"JSON result",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": "1",\n  "result": "0x23"\n}\n')))),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"wscat")," to make multiple RPC requests over WebSocket at the same time. Send the requests as an array, and receive an array of responses."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{label:"wscat WS request",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[{"jsonrpc":"2.0","id":"1","method":"eth_blockNumber","params":[]}, {"jsonrpc":"2.0","id":"2","method":"admin_peers","params":[]}]\n'))),(0,r.kt)(l.Z,{label:"JSON result",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "jsonrpc": "2.0",\n    "id": "1",\n    "result": "0x23"\n  },\n  {\n    "jsonrpc": "2.0",\n    "id": "2",\n    "result": []\n  }\n]\n')))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"wscat")," does not support headers. ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/how-to/use-besu-api/authenticate"},"Authentication")," requires you to pass an authentication token in the request header. To use authentication with WebSocket, you need an app that supports headers.")),(0,r.kt)("h2",{id:"readiness-and-liveness-endpoints"},"Readiness and liveness endpoints"),(0,r.kt)("p",null,"Besu provides readiness and liveness endpoints to confirm the Besu node status. Both return a ",(0,r.kt)("inlineCode",{parentName:"p"},"200 OK")," status when ready or live and a ",(0,r.kt)("inlineCode",{parentName:"p"},"503 Service Unavailable")," status if not ready or live."),(0,r.kt)("h3",{id:"readiness"},"Readiness"),(0,r.kt)("p",null,"By default, the readiness check requires a connected peer and the node to be within two blocks of the best known block. If you have ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#p2p-enabled"},"disabled P2P communication"),", you do not need peers. A live node with P2P disabled is always ready."),(0,r.kt)("p",null,"Use the query parameters ",(0,r.kt)("inlineCode",{parentName:"p"},"minPeers")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"maxBlocksBehind")," to adjust the number of peers required and the number of blocks tolerance."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{label:"Readiness endpoint",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"http://<JSON-RPC-HTTP-endpoint:port>/readiness\n"))),(0,r.kt)(l.Z,{label:"curl request example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -v 'http://localhost:8545/readiness'\n"))),(0,r.kt)(l.Z,{label:"Query parameters example",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -v 'http://localhost:8545/readiness?minPeers=0&maxBlocksBehind=10'\n")))),(0,r.kt)("h3",{id:"liveness"},"Liveness"),(0,r.kt)("p",null,"The liveness check requires the JSON-RPC server to be up. You can use the endpoint to verify that the node can respond to RPC calls. The status in the response will always be ",(0,r.kt)("inlineCode",{parentName:"p"},"UP"),"."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{label:"Liveness endpoint",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"http://<JSON-RPC-HTTP-endpoint:port>/liveness\n"))),(0,r.kt)(l.Z,{label:"curl request example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -v 'http://localhost:8545/liveness'\n")))),(0,r.kt)("h2",{id:"api-methods-enabled-by-default"},"API methods enabled by default"),(0,r.kt)("p",null,"Besu enables the ",(0,r.kt)("inlineCode",{parentName:"p"},"ETH"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"NET"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"WEB3")," API methods by default."),(0,r.kt)("p",null,"To enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"ADMIN"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"CLIQUE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBUG"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"EEA"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"IBFT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MINER"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PERM"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PLUGINS"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PRIV"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TRACE"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"TXPOOL")," API methods, use the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#rpc-http-api"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-api")),", ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#rpc-ws-api"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-ws-api")),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"--Xrpc-ipc-api")," options."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"--Xrpc-ipc-api")," is an early access option.")),(0,r.kt)("h2",{id:"block-parameter"},"Block parameter"),(0,r.kt)("p",null,"When you make requests that might have different results depending on the block accessed, the block parameter specifies the block. Methods such as ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/api/#eth_gettransactionbyblocknumberandindex"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getTransactionByBlockNumberAndIndex"))," have a block parameter."),(0,r.kt)("p",null,"The block parameter can have one of the following values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"blockNumber")," : ",(0,r.kt)("em",{parentName:"p"},"quantity")," - The block number, specified in hexadecimal or decimal. 0 represents the genesis block.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"blockHash")," : ",(0,r.kt)("em",{parentName:"p"},"string")," or ",(0,r.kt)("em",{parentName:"p"},"object")," - 32-byte block hash or JSON object specifying the block hash. If using a JSON object, you can specify ",(0,r.kt)("inlineCode",{parentName:"p"},"requireCanonical")," to indicate whether the block must be a canonical block. See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/besu/blob/a2dedb0b2c7980cdc35db8eb4c094f2eb0dc7deb/ethereum/api/src/test/resources/org/hyperledger/besu/ethereum/api/jsonrpc/eth/eth_getBalance_blockHashObjectCanonical.json"},"this example"),"."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Only the following methods support the ",(0,r.kt)("inlineCode",{parentName:"p"},"blockHash")," parameter:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.4.0/public-networks/reference/api/#eth_call"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_call"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.4.0/public-networks/reference/api/#eth_getbalance"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getBalance"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.4.0/public-networks/reference/api/#eth_getcode"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getCode"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.4.0/public-networks/reference/api/#eth_getproof"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getProof"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.4.0/public-networks/reference/api/#eth_getstorageat"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getStorageAt"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.4.0/public-networks/reference/api/#eth_gettransactioncount"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getTransactionCount")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"earliest")," : ",(0,r.kt)("em",{parentName:"p"},"tag")," - The earliest (genesis) block.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"latest")," : ",(0,r.kt)("em",{parentName:"p"},"tag")," - The last block mined.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"pending")," : ",(0,r.kt)("em",{parentName:"p"},"tag")," - The last block mined plus pending transactions. Use only with ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/api/#eth_gettransactioncount"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getTransactionCount")),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"finalized")," : ",(0,r.kt)("em",{parentName:"p"},"tag")," - The most recent crypto-economically secure block. It cannot be reorganized outside manual intervention driven by community coordination.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"safe")," : ",(0,r.kt)("em",{parentName:"p"},"tag")," - The most recent block that is safe from reorganization under honest majority and certain synchronicity assumptions."))))}h.isMDXComponent=!0},93508:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/postman_collection-1354ef299155a66a6083e20e7571a9d3.json"}}]);