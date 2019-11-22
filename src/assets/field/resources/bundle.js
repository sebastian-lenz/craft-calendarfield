!function(t){var i={}
function e(a){if(i[a])return i[a].exports
var n=i[a]={i:a,l:!1,exports:{}}
return t[a].call(n.exports,n,n.exports,e),n.l=!0,n.exports}e.m=t,e.c=i,e.d=function(t,i,a){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:a})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t
if(4&i&&"object"==typeof t&&t&&t.__esModule)return t
var a=Object.create(null)
if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var n in t)e.d(a,n,function(i){return t[i]}.bind(null,n))
return a},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t}
return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=5)}([function(t,i){t.exports=L},,function(t,i,e){},function(t,i,e){},function(t,i,e){},function(t,i,e){"use strict"
e.r(i)
e(2),e(3)
class a{constructor(t){const i=$(t.container)
if(this.$container=i,this.$dateAllDay=i.find(t.dateAllDay),!i.data("ICalField.Date")&&(i.data("ICalField.Date",this),this.createSelectToggles(),this.updateState(),!t.disabled)){var e=this
this.$dateAllDay.parent().on("click",()=>{e.updateState()})}}createSelectToggles(){this.$container.find(".calendarfield--selectToggle").each((function(t,i){const e=$(i),a=e.find("select"),n=e.closest(".calendarfield--toggleScope")
let l=a.val()+""
a.on("click change",(function(){const t=a.val()+""
t!==l&&(n.removeClass(l).addClass(t),l=t)}))}))}isAllDay(){return!!this.$dateAllDay.val()}updateState(){this.$container.find(".timewrapper").toggle(!this.isAllDay())}}var n,l=e(0)
e(4)
class s{constructor(t){this.disabled=!1,this.initialLatitude=51.5,this.initialLongitude=-.09,this.initialZoom=16,this.latitude=0,this.longitude=0,this.map=null,this.marker=null,this.onMarkerDragEnd=t=>{if(this.isEnabled()){const i=t.target.getLatLng()
this.$latitude.val(i.lat),this.$longitude.val(i.lng)}},this.onMarkGeoCode=t=>{const{$latitude:i,$longitude:e,map:a,marker:n}=this
if(this.isEnabled()&&a&&n){const l=t.geocode.center
n.setLatLng(l),a.setView(l,this.initialZoom),i.val(l.lat),e.val(l.lng)}}
const i=$(t.container)
if(this.$container=i,this.$latitude=i.find(t.latitude),this.$longitude=i.find(t.longitude),this.$enabled=i.find(t.enabled),this.$viewport=i.find(".calendarfield--mapViewport"),i.data("ICalField.Map"))return
i.data("ICalField.Map",this),this.disabled=!!t.disabled,this.latitude=parseFloat(this.$latitude.val()+""),this.longitude=parseFloat(this.$longitude.val()+"")
const e=parseFloat(t.initialLatitude),a=parseFloat(t.initialLongitude)
isNaN(e)||isNaN(a)||(this.initialLatitude=e,this.initialLongitude=a),isNaN(this.latitude)||isNaN(this.latitude)||(this.$enabled.prop("checked",!0),this.updateState())
var n=this
this.$enabled.parent().on("click",(function(){n.updateState()}))}createMap(){if(!this.map){const t=this.$container.find(".calendarfield--mapPlugin").get(0),i=l.map(t)
i.setView(this.getLatLng(),this.initialZoom),l.tileLayer("https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png",{attribution:'<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',minZoom:1,maxZoom:19}).addTo(i)
const e=l.marker(this.getLatLng(),{draggable:!this.disabled}).addTo(i)
e.on("dragend",this.onMarkerDragEnd),l.Control.geocoder({defaultMarkGeocode:!1}).on("markgeocode",this.onMarkGeoCode).addTo(i),Garnish.$win.on("resize",(function(){i.invalidateSize()})),this.map=i,this.marker=e}}getLatLng(){return[isNaN(this.latitude)?this.initialLatitude:this.latitude,isNaN(this.longitude)?this.initialLongitude:this.longitude]}isEnabled(){return this.$enabled.prop("checked")}updateState(){if(this.isEnabled()){const t=this.getLatLng()
this.$latitude.val(t[0]),this.$longitude.val(t[1]),this.$viewport.addClass("isVisible"),this.createMap()}else this.$latitude.val(""),this.$longitude.val(""),this.$viewport.removeClass("isVisible")}}(n=window).CalendarField=Object.assign(Object.assign({},n.CalendarField||{}),{Field:a,Map:s})}])
