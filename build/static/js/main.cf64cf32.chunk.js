(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{19:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(14),a=n.n(c),r=(n(19),n(3)),u=n(1),o=n(4),i=n.n(o),s="/api/persons",j=function(){return i.a.get(s).then((function(e){return e.data}))},b=function(e){return i.a.post(s,e).then((function(e){return e.data}))},l=function(e){return i.a.delete("".concat(s,"/").concat(e)).then((function(e){return e.data}))},d=n(0),h=function(e){var t=e.text;return Object(d.jsx)("h2",{children:t})},f=function(e){var t=e.addPerson,n=e.handleNameChange,c=e.handleNumberChange,a=e.name,r=e.number;return Object(d.jsxs)("form",{onSubmit:t,children:[Object(d.jsxs)("div",{children:["name: ",Object(d.jsx)("input",{onChange:n,value:a})]}),Object(d.jsxs)("div",{children:["number: ",Object(d.jsx)("input",{onChange:c,value:r})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"submit",children:"add"})})]})},O=function(e){var t=e.handleFilterChange,n=e.value;return Object(d.jsxs)("div",{children:["filter shown with ",Object(d.jsx)("input",{onChange:t,value:n})]})},m=function(e){var t=e.person,n=e.handleDelete;return Object(d.jsxs)("div",{children:[t.name," ",t.number,Object(d.jsx)("button",{onClick:n,children:"delete"})]})},v=function(e){var t=e.type,n=e.message;return null===n?null:Object(d.jsx)("div",{className:1===t?"success":"error",children:n})},x=function(){var e=Object(u.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(u.useState)(""),o=Object(r.a)(a,2),i=o[0],s=o[1],x=Object(u.useState)(""),p=Object(r.a)(x,2),g=p[0],C=p[1],w=Object(u.useState)(""),N=Object(r.a)(w,2),S=N[0],k=N[1],y=Object(u.useState)(null),D=Object(r.a)(y,2),P=D[0],E=D[1],F=Object(u.useState)(0),J=Object(r.a)(F,2),L=J[0],A=J[1];Object(u.useEffect)((function(){j().then((function(e){c(e)}))}),[]);var B=function(e,t){A(e),E(t),setTimeout((function(){A(0),E(null)}),5e3)},I=""===S?n:n.filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())}));return Object(d.jsxs)("div",{children:[Object(d.jsx)(h,{text:"Phonebook"}),Object(d.jsx)(v,{message:P,type:L}),Object(d.jsx)(O,{handleFilterChange:function(e){k(e.target.value)},value:S}),Object(d.jsx)(h,{text:"Add New"}),Object(d.jsx)(f,{addPerson:function(e){e.preventDefault(),b({name:i,number:g}).then((function(e){c(n.concat(e));var t="".concat(e.name," created successfully!");B(1,t),s(""),C("")}))},handleNameChange:function(e){s(e.target.value)},handleNumberChange:function(e){C(e.target.value)},name:i,number:g}),Object(d.jsx)(h,{text:"Numbers"}),I.map((function(e){return Object(d.jsx)(m,{person:e,handleDelete:function(){return t=e,window.confirm("Delete ".concat(t.name," ?")),void l(t.id).then(c(n.filter((function(e){return e.id!==t.id}))));var t}},e.name)}))]})};a.a.render(Object(d.jsx)(x,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.cf64cf32.chunk.js.map