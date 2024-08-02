(()=>{"use strict"
const t=864e5
function e(t,e){$(t).trigger(e)}function i(t,e){return $(t).hasClass(e)}class a{constructor(t,e={}){this.dateDelta=0,this.timeDelta=0,this.handleEvent=t=>{this._unbindChangeHandler(),i(t.target,this.settings.dateClass)?""!=t.target.value?(this._dateChanged(t.target),this._timeChanged(t.target)):this.dateDelta=0:i(t.target,this.settings.timeClass)&&(""!=t.target.value?this._timeChanged(t.target):this.timeDelta=0),this._validateRanges(),this._updateEndMintime(),this._bindChangeHandler()},this.container=t,this.settings=Object.assign(Object.assign({},{startClass:"start",endClass:"end",timeClass:"time",dateClass:"date",defaultDateDelta:0,defaultTimeDelta:36e5,anchor:"start",parseTime:t=>$(t).timepicker("getTime"),updateTime:(t,e)=>{$(t).timepicker("setTime",e)},setMinTime:(t,e)=>{$(t).timepicker("option","minTime",e)},parseDate:t=>t.value?$(t).datepicker("getDate"):null,updateDate:(t,e)=>{$(t).datepicker("setDate",e)}}),e),this.startDateInput=this.container.querySelector("."+this.settings.startClass+"."+this.settings.dateClass),this.endDateInput=this.container.querySelector("."+this.settings.endClass+"."+this.settings.dateClass),this.startTimeInput=this.container.querySelector("."+this.settings.startClass+"."+this.settings.timeClass),this.endTimeInput=this.container.querySelector("."+this.settings.endClass+"."+this.settings.timeClass),this.refresh(),this._bindChangeHandler()}setOptions(t){this.settings=Object.assign(Object.assign({},this.settings),t),this._updateEndMintime()}getTimeDiff(){let e=this.dateDelta+this.timeDelta
return!(e<0)||this.startDateInput&&this.endDateInput||(e+=t),e}refresh(){const{endDateInput:t,endTimeInput:e,settings:i,startDateInput:a,startTimeInput:s}=this
if(a&&a.value&&t&&t.value){const e=i.parseDate(a),s=i.parseDate(t)
e&&s&&(this.dateDelta=s.getTime()-e.getTime())}if(s&&s.value&&e&&e.value){const t=i.parseTime(s),a=i.parseTime(e)
t&&a&&(this.timeDelta=a.getTime()-t.getTime(),this._updateEndMintime())}}remove(){this._unbindChangeHandler()}_bindChangeHandler(){$(this.container).on("change.datepair",this.handleEvent)}_unbindChangeHandler(){$(this.container).off("change.datepair")}_dateChanged(e){const{endDateInput:a,startDateInput:s}=this
if(!s||!a)return
const{anchor:n,defaultDateDelta:l,endClass:d,parseDate:r,startClass:h,updateDate:o}=this.settings,g=r(s),u=r(a)
if(g&&u)if("start"==n&&i(e,h))o(a,new Date(g.getTime()+this.dateDelta))
else if("end"==n&&i(e,d))o(s,new Date(u.getTime()-this.dateDelta))
else if(u<g){const t=i(e,h)?a:s
this.dateDelta=0,o(t,r(e))}else this.dateDelta=u.getTime()-g.getTime()
else null!==l?(g?o(a,new Date(g.getTime()+l*t)):u&&o(s,new Date(u.getTime()-l*t)),this.dateDelta=l*t):this.dateDelta=0}_timeChanged(t){const{endDateInput:e,endTimeInput:a,startDateInput:s,startTimeInput:n}=this
if(!n||!a)return
const{anchor:l,defaultTimeDelta:d,endClass:r,parseTime:h,startClass:o,updateTime:g}=this.settings
let u=h(n),c=h(a)
if(u&&c)if("start"==l&&i(t,o))c=this._setTimeAndReturn(a,new Date(u.getTime()+this.timeDelta)),this._doMidnightRollover(u,c)
else if("end"==l&&i(t,r))u=this._setTimeAndReturn(n,new Date(c.getTime()-this.timeDelta)),this._doMidnightRollover(u,c)
else{var m,p
if(this._doMidnightRollover(u,c),s&&e&&(m=this.settings.parseDate(s),p=this.settings.parseDate(e)),m==p&&c<u){const e=i(t,r)?a:n,s=i(t,o)?a:n,l=h(e)
this.timeDelta=0,g(s,l)}else this.timeDelta=c.getTime()-u.getTime()}else null!==d?(this.timeDelta=d,u?(c=this._setTimeAndReturn(a,new Date(u.getTime()+d)),this._doMidnightRollover(u,c)):c&&(u=this._setTimeAndReturn(n,new Date(c.getTime()-d)),this._doMidnightRollover(u,c))):this.timeDelta=0}_setTimeAndReturn(t,e){return this.settings.updateTime(t,e),this.settings.parseTime(t)||e}_doMidnightRollover(e,i){const{dateDelta:a,endDateInput:s,startDateInput:n,timeDelta:l}=this
if(!n||!s)return
const{anchor:d,parseDate:r,updateDate:h}=this.settings,o=r(s),g=r(n),u=i.getTime()-e.getTime(),c=i<e?t:-864e5
null!==a&&a+l<=t&&a+u!=0&&(c>0||0!=a)&&(u>=0&&l<0||u<0&&l>=0)&&("start"==d&&o?(h(s,new Date(o.getTime()+c)),this._dateChanged(s)):"end"==d&&g&&(h(n,new Date(g.getTime()-c)),this._dateChanged(n))),this.timeDelta=u}_updateEndMintime(){const{dateDelta:e,endTimeInput:i,startTimeInput:a,timeDelta:s}=this,{anchor:n,parseTime:l,setMinTime:d}=this.settings
if(!i||!d||!a)return
let r=null
"start"==n&&(!e||e<t||s&&e+s<t)&&(r=l(a)),d(i,r)}_validateRanges(){this.startTimeInput&&this.endTimeInput&&null===this.timeDelta||this.startDateInput&&this.endDateInput&&null===this.dateDelta?e(this.container,"rangeIncomplete"):!this.startDateInput||!this.endDateInput||this.dateDelta+this.timeDelta>=0?e(this.container,"rangeSelected"):e(this.container,"rangeError")}}class s{constructor(t){const e=$(t.container)
if(this.$container=e,this.$dateAllDay=e.find(t.dateAllDay),!e.data("ICalField.Date")&&(e.data("ICalField.Date",this),this.createSelectToggles(),this.createDatePair(),this.updateState(),!t.disabled)){var i=this
this.$dateAllDay.parent().on("click",(()=>{i.updateState()}))}}createDatePair(){const t=this.$container.find(".calendarfield--dateCommon")
t.length&&(t.find(".datewrapper > input, .timewrapper > input").each(((t,e)=>{const i=e.getAttribute("name")||"",a=/\[(?:date(End|Start))\]\[(date|time)\]/.exec(i)
a&&e.classList.add(`${a[1]}`.toLowerCase(),`${a[2]}`.toLowerCase())})),t.each(((t,e)=>{new a(e)})))}createSelectToggles(){this.$container.find(".calendarfield--selectToggle").each((function(t,e){const i=$(e),a=i.find("select"),s=i.closest(".calendarfield--toggleScope")
let n=a.val()+""
a.on("click change",(function(){const t=a.val()+""
t!==n&&(s.removeClass(n).addClass(t),n=t)}))}))}isAllDay(){return!!this.$dateAllDay.val()}updateState(){this.$container.find(".timewrapper").toggle(!this.isAllDay())}}const n=L
class l{constructor(t){this.disabled=!1,this.initialLatitude=51.5,this.initialLongitude=-.09,this.initialZoom=16,this.latitude=0,this.longitude=0,this.map=null,this.marker=null,this.onMarkerDragEnd=t=>{if(this.isEnabled()){const e=t.target.getLatLng()
this.$latitude.val(e.lat),this.$longitude.val(e.lng)}},this.onMarkGeoCode=t=>{const{$latitude:e,$longitude:i,map:a,marker:s}=this
if(this.isEnabled()&&a&&s){const n=t.geocode.center
s.setLatLng(n),a.setView(n,this.initialZoom),e.val(n.lat),i.val(n.lng)}}
const e=$(t.container)
if(this.$container=e,this.$latitude=e.find(t.latitude),this.$longitude=e.find(t.longitude),this.$enabled=e.find(t.enabled),this.$viewport=e.find(".calendarfield--mapViewport"),e.data("ICalField.Map"))return
e.data("ICalField.Map",this),this.disabled=!!t.disabled,this.latitude=parseFloat(this.$latitude.val()+""),this.longitude=parseFloat(this.$longitude.val()+"")
const i=parseFloat(t.initialLatitude),a=parseFloat(t.initialLongitude)
isNaN(i)||isNaN(a)||(this.initialLatitude=i,this.initialLongitude=a),isNaN(this.latitude)||isNaN(this.latitude)||(this.$enabled.prop("checked",!0),this.updateState())
var s=this
this.$enabled.parent().on("click",(function(){s.updateState()}))}createMap(){if(!this.map){const t=this.$container.find(".calendarfield--mapPlugin").get(0)
if(!t)return
const e=n.map(t)
e.setView(this.getLatLng(),this.initialZoom),n.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',minZoom:1,maxZoom:19}).addTo(e)
const i=n.marker(this.getLatLng(),{draggable:!this.disabled}).addTo(e)
i.on("dragend",this.onMarkerDragEnd),n.Control.geocoder({defaultMarkGeocode:!1}).on("markgeocode",this.onMarkGeoCode).addTo(e),Garnish.$win.on("resize",(function(){e.invalidateSize()})),this.map=e,this.marker=i}}getLatLng(){return[isNaN(this.latitude)?this.initialLatitude:this.latitude,isNaN(this.longitude)?this.initialLongitude:this.longitude]}isEnabled(){return this.$enabled.prop("checked")}updateState(){if(this.isEnabled()){const t=this.getLatLng()
this.$latitude.val(t[0]),this.$longitude.val(t[1]),this.$viewport.addClass("isVisible"),this.createMap()}else this.$latitude.val(""),this.$longitude.val(""),this.$viewport.removeClass("isVisible")}}var d;(d=window).CalendarField=Object.assign(Object.assign({},d.CalendarField||{}),{Field:s,Map:l})})()
