"use strict";(self.webpackChunkfac=self.webpackChunkfac||[]).push([[2360],{72360:function(e,a,t){t.r(a);var r=t(70885),n=t(16724),A=t(47201),o=t(61643),i=t(92528),s=t(92487),l=t(5513),g=t(10267),u=t(51252),c=t(75351),d=t(26094),p=t(17834),h=t(97975),f=t(44012),m=(t(68858),t(67294)),b=t(39249),x=t(88295),w=t(39704),v=t(16550),N=t(85893);a.default=function(){var e=(0,A.Q)(),a=(0,r.Z)(e,2),t=a[0],Z=(a[1],(0,m.useState)(null)),j=(0,r.Z)(Z,2),C=j[0],B=j[1],I=(0,w.I0)(),R=(0,s.k6)(),y=(0,s.UO)().accessToken,Y="../../../assets/images/pages/".concat("dark"===t?"forgot-password-v2-dark.svg":"forgot-password-v2.svg"),Q=function(e){424===e.code?B("activationLinkExpired"):B("somethingWrong")},G=function(e){420===e.code?B("userWithEmailNotFound"):412===e.code?B("userBlocked"):413===e.code?B("userUnverified"):B("somethingWrong")};return(0,n.Pc)()?(0,N.jsx)(s.l_,{to:"/"}):(0,N.jsx)("div",{className:"auth-wrapper auth-v2",children:(0,N.jsxs)(g.Z,{className:"auth-inner m-0",children:[(0,N.jsx)(l.rU,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:(0,N.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,N.jsx)("img",{className:"img-fluid",src:"../../../assets/images/logo/logo.png",alt:"Logo"}),(0,N.jsx)("h2",{className:"brand-text text-primary ml-1",children:(0,N.jsx)(f.Z,{id:"company"})})]})}),(0,N.jsx)(u.Z,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:(0,N.jsx)("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:(0,N.jsx)("img",{className:"img-fluid",src:Y,alt:"Login V2"})})}),(0,N.jsx)(u.Z,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:(0,N.jsxs)(u.Z,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[(0,N.jsxs)(c.Z,{tag:"h2",className:"font-weight-bold mb-1",children:[(0,N.jsx)(f.Z,{id:"activateAccount"})," 🔒"]}),(0,N.jsx)(d.Z,{className:"mb-2",children:(0,N.jsx)(f.Z,{id:"activateYourAccountText"})}),C&&(0,N.jsxs)(p.Z,{color:"danger",className:"d-flex align-items-center",children:[(0,N.jsx)("div",{className:"alert-body font-small-2 flex-grow-1",children:(0,N.jsx)("p",{children:(0,N.jsx)("small",{className:"mr-50",children:(0,N.jsx)(f.Z,{id:C})})})}),(0,N.jsx)(o.Z,{id:"login-tip",className:"mx-50",size:18,style:{top:"10px",right:"10px"}})]}),(0,N.jsx)(h.Z.Ripple,{color:"primary",block:!0,onClick:function(){B(!1),(0,v.k_)(v.$T,[x.hW,{accessToken:y}],!0,b.Am,I,"accountActivatedSuccessfully","",(function(){return R.push("/login")}),Q)},children:(0,N.jsx)(f.Z,{id:"activate"})}),(0,N.jsx)(h.Z.Ripple,{color:"primary",block:!0,outline:!0,onClick:function(){(0,v.k_)(v.$T,[x.wr,{accessToken:y}],!0,b.Am,I,"linkSentSuccessfully","",(function(){return R.push("/login")}),G)},children:(0,N.jsx)(f.Z,{id:"sendNewLink"})}),(0,N.jsx)("p",{className:"text-center mt-2",children:(0,N.jsxs)(l.rU,{to:"/login",children:[(0,N.jsx)(i.Z,{className:"mr-25",size:14}),(0,N.jsx)("span",{className:"align-middle",children:(0,N.jsx)(f.Z,{id:"backToLogin"})})]})})]})})]})})}},67271:function(e,a,t){var r=t(8081),n=t.n(r),A=t(23645),o=t.n(A),i=t(61667),s=t.n(i),l=new URL(t(80671),t.b),g=new URL(t(2422),t.b),u=o()(n()),c=s()(l),d=s()(g);u.push([e.id,'.auth-wrapper{display:flex;flex-basis:100%;min-height:100vh;min-height:calc(var(--vh, 1vh)*100);width:100%}.auth-wrapper .auth-inner{width:100%;position:relative}.auth-wrapper.auth-v1{align-items:center;justify-content:center;overflow:hidden}\n\n.auth-wrapper.auth-v1 .auth-inner:before{width:244px;height:243px;content:" ";position:absolute;top:-54px;background-image:url('+c+')}\n\n[dir="ltr"] .auth-wrapper.auth-v1 .auth-inner:before{left:-46px}\n\n[dir="rtl"] .auth-wrapper.auth-v1 .auth-inner:before{right:-46px}@media(max-width: 575.98px){.auth-wrapper.auth-v1 .auth-inner:before{display:none}}\n\n.auth-wrapper.auth-v1 .auth-inner:after{width:272px;height:272px;content:" ";position:absolute;bottom:-55px;background-image:url('+d+');z-index:-1}\n\n[dir="ltr"] .auth-wrapper.auth-v1 .auth-inner:after{right:-75px}\n\n[dir="rtl"] .auth-wrapper.auth-v1 .auth-inner:after{left:-75px}@media(max-width: 575.98px){.auth-wrapper.auth-v1 .auth-inner:after{display:none}}.auth-wrapper.auth-v2{align-items:flex-start}.auth-wrapper.auth-v2 .auth-inner{height:100vh;overflow-y:auto;height:calc(var(--vh, 1vh)*100)}\n\n.auth-wrapper.auth-v2 .brand-logo{position:absolute;top:2rem;margin:0;z-index:1}\n\n[dir="ltr"] .auth-wrapper.auth-v2 .brand-logo{left:2rem}\n\n[dir="rtl"] .auth-wrapper.auth-v2 .brand-logo{right:2rem}.auth-wrapper.auth-v1 .auth-inner{max-width:400px}.auth-wrapper .brand-logo{display:flex;justify-content:center;margin:1rem 0 2rem 0}.auth-wrapper .brand-logo .brand-text{font-weight:600}.auth-wrapper .auth-footer-btn .btn{padding:.6rem !important}\n\n[dir="ltr"] .auth-wrapper .auth-footer-btn .btn:not(:last-child){margin-right:1rem}\n\n[dir="rtl"] .auth-wrapper .auth-footer-btn .btn:not(:last-child){margin-left:1rem}@media(min-width: 1200px){.auth-wrapper.auth-v2 .auth-card{width:400px}}.auth-wrapper .auth-bg{background-color:#fff}.dark-layout .auth-wrapper .auth-bg{background-color:#283046}@media(max-height: 625px){.dark-layout .auth-wrapper .auth-inner{background-color:#283046}.auth-wrapper .auth-bg{padding-top:3rem}.auth-wrapper .auth-inner{background-color:#fff;padding-bottom:1rem}\n\n.auth-wrapper.auth-v2 .brand-logo{width:100%;display:flex;justify-content:unset;position:relative}\n\n[dir="ltr"] .auth-wrapper.auth-v2 .brand-logo{left:0;padding-left:1.5rem}\n\n[dir="rtl"] .auth-wrapper.auth-v2 .brand-logo{right:0;padding-right:1.5rem}}',""]),a.Z=u},17834:function(e,a,t){var r=t(87462),n=t(63366),A=t(4942),o=t(67294),i=t(45697),s=t.n(i),l=t(94184),g=t.n(l),u=t(23663),c=t(69638);function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(Object(t),!0).forEach((function(a){(0,A.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var h={children:s().node,className:s().string,closeClassName:s().string,closeAriaLabel:s().string,cssModule:s().object,color:s().string,fade:s().bool,isOpen:s().bool,toggle:s().func,tag:u.iC,transition:s().shape(c.Z.propTypes),innerRef:s().oneOfType([s().object,s().string,s().func])},f={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:p(p({},c.Z.defaultProps),{},{unmountOnExit:!0})};function m(e){var a=e.className,t=e.closeClassName,A=e.closeAriaLabel,i=e.cssModule,s=e.tag,l=e.color,d=e.isOpen,h=e.toggle,f=e.children,m=e.transition,b=e.fade,x=e.innerRef,w=(0,n.Z)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),v=(0,u.mx)(g()(a,"alert","alert-"+l,{"alert-dismissible":h}),i),N=(0,u.mx)(g()("close",t),i),Z=p(p(p({},c.Z.defaultProps),m),{},{baseClass:b?m.baseClass:"",timeout:b?m.timeout:0});return o.createElement(c.Z,(0,r.Z)({},w,Z,{tag:s,className:v,in:d,role:"alert",innerRef:x}),h?o.createElement("button",{type:"button",className:N,"aria-label":A,onClick:h},o.createElement("span",{"aria-hidden":"true"},"×")):null,f)}m.propTypes=h,m.defaultProps=f,a.Z=m},68858:function(e,a,t){var r=t(93379),n=t.n(r),A=t(7795),o=t.n(A),i=t(90569),s=t.n(i),l=t(3565),g=t.n(l),u=t(19216),c=t.n(u),d=t(44589),p=t.n(d),h=t(67271),f={};f.styleTagTransform=p(),f.setAttributes=g(),f.insert=s().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=c(),n()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals},80671:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAADzCAMAAACG9Mt0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAA9KADAAQAAAABAAAA8wAAAADhQHfUAAAAyVBMVEUAAAD///+AgP+AgP9mZv+AgNWAgP9tbf9gYP+AgP9xcf9mZv+AZuaAgP9dXf90dOhiYv92dv9mZu5mZv93d+53d/9paf94afCAcfFrXvJra/9mZvJzZvJzc/JoaP96b/Rqav91aupsYvV2bOt2bPVxaPZ7cfZqavZyau1waPd4aO9xafBxafh4afB1bfh4avFuZ/F2afJzZvJzZ/N0aPN0bvN3bPR0ae5yZ/R3be93bfR1au9zafBxbPVzavV0a/F0a/ZyafFwaPKZm3nTAAAAQ3RSTlMAAQIEBQYGBwgICQoKCgsLDQ0PDw8PERESExMUFBQWFxgYGhoaGxsdHSAgIiIiIyQlJygqLCwtLi8vLzAzNDU3Nzg7h9vbHgAAA9RJREFUeNrt3ftS2kAUx/Fc1gSyWsErtuJdRDQiiteolb7/QzUoTm07k4AzObuu3/MCez45yWbzT36eZ6b8erO1e1B97baadd+zocJWmg0HaXe/+uqmg2GWtkLT5Lle1m9LdhG2+1lvzuiUO1knEF81yFc1N+35m15kZOGodz1vyLx+v2Lseq/erxtZd/NuweCTtfiwaWLOD5FnsqI7+VnP3y8afnEs3Es/1+H1qvETwuq18B7e6VlwLup1ZM8kWWQBOsrmHL7GVtxvYRZYgQ4ywae61ffsqH5Lbq20bQm6ncp9P2ehJegwE/u+rl95ttSwLrVSc2ANetAU28dSa9Cp2E623bUG3d2VWmn/wBq0XCugQYMGLdVKoOJaoiuok1NdXSW1WAUfRPtRUllflaJf5ZE/O9pXVbZUPTov5c+IDqvtRwStdTgLutoxy6GnGfYb2o+1I2gd+1OiqzfLocvVE7TSDqG1mgodaqfQZbvZC9rXjqG1X45WzqFVKVpk0LLo4lGP0ZGD6KgMnTiITkrQgXYQrYNitHISrYrRsZPouBhdcxJdK0YnTqKTYrR2Eq1BgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRoh9DH59ag86ACoSYOL61B55EUQk1s3VqDzsNHhJpYe7QGncfMSHUxaliCHgcKSXVxeWQJehwdJdXF4dAS9DgkTKqLxuibFeiXODixNi7OrEC/BP+JtbE0WrYA/RrxKNfH2YUF6NegSbk+Gk87xtErN6EsWm88fzeMXpwE9EruLns/l42io4dJFLPo2/Po1w+D6IW7t9Bt2SPx3vOOMfS7eHVZtN54ulg2go56138Ct4XRunE2Ovsmjg46WeddUoUWr6WL0fCoIYgO2/2s91fstDZQjcPL0ePt5flpdXUwqW46uMrS1j95JNpQrW0dHp9UV/uT2m416/8HVGg3qzhpBjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KC/FDpx0pwUo2tOomvF6NhJdFyMVk6iVTE6cBIdeF9vJyvZx/I/AzuIjsrQvoNovwzt4FamSs0Ojrp80PmvoB0zh940pb7azf1yg7t0LIt978uppzbnalfucDW92ZndLPRmKweGPduYJ+zoM5/Dk+gD5NdvLhXXPp88qcUqmEH5G5JZRs6cuxwIAAAAAElFTkSuQmCC"},2422:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAEQCAMAAABP1NsnAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABEKADAAQAAAABAAABEAAAAAAQWxS2AAAAwFBMVEUAAAD///+AgICAgP9VVaqqVf+qqv+AgL+AgP9mZsxmZv+ZZv+AgNWAgP9tbdttbf+Sbf+AYN+AgN+AgP9xceNmZv+AZuaAZv90dOh0dP9qav+AauqAav+AgP92dv9tbf+Abe2Abf93Zu53d+6AcO94afCAcfF5a+R5a/JzZuaAZvKAc/J5bed5bfOAaPN6b/R1auqAavR6ZvV6cPV2bOuAbPV7aPZ2be2AbfZ7au17avZ3Zu53b+57a+97a/d4aO9J6CoeAAAAQHRSTlMAAQICAwMDBAQFBQUGBgcHBwgICAkKCgoLCwwMDAwNDg4ODw8QERITExQUFBUVFhcYGBkZGhobHBwdHR4eHx8gJ5uMWwAAA/FJREFUeNrt2G1XEkEYxvHZNk2xHGzdbKFl0cTwgdSkCKzu7/+t4pw6sAjtjIueE/f8r3fMO35nZnbuy5gVGcvfzJe0rnTfGI+MggGJRUZnbpPIhJKt88nU53JnFULvyISY6KAv8vPj0vr2rYwiE2Z2B9J+uNYcyyQxwWZvaeGH3G4bMjsvI/kcwTC/V+7kLoahlITzQojP3ZFgsJCh7IJQzpX0QFj4uMiY18eDMZ9bZCF9OQahnK6cm/Y7js0sh/LF3Auv1PlQd3MxbdXYIQspV44EEEAAAWTNDAYYkKdJbNMsLzYueZbaZ2iM46RVbHBaiZ9Js+nHEdli42N9XuSen5hGp1CQTuOJQDRsD99N4gMSpYWapNH6IJo83CIeILZQFesEaber79NCWRoukOpNEnW0gXQqD81w6ACxhbrYde7VuFCYeA2QRCNIsgZISyNIqz6IyhPjOjNVIFYniK3dmKU6QdLaJUimEySrDZLrBMlrgxRKU7sxCw/EMe0CAggggADySJCqxixIkKpNEh6IozELD8RxjQACCCCAAPJIkKrGLEgQXqqAAEJjxrQLCCCAAEJjRmNGY8a0CwgggABCYwYIfQgggNCYMe0CAggggNCY0ZjRmDHtAgIIIIAAQmNGHwIIIDRmTLuAAAIIIDRmNGY0Zky7gAACCCCA0JjRhwACCI0Z0y4ggAACCI0ZjRmNGdMuIIAAAgggNGb0IYAAQmPGtAsIIIAAQmNGY0ZjxrQLCCCAAAIIjRl9CCCA0Jgx7QICCCCA0JjRmNGYMe0CAggggABCY0YfAgggNGZMu4AAAgggNGY0ZjRmTLuAAAIIIIDQmNGHAAIIjRnTLiCAAAIIjRmNGY0ZIEy7gAACCCA0ZvQhgABCY8a0CwgggABCY0ZjBgiNGdMuIIAAAgiN2f/Sh+Q6PfLaIJlOkKw2SKoTJK3dmFmdILb2tBvrBIlrg5iWRo+WqQ+SaARJ1gCJAzsxThCN16p1vNurGjNjoo42j07kAHFskoY2kEbl33U0ZgoPjXW+Rl0gkarnahqtDaJKxMPDDWIiNafGenh4gExvVhXfmk7Da6L1AVGxSby2h6MxK79Zk42ea1pJbJ48sU2zDezQ8iy1z6BBwoyjMQsvXp8YQAAhgADilRfyy+wf8WqZZUfGZihvgZiB3FybC+kCUU5XLkAo50C+gbBQdUzkAIVyejIAYfFTI1solHP2HgNCnHn5AYNy4jvpoVB6fVzL91cwzLJ9Lfd7S0jhehxO5H5/yePr1W6gHonI7fJ5ORSR/n6Q2yQanq763zuXU5LJZRKiyD/W9/pjkdPZz0/yJ8fqVyry+qQZDMjJKoDfy8bRVhHhQTwAAAAASUVORK5CYII="}}]);