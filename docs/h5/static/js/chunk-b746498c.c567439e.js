(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b746498c"],{"0f9f":function(t,e,a){"use strict";a.d(e,"b",function(){return i}),a.d(e,"c",function(){return s}),a.d(e,"a",function(){return l});var n=a("ed08"),i={disabledDate:function(t){return Object(n["a"])(Object(n["d"])(new Date,1),Object(n["d"])(t))},shortcuts:[{text:"本周",onClick:function(t){var e=new Date,a=new Date,n=e.getDay()-1;a.setTime(a.getTime()-864e5*n),t.$emit("pick",[a,e])}},{text:"本月",onClick:function(t){var e=new Date,a=new Date,n=e.getDate();a.setTime(a.getTime()-864e5*(n-1)),t.$emit("pick",[a,e])}},{text:"上个月",onClick:function(t){var e=new Date,a=new Date,n=new Date;a.setMonth(a.getMonth()-1),a.setDate(1),e.setMonth(e.getMonth()-1),e.setDate(new Date(n.getFullYear(),n.getMonth(),0).getDate()),t.$emit("pick",[a,e])}},{text:"本季度",onClick:function(t){var e=new Date,a=new Date,n=a.getMonth(),i=0;n<3?i=n:n<6?i=n-3:n<9?i=n-6:n<12&&(i=n-9),a.setMonth(a.getMonth()-i),a.setDate(1),t.$emit("pick",[a,e])}},{text:"本年",onClick:function(t){var e=new Date,a=new Date(e.getFullYear(),0,1);t.$emit("pick",[a,e])}},{text:"去年",onClick:function(t){var e=new Date,a=new Date(e.getFullYear()-1,0,1);e.setFullYear(e.getFullYear()-1),e.setMonth(11),e.setDate(new Date(a.getFullYear()+1,1,0).getDate()),t.$emit("pick",[a,e])}}]},s={disabledDate:function(t){return Object(n["a"])(Object(n["d"])(new Date),Object(n["d"])(t))},shortcuts:[{text:"本周",onClick:function(t){var e=new Date,a=new Date,n=e.getDay()-1;a.setTime(a.getTime()-864e5*n),e.setDate(e.getDate()-1),a.getTime()>e.getTime()&&(a=e),t.$emit("pick",[a,e])}},{text:"本月",onClick:function(t){var e=new Date,a=new Date,n=e.getDate();a.setTime(a.getTime()-864e5*(n-1)),e.setDate(e.getDate()-1),a.getTime()>e.getTime()&&(a=e),t.$emit("pick",[a,e])}},{text:"上个月",onClick:function(t){var e=new Date,a=new Date,n=new Date;a.setMonth(a.getMonth()-1),a.setDate(1),e.setMonth(e.getMonth()-1),e.setDate(new Date(n.getFullYear(),n.getMonth(),0).getDate()),t.$emit("pick",[a,e])}},{text:"本季度",onClick:function(t){var e=new Date,a=new Date,n=a.getMonth(),i=0;n<3?i=n:n<6?i=n-3:n<9?i=n-6:n<12&&(i=n-9),a.setMonth(a.getMonth()-i),a.setDate(1),e.setDate(e.getDate()-1),t.$emit("pick",[a,e])}},{text:"本年",onClick:function(t){var e=new Date,a=new Date(e.getFullYear(),0,1);e.setDate(e.getDate()-1),t.$emit("pick",[a,e])}},{text:"去年",onClick:function(t){var e=new Date,a=new Date(e.getFullYear()-1,0,1);e.setFullYear(e.getFullYear()-1),e.setMonth(11),e.setDate(new Date(a.getFullYear()+1,1,0).getDate()),t.$emit("pick",[a,e])}}]},l={disabledDate:function(t){return Object(n["a"])(Object(n["d"])(new Date),Object(n["d"])(t))},shortcuts:[{text:"本周",onClick:function(t){var e=new Date,a=new Date,n=e.getDay()-1;a.setTime(a.getTime()-864e5*n),t.$emit("pick",[a,e])}},{text:"本月",onClick:function(t){var e=new Date,a=new Date,n=e.getDate();a.setTime(a.getTime()-864e5*(n-1)),t.$emit("pick",[a,e])}},{text:"上个月",onClick:function(t){var e=new Date,a=new Date,n=new Date;a.setMonth(a.getMonth()-1),a.setDate(1),e.setMonth(e.getMonth()-1),e.setDate(new Date(n.getFullYear(),n.getMonth(),0).getDate()),t.$emit("pick",[a,e])}},{text:"本季度",onClick:function(t){var e=new Date,a=new Date,n=a.getMonth(),i=0;n<3?i=n:n<6?i=n-3:n<9?i=n-6:n<12&&(i=n-9),a.setMonth(a.getMonth()-i),a.setDate(1),t.$emit("pick",[a,e])}},{text:"本年",onClick:function(t){var e=new Date,a=new Date(e.getFullYear(),0,1);t.$emit("pick",[a,e])}},{text:"去年",onClick:function(t){var e=new Date,a=new Date(e.getFullYear()-1,0,1);e.setFullYear(e.getFullYear()-1),e.setMonth(11),e.setDate(new Date(a.getFullYear()+1,1,0).getDate()),t.$emit("pick",[a,e])}}]}},"25a9":function(t,e,a){"use strict";a.d(e,"d",function(){return n}),a.d(e,"e",function(){return i}),a.d(e,"b",function(){return s}),a.d(e,"a",function(){return l}),a.d(e,"c",function(){return r}),a.d(e,"f",function(){return o});var n=[{value:"num_new_visitor",label:"新增用户"},{value:"num_visitor",label:"活跃用户"},{value:"num_page_views",label:"访问次数"},{value:"num_visits",label:"启动次数"},{value:"visit_avg_time",label:"次均停留时长"},{value:"visitor_avg_time",label:"人均停留时长"},{value:"bounce_rate",label:"跳出率"},{value:"num_total_visitor",label:"总用户数"}],i=[{value:"num_visitor",label:"活跃用户"},{value:"num_visits",label:"访问次数"},{value:"exit_num_visits",label:"退出次数"},{value:"exit_rate",label:"跳出率"},{value:"visit_avg_time",label:"次均停留时长"},{value:"visitor_avg_time",label:"人均停留时长"},{value:"num_share",label:"分享次数"}],s=[{value:"num_visitor",label:"活跃用户"},{value:"num_visits",label:"访问次数"},{value:"entry_num_visits",label:"入口页次数"},{value:"bounce_rate",label:"跳出率"},{value:"visit_avg_time",label:"次均停留时长"},{value:"visitor_avg_time",label:"人均停留时长"}],l=[{value:"num_visitor",label:"活跃用户"},{value:"num_visits",label:"访问次数"},{value:"visit_avg_time",label:"次均停留时长"},{value:"visitor_avg_time",label:"人均停留时长"},{value:"num_share",label:"分享次数"}],r=[{value:"num_visitor",label:"触发用户数"},{value:"num_visits",label:"触发次数"},{value:"visitor_avg_hits",label:"人均次数"}],o={num_total_visitor:"0",num_new_visitor:"0",num_visitor:"0",num_visits:"0",num_page_views:"0",visit_avg_time:"00:00:00",visitor_avg_time:"00:00:00",bounce_rate:"0.0%"}},"2c8f":function(t,e,a){},6833:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"uni-container"},[a("el-row",{staticClass:"uni-box navbar"},[a("p",{staticClass:"navbar-box navbar-box-title"},[t._v(t._s(t.url))]),t._v(" "),a("el-row",{staticClass:"tab"},[a("p",{class:{active:0===t.tabIndex},on:{click:function(e){return t.tab(0,0)}}},[t._v("今天")]),t._v(" "),a("p",{class:{active:1===t.tabIndex},on:{click:function(e){return t.tab(1,-1)}}},[t._v("昨天")]),t._v(" "),a("p",{class:{active:2===t.tabIndex},on:{click:function(e){return t.tab(2,-7)}}},[t._v("最近七天")]),t._v(" "),a("p",{class:{active:3===t.tabIndex},on:{click:function(e){return t.tab(3,-30)}}},[t._v("最近30天")]),t._v(" "),a("p",{class:{active:4===t.tabIndex},on:{click:function(e){return t.tab(4,-90)}}},[t._v("最近90天")])]),t._v(" "),a("div",{staticClass:"navbar-box"},[a("el-date-picker",{attrs:{type:"daterange","unlink-panels":"","range-separator":"至",size:"small","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions,"value-format":"yyyy-MM-dd",clearable:!1},on:{change:t.change},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),a("div",{staticClass:"uni-chats__title-tab"},[a("div",{staticClass:"uni-chats__title-tab-item border",class:{active:1===t.selectIndex,disabled:t.disabled},on:{click:function(e){return t.navSelcetTab(1,t.disabled)}}},[t._v("按时")]),t._v(" "),a("div",{staticClass:"uni-chats__title-tab-item",class:{active:2===t.selectIndex},on:{click:function(e){return t.navSelcetTab(2)}}},[t._v("按日")]),t._v(" "),a("div",{staticClass:"uni-chats__title-tab-item",class:{active:3===t.selectIndex},on:{click:function(e){return t.navSelcetTab(3)}}},[t._v("按周")]),t._v(" "),a("div",{staticClass:"uni-chats__title-tab-item",class:{active:4===t.selectIndex},on:{click:function(e){return t.navSelcetTab(4)}}},[t._v("按月")])])],1),t._v(" "),a("div",{staticClass:"navbar-box"},[a("div",[a("span",{staticClass:"navbar-info-title"},[t._v("版本号：")]),t._v(" "),a("el-cascader",{attrs:{options:t.versionsOptions,size:"small",clearable:"","show-all-levels":!1},on:{change:function(e){return t.cascaderChange("v",e)}},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1)])],1),t._v(" "),a("el-row",{staticClass:"uni-box"},[a("div",{staticClass:"uni-chats"},[a("el-row",{staticClass:"end"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"uni-info"},[a("p",{staticClass:"uni-info__title"},[t._v("\n                新增用户\n                "),a("tips",{attrs:{content:"首次访问应用的用户数（以设备为判断标准，去重）"}})],1),t._v(" "),a("p",{staticClass:"uni-info__today"},[t._v(t._s(t.dayData.num_new_visitor))])])]),t._v(" "),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"uni-info"},[a("p",{staticClass:"uni-info__title"},[t._v("\n                活跃用户\n                "),a("tips",{attrs:{content:"访问过应用内任意页面的总用户数（去重）"}})],1),t._v(" "),a("p",{staticClass:"uni-info__today"},[t._v(t._s(t.dayData.num_visitor))])])]),t._v(" "),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"uni-info"},[a("p",{staticClass:"uni-info__title"},[t._v("\n                访问次数\n                "),a("tips",{attrs:{content:"访问过应用内任意页面总次数，多个页面之间跳转、同一页面的重复访问计为多次访问"}})],1),t._v(" "),a("p",{staticClass:"uni-info__today"},[t._v(t._s(t.dayData.num_page_views))])])]),t._v(" "),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"uni-info"},[a("p",{staticClass:"uni-info__title"},[t._v("\n                启动次数\n                "),a("tips",{attrs:{content:"用户从打开应用到主动关闭应用或超时退出计为一次启动"}})],1),t._v(" "),a("p",{staticClass:"uni-info__today"},[t._v(t._s(t.dayData.num_visits))])])]),t._v(" "),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"uni-info"},[a("p",{staticClass:"uni-info__title"},[t._v("\n                次均停留时长\n                "),a("tips",{attrs:{content:"平均每次打开应用停留在应用内的总时长，即应用停留总时长/启动次数"}})],1),t._v(" "),a("p",{staticClass:"uni-info__today"},[t._v(t._s(t.dayData.visit_avg_time))])])]),t._v(" "),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"uni-info"},[a("p",{staticClass:"uni-info__title"},[t._v("\n                人均停留时长\n                "),a("tips",{attrs:{content:"平均每个用户停留在应用内的总时长，即应用停留总时长/访问人数"}})],1),t._v(" "),a("p",{staticClass:"uni-info__today"},[t._v(t._s(t.dayData.visitor_avg_time))])])]),t._v(" "),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"uni-info"},[a("p",{staticClass:"uni-info__title"},[t._v("\n                跳出率\n                "),a("tips",{attrs:{content:"只浏览一个页面便离开应用的次数占总启动次数的百分比"}})],1),t._v(" "),a("p",{staticClass:"uni-info__today"},[t._v(t._s(t.dayData.bounce_rate))])])]),t._v(" "),a("el-col",{attrs:{span:3}},[a("div",{staticClass:"uni-info"},[a("p",{staticClass:"uni-info__title"},[t._v("\n                总用户数\n                "),a("tips",{attrs:{content:"从添加统计到当前选择时间的总用户数（去重）"}})],1),t._v(" "),a("p",{staticClass:"uni-info__today"},[t._v(t._s(t.dayData.num_total_visitor))])])])],1),t._v(" "),a("div",[a("div",{staticClass:"uni-chats__title-tab"},t._l(t.optionsList,function(e,n){return a("div",{key:n,staticClass:"uni-chats__title-tab-item",class:{active:t.navTabIndex===n,border:0===n},on:{click:function(a){return t.navTab(e,n)}}},[t._v(t._s(e.label))])}),0)])],1),t._v(" "),0===t.lineChartData.xAxis.length?a("div",{staticClass:"no-data-style"},[t._v("暂无数据")]):a("div",[a("line-chart",{attrs:{"chart-data":t.lineChartData}})],1)]),t._v(" "),a("div",{staticClass:"uni-box"},[a("el-table",{attrs:{data:t.tableList&&t.tableList.item,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center","min-width":"30"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.$index+1+t.formData.page*t.formData.page_size-t.formData.page_size))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"日期"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.datetime))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"新增用户"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.num_new_visitor))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"活跃用户",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.num_visitor))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"访问次数",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.num_page_views))]}}])}),t._v(" "),a("el-table-column",{attrs:{"class-name":"status-col",label:"启动次数",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.num_visits))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"次均停留时长"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.visit_avg_time))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"人均停留时长"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.visitor_avg_time))])]}}])}),t._v(" "),a("el-table-column",{attrs:{"class-name":"status-col",label:"跳出率",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.bounce_rate))]}}])}),t._v(" "),a("el-table-column",{attrs:{"class-name":"status-col",label:"总用户数",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.num_total_visitor))]}}])})],1),t._v(" "),t.tableList.total?a("div",{staticClass:"pagination-box"},[a("el-pagination",{attrs:{background:"","page-size":t.formData.page_size,layout:"sizes,prev, pager, next","current-page":t.formData.page,total:t.tableList.total},on:{"update:currentPage":function(e){return t.$set(t.formData,"page",e)},"update:current-page":function(e){return t.$set(t.formData,"page",e)},"current-change":t.currentChange,"size-change":t.sizeChange}})],1):t._e()],1)],1)])},i=[],s=(a("ac6a"),a("7f7f"),a("c5f6"),a("db72")),l=a("2f62"),r=a("ed08"),o=a("0f9f"),c=a("25a9"),u=a("0926"),v=a("efa3"),_={name:"TrendAnalysls",components:{LineChart:u["a"],Tips:v["a"]},data:function(){return{lineChartData:{series:[],xAxis:[]},dayData:c["f"],optionsList:c["d"],pickerOptions:o["b"],channelsOptions:[],versionsOptions:[],value1:["0"],value2:["0"],value:[Object(r["d"])(new Date),Object(r["d"])(new Date)],tableList:{},tabIndex:0,navTabIndex:0,selectIndex:1,disabled:!1,versionsShow:!1,formData:{id_app:"",p:"",period:1,start:Object(r["d"])(new Date),end:Object(r["d"])(new Date),item:"num_new_visitor",ch:0,v:0,page:1,page_size:20},url:""}},computed:Object(s["a"])({},Object(l["b"])(["id_app","p_info"])),watch:{id_app:function(t){t&&(this.formData.id_app=t,this.formData.ch=0,this.formData.v=0,this.value1=["0"],this.value2=["0"],this.requestInit(),this.getAppChannels(),this.getAppVersions())},p_info:function(t){this.formData.p=t,1===Number(t)||2===Number(t)?this.versionsShow=!0:this.versionsShow=!1,this.formData.ch=0,this.formData.v=0,this.value1=["0"],this.value2=["0"],this.requestInit(),this.getAppChannels(),this.getAppVersions()}},created:function(){this.formData.id_app=this.id_app,this.formData.p=this.p_info,this.formData.ch=this.$route.query.id_channel,this.url=this.$route.query.name+" ( "+this.$route.query.channel_key+" ) ",1===Number(this.p_info)||2===Number(this.p_info)?this.versionsShow=!0:this.versionsShow=!1,this.id_app&&(this.requestInit(),this.getAppChannels(),this.getAppVersions())},methods:{requestInit:function(){this.formData.page=1,this.getToDayData(),this.getVisitTrend(),this.getVisitDetail()},currentChange:function(t){this.formData.page=t,this.getVisitDetail()},sizeChange:function(t){this.formData.page_size=t,this.formData.page=1,this.getVisitDetail()},change:function(t){this.tabIndex=-1;var e=Object(r["c"])(t[0],t[1]);e>0?(this.disabled=!0,this.selectIndex=2):this.disabled=!1,this.formData.start=t[0],this.formData.end=t[1],this.requestInit()},cascaderChange:function(t,e){"ch"===t?this.formData.ch=e[0]:this.formData.v=e[0],this.requestInit()},tab:function(t,e){this.tabIndex=t,this.formData.start=Object(r["d"])(new Date,e),this.formData.end=Object(r["d"])(new Date,-1===e?e:0),this.value=[this.formData.start,this.formData.end];var a=Object(r["c"])(this.formData.start,this.formData.end);a>0?(this.disabled=!0,this.selectIndex=2):this.disabled=!1,this.formData.period=this.selectIndex,this.requestInit()},navTab:function(t,e){this.navTabIndex=e,this.formData.item=t.value,this.getVisitTrend()},navSelcetTab:function(t,e){e||(this.selectIndex=t,this.formData.period=this.selectIndex,this.requestInit())},getToDayData:function(){var t=this,e=this.formData,a=e.id_app,n=e.p,i=e.ch,s=e.v,l=e.start,r=e.end,o={id_app:a,p:n,ch:i,v:s,start:l,end:r};this.$api.Trend_Overview(o).then(function(e){t.dayData=t.dataInit(),0!==e.data.length&&(t.dayData=e.data)})},getVisitTrend:function(){var t=this,e=this.formData,a=e.id_app,n=e.p,i=e.ch,s=e.v,l=e.start,r=e.end,o=e.item,c=e.period,u=1;u=1===c?4:4===c?3:c-1;var v={id_app:a,p:n,ch:i,v:s,period:u,start:l,end:r,item:o};this.$api.Visit_Trend(v).then(function(e){t.lineChartData=e.data,t.lineChartData.per="bounce_rate"===o?"%":""})},getVisitDetail:function(){var t=this,e=this.formData,a=e.id_app,n=e.p,i=e.ch,s=e.v,l=e.start,r=e.end,o=e.period,c=e.page,u=e.page_size,v=1;v=1===o?4:4===o?3:o-1;var _={id_app:a,p:n,ch:i,v:s,period:v,start:l,end:r,page:c,page_size:u};this.$api.Visit_Detail(_).then(function(e){t.tableList=e.data})},getAppChannels:function(){var t=this,e=this.formData,a=e.id_app,n=e.p,i={id_app:a,p:n};this.$api.App_Channels(i).then(function(e){var a=e.data,n=[{value:"0",label:"全部"}];a.forEach(function(t){n.push({value:t.id_channel,label:t.name})}),t.channelsOptions=n})},getAppVersions:function(){var t=this,e=this.formData,a=e.id_app,n=e.p,i={id_app:a,p:n};this.$api.App_Versions(i).then(function(e){var a=e.data,n=[{value:"0",label:"全部"}];a.forEach(function(t){n.push({value:t.id_version,label:t.version})}),t.versionsOptions=n})},dataInit:function(){var t={};for(var e in this.dayData)t[e]="visitor_avg_time"===e||"visit_avg_time"===e?"00:00:00":0;return t}}},d=_,p=(a("a49d"),a("2877")),h=Object(p["a"])(d,n,i,!1,null,"4715c7a9",null);e["default"]=h.exports},a49d:function(t,e,a){"use strict";var n=a("2c8f"),i=a.n(n);i.a},ed08:function(t,e,a){"use strict";a.d(e,"d",function(){return s}),a.d(e,"c",function(){return l}),a.d(e,"a",function(){return r}),a.d(e,"e",function(){return o}),a.d(e,"b",function(){return c});a("3b2b"),a("4917"),a("4f7f"),a("5df3"),a("1c4c"),a("ac6a"),a("456d"),a("28a5");var n=a("768b"),i=(a("a481"),a("6b54"),a("7618"));function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"day";"object"!==Object(i["a"])(t)&&(t=t.replace(/-/g,"/"));var n=new Date(t);switch(a){case"day":n.setDate(n.getDate()+e);break;case"month":n.setMonth(n.getMonth()+e);break;case"year":n.setFullYear(n.getFullYear()+e);break}var s=n.getFullYear(),l=n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1,r=n.getDate()<10?"0"+n.getDate():n.getDate();return s+"-"+l+"-"+r}function l(t,e,a){var i=t.split("-"),s=Object(n["a"])(i,3),l=s[0],r=s[1],o=s[2],c=e.split("-"),u=Object(n["a"])(c,3),v=u[0],_=u[1],d=u[2],p=new Date(l,r,o).getTime(),h=new Date(v,_,d).getTime(),f=864e5,b=12096e5,m=2592e6,D=h-p;return a&&0===D?1:D>=m?3:D>=b?2:D>=f?1:0}function r(t,e){return t=new Date(t.replace("-","/").replace("-","/")),e=new Date(e.replace("-","/").replace("-","/")),t<=e}function o(t){var e=[],a="天";switch(t){case 1:a="天";break;case 2:a="周";break;case 3:a="月";break}for(var n=0;n<9;n++){var i=n+1;1===t&&(8===i&&(i=14),9===i&&(i=30)),e.push({value:n+1,label:"".concat(i).concat(a,"后")})}return e}function c(t,e,a){var n,i,s,l,r,o=function o(){var c=+new Date-l;c<e&&c>0?n=setTimeout(o,e-c):(n=null,a||(r=t.apply(s,i),n||(s=i=null)))};return function(){for(var i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];s=this,l=+new Date;var v=a&&!n;return n||(n=setTimeout(o,e)),v&&(r=t.apply(s,c),s=c=null),r}}}}]);