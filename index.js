(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.r(t),e.d(t,{CuahuitlDOM:()=>a,Validator:()=>n});var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"isValidElement",value:function(e){return null!=e}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.validator=new n}var t,r;return t=e,(r=[{key:"findAndThen",value:function(e,t,r){var n=document.querySelector(e),o=this.validator.isValidElement(n),a=this.validator.isValidElement(t),i=this.validator.isValidElement(r);return o&&a?t(n):i?r():void 0}}])&&o(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();exports.CuahuitlDOM=t.CuahuitlDOM,exports.Validator=t.Validator,Object.defineProperty(exports,"__esModule",{value:!0})})();