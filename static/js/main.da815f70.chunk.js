(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={Container:"style_Container__EEv4v",button:"style_button__2MGBy",active:"style_active__Nfreh",disabled:"style_disabled__Stpi7",title:"style_title__1v3bv"}},12:function(t,e,n){t.exports={input:"style_input__1CvaI"}},18:function(t,e,n){},2:function(t,e,n){t.exports={TaskEditor:"style_TaskEditor__2rURy",TaskEditor_label:"style_TaskEditor_label__3Retm",TaskEditor_input:"style_TaskEditor_input__VOA2d",TaskEditorinput:"style_TaskEditorinput__2lBgX",TaskEditor_button:"style_TaskEditor_button__KmNeL"}},28:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),i=n(9),c=n.n(i),o=(n(18),n(13)),r=n(3),l=n(10),u=n.n(l),b=n(11),_=n.n(b),d=n(0),j=function(t){var e=t.children;return Object(d.jsx)("div",{className:_.a.Container,children:e})},m=n(2),h=n.n(m);function k(t){var e=t.onAddContact,n=Object(a.useState)(""),s=Object(r.a)(n,2),i=s[0],c=s[1],o=Object(a.useState)(""),l=Object(r.a)(o,2),u=l[0],b=l[1],_=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":b(a);break;default:return}};return Object(d.jsxs)("form",{className:h.a.TaskEditor,onSubmit:function(t){t.preventDefault(),0!==i.length&&0!==u.length?(e({name:i,number:u}),c(""),b("")):alert("Fields must be filled!")},children:[Object(d.jsxs)("label",{className:h.a.TaskEditor_label,children:["Name",Object(d.jsx)("input",{className:h.a.TaskEditor_input,type:"text",name:"name",value:i,onChange:_})]}),Object(d.jsxs)("label",{className:h.a.TaskEditor_label,children:["Number",Object(d.jsx)("input",{className:h.a.TaskEditor_input,type:"text",name:"number",value:u,onChange:_})]}),Object(d.jsx)("button",{className:h.a.TaskEditor_button,type:"submit",children:"Add contact"})]})}var f=n(12),p=n.n(f);function O(t){var e=t.value,n=t.onChangeFilter;return Object(d.jsxs)("label",{children:["Find contacts by name",Object(d.jsx)("input",{className:p.a.input,type:"text",value:e,onChange:n})]})}var T=n(7),v=n.n(T),x=function(t){var e=t.contacts,n=t.onRemoveContact;return Object(d.jsx)("ul",{className:v.a.TaskList,children:e.map((function(t){return Object(d.jsxs)("li",{className:v.a.TaskList_item,children:[t.name+" : "+t.number,Object(d.jsx)("button",{className:v.a.TaskList_button,type:"button",name:"delte",onClick:function(){return n(t.id)},children:"delete"})]},t.id)}))})};function y(){var t=Object(a.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==t?t:[]})),e=Object(r.a)(t,2),n=e[0],s=e[1],i=Object(a.useState)(""),c=Object(r.a)(i,2),l=c[0],b=c[1];Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(j,{children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(k,{onAddContact:function(t){var e=t.name,a=t.number,i={id:u.a.generate(),name:e,number:a};n.some((function(t){return t.name===e}))?alert("".concat(e," is already in contacts")):s([i].concat(Object(o.a)(n)))}}),Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(O,{value:l,onChangeFilter:function(t){b(t.target.value)}}),Object(d.jsx)(x,{contacts:function(){var t=l.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),onRemoveContact:function(t){s(n.filter((function(e){return e.id!==t})))}})]})})}var g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),a(t),s(t),i(t),c(t)}))};c.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),g()},7:function(t,e,n){t.exports={TaskList:"style_TaskList__3jPCD",TaskList_item:"style_TaskList_item__3lLTQ",completed:"style_completed__1Tlbr",TaskList_text:"style_TaskList_text__2ghWK",TaskList_actions:"style_TaskList_actions__t9Kq9",TaskList_button:"style_TaskList_button__3jWsJ"}}},[[28,1,2]]]);
//# sourceMappingURL=main.da815f70.chunk.js.map