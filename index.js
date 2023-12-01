// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,i=Object.defineProperty;function t(e){return"number"==typeof e}function a(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function n(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+a(n):a(n)+e,t&&(e="-"+e)),e}var o=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function c(e){var r,i,a;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,a=parseInt(i,10),!isFinite(a)){if(!t(i))throw new Error("invalid integer. Value: "+i);a=0}return a<0&&("u"===e.specifier||10!==r)&&(a=4294967295+a+1),a<0?(i=(-a).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=a.toString(r),a||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===s.call(e.specifier)?s.call(i):o.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function p(e){return"string"==typeof e}var l=Math.abs,u=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,w=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,y=/\.0*e/,m=/(\..*[^0])0*e/;function _(e){var r,i,a=parseFloat(e.arg);if(!isFinite(a)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);a=e.arg}switch(e.specifier){case"e":case"E":i=a.toExponential(e.precision);break;case"f":case"F":i=a.toFixed(e.precision);break;case"g":case"G":l(a)<1e-4?((r=e.precision)>0&&(r-=1),i=a.toExponential(r)):i=a.toPrecision(e.precision),e.alternate||(i=g.call(i,m,"$1e"),i=g.call(i,y,"e"),i=g.call(i,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=g.call(i,d,"e+0$1"),i=g.call(i,h,"e-0$1"),e.alternate&&(i=g.call(i,w,"$1."),i=g.call(i,b,"$1.e")),a>=0&&e.sign&&(i=e.sign+i),i=e.specifier===f.call(e.specifier)?f.call(i):u.call(i)}function x(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function k(e,r,i){var t=r-e.length;return t<0?e:e=i?e+x(t):x(t)+e}var E=String.fromCharCode,S=isNaN,$=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,i,t,a,o,s,l,u,f;if(!$(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",l=1,u=0;u<e.length;u++)if(p(t=e[u]))s+=t;else{if(r=void 0!==t.precision,!(t=j(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(a=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,S(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=c(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=_(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=k(t.arg,t.width,t.padRight)),s+=t.arg||"",l+=1}return s}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,i,t,a;for(i=[],a=0,t=T.exec(e);t;)(r=e.slice(a,T.lastIndex-t[0].length)).length&&i.push(r),i.push(F(t)),a=T.lastIndex,t=T.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function I(e){return"string"==typeof e}function C(e){var r,i,t;if(!I(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=A(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return V.apply(null,i)}var R,O=Object.prototype,P=O.toString,Z=O.__defineGetter__,G=O.__defineSetter__,W=O.__lookupGetter__,L=O.__lookupSetter__;R=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?i:function(e,r,i){var t,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===P.call(i))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((a="value"in i)&&(W.call(e,r)||L.call(e,r)?(t=e.__proto__,e.__proto__=O,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),n="get"in i,o="set"in i,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&Z&&Z.call(e,r,i.get),o&&G&&G.call(e,r,i.set),e};var q=R,N=e.rename;function U(e,r,i){N(e,r,i)}var X=e.renameSync;return q(U,"sync",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r){try{X(e,r)}catch(e){return e}return null}}),U},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("fs")):"function"==typeof define&&define.amd?define(["fs"],r):(e="undefined"!=typeof globalThis?globalThis:e||self).rename=r(e.require$$0);
//# sourceMappingURL=index.js.map
