(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{453:function(r,e,t){"use strict";t.r(e);t(12);var n=t(1),a=t.n(n),u=t(136),o=t(24);t(10),t(2),t(14);e.default={mixins:[u.default],data:function(){return{slug:"simplex",type:"card",supportEmail:"support@simplex.com",estimatedDelivery:"0-1 day"}},methods:{enabled:function(){return!0},getPairMeta:function(){var r=a()(regeneratorRuntime.mark(function r(e){var t,n,a,u,i;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.to,n=e.from,r.next=3,o.a.rpc("simplex/pairMeta",{from:n,to:t});case 3:if(a=r.sent,u=a.result,!(i=a.error)){r.next=8;break}return r.abrupt("return",{error:i});case 8:return r.abrupt("return",{result:u});case 9:case"end":return r.stop()}},r,this)}));return function(e){return r.apply(this,arguments)}}(),history:Object(u.proxyTo)("/exchange/services/simplex/account/history"),limits:function(){var r=a()(regeneratorRuntime.mark(function r(){var e=arguments;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if("sell"!=(e.length>0&&void 0!==e[0]?e[0]:"buy")){r.next=3;break}return r.abrupt("return",null);case 3:return r.abrupt("return",[{amount:{numerator:"20000000",denominator:"100",currency:"USD",symbol:"$"},available:{numerator:"2000000",denominator:"100",currency:"USD",symbol:"$"},start:new Date,end:new Date+864e5},{amount:{numerator:"20000000",denominator:"100",currency:"USD",symbol:"$"},available:{numerator:"20000000",denominator:"100",currency:"USD",symbol:"$"},start:new Date,end:new Date+2592e6}]);case 4:case"end":return r.stop()}},r,this)}));return function(){return r.apply(this,arguments)}}(),limitsStringFor:function(r){return this.$t("exchange.simplex.limits")},subtitleFor:function(r){return"USD"}}}}}]);
//# sourceMappingURL=471e277b52ab681d2a57.js.map