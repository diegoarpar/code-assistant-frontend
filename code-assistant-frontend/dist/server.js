(()=>{var e,t={92:(e,t,n)=>{const o=n(938);n(183),e.exports={getRecipes:async(e,t)=>o.post("http://localhost:3030/api/messages",{code:e.body.code,key:e.body.key},{headers:{Authorization:"Bearer IUzI1NiIsInR5c"}}).then((e=>e)).catch((e=>e))}},938:e=>{"use strict";e.exports=require("axios")},183:e=>{"use strict";e.exports=require("bluebird")},15:e=>{"use strict";e.exports=require("react")},732:e=>{"use strict";e.exports=require("react/jsx-runtime")}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>e+".server.js",o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e={792:1},o.f.require=(t,n)=>{e[t]||(t=>{var n=t.modules,r=t.ids,i=t.runtime;for(var s in n)o.o(n,s)&&(o.m[s]=n[s]);i&&i(o);for(var a=0;a<r.length;a++)e[r[a]]=1})(require("./"+o.u(t)))},(()=>{"use strict";const e=require("express");var t=o.n(e),n=o(15),r=o.n(n);const i=require("react-dom/server");var s=o.n(i);const a=require("react-router-dom/server"),d=require("react-router-dom");var l=o(732);const c={container:{maxWidth:"120rem",padding:"3.2rem",margin:"50px auto",width:"800px",boxShadow:"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"},heading:{color:"#333333",letterSpacing:"0.1rem"},list:{marginLeft:"20px",listStyle:"none",display:"flex",flexDirection:"column"},list_item:{color:"#333333",letterSpacing:"1.2px",fontSize:"1.6rem",alignItems:"center",padding:"0.2rem",borderRadius:"0.3rem"}},p=()=>(0,l.jsx)("div",{style:c.container,children:(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{style:c.heading,children:" Server React DOM APIs "}),(0,l.jsxs)("div",{style:c.list,children:[(0,l.jsx)("p",{style:c.list_item,children:"1. renderToPipeableStream"}),(0,l.jsx)("p",{style:c.list_item,children:"2. renderToStaticNodeStream"}),(0,l.jsx)("p",{style:c.list_item,children:"3. renderToReadableStream"}),(0,l.jsx)("p",{style:c.list_item,children:"4. renderToStaticMarkup"}),(0,l.jsx)("p",{style:c.list_item,children:"5. renderToString"})]})]})}),m=r().lazy((()=>new Promise((e=>setTimeout(e,2e3))).then((()=>o.e(734).then(o.bind(o,734)))))),h=()=>(0,l.jsx)(m,{});var x=o(938),u=o.n(x);const v=e=>{let{conversation:t,onSendMessage:o,onSendMessageComponent:r,onInitConversation:i}=e;const[s,a]=(0,n.useState)(""),[d,c]=(0,n.useState)("");return r([{id:"OPENAI",content:"It looks like the code you provided is missing some elements to be a complete and functional Java method...",components:[{id:"TEXT",content:"It looks like the code you provided is missing some elements to be a complete and functional Java method...",components:null},{id:"TEXT",content:"Naming Conventions:",components:null}]},{id:"COPILOT",content:"The provided snippet does not appear to be a complete Java code...",components:[{id:"TEXT",content:"The provided snippet does not appear to be a complete Java code...",components:null}]},{id:"GEMINIS",content:"The provided code is valid Java code.",components:[{id:"TEXT",content:"The provided code is valid Java code.",components:null}]},{id:"SUMMARY",content:"It appears that the input information is missing or not provided...",components:[{id:"TEXT",content:"It appears that the input information is missing or not provided...",components:null}]}]),(0,l.jsxs)("div",{style:{padding:"20px",flexGrow:1},children:[(0,l.jsx)("h2",{children:t.name}),(0,l.jsx)("div",{style:{height:"400px",overflowY:"scroll",border:"1px solid black",marginBottom:"10px"},children:t.messages.map(((e,t)=>(0,l.jsxs)("div",{children:[(0,l.jsxs)("strong",{children:[e.sender,": "]}),(0,l.jsx)("span",{children:e.text})]},t)))}),(0,l.jsx)("textarea",{type:"text",value:s,onChange:e=>a(e.target.value),style:{width:"80%",padding:"10px"}}),(0,l.jsx)("input",{type:"text",value:d,onChange:e=>c(e.target.value),style:{width:"80%",padding:"10px"}}),(0,l.jsx)("button",{onClick:e=>{s.trim()&&(o(s),a(""),c(""),u().post("http://localhost:3002/api/recipes",{code:s,key:d},{headers:{Authorization:"Bearer IUzI1NiIsInR5c"}}).then((e=>{console.log(e)})).catch((e=>e)))},style:{padding:"10px 20px",marginLeft:"10px"},children:"Send"}),(0,l.jsx)("div",{children:(0,l.jsx)("button",{onClick:e=>{i()},style:{padding:"10px 20px",marginLeft:"10px"},children:"Clean"})})]})},g=e=>{let{conversations:t,onSelectConversation:n}=e;return(0,l.jsx)("div",{style:{width:"200px",borderRight:"1px solid black"},children:t.map((e=>(0,l.jsx)("div",{onClick:()=>n(e.id),style:{padding:"10px",cursor:"pointer",borderBottom:"1px solid gray"},children:e.name},e.id)))})},y=()=>{const e=[{id:1,name:"Conversation 1",messages:[]},{id:2,name:"Conversation 2",messages:[]}],[t,o]=(0,n.useState)(e),[r,i]=(0,n.useState)(1),s=(e,t)=>{o((n=>n.map((n=>n.id===r?{...n,messages:[...n.messages,{text:e,sender:t||"You"}]}:n))))},a=t.find((e=>e.id===r));return(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsx)(g,{conversations:t,onSelectConversation:i}),a&&(0,l.jsx)(v,{conversation:a,onSendMessage:s,onSendMessageComponent:e=>{e&&e.forEach((e=>{s(e.content,e.id)}))},onInitConversation:()=>{o(e)}})]})},j={main_header:{backgroundColor:"white",display:"flex",alignItem:"center",justifyContent:"center",boxShadow:"rgba(17, 17, 26, 0.1) 0px 2px 0px"},header:{padding:"0.6rem",width:"85rem",display:"flex",alignItem:"center",justifyContent:"center"},navbar:{display:"flex",alignItem:"center",justifyContent:"center"},nav_link:{textDecoration:"none",color:"white",background:"rgb(239, 83, 102)",fontSize:"1.2rem",padding:"0.3rem 1.6rem",margin:"5px",border:"1px solid white",borderRadius:"0.3rem"}},b=()=>(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{style:j.main_header,children:(0,l.jsx)("div",{style:j.header,children:(0,l.jsxs)("div",{style:j.navbar,children:[(0,l.jsx)(d.Link,{to:"/home/",style:j.nav_link,children:"Home"}),(0,l.jsx)(d.Link,{to:"/home/about",style:j.nav_link,children:"About"}),(0,l.jsx)(d.Link,{to:"/home/chatBoard",style:j.nav_link,children:"ChatBoard"})]})})}),(0,l.jsxs)(d.Routes,{children:[(0,l.jsx)(d.Route,{path:"/home",element:(0,l.jsx)(h,{})}),(0,l.jsx)(d.Route,{path:"/home/about",element:(0,l.jsx)(p,{})}),(0,l.jsx)(d.Route,{path:"/home/chatBoard",element:(0,l.jsx)(y,{})})]})]});var f=o(92),S=o.n(f);const T=require("body-parser");var k=o.n(T);const I=t()();I.use(t().static("public")),I.use(k().json()),I.get("*/home/*",((e,t)=>{const n=s().renderToString((0,l.jsx)(a.StaticRouter,{location:e.url,children:(0,l.jsx)(b,{})}));t.send('\n  <!DOCTYPE html>\n  <html lang="en">\n    <head>\n      <meta charset="utf-8">\n      <title>SSR React App</title>\n    </head>\n    <body>\n      <div id="root">'.concat(n,'</div>\n      <script src="/bundle.js"><\/script>\n    </body>\n  </html>\n'))})),I.post("/api/recipes",((e,t)=>{!async function(){try{const n=await S().getRecipes(e,t);return t.json(n.data)}catch(e){return e}}()})),I.listen(3002,(()=>{console.log("App is running on http://localhost:3002")}))})()})();