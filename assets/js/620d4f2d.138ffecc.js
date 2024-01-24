"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[58088],{70238:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(85893),r=t(11151);const o={title:"Deploy a Hyperledger Besu private network with Kubernetes",description:"Deploying Hyperledger Besu with Kubernetes",tags:["private networks"]},a="Deploy Besu using Kubernetes",i={id:"private-networks/tutorials/kubernetes/index",title:"Deploy a Hyperledger Besu private network with Kubernetes",description:"Deploying Hyperledger Besu with Kubernetes",source:"@site/versioned_docs/version-23.4.1/private-networks/tutorials/kubernetes/index.md",sourceDirName:"private-networks/tutorials/kubernetes",slug:"/private-networks/tutorials/kubernetes/",permalink:"/23.4.1/private-networks/tutorials/kubernetes/",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/tutorials/kubernetes/index.md",tags:[{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1706065193,formattedLastUpdatedAt:"Jan 24, 2024",frontMatter:{title:"Deploy a Hyperledger Besu private network with Kubernetes",description:"Deploying Hyperledger Besu with Kubernetes",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Interact with a deployed contract",permalink:"/23.4.1/private-networks/tutorials/contracts/interact"},next:{title:"Local playground",permalink:"/23.4.1/private-networks/tutorials/kubernetes/playground"}},l={},c=[{value:"Quorum-Kubernetes",id:"quorum-kubernetes",level:2},{value:"Cloud support",id:"cloud-support",level:3},{value:"Limitations",id:"limitations",level:2},{value:"CNI",id:"cni",level:3},{value:"Multi-cluster",id:"multi-cluster",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Namespaces",id:"namespaces",level:3},{value:"Nodes",id:"nodes",level:3},{value:"Role-based access controls",id:"role-based-access-controls",level:3},{value:"Storage",id:"storage",level:3},{value:"Monitoring",id:"monitoring",level:3},{value:"Ingress Controllers",id:"ingress-controllers",level:3}];function u(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"deploy-besu-using-kubernetes",children:"Deploy Besu using Kubernetes"}),"\n",(0,n.jsxs)(s.p,{children:["Use the ",(0,n.jsx)(s.a,{href:"https://github.com/ConsenSys/besu-kubernetes",children:"reference implementations"})," to install private networks using Kubernetes (K8s). Reference implementations are available using:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/ConsenSys/quorum-kubernetes/tree/master/helm",children:"Helm"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/roboll/helmfile",children:"Helmfile"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/ConsenSys/besu-kubernetes/tree/master/playground/kubectl",children:(0,n.jsx)(s.code,{children:"kubectl"})}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Familiarize yourself with the reference implementations and customize them for your requirements."}),"\n",(0,n.jsx)(s.h2,{id:"quorum-kubernetes",children:"Quorum-Kubernetes"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://github.com/ConsenSys/quorum-Kubernetes",children:"Quorum-Kubernetes"})," is a repository containing Kubernetes manifests and Helm charts that you can customize and deploy on a local cluster or in the cloud."]}),"\n",(0,n.jsx)(s.admonition,{type:"important",children:(0,n.jsxs)(s.p,{children:["We recommend starting with the ",(0,n.jsx)(s.a,{href:"https://github.com/ConsenSys/quorum-kubernetes/tree/master/playground",children:"playground"})," directory and working through the example setups before moving to the ",(0,n.jsx)(s.a,{href:"https://github.com/ConsenSys/quorum-kubernetes/tree/master/helm/",children:(0,n.jsx)(s.code,{children:"Helm charts"})})," directory."]})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"helm"})," directory contains charts for the various components, and each chart has a ",(0,n.jsx)(s.code,{children:"cluster"})," map with features that you can toggle."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"cluster:\n  provider: local  # choose from: local | aws | azure\n  cloudNativeServices: false # set to true to use Cloud Native Services (SecretsManager and IAM for AWS; KeyVault & Managed Identities for Azure)\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Setting ",(0,n.jsx)(s.code,{children:"cluster.cloudNativeServices: true"})," stores keys in AWS Secrets Manager or Azure Key Vault instead of Kubernetes Secrets, and will also make use of AWS IAM or Azure Managed Identities for the pods."]}),"\n",(0,n.jsx)(s.h3,{id:"cloud-support",children:"Cloud support"}),"\n",(0,n.jsxs)(s.p,{children:["The repository's ",(0,n.jsx)(s.code,{children:"helm"})," charts support on-premise and cloud providers such as AWS, Azure, GCP, IBM etc. You can configure the provider in the ",(0,n.jsx)(s.a,{href:"https://github.com/ConsenSys/quorum-kubernetes/blob/5920caff6dd15b4ca17f760ad9e4d7d2e43b41a1/helm/values/genesis-besu.yml",children:"values.yml"})," file of the respective charts by setting ",(0,n.jsx)(s.code,{children:"cluster.provider"})," to ",(0,n.jsx)(s.code,{children:"local"}),", ",(0,n.jsx)(s.code,{children:"aws"}),", or ",(0,n.jsx)(s.code,{children:"azure"}),". If you use GCP, IBM etc., please set ",(0,n.jsx)(s.code,{children:"cluster.provider: local"})," and ",(0,n.jsx)(s.code,{children:"cluster.cloudNativeServices: false"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["The repository also contains ",(0,n.jsx)(s.a,{href:"https://github.com/ConsenSys/quorum-kubernetes/tree/master/azure",children:"Azure ARM templates"})," and ",(0,n.jsxs)(s.a,{href:"https://github.com/ConsenSys/quorum-kubernetes/tree/master/aws",children:["AWS ",(0,n.jsx)(s.code,{children:"eksctl"})," templates"]})," to deploy the required base infrastructure."]}),"\n",(0,n.jsx)(s.h2,{id:"limitations",children:"Limitations"}),"\n",(0,n.jsx)(s.p,{children:"When using multi-clusters, Kubernetes load balancers disallow TCP and UDP traffic on the same port, which inhibits discovery working natively for each pod. Use the following solutions to mitigate this limitation:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Disallow discovery and use static nodes to allow only TCP traffic. This isn't an issue for load balancers or exposing nodes publicly."}),"\n",(0,n.jsxs)(s.li,{children:["If you need to use discovery, use something such as ",(0,n.jsx)(s.a,{href:"#cni",children:"CNI"})," which is supported by all major cloud providers, and the cloud templates already have CNI implemented."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"cni",children:"CNI"}),"\n",(0,n.jsxs)(s.p,{children:["With the traditional ",(0,n.jsx)(s.code,{children:"kubenet"})," networking mode, nodes get an IP from the virtual network subnet. Each node in turn uses NAT to configure the pods so that they reach other pods on the virtual network. This limits where they can reach but also more specifically what can reach them. For example, an external VM which must have custom routes does not scale well."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"without-CNI",src:t(9985).Z+"",width:"956",height:"412"})}),"\n",(0,n.jsx)(s.p,{children:"CNI, on the other hand, allows every pod to get a unique IP directly from the virtual subnet which removes this restriction. Therefore, it has a limit on the maximum number of pods that can be spun up, so you must plan ahead to avoid IP exhaustion."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"with-CNI",src:t(75995).Z+"",width:"957",height:"404"})}),"\n",(0,n.jsx)(s.h2,{id:"multi-cluster",children:"Multi-cluster"}),"\n",(0,n.jsxs)(s.p,{children:["You must enable ",(0,n.jsx)(s.a,{href:"#cni",children:"CNI"})," to use multi-cluster, or to connect external nodes to an existing Kubernetes cluster. To connect multiple clusters, they must each have different CIDR blocks to ensure no conflicts, and the first step is to peer the VPCs or VNets together and update the route tables. From that point on you can use static nodes and pods to communicate across the cluster."]}),"\n",(0,n.jsx)(s.p,{children:"The same setup also works to connect external nodes and business applications from other infrastructure, either in the cloud or on premise."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"multi-cluster",src:t(32400).Z+"",width:"1151",height:"591"})}),"\n",(0,n.jsx)(s.h2,{id:"concepts",children:"Concepts"}),"\n",(0,n.jsx)(s.h3,{id:"namespaces",children:"Namespaces"}),"\n",(0,n.jsxs)(s.p,{children:["In Kubernetes, ",(0,n.jsx)(s.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/",children:"namespaces"})," provide a mechanism for isolating groups of resources within a single cluster. Both namespaces and resources (for example, Stateful Sets or Services) within a namespace must be unique, but resources across namespaces don't need to be."]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"Namespace-based scoping is not applicable for cluster-wide objects (for example, Storage Class or Persistent Volumes)."})}),"\n",(0,n.jsx)(s.h3,{id:"nodes",children:"Nodes"}),"\n",(0,n.jsx)(s.p,{children:"Consider using Stateful Sets instead of Deployments for Besu. The term 'client node' refers to bootnode, validator and member/RPC nodes. For Besu nodes, we only use CLI arguments to keep things consistent."}),"\n",(0,n.jsx)(s.h3,{id:"role-based-access-controls",children:"Role-based access controls"}),"\n",(0,n.jsx)(s.p,{children:"We encourage using role-based access controls (RBACs) for access to the private key of each node, that is, only a specific pod or statefulset is allowed to access a specific secret."}),"\n",(0,n.jsxs)(s.p,{children:["If you need to specify a Kube configuration file for each pod, use the ",(0,n.jsx)(s.code,{children:"KUBE_CONFIG_PATH"})," variable."]}),"\n",(0,n.jsx)(s.h3,{id:"storage",children:"Storage"}),"\n",(0,n.jsx)(s.p,{children:"We use separate data volumes to store the blockchain data. This is similar to using separate volumes to store data when using docker containers natively or docker-compose. This is done for a few reasons:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Containers are mortal and we do not want to store data on them."}),"\n",(0,n.jsx)(s.li,{children:"Kubernetes host nodes can fail and we want the chain data to persist."}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Ensure that you provide enough data storage capacity for all nodes on the cluster. Select the appropriate type of ",(0,n.jsx)(s.a,{href:"https://kubernetes.io/docs/concepts/storage/storage-classes/",children:"Storage Class"})," based on your cloud provider. In the templates, the size of the ",(0,n.jsx)(s.a,{href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims",children:"volume claims"})," is set to 20Gb by default; you can change this depending on your needs. If you have a different storage account than the one in the charts, you may edit those ",(0,n.jsx)(s.a,{href:"https://github.com/ConsenSys/quorum-kubernetes/blob/5920caff6dd15b4ca17f760ad9e4d7d2e43b41a1/helm/charts/besu-node/templates/node-storage.yaml",children:"Storage Classes"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["When using Persistent Volume Claims, set the ",(0,n.jsx)(s.code,{children:"allowVolumeExpansion"})," to ",(0,n.jsx)(s.code,{children:"true"}),". This helps keep costs low and enables growing the volume over time rather than creating new volumes and copying data across."]}),"\n",(0,n.jsx)(s.h3,{id:"monitoring",children:"Monitoring"}),"\n",(0,n.jsx)(s.p,{children:"We recommend deploying metrics to get an overview of the network, nodes, and volumes. You can also create alerts."}),"\n",(0,n.jsx)(s.p,{children:"Besu publishes metrics to Prometheus, and you can configure metrics using the kubernetes scraper configuration. We also have custom Grafana dashboards to monitor the blockchain."}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["Refer to ",(0,n.jsx)(s.code,{children:"values/monitoring.yml"})," to configure the alerts per your requirements (for example slack or email)."]})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"cd helm\nhelm repo add prometheus-community https://prometheus-community.github.io/helm-charts\nhelm repo update\nhelm install monitoring prometheus-community/kube-prometheus-stack --version 34.10.0 --namespace=besu --create-namespace --values ./values/monitoring.yml --wait\nkubectl --namespace besu apply -f  ./values/monitoring/\n"})}),"\n",(0,n.jsx)(s.p,{children:"You can configure Besu to suit your environment. For example, use the Elastic charts to log to a file that you can parse using Logstash into an ELK cluster."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"cd helm\nhelm repo add elastic https://helm.elastic.co\nhelm repo update\n# if on cloud\nhelm install elasticsearch --version 7.17.1 elastic/elasticsearch --namespace besu --create-namespace --values ./values/elasticsearch.yml\n# if local - set the replicas to 1\nhelm install elasticsearch --version 7.17.1 elastic/elasticsearch --namespace besu --create-namespace --values ./values/elasticsearch.yml --set replicas=1 --set minimumMasterNodes: 1\nhelm install kibana --version 7.17.1 elastic/kibana --namespace besu --values ./values/kibana.yml\nhelm install filebeat --version 7.17.1 elastic/filebeat  --namespace besu --values ./values/filebeat.yml\n"})}),"\n",(0,n.jsx)(s.h3,{id:"ingress-controllers",children:"Ingress Controllers"}),"\n",(0,n.jsxs)(s.p,{children:["If you require the ingress controllers for the RPC calls or the monitoring dashboards, we have provided example ",(0,n.jsx)(s.a,{href:"https://github.com/ConsenSys/quorum-kubernetes/blob/5920caff6dd15b4ca17f760ad9e4d7d2e43b41a1/ingress/ingress-rules-besu.yml",children:"rules"})," that are pre-configured for common use cases. Use these as a reference and develop solutions to match your network topology and requirements."]})]})}function d(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},9985:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/kubernetes-1-d999da470021bd1aba37a76fd868e18f.jpeg"},75995:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/kubernetes-2-4503dd0ffbb4151254fcf515a0e5fbd2.jpeg"},32400:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/kubernetes-3-eb071f2ad027b1e11e96e3c4f68a745a.png"},11151:(e,s,t)=>{t.d(s,{Z:()=>i,a:()=>a});var n=t(67294);const r={},o=n.createContext(r);function a(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);