(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-476550b9"],{1399:function(t,e,s){"use strict";var a=s("ef4a"),i=s.n(a);i.a},"3ad6":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.moudel?s("div",{staticClass:"page-article"},[s("div",{staticClass:"d-flex py-3 px-2 border-bottom"},[s("div",{staticClass:"iconfont icon-Back"}),s("strong",{staticClass:"flex-grow-1 pl-2 text-bule"},[t._v(" "+t._s(t.moudel.title))]),s("div",{staticClass:"text-grry fs-sm"},[t._v(t._s(t._f("showdata")(t.moudel.createdAt)))])]),s("div",{staticClass:"px-3 body fs-lg",domProps:{innerHTML:t._s(t.moudel.body)}}),s("div",{staticClass:"px-3 border-top py-3"},[t._m(0),s("div",{staticClass:"pt-2"},t._l(t.moudel.related,(function(e){return s("router-link",{key:e._id,staticClass:"pt-2 fs-lg",attrs:{tag:"div",to:"/article/"+e._id}},[t._v(t._s(e.title))])})),1)])]):t._e()},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex"},[s("i",{staticClass:"iconfont icon-menu-1"}),s("strong",{staticClass:"text-bule pl-2 fs-lg"},[t._v("相关资讯")])])}],n=(s("d3b7"),s("96cf"),s("5a0c")),r=s.n(n),c={props:{id:{required:!0}},filters:{showdata:function(t){return r()(t).format("MM/DD")}},data:function(){return{moudel:{}}},methods:{fech:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.$http.get("/article/".concat(this.id)));case 2:t=e.sent,console.log("data ",t),this.moudel=t.data;case 5:case"end":return e.stop()}}),null,this)}},watch:{id:function(){this.fech()}},created:function(){this.fech()}},o=c,l=(s("1399"),s("2877")),d=Object(l["a"])(o,a,i,!1,null,null,null);e["default"]=d.exports},ef4a:function(t,e,s){}}]);
//# sourceMappingURL=chunk-476550b9.cc039561.js.map