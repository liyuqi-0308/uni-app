(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-request-payment-request-payment"],{"0f8a":function(t,e,n){var i=n("657c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("2cd032f1",i,!0,{sourceMap:!1,shadowMode:!1})},3487:function(t,e,n){"use strict";n.r(e);var i=n("7cca"),o=n("999d");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("b070");var c=n("2877"),s=Object(c["a"])(o["default"],i["a"],i["b"],!1,null,"13043ff2",null);e["default"]=s.exports},5299:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("795b"));n("96cf");var a=i(n("3b8d")),c={data:function(){return{title:"request-payment",loading:!1,price:1,providerList:[]}},onLoad:function(){},methods:{weixinPay:function(){var t=this;console.log("发起支付"),this.loading=!0,uni.login({success:function(e){console.log("login success",e),uni.request({url:"https://unidemo.dcloud.net.cn/payment/wx/mp?code=".concat(e.code,"&amount=").concat(t.price),success:function(e){if(console.log("pay request success",e),200===e.statusCode)if(0===e.data.ret){console.log("得到接口prepay_id",e.data.payment);var n=e.data.payment;uni.requestPayment({timeStamp:n.timeStamp,nonceStr:n.nonceStr,package:n.package,signType:"MD5",paySign:n.paySign,success:function(t){uni.showToast({title:"感谢您的赞助!"})},fail:function(t){uni.showModal({content:"支付失败,原因为: "+t.errMsg,showCancel:!1})},complete:function(){t.loading=!1}})}else uni.showModal({content:e.data.desc,showCancel:!1});else uni.showModal({content:"支付失败，请重试！",showCancel:!1})},fail:function(e){console.log("fail",e),t.loading=!1,uni.showModal({content:"支付失败,原因为: "+e.errMsg,showCancel:!1})}})},fail:function(e){console.log("fail",e),t.loading=!1,uni.showModal({content:"支付失败,原因为: "+e.errMsg,showCancel:!1})}})},requestPayment:function(){var t=(0,a.default)(regeneratorRuntime.mark(function t(e,n){var i,o=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.providerList[n].loading=!0,t.next=3,this.getOrderInfo(e.id);case 3:if(i=t.sent,console.log("得到订单信息",i),200===i.statusCode){t.next=9;break}return console.log("获得订单信息失败",i),uni.showModal({content:"获得订单信息失败",showCancel:!1}),t.abrupt("return");case 9:uni.requestPayment({provider:e.id,orderInfo:i.data,success:function(t){console.log("success",t),uni.showToast({title:"感谢您的赞助!"})},fail:function(t){console.log("fail",t),uni.showModal({content:"支付失败,原因为: "+t.errMsg,showCancel:!1})},complete:function(){o.providerList[n].loading=!1}});case 10:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),getOrderInfo:function(t){var e="",n="https://demo.dcloud.net.cn/payment/?payid="+t+"&appid="+e+"&total="+this.price;return new o.default(function(t){uni.request({url:n,success:function(e){t(e)},fail:function(e){t(e)}})})},priceChange:function(t){console.log(t.detail.value),this.price=t.detail.value}}};e.default=c},"657c":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".rmbLogo[data-v-13043ff2]{font-size:%?40?%}uni-button[data-v-13043ff2]{background-color:#007aff;color:#fff}.uni-h1.uni-center[data-v-13043ff2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.price[data-v-13043ff2]{border-bottom:1px solid #eee;width:%?200?%;height:%?80?%;padding-bottom:%?4?%}.ipaPayBtn[data-v-13043ff2]{margin-top:%?30?%}",""])},"7cca":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticStyle:{background:"#FFF",padding:"50upx 0"}},[n("v-uni-view",{staticClass:"uni-hello-text uni-center"},[t._v("支付金额")]),n("v-uni-view",{staticClass:"uni-h1 uni-center uni-common-mt"},[n("v-uni-text",{staticClass:"rmbLogo"},[t._v("￥")]),n("v-uni-input",{staticClass:"price",attrs:{type:"digit",value:t.price,maxlength:"4"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.priceChange.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"uni-btn-v uni-common-mt"})],1)],1)},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"999d":function(t,e,n){"use strict";n.r(e);var i=n("5299"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},b070:function(t,e,n){"use strict";var i=n("0f8a"),o=n.n(i);o.a}}]);