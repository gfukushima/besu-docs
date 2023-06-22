"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[18558],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),l=u(r),d=i,y=l["".concat(c,".").concat(d)]||l[d]||m[d]||s;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[l]="string"==typeof e?e:i,a[1]=o;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36081:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const s={title:"System requirements",sidebar_position:1,description:"System requirements to sync and run Besu"},a="System requirements",o={unversionedId:"public-networks/get-started/system-requirements",id:"version-23.4.0/public-networks/get-started/system-requirements",title:"System requirements",description:"System requirements to sync and run Besu",source:"@site/versioned_docs/version-23.4.0/public-networks/get-started/system-requirements.md",sourceDirName:"public-networks/get-started",slug:"/public-networks/get-started/system-requirements",permalink:"/23.4.0/public-networks/get-started/system-requirements",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/public-networks/get-started/system-requirements.md",tags:[],version:"23.4.0",lastUpdatedAt:1687400597,formattedLastUpdatedAt:"Jun 22, 2023",sidebarPosition:1,frontMatter:{title:"System requirements",sidebar_position:1,description:"System requirements to sync and run Besu"},sidebar:"publicDocSidebar",previous:{title:"Public networks",permalink:"/23.4.0/public-networks/"},next:{title:"Installation options",permalink:"/23.4.0/public-networks/get-started/install/"}},c={},u=[{value:"Java Virtual Machine size",id:"java-virtual-machine-size",level:2},{value:"Disk space",id:"disk-space",level:2},{value:"Disk type",id:"disk-type",level:2},{value:"AWS requirements",id:"aws-requirements",level:2}],p={toc:u};function l(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system-requirements"},"System requirements"),(0,i.kt)("p",null,"Determine public network system requirements by checking CPU and disk space requirements using ",(0,i.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/how-to/monitor/metrics"},"Prometheus"),". Grafana provides a ",(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/10273"},"sample dashboard")," for Besu."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"CPU requirements are highest when syncing to the network and typically reduce after the node is synchronized to the chain head.")),(0,i.kt)("h2",{id:"java-virtual-machine-size"},"Java Virtual Machine size"),(0,i.kt)("p",null,"For Mainnet and testnets, the minimum ",(0,i.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/how-to/configure-jvm/manage-memory"},"Java Virtual Machine (JVM) memory requirement is 8 GB"),"."),(0,i.kt)("p",null,"JVM memory requirements are highest when syncing, but will reduce after the node is synchronized to the chain head. Monitor your system to determine your actual JVM memory needs."),(0,i.kt)("h2",{id:"disk-space"},"Disk space"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#sync-mode"},"Fast synchronization")," with ",(0,i.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/concepts/data-storage-formats"},"pruning")," enabled requires approximately 750 GB of disk space. ",(0,i.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#sync-mode"},"Full synchronization")," requires approximately 3 TB."),(0,i.kt)("h2",{id:"disk-type"},"Disk type"),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/disks"},"local SSD storage")," for high throughput nodes (validators and RPC nodes). Read-only nodes can use a lower performance setup."),(0,i.kt)("p",null,"You can use local SSDs through ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SCSI"},"SCSI interfaces"),". For higher performance in production settings, we recommend upgrading to ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/disks/local-ssd#performance"},"NVMe interfaces"),"."),(0,i.kt)("h2",{id:"aws-requirements"},"AWS requirements"),(0,i.kt)("p",null,"We are running 22.4.2 Mainnet nodes using ",(0,i.kt)("inlineCode",{parentName:"p"},"m6gd.2xlarge")," boxes."),(0,i.kt)("p",null,"We synchronized the 22.4.2 Mainnet nodes using ",(0,i.kt)("inlineCode",{parentName:"p"},"m6gd.2xlarge")," boxes."),(0,i.kt)("p",null,"Using a larger box while synchronizing speeds up the sync process by giving it more resources. When the sync is completed, the box size can be reduced."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If you are using a more recent release than 22.4.2, resource requirements may have increased.")))}l.isMDXComponent=!0}}]);