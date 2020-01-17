/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.1.1 (2019-10-28)
 */

!function(s){"use strict";function o(){}function a(t){return function(){return t}}function t(t){return t}function e(){return l}var n,r=tinymce.util.Tools.resolve("tinymce.PluginManager"),u=a(!1),c=a(!0),l=(n={fold:function(t,e){return t()},is:u,isSome:u,isNone:c,getOr:d,getOrThunk:f,getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:a(null),getOrUndefined:a(undefined),or:d,orThunk:f,map:e,each:o,bind:e,exists:u,forall:c,filter:e,equals:i,equals_:i,toArray:function(){return[]},toString:a("none()")},Object.freeze&&Object.freeze(n),n);function i(t){return t.isNone()}function f(t){return t()}function d(t){return t}function m(e){return function(t){return function(t){if(null===t)return"null";var e=typeof t;return"object"==e&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"==e&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":e}(t)===e}}function v(t){for(var e=[],n=0,r=t.length;n<r;++n){if(!U(t[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+t);S.apply(e,t[n])}return e}var p,g,h,y,b=function(n){function t(){return i}function e(t){return t(n)}var r=a(n),i={fold:function(t,e){return e(n)},is:function(t){return n===t},isSome:c,isNone:u,getOr:r,getOrThunk:r,getOrDie:r,getOrNull:r,getOrUndefined:r,or:t,orThunk:t,map:function(t){return b(t(n))},each:function(t){t(n)},bind:e,exists:e,forall:e,filter:function(t){return t(n)?i:l},toArray:function(){return[n]},toString:function(){return"some("+n+")"},equals:function(t){return t.is(n)},equals_:function(t,e){return t.fold(u,function(t){return e(n,t)})}};return i},w={some:b,none:e,from:function(t){return null===t||t===undefined?l:b(t)}},T=m("string"),_=m("object"),U=m("array"),x=m("boolean"),A=m("function"),I=Array.prototype.slice,S=Array.prototype.push,D=(A(Array.from)&&Array.from,function(){return(D=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)}),O={},C={exports:O};p=undefined,g=O,h=C,y=undefined,function(t){"object"==typeof g&&void 0!==h?h.exports=t():"function"==typeof p&&p.amd?p([],t):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).EphoxContactWrapper=t()}(function(){return function s(o,a,u){function c(e,t){if(!a[e]){if(!o[e]){var n="function"==typeof y&&y;if(!t&&n)return n(e,!0);if(l)return l(e,!0);var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}var i=a[e]={exports:{}};o[e][0].call(i.exports,function(t){return c(o[e][1][t]||t)},i,i.exports,s,o,a,u)}return a[e].exports}for(var l="function"==typeof y&&y,t=0;t<u.length;t++)c(u[t]);return c}({1:[function(t,e,n){var r,i,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(t){if(r===setTimeout)return setTimeout(t,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(t){r=a}try{i="function"==typeof clearTimeout?clearTimeout:u}catch(t){i=u}}();var l,s=[],f=!1,d=-1;function m(){f&&l&&(f=!1,l.length?s=l.concat(s):d=-1,s.length&&p())}function p(){if(!f){var t=c(m);f=!0;for(var e=s.length;e;){for(l=s,s=[];++d<e;)l&&l[d].run();d=-1,e=s.length}l=null,f=!1,function n(t){if(i===clearTimeout)return clearTimeout(t);if((i===u||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{return i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function g(t,e){this.fun=t,this.array=e}function h(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new g(t,e)),1!==s.length||f||c(p)},g.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},{}],2:[function(t,f,e){(function(e){function r(){}function o(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=undefined,this._deferreds=[],s(t,this)}function i(r,i){for(;3===r._state;)r=r._value;0!==r._state?(r._handled=!0,o._immediateFn(function(){var t=1===r._state?i.onFulfilled:i.onRejected;if(null!==t){var e;try{e=t(r._value)}catch(n){return void u(i.promise,n)}a(i.promise,e)}else(1===r._state?a:u)(i.promise,r._value)})):r._deferreds.push(i)}function a(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof o)return t._state=3,t._value=e,void c(t);if("function"==typeof n)return void s(function r(t,e){return function(){t.apply(e,arguments)}}(n,e),t)}t._state=1,t._value=e,c(t)}catch(i){u(t,i)}}function u(t,e){t._state=2,t._value=e,c(t)}function c(t){2===t._state&&0===t._deferreds.length&&o._immediateFn(function(){t._handled||o._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)i(t,t._deferreds[e]);t._deferreds=null}function l(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function s(t,e){var n=!1;try{t(function(t){n||(n=!0,a(e,t))},function(t){n||(n=!0,u(e,t))})}catch(r){if(n)return;n=!0,u(e,r)}}var t,n;t=this,n=setTimeout,o.prototype["catch"]=function(t){return this.then(null,t)},o.prototype.then=function(t,e){var n=new this.constructor(r);return i(this,new l(t,e,n)),n},o.all=function(t){var c=Array.prototype.slice.call(t);return new o(function(i,o){if(0===c.length)return i([]);var a=c.length;function u(e,t){try{if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if("function"==typeof n)return void n.call(t,function(t){u(e,t)},o)}c[e]=t,0==--a&&i(c)}catch(r){o(r)}}for(var t=0;t<c.length;t++)u(t,c[t])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(t){t(e)})},o.reject=function(n){return new o(function(t,e){e(n)})},o.race=function(i){return new o(function(t,e){for(var n=0,r=i.length;n<r;n++)i[n].then(t,e)})},o._immediateFn="function"==typeof e?function(t){e(t)}:function(t){n(t,0)},o._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},o._setImmediateFn=function(t){o._immediateFn=t},o._setUnhandledRejectionFn=function(t){o._unhandledRejectionFn=t},void 0!==f&&f.exports?f.exports=o:t.Promise||(t.Promise=o)}).call(this,t("timers").setImmediate)},{timers:3}],3:[function(c,t,l){(function(t,e){var r=c("process/browser.js").nextTick,n=Function.prototype.apply,i=Array.prototype.slice,o={},a=0;function u(t,e){this._id=t,this._clearFn=e}l.setTimeout=function(){return new u(n.call(setTimeout,window,arguments),clearTimeout)},l.setInterval=function(){return new u(n.call(setInterval,window,arguments),clearInterval)},l.clearTimeout=l.clearInterval=function(t){t.close()},u.prototype.unref=u.prototype.ref=function(){},u.prototype.close=function(){this._clearFn.call(window,this._id)},l.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},l.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},l._unrefActive=l.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;0<=e&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},l.setImmediate="function"==typeof t?t:function(t){var e=a++,n=!(arguments.length<2)&&i.call(arguments,1);return o[e]=!0,r(function(){o[e]&&(n?t.apply(null,n):t.call(null),l.clearImmediate(e))}),e},l.clearImmediate="function"==typeof e?e:function(t){delete o[t]}}).call(this,c("timers").setImmediate,c("timers").clearImmediate)},{"process/browser.js":1,timers:3}],4:[function(t,e,n){var r=t("promise-polyfill"),i="undefined"!=typeof window?window:Function("return this;")();e.exports={boltExport:i.Promise||r}},{"promise-polyfill":2}]},{},[4])(4)});function P(t){s.setTimeout(function(){throw t},0)}function E(t){return vt(mt(t))}function L(a){return function(){for(var t=new Array(arguments.length),e=0;e<t.length;e++)t[e]=arguments[e];if(0===t.length)throw new Error("Can't merge zero objects");for(var n={},r=0;r<t.length;r++){var i=t[r];for(var o in i)wt.call(i,o)&&(n[o]=a(n[o],i[o]))}return n}}function N(t){var e=t.imageList.map(function(t){return{name:"images",type:"selectbox",label:"Image list",items:t}}),n=t.classList.map(function(t){return{name:"classes",type:"selectbox",label:"Class",items:t}});return v([[{name:"src",type:"urlinput",filetype:"image",label:"Source"}],e.toArray(),t.hasDescription?[{name:"alt",type:"input",label:"Image description"}]:[],t.hasImageTitle?[{name:"title",type:"input",label:"Image title"}]:[],t.hasDimensions?[{name:"dimensions",type:"sizeinput"}]:[],[{type:"grid",columns:2,items:v([n.toArray(),t.hasImageCaption?[{type:"label",label:"Caption",items:[{type:"checkbox",name:"caption",label:"Show caption"}]}]:[]])}]])}function j(t,e){return Math.max(parseInt(t,10),parseInt(e,10))}function R(t){return t.style.marginLeft&&t.style.marginRight&&t.style.marginLeft===t.style.marginRight?Et(t.style.marginLeft):""}function F(t){return t.style.marginTop&&t.style.marginBottom&&t.style.marginTop===t.style.marginBottom?Et(t.style.marginTop):""}function k(t){return t.style.borderWidth?Et(t.style.borderWidth):""}function z(t,e){return t.hasAttribute(e)?t.getAttribute(e):""}function M(t,e){return t.style[e]?t.style[e]:""}function H(t){return null!==t.parentNode&&"FIGURE"===t.parentNode.nodeName}function B(t,e,n){t.setAttribute(e,n)}function G(t){H(t)?function(t){var e=t.parentNode;zt.insertAfter(t,e),zt.remove(e)}(t):function(t){var e=zt.create("figure",{"class":"image"});zt.insertAfter(e,t),e.appendChild(t),e.appendChild(zt.create("figcaption",{contentEditable:"true"},"Caption")),e.contentEditable="false"}(t)}function W(t,e){var n=t.getAttribute("style"),r=e(null!==n?n:"");0<r.length?(t.setAttribute("style",r),t.setAttribute("data-mce-style",r)):t.removeAttribute("style")}function q(t,r){return function(t,e,n){t.style[e]?(t.style[e]=Lt(n),W(t,r)):B(t,e,n)}}function $(t,e){return t.style[e]?Et(t.style[e]):z(t,e)}function J(t,e){var n=Lt(e);t.style.marginLeft=n,t.style.marginRight=n}function V(t,e){var n=Lt(e);t.style.marginTop=n,t.style.marginBottom=n}function X(t,e){var n=Lt(e);t.style.borderWidth=n}function Z(t,e){t.style.borderStyle=e}function K(t){return"FIGURE"===t.nodeName}function Q(t,e){var n=s.document.createElement("img");return B(n,"style",e.style),!R(n)&&""===e.hspace||J(n,e.hspace),!F(n)&&""===e.vspace||V(n,e.vspace),!k(n)&&""===e.border||X(n,e.border),!function(t){return M(t,"borderStyle")}(n)&&""===e.borderStyle||Z(n,e.borderStyle),t(n.getAttribute("style"))}function Y(t,e){return{src:z(e,"src"),alt:z(e,"alt"),title:z(e,"title"),width:$(e,"width"),height:$(e,"height"),"class":z(e,"class"),style:t(z(e,"style")),caption:H(e),hspace:R(e),vspace:F(e),border:k(e),borderStyle:M(e,"borderStyle")}}function tt(t,e,n,r,i){n[r]!==e[r]&&i(t,r,n[r])}function et(r,i){return function(t,e,n){r(t,n),W(t,i)}}function nt(t,e){var n=t.dom.styles.parse(e),r=Nt(n),i=t.dom.styles.parse(t.dom.styles.serialize(r));return t.dom.styles.serialize(i)}function rt(t){var e=t.selection.getNode(),n=t.dom.getParent(e,"figure.image");return n?t.dom.select("img",n)[0]:e&&("IMG"!==e.nodeName||kt(e))?null:e}function it(e,t){var n=e.dom,r=n.getParent(t.parentNode,function(t){return e.schema.getTextBlockElements()[t.nodeName]},e.getBody());return r?n.split(r,t):t}function ot(e,t){var n=function(t,e){var n=s.document.createElement("img");if(Mt(t,_t(e,{caption:!1}),n),B(n,"alt",e.alt),e.caption){var r=zt.create("figure",{"class":"image"});return r.appendChild(n),r.appendChild(zt.create("figcaption",{contentEditable:"true"},"Caption")),r.contentEditable="false",r}return n}(function(t){return nt(e,t)},t);e.dom.setAttrib(n,"data-mce-id","__mcenew"),e.focus(),e.selection.setContent(n.outerHTML);var r=e.dom.select('*[data-mce-id="__mcenew"]')[0];if(e.dom.setAttrib(r,"data-mce-id",null),K(r)){var i=it(e,r);e.selection.select(i)}else e.selection.select(r)}function at(t,e){var n=rt(t);n?e.src?function(e,t){var n=rt(e);if(Mt(function(t){return nt(e,t)},t,n),function(t,e){t.dom.setAttrib(e,"src",e.getAttribute("src"))}(e,n),K(n.parentNode)){var r=n.parentNode;it(e,r),e.selection.select(n.parentNode)}else e.selection.select(n),Rt(e,t,n)}(t,e):function(t,e){if(e){var n=t.dom.is(e.parentNode,"figure.image")?e.parentNode:e;t.dom.remove(n),t.focus(),t.nodeChanged(),t.dom.isEmpty(t.getBody())&&(t.setContent(""),t.selection.setCursorLocation())}}(t,n):e.src&&ot(t,e)}function ut(t){return T(t.value)?t.value:""}function ct(e){return void 0===e&&(e=ut),function(t){return t?w.from(t).map(function(t){return Bt(t,e)}):w.none()}}var lt=C.exports.boltExport,st=function(t){var n=w.none(),e=[],r=function(t){i()?a(t):e.push(t)},i=function(){return n.isSome()},o=function(t){!function(t,e){for(var n=0,r=t.length;n<r;n++){e(t[n],n)}}(t,a)},a=function(e){n.each(function(t){s.setTimeout(function(){e(t)},0)})};return t(function(t){n=w.some(t),o(e),e=[]}),{get:r,map:function(n){return st(function(e){r(function(t){e(n(t))})})},isReady:i}},ft={nu:st,pure:function(e){return st(function(t){t(e)})}},dt=function(n){function t(t){n().then(t,P)}return{map:function(t){return dt(function(){return n().then(t)})},bind:function(e){return dt(function(){return n().then(function(t){return e(t).toPromise()})})},anonBind:function(t){return dt(function(){return n().then(function(){return t.toPromise()})})},toLazy:function(){return ft.nu(t)},toCached:function(){var t=null;return dt(function(){return null===t&&(t=n()),t})},toPromise:n,get:t}},mt=function(t){return dt(function(){return new lt(t)})},pt=function(t){return dt(function(){return lt.resolve(t)})},gt=function(n){return{is:function(t){return n===t},isValue:c,isError:u,getOr:a(n),getOrThunk:a(n),getOrDie:a(n),or:function(t){return gt(n)},orThunk:function(t){return gt(n)},fold:function(t,e){return e(n)},map:function(t){return gt(t(n))},mapError:function(t){return gt(n)},each:function(t){t(n)},bind:function(t){return t(n)},exists:function(t){return t(n)},forall:function(t){return t(n)},toOption:function(){return w.some(n)}}},ht=function(n){return{is:u,isValue:u,isError:c,getOr:t,getOrThunk:function(t){return t()},getOrDie:function(){return function(t){return function(){throw new Error(t)}}(String(n))()},or:function(t){return t},orThunk:function(t){return t()},fold:function(t,e){return t(n)},map:function(t){return ht(n)},mapError:function(t){return ht(t(n))},each:o,bind:function(t){return ht(n)},exists:u,forall:c,toOption:w.none}},yt={value:gt,error:ht,fromOption:function(t,e){return t.fold(function(){return ht(e)},gt)}},vt=function(o){return D(D({},o),{toCached:function(){return vt(o.toCached())},bindFuture:function(e){return vt(o.bind(function(t){return t.fold(function(t){return pt(yt.error(t))},function(t){return e(t)})}))},bindResult:function(e){return vt(o.map(function(t){return t.bind(e)}))},mapResult:function(e){return vt(o.map(function(t){return t.map(e)}))},mapError:function(e){return vt(o.map(function(t){return t.mapError(e)}))},foldResult:function(e,n){return o.map(function(t){return t.fold(e,n)})},withTimeout:function(t,i){return vt(mt(function(e){var n=!1,r=s.setTimeout(function(){n=!0,e(yt.error(i()))},t);o.get(function(t){n||(s.clearTimeout(r),e(t))})}))}})},bt=E,wt=Object.prototype.hasOwnProperty,Tt=L(function(t,e){return _(t)&&_(e)?Tt(t,e):e}),_t=L(function(t,e){return e}),Ut=function(t){return{title:"General",name:"general",items:N(t)}},xt=N,At=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),It=tinymce.util.Tools.resolve("tinymce.util.Promise"),St=tinymce.util.Tools.resolve("tinymce.util.XHR"),Dt=function(t){return t.getParam("images_upload_url","","string")},Ot=function(t){return t.getParam("images_upload_handler",undefined,"function")},Ct={hasDimensions:function(t){return t.getParam("image_dimensions",!0,"boolean")},hasUploadTab:function(t){return t.getParam("image_uploadtab",!0,"boolean")},hasAdvTab:function(t){return t.getParam("image_advtab",!1,"boolean")},getPrependUrl:function(t){return t.getParam("image_prepend_url","","string")},getClassList:function(t){return t.getParam("image_class_list")},hasDescription:function(t){return t.getParam("image_description",!0,"boolean")},hasImageTitle:function(t){return t.getParam("image_title",!1,"boolean")},hasImageCaption:function(t){return t.getParam("image_caption",!1,"boolean")},getImageList:function(t){return t.getParam("image_list",!1)},hasUploadUrl:function(t){return!!Dt(t)},hasUploadHandler:function(t){return!!Ot(t)},getUploadUrl:Dt,getUploadHandler:Ot,getUploadBasePath:function(t){return t.getParam("images_upload_base_path",undefined,"string")},getUploadCredentials:function(t){return t.getParam("images_upload_credentials",!1,"boolean")}},Pt=function(t,e){function n(t){r.parentNode&&r.parentNode.removeChild(r),e(t)}var r=s.document.createElement("img");r.onload=function(){var t={width:j(r.width,r.clientWidth),height:j(r.height,r.clientHeight)};n(yt.value(t))},r.onerror=function(){n(yt.error("Failed to get image dimensions for: "+t))};var i=r.style;i.visibility="hidden",i.position="fixed",i.bottom=i.left="0px",i.width=i.height="auto",s.document.body.appendChild(r),r.src=t},Et=function(t){return t=t&&t.replace(/px$/,"")},Lt=function(t){return 0<t.length&&/^[0-9]+$/.test(t)&&(t+="px"),t},Nt=function(t){if(t.margin){var e=String(t.margin).split(" ");switch(e.length){case 1:t["margin-top"]=t["margin-top"]||e[0],t["margin-right"]=t["margin-right"]||e[0],t["margin-bottom"]=t["margin-bottom"]||e[0],t["margin-left"]=t["margin-left"]||e[0];break;case 2:t["margin-top"]=t["margin-top"]||e[0],t["margin-right"]=t["margin-right"]||e[1],t["margin-bottom"]=t["margin-bottom"]||e[0],t["margin-left"]=t["margin-left"]||e[1];break;case 3:t["margin-top"]=t["margin-top"]||e[0],t["margin-right"]=t["margin-right"]||e[1],t["margin-bottom"]=t["margin-bottom"]||e[2],t["margin-left"]=t["margin-left"]||e[1];break;case 4:t["margin-top"]=t["margin-top"]||e[0],t["margin-right"]=t["margin-right"]||e[1],t["margin-bottom"]=t["margin-bottom"]||e[2],t["margin-left"]=t["margin-left"]||e[3]}delete t.margin}return t},jt=function(t,e){var n=Ct.getImageList(t);"string"==typeof n?St.send({url:n,success:function(t){e(JSON.parse(t))}}):"function"==typeof n?n(e):e(n)},Rt=function(t,e,n){function r(){n.onload=n.onerror=null,t.selection&&(t.selection.select(n),t.nodeChanged())}n.onload=function(){e.width||e.height||!Ct.hasDimensions(t)||t.dom.setAttribs(n,{width:String(n.clientWidth),height:String(n.clientHeight)}),r()},n.onerror=r},Ft=function(r){return new It(function(t,e){var n=new s.FileReader;n.onload=function(){t(n.result)},n.onerror=function(){e(n.error.message)},n.readAsDataURL(r)})},kt=function(t){return"IMG"===t.nodeName&&(t.hasAttribute("data-mce-object")||t.hasAttribute("data-mce-placeholder"))},zt=At.DOM,Mt=function(t,e,n){var r=Y(t,n);tt(n,r,e,"caption",function(t,e,n){return G(t)}),tt(n,r,e,"src",B),tt(n,r,e,"alt",B),tt(n,r,e,"title",B),tt(n,r,e,"width",q(0,t)),tt(n,r,e,"height",q(0,t)),tt(n,r,e,"class",B),tt(n,r,e,"style",et(function(t,e){return B(t,"style",e)},t)),tt(n,r,e,"hspace",et(J,t)),tt(n,r,e,"vspace",et(V,t)),tt(n,r,e,"border",et(X,t)),tt(n,r,e,"borderStyle",et(Z,t))},Ht=tinymce.util.Tools.resolve("tinymce.util.Tools"),Bt=function(t,i){var o=[];return Ht.each(t,function(t){var e=T(t.text)?t.text:T(t.title)?t.title:"";if(t.menu!==undefined){var n=Bt(t.menu,i);o.push({text:e,items:n})}else{var r=i(t);o.push({text:e,value:r})}}),o},Gt=function(t,e){return function(t,e){for(var n=0;n<t.length;n++){var r=e(t[n],n);if(r.isSome())return r}return w.none()}(t,function(t){return function(t){return Object.prototype.hasOwnProperty.call(t,"items")}(t)?Gt(t.items,e):t.value===e?w.some(t):w.none()})},Wt=ct,qt=function(t){return ct(ut)(t)},$t=function(t,e){return t.bind(function(t){return Gt(t,e)})};function Jt(a){function e(t,e,n,r){var i,o;(i=new s.XMLHttpRequest).open("POST",a.url),i.withCredentials=a.credentials,i.upload.onprogress=function(t){r(t.loaded/t.total*100)},i.onerror=function(){n("Image upload failed due to a XHR Transport error. Code: "+i.status)},i.onload=function(){var t;i.status<200||300<=i.status?n("HTTP Error: "+i.status):(t=JSON.parse(i.responseText))&&"string"==typeof t.location?e(function(t,e){return t?t.replace(/\/$/,"")+"/"+e.replace(/^\//,""):e}(a.basePath,t.location)):n("Invalid JSON: "+i.responseText)},(o=new s.FormData).append("file",t.blob(),t.filename()),i.send(o)}return a=Ht.extend({credentials:!1,handler:e},a),{upload:function(t){return!a.url&&function(t){return t===e}(a.handler)?It.reject("Upload url missing from the settings."):function(r,i){return new It(function(t,e){try{i(r,t,e,o)}catch(n){e(n.message)}})}(t,a.handler)}}}function Vt(n){var r=Wt(function(t){return n.convertURL(t.value||t.url,"src")}),t=mt(function(e){jt(n,function(t){e(r(t).map(function(t){return v([[{text:"None",value:""}],t])}))})}),e=qt(Ct.getClassList(n)),i=Ct.hasAdvTab(n),o=Ct.hasUploadTab(n),a=Ct.hasUploadUrl(n),u=Ct.hasUploadHandler(n),c=function(e){var t=rt(e);return t?Y(function(t){return nt(e,t)},t):{src:"",alt:"",title:"",width:"",height:"","class":"",style:"",caption:!1,hspace:"",vspace:"",border:"",borderStyle:""}}(n),l=Ct.hasDescription(n),s=Ct.hasImageTitle(n),f=Ct.hasDimensions(n),d=Ct.hasImageCaption(n),m=Ct.getUploadUrl(n),p=Ct.getUploadBasePath(n),g=Ct.getUploadCredentials(n),h=Ct.getUploadHandler(n),y=w.some(Ct.getPrependUrl(n)).filter(function(t){return T(t)&&0<t.length});return t.map(function(t){return{image:c,imageList:t,classList:e,hasAdvTab:i,hasUploadTab:o,hasUploadUrl:a,hasUploadHandler:u,hasDescription:l,hasImageTitle:s,hasDimensions:f,hasImageCaption:d,url:m,basePath:p,credentials:g,handler:h,prependURL:y}})}function Xt(t){return{src:{value:t.src,meta:{}},images:t.src,alt:t.alt,title:t.title,dimensions:{width:t.width,height:t.height},classes:t["class"],caption:t.caption,style:t.style,vspace:t.vspace,border:t.border,hspace:t.hspace,borderstyle:t.borderStyle,fileinput:[]}}function Zt(t){return{src:t.src.value,alt:t.alt,title:t.title,width:t.dimensions.width,height:t.dimensions.height,"class":t.classes,style:t.style,caption:t.caption,hspace:t.hspace,vspace:t.vspace,border:t.border,borderStyle:t.borderstyle}}function Kt(t,e){var n=e.getData();(function(t,e){return/^(?:[a-zA-Z]+:)?\/\//.test(e)?w.none():t.prependURL.bind(function(t){return e.substring(0,t.length)!==t?w.some(t+e):w.none()})})(t,n.src.value).each(function(t){e.setData({src:{value:t,meta:n.src.meta}})})}function Qt(t,e){var n=e.getData(),r=n.src.meta;if(r!==undefined){var i=Tt({},n);!function(t,e,n){t.hasDescription&&T(n.alt)&&(e.alt=n.alt),t.hasImageTitle&&T(n.title)&&(e.title=n.title),t.hasDimensions&&(T(n.width)&&(e.dimensions.width=n.width),T(n.height)&&(e.dimensions.height=n.height)),T(n["class"])&&$t(t.classList,n["class"]).each(function(t){e.classes=t.value}),t.hasImageCaption&&x(n.caption)&&(e.caption=n.caption),t.hasAdvTab&&(T(n.vspace)&&(e.vspace=n.vspace),T(n.border)&&(e.border=n.border),T(n.hspace)&&(e.hspace=n.hspace),T(n.borderstyle)&&(e.borderstyle=n.borderstyle))}(t,i,r),e.setData(i)}}function Yt(t,e,n,r){Kt(e,r),Qt(e,r),function(t,e,n,r){var i=r.getData(),o=i.src.value,a=i.src.meta||{};a.width||a.height||!e.hasDimensions||t.imageSize(o).get(function(t){t.each(function(t){n.open&&r.setData({dimensions:t})})})}(t,e,n,r),function(t,e,n){var r=n.getData(),i=$t(t.imageList,r.src.value);e.prevImage=i,n.setData({images:i.map(function(t){return t.value}).getOr("")})}(e,n,r)}function te(t,e,n){var r=Nt(t(n.style)),i=Tt({},n);return i.vspace=function(t){return t["margin-top"]&&t["margin-bottom"]&&t["margin-top"]===t["margin-bottom"]?Et(String(t["margin-top"])):""}(r),i.hspace=function(t){return t["margin-right"]&&t["margin-left"]&&t["margin-right"]===t["margin-left"]?Et(String(t["margin-right"])):""}(r),i.border=function(t){return t["border-width"]?Et(String(t["border-width"])):""}(r),i.borderstyle=function(t){return t["border-style"]?String(t["border-style"]):""}(r),i.style=function(t,e,n){return e(t(e(n)))}(t,e,r),i}function ee(a,u,c,l){var t=l.getData();l.block("Uploading image"),function(t){return 0===t.length?w.none():w.some(t[0])}(t.fileinput).fold(function(){l.unblock()},function(n){function r(){l.unblock(),s.URL.revokeObjectURL(i)}var i=s.URL.createObjectURL(n),o=Jt({url:u.url,basePath:u.basePath,credentials:u.credentials,handler:u.handler});Ft(n).then(function(t){var e=a.createBlobCache(n,i,t);o.upload(e).then(function(t){l.setData({src:{value:t,meta:{}}}),l.showTab("general"),Yt(a,u,c,l),r()})["catch"](function(t){r(),a.alertErr(l,t)})})})}function ne(n,r,i){return function(t,e){"src"===e.name?Yt(n,r,i,t):"images"===e.name?function(t,e,n,r){var i=r.getData(),o=$t(e.imageList,i.images);o.each(function(t){""===i.alt||n.prevImage.map(function(t){return t.text===i.alt}).getOr(!1)?""===t.value?r.setData({src:t,alt:n.prevAlt}):r.setData({src:t,alt:t.text}):r.setData({src:t})}),n.prevImage=o,Yt(t,e,n,r)}(n,r,i,t):"alt"===e.name?i.prevAlt=t.getData().alt:"style"===e.name?function(t,e){var n=e.getData(),r=te(t.parseStyle,t.serializeStyle,n);e.setData(r)}(n,t):"vspace"===e.name||"hspace"===e.name||"border"===e.name||"borderstyle"===e.name?function(t,e,n){var r=Tt(Xt(e.image),n.getData()),i=Q(t.normalizeCss,Zt(r));n.setData({style:i})}(n,r,t):"fileinput"===e.name&&ee(n,r,i,t)}}function re(n){return function(t){var e=function(t){return{prevImage:$t(t.imageList,t.image.src),prevAlt:t.image.alt,open:!0}}(t);return{title:"Insert/Edit Image",size:"normal",body:function(t){return t.hasAdvTab||t.hasUploadUrl||t.hasUploadHandler?{type:"tabpanel",tabs:v([[Ut(t)],t.hasAdvTab?[ae(t)]:[],t.hasUploadTab&&(t.hasUploadUrl||t.hasUploadHandler)?[ue(t)]:[]])}:{type:"panel",items:xt(t)}}(t),buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:Xt(t.image),onSubmit:n.onSubmit(t),onChange:ne(n,t,e),onClose:function(t){return function(){t.open=!1}}(e)}}}function ie(e){var t={onSubmit:function(r){return function(n){return function(t){var e=Tt(Xt(n.image),t.getData());r.undoManager.transact(function(){at(r,Zt(e))}),r.editorUpload.uploadImagesAuto(),t.close()}}}(e),imageSize:function(e){return function(t){return bt(function(n){Pt(e.documentBaseURI.toAbsolute(t),function(t){var e=t.map(function(t){return{width:String(t.width),height:String(t.height)}});n(e)})})}}(e),createBlobCache:function(r){return function(t,e,n){return r.editorUpload.blobCache.create({blob:t,blobUri:e,name:t.name?t.name.replace(/\.[^\.]+$/,""):null,base64:n.split(",")[1]})}}(e),alertErr:function(n){return function(t,e){n.windowManager.alert(e,t.close)}}(e),normalizeCss:function(e){return function(t){return nt(e,t)}}(e),parseStyle:function(e){return function(t){return e.dom.parseStyle(t)}}(e),serializeStyle:function(n){return function(t,e){return n.dom.serializeStyle(t,e)}}(e)};return{open:function(){return Vt(e).map(re(t)).get(function(t){e.windowManager.open(t)})}}}function oe(o){return function(t){for(var e,n=t.length,r=function(t){t.attr("contenteditable",o?"true":null)};n--;){var i=t[n];void 0,(e=i.attr("class"))&&/\bimage\b/.test(e)&&(i.attr("contenteditable",o?"false":null),Ht.each(i.getAll("figcaption"),r))}}}var ae=function(t){return{title:"Advanced",name:"advanced",items:[{type:"input",label:"Style",name:"style"},{type:"grid",columns:2,items:[{type:"input",label:"Vertical space",name:"vspace",inputMode:"numeric"},{type:"input",label:"Horizontal space",name:"hspace",inputMode:"numeric"},{type:"input",label:"Border width",name:"border",inputMode:"numeric"},{type:"selectbox",name:"borderstyle",label:"Border style",items:[{text:"Select...",value:""},{text:"Solid",value:"solid"},{text:"Dotted",value:"dotted"},{text:"Dashed",value:"dashed"},{text:"Double",value:"double"},{text:"Groove",value:"groove"},{text:"Ridge",value:"ridge"},{text:"Inset",value:"inset"},{text:"Outset",value:"outset"},{text:"None",value:"none"},{text:"Hidden",value:"hidden"}]}]}]}},ue=function(t){return{title:"Upload",name:"upload",items:[{type:"dropzone",name:"fileinput"}]}},ce=function(t){t.addCommand("mceImage",ie(t).open)},le=function(t){t.on("PreInit",function(){t.parser.addNodeFilter("figure",oe(!0)),t.serializer.addNodeFilter("figure",oe(!1))})},se=function(e){e.ui.registry.addToggleButton("image",{icon:"image",tooltip:"Insert/edit image",onAction:ie(e).open,onSetup:function(t){return e.selection.selectorChangedWithUnbind("img:not([data-mce-object],[data-mce-placeholder]),figure.image",t.setActive).unbind}}),e.ui.registry.addMenuItem("image",{icon:"image",text:"Image...",onAction:ie(e).open}),e.ui.registry.addContextMenu("image",{update:function(t){return K(t)||function(t){return"IMG"===t.nodeName}(t)&&!kt(t)?["image"]:[]}})};!function fe(){r.add("image",function(t){le(t),se(t),ce(t)})}()}(window);
