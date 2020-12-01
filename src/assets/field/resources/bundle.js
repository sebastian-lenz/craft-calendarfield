!function(t){var e={}
function i(a){if(e[a])return e[a].exports
var s=e[a]={i:a,l:!1,exports:{}}
return t[a].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t
if(4&e&&"object"==typeof t&&t&&t.__esModule)return t
var a=Object.create(null)
if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s))
return a},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t}
return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=9)}([,function(t,e){t.exports=L},,,,function(t,e,i){},function(t,e,i){},function(t,e,i){},,function(t,e,i){"use strict"
i.r(e)
function a(t,e){$(t).trigger(e)}function s(t,e){return $(t).hasClass(e)}class n{constructor(t,e={}){this.dateDelta=0,this.timeDelta=0,this.handleEvent=t=>{this._unbindChangeHandler(),s(t.target,this.settings.dateClass)?""!=t.target.value?(this._dateChanged(t.target),this._timeChanged(t.target)):this.dateDelta=0:s(t.target,this.settings.timeClass)&&(""!=t.target.value?this._timeChanged(t.target):this.timeDelta=0),this._validateRanges(),this._updateEndMintime(),this._bindChangeHandler()},this.container=t,this.settings=Object.assign(Object.assign({},{startClass:"start",endClass:"end",timeClass:"time",dateClass:"date",defaultDateDelta:0,defaultTimeDelta:36e5,anchor:"start",parseTime:t=>$(t).timepicker("getTime"),updateTime:(t,e)=>{$(t).timepicker("setTime",e)},setMinTime:(t,e)=>{$(t).timepicker("option","minTime",e)},parseDate:t=>t.value?$(t).datepicker("getDate"):null,updateDate:(t,e)=>{$(t).datepicker("setDate",e)}}),e),this.startDateInput=this.container.querySelector("."+this.settings.startClass+"."+this.settings.dateClass),this.endDateInput=this.container.querySelector("."+this.settings.endClass+"."+this.settings.dateClass),this.startTimeInput=this.container.querySelector("."+this.settings.startClass+"."+this.settings.timeClass),this.endTimeInput=this.container.querySelector("."+this.settings.endClass+"."+this.settings.timeClass),this.refresh(),this._bindChangeHandler()}setOptions(t){this.settings=Object.assign(Object.assign({},this.settings),t),this._updateEndMintime()}getTimeDiff(){let t=this.dateDelta+this.timeDelta
return!(t<0)||this.startDateInput&&this.endDateInput||(t+=864e5),t}refresh(){const{endDateInput:t,endTimeInput:e,settings:i,startDateInput:a,startTimeInput:s}=this
if(a&&a.value&&t&&t.value){const e=i.parseDate(a),s=i.parseDate(t)
e&&s&&(this.dateDelta=s.getTime()-e.getTime())}if(s&&s.value&&e&&e.value){const t=i.parseTime(s),a=i.parseTime(e)
t&&a&&(this.timeDelta=a.getTime()-t.getTime(),this._updateEndMintime())}}remove(){this._unbindChangeHandler()}_bindChangeHandler(){$(this.container).on("change.datepair",this.handleEvent)}_unbindChangeHandler(){$(this.container).off("change.datepair")}_dateChanged(t){const{endDateInput:e,startDateInput:i}=this
if(!i||!e)return
const{anchor:a,defaultDateDelta:n,endClass:l,parseDate:r,startClass:d,updateDate:o}=this.settings,h=r(i),u=r(e)
if(h&&u)if("start"==a&&s(t,d))o(e,new Date(h.getTime()+this.dateDelta))
else if("end"==a&&s(t,l))o(i,new Date(u.getTime()-this.dateDelta))
else if(u<h){const a=s(t,d)?e:i
this.dateDelta=0,o(a,r(t))}else this.dateDelta=u.getTime()-h.getTime()
else null!==n?(h?o(e,new Date(h.getTime()+864e5*n)):u&&o(i,new Date(u.getTime()-864e5*n)),this.dateDelta=864e5*n):this.dateDelta=0}_timeChanged(t){const{endDateInput:e,endTimeInput:i,startDateInput:a,startTimeInput:n}=this
if(!n||!i)return
const{anchor:l,defaultTimeDelta:r,endClass:d,parseTime:o,startClass:h,updateTime:u}=this.settings
let c=o(n),g=o(i)
if(c&&g)if("start"==l&&s(t,h))g=this._setTimeAndReturn(i,new Date(c.getTime()+this.timeDelta)),this._doMidnightRollover(c,g)
else if("end"==l&&s(t,d))c=this._setTimeAndReturn(n,new Date(g.getTime()-this.timeDelta)),this._doMidnightRollover(c,g)
else{var p,m
if(this._doMidnightRollover(c,g),a&&e&&(p=this.settings.parseDate(a),m=this.settings.parseDate(e)),p==m&&g<c){const e=s(t,d)?i:n,a=s(t,h)?i:n,l=o(e)
this.timeDelta=0,u(a,l)}else this.timeDelta=g.getTime()-c.getTime()}else null!==r?(this.timeDelta=r,c?(g=this._setTimeAndReturn(i,new Date(c.getTime()+r)),this._doMidnightRollover(c,g)):g&&(c=this._setTimeAndReturn(n,new Date(g.getTime()-r)),this._doMidnightRollover(c,g))):this.timeDelta=0}_setTimeAndReturn(t,e){return this.settings.updateTime(t,e),this.settings.parseTime(t)||e}_doMidnightRollover(t,e){const{dateDelta:i,endDateInput:a,startDateInput:s,timeDelta:n}=this
if(!s||!a)return
const{anchor:l,parseDate:r,updateDate:d}=this.settings,o=r(a),h=r(s),u=e.getTime()-t.getTime(),c=e<t?864e5:-864e5
null!==i&&i+n<=864e5&&i+u!=0&&(c>0||0!=i)&&(u>=0&&n<0||u<0&&n>=0)&&("start"==l&&o?(d(a,new Date(o.getTime()+c)),this._dateChanged(a)):"end"==l&&h&&(d(s,new Date(h.getTime()-c)),this._dateChanged(s))),this.timeDelta=u}_updateEndMintime(){const{dateDelta:t,endTimeInput:e,startTimeInput:i,timeDelta:a}=this,{anchor:s,parseTime:n,setMinTime:l}=this.settings
if(!e||!l||!i)return
let r=null
"start"==s&&(!t||t<864e5||a&&t+a<864e5)&&(r=n(i)),l(e,r)}_validateRanges(){this.startTimeInput&&this.endTimeInput&&null===this.timeDelta||this.startDateInput&&this.endDateInput&&null===this.dateDelta?a(this.container,"rangeIncomplete"):!this.startDateInput||!this.endDateInput||this.dateDelta+this.timeDelta>=0?a(this.container,"rangeSelected"):a(this.container,"rangeError")}}i(5),i(6)
class l{constructor(t){const e=$(t.container)
if(this.$container=e,this.$dateAllDay=e.find(t.dateAllDay),!e.data("ICalField.Date")&&(e.data("ICalField.Date",this),this.createSelectToggles(),this.createDatePair(),this.updateState(),!t.disabled)){var i=this
this.$dateAllDay.parent().on("click",()=>{i.updateState()})}}createDatePair(){const t=this.$container.find(".calendarfield--dateCommon")
t.length&&(t.find(".datewrapper > input, .timewrapper > input").each((t,e)=>{const i=e.getAttribute("name")||"",a=/\[(?:date(End|Start))\]\[(date|time)\]/.exec(i)
a&&e.classList.add((""+a[1]).toLowerCase(),(""+a[2]).toLowerCase())}),new n(t.get(0)))}createSelectToggles(){this.$container.find(".calendarfield--selectToggle").each((function(t,e){const i=$(e),a=i.find("select"),s=i.closest(".calendarfield--toggleScope")
let n=a.val()+""
a.on("click change",(function(){const t=a.val()+""
t!==n&&(s.removeClass(n).addClass(t),n=t)}))}))}isAllDay(){return!!this.$dateAllDay.val()}updateState(){this.$container.find(".timewrapper").toggle(!this.isAllDay())}}var r,d=i(1)
i(7)
class o{constructor(t){this.disabled=!1,this.initialLatitude=51.5,this.initialLongitude=-.09,this.initialZoom=16,this.latitude=0,this.longitude=0,this.map=null,this.marker=null,this.onMarkerDragEnd=t=>{if(this.isEnabled()){const e=t.target.getLatLng()
this.$latitude.val(e.lat),this.$longitude.val(e.lng)}},this.onMarkGeoCode=t=>{const{$latitude:e,$longitude:i,map:a,marker:s}=this
if(this.isEnabled()&&a&&s){const n=t.geocode.center
s.setLatLng(n),a.setView(n,this.initialZoom),e.val(n.lat),i.val(n.lng)}}
const e=$(t.container)
if(this.$container=e,this.$latitude=e.find(t.latitude),this.$longitude=e.find(t.longitude),this.$enabled=e.find(t.enabled),this.$viewport=e.find(".calendarfield--mapViewport"),e.data("ICalField.Map"))return
e.data("ICalField.Map",this),this.disabled=!!t.disabled,this.latitude=parseFloat(this.$latitude.val()+""),this.longitude=parseFloat(this.$longitude.val()+"")
const i=parseFloat(t.initialLatitude),a=parseFloat(t.initialLongitude)
isNaN(i)||isNaN(a)||(this.initialLatitude=i,this.initialLongitude=a),isNaN(this.latitude)||isNaN(this.latitude)||(this.$enabled.prop("checked",!0),this.updateState())
var s=this
this.$enabled.parent().on("click",(function(){s.updateState()}))}createMap(){if(!this.map){const t=this.$container.find(".calendarfield--mapPlugin").get(0),e=d.map(t)
e.setView(this.getLatLng(),this.initialZoom),d.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',minZoom:1,maxZoom:19}).addTo(e)
const i=d.marker(this.getLatLng(),{draggable:!this.disabled}).addTo(e)
i.on("dragend",this.onMarkerDragEnd),d.Control.geocoder({defaultMarkGeocode:!1}).on("markgeocode",this.onMarkGeoCode).addTo(e),Garnish.$win.on("resize",(function(){e.invalidateSize()})),this.map=e,this.marker=i}}getLatLng(){return[isNaN(this.latitude)?this.initialLatitude:this.latitude,isNaN(this.longitude)?this.initialLongitude:this.longitude]}isEnabled(){return this.$enabled.prop("checked")}updateState(){if(this.isEnabled()){const t=this.getLatLng()
this.$latitude.val(t[0]),this.$longitude.val(t[1]),this.$viewport.addClass("isVisible"),this.createMap()}else this.$latitude.val(""),this.$longitude.val(""),this.$viewport.removeClass("isVisible")}}(r=window).CalendarField=Object.assign(Object.assign({},r.CalendarField||{}),{Field:l,Map:o})}])
