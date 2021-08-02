(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1125:function(t,e,r){"use strict";r.r(e);var n=r(3),a=r.n(n),o=(r(57),r(42),r(28),r(27),r(12),r(1)),i=r.n(o),s=(r(61),r(24),r(14)),c=r(2),u=r(11),l=(r(38),r(41),r(26),{props:["value"],computed:{item:function(){return this.value||{}}}}),f=(r(636),r(0)),d=Object(f.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return"legal"==t.item.type?r("div",{staticClass:"line-item line-item-text"},[r("span",{staticClass:"text",domProps:{innerHTML:t._s(t.item.text)}})]):r("div",{staticClass:"line-item"},[t.item.label?r("span",{staticClass:"label"},[t._v("\n    "+t._s(t.$t(t.item.label))+"\n  ")]):r("span",[t._v("\n    "+t._s(t.$t(t.item.labelText))+"\n  ")]),t._v(" "),r("span",{staticClass:"value"},[t.item.value?r("butter-currency",{staticClass:"line-item-currency",attrs:{value:t.item.value}}):t.item.valueText?r("span",[t._v(t._s(t.item.valueText))]):t.item.valueSlug?r("span",[t._v(t._s(t.$t(t.item.valueSlug)))]):t._e()],1)])},[],!1,null,"27cbe452",null);d.options.__file="QuoteLineItem.vue";var m=d.exports,p=r(15),h={props:{quote:{},service:{},mode:{default:"buy",type:String},to:{},from:{},currency:{type:String}},data:function(){return{acceptTOS:!1}},filters:{fiat:function(t){return u.a.toFiat(t)}},mounted:function(){this.legalese||(this.acceptTOS=!0)},methods:{shouldDisplayLocal:function(t){return!u.a.isLocalCurrency(t)},icon:function(t){return t.id&&t.colors?{name:t.id.toLowerCase(),background:{backgroundColor:t.colors[0]}}:null},getCurrency:function(t){return u.a.currencies.filter(function(e){return e.id==t.toUpperCase()})[0]},browser:s.b},components:{QuoteLineItem:m},computed:{meta:function(){return this.quote&&this.quote.meta||{}},lineItems:function(){return(this.meta&&this.meta.lineItems||[]).filter(function(t){return"legal"!=t.type})},legalese:function(){return(this.meta&&this.meta.lineItems||[]).find(function(t){return"legal"==t.type})},notices:function(){return this.meta.notices},promotionAmount:function(){return{numerator:"1000",denominator:"100",currency:"USD"}},isEstimate:function(){return!!this.meta.isEstimate&&["buy","trade"].includes(this.mode)},iconBackground:function(){return this.from.colors?this.from.colors[0]:null},method:function(){this.service,this.quote;return this.$t("exchange.title.".concat(this.service.type))},delivery:function(){var t=this.service;this.quote;return t.estimatedDelivery},fromBase:function(){return u.a.stringToCurrency(1,this.from.id)},inputAmount:function(){return"sell"===this.mode?this.meta.from:this.meta.to},price:function(){return this.meta.exchangeRate},subtotal:function(){return"buy"==this.mode?this.meta.subtotal:a()({},this.meta.from,{numerator:this.meta.from.numerator-this.meta.fee.numerator})},fee:function(){return this.meta.fee},paidAmount:function(){return this.meta.from||quote.total}},watch:{acceptTOS:function(t){this.$emit(p.k,"true"===t||!0===t)}}},v=(r(638),Object(f.a)(h,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"confirm-quote"},[r("div",{staticClass:"amounts"},[r("butter-currency",{staticClass:"main-amount",attrs:{value:t.inputAmount,trim:!0,decimal:4}}),t._v(" "),t.isEstimate?r("span",{staticClass:"description"},[t._v(t._s(t.$t("history.order.description",{currency:t.inputAmount.currency})))]):t._e()],1),t._v(" "),r("div",{staticClass:"details"},t._l(t.lineItems,function(t,e){return r("quote-line-item",{key:e,class:"detail "+t.class,attrs:{value:t}})}),1),t._v(" "),t.legalese?r("butter-checkbox",{attrs:{label:t.legalese.text},on:{"browser-url":t.browser},model:{value:t.acceptTOS,callback:function(e){t.acceptTOS=e},expression:"acceptTOS"}}):t._e()],1)},[],!1,null,"61cb305c",null));v.options.__file="ConfirmQuote.vue";var g=v.exports,x={props:{service:{type:String,required:!0}},computed:{disclaimer:function(){return this.$t("exchange.".concat(this.service,".legal"))}}},b=(r(640),Object(f.a)(x,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"disclaimer"},[this._v("\n  "+this._s(this.disclaimer)+"\n")])},[],!1,null,"351e1cc4",null));b.options.__file="LegalDisclaimer.vue";var y=b.exports,w=r(473),k={data:function(){return{now:new Date}},mounted:function(){var t=this;this.__now_interval=setInterval(function(){t.now=new Date},100)},beforeDestroy:function(){clearInterval(this.__now_interval)}},_=r(81),q={mixins:[k],data:function(){return{fetchingQuote:!1,capability:null,flow:null,flowComponent:null,quote:null,result:null,successScreen:null,error:null,override:{},tos:!1}},components:{ConfirmQuote:g,LegalDisclaimer:y,ServiceScreen:w.a,ToolbarButton:_.a},mounted:function(){var t=i()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.service){t.next=3;break}return t.next=3,this.fetchQuote();case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),watch:{flow:function(){var t=i()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.flow){t.next=6;break}return t.next=3,r(506)("./".concat(this.flow));case 3:this.flowComponent=t.sent.default,t.next=7;break;case 6:this.flowComponent=null;case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},computed:{screenId:function(){return this.quote&&"screen"==this.quote.type&&this.quote.screenId?this.quote.screenId:null},doneScreenId:{get:function(){var t=Object(c.g)(this.$store,"state.exchange.meta");return t&&t["services.coinify.screen.doneId"]},set:function(t){this.$store.commit("exchange/updateMeta",{"services.coinify.screen.doneId":t})}},store:function(){return this.$store.state.exchange[this.mode]},paymentMethod:function(){return this.$store.state["partner-selector"].paymentMethod},amount:{get:function(){return this.store.amount},set:function(t){this.$store.commit("exchange/amount",{mode:this.mode,value:t})}},mode:function(){return this.$route.params.mode||"buy"},rate:function(){return this.$store.getters["exchange/rate"](this.mode)},modeFormatted:function(){return Object(c.q)(this.mode)},to:{get:function(){return this.$store.state.exchange[this.mode].destination},set:function(t){this.$store.commit("exchange/destination",{mode:this.mode,value:t})}},serviceName:function(){return this.$route.params.name||this.$store.state.exchange[this.mode].service},serviceParams:function(){return{medium:this.$store.state["partner-selector"].medium}},service:Object(c.i)("service"),currencies:function(){return{USD:{symbol:"$",scale:2}}},from:{get:function(){return this.$store.state.exchange[this.mode].source},set:function(t){this.$store.commit("exchange/source",{mode:this.mode,value:t})}},completionIcon:function(){return"coinify"==this.serviceName?"loading":"complete"},userActions:function(){return this.result.detailsUrl?[{type:"browser-url",title:"Order Details",style:"block",url:this.result.detailsUrl}]:null},metaScreen:function(){return this.result&&this.result.meta&&this.result.meta.screen},serviceScreen:function(){return this.result&&"screen"==this.result.type?this.result:this.metaScreen?this.metaScreen:!(!this.quote||"screen"!=this.quote.type)&&this.quote},iframe:function(){return!(!this.quote||"iframe"!=this.quote.type)&&this.quote},expired:function(){if(this.quote&&this.quote.expires)return new Date(this.quote.expires)<this.now}},methods:{flowFinished:function(){this.fetchQuote(),this.flow=null},close:s.c,clear:function(){this.fetchQuote(),this.result=null},serviceScreenAction:function(){var t=i()(regeneratorRuntime.mark(function t(e){var r,n,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("quote"!=e.type){t.next=4;break}this.override=e.params,t.next=13;break;case 4:return t.next=6,this.service.performAction(e);case 6:if(r=t.sent,n=r.result,!(a=r.error)){t.next=11;break}throw a;case 11:return this.result=n,t.abrupt("return",!0);case 13:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),beforeAction:function(t){this._tempDoneScreenId=this.screenId},performAction:function(){var t=i()(regeneratorRuntime.mark(function t(e){var r,n,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.service.performAction(e);case 2:r=t.sent,n=r.result,a=r.error,"screen"==n.type?this.successScreen=n:n&&(this.result=n),a&&(this.error=a);case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),afterAction:function(){var t=i()(regeneratorRuntime.mark(function t(e){var r,n,a,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.doneScreenId=this._tempDoneScreenId,t.next=3,Object(s.g)();case 3:if(r=t.sent,n=r.app_platform||(navigator.userAgent.match(/android/i)?"android":"ios"),a=(r.app_version||"").split(".").map(Number),console.log("PLATFORM ".concat(n," VERSION ").concat(a)),!("android"!=n||a.length&&a[0]>=4)){t.next=12;break}if(!(o=e.then)){t.next=12;break}return t.next=12,this.performAction(o);case 12:!1!==e.fetchAfter&&this.fetchQuote();case 13:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),fetchQuote:function(){var t=i()(regeneratorRuntime.mark(function t(){var e,r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.fetchingQuote){t.next=2;break}return t.abrupt("return");case 2:if(this.amount&&this.amount.currency){t.next=4;break}return t.abrupt("return");case 4:return this.result=null,this.quote=null,this.error=null,this.fetchingQuote=!0,t.prev=8,t.next=11,this.service.quote(a()({partner:this.serviceName,mode:this.mode},this.serviceParams,{amount:this.amount,to:this.to,from:this.from,rate:this.rate,paymentMethod:this.paymentMethod},this.override));case 11:e=t.sent,r=e.result,(n=e.error)&&-32001===n.code?this.flow=n.prerequisites[0].split("/").reduce(function(t,e){return t+Object(c.q)(e)},""):n?this.error=n:this.quote=r,t.next=21;break;case 17:t.prev=17,t.t0=t.catch(8),this.fetchingQuote=!1,this.error=t.t0;case 21:this.fetchingQuote=!1;case 22:case"end":return t.stop()}},t,this,[[8,17]])}));return function(){return t.apply(this,arguments)}}(),partnerMessage:function(){var t=i()(regeneratorRuntime.mark(function t(e){var r,n,a,o,i,u,l,f,d,m,p,h,v;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.context,n=e.event,a=Object(c.g)(this.quote,"meta.mode"),o=Object(c.g)(this.quote,"meta.tradeCreated"),i=Object(c.g)(this.quote,"meta.tradePlaced"),l="buy"==a&&n==i,!(u="sell"==a&&n==o)){t.next=18;break}return delete(f=Object(c.g)(this.quote,"meta.cryptoAmount")).scale,d=Object(c.g)(this.quote,"meta.addressRef"),m=Object(c.g)(r,d),p=Object(c.g)(this.quote,"meta.memo"),t.next=14,Object(s.i)({currency:f.currency.toLowerCase(),toAddress:m,toDescription:p,amount:f,transmit:!0});case 14:h=t.sent,h.result,(v=h.error)&&(this.result=this.service.transactionErrorScreen(v).result);case 18:(l||u)&&(Object(c.g)(this.quote,"then")&&this.performAction(Object(c.g)(this.quote,"then")),this.quote=this.result);case 19:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),confirm:function(){var t=i()(regeneratorRuntime.mark(function t(){var e,r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.$event("exchange.quote.execute",{serviceName:this.service.slug,mode:this.mode}),t.next=3,this.service.execute(this.quote);case 3:if(e=t.sent,r=e.result,n=e.error,!r||n){t.next=11;break}this.result=r,this.error=null,t.next=12;break;case 11:return t.abrupt("return",{error:n});case 12:r.meta||this.$router.push("/order-history");case 13:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),cancel:function(){var t=i()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.confirming=!1;case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),acceptTOS:function(t){this.tos=t}}},C=(r(642),Object(f.a)(q,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("portal",{attrs:{to:"toolbar-button-left"}},[t.quote&&t.iframe?r("toolbar-button",{staticClass:"back",on:{click:function(e){t.$router.push("/exchange/"+t.mode+"/quotes")}}},[r("icon",{attrs:{name:"arrow-left"}}),t._v(" Offers\n    ")],1):t._e()],1),t._v(" "),t.successScreen?r("service-screen",{attrs:{screen:t.successScreen}}):t.amount?t.quote&&t.iframe?r("partner-iframe",{attrs:{src:t.quote.src,message:"message",widgetPerms:t.quote.permissions},on:{message:t.partnerMessage}}):t.flow?r("div",[t.flowComponent?r(t.flowComponent,{tag:"component",attrs:{service:t.service},on:{done:t.flowFinished}}):t._e()],1):r("loader",{staticClass:"quote-result",attrs:{data:t.quote,error:t.error,retry:t.fetchQuote}},[t.serviceScreen?r("service-screen",{attrs:{screen:t.serviceScreen,click:t.serviceScreenAction},on:{"before-action":t.beforeAction,"after-action":t.afterAction}}):t.quote&&t.quote.execute?r("div",{staticClass:"confirm"},[r("portal",{attrs:{to:"mobile-title"}},[r("span",{staticClass:"buy-btc-title"},[t._v(t._s(t.$t("exchange.title.confirm-"+t.mode)))])]),t._v(" "),r("checkpoint",{attrs:{name:"exchange.quote.preview",args:{serviceName:t.serviceName,mode:t.serviceParams&&t.serviceParams.mode}}}),t._v(" "),t.quote?r("confirm-quote",{staticClass:"confirm-quote",attrs:{quote:t.quote,service:t.service,mode:t.mode},on:{update:t.acceptTOS}}):t._e(),t._v(" "),"trade"===t.serviceName?r("legal-disclaimer",{attrs:{service:t.serviceName}}):t._e(),t._v(" "),"flow"==t.quote.execute.type?r("butter-button",{staticClass:"button",on:{click:function(e){t.flow=t.quote.execute.name}}},[t._v("\n        "+t._s(t.quote.execute.title)+"\n      ")]):t.expired&&!t.fetchingQuote?r("butter-button",{staticClass:"button",on:{click:t.fetchQuote}},[r("span",[t._v("Refresh Quote")])]):r("stateful-button",{attrs:{"button-style":"butter",click:t.confirm,disabled:!t.tos}},[r("span",[t._v(t._s(t.$t("general.button.confirm-and-buy",{mode:t.modeFormatted})))])])],1):r("div",[t._v("\n      "+t._s(t.$t("buy.quote.error"))+"\n    ")])],1):r("content-screen",[r("icon",{staticClass:"cross",attrs:{slot:"graphic",name:"cross"},slot:"graphic"}),t._v(" "),r("h1",[t._v("No Amount Specified")]),t._v(" "),r("nuxt-link",{attrs:{to:"/exchange/"+t.$route.params.mode}},[t._v("Enter an Amount")])],1)],1)},[],!1,null,"81256fa8",null));C.options.__file="index.vue";e.default=C.exports},455:function(t,e,r){var n=r(467);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(7).default)("c3fc143a",n,!0,{})},461:function(t,e,r){"use strict";var n=r(3),a=r.n(n);r(28);e.a={props:["width","height","src","rootElement"],functional:!0,render:function(t,e){var r={height:e.props.height,width:e.props.width},n=e.props.src;return t(e.props.rootElement||"svg",{attrs:a()({},n&&n.$,r)},function t(e,r){if(!r)return[];var n=[];if("string"!=typeof r&&"_"in r)return r._;for(var o in r)if(o.match(/^\d+$/))n.push(r[o]);else if("$"!==o&&"_"!==o)for(var i in r[o]){var s=r[o][i],c=a()({},s&&s.$);n.push(e(o,{attrs:c},t(e,s)))}return n}(t,n).concat(e.children||[]))}}},466:function(t,e,r){"use strict";var n=r(455);r.n(n).a},467:function(t,e,r){var n=r(17);(t.exports=r(6)(!1)).push([t.i,"@font-face{font-family:Circular-Pro-Book;src:url("+n(r(8))+");src:url("+n(r(8))+'?#iefix) format("embedded-opentype"),url('+n(r(18))+') format("woff2"),url('+n(r(19))+') format("woff");font-weight:400;font-style:normal}@font-face{font-family:Circular-Pro-Bold;src:url('+n(r(9))+");src:url("+n(r(9))+'?#iefix) format("embedded-opentype"),url('+n(r(20))+') format("woff2"),url('+n(r(21))+') format("woff");font-weight:400;font-style:normal}@-webkit-keyframes autofill-data-v-1f09f9d7{to{color:#666;background:transparent}}.svg-header[data-v-1f09f9d7]{width:50%;max-width:132px}.shield[data-v-1f09f9d7]{width:98px;height:108px;display:block}.limit[data-v-1f09f9d7]{margin:40px auto 0;width:200px;height:118px;align-self:center}.checkmark[data-v-1f09f9d7]{width:71px;height:50px}.checkmark svg[data-v-1f09f9d7]{fill:none}.cross[data-v-1f09f9d7]{width:71px;height:71px}.exchange[data-v-1f09f9d7]{width:165px;height:75px}.exchange svg[data-v-1f09f9d7]{fill:none}h1[data-v-1f09f9d7]{font:24px/32px Circular-Pro-Book,Roboto,BlinkMacSystemFont,-apple-system,Segoe UI,sans-serif;margin-top:20px}.message[data-v-1f09f9d7]{padding:40px}.info .message[data-v-1f09f9d7]{font-size:14px;line-height:20px;padding:0}.loading-wrapper[data-v-1f09f9d7]{background:#5b6dee;border-radius:50%;width:160px;height:160px;margin:40px auto;position:relative;display:flex;justify-content:center;align-items:center;font-size:24px}.loading-wrapper span[data-v-1f09f9d7]{margin:0 10px}.complete .checkmark[data-v-1f09f9d7]{width:144px;height:144px}',""])},473:function(t,e,r){"use strict";r(12);var n=r(1),a=r.n(n),o=r(3),i=r.n(o),s=(r(27),r(15)),c=r(14),u=r(461),l={props:{screen:{type:Object},click:{type:Function}},components:{InlineSvg:u.a},watch:{screen:{immediate:!0,deep:!0,handler:function(){var t=this.screen&&this.screen.event;t&&this.$event(t.name,i()({},t.args))}}},methods:{handler:function(){var t=a()(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$emit(s.b,e),this.$emit(s.e,e),this.$emit("action",{action:e,partner:this.screen.partner});try{e.event&&this.$event(e.event.name,i()({},e.event.args))}catch(t){this.$report(t)}if(r=!1,"function"!=typeof this.click){t.next=10;break}return t.next=8,this.click(e);case 8:t.t0=t.sent,r=!1!==t.t0;case 10:if(!r){t.next=13;break}t.next=27;break;case 13:if("browser-url"!=e.type){t.next=18;break}return t.next=16,Object(c.b)(e);case 16:t.next=27;break;case 18:if("navigate"!=e.type){t.next=22;break}this.$router.push(e.url),t.next=27;break;case 22:if("close"!=e.type){t.next=26;break}Object(c.c)(),t.next=27;break;case 26:throw new Error('ServiceScreen Unsupported Action Type "'.concat(e.type,'"'));case 27:this.$emit(s.a,e);case 28:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},f=(r(466),r(0)),d=Object(f.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("content-screen",{attrs:{scroll:!1}},[r("div",{class:t.screen.screenType,attrs:{slot:"graphic"},slot:"graphic"},["loading"==t.screen.screenType?r("loading-dots",{staticClass:"loading-dots"}):t._e(),t._v(" "),"svg-header"==t.screen.screenType?r("inline-svg",{attrs:{src:t.screen.svg}}):t._e(),t._v(" "),"complete"==t.screen.screenType?r("icon",{staticClass:"checkmark",attrs:{name:"checkmark-alt"}}):t._e(),t._v(" "),"shield"==t.screen.screenType?r("icon",{staticClass:"shield",attrs:{name:"shield"}}):t._e(),t._v(" "),"exchange"==t.screen.screenType?r("icon",{staticClass:"exchange",attrs:{name:"exchange"}}):t._e(),t._v(" "),"error"==t.screen.screenType?r("icon",{staticClass:"cross",attrs:{name:"cross"}}):t._e()],1),t._v(" "),t.screen.title?r("h1",[t._v(t._s(t.screen.title))]):t._e(),t._v(" "),t.screen.message?r("div",{staticClass:"message",domProps:{innerHTML:t._s(t.screen.message)}}):t._e(),t._v(" "),t._l(t.screen.userActions,function(e,n){return r("div",{key:n,attrs:{slot:"actions"},slot:"actions"},[r("butter-button",{attrs:{secondary:"secondary"==e.style,disabled:e.require&&!e.validated},on:{click:function(r){if(r.target!==r.currentTarget)return null;t.handler(e)}}},[t._v(t._s(e.title))])],1)})],2)},[],!1,null,"1f09f9d7",null);d.options.__file="ServiceScreen.vue";e.a=d.exports},506:function(t,e,r){var n={"./CoinifyRegister":[487,0,3],"./CoinifyRegister.vue":[487,0,3],"./WyreRegister":[488,4],"./WyreRegister.vue":[488,4]};function a(t){var e=n[t];return e?Promise.all(e.slice(1).map(r.e)).then(function(){var t=e[0];return r(t)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}a.keys=function(){return Object.keys(n)},a.id=506,t.exports=a},510:function(t,e,r){var n=r(637);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(7).default)("0dacb08f",n,!0,{})},511:function(t,e,r){var n=r(639);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(7).default)("905751a0",n,!0,{})},512:function(t,e,r){var n=r(641);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(7).default)("4fc6d8f8",n,!0,{})},513:function(t,e,r){var n=r(643);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(7).default)("d30937de",n,!0,{})},636:function(t,e,r){"use strict";var n=r(510);r.n(n).a},637:function(t,e,r){var n=r(17);(t.exports=r(6)(!1)).push([t.i,"@font-face{font-family:Circular-Pro-Book;src:url("+n(r(8))+");src:url("+n(r(8))+'?#iefix) format("embedded-opentype"),url('+n(r(18))+') format("woff2"),url('+n(r(19))+') format("woff");font-weight:400;font-style:normal}@font-face{font-family:Circular-Pro-Bold;src:url('+n(r(9))+");src:url("+n(r(9))+'?#iefix) format("embedded-opentype"),url('+n(r(20))+') format("woff2"),url('+n(r(21))+') format("woff");font-weight:400;font-style:normal}@-webkit-keyframes autofill-data-v-27cbe452{to{color:#666;background:transparent}}.line-item[data-v-27cbe452]{display:flex;flex-direction:row;align-items:center;height:47.96px;color:#fff;font-size:16px;padding:0 22px;border-bottom:1px solid #211f3f}.line-item .value[data-v-27cbe452]{font-family:Circular-Pro-Bold,Roboto,BlinkMacSystemFont,-apple-system,Segoe UI,sans-serif;flex:1;text-align:right;color:#fff}.line-item .label[data-v-27cbe452]{color:#cbced0}.line-item-text[data-v-27cbe452]{height:auto}.line-item.promotion+.line-item[data-v-27cbe452]{border-bottom:1px solid #242341;border-top:0;font-size:14px;align-items:flex-start;padding-bottom:22px;height:auto}.line-item.promotion[data-v-27cbe452]{border-top:1px solid #242341;border-bottom:0;align-items:flex-end;padding-top:22px;height:auto}.line-item.promotion .label[data-v-27cbe452],.line-item.promotion .line-item-currency[data-v-27cbe452],.line-item.promotion .value[data-v-27cbe452]{background:-webkit-gradient(linear,left top,right top,from(#ff5193),to(#f29500));-webkit-background-clip:text;-webkit-text-fill-color:transparent}.line-item.promotion-inactive .value[data-v-27cbe452]{color:hsla(0,0%,100%,.3);background:transparent;-webkit-background-clip:none;-webkit-text-fill-color:currentColor}.line-item-currency[data-v-27cbe452] .ticker{margin-left:5px}',""])},638:function(t,e,r){"use strict";var n=r(511);r.n(n).a},639:function(t,e,r){var n=r(17);(t.exports=r(6)(!1)).push([t.i,"@font-face{font-family:Circular-Pro-Book;src:url("+n(r(8))+");src:url("+n(r(8))+'?#iefix) format("embedded-opentype"),url('+n(r(18))+') format("woff2"),url('+n(r(19))+') format("woff");font-weight:400;font-style:normal}@font-face{font-family:Circular-Pro-Bold;src:url('+n(r(9))+");src:url("+n(r(9))+'?#iefix) format("embedded-opentype"),url('+n(r(20))+') format("woff2"),url('+n(r(21))+') format("woff");font-weight:400;font-style:normal}@-webkit-keyframes autofill-data-v-61cb305c{to{color:#666;background:transparent}}.confirm-quote[data-v-61cb305c]{display:flex;flex-direction:column;flex-grow:1;flex-shrink:0}.confirm-quote .icon[data-v-61cb305c]{width:48px;height:48px;display:flex;align-items:center;justify-content:center;border-radius:4px;align-self:center;margin-bottom:10px}.confirm-quote .icon svg[data-v-61cb305c]{max-width:24px;max-height:24px;width:100%;height:100%}.confirm-quote[data-v-61cb305c] .currency-conversion-title{padding:0;justify-content:flex-end;background:transparent}.confirm-quote[data-v-61cb305c] .currency-conversion-title span{font-size:inherit}.legal[data-v-61cb305c]{padding:22px;flex-grow:2}.legal span.legal-text[data-v-61cb305c]{margin-left:5.5px}.legallabel[data-v-61cb305c]{display:flex;align-items:center}.legal label[data-v-61cb305c] label{margin-right:19.998px}.amounts[data-v-61cb305c]{padding:22px 22px 44px;text-align:center}.amounts .col[data-v-61cb305c]{display:flex;flex-direction:column}.amounts .description[data-v-61cb305c]{margin-top:11px;font-size:14px;color:#cbced0}.amounts .sub-text[data-v-61cb305c]{color:#cbced0;margin-bottom:5.5px;font-size:14px}.amounts .main-amount[data-v-61cb305c]{display:block;font-size:32px}.amounts .main-amount .amount[data-v-61cb305c]{font-size:12px!important;color:red}.amounts .main-amount[data-v-61cb305c] .ticker{font-size:12px;color:#cbced0;margin-left:5px}.details[data-v-61cb305c]{padding:0}.footer[data-v-61cb305c]{padding:11px 22px;font-size:14px}.footer a[data-v-61cb305c]{text-decoration:underline}.next-button[data-v-61cb305c]{box-sizing:border-box;margin:11px;width:auto}.standard-modal[data-v-61cb305c]{padding-bottom:0}.standard-modal[data-v-61cb305c] .v--modal-top-right{z-index:1}.standard-modal .close[data-v-61cb305c]{color:#000;padding:0;margin-top:calc(env(safe-area-inset-top) + 18px)}.standard-modal .close .icon[data-v-61cb305c]{margin:0}.standard-modal .close .icon svg[data-v-61cb305c]{max-width:16px;max-height:16px}.standard-modal[data-v-61cb305c] .v--modal{display:flex;flex-flow:column;margin:0;min-height:100%;border-top:solid #141233}.standard-modal .content[data-v-61cb305c]{color:#a4abb3;height:75%;overflow:auto;webkit-overflow-scrolling:touch}.standard-modal .title[data-v-61cb305c]{font-size:20px;margin:11px 0;color:#000}.standard-modal .close-modal[data-v-61cb305c]{background:#141233;color:#fff;justify-content:center;align-items:center;display:flex;flex-grow:1;margin:0 -22px -22px;flex-basis:25%;padding:env(safe-area-inset-bottom) 0}',""])},640:function(t,e,r){"use strict";var n=r(512);r.n(n).a},641:function(t,e,r){var n=r(17);(t.exports=r(6)(!1)).push([t.i,"@font-face{font-family:Circular-Pro-Book;src:url("+n(r(8))+");src:url("+n(r(8))+'?#iefix) format("embedded-opentype"),url('+n(r(18))+') format("woff2"),url('+n(r(19))+') format("woff");font-weight:400;font-style:normal}@font-face{font-family:Circular-Pro-Bold;src:url('+n(r(9))+");src:url("+n(r(9))+'?#iefix) format("embedded-opentype"),url('+n(r(20))+') format("woff2"),url('+n(r(21))+') format("woff");font-weight:400;font-style:normal}@-webkit-keyframes autofill-data-v-351e1cc4{to{color:#666;background:transparent}}.disclaimer[data-v-351e1cc4]{padding:22px 22px 10px;font-size:14px;opacity:.5}',""])},642:function(t,e,r){"use strict";var n=r(513);r.n(n).a},643:function(t,e,r){var n=r(17);(t.exports=r(6)(!1)).push([t.i,"@font-face{font-family:Circular-Pro-Book;src:url("+n(r(8))+");src:url("+n(r(8))+'?#iefix) format("embedded-opentype"),url('+n(r(18))+') format("woff2"),url('+n(r(19))+') format("woff");font-weight:400;font-style:normal}@font-face{font-family:Circular-Pro-Bold;src:url('+n(r(9))+");src:url("+n(r(9))+'?#iefix) format("embedded-opentype"),url('+n(r(20))+') format("woff2"),url('+n(r(21))+') format("woff");font-weight:400;font-style:normal}@-webkit-keyframes autofill-data-v-81256fa8{to{color:#666;background:transparent}}.cross[data-v-81256fa8]{width:71px;height:71px}.container[data-v-81256fa8]{position:absolute;top:0;bottom:0;left:0;right:0;border-top:none}.quote-result[data-v-81256fa8]{height:100%}.transaction-status[data-v-81256fa8]{justify-content:center;align-items:center;display:flex;flex-direction:column}.transaction-status>*[data-v-81256fa8]{margin:11px 0}.transaction-status .button-container[data-v-81256fa8]{max-width:220px}.transaction-status .icon[data-v-81256fa8]{margin:44px 0;width:154px;height:154px;padding:44px;background-color:#29abe2;border-radius:220px}.buy-or-confirm[data-v-81256fa8]{margin-top:11px;display:flex;flex-direction:column;align-items:center;position:absolute;top:0;bottom:0;left:0;right:0;padding-bottom:env(safe-area-inset-bottom)}.destination[data-v-81256fa8],.source[data-v-81256fa8]{background-color:rgba(0,0,0,.1);padding:66px;color:#a3a8ae}.destination.active[data-v-81256fa8],.source.active[data-v-81256fa8]{color:#000}.amount-primary[data-v-81256fa8]{transition:all .5s}.content[data-v-81256fa8]{width:100%;flex-grow:1;flex-shrink:1;position:relative}.page[data-v-81256fa8]{display:flex;flex-direction:column;position:absolute;top:0;bottom:0;left:0;right:0}.numpad[data-v-81256fa8]{flex-grow:1;flex-shrink:1;width:100;position:relative}.buy .amount-primary[data-v-81256fa8]{padding-top:11px}.confirm[data-v-81256fa8]{position:absolute;top:0;bottom:0;left:0;right:0;overflow-y:scroll;-webkit-overflow-scrolling:touch;flex:1;display:flex;flex-direction:column}.details[data-v-81256fa8]{width:100%;flex-grow:1;flex-shrink:1;padding:22px}.amounts[data-v-81256fa8]{display:flex;flex-direction:row;text-align:center;justify-content:center}.amounts>*[data-v-81256fa8]{padding:22px}.completed[data-v-81256fa8]{color:rgba(0,0,0,.5)}.complete-checkmark[data-v-81256fa8]{width:144px;height:144px}.button[data-v-81256fa8]{margin:7.9992px}.button-container[data-v-81256fa8]{width:100%;flex-shrink:0}.button-container .stateful-button[data-v-81256fa8]{justify-content:center;display:flex;align-items:center}.button-container .icon[data-v-81256fa8]{width:20px;height:auto}',""])}}]);
//# sourceMappingURL=b3cbc606fe2389f9b0d2.js.map