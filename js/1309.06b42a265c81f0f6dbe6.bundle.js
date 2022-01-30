"use strict";(self.webpackChunkfac=self.webpackChunkfac||[]).push([[1309],{78133:function(e,n,s){var a=s(4942),t=s(45987),r=s(78268),i=s(45697),l=s.n(i),o=s(94184),c=s.n(o),d=s(85677),u=s(32701),m=s(10684),p=s(85893),g=["onOpened","onClosed","width","open","toggleSidebar","size","bodyClassName","contentClassName","wrapperClassName","headerClassName","className","title","children","closeBtn"];function x(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,a)}return s}function f(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?x(Object(s),!0).forEach((function(n){(0,a.Z)(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):x(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}var h=function(e){var n,s=e.onOpened,i=e.onClosed,l=e.width,o=e.open,x=e.toggleSidebar,h=e.size,j=e.bodyClassName,Z=e.contentClassName,v=e.wrapperClassName,N=e.headerClassName,b=e.className,O=e.title,C=e.children,w=e.closeBtn,y=(0,t.Z)(e,g),S=w||(0,p.jsx)(r.Z,{className:"cursor-pointer",size:15,onClick:x});return(0,p.jsxs)(d.Z,f(f(f(f(f({},s?{onOpened:s}:{}),i?{onClosed:i}:{}),{},{isOpen:o,toggle:x,contentClassName:c()((0,a.Z)({},Z,Z)),modalClassName:c()("modal-slide-in",(0,a.Z)({},v,v)),className:c()((n={},(0,a.Z)(n,b,b),(0,a.Z)(n,"sidebar-lg","lg"===h),(0,a.Z)(n,"sidebar-sm","sm"===h),n))},void 0!==l?{style:{width:String(l)+"px"}}:{}),y),{},{children:[(0,p.jsx)(u.Z,{className:c()((0,a.Z)({},N,N)),toggle:x,close:S,tag:"div",children:(0,p.jsx)("h5",{className:"modal-title",children:(0,p.jsx)("span",{className:"align-middle",children:O})})}),(0,p.jsx)(m.Z,{className:c()("flex-grow-1",(0,a.Z)({},j,j)),children:C})]}))};n.Z=h,h.propTypes={title:l().string.isRequired,open:l().bool.isRequired,toggleSidebar:l().func.isRequired,size:l().oneOf(["sm","lg"]),className:l().string,bodyClassName:l().string,contentClassName:l().string,wrapperClassName:l().string,children:l().any.isRequired,width:l().oneOfType([l().number,l().string])}},71107:function(e,n,s){s.d(n,{F:function(){return a}});var a=Object.values({ADMIN_ROLE:"admin",PRESIDENT_ROLE:"president",SG_ROLE:"sg",EXECUTIVE_ROLE:"executive",SECRETARY_ROLE:"secretary",FINANCE_ROLE:"finance",COMMUNICATION_ROLE:"com",STOREKEEPER_ROLE:"storekeeper",DTN_ROLE:"dtn",DEN_ROLE:"den",DJTS_ROLE:"djts",DOS_ROLE:"dos",DDF_ROLE:"ddf",STAFF_ROLE:"staff",ATHLETE_ROLE:"athlete",CLUB_ROLE:"club",LEAGUE_ROLE:"league"})},82433:function(e,n,s){s.d(n,{m:function(){return a}});var a=[10,20,50,100]},21309:function(e,n,s){s.r(n),s.d(n,{default:function(){return Ce}});var a=s(4942),t=s(15861),r=s(70885),i=s(87757),l=s.n(i),o=s(67294),c=s(78133),d=s(15538),u=s(17834),m=s(97975),p=s(39704),g=s(88295),x=s(39249),f=s(86896),h=s(44012),j=s(61643),Z=s(73752),v=s(60329),N=s(19589),b=s(44309),O=s(12590),C=s(12575),w=s(48159),y=s(16550),S=s(71107),E=s(85893),k=function(e){var n=e.open,s=e.toggleSidebar,a=e.refresh,t=(0,o.useState)(""),i=(0,r.Z)(t,2),l=i[0],k=i[1],P=(0,o.useState)(""),R=(0,r.Z)(P,2),M=R[0],L=R[1],z=(0,o.useState)(""),_=(0,r.Z)(z,2),T=_[0],D=_[1],A=(0,o.useState)(""),I=(0,r.Z)(A,2),U=I[0],q=I[1],F=(0,o.useState)(""),B=(0,r.Z)(F,2),G=B[0],V=B[1],W=(0,o.useState)(null),H=(0,r.Z)(W,2),J=H[0],K=H[1],Q=(0,o.useState)(!1),X=(0,r.Z)(Q,2),Y=X[0],$=X[1],ee=(0,o.useState)(!1),ne=(0,r.Z)(ee,2),se=ne[0],ae=ne[1],te=(0,p.I0)(),re=!M||!T||U&&10!==U.length||!l||!G,ie=function(e){s(),ae(!1),K(!1),$(!1),k(""),D(""),L(""),q(""),e&&a()},le=function(){ie(!0)},oe=function(e){418===e.code||418===e.code?K("usernameExist"):422===e.code?K("passwordLengthError"):423===e.code?K("passwordsMatchError"):424===e.code?K("passwordResetLinkExpired"):K("somethingWrong")};return(0,E.jsx)(c.Z,{size:"lg",open:n,title:(0,f.Z)().formatMessage({id:"newUser"}),headerClassName:"mb-1",contentClassName:"pt-0",toggleSidebar:s,children:(0,E.jsx)(o.Fragment,{children:(0,E.jsxs)(d.Z,{className:"mt-2",onSubmit:function(e){e.preventDefault(),ae(!0),K(!1),re||(0,y.k_)(y.$T,[g.uh,{username:M,name:T,phone:U,role:l,password:G}],!0,x.Am,te,"userCreatedSuccessfully","",le,oe)},children:[J&&(0,E.jsxs)(u.Z,{color:"danger",className:"d-flex align-items-center",children:[(0,E.jsx)("div",{className:"alert-body font-small-2 flex-grow-1",children:(0,E.jsx)("p",{children:(0,E.jsx)("small",{className:"mr-50",children:(0,E.jsx)(h.Z,{id:J})})})}),(0,E.jsx)(j.Z,{id:"login-tip",className:"mx-50",size:18,style:{top:"10px",right:"10px"}})]}),(0,E.jsx)(w.Z,{label:(0,E.jsx)(h.Z,{id:"username"}),value:M,id:"username",name:"username",placeholder:"",onChange:function(e){return L(e.target.value)},invalid:se&&!M,requireStar:!0,prepend:{icon:(0,E.jsx)(Z.Z,{size:14})},invalidtext:(0,E.jsx)(h.Z,{id:"required"})}),(0,E.jsx)(w.Z,{label:(0,E.jsx)(h.Z,{id:"name"}),value:T,id:"name",name:"name",placeholder:"",onChange:function(e){return D(e.target.value)},invalid:se&&!T,requireStar:!0,invalidtext:(0,E.jsx)(h.Z,{id:"required"}),prepend:{icon:(0,E.jsx)(Z.Z,{size:14})}}),(0,E.jsx)(w.Z,{label:(0,E.jsx)(h.Z,{id:"phone"}),value:U,id:"phone",name:"phone",placeholder:"",invalid:se&&U&&10!==U.length,invalidtext:(0,E.jsx)(h.Z,{id:"phoneLengthError"}),onChange:function(e){return q(e.target.value.replace(/ /g,""))},prepend:{icon:(0,E.jsx)(v.Z,{size:14})},mask:{blocks:[4,2,2,2],numericOnly:!0}}),(0,E.jsx)(w.Z,{label:(0,E.jsx)(h.Z,{id:"password"}),type:Y?"text":"password",value:G,id:"login-password",placeholder:"",name:"login-password",className:"input-group-merge",onChange:function(e){return V(e.target.value)},invalid:se&&(!G||G.length<8),requireStar:!0,prepend:{icon:(0,E.jsx)(N.Z,{size:14})},append:{icon:Y?(0,E.jsx)(b.Z,{size:14}):(0,E.jsx)(O.Z,{size:14}),onClick:function(){return $(!Y)}},invalidtext:(0,E.jsx)(h.Z,{id:G?G.length<8?"passwordLengthError":"":"required"})}),(0,E.jsxs)(w.Z,{label:(0,E.jsx)(h.Z,{id:"role"}),type:"select",id:"select-plan",name:"select-plan",value:l,onChange:function(e){return k(e.target.value)},prepend:{icon:(0,E.jsx)(C.Z,{size:14})},requireStar:!0,invalid:se&&!l,invalidtext:(0,E.jsx)(h.Z,{id:"required"}),children:[(0,E.jsx)("option",{value:"",children:(0,f.Z)().formatMessage({id:"selectRole"})}),S.F.map((function(e,n){return(0,E.jsx)("option",{value:e,children:(0,f.Z)().formatMessage({id:e})},n)}))]}),(0,E.jsx)(m.Z.Ripple,{type:"submit",className:"mr-1",color:"primary",children:(0,E.jsx)(h.Z,{id:"save"})}),(0,E.jsx)(m.Z.Ripple,{color:"danger",outline:!0,onClick:ie,children:(0,E.jsx)(h.Z,{id:"cancel"})})]})})})},P=s(5513),R=s(68138),M=s(17354),L=s(83823),z=s(65497),_=s(42365),T=s(98227),D=s(39046),A=s(10980),I=s(25213),U=s(32655),q=s(35221),F=s(83220),B=s(61752),G=s(39646),V=s(31357),W=s(91140),H=s(84693),J=s(80498),K=s(55654),Q=s(79366),X=s(34073),Y=s(30833),$=s(16724),ee=s(56176),ne=s(14322),se=function(e,n,s){return[{name:n.formatMessage({id:"user"}),minWidth:"297px",selector:"name",sortable:!0,cell:function(e){return(0,E.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[e.avatar?(0,E.jsx)(R.Z,{img:e.avatar,className:"mr-1"}):(0,E.jsx)(R.Z,{color:"light-danger",className:"mr-1",content:e.name,initials:!0}),(0,E.jsxs)("div",{className:"d-flex flex-column",children:[(0,E.jsx)(P.rU,{to:"/apps/user/view/".concat(e.id),className:"user-name text-truncate mb-0",children:(0,E.jsx)("span",{className:"font-weight-bold text-capitalize",children:e.name})}),(0,E.jsx)("small",{className:"text-truncate text-muted mb-0",children:e.username})]})]})}},{name:n.formatMessage({id:"phone"}),selector:"phone",sortable:!0,cell:function(e){return(0,$.CN)(e.phone)}},{name:n.formatMessage({id:"role"}),selector:"role",sortable:!0,cell:function(e){return function(e,n){var s={admin:{class:"text-danger",icon:D.Z},president:{class:"text-warning",icon:A.Z},sg:{class:"text-primary",icon:I.Z},secretary:{class:"text-info",icon:U.Z},executive:{class:"text-warning",icon:q.Z},finance:{class:"text-success",icon:F.Z},dtn:{class:"text-info",icon:B.Z},den:{class:"text-info",icon:G.Z},djts:{class:"text-info",icon:V.Z},dos:{class:"text-info",icon:W.Z},ddf:{class:"text-info",icon:H.Z},athlete:{class:"text-dark",icon:J.Z},staff:{class:"text-info",icon:Z.Z}},a=s[e.role]?s[e.role].icon:K.Z;return(0,E.jsxs)("span",{className:"text-truncate text-capitalize align-middle",children:[(0,E.jsx)(a,{size:18,className:"".concat(s[e.role]?s[e.role].class:""," mr-50")}),n.formatMessage({id:e.role})]})}(e,n)}},{name:n.formatMessage({id:"status"}),selector:"status",sortable:!1,cell:function(e){return(0,E.jsx)(M.Z,{pill:!0,color:e.blocked?"light-danger":e.accountVerified?"light-success":"light-warning",className:"mr-1",children:e.blocked?n.formatMessage({id:"blocked"}):e.accountVerified?n.formatMessage({id:"active"}):n.formatMessage({id:"unverified"})})}},{name:n.formatMessage({id:"actions"}),minWidth:"100px",cell:function(a){return(0,E.jsxs)(L.Z,{children:[(0,E.jsx)(z.Z,{tag:"div",className:"btn btn-sm",children:(0,E.jsx)(Q.Z,{size:14,className:"cursor-pointer"})}),(0,E.jsxs)(_.Z,{right:!0,children:[(0,E.jsxs)(T.Z,{tag:P.rU,to:"/apps/user/view/".concat(a.id),className:"w-100",children:[(0,E.jsx)(X.Z,{size:14,className:"mr-50"}),(0,E.jsx)("span",{className:"align-middle",children:n.formatMessage({id:"details"})})]}),s.can(ee.a.MANAGE_ACTION,ne.k.USER_SUBJECT)&&(0,E.jsxs)(T.Z,{tag:P.rU,to:"/apps/user/edit/".concat(a.id),className:"w-100",children:[(0,E.jsx)(K.Z,{size:14,className:"mr-50"}),(0,E.jsx)("span",{className:"align-middle",children:n.formatMessage({id:"edit"})})]}),s.can(ee.a.MANAGE_ACTION,ne.k.USER_SUBJECT)&&(0,E.jsxs)(T.Z,{className:"w-100",onClick:function(){return e(a.id)},children:[(0,E.jsx)(Y.Z,{size:14,className:"mr-50"}),(0,E.jsx)("span",{className:"align-middle",children:n.formatMessage({id:"delete"})})]})]})]})}}]},ae=s(61896),te=s(46445),re=s(27434),ie=s(90044),le=s(10267),oe=s(51252),ce=s(67954),de=s(68959),ue=s(56941),me=s(38089),pe=s(75351),ge=s(91121),xe=(s(22299),s(73732),s(16714)),fe=s(4248),he=s(82433),je=s(6756),Ze=s(82475);function ve(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,a)}return s}function Ne(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?ve(Object(s),!0).forEach((function(n){(0,a.Z)(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):ve(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}var be=function(e){var n=e.toggleSidebar,s=e.handlePerPage,a=e.rowsPerPage,t=e.pageIndex,r=e.data,i=e.intl,l=e.ability;return(0,E.jsx)("div",{className:"list-table-header w-100 mr-1 ml-50 mt-2 mb-75",children:(0,E.jsxs)(le.Z,{children:[(0,E.jsx)(oe.Z,{xl:"6",className:"d-flex align-items-center p-0",children:(0,E.jsxs)("div",{className:"d-flex align-items-center w-100",children:[(0,E.jsx)(ce.Z,{for:"rows-per-page",children:(0,E.jsx)(h.Z,{id:"rowsPerPage"})}),(0,E.jsx)(de.Z,{className:"form-control mx-50",type:"select",value:a,onChange:s,style:{width:"4rem",padding:"0 0.8rem",backgroundPosition:"calc(100% - 3px) 7px, calc(100% - 20px) 13px, 100% 0"},bsSize:"sm",children:he.m.map((function(e,n){return(0,E.jsx)("option",{value:e,children:e},n)}))}),(0,E.jsx)(ce.Z,{for:"rows-per-page",children:r.count?(0,E.jsxs)(E.Fragment,{children:[(t-1)*a+1,"-",t*a>r.count?r.count:t*a," ",i.formatMessage({id:"of"})," ",r.count]}):null})]})}),(0,E.jsxs)(oe.Z,{xl:"6",className:"d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1",children:[(0,E.jsx)("div",{className:"mr-1",children:(0,E.jsx)(Ze._,{data:r.rows,title:"users",keys:["name","email","phone","role"],displays:[null,null,function(e){return(0,$.CN)(e.phone)}]})}),l.can(ee.a.MANAGE_ACTION,ne.k.USER_SUBJECT)&&(0,E.jsxs)(m.Z.Ripple,{color:"primary",onClick:n,children:[(0,E.jsx)(ae.Z,{size:15}),(0,E.jsx)("span",{className:"align-middle ml-25",children:(0,E.jsx)(h.Z,{id:"addUser"})})]})]})]})})},Oe=function(){var e=(0,o.useState)(he.m[0]),n=(0,r.Z)(e,2),s=n[0],a=n[1],i=(0,o.useState)(1),c=(0,r.Z)(i,2),d=c[0],u=c[1],m=(0,o.useState)([["createdAt","DESC"]]),j=(0,r.Z)(m,2),v=j[0],N=j[1],b=(0,o.useState)({count:0,rows:[]}),O=(0,r.Z)(b,2),P=O[0],R=O[1],M=(0,o.useState)({}),L=(0,r.Z)(M,2),z=L[0],_=L[1],T=(0,p.I0)(),D=(0,o.useState)(""),A=(0,r.Z)(D,2),I=A[0],U=A[1],q=(0,o.useState)(!1),F=(0,r.Z)(q,2),B=F[0],G=F[1],V=(0,o.useState)(""),W=(0,r.Z)(V,2),H=W[0],J=W[1],K=(0,o.useState)(""),Q=(0,r.Z)(K,2),X=Q[0],Y=Q[1],ee=(0,o.useState)(0),ne=(0,r.Z)(ee,2),ae=ne[0],ce=ne[1],de=(0,f.Z)(),Ze=(0,o.useContext)(je.v),ve=function(e,n,s,a){(0,y.k_)(y.Ki,[g.Gm,e,n,s,a],!0,x.Am,T,null,"somethingWrong",(function(e){return R(e)}),null)};(0,o.useEffect)((0,t.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ve(d,s,v,z);case 1:case"end":return e.stop()}}),e)}))),[]);var Oe,Ce,we,ye,Se,Ee=function(){return G(!B)},ke=function(e){u(e.selected+1),ve(e.selected+1,s,v,z)},Pe=function(e){u(1),U(e),_(Ne(Ne({},z),{},{name:e})),clearTimeout(ae),ce(setTimeout((function(){return ve(1,s,v,Ne(Ne({},z),{},{name:e}))}),700))};return(0,E.jsx)("div",{className:"app-user-list",children:(0,E.jsxs)(o.Fragment,{children:[(0,E.jsxs)(ue.Z,{children:[(0,E.jsx)(me.Z,{children:(0,E.jsx)(pe.Z,{tag:"h4",children:(0,E.jsx)(h.Z,{id:"searchFilter"})})}),(0,E.jsx)(ge.Z,{children:(0,E.jsxs)(le.Z,{children:[(0,E.jsx)(oe.Z,{md:"4",children:(0,E.jsx)(w.Z,{prepend:{icon:(0,E.jsx)(Z.Z,{size:14})},placeholder:de.formatMessage({id:"searchByName"}),id:"search",type:"text",value:I,onChange:function(e){return Pe(e.target.value)}})}),(0,E.jsx)(oe.Z,{md:"4",children:(0,E.jsxs)(w.Z,{prepend:{icon:(0,E.jsx)(C.Z,{size:14})},type:"select",isClearable:!1,theme:$.ss,value:H,onChange:function(e){return n=e.target.value,u(1),J(n),_(Ne(Ne({},z),{},{role:n})),void ve(1,s,v,Ne(Ne({},z),{},{role:n}));var n},children:[(0,E.jsx)("option",{value:"",children:(0,f.Z)().formatMessage({id:"selectRole"})}),S.F.map((function(e,n){return(0,E.jsx)("option",{value:e,children:(0,f.Z)().formatMessage({id:e})},n)}))]})}),(0,E.jsx)(oe.Z,{md:"4",children:(0,E.jsxs)(w.Z,{prepend:{icon:(0,E.jsx)(te.Z,{size:14})},type:"select",isClearable:!1,theme:$.ss,value:X,onChange:function(e){return function(e){u(1),Y(e);var n={};"blocked"===e?n={blocked:!0}:"unverified"===e?n={accountVerified:!1}:"active"===e&&(n={blocked:!1,accountVerified:!0}),_(Ne(Ne({},n),n)),ve(1,s,v,Ne(Ne({},n),n))}(e.target.value)},children:[(0,E.jsx)("option",{value:"",children:de.formatMessage({id:"selectStatus"})}),(0,E.jsx)("option",{value:"active",children:de.formatMessage({id:"active"})}),(0,E.jsx)("option",{value:"blocked",children:de.formatMessage({id:"blocked"})})]})})]})})]}),(0,E.jsx)(ue.Z,{children:(0,E.jsx)(ie.ZP,{noHeader:!0,pagination:!0,subHeader:!0,responsive:!0,paginationServer:!0,columns:se((function(e){(0,xe.o)(de.formatMessage({id:"delete"}),de.formatMessage({id:"deleteUserQuestion"}),"warning",!0,de.formatMessage({id:"yes"}),de.formatMessage({id:"no"})).then((function(n){n.value&&(0,y.k_)(y.Vx,[g.uh,e,{deleted:!0}],!0,x.Am,T,"userDeletedSuccessfully","somethingWrong",(function(){return ve(d,s,v,z)}),null)}))}),de,Ze),sortIcon:(0,E.jsx)(re.Z,{}),className:"react-dataTable",paginationComponent:function(){return(0,E.jsx)(fe.t,{pageIndex:d,pageSize:s,total:P.count,handlePagination:ke})},data:(ye={name:I,role:H},Se=Object.keys(ye).some((function(e){return ye[e].length>0})),(null===(Oe=P.rows)||void 0===Oe?void 0:Oe.length)>0?P.rows:0===(null===(Ce=P.rows)||void 0===Ce?void 0:Ce.length)&&Se?[]:null===(we=P.rows)||void 0===we?void 0:we.slice(0,s)),onSort:function(e,n){var a=[[e.selector,n]];N(a),ve(d,s,a,z)},noDataComponent:(0,E.jsx)("span",{className:"my-3",children:(0,E.jsx)(h.Z,{id:"noRecords"})}),subHeaderComponent:(0,E.jsx)(be,{ability:Ze,pageIndex:d,toggleSidebar:Ee,handlePerPage:function(e){u(1),a(parseInt(e.currentTarget.value)),ve(1,parseInt(e.currentTarget.value),v,z)},rowsPerPage:s,searchTerm:I,handleFilter:Pe,data:P,intl:de})})}),(0,E.jsx)(k,{open:B,toggleSidebar:Ee,refresh:function(){return ve(d,s,v,z)}})]})})},Ce=(s(61360),function(){return(0,E.jsx)("div",{className:"app-user-list",children:(0,E.jsx)(Oe,{})})})},4248:function(e,n,s){s.d(n,{t:function(){return i}});var a=s(11358),t=s.n(a),r=(s(67294),s(85893)),i=function(e){var n=e.pageIndex,s=e.pageSize,a=e.total,i=e.handlePagination,l=e.className,o=e.marginPagesDisplayed,c=Number(Math.ceil(a/s));return(0,r.jsx)(t(),{previousLabel:"",nextLabel:"",pageCount:c||1,marginPagesDisplayed:o||3,activeClassName:"active",forcePage:0!==n?n-1:0,onPageChange:function(e){return i(e)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end pr-1 ".concat(l)})}}}]);