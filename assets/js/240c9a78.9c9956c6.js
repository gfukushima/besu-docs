"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[95752],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||k[m]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"Client and server TLS",sidebar_position:1,tags:["private networks"]},o="Configure client and server TLS",s={unversionedId:"private-networks/how-to/configure/tls/client-and-server",id:"version-23.4.1/private-networks/how-to/configure/tls/client-and-server",title:"Client and server TLS",description:"Hyperledger Besu supports TLS for client and server communication. For example, you can configure TLS for communication between EthSigner and Besu, and Besu and Tessera.",source:"@site/versioned_docs/version-23.4.1/private-networks/how-to/configure/tls/client-and-server.md",sourceDirName:"private-networks/how-to/configure/tls",slug:"/private-networks/how-to/configure/tls/client-and-server",permalink:"/23.4.1/private-networks/how-to/configure/tls/client-and-server",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/how-to/configure/tls/client-and-server.md",tags:[{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1700078551,formattedLastUpdatedAt:"Nov 15, 2023",sidebarPosition:1,frontMatter:{title:"Client and server TLS",sidebar_position:1,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Pre-deploy a contract",permalink:"/23.4.1/private-networks/how-to/configure/contracts"},next:{title:"Peer-to-peer TLS",permalink:"/23.4.1/private-networks/how-to/configure/tls/p2p"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configure client TLS",id:"configure-client-tls",level:2},{value:"Create the known clients file",id:"create-the-known-clients-file",level:3},{value:"Start Besu",id:"start-besu",level:3},{value:"Configure server TLS",id:"configure-server-tls",level:2},{value:"Create the known servers file",id:"create-the-known-servers-file",level:3},{value:"Start Besu",id:"start-besu-1",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configure-client-and-server-tls"},"Configure client and server TLS"),(0,i.kt)("p",null,"Hyperledger Besu supports TLS for client and server communication. For example, you can configure TLS for communication between ",(0,i.kt)("a",{parentName:"p",href:"https://docs.ethsigner.consensys.net/en/latest/Concepts/TLS/"},"EthSigner")," and Besu, and Besu and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.tessera.consensys.net/HowTo/Configure/TLS/"},"Tessera"),"."),(0,i.kt)("p",null,"The following diagram displays an example client and server TLS configuration."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Besu client and server TLS",src:n(82476).Z,width:"1512",height:"1184"})),(0,i.kt)("p",null,"Configure TLS communication from the command line."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Besu's password-protected PKCS12 keystore"),(0,i.kt)("li",{parentName:"ul"},"File containing the keystore password")),(0,i.kt)("h2",{id:"configure-client-tls"},"Configure client TLS"),(0,i.kt)("p",null,"Allow clients (for example a dapp, curl, or EthSigner) to send and receive secure HTTP JSON-RPCs."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Client prerequisites"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.ethsigner.consensys.net/en/latest/HowTo/Configure-TLS/#server-tls-connection"},"Configure the client for TLS")),(0,i.kt)("li",{parentName:"ul"},"Client's PKCS12 keystore information")),(0,i.kt)("h3",{id:"create-the-known-clients-file"},"Create the known clients file"),(0,i.kt)("p",null,"The known clients file allows clients with self-signed certificates or non-public certificates to connect to Besu."),(0,i.kt)("p",null,"Create a file (in this example, ",(0,i.kt)("inlineCode",{parentName:"p"},"knownClients"),") that lists one or more trusted clients. Use the format",(0,i.kt)("inlineCode",{parentName:"p"},"<common_name> <hex-string>")," where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<common_name>")," is the Common Name specified in the client certificate."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<hex-string>")," is the SHA-256 fingerprint of the client certificate.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example"',title:'"Example"'},"ethsigner 8E:E0:85:9F:FC:2E:2F:21:31:46:0B:82:4C:A6:88:AB:30:34:9A:C6:EA:4F:04:31:ED:0F:69:A7:B5:C2:2F:A7\ncurl FC:18:BF:39:45:45:9A:15:46:76:A6:E7:C3:94:64:B8:34:84:A3:8E:B8:EA:67:DC:61:C0:29:E6:38:B8:B7:99\n")),(0,i.kt)("p",null,"You can use ",(0,i.kt)("a",{parentName:"p",href:"https://www.openssl.org/"},(0,i.kt)("inlineCode",{parentName:"a"},"openssl"))," or ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/6/docs/technotes/tools/solaris/keytool.html"},(0,i.kt)("inlineCode",{parentName:"a"},"keytool"))," to display the SHA256 fingerprint."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"keytool -list -v -keystore <keystore> -storetype PKCS12 -storepass <MY_PASSWORD>`.\n")),(0,i.kt)("h3",{id:"start-besu"},"Start Besu"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"besu --rpc-http-enabled --rpc-http-tls-enabled --rpc-http-tls-client-auth-enabled --rpc-http-tls-keystore-file=/Users/me/my_node/keystore.pfx --rpc-http-tls-keystore-password-file=/Users/me/my_node/keystorePassword --rpc-http-tls-known-clients-file=/Users/me/my_node/knownClients --rpc-http-tls-cipher-suite=TLS_AES_256_GCM_SHA384 --rpc-http-tls-protocol=TLSv1.3,TLSv1.2\n")),(0,i.kt)("p",null,"The command line:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enables the HTTP JSON-RPC service using the ",(0,i.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/reference/cli/options#rpc-http-enabled"},(0,i.kt)("inlineCode",{parentName:"a"},"--rpc-http-enabled"))," option."),(0,i.kt)("li",{parentName:"ul"},"Enables TLS for the HTTP JSON-RPC service using the ",(0,i.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/reference/cli/options#rpc-http-tls-enabled"},(0,i.kt)("inlineCode",{parentName:"a"},"--rpc-http-tls-enabled"))," option."),(0,i.kt)("li",{parentName:"ul"},"Enables TLS client authentication using the ",(0,i.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/reference/cli/options#rpc-http-tls-client-auth-enabled"},(0,i.kt)("inlineCode",{parentName:"a"},"--rpc-http-tls-client-auth-enabled"))," option."),(0,i.kt)("li",{parentName:"ul"},"Specifies the keystore using the ",(0,i.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/reference/cli/options#rpc-http-tls-keystore-file"},(0,i.kt)("inlineCode",{parentName:"a"},"--rpc-http-tls-keystore-file"))," option."),(0,i.kt)("li",{parentName:"ul"},"Specifies the file that contains the password to decrypt the keystore using the ",(0,i.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/reference/cli/options#rpc-http-tls-keystore-password-file"},(0,i.kt)("inlineCode",{parentName:"a"},"--rpc-http-tls-keystore-password-file"))," option."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#create-the-known-clients-file"},"Specifies the clients")," allowed to connect to Besu using the ",(0,i.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/reference/cli/options#rpc-http-tls-known-clients-file"},(0,i.kt)("inlineCode",{parentName:"a"},"--rpc-http-tls-known-clients-file"))," option."),(0,i.kt)("li",{parentName:"ul"},"specifies the Java cipher suites using the ",(0,i.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/reference/cli/options#rpc-http-tls-cipher-suite"},(0,i.kt)("inlineCode",{parentName:"a"},"--rpc-http-tls-cipher-suite"))," option."),(0,i.kt)("li",{parentName:"ul"},"specifies the TLS protocol version using the ",(0,i.kt)("a",{parentName:"li",href:"/23.4.1/public-networks/reference/cli/options#rpc-http-tls-protocol"},(0,i.kt)("inlineCode",{parentName:"a"},"--rpc-http-tls-protocol"))," option.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Set ",(0,i.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/reference/cli/options#rpc-http-tls-ca-clients-enabled"},(0,i.kt)("inlineCode",{parentName:"a"},"--rpc-http-tls-ca-clients-enabled"))," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," to allow access to clients with signed and trusted root CAs.")),(0,i.kt)("h2",{id:"configure-server-tls"},"Configure server TLS"),(0,i.kt)("p",null,"Allow Besu to securely communicate with the server (Tessera)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Server prerequisites"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.tessera.consensys.net/HowTo/Configure/TLS/"},"Configure the server to allow TLS communication")),(0,i.kt)("li",{parentName:"ul"},"Server's certificate information")),(0,i.kt)("h3",{id:"create-the-known-servers-file"},"Create the known servers file"),(0,i.kt)("p",null,"Create a file (in this example, ",(0,i.kt)("inlineCode",{parentName:"p"},"knownServers"),") that lists one or more trusted servers. The file contents use the format ",(0,i.kt)("inlineCode",{parentName:"p"},"<hostname>:<port> <hex-string>")," where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<hostname>")," is the server hostname"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<port>")," is the port used for communication"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<hex-string>")," is the SHA-256 fingerprint of the server's certificate.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example"',title:'"Example"'},"localhost:8888 3C:B4:5A:F9:88:43:5E:62:69:9F:A9:9D:41:14:03:BA:83:24:AC:04:CE:BD:92:49:1B:8D:B2:A4:86:39:4C:AC\n127.0.0.1:8888 3C:B4:5A:F9:88:43:5E:62:69:9F:A9:9D:41:14:03:BA:83:24:AC:04:CE:BD:92:49:1B:8D:B2:A4:86:39:4C:AC\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you are unsure whether requests use the hostname or an IP address, configure both in the file.")),(0,i.kt)("h3",{id:"start-besu-1"},"Start Besu"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"besu --privacy-tls-enabled --privacy-tls-keystore-file=/Users/me/my_node/keystore.pfx --privacy-tls-keystore-password-file=/Users/me/my_node/keystorePassword --privacy-tls-known-enclave-file=/Users/me/my_node/knownServers\n")),(0,i.kt)("p",null,"The command line:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enables TLS with the server using the ",(0,i.kt)("a",{parentName:"li",href:"/23.4.1/private-networks/reference/cli/options#privacy-tls-enabled"},(0,i.kt)("inlineCode",{parentName:"a"},"--privacy-tls-enabled"))," option."),(0,i.kt)("li",{parentName:"ul"},"Specifies the keystore using the ",(0,i.kt)("a",{parentName:"li",href:"/23.4.1/private-networks/reference/cli/options#privacy-tls-keystore-file"},(0,i.kt)("inlineCode",{parentName:"a"},"--privacy-tls-keystore-file"))," option."),(0,i.kt)("li",{parentName:"ul"},"Specifies the file that contains the password to decrypt the keystore using the ",(0,i.kt)("a",{parentName:"li",href:"/23.4.1/private-networks/reference/cli/options#privacy-tls-keystore-password-file"},(0,i.kt)("inlineCode",{parentName:"a"},"--privacy-tls-keystore-password-file"))," option."),(0,i.kt)("li",{parentName:"ul"},"Specifies the trusted servers using the ",(0,i.kt)("a",{parentName:"li",href:"/23.4.1/private-networks/reference/cli/options#privacy-tls-known-enclave-file"},(0,i.kt)("inlineCode",{parentName:"a"},"--privacy-tls-known-enclave-file"))," option.")))}u.isMDXComponent=!0},82476:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Besu_TLS-ed8bb10233da06f7c5f3d62628dfcb80.png"}}]);