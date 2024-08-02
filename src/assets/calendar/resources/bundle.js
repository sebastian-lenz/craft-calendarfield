/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict"
var e={272:(e,t)=>{function n(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function o(e){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},o(e)}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}function s(e,t,n){return s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null]
r.push.apply(r,t)
var i=new(Function.bind.apply(e,r))
return n&&a(i,n.prototype),i},s.apply(null,arguments)}function l(e){var t="function"==typeof Map?new Map:void 0
return l=function(e){if(null===e||!function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}(e))return e
if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function")
if(void 0!==t){if(t.has(e))return t.get(e)
t.set(e,n)}function n(){return s(e,arguments,o(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a(n,e)},l(e)}function u(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}function c(e){var t=0
if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(e){if("string"==typeof e)return u(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e)))return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}var d=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t}(l(Error)),f=function(e){function t(t){return e.call(this,"Invalid DateTime: "+t.toMessage())||this}return i(t,e),t}(d),h=function(e){function t(t){return e.call(this,"Invalid Interval: "+t.toMessage())||this}return i(t,e),t}(d),p=function(e){function t(t){return e.call(this,"Invalid Duration: "+t.toMessage())||this}return i(t,e),t}(d),v=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t}(d),m=function(e){function t(t){return e.call(this,"Invalid unit "+t)||this}return i(t,e),t}(d),g=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t}(d),y=function(e){function t(){return e.call(this,"Zone is an abstract class")||this}return i(t,e),t}(d),E="numeric",b="short",S="long",w={year:E,month:E,day:E},D={year:E,month:b,day:E},C={year:E,month:b,day:E,weekday:b},T={year:E,month:S,day:E},_={year:E,month:S,day:E,weekday:S},k={hour:E,minute:E},R={hour:E,minute:E,second:E},M={hour:E,minute:E,second:E,timeZoneName:b},x={hour:E,minute:E,second:E,timeZoneName:S},I={hour:E,minute:E,hour12:!1},N={hour:E,minute:E,second:E,hour12:!1},O={hour:E,minute:E,second:E,hour12:!1,timeZoneName:b},P={hour:E,minute:E,second:E,hour12:!1,timeZoneName:S},H={year:E,month:E,day:E,hour:E,minute:E},A={year:E,month:E,day:E,hour:E,minute:E,second:E},L={year:E,month:b,day:E,hour:E,minute:E},V={year:E,month:b,day:E,hour:E,minute:E,second:E},U={year:E,month:b,day:E,weekday:b,hour:E,minute:E},F={year:E,month:S,day:E,hour:E,minute:E,timeZoneName:b},W={year:E,month:S,day:E,hour:E,minute:E,second:E,timeZoneName:b},z={year:E,month:S,day:E,weekday:S,hour:E,minute:E,timeZoneName:S},j={year:E,month:S,day:E,weekday:S,hour:E,minute:E,second:E,timeZoneName:S}
function B(e){return void 0===e}function q(e){return"number"==typeof e}function Z(e){return"number"==typeof e&&e%1==0}function G(){try{return"undefined"!=typeof Intl&&Intl.DateTimeFormat}catch(e){return!1}}function Y(){return!B(Intl.DateTimeFormat.prototype.formatToParts)}function X(){try{return"undefined"!=typeof Intl&&!!Intl.RelativeTimeFormat}catch(e){return!1}}function $(e,t,n){if(0!==e.length)return e.reduce((function(e,r){var i=[t(r),r]
return e&&n(e[0],i[0])===e[0]?e:i}),null)[1]}function J(e,t){return t.reduce((function(t,n){return t[n]=e[n],t}),{})}function K(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Q(e,t,n){return Z(e)&&e>=t&&e<=n}function ee(e,t){void 0===t&&(t=2)
var n=e<0?"-":"",r=n?-1*e:e
return""+n+(r.toString().length<t?("0".repeat(t)+r).slice(-t):r.toString())}function te(e){return B(e)||null===e||""===e?void 0:parseInt(e,10)}function ne(e){if(!B(e)&&null!==e&&""!==e){var t=1e3*parseFloat("0."+e)
return Math.floor(t)}}function re(e,t,n){void 0===n&&(n=!1)
var r=Math.pow(10,t)
return(n?Math.trunc:Math.round)(e*r)/r}function ie(e){return e%4==0&&(e%100!=0||e%400==0)}function oe(e){return ie(e)?366:365}function ae(e,t){var n=function(e,t){return e-t*Math.floor(e/t)}(t-1,12)+1
return 2===n?ie(e+(t-n)/12)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function se(e){var t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond)
return e.year<100&&e.year>=0&&(t=new Date(t)).setUTCFullYear(t.getUTCFullYear()-1900),+t}function le(e){var t=(e+Math.floor(e/4)-Math.floor(e/100)+Math.floor(e/400))%7,n=e-1,r=(n+Math.floor(n/4)-Math.floor(n/100)+Math.floor(n/400))%7
return 4===t||3===r?53:52}function ue(e){return e>99?e:e>60?1900+e:2e3+e}function ce(e,t,n,r){void 0===r&&(r=null)
var i=new Date(e),o={hour12:!1,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}
r&&(o.timeZone=r)
var a=Object.assign({timeZoneName:t},o),s=G()
if(s&&Y()){var l=new Intl.DateTimeFormat(n,a).formatToParts(i).find((function(e){return"timezonename"===e.type.toLowerCase()}))
return l?l.value:null}if(s){var u=new Intl.DateTimeFormat(n,o).format(i)
return new Intl.DateTimeFormat(n,a).format(i).substring(u.length).replace(/^[, \u200e]+/,"")}return null}function de(e,t){var n=parseInt(e,10)
Number.isNaN(n)&&(n=0)
var r=parseInt(t,10)||0
return 60*n+(n<0||Object.is(n,-0)?-r:r)}function fe(e){var t=Number(e)
if("boolean"==typeof e||""===e||Number.isNaN(t))throw new g("Invalid unit value "+e)
return t}function he(e,t,n){var r={}
for(var i in e)if(K(e,i)){if(n.indexOf(i)>=0)continue
var o=e[i]
if(null==o)continue
r[t(i)]=fe(o)}return r}function pe(e,t){var n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-"
switch(t){case"short":return""+i+ee(n,2)+":"+ee(r,2)
case"narrow":return""+i+n+(r>0?":"+r:"")
case"techie":return""+i+ee(n,2)+ee(r,2)
default:throw new RangeError("Value format "+t+" is out of range for property format")}}function ve(e){return J(e,["hour","minute","second","millisecond"])}var me=/[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/
function ge(e){return JSON.stringify(e,Object.keys(e).sort())}var ye=["January","February","March","April","May","June","July","August","September","October","November","December"],Ee=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],be=["J","F","M","A","M","J","J","A","S","O","N","D"]
function Se(e){switch(e){case"narrow":return[].concat(be)
case"short":return[].concat(Ee)
case"long":return[].concat(ye)
case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"]
case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"]
default:return null}}var we=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],De=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Ce=["M","T","W","T","F","S","S"]
function Te(e){switch(e){case"narrow":return[].concat(Ce)
case"short":return[].concat(De)
case"long":return[].concat(we)
case"numeric":return["1","2","3","4","5","6","7"]
default:return null}}var _e=["AM","PM"],ke=["Before Christ","Anno Domini"],Re=["BC","AD"],Me=["B","A"]
function xe(e){switch(e){case"narrow":return[].concat(Me)
case"short":return[].concat(Re)
case"long":return[].concat(ke)
default:return null}}function Ie(e,t){for(var n,r="",i=c(e);!(n=i()).done;){var o=n.value
o.literal?r+=o.val:r+=t(o.val)}return r}var Ne={D:w,DD:D,DDD:T,DDDD:_,t:k,tt:R,ttt:M,tttt:x,T:I,TT:N,TTT:O,TTTT:P,f:H,ff:L,fff:F,ffff:z,F:A,FF:V,FFF:W,FFFF:j},Oe=function(){function e(e,t){this.opts=t,this.loc=e,this.systemLoc=null}e.create=function(t,n){return void 0===n&&(n={}),new e(t,n)},e.parseFormat=function(e){for(var t=null,n="",r=!1,i=[],o=0;o<e.length;o++){var a=e.charAt(o)
"'"===a?(n.length>0&&i.push({literal:r,val:n}),t=null,n="",r=!r):r||a===t?n+=a:(n.length>0&&i.push({literal:!1,val:n}),n=a,t=a)}return n.length>0&&i.push({literal:r,val:n}),i},e.macroTokenToFormatOpts=function(e){return Ne[e]}
var t=e.prototype
return t.formatWithSystemDefault=function(e,t){return null===this.systemLoc&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,Object.assign({},this.opts,t)).format()},t.formatDateTime=function(e,t){return void 0===t&&(t={}),this.loc.dtFormatter(e,Object.assign({},this.opts,t)).format()},t.formatDateTimeParts=function(e,t){return void 0===t&&(t={}),this.loc.dtFormatter(e,Object.assign({},this.opts,t)).formatToParts()},t.resolvedOptions=function(e,t){return void 0===t&&(t={}),this.loc.dtFormatter(e,Object.assign({},this.opts,t)).resolvedOptions()},t.num=function(e,t){if(void 0===t&&(t=0),this.opts.forceSimple)return ee(e,t)
var n=Object.assign({},this.opts)
return t>0&&(n.padTo=t),this.loc.numberFormatter(n).format(e)},t.formatDateTimeFromString=function(t,n){var r=this,i="en"===this.loc.listingMode(),o=this.loc.outputCalendar&&"gregory"!==this.loc.outputCalendar&&Y(),a=function(e,n){return r.loc.extract(t,e,n)},s=function(e){return t.isOffsetFixed&&0===t.offset&&e.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,e.format):""},l=function(){return i?function(e){return _e[e.hour<12?0:1]}(t):a({hour:"numeric",hour12:!0},"dayperiod")},u=function(e,n){return i?function(e,t){return Se(t)[e.month-1]}(t,e):a(n?{month:e}:{month:e,day:"numeric"},"month")},c=function(e,n){return i?function(e,t){return Te(t)[e.weekday-1]}(t,e):a(n?{weekday:e}:{weekday:e,month:"long",day:"numeric"},"weekday")},d=function(e){return i?function(e,t){return xe(t)[e.year<0?0:1]}(t,e):a({era:e},"era")}
return Ie(e.parseFormat(n),(function(n){switch(n){case"S":return r.num(t.millisecond)
case"u":case"SSS":return r.num(t.millisecond,3)
case"s":return r.num(t.second)
case"ss":return r.num(t.second,2)
case"m":return r.num(t.minute)
case"mm":return r.num(t.minute,2)
case"h":return r.num(t.hour%12==0?12:t.hour%12)
case"hh":return r.num(t.hour%12==0?12:t.hour%12,2)
case"H":return r.num(t.hour)
case"HH":return r.num(t.hour,2)
case"Z":return s({format:"narrow",allowZ:r.opts.allowZ})
case"ZZ":return s({format:"short",allowZ:r.opts.allowZ})
case"ZZZ":return s({format:"techie",allowZ:r.opts.allowZ})
case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:r.loc.locale})
case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:r.loc.locale})
case"z":return t.zoneName
case"a":return l()
case"d":return o?a({day:"numeric"},"day"):r.num(t.day)
case"dd":return o?a({day:"2-digit"},"day"):r.num(t.day,2)
case"c":case"E":return r.num(t.weekday)
case"ccc":return c("short",!0)
case"cccc":return c("long",!0)
case"ccccc":return c("narrow",!0)
case"EEE":return c("short",!1)
case"EEEE":return c("long",!1)
case"EEEEE":return c("narrow",!1)
case"L":return o?a({month:"numeric",day:"numeric"},"month"):r.num(t.month)
case"LL":return o?a({month:"2-digit",day:"numeric"},"month"):r.num(t.month,2)
case"LLL":return u("short",!0)
case"LLLL":return u("long",!0)
case"LLLLL":return u("narrow",!0)
case"M":return o?a({month:"numeric"},"month"):r.num(t.month)
case"MM":return o?a({month:"2-digit"},"month"):r.num(t.month,2)
case"MMM":return u("short",!1)
case"MMMM":return u("long",!1)
case"MMMMM":return u("narrow",!1)
case"y":return o?a({year:"numeric"},"year"):r.num(t.year)
case"yy":return o?a({year:"2-digit"},"year"):r.num(t.year.toString().slice(-2),2)
case"yyyy":return o?a({year:"numeric"},"year"):r.num(t.year,4)
case"yyyyyy":return o?a({year:"numeric"},"year"):r.num(t.year,6)
case"G":return d("short")
case"GG":return d("long")
case"GGGGG":return d("narrow")
case"kk":return r.num(t.weekYear.toString().slice(-2),2)
case"kkkk":return r.num(t.weekYear,4)
case"W":return r.num(t.weekNumber)
case"WW":return r.num(t.weekNumber,2)
case"o":return r.num(t.ordinal)
case"ooo":return r.num(t.ordinal,3)
case"q":return r.num(t.quarter)
case"qq":return r.num(t.quarter,2)
case"X":return r.num(Math.floor(t.ts/1e3))
case"x":return r.num(t.ts)
default:return function(n){var i=e.macroTokenToFormatOpts(n)
return i?r.formatWithSystemDefault(t,i):n}(n)}}))},t.formatDurationFromString=function(t,n){var r,i=this,o=function(e){switch(e[0]){case"S":return"millisecond"
case"s":return"second"
case"m":return"minute"
case"h":return"hour"
case"d":return"day"
case"M":return"month"
case"y":return"year"
default:return null}},a=e.parseFormat(n),s=a.reduce((function(e,t){var n=t.literal,r=t.val
return n?e:e.concat(r)}),[]),l=t.shiftTo.apply(t,s.map(o).filter((function(e){return e})))
return Ie(a,(r=l,function(e){var t=o(e)
return t?i.num(r.get(t),e.length):e}))},e}(),Pe=function(){function e(e,t){this.reason=e,this.explanation=t}return e.prototype.toMessage=function(){return this.explanation?this.reason+": "+this.explanation:this.reason},e}(),He=function(){function e(){}var t=e.prototype
return t.offsetName=function(e,t){throw new y},t.formatOffset=function(e,t){throw new y},t.offset=function(e){throw new y},t.equals=function(e){throw new y},r(e,[{key:"type",get:function(){throw new y}},{key:"name",get:function(){throw new y}},{key:"universal",get:function(){throw new y}},{key:"isValid",get:function(){throw new y}}]),e}(),Ae=null,Le=function(e){function t(){return e.apply(this,arguments)||this}i(t,e)
var n=t.prototype
return n.offsetName=function(e,t){return ce(e,t.format,t.locale)},n.formatOffset=function(e,t){return pe(this.offset(e),t)},n.offset=function(e){return-new Date(e).getTimezoneOffset()},n.equals=function(e){return"local"===e.type},r(t,[{key:"type",get:function(){return"local"}},{key:"name",get:function(){return G()?(new Intl.DateTimeFormat).resolvedOptions().timeZone:"local"}},{key:"universal",get:function(){return!1}},{key:"isValid",get:function(){return!0}}],[{key:"instance",get:function(){return null===Ae&&(Ae=new t),Ae}}]),t}(He),Ve=RegExp("^"+me.source+"$"),Ue={}
var Fe={year:0,month:1,day:2,hour:3,minute:4,second:5}
var We={},ze=function(e){function t(n){var r
return(r=e.call(this)||this).zoneName=n,r.valid=t.isValidZone(n),r}i(t,e),t.create=function(e){return We[e]||(We[e]=new t(e)),We[e]},t.resetCache=function(){We={},Ue={}},t.isValidSpecifier=function(e){return!(!e||!e.match(Ve))},t.isValidZone=function(e){try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch(e){return!1}},t.parseGMTOffset=function(e){if(e){var t=e.match(/^Etc\/GMT(0|[+-]\d{1,2})$/i)
if(t)return-60*parseInt(t[1])}return null}
var n=t.prototype
return n.offsetName=function(e,t){return ce(e,t.format,t.locale,this.name)},n.formatOffset=function(e,t){return pe(this.offset(e),t)},n.offset=function(e){var t=new Date(e)
if(isNaN(t))return NaN
var n,r=(n=this.name,Ue[n]||(Ue[n]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:n,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})),Ue[n]),i=r.formatToParts?function(e,t){for(var n=e.formatToParts(t),r=[],i=0;i<n.length;i++){var o=n[i],a=o.type,s=o.value,l=Fe[a]
B(l)||(r[l]=parseInt(s,10))}return r}(r,t):function(e,t){var n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n),i=r[1],o=r[2]
return[r[3],i,o,r[4],r[5],r[6]]}(r,t),o=i[0],a=i[1],s=i[2],l=i[3],u=+t,c=u%1e3
return(se({year:o,month:a,day:s,hour:24===l?0:l,minute:i[4],second:i[5],millisecond:0})-(u-=c>=0?c:1e3+c))/6e4},n.equals=function(e){return"iana"===e.type&&e.name===this.name},r(t,[{key:"type",get:function(){return"iana"}},{key:"name",get:function(){return this.zoneName}},{key:"universal",get:function(){return!1}},{key:"isValid",get:function(){return this.valid}}]),t}(He),je=null,Be=function(e){function t(t){var n
return(n=e.call(this)||this).fixed=t,n}i(t,e),t.instance=function(e){return 0===e?t.utcInstance:new t(e)},t.parseSpecifier=function(e){if(e){var n=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i)
if(n)return new t(de(n[1],n[2]))}return null},r(t,null,[{key:"utcInstance",get:function(){return null===je&&(je=new t(0)),je}}])
var n=t.prototype
return n.offsetName=function(){return this.name},n.formatOffset=function(e,t){return pe(this.fixed,t)},n.offset=function(){return this.fixed},n.equals=function(e){return"fixed"===e.type&&e.fixed===this.fixed},r(t,[{key:"type",get:function(){return"fixed"}},{key:"name",get:function(){return 0===this.fixed?"UTC":"UTC"+pe(this.fixed,"narrow")}},{key:"universal",get:function(){return!0}},{key:"isValid",get:function(){return!0}}]),t}(He),qe=function(e){function t(t){var n
return(n=e.call(this)||this).zoneName=t,n}i(t,e)
var n=t.prototype
return n.offsetName=function(){return null},n.formatOffset=function(){return""},n.offset=function(){return NaN},n.equals=function(){return!1},r(t,[{key:"type",get:function(){return"invalid"}},{key:"name",get:function(){return this.zoneName}},{key:"universal",get:function(){return!1}},{key:"isValid",get:function(){return!1}}]),t}(He)
function Ze(e,t){var n
if(B(e)||null===e)return t
if(e instanceof He)return e
if(function(e){return"string"==typeof e}(e)){var r=e.toLowerCase()
return"local"===r?t:"utc"===r||"gmt"===r?Be.utcInstance:null!=(n=ze.parseGMTOffset(e))?Be.instance(n):ze.isValidSpecifier(r)?ze.create(e):Be.parseSpecifier(r)||new qe(e)}return q(e)?Be.instance(e):"object"==typeof e&&e.offset&&"number"==typeof e.offset?e:new qe(e)}var Ge=function(){return Date.now()},Ye=null,Xe=null,$e=null,Je=null,Ke=!1,Qe=function(){function e(){}return e.resetCaches=function(){ct.resetCache(),ze.resetCache()},r(e,null,[{key:"now",get:function(){return Ge},set:function(e){Ge=e}},{key:"defaultZoneName",get:function(){return e.defaultZone.name},set:function(e){Ye=e?Ze(e):null}},{key:"defaultZone",get:function(){return Ye||Le.instance}},{key:"defaultLocale",get:function(){return Xe},set:function(e){Xe=e}},{key:"defaultNumberingSystem",get:function(){return $e},set:function(e){$e=e}},{key:"defaultOutputCalendar",get:function(){return Je},set:function(e){Je=e}},{key:"throwOnInvalid",get:function(){return Ke},set:function(e){Ke=e}}]),e}(),et={}
function tt(e,t){void 0===t&&(t={})
var n=JSON.stringify([e,t]),r=et[n]
return r||(r=new Intl.DateTimeFormat(e,t),et[n]=r),r}var nt={}
var rt={}
function it(e,t){void 0===t&&(t={})
var n=t,r=(n.base,function(e,t){if(null==e)return{}
var n,r,i={},o=Object.keys(e)
for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n])
return i}(n,["base"])),i=JSON.stringify([e,r]),o=rt[i]
return o||(o=new Intl.RelativeTimeFormat(e,t),rt[i]=o),o}var ot=null
function at(e,t,n,r,i){var o=e.listingMode(n)
return"error"===o?null:"en"===o?r(t):i(t)}var st=function(){function e(e,t,n){if(this.padTo=n.padTo||0,this.floor=n.floor||!1,!t&&G()){var r={useGrouping:!1}
n.padTo>0&&(r.minimumIntegerDigits=n.padTo),this.inf=function(e,t){void 0===t&&(t={})
var n=JSON.stringify([e,t]),r=nt[n]
return r||(r=new Intl.NumberFormat(e,t),nt[n]=r),r}(e,r)}}return e.prototype.format=function(e){if(this.inf){var t=this.floor?Math.floor(e):e
return this.inf.format(t)}return ee(this.floor?Math.floor(e):re(e,3),this.padTo)},e}(),lt=function(){function e(e,t,n){var r
if(this.opts=n,this.hasIntl=G(),e.zone.universal&&this.hasIntl){var i=e.offset/60*-1,o=i>=0?"Etc/GMT+"+i:"Etc/GMT"+i,a=ze.isValidZone(o)
0!==e.offset&&a?(r=o,this.dt=e):(r="UTC",n.timeZoneName?this.dt=e:this.dt=0===e.offset?e:hr.fromMillis(e.ts+60*e.offset*1e3))}else"local"===e.zone.type?this.dt=e:(this.dt=e,r=e.zone.name)
if(this.hasIntl){var s=Object.assign({},this.opts)
r&&(s.timeZone=r),this.dtf=tt(t,s)}}var t=e.prototype
return t.format=function(){if(this.hasIntl)return this.dtf.format(this.dt.toJSDate())
var e=function(e){var t="EEEE, LLLL d, yyyy, h:mm a"
switch(ge(J(e,["weekday","era","year","month","day","hour","minute","second","timeZoneName","hour12"]))){case ge(w):return"M/d/yyyy"
case ge(D):return"LLL d, yyyy"
case ge(C):return"EEE, LLL d, yyyy"
case ge(T):return"LLLL d, yyyy"
case ge(_):return"EEEE, LLLL d, yyyy"
case ge(k):return"h:mm a"
case ge(R):return"h:mm:ss a"
case ge(M):case ge(x):return"h:mm a"
case ge(I):return"HH:mm"
case ge(N):return"HH:mm:ss"
case ge(O):case ge(P):return"HH:mm"
case ge(H):return"M/d/yyyy, h:mm a"
case ge(L):return"LLL d, yyyy, h:mm a"
case ge(F):return"LLLL d, yyyy, h:mm a"
case ge(z):return t
case ge(A):return"M/d/yyyy, h:mm:ss a"
case ge(V):return"LLL d, yyyy, h:mm:ss a"
case ge(U):return"EEE, d LLL yyyy, h:mm a"
case ge(W):return"LLLL d, yyyy, h:mm:ss a"
case ge(j):return"EEEE, LLLL d, yyyy, h:mm:ss a"
default:return t}}(this.opts),t=ct.create("en-US")
return Oe.create(t).formatDateTimeFromString(this.dt,e)},t.formatToParts=function(){return this.hasIntl&&Y()?this.dtf.formatToParts(this.dt.toJSDate()):[]},t.resolvedOptions=function(){return this.hasIntl?this.dtf.resolvedOptions():{locale:"en-US",numberingSystem:"latn",outputCalendar:"gregory"}},e}(),ut=function(){function e(e,t,n){this.opts=Object.assign({style:"long"},n),!t&&X()&&(this.rtf=it(e,n))}var t=e.prototype
return t.format=function(e,t){return this.rtf?this.rtf.format(e,t):function(e,t,n,r){void 0===n&&(n="always"),void 0===r&&(r=!1)
var i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},o=-1===["hours","minutes","seconds"].indexOf(e)
if("auto"===n&&o){var a="days"===e
switch(t){case 1:return a?"tomorrow":"next "+i[e][0]
case-1:return a?"yesterday":"last "+i[e][0]
case 0:return a?"today":"this "+i[e][0]}}var s=Object.is(t,-0)||t<0,l=Math.abs(t),u=1===l,c=i[e],d=r?u?c[1]:c[2]||c[1]:u?i[e][0]:e
return s?l+" "+d+" ago":"in "+l+" "+d}(t,e,this.opts.numeric,"long"!==this.opts.style)},t.formatToParts=function(e,t){return this.rtf?this.rtf.formatToParts(e,t):[]},e}(),ct=function(){function e(e,t,n,r){var i=function(e){var t=e.indexOf("-u-")
if(-1===t)return[e]
var n,r=e.substring(0,t)
try{n=tt(e).resolvedOptions()}catch(e){n=tt(r).resolvedOptions()}var i=n
return[r,i.numberingSystem,i.calendar]}(e),o=i[0],a=i[1],s=i[2]
this.locale=o,this.numberingSystem=t||a||null,this.outputCalendar=n||s||null,this.intl=function(e,t,n){return G()?n||t?(e+="-u",n&&(e+="-ca-"+n),t&&(e+="-nu-"+t),e):e:[]}(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=r,this.fastNumbersCached=null}e.fromOpts=function(t){return e.create(t.locale,t.numberingSystem,t.outputCalendar,t.defaultToEN)},e.create=function(t,n,r,i){void 0===i&&(i=!1)
var o=t||Qe.defaultLocale
return new e(o||(i?"en-US":function(){if(ot)return ot
if(G()){var e=(new Intl.DateTimeFormat).resolvedOptions().locale
return ot=e&&"und"!==e?e:"en-US"}return ot="en-US"}()),n||Qe.defaultNumberingSystem,r||Qe.defaultOutputCalendar,o)},e.resetCache=function(){ot=null,et={},nt={},rt={}},e.fromObject=function(t){var n=void 0===t?{}:t,r=n.locale,i=n.numberingSystem,o=n.outputCalendar
return e.create(r,i,o)}
var t=e.prototype
return t.listingMode=function(e){void 0===e&&(e=!0)
var t=G()&&Y(),n=this.isEnglish(),r=!(null!==this.numberingSystem&&"latn"!==this.numberingSystem||null!==this.outputCalendar&&"gregory"!==this.outputCalendar)
return t||n&&r||e?!t||n&&r?"en":"intl":"error"},t.clone=function(t){return t&&0!==Object.getOwnPropertyNames(t).length?e.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,t.defaultToEN||!1):this},t.redefaultToEN=function(e){return void 0===e&&(e={}),this.clone(Object.assign({},e,{defaultToEN:!0}))},t.redefaultToSystem=function(e){return void 0===e&&(e={}),this.clone(Object.assign({},e,{defaultToEN:!1}))},t.months=function(e,t,n){var r=this
return void 0===t&&(t=!1),void 0===n&&(n=!0),at(this,e,n,Se,(function(){var n=t?{month:e,day:"numeric"}:{month:e},i=t?"format":"standalone"
return r.monthsCache[i][e]||(r.monthsCache[i][e]=function(e){for(var t=[],n=1;n<=12;n++){var r=hr.utc(2016,n,1)
t.push(e(r))}return t}((function(e){return r.extract(e,n,"month")}))),r.monthsCache[i][e]}))},t.weekdays=function(e,t,n){var r=this
return void 0===t&&(t=!1),void 0===n&&(n=!0),at(this,e,n,Te,(function(){var n=t?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},i=t?"format":"standalone"
return r.weekdaysCache[i][e]||(r.weekdaysCache[i][e]=function(e){for(var t=[],n=1;n<=7;n++){var r=hr.utc(2016,11,13+n)
t.push(e(r))}return t}((function(e){return r.extract(e,n,"weekday")}))),r.weekdaysCache[i][e]}))},t.meridiems=function(e){var t=this
return void 0===e&&(e=!0),at(this,void 0,e,(function(){return _e}),(function(){if(!t.meridiemCache){var e={hour:"numeric",hour12:!0}
t.meridiemCache=[hr.utc(2016,11,13,9),hr.utc(2016,11,13,19)].map((function(n){return t.extract(n,e,"dayperiod")}))}return t.meridiemCache}))},t.eras=function(e,t){var n=this
return void 0===t&&(t=!0),at(this,e,t,xe,(function(){var t={era:e}
return n.eraCache[e]||(n.eraCache[e]=[hr.utc(-40,1,1),hr.utc(2017,1,1)].map((function(e){return n.extract(e,t,"era")}))),n.eraCache[e]}))},t.extract=function(e,t,n){var r=this.dtFormatter(e,t).formatToParts().find((function(e){return e.type.toLowerCase()===n}))
return r?r.value:null},t.numberFormatter=function(e){return void 0===e&&(e={}),new st(this.intl,e.forceSimple||this.fastNumbers,e)},t.dtFormatter=function(e,t){return void 0===t&&(t={}),new lt(e,this.intl,t)},t.relFormatter=function(e){return void 0===e&&(e={}),new ut(this.intl,this.isEnglish(),e)},t.isEnglish=function(){return"en"===this.locale||"en-us"===this.locale.toLowerCase()||G()&&new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")},t.equals=function(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar},r(e,[{key:"fastNumbers",get:function(){var e
return null==this.fastNumbersCached&&(this.fastNumbersCached=(!(e=this).numberingSystem||"latn"===e.numberingSystem)&&("latn"===e.numberingSystem||!e.locale||e.locale.startsWith("en")||G()&&"latn"===new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem)),this.fastNumbersCached}}]),e}()
function dt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
var r=t.reduce((function(e,t){return e+t.source}),"")
return RegExp("^"+r+"$")}function ft(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return function(e){return t.reduce((function(t,n){var r=t[0],i=t[1],o=t[2],a=n(e,o),s=a[0],l=a[1],u=a[2]
return[Object.assign(r,s),i||l,u]}),[{},null,1]).slice(0,2)}}function ht(e){if(null==e)return[null,null]
for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
for(var i=0,o=n;i<o.length;i++){var a=o[i],s=a[0],l=a[1],u=s.exec(e)
if(u)return l(u)}return[null,null]}function pt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return function(e,n){var r,i={}
for(r=0;r<t.length;r++)i[t[r]]=te(e[n+r])
return[i,null,n+r]}}var vt=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,mt=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,gt=RegExp(""+mt.source+vt.source+"?"),yt=RegExp("(?:T"+gt.source+")?"),Et=pt("weekYear","weekNumber","weekDay"),bt=pt("year","ordinal"),St=RegExp(mt.source+" ?(?:"+vt.source+"|("+me.source+"))?"),wt=RegExp("(?: "+St.source+")?")
function Dt(e,t,n){var r=e[t]
return B(r)?n:te(r)}function Ct(e,t){return[{year:Dt(e,t),month:Dt(e,t+1,1),day:Dt(e,t+2,1)},null,t+3]}function Tt(e,t){return[{hours:Dt(e,t,0),minutes:Dt(e,t+1,0),seconds:Dt(e,t+2,0),milliseconds:ne(e[t+3])},null,t+4]}function _t(e,t){var n=!e[t]&&!e[t+1],r=de(e[t+1],e[t+2])
return[{},n?null:Be.instance(r),t+3]}function kt(e,t){return[{},e[t]?ze.create(e[t]):null,t+1]}var Rt=RegExp("^T?"+mt.source+"$"),Mt=/^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/
function xt(e){var t=e[0],n=e[1],r=e[2],i=e[3],o=e[4],a=e[5],s=e[6],l=e[7],u=e[8],c="-"===t[0],d=l&&"-"===l[0],f=function(e,t){return void 0===t&&(t=!1),void 0!==e&&(t||e&&c)?-e:e}
return[{years:f(te(n)),months:f(te(r)),weeks:f(te(i)),days:f(te(o)),hours:f(te(a)),minutes:f(te(s)),seconds:f(te(l),"-0"===l),milliseconds:f(ne(u),d)}]}var It={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480}
function Nt(e,t,n,r,i,o,a){var s={year:2===t.length?ue(te(t)):te(t),month:Ee.indexOf(n)+1,day:te(r),hour:te(i),minute:te(o)}
return a&&(s.second=te(a)),e&&(s.weekday=e.length>3?we.indexOf(e)+1:De.indexOf(e)+1),s}var Ot=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/
function Pt(e){var t,n=e[1],r=e[2],i=e[3],o=e[4],a=e[5],s=e[6],l=e[7],u=e[8],c=e[9],d=e[10],f=e[11],h=Nt(n,o,i,r,a,s,l)
return t=u?It[u]:c?0:de(d,f),[h,new Be(t)]}var Ht=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,At=/^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Lt=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/
function Vt(e){var t=e[1],n=e[2],r=e[3]
return[Nt(t,e[4],r,n,e[5],e[6],e[7]),Be.utcInstance]}function Ut(e){var t=e[1],n=e[2],r=e[3],i=e[4],o=e[5],a=e[6]
return[Nt(t,e[7],n,r,i,o,a),Be.utcInstance]}var Ft=dt(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,yt),Wt=dt(/(\d{4})-?W(\d\d)(?:-?(\d))?/,yt),zt=dt(/(\d{4})-?(\d{3})/,yt),jt=dt(gt),Bt=ft(Ct,Tt,_t),qt=ft(Et,Tt,_t),Zt=ft(bt,Tt,_t),Gt=ft(Tt,_t)
var Yt=ft(Tt)
var Xt=dt(/(\d{4})-(\d\d)-(\d\d)/,wt),$t=dt(St),Jt=ft(Ct,Tt,_t,kt),Kt=ft(Tt,_t,kt)
var Qt={weeks:{days:7,hours:168,minutes:10080,seconds:604800,milliseconds:6048e5},days:{hours:24,minutes:1440,seconds:86400,milliseconds:864e5},hours:{minutes:60,seconds:3600,milliseconds:36e5},minutes:{seconds:60,milliseconds:6e4},seconds:{milliseconds:1e3}},en=Object.assign({years:{quarters:4,months:12,weeks:52,days:365,hours:8760,minutes:525600,seconds:31536e3,milliseconds:31536e6},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:131040,seconds:7862400,milliseconds:78624e5},months:{weeks:4,days:30,hours:720,minutes:43200,seconds:2592e3,milliseconds:2592e6}},Qt),tn=365.2425,nn=30.436875,rn=Object.assign({years:{quarters:4,months:12,weeks:52.1775,days:tn,hours:8765.82,minutes:525949.2,seconds:525949.2*60,milliseconds:525949.2*60*1e3},quarters:{months:3,weeks:13.044375,days:91.310625,hours:2191.455,minutes:131487.3,seconds:525949.2*60/4,milliseconds:7889237999.999999},months:{weeks:4.3481250000000005,days:nn,hours:730.485,minutes:43829.1,seconds:2629746,milliseconds:2629746e3}},Qt),on=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],an=on.slice(0).reverse()
function sn(e,t,n){void 0===n&&(n=!1)
var r={values:n?t.values:Object.assign({},e.values,t.values||{}),loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy}
return new un(r)}function ln(e,t,n,r,i){var o=e[i][n],a=t[n]/o,s=!(Math.sign(a)===Math.sign(r[i]))&&0!==r[i]&&Math.abs(a)<=1?function(e){return e<0?Math.floor(e):Math.ceil(e)}(a):Math.trunc(a)
r[i]+=s,t[n]-=s*o}var un=function(){function e(e){var t="longterm"===e.conversionAccuracy||!1
this.values=e.values,this.loc=e.loc||ct.create(),this.conversionAccuracy=t?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=t?rn:en,this.isLuxonDuration=!0}e.fromMillis=function(t,n){return e.fromObject(Object.assign({milliseconds:t},n))},e.fromObject=function(t){if(null==t||"object"!=typeof t)throw new g("Duration.fromObject: argument expected to be an object, got "+(null===t?"null":typeof t))
return new e({values:he(t,e.normalizeUnit,["locale","numberingSystem","conversionAccuracy","zone"]),loc:ct.fromObject(t),conversionAccuracy:t.conversionAccuracy})},e.fromISO=function(t,n){var r=function(e){return ht(e,[Mt,xt])}(t),i=r[0]
if(i){var o=Object.assign(i,n)
return e.fromObject(o)}return e.invalid("unparsable",'the input "'+t+"\" can't be parsed as ISO 8601")},e.fromISOTime=function(t,n){var r=function(e){return ht(e,[Rt,Yt])}(t),i=r[0]
if(i){var o=Object.assign(i,n)
return e.fromObject(o)}return e.invalid("unparsable",'the input "'+t+"\" can't be parsed as ISO 8601")},e.invalid=function(t,n){if(void 0===n&&(n=null),!t)throw new g("need to specify a reason the Duration is invalid")
var r=t instanceof Pe?t:new Pe(t,n)
if(Qe.throwOnInvalid)throw new p(r)
return new e({invalid:r})},e.normalizeUnit=function(e){var t={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e?e.toLowerCase():e]
if(!t)throw new m(e)
return t},e.isDuration=function(e){return e&&e.isLuxonDuration||!1}
var t=e.prototype
return t.toFormat=function(e,t){void 0===t&&(t={})
var n=Object.assign({},t,{floor:!1!==t.round&&!1!==t.floor})
return this.isValid?Oe.create(this.loc,n).formatDurationFromString(this,e):"Invalid Duration"},t.toObject=function(e){if(void 0===e&&(e={}),!this.isValid)return{}
var t=Object.assign({},this.values)
return e.includeConfig&&(t.conversionAccuracy=this.conversionAccuracy,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t},t.toISO=function(){if(!this.isValid)return null
var e="P"
return 0!==this.years&&(e+=this.years+"Y"),0===this.months&&0===this.quarters||(e+=this.months+3*this.quarters+"M"),0!==this.weeks&&(e+=this.weeks+"W"),0!==this.days&&(e+=this.days+"D"),0===this.hours&&0===this.minutes&&0===this.seconds&&0===this.milliseconds||(e+="T"),0!==this.hours&&(e+=this.hours+"H"),0!==this.minutes&&(e+=this.minutes+"M"),0===this.seconds&&0===this.milliseconds||(e+=re(this.seconds+this.milliseconds/1e3,3)+"S"),"P"===e&&(e+="T0S"),e},t.toISOTime=function(e){if(void 0===e&&(e={}),!this.isValid)return null
var t=this.toMillis()
if(t<0||t>=864e5)return null
e=Object.assign({suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended"},e)
var n=this.shiftTo("hours","minutes","seconds","milliseconds"),r="basic"===e.format?"hhmm":"hh:mm"
e.suppressSeconds&&0===n.seconds&&0===n.milliseconds||(r+="basic"===e.format?"ss":":ss",e.suppressMilliseconds&&0===n.milliseconds||(r+=".SSS"))
var i=n.toFormat(r)
return e.includePrefix&&(i="T"+i),i},t.toJSON=function(){return this.toISO()},t.toString=function(){return this.toISO()},t.toMillis=function(){return this.as("milliseconds")},t.valueOf=function(){return this.toMillis()},t.plus=function(e){if(!this.isValid)return this
for(var t,n=cn(e),r={},i=c(on);!(t=i()).done;){var o=t.value;(K(n.values,o)||K(this.values,o))&&(r[o]=n.get(o)+this.get(o))}return sn(this,{values:r},!0)},t.minus=function(e){if(!this.isValid)return this
var t=cn(e)
return this.plus(t.negate())},t.mapUnits=function(e){if(!this.isValid)return this
for(var t={},n=0,r=Object.keys(this.values);n<r.length;n++){var i=r[n]
t[i]=fe(e(this.values[i],i))}return sn(this,{values:t},!0)},t.get=function(t){return this[e.normalizeUnit(t)]},t.set=function(t){return this.isValid?sn(this,{values:Object.assign(this.values,he(t,e.normalizeUnit,[]))}):this},t.reconfigure=function(e){var t=void 0===e?{}:e,n=t.locale,r=t.numberingSystem,i=t.conversionAccuracy,o={loc:this.loc.clone({locale:n,numberingSystem:r})}
return i&&(o.conversionAccuracy=i),sn(this,o)},t.as=function(e){return this.isValid?this.shiftTo(e).get(e):NaN},t.normalize=function(){if(!this.isValid)return this
var e=this.toObject()
return function(e,t){an.reduce((function(n,r){return B(t[r])?n:(n&&ln(e,t,n,t,r),r)}),null)}(this.matrix,e),sn(this,{values:e},!0)},t.shiftTo=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
if(!this.isValid)return this
if(0===n.length)return this
n=n.map((function(t){return e.normalizeUnit(t)}))
for(var i,o,a={},s={},l=this.toObject(),u=c(on);!(o=u()).done;){var d=o.value
if(n.indexOf(d)>=0){i=d
var f=0
for(var h in s)f+=this.matrix[h][d]*s[h],s[h]=0
q(l[d])&&(f+=l[d])
var p=Math.trunc(f)
for(var v in a[d]=p,s[d]=f-p,l)on.indexOf(v)>on.indexOf(d)&&ln(this.matrix,l,v,a,d)}else q(l[d])&&(s[d]=l[d])}for(var m in s)0!==s[m]&&(a[i]+=m===i?s[m]:s[m]/this.matrix[i][m])
return sn(this,{values:a},!0).normalize()},t.negate=function(){if(!this.isValid)return this
for(var e={},t=0,n=Object.keys(this.values);t<n.length;t++){var r=n[t]
e[r]=-this.values[r]}return sn(this,{values:e},!0)},t.equals=function(e){if(!this.isValid||!e.isValid)return!1
if(!this.loc.equals(e.loc))return!1
for(var t,n=c(on);!(t=n()).done;){var r=t.value
if(i=this.values[r],o=e.values[r],!(void 0===i||0===i?void 0===o||0===o:i===o))return!1}var i,o
return!0},r(e,[{key:"locale",get:function(){return this.isValid?this.loc.locale:null}},{key:"numberingSystem",get:function(){return this.isValid?this.loc.numberingSystem:null}},{key:"years",get:function(){return this.isValid?this.values.years||0:NaN}},{key:"quarters",get:function(){return this.isValid?this.values.quarters||0:NaN}},{key:"months",get:function(){return this.isValid?this.values.months||0:NaN}},{key:"weeks",get:function(){return this.isValid?this.values.weeks||0:NaN}},{key:"days",get:function(){return this.isValid?this.values.days||0:NaN}},{key:"hours",get:function(){return this.isValid?this.values.hours||0:NaN}},{key:"minutes",get:function(){return this.isValid?this.values.minutes||0:NaN}},{key:"seconds",get:function(){return this.isValid?this.values.seconds||0:NaN}},{key:"milliseconds",get:function(){return this.isValid?this.values.milliseconds||0:NaN}},{key:"isValid",get:function(){return null===this.invalid}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}}]),e}()
function cn(e){if(q(e))return un.fromMillis(e)
if(un.isDuration(e))return e
if("object"==typeof e)return un.fromObject(e)
throw new g("Unknown duration argument "+e+" of type "+typeof e)}var dn="Invalid Interval"
function fn(e,t){return e&&e.isValid?t&&t.isValid?t<e?hn.invalid("end before start","The end of an interval must be after its start, but you had start="+e.toISO()+" and end="+t.toISO()):null:hn.invalid("missing or invalid end"):hn.invalid("missing or invalid start")}var hn=function(){function e(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}e.invalid=function(t,n){if(void 0===n&&(n=null),!t)throw new g("need to specify a reason the Interval is invalid")
var r=t instanceof Pe?t:new Pe(t,n)
if(Qe.throwOnInvalid)throw new h(r)
return new e({invalid:r})},e.fromDateTimes=function(t,n){var r=pr(t),i=pr(n),o=fn(r,i)
return null==o?new e({start:r,end:i}):o},e.after=function(t,n){var r=cn(n),i=pr(t)
return e.fromDateTimes(i,i.plus(r))},e.before=function(t,n){var r=cn(n),i=pr(t)
return e.fromDateTimes(i.minus(r),i)},e.fromISO=function(t,n){var r=(t||"").split("/",2),i=r[0],o=r[1]
if(i&&o){var a,s,l,u
try{s=(a=hr.fromISO(i,n)).isValid}catch(o){s=!1}try{u=(l=hr.fromISO(o,n)).isValid}catch(o){u=!1}if(s&&u)return e.fromDateTimes(a,l)
if(s){var c=un.fromISO(o,n)
if(c.isValid)return e.after(a,c)}else if(u){var d=un.fromISO(i,n)
if(d.isValid)return e.before(l,d)}}return e.invalid("unparsable",'the input "'+t+"\" can't be parsed as ISO 8601")},e.isInterval=function(e){return e&&e.isLuxonInterval||!1}
var t=e.prototype
return t.length=function(e){return void 0===e&&(e="milliseconds"),this.isValid?this.toDuration.apply(this,[e]).get(e):NaN},t.count=function(e){if(void 0===e&&(e="milliseconds"),!this.isValid)return NaN
var t=this.start.startOf(e),n=this.end.startOf(e)
return Math.floor(n.diff(t,e).get(e))+1},t.hasSame=function(e){return!!this.isValid&&(this.isEmpty()||this.e.minus(1).hasSame(this.s,e))},t.isEmpty=function(){return this.s.valueOf()===this.e.valueOf()},t.isAfter=function(e){return!!this.isValid&&this.s>e},t.isBefore=function(e){return!!this.isValid&&this.e<=e},t.contains=function(e){return!!this.isValid&&(this.s<=e&&this.e>e)},t.set=function(t){var n=void 0===t?{}:t,r=n.start,i=n.end
return this.isValid?e.fromDateTimes(r||this.s,i||this.e):this},t.splitAt=function(){var t=this
if(!this.isValid)return[]
for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i]
for(var o=r.map(pr).filter((function(e){return t.contains(e)})).sort(),a=[],s=this.s,l=0;s<this.e;){var u=o[l]||this.e,c=+u>+this.e?this.e:u
a.push(e.fromDateTimes(s,c)),s=c,l+=1}return a},t.splitBy=function(t){var n=cn(t)
if(!this.isValid||!n.isValid||0===n.as("milliseconds"))return[]
for(var r,i=this.s,o=1,a=[];i<this.e;){var s=this.start.plus(n.mapUnits((function(e){return e*o})))
r=+s>+this.e?this.e:s,a.push(e.fromDateTimes(i,r)),i=r,o+=1}return a},t.divideEqually=function(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]},t.overlaps=function(e){return this.e>e.s&&this.s<e.e},t.abutsStart=function(e){return!!this.isValid&&+this.e==+e.s},t.abutsEnd=function(e){return!!this.isValid&&+e.e==+this.s},t.engulfs=function(e){return!!this.isValid&&(this.s<=e.s&&this.e>=e.e)},t.equals=function(e){return!(!this.isValid||!e.isValid)&&(this.s.equals(e.s)&&this.e.equals(e.e))},t.intersection=function(t){if(!this.isValid)return this
var n=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e
return n>=r?null:e.fromDateTimes(n,r)},t.union=function(t){if(!this.isValid)return this
var n=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e
return e.fromDateTimes(n,r)},e.merge=function(e){var t=e.sort((function(e,t){return e.s-t.s})).reduce((function(e,t){var n=e[0],r=e[1]
return r?r.overlaps(t)||r.abutsStart(t)?[n,r.union(t)]:[n.concat([r]),t]:[n,t]}),[[],null]),n=t[0],r=t[1]
return r&&n.push(r),n},e.xor=function(t){for(var n,r,i=null,o=0,a=[],s=t.map((function(e){return[{time:e.s,type:"s"},{time:e.e,type:"e"}]})),l=(n=Array.prototype).concat.apply(n,s).sort((function(e,t){return e.time-t.time})),u=c(l);!(r=u()).done;){var d=r.value
1===(o+="s"===d.type?1:-1)?i=d.time:(i&&+i!=+d.time&&a.push(e.fromDateTimes(i,d.time)),i=null)}return e.merge(a)},t.difference=function(){for(var t=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i]
return e.xor([this].concat(r)).map((function(e){return t.intersection(e)})).filter((function(e){return e&&!e.isEmpty()}))},t.toString=function(){return this.isValid?"["+this.s.toISO()+" – "+this.e.toISO()+")":dn},t.toISO=function(e){return this.isValid?this.s.toISO(e)+"/"+this.e.toISO(e):dn},t.toISODate=function(){return this.isValid?this.s.toISODate()+"/"+this.e.toISODate():dn},t.toISOTime=function(e){return this.isValid?this.s.toISOTime(e)+"/"+this.e.toISOTime(e):dn},t.toFormat=function(e,t){var n=(void 0===t?{}:t).separator,r=void 0===n?" – ":n
return this.isValid?""+this.s.toFormat(e)+r+this.e.toFormat(e):dn},t.toDuration=function(e,t){return this.isValid?this.e.diff(this.s,e,t):un.invalid(this.invalidReason)},t.mapEndpoints=function(t){return e.fromDateTimes(t(this.s),t(this.e))},r(e,[{key:"start",get:function(){return this.isValid?this.s:null}},{key:"end",get:function(){return this.isValid?this.e:null}},{key:"isValid",get:function(){return null===this.invalidReason}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}}]),e}(),pn=function(){function e(){}return e.hasDST=function(e){void 0===e&&(e=Qe.defaultZone)
var t=hr.now().setZone(e).set({month:12})
return!e.universal&&t.offset!==t.set({month:6}).offset},e.isValidIANAZone=function(e){return ze.isValidSpecifier(e)&&ze.isValidZone(e)},e.normalizeZone=function(e){return Ze(e,Qe.defaultZone)},e.months=function(e,t){void 0===e&&(e="long")
var n=void 0===t?{}:t,r=n.locale,i=void 0===r?null:r,o=n.numberingSystem,a=void 0===o?null:o,s=n.locObj,l=void 0===s?null:s,u=n.outputCalendar,c=void 0===u?"gregory":u
return(l||ct.create(i,a,c)).months(e)},e.monthsFormat=function(e,t){void 0===e&&(e="long")
var n=void 0===t?{}:t,r=n.locale,i=void 0===r?null:r,o=n.numberingSystem,a=void 0===o?null:o,s=n.locObj,l=void 0===s?null:s,u=n.outputCalendar,c=void 0===u?"gregory":u
return(l||ct.create(i,a,c)).months(e,!0)},e.weekdays=function(e,t){void 0===e&&(e="long")
var n=void 0===t?{}:t,r=n.locale,i=void 0===r?null:r,o=n.numberingSystem,a=void 0===o?null:o,s=n.locObj
return((void 0===s?null:s)||ct.create(i,a,null)).weekdays(e)},e.weekdaysFormat=function(e,t){void 0===e&&(e="long")
var n=void 0===t?{}:t,r=n.locale,i=void 0===r?null:r,o=n.numberingSystem,a=void 0===o?null:o,s=n.locObj
return((void 0===s?null:s)||ct.create(i,a,null)).weekdays(e,!0)},e.meridiems=function(e){var t=(void 0===e?{}:e).locale,n=void 0===t?null:t
return ct.create(n).meridiems()},e.eras=function(e,t){void 0===e&&(e="short")
var n=(void 0===t?{}:t).locale,r=void 0===n?null:n
return ct.create(r,null,"gregory").eras(e)},e.features=function(){var e=!1,t=!1,n=!1,r=!1
if(G()){e=!0,t=Y(),r=X()
try{n="America/New_York"===new Intl.DateTimeFormat("en",{timeZone:"America/New_York"}).resolvedOptions().timeZone}catch(e){n=!1}}return{intl:e,intlTokens:t,zones:n,relative:r}},e}()
function vn(e,t){var n=function(e){return e.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf()},r=n(t)-n(e)
return Math.floor(un.fromMillis(r).as("days"))}function mn(e,t,n,r){var i=function(e,t,n){for(var r,i,o=[["years",function(e,t){return t.year-e.year}],["quarters",function(e,t){return t.quarter-e.quarter}],["months",function(e,t){return t.month-e.month+12*(t.year-e.year)}],["weeks",function(e,t){var n=vn(e,t)
return(n-n%7)/7}],["days",vn]],a={},s=0,l=o;s<l.length;s++){var u=l[s],c=u[0],d=u[1]
if(n.indexOf(c)>=0){var f
r=c
var h,p=d(e,t);(i=e.plus(((f={})[c]=p,f)))>t?(e=e.plus(((h={})[c]=p-1,h)),p-=1):e=i,a[c]=p}}return[e,a,i,r]}(e,t,n),o=i[0],a=i[1],s=i[2],l=i[3],u=t-o,c=n.filter((function(e){return["hours","minutes","seconds","milliseconds"].indexOf(e)>=0}))
if(0===c.length){var d
if(s<t)s=o.plus(((d={})[l]=1,d))
s!==o&&(a[l]=(a[l]||0)+u/(s-o))}var f,h=un.fromObject(Object.assign(a,r))
return c.length>0?(f=un.fromMillis(u,r)).shiftTo.apply(f,c).plus(h):h}var gn={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},yn={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},En=gn.hanidec.replace(/[\[|\]]/g,"").split("")
function bn(e,t){var n=e.numberingSystem
return void 0===t&&(t=""),new RegExp(""+gn[n||"latn"]+t)}var Sn="missing Intl.DateTimeFormat.formatToParts support"
function wn(e,t){return void 0===t&&(t=function(e){return e}),{regex:e,deser:function(e){var n=e[0]
return t(function(e){var t=parseInt(e,10)
if(isNaN(t)){t=""
for(var n=0;n<e.length;n++){var r=e.charCodeAt(n)
if(-1!==e[n].search(gn.hanidec))t+=En.indexOf(e[n])
else for(var i in yn){var o=yn[i],a=o[0],s=o[1]
r>=a&&r<=s&&(t+=r-a)}}return parseInt(t,10)}return t}(n))}}}var Dn="( |"+String.fromCharCode(160)+")",Cn=new RegExp(Dn,"g")
function Tn(e){return e.replace(/\./g,"\\.?").replace(Cn,Dn)}function _n(e){return e.replace(/\./g,"").replace(Cn," ").toLowerCase()}function kn(e,t){return null===e?null:{regex:RegExp(e.map(Tn).join("|")),deser:function(n){var r=n[0]
return e.findIndex((function(e){return _n(r)===_n(e)}))+t}}}function Rn(e,t){return{regex:e,deser:function(e){return de(e[1],e[2])},groups:t}}function Mn(e){return{regex:e,deser:function(e){return e[0]}}}var xn={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour:{numeric:"h","2-digit":"hh"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"}}
var In=null
function Nn(e,t){if(e.literal)return e
var n=Oe.macroTokenToFormatOpts(e.val)
if(!n)return e
var r=Oe.create(t,n).formatDateTimeParts((In||(In=hr.fromMillis(1555555555555)),In)).map((function(e){return function(e,t,n){var r=e.type,i=e.value
if("literal"===r)return{literal:!0,val:i}
var o=n[r],a=xn[r]
return"object"==typeof a&&(a=a[o]),a?{literal:!1,val:a}:void 0}(e,0,n)}))
return r.includes(void 0)?e:r}function On(e,t,n){var r=function(e,t){var n
return(n=Array.prototype).concat.apply(n,e.map((function(e){return Nn(e,t)})))}(Oe.parseFormat(n),e),i=r.map((function(t){return n=t,i=bn(r=e),o=bn(r,"{2}"),a=bn(r,"{3}"),s=bn(r,"{4}"),l=bn(r,"{6}"),u=bn(r,"{1,2}"),c=bn(r,"{1,3}"),d=bn(r,"{1,6}"),f=bn(r,"{1,9}"),h=bn(r,"{2,4}"),p=bn(r,"{4,6}"),v=function(e){return{regex:RegExp((t=e.val,t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"))),deser:function(e){return e[0]},literal:!0}
var t},m=function(e){if(n.literal)return v(e)
switch(e.val){case"G":return kn(r.eras("short",!1),0)
case"GG":return kn(r.eras("long",!1),0)
case"y":return wn(d)
case"yy":case"kk":return wn(h,ue)
case"yyyy":case"kkkk":return wn(s)
case"yyyyy":return wn(p)
case"yyyyyy":return wn(l)
case"M":case"L":case"d":case"H":case"h":case"m":case"q":case"s":case"W":return wn(u)
case"MM":case"LL":case"dd":case"HH":case"hh":case"mm":case"qq":case"ss":case"WW":return wn(o)
case"MMM":return kn(r.months("short",!0,!1),1)
case"MMMM":return kn(r.months("long",!0,!1),1)
case"LLL":return kn(r.months("short",!1,!1),1)
case"LLLL":return kn(r.months("long",!1,!1),1)
case"o":case"S":return wn(c)
case"ooo":case"SSS":return wn(a)
case"u":return Mn(f)
case"a":return kn(r.meridiems(),0)
case"E":case"c":return wn(i)
case"EEE":return kn(r.weekdays("short",!1,!1),1)
case"EEEE":return kn(r.weekdays("long",!1,!1),1)
case"ccc":return kn(r.weekdays("short",!0,!1),1)
case"cccc":return kn(r.weekdays("long",!0,!1),1)
case"Z":case"ZZ":return Rn(new RegExp("([+-]"+u.source+")(?::("+o.source+"))?"),2)
case"ZZZ":return Rn(new RegExp("([+-]"+u.source+")("+o.source+")?"),2)
case"z":return Mn(/[a-z_+-/]{1,256}?/i)
default:return v(e)}}(n)||{invalidReason:Sn},m.token=n,m
var n,r,i,o,a,s,l,u,c,d,f,h,p,v,m})),o=i.find((function(e){return e.invalidReason}))
if(o)return{input:t,tokens:r,invalidReason:o.invalidReason}
var a=function(e){var t=e.map((function(e){return e.regex})).reduce((function(e,t){return e+"("+t.source+")"}),"")
return["^"+t+"$",e]}(i),s=a[0],l=a[1],u=RegExp(s,"i"),c=function(e,t,n){var r=e.match(t)
if(r){var i={},o=1
for(var a in n)if(K(n,a)){var s=n[a],l=s.groups?s.groups+1:1
!s.literal&&s.token&&(i[s.token.val[0]]=s.deser(r.slice(o,o+l))),o+=l}return[r,i]}return[r,{}]}(t,u,l),d=c[0],f=c[1],h=f?function(e){var t
t=B(e.Z)?B(e.z)?null:ze.create(e.z):new Be(e.Z),B(e.q)||(e.M=3*(e.q-1)+1),B(e.h)||(e.h<12&&1===e.a?e.h+=12:12===e.h&&0===e.a&&(e.h=0)),0===e.G&&e.y&&(e.y=-e.y),B(e.u)||(e.S=ne(e.u))
var n=Object.keys(e).reduce((function(t,n){var r=function(e){switch(e){case"S":return"millisecond"
case"s":return"second"
case"m":return"minute"
case"h":case"H":return"hour"
case"d":return"day"
case"o":return"ordinal"
case"L":case"M":return"month"
case"y":return"year"
case"E":case"c":return"weekday"
case"W":return"weekNumber"
case"k":return"weekYear"
case"q":return"quarter"
default:return null}}(n)
return r&&(t[r]=e[n]),t}),{})
return[n,t]}(f):[null,null],p=h[0],m=h[1]
if(K(f,"a")&&K(f,"H"))throw new v("Can't include meridiem when specifying 24-hour format")
return{input:t,tokens:r,regex:u,rawMatches:d,matches:f,result:p,zone:m}}var Pn=[0,31,59,90,120,151,181,212,243,273,304,334],Hn=[0,31,60,91,121,152,182,213,244,274,305,335]
function An(e,t){return new Pe("unit out of range","you specified "+t+" (of type "+typeof t+") as a "+e+", which is invalid")}function Ln(e,t,n){var r=new Date(Date.UTC(e,t-1,n)).getUTCDay()
return 0===r?7:r}function Vn(e,t,n){return n+(ie(e)?Hn:Pn)[t-1]}function Un(e,t){var n=ie(e)?Hn:Pn,r=n.findIndex((function(e){return e<t}))
return{month:r+1,day:t-n[r]}}function Fn(e){var t,n=e.year,r=e.month,i=e.day,o=Vn(n,r,i),a=Ln(n,r,i),s=Math.floor((o-a+10)/7)
return s<1?s=le(t=n-1):s>le(n)?(t=n+1,s=1):t=n,Object.assign({weekYear:t,weekNumber:s,weekday:a},ve(e))}function Wn(e){var t,n=e.weekYear,r=e.weekNumber,i=e.weekday,o=Ln(n,1,4),a=oe(n),s=7*r+i-o-3
s<1?s+=oe(t=n-1):s>a?(t=n+1,s-=oe(n)):t=n
var l=Un(t,s),u=l.month,c=l.day
return Object.assign({year:t,month:u,day:c},ve(e))}function zn(e){var t=e.year,n=Vn(t,e.month,e.day)
return Object.assign({year:t,ordinal:n},ve(e))}function jn(e){var t=e.year,n=Un(t,e.ordinal),r=n.month,i=n.day
return Object.assign({year:t,month:r,day:i},ve(e))}function Bn(e){var t=Z(e.year),n=Q(e.month,1,12),r=Q(e.day,1,ae(e.year,e.month))
return t?n?!r&&An("day",e.day):An("month",e.month):An("year",e.year)}function qn(e){var t=e.hour,n=e.minute,r=e.second,i=e.millisecond,o=Q(t,0,23)||24===t&&0===n&&0===r&&0===i,a=Q(n,0,59),s=Q(r,0,59),l=Q(i,0,999)
return o?a?s?!l&&An("millisecond",i):An("second",r):An("minute",n):An("hour",t)}var Zn="Invalid DateTime",Gn=864e13
function Yn(e){return new Pe("unsupported zone",'the zone "'+e.name+'" is not supported')}function Xn(e){return null===e.weekData&&(e.weekData=Fn(e.c)),e.weekData}function $n(e,t){var n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid}
return new hr(Object.assign({},n,t,{old:n}))}function Jn(e,t,n){var r=e-60*t*1e3,i=n.offset(r)
if(t===i)return[r,t]
r-=60*(i-t)*1e3
var o=n.offset(r)
return i===o?[r,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}function Kn(e,t){var n=new Date(e+=60*t*1e3)
return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function Qn(e,t,n){return Jn(se(e),t,n)}function er(e,t){var n=e.o,r=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+3*Math.trunc(t.quarters),o=Object.assign({},e.c,{year:r,month:i,day:Math.min(e.c.day,ae(r,i))+Math.trunc(t.days)+7*Math.trunc(t.weeks)}),a=un.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),s=Jn(se(o),n,e.zone),l=s[0],u=s[1]
return 0!==a&&(l+=a,u=e.zone.offset(l)),{ts:l,o:u}}function tr(e,t,n,r,i){var o=n.setZone,a=n.zone
if(e&&0!==Object.keys(e).length){var s=t||a,l=hr.fromObject(Object.assign(e,n,{zone:s,setZone:void 0}))
return o?l:l.setZone(a)}return hr.invalid(new Pe("unparsable",'the input "'+i+"\" can't be parsed as "+r))}function nr(e,t,n){return void 0===n&&(n=!0),e.isValid?Oe.create(ct.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function rr(e,t){var n=t.suppressSeconds,r=void 0!==n&&n,i=t.suppressMilliseconds,o=void 0!==i&&i,a=t.includeOffset,s=t.includePrefix,l=void 0!==s&&s,u=t.includeZone,c=void 0!==u&&u,d=t.spaceZone,f=void 0!==d&&d,h=t.format,p=void 0===h?"extended":h,v="basic"===p?"HHmm":"HH:mm"
r&&0===e.second&&0===e.millisecond||(v+="basic"===p?"ss":":ss",o&&0===e.millisecond||(v+=".SSS")),(c||a)&&f&&(v+=" "),c?v+="z":a&&(v+="basic"===p?"ZZZ":"ZZ")
var m=nr(e,v)
return l&&(m="T"+m),m}var ir={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},or={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},ar={ordinal:1,hour:0,minute:0,second:0,millisecond:0},sr=["year","month","day","hour","minute","second","millisecond"],lr=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],ur=["year","ordinal","hour","minute","second","millisecond"]
function cr(e){var t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()]
if(!t)throw new m(e)
return t}function dr(e,t){for(var n,r=c(sr);!(n=r()).done;){var i=n.value
B(e[i])&&(e[i]=ir[i])}var o=Bn(e)||qn(e)
if(o)return hr.invalid(o)
var a=Qe.now(),s=Qn(e,t.offset(a),t),l=s[0],u=s[1]
return new hr({ts:l,zone:t,o:u})}function fr(e,t,n){var r=!!B(n.round)||n.round,i=function(e,i){return e=re(e,r||n.calendary?0:2,!0),t.loc.clone(n).relFormatter(n).format(e,i)},o=function(r){return n.calendary?t.hasSame(e,r)?0:t.startOf(r).diff(e.startOf(r),r).get(r):t.diff(e,r).get(r)}
if(n.unit)return i(o(n.unit),n.unit)
for(var a,s=c(n.units);!(a=s()).done;){var l=a.value,u=o(l)
if(Math.abs(u)>=1)return i(u,l)}return i(e>t?-0:0,n.units[n.units.length-1])}var hr=function(){function e(e){var t=e.zone||Qe.defaultZone,n=e.invalid||(Number.isNaN(e.ts)?new Pe("invalid input"):null)||(t.isValid?null:Yn(t))
this.ts=B(e.ts)?Qe.now():e.ts
var r=null,i=null
if(!n)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(t)){var o=[e.old.c,e.old.o]
r=o[0],i=o[1]}else{var a=t.offset(this.ts)
r=Kn(this.ts,a),r=(n=Number.isNaN(r.year)?new Pe("invalid input"):null)?null:r,i=n?null:a}this._zone=t,this.loc=e.loc||ct.create(),this.invalid=n,this.weekData=null,this.c=r,this.o=i,this.isLuxonDateTime=!0}e.now=function(){return new e({})},e.local=function(t,n,r,i,o,a,s){return B(t)?e.now():dr({year:t,month:n,day:r,hour:i,minute:o,second:a,millisecond:s},Qe.defaultZone)},e.utc=function(t,n,r,i,o,a,s){return B(t)?new e({ts:Qe.now(),zone:Be.utcInstance}):dr({year:t,month:n,day:r,hour:i,minute:o,second:a,millisecond:s},Be.utcInstance)},e.fromJSDate=function(t,n){void 0===n&&(n={})
var r=function(e){return"[object Date]"===Object.prototype.toString.call(e)}(t)?t.valueOf():NaN
if(Number.isNaN(r))return e.invalid("invalid input")
var i=Ze(n.zone,Qe.defaultZone)
return i.isValid?new e({ts:r,zone:i,loc:ct.fromObject(n)}):e.invalid(Yn(i))},e.fromMillis=function(t,n){if(void 0===n&&(n={}),q(t))return t<-Gn||t>Gn?e.invalid("Timestamp out of range"):new e({ts:t,zone:Ze(n.zone,Qe.defaultZone),loc:ct.fromObject(n)})
throw new g("fromMillis requires a numerical input, but received a "+typeof t+" with value "+t)},e.fromSeconds=function(t,n){if(void 0===n&&(n={}),q(t))return new e({ts:1e3*t,zone:Ze(n.zone,Qe.defaultZone),loc:ct.fromObject(n)})
throw new g("fromSeconds requires a numerical input")},e.fromObject=function(t){var n=Ze(t.zone,Qe.defaultZone)
if(!n.isValid)return e.invalid(Yn(n))
var r=Qe.now(),i=n.offset(r),o=he(t,cr,["zone","locale","outputCalendar","numberingSystem"]),a=!B(o.ordinal),s=!B(o.year),l=!B(o.month)||!B(o.day),u=s||l,d=o.weekYear||o.weekNumber,f=ct.fromObject(t)
if((u||a)&&d)throw new v("Can't mix weekYear/weekNumber units with year/month/day or ordinals")
if(l&&a)throw new v("Can't mix ordinal dates with month/day")
var h,p,m=d||o.weekday&&!u,g=Kn(r,i)
m?(h=lr,p=or,g=Fn(g)):a?(h=ur,p=ar,g=zn(g)):(h=sr,p=ir)
for(var y,E=!1,b=c(h);!(y=b()).done;){var S=y.value
B(o[S])?o[S]=E?p[S]:g[S]:E=!0}var w=m?function(e){var t=Z(e.weekYear),n=Q(e.weekNumber,1,le(e.weekYear)),r=Q(e.weekday,1,7)
return t?n?!r&&An("weekday",e.weekday):An("week",e.week):An("weekYear",e.weekYear)}(o):a?function(e){var t=Z(e.year),n=Q(e.ordinal,1,oe(e.year))
return t?!n&&An("ordinal",e.ordinal):An("year",e.year)}(o):Bn(o),D=w||qn(o)
if(D)return e.invalid(D)
var C=Qn(m?Wn(o):a?jn(o):o,i,n),T=new e({ts:C[0],zone:n,o:C[1],loc:f})
return o.weekday&&u&&t.weekday!==T.weekday?e.invalid("mismatched weekday","you can't specify both a weekday of "+o.weekday+" and a date of "+T.toISO()):T},e.fromISO=function(e,t){void 0===t&&(t={})
var n=function(e){return ht(e,[Ft,Bt],[Wt,qt],[zt,Zt],[jt,Gt])}(e)
return tr(n[0],n[1],t,"ISO 8601",e)},e.fromRFC2822=function(e,t){void 0===t&&(t={})
var n=function(e){return ht(function(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}(e),[Ot,Pt])}(e)
return tr(n[0],n[1],t,"RFC 2822",e)},e.fromHTTP=function(e,t){void 0===t&&(t={})
var n=function(e){return ht(e,[Ht,Vt],[At,Vt],[Lt,Ut])}(e)
return tr(n[0],n[1],t,"HTTP",t)},e.fromFormat=function(t,n,r){if(void 0===r&&(r={}),B(t)||B(n))throw new g("fromFormat requires an input string and a format")
var i=r,o=i.locale,a=void 0===o?null:o,s=i.numberingSystem,l=void 0===s?null:s,u=function(e,t,n){var r=On(e,t,n)
return[r.result,r.zone,r.invalidReason]}(ct.fromOpts({locale:a,numberingSystem:l,defaultToEN:!0}),t,n),c=u[0],d=u[1],f=u[2]
return f?e.invalid(f):tr(c,d,r,"format "+n,t)},e.fromString=function(t,n,r){return void 0===r&&(r={}),e.fromFormat(t,n,r)},e.fromSQL=function(e,t){void 0===t&&(t={})
var n=function(e){return ht(e,[Xt,Jt],[$t,Kt])}(e)
return tr(n[0],n[1],t,"SQL",e)},e.invalid=function(t,n){if(void 0===n&&(n=null),!t)throw new g("need to specify a reason the DateTime is invalid")
var r=t instanceof Pe?t:new Pe(t,n)
if(Qe.throwOnInvalid)throw new f(r)
return new e({invalid:r})},e.isDateTime=function(e){return e&&e.isLuxonDateTime||!1}
var t=e.prototype
return t.get=function(e){return this[e]},t.resolvedLocaleOpts=function(e){void 0===e&&(e={})
var t=Oe.create(this.loc.clone(e),e).resolvedOptions(this)
return{locale:t.locale,numberingSystem:t.numberingSystem,outputCalendar:t.calendar}},t.toUTC=function(e,t){return void 0===e&&(e=0),void 0===t&&(t={}),this.setZone(Be.instance(e),t)},t.toLocal=function(){return this.setZone(Qe.defaultZone)},t.setZone=function(t,n){var r=void 0===n?{}:n,i=r.keepLocalTime,o=void 0!==i&&i,a=r.keepCalendarTime,s=void 0!==a&&a
if((t=Ze(t,Qe.defaultZone)).equals(this.zone))return this
if(t.isValid){var l=this.ts
if(o||s){var u=t.offset(this.ts)
l=Qn(this.toObject(),u,t)[0]}return $n(this,{ts:l,zone:t})}return e.invalid(Yn(t))},t.reconfigure=function(e){var t=void 0===e?{}:e,n=t.locale,r=t.numberingSystem,i=t.outputCalendar
return $n(this,{loc:this.loc.clone({locale:n,numberingSystem:r,outputCalendar:i})})},t.setLocale=function(e){return this.reconfigure({locale:e})},t.set=function(e){if(!this.isValid)return this
var t,n=he(e,cr,[]),r=!B(n.weekYear)||!B(n.weekNumber)||!B(n.weekday),i=!B(n.ordinal),o=!B(n.year),a=!B(n.month)||!B(n.day),s=o||a,l=n.weekYear||n.weekNumber
if((s||i)&&l)throw new v("Can't mix weekYear/weekNumber units with year/month/day or ordinals")
if(a&&i)throw new v("Can't mix ordinal dates with month/day")
r?t=Wn(Object.assign(Fn(this.c),n)):B(n.ordinal)?(t=Object.assign(this.toObject(),n),B(n.day)&&(t.day=Math.min(ae(t.year,t.month),t.day))):t=jn(Object.assign(zn(this.c),n))
var u=Qn(t,this.o,this.zone)
return $n(this,{ts:u[0],o:u[1]})},t.plus=function(e){return this.isValid?$n(this,er(this,cn(e))):this},t.minus=function(e){return this.isValid?$n(this,er(this,cn(e).negate())):this},t.startOf=function(e){if(!this.isValid)return this
var t={},n=un.normalizeUnit(e)
switch(n){case"years":t.month=1
case"quarters":case"months":t.day=1
case"weeks":case"days":t.hour=0
case"hours":t.minute=0
case"minutes":t.second=0
case"seconds":t.millisecond=0}if("weeks"===n&&(t.weekday=1),"quarters"===n){var r=Math.ceil(this.month/3)
t.month=3*(r-1)+1}return this.set(t)},t.endOf=function(e){var t
return this.isValid?this.plus((t={},t[e]=1,t)).startOf(e).minus(1):this},t.toFormat=function(e,t){return void 0===t&&(t={}),this.isValid?Oe.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this,e):Zn},t.toLocaleString=function(e){return void 0===e&&(e=w),this.isValid?Oe.create(this.loc.clone(e),e).formatDateTime(this):Zn},t.toLocaleParts=function(e){return void 0===e&&(e={}),this.isValid?Oe.create(this.loc.clone(e),e).formatDateTimeParts(this):[]},t.toISO=function(e){return void 0===e&&(e={}),this.isValid?this.toISODate(e)+"T"+this.toISOTime(e):null},t.toISODate=function(e){var t=(void 0===e?{}:e).format,n="basic"===(void 0===t?"extended":t)?"yyyyMMdd":"yyyy-MM-dd"
return this.year>9999&&(n="+"+n),nr(this,n)},t.toISOWeekDate=function(){return nr(this,"kkkk-'W'WW-c")},t.toISOTime=function(e){var t=void 0===e?{}:e,n=t.suppressMilliseconds,r=void 0!==n&&n,i=t.suppressSeconds,o=void 0!==i&&i,a=t.includeOffset,s=void 0===a||a,l=t.includePrefix,u=void 0!==l&&l,c=t.format
return rr(this,{suppressSeconds:o,suppressMilliseconds:r,includeOffset:s,includePrefix:u,format:void 0===c?"extended":c})},t.toRFC2822=function(){return nr(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)},t.toHTTP=function(){return nr(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")},t.toSQLDate=function(){return nr(this,"yyyy-MM-dd")},t.toSQLTime=function(e){var t=void 0===e?{}:e,n=t.includeOffset,r=void 0===n||n,i=t.includeZone
return rr(this,{includeOffset:r,includeZone:void 0!==i&&i,spaceZone:!0})},t.toSQL=function(e){return void 0===e&&(e={}),this.isValid?this.toSQLDate()+" "+this.toSQLTime(e):null},t.toString=function(){return this.isValid?this.toISO():Zn},t.valueOf=function(){return this.toMillis()},t.toMillis=function(){return this.isValid?this.ts:NaN},t.toSeconds=function(){return this.isValid?this.ts/1e3:NaN},t.toJSON=function(){return this.toISO()},t.toBSON=function(){return this.toJSDate()},t.toObject=function(e){if(void 0===e&&(e={}),!this.isValid)return{}
var t=Object.assign({},this.c)
return e.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t},t.toJSDate=function(){return new Date(this.isValid?this.ts:NaN)},t.diff=function(e,t,n){if(void 0===t&&(t="milliseconds"),void 0===n&&(n={}),!this.isValid||!e.isValid)return un.invalid(this.invalid||e.invalid,"created by diffing an invalid DateTime")
var r,i=Object.assign({locale:this.locale,numberingSystem:this.numberingSystem},n),o=(r=t,Array.isArray(r)?r:[r]).map(un.normalizeUnit),a=e.valueOf()>this.valueOf(),s=mn(a?this:e,a?e:this,o,i)
return a?s.negate():s},t.diffNow=function(t,n){return void 0===t&&(t="milliseconds"),void 0===n&&(n={}),this.diff(e.now(),t,n)},t.until=function(e){return this.isValid?hn.fromDateTimes(this,e):this},t.hasSame=function(e,t){if(!this.isValid)return!1
var n=e.valueOf(),r=this.setZone(e.zone,{keepLocalTime:!0})
return r.startOf(t)<=n&&n<=r.endOf(t)},t.equals=function(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)},t.toRelative=function(t){if(void 0===t&&(t={}),!this.isValid)return null
var n=t.base||e.fromObject({zone:this.zone}),r=t.padding?this<n?-t.padding:t.padding:0,i=["years","months","days","hours","minutes","seconds"],o=t.unit
return Array.isArray(t.unit)&&(i=t.unit,o=void 0),fr(n,this.plus(r),Object.assign(t,{numeric:"always",units:i,unit:o}))},t.toRelativeCalendar=function(t){return void 0===t&&(t={}),this.isValid?fr(t.base||e.fromObject({zone:this.zone}),this,Object.assign(t,{numeric:"auto",units:["years","months","days"],calendary:!0})):null},e.min=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
if(!n.every(e.isDateTime))throw new g("min requires all arguments be DateTimes")
return $(n,(function(e){return e.valueOf()}),Math.min)},e.max=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
if(!n.every(e.isDateTime))throw new g("max requires all arguments be DateTimes")
return $(n,(function(e){return e.valueOf()}),Math.max)},e.fromFormatExplain=function(e,t,n){void 0===n&&(n={})
var r=n,i=r.locale,o=void 0===i?null:i,a=r.numberingSystem,s=void 0===a?null:a
return On(ct.fromOpts({locale:o,numberingSystem:s,defaultToEN:!0}),e,t)},e.fromStringExplain=function(t,n,r){return void 0===r&&(r={}),e.fromFormatExplain(t,n,r)},r(e,[{key:"isValid",get:function(){return null===this.invalid}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}},{key:"locale",get:function(){return this.isValid?this.loc.locale:null}},{key:"numberingSystem",get:function(){return this.isValid?this.loc.numberingSystem:null}},{key:"outputCalendar",get:function(){return this.isValid?this.loc.outputCalendar:null}},{key:"zone",get:function(){return this._zone}},{key:"zoneName",get:function(){return this.isValid?this.zone.name:null}},{key:"year",get:function(){return this.isValid?this.c.year:NaN}},{key:"quarter",get:function(){return this.isValid?Math.ceil(this.c.month/3):NaN}},{key:"month",get:function(){return this.isValid?this.c.month:NaN}},{key:"day",get:function(){return this.isValid?this.c.day:NaN}},{key:"hour",get:function(){return this.isValid?this.c.hour:NaN}},{key:"minute",get:function(){return this.isValid?this.c.minute:NaN}},{key:"second",get:function(){return this.isValid?this.c.second:NaN}},{key:"millisecond",get:function(){return this.isValid?this.c.millisecond:NaN}},{key:"weekYear",get:function(){return this.isValid?Xn(this).weekYear:NaN}},{key:"weekNumber",get:function(){return this.isValid?Xn(this).weekNumber:NaN}},{key:"weekday",get:function(){return this.isValid?Xn(this).weekday:NaN}},{key:"ordinal",get:function(){return this.isValid?zn(this.c).ordinal:NaN}},{key:"monthShort",get:function(){return this.isValid?pn.months("short",{locObj:this.loc})[this.month-1]:null}},{key:"monthLong",get:function(){return this.isValid?pn.months("long",{locObj:this.loc})[this.month-1]:null}},{key:"weekdayShort",get:function(){return this.isValid?pn.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}},{key:"weekdayLong",get:function(){return this.isValid?pn.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}},{key:"offset",get:function(){return this.isValid?+this.o:NaN}},{key:"offsetNameShort",get:function(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}},{key:"offsetNameLong",get:function(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}},{key:"isOffsetFixed",get:function(){return this.isValid?this.zone.universal:null}},{key:"isInDST",get:function(){return!this.isOffsetFixed&&(this.offset>this.set({month:1}).offset||this.offset>this.set({month:5}).offset)}},{key:"isInLeapYear",get:function(){return ie(this.year)}},{key:"daysInMonth",get:function(){return ae(this.year,this.month)}},{key:"daysInYear",get:function(){return this.isValid?oe(this.year):NaN}},{key:"weeksInWeekYear",get:function(){return this.isValid?le(this.weekYear):NaN}}],[{key:"DATE_SHORT",get:function(){return w}},{key:"DATE_MED",get:function(){return D}},{key:"DATE_MED_WITH_WEEKDAY",get:function(){return C}},{key:"DATE_FULL",get:function(){return T}},{key:"DATE_HUGE",get:function(){return _}},{key:"TIME_SIMPLE",get:function(){return k}},{key:"TIME_WITH_SECONDS",get:function(){return R}},{key:"TIME_WITH_SHORT_OFFSET",get:function(){return M}},{key:"TIME_WITH_LONG_OFFSET",get:function(){return x}},{key:"TIME_24_SIMPLE",get:function(){return I}},{key:"TIME_24_WITH_SECONDS",get:function(){return N}},{key:"TIME_24_WITH_SHORT_OFFSET",get:function(){return O}},{key:"TIME_24_WITH_LONG_OFFSET",get:function(){return P}},{key:"DATETIME_SHORT",get:function(){return H}},{key:"DATETIME_SHORT_WITH_SECONDS",get:function(){return A}},{key:"DATETIME_MED",get:function(){return L}},{key:"DATETIME_MED_WITH_SECONDS",get:function(){return V}},{key:"DATETIME_MED_WITH_WEEKDAY",get:function(){return U}},{key:"DATETIME_FULL",get:function(){return F}},{key:"DATETIME_FULL_WITH_SECONDS",get:function(){return W}},{key:"DATETIME_HUGE",get:function(){return z}},{key:"DATETIME_HUGE_WITH_SECONDS",get:function(){return j}}]),e}()
function pr(e){if(hr.isDateTime(e))return e
if(e&&e.valueOf&&q(e.valueOf()))return hr.fromJSDate(e)
if(e&&"object"==typeof e)return hr.fromObject(e)
throw new g("Unknown datetime argument: "+e+", of type "+typeof e)}t.c9=hr}},t={}
var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},n(e,t)}
function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},i.apply(this,arguments)}
Object.create
function o(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i])
return e.concat(r||Array.prototype.slice.call(t))}Object.create
"function"==typeof SuppressedError&&SuppressedError
var a,s,l,u,c,d,f,h,p={},v=[],m=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i
function g(e,t){for(var n in t)e[n]=t[n]
return e}function y(e){var t=e.parentNode
t&&t.removeChild(e)}function E(e,t,n){var r,i,o,s={}
for(o in t)"key"==o?r=t[o]:"ref"==o?i=t[o]:s[o]=t[o]
if(arguments.length>2&&(s.children=arguments.length>3?a.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===s[o]&&(s[o]=e.defaultProps[o])
return b(e,s,r,i,null)}function b(e,t,n,r,i){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==i?++l:i}
return null==i&&null!=s.vnode&&s.vnode(o),o}function S(){return{current:null}}function w(e){return e.children}function D(e,t,n){"-"===t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||m.test(t)?n:n+"px"}function C(e,t,n,r,i){var o
e:if("style"===t)if("string"==typeof n)e.style.cssText=n
else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||D(e.style,t,"")
if(n)for(t in n)r&&n[t]===r[t]||D(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?_:T,o):e.removeEventListener(t,o?_:T,o)
else if("dangerouslySetInnerHTML"!==t){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s")
else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n
break e}catch(e){}"function"==typeof n||(null==n||!1===n&&-1==t.indexOf("-")?e.removeAttribute(t):e.setAttribute(t,n))}}function T(e){u=!0
try{return this.l[e.type+!1](s.event?s.event(e):e)}finally{u=!1}}function _(e){u=!0
try{return this.l[e.type+!0](s.event?s.event(e):e)}finally{u=!1}}function k(e,t){this.props=e,this.context=t}function R(e,t){if(null==t)return e.__?R(e.__,e.__.__k.indexOf(e)+1):null
for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e
return"function"==typeof e.type?R(e):null}function M(e){var t,n
if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e
break}return M(e)}}function x(e){u?setTimeout(e):f(e)}function I(e){(!e.__d&&(e.__d=!0)&&c.push(e)&&!N.__r++||d!==s.debounceRendering)&&((d=s.debounceRendering)||x)(N)}function N(){var e,t,n,r,i,o,a,s
for(c.sort((function(e,t){return e.__v.__b-t.__v.__b}));e=c.shift();)e.__d&&(t=c.length,r=void 0,i=void 0,a=(o=(n=e).__v).__e,(s=n.__P)&&(r=[],(i=g({},o)).__v=o.__v+1,V(s,o,i,n.__n,void 0!==s.ownerSVGElement,null!=o.__h?[a]:null,r,null==a?R(o):a,o.__h),U(r,o),o.__e!=a&&M(o)),c.length>t&&c.sort((function(e,t){return e.__v.__b-t.__v.__b})))
N.__r=0}function O(e,t,n,r,i,o,a,s,l,u){var c,d,f,h,m,g,y,E=r&&r.__k||v,S=E.length
for(n.__k=[],c=0;c<t.length;c++)if(null!=(h=n.__k[c]=null==(h=t[c])||"boolean"==typeof h?null:"string"==typeof h||"number"==typeof h||"bigint"==typeof h?b(null,h,null,null,h):Array.isArray(h)?b(w,{children:h},null,null,null):h.__b>0?b(h.type,h.props,h.key,h.ref?h.ref:null,h.__v):h)){if(h.__=n,h.__b=n.__b+1,null===(f=E[c])||f&&h.key==f.key&&h.type===f.type)E[c]=void 0
else for(d=0;d<S;d++){if((f=E[d])&&h.key==f.key&&h.type===f.type){E[d]=void 0
break}f=null}V(e,h,f=f||p,i,o,a,s,l,u),m=h.__e,(d=h.ref)&&f.ref!=d&&(y||(y=[]),f.ref&&y.push(f.ref,null,h),y.push(d,h.__c||m,h)),null!=m?(null==g&&(g=m),"function"==typeof h.type&&h.__k===f.__k?h.__d=l=P(h,l,e):l=A(e,h,f,E,m,l),"function"==typeof n.type&&(n.__d=l)):l&&f.__e==l&&l.parentNode!=e&&(l=R(f))}for(n.__e=g,c=S;c--;)null!=E[c]&&("function"==typeof n.type&&null!=E[c].__e&&E[c].__e==n.__d&&(n.__d=L(r).nextSibling),z(E[c],E[c]))
if(y)for(c=0;c<y.length;c++)W(y[c],y[++c],y[++c])}function P(e,t,n){for(var r,i=e.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=e,t="function"==typeof r.type?P(r,t,n):A(n,r,r,i,r.__e,t))
return t}function H(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){H(e,t)})):t.push(e)),t}function A(e,t,n,r,i,o){var a,s,l
if(void 0!==t.__d)a=t.__d,t.__d=void 0
else if(null==n||i!=o||null==i.parentNode)e:if(null==o||o.parentNode!==e)e.appendChild(i),a=null
else{for(s=o,l=0;(s=s.nextSibling)&&l<r.length;l+=1)if(s==i)break e
e.insertBefore(i,o),a=o}return void 0!==a?a:i.nextSibling}function L(e){var t,n,r
if(null==e.type||"string"==typeof e.type)return e.__e
if(e.__k)for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(r=L(n)))return r
return null}function V(e,t,n,r,i,o,a,l,u){var c,d,f,h,p,v,m,y,E,b,S,D,C,T,_,R=t.type
if(void 0!==t.constructor)return null
null!=n.__h&&(u=n.__h,l=t.__e=n.__e,t.__h=null,o=[l]),(c=s.__b)&&c(t)
try{e:if("function"==typeof R){if(y=t.props,E=(c=R.contextType)&&r[c.__c],b=c?E?E.props.value:c.__:r,n.__c?m=(d=t.__c=n.__c).__=d.__E:("prototype"in R&&R.prototype.render?t.__c=d=new R(y,b):(t.__c=d=new k(y,b),d.constructor=R,d.render=j),E&&E.sub(d),d.props=y,d.state||(d.state={}),d.context=b,d.__n=r,f=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=R.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=g({},d.__s)),g(d.__s,R.getDerivedStateFromProps(y,d.__s))),h=d.props,p=d.state,d.__v=t,f)null==R.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount)
else{if(null==R.getDerivedStateFromProps&&y!==h&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(y,b),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(y,d.__s,b)||t.__v===n.__v){for(t.__v!==n.__v&&(d.props=y,d.state=d.__s,d.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),S=0;S<d._sb.length;S++)d.__h.push(d._sb[S])
d._sb=[],d.__h.length&&a.push(d)
break e}null!=d.componentWillUpdate&&d.componentWillUpdate(y,d.__s,b),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(h,p,v)}))}if(d.context=b,d.props=y,d.__P=e,D=s.__r,C=0,"prototype"in R&&R.prototype.render){for(d.state=d.__s,d.__d=!1,D&&D(t),c=d.render(d.props,d.state,d.context),T=0;T<d._sb.length;T++)d.__h.push(d._sb[T])
d._sb=[]}else do{d.__d=!1,D&&D(t),c=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++C<25)
d.state=d.__s,null!=d.getChildContext&&(r=g(g({},r),d.getChildContext())),f||null==d.getSnapshotBeforeUpdate||(v=d.getSnapshotBeforeUpdate(h,p)),_=null!=c&&c.type===w&&null==c.key?c.props.children:c,O(e,Array.isArray(_)?_:[_],t,n,r,i,o,a,l,u),d.base=t.__e,t.__h=null,d.__h.length&&a.push(d),m&&(d.__E=d.__=null),d.__e=!1}else null==o&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=F(n.__e,t,n,r,i,o,a,u);(c=s.diffed)&&c(t)}catch(e){t.__v=null,(u||null!=o)&&(t.__e=l,t.__h=!!u,o[o.indexOf(l)]=null),s.__e(e,t,n)}}function U(e,t){s.__c&&s.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){s.__e(e,t.__v)}}))}function F(e,t,n,r,i,o,s,l){var u,c,d,f=n.props,h=t.props,v=t.type,m=0
if("svg"===v&&(i=!0),null!=o)for(;m<o.length;m++)if((u=o[m])&&"setAttribute"in u==!!v&&(v?u.localName===v:3===u.nodeType)){e=u,o[m]=null
break}if(null==e){if(null===v)return document.createTextNode(h)
e=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),o=null,l=!1}if(null===v)f===h||l&&e.data===h||(e.data=h)
else{if(o=o&&a.call(e.childNodes),c=(f=n.props||p).dangerouslySetInnerHTML,d=h.dangerouslySetInnerHTML,!l){if(null!=o)for(f={},m=0;m<e.attributes.length;m++)f[e.attributes[m].name]=e.attributes[m].value;(d||c)&&(d&&(c&&d.__html==c.__html||d.__html===e.innerHTML)||(e.innerHTML=d&&d.__html||""))}if(function(e,t,n,r,i){var o
for(o in n)"children"===o||"key"===o||o in t||C(e,o,null,n[o],r)
for(o in t)i&&"function"!=typeof t[o]||"children"===o||"key"===o||"value"===o||"checked"===o||n[o]===t[o]||C(e,o,t[o],n[o],r)}(e,h,f,i,l),d)t.__k=[]
else if(m=t.props.children,O(e,Array.isArray(m)?m:[m],t,n,r,i&&"foreignObject"!==v,o,s,o?o[0]:n.__k&&R(n,0),l),null!=o)for(m=o.length;m--;)null!=o[m]&&y(o[m])
l||("value"in h&&void 0!==(m=h.value)&&(m!==e.value||"progress"===v&&!m||"option"===v&&m!==f.value)&&C(e,"value",m,f.value,!1),"checked"in h&&void 0!==(m=h.checked)&&m!==e.checked&&C(e,"checked",m,f.checked,!1))}return e}function W(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){s.__e(e,n)}}function z(e,t,n){var r,i
if(s.unmount&&s.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||W(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){s.__e(e,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&z(r[i],t,n||"function"!=typeof e.type)
n||null==e.__e||y(e.__e),e.__=e.__e=e.__d=void 0}function j(e,t,n){return this.constructor(e,n)}function B(e,t,n){var r,i,o
s.__&&s.__(e,t),i=(r="function"==typeof n)?null:n&&n.__k||t.__k,o=[],V(t,e=(!r&&n||t).__k=E(w,null,[e]),i||p,p,void 0!==t.ownerSVGElement,!r&&n?[n]:i?null:t.firstChild?a.call(t.childNodes):null,o,!r&&n?n:i?i.__e:t.firstChild,r),U(o,e)}function q(e,t){var n={__c:t="__cC"+h++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r
return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some((function(e){e.__e=!0,I(e)}))},this.sub=function(e){n.push(e)
var t=e.componentWillUnmount
e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}}
return n.Provider.__=n.Consumer.contextType=n}a=v.slice,s={__e:function(e,t,n,r){for(var i,o,a;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(e)),a=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(e,r||{}),a=i.__d),a)return i.__E=i}catch(t){e=t}throw e}},l=0,u=!1,k.prototype.setState=function(e,t){var n
n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=g({},this.state),"function"==typeof e&&(e=e(g({},n),this.props)),e&&g(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),I(this))},k.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),I(this))},k.prototype.render=w,c=[],f="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,N.__r=0,h=0
var Z,G,Y,X=[],J=[],K=s.__b,Q=s.__r,ee=s.diffed,te=s.__c,ne=s.unmount
function re(){for(var e;e=X.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ae),e.__H.__h.forEach(se),e.__H.__h=[]}catch(t){e.__H.__h=[],s.__e(t,e.__v)}}s.__b=function(e){Z=null,K&&K(e)},s.__r=function(e){Q&&Q(e),0
var t=(Z=e.__c).__H
t&&(G===Z?(t.__h=[],Z.__h=[],t.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=J,e.__N=e.i=void 0}))):(t.__h.forEach(ae),t.__h.forEach(se),t.__h=[])),G=Z},s.diffed=function(e){ee&&ee(e)
var t=e.__c
t&&t.__H&&(t.__H.__h.length&&(1!==X.push(t)&&Y===s.requestAnimationFrame||((Y=s.requestAnimationFrame)||oe)(re)),t.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==J&&(e.__=e.__V),e.i=void 0,e.__V=J}))),G=Z=null},s.__c=function(e,t){t.some((function(e){try{e.__h.forEach(ae),e.__h=e.__h.filter((function(e){return!e.__||se(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],s.__e(n,e.__v)}})),te&&te(e,t)},s.unmount=function(e){ne&&ne(e)
var t,n=e.__c
n&&n.__H&&(n.__H.__.forEach((function(e){try{ae(e)}catch(e){t=e}})),n.__H=void 0,t&&s.__e(t,n.__v))}
var ie="function"==typeof requestAnimationFrame
function oe(e){var t,n=function(){clearTimeout(r),ie&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100)
ie&&(t=requestAnimationFrame(n))}function ae(e){var t=Z,n=e.__c
"function"==typeof n&&(e.__c=void 0,n()),Z=t}function se(e){var t=Z
e.__c=e.__(),Z=t}function le(e,t){for(var n in t)e[n]=t[n]
return e}function ue(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0
for(var r in t)if("__source"!==r&&e[r]!==t[r])return!0
return!1}function ce(e){this.props=e}(ce.prototype=new k).isPureReactComponent=!0,ce.prototype.shouldComponentUpdate=function(e,t){return ue(this.props,e)||ue(this.state,t)}
var de=s.__b
s.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),de&&de(e)}
"undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")
var fe=s.__e
s.__e=function(e,t,n,r){if(e.then)for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)
fe(e,t,n,r)}
var he=s.unmount
function pe(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),e.__c.__H=null),null!=(e=le({},e)).__c&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map((function(e){return pe(e,t,n)}))),e}function ve(e,t,n){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map((function(e){return ve(e,t,n)})),e.__c&&e.__c.__P===t&&(e.__e&&n.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=n)),e}function me(){this.__u=0,this.t=null,this.__b=null}function ge(e){var t=e.__.__c
return t&&t.__a&&t.__a(e)}function ye(){this.u=null,this.o=null}s.unmount=function(e){var t=e.__c
t&&t.__R&&t.__R(),t&&!0===e.__h&&(e.type=null),he&&he(e)},(me.prototype=new k).__c=function(e,t){var n=t.__c,r=this
null==r.t&&(r.t=[]),r.t.push(n)
var i=ge(r.__v),o=!1,a=function(){o||(o=!0,n.__R=null,i?i(s):s())}
n.__R=a
var s=function(){if(! --r.__u){if(r.state.__a){var e=r.state.__a
r.__v.__k[0]=ve(e,e.__c.__P,e.__c.__O)}var t
for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate()}},l=!0===t.__h
r.__u++||l||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(a,a)},me.prototype.componentWillUnmount=function(){this.t=[]},me.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c
this.__v.__k[0]=pe(this.__b,n,r.__O=r.__P)}this.__b=null}var i=t.__a&&E(w,null,e.fallback)
return i&&(i.__h=null),[E(w,null,t.__a?null:e.children),i]}
var Ee=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()()
if(n[1]<n[0])break
e.u=n=n[2]}}
function be(e){return this.getChildContext=function(){return e.context},e.children}function Se(e){var t=this,n=e.i
t.componentWillUnmount=function(){B(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),e.__v?(t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(e){this.childNodes.push(e),t.i.appendChild(e)},insertBefore:function(e,n){this.childNodes.push(e),t.i.appendChild(e)},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),t.i.removeChild(e)}}),B(E(be,{context:t.context},e.__v),t.l)):t.l&&t.componentWillUnmount()}function we(e,t){var n=E(Se,{__v:e,i:t})
return n.containerInfo=t,n}(ye.prototype=new k).__a=function(e){var t=this,n=ge(t.__v),r=t.o.get(e)
return r[0]++,function(i){var o=function(){t.props.revealOrder?(r.push(i),Ee(t,e,r)):i()}
n?n(o):o()}},ye.prototype.render=function(e){this.u=null,this.o=new Map
var t=H(e.children)
e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse()
for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u])
return e.children},ye.prototype.componentDidUpdate=ye.prototype.componentDidMount=function(){var e=this
this.o.forEach((function(t,n){Ee(e,n,t)}))}
var De="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,Ce=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Te="undefined"!=typeof document,_e=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(e)}
k.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(k.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})}))
var ke=s.event
function Re(){}function Me(){return this.cancelBubble}function xe(){return this.defaultPrevented}s.event=function(e){return ke&&(e=ke(e)),e.persist=Re,e.isPropagationStopped=Me,e.isDefaultPrevented=xe,e.nativeEvent=e}
var Ie={configurable:!0,get:function(){return this.class}},Ne=s.vnode
s.vnode=function(e){var t=e.type,n=e.props,r=n
if("string"==typeof t){var i=-1===t.indexOf("-")
for(var o in r={},n){var a=n[o]
Te&&"children"===o&&"noscript"===t||"value"===o&&"defaultValue"in n&&null==a||("defaultValue"===o&&"value"in n&&null==n.value?o="value":"download"===o&&!0===a?a="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!_e(n.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)?o=o.toLowerCase():i&&Ce.test(o)?o=o.replace(/[A-Z0-9]/g,"-$&").toLowerCase():null===a&&(a=void 0),/^oninput$/i.test(o)&&(o=o.toLowerCase(),r[o]&&(o="oninputCapture")),r[o]=a)}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=H(n.children).forEach((function(e){e.props.selected=-1!=r.value.indexOf(e.props.value)}))),"select"==t&&null!=r.defaultValue&&(r.value=H(n.children).forEach((function(e){e.props.selected=r.multiple?-1!=r.defaultValue.indexOf(e.props.value):r.defaultValue==e.props.value}))),e.props=r,n.class!=n.className&&(Ie.enumerable="className"in n,null!=n.className&&(r.class=n.className),Object.defineProperty(r,"className",Ie))}e.$$typeof=De,Ne&&Ne(e)}
var Oe=s.__r
s.__r=function(e){Oe&&Oe(e),e.__c}
var Pe="undefined"!=typeof globalThis?globalThis:window
Pe.FullCalendarVDom?console.warn("FullCalendar VDOM already loaded"):Pe.FullCalendarVDom={Component:k,createElement:E,render:B,createRef:S,Fragment:w,createContext:function(e){var t=q(e),n=t.Provider
return t.Provider=function(){var e=this,t=!this.getChildContext,r=n.apply(this,arguments)
if(t){var i=[]
this.shouldComponentUpdate=function(t){e.props.value!==t.value&&i.forEach((function(e){e.context=t.value,e.forceUpdate()}))},this.sub=function(e){i.push(e)
var t=e.componentWillUnmount
e.componentWillUnmount=function(){i.splice(i.indexOf(e),1),t&&t.call(e)}}}return r},t},createPortal:we,flushSync:function(e){e()
var t=s.debounceRendering,n=[]
function r(e){n.push(e)}s.debounceRendering=r,B(E(He,{}),document.createElement("div"))
for(;n.length;)n.shift()()
s.debounceRendering=t},unmountComponentAtNode:function(e){B(null,e)}}
var He=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){return E("div",{})},t.prototype.componentDidMount=function(){this.setState({})},t}(k)
if("undefined"==typeof FullCalendarVDom)throw new Error("Please import the top-level fullcalendar lib before attempting to import a plugin.")
var Ae=FullCalendarVDom.Component,Le=FullCalendarVDom.createElement,Ve=FullCalendarVDom.render,Ue=FullCalendarVDom.createRef,Fe=FullCalendarVDom.Fragment,We=FullCalendarVDom.createContext,ze=FullCalendarVDom.createPortal,je=FullCalendarVDom.flushSync,Be=FullCalendarVDom.unmountComponentAtNode,qe=function(){function e(e,t){this.context=e,this.internalEventSource=t}return e.prototype.remove=function(){this.context.dispatch({type:"REMOVE_EVENT_SOURCE",sourceId:this.internalEventSource.sourceId})},e.prototype.refetch=function(){this.context.dispatch({type:"FETCH_EVENT_SOURCES",sourceIds:[this.internalEventSource.sourceId],isRefetch:!0})},Object.defineProperty(e.prototype,"id",{get:function(){return this.internalEventSource.publicId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"url",{get:function(){return this.internalEventSource.meta.url},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"format",{get:function(){return this.internalEventSource.meta.format},enumerable:!1,configurable:!0}),e}()
function Ze(e){e.parentNode&&e.parentNode.removeChild(e)}function Ge(e,t){if(e.closest)return e.closest(t)
if(!document.documentElement.contains(e))return null
do{if(Ye(e,t))return e
e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType)
return null}function Ye(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector).call(e,t)}var Xe=/(top|left|right|bottom|width|height)$/i
function $e(e,t){for(var n in t)Je(e,n,t[n])}function Je(e,t,n){null==n?e.style[t]="":"number"==typeof n&&Xe.test(t)?e.style[t]=n+"px":e.style[t]=n}function Ke(e){var t,n
return null!==(n=null===(t=e.composedPath)||void 0===t?void 0:t.call(e)[0])&&void 0!==n?n:e.target}function Qe(e){return e.getRootNode?e.getRootNode():document}var et=0
function tt(){return"fc-dom-"+(et+=1)}function nt(e){e.preventDefault()}function rt(e,t,n,r){var i=function(e,t){return function(n){var r=Ge(n.target,e)
r&&t.call(r,n,r)}}(n,r)
return e.addEventListener(t,i),function(){e.removeEventListener(t,i)}}var it=["webkitTransitionEnd","otransitionend","oTransitionEnd","msTransitionEnd","transitionend"]
function ot(e){return i({onClick:e},at(e))}function at(e){return{tabIndex:0,onKeyDown:function(t){"Enter"!==t.key&&" "!==t.key||(e(t),t.preventDefault())}}}var st=0
function lt(){return String(st+=1)}function ut(){document.body.classList.add("fc-not-allowed")}function ct(){document.body.classList.remove("fc-not-allowed")}function dt(e,t,n){return n.func?n.func(e,t):function(e,t){if(!e&&!t)return 0
if(null==t)return-1
if(null==e)return 1
if("string"==typeof e||"string"==typeof t)return String(e).localeCompare(String(t))
return e-t}(e[n.field],t[n.field])*(n.order||1)}function ft(e,t){var n=String(e)
return"000".substr(0,t-n.length)+n}function ht(e,t,n){return"function"==typeof e?e.apply(void 0,t):"string"==typeof e?t.reduce((function(e,t,n){return e.replace("$"+n,t||"")}),e):n}function pt(e,t){return e-t}function vt(e){return e%1==0}function mt(e){var t=e.querySelector(".fc-scrollgrid-shrink-frame"),n=e.querySelector(".fc-scrollgrid-shrink-cushion")
if(!t)throw new Error("needs fc-scrollgrid-shrink-frame className")
if(!n)throw new Error("needs fc-scrollgrid-shrink-cushion className")
return e.getBoundingClientRect().width-t.getBoundingClientRect().width+n.getBoundingClientRect().width}var gt=["sun","mon","tue","wed","thu","fri","sat"]
function yt(e,t){var n=Rt(e)
return n[2]+=7*t,Mt(n)}function Et(e,t){var n=Rt(e)
return n[2]+=t,Mt(n)}function bt(e,t){var n=Rt(e)
return n[6]+=t,Mt(n)}function St(e,t){return(t.valueOf()-e.valueOf())/864e5}function wt(e,t){return It(e)===It(t)?Math.round(St(e,t)):null}function Dt(e){return Mt([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()])}function Ct(e,t,n,r){var i=Mt([t,0,1+Tt(t,n,r)]),o=Dt(e),a=Math.round(St(i,o))
return Math.floor(a/7)+1}function Tt(e,t,n){var r=7+t-n
return-((7+Mt([e,0,r]).getUTCDay()-t)%7)+r-1}function _t(e){return[e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()]}function kt(e){return new Date(e[0],e[1]||0,null==e[2]?1:e[2],e[3]||0,e[4]||0,e[5]||0)}function Rt(e){return[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()]}function Mt(e){return 1===e.length&&(e=e.concat([0])),new Date(Date.UTC.apply(Date,e))}function xt(e){return!isNaN(e.valueOf())}function It(e){return 1e3*e.getUTCHours()*60*60+1e3*e.getUTCMinutes()*60+1e3*e.getUTCSeconds()+e.getUTCMilliseconds()}function Nt(e,t,n,r){return{instanceId:lt(),defId:e,range:t,forcedStartTzo:null==n?null:n,forcedEndTzo:null==r?null:r}}var Ot=Object.prototype.hasOwnProperty
function Pt(e,t){var n={}
if(t)for(var r in t){for(var i=[],o=e.length-1;o>=0;o-=1){var a=e[o][r]
if("object"==typeof a&&a)i.unshift(a)
else if(void 0!==a){n[r]=a
break}}i.length&&(n[r]=Pt(i))}for(o=e.length-1;o>=0;o-=1){var s=e[o]
for(var l in s)l in n||(n[l]=s[l])}return n}function Ht(e,t){var n={}
for(var r in e)t(e[r],r)&&(n[r]=e[r])
return n}function At(e,t){var n={}
for(var r in e)n[r]=t(e[r],r)
return n}function Lt(e){for(var t={},n=0,r=e;n<r.length;n++){t[r[n]]=!0}return t}function Vt(e){var t=[]
for(var n in e)t.push(e[n])
return t}function Ut(e,t){if(e===t)return!0
for(var n in e)if(Ot.call(e,n)&&!(n in t))return!1
for(var n in t)if(Ot.call(t,n)&&e[n]!==t[n])return!1
return!0}function Ft(e,t){var n=[]
for(var r in e)Ot.call(e,r)&&(r in t||n.push(r))
for(var r in t)Ot.call(t,r)&&e[r]!==t[r]&&n.push(r)
return n}function Wt(e,t,n){if(void 0===n&&(n={}),e===t)return!0
for(var r in t)if(!(r in e)||!zt(e[r],t[r],n[r]))return!1
for(var r in e)if(!(r in t))return!1
return!0}function zt(e,t,n){return e===t||!0===n||!!n&&n(e,t)}function jt(e,t,n){var r=n.dateEnv,i=n.pluginHooks,o=n.options,a=e.defs,s=e.instances
for(var l in s=Ht(s,(function(e){return!a[e.defId].recurringDef})),a){var u=a[l]
if(u.recurringDef){var c=u.recurringDef.duration
c||(c=u.allDay?o.defaultAllDayEventDuration:o.defaultTimedEventDuration)
for(var d=0,f=Bt(u,c,t,r,i.recurringTypes);d<f.length;d++){var h=f[d],p=Nt(l,{start:h,end:r.add(h,c)})
s[p.instanceId]=p}}}return{defs:a,instances:s}}function Bt(e,t,n,r,i){var o=i[e.recurringDef.typeId].expand(e.recurringDef.typeData,{start:r.subtract(n.start,t),end:n.end},r)
return e.allDay&&(o=o.map(Dt)),o}var qt=["years","months","days","milliseconds"],Zt=/^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/
function Gt(e,t){var n
return"string"==typeof e?function(e){var t=Zt.exec(e)
if(t){var n=t[1]?-1:1
return{years:0,months:0,days:n*(t[2]?parseInt(t[2],10):0),milliseconds:n*(60*(t[3]?parseInt(t[3],10):0)*60*1e3+60*(t[4]?parseInt(t[4],10):0)*1e3+1e3*(t[5]?parseInt(t[5],10):0)+(t[6]?parseInt(t[6],10):0))}}return null}(e):"object"==typeof e&&e?Yt(e):"number"==typeof e?Yt(((n={})[t||"milliseconds"]=e,n)):null}function Yt(e){var t={years:e.years||e.year||0,months:e.months||e.month||0,days:e.days||e.day||0,milliseconds:60*(e.hours||e.hour||0)*60*1e3+60*(e.minutes||e.minute||0)*1e3+1e3*(e.seconds||e.second||0)+(e.milliseconds||e.millisecond||e.ms||0)},n=e.weeks||e.week
return n&&(t.days+=7*n,t.specifiedWeeks=!0),t}function Xt(e,t){return{years:e.years+t.years,months:e.months+t.months,days:e.days+t.days,milliseconds:e.milliseconds+t.milliseconds}}function $t(e){return Jt(e)/864e5}function Jt(e){return 31536e6*e.years+2592e6*e.months+864e5*e.days+e.milliseconds}function Kt(e,t){for(var n=null,r=0;r<qt.length;r+=1){var i=qt[r]
if(t[i]){var o=e[i]/t[i]
if(!vt(o)||null!==n&&n!==o)return null
n=o}else if(e[i])return null}return n}function Qt(e){var t=e.milliseconds
if(t){if(t%1e3!=0)return{unit:"millisecond",value:t}
if(t%6e4!=0)return{unit:"second",value:t/1e3}
if(t%36e5!=0)return{unit:"minute",value:t/6e4}
if(t)return{unit:"hour",value:t/36e5}}return e.days?e.specifiedWeeks&&e.days%7==0?{unit:"week",value:e.days/7}:{unit:"day",value:e.days}:e.months?{unit:"month",value:e.months}:e.years?{unit:"year",value:e.years}:{unit:"millisecond",value:0}}function en(e,t,n){void 0===n&&(n=!1)
var r=e.toISOString()
return r=r.replace(".000",""),n&&(r=r.replace("T00:00:00Z","")),r.length>10&&(null==t?r=r.replace("Z",""):0!==t&&(r=r.replace("Z",nn(t,!0)))),r}function tn(e){return e.toISOString().replace(/T.*$/,"")}function nn(e,t){void 0===t&&(t=!1)
var n=e<0?"-":"+",r=Math.abs(e),i=Math.floor(r/60),o=Math.round(r%60)
return t?n+ft(i,2)+":"+ft(o,2):"GMT"+n+i+(o?":"+ft(o,2):"")}function rn(e,t,n){if(e===t)return!0
var r,i=e.length
if(i!==t.length)return!1
for(r=0;r<i;r+=1)if(!(n?n(e[r],t[r]):e[r]===t[r]))return!1
return!0}function on(e,t,n){var r,i
return function(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a]
if(r){if(!rn(r,o)){n&&n(i)
var s=e.apply(this,o)
t&&t(s,i)||(i=s)}}else i=e.apply(this,o)
return r=o,i}}function an(e,t,n){var r,i,o=this
return function(a){if(r){if(!Ut(r,a)){n&&n(i)
var s=e.call(o,a)
t&&t(s,i)||(i=s)}}else i=e.call(o,a)
return r=a,i}}var sn={week:3,separator:0,omitZeroMinute:0,meridiem:0,omitCommas:0},ln={timeZoneName:7,era:6,year:5,month:4,day:2,weekday:2,hour:1,minute:1,second:1},un=/\s*([ap])\.?m\.?/i,cn=/,/g,dn=/\s+/g,fn=/\u200e/g,hn=/UTC|GMT/,pn=function(){function e(e){var t={},n={},r=0
for(var i in e)i in sn?(n[i]=e[i],r=Math.max(sn[i],r)):(t[i]=e[i],i in ln&&(r=Math.max(ln[i],r)))
this.standardDateProps=t,this.extendedSettings=n,this.severity=r,this.buildFormattingFunc=on(vn)}return e.prototype.format=function(e,t){return this.buildFormattingFunc(this.standardDateProps,this.extendedSettings,t)(e)},e.prototype.formatRange=function(e,t,n,r){var i=this.standardDateProps,o=this.extendedSettings,a=function(e,t,n){if(n.getMarkerYear(e)!==n.getMarkerYear(t))return 5
if(n.getMarkerMonth(e)!==n.getMarkerMonth(t))return 4
if(n.getMarkerDay(e)!==n.getMarkerDay(t))return 2
if(It(e)!==It(t))return 1
return 0}(e.marker,t.marker,n.calendarSystem)
if(!a)return this.format(e,n)
var s=a
!(s>1)||"numeric"!==i.year&&"2-digit"!==i.year||"numeric"!==i.month&&"2-digit"!==i.month||"numeric"!==i.day&&"2-digit"!==i.day||(s=1)
var l=this.format(e,n),u=this.format(t,n)
if(l===u)return l
var c=vn(function(e,t){var n={}
for(var r in e)(!(r in ln)||ln[r]<=t)&&(n[r]=e[r])
return n}(i,s),o,n),d=c(e),f=c(t),h=function(e,t,n,r){var i=0
for(;i<e.length;){var o=e.indexOf(t,i)
if(-1===o)break
var a=e.substr(0,o)
i=o+t.length
for(var s=e.substr(i),l=0;l<n.length;){var u=n.indexOf(r,l)
if(-1===u)break
var c=n.substr(0,u)
l=u+r.length
var d=n.substr(l)
if(a===c&&s===d)return{before:a,after:s}}}return null}(l,d,u,f),p=o.separator||r||n.defaultSeparator||""
return h?h.before+d+p+f+h.after:l+p+u},e.prototype.getLargestUnit=function(){switch(this.severity){case 7:case 6:case 5:return"year"
case 4:return"month"
case 3:return"week"
case 2:return"day"
default:return"time"}},e}()
function vn(e,t,n){var r=Object.keys(e).length
return 1===r&&"short"===e.timeZoneName?function(e){return nn(e.timeZoneOffset)}:0===r&&t.week?function(e){return function(e,t,n,r,i){var o=[]
"long"===i?o.push(n):"short"!==i&&"narrow"!==i||o.push(t)
"long"!==i&&"short"!==i||o.push(" ")
o.push(r.simpleNumberFormat.format(e)),"rtl"===r.options.direction&&o.reverse()
return o.join("")}(n.computeWeekNumber(e.marker),n.weekText,n.weekTextLong,n.locale,t.week)}:function(e,t,n){e=i({},e),t=i({},t),function(e,t){e.timeZoneName&&(e.hour||(e.hour="2-digit"),e.minute||(e.minute="2-digit"))
"long"===e.timeZoneName&&(e.timeZoneName="short")
t.omitZeroMinute&&(e.second||e.millisecond)&&delete t.omitZeroMinute}(e,t),e.timeZone="UTC"
var r,o=new Intl.DateTimeFormat(n.locale.codes,e)
if(t.omitZeroMinute){var a=i({},e)
delete a.minute,r=new Intl.DateTimeFormat(n.locale.codes,a)}return function(i){var a=i.marker
return function(e,t,n,r,i){e=e.replace(fn,""),"short"===n.timeZoneName&&(e=function(e,t){var n=!1
e=e.replace(hn,(function(){return n=!0,t})),n||(e+=" "+t)
return e}(e,"UTC"===i.timeZone||null==t.timeZoneOffset?"UTC":nn(t.timeZoneOffset)))
r.omitCommas&&(e=e.replace(cn,"").trim())
r.omitZeroMinute&&(e=e.replace(":00",""))
!1===r.meridiem?e=e.replace(un,"").trim():"narrow"===r.meridiem?e=e.replace(un,(function(e,t){return t.toLocaleLowerCase()})):"short"===r.meridiem?e=e.replace(un,(function(e,t){return t.toLocaleLowerCase()+"m"})):"lowercase"===r.meridiem&&(e=e.replace(un,(function(e){return e.toLocaleLowerCase()})))
return e=e.replace(dn," "),e=e.trim(),e}((r&&!a.getUTCMinutes()?r:o).format(a),i,e,t,n)}}(e,t,n)}function mn(e,t){var n=t.markerToArray(e.marker)
return{marker:e.marker,timeZoneOffset:e.timeZoneOffset,array:n,year:n[0],month:n[1],day:n[2],hour:n[3],minute:n[4],second:n[5],millisecond:n[6]}}function gn(e,t,n,r){var i=mn(e,n.calendarSystem)
return{date:i,start:i,end:t?mn(t,n.calendarSystem):null,timeZone:n.timeZone,localeCodes:n.locale.codes,defaultSeparator:r||n.defaultSeparator}}var yn=function(){function e(e){this.cmdStr=e}return e.prototype.format=function(e,t,n){return t.cmdFormatter(this.cmdStr,gn(e,null,t,n))},e.prototype.formatRange=function(e,t,n,r){return n.cmdFormatter(this.cmdStr,gn(e,t,n,r))},e}(),En=function(){function e(e){this.func=e}return e.prototype.format=function(e,t,n){return this.func(gn(e,null,t,n))},e.prototype.formatRange=function(e,t,n,r){return this.func(gn(e,t,n,r))},e}()
function bn(e){return"object"==typeof e&&e?new pn(e):"string"==typeof e?new yn(e):"function"==typeof e?new En(e):null}var Sn={navLinkDayClick:xn,navLinkWeekClick:xn,duration:Gt,bootstrapFontAwesome:xn,buttonIcons:xn,customButtons:xn,defaultAllDayEventDuration:Gt,defaultTimedEventDuration:Gt,nextDayThreshold:Gt,scrollTime:Gt,scrollTimeReset:Boolean,slotMinTime:Gt,slotMaxTime:Gt,dayPopoverFormat:bn,slotDuration:Gt,snapDuration:Gt,headerToolbar:xn,footerToolbar:xn,defaultRangeSeparator:String,titleRangeSeparator:String,forceEventDuration:Boolean,dayHeaders:Boolean,dayHeaderFormat:bn,dayHeaderClassNames:xn,dayHeaderContent:xn,dayHeaderDidMount:xn,dayHeaderWillUnmount:xn,dayCellClassNames:xn,dayCellContent:xn,dayCellDidMount:xn,dayCellWillUnmount:xn,initialView:String,aspectRatio:Number,weekends:Boolean,weekNumberCalculation:xn,weekNumbers:Boolean,weekNumberClassNames:xn,weekNumberContent:xn,weekNumberDidMount:xn,weekNumberWillUnmount:xn,editable:Boolean,viewClassNames:xn,viewDidMount:xn,viewWillUnmount:xn,nowIndicator:Boolean,nowIndicatorClassNames:xn,nowIndicatorContent:xn,nowIndicatorDidMount:xn,nowIndicatorWillUnmount:xn,showNonCurrentDates:Boolean,lazyFetching:Boolean,startParam:String,endParam:String,timeZoneParam:String,timeZone:String,locales:xn,locale:xn,themeSystem:String,dragRevertDuration:Number,dragScroll:Boolean,allDayMaintainDuration:Boolean,unselectAuto:Boolean,dropAccept:xn,eventOrder:function(e){var t,n,r=[],i=[]
for("string"==typeof e?i=e.split(/\s*,\s*/):"function"==typeof e?i=[e]:Array.isArray(e)&&(i=e),t=0;t<i.length;t+=1)"string"==typeof(n=i[t])?r.push("-"===n.charAt(0)?{field:n.substring(1),order:-1}:{field:n,order:1}):"function"==typeof n&&r.push({func:n})
return r},eventOrderStrict:Boolean,handleWindowResize:Boolean,windowResizeDelay:Number,longPressDelay:Number,eventDragMinDistance:Number,expandRows:Boolean,height:xn,contentHeight:xn,direction:String,weekNumberFormat:bn,eventResizableFromStart:Boolean,displayEventTime:Boolean,displayEventEnd:Boolean,weekText:String,weekTextLong:String,progressiveEventRendering:Boolean,businessHours:xn,initialDate:xn,now:xn,eventDataTransform:xn,stickyHeaderDates:xn,stickyFooterScrollbar:xn,viewHeight:xn,defaultAllDay:Boolean,eventSourceFailure:xn,eventSourceSuccess:xn,eventDisplay:String,eventStartEditable:Boolean,eventDurationEditable:Boolean,eventOverlap:xn,eventConstraint:xn,eventAllow:xn,eventBackgroundColor:String,eventBorderColor:String,eventTextColor:String,eventColor:String,eventClassNames:xn,eventContent:xn,eventDidMount:xn,eventWillUnmount:xn,selectConstraint:xn,selectOverlap:xn,selectAllow:xn,droppable:Boolean,unselectCancel:String,slotLabelFormat:xn,slotLaneClassNames:xn,slotLaneContent:xn,slotLaneDidMount:xn,slotLaneWillUnmount:xn,slotLabelClassNames:xn,slotLabelContent:xn,slotLabelDidMount:xn,slotLabelWillUnmount:xn,dayMaxEvents:xn,dayMaxEventRows:xn,dayMinWidth:Number,slotLabelInterval:Gt,allDayText:String,allDayClassNames:xn,allDayContent:xn,allDayDidMount:xn,allDayWillUnmount:xn,slotMinWidth:Number,navLinks:Boolean,eventTimeFormat:bn,rerenderDelay:Number,moreLinkText:xn,moreLinkHint:xn,selectMinDistance:Number,selectable:Boolean,selectLongPressDelay:Number,eventLongPressDelay:Number,selectMirror:Boolean,eventMaxStack:Number,eventMinHeight:Number,eventMinWidth:Number,eventShortHeight:Number,slotEventOverlap:Boolean,plugins:xn,firstDay:Number,dayCount:Number,dateAlignment:String,dateIncrement:Gt,hiddenDays:xn,monthMode:Boolean,fixedWeekCount:Boolean,validRange:xn,visibleRange:xn,titleFormat:xn,eventInteractive:Boolean,noEventsText:String,viewHint:xn,navLinkHint:xn,closeHint:String,timeHint:String,eventHint:String,moreLinkClick:xn,moreLinkClassNames:xn,moreLinkContent:xn,moreLinkDidMount:xn,moreLinkWillUnmount:xn},wn={eventDisplay:"auto",defaultRangeSeparator:" - ",titleRangeSeparator:" – ",defaultTimedEventDuration:"01:00:00",defaultAllDayEventDuration:{day:1},forceEventDuration:!1,nextDayThreshold:"00:00:00",dayHeaders:!0,initialView:"",aspectRatio:1.35,headerToolbar:{start:"title",center:"",end:"today prev,next"},weekends:!0,weekNumbers:!1,weekNumberCalculation:"local",editable:!1,nowIndicator:!1,scrollTime:"06:00:00",scrollTimeReset:!0,slotMinTime:"00:00:00",slotMaxTime:"24:00:00",showNonCurrentDates:!0,lazyFetching:!0,startParam:"start",endParam:"end",timeZoneParam:"timeZone",timeZone:"local",locales:[],locale:"",themeSystem:"standard",dragRevertDuration:500,dragScroll:!0,allDayMaintainDuration:!1,unselectAuto:!0,dropAccept:"*",eventOrder:"start,-duration,allDay,title",dayPopoverFormat:{month:"long",day:"numeric",year:"numeric"},handleWindowResize:!0,windowResizeDelay:100,longPressDelay:1e3,eventDragMinDistance:5,expandRows:!1,navLinks:!1,selectable:!1,eventMinHeight:15,eventMinWidth:30,eventShortHeight:30},Dn={datesSet:xn,eventsSet:xn,eventAdd:xn,eventChange:xn,eventRemove:xn,windowResize:xn,eventClick:xn,eventMouseEnter:xn,eventMouseLeave:xn,select:xn,unselect:xn,loading:xn,_unmount:xn,_beforeprint:xn,_afterprint:xn,_noEventDrop:xn,_noEventResize:xn,_resize:xn,_scrollRequest:xn},Cn={buttonText:xn,buttonHints:xn,views:xn,plugins:xn,initialEvents:xn,events:xn,eventSources:xn},Tn={headerToolbar:_n,footerToolbar:_n,buttonText:_n,buttonHints:_n,buttonIcons:_n,dateIncrement:_n}
function _n(e,t){return"object"==typeof e&&"object"==typeof t&&e&&t?Ut(e,t):e===t}var kn={type:String,component:xn,buttonText:String,buttonTextKey:String,dateProfileGeneratorClass:xn,usesMinMaxTime:Boolean,classNames:xn,content:xn,didMount:xn,willUnmount:xn}
function Rn(e){return Pt(e,Tn)}function Mn(e,t){var n={},r={}
for(var i in t)i in e&&(n[i]=t[i](e[i]))
for(var i in e)i in t||(r[i]=e[i])
return{refined:n,extra:r}}function xn(e){return e}function In(e,t,n,r){for(var i={defs:{},instances:{}},o=Gn(n),a=0,s=e;a<s.length;a++){var l=qn(s[a],t,n,r,o)
l&&Nn(l,i)}return i}function Nn(e,t){return void 0===t&&(t={defs:{},instances:{}}),t.defs[e.def.defId]=e.def,e.instance&&(t.instances[e.instance.instanceId]=e.instance),t}function On(e,t){var n=e.instances[t]
if(n){var r=e.defs[n.defId],i=Hn(e,(function(e){return t=r,n=e,Boolean(t.groupId&&t.groupId===n.groupId)
var t,n}))
return i.defs[r.defId]=r,i.instances[n.instanceId]=n,i}return{defs:{},instances:{}}}function Pn(e,t){return{defs:i(i({},e.defs),t.defs),instances:i(i({},e.instances),t.instances)}}function Hn(e,t){var n=Ht(e.defs,t),r=Ht(e.instances,(function(e){return n[e.defId]}))
return{defs:n,instances:r}}function An(e){return Array.isArray(e)?e:"string"==typeof e?e.split(/\s+/):[]}var Ln={display:String,editable:Boolean,startEditable:Boolean,durationEditable:Boolean,constraint:xn,overlap:xn,allow:xn,className:An,classNames:An,color:String,backgroundColor:String,borderColor:String,textColor:String},Vn={display:null,startEditable:null,durationEditable:null,constraints:[],overlap:null,allows:[],backgroundColor:"",borderColor:"",textColor:"",classNames:[]}
function Un(e,t){var n=function(e,t){return Array.isArray(e)?In(e,null,t,!0):"object"==typeof e&&e?In([e],null,t,!0):null!=e?String(e):null}(e.constraint,t)
return{display:e.display||null,startEditable:null!=e.startEditable?e.startEditable:e.editable,durationEditable:null!=e.durationEditable?e.durationEditable:e.editable,constraints:null!=n?[n]:[],overlap:null!=e.overlap?e.overlap:null,allows:null!=e.allow?[e.allow]:[],backgroundColor:e.backgroundColor||e.color||"",borderColor:e.borderColor||e.color||"",textColor:e.textColor||"",classNames:(e.className||[]).concat(e.classNames||[])}}function Fn(e){return e.reduce(Wn,Vn)}function Wn(e,t){return{display:null!=t.display?t.display:e.display,startEditable:null!=t.startEditable?t.startEditable:e.startEditable,durationEditable:null!=t.durationEditable?t.durationEditable:e.durationEditable,constraints:e.constraints.concat(t.constraints),overlap:"boolean"==typeof t.overlap?t.overlap:e.overlap,allows:e.allows.concat(t.allows),backgroundColor:t.backgroundColor||e.backgroundColor,borderColor:t.borderColor||e.borderColor,textColor:t.textColor||e.textColor,classNames:e.classNames.concat(t.classNames)}}var zn={id:String,groupId:String,title:String,url:String,interactive:Boolean},jn={start:xn,end:xn,date:xn,allDay:Boolean},Bn=i(i(i({},zn),jn),{extendedProps:xn})
function qn(e,t,n,r,i){void 0===i&&(i=Gn(n))
var o=Zn(e,n,i),a=o.refined,s=o.extra,l=function(e,t){var n=null
e&&(n=e.defaultAllDay)
null==n&&(n=t.options.defaultAllDay)
return n}(t,n),u=function(e,t,n,r){for(var i=0;i<r.length;i+=1){var o=r[i].parse(e,n)
if(o){var a=e.allDay
return null==a&&null==(a=t)&&null==(a=o.allDayGuess)&&(a=!1),{allDay:a,duration:o.duration,typeData:o.typeData,typeId:i}}}return null}(a,l,n.dateEnv,n.pluginHooks.recurringTypes)
if(u)return(c=Yn(a,s,t?t.sourceId:"",u.allDay,Boolean(u.duration),n)).recurringDef={typeId:u.typeId,typeData:u.typeData,duration:u.duration},{def:c,instance:null}
var c,d=function(e,t,n,r){var i,o,a=e.allDay,s=null,l=!1,u=null,c=null!=e.start?e.start:e.date
if(i=n.dateEnv.createMarkerMeta(c),i)s=i.marker
else if(!r)return null
null!=e.end&&(o=n.dateEnv.createMarkerMeta(e.end))
null==a&&(a=null!=t?t:(!i||i.isTimeUnspecified)&&(!o||o.isTimeUnspecified))
a&&s&&(s=Dt(s))
o&&(u=o.marker,a&&(u=Dt(u)),s&&u<=s&&(u=null))
u?l=!0:r||(l=n.options.forceEventDuration||!1,u=n.dateEnv.add(s,a?n.options.defaultAllDayEventDuration:n.options.defaultTimedEventDuration))
return{allDay:a,hasEnd:l,range:{start:s,end:u},forcedStartTzo:i?i.forcedTzo:null,forcedEndTzo:o?o.forcedTzo:null}}(a,l,n,r)
return d?{def:c=Yn(a,s,t?t.sourceId:"",d.allDay,d.hasEnd,n),instance:Nt(c.defId,d.range,d.forcedStartTzo,d.forcedEndTzo)}:null}function Zn(e,t,n){return void 0===n&&(n=Gn(t)),Mn(e,n)}function Gn(e){return i(i(i({},Ln),Bn),e.pluginHooks.eventRefiners)}function Yn(e,t,n,r,o,a){for(var s={title:e.title||"",groupId:e.groupId||"",publicId:e.id||"",url:e.url||"",recurringDef:null,defId:lt(),sourceId:n,allDay:r,hasEnd:o,interactive:e.interactive,ui:Un(e,a),extendedProps:i(i({},e.extendedProps||{}),t)},l=0,u=a.pluginHooks.eventDefMemberAdders;l<u.length;l++){var c=u[l]
i(s,c(e))}return Object.freeze(s.ui.classNames),Object.freeze(s.extendedProps),s}function Xn(e){var t=Math.floor(St(e.start,e.end))||1,n=Dt(e.start)
return{start:n,end:Et(n,t)}}function $n(e,t){void 0===t&&(t=Gt(0))
var n=null,r=null
if(e.end){r=Dt(e.end)
var i=e.end.valueOf()-r.valueOf()
i&&i>=Jt(t)&&(r=Et(r,1))}return e.start&&(n=Dt(e.start),r&&r<=n&&(r=Et(n,1))),{start:n,end:r}}function Jn(e,t,n,r){return"year"===r?Gt(n.diffWholeYears(e,t),"year"):"month"===r?Gt(n.diffWholeMonths(e,t),"month"):(o=t,a=Dt(i=e),s=Dt(o),{years:0,months:0,days:Math.round(St(a,s)),milliseconds:o.valueOf()-s.valueOf()-(i.valueOf()-a.valueOf())})
var i,o,a,s}function Kn(e,t){var n,r,i=[],o=t.start
for(e.sort(Qn),n=0;n<e.length;n+=1)(r=e[n]).start>o&&i.push({start:o,end:r.start}),r.end>o&&(o=r.end)
return o<t.end&&i.push({start:o,end:t.end}),i}function Qn(e,t){return e.start.valueOf()-t.start.valueOf()}function er(e,t){var n=e.start,r=e.end,i=null
return null!==t.start&&(n=null===n?t.start:new Date(Math.max(n.valueOf(),t.start.valueOf()))),null!=t.end&&(r=null===r?t.end:new Date(Math.min(r.valueOf(),t.end.valueOf()))),(null===n||null===r||n<r)&&(i={start:n,end:r}),i}function tr(e,t){return(null===e.end||null===t.start||e.end>t.start)&&(null===e.start||null===t.end||e.start<t.end)}function nr(e,t){return(null===e.start||null!==t.start&&t.start>=e.start)&&(null===e.end||null!==t.end&&t.end<=e.end)}function rr(e,t){return(null===e.start||t>=e.start)&&(null===e.end||t<e.end)}function ir(e,t,n,r){var i={},o={},a={},s=[],l=[],u=sr(e.defs,t)
for(var c in e.defs){"inverse-background"===(h=u[(b=e.defs[c]).defId]).display&&(b.groupId?(i[b.groupId]=[],a[b.groupId]||(a[b.groupId]=b)):o[c]=[])}for(var d in e.instances){var f=e.instances[d],h=u[(b=e.defs[f.defId]).defId],p=f.range,v=!b.allDay&&r?$n(p,r):p,m=er(v,n)
m&&("inverse-background"===h.display?b.groupId?i[b.groupId].push(m):o[f.defId].push(m):"none"!==h.display&&("background"===h.display?s:l).push({def:b,ui:h,instance:f,range:m,isStart:v.start&&v.start.valueOf()===m.start.valueOf(),isEnd:v.end&&v.end.valueOf()===m.end.valueOf()}))}for(var g in i)for(var y=0,E=Kn(i[g],n);y<E.length;y++){var b,S=E[y]
h=u[(b=a[g]).defId]
s.push({def:b,ui:h,instance:null,range:S,isStart:!1,isEnd:!1})}for(var c in o)for(var w=0,D=Kn(o[c],n);w<D.length;w++){S=D[w]
s.push({def:e.defs[c],ui:u[c],instance:null,range:S,isStart:!1,isEnd:!1})}return{bg:s,fg:l}}function or(e,t){e.fcSeg=t}function ar(e){return e.fcSeg||e.parentNode.fcSeg||null}function sr(e,t){return At(e,(function(e){return lr(e,t)}))}function lr(e,t){var n=[]
return t[""]&&n.push(t[""]),t[e.defId]&&n.push(t[e.defId]),n.push(e.ui),Fn(n)}function ur(e,t){var n=e.map(cr)
return n.sort((function(e,n){return function(e,t,n){var r,i
for(r=0;r<n.length;r+=1)if(i=dt(e,t,n[r]))return i
return 0}(e,n,t)})),n.map((function(e){return e._seg}))}function cr(e){var t=e.eventRange,n=t.def,r=t.instance?t.instance.range:t.range,o=r.start?r.start.valueOf():0,a=r.end?r.end.valueOf():0
return i(i(i({},n.extendedProps),n),{id:n.publicId,start:o,end:a,duration:a-o,allDay:Number(n.allDay),_seg:e})}function dr(e,t){for(var n=t.pluginHooks.isDraggableTransformers,r=e.eventRange,i=r.def,o=r.ui,a=o.startEditable,s=0,l=n;s<l.length;s++){a=(0,l[s])(a,i,o,t)}return a}function fr(e,t){return e.isStart&&e.eventRange.ui.durationEditable&&t.options.eventResizableFromStart}function hr(e,t){return e.isEnd&&e.eventRange.ui.durationEditable}function pr(e,t,n,r,i,o,a){var s=n.dateEnv,l=n.options,u=l.displayEventTime,c=l.displayEventEnd,d=e.eventRange.def,f=e.eventRange.instance
null==u&&(u=!1!==r),null==c&&(c=!1!==i)
var h=f.range.start,p=f.range.end,v=o||e.start||e.eventRange.range.start,m=a||e.end||e.eventRange.range.end,g=Dt(h).valueOf()===Dt(v).valueOf(),y=Dt(bt(p,-1)).valueOf()===Dt(bt(m,-1)).valueOf()
return u&&!d.allDay&&(g||y)?(v=g?h:v,m=y?p:m,c&&d.hasEnd?s.formatRange(v,m,t,{forcedStartTzo:o?null:f.forcedStartTzo,forcedEndTzo:a?null:f.forcedEndTzo}):s.format(v,t,{forcedTzo:o?null:f.forcedStartTzo})):""}function vr(e,t,n){var r=e.eventRange.range
return{isPast:r.end<(n||t.start),isFuture:r.start>=(n||t.end),isToday:t&&rr(t,r.start)}}function mr(e){return e.instance?e.instance.instanceId:e.def.defId+":"+e.range.start.toISOString()}function gr(e,t){var n=e.eventRange,r=n.def,i=n.instance,o=r.url
if(o)return{href:o}
var a=t.emitter,s=t.options.eventInteractive
return null==s&&null==(s=r.interactive)&&(s=Boolean(a.hasHandlers("eventClick"))),s?at((function(e){a.trigger("eventClick",{el:e.target,event:new Pr(t,r,i),jsEvent:e,view:t.viewApi})})):{}}var yr={start:xn,end:xn,allDay:Boolean}
function Er(e,t,n){var r=function(e,t){var n=Mn(e,yr),r=n.refined,o=n.extra,a=r.start?t.createMarkerMeta(r.start):null,s=r.end?t.createMarkerMeta(r.end):null,l=r.allDay
null==l&&(l=a&&a.isTimeUnspecified&&(!s||s.isTimeUnspecified))
return i({range:{start:a?a.marker:null,end:s?s.marker:null},allDay:l},o)}(e,t),o=r.range
if(!o.start)return null
if(!o.end){if(null==n)return null
o.end=t.add(o.start,n)}return r}function br(e,t,n){return i(i({},Sr(e,t,n)),{timeZone:t.timeZone})}function Sr(e,t,n){return{start:t.toDate(e.start),end:t.toDate(e.end),startStr:t.formatIso(e.start,{omitTime:n}),endStr:t.formatIso(e.end,{omitTime:n})}}function wr(e,t,n){n.emitter.trigger("select",i(i({},Dr(e,n)),{jsEvent:t?t.origEvent:null,view:n.viewApi||n.calendarApi.view}))}function Dr(e,t){for(var n,r,o={},a=0,s=t.pluginHooks.dateSpanTransforms;a<s.length;a++){var l=s[a]
i(o,l(e,t))}return i(o,(n=e,r=t.dateEnv,i(i({},Sr(n.range,r,n.allDay)),{allDay:n.allDay}))),o}function Cr(e,t,n){var r=n.dateEnv,i=n.options,o=t
return e?(o=Dt(o),o=r.add(o,i.defaultAllDayEventDuration)):o=r.add(o,i.defaultTimedEventDuration),o}function Tr(e,t,n,r){var i=sr(e.defs,t),o={defs:{},instances:{}}
for(var a in e.defs){var s=e.defs[a]
o.defs[a]=_r(s,i[a],n,r)}for(var l in e.instances){var u=e.instances[l]
s=o.defs[u.defId]
o.instances[l]=kr(u,s,i[u.defId],n,r)}return o}function _r(e,t,n,r){var o=n.standardProps||{}
null==o.hasEnd&&t.durationEditable&&(n.startDelta||n.endDelta)&&(o.hasEnd=!0)
var a=i(i(i({},e),o),{ui:i(i({},e.ui),o.ui)})
n.extendedProps&&(a.extendedProps=i(i({},a.extendedProps),n.extendedProps))
for(var s=0,l=r.pluginHooks.eventDefMutationAppliers;s<l.length;s++){(0,l[s])(a,n,r)}return!a.hasEnd&&r.options.forceEventDuration&&(a.hasEnd=!0),a}function kr(e,t,n,r,o){var a=o.dateEnv,s=r.standardProps&&!0===r.standardProps.allDay,l=r.standardProps&&!1===r.standardProps.hasEnd,u=i({},e)
return s&&(u.range=Xn(u.range)),r.datesDelta&&n.startEditable&&(u.range={start:a.add(u.range.start,r.datesDelta),end:a.add(u.range.end,r.datesDelta)}),r.startDelta&&n.durationEditable&&(u.range={start:a.add(u.range.start,r.startDelta),end:u.range.end}),r.endDelta&&n.durationEditable&&(u.range={start:u.range.start,end:a.add(u.range.end,r.endDelta)}),l&&(u.range={start:u.range.start,end:Cr(t.allDay,u.range.start,o)}),t.allDay&&(u.range={start:Dt(u.range.start),end:Dt(u.range.end)}),u.range.end<u.range.start&&(u.range.end=Cr(t.allDay,u.range.start,o)),u}var Rr=function(){function e(e,t,n){this.type=e,this.getCurrentData=t,this.dateEnv=n}return Object.defineProperty(e.prototype,"calendar",{get:function(){return this.getCurrentData().calendarApi},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"title",{get:function(){return this.getCurrentData().viewTitle},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"activeStart",{get:function(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"activeEnd",{get:function(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"currentStart",{get:function(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"currentEnd",{get:function(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end)},enumerable:!1,configurable:!0}),e.prototype.getOption=function(e){return this.getCurrentData().options[e]},e}(),Mr={id:String,defaultAllDay:Boolean,url:String,format:String,events:xn,eventDataTransform:xn,success:xn,failure:xn}
function xr(e,t,n){var r
if(void 0===n&&(n=Ir(t)),"string"==typeof e?r={url:e}:"function"==typeof e||Array.isArray(e)?r={events:e}:"object"==typeof e&&e&&(r=e),r){var i=Mn(r,n),o=i.refined,a=i.extra,s=function(e,t){for(var n=t.pluginHooks.eventSourceDefs,r=n.length-1;r>=0;r-=1){var i=n[r].parseMeta(e)
if(i)return{sourceDefId:r,meta:i}}return null}(o,t)
if(s)return{_raw:e,isFetching:!1,latestFetchId:"",fetchRange:null,defaultAllDay:o.defaultAllDay,eventDataTransform:o.eventDataTransform,success:o.success,failure:o.failure,publicId:o.id||"",sourceId:lt(),sourceDefId:s.sourceDefId,meta:s.meta,ui:Un(o,t),extendedProps:a}}return null}function Ir(e){return i(i(i({},Ln),Mr),e.pluginHooks.eventSourceRefiners)}function Nr(e,t){return"function"==typeof e&&(e=e()),null==e?t.createNowMarker():t.createMarker(e)}var Or=function(){function e(){}return e.prototype.getCurrentData=function(){return this.currentDataManager.getCurrentData()},e.prototype.dispatch=function(e){return this.currentDataManager.dispatch(e)},Object.defineProperty(e.prototype,"view",{get:function(){return this.getCurrentData().viewApi},enumerable:!1,configurable:!0}),e.prototype.batchRendering=function(e){e()},e.prototype.updateSize=function(){this.trigger("_resize",!0)},e.prototype.setOption=function(e,t){this.dispatch({type:"SET_OPTION",optionName:e,rawOptionValue:t})},e.prototype.getOption=function(e){return this.currentDataManager.currentCalendarOptionsInput[e]},e.prototype.getAvailableLocaleCodes=function(){return Object.keys(this.getCurrentData().availableRawLocales)},e.prototype.on=function(e,t){var n=this.currentDataManager
n.currentCalendarOptionsRefiners[e]?n.emitter.on(e,t):console.warn("Unknown listener name '"+e+"'")},e.prototype.off=function(e,t){this.currentDataManager.emitter.off(e,t)},e.prototype.trigger=function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];(t=this.currentDataManager.emitter).trigger.apply(t,o([e],n))},e.prototype.changeView=function(e,t){var n=this
this.batchRendering((function(){if(n.unselect(),t)if(t.start&&t.end)n.dispatch({type:"CHANGE_VIEW_TYPE",viewType:e}),n.dispatch({type:"SET_OPTION",optionName:"visibleRange",rawOptionValue:t})
else{var r=n.getCurrentData().dateEnv
n.dispatch({type:"CHANGE_VIEW_TYPE",viewType:e,dateMarker:r.createMarker(t)})}else n.dispatch({type:"CHANGE_VIEW_TYPE",viewType:e})}))},e.prototype.zoomTo=function(e,t){var n
t=t||"day",n=this.getCurrentData().viewSpecs[t]||this.getUnitViewSpec(t),this.unselect(),n?this.dispatch({type:"CHANGE_VIEW_TYPE",viewType:n.type,dateMarker:e}):this.dispatch({type:"CHANGE_DATE",dateMarker:e})},e.prototype.getUnitViewSpec=function(e){var t,n,r=this.getCurrentData(),i=r.viewSpecs,o=r.toolbarConfig,a=[].concat(o.header?o.header.viewsWithButtons:[],o.footer?o.footer.viewsWithButtons:[])
for(var s in i)a.push(s)
for(t=0;t<a.length;t+=1)if((n=i[a[t]])&&n.singleUnit===e)return n
return null},e.prototype.prev=function(){this.unselect(),this.dispatch({type:"PREV"})},e.prototype.next=function(){this.unselect(),this.dispatch({type:"NEXT"})},e.prototype.prevYear=function(){var e=this.getCurrentData()
this.unselect(),this.dispatch({type:"CHANGE_DATE",dateMarker:e.dateEnv.addYears(e.currentDate,-1)})},e.prototype.nextYear=function(){var e=this.getCurrentData()
this.unselect(),this.dispatch({type:"CHANGE_DATE",dateMarker:e.dateEnv.addYears(e.currentDate,1)})},e.prototype.today=function(){var e=this.getCurrentData()
this.unselect(),this.dispatch({type:"CHANGE_DATE",dateMarker:Nr(e.calendarOptions.now,e.dateEnv)})},e.prototype.gotoDate=function(e){var t=this.getCurrentData()
this.unselect(),this.dispatch({type:"CHANGE_DATE",dateMarker:t.dateEnv.createMarker(e)})},e.prototype.incrementDate=function(e){var t=this.getCurrentData(),n=Gt(e)
n&&(this.unselect(),this.dispatch({type:"CHANGE_DATE",dateMarker:t.dateEnv.add(t.currentDate,n)}))},e.prototype.getDate=function(){var e=this.getCurrentData()
return e.dateEnv.toDate(e.currentDate)},e.prototype.formatDate=function(e,t){var n=this.getCurrentData().dateEnv
return n.format(n.createMarker(e),bn(t))},e.prototype.formatRange=function(e,t,n){var r=this.getCurrentData().dateEnv
return r.formatRange(r.createMarker(e),r.createMarker(t),bn(n),n)},e.prototype.formatIso=function(e,t){var n=this.getCurrentData().dateEnv
return n.formatIso(n.createMarker(e),{omitTime:t})},e.prototype.select=function(e,t){var n
n=null==t?null!=e.start?e:{start:e,end:null}:{start:e,end:t}
var r=this.getCurrentData(),i=Er(n,r.dateEnv,Gt({days:1}))
i&&(this.dispatch({type:"SELECT_DATES",selection:i}),wr(i,null,r))},e.prototype.unselect=function(e){var t=this.getCurrentData()
t.dateSelection&&(this.dispatch({type:"UNSELECT_DATES"}),function(e,t){t.emitter.trigger("unselect",{jsEvent:e?e.origEvent:null,view:t.viewApi||t.calendarApi.view})}(e,t))},e.prototype.addEvent=function(e,t){if(e instanceof Pr){var n=e._def,r=e._instance
return this.getCurrentData().eventStore.defs[n.defId]||(this.dispatch({type:"ADD_EVENTS",eventStore:Nn({def:n,instance:r})}),this.triggerEventAdd(e)),e}var i,o=this.getCurrentData()
if(t instanceof qe)i=t.internalEventSource
else if("boolean"==typeof t)t&&(i=Vt(o.eventSources)[0])
else if(null!=t){var a=this.getEventSourceById(t)
if(!a)return console.warn('Could not find an event source with ID "'+t+'"'),null
i=a.internalEventSource}var s=qn(e,i,o,!1)
if(s){var l=new Pr(o,s.def,s.def.recurringDef?null:s.instance)
return this.dispatch({type:"ADD_EVENTS",eventStore:Nn(s)}),this.triggerEventAdd(l),l}return null},e.prototype.triggerEventAdd=function(e){var t=this
this.getCurrentData().emitter.trigger("eventAdd",{event:e,relatedEvents:[],revert:function(){t.dispatch({type:"REMOVE_EVENTS",eventStore:Hr(e)})}})},e.prototype.getEventById=function(e){var t=this.getCurrentData(),n=t.eventStore,r=n.defs,i=n.instances
for(var o in e=String(e),r){var a=r[o]
if(a.publicId===e){if(a.recurringDef)return new Pr(t,a,null)
for(var s in i){var l=i[s]
if(l.defId===a.defId)return new Pr(t,a,l)}}}return null},e.prototype.getEvents=function(){var e=this.getCurrentData()
return Ar(e.eventStore,e)},e.prototype.removeAllEvents=function(){this.dispatch({type:"REMOVE_ALL_EVENTS"})},e.prototype.getEventSources=function(){var e=this.getCurrentData(),t=e.eventSources,n=[]
for(var r in t)n.push(new qe(e,t[r]))
return n},e.prototype.getEventSourceById=function(e){var t=this.getCurrentData(),n=t.eventSources
for(var r in e=String(e),n)if(n[r].publicId===e)return new qe(t,n[r])
return null},e.prototype.addEventSource=function(e){var t=this.getCurrentData()
if(e instanceof qe)return t.eventSources[e.internalEventSource.sourceId]||this.dispatch({type:"ADD_EVENT_SOURCES",sources:[e.internalEventSource]}),e
var n=xr(e,t)
return n?(this.dispatch({type:"ADD_EVENT_SOURCES",sources:[n]}),new qe(t,n)):null},e.prototype.removeAllEventSources=function(){this.dispatch({type:"REMOVE_ALL_EVENT_SOURCES"})},e.prototype.refetchEvents=function(){this.dispatch({type:"FETCH_EVENT_SOURCES",isRefetch:!0})},e.prototype.scrollToTime=function(e){var t=Gt(e)
t&&this.trigger("_scrollRequest",{time:t})},e}(),Pr=function(){function e(e,t,n){this._context=e,this._def=t,this._instance=n||null}return e.prototype.setProp=function(e,t){var n,r
if(e in jn)console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.")
else if("id"===e)t=zn[e](t),this.mutate({standardProps:{publicId:t}})
else if(e in zn)t=zn[e](t),this.mutate({standardProps:(n={},n[e]=t,n)})
else if(e in Ln){var i=Ln[e](t)
"color"===e?i={backgroundColor:t,borderColor:t}:"editable"===e?i={startEditable:t,durationEditable:t}:((r={})[e]=t,i=r),this.mutate({standardProps:{ui:i}})}else console.warn("Could not set prop '"+e+"'. Use setExtendedProp instead.")},e.prototype.setExtendedProp=function(e,t){var n
this.mutate({extendedProps:(n={},n[e]=t,n)})},e.prototype.setStart=function(e,t){void 0===t&&(t={})
var n=this._context.dateEnv,r=n.createMarker(e)
if(r&&this._instance){var i=Jn(this._instance.range.start,r,n,t.granularity)
t.maintainDuration?this.mutate({datesDelta:i}):this.mutate({startDelta:i})}},e.prototype.setEnd=function(e,t){void 0===t&&(t={})
var n,r=this._context.dateEnv
if((null==e||(n=r.createMarker(e)))&&this._instance)if(n){var i=Jn(this._instance.range.end,n,r,t.granularity)
this.mutate({endDelta:i})}else this.mutate({standardProps:{hasEnd:!1}})},e.prototype.setDates=function(e,t,n){void 0===n&&(n={})
var r,i,o,a=this._context.dateEnv,s={allDay:n.allDay},l=a.createMarker(e)
if(l&&((null==t||(r=a.createMarker(t)))&&this._instance)){var u=this._instance.range
!0===n.allDay&&(u=Xn(u))
var c=Jn(u.start,l,a,n.granularity)
if(r){var d=Jn(u.end,r,a,n.granularity)
o=d,(i=c).years===o.years&&i.months===o.months&&i.days===o.days&&i.milliseconds===o.milliseconds?this.mutate({datesDelta:c,standardProps:s}):this.mutate({startDelta:c,endDelta:d,standardProps:s})}else s.hasEnd=!1,this.mutate({datesDelta:c,standardProps:s})}},e.prototype.moveStart=function(e){var t=Gt(e)
t&&this.mutate({startDelta:t})},e.prototype.moveEnd=function(e){var t=Gt(e)
t&&this.mutate({endDelta:t})},e.prototype.moveDates=function(e){var t=Gt(e)
t&&this.mutate({datesDelta:t})},e.prototype.setAllDay=function(e,t){void 0===t&&(t={})
var n={allDay:e},r=t.maintainDuration
null==r&&(r=this._context.options.allDayMaintainDuration),this._def.allDay!==e&&(n.hasEnd=r),this.mutate({standardProps:n})},e.prototype.formatRange=function(e){var t=this._context.dateEnv,n=this._instance,r=bn(e)
return this._def.hasEnd?t.formatRange(n.range.start,n.range.end,r,{forcedStartTzo:n.forcedStartTzo,forcedEndTzo:n.forcedEndTzo}):t.format(n.range.start,r,{forcedTzo:n.forcedStartTzo})},e.prototype.mutate=function(t){var n=this._instance
if(n){var r=this._def,i=this._context,o=i.getCurrentData().eventStore,a=On(o,n.instanceId)
a=Tr(a,{"":{display:"",startEditable:!0,durationEditable:!0,constraints:[],overlap:null,allows:[],backgroundColor:"",borderColor:"",textColor:"",classNames:[]}},t,i)
var s=new e(i,r,n)
this._def=a.defs[r.defId],this._instance=a.instances[n.instanceId],i.dispatch({type:"MERGE_EVENTS",eventStore:a}),i.emitter.trigger("eventChange",{oldEvent:s,event:this,relatedEvents:Ar(a,i,n),revert:function(){i.dispatch({type:"RESET_EVENTS",eventStore:o})}})}},e.prototype.remove=function(){var e=this._context,t=Hr(this)
e.dispatch({type:"REMOVE_EVENTS",eventStore:t}),e.emitter.trigger("eventRemove",{event:this,relatedEvents:[],revert:function(){e.dispatch({type:"MERGE_EVENTS",eventStore:t})}})},Object.defineProperty(e.prototype,"source",{get:function(){var e=this._def.sourceId
return e?new qe(this._context,this._context.getCurrentData().eventSources[e]):null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"start",{get:function(){return this._instance?this._context.dateEnv.toDate(this._instance.range.start):null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"end",{get:function(){return this._instance&&this._def.hasEnd?this._context.dateEnv.toDate(this._instance.range.end):null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"startStr",{get:function(){var e=this._instance
return e?this._context.dateEnv.formatIso(e.range.start,{omitTime:this._def.allDay,forcedTzo:e.forcedStartTzo}):""},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"endStr",{get:function(){var e=this._instance
return e&&this._def.hasEnd?this._context.dateEnv.formatIso(e.range.end,{omitTime:this._def.allDay,forcedTzo:e.forcedEndTzo}):""},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this._def.publicId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"groupId",{get:function(){return this._def.groupId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"allDay",{get:function(){return this._def.allDay},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"title",{get:function(){return this._def.title},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"url",{get:function(){return this._def.url},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"display",{get:function(){return this._def.ui.display||"auto"},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"startEditable",{get:function(){return this._def.ui.startEditable},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"durationEditable",{get:function(){return this._def.ui.durationEditable},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"constraint",{get:function(){return this._def.ui.constraints[0]||null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"overlap",{get:function(){return this._def.ui.overlap},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"allow",{get:function(){return this._def.ui.allows[0]||null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"backgroundColor",{get:function(){return this._def.ui.backgroundColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"borderColor",{get:function(){return this._def.ui.borderColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textColor",{get:function(){return this._def.ui.textColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"classNames",{get:function(){return this._def.ui.classNames},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"extendedProps",{get:function(){return this._def.extendedProps},enumerable:!1,configurable:!0}),e.prototype.toPlainObject=function(e){void 0===e&&(e={})
var t=this._def,n=t.ui,r=this.startStr,o=this.endStr,a={}
return t.title&&(a.title=t.title),r&&(a.start=r),o&&(a.end=o),t.publicId&&(a.id=t.publicId),t.groupId&&(a.groupId=t.groupId),t.url&&(a.url=t.url),n.display&&"auto"!==n.display&&(a.display=n.display),e.collapseColor&&n.backgroundColor&&n.backgroundColor===n.borderColor?a.color=n.backgroundColor:(n.backgroundColor&&(a.backgroundColor=n.backgroundColor),n.borderColor&&(a.borderColor=n.borderColor)),n.textColor&&(a.textColor=n.textColor),n.classNames.length&&(a.classNames=n.classNames),Object.keys(t.extendedProps).length&&(e.collapseExtendedProps?i(a,t.extendedProps):a.extendedProps=t.extendedProps),a},e.prototype.toJSON=function(){return this.toPlainObject()},e}()
function Hr(e){var t,n,r=e._def,i=e._instance
return{defs:(t={},t[r.defId]=r,t),instances:i?(n={},n[i.instanceId]=i,n):{}}}function Ar(e,t,n){var r=e.defs,i=e.instances,o=[],a=n?n.instanceId:""
for(var s in i){var l=i[s],u=r[l.defId]
l.instanceId!==a&&o.push(new Pr(t,u,l))}return o}var Lr={}
var Vr,Ur=function(){function e(){}return e.prototype.getMarkerYear=function(e){return e.getUTCFullYear()},e.prototype.getMarkerMonth=function(e){return e.getUTCMonth()},e.prototype.getMarkerDay=function(e){return e.getUTCDate()},e.prototype.arrayToMarker=function(e){return Mt(e)},e.prototype.markerToArray=function(e){return Rt(e)},e}()
Vr=Ur,Lr["gregory"]=Vr
var Fr=/^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/
var Wr=function(){function e(e){var t=this.timeZone=e.timeZone,n="local"!==t&&"UTC"!==t
e.namedTimeZoneImpl&&n&&(this.namedTimeZoneImpl=new e.namedTimeZoneImpl(t)),this.canComputeOffset=Boolean(!n||this.namedTimeZoneImpl),this.calendarSystem=function(e){return new Lr[e]}(e.calendarSystem),this.locale=e.locale,this.weekDow=e.locale.week.dow,this.weekDoy=e.locale.week.doy,"ISO"===e.weekNumberCalculation&&(this.weekDow=1,this.weekDoy=4),"number"==typeof e.firstDay&&(this.weekDow=e.firstDay),"function"==typeof e.weekNumberCalculation&&(this.weekNumberFunc=e.weekNumberCalculation),this.weekText=null!=e.weekText?e.weekText:e.locale.options.weekText,this.weekTextLong=(null!=e.weekTextLong?e.weekTextLong:e.locale.options.weekTextLong)||this.weekText,this.cmdFormatter=e.cmdFormatter,this.defaultSeparator=e.defaultSeparator}return e.prototype.createMarker=function(e){var t=this.createMarkerMeta(e)
return null===t?null:t.marker},e.prototype.createNowMarker=function(){return this.canComputeOffset?this.timestampToMarker((new Date).valueOf()):Mt(_t(new Date))},e.prototype.createMarkerMeta=function(e){if("string"==typeof e)return this.parse(e)
var t=null
return"number"==typeof e?t=this.timestampToMarker(e):e instanceof Date?(e=e.valueOf(),isNaN(e)||(t=this.timestampToMarker(e))):Array.isArray(e)&&(t=Mt(e)),null!==t&&xt(t)?{marker:t,isTimeUnspecified:!1,forcedTzo:null}:null},e.prototype.parse=function(e){var t=function(e){var t=Fr.exec(e)
if(t){var n=new Date(Date.UTC(Number(t[1]),t[3]?Number(t[3])-1:0,Number(t[5]||1),Number(t[7]||0),Number(t[8]||0),Number(t[10]||0),t[12]?1e3*Number("0."+t[12]):0))
if(xt(n)){var r=null
return t[13]&&(r=("-"===t[15]?-1:1)*(60*Number(t[16]||0)+Number(t[18]||0))),{marker:n,isTimeUnspecified:!t[6],timeZoneOffset:r}}}return null}(e)
if(null===t)return null
var n=t.marker,r=null
return null!==t.timeZoneOffset&&(this.canComputeOffset?n=this.timestampToMarker(n.valueOf()-60*t.timeZoneOffset*1e3):r=t.timeZoneOffset),{marker:n,isTimeUnspecified:t.isTimeUnspecified,forcedTzo:r}},e.prototype.getYear=function(e){return this.calendarSystem.getMarkerYear(e)},e.prototype.getMonth=function(e){return this.calendarSystem.getMarkerMonth(e)},e.prototype.add=function(e,t){var n=this.calendarSystem.markerToArray(e)
return n[0]+=t.years,n[1]+=t.months,n[2]+=t.days,n[6]+=t.milliseconds,this.calendarSystem.arrayToMarker(n)},e.prototype.subtract=function(e,t){var n=this.calendarSystem.markerToArray(e)
return n[0]-=t.years,n[1]-=t.months,n[2]-=t.days,n[6]-=t.milliseconds,this.calendarSystem.arrayToMarker(n)},e.prototype.addYears=function(e,t){var n=this.calendarSystem.markerToArray(e)
return n[0]+=t,this.calendarSystem.arrayToMarker(n)},e.prototype.addMonths=function(e,t){var n=this.calendarSystem.markerToArray(e)
return n[1]+=t,this.calendarSystem.arrayToMarker(n)},e.prototype.diffWholeYears=function(e,t){var n=this.calendarSystem
return It(e)===It(t)&&n.getMarkerDay(e)===n.getMarkerDay(t)&&n.getMarkerMonth(e)===n.getMarkerMonth(t)?n.getMarkerYear(t)-n.getMarkerYear(e):null},e.prototype.diffWholeMonths=function(e,t){var n=this.calendarSystem
return It(e)===It(t)&&n.getMarkerDay(e)===n.getMarkerDay(t)?n.getMarkerMonth(t)-n.getMarkerMonth(e)+12*(n.getMarkerYear(t)-n.getMarkerYear(e)):null},e.prototype.greatestWholeUnit=function(e,t){var n=this.diffWholeYears(e,t)
return null!==n?{unit:"year",value:n}:null!==(n=this.diffWholeMonths(e,t))?{unit:"month",value:n}:(n=function(e,t){var n=wt(e,t)
return null!==n&&n%7==0?n/7:null}(e,t),null!==n?{unit:"week",value:n}:null!==(n=wt(e,t))?{unit:"day",value:n}:(n=function(e,t){return(t.valueOf()-e.valueOf())/36e5}(e,t),vt(n)?{unit:"hour",value:n}:(n=function(e,t){return(t.valueOf()-e.valueOf())/6e4}(e,t),vt(n)?{unit:"minute",value:n}:(n=function(e,t){return(t.valueOf()-e.valueOf())/1e3}(e,t),vt(n)?{unit:"second",value:n}:{unit:"millisecond",value:t.valueOf()-e.valueOf()}))))},e.prototype.countDurationsBetween=function(e,t,n){var r
return n.years&&null!==(r=this.diffWholeYears(e,t))?r/($t(n)/365):n.months&&null!==(r=this.diffWholeMonths(e,t))?r/function(e){return $t(e)/30}(n):n.days&&null!==(r=wt(e,t))?r/$t(n):(t.valueOf()-e.valueOf())/Jt(n)},e.prototype.startOf=function(e,t){return"year"===t?this.startOfYear(e):"month"===t?this.startOfMonth(e):"week"===t?this.startOfWeek(e):"day"===t?Dt(e):"hour"===t?function(e){return Mt([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours()])}(e):"minute"===t?function(e){return Mt([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes()])}(e):"second"===t?function(e){return Mt([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()])}(e):null},e.prototype.startOfYear=function(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)])},e.prototype.startOfMonth=function(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e),this.calendarSystem.getMarkerMonth(e)])},e.prototype.startOfWeek=function(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e),this.calendarSystem.getMarkerMonth(e),e.getUTCDate()-(e.getUTCDay()-this.weekDow+7)%7])},e.prototype.computeWeekNumber=function(e){return this.weekNumberFunc?this.weekNumberFunc(this.toDate(e)):function(e,t,n){var r=e.getUTCFullYear(),i=Ct(e,r,t,n)
if(i<1)return Ct(e,r-1,t,n)
var o=Ct(e,r+1,t,n)
return o>=1?Math.min(i,o):i}(e,this.weekDow,this.weekDoy)},e.prototype.format=function(e,t,n){return void 0===n&&(n={}),t.format({marker:e,timeZoneOffset:null!=n.forcedTzo?n.forcedTzo:this.offsetForMarker(e)},this)},e.prototype.formatRange=function(e,t,n,r){return void 0===r&&(r={}),r.isEndExclusive&&(t=bt(t,-1)),n.formatRange({marker:e,timeZoneOffset:null!=r.forcedStartTzo?r.forcedStartTzo:this.offsetForMarker(e)},{marker:t,timeZoneOffset:null!=r.forcedEndTzo?r.forcedEndTzo:this.offsetForMarker(t)},this,r.defaultSeparator)},e.prototype.formatIso=function(e,t){void 0===t&&(t={})
var n=null
return t.omitTimeZoneOffset||(n=null!=t.forcedTzo?t.forcedTzo:this.offsetForMarker(e)),en(e,n,t.omitTime)},e.prototype.timestampToMarker=function(e){return"local"===this.timeZone?Mt(_t(new Date(e))):"UTC"!==this.timeZone&&this.namedTimeZoneImpl?Mt(this.namedTimeZoneImpl.timestampToArray(e)):new Date(e)},e.prototype.offsetForMarker=function(e){return"local"===this.timeZone?-kt(Rt(e)).getTimezoneOffset():"UTC"===this.timeZone?0:this.namedTimeZoneImpl?this.namedTimeZoneImpl.offsetForArray(Rt(e)):null},e.prototype.toDate=function(e,t){return"local"===this.timeZone?kt(Rt(e)):"UTC"===this.timeZone?new Date(e.valueOf()):this.namedTimeZoneImpl?new Date(e.valueOf()-1e3*this.namedTimeZoneImpl.offsetForArray(Rt(e))*60):new Date(e.valueOf()-(t||0))},e}(),zr=[],jr={code:"en",week:{dow:0,doy:4},direction:"ltr",buttonText:{prev:"prev",next:"next",prevYear:"prev year",nextYear:"next year",year:"year",today:"today",month:"month",week:"week",day:"day",list:"list"},weekText:"W",weekTextLong:"Week",closeHint:"Close",timeHint:"Time",eventHint:"Event",allDayText:"all-day",moreLinkText:"more",noEventsText:"No events to display"},Br=i(i({},jr),{buttonHints:{prev:"Previous $0",next:"Next $0",today:function(e,t){return"day"===t?"Today":"This "+e}},viewHint:"$0 view",navLinkHint:"Go to $0",moreLinkHint:function(e){return"Show "+e+" more event"+(1===e?"":"s")}})
function qr(e){for(var t=e.length>0?e[0].code:"en",n=zr.concat(e),r={en:Br},i=0,o=n;i<o.length;i++){var a=o[i]
r[a.code]=a}return{map:r,defaultCode:t}}function Zr(e,t){return"object"!=typeof e||Array.isArray(e)?function(e,t){var n=[].concat(e||[]),r=function(e,t){for(var n=0;n<e.length;n+=1)for(var r=e[n].toLocaleLowerCase().split("-"),i=r.length;i>0;i-=1){var o=r.slice(0,i).join("-")
if(t[o])return t[o]}return null}(n,t)||Br
return Gr(e,n,r)}(e,t):Gr(e.code,[e.code],e)}function Gr(e,t,n){var r=Pt([jr,n],["buttonText"])
delete r.code
var i=r.week
return delete r.week,{codeArg:e,codes:t,week:i,simpleNumberFormat:new Intl.NumberFormat(e),options:r}}var Yr,Xr={startTime:"09:00",endTime:"17:00",daysOfWeek:[1,2,3,4,5],display:"inverse-background",classNames:"fc-non-business",groupId:"_businessHours"}
function $r(e,t){return In(function(e){var t
t=!0===e?[{}]:Array.isArray(e)?e.filter((function(e){return e.daysOfWeek})):"object"==typeof e&&e?[e]:[]
return t=t.map((function(e){return i(i({},Xr),e)}))}(e),null,t)}function Jr(e,t){return e.left>=t.left&&e.left<t.right&&e.top>=t.top&&e.top<t.bottom}function Kr(e,t){var n={left:Math.max(e.left,t.left),right:Math.min(e.right,t.right),top:Math.max(e.top,t.top),bottom:Math.min(e.bottom,t.bottom)}
return n.left<n.right&&n.top<n.bottom&&n}function Qr(){return null==Yr&&(Yr=function(){if("undefined"==typeof document)return!0
var e=document.createElement("div")
e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.innerHTML="<table><tr><td><div></div></td></tr></table>",e.querySelector("table").style.height="100px",e.querySelector("div").style.height="100%",document.body.appendChild(e)
var t=e.querySelector("div").offsetHeight>0
return document.body.removeChild(e),t}()),Yr}var ei={defs:{},instances:{}},ti=function(){function e(){this.getKeysForEventDefs=on(this._getKeysForEventDefs),this.splitDateSelection=on(this._splitDateSpan),this.splitEventStore=on(this._splitEventStore),this.splitIndividualUi=on(this._splitIndividualUi),this.splitEventDrag=on(this._splitInteraction),this.splitEventResize=on(this._splitInteraction),this.eventUiBuilders={}}return e.prototype.splitProps=function(e){var t=this,n=this.getKeyInfo(e),r=this.getKeysForEventDefs(e.eventStore),i=this.splitDateSelection(e.dateSelection),o=this.splitIndividualUi(e.eventUiBases,r),a=this.splitEventStore(e.eventStore,r),s=this.splitEventDrag(e.eventDrag),l=this.splitEventResize(e.eventResize),u={}
for(var c in this.eventUiBuilders=At(n,(function(e,n){return t.eventUiBuilders[n]||on(ni)})),n){var d=n[c],f=a[c]||ei,h=this.eventUiBuilders[c]
u[c]={businessHours:d.businessHours||e.businessHours,dateSelection:i[c]||null,eventStore:f,eventUiBases:h(e.eventUiBases[""],d.ui,o[c]),eventSelection:f.instances[e.eventSelection]?e.eventSelection:"",eventDrag:s[c]||null,eventResize:l[c]||null}}return u},e.prototype._splitDateSpan=function(e){var t={}
if(e)for(var n=0,r=this.getKeysForDateSpan(e);n<r.length;n++){t[r[n]]=e}return t},e.prototype._getKeysForEventDefs=function(e){var t=this
return At(e.defs,(function(e){return t.getKeysForEventDef(e)}))},e.prototype._splitEventStore=function(e,t){var n=e.defs,r=e.instances,i={}
for(var o in n)for(var a=0,s=t[o];a<s.length;a++){i[f=s[a]]||(i[f]={defs:{},instances:{}}),i[f].defs[o]=n[o]}for(var l in r)for(var u=r[l],c=0,d=t[u.defId];c<d.length;c++){var f
i[f=d[c]]&&(i[f].instances[l]=u)}return i},e.prototype._splitIndividualUi=function(e,t){var n={}
for(var r in e)if(r)for(var i=0,o=t[r];i<o.length;i++){var a=o[i]
n[a]||(n[a]={}),n[a][r]=e[r]}return n},e.prototype._splitInteraction=function(e){var t={}
if(e){var n=this._splitEventStore(e.affectedEvents,this._getKeysForEventDefs(e.affectedEvents)),r=this._getKeysForEventDefs(e.mutatedEvents),i=this._splitEventStore(e.mutatedEvents,r),o=function(r){t[r]||(t[r]={affectedEvents:n[r]||ei,mutatedEvents:i[r]||ei,isEvent:e.isEvent})}
for(var a in n)o(a)
for(var a in i)o(a)}return t},e}()
function ni(e,t,n){var r=[]
e&&r.push(e),t&&r.push(t)
var o={"":Fn(r)}
return n&&i(o,n),o}function ri(e,t,n,r){return{dow:e.getUTCDay(),isDisabled:Boolean(r&&!rr(r.activeRange,e)),isOther:Boolean(r&&!rr(r.currentRange,e)),isToday:Boolean(t&&rr(t,e)),isPast:Boolean(n?e<n:!!t&&e<t.start),isFuture:Boolean(n?e>n:!!t&&e>=t.end)}}function ii(e,t){var n=["fc-day","fc-day-"+gt[e.dow]]
return e.isDisabled?n.push("fc-day-disabled"):(e.isToday&&(n.push("fc-day-today"),n.push(t.getClass("today"))),e.isPast&&n.push("fc-day-past"),e.isFuture&&n.push("fc-day-future"),e.isOther&&n.push("fc-day-other")),n}var oi=bn({year:"numeric",month:"long",day:"numeric"}),ai=bn({week:"long"})
function si(e,t,n,r){void 0===n&&(n="day"),void 0===r&&(r=!0)
var o=e.dateEnv,a=e.options,s=e.calendarApi,l=o.format(t,"week"===n?ai:oi)
if(a.navLinks){var u=o.toDate(t),c=function(e){var r="day"===n?a.navLinkDayClick:"week"===n?a.navLinkWeekClick:null
"function"==typeof r?r.call(s,o.toDate(t),e):("string"==typeof r&&(n=r),s.zoomTo(t,n))}
return i({title:ht(a.navLinkHint,[l,u],l),"data-navlink":""},r?ot(c):{onClick:c})}return{"aria-label":l}}var li,ui=null
function ci(){return null===ui&&(ui=function(){var e=document.createElement("div")
$e(e,{position:"absolute",top:-1e3,left:0,border:0,padding:0,overflow:"scroll",direction:"rtl"}),e.innerHTML="<div></div>",document.body.appendChild(e)
var t=e.firstChild.getBoundingClientRect().left>e.getBoundingClientRect().left
return Ze(e),t}()),ui}function di(){return li||(li=function(){var e=document.createElement("div")
e.style.overflow="scroll",e.style.position="absolute",e.style.top="-9999px",e.style.left="-9999px",document.body.appendChild(e)
var t=fi(e)
return document.body.removeChild(e),t}()),li}function fi(e){return{x:e.offsetHeight-e.clientHeight,y:e.offsetWidth-e.clientWidth}}function hi(e,t,n){void 0===t&&(t=!1)
var r=n?e.getBoundingClientRect():pi(e),i=function(e,t){void 0===t&&(t=!1)
var n=window.getComputedStyle(e),r=parseInt(n.borderLeftWidth,10)||0,i=parseInt(n.borderRightWidth,10)||0,o=parseInt(n.borderTopWidth,10)||0,a=parseInt(n.borderBottomWidth,10)||0,s=fi(e),l=s.y-r-i,u={borderLeft:r,borderRight:i,borderTop:o,borderBottom:a,scrollbarBottom:s.x-o-a,scrollbarLeft:0,scrollbarRight:0}
return ci()&&"rtl"===n.direction?u.scrollbarLeft=l:u.scrollbarRight=l,t&&(u.paddingLeft=parseInt(n.paddingLeft,10)||0,u.paddingRight=parseInt(n.paddingRight,10)||0,u.paddingTop=parseInt(n.paddingTop,10)||0,u.paddingBottom=parseInt(n.paddingBottom,10)||0),u}(e,t),o={left:r.left+i.borderLeft+i.scrollbarLeft,right:r.right-i.borderRight-i.scrollbarRight,top:r.top+i.borderTop,bottom:r.bottom-i.borderBottom-i.scrollbarBottom}
return t&&(o.left+=i.paddingLeft,o.right-=i.paddingRight,o.top+=i.paddingTop,o.bottom-=i.paddingBottom),o}function pi(e){var t=e.getBoundingClientRect()
return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,right:t.right+window.pageXOffset,bottom:t.bottom+window.pageYOffset}}function vi(e){for(var t=[];e instanceof HTMLElement;){var n=window.getComputedStyle(e)
if("fixed"===n.position)break;/(auto|scroll)/.test(n.overflow+n.overflowY+n.overflowX)&&t.push(e),e=e.parentNode}return t}var mi=function(){function e(){this.handlers={},this.thisContext=null}return e.prototype.setThisContext=function(e){this.thisContext=e},e.prototype.setOptions=function(e){this.options=e},e.prototype.on=function(e,t){!function(e,t,n){(e[t]||(e[t]=[])).push(n)}(this.handlers,e,t)},e.prototype.off=function(e,t){!function(e,t,n){n?e[t]&&(e[t]=e[t].filter((function(e){return e!==n}))):delete e[t]}(this.handlers,e,t)},e.prototype.trigger=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
for(var r=this.handlers[e]||[],i=this.options&&this.options[e],o=0,a=[].concat(i||[],r);o<a.length;o++){a[o].apply(this.thisContext,t)}},e.prototype.hasHandlers=function(e){return Boolean(this.handlers[e]&&this.handlers[e].length||this.options&&this.options[e])},e}()
var gi=function(){function e(e,t,n,r){this.els=t
var i=this.originClientRect=e.getBoundingClientRect()
n&&this.buildElHorizontals(i.left),r&&this.buildElVerticals(i.top)}return e.prototype.buildElHorizontals=function(e){for(var t=[],n=[],r=0,i=this.els;r<i.length;r++){var o=i[r].getBoundingClientRect()
t.push(o.left-e),n.push(o.right-e)}this.lefts=t,this.rights=n},e.prototype.buildElVerticals=function(e){for(var t=[],n=[],r=0,i=this.els;r<i.length;r++){var o=i[r].getBoundingClientRect()
t.push(o.top-e),n.push(o.bottom-e)}this.tops=t,this.bottoms=n},e.prototype.leftToIndex=function(e){var t,n=this.lefts,r=this.rights,i=n.length
for(t=0;t<i;t+=1)if(e>=n[t]&&e<r[t])return t},e.prototype.topToIndex=function(e){var t,n=this.tops,r=this.bottoms,i=n.length
for(t=0;t<i;t+=1)if(e>=n[t]&&e<r[t])return t},e.prototype.getWidth=function(e){return this.rights[e]-this.lefts[e]},e.prototype.getHeight=function(e){return this.bottoms[e]-this.tops[e]},e}(),yi=function(){function e(){}return e.prototype.getMaxScrollTop=function(){return this.getScrollHeight()-this.getClientHeight()},e.prototype.getMaxScrollLeft=function(){return this.getScrollWidth()-this.getClientWidth()},e.prototype.canScrollVertically=function(){return this.getMaxScrollTop()>0},e.prototype.canScrollHorizontally=function(){return this.getMaxScrollLeft()>0},e.prototype.canScrollUp=function(){return this.getScrollTop()>0},e.prototype.canScrollDown=function(){return this.getScrollTop()<this.getMaxScrollTop()},e.prototype.canScrollLeft=function(){return this.getScrollLeft()>0},e.prototype.canScrollRight=function(){return this.getScrollLeft()<this.getMaxScrollLeft()},e}(),Ei=function(e){function t(t){var n=e.call(this)||this
return n.el=t,n}return r(t,e),t.prototype.getScrollTop=function(){return this.el.scrollTop},t.prototype.getScrollLeft=function(){return this.el.scrollLeft},t.prototype.setScrollTop=function(e){this.el.scrollTop=e},t.prototype.setScrollLeft=function(e){this.el.scrollLeft=e},t.prototype.getScrollWidth=function(){return this.el.scrollWidth},t.prototype.getScrollHeight=function(){return this.el.scrollHeight},t.prototype.getClientHeight=function(){return this.el.clientHeight},t.prototype.getClientWidth=function(){return this.el.clientWidth},t}(yi),bi=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.getScrollTop=function(){return window.pageYOffset},t.prototype.getScrollLeft=function(){return window.pageXOffset},t.prototype.setScrollTop=function(e){window.scroll(window.pageXOffset,e)},t.prototype.setScrollLeft=function(e){window.scroll(e,window.pageYOffset)},t.prototype.getScrollWidth=function(){return document.documentElement.scrollWidth},t.prototype.getScrollHeight=function(){return document.documentElement.scrollHeight},t.prototype.getClientHeight=function(){return document.documentElement.clientHeight},t.prototype.getClientWidth=function(){return document.documentElement.clientWidth},t}(yi),Si=function(){function e(e){this.iconOverrideOption&&this.setIconOverride(e[this.iconOverrideOption])}return e.prototype.setIconOverride=function(e){var t,n
if("object"==typeof e&&e){for(n in t=i({},this.iconClasses),e)t[n]=this.applyIconOverridePrefix(e[n])
this.iconClasses=t}else!1===e&&(this.iconClasses={})},e.prototype.applyIconOverridePrefix=function(e){var t=this.iconOverridePrefix
return t&&0!==e.indexOf(t)&&(e=t+e),e},e.prototype.getClass=function(e){return this.classes[e]||""},e.prototype.getIconClass=function(e,t){var n
return(n=t&&this.rtlIconClasses&&this.rtlIconClasses[e]||this.iconClasses[e])?this.baseIconClass+" "+n:""},e.prototype.getCustomButtonIconClass=function(e){var t
return this.iconOverrideCustomButtonOption&&(t=e[this.iconOverrideCustomButtonOption])?this.baseIconClass+" "+this.applyIconOverridePrefix(t):""},e}()
Si.prototype.classes={},Si.prototype.iconClasses={},Si.prototype.baseIconClass="",Si.prototype.iconOverridePrefix=""
var wi=function(){function e(e,t,n,r){var o=this
this.execFunc=e,this.emitter=t,this.scrollTime=n,this.scrollTimeReset=r,this.handleScrollRequest=function(e){o.queuedRequest=i({},o.queuedRequest||{},e),o.drain()},t.on("_scrollRequest",this.handleScrollRequest),this.fireInitialScroll()}return e.prototype.detach=function(){this.emitter.off("_scrollRequest",this.handleScrollRequest)},e.prototype.update=function(e){e&&this.scrollTimeReset?this.fireInitialScroll():this.drain()},e.prototype.fireInitialScroll=function(){this.handleScrollRequest({time:this.scrollTime})},e.prototype.drain=function(){this.queuedRequest&&this.execFunc(this.queuedRequest)&&(this.queuedRequest=null)},e}(),Di=We({})
function Ci(e,t,n,r,i,o,a,s,l,u,c,d,f){return{dateEnv:i,options:n,pluginHooks:a,emitter:u,dispatch:s,getCurrentData:l,calendarApi:c,viewSpec:e,viewApi:t,dateProfileGenerator:r,theme:o,isRtl:"rtl"===n.direction,addResizeHandler:function(e){u.on("_resize",e)},removeResizeHandler:function(e){u.off("_resize",e)},createScrollResponder:function(e){return new wi(e,u,Gt(n.scrollTime),n.scrollTimeReset)},registerInteractiveComponent:d,unregisterInteractiveComponent:f}}var Ti=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.shouldComponentUpdate=function(e,t){return this.debug&&console.log(Ft(e,this.props),Ft(t,this.state)),!Wt(this.props,e,this.propEquality)||!Wt(this.state,t,this.stateEquality)},t.prototype.safeSetState=function(e){Wt(this.state,i(i({},this.state),e),this.stateEquality)||this.setState(e)},t.addPropsEquality=ki,t.addStateEquality=Ri,t.contextType=Di,t}(Ae)
Ti.prototype.propEquality={},Ti.prototype.stateEquality={}
var _i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.contextType=Di,t}(Ti)
function ki(e){var t=Object.create(this.prototype.propEquality)
i(t,e),this.prototype.propEquality=t}function Ri(e){var t=Object.create(this.prototype.stateEquality)
i(t,e),this.prototype.stateEquality=t}function Mi(e,t){"function"==typeof e?e(t):e&&(e.current=t)}var xi=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.uid=lt(),t}return r(t,e),t.prototype.prepareHits=function(){},t.prototype.queryHit=function(e,t,n,r){return null},t.prototype.isValidSegDownEl=function(e){return!this.props.eventDrag&&!this.props.eventResize&&!Ge(e,".fc-event-mirror")},t.prototype.isValidDateDownEl=function(e){return!(Ge(e,".fc-event:not(.fc-bg-event)")||Ge(e,".fc-more-link")||Ge(e,"a[data-navlink]")||Ge(e,".fc-popover"))},t}(_i)
function Ii(e){return{id:lt(),deps:e.deps||[],reducers:e.reducers||[],isLoadingFuncs:e.isLoadingFuncs||[],contextInit:[].concat(e.contextInit||[]),eventRefiners:e.eventRefiners||{},eventDefMemberAdders:e.eventDefMemberAdders||[],eventSourceRefiners:e.eventSourceRefiners||{},isDraggableTransformers:e.isDraggableTransformers||[],eventDragMutationMassagers:e.eventDragMutationMassagers||[],eventDefMutationAppliers:e.eventDefMutationAppliers||[],dateSelectionTransformers:e.dateSelectionTransformers||[],datePointTransforms:e.datePointTransforms||[],dateSpanTransforms:e.dateSpanTransforms||[],views:e.views||{},viewPropsTransformers:e.viewPropsTransformers||[],isPropsValid:e.isPropsValid||null,externalDefTransforms:e.externalDefTransforms||[],viewContainerAppends:e.viewContainerAppends||[],eventDropTransformers:e.eventDropTransformers||[],componentInteractions:e.componentInteractions||[],calendarInteractions:e.calendarInteractions||[],themeClasses:e.themeClasses||{},eventSourceDefs:e.eventSourceDefs||[],cmdFormatter:e.cmdFormatter,recurringTypes:e.recurringTypes||[],namedTimeZonedImpl:e.namedTimeZonedImpl,initialView:e.initialView||"",elementDraggingImpl:e.elementDraggingImpl,optionChangeHandlers:e.optionChangeHandlers||{},scrollGridImpl:e.scrollGridImpl||null,contentTypeHandlers:e.contentTypeHandlers||{},listenerRefiners:e.listenerRefiners||{},optionRefiners:e.optionRefiners||{},propSetHandlers:e.propSetHandlers||{}}}function Ni(){var e,t=[],n=[]
return function(r,o){return e&&rn(r,t)&&rn(o,n)||(e=function(e,t){var n={},r={reducers:[],isLoadingFuncs:[],contextInit:[],eventRefiners:{},eventDefMemberAdders:[],eventSourceRefiners:{},isDraggableTransformers:[],eventDragMutationMassagers:[],eventDefMutationAppliers:[],dateSelectionTransformers:[],datePointTransforms:[],dateSpanTransforms:[],views:{},viewPropsTransformers:[],isPropsValid:null,externalDefTransforms:[],viewContainerAppends:[],eventDropTransformers:[],componentInteractions:[],calendarInteractions:[],themeClasses:{},eventSourceDefs:[],cmdFormatter:null,recurringTypes:[],namedTimeZonedImpl:null,initialView:"",elementDraggingImpl:null,optionChangeHandlers:{},scrollGridImpl:null,contentTypeHandlers:{},listenerRefiners:{},optionRefiners:{},propSetHandlers:{}}
function o(e){for(var t=0,a=e;t<a.length;t++){var s=a[t]
n[s.id]||(n[s.id]=!0,o(s.deps),u=s,r={reducers:(l=r).reducers.concat(u.reducers),isLoadingFuncs:l.isLoadingFuncs.concat(u.isLoadingFuncs),contextInit:l.contextInit.concat(u.contextInit),eventRefiners:i(i({},l.eventRefiners),u.eventRefiners),eventDefMemberAdders:l.eventDefMemberAdders.concat(u.eventDefMemberAdders),eventSourceRefiners:i(i({},l.eventSourceRefiners),u.eventSourceRefiners),isDraggableTransformers:l.isDraggableTransformers.concat(u.isDraggableTransformers),eventDragMutationMassagers:l.eventDragMutationMassagers.concat(u.eventDragMutationMassagers),eventDefMutationAppliers:l.eventDefMutationAppliers.concat(u.eventDefMutationAppliers),dateSelectionTransformers:l.dateSelectionTransformers.concat(u.dateSelectionTransformers),datePointTransforms:l.datePointTransforms.concat(u.datePointTransforms),dateSpanTransforms:l.dateSpanTransforms.concat(u.dateSpanTransforms),views:i(i({},l.views),u.views),viewPropsTransformers:l.viewPropsTransformers.concat(u.viewPropsTransformers),isPropsValid:u.isPropsValid||l.isPropsValid,externalDefTransforms:l.externalDefTransforms.concat(u.externalDefTransforms),viewContainerAppends:l.viewContainerAppends.concat(u.viewContainerAppends),eventDropTransformers:l.eventDropTransformers.concat(u.eventDropTransformers),calendarInteractions:l.calendarInteractions.concat(u.calendarInteractions),componentInteractions:l.componentInteractions.concat(u.componentInteractions),themeClasses:i(i({},l.themeClasses),u.themeClasses),eventSourceDefs:l.eventSourceDefs.concat(u.eventSourceDefs),cmdFormatter:u.cmdFormatter||l.cmdFormatter,recurringTypes:l.recurringTypes.concat(u.recurringTypes),namedTimeZonedImpl:u.namedTimeZonedImpl||l.namedTimeZonedImpl,initialView:l.initialView||u.initialView,elementDraggingImpl:l.elementDraggingImpl||u.elementDraggingImpl,optionChangeHandlers:i(i({},l.optionChangeHandlers),u.optionChangeHandlers),scrollGridImpl:u.scrollGridImpl||l.scrollGridImpl,contentTypeHandlers:i(i({},l.contentTypeHandlers),u.contentTypeHandlers),listenerRefiners:i(i({},l.listenerRefiners),u.listenerRefiners),optionRefiners:i(i({},l.optionRefiners),u.optionRefiners),propSetHandlers:i(i({},l.propSetHandlers),u.propSetHandlers)})}var l,u}return e&&o(e),o(t),r}(r,o)),t=r,n=o,e}}var Oi=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t}(Si)
function Pi(e,t,n,r){if(t[e])return t[e]
var o=function(e,t,n,r){var o=n[e],a=r[e],s=function(e){return o&&null!==o[e]?o[e]:a&&null!==a[e]?a[e]:null},l=s("component"),u=s("superType"),c=null
if(u){if(u===e)throw new Error("Can't have a custom view type that references itself")
c=Pi(u,t,n,r)}!l&&c&&(l=c.component)
if(!l)return null
return{type:e,component:l,defaults:i(i({},c?c.defaults:{}),o?o.rawOptions:{}),overrides:i(i({},c?c.overrides:{}),a?a.rawOptions:{})}}(e,t,n,r)
return o&&(t[e]=o),o}Oi.prototype.classes={root:"fc-theme-standard",tableCellShaded:"fc-cell-shaded",buttonGroup:"fc-button-group",button:"fc-button fc-button-primary",buttonActive:"fc-button-active"},Oi.prototype.baseIconClass="fc-icon",Oi.prototype.iconClasses={close:"fc-icon-x",prev:"fc-icon-chevron-left",next:"fc-icon-chevron-right",prevYear:"fc-icon-chevrons-left",nextYear:"fc-icon-chevrons-right"},Oi.prototype.rtlIconClasses={prev:"fc-icon-chevron-right",next:"fc-icon-chevron-left",prevYear:"fc-icon-chevrons-right",nextYear:"fc-icon-chevrons-left"},Oi.prototype.iconOverrideOption="buttonIcons",Oi.prototype.iconOverrideCustomButtonOption="icon",Oi.prototype.iconOverridePrefix="fc-icon-"
var Hi=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.rootElRef=Ue(),t.handleRootEl=function(e){Mi(t.rootElRef,e),t.props.elRef&&Mi(t.props.elRef,e)},t}return r(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.hookProps
return Le(Ui,{hookProps:n,didMount:t.didMount,willUnmount:t.willUnmount,elRef:this.handleRootEl},(function(r){return Le(Li,{hookProps:n,content:t.content,defaultContent:t.defaultContent,backupElRef:e.rootElRef},(function(e,i){return t.children(r,Wi(t.classNames,n),e,i)}))}))},t}(_i),Ai=We(0)
function Li(e){return Le(Ai.Consumer,null,(function(t){return Le(Vi,i({renderId:t},e))}))}var Vi=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.innerElRef=Ue(),t}return r(t,e),t.prototype.render=function(){return this.props.children(this.innerElRef,this.renderInnerContent())},t.prototype.componentDidMount=function(){this.updateCustomContent()},t.prototype.componentDidUpdate=function(){this.updateCustomContent()},t.prototype.componentWillUnmount=function(){this.customContentInfo&&this.customContentInfo.destroy&&this.customContentInfo.destroy()},t.prototype.renderInnerContent=function(){var e=this.customContentInfo,t=this.getInnerContent(),n=this.getContentMeta(t)
return e&&e.contentKey===n.contentKey?e&&(e.contentVal=t[n.contentKey]):(e&&(e.destroy&&e.destroy(),e=this.customContentInfo=null),n.contentKey&&(e=this.customContentInfo=i({contentKey:n.contentKey,contentVal:t[n.contentKey]},n.buildLifecycleFuncs()))),e?[]:t},t.prototype.getInnerContent=function(){var e=this.props,t=zi(e.content,e.hookProps)
return void 0===t&&(t=zi(e.defaultContent,e.hookProps)),null==t?null:t},t.prototype.getContentMeta=function(e){var t=this.context.pluginHooks.contentTypeHandlers,n="",r=null
if(e)for(var i in t)if(void 0!==e[i]){n=i,r=t[i]
break}return{contentKey:n,buildLifecycleFuncs:r}},t.prototype.updateCustomContent=function(){this.customContentInfo&&this.customContentInfo.render(this.innerElRef.current||this.props.backupElRef.current,this.customContentInfo.contentVal)},t}(_i),Ui=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.handleRootEl=function(e){t.rootEl=e,t.props.elRef&&Mi(t.props.elRef,e)},t}return r(t,e),t.prototype.render=function(){return this.props.children(this.handleRootEl)},t.prototype.componentDidMount=function(){var e=this.props.didMount
e&&e(i(i({},this.props.hookProps),{el:this.rootEl}))},t.prototype.componentWillUnmount=function(){var e=this.props.willUnmount
e&&e(i(i({},this.props.hookProps),{el:this.rootEl}))},t}(_i)
function Fi(){var e,t,n=[]
return function(r,i){return t&&Ut(t,i)&&r===e||(e=r,t=i,n=Wi(r,i)),n}}function Wi(e,t){return"function"==typeof e&&(e=e(t)),An(e)}function zi(e,t){return"function"==typeof e?e(t,Le):e}var ji=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.normalizeClassNames=Fi(),t}return r(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=t.options,r={view:t.viewApi},i=this.normalizeClassNames(n.viewClassNames,r)
return Le(Ui,{hookProps:r,didMount:n.viewDidMount,willUnmount:n.viewWillUnmount,elRef:e.elRef},(function(t){return e.children(t,["fc-"+e.viewSpec.type+"-view","fc-view"].concat(i))}))},t}(_i)
function Bi(e){return At(e,qi)}function qi(e){var t,n="function"==typeof e?{component:e}:e,r=n.component
return n.content&&(t=n,r=function(e){return Le(Di.Consumer,null,(function(n){return Le(ji,{viewSpec:n.viewSpec},(function(r,o){var a=i(i({},e),{nextDayThreshold:n.options.nextDayThreshold})
return Le(Hi,{hookProps:a,classNames:t.classNames,content:t.content,didMount:t.didMount,willUnmount:t.willUnmount,elRef:r},(function(e,t,n,r){return Le("div",{className:o.concat(t).join(" "),ref:e},r)}))}))}))}),{superType:n.type,component:r,rawOptions:n}}function Zi(e,t,n,r){var o=Bi(e),a=Bi(t.views),s=function(e,t){var n,r={}
for(n in e)Pi(n,r,e,t)
for(n in t)Pi(n,r,e,t)
return r}(o,a)
return At(s,(function(e){return function(e,t,n,r,o){var a=e.overrides.duration||e.defaults.duration||r.duration||n.duration,s=null,l="",u="",c={}
if(a&&(s=function(e){var t=JSON.stringify(e),n=Gi[t]
void 0===n&&(n=Gt(e),Gi[t]=n)
return n}(a),s)){var d=Qt(s)
l=d.unit,1===d.value&&(u=l,c=t[l]?t[l].rawOptions:{})}var f=function(t){var n=t.buttonText||{},r=e.defaults.buttonTextKey
return null!=r&&null!=n[r]?n[r]:null!=n[e.type]?n[e.type]:null!=n[u]?n[u]:null},h=function(t){var n=t.buttonHints||{},r=e.defaults.buttonTextKey
return null!=r&&null!=n[r]?n[r]:null!=n[e.type]?n[e.type]:null!=n[u]?n[u]:null}
return{type:e.type,component:e.component,duration:s,durationUnit:l,singleUnit:u,optionDefaults:e.defaults,optionOverrides:i(i({},c),e.overrides),buttonTextOverride:f(r)||f(n)||e.overrides.buttonText,buttonTextDefault:f(o)||e.defaults.buttonText||f(wn)||e.type,buttonTitleOverride:h(r)||h(n)||e.overrides.buttonHint,buttonTitleDefault:h(o)||e.defaults.buttonHint||h(wn)}}(e,a,t,n,r)}))}var Gi={}
var Yi=function(){function e(e){this.props=e,this.nowDate=Nr(e.nowInput,e.dateEnv),this.initHiddenDays()}return e.prototype.buildPrev=function(e,t,n){var r=this.props.dateEnv,i=r.subtract(r.startOf(t,e.currentRangeUnit),e.dateIncrement)
return this.build(i,-1,n)},e.prototype.buildNext=function(e,t,n){var r=this.props.dateEnv,i=r.add(r.startOf(t,e.currentRangeUnit),e.dateIncrement)
return this.build(i,1,n)},e.prototype.build=function(e,t,n){void 0===n&&(n=!0)
var r,i,o,a,s,l,u,c,d=this.props
return r=this.buildValidRange(),r=this.trimHiddenDays(r),n&&(u=e,e=null!=(c=r).start&&u<c.start?c.start:null!=c.end&&u>=c.end?new Date(c.end.valueOf()-1):u),i=this.buildCurrentRangeInfo(e,t),o=/^(year|month|week|day)$/.test(i.unit),a=this.buildRenderRange(this.trimHiddenDays(i.range),i.unit,o),s=a=this.trimHiddenDays(a),d.showNonCurrentDates||(s=er(s,i.range)),s=er(s=this.adjustActiveRange(s),r),l=tr(i.range,r),{validRange:r,currentRange:i.range,currentRangeUnit:i.unit,isRangeAllDay:o,activeRange:s,renderRange:a,slotMinTime:d.slotMinTime,slotMaxTime:d.slotMaxTime,isValid:l,dateIncrement:this.buildDateIncrement(i.duration)}},e.prototype.buildValidRange=function(){var e=this.props.validRangeInput,t="function"==typeof e?e.call(this.props.calendarApi,this.nowDate):e
return this.refineRange(t)||{start:null,end:null}},e.prototype.buildCurrentRangeInfo=function(e,t){var n,r=this.props,i=null,o=null,a=null
return r.duration?(i=r.duration,o=r.durationUnit,a=this.buildRangeFromDuration(e,t,i,o)):(n=this.props.dayCount)?(o="day",a=this.buildRangeFromDayCount(e,t,n)):(a=this.buildCustomVisibleRange(e))?o=r.dateEnv.greatestWholeUnit(a.start,a.end).unit:(o=Qt(i=this.getFallbackDuration()).unit,a=this.buildRangeFromDuration(e,t,i,o)),{duration:i,unit:o,range:a}},e.prototype.getFallbackDuration=function(){return Gt({day:1})},e.prototype.adjustActiveRange=function(e){var t=this.props,n=t.dateEnv,r=t.usesMinMaxTime,i=t.slotMinTime,o=t.slotMaxTime,a=e.start,s=e.end
return r&&($t(i)<0&&(a=Dt(a),a=n.add(a,i)),$t(o)>1&&(s=Et(s=Dt(s),-1),s=n.add(s,o))),{start:a,end:s}},e.prototype.buildRangeFromDuration=function(e,t,n,r){var i,o,a,s=this.props,l=s.dateEnv,u=s.dateAlignment
if(!u){var c=this.props.dateIncrement
u=c&&Jt(c)<Jt(n)?Qt(c).unit:r}function d(){i=l.startOf(e,u),o=l.add(i,n),a={start:i,end:o}}return $t(n)<=1&&this.isHiddenDay(i)&&(i=Dt(i=this.skipHiddenDays(i,t))),d(),this.trimHiddenDays(a)||(e=this.skipHiddenDays(e,t),d()),a},e.prototype.buildRangeFromDayCount=function(e,t,n){var r,i=this.props,o=i.dateEnv,a=i.dateAlignment,s=0,l=e
a&&(l=o.startOf(l,a)),l=Dt(l),r=l=this.skipHiddenDays(l,t)
do{r=Et(r,1),this.isHiddenDay(r)||(s+=1)}while(s<n)
return{start:l,end:r}},e.prototype.buildCustomVisibleRange=function(e){var t=this.props,n=t.visibleRangeInput,r="function"==typeof n?n.call(t.calendarApi,t.dateEnv.toDate(e)):n,i=this.refineRange(r)
return!i||null!=i.start&&null!=i.end?i:null},e.prototype.buildRenderRange=function(e,t,n){return e},e.prototype.buildDateIncrement=function(e){var t,n=this.props.dateIncrement
return n||((t=this.props.dateAlignment)?Gt(1,t):e||Gt({days:1}))},e.prototype.refineRange=function(e){if(e){var t=(n=e,r=this.props.dateEnv,i=null,o=null,n.start&&(i=r.createMarker(n.start)),n.end&&(o=r.createMarker(n.end)),i||o?i&&o&&o<i?null:{start:i,end:o}:null)
return t&&(t=$n(t)),t}var n,r,i,o
return null},e.prototype.initHiddenDays=function(){var e,t=this.props.hiddenDays||[],n=[],r=0
for(!1===this.props.weekends&&t.push(0,6),e=0;e<7;e+=1)(n[e]=-1!==t.indexOf(e))||(r+=1)
if(!r)throw new Error("invalid hiddenDays")
this.isHiddenDayHash=n},e.prototype.trimHiddenDays=function(e){var t=e.start,n=e.end
return t&&(t=this.skipHiddenDays(t)),n&&(n=this.skipHiddenDays(n,-1,!0)),null==t||null==n||t<n?{start:t,end:n}:null},e.prototype.isHiddenDay=function(e){return e instanceof Date&&(e=e.getUTCDay()),this.isHiddenDayHash[e]},e.prototype.skipHiddenDays=function(e,t,n){for(void 0===t&&(t=1),void 0===n&&(n=!1);this.isHiddenDayHash[(e.getUTCDay()+(n?t:0)+7)%7];)e=Et(e,t)
return e},e}()
function Xi(e,t,n){var r=t?t.activeRange:null
return Ki({},function(e,t){var n=Ir(t),r=[].concat(e.eventSources||[]),i=[]
e.initialEvents&&r.unshift(e.initialEvents)
e.events&&r.unshift(e.events)
for(var o=0,a=r;o<a.length;o++){var s=xr(a[o],t,n)
s&&i.push(s)}return i}(e,n),r,n)}function $i(e,t,n,r){var o,a,s=n?n.activeRange:null
switch(t.type){case"ADD_EVENT_SOURCES":return Ki(e,t.sources,s,r)
case"REMOVE_EVENT_SOURCE":return o=e,a=t.sourceId,Ht(o,(function(e){return e.sourceId!==a}))
case"PREV":case"NEXT":case"CHANGE_DATE":case"CHANGE_VIEW_TYPE":return n?Qi(e,s,r):e
case"FETCH_EVENT_SOURCES":return eo(e,t.sourceIds?Lt(t.sourceIds):no(e,r),s,t.isRefetch||!1,r)
case"RECEIVE_EVENTS":case"RECEIVE_EVENT_ERROR":return function(e,t,n,r){var o,a=e[t]
if(a&&n===a.latestFetchId)return i(i({},e),((o={})[t]=i(i({},a),{isFetching:!1,fetchRange:r}),o))
return e}(e,t.sourceId,t.fetchId,t.fetchRange)
case"REMOVE_ALL_EVENT_SOURCES":return{}
default:return e}}function Ji(e){for(var t in e)if(e[t].isFetching)return!0
return!1}function Ki(e,t,n,r){for(var o={},a=0,s=t;a<s.length;a++){var l=s[a]
o[l.sourceId]=l}return n&&(o=Qi(o,n,r)),i(i({},e),o)}function Qi(e,t,n){return eo(e,Ht(e,(function(e){return function(e,t,n){if(!ro(e,n))return!e.latestFetchId
return!n.options.lazyFetching||!e.fetchRange||e.isFetching||t.start<e.fetchRange.start||t.end>e.fetchRange.end}(e,t,n)})),t,!1,n)}function eo(e,t,n,r,i){var o={}
for(var a in e){var s=e[a]
t[a]?o[a]=to(s,n,r,i):o[a]=s}return o}function to(e,t,n,r){var o=r.options,a=r.calendarApi,s=r.pluginHooks.eventSourceDefs[e.sourceDefId],l=lt()
return s.fetch({eventSource:e,range:t,isRefetch:n,context:r},(function(n){var i=n.rawEvents
o.eventSourceSuccess&&(i=o.eventSourceSuccess.call(a,i,n.xhr)||i),e.success&&(i=e.success.call(a,i,n.xhr)||i),r.dispatch({type:"RECEIVE_EVENTS",sourceId:e.sourceId,fetchId:l,fetchRange:t,rawEvents:i})}),(function(n){console.warn(n.message,n),o.eventSourceFailure&&o.eventSourceFailure.call(a,n),e.failure&&e.failure(n),r.dispatch({type:"RECEIVE_EVENT_ERROR",sourceId:e.sourceId,fetchId:l,fetchRange:t,error:n})})),i(i({},e),{isFetching:!0,latestFetchId:l})}function no(e,t){return Ht(e,(function(e){return ro(e,t)}))}function ro(e,t){return!t.pluginHooks.eventSourceDefs[e.sourceDefId].ignoreRange}function io(e,t,n,r,i){switch(t.type){case"RECEIVE_EVENTS":return function(e,t,n,r,i,o){if(t&&n===t.latestFetchId){var a=In(function(e,t,n){var r=n.options.eventDataTransform,i=t?t.eventDataTransform:null
i&&(e=oo(e,i))
r&&(e=oo(e,r))
return e}(i,t,o),t,o)
return r&&(a=jt(a,r,o)),Pn(ao(e,t.sourceId),a)}return e}(e,n[t.sourceId],t.fetchId,t.fetchRange,t.rawEvents,i)
case"ADD_EVENTS":return function(e,t,n,r){n&&(t=jt(t,n,r))
return Pn(e,t)}(e,t.eventStore,r?r.activeRange:null,i)
case"RESET_EVENTS":return t.eventStore
case"MERGE_EVENTS":return Pn(e,t.eventStore)
case"PREV":case"NEXT":case"CHANGE_DATE":case"CHANGE_VIEW_TYPE":return r?jt(e,r.activeRange,i):e
case"REMOVE_EVENTS":return function(e,t){var n=e.defs,r=e.instances,i={},o={}
for(var a in n)t.defs[a]||(i[a]=n[a])
for(var s in r)!t.instances[s]&&i[r[s].defId]&&(o[s]=r[s])
return{defs:i,instances:o}}(e,t.eventStore)
case"REMOVE_EVENT_SOURCE":return ao(e,t.sourceId)
case"REMOVE_ALL_EVENT_SOURCES":return Hn(e,(function(e){return!e.sourceId}))
case"REMOVE_ALL_EVENTS":return{defs:{},instances:{}}
default:return e}}function oo(e,t){var n
if(t){n=[]
for(var r=0,i=e;r<i.length;r++){var o=i[r],a=t(o)
a?n.push(a):null==a&&n.push(o)}}else n=e
return n}function ao(e,t){return Hn(e,(function(e){return e.sourceId!==t}))}function so(e,t){switch(t.type){case"UNSELECT_DATES":return null
case"SELECT_DATES":return t.selection
default:return e}}function lo(e,t){switch(t.type){case"UNSELECT_EVENT":return""
case"SELECT_EVENT":return t.eventInstanceId
default:return e}}function uo(e,t){var n
switch(t.type){case"UNSET_EVENT_DRAG":return null
case"SET_EVENT_DRAG":return{affectedEvents:(n=t.state).affectedEvents,mutatedEvents:n.mutatedEvents,isEvent:n.isEvent}
default:return e}}function co(e,t){var n
switch(t.type){case"UNSET_EVENT_RESIZE":return null
case"SET_EVENT_RESIZE":return{affectedEvents:(n=t.state).affectedEvents,mutatedEvents:n.mutatedEvents,isEvent:n.isEvent}
default:return e}}function fo(e,t,n,r,i){return{header:e.headerToolbar?ho(e.headerToolbar,e,t,n,r,i):null,footer:e.footerToolbar?ho(e.footerToolbar,e,t,n,r,i):null}}function ho(e,t,n,r,i,o){var a={},s=[],l=!1
for(var u in e){var c=po(e[u],t,n,r,i,o)
a[u]=c.widgets,s.push.apply(s,c.viewsWithButtons),l=l||c.hasTitle}return{sectionWidgets:a,viewsWithButtons:s,hasTitle:l}}function po(e,t,n,r,i,o){var a="rtl"===t.direction,s=t.customButtons||{},l=n.buttonText||{},u=t.buttonText||{},c=n.buttonHints||{},d=t.buttonHints||{},f=e?e.split(" "):[],h=[],p=!1
return{widgets:f.map((function(e){return e.split(",").map((function(e){if("title"===e)return p=!0,{buttonName:e}
var n,f,v,m,g,y
if(n=s[e])v=function(e){n.click&&n.click.call(e.target,e,e.target)},(m=r.getCustomButtonIconClass(n))||(m=r.getIconClass(e,a))||(g=n.text),y=n.hint||n.text
else if(f=i[e]){h.push(e),v=function(){o.changeView(e)},(g=f.buttonTextOverride)||(m=r.getIconClass(e,a))||(g=f.buttonTextDefault)
var E=f.buttonTextOverride||f.buttonTextDefault
y=ht(f.buttonTitleOverride||f.buttonTitleDefault||t.viewHint,[E,e],E)}else if(o[e])if(v=function(){o[e]()},(g=l[e])||(m=r.getIconClass(e,a))||(g=u[e]),"prevYear"===e||"nextYear"===e){var b="prevYear"===e?"prev":"next"
y=ht(c[b]||d[b],[u.year||"year","year"],u[e])}else y=function(t){return ht(c[e]||d[e],[u[t]||t,t],u[e])}
return{buttonName:e,buttonClick:v,buttonIcon:m,buttonText:g,buttonHint:y}}))})),viewsWithButtons:h,hasTitle:p}}function vo(e,t,n,r,i){var o=null
"GET"===(e=e.toUpperCase())?t=function(e,t){return e+(-1===e.indexOf("?")?"?":"&")+mo(t)}(t,n):o=mo(n)
var a=new XMLHttpRequest
a.open(e,t,!0),"GET"!==e&&a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.onload=function(){if(a.status>=200&&a.status<400){var e=!1,t=void 0
try{t=JSON.parse(a.responseText),e=!0}catch(e){}e?r(t,a):i("Failure parsing JSON",a)}else i("Request failed",a)},a.onerror=function(){i("Request failed",a)},a.send(o)}function mo(e){var t=[]
for(var n in e)t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]))
return t.join("&")}function go(e,t){for(var n=Vt(t.getCurrentData().eventSources),r=[],i=0,o=e;i<o.length;i++){for(var a=o[i],s=!1,l=0;l<n.length;l+=1)if(n[l]._raw===a){n.splice(l,1),s=!0
break}s||r.push(a)}for(var u=0,c=n;u<c.length;u++){var d=c[u]
t.dispatch({type:"REMOVE_EVENT_SOURCE",sourceId:d.sourceId})}for(var f=0,h=r;f<h.length;f++){var p=h[f]
t.calendarApi.addEventSource(p)}}var yo=[Ii({eventSourceDefs:[{ignoreRange:!0,parseMeta:function(e){return Array.isArray(e.events)?e.events:null},fetch:function(e,t){t({rawEvents:e.eventSource.meta})}}]}),Ii({eventSourceDefs:[{parseMeta:function(e){return"function"==typeof e.events?e.events:null},fetch:function(e,t,n){var r=e.context.dateEnv
!function(e,t,n){var r=!1,i=function(){r||(r=!0,t.apply(this,arguments))},o=function(){r||(r=!0,n&&n.apply(this,arguments))},a=e(i,o)
a&&"function"==typeof a.then&&a.then(i,o)}(e.eventSource.meta.bind(null,br(e.range,r)),(function(e){t({rawEvents:e})}),n)}}]}),Ii({eventSourceRefiners:{method:String,extraParams:xn,startParam:String,endParam:String,timeZoneParam:String},eventSourceDefs:[{parseMeta:function(e){return!e.url||"json"!==e.format&&e.format?null:{url:e.url,format:"json",method:(e.method||"GET").toUpperCase(),extraParams:e.extraParams,startParam:e.startParam,endParam:e.endParam,timeZoneParam:e.timeZoneParam}},fetch:function(e,t,n){var r=e.eventSource.meta,o=function(e,t,n){var r,o,a,s,l=n.dateEnv,u=n.options,c={}
r=e.startParam,null==r&&(r=u.startParam)
o=e.endParam,null==o&&(o=u.endParam)
a=e.timeZoneParam,null==a&&(a=u.timeZoneParam)
s="function"==typeof e.extraParams?e.extraParams():e.extraParams||{}
i(c,s),c[r]=l.formatIso(t.start),c[o]=l.formatIso(t.end),"local"!==l.timeZone&&(c[a]=l.timeZone)
return c}(r,e.range,e.context)
vo(r.method,r.url,o,(function(e,n){t({rawEvents:e,xhr:n})}),(function(e,t){n({message:e,xhr:t})}))}}]}),Ii({recurringTypes:[{parse:function(e,t){if(e.daysOfWeek||e.startTime||e.endTime||e.startRecur||e.endRecur){var n={daysOfWeek:e.daysOfWeek||null,startTime:e.startTime||null,endTime:e.endTime||null,startRecur:e.startRecur?t.createMarker(e.startRecur):null,endRecur:e.endRecur?t.createMarker(e.endRecur):null},r=void 0
return e.duration&&(r=e.duration),!r&&e.startTime&&e.endTime&&(i=e.endTime,o=e.startTime,r={years:i.years-o.years,months:i.months-o.months,days:i.days-o.days,milliseconds:i.milliseconds-o.milliseconds}),{allDayGuess:Boolean(!e.startTime&&!e.endTime),duration:r,typeData:n}}var i,o
return null},expand:function(e,t,n){var r=er(t,{start:e.startRecur,end:e.endRecur})
return r?function(e,t,n,r){var i=e?Lt(e):null,o=Dt(n.start),a=n.end,s=[]
for(;o<a;){var l=void 0
i&&!i[o.getUTCDay()]||(l=t?r.add(o,t):o,s.push(l)),o=Et(o,1)}return s}(e.daysOfWeek,e.startTime,r,n):[]}}],eventRefiners:{daysOfWeek:xn,startTime:Gt,endTime:Gt,duration:Gt,startRecur:xn,endRecur:xn}}),Ii({optionChangeHandlers:{events:function(e,t){go([e],t)},eventSources:go}}),Ii({isLoadingFuncs:[function(e){return Ji(e.eventSources)}],contentTypeHandlers:{html:function(){var e=null,t=""
return{render:function(n,r){n===e&&r===t||(n.innerHTML=r),e=n,t=r},destroy:function(){e.innerHTML="",e=null,t=""}}},domNodes:function(){var e=null,t=[]
function n(){t.forEach(Ze),t=[],e=null}return{render:function(r,i){var o=Array.prototype.slice.call(i)
if(r!==e||!rn(t,o)){for(var a=0,s=o;a<s.length;a++){var l=s[a]
r.appendChild(l)}n()}e=r,t=o},destroy:n}}},propSetHandlers:{dateProfile:function(e,t){t.emitter.trigger("datesSet",i(i({},br(e.activeRange,t.dateEnv)),{view:t.viewApi}))},eventStore:function(e,t){var n=t.emitter
n.hasHandlers("eventsSet")&&n.trigger("eventsSet",Ar(e,t))}}})]
var Eo=function(){function e(e){this.drainedOption=e,this.isRunning=!1,this.isDirty=!1,this.pauseDepths={},this.timeoutId=0}return e.prototype.request=function(e){this.isDirty=!0,this.isPaused()||(this.clearTimeout(),null==e?this.tryDrain():this.timeoutId=setTimeout(this.tryDrain.bind(this),e))},e.prototype.pause=function(e){void 0===e&&(e="")
var t=this.pauseDepths
t[e]=(t[e]||0)+1,this.clearTimeout()},e.prototype.resume=function(e,t){void 0===e&&(e="")
var n=this.pauseDepths
if(e in n){if(t)delete n[e]
else n[e]-=1,n[e]<=0&&delete n[e]
this.tryDrain()}},e.prototype.isPaused=function(){return Object.keys(this.pauseDepths).length},e.prototype.tryDrain=function(){if(!this.isRunning&&!this.isPaused()){for(this.isRunning=!0;this.isDirty;)this.isDirty=!1,this.drained()
this.isRunning=!1}},e.prototype.clear=function(){this.clearTimeout(),this.isDirty=!1,this.pauseDepths={}},e.prototype.clearTimeout=function(){this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=0)},e.prototype.drained=function(){this.drainedOption&&this.drainedOption()},e}(),bo=function(){function e(e,t){this.runTaskOption=e,this.drainedOption=t,this.queue=[],this.delayedRunner=new Eo(this.drain.bind(this))}return e.prototype.request=function(e,t){this.queue.push(e),this.delayedRunner.request(t)},e.prototype.pause=function(e){this.delayedRunner.pause(e)},e.prototype.resume=function(e,t){this.delayedRunner.resume(e,t)},e.prototype.drain=function(){for(var e=this.queue;e.length;){for(var t=[],n=void 0;n=e.shift();)this.runTask(n),t.push(n)
this.drained(t)}},e.prototype.runTask=function(e){this.runTaskOption&&this.runTaskOption(e)},e.prototype.drained=function(e){this.drainedOption&&this.drainedOption(e)},e}()
function So(e,t,n){var r
return r=/^(year|month)$/.test(e.currentRangeUnit)?e.currentRange:e.activeRange,n.formatRange(r.start,r.end,bn(t.titleFormat||function(e){var t=e.currentRangeUnit
if("year"===t)return{year:"numeric"}
if("month"===t)return{year:"numeric",month:"long"}
var n=wt(e.currentRange.start,e.currentRange.end)
if(null!==n&&n>1)return{year:"numeric",month:"short",day:"numeric"}
return{year:"numeric",month:"long",day:"numeric"}}(e)),{isEndExclusive:e.isRangeAllDay,defaultSeparator:t.titleRangeSeparator})}var wo=function(){function e(e){var t=this
this.computeOptionsData=on(this._computeOptionsData),this.computeCurrentViewData=on(this._computeCurrentViewData),this.organizeRawLocales=on(qr),this.buildLocale=on(Zr),this.buildPluginHooks=Ni(),this.buildDateEnv=on(Do),this.buildTheme=on(Co),this.parseToolbars=on(fo),this.buildViewSpecs=on(Zi),this.buildDateProfileGenerator=an(To),this.buildViewApi=on(_o),this.buildViewUiProps=an(Mo),this.buildEventUiBySource=on(ko,Ut),this.buildEventUiBases=on(Ro),this.parseContextBusinessHours=an(Io),this.buildTitle=on(So),this.emitter=new mi,this.actionRunner=new bo(this._handleAction.bind(this),this.updateData.bind(this)),this.currentCalendarOptionsInput={},this.currentCalendarOptionsRefined={},this.currentViewOptionsInput={},this.currentViewOptionsRefined={},this.currentCalendarOptionsRefiners={},this.getCurrentData=function(){return t.data},this.dispatch=function(e){t.actionRunner.request(e)},this.props=e,this.actionRunner.pause()
var n={},r=this.computeOptionsData(e.optionOverrides,n,e.calendarApi),o=r.calendarOptions.initialView||r.pluginHooks.initialView,a=this.computeCurrentViewData(o,r,e.optionOverrides,n)
e.calendarApi.currentDataManager=this,this.emitter.setThisContext(e.calendarApi),this.emitter.setOptions(a.options)
var s,l,u,c=(s=r.calendarOptions,l=r.dateEnv,null!=(u=s.initialDate)?l.createMarker(u):Nr(s.now,l)),d=a.dateProfileGenerator.build(c)
rr(d.activeRange,c)||(c=d.currentRange.start)
for(var f={dateEnv:r.dateEnv,options:r.calendarOptions,pluginHooks:r.pluginHooks,calendarApi:e.calendarApi,dispatch:this.dispatch,emitter:this.emitter,getCurrentData:this.getCurrentData},h=0,p=r.pluginHooks.contextInit;h<p.length;h++){(0,p[h])(f)}for(var v=Xi(r.calendarOptions,d,f),m={dynamicOptionOverrides:n,currentViewType:o,currentDate:c,dateProfile:d,businessHours:this.parseContextBusinessHours(f),eventSources:v,eventUiBases:{},eventStore:{defs:{},instances:{}},renderableEventStore:{defs:{},instances:{}},dateSelection:null,eventSelection:"",eventDrag:null,eventResize:null,selectionConfig:this.buildViewUiProps(f).selectionConfig},g=i(i({},f),m),y=0,E=r.pluginHooks.reducers;y<E.length;y++){var b=E[y]
i(m,b(null,null,g))}xo(m,f)&&this.emitter.trigger("loading",!0),this.state=m,this.updateData(),this.actionRunner.resume()}return e.prototype.resetOptions=function(e,t){var n=this.props
n.optionOverrides=t?i(i({},n.optionOverrides),e):e,this.actionRunner.request({type:"NOTHING"})},e.prototype._handleAction=function(e){var t=this,n=t.props,r=t.state,o=t.emitter,a=function(e,t){var n
return"SET_OPTION"===t.type?i(i({},e),((n={})[t.optionName]=t.rawOptionValue,n)):e}(r.dynamicOptionOverrides,e),s=this.computeOptionsData(n.optionOverrides,a,n.calendarApi),l=function(e,t){"CHANGE_VIEW_TYPE"===t.type&&(e=t.viewType)
return e}(r.currentViewType,e),u=this.computeCurrentViewData(l,s,n.optionOverrides,a)
n.calendarApi.currentDataManager=this,o.setThisContext(n.calendarApi),o.setOptions(u.options)
var c={dateEnv:s.dateEnv,options:s.calendarOptions,pluginHooks:s.pluginHooks,calendarApi:n.calendarApi,dispatch:this.dispatch,emitter:o,getCurrentData:this.getCurrentData},d=r.currentDate,f=r.dateProfile
this.data&&this.data.dateProfileGenerator!==u.dateProfileGenerator&&(f=u.dateProfileGenerator.build(d)),d=function(e,t){return"CHANGE_DATE"===t.type?t.dateMarker:e}(d,e),f=function(e,t,n,r){var i
switch(t.type){case"CHANGE_VIEW_TYPE":return r.build(t.dateMarker||n)
case"CHANGE_DATE":return r.build(t.dateMarker)
case"PREV":if((i=r.buildPrev(e,n)).isValid)return i
break
case"NEXT":if((i=r.buildNext(e,n)).isValid)return i}return e}(f,e,d,u.dateProfileGenerator),"PREV"!==e.type&&"NEXT"!==e.type&&rr(f.currentRange,d)||(d=f.currentRange.start)
for(var h=$i(r.eventSources,e,f,c),p=io(r.eventStore,e,h,f,c),v=Ji(h)&&!u.options.progressiveEventRendering&&r.renderableEventStore||p,m=this.buildViewUiProps(c),g=m.eventUiSingleBase,y=m.selectionConfig,E=this.buildEventUiBySource(h),b={dynamicOptionOverrides:a,currentViewType:l,currentDate:d,dateProfile:f,eventSources:h,eventStore:p,renderableEventStore:v,selectionConfig:y,eventUiBases:this.buildEventUiBases(v.defs,g,E),businessHours:this.parseContextBusinessHours(c),dateSelection:so(r.dateSelection,e),eventSelection:lo(r.eventSelection,e),eventDrag:uo(r.eventDrag,e),eventResize:co(r.eventResize,e)},S=i(i({},c),b),w=0,D=s.pluginHooks.reducers;w<D.length;w++){var C=D[w]
i(b,C(r,e,S))}var T=xo(r,c),_=xo(b,c)
!T&&_?o.trigger("loading",!0):T&&!_&&o.trigger("loading",!1),this.state=b,n.onAction&&n.onAction(e)},e.prototype.updateData=function(){var e,t,n,r,o,a,s,l,u,c=this.props,d=this.state,f=this.data,h=this.computeOptionsData(c.optionOverrides,d.dynamicOptionOverrides,c.calendarApi),p=this.computeCurrentViewData(d.currentViewType,h,c.optionOverrides,d.dynamicOptionOverrides),v=this.data=i(i(i({viewTitle:this.buildTitle(d.dateProfile,p.options,h.dateEnv),calendarApi:c.calendarApi,dispatch:this.dispatch,emitter:this.emitter,getCurrentData:this.getCurrentData},h),p),d),m=h.pluginHooks.optionChangeHandlers,g=f&&f.calendarOptions,y=h.calendarOptions
if(g&&g!==y)for(var E in g.timeZone!==y.timeZone&&(d.eventSources=v.eventSources=(a=v.eventSources,s=d.dateProfile,l=v,u=s?s.activeRange:null,eo(a,no(a,l),u,!0,l)),d.eventStore=v.eventStore=(e=v.eventStore,t=f.dateEnv,n=v.dateEnv,r=e.defs,o=At(e.instances,(function(e){var o=r[e.defId]
return o.allDay||o.recurringDef?e:i(i({},e),{range:{start:n.createMarker(t.toDate(e.range.start,e.forcedStartTzo)),end:n.createMarker(t.toDate(e.range.end,e.forcedEndTzo))},forcedStartTzo:n.canComputeOffset?null:e.forcedStartTzo,forcedEndTzo:n.canComputeOffset?null:e.forcedEndTzo})})),{defs:r,instances:o})),m)g[E]!==y[E]&&m[E](y[E],v)
c.onData&&c.onData(v)},e.prototype._computeOptionsData=function(e,t,n){var r=this.processRawCalendarOptions(e,t),i=r.refinedOptions,o=r.pluginHooks,a=r.localeDefaults,s=r.availableLocaleData
No(r.extra)
var l=this.buildDateEnv(i.timeZone,i.locale,i.weekNumberCalculation,i.firstDay,i.weekText,o,s,i.defaultRangeSeparator),u=this.buildViewSpecs(o.views,e,t,a),c=this.buildTheme(i,o)
return{calendarOptions:i,pluginHooks:o,dateEnv:l,viewSpecs:u,theme:c,toolbarConfig:this.parseToolbars(i,e,c,u,n),localeDefaults:a,availableRawLocales:s.map}},e.prototype.processRawCalendarOptions=function(e,t){var n=Rn([wn,e,t]),r=n.locales,o=n.locale,a=this.organizeRawLocales(r),s=a.map,l=this.buildLocale(o||a.defaultCode,s).options,u=this.buildPluginHooks(e.plugins||[],yo),c=this.currentCalendarOptionsRefiners=i(i(i(i(i({},Sn),Dn),Cn),u.listenerRefiners),u.optionRefiners),d={},f=Rn([wn,l,e,t]),h={},p=this.currentCalendarOptionsInput,v=this.currentCalendarOptionsRefined,m=!1
for(var g in f)"plugins"!==g&&(f[g]===p[g]||Tn[g]&&g in p&&Tn[g](p[g],f[g])?h[g]=v[g]:c[g]?(h[g]=c[g](f[g]),m=!0):d[g]=p[g])
return m&&(this.currentCalendarOptionsInput=f,this.currentCalendarOptionsRefined=h),{rawOptions:this.currentCalendarOptionsInput,refinedOptions:this.currentCalendarOptionsRefined,pluginHooks:u,availableLocaleData:a,localeDefaults:l,extra:d}},e.prototype._computeCurrentViewData=function(e,t,n,r){var i=t.viewSpecs[e]
if(!i)throw new Error('viewType "'+e+"\" is not available. Please make sure you've loaded all neccessary plugins")
var o=this.processRawViewOptions(i,t.pluginHooks,t.localeDefaults,n,r),a=o.refinedOptions
return No(o.extra),{viewSpec:i,options:a,dateProfileGenerator:this.buildDateProfileGenerator({dateProfileGeneratorClass:i.optionDefaults.dateProfileGeneratorClass,duration:i.duration,durationUnit:i.durationUnit,usesMinMaxTime:i.optionDefaults.usesMinMaxTime,dateEnv:t.dateEnv,calendarApi:this.props.calendarApi,slotMinTime:a.slotMinTime,slotMaxTime:a.slotMaxTime,showNonCurrentDates:a.showNonCurrentDates,dayCount:a.dayCount,dateAlignment:a.dateAlignment,dateIncrement:a.dateIncrement,hiddenDays:a.hiddenDays,weekends:a.weekends,nowInput:a.now,validRangeInput:a.validRange,visibleRangeInput:a.visibleRange,monthMode:a.monthMode,fixedWeekCount:a.fixedWeekCount}),viewApi:this.buildViewApi(e,this.getCurrentData,t.dateEnv)}},e.prototype.processRawViewOptions=function(e,t,n,r,o){var a=Rn([wn,e.optionDefaults,n,r,e.optionOverrides,o]),s=i(i(i(i(i(i({},Sn),Dn),Cn),kn),t.listenerRefiners),t.optionRefiners),l={},u=this.currentViewOptionsInput,c=this.currentViewOptionsRefined,d=!1,f={}
for(var h in a)a[h]===u[h]||Tn[h]&&Tn[h](a[h],u[h])?l[h]=c[h]:(a[h]===this.currentCalendarOptionsInput[h]||Tn[h]&&Tn[h](a[h],this.currentCalendarOptionsInput[h])?h in this.currentCalendarOptionsRefined&&(l[h]=this.currentCalendarOptionsRefined[h]):s[h]?l[h]=s[h](a[h]):f[h]=a[h],d=!0)
return d&&(this.currentViewOptionsInput=a,this.currentViewOptionsRefined=l),{rawOptions:this.currentViewOptionsInput,refinedOptions:this.currentViewOptionsRefined,extra:f}},e}()
function Do(e,t,n,r,i,o,a,s){var l=Zr(t||a.defaultCode,a.map)
return new Wr({calendarSystem:"gregory",timeZone:e,namedTimeZoneImpl:o.namedTimeZonedImpl,locale:l,weekNumberCalculation:n,firstDay:r,weekText:i,cmdFormatter:o.cmdFormatter,defaultSeparator:s})}function Co(e,t){return new(t.themeClasses[e.themeSystem]||Oi)(e)}function To(e){return new(e.dateProfileGeneratorClass||Yi)(e)}function _o(e,t,n){return new Rr(e,t,n)}function ko(e){return At(e,(function(e){return e.ui}))}function Ro(e,t,n){var r={"":t}
for(var i in e){var o=e[i]
o.sourceId&&n[o.sourceId]&&(r[i]=n[o.sourceId])}return r}function Mo(e){var t=e.options
return{eventUiSingleBase:Un({display:t.eventDisplay,editable:t.editable,startEditable:t.eventStartEditable,durationEditable:t.eventDurationEditable,constraint:t.eventConstraint,overlap:"boolean"==typeof t.eventOverlap?t.eventOverlap:void 0,allow:t.eventAllow,backgroundColor:t.eventBackgroundColor,borderColor:t.eventBorderColor,textColor:t.eventTextColor,color:t.eventColor},e),selectionConfig:Un({constraint:t.selectConstraint,overlap:"boolean"==typeof t.selectOverlap?t.selectOverlap:void 0,allow:t.selectAllow},e)}}function xo(e,t){for(var n=0,r=t.pluginHooks.isLoadingFuncs;n<r.length;n++){if((0,r[n])(e))return!0}return!1}function Io(e){return $r(e.options.businessHours,e)}function No(e,t){for(var n in e)console.warn("Unknown option '"+n+"'"+(t?" for view '"+t+"'":""))}!function(e){function t(t){var n=e.call(this,t)||this
return n.handleData=function(e){n.dataManager?n.setState(e):n.state=e},n.dataManager=new wo({optionOverrides:t.optionOverrides,calendarApi:t.calendarApi,onData:n.handleData}),n}r(t,e),t.prototype.render=function(){return this.props.children(this.state)},t.prototype.componentDidUpdate=function(e){var t=this.props.optionOverrides
t!==e.optionOverrides&&this.dataManager.resetOptions(t)}}(Ae)
var Oo=function(e){this.timeZoneName=e},Po=function(){function e(){this.strictOrder=!1,this.allowReslicing=!1,this.maxCoord=-1,this.maxStackCnt=-1,this.levelCoords=[],this.entriesByLevel=[],this.stackCnts={}}return e.prototype.addSegs=function(e){for(var t=[],n=0,r=e;n<r.length;n++){var i=r[n]
this.insertEntry(i,t)}return t},e.prototype.insertEntry=function(e,t){var n=this.findInsertion(e)
return this.isInsertionValid(n,e)?(this.insertEntryAt(e,n),1):this.handleInvalidInsertion(n,e,t)},e.prototype.isInsertionValid=function(e,t){return(-1===this.maxCoord||e.levelCoord+t.thickness<=this.maxCoord)&&(-1===this.maxStackCnt||e.stackCnt<this.maxStackCnt)},e.prototype.handleInvalidInsertion=function(e,t,n){return this.allowReslicing&&e.touchingEntry?this.splitEntry(t,e.touchingEntry,n):(n.push(t),0)},e.prototype.splitEntry=function(e,t,n){var r=0,i=[],a=e.span,s=t.span
return a.start<s.start&&(r+=this.insertEntry({index:e.index,thickness:e.thickness,span:{start:a.start,end:s.start}},i)),a.end>s.end&&(r+=this.insertEntry({index:e.index,thickness:e.thickness,span:{start:s.end,end:a.end}},i)),r?(n.push.apply(n,o([{index:e.index,thickness:e.thickness,span:Lo(s,a)}],i)),r):(n.push(e),0)},e.prototype.insertEntryAt=function(e,t){var n=this.entriesByLevel,r=this.levelCoords;-1===t.lateral?(Vo(r,t.level,t.levelCoord),Vo(n,t.level,[e])):Vo(n[t.level],t.lateral,e),this.stackCnts[Ao(e)]=t.stackCnt},e.prototype.findInsertion=function(e){for(var t=this,n=t.levelCoords,r=t.entriesByLevel,i=t.strictOrder,o=t.stackCnts,a=n.length,s=0,l=-1,u=-1,c=null,d=0,f=0;f<a;f+=1){var h=n[f]
if(!i&&h>=s+e.thickness)break
for(var p=r[f],v=void 0,m=Uo(p,e.span.start,Ho),g=m[0]+m[1];(v=p[g])&&v.span.start<e.span.end;){var y=h+v.thickness
y>s&&(s=y,c=v,l=f,u=g),y===s&&(d=Math.max(d,o[Ao(v)]+1)),g+=1}}var E=0
if(c)for(E=l+1;E<a&&n[E]<s;)E+=1
var b=-1
return E<a&&n[E]===s&&(b=Uo(r[E],e.span.end,Ho)[0]),{touchingLevel:l,touchingLateral:u,touchingEntry:c,stackCnt:d,levelCoord:s,level:E,lateral:b}},e.prototype.toRects=function(){for(var e=this.entriesByLevel,t=this.levelCoords,n=e.length,r=[],o=0;o<n;o+=1)for(var a=e[o],s=t[o],l=0,u=a;l<u.length;l++){var c=u[l]
r.push(i(i({},c),{levelCoord:s}))}return r},e}()
function Ho(e){return e.span.end}function Ao(e){return e.index+":"+e.span.start}function Lo(e,t){var n=Math.max(e.start,t.start),r=Math.min(e.end,t.end)
return n<r?{start:n,end:r}:null}function Vo(e,t,n){e.splice(t,0,n)}function Uo(e,t,n){var r=0,i=e.length
if(!i||t<n(e[r]))return[0,0]
if(t>n(e[i-1]))return[i,0]
for(;r<i;){var o=Math.floor(r+(i-r)/2),a=n(e[o])
if(t<a)i=o
else{if(!(t>a))return[o,1]
r=o+1}}return[r,0]}var Fo=function(){function e(e){this.component=e.component,this.isHitComboAllowed=e.isHitComboAllowed||null}return e.prototype.destroy=function(){},e}()
function Wo(e){var t
return(t={})[e.component.uid]=e,t}var zo={},jo=function(){function e(e,t){this.emitter=new mi}return e.prototype.destroy=function(){},e.prototype.setMirrorIsVisible=function(e){},e.prototype.setMirrorNeedsRevert=function(e){},e.prototype.setAutoScrollEnabled=function(e){},e}(),Bo={},qo={startTime:Gt,duration:Gt,create:Boolean,sourceId:String}
function Zo(e){var t=Mn(e,qo),n=t.refined,r=t.extra
return{startTime:n.startTime||null,duration:n.duration||null,create:null==n.create||n.create,sourceId:n.sourceId,leftoverProps:r}}var Go=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this,t=this.props.widgetGroups.map((function(t){return e.renderWidgetGroup(t)}))
return Le.apply(void 0,o(["div",{className:"fc-toolbar-chunk"}],t))},t.prototype.renderWidgetGroup=function(e){for(var t=this.props,n=this.context.theme,r=[],i=!0,a=0,s=e;a<s.length;a++){var l=s[a],u=l.buttonName,c=l.buttonClick,d=l.buttonText,f=l.buttonIcon,h=l.buttonHint
if("title"===u)i=!1,r.push(Le("h2",{className:"fc-toolbar-title",id:t.titleId},t.title))
else{var p=u===t.activeButton,v=!t.isTodayEnabled&&"today"===u||!t.isPrevEnabled&&"prev"===u||!t.isNextEnabled&&"next"===u,m=["fc-"+u+"-button",n.getClass("button")]
p&&m.push(n.getClass("buttonActive")),r.push(Le("button",{type:"button",title:"function"==typeof h?h(t.navUnit):h,disabled:v,"aria-pressed":p,className:m.join(" "),onClick:c},d||(f?Le("span",{className:f}):"")))}}if(r.length>1){var g=i&&n.getClass("buttonGroup")||""
return Le.apply(void 0,o(["div",{className:g}],r))}return r[0]},t}(_i),Yo=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e,t,n=this.props,r=n.model,i=n.extraClassName,o=!1,a=r.sectionWidgets,s=a.center
return a.left?(o=!0,e=a.left):e=a.start,a.right?(o=!0,t=a.right):t=a.end,Le("div",{className:[i||"","fc-toolbar",o?"fc-toolbar-ltr":""].join(" ")},this.renderSection("start",e||[]),this.renderSection("center",s||[]),this.renderSection("end",t||[]))},t.prototype.renderSection=function(e,t){var n=this.props
return Le(Go,{key:e,widgetGroups:t,title:n.title,navUnit:n.navUnit,activeButton:n.activeButton,isTodayEnabled:n.isTodayEnabled,isPrevEnabled:n.isPrevEnabled,isNextEnabled:n.isNextEnabled,titleId:n.titleId})},t}(_i),Xo=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.state={availableWidth:null},t.handleEl=function(e){t.el=e,Mi(t.props.elRef,e),t.updateAvailableWidth()},t.handleResize=function(){t.updateAvailableWidth()},t}return r(t,e),t.prototype.render=function(){var e=this.props,t=this.state,n=e.aspectRatio,r=["fc-view-harness",n||e.liquid||e.height?"fc-view-harness-active":"fc-view-harness-passive"],i="",o=""
return n?null!==t.availableWidth?i=t.availableWidth/n:o=1/n*100+"%":i=e.height||"",Le("div",{"aria-labelledby":e.labeledById,ref:this.handleEl,className:r.join(" "),style:{height:i,paddingBottom:o}},e.children)},t.prototype.componentDidMount=function(){this.context.addResizeHandler(this.handleResize)},t.prototype.componentWillUnmount=function(){this.context.removeResizeHandler(this.handleResize)},t.prototype.updateAvailableWidth=function(){this.el&&this.props.aspectRatio&&this.setState({availableWidth:this.el.offsetWidth})},t}(_i),$o=function(e){function t(t){var n=e.call(this,t)||this
return n.handleSegClick=function(e,t){var r=n.component,i=r.context,o=ar(t)
if(o&&r.isValidSegDownEl(e.target)){var a=Ge(e.target,".fc-event-forced-url"),s=a?a.querySelector("a[href]").href:""
i.emitter.trigger("eventClick",{el:t,event:new Pr(r.context,o.eventRange.def,o.eventRange.instance),jsEvent:e,view:i.viewApi}),s&&!e.defaultPrevented&&(window.location.href=s)}},n.destroy=rt(t.el,"click",".fc-event",n.handleSegClick),n}return r(t,e),t}(Fo),Jo=function(e){function t(t){var n,r,i,o,a,s=e.call(this,t)||this
return s.handleEventElRemove=function(e){e===s.currentSegEl&&s.handleSegLeave(null,s.currentSegEl)},s.handleSegEnter=function(e,t){ar(t)&&(s.currentSegEl=t,s.triggerEvent("eventMouseEnter",e,t))},s.handleSegLeave=function(e,t){s.currentSegEl&&(s.currentSegEl=null,s.triggerEvent("eventMouseLeave",e,t))},s.removeHoverListeners=(n=t.el,r=".fc-event",i=s.handleSegEnter,o=s.handleSegLeave,rt(n,"mouseover",r,(function(e,t){if(t!==a){a=t,i(e,t)
var n=function(e){a=null,o(e,t),t.removeEventListener("mouseleave",n)}
t.addEventListener("mouseleave",n)}}))),s}return r(t,e),t.prototype.destroy=function(){this.removeHoverListeners()},t.prototype.triggerEvent=function(e,t,n){var r=this.component,i=r.context,o=ar(n)
t&&!r.isValidSegDownEl(t.target)||i.emitter.trigger(e,{el:n,event:new Pr(i,o.eventRange.def,o.eventRange.instance),jsEvent:t,view:i.viewApi})},t}(Fo),Ko=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.buildViewContext=on(Ci),t.buildViewPropTransformers=on(ea),t.buildToolbarProps=on(Qo),t.headerRef=Ue(),t.footerRef=Ue(),t.interactionsStore={},t.state={viewLabelId:tt()},t.registerInteractiveComponent=function(e,n){var r=function(e,t){return{component:e,el:t.el,useEventCenter:null==t.useEventCenter||t.useEventCenter,isHitComboAllowed:t.isHitComboAllowed||null}}(e,n),i=[$o,Jo].concat(t.props.pluginHooks.componentInteractions).map((function(e){return new e(r)}))
t.interactionsStore[e.uid]=i,zo[e.uid]=r},t.unregisterInteractiveComponent=function(e){var n=t.interactionsStore[e.uid]
if(n){for(var r=0,i=n;r<i.length;r++){i[r].destroy()}delete t.interactionsStore[e.uid]}delete zo[e.uid]},t.resizeRunner=new Eo((function(){t.props.emitter.trigger("_resize",!0),t.props.emitter.trigger("windowResize",{view:t.props.viewApi})})),t.handleWindowResize=function(e){var n=t.props.options
n.handleWindowResize&&e.target===window&&t.resizeRunner.request(n.windowResizeDelay)},t}return r(t,e),t.prototype.render=function(){var e,t=this.props,n=t.toolbarConfig,r=t.options,o=this.buildToolbarProps(t.viewSpec,t.dateProfile,t.dateProfileGenerator,t.currentDate,Nr(t.options.now,t.dateEnv),t.viewTitle),a=!1,s=""
t.isHeightAuto||t.forPrint?s="":null!=r.height?a=!0:null!=r.contentHeight?s=r.contentHeight:e=Math.max(r.aspectRatio,.5)
var l=this.buildViewContext(t.viewSpec,t.viewApi,t.options,t.dateProfileGenerator,t.dateEnv,t.theme,t.pluginHooks,t.dispatch,t.getCurrentData,t.emitter,t.calendarApi,this.registerInteractiveComponent,this.unregisterInteractiveComponent),u=n.header&&n.header.hasTitle?this.state.viewLabelId:""
return Le(Di.Provider,{value:l},n.header&&Le(Yo,i({ref:this.headerRef,extraClassName:"fc-header-toolbar",model:n.header,titleId:u},o)),Le(Xo,{liquid:a,height:s,aspectRatio:e,labeledById:u},this.renderView(t),this.buildAppendContent()),n.footer&&Le(Yo,i({ref:this.footerRef,extraClassName:"fc-footer-toolbar",model:n.footer,titleId:""},o)))},t.prototype.componentDidMount=function(){var e=this.props
this.calendarInteractions=e.pluginHooks.calendarInteractions.map((function(t){return new t(e)})),window.addEventListener("resize",this.handleWindowResize)
var t=e.pluginHooks.propSetHandlers
for(var n in t)t[n](e[n],e)},t.prototype.componentDidUpdate=function(e){var t=this.props,n=t.pluginHooks.propSetHandlers
for(var r in n)t[r]!==e[r]&&n[r](t[r],t)},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.handleWindowResize),this.resizeRunner.clear()
for(var e=0,t=this.calendarInteractions;e<t.length;e++){t[e].destroy()}this.props.emitter.trigger("_unmount")},t.prototype.buildAppendContent=function(){var e=this.props,t=e.pluginHooks.viewContainerAppends.map((function(t){return t(e)}))
return Le.apply(void 0,o([Fe,{}],t))},t.prototype.renderView=function(e){for(var t=e.pluginHooks,n=e.viewSpec,r={dateProfile:e.dateProfile,businessHours:e.businessHours,eventStore:e.renderableEventStore,eventUiBases:e.eventUiBases,dateSelection:e.dateSelection,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,isHeightAuto:e.isHeightAuto,forPrint:e.forPrint},o=0,a=this.buildViewPropTransformers(t.viewPropsTransformers);o<a.length;o++){var s=a[o]
i(r,s.transform(r,e))}var l=n.component
return Le(l,i({},r))},t}(Ti)
function Qo(e,t,n,r,i,o){var a=n.build(i,void 0,!1),s=n.buildPrev(t,r,!1),l=n.buildNext(t,r,!1)
return{title:o,activeButton:e.type,navUnit:e.singleUnit,isTodayEnabled:a.isValid&&!rr(t.currentRange,i),isPrevEnabled:s.isValid,isNextEnabled:l.isValid}}function ea(e){return e.map((function(e){return new e}))}var ta=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.state={forPrint:!1},t.handleBeforePrint=function(){t.setState({forPrint:!0})},t.handleAfterPrint=function(){t.setState({forPrint:!1})},t}return r(t,e),t.prototype.render=function(){var e=this.props,t=e.options,n=this.state.forPrint,r=n||"auto"===t.height||"auto"===t.contentHeight,i=r||null==t.height?"":t.height,o=["fc",n?"fc-media-print":"fc-media-screen","fc-direction-"+t.direction,e.theme.getClass("root")]
return Qr()||o.push("fc-liquid-hack"),e.children(o,i,r,n)},t.prototype.componentDidMount=function(){var e=this.props.emitter
e.on("_beforeprint",this.handleBeforePrint),e.on("_afterprint",this.handleAfterPrint)},t.prototype.componentWillUnmount=function(){var e=this.props.emitter
e.off("_beforeprint",this.handleBeforePrint),e.off("_afterprint",this.handleAfterPrint)},t}(_i)
var na="fc-col-header-cell"
function ra(e){return e.text}var ia=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this.context,t=e.dateEnv,n=e.options,r=e.theme,o=e.viewApi,a=this.props,s=a.date,l=a.dateProfile,u=ri(s,a.todayRange,null,l),c=[na].concat(ii(u,r)),d=t.format(s,a.dayHeaderFormat),f=!u.isDisabled&&a.colCnt>1?si(this.context,s):{},h=i(i(i({date:t.toDate(s),view:o},a.extraHookProps),{text:d}),u)
return Le(Hi,{hookProps:h,classNames:n.dayHeaderClassNames,content:n.dayHeaderContent,defaultContent:ra,didMount:n.dayHeaderDidMount,willUnmount:n.dayHeaderWillUnmount},(function(e,t,n,r){return Le("th",i({ref:e,role:"columnheader",className:c.concat(t).join(" "),"data-date":u.isDisabled?void 0:tn(s),colSpan:a.colSpan},a.extraDataAttrs),Le("div",{className:"fc-scrollgrid-sync-inner"},!u.isDisabled&&Le("a",i({ref:n,className:["fc-col-header-cell-cushion",a.isSticky?"fc-sticky":""].join(" ")},f),r)))}))},t}(_i),oa=bn({weekday:"long"}),aa=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=t.dateEnv,r=t.theme,o=t.viewApi,a=t.options,s=Et(new Date(2592e5),e.dow),l={dow:e.dow,isDisabled:!1,isFuture:!1,isPast:!1,isToday:!1,isOther:!1},u=[na].concat(ii(l,r),e.extraClassNames||[]),c=n.format(s,e.dayHeaderFormat),d=i(i(i(i({date:s},l),{view:o}),e.extraHookProps),{text:c})
return Le(Hi,{hookProps:d,classNames:a.dayHeaderClassNames,content:a.dayHeaderContent,defaultContent:ra,didMount:a.dayHeaderDidMount,willUnmount:a.dayHeaderWillUnmount},(function(t,r,o,a){return Le("th",i({ref:t,role:"columnheader",className:u.concat(r).join(" "),colSpan:e.colSpan},e.extraDataAttrs),Le("div",{className:"fc-scrollgrid-sync-inner"},Le("a",{"aria-label":n.format(s,oa),className:["fc-col-header-cell-cushion",e.isSticky?"fc-sticky":""].join(" "),ref:o},a)))}))},t}(_i),sa=function(e){function t(t,n){var r=e.call(this,t,n)||this
return r.initialNowDate=Nr(n.options.now,n.dateEnv),r.initialNowQueriedMs=(new Date).valueOf(),r.state=r.computeTiming().currentState,r}return r(t,e),t.prototype.render=function(){var e=this.props,t=this.state
return e.children(t.nowDate,t.todayRange)},t.prototype.componentDidMount=function(){this.setTimeout()},t.prototype.componentDidUpdate=function(e){e.unit!==this.props.unit&&(this.clearTimeout(),this.setTimeout())},t.prototype.componentWillUnmount=function(){this.clearTimeout()},t.prototype.computeTiming=function(){var e=this.props,t=this.context,n=bt(this.initialNowDate,(new Date).valueOf()-this.initialNowQueriedMs),r=t.dateEnv.startOf(n,e.unit),i=t.dateEnv.add(r,Gt(1,e.unit)),o=i.valueOf()-n.valueOf()
return o=Math.min(864e5,o),{currentState:{nowDate:r,todayRange:la(r)},nextState:{nowDate:i,todayRange:la(i)},waitMs:o}},t.prototype.setTimeout=function(){var e=this,t=this.computeTiming(),n=t.nextState,r=t.waitMs
this.timeoutId=setTimeout((function(){e.setState(n,(function(){e.setTimeout()}))}),r)},t.prototype.clearTimeout=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.contextType=Di,t}(Ae)
function la(e){var t=Dt(e)
return{start:t,end:Et(t,1)}}var ua=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.createDayHeaderFormatter=on(ca),t}return r(t,e),t.prototype.render=function(){var e=this.context,t=this.props,n=t.dates,r=t.dateProfile,i=t.datesRepDistinctDays,o=t.renderIntro,a=this.createDayHeaderFormatter(e.options.dayHeaderFormat,i,n.length)
return Le(sa,{unit:"day"},(function(e,t){return Le("tr",{role:"row"},o&&o("day"),n.map((function(e){return i?Le(ia,{key:e.toISOString(),date:e,dateProfile:r,todayRange:t,colCnt:n.length,dayHeaderFormat:a}):Le(aa,{key:e.getUTCDay(),dow:e.getUTCDay(),dayHeaderFormat:a})})))}))},t}(_i)
function ca(e,t,n){return e||function(e,t){return bn(!e||t>10?{weekday:"short"}:t>1?{weekday:"short",month:"numeric",day:"numeric",omitCommas:!0}:{weekday:"long"})}(t,n)}var da=function(){function e(e,t){for(var n=e.start,r=e.end,i=[],o=[],a=-1;n<r;)t.isHiddenDay(n)?i.push(a+.5):(a+=1,i.push(a),o.push(n)),n=Et(n,1)
this.dates=o,this.indices=i,this.cnt=o.length}return e.prototype.sliceRange=function(e){var t=this.getDateDayIndex(e.start),n=this.getDateDayIndex(Et(e.end,-1)),r=Math.max(0,t),i=Math.min(this.cnt-1,n)
return(r=Math.ceil(r))<=(i=Math.floor(i))?{firstIndex:r,lastIndex:i,isStart:t===r,isEnd:n===i}:null},e.prototype.getDateDayIndex=function(e){var t=this.indices,n=Math.floor(St(this.dates[0],e))
return n<0?t[0]-1:n>=t.length?t[t.length-1]+1:t[n]},e}(),fa=function(){function e(e,t){var n,r,i,o=e.dates
if(t){for(r=o[0].getUTCDay(),n=1;n<o.length&&o[n].getUTCDay()!==r;n+=1);i=Math.ceil(o.length/n)}else i=1,n=o.length
this.rowCnt=i,this.colCnt=n,this.daySeries=e,this.cells=this.buildCells(),this.headerDates=this.buildHeaderDates()}return e.prototype.buildCells=function(){for(var e=[],t=0;t<this.rowCnt;t+=1){for(var n=[],r=0;r<this.colCnt;r+=1)n.push(this.buildCell(t,r))
e.push(n)}return e},e.prototype.buildCell=function(e,t){var n=this.daySeries.dates[e*this.colCnt+t]
return{key:n.toISOString(),date:n}},e.prototype.buildHeaderDates=function(){for(var e=[],t=0;t<this.colCnt;t+=1)e.push(this.cells[0][t].date)
return e},e.prototype.sliceRange=function(e){var t=this.colCnt,n=this.daySeries.sliceRange(e),r=[]
if(n)for(var i=n.firstIndex,o=n.lastIndex,a=i;a<=o;){var s=Math.floor(a/t),l=Math.min((s+1)*t,o+1)
r.push({row:s,firstCol:a%t,lastCol:(l-1)%t,isStart:n.isStart&&a===i,isEnd:n.isEnd&&l-1===o}),a=l}return r},e}(),ha=function(){function e(){this.sliceBusinessHours=on(this._sliceBusinessHours),this.sliceDateSelection=on(this._sliceDateSpan),this.sliceEventStore=on(this._sliceEventStore),this.sliceEventDrag=on(this._sliceInteraction),this.sliceEventResize=on(this._sliceInteraction),this.forceDayIfListItem=!1}return e.prototype.sliceProps=function(e,t,n,r){for(var i=[],a=4;a<arguments.length;a++)i[a-4]=arguments[a]
var s=e.eventUiBases,l=this.sliceEventStore.apply(this,o([e.eventStore,s,t,n],i))
return{dateSelectionSegs:this.sliceDateSelection.apply(this,o([e.dateSelection,s,r],i)),businessHourSegs:this.sliceBusinessHours.apply(this,o([e.businessHours,t,n,r],i)),fgEventSegs:l.fg,bgEventSegs:l.bg,eventDrag:this.sliceEventDrag.apply(this,o([e.eventDrag,s,t,n],i)),eventResize:this.sliceEventResize.apply(this,o([e.eventResize,s,t,n],i)),eventSelection:e.eventSelection}},e.prototype.sliceNowDate=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r]
return this._sliceDateSpan.apply(this,o([{range:{start:e,end:bt(e,1)},allDay:!1},{},t],n))},e.prototype._sliceBusinessHours=function(e,t,n,r){for(var i=[],a=4;a<arguments.length;a++)i[a-4]=arguments[a]
return e?this._sliceEventStore.apply(this,o([jt(e,pa(t,Boolean(n)),r),{},t,n],i)).bg:[]},e.prototype._sliceEventStore=function(e,t,n,r){for(var i=[],o=4;o<arguments.length;o++)i[o-4]=arguments[o]
if(e){var a=ir(e,t,pa(n,Boolean(r)),r)
return{bg:this.sliceEventRanges(a.bg,i),fg:this.sliceEventRanges(a.fg,i)}}return{bg:[],fg:[]}},e.prototype._sliceInteraction=function(e,t,n,r){for(var i=[],o=4;o<arguments.length;o++)i[o-4]=arguments[o]
if(!e)return null
var a=ir(e.mutatedEvents,t,pa(n,Boolean(r)),r)
return{segs:this.sliceEventRanges(a.fg,i),affectedInstances:e.affectedEvents.instances,isEvent:e.isEvent}},e.prototype._sliceDateSpan=function(e,t,n){for(var r=[],i=3;i<arguments.length;i++)r[i-3]=arguments[i]
if(!e)return[]
for(var a=function(e,t,n){var r=Zn({editable:!1},n),i=Yn(r.refined,r.extra,"",e.allDay,!0,n)
return{def:i,ui:lr(i,t),instance:Nt(i.defId,e.range),range:e.range,isStart:!0,isEnd:!0}}(e,t,n),s=this.sliceRange.apply(this,o([e.range],r)),l=0,u=s;l<u.length;l++){u[l].eventRange=a}return s},e.prototype.sliceEventRanges=function(e,t){for(var n=[],r=0,i=e;r<i.length;r++){var o=i[r]
n.push.apply(n,this.sliceEventRange(o,t))}return n},e.prototype.sliceEventRange=function(e,t){var n=e.range
this.forceDayIfListItem&&"list-item"===e.ui.display&&(n={start:n.start,end:Et(n.start,1)})
for(var r=this.sliceRange.apply(this,o([n],t)),i=0,a=r;i<a.length;i++){var s=a[i]
s.eventRange=e,s.isStart=e.isStart&&s.isStart,s.isEnd=e.isEnd&&s.isEnd}return r},e}()
function pa(e,t){var n=e.activeRange
return t?n:{start:bt(n.start,e.slotMinTime.milliseconds),end:bt(n.end,e.slotMaxTime.milliseconds-864e5)}}function va(e,t,n){var r=e.mutatedEvents.instances
for(var i in r)if(!nr(t.validRange,r[i].range))return!1
return ma({eventDrag:e},n)}function ma(e,t){var n=t.getCurrentData(),r=i({businessHours:n.businessHours,dateSelection:"",eventStore:n.eventStore,eventUiBases:n.eventUiBases,eventSelection:"",eventDrag:null,eventResize:null},e)
return(t.pluginHooks.isPropsValid||ga)(r,t)}function ga(e,t,n,r){return void 0===n&&(n={}),!(e.eventDrag&&!function(e,t,n,r){var o=t.getCurrentData(),a=e.eventDrag,s=a.mutatedEvents,l=s.defs,u=s.instances,c=sr(l,a.isEvent?e.eventUiBases:{"":o.selectionConfig})
r&&(c=At(c,r))
var d=(v=e.eventStore,m=a.affectedEvents.instances,{defs:v.defs,instances:Ht(v.instances,(function(e){return!m[e.instanceId]}))}),f=d.defs,h=d.instances,p=sr(f,e.eventUiBases)
var v,m
for(var g in u){var y=u[g],E=y.range,b=c[y.defId],S=l[y.defId]
if(!ya(b.constraints,E,d,e.businessHours,t))return!1
var w=t.options.eventOverlap,D="function"==typeof w?w:null
for(var C in h){var T=h[C]
if(tr(E,T.range)){if(!1===p[T.defId].overlap&&a.isEvent)return!1
if(!1===b.overlap)return!1
if(D&&!D(new Pr(t,f[T.defId],T),new Pr(t,S,y)))return!1}}for(var _=o.eventStore,k=0,R=b.allows;k<R.length;k++){var M=R[k],x=i(i({},n),{range:y.range,allDay:S.allDay}),I=_.defs[S.defId],N=_.instances[g],O=void 0
if(O=I?new Pr(t,I,N):new Pr(t,S),!M(Dr(x,t),O))return!1}}return!0}(e,t,n,r))&&!(e.dateSelection&&!function(e,t,n,r){var o=e.eventStore,a=o.defs,s=o.instances,l=e.dateSelection,u=l.range,c=t.getCurrentData().selectionConfig
r&&(c=r(c))
if(!ya(c.constraints,u,o,e.businessHours,t))return!1
var d=t.options.selectOverlap,f="function"==typeof d?d:null
for(var h in s){var p=s[h]
if(tr(u,p.range)){if(!1===c.overlap)return!1
if(f&&!f(new Pr(t,a[p.defId],p),null))return!1}}for(var v=0,m=c.allows;v<m.length;v++){if(!(0,m[v])(Dr(i(i({},n),l),t),null))return!1}return!0}(e,t,n,r))}function ya(e,t,n,r,i){for(var o=0,a=e;o<a.length;o++){if(!Sa(Ea(a[o],t,n,r,i),t))return!1}return!0}function Ea(e,t,n,r,i){return"businessHours"===e?ba(jt(r,t,i)):"string"==typeof e?ba(Hn(n,(function(t){return t.groupId===e}))):"object"==typeof e&&e?ba(jt(e,t,i)):[]}function ba(e){var t=e.instances,n=[]
for(var r in t)n.push(t[r].range)
return n}function Sa(e,t){for(var n=0,r=e;n<r.length;n++){if(nr(r[n],t))return!0}return!1}var wa=/^(visible|hidden)$/,Da=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.handleEl=function(e){t.el=e,Mi(t.props.elRef,e)},t}return r(t,e),t.prototype.render=function(){var e=this.props,t=e.liquid,n=e.liquidIsAbsolute,r=t&&n,i=["fc-scroller"]
return t&&(n?i.push("fc-scroller-liquid-absolute"):i.push("fc-scroller-liquid")),Le("div",{ref:this.handleEl,className:i.join(" "),style:{overflowX:e.overflowX,overflowY:e.overflowY,left:r&&-(e.overcomeLeft||0)||"",right:r&&-(e.overcomeRight||0)||"",bottom:r&&-(e.overcomeBottom||0)||"",marginLeft:!r&&-(e.overcomeLeft||0)||"",marginRight:!r&&-(e.overcomeRight||0)||"",marginBottom:!r&&-(e.overcomeBottom||0)||"",maxHeight:e.maxHeight||""}},e.children)},t.prototype.needsXScrolling=function(){if(wa.test(this.props.overflowX))return!1
for(var e=this.el,t=this.el.getBoundingClientRect().width-this.getYScrollbarWidth(),n=e.children,r=0;r<n.length;r+=1){if(n[r].getBoundingClientRect().width>t)return!0}return!1},t.prototype.needsYScrolling=function(){if(wa.test(this.props.overflowY))return!1
for(var e=this.el,t=this.el.getBoundingClientRect().height-this.getXScrollbarWidth(),n=e.children,r=0;r<n.length;r+=1){if(n[r].getBoundingClientRect().height>t)return!0}return!1},t.prototype.getXScrollbarWidth=function(){return wa.test(this.props.overflowX)?0:this.el.offsetHeight-this.el.clientHeight},t.prototype.getYScrollbarWidth=function(){return wa.test(this.props.overflowY)?0:this.el.offsetWidth-this.el.clientWidth},t}(_i),Ca=function(){function e(e){var t=this
this.masterCallback=e,this.currentMap={},this.depths={},this.callbackMap={},this.handleValue=function(e,n){var r=t,i=r.depths,o=r.currentMap,a=!1,s=!1
null!==e?(a=n in o,o[n]=e,i[n]=(i[n]||0)+1,s=!0):(i[n]-=1,i[n]||(delete o[n],delete t.callbackMap[n],a=!0)),t.masterCallback&&(a&&t.masterCallback(null,String(n)),s&&t.masterCallback(e,String(n)))}}return e.prototype.createRef=function(e){var t=this,n=this.callbackMap[e]
return n||(n=this.callbackMap[e]=function(n){t.handleValue(n,String(e))}),n},e.prototype.collect=function(e,t,n){return function(e,t,n,r){void 0===t&&(t=0),void 0===r&&(r=1)
var i=[]
null==n&&(n=Object.keys(e).length)
for(var o=t;o<n;o+=r){var a=e[o]
void 0!==a&&i.push(a)}return i}(this.currentMap,e,t,n)},e.prototype.getAll=function(){return Vt(this.currentMap)},e}()
function Ta(e){for(var t=function(e,t){for(var n=e instanceof HTMLElement?[e]:e,r=[],i=0;i<n.length;i+=1)for(var o=n[i].querySelectorAll(t),a=0;a<o.length;a+=1)r.push(o[a])
return r}(e,".fc-scrollgrid-shrink"),n=0,r=0,i=t;r<i.length;r++){var o=i[r]
n=Math.max(n,mt(o))}return Math.ceil(n)}function _a(e,t){return e.liquid&&t.liquid}function ka(e,t){return rn(e,t,Ut)}function Ra(e,t){for(var n=[],r=0,i=e;r<i.length;r++)for(var a=i[r],s=a.span||1,l=0;l<s;l+=1)n.push(Le("col",{style:{width:"shrink"===a.width?Ma(t):a.width||"",minWidth:a.minWidth||""}}))
return Le.apply(void 0,o(["colgroup",{}],n))}function Ma(e){return null==e?4:e}function xa(e,t){var n=["fc-scrollgrid-section","fc-scrollgrid-section-"+e.type,e.className]
return t&&e.liquid&&null==e.maxHeight&&n.push("fc-scrollgrid-section-liquid"),e.isSticky&&n.push("fc-scrollgrid-section-sticky"),n}function Ia(e){return Le("div",{className:"fc-scrollgrid-sticky-shim",style:{width:e.clientWidth,minWidth:e.tableMinWidth}})}function Na(e){var t=e.stickyHeaderDates
return null!=t&&"auto"!==t||(t="auto"===e.height||"auto"===e.viewHeight),t}function Oa(e){var t=e.stickyFooterScrollbar
return null!=t&&"auto"!==t||(t="auto"===e.height||"auto"===e.viewHeight),t}var Pa=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.processCols=on((function(e){return e}),ka),t.renderMicroColGroup=on(Ra),t.scrollerRefs=new Ca,t.scrollerElRefs=new Ca(t._handleScrollerEl.bind(t)),t.state={shrinkWidth:null,forceYScrollbars:!1,scrollerClientWidths:{},scrollerClientHeights:{}},t.handleSizing=function(){t.safeSetState(i({shrinkWidth:t.computeShrinkWidth()},t.computeScrollerDims()))},t}return r(t,e),t.prototype.render=function(){var e=this,t=e.props,n=e.state,r=e.context,i=t.sections||[],a=this.processCols(t.cols),s=this.renderMicroColGroup(a,n.shrinkWidth),l=function(e,t){var n=["fc-scrollgrid",t.theme.getClass("table")]
return e&&n.push("fc-scrollgrid-liquid"),n}(t.liquid,r)
t.collapsibleWidth&&l.push("fc-scrollgrid-collapsible")
for(var u,c=i.length,d=0,f=[],h=[],p=[];d<c&&"header"===(u=i[d]).type;)f.push(this.renderSection(u,s,!0)),d+=1
for(;d<c&&"body"===(u=i[d]).type;)h.push(this.renderSection(u,s,!1)),d+=1
for(;d<c&&"footer"===(u=i[d]).type;)p.push(this.renderSection(u,s,!0)),d+=1
var v=!Qr(),m={role:"rowgroup"}
return Le("table",{role:"grid",className:l.join(" "),style:{height:t.height}},Boolean(!v&&f.length)&&Le.apply(void 0,o(["thead",m],f)),Boolean(!v&&h.length)&&Le.apply(void 0,o(["tbody",m],h)),Boolean(!v&&p.length)&&Le.apply(void 0,o(["tfoot",m],p)),v&&Le.apply(void 0,o(o(o(["tbody",m],f),h),p)))},t.prototype.renderSection=function(e,t,n){return"outerContent"in e?Le(Fe,{key:e.key},e.outerContent):Le("tr",{key:e.key,role:"presentation",className:xa(e,this.props.liquid).join(" ")},this.renderChunkTd(e,t,e.chunk,n))},t.prototype.renderChunkTd=function(e,t,n,r){if("outerContent"in n)return n.outerContent
var i=this.props,o=this.state,a=o.forceYScrollbars,s=o.scrollerClientWidths,l=o.scrollerClientHeights,u=function(e,t){return null!=t.maxHeight||_a(e,t)}(i,e),c=_a(i,e),d=i.liquid?a?"scroll":u?"auto":"hidden":"visible",f=e.key,h=function(e,t,n,r){var i=n.expandRows
return"function"==typeof t.content?t.content(n):Le("table",{role:"presentation",className:[t.tableClassName,e.syncRowHeights?"fc-scrollgrid-sync-table":""].join(" "),style:{minWidth:n.tableMinWidth,width:n.clientWidth,height:i?n.clientHeight:""}},n.tableColGroupNode,Le(r?"thead":"tbody",{role:"presentation"},"function"==typeof t.rowContent?t.rowContent(n):t.rowContent))}(e,n,{tableColGroupNode:t,tableMinWidth:"",clientWidth:i.collapsibleWidth||void 0===s[f]?null:s[f],clientHeight:void 0!==l[f]?l[f]:null,expandRows:e.expandRows,syncRowHeights:!1,rowSyncHeights:[],reportRowHeightChange:function(){}},r)
return Le(r?"th":"td",{ref:n.elRef,role:"presentation"},Le("div",{className:"fc-scroller-harness"+(c?" fc-scroller-harness-liquid":"")},Le(Da,{ref:this.scrollerRefs.createRef(f),elRef:this.scrollerElRefs.createRef(f),overflowY:d,overflowX:i.liquid?"hidden":"visible",maxHeight:e.maxHeight,liquid:c,liquidIsAbsolute:!0},h)))},t.prototype._handleScrollerEl=function(e,t){var n=function(e,t){for(var n=0,r=e;n<r.length;n++){var i=r[n]
if(i.key===t)return i}return null}(this.props.sections,t)
n&&Mi(n.chunk.scrollerElRef,e)},t.prototype.componentDidMount=function(){this.handleSizing(),this.context.addResizeHandler(this.handleSizing)},t.prototype.componentDidUpdate=function(){this.handleSizing()},t.prototype.componentWillUnmount=function(){this.context.removeResizeHandler(this.handleSizing)},t.prototype.computeShrinkWidth=function(){return function(e){for(var t=0,n=e;t<n.length;t++)if("shrink"===n[t].width)return!0
return!1}(this.props.cols)?Ta(this.scrollerElRefs.getAll()):0},t.prototype.computeScrollerDims=function(){var e=di(),t=this.scrollerRefs,n=this.scrollerElRefs,r=!1,i={},o={}
for(var a in t.currentMap){var s=t.currentMap[a]
if(s&&s.needsYScrolling()){r=!0
break}}for(var l=0,u=this.props.sections;l<u.length;l++){a=u[l].key
var c=n.currentMap[a]
if(c){var d=c.parentNode
i[a]=Math.floor(d.getBoundingClientRect().width-(r?e.y:0)),o[a]=Math.floor(d.getBoundingClientRect().height)}}return{forceYScrollbars:r,scrollerClientWidths:i,scrollerClientHeights:o}},t}(_i)
Pa.addStateEquality({scrollerClientWidths:Ut,scrollerClientHeights:Ut})
var Ha=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.elRef=Ue(),t}return r(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=t.options,r=e.seg,i=r.eventRange,o=i.ui,a={event:new Pr(t,i.def,i.instance),view:t.viewApi,timeText:e.timeText,textColor:o.textColor,backgroundColor:o.backgroundColor,borderColor:o.borderColor,isDraggable:!e.disableDragging&&dr(r,t),isStartResizable:!e.disableResizing&&fr(r,t),isEndResizable:!e.disableResizing&&hr(r),isMirror:Boolean(e.isDragging||e.isResizing||e.isDateSelecting),isStart:Boolean(r.isStart),isEnd:Boolean(r.isEnd),isPast:Boolean(e.isPast),isFuture:Boolean(e.isFuture),isToday:Boolean(e.isToday),isSelected:Boolean(e.isSelected),isDragging:Boolean(e.isDragging),isResizing:Boolean(e.isResizing)},s=function(e){var t=["fc-event"]
return e.isMirror&&t.push("fc-event-mirror"),e.isDraggable&&t.push("fc-event-draggable"),(e.isStartResizable||e.isEndResizable)&&t.push("fc-event-resizable"),e.isDragging&&t.push("fc-event-dragging"),e.isResizing&&t.push("fc-event-resizing"),e.isSelected&&t.push("fc-event-selected"),e.isStart&&t.push("fc-event-start"),e.isEnd&&t.push("fc-event-end"),e.isPast&&t.push("fc-event-past"),e.isToday&&t.push("fc-event-today"),e.isFuture&&t.push("fc-event-future"),t}(a).concat(o.classNames)
return Le(Hi,{hookProps:a,classNames:n.eventClassNames,content:n.eventContent,defaultContent:e.defaultContent,didMount:n.eventDidMount,willUnmount:n.eventWillUnmount,elRef:this.elRef},(function(t,n,r,i){return e.children(t,s.concat(n),r,i,a)}))},t.prototype.componentDidMount=function(){or(this.elRef.current,this.props.seg)},t.prototype.componentDidUpdate=function(e){var t=this.props.seg
t!==e.seg&&or(this.elRef.current,t)},t}(_i),Aa=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=e.seg,r=t.options.eventTimeFormat||e.defaultTimeFormat,o=pr(n,r,t,e.defaultDisplayEventTime,e.defaultDisplayEventEnd)
return Le(Ha,{seg:n,timeText:o,disableDragging:e.disableDragging,disableResizing:e.disableResizing,defaultContent:e.defaultContent||La,isDragging:e.isDragging,isResizing:e.isResizing,isDateSelecting:e.isDateSelecting,isSelected:e.isSelected,isPast:e.isPast,isFuture:e.isFuture,isToday:e.isToday},(function(r,o,a,s,l){return Le("a",i({className:e.extraClassNames.concat(o).join(" "),style:{borderColor:l.borderColor,backgroundColor:l.backgroundColor},ref:r},gr(n,t)),Le("div",{className:"fc-event-main",ref:a,style:{color:l.textColor}},s),l.isStartResizable&&Le("div",{className:"fc-event-resizer fc-event-resizer-start"}),l.isEndResizable&&Le("div",{className:"fc-event-resizer fc-event-resizer-end"}))}))},t}(_i)
function La(e){return Le("div",{className:"fc-event-main-frame"},e.timeText&&Le("div",{className:"fc-event-time"},e.timeText),Le("div",{className:"fc-event-title-container"},Le("div",{className:"fc-event-title fc-sticky"},e.event.title||Le(Fe,null," "))))}var Va=function(e){return Le(Di.Consumer,null,(function(t){var n=t.options,r={isAxis:e.isAxis,date:t.dateEnv.toDate(e.date),view:t.viewApi}
return Le(Hi,{hookProps:r,classNames:n.nowIndicatorClassNames,content:n.nowIndicatorContent,didMount:n.nowIndicatorDidMount,willUnmount:n.nowIndicatorWillUnmount},e.children)}))},Ua=bn({day:"numeric"}),Fa=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=t.options,r=Wa({date:e.date,dateProfile:e.dateProfile,todayRange:e.todayRange,showDayNumber:e.showDayNumber,extraProps:e.extraHookProps,viewApi:t.viewApi,dateEnv:t.dateEnv})
return Le(Li,{hookProps:r,content:n.dayCellContent,defaultContent:e.defaultContent},e.children)},t}(_i)
function Wa(e){var t=e.date,n=e.dateEnv,r=ri(t,e.todayRange,null,e.dateProfile)
return i(i(i({date:n.toDate(t),view:e.viewApi},r),{dayNumberText:e.showDayNumber?n.format(t,Ua):""}),e.extraProps)}var za=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.refineHookProps=an(Wa),t.normalizeClassNames=Fi(),t}return r(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=t.options,r=this.refineHookProps({date:e.date,dateProfile:e.dateProfile,todayRange:e.todayRange,showDayNumber:e.showDayNumber,extraProps:e.extraHookProps,viewApi:t.viewApi,dateEnv:t.dateEnv}),i=ii(r,t.theme).concat(r.isDisabled?[]:this.normalizeClassNames(n.dayCellClassNames,r)),o=r.isDisabled?{}:{"data-date":tn(e.date)}
return Le(Ui,{hookProps:r,didMount:n.dayCellDidMount,willUnmount:n.dayCellWillUnmount,elRef:e.elRef},(function(t){return e.children(t,i,o,r.isDisabled)}))},t}(_i)
function ja(e){return Le("div",{className:"fc-"+e})}var Ba=function(e){return Le(Ha,{defaultContent:qa,seg:e.seg,timeText:"",disableDragging:!0,disableResizing:!0,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:!1,isPast:e.isPast,isFuture:e.isFuture,isToday:e.isToday},(function(e,t,n,r,i){return Le("div",{ref:e,className:["fc-bg-event"].concat(t).join(" "),style:{backgroundColor:i.backgroundColor}},r)}))}
function qa(e){return e.event.title&&Le("div",{className:"fc-event-title"},e.event.title)}var Za=function(e){return Le(Di.Consumer,null,(function(t){var n=t.dateEnv,r=t.options,i=e.date,o=r.weekNumberFormat||e.defaultFormat,a=n.computeWeekNumber(i),s=n.format(i,o)
return Le(Hi,{hookProps:{num:a,text:s,date:i},classNames:r.weekNumberClassNames,content:r.weekNumberContent,defaultContent:Ga,didMount:r.weekNumberDidMount,willUnmount:r.weekNumberWillUnmount},e.children)}))}
function Ga(e){return e.text}var Ya=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.state={titleId:tt()},t.handleRootEl=function(e){t.rootEl=e,t.props.elRef&&Mi(t.props.elRef,e)},t.handleDocumentMouseDown=function(e){var n=Ke(e)
t.rootEl.contains(n)||t.handleCloseClick()},t.handleDocumentKeyDown=function(e){"Escape"===e.key&&t.handleCloseClick()},t.handleCloseClick=function(){var e=t.props.onClose
e&&e()},t}return r(t,e),t.prototype.render=function(){var e=this.context,t=e.theme,n=e.options,r=this.props,o=this.state,a=["fc-popover",t.getClass("popover")].concat(r.extraClassNames||[])
return ze(Le("div",i({id:r.id,className:a.join(" "),"aria-labelledby":o.titleId},r.extraAttrs,{ref:this.handleRootEl}),Le("div",{className:"fc-popover-header "+t.getClass("popoverHeader")},Le("span",{className:"fc-popover-title",id:o.titleId},r.title),Le("span",{className:"fc-popover-close "+t.getIconClass("close"),title:n.closeHint,onClick:this.handleCloseClick})),Le("div",{className:"fc-popover-body "+t.getClass("popoverContent")},r.children)),r.parentEl)},t.prototype.componentDidMount=function(){document.addEventListener("mousedown",this.handleDocumentMouseDown),document.addEventListener("keydown",this.handleDocumentKeyDown),this.updateSize()},t.prototype.componentWillUnmount=function(){document.removeEventListener("mousedown",this.handleDocumentMouseDown),document.removeEventListener("keydown",this.handleDocumentKeyDown)},t.prototype.updateSize=function(){var e=this.context.isRtl,t=this.props,n=t.alignmentEl,r=t.alignGridTop,i=this.rootEl,o=function(e){for(var t=vi(e),n=e.getBoundingClientRect(),r=0,i=t;r<i.length;r++){var o=Kr(n,i[r].getBoundingClientRect())
if(!o)return null
n=o}return n}(n)
if(o){var a=i.getBoundingClientRect(),s=r?Ge(n,".fc-scrollgrid").getBoundingClientRect().top:o.top,l=e?o.right-a.width:o.left
s=Math.max(s,10),l=Math.min(l,document.documentElement.clientWidth-10-a.width),l=Math.max(l,10)
var u=i.offsetParent.getBoundingClientRect()
$e(i,{top:s-u.top,left:l-u.left})}},t}(_i),Xa=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.handleRootEl=function(e){t.rootEl=e,e?t.context.registerInteractiveComponent(t,{el:e,useEventCenter:!1}):t.context.unregisterInteractiveComponent(t)},t}return r(t,e),t.prototype.render=function(){var e=this.context,t=e.options,n=e.dateEnv,r=this.props,i=r.startDate,o=r.todayRange,a=r.dateProfile,s=n.format(i,t.dayPopoverFormat)
return Le(za,{date:i,dateProfile:a,todayRange:o,elRef:this.handleRootEl},(function(e,t,n){return Le(Ya,{elRef:e,id:r.id,title:s,extraClassNames:["fc-more-popover"].concat(t),extraAttrs:n,parentEl:r.parentEl,alignmentEl:r.alignmentEl,alignGridTop:r.alignGridTop,onClose:r.onClose},Le(Fa,{date:i,dateProfile:a,todayRange:o},(function(e,t){return t&&Le("div",{className:"fc-more-popover-misc",ref:e},t)})),r.children)}))},t.prototype.queryHit=function(e,t,n,r){var o=this.rootEl,a=this.props
return e>=0&&e<n&&t>=0&&t<r?{dateProfile:a.dateProfile,dateSpan:i({allDay:!0,range:{start:a.startDate,end:a.endDate}},a.extraDateSpan),dayEl:o,rect:{left:0,top:0,right:n,bottom:r},layer:1}:null},t}(xi),$a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.linkElRef=Ue(),t.state={isPopoverOpen:!1,popoverId:tt()},t.handleClick=function(e){var n=t,r=n.props,i=n.context,o=i.options.moreLinkClick,a=Ka(r).start
function s(e){var t=e.eventRange,n=t.def,r=t.instance,o=t.range
return{event:new Pr(i,n,r),start:i.dateEnv.toDate(o.start),end:i.dateEnv.toDate(o.end),isStart:e.isStart,isEnd:e.isEnd}}"function"==typeof o&&(o=o({date:a,allDay:Boolean(r.allDayDate),allSegs:r.allSegs.map(s),hiddenSegs:r.hiddenSegs.map(s),jsEvent:e,view:i.viewApi})),o&&"popover"!==o?"string"==typeof o&&i.calendarApi.zoomTo(a,o):t.setState({isPopoverOpen:!0})},t.handlePopoverClose=function(){t.setState({isPopoverOpen:!1})},t}return r(t,e),t.prototype.render=function(){var e=this,t=this.props,n=this.state
return Le(Di.Consumer,null,(function(r){var i=r.viewApi,o=r.options,a=r.calendarApi,s=o.moreLinkText,l=t.moreCnt,u=Ka(t),c="function"==typeof s?s.call(a,l):"+"+l+" "+s,d=ht(o.moreLinkHint,[l],c),f={num:l,shortText:"+"+l,text:c,view:i}
return Le(Fe,null,Boolean(t.moreCnt)&&Le(Hi,{elRef:e.linkElRef,hookProps:f,classNames:o.moreLinkClassNames,content:o.moreLinkContent,defaultContent:t.defaultContent||Ja,didMount:o.moreLinkDidMount,willUnmount:o.moreLinkWillUnmount},(function(r,i,o,a){return t.children(r,["fc-more-link"].concat(i),o,a,e.handleClick,d,n.isPopoverOpen,n.isPopoverOpen?n.popoverId:"")})),n.isPopoverOpen&&Le(Xa,{id:n.popoverId,startDate:u.start,endDate:u.end,dateProfile:t.dateProfile,todayRange:t.todayRange,extraDateSpan:t.extraDateSpan,parentEl:e.parentEl,alignmentEl:t.alignmentElRef.current,alignGridTop:t.alignGridTop,onClose:e.handlePopoverClose},t.popoverContent()))}))},t.prototype.componentDidMount=function(){this.updateParentEl()},t.prototype.componentDidUpdate=function(){this.updateParentEl()},t.prototype.updateParentEl=function(){this.linkElRef.current&&(this.parentEl=Ge(this.linkElRef.current,".fc-view-harness"))},t}(_i)
function Ja(e){return e.text}function Ka(e){if(e.allDayDate)return{start:e.allDayDate,end:Et(e.allDayDate,1)}
var t,n=e.hiddenSegs
return{start:Qa(n),end:(t=n,t.reduce(ts).eventRange.range.end)}}function Qa(e){return e.reduce(es).eventRange.range.start}function es(e,t){return e.eventRange.range.start<t.eventRange.range.start?e:t}function ts(e,t){return e.eventRange.range.end>t.eventRange.range.end?e:t}var ns=function(e){function t(t,n){void 0===n&&(n={})
var r=e.call(this)||this
return r.isRendering=!1,r.isRendered=!1,r.currentClassNames=[],r.customContentRenderId=0,r.handleAction=function(e){switch(e.type){case"SET_EVENT_DRAG":case"SET_EVENT_RESIZE":r.renderRunner.tryDrain()}},r.handleData=function(e){r.currentData=e,r.renderRunner.request(e.calendarOptions.rerenderDelay)},r.handleRenderRequest=function(){if(r.isRendering){r.isRendered=!0
var e=r.currentData
je((function(){Ve(Le(ta,{options:e.calendarOptions,theme:e.theme,emitter:e.emitter},(function(t,n,o,a){return r.setClassNames(t),r.setHeight(n),Le(Ai.Provider,{value:r.customContentRenderId},Le(Ko,i({isHeightAuto:o,forPrint:a},e)))})),r.el)}))}else r.isRendered&&(r.isRendered=!1,Be(r.el),r.setClassNames([]),r.setHeight(""))},r.el=t,r.renderRunner=new Eo(r.handleRenderRequest),new wo({optionOverrides:n,calendarApi:r,onAction:r.handleAction,onData:r.handleData}),r}return r(t,e),Object.defineProperty(t.prototype,"view",{get:function(){return this.currentData.viewApi},enumerable:!1,configurable:!0}),t.prototype.render=function(){var e=this.isRendering
e?this.customContentRenderId+=1:this.isRendering=!0,this.renderRunner.request(),e&&this.updateSize()},t.prototype.destroy=function(){this.isRendering&&(this.isRendering=!1,this.renderRunner.request())},t.prototype.updateSize=function(){var t=this
je((function(){e.prototype.updateSize.call(t)}))},t.prototype.batchRendering=function(e){this.renderRunner.pause("batchRendering"),e(),this.renderRunner.resume("batchRendering")},t.prototype.pauseRendering=function(){this.renderRunner.pause("pauseRendering")},t.prototype.resumeRendering=function(){this.renderRunner.resume("pauseRendering",!0)},t.prototype.resetOptions=function(e,t){this.currentDataManager.resetOptions(e,t)},t.prototype.setClassNames=function(e){if(!rn(e,this.currentClassNames)){for(var t=this.el.classList,n=0,r=this.currentClassNames;n<r.length;n++){var i=r[n]
t.remove(i)}for(var o=0,a=e;o<a.length;o++){i=a[o]
t.add(i)}this.currentClassNames=e}},t.prototype.setHeight=function(e){Je(this.el,"height",e)},t}(Or),rs=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.headerElRef=Ue(),t}return r(t,e),t.prototype.renderSimpleLayout=function(e,t){var n=this.props,r=this.context,i=[],o=Na(r.options)
return e&&i.push({type:"header",key:"header",isSticky:o,chunk:{elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}}),i.push({type:"body",key:"body",liquid:!0,chunk:{content:t}}),Le(ji,{viewSpec:r.viewSpec},(function(e,t){return Le("div",{ref:e,className:["fc-daygrid"].concat(t).join(" ")},Le(Pa,{liquid:!n.isHeightAuto&&!n.forPrint,collapsibleWidth:n.forPrint,cols:[],sections:i}))}))},t.prototype.renderHScrollLayout=function(e,t,n,r){var i=this.context.pluginHooks.scrollGridImpl
if(!i)throw new Error("No ScrollGrid implementation")
var o=this.props,a=this.context,s=!o.forPrint&&Na(a.options),l=!o.forPrint&&Oa(a.options),u=[]
return e&&u.push({type:"header",key:"header",isSticky:s,chunks:[{key:"main",elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}]}),u.push({type:"body",key:"body",liquid:!0,chunks:[{key:"main",content:t}]}),l&&u.push({type:"footer",key:"footer",isSticky:!0,chunks:[{key:"main",content:Ia}]}),Le(ji,{viewSpec:a.viewSpec},(function(e,t){return Le("div",{ref:e,className:["fc-daygrid"].concat(t).join(" ")},Le(i,{liquid:!o.isHeightAuto&&!o.forPrint,collapsibleWidth:o.forPrint,colGroups:[{cols:[{span:n,minWidth:r}]}],sections:u}))}))},t}(xi)
function is(e,t){for(var n=[],r=0;r<t;r+=1)n[r]=[]
for(var i=0,o=e;i<o.length;i++){var a=o[i]
n[a.row].push(a)}return n}function os(e,t){for(var n=[],r=0;r<t;r+=1)n[r]=[]
for(var i=0,o=e;i<o.length;i++){var a=o[i]
n[a.firstCol].push(a)}return n}function as(e,t){var n=[]
if(e){for(a=0;a<t;a+=1)n[a]={affectedInstances:e.affectedInstances,isEvent:e.isEvent,segs:[]}
for(var r=0,i=e.segs;r<i.length;r++){var o=i[r]
n[o.row].segs.push(o)}}else for(var a=0;a<t;a+=1)n[a]=null
return n}var ss=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this.props,t=si(this.context,e.date)
return Le(Fa,{date:e.date,dateProfile:e.dateProfile,todayRange:e.todayRange,showDayNumber:e.showDayNumber,extraHookProps:e.extraHookProps,defaultContent:ls},(function(n,r){return(r||e.forceDayTop)&&Le("div",{className:"fc-daygrid-day-top",ref:n},Le("a",i({id:e.dayNumberId,className:"fc-daygrid-day-number"},t),r||Le(Fe,null," ")))}))},t}(_i)
function ls(e){return e.dayNumberText}var us=bn({hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"narrow"})
function cs(e){var t=e.eventRange.ui.display
return"list-item"===t||"auto"===t&&!e.eventRange.def.allDay&&e.firstCol===e.lastCol&&e.isStart&&e.isEnd}var ds=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this.props
return Le(Aa,i({},e,{extraClassNames:["fc-daygrid-event","fc-daygrid-block-event","fc-h-event"],defaultTimeFormat:us,defaultDisplayEventEnd:e.defaultDisplayEventEnd,disableResizing:!e.seg.eventRange.def.allDay}))},t}(_i),fs=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=t.options.eventTimeFormat||us,r=pr(e.seg,n,t,!0,e.defaultDisplayEventEnd)
return Le(Ha,{seg:e.seg,timeText:r,defaultContent:hs,isDragging:e.isDragging,isResizing:!1,isDateSelecting:!1,isSelected:e.isSelected,isPast:e.isPast,isFuture:e.isFuture,isToday:e.isToday},(function(n,r,o,a){return Le("a",i({className:["fc-daygrid-event","fc-daygrid-dot-event"].concat(r).join(" "),ref:n},gr(e.seg,t)),a)}))},t}(_i)
function hs(e){return Le(Fe,null,Le("div",{className:"fc-daygrid-event-dot",style:{borderColor:e.borderColor||e.backgroundColor}}),e.timeText&&Le("div",{className:"fc-event-time"},e.timeText),Le("div",{className:"fc-event-title"},e.event.title||Le(Fe,null," ")))}var ps=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.compileSegs=on(vs),t}return r(t,e),t.prototype.render=function(){var e=this.props,t=this.compileSegs(e.singlePlacements),n=t.allSegs,r=t.invisibleSegs
return Le($a,{dateProfile:e.dateProfile,todayRange:e.todayRange,allDayDate:e.allDayDate,moreCnt:e.moreCnt,allSegs:n,hiddenSegs:r,alignmentElRef:e.alignmentElRef,alignGridTop:e.alignGridTop,extraDateSpan:e.extraDateSpan,popoverContent:function(){var t=(e.eventDrag?e.eventDrag.affectedInstances:null)||(e.eventResize?e.eventResize.affectedInstances:null)||{}
return Le(Fe,null,n.map((function(n){var r=n.eventRange.instance.instanceId
return Le("div",{className:"fc-daygrid-event-harness",key:r,style:{visibility:t[r]?"hidden":""}},cs(n)?Le(fs,i({seg:n,isDragging:!1,isSelected:r===e.eventSelection,defaultDisplayEventEnd:!1},vr(n,e.todayRange))):Le(ds,i({seg:n,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:r===e.eventSelection,defaultDisplayEventEnd:!1},vr(n,e.todayRange))))})))}},(function(e,t,n,r,o,a,s,l){return Le("a",i({ref:e,className:["fc-daygrid-more-link"].concat(t).join(" "),title:a,"aria-expanded":s,"aria-controls":l},ot(o)),r)}))},t}(_i)
function vs(e){for(var t=[],n=[],r=0,i=e;r<i.length;r++){var o=i[r]
t.push(o.seg),o.isVisible||n.push(o.seg)}return{allSegs:t,invisibleSegs:n}}var ms=bn({week:"narrow"}),gs=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.rootElRef=Ue(),t.state={dayNumberId:tt()},t.handleRootEl=function(e){Mi(t.rootElRef,e),Mi(t.props.elRef,e)},t}return r(t,e),t.prototype.render=function(){var e=this,t=e.context,n=e.props,r=e.state,o=e.rootElRef,a=n.date,s=n.dateProfile,l=si(t,a,"week")
return Le(za,{date:a,dateProfile:s,todayRange:n.todayRange,showDayNumber:n.showDayNumber,extraHookProps:n.extraHookProps,elRef:this.handleRootEl},(function(e,t,u,c){return Le("td",i({ref:e,role:"gridcell",className:["fc-daygrid-day"].concat(t,n.extraClassNames||[]).join(" ")},u,n.extraDataAttrs,n.showDayNumber?{"aria-labelledby":r.dayNumberId}:{}),Le("div",{className:"fc-daygrid-day-frame fc-scrollgrid-sync-inner",ref:n.innerElRef},n.showWeekNumber&&Le(Za,{date:a,defaultFormat:ms},(function(e,t,n,r){return Le("a",i({ref:e,className:["fc-daygrid-week-number"].concat(t).join(" ")},l),r)})),!c&&Le(ss,{date:a,dateProfile:s,showDayNumber:n.showDayNumber,dayNumberId:r.dayNumberId,forceDayTop:n.forceDayTop,todayRange:n.todayRange,extraHookProps:n.extraHookProps}),Le("div",{className:"fc-daygrid-day-events",ref:n.fgContentElRef},n.fgContent,Le("div",{className:"fc-daygrid-day-bottom",style:{marginTop:n.moreMarginTop}},Le(ps,{allDayDate:a,singlePlacements:n.singlePlacements,moreCnt:n.moreCnt,alignmentElRef:o,alignGridTop:!n.showDayNumber,extraDateSpan:n.extraDateSpan,dateProfile:n.dateProfile,eventSelection:n.eventSelection,eventDrag:n.eventDrag,eventResize:n.eventResize,todayRange:n.todayRange}))),Le("div",{className:"fc-daygrid-day-bg"},n.bgContent)))}))},t}(xi)
function ys(e,t,n,r,i,o,a){var s=new bs
s.allowReslicing=!0,s.strictOrder=r,!0===t||!0===n?(s.maxCoord=o,s.hiddenConsumes=!0):"number"==typeof t?s.maxStackCnt=t:"number"==typeof n&&(s.maxStackCnt=n,s.hiddenConsumes=!0)
for(var l=[],u=[],c=0;c<e.length;c+=1){var d=i[(T=e[c]).eventRange.instance.instanceId]
null!=d?l.push({index:c,thickness:d,span:{start:T.firstCol,end:T.lastCol+1}}):u.push(T)}for(var f=s.addSegs(l),h=function(e,t,n){for(var r=function(e,t){for(var n=[],r=0;r<t;r+=1)n.push([])
for(var i=0,o=e;i<o.length;i++){var a=o[i]
for(r=a.span.start;r<a.span.end;r+=1)n[r].push(a)}return n}(e,n.length),i=[],o=[],a=[],s=0;s<n.length;s+=1){for(var l=r[s],u=[],c=0,d=0,f=0,h=l;f<h.length;f++){var p=t[(y=h[f]).index]
u.push({seg:Es(p,s,s+1,n),isVisible:!0,isAbsolute:!1,absoluteTop:y.levelCoord,marginTop:y.levelCoord-c}),c=y.levelCoord+y.thickness}var v=[]
c=0,d=0
for(var m=0,g=l;m<g.length;m++){p=t[(y=g[m]).index]
var y,E=y.span.end-y.span.start>1,b=y.span.start===s
d+=y.levelCoord-c,c=y.levelCoord+y.thickness,E?(d+=y.thickness,b&&v.push({seg:Es(p,y.span.start,y.span.end,n),isVisible:!0,isAbsolute:!0,absoluteTop:y.levelCoord,marginTop:0})):b&&(v.push({seg:Es(p,y.span.start,y.span.end,n),isVisible:!0,isAbsolute:!1,absoluteTop:y.levelCoord,marginTop:d}),d=0)}i.push(u),o.push(v),a.push(d)}return{singleColPlacements:i,multiColPlacements:o,leftoverMargins:a}}(s.toRects(),e,a),p=h.singleColPlacements,v=h.multiColPlacements,m=h.leftoverMargins,g=[],y=[],E=0,b=u;E<b.length;E++){v[(T=b[E]).firstCol].push({seg:T,isVisible:!1,isAbsolute:!0,absoluteTop:0,marginTop:0})
for(var S=T.firstCol;S<=T.lastCol;S+=1)p[S].push({seg:Es(T,S,S+1,a),isVisible:!1,isAbsolute:!1,absoluteTop:0,marginTop:0})}for(S=0;S<a.length;S+=1)g.push(0)
for(var w=0,D=f;w<D.length;w++){var C=D[w],T=e[C.index],_=C.span
v[_.start].push({seg:Es(T,_.start,_.end,a),isVisible:!1,isAbsolute:!0,absoluteTop:0,marginTop:0})
for(S=_.start;S<_.end;S+=1)g[S]+=1,p[S].push({seg:Es(T,S,S+1,a),isVisible:!1,isAbsolute:!1,absoluteTop:0,marginTop:0})}for(S=0;S<a.length;S+=1)y.push(m[S])
return{singleColPlacements:p,multiColPlacements:v,moreCnts:g,moreMarginTops:y}}function Es(e,t,n,r){if(e.firstCol===t&&e.lastCol===n-1)return e
var o=e.eventRange,a=o.range,s=er(a,{start:r[t].date,end:Et(r[n-1].date,1)})
return i(i({},e),{firstCol:t,lastCol:n-1,eventRange:{def:o.def,ui:i(i({},o.ui),{durationEditable:!1}),instance:o.instance,range:s},isStart:e.isStart&&s.start.valueOf()===a.start.valueOf(),isEnd:e.isEnd&&s.end.valueOf()===a.end.valueOf()})}var bs=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.hiddenConsumes=!1,t.forceHidden={},t}return r(t,e),t.prototype.addSegs=function(t){for(var n=this,r=e.prototype.addSegs.call(this,t),i=this.entriesByLevel,o=function(e){return!n.forceHidden[Ao(e)]},a=0;a<i.length;a+=1)i[a]=i[a].filter(o)
return r},t.prototype.handleInvalidInsertion=function(t,n,r){var o=this.entriesByLevel,a=this.forceHidden,s=t.touchingEntry,l=t.touchingLevel,u=t.touchingLateral
if(this.hiddenConsumes&&s){var c=Ao(s)
if(!a[c])if(this.allowReslicing){var d=i(i({},s),{span:Lo(s.span,n.span)})
a[Ao(d)]=!0,o[l][u]=d,this.splitEntry(s,n,r)}else a[c]=!0,r.push(s)}return e.prototype.handleInvalidInsertion.call(this,t,n,r)},t}(Po),Ss=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.cellElRefs=new Ca,t.frameElRefs=new Ca,t.fgElRefs=new Ca,t.segHarnessRefs=new Ca,t.rootElRef=Ue(),t.state={framePositions:null,maxContentHeight:null,eventInstanceHeights:{}},t}return r(t,e),t.prototype.render=function(){var e=this,t=this,n=t.props,r=t.state,i=t.context.options,o=n.cells.length,a=os(n.businessHourSegs,o),s=os(n.bgEventSegs,o),l=os(this.getHighlightSegs(),o),u=os(this.getMirrorSegs(),o),c=ys(ur(n.fgEventSegs,i.eventOrder),n.dayMaxEvents,n.dayMaxEventRows,i.eventOrderStrict,r.eventInstanceHeights,r.maxContentHeight,n.cells),d=c.singleColPlacements,f=c.multiColPlacements,h=c.moreCnts,p=c.moreMarginTops,v=n.eventDrag&&n.eventDrag.affectedInstances||n.eventResize&&n.eventResize.affectedInstances||{}
return Le("tr",{ref:this.rootElRef,role:"row"},n.renderIntro&&n.renderIntro(),n.cells.map((function(t,r){var i=e.renderFgSegs(r,n.forPrint?d[r]:f[r],n.todayRange,v),o=e.renderFgSegs(r,function(e,t){if(!e.length)return[]
var n=function(e){for(var t={},n=0,r=e;n<r.length;n++)for(var i=0,o=r[n];i<o.length;i++){var a=o[i]
t[a.seg.eventRange.instance.instanceId]=a.absoluteTop}return t}(t)
return e.map((function(e){return{seg:e,isVisible:!0,isAbsolute:!0,absoluteTop:n[e.eventRange.instance.instanceId],marginTop:0}}))}(u[r],f),n.todayRange,{},Boolean(n.eventDrag),Boolean(n.eventResize),!1)
return Le(gs,{key:t.key,elRef:e.cellElRefs.createRef(t.key),innerElRef:e.frameElRefs.createRef(t.key),dateProfile:n.dateProfile,date:t.date,showDayNumber:n.showDayNumbers,showWeekNumber:n.showWeekNumbers&&0===r,forceDayTop:n.showWeekNumbers,todayRange:n.todayRange,eventSelection:n.eventSelection,eventDrag:n.eventDrag,eventResize:n.eventResize,extraHookProps:t.extraHookProps,extraDataAttrs:t.extraDataAttrs,extraClassNames:t.extraClassNames,extraDateSpan:t.extraDateSpan,moreCnt:h[r],moreMarginTop:p[r],singlePlacements:d[r],fgContentElRef:e.fgElRefs.createRef(t.key),fgContent:Le(Fe,null,Le(Fe,null,i),Le(Fe,null,o)),bgContent:Le(Fe,null,e.renderFillSegs(l[r],"highlight"),e.renderFillSegs(a[r],"non-business"),e.renderFillSegs(s[r],"bg-event"))})})))},t.prototype.componentDidMount=function(){this.updateSizing(!0)},t.prototype.componentDidUpdate=function(e,t){var n=this.props
this.updateSizing(!Ut(e,n))},t.prototype.getHighlightSegs=function(){var e=this.props
return e.eventDrag&&e.eventDrag.segs.length?e.eventDrag.segs:e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:e.dateSelectionSegs},t.prototype.getMirrorSegs=function(){var e=this.props
return e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:[]},t.prototype.renderFgSegs=function(e,t,n,r,o,a,s){var l=this.context,u=this.props.eventSelection,c=this.state.framePositions,d=1===this.props.cells.length,f=o||a||s,h=[]
if(c)for(var p=0,v=t;p<v.length;p++){var m=v[p],g=m.seg,y=g.eventRange.instance.instanceId,E=y+":"+e,b=m.isVisible&&!r[y],S=m.isAbsolute,w="",D=""
S&&(l.isRtl?(D=0,w=c.lefts[g.lastCol]-c.lefts[g.firstCol]):(w=0,D=c.rights[g.firstCol]-c.rights[g.lastCol])),h.push(Le("div",{className:"fc-daygrid-event-harness"+(S?" fc-daygrid-event-harness-abs":""),key:E,ref:f?null:this.segHarnessRefs.createRef(E),style:{visibility:b?"":"hidden",marginTop:S?"":m.marginTop,top:S?m.absoluteTop:"",left:w,right:D}},cs(g)?Le(fs,i({seg:g,isDragging:o,isSelected:y===u,defaultDisplayEventEnd:d},vr(g,n))):Le(ds,i({seg:g,isDragging:o,isResizing:a,isDateSelecting:s,isSelected:y===u,defaultDisplayEventEnd:d},vr(g,n)))))}return h},t.prototype.renderFillSegs=function(e,t){var n=this.context.isRtl,r=this.props.todayRange,a=this.state.framePositions,s=[]
if(a)for(var l=0,u=e;l<u.length;l++){var c=u[l],d=n?{right:0,left:a.lefts[c.lastCol]-a.lefts[c.firstCol]}:{left:0,right:a.rights[c.firstCol]-a.rights[c.lastCol]}
s.push(Le("div",{key:mr(c.eventRange),className:"fc-daygrid-bg-harness",style:d},"bg-event"===t?Le(Ba,i({seg:c},vr(c,r))):ja(t)))}return Le.apply(void 0,o([Fe,{}],s))},t.prototype.updateSizing=function(e){var t=this.props,n=this.frameElRefs
if(!t.forPrint&&null!==t.clientWidth){if(e){var r=t.cells.map((function(e){return n.currentMap[e.key]}))
if(r.length){var o=this.rootElRef.current
this.setState({framePositions:new gi(o,r,!0,!1)})}}var a=this.state.eventInstanceHeights,s=this.queryEventInstanceHeights(),l=!0===t.dayMaxEvents||!0===t.dayMaxEventRows
this.safeSetState({eventInstanceHeights:i(i({},a),s),maxContentHeight:l?this.computeMaxContentHeight():null})}},t.prototype.queryEventInstanceHeights=function(){var e=this.segHarnessRefs.currentMap,t={}
for(var n in e){var r=Math.round(e[n].getBoundingClientRect().height),i=n.split(":")[0]
t[i]=Math.max(t[i]||0,r)}return t},t.prototype.computeMaxContentHeight=function(){var e=this.props.cells[0].key,t=this.cellElRefs.currentMap[e],n=this.fgElRefs.currentMap[e]
return t.getBoundingClientRect().bottom-n.getBoundingClientRect().top},t.prototype.getCellEls=function(){var e=this.cellElRefs.currentMap
return this.props.cells.map((function(t){return e[t.key]}))},t}(xi)
Ss.addStateEquality({eventInstanceHeights:Ut})
var ws=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.splitBusinessHourSegs=on(is),t.splitBgEventSegs=on(is),t.splitFgEventSegs=on(is),t.splitDateSelectionSegs=on(is),t.splitEventDrag=on(as),t.splitEventResize=on(as),t.rowRefs=new Ca,t.handleRootEl=function(e){t.rootEl=e,e?t.context.registerInteractiveComponent(t,{el:e,isHitComboAllowed:t.props.isHitComboAllowed}):t.context.unregisterInteractiveComponent(t)},t}return r(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.dateProfile,r=t.dayMaxEventRows,i=t.dayMaxEvents,o=t.expandRows,a=t.cells.length,s=this.splitBusinessHourSegs(t.businessHourSegs,a),l=this.splitBgEventSegs(t.bgEventSegs,a),u=this.splitFgEventSegs(t.fgEventSegs,a),c=this.splitDateSelectionSegs(t.dateSelectionSegs,a),d=this.splitEventDrag(t.eventDrag,a),f=this.splitEventResize(t.eventResize,a),h=!0===i||!0===r
return h&&!o&&(h=!1,r=null,i=null),Le("div",{className:["fc-daygrid-body",h?"fc-daygrid-body-balanced":"fc-daygrid-body-unbalanced",o?"":"fc-daygrid-body-natural"].join(" "),ref:this.handleRootEl,style:{width:t.clientWidth,minWidth:t.tableMinWidth}},Le(sa,{unit:"day"},(function(h,p){return Le(Fe,null,Le("table",{role:"presentation",className:"fc-scrollgrid-sync-table",style:{width:t.clientWidth,minWidth:t.tableMinWidth,height:o?t.clientHeight:""}},t.colGroupNode,Le("tbody",{role:"presentation"},t.cells.map((function(o,h){return Le(Ss,{ref:e.rowRefs.createRef(h),key:o.length?o[0].date.toISOString():h,showDayNumbers:a>1,showWeekNumbers:t.showWeekNumbers,todayRange:p,dateProfile:n,cells:o,renderIntro:t.renderRowIntro,businessHourSegs:s[h],eventSelection:t.eventSelection,bgEventSegs:l[h].filter(Ds),fgEventSegs:u[h],dateSelectionSegs:c[h],eventDrag:d[h],eventResize:f[h],dayMaxEvents:i,dayMaxEventRows:r,clientWidth:t.clientWidth,clientHeight:t.clientHeight,forPrint:t.forPrint})})))))})))},t.prototype.prepareHits=function(){this.rowPositions=new gi(this.rootEl,this.rowRefs.collect().map((function(e){return e.getCellEls()[0]})),!1,!0),this.colPositions=new gi(this.rootEl,this.rowRefs.currentMap[0].getCellEls(),!0,!1)},t.prototype.queryHit=function(e,t){var n=this.colPositions,r=this.rowPositions,o=n.leftToIndex(e),a=r.topToIndex(t)
if(null!=a&&null!=o){var s=this.props.cells[a][o]
return{dateProfile:this.props.dateProfile,dateSpan:i({range:this.getCellRange(a,o),allDay:!0},s.extraDateSpan),dayEl:this.getCellEl(a,o),rect:{left:n.lefts[o],right:n.rights[o],top:r.tops[a],bottom:r.bottoms[a]},layer:0}}return null},t.prototype.getCellEl=function(e,t){return this.rowRefs.currentMap[e].getCellEls()[t]},t.prototype.getCellRange=function(e,t){var n=this.props.cells[e][t].date
return{start:n,end:Et(n,1)}},t}(xi)
function Ds(e){return e.eventRange.def.allDay}var Cs=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.forceDayIfListItem=!0,t}return r(t,e),t.prototype.sliceRange=function(e,t){return t.sliceRange(e)},t}(ha),Ts=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.slicer=new Cs,t.tableRef=Ue(),t}return r(t,e),t.prototype.render=function(){var e=this.props,t=this.context
return Le(ws,i({ref:this.tableRef},this.slicer.sliceProps(e,e.dateProfile,e.nextDayThreshold,t,e.dayTableModel),{dateProfile:e.dateProfile,cells:e.dayTableModel.cells,colGroupNode:e.colGroupNode,tableMinWidth:e.tableMinWidth,renderRowIntro:e.renderRowIntro,dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,showWeekNumbers:e.showWeekNumbers,expandRows:e.expandRows,headerAlignElRef:e.headerAlignElRef,clientWidth:e.clientWidth,clientHeight:e.clientHeight,forPrint:e.forPrint}))},t}(xi)
function _s(e,t){var n=new da(e.renderRange,t)
return new fa(n,/year|month|week/.test(e.currentRangeUnit))}const ks=Ii({initialView:"dayGridMonth",views:{dayGrid:{component:function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.buildDayTableModel=on(_s),t.headerRef=Ue(),t.tableRef=Ue(),t}return r(t,e),t.prototype.render=function(){var e=this,t=this.context,n=t.options,r=t.dateProfileGenerator,i=this.props,o=this.buildDayTableModel(i.dateProfile,r),a=n.dayHeaders&&Le(ua,{ref:this.headerRef,dateProfile:i.dateProfile,dates:o.headerDates,datesRepDistinctDays:1===o.rowCnt}),s=function(t){return Le(Ts,{ref:e.tableRef,dateProfile:i.dateProfile,dayTableModel:o,businessHours:i.businessHours,dateSelection:i.dateSelection,eventStore:i.eventStore,eventUiBases:i.eventUiBases,eventSelection:i.eventSelection,eventDrag:i.eventDrag,eventResize:i.eventResize,nextDayThreshold:n.nextDayThreshold,colGroupNode:t.tableColGroupNode,tableMinWidth:t.tableMinWidth,dayMaxEvents:n.dayMaxEvents,dayMaxEventRows:n.dayMaxEventRows,showWeekNumbers:n.weekNumbers,expandRows:!i.isHeightAuto,headerAlignElRef:e.headerElRef,clientWidth:t.clientWidth,clientHeight:t.clientHeight,forPrint:i.forPrint})}
return n.dayMinWidth?this.renderHScrollLayout(a,s,o.colCnt,n.dayMinWidth):this.renderSimpleLayout(a,s)},t}(rs),dateProfileGeneratorClass:function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.buildRenderRange=function(t,n,r){var i,o=this.props.dateEnv,a=e.prototype.buildRenderRange.call(this,t,n,r),s=a.start,l=a.end;(/^(year|month)$/.test(n)&&(s=o.startOfWeek(s),(i=o.startOfWeek(l)).valueOf()!==l.valueOf()&&(l=yt(i,1))),this.props.monthMode&&this.props.fixedWeekCount)&&(l=yt(l,6-Math.ceil(St(s,l)/7)))
return{start:s,end:l}},t}(Yi)},dayGridDay:{type:"dayGrid",duration:{days:1}},dayGridWeek:{type:"dayGrid",duration:{weeks:1}},dayGridMonth:{type:"dayGrid",duration:{months:1},monthMode:!0,fixedWeekCount:!0}}})
var Rs=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.getKeyInfo=function(){return{allDay:{},timed:{}}},t.prototype.getKeysForDateSpan=function(e){return e.allDay?["allDay"]:["timed"]},t.prototype.getKeysForEventDef=function(e){return e.allDay?"background"===(t=e).ui.display||"inverse-background"===t.ui.display?["timed","allDay"]:["allDay"]:["timed"]
var t},t}(ti),Ms=bn({hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"short"})
function xs(e){var t=["fc-timegrid-slot","fc-timegrid-slot-label",e.isLabeled?"fc-scrollgrid-shrink":"fc-timegrid-slot-minor"]
return Le(Di.Consumer,null,(function(n){if(!e.isLabeled)return Le("td",{className:t.join(" "),"data-time":e.isoTimeStr})
var r=n.dateEnv,i=n.options,o=n.viewApi,a=null==i.slotLabelFormat?Ms:Array.isArray(i.slotLabelFormat)?bn(i.slotLabelFormat[0]):bn(i.slotLabelFormat),s={level:0,time:e.time,date:r.toDate(e.date),view:o,text:r.format(e.date,a)}
return Le(Hi,{hookProps:s,classNames:i.slotLabelClassNames,content:i.slotLabelContent,defaultContent:Is,didMount:i.slotLabelDidMount,willUnmount:i.slotLabelWillUnmount},(function(n,r,i,o){return Le("td",{ref:n,className:t.concat(r).join(" "),"data-time":e.isoTimeStr},Le("div",{className:"fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame"},Le("div",{className:"fc-timegrid-slot-label-cushion fc-scrollgrid-shrink-cushion",ref:i},o)))}))}))}function Is(e){return e.text}var Ns=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){return this.props.slatMetas.map((function(e){return Le("tr",{key:e.key},Le(xs,i({},e)))}))},t}(_i),Os=bn({week:"short"}),Ps=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.allDaySplitter=new Rs,t.headerElRef=Ue(),t.rootElRef=Ue(),t.scrollerElRef=Ue(),t.state={slatCoords:null},t.handleScrollTopRequest=function(e){var n=t.scrollerElRef.current
n&&(n.scrollTop=e)},t.renderHeadAxis=function(e,n){void 0===n&&(n="")
var r=t.context.options,o=t.props.dateProfile.renderRange,a=1===St(o.start,o.end)?si(t.context,o.start,"week"):{}
return r.weekNumbers&&"day"===e?Le(Za,{date:o.start,defaultFormat:Os},(function(e,t,r,o){return Le("th",{ref:e,"aria-hidden":!0,className:["fc-timegrid-axis","fc-scrollgrid-shrink"].concat(t).join(" ")},Le("div",{className:"fc-timegrid-axis-frame fc-scrollgrid-shrink-frame fc-timegrid-axis-frame-liquid",style:{height:n}},Le("a",i({ref:r,className:"fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner"},a),o)))})):Le("th",{"aria-hidden":!0,className:"fc-timegrid-axis"},Le("div",{className:"fc-timegrid-axis-frame",style:{height:n}}))},t.renderTableRowAxis=function(e){var n=t.context,r=n.options,i=n.viewApi,o={text:r.allDayText,view:i}
return Le(Hi,{hookProps:o,classNames:r.allDayClassNames,content:r.allDayContent,defaultContent:Hs,didMount:r.allDayDidMount,willUnmount:r.allDayWillUnmount},(function(t,n,r,i){return Le("td",{ref:t,"aria-hidden":!0,className:["fc-timegrid-axis","fc-scrollgrid-shrink"].concat(n).join(" ")},Le("div",{className:"fc-timegrid-axis-frame fc-scrollgrid-shrink-frame"+(null==e?" fc-timegrid-axis-frame-liquid":""),style:{height:e}},Le("span",{className:"fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner",ref:r},i)))}))},t.handleSlatCoords=function(e){t.setState({slatCoords:e})},t}return r(t,e),t.prototype.renderSimpleLayout=function(e,t,n){var r=this.context,i=this.props,o=[],a=Na(r.options)
return e&&o.push({type:"header",key:"header",isSticky:a,chunk:{elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}}),t&&(o.push({type:"body",key:"all-day",chunk:{content:t}}),o.push({type:"body",key:"all-day-divider",outerContent:Le("tr",{role:"presentation",className:"fc-scrollgrid-section"},Le("td",{className:"fc-timegrid-divider "+r.theme.getClass("tableCellShaded")}))})),o.push({type:"body",key:"body",liquid:!0,expandRows:Boolean(r.options.expandRows),chunk:{scrollerElRef:this.scrollerElRef,content:n}}),Le(ji,{viewSpec:r.viewSpec,elRef:this.rootElRef},(function(e,t){return Le("div",{className:["fc-timegrid"].concat(t).join(" "),ref:e},Le(Pa,{liquid:!i.isHeightAuto&&!i.forPrint,collapsibleWidth:i.forPrint,cols:[{width:"shrink"}],sections:o}))}))},t.prototype.renderHScrollLayout=function(e,t,n,r,i,o,a){var s=this,l=this.context.pluginHooks.scrollGridImpl
if(!l)throw new Error("No ScrollGrid implementation")
var u=this.context,c=this.props,d=!c.forPrint&&Na(u.options),f=!c.forPrint&&Oa(u.options),h=[]
e&&h.push({type:"header",key:"header",isSticky:d,syncRowHeights:!0,chunks:[{key:"axis",rowContent:function(e){return Le("tr",{role:"presentation"},s.renderHeadAxis("day",e.rowSyncHeights[0]))}},{key:"cols",elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}]}),t&&(h.push({type:"body",key:"all-day",syncRowHeights:!0,chunks:[{key:"axis",rowContent:function(e){return Le("tr",{role:"presentation"},s.renderTableRowAxis(e.rowSyncHeights[0]))}},{key:"cols",content:t}]}),h.push({key:"all-day-divider",type:"body",outerContent:Le("tr",{role:"presentation",className:"fc-scrollgrid-section"},Le("td",{colSpan:2,className:"fc-timegrid-divider "+u.theme.getClass("tableCellShaded")}))}))
var p=u.options.nowIndicator
return h.push({type:"body",key:"body",liquid:!0,expandRows:Boolean(u.options.expandRows),chunks:[{key:"axis",content:function(e){return Le("div",{className:"fc-timegrid-axis-chunk"},Le("table",{"aria-hidden":!0,style:{height:e.expandRows?e.clientHeight:""}},e.tableColGroupNode,Le("tbody",null,Le(Ns,{slatMetas:o}))),Le("div",{className:"fc-timegrid-now-indicator-container"},Le(sa,{unit:p?"minute":"day"},(function(e){var t=p&&a&&a.safeComputeTop(e)
return"number"==typeof t?Le(Va,{isAxis:!0,date:e},(function(e,n,r,i){return Le("div",{ref:e,className:["fc-timegrid-now-indicator-arrow"].concat(n).join(" "),style:{top:t}},i)})):null}))))}},{key:"cols",scrollerElRef:this.scrollerElRef,content:n}]}),f&&h.push({key:"footer",type:"footer",isSticky:!0,chunks:[{key:"axis",content:Ia},{key:"cols",content:Ia}]}),Le(ji,{viewSpec:u.viewSpec,elRef:this.rootElRef},(function(e,t){return Le("div",{className:["fc-timegrid"].concat(t).join(" "),ref:e},Le(l,{liquid:!c.isHeightAuto&&!c.forPrint,collapsibleWidth:!1,colGroups:[{width:"shrink",cols:[{width:"shrink"}]},{cols:[{span:r,minWidth:i}]}],sections:h}))}))},t.prototype.getAllDayMaxEventProps=function(){var e=this.context.options,t=e.dayMaxEvents,n=e.dayMaxEventRows
return!0!==t&&!0!==n||(t=void 0,n=5),{dayMaxEvents:t,dayMaxEventRows:n}},t}(xi)
function Hs(e){return e.text}var As=function(){function e(e,t,n){this.positions=e,this.dateProfile=t,this.slotDuration=n}return e.prototype.safeComputeTop=function(e){var t=this.dateProfile
if(rr(t.currentRange,e)){var n=Dt(e),r=e.valueOf()-n.valueOf()
if(r>=Jt(t.slotMinTime)&&r<Jt(t.slotMaxTime))return this.computeTimeTop(Gt(r))}return null},e.prototype.computeDateTop=function(e,t){return t||(t=Dt(e)),this.computeTimeTop(Gt(e.valueOf()-t.valueOf()))},e.prototype.computeTimeTop=function(e){var t,n,r=this.positions,i=this.dateProfile,o=r.els.length,a=(e.milliseconds-Jt(i.slotMinTime))/Jt(this.slotDuration)
return a=Math.max(0,a),a=Math.min(o,a),t=Math.floor(a),n=a-(t=Math.min(t,o-1)),r.tops[t]+r.getHeight(t)*n},e}(),Ls=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=t.options,r=e.slatElRefs
return Le("tbody",null,e.slatMetas.map((function(o,a){var s={time:o.time,date:t.dateEnv.toDate(o.date),view:t.viewApi},l=["fc-timegrid-slot","fc-timegrid-slot-lane",o.isLabeled?"":"fc-timegrid-slot-minor"]
return Le("tr",{key:o.key,ref:r.createRef(o.key)},e.axis&&Le(xs,i({},o)),Le(Hi,{hookProps:s,classNames:n.slotLaneClassNames,content:n.slotLaneContent,didMount:n.slotLaneDidMount,willUnmount:n.slotLaneWillUnmount},(function(e,t,n,r){return Le("td",{ref:e,className:l.concat(t).join(" "),"data-time":o.isoTimeStr},r)})))})))},t}(_i),Vs=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.rootElRef=Ue(),t.slatElRefs=new Ca,t}return r(t,e),t.prototype.render=function(){var e=this.props,t=this.context
return Le("div",{ref:this.rootElRef,className:"fc-timegrid-slots"},Le("table",{"aria-hidden":!0,className:t.theme.getClass("table"),style:{minWidth:e.tableMinWidth,width:e.clientWidth,height:e.minHeight}},e.tableColGroupNode,Le(Ls,{slatElRefs:this.slatElRefs,axis:e.axis,slatMetas:e.slatMetas})))},t.prototype.componentDidMount=function(){this.updateSizing()},t.prototype.componentDidUpdate=function(){this.updateSizing()},t.prototype.componentWillUnmount=function(){this.props.onCoords&&this.props.onCoords(null)},t.prototype.updateSizing=function(){var e,t=this.context,n=this.props
n.onCoords&&null!==n.clientWidth&&(this.rootElRef.current.offsetHeight&&n.onCoords(new As(new gi(this.rootElRef.current,(e=this.slatElRefs.currentMap,n.slatMetas.map((function(t){return e[t.key]}))),!1,!0),this.props.dateProfile,t.options.slotDuration)))},t}(_i)
function Us(e,t){var n,r=[]
for(n=0;n<t;n+=1)r.push([])
if(e)for(n=0;n<e.length;n+=1)r[e[n].col].push(e[n])
return r}function Fs(e,t){var n=[]
if(e){for(a=0;a<t;a+=1)n[a]={affectedInstances:e.affectedInstances,isEvent:e.isEvent,segs:[]}
for(var r=0,i=e.segs;r<i.length;r++){var o=i[r]
n[o.col].segs.push(o)}}else for(var a=0;a<t;a+=1)n[a]=null
return n}var Ws=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.rootElRef=Ue(),t}return r(t,e),t.prototype.render=function(){var e=this,t=this.props
return Le($a,{allDayDate:null,moreCnt:t.hiddenSegs.length,allSegs:t.hiddenSegs,hiddenSegs:t.hiddenSegs,alignmentElRef:this.rootElRef,defaultContent:zs,extraDateSpan:t.extraDateSpan,dateProfile:t.dateProfile,todayRange:t.todayRange,popoverContent:function(){return Qs(t.hiddenSegs,t)}},(function(n,r,i,o,a,s,l,u){return Le("a",{ref:function(t){Mi(n,t),Mi(e.rootElRef,t)},className:["fc-timegrid-more-link"].concat(r).join(" "),style:{top:t.top,bottom:t.bottom},onClick:a,title:s,"aria-expanded":l,"aria-controls":u},Le("div",{ref:i,className:"fc-timegrid-more-link-inner fc-sticky"},o))}))},t}(_i)
function zs(e){return e.shortText}function js(e,t,n){var r=new Po
null!=t&&(r.strictOrder=t),null!=n&&(r.maxStackCnt=n)
var o,a,s,l=function(e){for(var t,n,r=[],i=0,o=e;i<o.length;i++){for(var a=o[i],s=[],l={span:a.span,entries:[a]},u=0,c=r;u<c.length;u++){var d=c[u]
Lo(d.span,l.span)?l={entries:d.entries.concat(l.entries),span:(t=d.span,n=l.span,{start:Math.min(t.start,n.start),end:Math.max(t.end,n.end)})}:s.push(d)}s.push(l),r=s}return r}(r.addSegs(e)),u=function(e){var t=e.entriesByLevel,n=Gs((function(e,t){return e+":"+t}),(function(r,o){var a=function(e,t,n){for(var r=e.levelCoords,i=e.entriesByLevel,o=i[t][n],a=r[t]+o.thickness,s=r.length,l=t;l<s&&r[l]<a;l+=1);for(;l<s;l+=1){for(var u=i[l],c=void 0,d=Uo(u,o.span.start,Ho),f=d[0]+d[1],h=f;(c=u[h])&&c.span.start<o.span.end;)h+=1
if(f<h)return{level:l,lateralStart:f,lateralEnd:h}}return null}(e,r,o),s=Bs(a,n),l=t[r][o]
return[i(i({},l),{nextLevelNodes:s[0]}),l.thickness+s[1]]}))
return Bs(t.length?{level:0,lateralStart:0,lateralEnd:t[0].length}:null,n)[0]}(r)
return o=u,a=1,s=Gs((function(e,t,n){return Ao(e)}),(function(e,t,n){var r,o=e.nextLevelNodes,l=e.thickness,u=l+n,c=l/u,d=[]
if(o.length)for(var f=0,h=o;f<h.length;f++){var p=h[f]
if(void 0===r)r=(v=s(p,t,u))[0],d.push(v[1])
else{var v=s(p,r,0)
d.push(v[1])}}else r=a
var m=(r-t)*c
return[r-m,i(i({},e),{thickness:m,nextLevelNodes:d})]})),{segRects:function(e){var t=[],n=Gs((function(e,t,n){return Ao(e)}),(function(e,n,o){var a=i(i({},e),{levelCoord:n,stackDepth:o,stackForward:0})
return t.push(a),a.stackForward=r(e.nextLevelNodes,n+e.thickness,o+1)+1}))
function r(e,t,r){for(var i=0,o=0,a=e;o<a.length;o++){var s=a[o]
i=Math.max(n(s,t,r),i)}return i}return r(e,0,0),t}(u=o.map((function(e){return s(e,0,0)[1]}))),hiddenGroups:l}}function Bs(e,t){if(!e)return[[],0]
for(var n=e.level,r=e.lateralStart,i=e.lateralEnd,o=r,a=[];o<i;)a.push(t(n,o)),o+=1
return a.sort(qs),[a.map(Zs),a[0][1]]}function qs(e,t){return t[1]-e[1]}function Zs(e){return e[0]}function Gs(e,t){var n={}
return function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i]
var o=e.apply(void 0,r)
return o in n?n[o]:n[o]=t.apply(void 0,r)}}function Ys(e,t,n,r){void 0===n&&(n=null),void 0===r&&(r=0)
var i=[]
if(n)for(var o=0;o<e.length;o+=1){var a=e[o],s=n.computeDateTop(a.start,t),l=Math.max(s+(r||0),n.computeDateTop(a.end,t))
i.push({start:Math.round(s),end:Math.round(l)})}return i}var Xs=bn({hour:"numeric",minute:"2-digit",meridiem:!1}),$s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=["fc-timegrid-event","fc-v-event"]
return this.props.isShort&&e.push("fc-timegrid-event-short"),Le(Aa,i({},this.props,{defaultTimeFormat:Xs,extraClassNames:e}))},t}(_i),Js=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this.props
return Le(Fa,{date:e.date,dateProfile:e.dateProfile,todayRange:e.todayRange,extraHookProps:e.extraHookProps},(function(e,t){return t&&Le("div",{className:"fc-timegrid-col-misc",ref:e},t)}))},t}(_i),Ks=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.sortEventSegs=on(ur),t}return r(t,e),t.prototype.render=function(){var e=this,t=this.props,n=this.context,r=n.options.selectMirror,o=t.eventDrag&&t.eventDrag.segs||t.eventResize&&t.eventResize.segs||r&&t.dateSelectionSegs||[],a=t.eventDrag&&t.eventDrag.affectedInstances||t.eventResize&&t.eventResize.affectedInstances||{},s=this.sortEventSegs(t.fgEventSegs,n.options.eventOrder)
return Le(za,{elRef:t.elRef,date:t.date,dateProfile:t.dateProfile,todayRange:t.todayRange,extraHookProps:t.extraHookProps},(function(n,l,u){return Le("td",i({ref:n,role:"gridcell",className:["fc-timegrid-col"].concat(l,t.extraClassNames||[]).join(" ")},u,t.extraDataAttrs),Le("div",{className:"fc-timegrid-col-frame"},Le("div",{className:"fc-timegrid-col-bg"},e.renderFillSegs(t.businessHourSegs,"non-business"),e.renderFillSegs(t.bgEventSegs,"bg-event"),e.renderFillSegs(t.dateSelectionSegs,"highlight")),Le("div",{className:"fc-timegrid-col-events"},e.renderFgSegs(s,a,!1,!1,!1)),Le("div",{className:"fc-timegrid-col-events"},e.renderFgSegs(o,{},Boolean(t.eventDrag),Boolean(t.eventResize),Boolean(r))),Le("div",{className:"fc-timegrid-now-indicator-container"},e.renderNowIndicator(t.nowIndicatorSegs)),Le(Js,{date:t.date,dateProfile:t.dateProfile,todayRange:t.todayRange,extraHookProps:t.extraHookProps})))}))},t.prototype.renderFgSegs=function(e,t,n,r,i){var o=this.props
return o.forPrint?Qs(e,o):this.renderPositionedFgSegs(e,t,n,r,i)},t.prototype.renderPositionedFgSegs=function(e,t,n,r,o){var a=this,s=this.context.options,l=s.eventMaxStack,u=s.eventShortHeight,c=s.eventOrderStrict,d=s.eventMinHeight,f=this.props,h=f.date,p=f.slatCoords,v=f.eventSelection,m=f.todayRange,g=f.nowDate,y=n||r||o,E=function(e,t,n,r){for(var i=[],o=[],a=0;a<e.length;a+=1){var s=t[a]
s?i.push({index:a,thickness:1,span:s}):o.push(e[a])}for(var l=js(i,n,r),u=l.segRects,c=l.hiddenGroups,d=[],f=0,h=u;f<h.length;f++){var p=h[f]
d.push({seg:e[p.index],rect:p})}for(var v=0,m=o;v<m.length;v++){var g=m[v]
d.push({seg:g,rect:null})}return{segPlacements:d,hiddenGroups:c}}(e,Ys(e,h,p,d),c,l),b=E.segPlacements,S=E.hiddenGroups
return Le(Fe,null,this.renderHiddenGroups(S,e),b.map((function(e){var s=e.seg,l=e.rect,c=s.eventRange.instance.instanceId,d=y||Boolean(!t[c]&&l),f=el(l&&l.span),h=!y&&l?a.computeSegHStyle(l):{left:0,right:0},p=Boolean(l)&&l.stackForward>0,E=Boolean(l)&&l.span.end-l.span.start<u
return Le("div",{className:"fc-timegrid-event-harness"+(p?" fc-timegrid-event-harness-inset":""),key:c,style:i(i({visibility:d?"":"hidden"},f),h)},Le($s,i({seg:s,isDragging:n,isResizing:r,isDateSelecting:o,isSelected:c===v,isShort:E},vr(s,m,g))))})))},t.prototype.renderHiddenGroups=function(e,t){var n=this.props,r=n.extraDateSpan,i=n.dateProfile,o=n.todayRange,a=n.nowDate,s=n.eventSelection,l=n.eventDrag,u=n.eventResize
return Le(Fe,null,e.map((function(e){var n,c,d=el(e.span),f=(n=e.entries,c=t,n.map((function(e){return c[e.index]})))
return Le(Ws,{key:en(Qa(f)),hiddenSegs:f,top:d.top,bottom:d.bottom,extraDateSpan:r,dateProfile:i,todayRange:o,nowDate:a,eventSelection:s,eventDrag:l,eventResize:u})})))},t.prototype.renderFillSegs=function(e,t){var n=this.props,r=this.context,o=Ys(e,n.date,n.slatCoords,r.options.eventMinHeight).map((function(r,o){var a=e[o]
return Le("div",{key:mr(a.eventRange),className:"fc-timegrid-bg-harness",style:el(r)},"bg-event"===t?Le(Ba,i({seg:a},vr(a,n.todayRange,n.nowDate))):ja(t))}))
return Le(Fe,null,o)},t.prototype.renderNowIndicator=function(e){var t=this.props,n=t.slatCoords,r=t.date
return n?e.map((function(e,t){return Le(Va,{isAxis:!1,date:r,key:t},(function(t,i,o,a){return Le("div",{ref:t,className:["fc-timegrid-now-indicator-line"].concat(i).join(" "),style:{top:n.computeDateTop(e.start,r)}},a)}))})):null},t.prototype.computeSegHStyle=function(e){var t,n,r=this.context,i=r.isRtl,o=r.options.slotEventOverlap,a=e.levelCoord,s=e.levelCoord+e.thickness
o&&(s=Math.min(1,a+2*(s-a))),i?(t=1-s,n=a):(t=a,n=1-s)
var l={zIndex:e.stackDepth+1,left:100*t+"%",right:100*n+"%"}
return o&&!e.stackForward&&(l[i?"marginLeft":"marginRight"]=20),l},t}(_i)
function Qs(e,t){var n=t.todayRange,r=t.nowDate,o=t.eventSelection,a=t.eventDrag,s=t.eventResize,l=(a?a.affectedInstances:null)||(s?s.affectedInstances:null)||{}
return Le(Fe,null,e.map((function(e){var t=e.eventRange.instance.instanceId
return Le("div",{key:t,style:{visibility:l[t]?"hidden":""}},Le($s,i({seg:e,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:t===o,isShort:!1},vr(e,n,r))))})))}function el(e){return e?{top:e.start,bottom:-e.end}:{top:"",bottom:""}}var tl=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.splitFgEventSegs=on(Us),t.splitBgEventSegs=on(Us),t.splitBusinessHourSegs=on(Us),t.splitNowIndicatorSegs=on(Us),t.splitDateSelectionSegs=on(Us),t.splitEventDrag=on(Fs),t.splitEventResize=on(Fs),t.rootElRef=Ue(),t.cellElRefs=new Ca,t}return r(t,e),t.prototype.render=function(){var e=this,t=this.props,n=this.context.options.nowIndicator&&t.slatCoords&&t.slatCoords.safeComputeTop(t.nowDate),r=t.cells.length,i=this.splitFgEventSegs(t.fgEventSegs,r),o=this.splitBgEventSegs(t.bgEventSegs,r),a=this.splitBusinessHourSegs(t.businessHourSegs,r),s=this.splitNowIndicatorSegs(t.nowIndicatorSegs,r),l=this.splitDateSelectionSegs(t.dateSelectionSegs,r),u=this.splitEventDrag(t.eventDrag,r),c=this.splitEventResize(t.eventResize,r)
return Le("div",{className:"fc-timegrid-cols",ref:this.rootElRef},Le("table",{role:"presentation",style:{minWidth:t.tableMinWidth,width:t.clientWidth}},t.tableColGroupNode,Le("tbody",{role:"presentation"},Le("tr",{role:"row"},t.axis&&Le("td",{"aria-hidden":!0,className:"fc-timegrid-col fc-timegrid-axis"},Le("div",{className:"fc-timegrid-col-frame"},Le("div",{className:"fc-timegrid-now-indicator-container"},"number"==typeof n&&Le(Va,{isAxis:!0,date:t.nowDate},(function(e,t,r,i){return Le("div",{ref:e,className:["fc-timegrid-now-indicator-arrow"].concat(t).join(" "),style:{top:n}},i)}))))),t.cells.map((function(n,r){return Le(Ks,{key:n.key,elRef:e.cellElRefs.createRef(n.key),dateProfile:t.dateProfile,date:n.date,nowDate:t.nowDate,todayRange:t.todayRange,extraHookProps:n.extraHookProps,extraDataAttrs:n.extraDataAttrs,extraClassNames:n.extraClassNames,extraDateSpan:n.extraDateSpan,fgEventSegs:i[r],bgEventSegs:o[r],businessHourSegs:a[r],nowIndicatorSegs:s[r],dateSelectionSegs:l[r],eventDrag:u[r],eventResize:c[r],slatCoords:t.slatCoords,eventSelection:t.eventSelection,forPrint:t.forPrint})}))))))},t.prototype.componentDidMount=function(){this.updateCoords()},t.prototype.componentDidUpdate=function(){this.updateCoords()},t.prototype.updateCoords=function(){var e,t=this.props
t.onColCoords&&null!==t.clientWidth&&t.onColCoords(new gi(this.rootElRef.current,(e=this.cellElRefs.currentMap,t.cells.map((function(t){return e[t.key]}))),!0,!1))},t}(_i)
var nl=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.processSlotOptions=on(rl),t.state={slatCoords:null},t.handleRootEl=function(e){e?t.context.registerInteractiveComponent(t,{el:e,isHitComboAllowed:t.props.isHitComboAllowed}):t.context.unregisterInteractiveComponent(t)},t.handleScrollRequest=function(e){var n=t.props.onScrollTopRequest,r=t.state.slatCoords
if(n&&r){if(e.time){var i=r.computeTimeTop(e.time);(i=Math.ceil(i))&&(i+=1),n(i)}return!0}return!1},t.handleColCoords=function(e){t.colCoords=e},t.handleSlatCoords=function(e){t.setState({slatCoords:e}),t.props.onSlatCoords&&t.props.onSlatCoords(e)},t}return r(t,e),t.prototype.render=function(){var e=this.props,t=this.state
return Le("div",{className:"fc-timegrid-body",ref:this.handleRootEl,style:{width:e.clientWidth,minWidth:e.tableMinWidth}},Le(Vs,{axis:e.axis,dateProfile:e.dateProfile,slatMetas:e.slatMetas,clientWidth:e.clientWidth,minHeight:e.expandRows?e.clientHeight:"",tableMinWidth:e.tableMinWidth,tableColGroupNode:e.axis?e.tableColGroupNode:null,onCoords:this.handleSlatCoords}),Le(tl,{cells:e.cells,axis:e.axis,dateProfile:e.dateProfile,businessHourSegs:e.businessHourSegs,bgEventSegs:e.bgEventSegs,fgEventSegs:e.fgEventSegs,dateSelectionSegs:e.dateSelectionSegs,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,todayRange:e.todayRange,nowDate:e.nowDate,nowIndicatorSegs:e.nowIndicatorSegs,clientWidth:e.clientWidth,tableMinWidth:e.tableMinWidth,tableColGroupNode:e.tableColGroupNode,slatCoords:t.slatCoords,onColCoords:this.handleColCoords,forPrint:e.forPrint}))},t.prototype.componentDidMount=function(){this.scrollResponder=this.context.createScrollResponder(this.handleScrollRequest)},t.prototype.componentDidUpdate=function(e){this.scrollResponder.update(e.dateProfile!==this.props.dateProfile)},t.prototype.componentWillUnmount=function(){this.scrollResponder.detach()},t.prototype.queryHit=function(e,t){var n=this.context,r=n.dateEnv,o=n.options,a=this.colCoords,s=this.props.dateProfile,l=this.state.slatCoords,u=this.processSlotOptions(this.props.slotDuration,o.snapDuration),c=u.snapDuration,d=u.snapsPerSlot,f=a.leftToIndex(e),h=l.positions.topToIndex(t)
if(null!=f&&null!=h){var p=this.props.cells[f],v=l.positions.tops[h],m=l.positions.getHeight(h),g=(t-v)/m,y=h*d+Math.floor(g*d),E=this.props.cells[f].date,b=Xt(s.slotMinTime,function(e,t){return{years:e.years*t,months:e.months*t,days:e.days*t,milliseconds:e.milliseconds*t}}(c,y)),S=r.add(E,b),w=r.add(S,c)
return{dateProfile:s,dateSpan:i({range:{start:S,end:w},allDay:!1},p.extraDateSpan),dayEl:a.els[f],rect:{left:a.lefts[f],right:a.rights[f],top:v,bottom:v+m},layer:0}}return null},t}(xi)
function rl(e,t){var n=t||e,r=Kt(e,n)
return null===r&&(n=e,r=1),{snapDuration:n,snapsPerSlot:r}}var il=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.sliceRange=function(e,t){for(var n=[],r=0;r<t.length;r+=1){var i=er(e,t[r])
i&&n.push({start:i.start,end:i.end,isStart:i.start.valueOf()===e.start.valueOf(),isEnd:i.end.valueOf()===e.end.valueOf(),col:r})}return n},t}(ha),ol=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.buildDayRanges=on(al),t.slicer=new il,t.timeColsRef=Ue(),t}return r(t,e),t.prototype.render=function(){var e=this,t=this.props,n=this.context,r=t.dateProfile,o=t.dayTableModel,a=n.options.nowIndicator,s=this.buildDayRanges(o,r,n.dateEnv)
return Le(sa,{unit:a?"minute":"day"},(function(l,u){return Le(nl,i({ref:e.timeColsRef},e.slicer.sliceProps(t,r,null,n,s),{forPrint:t.forPrint,axis:t.axis,dateProfile:r,slatMetas:t.slatMetas,slotDuration:t.slotDuration,cells:o.cells[0],tableColGroupNode:t.tableColGroupNode,tableMinWidth:t.tableMinWidth,clientWidth:t.clientWidth,clientHeight:t.clientHeight,expandRows:t.expandRows,nowDate:l,nowIndicatorSegs:a&&e.slicer.sliceNowDate(l,n,s),todayRange:u,onScrollTopRequest:t.onScrollTopRequest,onSlatCoords:t.onSlatCoords}))}))},t}(xi)
function al(e,t,n){for(var r=[],i=0,o=e.headerDates;i<o.length;i++){var a=o[i]
r.push({start:n.add(a,t.slotMinTime),end:n.add(a,t.slotMaxTime)})}return r}var sl=[{hours:1},{minutes:30},{minutes:15},{seconds:30},{seconds:15}]
function ll(e,t,n,r,i){for(var o,a=new Date(0),s=e,l=Gt(0),u=n||function(e){var t,n,r
for(t=sl.length-1;t>=0;t-=1)if(null!==(r=Kt(n=Gt(sl[t]),e))&&r>1)return n
return e}(r),c=[];Jt(s)<Jt(t);){var d=i.add(a,s),f=null!==Kt(l,u)
c.push({date:d,time:s,key:d.toISOString(),isoTimeStr:(o=d,ft(o.getUTCHours(),2)+":"+ft(o.getUTCMinutes(),2)+":"+ft(o.getUTCSeconds(),2)),isLabeled:f}),s=Xt(s,r),l=Xt(l,r)}return c}var ul=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.buildTimeColsModel=on(cl),t.buildSlatMetas=on(ll),t}return r(t,e),t.prototype.render=function(){var e=this,t=this.context,n=t.options,r=t.dateEnv,o=t.dateProfileGenerator,a=this.props,s=a.dateProfile,l=this.buildTimeColsModel(s,o),u=this.allDaySplitter.splitProps(a),c=this.buildSlatMetas(s.slotMinTime,s.slotMaxTime,n.slotLabelInterval,n.slotDuration,r),d=n.dayMinWidth,f=!d,h=d,p=n.dayHeaders&&Le(ua,{dates:l.headerDates,dateProfile:s,datesRepDistinctDays:!0,renderIntro:f?this.renderHeadAxis:null}),v=!1!==n.allDaySlot&&function(t){return Le(Ts,i({},u.allDay,{dateProfile:s,dayTableModel:l,nextDayThreshold:n.nextDayThreshold,tableMinWidth:t.tableMinWidth,colGroupNode:t.tableColGroupNode,renderRowIntro:f?e.renderTableRowAxis:null,showWeekNumbers:!1,expandRows:!1,headerAlignElRef:e.headerElRef,clientWidth:t.clientWidth,clientHeight:t.clientHeight,forPrint:a.forPrint},e.getAllDayMaxEventProps()))},m=function(t){return Le(ol,i({},u.timed,{dayTableModel:l,dateProfile:s,axis:f,slotDuration:n.slotDuration,slatMetas:c,forPrint:a.forPrint,tableColGroupNode:t.tableColGroupNode,tableMinWidth:t.tableMinWidth,clientWidth:t.clientWidth,clientHeight:t.clientHeight,onSlatCoords:e.handleSlatCoords,expandRows:t.expandRows,onScrollTopRequest:e.handleScrollTopRequest}))}
return h?this.renderHScrollLayout(p,v,m,l.colCnt,d,c,this.state.slatCoords):this.renderSimpleLayout(p,v,m)},t}(Ps)
function cl(e,t){var n=new da(e.renderRange,t)
return new fa(n,!1)}const dl=Ii({initialView:"timeGridWeek",optionRefiners:{allDaySlot:Boolean},views:{timeGrid:{component:ul,usesMinMaxTime:!0,allDaySlot:!0,slotDuration:"00:30:00",slotEventOverlap:!0},timeGridDay:{type:"timeGrid",duration:{days:1}},timeGridWeek:{type:"timeGrid",duration:{weeks:1}}}})
var fl=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.state={textId:tt()},t}return r(t,e),t.prototype.render=function(){var e=this.context,t=e.theme,n=e.dateEnv,r=e.options,o=e.viewApi,a=this.props,s=a.cellId,l=a.dayDate,u=a.todayRange,c=this.state.textId,d=ri(l,u),f=r.listDayFormat?n.format(l,r.listDayFormat):"",h=r.listDaySideFormat?n.format(l,r.listDaySideFormat):"",p=i({date:n.toDate(l),view:o,textId:c,text:f,sideText:h,navLinkAttrs:si(this.context,l),sideNavLinkAttrs:si(this.context,l,"day",!1)},d),v=["fc-list-day"].concat(ii(d,t))
return Le(Hi,{hookProps:p,classNames:r.dayHeaderClassNames,content:r.dayHeaderContent,defaultContent:hl,didMount:r.dayHeaderDidMount,willUnmount:r.dayHeaderWillUnmount},(function(e,n,r,i){return Le("tr",{ref:e,className:v.concat(n).join(" "),"data-date":tn(l)},Le("th",{scope:"colgroup",colSpan:3,id:s,"aria-labelledby":c},Le("div",{className:"fc-list-day-cushion "+t.getClass("tableCellShaded"),ref:r},i)))}))},t}(_i)
function hl(e){return Le(Fe,null,e.text&&Le("a",i({id:e.textId,className:"fc-list-day-text"},e.navLinkAttrs),e.text),e.sideText&&Le("a",i({"aria-hidden":!0,className:"fc-list-day-side-text"},e.sideNavLinkAttrs),e.sideText))}var pl=bn({hour:"numeric",minute:"2-digit",meridiem:"short"}),vl=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=e.seg,r=e.timeHeaderId,o=e.eventHeaderId,a=e.dateHeaderId,s=t.options.eventTimeFormat||pl
return Le(Ha,{seg:n,timeText:"",disableDragging:!0,disableResizing:!0,defaultContent:function(){return function(e,t){var n=gr(e,t)
return Le("a",i({},n),e.eventRange.def.title)}(n,t)},isPast:e.isPast,isFuture:e.isFuture,isToday:e.isToday,isSelected:e.isSelected,isDragging:e.isDragging,isResizing:e.isResizing,isDateSelecting:e.isDateSelecting},(function(e,i,l,u,c){return Le("tr",{className:["fc-list-event",c.event.url?"fc-event-forced-url":""].concat(i).join(" "),ref:e},function(e,t,n,r,i){var o=n.options
if(!1!==o.displayEventTime){var a=e.eventRange.def,s=e.eventRange.instance,l=!1,u=void 0
if(a.allDay?l=!0:(d=e.eventRange.range,St((f=$n(d)).start,f.end)>1?e.isStart?u=pr(e,t,n,null,null,s.range.start,e.end):e.isEnd?u=pr(e,t,n,null,null,e.start,s.range.end):l=!0:u=pr(e,t,n)),l){var c={text:n.options.allDayText,view:n.viewApi}
return Le(Hi,{hookProps:c,classNames:o.allDayClassNames,content:o.allDayContent,defaultContent:ml,didMount:o.allDayDidMount,willUnmount:o.allDayWillUnmount},(function(e,t,n,o){return Le("td",{ref:e,headers:r+" "+i,className:["fc-list-event-time"].concat(t).join(" ")},o)}))}return Le("td",{className:"fc-list-event-time"},u)}var d,f
return null}(n,s,t,r,a),Le("td",{"aria-hidden":!0,className:"fc-list-event-graphic"},Le("span",{className:"fc-list-event-dot",style:{borderColor:c.borderColor||c.backgroundColor}})),Le("td",{ref:l,headers:o+" "+a,className:"fc-list-event-title"},u))}))},t}(_i)
function ml(e){return e.text}var gl=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.computeDateVars=on(El),t.eventStoreToSegs=on(t._eventStoreToSegs),t.state={timeHeaderId:tt(),eventHeaderId:tt(),dateHeaderIdRoot:tt()},t.setRootEl=function(e){e?t.context.registerInteractiveComponent(t,{el:e}):t.context.unregisterInteractiveComponent(t)},t}return r(t,e),t.prototype.render=function(){var e=this,t=this.props,n=this.context,r=["fc-list",n.theme.getClass("table"),!1!==n.options.stickyHeaderDates?"fc-list-sticky":""],i=this.computeDateVars(t.dateProfile),o=i.dayDates,a=i.dayRanges,s=this.eventStoreToSegs(t.eventStore,t.eventUiBases,a)
return Le(ji,{viewSpec:n.viewSpec,elRef:this.setRootEl},(function(n,i){return Le("div",{ref:n,className:r.concat(i).join(" ")},Le(Da,{liquid:!t.isHeightAuto,overflowX:t.isHeightAuto?"visible":"hidden",overflowY:t.isHeightAuto?"visible":"auto"},s.length>0?e.renderSegList(s,o):e.renderEmptyMessage()))}))},t.prototype.renderEmptyMessage=function(){var e=this.context,t=e.options,n=e.viewApi,r={text:t.noEventsText,view:n}
return Le(Hi,{hookProps:r,classNames:t.noEventsClassNames,content:t.noEventsContent,defaultContent:yl,didMount:t.noEventsDidMount,willUnmount:t.noEventsWillUnmount},(function(e,t,n,r){return Le("div",{className:["fc-list-empty"].concat(t).join(" "),ref:e},Le("div",{className:"fc-list-empty-cushion",ref:n},r))}))},t.prototype.renderSegList=function(e,t){var n=this.context,r=n.theme,o=n.options,a=this.state,s=a.timeHeaderId,l=a.eventHeaderId,u=a.dateHeaderIdRoot,c=function(e){var t,n,r=[]
for(t=0;t<e.length;t+=1)(r[(n=e[t]).dayIndex]||(r[n.dayIndex]=[])).push(n)
return r}(e)
return Le(sa,{unit:"day"},(function(e,n){for(var a=[],d=0;d<c.length;d+=1){var f=c[d]
if(f){var h=tn(t[d]),p=u+"-"+h
a.push(Le(fl,{key:h,cellId:p,dayDate:t[d],todayRange:n}))
for(var v=0,m=f=ur(f,o.eventOrder);v<m.length;v++){var g=m[v]
a.push(Le(vl,i({key:h+":"+g.eventRange.instance.instanceId,seg:g,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:!1,timeHeaderId:s,eventHeaderId:l,dateHeaderId:p},vr(g,n,e))))}}}return Le("table",{className:"fc-list-table "+r.getClass("table")},Le("thead",null,Le("tr",null,Le("th",{scope:"col",id:s},o.timeHint),Le("th",{scope:"col","aria-hidden":!0}),Le("th",{scope:"col",id:l},o.eventHint))),Le("tbody",null,a))}))},t.prototype._eventStoreToSegs=function(e,t,n){return this.eventRangesToSegs(ir(e,t,this.props.dateProfile.activeRange,this.context.options.nextDayThreshold).fg,n)},t.prototype.eventRangesToSegs=function(e,t){for(var n=[],r=0,i=e;r<i.length;r++){var o=i[r]
n.push.apply(n,this.eventRangeToSegs(o,t))}return n},t.prototype.eventRangeToSegs=function(e,t){var n,r,i,o=this.context.dateEnv,a=this.context.options.nextDayThreshold,s=e.range,l=e.def.allDay,u=[]
for(n=0;n<t.length;n+=1)if((r=er(s,t[n]))&&(i={component:this,eventRange:e,start:r.start,end:r.end,isStart:e.isStart&&r.start.valueOf()===s.start.valueOf(),isEnd:e.isEnd&&r.end.valueOf()===s.end.valueOf(),dayIndex:n},u.push(i),!i.isEnd&&!l&&n+1<t.length&&s.end<o.add(t[n+1].start,a))){i.end=s.end,i.isEnd=!0
break}return u},t}(xi)
function yl(e){return e.text}function El(e){for(var t=Dt(e.renderRange.start),n=e.renderRange.end,r=[],i=[];t<n;)r.push(t),i.push({start:t,end:Et(t,1)}),t=Et(t,1)
return{dayDates:r,dayRanges:i}}function bl(e){return!1===e?null:bn(e)}const Sl=Ii({optionRefiners:{listDayFormat:bl,listDaySideFormat:bl,noEventsClassNames:xn,noEventsContent:xn,noEventsDidMount:xn,noEventsWillUnmount:xn},views:{list:{component:gl,buttonTextKey:"list",listDayFormat:{month:"long",day:"numeric",year:"numeric"}},listDay:{type:"list",duration:{days:1},listDayFormat:{weekday:"long"}},listWeek:{type:"list",duration:{weeks:1},listDayFormat:{weekday:"long"},listDaySideFormat:{month:"long",day:"numeric",year:"numeric"}},listMonth:{type:"list",duration:{month:1},listDaySideFormat:{weekday:"long"}},listYear:{type:"list",duration:{year:1},listDaySideFormat:{weekday:"long"}}}})
Bo.touchMouseIgnoreWait=500
var wl=0,Dl=0,Cl=!1,Tl=function(){function e(e){var t=this
this.subjectEl=null,this.selector="",this.handleSelector="",this.shouldIgnoreMove=!1,this.shouldWatchScroll=!0,this.isDragging=!1,this.isTouchDragging=!1,this.wasTouchScroll=!1,this.handleMouseDown=function(e){if(!t.shouldIgnoreMouse()&&function(e){return 0===e.button&&!e.ctrlKey}(e)&&t.tryStart(e)){var n=t.createEventFromMouse(e,!0)
t.emitter.trigger("pointerdown",n),t.initScrollWatch(n),t.shouldIgnoreMove||document.addEventListener("mousemove",t.handleMouseMove),document.addEventListener("mouseup",t.handleMouseUp)}},this.handleMouseMove=function(e){var n=t.createEventFromMouse(e)
t.recordCoords(n),t.emitter.trigger("pointermove",n)},this.handleMouseUp=function(e){document.removeEventListener("mousemove",t.handleMouseMove),document.removeEventListener("mouseup",t.handleMouseUp),t.emitter.trigger("pointerup",t.createEventFromMouse(e)),t.cleanup()},this.handleTouchStart=function(e){if(t.tryStart(e)){t.isTouchDragging=!0
var n=t.createEventFromTouch(e,!0)
t.emitter.trigger("pointerdown",n),t.initScrollWatch(n)
var r=e.target
t.shouldIgnoreMove||r.addEventListener("touchmove",t.handleTouchMove),r.addEventListener("touchend",t.handleTouchEnd),r.addEventListener("touchcancel",t.handleTouchEnd),window.addEventListener("scroll",t.handleTouchScroll,!0)}},this.handleTouchMove=function(e){var n=t.createEventFromTouch(e)
t.recordCoords(n),t.emitter.trigger("pointermove",n)},this.handleTouchEnd=function(e){if(t.isDragging){var n=e.target
n.removeEventListener("touchmove",t.handleTouchMove),n.removeEventListener("touchend",t.handleTouchEnd),n.removeEventListener("touchcancel",t.handleTouchEnd),window.removeEventListener("scroll",t.handleTouchScroll,!0),t.emitter.trigger("pointerup",t.createEventFromTouch(e)),t.cleanup(),t.isTouchDragging=!1,wl+=1,setTimeout((function(){wl-=1}),Bo.touchMouseIgnoreWait)}},this.handleTouchScroll=function(){t.wasTouchScroll=!0},this.handleScroll=function(e){if(!t.shouldIgnoreMove){var n=window.pageXOffset-t.prevScrollX+t.prevPageX,r=window.pageYOffset-t.prevScrollY+t.prevPageY
t.emitter.trigger("pointermove",{origEvent:e,isTouch:t.isTouchDragging,subjectEl:t.subjectEl,pageX:n,pageY:r,deltaX:n-t.origPageX,deltaY:r-t.origPageY})}},this.containerEl=e,this.emitter=new mi,e.addEventListener("mousedown",this.handleMouseDown),e.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),1===(Dl+=1)&&window.addEventListener("touchmove",_l,{passive:!1})}return e.prototype.destroy=function(){this.containerEl.removeEventListener("mousedown",this.handleMouseDown),this.containerEl.removeEventListener("touchstart",this.handleTouchStart,{passive:!0}),(Dl-=1)||window.removeEventListener("touchmove",_l,{passive:!1})},e.prototype.tryStart=function(e){var t=this.querySubjectEl(e),n=e.target
return!(!t||this.handleSelector&&!Ge(n,this.handleSelector))&&(this.subjectEl=t,this.isDragging=!0,this.wasTouchScroll=!1,!0)},e.prototype.cleanup=function(){Cl=!1,this.isDragging=!1,this.subjectEl=null,this.destroyScrollWatch()},e.prototype.querySubjectEl=function(e){return this.selector?Ge(e.target,this.selector):this.containerEl},e.prototype.shouldIgnoreMouse=function(){return wl||this.isTouchDragging},e.prototype.cancelTouchScroll=function(){this.isDragging&&(Cl=!0)},e.prototype.initScrollWatch=function(e){this.shouldWatchScroll&&(this.recordCoords(e),window.addEventListener("scroll",this.handleScroll,!0))},e.prototype.recordCoords=function(e){this.shouldWatchScroll&&(this.prevPageX=e.pageX,this.prevPageY=e.pageY,this.prevScrollX=window.pageXOffset,this.prevScrollY=window.pageYOffset)},e.prototype.destroyScrollWatch=function(){this.shouldWatchScroll&&window.removeEventListener("scroll",this.handleScroll,!0)},e.prototype.createEventFromMouse=function(e,t){var n=0,r=0
return t?(this.origPageX=e.pageX,this.origPageY=e.pageY):(n=e.pageX-this.origPageX,r=e.pageY-this.origPageY),{origEvent:e,isTouch:!1,subjectEl:this.subjectEl,pageX:e.pageX,pageY:e.pageY,deltaX:n,deltaY:r}},e.prototype.createEventFromTouch=function(e,t){var n,r,i=e.touches,o=0,a=0
return i&&i.length?(n=i[0].pageX,r=i[0].pageY):(n=e.pageX,r=e.pageY),t?(this.origPageX=n,this.origPageY=r):(o=n-this.origPageX,a=r-this.origPageY),{origEvent:e,isTouch:!0,subjectEl:this.subjectEl,pageX:n,pageY:r,deltaX:o,deltaY:a}},e}()
function _l(e){Cl&&e.preventDefault()}var kl=function(){function e(){this.isVisible=!1,this.sourceEl=null,this.mirrorEl=null,this.sourceElRect=null,this.parentNode=document.body,this.zIndex=9999,this.revertDuration=0}return e.prototype.start=function(e,t,n){this.sourceEl=e,this.sourceElRect=this.sourceEl.getBoundingClientRect(),this.origScreenX=t-window.pageXOffset,this.origScreenY=n-window.pageYOffset,this.deltaX=0,this.deltaY=0,this.updateElPosition()},e.prototype.handleMove=function(e,t){this.deltaX=e-window.pageXOffset-this.origScreenX,this.deltaY=t-window.pageYOffset-this.origScreenY,this.updateElPosition()},e.prototype.setIsVisible=function(e){e?this.isVisible||(this.mirrorEl&&(this.mirrorEl.style.display=""),this.isVisible=e,this.updateElPosition()):this.isVisible&&(this.mirrorEl&&(this.mirrorEl.style.display="none"),this.isVisible=e)},e.prototype.stop=function(e,t){var n=this,r=function(){n.cleanup(),t()}
e&&this.mirrorEl&&this.isVisible&&this.revertDuration&&(this.deltaX||this.deltaY)?this.doRevertAnimation(r,this.revertDuration):setTimeout(r,0)},e.prototype.doRevertAnimation=function(e,t){var n=this.mirrorEl,r=this.sourceEl.getBoundingClientRect()
n.style.transition="top "+t+"ms,left "+t+"ms",$e(n,{left:r.left,top:r.top}),function(e,t){var n=function(r){t(r),it.forEach((function(t){e.removeEventListener(t,n)}))}
it.forEach((function(t){e.addEventListener(t,n)}))}(n,(function(){n.style.transition="",e()}))},e.prototype.cleanup=function(){this.mirrorEl&&(Ze(this.mirrorEl),this.mirrorEl=null),this.sourceEl=null},e.prototype.updateElPosition=function(){this.sourceEl&&this.isVisible&&$e(this.getMirrorEl(),{left:this.sourceElRect.left+this.deltaX,top:this.sourceElRect.top+this.deltaY})},e.prototype.getMirrorEl=function(){var e=this.sourceElRect,t=this.mirrorEl
return t||((t=this.mirrorEl=this.sourceEl.cloneNode(!0)).classList.add("fc-unselectable"),t.classList.add("fc-event-dragging"),$e(t,{position:"fixed",zIndex:this.zIndex,visibility:"",boxSizing:"border-box",width:e.right-e.left,height:e.bottom-e.top,right:"auto",bottom:"auto",margin:0}),this.parentNode.appendChild(t)),t},e}(),Rl=function(e){function t(t,n){var r=e.call(this)||this
return r.handleScroll=function(){r.scrollTop=r.scrollController.getScrollTop(),r.scrollLeft=r.scrollController.getScrollLeft(),r.handleScrollChange()},r.scrollController=t,r.doesListening=n,r.scrollTop=r.origScrollTop=t.getScrollTop(),r.scrollLeft=r.origScrollLeft=t.getScrollLeft(),r.scrollWidth=t.getScrollWidth(),r.scrollHeight=t.getScrollHeight(),r.clientWidth=t.getClientWidth(),r.clientHeight=t.getClientHeight(),r.clientRect=r.computeClientRect(),r.doesListening&&r.getEventTarget().addEventListener("scroll",r.handleScroll),r}return r(t,e),t.prototype.destroy=function(){this.doesListening&&this.getEventTarget().removeEventListener("scroll",this.handleScroll)},t.prototype.getScrollTop=function(){return this.scrollTop},t.prototype.getScrollLeft=function(){return this.scrollLeft},t.prototype.setScrollTop=function(e){this.scrollController.setScrollTop(e),this.doesListening||(this.scrollTop=Math.max(Math.min(e,this.getMaxScrollTop()),0),this.handleScrollChange())},t.prototype.setScrollLeft=function(e){this.scrollController.setScrollLeft(e),this.doesListening||(this.scrollLeft=Math.max(Math.min(e,this.getMaxScrollLeft()),0),this.handleScrollChange())},t.prototype.getClientWidth=function(){return this.clientWidth},t.prototype.getClientHeight=function(){return this.clientHeight},t.prototype.getScrollWidth=function(){return this.scrollWidth},t.prototype.getScrollHeight=function(){return this.scrollHeight},t.prototype.handleScrollChange=function(){},t}(yi),Ml=function(e){function t(t,n){return e.call(this,new Ei(t),n)||this}return r(t,e),t.prototype.getEventTarget=function(){return this.scrollController.el},t.prototype.computeClientRect=function(){return hi(this.scrollController.el)},t}(Rl),xl=function(e){function t(t){return e.call(this,new bi,t)||this}return r(t,e),t.prototype.getEventTarget=function(){return window},t.prototype.computeClientRect=function(){return{left:this.scrollLeft,right:this.scrollLeft+this.clientWidth,top:this.scrollTop,bottom:this.scrollTop+this.clientHeight}},t.prototype.handleScrollChange=function(){this.clientRect=this.computeClientRect()},t}(Rl),Il="function"==typeof performance?performance.now:Date.now,Nl=function(){function e(){var e=this
this.isEnabled=!0,this.scrollQuery=[window,".fc-scroller"],this.edgeThreshold=50,this.maxVelocity=300,this.pointerScreenX=null,this.pointerScreenY=null,this.isAnimating=!1,this.scrollCaches=null,this.everMovedUp=!1,this.everMovedDown=!1,this.everMovedLeft=!1,this.everMovedRight=!1,this.animate=function(){if(e.isAnimating){var t=e.computeBestEdge(e.pointerScreenX+window.pageXOffset,e.pointerScreenY+window.pageYOffset)
if(t){var n=Il()
e.handleSide(t,(n-e.msSinceRequest)/1e3),e.requestAnimation(n)}else e.isAnimating=!1}}}return e.prototype.start=function(e,t,n){this.isEnabled&&(this.scrollCaches=this.buildCaches(n),this.pointerScreenX=null,this.pointerScreenY=null,this.everMovedUp=!1,this.everMovedDown=!1,this.everMovedLeft=!1,this.everMovedRight=!1,this.handleMove(e,t))},e.prototype.handleMove=function(e,t){if(this.isEnabled){var n=e-window.pageXOffset,r=t-window.pageYOffset,i=null===this.pointerScreenY?0:r-this.pointerScreenY,o=null===this.pointerScreenX?0:n-this.pointerScreenX
i<0?this.everMovedUp=!0:i>0&&(this.everMovedDown=!0),o<0?this.everMovedLeft=!0:o>0&&(this.everMovedRight=!0),this.pointerScreenX=n,this.pointerScreenY=r,this.isAnimating||(this.isAnimating=!0,this.requestAnimation(Il()))}},e.prototype.stop=function(){if(this.isEnabled){this.isAnimating=!1
for(var e=0,t=this.scrollCaches;e<t.length;e++){t[e].destroy()}this.scrollCaches=null}},e.prototype.requestAnimation=function(e){this.msSinceRequest=e,requestAnimationFrame(this.animate)},e.prototype.handleSide=function(e,t){var n=e.scrollCache,r=this.edgeThreshold,i=r-e.distance,o=i*i/(r*r)*this.maxVelocity*t,a=1
switch(e.name){case"left":a=-1
case"right":n.setScrollLeft(n.getScrollLeft()+o*a)
break
case"top":a=-1
case"bottom":n.setScrollTop(n.getScrollTop()+o*a)}},e.prototype.computeBestEdge=function(e,t){for(var n=this.edgeThreshold,r=null,i=0,o=this.scrollCaches||[];i<o.length;i++){var a=o[i],s=a.clientRect,l=e-s.left,u=s.right-e,c=t-s.top,d=s.bottom-t
l>=0&&u>=0&&c>=0&&d>=0&&(c<=n&&this.everMovedUp&&a.canScrollUp()&&(!r||r.distance>c)&&(r={scrollCache:a,name:"top",distance:c}),d<=n&&this.everMovedDown&&a.canScrollDown()&&(!r||r.distance>d)&&(r={scrollCache:a,name:"bottom",distance:d}),l<=n&&this.everMovedLeft&&a.canScrollLeft()&&(!r||r.distance>l)&&(r={scrollCache:a,name:"left",distance:l}),u<=n&&this.everMovedRight&&a.canScrollRight()&&(!r||r.distance>u)&&(r={scrollCache:a,name:"right",distance:u}))}return r},e.prototype.buildCaches=function(e){return this.queryScrollEls(e).map((function(e){return e===window?new xl(!1):new Ml(e,!1)}))},e.prototype.queryScrollEls=function(e){for(var t=[],n=0,r=this.scrollQuery;n<r.length;n++){var i=r[n]
"object"==typeof i?t.push(i):t.push.apply(t,Array.prototype.slice.call(Qe(e).querySelectorAll(i)))}return t},e}(),Ol=function(e){function t(t,n){var r=e.call(this,t)||this
r.containerEl=t,r.delay=null,r.minDistance=0,r.touchScrollAllowed=!0,r.mirrorNeedsRevert=!1,r.isInteracting=!1,r.isDragging=!1,r.isDelayEnded=!1,r.isDistanceSurpassed=!1,r.delayTimeoutId=null,r.onPointerDown=function(e){var t
r.isDragging||(r.isInteracting=!0,r.isDelayEnded=!1,r.isDistanceSurpassed=!1,(t=document.body).classList.add("fc-unselectable"),t.addEventListener("selectstart",nt),function(e){e.addEventListener("contextmenu",nt)}(document.body),e.isTouch||e.origEvent.preventDefault(),r.emitter.trigger("pointerdown",e),r.isInteracting&&!r.pointer.shouldIgnoreMove&&(r.mirror.setIsVisible(!1),r.mirror.start(e.subjectEl,e.pageX,e.pageY),r.startDelay(e),r.minDistance||r.handleDistanceSurpassed(e)))},r.onPointerMove=function(e){if(r.isInteracting){if(r.emitter.trigger("pointermove",e),!r.isDistanceSurpassed){var t=r.minDistance,n=e.deltaX,i=e.deltaY
n*n+i*i>=t*t&&r.handleDistanceSurpassed(e)}r.isDragging&&("scroll"!==e.origEvent.type&&(r.mirror.handleMove(e.pageX,e.pageY),r.autoScroller.handleMove(e.pageX,e.pageY)),r.emitter.trigger("dragmove",e))}},r.onPointerUp=function(e){var t
r.isInteracting&&(r.isInteracting=!1,(t=document.body).classList.remove("fc-unselectable"),t.removeEventListener("selectstart",nt),function(e){e.removeEventListener("contextmenu",nt)}(document.body),r.emitter.trigger("pointerup",e),r.isDragging&&(r.autoScroller.stop(),r.tryStopDrag(e)),r.delayTimeoutId&&(clearTimeout(r.delayTimeoutId),r.delayTimeoutId=null))}
var i=r.pointer=new Tl(t)
return i.emitter.on("pointerdown",r.onPointerDown),i.emitter.on("pointermove",r.onPointerMove),i.emitter.on("pointerup",r.onPointerUp),n&&(i.selector=n),r.mirror=new kl,r.autoScroller=new Nl,r}return r(t,e),t.prototype.destroy=function(){this.pointer.destroy(),this.onPointerUp({})},t.prototype.startDelay=function(e){var t=this
"number"==typeof this.delay?this.delayTimeoutId=setTimeout((function(){t.delayTimeoutId=null,t.handleDelayEnd(e)}),this.delay):this.handleDelayEnd(e)},t.prototype.handleDelayEnd=function(e){this.isDelayEnded=!0,this.tryStartDrag(e)},t.prototype.handleDistanceSurpassed=function(e){this.isDistanceSurpassed=!0,this.tryStartDrag(e)},t.prototype.tryStartDrag=function(e){this.isDelayEnded&&this.isDistanceSurpassed&&(this.pointer.wasTouchScroll&&!this.touchScrollAllowed||(this.isDragging=!0,this.mirrorNeedsRevert=!1,this.autoScroller.start(e.pageX,e.pageY,this.containerEl),this.emitter.trigger("dragstart",e),!1===this.touchScrollAllowed&&this.pointer.cancelTouchScroll()))},t.prototype.tryStopDrag=function(e){this.mirror.stop(this.mirrorNeedsRevert,this.stopDrag.bind(this,e))},t.prototype.stopDrag=function(e){this.isDragging=!1,this.emitter.trigger("dragend",e)},t.prototype.setIgnoreMove=function(e){this.pointer.shouldIgnoreMove=e},t.prototype.setMirrorIsVisible=function(e){this.mirror.setIsVisible(e)},t.prototype.setMirrorNeedsRevert=function(e){this.mirrorNeedsRevert=e},t.prototype.setAutoScrollEnabled=function(e){this.autoScroller.isEnabled=e},t}(jo),Pl=function(){function e(e){this.origRect=pi(e),this.scrollCaches=vi(e).map((function(e){return new Ml(e,!0)}))}return e.prototype.destroy=function(){for(var e=0,t=this.scrollCaches;e<t.length;e++){t[e].destroy()}},e.prototype.computeLeft=function(){for(var e=this.origRect.left,t=0,n=this.scrollCaches;t<n.length;t++){var r=n[t]
e+=r.origScrollLeft-r.getScrollLeft()}return e},e.prototype.computeTop=function(){for(var e=this.origRect.top,t=0,n=this.scrollCaches;t<n.length;t++){var r=n[t]
e+=r.origScrollTop-r.getScrollTop()}return e},e.prototype.isWithinClipping=function(e,t){for(var n,r,i={left:e,top:t},o=0,a=this.scrollCaches;o<a.length;o++){var s=a[o]
if(n=s.getEventTarget(),r=void 0,"HTML"!==(r=n.tagName)&&"BODY"!==r&&!Jr(i,s.clientRect))return!1}return!0},e}()
var Hl=function(){function e(e,t){var n=this
this.useSubjectCenter=!1,this.requireInitial=!0,this.initialHit=null,this.movingHit=null,this.finalHit=null,this.handlePointerDown=function(e){var t=n.dragging
n.initialHit=null,n.movingHit=null,n.finalHit=null,n.prepareHits(),n.processFirstCoord(e),n.initialHit||!n.requireInitial?(t.setIgnoreMove(!1),n.emitter.trigger("pointerdown",e)):t.setIgnoreMove(!0)},this.handleDragStart=function(e){n.emitter.trigger("dragstart",e),n.handleMove(e,!0)},this.handleDragMove=function(e){n.emitter.trigger("dragmove",e),n.handleMove(e)},this.handlePointerUp=function(e){n.releaseHits(),n.emitter.trigger("pointerup",e)},this.handleDragEnd=function(e){n.movingHit&&n.emitter.trigger("hitupdate",null,!0,e),n.finalHit=n.movingHit,n.movingHit=null,n.emitter.trigger("dragend",e)},this.droppableStore=t,e.emitter.on("pointerdown",this.handlePointerDown),e.emitter.on("dragstart",this.handleDragStart),e.emitter.on("dragmove",this.handleDragMove),e.emitter.on("pointerup",this.handlePointerUp),e.emitter.on("dragend",this.handleDragEnd),this.dragging=e,this.emitter=new mi}return e.prototype.processFirstCoord=function(e){var t,n,r,i={left:e.pageX,top:e.pageY},o=i,a=e.subjectEl
a instanceof HTMLElement&&(t=pi(a),n=o,r=t,o={left:Math.min(Math.max(n.left,r.left),r.right),top:Math.min(Math.max(n.top,r.top),r.bottom)})
var s,l,u=this.initialHit=this.queryHitForOffset(o.left,o.top)
if(u){if(this.useSubjectCenter&&t){var c=Kr(t,u.rect)
c&&(o=function(e){return{left:(e.left+e.right)/2,top:(e.top+e.bottom)/2}}(c))}this.coordAdjust=(l=i,{left:(s=o).left-l.left,top:s.top-l.top})}else this.coordAdjust={left:0,top:0}},e.prototype.handleMove=function(e,t){var n=this.queryHitForOffset(e.pageX+this.coordAdjust.left,e.pageY+this.coordAdjust.top)
!t&&Al(this.movingHit,n)||(this.movingHit=n,this.emitter.trigger("hitupdate",n,!1,e))},e.prototype.prepareHits=function(){this.offsetTrackers=At(this.droppableStore,(function(e){return e.component.prepareHits(),new Pl(e.el)}))},e.prototype.releaseHits=function(){var e=this.offsetTrackers
for(var t in e)e[t].destroy()
this.offsetTrackers={}},e.prototype.queryHitForOffset=function(e,t){var n=this.droppableStore,r=this.offsetTrackers,i=null
for(var o in n){var a=n[o].component,s=r[o]
if(s&&s.isWithinClipping(e,t)){var l=s.computeLeft(),u=s.computeTop(),c=e-l,d=t-u,f=s.origRect,h=f.right-f.left,p=f.bottom-f.top
if(c>=0&&c<h&&d>=0&&d<p){var v=a.queryHit(c,d,h,p)
v&&nr(v.dateProfile.activeRange,v.dateSpan.range)&&(!i||v.layer>i.layer)&&(v.componentId=o,v.context=a.context,v.rect.left+=l,v.rect.right+=l,v.rect.top+=u,v.rect.bottom+=u,i=v)}}}return i},e}()
function Al(e,t){return!e&&!t||Boolean(e)===Boolean(t)&&(n=e.dateSpan,r=t.dateSpan,i=n.range,o=r.range,(null===i.start?null:i.start.valueOf())===(null===o.start?null:o.start.valueOf())&&(null===i.end?null:i.end.valueOf())===(null===o.end?null:o.end.valueOf())&&n.allDay===r.allDay&&function(e,t){for(var n in t)if("range"!==n&&"allDay"!==n&&e[n]!==t[n])return!1
for(var n in e)if(!(n in t))return!1
return!0}(n,r))
var n,r,i,o}function Ll(e,t){for(var n,r,o={},a=0,s=t.pluginHooks.datePointTransforms;a<s.length;a++){var l=s[a]
i(o,l(e,t))}return i(o,(n=e,{date:(r=t.dateEnv).toDate(n.range.start),dateStr:r.formatIso(n.range.start,{omitTime:n.allDay}),allDay:n.allDay})),o}var Vl=function(e){function t(t){var n=e.call(this,t)||this
n.handlePointerDown=function(e){var t=n.dragging,r=e.origEvent.target
t.setIgnoreMove(!n.component.isValidDateDownEl(r))},n.handleDragEnd=function(e){var t=n.component
if(!n.dragging.pointer.wasTouchScroll){var r=n.hitDragging,o=r.initialHit,a=r.finalHit
if(o&&a&&Al(o,a)){var s=t.context,l=i(i({},Ll(o.dateSpan,s)),{dayEl:o.dayEl,jsEvent:e.origEvent,view:s.viewApi||s.calendarApi.view})
s.emitter.trigger("dateClick",l)}}},n.dragging=new Ol(t.el),n.dragging.autoScroller.isEnabled=!1
var r=n.hitDragging=new Hl(n.dragging,Wo(t))
return r.emitter.on("pointerdown",n.handlePointerDown),r.emitter.on("dragend",n.handleDragEnd),n}return r(t,e),t.prototype.destroy=function(){this.dragging.destroy()},t}(Fo),Ul=function(e){function t(t){var n=e.call(this,t)||this
n.dragSelection=null,n.handlePointerDown=function(e){var t=n,r=t.component,i=t.dragging,o=r.context.options.selectable&&r.isValidDateDownEl(e.origEvent.target)
i.setIgnoreMove(!o),i.delay=e.isTouch?function(e){var t=e.context.options,n=t.selectLongPressDelay
null==n&&(n=t.longPressDelay)
return n}(r):null},n.handleDragStart=function(e){n.component.context.calendarApi.unselect(e)},n.handleHitUpdate=function(e,t){var r=n.component.context,o=null,a=!1
if(e){var s=n.hitDragging.initialHit
e.componentId===s.componentId&&n.isHitComboAllowed&&!n.isHitComboAllowed(s,e)||(o=function(e,t,n){var r=e.dateSpan,o=t.dateSpan,a=[r.range.start,r.range.end,o.range.start,o.range.end]
a.sort(pt)
for(var s={},l=0,u=n;l<u.length;l++){var c=(0,u[l])(e,t)
if(!1===c)return null
c&&i(s,c)}return s.range={start:a[0],end:a[3]},s.allDay=r.allDay,s}(s,e,r.pluginHooks.dateSelectionTransformers)),o&&function(e,t,n){return!!nr(t.validRange,e.range)&&ma({dateSelection:e},n)}(o,e.dateProfile,r)||(a=!0,o=null)}o?r.dispatch({type:"SELECT_DATES",selection:o}):t||r.dispatch({type:"UNSELECT_DATES"}),a?ut():ct(),t||(n.dragSelection=o)},n.handlePointerUp=function(e){n.dragSelection&&(wr(n.dragSelection,e,n.component.context),n.dragSelection=null)}
var r=t.component.context.options,o=n.dragging=new Ol(t.el)
o.touchScrollAllowed=!1,o.minDistance=r.selectMinDistance||0,o.autoScroller.isEnabled=r.dragScroll
var a=n.hitDragging=new Hl(n.dragging,Wo(t))
return a.emitter.on("pointerdown",n.handlePointerDown),a.emitter.on("dragstart",n.handleDragStart),a.emitter.on("hitupdate",n.handleHitUpdate),a.emitter.on("pointerup",n.handlePointerUp),n}return r(t,e),t.prototype.destroy=function(){this.dragging.destroy()},t}(Fo)
var Fl=function(e){function t(n){var r=e.call(this,n)||this
r.subjectEl=null,r.subjectSeg=null,r.isDragging=!1,r.eventRange=null,r.relevantEvents=null,r.receivingContext=null,r.validMutation=null,r.mutatedRelevantEvents=null,r.handlePointerDown=function(e){var t=e.origEvent.target,n=r,i=n.component,o=n.dragging,a=o.mirror,s=i.context.options,l=i.context
r.subjectEl=e.subjectEl
var u=r.subjectSeg=ar(e.subjectEl),c=(r.eventRange=u.eventRange).instance.instanceId
r.relevantEvents=On(l.getCurrentData().eventStore,c),o.minDistance=e.isTouch?0:s.eventDragMinDistance,o.delay=e.isTouch&&c!==i.props.eventSelection?function(e){var t=e.context.options,n=t.eventLongPressDelay
null==n&&(n=t.longPressDelay)
return n}(i):null,s.fixedMirrorParent?a.parentNode=s.fixedMirrorParent:a.parentNode=Ge(t,".fc"),a.revertDuration=s.dragRevertDuration
var d=i.isValidSegDownEl(t)&&!Ge(t,".fc-event-resizer")
o.setIgnoreMove(!d),r.isDragging=d&&e.subjectEl.classList.contains("fc-event-draggable")},r.handleDragStart=function(e){var t=r.component.context,n=r.eventRange,i=n.instance.instanceId
e.isTouch?i!==r.component.props.eventSelection&&t.dispatch({type:"SELECT_EVENT",eventInstanceId:i}):t.dispatch({type:"UNSELECT_EVENT"}),r.isDragging&&(t.calendarApi.unselect(e),t.emitter.trigger("eventDragStart",{el:r.subjectEl,event:new Pr(t,n.def,n.instance),jsEvent:e.origEvent,view:t.viewApi}))},r.handleHitUpdate=function(e,t){if(r.isDragging){var n=r.relevantEvents,i=r.hitDragging.initialHit,o=r.component.context,a=null,s=null,l=null,u=!1,c={affectedEvents:n,mutatedEvents:{defs:{},instances:{}},isEvent:!0}
if(e){var d=(a=e.context).options
o===a||d.editable&&d.droppable?(s=function(e,t,n){var r=e.dateSpan,i=t.dateSpan,o=r.range.start,a=i.range.start,s={}
r.allDay!==i.allDay&&(s.allDay=i.allDay,s.hasEnd=t.context.options.allDayMaintainDuration,i.allDay&&(o=Dt(o)))
var l=Jn(o,a,e.context.dateEnv,e.componentId===t.componentId?e.largeUnit:null)
l.milliseconds&&(s.allDay=!1)
for(var u={datesDelta:l,standardProps:s},c=0,d=n;c<d.length;c++){(0,d[c])(u,e,t)}return u}(i,e,a.getCurrentData().pluginHooks.eventDragMutationMassagers))&&(l=Tr(n,a.getCurrentData().eventUiBases,s,a),c.mutatedEvents=l,va(c,e.dateProfile,a)||(u=!0,s=null,l=null,c.mutatedEvents={defs:{},instances:{}})):a=null}r.displayDrag(a,c),u?ut():ct(),t||(o===a&&Al(i,e)&&(s=null),r.dragging.setMirrorNeedsRevert(!s),r.dragging.setMirrorIsVisible(!e||!Qe(r.subjectEl).querySelector(".fc-event-mirror")),r.receivingContext=a,r.validMutation=s,r.mutatedRelevantEvents=l)}},r.handlePointerUp=function(){r.isDragging||r.cleanup()},r.handleDragEnd=function(e){if(r.isDragging){var t=r.component.context,n=t.viewApi,o=r,a=o.receivingContext,s=o.validMutation,l=r.eventRange.def,u=r.eventRange.instance,c=new Pr(t,l,u),d=r.relevantEvents,f=r.mutatedRelevantEvents,h=r.hitDragging.finalHit
if(r.clearDrag(),t.emitter.trigger("eventDragStop",{el:r.subjectEl,event:c,jsEvent:e.origEvent,view:n}),s){if(a===t){var p=new Pr(t,f.defs[l.defId],u?f.instances[u.instanceId]:null)
t.dispatch({type:"MERGE_EVENTS",eventStore:f})
for(var v={oldEvent:c,event:p,relatedEvents:Ar(f,t,u),revert:function(){t.dispatch({type:"MERGE_EVENTS",eventStore:d})}},m={},g=0,y=t.getCurrentData().pluginHooks.eventDropTransformers;g<y.length;g++){var E=y[g]
i(m,E(s,t))}t.emitter.trigger("eventDrop",i(i(i({},v),m),{el:e.subjectEl,delta:s.datesDelta,jsEvent:e.origEvent,view:n})),t.emitter.trigger("eventChange",v)}else if(a){var b={event:c,relatedEvents:Ar(d,t,u),revert:function(){t.dispatch({type:"MERGE_EVENTS",eventStore:d})}}
t.emitter.trigger("eventLeave",i(i({},b),{draggedEl:e.subjectEl,view:n})),t.dispatch({type:"REMOVE_EVENTS",eventStore:d}),t.emitter.trigger("eventRemove",b)
var S=f.defs[l.defId],w=f.instances[u.instanceId],D=new Pr(a,S,w)
a.dispatch({type:"MERGE_EVENTS",eventStore:f})
var C={event:D,relatedEvents:Ar(f,a,w),revert:function(){a.dispatch({type:"REMOVE_EVENTS",eventStore:f})}}
a.emitter.trigger("eventAdd",C),e.isTouch&&a.dispatch({type:"SELECT_EVENT",eventInstanceId:u.instanceId}),a.emitter.trigger("drop",i(i({},Ll(h.dateSpan,a)),{draggedEl:e.subjectEl,jsEvent:e.origEvent,view:h.context.viewApi})),a.emitter.trigger("eventReceive",i(i({},C),{draggedEl:e.subjectEl,view:h.context.viewApi}))}}else t.emitter.trigger("_noEventDrop")}r.cleanup()}
var o=r.component.context.options,a=r.dragging=new Ol(n.el)
a.pointer.selector=t.SELECTOR,a.touchScrollAllowed=!1,a.autoScroller.isEnabled=o.dragScroll
var s=r.hitDragging=new Hl(r.dragging,zo)
return s.useSubjectCenter=n.useEventCenter,s.emitter.on("pointerdown",r.handlePointerDown),s.emitter.on("dragstart",r.handleDragStart),s.emitter.on("hitupdate",r.handleHitUpdate),s.emitter.on("pointerup",r.handlePointerUp),s.emitter.on("dragend",r.handleDragEnd),r}return r(t,e),t.prototype.destroy=function(){this.dragging.destroy()},t.prototype.displayDrag=function(e,t){var n=this.component.context,r=this.receivingContext
r&&r!==e&&(r===n?r.dispatch({type:"SET_EVENT_DRAG",state:{affectedEvents:t.affectedEvents,mutatedEvents:{defs:{},instances:{}},isEvent:!0}}):r.dispatch({type:"UNSET_EVENT_DRAG"})),e&&e.dispatch({type:"SET_EVENT_DRAG",state:t})},t.prototype.clearDrag=function(){var e=this.component.context,t=this.receivingContext
t&&t.dispatch({type:"UNSET_EVENT_DRAG"}),e!==t&&e.dispatch({type:"UNSET_EVENT_DRAG"})},t.prototype.cleanup=function(){this.subjectSeg=null,this.isDragging=!1,this.eventRange=null,this.relevantEvents=null,this.receivingContext=null,this.validMutation=null,this.mutatedRelevantEvents=null},t.SELECTOR=".fc-event-draggable, .fc-event-resizable",t}(Fo)
var Wl=function(e){function t(t){var n=e.call(this,t)||this
n.draggingSegEl=null,n.draggingSeg=null,n.eventRange=null,n.relevantEvents=null,n.validMutation=null,n.mutatedRelevantEvents=null,n.handlePointerDown=function(e){var t=n.component,r=ar(n.querySegEl(e)),i=n.eventRange=r.eventRange
n.dragging.minDistance=t.context.options.eventDragMinDistance,n.dragging.setIgnoreMove(!n.component.isValidSegDownEl(e.origEvent.target)||e.isTouch&&n.component.props.eventSelection!==i.instance.instanceId)},n.handleDragStart=function(e){var t=n.component.context,r=n.eventRange
n.relevantEvents=On(t.getCurrentData().eventStore,n.eventRange.instance.instanceId)
var i=n.querySegEl(e)
n.draggingSegEl=i,n.draggingSeg=ar(i),t.calendarApi.unselect(),t.emitter.trigger("eventResizeStart",{el:i,event:new Pr(t,r.def,r.instance),jsEvent:e.origEvent,view:t.viewApi})},n.handleHitUpdate=function(e,t,r){var i=n.component.context,o=n.relevantEvents,a=n.hitDragging.initialHit,s=n.eventRange.instance,l=null,u=null,c=!1,d={affectedEvents:o,mutatedEvents:{defs:{},instances:{}},isEvent:!0}
e&&(e.componentId===a.componentId&&n.isHitComboAllowed&&!n.isHitComboAllowed(a,e)||(l=function(e,t,n,r){var i=e.context.dateEnv,o=e.dateSpan.range.start,a=t.dateSpan.range.start,s=Jn(o,a,i,e.largeUnit)
if(n){if(i.add(r.start,s)<r.end)return{startDelta:s}}else if(i.add(r.end,s)>r.start)return{endDelta:s}
return null}(a,e,r.subjectEl.classList.contains("fc-event-resizer-start"),s.range)))
l&&(u=Tr(o,i.getCurrentData().eventUiBases,l,i),d.mutatedEvents=u,va(d,e.dateProfile,i)||(c=!0,l=null,u=null,d.mutatedEvents=null)),u?i.dispatch({type:"SET_EVENT_RESIZE",state:d}):i.dispatch({type:"UNSET_EVENT_RESIZE"}),c?ut():ct(),t||(l&&Al(a,e)&&(l=null),n.validMutation=l,n.mutatedRelevantEvents=u)},n.handleDragEnd=function(e){var t=n.component.context,r=n.eventRange.def,o=n.eventRange.instance,a=new Pr(t,r,o),s=n.relevantEvents,l=n.mutatedRelevantEvents
if(t.emitter.trigger("eventResizeStop",{el:n.draggingSegEl,event:a,jsEvent:e.origEvent,view:t.viewApi}),n.validMutation){var u=new Pr(t,l.defs[r.defId],o?l.instances[o.instanceId]:null)
t.dispatch({type:"MERGE_EVENTS",eventStore:l})
var c={oldEvent:a,event:u,relatedEvents:Ar(l,t,o),revert:function(){t.dispatch({type:"MERGE_EVENTS",eventStore:s})}}
t.emitter.trigger("eventResize",i(i({},c),{el:n.draggingSegEl,startDelta:n.validMutation.startDelta||Gt(0),endDelta:n.validMutation.endDelta||Gt(0),jsEvent:e.origEvent,view:t.viewApi})),t.emitter.trigger("eventChange",c)}else t.emitter.trigger("_noEventResize")
n.draggingSeg=null,n.relevantEvents=null,n.validMutation=null}
var r=t.component,o=n.dragging=new Ol(t.el)
o.pointer.selector=".fc-event-resizer",o.touchScrollAllowed=!1,o.autoScroller.isEnabled=r.context.options.dragScroll
var a=n.hitDragging=new Hl(n.dragging,Wo(t))
return a.emitter.on("pointerdown",n.handlePointerDown),a.emitter.on("dragstart",n.handleDragStart),a.emitter.on("hitupdate",n.handleHitUpdate),a.emitter.on("dragend",n.handleDragEnd),n}return r(t,e),t.prototype.destroy=function(){this.dragging.destroy()},t.prototype.querySegEl=function(e){return Ge(e.subjectEl,".fc-event")},t}(Fo)
var zl=function(){function e(e){var t=this
this.context=e,this.isRecentPointerDateSelect=!1,this.matchesCancel=!1,this.matchesEvent=!1,this.onSelect=function(e){e.jsEvent&&(t.isRecentPointerDateSelect=!0)},this.onDocumentPointerDown=function(e){var n=t.context.options.unselectCancel,r=Ke(e.origEvent)
t.matchesCancel=!!Ge(r,n),t.matchesEvent=!!Ge(r,Fl.SELECTOR)},this.onDocumentPointerUp=function(e){var n=t.context,r=t.documentPointer,i=n.getCurrentData()
if(!r.wasTouchScroll){if(i.dateSelection&&!t.isRecentPointerDateSelect){var o=n.options.unselectAuto
!o||o&&t.matchesCancel||n.calendarApi.unselect(e)}i.eventSelection&&!t.matchesEvent&&n.dispatch({type:"UNSELECT_EVENT"})}t.isRecentPointerDateSelect=!1}
var n=this.documentPointer=new Tl(document)
n.shouldIgnoreMove=!0,n.shouldWatchScroll=!1,n.emitter.on("pointerdown",this.onDocumentPointerDown),n.emitter.on("pointerup",this.onDocumentPointerUp),e.emitter.on("select",this.onSelect)}return e.prototype.destroy=function(){this.context.emitter.off("select",this.onSelect),this.documentPointer.destroy()},e}(),jl={fixedMirrorParent:xn},Bl={dateClick:xn,eventDragStart:xn,eventDragStop:xn,eventDrop:xn,eventResizeStart:xn,eventResizeStop:xn,eventResize:xn,drop:xn,eventReceive:xn,eventLeave:xn},ql=function(){function e(e,t){var n=this
this.receivingContext=null,this.droppableEvent=null,this.suppliedDragMeta=null,this.dragMeta=null,this.handleDragStart=function(e){n.dragMeta=n.buildDragMeta(e.subjectEl)},this.handleHitUpdate=function(e,t,r){var o=n.hitDragging.dragging,a=null,s=null,l=!1,u={affectedEvents:{defs:{},instances:{}},mutatedEvents:{defs:{},instances:{}},isEvent:n.dragMeta.create}
e&&(a=e.context,n.canDropElOnCalendar(r.subjectEl,a)&&(s=function(e,t,n){for(var r=i({},t.leftoverProps),o=0,a=n.pluginHooks.externalDefTransforms;o<a.length;o++){var s=a[o]
i(r,s(e,t))}var l=Zn(r,n),u=l.refined,c=l.extra,d=Yn(u,c,t.sourceId,e.allDay,n.options.forceEventDuration||Boolean(t.duration),n),f=e.range.start
e.allDay&&t.startTime&&(f=n.dateEnv.add(f,t.startTime))
var h=t.duration?n.dateEnv.add(f,t.duration):Cr(e.allDay,f,n),p=Nt(d.defId,{start:f,end:h})
return{def:d,instance:p}}(e.dateSpan,n.dragMeta,a),u.mutatedEvents=Nn(s),(l=!va(u,e.dateProfile,a))&&(u.mutatedEvents={defs:{},instances:{}},s=null))),n.displayDrag(a,u),o.setMirrorIsVisible(t||!s||!document.querySelector(".fc-event-mirror")),l?ut():ct(),t||(o.setMirrorNeedsRevert(!s),n.receivingContext=a,n.droppableEvent=s)},this.handleDragEnd=function(e){var t=n,r=t.receivingContext,o=t.droppableEvent
if(n.clearDrag(),r&&o){var a=n.hitDragging.finalHit,s=a.context.viewApi,l=n.dragMeta
if(r.emitter.trigger("drop",i(i({},Ll(a.dateSpan,r)),{draggedEl:e.subjectEl,jsEvent:e.origEvent,view:s})),l.create){var u=Nn(o)
r.dispatch({type:"MERGE_EVENTS",eventStore:u}),e.isTouch&&r.dispatch({type:"SELECT_EVENT",eventInstanceId:o.instance.instanceId}),r.emitter.trigger("eventReceive",{event:new Pr(r,o.def,o.instance),relatedEvents:[],revert:function(){r.dispatch({type:"REMOVE_EVENTS",eventStore:u})},draggedEl:e.subjectEl,view:s})}}n.receivingContext=null,n.droppableEvent=null}
var r=this.hitDragging=new Hl(e,zo)
r.requireInitial=!1,r.emitter.on("dragstart",this.handleDragStart),r.emitter.on("hitupdate",this.handleHitUpdate),r.emitter.on("dragend",this.handleDragEnd),this.suppliedDragMeta=t}return e.prototype.buildDragMeta=function(e){return"object"==typeof this.suppliedDragMeta?Zo(this.suppliedDragMeta):"function"==typeof this.suppliedDragMeta?Zo(this.suppliedDragMeta(e)):(t=function(e,t){var n=Bo.dataAttrPrefix,r=(n?n+"-":"")+t
return e.getAttribute("data-"+r)||""}(e,"event"),Zo(t?JSON.parse(t):{create:!1}))
var t},e.prototype.displayDrag=function(e,t){var n=this.receivingContext
n&&n!==e&&n.dispatch({type:"UNSET_EVENT_DRAG"}),e&&e.dispatch({type:"SET_EVENT_DRAG",state:t})},e.prototype.clearDrag=function(){this.receivingContext&&this.receivingContext.dispatch({type:"UNSET_EVENT_DRAG"})},e.prototype.canDropElOnCalendar=function(e,t){var n=t.options.dropAccept
return"function"==typeof n?n.call(t.calendarApi,e):"string"!=typeof n||!n||Boolean(Ye(e,n))},e}()
Bo.dataAttrPrefix=""
!function(){function e(e,t){var n=this
void 0===t&&(t={}),this.handlePointerDown=function(e){var t=n.dragging,r=n.settings,i=r.minDistance,o=r.longPressDelay
t.minDistance=null!=i?i:e.isTouch?0:wn.eventDragMinDistance,t.delay=e.isTouch?null!=o?o:wn.longPressDelay:0},this.handleDragStart=function(e){e.isTouch&&n.dragging.delay&&e.subjectEl.classList.contains("fc-event")&&n.dragging.mirror.getMirrorEl().classList.add("fc-event-selected")},this.settings=t
var r=this.dragging=new Ol(e)
r.touchScrollAllowed=!1,null!=t.itemSelector&&(r.pointer.selector=t.itemSelector),null!=t.appendTo&&(r.mirror.parentNode=t.appendTo),r.emitter.on("pointerdown",this.handlePointerDown),r.emitter.on("dragstart",this.handleDragStart),new ql(r,t.eventData)}e.prototype.destroy=function(){this.dragging.destroy()}}()
var Zl=function(e){function t(t){var n=e.call(this,t)||this
n.shouldIgnoreMove=!1,n.mirrorSelector="",n.currentMirrorEl=null,n.handlePointerDown=function(e){n.emitter.trigger("pointerdown",e),n.shouldIgnoreMove||n.emitter.trigger("dragstart",e)},n.handlePointerMove=function(e){n.shouldIgnoreMove||n.emitter.trigger("dragmove",e)},n.handlePointerUp=function(e){n.emitter.trigger("pointerup",e),n.shouldIgnoreMove||n.emitter.trigger("dragend",e)}
var r=n.pointer=new Tl(t)
return r.emitter.on("pointerdown",n.handlePointerDown),r.emitter.on("pointermove",n.handlePointerMove),r.emitter.on("pointerup",n.handlePointerUp),n}return r(t,e),t.prototype.destroy=function(){this.pointer.destroy()},t.prototype.setIgnoreMove=function(e){this.shouldIgnoreMove=e},t.prototype.setMirrorIsVisible=function(e){if(e)this.currentMirrorEl&&(this.currentMirrorEl.style.visibility="",this.currentMirrorEl=null)
else{var t=this.mirrorSelector?document.querySelector(this.mirrorSelector):null
t&&(this.currentMirrorEl=t,t.style.visibility="hidden")}},t}(jo)
!function(){function e(e,t){var n=document
e===document||e instanceof Element?(n=e,t=t||{}):t=e||{}
var r=this.dragging=new Zl(n)
"string"==typeof t.itemSelector?r.pointer.selector=t.itemSelector:n===document&&(r.pointer.selector="[data-event]"),"string"==typeof t.mirrorSelector&&(r.mirrorSelector=t.mirrorSelector),new ql(r,t.eventData)}e.prototype.destroy=function(){this.dragging.destroy()}}()
const Gl=Ii({componentInteractions:[Vl,Ul,Fl,Wl],calendarInteractions:[zl],elementDraggingImpl:Ol,optionRefiners:jl,listenerRefiners:Bl})
var Yl=function n(r){var i=t[r]
if(void 0!==i)return i.exports
var o=t[r]={exports:{}}
return e[r](o,o.exports,n),o.exports}(272)
var Xl=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.offsetForArray=function(e){return $l(e,this.timeZoneName).offset},t.prototype.timestampToArray=function(e){return[(t=Yl.c9.fromMillis(e,{zone:this.timeZoneName})).year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond]
var t},t}(Oo)
function $l(e,t,n){return Yl.c9.fromObject({zone:t,locale:n,year:e[0],month:e[1]+1,day:e[2],hour:e[3],minute:e[4],second:e[5],millisecond:e[6]})}function Jl(e){var t=e.match(/^(.*?)\{(.*)\}(.*)$/)
if(t){var n=Jl(t[2])
return{head:t[1],middle:n,tail:t[3],whole:t[1]+n.whole+t[3]}}return{head:null,middle:null,tail:null,whole:e}}function Kl(e,t,n,r){if(e.middle){var i=t(e.head),o=Kl(e.middle,t,n,r),a=t(e.tail),s=n(e.head),l=Kl(e.middle,t,n,r),u=n(e.tail)
if(i===s&&a===u)return i+(o===l?o:o+r+l)+a}var c=t(e.whole),d=n(e.whole)
return c===d?c:c+r+d}const Ql=Ii({cmdFormatter:function(e,t){var n=Jl(e)
if(t.end){var r=$l(t.start.array,t.timeZone,t.localeCodes[0]),i=$l(t.end.array,t.timeZone,t.localeCodes[0])
return Kl(n,r.toFormat.bind(r),i.toFormat.bind(i),t.defaultSeparator)}return $l(t.date.array,t.timeZone,t.localeCodes[0]).toFormat(n.whole)},namedTimeZonedImpl:Xl}),eu="BaseElementIndex.siteId"
class tu{constructor({$button:e,menu:t,onChange:n}){this.handleSiteChange=e=>{const{$button:t,menu:n}=this,r=$(e.selectedOption).addClass("sel")
n.$options.removeClass("sel"),t.html(r.html())
const i=parseInt(r.data("site-id"))
this.setSite(i)},this.$button=e,this.onChange=n,this.menu=t,t.on("optionselect",this.handleSiteChange),this.siteId=this.getInitialSiteId()}getDefaultSiteId(){const{menu:e}=this
let t=e.$options.filter(".sel:first")
return t.length||(t=e.$options.first()),t.length?parseInt(t.data("site-id")):null}getInitialSiteId(){const e=this.getDefaultSiteId(),t=Craft.getLocalStorage(eu)
return t&&t!=e?(this.selectSiteId(t),t):e}selectSiteId(e){const{menu:t}=this,n=t.$options.filter(`[data-site-id="${e}"]:first`)
n.length&&n.trigger("click")}setSite(e){Craft.setLocalStorage(eu,e),this.siteId=e,this.onChange(e)}static tryCreate(e){const t=$("#main-container .sitemenubtn:first")
if(!t.length)return null
const{menu:n}=t.menubtn().data("menubtn")
return n?new tu({$button:t,menu:n,onChange:e}):null}}const nu="CalendarField.Calendar.defaultDate"
class ru{constructor(e,t){this.handleDatesRender=()=>{const{calendar:e}=this
e&&Craft.setLocalStorage(nu,e.getDate())},this.handleEventClick=({event:e})=>{const{editUrl:t}=e.extendedProps
t&&window.location.assign(t)},this.handleEventChange=({event:e,revert:t})=>{const{eventId:n}=e.extendedProps
let{allDay:r,end:i,start:o}=e
if(r&&!i&&(i=o),!i||!o)return t()
const a={dateStart:o.toISOString(),dateEnd:i.toISOString()}
Craft.postActionRequest("calendarfield/calendar/update-event",{eventId:n,attributes:a},(e=>{null===e?t():this.calendar.refetchEvents()}))},this.update=()=>{const{calendar:e}=this
e&&(e.removeAllEventSources(),e.addEventSource(this.getEventSource()))},"string"==typeof e&&(e=document.querySelector(e)),this.element=e,this.options=t,this.siteMenu=this.initSiteMenu(),this.calendar=this.initCalendar(t),this.update()}initCalendar({input:e}){const{element:t}=this,n=new ns(t,Object.assign(Object.assign({},e),{datesSet:this.handleDatesRender,editable:!0,eventClick:this.handleEventClick,eventDrop:this.handleEventChange,eventResize:this.handleEventChange,initialDate:this.getDefaultDate(),initialView:"dayGridMonth",headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,listWeek"},plugins:[ks,Gl,Ql,dl,Sl]}))
return n.render(),n}getDefaultDate(){let e=Craft.getLocalStorage(nu)
return e||(e=new Date),e}getEventSource(){const{siteMenu:e}=this,{eventsUrl:t}=this.options,n={}
return e&&(n.siteId=e.siteId),{url:Craft.getActionUrl("calendarfield/calendar/fetch-events"),extraParams:n}}initSiteMenu(){return tu.tryCreate(this.update)}}var iu;(iu=window).CalendarField=Object.assign(Object.assign({},iu.CalendarField||{}),{Calendar:ru})})()
