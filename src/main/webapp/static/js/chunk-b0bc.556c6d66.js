(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-b0bc"],{"1/+f":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-row",{attrs:{gutter:20}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t._v("ID")]),t._v(" "),a("div",[t._v("\n        "+t._s(t.list.id)+"\n      ")])])],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"25px"},attrs:{gutter:20}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t._v("Title")]),t._v(" "),a("div",[t._v("\n        "+t._s(t.list.title)+"\n      ")])])],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"25px"},attrs:{gutter:20}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t._v("Programme Level Learning Outcomes")]),t._v(" "),a("div",[t._v("\n        "+t._s(t.list.content)+"\n      ")])])],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"25px"},attrs:{gutter:20}},[a("el-col",{staticClass:"text-center",attrs:{span:12}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t._v("Author")]),t._v(" "),a("div",[t._v("\n          "+t._s(t.list.author)+"\n        ")])])],1),t._v(" "),a("el-col",{staticClass:"text-center",attrs:{span:12}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t._v("Status")]),t._v(" "),a("div",[a("el-tag",{attrs:{type:t._f("statusFilter")(t.list.status)}},[t._v(t._s(t.list.status))])],1)])],1)],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"25px"},attrs:{gutter:20}},[a("el-col",{staticClass:"text-center",attrs:{span:12}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t._v("Core Modules")]),t._v(" "),a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"core_module",attrs:{data:t.listCoreModule,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{label:"Code",prop:"code"}}),t._v(" "),a("el-table-column",{attrs:{label:"Name",prop:"name"}}),t._v(" "),a("el-table-column",{attrs:{label:"Tutor",prop:"tutor"}})],1)],1)])],1),t._v(" "),a("el-col",{staticClass:"text-center",attrs:{span:12}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t._v("Optional Modules")]),t._v(" "),a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.listModule,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{label:"Code",prop:"code"}}),t._v(" "),a("el-table-column",{attrs:{label:"Name",prop:"name"}}),t._v(" "),a("el-table-column",{attrs:{label:"Tutor",prop:"tutor"}})],1)],1)])],1)],1),t._v(" "),a("el-button",{staticStyle:{"margin-top":"25px"},on:{click:function(e){t.cancelSelection()}}},[t._v("Cancel Selection")]),t._v(" "),a("el-button",{staticStyle:{"margin-top":"25px"},on:{click:function(e){t.getSelection()}}},[t._v("Display the detail of the selected module(s)")]),t._v(" "),a("el-row",{staticStyle:{"margin-top":"25px"},attrs:{gutter:20}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t._v("History")]),t._v(" "),a("div",[t._v("\n        "+t._s(t.list.content)+"\n      ")])])],1)],1)};l._withStripped=!0;var s=a("LV0z"),r={name:"Detail",filters:{statusFilter:function(t){return{Published:"success",Draft:"gray",Deleted:"danger"}[t]}},data:function(){return{list:null,listModule:null,listCoreModule:null,listLoading:!1,multipleSelection:[]}},created:function(){var t=this.$route.params&&this.$route.params.id;this.getData(t)},methods:{getData:function(t){var e=this;this.listLoading=!0,Object(s.b)(t).then(function(t){e.list=t.items}).catch(function(t){console.log(t)}),Object(s.c)(t).then(function(t){e.listCoreModule=t.items}).catch(function(t){console.log(t)}),Object(s.d)(t).then(function(t){e.listModule=t.items}).catch(function(t){console.log(t)}),this.listLoading=!1},cancelSelection:function(t){this.$refs.core_module.clearSelection()},handleSelectionChange:function(t){this.multipleSelection=t}}},i=a("KHd+"),o=Object(i.a)(r,l,[],!1,null,null,null);o.options.__file="src/views/crew/overview/detail.vue";e.default=o.exports},LV0z:function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return r}),a.d(e,"c",function(){return i}),a.d(e,"d",function(){return o});var l=a("t3Un");function s(t){return Object(l.a)({url:"/programme/list",method:"get",params:{query:t}})}function r(t){return Object(l.a)({url:"/programme/detail",method:"get",params:{id:t}})}function i(t){return Object(l.a)({url:"/programme/module/core",method:"get",params:{id:t}})}function o(t){return Object(l.a)({url:"/programme/module/optional",method:"get",params:{id:t}})}}}]);