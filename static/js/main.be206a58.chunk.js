(this["webpackJsonpfe-hoaxfy"]=this["webpackJsonpfe-hoaxfy"]||[]).push([[0],{20:function(e,a,n){e.exports=n(45)},25:function(e,a,n){},26:function(e,a,n){},45:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),s=n(12),l=n.n(s),o=(n(25),n(26),n(2)),c=n.n(o),i=n(13),m=n(14),p=n(15),u=n(16),d=n(19),h=n(18),f=n(17),g=n.n(f),v=function(e){return g.a.post("/api/1.0/users",e)},w=function(e){Object(d.a)(n,e);var a=Object(h.a)(n);function n(){var e;Object(p.a)(this,n);for(var t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={username:null,displayName:null,password:null,passwordRepeat:null,pendingApiCall:!1},e.onChange=function(a){var n=a.target,t=n.value,r=n.name;e.setState(Object(m.a)({},r,t))},e.onClickSignUp=function(){var a=Object(i.a)(c.a.mark((function a(n){var t,r,s,l,o,i;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),t=e.state,r=t.username,s=t.displayName,l=t.password,o={username:r,displayName:s,password:l},e.setState({pendingApiCall:!0}),a.prev=4,a.next=7,v(o);case 7:i=a.sent,console.log(i),a.next=13;break;case 11:a.prev=11,a.t0=a.catch(4);case 13:e.setState({pendingApiCall:!1});case 14:case"end":return a.stop()}}),a,null,[[4,11]])})));return function(e){return a.apply(this,arguments)}}(),e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.pendingApiCall;return r.a.createElement("div",null,r.a.createElement("form",{className:"container"},r.a.createElement("h1",{className:"text-center"},"Sign Up"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{className:"form-control",name:"username",type:"text",onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Display Name"),r.a.createElement("input",{className:"form-control",name:"displayName",type:"text",onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{className:"form-control",name:"password",type:"password",onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password Repeat"),r.a.createElement("input",{className:"form-control",name:"passwordRepeat",type:"password",onChange:this.onChange})),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{className:"btn btn-primary",onClick:this.onClickSignUp,disabled:e},e&&r.a.createElement("span",{className:"spinner-border spinner-border-sm"})," Sign Up"))))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.be206a58.chunk.js.map