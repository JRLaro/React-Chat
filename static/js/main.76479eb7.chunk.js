(this.webpackJsonpsuperchat=this.webpackJsonpsuperchat||[]).push([[0],{22:function(e,t,r){},24:function(e,t,r){},29:function(e,t,r){"use strict";r.r(t);var c=r(2),n=r.n(c),a=r(14),s=r.n(a),i=(r(22),r(13)),u=r.n(i),o=r(15),j=r(10),d=(r(24),r(9)),p=(r(30),r(26),r(16)),b=r(17),h=r(4);d.a.initializeApp({apiKey:"AIzaSyDENdlwyW1NSKYLtjIuKEbdw42w7K1l8bw",authDomain:"superchat-c5489.firebaseapp.com",projectId:"superchat-c5489",storageBucket:"superchat-c5489.appspot.com",messagingSenderId:"349703311020",appId:"1:349703311020:web:ef7a6e904892130df21909",measurementId:"G-7L2ZSDDWHY"});var l=d.a.auth(),O=d.a.firestore();function m(){return Object(h.jsx)("button",{onClick:function(){var e=new d.a.auth.GoogleAuthProvider;l.signInWithPopup(e)},children:" Sign in with Google "})}function f(){var e=Object(c.useRef)(),t=O.collection("messages"),r=t.orderBy("createdAt").limit(25),n=Object(b.a)(r,{idField:"id"}),a=Object(j.a)(n,1)[0],s=Object(c.useState)(""),i=Object(j.a)(s,2),p=i[0],m=i[1],f=function(){var r=Object(o.a)(u.a.mark((function r(c){var n,a,s;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c.preventDefault(),n=l.currentUser,a=n.uid,s=n.photoURL,r.next=4,t.add({text:p,createdAt:d.a.firestore.FieldValue.serverTimestamp(),uid:a,photoURL:s});case 4:m(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("main",{children:[a&&a.map((function(e){return Object(h.jsx)(x,{message:e},e.id)})),Object(h.jsx)("div",{ref:e})]}),Object(h.jsxs)("form",{onSubmit:f,children:[Object(h.jsx)("input",{value:p,onChange:function(e){return m(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:" \ud83d\udd4a "})]}),Object(h.jsx)("div",{})]})}function x(e){var t=e.message,r=t.text,c=t.uid,n=t.photoURL,a=c===l.currentUser.uid?"sent":"recieved";return Object(h.jsxs)("div",{className:"message ".concat(a),children:[Object(h.jsx)("img",{src:n}),Object(h.jsx)("p",{children:r})]})}var v=function(){var e=Object(p.a)(l),t=Object(j.a)(e,1)[0];return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("header",{}),Object(h.jsx)("section",{children:t?Object(h.jsx)(f,{}):Object(h.jsx)(m,{})})]})};s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.76479eb7.chunk.js.map