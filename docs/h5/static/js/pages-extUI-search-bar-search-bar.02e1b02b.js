(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-search-bar-search-bar"],{"070c":function(t,e,n){var i=n("59c4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("35837466",i,!0,{sourceMap:!1,shadowMode:!1})},"0ffe":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-title",class:{sticky:t.sticky},style:{top:t.stickyTop+"px"}},[t.type?n("v-uni-view",{staticClass:"uni-title__head"},[n("v-uni-view",{staticClass:"uni-title__head-tag",class:t.type})],1):t._e(),n("v-uni-view",{staticClass:"uni-title__content"},[n("v-uni-text",{staticClass:"uni-title__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?n("v-uni-text",{staticClass:"uni-title__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"3bbe":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c5f6");var a=i(n("bbd2")),o={name:"UniSearchBar",components:{uniIcons:a.default},props:{placeholder:{type:String,default:"搜索"},radius:{type:[Number,String],default:5},clearButton:{type:String,default:"auto"}},data:function(){return{show:!1,showSync:!1,searchVal:""}},watch:{searchVal:function(){this.$emit("input",{value:this.searchVal})}},methods:{searchClick:function(){var t=this;this.searchVal="",this.show=!0,this.$nextTick(function(){t.showSync=!0})},clear:function(){this.searchVal=""},cancel:function(){this.$emit("cancel",{value:this.searchVal}),this.searchVal="",this.show=!1,this.showSync=!1,uni.hideKeyboard()},confirm:function(){uni.hideKeyboard(),this.$emit("confirm",{value:this.searchVal})}}};e.default=o},"490c":function(t,e,n){"use strict";n.r(e);var i=n("3bbe"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"59c4":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".uni-searchbar[data-v-c637ddb0]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;position:relative;padding:8px 0}.uni-searchbar__box[data-v-c637ddb0]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\toverflow:hidden;position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:32px;border-width:1px;border-style:solid;border-color:#c8c7cc;border-radius:5px}.uni-searchbar__box-icon-search[data-v-c637ddb0]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;width:32px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#c8c7cc}.uni-searchbar__box-search-input[data-v-c637ddb0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:14px;color:#333}.uni-searchbar__box-icon-clear[data-v-c637ddb0]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:24px;padding:0 5px 0 5px}.uni-searchbar__text-placeholder[data-v-c637ddb0]{font-size:14px;color:#ccc;margin-left:5px}.uni-searchbar__cancel[data-v-c637ddb0]{padding-left:10px;line-height:32px;font-size:14px;color:#333}",""])},"63c9":function(t,e,n){"use strict";n.r(e);var i=n("d660"),a=n("e35a");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("cc47");var c=n("2877"),r=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,"64b7dceb",null);e["default"]=r.exports},"68a7":function(t,e,n){"use strict";var i=n("f25c"),a=n.n(i);a.a},"6bd3":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("bd4d")),o=i(n("8b13")),c={components:{uniSearchBar:a.default,uniSection:o.default},data:function(){return{searchVal:""}},methods:{search:function(t){uni.showToast({title:"搜索："+t.value,icon:"none"})},input:function(t){this.searchVal=t.value},cancel:function(t){uni.showToast({title:"点击取消，输入值为："+t.value,icon:"none"})}},onBackPress:function(){}};e.default=c},"6fa9":function(t,e,n){var i=n("fad5");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("ab42a59c",i,!0,{sourceMap:!1,shadowMode:!1})},"73e8":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".uni-title[data-v-583ce025]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\tmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:5px 10px;height:50px;background-color:#fdfdfd;border-bottom-color:#f5f5f5;border-bottom-style:solid;border-bottom-width:1px;font-weight:400}.sticky[data-v-583ce025]{position:-webkit-sticky;position:sticky\n\t\t/* top: 44px;\n */}.uni-title__head[data-v-583ce025]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-583ce025]{height:15px;background-color:#ccc;border-radius:5px;width:3px}.circle[data-v-583ce025]{width:8px;height:8px;\n\t\t/* border-radius: 50px;\n */border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#ccc}.uni-title__content[data-v-583ce025]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#464e52}.uni-title__content-title[data-v-583ce025]{font-size:15px;color:#464e52}.distraction[data-v-583ce025]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-title__content-sub[data-v-583ce025]{font-size:12px;color:#999}",""])},"8b13":function(t,e,n){"use strict";n.r(e);var i=n("0ffe"),a=n("e10a");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("68a7");var c=n("2877"),r=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,"583ce025",null);e["default"]=r.exports},"9da6":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-searchbar"},[n("v-uni-view",{staticClass:"uni-searchbar__box",style:{borderRadius:t.radius+"px"},on:{click:function(e){e=t.$handleEvent(e),t.searchClick(e)}}},[n("uni-icons",{staticClass:"uni-searchbar__box-icon-search",attrs:{color:"#999999",size:"18",type:"search"}}),t.show?n("v-uni-input",{staticClass:"uni-searchbar__box-search-input",attrs:{focus:t.showSync,placeholder:t.placeholder,"confirm-type":"search","placeholder-style":"color:#cccccc",type:"text"},on:{confirm:function(e){e=t.$handleEvent(e),t.confirm(e)}},model:{value:t.searchVal,callback:function(e){t.searchVal=e},expression:"searchVal"}}):n("v-uni-text",{staticClass:"uni-searchbar__text-placeholder"},[t._v(t._s(t.placeholder))]),t.show&&("always"===t.clearButton||"auto"===t.clearButton&&""!==t.searchVal)?n("v-uni-view",{staticClass:"uni-searchbar__box-icon-clear"},[n("uni-icons",{attrs:{color:"#999999",size:"24",type:"clear"}})],1):t._e()],1),t.show?n("v-uni-text",{staticClass:"uni-searchbar__cancel",on:{click:function(e){e=t.$handleEvent(e),t.cancel(e)}}},[t._v("取消")]):t._e()],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},b7eb:function(t,e,n){"use strict";var i=n("070c"),a=n.n(i);a.a},bd4d:function(t,e,n){"use strict";n.r(e);var i=n("9da6"),a=n("490c");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("b7eb");var c=n("2877"),r=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,"c637ddb0",null);e["default"]=r.exports},cc47:function(t,e,n){"use strict";var i=n("6fa9"),a=n.n(i);a.a},d660:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("uni-section",{attrs:{title:"基本用法",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-search-bar",{on:{confirm:function(e){e=t.$handleEvent(e),t.search(e)},input:function(e){e=t.$handleEvent(e),t.input(e)},cancel:function(e){e=t.$handleEvent(e),t.cancel(e)}}}),n("v-uni-view",{staticClass:"search-result"},[n("v-uni-text",{staticClass:"search-result-text"},[t._v("当前输入为："+t._s(t.searchVal))])],1)],1),n("uni-section",{attrs:{title:"自定义样式",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-search-bar",{attrs:{placeholder:"自定义placeholder"},on:{confirm:function(e){e=t.$handleEvent(e),t.search(e)}}}),n("uni-search-bar",{attrs:{radius:"100",placeholder:"自定义圆角"},on:{confirm:function(e){e=t.$handleEvent(e),t.search(e)}}})],1),n("uni-section",{attrs:{title:"控制清除按钮",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-search-bar",{attrs:{radius:"100",clearButton:"always"},on:{confirm:function(e){e=t.$handleEvent(e),t.search(e)}}}),n("uni-search-bar",{attrs:{radius:"100",clearButton:"auto"},on:{confirm:function(e){e=t.$handleEvent(e),t.search(e)}}}),n("uni-search-bar",{attrs:{radius:"100",clearButton:"no"},on:{confirm:function(e){e=t.$handleEvent(e),t.search(e)}}})],1)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},dc40:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c5f6");var i={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""},sticky:{type:Boolean,default:!1},stickyTop:{type:Number,default:0}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},e10a:function(t,e,n){"use strict";n.r(e);var i=n("dc40"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},e35a:function(t,e,n){"use strict";n.r(e);var i=n("6bd3"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},f25c:function(t,e,n){var i=n("73e8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("2d0e48c0",i,!0,{sourceMap:!1,shadowMode:!1})},fad5:function(t,e,n){n("b041");e=t.exports=n("2350")(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\n\nuni-page-body[data-v-64b7dceb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-64b7dceb]{font-size:%?28?%;line-height:inherit}.example[data-v-64b7dceb]{padding:0 %?30?% %?30?%}.example-info[data-v-64b7dceb]{padding:%?30?%;color:#3b4144;background:#fff}.example-body[data-v-64b7dceb]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:%?14?%;background-color:#fff}\n.example[data-v-64b7dceb]{padding:0 %?30?%}.example-info[data-v-64b7dceb]{\n\tdisplay:block;\n\tpadding:%?30?%;color:#3b4144;background-color:#fff;font-size:%?30?%}.example-info-text[data-v-64b7dceb]{font-size:%?28?%;line-height:%?36?%}.example-body[data-v-64b7dceb]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:%?30?%;background-color:#fff}.word-btn-white[data-v-64b7dceb]{font-size:18px;color:#fff}.word-btn[data-v-64b7dceb]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-64b7dceb]{background-color:#4ca2ff}.search-result[data-v-64b7dceb]{margin-top:10px;margin-bottom:20px;text-align:center}.search-result-text[data-v-64b7dceb]{text-align:center;font-size:14px}.example-body[data-v-64b7dceb]{\n\tdisplay:block\n\t}body.?%PAGE?%[data-v-64b7dceb]{background-color:#efeff4}",""])}}]);