(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-goods-nav-goods-nav"],{"0ffe":function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"uni-title",class:{sticky:t.sticky},style:{top:t.stickyTop+"px"}},[t.type?i("v-uni-view",{staticClass:"uni-title__head"},[i("v-uni-view",{staticClass:"uni-title__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-title__content"},[i("v-uni-text",{staticClass:"uni-title__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?i("v-uni-text",{staticClass:"uni-title__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},o=[];i.d(n,"a",function(){return e}),i.d(n,"b",function(){return o})},"11d2":function(t,n,i){"use strict";var e=i("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e(i("8b13")),a=e(i("7b3f")),r={components:{uniSection:o.default,uniGoodsNav:a.default},data:function(){return{options:[{icon:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/kefu.png",text:"客服"},{icon:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png",text:"店铺"},{icon:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/carts.png",text:"购物车",info:2}],buttonGroup:[{text:"加入购物车",backgroundColor:"#ff0000",color:"#fff"},{text:"立即购买",backgroundColor:"#ffa200",color:"#fff"}]}},onLoad:function(){},methods:{onClick:function(t){uni.showToast({title:"点击".concat(t.content.text),icon:"none"})},buttonClick:function(t){console.log(t),this.options[2].info++}}};n.default=r},"1e0d":function(t,n,i){"use strict";var e=i("d9e9"),o=i.n(e);o.a},"1fa3":function(t,n,i){"use strict";var e=i("8375"),o=i.n(e);o.a},"26a1":function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("v-uni-text",{staticClass:"example-info"},[t._v("uni-goods-nav 组件主要用于电商类应用底部导航，可自定义加入购物车，购买等操作")]),i("uni-section",{attrs:{title:"基础用法",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-goods-nav")],1),i("uni-section",{attrs:{title:"自定义用法",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-goods-nav",{attrs:{fill:!0,options:t.options,"button-group":t.buttonGroup},on:{click:function(n){n=t.$handleEvent(n),t.onClick(n)},buttonClick:function(n){n=t.$handleEvent(n),t.buttonClick(n)}}})],1),i("v-uni-view",{staticClass:"goods-carts"},[i("uni-goods-nav",{attrs:{options:t.options,"button-group":t.buttonGroup}})],1)],1)},o=[];i.d(n,"a",function(){return e}),i.d(n,"b",function(){return o})},4135:function(t,n,i){i("b041");n=t.exports=i("2350")(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\n\nuni-page-body[data-v-5cf05838]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-5cf05838]{font-size:%?28?%;line-height:inherit}.example[data-v-5cf05838]{padding:0 %?30?% %?30?%}.example-info[data-v-5cf05838]{padding:%?30?%;color:#3b4144;background:#fff}.example-body[data-v-5cf05838]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:%?14?%;background-color:#fff}\n.example[data-v-5cf05838]{padding:0 %?30?%}.example-info[data-v-5cf05838]{\n\tdisplay:block;\n\tpadding:%?30?%;color:#3b4144;background-color:#fff;font-size:%?30?%}.example-info-text[data-v-5cf05838]{font-size:%?28?%;line-height:%?36?%}.example-body[data-v-5cf05838]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:%?30?%;background-color:#fff}.word-btn-white[data-v-5cf05838]{font-size:18px;color:#fff}.word-btn[data-v-5cf05838]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-5cf05838]{background-color:#4ca2ff}.example-body[data-v-5cf05838]{padding:0;\n\tdisplay:block\n\t}.goods-carts[data-v-5cf05838]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:fixed;left:0;right:0;bottom:0}body.?%PAGE?%[data-v-5cf05838]{background-color:#efeff4}",""])},"68a7":function(t,n,i){"use strict";var e=i("f25c"),o=i.n(e);o.a},"73e8":function(t,n,i){n=t.exports=i("2350")(!1),n.push([t.i,".uni-title[data-v-583ce025]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\tmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:5px 10px;height:50px;background-color:#fdfdfd;border-bottom-color:#f5f5f5;border-bottom-style:solid;border-bottom-width:1px;font-weight:400}.sticky[data-v-583ce025]{position:-webkit-sticky;position:sticky\n\t\t/* top: 44px;\n */}.uni-title__head[data-v-583ce025]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-583ce025]{height:15px;background-color:#ccc;border-radius:5px;width:3px}.circle[data-v-583ce025]{width:8px;height:8px;\n\t\t/* border-radius: 50px;\n */border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#ccc}.uni-title__content[data-v-583ce025]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#464e52}.uni-title__content-title[data-v-583ce025]{font-size:15px;color:#464e52}.distraction[data-v-583ce025]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-title__content-sub[data-v-583ce025]{font-size:12px;color:#999}",""])},"7b3f":function(t,n,i){"use strict";i.r(n);var e=i("a779"),o=i("e21e");for(var a in o)"default"!==a&&function(t){i.d(n,t,function(){return o[t]})}(a);i("1e0d");var r=i("2877"),c=Object(r["a"])(o["default"],e["a"],e["b"],!1,null,"0a41f51a",null);n["default"]=c.exports},8375:function(t,n,i){var e=i("4135");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("5c525bf6",e,!0,{sourceMap:!1,shadowMode:!1})},"872d":function(t,n,i){"use strict";i.r(n);var e=i("11d2"),o=i.n(e);for(var a in e)"default"!==a&&function(t){i.d(n,t,function(){return e[t]})}(a);n["default"]=o.a},"882a":function(t,n,i){"use strict";i.r(n);var e=i("26a1"),o=i("872d");for(var a in o)"default"!==a&&function(t){i.d(n,t,function(){return o[t]})}(a);i("1fa3");var r=i("2877"),c=Object(r["a"])(o["default"],e["a"],e["b"],!1,null,"5cf05838",null);n["default"]=c.exports},"8b13":function(t,n,i){"use strict";i.r(n);var e=i("0ffe"),o=i("e10a");for(var a in o)"default"!==a&&function(t){i.d(n,t,function(){return o[t]})}(a);i("68a7");var r=i("2877"),c=Object(r["a"])(o["default"],e["a"],e["b"],!1,null,"583ce025",null);n["default"]=c.exports},a779:function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"uni-goods-nav"},[i("v-uni-view",{staticClass:"uni-tab__seat"}),i("v-uni-view",{staticClass:"uni-tab__cart-box flex"},[i("v-uni-view",{staticClass:"flex uni-tab__cart-sub-box"},t._l(t.options,function(n,e){return i("v-uni-view",{key:e,staticClass:"flex uni-tab__cart-button-left uni-tab__shop-cart",on:{click:function(i){i=t.$handleEvent(i),t.onClick(e,n)}}},[i("v-uni-view",{staticClass:"uni-tab__icon"},[i("v-uni-image",{staticClass:"image",attrs:{src:n.icon,mode:"widthFix"}})],1),i("v-uni-text",{staticClass:"uni-tab__text"},[t._v(t._s(n.text))]),i("v-uni-view",{staticClass:"flex uni-tab__dot-box"},[n.info?i("v-uni-text",{staticClass:"uni-tab__dot ",class:{"uni-tab__dots":n.info>9}},[t._v(t._s(n.info))]):t._e()],1)],1)}),1),i("v-uni-view",{staticClass:"flex uni-tab__cart-sub-box ",class:{"uni-tab__right":t.fill}},t._l(t.buttonGroup,function(n,e){return i("v-uni-view",{key:e,staticClass:"flex uni-tab__cart-button-right",style:{backgroundColor:n.backgroundColor,color:n.color},on:{click:function(i){i=t.$handleEvent(i),t.buttonClick(e,n)}}},[i("v-uni-text",{staticClass:"uni-tab__cart-button-right-text"},[t._v(t._s(n.text))])],1)}),1)],1)],1)},o=[];i.d(n,"a",function(){return e}),i.d(n,"b",function(){return o})},b420:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"UniGoodsNav",props:{options:{type:Array,default:function(){return[{icon:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png",text:"店铺"},{icon:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/carts.png",text:"购物车"}]}},buttonGroup:{type:Array,default:function(){return[{text:"加入购物车",backgroundColor:"#ff0000",color:"#fff"},{text:"立即购买",backgroundColor:"#ffa200",color:"#fff"}]}},fill:{type:Boolean,default:!1}},methods:{onClick:function(t,n){this.$emit("click",{index:t,content:n})},buttonClick:function(t,n){uni.report&&uni.report(n.text,n.text),this.$emit("buttonClick",{index:t,content:n})}}};n.default=e},b8f1:function(t,n,i){n=t.exports=i("2350")(!1),n.push([t.i,".flex[data-v-0a41f51a]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-goods-nav[data-v-0a41f51a]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-tab__cart-box[data-v-0a41f51a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?100?%;background-color:#fff;z-index:900}.uni-tab__cart-sub-box[data-v-0a41f51a]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-tab__right[data-v-0a41f51a]{margin:5px 0;margin-right:10px;border-radius:100px;overflow:hidden}.uni-tab__cart-button-left[data-v-0a41f51a]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-tab__icon[data-v-0a41f51a]{width:%?40?%;height:%?40?%}.image[data-v-0a41f51a]{width:20px;height:20px}.uni-tab__text[data-v-0a41f51a]{margin-top:%?5?%;font-size:%?24?%;color:#666}.uni-tab__cart-button-right[data-v-0a41f51a]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\n\t\t-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-tab__cart-button-right-text[data-v-0a41f51a]{font-size:%?24?%;color:#fff}.uni-tab__cart-button-right[data-v-0a41f51a]:active{opacity:.7}.uni-tab__dot-box[data-v-0a41f51a]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\n\t\tposition:absolute;right:%?25?%;top:%?5?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center\n\t\t/* width: 0;\n */\n\t\t/* height: 0;\n */}.uni-tab__dot[data-v-0a41f51a]{\n\t\t/* width: 30rpx;\n */\n\t\t/* height: 30rpx;\n */padding:0 %?8?%;line-height:%?30?%;color:#fff;text-align:center;font-size:12px;background-color:red;border-radius:%?30?%}.uni-tab__dots[data-v-0a41f51a]{padding:0 %?8?%;\n\t\t/* width: auto;\n */border-radius:%?30?%}.uni-tab__color-y[data-v-0a41f51a]{background-color:#ffa200}.uni-tab__color-r[data-v-0a41f51a]{background-color:red}",""])},d9e9:function(t,n,i){var e=i("b8f1");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("632d5c93",e,!0,{sourceMap:!1,shadowMode:!1})},dc40:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,i("c5f6");var e={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""},sticky:{type:Boolean,default:!1},stickyTop:{type:Number,default:0}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};n.default=e},e10a:function(t,n,i){"use strict";i.r(n);var e=i("dc40"),o=i.n(e);for(var a in e)"default"!==a&&function(t){i.d(n,t,function(){return e[t]})}(a);n["default"]=o.a},e21e:function(t,n,i){"use strict";i.r(n);var e=i("b420"),o=i.n(e);for(var a in e)"default"!==a&&function(t){i.d(n,t,function(){return e[t]})}(a);n["default"]=o.a},f25c:function(t,n,i){var e=i("73e8");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("2d0e48c0",e,!0,{sourceMap:!1,shadowMode:!1})}}]);