(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0605"],{"1/+f":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"detail-container"},[e("div",{staticClass:"detail"},[e("el-row",{staticStyle:{background:"#fff",padding:"16px 16px 0","margin-bottom":"32px"}},[e("h1",[t._v(t._s(t.callsign))])]),t._v(" "),e("el-row",{staticStyle:{background:"#fff",padding:"16px 16px 0","margin-bottom":"32px"}},[e("div",{staticClass:"chart-wrapper"},[e("calendar-chart")],1)]),t._v(" "),e("el-row",{attrs:{gutter:32}},[e("el-col",{attrs:{xs:24,sm:24,lg:8}},[e("div",{staticClass:"chart-wrapper"},[e("overview-chart",{attrs:{"chart-data":t.lineChartData}})],1)]),t._v(" "),e("el-col",{attrs:{xs:24,sm:24,lg:8}},[e("div",{staticClass:"chart-wrapper"},[e("overview-chart",{attrs:{"chart-data":this.setBarChart()}})],1)]),t._v(" "),e("el-col",{attrs:{xs:24,sm:24,lg:8}},[e("div",{staticClass:"chart-wrapper"},[e("overview-chart")],1)])],1)],1)])};a._withStripped=!0;var s=function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className,style:{height:this.height,width:this.width}})};s._withStripped=!0;var r=e("MT78"),n=e.n(r),l=e("7Qib");e("gX0l");var c={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0}},data:function(){return{chart:null}},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.initChart(),this.__resizeHandler=Object(l.a)(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHandler)},beforeDestroy:function(){this.chart&&(window.removeEventListener("resize",this.__resizeHandler),this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=n.a.init(this.$el,"macarons"),this.setOptions(this.chartData)},setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.validFlight,e=t.invalidFlight;this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["通过航班","未通过航班"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value"},yAxis:{type:"category",data:["航班量"]},series:[{name:"通过航班",type:"bar",stack:"总量",data:i,label:{normal:{show:!0,position:"insideRight"}}},{name:"未通过航班",type:"bar",stack:"总量",data:e,label:{normal:{show:!0,position:"insideRight"}}}]})}}},o=e("KHd+"),h=Object(o.a)(c,s,[],!1,null,null,null);h.options.__file="src/views/crew/overview/components/OverviewChart.vue";var d=h.exports,u=Object(o.a)({},void 0,void 0,!1,null,null,null);u.options.__file="src/views/crew/overview/components/CalendarChart.vue";var p=u.exports,v=e("P2AT"),g={validFlight:[22],invalidFlight:[212]},f={name:"Detail",filters:{statusFilter:function(t){return{Published:"success",Draft:"gray",Deleted:"danger"}[t]}},components:{OverviewChart:d,CalendarChart:p},data:function(){return{flight:{},flag:!1,lineChartData:g,list:null,calsign:null,listLoading:!1}},created:function(){this.callsign=this.$route.params&&this.$route.params.id,console.log("callsign: "+this.callsign),this.getData(this.callsign)},methods:{getData:function(t){var i=this;this.listLoading=!0,Object(v.a)(t).then(function(t){i.list=t,console.log("response",t)}).catch(function(t){console.log(t)}),this.listLoading=!1},setBarChart:function(){return this.flight={validFlight:[this.list.validFlight],invalidFlight:[this.list.invalidFlight]},this.flag=!0,this.flight},cancelSelection:function(t){this.$refs.core_module.clearSelection()},handleSelectionChange:function(t){this.multipleSelection=t}}},w=(e("iTxv"),Object(o.a)(f,a,[],!1,null,"a1a7c8da",null));w.options.__file="src/views/crew/overview/detail.vue";i.default=w.exports},P2AT:function(t,i,e){"use strict";e.d(i,"b",function(){return s}),e.d(i,"a",function(){return r});var a=e("t3Un");function s(t){return Object(a.a)({url:"/api/crew/allCrew",method:"get",params:{query:t}})}function r(t){return Object(a.a)({url:"/api/crew/statistics/query",method:"get",params:{callsign:t}})}},iSKu:function(t,i,e){},iTxv:function(t,i,e){"use strict";var a=e("iSKu");e.n(a).a}}]);