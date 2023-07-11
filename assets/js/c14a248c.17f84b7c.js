"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[51271],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),l=u(a),y=n,m=l["".concat(p,".").concat(y)]||l[y]||d[y]||s;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[l]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<s;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},57514:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const s={title:"Run Tessera with Besu",description:"Running ConsenSys Quorum Tessera with Hyperledger Besu",sidebar_position:3,tags:["private networks"]},i="Run Tessera with Besu",o={unversionedId:"private-networks/how-to/use-privacy/tessera",id:"version-23.4.1/private-networks/how-to/use-privacy/tessera",title:"Run Tessera with Besu",description:"Running ConsenSys Quorum Tessera with Hyperledger Besu",source:"@site/versioned_docs/version-23.4.1/private-networks/how-to/use-privacy/tessera.md",sourceDirName:"private-networks/how-to/use-privacy",slug:"/private-networks/how-to/use-privacy/tessera",permalink:"/stable/private-networks/how-to/use-privacy/tessera",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/how-to/use-privacy/tessera.md",tags:[{label:"private networks",permalink:"/stable/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1689101827,formattedLastUpdatedAt:"Jul 11, 2023",sidebarPosition:3,frontMatter:{title:"Run Tessera with Besu",description:"Running ConsenSys Quorum Tessera with Hyperledger Besu",sidebar_position:3,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use Besu-extended privacy",permalink:"/stable/private-networks/how-to/use-privacy/besu-extended"},next:{title:"Create and manage privacy groups",permalink:"/stable/private-networks/how-to/use-privacy/privacy-groups"}},p={},u=[{value:"High availability",id:"high-availability",level:2},{value:"Separate instances",id:"separate-instances",level:2}],c={toc:u},l="wrapper";function d(e){let{components:t,...s}=e;return(0,n.kt)(l,(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"run-tessera-with-besu"},"Run Tessera with Besu"),(0,n.kt)("p",null,"To enable ",(0,n.kt)("a",{parentName:"p",href:"/stable/private-networks/concepts/privacy/"},"privacy functionality")," in production systems, ",(0,n.kt)("a",{parentName:"p",href:"https://docs.tessera.consensys.net/"},"Tessera")," must be ",(0,n.kt)("a",{parentName:"p",href:"#high-availability"},"highly available")," and ",(0,n.kt)("a",{parentName:"p",href:"#separate-instances"},"run in a separate instance")," to Hyperledger Besu."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Besu-Tessera-High-Availability",src:a(27039).Z,width:"1512",height:"648"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You can also configure Besu for high availability using load balancers.")),(0,n.kt)("h2",{id:"high-availability"},"High availability"),(0,n.kt)("p",null,"Privacy requires you to ",(0,n.kt)("a",{parentName:"p",href:"https://consensys.net/docs/goquorum//en/stable/configure-and-manage/configure/high-availability/"},"configure Tessera for high availability"),". Besu also requires ",(0,n.kt)("a",{parentName:"p",href:"https://docs.tessera.consensys.net/HowTo/Configure/Orion-Mode"},(0,n.kt)("inlineCode",{parentName:"a"},"orion")," mode")," to be enabled in Tessera."),(0,n.kt)("p",null,"To successfully distribute a private transaction, all private transaction participants must be online. If any participants are offline when submitting the private transaction, the transaction is not attempted and you need to resubmit the transaction."),(0,n.kt)("p",null,"If a Tessera node is unavailable when Besu attempts to process a privacy marker transaction, the Besu node stops processing all new blocks until Tessera is available. The Besu node continually attempts to process the privacy marker transaction until Tessera is available again."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"If Tessera becomes available but has lost data, Besu resumes processing blocks and the private states in the Besu nodes might become inconsistent.")),(0,n.kt)("h2",{id:"separate-instances"},"Separate instances"),(0,n.kt)("p",null,"For production systems, we recommend running Besu and Tessera in separate instances. If running Besu and Tessera in the same instance, restrict the amount of memory used by each JVM to ensure each has enough memory."))}d.isMDXComponent=!0},27039:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Besu-Tessera-High-Availability-452df28ed69ccdc9a06250a617e5a477.png"}}]);