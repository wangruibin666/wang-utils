!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).wang={})}(this,function(e){"use strict";function r(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){(t=null==t?window:t).tempFn=e;for(var n=arguments.length,r=new Array(2<n?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];e=t.tempFn.apply(t,r);return delete t.tempFn,e}function t(e,t,n){for(var r=n,o=0;o<e.length;o++)r=t(r,e[o],o);return r}function s(e,t){for(var n=[],r=0;r<e.length;r++){var o=e[r];t(o,r)&&n.push(o)}return n}function n(e,t){for(var n=0;n<e.length;n++)if(t(e[n],n))return!0;return!1}function l(e){for(var t=u(e),n=arguments.length,r=new Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return r.forEach(function(e){Array.isArray(e)?t.push.apply(t,u(e)):t.push(e)}),t}function p(e){switch(Object.prototype.toString.call(e)){case"[object Boolean]":return"bool";case"[object Number]":return"number";case"[object String]":return"string";case"[object Undefined]":return"undefined";case"[object Null]":return"null";case"[object Array]":return"array";case"[object Object]":return"object";case"[object Function]":return"function";case"[object Date]":return"date";case"[object RegExp]":return"regExp";case"[object Error]":return"error";case"[object Symbol]":return"symbol";case"[object Promise]":return"promise";case"[object Set]":return"set";default:return"sorry! unrecognized"}}function h(e,t){var n,r,o,a;if(arguments.length<1)return!0;for(n=1,r=arguments.length;n<r;n++)if(o=[],a=[],!function e(t,n){if(isNaN(t)&&isNaN(n)&&"number"==typeof t&&"number"==typeof n)return 1;if(t===n)return 1;if("function"==typeof t&&"function"==typeof n||t instanceof Date&&n instanceof Date||t instanceof RegExp&&n instanceof RegExp||t instanceof String&&n instanceof String||t instanceof Number&&n instanceof Number)return t.toString()===n.toString();if(t instanceof Object&&n instanceof Object&&!t.isPrototypeOf(n)&&!n.isPrototypeOf(t)&&t.constructor===n.constructor&&t.prototype===n.prototype&&!(-1<o.indexOf(t)||-1<a.indexOf(n))){for(var r in n){if(n.hasOwnProperty(r)!==t.hasOwnProperty(r))return;if(i(n[r])!==i(t[r]))return}for(r in t){if(n.hasOwnProperty(r)!==t.hasOwnProperty(r))return;if(i(n[r])!==i(t[r]))return;switch(i(t[r])){case"object":case"function":if(o.push(t),a.push(n),!e(t[r],n[r]))return;o.pop(),a.pop();break;default:if(t[r]!==n[r])return}}return 1}}(e,arguments[n]))return!1;return!0}function g(e){for(var t=[],n=arguments.length,r=new Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0;a<e.length;a++){var i=e[a];-1!==r.indexOf(i)&&(e.splice(a,1),t.push(i),a--)}return t}function y(e){return e.split("").reverse().join("")}function v(e){var a=e.url,t=e.method,i=void 0===t?"GET":t,t=e.params,u=void 0===t?{}:t,e=e.data,c=void 0===e?{}:e;return new Promise(function(n,r){i=i.toUpperCase();var t="";Object.keys(u).forEach(function(e){t+="".concat(e,"=").concat(u[e],"&")}),t&&(t=t.substring(0,t.length-1),a+="?"+t);var o=new XMLHttpRequest;o.open(i,a,!0),"GET"===i?o.send():"POST"!==i&&"PUT"!==i&&"DELETE"!==i||(o.setRequestHeader("Content-Type","application/json;charset=utf-8"),o.send(JSON.stringify(c))),o.onreadystatechange=function(){var e,t;4===o.readyState&&(e=o.status,t=o.statusText,200<=e&&e<=299?(t={data:JSON.parse(o.response),status:e,statusText:t},n(t)):r(new Error("request error status is "+e)))}})}v.get=function(e,t){return v(Object.assign(t,{url:e,method:"GET"}))},v.delete=function(e,t){return v(Object.assign(t,{url:e,method:"DELETE"}))},v.post=function(e,t,n){return v(Object.assign(n,{url:e,data:t,method:"POST"}))},v.put=function(e,t,n){return v(Object.assign(n,{url:e,data:t,method:"PUT"}))};var b={},d={};b.on=function(e,t){var n=d[e];n?n.push(t):d[e]=[t]},b.emit=function(e,t){e=d[e];e&&0<e.length&&e.forEach(function(e){e(t)})},b.off=function(e){e?delete d[e]:d={}};var m="pending",w="resolved",O="rejected";function j(e){var n=this;function t(t){n.status===m&&(n.status=O,n.data=t,0<n.callbacks.length&&setTimeout(function(){n.callbacks.forEach(function(e){e.onRejected(t)})}))}n.status=m,n.data=void 0,n.callbacks=[];try{e(function(t){n.status===m&&(n.status=w,n.data=t,0<n.callbacks.length&&setTimeout(function(){n.callbacks.forEach(function(e){e.onResolved(t)})}))},t)}catch(e){console.log("-----"),t(e)}}j.prototype.then=function(o,a){var i=this;return o="function"==typeof o?o:function(e){return e},a="function"==typeof a?a:function(e){throw e},new j(function(n,r){function t(e){try{var t=e(i.data);t instanceof j?t.then(function(e){return n(e)},function(e){return r(e)}):n(t)}catch(e){r(e)}}i.status===w?setTimeout(function(){t(o)}):i.status===O?setTimeout(function(){t(a)}):i.callbacks.push({onResolved:function(e){t(o)},onRejected:function(e){t(a)}})})},j.prototype.catch=function(e){return this.then(void 0,e)},j.resolve=function(n){return new j(function(e,t){n instanceof j?n.then(e,t):e(n)})},j.reject=function(n){return new j(function(e,t){t(n)})},j.all=function(i){return new j(function(n,r){var o=0,a=new Array(i.length);i.forEach(function(e,t){e.then(function(e){o++,a[t]=e,o===i.length&&n(a)},function(e){return r(e)})})})},j.race=function(e){return new j(function(t,n){e.forEach(function(e){e.then(t,n)})})},j.resolveDelay=function(n,r){return new j(function(e,t){setTimeout(function(){n instanceof j?n.then(e,t):e(n)},r)})},j.rejectDelay=function(n,r){return new j(function(e,t){setTimeout(function(){t(n)},r)})};var k={},S={},E=0;function A(e){for(var t=e.length,n=t;1<n;){n=Math.floor(n/2),console.log(n);for(var r=n;r<t;r++){for(var o=e[r],a=r-n;0<=a&&e[a]>o;)e[a+n]=e[a],a-=n;e[a+n]=o}}return e}k.subscribe=function(e,t){var n="token_"+ ++E,r=S[e];return r?r[n]=t:S[e]=a({},n,t),n},k.publish=function(e,t){var n=S[e];n&&setTimeout(function(){Object.values(n).forEach(function(e){e(t)})},0)},k.publishSync=function(e,t){e=S[e];e&&Object.values(e).forEach(function(e){e(t)})},k.unsubscribe=function(t){if(void 0===t)S={};else{if("string"!=typeof t)throw new Error("如果传入参数, 必须是字符串类型");var e;0===t.indexOf("token_")?(e=Object.values(S).find(function(e){return e.hasOwnProperty(t)}))&&delete e[t]:delete S[t]}},console.log(A([5,7,9,3,2,6,10,1]));var x=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.ls=window.localStorage,this.ss=window.sessionStorage}var t,n,r;return t=e,(n=[{key:"setCookie",value:function(e,t,n){var r,o=e;if("Object"===Object.prototype.toString.call(o).slice(8,-1))for(var a in o)(r=new Date).setDate(r.getDate()+n),document.cookie=a+"="+o[a]+";expires="+r;else(r=new Date).setDate(r.getDate()+n),document.cookie=e+"="+t+";expires="+r}},{key:"getCookie",value:function(e){for(var t=document.cookie.split("; "),n=0;n<t.length;n++){var r=t[n].split("=");if(r[0]==e)return r[1]}return""}},{key:"removeCookie",value:function(e){this.setCookie(e,1,-1)}},{key:"setLocal",value:function(e,t){var n=e;if("Object"===Object.prototype.toString.call(n).slice(8,-1))for(var r in n)this.ls.setItem(r,JSON.stringify(n[r]));else this.ls.setItem(e,JSON.stringify(t))}},{key:"getLocal",value:function(e){return e?JSON.parse(this.ls.getItem(e)):null}},{key:"removeLocal",value:function(e){this.ls.removeItem(e)}},{key:"clearLocal",value:function(){this.ls.clear()}},{key:"setSession",value:function(e,t){var n=e;if("Object"===Object.prototype.toString.call(n).slice(8,-1))for(var r in n)this.ss.setItem(r,JSON.stringify(n[r]));else this.ss.setItem(e,JSON.stringify(t))}},{key:"getSession",value:function(e){return e?JSON.parse(this.ss.getItem(e)):null}},{key:"removeSession",value:function(e){this.ss.removeItem(e)}},{key:"clearSession",value:function(){this.ss.clear()}}])&&o(t.prototype,n),r&&o(t,r),e}());e.PriorityQueue=function(){var o=[];function a(e,t){this.data=e,this.priority=t}this.enqueue=function(e,t){if(t<0||100<t)throw new Error("优先级值必须在0到100之间");var n=new a(e,t);if(0===o.length)o.push(n);else{for(var r=0;r<o.length;r++)if(o[r].priority>t)return void o.splice(r,0,n);o.push(n)}},this.dequeue=function(){return o.shift()},this.front=function(){return o[0]},this.size=function(){return o.length},this.isEmpty=function(){return 0===o.length}},e.Promise=j,e.PubSub=k,e.Queue=function(){var t=[];this.enqueue=function(e){t.push(e)},this.dequeue=function(){return t.shift()},this.front=function(){return t[0]},this.size=function(){return t.length},this.isEmpty=function(){return 0===t.length}},e.Stack=function(){var t=[];this.push=function(e){t.push(e)},this.pop=function(){return t.pop()},this.peek=function(){return t[t.length-1]},this.size=function(){return t.length},this.isEmpty=function(){return 0===t.length},this.clear=function(){t=[]}},e.amountToChinese=function(e){if(e=(e=(e=(e="number"==typeof e?new String(e):e).replace(/,/g,"")).replace(/ /g,"")).replace(/￥/g,""),isNaN(e))return"";for(var t=String(e).split("."),n="",r=t[0].length-1;0<=r;r--){if(10<t[0].length)return"";var o="",a=t[0].charAt(r);switch(a){case"0":o="零"+o;break;case"1":o="壹"+o;break;case"2":o="贰"+o;break;case"3":o="叁"+o;break;case"4":o="肆"+o;break;case"5":o="伍"+o;break;case"6":o="陆"+o;break;case"7":o="柒"+o;break;case"8":o="捌"+o;break;case"9":o="玖"+o}switch(t[0].length-r-1){case 0:o+="元";break;case 1:0!=a&&(o+="拾");break;case 2:0!=a&&(o+="佰");break;case 3:0!=a&&(o+="仟");break;case 4:o+="万";break;case 5:0!=a&&(o+="拾");break;case 6:0!=a&&(o+="佰");break;case 7:0!=a&&(o+="仟");break;case 8:o+="亿";break;case 9:o+="拾"}n=o+n}if(-1!=e.indexOf("."))for(2<t[1].length&&(t[1]=t[1].substr(0,2)),r=0;r<t[1].length;r++){switch(o="",a=t[1].charAt(r)){case"0":o="零"+o;break;case"1":o="壹"+o;break;case"2":o="贰"+o;break;case"3":o="叁"+o;break;case"4":o="肆"+o;break;case"5":o="伍"+o;break;case"6":o="陆"+o;break;case"7":o="柒"+o;break;case"8":o="捌"+o;break;case"9":o="玖"+o}0==r&&(o+="角"),1==r&&(o+="分"),n+=o}for(;-1!=n.search("零零");)n=n.replace("零零","零");return"元"==(n=(n=(n=(n=(n=(n=n.replace("零亿","亿")).replace("亿万","亿")).replace("零万","万")).replace("零元","元")).replace("零角","")).replace("零分","")).charAt(n.length-1)&&(n+="整"),n},e.apply=function(e,t,n){return(t=null==t?window:t).tempFn=e,n=t.tempFn.apply(t,u(n)),delete t.tempFn,n},e.axios=v,e.bind=function(r,o){for(var e=arguments.length,a=new Array(2<e?e-2:0),t=2;t<e;t++)a[t-2]=arguments[t];return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return f.apply(void 0,[r,o].concat(a,t))}},e.browserType=function(){var e=navigator.userAgent,t=-1<e.indexOf("Opera"),n=-1<e.indexOf("compatible")&&-1<e.indexOf("MSIE")&&!t,r=-1<e.indexOf("Trident")&&-1<e.indexOf("rv:11.0"),o=-1<e.indexOf("Edge")&&!n,a=-1<e.indexOf("Firefox"),i=-1<e.indexOf("Safari")&&-1==e.indexOf("Chrome"),u=-1<e.indexOf("Chrome")&&-1<e.indexOf("Safari");if(n){new RegExp("MSIE (\\d+\\.\\d+);").test(e);e=parseFloat(RegExp.$1);return 7==e?"IE7":8==e?"IE8":9==e?"IE9":10==e?"IE10":"IE7以下"}return r?"IE11":o?"Edge":a?"FF":t?"Opera":i?"Safari":u?"Chrome":void 0},e.bubbleSort=function(e){for(var t=e.length-1;0<t;t--)for(var n,r=0;r<t;r++)e[r]>e[r+1]&&(n=[e[r],e[r+1]],e[r+1]=n[0],e[r]=n[1]);return e},e.call=f,e.changeCase=function(e,t){switch(t=t||4){case 1:return e.replace(/\b\w+\b/g,function(e){return e.substring(0,1).toUpperCase()+e.substring(1).toLowerCase()});case 2:return e.replace(/\b\w+\b/g,function(e){return e.substring(0,1).toLowerCase()+e.substring(1).toUpperCase()});case 3:return e.split("").map(function(e){return/[a-z]/.test(e)?e.toUpperCase():e.toLowerCase()}).join("");case 4:return e.toUpperCase();case 5:return e.toLowerCase();default:return e}},e.chunk=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1,n=[],r=[];return 0===e.length||(t<1&&(t=1),e.forEach(function(e){0===r.length&&n.push(r),r.push(e),r.length===t&&(r=[])})),n},e.clone=function(e){return e instanceof Array?e.reduce(function(e,t){return e.push(t),e},[]):null!==e&&"object"===i(e)?function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach(function(e){a(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},e):e},e.compact=function(e){return s(e,function(e){return e})},e.compareArr=function e(t,n){if("array"!=p(t)||"array"!=p(n))return"参数错误";if(t===n)return!0;if(t.length!=n.length)return!1;for(var r in t){if(p(t[r])!=p(n[r]))return!1;if("object".includes(p(t[r]))){if(!h(t[r],n[r]))return!1}else if("array"==p(t[r]))e(t[r],n[r]);else if(t[r]!=n[r])return!1}return!0},e.compareObj=h,e.concat=l,e.dateByday=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"-",n=new Date,r=n.getTime();return n.setTime(parseInt(r+864e5*e)),r=n.getFullYear(),(e=(n.getMonth()+1).toString()).length<=1&&(e="0"+e),n=n.getDate().toString(),r+t+e+t+(n=n.length<=1?"0"+n:n)},e.debounce=function(n,r){return function(e){var t=this;n.hasOwnProperty("timeoutId")&&clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.call(t,e),delete n.timeoutId},r)}},e.deepClone=function n(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:new Map;if(e instanceof Array||null!==e&&"object"===i(e)){var o=r.get(e);if(o)return o;if(e instanceof Array)o=[],r.set(e,o),e.forEach(function(e,t){o[t]=n(e,r)});else for(var t in o={},r.set(e,o),e)e.hasOwnProperty(t)&&(o[t]=n(e[t],r));return o}return e},e.deepClone1=function(e){return JSON.parse(JSON.stringify(e))},e.deepClone2=function e(t){if(t instanceof Array||null!==t&&"object"===i(t)){var n,r=t instanceof Array?[]:{};for(n in t)t.hasOwnProperty(n)&&(r[n]=e(t[n]));return r}return t},e.deepClone3=function e(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:new Map;if(t instanceof Array||null!==t&&"object"===i(t)){var r,o=n.get(t);if(o)return o;for(r in o=t instanceof Array?[]:{},n.set(t,o),t)t.hasOwnProperty(r)&&(o[r]=e(t[r],n));return o}return t},e.deepFlatten=function(e){var t,n=this;return Array.isArray(e)?(t=e.map(function(e){return Array.isArray(e)?n.deepFlatten(e):e}),(e=[]).concat.apply(e,u(t))):[]},e.difference=function(e,t){return 0===e.length?[]:0===t.length?u(e):s(e,function(e){return-1===t.indexOf(e)})},e.differences=function(e){for(var t=arguments.length,r=new Array(1<t?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return 0===e.length?[]:0===r.length?u(e):s(e,function(e){for(var t=!0,n=0;n<r.length;n++)if(-1!==r[n].indexOf(e)){t=!1;break}return t})},e.drop=function(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1;return 0==e.length?[]:(n<1&&(n=1),e.filter(function(e,t){return n<=t}))},e.dropRight=function(n){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1;return 0==n.length?[]:(r<1&&(r=1),n.filter(function(e,t){return t<n.length-r}))},e.eventBus=b,e.every=function(e,t){for(var n=0;n<e.length;n++)if(!t(e[n],n))return!1;return!0},e.extractTree=function(e,r,o){var a=[];return function e(t){return t.forEach(function(t){var n={};o.forEach(function(e){n[e]=t[e]}),a.push(n),t[r]&&e(t[r])}),a}(e)},e.filter=s,e.find=function(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(t(r,n))return r}},e.findIndex=function(e,t){for(var n=0;n<e.length;n++)if(t(e[n],n))return n;return-1},e.flatten1=function n(e){return t(e,function(e,t){return Array.isArray(t)?e=l(e,n(t)):e.push(t),e},[])},e.flatten2=function(e){for(var t=l.apply(void 0,[[]].concat(u(e)));n(t,function(e){return Array.isArray(e)});)t=l.apply(void 0,[[]].concat(u(t)));return t},e.formatAmount=function(e){if(isNaN(e))return!1;amounts=Math.abs(e),amounts=""+Number(amounts).toFixed(2);for(var t=(n=amounts.split("."))[0],n="."+n[1],r=/(\d+)(\d{3})/;r.test(t);)t=t.replace(r,"$1,$2");return 0<e?t+n:"-"+t+n},e.formatFloat=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1,n=2<arguments.length?arguments[2]:void 0,r=parseFloat(e);if(isNaN(r))return!1;var o=(r="ceil"===n?Math.ceil(e*Math.pow(10,t))/Math.pow(10,t):"floor"===n?Math.floor(e*Math.pow(10,t))/Math.pow(10,t):Math.round(e*Math.pow(10,t))/Math.pow(10,t)).toString(),a=o.indexOf(".");for(a<0&&(a=o.length,o+=".");o.length<=a+t;)o+="0";return o},e.getDate=function(e,t){if(e&&isNaN(e))return!1;if((e+"").includes("."))return!1;function n(e){return e<10?"0"+e:e}e=e||(new Date).getTime();var r=(e=new Date(Number(e))).getFullYear(),o=e.getMonth()+1,a=e.getDate(),i=e.getHours(),u=e.getMinutes(),c=e.getSeconds();switch(t){case"year":return r;case"month":return r+"-"+n(o);case"day":return r+"-"+n(o)+"-"+n(a);case"hour":return r+"-"+n(o)+"-"+n(a)+" "+n(i);case"minute":return r+"-"+n(o)+"-"+n(a)+" "+n(i)+":"+n(u);default:return r+"-"+n(o)+"-"+n(a)+" "+n(i)+":"+n(u)+":"+n(c)}},e.getQuery=function(e){var t={};arr=e.split("?")[1].split("&");for(var n=0;n<arr.length;n++){var r=arr[n].split("="),o=r[0],r=r[1];t[o]=r}return t},e.insertSort=function(e){for(var t=e.length,n=1;n<t;n++){for(var r=e[n],o=n-1;0<=o&&e[o]>r;)e[o+1]=e[o],o--;e[o+1]=r}return e},e.makeTree=function(e,i,u){var t=e.filter(function(e){return 0===e[i]});return function o(e,a){e.map(function(r){a.map(function(e,t){var n;e[i]===r.id&&((n=JSON.parse(JSON.stringify(a))).splice(t,1),o([e],n),r[u]?r[u].push(e):r[u]=[e])})})}(t,e.filter(function(e){return 0!==e[i]})),t},e.map=function(e,t){for(var n=[],r=0;r<e.length;r++){var o=t(e[r],r);n.push(o)}return n},e.mergeArray=function(e){for(var t=u(e),n=arguments.length,r=new Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return 0===r.length||r.forEach(function(e){e.forEach(function(e){-1===t.indexOf(e)&&t.push(e)})}),t},e.mergeObject=function(){for(var r={},e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.forEach(function(n){Object.keys(n).forEach(function(e){var t=n[e];r.hasOwnProperty(e)?r[e]=l([],r[e],t):r[e]=t})}),r},e.myInstanceOf=function(e,t){for(var n=e.__proto__;null!==n;){if(n===t.prototype)return!0;n=n.__proto__}return!1},e.newInstance=function(e){for(var t={},n=arguments.length,r=new Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];var a=e.apply(t,r);return a instanceof Object?a:(t.__proto__=e.prototype,t)},e.numToChinese=function(e){for(var t=new Array("零","一","二","三","四","五","六","七","八","九","十"),n=new Array("","十","百","仟","萬","億","点",""),r=(""+e).replace(/(^0*)/g,"").split("."),o=0,a="",i=r[0].length-1;0<=i;i--){switch(o){case 0:a=n[7]+a;break;case 4:new RegExp("0{4}//d{"+(r[0].length-i-1)+"}$").test(r[0])||(a=n[4]+a);break;case 8:a=n[5]+a,n[7]=n[5],o=0}o%4==2&&0!=r[0].charAt(i+2)&&0==r[0].charAt(i+1)&&(a=t[0]+a),0!=r[0].charAt(i)&&(a=t[r[0].charAt(i)]+n[o%4]+a),o++}if(1<r.length){a+=n[6];for(i=0;i<r[1].length;i++)a+=t[r[1].charAt(i)]}return a=(a="一十"==a?"十":a).match(/^一/)&&3==a.length?a.replace("一",""):a},e.palindrome=function(e){return e===y(e)},e.pull=g,e.pullAll=function(e,t){return g.apply(void 0,[e].concat(u(t)))},e.random=function(e,t){return 2===arguments.length?Math.floor(e+Math.random()*(t+1-e)):null},e.reduce=t,e.reverseString=y,e.selectSort=function(e){for(var t=e.length,n=0;n<t-1;n++){for(var r,o=n,a=n+1;a<t;a++)e[o]>e[a]&&(o=a);o!==n&&(r=[e[o],e[n]],e[n]=r[0],e[o]=r[1])}return e},e.shellSort=A,e.slice=function(e,t,n){var r=[];if(0===e.length)return r;(n=n||e.length)>e.length&&(n=e.length);for(var o=t=(t=t||0)<0?0:t;o<n;o++)r.push(e[o]);return r},e.some=n,e.stampInterval=function(e,t){var n=t<e?e:t,r=t<e?t:e,t=[0,0,0,0],e="",r=r<n?parseInt((n-r)/1e3):0;return t[0]=86400<r?parseInt(r/86400):0,r-=86400*t[0],t[1]=3600<r?parseInt(r/3600):0,r-=3600*t[1],t[2]=60<r?parseInt(r/60):0,t[3]=r-60*t[2],e=0<t[0]?t[0]+"天":"",e+=t[0]<=0&&t[1]<=0?"":t[1]+"小时",(e+=t[0]<=0&&t[1]<=0&&t[2]<=0?"":t[2]+"分钟")+(t[0]<=0&&t[1]<=0&&t[2]<=0&&t[3]<=0?"":t[3]+"秒")},e.storage=x,e.sumBigNumber=function(e,t){var n="",r=0;for(e=e.split(""),t=t.split("");e.length||t.length||r;)n=(r+=~~e.pop()+~~t.pop())%10+n,r=9<r;return n.replace(/^0+/,"")},e.throttle=function(n,r){var o=0;return function(e){console.log("事件 throttle");var t=Date.now();r<t-o&&(n.call(this,e),o=t)}},e.trim=function(e,t){switch(t=t||1){case 1:return e.replace(/\s+/g,"");case 2:return e.replace(/(^\s*)|(\s*$)/g,"");case 3:return e.replace(/(^\s*)/g,"");case 4:return e.replace(/(\s*$)/g,"");default:return e}},e.truncate=function(e,t){return e.length>t?e.substring(0,t)+"...":e},e.unique=function(e){var t=[],n={};return e.forEach(function(e){n.hasOwnProperty(e)||(t.push(e),n[e]=!0)}),t},e.uniqueByAttr=function(e,n){var r={};return e.reduce(function(e,t){return r[t[n]]||(r[t[n]]=e.push(t)),e},[])},Object.defineProperty(e,"__esModule",{value:!0})});
