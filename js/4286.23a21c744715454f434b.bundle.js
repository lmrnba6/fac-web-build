"use strict";(self.webpackChunkfac=self.webpackChunkfac||[]).push([[4286],{16550:function(e,r,t){t.d(r,{k_:function(){return p},Ki:function(){return d},go:function(){return f},U2:function(){return m},$T:function(){return v},Od:function(){return h},Vx:function(){return g},yg:function(){return b}});var n=t(15861),a=t(87757),i=t.n(a),s=t(22974),o=t(25976),u=t(39249),l=(t(67294),t(59898)),c=t(85893),p=function(){var e=(0,n.Z)(i().mark((function e(r,t,n,a,l,d,f,m,v){var h;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l((0,s.EV)(n)),e.next=4,r.apply(p,t);case 4:h=e.sent,l((0,s.EV)(!1)),m&&m.apply(p,[h]),d&&a.success((0,c.jsx)(o.Z,{type:"success",message:d}),{transition:u.sm,hideProgressBar:!1,autoClose:6e3}),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),l((0,s.EV)(!1)),v&&v.apply(p,[e.t0]),f&&a.error((0,c.jsx)(o.Z,{type:"error",message:f}),{transition:u.sm,hideProgressBar:!1,autoClose:6e3});case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r,t,n,a,i,s,o,u,l){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(i().mark((function e(r,t,n,a,s){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0!==t?t-1:t,e.abrupt("return",l.dJ.get("".concat(r,"?offset=").concat(t*n,"&limit=").concat(n,"&order=").concat(JSON.stringify(a)).concat(s?"&filter=".concat(JSON.stringify(s)):"")));case 2:case"end":return e.stop()}}),e)})));return function(r,t,n,a,i){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(i().mark((function e(r){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l.dJ.get(r));case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(i().mark((function e(r,t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l.dJ.get("".concat(r,"?id=").concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(i().mark((function e(r,t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l.dJ.post(r,t));case 1:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(i().mark((function e(r,t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l.dJ.delete("".concat(r,"?id=").concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),g=function(){var e=(0,n.Z)(i().mark((function e(r,t,n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l.dJ.put("".concat(r,"?id=").concat(t),n));case 1:case"end":return e.stop()}}),e)})));return function(r,t,n){return e.apply(this,arguments)}}(),b=function(){var e=(0,n.Z)(i().mark((function e(r,t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l.dJ.put("".concat(r),t));case 1:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()},84286:function(e,r,t){t.r(r),t.d(r,{default:function(){return b}}),t(61360);var n=t(67294),a=t(70885),i=t(56941),s=t(36595),o=t(68959),u=t(44012),l=t(84751),c=t(39249),p=t(88295),d=t(16550),f=t(56176),m=t(14322),v=t(48817),h=t(85893),g=function(){var e=(0,n.useState)([]),r=(0,a.Z)(e,2),t=r[0],g=r[1],b=(0,n.useState)([]),x=(0,a.Z)(b,2),w=x[0],k=x[1],y=(0,n.useState)([]),j=(0,a.Z)(y,2),Z=j[0],T=j[1],N=(0,l.I0)(),_=function(e){k(e);var r=e.reduce((function(e,r){return e.find((function(e){return e.subject===r.subject&&e.action===r.action}))||e.push(r),e}),[]);g(r);var t=e.reduce((function(e,r){return e.find((function(e){return e===r.role}))||e.push(r.role),e}),[]);T(t)};return(0,n.useEffect)((function(){(0,d.k_)(d.go,[p.N_],!0,c.Am,N,"","somethingWrong",_,null)}),[]),(0,h.jsx)(i.Z,{children:(0,h.jsxs)(s.Z,{striped:!0,borderless:!0,responsive:!0,size:"sm",children:[(0,h.jsx)("thead",{className:"thead-light",children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{className:"w-25",children:(0,h.jsx)(u.Z,{id:"permission"})}),Z.map((function(e,r){return(0,h.jsx)("th",{children:(0,h.jsx)(u.Z,{id:e})},r)}))]})}),(0,h.jsx)("tbody",{children:t.map((function(e,r){return(0,h.jsxs)("tr",{"data-toggle":"collapse","data-target":".multi-collapse2","aria-controls":"multiCollapseExample2",children:[(0,h.jsx)("td",{children:(0,h.jsx)(u.Z,{id:"".concat(e.action,"-").concat(e.subject)})}),Z.map((function(t,n){return(0,h.jsx)("td",{children:(0,h.jsx)(o.Z,{defaultChecked:w.some((function(r){return r.allowed&&r.role===t&&r.subject===e.subject&&r.action===e.action})),disabled:!(0,v.is)().ability.some((function(e){return e.subject===m.k.PERMISSION_SUBJECT&&e.action===f.a.EDIT_ACTION||e.subject===m.k.ALL_SUBJECT&&e.action===f.a.MANAGE_ACTION})),type:"checkbox",id:"".concat(n,"-").concat(r),label:"",onChange:function(r){return n=t,a=e.subject,i=e.action,s=r.target.checked,void(0,d.k_)(d.yg,[p.N_,{role:n,subject:a,action:i,allowed:s}],!0,c.Am,N,"","somethingWrong",null,null);var n,a,i,s}})},n)}))]},r)}))})]})})},b=function(){return(0,h.jsx)("div",{className:"app-user-list",children:(0,h.jsx)(g,{})})}},7409:function(e,r,t){var n=t(8081),a=t.n(n),i=t(23645),s=t.n(i)()(a());s.push([e.id,'.app-user-list .dataTables_wrapper .dataTables_length select{margin-left:.5rem;margin-right:.5rem}@media(max-width: 767px){[dir="ltr"] .app-user-list .header-actions .dataTables_length{text-align:left}\n\n[dir="rtl"] .app-user-list .header-actions .dataTables_length{text-align:right}\n\n[dir="ltr"] .app-user-list .header-actions>div[class^=col-]:last-child{padding-left:0}\n\n[dir="rtl"] .app-user-list .header-actions>div[class^=col-]:last-child{padding-right:0}}.app-user-view .user-info-wrapper .user-info-title{width:11.785rem}.app-user-view .user-total-numbers{margin-top:2.428rem}.app-user-view .user-total-numbers .color-box{display:flex;align-items:center;justify-content:center;height:2.714rem;width:2.714rem;border-radius:.357rem}.app-user-view .user-total-numbers .color-box i,.app-user-view .user-total-numbers .color-box svg{height:1.285rem;width:1.285rem;font-size:1.285rem}.app-user-edit .nav-pills{margin-bottom:2.3rem}\n\n.app-user-edit .nav-pills .nav-link i,.app-user-edit .nav-pills .nav-link svg{font-size:.921rem}\n\n[dir="ltr"] .app-user-edit .nav-pills .nav-link i,[dir="ltr"] .app-user-edit .nav-pills .nav-link svg{margin-right:.5rem}\n\n[dir="rtl"] .app-user-edit .nav-pills .nav-link i,[dir="rtl"] .app-user-edit .nav-pills .nav-link svg{margin-left:.5rem}@media(max-width: 576px){.app-user-edit .nav-pills .nav-link i,.app-user-edit .nav-pills .nav-link svg{height:1.2rem;width:1.2rem;font-size:1.2rem}\n\n[dir="ltr"] .app-user-edit .nav-pills .nav-link i,[dir="ltr"] .app-user-edit .nav-pills .nav-link svg{margin-right:0}\n\n[dir="rtl"] .app-user-edit .nav-pills .nav-link i,[dir="rtl"] .app-user-edit .nav-pills .nav-link svg{margin-left:0}}\n\nhtml[dir="ltr"][data-textdirection=rtl] .app-user-list .dataTables_filter input{margin-right:0;margin-left:.5rem}\n\nhtml[dir="rtl"][data-textdirection=rtl] .app-user-list .dataTables_filter input{margin-left:0;margin-right:.5rem}\n\nhtml[dir="ltr"][data-textdirection=rtl] .app-user-list .dropdown .dropdown-menu.dropdown-menu-right{right:3.57rem !important}\n\nhtml[dir="rtl"][data-textdirection=rtl] .app-user-list .dropdown .dropdown-menu.dropdown-menu-right{left:3.57rem !important}\n\n[dir="ltr"] .users-avatar-shadow{box-shadow:2px 4px 14px 0 rgba(34,41,47,.4)}\n\n[dir="rtl"] .users-avatar-shadow{box-shadow:-2px 4px 14px 0 rgba(34,41,47,.4)}.users-page-view-table .user-info div{padding:.5rem}.users-page-view-table .user-info .user-info-title{min-width:140px}',""]),r.Z=s},56941:function(e,r,t){var n=t(87462),a=t(63366),i=t(67294),s=t(45697),o=t.n(s),u=t(94184),l=t.n(u),c=t(23663),p=["className","cssModule","color","body","inverse","outline","tag","innerRef"],d={tag:c.iC,inverse:o().bool,color:o().string,body:o().bool,outline:o().bool,className:o().string,cssModule:o().object,innerRef:o().oneOfType([o().object,o().string,o().func])},f=function(e){var r=e.className,t=e.cssModule,s=e.color,o=e.body,u=e.inverse,d=e.outline,f=e.tag,m=e.innerRef,v=(0,a.Z)(e,p),h=(0,c.mx)(l()(r,"card",!!u&&"text-white",!!o&&"card-body",!!s&&(d?"border":"bg")+"-"+s),t);return i.createElement(f,(0,n.Z)({},v,{className:h,ref:m}))};f.propTypes=d,f.defaultProps={tag:"div"},r.Z=f},36595:function(e,r,t){var n=t(87462),a=t(63366),i=t(67294),s=t(45697),o=t.n(s),u=t(94184),l=t.n(u),c=t(23663),p=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"],d={className:o().string,cssModule:o().object,size:o().string,bordered:o().bool,borderless:o().bool,striped:o().bool,dark:o().bool,hover:o().bool,responsive:o().oneOfType([o().bool,o().string]),tag:c.iC,responsiveTag:c.iC,innerRef:o().oneOfType([o().func,o().string,o().object])},f=function(e){var r=e.className,t=e.cssModule,s=e.size,o=e.bordered,u=e.borderless,d=e.striped,f=e.dark,m=e.hover,v=e.responsive,h=e.tag,g=e.responsiveTag,b=e.innerRef,x=(0,a.Z)(e,p),w=(0,c.mx)(l()(r,"table",!!s&&"table-"+s,!!o&&"table-bordered",!!u&&"table-borderless",!!d&&"table-striped",!!f&&"table-dark",!!m&&"table-hover"),t),k=i.createElement(h,(0,n.Z)({},x,{ref:b,className:w}));if(v){var y=(0,c.mx)(!0===v?"table-responsive":"table-responsive-"+v,t);return i.createElement(g,{className:y},k)}return k};f.propTypes=d,f.defaultProps={tag:"table",responsiveTag:"div"},r.Z=f},61360:function(e,r,t){var n=t(93379),a=t.n(n),i=t(7795),s=t.n(i),o=t(90569),u=t.n(o),l=t(3565),c=t.n(l),p=t(19216),d=t.n(p),f=t(44589),m=t.n(f),v=t(7409),h={};h.styleTagTransform=m(),h.setAttributes=c(),h.insert=u().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=d(),a()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals}}]);