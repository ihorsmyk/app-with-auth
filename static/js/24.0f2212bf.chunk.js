"use strict";(self.webpackChunkapp_with_auth=self.webpackChunkapp_with_auth||[]).push([[24],{2024:function(r,t,n){n.r(t),n.d(t,{default:function(){return h}});var e=n(5861),u=n(9439),a=n(7757),s=n.n(a),c=n(1087),i=n(7689),o=n(2791),f=n(4635),p=n(4901),l=n(1686),d=n(184),h=function(){var r=(0,o.useState)([]),t=(0,u.Z)(r,2),n=t[0],a=t[1],h=(0,i.TH)(),v=(0,o.useContext)(p._),m=v.error,x=v.setIsLoading,w=v.setError,k=function(){var r=(0,e.Z)(s().mark((function r(){var t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,x(!0),r.next=4,(0,f.Rf)();case 4:t=r.sent,a(t),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),w(r.t0.message);case 11:return r.prev=11,x(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})));return function(){return r.apply(this,arguments)}}();return(0,o.useEffect)((function(){k()}),[]),(0,o.useEffect)((function(){m&&l.Notify.failure("some error occured ".concat(m))}),[m]),(0,d.jsx)("ul",{className:"users",children:Array.isArray(n)&&(null===n||void 0===n?void 0:n.map((function(r){return(0,d.jsx)("li",{className:"users__item",children:(0,d.jsx)(c.rU,{state:{from:h},to:String(r.id),className:"users__link",children:(0,d.jsx)("h2",{className:"users__name",children:null===r||void 0===r?void 0:r.name})})},r.id)})))})}},4635:function(r,t,n){n.d(t,{Jq:function(){return c},Rf:function(){return o},bG:function(){return f},sy:function(){return i}});var e=n(5861),u=n(7757),a=n.n(u),s=n(1243).Z.create({baseURL:"https://jsonplaceholder.typicode.com/"}),c=function(){var r=(0,e.Z)(a().mark((function r(){var t,n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("posts");case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,e.Z)(a().mark((function r(t){var n,e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("posts/".concat(t));case 2:return n=r.sent,e=n.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),o=function(){var r=(0,e.Z)(a().mark((function r(){var t,n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("users");case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(a().mark((function r(t){var n,e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("users/".concat(t));case 2:return n=r.sent,e=n.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=24.0f2212bf.chunk.js.map