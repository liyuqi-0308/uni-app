(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43b88778"],{"0f9f":function(t,e,a){"use strict";a.d(e,"b",function(){return i}),a.d(e,"c",function(){return r}),a.d(e,"a",function(){return s});var n=a("ed08"),i={disabledDate:function(t){return Object(n["a"])(Object(n["d"])(new Date,1),Object(n["d"])(t))},shortcuts:[{text:"本周",onClick:function(t){var e=new Date,a=new Date,n=e.getDay()-1;a.setTime(a.getTime()-864e5*n),t.$emit("pick",[a,e])}},{text:"本月",onClick:function(t){var e=new Date,a=new Date,n=e.getDate();a.setTime(a.getTime()-864e5*(n-1)),t.$emit("pick",[a,e])}},{text:"上个月",onClick:function(t){var e=new Date,a=new Date,n=new Date;a.setMonth(a.getMonth()-1),a.setDate(1),e.setMonth(e.getMonth()-1),e.setDate(new Date(n.getFullYear(),n.getMonth(),0).getDate()),t.$emit("pick",[a,e])}},{text:"本季度",onClick:function(t){var e=new Date,a=new Date,n=a.getMonth(),i=0;n<3?i=n:n<6?i=n-3:n<9?i=n-6:n<12&&(i=n-9),a.setMonth(a.getMonth()-i),a.setDate(1),t.$emit("pick",[a,e])}},{text:"本年",onClick:function(t){var e=new Date,a=new Date(e.getFullYear(),0,1);t.$emit("pick",[a,e])}},{text:"去年",onClick:function(t){var e=new Date,a=new Date(e.getFullYear()-1,0,1);e.setFullYear(e.getFullYear()-1),e.setMonth(11),e.setDate(new Date(a.getFullYear()+1,1,0).getDate()),t.$emit("pick",[a,e])}}]},r={disabledDate:function(t){return Object(n["a"])(Object(n["d"])(new Date),Object(n["d"])(t))},shortcuts:[{text:"本周",onClick:function(t){var e=new Date,a=new Date,n=e.getDay()-1;a.setTime(a.getTime()-864e5*n),e.setDate(e.getDate()-1),a.getTime()>e.getTime()&&(a=e),t.$emit("pick",[a,e])}},{text:"本月",onClick:function(t){var e=new Date,a=new Date,n=e.getDate();a.setTime(a.getTime()-864e5*(n-1)),e.setDate(e.getDate()-1),a.getTime()>e.getTime()&&(a=e),t.$emit("pick",[a,e])}},{text:"上个月",onClick:function(t){var e=new Date,a=new Date,n=new Date;a.setMonth(a.getMonth()-1),a.setDate(1),e.setMonth(e.getMonth()-1),e.setDate(new Date(n.getFullYear(),n.getMonth(),0).getDate()),t.$emit("pick",[a,e])}},{text:"本季度",onClick:function(t){var e=new Date,a=new Date,n=a.getMonth(),i=0;n<3?i=n:n<6?i=n-3:n<9?i=n-6:n<12&&(i=n-9),a.setMonth(a.getMonth()-i),a.setDate(1),e.setDate(e.getDate()-1),t.$emit("pick",[a,e])}},{text:"本年",onClick:function(t){var e=new Date,a=new Date(e.getFullYear(),0,1);e.setDate(e.getDate()-1),t.$emit("pick",[a,e])}},{text:"去年",onClick:function(t){var e=new Date,a=new Date(e.getFullYear()-1,0,1);e.setFullYear(e.getFullYear()-1),e.setMonth(11),e.setDate(new Date(a.getFullYear()+1,1,0).getDate()),t.$emit("pick",[a,e])}}]},s={disabledDate:function(t){return Object(n["a"])(Object(n["d"])(new Date),Object(n["d"])(t))},shortcuts:[{text:"本周",onClick:function(t){var e=new Date,a=new Date,n=e.getDay()-1;a.setTime(a.getTime()-864e5*n),t.$emit("pick",[a,e])}},{text:"本月",onClick:function(t){var e=new Date,a=new Date,n=e.getDate();a.setTime(a.getTime()-864e5*(n-1)),t.$emit("pick",[a,e])}},{text:"上个月",onClick:function(t){var e=new Date,a=new Date,n=new Date;a.setMonth(a.getMonth()-1),a.setDate(1),e.setMonth(e.getMonth()-1),e.setDate(new Date(n.getFullYear(),n.getMonth(),0).getDate()),t.$emit("pick",[a,e])}},{text:"本季度",onClick:function(t){var e=new Date,a=new Date,n=a.getMonth(),i=0;n<3?i=n:n<6?i=n-3:n<9?i=n-6:n<12&&(i=n-9),a.setMonth(a.getMonth()-i),a.setDate(1),t.$emit("pick",[a,e])}},{text:"本年",onClick:function(t){var e=new Date,a=new Date(e.getFullYear(),0,1);t.$emit("pick",[a,e])}},{text:"去年",onClick:function(t){var e=new Date,a=new Date(e.getFullYear()-1,0,1);e.setFullYear(e.getFullYear()-1),e.setMonth(11),e.setDate(new Date(a.getFullYear()+1,1,0).getDate()),t.$emit("pick",[a,e])}}]}},"34aa":function(t,e,a){},"3fdc":function(t,e,a){},"40a3":function(t,e,a){"use strict";var n=a("3fdc"),i=a.n(n);i.a},"4f7d":function(t,e,a){"use strict";var n=a("34aa"),i=a.n(n);i.a},"52cd":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._v(" "),a("div",{staticClass:"uni-container"},[a("el-row",{staticClass:"uni-box tab"},[a("p",{class:{active:0===t.tabIndex},on:{click:function(e){return t.tab(0,0)}}},[t._v("今天")]),t._v(" "),a("p",{class:{active:1===t.tabIndex},on:{click:function(e){return t.tab(1,-1)}}},[t._v("昨天")]),t._v(" "),a("p",{class:{active:2===t.tabIndex},on:{click:function(e){return t.tab(2,-7)}}},[t._v("最近七天")]),t._v(" "),a("p",{class:{active:3===t.tabIndex},on:{click:function(e){return t.tab(3,-30)}}},[t._v("最近30天")]),t._v(" "),a("p",{class:{active:4===t.tabIndex},on:{click:function(e){return t.tab(4,-90)}}},[t._v("最近90天")])]),t._v(" "),a("el-row",{staticClass:"uni-box navbar"},[a("el-date-picker",{attrs:{type:"daterange","unlink-panels":"","range-separator":"至",size:"small","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions,"value-format":"yyyy-MM-dd",clearable:!1},on:{change:t.change},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),t.versionsShow?a("div",[a("span",{staticClass:"navbar-info-title"},[t._v("版本号：")]),t._v(" "),a("el-cascader",{attrs:{options:t.versionsOptions,size:"small",clearable:"","show-all-levels":!1},on:{change:function(e){return t.cascaderChange("v",e)}},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1):t._e()],1),t._v(" "),a("el-row",{staticClass:"uni-box"},[a("div",{staticClass:"uni-chats"},[a("el-row",{staticClass:"end"},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"uni-info"},[a("p",{staticClass:"uni-info__title"},[t._v("\n                总错误数\n                "),a("tips",{attrs:{content:"指应用在某个时间段内出现错误的总数 "}})],1),t._v(" "),a("p",{staticClass:"uni-info__today"},[t._v(t._s(t.eventData.num_errors))])])]),t._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"uni-info"},[a("p",{staticClass:"uni-info__title"},[t._v("\n                错误率\n                "),a("tips",{attrs:{content:"时间范围内的总错误数/应用启动次数，如果小于0.01%，默认显示为0 "}})],1),t._v(" "),a("p",{staticClass:"uni-info__today"},[t._v(t._s(t.eventData.error_rate))])])])],1)],1),t._v(" "),0===t.lineChartData.xAxis.length?a("div",{staticClass:"no-data-style"},[t._v("暂无数据")]):a("div",[a("line-chart",{attrs:{"chart-data":t.lineChartData}})],1)]),t._v(" "),a("div",{staticClass:"uni-box"},[a("el-table",{attrs:{data:t.tableList&&t.tableList.item,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",width:"60",fit:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.$index+1+t.formData.page*t.formData.page_size-t.formData.page_size))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"最近发生时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.datetime))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"SDK 版本号"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.sdk_version))]}}])},[a("template",{slot:"header"},[t._v("\n            SDK 版本号\n            "),a("tips",{attrs:{content:"原生平台为 uniapp 框架版本号 小程序平台为小程序 SDK 版本号 "}})],1)],2),t._v(" "),a("el-table-column",{attrs:{label:"平台版本号",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.platform_version))])]}}])},[a("template",{slot:"header"},[t._v("\n            平台版本号\n            "),a("tips",{attrs:{content:"原生平台为客户端 SDK 版本号 小程序平台为微信、支付宝、百度等应用的版本号 "}})],1)],2),t._v(" "),t.versionsShow?a("el-table-column",{attrs:{label:"App 版本号",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.app_version))]}}],null,!1,53555577)},[a("template",{slot:"header"},[t._v("\n            App 版本号\n            "),a("tips",{attrs:{content:"原生应用的版本号。小程序平台无效 "}})],1)],2):t._e(),t._v(" "),a("el-table-column",{attrs:{"class-name":"status-col",label:"错误次数",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.num_errors))]}}])},[a("template",{slot:"header"},[t._v("\n            错误次数\n            "),a("tips",{attrs:{content:"相同错误在某时间段内发生的次数 "}})],1)],2),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"错误占比"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.percentage))])]}}])},[a("template",{slot:"header"},[t._v("\n            错误占比\n            "),a("tips",{attrs:{content:"某个错误发生的次数/总错误数 "}})],1)],2),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"错误信息"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"error-info"},[a("el-tooltip",{attrs:{placement:"left",effect:"light"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("div",{domProps:{innerHTML:t._s(t.$options.filters.Trim(e.row.error_msg))}})]),t._v(" "),a("span",[t._v(t._s(e.row.error_msg))])])],1)]}}])})],1),t._v(" "),t.tableList.total?a("div",{staticClass:"pagination-box"},[a("el-pagination",{attrs:{background:"","page-size":t.formData.page_size,layout:"sizes,prev, pager, next","current-page":t.formData.page,total:t.tableList.total},on:{"update:currentPage":function(e){return t.$set(t.formData,"page",e)},"update:current-page":function(e){return t.$set(t.formData,"page",e)},"current-change":t.currentChange,"size-change":t.sizeChange}})],1):t._e()],1)],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"uni-header"},[a("span",{staticClass:"uni-header__title"},[t._v("错误分析")]),t._v(" "),a("span",{staticClass:"uni-header__title-sub"},[t._v("开发者可以在这里快速查询应用最近出现的具体错误内容，了解错误概况信息，以便快速修复问题")])])}],r=(a("ac6a"),a("c5f6"),a("db72")),s=(a("a481"),a("2f62")),o=a("ed08"),c=a("0f9f"),l=a("0926"),u=a("efa3"),p={name:"TrendAnalysls",components:{LineChart:l["a"],Tips:u["a"]},filters:{Trim:function(t){return t.replace(/\\n|\\r\\n/g,"<br/>")}},data:function(){return{text:"thirdScriptError\na is not defined; [Component] Event Handler Error @ pages/tabBar/forum/forum#handleEvent\nReferenceError: a is not defined\n    at VueComponent.onClick (http://127.0.0.1:33916/appservice/pages/tabBar/forum/forum.js:229:25)\n    at http://127.0.0.1:33916/appservice/common/vendor.js:1277:28\n    at Array.forEach (<anonymous>)\n    at http://127.0.0.1:33916/appservice/common/vendor.js:1252:19\n    at Array.forEach (<anonymous>)\n    at H.handleEvent [as __e] (http://127.0.0.1:33916/appservice/common/vendor.js:1243:13)\n    at Object.r.safeCallback (http://127.0.0.1:33916/appservice/__dev__/WAService.js:1:818220)\n    at http://127.0.0.1:33916/appservice/__dev__/WAService.js:1:959033\n    at f (http://127.0.0.1:33916/appservice/__dev__/WAService.js:1:964380)\n    at http://127.0.0.1:33916/appservice/__dev__/WAService.js:1:963487",lineChartData:{series:[],xAxis:[]},versionsOptions:[],value2:["0"],pickerOptions:c["b"],value:[Object(o["d"])(new Date),Object(o["d"])(new Date)],eventData:{num_errors:"0",error_rate:"0.00%"},tableList:{},formData:{id_app:"",p:1,start:Object(o["d"])(new Date),end:Object(o["d"])(new Date),page:1,page_size:20},versionsShow:!1,tabIndex:0}},computed:Object(r["a"])({},Object(s["b"])(["id_app","p_info"])),watch:{id_app:function(t){t&&(this.formData.id_app=t,1===Number(this.p_info)||2===Number(this.p_info)?this.versionsShow=!0:this.versionsShow=!1,this.requestInit(),this.getAppVersions())},p_info:function(t){this.formData.p=t,1===Number(t)||2===Number(t)?this.versionsShow=!0:this.versionsShow=!1,this.requestInit(),this.getAppVersions()}},created:function(){this.formData.id_app=this.id_app,this.formData.p=this.p_info,1===Number(this.p_info)||2===Number(this.p_info)?this.versionsShow=!0:this.versionsShow=!1,this.id_app&&(this.requestInit(),this.getAppVersions())},methods:{requestInit:function(){this.formData.page=1,this.getErrorOverview(),this.getErrorTrend(),this.getError_Detail()},currentChange:function(t){this.formData.page=t,this.getError_Detail()},sizeChange:function(t){this.formData.page_size=t,this.formData.page=1,this.getError_Detail()},tab:function(t,e){this.tabIndex=t,this.formData.start=Object(o["d"])(new Date,e),this.formData.end=Object(o["d"])(new Date,-1===e?e:0),this.value=[this.formData.start,this.formData.end],this.requestInit()},change:function(t){this.tabIndex=-1,this.formData.start=t[0],this.formData.end=t[1],this.requestInit()},cascaderChange:function(t,e){"ch"===t?this.formData.ch=e[0]:this.formData.v=e[0],this.requestInit()},getErrorOverview:function(){var t=this,e=this.formData,a=e.id_app,n=e.p,i=e.start,r=e.end,s={id_app:a,p:n,start:i,end:r};this.$api.Error_Overview(s).then(function(e){t.eventData=e.data})},getErrorTrend:function(){var t=this,e=this.formData,a=e.id_app,n=e.p,i=e.start,r=e.end,s={id_app:a,p:n,start:i,end:r};this.$api.Error_Trend(s).then(function(e){t.lineChartData=e.data})},getError_Detail:function(){var t=this,e=this.formData,a=e.id_app,n=e.p,i=e.start,r=e.end,s=e.page,o=e.page_size,c={id_app:a,p:n,start:i,end:r,page:s,page_size:o};this.$api.Error_Detail(c).then(function(e){t.tableList=e.data})},getAppVersions:function(){var t=this,e=this.formData,a=e.id_app,n=e.p,i={id_app:a,p:n};this.$api.App_Versions(i).then(function(e){var a=e.data,n=[{value:"0",label:"全部"}];a.forEach(function(t){n.push({value:t.id_version,label:t.version})}),t.versionsOptions=n})}}},f=p,v=(a("40a3"),a("4f7d"),a("2877")),h=Object(v["a"])(f,n,i,!1,null,"d7a18a50",null);e["default"]=h.exports},ed08:function(t,e,a){"use strict";a.d(e,"d",function(){return r}),a.d(e,"c",function(){return s}),a.d(e,"a",function(){return o}),a.d(e,"e",function(){return c}),a.d(e,"b",function(){return l});a("3b2b"),a("4917"),a("4f7f"),a("5df3"),a("1c4c"),a("ac6a"),a("456d"),a("28a5");var n=a("768b"),i=(a("a481"),a("6b54"),a("7618"));function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"day";"object"!==Object(i["a"])(t)&&(t=t.replace(/-/g,"/"));var n=new Date(t);switch(a){case"day":n.setDate(n.getDate()+e);break;case"month":n.setMonth(n.getMonth()+e);break;case"year":n.setFullYear(n.getFullYear()+e);break}var r=n.getFullYear(),s=n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1,o=n.getDate()<10?"0"+n.getDate():n.getDate();return r+"-"+s+"-"+o}function s(t,e,a){var i=t.split("-"),r=Object(n["a"])(i,3),s=r[0],o=r[1],c=r[2],l=e.split("-"),u=Object(n["a"])(l,3),p=u[0],f=u[1],v=u[2],h=new Date(s,o,c).getTime(),d=new Date(p,f,v).getTime(),_=864e5,D=12096e5,g=2592e6,m=d-h;return a&&0===m?1:m>=g?3:m>=D?2:m>=_?1:0}function o(t,e){return t=new Date(t.replace("-","/").replace("-","/")),e=new Date(e.replace("-","/").replace("-","/")),t<=e}function c(t){var e=[],a="天";switch(t){case 1:a="天";break;case 2:a="周";break;case 3:a="月";break}for(var n=0;n<9;n++){var i=n+1;1===t&&(8===i&&(i=14),9===i&&(i=30)),e.push({value:n+1,label:"".concat(i).concat(a,"后")})}return e}function l(t,e,a){var n,i,r,s,o,c=function c(){var l=+new Date-s;l<e&&l>0?n=setTimeout(c,e-l):(n=null,a||(o=t.apply(r,i),n||(r=i=null)))};return function(){for(var i=arguments.length,l=new Array(i),u=0;u<i;u++)l[u]=arguments[u];r=this,s=+new Date;var p=a&&!n;return n||(n=setTimeout(c,e)),p&&(o=t.apply(r,l),r=l=null),o}}}}]);