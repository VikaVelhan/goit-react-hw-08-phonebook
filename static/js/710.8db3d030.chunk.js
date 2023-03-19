"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[710],{7710:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var a=n(2791),r=n(9434),s="ContactForm_contactForm__y0Rca",c="ContactForm_contactLabel__vt5it",i="ContactForm_contactInput__z6XOX",o="ContactForm_buttonAddContact__uUTAm",u=n(208),l=function(e){return e.contacts.items},m=function(e){return e.contacts.isLoading},d=function(e){return e.contacts.error},f=function(e){return e.filter.filter},v=function(e){var t=e.contacts,n=e.filter;if(!n)return t.items;var a=n.toLowerCase();return t.items.filter((function(e){var t=e.name,n=e.number;return t.toLowerCase().includes(a)||n.toLowerCase().includes(a)}))},p=n(1686),_=n.n(p),x=n(3329);function h(){var e=(0,r.I0)(),t=(0,r.v9)(l);return(0,x.jsxs)("form",{onSubmit:function(n){n.preventDefault();var a=n.target.elements;t.some((function(e){return e.name.toLowerCase().trim()===a.name.value.toLowerCase().trim()}))?(_().Notify.warning("Contact ".concat(a.name.value," already exist")),n.currentTarget.reset()):(e((0,u.uK)({name:a.name.value,number:a.number.value})),n.currentTarget.reset())},className:s,children:[(0,x.jsxs)("label",{className:c,children:["Name",(0,x.jsx)("input",{className:i,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,x.jsxs)("label",{className:c,children:["Number",(0,x.jsx)("input",{className:i,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,x.jsx)("button",{type:"submit",className:o,children:"Add contact"})]})}var b="ContactList_contactList__UFVCg",j="ContactList_contacItem__ZrmrV",C="ContactList_buttonDelete__3LEoC",N=n(9439),g=function(e){var t=e.id,n=e.name,s=e.number,c=(0,r.I0)(),i=(0,a.useState)(!1),o=(0,N.Z)(i,2),l=o[0],m=o[1],d=(0,a.useState)(n),f=(0,N.Z)(d,2),v=f[0],p=f[1],_=(0,a.useState)(s),h=(0,N.Z)(_,2),b=h[0],g=h[1];(0,a.useEffect)((function(){c((0,u.yF)())}),[c]);var y=function(e){switch(e.target.name){case"name":return void p(e.target.value);case"number":return void g(e.target.value);default:return}};return(0,x.jsxs)("li",{className:j,children:[l?(0,x.jsx)("input",{name:"name",onChange:y,type:"text",value:v}):(0,x.jsxs)("span",{children:[v,": "]}),l?(0,x.jsx)("input",{name:"number",onChange:y,type:"text",value:b}):(0,x.jsxs)("span",{children:[b," "]}),(0,x.jsx)("button",{className:C,type:"button",onClick:function(){return c((0,u.GK)(t))},children:"Delete"}),(0,x.jsx)("button",{className:C,type:"button",onClick:function(){if(l)return m((function(e){return!e})),void c((0,u.mP)({id:t,name:v,number:b}));m((function(e){return!e}))},children:l?"Save":"Edit"})]},t)},y=function(){var e=(0,r.v9)(v);return(0,x.jsx)("ul",{className:b,children:0!==e.length?e.map((function(e){var t=e.id,n=e.name,a=e.number;return(0,x.jsx)(g,{id:t,name:n,number:a},t)})):(0,x.jsx)("p",{children:"No data to display..."})})},F=n(3402),L=n(8809),w="Filter_filterForm__+l+6Q",k="Filter_contactLabel__TqLYf",Z="Filter_contactFilter__0yOzc",A=n(6895),z=function(){var e=(0,r.I0)(),t=(0,r.v9)(f);return(0,x.jsx)("div",{className:w,children:(0,x.jsxs)("label",{className:k,children:["Find contacts by name",(0,x.jsx)("input",{className:Z,type:"text",value:t,onChange:function(t){return e((0,A.k)(t.target.value))}})]})})},I={section:"Section_section__Z2PLw"},S=function(e){var t=e.title;return(0,x.jsx)("section",{className:I.section,children:(0,x.jsx)("h2",{className:I.title,children:t})})},E={container:{padding:"25px",backgroundColor:"rgb(255, 255, 0, 0.5)"}};function T(){var e=(0,r.I0)(),t=(0,r.v9)(m),n=(0,r.v9)(d);return(0,a.useEffect)((function(){e((0,u.yF)())}),[e]),(0,x.jsxs)("div",{style:E.container,children:[(0,x.jsx)(h,{}),(0,x.jsx)(F.x7,{position:"top-center",reverseOrder:!1}),(0,x.jsx)(S,{title:"Contacts"}),(0,x.jsx)(z,{}),t&&!n&&(0,x.jsx)(L.Z,{}),(0,x.jsx)(y,{})]})}}}]);
//# sourceMappingURL=710.8db3d030.chunk.js.map