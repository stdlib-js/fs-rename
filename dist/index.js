"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=t(function(x,a){
var m=require("fs").rename;function v(e,r,n){m(e,r,n)}a.exports=v
});var s=t(function(f,i){
var y=require("fs").renameSync;function o(e,r){try{y(e,r)}catch(n){return n}return null}i.exports=o
});var q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=u(),l=s();q(c,"sync",l);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
