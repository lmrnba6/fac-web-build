"use strict";(self.webpackChunkfac=self.webpackChunkfac||[]).push([[1213],{27477:function(e,n,t){var i=t(42982),a=t(4942),r=t(45987),s=t(70885),o=t(67294),l=t(39249),c=t(61896),d=t(55654),u=t(64811),p=t(61643),f=t(31109),x=t(70616),m=t(97975),g=t(82669),j=t(67954),h=t(85677),Z=t(32701),b=t(10684),y=t(17834),v=t(97985),O=(t(22299),t(86896)),C=t(44012),k=t(48159),S=t(16550),E=t(88295),N=t(6756),T=t(16714),P=t(56176),_=t(14322),A=t(93630),w=t(49817),D=t(16724),I=t(47201),M=t(85893),R=["data"];function z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function U(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?z(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.refresh,t=e.dispatch,a=e.cat,z=e.onChange,W=e.requireStar,q=e.invalid,L=e.invalidText,B=e.edit,J=e.add,G=e.label,F=e.disabled,Q=(0,o.useState)(!1),V=(0,s.Z)(Q,2),X=V[0],H=V[1],Y=(0,o.useState)(null),$=(0,s.Z)(Y,2),K=$[0],ee=$[1],ne=(0,o.useState)(!1),te=(0,s.Z)(ne,2),ie=te[0],ae=te[1],re=(0,o.useState)([]),se=(0,s.Z)(re,2),oe=se[0],le=se[1],ce=(0,o.useState)([]),de=(0,s.Z)(ce,2),ue=de[0],pe=de[1],fe=(0,o.useContext)(N.v),xe=(0,o.useState)(null),me=(0,s.Z)(xe,2),ge=me[0],je=me[1],he=(0,o.useState)({}),Ze=(0,s.Z)(he,2),be=Ze[0],ye=Ze[1],ve=(0,I.Q)(),Oe=(0,s.Z)(ve,1)[0],Ce=(0,O.Z)();function ke(e){pe(e);var n=e.map((function(e){return{value:e.id,label:e.name,description:e.description,amount:e.amount}}));B&&ge&&fe.can(P.a.EDIT_ACTION,_.k.ATHLETE_CATEGORY_SUBJECT)&&(n=[{value:"edit-athleteCategory",label:Ce.formatMessage({id:"editAthleteCategory"}),type:"edit-athleteCategory",color:"flat-warning"}].concat((0,i.Z)(n))),J&&fe.can(P.a.WRITE_ACTION,_.k.ATHLETE_CATEGORY_SUBJECT)&&(n=[{value:"add-athleteCategory",label:Ce.formatMessage({id:"addCategory"}),type:"add-athleteCategory",color:"flat-success"}].concat((0,i.Z)(n))),le(n)}var Se=function(){(0,S.k_)(S.go,[E.ii],!0,l.Am,t,"","somethingWrong",ke,null)},Ee=function(){ae(!1),je(null),z(null),Se()};(0,o.useEffect)((function(){je(a)}),[a]),(0,o.useEffect)((function(){n&&Se()}),[n]);var Ne=function(e){414===e.code?ee("nameExist"):ee("somethingWrong")};return(0,M.jsxs)("div",{children:[(0,M.jsxs)(g.Z,{children:[!1!==G&&(0,M.jsxs)(j.Z,{for:"category",children:[(0,M.jsx)(C.Z,{id:"category"})," ",W?(0,M.jsx)("span",{className:"text-danger h6",children:"*"}):""]}),(0,M.jsxs)("div",{style:{border:"".concat(q?"#dc3545":"dark"===Oe?"#404656":"#d8d6de"," solid 1px"),borderRadius:"5px",display:"flex",alignItems:"center"},children:[(0,M.jsx)(u.Z,{className:"mx-1",size:14}),(0,M.jsx)("div",{style:{flexGrow:1,borderLeft:"".concat(q?"#dc3545":"dark"===Oe?"#404656":"#d8d6de"," solid ").concat("ar"===Ce.locale?"0px":"1px"),borderRight:"".concat(q?"#dc3545":"dark"===Oe?"#404656":"#d8d6de"," solid ").concat("ar"===Ce.locale?"1px":"0px")},children:(0,M.jsx)(w.ZP,{isDisabled:F,styles:{control:function(e){return U(U({},e),{},{border:"none"})}},onMenuOpen:function(){return ke(ue)},id:"athleteCategory",placeholder:Ce.formatMessage({id:"selectCategory"}),value:ge,components:{Option:function(e){var n=e.data,i=(0,r.Z)(e,R);return"add-athleteCategory"===n.type?(0,M.jsxs)(m.Z,{className:"text-left rounded-0",color:n.color,block:!0,onClick:function(){return ae(!0)},children:[(0,M.jsx)(c.Z,{size:14})," ",(0,M.jsx)("span",{className:"align-middle ml-50",children:n.label})]}):"edit-athleteCategory"===n.type?(0,M.jsxs)(m.Z,{className:"text-left rounded-0",color:n.color,block:!0,onClick:function(){var e;(e=oe.find((function(e){return e.value===Number(ge.value)})))&&(0,S.k_)(S.U2,[E.nX,e.value],!0,l.Am,t,"","somethingWrong",(function(e){ye(e),ae(!0)}),null)},children:[(0,M.jsx)(d.Z,{size:14})," ",(0,M.jsx)("span",{className:"align-middle ml-50",children:n.label})]}):(0,M.jsxs)(A.c.Option,U(U({},i),{},{children:[" ",n.label," "]}))}},noOptionsMessage:function(){return(0,M.jsx)(C.Z,{id:"noRecords"})},onChange:function(e){return function(e){je(e),z(e)}(e)},isClearable:!0,theme:D.ss,options:oe,classNamePrefix:"select"})})]}),q&&(0,M.jsx)("div",{className:"customSelectError",children:L})]}),(0,M.jsxs)(h.Z,{isOpen:ie,toggle:function(){return ae(!ie)},onClosed:function(){H(!1),ae(!1),ye({}),ee("")},className:"modal-dialog-centered",children:[(0,M.jsx)(Z.Z,{toggle:function(){return ae(!ie)},children:(0,M.jsx)(C.Z,{id:be.id?"editCategory":"addCategory"})}),(0,M.jsxs)(b.Z,{children:[K&&(0,M.jsxs)(y.Z,{color:"danger",className:"d-flex align-items-center",children:[(0,M.jsx)("div",{className:"alert-body font-small-2 flex-grow-1",children:(0,M.jsx)("p",{children:(0,M.jsx)("small",{className:"mr-50",children:(0,M.jsx)(C.Z,{id:K})})})}),(0,M.jsx)(p.Z,{id:"login-tip",className:"mx-50",size:18,style:{top:"10px",right:"10px"}})]}),(0,M.jsx)(k.Z,{label:(0,M.jsx)(C.Z,{id:"name"}),value:be.name,id:"name",name:"name",placeholder:"",requireStar:!0,onChange:function(e){return ye(U(U({},be),{},{name:e.target.value}))},invalid:X&&!be.name,invalidtext:(0,M.jsx)(C.Z,{id:"required"}),prepend:{icon:(0,M.jsx)(f.Z,{size:14})}}),(0,M.jsx)(k.Z,{label:(0,M.jsx)(C.Z,{id:"description"}),value:be.description,id:"description",type:"textarea",name:"description",placeholder:"",onChange:function(e){return ye(U(U({},be),{},{description:e.target.value}))},prepend:{icon:(0,M.jsx)(x.Z,{size:14})}})]}),(0,M.jsxs)(v.Z,{children:[(0,M.jsx)(m.Z.Ripple,{onClick:function(e){e.preventDefault(),ee(!1),H(!0),be.name&&(be.id?(0,S.k_)(S.Vx,[E.nX,be.id,be],!0,l.Am,t,"athleteCategoryUpdatedSuccessfully","",Ee,Ne):(0,S.k_)(S.$T,[E.nX,be],!0,l.Am,t,"athleteCategoryCreatedSuccessfully","",Ee,Ne))},color:"primary",children:(0,M.jsx)(C.Z,{id:"save"})}),be.id&&fe.can(P.a.DELETE_ACTION,_.k.ATHLETE_CATEGORY_SUBJECT)&&(0,M.jsx)(m.Z.Ripple,{color:"danger",type:"button",onClick:function(){(0,T.o)(Ce.formatMessage({id:"delete"}),Ce.formatMessage({id:"deleteCategoryQuestion"}),"warning",!0,Ce.formatMessage({id:"yes"}),Ce.formatMessage({id:"no"})).then((function(e){e.value&&(0,S.k_)(S.Vx,[E.nX,be.id,{deleted:!0}],!0,l.Am,t,"categoryDeletedSuccessfully","somethingWrong",Ee,null)}))},children:(0,M.jsx)(C.Z,{id:"delete"})})]})]})]})}},12430:function(e,n,t){var i=t(42982),a=t(4942),r=t(45987),s=t(70885),o=t(67294),l=t(39249),c=t(61896),d=t(55654),u=t(55484),p=t(61643),f=t(31109),x=t(70616),m=t(97975),g=t(82669),j=t(67954),h=t(85677),Z=t(32701),b=t(10684),y=t(17834),v=t(97985),O=(t(22299),t(86896)),C=t(44012),k=t(48159),S=t(16550),E=t(88295),N=t(6756),T=t(16714),P=t(56176),_=t(14322),A=t(93630),w=t(49817),D=t(16724),I=t(47201),M=t(85893),R=["data"];function z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function U(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?z(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.refresh,t=e.dispatch,a=e.pos,z=e.onChange,W=e.requireStar,q=e.invalid,L=e.invalidText,B=e.edit,J=e.add,G=e.label,F=e.disabled,Q=(0,o.useState)(!1),V=(0,s.Z)(Q,2),X=V[0],H=V[1],Y=(0,o.useState)(null),$=(0,s.Z)(Y,2),K=$[0],ee=$[1],ne=(0,o.useState)(!1),te=(0,s.Z)(ne,2),ie=te[0],ae=te[1],re=(0,o.useState)([]),se=(0,s.Z)(re,2),oe=se[0],le=se[1],ce=(0,o.useState)([]),de=(0,s.Z)(ce,2),ue=de[0],pe=de[1],fe=(0,o.useContext)(N.v),xe=(0,o.useState)(null),me=(0,s.Z)(xe,2),ge=me[0],je=me[1],he=(0,o.useState)({}),Ze=(0,s.Z)(he,2),be=Ze[0],ye=Ze[1],ve=(0,I.Q)(),Oe=(0,s.Z)(ve,1)[0],Ce=(0,O.Z)();function ke(e){pe(e);var n=e.map((function(e){return{value:e.id,label:e.name,description:e.description,amount:e.amount}}));B&&ge&&fe.can(P.a.EDIT_ACTION,_.k.POSITION_SUBJECT)&&(n=[{value:"edit-position",label:Ce.formatMessage({id:"editPosition"}),type:"edit-position",color:"flat-warning"}].concat((0,i.Z)(n))),J&&fe.can(P.a.WRITE_ACTION,_.k.POSITION_SUBJECT)&&(n=[{value:"add-position",label:Ce.formatMessage({id:"addPosition"}),type:"add-position",color:"flat-success"}].concat((0,i.Z)(n))),le(n)}var Se=function(){(0,S.k_)(S.go,[E.qe],!0,l.Am,t,"","somethingWrong",ke,null)},Ee=function(){ae(!1),je(null),z(null),Se()};(0,o.useEffect)((function(){je(a)}),[a]),(0,o.useEffect)((function(){n&&Se()}),[n]);var Ne=function(e){414===e.code?ee("nameExist"):ee("somethingWrong")};return(0,M.jsxs)("div",{children:[(0,M.jsxs)(g.Z,{children:[!1!==G&&(0,M.jsxs)(j.Z,{for:"position",children:[(0,M.jsx)(C.Z,{id:"position"})," ",W?(0,M.jsx)("span",{className:"text-danger h6",children:"*"}):""]}),(0,M.jsxs)("div",{style:{border:"".concat(q?"#dc3545":"dark"===Oe?"#404656":"#d8d6de"," solid 1px"),borderRadius:"5px",display:"flex",alignItems:"center"},children:[(0,M.jsx)(u.Z,{className:"mx-1",size:14}),(0,M.jsx)("div",{style:{flexGrow:1,borderLeft:"".concat(q?"#dc3545":"dark"===Oe?"#404656":"#d8d6de"," solid ").concat("ar"===Ce.locale?"0px":"1px"),borderRight:"".concat(q?"#dc3545":"dark"===Oe?"#404656":"#d8d6de"," solid ").concat("ar"===Ce.locale?"1px":"0px")},children:(0,M.jsx)(w.ZP,{isDisabled:F,styles:{control:function(e){return U(U({},e),{},{border:"none"})}},onMenuOpen:function(){return ke(ue)},id:"position",placeholder:Ce.formatMessage({id:"selectPosition"}),value:ge,components:{Option:function(e){var n=e.data,i=(0,r.Z)(e,R);return"add-position"===n.type?(0,M.jsxs)(m.Z,{className:"text-left rounded-0",color:n.color,block:!0,onClick:function(){return ae(!0)},children:[(0,M.jsx)(c.Z,{size:14})," ",(0,M.jsx)("span",{className:"align-middle ml-50",children:n.label})]}):"edit-position"===n.type?(0,M.jsxs)(m.Z,{className:"text-left rounded-0",color:n.color,block:!0,onClick:function(){var e;(e=oe.find((function(e){return e.value===Number(ge.value)})))&&(0,S.k_)(S.U2,[E.gF,e.value],!0,l.Am,t,"","somethingWrong",(function(e){ye(e),ae(!0)}),null)},children:[(0,M.jsx)(d.Z,{size:14})," ",(0,M.jsx)("span",{className:"align-middle ml-50",children:n.label})]}):(0,M.jsxs)(A.c.Option,U(U({},i),{},{children:[" ",n.label," "]}))}},noOptionsMessage:function(){return(0,M.jsx)(C.Z,{id:"noRecords"})},onChange:function(e){return function(e){je(e),z(e)}(e)},isClearable:!0,theme:D.ss,options:oe,classNamePrefix:"select"})})]}),q&&(0,M.jsx)("div",{className:"customSelectError",children:L})]}),(0,M.jsxs)(h.Z,{isOpen:ie,toggle:function(){return ae(!ie)},onClosed:function(){H(!1),ae(!1),ye({}),ee("")},className:"modal-dialog-centered",children:[(0,M.jsx)(Z.Z,{toggle:function(){return ae(!ie)},children:(0,M.jsx)(C.Z,{id:be.id?"editPosition":"addPosition"})}),(0,M.jsxs)(b.Z,{children:[K&&(0,M.jsxs)(y.Z,{color:"danger",className:"d-flex align-items-center",children:[(0,M.jsx)("div",{className:"alert-body font-small-2 flex-grow-1",children:(0,M.jsx)("p",{children:(0,M.jsx)("small",{className:"mr-50",children:(0,M.jsx)(C.Z,{id:K})})})}),(0,M.jsx)(p.Z,{id:"login-tip",className:"mx-50",size:18,style:{top:"10px",right:"10px"}})]}),(0,M.jsx)(k.Z,{label:(0,M.jsx)(C.Z,{id:"name"}),value:be.name,id:"name",name:"name",placeholder:"",requireStar:!0,onChange:function(e){return ye(U(U({},be),{},{name:e.target.value}))},invalid:X&&!be.name,invalidtext:(0,M.jsx)(C.Z,{id:"required"}),prepend:{icon:(0,M.jsx)(f.Z,{size:14})}}),(0,M.jsx)(k.Z,{label:(0,M.jsx)(C.Z,{id:"description"}),value:be.description,id:"description",type:"textarea",name:"description",placeholder:"",onChange:function(e){return ye(U(U({},be),{},{description:e.target.value}))},prepend:{icon:(0,M.jsx)(x.Z,{size:14})}})]}),(0,M.jsxs)(v.Z,{children:[(0,M.jsx)(m.Z.Ripple,{onClick:function(e){e.preventDefault(),ee(!1),H(!0),be.name&&(be.id?(0,S.k_)(S.Vx,[E.gF,be.id,be],!0,l.Am,t,"positionUpdatedSuccessfully","",Ee,Ne):(0,S.k_)(S.$T,[E.gF,be],!0,l.Am,t,"positionCreatedSuccessfully","",Ee,Ne))},color:"primary",children:(0,M.jsx)(C.Z,{id:"save"})}),be.id&&fe.can(P.a.DELETE_ACTION,_.k.POSITION_SUBJECT)&&(0,M.jsx)(m.Z.Ripple,{color:"danger",type:"button",onClick:function(){(0,T.o)(Ce.formatMessage({id:"delete"}),Ce.formatMessage({id:"deletePositionQuestion"}),"warning",!0,Ce.formatMessage({id:"yes"}),Ce.formatMessage({id:"no"})).then((function(e){e.value&&(0,S.k_)(S.Vx,[E.gF,be.id,{deleted:!0}],!0,l.Am,t,"positionDeletedSuccessfully","somethingWrong",Ee,null)}))},children:(0,M.jsx)(C.Z,{id:"delete"})})]})]})]})}}}]);