(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1143:function(t,r,e){"use strict";e.r(r);var n=e(560),o=e(559),a={layout:"support",components:{"article-show":n.a,"support-footer":o.a},methods:{back:function(){return"clear-query"}}},i=(e(894),e(0)),c=Object(i.a)(a,function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("scroll",{attrs:{"scroller-style":{display:"flex","flex-direction":"column"}}},[e("portal",{attrs:{to:"mobile-title"}},[e("span",{key:"support.title"},[t._v(t._s(t.$t("support.title")))])]),t._v(" "),e("article-show",{staticClass:"article",attrs:{id:t.$route.query.id,slug:t.$route.query.slug,currency:t.$route.query.currency}}),t._v(" "),e("support-footer",{staticClass:"footer"})],1)},[],!1,null,"d6e69dde",null);c.options.__file="article.vue";r.default=c.exports},462:function(t,r,e){var n=e(521);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,e(7).default)("140d7aa4",n,!0,{})},520:function(t,r,e){"use strict";var n=e(462);e.n(n).a},521:function(t,r,e){var n=e(17);(t.exports=e(6)(!1)).push([t.i,"@font-face{font-family:Circular-Pro-Book;src:url("+n(e(8))+");src:url("+n(e(8))+'?#iefix) format("embedded-opentype"),url('+n(e(18))+') format("woff2"),url('+n(e(19))+') format("woff");font-weight:400;font-style:normal}@font-face{font-family:Circular-Pro-Bold;src:url('+n(e(9))+");src:url("+n(e(9))+'?#iefix) format("embedded-opentype"),url('+n(e(20))+') format("woff2"),url('+n(e(21))+') format("woff");font-weight:400;font-style:normal}@-webkit-keyframes autofill-data-v-35fa892c{to{color:#666;background:transparent}}h1[data-v-35fa892c]{font-family:Circular-Pro-Bold,Roboto,BlinkMacSystemFont,-apple-system,Segoe UI,sans-serif;font-size:22px;padding:22px}.body[data-v-35fa892c]{padding:0 22px}.body p[data-v-35fa892c]{padding:11px 0}',""])},540:function(t,r,e){var n=e(895);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,e(7).default)("51b10179",n,!0,{})},560:function(t,r,e){"use strict";e(28),e(26),e(12);var n=e(1),o=e.n(n),a=(e(70),e(155)),i={props:["slug","id","currency"],data:function(){return{article:null}},mounted:function(){var t=o()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.fetch();case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),methods:{fetch:function(){var t=o()(regeneratorRuntime.mark(function t(){var r,e,n,o=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.slug?r=360000438414:this.id?r=360000437273:this.article=null,"en-us",t.prev=2,t.next=5,Object(a.b)("".concat("en-us","/categories/").concat(r,"/articles.json?per_page=200"));case 5:e=t.sent.articles,t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(2),this.article=t.t0,t.abrupt("return");case 12:this.id?this.article=e.find(function(t){return t.id==o.id}):this.slug?(n=e.filter(function(t){return!!t.label_names.find(function(t){return t=="slug:".concat(o.slug)})}),this.currency?(this.article=n.find(function(t){return!!t.label_names.find(function(t){return t=="curr:".concat(o.currency)})}),this.article||(this.article=n.find(function(t){return!t.label_names.find(function(t){return t.match(/^curr\:/)})}))):this.article=n[0]):this.article=null,this.article||(this.article=new Error("support.error.article-not-found"));case 14:case"end":return t.stop()}},t,this,[[2,8]])}));return function(){return t.apply(this,arguments)}}()}},c=(e(520),e(0)),s=Object(c.a)(i,function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("loader",{attrs:{data:t.article,retry:t.fetch}},[t.article?e("div",[e("h1",[t._v(t._s(t.article.title))]),t._v(" "),e("div",{staticClass:"body",domProps:{innerHTML:t._s(t.article.body)}})]):t._e()])],1)},[],!1,null,"35fa892c",null);s.options.__file="ArticleShow.vue";r.a=s.exports},894:function(t,r,e){"use strict";var n=e(540);e.n(n).a},895:function(t,r,e){var n=e(17);(t.exports=e(6)(!1)).push([t.i,"@font-face{font-family:Circular-Pro-Book;src:url("+n(e(8))+");src:url("+n(e(8))+'?#iefix) format("embedded-opentype"),url('+n(e(18))+') format("woff2"),url('+n(e(19))+') format("woff");font-weight:400;font-style:normal}@font-face{font-family:Circular-Pro-Bold;src:url('+n(e(9))+");src:url("+n(e(9))+'?#iefix) format("embedded-opentype"),url('+n(e(20))+') format("woff2"),url('+n(e(21))+') format("woff");font-weight:400;font-style:normal}@-webkit-keyframes autofill-data-v-d6e69dde{to{color:#666;background:transparent}}.article[data-v-d6e69dde]{flex-grow:1}',""])}}]);
//# sourceMappingURL=d41f8324df47d9fd96c8.js.map