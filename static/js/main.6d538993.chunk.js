(this["webpackJsonpcount-down-app"]=this["webpackJsonpcount-down-app"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(4),o=n.n(a),r=(n(9),n(10),n(2)),i=n(0);function u(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!0),o=Object(r.a)(a,2),u=o[0],l=o[1],j=n,d=function(){var e=+new Date(j)-+new Date,t={};return e>0&&(t={days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}),t},h=Object(c.useState)(d),p=Object(r.a)(h,2),b=p[0],v=p[1];Object(c.useEffect)((function(){var e=setTimeout((function(){v(d)}),1e3);return function(){return clearTimeout(e)}}));var f=[];return Object.keys(b).forEach((function(e){b[e]&&f.push(Object(i.jsxs)("span",{children:[b[e],e," ",""]}))})),Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{className:"setDate",type:"date",min:"2022-01-29",required:!0,onChange:function(e){return s(e.target.value)}}),Object(i.jsx)("input",{className:"setbutton",type:"button",value:"Set countdown",onClick:function(){return l((function(e){return!e}))}}),Object(i.jsx)("input",{className:"reset",type:"button",value:"Reset",onClick:function(){return l(!0)}}),Object(i.jsx)("div",{style:{display:u?"none":"block"},className:"countdown",children:f.length?f:Object(i.jsx)("span",{children:"Time's up!"})})]})}var l=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h2",{className:"header",children:"Count Down Timer"}),Object(i.jsx)("p",{className:"rider",children:"Looking forward to that big event? Set a countdown to see how long you have till that day!"}),Object(i.jsx)("div",{class:"custom-shape-divider-top-1645376639",children:Object(i.jsx)("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:Object(i.jsx)("path",{d:"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",class:"shape-fill"})})}),Object(i.jsx)("div",{class:"custom-shape-divider-top-1645376749",children:Object(i.jsx)("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:Object(i.jsx)("path",{d:"M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z",class:"shape-fill"})})}),Object(i.jsx)(u,{}),Object(i.jsx)("footer",{children:"\xa9 2022 Silver_Codes. All Rights Reserved"})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),a(e),o(e)}))};o.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(l,{})}),document.getElementById("root")),j()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.6d538993.chunk.js.map