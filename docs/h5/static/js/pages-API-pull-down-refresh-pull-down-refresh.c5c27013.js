(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-pull-down-refresh-pull-down-refresh"],{"01aa":function(t,a,o){a=t.exports=o("2350")(!1),a.push([t.i,".text[data-v-5f1f4c96]{margin:%?16?% 0;width:100%;background-color:#fff;height:%?120?%;line-height:%?120?%;text-align:center;color:#555;border-radius:%?8?%}",""])},"0a1a":function(t,a,o){"use strict";o.r(a);var n=o("9ac8"),e=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(a,t,function(){return n[t]})}(i);a["default"]=e.a},"37ac":function(t,a,o){var n=o("01aa");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=o("4f06").default;e("480d4df4",n,!0,{sourceMap:!1,shadowMode:!1})},"4d38":function(t,a,o){"use strict";var n=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("v-uni-view",[o("page-head",{attrs:{title:t.title}}),o("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t._l(t.data,function(a,n){return o("v-uni-view",{key:n,staticClass:"text"},[t._v("list - "+t._s(a))])}),t.showLoadMore?o("v-uni-view",{staticClass:"uni-loadmore"},[t._v(t._s(t.loadMoreText))]):t._e()],2)],1)},e=[];o.d(a,"a",function(){return n}),o.d(a,"b",function(){return e})},8861:function(t,a,o){"use strict";o.r(a);var n=o("4d38"),e=o("0a1a");for(var i in e)"default"!==i&&function(t){o.d(a,t,function(){return e[t]})}(i);o("cce6");var s=o("2877"),r=Object(s["a"])(e["default"],n["a"],n["b"],!1,null,"5f1f4c96",null);a["default"]=r.exports},"9ac8":function(t,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{title:"下拉刷新 + 加载更多",data:[],loadMoreText:"加载中...",showLoadMore:!1,max:0}},onLoad:function(){this.initData()},onUnload:function(){this.max=0,this.data=[],this.loadMoreText="加载更多",this.showLoadMore=!1},onReachBottom:function(){var t=this;console.log("onReachBottom"),this.max>40?this.loadMoreText="没有更多数据了!":(this.showLoadMore=!0,setTimeout(function(){t.setListData()},300))},onPullDownRefresh:function(){console.log("onPullDownRefresh"),this.initData()},methods:{initData:function(){var t=this;setTimeout(function(){t.max=0,t.data=[];var a=[];t.max+=10;for(var o=t.max-9;o<t.max+1;o++)a.push(o);t.data=t.data.concat(a),uni.stopPullDownRefresh()},300)},setListData:function(){var t=[];this.max+=10;for(var a=this.max-9;a<this.max+1;a++)t.push(a);this.data=this.data.concat(t)}}};a.default=n},cce6:function(t,a,o){"use strict";var n=o("37ac"),e=o.n(n);e.a}}]);