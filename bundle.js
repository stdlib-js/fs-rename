// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).rename=t()}(this,(function(){"use strict";function e(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return t({},"x",{}),!0}catch(e){return!1}},n=Object.defineProperty,o=Object.prototype,a=o.toString,u=o.__defineGetter__,i=o.__defineSetter__,l=o.__lookupGetter__,c=o.__lookupSetter__;var f=n,_=function(e,t,r){var n,f,_,p;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(l.call(e,t)||c.call(e,t)?(n=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),_="get"in r,p="set"in r,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&u&&u.call(e,t,r.get),p&&i&&i.call(e,t,r.set),e},p=r()?f:_;var d=function(e,t,r){p(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})},b=e(Object.freeze({__proto__:null,default:{}})),y=b.rename;var s=function(e,t,r){y(e,t,r)},v=b.renameSync;var j=s;return d(j,"sync",(function(e,t){try{v(e,t)}catch(e){return e}return null})),j}));
//# sourceMappingURL=bundle.js.map
