"use strict";(self.webpackChunkfac=self.webpackChunkfac||[]).push([[4073],{24073:function(e,t,r){r.r(t),r.d(t,{default:function(){return ke}});var i=r(15861),n=r(70885),a=r(87757),l=r.n(a),o=r(67294),s=r(42982),d=r(39249),c=r(61643),u=r(55654),m=r(36694),f=r(61896),h=r(13777),p=r(7708),g=r(85677),x=r(15538),b=r(32701),j=r(10684),Z=r(17834),v=r(34726),y=r(17354),k=r(97975),T=r(67954),w=r(609),C=r(36595),N=r(97985),S=(r(92749),r(22299),r(86896)),E=r(44012),M=r(48159),z=r(16550),A=r(88295),O=r(16724),F=r(31465),L=r(9041),R=r(89265),P=r.n(R),D=r(35108),W=r(4942),_=r(45987),q=r(39397),I=r(82669),B=r(16714),U=r(49817),H=r(93630),G=r(47201),J=r(85893),Q=["data"];function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){(0,W.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var K=function(e){var t=e.refresh,r=e.dispatch,i=e.cat,a=e.requireStar,l=e.onChange,m=e.edit,h=e.invalid,p=e.invalidText,x=e.add,v=e.label,y=e.disabled,w=(0,o.useState)(!1),C=(0,n.Z)(w,2),F=C[0],L=C[1],R=(0,o.useState)(null),P=(0,n.Z)(R,2),D=P[0],W=P[1],V=(0,o.useState)(!1),K=(0,n.Z)(V,2),X=K[0],Y=K[1],ee=(0,o.useState)([]),te=(0,n.Z)(ee,2),re=te[0],ie=te[1],ne=(0,o.useState)([]),ae=(0,n.Z)(ne,2),le=ae[0],oe=ae[1],se=(0,o.useState)(null),de=(0,n.Z)(se,2),ce=de[0],ue=de[1],me=(0,o.useState)({}),fe=(0,n.Z)(me,2),he=fe[0],pe=fe[1],ge=(0,G.Q)(),xe=(0,n.Z)(ge,1)[0],be=(0,S.Z)();function je(e){oe(e);var t=e.map((function(e){return{value:e.id,label:"en"===be.locale?e.englishTitle:"fr"===be.locale?e.frenchTitle:e.arabicTitle,frenchTitle:e.frenchTitle,englishTitle:e.englishTitle,arabicTitle:e.arabicTitle}}));m&&ce&&(t=[{value:"edit-linkCategory",label:be.formatMessage({id:"editCategory"}),type:"edit-linkCategory",color:"flat-warning"}].concat((0,s.Z)(t))),x&&(t=[{value:"add-linkCategory",label:be.formatMessage({id:"addCategory"}),type:"add-linkCategory",color:"flat-success"}].concat((0,s.Z)(t))),ie(t)}var Ze=function(){(0,z.k_)(z.go,[A.od],!0,d.Am,r,"","somethingWrong",je,null)},ve=function(){Y(!1),ue(null),l(null),Ze()};(0,o.useEffect)((function(){ue(i)}),[i]),(0,o.useEffect)((function(){t&&Ze()}),[t]);var ye=function(e){414===e.code?W("nameExist"):W("somethingWrong")};return(0,J.jsxs)("div",{children:[(0,J.jsxs)(I.Z,{children:[!1!==v&&(0,J.jsxs)(T.Z,{for:"linkCategory",children:[(0,J.jsx)(E.Z,{id:"linkCategory"})," ",a?(0,J.jsx)("span",{className:"text-danger h6",children:"*"}):""]}),(0,J.jsxs)("div",{style:{border:"".concat(h?"#dc3545":"dark"===xe?"#404656":"#d8d6de"," solid 1px"),borderRadius:"5px",display:"flex",alignItems:"center"},children:[(0,J.jsx)(q.Z,{className:"mx-1",size:14}),(0,J.jsx)("div",{style:{flexGrow:1,borderLeft:"".concat(h?"#dc3545":"dark"===xe?"#404656":"#d8d6de"," solid ").concat("ar"===be.locale?"0px":"1px"),borderRight:"".concat(h?"#dc3545":"dark"===xe?"#404656":"#d8d6de"," solid ").concat("ar"===be.locale?"1px":"0px")},children:(0,J.jsx)(U.ZP,{isDisabled:y,styles:{control:function(e){return $($({},e),{},{border:"none"})}},onMenuOpen:function(){return je(le)},id:"linkCategory",placeholder:be.formatMessage({id:"selectCategory"}),value:ce,components:{Option:function(e){var t=e.data,i=(0,_.Z)(e,Q);return"add-linkCategory"===t.type?(0,J.jsxs)(k.Z,{className:"text-left rounded-0",color:t.color,block:!0,onClick:function(){return Y(!0)},children:[(0,J.jsx)(f.Z,{size:14})," ",(0,J.jsx)("span",{className:"align-middle ml-50",children:t.label})]}):"edit-linkCategory"===t.type?(0,J.jsxs)(k.Z,{className:"text-left rounded-0",color:t.color,block:!0,onClick:function(){var e;(e=re.find((function(e){return e.value===Number(ce.value)})))&&(0,z.k_)(z.U2,[A.y0,e.value],!0,d.Am,r,"","somethingWrong",(function(e){pe(e),Y(!0)}),null)},children:[(0,J.jsx)(u.Z,{size:14})," ",(0,J.jsx)("span",{className:"align-middle ml-50",children:t.label})]}):(0,J.jsxs)(H.c.Option,$($({},i),{},{children:[" ",t.label," "]}))}},noOptionsMessage:function(){return(0,J.jsx)(E.Z,{id:"noRecords"})},onChange:function(e){return function(e){ue(e),l(e)}(e)},isClearable:!0,theme:O.ss,options:re,classNamePrefix:"select"})})]}),h&&(0,J.jsx)("div",{className:"customSelectError",children:p})]}),(0,J.jsxs)(g.Z,{isOpen:X,toggle:function(){return Y(!X)},onClosed:function(){L(!1),Y(!1),pe({}),W("")},className:"modal-dialog-centered",children:[(0,J.jsx)(b.Z,{toggle:function(){return Y(!X)},children:(0,J.jsx)(E.Z,{id:he.id?"editCategory":"addCategory"})}),(0,J.jsxs)(j.Z,{children:[D&&(0,J.jsxs)(Z.Z,{color:"danger",className:"d-flex align-items-center",children:[(0,J.jsx)("div",{className:"alert-body font-small-2 flex-grow-1",children:(0,J.jsx)("p",{children:(0,J.jsx)("small",{className:"mr-50",children:(0,J.jsx)(E.Z,{id:D})})})}),(0,J.jsx)(c.Z,{id:"login-tip",className:"mx-50",size:18,style:{top:"10px",right:"10px"}})]}),(0,J.jsx)(M.Z,{label:(0,J.jsx)(E.Z,{id:"frenchTitle"}),value:he.frenchTitle,id:"frenchTitle",name:"frenchTitle",placeholder:"",requireStar:!0,onChange:function(e){return pe($($({},he),{},{frenchTitle:e.target.value}))},invalid:F&&!he.frenchTitle,invalidtext:(0,J.jsx)(E.Z,{id:"required"}),prepend:{icon:(0,J.jsx)(u.Z,{size:14})}}),(0,J.jsx)(M.Z,{label:(0,J.jsx)(E.Z,{id:"englishTitle"}),value:he.englishTitle,id:"englishTitle",name:"englishTitle",placeholder:"",requireStar:!0,onChange:function(e){return pe($($({},he),{},{englishTitle:e.target.value}))},invalid:F&&!he.englishTitle,invalidtext:(0,J.jsx)(E.Z,{id:"required"}),prepend:{icon:(0,J.jsx)(u.Z,{size:14})}}),(0,J.jsx)(M.Z,{label:(0,J.jsx)(E.Z,{id:"arabicTitle"}),value:he.arabicTitle,id:"arabicTitle",name:"arabicTitle",placeholder:"",requireStar:!0,onChange:function(e){return pe($($({},he),{},{arabicTitle:e.target.value}))},invalid:F&&!he.arabicTitle,invalidtext:(0,J.jsx)(E.Z,{id:"required"}),prepend:{icon:(0,J.jsx)(u.Z,{size:14})}})]}),(0,J.jsxs)(N.Z,{children:[(0,J.jsx)(k.Z.Ripple,{onClick:function(e){e.preventDefault(),W(!1),L(!0),he.frenchTitle&&he.englishTitle&&he.arabicTitle&&(he.id?(0,z.k_)(z.Vx,[A.y0,he.id,he],!0,d.Am,r,"linkCategoryUpdatedSuccessfully","",ve,ye):(0,z.k_)(z.$T,[A.y0,he],!0,d.Am,r,"linkCategoryCreatedSuccessfully","",ve,ye))},color:"primary",children:(0,J.jsx)(E.Z,{id:"save"})}),(0,J.jsx)(k.Z.Ripple,{color:"danger",type:"button",onClick:function(){(0,B.o)(be.formatMessage({id:"delete"}),be.formatMessage({id:"deleteLinkCategoryQuestion"}),"warning",!0,be.formatMessage({id:"yes"}),be.formatMessage({id:"no"})).then((function(e){e.value&&(0,z.k_)(z.Vx,[A.y0,he.id,{deleted:!0}],!0,d.Am,r,"linkCategoryDeletedSuccessfully","somethingWrong",ve,null)}))},children:(0,J.jsx)(E.Z,{id:"delete"})})]})]})]})},X=r(51285),Y=r.n(X),ee=r(39704),te=r(50944),re=function(e){var t=(0,te.S)(),r=(0,n.Z)(t,1)[0],i=o.useState(!1),a=(0,n.Z)(i,2),l=a[0],R=a[1],W=e.open,_=e.toggleSidebar,q=e.refresh,I=e.usefulLink,B=e.onClosed,U=e.dispatch,H=(0,o.useState)(!1),G=(0,n.Z)(H,2),Q=G[0],V=G[1],$=(0,o.useState)(null),X=(0,n.Z)($,2),ee=X[0],re=X[1],ie=(0,o.useState)(null),ne=(0,n.Z)(ie,2),ae=ne[0],le=ne[1],oe=(0,o.useState)(null),se=(0,n.Z)(oe,2),de=se[0],ce=se[1],ue=(0,o.useState)(null),me=(0,n.Z)(ue,2),fe=me[0],he=me[1],pe=(0,o.useState)(null),ge=(0,n.Z)(pe,2),xe=ge[0],be=ge[1],je=(0,o.useState)(null),Ze=(0,n.Z)(je,2),ve=Ze[0],ye=Ze[1],ke=(0,o.useState)(null),Te=(0,n.Z)(ke,2),we=Te[0],Ce=Te[1],Ne=(0,o.useState)(null),Se=(0,n.Z)(Ne,2),Ee=Se[0],Me=Se[1],ze=(0,o.useState)(0),Ae=(0,n.Z)(ze,2),Oe=Ae[0],Fe=Ae[1],Le=(0,o.useState)([]),Re=(0,n.Z)(Le,2),Pe=Re[0],De=Re[1],We=(0,o.useState)(null),_e=(0,n.Z)(We,2),qe=_e[0],Ie=_e[1],Be=(0,S.Z)(),Ue=(0,o.useRef)(),He=L.ContentState.createFromBlockArray((0,L.convertFromHTML)("")),Ge=L.EditorState.createWithContent(He),Je=(0,o.useState)(Ge),Qe=(0,n.Z)(Je,2),Ve=Qe[0],$e=Qe[1],Ke=L.ContentState.createFromBlockArray((0,L.convertFromHTML)("")),Xe=L.EditorState.createWithContent(Ke),Ye=(0,o.useState)(Xe),et=(0,n.Z)(Ye,2),tt=et[0],rt=et[1],it=L.ContentState.createFromBlockArray((0,L.convertFromHTML)("")),nt=L.EditorState.createWithContent(it),at=(0,o.useState)(nt),lt=(0,n.Z)(at,2),ot=lt[0],st=lt[1],dt=function(e){he(e.link.frenchTitle),ce(e.link.arabicTitle),le(e.link.englishTitle),be(e.link.englishText),Ce(e.link.frenchText),ye(e.link.arabicText),e.link.category&&Ie({value:e.link.category,label:"fr"===Be.locale?e.link.categoryFr:"en"===Be.locale?e.link.categoryEn:e.link.categoryAr,frenchTitle:e.link.categoryFr,englishTitle:e.link.categoryEn,arabicTitle:e.link.categoryAr}),Me(e.link.image);var t=L.ContentState.createFromBlockArray((0,L.convertFromHTML)(e.link.englishText||"")),r=L.EditorState.createWithContent(t);$e(r);var i=L.ContentState.createFromBlockArray((0,L.convertFromHTML)(e.link.frenchText||"")),n=L.EditorState.createWithContent(i);rt(n);var a=L.ContentState.createFromBlockArray((0,L.convertFromHTML)(e.link.arabicText||"")),l=L.EditorState.createWithContent(a);st(l);var o=(e.docs||[]).reduce((function(e,t){return e+Number(t.size)}),0)/1024;Fe(o.toFixed(2)),De(e.docs||[])};(0,o.useEffect)((function(){W&&I.id&&(0,z.k_)(z.U2,[A.es,I.id],!0,d.Am,U,"","somethingWrong",dt,_)}),[W]);var ct=!(fe&&ae&&de&&qe),ut=function(){_(),q()};return(0,J.jsxs)(g.Z,{isOpen:W,toggle:_,className:"modal-dialog-centered modal-lg",onClosed:function(){V(!1),re(""),Ie(null),B(),he(""),ce(""),le(""),be(""),Ce(""),ye(""),Fe(0),De([]),Me(""),$e(L.EditorState.createEmpty()),rt(L.EditorState.createEmpty()),st(L.EditorState.createEmpty())},children:[(0,J.jsxs)(x.Z,{onSubmit:I.id?function(e,t){e.preventDefault(),V(!0),re(!1),ct||(0,z.k_)(z.Vx,[A.es,I.id,{category:qe?qe.value:null,frenchTitle:fe,englishTitle:ae,arabicTitle:de,frenchText:we,englishText:xe,arabicText:ve,image:Ee,files:Pe}],!0,d.Am,U,"usefulLinkUpdatedSuccessfully","somethingWrong",ut,null)}:function(e){e.preventDefault(),V(!0),re(!1),ct||(0,z.k_)(z.$T,[A.es,{category:qe?qe.value:null,frenchTitle:fe,englishTitle:ae,arabicTitle:de,frenchText:we,englishText:xe,arabicText:ve,image:Ee,files:Pe}],!0,d.Am,U,"usefulLinkCreatedSuccessfully","somethingWrong",ut,null)},children:[(0,J.jsx)(b.Z,{toggle:_,children:(0,J.jsx)(E.Z,{id:"".concat(I.id?"edit":"add","UsefulLink")})}),(0,J.jsx)(j.Z,{style:{height:"80vh",overflow:"auto"},className:"flex-grow-1 pb-sm-0 pb-3",children:(0,J.jsxs)("div",{children:[ee&&(0,J.jsxs)(Z.Z,{color:"danger",className:"d-flex align-items-center",children:[(0,J.jsx)("div",{className:"alert-body font-small-2 flex-grow-1",children:(0,J.jsx)("p",{children:(0,J.jsx)("small",{className:"mr-50",children:(0,J.jsx)(E.Z,{id:ee})})})}),(0,J.jsx)(c.Z,{id:"login-tip",className:"mx-50",size:18,style:{top:"10px",right:"10px"}})]}),(0,J.jsxs)(v.Z,{className:"mb-1",children:[(0,J.jsx)(v.Z,{className:"mr-25",left:!0,children:(0,J.jsxs)("div",{className:"position-relative",children:[Ee&&(0,J.jsx)(y.Z,{onClick:function(){return Me("")},pill:!0,color:"dark",className:"badge-up cursor-pointer",children:"x"}),(0,J.jsx)(v.Z,{onClick:function(){R(!l),Me(Ee||F)},object:!0,className:"rounded mr-50",src:Ee||F,alt:"Generic placeholder image",height:"100",width:"100"})]})}),(0,J.jsxs)(v.Z,{className:"mt-75 ml-1",body:!0,children:[(0,J.jsxs)(k.Z.Ripple,{tag:T.Z,className:"mr-75",size:"sm",color:"primary",children:[(0,J.jsx)(E.Z,{id:"upload"}),(0,J.jsx)(w.Z,{type:"file",onChange:function(e){(0,O.IL)(e,d.Am,U).then((function(e){return Me(e.files[0].data)}))},onClick:function(e){e.target.value=null},hidden:!0,accept:"image/*"})]}),(0,J.jsx)(k.Z.Ripple,{color:"danger",size:"sm",outline:!0,onClick:function(){return Me(I.image||"")},children:(0,J.jsx)(E.Z,{id:"reset"})}),(0,J.jsx)("p",{children:(0,J.jsx)(E.Z,{id:"uploadText"})})]})]}),(0,J.jsx)(K,{cat:qe,add:!0,edit:!0,refresh:W,dispatch:U,requireStar:!0,invalid:Q&&!qe,invalidText:(0,J.jsx)(E.Z,{id:"required"}),onChange:function(e){Ie(e)}}),(0,J.jsx)(M.Z,{label:(0,J.jsx)(E.Z,{id:"frenchTitle"}),value:fe,id:"frenchTitle",name:"frenchTitle",placeholder:"",requireStar:!0,onChange:function(e){return he(e.target.value)},invalid:Q&&!fe,invalidtext:(0,J.jsx)(E.Z,{id:"required"}),prepend:{icon:(0,J.jsx)(u.Z,{size:14})}}),(0,J.jsx)(M.Z,{label:(0,J.jsx)(E.Z,{id:"arabicTitle"}),value:de,id:"arabicTitle",name:"arabicTitle",placeholder:"",requireStar:!0,onChange:function(e){return ce(e.target.value)},invalid:Q&&!de,invalidtext:(0,J.jsx)(E.Z,{id:"required"}),prepend:{icon:(0,J.jsx)(u.Z,{size:14})}}),(0,J.jsx)(M.Z,{label:(0,J.jsx)(E.Z,{id:"englishTitle"}),value:ae,id:"englishTitle",name:"englishTitle",placeholder:"",requireStar:!0,onChange:function(e){return le(e.target.value)},invalid:Q&&!ae,invalidtext:(0,J.jsx)(E.Z,{id:"required"}),prepend:{icon:(0,J.jsx)(u.Z,{size:14})}}),(0,J.jsxs)("div",{id:"message-editor",className:"mb-1",children:[(0,J.jsx)(T.Z,{className:"form-label",children:(0,J.jsx)(E.Z,{id:"frenchText"})}),(0,J.jsx)(D.Editor,{editorState:tt,onEditorStateChange:function(e){rt(e),Ce(P()((0,L.convertToRaw)(e.getCurrentContent())))},editorClassName:"rounded-0",toolbarClassName:"rounded-0",wrapperClassName:"toolbar-bottom",toolbar:{options:["inline","textAlign","fontSize","colorPicker","fontFamily","list","blockType","history"],inline:{inDropdown:!1,options:["bold","italic","underline","strikethrough"]}}})]}),(0,J.jsxs)("div",{id:"message-editor",className:"mb-1",children:[(0,J.jsx)(T.Z,{className:"form-label",children:(0,J.jsx)(E.Z,{id:"englishText"})}),(0,J.jsx)(D.Editor,{editorState:Ve,onEditorStateChange:function(e){$e(e),be(P()((0,L.convertToRaw)(e.getCurrentContent())))},editorClassName:"rounded-0",toolbarClassName:"rounded-0",wrapperClassName:"toolbar-bottom",toolbar:{options:["inline","textAlign","fontSize","colorPicker","fontFamily","list","blockType","history"],inline:{inDropdown:!1,options:["bold","italic","underline","strikethrough"]}}})]}),(0,J.jsxs)("div",{id:"message-editor",className:"mb-1",children:[(0,J.jsx)(T.Z,{className:"form-label",children:(0,J.jsx)(E.Z,{id:"arabicText"})}),(0,J.jsx)(D.Editor,{editorState:ot,onEditorStateChange:function(e){st(e),ye(P()((0,L.convertToRaw)(e.getCurrentContent())))},editorClassName:"rounded-0",toolbarClassName:"rounded-0",wrapperClassName:"toolbar-bottom",toolbar:{options:["inline","textAlign","fontSize","colorPicker","fontFamily","list","blockType","history"],inline:{inDropdown:!1,options:["bold","italic","underline","strikethrough"]}}})]}),(0,J.jsx)("div",{className:"divider",children:(0,J.jsx)("div",{className:"divider-text",children:(0,J.jsxs)("div",{className:"full-width d-flex align-items-center justify-content-center mb-1",children:[(0,J.jsxs)(k.Z.Ripple,{className:"round center mr-50",color:"dark",onClick:function(){return Ue.current&&Ue.current.click()},children:[(0,J.jsx)(m.Z,{size:14}),(0,J.jsx)("span",{className:"align-middle mx-25",children:Be.formatMessage({id:"addDocument"})}),(0,J.jsx)(f.Z,{size:14}),(0,J.jsx)("input",{type:"file",multiple:!0,onChange:function(e){(0,O.IL)(e,d.Am,U).then((function(e){Fe(e.size),De([].concat((0,s.Z)(Pe),(0,s.Z)(e.files)))}))},onClick:function(e){e.target.value=null},name:"attach-email-item",id:"attach-email-item",ref:Ue,hidden:!0})]}),Oe>0?(0,J.jsxs)("h6",{className:"mx-1 left",children:[Oe," ",(0,J.jsx)(E.Z,{id:"ko"})]}):null]})})}),Pe&&Pe.length?(0,J.jsx)("div",{className:"d-flex flex-column mb-2",children:(0,J.jsxs)(C.Z,{size:"sm",striped:!0,children:[(0,J.jsx)("thead",{children:(0,J.jsxs)("tr",{children:[(0,J.jsx)("th",{children:"#"}),(0,J.jsx)("th",{children:Be.formatMessage({id:"name"})}),(0,J.jsx)("th",{children:Be.formatMessage({id:"size"})}),(0,J.jsx)("th",{children:Be.formatMessage({id:"actions"})})]})}),(0,J.jsx)("tbody",{style:{wordBreak:"break-word"},children:(Pe||[]).map((function(e,t){return(0,J.jsxs)("tr",{children:[(0,J.jsx)("th",{scope:"row",children:t+1}),(0,J.jsx)("td",{children:(0,J.jsx)("span",{className:"text-dark",children:e.name})}),(0,J.jsx)("td",{children:(0,J.jsxs)(y.Z,{color:"light-info",children:[(0,J.jsx)("span",{className:"text-dark",children:"".concat((e.size/1024).toFixed(2))}),(0,J.jsx)("span",{className:"text-dark ml-50",children:Be.formatMessage({id:"ko"})})]})}),(0,J.jsxs)("td",{children:[(0,J.jsx)(h.Z,{size:16,className:"text-danger cursor-pointer",onClick:function(){return function(e){var t=Pe.filter((function(t){return t.id!==e.id})),r=t.reduce((function(e,t){return e+t.size}),0)/1024;De(t),Fe(r.toFixed(2))}(e)}}),(0,J.jsx)(p.Z,{size:16,className:"text-success cursor-pointer ml-50",onClick:function(t){t.preventDefault(),(0,O.LR)(e,U,d.Am)}})]})]},t)}))})]})}):null]})}),(0,J.jsx)(N.Z,{children:(0,J.jsx)(o.Fragment,{children:(0,J.jsx)(k.Z.Ripple,{type:"submit",color:"primary",children:(0,J.jsx)(E.Z,{id:"save"})})})})]}),(0,J.jsx)(Y(),{className:r?"viewRtl":"",visible:l,onClose:function(){R(!1)},zIndex:999999999,images:[{src:Ee,alt:""}]})]})},ie=r(5513),ne=r(83823),ae=r(65497),le=r(42365),oe=r(98227),se=r(79366),de=r(30833),ce=r(56176),ue=r(14322),me=r(68138),fe=function(e,t,r,i){return[{name:r.formatMessage({id:"image"}),selector:"image",sortable:!0,cell:function(e){return(0,J.jsx)(me.Z,{onClick:function(){return t(e)},className:"mr-50",img:e.image||F,width:"32",height:"32"})}},{name:r.formatMessage({id:"title"}),selector:"en"===r.locale?"englishTitle":"fr"===r.locale?"frenchTitle":"arabicTitle",sortable:!0,cell:function(e){return"en"===r.locale?e.englishTitle:"fr"===r.locale?e.frenchTitle:e.arabicTitle}},{name:r.formatMessage({id:"linkCategory"}),selector:"en"===r.locale?"categoryEn":"fr"===r.locale?"categoryFr":"categoryAr",sortable:!0,cell:function(e){return"en"===r.locale?e.categoryEn:"fr"===r.locale?e.categoryFr:e.categoryAr}},{name:r.formatMessage({id:"docs"}),selector:"docs",sortable:!0,cell:function(e){return(0,J.jsx)("div",{className:"position-relative",children:(0,J.jsx)(y.Z,{pill:!0,color:Number(e.docs)?"light-primary":"light-dark",className:"badge-up",children:e.docs})})}},{name:r.formatMessage({id:"actions"}),minWidth:"100px",cell:function(n){return(0,J.jsxs)(ne.Z,{children:[(0,J.jsx)(ae.Z,{tag:"div",className:"btn btn-sm",children:(0,J.jsx)(se.Z,{size:14,className:"cursor-pointer"})}),(0,J.jsxs)(le.Z,{right:!0,children:[i.can(ce.a.EDIT_ACTION,ue.k.WEBSITE_SUBJECT)&&(0,J.jsxs)(oe.Z,{tag:ie.rU,to:"#",onClick:function(){return t(n)},className:"w-100",children:[(0,J.jsx)(u.Z,{size:14,className:"mr-50"}),(0,J.jsx)("span",{className:"align-middle",children:r.formatMessage({id:"edit"})})]}),i.can(ce.a.DELETE_ACTION,ue.k.SUPPLIER_SUBJECT)&&(0,J.jsxs)(oe.Z,{className:"w-100",onClick:function(){return e(n.id)},children:[(0,J.jsx)(de.Z,{size:14,className:"mr-50"}),(0,J.jsx)("span",{className:"align-middle",children:r.formatMessage({id:"delete"})})]})]})]})}}]},he=r(27434),pe=r(90044),ge=r(10267),xe=r(51252),be=r(56941),je=(r(73732),r(6756)),Ze=r(82475),ve=function(e){var t=e.toggleSidebar,r=e.data,i=e.ability,n=(0,S.Z)();return(0,J.jsx)("div",{className:"list-table-header w-100 mr-1 ml-50 mt-2 mb-75",children:(0,J.jsxs)(ge.Z,{children:[(0,J.jsx)(xe.Z,{xl:"6",className:"d-flex align-items-center p-0"}),(0,J.jsxs)(xe.Z,{xl:"6",className:"d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1",children:[(0,J.jsx)("div",{className:"mr-1",children:(0,J.jsx)(Ze._,{data:r.rows,title:"usefulLink",keys:["title","linkCategory"],displays:[function(e){return"en"===n.locale?e.englishTitle:"fr"===n.locale?e.frenchTitle:e.arabicTitle},function(e){return"en"===n.locale?e.categoryEn:"fr"===n.locale?e.categoryFr:e.categoryAr}]})}),i.can(ce.a.SEE_ACTION,ue.k.WEBSITE_SUBJECT)&&(0,J.jsxs)(k.Z.Ripple,{color:"primary",onClick:t,children:[(0,J.jsx)(f.Z,{size:15}),(0,J.jsx)("span",{className:"align-middle ml-25",children:(0,J.jsx)(E.Z,{id:"addUsefulLink"})})]})]})]})})},ye=function(){var e=(0,o.useState)({count:0,rows:[]}),t=(0,n.Z)(e,2),r=t[0],a=t[1],s=(0,o.useState)({}),c=(0,n.Z)(s,2),u=c[0],m=c[1],f=(0,ee.I0)(),h=(0,o.useState)(!1),p=(0,n.Z)(h,2),g=p[0],x=p[1],b=(0,S.Z)(),j=(0,o.useContext)(je.v),Z=function(){(0,z.k_)(z.Ki,[A.Gu],!0,d.Am,f,null,"somethingWrong",(function(e){return a(e)}),null)};(0,o.useEffect)((0,i.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Z();case 1:case"end":return e.stop()}}),e)}))),[]);var v=function(){return x(!g)};return(0,J.jsx)("div",{className:"app-usefulLink-list",children:(0,J.jsxs)(o.Fragment,{children:[(0,J.jsx)(be.Z,{children:(0,J.jsx)(pe.ZP,{noHeader:!0,subHeader:!0,responsive:!0,columns:fe((function(e){(0,B.o)(b.formatMessage({id:"delete"}),b.formatMessage({id:"deleteUsefulLinkQuestion"}),"warning",!0,b.formatMessage({id:"yes"}),b.formatMessage({id:"no"})).then((function(t){t.value&&(0,z.k_)(z.Od,[A.es,e],!0,d.Am,f,"usefulLinkDeletedSuccessfully","somethingWrong",(function(){return Z()}),null)}))}),(function(e){m(e),v()}),b,j),sortIcon:(0,J.jsx)(he.Z,{}),className:"react-dataTable",data:r,noDataComponent:(0,J.jsx)("span",{className:"my-3",children:(0,J.jsx)(E.Z,{id:"noRecords"})}),subHeaderComponent:(0,J.jsx)(ve,{ability:j,toggleSidebar:v,data:r,intl:b})})}),(0,J.jsx)(re,{usefulLink:u,open:g,dispatch:f,onClosed:function(){return m({})},toggleSidebar:v,refresh:function(){return Z()}})]})})},ke=(r(61360),function(){return(0,J.jsx)("div",{className:"app-user-list",children:(0,J.jsx)(ye,{})})})},55717:function(e,t,r){var i=r(8081),n=r.n(i),a=r(23645),l=r.n(a),o=r(26755),s=l()(n());s.i(o.Z),s.push([e.id,".rdw-editor-wrapper .rdw-editor-toolbar{margin-bottom:0;padding:.5rem;padding-bottom:0;border-color:#ebe9f1;border-top-left-radius:.357rem;border-top-right-radius:.357rem}.rdw-editor-wrapper .rdw-editor-toolbar .rdw-option-wrapper{border:none}.rdw-editor-wrapper .rdw-editor-toolbar .rdw-option-wrapper.rdw-option-active{box-shadow:none;background-color:rgba(0,145,61,.2)}.rdw-editor-wrapper .rdw-editor-toolbar .rdw-option-wrapper:hover{box-shadow:none}.rdw-editor-wrapper .rdw-editor-toolbar .rdw-dropdown-wrapper{border:1px solid #ebe9f1}.rdw-editor-wrapper .rdw-editor-toolbar .rdw-dropdown-wrapper .rdw-dropdown-optionwrapper:hover{box-shadow:none}.rdw-editor-wrapper .rdw-editor-toolbar .rdw-dropdown-wrapper:hover{box-shadow:none}.rdw-editor-wrapper .rdw-editor-toolbar .rdw-link-modal,.rdw-editor-wrapper .rdw-editor-toolbar .rdw-embedded-modal{height:auto}.rdw-editor-wrapper .rdw-editor-main{min-height:10rem;padding:.5rem 1.2rem;border:1px solid #ebe9f1;border-bottom-left-radius:.357rem;border-bottom-right-radius:.357rem}.rdw-editor-wrapper .rdw-editor-toolbar~.rdw-editor-main{border-top:none}.rdw-editor-wrapper.toolbar-bottom{display:flex;flex-direction:column}.rdw-editor-wrapper.toolbar-bottom .rdw-editor-toolbar{order:2;border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:.357rem;border-bottom-right-radius:.357rem}.rdw-editor-wrapper.toolbar-bottom .rdw-editor-main{border-top:1px solid #ebe9f1;border-bottom:0;border-top-left-radius:.357rem;border-top-right-radius:.357rem;border-bottom-left-radius:0;border-bottom-right-radius:0;order:1}",""]),t.Z=s},34726:function(e,t,r){var i=r(87462),n=r(63366),a=r(67294),l=r(45697),o=r.n(l),s=r(94184),d=r.n(s),c=r(23663),u={body:o().bool,bottom:o().bool,children:o().node,className:o().string,cssModule:o().object,heading:o().bool,left:o().bool,list:o().bool,middle:o().bool,object:o().bool,right:o().bool,tag:c.iC,top:o().bool},m=function(e){var t,r=e.body,l=e.bottom,o=e.className,s=e.cssModule,u=e.heading,m=e.left,f=e.list,h=e.middle,p=e.object,g=e.right,x=e.tag,b=e.top,j=(0,n.Z)(e,["body","bottom","className","cssModule","heading","left","list","middle","object","right","tag","top"]);t=u?"h4":j.href?"a":j.src||p?"img":f?"ul":"div";var Z=x||t,v=(0,c.mx)(d()(o,{"media-body":r,"media-heading":u,"media-left":m,"media-right":g,"media-top":b,"media-bottom":l,"media-middle":h,"media-object":p,"media-list":f,media:!(r||u||m||g||b||l||h||p||f)}),s);return a.createElement(Z,(0,i.Z)({},j,{className:v}))};m.propTypes=u,t.Z=m},97985:function(e,t,r){var i=r(87462),n=r(63366),a=r(67294),l=r(45697),o=r.n(l),s=r(94184),d=r.n(s),c=r(23663),u={tag:c.iC,className:o().string,cssModule:o().object},m=function(e){var t=e.className,r=e.cssModule,l=e.tag,o=(0,n.Z)(e,["className","cssModule","tag"]),s=(0,c.mx)(d()(t,"modal-footer"),r);return a.createElement(l,(0,i.Z)({},o,{className:s}))};m.propTypes=u,m.defaultProps={tag:"div"},t.Z=m},36595:function(e,t,r){var i=r(87462),n=r(63366),a=r(67294),l=r(45697),o=r.n(l),s=r(94184),d=r.n(s),c=r(23663),u={className:o().string,cssModule:o().object,size:o().string,bordered:o().bool,borderless:o().bool,striped:o().bool,dark:o().bool,hover:o().bool,responsive:o().oneOfType([o().bool,o().string]),tag:c.iC,responsiveTag:c.iC,innerRef:o().oneOfType([o().func,o().string,o().object])},m=function(e){var t=e.className,r=e.cssModule,l=e.size,o=e.bordered,s=e.borderless,u=e.striped,m=e.dark,f=e.hover,h=e.responsive,p=e.tag,g=e.responsiveTag,x=e.innerRef,b=(0,n.Z)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),j=(0,c.mx)(d()(t,"table",!!l&&"table-"+l,!!o&&"table-bordered",!!s&&"table-borderless",!!u&&"table-striped",!!m&&"table-dark",!!f&&"table-hover"),r),Z=a.createElement(p,(0,i.Z)({},b,{ref:x,className:j}));if(h){var v=(0,c.mx)(!0===h?"table-responsive":"table-responsive-"+h,r);return a.createElement(g,{className:v},Z)}return Z};m.propTypes=u,m.defaultProps={tag:"table",responsiveTag:"div"},t.Z=m},92749:function(e,t,r){var i=r(93379),n=r.n(i),a=r(7795),l=r.n(a),o=r(90569),s=r.n(o),d=r(3565),c=r.n(d),u=r(19216),m=r.n(u),f=r(44589),h=r.n(f),p=r(55717),g={};g.styleTagTransform=h(),g.setAttributes=c(),g.insert=s().bind(null,"head"),g.domAPI=l(),g.insertStyleElement=m(),n()(p.Z,g),p.Z&&p.Z.locals&&p.Z.locals},31465:function(e,t,r){e.exports=r.p+"3c40b1393e7a6c08b07b.png"}}]);