// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,r=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,l=n.__lookupGetter__,c=n.__lookupSetter__;t=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var i,p,_,f;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((p="value"in r)&&(l.call(e,t)||c.call(e,t)?(i=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=i):e[t]=r.value),_="get"in r,f="set"in r,p&&(_||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,t,r.get),f&&u&&u.call(e,t,r.set),e};var i=t;function p(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){if(this instanceof e){var r=[null];r.push.apply(r,arguments);var n=Function.bind.apply(t,r);return new n}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var _=p(Object.freeze({__proto__:null,default:{}})),f=_.rename;function y(e,t,r){f(e,t,r)}var b=_.renameSync;function s(e,t){try{b(e,t)}catch(e){return e}return null}i(y,"sync",{configurable:!1,enumerable:!1,writable:!1,value:s});export{y as default,s as sync};
//# sourceMappingURL=mod.js.map
