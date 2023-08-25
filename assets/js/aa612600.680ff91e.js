"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[8726],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,k=u["".concat(i,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(87462),r=a(67294),l=a(86010),o=a(12466),s=a(16550),i=a(91980),p=a(67392),d=a(50012);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,p]=k({queryString:a,groupId:n}),[u,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),h=(()=>{const e=i??u;return c({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),b(e)}),[p,b,l]),tabValues:l}}var h=a(72389);const v="tabList__CuJ",g="tabItem_LNqP";function f(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),n=p[a].value;n!==s&&(u(t),i(n))},c=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:c,onClick:m},o,{className:(0,l.Z)("tabs__item",g,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",v)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function T(e){const t=(0,h.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},79365:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),l=a(74866),o=a(85162);const s={title:"EVM tool options",sidebar_position:5,description:"Besu EVM tool options reference",tags:["public networks","private networks"]},i="EVM tool reference",p={unversionedId:"public-networks/reference/evm-tool",id:"public-networks/reference/evm-tool",title:"EVM tool options",description:"Besu EVM tool options reference",source:"@site/docs/public-networks/reference/evm-tool.md",sourceDirName:"public-networks/reference",slug:"/public-networks/reference/evm-tool",permalink:"/development/public-networks/reference/evm-tool",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/reference/evm-tool.md",tags:[{label:"public networks",permalink:"/development/tags/public-networks"},{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1692988690,formattedLastUpdatedAt:"Aug 25, 2023",sidebarPosition:5,frontMatter:{title:"EVM tool options",sidebar_position:5,description:"Besu EVM tool options reference",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Genesis file items",permalink:"/development/public-networks/reference/genesis-items"},next:{title:"Transaction trace types",permalink:"/development/public-networks/reference/trace-types"}},d={},u=[{value:"Run options",id:"run-options",level:2},{value:"<code>code</code>",id:"code",level:3},{value:"<code>gas</code>",id:"gas",level:3},{value:"<code>price</code>",id:"price",level:3},{value:"<code>sender</code>",id:"sender",level:3},{value:"<code>receiver</code>",id:"receiver",level:3},{value:"<code>input</code>",id:"input",level:3},{value:"<code>value</code>",id:"value",level:3},{value:"<code>json</code>, <code>trace</code>",id:"json-trace",level:3},{value:"<code>json-alloc</code>",id:"json-alloc",level:3},{value:"<code>[no]memory</code>, <code>trace.[no]memory</code>",id:"nomemory-tracenomemory",level:3},{value:"<code>trace.[no]stack</code>",id:"tracenostack",level:3},{value:"<code>trace.[no]returndata</code>",id:"tracenoreturndata",level:3},{value:"<code>[no]time</code>",id:"notime",level:3},{value:"<code>genesis</code>",id:"genesis",level:3},{value:"<code>chain</code>",id:"chain",level:3},{value:"<code>repeat</code>",id:"repeat",level:3},{value:"<code>revert-reason-enabled</code>",id:"revert-reason-enabled",level:3},{value:"<code>fork</code>",id:"fork",level:3},{value:"<code>key-value-storage</code>",id:"key-value-storage",level:3},{value:"<code>data-path</code>",id:"data-path",level:3},{value:"<code>block-number</code>",id:"block-number",level:3},{value:"<code>version</code>",id:"version",level:3},{value:"State test options",id:"state-test-options",level:2},{value:"<code>json</code>, <code>trace</code>",id:"json-trace-1",level:3},{value:"<code>[no]memory</code>, <code>trace.[no]memory</code>",id:"nomemory-tracenomemory-1",level:3},{value:"Use command arguments",id:"use-command-arguments",level:3},{value:"Use standard input",id:"use-standard-input",level:3},{value:"EOF code validation",id:"eof-code-validation",level:2},{value:"<code>file</code>",id:"file",level:3},{value:"Use command arguments",id:"use-command-arguments-1",level:3},{value:"Use standard input",id:"use-standard-input-1",level:3}],m={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"evm-tool-reference"},"EVM tool reference"),(0,r.kt)("p",null,"This reference describes options for running the following ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/how-to/troubleshoot/evm-tool"},"using the EVM tool"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run-options"},"Arbitrary EVM programs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#state-test-options"},"Ethereum state tests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#eof-code-validation"},"Ethereum object formatted code"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Option names that include ",(0,r.kt)("inlineCode",{parentName:"p"},"trace"),", such as ",(0,r.kt)("a",{parentName:"p",href:"#json-trace"},(0,r.kt)("inlineCode",{parentName:"a"},"--trace"))," and ",(0,r.kt)("a",{parentName:"p",href:"#nomemory-tracenomemory"},(0,r.kt)("inlineCode",{parentName:"a"},"--trace.[no]memory"))," exist to support ",(0,r.kt)("a",{parentName:"p",href:"https://ethereum-tests.readthedocs.io/en/latest/t8ntool.html"},(0,r.kt)("inlineCode",{parentName:"a"},"t8ntool"))," reference testing, and are interchangeable with their standard option names.")),(0,r.kt)("h2",{id:"run-options"},"Run options"),(0,r.kt)("p",null,"The first mode of the EVM tool runs an arbitrary EVM and is invoked without an extra command. Command line options specify the code and other contextual information."),(0,r.kt)("h3",{id:"code"},(0,r.kt)("inlineCode",{parentName:"h3"},"code")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--code=<code>\n"))),(0,r.kt)(o.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--code=5B600080808060045AFA50600056\n")))),(0,r.kt)("p",null,"The code to be executed, in compiled hex code form. Execution fails if this is not set."),(0,r.kt)("h3",{id:"gas"},(0,r.kt)("inlineCode",{parentName:"h3"},"gas")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--gas=<integer>\n"))),(0,r.kt)(o.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--gas=100000000\n")))),(0,r.kt)("p",null,"Amount of gas to make available to the EVM. The default is 10 billion, a number unlikely to be seen in any production blockchain."),(0,r.kt)("h3",{id:"price"},(0,r.kt)("inlineCode",{parentName:"h3"},"price")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--price=<integer>\n"))),(0,r.kt)(o.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--price=10\n")))),(0,r.kt)("p",null,"Price of gas in Gwei. The default is ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),". If set to a non-zero value, the sender account must have enough value to cover the gas fees."),(0,r.kt)("h3",{id:"sender"},(0,r.kt)("inlineCode",{parentName:"h3"},"sender")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--sender=<address>\n"))),(0,r.kt)(o.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--sender=0xfe3b557e8fb62b89f4916b721be55ceb828dbd73\n")))),(0,r.kt)("p",null,"The account the invocation is sent from. The specified account must exist in the world state, which, unless specified by ",(0,r.kt)("a",{parentName:"p",href:"#genesis"},(0,r.kt)("inlineCode",{parentName:"a"},"--genesis")),", is the set of ",(0,r.kt)("a",{parentName:"p",href:"/development/private-networks/reference/accounts-for-testing"},"accounts used for testing"),"."),(0,r.kt)("h3",{id:"receiver"},(0,r.kt)("inlineCode",{parentName:"h3"},"receiver")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--receiver=<address>\n"))),(0,r.kt)(o.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--receiver=0x588108d3eab34e94484d7cda5a1d31804ca96fe7\n")))),(0,r.kt)("p",null,"The account the invocation is sent to. The specified account does not need to exist."),(0,r.kt)("h3",{id:"input"},(0,r.kt)("inlineCode",{parentName:"h3"},"input")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--input=<code>\n"))),(0,r.kt)(o.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--input=9064129300000000000000000000000000000000000000000000000000000000\n")))),(0,r.kt)("p",null,"The data passed into the call. Corresponds to the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field of the transaction and is returned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"CALLDATA")," and related opcodes."),(0,r.kt)("h3",{id:"value"},(0,r.kt)("inlineCode",{parentName:"h3"},"value")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--value=<integer>\n"))),(0,r.kt)(o.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--value=1000000000000000000\n")))),(0,r.kt)("p",null,"The value, in wei, attached to this transaction. For operations that query the value or transfer it to other accounts this is the amount that is available. The amount is not reduced to cover intrinsic cost and gas fees."),(0,r.kt)("h3",{id:"json-trace"},(0,r.kt)("inlineCode",{parentName:"h3"},"json"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"trace")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--json\n")))),(0,r.kt)("p",null,"Provides an operation-by-operation trace of the command in JSON."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--trace")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"--json"),"."),(0,r.kt)("h3",{id:"json-alloc"},(0,r.kt)("inlineCode",{parentName:"h3"},"json-alloc")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--json-alloc\n")))),(0,r.kt)("p",null,"Outputs a JSON summary of the post-execution world state and allocations."),(0,r.kt)("h3",{id:"nomemory-tracenomemory"},(0,r.kt)("inlineCode",{parentName:"h3"},"[no]memory"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"trace.[no]memory")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--nomemory, --memory\n")))),(0,r.kt)("p",null,"Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"--nomemory")," disables tracing the memory output for each operation. Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"--memory")," enables it. Memory traces are disabled by default."),(0,r.kt)("p",null,"For memory heavy scripts, disabling memory traces may reduce the volume of JSON output."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--trace.[no]memory")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"--[no]memory"),"."),(0,r.kt)("h3",{id:"tracenostack"},(0,r.kt)("inlineCode",{parentName:"h3"},"trace.[no]stack")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--trace.nostack, --trace.stack\n")))),(0,r.kt)("p",null,"Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"--trace.nostack")," disables tracing the operand stack for each operation. Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"--trace.stack")," enables it. Stack traces are enabled by default."),(0,r.kt)("h3",{id:"tracenoreturndata"},(0,r.kt)("inlineCode",{parentName:"h3"},"trace.[no]returndata")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--trace.noreturndata, --trace.returndata\n")))),(0,r.kt)("p",null,"Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"--trace.noreturndata")," disables tracing the return data for each operation. Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"--trace.returndata")," enables it. Return data traces are enabled by default."),(0,r.kt)("h3",{id:"notime"},(0,r.kt)("inlineCode",{parentName:"h3"},"[no]time")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--notime, --time\n")))),(0,r.kt)("p",null,"Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"--notime")," disables including time data in the summary output. Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"--time")," enables it."),(0,r.kt)("p",null,"This is useful for testing and differential evaluations."),(0,r.kt)("h3",{id:"genesis"},(0,r.kt)("inlineCode",{parentName:"h3"},"genesis")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--genesis=<path>\n"))),(0,r.kt)(o.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--genesis=/opt/besu/genesis.json\n")))),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/genesis-items"},"Besu genesis file")," to use when evaluating the EVM. Most useful are the ",(0,r.kt)("inlineCode",{parentName:"p"},"alloc")," items that set up accounts and their stored memory states."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--prestate")," is a deprecated alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"--genesis"),"."),(0,r.kt)("h3",{id:"chain"},(0,r.kt)("inlineCode",{parentName:"h3"},"chain")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--chain=<mainnet|goerli|sepolia|dev|classic|mordor|kotti|astor>\n"))),(0,r.kt)(o.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--chain=goerli\n")))),(0,r.kt)("p",null,"The well-known network genesis file to use when evaluating the EVM. These values are an alternative to the ",(0,r.kt)("a",{parentName:"p",href:"#genesis"},(0,r.kt)("inlineCode",{parentName:"a"},"--genesis"))," option for well-known networks."),(0,r.kt)("h3",{id:"repeat"},(0,r.kt)("inlineCode",{parentName:"h3"},"repeat")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--repeat=<integer>\n"))),(0,r.kt)(o.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--repeat=1000\n")))),(0,r.kt)("p",null,"Number of times to repeat the contract before gathering timing information. This is useful when benchmarking EVM operations. The default is ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("h3",{id:"revert-reason-enabled"},(0,r.kt)("inlineCode",{parentName:"h3"},"revert-reason-enabled")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--revert-reason-enabled\n")))),(0,r.kt)("p",null,"Enables tracing the reason included in ",(0,r.kt)("inlineCode",{parentName:"p"},"REVERT")," operations. The revert reason is enabled by default."),(0,r.kt)("h3",{id:"fork"},(0,r.kt)("inlineCode",{parentName:"h3"},"fork")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--fork=<string>\n"))),(0,r.kt)(o.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--fork=FutureEips\n")))),(0,r.kt)("p",null,"Specific fork to evaluate, overriding network settings."),(0,r.kt)("h3",{id:"key-value-storage"},(0,r.kt)("inlineCode",{parentName:"h3"},"key-value-storage")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--key-value-storage=<memory|rocksdb>\n"))),(0,r.kt)(o.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--key-value-storage=rocksdb\n")))),(0,r.kt)("p",null,"Kind of key value storage to use."),(0,r.kt)("p",null,"It might be useful to execute isolated EVM calls in the context of an actual world state. The default is ",(0,r.kt)("inlineCode",{parentName:"p"},"memory"),", which executes the call only in the context of the world provided by ",(0,r.kt)("a",{parentName:"p",href:"#genesis"},(0,r.kt)("inlineCode",{parentName:"a"},"--genesis"))," or ",(0,r.kt)("a",{parentName:"p",href:"#chain"},(0,r.kt)("inlineCode",{parentName:"a"},"--chain"))," at block zero."),(0,r.kt)("p",null,"When set to ",(0,r.kt)("inlineCode",{parentName:"p"},"rocksdb")," and combined with ",(0,r.kt)("a",{parentName:"p",href:"#data-path"},(0,r.kt)("inlineCode",{parentName:"a"},"--data-path")),", ",(0,r.kt)("a",{parentName:"p",href:"#block-number"},(0,r.kt)("inlineCode",{parentName:"a"},"--block-number")),", and ",(0,r.kt)("a",{parentName:"p",href:"#genesis"},(0,r.kt)("inlineCode",{parentName:"a"},"--genesis")),", a Besu node that isn't currently running can be used to provide the appropriate world state for a transaction. This is useful when evaluating consensus failures."),(0,r.kt)("h3",{id:"data-path"},(0,r.kt)("inlineCode",{parentName:"h3"},"data-path")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--data-path=<path>\n"))),(0,r.kt)(o.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--data-path=/opt/besu/data\n")))),(0,r.kt)("p",null,"When ",(0,r.kt)("a",{parentName:"p",href:"#key-value-storage"},(0,r.kt)("inlineCode",{parentName:"a"},"--key-value-storage"))," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"rocksdb"),", specifies the location of the database on disk."),(0,r.kt)("h3",{id:"block-number"},(0,r.kt)("inlineCode",{parentName:"h3"},"block-number")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--block-number=<integer>\n"))),(0,r.kt)(o.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--block-number=10000000\n")))),(0,r.kt)("p",null,"The block number to evaluate the code against. Used to ensure that the EVM is evaluating the code against the correct fork, or to specify the world state when ",(0,r.kt)("a",{parentName:"p",href:"#key-value-storage"},(0,r.kt)("inlineCode",{parentName:"a"},"--key-value-storage"))," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"rocksdb"),"."),(0,r.kt)("h3",{id:"version"},(0,r.kt)("inlineCode",{parentName:"h3"},"version")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--version\n")))),(0,r.kt)("p",null,"Displays the version information."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-v")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"--version"),"."),(0,r.kt)("h2",{id:"state-test-options"},"State test options"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"state-test")," subcommand allows the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/tests/tree/develop/GeneralStateTests"},"Ethereum state tests")," to be evaluated. The only applicable options are ",(0,r.kt)("inlineCode",{parentName:"p"},"--json")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--nomemory"),"."),(0,r.kt)("h3",{id:"json-trace-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"json"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"trace")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--json\n")))),(0,r.kt)("p",null,"Provides an operation-by-operation trace of the command in JSON."),(0,r.kt)("p",null,"Set this option for EVM Lab Fuzzing. Whether or not ",(0,r.kt)("inlineCode",{parentName:"p"},"--json")," is set, a summary JSON object is printed to standard output for each state test executed."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--trace")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"--json"),"."),(0,r.kt)("h3",{id:"nomemory-tracenomemory-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"[no]memory"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"trace.[no]memory")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--[no]memory\n")))),(0,r.kt)("p",null,"Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"--nomemory")," disables tracing the memory output for each operation. Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"--memory")," enables it. Memory traces are disabled by default."),(0,r.kt)("p",null,"For memory heavy scripts, disabling memory traces may reduce the volume of JSON output."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--trace.[no]memory")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"--[no]memory"),"."),(0,r.kt)("h3",{id:"use-command-arguments"},"Use command arguments"),(0,r.kt)("p",null,"If you use command arguments, you can list one or more state tests. All the state tests are evaluated in the order they are specified."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Docker example",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -v ${PWD}:/opt/referencetests hyperledger/besu-evmtool:develop --json state-test /opt/referencetests/GeneralStateTests/stExample/add11.json\n"))),(0,r.kt)(o.Z,{label:"CLI example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"evm --json state-test stExample/add11.json\n")))),(0,r.kt)("h3",{id:"use-standard-input"},"Use standard input"),(0,r.kt)("p",null,"If no reference tests are passed in using the command line, the EVM tool loads one complete JSON object from standard input and executes that state test."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Docker example",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -i hyperledger/besu-evmtool:develop --json state-test < stExample/add11.json\n"))),(0,r.kt)(o.Z,{label:"CLI example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"evm --json state-test < stExample/add11.json\n")))),(0,r.kt)("h2",{id:"eof-code-validation"},"EOF code validation"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"code-validate")," subcommand allows ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-3540"},"Ethereum object formatted (EOF)")," code to be validated. It accepts candidate EOF containers or EVM bytecode using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--file")," option, command arguments, or standard input."),(0,r.kt)("h3",{id:"file"},(0,r.kt)("inlineCode",{parentName:"h3"},"file")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--file=<file>\n"))),(0,r.kt)(o.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--file=eof.txt\n")))),(0,r.kt)("p",null,"File containing one or more EOF containers or EVM bytecode. Each line in the file is considered a separate program."),(0,r.kt)("h3",{id:"use-command-arguments-1"},"Use command arguments"),(0,r.kt)("p",null,"If you use command arguments, each argument is considered a separate program. If a code segment includes spaces, it must be contained in quotes."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Docker example",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'docker run --rm hyperledger/besu-evmtool:develop code-validate "0xef0001 010008 020002-0007-0002 030000 00 00000002-02010002 59-59-b00001-50-b1 03-b1" 0xef0002 0xef00010100040200010001030000000000000000\n'))),(0,r.kt)(o.Z,{label:"CLI example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'evm code-validate "0xef0001 010008 020002-0007-0002 030000 00 00000002-02010002 59-59-b00001-50-b1 03-b1" 0xef0002 0xef00010100040200010001030000000000000000\n')))),(0,r.kt)("h3",{id:"use-standard-input-1"},"Use standard input"),(0,r.kt)("p",null,"If no reference tests are passed in using the command line, the EVM tool loads and validates code from standard input. Each line is considered a separate program. Comment lines and blanks are ignored."))}c.isMDXComponent=!0}}]);