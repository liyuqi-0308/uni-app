(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-swiper-dot-swiper-dot"],{1569:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".uni-swiper__warp[data-v-26fc974e]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:relative;overflow:hidden}.uni-swiper__dots-box[data-v-26fc974e]{position:absolute;bottom:10px;left:0;right:0;\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-swiper__dots-item[data-v-26fc974e]{width:8px;border-radius:100px;margin-left:6px;background-color:rgba(0,0,0,.4)\n\t\t/* transition: width 0.2s linear;  不要取消注释，不然会不能变色\n */}.uni-swiper__dots-item[data-v-26fc974e]:first-child{margin:0}.uni-swiper__dots-default[data-v-26fc974e]{border-radius:100px}.uni-swiper__dots-long[data-v-26fc974e]{border-radius:50px}.uni-swiper__dots-bar[data-v-26fc974e]{border-radius:50px}.uni-swiper__dots-nav[data-v-26fc974e]{bottom:0;height:40px;\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:rgba(0,0,0,.2)}.uni-swiper__dots-nav-item[data-v-26fc974e]{\n\t\t/* overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; */font-size:%?28?%;color:#fff;margin:0 15px}.uni-swiper__dots-indexes[data-v-26fc974e]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t\n\t\t/* flex: 1;\n */-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-swiper__dots-indexes-text[data-v-26fc974e]{color:#fff;font-size:%?24?%}",""])},"1b99":function(t,e,i){"use strict";i.r(e);var n=i("5ac0"),o=i("6b36");for(var r in o)"default"!==r&&function(t){i.d(e,t,function(){return o[t]})}(r);i("2ddd");var a=i("2877"),d=Object(a["a"])(o["default"],n["a"],n["b"],!1,null,"b9a66524",null);e["default"]=d.exports},"2ddd":function(t,e,i){"use strict";var n=i("9ebd"),o=i.n(n);o.a},4412:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("5176"));i("c5f6");var r={name:"UniSwiperDot",props:{info:{type:Array,default:function(){return[]}},current:{type:Number,default:0},dotsStyles:{type:Object,default:function(){return{}}},mode:{type:String,default:"default"},field:{type:String,default:""}},data:function(){return{dots:{width:8,height:8,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}},watch:{dotsStyles:function(t){this.dots=(0,o.default)(this.dots,this.dotsStyles)},mode:function(t){"indexes"===t?(this.dots.width=20,this.dots.height=20):(this.dots.width=8,this.dots.height=8)}},created:function(){"indexes"===this.mode&&(this.dots.width=20,this.dots.height=20),this.dots=(0,o.default)(this.dots,this.dotsStyles)}};e.default=r},"534b":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("7615")),r=n(i("e926")),a={components:{uniSection:o.default,uniSwiperDot:r.default},data:function(){return{info:[{colorClass:"uni-bg-red",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg",content:"内容 A"},{colorClass:"uni-bg-green",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg",content:"内容 B"},{colorClass:"uni-bg-blue",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg",content:"内容 C"}],dotStyle:[{backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",color:"#fff",selectedBackgroundColor:"rgba(0, 0, 0, .9)",selectedBorder:"1px rgba(0, 0, 0, .9) solid"},{backgroundColor:"rgba(255, 90, 95,0.3)",border:"1px rgba(255, 90, 95,0.3) solid",color:"#fff",selectedBackgroundColor:"rgba(255, 90, 95,0.9)",selectedBorder:"1px rgba(255, 90, 95,0.9) solid"},{backgroundColor:"rgba(83, 200, 249,0.3)",border:"1px rgba(83, 200, 249,0.3) solid",color:"#fff",selectedBackgroundColor:"rgba(83, 200, 249,0.9)",selectedBorder:"1px rgba(83, 200, 249,0.9) solid"}],modeIndex:-1,styleIndex:-1,current:0,mode:"default",dotsStyles:{}}},onLoad:function(){},methods:{change:function(t){this.current=t.detail.current},selectStyle:function(t){this.dotsStyles=this.dotStyle[t],this.styleIndex=t},selectMode:function(t,e){this.mode=t,this.modeIndex=e,this.styleIndex=-1,this.dotsStyles=this.dotStyle[0]}}};e.default=a},"5ac0":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("uni-swiper-dot",{attrs:{info:t.info,current:t.current,mode:t.mode,"dots-styles":t.dotsStyles,field:"content"}},[i("v-uni-swiper",{staticClass:"swiper-box",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},t._l(t.info,function(t,e){return i("v-uni-swiper-item",{key:e},[i("v-uni-view",{staticClass:"swiper-item",class:t.colorClass},[i("v-uni-image",{staticClass:"image",attrs:{src:t.url,mode:"aspectFill"}})],1)],1)}),1)],1),i("uni-section",{attrs:{title:"模式选择",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("v-uni-view",{staticClass:"example-body-item",class:{active:0===t.modeIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectMode("default",0)}}},[i("v-uni-text",{staticClass:"example-body-item-text"},[t._v("default")])],1),i("v-uni-view",{staticClass:"example-body-item",class:{active:1===t.modeIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectMode("dot",1)}}},[i("v-uni-text",{staticClass:"example-body-item-text"},[t._v("dot")])],1),i("v-uni-view",{staticClass:"example-body-item",class:{active:2===t.modeIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectMode("round",2)}}},[i("v-uni-text",{staticClass:"example-body-item-text"},[t._v("round")])],1),i("v-uni-view",{staticClass:"example-body-item",class:{active:3===t.modeIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectMode("nav",3)}}},[i("v-uni-text",{staticClass:"example-body-item-text"},[t._v("nav")])],1),i("v-uni-view",{staticClass:"example-body-item",class:{active:4===t.modeIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectMode("indexes",4)}}},[i("v-uni-text",{staticClass:"example-body-item-text"},[t._v("indexes")])],1)],1),i("uni-section",{attrs:{title:"颜色样式选择",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},["nav"!==t.mode?t._l(t.dotStyle,function(e,n){return i("v-uni-view",{key:n,staticClass:"example-body-item",class:{active:t.styleIndex===n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectStyle(n)}}},[i("v-uni-view",{staticClass:"example-body-dots",style:{"background-color":e.selectedBackgroundColor,border:e.selectedBorder}}),i("v-uni-view",{staticClass:"example-body-dots",style:{"background-color":e.backgroundColor,border:e.border}}),i("v-uni-view",{staticClass:"example-body-dots",style:{"background-color":e.backgroundColor,border:e.border}})],1)}):t._e(),"nav"===t.mode?t._l(t.dotStyle,function(e,n){return i("v-uni-view",{key:n,staticClass:"example-body-item",class:{active:t.styleIndex===n},style:{"background-color":e.selectedBackgroundColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectStyle(n)}}},[i("v-uni-text",{staticClass:"example-body-item-text",style:{color:e.color}},[t._v("内容")])],1)}):t._e()],2)],1)},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},6876:function(t,e,i){var n=i("1569");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("1f073576",n,!0,{sourceMap:!1,shadowMode:!1})},"6b36":function(t,e,i){"use strict";i.r(e);var n=i("534b"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);e["default"]=o.a},7615:function(t,e,i){"use strict";i.r(e);var n=i("c0d0"),o=i("f817");for(var r in o)"default"!==r&&function(t){i.d(e,t,function(){return o[t]})}(r);i("cd70");var a=i("2877"),d=Object(a["a"])(o["default"],n["a"],n["b"],!1,null,"072405d0",null);e["default"]=d.exports},"81d9":function(t,e,i){i("b041");e=t.exports=i("2350")(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\n\nuni-page-body[data-v-b9a66524]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-b9a66524]{font-size:14px;line-height:inherit}.example[data-v-b9a66524]{padding:0 15px 15px}.example-info[data-v-b9a66524]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-b9a66524]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-b9a66524]{padding:0 15px}.example-info[data-v-b9a66524]{\n\tdisplay:block;\n\tpadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-b9a66524]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-b9a66524]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-b9a66524]{font-size:18px;color:#fff}.word-btn[data-v-b9a66524]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-b9a66524]{background-color:#4ca2ff}.swiper-box[data-v-b9a66524]{height:200px}.swiper-item[data-v-b9a66524]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#999;color:#fff}.image[data-v-b9a66524]{width:%?750?%}.uni-bg-red[data-v-b9a66524]{background-color:#ff5a5f}.uni-bg-green[data-v-b9a66524]{background-color:#09bb07}.uni-bg-blue[data-v-b9a66524]{background-color:#007aff}.example-body[data-v-b9a66524]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;padding:%?20?%}.example-body-item[data-v-b9a66524]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:%?15?%;padding:%?15?%;height:%?60?%;\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;padding:0 %?15?%;\n\t-webkit-box-flex:1;-webkit-flex:1;flex:1;border-color:#e5e5e5;border-style:solid;border-width:1px;border-radius:5px}.example-body-item-text[data-v-b9a66524]{font-size:%?28?%;color:#333}.example-body-dots[data-v-b9a66524]{width:%?16?%;height:%?16?%;border-radius:50px;background-color:#333;margin-left:%?10?%}.active[data-v-b9a66524]{border-style:solid;border-color:#007aff;border-width:1px}body.?%PAGE?%[data-v-b9a66524]{background-color:#efeff4}",""])},"9ebd":function(t,e,i){var n=i("81d9");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("5ce3529a",n,!0,{sourceMap:!1,shadowMode:!1})},ad85:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},bf80:function(t,e,i){"use strict";i.r(e);var n=i("4412"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);e["default"]=o.a},bfcc:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-swiper__warp"},[t._t("default"),"default"===t.mode?i("v-uni-view",{key:"default",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-swiper__dots-item uni-swiper__dots-bar",style:{width:(n===t.current?2*t.dots.width:t.dots.width)+"px",height:t.dots.width/3+"px","background-color":n!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,"border-radius":"0px"}})}),1):t._e(),"dot"===t.mode?i("v-uni-view",{key:"dot",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-swiper__dots-item",style:{width:t.dots.width+"px",height:t.dots.height+"px","background-color":n!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:n!==t.current?t.dots.border:t.dots.selectedBorder}})}),1):t._e(),"round"===t.mode?i("v-uni-view",{key:"round",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-swiper__dots-item ",class:[n===t.current&&"uni-swiper__dots-long"],style:{width:(n===t.current?3*t.dots.width:t.dots.width)+"px",height:t.dots.height+"px","background-color":n!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:n!==t.current?t.dots.border:t.dots.selectedBorder}})}),1):t._e(),"nav"===t.mode?i("v-uni-view",{key:"nav",staticClass:"uni-swiper__dots-box uni-swiper__dots-nav",style:{"background-color":t.dotsStyles.backgroundColor,bottom:"0"}},[i("v-uni-text",{staticClass:"uni-swiper__dots-nav-item",style:{color:t.dotsStyles.color}},[t._v(t._s(t.current+1+"/"+t.info.length+" "+t.info[t.current][t.field]))])],1):t._e(),"indexes"===t.mode?i("v-uni-view",{key:"indexes",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-swiper__dots-item uni-swiper__dots-indexes",style:{width:t.dots.width+"px",height:t.dots.height+"px",color:n===t.current?t.dots.selectedColor:t.dots.color,"background-color":n!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:n!==t.current?t.dots.border:t.dots.selectedBorder}},[i("v-uni-text",{staticClass:"uni-swiper__dots-indexes-text"},[t._v(t._s(n+1))])],1)}),1):t._e()],2)},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},c0d0:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section"},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-section__content"},[i("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?i("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},c729:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'.uni-section[data-v-072405d0]{position:relative;\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\tmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\tfont-weight:400}\n\n.uni-section[data-v-072405d0]:after{position:absolute;bottom:0;right:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}\n\n.uni-section__head[data-v-072405d0]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-072405d0]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-072405d0]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-072405d0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-072405d0]{font-size:%?28?%;color:#333}.distraction[data-v-072405d0]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-072405d0]{font-size:%?24?%;color:#999}',""])},ca2a:function(t,e,i){"use strict";var n=i("6876"),o=i.n(n);o.a},ca71:function(t,e,i){var n=i("c729");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("91834106",n,!0,{sourceMap:!1,shadowMode:!1})},cd70:function(t,e,i){"use strict";var n=i("ca71"),o=i.n(n);o.a},e926:function(t,e,i){"use strict";i.r(e);var n=i("bfcc"),o=i("bf80");for(var r in o)"default"!==r&&function(t){i.d(e,t,function(){return o[t]})}(r);i("ca2a");var a=i("2877"),d=Object(a["a"])(o["default"],n["a"],n["b"],!1,null,"26fc974e",null);e["default"]=d.exports},f817:function(t,e,i){"use strict";i.r(e);var n=i("ad85"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);e["default"]=o.a}}]);