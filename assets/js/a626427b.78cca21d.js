"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[99583],{69449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=n(85893),a=n(11151);const r={title:"Maintenance",sidebar_position:5,description:"Maintenance for Besu on a Kubernetes cluster",tags:["private networks"]},i="Maintenance",o={id:"private-networks/tutorials/kubernetes/maintenance",title:"Maintenance",description:"Maintenance for Besu on a Kubernetes cluster",source:"@site/docs/private-networks/tutorials/kubernetes/maintenance.md",sourceDirName:"private-networks/tutorials/kubernetes",slug:"/private-networks/tutorials/kubernetes/maintenance",permalink:"/development/private-networks/tutorials/kubernetes/maintenance",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/tutorials/kubernetes/maintenance.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1706065193,formattedLastUpdatedAt:"Jan 24, 2024",sidebarPosition:5,frontMatter:{title:"Maintenance",sidebar_position:5,description:"Maintenance for Besu on a Kubernetes cluster",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Using the Quorum Explorer",permalink:"/development/private-networks/tutorials/kubernetes/quorum-explorer"},next:{title:"Production",permalink:"/development/private-networks/tutorials/kubernetes/production"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Update a persistent volume claim size",id:"update-a-persistent-volume-claim-size",level:2},{value:"Update Besu versions",id:"update-besu-versions",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"maintenance",children:"Maintenance"}),"\n",(0,s.jsx)(t.p,{children:"You can perform maintenance for Besu on a Kubernetes cluster."}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Clone the ",(0,s.jsx)(t.a,{href:"https://github.com/ConsenSys/quorum-kubernetes",children:"Quorum-Kubernetes"})," repository"]}),"\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(t.a,{href:"/development/private-networks/tutorials/kubernetes/cluster",children:"running Kubernetes cluster"})," with a ",(0,s.jsx)(t.a,{href:"/development/private-networks/tutorials/kubernetes/charts",children:"network"})]}),"\n",(0,s.jsxs)(t.li,{children:["Install ",(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/tasks/tools/",children:"Kubectl"})]}),"\n",(0,s.jsxs)(t.li,{children:["Install ",(0,s.jsx)(t.a,{href:"https://helm.sh/docs/intro/install/",children:"Helm3"})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"update-a-persistent-volume-claim-size",children:"Update a persistent volume claim size"}),"\n",(0,s.jsxs)(t.p,{children:["Over time, as the chain grows, so will the amount of space used by the persistent volume claim (PVC). As of Kubernetes v1.11, ",(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/storage/storage-classes/#allow-volume-expansion",children:"certain types of Storage Classes"})," allow volume resizing. Production charts for Azure use Azure Files, and on AWS use EBS Block Store which allow for volume expansion."]}),"\n",(0,s.jsxs)(t.p,{children:["To update the volume size, you must update the override values file. For example, to increase the size on the transaction nodes volumes, add the following snippet to the ",(0,s.jsx)(t.a,{href:"https://github.com/ConsenSys/quorum-kubernetes/blob/5920caff6dd15b4ca17f760ad9e4d7d2e43b41a1/helm/values/txnode.yml",children:(0,s.jsx)(t.code,{children:"txnode values.yml"})})," file, with the new size limit (the following example uses 50Gi)."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'storage:\n  sizeLimit: "50Gi"\n  pvcSizeLimit: "50Gi"\n'})}),"\n",(0,s.jsx)(t.p,{children:"Once complete, update the node via helm:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"helm upgrade tx-1 ./charts/besu-node --namespace besu --values ./values/txnode.yml\n"})}),"\n",(0,s.jsx)(t.h2,{id:"update-besu-versions",children:"Update Besu versions"}),"\n",(0,s.jsx)(t.admonition,{type:"important",children:(0,s.jsx)(t.p,{children:"When updating Besu nodes across a cluster, perform the updates as a rolling update and not all at once, especially for the validator pool. If all the validators are taken offline, the chain halts, and you must wait for round changes to expire before blocks are created again."})}),"\n",(0,s.jsxs)(t.p,{children:["Updates for Besu can be done via Helm in exactly the same manner as other applications. Alternatively, this can be done via ",(0,s.jsx)(t.code,{children:"kubectl"}),". This example updates a node called ",(0,s.jsx)(t.code,{children:"besu-validator-3"}),":"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Set the update policy to use rolling updates (if not done already):"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'kubectl patch statefulset besu-validator-3 --namespace besu -p \'{"spec":{"updateStrategy":{"type":"RollingUpdate"}}}\'\n'})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Update the Besu version via Helm:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"helm upgrade bootnode-1 ./charts/besu-node --namespace besu --values ./values/bootnode.yml --set image.besu.tag=21.10.0\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Or via ",(0,s.jsx)(t.code,{children:"kubectl"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'kubectl patch statefulset besu-validator-3 --namespace besu --type=\'json\' -p=\'[{"op": "replace", "path": "/spec/template/spec/containers/0/image", "value":"hyperledger/besu:21.10.0"}]\'\n'})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var s=n(67294);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);