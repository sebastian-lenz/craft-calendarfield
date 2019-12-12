!function(e){var t={}
function n(r){if(t[r])return t[r].exports
var i=t[r]={i:r,l:!1,exports:{}}
return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e
if(4&t&&"object"==typeof e&&e&&e.__esModule)return e
var r=Object.create(null)
if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i))
return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict"
function r(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t,n){return(l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null]
r.push.apply(r,t)
var i=new(Function.bind.apply(e,r))
return n&&s(i,n.prototype),i}).apply(null,arguments)}function u(e){var t="function"==typeof Map?new Map:void 0
return(u=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e
var n
if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function")
if(void 0!==t){if(t.has(e))return t.get(e)
t.set(e,r)}function r(){return l(e,arguments,a(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,e)})(e)}Object.defineProperty(t,"__esModule",{value:!0})
var c=function(e){function t(){return e.apply(this,arguments)||this}return o(t,e),t}(u(Error)),d=function(e){function t(t){return e.call(this,"Invalid DateTime: "+t.toMessage())||this}return o(t,e),t}(c),h=function(e){function t(t){return e.call(this,"Invalid Interval: "+t.toMessage())||this}return o(t,e),t}(c),f=function(e){function t(t){return e.call(this,"Invalid Duration: "+t.toMessage())||this}return o(t,e),t}(c),p=function(e){function t(){return e.apply(this,arguments)||this}return o(t,e),t}(c),v=function(e){function t(t){return e.call(this,"Invalid unit "+t)||this}return o(t,e),t}(c),g=function(e){function t(){return e.apply(this,arguments)||this}return o(t,e),t}(c),m=function(e){function t(){return e.call(this,"Zone is an abstract class")||this}return o(t,e),t}(c),y="numeric",E="short",S="long",w={year:y,month:y,day:y},b={year:y,month:E,day:y},D={year:y,month:S,day:y},T={year:y,month:S,day:y,weekday:S},C={hour:y,minute:y},M={hour:y,minute:y,second:y},k={hour:y,minute:y,second:y,timeZoneName:E},I={hour:y,minute:y,second:y,timeZoneName:S},R={hour:y,minute:y,hour12:!1},O={hour:y,minute:y,second:y,hour12:!1},N={hour:y,minute:y,second:y,hour12:!1,timeZoneName:E},P={hour:y,minute:y,second:y,hour12:!1,timeZoneName:S},_={year:y,month:y,day:y,hour:y,minute:y},L={year:y,month:y,day:y,hour:y,minute:y,second:y},H={year:y,month:E,day:y,hour:y,minute:y},x={year:y,month:E,day:y,hour:y,minute:y,second:y},V={year:y,month:E,day:y,weekday:E,hour:y,minute:y},z={year:y,month:S,day:y,hour:y,minute:y,timeZoneName:E},A={year:y,month:S,day:y,hour:y,minute:y,second:y,timeZoneName:E},U={year:y,month:S,day:y,weekday:S,hour:y,minute:y,timeZoneName:S},F={year:y,month:S,day:y,weekday:S,hour:y,minute:y,second:y,timeZoneName:S}
function j(e){return void 0===e}function Z(e){return"number"==typeof e}function B(e){return"number"==typeof e&&e%1==0}function W(){try{return"undefined"!=typeof Intl&&Intl.DateTimeFormat}catch(e){return!1}}function Y(){return!j(Intl.DateTimeFormat.prototype.formatToParts)}function q(){try{return"undefined"!=typeof Intl&&!!Intl.RelativeTimeFormat}catch(e){return!1}}function G(e,t,n){if(0!==e.length)return e.reduce((function(e,r){var i=[t(r),r]
return e&&n(e[0],i[0])===e[0]?e:i}),null)[1]}function X(e,t){return t.reduce((function(t,n){return t[n]=e[n],t}),{})}function J(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function $(e,t,n){return B(e)&&e>=t&&e<=n}function Q(e,t){return void 0===t&&(t=2),e.toString().length<t?("0".repeat(t)+e).slice(-t):e.toString()}function K(e){return j(e)||null===e||""===e?void 0:parseInt(e,10)}function ee(e){if(!j(e)&&null!==e&&""!==e){var t=1e3*parseFloat("0."+e)
return Math.floor(t)}}function te(e,t,n){void 0===n&&(n=!1)
var r=Math.pow(10,t)
return(n?Math.trunc:Math.round)(e*r)/r}function ne(e){return e%4==0&&(e%100!=0||e%400==0)}function re(e){return ne(e)?366:365}function ie(e,t){var n=function(e,t){return e-t*Math.floor(e/t)}(t-1,12)+1
return 2===n?ne(e+(t-n)/12)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function oe(e){var t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond)
return e.year<100&&e.year>=0&&(t=new Date(t)).setUTCFullYear(t.getUTCFullYear()-1900),+t}function ae(e){var t=(e+Math.floor(e/4)-Math.floor(e/100)+Math.floor(e/400))%7,n=e-1,r=(n+Math.floor(n/4)-Math.floor(n/100)+Math.floor(n/400))%7
return 4===t||3===r?53:52}function se(e){return e>99?e:e>60?1900+e:2e3+e}function le(e,t,n,r){void 0===r&&(r=null)
var i=new Date(e),o={hour12:!1,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}
r&&(o.timeZone=r)
var a=Object.assign({timeZoneName:t},o),s=W()
if(s&&Y()){var l=new Intl.DateTimeFormat(n,a).formatToParts(i).find((function(e){return"timezonename"===e.type.toLowerCase()}))
return l?l.value:null}if(s){var u=new Intl.DateTimeFormat(n,o).format(i)
return new Intl.DateTimeFormat(n,a).format(i).substring(u.length).replace(/^[, \u200e]+/,"")}return null}function ue(e,t){var n=parseInt(e,10)
Number.isNaN(n)&&(n=0)
var r=parseInt(t,10)||0
return 60*n+(n<0||Object.is(n,-0)?-r:r)}function ce(e){var t=Number(e)
if("boolean"==typeof e||""===e||Number.isNaN(t))throw new g("Invalid unit value "+e)
return t}function de(e,t,n){var r={}
for(var i in e)if(J(e,i)){if(n.indexOf(i)>=0)continue
var o=e[i]
if(null==o)continue
r[t(i)]=ce(o)}return r}function he(e,t){var n=Math.trunc(e/60),r=Math.abs(e%60),i=n>=0&&!Object.is(n,-0)?"+":"-",o=""+i+Math.abs(n)
switch(t){case"short":return""+i+Q(Math.abs(n),2)+":"+Q(r,2)
case"narrow":return r>0?o+":"+r:o
case"techie":return""+i+Q(Math.abs(n),2)+Q(r,2)
default:throw new RangeError("Value format "+t+" is out of range for property format")}}function fe(e){return X(e,["hour","minute","second","millisecond"])}var pe=/[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/
function ve(e){return JSON.stringify(e,Object.keys(e).sort())}var ge=["January","February","March","April","May","June","July","August","September","October","November","December"],me=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ye=["J","F","M","A","M","J","J","A","S","O","N","D"]
function Ee(e){switch(e){case"narrow":return ye
case"short":return me
case"long":return ge
case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"]
case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"]
default:return null}}var Se=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],we=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],be=["M","T","W","T","F","S","S"]
function De(e){switch(e){case"narrow":return be
case"short":return we
case"long":return Se
case"numeric":return["1","2","3","4","5","6","7"]
default:return null}}var Te=["AM","PM"],Ce=["Before Christ","Anno Domini"],Me=["BC","AD"],ke=["B","A"]
function Ie(e){switch(e){case"narrow":return ke
case"short":return Me
case"long":return Ce
default:return null}}function Re(e,t){var n="",r=e,i=Array.isArray(r),o=0
for(r=i?r:r[Symbol.iterator]();;){var a
if(i){if(o>=r.length)break
a=r[o++]}else{if((o=r.next()).done)break
a=o.value}var s=a
s.literal?n+=s.val:n+=t(s.val)}return n}var Oe={D:w,DD:b,DDD:D,DDDD:T,t:C,tt:M,ttt:k,tttt:I,T:R,TT:O,TTT:N,TTTT:P,f:_,ff:H,fff:z,ffff:U,F:L,FF:x,FFF:A,FFFF:F},Ne=function(){function e(e,t){this.opts=t,this.loc=e,this.systemLoc=null}e.create=function(t,n){return void 0===n&&(n={}),new e(t,n)},e.parseFormat=function(e){for(var t=null,n="",r=!1,i=[],o=0;o<e.length;o++){var a=e.charAt(o)
"'"===a?(n.length>0&&i.push({literal:r,val:n}),t=null,n="",r=!r):r?n+=a:a===t?n+=a:(n.length>0&&i.push({literal:!1,val:n}),n=a,t=a)}return n.length>0&&i.push({literal:r,val:n}),i},e.macroTokenToFormatOpts=function(e){return Oe[e]}
var t=e.prototype
return t.formatWithSystemDefault=function(e,t){return null===this.systemLoc&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,Object.assign({},this.opts,t)).format()},t.formatDateTime=function(e,t){return void 0===t&&(t={}),this.loc.dtFormatter(e,Object.assign({},this.opts,t)).format()},t.formatDateTimeParts=function(e,t){return void 0===t&&(t={}),this.loc.dtFormatter(e,Object.assign({},this.opts,t)).formatToParts()},t.resolvedOptions=function(e,t){return void 0===t&&(t={}),this.loc.dtFormatter(e,Object.assign({},this.opts,t)).resolvedOptions()},t.num=function(e,t){if(void 0===t&&(t=0),this.opts.forceSimple)return Q(e,t)
var n=Object.assign({},this.opts)
return t>0&&(n.padTo=t),this.loc.numberFormatter(n).format(e)},t.formatDateTimeFromString=function(t,n){var r=this,i="en"===this.loc.listingMode(),o=this.loc.outputCalendar&&"gregory"!==this.loc.outputCalendar&&Y(),a=function(e,n){return r.loc.extract(t,e,n)},s=function(e){return t.isOffsetFixed&&0===t.offset&&e.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,e.format):""},l=function(){return i?function(e){return Te[e.hour<12?0:1]}(t):a({hour:"numeric",hour12:!0},"dayperiod")},u=function(e,n){return i?function(e,t){return Ee(t)[e.month-1]}(t,e):a(n?{month:e}:{month:e,day:"numeric"},"month")},c=function(e,n){return i?function(e,t){return De(t)[e.weekday-1]}(t,e):a(n?{weekday:e}:{weekday:e,month:"long",day:"numeric"},"weekday")},d=function(e){return i?function(e,t){return Ie(t)[e.year<0?0:1]}(t,e):a({era:e},"era")}
return Re(e.parseFormat(n),(function(n){switch(n){case"S":return r.num(t.millisecond)
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
case"ZZZ":return s({format:"techie",allowZ:!1})
case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:r.loc.locale})
case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:r.loc.locale})
case"z":return t.zoneName
case"a":return l()
case"d":return o?a({day:"numeric"},"day"):r.num(t.day)
case"dd":return o?a({day:"2-digit"},"day"):r.num(t.day,2)
case"c":return r.num(t.weekday)
case"ccc":return c("short",!0)
case"cccc":return c("long",!0)
case"ccccc":return c("narrow",!0)
case"E":return r.num(t.weekday)
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
return Re(a,(r=l,function(e){var t=o(e)
return t?i.num(r.get(t),e.length):e}))},e}(),Pe=function(){function e(e,t){this.reason=e,this.explanation=t}return e.prototype.toMessage=function(){return this.explanation?this.reason+": "+this.explanation:this.reason},e}(),_e=function(){function e(){}var t=e.prototype
return t.offsetName=function(e,t){throw new m},t.formatOffset=function(e,t){throw new m},t.offset=function(e){throw new m},t.equals=function(e){throw new m},i(e,[{key:"type",get:function(){throw new m}},{key:"name",get:function(){throw new m}},{key:"universal",get:function(){throw new m}},{key:"isValid",get:function(){throw new m}}]),e}(),Le=null,He=function(e){function t(){return e.apply(this,arguments)||this}o(t,e)
var n=t.prototype
return n.offsetName=function(e,t){return le(e,t.format,t.locale)},n.formatOffset=function(e,t){return he(this.offset(e),t)},n.offset=function(e){return-new Date(e).getTimezoneOffset()},n.equals=function(e){return"local"===e.type},i(t,[{key:"type",get:function(){return"local"}},{key:"name",get:function(){return W()?(new Intl.DateTimeFormat).resolvedOptions().timeZone:"local"}},{key:"universal",get:function(){return!1}},{key:"isValid",get:function(){return!0}}],[{key:"instance",get:function(){return null===Le&&(Le=new t),Le}}]),t}(_e),xe=RegExp("^"+pe.source+"$"),Ve={}
var ze={year:0,month:1,day:2,hour:3,minute:4,second:5}
var Ae={},Ue=function(e){function t(n){var r
return(r=e.call(this)||this).zoneName=n,r.valid=t.isValidZone(n),r}o(t,e),t.create=function(e){return Ae[e]||(Ae[e]=new t(e)),Ae[e]},t.resetCache=function(){Ae={},Ve={}},t.isValidSpecifier=function(e){return!(!e||!e.match(xe))},t.isValidZone=function(e){try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch(e){return!1}},t.parseGMTOffset=function(e){if(e){var t=e.match(/^Etc\/GMT([+-]\d{1,2})$/i)
if(t)return-60*parseInt(t[1])}return null}
var n=t.prototype
return n.offsetName=function(e,t){return le(e,t.format,t.locale,this.name)},n.formatOffset=function(e,t){return he(this.offset(e),t)},n.offset=function(e){var t,n=new Date(e),r=(t=this.name,Ve[t]||(Ve[t]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})),Ve[t]),i=r.formatToParts?function(e,t){for(var n=e.formatToParts(t),r=[],i=0;i<n.length;i++){var o=n[i],a=o.type,s=o.value,l=ze[a]
j(l)||(r[l]=parseInt(s,10))}return r}(r,n):function(e,t){var n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n),i=r[1],o=r[2]
return[r[3],i,o,r[4],r[5],r[6]]}(r,n),o=i[0],a=i[1],s=i[2],l=i[3],u=oe({year:o,month:a,day:s,hour:24===l?0:l,minute:i[4],second:i[5],millisecond:0}),c=n.valueOf()
return(u-(c-=c%1e3))/6e4},n.equals=function(e){return"iana"===e.type&&e.name===this.name},i(t,[{key:"type",get:function(){return"iana"}},{key:"name",get:function(){return this.zoneName}},{key:"universal",get:function(){return!1}},{key:"isValid",get:function(){return this.valid}}]),t}(_e),Fe=null,je=function(e){function t(t){var n
return(n=e.call(this)||this).fixed=t,n}o(t,e),t.instance=function(e){return 0===e?t.utcInstance:new t(e)},t.parseSpecifier=function(e){if(e){var n=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i)
if(n)return new t(ue(n[1],n[2]))}return null},i(t,null,[{key:"utcInstance",get:function(){return null===Fe&&(Fe=new t(0)),Fe}}])
var n=t.prototype
return n.offsetName=function(){return this.name},n.formatOffset=function(e,t){return he(this.fixed,t)},n.offset=function(){return this.fixed},n.equals=function(e){return"fixed"===e.type&&e.fixed===this.fixed},i(t,[{key:"type",get:function(){return"fixed"}},{key:"name",get:function(){return 0===this.fixed?"UTC":"UTC"+he(this.fixed,"narrow")}},{key:"universal",get:function(){return!0}},{key:"isValid",get:function(){return!0}}]),t}(_e),Ze=function(e){function t(t){var n
return(n=e.call(this)||this).zoneName=t,n}o(t,e)
var n=t.prototype
return n.offsetName=function(){return null},n.formatOffset=function(){return""},n.offset=function(){return NaN},n.equals=function(){return!1},i(t,[{key:"type",get:function(){return"invalid"}},{key:"name",get:function(){return this.zoneName}},{key:"universal",get:function(){return!1}},{key:"isValid",get:function(){return!1}}]),t}(_e)
function Be(e,t){var n
if(j(e)||null===e)return t
if(e instanceof _e)return e
if("string"==typeof e){var r=e.toLowerCase()
return"local"===r?t:"utc"===r||"gmt"===r?je.utcInstance:null!=(n=Ue.parseGMTOffset(e))?je.instance(n):Ue.isValidSpecifier(r)?Ue.create(e):je.parseSpecifier(r)||new Ze(e)}return Z(e)?je.instance(e):"object"==typeof e&&e.offset&&"number"==typeof e.offset?e:new Ze(e)}var We=function(){return Date.now()},Ye=null,qe=null,Ge=null,Xe=null,Je=!1,$e=function(){function e(){}return e.resetCaches=function(){st.resetCache(),Ue.resetCache()},i(e,null,[{key:"now",get:function(){return We},set:function(e){We=e}},{key:"defaultZoneName",get:function(){return e.defaultZone.name},set:function(e){Ye=e?Be(e):null}},{key:"defaultZone",get:function(){return Ye||He.instance}},{key:"defaultLocale",get:function(){return qe},set:function(e){qe=e}},{key:"defaultNumberingSystem",get:function(){return Ge},set:function(e){Ge=e}},{key:"defaultOutputCalendar",get:function(){return Xe},set:function(e){Xe=e}},{key:"throwOnInvalid",get:function(){return Je},set:function(e){Je=e}}]),e}(),Qe={}
function Ke(e,t){void 0===t&&(t={})
var n=JSON.stringify([e,t]),r=Qe[n]
return r||(r=new Intl.DateTimeFormat(e,t),Qe[n]=r),r}var et={}
var tt={}
var nt=null
function rt(e,t,n,r,i){var o=e.listingMode(n)
return"error"===o?null:"en"===o?r(t):i(t)}var it=function(){function e(e,t,n){if(this.padTo=n.padTo||0,this.floor=n.floor||!1,!t&&W()){var r={useGrouping:!1}
n.padTo>0&&(r.minimumIntegerDigits=n.padTo),this.inf=function(e,t){void 0===t&&(t={})
var n=JSON.stringify([e,t]),r=et[n]
return r||(r=new Intl.NumberFormat(e,t),et[n]=r),r}(e,r)}}return e.prototype.format=function(e){if(this.inf){var t=this.floor?Math.floor(e):e
return this.inf.format(t)}return Q(this.floor?Math.floor(e):te(e,3),this.padTo)},e}(),ot=function(){function e(e,t,n){var r
if(this.opts=n,this.hasIntl=W(),e.zone.universal&&this.hasIntl?(r="UTC",n.timeZoneName?this.dt=e:this.dt=0===e.offset?e:rr.fromMillis(e.ts+60*e.offset*1e3)):"local"===e.zone.type?this.dt=e:(this.dt=e,r=e.zone.name),this.hasIntl){var i=Object.assign({},this.opts)
r&&(i.timeZone=r),this.dtf=Ke(t,i)}}var t=e.prototype
return t.format=function(){if(this.hasIntl)return this.dtf.format(this.dt.toJSDate())
var e=function(e){switch(ve(X(e,["weekday","era","year","month","day","hour","minute","second","timeZoneName","hour12"]))){case ve(w):return"M/d/yyyy"
case ve(b):return"LLL d, yyyy"
case ve(D):return"LLLL d, yyyy"
case ve(T):return"EEEE, LLLL d, yyyy"
case ve(C):return"h:mm a"
case ve(M):return"h:mm:ss a"
case ve(k):case ve(I):return"h:mm a"
case ve(R):return"HH:mm"
case ve(O):return"HH:mm:ss"
case ve(N):case ve(P):return"HH:mm"
case ve(_):return"M/d/yyyy, h:mm a"
case ve(H):return"LLL d, yyyy, h:mm a"
case ve(z):return"LLLL d, yyyy, h:mm a"
case ve(U):return"EEEE, LLLL d, yyyy, h:mm a"
case ve(L):return"M/d/yyyy, h:mm:ss a"
case ve(x):return"LLL d, yyyy, h:mm:ss a"
case ve(V):return"EEE, d LLL yyyy, h:mm a"
case ve(A):return"LLLL d, yyyy, h:mm:ss a"
case ve(F):return"EEEE, LLLL d, yyyy, h:mm:ss a"
default:return"EEEE, LLLL d, yyyy, h:mm a"}}(this.opts),t=st.create("en-US")
return Ne.create(t).formatDateTimeFromString(this.dt,e)},t.formatToParts=function(){return this.hasIntl&&Y()?this.dtf.formatToParts(this.dt.toJSDate()):[]},t.resolvedOptions=function(){return this.hasIntl?this.dtf.resolvedOptions():{locale:"en-US",numberingSystem:"latn",outputCalendar:"gregory"}},e}(),at=function(){function e(e,t,n){this.opts=Object.assign({style:"long"},n),!t&&q()&&(this.rtf=function(e,t){void 0===t&&(t={})
var n=JSON.stringify([e,t]),r=tt[n]
return r||(r=new Intl.RelativeTimeFormat(e,t),tt[n]=r),r}(e,n))}var t=e.prototype
return t.format=function(e,t){return this.rtf?this.rtf.format(e,t):function(e,t,n,r){void 0===n&&(n="always"),void 0===r&&(r=!1)
var i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},o=-1===["hours","minutes","seconds"].indexOf(e)
if("auto"===n&&o){var a="days"===e
switch(t){case 1:return a?"tomorrow":"next "+i[e][0]
case-1:return a?"yesterday":"last "+i[e][0]
case 0:return a?"today":"this "+i[e][0]}}var s=Object.is(t,-0)||t<0,l=Math.abs(t),u=1===l,c=i[e],d=r?u?c[1]:c[2]||c[1]:u?i[e][0]:e
return s?l+" "+d+" ago":"in "+l+" "+d}(t,e,this.opts.numeric,"long"!==this.opts.style)},t.formatToParts=function(e,t){return this.rtf?this.rtf.formatToParts(e,t):[]},e}(),st=function(){function e(e,t,n,r){var i=function(e){var t=e.indexOf("-u-")
if(-1===t)return[e]
var n,r=e.substring(0,t)
try{n=Ke(e).resolvedOptions()}catch(e){n=Ke(r).resolvedOptions()}var i=n
return[r,i.numberingSystem,i.calendar]}(e),o=i[0],a=i[1],s=i[2]
this.locale=o,this.numberingSystem=t||a||null,this.outputCalendar=n||s||null,this.intl=function(e,t,n){return W()?n||t?(e+="-u",n&&(e+="-ca-"+n),t&&(e+="-nu-"+t),e):e:[]}(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=r,this.fastNumbersCached=null}e.fromOpts=function(t){return e.create(t.locale,t.numberingSystem,t.outputCalendar,t.defaultToEN)},e.create=function(t,n,r,i){void 0===i&&(i=!1)
var o=t||$e.defaultLocale
return new e(o||(i?"en-US":function(){if(nt)return nt
if(W()){var e=(new Intl.DateTimeFormat).resolvedOptions().locale
return nt=e&&"und"!==e?e:"en-US"}return nt="en-US"}()),n||$e.defaultNumberingSystem,r||$e.defaultOutputCalendar,o)},e.resetCache=function(){nt=null,Qe={},et={},tt={}},e.fromObject=function(t){var n=void 0===t?{}:t,r=n.locale,i=n.numberingSystem,o=n.outputCalendar
return e.create(r,i,o)}
var t=e.prototype
return t.listingMode=function(e){void 0===e&&(e=!0)
var t=W()&&Y(),n=this.isEnglish(),r=!(null!==this.numberingSystem&&"latn"!==this.numberingSystem||null!==this.outputCalendar&&"gregory"!==this.outputCalendar)
return t||n&&r||e?!t||n&&r?"en":"intl":"error"},t.clone=function(t){return t&&0!==Object.getOwnPropertyNames(t).length?e.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,t.defaultToEN||!1):this},t.redefaultToEN=function(e){return void 0===e&&(e={}),this.clone(Object.assign({},e,{defaultToEN:!0}))},t.redefaultToSystem=function(e){return void 0===e&&(e={}),this.clone(Object.assign({},e,{defaultToEN:!1}))},t.months=function(e,t,n){var r=this
return void 0===t&&(t=!1),void 0===n&&(n=!0),rt(this,e,n,Ee,(function(){var n=t?{month:e,day:"numeric"}:{month:e},i=t?"format":"standalone"
return r.monthsCache[i][e]||(r.monthsCache[i][e]=function(e){for(var t=[],n=1;n<=12;n++){var r=rr.utc(2016,n,1)
t.push(e(r))}return t}((function(e){return r.extract(e,n,"month")}))),r.monthsCache[i][e]}))},t.weekdays=function(e,t,n){var r=this
return void 0===t&&(t=!1),void 0===n&&(n=!0),rt(this,e,n,De,(function(){var n=t?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},i=t?"format":"standalone"
return r.weekdaysCache[i][e]||(r.weekdaysCache[i][e]=function(e){for(var t=[],n=1;n<=7;n++){var r=rr.utc(2016,11,13+n)
t.push(e(r))}return t}((function(e){return r.extract(e,n,"weekday")}))),r.weekdaysCache[i][e]}))},t.meridiems=function(e){var t=this
return void 0===e&&(e=!0),rt(this,void 0,e,(function(){return Te}),(function(){if(!t.meridiemCache){var e={hour:"numeric",hour12:!0}
t.meridiemCache=[rr.utc(2016,11,13,9),rr.utc(2016,11,13,19)].map((function(n){return t.extract(n,e,"dayperiod")}))}return t.meridiemCache}))},t.eras=function(e,t){var n=this
return void 0===t&&(t=!0),rt(this,e,t,Ie,(function(){var t={era:e}
return n.eraCache[e]||(n.eraCache[e]=[rr.utc(-40,1,1),rr.utc(2017,1,1)].map((function(e){return n.extract(e,t,"era")}))),n.eraCache[e]}))},t.extract=function(e,t,n){var r=this.dtFormatter(e,t).formatToParts().find((function(e){return e.type.toLowerCase()===n}))
return r?r.value:null},t.numberFormatter=function(e){return void 0===e&&(e={}),new it(this.intl,e.forceSimple||this.fastNumbers,e)},t.dtFormatter=function(e,t){return void 0===t&&(t={}),new ot(e,this.intl,t)},t.relFormatter=function(e){return void 0===e&&(e={}),new at(this.intl,this.isEnglish(),e)},t.isEnglish=function(){return"en"===this.locale||"en-us"===this.locale.toLowerCase()||W()&&new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")},t.equals=function(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar},i(e,[{key:"fastNumbers",get:function(){var e
return null==this.fastNumbersCached&&(this.fastNumbersCached=(!(e=this).numberingSystem||"latn"===e.numberingSystem)&&("latn"===e.numberingSystem||!e.locale||e.locale.startsWith("en")||W()&&"latn"===new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem)),this.fastNumbersCached}}]),e}()
function lt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
var r=t.reduce((function(e,t){return e+t.source}),"")
return RegExp("^"+r+"$")}function ut(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return function(e){return t.reduce((function(t,n){var r=t[0],i=t[1],o=t[2],a=n(e,o),s=a[0],l=a[1],u=a[2]
return[Object.assign(r,s),i||l,u]}),[{},null,1]).slice(0,2)}}function ct(e){if(null==e)return[null,null]
for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
for(var i=0,o=n;i<o.length;i++){var a=o[i],s=a[0],l=a[1],u=s.exec(e)
if(u)return l(u)}return[null,null]}function dt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return function(e,n){var r,i={}
for(r=0;r<t.length;r++)i[t[r]]=K(e[n+r])
return[i,null,n+r]}}var ht=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,ft=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,9}))?)?)?/,pt=RegExp(""+ft.source+ht.source+"?"),vt=RegExp("(?:T"+pt.source+")?"),gt=dt("weekYear","weekNumber","weekDay"),mt=dt("year","ordinal"),yt=RegExp(ft.source+" ?(?:"+ht.source+"|("+pe.source+"))?"),Et=RegExp("(?: "+yt.source+")?")
function St(e,t,n){var r=e[t]
return j(r)?n:K(r)}function wt(e,t){return[{year:St(e,t),month:St(e,t+1,1),day:St(e,t+2,1)},null,t+3]}function bt(e,t){return[{hour:St(e,t,0),minute:St(e,t+1,0),second:St(e,t+2,0),millisecond:ee(e[t+3])},null,t+4]}function Dt(e,t){var n=!e[t]&&!e[t+1],r=ue(e[t+1],e[t+2])
return[{},n?null:je.instance(r),t+3]}function Tt(e,t){return[{},e[t]?Ue.create(e[t]):null,t+1]}var Ct=/^P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})(?:[.,](-?\d{1,9}))?S)?)?)$/
function Mt(e){var t=e[1],n=e[2],r=e[3],i=e[4],o=e[5],a=e[6],s=e[7],l=e[8]
return[{years:K(t),months:K(n),weeks:K(r),days:K(i),hours:K(o),minutes:K(a),seconds:K(s),milliseconds:ee(l)}]}var kt={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480}
function It(e,t,n,r,i,o,a){var s={year:2===t.length?se(K(t)):K(t),month:me.indexOf(n)+1,day:K(r),hour:K(i),minute:K(o)}
return a&&(s.second=K(a)),e&&(s.weekday=e.length>3?Se.indexOf(e)+1:we.indexOf(e)+1),s}var Rt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/
function Ot(e){var t,n=e[1],r=e[2],i=e[3],o=e[4],a=e[5],s=e[6],l=e[7],u=e[8],c=e[9],d=e[10],h=e[11],f=It(n,o,i,r,a,s,l)
return t=u?kt[u]:c?0:ue(d,h),[f,new je(t)]}var Nt=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Pt=/^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,_t=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/
function Lt(e){var t=e[1],n=e[2],r=e[3]
return[It(t,e[4],r,n,e[5],e[6],e[7]),je.utcInstance]}function Ht(e){var t=e[1],n=e[2],r=e[3],i=e[4],o=e[5],a=e[6]
return[It(t,e[7],n,r,i,o,a),je.utcInstance]}var xt=lt(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,vt),Vt=lt(/(\d{4})-?W(\d\d)(?:-?(\d))?/,vt),zt=lt(/(\d{4})-?(\d{3})/,vt),At=lt(pt),Ut=ut(wt,bt,Dt),Ft=ut(gt,bt,Dt),jt=ut(mt,bt),Zt=ut(bt,Dt)
var Bt=lt(/(\d{4})-(\d\d)-(\d\d)/,Et),Wt=lt(yt),Yt=ut(wt,bt,Dt,Tt),qt=ut(bt,Dt,Tt)
var Gt={weeks:{days:7,hours:168,minutes:10080,seconds:604800,milliseconds:6048e5},days:{hours:24,minutes:1440,seconds:86400,milliseconds:864e5},hours:{minutes:60,seconds:3600,milliseconds:36e5},minutes:{seconds:60,milliseconds:6e4},seconds:{milliseconds:1e3}},Xt=Object.assign({years:{months:12,weeks:52,days:365,hours:8760,minutes:525600,seconds:31536e3,milliseconds:31536e6},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:131040,milliseconds:78624e5},months:{weeks:4,days:30,hours:720,minutes:43200,seconds:2592e3,milliseconds:2592e6}},Gt),Jt=Object.assign({years:{months:12,weeks:52.1775,days:365.2425,hours:8765.82,minutes:525949.2,seconds:525949.2*60,milliseconds:525949.2*60*1e3},quarters:{months:3,weeks:13.044375,days:91.310625,hours:2191.455,minutes:131487.3,seconds:525949.2*60/4,milliseconds:7889237999.999999},months:{weeks:30.436875/7,days:30.436875,hours:730.485,minutes:43829.1,seconds:2629746,milliseconds:2629746e3}},Gt),$t=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],Qt=$t.slice(0).reverse()
function Kt(e,t,n){void 0===n&&(n=!1)
var r={values:n?t.values:Object.assign({},e.values,t.values||{}),loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy}
return new nn(r)}function en(e,t,n,r,i){var o=e[i][n],a=t[n]/o,s=!(Math.sign(a)===Math.sign(r[i]))&&0!==r[i]&&Math.abs(a)<=1?function(e){return e<0?Math.floor(e):Math.ceil(e)}(a):Math.trunc(a)
r[i]+=s,t[n]-=s*o}function tn(e,t){Qt.reduce((function(n,r){return j(t[r])?n:(n&&en(e,t,n,t,r),r)}),null)}var nn=function(){function e(e){var t="longterm"===e.conversionAccuracy||!1
this.values=e.values,this.loc=e.loc||st.create(),this.conversionAccuracy=t?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=t?Jt:Xt,this.isLuxonDuration=!0}e.fromMillis=function(t,n){return e.fromObject(Object.assign({milliseconds:t},n))},e.fromObject=function(t){if(null==t||"object"!=typeof t)throw new g("Duration.fromObject: argument expected to be an object, got "+(null===t?"null":typeof t))
return new e({values:de(t,e.normalizeUnit,["locale","numberingSystem","conversionAccuracy","zone"]),loc:st.fromObject(t),conversionAccuracy:t.conversionAccuracy})},e.fromISO=function(t,n){var r=function(e){return ct(e,[Ct,Mt])}(t)[0]
if(r){var i=Object.assign(r,n)
return e.fromObject(i)}return e.invalid("unparsable",'the input "'+t+"\" can't be parsed as ISO 8601")},e.invalid=function(t,n){if(void 0===n&&(n=null),!t)throw new g("need to specify a reason the Duration is invalid")
var r=t instanceof Pe?t:new Pe(t,n)
if($e.throwOnInvalid)throw new f(r)
return new e({invalid:r})},e.normalizeUnit=function(e){var t={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e?e.toLowerCase():e]
if(!t)throw new v(e)
return t},e.isDuration=function(e){return e&&e.isLuxonDuration||!1}
var t=e.prototype
return t.toFormat=function(e,t){void 0===t&&(t={})
var n=Object.assign({},t,{floor:!1!==t.round&&!1!==t.floor})
return this.isValid?Ne.create(this.loc,n).formatDurationFromString(this,e):"Invalid Duration"},t.toObject=function(e){if(void 0===e&&(e={}),!this.isValid)return{}
var t=Object.assign({},this.values)
return e.includeConfig&&(t.conversionAccuracy=this.conversionAccuracy,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t},t.toISO=function(){if(!this.isValid)return null
var e="P"
return 0!==this.years&&(e+=this.years+"Y"),0===this.months&&0===this.quarters||(e+=this.months+3*this.quarters+"M"),0!==this.weeks&&(e+=this.weeks+"W"),0!==this.days&&(e+=this.days+"D"),0===this.hours&&0===this.minutes&&0===this.seconds&&0===this.milliseconds||(e+="T"),0!==this.hours&&(e+=this.hours+"H"),0!==this.minutes&&(e+=this.minutes+"M"),0===this.seconds&&0===this.milliseconds||(e+=te(this.seconds+this.milliseconds/1e3,3)+"S"),"P"===e&&(e+="T0S"),e},t.toJSON=function(){return this.toISO()},t.toString=function(){return this.toISO()},t.valueOf=function(){return this.as("milliseconds")},t.plus=function(e){if(!this.isValid)return this
for(var t=rn(e),n={},r=0,i=$t;r<i.length;r++){var o=i[r];(J(t.values,o)||J(this.values,o))&&(n[o]=t.get(o)+this.get(o))}return Kt(this,{values:n},!0)},t.minus=function(e){if(!this.isValid)return this
var t=rn(e)
return this.plus(t.negate())},t.mapUnits=function(e){if(!this.isValid)return this
for(var t={},n=0,r=Object.keys(this.values);n<r.length;n++){var i=r[n]
t[i]=ce(e(this.values[i],i))}return Kt(this,{values:t},!0)},t.get=function(t){return this[e.normalizeUnit(t)]},t.set=function(t){return this.isValid?Kt(this,{values:Object.assign(this.values,de(t,e.normalizeUnit,[]))}):this},t.reconfigure=function(e){var t=void 0===e?{}:e,n=t.locale,r=t.numberingSystem,i=t.conversionAccuracy,o={loc:this.loc.clone({locale:n,numberingSystem:r})}
return i&&(o.conversionAccuracy=i),Kt(this,o)},t.as=function(e){return this.isValid?this.shiftTo(e).get(e):NaN},t.normalize=function(){if(!this.isValid)return this
var e=this.toObject()
return tn(this.matrix,e),Kt(this,{values:e},!0)},t.shiftTo=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
if(!this.isValid)return this
if(0===n.length)return this
n=n.map((function(t){return e.normalizeUnit(t)}))
var i,o={},a={},s=this.toObject()
tn(this.matrix,s)
for(var l=0,u=$t;l<u.length;l++){var c=u[l]
if(n.indexOf(c)>=0){i=c
var d=0
for(var h in a)d+=this.matrix[h][c]*a[h],a[h]=0
Z(s[c])&&(d+=s[c])
var f=Math.trunc(d)
for(var p in o[c]=f,a[c]=d-f,s)$t.indexOf(p)>$t.indexOf(c)&&en(this.matrix,s,p,o,c)}else Z(s[c])&&(a[c]=s[c])}for(var v in a)0!==a[v]&&(o[i]+=v===i?a[v]:a[v]/this.matrix[i][v])
return Kt(this,{values:o},!0).normalize()},t.negate=function(){if(!this.isValid)return this
for(var e={},t=0,n=Object.keys(this.values);t<n.length;t++){var r=n[t]
e[r]=-this.values[r]}return Kt(this,{values:e},!0)},t.equals=function(e){if(!this.isValid||!e.isValid)return!1
if(!this.loc.equals(e.loc))return!1
for(var t=0,n=$t;t<n.length;t++){var r=n[t]
if(this.values[r]!==e.values[r])return!1}return!0},i(e,[{key:"locale",get:function(){return this.isValid?this.loc.locale:null}},{key:"numberingSystem",get:function(){return this.isValid?this.loc.numberingSystem:null}},{key:"years",get:function(){return this.isValid?this.values.years||0:NaN}},{key:"quarters",get:function(){return this.isValid?this.values.quarters||0:NaN}},{key:"months",get:function(){return this.isValid?this.values.months||0:NaN}},{key:"weeks",get:function(){return this.isValid?this.values.weeks||0:NaN}},{key:"days",get:function(){return this.isValid?this.values.days||0:NaN}},{key:"hours",get:function(){return this.isValid?this.values.hours||0:NaN}},{key:"minutes",get:function(){return this.isValid?this.values.minutes||0:NaN}},{key:"seconds",get:function(){return this.isValid?this.values.seconds||0:NaN}},{key:"milliseconds",get:function(){return this.isValid?this.values.milliseconds||0:NaN}},{key:"isValid",get:function(){return null===this.invalid}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}}]),e}()
function rn(e){if(Z(e))return nn.fromMillis(e)
if(nn.isDuration(e))return e
if("object"==typeof e)return nn.fromObject(e)
throw new g("Unknown duration argument "+e+" of type "+typeof e)}var on="Invalid Interval"
function an(e,t){return e&&e.isValid?t&&t.isValid?t<e?sn.invalid("end before start","The end of an interval must be after its start, but you had start="+e.toISO()+" and end="+t.toISO()):null:sn.invalid("missing or invalid end"):sn.invalid("missing or invalid start")}var sn=function(){function e(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}e.invalid=function(t,n){if(void 0===n&&(n=null),!t)throw new g("need to specify a reason the Interval is invalid")
var r=t instanceof Pe?t:new Pe(t,n)
if($e.throwOnInvalid)throw new h(r)
return new e({invalid:r})},e.fromDateTimes=function(t,n){var r=ir(t),i=ir(n),o=an(r,i)
return null==o?new e({start:r,end:i}):o},e.after=function(t,n){var r=rn(n),i=ir(t)
return e.fromDateTimes(i,i.plus(r))},e.before=function(t,n){var r=rn(n),i=ir(t)
return e.fromDateTimes(i.minus(r),i)},e.fromISO=function(t,n){var r=(t||"").split("/",2),i=r[0],o=r[1]
if(i&&o){var a=rr.fromISO(i,n),s=rr.fromISO(o,n)
if(a.isValid&&s.isValid)return e.fromDateTimes(a,s)
if(a.isValid){var l=nn.fromISO(o,n)
if(l.isValid)return e.after(a,l)}else if(s.isValid){var u=nn.fromISO(i,n)
if(u.isValid)return e.before(s,u)}}return e.invalid("unparsable",'the input "'+t+"\" can't be parsed asISO 8601")},e.isInterval=function(e){return e&&e.isLuxonInterval||!1}
var t=e.prototype
return t.length=function(e){return void 0===e&&(e="milliseconds"),this.isValid?this.toDuration.apply(this,[e]).get(e):NaN},t.count=function(e){if(void 0===e&&(e="milliseconds"),!this.isValid)return NaN
var t=this.start.startOf(e),n=this.end.startOf(e)
return Math.floor(n.diff(t,e).get(e))+1},t.hasSame=function(e){return!!this.isValid&&this.e.minus(1).hasSame(this.s,e)},t.isEmpty=function(){return this.s.valueOf()===this.e.valueOf()},t.isAfter=function(e){return!!this.isValid&&this.s>e},t.isBefore=function(e){return!!this.isValid&&this.e<=e},t.contains=function(e){return!!this.isValid&&(this.s<=e&&this.e>e)},t.set=function(t){var n=void 0===t?{}:t,r=n.start,i=n.end
return this.isValid?e.fromDateTimes(r||this.s,i||this.e):this},t.splitAt=function(){var t=this
if(!this.isValid)return[]
for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i]
for(var o=r.map(ir).filter((function(e){return t.contains(e)})).sort(),a=[],s=this.s,l=0;s<this.e;){var u=o[l]||this.e,c=+u>+this.e?this.e:u
a.push(e.fromDateTimes(s,c)),s=c,l+=1}return a},t.splitBy=function(t){var n=rn(t)
if(!this.isValid||!n.isValid||0===n.as("milliseconds"))return[]
for(var r,i,o=this.s,a=[];o<this.e;)i=+(r=o.plus(n))>+this.e?this.e:r,a.push(e.fromDateTimes(o,i)),o=i
return a},t.divideEqually=function(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]},t.overlaps=function(e){return this.e>e.s&&this.s<e.e},t.abutsStart=function(e){return!!this.isValid&&+this.e==+e.s},t.abutsEnd=function(e){return!!this.isValid&&+e.e==+this.s},t.engulfs=function(e){return!!this.isValid&&(this.s<=e.s&&this.e>=e.e)},t.equals=function(e){return!(!this.isValid||!e.isValid)&&(this.s.equals(e.s)&&this.e.equals(e.e))},t.intersection=function(t){if(!this.isValid)return this
var n=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e
return n>r?null:e.fromDateTimes(n,r)},t.union=function(t){if(!this.isValid)return this
var n=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e
return e.fromDateTimes(n,r)},e.merge=function(e){var t=e.sort((function(e,t){return e.s-t.s})).reduce((function(e,t){var n=e[0],r=e[1]
return r?r.overlaps(t)||r.abutsStart(t)?[n,r.union(t)]:[n.concat([r]),t]:[n,t]}),[[],null]),n=t[0],r=t[1]
return r&&n.push(r),n},e.xor=function(t){var n,r=null,i=0,o=[],a=t.map((function(e){return[{time:e.s,type:"s"},{time:e.e,type:"e"}]})),s=(n=Array.prototype).concat.apply(n,a).sort((function(e,t){return e.time-t.time})),l=Array.isArray(s),u=0
for(s=l?s:s[Symbol.iterator]();;){var c
if(l){if(u>=s.length)break
c=s[u++]}else{if((u=s.next()).done)break
c=u.value}var d=c
1===(i+="s"===d.type?1:-1)?r=d.time:(r&&+r!=+d.time&&o.push(e.fromDateTimes(r,d.time)),r=null)}return e.merge(o)},t.difference=function(){for(var t=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i]
return e.xor([this].concat(r)).map((function(e){return t.intersection(e)})).filter((function(e){return e&&!e.isEmpty()}))},t.toString=function(){return this.isValid?"["+this.s.toISO()+" – "+this.e.toISO()+")":on},t.toISO=function(e){return this.isValid?this.s.toISO(e)+"/"+this.e.toISO(e):on},t.toISODate=function(){return this.isValid?this.s.toISODate()+"/"+this.e.toISODate():on},t.toISOTime=function(e){return this.isValid?this.s.toISOTime(e)+"/"+this.e.toISOTime(e):on},t.toFormat=function(e,t){var n=(void 0===t?{}:t).separator,r=void 0===n?" – ":n
return this.isValid?""+this.s.toFormat(e)+r+this.e.toFormat(e):on},t.toDuration=function(e,t){return this.isValid?this.e.diff(this.s,e,t):nn.invalid(this.invalidReason)},t.mapEndpoints=function(t){return e.fromDateTimes(t(this.s),t(this.e))},i(e,[{key:"start",get:function(){return this.isValid?this.s:null}},{key:"end",get:function(){return this.isValid?this.e:null}},{key:"isValid",get:function(){return null===this.invalidReason}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}}]),e}(),ln=function(){function e(){}return e.hasDST=function(e){void 0===e&&(e=$e.defaultZone)
var t=rr.local().setZone(e).set({month:12})
return!e.universal&&t.offset!==t.set({month:6}).offset},e.isValidIANAZone=function(e){return Ue.isValidSpecifier(e)&&Ue.isValidZone(e)},e.normalizeZone=function(e){return Be(e,$e.defaultZone)},e.months=function(e,t){void 0===e&&(e="long")
var n=void 0===t?{}:t,r=n.locale,i=void 0===r?null:r,o=n.numberingSystem,a=void 0===o?null:o,s=n.outputCalendar,l=void 0===s?"gregory":s
return st.create(i,a,l).months(e)},e.monthsFormat=function(e,t){void 0===e&&(e="long")
var n=void 0===t?{}:t,r=n.locale,i=void 0===r?null:r,o=n.numberingSystem,a=void 0===o?null:o,s=n.outputCalendar,l=void 0===s?"gregory":s
return st.create(i,a,l).months(e,!0)},e.weekdays=function(e,t){void 0===e&&(e="long")
var n=void 0===t?{}:t,r=n.locale,i=void 0===r?null:r,o=n.numberingSystem,a=void 0===o?null:o
return st.create(i,a,null).weekdays(e)},e.weekdaysFormat=function(e,t){void 0===e&&(e="long")
var n=void 0===t?{}:t,r=n.locale,i=void 0===r?null:r,o=n.numberingSystem,a=void 0===o?null:o
return st.create(i,a,null).weekdays(e,!0)},e.meridiems=function(e){var t=(void 0===e?{}:e).locale,n=void 0===t?null:t
return st.create(n).meridiems()},e.eras=function(e,t){void 0===e&&(e="short")
var n=(void 0===t?{}:t).locale,r=void 0===n?null:n
return st.create(r,null,"gregory").eras(e)},e.features=function(){var e=!1,t=!1,n=!1,r=!1
if(W()){e=!0,t=Y(),r=q()
try{n="America/New_York"===new Intl.DateTimeFormat("en",{timeZone:"America/New_York"}).resolvedOptions().timeZone}catch(e){n=!1}}return{intl:e,intlTokens:t,zones:n,relative:r}},e}()
function un(e,t){var n=function(e){return e.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf()},r=n(t)-n(e)
return Math.floor(nn.fromMillis(r).as("days"))}function cn(e,t,n,r){var i=function(e,t,n){for(var r,i,o={},a=0,s=[["years",function(e,t){return t.year-e.year}],["months",function(e,t){return t.month-e.month+12*(t.year-e.year)}],["weeks",function(e,t){var n=un(e,t)
return(n-n%7)/7}],["days",un]];a<s.length;a++){var l=s[a],u=l[0],c=l[1]
if(n.indexOf(u)>=0){var d
r=u
var h,f=c(e,t)
if((i=e.plus(((d={})[u]=f,d)))>t)e=e.plus(((h={})[u]=f-1,h)),f-=1
else e=i
o[u]=f}}return[e,o,i,r]}(e,t,n),o=i[0],a=i[1],s=i[2],l=i[3],u=t-o,c=n.filter((function(e){return["hours","minutes","seconds","milliseconds"].indexOf(e)>=0}))
if(0===c.length){var d
if(s<t)s=o.plus(((d={})[l]=1,d))
s!==o&&(a[l]=(a[l]||0)+u/(s-o))}var h,f=nn.fromObject(Object.assign(a,r))
return c.length>0?(h=nn.fromMillis(u,r)).shiftTo.apply(h,c).plus(f):f}var dn={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},hn={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},fn=dn.hanidec.replace(/[\[|\]]/g,"").split("")
function pn(e,t){var n=e.numberingSystem
return void 0===t&&(t=""),new RegExp(""+dn[n||"latn"]+t)}var vn="missing Intl.DateTimeFormat.formatToParts support"
function gn(e,t){return void 0===t&&(t=function(e){return e}),{regex:e,deser:function(e){var n=e[0]
return t(function(e){var t=parseInt(e,10)
if(isNaN(t)){t=""
for(var n=0;n<e.length;n++){var r=e.charCodeAt(n)
if(-1!==e[n].search(dn.hanidec))t+=fn.indexOf(e[n])
else for(var i in hn){var o=hn[i],a=o[0],s=o[1]
r>=a&&r<=s&&(t+=r-a)}}return parseInt(t,10)}return t}(n))}}}function mn(e){return e.replace(/\./,"\\.?")}function yn(e){return e.replace(/\./,"").toLowerCase()}function En(e,t){return null===e?null:{regex:RegExp(e.map(mn).join("|")),deser:function(n){var r=n[0]
return e.findIndex((function(e){return yn(r)===yn(e)}))+t}}}function Sn(e,t){return{regex:e,deser:function(e){return ue(e[1],e[2])},groups:t}}function wn(e){return{regex:e,deser:function(e){return e[0]}}}var bn={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",hour:{numeric:"h","2-digit":"hh"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"}}
var Dn=null
function Tn(e,t){if(e.literal)return e
var n=Ne.macroTokenToFormatOpts(e.val)
if(!n)return e
var r=Ne.create(t,n).formatDateTimeParts((Dn||(Dn=rr.fromMillis(1555555555555)),Dn)).map((function(e){return function(e,t,n){var r=e.type,i=e.value
if("literal"===r)return{literal:!0,val:i}
var o=n[r],a=bn[r]
return"object"==typeof a&&(a=a[o]),a?{literal:!1,val:a}:void 0}(e,0,n)}))
return r.includes(void 0)?e:r}function Cn(e,t,n){var r=function(e,t){var n
return(n=Array.prototype).concat.apply(n,e.map((function(e){return Tn(e,t)})))}(Ne.parseFormat(n),e),i=r.map((function(t){return n=t,i=pn(r=e),o=pn(r,"{2}"),a=pn(r,"{3}"),s=pn(r,"{4}"),l=pn(r,"{6}"),u=pn(r,"{1,2}"),c=pn(r,"{1,3}"),d=pn(r,"{1,6}"),h=pn(r,"{1,9}"),f=pn(r,"{2,4}"),p=pn(r,"{4,6}"),v=function(e){return{regex:RegExp((t=e.val,t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"))),deser:function(e){return e[0]},literal:!0}
var t},(g=function(e){if(n.literal)return v(e)
switch(e.val){case"G":return En(r.eras("short",!1),0)
case"GG":return En(r.eras("long",!1),0)
case"y":return gn(d)
case"yy":return gn(f,se)
case"yyyy":return gn(s)
case"yyyyy":return gn(p)
case"yyyyyy":return gn(l)
case"M":return gn(u)
case"MM":return gn(o)
case"MMM":return En(r.months("short",!0,!1),1)
case"MMMM":return En(r.months("long",!0,!1),1)
case"L":return gn(u)
case"LL":return gn(o)
case"LLL":return En(r.months("short",!1,!1),1)
case"LLLL":return En(r.months("long",!1,!1),1)
case"d":return gn(u)
case"dd":return gn(o)
case"o":return gn(c)
case"ooo":return gn(a)
case"HH":return gn(o)
case"H":return gn(u)
case"hh":return gn(o)
case"h":return gn(u)
case"mm":return gn(o)
case"m":case"q":return gn(u)
case"qq":return gn(o)
case"s":return gn(u)
case"ss":return gn(o)
case"S":return gn(c)
case"SSS":return gn(a)
case"u":return wn(h)
case"a":return En(r.meridiems(),0)
case"kkkk":return gn(s)
case"kk":return gn(f,se)
case"W":return gn(u)
case"WW":return gn(o)
case"E":case"c":return gn(i)
case"EEE":return En(r.weekdays("short",!1,!1),1)
case"EEEE":return En(r.weekdays("long",!1,!1),1)
case"ccc":return En(r.weekdays("short",!0,!1),1)
case"cccc":return En(r.weekdays("long",!0,!1),1)
case"Z":case"ZZ":return Sn(new RegExp("([+-]"+u.source+")(?::("+o.source+"))?"),2)
case"ZZZ":return Sn(new RegExp("([+-]"+u.source+")("+o.source+")?"),2)
case"z":return wn(/[a-z_+-/]{1,256}?/i)
default:return v(e)}}(n)||{invalidReason:vn}).token=n,g
var n,r,i,o,a,s,l,u,c,d,h,f,p,v,g})),o=i.find((function(e){return e.invalidReason}))
if(o)return{input:t,tokens:r,invalidReason:o.invalidReason}
var a=function(e){return["^"+e.map((function(e){return e.regex})).reduce((function(e,t){return e+"("+t.source+")"}),"")+"$",e]}(i),s=a[0],l=a[1],u=RegExp(s,"i"),c=function(e,t,n){var r=e.match(t)
if(r){var i={},o=1
for(var a in n)if(J(n,a)){var s=n[a],l=s.groups?s.groups+1:1
!s.literal&&s.token&&(i[s.token.val[0]]=s.deser(r.slice(o,o+l))),o+=l}return[r,i]}return[r,{}]}(t,u,l),d=c[0],h=c[1],f=h?function(e){var t
return t=j(e.Z)?j(e.z)?null:Ue.create(e.z):new je(e.Z),j(e.q)||(e.M=3*(e.q-1)+1),j(e.h)||(e.h<12&&1===e.a?e.h+=12:12===e.h&&0===e.a&&(e.h=0)),0===e.G&&e.y&&(e.y=-e.y),j(e.u)||(e.S=ee(e.u)),[Object.keys(e).reduce((function(t,n){var r=function(e){switch(e){case"S":return"millisecond"
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
return r&&(t[r]=e[n]),t}),{}),t]}(h):[null,null]
return{input:t,tokens:r,regex:u,rawMatches:d,matches:h,result:f[0],zone:f[1]}}var Mn=[0,31,59,90,120,151,181,212,243,273,304,334],kn=[0,31,60,91,121,152,182,213,244,274,305,335]
function In(e,t){return new Pe("unit out of range","you specified "+t+" (of type "+typeof t+") as a "+e+", which is invalid")}function Rn(e,t,n){var r=new Date(Date.UTC(e,t-1,n)).getUTCDay()
return 0===r?7:r}function On(e,t,n){return n+(ne(e)?kn:Mn)[t-1]}function Nn(e,t){var n=ne(e)?kn:Mn,r=n.findIndex((function(e){return e<t}))
return{month:r+1,day:t-n[r]}}function Pn(e){var t,n=e.year,r=e.month,i=e.day,o=On(n,r,i),a=Rn(n,r,i),s=Math.floor((o-a+10)/7)
return s<1?s=ae(t=n-1):s>ae(n)?(t=n+1,s=1):t=n,Object.assign({weekYear:t,weekNumber:s,weekday:a},fe(e))}function _n(e){var t,n=e.weekYear,r=e.weekNumber,i=e.weekday,o=Rn(n,1,4),a=re(n),s=7*r+i-o-3
s<1?s+=re(t=n-1):s>a?(t=n+1,s-=re(n)):t=n
var l=Nn(t,s),u=l.month,c=l.day
return Object.assign({year:t,month:u,day:c},fe(e))}function Ln(e){var t=e.year,n=On(t,e.month,e.day)
return Object.assign({year:t,ordinal:n},fe(e))}function Hn(e){var t=e.year,n=Nn(t,e.ordinal),r=n.month,i=n.day
return Object.assign({year:t,month:r,day:i},fe(e))}function xn(e){var t=B(e.year),n=$(e.month,1,12),r=$(e.day,1,ie(e.year,e.month))
return t?n?!r&&In("day",e.day):In("month",e.month):In("year",e.year)}function Vn(e){var t=e.hour,n=e.minute,r=e.second,i=e.millisecond,o=$(t,0,23)||24===t&&0===n&&0===r&&0===i,a=$(n,0,59),s=$(r,0,59),l=$(i,0,999)
return o?a?s?!l&&In("millisecond",i):In("second",r):In("minute",n):In("hour",t)}function zn(e){return new Pe("unsupported zone",'the zone "'+e.name+'" is not supported')}function An(e){return null===e.weekData&&(e.weekData=Pn(e.c)),e.weekData}function Un(e,t){var n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid}
return new rr(Object.assign({},n,t,{old:n}))}function Fn(e,t,n){var r=e-60*t*1e3,i=n.offset(r)
if(t===i)return[r,t]
r-=60*(i-t)*1e3
var o=n.offset(r)
return i===o?[r,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}function jn(e,t){var n=new Date(e+=60*t*1e3)
return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function Zn(e,t,n){return Fn(oe(e),t,n)}function Bn(e,t){var n,r=Object.keys(t.values);-1===r.indexOf("milliseconds")&&r.push("milliseconds"),t=(n=t).shiftTo.apply(n,r)
var i=e.o,o=e.c.year+t.years,a=e.c.month+t.months+3*t.quarters,s=Object.assign({},e.c,{year:o,month:a,day:Math.min(e.c.day,ie(o,a))+t.days+7*t.weeks}),l=nn.fromObject({hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),u=Fn(oe(s),i,e.zone),c=u[0],d=u[1]
return 0!==l&&(c+=l,d=e.zone.offset(c)),{ts:c,o:d}}function Wn(e,t,n,r,i){var o=n.setZone,a=n.zone
if(e&&0!==Object.keys(e).length){var s=t||a,l=rr.fromObject(Object.assign(e,n,{zone:s,setZone:void 0}))
return o?l:l.setZone(a)}return rr.invalid(new Pe("unparsable",'the input "'+i+"\" can't be parsed as "+r))}function Yn(e,t){return e.isValid?Ne.create(st.create("en-US"),{allowZ:!0,forceSimple:!0}).formatDateTimeFromString(e,t):null}function qn(e,t){var n=t.suppressSeconds,r=void 0!==n&&n,i=t.suppressMilliseconds,o=void 0!==i&&i,a=t.includeOffset,s=t.includeZone,l=void 0!==s&&s,u=t.spaceZone,c=void 0!==u&&u,d="HH:mm"
return r&&0===e.second&&0===e.millisecond||(d+=":ss",o&&0===e.millisecond||(d+=".SSS")),(l||a)&&c&&(d+=" "),l?d+="z":a&&(d+="ZZ"),Yn(e,d)}var Gn={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},Xn={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},Jn={ordinal:1,hour:0,minute:0,second:0,millisecond:0},$n=["year","month","day","hour","minute","second","millisecond"],Qn=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],Kn=["year","ordinal","hour","minute","second","millisecond"]
function er(e){var t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()]
if(!t)throw new v(e)
return t}function tr(e,t){for(var n=0,r=$n;n<r.length;n++){var i=r[n]
j(e[i])&&(e[i]=Gn[i])}var o=xn(e)||Vn(e)
if(o)return rr.invalid(o)
var a=$e.now(),s=Zn(e,t.offset(a),t),l=s[0],u=s[1]
return new rr({ts:l,zone:t,o:u})}function nr(e,t,n){var r=!!j(n.round)||n.round,i=function(e,i){return e=te(e,r||n.calendary?0:2,!0),t.loc.clone(n).relFormatter(n).format(e,i)},o=function(r){return n.calendary?t.hasSame(e,r)?0:t.startOf(r).diff(e.startOf(r),r).get(r):t.diff(e,r).get(r)}
if(n.unit)return i(o(n.unit),n.unit)
var a=n.units,s=Array.isArray(a),l=0
for(a=s?a:a[Symbol.iterator]();;){var u
if(s){if(l>=a.length)break
u=a[l++]}else{if((l=a.next()).done)break
u=l.value}var c=u,d=o(c)
if(Math.abs(d)>=1)return i(d,c)}return i(0,n.units[n.units.length-1])}var rr=function(){function e(e){var t=e.zone||$e.defaultZone,n=e.invalid||(Number.isNaN(e.ts)?new Pe("invalid input"):null)||(t.isValid?null:zn(t))
this.ts=j(e.ts)?$e.now():e.ts
var r=null,i=null
if(!n)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(t)){var o=[e.old.c,e.old.o]
r=o[0],i=o[1]}else r=jn(this.ts,t.offset(this.ts)),r=(n=Number.isNaN(r.year)?new Pe("invalid input"):null)?null:r,i=n?null:t.offset(this.ts)
this._zone=t,this.loc=e.loc||st.create(),this.invalid=n,this.weekData=null,this.c=r,this.o=i,this.isLuxonDateTime=!0}e.local=function(t,n,r,i,o,a,s){return j(t)?new e({ts:$e.now()}):tr({year:t,month:n,day:r,hour:i,minute:o,second:a,millisecond:s},$e.defaultZone)},e.utc=function(t,n,r,i,o,a,s){return j(t)?new e({ts:$e.now(),zone:je.utcInstance}):tr({year:t,month:n,day:r,hour:i,minute:o,second:a,millisecond:s},je.utcInstance)},e.fromJSDate=function(t,n){void 0===n&&(n={})
var r,i=(r=t,"[object Date]"===Object.prototype.toString.call(r)?t.valueOf():NaN)
if(Number.isNaN(i))return e.invalid("invalid input")
var o=Be(n.zone,$e.defaultZone)
return o.isValid?new e({ts:i,zone:o,loc:st.fromObject(n)}):e.invalid(zn(o))},e.fromMillis=function(t,n){if(void 0===n&&(n={}),Z(t))return t<-864e13||t>864e13?e.invalid("Timestamp out of range"):new e({ts:t,zone:Be(n.zone,$e.defaultZone),loc:st.fromObject(n)})
throw new g("fromMillis requires a numerical input")},e.fromSeconds=function(t,n){if(void 0===n&&(n={}),Z(t))return new e({ts:1e3*t,zone:Be(n.zone,$e.defaultZone),loc:st.fromObject(n)})
throw new g("fromSeconds requires a numerical input")},e.fromObject=function(t){var n=Be(t.zone,$e.defaultZone)
if(!n.isValid)return e.invalid(zn(n))
var r=$e.now(),i=n.offset(r),o=de(t,er,["zone","locale","outputCalendar","numberingSystem"]),a=!j(o.ordinal),s=!j(o.year),l=!j(o.month)||!j(o.day),u=s||l,c=o.weekYear||o.weekNumber,d=st.fromObject(t)
if((u||a)&&c)throw new p("Can't mix weekYear/weekNumber units with year/month/day or ordinals")
if(l&&a)throw new p("Can't mix ordinal dates with month/day")
var h,f,v=c||o.weekday&&!u,g=jn(r,i)
v?(h=Qn,f=Xn,g=Pn(g)):a?(h=Kn,f=Jn,g=Ln(g)):(h=$n,f=Gn)
var m=!1,y=h,E=Array.isArray(y),S=0
for(y=E?y:y[Symbol.iterator]();;){var w
if(E){if(S>=y.length)break
w=y[S++]}else{if((S=y.next()).done)break
w=S.value}var b=w
j(o[b])?o[b]=m?f[b]:g[b]:m=!0}var D=(v?function(e){var t=B(e.weekYear),n=$(e.weekNumber,1,ae(e.weekYear)),r=$(e.weekday,1,7)
return t?n?!r&&In("weekday",e.weekday):In("week",e.week):In("weekYear",e.weekYear)}(o):a?function(e){var t=B(e.year),n=$(e.ordinal,1,re(e.year))
return t?!n&&In("ordinal",e.ordinal):In("year",e.year)}(o):xn(o))||Vn(o)
if(D)return e.invalid(D)
var T=Zn(v?_n(o):a?Hn(o):o,i,n),C=new e({ts:T[0],zone:n,o:T[1],loc:d})
return o.weekday&&u&&t.weekday!==C.weekday?e.invalid("mismatched weekday","you can't specify both a weekday of "+o.weekday+" and a date of "+C.toISO()):C},e.fromISO=function(e,t){void 0===t&&(t={})
var n=function(e){return ct(e,[xt,Ut],[Vt,Ft],[zt,jt],[At,Zt])}(e)
return Wn(n[0],n[1],t,"ISO 8601",e)},e.fromRFC2822=function(e,t){void 0===t&&(t={})
var n=function(e){return ct(function(e){return e.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}(e),[Rt,Ot])}(e)
return Wn(n[0],n[1],t,"RFC 2822",e)},e.fromHTTP=function(e,t){void 0===t&&(t={})
var n=function(e){return ct(e,[Nt,Lt],[Pt,Lt],[_t,Ht])}(e)
return Wn(n[0],n[1],t,"HTTP",t)},e.fromFormat=function(t,n,r){if(void 0===r&&(r={}),j(t)||j(n))throw new g("fromFormat requires an input string and a format")
var i=r,o=i.locale,a=void 0===o?null:o,s=i.numberingSystem,l=void 0===s?null:s,u=function(e,t,n){var r=Cn(e,t,n)
return[r.result,r.zone,r.invalidReason]}(st.fromOpts({locale:a,numberingSystem:l,defaultToEN:!0}),t,n),c=u[0],d=u[1],h=u[2]
return h?e.invalid(h):Wn(c,d,r,"format "+n,t)},e.fromString=function(t,n,r){return void 0===r&&(r={}),e.fromFormat(t,n,r)},e.fromSQL=function(e,t){void 0===t&&(t={})
var n=function(e){return ct(e,[Bt,Yt],[Wt,qt])}(e)
return Wn(n[0],n[1],t,"SQL",e)},e.invalid=function(t,n){if(void 0===n&&(n=null),!t)throw new g("need to specify a reason the DateTime is invalid")
var r=t instanceof Pe?t:new Pe(t,n)
if($e.throwOnInvalid)throw new d(r)
return new e({invalid:r})},e.isDateTime=function(e){return e&&e.isLuxonDateTime||!1}
var t=e.prototype
return t.get=function(e){return this[e]},t.resolvedLocaleOpts=function(e){void 0===e&&(e={})
var t=Ne.create(this.loc.clone(e),e).resolvedOptions(this)
return{locale:t.locale,numberingSystem:t.numberingSystem,outputCalendar:t.calendar}},t.toUTC=function(e,t){return void 0===e&&(e=0),void 0===t&&(t={}),this.setZone(je.instance(e),t)},t.toLocal=function(){return this.setZone($e.defaultZone)},t.setZone=function(t,n){var r=void 0===n?{}:n,i=r.keepLocalTime,o=void 0!==i&&i,a=r.keepCalendarTime,s=void 0!==a&&a
if((t=Be(t,$e.defaultZone)).equals(this.zone))return this
if(t.isValid){var l=this.ts
if(o||s){var u=this.o-t.offset(this.ts)
l=Zn(this.toObject(),u,t)[0]}return Un(this,{ts:l,zone:t})}return e.invalid(zn(t))},t.reconfigure=function(e){var t=void 0===e?{}:e,n=t.locale,r=t.numberingSystem,i=t.outputCalendar
return Un(this,{loc:this.loc.clone({locale:n,numberingSystem:r,outputCalendar:i})})},t.setLocale=function(e){return this.reconfigure({locale:e})},t.set=function(e){if(!this.isValid)return this
var t,n=de(e,er,[])
!j(n.weekYear)||!j(n.weekNumber)||!j(n.weekday)?t=_n(Object.assign(Pn(this.c),n)):j(n.ordinal)?(t=Object.assign(this.toObject(),n),j(n.day)&&(t.day=Math.min(ie(t.year,t.month),t.day))):t=Hn(Object.assign(Ln(this.c),n))
var r=Zn(t,this.o,this.zone)
return Un(this,{ts:r[0],o:r[1]})},t.plus=function(e){return this.isValid?Un(this,Bn(this,rn(e))):this},t.minus=function(e){return this.isValid?Un(this,Bn(this,rn(e).negate())):this},t.startOf=function(e){if(!this.isValid)return this
var t={},n=nn.normalizeUnit(e)
switch(n){case"years":t.month=1
case"quarters":case"months":t.day=1
case"weeks":case"days":t.hour=0
case"hours":t.minute=0
case"minutes":t.second=0
case"seconds":t.millisecond=0}if("weeks"===n&&(t.weekday=1),"quarters"===n){var r=Math.ceil(this.month/3)
t.month=3*(r-1)+1}return this.set(t)},t.endOf=function(e){var t
return this.isValid?this.plus((t={},t[e]=1,t)).startOf(e).minus(1):this},t.toFormat=function(e,t){return void 0===t&&(t={}),this.isValid?Ne.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this,e):"Invalid DateTime"},t.toLocaleString=function(e){return void 0===e&&(e=w),this.isValid?Ne.create(this.loc.clone(e),e).formatDateTime(this):"Invalid DateTime"},t.toLocaleParts=function(e){return void 0===e&&(e={}),this.isValid?Ne.create(this.loc.clone(e),e).formatDateTimeParts(this):[]},t.toISO=function(e){return void 0===e&&(e={}),this.isValid?this.toISODate()+"T"+this.toISOTime(e):null},t.toISODate=function(){var e="yyyy-MM-dd"
return this.year>9999&&(e="+"+e),Yn(this,e)},t.toISOWeekDate=function(){return Yn(this,"kkkk-'W'WW-c")},t.toISOTime=function(e){var t=void 0===e?{}:e,n=t.suppressMilliseconds,r=void 0!==n&&n,i=t.suppressSeconds,o=void 0!==i&&i,a=t.includeOffset
return qn(this,{suppressSeconds:o,suppressMilliseconds:r,includeOffset:void 0===a||a})},t.toRFC2822=function(){return Yn(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ")},t.toHTTP=function(){return Yn(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")},t.toSQLDate=function(){return Yn(this,"yyyy-MM-dd")},t.toSQLTime=function(e){var t=void 0===e?{}:e,n=t.includeOffset,r=void 0===n||n,i=t.includeZone
return qn(this,{includeOffset:r,includeZone:void 0!==i&&i,spaceZone:!0})},t.toSQL=function(e){return void 0===e&&(e={}),this.isValid?this.toSQLDate()+" "+this.toSQLTime(e):null},t.toString=function(){return this.isValid?this.toISO():"Invalid DateTime"},t.valueOf=function(){return this.toMillis()},t.toMillis=function(){return this.isValid?this.ts:NaN},t.toSeconds=function(){return this.isValid?this.ts/1e3:NaN},t.toJSON=function(){return this.toISO()},t.toBSON=function(){return this.toJSDate()},t.toObject=function(e){if(void 0===e&&(e={}),!this.isValid)return{}
var t=Object.assign({},this.c)
return e.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t},t.toJSDate=function(){return new Date(this.isValid?this.ts:NaN)},t.diff=function(e,t,n){if(void 0===t&&(t="milliseconds"),void 0===n&&(n={}),!this.isValid||!e.isValid)return nn.invalid(this.invalid||e.invalid,"created by diffing an invalid DateTime")
var r,i=Object.assign({locale:this.locale,numberingSystem:this.numberingSystem},n),o=(r=t,Array.isArray(r)?r:[r]).map(nn.normalizeUnit),a=e.valueOf()>this.valueOf(),s=cn(a?this:e,a?e:this,o,i)
return a?s.negate():s},t.diffNow=function(t,n){return void 0===t&&(t="milliseconds"),void 0===n&&(n={}),this.diff(e.local(),t,n)},t.until=function(e){return this.isValid?sn.fromDateTimes(this,e):this},t.hasSame=function(e,t){if(!this.isValid)return!1
if("millisecond"===t)return this.valueOf()===e.valueOf()
var n=e.valueOf()
return this.startOf(t)<=n&&n<=this.endOf(t)},t.equals=function(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)},t.toRelative=function(t){if(void 0===t&&(t={}),!this.isValid)return null
var n=t.base||e.fromObject({zone:this.zone}),r=t.padding?this<n?-t.padding:t.padding:0
return nr(n,this.plus(r),Object.assign(t,{numeric:"always",units:["years","months","days","hours","minutes","seconds"]}))},t.toRelativeCalendar=function(t){return void 0===t&&(t={}),this.isValid?nr(t.base||e.fromObject({zone:this.zone}),this,Object.assign(t,{numeric:"auto",units:["years","months","days"],calendary:!0})):null},e.min=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
if(!n.every(e.isDateTime))throw new g("min requires all arguments be DateTimes")
return G(n,(function(e){return e.valueOf()}),Math.min)},e.max=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
if(!n.every(e.isDateTime))throw new g("max requires all arguments be DateTimes")
return G(n,(function(e){return e.valueOf()}),Math.max)},e.fromFormatExplain=function(e,t,n){void 0===n&&(n={})
var r=n,i=r.locale,o=void 0===i?null:i,a=r.numberingSystem,s=void 0===a?null:a
return Cn(st.fromOpts({locale:o,numberingSystem:s,defaultToEN:!0}),e,t)},e.fromStringExplain=function(t,n,r){return void 0===r&&(r={}),e.fromFormatExplain(t,n,r)},i(e,[{key:"isValid",get:function(){return null===this.invalid}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}},{key:"locale",get:function(){return this.isValid?this.loc.locale:null}},{key:"numberingSystem",get:function(){return this.isValid?this.loc.numberingSystem:null}},{key:"outputCalendar",get:function(){return this.isValid?this.loc.outputCalendar:null}},{key:"zone",get:function(){return this._zone}},{key:"zoneName",get:function(){return this.isValid?this.zone.name:null}},{key:"year",get:function(){return this.isValid?this.c.year:NaN}},{key:"quarter",get:function(){return this.isValid?Math.ceil(this.c.month/3):NaN}},{key:"month",get:function(){return this.isValid?this.c.month:NaN}},{key:"day",get:function(){return this.isValid?this.c.day:NaN}},{key:"hour",get:function(){return this.isValid?this.c.hour:NaN}},{key:"minute",get:function(){return this.isValid?this.c.minute:NaN}},{key:"second",get:function(){return this.isValid?this.c.second:NaN}},{key:"millisecond",get:function(){return this.isValid?this.c.millisecond:NaN}},{key:"weekYear",get:function(){return this.isValid?An(this).weekYear:NaN}},{key:"weekNumber",get:function(){return this.isValid?An(this).weekNumber:NaN}},{key:"weekday",get:function(){return this.isValid?An(this).weekday:NaN}},{key:"ordinal",get:function(){return this.isValid?Ln(this.c).ordinal:NaN}},{key:"monthShort",get:function(){return this.isValid?ln.months("short",{locale:this.locale})[this.month-1]:null}},{key:"monthLong",get:function(){return this.isValid?ln.months("long",{locale:this.locale})[this.month-1]:null}},{key:"weekdayShort",get:function(){return this.isValid?ln.weekdays("short",{locale:this.locale})[this.weekday-1]:null}},{key:"weekdayLong",get:function(){return this.isValid?ln.weekdays("long",{locale:this.locale})[this.weekday-1]:null}},{key:"offset",get:function(){return this.isValid?+this.o:NaN}},{key:"offsetNameShort",get:function(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}},{key:"offsetNameLong",get:function(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}},{key:"isOffsetFixed",get:function(){return this.isValid?this.zone.universal:null}},{key:"isInDST",get:function(){return!this.isOffsetFixed&&(this.offset>this.set({month:1}).offset||this.offset>this.set({month:5}).offset)}},{key:"isInLeapYear",get:function(){return ne(this.year)}},{key:"daysInMonth",get:function(){return ie(this.year,this.month)}},{key:"daysInYear",get:function(){return this.isValid?re(this.year):NaN}},{key:"weeksInWeekYear",get:function(){return this.isValid?ae(this.weekYear):NaN}}],[{key:"DATE_SHORT",get:function(){return w}},{key:"DATE_MED",get:function(){return b}},{key:"DATE_FULL",get:function(){return D}},{key:"DATE_HUGE",get:function(){return T}},{key:"TIME_SIMPLE",get:function(){return C}},{key:"TIME_WITH_SECONDS",get:function(){return M}},{key:"TIME_WITH_SHORT_OFFSET",get:function(){return k}},{key:"TIME_WITH_LONG_OFFSET",get:function(){return I}},{key:"TIME_24_SIMPLE",get:function(){return R}},{key:"TIME_24_WITH_SECONDS",get:function(){return O}},{key:"TIME_24_WITH_SHORT_OFFSET",get:function(){return N}},{key:"TIME_24_WITH_LONG_OFFSET",get:function(){return P}},{key:"DATETIME_SHORT",get:function(){return _}},{key:"DATETIME_SHORT_WITH_SECONDS",get:function(){return L}},{key:"DATETIME_MED",get:function(){return H}},{key:"DATETIME_MED_WITH_SECONDS",get:function(){return x}},{key:"DATETIME_MED_WITH_WEEKDAY",get:function(){return V}},{key:"DATETIME_FULL",get:function(){return z}},{key:"DATETIME_FULL_WITH_SECONDS",get:function(){return A}},{key:"DATETIME_HUGE",get:function(){return U}},{key:"DATETIME_HUGE_WITH_SECONDS",get:function(){return F}}]),e}()
function ir(e){if(rr.isDateTime(e))return e
if(e&&e.valueOf&&Z(e.valueOf()))return rr.fromJSDate(e)
if(e&&"object"==typeof e)return rr.fromObject(e)
throw new g("Unknown datetime argument: "+e+", of type "+typeof e)}t.DateTime=rr,t.Duration=nn,t.FixedOffsetZone=je,t.IANAZone=Ue,t.Info=ln,t.Interval=sn,t.InvalidZone=Ze,t.LocalZone=He,t.Settings=$e,t.Zone=_e},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,function(e,t,n){"use strict"
n.r(t)
var r={className:!0,colSpan:!0,rowSpan:!0},i={"<tr":"tbody","<td":"tr"}
function o(e,t,n){var i=document.createElement(e)
if(t)for(var o in t)"style"===o?w(i,t[o]):r[o]?i[o]=t[o]:i.setAttribute(o,t[o])
return"string"==typeof n?i.innerHTML=n:null!=n&&u(i,n),i}function a(e){e=e.trim()
var t=document.createElement(l(e))
return t.innerHTML=e,t.firstChild}function s(e){return Array.prototype.slice.call(function(e){e=e.trim()
var t=document.createElement(l(e))
return t.innerHTML=e,t.childNodes}(e))}function l(e){return i[e.substr(0,3)]||"div"}function u(e,t){for(var n=h(t),r=0;r<n.length;r++)e.appendChild(n[r])}function c(e,t){for(var n=h(t),r=e.firstChild||null,i=0;i<n.length;i++)e.insertBefore(n[i],r)}function d(e,t){for(var n=h(t),r=e.nextSibling||null,i=0;i<n.length;i++)e.parentNode.insertBefore(n[i],r)}function h(e){return"string"==typeof e?s(e):e instanceof Node?[e]:Array.prototype.slice.call(e)}function f(e){e.parentNode&&e.parentNode.removeChild(e)}var p=Element.prototype.matches||Element.prototype.matchesSelector||Element.prototype.msMatchesSelector,v=Element.prototype.closest||function(e){var t=this
if(!document.documentElement.contains(t))return null
do{if(m(t,e))return t
t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType)
return null}
function g(e,t){return v.call(e,t)}function m(e,t){return p.call(e,t)}function y(e,t){for(var n=e instanceof HTMLElement?[e]:e,r=[],i=0;i<n.length;i++)for(var o=n[i].querySelectorAll(t),a=0;a<o.length;a++)r.push(o[a])
return r}function E(e,t){for(var n=e instanceof HTMLElement?[e]:e,r=[],i=0;i<n.length;i++)for(var o=n[i].children,a=0;a<o.length;a++){var s=o[a]
t&&!m(s,t)||r.push(s)}return r}var S=/(top|left|right|bottom|width|height)$/i
function w(e,t){for(var n in t)b(e,n,t[n])}function b(e,t,n){null==n?e.style[t]="":"number"==typeof n&&S.test(t)?e.style[t]=n+"px":e.style[t]=n}function D(e,t){return e.left>=t.left&&e.left<t.right&&e.top>=t.top&&e.top<t.bottom}function T(e,t){var n={left:Math.max(e.left,t.left),right:Math.min(e.right,t.right),top:Math.max(e.top,t.top),bottom:Math.min(e.bottom,t.bottom)}
return n.left<n.right&&n.top<n.bottom&&n}var C=null
function M(){return null===C&&(C=function(){var e=o("div",{style:{position:"absolute",top:-1e3,left:0,border:0,padding:0,overflow:"scroll",direction:"rtl"}},"<div></div>")
document.body.appendChild(e)
var t=e.firstChild.getBoundingClientRect().left>e.getBoundingClientRect().left
return f(e),t}()),C}function k(e){return e=Math.max(0,e),e=Math.round(e)}function I(e,t){void 0===t&&(t=!1)
var n=window.getComputedStyle(e),r=parseInt(n.borderLeftWidth,10)||0,i=parseInt(n.borderRightWidth,10)||0,o=parseInt(n.borderTopWidth,10)||0,a=parseInt(n.borderBottomWidth,10)||0,s=k(e.offsetWidth-e.clientWidth-r-i),l={borderLeft:r,borderRight:i,borderTop:o,borderBottom:a,scrollbarBottom:k(e.offsetHeight-e.clientHeight-o-a),scrollbarLeft:0,scrollbarRight:0}
return M()&&"rtl"===n.direction?l.scrollbarLeft=s:l.scrollbarRight=s,t&&(l.paddingLeft=parseInt(n.paddingLeft,10)||0,l.paddingRight=parseInt(n.paddingRight,10)||0,l.paddingTop=parseInt(n.paddingTop,10)||0,l.paddingBottom=parseInt(n.paddingBottom,10)||0),l}function R(e,t){void 0===t&&(t=!1)
var n=O(e),r=I(e,t),i={left:n.left+r.borderLeft+r.scrollbarLeft,right:n.right-r.borderRight-r.scrollbarRight,top:n.top+r.borderTop,bottom:n.bottom-r.borderBottom-r.scrollbarBottom}
return t&&(i.left+=r.paddingLeft,i.right-=r.paddingRight,i.top+=r.paddingTop,i.bottom-=r.paddingBottom),i}function O(e){var t=e.getBoundingClientRect()
return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,right:t.right+window.pageXOffset,bottom:t.bottom+window.pageYOffset}}function N(e){return e.getBoundingClientRect().height+P(e)}function P(e){var t=window.getComputedStyle(e)
return parseInt(t.marginTop,10)+parseInt(t.marginBottom,10)}function _(e){for(var t=[];e instanceof HTMLElement;){var n=window.getComputedStyle(e)
if("fixed"===n.position)break;/(auto|scroll)/.test(n.overflow+n.overflowY+n.overflowX)&&t.push(e),e=e.parentNode}return t}function L(e){return _(e).map((function(e){return R(e)})).concat({left:window.pageXOffset,right:window.pageXOffset+document.documentElement.clientWidth,top:window.pageYOffset,bottom:window.pageYOffset+document.documentElement.clientHeight}).reduce((function(e,t){return T(e,t)||t}))}function H(e){e.preventDefault()}function x(e,t,n,r){function i(e){var t=g(e.target,n)
t&&r.call(t,e,t)}return e.addEventListener(t,i),function(){e.removeEventListener(t,i)}}var V=["webkitTransitionEnd","otransitionend","oTransitionEnd","msTransitionEnd","transitionend"]
var z=["sun","mon","tue","wed","thu","fri","sat"]
function A(e,t){var n=X(e)
return n[2]+=7*t,J(n)}function U(e,t){var n=X(e)
return n[2]+=t,J(n)}function F(e,t){var n=X(e)
return n[6]+=t,J(n)}function j(e,t){return(t.valueOf()-e.valueOf())/864e5}function Z(e,t){return K(e)===K(t)?Math.round(j(e,t)):null}function B(e){return J([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()])}function W(e,t,n,r){var i=J([t,0,1+Y(t,n,r)]),o=B(e),a=Math.round(j(i,o))
return Math.floor(a/7)+1}function Y(e,t,n){var r=7+t-n
return-((7+J([e,0,r]).getUTCDay()-t)%7)+r-1}function q(e){return[e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()]}function G(e){return new Date(e[0],e[1]||0,null==e[2]?1:e[2],e[3]||0,e[4]||0,e[5]||0)}function X(e){return[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()]}function J(e){return 1===e.length&&(e=e.concat([0])),new Date(Date.UTC.apply(Date,e))}function Q(e){return!isNaN(e.valueOf())}function K(e){return 1e3*e.getUTCHours()*60*60+1e3*e.getUTCMinutes()*60+1e3*e.getUTCSeconds()+e.getUTCMilliseconds()}var ee=/^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/
function te(e,t){var n
return"string"==typeof e?function(e){var t=ee.exec(e)
if(t){var n=t[1]?-1:1
return{years:0,months:0,days:n*(t[2]?parseInt(t[2],10):0),milliseconds:n*(60*(t[3]?parseInt(t[3],10):0)*60*1e3+60*(t[4]?parseInt(t[4],10):0)*1e3+1e3*(t[5]?parseInt(t[5],10):0)+(t[6]?parseInt(t[6],10):0))}}return null}(e):"object"==typeof e&&e?ne(e):"number"==typeof e?ne(((n={})[t||"milliseconds"]=e,n)):null}function ne(e){return{years:e.years||e.year||0,months:e.months||e.month||0,days:(e.days||e.day||0)+7*re(e),milliseconds:60*(e.hours||e.hour||0)*60*1e3+60*(e.minutes||e.minute||0)*1e3+1e3*(e.seconds||e.second||0)+(e.milliseconds||e.millisecond||e.ms||0)}}function re(e){return e.weeks||e.week||0}function ie(e,t){return e.years===t.years&&e.months===t.months&&e.days===t.days&&e.milliseconds===t.milliseconds}function oe(e){return ae(e)/864e5}function ae(e){return 31536e6*e.years+2592e6*e.months+864e5*e.days+e.milliseconds}function se(e,t){var n=e.milliseconds
if(n){if(n%1e3!=0)return{unit:"millisecond",value:n}
if(n%6e4!=0)return{unit:"second",value:n/1e3}
if(n%36e5!=0)return{unit:"minute",value:n/6e4}
if(n)return{unit:"hour",value:n/36e5}}return e.days?t||e.days%7!=0?{unit:"day",value:e.days}:{unit:"week",value:e.days/7}:e.months?{unit:"month",value:e.months}:e.years?{unit:"year",value:e.years}:{unit:"millisecond",value:0}}function le(){document.body.classList.add("fc-not-allowed")}function ue(){document.body.classList.remove("fc-not-allowed")}function ce(e,t,n){var r=Math.floor(t/e.length),i=Math.floor(t-r*(e.length-1)),o=[],a=[],s=[],l=0
de(e),e.forEach((function(t,n){var u=n===e.length-1?i:r,c=t.getBoundingClientRect().height,d=c+P(t)
d<u?(o.push(t),a.push(d),s.push(c)):l+=d})),n&&(t-=l,r=Math.floor(t/o.length),i=Math.floor(t-r*(o.length-1))),o.forEach((function(e,t){var n=t===o.length-1?i:r,l=a[t],u=n-(l-s[t])
l<n&&(e.style.height=u+"px")}))}function de(e){e.forEach((function(e){e.style.height=""}))}function he(e,t,n){return n.func?n.func(e,t):function(e,t){if(!e&&!t)return 0
if(null==t)return-1
if(null==e)return 1
if("string"==typeof e||"string"==typeof t)return String(e).localeCompare(String(t))
return e-t}(e[n.field],t[n.field])*(n.order||1)}function fe(e){return e.charAt(0).toUpperCase()+e.slice(1)}function pe(e,t){var n=String(e)
return"000".substr(0,t-n.length)+n}function ve(e,t){return e-t}function ge(e){return e%1==0}function me(e,t,n){if("function"==typeof e&&(e=[e]),e){var r=void 0,i=void 0
for(r=0;r<e.length;r++)i=e[r].apply(t,n)||i
return i}}function ye(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var n=0;n<e.length;n++)if(void 0!==e[n])return e[n]}function Ee(e,t){var n,r,i,o,a,s=function(){var l=(new Date).valueOf()-o
l<t?n=setTimeout(s,t-l):(n=null,a=e.apply(i,r),i=r=null)}
return function(){return i=this,r=arguments,o=(new Date).valueOf(),n||(n=setTimeout(s,t)),a}}function Se(e,t,n,r){void 0===n&&(n={})
var i={}
for(var o in t){var a=t[o]
void 0!==e[o]?i[o]=a===Function?"function"==typeof e[o]?e[o]:null:a?a(e[o]):e[o]:void 0!==n[o]?i[o]=n[o]:a===String?i[o]="":a&&a!==Number&&a!==Boolean&&a!==Function?i[o]=a(null):i[o]=null}if(r)for(var o in e)void 0===t[o]&&(r[o]=e[o])
return i}function we(e){var t=Math.floor(j(e.start,e.end))||1,n=B(e.start)
return{start:n,end:U(n,t)}}function be(e,t){void 0===t&&(t=te(0))
var n=null,r=null
if(e.end){r=B(e.end)
var i=e.end.valueOf()-r.valueOf()
i&&i>=ae(t)&&(r=U(r,1))}return e.start&&(n=B(e.start),r&&r<=n&&(r=U(n,1))),{start:n,end:r}}function De(e,t,n,r){return"year"===r?te(n.diffWholeYears(e,t),"year"):"month"===r?te(n.diffWholeMonths(e,t),"month"):(o=t,a=B(i=e),s=B(o),{years:0,months:0,days:Math.round(j(a,s)),milliseconds:o.valueOf()-s.valueOf()-(i.valueOf()-a.valueOf())})
var i,o,a,s}var Te=function(e,t){return(Te=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)}
function Ce(e,t){function n(){this.constructor=e}Te(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var Me=function(){return(Me=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e}).apply(this,arguments)}
function ke(e,t,n,r,i){var o=i[e.recurringDef.typeId].expand(e.recurringDef.typeData,{start:r.subtract(n.start,t),end:n.end},r)
return e.allDay&&(o=o.map(B)),o}var Ie=Object.prototype.hasOwnProperty
function Re(e,t){var n,r,i,o,a,s,l={}
if(t)for(n=0;n<t.length;n++){for(r=t[n],i=[],o=e.length-1;o>=0;o--)if("object"==typeof(a=e[o][r])&&a)i.unshift(a)
else if(void 0!==a){l[r]=a
break}i.length&&(l[r]=Re(i))}for(n=e.length-1;n>=0;n--)for(r in s=e[n])r in l||(l[r]=s[r])
return l}function Oe(e,t){var n={}
for(var r in e)t(e[r],r)&&(n[r]=e[r])
return n}function Ne(e,t){var n={}
for(var r in e)n[r]=t(e[r],r)
return n}function Pe(e){for(var t={},n=0,r=e;n<r.length;n++){t[r[n]]=!0}return t}function _e(e){var t=[]
for(var n in e)t.push(e[n])
return t}function Le(e,t){for(var n in e)if(Ie.call(e,n)&&!(n in t))return!1
for(var n in t)if(Ie.call(t,n)&&e[n]!==t[n])return!1
return!0}function He(e,t,n,r){for(var i={defs:{},instances:{}},o=0,a=e;o<a.length;o++){var s=Yt(a[o],t,n,r)
s&&xe(s,i)}return i}function xe(e,t){return void 0===t&&(t={defs:{},instances:{}}),t.defs[e.def.defId]=e.def,e.instance&&(t.instances[e.instance.instanceId]=e.instance),t}function Ve(e,t,n){var r=n.dateEnv,i=e.defs,o=e.instances
for(var a in o=Oe(o,(function(e){return!i[e.defId].recurringDef})),i){var s=i[a]
if(s.recurringDef){var l=s.recurringDef.duration
l||(l=s.allDay?n.defaultAllDayEventDuration:n.defaultTimedEventDuration)
for(var u=0,c=ke(s,l,t,n.dateEnv,n.pluginSystem.hooks.recurringTypes);u<c.length;u++){var d=c[u],h=Gt(a,{start:d,end:r.add(d,l)})
o[h.instanceId]=h}}}return{defs:i,instances:o}}function ze(e,t){var n=e.instances[t]
if(n){var r=e.defs[n.defId],i=Fe(e,(function(e){return t=r,n=e,Boolean(t.groupId&&t.groupId===n.groupId)
var t,n}))
return i.defs[r.defId]=r,i.instances[n.instanceId]=n,i}return{defs:{},instances:{}}}function Ae(e,t){var n
if(t){n=[]
for(var r=0,i=e;r<i.length;r++){var o=i[r],a=t(o)
a?n.push(a):null==a&&n.push(o)}}else n=e
return n}function Ue(e,t){return{defs:Me({},e.defs,t.defs),instances:Me({},e.instances,t.instances)}}function Fe(e,t){var n=Oe(e.defs,t),r=Oe(e.instances,(function(e){return n[e.defId]}))
return{defs:n,instances:r}}function je(e,t){var n=null,r=null
return e.start&&(n=t.createMarker(e.start)),e.end&&(r=t.createMarker(e.end)),n||r?n&&r&&r<n?null:{start:n,end:r}:null}function Ze(e,t){var n,r,i=[],o=t.start
for(e.sort(Be),n=0;n<e.length;n++)(r=e[n]).start>o&&i.push({start:o,end:r.start}),r.end>o&&(o=r.end)
return o<t.end&&i.push({start:o,end:t.end}),i}function Be(e,t){return e.start.valueOf()-t.start.valueOf()}function We(e,t){var n=e.start,r=e.end,i=null
return null!==t.start&&(n=null===n?t.start:new Date(Math.max(n.valueOf(),t.start.valueOf()))),null!=t.end&&(r=null===r?t.end:new Date(Math.min(r.valueOf(),t.end.valueOf()))),(null===n||null===r||n<r)&&(i={start:n,end:r}),i}function Ye(e,t){return(null===e.start?null:e.start.valueOf())===(null===t.start?null:t.start.valueOf())&&(null===e.end?null:e.end.valueOf())===(null===t.end?null:t.end.valueOf())}function qe(e,t){return(null===e.end||null===t.start||e.end>t.start)&&(null===e.start||null===t.end||e.start<t.end)}function Ge(e,t){return(null===e.start||null!==t.start&&t.start>=e.start)&&(null===e.end||null!==t.end&&t.end<=e.end)}function Xe(e,t){return(null===e.start||t>=e.start)&&(null===e.end||t<e.end)}function Je(e,t){var n,r=e.length
if(r!==t.length)return!1
for(n=0;n<r;n++)if(e[n]!==t[n])return!1
return!0}function $e(e){var t,n
return function(){return t&&Je(t,arguments)||(t=arguments,n=e.apply(this,arguments)),n}}var Qe={week:3,separator:0,omitZeroMinute:0,meridiem:0,omitCommas:0},Ke={timeZoneName:7,era:6,year:5,month:4,day:2,weekday:2,hour:1,minute:1,second:1},et=/\s*([ap])\.?m\.?/i,tt=/,/g,nt=/\s+/g,rt=/\u200e/g,it=/UTC|GMT/,ot=function(){function e(e){var t={},n={},r=0
for(var i in e)i in Qe?(n[i]=e[i],r=Math.max(Qe[i],r)):(t[i]=e[i],i in Ke&&(r=Math.max(Ke[i],r)))
this.standardDateProps=t,this.extendedSettings=n,this.severity=r,this.buildFormattingFunc=$e(at)}return e.prototype.format=function(e,t){return this.buildFormattingFunc(this.standardDateProps,this.extendedSettings,t)(e)},e.prototype.formatRange=function(e,t,n){var r=this.standardDateProps,i=this.extendedSettings,o=function(e,t,n){if(n.getMarkerYear(e)!==n.getMarkerYear(t))return 5
if(n.getMarkerMonth(e)!==n.getMarkerMonth(t))return 4
if(n.getMarkerDay(e)!==n.getMarkerDay(t))return 2
if(K(e)!==K(t))return 1
return 0}(e.marker,t.marker,n.calendarSystem)
if(!o)return this.format(e,n)
var a=o
!(a>1)||"numeric"!==r.year&&"2-digit"!==r.year||"numeric"!==r.month&&"2-digit"!==r.month||"numeric"!==r.day&&"2-digit"!==r.day||(a=1)
var s=this.format(e,n),l=this.format(t,n)
if(s===l)return s
var u=at(function(e,t){var n={}
for(var r in e)r in Ke&&!(Ke[r]<=t)||(n[r]=e[r])
return n}(r,a),i,n),c=u(e),d=u(t),h=function(e,t,n,r){var i=0
for(;i<e.length;){var o=e.indexOf(t,i)
if(-1===o)break
var a=e.substr(0,o)
i=o+t.length
for(var s=e.substr(i),l=0;l<n.length;){var u=n.indexOf(r,l)
if(-1===u)break
var c=n.substr(0,u)
l=u+r.length
var d=n.substr(l)
if(a===c&&s===d)return{before:a,after:s}}}return null}(s,c,l,d),f=i.separator||""
return h?h.before+c+f+d+h.after:s+f+l},e.prototype.getLargestUnit=function(){switch(this.severity){case 7:case 6:case 5:return"year"
case 4:return"month"
case 3:return"week"
default:return"day"}},e}()
function at(e,t,n){var r=Object.keys(e).length
return 1===r&&"short"===e.timeZoneName?function(e){return ct(e.timeZoneOffset)}:0===r&&t.week?function(e){return function(e,t,n,r){var i=[]
"narrow"===r?i.push(t):"short"===r&&i.push(t," ")
i.push(n.simpleNumberFormat.format(e)),n.options.isRtl&&i.reverse()
return i.join("")}(n.computeWeekNumber(e.marker),n.weekLabel,n.locale,t.week)}:function(e,t,n){e=Me({},e),t=Me({},t),function(e,t){e.timeZoneName&&(e.hour||(e.hour="2-digit"),e.minute||(e.minute="2-digit"))
"long"===e.timeZoneName&&(e.timeZoneName="short")
t.omitZeroMinute&&(e.second||e.millisecond)&&delete t.omitZeroMinute}(e,t),e.timeZone="UTC"
var r,i=new Intl.DateTimeFormat(n.locale.codes,e)
if(t.omitZeroMinute){var o=Me({},e)
delete o.minute,r=new Intl.DateTimeFormat(n.locale.codes,o)}return function(o){var a=o.marker
return function(e,t,n,r,i){e=e.replace(rt,""),"short"===n.timeZoneName&&(e=function(e,t){var n=!1
e=e.replace(it,(function(){return n=!0,t})),n||(e+=" "+t)
return e}(e,"UTC"===i.timeZone||null==t.timeZoneOffset?"UTC":ct(t.timeZoneOffset)))
r.omitCommas&&(e=e.replace(tt,"").trim())
r.omitZeroMinute&&(e=e.replace(":00",""))
!1===r.meridiem?e=e.replace(et,"").trim():"narrow"===r.meridiem?e=e.replace(et,(function(e,t){return t.toLocaleLowerCase()})):"short"===r.meridiem?e=e.replace(et,(function(e,t){return t.toLocaleLowerCase()+"m"})):"lowercase"===r.meridiem&&(e=e.replace(et,(function(e){return e.toLocaleLowerCase()})))
return e=(e=e.replace(nt," ")).trim()}((r&&!a.getUTCMinutes()?r:i).format(a),o,e,t,n)}}(e,t,n)}var st=function(){function e(e,t){this.cmdStr=e,this.separator=t}return e.prototype.format=function(e,t){return t.cmdFormatter(this.cmdStr,dt(e,null,t,this.separator))},e.prototype.formatRange=function(e,t,n){return n.cmdFormatter(this.cmdStr,dt(e,t,n,this.separator))},e}(),lt=function(){function e(e){this.func=e}return e.prototype.format=function(e,t){return this.func(dt(e,null,t))},e.prototype.formatRange=function(e,t,n){return this.func(dt(e,t,n))},e}()
function ut(e,t){return"object"==typeof e&&e?("string"==typeof t&&(e=Me({separator:t},e)),new ot(e)):"string"==typeof e?new st(e,t):"function"==typeof e?new lt(e):void 0}function ct(e,t){void 0===t&&(t=!1)
var n=e<0?"-":"+",r=Math.abs(e),i=Math.floor(r/60),o=Math.round(r%60)
return t?n+pe(i,2)+":"+pe(o,2):"GMT"+n+i+(o?":"+pe(o,2):"")}function dt(e,t,n,r){var i=ht(e,n.calendarSystem)
return{date:i,start:i,end:t?ht(t,n.calendarSystem):null,timeZone:n.timeZone,localeCodes:n.locale.codes,separator:r}}function ht(e,t){var n=t.markerToArray(e.marker)
return{marker:e.marker,timeZoneOffset:e.timeZoneOffset,array:n,year:n[0],month:n[1],day:n[2],hour:n[3],minute:n[4],second:n[5],millisecond:n[6]}}var ft=function(){function e(e,t){this.calendar=e,this.internalEventSource=t}return e.prototype.remove=function(){this.calendar.dispatch({type:"REMOVE_EVENT_SOURCE",sourceId:this.internalEventSource.sourceId})},e.prototype.refetch=function(){this.calendar.dispatch({type:"FETCH_EVENT_SOURCES",sourceIds:[this.internalEventSource.sourceId]})},Object.defineProperty(e.prototype,"id",{get:function(){return this.internalEventSource.publicId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"url",{get:function(){return this.internalEventSource.meta.url},enumerable:!0,configurable:!0}),e}(),pt=function(){function e(e,t,n){this._calendar=e,this._def=t,this._instance=n||null}return e.prototype.setProp=function(e,t){var n,r
if(e in Bt);else if(e in Zt)"function"==typeof Zt[e]&&(t=Zt[e](t)),this.mutate({standardProps:(n={},n[e]=t,n)})
else if(e in Vt){var i=void 0
"function"==typeof Vt[e]&&(t=Vt[e](t)),"color"===e?i={backgroundColor:t,borderColor:t}:"editable"===e?i={startEditable:t,durationEditable:t}:((r={})[e]=t,i=r),this.mutate({standardProps:{ui:i}})}},e.prototype.setExtendedProp=function(e,t){var n
this.mutate({extendedProps:(n={},n[e]=t,n)})},e.prototype.setStart=function(e,t){void 0===t&&(t={})
var n=this._calendar.dateEnv,r=n.createMarker(e)
if(r&&this._instance){var i=De(this._instance.range.start,r,n,t.granularity)
t.maintainDuration?this.mutate({datesDelta:i}):this.mutate({startDelta:i})}},e.prototype.setEnd=function(e,t){void 0===t&&(t={})
var n,r=this._calendar.dateEnv
if((null==e||(n=r.createMarker(e)))&&this._instance)if(n){var i=De(this._instance.range.end,n,r,t.granularity)
this.mutate({endDelta:i})}else this.mutate({standardProps:{hasEnd:!1}})},e.prototype.setDates=function(e,t,n){void 0===n&&(n={})
var r,i=this._calendar.dateEnv,o={allDay:n.allDay},a=i.createMarker(e)
if(a&&(null==t||(r=i.createMarker(t)))&&this._instance){var s=this._instance.range
!0===n.allDay&&(s=we(s))
var l=De(s.start,a,i,n.granularity)
if(r){var u=De(s.end,r,i,n.granularity)
ie(l,u)?this.mutate({datesDelta:l,standardProps:o}):this.mutate({startDelta:l,endDelta:u,standardProps:o})}else o.hasEnd=!1,this.mutate({datesDelta:l,standardProps:o})}},e.prototype.moveStart=function(e){var t=te(e)
t&&this.mutate({startDelta:t})},e.prototype.moveEnd=function(e){var t=te(e)
t&&this.mutate({endDelta:t})},e.prototype.moveDates=function(e){var t=te(e)
t&&this.mutate({datesDelta:t})},e.prototype.setAllDay=function(e,t){void 0===t&&(t={})
var n={allDay:e},r=t.maintainDuration
null==r&&(r=this._calendar.opt("allDayMaintainDuration")),this._def.allDay!==e&&(n.hasEnd=r),this.mutate({standardProps:n})},e.prototype.formatRange=function(e){var t=this._calendar.dateEnv,n=this._instance,r=ut(e,this._calendar.opt("defaultRangeSeparator"))
return this._def.hasEnd?t.formatRange(n.range.start,n.range.end,r,{forcedStartTzo:n.forcedStartTzo,forcedEndTzo:n.forcedEndTzo}):t.format(n.range.start,r,{forcedTzo:n.forcedStartTzo})},e.prototype.mutate=function(e){var t=this._def,n=this._instance
if(n){this._calendar.dispatch({type:"MUTATE_EVENTS",instanceId:n.instanceId,mutation:e,fromApi:!0})
var r=this._calendar.state.eventStore
this._def=r.defs[t.defId],this._instance=r.instances[n.instanceId]}},e.prototype.remove=function(){this._calendar.dispatch({type:"REMOVE_EVENT_DEF",defId:this._def.defId})},Object.defineProperty(e.prototype,"source",{get:function(){var e=this._def.sourceId
return e?new ft(this._calendar,this._calendar.state.eventSources[e]):null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"start",{get:function(){return this._instance?this._calendar.dateEnv.toDate(this._instance.range.start):null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"end",{get:function(){return this._instance&&this._def.hasEnd?this._calendar.dateEnv.toDate(this._instance.range.end):null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this._def.publicId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"groupId",{get:function(){return this._def.groupId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allDay",{get:function(){return this._def.allDay},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"title",{get:function(){return this._def.title},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"url",{get:function(){return this._def.url},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rendering",{get:function(){return this._def.rendering},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"startEditable",{get:function(){return this._def.ui.startEditable},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"durationEditable",{get:function(){return this._def.ui.durationEditable},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"constraint",{get:function(){return this._def.ui.constraints[0]||null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"overlap",{get:function(){return this._def.ui.overlap},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allow",{get:function(){return this._def.ui.allows[0]||null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"backgroundColor",{get:function(){return this._def.ui.backgroundColor},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"borderColor",{get:function(){return this._def.ui.borderColor},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"textColor",{get:function(){return this._def.ui.textColor},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"classNames",{get:function(){return this._def.ui.classNames},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"extendedProps",{get:function(){return this._def.extendedProps},enumerable:!0,configurable:!0}),e}()
function vt(e,t,n,r){var i={},o={},a={},s=[],l=[],u=Et(e.defs,t)
for(var c in e.defs){"inverse-background"===(S=e.defs[c]).rendering&&(S.groupId?(i[S.groupId]=[],a[S.groupId]||(a[S.groupId]=S)):o[c]=[])}for(var d in e.instances){var h=e.instances[d],f=u[(S=e.defs[h.defId]).defId],p=h.range,v=!S.allDay&&r?be(p,r):p,g=We(v,n)
g&&("inverse-background"===S.rendering?S.groupId?i[S.groupId].push(g):o[h.defId].push(g):("background"===S.rendering?s:l).push({def:S,ui:f,instance:h,range:g,isStart:v.start&&v.start.valueOf()===g.start.valueOf(),isEnd:v.end&&v.end.valueOf()===g.end.valueOf()}))}for(var m in i)for(var y=0,E=Ze(i[m],n);y<E.length;y++){var S,w=E[y]
f=u[(S=a[m]).defId]
s.push({def:S,ui:f,instance:null,range:w,isStart:!1,isEnd:!1})}for(var c in o)for(var b=0,D=Ze(o[c],n);b<D.length;b++){w=D[b]
s.push({def:e.defs[c],ui:u[c],instance:null,range:w,isStart:!1,isEnd:!1})}return{bg:s,fg:l}}function gt(e,t,n){e.hasPublicHandlers("eventRender")&&(t=t.filter((function(t){var r=e.publiclyTrigger("eventRender",[{event:new pt(e.calendar,t.eventRange.def,t.eventRange.instance),isMirror:n,isStart:t.isStart,isEnd:t.isEnd,el:t.el,view:e}])
return!1!==r&&(r&&!0!==r&&(t.el=r),!0)})))
for(var r=0,i=t;r<i.length;r++){var o=i[r]
mt(o.el,o)}return t}function mt(e,t){e.fcSeg=t}function yt(e){return e.fcSeg||null}function Et(e,t){return Ne(e,(function(e){return St(e,t)}))}function St(e,t){var n=[]
return t[""]&&n.push(t[""]),t[e.defId]&&n.push(t[e.defId]),n.push(e.ui),Ft(n)}function wt(e,t,n,r){var i=Et(e.defs,t),o={defs:{},instances:{}}
for(var a in e.defs){var s=e.defs[a]
o.defs[a]=bt(s,i[a],n,r.pluginSystem.hooks.eventDefMutationAppliers,r)}for(var l in e.instances){var u=e.instances[l]
s=o.defs[u.defId]
o.instances[l]=Dt(u,s,i[u.defId],n,r)}return o}function bt(e,t,n,r,i){var o=n.standardProps||{}
null==o.hasEnd&&t.durationEditable&&(n.startDelta||n.endDelta)&&(o.hasEnd=!0)
var a=Me({},e,o,{ui:Me({},e.ui,o.ui)})
n.extendedProps&&(a.extendedProps=Me({},a.extendedProps,n.extendedProps))
for(var s=0,l=r;s<l.length;s++){(0,l[s])(a,n,i)}return!a.hasEnd&&i.opt("forceEventDuration")&&(a.hasEnd=!0),a}function Dt(e,t,n,r,i){var o=i.dateEnv,a=r.standardProps&&!0===r.standardProps.allDay,s=r.standardProps&&!1===r.standardProps.hasEnd,l=Me({},e)
return a&&(l.range=we(l.range)),r.datesDelta&&n.startEditable&&(l.range={start:o.add(l.range.start,r.datesDelta),end:o.add(l.range.end,r.datesDelta)}),r.startDelta&&n.durationEditable&&(l.range={start:o.add(l.range.start,r.startDelta),end:l.range.end}),r.endDelta&&n.durationEditable&&(l.range={start:l.range.start,end:o.add(l.range.end,r.endDelta)}),s&&(l.range={start:l.range.start,end:i.getDefaultEventEnd(t.allDay,l.range.start)}),t.allDay&&(l.range={start:B(l.range.start),end:B(l.range.end)}),l.range.end<l.range.start&&(l.range.end=i.getDefaultEventEnd(t.allDay,l.range.start)),l}function Tt(e,t,n,r,i){switch(t.type){case"RECEIVE_EVENTS":return function(e,t,n,r,i,o){if(t&&n===t.latestFetchId){var a=He(function(e,t,n){var r=n.opt("eventDataTransform"),i=t?t.eventDataTransform:null
return i&&(e=Ae(e,i)),r&&(e=Ae(e,r)),e}(i,t,o),t.sourceId,o)
return r&&(a=Ve(a,r,o)),Ue(Ct(e,t.sourceId),a)}return e}(e,n[t.sourceId],t.fetchId,t.fetchRange,t.rawEvents,i)
case"ADD_EVENTS":return function(e,t,n,r){n&&(t=Ve(t,n,r))
return Ue(e,t)}(e,t.eventStore,r?r.activeRange:null,i)
case"MERGE_EVENTS":return Ue(e,t.eventStore)
case"PREV":case"NEXT":case"SET_DATE":case"SET_VIEW_TYPE":return r?Ve(e,r.activeRange,i):e
case"CHANGE_TIMEZONE":return function(e,t,n){var r=e.defs,i=Ne(e.instances,(function(e){var i=r[e.defId]
return i.allDay||i.recurringDef?e:Me({},e,{range:{start:n.createMarker(t.toDate(e.range.start,e.forcedStartTzo)),end:n.createMarker(t.toDate(e.range.end,e.forcedEndTzo))},forcedStartTzo:n.canComputeOffset?null:e.forcedStartTzo,forcedEndTzo:n.canComputeOffset?null:e.forcedEndTzo})}))
return{defs:r,instances:i}}(e,t.oldDateEnv,i.dateEnv)
case"MUTATE_EVENTS":return function(e,t,n,r,i){var o=ze(e,t),a=r?{"":{startEditable:!0,durationEditable:!0,constraints:[],overlap:null,allows:[],backgroundColor:"",borderColor:"",textColor:"",classNames:[]}}:i.eventUiBases
return o=wt(o,a,n,i),Ue(e,o)}(e,t.instanceId,t.mutation,t.fromApi,i)
case"REMOVE_EVENT_INSTANCES":return Mt(e,t.instances)
case"REMOVE_EVENT_DEF":return Fe(e,(function(e){return e.defId!==t.defId}))
case"REMOVE_EVENT_SOURCE":return Ct(e,t.sourceId)
case"REMOVE_ALL_EVENT_SOURCES":return Fe(e,(function(e){return!e.sourceId}))
case"REMOVE_ALL_EVENTS":return{defs:{},instances:{}}
case"RESET_EVENTS":return{defs:e.defs,instances:e.instances}
default:return e}}function Ct(e,t){return Fe(e,(function(e){return e.sourceId!==t}))}function Mt(e,t){return{defs:e.defs,instances:Oe(e.instances,(function(e){return!t[e.instanceId]}))}}function kt(e,t){return It({eventDrag:e},t)}function It(e,t){var n=t.view,r=Me({businessHours:n?n.props.businessHours:{defs:{},instances:{}},dateSelection:"",eventStore:t.state.eventStore,eventUiBases:t.eventUiBases,eventSelection:"",eventDrag:null,eventResize:null},e)
return(t.pluginSystem.hooks.isPropsValid||Rt)(r,t)}function Rt(e,t,n,r){return void 0===n&&(n={}),!(e.eventDrag&&!function(e,t,n,r){var i=e.eventDrag,o=i.mutatedEvents,a=o.defs,s=o.instances,l=Et(a,i.isEvent?e.eventUiBases:{"":t.selectionConfig})
r&&(l=Ne(l,r))
var u=Mt(e.eventStore,i.affectedEvents.instances),c=u.defs,d=u.instances,h=Et(c,e.eventUiBases)
for(var f in s){var p=s[f],v=p.range,g=l[p.defId],m=a[p.defId]
if(!Ot(g.constraints,v,u,e.businessHours,t))return!1
var y=t.opt("eventOverlap")
for(var E in"function"!=typeof y&&(y=null),d){var S=d[E]
if(qe(v,S.range)){if(!1===h[S.defId].overlap&&i.isEvent)return!1
if(!1===g.overlap)return!1
if(y&&!y(new pt(t,c[S.defId],S),new pt(t,m,p)))return!1}}for(var w=t.state.eventStore,b=0,D=g.allows;b<D.length;b++){var T=D[b],C=Me({},n,{range:p.range,allDay:m.allDay}),M=w.defs[m.defId],k=w.instances[f],I=void 0
if(I=M?new pt(t,M,k):new pt(t,m),!T(t.buildDateSpanApi(C),I))return!1}}return!0}(e,t,n,r))&&!(e.dateSelection&&!function(e,t,n,r){var i=e.eventStore,o=i.defs,a=i.instances,s=e.dateSelection,l=s.range,u=t.selectionConfig
r&&(u=r(u))
if(!Ot(u.constraints,l,i,e.businessHours,t))return!1
var c=t.opt("selectOverlap")
"function"!=typeof c&&(c=null)
for(var d in a){var h=a[d]
if(qe(l,h.range)){if(!1===u.overlap)return!1
if(c&&!c(new pt(t,o[h.defId],h)))return!1}}for(var f=0,p=u.allows;f<p.length;f++){var v=p[f],g=Me({},n,s)
if(!v(t.buildDateSpanApi(g),null))return!1}return!0}(e,t,n,r))}function Ot(e,t,n,r,i){for(var o=0,a=e;o<a.length;o++){if(!_t(Nt(a[o],t,n,r,i),t))return!1}return!0}function Nt(e,t,n,r,i){return"businessHours"===e?Pt(Ve(r,t,i)):"string"==typeof e?Pt(Fe(n,(function(t){return t.groupId===e}))):"object"==typeof e&&e?Pt(Ve(e,t,i)):[]}function Pt(e){var t=e.instances,n=[]
for(var r in t)n.push(t[r].range)
return n}function _t(e,t){for(var n=0,r=e;n<r.length;n++){if(Ge(r[n],t))return!0}return!1}function Lt(e){return(e+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;").replace(/\n/g,"<br />")}function Ht(e){var t=[]
for(var n in e){var r=e[n]
null!=r&&""!==r&&t.push(n+":"+r)}return t.join(";")}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.split(/\s+/):[]}var Vt={editable:Boolean,startEditable:Boolean,durationEditable:Boolean,constraint:null,overlap:null,allow:null,className:xt,classNames:xt,color:String,backgroundColor:String,borderColor:String,textColor:String}
function zt(e,t,n){var r=Se(e,Vt,{},n),i=function(e,t){return Array.isArray(e)?He(e,"",t,!0):"object"==typeof e&&e?He([e],"",t,!0):null!=e?String(e):null}(r.constraint,t)
return{startEditable:null!=r.startEditable?r.startEditable:r.editable,durationEditable:null!=r.durationEditable?r.durationEditable:r.editable,constraints:null!=i?[i]:[],overlap:r.overlap,allows:null!=r.allow?[r.allow]:[],backgroundColor:r.backgroundColor||r.color,borderColor:r.borderColor||r.color,textColor:r.textColor,classNames:r.classNames.concat(r.className)}}function At(e,t,n,r){var i={},o={}
for(var a in Vt){var s=e+fe(a)
i[a]=t[s],o[s]=!0}if("event"===e&&(i.editable=t.editable),r)for(var a in t)o[a]||(r[a]=t[a])
return zt(i,n)}var Ut={startEditable:null,durationEditable:null,constraints:[],overlap:null,allows:[],backgroundColor:"",borderColor:"",textColor:"",classNames:[]}
function Ft(e){return e.reduce(jt,Ut)}function jt(e,t){return{startEditable:null!=t.startEditable?t.startEditable:e.startEditable,durationEditable:null!=t.durationEditable?t.durationEditable:e.durationEditable,constraints:e.constraints.concat(t.constraints),overlap:"boolean"==typeof t.overlap?t.overlap:e.overlap,allows:e.allows.concat(t.allows),backgroundColor:t.backgroundColor||e.backgroundColor,borderColor:t.borderColor||e.borderColor,textColor:t.textColor||e.textColor,classNames:e.classNames.concat(t.classNames)}}var Zt={id:String,groupId:String,title:String,url:String,rendering:String,extendedProps:null},Bt={start:null,date:null,end:null,allDay:null},Wt=0
function Yt(e,t,n,r){var i=function(e,t){var n=null
if(e){var r=t.state.eventSources[e]
n=r.allDayDefault}null==n&&(n=t.opt("allDayDefault"))
return n}(t,n),o={},a=function(e,t,n,r,i){for(var o=0;o<r.length;o++){var a={},s=r[o].parse(e,a,n)
if(s){var l=a.allDay
return delete a.allDay,null==l&&null==(l=t)&&null==(l=s.allDayGuess)&&(l=!1),Me(i,a),{allDay:l,duration:s.duration,typeData:s.typeData,typeId:o}}}return null}(e,i,n.dateEnv,n.pluginSystem.hooks.recurringTypes,o)
if(a)return(s=qt(o,t,a.allDay,Boolean(a.duration),n)).recurringDef={typeId:a.typeId,typeData:a.typeData,duration:a.duration},{def:s,instance:null}
var s,l={},u=function(e,t,n,r,i){var o,a,s=function(e,t){var n=Se(e,Bt,{},t)
return n.start=null!==n.start?n.start:n.date,delete n.date,n}(e,r),l=s.allDay,u=null,c=!1,d=null
if(o=n.dateEnv.createMarkerMeta(s.start))u=o.marker
else if(!i)return null
null!=s.end&&(a=n.dateEnv.createMarkerMeta(s.end))
null==l&&(l=null!=t?t:(!o||o.isTimeUnspecified)&&(!a||a.isTimeUnspecified))
l&&u&&(u=B(u))
a&&(d=a.marker,l&&(d=B(d)),u&&d<=u&&(d=null))
d?c=!0:i||(c=n.opt("forceEventDuration")||!1,d=n.dateEnv.add(u,l?n.defaultAllDayEventDuration:n.defaultTimedEventDuration))
return{allDay:l,hasEnd:c,range:{start:u,end:d},forcedStartTzo:o?o.forcedTzo:null,forcedEndTzo:a?a.forcedTzo:null}}(e,i,n,l,r)
return u?{def:s=qt(l,t,u.allDay,u.hasEnd,n),instance:Gt(s.defId,u.range,u.forcedStartTzo,u.forcedEndTzo)}:null}function qt(e,t,n,r,i){var o={},a=function(e,t,n){var r={},i=Se(e,Zt,{},r),o=zt(r,t,n)
return i.publicId=i.id,delete i.id,i.ui=o,i}(e,i,o)
a.defId=String(Wt++),a.sourceId=t,a.allDay=n,a.hasEnd=r
for(var s=0,l=i.pluginSystem.hooks.eventDefParsers;s<l.length;s++){var u={};(0,l[s])(a,o,u),o=u}return a.extendedProps=Me(o,a.extendedProps||{}),Object.freeze(a.ui.classNames),Object.freeze(a.extendedProps),a}function Gt(e,t,n,r){return{instanceId:String(Wt++),defId:e,range:t,forcedStartTzo:null==n?null:n,forcedEndTzo:null==r?null:r}}var Xt={startTime:"09:00",endTime:"17:00",daysOfWeek:[1,2,3,4,5],rendering:"inverse-background",classNames:"fc-nonbusiness",groupId:"_businessHours"}
function Jt(e,t){return He(function(e){var t
t=!0===e?[{}]:Array.isArray(e)?e.filter((function(e){return e.daysOfWeek})):"object"==typeof e&&e?[e]:[]
return t=t.map((function(e){return Me({},Xt,e)}))}(e),"",t)}function $t(e,t,n){void 0===n&&(n=[])
var r,i,o=[]
function a(){if(i){for(var e=0,n=o;e<n.length;e++){n[e].unrender()}t&&t.apply(r,i),i=null}}function s(){i&&Je(i,arguments)||(a(),r=this,i=arguments,e.apply(this,arguments))}s.dependents=o,s.unrender=a
for(var l=0,u=n;l<u.length;l++){u[l].dependents.push(s)}return s}var Qt={defs:{},instances:{}}
!function(){function e(){this.getKeysForEventDefs=$e(this._getKeysForEventDefs),this.splitDateSelection=$e(this._splitDateSpan),this.splitEventStore=$e(this._splitEventStore),this.splitIndividualUi=$e(this._splitIndividualUi),this.splitEventDrag=$e(this._splitInteraction),this.splitEventResize=$e(this._splitInteraction),this.eventUiBuilders={}}e.prototype.splitProps=function(e){var t=this,n=this.getKeyInfo(e),r=this.getKeysForEventDefs(e.eventStore),i=this.splitDateSelection(e.dateSelection),o=this.splitIndividualUi(e.eventUiBases,r),a=this.splitEventStore(e.eventStore,r),s=this.splitEventDrag(e.eventDrag),l=this.splitEventResize(e.eventResize),u={}
for(var c in this.eventUiBuilders=Ne(n,(function(e,n){return t.eventUiBuilders[n]||$e(Kt)})),n){var d=n[c],h=a[c]||Qt,f=this.eventUiBuilders[c]
u[c]={businessHours:d.businessHours||e.businessHours,dateSelection:i[c]||null,eventStore:h,eventUiBases:f(e.eventUiBases[""],d.ui,o[c]),eventSelection:h.instances[e.eventSelection]?e.eventSelection:"",eventDrag:s[c]||null,eventResize:l[c]||null}}return u},e.prototype._splitDateSpan=function(e){var t={}
if(e)for(var n=0,r=this.getKeysForDateSpan(e);n<r.length;n++){t[r[n]]=e}return t},e.prototype._getKeysForEventDefs=function(e){var t=this
return Ne(e.defs,(function(e){return t.getKeysForEventDef(e)}))},e.prototype._splitEventStore=function(e,t){var n=e.defs,r=e.instances,i={}
for(var o in n)for(var a=0,s=t[o];a<s.length;a++){i[h=s[a]]||(i[h]={defs:{},instances:{}}),i[h].defs[o]=n[o]}for(var l in r)for(var u=r[l],c=0,d=t[u.defId];c<d.length;c++){var h
i[h=d[c]]&&(i[h].instances[l]=u)}return i},e.prototype._splitIndividualUi=function(e,t){var n={}
for(var r in e)if(r)for(var i=0,o=t[r];i<o.length;i++){var a=o[i]
n[a]||(n[a]={}),n[a][r]=e[r]}return n},e.prototype._splitInteraction=function(e){var t={}
if(e){var n=this._splitEventStore(e.affectedEvents,this._getKeysForEventDefs(e.affectedEvents)),r=this._getKeysForEventDefs(e.mutatedEvents),i=this._splitEventStore(e.mutatedEvents,r),o=function(r){t[r]||(t[r]={affectedEvents:n[r]||Qt,mutatedEvents:i[r]||Qt,isEvent:e.isEvent,origSeg:e.origSeg})}
for(var a in n)o(a)
for(var a in i)o(a)}return t}}()
function Kt(e,t,n){var r=[]
e&&r.push(e),t&&r.push(t)
var i={"":Ft(r)}
return n&&Me(i,n),i}function en(e,t,n,r){var i,o,a,s,l=e.dateEnv
return t instanceof Date?i=t:(i=t.date,o=t.type,a=t.forceOff),s={date:l.formatIso(i,{omitTime:!0}),type:o||"day"},"string"==typeof n&&(r=n,n=null),n=n?" "+function(e){var t=[]
for(var n in e){var r=e[n]
null!=r&&t.push(n+'="'+Lt(r)+'"')}return t.join(" ")}(n):"",r=r||"",!a&&e.opt("navLinks")?"<a"+n+' data-goto="'+Lt(JSON.stringify(s))+'">'+r+"</a>":"<span"+n+">"+r+"</span>"}function tn(e,t,n,r){var i,o,a=n.calendar,s=n.view,l=n.theme,u=n.dateEnv,c=[]
return Xe(t.activeRange,e)?(c.push("fc-"+z[e.getUTCDay()]),s.opt("monthMode")&&u.getMonth(e)!==u.getMonth(t.currentRange.start)&&c.push("fc-other-month"),o=U(i=B(a.getNow()),1),e<i?c.push("fc-past"):e>=o?c.push("fc-future"):(c.push("fc-today"),!0!==r&&c.push(l.getClass("today")))):c.push("fc-disabled-day"),c}var nn=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Ce(t,e),t.prototype.on=function(e,t){return rn(this._handlers||(this._handlers={}),e,t),this},t.prototype.one=function(e,t){return rn(this._oneHandlers||(this._oneHandlers={}),e,t),this},t.prototype.off=function(e,t){return this._handlers&&on(this._handlers,e,t),this._oneHandlers&&on(this._oneHandlers,e,t),this},t.prototype.trigger=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
return this.triggerWith(e,this,t),this},t.prototype.triggerWith=function(e,t,n){return this._handlers&&me(this._handlers[e],t,n),this._oneHandlers&&(me(this._oneHandlers[e],t,n),delete this._oneHandlers[e]),this},t.prototype.hasHandlers=function(e){return this._handlers&&this._handlers[e]&&this._handlers[e].length||this._oneHandlers&&this._oneHandlers[e]&&this._oneHandlers[e].length},t}(function(){function e(){}return e.mixInto=function(e){this.mixIntoObj(e.prototype)},e.mixIntoObj=function(e){var t=this
Object.getOwnPropertyNames(this.prototype).forEach((function(n){e[n]||(e[n]=t.prototype[n])}))},e.mixOver=function(e){var t=this
Object.getOwnPropertyNames(this.prototype).forEach((function(n){e.prototype[n]=t.prototype[n]}))},e}())
function rn(e,t,n){(e[t]||(e[t]=[])).push(n)}function on(e,t,n){n?e[t]&&(e[t]=e[t].filter((function(e){return e!==n}))):delete e[t]}var an=function(){function e(e,t,n,r){this.originEl=e,this.els=t,this.isHorizontal=n,this.isVertical=r}return e.prototype.build=function(){var e=this.originEl,t=this.originClientRect=e.getBoundingClientRect()
this.isHorizontal&&this.buildElHorizontals(t.left),this.isVertical&&this.buildElVerticals(t.top)},e.prototype.buildElHorizontals=function(e){for(var t=[],n=[],r=0,i=this.els;r<i.length;r++){var o=i[r].getBoundingClientRect()
t.push(o.left-e),n.push(o.right-e)}this.lefts=t,this.rights=n},e.prototype.buildElVerticals=function(e){for(var t=[],n=[],r=0,i=this.els;r<i.length;r++){var o=i[r].getBoundingClientRect()
t.push(o.top-e),n.push(o.bottom-e)}this.tops=t,this.bottoms=n},e.prototype.leftToIndex=function(e){var t,n=this.lefts,r=this.rights,i=n.length
for(t=0;t<i;t++)if(e>=n[t]&&e<r[t])return t},e.prototype.topToIndex=function(e){var t,n=this.tops,r=this.bottoms,i=n.length
for(t=0;t<i;t++)if(e>=n[t]&&e<r[t])return t},e.prototype.getWidth=function(e){return this.rights[e]-this.lefts[e]},e.prototype.getHeight=function(e){return this.bottoms[e]-this.tops[e]},e}(),sn=function(){function e(){}return e.prototype.getMaxScrollTop=function(){return this.getScrollHeight()-this.getClientHeight()},e.prototype.getMaxScrollLeft=function(){return this.getScrollWidth()-this.getClientWidth()},e.prototype.canScrollVertically=function(){return this.getMaxScrollTop()>0},e.prototype.canScrollHorizontally=function(){return this.getMaxScrollLeft()>0},e.prototype.canScrollUp=function(){return this.getScrollTop()>0},e.prototype.canScrollDown=function(){return this.getScrollTop()<this.getMaxScrollTop()},e.prototype.canScrollLeft=function(){return this.getScrollLeft()>0},e.prototype.canScrollRight=function(){return this.getScrollLeft()<this.getMaxScrollLeft()},e}(),ln=function(e){function t(t){var n=e.call(this)||this
return n.el=t,n}return Ce(t,e),t.prototype.getScrollTop=function(){return this.el.scrollTop},t.prototype.getScrollLeft=function(){return this.el.scrollLeft},t.prototype.setScrollTop=function(e){this.el.scrollTop=e},t.prototype.setScrollLeft=function(e){this.el.scrollLeft=e},t.prototype.getScrollWidth=function(){return this.el.scrollWidth},t.prototype.getScrollHeight=function(){return this.el.scrollHeight},t.prototype.getClientHeight=function(){return this.el.clientHeight},t.prototype.getClientWidth=function(){return this.el.clientWidth},t}(sn),un=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Ce(t,e),t.prototype.getScrollTop=function(){return window.pageYOffset},t.prototype.getScrollLeft=function(){return window.pageXOffset},t.prototype.setScrollTop=function(e){window.scroll(window.pageXOffset,e)},t.prototype.setScrollLeft=function(e){window.scroll(e,window.pageYOffset)},t.prototype.getScrollWidth=function(){return document.documentElement.scrollWidth},t.prototype.getScrollHeight=function(){return document.documentElement.scrollHeight},t.prototype.getClientHeight=function(){return document.documentElement.clientHeight},t.prototype.getClientWidth=function(){return document.documentElement.clientWidth},t}(sn),cn=function(e){function t(t,n){var r=e.call(this,o("div",{className:"fc-scroller"}))||this
return r.overflowX=t,r.overflowY=n,r.applyOverflow(),r}return Ce(t,e),t.prototype.clear=function(){this.setHeight("auto"),this.applyOverflow()},t.prototype.destroy=function(){f(this.el)},t.prototype.applyOverflow=function(){w(this.el,{overflowX:this.overflowX,overflowY:this.overflowY})},t.prototype.lockOverflow=function(e){var t=this.overflowX,n=this.overflowY
e=e||this.getScrollbarWidths(),"auto"===t&&(t=e.bottom||this.canScrollHorizontally()?"scroll":"hidden"),"auto"===n&&(n=e.left||e.right||this.canScrollVertically()?"scroll":"hidden"),w(this.el,{overflowX:t,overflowY:n})},t.prototype.setHeight=function(e){b(this.el,"height",e)},t.prototype.getScrollbarWidths=function(){var e=I(this.el)
return{left:e.scrollbarLeft,right:e.scrollbarRight,bottom:e.scrollbarBottom}},t}(ln),dn=function(){function e(e){this.calendarOptions=e,this.processIconOverride()}return e.prototype.processIconOverride=function(){this.iconOverrideOption&&this.setIconOverride(this.calendarOptions[this.iconOverrideOption])},e.prototype.setIconOverride=function(e){var t,n
if("object"==typeof e&&e){for(n in t=Me({},this.iconClasses),e)t[n]=this.applyIconOverridePrefix(e[n])
this.iconClasses=t}else!1===e&&(this.iconClasses={})},e.prototype.applyIconOverridePrefix=function(e){var t=this.iconOverridePrefix
return t&&0!==e.indexOf(t)&&(e=t+e),e},e.prototype.getClass=function(e){return this.classes[e]||""},e.prototype.getIconClass=function(e){var t=this.iconClasses[e]
return t?this.baseIconClass+" "+t:""},e.prototype.getCustomButtonIconClass=function(e){var t
return this.iconOverrideCustomButtonOption&&(t=e[this.iconOverrideCustomButtonOption])?this.baseIconClass+" "+this.applyIconOverridePrefix(t):""},e}()
dn.prototype.classes={},dn.prototype.iconClasses={},dn.prototype.baseIconClass="",dn.prototype.iconOverridePrefix=""
var hn=0,fn=function(){function e(e,t){t&&(e.view=this),this.uid=String(hn++),this.context=e,this.dateEnv=e.dateEnv,this.theme=e.theme,this.view=e.view,this.calendar=e.calendar,this.isRtl="rtl"===this.opt("dir")}return e.addEqualityFuncs=function(e){this.prototype.equalityFuncs=Me({},this.prototype.equalityFuncs,e)},e.prototype.opt=function(e){return this.context.options[e]},e.prototype.receiveProps=function(e){var t=function(e,t,n){var r={},i=!1
for(var o in t)o in e&&(e[o]===t[o]||n[o]&&n[o](e[o],t[o]))?r[o]=e[o]:(r[o]=t[o],i=!0)
for(var o in e)if(!(o in t)){i=!0
break}return{anyChanges:i,comboProps:r}}(this.props||{},e,this.equalityFuncs),n=t.anyChanges,r=t.comboProps
this.props=r,n&&this.render(r)},e.prototype.render=function(e){},e.prototype.destroy=function(){},e}()
fn.prototype.equalityFuncs={}
var pn=function(e){function t(t,n,r){var i=e.call(this,t,r)||this
return i.el=n,i}return Ce(t,e),t.prototype.destroy=function(){e.prototype.destroy.call(this),f(this.el)},t.prototype.buildPositionCaches=function(){},t.prototype.queryHit=function(e,t,n,r){return null},t.prototype.isInteractionValid=function(e){var t=this.calendar,n=this.props.dateProfile,r=e.mutatedEvents.instances
if(n)for(var i in r)if(!Ge(n.validRange,r[i].range))return!1
return kt(e,t)},t.prototype.isDateSelectionValid=function(e){var t,n,r=this.props.dateProfile
return!(r&&!Ge(r.validRange,e.range))&&(t=e,n=this.calendar,It({dateSelection:t},n))},t.prototype.publiclyTrigger=function(e,t){return this.calendar.publiclyTrigger(e,t)},t.prototype.publiclyTriggerAfterSizing=function(e,t){return this.calendar.publiclyTriggerAfterSizing(e,t)},t.prototype.hasPublicHandlers=function(e){return this.calendar.hasPublicHandlers(e)},t.prototype.triggerRenderedSegs=function(e,t){var n=this.calendar
if(this.hasPublicHandlers("eventPositioned"))for(var r=0,i=e;r<i.length;r++){var o=i[r]
this.publiclyTriggerAfterSizing("eventPositioned",[{event:new pt(n,o.eventRange.def,o.eventRange.instance),isMirror:t,isStart:o.isStart,isEnd:o.isEnd,el:o.el,view:this}])}n.state.loadingLevel||(n.afterSizingTriggers._eventsPositioned=[null])},t.prototype.triggerWillRemoveSegs=function(e,t){for(var n=this.calendar,r=0,i=e;r<i.length;r++){var o=i[r]
n.trigger("eventElRemove",o.el)}if(this.hasPublicHandlers("eventDestroy"))for(var a=0,s=e;a<s.length;a++){o=s[a]
this.publiclyTrigger("eventDestroy",[{event:new pt(n,o.eventRange.def,o.eventRange.instance),isMirror:t,el:o.el,view:this}])}},t.prototype.isValidSegDownEl=function(e){return!this.props.eventDrag&&!this.props.eventResize&&!g(e,".fc-mirror")&&(this.isPopover()||!this.isInPopover(e))},t.prototype.isValidDateDownEl=function(e){var t=g(e,this.fgSegSelector)
return(!t||t.classList.contains("fc-mirror"))&&!g(e,".fc-more")&&!g(e,"a[data-goto]")&&!this.isInPopover(e)},t.prototype.isPopover=function(){return this.el.classList.contains("fc-popover")},t.prototype.isInPopover=function(e){return Boolean(g(e,".fc-popover"))},t}(fn)
pn.prototype.fgSegSelector=".fc-event-container > *",pn.prototype.bgSegSelector=".fc-bgevent:not(.fc-nonbusiness)"
var vn=0
function gn(e){return{id:String(vn++),deps:e.deps||[],reducers:e.reducers||[],eventDefParsers:e.eventDefParsers||[],isDraggableTransformers:e.isDraggableTransformers||[],eventDragMutationMassagers:e.eventDragMutationMassagers||[],eventDefMutationAppliers:e.eventDefMutationAppliers||[],dateSelectionTransformers:e.dateSelectionTransformers||[],datePointTransforms:e.datePointTransforms||[],dateSpanTransforms:e.dateSpanTransforms||[],views:e.views||{},viewPropsTransformers:e.viewPropsTransformers||[],isPropsValid:e.isPropsValid||null,externalDefTransforms:e.externalDefTransforms||[],eventResizeJoinTransforms:e.eventResizeJoinTransforms||[],viewContainerModifiers:e.viewContainerModifiers||[],eventDropTransformers:e.eventDropTransformers||[],componentInteractions:e.componentInteractions||[],calendarInteractions:e.calendarInteractions||[],themeClasses:e.themeClasses||{},eventSourceDefs:e.eventSourceDefs||[],cmdFormatter:e.cmdFormatter,recurringTypes:e.recurringTypes||[],namedTimeZonedImpl:e.namedTimeZonedImpl,defaultView:e.defaultView||"",elementDraggingImpl:e.elementDraggingImpl,optionChangeHandlers:e.optionChangeHandlers||{}}}var mn=function(){function e(){this.hooks={reducers:[],eventDefParsers:[],isDraggableTransformers:[],eventDragMutationMassagers:[],eventDefMutationAppliers:[],dateSelectionTransformers:[],datePointTransforms:[],dateSpanTransforms:[],views:{},viewPropsTransformers:[],isPropsValid:null,externalDefTransforms:[],eventResizeJoinTransforms:[],viewContainerModifiers:[],eventDropTransformers:[],componentInteractions:[],calendarInteractions:[],themeClasses:{},eventSourceDefs:[],cmdFormatter:null,recurringTypes:[],namedTimeZonedImpl:null,defaultView:"",elementDraggingImpl:null,optionChangeHandlers:{}},this.addedHash={}}return e.prototype.add=function(e){if(!this.addedHash[e.id]){this.addedHash[e.id]=!0
for(var t=0,n=e.deps;t<n.length;t++){var r=n[t]
this.add(r)}this.hooks=(i=this.hooks,o=e,{reducers:i.reducers.concat(o.reducers),eventDefParsers:i.eventDefParsers.concat(o.eventDefParsers),isDraggableTransformers:i.isDraggableTransformers.concat(o.isDraggableTransformers),eventDragMutationMassagers:i.eventDragMutationMassagers.concat(o.eventDragMutationMassagers),eventDefMutationAppliers:i.eventDefMutationAppliers.concat(o.eventDefMutationAppliers),dateSelectionTransformers:i.dateSelectionTransformers.concat(o.dateSelectionTransformers),datePointTransforms:i.datePointTransforms.concat(o.datePointTransforms),dateSpanTransforms:i.dateSpanTransforms.concat(o.dateSpanTransforms),views:Me({},i.views,o.views),viewPropsTransformers:i.viewPropsTransformers.concat(o.viewPropsTransformers),isPropsValid:o.isPropsValid||i.isPropsValid,externalDefTransforms:i.externalDefTransforms.concat(o.externalDefTransforms),eventResizeJoinTransforms:i.eventResizeJoinTransforms.concat(o.eventResizeJoinTransforms),viewContainerModifiers:i.viewContainerModifiers.concat(o.viewContainerModifiers),eventDropTransformers:i.eventDropTransformers.concat(o.eventDropTransformers),calendarInteractions:i.calendarInteractions.concat(o.calendarInteractions),componentInteractions:i.componentInteractions.concat(o.componentInteractions),themeClasses:Me({},i.themeClasses,o.themeClasses),eventSourceDefs:i.eventSourceDefs.concat(o.eventSourceDefs),cmdFormatter:o.cmdFormatter||i.cmdFormatter,recurringTypes:i.recurringTypes.concat(o.recurringTypes),namedTimeZonedImpl:o.namedTimeZonedImpl||i.namedTimeZonedImpl,defaultView:i.defaultView||o.defaultView,elementDraggingImpl:i.elementDraggingImpl||o.elementDraggingImpl,optionChangeHandlers:Me({},i.optionChangeHandlers,o.optionChangeHandlers)})}var i,o},e}()
var yn=gn({eventSourceDefs:[{ignoreRange:!0,parseMeta:function(e){return Array.isArray(e)?e:Array.isArray(e.events)?e.events:null},fetch:function(e,t){t({rawEvents:e.eventSource.meta})}}]}),En=gn({eventSourceDefs:[{parseMeta:function(e){return"function"==typeof e?e:"function"==typeof e.events?e.events:null},fetch:function(e,t,n){var r=e.calendar.dateEnv
!function(e,t,n){var r=!1,i=function(){r||(r=!0,t.apply(this,arguments))},o=function(){r||(r=!0,n&&n.apply(this,arguments))},a=e(i,o)
a&&"function"==typeof a.then&&a.then(i,o)}(e.eventSource.meta.bind(null,{start:r.toDate(e.range.start),end:r.toDate(e.range.end),startStr:r.formatIso(e.range.start),endStr:r.formatIso(e.range.end),timeZone:r.timeZone}),(function(e){t({rawEvents:e})}),n)}}]})
function Sn(e,t,n,r,i){var o=null
"GET"===(e=e.toUpperCase())?t=function(e,t){return e+(-1===e.indexOf("?")?"?":"&")+wn(t)}(t,n):o=wn(n)
var a=new XMLHttpRequest
a.open(e,t,!0),"GET"!==e&&a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.onload=function(){if(a.status>=200&&a.status<400)try{var e=JSON.parse(a.responseText)
r(e,a)}catch(e){i("Failure parsing JSON",a)}else i("Request failed",a)},a.onerror=function(){i("Request failed",a)},a.send(o)}function wn(e){var t=[]
for(var n in e)t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]))
return t.join("&")}var bn=gn({eventSourceDefs:[{parseMeta:function(e){if("string"==typeof e)e={url:e}
else if(!e||"object"!=typeof e||!e.url)return null
return{url:e.url,method:(e.method||"GET").toUpperCase(),extraParams:e.extraParams,startParam:e.startParam,endParam:e.endParam,timeZoneParam:e.timeZoneParam}},fetch:function(e,t,n){var r=e.eventSource.meta,i=function(e,t,n){var r,i,o,a,s=n.dateEnv,l={}
null==(r=e.startParam)&&(r=n.opt("startParam"))
null==(i=e.endParam)&&(i=n.opt("endParam"))
null==(o=e.timeZoneParam)&&(o=n.opt("timeZoneParam"))
a="function"==typeof e.extraParams?e.extraParams():e.extraParams||{}
Me(l,a),l[r]=s.formatIso(t.start),l[i]=s.formatIso(t.end),"local"!==s.timeZone&&(l[o]=s.timeZone)
return l}(r,e.range,e.calendar)
Sn(r.method,r.url,i,(function(e,n){t({rawEvents:e,xhr:n})}),(function(e,t){n({message:e,xhr:t})}))}}]})
var Dn=gn({recurringTypes:[{parse:function(e,t,n){var r,i,o=n.createMarker.bind(n),a=Se(e,{daysOfWeek:null,startTime:te,endTime:te,startRecur:o,endRecur:o},{},t),s=!1
for(var l in a)if(null!=a[l]){s=!0
break}if(s){var u=null
return"duration"in t&&(u=te(t.duration),delete t.duration),!u&&a.startTime&&a.endTime&&(r=a.endTime,i=a.startTime,u={years:r.years-i.years,months:r.months-i.months,days:r.days-i.days,milliseconds:r.milliseconds-i.milliseconds}),{allDayGuess:Boolean(!a.startTime&&!a.endTime),duration:u,typeData:a}}return null},expand:function(e,t,n){var r=We(t,{start:e.startRecur,end:e.endRecur})
return r?function(e,t,n,r){var i=e?Pe(e):null,o=B(n.start),a=n.end,s=[]
for(;o<a;){var l=void 0
i&&!i[o.getUTCDay()]||(l=t?r.add(o,t):o,s.push(l)),o=U(o,1)}return s}(e.daysOfWeek,e.startTime,r,n):[]}}]})
var Tn=gn({optionChangeHandlers:{events:function(e,t,n){Cn([e],t,n)},eventSources:Cn,plugins:function(e,t){t.addPluginInputs(e)}}})
function Cn(e,t,n){for(var r=_e(t.state.eventSources),i=[],o=0,a=e;o<a.length;o++){for(var s=a[o],l=!1,u=0;u<r.length;u++)if(n(r[u]._raw,s)){r.splice(u,1),l=!0
break}l||i.push(s)}for(var c=0,d=r;c<d.length;c++){var h=d[c]
t.dispatch({type:"REMOVE_EVENT_SOURCE",sourceId:h.sourceId})}for(var f=0,p=i;f<p.length;f++){var v=p[f]
t.addEventSource(v)}}var Mn={},kn={defaultRangeSeparator:" - ",titleRangeSeparator:" – ",defaultTimedEventDuration:"01:00:00",defaultAllDayEventDuration:{day:1},forceEventDuration:!1,nextDayThreshold:"00:00:00",columnHeader:!0,defaultView:"",aspectRatio:1.35,header:{left:"title",center:"",right:"today prev,next"},weekends:!0,weekNumbers:!1,weekNumberCalculation:"local",editable:!1,scrollTime:"06:00:00",minTime:"00:00:00",maxTime:"24:00:00",showNonCurrentDates:!0,lazyFetching:!0,startParam:"start",endParam:"end",timeZoneParam:"timeZone",timeZone:"local",locales:[],locale:"",timeGridEventMinHeight:0,themeSystem:"standard",dragRevertDuration:500,dragScroll:!0,allDayMaintainDuration:!1,unselectAuto:!0,dropAccept:"*",eventOrder:"start,-duration,allDay,title",eventLimit:!1,eventLimitClick:"popover",dayPopoverFormat:{month:"long",day:"numeric",year:"numeric"},handleWindowResize:!0,windowResizeDelay:100,longPressDelay:1e3,eventDragMinDistance:5},In={header:{left:"next,prev today",center:"",right:"title"},buttonIcons:{prev:"fc-icon-chevron-right",next:"fc-icon-chevron-left",prevYear:"fc-icon-chevrons-right",nextYear:"fc-icon-chevrons-left"}},Rn=["header","footer","buttonText","buttonIcons"]
var On=[yn,En,bn,Dn,Tn]
var Nn={code:"en",week:{dow:0,doy:4},dir:"ltr",buttonText:{prev:"prev",next:"next",prevYear:"prev year",nextYear:"next year",year:"year",today:"today",month:"month",week:"week",day:"day",list:"list"},weekLabel:"W",allDayText:"all-day",eventLimitText:"more",noEventsMessage:"No events to display"}
function Pn(e){for(var t=e.length>0?e[0].code:"en",n=window.FullCalendarLocalesAll||[],r=window.FullCalendarLocales||{},i=n.concat(_e(r),e),o={en:Nn},a=0,s=i;a<s.length;a++){var l=s[a]
o[l.code]=l}return{map:o,defaultCode:t}}function _n(e,t){return"object"!=typeof e||Array.isArray(e)?function(e,t){var n=[].concat(e||[]),r=function(e,t){for(var n=0;n<e.length;n++)for(var r=e[n].toLocaleLowerCase().split("-"),i=r.length;i>0;i--){var o=r.slice(0,i).join("-")
if(t[o])return t[o]}return null}(n,t)||Nn
return Ln(e,n,r)}(e,t):Ln(e.code,[e.code],e)}function Ln(e,t,n){var r=Re([Nn,n],["buttonText"])
delete r.code
var i=r.week
return delete r.week,{codeArg:e,codes:t,week:i,simpleNumberFormat:new Intl.NumberFormat(e),options:r}}var Hn=function(){function e(e){this.overrides=Me({},e),this.dynamicOverrides={},this.compute()}return e.prototype.mutate=function(e,t,n){var r=n?this.dynamicOverrides:this.overrides
Me(r,e)
for(var i=0,o=t;i<o.length;i++){delete r[o[i]]}this.compute()},e.prototype.compute=function(){var e=ye(this.dynamicOverrides.locales,this.overrides.locales,kn.locales),t=ye(this.dynamicOverrides.locale,this.overrides.locale,kn.locale),n=Pn(e),r=_n(t||n.defaultCode,n.map).options,i="rtl"===ye(this.dynamicOverrides.dir,this.overrides.dir,r.dir)?In:{}
this.dirDefaults=i,this.localeDefaults=r,this.computed=Re([kn,i,r,this.overrides,this.dynamicOverrides],Rn)},e}(),xn={}
var Vn,zn=function(){function e(){}return e.prototype.getMarkerYear=function(e){return e.getUTCFullYear()},e.prototype.getMarkerMonth=function(e){return e.getUTCMonth()},e.prototype.getMarkerDay=function(e){return e.getUTCDate()},e.prototype.arrayToMarker=function(e){return J(e)},e.prototype.markerToArray=function(e){return X(e)},e}()
Vn=zn,xn["gregory"]=Vn
var An=/^\s*(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/
var Un=function(){function e(e){var t=this.timeZone=e.timeZone,n="local"!==t&&"UTC"!==t
e.namedTimeZoneImpl&&n&&(this.namedTimeZoneImpl=new e.namedTimeZoneImpl(t)),this.canComputeOffset=Boolean(!n||this.namedTimeZoneImpl),this.calendarSystem=function(e){return new xn[e]}(e.calendarSystem),this.locale=e.locale,this.weekDow=e.locale.week.dow,this.weekDoy=e.locale.week.doy,"ISO"===e.weekNumberCalculation&&(this.weekDow=1,this.weekDoy=4),"number"==typeof e.firstDay&&(this.weekDow=e.firstDay),"function"==typeof e.weekNumberCalculation&&(this.weekNumberFunc=e.weekNumberCalculation),this.weekLabel=null!=e.weekLabel?e.weekLabel:e.locale.options.weekLabel,this.cmdFormatter=e.cmdFormatter}return e.prototype.createMarker=function(e){var t=this.createMarkerMeta(e)
return null===t?null:t.marker},e.prototype.createNowMarker=function(){return this.canComputeOffset?this.timestampToMarker((new Date).valueOf()):J(q(new Date))},e.prototype.createMarkerMeta=function(e){if("string"==typeof e)return this.parse(e)
var t=null
return"number"==typeof e?t=this.timestampToMarker(e):e instanceof Date?(e=e.valueOf(),isNaN(e)||(t=this.timestampToMarker(e))):Array.isArray(e)&&(t=J(e)),null!==t&&Q(t)?{marker:t,isTimeUnspecified:!1,forcedTzo:null}:null},e.prototype.parse=function(e){var t=function(e){var t=An.exec(e)
if(t){var n=new Date(Date.UTC(Number(t[1]),t[3]?Number(t[3])-1:0,Number(t[5]||1),Number(t[7]||0),Number(t[8]||0),Number(t[10]||0),t[12]?1e3*Number("0."+t[12]):0))
if(Q(n)){var r=null
return t[13]&&(r=("-"===t[15]?-1:1)*(60*Number(t[16]||0)+Number(t[18]||0))),{marker:n,isTimeUnspecified:!t[6],timeZoneOffset:r}}}return null}(e)
if(null===t)return null
var n=t.marker,r=null
return null!==t.timeZoneOffset&&(this.canComputeOffset?n=this.timestampToMarker(n.valueOf()-60*t.timeZoneOffset*1e3):r=t.timeZoneOffset),{marker:n,isTimeUnspecified:t.isTimeUnspecified,forcedTzo:r}},e.prototype.getYear=function(e){return this.calendarSystem.getMarkerYear(e)},e.prototype.getMonth=function(e){return this.calendarSystem.getMarkerMonth(e)},e.prototype.add=function(e,t){var n=this.calendarSystem.markerToArray(e)
return n[0]+=t.years,n[1]+=t.months,n[2]+=t.days,n[6]+=t.milliseconds,this.calendarSystem.arrayToMarker(n)},e.prototype.subtract=function(e,t){var n=this.calendarSystem.markerToArray(e)
return n[0]-=t.years,n[1]-=t.months,n[2]-=t.days,n[6]-=t.milliseconds,this.calendarSystem.arrayToMarker(n)},e.prototype.addYears=function(e,t){var n=this.calendarSystem.markerToArray(e)
return n[0]+=t,this.calendarSystem.arrayToMarker(n)},e.prototype.addMonths=function(e,t){var n=this.calendarSystem.markerToArray(e)
return n[1]+=t,this.calendarSystem.arrayToMarker(n)},e.prototype.diffWholeYears=function(e,t){var n=this.calendarSystem
return K(e)===K(t)&&n.getMarkerDay(e)===n.getMarkerDay(t)&&n.getMarkerMonth(e)===n.getMarkerMonth(t)?n.getMarkerYear(t)-n.getMarkerYear(e):null},e.prototype.diffWholeMonths=function(e,t){var n=this.calendarSystem
return K(e)===K(t)&&n.getMarkerDay(e)===n.getMarkerDay(t)?n.getMarkerMonth(t)-n.getMarkerMonth(e)+12*(n.getMarkerYear(t)-n.getMarkerYear(e)):null},e.prototype.greatestWholeUnit=function(e,t){var n=this.diffWholeYears(e,t)
return null!==n?{unit:"year",value:n}:null!==(n=this.diffWholeMonths(e,t))?{unit:"month",value:n}:null!==(n=function(e,t){var n=Z(e,t)
return null!==n&&n%7==0?n/7:null}(e,t))?{unit:"week",value:n}:null!==(n=Z(e,t))?{unit:"day",value:n}:ge(n=function(e,t){return(t.valueOf()-e.valueOf())/36e5}(e,t))?{unit:"hour",value:n}:ge(n=function(e,t){return(t.valueOf()-e.valueOf())/6e4}(e,t))?{unit:"minute",value:n}:ge(n=function(e,t){return(t.valueOf()-e.valueOf())/1e3}(e,t))?{unit:"second",value:n}:{unit:"millisecond",value:t.valueOf()-e.valueOf()}},e.prototype.countDurationsBetween=function(e,t,n){var r
return n.years&&null!==(r=this.diffWholeYears(e,t))?r/(oe(n)/365):n.months&&null!==(r=this.diffWholeMonths(e,t))?r/function(e){return oe(e)/30}(n):n.days&&null!==(r=Z(e,t))?r/oe(n):(t.valueOf()-e.valueOf())/ae(n)},e.prototype.startOf=function(e,t){return"year"===t?this.startOfYear(e):"month"===t?this.startOfMonth(e):"week"===t?this.startOfWeek(e):"day"===t?B(e):"hour"===t?function(e){return J([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours()])}(e):"minute"===t?function(e){return J([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes()])}(e):"second"===t?function(e){return J([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()])}(e):void 0},e.prototype.startOfYear=function(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)])},e.prototype.startOfMonth=function(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e),this.calendarSystem.getMarkerMonth(e)])},e.prototype.startOfWeek=function(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e),this.calendarSystem.getMarkerMonth(e),e.getUTCDate()-(e.getUTCDay()-this.weekDow+7)%7])},e.prototype.computeWeekNumber=function(e){return this.weekNumberFunc?this.weekNumberFunc(this.toDate(e)):function(e,t,n){var r=e.getUTCFullYear(),i=W(e,r,t,n)
if(i<1)return W(e,r-1,t,n)
var o=W(e,r+1,t,n)
return o>=1?Math.min(i,o):i}(e,this.weekDow,this.weekDoy)},e.prototype.format=function(e,t,n){return void 0===n&&(n={}),t.format({marker:e,timeZoneOffset:null!=n.forcedTzo?n.forcedTzo:this.offsetForMarker(e)},this)},e.prototype.formatRange=function(e,t,n,r){return void 0===r&&(r={}),r.isEndExclusive&&(t=F(t,-1)),n.formatRange({marker:e,timeZoneOffset:null!=r.forcedStartTzo?r.forcedStartTzo:this.offsetForMarker(e)},{marker:t,timeZoneOffset:null!=r.forcedEndTzo?r.forcedEndTzo:this.offsetForMarker(t)},this)},e.prototype.formatIso=function(e,t){void 0===t&&(t={})
var n=null
return t.omitTimeZoneOffset||(n=null!=t.forcedTzo?t.forcedTzo:this.offsetForMarker(e)),function(e,t,n){void 0===n&&(n=!1)
var r=e.toISOString()
return r=r.replace(".000",""),n&&(r=r.replace("T00:00:00Z","")),r.length>10&&(null==t?r=r.replace("Z",""):0!==t&&(r=r.replace("Z",ct(t,!0)))),r}(e,n,t.omitTime)},e.prototype.timestampToMarker=function(e){return"local"===this.timeZone?J(q(new Date(e))):"UTC"!==this.timeZone&&this.namedTimeZoneImpl?J(this.namedTimeZoneImpl.timestampToArray(e)):new Date(e)},e.prototype.offsetForMarker=function(e){return"local"===this.timeZone?-G(X(e)).getTimezoneOffset():"UTC"===this.timeZone?0:this.namedTimeZoneImpl?this.namedTimeZoneImpl.offsetForArray(X(e)):null},e.prototype.toDate=function(e,t){return"local"===this.timeZone?G(X(e)):"UTC"===this.timeZone?new Date(e.valueOf()):this.namedTimeZoneImpl?new Date(e.valueOf()-1e3*this.namedTimeZoneImpl.offsetForArray(X(e))*60):new Date(e.valueOf()-(t||0))},e}(),Fn={id:String,allDayDefault:Boolean,eventDataTransform:Function,success:Function,failure:Function},jn=0
function Zn(e,t){return!t.pluginSystem.hooks.eventSourceDefs[e.sourceDefId].ignoreRange}function Bn(e,t){for(var n=t.pluginSystem.hooks.eventSourceDefs,r=n.length-1;r>=0;r--){var i=n[r].parseMeta(e)
if(i){var o=Wn("object"==typeof e?e:{},i,r,t)
return o._raw=e,o}}return null}function Wn(e,t,n,r){var i={},o=Se(e,Fn,{},i),a={},s=zt(i,r,a)
return o.isFetching=!1,o.latestFetchId="",o.fetchRange=null,o.publicId=String(e.id||""),o.sourceId=String(jn++),o.sourceDefId=n,o.meta=t,o.ui=s,o.extendedProps=a,o}function Yn(e,t,n,r){switch(t.type){case"ADD_EVENT_SOURCES":return function(e,t,n,r){for(var i={},o=0,a=t;o<a.length;o++){var s=a[o]
i[s.sourceId]=s}n&&(i=Gn(i,n,r))
return Me({},e,i)}(e,t.sources,n?n.activeRange:null,r)
case"REMOVE_EVENT_SOURCE":return i=e,o=t.sourceId,Oe(i,(function(e){return e.sourceId!==o}))
case"PREV":case"NEXT":case"SET_DATE":case"SET_VIEW_TYPE":return n?Gn(e,n.activeRange,r):e
case"FETCH_EVENT_SOURCES":case"CHANGE_TIMEZONE":return Xn(e,t.sourceIds?Pe(t.sourceIds):function(e,t){return Oe(e,(function(e){return Zn(e,t)}))}(e,r),n?n.activeRange:null,r)
case"RECEIVE_EVENTS":case"RECEIVE_EVENT_ERROR":return function(e,t,n,r){var i,o=e[t]
if(o&&n===o.latestFetchId)return Me({},e,((i={})[t]=Me({},o,{isFetching:!1,fetchRange:r}),i))
return e}(e,t.sourceId,t.fetchId,t.fetchRange)
case"REMOVE_ALL_EVENT_SOURCES":return{}
default:return e}var i,o}var qn=0
function Gn(e,t,n){return Xn(e,Oe(e,(function(e){return function(e,t,n){return Zn(e,n)?!n.opt("lazyFetching")||!e.fetchRange||t.start<e.fetchRange.start||t.end>e.fetchRange.end:!e.latestFetchId}(e,t,n)})),t,n)}function Xn(e,t,n,r){var i={}
for(var o in e){var a=e[o]
t[o]?i[o]=Jn(a,n,r):i[o]=a}return i}function Jn(e,t,n){var r=n.pluginSystem.hooks.eventSourceDefs[e.sourceDefId],i=String(qn++)
return r.fetch({eventSource:e,calendar:n,range:t},(function(r){var o,a,s=r.rawEvents,l=n.opt("eventSourceSuccess")
e.success&&(a=e.success(s,r.xhr)),l&&(o=l(s,r.xhr)),s=a||o||s,n.dispatch({type:"RECEIVE_EVENTS",sourceId:e.sourceId,fetchId:i,fetchRange:t,rawEvents:s})}),(function(r){var o=n.opt("eventSourceFailure")
console.warn(r.message,r),e.failure&&e.failure(r),o&&o(r),n.dispatch({type:"RECEIVE_EVENT_ERROR",sourceId:e.sourceId,fetchId:i,fetchRange:t,error:r})})),Me({},e,{isFetching:!0,latestFetchId:i})}var $n=function(){function e(e,t){this.viewSpec=e,this.options=e.options,this.dateEnv=t.dateEnv,this.calendar=t,this.initHiddenDays()}return e.prototype.buildPrev=function(e,t){var n=this.dateEnv,r=n.subtract(n.startOf(t,e.currentRangeUnit),e.dateIncrement)
return this.build(r,-1)},e.prototype.buildNext=function(e,t){var n=this.dateEnv,r=n.add(n.startOf(t,e.currentRangeUnit),e.dateIncrement)
return this.build(r,1)},e.prototype.build=function(e,t,n){var r
void 0===n&&(n=!1)
var i,o,a,s,l,u,c,d,h
return r=this.buildValidRange(),r=this.trimHiddenDays(r),n&&(d=e,e=null!=(h=r).start&&d<h.start?h.start:null!=h.end&&d>=h.end?new Date(h.end.valueOf()-1):d),a=this.buildCurrentRangeInfo(e,t),s=/^(year|month|week|day)$/.test(a.unit),l=this.buildRenderRange(this.trimHiddenDays(a.range),a.unit,s),u=l=this.trimHiddenDays(l),this.options.showNonCurrentDates||(u=We(u,a.range)),i=te(this.options.minTime),o=te(this.options.maxTime),u=We(u=this.adjustActiveRange(u,i,o),r),c=qe(a.range,r),{validRange:r,currentRange:a.range,currentRangeUnit:a.unit,isRangeAllDay:s,activeRange:u,renderRange:l,minTime:i,maxTime:o,isValid:c,dateIncrement:this.buildDateIncrement(a.duration)}},e.prototype.buildValidRange=function(){return this.getRangeOption("validRange",this.calendar.getNow())||{start:null,end:null}},e.prototype.buildCurrentRangeInfo=function(e,t){var n,r=this.viewSpec,i=this.dateEnv,o=null,a=null,s=null
return r.duration?(o=r.duration,a=r.durationUnit,s=this.buildRangeFromDuration(e,t,o,a)):(n=this.options.dayCount)?(a="day",s=this.buildRangeFromDayCount(e,t,n)):(s=this.buildCustomVisibleRange(e))?a=i.greatestWholeUnit(s.start,s.end).unit:(a=se(o=this.getFallbackDuration()).unit,s=this.buildRangeFromDuration(e,t,o,a)),{duration:o,unit:a,range:s}},e.prototype.getFallbackDuration=function(){return te({day:1})},e.prototype.adjustActiveRange=function(e,t,n){var r=this.dateEnv,i=e.start,o=e.end
return this.viewSpec.class.prototype.usesMinMaxTime&&(oe(t)<0&&(i=B(i),i=r.add(i,t)),oe(n)>1&&(o=U(o=B(o),-1),o=r.add(o,n))),{start:i,end:o}},e.prototype.buildRangeFromDuration=function(e,t,n,r){var i,o,a,s,l,u=this.dateEnv,c=this.options.dateAlignment
function d(){a=u.startOf(e,c),s=u.add(a,n),l={start:a,end:s}}return c||((i=this.options.dateIncrement)?(o=te(i),c=ae(o)<ae(n)?se(o,!re(i)).unit:r):c=r),oe(n)<=1&&this.isHiddenDay(a)&&(a=B(a=this.skipHiddenDays(a,t))),d(),this.trimHiddenDays(l)||(e=this.skipHiddenDays(e,t),d()),l},e.prototype.buildRangeFromDayCount=function(e,t,n){var r,i=this.dateEnv,o=this.options.dateAlignment,a=0,s=e
o&&(s=i.startOf(s,o)),s=B(s),r=s=this.skipHiddenDays(s,t)
do{r=U(r,1),this.isHiddenDay(r)||a++}while(a<n)
return{start:s,end:r}},e.prototype.buildCustomVisibleRange=function(e){var t=this.dateEnv,n=this.getRangeOption("visibleRange",t.toDate(e))
return!n||null!=n.start&&null!=n.end?n:null},e.prototype.buildRenderRange=function(e,t,n){return e},e.prototype.buildDateIncrement=function(e){var t,n=this.options.dateIncrement
return n?te(n):(t=this.options.dateAlignment)?te(1,t):e||te({days:1})},e.prototype.getRangeOption=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
var r=this.options[e]
return"function"==typeof r&&(r=r.apply(null,t)),r&&(r=je(r,this.dateEnv)),r&&(r=be(r)),r},e.prototype.initHiddenDays=function(){var e,t=this.options.hiddenDays||[],n=[],r=0
for(!1===this.options.weekends&&t.push(0,6),e=0;e<7;e++)(n[e]=-1!==t.indexOf(e))||r++
if(!r)throw new Error("invalid hiddenDays")
this.isHiddenDayHash=n},e.prototype.trimHiddenDays=function(e){var t=e.start,n=e.end
return t&&(t=this.skipHiddenDays(t)),n&&(n=this.skipHiddenDays(n,-1,!0)),null==t||null==n||t<n?{start:t,end:n}:null},e.prototype.isHiddenDay=function(e){return e instanceof Date&&(e=e.getUTCDay()),this.isHiddenDayHash[e]},e.prototype.skipHiddenDays=function(e,t,n){for(void 0===t&&(t=1),void 0===n&&(n=!1);this.isHiddenDayHash[(e.getUTCDay()+(n?t:0)+7)%7];)e=U(e,t)
return e},e}()
function Qn(e,t,n){for(var r=function(e,t){switch(t.type){case"SET_VIEW_TYPE":return t.viewType
default:return e}}(e.viewType,t),i=function(e,t,n,r,i){var o
switch(t.type){case"PREV":o=i.dateProfileGenerators[r].buildPrev(e,n)
break
case"NEXT":o=i.dateProfileGenerators[r].buildNext(e,n)
break
case"SET_DATE":e.activeRange&&Xe(e.currentRange,t.dateMarker)||(o=i.dateProfileGenerators[r].build(t.dateMarker,void 0,!0))
break
case"SET_VIEW_TYPE":var a=i.dateProfileGenerators[r]
if(!a)throw new Error(r?'The FullCalendar view "'+r+'" does not exist. Make sure your plugins are loaded correctly.':"No available FullCalendar view plugins.")
o=a.build(t.dateMarker||n,void 0,!0)}return!o||!o.isValid||e&&(s=e,l=o,Ye(s.validRange,l.validRange)&&Ye(s.activeRange,l.activeRange)&&Ye(s.renderRange,l.renderRange)&&ie(s.minTime,l.minTime)&&ie(s.maxTime,l.maxTime))?e:o
var s,l}(e.dateProfile,t,e.currentDate,r,n),o=Yn(e.eventSources,t,i,n),a=Me({},e,{viewType:r,dateProfile:i,currentDate:Kn(e.currentDate,t,i),eventSources:o,eventStore:Tt(e.eventStore,t,o,i,n),dateSelection:er(e.dateSelection,t,n),eventSelection:tr(e.eventSelection,t),eventDrag:nr(e.eventDrag,t,o,n),eventResize:rr(e.eventResize,t,o,n),eventSourceLoadingLevel:ir(o),loadingLevel:ir(o)}),s=0,l=n.pluginSystem.hooks.reducers;s<l.length;s++){a=(0,l[s])(a,t,n)}return a}function Kn(e,t,n){switch(t.type){case"PREV":case"NEXT":return Xe(n.currentRange,e)?e:n.currentRange.start
case"SET_DATE":case"SET_VIEW_TYPE":var r=t.dateMarker||e
return n.activeRange&&!Xe(n.activeRange,r)?n.currentRange.start:r
default:return e}}function er(e,t,n){switch(t.type){case"SELECT_DATES":return t.selection
case"UNSELECT_DATES":return null
default:return e}}function tr(e,t){switch(t.type){case"SELECT_EVENT":return t.eventInstanceId
case"UNSELECT_EVENT":return""
default:return e}}function nr(e,t,n,r){switch(t.type){case"SET_EVENT_DRAG":var i=t.state
return{affectedEvents:i.affectedEvents,mutatedEvents:i.mutatedEvents,isEvent:i.isEvent,origSeg:i.origSeg}
case"UNSET_EVENT_DRAG":return null
default:return e}}function rr(e,t,n,r){switch(t.type){case"SET_EVENT_RESIZE":var i=t.state
return{affectedEvents:i.affectedEvents,mutatedEvents:i.mutatedEvents,isEvent:i.isEvent,origSeg:i.origSeg}
case"UNSET_EVENT_RESIZE":return null
default:return e}}function ir(e){var t=0
for(var n in e)e[n].isFetching&&t++
return t}var or={start:null,end:null,allDay:Boolean}
function ar(e,t,n){var r=function(e,t){var n={},r=Se(e,or,{},n),i=r.start?t.createMarkerMeta(r.start):null,o=r.end?t.createMarkerMeta(r.end):null,a=r.allDay
null==a&&(a=i&&i.isTimeUnspecified&&(!o||o.isTimeUnspecified))
return n.range={start:i?i.marker:null,end:o?o.marker:null},n.allDay=a,n}(e,t),i=r.range
if(!i.start)return null
if(!i.end){if(null==n)return null
i.end=t.add(i.start,n)}return r}function sr(e,t,n){var r=qt({editable:!1},"",e.allDay,!0,n)
return{def:r,ui:St(r,t),instance:Gt(r.defId,e.range),range:e.range,isStart:!0,isEnd:!0}}function lr(e,t,n,r){if(t[e])return t[e]
var i=function(e,t,n,r){var i=n[e],o=r[e],a=function(e){return i&&null!==i[e]?i[e]:o&&null!==o[e]?o[e]:null},s=a("class"),l=a("superType")
!l&&s&&(l=ur(s,r)||ur(s,n))
var u=null
if(l){if(l===e)throw new Error("Can't have a custom view type that references itself")
u=lr(l,t,n,r)}!s&&u&&(s=u.class)
if(!s)return null
return{type:e,class:s,defaults:Me({},u?u.defaults:{},i?i.options:{}),overrides:Me({},u?u.overrides:{},o?o.options:{})}}(e,t,n,r)
return i&&(t[e]=i),i}function ur(e,t){var n=Object.getPrototypeOf(e.prototype)
for(var r in t){var i=t[r]
if(i.class&&i.class.prototype===n)return r}return""}function cr(e){return Ne(e,hr)}var dr={type:String,class:null}
function hr(e){"function"==typeof e&&(e={class:e})
var t={},n=Se(e,dr,{},t)
return{superType:n.type,class:n.class,options:t}}function fr(e,t){var n=cr(e),r=cr(t.overrides.views)
return Ne(function(e,t){var n,r={}
for(n in e)lr(n,r,e,t)
for(n in t)lr(n,r,e,t)
return r}(n,r),(function(e){return function(e,t,n){var r=e.overrides.duration||e.defaults.duration||n.dynamicOverrides.duration||n.overrides.duration,i=null,o="",a="",s={}
if(r&&(i=te(r))){var l=se(i,!re(r))
o=l.unit,1===l.value&&(a=o,s=t[o]?t[o].options:{})}var u=function(t){var n=t.buttonText||{},r=e.defaults.buttonTextKey
return null!=r&&null!=n[r]?n[r]:null!=n[e.type]?n[e.type]:null!=n[a]?n[a]:void 0}
return{type:e.type,class:e.class,duration:i,durationUnit:o,singleUnit:a,options:Me({},kn,e.defaults,n.dirDefaults,n.localeDefaults,n.overrides,s,e.overrides,n.dynamicOverrides),buttonTextOverride:u(n.dynamicOverrides)||u(n.overrides)||e.overrides.buttonText,buttonTextDefault:u(n.localeDefaults)||u(n.dirDefaults)||e.defaults.buttonText||u(kn)||e.type}}(e,r,t)}))}var pr=function(e){function t(t,n){var r=e.call(this,t)||this
return r._renderLayout=$t(r.renderLayout,r.unrenderLayout),r._updateTitle=$t(r.updateTitle,null,[r._renderLayout]),r._updateActiveButton=$t(r.updateActiveButton,null,[r._renderLayout]),r._updateToday=$t(r.updateToday,null,[r._renderLayout]),r._updatePrev=$t(r.updatePrev,null,[r._renderLayout]),r._updateNext=$t(r.updateNext,null,[r._renderLayout]),r.el=o("div",{className:"fc-toolbar "+n}),r}return Ce(t,e),t.prototype.destroy=function(){e.prototype.destroy.call(this),this._renderLayout.unrender(),f(this.el)},t.prototype.render=function(e){this._renderLayout(e.layout),this._updateTitle(e.title),this._updateActiveButton(e.activeButton),this._updateToday(e.isTodayEnabled),this._updatePrev(e.isPrevEnabled),this._updateNext(e.isNextEnabled)},t.prototype.renderLayout=function(e){var t=this.el
this.viewsWithButtons=[],u(t,this.renderSection("left",e.left)),u(t,this.renderSection("center",e.center)),u(t,this.renderSection("right",e.right))},t.prototype.unrenderLayout=function(){this.el.innerHTML=""},t.prototype.renderSection=function(e,t){var n=this,r=this.theme,i=this.calendar,s=i.optionsManager,l=i.viewSpecs,c=o("div",{className:"fc-"+e}),d=s.computed.customButtons||{},h=s.overrides.buttonText||{},f=s.computed.buttonText||{}
return t&&t.split(" ").forEach((function(e,t){var o,s=[],p=!0
if(e.split(",").forEach((function(e,t){var o,u,c,v,g,m,y,E,S
"title"===e?(s.push(a("<h2>&nbsp;</h2>")),p=!1):((o=d[e])?(c=function(e){o.click&&o.click.call(E,e)},(v=r.getCustomButtonIconClass(o))||(v=r.getIconClass(e))||(g=o.text)):(u=l[e])?(n.viewsWithButtons.push(e),c=function(){i.changeView(e)},(g=u.buttonTextOverride)||(v=r.getIconClass(e))||(g=u.buttonTextDefault)):i[e]&&(c=function(){i[e]()},(g=h[e])||(v=r.getIconClass(e))||(g=f[e])),c&&(y=["fc-"+e+"-button",r.getClass("button")],g?(m=Lt(g),S=""):v&&(m="<span class='"+v+"'></span>",S=' aria-label="'+e+'"'),(E=a('<button type="button" class="'+y.join(" ")+'"'+S+">"+m+"</button>")).addEventListener("click",c),s.push(E)))})),s.length>1){o=document.createElement("div")
var v=r.getClass("buttonGroup")
p&&v&&o.classList.add(v),u(o,s),c.appendChild(o)}else u(c,s)})),c},t.prototype.updateToday=function(e){this.toggleButtonEnabled("today",e)},t.prototype.updatePrev=function(e){this.toggleButtonEnabled("prev",e)},t.prototype.updateNext=function(e){this.toggleButtonEnabled("next",e)},t.prototype.updateTitle=function(e){y(this.el,"h2").forEach((function(t){t.innerText=e}))},t.prototype.updateActiveButton=function(e){var t=this.theme.getClass("buttonActive")
y(this.el,"button").forEach((function(n){e&&n.classList.contains("fc-"+e+"-button")?n.classList.add(t):n.classList.remove(t)}))},t.prototype.toggleButtonEnabled=function(e,t){y(this.el,".fc-"+e+"-button").forEach((function(e){e.disabled=!t}))},t}(fn),vr=function(e){function t(t,n){var r=e.call(this,t)||this
r._renderToolbars=$t(r.renderToolbars),r.buildViewPropTransformers=$e(mr),r.el=n,c(n,r.contentEl=o("div",{className:"fc-view-container"}))
for(var i=r.calendar,a=0,s=i.pluginSystem.hooks.viewContainerModifiers;a<s.length;a++){(0,s[a])(r.contentEl,i)}return r.toggleElClassNames(!0),r.computeTitle=$e(gr),r.parseBusinessHours=$e((function(e){return Jt(e,r.calendar)})),r}return Ce(t,e),t.prototype.destroy=function(){this.header&&this.header.destroy(),this.footer&&this.footer.destroy(),this.view&&this.view.destroy(),f(this.contentEl),this.toggleElClassNames(!1),e.prototype.destroy.call(this)},t.prototype.toggleElClassNames=function(e){var t=this.el.classList,n="fc-"+this.opt("dir"),r=this.theme.getClass("widget")
e?(t.add("fc"),t.add(n),t.add(r)):(t.remove("fc"),t.remove(n),t.remove(r))},t.prototype.render=function(e){this.freezeHeight()
var t=this.computeTitle(e.dateProfile,e.viewSpec.options)
this._renderToolbars(e.viewSpec,e.dateProfile,e.currentDate,e.dateProfileGenerator,t),this.renderView(e,t),this.updateSize(),this.thawHeight()},t.prototype.renderToolbars=function(e,t,n,r,i){var o=this.opt("header"),a=this.opt("footer"),s=this.calendar.getNow(),l=r.build(s),d=r.buildPrev(t,n),h=r.buildNext(t,n),f={title:i,activeButton:e.type,isTodayEnabled:l.isValid&&!Xe(t.currentRange,s),isPrevEnabled:d.isValid,isNextEnabled:h.isValid}
o?(this.header||(this.header=new pr(this.context,"fc-header-toolbar"),c(this.el,this.header.el)),this.header.receiveProps(Me({layout:o},f))):this.header&&(this.header.destroy(),this.header=null),a?(this.footer||(this.footer=new pr(this.context,"fc-footer-toolbar"),u(this.el,this.footer.el)),this.footer.receiveProps(Me({layout:a},f))):this.footer&&(this.footer.destroy(),this.footer=null)},t.prototype.renderView=function(e,t){var n=this.view,r=e.viewSpec,i=e.dateProfileGenerator
n&&n.viewSpec===r?n.addScroll(n.queryScroll()):(n&&n.destroy(),n=this.view=new r.class({calendar:this.calendar,view:null,dateEnv:this.dateEnv,theme:this.theme,options:r.options},r,i,this.contentEl)),n.title=t
for(var o={dateProfile:e.dateProfile,businessHours:this.parseBusinessHours(r.options.businessHours),eventStore:e.eventStore,eventUiBases:e.eventUiBases,dateSelection:e.dateSelection,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize},a=0,s=this.buildViewPropTransformers(this.calendar.pluginSystem.hooks.viewPropsTransformers);a<s.length;a++){var l=s[a]
Me(o,l.transform(o,r,e,n))}n.receiveProps(o)},t.prototype.updateSize=function(e){void 0===e&&(e=!1)
var t=this.view
e&&t.addScroll(t.queryScroll()),(e||null==this.isHeightAuto)&&this.computeHeightVars(),t.updateSize(e,this.viewHeight,this.isHeightAuto),t.updateNowIndicator(),t.popScroll(e)},t.prototype.computeHeightVars=function(){var e=this.calendar,t=e.opt("height"),n=e.opt("contentHeight")
if(this.isHeightAuto="auto"===t||"auto"===n,"number"==typeof n)this.viewHeight=n
else if("function"==typeof n)this.viewHeight=n()
else if("number"==typeof t)this.viewHeight=t-this.queryToolbarsHeight()
else if("function"==typeof t)this.viewHeight=t()-this.queryToolbarsHeight()
else if("parent"===t){var r=this.el.parentNode
this.viewHeight=r.getBoundingClientRect().height-this.queryToolbarsHeight()}else this.viewHeight=Math.round(this.contentEl.getBoundingClientRect().width/Math.max(e.opt("aspectRatio"),.5))},t.prototype.queryToolbarsHeight=function(){var e=0
return this.header&&(e+=N(this.header.el)),this.footer&&(e+=N(this.footer.el)),e},t.prototype.freezeHeight=function(){w(this.el,{height:this.el.getBoundingClientRect().height,overflow:"hidden"})},t.prototype.thawHeight=function(){w(this.el,{height:"",overflow:""})},t}(fn)
function gr(e,t){var n
return n=/^(year|month)$/.test(e.currentRangeUnit)?e.currentRange:e.activeRange,this.dateEnv.formatRange(n.start,n.end,ut(t.titleFormat||function(e){var t=e.currentRangeUnit
if("year"===t)return{year:"numeric"}
if("month"===t)return{year:"numeric",month:"long"}
var n=Z(e.currentRange.start,e.currentRange.end)
return null!==n&&n>1?{year:"numeric",month:"short",day:"numeric"}:{year:"numeric",month:"long",day:"numeric"}}(e),t.titleRangeSeparator),{isEndExclusive:e.isRangeAllDay})}function mr(e){return e.map((function(e){return new e}))}var yr=function(){function e(e){this.component=e.component}return e.prototype.destroy=function(){},e}()
function Er(e){var t
return(t={})[e.component.uid]=e,t}var Sr={},wr=function(e){function t(t){var n=e.call(this,t)||this
n.handleSegClick=function(e,t){var r=n.component,i=yt(t)
if(i&&r.isValidSegDownEl(e.target)){var o=g(e.target,".fc-has-url"),a=o?o.querySelector("a[href]").href:""
r.publiclyTrigger("eventClick",[{el:t,event:new pt(r.calendar,i.eventRange.def,i.eventRange.instance),jsEvent:e,view:r.view}]),a&&!e.defaultPrevented&&(window.location.href=a)}}
var r=t.component
return n.destroy=x(r.el,"click",r.fgSegSelector+","+r.bgSegSelector,n.handleSegClick),n}return Ce(t,e),t}(yr),br=function(e){function t(t){var n=e.call(this,t)||this
n.handleEventElRemove=function(e){e===n.currentSegEl&&n.handleSegLeave(null,n.currentSegEl)},n.handleSegEnter=function(e,t){yt(t)&&(t.classList.add("fc-allow-mouse-resize"),n.currentSegEl=t,n.triggerEvent("eventMouseEnter",e,t))},n.handleSegLeave=function(e,t){n.currentSegEl&&(t.classList.remove("fc-allow-mouse-resize"),n.currentSegEl=null,n.triggerEvent("eventMouseLeave",e,t))}
var r,i,o,a,s,l=t.component
return n.removeHoverListeners=(r=l.el,i=l.fgSegSelector+","+l.bgSegSelector,o=n.handleSegEnter,a=n.handleSegLeave,x(r,"mouseover",i,(function(e,t){if(t!==s){s=t,o(e,t)
var n=function(e){s=null,a(e,t),t.removeEventListener("mouseleave",n)}
t.addEventListener("mouseleave",n)}}))),l.calendar.on("eventElRemove",n.handleEventElRemove),n}return Ce(t,e),t.prototype.destroy=function(){this.removeHoverListeners(),this.component.calendar.off("eventElRemove",this.handleEventElRemove)},t.prototype.triggerEvent=function(e,t,n){var r=this.component,i=yt(n)
t&&!r.isValidSegDownEl(t.target)||r.publiclyTrigger(e,[{el:n,event:new pt(this.component.calendar,i.eventRange.def,i.eventRange.instance),jsEvent:t,view:r.view}])},t}(yr),Dr=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Ce(t,e),t}(dn)
Dr.prototype.classes={widget:"fc-unthemed",widgetHeader:"fc-widget-header",widgetContent:"fc-widget-content",buttonGroup:"fc-button-group",button:"fc-button fc-button-primary",buttonActive:"fc-button-active",popoverHeader:"fc-widget-header",popoverContent:"fc-widget-content",headerRow:"fc-widget-header",dayRow:"fc-widget-content",listView:"fc-widget-content"},Dr.prototype.baseIconClass="fc-icon",Dr.prototype.iconClasses={close:"fc-icon-x",prev:"fc-icon-chevron-left",next:"fc-icon-chevron-right",prevYear:"fc-icon-chevrons-left",nextYear:"fc-icon-chevrons-right"},Dr.prototype.iconOverrideOption="buttonIcons",Dr.prototype.iconOverrideCustomButtonOption="icon",Dr.prototype.iconOverridePrefix="fc-icon-"
var Tr=function(){function e(e,t){var n,r,i,o=this
this.parseRawLocales=$e(Pn),this.buildLocale=$e(_n),this.buildDateEnv=$e(Cr),this.buildTheme=$e(Mr),this.buildEventUiSingleBase=$e(this._buildEventUiSingleBase),this.buildSelectionConfig=$e(this._buildSelectionConfig),this.buildEventUiBySource=(n=Ir,r=Le,i=null,function(){var e=n.apply(this,arguments)
return(null===i||i!==e&&!r(i,e))&&(i=e),i}),this.buildEventUiBases=$e(Rr),this.interactionsStore={},this.actionQueue=[],this.isReducing=!1,this.needsRerender=!1,this.needsFullRerender=!1,this.isRendering=!1,this.renderingPauseDepth=0,this.buildDelayedRerender=$e(kr),this.afterSizingTriggers={},this.isViewUpdated=!1,this.isDatesUpdated=!1,this.isEventsUpdated=!1,this.el=e,this.optionsManager=new Hn(t||{}),this.pluginSystem=new mn,this.addPluginInputs(this.optionsManager.computed.plugins||[]),this.handleOptions(this.optionsManager.computed),this.publiclyTrigger("_init"),this.hydrate(),this.calendarInteractions=this.pluginSystem.hooks.calendarInteractions.map((function(e){return new e(o)}))}return e.prototype.addPluginInputs=function(e){for(var t=function(e){for(var t=[],n=0,r=e;n<r.length;n++){var i=r[n]
if("string"==typeof i){var o="FullCalendar"+fe(i)
window[o]?t.push(window[o].default):console.warn("Plugin file not loaded for "+i)}else t.push(i)}return On.concat(t)}(e),n=0,r=t;n<r.length;n++){var i=r[n]
this.pluginSystem.add(i)}},Object.defineProperty(e.prototype,"view",{get:function(){return this.component?this.component.view:null},enumerable:!0,configurable:!0}),e.prototype.render=function(){this.component?this.requestRerender(!0):(this.renderableEventStore={defs:{},instances:{}},this.bindHandlers(),this.executeRender())},e.prototype.destroy=function(){if(this.component){this.unbindHandlers(),this.component.destroy(),this.component=null
for(var e=0,t=this.calendarInteractions;e<t.length;e++){t[e].destroy()}this.publiclyTrigger("_destroyed")}},e.prototype.bindHandlers=function(){var e=this
this.removeNavLinkListener=x(this.el,"click","a[data-goto]",(function(t,n){var r=n.getAttribute("data-goto")
r=r?JSON.parse(r):{}
var i=e.dateEnv,o=i.createMarker(r.date),a=r.type,s=e.viewOpt("navLink"+fe(a)+"Click")
"function"==typeof s?s(i.toDate(o),t):("string"==typeof s&&(a=s),e.zoomTo(o,a))})),this.opt("handleWindowResize")&&window.addEventListener("resize",this.windowResizeProxy=Ee(this.windowResize.bind(this),this.opt("windowResizeDelay")))},e.prototype.unbindHandlers=function(){this.removeNavLinkListener(),this.windowResizeProxy&&(window.removeEventListener("resize",this.windowResizeProxy),this.windowResizeProxy=null)},e.prototype.hydrate=function(){var e=this
this.state=this.buildInitialState()
var t=this.opt("eventSources")||[],n=this.opt("events"),r=[]
n&&t.unshift(n)
for(var i=0,o=t;i<o.length;i++){var a=Bn(o[i],this)
a&&r.push(a)}this.batchRendering((function(){e.dispatch({type:"INIT"}),e.dispatch({type:"ADD_EVENT_SOURCES",sources:r}),e.dispatch({type:"SET_VIEW_TYPE",viewType:e.opt("defaultView")||e.pluginSystem.hooks.defaultView})}))},e.prototype.buildInitialState=function(){return{viewType:null,loadingLevel:0,eventSourceLoadingLevel:0,currentDate:this.getInitialDate(),dateProfile:null,eventSources:{},eventStore:{defs:{},instances:{}},dateSelection:null,eventSelection:"",eventDrag:null,eventResize:null}},e.prototype.dispatch=function(e){if(this.actionQueue.push(e),!this.isReducing){this.isReducing=!0
for(var t=this.state;this.actionQueue.length;)this.state=this.reduce(this.state,this.actionQueue.shift(),this)
var n=this.state
this.isReducing=!1,!t.loadingLevel&&n.loadingLevel?this.publiclyTrigger("loading",[!0]):t.loadingLevel&&!n.loadingLevel&&this.publiclyTrigger("loading",[!1])
var r=this.component&&this.component.view;(t.eventStore!==n.eventStore||this.needsFullRerender)&&t.eventStore&&(this.isEventsUpdated=!0),(t.dateProfile!==n.dateProfile||this.needsFullRerender)&&(t.dateProfile&&r&&this.publiclyTrigger("datesDestroy",[{view:r,el:r.el}]),this.isDatesUpdated=!0),(t.viewType!==n.viewType||this.needsFullRerender)&&(t.viewType&&r&&this.publiclyTrigger("viewSkeletonDestroy",[{view:r,el:r.el}]),this.isViewUpdated=!0),this.requestRerender()}},e.prototype.reduce=function(e,t,n){return Qn(e,t,n)},e.prototype.requestRerender=function(e){void 0===e&&(e=!1),this.needsRerender=!0,this.needsFullRerender=this.needsFullRerender||e,this.delayedRerender()},e.prototype.tryRerender=function(){this.component&&this.needsRerender&&!this.renderingPauseDepth&&!this.isRendering&&this.executeRender()},e.prototype.batchRendering=function(e){this.renderingPauseDepth++,e(),this.renderingPauseDepth--,this.needsRerender&&this.requestRerender()},e.prototype.executeRender=function(){var e=this.needsFullRerender
this.needsRerender=!1,this.needsFullRerender=!1,this.isRendering=!0,this.renderComponent(e),this.isRendering=!1,this.needsRerender&&this.delayedRerender()},e.prototype.renderComponent=function(e){var t=this.state,n=this.component,r=t.viewType,i=this.viewSpecs[r],o=e&&n?n.view.queryScroll():null
if(!i)throw new Error('View type "'+r+'" is not valid')
var a=this.renderableEventStore=t.eventSourceLoadingLevel&&!this.opt("progressiveEventRendering")?this.renderableEventStore:t.eventStore,s=this.buildEventUiSingleBase(i.options),l=this.buildEventUiBySource(t.eventSources),u=this.eventUiBases=this.buildEventUiBases(a.defs,s,l)
!e&&n||(n&&(n.freezeHeight(),n.destroy()),n=this.component=new vr({calendar:this,view:null,dateEnv:this.dateEnv,theme:this.theme,options:this.optionsManager.computed},this.el),this.isViewUpdated=!0,this.isDatesUpdated=!0,this.isEventsUpdated=!0),n.receiveProps(Me({},t,{viewSpec:i,dateProfile:t.dateProfile,dateProfileGenerator:this.dateProfileGenerators[r],eventStore:a,eventUiBases:u,dateSelection:t.dateSelection,eventSelection:t.eventSelection,eventDrag:t.eventDrag,eventResize:t.eventResize})),o&&n.view.applyScroll(o,!1),this.isViewUpdated&&(this.isViewUpdated=!1,this.publiclyTrigger("viewSkeletonRender",[{view:n.view,el:n.view.el}])),this.isDatesUpdated&&(this.isDatesUpdated=!1,this.publiclyTrigger("datesRender",[{view:n.view,el:n.view.el}])),this.isEventsUpdated&&(this.isEventsUpdated=!1),this.releaseAfterSizingTriggers()},e.prototype.setOption=function(e,t){var n
this.mutateOptions(((n={})[e]=t,n),[],!0)},e.prototype.getOption=function(e){return this.optionsManager.computed[e]},e.prototype.opt=function(e){return this.optionsManager.computed[e]},e.prototype.viewOpt=function(e){return this.viewOpts()[e]},e.prototype.viewOpts=function(){return this.viewSpecs[this.state.viewType].options},e.prototype.mutateOptions=function(e,t,n,r){var i=this,o=this.pluginSystem.hooks.optionChangeHandlers,a={},s={},l=this.dateEnv,u=!1,c=!1,d=Boolean(t.length)
for(var h in e)o[h]?s[h]=e[h]:a[h]=e[h]
for(var f in a)/^(height|contentHeight|aspectRatio)$/.test(f)?c=!0:/^(defaultDate|defaultView)$/.test(f)||(d=!0,"timeZone"===f&&(u=!0))
this.optionsManager.mutate(a,t,n),d&&(this.handleOptions(this.optionsManager.computed),this.needsFullRerender=!0),this.batchRendering((function(){if(d?(u&&i.dispatch({type:"CHANGE_TIMEZONE",oldDateEnv:l}),i.dispatch({type:"SET_VIEW_TYPE",viewType:i.state.viewType})):c&&i.updateSize(),r)for(var e in s)o[e](s[e],i,r)}))},e.prototype.handleOptions=function(e){var t=this,n=this.pluginSystem.hooks
this.defaultAllDayEventDuration=te(e.defaultAllDayEventDuration),this.defaultTimedEventDuration=te(e.defaultTimedEventDuration),this.delayedRerender=this.buildDelayedRerender(e.rerenderDelay),this.theme=this.buildTheme(e)
var r=this.parseRawLocales(e.locales)
this.availableRawLocales=r.map
var i=this.buildLocale(e.locale||r.defaultCode,r.map)
this.dateEnv=this.buildDateEnv(i,e.timeZone,n.namedTimeZonedImpl,e.firstDay,e.weekNumberCalculation,e.weekLabel,n.cmdFormatter),this.selectionConfig=this.buildSelectionConfig(e),this.viewSpecs=fr(n.views,this.optionsManager),this.dateProfileGenerators=Ne(this.viewSpecs,(function(e){return new e.class.prototype.dateProfileGeneratorClass(e,t)}))},e.prototype.getAvailableLocaleCodes=function(){return Object.keys(this.availableRawLocales)},e.prototype._buildSelectionConfig=function(e){return At("select",e,this)},e.prototype._buildEventUiSingleBase=function(e){return e.editable&&(e=Me({},e,{eventEditable:!0})),At("event",e,this)},e.prototype.hasPublicHandlers=function(e){return this.hasHandlers(e)||this.opt(e)},e.prototype.publiclyTrigger=function(e,t){var n=this.opt(e)
if(this.triggerWith(e,this,t),n)return n.apply(this,t)},e.prototype.publiclyTriggerAfterSizing=function(e,t){var n=this.afterSizingTriggers;(n[e]||(n[e]=[])).push(t)},e.prototype.releaseAfterSizingTriggers=function(){var e=this.afterSizingTriggers
for(var t in e)for(var n=0,r=e[t];n<r.length;n++){var i=r[n]
this.publiclyTrigger(t,i)}this.afterSizingTriggers={}},e.prototype.isValidViewType=function(e){return Boolean(this.viewSpecs[e])},e.prototype.changeView=function(e,t){var n=null
t&&(t.start&&t.end?(this.optionsManager.mutate({visibleRange:t},[]),this.handleOptions(this.optionsManager.computed)):n=this.dateEnv.createMarker(t)),this.unselect(),this.dispatch({type:"SET_VIEW_TYPE",viewType:e,dateMarker:n})},e.prototype.zoomTo=function(e,t){var n
t=t||"day",n=this.viewSpecs[t]||this.getUnitViewSpec(t),this.unselect(),n?this.dispatch({type:"SET_VIEW_TYPE",viewType:n.type,dateMarker:e}):this.dispatch({type:"SET_DATE",dateMarker:e})},e.prototype.getUnitViewSpec=function(e){var t,n,r=this.component,i=[]
for(var o in r.header&&i.push.apply(i,r.header.viewsWithButtons),r.footer&&i.push.apply(i,r.footer.viewsWithButtons),this.viewSpecs)i.push(o)
for(t=0;t<i.length;t++)if((n=this.viewSpecs[i[t]])&&n.singleUnit===e)return n},e.prototype.getInitialDate=function(){var e=this.opt("defaultDate")
return null!=e?this.dateEnv.createMarker(e):this.getNow()},e.prototype.prev=function(){this.unselect(),this.dispatch({type:"PREV"})},e.prototype.next=function(){this.unselect(),this.dispatch({type:"NEXT"})},e.prototype.prevYear=function(){this.unselect(),this.dispatch({type:"SET_DATE",dateMarker:this.dateEnv.addYears(this.state.currentDate,-1)})},e.prototype.nextYear=function(){this.unselect(),this.dispatch({type:"SET_DATE",dateMarker:this.dateEnv.addYears(this.state.currentDate,1)})},e.prototype.today=function(){this.unselect(),this.dispatch({type:"SET_DATE",dateMarker:this.getNow()})},e.prototype.gotoDate=function(e){this.unselect(),this.dispatch({type:"SET_DATE",dateMarker:this.dateEnv.createMarker(e)})},e.prototype.incrementDate=function(e){var t=te(e)
t&&(this.unselect(),this.dispatch({type:"SET_DATE",dateMarker:this.dateEnv.add(this.state.currentDate,t)}))},e.prototype.getDate=function(){return this.dateEnv.toDate(this.state.currentDate)},e.prototype.formatDate=function(e,t){var n=this.dateEnv
return n.format(n.createMarker(e),ut(t))},e.prototype.formatRange=function(e,t,n){var r=this.dateEnv
return r.formatRange(r.createMarker(e),r.createMarker(t),ut(n,this.opt("defaultRangeSeparator")),n)},e.prototype.formatIso=function(e,t){var n=this.dateEnv
return n.formatIso(n.createMarker(e),{omitTime:t})},e.prototype.windowResize=function(e){!this.isHandlingWindowResize&&this.component&&e.target===window&&(this.isHandlingWindowResize=!0,this.updateSize(),this.publiclyTrigger("windowResize",[this.view]),this.isHandlingWindowResize=!1)},e.prototype.updateSize=function(){this.component&&this.component.updateSize(!0)},e.prototype.registerInteractiveComponent=function(e,t){var n=function(e,t){return{component:e,el:t.el,useEventCenter:null==t.useEventCenter||t.useEventCenter}}(e,t),r=[wr,br].concat(this.pluginSystem.hooks.componentInteractions).map((function(e){return new e(n)}))
this.interactionsStore[e.uid]=r,Sr[e.uid]=n},e.prototype.unregisterInteractiveComponent=function(e){for(var t=0,n=this.interactionsStore[e.uid];t<n.length;t++){n[t].destroy()}delete this.interactionsStore[e.uid],delete Sr[e.uid]},e.prototype.select=function(e,t){var n=ar(null==t?null!=e.start?e:{start:e,end:null}:{start:e,end:t},this.dateEnv,te({days:1}))
n&&(this.dispatch({type:"SELECT_DATES",selection:n}),this.triggerDateSelect(n))},e.prototype.unselect=function(e){this.state.dateSelection&&(this.dispatch({type:"UNSELECT_DATES"}),this.triggerDateUnselect(e))},e.prototype.triggerDateSelect=function(e,t){var n=Me({},this.buildDateSpanApi(e),{jsEvent:t?t.origEvent:null,view:this.view})
this.publiclyTrigger("select",[n])},e.prototype.triggerDateUnselect=function(e){this.publiclyTrigger("unselect",[{jsEvent:e?e.origEvent:null,view:this.view}])},e.prototype.triggerDateClick=function(e,t,n,r){var i=Me({},this.buildDatePointApi(e),{dayEl:t,jsEvent:r,view:n})
this.publiclyTrigger("dateClick",[i])},e.prototype.buildDatePointApi=function(e){for(var t,n,r={},i=0,o=this.pluginSystem.hooks.datePointTransforms;i<o.length;i++){var a=o[i]
Me(r,a(e,this))}return Me(r,(t=e,{date:(n=this.dateEnv).toDate(t.range.start),dateStr:n.formatIso(t.range.start,{omitTime:t.allDay}),allDay:t.allDay})),r},e.prototype.buildDateSpanApi=function(e){for(var t,n,r={},i=0,o=this.pluginSystem.hooks.dateSpanTransforms;i<o.length;i++){var a=o[i]
Me(r,a(e,this))}return Me(r,(t=e,{start:(n=this.dateEnv).toDate(t.range.start),end:n.toDate(t.range.end),startStr:n.formatIso(t.range.start,{omitTime:t.allDay}),endStr:n.formatIso(t.range.end,{omitTime:t.allDay}),allDay:t.allDay})),r},e.prototype.getNow=function(){var e=this.opt("now")
return"function"==typeof e&&(e=e()),null==e?this.dateEnv.createNowMarker():this.dateEnv.createMarker(e)},e.prototype.getDefaultEventEnd=function(e,t){var n=t
return e?(n=B(n),n=this.dateEnv.add(n,this.defaultAllDayEventDuration)):n=this.dateEnv.add(n,this.defaultTimedEventDuration),n},e.prototype.addEvent=function(e,t){if(e instanceof pt){var n=e._def,r=e._instance
return this.state.eventStore.defs[n.defId]||this.dispatch({type:"ADD_EVENTS",eventStore:xe({def:n,instance:r})}),e}var i
if(t instanceof ft)i=t.internalEventSource.sourceId
else if(null!=t){var o=this.getEventSourceById(t)
if(!o)return console.warn('Could not find an event source with ID "'+t+'"'),null
i=o.internalEventSource.sourceId}var a=Yt(e,i,this)
return a?(this.dispatch({type:"ADD_EVENTS",eventStore:xe(a)}),new pt(this,a.def,a.def.recurringDef?null:a.instance)):null},e.prototype.getEventById=function(e){var t=this.state.eventStore,n=t.defs,r=t.instances
for(var i in e=String(e),n){var o=n[i]
if(o.publicId===e){if(o.recurringDef)return new pt(this,o,null)
for(var a in r){var s=r[a]
if(s.defId===o.defId)return new pt(this,o,s)}}}return null},e.prototype.getEvents=function(){var e=this.state.eventStore,t=e.defs,n=e.instances,r=[]
for(var i in n){var o=n[i],a=t[o.defId]
r.push(new pt(this,a,o))}return r},e.prototype.removeAllEvents=function(){this.dispatch({type:"REMOVE_ALL_EVENTS"})},e.prototype.rerenderEvents=function(){this.dispatch({type:"RESET_EVENTS"})},e.prototype.getEventSources=function(){var e=this.state.eventSources,t=[]
for(var n in e)t.push(new ft(this,e[n]))
return t},e.prototype.getEventSourceById=function(e){var t=this.state.eventSources
for(var n in e=String(e),t)if(t[n].publicId===e)return new ft(this,t[n])
return null},e.prototype.addEventSource=function(e){if(e instanceof ft)return this.state.eventSources[e.internalEventSource.sourceId]||this.dispatch({type:"ADD_EVENT_SOURCES",sources:[e.internalEventSource]}),e
var t=Bn(e,this)
return t?(this.dispatch({type:"ADD_EVENT_SOURCES",sources:[t]}),new ft(this,t)):null},e.prototype.removeAllEventSources=function(){this.dispatch({type:"REMOVE_ALL_EVENT_SOURCES"})},e.prototype.refetchEvents=function(){this.dispatch({type:"FETCH_EVENT_SOURCES"})},e.prototype.scrollToTime=function(e){var t=te(e)
t&&this.component.view.scrollToDuration(t)},e}()
function Cr(e,t,n,r,i,o,a){return new Un({calendarSystem:"gregory",timeZone:t,namedTimeZoneImpl:n,locale:e,weekNumberCalculation:i,firstDay:r,weekLabel:o,cmdFormatter:a})}function Mr(e){return new(this.pluginSystem.hooks.themeClasses[e.themeSystem]||Dr)(e)}function kr(e){var t=this.tryRerender.bind(this)
return null!=e&&(t=Ee(t,e)),t}function Ir(e){return Ne(e,(function(e){return e.ui}))}function Rr(e,t,n){var r={"":t}
for(var i in e){var o=e[i]
o.sourceId&&n[o.sourceId]&&(r[i]=n[o.sourceId])}return r}nn.mixInto(Tr)
var Or=function(e){function t(t,n,r,i){var a=e.call(this,t,o("div",{className:"fc-view fc-"+n.type+"-view"}),!0)||this
return a.renderDatesMem=$t(a.renderDatesWrap,a.unrenderDatesWrap),a.renderBusinessHoursMem=$t(a.renderBusinessHours,a.unrenderBusinessHours,[a.renderDatesMem]),a.renderDateSelectionMem=$t(a.renderDateSelectionWrap,a.unrenderDateSelectionWrap,[a.renderDatesMem]),a.renderEventsMem=$t(a.renderEvents,a.unrenderEvents,[a.renderDatesMem]),a.renderEventSelectionMem=$t(a.renderEventSelectionWrap,a.unrenderEventSelectionWrap,[a.renderEventsMem]),a.renderEventDragMem=$t(a.renderEventDragWrap,a.unrenderEventDragWrap,[a.renderDatesMem]),a.renderEventResizeMem=$t(a.renderEventResizeWrap,a.unrenderEventResizeWrap,[a.renderDatesMem]),a.viewSpec=n,a.dateProfileGenerator=r,a.type=n.type,a.eventOrderSpecs=function(e){var t,n,r=[],i=[]
for("string"==typeof e?i=e.split(/\s*,\s*/):"function"==typeof e?i=[e]:Array.isArray(e)&&(i=e),t=0;t<i.length;t++)"string"==typeof(n=i[t])?r.push("-"===n.charAt(0)?{field:n.substring(1),order:-1}:{field:n,order:1}):"function"==typeof n&&r.push({func:n})
return r}(a.opt("eventOrder")),a.nextDayThreshold=te(a.opt("nextDayThreshold")),i.appendChild(a.el),a.initialize(),a}return Ce(t,e),t.prototype.initialize=function(){},Object.defineProperty(t.prototype,"activeStart",{get:function(){return this.dateEnv.toDate(this.props.dateProfile.activeRange.start)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"activeEnd",{get:function(){return this.dateEnv.toDate(this.props.dateProfile.activeRange.end)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"currentStart",{get:function(){return this.dateEnv.toDate(this.props.dateProfile.currentRange.start)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"currentEnd",{get:function(){return this.dateEnv.toDate(this.props.dateProfile.currentRange.end)},enumerable:!0,configurable:!0}),t.prototype.render=function(e){this.renderDatesMem(e.dateProfile),this.renderBusinessHoursMem(e.businessHours),this.renderDateSelectionMem(e.dateSelection),this.renderEventsMem(e.eventStore),this.renderEventSelectionMem(e.eventSelection),this.renderEventDragMem(e.eventDrag),this.renderEventResizeMem(e.eventResize)},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderDatesMem.unrender()},t.prototype.updateSize=function(e,t,n){var r=this.calendar;(e||r.isViewUpdated||r.isDatesUpdated||r.isEventsUpdated)&&this.updateBaseSize(e,t,n)},t.prototype.updateBaseSize=function(e,t,n){},t.prototype.renderDatesWrap=function(e){this.renderDates(e),this.addScroll({duration:te(this.opt("scrollTime"))}),this.startNowIndicator(e)},t.prototype.unrenderDatesWrap=function(){this.stopNowIndicator(),this.unrenderDates()},t.prototype.renderDates=function(e){},t.prototype.unrenderDates=function(){},t.prototype.renderBusinessHours=function(e){},t.prototype.unrenderBusinessHours=function(){},t.prototype.renderDateSelectionWrap=function(e){e&&this.renderDateSelection(e)},t.prototype.unrenderDateSelectionWrap=function(e){e&&this.unrenderDateSelection(e)},t.prototype.renderDateSelection=function(e){},t.prototype.unrenderDateSelection=function(e){},t.prototype.renderEvents=function(e){},t.prototype.unrenderEvents=function(){},t.prototype.sliceEvents=function(e,t){var n=this.props
return vt(e,n.eventUiBases,n.dateProfile.activeRange,t?this.nextDayThreshold:null).fg},t.prototype.computeEventDraggable=function(e,t){for(var n=this.calendar.pluginSystem.hooks.isDraggableTransformers,r=t.startEditable,i=0,o=n;i<o.length;i++){r=(0,o[i])(r,e,t,this)}return r},t.prototype.computeEventStartResizable=function(e,t){return t.durationEditable&&this.opt("eventResizableFromStart")},t.prototype.computeEventEndResizable=function(e,t){return t.durationEditable},t.prototype.renderEventSelectionWrap=function(e){e&&this.renderEventSelection(e)},t.prototype.unrenderEventSelectionWrap=function(e){e&&this.unrenderEventSelection(e)},t.prototype.renderEventSelection=function(e){},t.prototype.unrenderEventSelection=function(e){},t.prototype.renderEventDragWrap=function(e){e&&this.renderEventDrag(e)},t.prototype.unrenderEventDragWrap=function(e){e&&this.unrenderEventDrag(e)},t.prototype.renderEventDrag=function(e){},t.prototype.unrenderEventDrag=function(e){},t.prototype.renderEventResizeWrap=function(e){e&&this.renderEventResize(e)},t.prototype.unrenderEventResizeWrap=function(e){e&&this.unrenderEventResize(e)},t.prototype.renderEventResize=function(e){},t.prototype.unrenderEventResize=function(e){},t.prototype.startNowIndicator=function(e){var t,n,r,i=this,o=this.dateEnv
this.opt("nowIndicator")&&(t=this.getNowIndicatorUnit(e))&&(n=this.updateNowIndicator.bind(this),this.initialNowDate=this.calendar.getNow(),this.initialNowQueriedMs=(new Date).valueOf(),r=o.add(o.startOf(this.initialNowDate,t),te(1,t)).valueOf()-this.initialNowDate.valueOf(),this.nowIndicatorTimeoutID=setTimeout((function(){i.nowIndicatorTimeoutID=null,n(),r="second"===t?1e3:6e4,i.nowIndicatorIntervalID=setInterval(n,r)}),r))},t.prototype.updateNowIndicator=function(){this.props.dateProfile&&this.initialNowDate&&(this.unrenderNowIndicator(),this.renderNowIndicator(F(this.initialNowDate,(new Date).valueOf()-this.initialNowQueriedMs)),this.isNowIndicatorRendered=!0)},t.prototype.stopNowIndicator=function(){this.isNowIndicatorRendered&&(this.nowIndicatorTimeoutID&&(clearTimeout(this.nowIndicatorTimeoutID),this.nowIndicatorTimeoutID=null),this.nowIndicatorIntervalID&&(clearInterval(this.nowIndicatorIntervalID),this.nowIndicatorIntervalID=null),this.unrenderNowIndicator(),this.isNowIndicatorRendered=!1)},t.prototype.getNowIndicatorUnit=function(e){},t.prototype.renderNowIndicator=function(e){},t.prototype.unrenderNowIndicator=function(){},t.prototype.addScroll=function(e){var t=this.queuedScroll||(this.queuedScroll={})
Me(t,e)},t.prototype.popScroll=function(e){this.applyQueuedScroll(e),this.queuedScroll=null},t.prototype.applyQueuedScroll=function(e){this.applyScroll(this.queuedScroll||{},e)},t.prototype.queryScroll=function(){var e={}
return this.props.dateProfile&&Me(e,this.queryDateScroll()),e},t.prototype.applyScroll=function(e,t){var n=e.duration
null!=n&&(delete e.duration,this.props.dateProfile&&Me(e,this.computeDateScroll(n))),this.props.dateProfile&&this.applyDateScroll(e)},t.prototype.computeDateScroll=function(e){return{}},t.prototype.queryDateScroll=function(){return{}},t.prototype.applyDateScroll=function(e){},t.prototype.scrollToDuration=function(e){this.applyScroll({duration:e},!1)},t}(pn)
nn.mixInto(Or),Or.prototype.usesMinMaxTime=!1,Or.prototype.dateProfileGeneratorClass=$n
var Nr=function(){function e(e){this.segs=[],this.isSizeDirty=!1,this.context=e}return e.prototype.renderSegs=function(e,t){this.rangeUpdated(),e=this.renderSegEls(e,t),this.segs=e,this.attachSegs(e,t),this.isSizeDirty=!0,this.context.view.triggerRenderedSegs(this.segs,Boolean(t))},e.prototype.unrender=function(e,t){this.context.view.triggerWillRemoveSegs(this.segs,Boolean(t)),this.detachSegs(this.segs),this.segs=[]},e.prototype.rangeUpdated=function(){var e,t,n=this.context.options
this.eventTimeFormat=ut(n.eventTimeFormat||this.computeEventTimeFormat(),n.defaultRangeSeparator),null==(e=n.displayEventTime)&&(e=this.computeDisplayEventTime()),null==(t=n.displayEventEnd)&&(t=this.computeDisplayEventEnd()),this.displayEventTime=e,this.displayEventEnd=t},e.prototype.renderSegEls=function(e,t){var n,r=""
if(e.length){for(n=0;n<e.length;n++)r+=this.renderSegHtml(e[n],t)
s(r).forEach((function(t,n){var r=e[n]
t&&(r.el=t)})),e=gt(this.context.view,e,Boolean(t))}return e},e.prototype.getSegClasses=function(e,t,n,r){var i=["fc-event",e.isStart?"fc-start":"fc-not-start",e.isEnd?"fc-end":"fc-not-end"].concat(e.eventRange.ui.classNames)
return t&&i.push("fc-draggable"),n&&i.push("fc-resizable"),r&&(i.push("fc-mirror"),r.isDragging&&i.push("fc-dragging"),r.isResizing&&i.push("fc-resizing")),i},e.prototype.getTimeText=function(e,t,n){var r=e.def,i=e.instance
return this._getTimeText(i.range.start,r.hasEnd?i.range.end:null,r.allDay,t,n,i.forcedStartTzo,i.forcedEndTzo)},e.prototype._getTimeText=function(e,t,n,r,i,o,a){var s=this.context.dateEnv
return null==r&&(r=this.eventTimeFormat),null==i&&(i=this.displayEventEnd),this.displayEventTime&&!n?i&&t?s.formatRange(e,t,r,{forcedStartTzo:o,forcedEndTzo:a}):s.format(e,r,{forcedTzo:o}):""},e.prototype.computeEventTimeFormat=function(){return{hour:"numeric",minute:"2-digit",omitZeroMinute:!0}},e.prototype.computeDisplayEventTime=function(){return!0},e.prototype.computeDisplayEventEnd=function(){return!0},e.prototype.getSkinCss=function(e){return{"background-color":e.backgroundColor,"border-color":e.borderColor,color:e.textColor}},e.prototype.sortEventSegs=function(e){var t=this.context.view.eventOrderSpecs,n=e.map(Pr)
return n.sort((function(e,n){return function(e,t,n){var r,i
for(r=0;r<n.length;r++)if(i=he(e,t,n[r]))return i
return 0}(e,n,t)})),n.map((function(e){return e._seg}))},e.prototype.computeSizes=function(e){(e||this.isSizeDirty)&&this.computeSegSizes(this.segs)},e.prototype.assignSizes=function(e){(e||this.isSizeDirty)&&(this.assignSegSizes(this.segs),this.isSizeDirty=!1)},e.prototype.computeSegSizes=function(e){},e.prototype.assignSegSizes=function(e){},e.prototype.hideByHash=function(e){if(e)for(var t=0,n=this.segs;t<n.length;t++){var r=n[t]
e[r.eventRange.instance.instanceId]&&(r.el.style.visibility="hidden")}},e.prototype.showByHash=function(e){if(e)for(var t=0,n=this.segs;t<n.length;t++){var r=n[t]
e[r.eventRange.instance.instanceId]&&(r.el.style.visibility="")}},e.prototype.selectByInstanceId=function(e){if(e)for(var t=0,n=this.segs;t<n.length;t++){var r=n[t],i=r.eventRange.instance
i&&i.instanceId===e&&r.el&&r.el.classList.add("fc-selected")}},e.prototype.unselectByInstanceId=function(e){if(e)for(var t=0,n=this.segs;t<n.length;t++){var r=n[t]
r.el&&r.el.classList.remove("fc-selected")}},e}()
function Pr(e){var t=e.eventRange.def,n=e.eventRange.instance.range,r=n.start?n.start.valueOf():0,i=n.end?n.end.valueOf():0
return Me({},t.extendedProps,t,{id:t.publicId,start:r,end:i,duration:i-r,allDay:Number(t.allDay),_seg:e})}var _r=function(){function e(e){this.fillSegTag="div",this.dirtySizeFlags={},this.context=e,this.containerElsByType={},this.segsByType={}}return e.prototype.getSegsByType=function(e){return this.segsByType[e]||[]},e.prototype.renderSegs=function(e,t){var n,r=this.renderSegEls(e,t),i=this.attachSegs(e,r)
i&&(n=this.containerElsByType[e]||(this.containerElsByType[e]=[])).push.apply(n,i),this.segsByType[e]=r,"bgEvent"===e&&this.context.view.triggerRenderedSegs(r,!1),this.dirtySizeFlags[e]=!0},e.prototype.unrender=function(e){var t=this.segsByType[e]
t&&("bgEvent"===e&&this.context.view.triggerWillRemoveSegs(t,!1),this.detachSegs(e,t))},e.prototype.renderSegEls=function(e,t){var n,r=this,i=""
if(t.length){for(n=0;n<t.length;n++)i+=this.renderSegHtml(e,t[n])
s(i).forEach((function(e,n){var r=t[n]
e&&(r.el=e)})),"bgEvent"===e&&(t=gt(this.context.view,t,!1)),t=t.filter((function(e){return m(e.el,r.fillSegTag)}))}return t},e.prototype.renderSegHtml=function(e,t){var n=null,r=[]
return"highlight"!==e&&"businessHours"!==e&&(n={"background-color":t.eventRange.ui.backgroundColor}),"highlight"!==e&&(r=r.concat(t.eventRange.ui.classNames)),"businessHours"===e?r.push("fc-bgevent"):r.push("fc-"+e.toLowerCase()),"<"+this.fillSegTag+(r.length?' class="'+r.join(" ")+'"':"")+(n?' style="'+Ht(n)+'"':"")+"></"+this.fillSegTag+">"},e.prototype.detachSegs=function(e,t){var n=this.containerElsByType[e]
n&&(n.forEach(f),delete this.containerElsByType[e])},e.prototype.computeSizes=function(e){for(var t in this.segsByType)(e||this.dirtySizeFlags[t])&&this.computeSegSizes(this.segsByType[t])},e.prototype.assignSizes=function(e){for(var t in this.segsByType)(e||this.dirtySizeFlags[t])&&this.assignSegSizes(this.segsByType[t])
this.dirtySizeFlags={}},e.prototype.computeSegSizes=function(e){},e.prototype.assignSegSizes=function(e){},e}(),Lr=function(e){this.timeZoneName=e},Hr=function(){function e(e){this.emitter=new nn}return e.prototype.destroy=function(){},e.prototype.setMirrorIsVisible=function(e){},e.prototype.setMirrorNeedsRevert=function(e){},e.prototype.setAutoScrollEnabled=function(e){},e}()
var xr={startTime:te,duration:te,create:Boolean,sourceId:String},Vr={create:!0}
function zr(e){var t={},n=Se(e,xr,Vr,t)
return n.leftoverProps=t,n}function Ar(e,t,n,r,i,o,a,s){var l,u=o.view,c=o.dateEnv,d=o.theme,h=o.options,f=Xe(t.activeRange,e),p=["fc-day-header",d.getClass("widgetHeader")]
return l="function"==typeof h.columnHeaderHtml?h.columnHeaderHtml(c.toDate(e)):"function"==typeof h.columnHeaderText?Lt(h.columnHeaderText(c.toDate(e))):Lt(c.format(e,i)),n?p=p.concat(tn(e,t,o,!0)):p.push("fc-"+z[e.getUTCDay()]),'<th class="'+p.join(" ")+'"'+(f&&n?' data-date="'+c.formatIso(e,{omitTime:!0})+'"':"")+(a>1?' colspan="'+a+'"':"")+(s?" "+s:"")+">"+(f?en(u,{date:e,forceOff:!n||1===r},l):l)+"</th>"}var Ur=function(e){function t(t,n){var r=e.call(this,t)||this
return n.innerHTML="",n.appendChild(r.el=a('<div class="fc-row '+r.theme.getClass("headerRow")+'"><table class="'+r.theme.getClass("tableGrid")+'"><thead></thead></table></div>')),r.thead=r.el.querySelector("thead"),r}return Ce(t,e),t.prototype.destroy=function(){f(this.el)},t.prototype.render=function(e){var t=e.dates,n=e.datesRepDistinctDays,r=[]
e.renderIntroHtml&&r.push(e.renderIntroHtml())
for(var i=ut(this.opt("columnHeaderFormat")||function(e,t){return!e||t>10?{weekday:"short"}:t>1?{weekday:"short",month:"numeric",day:"numeric",omitCommas:!0}:{weekday:"long"}}(n,t.length)),o=0,a=t;o<a.length;o++){var s=a[o]
r.push(Ar(s,e.dateProfile,n,t.length,i,this.context))}this.isRtl&&r.reverse(),this.thead.innerHTML="<tr>"+r.join("")+"</tr>"},t}(fn),Fr=function(){function e(e,t){for(var n=e.start,r=e.end,i=[],o=[],a=-1;n<r;)t.isHiddenDay(n)?i.push(a+.5):(a++,i.push(a),o.push(n)),n=U(n,1)
this.dates=o,this.indices=i,this.cnt=o.length}return e.prototype.sliceRange=function(e){var t=this.getDateDayIndex(e.start),n=this.getDateDayIndex(U(e.end,-1)),r=Math.max(0,t),i=Math.min(this.cnt-1,n)
return(r=Math.ceil(r))<=(i=Math.floor(i))?{firstIndex:r,lastIndex:i,isStart:t===r,isEnd:n===i}:null},e.prototype.getDateDayIndex=function(e){var t=this.indices,n=Math.floor(j(this.dates[0],e))
return n<0?t[0]-1:n>=t.length?t[t.length-1]+1:t[n]},e}(),jr=function(){function e(e,t){var n,r,i,o=e.dates
if(t){for(r=o[0].getUTCDay(),n=1;n<o.length&&o[n].getUTCDay()!==r;n++);i=Math.ceil(o.length/n)}else i=1,n=o.length
this.rowCnt=i,this.colCnt=n,this.daySeries=e,this.cells=this.buildCells(),this.headerDates=this.buildHeaderDates()}return e.prototype.buildCells=function(){for(var e=[],t=0;t<this.rowCnt;t++){for(var n=[],r=0;r<this.colCnt;r++)n.push(this.buildCell(t,r))
e.push(n)}return e},e.prototype.buildCell=function(e,t){return{date:this.daySeries.dates[e*this.colCnt+t]}},e.prototype.buildHeaderDates=function(){for(var e=[],t=0;t<this.colCnt;t++)e.push(this.cells[0][t].date)
return e},e.prototype.sliceRange=function(e){var t=this.colCnt,n=this.daySeries.sliceRange(e),r=[]
if(n)for(var i=n.firstIndex,o=n.lastIndex,a=i;a<=o;){var s=Math.floor(a/t),l=Math.min((s+1)*t,o+1)
r.push({row:s,firstCol:a%t,lastCol:(l-1)%t,isStart:n.isStart&&a===i,isEnd:n.isEnd&&l-1===o}),a=l}return r},e}(),Zr=function(){function e(){this.sliceBusinessHours=$e(this._sliceBusinessHours),this.sliceDateSelection=$e(this._sliceDateSpan),this.sliceEventStore=$e(this._sliceEventStore),this.sliceEventDrag=$e(this._sliceInteraction),this.sliceEventResize=$e(this._sliceInteraction)}return e.prototype.sliceProps=function(e,t,n,r){for(var i=[],o=4;o<arguments.length;o++)i[o-4]=arguments[o]
var a=e.eventUiBases,s=this.sliceEventStore.apply(this,[e.eventStore,a,t,n,r].concat(i))
return{dateSelectionSegs:this.sliceDateSelection.apply(this,[e.dateSelection,a,r].concat(i)),businessHourSegs:this.sliceBusinessHours.apply(this,[e.businessHours,t,n,r].concat(i)),fgEventSegs:s.fg,bgEventSegs:s.bg,eventDrag:this.sliceEventDrag.apply(this,[e.eventDrag,a,t,n,r].concat(i)),eventResize:this.sliceEventResize.apply(this,[e.eventResize,a,t,n,r].concat(i)),eventSelection:e.eventSelection}},e.prototype.sliceNowDate=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r]
return this._sliceDateSpan.apply(this,[{range:{start:e,end:F(e,1)},allDay:!1},{},t].concat(n))},e.prototype._sliceBusinessHours=function(e,t,n,r){for(var i=[],o=4;o<arguments.length;o++)i[o-4]=arguments[o]
return e?this._sliceEventStore.apply(this,[Ve(e,Br(t,Boolean(n)),r.calendar),{},t,n,r].concat(i)).bg:[]},e.prototype._sliceEventStore=function(e,t,n,r,i){for(var o=[],a=5;a<arguments.length;a++)o[a-5]=arguments[a]
if(e){var s=vt(e,t,Br(n,Boolean(r)),r)
return{bg:this.sliceEventRanges(s.bg,i,o),fg:this.sliceEventRanges(s.fg,i,o)}}return{bg:[],fg:[]}},e.prototype._sliceInteraction=function(e,t,n,r,i){for(var o=[],a=5;a<arguments.length;a++)o[a-5]=arguments[a]
if(!e)return null
var s=vt(e.mutatedEvents,t,Br(n,Boolean(r)),r)
return{segs:this.sliceEventRanges(s.fg,i,o),affectedInstances:e.affectedEvents.instances,isEvent:e.isEvent,sourceSeg:e.origSeg}},e.prototype._sliceDateSpan=function(e,t,n){for(var r=[],i=3;i<arguments.length;i++)r[i-3]=arguments[i]
if(!e)return[]
for(var o=sr(e,t,n.calendar),a=this.sliceRange.apply(this,[e.range].concat(r)),s=0,l=a;s<l.length;s++){var u=l[s]
u.component=n,u.eventRange=o}return a},e.prototype.sliceEventRanges=function(e,t,n){for(var r=[],i=0,o=e;i<o.length;i++){var a=o[i]
r.push.apply(r,this.sliceEventRange(a,t,n))}return r},e.prototype.sliceEventRange=function(e,t,n){for(var r=this.sliceRange.apply(this,[e.range].concat(n)),i=0,o=r;i<o.length;i++){var a=o[i]
a.component=t,a.eventRange=e,a.isStart=e.isStart&&a.isStart,a.isEnd=e.isEnd&&a.isEnd}return r},e}()
function Br(e,t){var n=e.activeRange
return t?n:{start:F(n.start,e.minTime.milliseconds),end:F(n.end,e.maxTime.milliseconds-864e5)}}var Wr=function(e,t){return(Wr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)}
function Yr(e,t){function n(){this.constructor=e}Wr(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var qr=function(){return(qr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e}).apply(this,arguments)},Gr=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Yr(t,e),t.prototype.buildRenderRange=function(t,n,r){var i,o=this.dateEnv,a=e.prototype.buildRenderRange.call(this,t,n,r),s=a.start,l=a.end;(/^(year|month)$/.test(n)&&(s=o.startOfWeek(s),(i=o.startOfWeek(l)).valueOf()!==l.valueOf()&&(l=A(i,1))),this.options.monthMode&&this.options.fixedWeekCount)&&(l=A(l,6-Math.ceil(j(s,l)/7)))
return{start:s,end:l}},t}($n),Xr=function(){function e(e){var t=this
this.isHidden=!0,this.margin=10,this.documentMousedown=function(e){t.el&&!t.el.contains(e.target)&&t.hide()},this.options=e}return e.prototype.show=function(){this.isHidden&&(this.el||this.render(),this.el.style.display="",this.position(),this.isHidden=!1,this.trigger("show"))},e.prototype.hide=function(){this.isHidden||(this.el.style.display="none",this.isHidden=!0,this.trigger("hide"))},e.prototype.render=function(){var e=this,t=this.options,n=this.el=o("div",{className:"fc-popover "+(t.className||""),style:{top:"0",left:"0"}})
"function"==typeof t.content&&t.content(n),t.parentEl.appendChild(n),x(n,"click",".fc-close",(function(t){e.hide()})),t.autoHide&&document.addEventListener("mousedown",this.documentMousedown)},e.prototype.destroy=function(){this.hide(),this.el&&(f(this.el),this.el=null),document.removeEventListener("mousedown",this.documentMousedown)},e.prototype.position=function(){var e,t,n=this.options,r=this.el,i=r.getBoundingClientRect(),o=O(r.offsetParent),a=L(n.parentEl)
e=n.top||0,t=void 0!==n.left?n.left:void 0!==n.right?n.right-i.width:0,e=Math.min(e,a.bottom-i.height-this.margin),e=Math.max(e,a.top+this.margin),t=Math.min(t,a.right-i.width-this.margin),t=Math.max(t,a.left+this.margin),w(r,{top:e-o.top,left:t-o.left})},e.prototype.trigger=function(e){this.options[e]&&this.options[e].apply(this,Array.prototype.slice.call(arguments,1))},e}(),Jr=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Yr(t,e),t.prototype.renderSegHtml=function(e,t){var n,r,i=this.context,o=i.view,a=i.options,s=e.eventRange,l=s.def,u=s.ui,c=l.allDay,d=o.computeEventDraggable(l,u),h=c&&e.isStart&&o.computeEventStartResizable(l,u),f=c&&e.isEnd&&o.computeEventEndResizable(l,u),p=this.getSegClasses(e,d,h||f,t),v=Ht(this.getSkinCss(u)),g=""
return p.unshift("fc-day-grid-event","fc-h-event"),e.isStart&&(n=this.getTimeText(s))&&(g='<span class="fc-time">'+Lt(n)+"</span>"),r='<span class="fc-title">'+(Lt(l.title||"")||"&nbsp;")+"</span>",'<a class="'+p.join(" ")+'"'+(l.url?' href="'+Lt(l.url)+'"':"")+(v?' style="'+v+'"':"")+'><div class="fc-content">'+("rtl"===a.dir?r+" "+g:g+" "+r)+"</div>"+(h?'<div class="fc-resizer fc-start-resizer"></div>':"")+(f?'<div class="fc-resizer fc-end-resizer"></div>':"")+"</a>"},t.prototype.computeEventTimeFormat=function(){return{hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"narrow"}},t.prototype.computeDisplayEventEnd=function(){return!1},t}(Nr),$r=function(e){function t(t){var n=e.call(this,t.context)||this
return n.dayGrid=t,n}return Yr(t,e),t.prototype.attachSegs=function(e,t){var n=this.rowStructs=this.renderSegRows(e)
this.dayGrid.rowEls.forEach((function(e,t){e.querySelector(".fc-content-skeleton > table").appendChild(n[t].tbodyEl)})),t||this.dayGrid.removeSegPopover()},t.prototype.detachSegs=function(){for(var e,t=this.rowStructs||[];e=t.pop();)f(e.tbodyEl)
this.rowStructs=null},t.prototype.renderSegRows=function(e){var t,n,r=[]
for(t=this.groupSegRows(e),n=0;n<t.length;n++)r.push(this.renderSegRow(n,t[n]))
return r},t.prototype.renderSegRow=function(e,t){var n,r,i,a,s,l,d,h=this.dayGrid,f=h.colCnt,p=h.isRtl,v=this.buildSegLevels(t),g=Math.max(1,v.length),m=document.createElement("tbody"),y=[],E=[],S=[]
function w(e){for(;i<e;)(d=(S[n-1]||[])[i])?d.rowSpan=(d.rowSpan||1)+1:(d=document.createElement("td"),a.appendChild(d)),E[n][i]=d,S[n][i]=d,i++}for(n=0;n<g;n++){if(r=v[n],i=0,a=document.createElement("tr"),y.push([]),E.push([]),S.push([]),r)for(s=0;s<r.length;s++){l=r[s]
var b=p?f-1-l.lastCol:l.firstCol,D=p?f-1-l.firstCol:l.lastCol
for(w(b),d=o("td",{className:"fc-event-container"},l.el),b!==D?d.colSpan=D-b+1:S[n][i]=d;i<=D;)E[n][i]=d,y[n][i]=l,i++
a.appendChild(d)}w(f)
var T=h.renderProps.renderIntroHtml()
T&&(h.isRtl?u(a,T):c(a,T)),m.appendChild(a)}return{row:e,tbodyEl:m,cellMatrix:E,segMatrix:y,segLevels:v,segs:t}},t.prototype.buildSegLevels=function(e){var t,n,r,i=this.dayGrid,o=i.isRtl,a=i.colCnt,s=[]
for(e=this.sortEventSegs(e),t=0;t<e.length;t++){for(n=e[t],r=0;r<s.length&&Qr(n,s[r]);r++);n.level=r,n.leftCol=o?a-1-n.lastCol:n.firstCol,n.rightCol=o?a-1-n.firstCol:n.lastCol,(s[r]||(s[r]=[])).push(n)}for(r=0;r<s.length;r++)s[r].sort(Kr)
return s},t.prototype.groupSegRows=function(e){var t,n=[]
for(t=0;t<this.dayGrid.rowCnt;t++)n.push([])
for(t=0;t<e.length;t++)n[e[t].row].push(e[t])
return n},t.prototype.computeDisplayEventEnd=function(){return 1===this.dayGrid.colCnt},t}(Jr)
function Qr(e,t){var n,r
for(n=0;n<t.length;n++)if((r=t[n]).firstCol<=e.lastCol&&r.lastCol>=e.firstCol)return!0
return!1}function Kr(e,t){return e.leftCol-t.leftCol}var ei=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Yr(t,e),t.prototype.attachSegs=function(e,t){var n=t.sourceSeg,r=this.rowStructs=this.renderSegRows(e)
this.dayGrid.rowEls.forEach((function(e,t){var i,o,s=a('<div class="fc-mirror-skeleton"><table></table></div>')
n&&n.row===t?i=n.el:(i=e.querySelector(".fc-content-skeleton tbody"))||(i=e.querySelector(".fc-content-skeleton table")),o=i.getBoundingClientRect().top-e.getBoundingClientRect().top,s.style.top=o+"px",s.querySelector("table").appendChild(r[t].tbodyEl),e.appendChild(s)}))},t}($r),ti=function(e){function t(t){var n=e.call(this,t.context)||this
return n.fillSegTag="td",n.dayGrid=t,n}return Yr(t,e),t.prototype.renderSegs=function(t,n){"bgEvent"===t&&(n=n.filter((function(e){return e.eventRange.def.allDay}))),e.prototype.renderSegs.call(this,t,n)},t.prototype.attachSegs=function(e,t){var n,r,i,o=[]
for(n=0;n<t.length;n++)r=t[n],i=this.renderFillRow(e,r),this.dayGrid.rowEls[r.row].appendChild(i),o.push(i)
return o},t.prototype.renderFillRow=function(e,t){var n,r,i=this.dayGrid,o=i.colCnt,s=i.isRtl,l=s?o-1-t.lastCol:t.firstCol,d=(s?o-1-t.firstCol:t.lastCol)+1
r=(n=a('<div class="fc-'+("businessHours"===e?"bgevent":e.toLowerCase())+'-skeleton"><table><tr></tr></table></div>')).getElementsByTagName("tr")[0],l>0&&u(r,new Array(l+1).join('<td style="pointer-events:none"></td>')),t.el.colSpan=d-l,r.appendChild(t.el),d<o&&u(r,new Array(o-d+1).join('<td style="pointer-events:none"></td>'))
var h=i.renderProps.renderIntroHtml()
return h&&(i.isRtl?u(r,h):c(r,h)),n},t}(_r),ni=function(e){function t(t,n){var r=e.call(this,t,n)||this,i=r.eventRenderer=new ri(r),o=r.renderFrame=$t(r._renderFrame)
return r.renderFgEvents=$t(i.renderSegs.bind(i),i.unrender.bind(i),[o]),r.renderEventSelection=$t(i.selectByInstanceId.bind(i),i.unselectByInstanceId.bind(i),[r.renderFgEvents]),r.renderEventDrag=$t(i.hideByHash.bind(i),i.showByHash.bind(i),[o]),r.renderEventResize=$t(i.hideByHash.bind(i),i.showByHash.bind(i),[o]),t.calendar.registerInteractiveComponent(r,{el:r.el,useEventCenter:!1}),r}return Yr(t,e),t.prototype.render=function(e){this.renderFrame(e.date),this.renderFgEvents(e.fgSegs),this.renderEventSelection(e.eventSelection),this.renderEventDrag(e.eventDragInstances),this.renderEventResize(e.eventResizeInstances)},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderFrame.unrender(),this.calendar.unregisterInteractiveComponent(this)},t.prototype._renderFrame=function(e){var t=this.theme,n=this.dateEnv.format(e,ut(this.opt("dayPopoverFormat")))
this.el.innerHTML='<div class="fc-header '+t.getClass("popoverHeader")+'"><span class="fc-title">'+Lt(n)+'</span><span class="fc-close '+t.getIconClass("close")+'"></span></div><div class="fc-body '+t.getClass("popoverContent")+'"><div class="fc-event-container"></div></div>',this.segContainerEl=this.el.querySelector(".fc-event-container")},t.prototype.queryHit=function(e,t,n,r){var i=this.props.date
if(e<n&&t<r)return{component:this,dateSpan:{allDay:!0,range:{start:i,end:U(i,1)}},dayEl:this.el,rect:{left:0,top:0,right:n,bottom:r},layer:1}},t}(pn),ri=function(e){function t(t){var n=e.call(this,t.context)||this
return n.dayTile=t,n}return Yr(t,e),t.prototype.attachSegs=function(e){for(var t=0,n=e;t<n.length;t++){var r=n[t]
this.dayTile.segContainerEl.appendChild(r.el)}},t.prototype.detachSegs=function(e){for(var t=0,n=e;t<n.length;t++){f(n[t].el)}},t}(Jr),ii=function(){function e(e){this.context=e}return e.prototype.renderHtml=function(e){var t=[]
e.renderIntroHtml&&t.push(e.renderIntroHtml())
for(var n=0,r=e.cells;n<r.length;n++){var i=r[n]
t.push(oi(i.date,e.dateProfile,this.context,i.htmlAttrs))}return e.cells.length||t.push('<td class="fc-day '+this.context.theme.getClass("widgetContent")+'"></td>'),"rtl"===this.context.options.dir&&t.reverse(),"<tr>"+t.join("")+"</tr>"},e}()
function oi(e,t,n,r){var i=n.dateEnv,o=n.theme,a=Xe(t.activeRange,e),s=tn(e,t,n)
return s.unshift("fc-day",o.getClass("widgetContent")),'<td class="'+s.join(" ")+'"'+(a?' data-date="'+i.formatIso(e,{omitTime:!0})+'"':"")+(r?" "+r:"")+"></td>"}var ai=ut({day:"numeric"}),si=ut({week:"numeric"}),li=function(e){function t(t,n,r){var i=e.call(this,t,n)||this
i.bottomCoordPadding=0,i.isCellSizesDirty=!1
var o=i.eventRenderer=new $r(i),a=i.fillRenderer=new ti(i)
i.mirrorRenderer=new ei(i)
var s=i.renderCells=$t(i._renderCells,i._unrenderCells)
return i.renderBusinessHours=$t(a.renderSegs.bind(a,"businessHours"),a.unrender.bind(a,"businessHours"),[s]),i.renderDateSelection=$t(a.renderSegs.bind(a,"highlight"),a.unrender.bind(a,"highlight"),[s]),i.renderBgEvents=$t(a.renderSegs.bind(a,"bgEvent"),a.unrender.bind(a,"bgEvent"),[s]),i.renderFgEvents=$t(o.renderSegs.bind(o),o.unrender.bind(o),[s]),i.renderEventSelection=$t(o.selectByInstanceId.bind(o),o.unselectByInstanceId.bind(o),[i.renderFgEvents]),i.renderEventDrag=$t(i._renderEventDrag,i._unrenderEventDrag,[s]),i.renderEventResize=$t(i._renderEventResize,i._unrenderEventResize,[s]),i.renderProps=r,i}return Yr(t,e),t.prototype.render=function(e){var t=e.cells
this.rowCnt=t.length,this.colCnt=t[0].length,this.renderCells(t,e.isRigid),this.renderBusinessHours(e.businessHourSegs),this.renderDateSelection(e.dateSelectionSegs),this.renderBgEvents(e.bgEventSegs),this.renderFgEvents(e.fgEventSegs),this.renderEventSelection(e.eventSelection),this.renderEventDrag(e.eventDrag),this.renderEventResize(e.eventResize),this.segPopoverTile&&this.updateSegPopoverTile()},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderCells.unrender()},t.prototype.getCellRange=function(e,t){var n=this.props.cells[e][t].date
return{start:n,end:U(n,1)}},t.prototype.updateSegPopoverTile=function(e,t){var n=this.props
this.segPopoverTile.receiveProps({date:e||this.segPopoverTile.props.date,fgSegs:t||this.segPopoverTile.props.fgSegs,eventSelection:n.eventSelection,eventDragInstances:n.eventDrag?n.eventDrag.affectedInstances:null,eventResizeInstances:n.eventResize?n.eventResize.affectedInstances:null})},t.prototype._renderCells=function(e,t){var n,r,i=this.view,o=this.dateEnv,a=this.rowCnt,s=this.colCnt,l=""
for(n=0;n<a;n++)l+=this.renderDayRowHtml(n,t)
for(this.el.innerHTML=l,this.rowEls=y(this.el,".fc-row"),this.cellEls=y(this.el,".fc-day, .fc-disabled-day"),this.isRtl&&this.cellEls.reverse(),this.rowPositions=new an(this.el,this.rowEls,!1,!0),this.colPositions=new an(this.el,this.cellEls.slice(0,s),!0,!1),n=0;n<a;n++)for(r=0;r<s;r++)this.publiclyTrigger("dayRender",[{date:o.toDate(e[n][r].date),el:this.getCellEl(n,r),view:i}])
this.isCellSizesDirty=!0},t.prototype._unrenderCells=function(){this.removeSegPopover()},t.prototype.renderDayRowHtml=function(e,t){var n=this.theme,r=["fc-row","fc-week",n.getClass("dayRow")]
t&&r.push("fc-rigid")
var i=new ii(this.context)
return'<div class="'+r.join(" ")+'"><div class="fc-bg"><table class="'+n.getClass("tableGrid")+'">'+i.renderHtml({cells:this.props.cells[e],dateProfile:this.props.dateProfile,renderIntroHtml:this.renderProps.renderBgIntroHtml})+'</table></div><div class="fc-content-skeleton"><table>'+(this.getIsNumbersVisible()?"<thead>"+this.renderNumberTrHtml(e)+"</thead>":"")+"</table></div></div>"},t.prototype.getIsNumbersVisible=function(){return this.getIsDayNumbersVisible()||this.renderProps.cellWeekNumbersVisible||this.renderProps.colWeekNumbersVisible},t.prototype.getIsDayNumbersVisible=function(){return this.rowCnt>1},t.prototype.renderNumberTrHtml=function(e){var t=this.renderProps.renderNumberIntroHtml(e,this)
return"<tr>"+(this.isRtl?"":t)+this.renderNumberCellsHtml(e)+(this.isRtl?t:"")+"</tr>"},t.prototype.renderNumberCellsHtml=function(e){var t,n,r=[]
for(t=0;t<this.colCnt;t++)n=this.props.cells[e][t].date,r.push(this.renderNumberCellHtml(n))
return this.isRtl&&r.reverse(),r.join("")},t.prototype.renderNumberCellHtml=function(e){var t,n,r=this.view,i=this.dateEnv,o="",a=Xe(this.props.dateProfile.activeRange,e),s=this.getIsDayNumbersVisible()&&a
return s||this.renderProps.cellWeekNumbersVisible?((t=tn(e,this.props.dateProfile,this.context)).unshift("fc-day-top"),this.renderProps.cellWeekNumbersVisible&&(n=i.weekDow),o+='<td class="'+t.join(" ")+'"'+(a?' data-date="'+i.formatIso(e,{omitTime:!0})+'"':"")+">",this.renderProps.cellWeekNumbersVisible&&e.getUTCDay()===n&&(o+=en(r,{date:e,type:"week"},{class:"fc-week-number"},i.format(e,si))),s&&(o+=en(r,e,{class:"fc-day-number"},i.format(e,ai))),o+="</td>"):"<td></td>"},t.prototype.updateSize=function(e){var t=this.fillRenderer,n=this.eventRenderer,r=this.mirrorRenderer;(e||this.isCellSizesDirty||this.view.calendar.isEventsUpdated)&&(this.buildPositionCaches(),this.isCellSizesDirty=!1),t.computeSizes(e),n.computeSizes(e),r.computeSizes(e),t.assignSizes(e),n.assignSizes(e),r.assignSizes(e)},t.prototype.buildPositionCaches=function(){this.buildColPositions(),this.buildRowPositions()},t.prototype.buildColPositions=function(){this.colPositions.build()},t.prototype.buildRowPositions=function(){this.rowPositions.build(),this.rowPositions.bottoms[this.rowCnt-1]+=this.bottomCoordPadding},t.prototype.positionToHit=function(e,t){var n=this.colPositions,r=this.rowPositions,i=n.leftToIndex(e),o=r.topToIndex(t)
if(null!=o&&null!=i)return{row:o,col:i,dateSpan:{range:this.getCellRange(o,i),allDay:!0},dayEl:this.getCellEl(o,i),relativeRect:{left:n.lefts[i],right:n.rights[i],top:r.tops[o],bottom:r.bottoms[o]}}},t.prototype.getCellEl=function(e,t){return this.cellEls[e*this.colCnt+t]},t.prototype._renderEventDrag=function(e){e&&(this.eventRenderer.hideByHash(e.affectedInstances),this.fillRenderer.renderSegs("highlight",e.segs))},t.prototype._unrenderEventDrag=function(e){e&&(this.eventRenderer.showByHash(e.affectedInstances),this.fillRenderer.unrender("highlight"))},t.prototype._renderEventResize=function(e){e&&(this.eventRenderer.hideByHash(e.affectedInstances),this.fillRenderer.renderSegs("highlight",e.segs),this.mirrorRenderer.renderSegs(e.segs,{isResizing:!0,sourceSeg:e.sourceSeg}))},t.prototype._unrenderEventResize=function(e){e&&(this.eventRenderer.showByHash(e.affectedInstances),this.fillRenderer.unrender("highlight"),this.mirrorRenderer.unrender(e.segs,{isResizing:!0,sourceSeg:e.sourceSeg}))},t.prototype.removeSegPopover=function(){this.segPopover&&this.segPopover.hide()},t.prototype.limitRows=function(e){var t,n,r=this.eventRenderer.rowStructs||[]
for(t=0;t<r.length;t++)this.unlimitRow(t),!1!==(n=!!e&&("number"==typeof e?e:this.computeRowLevelLimit(t)))&&this.limitRow(t,n)},t.prototype.computeRowLevelLimit=function(e){var t,n,r=this.rowEls[e].getBoundingClientRect().bottom,i=E(this.eventRenderer.rowStructs[e].tbodyEl)
for(t=0;t<i.length;t++)if((n=i[t]).classList.remove("fc-limited"),n.getBoundingClientRect().bottom>r)return t
return!1},t.prototype.limitRow=function(e,t){var n,r,i,a,s,l,u,c,h,f,p,v,g,m,y,S=this,w=this.colCnt,b=this.isRtl,D=this.eventRenderer.rowStructs[e],T=[],C=0,M=function(n){for(;C<n;)(l=S.getCellSegs(e,C,t)).length&&(h=r[t-1][C],y=S.renderMoreLink(e,C,l),m=o("div",null,y),h.appendChild(m),T.push(m)),C++}
if(t&&t<D.segLevels.length){for(n=D.segLevels[t-1],r=D.cellMatrix,(i=E(D.tbodyEl).slice(t)).forEach((function(e){e.classList.add("fc-limited")})),a=0;a<n.length;a++){s=n[a]
var k=b?w-1-s.lastCol:s.firstCol,I=b?w-1-s.firstCol:s.lastCol
for(M(k),c=[],u=0;C<=I;)l=this.getCellSegs(e,C,t),c.push(l),u+=l.length,C++
if(u){for(f=(h=r[t-1][k]).rowSpan||1,p=[],v=0;v<c.length;v++)g=o("td",{className:"fc-more-cell",rowSpan:f}),l=c[v],y=this.renderMoreLink(e,k+v,[s].concat(l)),m=o("div",null,y),g.appendChild(m),p.push(g),T.push(g)
h.classList.add("fc-limited"),d(h,p),i.push(h)}}M(this.colCnt),D.moreEls=T,D.limitedEls=i}},t.prototype.unlimitRow=function(e){var t=this.eventRenderer.rowStructs[e]
t.moreEls&&(t.moreEls.forEach(f),t.moreEls=null),t.limitedEls&&(t.limitedEls.forEach((function(e){e.classList.remove("fc-limited")})),t.limitedEls=null)},t.prototype.renderMoreLink=function(e,t,n){var r=this,i=this.view,a=this.dateEnv,s=o("a",{className:"fc-more"})
return s.innerText=this.getMoreLinkText(n.length),s.addEventListener("click",(function(o){var s=r.opt("eventLimitClick"),l=r.isRtl?r.colCnt-t-1:t,u=r.props.cells[e][l].date,c=o.currentTarget,d=r.getCellEl(e,t),h=r.getCellSegs(e,t),f=r.resliceDaySegs(h,u),p=r.resliceDaySegs(n,u)
"function"==typeof s&&(s=r.publiclyTrigger("eventLimitClick",[{date:a.toDate(u),allDay:!0,dayEl:d,moreEl:c,segs:f,hiddenSegs:p,jsEvent:o,view:i}])),"popover"===s?r.showSegPopover(e,t,c,f):"string"==typeof s&&i.calendar.zoomTo(u,s)})),s},t.prototype.showSegPopover=function(e,t,n,r){var i,o,a=this,s=this.calendar,l=this.view,u=this.theme,c=this.isRtl?this.colCnt-t-1:t,d=n.parentNode
i=1===this.rowCnt?l.el:this.rowEls[e],o={className:"fc-more-popover "+u.getClass("popover"),parentEl:l.el,top:O(i).top,autoHide:!0,content:function(t){a.segPopoverTile=new ni(a.context,t),a.updateSegPopoverTile(a.props.cells[e][c].date,r)},hide:function(){a.segPopoverTile.destroy(),a.segPopoverTile=null,a.segPopover.destroy(),a.segPopover=null}},this.isRtl?o.right=O(d).right+1:o.left=O(d).left-1,this.segPopover=new Xr(o),this.segPopover.show(),s.releaseAfterSizingTriggers()},t.prototype.resliceDaySegs=function(e,t){for(var n={start:t,end:U(t,1)},r=[],i=0,o=e;i<o.length;i++){var a=o[i],s=a.eventRange,l=s.range,u=We(l,n)
u&&r.push(qr({},a,{eventRange:{def:s.def,ui:qr({},s.ui,{durationEditable:!1}),instance:s.instance,range:u},isStart:a.isStart&&u.start.valueOf()===l.start.valueOf(),isEnd:a.isEnd&&u.end.valueOf()===l.end.valueOf()}))}return r},t.prototype.getMoreLinkText=function(e){var t=this.opt("eventLimitText")
return"function"==typeof t?t(e):"+"+e+" "+t},t.prototype.getCellSegs=function(e,t,n){for(var r,i=this.eventRenderer.rowStructs[e].segMatrix,o=n||0,a=[];o<i.length;)(r=i[o][t])&&a.push(r),o++
return a},t}(pn),ui=ut({week:"numeric"}),ci=function(e){function t(t,n,r,i){var a=e.call(this,t,n,r,i)||this
a.renderHeadIntroHtml=function(){var e=a.theme
return a.colWeekNumbersVisible?'<th class="fc-week-number '+e.getClass("widgetHeader")+'" '+a.weekNumberStyleAttr()+"><span>"+Lt(a.opt("weekLabel"))+"</span></th>":""},a.renderDayGridNumberIntroHtml=function(e,t){var n=a.dateEnv,r=t.props.cells[e][0].date
return a.colWeekNumbersVisible?'<td class="fc-week-number" '+a.weekNumberStyleAttr()+">"+en(a,{date:r,type:"week",forceOff:1===t.colCnt},n.format(r,ui))+"</td>":""},a.renderDayGridBgIntroHtml=function(){var e=a.theme
return a.colWeekNumbersVisible?'<td class="fc-week-number '+e.getClass("widgetContent")+'" '+a.weekNumberStyleAttr()+"></td>":""},a.renderDayGridIntroHtml=function(){return a.colWeekNumbersVisible?'<td class="fc-week-number" '+a.weekNumberStyleAttr()+"></td>":""},a.el.classList.add("fc-dayGrid-view"),a.el.innerHTML=a.renderSkeletonHtml(),a.scroller=new cn("hidden","auto")
var s=a.scroller.el
a.el.querySelector(".fc-body > tr > td").appendChild(s),s.classList.add("fc-day-grid-container")
var l,u=o("div",{className:"fc-day-grid"})
return s.appendChild(u),a.opt("weekNumbers")?a.opt("weekNumbersWithinDays")?(l=!0,a.colWeekNumbersVisible=!1):(l=!1,a.colWeekNumbersVisible=!0):(a.colWeekNumbersVisible=!1,l=!1),a.dayGrid=new li(a.context,u,{renderNumberIntroHtml:a.renderDayGridNumberIntroHtml,renderBgIntroHtml:a.renderDayGridBgIntroHtml,renderIntroHtml:a.renderDayGridIntroHtml,colWeekNumbersVisible:a.colWeekNumbersVisible,cellWeekNumbersVisible:l}),a}return Yr(t,e),t.prototype.destroy=function(){e.prototype.destroy.call(this),this.dayGrid.destroy(),this.scroller.destroy()},t.prototype.renderSkeletonHtml=function(){var e=this.theme
return'<table class="'+e.getClass("tableGrid")+'">'+(this.opt("columnHeader")?'<thead class="fc-head"><tr><td class="fc-head-container '+e.getClass("widgetHeader")+'">&nbsp;</td></tr></thead>':"")+'<tbody class="fc-body"><tr><td class="'+e.getClass("widgetContent")+'"></td></tr></tbody></table>'},t.prototype.weekNumberStyleAttr=function(){return null!=this.weekNumberWidth?'style="width:'+this.weekNumberWidth+'px"':""},t.prototype.hasRigidRows=function(){var e=this.opt("eventLimit")
return e&&"number"!=typeof e},t.prototype.updateSize=function(t,n,r){e.prototype.updateSize.call(this,t,n,r),this.dayGrid.updateSize(t)},t.prototype.updateBaseSize=function(e,t,n){var r,i,o,a,s=this.dayGrid,l=this.opt("eventLimit"),u=this.header?this.header.el:null
s.rowEls?(this.colWeekNumbersVisible&&(this.weekNumberWidth=(o=y(this.el,".fc-week-number"),a=0,o.forEach((function(e){var t=e.firstChild
if(t instanceof HTMLElement){var n=t.getBoundingClientRect().width
n>a&&(a=n)}})),a++,o.forEach((function(e){e.style.width=a+"px"})),a)),this.scroller.clear(),u&&w(u,{marginLeft:"",marginRight:"",borderLeftWidth:"",borderRightWidth:""}),s.removeSegPopover(),l&&"number"==typeof l&&s.limitRows(l),r=this.computeScrollerHeight(t),this.setGridHeight(r,n),l&&"number"!=typeof l&&s.limitRows(l),n||(this.scroller.setHeight(r),((i=this.scroller.getScrollbarWidths()).left||i.right)&&(u&&function(e,t){t.left&&w(e,{borderLeftWidth:1,marginLeft:t.left-1}),t.right&&w(e,{borderRightWidth:1,marginRight:t.right-1})}(u,i),r=this.computeScrollerHeight(t),this.scroller.setHeight(r)),this.scroller.lockOverflow(i))):n||(r=this.computeScrollerHeight(t),this.scroller.setHeight(r))},t.prototype.computeScrollerHeight=function(e){return e-function(e,t){var n={position:"relative",left:-1}
w(e,n),w(t,n)
var r=e.getBoundingClientRect().height-t.getBoundingClientRect().height,i={position:"",left:""}
return w(e,i),w(t,i),r}(this.el,this.scroller.el)},t.prototype.setGridHeight=function(e,t){this.opt("monthMode")?(t&&(e*=this.dayGrid.rowCnt/6),ce(this.dayGrid.rowEls,e,!t)):t?de(this.dayGrid.rowEls):ce(this.dayGrid.rowEls,e,!0)},t.prototype.computeDateScroll=function(e){return{top:0}},t.prototype.queryDateScroll=function(){return{top:this.scroller.getScrollTop()}},t.prototype.applyDateScroll=function(e){void 0!==e.top&&this.scroller.setScrollTop(e.top)},t}(Or)
ci.prototype.dateProfileGeneratorClass=Gr
var di=function(e){function t(t,n){var r=e.call(this,t,n.el)||this
return r.slicer=new hi,r.dayGrid=n,t.calendar.registerInteractiveComponent(r,{el:r.dayGrid.el}),r}return Yr(t,e),t.prototype.destroy=function(){e.prototype.destroy.call(this),this.calendar.unregisterInteractiveComponent(this)},t.prototype.render=function(e){var t=this.dayGrid,n=e.dateProfile,r=e.dayTable
t.receiveProps(qr({},this.slicer.sliceProps(e,n,e.nextDayThreshold,t,r),{dateProfile:n,cells:r.cells,isRigid:e.isRigid}))},t.prototype.buildPositionCaches=function(){this.dayGrid.buildPositionCaches()},t.prototype.queryHit=function(e,t){var n=this.dayGrid.positionToHit(e,t)
if(n)return{component:this.dayGrid,dateSpan:n.dateSpan,dayEl:n.dayEl,rect:{left:n.relativeRect.left,right:n.relativeRect.right,top:n.relativeRect.top,bottom:n.relativeRect.bottom},layer:0}},t}(pn),hi=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Yr(t,e),t.prototype.sliceRange=function(e,t){return t.sliceRange(e)},t}(Zr)
function fi(e,t){var n=new Fr(e.renderRange,t)
return new jr(n,/year|month|week/.test(e.currentRangeUnit))}var pi=gn({defaultView:"dayGridMonth",views:{dayGrid:function(e){function t(t,n,r,i){var o=e.call(this,t,n,r,i)||this
return o.buildDayTable=$e(fi),o.opt("columnHeader")&&(o.header=new Ur(o.context,o.el.querySelector(".fc-head-container"))),o.simpleDayGrid=new di(o.context,o.dayGrid),o}return Yr(t,e),t.prototype.destroy=function(){e.prototype.destroy.call(this),this.header&&this.header.destroy(),this.simpleDayGrid.destroy()},t.prototype.render=function(t){e.prototype.render.call(this,t)
var n=this.props.dateProfile,r=this.dayTable=this.buildDayTable(n,this.dateProfileGenerator)
this.header&&this.header.receiveProps({dateProfile:n,dates:r.headerDates,datesRepDistinctDays:1===r.rowCnt,renderIntroHtml:this.renderHeadIntroHtml}),this.simpleDayGrid.receiveProps({dateProfile:n,dayTable:r,businessHours:t.businessHours,dateSelection:t.dateSelection,eventStore:t.eventStore,eventUiBases:t.eventUiBases,eventSelection:t.eventSelection,eventDrag:t.eventDrag,eventResize:t.eventResize,isRigid:this.hasRigidRows(),nextDayThreshold:this.nextDayThreshold})},t}(ci),dayGridDay:{type:"dayGrid",duration:{days:1}},dayGridWeek:{type:"dayGrid",duration:{weeks:1}},dayGridMonth:{type:"dayGrid",duration:{months:1},monthMode:!0,fixedWeekCount:!0}}}),vi=function(e,t){return(vi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)}
function gi(e,t){function n(){this.constructor=e}vi(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var mi=function(){return(mi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e}).apply(this,arguments)}
Mn.touchMouseIgnoreWait=500
var yi=0,Ei=0,Si=!1,wi=function(){function e(e){var t=this
this.subjectEl=null,this.downEl=null,this.selector="",this.handleSelector="",this.shouldIgnoreMove=!1,this.shouldWatchScroll=!0,this.isDragging=!1,this.isTouchDragging=!1,this.wasTouchScroll=!1,this.handleMouseDown=function(e){if(!t.shouldIgnoreMouse()&&function(e){return 0===e.button&&!e.ctrlKey}(e)&&t.tryStart(e)){var n=t.createEventFromMouse(e,!0)
t.emitter.trigger("pointerdown",n),t.initScrollWatch(n),t.shouldIgnoreMove||document.addEventListener("mousemove",t.handleMouseMove),document.addEventListener("mouseup",t.handleMouseUp)}},this.handleMouseMove=function(e){var n=t.createEventFromMouse(e)
t.recordCoords(n),t.emitter.trigger("pointermove",n)},this.handleMouseUp=function(e){document.removeEventListener("mousemove",t.handleMouseMove),document.removeEventListener("mouseup",t.handleMouseUp),t.emitter.trigger("pointerup",t.createEventFromMouse(e)),t.cleanup()},this.handleTouchStart=function(e){if(t.tryStart(e)){t.isTouchDragging=!0
var n=t.createEventFromTouch(e,!0)
t.emitter.trigger("pointerdown",n),t.initScrollWatch(n)
var r=e.target
t.shouldIgnoreMove||r.addEventListener("touchmove",t.handleTouchMove),r.addEventListener("touchend",t.handleTouchEnd),r.addEventListener("touchcancel",t.handleTouchEnd),window.addEventListener("scroll",t.handleTouchScroll,!0)}},this.handleTouchMove=function(e){var n=t.createEventFromTouch(e)
t.recordCoords(n),t.emitter.trigger("pointermove",n)},this.handleTouchEnd=function(e){if(t.isDragging){var n=e.target
n.removeEventListener("touchmove",t.handleTouchMove),n.removeEventListener("touchend",t.handleTouchEnd),n.removeEventListener("touchcancel",t.handleTouchEnd),window.removeEventListener("scroll",t.handleTouchScroll,!0),t.emitter.trigger("pointerup",t.createEventFromTouch(e)),t.cleanup(),t.isTouchDragging=!1,yi++,setTimeout((function(){yi--}),Mn.touchMouseIgnoreWait)}},this.handleTouchScroll=function(){t.wasTouchScroll=!0},this.handleScroll=function(e){if(!t.shouldIgnoreMove){var n=window.pageXOffset-t.prevScrollX+t.prevPageX,r=window.pageYOffset-t.prevScrollY+t.prevPageY
t.emitter.trigger("pointermove",{origEvent:e,isTouch:t.isTouchDragging,subjectEl:t.subjectEl,pageX:n,pageY:r,deltaX:n-t.origPageX,deltaY:r-t.origPageY})}},this.containerEl=e,this.emitter=new nn,e.addEventListener("mousedown",this.handleMouseDown),e.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),Ei++||window.addEventListener("touchmove",bi,{passive:!1})}return e.prototype.destroy=function(){this.containerEl.removeEventListener("mousedown",this.handleMouseDown),this.containerEl.removeEventListener("touchstart",this.handleTouchStart,{passive:!0}),--Ei||window.removeEventListener("touchmove",bi,{passive:!1})},e.prototype.tryStart=function(e){var t=this.querySubjectEl(e),n=e.target
return!(!t||this.handleSelector&&!g(n,this.handleSelector))&&(this.subjectEl=t,this.downEl=n,this.isDragging=!0,this.wasTouchScroll=!1,!0)},e.prototype.cleanup=function(){Si=!1,this.isDragging=!1,this.subjectEl=null,this.downEl=null,this.destroyScrollWatch()},e.prototype.querySubjectEl=function(e){return this.selector?g(e.target,this.selector):this.containerEl},e.prototype.shouldIgnoreMouse=function(){return yi||this.isTouchDragging},e.prototype.cancelTouchScroll=function(){this.isDragging&&(Si=!0)},e.prototype.initScrollWatch=function(e){this.shouldWatchScroll&&(this.recordCoords(e),window.addEventListener("scroll",this.handleScroll,!0))},e.prototype.recordCoords=function(e){this.shouldWatchScroll&&(this.prevPageX=e.pageX,this.prevPageY=e.pageY,this.prevScrollX=window.pageXOffset,this.prevScrollY=window.pageYOffset)},e.prototype.destroyScrollWatch=function(){this.shouldWatchScroll&&window.removeEventListener("scroll",this.handleScroll,!0)},e.prototype.createEventFromMouse=function(e,t){var n=0,r=0
return t?(this.origPageX=e.pageX,this.origPageY=e.pageY):(n=e.pageX-this.origPageX,r=e.pageY-this.origPageY),{origEvent:e,isTouch:!1,subjectEl:this.subjectEl,pageX:e.pageX,pageY:e.pageY,deltaX:n,deltaY:r}},e.prototype.createEventFromTouch=function(e,t){var n,r,i=e.touches,o=0,a=0
return i&&i.length?(n=i[0].pageX,r=i[0].pageY):(n=e.pageX,r=e.pageY),t?(this.origPageX=n,this.origPageY=r):(o=n-this.origPageX,a=r-this.origPageY),{origEvent:e,isTouch:!0,subjectEl:this.subjectEl,pageX:n,pageY:r,deltaX:o,deltaY:a}},e}()
function bi(e){Si&&e.preventDefault()}var Di=function(){function e(){this.isVisible=!1,this.sourceEl=null,this.mirrorEl=null,this.sourceElRect=null,this.parentNode=document.body,this.zIndex=9999,this.revertDuration=0}return e.prototype.start=function(e,t,n){this.sourceEl=e,this.sourceElRect=this.sourceEl.getBoundingClientRect(),this.origScreenX=t-window.pageXOffset,this.origScreenY=n-window.pageYOffset,this.deltaX=0,this.deltaY=0,this.updateElPosition()},e.prototype.handleMove=function(e,t){this.deltaX=e-window.pageXOffset-this.origScreenX,this.deltaY=t-window.pageYOffset-this.origScreenY,this.updateElPosition()},e.prototype.setIsVisible=function(e){e?this.isVisible||(this.mirrorEl&&(this.mirrorEl.style.display=""),this.isVisible=e,this.updateElPosition()):this.isVisible&&(this.mirrorEl&&(this.mirrorEl.style.display="none"),this.isVisible=e)},e.prototype.stop=function(e,t){var n=this,r=function(){n.cleanup(),t()}
e&&this.mirrorEl&&this.isVisible&&this.revertDuration&&(this.deltaX||this.deltaY)?this.doRevertAnimation(r,this.revertDuration):setTimeout(r,0)},e.prototype.doRevertAnimation=function(e,t){var n=this.mirrorEl,r=this.sourceEl.getBoundingClientRect()
n.style.transition="top "+t+"ms,left "+t+"ms",w(n,{left:r.left,top:r.top}),function(e,t){var n=function(r){t(r),V.forEach((function(t){e.removeEventListener(t,n)}))}
V.forEach((function(t){e.addEventListener(t,n)}))}(n,(function(){n.style.transition="",e()}))},e.prototype.cleanup=function(){this.mirrorEl&&(f(this.mirrorEl),this.mirrorEl=null),this.sourceEl=null},e.prototype.updateElPosition=function(){this.sourceEl&&this.isVisible&&w(this.getMirrorEl(),{left:this.sourceElRect.left+this.deltaX,top:this.sourceElRect.top+this.deltaY})},e.prototype.getMirrorEl=function(){var e=this.sourceElRect,t=this.mirrorEl
return t||((t=this.mirrorEl=this.sourceEl.cloneNode(!0)).classList.add("fc-unselectable"),t.classList.add("fc-dragging"),w(t,{position:"fixed",zIndex:this.zIndex,visibility:"",boxSizing:"border-box",width:e.right-e.left,height:e.bottom-e.top,right:"auto",bottom:"auto",margin:0}),this.parentNode.appendChild(t)),t},e}(),Ti=function(e){function t(t,n){var r=e.call(this)||this
return r.handleScroll=function(){r.scrollTop=r.scrollController.getScrollTop(),r.scrollLeft=r.scrollController.getScrollLeft(),r.handleScrollChange()},r.scrollController=t,r.doesListening=n,r.scrollTop=r.origScrollTop=t.getScrollTop(),r.scrollLeft=r.origScrollLeft=t.getScrollLeft(),r.scrollWidth=t.getScrollWidth(),r.scrollHeight=t.getScrollHeight(),r.clientWidth=t.getClientWidth(),r.clientHeight=t.getClientHeight(),r.clientRect=r.computeClientRect(),r.doesListening&&r.getEventTarget().addEventListener("scroll",r.handleScroll),r}return gi(t,e),t.prototype.destroy=function(){this.doesListening&&this.getEventTarget().removeEventListener("scroll",this.handleScroll)},t.prototype.getScrollTop=function(){return this.scrollTop},t.prototype.getScrollLeft=function(){return this.scrollLeft},t.prototype.setScrollTop=function(e){this.scrollController.setScrollTop(e),this.doesListening||(this.scrollTop=Math.max(Math.min(e,this.getMaxScrollTop()),0),this.handleScrollChange())},t.prototype.setScrollLeft=function(e){this.scrollController.setScrollLeft(e),this.doesListening||(this.scrollLeft=Math.max(Math.min(e,this.getMaxScrollLeft()),0),this.handleScrollChange())},t.prototype.getClientWidth=function(){return this.clientWidth},t.prototype.getClientHeight=function(){return this.clientHeight},t.prototype.getScrollWidth=function(){return this.scrollWidth},t.prototype.getScrollHeight=function(){return this.scrollHeight},t.prototype.handleScrollChange=function(){},t}(sn),Ci=function(e){function t(t,n){return e.call(this,new ln(t),n)||this}return gi(t,e),t.prototype.getEventTarget=function(){return this.scrollController.el},t.prototype.computeClientRect=function(){return R(this.scrollController.el)},t}(Ti),Mi=function(e){function t(t){return e.call(this,new un,t)||this}return gi(t,e),t.prototype.getEventTarget=function(){return window},t.prototype.computeClientRect=function(){return{left:this.scrollLeft,right:this.scrollLeft+this.clientWidth,top:this.scrollTop,bottom:this.scrollTop+this.clientHeight}},t.prototype.handleScrollChange=function(){this.clientRect=this.computeClientRect()},t}(Ti),ki="function"==typeof performance?performance.now:Date.now,Ii=function(){function e(){var e=this
this.isEnabled=!0,this.scrollQuery=[window,".fc-scroller"],this.edgeThreshold=50,this.maxVelocity=300,this.pointerScreenX=null,this.pointerScreenY=null,this.isAnimating=!1,this.scrollCaches=null,this.everMovedUp=!1,this.everMovedDown=!1,this.everMovedLeft=!1,this.everMovedRight=!1,this.animate=function(){if(e.isAnimating){var t=e.computeBestEdge(e.pointerScreenX+window.pageXOffset,e.pointerScreenY+window.pageYOffset)
if(t){var n=ki()
e.handleSide(t,(n-e.msSinceRequest)/1e3),e.requestAnimation(n)}else e.isAnimating=!1}}}return e.prototype.start=function(e,t){this.isEnabled&&(this.scrollCaches=this.buildCaches(),this.pointerScreenX=null,this.pointerScreenY=null,this.everMovedUp=!1,this.everMovedDown=!1,this.everMovedLeft=!1,this.everMovedRight=!1,this.handleMove(e,t))},e.prototype.handleMove=function(e,t){if(this.isEnabled){var n=e-window.pageXOffset,r=t-window.pageYOffset,i=null===this.pointerScreenY?0:r-this.pointerScreenY,o=null===this.pointerScreenX?0:n-this.pointerScreenX
i<0?this.everMovedUp=!0:i>0&&(this.everMovedDown=!0),o<0?this.everMovedLeft=!0:o>0&&(this.everMovedRight=!0),this.pointerScreenX=n,this.pointerScreenY=r,this.isAnimating||(this.isAnimating=!0,this.requestAnimation(ki()))}},e.prototype.stop=function(){if(this.isEnabled){this.isAnimating=!1
for(var e=0,t=this.scrollCaches;e<t.length;e++){t[e].destroy()}this.scrollCaches=null}},e.prototype.requestAnimation=function(e){this.msSinceRequest=e,requestAnimationFrame(this.animate)},e.prototype.handleSide=function(e,t){var n=e.scrollCache,r=this.edgeThreshold,i=r-e.distance,o=i*i/(r*r)*this.maxVelocity*t,a=1
switch(e.name){case"left":a=-1
case"right":n.setScrollLeft(n.getScrollLeft()+o*a)
break
case"top":a=-1
case"bottom":n.setScrollTop(n.getScrollTop()+o*a)}},e.prototype.computeBestEdge=function(e,t){for(var n=this.edgeThreshold,r=null,i=0,o=this.scrollCaches;i<o.length;i++){var a=o[i],s=a.clientRect,l=e-s.left,u=s.right-e,c=t-s.top,d=s.bottom-t
l>=0&&u>=0&&c>=0&&d>=0&&(c<=n&&this.everMovedUp&&a.canScrollUp()&&(!r||r.distance>c)&&(r={scrollCache:a,name:"top",distance:c}),d<=n&&this.everMovedDown&&a.canScrollDown()&&(!r||r.distance>d)&&(r={scrollCache:a,name:"bottom",distance:d}),l<=n&&this.everMovedLeft&&a.canScrollLeft()&&(!r||r.distance>l)&&(r={scrollCache:a,name:"left",distance:l}),u<=n&&this.everMovedRight&&a.canScrollRight()&&(!r||r.distance>u)&&(r={scrollCache:a,name:"right",distance:u}))}return r},e.prototype.buildCaches=function(){return this.queryScrollEls().map((function(e){return e===window?new Mi(!1):new Ci(e,!1)}))},e.prototype.queryScrollEls=function(){for(var e=[],t=0,n=this.scrollQuery;t<n.length;t++){var r=n[t]
"object"==typeof r?e.push(r):e.push.apply(e,Array.prototype.slice.call(document.querySelectorAll(r)))}return e},e}(),Ri=function(e){function t(t){var n=e.call(this,t)||this
n.delay=null,n.minDistance=0,n.touchScrollAllowed=!0,n.mirrorNeedsRevert=!1,n.isInteracting=!1,n.isDragging=!1,n.isDelayEnded=!1,n.isDistanceSurpassed=!1,n.delayTimeoutId=null,n.onPointerDown=function(e){var t
n.isDragging||(n.isInteracting=!0,n.isDelayEnded=!1,n.isDistanceSurpassed=!1,(t=document.body).classList.add("fc-unselectable"),t.addEventListener("selectstart",H),function(e){e.addEventListener("contextmenu",H)}(document.body),e.isTouch||e.origEvent.preventDefault(),n.emitter.trigger("pointerdown",e),n.pointer.shouldIgnoreMove||(n.mirror.setIsVisible(!1),n.mirror.start(e.subjectEl,e.pageX,e.pageY),n.startDelay(e),n.minDistance||n.handleDistanceSurpassed(e)))},n.onPointerMove=function(e){if(n.isInteracting){if(n.emitter.trigger("pointermove",e),!n.isDistanceSurpassed){var t=n.minDistance,r=e.deltaX,i=e.deltaY
r*r+i*i>=t*t&&n.handleDistanceSurpassed(e)}n.isDragging&&("scroll"!==e.origEvent.type&&(n.mirror.handleMove(e.pageX,e.pageY),n.autoScroller.handleMove(e.pageX,e.pageY)),n.emitter.trigger("dragmove",e))}},n.onPointerUp=function(e){var t
n.isInteracting&&(n.isInteracting=!1,(t=document.body).classList.remove("fc-unselectable"),t.removeEventListener("selectstart",H),function(e){e.removeEventListener("contextmenu",H)}(document.body),n.emitter.trigger("pointerup",e),n.isDragging&&(n.autoScroller.stop(),n.tryStopDrag(e)),n.delayTimeoutId&&(clearTimeout(n.delayTimeoutId),n.delayTimeoutId=null))}
var r=n.pointer=new wi(t)
return r.emitter.on("pointerdown",n.onPointerDown),r.emitter.on("pointermove",n.onPointerMove),r.emitter.on("pointerup",n.onPointerUp),n.mirror=new Di,n.autoScroller=new Ii,n}return gi(t,e),t.prototype.destroy=function(){this.pointer.destroy()},t.prototype.startDelay=function(e){var t=this
"number"==typeof this.delay?this.delayTimeoutId=setTimeout((function(){t.delayTimeoutId=null,t.handleDelayEnd(e)}),this.delay):this.handleDelayEnd(e)},t.prototype.handleDelayEnd=function(e){this.isDelayEnded=!0,this.tryStartDrag(e)},t.prototype.handleDistanceSurpassed=function(e){this.isDistanceSurpassed=!0,this.tryStartDrag(e)},t.prototype.tryStartDrag=function(e){this.isDelayEnded&&this.isDistanceSurpassed&&(this.pointer.wasTouchScroll&&!this.touchScrollAllowed||(this.isDragging=!0,this.mirrorNeedsRevert=!1,this.autoScroller.start(e.pageX,e.pageY),this.emitter.trigger("dragstart",e),!1===this.touchScrollAllowed&&this.pointer.cancelTouchScroll()))},t.prototype.tryStopDrag=function(e){this.mirror.stop(this.mirrorNeedsRevert,this.stopDrag.bind(this,e))},t.prototype.stopDrag=function(e){this.isDragging=!1,this.emitter.trigger("dragend",e)},t.prototype.setIgnoreMove=function(e){this.pointer.shouldIgnoreMove=e},t.prototype.setMirrorIsVisible=function(e){this.mirror.setIsVisible(e)},t.prototype.setMirrorNeedsRevert=function(e){this.mirrorNeedsRevert=e},t.prototype.setAutoScrollEnabled=function(e){this.autoScroller.isEnabled=e},t}(Hr),Oi=function(){function e(e){this.origRect=O(e),this.scrollCaches=_(e).map((function(e){return new Ci(e,!0)}))}return e.prototype.destroy=function(){for(var e=0,t=this.scrollCaches;e<t.length;e++){t[e].destroy()}},e.prototype.computeLeft=function(){for(var e=this.origRect.left,t=0,n=this.scrollCaches;t<n.length;t++){var r=n[t]
e+=r.origScrollLeft-r.getScrollLeft()}return e},e.prototype.computeTop=function(){for(var e=this.origRect.top,t=0,n=this.scrollCaches;t<n.length;t++){var r=n[t]
e+=r.origScrollTop-r.getScrollTop()}return e},e.prototype.isWithinClipping=function(e,t){for(var n,r,i={left:e,top:t},o=0,a=this.scrollCaches;o<a.length;o++){var s=a[o]
if(n=s.getEventTarget(),r=void 0,"HTML"!==(r=n.tagName)&&"BODY"!==r&&!D(i,s.clientRect))return!1}return!0},e}()
var Ni=function(){function e(e,t){var n=this
this.useSubjectCenter=!1,this.requireInitial=!0,this.initialHit=null,this.movingHit=null,this.finalHit=null,this.handlePointerDown=function(e){var t=n.dragging
n.initialHit=null,n.movingHit=null,n.finalHit=null,n.prepareHits(),n.processFirstCoord(e),n.initialHit||!n.requireInitial?(t.setIgnoreMove(!1),n.emitter.trigger("pointerdown",e)):t.setIgnoreMove(!0)},this.handleDragStart=function(e){n.emitter.trigger("dragstart",e),n.handleMove(e,!0)},this.handleDragMove=function(e){n.emitter.trigger("dragmove",e),n.handleMove(e)},this.handlePointerUp=function(e){n.releaseHits(),n.emitter.trigger("pointerup",e)},this.handleDragEnd=function(e){n.movingHit&&n.emitter.trigger("hitupdate",null,!0,e),n.finalHit=n.movingHit,n.movingHit=null,n.emitter.trigger("dragend",e)},this.droppableStore=t,e.emitter.on("pointerdown",this.handlePointerDown),e.emitter.on("dragstart",this.handleDragStart),e.emitter.on("dragmove",this.handleDragMove),e.emitter.on("pointerup",this.handlePointerUp),e.emitter.on("dragend",this.handleDragEnd),this.dragging=e,this.emitter=new nn}return e.prototype.processFirstCoord=function(e){var t,n,r,i={left:e.pageX,top:e.pageY},o=i,a=e.subjectEl
a!==document&&(t=O(a),n=o,r=t,o={left:Math.min(Math.max(n.left,r.left),r.right),top:Math.min(Math.max(n.top,r.top),r.bottom)})
var s,l,u=this.initialHit=this.queryHitForOffset(o.left,o.top)
if(u){if(this.useSubjectCenter&&t){var c=T(t,u.rect)
c&&(o=function(e){return{left:(e.left+e.right)/2,top:(e.top+e.bottom)/2}}(c))}this.coordAdjust=(l=i,{left:(s=o).left-l.left,top:s.top-l.top})}else this.coordAdjust={left:0,top:0}},e.prototype.handleMove=function(e,t){var n=this.queryHitForOffset(e.pageX+this.coordAdjust.left,e.pageY+this.coordAdjust.top)
!t&&Pi(this.movingHit,n)||(this.movingHit=n,this.emitter.trigger("hitupdate",n,!1,e))},e.prototype.prepareHits=function(){this.offsetTrackers=Ne(this.droppableStore,(function(e){return e.component.buildPositionCaches(),new Oi(e.el)}))},e.prototype.releaseHits=function(){var e=this.offsetTrackers
for(var t in e)e[t].destroy()
this.offsetTrackers={}},e.prototype.queryHitForOffset=function(e,t){var n=this.droppableStore,r=this.offsetTrackers,i=null
for(var o in n){var a=n[o].component,s=r[o]
if(s.isWithinClipping(e,t)){var l=s.computeLeft(),u=s.computeTop(),c=e-l,d=t-u,h=s.origRect,f=h.right-h.left,p=h.bottom-h.top
if(c>=0&&c<f&&d>=0&&d<p){var v=a.queryHit(c,d,f,p)
!v||a.props.dateProfile&&!Ge(a.props.dateProfile.activeRange,v.dateSpan.range)||i&&!(v.layer>i.layer)||(v.rect.left+=l,v.rect.right+=l,v.rect.top+=u,v.rect.bottom+=u,i=v)}}}return i},e}()
function Pi(e,t){return!e&&!t||Boolean(e)===Boolean(t)&&(n=e.dateSpan,r=t.dateSpan,Ye(n.range,r.range)&&n.allDay===r.allDay&&function(e,t){for(var n in t)if("range"!==n&&"allDay"!==n&&e[n]!==t[n])return!1
for(var n in e)if(!(n in t))return!1
return!0}(n,r))
var n,r}var _i=function(e){function t(t){var n=e.call(this,t)||this
n.handlePointerDown=function(e){var t=n.dragging
t.setIgnoreMove(!n.component.isValidDateDownEl(t.pointer.downEl))},n.handleDragEnd=function(e){var t=n.component
if(!n.dragging.pointer.wasTouchScroll){var r=n.hitDragging,i=r.initialHit,o=r.finalHit
i&&o&&Pi(i,o)&&t.calendar.triggerDateClick(i.dateSpan,i.dayEl,t.view,e.origEvent)}}
var r=t.component
n.dragging=new Ri(r.el),n.dragging.autoScroller.isEnabled=!1
var i=n.hitDragging=new Ni(n.dragging,Er(t))
return i.emitter.on("pointerdown",n.handlePointerDown),i.emitter.on("dragend",n.handleDragEnd),n}return gi(t,e),t.prototype.destroy=function(){this.dragging.destroy()},t}(yr),Li=function(e){function t(t){var n=e.call(this,t)||this
n.dragSelection=null,n.handlePointerDown=function(e){var t=n,r=t.component,i=t.dragging,o=r.opt("selectable")&&r.isValidDateDownEl(e.origEvent.target)
i.setIgnoreMove(!o),i.delay=e.isTouch?function(e){var t=e.opt("selectLongPressDelay")
null==t&&(t=e.opt("longPressDelay"))
return t}(r):null},n.handleDragStart=function(e){n.component.calendar.unselect(e)},n.handleHitUpdate=function(e,t){var r=n.component.calendar,i=null,o=!1
e&&((i=function(e,t,n){var r=e.dateSpan,i=t.dateSpan,o=[r.range.start,r.range.end,i.range.start,i.range.end]
o.sort(ve)
for(var a={},s=0,l=n;s<l.length;s++){var u=(0,l[s])(e,t)
if(!1===u)return null
u&&mi(a,u)}return a.range={start:o[0],end:o[3]},a.allDay=r.allDay,a}(n.hitDragging.initialHit,e,r.pluginSystem.hooks.dateSelectionTransformers))&&n.component.isDateSelectionValid(i)||(o=!0,i=null)),i?r.dispatch({type:"SELECT_DATES",selection:i}):t||r.dispatch({type:"UNSELECT_DATES"}),o?le():ue(),t||(n.dragSelection=i)},n.handlePointerUp=function(e){n.dragSelection&&(n.component.calendar.triggerDateSelect(n.dragSelection,e),n.dragSelection=null)}
var r=t.component,i=n.dragging=new Ri(r.el)
i.touchScrollAllowed=!1,i.minDistance=r.opt("selectMinDistance")||0,i.autoScroller.isEnabled=r.opt("dragScroll")
var o=n.hitDragging=new Ni(n.dragging,Er(t))
return o.emitter.on("pointerdown",n.handlePointerDown),o.emitter.on("dragstart",n.handleDragStart),o.emitter.on("hitupdate",n.handleHitUpdate),o.emitter.on("pointerup",n.handlePointerUp),n}return gi(t,e),t.prototype.destroy=function(){this.dragging.destroy()},t}(yr)
var Hi=function(e){function t(n){var r=e.call(this,n)||this
r.subjectSeg=null,r.isDragging=!1,r.eventRange=null,r.relevantEvents=null,r.receivingCalendar=null,r.validMutation=null,r.mutatedRelevantEvents=null,r.handlePointerDown=function(e){var t=e.origEvent.target,n=r,i=n.component,o=n.dragging,a=o.mirror,s=i.calendar,l=r.subjectSeg=yt(e.subjectEl),u=(r.eventRange=l.eventRange).instance.instanceId
r.relevantEvents=ze(s.state.eventStore,u),o.minDistance=e.isTouch?0:i.opt("eventDragMinDistance"),o.delay=e.isTouch&&u!==i.props.eventSelection?function(e){var t=e.opt("eventLongPressDelay")
null==t&&(t=e.opt("longPressDelay"))
return t}(i):null,a.parentNode=s.el,a.revertDuration=i.opt("dragRevertDuration")
var c=i.isValidSegDownEl(t)&&!g(t,".fc-resizer")
o.setIgnoreMove(!c),r.isDragging=c&&e.subjectEl.classList.contains("fc-draggable")},r.handleDragStart=function(e){var t=r.component.calendar,n=r.eventRange,i=n.instance.instanceId
e.isTouch?i!==r.component.props.eventSelection&&t.dispatch({type:"SELECT_EVENT",eventInstanceId:i}):t.dispatch({type:"UNSELECT_EVENT"}),r.isDragging&&(t.unselect(e),t.publiclyTrigger("eventDragStart",[{el:r.subjectSeg.el,event:new pt(t,n.def,n.instance),jsEvent:e.origEvent,view:r.component.view}]))},r.handleHitUpdate=function(e,t){if(r.isDragging){var n=r.relevantEvents,i=r.hitDragging.initialHit,o=r.component.calendar,a=null,s=null,l=null,u=!1,c={affectedEvents:n,mutatedEvents:{defs:{},instances:{}},isEvent:!0,origSeg:r.subjectSeg}
if(e){var d=e.component
o===(a=d.calendar)||d.opt("editable")&&d.opt("droppable")?(s=function(e,t,n){var r=e.dateSpan,i=t.dateSpan,o=r.range.start,a=i.range.start,s={}
r.allDay!==i.allDay&&(s.allDay=i.allDay,s.hasEnd=t.component.opt("allDayMaintainDuration"),i.allDay&&(o=B(o)))
var l=De(o,a,e.component.dateEnv,e.component===t.component?e.component.largeUnit:null)
l.milliseconds&&(s.allDay=!1)
for(var u={datesDelta:l,standardProps:s},c=0,d=n;c<d.length;c++){(0,d[c])(u,e,t)}return u}(i,e,a.pluginSystem.hooks.eventDragMutationMassagers))&&(l=wt(n,a.eventUiBases,s,a),c.mutatedEvents=l,d.isInteractionValid(c)||(u=!0,s=null,l=null,c.mutatedEvents={defs:{},instances:{}})):a=null}r.displayDrag(a,c),u?le():ue(),t||(o===a&&Pi(i,e)&&(s=null),r.dragging.setMirrorNeedsRevert(!s),r.dragging.setMirrorIsVisible(!e||!document.querySelector(".fc-mirror")),r.receivingCalendar=a,r.validMutation=s,r.mutatedRelevantEvents=l)}},r.handlePointerUp=function(){r.isDragging||r.cleanup()},r.handleDragEnd=function(e){if(r.isDragging){var t=r.component.calendar,n=r.component.view,i=r,o=i.receivingCalendar,a=i.validMutation,s=r.eventRange.def,l=r.eventRange.instance,u=new pt(t,s,l),c=r.relevantEvents,d=r.mutatedRelevantEvents,h=r.hitDragging.finalHit
if(r.clearDrag(),t.publiclyTrigger("eventDragStop",[{el:r.subjectSeg.el,event:u,jsEvent:e.origEvent,view:n}]),a){if(o===t){t.dispatch({type:"MERGE_EVENTS",eventStore:d})
for(var f={},p=0,v=t.pluginSystem.hooks.eventDropTransformers;p<v.length;p++){var g=v[p]
mi(f,g(a,t))}var m=mi({},f,{el:e.subjectEl,delta:a.datesDelta,oldEvent:u,event:new pt(t,d.defs[s.defId],l?d.instances[l.instanceId]:null),revert:function(){t.dispatch({type:"MERGE_EVENTS",eventStore:c})},jsEvent:e.origEvent,view:n})
t.publiclyTrigger("eventDrop",[m])}else if(o){t.publiclyTrigger("eventLeave",[{draggedEl:e.subjectEl,event:u,view:n}]),t.dispatch({type:"REMOVE_EVENT_INSTANCES",instances:r.mutatedRelevantEvents.instances}),o.dispatch({type:"MERGE_EVENTS",eventStore:r.mutatedRelevantEvents}),e.isTouch&&o.dispatch({type:"SELECT_EVENT",eventInstanceId:l.instanceId})
var y=mi({},o.buildDatePointApi(h.dateSpan),{draggedEl:e.subjectEl,jsEvent:e.origEvent,view:h.component})
o.publiclyTrigger("drop",[y]),o.publiclyTrigger("eventReceive",[{draggedEl:e.subjectEl,event:new pt(o,d.defs[s.defId],d.instances[l.instanceId]),view:h.component}])}}else t.publiclyTrigger("_noEventDrop")}r.cleanup()}
var i=r.component,o=r.dragging=new Ri(i.el)
o.pointer.selector=t.SELECTOR,o.touchScrollAllowed=!1,o.autoScroller.isEnabled=i.opt("dragScroll")
var a=r.hitDragging=new Ni(r.dragging,Sr)
return a.useSubjectCenter=n.useEventCenter,a.emitter.on("pointerdown",r.handlePointerDown),a.emitter.on("dragstart",r.handleDragStart),a.emitter.on("hitupdate",r.handleHitUpdate),a.emitter.on("pointerup",r.handlePointerUp),a.emitter.on("dragend",r.handleDragEnd),r}return gi(t,e),t.prototype.destroy=function(){this.dragging.destroy()},t.prototype.displayDrag=function(e,t){var n=this.component.calendar,r=this.receivingCalendar
r&&r!==e&&(r===n?r.dispatch({type:"SET_EVENT_DRAG",state:{affectedEvents:t.affectedEvents,mutatedEvents:{defs:{},instances:{}},isEvent:!0,origSeg:t.origSeg}}):r.dispatch({type:"UNSET_EVENT_DRAG"})),e&&e.dispatch({type:"SET_EVENT_DRAG",state:t})},t.prototype.clearDrag=function(){var e=this.component.calendar,t=this.receivingCalendar
t&&t.dispatch({type:"UNSET_EVENT_DRAG"}),e!==t&&e.dispatch({type:"UNSET_EVENT_DRAG"})},t.prototype.cleanup=function(){this.subjectSeg=null,this.isDragging=!1,this.eventRange=null,this.relevantEvents=null,this.receivingCalendar=null,this.validMutation=null,this.mutatedRelevantEvents=null},t.SELECTOR=".fc-draggable, .fc-resizable",t}(yr)
var xi=function(e){function t(t){var n=e.call(this,t)||this
n.draggingSeg=null,n.eventRange=null,n.relevantEvents=null,n.validMutation=null,n.mutatedRelevantEvents=null,n.handlePointerDown=function(e){var t=n.component,r=n.querySeg(e),i=n.eventRange=r.eventRange
n.dragging.minDistance=t.opt("eventDragMinDistance"),n.dragging.setIgnoreMove(!n.component.isValidSegDownEl(e.origEvent.target)||e.isTouch&&n.component.props.eventSelection!==i.instance.instanceId)},n.handleDragStart=function(e){var t=n.component.calendar,r=n.eventRange
n.relevantEvents=ze(t.state.eventStore,n.eventRange.instance.instanceId),n.draggingSeg=n.querySeg(e),t.unselect(),t.publiclyTrigger("eventResizeStart",[{el:n.draggingSeg.el,event:new pt(t,r.def,r.instance),jsEvent:e.origEvent,view:n.component.view}])},n.handleHitUpdate=function(e,t,r){var i=n.component.calendar,o=n.relevantEvents,a=n.hitDragging.initialHit,s=n.eventRange.instance,l=null,u=null,c=!1,d={affectedEvents:o,mutatedEvents:{defs:{},instances:{}},isEvent:!0,origSeg:n.draggingSeg}
e&&(l=function(e,t,n,r,i){for(var o=e.component.dateEnv,a=e.dateSpan.range.start,s=t.dateSpan.range.start,l=De(a,s,o,e.component.largeUnit),u={},c=0,d=i;c<d.length;c++){var h=(0,d[c])(e,t)
if(!1===h)return null
h&&mi(u,h)}if(n){if(o.add(r.start,l)<r.end)return u.startDelta=l,u}else if(o.add(r.end,l)>r.start)return u.endDelta=l,u
return null}(a,e,r.subjectEl.classList.contains("fc-start-resizer"),s.range,i.pluginSystem.hooks.eventResizeJoinTransforms)),l&&(u=wt(o,i.eventUiBases,l,i),d.mutatedEvents=u,n.component.isInteractionValid(d)||(c=!0,l=null,u=null,d.mutatedEvents=null)),u?i.dispatch({type:"SET_EVENT_RESIZE",state:d}):i.dispatch({type:"UNSET_EVENT_RESIZE"}),c?le():ue(),t||(l&&Pi(a,e)&&(l=null),n.validMutation=l,n.mutatedRelevantEvents=u)},n.handleDragEnd=function(e){var t=n.component.calendar,r=n.component.view,i=n.eventRange.def,o=n.eventRange.instance,a=new pt(t,i,o),s=n.relevantEvents,l=n.mutatedRelevantEvents
t.publiclyTrigger("eventResizeStop",[{el:n.draggingSeg.el,event:a,jsEvent:e.origEvent,view:r}]),n.validMutation?(t.dispatch({type:"MERGE_EVENTS",eventStore:l}),t.publiclyTrigger("eventResize",[{el:n.draggingSeg.el,startDelta:n.validMutation.startDelta||te(0),endDelta:n.validMutation.endDelta||te(0),prevEvent:a,event:new pt(t,l.defs[i.defId],o?l.instances[o.instanceId]:null),revert:function(){t.dispatch({type:"MERGE_EVENTS",eventStore:s})},jsEvent:e.origEvent,view:r}])):t.publiclyTrigger("_noEventResize"),n.draggingSeg=null,n.relevantEvents=null,n.validMutation=null}
var r=t.component,i=n.dragging=new Ri(r.el)
i.pointer.selector=".fc-resizer",i.touchScrollAllowed=!1,i.autoScroller.isEnabled=r.opt("dragScroll")
var o=n.hitDragging=new Ni(n.dragging,Er(t))
return o.emitter.on("pointerdown",n.handlePointerDown),o.emitter.on("dragstart",n.handleDragStart),o.emitter.on("hitupdate",n.handleHitUpdate),o.emitter.on("dragend",n.handleDragEnd),n}return gi(t,e),t.prototype.destroy=function(){this.dragging.destroy()},t.prototype.querySeg=function(e){return yt(g(e.subjectEl,this.component.fgSegSelector))},t}(yr)
var Vi=function(){function e(e){var t=this
this.isRecentPointerDateSelect=!1,this.onSelect=function(e){e.jsEvent&&(t.isRecentPointerDateSelect=!0)},this.onDocumentPointerUp=function(e){var n=t,r=n.calendar,i=n.documentPointer,o=r.state
if(!i.wasTouchScroll){if(o.dateSelection&&!t.isRecentPointerDateSelect){var a=r.viewOpt("unselectAuto"),s=r.viewOpt("unselectCancel")
!a||a&&g(i.downEl,s)||r.unselect(e)}o.eventSelection&&!g(i.downEl,Hi.SELECTOR)&&r.dispatch({type:"UNSELECT_EVENT"})}t.isRecentPointerDateSelect=!1},this.calendar=e
var n=this.documentPointer=new wi(document)
n.shouldIgnoreMove=!0,n.shouldWatchScroll=!1,n.emitter.on("pointerup",this.onDocumentPointerUp),e.on("select",this.onSelect)}return e.prototype.destroy=function(){this.calendar.off("select",this.onSelect),this.documentPointer.destroy()},e}(),zi=function(){function e(e,t){var n=this
this.receivingCalendar=null,this.droppableEvent=null,this.suppliedDragMeta=null,this.dragMeta=null,this.handleDragStart=function(e){n.dragMeta=n.buildDragMeta(e.subjectEl)},this.handleHitUpdate=function(e,t,r){var i=n.hitDragging.dragging,o=null,a=null,s=!1,l={affectedEvents:{defs:{},instances:{}},mutatedEvents:{defs:{},instances:{}},isEvent:n.dragMeta.create,origSeg:null}
e&&(o=e.component.calendar,n.canDropElOnCalendar(r.subjectEl,o)&&(a=function(e,t,n){for(var r=mi({},t.leftoverProps),i=0,o=n.pluginSystem.hooks.externalDefTransforms;i<o.length;i++){var a=o[i]
mi(r,a(e,t))}var s=qt(r,t.sourceId,e.allDay,n.opt("forceEventDuration")||Boolean(t.duration),n),l=e.range.start
e.allDay&&t.startTime&&(l=n.dateEnv.add(l,t.startTime))
var u=t.duration?n.dateEnv.add(l,t.duration):n.getDefaultEventEnd(e.allDay,l),c=Gt(s.defId,{start:l,end:u})
return{def:s,instance:c}}(e.dateSpan,n.dragMeta,o),l.mutatedEvents=xe(a),(s=!kt(l,o))&&(l.mutatedEvents={defs:{},instances:{}},a=null))),n.displayDrag(o,l),i.setMirrorIsVisible(t||!a||!document.querySelector(".fc-mirror")),s?le():ue(),t||(i.setMirrorNeedsRevert(!a),n.receivingCalendar=o,n.droppableEvent=a)},this.handleDragEnd=function(e){var t=n,r=t.receivingCalendar,i=t.droppableEvent
if(n.clearDrag(),r&&i){var o=n.hitDragging.finalHit,a=o.component.view,s=n.dragMeta,l=mi({},r.buildDatePointApi(o.dateSpan),{draggedEl:e.subjectEl,jsEvent:e.origEvent,view:a})
r.publiclyTrigger("drop",[l]),s.create&&(r.dispatch({type:"MERGE_EVENTS",eventStore:xe(i)}),e.isTouch&&r.dispatch({type:"SELECT_EVENT",eventInstanceId:i.instance.instanceId}),r.publiclyTrigger("eventReceive",[{draggedEl:e.subjectEl,event:new pt(r,i.def,i.instance),view:a}]))}n.receivingCalendar=null,n.droppableEvent=null}
var r=this.hitDragging=new Ni(e,Sr)
r.requireInitial=!1,r.emitter.on("dragstart",this.handleDragStart),r.emitter.on("hitupdate",this.handleHitUpdate),r.emitter.on("dragend",this.handleDragEnd),this.suppliedDragMeta=t}return e.prototype.buildDragMeta=function(e){return"object"==typeof this.suppliedDragMeta?zr(this.suppliedDragMeta):"function"==typeof this.suppliedDragMeta?zr(this.suppliedDragMeta(e)):zr((t=function(e,t){var n=Mn.dataAttrPrefix,r=(n?n+"-":"")+t
return e.getAttribute("data-"+r)||""}(e,"event"))?JSON.parse(t):{create:!1})
var t},e.prototype.displayDrag=function(e,t){var n=this.receivingCalendar
n&&n!==e&&n.dispatch({type:"UNSET_EVENT_DRAG"}),e&&e.dispatch({type:"SET_EVENT_DRAG",state:t})},e.prototype.clearDrag=function(){this.receivingCalendar&&this.receivingCalendar.dispatch({type:"UNSET_EVENT_DRAG"})},e.prototype.canDropElOnCalendar=function(e,t){var n=t.opt("dropAccept")
return"function"==typeof n?n(e):"string"!=typeof n||!n||Boolean(m(e,n))},e}()
Mn.dataAttrPrefix=""
!function(){function e(e,t){var n=this
void 0===t&&(t={}),this.handlePointerDown=function(e){var t=n.dragging,r=n.settings,i=r.minDistance,o=r.longPressDelay
t.minDistance=null!=i?i:e.isTouch?0:kn.eventDragMinDistance,t.delay=e.isTouch?null!=o?o:kn.longPressDelay:0},this.handleDragStart=function(e){e.isTouch&&n.dragging.delay&&e.subjectEl.classList.contains("fc-event")&&n.dragging.mirror.getMirrorEl().classList.add("fc-selected")},this.settings=t
var r=this.dragging=new Ri(e)
r.touchScrollAllowed=!1,null!=t.itemSelector&&(r.pointer.selector=t.itemSelector),null!=t.appendTo&&(r.mirror.parentNode=t.appendTo),r.emitter.on("pointerdown",this.handlePointerDown),r.emitter.on("dragstart",this.handleDragStart),new zi(r,t.eventData)}e.prototype.destroy=function(){this.dragging.destroy()}}()
var Ai=function(e){function t(t){var n=e.call(this,t)||this
n.shouldIgnoreMove=!1,n.mirrorSelector="",n.currentMirrorEl=null,n.handlePointerDown=function(e){n.emitter.trigger("pointerdown",e),n.shouldIgnoreMove||n.emitter.trigger("dragstart",e)},n.handlePointerMove=function(e){n.shouldIgnoreMove||n.emitter.trigger("dragmove",e)},n.handlePointerUp=function(e){n.emitter.trigger("pointerup",e),n.shouldIgnoreMove||n.emitter.trigger("dragend",e)}
var r=n.pointer=new wi(t)
return r.emitter.on("pointerdown",n.handlePointerDown),r.emitter.on("pointermove",n.handlePointerMove),r.emitter.on("pointerup",n.handlePointerUp),n}return gi(t,e),t.prototype.destroy=function(){this.pointer.destroy()},t.prototype.setIgnoreMove=function(e){this.shouldIgnoreMove=e},t.prototype.setMirrorIsVisible=function(e){if(e)this.currentMirrorEl&&(this.currentMirrorEl.style.visibility="",this.currentMirrorEl=null)
else{var t=this.mirrorSelector?document.querySelector(this.mirrorSelector):null
t&&(this.currentMirrorEl=t,t.style.visibility="hidden")}},t}(Hr),Ui=(function(){function e(e,t){var n=document
e===document||e instanceof Element?(n=e,t=t||{}):t=e||{}
var r=this.dragging=new Ai(n)
"string"==typeof t.itemSelector?r.pointer.selector=t.itemSelector:n===document&&(r.pointer.selector="[data-event]"),"string"==typeof t.mirrorSelector&&(r.mirrorSelector=t.mirrorSelector),new zi(r,t.eventData)}e.prototype.destroy=function(){this.dragging.destroy()}}(),gn({componentInteractions:[_i,Li,Hi,xi],calendarInteractions:[Vi],elementDraggingImpl:Ri})),Fi=n(0),ji=function(e,t){return(ji=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)}
function Zi(e,t,n){return Fi.DateTime.fromObject({zone:t,locale:n,year:e[0],month:e[1]+1,day:e[2],hour:e[3],minute:e[4],second:e[5],millisecond:e[6]})}var Bi=gn({cmdFormatter:function(e,t){var n=function e(t){var n=t.match(/^(.*?)\{(.*)\}(.*)$/)
if(n){var r=e(n[2])
return{head:n[1],middle:r,tail:n[3],whole:n[1]+r.whole+n[3]}}return{head:null,middle:null,tail:null,whole:t}}(e)
if(t.end){var r=Zi(t.start.array,t.timeZone,t.localeCodes[0]),i=Zi(t.end.array,t.timeZone,t.localeCodes[0])
return function e(t,n,r,i){if(t.middle){var o=n(t.head),a=e(t.middle,n,r,i),s=n(t.tail),l=r(t.head),u=e(t.middle,n,r,i),c=r(t.tail)
if(o===l&&s===c)return o+(a===u?a:a+i+u)+s}var d=n(t.whole),h=r(t.whole)
return d===h?d:d+i+h}(n,r.toFormat.bind(r),i.toFormat.bind(i),t.separator)}return Zi(t.date.array,t.timeZone,t.localeCodes[0]).toFormat(n.whole)},namedTimeZonedImpl:function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function n(){this.constructor=e}ji(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.offsetForArray=function(e){return Zi(e,this.timeZoneName).offset},t.prototype.timestampToArray=function(e){return[(t=Fi.DateTime.fromMillis(e,{zone:this.timeZoneName})).year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond]
var t},t}(Lr)})
const Wi="BaseElementIndex.siteId"
class Yi{constructor({$button:e,menu:t,onChange:n}){this.handleSiteChange=e=>{const{$button:t,menu:n}=this,r=$(e.selectedOption).addClass("sel")
n.$options.removeClass("sel"),t.html(r.html())
const i=parseInt(r.data("site-id"))
this.setSite(i)},this.$button=e,this.onChange=n,this.menu=t,t.on("optionselect",this.handleSiteChange),this.siteId=this.getInitialSiteId()}getDefaultSiteId(){const{menu:e}=this
let t=e.$options.filter(".sel:first")
return t.length||(t=e.$options.first()),t.length?parseInt(t.data("site-id")):null}getInitialSiteId(){const e=this.getDefaultSiteId(),t=Craft.getLocalStorage(Wi)
return t&&t!=e?(this.selectSiteId(t),t):e}selectSiteId(e){const{menu:t}=this,n=t.$options.filter(`[data-site-id="${e}"]:first`)
n.length&&n.trigger("click")}setSite(e){Craft.setLocalStorage(Wi,e),this.siteId=e,this.onChange(e)}static tryCreate(e){const t=$("#main-container .sitemenubtn:first")
if(!t.length)return null
const{menu:n}=t.menubtn().data("menubtn")
return n?new Yi({$button:t,menu:n,onChange:e}):null}}n(2),n(3),n(4)
const qi="CalendarField.Calendar.defaultDate"
class Gi{constructor(e,t){this.handleDatesRender=()=>{const{calendar:e}=this
e&&Craft.setLocalStorage(qi,e.getDate())},this.handleEventClick=({event:e})=>{const{editUrl:t}=e.extendedProps
t&&window.location.assign(t)},this.handleEventChange=({event:e,revert:t})=>{const{eventId:n}=e.extendedProps
let{allDay:r,end:i,start:o}=e
if(r&&!i&&(i=o),!i||!o)return t()
const a={dateStart:o.toISOString(),dateEnd:i.toISOString()}
Craft.postActionRequest("calendarfield/calendar/update-event",{eventId:n,attributes:a},e=>{null===e?t():this.calendar.refetchEvents()})},this.update=()=>{const{calendar:e}=this
e&&(e.removeAllEventSources(),e.addEventSource(this.getEventSource()))},"string"==typeof e&&(e=document.querySelector(e)),this.element=e,this.options=t,this.siteMenu=this.initSiteMenu(),this.calendar=this.initCalendar(t),this.update()}initCalendar({input:e}){const{element:t}=this,n=new Tr(t,Object.assign(Object.assign({},e),{datesRender:this.handleDatesRender,defaultDate:this.getDefaultDate(),editable:!0,eventClick:this.handleEventClick,eventDrop:this.handleEventChange,eventResize:this.handleEventChange,height:"parent",plugins:[pi,Ui,Bi]}))
return n.render(),n}getDefaultDate(){let e=Craft.getLocalStorage(qi)
return e||(e=new Date),e}getEventSource(){const{siteMenu:e}=this,{eventsUrl:t}=this.options,n={}
return e&&(n.siteId=e.siteId),{url:Craft.getActionUrl("calendarfield/calendar/fetch-events"),extraParams:n}}initSiteMenu(){return Yi.tryCreate(this.update)}}var Xi;(Xi=window).CalendarField=Object.assign(Object.assign({},Xi.CalendarField||{}),{Calendar:Gi})}])
