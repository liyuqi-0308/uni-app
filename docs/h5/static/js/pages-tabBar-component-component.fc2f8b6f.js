(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-component-component"],{"424a":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-container"},[n("v-uni-view",{staticClass:"uni-header-logo"},[n("v-uni-image",{staticClass:"uni-header-image",attrs:{src:"/static/componentIndex.png"}})],1),n("v-uni-view",{staticClass:"uni-hello-text"},[n("v-uni-text",{staticClass:"hello-text"},[t._v("uni-app内置组件，展示样式仅供参考，文档详见：")]),n("u-link",{staticClass:"hello-link",attrs:{href:"https://uniapp.dcloud.io/component/",text:"https://uniapp.dcloud.io/component/",inWhiteList:!0}})],1),t._l(t.list,function(e,i){return n("v-uni-view",{key:e.id,staticClass:"uni-panel"},[n("v-uni-view",{staticClass:"uni-panel-h",class:e.open?"uni-panel-h-on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.triggerCollapse(i)}}},[n("v-uni-text",{staticClass:"uni-panel-text"},[t._v(t._s(e.name))]),n("v-uni-text",{staticClass:"uni-panel-icon uni-icon",class:e.open?"uni-panel-icon-on":""},[t._v("")])],1),e.open?n("v-uni-view",{staticClass:"uni-panel-c"},t._l(e.pages,function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-navigate-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goDetailPage(e)}}},[n("v-uni-text",{staticClass:"uni-navigate-text"},[t._v(t._s(e.name?e.name:e))]),n("v-uni-text",{staticClass:"uni-navigate-icon uni-icon"},[t._v("")])],1)}),1):t._e()],1)})],2)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"5dcb":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"uni-page-body[data-v-442f3822]{min-height:100%;height:auto}\r\n\r\n/* 解决头条小程序字体图标不显示问题，因为头条运行时自动插入了span标签，且有全局字体 */\r\n.uni-icon[data-v-442f3822]{font-family:uniicons;font-weight:400}.uni-container[data-v-442f3822]{padding:15px;background-color:#f8f8f8}.uni-header-logo[data-v-442f3822]{padding:15px 15px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?10?%}.uni-header-image[data-v-442f3822]{width:80px;height:80px}.uni-hello-text[data-v-442f3822]{margin-bottom:20px}.hello-text[data-v-442f3822]{color:#7a7e83;font-size:14px;line-height:20px}.hello-link[data-v-442f3822]{color:#7a7e83;font-size:14px;line-height:20px}.uni-panel[data-v-442f3822]{margin-bottom:12px}.uni-panel-h[data-v-442f3822]{background-color:#fff;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:12px}\r\n/*\r\n.uni-panel-h:active {\r\n    background-color: #f8f8f8;\r\n}\r\n */.uni-panel-h-on[data-v-442f3822]{background-color:#f0f0f0}.uni-panel-text[data-v-442f3822]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#000;font-size:14px;font-weight:400}.uni-panel-icon[data-v-442f3822]{margin-left:15px;color:#999;font-size:14px;font-weight:400;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition-duration:0s;transition-duration:0s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.uni-panel-icon-on[data-v-442f3822]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.uni-navigate-item[data-v-442f3822]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;border-top-style:solid;border-top-color:#f0f0f0;border-top-width:1px;padding:12px}.uni-navigate-item[data-v-442f3822]:active{background-color:#f8f8f8}.uni-navigate-text[data-v-442f3822]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#000;font-size:14px;font-weight:400}.uni-navigate-icon[data-v-442f3822]{margin-left:15px;color:#999;font-size:14px;font-weight:400}",""])},7501:function(t,e,n){"use strict";var i=n("b0b8"),a=n.n(i);a.a},b0b8:function(t,e,n){var i=n("5dcb");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("9dd55060",i,!0,{sourceMap:!1,shadowMode:!1})},d7d0:function(t,e,n){"use strict";n.r(e);var i=n("fb50"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},fb50:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("868d")),o={components:{uLink:a.default},data:function(){return{list:[{id:"view",name:"视图容器",open:!1,pages:["view","scroll-view","swiper","movable-view","cover-view"]},{id:"content",name:"基础内容",open:!1,pages:["text","rich-text","progress"]},{id:"form",name:"表单组件",open:!1,pages:["button","checkbox","form","input","label","picker","picker-view","radio","slider","switch","textarea","editor"]},{id:"nav",name:"导航",open:!1,pages:["navigator"]},{id:"media",name:"媒体组件",open:!1,pages:["image","video","audio"]},{id:"map",name:"地图",open:!1,pages:["map"]},{id:"canvas",name:"画布",open:!1,pages:["canvas"]},{id:"web-view",name:"网页",open:!1,pages:["web-view"]}],navigateFlag:!1}},onShareAppMessage:function(){return{title:"欢迎体验uni-app",path:"/pages/tabBar/component/component"}},onNavigationBarButtonTap:function(t){uni.navigateTo({url:"/pages/about/about"})},methods:{triggerCollapse:function(t){if(this.list[t].pages)for(var e=0;e<this.list.length;++e)this.list[e].open=t===e&&!this.list[t].open;else this.goDetailPage(this.list[t].url)},goDetailPage:function(t){var e=this;this.navigateFlag||(this.navigateFlag=!0,"string"===typeof t?uni.navigateTo({url:"/pages/component/"+t+"/"+t}):uni.navigateTo({url:t.url}),setTimeout(function(){e.navigateFlag=!1},200))}}};e.default=o},fea5:function(t,e,n){"use strict";n.r(e);var i=n("424a"),a=n("d7d0");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("7501");var r=n("2877"),s=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"442f3822",null);e["default"]=s.exports}}]);