"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[859],{4290:function(n,t,e){e.d(t,{Z:function(){return c}});var r=e(8966),a=e(184),c=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(r.Bb,{height:"100",width:"100",color:"#4fa94d",ariaLabel:"audio-loading",wrapperStyle:{},wrapperClass:"wrapper-class",visible:!0})})}},7398:function(n,t,e){e.d(t,{Dx:function(){return s},eW:function(){return p},up:function(){return l}});var r,a,c,o=e(168),u=e(1087),i=e(7402),s=i.Z.h2(r||(r=(0,o.Z)(["\n  margin-top: 40px;\n  margin-bottom: 0;\n"]))),p=i.Z.ul(a||(a=(0,o.Z)(["\n  padding: 20px 0 20px;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n"]))),l=(0,i.Z)(u.rU)(c||(c=(0,o.Z)(["\n  text-decoration: none;\n  padding: 2px 8px;\n\n  &:hover {\n    border-radius: 5px;\n    box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5);\n  }\n"])))},4859:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r=e(9439),a=e(2791),c=e(7689),o=e(6611),u=e(4290),i=e(7398),s=e(184),p=function(){var n=(0,c.TH)(),t=(0,a.useState)([]),e=(0,r.Z)(t,2),p=e[0],l=e[1],f=(0,a.useState)(!1),d=(0,r.Z)(f,2),h=d[0],v=d[1];return(0,a.useEffect)((function(){v(!0),(0,o.rQ)().then((function(n){l(n.results),v(!1)}))}),[]),(0,s.jsxs)("main",{children:[(0,s.jsx)(i.Dx,{children:"Top Movies for today"}),(0,s.jsxs)(i.eW,{children:[p.map((function(t){return(0,s.jsx)("li",{children:(0,s.jsx)(i.up,{to:"/movies/".concat(t.id),state:{from:n},children:t.original_title||t.name})},t.id)})),h&&(0,s.jsx)(u.Z,{})]})]})}},6611:function(n,t,e){e.d(t,{Hx:function(){return m},Y5:function(){return d},mv:function(){return l},rQ:function(){return s},uV:function(){return v}});var r=e(5861),a=e(4687),c=e.n(a),o=e(1243),u="https://api.themoviedb.org/3/",i="265284652100bb67997703a1d052ae84";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(u,"trending/all/day?api_key=").concat(i),n.prev=1,n.next=4,o.Z.get(t);case 4:return e=n.sent,n.abrupt("return",e.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u,"search/movie?api_key=").concat(i,"&query=").concat(t),n.prev=1,n.next=4,o.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u,"movie/").concat(t,"?api_key=").concat(i),n.prev=1,n.next=4,o.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u,"movie/").concat(t,"/credits?api_key=").concat(i),n.prev=1,n.next=4,o.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(i),n.prev=1,n.next=4,o.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=859.013649f1.chunk.js.map