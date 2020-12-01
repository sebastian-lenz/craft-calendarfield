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
const a=864e5
function s(t,e){$(t).trigger(e)}function n(t,e){return $(t).hasClass(e)}class l{constructor(t,e={}){this.dateDelta=0,this.timeDelta=0,this.handleEvent=t=>{this._unbindChangeHandler(),n(t.target,this.settings.dateClass)?""!=t.target.value?(this._dateChanged(t.target),this._timeChanged(t.target)):this.dateDelta=0:n(t.target,this.settings.timeClass)&&(""!=t.target.value?this._timeChanged(t.target):this.timeDelta=0),this._validateRanges(),this._updateEndMintime(),this._bindChangeHandler()},this.container=t,this.settings=Object.assign(Object.assign({},{startClass:"start",endClass:"end",timeClass:"time",dateClass:"date",defaultDateDelta:0,defaultTimeDelta:36e5,anchor:"start",parseTime:t=>$(t).timepicker("getTime"),updateTime:(t,e)=>{$(t).timepicker("setTime",e)},setMinTime:(t,e)=>{$(t).timepicker("option","minTime",e)},parseDate:t=>t.value?$(t).datepicker("getDate"):null,updateDate:(t,e)=>{$(t).datepicker("setDate",e)}}),e),this.startDateInput=this.container.querySelector("."+this.settings.startClass+"."+this.settings.dateClass),this.endDateInput=this.container.querySelector("."+this.settings.endClass+"."+this.settings.dateClass),this.startTimeInput=this.container.querySelector("."+this.settings.startClass+"."+this.settings.timeClass),this.endTimeInput=this.container.querySelector("."+this.settings.endClass+"."+this.settings.timeClass),this.refresh(),this._bindChangeHandler()}setOptions(t){this.settings=Object.assign(Object.assign({},this.settings),t),this._updateEndMintime()}getTimeDiff(){let t=this.dateDelta+this.timeDelta
return!(t<0)||this.startDateInput&&this.endDateInput||(t+=a),t}refresh(){const{endDateInput:t,endTimeInput:e,settings:i,startDateInput:a,startTimeInput:s}=this
if(a&&a.value&&t&&t.value){const e=i.parseDate(a),s=i.parseDate(t)
e&&s&&(this.dateDelta=s.getTime()-e.getTime())}if(s&&s.value&&e&&e.value){const t=i.parseTime(s),a=i.parseTime(e)
t&&a&&(this.timeDelta=a.getTime()-t.getTime(),this._updateEndMintime())}}remove(){this._unbindChangeHandler()}_bindChangeHandler(){$(this.container).on("change.datepair",this.handleEvent)}_unbindChangeHandler(){$(this.container).off("change.datepair")}_dateChanged(t){const{endDateInput:e,startDateInput:i}=this
if(!i||!e)return
const{anchor:s,defaultDateDelta:l,endClass:r,parseDate:d,startClass:o,updateDate:h}=this.settings,u=d(i),c=d(e)
if(u&&c)if("start"==s&&n(t,o))h(e,new Date(u.getTime()+this.dateDelta))
else if("end"==s&&n(t,r))h(i,new Date(c.getTime()-this.dateDelta))
else if(c<u){const a=n(t,o)?e:i
this.dateDelta=0,h(a,d(t))}else this.dateDelta=c.getTime()-u.getTime()
else null!==l?(u?h(e,new Date(u.getTime()+l*a)):c&&h(i,new Date(c.getTime()-l*a)),this.dateDelta=l*a):this.dateDelta=0}_timeChanged(t){const{endDateInput:e,endTimeInput:i,startDateInput:a,startTimeInput:s}=this
if(!s||!i)return
const{anchor:l,defaultTimeDelta:r,endClass:d,parseTime:o,startClass:h,updateTime:u}=this.settings
let c=o(s),g=o(i)
if(c&&g)if("start"==l&&n(t,h))g=this._setTimeAndReturn(i,new Date(c.getTime()+this.timeDelta)),this._doMidnightRollover(c,g)
else if("end"==l&&n(t,d))c=this._setTimeAndReturn(s,new Date(g.getTime()-this.timeDelta)),this._doMidnightRollover(c,g)
else{var p,m
if(this._doMidnightRollover(c,g),a&&e&&(p=this.settings.parseDate(a),m=this.settings.parseDate(e)),p==m&&g<c){const e=n(t,d)?i:s,a=n(t,h)?i:s,l=o(e)
this.timeDelta=0,u(a,l)}else this.timeDelta=g.getTime()-c.getTime()}else null!==r?(this.timeDelta=r,c?(g=this._setTimeAndReturn(i,new Date(c.getTime()+r)),this._doMidnightRollover(c,g)):g&&(c=this._setTimeAndReturn(s,new Date(g.getTime()-r)),this._doMidnightRollover(c,g))):this.timeDelta=0}_setTimeAndReturn(t,e){return this.settings.updateTime(t,e),this.settings.parseTime(t)||e}_doMidnightRollover(t,e){const{dateDelta:i,endDateInput:s,startDateInput:n,timeDelta:l}=this
if(!n||!s)return
const{anchor:r,parseDate:d,updateDate:o}=this.settings,h=d(s),u=d(n),c=e.getTime()-t.getTime(),g=e<t?a:-1*a
null!==i&&i+l<=a&&i+c!=0&&(g>0||0!=i)&&(c>=0&&l<0||c<0&&l>=0)&&("start"==r&&h?(o(s,new Date(h.getTime()+g)),this._dateChanged(s)):"end"==r&&u&&(o(n,new Date(u.getTime()-g)),this._dateChanged(n))),this.timeDelta=c}_updateEndMintime(){const{dateDelta:t,endTimeInput:e,startTimeInput:i,timeDelta:s}=this,{anchor:n,parseTime:l,setMinTime:r}=this.settings
if(!e||!r||!i)return
let d=null
"start"==n&&(!t||t<a||s&&t+s<a)&&(d=l(i)),r(e,d)}_validateRanges(){this.startTimeInput&&this.endTimeInput&&null===this.timeDelta?s(this.container,"rangeIncomplete"):this.startDateInput&&this.endDateInput&&null===this.dateDelta?s(this.container,"rangeIncomplete"):!this.startDateInput||!this.endDateInput||this.dateDelta+this.timeDelta>=0?s(this.container,"rangeSelected"):s(this.container,"rangeError")}}i(5),i(6)
class r{constructor(t){const e=$(t.container)
if(this.$container=e,this.$dateAllDay=e.find(t.dateAllDay),!e.data("ICalField.Date")&&(e.data("ICalField.Date",this),this.createSelectToggles(),this.createDatePair(),this.updateState(),!t.disabled)){var i=this
this.$dateAllDay.parent().on("click",()=>{i.updateState()})}}createDatePair(){const t=this.$container.find(".calendarfield--dateCommon")
t.length&&(t.find(".datewrapper > input, .timewrapper > input").each((t,e)=>{const i=e.getAttribute("name")||"",a=/\[(?:date(End|Start))\]\[(date|time)\]/.exec(i)
a&&e.classList.add(`${a[1]}`.toLowerCase(),`${a[2]}`.toLowerCase())}),new l(t.get(0)))}createSelectToggles(){this.$container.find(".calendarfield--selectToggle").each((function(t,e){const i=$(e),a=i.find("select"),s=i.closest(".calendarfield--toggleScope")
let n=a.val()+""
a.on("click change",(function(){const t=a.val()+""
t!==n&&(s.removeClass(n).addClass(t),n=t)}))}))}isAllDay(){return!!this.$dateAllDay.val()}updateState(){this.$container.find(".timewrapper").toggle(!this.isAllDay())}}var d,o=i(1)
i(7)
class h{constructor(t){this.disabled=!1,this.initialLatitude=51.5,this.initialLongitude=-.09,this.initialZoom=16,this.latitude=0,this.longitude=0,this.map=null,this.marker=null,this.onMarkerDragEnd=t=>{if(this.isEnabled()){const e=t.target.getLatLng()
this.$latitude.val(e.lat),this.$longitude.val(e.lng)}},this.onMarkGeoCode=t=>{const{$latitude:e,$longitude:i,map:a,marker:s}=this
if(this.isEnabled()&&a&&s){const n=t.geocode.center
s.setLatLng(n),a.setView(n,this.initialZoom),e.val(n.lat),i.val(n.lng)}}
const e=$(t.container)
if(this.$container=e,this.$latitude=e.find(t.latitude),this.$longitude=e.find(t.longitude),this.$enabled=e.find(t.enabled),this.$viewport=e.find(".calendarfield--mapViewport"),e.data("ICalField.Map"))return
e.data("ICalField.Map",this),this.disabled=!!t.disabled,this.latitude=parseFloat(this.$latitude.val()+""),this.longitude=parseFloat(this.$longitude.val()+"")
const i=parseFloat(t.initialLatitude),a=parseFloat(t.initialLongitude)
isNaN(i)||isNaN(a)||(this.initialLatitude=i,this.initialLongitude=a),isNaN(this.latitude)||isNaN(this.latitude)||(this.$enabled.prop("checked",!0),this.updateState())
var s=this
this.$enabled.parent().on("click",(function(){s.updateState()}))}createMap(){if(!this.map){const t=this.$container.find(".calendarfield--mapPlugin").get(0),e=o.map(t)
e.setView(this.getLatLng(),this.initialZoom),o.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',minZoom:1,maxZoom:19}).addTo(e)
const i=o.marker(this.getLatLng(),{draggable:!this.disabled}).addTo(e)
i.on("dragend",this.onMarkerDragEnd),o.Control.geocoder({defaultMarkGeocode:!1}).on("markgeocode",this.onMarkGeoCode).addTo(e),Garnish.$win.on("resize",(function(){e.invalidateSize()})),this.map=e,this.marker=i}}getLatLng(){return[isNaN(this.latitude)?this.initialLatitude:this.latitude,isNaN(this.longitude)?this.initialLongitude:this.longitude]}isEnabled(){return this.$enabled.prop("checked")}updateState(){if(this.isEnabled()){const t=this.getLatLng()
this.$latitude.val(t[0]),this.$longitude.val(t[1]),this.$viewport.addClass("isVisible"),this.createMap()}else this.$latitude.val(""),this.$longitude.val(""),this.$viewport.removeClass("isVisible")}}(d=window).CalendarField=Object.assign(Object.assign({},d.CalendarField||{}),{Field:r,Map:h})}])
