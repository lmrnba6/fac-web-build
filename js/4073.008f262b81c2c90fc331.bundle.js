"use strict";(self.webpackChunkfac=self.webpackChunkfac||[]).push([[4073],{24073:function(e,r,t){t.r(r),t.d(r,{default:function(){return Ze}});var i=t(15861),n=t(70885),a=t(87757),l=t.n(a),s=t(67294),o=t(42982),d=t(39249),c=t(61643),u=t(55654),m=t(70616),f=t(36694),p=t(61896),h=t(13777),x=t(7708),g=t(85677),b=t(15538),j=t(32701),Z=t(10684),v=t(17834),y=t(34726),T=t(17354),k=t(97975),w=t(67954),C=t(609),N=t(36595),S=t(97985),E=(t(92749),t(22299),t(86896)),M=t(44012),z=t(48159),O=t(16550),A=t(88295),L=t(16724),F=t(31465),P=t(9041),W=(t(89265),t(35108),t(4942)),R=t(45987),_=t(39397),I=t(82669),q=t(16714),D=t(28166),U=t(7966),B=t(47201),H=t(85893),G=["data"];function J(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function Q(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?J(Object(t),!0).forEach((function(r){(0,W.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):J(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var V=function(e){var r=e.refresh,t=e.dispatch,i=e.cat,a=e.requireStar,l=e.onChange,m=e.edit,f=e.invalid,h=e.invalidText,x=e.add,b=e.label,y=e.disabled,T=(0,s.useState)(!1),C=(0,n.Z)(T,2),N=C[0],F=C[1],P=(0,s.useState)(null),W=(0,n.Z)(P,2),J=W[0],V=W[1],$=(0,s.useState)(!1),K=(0,n.Z)($,2),X=K[0],Y=K[1],ee=(0,s.useState)([]),re=(0,n.Z)(ee,2),te=re[0],ie=re[1],ne=(0,s.useState)([]),ae=(0,n.Z)(ne,2),le=ae[0],se=ae[1],oe=(0,s.useState)(null),de=(0,n.Z)(oe,2),ce=de[0],ue=de[1],me=(0,s.useState)({}),fe=(0,n.Z)(me,2),pe=fe[0],he=fe[1],xe=(0,B.Q)(),ge=(0,n.Z)(xe,1)[0],be=(0,E.Z)();function je(e){se(e);var r=e.map((function(e){return{value:e.id,label:"en"===be.locale?e.englishTitle:"fr"===be.locale?e.frenchTitle:e.arabicTitle,frenchTitle:e.frenchTitle,englishTitle:e.englishTitle,arabicTitle:e.arabicTitle}}));m&&ce&&(r=[{value:"edit-linkCategory",label:be.formatMessage({id:"editCategory"}),type:"edit-linkCategory",color:"flat-warning"}].concat((0,o.Z)(r))),x&&(r=[{value:"add-linkCategory",label:be.formatMessage({id:"addCategory"}),type:"add-linkCategory",color:"flat-success"}].concat((0,o.Z)(r))),ie(r)}var Ze=function(){(0,O.k_)(O.go,[A.od],!0,d.Am,t,"","somethingWrong",je,null)},ve=function(){Y(!1),ue(null),l(null),Ze()};(0,s.useEffect)((function(){ue(i)}),[i]),(0,s.useEffect)((function(){r&&Ze()}),[r]);var ye=function(e){414===e.code?V("nameExist"):V("somethingWrong")};return(0,H.jsxs)("div",{children:[(0,H.jsxs)(I.Z,{children:[!1!==b&&(0,H.jsxs)(w.Z,{for:"linkCategory",children:[(0,H.jsx)(M.Z,{id:"linkCategory"})," ",a?(0,H.jsx)("span",{className:"text-danger h6",children:"*"}):""]}),(0,H.jsxs)("div",{style:{border:"".concat(f?"#dc3545":"dark"===ge?"#404656":"#d8d6de"," solid 1px"),borderRadius:"5px",display:"flex",alignItems:"center"},children:[(0,H.jsx)(_.Z,{className:"mx-1",size:14}),(0,H.jsx)("div",{style:{flexGrow:1,borderLeft:"".concat(f?"#dc3545":"dark"===ge?"#404656":"#d8d6de"," solid ").concat("ar"===be.locale?"0px":"1px"),borderRight:"".concat(f?"#dc3545":"dark"===ge?"#404656":"#d8d6de"," solid ").concat("ar"===be.locale?"1px":"0px")},children:(0,H.jsx)(D.ZP,{isDisabled:y,styles:{control:function(e){return Q(Q({},e),{},{border:"none"})}},onMenuOpen:function(){return je(le)},id:"linkCategory",placeholder:be.formatMessage({id:"selectCategory"}),value:ce,components:{Option:function(e){var r=e.data,i=(0,R.Z)(e,G);return"add-linkCategory"===r.type?(0,H.jsxs)(k.Z,{className:"text-left rounded-0",color:r.color,block:!0,onClick:function(){return Y(!0)},children:[(0,H.jsx)(p.Z,{size:14})," ",(0,H.jsx)("span",{className:"align-middle ml-50",children:r.label})]}):"edit-linkCategory"===r.type?(0,H.jsxs)(k.Z,{className:"text-left rounded-0",color:r.color,block:!0,onClick:function(){var e;(e=te.find((function(e){return e.value===Number(ce.value)})))&&(0,O.k_)(O.U2,[A.y0,e.value],!0,d.Am,t,"","somethingWrong",(function(e){he(e),Y(!0)}),null)},children:[(0,H.jsx)(u.Z,{size:14})," ",(0,H.jsx)("span",{className:"align-middle ml-50",children:r.label})]}):(0,H.jsxs)(U.E.Option,Q(Q({},i),{},{children:[" ",r.label," "]}))}},noOptionsMessage:function(){return(0,H.jsx)(M.Z,{id:"noRecords"})},onChange:function(e){return function(e){ue(e),l(e)}(e)},isClearable:!0,theme:L.ss,options:te,classNamePrefix:"select"})})]}),f&&(0,H.jsx)("div",{className:"customSelectError",children:h})]}),(0,H.jsxs)(g.Z,{isOpen:X,toggle:function(){return Y(!X)},onClosed:function(){F(!1),Y(!1),he({}),V("")},className:"modal-dialog-centered",children:[(0,H.jsx)(j.Z,{toggle:function(){return Y(!X)},children:(0,H.jsx)(M.Z,{id:pe.id?"editCategory":"addCategory"})}),(0,H.jsxs)(Z.Z,{children:[J&&(0,H.jsxs)(v.Z,{color:"danger",className:"d-flex align-items-center",children:[(0,H.jsx)("div",{className:"alert-body font-small-2 flex-grow-1",children:(0,H.jsx)("p",{children:(0,H.jsx)("small",{className:"mr-50",children:(0,H.jsx)(M.Z,{id:J})})})}),(0,H.jsx)(c.Z,{id:"login-tip",className:"mx-50",size:18,style:{top:"10px",right:"10px"}})]}),(0,H.jsx)(z.Z,{label:(0,H.jsx)(M.Z,{id:"frenchTitle"}),value:pe.frenchTitle,id:"frenchTitle",name:"frenchTitle",placeholder:"",requireStar:!0,onChange:function(e){return he(Q(Q({},pe),{},{frenchTitle:e.target.value}))},invalid:N&&!pe.frenchTitle,invalidtext:(0,H.jsx)(M.Z,{id:"required"}),prepend:{icon:(0,H.jsx)(u.Z,{size:14})}}),(0,H.jsx)(z.Z,{label:(0,H.jsx)(M.Z,{id:"englishTitle"}),value:pe.englishTitle,id:"englishTitle",name:"englishTitle",placeholder:"",requireStar:!0,onChange:function(e){return he(Q(Q({},pe),{},{englishTitle:e.target.value}))},invalid:N&&!pe.englishTitle,invalidtext:(0,H.jsx)(M.Z,{id:"required"}),prepend:{icon:(0,H.jsx)(u.Z,{size:14})}}),(0,H.jsx)(z.Z,{label:(0,H.jsx)(M.Z,{id:"arabicTitle"}),value:pe.arabicTitle,id:"arabicTitle",name:"arabicTitle",placeholder:"",requireStar:!0,onChange:function(e){return he(Q(Q({},pe),{},{arabicTitle:e.target.value}))},invalid:N&&!pe.arabicTitle,invalidtext:(0,H.jsx)(M.Z,{id:"required"}),prepend:{icon:(0,H.jsx)(u.Z,{size:14})}})]}),(0,H.jsxs)(S.Z,{children:[(0,H.jsx)(k.Z.Ripple,{onClick:function(e){e.preventDefault(),V(!1),F(!0),pe.frenchTitle&&pe.englishTitle&&pe.arabicTitle&&(pe.id?(0,O.k_)(O.Vx,[A.y0,pe.id,pe],!0,d.Am,t,"linkCategoryUpdatedSuccessfully","",ve,ye):(0,O.k_)(O.$T,[A.y0,pe],!0,d.Am,t,"linkCategoryCreatedSuccessfully","",ve,ye))},color:"primary",children:(0,H.jsx)(M.Z,{id:"save"})}),(0,H.jsx)(k.Z.Ripple,{color:"danger",type:"button",onClick:function(){(0,q.o)(be.formatMessage({id:"delete"}),be.formatMessage({id:"deleteLinkCategoryQuestion"}),"warning",!0,be.formatMessage({id:"yes"}),be.formatMessage({id:"no"})).then((function(e){e.value&&(0,O.k_)(O.Vx,[A.y0,pe.id,{deleted:!0}],!0,d.Am,t,"linkCategoryDeletedSuccessfully","somethingWrong",ve,null)}))},children:(0,H.jsx)(M.Z,{id:"delete"})})]})]})]})},$=t(51285),K=t.n($),X=function(e){var r=s.useState(!1),t=(0,n.Z)(r,2),i=t[0],a=t[1],l=e.open,W=e.toggleSidebar,R=e.refresh,_=e.usefulLink,I=e.onClosed,q=e.dispatch,D=(0,s.useState)(!1),U=(0,n.Z)(D,2),B=U[0],G=U[1],J=(0,s.useState)(null),Q=(0,n.Z)(J,2),$=Q[0],X=Q[1],Y=(0,s.useState)(null),ee=(0,n.Z)(Y,2),re=ee[0],te=ee[1],ie=(0,s.useState)(null),ne=(0,n.Z)(ie,2),ae=ne[0],le=ne[1],se=(0,s.useState)(null),oe=(0,n.Z)(se,2),de=oe[0],ce=oe[1],ue=(0,s.useState)(null),me=(0,n.Z)(ue,2),fe=me[0],pe=me[1],he=(0,s.useState)(null),xe=(0,n.Z)(he,2),ge=xe[0],be=xe[1],je=(0,s.useState)(null),Ze=(0,n.Z)(je,2),ve=Ze[0],ye=Ze[1],Te=(0,s.useState)(null),ke=(0,n.Z)(Te,2),we=ke[0],Ce=ke[1],Ne=(0,s.useState)(0),Se=(0,n.Z)(Ne,2),Ee=Se[0],Me=Se[1],ze=(0,s.useState)([]),Oe=(0,n.Z)(ze,2),Ae=Oe[0],Le=Oe[1],Fe=(0,s.useState)(null),Pe=(0,n.Z)(Fe,2),We=Pe[0],Re=Pe[1],_e=(0,E.Z)(),Ie=(0,s.useRef)(),qe=P.ContentState.createFromBlockArray((0,P.convertFromHTML)("")),De=P.EditorState.createWithContent(qe),Ue=(0,s.useState)(De),Be=(0,n.Z)(Ue,2),He=(Be[0],Be[1]),Ge=P.ContentState.createFromBlockArray((0,P.convertFromHTML)("")),Je=P.EditorState.createWithContent(Ge),Qe=(0,s.useState)(Je),Ve=(0,n.Z)(Qe,2),$e=(Ve[0],Ve[1]),Ke=P.ContentState.createFromBlockArray((0,P.convertFromHTML)("")),Xe=P.EditorState.createWithContent(Ke),Ye=(0,s.useState)(Xe),er=(0,n.Z)(Ye,2),rr=(er[0],er[1]),tr=function(e){ce(e.link.frenchTitle),le(e.link.arabicTitle),te(e.link.englishTitle),pe(e.link.englishText),ye(e.link.frenchText),be(e.link.arabicText),e.link.category&&Re({value:e.link.category,label:"fr"===_e.locale?e.link.categoryFr:"en"===_e.locale?e.link.categoryEn:e.link.categoryAr,frenchTitle:e.link.categoryFr,englishTitle:e.link.categoryEn,arabicTitle:e.link.categoryAr}),Ce(e.link.image);var r=P.ContentState.createFromBlockArray((0,P.convertFromHTML)(e.link.englishText||"")),t=P.EditorState.createWithContent(r);He(t);var i=P.ContentState.createFromBlockArray((0,P.convertFromHTML)(e.link.frenchText||"")),n=P.EditorState.createWithContent(i);$e(n);var a=P.ContentState.createFromBlockArray((0,P.convertFromHTML)(e.link.arabicText||"")),l=P.EditorState.createWithContent(a);rr(l);var s=(e.docs||[]).reduce((function(e,r){return e+Number(r.size)}),0)/1024;Me(s.toFixed(2)),Le(e.docs||[])};(0,s.useEffect)((function(){l&&_.id&&(0,O.k_)(O.U2,[A.es,_.id],!0,d.Am,q,"","somethingWrong",tr,W)}),[l]);var ir=!(de&&re&&ae&&We),nr=function(){W(),R()};return(0,H.jsxs)(g.Z,{isOpen:l,toggle:W,className:"modal-dialog-centered modal-lg",onClosed:function(){G(!1),X(""),Re(null),I(),ce(""),le(""),te(""),pe(""),ye(""),be(""),Me(0),Le([]),Ce(""),He(P.EditorState.createEmpty()),$e(P.EditorState.createEmpty()),rr(P.EditorState.createEmpty())},children:[(0,H.jsxs)(b.Z,{onSubmit:_.id?function(e,r){e.preventDefault(),G(!0),X(!1),ir||(0,O.k_)(O.Vx,[A.es,_.id,{category:We?We.value:null,frenchTitle:de,englishTitle:re,arabicTitle:ae,frenchText:ve,englishText:fe,arabicText:ge,image:we,files:Ae}],!0,d.Am,q,"usefulLinkUpdatedSuccessfully","somethingWrong",nr,null)}:function(e){e.preventDefault(),G(!0),X(!1),ir||(0,O.k_)(O.$T,[A.es,{category:We?We.value:null,frenchTitle:de,englishTitle:re,arabicTitle:ae,frenchText:ve,englishText:fe,arabicText:ge,image:we,files:Ae}],!0,d.Am,q,"usefulLinkCreatedSuccessfully","somethingWrong",nr,null)},children:[(0,H.jsx)(j.Z,{toggle:W,children:(0,H.jsx)(M.Z,{id:"".concat(_.id?"edit":"add","UsefulLink")})}),(0,H.jsx)(Z.Z,{style:{height:"80vh",overflow:"auto"},className:"flex-grow-1 pb-sm-0 pb-3",children:(0,H.jsxs)("div",{children:[$&&(0,H.jsxs)(v.Z,{color:"danger",className:"d-flex align-items-center",children:[(0,H.jsx)("div",{className:"alert-body font-small-2 flex-grow-1",children:(0,H.jsx)("p",{children:(0,H.jsx)("small",{className:"mr-50",children:(0,H.jsx)(M.Z,{id:$})})})}),(0,H.jsx)(c.Z,{id:"login-tip",className:"mx-50",size:18,style:{top:"10px",right:"10px"}})]}),(0,H.jsxs)(y.Z,{className:"mb-1",children:[(0,H.jsx)(y.Z,{className:"mr-25",left:!0,children:(0,H.jsxs)("div",{className:"position-relative",children:[we&&we!==_.image&&(0,H.jsx)(T.Z,{onClick:function(){return Ce("")},pill:!0,color:"dark",className:"badge-up cursor-pointer",children:"x"}),(0,H.jsx)(y.Z,{onClick:function(){a(!i),Ce(we||F)},object:!0,className:"rounded mr-50",src:we||F,alt:"Generic placeholder image",height:"100",width:"100"})]})}),(0,H.jsxs)(y.Z,{className:"mt-75 ml-1",body:!0,children:[(0,H.jsxs)(k.Z.Ripple,{tag:w.Z,className:"mr-75",size:"sm",color:"primary",children:[(0,H.jsx)(M.Z,{id:"upload"}),(0,H.jsx)(C.Z,{type:"file",onChange:function(e){(0,L.IL)(e,d.Am,q).then((function(e){return Ce(e.files[0].data)}))},onClick:function(e){e.target.value=null},hidden:!0,accept:"image/*"})]}),(0,H.jsx)(k.Z.Ripple,{color:"danger",size:"sm",outline:!0,onClick:function(){return Ce(_.image||"")},children:(0,H.jsx)(M.Z,{id:"reset"})}),(0,H.jsx)("p",{children:(0,H.jsx)(M.Z,{id:"uploadText"})})]})]}),(0,H.jsx)(V,{cat:We,add:!0,edit:!0,refresh:l,dispatch:q,requireStar:!0,invalid:B&&!We,invalidText:(0,H.jsx)(M.Z,{id:"required"}),onChange:function(e){Re(e)}}),(0,H.jsx)(z.Z,{label:(0,H.jsx)(M.Z,{id:"frenchTitle"}),value:de,id:"frenchTitle",name:"frenchTitle",placeholder:"",requireStar:!0,onChange:function(e){return ce(e.target.value)},invalid:B&&!de,invalidtext:(0,H.jsx)(M.Z,{id:"required"}),prepend:{icon:(0,H.jsx)(u.Z,{size:14})}}),(0,H.jsx)(z.Z,{label:(0,H.jsx)(M.Z,{id:"frenchText"}),value:ve,id:"frenchText",name:"frenchText",type:"textarea",placeholder:"",onChange:function(e){return ye(e.target.value)},prepend:{icon:(0,H.jsx)(m.Z,{size:14})}}),(0,H.jsx)(z.Z,{label:(0,H.jsx)(M.Z,{id:"englishTitle"}),value:re,id:"englishTitle",name:"englishTitle",placeholder:"",requireStar:!0,onChange:function(e){return te(e.target.value)},invalid:B&&!re,invalidtext:(0,H.jsx)(M.Z,{id:"required"}),prepend:{icon:(0,H.jsx)(u.Z,{size:14})}}),(0,H.jsx)(z.Z,{label:(0,H.jsx)(M.Z,{id:"englishText"}),value:fe,id:"englishText",name:"englishText",type:"textarea",placeholder:"",onChange:function(e){return pe(e.target.value)},prepend:{icon:(0,H.jsx)(m.Z,{size:14})}}),(0,H.jsx)(z.Z,{label:(0,H.jsx)(M.Z,{id:"arabicTitle"}),value:ae,id:"arabicTitle",name:"arabicTitle",placeholder:"",requireStar:!0,onChange:function(e){return le(e.target.value)},invalid:B&&!ae,invalidtext:(0,H.jsx)(M.Z,{id:"required"}),prepend:{icon:(0,H.jsx)(u.Z,{size:14})}}),(0,H.jsx)(z.Z,{label:(0,H.jsx)(M.Z,{id:"arabicText"}),value:ge,id:"arabicText",name:"arabicText",type:"textarea",placeholder:"",onChange:function(e){return be(e.target.value)},prepend:{icon:(0,H.jsx)(m.Z,{size:14})}}),(0,H.jsx)("div",{className:"divider",children:(0,H.jsx)("div",{className:"divider-text",children:(0,H.jsxs)("div",{className:"full-width d-flex align-items-center justify-content-center mb-1",children:[(0,H.jsxs)(k.Z.Ripple,{className:"round center mr-50",color:"dark",onClick:function(){return Ie.current&&Ie.current.click()},children:[(0,H.jsx)(f.Z,{size:14}),(0,H.jsx)("span",{className:"align-middle mx-25",children:_e.formatMessage({id:"addDocument"})}),(0,H.jsx)(p.Z,{size:14}),(0,H.jsx)("input",{type:"file",multiple:!0,onChange:function(e){(0,L.IL)(e,d.Am,q).then((function(e){Me(e.size),Le([].concat((0,o.Z)(Ae),(0,o.Z)(e.files)))}))},onClick:function(e){e.target.value=null},name:"attach-email-item",id:"attach-email-item",ref:Ie,hidden:!0})]}),Ee>0?(0,H.jsxs)("h6",{className:"mx-1 left",children:[Ee," ",(0,H.jsx)(M.Z,{id:"ko"})]}):null]})})}),Ae&&Ae.length?(0,H.jsx)("div",{className:"d-flex flex-column mb-2",children:(0,H.jsxs)(N.Z,{size:"sm",striped:!0,children:[(0,H.jsx)("thead",{children:(0,H.jsxs)("tr",{children:[(0,H.jsx)("th",{children:"#"}),(0,H.jsx)("th",{children:_e.formatMessage({id:"name"})}),(0,H.jsx)("th",{children:_e.formatMessage({id:"size"})}),(0,H.jsx)("th",{children:_e.formatMessage({id:"actions"})})]})}),(0,H.jsx)("tbody",{children:(Ae||[]).map((function(e,r){return(0,H.jsxs)("tr",{children:[(0,H.jsx)("th",{scope:"row",children:r+1}),(0,H.jsx)("td",{children:(0,H.jsx)("span",{className:"text-dark",children:e.name})}),(0,H.jsx)("td",{children:(0,H.jsxs)(T.Z,{color:"light-info",children:[(0,H.jsx)("span",{className:"text-dark",children:"".concat((e.size/1024).toFixed(2))}),(0,H.jsx)("span",{className:"text-dark ml-50",children:_e.formatMessage({id:"ko"})})]})}),(0,H.jsxs)("td",{children:[(0,H.jsx)(h.Z,{size:16,className:"text-danger cursor-pointer",onClick:function(){return function(e){var r=Ae.filter((function(r){return r.id!==e.id})),t=r.reduce((function(e,r){return e+r.size}),0)/1024;Le(r),Me(t.toFixed(2))}(e)}}),(0,H.jsx)(x.Z,{size:16,className:"text-success cursor-pointer ml-50",onClick:function(r){r.preventDefault(),(0,L.Sv)(e,q)}})]})]},r)}))})]})}):null]})}),(0,H.jsx)(S.Z,{children:(0,H.jsx)(s.Fragment,{children:(0,H.jsx)(k.Z.Ripple,{type:"submit",color:"primary",children:(0,H.jsx)(M.Z,{id:"save"})})})})]}),(0,H.jsx)(K(),{visible:i,onClose:function(){a(!1)},zIndex:999999999,images:[{src:we,alt:""}]})]})},Y=t(5513),ee=t(83823),re=t(65497),te=t(42365),ie=t(98227),ne=t(79366),ae=t(30833),le=t(56176),se=t(14322),oe=t(68138),de=function(e,r,t,i){return[{name:t.formatMessage({id:"image"}),selector:"image",sortable:!0,cell:function(e){return(0,H.jsx)(oe.Z,{onClick:function(){return r(e)},className:"mr-50",img:e.image||F,width:"32",height:"32"})}},{name:t.formatMessage({id:"title"}),selector:"en"===t.locale?"englishTitle":"fr"===t.locale?"frenchTitle":"arabicTitle",sortable:!0,cell:function(e){return"en"===t.locale?e.englishTitle:"fr"===t.locale?e.frenchTitle:e.arabicTitle}},{name:t.formatMessage({id:"linkCategory"}),selector:"en"===t.locale?"categoryEn":"fr"===t.locale?"categoryFr":"categoryAr",sortable:!0,cell:function(e){return"en"===t.locale?e.categoryEn:"fr"===t.locale?e.categoryFr:e.categoryAr}},{name:t.formatMessage({id:"docs"}),selector:"docs",sortable:!0,cell:function(e){return(0,H.jsx)("div",{className:"position-relative",children:(0,H.jsx)(T.Z,{pill:!0,color:Number(e.docs)?"light-primary":"light-dark",className:"badge-up",children:e.docs})})}},{name:t.formatMessage({id:"actions"}),minWidth:"100px",cell:function(n){return(0,H.jsxs)(ee.Z,{children:[(0,H.jsx)(re.Z,{tag:"div",className:"btn btn-sm",children:(0,H.jsx)(ne.Z,{size:14,className:"cursor-pointer"})}),(0,H.jsxs)(te.Z,{right:!0,children:[i.can(le.a.EDIT_ACTION,se.k.WEBSITE_SUBJECT)&&(0,H.jsxs)(ie.Z,{tag:Y.rU,to:"#",onClick:function(){return r(n)},className:"w-100",children:[(0,H.jsx)(u.Z,{size:14,className:"mr-50"}),(0,H.jsx)("span",{className:"align-middle",children:t.formatMessage({id:"edit"})})]}),i.can(le.a.DELETE_ACTION,se.k.SUPPLIER_SUBJECT)&&(0,H.jsxs)(ie.Z,{className:"w-100",onClick:function(){return e(n.id)},children:[(0,H.jsx)(ae.Z,{size:14,className:"mr-50"}),(0,H.jsx)("span",{className:"align-middle",children:t.formatMessage({id:"delete"})})]})]})]})}}]},ce=t(84751),ue=t(27434),me=t(90044),fe=t(10267),pe=t(51252),he=t(56941),xe=(t(73732),t(6756)),ge=t(82475),be=function(e){var r=e.toggleSidebar,t=(e.handlePerPage,e.rowsPerPage,e.pageIndex,e.data),i=(e.intl,e.ability);return(0,H.jsx)("div",{className:"list-table-header w-100 mr-1 ml-50 mt-2 mb-75",children:(0,H.jsxs)(fe.Z,{children:[(0,H.jsx)(pe.Z,{xl:"6",className:"d-flex align-items-center p-0"}),(0,H.jsxs)(pe.Z,{xl:"6",className:"d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1",children:[(0,H.jsx)("div",{className:"mr-1",children:(0,H.jsx)(ge._,{data:t,title:"usefulLink",keys:["name","email","phone"]})}),i.can(le.a.WRITE_ACTION,se.k.WEBSITE_SUBJECT)&&(0,H.jsxs)(k.Z.Ripple,{color:"primary",onClick:r,children:[(0,H.jsx)(p.Z,{size:15}),(0,H.jsx)("span",{className:"align-middle ml-25",children:(0,H.jsx)(M.Z,{id:"addUsefulLink"})})]})]})]})})},je=function(){var e=(0,s.useState)({count:0,rows:[]}),r=(0,n.Z)(e,2),t=r[0],a=r[1],o=(0,s.useState)({}),c=(0,n.Z)(o,2),u=c[0],m=c[1],f=(0,ce.I0)(),p=(0,s.useState)(!1),h=(0,n.Z)(p,2),x=h[0],g=h[1],b=(0,E.Z)(),j=(0,s.useContext)(xe.v),Z=function(){(0,O.k_)(O.Ki,[A.Gu],!0,d.Am,f,null,"somethingWrong",(function(e){return a(e)}),null)};(0,s.useEffect)((0,i.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Z();case 1:case"end":return e.stop()}}),e)}))),[]);var v=function(){return g(!x)};return(0,H.jsx)("div",{className:"app-usefulLink-list",children:(0,H.jsxs)(s.Fragment,{children:[(0,H.jsx)(he.Z,{children:(0,H.jsx)(me.ZP,{noHeader:!0,subHeader:!0,responsive:!0,columns:de((function(e){(0,q.o)(b.formatMessage({id:"delete"}),b.formatMessage({id:"deleteUsefulLinkQuestion"}),"warning",!0,b.formatMessage({id:"yes"}),b.formatMessage({id:"no"})).then((function(r){r.value&&(0,O.k_)(O.Od,[A.es,e],!0,d.Am,f,"usefulLinkDeletedSuccessfully","somethingWrong",(function(){return Z()}),null)}))}),(function(e){m(e),v()}),b,j),sortIcon:(0,H.jsx)(ue.Z,{}),className:"react-dataTable",data:t,noDataComponent:(0,H.jsx)("span",{className:"my-3",children:(0,H.jsx)(M.Z,{id:"noRecords"})}),subHeaderComponent:(0,H.jsx)(be,{ability:j,toggleSidebar:v,data:t,intl:b})})}),(0,H.jsx)(X,{usefulLink:u,open:x,dispatch:f,onClosed:function(){return m({})},toggleSidebar:v,refresh:function(){return Z()}})]})})},Ze=(t(61360),function(){return(0,H.jsx)("div",{className:"app-user-list",children:(0,H.jsx)(je,{})})})},55717:function(e,r,t){var i=t(8081),n=t.n(i),a=t(23645),l=t.n(a),s=t(26755),o=l()(n());o.i(s.Z),o.push([e.id,".rdw-editor-wrapper .rdw-editor-toolbar{margin-bottom:0;padding:.5rem;padding-bottom:0;border-color:#ebe9f1;border-top-left-radius:.357rem;border-top-right-radius:.357rem}.rdw-editor-wrapper .rdw-editor-toolbar .rdw-option-wrapper{border:none}.rdw-editor-wrapper .rdw-editor-toolbar .rdw-option-wrapper.rdw-option-active{box-shadow:none;background-color:rgba(0,145,61,.2)}.rdw-editor-wrapper .rdw-editor-toolbar .rdw-option-wrapper:hover{box-shadow:none}.rdw-editor-wrapper .rdw-editor-toolbar .rdw-dropdown-wrapper{border:1px solid #ebe9f1}.rdw-editor-wrapper .rdw-editor-toolbar .rdw-dropdown-wrapper .rdw-dropdown-optionwrapper:hover{box-shadow:none}.rdw-editor-wrapper .rdw-editor-toolbar .rdw-dropdown-wrapper:hover{box-shadow:none}.rdw-editor-wrapper .rdw-editor-toolbar .rdw-link-modal,.rdw-editor-wrapper .rdw-editor-toolbar .rdw-embedded-modal{height:auto}.rdw-editor-wrapper .rdw-editor-main{min-height:10rem;padding:.5rem 1.2rem;border:1px solid #ebe9f1;border-bottom-left-radius:.357rem;border-bottom-right-radius:.357rem}.rdw-editor-wrapper .rdw-editor-toolbar~.rdw-editor-main{border-top:none}.rdw-editor-wrapper.toolbar-bottom{display:flex;flex-direction:column}.rdw-editor-wrapper.toolbar-bottom .rdw-editor-toolbar{order:2;border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:.357rem;border-bottom-right-radius:.357rem}.rdw-editor-wrapper.toolbar-bottom .rdw-editor-main{border-top:1px solid #ebe9f1;border-bottom:0;border-top-left-radius:.357rem;border-top-right-radius:.357rem;border-bottom-left-radius:0;border-bottom-right-radius:0;order:1}",""]),r.Z=o},34726:function(e,r,t){var i=t(87462),n=t(63366),a=t(67294),l=t(45697),s=t.n(l),o=t(94184),d=t.n(o),c=t(23663),u=["body","bottom","className","cssModule","heading","left","list","middle","object","right","tag","top"],m={body:s().bool,bottom:s().bool,children:s().node,className:s().string,cssModule:s().object,heading:s().bool,left:s().bool,list:s().bool,middle:s().bool,object:s().bool,right:s().bool,tag:c.iC,top:s().bool},f=function(e){var r,t=e.body,l=e.bottom,s=e.className,o=e.cssModule,m=e.heading,f=e.left,p=e.list,h=e.middle,x=e.object,g=e.right,b=e.tag,j=e.top,Z=(0,n.Z)(e,u);r=m?"h4":Z.href?"a":Z.src||x?"img":p?"ul":"div";var v=b||r,y=(0,c.mx)(d()(s,{"media-body":t,"media-heading":m,"media-left":f,"media-right":g,"media-top":j,"media-bottom":l,"media-middle":h,"media-object":x,"media-list":p,media:!(t||m||f||g||j||l||h||x||p)}),o);return a.createElement(v,(0,i.Z)({},Z,{className:y}))};f.propTypes=m,r.Z=f},97985:function(e,r,t){var i=t(87462),n=t(63366),a=t(67294),l=t(45697),s=t.n(l),o=t(94184),d=t.n(o),c=t(23663),u=["className","cssModule","tag"],m={tag:c.iC,className:s().string,cssModule:s().object},f=function(e){var r=e.className,t=e.cssModule,l=e.tag,s=(0,n.Z)(e,u),o=(0,c.mx)(d()(r,"modal-footer"),t);return a.createElement(l,(0,i.Z)({},s,{className:o}))};f.propTypes=m,f.defaultProps={tag:"div"},r.Z=f},36595:function(e,r,t){var i=t(87462),n=t(63366),a=t(67294),l=t(45697),s=t.n(l),o=t(94184),d=t.n(o),c=t(23663),u=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"],m={className:s().string,cssModule:s().object,size:s().string,bordered:s().bool,borderless:s().bool,striped:s().bool,dark:s().bool,hover:s().bool,responsive:s().oneOfType([s().bool,s().string]),tag:c.iC,responsiveTag:c.iC,innerRef:s().oneOfType([s().func,s().string,s().object])},f=function(e){var r=e.className,t=e.cssModule,l=e.size,s=e.bordered,o=e.borderless,m=e.striped,f=e.dark,p=e.hover,h=e.responsive,x=e.tag,g=e.responsiveTag,b=e.innerRef,j=(0,n.Z)(e,u),Z=(0,c.mx)(d()(r,"table",!!l&&"table-"+l,!!s&&"table-bordered",!!o&&"table-borderless",!!m&&"table-striped",!!f&&"table-dark",!!p&&"table-hover"),t),v=a.createElement(x,(0,i.Z)({},j,{ref:b,className:Z}));if(h){var y=(0,c.mx)(!0===h?"table-responsive":"table-responsive-"+h,t);return a.createElement(g,{className:y},v)}return v};f.propTypes=m,f.defaultProps={tag:"table",responsiveTag:"div"},r.Z=f},92749:function(e,r,t){var i=t(93379),n=t.n(i),a=t(7795),l=t.n(a),s=t(90569),o=t.n(s),d=t(3565),c=t.n(d),u=t(19216),m=t.n(u),f=t(44589),p=t.n(f),h=t(55717),x={};x.styleTagTransform=p(),x.setAttributes=c(),x.insert=o().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=m(),n()(h.Z,x),h.Z&&h.Z.locals&&h.Z.locals},31465:function(e,r,t){e.exports=t.p+"3c40b1393e7a6c08b07b.png"}}]);