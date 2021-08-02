(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1130:function(t,e,n){"use strict";n.r(e);n(12);var r=n(1),a=n.n(r),o=(n(27),n(155)),i=(n(15),n(472));var s={mixins:[Object(i.a)("formData",["name","phone"],{persist:["name","phone"]})],data:function(){return{EMAIL_REGEXP:o.a,errorMessage:null,submittedSuccess:!1,submittedFail:!1}},computed:{readyToSubmit:function(){var t=this.formData;return t&&2==[t.name,t.phone].map(function(t){return t&&"string"==typeof t&&t.trim()}).filter(function(t){return t&&t.length}).length}},methods:{navigateTo:function(t){t&&this.$router.push(t)},submit:function(){var t=a()(regeneratorRuntime.mark(function t(){var e,n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=this.formData.name.trim(),o=this.formData.phone.trim(),e={ticket:{subject:"".concat("","Call from the CEO: ").concat(a),comment:{body:"".concat(a,"\n\n").concat(o)},requester:{locale_id:1,name:a,phone:o},tags:["call-from-ceo"]}},t.next=3,this.$net({method:"POST",url:"/_api/zendesk",body:e});case 3:if(n=t.sent,r=n.error,n.result,this.submittedSuccess=null==r,!this.submittedSuccess){t.next=11;break}this.formData={},t.next=13;break;case 11:return this.submittedFail=!0,t.abrupt("return",{error:r});case 13:case"end":return t.stop()}var a,o},t,this)}));return function(){return t.apply(this,arguments)}}()}},c=(n(886),n(0)),l=Object(c.a)(s,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"call-from-ceo-page"},[r("checkpoint",{attrs:{name:"rewards.call-from-ceo"}}),t._v(" "),t.submittedSuccess?r("div",{staticClass:"main confirmation-container"},[r("div",{staticClass:"spacer"},[t._v(" ")]),t._v(" "),r("div",{staticClass:"confirmation"},[r("checkpoint",{attrs:{name:"rewards.call-from-ceo.submit"}}),t._v(" "),r("img",{staticClass:"confirmation-icon",attrs:{src:n(471)}}),t._v(" "),r("h2",{staticClass:"bright"},[t._v("\n        "+t._s(t.$t("rewards.call-from-ceo.form.completed-title"))+"\n      ")]),t._v(" "),r("p",[t._v("\n        "+t._s(t.$t("rewards.call-from-ceo.form.completed-subtitle"))+"\n      ")])],1),t._v(" "),r("div",{staticClass:"form-button-container"},[r("div",{staticClass:"button"},[r("stateful-button",{attrs:{"button-style":"butter"},on:{click:function(e){t.navigateTo("/rewards")}}},[t._v("\n          "+t._s(t.$t("general.button.ok"))+"\n        ")])],1)])]):r("div",{staticClass:"main form-container"},[r("portal",{attrs:{to:"mobile-title"}},[r("span",{key:"call-from-ceo"},[t._v("\n        "+t._s(t.$t("exchange.rewards.call-from-ceo"))+"\n      ")])]),t._v(" "),r("loader",{attrs:{data:t.formData}},[r("form",{directives:[{name:"hit-area",rawName:"v-hit-area"}],staticClass:"form-custom"},[r("butter-text-field",{attrs:{label:t.$t("general.placeholder.name"),"max-length":48},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),r("butter-text-field",{attrs:{type:"tel",label:t.$t("general.placeholder.phone-number"),"max-length":48},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),t._v(" "),r("p",{staticClass:"form-helper"},[t._v("\n        "+t._s(t.$t("exchange.rewards.call-from-ceo.form-helper"))+"\n      ")]),t._v(" "),t.submittedFail?r("p",{staticClass:"form-error"},[r("br"),t._v("\n        "+t._s(t.$t("exchange.rewards.support.form-error"))+"\n      ")]):t._e(),t._v(" "),r("div",{staticClass:"form-button-container"},[r("div",{staticClass:"button"},[r("stateful-button",{attrs:{disabled:!t.readyToSubmit,click:t.submit,"button-style":"butter"}},[t._v("\n\n            "+t._s(t.$t("general.button.submit"))+"\n          ")])],1)])])],1)],1)},[],!1,null,null,null);l.options.__file="call-from-ceo.vue";e.default=l.exports},471:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAzOCAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgMTNMMTQgMjNMMzUgMyIgc3Ryb2tlPSIjNUI2REVFIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"},472:function(t,e,n){"use strict";n(38),n(41),n(12);var r=n(1),a=n.n(r),o=n(13),i=n.n(o),s=(n(16),n(54),n(137)),c=n.n(s),l=n(2),m=(n(10),n(143)),u=n(29);function f(t,e,n){return{get:function(){return Object(l.g)(this[t],e)||""},set:function(r){return this[t]?this.$set(this[t],e,r):this[t]=c()({},e,r),n&&m.a.set("field-".concat(e),r),r}}}e.a=function(t,e){var n={computed:{}},r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).persist,o=null;for(var s in r?o=i()(e):Array.isArray(r)&&r.length>0&&(o=i()(r)),n.data=function(){return c()({},t,null)},n.mounted=a()(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n={},!o){e.next=10;break}return e.prev=2,e.next=5,r=2e3,i=a()(regeneratorRuntime.mark(function t(){var e,r,a,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(o.map(function(t){return m.a.get("field-".concat(t)).catch(function(){return null})}));case 2:for(r in e=t.sent)a=e[r],i=o[r],a&&"string"==typeof a&&(n[i]=a);case 4:case"end":return t.stop()}},t,this)})),Promise.race([Object(l.l)(r),i()]);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),Object(u.b)(e.t0);case 10:this[t]=n;case 11:case"end":return e.stop()}var r,i},e,this,[[2,7]])})),e){var d=e[s],p=o&&o.includes(d);n.computed[d]=f(t,d,p)}return n}},536:function(t,e,n){var r=n(887);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(7).default)("194c5594",r,!0,{})},886:function(t,e,n){"use strict";var r=n(536);n.n(r).a},887:function(t,e,n){var r=n(17);(t.exports=n(6)(!1)).push([t.i,"@font-face{font-family:Circular-Pro-Book;src:url("+r(n(8))+");src:url("+r(n(8))+'?#iefix) format("embedded-opentype"),url('+r(n(18))+') format("woff2"),url('+r(n(19))+') format("woff");font-weight:400;font-style:normal}@font-face{font-family:Circular-Pro-Bold;src:url('+r(n(9))+");src:url("+r(n(9))+'?#iefix) format("embedded-opentype"),url('+r(n(20))+') format("woff2"),url('+r(n(21))+') format("woff");font-weight:400;font-style:normal}@-webkit-keyframes autofill{to{color:#666;background:transparent}}.main{color:hsla(0,0%,100%,.6);margin-bottom:110px;position:absolute;top:0;bottom:0;width:100%;overflow-y:scroll}.main h2{max-width:264px}.main h2,.main p{margin:auto;text-align:center}.main p{max-width:220px}.main .form-custom{width:100%;max-width:440px;padding:0;margin:auto}.main .form-custom .text{margin:0;padding:11px}.main .form-custom:nth-child(1n){padding:11px}.main .form-button-container{position:fixed;width:100%;bottom:0}.main .button{width:100%;max-width:440px;padding:0 0 22px;margin:auto}.main .button .stateful-button{background-color:#5b6dee}.main .button .stateful-button:active{color:hsla(0,0%,100%,.6);background-color:#5667e0}.main .confirmation{padding-top:66px;text-align:center}.main .confirmation :nth-child(1n){margin-bottom:22px}.main .confirmation-icon{margin-bottom:66px!important}.main .bright{color:#fff}.main .phone label,.main .wrapper label,.main label,.main label.active{color:#5b6dee}.form-container{display:block;padding-bottom:22px}.form-container .form-helper{font-size:14px}.form-container .form-error,.form-container .form-helper{text-align:left;width:100%;max-width:440px;padding:0 22px}.form-container .form-error{color:red;font-size:18px}.confirmation-container{display:flex;flex-direction:column;align-items:center;justify-content:center}',""])}}]);
//# sourceMappingURL=2f38e8c7e91d393c7bd6.js.map