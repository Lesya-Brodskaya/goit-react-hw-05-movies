"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[93],{7093:function(t,n,e){e.r(n),e.d(n,{default:function(){return y}});var r,a,c,u,o=e(9439),i=e(2791),s=e(7689),p=e(6611),l=e(168),f=e(7402),h=f.Z.ul(r||(r=(0,l.Z)(["\n  list-style: none;\n"]))),v=f.Z.li(a||(a=(0,l.Z)(["\n  margin: 10px 0 16px;\n  padding: 2px 8px;\n"]))),d=f.Z.h3(c||(c=(0,l.Z)(["\n  margin: 8px 0;\n"]))),g=f.Z.p(u||(u=(0,l.Z)(["\n  margin: 0;\n"]))),m=e(184),y=function(){var t=(0,i.useState)([]),n=(0,o.Z)(t,2),e=n[0],r=n[1],a=(0,s.UO)().movieId;return(0,i.useEffect)((function(){(0,p.uV)(a).then((function(t){return r(t.cast)}))}),[a]),(0,m.jsx)(h,{children:e.length>0?e.map((function(t){var n=t.id,e=t.name,r=t.profile_path,a=t.character;return(0,m.jsxs)(v,{children:[(0,m.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w200".concat(r):"http://www.suryalaya.org/images/no_image.jpg",alt:"actor",loading:"lazy",width:120,height:180}),(0,m.jsx)(d,{children:e}),(0,m.jsxs)(g,{children:["Character: ",a]})]},n)})):"Sorry, there isn't any info"})}},6611:function(t,n,e){e.d(n,{Hx:function(){return m},Y5:function(){return h},mv:function(){return l},rQ:function(){return s},uV:function(){return d}});var r=e(5861),a=e(4687),c=e.n(a),u=e(1243),o="https://api.themoviedb.org/3/",i="265284652100bb67997703a1d052ae84";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(o,"trending/all/day?api_key=").concat(i),t.prev=1,t.next=4,u.Z.get(n);case 4:return e=t.sent,t.abrupt("return",e.data);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function l(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(o,"search/movie?api_key=").concat(i,"&query=").concat(n),t.prev=1,t.next=4,u.Z.get(e);case 4:return r=t.sent,t.abrupt("return",r.data);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(o,"movie/").concat(n,"?api_key=").concat(i),t.prev=1,t.next=4,u.Z.get(e);case 4:return r=t.sent,t.abrupt("return",r.data);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function d(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(o,"movie/").concat(n,"/credits?api_key=").concat(i),t.prev=1,t.next=4,u.Z.get(e);case 4:return r=t.sent,t.abrupt("return",r.data);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function m(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(i),t.prev=1,t.next=4,u.Z.get(e);case 4:return r=t.sent,t.abrupt("return",r.data);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=93.badd2d6e.chunk.js.map