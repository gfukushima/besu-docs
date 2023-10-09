"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[86669],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={title:"Use onchain permissioning",sidebar_position:2,description:"Use onchain permissioning allowlists",tags:["private networks"]},a="Use onchain permissioning",s={unversionedId:"private-networks/how-to/use-permissioning/onchain",id:"version-23.7.2/private-networks/how-to/use-permissioning/onchain",title:"Use onchain permissioning",description:"Use onchain permissioning allowlists",source:"@site/versioned_docs/version-23.7.2/private-networks/how-to/use-permissioning/onchain.md",sourceDirName:"private-networks/how-to/use-permissioning",slug:"/private-networks/how-to/use-permissioning/onchain",permalink:"/23.7.2/private-networks/how-to/use-permissioning/onchain",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.2/private-networks/how-to/use-permissioning/onchain.md",tags:[{label:"private networks",permalink:"/23.7.2/tags/private-networks"}],version:"23.7.2",lastUpdatedAt:1696836477,formattedLastUpdatedAt:"Oct 9, 2023",sidebarPosition:2,frontMatter:{title:"Use onchain permissioning",sidebar_position:2,description:"Use onchain permissioning allowlists",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use local permissioning",permalink:"/23.7.2/private-networks/how-to/use-permissioning/local"},next:{title:"Deploy to the cloud",permalink:"/23.7.2/private-networks/how-to/deploy/cloud"}},p={},c=[{value:"Specify the permissioning contract interface version",id:"specify-the-permissioning-contract-interface-version",level:2}],l={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"use-onchain-permissioning"},"Use onchain permissioning"),(0,i.kt)("p",null,"This page contains some extra info if you're using ",(0,i.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/concepts/permissioning/onchain"},"onchain permissioning"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If your node has two different IP addresses for ingress and egress (for example, if you use Kubernetes implementing a load balancer for ingress and a NAT gateway IP address for egress), add both addresses to the allowlist, using the same public key for each IP address. This will allow the node to connect.")),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},"Node allowlists ",(0,i.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/concepts/node-keys#domain-name-support"},"support domain names")," in enode URLs as an early access feature. Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--Xdns-enabled")," option to enable domain name support."),(0,i.kt)("p",{parentName:"admonition"},"If using Kubernetes, enable domain name support and use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--Xdns-update-enabled")," option to ensure that Besu can connect to a container after being restarted, even if the IP address of the container changes.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you add a running node, the node does not attempt to reconnect to the bootnode and synchronize until peer discovery restarts. To add an allowlisted node as a peer without waiting for peer discovery to restart, use ",(0,i.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/reference/api/#admin_addpeer"},(0,i.kt)("inlineCode",{parentName:"a"},"admin_addPeer")),"."),(0,i.kt)("p",{parentName:"admonition"},"If you add the node to the allowlist before starting the node, using ",(0,i.kt)("inlineCode",{parentName:"p"},"admin_addPeer")," is not required because peer discovery is run on node startup.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If nodes are not connecting as expected, set the ",(0,i.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/reference/cli/options#logging"},"log level to ",(0,i.kt)("inlineCode",{parentName:"a"},"TRACE"))," and search for messages containing ",(0,i.kt)("inlineCode",{parentName:"p"},"Node permissioning")," to identify the issue."),(0,i.kt)("p",{parentName:"admonition"},"Ensure the ",(0,i.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/reference/cli/options#p2p-host"},(0,i.kt)("inlineCode",{parentName:"a"},"--p2p-host"))," command line option has been correctly configured for all nodes with the externally accessible address."),(0,i.kt)("p",{parentName:"admonition"},"If you change your network configuration, you may need to update the node allowlist.")),(0,i.kt)("h2",{id:"specify-the-permissioning-contract-interface-version"},"Specify the permissioning contract interface version"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/reference/cli/options#permissions-nodes-contract-version"},(0,i.kt)("inlineCode",{parentName:"a"},"--permissions-nodes-contract-version"))," command line option to specify the version of the ",(0,i.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/concepts/permissioning/onchain#permissioning-contracts"},"permissioning contract interface"),". The default is 1."),(0,i.kt)("p",null,"Specify the contract interface version that maps to the version of the ",(0,i.kt)("a",{parentName:"p",href:"https://entethalliance.org/technical-specifications/"},"Enterprise Ethereum Alliance Client Specification")," the contract interface implements."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"left"},"EEA Client Specification"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Contract interface"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("td",{parentName:"tr",align:"left"},"5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("td",{parentName:"tr",align:"left"},"6"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2")))),(0,i.kt)("p",null,"The permissioning contracts in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/permissioning-smart-contracts"},(0,i.kt)("inlineCode",{parentName:"a"},"ConsenSys/permissioning-smart-contracts"))," repository implement the version 2 contract interface."))}d.isMDXComponent=!0}}]);