(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{317:function(e,t,n){var content=n(348);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(62).default)("1b7833da",content,!0,{sourceMap:!1})},347:function(e,t,n){"use strict";n(317)},348:function(e,t,n){var o=n(61)(!1);o.push([e.i,".jsoneditor-outer{min-height:10rem}",""]),e.exports=o},353:function(e,t,n){"use strict";n.r(t);var o=n(352),r=n(349),l=n(346),c={head:function(){return{link:[{hid:"canonical",rel:"canonical",href:"https://build.cloudevents.gdn"}]}},components:{VueJsonEditor:r.a},data:function(){return{data:null,originactor:"user:admin#id=1234",source:"build.cloudevents.gdn",type:"cmd.placeholder.v0",wschannelid:"my-private-channel-name"}},computed:{cloudevent:function(){if(!this.source)return"Source is required";if(!this.type)return"Type is required";var e={originactor:this.originactor||void 0,source:this.source,type:this.type,wschannelid:this.wschannelid||void 0};this.data&&(e.data=JSON.stringify(this.data));var t=new l.a(e);return t}}},d=(n(347),n(86)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("article",{staticClass:"d-flex flex-column",staticStyle:{gap:"0.75rem"}},[e._m(0),e._v(" "),n("div",[n(o.a,{attrs:{label:"Source"},model:{value:e.source,callback:function(t){e.source=t},expression:"source"}}),e._v(" "),n(o.a,{attrs:{label:"Type"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}}),e._v(" "),n(o.a,{attrs:{label:"Websockets Channel Id"},model:{value:e.wschannelid,callback:function(t){e.wschannelid=t},expression:"wschannelid"}}),e._v(" "),n(o.a,{attrs:{label:"Origin Actor"},model:{value:e.originactor,callback:function(t){e.originactor=t},expression:"originactor"}})],1),e._v(" "),n("vue-json-editor",{attrs:{"expanded-on-start":"",mode:"code"},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}}),e._v(" "),n("section",[e._m(1),e._v(" "),n("pre",[e._v(e._s(e.cloudevent))])]),e._v(" "),n("section",[e._m(2),e._v(" "),n("div",[e._v("'"+e._s(JSON.stringify(e.cloudevent))+"'")])])],1)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",[e._v("Cloudevent Builder")]),e._v(" "),n("p",[e._v("\n\t\t\t\tEasily build cloudevents to inject into\n\t\t\t\tAWS Lambda or your local develompent\n\t\t\t\tenvironment\n\t\t\t")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h2",[e._v("AWS Lambda Test Console")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h2",[e._v("Local Development Console")])])}],!1,null,null,null);t.default=component.exports}}]);