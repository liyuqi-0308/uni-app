(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-grid-grid"],{"0d46":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"uni-grid-wrap"},[e("v-uni-view",{ref:"uni-grid",staticClass:"uni-grid",class:{"uni-grid--border":t.showBorder},style:{"border-left-style":"solid","border-left-color":t.borderColor,"border-left-width":t.showBorder?"1px":0},attrs:{id:t.elId}},[t._t("default")],2)],1)},a=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return a})},"105d":function(t,i,e){var n=e("64c9");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("2f964b58",n,!0,{sourceMap:!1,shadowMode:!1})},"27bc":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.text?e("v-uni-text",{staticClass:"uni-badge",class:t.inverted?"uni-badge--"+t.type+" uni-badge--"+t.size+" uni-badge--"+t.type+"-inverted":"uni-badge--"+t.type+" uni-badge--"+t.size,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick()}}},[t._v(t._s(t.text))]):t._e()},a=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return a})},"2a08":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".uni-grid-wrap[data-v-38c0af85]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\n\t\twidth:100%\n\t\t}.uni-grid[data-v-38c0af85]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t\n\t\t/* flex: 1;\n */-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap}.uni-grid--border[data-v-38c0af85]{border-left-color:#e5e5e5;border-left-style:solid;border-left-width:1px}",""])},"2d6e":function(t,i,e){"use strict";var n=e("957f"),a=e.n(n);a.a},"33e8":function(t,i,e){"use strict";e.r(i);var n=e("0d46"),a=e("d9c0");for(var r in a)"default"!==r&&function(t){e.d(i,t,function(){return a[t]})}(r);e("2d6e");var o=e("2877"),c=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"38c0af85",null);i["default"]=c.exports},"3e7e":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("ac6a"),e("c5f6");var n={name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:function(){return{column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}},created:function(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy:function(){var t=this;this.grid.children.forEach(function(i,e){i===t&&t.grid.children.splice(e,1)})},methods:{_onClick:function(){this.grid.change({detail:{index:this.index}})}}};i.default=n},"433d":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"warp"},[e("v-uni-text",{staticClass:"example-info"},[t._v("宫格组件主要使用场景如：商品推荐列表、热门内容等")]),e("uni-section",{attrs:{title:"默认样式（3列）",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("uni-grid",{attrs:{column:3,highlight:!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},t._l(t.list,function(i,n){return e("uni-grid-item",{key:n,attrs:{index:n}},[e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-image",{staticClass:"image",attrs:{src:i.url,mode:"aspectFill"}}),e("v-uni-text",{staticClass:"text"},[t._v(t._s(i.text))])],1)],1)}),1)],1),e("uni-section",{attrs:{title:"滑动视图",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":!0}},[e("v-uni-swiper-item",[e("uni-grid",{attrs:{column:3,highlight:!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},t._l(t.list,function(i,n){return e("uni-grid-item",{key:n,attrs:{index:n}},[e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-image",{staticClass:"image",attrs:{src:i.url,mode:"aspectFill"}}),e("v-uni-text",{staticClass:"text"},[t._v(t._s(i.text))])],1)],1)}),1)],1),e("v-uni-swiper-item",[e("uni-grid",{attrs:{column:3,highlight:!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},t._l(t.list,function(i,n){return e("uni-grid-item",{key:n,attrs:{index:n}},[e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-image",{staticClass:"image",attrs:{src:i.url,mode:"aspectFill"}}),e("v-uni-text",{staticClass:"text"},[t._v(t._s(i.text))])],1)],1)}),1)],1),e("v-uni-swiper-item",[e("uni-grid",{attrs:{column:3,highlight:!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},t._l(t.list,function(i,n){return e("uni-grid-item",{key:n,attrs:{index:n}},[e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-image",{staticClass:"image",attrs:{src:i.url,mode:"aspectFill"}}),e("v-uni-text",{staticClass:"text"},[t._v(t._s(i.text))])],1)],1)}),1)],1)],1)],1),e("uni-section",{attrs:{title:"动态加载",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[0!==t.dynamicList.length?e("v-uni-view",{staticClass:"grid-dynamic-box"},[e("uni-grid",{attrs:{column:3,highlight:!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},t._l(t.dynamicList,function(i,n){return e("uni-grid-item",{key:n,attrs:{index:n}},[e("v-uni-view",{staticClass:"grid-item-box",style:{backgroundColor:i.color}},[e("v-uni-image",{staticClass:"image",attrs:{src:i.url,mode:"aspectFill"}}),e("v-uni-text",{staticClass:"text"},[t._v(t._s(i.text))])],1)],1)}),1)],1):t._e(),e("v-uni-button",{attrs:{type:"primary"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.add.apply(void 0,arguments)}}},[t._v("点击添加一个宫格")]),0!==t.dynamicList.length?e("v-uni-button",{staticStyle:{"margin-top":"15px"},attrs:{type:"primary"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.del.apply(void 0,arguments)}}},[t._v("点击删除一个宫格")]):t._e()],1),e("uni-section",{attrs:{title:"无边框带角标（3列）",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("uni-grid",{attrs:{column:3,"show-border":!1,square:!1},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},t._l(t.list,function(i,n){return n<6?e("uni-grid-item",{key:n,attrs:{index:n}},[e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-image",{staticClass:"image",attrs:{src:i.url,mode:"aspectFill"}}),e("v-uni-text",{staticClass:"text"},[t._v(t._s(i.text))]),i.badge?e("v-uni-view",{staticClass:"grid-dot"},[e("uni-badge",{attrs:{text:i.badge,type:i.type}})],1):t._e()],1)],1):t._e()}),1)],1),e("uni-section",{attrs:{title:"矩形宫格（3列）",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("uni-grid",{attrs:{column:3,square:!1,highlight:!1},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},t._l(t.list,function(i,n){return e("uni-grid-item",{key:n,attrs:{index:n}},[e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-image",{staticClass:"image",attrs:{src:i.url,mode:"aspectFill"}}),e("v-uni-text",{staticClass:"text"},[t._v(t._s(i.text))])],1)],1)}),1)],1),e("uni-section",{attrs:{title:"边框颜色（4列 无文字）",type:"line"}}),e("v-uni-view",{staticClass:"example-body"},[e("uni-grid",{attrs:{column:4,"border-color":"#03a9f4"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},[e("uni-grid-item",{attrs:{index:0}},[e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-image",{staticClass:"image",attrs:{src:"/static/c1.png",mode:"aspectFill"}})],1)],1),e("uni-grid-item",{attrs:{index:1}},[e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-image",{staticClass:"image",attrs:{src:"/static/c2.png",mode:"aspectFill"}})],1)],1),e("uni-grid-item",{attrs:{index:2}},[e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-image",{staticClass:"image",attrs:{src:"/static/c3.png",mode:"aspectFill"}})],1)],1),e("uni-grid-item",{attrs:{index:3}},[e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-image",{staticClass:"image",attrs:{src:"/static/c4.png",mode:"aspectFill"}})],1)],1)],1)],1)],1)},a=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return a})},"44ef":function(t,i,e){"use strict";var n=e("9ad0"),a=e.n(n);a.a},"5c83":function(t,i,e){"use strict";e.r(i);var n=e("27bc"),a=e("e607");for(var r in a)"default"!==r&&function(t){e.d(i,t,function(){return a[t]})}(r);e("b96e");var o=e("2877"),c=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"5840fb8c",null);i["default"]=c.exports},6245:function(t,i,e){"use strict";var n=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("7615")),r=n(e("33e8")),o=n(e("cf0d")),c=n(e("5c83")),d={components:{uniSection:a.default,uniGrid:r.default,uniGridItem:o.default,uniBadge:c.default},data:function(){return{dynamicList:[],list:[{url:"/static/c1.png",text:"Grid 1",badge:"0",type:"primary"},{url:"/static/c2.png",text:"Grid 2",badge:"1",type:"success"},{url:"/static/c3.png",text:"Grid 3",badge:"99",type:"warning"},{url:"/static/c4.png",text:"Grid 4",badge:"2",type:"error"},{url:"/static/c5.png",text:"Grid 5"},{url:"/static/c6.png",text:"Grid 6"},{url:"/static/c7.png",text:"Grid 7"},{url:"/static/c8.png",text:"Grid 8"},{url:"/static/c9.png",text:"Grid 9"}]}},methods:{change:function(t){var i=t.detail.index;this.list[i].badge&&this.list[i].badge++,uni.showToast({title:"点击第".concat(i+1,"个宫格"),icon:"none"})},add:function(){this.dynamicList.length<9?this.dynamicList.push({url:"/static/c".concat(this.dynamicList.length+1,".png"),text:"Grid ".concat(this.dynamicList.length+1),color:this.dynamicList.length%2===0?"#f5f5f5":"#fff"}):uni.showToast({title:"最多添加9个",icon:"none"})},del:function(){this.dynamicList.splice(this.dynamicList.length-1,1)}}};i.default=d},"64c9":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".uni-grid-item[data-v-f5d4a3e4]{\n\t\theight:100%;display:-webkit-box;display:-webkit-flex;display:flex\n\t\t}.uni-grid-item__box[data-v-f5d4a3e4]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;width:100%;\n\t\tposition:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column\n\t\t/* justify-content: center;\n */\n\t\t/* align-items: center;\n */}.uni-grid-item--border[data-v-f5d4a3e4]{position:relative;border-bottom-color:#e5e5e5;border-bottom-style:solid;border-bottom-width:1px;border-right-color:#e5e5e5;border-right-style:solid;border-right-width:1px}.uni-grid-item--border-top[data-v-f5d4a3e4]{border-top-color:#e5e5e5;border-top-style:solid;border-top-width:1px;\n\t\theight:100%;box-sizing:border-box\n\t\t}.uni-highlight[data-v-f5d4a3e4]:active{background-color:#f1f1f1}",""])},"69bc":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".uni-badge[data-v-5840fb8c]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?40?%;line-height:%?40?%;color:#333;border-radius:100px;background-color:#f1f1f1;background-color:initial;text-align:center;font-family:Helvetica Neue,Helvetica,sans-serif;font-size:12px;padding:0 6px}.uni-badge--inverted[data-v-5840fb8c]{padding:0 5px 0 0;color:#f1f1f1}.uni-badge--default[data-v-5840fb8c]{color:#333;background-color:#f1f1f1}.uni-badge--default-inverted[data-v-5840fb8c]{color:#999;background-color:initial}.uni-badge--primary[data-v-5840fb8c]{color:#fff;background-color:#007aff}.uni-badge--primary-inverted[data-v-5840fb8c]{color:#007aff;background-color:initial}.uni-badge--success[data-v-5840fb8c]{color:#fff;background-color:#4cd964}.uni-badge--success-inverted[data-v-5840fb8c]{color:#4cd964;background-color:initial}.uni-badge--warning[data-v-5840fb8c]{color:#fff;background-color:#f0ad4e}.uni-badge--warning-inverted[data-v-5840fb8c]{color:#f0ad4e;background-color:initial}.uni-badge--error[data-v-5840fb8c]{color:#fff;background-color:#dd524d}.uni-badge--error-inverted[data-v-5840fb8c]{color:#dd524d;background-color:initial}.uni-badge--small[data-v-5840fb8c]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center}",""])},"74db":function(t,i,e){"use strict";var n=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("e814"));e("ac6a"),e("6b54"),e("c5f6");var r={name:"UniGrid",props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#e5e5e5"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide:function(){return{grid:this}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:t,width:0}},created:function(){this.children=[]},mounted:function(){this.init()},methods:{init:function(){var t=this;setTimeout(function(){t._getSize(function(i){t.children.forEach(function(t,e){t.width=i})})},50)},change:function(t){this.$emit("change",t)},_getSize:function(t){var i=this;uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function(e){i.width=(0,a.default)((e[0].width-1)/i.column)+"px",t(i.width)})}}};i.default=r},7615:function(t,i,e){"use strict";e.r(i);var n=e("c0d0"),a=e("f817");for(var r in a)"default"!==r&&function(t){e.d(i,t,function(){return a[t]})}(r);e("cd70");var o=e("2877"),c=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"072405d0",null);i["default"]=c.exports},7766:function(t,i,e){"use strict";e.r(i);var n=e("6245"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,function(){return n[t]})}(r);i["default"]=a.a},"8bd9":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.width?e("v-uni-view",{staticClass:"uni-grid-item",style:"width:"+t.width+";"+(t.square?"height:"+t.width:"")},[e("v-uni-view",{staticClass:"uni-grid-item__box",class:{"uni-grid-item--border":t.showBorder,"uni-grid-item--border-top":t.showBorder&&t.index<t.column,"uni-highlight":t.highlight},style:{"border-right-color":t.borderColor,"border-bottom-color":t.borderColor,"border-top-color":t.borderColor},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t._onClick.apply(void 0,arguments)}}},[t._t("default")],2)],1):t._e()},a=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return a})},"957f":function(t,i,e){var n=e("2a08");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("70f178f0",n,!0,{sourceMap:!1,shadowMode:!1})},"9ad0":function(t,i,e){var n=e("dab4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("29ebcbee",n,!0,{sourceMap:!1,shadowMode:!1})},a5c7:function(t,i,e){var n=e("69bc");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("ba7d4d32",n,!0,{sourceMap:!1,shadowMode:!1})},ad85:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};i.default=n},b627:function(t,i,e){"use strict";var n=e("105d"),a=e.n(n);a.a},b96e:function(t,i,e){"use strict";var n=e("a5c7"),a=e.n(n);a.a},bcfa:function(t,i,e){"use strict";e.r(i);var n=e("433d"),a=e("7766");for(var r in a)"default"!==r&&function(t){e.d(i,t,function(){return a[t]})}(r);e("44ef");var o=e("2877"),c=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"1ccd6277",null);i["default"]=c.exports},c0d0:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"uni-section"},[t.type?e("v-uni-view",{staticClass:"uni-section__head"},[e("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),e("v-uni-view",{staticClass:"uni-section__content"},[e("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?e("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},a=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return a})},c729:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'.uni-section[data-v-072405d0]{position:relative;\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\tmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\tfont-weight:400}\n\n.uni-section[data-v-072405d0]:after{position:absolute;bottom:0;right:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}\n\n.uni-section__head[data-v-072405d0]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-072405d0]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-072405d0]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-072405d0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-072405d0]{font-size:%?28?%;color:#333}.distraction[data-v-072405d0]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-072405d0]{font-size:%?24?%;color:#999}',""])},ca71:function(t,i,e){var n=e("c729");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("91834106",n,!0,{sourceMap:!1,shadowMode:!1})},cd70:function(t,i,e){"use strict";var n=e("ca71"),a=e.n(n);a.a},cf0d:function(t,i,e){"use strict";e.r(i);var n=e("8bd9"),a=e("d36e");for(var r in a)"default"!==r&&function(t){e.d(i,t,function(){return a[t]})}(r);e("b627");var o=e("2877"),c=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"f5d4a3e4",null);i["default"]=c.exports},d36e:function(t,i,e){"use strict";e.r(i);var n=e("3e7e"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,function(){return n[t]})}(r);i["default"]=a.a},d876:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("c5f6");var n={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{}},methods:{onClick:function(){this.$emit("click")}}};i.default=n},d9c0:function(t,i,e){"use strict";e.r(i);var n=e("74db"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,function(){return n[t]})}(r);i["default"]=a.a},dab4:function(t,i,e){e("b041");i=t.exports=e("2350")(!1),i.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t/* 头条小程序组件内不能引入字体 */\n\t\n\tuni-page-body[data-v-1ccd6277]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-1ccd6277]{font-size:14px;line-height:inherit}.example[data-v-1ccd6277]{padding:0 15px 15px}.example-info[data-v-1ccd6277]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-1ccd6277]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n\t.example[data-v-1ccd6277]{padding:0 15px}.example-info[data-v-1ccd6277]{\n\t\tdisplay:block;\n\t\tpadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-1ccd6277]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-1ccd6277]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-1ccd6277]{font-size:18px;color:#fff}.word-btn[data-v-1ccd6277]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-1ccd6277]{background-color:#4ca2ff}.image[data-v-1ccd6277]{width:%?50?%;height:%?50?%}.text[data-v-1ccd6277]{font-size:%?26?%;margin-top:%?10?%}.example-body[data-v-1ccd6277]{\n\t\tdisplay:block\n\t\t}.grid-dynamic-box[data-v-1ccd6277]{margin-bottom:15px}.grid-item-box[data-v-1ccd6277]{-webkit-box-flex:1;-webkit-flex:1;flex:1;\n\t\t/* position: relative;\n */\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:15px 0}.grid-dot[data-v-1ccd6277]{position:absolute;top:5px;right:15px}.swiper[data-v-1ccd6277]{height:420px}body.?%PAGE?%[data-v-1ccd6277]{background-color:#efeff4}",""])},e607:function(t,i,e){"use strict";e.r(i);var n=e("d876"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,function(){return n[t]})}(r);i["default"]=a.a},f817:function(t,i,e){"use strict";e.r(i);var n=e("ad85"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,function(){return n[t]})}(r);i["default"]=a.a}}]);