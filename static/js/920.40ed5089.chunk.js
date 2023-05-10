"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[920],{4290:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(8966),a=t(184),i=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(r.Bb,{height:"100",width:"100",color:"#4fa94d",ariaLabel:"audio-loading",wrapperStyle:{},wrapperClass:"wrapper-class",visible:!0})})}},4897:function(n,e,t){t.d(e,{Z:function(){return s}});var r,a=t(7689),i=t(168),o=t(1087),c=(0,t(7402).Z)(o.rU)(r||(r=(0,i.Z)(["\n  text-decoration: none;\n  padding: 2px 8px;\n\n  &:hover {\n    border-radius: 5px;\n    box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5);\n  }\n"]))),u=t(184),s=function(n){var e=n.movies,t=(0,a.TH)();return(0,u.jsx)("ul",{children:e.map((function(n){return(0,u.jsx)("li",{children:(0,u.jsx)(c,{to:"/movies/".concat(n.id),state:{from:t},children:n.original_title||n.name})},n.id)}))})}},920:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,i,o=t(9439),c=t(2791),u=t(1087),s=t(6611),p=t(4897),l=t(168),d=t(7402),h=d.Z.form(r||(r=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 30px;\n  max-width: 300px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  margin-top: 8px;\n"]))),f=t(184),m=function(n){var e=n.onSubmit,t=n.children,r=n.event;return r.preventDefault(),r.currentTarget.reset(),(0,f.jsx)(h,{onSubmit:e,children:t})},v=d.Z.input(a||(a=(0,l.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 16px;\n  padding: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 16px;\n  }\n"]))),x=function(){return(0,f.jsx)(v,{type:"text",name:"movieName",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,autoComplete:"off",autoFocus:!0,placeholder:"Search movie..."})},g=t(8185),b=d.Z.button(i||(i=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  background-color: inherit;\n  width: 30px;\n  height: 30px;\n  border: 0;\n  margin-right: 4px;\n  margin-left: 4px;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    transform: scale(1.2);\n  }\n"]))),Z=function(n){var e=n.onSubmit;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(m,{onSubmit:e,children:[(0,f.jsx)(x,{}),(0,f.jsx)(b,{type:"submit","aria-label":"search button",children:(0,f.jsx)(g.dVI,{})})]})})},w=t(4290),y=function(){var n,e=(0,u.lr)(),t=(0,o.Z)(e,2),r=t[0],a=t[1],i=null!==(n=r.get("movieName"))&&void 0!==n?n:"",l=(0,c.useState)([]),d=(0,o.Z)(l,2),h=d[0],m=d[1],v=(0,c.useState)(!1),x=(0,o.Z)(v,2),g=x[0],b=x[1],y=(0,c.useState)(!1),k=(0,o.Z)(y,2),j=k[0],S=k[1];(0,c.useEffect)((function(){""!==i&&(m([]),b(!0),(0,s.mv)(i).then((function(n){if(!n.results.length)return b(!1),S(!0),console.log("There are no movies with this request. Please,1 try again.");S(!1),m(n.results),b(!1)})))}),[i]);return(0,f.jsxs)("main",{children:[(0,f.jsx)(Z,{onSubmit:function(n){a({movieName:n.movieName.value})}}),j&&(0,f.jsx)(f.Fragment,{children:"There are no movies with this request. Please, try again."}),(0,f.jsx)(p.Z,{trending:h,loading:g}),g&&(0,f.jsx)(w.Z,{})]})}},6611:function(n,e,t){t.d(e,{Hx:function(){return x},Y5:function(){return h},mv:function(){return l},rQ:function(){return s},uV:function(){return m}});var r=t(5861),a=t(4687),i=t.n(a),o=t(1243),c="https://api.themoviedb.org/3/",u="265284652100bb67997703a1d052ae84";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(c,"trending/all/day?api_key=").concat(u),n.prev=1,n.next=4,o.Z.get(e);case 4:return t=n.sent,n.abrupt("return",t.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(c,"search/movie?api_key=").concat(u,"&query=").concat(e),n.prev=1,n.next=4,o.Z.get(t);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function h(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(c,"movie/").concat(e,"?api_key=").concat(u),n.prev=1,n.next=4,o.Z.get(t);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(c,"movie/").concat(e,"/credits?api_key=").concat(u),n.prev=1,n.next=4,o.Z.get(t);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(c,"movie/").concat(e,"/reviews?api_key=").concat(u),n.prev=1,n.next=4,o.Z.get(t);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=920.40ed5089.chunk.js.map