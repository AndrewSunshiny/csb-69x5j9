(this["webpackJsonpfcc-drum-machine"]=this["webpackJsonpfcc-drum-machine"]||[]).push([[0],{17:function(e,t,i){},18:function(e,t,i){"use strict";i.r(t);var r=i(1),a=i(6),n=i(5),c=i(7),o=i(0),s=function(e){return Object(o.jsxs)("div",{className:"toolbar",children:[Object(o.jsx)("i",{className:"fa fa-free-code-camp",title:"no-stack-dub-sack"}),e.text,Object(o.jsx)("i",{className:e.icon,onClick:e.onClick})]})},d=function(e){return Object(o.jsx)("textarea",{id:"editor",onChange:e.onChange,type:"text",value:e.markdown})},j=i(3),m=i(4);j.marked.setOptions({breaks:!0,highlight:function(e){return m.prismjs.highlight(e,m.prismjs.languages.javascript,"javascript")}});var u=function(e){return Object(o.jsx)("div",{dangerouslySetInnerHTML:{__html:j.marked.parse(e.markdown)},id:"preview"})},x=(i(17),function(){var e=Object(r.useState)({markdown:"",editorMaximized:!1,previewMaximized:!1}),t=Object(c.a)(e,2),i=t[0],a=t[1],j=function(e){e.text().then((function(e){a((function(t){return Object(n.a)(Object(n.a)({},t),{},{markdown:e})}))}))};Object(r.useEffect)((function(){fetch("./some.md").then((function(e){j(e)}))}),[]);var m=i.editorMaximized?["editorWrap maximized","previewWrap hide","fa fa-compress"]:i.previewMaximized?["editorWrap hide","previewWrap maximized","fa fa-compress"]:["editorWrap","previewWrap","fa fa-arrows-alt"];return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:m[0],children:[Object(o.jsx)("input",{type:"file",onChange:function(e){j(e.target.files[0])}}),Object(o.jsx)(s,{icon:m[2],onClick:function(){a({editorMaximized:!i.editorMaximized})},text:"Editor"}),Object(o.jsx)(d,{markdown:i.markdown,onChange:function(e){a({markdown:e.target.value})}})]}),Object(o.jsx)("div",{className:"converter"}),Object(o.jsxs)("div",{className:m[1],children:[Object(o.jsx)(s,{icon:m[2],onClick:function(){a({previewMaximized:!i.previewMaximized})},text:"Previewer"}),Object(o.jsx)(u,{markdown:i.markdown})]})]})})}),f=document.getElementById("root");Object(a.createRoot)(f).render(Object(o.jsx)(r.StrictMode,{children:Object(o.jsx)(x,{})}))}},[[18,1,2]]]);
//# sourceMappingURL=main.ac816be3.chunk.js.map