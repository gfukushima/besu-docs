"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[68561],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},63110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Configure Kubernetes mode in NAT manager",sidebar_position:9,description:"Tutorial to configure Kubernetes mode for Hyperledger Besu Nat Manager",tags:["private networks"]},i="Configure Kubernetes mode in NAT Manager",l={unversionedId:"private-networks/tutorials/kubernetes/nat-manager",id:"private-networks/tutorials/kubernetes/nat-manager",title:"Configure Kubernetes mode in NAT manager",description:"Tutorial to configure Kubernetes mode for Hyperledger Besu Nat Manager",source:"@site/docs/private-networks/tutorials/kubernetes/nat-manager.md",sourceDirName:"private-networks/tutorials/kubernetes",slug:"/private-networks/tutorials/kubernetes/nat-manager",permalink:"/development/private-networks/tutorials/kubernetes/nat-manager",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/tutorials/kubernetes/nat-manager.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1689101827,formattedLastUpdatedAt:"Jul 11, 2023",sidebarPosition:9,frontMatter:{title:"Configure Kubernetes mode in NAT manager",sidebar_position:9,description:"Tutorial to configure Kubernetes mode for Hyperledger Besu Nat Manager",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Production",permalink:"/development/private-networks/tutorials/kubernetes/production"},next:{title:"Deploy using Microsoft Azure",permalink:"/development/private-networks/tutorials/azure"}},s={},p=[{value:"Automatic configuration",id:"automatic-configuration",level:2},{value:"1. Create a load balancer",id:"1-create-a-load-balancer",level:3},{value:"2. Check if the load balancer is properly deployed",id:"2-check-if-the-load-balancer-is-properly-deployed",level:3},{value:"3. Deploy Besu",id:"3-deploy-besu",level:3},{value:"Automatic detection errors",id:"automatic-detection-errors",level:2},{value:"<code>Service not found</code> error message",id:"service-not-found-error-message",level:3},{value:"<code>Forbidden</code> error message",id:"forbidden-error-message",level:3},{value:"<code>Ingress not found</code> error message",id:"ingress-not-found-error-message",level:3}],u={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configure-kubernetes-mode-in-nat-manager"},"Configure Kubernetes mode in NAT Manager"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/how-to/connect/specify-nat#auto"},(0,r.kt)("inlineCode",{parentName:"a"},"--nat-method=AUTO"))," or ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/how-to/connect/specify-nat#kubernetes"},(0,r.kt)("inlineCode",{parentName:"a"},"--nat-method=KUBERNETES"))," CLI options to let the Besu node automatically configure its IP address and ports."),(0,r.kt)("p",null,"Use mode ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/how-to/connect/specify-nat#none"},(0,r.kt)("inlineCode",{parentName:"a"},"--nat-method=NONE"))," to be able to set your Besu ports and IP address manually."),(0,r.kt)("p",null,"Default mode is ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/how-to/connect/specify-nat#auto"},(0,r.kt)("inlineCode",{parentName:"a"},"AUTO"))," but Besu will fallback to ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/how-to/connect/specify-nat#none"},(0,r.kt)("inlineCode",{parentName:"a"},"NONE"))," mode if automatic configuration fails."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"The following log shows fallback to ",(0,r.kt)("a",{parentName:"mdxAdmonitionTitle",href:"/development/public-networks/how-to/connect/specify-nat#none"},(0,r.kt)("inlineCode",{parentName:"a"},"NONE"))," mode after an automatic detection failure."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"```\nINFO  | KubernetesNatManager | Starting kubernetes NAT manager.\nDEBUG | KubernetesNatManager | Trying to update information using Kubernetes client SDK.\nDEBUG | NatService | Nat manager failed to configure itself automatically due to the following reason Service not found. NONE mode will be used\nINFO  | NetworkRunner | Starting Network.\n```\n"))),(0,r.kt)("h2",{id:"automatic-configuration"},"Automatic configuration"),(0,r.kt)("p",null,"Follow 3 steps to configure Besu for automatic IP address and ports detection on Kubernetes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#1-create-a-load-balancer"},"Create a load balancer")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#2-check-if-the-load-balancer-is-properly-deployed"},"Check if the load balancer is properly deployed")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#3-deploy-besu"},"Deploy Besu"))),(0,r.kt)("h3",{id:"1-create-a-load-balancer"},"1. Create a load balancer"),(0,r.kt)("p",null,"Deploy a ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," service for Besu to recover IP address and ports."),(0,r.kt)("p",null,"Here is an example that you can customize with your own ports and routing rules."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'---\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app.kubernetes.io/name: besu\n    app.kubernetes.io/release: "1.0.0"\n  name: besu\nspec:\n  ports:\n    - name: "json-rpc"\n      port: 8545\n      targetPort: 8545\n    - name: "rlpx"\n      port: 30303\n      targetPort: 30303\n  selector:\n    app.kubernetes.io/name: besu\n    app.kubernetes.io/release: "1.0.0"\n  type: LoadBalancer\n')),(0,r.kt)("p",null,"This service example lists the rules for the different ports used by Besu (",(0,r.kt)("inlineCode",{parentName:"p"},"json-rpc")," and",(0,r.kt)("inlineCode",{parentName:"p"}," rlpx"),"). The default value is used for ",(0,r.kt)("inlineCode",{parentName:"p"},"discovery"),"."),(0,r.kt)("h3",{id:"2-check-if-the-load-balancer-is-properly-deployed"},"2. Check if the load balancer is properly deployed"),(0,r.kt)("p",null,"Verify the load balancer readiness before launching Besu."),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl describe services besu")," to check the service status."),(0,r.kt)("p",null,"The command should display the following information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Name:                     besu\nNamespace:                default\nLabels:                   app.kubernetes.io/name=besu\n                          app.kubernetes.io/release=1.0.0\nAnnotations:              kubectl.kubernetes.io/last-applied-configuration:\n                            {"apiVersion":"v1","kind":"Service","metadata":{"annotations":{},"labels":{"app.kubernetes.io/name":"besu","app.kubernetes.io/release":"1....\nSelector:                 app.kubernetes.io/name=besu,app.kubernetes.io/release=1.0.0\nType:                     LoadBalancer\nIP:                       --------\nLoadBalancer Ingress:     ***<IP>***\n')),(0,r.kt)("p",null,"The load balancer must have an IP address displayed in place of ",(0,r.kt)("inlineCode",{parentName:"p"},"***<IP>***")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer Ingress")," line to be ready."),(0,r.kt)("p",null,"Run the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl describe services besu")," command again until the load balancer IP address appears in the output."),(0,r.kt)("h3",{id:"3-deploy-besu"},"3. Deploy Besu"),(0,r.kt)("p",null,"When steps 1 and 2 are completed, deploy Besu using the following YAML example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: besu-config\n  labels:\n    app.kubernetes.io/name: besu\n    app.kubernetes.io/release: 1.0.0\ndata:\n  BESU_LOGGING: "INFO"\n  BESU_NETWORK: "dev"\n  BESU_P2P_ENABLED: "true"\n  BESU_RPC_HTTP_ENABLED: "true"\n  BESU_RPC_HTTP_APIS: "eth,net,web3,debug,admin"\n  KUBE_CONFIG_PATH: "/opt/besu/shared/kube-config"\n---\napiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: besu\n  labels:\n    app.kubernetes.io/name: besu\n    app.kubernetes.io/release: "1.0.0"\nspec:\n  replicas: 1\n  strategy: {}\n  template:\n    metadata:\n      creationTimestamp: null\n      labels:\n        app.kubernetes.io/name: besu\n        app.kubernetes.io/release: "1.0.0"\n    spec:\n      containers:\n        - name: besu\n          image: "hyperledger/besu:latest"\n          imagePullPolicy: Always\n          ports:\n            - containerPort: 8545\n            - containerPort: 30303\n          envFrom:\n            - configMapRef:\n                name: besu-config\n      restartPolicy: Always\nstatus: {}\n')),(0,r.kt)("h2",{id:"automatic-detection-errors"},"Automatic detection errors"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Automatic detection error messages do not prevent you to use Besu."),(0,r.kt)("p",{parentName:"admonition"},"Try the fix indicated for each error or use ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/how-to/connect/specify-nat#kubernetes"},(0,r.kt)("inlineCode",{parentName:"a"},"--nat-method=KUBERNETES"))," CLI option and ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/how-to/connect/configure-ports"},"set IP address and port manually"),".")),(0,r.kt)("p",null,"Possible errors messages for Kubernetes automatic detection failure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#service-not-found-error-message"},(0,r.kt)("inlineCode",{parentName:"a"},"Service not found"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#forbidden-error-message"},(0,r.kt)("inlineCode",{parentName:"a"},"Forbidden"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#ingress-not-found-error-message"},(0,r.kt)("inlineCode",{parentName:"a"},"Ingress not found")))),(0,r.kt)("h3",{id:"service-not-found-error-message"},(0,r.kt)("inlineCode",{parentName:"h3"},"Service not found")," error message"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Error message:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Nat manager failed to configure itself automatically due to the following reason Service not found. NONE mode will be used")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cause:")," load balancer did start correctly or has the incorrect name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fix:")," check and modify load balancer YAML configuration and restart service.")),(0,r.kt)("admonition",{title:"Example error log",type:"info"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"```\nINFO  | KubernetesNatManager | Starting kubernetes NAT manager.\nDEBUG | KubernetesNatManager | Trying to update information using Kubernetes client SDK.\nDEBUG | NatService | Nat manager failed to configure itself automatically due to the following reason Service not found. NONE mode will be used\nINFO  | NetworkRunner | Starting Network.\n```\n"))),(0,r.kt)("h3",{id:"forbidden-error-message"},(0,r.kt)("inlineCode",{parentName:"h3"},"Forbidden")," error message"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Error message:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Nat manager failed to configure itself automatically due to the following reason Forbidden. NONE mode will be used"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Cause:")," Besu don't have permission to list the services via the Kubernetes API to retrieve IP address and ports from the load balancer.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Fix:")," Give it the required permissions using ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"Role-based access control"),"."),(0,r.kt)("p",{parentName:"li"},"If you can't manage permissions, define the IP address and ports manually with ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/how-to/connect/specify-nat#none"},(0,r.kt)("inlineCode",{parentName:"a"},"NONE"))," mode"))),(0,r.kt)("admonition",{title:"Example error log",type:"info"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"```\nINFO  | KubernetesNatManager | Starting kubernetes NAT manager.\nDEBUG | KubernetesNatManager | Trying to update information using Kubernetes client SDK.\nDEBUG | NatService | Nat manager failed to configure itself automatically due to the following reason Forbidden. NONE mode will be used\nINFO  | NetworkRunner | Starting Network.\n```\n"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For development environment, the permission issue can be fixed by running ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl create clusterrolebinding myapp-view-binding --clusterrole=admin --serviceaccount=default:default")),(0,r.kt)("p",{parentName:"admonition"},"This command should only be used on development environment and not in production environment."),(0,r.kt)("p",{parentName:"admonition"},"In production environment, require a finer management of permissions using Kubernetes ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"Role-based access control"),".")),(0,r.kt)("h3",{id:"ingress-not-found-error-message"},(0,r.kt)("inlineCode",{parentName:"h3"},"Ingress not found")," error message"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Error message:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Nat manager failed to configure itself automatically due to the following reason Ingress not found. NONE mode will be used")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cause:")," Load balancer did not finish to recover an IP address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fix:")," ",(0,r.kt)("a",{parentName:"li",href:"#2-check-if-the-load-balancer-is-properly-deployed"},"Check that the load balancer is properly deployed")," before launching Besu.")),(0,r.kt)("admonition",{title:"Example error log",type:"info"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"```\nINFO  | KubernetesNatManager | Starting kubernetes NAT manager.\nDEBUG | KubernetesNatManager | Trying to update information using Kubernetes client SDK.\nDEBUG | NatService | Nat manager failed to configure itself automatically due to the following reason Ingress not found. NONE mode will be used\nINFO  | NetworkRunner | Starting Network.\n```\n"))))}m.isMDXComponent=!0}}]);