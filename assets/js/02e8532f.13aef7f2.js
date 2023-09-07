"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[47374],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},33692:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"Use Java Flight Recorder",sidebar_position:3,description:"Using Java Flight Recorder with Hyperledger Besu",tags:["public networks","private networks"]},i="Use Java Flight Recorder",s={unversionedId:"public-networks/how-to/configure-jvm/java-flight-recorder",id:"version-23.7.2/public-networks/how-to/configure-jvm/java-flight-recorder",title:"Use Java Flight Recorder",description:"Using Java Flight Recorder with Hyperledger Besu",source:"@site/versioned_docs/version-23.7.2/public-networks/how-to/configure-jvm/java-flight-recorder.md",sourceDirName:"public-networks/how-to/configure-jvm",slug:"/public-networks/how-to/configure-jvm/java-flight-recorder",permalink:"/23.7.2/public-networks/how-to/configure-jvm/java-flight-recorder",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.2/public-networks/how-to/configure-jvm/java-flight-recorder.md",tags:[{label:"public networks",permalink:"/23.7.2/tags/public-networks"},{label:"private networks",permalink:"/23.7.2/tags/private-networks"}],version:"23.7.2",lastUpdatedAt:1694057512,formattedLastUpdatedAt:"Sep 7, 2023",sidebarPosition:3,frontMatter:{title:"Use Java Flight Recorder",sidebar_position:3,description:"Using Java Flight Recorder with Hyperledger Besu",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Manage JVM memory",permalink:"/23.7.2/public-networks/how-to/configure-jvm/manage-memory"},next:{title:"Use Hardhat",permalink:"/23.7.2/public-networks/how-to/develop/hardhat"}},l={},c=[{value:"Enable Java Flight Recorder",id:"enable-java-flight-recorder",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-java-flight-recorder"},"Use Java Flight Recorder"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javacomponents/jmc-5-4/jfr-runtime-guide/about.htm#JFRUH170"},"Java Flight Recorder (JFR)")," is a monitoring tool that collects information about the Java Virtual Machine (JVM) when Hyperledger Besu is running. Use the JFR as a tool to analyze Besu performance."),(0,o.kt)("h2",{id:"enable-java-flight-recorder"},"Enable Java Flight Recorder"),(0,o.kt)("p",null,"To enable JFR, set ",(0,o.kt)("inlineCode",{parentName:"p"},"BESU_OPTS")," to the JFR tags as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export BESU_OPTS=-XX:StartFlightRecording=disk=true,delay=15s,dumponexit=true,\\\nfilename=/tmp/recording.jfr,maxsize=1024m,maxage=1d,\\\nsettings=profile,path-to-gc-roots=true\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When recording, cleanly exiting Besu results in better data. If not possible to cleanly exit, the file may be missing some information not flushed to disk.")),(0,o.kt)("p",null,"Inspect the file written to ",(0,o.kt)("inlineCode",{parentName:"p"},"/tmp/recording.jfr")," with tools such as ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javacomponents/jmc-5-5/jmc-user-guide/intro.htm#JMCCI109"},"Mission Control"),"."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"If providing the output file to ",(0,o.kt)("a",{parentName:"p",href:"https://consensys.net/quorum/support/"},"ConsenSys Quorum support"),", be aware that while JFR files don't contain secrets such as private keys, some details about the user configuration can be inferred from the JFR output.")))}u.isMDXComponent=!0}}]);