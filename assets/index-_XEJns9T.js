function a_(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Tg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Pg={exports:{}},Tc={},jg={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xa=Symbol.for("react.element"),u_=Symbol.for("react.portal"),c_=Symbol.for("react.fragment"),f_=Symbol.for("react.strict_mode"),d_=Symbol.for("react.profiler"),p_=Symbol.for("react.provider"),h_=Symbol.for("react.context"),m_=Symbol.for("react.forward_ref"),g_=Symbol.for("react.suspense"),x_=Symbol.for("react.memo"),v_=Symbol.for("react.lazy"),e0=Symbol.iterator;function y_(t){return t===null||typeof t!="object"?null:(t=e0&&t[e0]||t["@@iterator"],typeof t=="function"?t:null)}var Og={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zg=Object.assign,Rg={};function Fs(t,e,n){this.props=t,this.context=e,this.refs=Rg,this.updater=n||Og}Fs.prototype.isReactComponent={};Fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ng(){}Ng.prototype=Fs.prototype;function Op(t,e,n){this.props=t,this.context=e,this.refs=Rg,this.updater=n||Og}var zp=Op.prototype=new Ng;zp.constructor=Op;zg(zp,Fs.prototype);zp.isPureReactComponent=!0;var t0=Array.isArray,bg=Object.prototype.hasOwnProperty,Rp={current:null},Mg={key:!0,ref:!0,__self:!0,__source:!0};function Ig(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)bg.call(e,r)&&!Mg.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:xa,type:t,key:o,ref:s,props:i,_owner:Rp.current}}function __(t,e){return{$$typeof:xa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Np(t){return typeof t=="object"&&t!==null&&t.$$typeof===xa}function w_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var n0=/\/+/g;function rf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?w_(""+t.key):e.toString(36)}function au(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case xa:case u_:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+rf(s,0):r,t0(i)?(n="",t!=null&&(n=t.replace(n0,"$&/")+"/"),au(i,e,n,"",function(u){return u})):i!=null&&(Np(i)&&(i=__(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(n0,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",t0(t))for(var l=0;l<t.length;l++){o=t[l];var a=r+rf(o,l);s+=au(o,e,n,a,i)}else if(a=y_(t),typeof a=="function")for(t=a.call(t),l=0;!(o=t.next()).done;)o=o.value,a=r+rf(o,l++),s+=au(o,e,n,a,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Oa(t,e,n){if(t==null)return t;var r=[],i=0;return au(t,r,"","",function(o){return e.call(n,o,i++)}),r}function S_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ht={current:null},uu={transition:null},k_={ReactCurrentDispatcher:Ht,ReactCurrentBatchConfig:uu,ReactCurrentOwner:Rp};function Lg(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:Oa,forEach:function(t,e,n){Oa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Oa(t,function(){e++}),e},toArray:function(t){return Oa(t,function(e){return e})||[]},only:function(t){if(!Np(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=Fs;ne.Fragment=c_;ne.Profiler=d_;ne.PureComponent=Op;ne.StrictMode=f_;ne.Suspense=g_;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k_;ne.act=Lg;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=zg({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Rp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)bg.call(e,a)&&!Mg.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:xa,type:t.type,key:i,ref:o,props:r,_owner:s}};ne.createContext=function(t){return t={$$typeof:h_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:p_,_context:t},t.Consumer=t};ne.createElement=Ig;ne.createFactory=function(t){var e=Ig.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:m_,render:t}};ne.isValidElement=Np;ne.lazy=function(t){return{$$typeof:v_,_payload:{_status:-1,_result:t},_init:S_}};ne.memo=function(t,e){return{$$typeof:x_,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=uu.transition;uu.transition={};try{t()}finally{uu.transition=e}};ne.unstable_act=Lg;ne.useCallback=function(t,e){return Ht.current.useCallback(t,e)};ne.useContext=function(t){return Ht.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return Ht.current.useDeferredValue(t)};ne.useEffect=function(t,e){return Ht.current.useEffect(t,e)};ne.useId=function(){return Ht.current.useId()};ne.useImperativeHandle=function(t,e,n){return Ht.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return Ht.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return Ht.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return Ht.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return Ht.current.useReducer(t,e,n)};ne.useRef=function(t){return Ht.current.useRef(t)};ne.useState=function(t){return Ht.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return Ht.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return Ht.current.useTransition()};ne.version="18.3.1";jg.exports=ne;var N=jg.exports;const Pi=Tg(N),C_=a_({__proto__:null,default:Pi},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_=N,T_=Symbol.for("react.element"),P_=Symbol.for("react.fragment"),j_=Object.prototype.hasOwnProperty,O_=E_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,z_={key:!0,ref:!0,__self:!0,__source:!0};function Fg(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)j_.call(e,r)&&!z_.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:T_,type:t,key:o,ref:s,props:i,_owner:O_.current}}Tc.Fragment=P_;Tc.jsx=Fg;Tc.jsxs=Fg;Pg.exports=Tc;var f=Pg.exports,Dg={exports:{}},Cn={},$g={exports:{}},Ag={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,I){var k=R.length;R.push(I);e:for(;0<k;){var B=k-1>>>1,H=R[B];if(0<i(H,I))R[B]=I,R[k]=H,k=B;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var I=R[0],k=R.pop();if(k!==I){R[0]=k;e:for(var B=0,H=R.length,nt=H>>>1;B<nt;){var le=2*(B+1)-1,xe=R[le],pe=le+1,fe=R[pe];if(0>i(xe,k))pe<H&&0>i(fe,xe)?(R[B]=fe,R[pe]=k,B=pe):(R[B]=xe,R[le]=k,B=le);else if(pe<H&&0>i(fe,k))R[B]=fe,R[pe]=k,B=pe;else break e}}return I}function i(R,I){var k=R.sortIndex-I.sortIndex;return k!==0?k:R.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var a=[],u=[],c=1,d=null,p=3,h=!1,y=!1,g=!1,w=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(R){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=R)r(u),I.sortIndex=I.expirationTime,e(a,I);else break;I=n(u)}}function _(R){if(g=!1,v(R),!y)if(n(a)!==null)y=!0,G(C);else{var I=n(u);I!==null&&A(_,I.startTime-R)}}function C(R,I){y=!1,g&&(g=!1,x(T),T=-1),h=!0;var k=p;try{for(v(I),d=n(a);d!==null&&(!(d.expirationTime>I)||R&&!$());){var B=d.callback;if(typeof B=="function"){d.callback=null,p=d.priorityLevel;var H=B(d.expirationTime<=I);I=t.unstable_now(),typeof H=="function"?d.callback=H:d===n(a)&&r(a),v(I)}else r(a);d=n(a)}if(d!==null)var nt=!0;else{var le=n(u);le!==null&&A(_,le.startTime-I),nt=!1}return nt}finally{d=null,p=k,h=!1}}var E=!1,S=null,T=-1,z=5,j=-1;function $(){return!(t.unstable_now()-j<z)}function M(){if(S!==null){var R=t.unstable_now();j=R;var I=!0;try{I=S(!0,R)}finally{I?V():(E=!1,S=null)}}else E=!1}var V;if(typeof m=="function")V=function(){m(M)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,Z=X.port2;X.port1.onmessage=M,V=function(){Z.postMessage(null)}}else V=function(){w(M,0)};function G(R){S=R,E||(E=!0,V())}function A(R,I){T=w(function(){R(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){y||h||(y=!0,G(C))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(R){switch(p){case 1:case 2:case 3:var I=3;break;default:I=p}var k=p;p=I;try{return R()}finally{p=k}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,I){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var k=p;p=R;try{return I()}finally{p=k}},t.unstable_scheduleCallback=function(R,I,k){var B=t.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?B+k:B):k=B,R){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=k+H,R={id:c++,callback:I,priorityLevel:R,startTime:k,expirationTime:H,sortIndex:-1},k>B?(R.sortIndex=k,e(u,R),n(a)===null&&R===n(u)&&(g?(x(T),T=-1):g=!0,A(_,k-B))):(R.sortIndex=H,e(a,R),y||h||(y=!0,G(C))),R},t.unstable_shouldYield=$,t.unstable_wrapCallback=function(R){var I=p;return function(){var k=p;p=I;try{return R.apply(this,arguments)}finally{p=k}}}})(Ag);$g.exports=Ag;var R_=$g.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_=N,Sn=R_;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bg=new Set,Bl={};function To(t,e){vs(t,e),vs(t+"Capture",e)}function vs(t,e){for(Bl[t]=e,t=0;t<e.length;t++)Bg.add(e[t])}var Dr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zf=Object.prototype.hasOwnProperty,b_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,r0={},i0={};function M_(t){return Zf.call(i0,t)?!0:Zf.call(r0,t)?!1:b_.test(t)?i0[t]=!0:(r0[t]=!0,!1)}function I_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function L_(t,e,n,r){if(e===null||typeof e>"u"||I_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var St={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){St[t]=new Yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];St[e]=new Yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){St[t]=new Yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){St[t]=new Yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){St[t]=new Yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){St[t]=new Yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){St[t]=new Yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){St[t]=new Yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){St[t]=new Yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var bp=/[\-:]([a-z])/g;function Mp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bp,Mp);St[e]=new Yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bp,Mp);St[e]=new Yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bp,Mp);St[e]=new Yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){St[t]=new Yt(t,1,!1,t.toLowerCase(),null,!1,!1)});St.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){St[t]=new Yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ip(t,e,n,r){var i=St.hasOwnProperty(e)?St[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(L_(e,n,i,r)&&(n=null),r||i===null?M_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Vr=N_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,za=Symbol.for("react.element"),Uo=Symbol.for("react.portal"),Wo=Symbol.for("react.fragment"),Lp=Symbol.for("react.strict_mode"),Jf=Symbol.for("react.profiler"),Ug=Symbol.for("react.provider"),Wg=Symbol.for("react.context"),Fp=Symbol.for("react.forward_ref"),ed=Symbol.for("react.suspense"),td=Symbol.for("react.suspense_list"),Dp=Symbol.for("react.memo"),ri=Symbol.for("react.lazy"),Vg=Symbol.for("react.offscreen"),o0=Symbol.iterator;function Gs(t){return t===null||typeof t!="object"?null:(t=o0&&t[o0]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,of;function ol(t){if(of===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);of=e&&e[1]||""}return`
`+of+t}var sf=!1;function lf(t,e){if(!t||sf)return"";sf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=s&&0<=l);break}}}finally{sf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ol(t):""}function F_(t){switch(t.tag){case 5:return ol(t.type);case 16:return ol("Lazy");case 13:return ol("Suspense");case 19:return ol("SuspenseList");case 0:case 2:case 15:return t=lf(t.type,!1),t;case 11:return t=lf(t.type.render,!1),t;case 1:return t=lf(t.type,!0),t;default:return""}}function nd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Wo:return"Fragment";case Uo:return"Portal";case Jf:return"Profiler";case Lp:return"StrictMode";case ed:return"Suspense";case td:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Wg:return(t.displayName||"Context")+".Consumer";case Ug:return(t._context.displayName||"Context")+".Provider";case Fp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dp:return e=t.displayName||null,e!==null?e:nd(t.type)||"Memo";case ri:e=t._payload,t=t._init;try{return nd(t(e))}catch{}}return null}function D_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nd(e);case 8:return e===Lp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $_(t){var e=Hg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ra(t){t._valueTracker||(t._valueTracker=$_(t))}function Yg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Hg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Lu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rd(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function s0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ji(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Xg(t,e){e=e.checked,e!=null&&Ip(t,"checked",e,!1)}function id(t,e){Xg(t,e);var n=ji(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?od(t,e.type,n):e.hasOwnProperty("defaultValue")&&od(t,e.type,ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function l0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function od(t,e,n){(e!=="number"||Lu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var sl=Array.isArray;function is(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ji(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function sd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function a0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(sl(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ji(n)}}function Gg(t,e){var n=ji(e.value),r=ji(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function u0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Qg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ld(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Qg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Na,Kg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Na=Na||document.createElement("div"),Na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ul(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var xl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},A_=["Webkit","ms","Moz","O"];Object.keys(xl).forEach(function(t){A_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),xl[e]=xl[t]})});function qg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||xl.hasOwnProperty(t)&&xl[t]?(""+e).trim():e+"px"}function Zg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=qg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var B_=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ad(t,e){if(e){if(B_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function ud(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cd=null;function $p(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fd=null,os=null,ss=null;function c0(t){if(t=_a(t)){if(typeof fd!="function")throw Error(b(280));var e=t.stateNode;e&&(e=Rc(e),fd(t.stateNode,t.type,e))}}function Jg(t){os?ss?ss.push(t):ss=[t]:os=t}function ex(){if(os){var t=os,e=ss;if(ss=os=null,c0(t),e)for(t=0;t<e.length;t++)c0(e[t])}}function tx(t,e){return t(e)}function nx(){}var af=!1;function rx(t,e,n){if(af)return t(e,n);af=!0;try{return tx(t,e,n)}finally{af=!1,(os!==null||ss!==null)&&(nx(),ex())}}function Wl(t,e){var n=t.stateNode;if(n===null)return null;var r=Rc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var dd=!1;if(Dr)try{var Qs={};Object.defineProperty(Qs,"passive",{get:function(){dd=!0}}),window.addEventListener("test",Qs,Qs),window.removeEventListener("test",Qs,Qs)}catch{dd=!1}function U_(t,e,n,r,i,o,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var vl=!1,Fu=null,Du=!1,pd=null,W_={onError:function(t){vl=!0,Fu=t}};function V_(t,e,n,r,i,o,s,l,a){vl=!1,Fu=null,U_.apply(W_,arguments)}function H_(t,e,n,r,i,o,s,l,a){if(V_.apply(this,arguments),vl){if(vl){var u=Fu;vl=!1,Fu=null}else throw Error(b(198));Du||(Du=!0,pd=u)}}function Po(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ix(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function f0(t){if(Po(t)!==t)throw Error(b(188))}function Y_(t){var e=t.alternate;if(!e){if(e=Po(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return f0(i),t;if(o===r)return f0(i),e;o=o.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function ox(t){return t=Y_(t),t!==null?sx(t):null}function sx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=sx(t);if(e!==null)return e;t=t.sibling}return null}var lx=Sn.unstable_scheduleCallback,d0=Sn.unstable_cancelCallback,X_=Sn.unstable_shouldYield,G_=Sn.unstable_requestPaint,He=Sn.unstable_now,Q_=Sn.unstable_getCurrentPriorityLevel,Ap=Sn.unstable_ImmediatePriority,ax=Sn.unstable_UserBlockingPriority,$u=Sn.unstable_NormalPriority,K_=Sn.unstable_LowPriority,ux=Sn.unstable_IdlePriority,Pc=null,yr=null;function q_(t){if(yr&&typeof yr.onCommitFiberRoot=="function")try{yr.onCommitFiberRoot(Pc,t,void 0,(t.current.flags&128)===128)}catch{}}var rr=Math.clz32?Math.clz32:ew,Z_=Math.log,J_=Math.LN2;function ew(t){return t>>>=0,t===0?32:31-(Z_(t)/J_|0)|0}var ba=64,Ma=4194304;function ll(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Au(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=ll(l):(o&=s,o!==0&&(r=ll(o)))}else s=n&~i,s!==0?r=ll(s):o!==0&&(r=ll(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-rr(e),i=1<<n,r|=t[n],e&=~i;return r}function tw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-rr(o),l=1<<s,a=i[s];a===-1?(!(l&n)||l&r)&&(i[s]=tw(l,e)):a<=e&&(t.expiredLanes|=l),o&=~l}}function hd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cx(){var t=ba;return ba<<=1,!(ba&4194240)&&(ba=64),t}function uf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-rr(e),t[e]=n}function rw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-rr(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Bp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-rr(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function fx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var dx,Up,px,hx,mx,md=!1,Ia=[],mi=null,gi=null,xi=null,Vl=new Map,Hl=new Map,oi=[],iw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function p0(t,e){switch(t){case"focusin":case"focusout":mi=null;break;case"dragenter":case"dragleave":gi=null;break;case"mouseover":case"mouseout":xi=null;break;case"pointerover":case"pointerout":Vl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hl.delete(e.pointerId)}}function Ks(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=_a(e),e!==null&&Up(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ow(t,e,n,r,i){switch(e){case"focusin":return mi=Ks(mi,t,e,n,r,i),!0;case"dragenter":return gi=Ks(gi,t,e,n,r,i),!0;case"mouseover":return xi=Ks(xi,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Vl.set(o,Ks(Vl.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Hl.set(o,Ks(Hl.get(o)||null,t,e,n,r,i)),!0}return!1}function gx(t){var e=Ki(t.target);if(e!==null){var n=Po(e);if(n!==null){if(e=n.tag,e===13){if(e=ix(n),e!==null){t.blockedOn=e,mx(t.priority,function(){px(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);cd=r,n.target.dispatchEvent(r),cd=null}else return e=_a(n),e!==null&&Up(e),t.blockedOn=n,!1;e.shift()}return!0}function h0(t,e,n){cu(t)&&n.delete(e)}function sw(){md=!1,mi!==null&&cu(mi)&&(mi=null),gi!==null&&cu(gi)&&(gi=null),xi!==null&&cu(xi)&&(xi=null),Vl.forEach(h0),Hl.forEach(h0)}function qs(t,e){t.blockedOn===e&&(t.blockedOn=null,md||(md=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,sw)))}function Yl(t){function e(i){return qs(i,t)}if(0<Ia.length){qs(Ia[0],t);for(var n=1;n<Ia.length;n++){var r=Ia[n];r.blockedOn===t&&(r.blockedOn=null)}}for(mi!==null&&qs(mi,t),gi!==null&&qs(gi,t),xi!==null&&qs(xi,t),Vl.forEach(e),Hl.forEach(e),n=0;n<oi.length;n++)r=oi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<oi.length&&(n=oi[0],n.blockedOn===null);)gx(n),n.blockedOn===null&&oi.shift()}var ls=Vr.ReactCurrentBatchConfig,Bu=!0;function lw(t,e,n,r){var i=he,o=ls.transition;ls.transition=null;try{he=1,Wp(t,e,n,r)}finally{he=i,ls.transition=o}}function aw(t,e,n,r){var i=he,o=ls.transition;ls.transition=null;try{he=4,Wp(t,e,n,r)}finally{he=i,ls.transition=o}}function Wp(t,e,n,r){if(Bu){var i=gd(t,e,n,r);if(i===null)yf(t,e,r,Uu,n),p0(t,r);else if(ow(i,t,e,n,r))r.stopPropagation();else if(p0(t,r),e&4&&-1<iw.indexOf(t)){for(;i!==null;){var o=_a(i);if(o!==null&&dx(o),o=gd(t,e,n,r),o===null&&yf(t,e,r,Uu,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else yf(t,e,r,null,n)}}var Uu=null;function gd(t,e,n,r){if(Uu=null,t=$p(r),t=Ki(t),t!==null)if(e=Po(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ix(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Uu=t,null}function xx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Q_()){case Ap:return 1;case ax:return 4;case $u:case K_:return 16;case ux:return 536870912;default:return 16}default:return 16}}var li=null,Vp=null,fu=null;function vx(){if(fu)return fu;var t,e=Vp,n=e.length,r,i="value"in li?li.value:li.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return fu=i.slice(t,1<r?1-r:void 0)}function du(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function La(){return!0}function m0(){return!1}function En(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?La:m0,this.isPropagationStopped=m0,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=La)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=La)},persist:function(){},isPersistent:La}),e}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hp=En(Ds),ya=Ie({},Ds,{view:0,detail:0}),uw=En(ya),cf,ff,Zs,jc=Ie({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zs&&(Zs&&t.type==="mousemove"?(cf=t.screenX-Zs.screenX,ff=t.screenY-Zs.screenY):ff=cf=0,Zs=t),cf)},movementY:function(t){return"movementY"in t?t.movementY:ff}}),g0=En(jc),cw=Ie({},jc,{dataTransfer:0}),fw=En(cw),dw=Ie({},ya,{relatedTarget:0}),df=En(dw),pw=Ie({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),hw=En(pw),mw=Ie({},Ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gw=En(mw),xw=Ie({},Ds,{data:0}),x0=En(xw),vw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_w={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ww(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_w[t])?!!e[t]:!1}function Yp(){return ww}var Sw=Ie({},ya,{key:function(t){if(t.key){var e=vw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=du(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yp,charCode:function(t){return t.type==="keypress"?du(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?du(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kw=En(Sw),Cw=Ie({},jc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),v0=En(Cw),Ew=Ie({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yp}),Tw=En(Ew),Pw=Ie({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),jw=En(Pw),Ow=Ie({},jc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zw=En(Ow),Rw=[9,13,27,32],Xp=Dr&&"CompositionEvent"in window,yl=null;Dr&&"documentMode"in document&&(yl=document.documentMode);var Nw=Dr&&"TextEvent"in window&&!yl,yx=Dr&&(!Xp||yl&&8<yl&&11>=yl),y0=" ",_0=!1;function _x(t,e){switch(t){case"keyup":return Rw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vo=!1;function bw(t,e){switch(t){case"compositionend":return wx(e);case"keypress":return e.which!==32?null:(_0=!0,y0);case"textInput":return t=e.data,t===y0&&_0?null:t;default:return null}}function Mw(t,e){if(Vo)return t==="compositionend"||!Xp&&_x(t,e)?(t=vx(),fu=Vp=li=null,Vo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return yx&&e.locale!=="ko"?null:e.data;default:return null}}var Iw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function w0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Iw[t.type]:e==="textarea"}function Sx(t,e,n,r){Jg(r),e=Wu(e,"onChange"),0<e.length&&(n=new Hp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var _l=null,Xl=null;function Lw(t){bx(t,0)}function Oc(t){var e=Xo(t);if(Yg(e))return t}function Fw(t,e){if(t==="change")return e}var kx=!1;if(Dr){var pf;if(Dr){var hf="oninput"in document;if(!hf){var S0=document.createElement("div");S0.setAttribute("oninput","return;"),hf=typeof S0.oninput=="function"}pf=hf}else pf=!1;kx=pf&&(!document.documentMode||9<document.documentMode)}function k0(){_l&&(_l.detachEvent("onpropertychange",Cx),Xl=_l=null)}function Cx(t){if(t.propertyName==="value"&&Oc(Xl)){var e=[];Sx(e,Xl,t,$p(t)),rx(Lw,e)}}function Dw(t,e,n){t==="focusin"?(k0(),_l=e,Xl=n,_l.attachEvent("onpropertychange",Cx)):t==="focusout"&&k0()}function $w(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Oc(Xl)}function Aw(t,e){if(t==="click")return Oc(e)}function Bw(t,e){if(t==="input"||t==="change")return Oc(e)}function Uw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var sr=typeof Object.is=="function"?Object.is:Uw;function Gl(t,e){if(sr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zf.call(e,i)||!sr(t[i],e[i]))return!1}return!0}function C0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function E0(t,e){var n=C0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=C0(n)}}function Ex(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ex(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Tx(){for(var t=window,e=Lu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Lu(t.document)}return e}function Gp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ww(t){var e=Tx(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ex(n.ownerDocument.documentElement,n)){if(r!==null&&Gp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=E0(n,o);var s=E0(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Vw=Dr&&"documentMode"in document&&11>=document.documentMode,Ho=null,xd=null,wl=null,vd=!1;function T0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vd||Ho==null||Ho!==Lu(r)||(r=Ho,"selectionStart"in r&&Gp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wl&&Gl(wl,r)||(wl=r,r=Wu(xd,"onSelect"),0<r.length&&(e=new Hp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ho)))}function Fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Yo={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},mf={},Px={};Dr&&(Px=document.createElement("div").style,"AnimationEvent"in window||(delete Yo.animationend.animation,delete Yo.animationiteration.animation,delete Yo.animationstart.animation),"TransitionEvent"in window||delete Yo.transitionend.transition);function zc(t){if(mf[t])return mf[t];if(!Yo[t])return t;var e=Yo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Px)return mf[t]=e[n];return t}var jx=zc("animationend"),Ox=zc("animationiteration"),zx=zc("animationstart"),Rx=zc("transitionend"),Nx=new Map,P0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bi(t,e){Nx.set(t,e),To(e,[t])}for(var gf=0;gf<P0.length;gf++){var xf=P0[gf],Hw=xf.toLowerCase(),Yw=xf[0].toUpperCase()+xf.slice(1);bi(Hw,"on"+Yw)}bi(jx,"onAnimationEnd");bi(Ox,"onAnimationIteration");bi(zx,"onAnimationStart");bi("dblclick","onDoubleClick");bi("focusin","onFocus");bi("focusout","onBlur");bi(Rx,"onTransitionEnd");vs("onMouseEnter",["mouseout","mouseover"]);vs("onMouseLeave",["mouseout","mouseover"]);vs("onPointerEnter",["pointerout","pointerover"]);vs("onPointerLeave",["pointerout","pointerover"]);To("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));To("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));To("onBeforeInput",["compositionend","keypress","textInput","paste"]);To("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));To("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));To("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xw=new Set("cancel close invalid load scroll toggle".split(" ").concat(al));function j0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,H_(r,e,void 0,t),t.currentTarget=null}function bx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;j0(i,l,u),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;j0(i,l,u),o=a}}}if(Du)throw t=pd,Du=!1,pd=null,t}function _e(t,e){var n=e[kd];n===void 0&&(n=e[kd]=new Set);var r=t+"__bubble";n.has(r)||(Mx(e,t,2,!1),n.add(r))}function vf(t,e,n){var r=0;e&&(r|=4),Mx(n,t,r,e)}var Da="_reactListening"+Math.random().toString(36).slice(2);function Ql(t){if(!t[Da]){t[Da]=!0,Bg.forEach(function(n){n!=="selectionchange"&&(Xw.has(n)||vf(n,!1,t),vf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Da]||(e[Da]=!0,vf("selectionchange",!1,e))}}function Mx(t,e,n,r){switch(xx(e)){case 1:var i=lw;break;case 4:i=aw;break;default:i=Wp}n=i.bind(null,e,n,t),i=void 0,!dd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function yf(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Ki(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}rx(function(){var u=o,c=$p(n),d=[];e:{var p=Nx.get(t);if(p!==void 0){var h=Hp,y=t;switch(t){case"keypress":if(du(n)===0)break e;case"keydown":case"keyup":h=kw;break;case"focusin":y="focus",h=df;break;case"focusout":y="blur",h=df;break;case"beforeblur":case"afterblur":h=df;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=g0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=fw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Tw;break;case jx:case Ox:case zx:h=hw;break;case Rx:h=jw;break;case"scroll":h=uw;break;case"wheel":h=zw;break;case"copy":case"cut":case"paste":h=gw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=v0}var g=(e&4)!==0,w=!g&&t==="scroll",x=g?p!==null?p+"Capture":null:p;g=[];for(var m=u,v;m!==null;){v=m;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,x!==null&&(_=Wl(m,x),_!=null&&g.push(Kl(m,_,v)))),w)break;m=m.return}0<g.length&&(p=new h(p,y,null,n,c),d.push({event:p,listeners:g}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",p&&n!==cd&&(y=n.relatedTarget||n.fromElement)&&(Ki(y)||y[$r]))break e;if((h||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,h?(y=n.relatedTarget||n.toElement,h=u,y=y?Ki(y):null,y!==null&&(w=Po(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=u),h!==y)){if(g=g0,_="onMouseLeave",x="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(g=v0,_="onPointerLeave",x="onPointerEnter",m="pointer"),w=h==null?p:Xo(h),v=y==null?p:Xo(y),p=new g(_,m+"leave",h,n,c),p.target=w,p.relatedTarget=v,_=null,Ki(c)===u&&(g=new g(x,m+"enter",y,n,c),g.target=v,g.relatedTarget=w,_=g),w=_,h&&y)t:{for(g=h,x=y,m=0,v=g;v;v=Mo(v))m++;for(v=0,_=x;_;_=Mo(_))v++;for(;0<m-v;)g=Mo(g),m--;for(;0<v-m;)x=Mo(x),v--;for(;m--;){if(g===x||x!==null&&g===x.alternate)break t;g=Mo(g),x=Mo(x)}g=null}else g=null;h!==null&&O0(d,p,h,g,!1),y!==null&&w!==null&&O0(d,w,y,g,!0)}}e:{if(p=u?Xo(u):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var C=Fw;else if(w0(p))if(kx)C=Bw;else{C=$w;var E=Dw}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=Aw);if(C&&(C=C(t,u))){Sx(d,C,n,c);break e}E&&E(t,p,u),t==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&od(p,"number",p.value)}switch(E=u?Xo(u):window,t){case"focusin":(w0(E)||E.contentEditable==="true")&&(Ho=E,xd=u,wl=null);break;case"focusout":wl=xd=Ho=null;break;case"mousedown":vd=!0;break;case"contextmenu":case"mouseup":case"dragend":vd=!1,T0(d,n,c);break;case"selectionchange":if(Vw)break;case"keydown":case"keyup":T0(d,n,c)}var S;if(Xp)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Vo?_x(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(yx&&n.locale!=="ko"&&(Vo||T!=="onCompositionStart"?T==="onCompositionEnd"&&Vo&&(S=vx()):(li=c,Vp="value"in li?li.value:li.textContent,Vo=!0)),E=Wu(u,T),0<E.length&&(T=new x0(T,t,null,n,c),d.push({event:T,listeners:E}),S?T.data=S:(S=wx(n),S!==null&&(T.data=S)))),(S=Nw?bw(t,n):Mw(t,n))&&(u=Wu(u,"onBeforeInput"),0<u.length&&(c=new x0("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=S))}bx(d,e)})}function Kl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Wl(t,n),o!=null&&r.unshift(Kl(t,o,i)),o=Wl(t,e),o!=null&&r.push(Kl(t,o,i))),t=t.return}return r}function Mo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function O0(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Wl(n,o),a!=null&&s.unshift(Kl(n,a,l))):i||(a=Wl(n,o),a!=null&&s.push(Kl(n,a,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Gw=/\r\n?/g,Qw=/\u0000|\uFFFD/g;function z0(t){return(typeof t=="string"?t:""+t).replace(Gw,`
`).replace(Qw,"")}function $a(t,e,n){if(e=z0(e),z0(t)!==e&&n)throw Error(b(425))}function Vu(){}var yd=null,_d=null;function wd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sd=typeof setTimeout=="function"?setTimeout:void 0,Kw=typeof clearTimeout=="function"?clearTimeout:void 0,R0=typeof Promise=="function"?Promise:void 0,qw=typeof queueMicrotask=="function"?queueMicrotask:typeof R0<"u"?function(t){return R0.resolve(null).then(t).catch(Zw)}:Sd;function Zw(t){setTimeout(function(){throw t})}function _f(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Yl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yl(e)}function vi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function N0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $s=Math.random().toString(36).slice(2),mr="__reactFiber$"+$s,ql="__reactProps$"+$s,$r="__reactContainer$"+$s,kd="__reactEvents$"+$s,Jw="__reactListeners$"+$s,eS="__reactHandles$"+$s;function Ki(t){var e=t[mr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$r]||n[mr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=N0(t);t!==null;){if(n=t[mr])return n;t=N0(t)}return e}t=n,n=t.parentNode}return null}function _a(t){return t=t[mr]||t[$r],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function Rc(t){return t[ql]||null}var Cd=[],Go=-1;function Mi(t){return{current:t}}function ke(t){0>Go||(t.current=Cd[Go],Cd[Go]=null,Go--)}function ye(t,e){Go++,Cd[Go]=t.current,t.current=e}var Oi={},Mt=Mi(Oi),Jt=Mi(!1),ho=Oi;function ys(t,e){var n=t.type.contextTypes;if(!n)return Oi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function en(t){return t=t.childContextTypes,t!=null}function Hu(){ke(Jt),ke(Mt)}function b0(t,e,n){if(Mt.current!==Oi)throw Error(b(168));ye(Mt,e),ye(Jt,n)}function Ix(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,D_(t)||"Unknown",i));return Ie({},n,r)}function Yu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Oi,ho=Mt.current,ye(Mt,t),ye(Jt,Jt.current),!0}function M0(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=Ix(t,e,ho),r.__reactInternalMemoizedMergedChildContext=t,ke(Jt),ke(Mt),ye(Mt,t)):ke(Jt),ye(Jt,n)}var zr=null,Nc=!1,wf=!1;function Lx(t){zr===null?zr=[t]:zr.push(t)}function tS(t){Nc=!0,Lx(t)}function Ii(){if(!wf&&zr!==null){wf=!0;var t=0,e=he;try{var n=zr;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}zr=null,Nc=!1}catch(i){throw zr!==null&&(zr=zr.slice(t+1)),lx(Ap,Ii),i}finally{he=e,wf=!1}}return null}var Qo=[],Ko=0,Xu=null,Gu=0,Rn=[],Nn=0,mo=null,br=1,Mr="";function Hi(t,e){Qo[Ko++]=Gu,Qo[Ko++]=Xu,Xu=t,Gu=e}function Fx(t,e,n){Rn[Nn++]=br,Rn[Nn++]=Mr,Rn[Nn++]=mo,mo=t;var r=br;t=Mr;var i=32-rr(r)-1;r&=~(1<<i),n+=1;var o=32-rr(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,br=1<<32-rr(e)+i|n<<i|r,Mr=o+t}else br=1<<o|n<<i|r,Mr=t}function Qp(t){t.return!==null&&(Hi(t,1),Fx(t,1,0))}function Kp(t){for(;t===Xu;)Xu=Qo[--Ko],Qo[Ko]=null,Gu=Qo[--Ko],Qo[Ko]=null;for(;t===mo;)mo=Rn[--Nn],Rn[Nn]=null,Mr=Rn[--Nn],Rn[Nn]=null,br=Rn[--Nn],Rn[Nn]=null}var _n=null,vn=null,Te=!1,er=null;function Dx(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function I0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_n=t,vn=vi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_n=t,vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=mo!==null?{id:br,overflow:Mr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_n=t,vn=null,!0):!1;default:return!1}}function Ed(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Td(t){if(Te){var e=vn;if(e){var n=e;if(!I0(t,e)){if(Ed(t))throw Error(b(418));e=vi(n.nextSibling);var r=_n;e&&I0(t,e)?Dx(r,n):(t.flags=t.flags&-4097|2,Te=!1,_n=t)}}else{if(Ed(t))throw Error(b(418));t.flags=t.flags&-4097|2,Te=!1,_n=t}}}function L0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_n=t}function Aa(t){if(t!==_n)return!1;if(!Te)return L0(t),Te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!wd(t.type,t.memoizedProps)),e&&(e=vn)){if(Ed(t))throw $x(),Error(b(418));for(;e;)Dx(t,e),e=vi(e.nextSibling)}if(L0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vn=vi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vn=null}}else vn=_n?vi(t.stateNode.nextSibling):null;return!0}function $x(){for(var t=vn;t;)t=vi(t.nextSibling)}function _s(){vn=_n=null,Te=!1}function qp(t){er===null?er=[t]:er.push(t)}var nS=Vr.ReactCurrentBatchConfig;function Js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function Ba(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function F0(t){var e=t._init;return e(t._payload)}function Ax(t){function e(x,m){if(t){var v=x.deletions;v===null?(x.deletions=[m],x.flags|=16):v.push(m)}}function n(x,m){if(!t)return null;for(;m!==null;)e(x,m),m=m.sibling;return null}function r(x,m){for(x=new Map;m!==null;)m.key!==null?x.set(m.key,m):x.set(m.index,m),m=m.sibling;return x}function i(x,m){return x=Si(x,m),x.index=0,x.sibling=null,x}function o(x,m,v){return x.index=v,t?(v=x.alternate,v!==null?(v=v.index,v<m?(x.flags|=2,m):v):(x.flags|=2,m)):(x.flags|=1048576,m)}function s(x){return t&&x.alternate===null&&(x.flags|=2),x}function l(x,m,v,_){return m===null||m.tag!==6?(m=jf(v,x.mode,_),m.return=x,m):(m=i(m,v),m.return=x,m)}function a(x,m,v,_){var C=v.type;return C===Wo?c(x,m,v.props.children,_,v.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ri&&F0(C)===m.type)?(_=i(m,v.props),_.ref=Js(x,m,v),_.return=x,_):(_=yu(v.type,v.key,v.props,null,x.mode,_),_.ref=Js(x,m,v),_.return=x,_)}function u(x,m,v,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Of(v,x.mode,_),m.return=x,m):(m=i(m,v.children||[]),m.return=x,m)}function c(x,m,v,_,C){return m===null||m.tag!==7?(m=ro(v,x.mode,_,C),m.return=x,m):(m=i(m,v),m.return=x,m)}function d(x,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=jf(""+m,x.mode,v),m.return=x,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case za:return v=yu(m.type,m.key,m.props,null,x.mode,v),v.ref=Js(x,null,m),v.return=x,v;case Uo:return m=Of(m,x.mode,v),m.return=x,m;case ri:var _=m._init;return d(x,_(m._payload),v)}if(sl(m)||Gs(m))return m=ro(m,x.mode,v,null),m.return=x,m;Ba(x,m)}return null}function p(x,m,v,_){var C=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:l(x,m,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case za:return v.key===C?a(x,m,v,_):null;case Uo:return v.key===C?u(x,m,v,_):null;case ri:return C=v._init,p(x,m,C(v._payload),_)}if(sl(v)||Gs(v))return C!==null?null:c(x,m,v,_,null);Ba(x,v)}return null}function h(x,m,v,_,C){if(typeof _=="string"&&_!==""||typeof _=="number")return x=x.get(v)||null,l(m,x,""+_,C);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case za:return x=x.get(_.key===null?v:_.key)||null,a(m,x,_,C);case Uo:return x=x.get(_.key===null?v:_.key)||null,u(m,x,_,C);case ri:var E=_._init;return h(x,m,v,E(_._payload),C)}if(sl(_)||Gs(_))return x=x.get(v)||null,c(m,x,_,C,null);Ba(m,_)}return null}function y(x,m,v,_){for(var C=null,E=null,S=m,T=m=0,z=null;S!==null&&T<v.length;T++){S.index>T?(z=S,S=null):z=S.sibling;var j=p(x,S,v[T],_);if(j===null){S===null&&(S=z);break}t&&S&&j.alternate===null&&e(x,S),m=o(j,m,T),E===null?C=j:E.sibling=j,E=j,S=z}if(T===v.length)return n(x,S),Te&&Hi(x,T),C;if(S===null){for(;T<v.length;T++)S=d(x,v[T],_),S!==null&&(m=o(S,m,T),E===null?C=S:E.sibling=S,E=S);return Te&&Hi(x,T),C}for(S=r(x,S);T<v.length;T++)z=h(S,x,T,v[T],_),z!==null&&(t&&z.alternate!==null&&S.delete(z.key===null?T:z.key),m=o(z,m,T),E===null?C=z:E.sibling=z,E=z);return t&&S.forEach(function($){return e(x,$)}),Te&&Hi(x,T),C}function g(x,m,v,_){var C=Gs(v);if(typeof C!="function")throw Error(b(150));if(v=C.call(v),v==null)throw Error(b(151));for(var E=C=null,S=m,T=m=0,z=null,j=v.next();S!==null&&!j.done;T++,j=v.next()){S.index>T?(z=S,S=null):z=S.sibling;var $=p(x,S,j.value,_);if($===null){S===null&&(S=z);break}t&&S&&$.alternate===null&&e(x,S),m=o($,m,T),E===null?C=$:E.sibling=$,E=$,S=z}if(j.done)return n(x,S),Te&&Hi(x,T),C;if(S===null){for(;!j.done;T++,j=v.next())j=d(x,j.value,_),j!==null&&(m=o(j,m,T),E===null?C=j:E.sibling=j,E=j);return Te&&Hi(x,T),C}for(S=r(x,S);!j.done;T++,j=v.next())j=h(S,x,T,j.value,_),j!==null&&(t&&j.alternate!==null&&S.delete(j.key===null?T:j.key),m=o(j,m,T),E===null?C=j:E.sibling=j,E=j);return t&&S.forEach(function(M){return e(x,M)}),Te&&Hi(x,T),C}function w(x,m,v,_){if(typeof v=="object"&&v!==null&&v.type===Wo&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case za:e:{for(var C=v.key,E=m;E!==null;){if(E.key===C){if(C=v.type,C===Wo){if(E.tag===7){n(x,E.sibling),m=i(E,v.props.children),m.return=x,x=m;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ri&&F0(C)===E.type){n(x,E.sibling),m=i(E,v.props),m.ref=Js(x,E,v),m.return=x,x=m;break e}n(x,E);break}else e(x,E);E=E.sibling}v.type===Wo?(m=ro(v.props.children,x.mode,_,v.key),m.return=x,x=m):(_=yu(v.type,v.key,v.props,null,x.mode,_),_.ref=Js(x,m,v),_.return=x,x=_)}return s(x);case Uo:e:{for(E=v.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(x,m.sibling),m=i(m,v.children||[]),m.return=x,x=m;break e}else{n(x,m);break}else e(x,m);m=m.sibling}m=Of(v,x.mode,_),m.return=x,x=m}return s(x);case ri:return E=v._init,w(x,m,E(v._payload),_)}if(sl(v))return y(x,m,v,_);if(Gs(v))return g(x,m,v,_);Ba(x,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(x,m.sibling),m=i(m,v),m.return=x,x=m):(n(x,m),m=jf(v,x.mode,_),m.return=x,x=m),s(x)):n(x,m)}return w}var ws=Ax(!0),Bx=Ax(!1),Qu=Mi(null),Ku=null,qo=null,Zp=null;function Jp(){Zp=qo=Ku=null}function eh(t){var e=Qu.current;ke(Qu),t._currentValue=e}function Pd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function as(t,e){Ku=t,Zp=qo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Kt=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(Zp!==t)if(t={context:t,memoizedValue:e,next:null},qo===null){if(Ku===null)throw Error(b(308));qo=t,Ku.dependencies={lanes:0,firstContext:t}}else qo=qo.next=t;return e}var qi=null;function th(t){qi===null?qi=[t]:qi.push(t)}function Ux(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,th(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ar(t,r)}function Ar(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ii=!1;function nh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Lr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ar(t,n)}return i=r.interleaved,i===null?(e.next=e,th(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ar(t,n)}function pu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bp(t,n)}}function D0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function qu(t,e,n,r){var i=t.updateQueue;ii=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?o=u:s.next=u,s=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==s&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(o!==null){var d=i.baseState;s=0,c=u=a=null,l=o;do{var p=l.lane,h=l.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=t,g=l;switch(p=e,h=n,g.tag){case 1:if(y=g.payload,typeof y=="function"){d=y.call(h,d,p);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=g.payload,p=typeof y=="function"?y.call(h,d,p):y,p==null)break e;d=Ie({},d,p);break e;case 2:ii=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else h={eventTime:h,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=h,a=d):c=c.next=h,s|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);xo|=s,t.lanes=s,t.memoizedState=d}}function $0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var wa={},_r=Mi(wa),Zl=Mi(wa),Jl=Mi(wa);function Zi(t){if(t===wa)throw Error(b(174));return t}function rh(t,e){switch(ye(Jl,e),ye(Zl,t),ye(_r,wa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ld(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ld(e,t)}ke(_r),ye(_r,e)}function Ss(){ke(_r),ke(Zl),ke(Jl)}function Vx(t){Zi(Jl.current);var e=Zi(_r.current),n=ld(e,t.type);e!==n&&(ye(Zl,t),ye(_r,n))}function ih(t){Zl.current===t&&(ke(_r),ke(Zl))}var Re=Mi(0);function Zu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Sf=[];function oh(){for(var t=0;t<Sf.length;t++)Sf[t]._workInProgressVersionPrimary=null;Sf.length=0}var hu=Vr.ReactCurrentDispatcher,kf=Vr.ReactCurrentBatchConfig,go=0,Me=null,ot=null,dt=null,Ju=!1,Sl=!1,ea=0,rS=0;function Tt(){throw Error(b(321))}function sh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!sr(t[n],e[n]))return!1;return!0}function lh(t,e,n,r,i,o){if(go=o,Me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hu.current=t===null||t.memoizedState===null?lS:aS,t=n(r,i),Sl){o=0;do{if(Sl=!1,ea=0,25<=o)throw Error(b(301));o+=1,dt=ot=null,e.updateQueue=null,hu.current=uS,t=n(r,i)}while(Sl)}if(hu.current=ec,e=ot!==null&&ot.next!==null,go=0,dt=ot=Me=null,Ju=!1,e)throw Error(b(300));return t}function ah(){var t=ea!==0;return ea=0,t}function fr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?Me.memoizedState=dt=t:dt=dt.next=t,dt}function Bn(){if(ot===null){var t=Me.alternate;t=t!==null?t.memoizedState:null}else t=ot.next;var e=dt===null?Me.memoizedState:dt.next;if(e!==null)dt=e,ot=t;else{if(t===null)throw Error(b(310));ot=t,t={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},dt===null?Me.memoizedState=dt=t:dt=dt.next=t}return dt}function ta(t,e){return typeof e=="function"?e(t):e}function Cf(t){var e=Bn(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=ot,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,u=o;do{var c=u.lane;if((go&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,s=r):a=a.next=d,Me.lanes|=c,xo|=c}u=u.next}while(u!==null&&u!==o);a===null?s=r:a.next=l,sr(r,e.memoizedState)||(Kt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Me.lanes|=o,xo|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ef(t){var e=Bn(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);sr(o,e.memoizedState)||(Kt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function Hx(){}function Yx(t,e){var n=Me,r=Bn(),i=e(),o=!sr(r.memoizedState,i);if(o&&(r.memoizedState=i,Kt=!0),r=r.queue,uh(Qx.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||dt!==null&&dt.memoizedState.tag&1){if(n.flags|=2048,na(9,Gx.bind(null,n,r,i,e),void 0,null),mt===null)throw Error(b(349));go&30||Xx(n,e,i)}return i}function Xx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Me.updateQueue,e===null?(e={lastEffect:null,stores:null},Me.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gx(t,e,n,r){e.value=n,e.getSnapshot=r,Kx(e)&&qx(t)}function Qx(t,e,n){return n(function(){Kx(e)&&qx(t)})}function Kx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!sr(t,n)}catch{return!0}}function qx(t){var e=Ar(t,1);e!==null&&ir(e,t,1,-1)}function A0(t){var e=fr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},e.queue=t,t=t.dispatch=sS.bind(null,Me,t),[e.memoizedState,t]}function na(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Me.updateQueue,e===null?(e={lastEffect:null,stores:null},Me.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Zx(){return Bn().memoizedState}function mu(t,e,n,r){var i=fr();Me.flags|=t,i.memoizedState=na(1|e,n,void 0,r===void 0?null:r)}function bc(t,e,n,r){var i=Bn();r=r===void 0?null:r;var o=void 0;if(ot!==null){var s=ot.memoizedState;if(o=s.destroy,r!==null&&sh(r,s.deps)){i.memoizedState=na(e,n,o,r);return}}Me.flags|=t,i.memoizedState=na(1|e,n,o,r)}function B0(t,e){return mu(8390656,8,t,e)}function uh(t,e){return bc(2048,8,t,e)}function Jx(t,e){return bc(4,2,t,e)}function e1(t,e){return bc(4,4,t,e)}function t1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function n1(t,e,n){return n=n!=null?n.concat([t]):null,bc(4,4,t1.bind(null,e,t),n)}function ch(){}function r1(t,e){var n=Bn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function i1(t,e){var n=Bn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function o1(t,e,n){return go&21?(sr(n,e)||(n=cx(),Me.lanes|=n,xo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Kt=!0),t.memoizedState=n)}function iS(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=kf.transition;kf.transition={};try{t(!1),e()}finally{he=n,kf.transition=r}}function s1(){return Bn().memoizedState}function oS(t,e,n){var r=wi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},l1(t))a1(e,n);else if(n=Ux(t,e,n,r),n!==null){var i=Vt();ir(n,t,r,i),u1(n,e,r)}}function sS(t,e,n){var r=wi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(l1(t))a1(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,sr(l,s)){var a=e.interleaved;a===null?(i.next=i,th(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Ux(t,e,i,r),n!==null&&(i=Vt(),ir(n,t,r,i),u1(n,e,r))}}function l1(t){var e=t.alternate;return t===Me||e!==null&&e===Me}function a1(t,e){Sl=Ju=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function u1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bp(t,n)}}var ec={readContext:An,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useInsertionEffect:Tt,useLayoutEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useMutableSource:Tt,useSyncExternalStore:Tt,useId:Tt,unstable_isNewReconciler:!1},lS={readContext:An,useCallback:function(t,e){return fr().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:B0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,mu(4194308,4,t1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return mu(4194308,4,t,e)},useInsertionEffect:function(t,e){return mu(4,2,t,e)},useMemo:function(t,e){var n=fr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=fr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=oS.bind(null,Me,t),[r.memoizedState,t]},useRef:function(t){var e=fr();return t={current:t},e.memoizedState=t},useState:A0,useDebugValue:ch,useDeferredValue:function(t){return fr().memoizedState=t},useTransition:function(){var t=A0(!1),e=t[0];return t=iS.bind(null,t[1]),fr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Me,i=fr();if(Te){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),mt===null)throw Error(b(349));go&30||Xx(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,B0(Qx.bind(null,r,o,t),[t]),r.flags|=2048,na(9,Gx.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=fr(),e=mt.identifierPrefix;if(Te){var n=Mr,r=br;n=(r&~(1<<32-rr(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=rS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},aS={readContext:An,useCallback:r1,useContext:An,useEffect:uh,useImperativeHandle:n1,useInsertionEffect:Jx,useLayoutEffect:e1,useMemo:i1,useReducer:Cf,useRef:Zx,useState:function(){return Cf(ta)},useDebugValue:ch,useDeferredValue:function(t){var e=Bn();return o1(e,ot.memoizedState,t)},useTransition:function(){var t=Cf(ta)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:Hx,useSyncExternalStore:Yx,useId:s1,unstable_isNewReconciler:!1},uS={readContext:An,useCallback:r1,useContext:An,useEffect:uh,useImperativeHandle:n1,useInsertionEffect:Jx,useLayoutEffect:e1,useMemo:i1,useReducer:Ef,useRef:Zx,useState:function(){return Ef(ta)},useDebugValue:ch,useDeferredValue:function(t){var e=Bn();return ot===null?e.memoizedState=t:o1(e,ot.memoizedState,t)},useTransition:function(){var t=Ef(ta)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:Hx,useSyncExternalStore:Yx,useId:s1,unstable_isNewReconciler:!1};function Zn(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function jd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mc={isMounted:function(t){return(t=t._reactInternals)?Po(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Vt(),i=wi(t),o=Lr(r,i);o.payload=e,n!=null&&(o.callback=n),e=yi(t,o,i),e!==null&&(ir(e,t,i,r),pu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Vt(),i=wi(t),o=Lr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=yi(t,o,i),e!==null&&(ir(e,t,i,r),pu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Vt(),r=wi(t),i=Lr(n,r);i.tag=2,e!=null&&(i.callback=e),e=yi(t,i,r),e!==null&&(ir(e,t,r,n),pu(e,t,r))}};function U0(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Gl(n,r)||!Gl(i,o):!0}function c1(t,e,n){var r=!1,i=Oi,o=e.contextType;return typeof o=="object"&&o!==null?o=An(o):(i=en(e)?ho:Mt.current,r=e.contextTypes,o=(r=r!=null)?ys(t,i):Oi),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function W0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Mc.enqueueReplaceState(e,e.state,null)}function Od(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},nh(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=An(o):(o=en(e)?ho:Mt.current,i.context=ys(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(jd(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Mc.enqueueReplaceState(i,i.state,null),qu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ks(t,e){try{var n="",r=e;do n+=F_(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Tf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var cS=typeof WeakMap=="function"?WeakMap:Map;function f1(t,e,n){n=Lr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){nc||(nc=!0,Ad=r),zd(t,e)},n}function d1(t,e,n){n=Lr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){zd(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){zd(t,e),typeof r!="function"&&(_i===null?_i=new Set([this]):_i.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function V0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new cS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=CS.bind(null,t,e,n),e.then(t,t))}function H0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Y0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Lr(-1,1),e.tag=2,yi(n,e,1))),n.lanes|=1),t)}var fS=Vr.ReactCurrentOwner,Kt=!1;function Dt(t,e,n,r){e.child=t===null?Bx(e,null,n,r):ws(e,t.child,n,r)}function X0(t,e,n,r,i){n=n.render;var o=e.ref;return as(e,i),r=lh(t,e,n,r,o,i),n=ah(),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Br(t,e,i)):(Te&&n&&Qp(e),e.flags|=1,Dt(t,e,r,i),e.child)}function G0(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!vh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,p1(t,e,o,r,i)):(t=yu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Gl,n(s,r)&&t.ref===e.ref)return Br(t,e,i)}return e.flags|=1,t=Si(o,r),t.ref=e.ref,t.return=e,e.child=t}function p1(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Gl(o,r)&&t.ref===e.ref)if(Kt=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Kt=!0);else return e.lanes=t.lanes,Br(t,e,i)}return Rd(t,e,n,r,i)}function h1(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Jo,pn),pn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(Jo,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ye(Jo,pn),pn|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,ye(Jo,pn),pn|=r;return Dt(t,e,i,n),e.child}function m1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Rd(t,e,n,r,i){var o=en(n)?ho:Mt.current;return o=ys(e,o),as(e,i),n=lh(t,e,n,r,o,i),r=ah(),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Br(t,e,i)):(Te&&r&&Qp(e),e.flags|=1,Dt(t,e,n,i),e.child)}function Q0(t,e,n,r,i){if(en(n)){var o=!0;Yu(e)}else o=!1;if(as(e,i),e.stateNode===null)gu(t,e),c1(e,n,r),Od(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=An(u):(u=en(n)?ho:Mt.current,u=ys(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&W0(e,s,r,u),ii=!1;var p=e.memoizedState;s.state=p,qu(e,r,s,i),a=e.memoizedState,l!==r||p!==a||Jt.current||ii?(typeof c=="function"&&(jd(e,n,c,r),a=e.memoizedState),(l=ii||U0(e,n,l,r,p,a,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,Wx(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Zn(e.type,l),s.props=u,d=e.pendingProps,p=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=An(a):(a=en(n)?ho:Mt.current,a=ys(e,a));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==d||p!==a)&&W0(e,s,r,a),ii=!1,p=e.memoizedState,s.state=p,qu(e,r,s,i);var y=e.memoizedState;l!==d||p!==y||Jt.current||ii?(typeof h=="function"&&(jd(e,n,h,r),y=e.memoizedState),(u=ii||U0(e,n,u,r,p,y,a)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,a)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),s.props=r,s.state=y,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Nd(t,e,n,r,o,i)}function Nd(t,e,n,r,i,o){m1(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&M0(e,n,!1),Br(t,e,o);r=e.stateNode,fS.current=e;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=ws(e,t.child,null,o),e.child=ws(e,null,l,o)):Dt(t,e,l,o),e.memoizedState=r.state,i&&M0(e,n,!0),e.child}function g1(t){var e=t.stateNode;e.pendingContext?b0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&b0(t,e.context,!1),rh(t,e.containerInfo)}function K0(t,e,n,r,i){return _s(),qp(i),e.flags|=256,Dt(t,e,n,r),e.child}var bd={dehydrated:null,treeContext:null,retryLane:0};function Md(t){return{baseLanes:t,cachePool:null,transitions:null}}function x1(t,e,n){var r=e.pendingProps,i=Re.current,o=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(Re,i&1),t===null)return Td(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Fc(s,r,0,null),t=ro(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Md(n),e.memoizedState=bd,t):fh(e,s));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return dS(t,e,s,r,l,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=Si(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Si(l,o):(o=ro(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Md(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=bd,r}return o=t.child,t=o.sibling,r=Si(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function fh(t,e){return e=Fc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ua(t,e,n,r){return r!==null&&qp(r),ws(e,t.child,null,n),t=fh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function dS(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Tf(Error(b(422))),Ua(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Fc({mode:"visible",children:r.children},i,0,null),o=ro(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&ws(e,t.child,null,s),e.child.memoizedState=Md(s),e.memoizedState=bd,o);if(!(e.mode&1))return Ua(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(b(419)),r=Tf(o,r,void 0),Ua(t,e,s,r)}if(l=(s&t.childLanes)!==0,Kt||l){if(r=mt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ar(t,i),ir(r,t,i,-1))}return xh(),r=Tf(Error(b(421))),Ua(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ES.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,vn=vi(i.nextSibling),_n=e,Te=!0,er=null,t!==null&&(Rn[Nn++]=br,Rn[Nn++]=Mr,Rn[Nn++]=mo,br=t.id,Mr=t.overflow,mo=e),e=fh(e,r.children),e.flags|=4096,e)}function q0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Pd(t.return,e,n)}function Pf(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function v1(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Dt(t,e,r.children,n),r=Re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&q0(t,n,e);else if(t.tag===19)q0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(Re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Zu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Pf(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Zu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Pf(e,!0,n,null,o);break;case"together":Pf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Br(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),xo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=Si(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Si(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function pS(t,e,n){switch(e.tag){case 3:g1(e),_s();break;case 5:Vx(e);break;case 1:en(e.type)&&Yu(e);break;case 4:rh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(Qu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Re,Re.current&1),e.flags|=128,null):n&e.child.childLanes?x1(t,e,n):(ye(Re,Re.current&1),t=Br(t,e,n),t!==null?t.sibling:null);ye(Re,Re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return v1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Re,Re.current),r)break;return null;case 22:case 23:return e.lanes=0,h1(t,e,n)}return Br(t,e,n)}var y1,Id,_1,w1;y1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Id=function(){};_1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Zi(_r.current);var o=null;switch(n){case"input":i=rd(t,i),r=rd(t,r),o=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),o=[];break;case"textarea":i=sd(t,i),r=sd(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Vu)}ad(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bl.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bl.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&_e("scroll",t),o||l===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};w1=function(t,e,n,r){n!==r&&(e.flags|=4)};function el(t,e){if(!Te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function hS(t,e,n){var r=e.pendingProps;switch(Kp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pt(e),null;case 1:return en(e.type)&&Hu(),Pt(e),null;case 3:return r=e.stateNode,Ss(),ke(Jt),ke(Mt),oh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Aa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,er!==null&&(Wd(er),er=null))),Id(t,e),Pt(e),null;case 5:ih(e);var i=Zi(Jl.current);if(n=e.type,t!==null&&e.stateNode!=null)_1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return Pt(e),null}if(t=Zi(_r.current),Aa(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[mr]=e,r[ql]=o,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<al.length;i++)_e(al[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":s0(r,o),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},_e("invalid",r);break;case"textarea":a0(r,o),_e("invalid",r)}ad(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&$a(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&$a(r.textContent,l,t),i=["children",""+l]):Bl.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&_e("scroll",r)}switch(n){case"input":Ra(r),l0(r,o,!0);break;case"textarea":Ra(r),u0(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Vu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Qg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[mr]=e,t[ql]=r,y1(t,e,!1,!1),e.stateNode=t;e:{switch(s=ud(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<al.length;i++)_e(al[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":s0(t,r),i=rd(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),_e("invalid",t);break;case"textarea":a0(t,r),i=sd(t,r),_e("invalid",t);break;default:i=r}ad(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?Zg(t,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Kg(t,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ul(t,a):typeof a=="number"&&Ul(t,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Bl.hasOwnProperty(o)?a!=null&&o==="onScroll"&&_e("scroll",t):a!=null&&Ip(t,o,a,s))}switch(n){case"input":Ra(t),l0(t,r,!1);break;case"textarea":Ra(t),u0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ji(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?is(t,!!r.multiple,o,!1):r.defaultValue!=null&&is(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Vu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pt(e),null;case 6:if(t&&e.stateNode!=null)w1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=Zi(Jl.current),Zi(_r.current),Aa(e)){if(r=e.stateNode,n=e.memoizedProps,r[mr]=e,(o=r.nodeValue!==n)&&(t=_n,t!==null))switch(t.tag){case 3:$a(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$a(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mr]=e,e.stateNode=r}return Pt(e),null;case 13:if(ke(Re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Te&&vn!==null&&e.mode&1&&!(e.flags&128))$x(),_s(),e.flags|=98560,o=!1;else if(o=Aa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(b(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(b(317));o[mr]=e}else _s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Pt(e),o=!1}else er!==null&&(Wd(er),er=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Re.current&1?lt===0&&(lt=3):xh())),e.updateQueue!==null&&(e.flags|=4),Pt(e),null);case 4:return Ss(),Id(t,e),t===null&&Ql(e.stateNode.containerInfo),Pt(e),null;case 10:return eh(e.type._context),Pt(e),null;case 17:return en(e.type)&&Hu(),Pt(e),null;case 19:if(ke(Re),o=e.memoizedState,o===null)return Pt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)el(o,!1);else{if(lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Zu(t),s!==null){for(e.flags|=128,el(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(Re,Re.current&1|2),e.child}t=t.sibling}o.tail!==null&&He()>Cs&&(e.flags|=128,r=!0,el(o,!1),e.lanes=4194304)}else{if(!r)if(t=Zu(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),el(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Te)return Pt(e),null}else 2*He()-o.renderingStartTime>Cs&&n!==1073741824&&(e.flags|=128,r=!0,el(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=He(),e.sibling=null,n=Re.current,ye(Re,r?n&1|2:n&1),e):(Pt(e),null);case 22:case 23:return gh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?pn&1073741824&&(Pt(e),e.subtreeFlags&6&&(e.flags|=8192)):Pt(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function mS(t,e){switch(Kp(e),e.tag){case 1:return en(e.type)&&Hu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ss(),ke(Jt),ke(Mt),oh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ih(e),null;case 13:if(ke(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));_s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ke(Re),null;case 4:return Ss(),null;case 10:return eh(e.type._context),null;case 22:case 23:return gh(),null;case 24:return null;default:return null}}var Wa=!1,zt=!1,gS=typeof WeakSet=="function"?WeakSet:Set,F=null;function Zo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Fe(t,e,r)}else n.current=null}function Ld(t,e,n){try{n()}catch(r){Fe(t,e,r)}}var Z0=!1;function xS(t,e){if(yd=Bu,t=Tx(),Gp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,u=0,c=0,d=t,p=null;t:for(;;){for(var h;d!==n||i!==0&&d.nodeType!==3||(l=s+i),d!==o||r!==0&&d.nodeType!==3||(a=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(h=d.firstChild)!==null;)p=d,d=h;for(;;){if(d===t)break t;if(p===n&&++u===i&&(l=s),p===o&&++c===r&&(a=s),(h=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=h}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(_d={focusedElem:t,selectionRange:n},Bu=!1,F=e;F!==null;)if(e=F,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,F=t;else for(;F!==null;){e=F;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var g=y.memoizedProps,w=y.memoizedState,x=e.stateNode,m=x.getSnapshotBeforeUpdate(e.elementType===e.type?g:Zn(e.type,g),w);x.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(_){Fe(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,F=t;break}F=e.return}return y=Z0,Z0=!1,y}function kl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ld(e,n,o)}i=i.next}while(i!==r)}}function Ic(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Fd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function S1(t){var e=t.alternate;e!==null&&(t.alternate=null,S1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mr],delete e[ql],delete e[kd],delete e[Jw],delete e[eS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function k1(t){return t.tag===5||t.tag===3||t.tag===4}function J0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||k1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Dd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vu));else if(r!==4&&(t=t.child,t!==null))for(Dd(t,e,n),t=t.sibling;t!==null;)Dd(t,e,n),t=t.sibling}function $d(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for($d(t,e,n),t=t.sibling;t!==null;)$d(t,e,n),t=t.sibling}var yt=null,Jn=!1;function Kr(t,e,n){for(n=n.child;n!==null;)C1(t,e,n),n=n.sibling}function C1(t,e,n){if(yr&&typeof yr.onCommitFiberUnmount=="function")try{yr.onCommitFiberUnmount(Pc,n)}catch{}switch(n.tag){case 5:zt||Zo(n,e);case 6:var r=yt,i=Jn;yt=null,Kr(t,e,n),yt=r,Jn=i,yt!==null&&(Jn?(t=yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):yt.removeChild(n.stateNode));break;case 18:yt!==null&&(Jn?(t=yt,n=n.stateNode,t.nodeType===8?_f(t.parentNode,n):t.nodeType===1&&_f(t,n),Yl(t)):_f(yt,n.stateNode));break;case 4:r=yt,i=Jn,yt=n.stateNode.containerInfo,Jn=!0,Kr(t,e,n),yt=r,Jn=i;break;case 0:case 11:case 14:case 15:if(!zt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ld(n,e,s),i=i.next}while(i!==r)}Kr(t,e,n);break;case 1:if(!zt&&(Zo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Fe(n,e,l)}Kr(t,e,n);break;case 21:Kr(t,e,n);break;case 22:n.mode&1?(zt=(r=zt)||n.memoizedState!==null,Kr(t,e,n),zt=r):Kr(t,e,n);break;default:Kr(t,e,n)}}function em(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new gS),e.forEach(function(r){var i=TS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:yt=l.stateNode,Jn=!1;break e;case 3:yt=l.stateNode.containerInfo,Jn=!0;break e;case 4:yt=l.stateNode.containerInfo,Jn=!0;break e}l=l.return}if(yt===null)throw Error(b(160));C1(o,s,i),yt=null,Jn=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){Fe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)E1(e,t),e=e.sibling}function E1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qn(e,t),cr(t),r&4){try{kl(3,t,t.return),Ic(3,t)}catch(g){Fe(t,t.return,g)}try{kl(5,t,t.return)}catch(g){Fe(t,t.return,g)}}break;case 1:Qn(e,t),cr(t),r&512&&n!==null&&Zo(n,n.return);break;case 5:if(Qn(e,t),cr(t),r&512&&n!==null&&Zo(n,n.return),t.flags&32){var i=t.stateNode;try{Ul(i,"")}catch(g){Fe(t,t.return,g)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Xg(i,o),ud(l,s);var u=ud(l,o);for(s=0;s<a.length;s+=2){var c=a[s],d=a[s+1];c==="style"?Zg(i,d):c==="dangerouslySetInnerHTML"?Kg(i,d):c==="children"?Ul(i,d):Ip(i,c,d,u)}switch(l){case"input":id(i,o);break;case"textarea":Gg(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?is(i,!!o.multiple,h,!1):p!==!!o.multiple&&(o.defaultValue!=null?is(i,!!o.multiple,o.defaultValue,!0):is(i,!!o.multiple,o.multiple?[]:"",!1))}i[ql]=o}catch(g){Fe(t,t.return,g)}}break;case 6:if(Qn(e,t),cr(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(g){Fe(t,t.return,g)}}break;case 3:if(Qn(e,t),cr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yl(e.containerInfo)}catch(g){Fe(t,t.return,g)}break;case 4:Qn(e,t),cr(t);break;case 13:Qn(e,t),cr(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(hh=He())),r&4&&em(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(u=zt)||c,Qn(e,t),zt=u):Qn(e,t),cr(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(F=t,c=t.child;c!==null;){for(d=F=c;F!==null;){switch(p=F,h=p.child,p.tag){case 0:case 11:case 14:case 15:kl(4,p,p.return);break;case 1:Zo(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(g){Fe(r,n,g)}}break;case 5:Zo(p,p.return);break;case 22:if(p.memoizedState!==null){nm(d);continue}}h!==null?(h.return=p,F=h):nm(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,a=d.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=qg("display",s))}catch(g){Fe(t,t.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){Fe(t,t.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Qn(e,t),cr(t),r&4&&em(t);break;case 21:break;default:Qn(e,t),cr(t)}}function cr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(k1(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ul(i,""),r.flags&=-33);var o=J0(t);$d(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=J0(t);Dd(t,l,s);break;default:throw Error(b(161))}}catch(a){Fe(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vS(t,e,n){F=t,T1(t)}function T1(t,e,n){for(var r=(t.mode&1)!==0;F!==null;){var i=F,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Wa;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||zt;l=Wa;var u=zt;if(Wa=s,(zt=a)&&!u)for(F=i;F!==null;)s=F,a=s.child,s.tag===22&&s.memoizedState!==null?rm(i):a!==null?(a.return=s,F=a):rm(i);for(;o!==null;)F=o,T1(o),o=o.sibling;F=i,Wa=l,zt=u}tm(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,F=o):tm(t)}}function tm(t){for(;F!==null;){var e=F;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||Ic(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!zt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Zn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&$0(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$0(e,s,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Yl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}zt||e.flags&512&&Fd(e)}catch(p){Fe(e,e.return,p)}}if(e===t){F=null;break}if(n=e.sibling,n!==null){n.return=e.return,F=n;break}F=e.return}}function nm(t){for(;F!==null;){var e=F;if(e===t){F=null;break}var n=e.sibling;if(n!==null){n.return=e.return,F=n;break}F=e.return}}function rm(t){for(;F!==null;){var e=F;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ic(4,e)}catch(a){Fe(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){Fe(e,i,a)}}var o=e.return;try{Fd(e)}catch(a){Fe(e,o,a)}break;case 5:var s=e.return;try{Fd(e)}catch(a){Fe(e,s,a)}}}catch(a){Fe(e,e.return,a)}if(e===t){F=null;break}var l=e.sibling;if(l!==null){l.return=e.return,F=l;break}F=e.return}}var yS=Math.ceil,tc=Vr.ReactCurrentDispatcher,dh=Vr.ReactCurrentOwner,Dn=Vr.ReactCurrentBatchConfig,ae=0,mt=null,tt=null,wt=0,pn=0,Jo=Mi(0),lt=0,ra=null,xo=0,Lc=0,ph=0,Cl=null,Qt=null,hh=0,Cs=1/0,Pr=null,nc=!1,Ad=null,_i=null,Va=!1,ai=null,rc=0,El=0,Bd=null,xu=-1,vu=0;function Vt(){return ae&6?He():xu!==-1?xu:xu=He()}function wi(t){return t.mode&1?ae&2&&wt!==0?wt&-wt:nS.transition!==null?(vu===0&&(vu=cx()),vu):(t=he,t!==0||(t=window.event,t=t===void 0?16:xx(t.type)),t):1}function ir(t,e,n,r){if(50<El)throw El=0,Bd=null,Error(b(185));va(t,n,r),(!(ae&2)||t!==mt)&&(t===mt&&(!(ae&2)&&(Lc|=n),lt===4&&si(t,wt)),tn(t,r),n===1&&ae===0&&!(e.mode&1)&&(Cs=He()+500,Nc&&Ii()))}function tn(t,e){var n=t.callbackNode;nw(t,e);var r=Au(t,t===mt?wt:0);if(r===0)n!==null&&d0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&d0(n),e===1)t.tag===0?tS(im.bind(null,t)):Lx(im.bind(null,t)),qw(function(){!(ae&6)&&Ii()}),n=null;else{switch(fx(r)){case 1:n=Ap;break;case 4:n=ax;break;case 16:n=$u;break;case 536870912:n=ux;break;default:n=$u}n=M1(n,P1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function P1(t,e){if(xu=-1,vu=0,ae&6)throw Error(b(327));var n=t.callbackNode;if(us()&&t.callbackNode!==n)return null;var r=Au(t,t===mt?wt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ic(t,r);else{e=r;var i=ae;ae|=2;var o=O1();(mt!==t||wt!==e)&&(Pr=null,Cs=He()+500,no(t,e));do try{SS();break}catch(l){j1(t,l)}while(!0);Jp(),tc.current=o,ae=i,tt!==null?e=0:(mt=null,wt=0,e=lt)}if(e!==0){if(e===2&&(i=hd(t),i!==0&&(r=i,e=Ud(t,i))),e===1)throw n=ra,no(t,0),si(t,r),tn(t,He()),n;if(e===6)si(t,r);else{if(i=t.current.alternate,!(r&30)&&!_S(i)&&(e=ic(t,r),e===2&&(o=hd(t),o!==0&&(r=o,e=Ud(t,o))),e===1))throw n=ra,no(t,0),si(t,r),tn(t,He()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:Yi(t,Qt,Pr);break;case 3:if(si(t,r),(r&130023424)===r&&(e=hh+500-He(),10<e)){if(Au(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Vt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Sd(Yi.bind(null,t,Qt,Pr),e);break}Yi(t,Qt,Pr);break;case 4:if(si(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-rr(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yS(r/1960))-r,10<r){t.timeoutHandle=Sd(Yi.bind(null,t,Qt,Pr),r);break}Yi(t,Qt,Pr);break;case 5:Yi(t,Qt,Pr);break;default:throw Error(b(329))}}}return tn(t,He()),t.callbackNode===n?P1.bind(null,t):null}function Ud(t,e){var n=Cl;return t.current.memoizedState.isDehydrated&&(no(t,e).flags|=256),t=ic(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&Wd(e)),t}function Wd(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function _S(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!sr(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function si(t,e){for(e&=~ph,e&=~Lc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-rr(e),r=1<<n;t[n]=-1,e&=~r}}function im(t){if(ae&6)throw Error(b(327));us();var e=Au(t,0);if(!(e&1))return tn(t,He()),null;var n=ic(t,e);if(t.tag!==0&&n===2){var r=hd(t);r!==0&&(e=r,n=Ud(t,r))}if(n===1)throw n=ra,no(t,0),si(t,e),tn(t,He()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yi(t,Qt,Pr),tn(t,He()),null}function mh(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(Cs=He()+500,Nc&&Ii())}}function vo(t){ai!==null&&ai.tag===0&&!(ae&6)&&us();var e=ae;ae|=1;var n=Dn.transition,r=he;try{if(Dn.transition=null,he=1,t)return t()}finally{he=r,Dn.transition=n,ae=e,!(ae&6)&&Ii()}}function gh(){pn=Jo.current,ke(Jo)}function no(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Kw(n)),tt!==null)for(n=tt.return;n!==null;){var r=n;switch(Kp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hu();break;case 3:Ss(),ke(Jt),ke(Mt),oh();break;case 5:ih(r);break;case 4:Ss();break;case 13:ke(Re);break;case 19:ke(Re);break;case 10:eh(r.type._context);break;case 22:case 23:gh()}n=n.return}if(mt=t,tt=t=Si(t.current,null),wt=pn=e,lt=0,ra=null,ph=Lc=xo=0,Qt=Cl=null,qi!==null){for(e=0;e<qi.length;e++)if(n=qi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}qi=null}return t}function j1(t,e){do{var n=tt;try{if(Jp(),hu.current=ec,Ju){for(var r=Me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ju=!1}if(go=0,dt=ot=Me=null,Sl=!1,ea=0,dh.current=null,n===null||n.return===null){lt=1,ra=e,tt=null;break}e:{var o=t,s=n.return,l=n,a=e;if(e=wt,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=H0(s);if(h!==null){h.flags&=-257,Y0(h,s,l,o,e),h.mode&1&&V0(o,u,e),e=h,a=u;var y=e.updateQueue;if(y===null){var g=new Set;g.add(a),e.updateQueue=g}else y.add(a);break e}else{if(!(e&1)){V0(o,u,e),xh();break e}a=Error(b(426))}}else if(Te&&l.mode&1){var w=H0(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Y0(w,s,l,o,e),qp(ks(a,l));break e}}o=a=ks(a,l),lt!==4&&(lt=2),Cl===null?Cl=[o]:Cl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var x=f1(o,a,e);D0(o,x);break e;case 1:l=a;var m=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(_i===null||!_i.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var _=d1(o,l,e);D0(o,_);break e}}o=o.return}while(o!==null)}R1(n)}catch(C){e=C,tt===n&&n!==null&&(tt=n=n.return);continue}break}while(!0)}function O1(){var t=tc.current;return tc.current=ec,t===null?ec:t}function xh(){(lt===0||lt===3||lt===2)&&(lt=4),mt===null||!(xo&268435455)&&!(Lc&268435455)||si(mt,wt)}function ic(t,e){var n=ae;ae|=2;var r=O1();(mt!==t||wt!==e)&&(Pr=null,no(t,e));do try{wS();break}catch(i){j1(t,i)}while(!0);if(Jp(),ae=n,tc.current=r,tt!==null)throw Error(b(261));return mt=null,wt=0,lt}function wS(){for(;tt!==null;)z1(tt)}function SS(){for(;tt!==null&&!X_();)z1(tt)}function z1(t){var e=b1(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?R1(t):tt=e,dh.current=null}function R1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=mS(n,e),n!==null){n.flags&=32767,tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{lt=6,tt=null;return}}else if(n=hS(n,e,pn),n!==null){tt=n;return}if(e=e.sibling,e!==null){tt=e;return}tt=e=t}while(e!==null);lt===0&&(lt=5)}function Yi(t,e,n){var r=he,i=Dn.transition;try{Dn.transition=null,he=1,kS(t,e,n,r)}finally{Dn.transition=i,he=r}return null}function kS(t,e,n,r){do us();while(ai!==null);if(ae&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(rw(t,o),t===mt&&(tt=mt=null,wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Va||(Va=!0,M1($u,function(){return us(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Dn.transition,Dn.transition=null;var s=he;he=1;var l=ae;ae|=4,dh.current=null,xS(t,n),E1(n,t),Ww(_d),Bu=!!yd,_d=yd=null,t.current=n,vS(n),G_(),ae=l,he=s,Dn.transition=o}else t.current=n;if(Va&&(Va=!1,ai=t,rc=i),o=t.pendingLanes,o===0&&(_i=null),q_(n.stateNode),tn(t,He()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(nc)throw nc=!1,t=Ad,Ad=null,t;return rc&1&&t.tag!==0&&us(),o=t.pendingLanes,o&1?t===Bd?El++:(El=0,Bd=t):El=0,Ii(),null}function us(){if(ai!==null){var t=fx(rc),e=Dn.transition,n=he;try{if(Dn.transition=null,he=16>t?16:t,ai===null)var r=!1;else{if(t=ai,ai=null,rc=0,ae&6)throw Error(b(331));var i=ae;for(ae|=4,F=t.current;F!==null;){var o=F,s=o.child;if(F.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(F=u;F!==null;){var c=F;switch(c.tag){case 0:case 11:case 15:kl(8,c,o)}var d=c.child;if(d!==null)d.return=c,F=d;else for(;F!==null;){c=F;var p=c.sibling,h=c.return;if(S1(c),c===u){F=null;break}if(p!==null){p.return=h,F=p;break}F=h}}}var y=o.alternate;if(y!==null){var g=y.child;if(g!==null){y.child=null;do{var w=g.sibling;g.sibling=null,g=w}while(g!==null)}}F=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,F=s;else e:for(;F!==null;){if(o=F,o.flags&2048)switch(o.tag){case 0:case 11:case 15:kl(9,o,o.return)}var x=o.sibling;if(x!==null){x.return=o.return,F=x;break e}F=o.return}}var m=t.current;for(F=m;F!==null;){s=F;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,F=v;else e:for(s=m;F!==null;){if(l=F,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ic(9,l)}}catch(C){Fe(l,l.return,C)}if(l===s){F=null;break e}var _=l.sibling;if(_!==null){_.return=l.return,F=_;break e}F=l.return}}if(ae=i,Ii(),yr&&typeof yr.onPostCommitFiberRoot=="function")try{yr.onPostCommitFiberRoot(Pc,t)}catch{}r=!0}return r}finally{he=n,Dn.transition=e}}return!1}function om(t,e,n){e=ks(n,e),e=f1(t,e,1),t=yi(t,e,1),e=Vt(),t!==null&&(va(t,1,e),tn(t,e))}function Fe(t,e,n){if(t.tag===3)om(t,t,n);else for(;e!==null;){if(e.tag===3){om(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_i===null||!_i.has(r))){t=ks(n,t),t=d1(e,t,1),e=yi(e,t,1),t=Vt(),e!==null&&(va(e,1,t),tn(e,t));break}}e=e.return}}function CS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Vt(),t.pingedLanes|=t.suspendedLanes&n,mt===t&&(wt&n)===n&&(lt===4||lt===3&&(wt&130023424)===wt&&500>He()-hh?no(t,0):ph|=n),tn(t,e)}function N1(t,e){e===0&&(t.mode&1?(e=Ma,Ma<<=1,!(Ma&130023424)&&(Ma=4194304)):e=1);var n=Vt();t=Ar(t,e),t!==null&&(va(t,e,n),tn(t,n))}function ES(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),N1(t,n)}function TS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),N1(t,n)}var b1;b1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)Kt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Kt=!1,pS(t,e,n);Kt=!!(t.flags&131072)}else Kt=!1,Te&&e.flags&1048576&&Fx(e,Gu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;gu(t,e),t=e.pendingProps;var i=ys(e,Mt.current);as(e,n),i=lh(null,e,r,t,i,n);var o=ah();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(r)?(o=!0,Yu(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,nh(e),i.updater=Mc,e.stateNode=i,i._reactInternals=e,Od(e,r,t,n),e=Nd(null,e,r,!0,o,n)):(e.tag=0,Te&&o&&Qp(e),Dt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(gu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=jS(r),t=Zn(r,t),i){case 0:e=Rd(null,e,r,t,n);break e;case 1:e=Q0(null,e,r,t,n);break e;case 11:e=X0(null,e,r,t,n);break e;case 14:e=G0(null,e,r,Zn(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zn(r,i),Rd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zn(r,i),Q0(t,e,r,i,n);case 3:e:{if(g1(e),t===null)throw Error(b(387));r=e.pendingProps,o=e.memoizedState,i=o.element,Wx(t,e),qu(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=ks(Error(b(423)),e),e=K0(t,e,r,n,i);break e}else if(r!==i){i=ks(Error(b(424)),e),e=K0(t,e,r,n,i);break e}else for(vn=vi(e.stateNode.containerInfo.firstChild),_n=e,Te=!0,er=null,n=Bx(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_s(),r===i){e=Br(t,e,n);break e}Dt(t,e,r,n)}e=e.child}return e;case 5:return Vx(e),t===null&&Td(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,wd(r,i)?s=null:o!==null&&wd(r,o)&&(e.flags|=32),m1(t,e),Dt(t,e,s,n),e.child;case 6:return t===null&&Td(e),null;case 13:return x1(t,e,n);case 4:return rh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ws(e,null,r,n):Dt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zn(r,i),X0(t,e,r,i,n);case 7:return Dt(t,e,e.pendingProps,n),e.child;case 8:return Dt(t,e,e.pendingProps.children,n),e.child;case 12:return Dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,ye(Qu,r._currentValue),r._currentValue=s,o!==null)if(sr(o.value,s)){if(o.children===i.children&&!Jt.current){e=Br(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Lr(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Pd(o.return,n,e),l.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(b(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Pd(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Dt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,as(e,n),i=An(i),r=r(i),e.flags|=1,Dt(t,e,r,n),e.child;case 14:return r=e.type,i=Zn(r,e.pendingProps),i=Zn(r.type,i),G0(t,e,r,i,n);case 15:return p1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zn(r,i),gu(t,e),e.tag=1,en(r)?(t=!0,Yu(e)):t=!1,as(e,n),c1(e,r,i),Od(e,r,i,n),Nd(null,e,r,!0,t,n);case 19:return v1(t,e,n);case 22:return h1(t,e,n)}throw Error(b(156,e.tag))};function M1(t,e){return lx(t,e)}function PS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,r){return new PS(t,e,n,r)}function vh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jS(t){if(typeof t=="function")return vh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fp)return 11;if(t===Dp)return 14}return 2}function Si(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yu(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")vh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Wo:return ro(n.children,i,o,e);case Lp:s=8,i|=8;break;case Jf:return t=In(12,n,e,i|2),t.elementType=Jf,t.lanes=o,t;case ed:return t=In(13,n,e,i),t.elementType=ed,t.lanes=o,t;case td:return t=In(19,n,e,i),t.elementType=td,t.lanes=o,t;case Vg:return Fc(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ug:s=10;break e;case Wg:s=9;break e;case Fp:s=11;break e;case Dp:s=14;break e;case ri:s=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=In(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function ro(t,e,n,r){return t=In(7,t,r,e),t.lanes=n,t}function Fc(t,e,n,r){return t=In(22,t,r,e),t.elementType=Vg,t.lanes=n,t.stateNode={isHidden:!1},t}function jf(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function Of(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function OS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=uf(0),this.expirationTimes=uf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yh(t,e,n,r,i,o,s,l,a){return t=new OS(t,e,n,l,a),e===1?(e=1,o===!0&&(e|=8)):e=0,o=In(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nh(o),t}function zS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Uo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function I1(t){if(!t)return Oi;t=t._reactInternals;e:{if(Po(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(en(n))return Ix(t,n,e)}return e}function L1(t,e,n,r,i,o,s,l,a){return t=yh(n,r,!0,t,i,o,s,l,a),t.context=I1(null),n=t.current,r=Vt(),i=wi(n),o=Lr(r,i),o.callback=e??null,yi(n,o,i),t.current.lanes=i,va(t,i,r),tn(t,r),t}function Dc(t,e,n,r){var i=e.current,o=Vt(),s=wi(i);return n=I1(n),e.context===null?e.context=n:e.pendingContext=n,e=Lr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=yi(i,e,s),t!==null&&(ir(t,i,s,o),pu(t,i,s)),s}function oc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _h(t,e){sm(t,e),(t=t.alternate)&&sm(t,e)}function RS(){return null}var F1=typeof reportError=="function"?reportError:function(t){console.error(t)};function wh(t){this._internalRoot=t}$c.prototype.render=wh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));Dc(t,e,null,null)};$c.prototype.unmount=wh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;vo(function(){Dc(null,t,null,null)}),e[$r]=null}};function $c(t){this._internalRoot=t}$c.prototype.unstable_scheduleHydration=function(t){if(t){var e=hx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<oi.length&&e!==0&&e<oi[n].priority;n++);oi.splice(n,0,t),n===0&&gx(t)}};function Sh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ac(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lm(){}function NS(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=oc(s);o.call(u)}}var s=L1(e,r,t,0,null,!1,!1,"",lm);return t._reactRootContainer=s,t[$r]=s.current,Ql(t.nodeType===8?t.parentNode:t),vo(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=oc(a);l.call(u)}}var a=yh(t,0,!1,null,null,!1,!1,"",lm);return t._reactRootContainer=a,t[$r]=a.current,Ql(t.nodeType===8?t.parentNode:t),vo(function(){Dc(e,a,n,r)}),a}function Bc(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=oc(s);l.call(a)}}Dc(e,s,t,i)}else s=NS(n,e,t,i,r);return oc(s)}dx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ll(e.pendingLanes);n!==0&&(Bp(e,n|1),tn(e,He()),!(ae&6)&&(Cs=He()+500,Ii()))}break;case 13:vo(function(){var r=Ar(t,1);if(r!==null){var i=Vt();ir(r,t,1,i)}}),_h(t,1)}};Up=function(t){if(t.tag===13){var e=Ar(t,134217728);if(e!==null){var n=Vt();ir(e,t,134217728,n)}_h(t,134217728)}};px=function(t){if(t.tag===13){var e=wi(t),n=Ar(t,e);if(n!==null){var r=Vt();ir(n,t,e,r)}_h(t,e)}};hx=function(){return he};mx=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};fd=function(t,e,n){switch(e){case"input":if(id(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Rc(r);if(!i)throw Error(b(90));Yg(r),id(r,i)}}}break;case"textarea":Gg(t,n);break;case"select":e=n.value,e!=null&&is(t,!!n.multiple,e,!1)}};tx=mh;nx=vo;var bS={usingClientEntryPoint:!1,Events:[_a,Xo,Rc,Jg,ex,mh]},tl={findFiberByHostInstance:Ki,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},MS={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ox(t),t===null?null:t.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||RS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ha.isDisabled&&Ha.supportsFiber)try{Pc=Ha.inject(MS),yr=Ha}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bS;Cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sh(e))throw Error(b(200));return zS(t,e,null,n)};Cn.createRoot=function(t,e){if(!Sh(t))throw Error(b(299));var n=!1,r="",i=F1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=yh(t,1,!1,null,null,n,!1,r,i),t[$r]=e.current,Ql(t.nodeType===8?t.parentNode:t),new wh(e)};Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=ox(e),t=t===null?null:t.stateNode,t};Cn.flushSync=function(t){return vo(t)};Cn.hydrate=function(t,e,n){if(!Ac(e))throw Error(b(200));return Bc(null,t,e,!0,n)};Cn.hydrateRoot=function(t,e,n){if(!Sh(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=F1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=L1(e,null,t,1,n??null,i,!1,o,s),t[$r]=e.current,Ql(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new $c(e)};Cn.render=function(t,e,n){if(!Ac(e))throw Error(b(200));return Bc(null,t,e,!1,n)};Cn.unmountComponentAtNode=function(t){if(!Ac(t))throw Error(b(40));return t._reactRootContainer?(vo(function(){Bc(null,null,t,!1,function(){t._reactRootContainer=null,t[$r]=null})}),!0):!1};Cn.unstable_batchedUpdates=mh;Cn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ac(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return Bc(t,e,n,!1,r)};Cn.version="18.3.1-next-f1338f8080-20240426";function D1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D1)}catch(t){console.error(t)}}D1(),Dg.exports=Cn;var IS=Dg.exports,$1,am=IS;$1=am.createRoot,am.hydrateRoot;/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ia(){return ia=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ia.apply(this,arguments)}var ui;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ui||(ui={}));const um="popstate";function LS(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:l}=r.location;return Vd("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:sc(i)}return DS(e,n,null,t)}function $e(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function A1(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function FS(){return Math.random().toString(36).substr(2,8)}function cm(t,e){return{usr:t.state,key:t.key,idx:e}}function Vd(t,e,n,r){return n===void 0&&(n=null),ia({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?As(e):e,{state:n,key:e&&e.key||r||FS()})}function sc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function As(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function DS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=ui.Pop,a=null,u=c();u==null&&(u=0,s.replaceState(ia({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function d(){l=ui.Pop;let w=c(),x=w==null?null:w-u;u=w,a&&a({action:l,location:g.location,delta:x})}function p(w,x){l=ui.Push;let m=Vd(g.location,w,x);u=c()+1;let v=cm(m,u),_=g.createHref(m);try{s.pushState(v,"",_)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(_)}o&&a&&a({action:l,location:g.location,delta:1})}function h(w,x){l=ui.Replace;let m=Vd(g.location,w,x);u=c();let v=cm(m,u),_=g.createHref(m);s.replaceState(v,"",_),o&&a&&a({action:l,location:g.location,delta:0})}function y(w){let x=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof w=="string"?w:sc(w);return m=m.replace(/ $/,"%20"),$e(x,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,x)}let g={get action(){return l},get location(){return t(i,s)},listen(w){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(um,d),a=w,()=>{i.removeEventListener(um,d),a=null}},createHref(w){return e(i,w)},createURL:y,encodeLocation(w){let x=y(w);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:p,replace:h,go(w){return s.go(w)}};return g}var fm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(fm||(fm={}));function $S(t,e,n){return n===void 0&&(n="/"),AS(t,e,n,!1)}function AS(t,e,n,r){let i=typeof e=="string"?As(e):e,o=Es(i.pathname||"/",n);if(o==null)return null;let s=B1(t);BS(s);let l=null;for(let a=0;l==null&&a<s.length;++a){let u=ZS(o);l=KS(s[a],u,r)}return l}function B1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let a={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};a.relativePath.startsWith("/")&&($e(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=ki([r,a.relativePath]),c=n.concat(a);o.children&&o.children.length>0&&($e(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),B1(o.children,e,c,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:GS(u,o.index),routesMeta:c})};return t.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let a of U1(o.path))i(o,s,a)}),e}function U1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=U1(r.join("/")),l=[];return l.push(...s.map(a=>a===""?o:[o,a].join("/"))),i&&l.push(...s),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function BS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:QS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const US=/^:[\w-]+$/,WS=3,VS=2,HS=1,YS=10,XS=-2,dm=t=>t==="*";function GS(t,e){let n=t.split("/"),r=n.length;return n.some(dm)&&(r+=XS),e&&(r+=VS),n.filter(i=>!dm(i)).reduce((i,o)=>i+(US.test(o)?WS:o===""?HS:YS),r)}function QS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function KS(t,e,n){let{routesMeta:r}=t,i={},o="/",s=[];for(let l=0;l<r.length;++l){let a=r[l],u=l===r.length-1,c=o==="/"?e:e.slice(o.length)||"/",d=lc({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c),p=a.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=lc({path:a.relativePath,caseSensitive:a.caseSensitive,end:!1},c)),!d)return null;Object.assign(i,d.params),s.push({params:i,pathname:ki([o,d.pathname]),pathnameBase:nk(ki([o,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(o=ki([o,d.pathnameBase]))}return s}function lc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=qS(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:p,isOptional:h}=c;if(p==="*"){let g=l[d]||"";s=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}const y=l[d];return h&&!y?u[p]=void 0:u[p]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:t}}function qS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),A1(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ZS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return A1(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Es(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function JS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?As(t):t;return{pathname:n?n.startsWith("/")?n:ek(n,e):e,search:rk(r),hash:ik(i)}}function ek(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function zf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function tk(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function W1(t,e){let n=tk(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function V1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=As(t):(i=ia({},t),$e(!i.pathname||!i.pathname.includes("?"),zf("?","pathname","search",i)),$e(!i.pathname||!i.pathname.includes("#"),zf("#","pathname","hash",i)),$e(!i.search||!i.search.includes("#"),zf("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=n;else{let d=e.length-1;if(!r&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}l=d>=0?e[d]:"/"}let a=JS(i,l),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const ki=t=>t.join("/").replace(/\/\/+/g,"/"),nk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),rk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ik=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ok(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const H1=["post","put","patch","delete"];new Set(H1);const sk=["get",...H1];new Set(sk);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oa(){return oa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},oa.apply(this,arguments)}const Uc=N.createContext(null),Y1=N.createContext(null),Li=N.createContext(null),Wc=N.createContext(null),jo=N.createContext({outlet:null,matches:[],isDataRoute:!1}),X1=N.createContext(null);function lk(t,e){let{relative:n}=e===void 0?{}:e;Sa()||$e(!1);let{basename:r,navigator:i}=N.useContext(Li),{hash:o,pathname:s,search:l}=Vc(t,{relative:n}),a=s;return r!=="/"&&(a=s==="/"?r:ki([r,s])),i.createHref({pathname:a,search:l,hash:o})}function Sa(){return N.useContext(Wc)!=null}function Bs(){return Sa()||$e(!1),N.useContext(Wc).location}function G1(t){N.useContext(Li).static||N.useLayoutEffect(t)}function Q1(){let{isDataRoute:t}=N.useContext(jo);return t?_k():ak()}function ak(){Sa()||$e(!1);let t=N.useContext(Uc),{basename:e,future:n,navigator:r}=N.useContext(Li),{matches:i}=N.useContext(jo),{pathname:o}=Bs(),s=JSON.stringify(W1(i,n.v7_relativeSplatPath)),l=N.useRef(!1);return G1(()=>{l.current=!0}),N.useCallback(function(u,c){if(c===void 0&&(c={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let d=V1(u,JSON.parse(s),o,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:ki([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,s,o,t])}function Vc(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=N.useContext(Li),{matches:i}=N.useContext(jo),{pathname:o}=Bs(),s=JSON.stringify(W1(i,r.v7_relativeSplatPath));return N.useMemo(()=>V1(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function uk(t,e){return ck(t,e)}function ck(t,e,n,r){Sa()||$e(!1);let{navigator:i}=N.useContext(Li),{matches:o}=N.useContext(jo),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let u=Bs(),c;if(e){var d;let w=typeof e=="string"?As(e):e;a==="/"||(d=w.pathname)!=null&&d.startsWith(a)||$e(!1),c=w}else c=u;let p=c.pathname||"/",h=p;if(a!=="/"){let w=a.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice(w.length).join("/")}let y=$S(t,{pathname:h}),g=mk(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:ki([a,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:ki([a,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,n,r);return e&&g?N.createElement(Wc.Provider,{value:{location:oa({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:ui.Pop}},g):g}function fk(){let t=yk(),e=ok(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:i},n):null,null)}const dk=N.createElement(fk,null);class pk extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?N.createElement(jo.Provider,{value:this.props.routeContext},N.createElement(X1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hk(t){let{routeContext:e,match:n,children:r}=t,i=N.useContext(Uc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(jo.Provider,{value:e},r)}function mk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let c=s.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);c>=0||$e(!1),s=s.slice(0,Math.min(s.length,c+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<s.length;c++){let d=s[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:p,errors:h}=n,y=d.route.loader&&p[d.route.id]===void 0&&(!h||h[d.route.id]===void 0);if(d.route.lazy||y){a=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,d,p)=>{let h,y=!1,g=null,w=null;n&&(h=l&&d.route.id?l[d.route.id]:void 0,g=d.route.errorElement||dk,a&&(u<0&&p===0?(y=!0,w=null):u===p&&(y=!0,w=d.route.hydrateFallbackElement||null)));let x=e.concat(s.slice(0,p+1)),m=()=>{let v;return h?v=g:y?v=w:d.route.Component?v=N.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=c,N.createElement(hk,{match:d,routeContext:{outlet:c,matches:x,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?N.createElement(pk,{location:n.location,revalidation:n.revalidation,component:g,error:h,children:m(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):m()},null)}var K1=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(K1||{}),ac=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ac||{});function gk(t){let e=N.useContext(Uc);return e||$e(!1),e}function xk(t){let e=N.useContext(Y1);return e||$e(!1),e}function vk(t){let e=N.useContext(jo);return e||$e(!1),e}function q1(t){let e=vk(),n=e.matches[e.matches.length-1];return n.route.id||$e(!1),n.route.id}function yk(){var t;let e=N.useContext(X1),n=xk(ac.UseRouteError),r=q1(ac.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function _k(){let{router:t}=gk(K1.UseNavigateStable),e=q1(ac.UseNavigateStable),n=N.useRef(!1);return G1(()=>{n.current=!0}),N.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,oa({fromRouteId:e},o)))},[t,e])}function _u(t){$e(!1)}function wk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ui.Pop,navigator:o,static:s=!1,future:l}=t;Sa()&&$e(!1);let a=e.replace(/^\/*/,"/"),u=N.useMemo(()=>({basename:a,navigator:o,static:s,future:oa({v7_relativeSplatPath:!1},l)}),[a,l,o,s]);typeof r=="string"&&(r=As(r));let{pathname:c="/",search:d="",hash:p="",state:h=null,key:y="default"}=r,g=N.useMemo(()=>{let w=Es(c,a);return w==null?null:{location:{pathname:w,search:d,hash:p,state:h,key:y},navigationType:i}},[a,c,d,p,h,y,i]);return g==null?null:N.createElement(Li.Provider,{value:u},N.createElement(Wc.Provider,{children:n,value:g}))}function Sk(t){let{children:e,location:n}=t;return uk(Hd(e),n)}new Promise(()=>{});function Hd(t,e){e===void 0&&(e=[]);let n=[];return N.Children.forEach(t,(r,i)=>{if(!N.isValidElement(r))return;let o=[...e,i];if(r.type===N.Fragment){n.push.apply(n,Hd(r.props.children,o));return}r.type!==_u&&$e(!1),!r.props.index||!r.props.children||$e(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Hd(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uc(){return uc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},uc.apply(this,arguments)}function Z1(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function kk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Ck(t,e){return t.button===0&&(!e||e==="_self")&&!kk(t)}const Ek=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Tk=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Pk="6";try{window.__reactRouterVersion=Pk}catch{}const jk=N.createContext({isTransitioning:!1}),Ok="startTransition",pm=C_[Ok];function zk(t){let{basename:e,children:n,future:r,window:i}=t,o=N.useRef();o.current==null&&(o.current=LS({window:i,v5Compat:!0}));let s=o.current,[l,a]=N.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=N.useCallback(d=>{u&&pm?pm(()=>a(d)):a(d)},[a,u]);return N.useLayoutEffect(()=>s.listen(c),[s,c]),N.createElement(wk,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const Rk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Nk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nr=N.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:l,target:a,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,p=Z1(e,Ek),{basename:h}=N.useContext(Li),y,g=!1;if(typeof u=="string"&&Nk.test(u)&&(y=u,Rk))try{let v=new URL(window.location.href),_=u.startsWith("//")?new URL(v.protocol+u):new URL(u),C=Es(_.pathname,h);_.origin===v.origin&&C!=null?u=C+_.search+_.hash:g=!0}catch{}let w=lk(u,{relative:i}),x=Mk(u,{replace:s,state:l,target:a,preventScrollReset:c,relative:i,unstable_viewTransition:d});function m(v){r&&r(v),v.defaultPrevented||x(v)}return N.createElement("a",uc({},p,{href:y||w,onClick:g||o?r:m,ref:n,target:a}))}),J1=N.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:l,to:a,unstable_viewTransition:u,children:c}=e,d=Z1(e,Tk),p=Vc(a,{relative:d.relative}),h=Bs(),y=N.useContext(Y1),{navigator:g,basename:w}=N.useContext(Li),x=y!=null&&Ik(p)&&u===!0,m=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,v=h.pathname,_=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(v=v.toLowerCase(),_=_?_.toLowerCase():null,m=m.toLowerCase()),_&&w&&(_=Es(_,w)||_);const C=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let E=v===m||!s&&v.startsWith(m)&&v.charAt(C)==="/",S=_!=null&&(_===m||!s&&_.startsWith(m)&&_.charAt(m.length)==="/"),T={isActive:E,isPending:S,isTransitioning:x},z=E?r:void 0,j;typeof o=="function"?j=o(T):j=[o,E?"active":null,S?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let $=typeof l=="function"?l(T):l;return N.createElement(nr,uc({},d,{"aria-current":z,className:j,ref:n,style:$,to:a,unstable_viewTransition:u}),typeof c=="function"?c(T):c)});var Yd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Yd||(Yd={}));var hm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(hm||(hm={}));function bk(t){let e=N.useContext(Uc);return e||$e(!1),e}function Mk(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:l}=e===void 0?{}:e,a=Q1(),u=Bs(),c=Vc(t,{relative:s});return N.useCallback(d=>{if(Ck(d,n)){d.preventDefault();let p=r!==void 0?r:sc(u)===sc(c);a(t,{replace:p,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:l})}},[u,a,c,r,i,n,t,o,s,l])}function Ik(t,e){e===void 0&&(e={});let n=N.useContext(jk);n==null&&$e(!1);let{basename:r}=bk(Yd.useViewTransitionState),i=Vc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let o=Es(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=Es(n.nextLocation.pathname,r)||n.nextLocation.pathname;return lc(i.pathname,s)!=null||lc(i.pathname,o)!=null}var qt=function(){return qt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},qt.apply(this,arguments)};function sa(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var we="-ms-",Tl="-moz-",de="-webkit-",ev="comm",Hc="rule",kh="decl",Lk="@import",tv="@keyframes",Fk="@layer",nv=Math.abs,Ch=String.fromCharCode,Xd=Object.assign;function Dk(t,e){return pt(t,0)^45?(((e<<2^pt(t,0))<<2^pt(t,1))<<2^pt(t,2))<<2^pt(t,3):0}function rv(t){return t.trim()}function jr(t,e){return(t=e.exec(t))?t[0]:t}function q(t,e,n){return t.replace(e,n)}function wu(t,e,n){return t.indexOf(e,n)}function pt(t,e){return t.charCodeAt(e)|0}function Ts(t,e,n){return t.slice(e,n)}function hr(t){return t.length}function iv(t){return t.length}function ul(t,e){return e.push(t),t}function $k(t,e){return t.map(e).join("")}function mm(t,e){return t.filter(function(n){return!jr(n,e)})}var Yc=1,Ps=1,ov=0,Un=0,Je=0,Us="";function Xc(t,e,n,r,i,o,s,l){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:Yc,column:Ps,length:s,return:"",siblings:l}}function ti(t,e){return Xd(Xc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Io(t){for(;t.root;)t=ti(t.root,{children:[t]});ul(t,t.siblings)}function Ak(){return Je}function Bk(){return Je=Un>0?pt(Us,--Un):0,Ps--,Je===10&&(Ps=1,Yc--),Je}function or(){return Je=Un<ov?pt(Us,Un++):0,Ps++,Je===10&&(Ps=1,Yc++),Je}function io(){return pt(Us,Un)}function Su(){return Un}function Gc(t,e){return Ts(Us,t,e)}function Gd(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Uk(t){return Yc=Ps=1,ov=hr(Us=t),Un=0,[]}function Wk(t){return Us="",t}function Rf(t){return rv(Gc(Un-1,Qd(t===91?t+2:t===40?t+1:t)))}function Vk(t){for(;(Je=io())&&Je<33;)or();return Gd(t)>2||Gd(Je)>3?"":" "}function Hk(t,e){for(;--e&&or()&&!(Je<48||Je>102||Je>57&&Je<65||Je>70&&Je<97););return Gc(t,Su()+(e<6&&io()==32&&or()==32))}function Qd(t){for(;or();)switch(Je){case t:return Un;case 34:case 39:t!==34&&t!==39&&Qd(Je);break;case 40:t===41&&Qd(t);break;case 92:or();break}return Un}function Yk(t,e){for(;or()&&t+Je!==57;)if(t+Je===84&&io()===47)break;return"/*"+Gc(e,Un-1)+"*"+Ch(t===47?t:or())}function Xk(t){for(;!Gd(io());)or();return Gc(t,Un)}function Gk(t){return Wk(ku("",null,null,null,[""],t=Uk(t),0,[0],t))}function ku(t,e,n,r,i,o,s,l,a){for(var u=0,c=0,d=s,p=0,h=0,y=0,g=1,w=1,x=1,m=0,v="",_=i,C=o,E=r,S=v;w;)switch(y=m,m=or()){case 40:if(y!=108&&pt(S,d-1)==58){wu(S+=q(Rf(m),"&","&\f"),"&\f",nv(u?l[u-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:S+=Rf(m);break;case 9:case 10:case 13:case 32:S+=Vk(y);break;case 92:S+=Hk(Su()-1,7);continue;case 47:switch(io()){case 42:case 47:ul(Qk(Yk(or(),Su()),e,n,a),a);break;default:S+="/"}break;case 123*g:l[u++]=hr(S)*x;case 125*g:case 59:case 0:switch(m){case 0:case 125:w=0;case 59+c:x==-1&&(S=q(S,/\f/g,"")),h>0&&hr(S)-d&&ul(h>32?xm(S+";",r,n,d-1,a):xm(q(S," ","")+";",r,n,d-2,a),a);break;case 59:S+=";";default:if(ul(E=gm(S,e,n,u,c,i,l,v,_=[],C=[],d,o),o),m===123)if(c===0)ku(S,e,E,E,_,o,d,l,C);else switch(p===99&&pt(S,3)===110?100:p){case 100:case 108:case 109:case 115:ku(t,E,E,r&&ul(gm(t,E,E,0,0,i,l,v,i,_=[],d,C),C),i,C,d,l,r?_:C);break;default:ku(S,E,E,E,[""],C,0,l,C)}}u=c=h=0,g=x=1,v=S="",d=s;break;case 58:d=1+hr(S),h=y;default:if(g<1){if(m==123)--g;else if(m==125&&g++==0&&Bk()==125)continue}switch(S+=Ch(m),m*g){case 38:x=c>0?1:(S+="\f",-1);break;case 44:l[u++]=(hr(S)-1)*x,x=1;break;case 64:io()===45&&(S+=Rf(or())),p=io(),c=d=hr(v=S+=Xk(Su())),m++;break;case 45:y===45&&hr(S)==2&&(g=0)}}return o}function gm(t,e,n,r,i,o,s,l,a,u,c,d){for(var p=i-1,h=i===0?o:[""],y=iv(h),g=0,w=0,x=0;g<r;++g)for(var m=0,v=Ts(t,p+1,p=nv(w=s[g])),_=t;m<y;++m)(_=rv(w>0?h[m]+" "+v:q(v,/&\f/g,h[m])))&&(a[x++]=_);return Xc(t,e,n,i===0?Hc:l,a,u,c,d)}function Qk(t,e,n,r){return Xc(t,e,n,ev,Ch(Ak()),Ts(t,2,-2),0,r)}function xm(t,e,n,r,i){return Xc(t,e,n,kh,Ts(t,0,r),Ts(t,r+1,-1),r,i)}function sv(t,e,n){switch(Dk(t,e)){case 5103:return de+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return de+t+t;case 4789:return Tl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return de+t+Tl+t+we+t+t;case 5936:switch(pt(t,e+11)){case 114:return de+t+we+q(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return de+t+we+q(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return de+t+we+q(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return de+t+we+t+t;case 6165:return de+t+we+"flex-"+t+t;case 5187:return de+t+q(t,/(\w+).+(:[^]+)/,de+"box-$1$2"+we+"flex-$1$2")+t;case 5443:return de+t+we+"flex-item-"+q(t,/flex-|-self/g,"")+(jr(t,/flex-|baseline/)?"":we+"grid-row-"+q(t,/flex-|-self/g,""))+t;case 4675:return de+t+we+"flex-line-pack"+q(t,/align-content|flex-|-self/g,"")+t;case 5548:return de+t+we+q(t,"shrink","negative")+t;case 5292:return de+t+we+q(t,"basis","preferred-size")+t;case 6060:return de+"box-"+q(t,"-grow","")+de+t+we+q(t,"grow","positive")+t;case 4554:return de+q(t,/([^-])(transform)/g,"$1"+de+"$2")+t;case 6187:return q(q(q(t,/(zoom-|grab)/,de+"$1"),/(image-set)/,de+"$1"),t,"")+t;case 5495:case 3959:return q(t,/(image-set\([^]*)/,de+"$1$`$1");case 4968:return q(q(t,/(.+:)(flex-)?(.*)/,de+"box-pack:$3"+we+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+de+t+t;case 4200:if(!jr(t,/flex-|baseline/))return we+"grid-column-align"+Ts(t,e)+t;break;case 2592:case 3360:return we+q(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,jr(r.props,/grid-\w+-end/)})?~wu(t+(n=n[e].value),"span",0)?t:we+q(t,"-start","")+t+we+"grid-row-span:"+(~wu(n,"span",0)?jr(n,/\d+/):+jr(n,/\d+/)-+jr(t,/\d+/))+";":we+q(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return jr(r.props,/grid-\w+-start/)})?t:we+q(q(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return q(t,/(.+)-inline(.+)/,de+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(hr(t)-1-e>6)switch(pt(t,e+1)){case 109:if(pt(t,e+4)!==45)break;case 102:return q(t,/(.+:)(.+)-([^]+)/,"$1"+de+"$2-$3$1"+Tl+(pt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~wu(t,"stretch",0)?sv(q(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return q(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,l,a,u){return we+i+":"+o+u+(s?we+i+"-span:"+(l?a:+a-+o)+u:"")+t});case 4949:if(pt(t,e+6)===121)return q(t,":",":"+de)+t;break;case 6444:switch(pt(t,pt(t,14)===45?18:11)){case 120:return q(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+de+(pt(t,14)===45?"inline-":"")+"box$3$1"+de+"$2$3$1"+we+"$2box$3")+t;case 100:return q(t,":",":"+we)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return q(t,"scroll-","scroll-snap-")+t}return t}function cc(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function Kk(t,e,n,r){switch(t.type){case Fk:if(t.children.length)break;case Lk:case kh:return t.return=t.return||t.value;case ev:return"";case tv:return t.return=t.value+"{"+cc(t.children,r)+"}";case Hc:if(!hr(t.value=t.props.join(",")))return""}return hr(n=cc(t.children,r))?t.return=t.value+"{"+n+"}":""}function qk(t){var e=iv(t);return function(n,r,i,o){for(var s="",l=0;l<e;l++)s+=t[l](n,r,i,o)||"";return s}}function Zk(t){return function(e){e.root||(e=e.return)&&t(e)}}function Jk(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case kh:t.return=sv(t.value,t.length,n);return;case tv:return cc([ti(t,{value:q(t.value,"@","@"+de)})],r);case Hc:if(t.length)return $k(n=t.props,function(i){switch(jr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Io(ti(t,{props:[q(i,/:(read-\w+)/,":"+Tl+"$1")]})),Io(ti(t,{props:[i]})),Xd(t,{props:mm(n,r)});break;case"::placeholder":Io(ti(t,{props:[q(i,/:(plac\w+)/,":"+de+"input-$1")]})),Io(ti(t,{props:[q(i,/:(plac\w+)/,":"+Tl+"$1")]})),Io(ti(t,{props:[q(i,/:(plac\w+)/,we+"input-$1")]})),Io(ti(t,{props:[i]})),Xd(t,{props:mm(n,r)});break}return""})}}var e2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},fn={},js=typeof process<"u"&&fn!==void 0&&(fn.REACT_APP_SC_ATTR||fn.SC_ATTR)||"data-styled",lv="active",av="data-styled-version",Qc="6.1.13",Eh=`/*!sc*/
`,fc=typeof window<"u"&&"HTMLElement"in window,t2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&fn!==void 0&&fn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&fn.REACT_APP_SC_DISABLE_SPEEDY!==""?fn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&fn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&fn!==void 0&&fn.SC_DISABLE_SPEEDY!==void 0&&fn.SC_DISABLE_SPEEDY!==""&&fn.SC_DISABLE_SPEEDY!=="false"&&fn.SC_DISABLE_SPEEDY),Kc=Object.freeze([]),Os=Object.freeze({});function n2(t,e,n){return n===void 0&&(n=Os),t.theme!==n.theme&&t.theme||e||n.theme}var uv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),r2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,i2=/(^-|-$)/g;function vm(t){return t.replace(r2,"-").replace(i2,"")}var o2=/(a)(d)/gi,Ya=52,ym=function(t){return String.fromCharCode(t+(t>25?39:97))};function Kd(t){var e,n="";for(e=Math.abs(t);e>Ya;e=e/Ya|0)n=ym(e%Ya)+n;return(ym(e%Ya)+n).replace(o2,"$1-$2")}var Nf,cv=5381,es=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},fv=function(t){return es(cv,t)};function dv(t){return Kd(fv(t)>>>0)}function s2(t){return t.displayName||t.name||"Component"}function bf(t){return typeof t=="string"&&!0}var pv=typeof Symbol=="function"&&Symbol.for,hv=pv?Symbol.for("react.memo"):60115,l2=pv?Symbol.for("react.forward_ref"):60112,a2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},u2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},mv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c2=((Nf={})[l2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Nf[hv]=mv,Nf);function _m(t){return("type"in(e=t)&&e.type.$$typeof)===hv?mv:"$$typeof"in t?c2[t.$$typeof]:a2;var e}var f2=Object.defineProperty,d2=Object.getOwnPropertyNames,wm=Object.getOwnPropertySymbols,p2=Object.getOwnPropertyDescriptor,h2=Object.getPrototypeOf,Sm=Object.prototype;function gv(t,e,n){if(typeof e!="string"){if(Sm){var r=h2(e);r&&r!==Sm&&gv(t,r,n)}var i=d2(e);wm&&(i=i.concat(wm(e)));for(var o=_m(t),s=_m(e),l=0;l<i.length;++l){var a=i[l];if(!(a in u2||n&&n[a]||s&&a in s||o&&a in o)){var u=p2(e,a);try{f2(t,a,u)}catch{}}}}return t}function zs(t){return typeof t=="function"}function Th(t){return typeof t=="object"&&"styledComponentId"in t}function Ji(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function qd(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function la(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Zd(t,e,n){if(n===void 0&&(n=!1),!n&&!la(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Zd(t[r],e[r]);else if(la(e))for(var r in e)t[r]=Zd(t[r],e[r]);return t}function Ph(t,e){Object.defineProperty(t,"toString",{value:e})}function ka(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var m2=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw ka(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(e+1),a=(s=0,n.length);s<a;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[e]++,l++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Eh);return n},t}(),Cu=new Map,dc=new Map,Eu=1,Xa=function(t){if(Cu.has(t))return Cu.get(t);for(;dc.has(Eu);)Eu++;var e=Eu++;return Cu.set(t,e),dc.set(e,t),e},g2=function(t,e){Eu=e+1,Cu.set(t,e),dc.set(e,t)},x2="style[".concat(js,"][").concat(av,'="').concat(Qc,'"]'),v2=new RegExp("^".concat(js,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),y2=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},_2=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Eh),i=[],o=0,s=r.length;o<s;o++){var l=r[o].trim();if(l){var a=l.match(v2);if(a){var u=0|parseInt(a[1],10),c=a[2];u!==0&&(g2(c,u),y2(t,c,a[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},km=function(t){for(var e=document.querySelectorAll(x2),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(js)!==lv&&(_2(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function w2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var xv=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(l){var a=Array.from(l.querySelectorAll("style[".concat(js,"]")));return a[a.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(js,lv),r.setAttribute(av,Qc);var s=w2();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},S2=function(){function t(e){this.element=xv(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw ka(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),k2=function(){function t(e){this.element=xv(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),C2=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Cm=fc,E2={isServer:!fc,useCSSOMInjection:!t2},vv=function(){function t(e,n,r){e===void 0&&(e=Os),n===void 0&&(n={});var i=this;this.options=qt(qt({},E2),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&fc&&Cm&&(Cm=!1,km(this)),Ph(this,function(){return function(o){for(var s=o.getTag(),l=s.length,a="",u=function(d){var p=function(x){return dc.get(x)}(d);if(p===void 0)return"continue";var h=o.names.get(p),y=s.getGroup(d);if(h===void 0||!h.size||y.length===0)return"continue";var g="".concat(js,".g").concat(d,'[id="').concat(p,'"]'),w="";h!==void 0&&h.forEach(function(x){x.length>0&&(w+="".concat(x,","))}),a+="".concat(y).concat(g,'{content:"').concat(w,'"}').concat(Eh)},c=0;c<l;c++)u(c);return a}(i)})}return t.registerId=function(e){return Xa(e)},t.prototype.rehydrate=function(){!this.server&&fc&&km(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(qt(qt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new C2(i):r?new S2(i):new k2(i)}(this.options),new m2(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Xa(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Xa(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Xa(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),T2=/&/g,P2=/^\s*\/\/.*$/gm;function yv(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=yv(n.children,e)),n})}function j2(t){var e,n,r,i=Os,o=i.options,s=o===void 0?Os:o,l=i.plugins,a=l===void 0?Kc:l,u=function(p,h,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(e):p},c=a.slice();c.push(function(p){p.type===Hc&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(T2,n).replace(r,u))}),s.prefix&&c.push(Jk),c.push(Kk);var d=function(p,h,y,g){h===void 0&&(h=""),y===void 0&&(y=""),g===void 0&&(g="&"),e=g,n=h,r=new RegExp("\\".concat(n,"\\b"),"g");var w=p.replace(P2,""),x=Gk(y||h?"".concat(y," ").concat(h," { ").concat(w," }"):w);s.namespace&&(x=yv(x,s.namespace));var m=[];return cc(x,qk(c.concat(Zk(function(v){return m.push(v)})))),m};return d.hash=a.length?a.reduce(function(p,h){return h.name||ka(15),es(p,h.name)},cv).toString():"",d}var O2=new vv,Jd=j2(),_v=Pi.createContext({shouldForwardProp:void 0,styleSheet:O2,stylis:Jd});_v.Consumer;Pi.createContext(void 0);function Em(){return N.useContext(_v)}var wv=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Jd);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Ph(this,function(){throw ka(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Jd),this.name+e.hash},t}(),z2=function(t){return t>="A"&&t<="Z"};function Tm(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;z2(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var Sv=function(t){return t==null||t===!1||t===""},kv=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!Sv(o)&&(Array.isArray(o)&&o.isCss||zs(o)?r.push("".concat(Tm(i),":"),o,";"):la(o)?r.push.apply(r,sa(sa(["".concat(i," {")],kv(o),!1),["}"],!1)):r.push("".concat(Tm(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in e2||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function oo(t,e,n,r){if(Sv(t))return[];if(Th(t))return[".".concat(t.styledComponentId)];if(zs(t)){if(!zs(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return oo(i,e,n,r)}var o;return t instanceof wv?n?(t.inject(n,r),[t.getName(r)]):[t]:la(t)?kv(t):Array.isArray(t)?Array.prototype.concat.apply(Kc,t.map(function(s){return oo(s,e,n,r)})):[t.toString()]}function R2(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(zs(n)&&!Th(n))return!1}return!0}var N2=fv(Qc),b2=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&R2(e),this.componentId=n,this.baseHash=es(N2,n),this.baseStyle=r,vv.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ji(i,this.staticRulesId);else{var o=qd(oo(this.rules,e,n,r)),s=Kd(es(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}i=Ji(i,s),this.staticRulesId=s}else{for(var a=es(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var p=qd(oo(d,e,n,r));a=es(a,p+c),u+=p}}if(u){var h=Kd(a>>>0);n.hasNameForId(this.componentId,h)||n.insertRules(this.componentId,h,r(u,".".concat(h),void 0,this.componentId)),i=Ji(i,h)}}return i},t}(),Cv=Pi.createContext(void 0);Cv.Consumer;var Mf={};function M2(t,e,n){var r=Th(t),i=t,o=!bf(t),s=e.attrs,l=s===void 0?Kc:s,a=e.componentId,u=a===void 0?function(_,C){var E=typeof _!="string"?"sc":vm(_);Mf[E]=(Mf[E]||0)+1;var S="".concat(E,"-").concat(dv(Qc+E+Mf[E]));return C?"".concat(C,"-").concat(S):S}(e.displayName,e.parentComponentId):a,c=e.displayName,d=c===void 0?function(_){return bf(_)?"styled.".concat(_):"Styled(".concat(s2(_),")")}(t):c,p=e.displayName&&e.componentId?"".concat(vm(e.displayName),"-").concat(e.componentId):e.componentId||u,h=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,y=e.shouldForwardProp;if(r&&i.shouldForwardProp){var g=i.shouldForwardProp;if(e.shouldForwardProp){var w=e.shouldForwardProp;y=function(_,C){return g(_,C)&&w(_,C)}}else y=g}var x=new b2(n,p,r?i.componentStyle:void 0);function m(_,C){return function(E,S,T){var z=E.attrs,j=E.componentStyle,$=E.defaultProps,M=E.foldedComponentIds,V=E.styledComponentId,X=E.target,Z=Pi.useContext(Cv),G=Em(),A=E.shouldForwardProp||G.shouldForwardProp,R=n2(S,Z,$)||Os,I=function(xe,pe,fe){for(var Ae,Ce=qt(qt({},pe),{className:void 0,theme:fe}),Tn=0;Tn<xe.length;Tn+=1){var Xe=zs(Ae=xe[Tn])?Ae(Ce):Ae;for(var Ge in Xe)Ce[Ge]=Ge==="className"?Ji(Ce[Ge],Xe[Ge]):Ge==="style"?qt(qt({},Ce[Ge]),Xe[Ge]):Xe[Ge]}return pe.className&&(Ce.className=Ji(Ce.className,pe.className)),Ce}(z,S,R),k=I.as||X,B={};for(var H in I)I[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&I.theme===R||(H==="forwardedAs"?B.as=I.forwardedAs:A&&!A(H,k)||(B[H]=I[H]));var nt=function(xe,pe){var fe=Em(),Ae=xe.generateAndInjectStyles(pe,fe.styleSheet,fe.stylis);return Ae}(j,I),le=Ji(M,V);return nt&&(le+=" "+nt),I.className&&(le+=" "+I.className),B[bf(k)&&!uv.has(k)?"class":"className"]=le,B.ref=T,N.createElement(k,B)}(v,_,C)}m.displayName=d;var v=Pi.forwardRef(m);return v.attrs=h,v.componentStyle=x,v.displayName=d,v.shouldForwardProp=y,v.foldedComponentIds=r?Ji(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=p,v.target=r?i.target:t,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(_){this._foldedDefaultProps=r?function(C){for(var E=[],S=1;S<arguments.length;S++)E[S-1]=arguments[S];for(var T=0,z=E;T<z.length;T++)Zd(C,z[T],!0);return C}({},i.defaultProps,_):_}}),Ph(v,function(){return".".concat(v.styledComponentId)}),o&&gv(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Pm(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var jm=function(t){return Object.assign(t,{isCss:!0})};function Ev(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(zs(t)||la(t))return jm(oo(Pm(Kc,sa([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?oo(r):jm(oo(Pm(r,e)))}function ep(t,e,n){if(n===void 0&&(n=Os),!e)throw ka(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,Ev.apply(void 0,sa([i],o,!1)))};return r.attrs=function(i){return ep(t,e,qt(qt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ep(t,e,qt(qt({},n),i))},r}var Tv=function(t){return ep(M2,t)},P=Tv;uv.forEach(function(t){P[t]=Tv(t)});function Pv(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=qd(Ev.apply(void 0,sa([t],e,!1))),i=dv(r);return new wv(i,r)}function qr(t={}){const e=N.useRef([]),{threshold:n=.1,rootMargin:r="0px",animationClass:i}=t;return N.useEffect(()=>{const s=new IntersectionObserver(l=>{l.forEach(a=>{a.isIntersecting&&a.target.classList.add(i)})},{threshold:n,rootMargin:r});return e.current.forEach(l=>{l&&s.observe(l)}),()=>{e.current.forEach(l=>{l&&s.unobserve(l)})}},[i,n,r]),s=>{s&&!e.current.includes(s)&&e.current.push(s)}}function qc(){return{fadeIn:qr({animationClass:"fade-in"}),fadeInFromLeft:qr({animationClass:"fade-in-from-left"}),fadeInFromRight:qr({animationClass:"fade-in-from-right"}),fadeInFromTop:qr({animationClass:"fade-in-from-top"}),fadeInFromBottom:qr({animationClass:"fade-in-from-bottom"}),fadeInAndPulse:qr({animationClass:"fade-in-and-pulse"}),fadeInEnlarge:qr({animationClass:"fade-in-enlarge"}),btnFadeInFromBottom:qr({animationClass:"btn-fade-in-from-bottom"})}}const I2=P.section`
    position: relative;
    height: 660px;

    @media (max-width: 1300px) {
        height: 440px;
    }
    @media (max-width: 999px) {
        height: 900px;
        width: 414px;
        left: 50%;
        transform: translateX(-50%);
    }
`,L2=P.video`
    position: absolute;
    top: 0;
    right: 50px;
    width: 760px;
    z-index: 1;
    clip-path: inset(1px 1px);
    @media (max-width: 1300px) and (min-width: 1000px) {
        width: 500px;
        right: -8%;
        top: 50px;
    }
    @media (max-width: 999px) {
        display: none;
    }
`,F2=P.div`
  display: none;
  position: absolute;
  top: 20px;
  width: 422px;
  aspect-ratio: 422 / 327;
  z-index: 0;
  @media (max-width: 999px) {
    display: flex;
    position: relative;
    width: 97%;
    height:97%;
  }
`,D2=P.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
  opacity: 0;
  @media (max-width: 999px) {
    display: block;
  }
`,$2=P.img`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  opacity: 0;
  @media (max-width: 999px) {
    display: block;
  }
`,A2=P.img`
  position: absolute;
  top: 0;
  left: 0;
width: 100%;
  object-fit: contain;
  background-size: contain;
  z-index: 0;
  opacity: 0;
  @media (max-width: 999px) {
    display: block;
  }
`,B2=P.div`
    position: relative;
    margin: 20px 0px 20px 91px;
    @media (max-width: 1300px) and (min-width: 1000px) {
        margin: 0;
        position: absolute;
        top: 0;
        width: 370px;
        left: 0;
    }
    @media (max-width: 999px) {
        margin: 0;
        position: absolute;
        top: 255px;
        width: 359px;
        left: 50%;
        transform: translateX(-50%);
    }
`,U2=Pv`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,W2=Pv`
    0% {
        opacity: 0;
        transform: scale(0.8);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`,V2=P.img`
    padding-top: 70px;
    width: 486px;
    animation: ${W2} 1s ease-in-out backwards;
    @media (max-width: 1300px) and (min-width: 1000px) {
        
    }
`,H2=P.img`
    width: 520px;
    position: absolute;
    top: 58px;
    left: -10px;
    animation: ${U2} 1s ease-in-out backwards;
    animation-delay: .5s;
    @media (max-width: 1300px) {
        width: 530px;
        margin: 60px 15px 10px 0px;
        top: 0;
        left: 10px;
    }
`,Y2=P.div`
    width: 486px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 91px;
    margin-bottom: 40px;
    line-height: 35px;
    letter-spacing: 4px;
    font-size: 25px;
    font-weight: bold;
    z-index: 10;
    > p > span {
        color: ${t=>t.$isBlue?"#2496F0":"#FF837E"};
    }
    @media (max-width: 1300px) and (min-width: 1000px) {
        margin: 0;
        position: absolute;
        top: 280px;
        width: 50%;
        left: 0;
        font-size: 22px;
    }   
    @media (max-width: 999px) {
        margin: 0;
        position: absolute;
        top: 529px;
        width: 354px;
        left: 50%;
        transform: translateX(-50%);
        line-height: 30px;
        letter-spacing: 1px;
        font-size: 20px;
    }
`,X2=P.img`
    position: relative;
    margin-left: 74px;
    width: 850px;
    height: auto;
    object-fit: contain; 
    opacity: 0;
    @media (max-width: 1300px) and (min-width: 1000px) {
        width: 85%;
        margin-left: 0;
        top: 430px;
    }
    @media (max-width: 999px) {
        display: none;
    }
`,G2=P.img`
    display: none;
    opacity: 0;
    @media (max-width: 999px) {
     display: block;
        position: absolute;
        top: 679px;
        width: 300px;
        left: 10%;
    }
`,Q2=()=>{const{fadeInFromBottom:t,fadeInEnlarge:e,fadeInFromLeft:n,fadeInFromRight:r}=qc(),[i,o]=N.useState(!0);return N.useEffect(()=>{const s=setInterval(()=>{o(!i)},1e3);return()=>clearInterval(s)},[i]),f.jsxs(I2,{children:[f.jsx(L2,{poster:"./home/kv-backup.jpg",src:"./home/event-banner-video-desktop.mp4",autoPlay:!0,muted:!0,playsInline:!0,preload:"auto"}),f.jsxs(F2,{children:[f.jsx(D2,{ref:t,src:"./home/mb-kv-case.png"}),f.jsx($2,{ref:e,src:"./home/mb-kv-flower.png"}),f.jsx(A2,{ref:r,src:"./home/mb-kv-flight.png"})]}),f.jsxs(B2,{children:[f.jsx(V2,{src:"./home/event-banner-title.png"}),f.jsx(H2,{src:"./home/event-banner-airplane.png"})]}),f.jsxs(Y2,{$isBlue:i,children:[f.jsx("p",{children:"投保全球旅平險"}),f.jsxs("p",{children:["驚喜",f.jsx("span",{children:"多多多多多多"}),"到滿出來！"]})]}),f.jsx(X2,{ref:n,src:"./home/english-title1.png",alt:"english title"}),f.jsx(G2,{ref:n,src:"./home/english-title1-mobile.png",alt:"mobile english title"})]})};var jv={exports:{}},K2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",q2=K2,Z2=q2;function Ov(){}function zv(){}zv.resetWarningCache=Ov;var J2=function(){function t(r,i,o,s,l,a){if(a!==Z2){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:zv,resetWarningCache:Ov};return n.PropTypes=n,n};jv.exports=J2();var eC=jv.exports;const zn=Tg(eC),tC={white:"#FFFFFF",yellow:"#FED430",red:"#FF837E",blue:"#2496F0"},nC={white:"#000000",yellow:"#000000",red:"#000000",blue:"#FFFFFF"},rC={white:"#000000",yellow:"#000000",red:"#FF837E",blue:"#2496F0"},Rv=P.div`
  width: ${t=>t.$width||"100%"};
  height: ${t=>t.$height||"65px"};
  background-color: ${t=>tC[t.$color]};
  border-radius: 8px;
  position: absolute;
  top: 5px;
  left: 5px;
  transition: all 0.3s ease;
`,Nv=P.div`
  width: ${t=>t.$width||"100%"};
  height: ${t=>t.$height||"65px"};
  font-size: 25px;
  line-height: 30px;
  font-weight: bold;
  border: solid 2px black;
  border-radius: ${t=>t.$isAccordion?"0":"8px"};
  color: ${t=>nC[t.$color]};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition: all 0.3s ease;
  font-family: "Noto Serif TC", "Noto Serif", serif; 
  font-weight: 700;
  @media (max-width: 1300px) {
    font-size: 20px;
  }
`,iC=P.button`
  width: ${t=>t.$width||"100%"};
  height: ${t=>t.$height||"65px"};
  font-size: 25px;
  font-weight: bold;
  border-radius: 8px;
  background-color: #FFFFFF;
  color: black;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  cursor: pointer;
  border: none;
  padding: 0;

  &:hover {
    ${Rv} {
      background-color: ${t=>t.$hoverBgColor||"#FFFFFF"};
    }
    ${Nv} {
      color: ${t=>rC[t.$color]};
    }
  }
`,oC=P.div`
  position: relative;
  right: 50px;
`,Zt=({color:t="yellow",hoverBgColor:e,children:n,onClick:r,icon:i,width:o,height:s})=>f.jsxs(iC,{$color:t,$hoverBgColor:e,onClick:r,$width:o,$height:s,children:[f.jsx(Rv,{$color:t,$width:o,$height:s}),f.jsx(Nv,{$color:t,$isAccordion:!!i,$width:o,$height:s,children:f.jsx("div",{style:{zIndex:5},children:n})}),i&&f.jsx(oC,{children:i})]});Zt.propTypes={color:zn.string,children:zn.node.isRequired,onClick:zn.func,icon:zn.node,hoverBgColor:zn.string,width:zn.string,height:zn.string};P.section`
    position: relative;
    height: 730px;
    @media (max-width: 1300px) and (min-width: 1000px) {
        height: 700px;
        width: 800px;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 80px;
    }
    @media (max-width: 999px) {
        margin-top: unset;
        width: 414px;
        left: 50%;
        transform: translateX(-50%);
    }
`;P.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    position: absolute;
    left: 182px;
    top: 160px;
    opacity: 0;
    > img {
        height: 60px;
    }
    @media (max-width: 1300px) and (min-width: 1000px) {
        left: 6%;
        top: 120px;
        width: 55%;
    }
    @media (max-width: 999px) {
        top: 0px;
        left: 14%;
        transform: translateX(-46%);
        width: 320px;
         > img {
            height: 40px;
        }
    }
`;P.div`
    position: absolute;
    left: 182px;
    top: 450px;
    line-height: 35px;
    letter-spacing: 4px;
    font-size: 20px;
    font-weight: bold;
    > span {
        color: #2496F0;
    }
    @media (max-width: 1300px) and (min-width: 1000px) {
        left: 6%;
        top: 420px;
        font-size: 20px;
    }
    @media (max-width: 999px) {
        top: 160px;
        left: 14%;
        transform: translateX(-46%);
        font-size: 20px;
        line-height: 35px;
        letter-spacing: 1px;
        width: 320px;
    }
`;P.img`
    position: absolute;
    top: 60px;
    left: 40px;
    width: 1500px;
    height: 800px;
    z-index: 0;
    @media (max-width: 1300px) {
        display: none;
    }
`;P.img`
    position: absolute;
    top: 220px;
    left: 50%;
    transform: translateX(-40%);
    width: 299px;
    z-index: 0;
    @media (min-width:999px) {
        display: none;
    }
`;P.img`
    position: absolute;
    top: 72px;
    left: 60px;
    width: 584px;
    opacity: 0;
    @media (max-width: 1301px) {
        top:50px;
        left: 0%;
        width: 55%
    }
    @media (max-width: 999px) {
        top: -60px;
        left: 3%;
        width: 95%;
    }
    @media (max-width: 381px) {
        left: -2%;
    }
`;P.img`
    position: absolute;
    left: -65px;
    bottom: 20px;
    width: 343px;
    @media (max-width: 1301px) {
        display: none;
    }
`;P.img`
    position: absolute;
    left: 269px;
    bottom: 20px;
    width: 383px;
    transform:rotate(-5deg);
    @media (max-width: 1301px) {
        display: none;
    }
`;P.img`
    position: absolute;
    top: 100px;
    right: 41px;
    width: 350px;
    height: auto;
    object-fit: contain; 
    z-index: 0;
    opacity: 0;
    @media (max-width: 1301px) {
        width: 250px;
        top: 220px;
        right: 0;
    }
    @media (max-width: 999px) {
        width: 200px;
        top: 270px;
        right: 12%;
    }
`;P.img`
    position: absolute;
    bottom: 20px;
    right: 48px;
    opacity: 0;
    @media (max-width: 1301px) {
        display: none;
    }
`;P.img`
    position: absolute;
    top: 340px;
    width: 414px;
    opacity: 0;
    right:0;
     z-index: 1;
    @media (min-width: 1301px) {
        display: none;
    }
    @media (max-width: 999px) {
        top: 370px;
        width: 414px;
    }
`;P.img`
    position: absolute;
    bottom: 350px;
    right: 560px;
     z-index: 2;
    @media (max-width: 1301px) {
        top: 310px;
        right: 290px;
        width: 104px;
    }
    @media (max-width: 999px) {
        top: 330px;
        left: 27px;
        bottom: unset;
        right: unset;
        width: 104px;
    }
`;P.div`
    position: absolute;
    bottom: 80px;
    right: 250px;
    z-index: 10;
    width: 289px;
    opacity: 0;
    @media (max-width: 1300px) and (min-width: 1000px) {
        right: 12%;
        bottom: 75px;
        width: 220px;
    }
    @media (max-width: 999px) {
        width: 220px;
        left: 24%;
    }
`;const sC=P.section`
    position: relative;
    height: 1127px;
    margin-top:85px;
    @media (max-width: 999px) {
        overflow: hidden;
        height: 1390px;
        width: 440px;
        left: 50%;
        transform: translateX(-50%);
        margin-top:0px;
    }
    @media (min-width: 1000px) and (max-width: 1300px) {
        height: 800px;
        margin-top:130px;
`,lC=P.img`
    position: absolute;
    z-index: 1;
    top: 100px;
    left: 100px;
    width: 95%;
    height: 940px;
    @media (min-width: 1000px) and (max-width: 1300px) {
        width: 800px;
    }
    @media (max-width: 999px) {
        display: none;
    }
`,aC=P.img`
    position: absolute;
    z-index: 1;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 387;
    @media (min-width: 1000px) {
        display: none;
    }
`,uC=P.img`
    position: absolute;
    top: 170px;
    left: 62px;
    width: 678px;
    opacity:0;
    @media (max-width: 1301px) {
      top: 80px;
      left: 0%;
      width: 480px;
    }
    @media (max-width: 1000px) {
      top: 80px;
      left: 5%;
      width: 480px;
    }
    @media (max-width: 381px) {
        width: 380px;
        left: 0%;
    }
`,cC=P.img`
    position: absolute;
    top: 220px;
    right: -40px;
    width: 700px;
    @media (max-width: 1301px) {
        width: 428px;
        top: 180px;
        right: 0;      
    }
    @media (max-width: 999px) {
        width: 300px;
        top: 300px;
        right: 0;
    }
`,fC=P.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    position: absolute;
    top: 210px;
    left: 182px;
    > img {
        height: 60px;
    }
    @media (max-width: 1301px) {
        top: 100px;
        left: 5%;
        transform: translateX(-46%);
        width: 90%;
    }
    @media (max-width: 999px) {
        top: 100px;
        left: 14%;
        transform: translateX(-46%);
        width: 320px;
         > img {
            height: 40px;
        }
    }
`,dC=P.div`
    position: absolute;
    z-index: 1;
    top: 400px;
    left: 182px;
    line-height: 35px;
    letter-spacing: 4px;
    font-size: 20px;
    font-weight: bold;
    > span {
        color: #2496F0;
    }
    @media (max-width: 1301px) {
        top: 280px;
        left: 5%;
        transform: translateX(-48%);
        font-size: 20px;
        line-height: 35px;
        letter-spacing: 1px;
        width: 520px;
    }
    @media (max-width: 999px) {
        top: 260px;
        left: 14%;
        transform: translateX(-48%);
        font-size: 20px;
        line-height: 35px;
        letter-spacing: 1px;
        width: 300px;
    }
`,pC=P.img`
    position: absolute;
    top: 200px;
    right: 80px;
    width: 268px;
    height: auto;
    object-fit: contain; 
    z-index: 10;
    opacity: 0;
    @media (max-width: 1301px) {
        width: 25%;
        top: 130px;
        right: 0%;
    }
    @media (max-width: 999px) {
        width: 150px;
        top: 420px;
        right: 12%;
    }
`,hC=P.img`
    position: absolute;
    bottom: 170px;
    left: 122px;
    @media (max-width: 1430px) {
        left: 122px;
        width: 440px;
    }
    @media (max-width: 1301px) {
        display: none;
    }

    
`,mC=P.img`
    position: absolute;
    bottom: 170px;
    right: 60px;
    @media (max-width: 1430px) {
        width: 515px;
        right: 16%;
    }
    @media (max-width: 1301px) {
        display: none;
    }
`,gC=P.img`
    position: absolute;
    top: 380px;
    left: 5%;
    opacity:0;
    @media (min-width: 1301px) {
        display: none;
    }
    @media (max-width: 999px) {
    position: absolute;
    top: 520px;
    left: 5%;
    }
`,xC=P.div`
    position: absolute;
    bottom: 150px;
    left: 280px;
    z-index: 10;
    width: 289px;
    opacity:0;
    @media (max-width: 1430px) {
        left: 225px;
    }
    @media (max-width: 1301px) {
        width: 220px;
        top: 640px;
        left: 15%;
        opacity: 0;
    }
    @media (max-width: 999px) {
        width: 220px;
        top: 790px;
        left: 23%;
        opacity: 0;
    }
`,vC=P.div`
    position: absolute;
    bottom: 150px;
    right: 320px;
    z-index: 10;
    width: 289px;
    opacity:0;
     @media (min-width: 1380px) and (max-width: 1430px) {
        width: 280px;
        top: 920px;
        right: 28%;
        opacity: 0;
    }
     @media (min-width: 1301px) and (max-width: 1379px) {
        width: 280px;
        top: 920px;
        right: 30%;
        opacity: 0;
    }
    @media (max-width: 1300px) {
        width: 220px;
        top: 640px;
        right: 13%;
    }
    @media (max-width: 999px) {
        width: 220px;
        top: 1150px;
        left: 23%;
    }
`,yC=P.img`
    position: absolute;
    top: 355px;
    right: 2%;
    opacity:0;
    @media (min-width: 1301px) {
        display: none;
    }
    @media (max-width: 999px) {
        top: 860px;
        left: 15%;
    }
`,Om="https://e-commerce.transglobe.com.tw/product/eta?utm_source=ec_eventpage&utm_medium=button&utm_campaign=ec_eventpage_transglobe-journey_domestic%26foreign&utm_term=2024q4&utm_content=eta",_C=()=>{const{fadeInFromBottom:t,fadeInFromLeft:e,btnFadeInFromBottom:n,fadeInFromRight:r}=qc();return f.jsxs(sC,{children:[f.jsx(uC,{ref:e,id:"sec2",src:"./home/reach-insure-amount-event-temple.png"}),f.jsx(cC,{src:"./home/reach-insure-amount-event-mountain.svg"}),f.jsxs(fC,{ref:e,children:[f.jsx("img",{src:"./home/reach-insure-amount-event-title.svg"}),f.jsx("img",{src:"./home/common-title-lottery.svg"})]}),f.jsxs(dC,{ref:e,children:["2024/10/1~2025/1/31期間",f.jsx("br",{}),"成功網路投保",f.jsx("span",{children:"「國內外旅平險」"}),"，單筆保費滿額即可抽！"]}),f.jsx(pC,{ref:r,src:"./home/english-title3.png"}),f.jsx(hC,{ref:t,src:"./home/reach-insure-amount-event1.svg",id:"img1"}),f.jsx(gC,{ref:t,src:"./home/reach-insure-amount-event1-mobile.svg",id:"img2"}),f.jsx(xC,{ref:n,children:f.jsx("a",{target:"_blank",href:Om,children:f.jsx(Zt,{color:"blue",height:"60px",children:"投保立即抽"})})}),f.jsx(mC,{ref:t,src:"./home/reach-insure-amount-event2.svg",id:"img3"}),f.jsx(yC,{ref:t,src:"./home/reach-insure-amount-event2-mobile.svg",id:"img4"}),f.jsx(vC,{ref:n,children:f.jsx("a",{target:"_blank",href:Om,children:f.jsx(Zt,{color:"blue",height:"60px",children:"投保立即抽"})})}),f.jsx(lC,{src:"./home/reach-insure-amount-event-flower.svg"}),f.jsx(aC,{src:"./home/reach-insure-amount-event-flower-mobile.svg"})]})};function Or(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function bv(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var wn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Rs={duration:.5,overwrite:!1,delay:0},jh,Nt,Pe,Ln=1e8,ve=1/Ln,tp=Math.PI*2,wC=tp/4,SC=0,Mv=Math.sqrt,kC=Math.cos,CC=Math.sin,gt=function(e){return typeof e=="string"},De=function(e){return typeof e=="function"},Ur=function(e){return typeof e=="number"},Oh=function(e){return typeof e>"u"},kr=function(e){return typeof e=="object"},nn=function(e){return e!==!1},zh=function(){return typeof window<"u"},Ga=function(e){return De(e)||gt(e)},Iv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},bt=Array.isArray,np=/(?:-?\.?\d|\.)+/gi,Lv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ts=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,If=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Fv=/[+-]=-?[.\d]+/,Dv=/[^,'"\[\]\s]+/gi,EC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ne,dr,rp,Rh,kn={},pc={},$v,Av=function(e){return(pc=yo(e,kn))&&ln},Nh=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},aa=function(e,n){return!n&&console.warn(e)},Bv=function(e,n){return e&&(kn[e]=n)&&pc&&(pc[e]=n)||kn},ua=function(){return 0},TC={suppressEvents:!0,isStart:!0,kill:!1},Tu={suppressEvents:!0,kill:!1},PC={suppressEvents:!0},bh={},Ci=[],ip={},Uv,mn={},Lf={},zm=30,Pu=[],Mh="",Ih=function(e){var n=e[0],r,i;if(kr(n)||De(n)||(e=[e]),!(r=(n._gsap||{}).harness)){for(i=Pu.length;i--&&!Pu[i].targetTest(n););r=Pu[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new dy(e[i],r)))||e.splice(i,1);return e},so=function(e){return e._gsap||Ih(Fn(e))[0]._gsap},Wv=function(e,n,r){return(r=e[n])&&De(r)?e[n]():Oh(r)&&e.getAttribute&&e.getAttribute(n)||r},rn=function(e,n){return(e=e.split(",")).forEach(n)||e},Ve=function(e){return Math.round(e*1e5)/1e5||0},ht=function(e){return Math.round(e*1e7)/1e7||0},cs=function(e,n){var r=n.charAt(0),i=parseFloat(n.substr(2));return e=parseFloat(e),r==="+"?e+i:r==="-"?e-i:r==="*"?e*i:e/i},jC=function(e,n){for(var r=n.length,i=0;e.indexOf(n[i])<0&&++i<r;);return i<r},hc=function(){var e=Ci.length,n=Ci.slice(0),r,i;for(ip={},Ci.length=0,r=0;r<e;r++)i=n[r],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Vv=function(e,n,r,i){Ci.length&&!Nt&&hc(),e.render(n,r,Nt&&n<0&&(e._initted||e._startAt)),Ci.length&&!Nt&&hc()},Hv=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(Dv).length<2?n:gt(e)?e.trim():e},Yv=function(e){return e},Wn=function(e,n){for(var r in n)r in e||(e[r]=n[r]);return e},OC=function(e){return function(n,r){for(var i in r)i in n||i==="duration"&&e||i==="ease"||(n[i]=r[i])}},yo=function(e,n){for(var r in n)e[r]=n[r];return e},Rm=function t(e,n){for(var r in n)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(e[r]=kr(n[r])?t(e[r]||(e[r]={}),n[r]):n[r]);return e},mc=function(e,n){var r={},i;for(i in e)i in n||(r[i]=e[i]);return r},Pl=function(e){var n=e.parent||Ne,r=e.keyframes?OC(bt(e.keyframes)):Wn;if(nn(e.inherit))for(;n;)r(e,n.vars.defaults),n=n.parent||n._dp;return e},zC=function(e,n){for(var r=e.length,i=r===n.length;i&&r--&&e[r]===n[r];);return r<0},Xv=function(e,n,r,i,o){var s=e[i],l;if(o)for(l=n[o];s&&s[o]>l;)s=s._prev;return s?(n._next=s._next,s._next=n):(n._next=e[r],e[r]=n),n._next?n._next._prev=n:e[i]=n,n._prev=s,n.parent=n._dp=e,n},Zc=function(e,n,r,i){r===void 0&&(r="_first"),i===void 0&&(i="_last");var o=n._prev,s=n._next;o?o._next=s:e[r]===n&&(e[r]=s),s?s._prev=o:e[i]===n&&(e[i]=o),n._next=n._prev=n.parent=null},zi=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},lo=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var r=e;r;)r._dirty=1,r=r.parent;return e},RC=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},op=function(e,n,r,i){return e._startAt&&(Nt?e._startAt.revert(Tu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,i))},NC=function t(e){return!e||e._ts&&t(e.parent)},Nm=function(e){return e._repeat?Ns(e._tTime,e=e.duration()+e._rDelay)*e:0},Ns=function(e,n){var r=Math.floor(e/=n);return e&&r===e?r-1:r},gc=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},Jc=function(e){return e._end=ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||ve)||0))},ef=function(e,n){var r=e._dp;return r&&r.smoothChildTiming&&e._ts&&(e._start=ht(r._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),Jc(e),r._dirty||lo(r,e)),e},Gv=function(e,n){var r;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(r=gc(e.rawTime(),n),(!n._dur||Ca(0,n.totalDuration(),r)-n._tTime>ve)&&n.render(r,!0)),lo(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(r=e;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;e._zTime=-ve}},gr=function(e,n,r,i){return n.parent&&zi(n),n._start=ht((Ur(r)?r:r||e!==Ne?On(e,r,n):e._time)+n._delay),n._end=ht(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),Xv(e,n,"_first","_last",e._sort?"_start":0),sp(n)||(e._recent=n),i||Gv(e,n),e._ts<0&&ef(e,e._tTime),e},Qv=function(e,n){return(kn.ScrollTrigger||Nh("scrollTrigger",n))&&kn.ScrollTrigger.create(n,e)},Kv=function(e,n,r,i,o){if(Fh(e,n,o),!e._initted)return 1;if(!r&&e._pt&&!Nt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Uv!==gn.frame)return Ci.push(e),e._lazy=[o,i],1},bC=function t(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},sp=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},MC=function(e,n,r,i){var o=e.ratio,s=n<0||!n&&(!e._start&&bC(e)&&!(!e._initted&&sp(e))||(e._ts<0||e._dp._ts<0)&&!sp(e))?0:1,l=e._rDelay,a=0,u,c,d;if(l&&e._repeat&&(a=Ca(0,e._tDur,n),c=Ns(a,l),e._yoyo&&c&1&&(s=1-s),c!==Ns(e._tTime,l)&&(o=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==o||Nt||i||e._zTime===ve||!n&&e._zTime){if(!e._initted&&Kv(e,n,i,r,a))return;for(d=e._zTime,e._zTime=n||(r?ve:0),r||(r=n&&!d),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=a,u=e._pt;u;)u.r(s,u.d),u=u._next;n<0&&op(e,n,r,!0),e._onUpdate&&!r&&yn(e,"onUpdate"),a&&e._repeat&&!r&&e.parent&&yn(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===s&&(s&&zi(e,1),!r&&!Nt&&(yn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},IC=function(e,n,r){var i;if(r>n)for(i=e._first;i&&i._start<=r;){if(i.data==="isPause"&&i._start>n)return i;i=i._next}else for(i=e._last;i&&i._start>=r;){if(i.data==="isPause"&&i._start<n)return i;i=i._prev}},bs=function(e,n,r,i){var o=e._repeat,s=ht(n)||0,l=e._tTime/e._tDur;return l&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=o?o<0?1e10:ht(s*(o+1)+e._rDelay*o):s,l>0&&!i&&ef(e,e._tTime=e._tDur*l),e.parent&&Jc(e),r||lo(e.parent,e),e},bm=function(e){return e instanceof Bt?lo(e):bs(e,e._dur)},LC={_start:0,endTime:ua,totalDuration:ua},On=function t(e,n,r){var i=e.labels,o=e._recent||LC,s=e.duration()>=Ln?o.endTime(!1):e._dur,l,a,u;return gt(n)&&(isNaN(n)||n in i)?(a=n.charAt(0),u=n.substr(-1)==="%",l=n.indexOf("="),a==="<"||a===">"?(l>=0&&(n=n.replace(/=/,"")),(a==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(n.substr(1))||0)*(u?(l<0?o:r).totalDuration()/100:1)):l<0?(n in i||(i[n]=s),i[n]):(a=parseFloat(n.charAt(l-1)+n.substr(l+1)),u&&r&&(a=a/100*(bt(r)?r[0]:r).totalDuration()),l>1?t(e,n.substr(0,l-1),r)+a:s+a)):n==null?s:+n},jl=function(e,n,r){var i=Ur(n[1]),o=(i?2:1)+(e<2?0:1),s=n[o],l,a;if(i&&(s.duration=n[1]),s.parent=r,e){for(l=s,a=r;a&&!("immediateRender"in l);)l=a.vars.defaults||{},a=nn(a.vars.inherit)&&a.parent;s.immediateRender=nn(l.immediateRender),e<2?s.runBackwards=1:s.startAt=n[o-1]}return new Ze(n[0],s,n[o+1])},Fi=function(e,n){return e||e===0?n(e):n},Ca=function(e,n,r){return r<e?e:r>n?n:r},Rt=function(e,n){return!gt(e)||!(n=EC.exec(e))?"":n[1]},FC=function(e,n,r){return Fi(r,function(i){return Ca(e,n,i)})},lp=[].slice,qv=function(e,n){return e&&kr(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&kr(e[0]))&&!e.nodeType&&e!==dr},DC=function(e,n,r){return r===void 0&&(r=[]),e.forEach(function(i){var o;return gt(i)&&!n||qv(i,1)?(o=r).push.apply(o,Fn(i)):r.push(i)})||r},Fn=function(e,n,r){return Pe&&!n&&Pe.selector?Pe.selector(e):gt(e)&&!r&&(rp||!Ms())?lp.call((n||Rh).querySelectorAll(e),0):bt(e)?DC(e,r):qv(e)?lp.call(e,0):e?[e]:[]},ap=function(e){return e=Fn(e)[0]||aa("Invalid scope")||{},function(n){var r=e.current||e.nativeElement||e;return Fn(n,r.querySelectorAll?r:r===e?aa("Invalid scope")||Rh.createElement("div"):e)}},Zv=function(e){return e.sort(function(){return .5-Math.random()})},Jv=function(e){if(De(e))return e;var n=kr(e)?e:{each:e},r=ao(n.ease),i=n.from||0,o=parseFloat(n.base)||0,s={},l=i>0&&i<1,a=isNaN(i)||l,u=n.axis,c=i,d=i;return gt(i)?c=d={center:.5,edges:.5,end:1}[i]||0:!l&&a&&(c=i[0],d=i[1]),function(p,h,y){var g=(y||n).length,w=s[g],x,m,v,_,C,E,S,T,z;if(!w){if(z=n.grid==="auto"?0:(n.grid||[1,Ln])[1],!z){for(S=-Ln;S<(S=y[z++].getBoundingClientRect().left)&&z<g;);z<g&&z--}for(w=s[g]=[],x=a?Math.min(z,g)*c-.5:i%z,m=z===Ln?0:a?g*d/z-.5:i/z|0,S=0,T=Ln,E=0;E<g;E++)v=E%z-x,_=m-(E/z|0),w[E]=C=u?Math.abs(u==="y"?_:v):Mv(v*v+_*_),C>S&&(S=C),C<T&&(T=C);i==="random"&&Zv(w),w.max=S-T,w.min=T,w.v=g=(parseFloat(n.amount)||parseFloat(n.each)*(z>g?g-1:u?u==="y"?g/z:z:Math.max(z,g/z))||0)*(i==="edges"?-1:1),w.b=g<0?o-g:o,w.u=Rt(n.amount||n.each)||0,r=r&&g<0?uy(r):r}return g=(w[p]-w.min)/w.max||0,ht(w.b+(r?r(g):g)*w.v)+w.u}},up=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(r){var i=ht(Math.round(parseFloat(r)/e)*e*n);return(i-i%1)/n+(Ur(r)?0:Rt(r))}},ey=function(e,n){var r=bt(e),i,o;return!r&&kr(e)&&(i=r=e.radius||Ln,e.values?(e=Fn(e.values),(o=!Ur(e[0]))&&(i*=i)):e=up(e.increment)),Fi(n,r?De(e)?function(s){return o=e(s),Math.abs(o-s)<=i?o:s}:function(s){for(var l=parseFloat(o?s.x:s),a=parseFloat(o?s.y:0),u=Ln,c=0,d=e.length,p,h;d--;)o?(p=e[d].x-l,h=e[d].y-a,p=p*p+h*h):p=Math.abs(e[d]-l),p<u&&(u=p,c=d);return c=!i||u<=i?e[c]:s,o||c===s||Ur(s)?c:c+Rt(s)}:up(e))},ty=function(e,n,r,i){return Fi(bt(e)?!n:r===!0?!!(r=0):!i,function(){return bt(e)?e[~~(Math.random()*e.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((e-r/2+Math.random()*(n-e+r*.99))/r)*r*i)/i})},$C=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(i){return n.reduce(function(o,s){return s(o)},i)}},AC=function(e,n){return function(r){return e(parseFloat(r))+(n||Rt(r))}},BC=function(e,n,r){return ry(e,n,0,1,r)},ny=function(e,n,r){return Fi(r,function(i){return e[~~n(i)]})},UC=function t(e,n,r){var i=n-e;return bt(e)?ny(e,t(0,e.length),n):Fi(r,function(o){return(i+(o-e)%i)%i+e})},WC=function t(e,n,r){var i=n-e,o=i*2;return bt(e)?ny(e,t(0,e.length-1),n):Fi(r,function(s){return s=(o+(s-e)%o)%o||0,e+(s>i?o-s:s)})},ca=function(e){for(var n=0,r="",i,o,s,l;~(i=e.indexOf("random(",n));)s=e.indexOf(")",i),l=e.charAt(i+7)==="[",o=e.substr(i+7,s-i-7).match(l?Dv:np),r+=e.substr(n,i-n)+ty(l?o:+o[0],l?0:+o[1],+o[2]||1e-5),n=s+1;return r+e.substr(n,e.length-n)},ry=function(e,n,r,i,o){var s=n-e,l=i-r;return Fi(o,function(a){return r+((a-e)/s*l||0)})},VC=function t(e,n,r,i){var o=isNaN(e+n)?0:function(h){return(1-h)*e+h*n};if(!o){var s=gt(e),l={},a,u,c,d,p;if(r===!0&&(i=1)&&(r=null),s)e={p:e},n={p:n};else if(bt(e)&&!bt(n)){for(c=[],d=e.length,p=d-2,u=1;u<d;u++)c.push(t(e[u-1],e[u]));d--,o=function(y){y*=d;var g=Math.min(p,~~y);return c[g](y-g)},r=n}else i||(e=yo(bt(e)?[]:{},e));if(!c){for(a in n)Lh.call(l,e,a,"get",n[a]);o=function(y){return Ah(y,l)||(s?e.p:e)}}}return Fi(r,o)},Mm=function(e,n,r){var i=e.labels,o=Ln,s,l,a;for(s in i)l=i[s]-n,l<0==!!r&&l&&o>(l=Math.abs(l))&&(a=s,o=l);return a},yn=function(e,n,r){var i=e.vars,o=i[n],s=Pe,l=e._ctx,a,u,c;if(o)return a=i[n+"Params"],u=i.callbackScope||e,r&&Ci.length&&hc(),l&&(Pe=l),c=a?o.apply(u,a):o.call(u),Pe=s,c},cl=function(e){return zi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Nt),e.progress()<1&&yn(e,"onInterrupt"),e},ns,iy=[],oy=function(e){if(e)if(e=!e.name&&e.default||e,zh()||e.headless){var n=e.name,r=De(e),i=n&&!r&&e.init?function(){this._props=[]}:e,o={init:ua,render:Ah,add:Lh,kill:sE,modifier:oE,rawVars:0},s={targetTest:0,get:0,getSetter:$h,aliases:{},register:0};if(Ms(),e!==i){if(mn[n])return;Wn(i,Wn(mc(e,o),s)),yo(i.prototype,yo(o,mc(e,s))),mn[i.prop=n]=i,e.targetTest&&(Pu.push(i),bh[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}Bv(n,i),e.register&&e.register(ln,i,on)}else iy.push(e)},ge=255,fl={aqua:[0,ge,ge],lime:[0,ge,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ge],navy:[0,0,128],white:[ge,ge,ge],olive:[128,128,0],yellow:[ge,ge,0],orange:[ge,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ge,0,0],pink:[ge,192,203],cyan:[0,ge,ge],transparent:[ge,ge,ge,0]},Ff=function(e,n,r){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(r-n)*e*6:e<.5?r:e*3<2?n+(r-n)*(2/3-e)*6:n)*ge+.5|0},sy=function(e,n,r){var i=e?Ur(e)?[e>>16,e>>8&ge,e&ge]:0:fl.black,o,s,l,a,u,c,d,p,h,y;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),fl[e])i=fl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),s=e.charAt(2),l=e.charAt(3),e="#"+o+o+s+s+l+l+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ge,i&ge,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ge,e&ge]}else if(e.substr(0,3)==="hsl"){if(i=y=e.match(np),!n)a=+i[0]%360/360,u=+i[1]/100,c=+i[2]/100,s=c<=.5?c*(u+1):c+u-c*u,o=c*2-s,i.length>3&&(i[3]*=1),i[0]=Ff(a+1/3,o,s),i[1]=Ff(a,o,s),i[2]=Ff(a-1/3,o,s);else if(~e.indexOf("="))return i=e.match(Lv),r&&i.length<4&&(i[3]=1),i}else i=e.match(np)||fl.transparent;i=i.map(Number)}return n&&!y&&(o=i[0]/ge,s=i[1]/ge,l=i[2]/ge,d=Math.max(o,s,l),p=Math.min(o,s,l),c=(d+p)/2,d===p?a=u=0:(h=d-p,u=c>.5?h/(2-d-p):h/(d+p),a=d===o?(s-l)/h+(s<l?6:0):d===s?(l-o)/h+2:(o-s)/h+4,a*=60),i[0]=~~(a+.5),i[1]=~~(u*100+.5),i[2]=~~(c*100+.5)),r&&i.length<4&&(i[3]=1),i},ly=function(e){var n=[],r=[],i=-1;return e.split(Ei).forEach(function(o){var s=o.match(ts)||[];n.push.apply(n,s),r.push(i+=s.length+1)}),n.c=r,n},Im=function(e,n,r){var i="",o=(e+i).match(Ei),s=n?"hsla(":"rgba(",l=0,a,u,c,d;if(!o)return e;if(o=o.map(function(p){return(p=sy(p,n,1))&&s+(n?p[0]+","+p[1]+"%,"+p[2]+"%,"+p[3]:p.join(","))+")"}),r&&(c=ly(e),a=r.c,a.join(i)!==c.c.join(i)))for(u=e.replace(Ei,"1").split(ts),d=u.length-1;l<d;l++)i+=u[l]+(~a.indexOf(l)?o.shift()||s+"0,0,0,0)":(c.length?c:o.length?o:r).shift());if(!u)for(u=e.split(Ei),d=u.length-1;l<d;l++)i+=u[l]+o[l];return i+u[d]},Ei=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in fl)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),HC=/hsl[a]?\(/,ay=function(e){var n=e.join(" "),r;if(Ei.lastIndex=0,Ei.test(n))return r=HC.test(n),e[1]=Im(e[1],r),e[0]=Im(e[0],r,ly(e[1])),!0},fa,gn=function(){var t=Date.now,e=500,n=33,r=t(),i=r,o=1e3/240,s=o,l=[],a,u,c,d,p,h,y=function g(w){var x=t()-i,m=w===!0,v,_,C,E;if((x>e||x<0)&&(r+=x-n),i+=x,C=i-r,v=C-s,(v>0||m)&&(E=++d.frame,p=C-d.time*1e3,d.time=C=C/1e3,s+=v+(v>=o?4:o-v),_=1),m||(a=u(g)),_)for(h=0;h<l.length;h++)l[h](C,p,E,w)};return d={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(w){return p/(1e3/(w||60))},wake:function(){$v&&(!rp&&zh()&&(dr=rp=window,Rh=dr.document||{},kn.gsap=ln,(dr.gsapVersions||(dr.gsapVersions=[])).push(ln.version),Av(pc||dr.GreenSockGlobals||!dr.gsap&&dr||{}),iy.forEach(oy)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,a&&d.sleep(),u=c||function(w){return setTimeout(w,s-d.time*1e3+1|0)},fa=1,y(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(a),fa=0,u=ua},lagSmoothing:function(w,x){e=w||1/0,n=Math.min(x||33,e)},fps:function(w){o=1e3/(w||240),s=d.time*1e3+o},add:function(w,x,m){var v=x?function(_,C,E,S){w(_,C,E,S),d.remove(v)}:w;return d.remove(w),l[m?"unshift":"push"](v),Ms(),v},remove:function(w,x){~(x=l.indexOf(w))&&l.splice(x,1)&&h>=x&&h--},_listeners:l},d}(),Ms=function(){return!fa&&gn.wake()},se={},YC=/^[\d.\-M][\d.\-,\s]/,XC=/["']/g,GC=function(e){for(var n={},r=e.substr(1,e.length-3).split(":"),i=r[0],o=1,s=r.length,l,a,u;o<s;o++)a=r[o],l=o!==s-1?a.lastIndexOf(","):a.length,u=a.substr(0,l),n[i]=isNaN(u)?u.replace(XC,"").trim():+u,i=a.substr(l+1).trim();return n},QC=function(e){var n=e.indexOf("(")+1,r=e.indexOf(")"),i=e.indexOf("(",n);return e.substring(n,~i&&i<r?e.indexOf(")",r+1):r)},KC=function(e){var n=(e+"").split("("),r=se[n[0]];return r&&n.length>1&&r.config?r.config.apply(null,~e.indexOf("{")?[GC(n[1])]:QC(e).split(",").map(Hv)):se._CE&&YC.test(e)?se._CE("",e):r},uy=function(e){return function(n){return 1-e(1-n)}},cy=function t(e,n){for(var r=e._first,i;r;)r instanceof Bt?t(r,n):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==n&&(r.timeline?t(r.timeline,n):(i=r._ease,r._ease=r._yEase,r._yEase=i,r._yoyo=n)),r=r._next},ao=function(e,n){return e&&(De(e)?e:se[e]||KC(e))||n},Oo=function(e,n,r,i){r===void 0&&(r=function(a){return 1-n(1-a)}),i===void 0&&(i=function(a){return a<.5?n(a*2)/2:1-n((1-a)*2)/2});var o={easeIn:n,easeOut:r,easeInOut:i},s;return rn(e,function(l){se[l]=kn[l]=o,se[s=l.toLowerCase()]=r;for(var a in o)se[s+(a==="easeIn"?".in":a==="easeOut"?".out":".inOut")]=se[l+"."+a]=o[a]}),o},fy=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},Df=function t(e,n,r){var i=n>=1?n:1,o=(r||(e?.3:.45))/(n<1?n:1),s=o/tp*(Math.asin(1/i)||0),l=function(c){return c===1?1:i*Math.pow(2,-10*c)*CC((c-s)*o)+1},a=e==="out"?l:e==="in"?function(u){return 1-l(1-u)}:fy(l);return o=tp/o,a.config=function(u,c){return t(e,u,c)},a},$f=function t(e,n){n===void 0&&(n=1.70158);var r=function(s){return s?--s*s*((n+1)*s+n)+1:0},i=e==="out"?r:e==="in"?function(o){return 1-r(1-o)}:fy(r);return i.config=function(o){return t(e,o)},i};rn("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var n=e<5?e+1:e;Oo(t+",Power"+(n-1),e?function(r){return Math.pow(r,n)}:function(r){return r},function(r){return 1-Math.pow(1-r,n)},function(r){return r<.5?Math.pow(r*2,n)/2:1-Math.pow((1-r)*2,n)/2})});se.Linear.easeNone=se.none=se.Linear.easeIn;Oo("Elastic",Df("in"),Df("out"),Df());(function(t,e){var n=1/e,r=2*n,i=2.5*n,o=function(l){return l<n?t*l*l:l<r?t*Math.pow(l-1.5/e,2)+.75:l<i?t*(l-=2.25/e)*l+.9375:t*Math.pow(l-2.625/e,2)+.984375};Oo("Bounce",function(s){return 1-o(1-s)},o)})(7.5625,2.75);Oo("Expo",function(t){return t?Math.pow(2,10*(t-1)):0});Oo("Circ",function(t){return-(Mv(1-t*t)-1)});Oo("Sine",function(t){return t===1?1:-kC(t*wC)+1});Oo("Back",$f("in"),$f("out"),$f());se.SteppedEase=se.steps=kn.SteppedEase={config:function(e,n){e===void 0&&(e=1);var r=1/e,i=e+(n?0:1),o=n?1:0,s=1-ve;return function(l){return((i*Ca(0,s,l)|0)+o)*r}}};Rs.ease=se["quad.out"];rn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return Mh+=t+","+t+"Params,"});var dy=function(e,n){this.id=SC++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:Wv,this.set=n?n.getSetter:$h},da=function(){function t(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,bs(this,+n.duration,1,1),this.data=n.data,Pe&&(this._ctx=Pe,Pe.data.push(this)),fa||gn.wake()}var e=t.prototype;return e.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},e.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},e.totalDuration=function(r){return arguments.length?(this._dirty=0,bs(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(r,i){if(Ms(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(ef(this,r),!o._dp||o.parent||Gv(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&gr(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ve||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),Vv(this,r,i)),this},e.time=function(r,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+Nm(this))%(this._dur+this._rDelay)||(r?this._dur:0),i):this._time},e.totalProgress=function(r,i){return arguments.length?this.totalTime(this.totalDuration()*r,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(r,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+Nm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(r,i){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*o,i):this._repeat?Ns(this._tTime,o)+1:1},e.timeScale=function(r,i){if(!arguments.length)return this._rts===-ve?0:this._rts;if(this._rts===r)return this;var o=this.parent&&this._ts?gc(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-ve?0:this._rts,this.totalTime(Ca(-Math.abs(this._delay),this._tDur,o),i!==!1),Jc(this),RC(this)},e.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ms(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ve&&(this._tTime-=ve)))),this):this._ps},e.startTime=function(r){if(arguments.length){this._start=r;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&gr(i,this,r-this._delay),this}return this._start},e.endTime=function(r){return this._start+(nn(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(r){var i=this.parent||this._dp;return i?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?gc(i.rawTime(r),this):this._tTime:this._tTime},e.revert=function(r){r===void 0&&(r=PC);var i=Nt;return Nt=r,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),Nt=i,this},e.globalTime=function(r){for(var i=this,o=arguments.length?r:i.rawTime();i;)o=i._start+o/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(r):o},e.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,bm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(r){if(arguments.length){var i=this._time;return this._rDelay=r,bm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},e.seek=function(r,i){return this.totalTime(On(this,r),nn(i))},e.restart=function(r,i){return this.play().totalTime(r?-this._delay:0,nn(i))},e.play=function(r,i){return r!=null&&this.seek(r,i),this.reversed(!1).paused(!1)},e.reverse=function(r,i){return r!=null&&this.seek(r||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(r,i){return r!=null&&this.seek(r,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-ve:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ve,this},e.isActive=function(){var r=this.parent||this._dp,i=this._start,o;return!!(!r||this._ts&&this._initted&&r.isActive()&&(o=r.rawTime(!0))>=i&&o<this.endTime(!0)-ve)},e.eventCallback=function(r,i,o){var s=this.vars;return arguments.length>1?(i?(s[r]=i,o&&(s[r+"Params"]=o),r==="onUpdate"&&(this._onUpdate=i)):delete s[r],this):s[r]},e.then=function(r){var i=this;return new Promise(function(o){var s=De(r)?r:Yv,l=function(){var u=i.then;i.then=null,De(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=u),o(s),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){cl(this)},t}();Wn(da.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ve,_prom:0,_ps:!1,_rts:1});var Bt=function(t){bv(e,t);function e(r,i){var o;return r===void 0&&(r={}),o=t.call(this,r)||this,o.labels={},o.smoothChildTiming=!!r.smoothChildTiming,o.autoRemoveChildren=!!r.autoRemoveChildren,o._sort=nn(r.sortChildren),Ne&&gr(r.parent||Ne,Or(o),i),r.reversed&&o.reverse(),r.paused&&o.paused(!0),r.scrollTrigger&&Qv(Or(o),r.scrollTrigger),o}var n=e.prototype;return n.to=function(i,o,s){return jl(0,arguments,this),this},n.from=function(i,o,s){return jl(1,arguments,this),this},n.fromTo=function(i,o,s,l){return jl(2,arguments,this),this},n.set=function(i,o,s){return o.duration=0,o.parent=this,Pl(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new Ze(i,o,On(this,s),1),this},n.call=function(i,o,s){return gr(this,Ze.delayedCall(0,i,o),s)},n.staggerTo=function(i,o,s,l,a,u,c){return s.duration=o,s.stagger=s.stagger||l,s.onComplete=u,s.onCompleteParams=c,s.parent=this,new Ze(i,s,On(this,a)),this},n.staggerFrom=function(i,o,s,l,a,u,c){return s.runBackwards=1,Pl(s).immediateRender=nn(s.immediateRender),this.staggerTo(i,o,s,l,a,u,c)},n.staggerFromTo=function(i,o,s,l,a,u,c,d){return l.startAt=s,Pl(l).immediateRender=nn(l.immediateRender),this.staggerTo(i,o,l,a,u,c,d)},n.render=function(i,o,s){var l=this._time,a=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=i<=0?0:ht(i),d=this._zTime<0!=i<0&&(this._initted||!u),p,h,y,g,w,x,m,v,_,C,E,S;if(this!==Ne&&c>a&&i>=0&&(c=a),c!==this._tTime||s||d){if(l!==this._time&&u&&(c+=this._time-l,i+=this._time-l),p=c,_=this._start,v=this._ts,x=!v,d&&(u||(l=this._zTime),(i||!o)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,w=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(w*100+i,o,s);if(p=ht(c%w),c===a?(g=this._repeat,p=u):(g=~~(c/w),g&&g===c/w&&(p=u,g--),p>u&&(p=u)),C=Ns(this._tTime,w),!l&&this._tTime&&C!==g&&this._tTime-C*w-this._dur<=0&&(C=g),E&&g&1&&(p=u-p,S=1),g!==C&&!this._lock){var T=E&&C&1,z=T===(E&&g&1);if(g<C&&(T=!T),l=T?0:c%u?u:c,this._lock=1,this.render(l||(S?0:ht(g*w)),o,!u)._lock=0,this._tTime=c,!o&&this.parent&&yn(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),l&&l!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,a=this._tDur,z&&(this._lock=2,l=T?u:-1e-4,this.render(l,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;cy(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=IC(this,ht(l),ht(p)),m&&(c-=p-(p=m._start))),this._tTime=c,this._time=p,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,l=0),!l&&p&&!o&&!g&&(yn(this,"onStart"),this._tTime!==c))return this;if(p>=l&&i>=0)for(h=this._first;h;){if(y=h._next,(h._act||p>=h._start)&&h._ts&&m!==h){if(h.parent!==this)return this.render(i,o,s);if(h.render(h._ts>0?(p-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(p-h._start)*h._ts,o,s),p!==this._time||!this._ts&&!x){m=0,y&&(c+=this._zTime=-ve);break}}h=y}else{h=this._last;for(var j=i<0?i:p;h;){if(y=h._prev,(h._act||j<=h._end)&&h._ts&&m!==h){if(h.parent!==this)return this.render(i,o,s);if(h.render(h._ts>0?(j-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(j-h._start)*h._ts,o,s||Nt&&(h._initted||h._startAt)),p!==this._time||!this._ts&&!x){m=0,y&&(c+=this._zTime=j?-ve:ve);break}}h=y}}if(m&&!o&&(this.pause(),m.render(p>=l?0:-ve)._zTime=p>=l?1:-1,this._ts))return this._start=_,Jc(this),this.render(i,o,s);this._onUpdate&&!o&&yn(this,"onUpdate",!0),(c===a&&this._tTime>=this.totalDuration()||!c&&l)&&(_===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(c===a&&this._ts>0||!c&&this._ts<0)&&zi(this,1),!o&&!(i<0&&!l)&&(c||l||!a)&&(yn(this,c===a&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<a&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(i,o){var s=this;if(Ur(o)||(o=On(this,o,i)),!(i instanceof da)){if(bt(i))return i.forEach(function(l){return s.add(l,o)}),this;if(gt(i))return this.addLabel(i,o);if(De(i))i=Ze.delayedCall(0,i);else return this}return this!==i?gr(this,i,o):this},n.getChildren=function(i,o,s,l){i===void 0&&(i=!0),o===void 0&&(o=!0),s===void 0&&(s=!0),l===void 0&&(l=-Ln);for(var a=[],u=this._first;u;)u._start>=l&&(u instanceof Ze?o&&a.push(u):(s&&a.push(u),i&&a.push.apply(a,u.getChildren(!0,o,s)))),u=u._next;return a},n.getById=function(i){for(var o=this.getChildren(1,1,1),s=o.length;s--;)if(o[s].vars.id===i)return o[s]},n.remove=function(i){return gt(i)?this.removeLabel(i):De(i)?this.killTweensOf(i):(Zc(this,i),i===this._recent&&(this._recent=this._last),lo(this))},n.totalTime=function(i,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ht(gn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),t.prototype.totalTime.call(this,i,o),this._forcing=0,this):this._tTime},n.addLabel=function(i,o){return this.labels[i]=On(this,o),this},n.removeLabel=function(i){return delete this.labels[i],this},n.addPause=function(i,o,s){var l=Ze.delayedCall(0,o||ua,s);return l.data="isPause",this._hasPause=1,gr(this,l,On(this,i))},n.removePause=function(i){var o=this._first;for(i=On(this,i);o;)o._start===i&&o.data==="isPause"&&zi(o),o=o._next},n.killTweensOf=function(i,o,s){for(var l=this.getTweensOf(i,s),a=l.length;a--;)ci!==l[a]&&l[a].kill(i,o);return this},n.getTweensOf=function(i,o){for(var s=[],l=Fn(i),a=this._first,u=Ur(o),c;a;)a instanceof Ze?jC(a._targets,l)&&(u?(!ci||a._initted&&a._ts)&&a.globalTime(0)<=o&&a.globalTime(a.totalDuration())>o:!o||a.isActive())&&s.push(a):(c=a.getTweensOf(l,o)).length&&s.push.apply(s,c),a=a._next;return s},n.tweenTo=function(i,o){o=o||{};var s=this,l=On(s,i),a=o,u=a.startAt,c=a.onStart,d=a.onStartParams,p=a.immediateRender,h,y=Ze.to(s,Wn({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:l,overwrite:"auto",duration:o.duration||Math.abs((l-(u&&"time"in u?u.time:s._time))/s.timeScale())||ve,onStart:function(){if(s.pause(),!h){var w=o.duration||Math.abs((l-(u&&"time"in u?u.time:s._time))/s.timeScale());y._dur!==w&&bs(y,w,0,1).render(y._time,!0,!0),h=1}c&&c.apply(y,d||[])}},o));return p?y.render(0):y},n.tweenFromTo=function(i,o,s){return this.tweenTo(o,Wn({startAt:{time:On(this,i)}},s))},n.recent=function(){return this._recent},n.nextLabel=function(i){return i===void 0&&(i=this._time),Mm(this,On(this,i))},n.previousLabel=function(i){return i===void 0&&(i=this._time),Mm(this,On(this,i),1)},n.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ve)},n.shiftChildren=function(i,o,s){s===void 0&&(s=0);for(var l=this._first,a=this.labels,u;l;)l._start>=s&&(l._start+=i,l._end+=i),l=l._next;if(o)for(u in a)a[u]>=s&&(a[u]+=i);return lo(this)},n.invalidate=function(i){var o=this._first;for(this._lock=0;o;)o.invalidate(i),o=o._next;return t.prototype.invalidate.call(this,i)},n.clear=function(i){i===void 0&&(i=!0);for(var o=this._first,s;o;)s=o._next,this.remove(o),o=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),lo(this)},n.totalDuration=function(i){var o=0,s=this,l=s._last,a=Ln,u,c,d;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(d=s.parent;l;)u=l._prev,l._dirty&&l.totalDuration(),c=l._start,c>a&&s._sort&&l._ts&&!s._lock?(s._lock=1,gr(s,l,c-l._delay,1)._lock=0):a=c,c<0&&l._ts&&(o-=c,(!d&&!s._dp||d&&d.smoothChildTiming)&&(s._start+=c/s._ts,s._time-=c,s._tTime-=c),s.shiftChildren(-c,!1,-1/0),a=0),l._end>o&&l._ts&&(o=l._end),l=u;bs(s,s===Ne&&s._time>o?s._time:o,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(Ne._ts&&(Vv(Ne,gc(i,Ne)),Uv=gn.frame),gn.frame>=zm){zm+=wn.autoSleep||120;var o=Ne._first;if((!o||!o._ts)&&wn.autoSleep&&gn._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||gn.sleep()}}},e}(da);Wn(Bt.prototype,{_lock:0,_hasPause:0,_forcing:0});var qC=function(e,n,r,i,o,s,l){var a=new on(this._pt,e,n,0,1,vy,null,o),u=0,c=0,d,p,h,y,g,w,x,m;for(a.b=r,a.e=i,r+="",i+="",(x=~i.indexOf("random("))&&(i=ca(i)),s&&(m=[r,i],s(m,e,n),r=m[0],i=m[1]),p=r.match(If)||[];d=If.exec(i);)y=d[0],g=i.substring(u,d.index),h?h=(h+1)%5:g.substr(-5)==="rgba("&&(h=1),y!==p[c++]&&(w=parseFloat(p[c-1])||0,a._pt={_next:a._pt,p:g||c===1?g:",",s:w,c:y.charAt(1)==="="?cs(w,y)-w:parseFloat(y)-w,m:h&&h<4?Math.round:0},u=If.lastIndex);return a.c=u<i.length?i.substring(u,i.length):"",a.fp=l,(Fv.test(i)||x)&&(a.e=0),this._pt=a,a},Lh=function(e,n,r,i,o,s,l,a,u,c){De(i)&&(i=i(o||0,e,s));var d=e[n],p=r!=="get"?r:De(d)?u?e[n.indexOf("set")||!De(e["get"+n.substr(3)])?n:"get"+n.substr(3)](u):e[n]():d,h=De(d)?u?nE:gy:Dh,y;if(gt(i)&&(~i.indexOf("random(")&&(i=ca(i)),i.charAt(1)==="="&&(y=cs(p,i)+(Rt(p)||0),(y||y===0)&&(i=y))),!c||p!==i||cp)return!isNaN(p*i)&&i!==""?(y=new on(this._pt,e,n,+p||0,i-(p||0),typeof d=="boolean"?iE:xy,0,h),u&&(y.fp=u),l&&y.modifier(l,this,e),this._pt=y):(!d&&!(n in e)&&Nh(n,i),qC.call(this,e,n,p,i,h,a||wn.stringFilter,u))},ZC=function(e,n,r,i,o){if(De(e)&&(e=Ol(e,o,n,r,i)),!kr(e)||e.style&&e.nodeType||bt(e)||Iv(e))return gt(e)?Ol(e,o,n,r,i):e;var s={},l;for(l in e)s[l]=Ol(e[l],o,n,r,i);return s},py=function(e,n,r,i,o,s){var l,a,u,c;if(mn[e]&&(l=new mn[e]).init(o,l.rawVars?n[e]:ZC(n[e],i,o,s,r),r,i,s)!==!1&&(r._pt=a=new on(r._pt,o,e,0,1,l.render,l,0,l.priority),r!==ns))for(u=r._ptLookup[r._targets.indexOf(o)],c=l._props.length;c--;)u[l._props[c]]=a;return l},ci,cp,Fh=function t(e,n,r){var i=e.vars,o=i.ease,s=i.startAt,l=i.immediateRender,a=i.lazy,u=i.onUpdate,c=i.runBackwards,d=i.yoyoEase,p=i.keyframes,h=i.autoRevert,y=e._dur,g=e._startAt,w=e._targets,x=e.parent,m=x&&x.data==="nested"?x.vars.targets:w,v=e._overwrite==="auto"&&!jh,_=e.timeline,C,E,S,T,z,j,$,M,V,X,Z,G,A;if(_&&(!p||!o)&&(o="none"),e._ease=ao(o,Rs.ease),e._yEase=d?uy(ao(d===!0?o:d,Rs.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!_&&!!i.runBackwards,!_||p&&!i.stagger){if(M=w[0]?so(w[0]).harness:0,G=M&&i[M.prop],C=mc(i,bh),g&&(g._zTime<0&&g.progress(1),n<0&&c&&l&&!h?g.render(-1,!0):g.revert(c&&y?Tu:TC),g._lazy=0),s){if(zi(e._startAt=Ze.set(w,Wn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!g&&nn(a),startAt:null,delay:0,onUpdate:u&&function(){return yn(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Nt||!l&&!h)&&e._startAt.revert(Tu),l&&y&&n<=0&&r<=0){n&&(e._zTime=n);return}}else if(c&&y&&!g){if(n&&(l=!1),S=Wn({overwrite:!1,data:"isFromStart",lazy:l&&!g&&nn(a),immediateRender:l,stagger:0,parent:x},C),G&&(S[M.prop]=G),zi(e._startAt=Ze.set(w,S)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Nt?e._startAt.revert(Tu):e._startAt.render(-1,!0)),e._zTime=n,!l)t(e._startAt,ve,ve);else if(!n)return}for(e._pt=e._ptCache=0,a=y&&nn(a)||a&&!y,E=0;E<w.length;E++){if(z=w[E],$=z._gsap||Ih(w)[E]._gsap,e._ptLookup[E]=X={},ip[$.id]&&Ci.length&&hc(),Z=m===w?E:m.indexOf(z),M&&(V=new M).init(z,G||C,e,Z,m)!==!1&&(e._pt=T=new on(e._pt,z,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(R){X[R]=T}),V.priority&&(j=1)),!M||G)for(S in C)mn[S]&&(V=py(S,C,e,Z,z,m))?V.priority&&(j=1):X[S]=T=Lh.call(e,z,S,"get",C[S],Z,m,0,i.stringFilter);e._op&&e._op[E]&&e.kill(z,e._op[E]),v&&e._pt&&(ci=e,Ne.killTweensOf(z,X,e.globalTime(n)),A=!e.parent,ci=0),e._pt&&a&&(ip[$.id]=1)}j&&yy(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!A,p&&n<=0&&_.render(Ln,!0,!0)},JC=function(e,n,r,i,o,s,l,a){var u=(e._pt&&e._ptCache||(e._ptCache={}))[n],c,d,p,h;if(!u)for(u=e._ptCache[n]=[],p=e._ptLookup,h=e._targets.length;h--;){if(c=p[h][n],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==n&&c.fp!==n;)c=c._next;if(!c)return cp=1,e.vars[n]="+=0",Fh(e,l),cp=0,a?aa(n+" not eligible for reset"):1;u.push(c)}for(h=u.length;h--;)d=u[h],c=d._pt||d,c.s=(i||i===0)&&!o?i:c.s+(i||0)+s*c.c,c.c=r-c.s,d.e&&(d.e=Ve(r)+Rt(d.e)),d.b&&(d.b=c.s+Rt(d.b))},eE=function(e,n){var r=e[0]?so(e[0]).harness:0,i=r&&r.aliases,o,s,l,a;if(!i)return n;o=yo({},n);for(s in i)if(s in o)for(a=i[s].split(","),l=a.length;l--;)o[a[l]]=o[s];return o},tE=function(e,n,r,i){var o=n.ease||i||"power1.inOut",s,l;if(bt(n))l=r[e]||(r[e]=[]),n.forEach(function(a,u){return l.push({t:u/(n.length-1)*100,v:a,e:o})});else for(s in n)l=r[s]||(r[s]=[]),s==="ease"||l.push({t:parseFloat(e),v:n[s],e:o})},Ol=function(e,n,r,i,o){return De(e)?e.call(n,r,i,o):gt(e)&&~e.indexOf("random(")?ca(e):e},hy=Mh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",my={};rn(hy+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return my[t]=1});var Ze=function(t){bv(e,t);function e(r,i,o,s){var l;typeof i=="number"&&(o.duration=i,i=o,o=null),l=t.call(this,s?i:Pl(i))||this;var a=l.vars,u=a.duration,c=a.delay,d=a.immediateRender,p=a.stagger,h=a.overwrite,y=a.keyframes,g=a.defaults,w=a.scrollTrigger,x=a.yoyoEase,m=i.parent||Ne,v=(bt(r)||Iv(r)?Ur(r[0]):"length"in i)?[r]:Fn(r),_,C,E,S,T,z,j,$;if(l._targets=v.length?Ih(v):aa("GSAP target "+r+" not found. https://gsap.com",!wn.nullTargetWarn)||[],l._ptLookup=[],l._overwrite=h,y||p||Ga(u)||Ga(c)){if(i=l.vars,_=l.timeline=new Bt({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:v}),_.kill(),_.parent=_._dp=Or(l),_._start=0,p||Ga(u)||Ga(c)){if(S=v.length,j=p&&Jv(p),kr(p))for(T in p)~hy.indexOf(T)&&($||($={}),$[T]=p[T]);for(C=0;C<S;C++)E=mc(i,my),E.stagger=0,x&&(E.yoyoEase=x),$&&yo(E,$),z=v[C],E.duration=+Ol(u,Or(l),C,z,v),E.delay=(+Ol(c,Or(l),C,z,v)||0)-l._delay,!p&&S===1&&E.delay&&(l._delay=c=E.delay,l._start+=c,E.delay=0),_.to(z,E,j?j(C,z,v):0),_._ease=se.none;_.duration()?u=c=0:l.timeline=0}else if(y){Pl(Wn(_.vars.defaults,{ease:"none"})),_._ease=ao(y.ease||i.ease||"none");var M=0,V,X,Z;if(bt(y))y.forEach(function(G){return _.to(v,G,">")}),_.duration();else{E={};for(T in y)T==="ease"||T==="easeEach"||tE(T,y[T],E,y.easeEach);for(T in E)for(V=E[T].sort(function(G,A){return G.t-A.t}),M=0,C=0;C<V.length;C++)X=V[C],Z={ease:X.e,duration:(X.t-(C?V[C-1].t:0))/100*u},Z[T]=X.v,_.to(v,Z,M),M+=Z.duration;_.duration()<u&&_.to({},{duration:u-_.duration()})}}u||l.duration(u=_.duration())}else l.timeline=0;return h===!0&&!jh&&(ci=Or(l),Ne.killTweensOf(v),ci=0),gr(m,Or(l),o),i.reversed&&l.reverse(),i.paused&&l.paused(!0),(d||!u&&!y&&l._start===ht(m._time)&&nn(d)&&NC(Or(l))&&m.data!=="nested")&&(l._tTime=-ve,l.render(Math.max(0,-c)||0)),w&&Qv(Or(l),w),l}var n=e.prototype;return n.render=function(i,o,s){var l=this._time,a=this._tDur,u=this._dur,c=i<0,d=i>a-ve&&!c?a:i<ve?0:i,p,h,y,g,w,x,m,v,_;if(!u)MC(this,i,o,s);else if(d!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(p=d,v=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+i,o,s);if(p=ht(d%g),d===a?(y=this._repeat,p=u):(y=~~(d/g),y&&y===ht(d/g)&&(p=u,y--),p>u&&(p=u)),x=this._yoyo&&y&1,x&&(_=this._yEase,p=u-p),w=Ns(this._tTime,g),p===l&&!s&&this._initted&&y===w)return this._tTime=d,this;y!==w&&(v&&this._yEase&&cy(v,x),this.vars.repeatRefresh&&!x&&!this._lock&&this._time!==g&&this._initted&&(this._lock=s=1,this.render(ht(g*y),!0).invalidate()._lock=0))}if(!this._initted){if(Kv(this,c?i:p,s,o,d))return this._tTime=0,this;if(l!==this._time&&!(s&&this.vars.repeatRefresh&&y!==w))return this;if(u!==this._dur)return this.render(i,o,s)}if(this._tTime=d,this._time=p,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=m=(_||this._ease)(p/u),this._from&&(this.ratio=m=1-m),p&&!l&&!o&&!y&&(yn(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(m,h.d),h=h._next;v&&v.render(i<0?i:v._dur*v._ease(p/this._dur),o,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!o&&(c&&op(this,i,o,s),yn(this,"onUpdate")),this._repeat&&y!==w&&this.vars.onRepeat&&!o&&this.parent&&yn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&op(this,i,!0,!0),(i||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&zi(this,1),!o&&!(c&&!l)&&(d||l||x)&&(yn(this,d===a?"onComplete":"onReverseComplete",!0),this._prom&&!(d<a&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),t.prototype.invalidate.call(this,i)},n.resetTo=function(i,o,s,l,a){fa||gn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Fh(this,u),c=this._ease(u/this._dur),JC(this,i,o,s,l,c,u,a)?this.resetTo(i,o,s,l,1):(ef(this,0),this.parent||Xv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(i,o){if(o===void 0&&(o="all"),!i&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?cl(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,o,ci&&ci.vars.overwrite!==!0)._first||cl(this),this.parent&&s!==this.timeline.totalDuration()&&bs(this,this._dur*this.timeline._tDur/s,0,1),this}var l=this._targets,a=i?Fn(i):l,u=this._ptLookup,c=this._pt,d,p,h,y,g,w,x;if((!o||o==="all")&&zC(l,a))return o==="all"&&(this._pt=0),cl(this);for(d=this._op=this._op||[],o!=="all"&&(gt(o)&&(g={},rn(o,function(m){return g[m]=1}),o=g),o=eE(l,o)),x=l.length;x--;)if(~a.indexOf(l[x])){p=u[x],o==="all"?(d[x]=o,y=p,h={}):(h=d[x]=d[x]||{},y=o);for(g in y)w=p&&p[g],w&&((!("kill"in w.d)||w.d.kill(g)===!0)&&Zc(this,w,"_pt"),delete p[g]),h!=="all"&&(h[g]=1)}return this._initted&&!this._pt&&c&&cl(this),this},e.to=function(i,o){return new e(i,o,arguments[2])},e.from=function(i,o){return jl(1,arguments)},e.delayedCall=function(i,o,s,l){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:o,onReverseComplete:o,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:l})},e.fromTo=function(i,o,s){return jl(2,arguments)},e.set=function(i,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(i,o)},e.killTweensOf=function(i,o,s){return Ne.killTweensOf(i,o,s)},e}(da);Wn(Ze.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});rn("staggerTo,staggerFrom,staggerFromTo",function(t){Ze[t]=function(){var e=new Bt,n=lp.call(arguments,0);return n.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,n)}});var Dh=function(e,n,r){return e[n]=r},gy=function(e,n,r){return e[n](r)},nE=function(e,n,r,i){return e[n](i.fp,r)},rE=function(e,n,r){return e.setAttribute(n,r)},$h=function(e,n){return De(e[n])?gy:Oh(e[n])&&e.setAttribute?rE:Dh},xy=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},iE=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},vy=function(e,n){var r=n._pt,i="";if(!e&&n.b)i=n.b;else if(e===1&&n.e)i=n.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*e):Math.round((r.s+r.c*e)*1e4)/1e4)+i,r=r._next;i+=n.c}n.set(n.t,n.p,i,n)},Ah=function(e,n){for(var r=n._pt;r;)r.r(e,r.d),r=r._next},oE=function(e,n,r,i){for(var o=this._pt,s;o;)s=o._next,o.p===i&&o.modifier(e,n,r),o=s},sE=function(e){for(var n=this._pt,r,i;n;)i=n._next,n.p===e&&!n.op||n.op===e?Zc(this,n,"_pt"):n.dep||(r=1),n=i;return!r},lE=function(e,n,r,i){i.mSet(e,n,i.m.call(i.tween,r,i.mt),i)},yy=function(e){for(var n=e._pt,r,i,o,s;n;){for(r=n._next,i=o;i&&i.pr>n.pr;)i=i._next;(n._prev=i?i._prev:s)?n._prev._next=n:o=n,(n._next=i)?i._prev=n:s=n,n=r}e._pt=o},on=function(){function t(n,r,i,o,s,l,a,u,c){this.t=r,this.s=o,this.c=s,this.p=i,this.r=l||xy,this.d=a||this,this.set=u||Dh,this.pr=c||0,this._next=n,n&&(n._prev=this)}var e=t.prototype;return e.modifier=function(r,i,o){this.mSet=this.mSet||this.set,this.set=lE,this.m=r,this.mt=o,this.tween=i},t}();rn(Mh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return bh[t]=1});kn.TweenMax=kn.TweenLite=Ze;kn.TimelineLite=kn.TimelineMax=Bt;Ne=new Bt({sortChildren:!1,defaults:Rs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});wn.stringFilter=ay;var uo=[],ju={},aE=[],Lm=0,uE=0,Af=function(e){return(ju[e]||aE).map(function(n){return n()})},fp=function(){var e=Date.now(),n=[];e-Lm>2&&(Af("matchMediaInit"),uo.forEach(function(r){var i=r.queries,o=r.conditions,s,l,a,u;for(l in i)s=dr.matchMedia(i[l]).matches,s&&(a=1),s!==o[l]&&(o[l]=s,u=1);u&&(r.revert(),a&&n.push(r))}),Af("matchMediaRevert"),n.forEach(function(r){return r.onMatch(r,function(i){return r.add(null,i)})}),Lm=e,Af("matchMedia"))},_y=function(){function t(n,r){this.selector=r&&ap(r),this.data=[],this._r=[],this.isReverted=!1,this.id=uE++,n&&this.add(n)}var e=t.prototype;return e.add=function(r,i,o){De(r)&&(o=i,i=r,r=De);var s=this,l=function(){var u=Pe,c=s.selector,d;return u&&u!==s&&u.data.push(s),o&&(s.selector=ap(o)),Pe=s,d=i.apply(s,arguments),De(d)&&s._r.push(d),Pe=u,s.selector=c,s.isReverted=!1,d};return s.last=l,r===De?l(s,function(a){return s.add(null,a)}):r?s[r]=l:l},e.ignore=function(r){var i=Pe;Pe=null,r(this),Pe=i},e.getTweens=function(){var r=[];return this.data.forEach(function(i){return i instanceof t?r.push.apply(r,i.getTweens()):i instanceof Ze&&!(i.parent&&i.parent.data==="nested")&&r.push(i)}),r},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(r,i){var o=this;if(r?function(){for(var l=o.getTweens(),a=o.data.length,u;a--;)u=o.data[a],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return l.splice(l.indexOf(c),1)}));for(l.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(r)}),a=o.data.length;a--;)u=o.data[a],u instanceof Bt?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Ze)&&u.revert&&u.revert(r);o._r.forEach(function(c){return c(r,o)}),o.isReverted=!0}():this.data.forEach(function(l){return l.kill&&l.kill()}),this.clear(),i)for(var s=uo.length;s--;)uo[s].id===this.id&&uo.splice(s,1)},e.revert=function(r){this.kill(r||{})},t}(),cE=function(){function t(n){this.contexts=[],this.scope=n,Pe&&Pe.data.push(this)}var e=t.prototype;return e.add=function(r,i,o){kr(r)||(r={matches:r});var s=new _y(0,o||this.scope),l=s.conditions={},a,u,c;Pe&&!s.selector&&(s.selector=Pe.selector),this.contexts.push(s),i=s.add("onMatch",i),s.queries=r;for(u in r)u==="all"?c=1:(a=dr.matchMedia(r[u]),a&&(uo.indexOf(s)<0&&uo.push(s),(l[u]=a.matches)&&(c=1),a.addListener?a.addListener(fp):a.addEventListener("change",fp)));return c&&i(s,function(d){return s.add(null,d)}),this},e.revert=function(r){this.kill(r||{})},e.kill=function(r){this.contexts.forEach(function(i){return i.kill(r,!0)})},t}(),xc={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];n.forEach(function(i){return oy(i)})},timeline:function(e){return new Bt(e)},getTweensOf:function(e,n){return Ne.getTweensOf(e,n)},getProperty:function(e,n,r,i){gt(e)&&(e=Fn(e)[0]);var o=so(e||{}).get,s=r?Yv:Hv;return r==="native"&&(r=""),e&&(n?s((mn[n]&&mn[n].get||o)(e,n,r,i)):function(l,a,u){return s((mn[l]&&mn[l].get||o)(e,l,a,u))})},quickSetter:function(e,n,r){if(e=Fn(e),e.length>1){var i=e.map(function(c){return ln.quickSetter(c,n,r)}),o=i.length;return function(c){for(var d=o;d--;)i[d](c)}}e=e[0]||{};var s=mn[n],l=so(e),a=l.harness&&(l.harness.aliases||{})[n]||n,u=s?function(c){var d=new s;ns._pt=0,d.init(e,r?c+r:c,ns,0,[e]),d.render(1,d),ns._pt&&Ah(1,ns)}:l.set(e,a);return s?u:function(c){return u(e,a,r?c+r:c,l,1)}},quickTo:function(e,n,r){var i,o=ln.to(e,yo((i={},i[n]="+=0.1",i.paused=!0,i),r||{})),s=function(a,u,c){return o.resetTo(n,a,u,c)};return s.tween=o,s},isTweening:function(e){return Ne.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ao(e.ease,Rs.ease)),Rm(Rs,e||{})},config:function(e){return Rm(wn,e||{})},registerEffect:function(e){var n=e.name,r=e.effect,i=e.plugins,o=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(l){return l&&!mn[l]&&!kn[l]&&aa(n+" effect requires "+l+" plugin.")}),Lf[n]=function(l,a,u){return r(Fn(l),Wn(a||{},o),u)},s&&(Bt.prototype[n]=function(l,a,u){return this.add(Lf[n](l,kr(a)?a:(u=a)&&{},this),u)})},registerEase:function(e,n){se[e]=ao(n)},parseEase:function(e,n){return arguments.length?ao(e,n):se},getById:function(e){return Ne.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var r=new Bt(e),i,o;for(r.smoothChildTiming=nn(e.smoothChildTiming),Ne.remove(r),r._dp=0,r._time=r._tTime=Ne._time,i=Ne._first;i;)o=i._next,(n||!(!i._dur&&i instanceof Ze&&i.vars.onComplete===i._targets[0]))&&gr(r,i,i._start-i._delay),i=o;return gr(Ne,r,0),r},context:function(e,n){return e?new _y(e,n):Pe},matchMedia:function(e){return new cE(e)},matchMediaRefresh:function(){return uo.forEach(function(e){var n=e.conditions,r,i;for(i in n)n[i]&&(n[i]=!1,r=1);r&&e.revert()})||fp()},addEventListener:function(e,n){var r=ju[e]||(ju[e]=[]);~r.indexOf(n)||r.push(n)},removeEventListener:function(e,n){var r=ju[e],i=r&&r.indexOf(n);i>=0&&r.splice(i,1)},utils:{wrap:UC,wrapYoyo:WC,distribute:Jv,random:ty,snap:ey,normalize:BC,getUnit:Rt,clamp:FC,splitColor:sy,toArray:Fn,selector:ap,mapRange:ry,pipe:$C,unitize:AC,interpolate:VC,shuffle:Zv},install:Av,effects:Lf,ticker:gn,updateRoot:Bt.updateRoot,plugins:mn,globalTimeline:Ne,core:{PropTween:on,globals:Bv,Tween:Ze,Timeline:Bt,Animation:da,getCache:so,_removeLinkedListItem:Zc,reverting:function(){return Nt},context:function(e){return e&&Pe&&(Pe.data.push(e),e._ctx=Pe),Pe},suppressOverwrites:function(e){return jh=e}}};rn("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return xc[t]=Ze[t]});gn.add(Bt.updateRoot);ns=xc.to({},{duration:0});var fE=function(e,n){for(var r=e._pt;r&&r.p!==n&&r.op!==n&&r.fp!==n;)r=r._next;return r},dE=function(e,n){var r=e._targets,i,o,s;for(i in n)for(o=r.length;o--;)s=e._ptLookup[o][i],s&&(s=s.d)&&(s._pt&&(s=fE(s,i)),s&&s.modifier&&s.modifier(n[i],e,r[o],i))},Bf=function(e,n){return{name:e,rawVars:1,init:function(i,o,s){s._onInit=function(l){var a,u;if(gt(o)&&(a={},rn(o,function(c){return a[c]=1}),o=a),n){a={};for(u in o)a[u]=n(o[u]);o=a}dE(l,o)}}}},ln=xc.registerPlugin({name:"attr",init:function(e,n,r,i,o){var s,l,a;this.tween=r;for(s in n)a=e.getAttribute(s)||"",l=this.add(e,"setAttribute",(a||0)+"",n[s],i,o,0,0,s),l.op=s,l.b=a,this._props.push(s)},render:function(e,n){for(var r=n._pt;r;)Nt?r.set(r.t,r.p,r.b,r):r.r(e,r.d),r=r._next}},{name:"endArray",init:function(e,n){for(var r=n.length;r--;)this.add(e,r,e[r]||0,n[r],0,0,0,0,0,1)}},Bf("roundProps",up),Bf("modifiers"),Bf("snap",ey))||xc;Ze.version=Bt.version=ln.version="3.12.5";$v=1;zh()&&Ms();se.Power0;se.Power1;se.Power2;se.Power3;se.Power4;se.Linear;se.Quad;se.Cubic;se.Quart;se.Quint;se.Strong;se.Elastic;se.Back;se.SteppedEase;se.Bounce;se.Sine;se.Expo;se.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Fm,fi,fs,Bh,eo,Dm,Uh,pE=function(){return typeof window<"u"},Wr={},Xi=180/Math.PI,ds=Math.PI/180,Lo=Math.atan2,$m=1e8,Wh=/([A-Z])/g,hE=/(left|right|width|margin|padding|x)/i,mE=/[\s,\(]\S/,xr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},dp=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},gE=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},xE=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},vE=function(e,n){var r=n.s+n.c*e;n.set(n.t,n.p,~~(r+(r<0?-.5:.5))+n.u,n)},wy=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},Sy=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},yE=function(e,n,r){return e.style[n]=r},_E=function(e,n,r){return e.style.setProperty(n,r)},wE=function(e,n,r){return e._gsap[n]=r},SE=function(e,n,r){return e._gsap.scaleX=e._gsap.scaleY=r},kE=function(e,n,r,i,o){var s=e._gsap;s.scaleX=s.scaleY=r,s.renderTransform(o,s)},CE=function(e,n,r,i,o){var s=e._gsap;s[n]=r,s.renderTransform(o,s)},be="transform",sn=be+"Origin",EE=function t(e,n){var r=this,i=this.target,o=i.style,s=i._gsap;if(e in Wr&&o){if(this.tfm=this.tfm||{},e!=="transform")e=xr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(l){return r.tfm[l]=Rr(i,l)}):this.tfm[e]=s.x?s[e]:Rr(i,e),e===sn&&(this.tfm.zOrigin=s.zOrigin);else return xr.transform.split(",").forEach(function(l){return t.call(r,l,n)});if(this.props.indexOf(be)>=0)return;s.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(sn,n,"")),e=be}(o||n)&&this.props.push(e,n,o[e])},ky=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},TE=function(){var e=this.props,n=this.target,r=n.style,i=n._gsap,o,s;for(o=0;o<e.length;o+=3)e[o+1]?n[e[o]]=e[o+2]:e[o+2]?r[e[o]]=e[o+2]:r.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(Wh,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),o=Uh(),(!o||!o.isStart)&&!r[be]&&(ky(r),i.zOrigin&&r[sn]&&(r[sn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Cy=function(e,n){var r={target:e,props:[],revert:TE,save:EE};return e._gsap||ln.core.getCache(e),n&&n.split(",").forEach(function(i){return r.save(i)}),r},Ey,pp=function(e,n){var r=fi.createElementNS?fi.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):fi.createElement(e);return r&&r.style?r:fi.createElement(e)},wr=function t(e,n,r){var i=getComputedStyle(e);return i[n]||i.getPropertyValue(n.replace(Wh,"-$1").toLowerCase())||i.getPropertyValue(n)||!r&&t(e,Is(n)||n,1)||""},Am="O,Moz,ms,Ms,Webkit".split(","),Is=function(e,n,r){var i=n||eo,o=i.style,s=5;if(e in o&&!r)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Am[s]+e in o););return s<0?null:(s===3?"ms":s>=0?Am[s]:"")+e},hp=function(){pE()&&window.document&&(Fm=window,fi=Fm.document,fs=fi.documentElement,eo=pp("div")||{style:{}},pp("div"),be=Is(be),sn=be+"Origin",eo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ey=!!Is("perspective"),Uh=ln.core.reverting,Bh=1)},Uf=function t(e){var n=pp("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=this.parentNode,i=this.nextSibling,o=this.style.cssText,s;if(fs.appendChild(n),n.appendChild(this),this.style.display="block",e)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=t}catch{}else this._gsapBBox&&(s=this._gsapBBox());return r&&(i?r.insertBefore(this,i):r.appendChild(this)),fs.removeChild(n),this.style.cssText=o,s},Bm=function(e,n){for(var r=n.length;r--;)if(e.hasAttribute(n[r]))return e.getAttribute(n[r])},Ty=function(e){var n;try{n=e.getBBox()}catch{n=Uf.call(e,!0)}return n&&(n.width||n.height)||e.getBBox===Uf||(n=Uf.call(e,!0)),n&&!n.width&&!n.x&&!n.y?{x:+Bm(e,["x","cx","x1"])||0,y:+Bm(e,["y","cy","y1"])||0,width:0,height:0}:n},Py=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ty(e))},_o=function(e,n){if(n){var r=e.style,i;n in Wr&&n!==sn&&(n=be),r.removeProperty?(i=n.substr(0,2),(i==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),r.removeProperty(i==="--"?n:n.replace(Wh,"-$1").toLowerCase())):r.removeAttribute(n)}},di=function(e,n,r,i,o,s){var l=new on(e._pt,n,r,0,1,s?Sy:wy);return e._pt=l,l.b=i,l.e=o,e._props.push(r),l},Um={deg:1,rad:1,turn:1},PE={grid:1,flex:1},Ri=function t(e,n,r,i){var o=parseFloat(r)||0,s=(r+"").trim().substr((o+"").length)||"px",l=eo.style,a=hE.test(n),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(a?"Width":"Height"),d=100,p=i==="px",h=i==="%",y,g,w,x;if(i===s||!o||Um[i]||Um[s])return o;if(s!=="px"&&!p&&(o=t(e,n,r,"px")),x=e.getCTM&&Py(e),(h||s==="%")&&(Wr[n]||~n.indexOf("adius")))return y=x?e.getBBox()[a?"width":"height"]:e[c],Ve(h?o/y*d:o/100*y);if(l[a?"width":"height"]=d+(p?s:i),g=~n.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,x&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===fi||!g.appendChild)&&(g=fi.body),w=g._gsap,w&&h&&w.width&&a&&w.time===gn.time&&!w.uncache)return Ve(o/w.width*d);if(h&&(n==="height"||n==="width")){var m=e.style[n];e.style[n]=d+i,y=e[c],m?e.style[n]=m:_o(e,n)}else(h||s==="%")&&!PE[wr(g,"display")]&&(l.position=wr(e,"position")),g===e&&(l.position="static"),g.appendChild(eo),y=eo[c],g.removeChild(eo),l.position="absolute";return a&&h&&(w=so(g),w.time=gn.time,w.width=g[c]),Ve(p?y*o/d:y&&o?d/y*o:0)},Rr=function(e,n,r,i){var o;return Bh||hp(),n in xr&&n!=="transform"&&(n=xr[n],~n.indexOf(",")&&(n=n.split(",")[0])),Wr[n]&&n!=="transform"?(o=ha(e,i),o=n!=="transformOrigin"?o[n]:o.svg?o.origin:yc(wr(e,sn))+" "+o.zOrigin+"px"):(o=e.style[n],(!o||o==="auto"||i||~(o+"").indexOf("calc("))&&(o=vc[n]&&vc[n](e,n,r)||wr(e,n)||Wv(e,n)||(n==="opacity"?1:0))),r&&!~(o+"").trim().indexOf(" ")?Ri(e,n,o,r)+r:o},jE=function(e,n,r,i){if(!r||r==="none"){var o=Is(n,e,1),s=o&&wr(e,o,1);s&&s!==r?(n=o,r=s):n==="borderColor"&&(r=wr(e,"borderTopColor"))}var l=new on(this._pt,e.style,n,0,1,vy),a=0,u=0,c,d,p,h,y,g,w,x,m,v,_,C;if(l.b=r,l.e=i,r+="",i+="",i==="auto"&&(g=e.style[n],e.style[n]=i,i=wr(e,n)||i,g?e.style[n]=g:_o(e,n)),c=[r,i],ay(c),r=c[0],i=c[1],p=r.match(ts)||[],C=i.match(ts)||[],C.length){for(;d=ts.exec(i);)w=d[0],m=i.substring(a,d.index),y?y=(y+1)%5:(m.substr(-5)==="rgba("||m.substr(-5)==="hsla(")&&(y=1),w!==(g=p[u++]||"")&&(h=parseFloat(g)||0,_=g.substr((h+"").length),w.charAt(1)==="="&&(w=cs(h,w)+_),x=parseFloat(w),v=w.substr((x+"").length),a=ts.lastIndex-v.length,v||(v=v||wn.units[n]||_,a===i.length&&(i+=v,l.e+=v)),_!==v&&(h=Ri(e,n,g,v)||0),l._pt={_next:l._pt,p:m||u===1?m:",",s:h,c:x-h,m:y&&y<4||n==="zIndex"?Math.round:0});l.c=a<i.length?i.substring(a,i.length):""}else l.r=n==="display"&&i==="none"?Sy:wy;return Fv.test(i)&&(l.e=0),this._pt=l,l},Wm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},OE=function(e){var n=e.split(" "),r=n[0],i=n[1]||"50%";return(r==="top"||r==="bottom"||i==="left"||i==="right")&&(e=r,r=i,i=e),n[0]=Wm[r]||r,n[1]=Wm[i]||i,n.join(" ")},zE=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var r=n.t,i=r.style,o=n.u,s=r._gsap,l,a,u;if(o==="all"||o===!0)i.cssText="",a=1;else for(o=o.split(","),u=o.length;--u>-1;)l=o[u],Wr[l]&&(a=1,l=l==="transformOrigin"?sn:be),_o(r,l);a&&(_o(r,be),s&&(s.svg&&r.removeAttribute("transform"),ha(r,1),s.uncache=1,ky(i)))}},vc={clearProps:function(e,n,r,i,o){if(o.data!=="isFromStart"){var s=e._pt=new on(e._pt,n,r,0,0,zE);return s.u=i,s.pr=-10,s.tween=o,e._props.push(r),1}}},pa=[1,0,0,1,0,0],jy={},Oy=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Vm=function(e){var n=wr(e,be);return Oy(n)?pa:n.substr(7).match(Lv).map(Ve)},Vh=function(e,n){var r=e._gsap||so(e),i=e.style,o=Vm(e),s,l,a,u;return r.svg&&e.getAttribute("transform")?(a=e.transform.baseVal.consolidate().matrix,o=[a.a,a.b,a.c,a.d,a.e,a.f],o.join(",")==="1,0,0,1,0,0"?pa:o):(o===pa&&!e.offsetParent&&e!==fs&&!r.svg&&(a=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent)&&(u=1,l=e.nextElementSibling,fs.appendChild(e)),o=Vm(e),a?i.display=a:_o(e,"display"),u&&(l?s.insertBefore(e,l):s?s.appendChild(e):fs.removeChild(e))),n&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},mp=function(e,n,r,i,o,s){var l=e._gsap,a=o||Vh(e,!0),u=l.xOrigin||0,c=l.yOrigin||0,d=l.xOffset||0,p=l.yOffset||0,h=a[0],y=a[1],g=a[2],w=a[3],x=a[4],m=a[5],v=n.split(" "),_=parseFloat(v[0])||0,C=parseFloat(v[1])||0,E,S,T,z;r?a!==pa&&(S=h*w-y*g)&&(T=_*(w/S)+C*(-g/S)+(g*m-w*x)/S,z=_*(-y/S)+C*(h/S)-(h*m-y*x)/S,_=T,C=z):(E=Ty(e),_=E.x+(~v[0].indexOf("%")?_/100*E.width:_),C=E.y+(~(v[1]||v[0]).indexOf("%")?C/100*E.height:C)),i||i!==!1&&l.smooth?(x=_-u,m=C-c,l.xOffset=d+(x*h+m*g)-x,l.yOffset=p+(x*y+m*w)-m):l.xOffset=l.yOffset=0,l.xOrigin=_,l.yOrigin=C,l.smooth=!!i,l.origin=n,l.originIsAbsolute=!!r,e.style[sn]="0px 0px",s&&(di(s,l,"xOrigin",u,_),di(s,l,"yOrigin",c,C),di(s,l,"xOffset",d,l.xOffset),di(s,l,"yOffset",p,l.yOffset)),e.setAttribute("data-svg-origin",_+" "+C)},ha=function(e,n){var r=e._gsap||new dy(e);if("x"in r&&!n&&!r.uncache)return r;var i=e.style,o=r.scaleX<0,s="px",l="deg",a=getComputedStyle(e),u=wr(e,sn)||"0",c,d,p,h,y,g,w,x,m,v,_,C,E,S,T,z,j,$,M,V,X,Z,G,A,R,I,k,B,H,nt,le,xe;return c=d=p=g=w=x=m=v=_=0,h=y=1,r.svg=!!(e.getCTM&&Py(e)),a.translate&&((a.translate!=="none"||a.scale!=="none"||a.rotate!=="none")&&(i[be]=(a.translate!=="none"?"translate3d("+(a.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(a.rotate!=="none"?"rotate("+a.rotate+") ":"")+(a.scale!=="none"?"scale("+a.scale.split(" ").join(",")+") ":"")+(a[be]!=="none"?a[be]:"")),i.scale=i.rotate=i.translate="none"),S=Vh(e,r.svg),r.svg&&(r.uncache?(R=e.getBBox(),u=r.xOrigin-R.x+"px "+(r.yOrigin-R.y)+"px",A=""):A=!n&&e.getAttribute("data-svg-origin"),mp(e,A||u,!!A||r.originIsAbsolute,r.smooth!==!1,S)),C=r.xOrigin||0,E=r.yOrigin||0,S!==pa&&($=S[0],M=S[1],V=S[2],X=S[3],c=Z=S[4],d=G=S[5],S.length===6?(h=Math.sqrt($*$+M*M),y=Math.sqrt(X*X+V*V),g=$||M?Lo(M,$)*Xi:0,m=V||X?Lo(V,X)*Xi+g:0,m&&(y*=Math.abs(Math.cos(m*ds))),r.svg&&(c-=C-(C*$+E*V),d-=E-(C*M+E*X))):(xe=S[6],nt=S[7],k=S[8],B=S[9],H=S[10],le=S[11],c=S[12],d=S[13],p=S[14],T=Lo(xe,H),w=T*Xi,T&&(z=Math.cos(-T),j=Math.sin(-T),A=Z*z+k*j,R=G*z+B*j,I=xe*z+H*j,k=Z*-j+k*z,B=G*-j+B*z,H=xe*-j+H*z,le=nt*-j+le*z,Z=A,G=R,xe=I),T=Lo(-V,H),x=T*Xi,T&&(z=Math.cos(-T),j=Math.sin(-T),A=$*z-k*j,R=M*z-B*j,I=V*z-H*j,le=X*j+le*z,$=A,M=R,V=I),T=Lo(M,$),g=T*Xi,T&&(z=Math.cos(T),j=Math.sin(T),A=$*z+M*j,R=Z*z+G*j,M=M*z-$*j,G=G*z-Z*j,$=A,Z=R),w&&Math.abs(w)+Math.abs(g)>359.9&&(w=g=0,x=180-x),h=Ve(Math.sqrt($*$+M*M+V*V)),y=Ve(Math.sqrt(G*G+xe*xe)),T=Lo(Z,G),m=Math.abs(T)>2e-4?T*Xi:0,_=le?1/(le<0?-le:le):0),r.svg&&(A=e.getAttribute("transform"),r.forceCSS=e.setAttribute("transform","")||!Oy(wr(e,be)),A&&e.setAttribute("transform",A))),Math.abs(m)>90&&Math.abs(m)<270&&(o?(h*=-1,m+=g<=0?180:-180,g+=g<=0?180:-180):(y*=-1,m+=m<=0?180:-180)),n=n||r.uncache,r.x=c-((r.xPercent=c&&(!n&&r.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*r.xPercent/100:0)+s,r.y=d-((r.yPercent=d&&(!n&&r.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*r.yPercent/100:0)+s,r.z=p+s,r.scaleX=Ve(h),r.scaleY=Ve(y),r.rotation=Ve(g)+l,r.rotationX=Ve(w)+l,r.rotationY=Ve(x)+l,r.skewX=m+l,r.skewY=v+l,r.transformPerspective=_+s,(r.zOrigin=parseFloat(u.split(" ")[2])||!n&&r.zOrigin||0)&&(i[sn]=yc(u)),r.xOffset=r.yOffset=0,r.force3D=wn.force3D,r.renderTransform=r.svg?NE:Ey?zy:RE,r.uncache=0,r},yc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Wf=function(e,n,r){var i=Rt(n);return Ve(parseFloat(n)+parseFloat(Ri(e,"x",r+"px",i)))+i},RE=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,zy(e,n)},Wi="0deg",nl="0px",Vi=") ",zy=function(e,n){var r=n||this,i=r.xPercent,o=r.yPercent,s=r.x,l=r.y,a=r.z,u=r.rotation,c=r.rotationY,d=r.rotationX,p=r.skewX,h=r.skewY,y=r.scaleX,g=r.scaleY,w=r.transformPerspective,x=r.force3D,m=r.target,v=r.zOrigin,_="",C=x==="auto"&&e&&e!==1||x===!0;if(v&&(d!==Wi||c!==Wi)){var E=parseFloat(c)*ds,S=Math.sin(E),T=Math.cos(E),z;E=parseFloat(d)*ds,z=Math.cos(E),s=Wf(m,s,S*z*-v),l=Wf(m,l,-Math.sin(E)*-v),a=Wf(m,a,T*z*-v+v)}w!==nl&&(_+="perspective("+w+Vi),(i||o)&&(_+="translate("+i+"%, "+o+"%) "),(C||s!==nl||l!==nl||a!==nl)&&(_+=a!==nl||C?"translate3d("+s+", "+l+", "+a+") ":"translate("+s+", "+l+Vi),u!==Wi&&(_+="rotate("+u+Vi),c!==Wi&&(_+="rotateY("+c+Vi),d!==Wi&&(_+="rotateX("+d+Vi),(p!==Wi||h!==Wi)&&(_+="skew("+p+", "+h+Vi),(y!==1||g!==1)&&(_+="scale("+y+", "+g+Vi),m.style[be]=_||"translate(0, 0)"},NE=function(e,n){var r=n||this,i=r.xPercent,o=r.yPercent,s=r.x,l=r.y,a=r.rotation,u=r.skewX,c=r.skewY,d=r.scaleX,p=r.scaleY,h=r.target,y=r.xOrigin,g=r.yOrigin,w=r.xOffset,x=r.yOffset,m=r.forceCSS,v=parseFloat(s),_=parseFloat(l),C,E,S,T,z;a=parseFloat(a),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,a+=c),a||u?(a*=ds,u*=ds,C=Math.cos(a)*d,E=Math.sin(a)*d,S=Math.sin(a-u)*-p,T=Math.cos(a-u)*p,u&&(c*=ds,z=Math.tan(u-c),z=Math.sqrt(1+z*z),S*=z,T*=z,c&&(z=Math.tan(c),z=Math.sqrt(1+z*z),C*=z,E*=z)),C=Ve(C),E=Ve(E),S=Ve(S),T=Ve(T)):(C=d,T=p,E=S=0),(v&&!~(s+"").indexOf("px")||_&&!~(l+"").indexOf("px"))&&(v=Ri(h,"x",s,"px"),_=Ri(h,"y",l,"px")),(y||g||w||x)&&(v=Ve(v+y-(y*C+g*S)+w),_=Ve(_+g-(y*E+g*T)+x)),(i||o)&&(z=h.getBBox(),v=Ve(v+i/100*z.width),_=Ve(_+o/100*z.height)),z="matrix("+C+","+E+","+S+","+T+","+v+","+_+")",h.setAttribute("transform",z),m&&(h.style[be]=z)},bE=function(e,n,r,i,o){var s=360,l=gt(o),a=parseFloat(o)*(l&&~o.indexOf("rad")?Xi:1),u=a-i,c=i+u+"deg",d,p;return l&&(d=o.split("_")[1],d==="short"&&(u%=s,u!==u%(s/2)&&(u+=u<0?s:-s)),d==="cw"&&u<0?u=(u+s*$m)%s-~~(u/s)*s:d==="ccw"&&u>0&&(u=(u-s*$m)%s-~~(u/s)*s)),e._pt=p=new on(e._pt,n,r,i,u,gE),p.e=c,p.u="deg",e._props.push(r),p},Hm=function(e,n){for(var r in n)e[r]=n[r];return e},ME=function(e,n,r){var i=Hm({},r._gsap),o="perspective,force3D,transformOrigin,svgOrigin",s=r.style,l,a,u,c,d,p,h,y;i.svg?(u=r.getAttribute("transform"),r.setAttribute("transform",""),s[be]=n,l=ha(r,1),_o(r,be),r.setAttribute("transform",u)):(u=getComputedStyle(r)[be],s[be]=n,l=ha(r,1),s[be]=u);for(a in Wr)u=i[a],c=l[a],u!==c&&o.indexOf(a)<0&&(h=Rt(u),y=Rt(c),d=h!==y?Ri(r,a,u,y):parseFloat(u),p=parseFloat(c),e._pt=new on(e._pt,l,a,d,p-d,dp),e._pt.u=y||0,e._props.push(a));Hm(l,i)};rn("padding,margin,Width,Radius",function(t,e){var n="Top",r="Right",i="Bottom",o="Left",s=(e<3?[n,r,i,o]:[n+o,n+r,i+r,i+o]).map(function(l){return e<2?t+l:"border"+l+t});vc[e>1?"border"+t:t]=function(l,a,u,c,d){var p,h;if(arguments.length<4)return p=s.map(function(y){return Rr(l,y,u)}),h=p.join(" "),h.split(p[0]).length===5?p[0]:h;p=(c+"").split(" "),h={},s.forEach(function(y,g){return h[y]=p[g]=p[g]||p[(g-1)/2|0]}),l.init(a,h,d)}});var Ry={name:"css",register:hp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,r,i,o){var s=this._props,l=e.style,a=r.vars.startAt,u,c,d,p,h,y,g,w,x,m,v,_,C,E,S,T;Bh||hp(),this.styles=this.styles||Cy(e),T=this.styles.props,this.tween=r;for(g in n)if(g!=="autoRound"&&(c=n[g],!(mn[g]&&py(g,n,r,i,e,o)))){if(h=typeof c,y=vc[g],h==="function"&&(c=c.call(r,i,e,o),h=typeof c),h==="string"&&~c.indexOf("random(")&&(c=ca(c)),y)y(this,e,g,c,r)&&(S=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",Ei.lastIndex=0,Ei.test(u)||(w=Rt(u),x=Rt(c)),x?w!==x&&(u=Ri(e,g,u,x)+x):w&&(c+=w),this.add(l,"setProperty",u,c,i,o,0,0,g),s.push(g),T.push(g,0,l[g]);else if(h!=="undefined"){if(a&&g in a?(u=typeof a[g]=="function"?a[g].call(r,i,e,o):a[g],gt(u)&&~u.indexOf("random(")&&(u=ca(u)),Rt(u+"")||u==="auto"||(u+=wn.units[g]||Rt(Rr(e,g))||""),(u+"").charAt(1)==="="&&(u=Rr(e,g))):u=Rr(e,g),p=parseFloat(u),m=h==="string"&&c.charAt(1)==="="&&c.substr(0,2),m&&(c=c.substr(2)),d=parseFloat(c),g in xr&&(g==="autoAlpha"&&(p===1&&Rr(e,"visibility")==="hidden"&&d&&(p=0),T.push("visibility",0,l.visibility),di(this,l,"visibility",p?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=xr[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in Wr,v){if(this.styles.save(g),_||(C=e._gsap,C.renderTransform&&!n.parseTransform||ha(e,n.parseTransform),E=n.smoothOrigin!==!1&&C.smooth,_=this._pt=new on(this._pt,l,be,0,1,C.renderTransform,C,0,-1),_.dep=1),g==="scale")this._pt=new on(this._pt,C,"scaleY",C.scaleY,(m?cs(C.scaleY,m+d):d)-C.scaleY||0,dp),this._pt.u=0,s.push("scaleY",g),g+="X";else if(g==="transformOrigin"){T.push(sn,0,l[sn]),c=OE(c),C.svg?mp(e,c,0,E,0,this):(x=parseFloat(c.split(" ")[2])||0,x!==C.zOrigin&&di(this,C,"zOrigin",C.zOrigin,x),di(this,l,g,yc(u),yc(c)));continue}else if(g==="svgOrigin"){mp(e,c,1,E,0,this);continue}else if(g in jy){bE(this,C,g,p,m?cs(p,m+c):c);continue}else if(g==="smoothOrigin"){di(this,C,"smooth",C.smooth,c);continue}else if(g==="force3D"){C[g]=c;continue}else if(g==="transform"){ME(this,c,e);continue}}else g in l||(g=Is(g)||g);if(v||(d||d===0)&&(p||p===0)&&!mE.test(c)&&g in l)w=(u+"").substr((p+"").length),d||(d=0),x=Rt(c)||(g in wn.units?wn.units[g]:w),w!==x&&(p=Ri(e,g,u,x)),this._pt=new on(this._pt,v?C:l,g,p,(m?cs(p,m+d):d)-p,!v&&(x==="px"||g==="zIndex")&&n.autoRound!==!1?vE:dp),this._pt.u=x||0,w!==x&&x!=="%"&&(this._pt.b=u,this._pt.r=xE);else if(g in l)jE.call(this,e,g,u,m?m+c:c);else if(g in e)this.add(e,g,u||e[g],m?m+c:c,i,o);else if(g!=="parseTransform"){Nh(g,c);continue}v||(g in l?T.push(g,0,l[g]):T.push(g,1,u||e[g])),s.push(g)}}S&&yy(this)},render:function(e,n){if(n.tween._time||!Uh())for(var r=n._pt;r;)r.r(e,r.d),r=r._next;else n.styles.revert()},get:Rr,aliases:xr,getSetter:function(e,n,r){var i=xr[n];return i&&i.indexOf(",")<0&&(n=i),n in Wr&&n!==sn&&(e._gsap.x||Rr(e,"x"))?r&&Dm===r?n==="scale"?SE:wE:(Dm=r||{})&&(n==="scale"?kE:CE):e.style&&!Oh(e.style[n])?yE:~n.indexOf("-")?_E:$h(e,n)},core:{_removeProperty:_o,_getMatrix:Vh}};ln.utils.checkPrefix=Is;ln.core.getStyleSaver=Cy;(function(t,e,n,r){var i=rn(t+","+e+","+n,function(o){Wr[o]=1});rn(e,function(o){wn.units[o]="deg",jy[o]=1}),xr[i[13]]=t+","+e,rn(r,function(o){var s=o.split(":");xr[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");rn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){wn.units[t]="px"});ln.registerPlugin(Ry);var wo=ln.registerPlugin(Ry)||ln;wo.core.Tween;/*!
 * @gsap/react 2.1.1
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let Ym=typeof window<"u"?N.useLayoutEffect:N.useEffect,Xm=t=>t&&!Array.isArray(t)&&typeof t=="object",Qa=[],IE={},Ny=wo;const Ea=(t,e=Qa)=>{let n=IE;Xm(t)?(n=t,t=null,e="dependencies"in n?n.dependencies:Qa):Xm(e)&&(n=e,e="dependencies"in n?n.dependencies:Qa),t&&typeof t!="function"&&console.warn("First parameter must be a function or config object");const{scope:r,revertOnUpdate:i}=n,o=N.useRef(!1),s=N.useRef(Ny.context(()=>{},r)),l=N.useRef(u=>s.current.add(null,u)),a=e&&e.length&&!i;return Ym(()=>{if(t&&s.current.add(t,r),!a||!o.current)return()=>s.current.revert()},e),a&&Ym(()=>(o.current=!0,()=>s.current.revert()),Qa),{context:s.current,contextSafe:l.current}};Ea.register=t=>{Ny=t};Ea.headless=!0;function LE(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function FE(t,e,n){return e&&LE(t.prototype,e),t}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _t,Ou,xn,pi,hi,ps,by,Gi,zl,My,Ir,qn,Iy,Ly=function(){return _t||typeof window<"u"&&(_t=window.gsap)&&_t.registerPlugin&&_t},Fy=1,rs=[],te=[],Sr=[],Rl=Date.now,gp=function(e,n){return n},DE=function(){var e=zl.core,n=e.bridge||{},r=e._scrollers,i=e._proxies;r.push.apply(r,te),i.push.apply(i,Sr),te=r,Sr=i,gp=function(s,l){return n[s](l)}},Ti=function(e,n){return~Sr.indexOf(e)&&Sr[Sr.indexOf(e)+1][n]},Nl=function(e){return!!~My.indexOf(e)},Lt=function(e,n,r,i,o){return e.addEventListener(n,r,{passive:i!==!1,capture:!!o})},It=function(e,n,r,i){return e.removeEventListener(n,r,!!i)},Ka="scrollLeft",qa="scrollTop",xp=function(){return Ir&&Ir.isPressed||te.cache++},_c=function(e,n){var r=function i(o){if(o||o===0){Fy&&(xn.history.scrollRestoration="manual");var s=Ir&&Ir.isPressed;o=i.v=Math.round(o)||(Ir&&Ir.iOS?1:0),e(o),i.cacheID=te.cache,s&&gp("ss",o)}else(n||te.cache!==i.cacheID||gp("ref"))&&(i.cacheID=te.cache,i.v=e());return i.v+i.offset};return r.offset=0,e&&r},Ut={s:Ka,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:_c(function(t){return arguments.length?xn.scrollTo(t,st.sc()):xn.pageXOffset||pi[Ka]||hi[Ka]||ps[Ka]||0})},st={s:qa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ut,sc:_c(function(t){return arguments.length?xn.scrollTo(Ut.sc(),t):xn.pageYOffset||pi[qa]||hi[qa]||ps[qa]||0})},Gt=function(e,n){return(n&&n._ctx&&n._ctx.selector||_t.utils.toArray)(e)[0]||(typeof e=="string"&&_t.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Ni=function(e,n){var r=n.s,i=n.sc;Nl(e)&&(e=pi.scrollingElement||hi);var o=te.indexOf(e),s=i===st.sc?1:2;!~o&&(o=te.push(e)-1),te[o+s]||Lt(e,"scroll",xp);var l=te[o+s],a=l||(te[o+s]=_c(Ti(e,r),!0)||(Nl(e)?i:_c(function(u){return arguments.length?e[r]=u:e[r]})));return a.target=e,l||(a.smooth=_t.getProperty(e,"scrollBehavior")==="smooth"),a},vp=function(e,n,r){var i=e,o=e,s=Rl(),l=s,a=n||50,u=Math.max(500,a*3),c=function(y,g){var w=Rl();g||w-s>a?(o=i,i=y,l=s,s=w):r?i+=y:i=o+(y-o)/(w-l)*(s-l)},d=function(){o=i=r?0:i,l=s=0},p=function(y){var g=l,w=o,x=Rl();return(y||y===0)&&y!==i&&c(y),s===l||x-l>u?0:(i+(r?w:-w))/((r?x:s)-g)*1e3};return{update:c,reset:d,getVelocity:p}},rl=function(e,n){return n&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Gm=function(e){var n=Math.max.apply(Math,e),r=Math.min.apply(Math,e);return Math.abs(n)>=Math.abs(r)?n:r},Dy=function(){zl=_t.core.globals().ScrollTrigger,zl&&zl.core&&DE()},$y=function(e){return _t=e||Ly(),!Ou&&_t&&typeof document<"u"&&document.body&&(xn=window,pi=document,hi=pi.documentElement,ps=pi.body,My=[xn,pi,hi,ps],_t.utils.clamp,Iy=_t.core.context||function(){},Gi="onpointerenter"in ps?"pointer":"mouse",by=Ye.isTouch=xn.matchMedia&&xn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in xn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,qn=Ye.eventTypes=("ontouchstart"in hi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in hi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Fy=0},500),Dy(),Ou=1),Ou};Ut.op=st;te.cache=0;var Ye=function(){function t(n){this.init(n)}var e=t.prototype;return e.init=function(r){Ou||$y(_t)||console.warn("Please gsap.registerPlugin(Observer)"),zl||Dy();var i=r.tolerance,o=r.dragMinimum,s=r.type,l=r.target,a=r.lineHeight,u=r.debounce,c=r.preventDefault,d=r.onStop,p=r.onStopDelay,h=r.ignore,y=r.wheelSpeed,g=r.event,w=r.onDragStart,x=r.onDragEnd,m=r.onDrag,v=r.onPress,_=r.onRelease,C=r.onRight,E=r.onLeft,S=r.onUp,T=r.onDown,z=r.onChangeX,j=r.onChangeY,$=r.onChange,M=r.onToggleX,V=r.onToggleY,X=r.onHover,Z=r.onHoverEnd,G=r.onMove,A=r.ignoreCheck,R=r.isNormalizer,I=r.onGestureStart,k=r.onGestureEnd,B=r.onWheel,H=r.onEnable,nt=r.onDisable,le=r.onClick,xe=r.scrollSpeed,pe=r.capture,fe=r.allowClicks,Ae=r.lockAxis,Ce=r.onLockAxis;this.target=l=Gt(l)||hi,this.vars=r,h&&(h=_t.utils.toArray(h)),i=i||1e-9,o=o||0,y=y||1,xe=xe||1,s=s||"wheel,touch,pointer",u=u!==!1,a||(a=parseFloat(xn.getComputedStyle(ps).lineHeight)||22);var Tn,Xe,Ge,ue,Be,Xt,an,O=this,un=0,Cr=0,Hr=r.passive||!c,Qe=Ni(l,Ut),Yr=Ni(l,st),Di=Qe(),zo=Yr(),at=~s.indexOf("touch")&&!~s.indexOf("pointer")&&qn[0]==="pointerdown",Xr=Nl(l),Ue=l.ownerDocument||pi,Vn=[0,0,0],Pn=[0,0,0],Er=0,Ws=function(){return Er=Rl()},Ke=function(W,ce){return(O.event=W)&&h&&~h.indexOf(W.target)||ce&&at&&W.pointerType!=="touch"||A&&A(W,ce)},Ta=function(){O._vx.reset(),O._vy.reset(),Xe.pause(),d&&d(O)},Gr=function(){var W=O.deltaX=Gm(Vn),ce=O.deltaY=Gm(Pn),L=Math.abs(W)>=i,K=Math.abs(ce)>=i;$&&(L||K)&&$(O,W,ce,Vn,Pn),L&&(C&&O.deltaX>0&&C(O),E&&O.deltaX<0&&E(O),z&&z(O),M&&O.deltaX<0!=un<0&&M(O),un=O.deltaX,Vn[0]=Vn[1]=Vn[2]=0),K&&(T&&O.deltaY>0&&T(O),S&&O.deltaY<0&&S(O),j&&j(O),V&&O.deltaY<0!=Cr<0&&V(O),Cr=O.deltaY,Pn[0]=Pn[1]=Pn[2]=0),(ue||Ge)&&(G&&G(O),Ge&&(m(O),Ge=!1),ue=!1),Xt&&!(Xt=!1)&&Ce&&Ce(O),Be&&(B(O),Be=!1),Tn=0},Ro=function(W,ce,L){Vn[L]+=W,Pn[L]+=ce,O._vx.update(W),O._vy.update(ce),u?Tn||(Tn=requestAnimationFrame(Gr)):Gr()},No=function(W,ce){Ae&&!an&&(O.axis=an=Math.abs(W)>Math.abs(ce)?"x":"y",Xt=!0),an!=="y"&&(Vn[2]+=W,O._vx.update(W,!0)),an!=="x"&&(Pn[2]+=ce,O._vy.update(ce,!0)),u?Tn||(Tn=requestAnimationFrame(Gr)):Gr()},Qr=function(W){if(!Ke(W,1)){W=rl(W,c);var ce=W.clientX,L=W.clientY,K=ce-O.x,U=L-O.y,Y=O.isDragging;O.x=ce,O.y=L,(Y||Math.abs(O.startX-ce)>=o||Math.abs(O.startY-L)>=o)&&(m&&(Ge=!0),Y||(O.isDragging=!0),No(K,U),Y||w&&w(O))}},$i=O.onPress=function(Q){Ke(Q,1)||Q&&Q.button||(O.axis=an=null,Xe.pause(),O.isPressed=!0,Q=rl(Q),un=Cr=0,O.startX=O.x=Q.clientX,O.startY=O.y=Q.clientY,O._vx.reset(),O._vy.reset(),Lt(R?l:Ue,qn[1],Qr,Hr,!0),O.deltaX=O.deltaY=0,v&&v(O))},ee=O.onRelease=function(Q){if(!Ke(Q,1)){It(R?l:Ue,qn[1],Qr,!0);var W=!isNaN(O.y-O.startY),ce=O.isDragging,L=ce&&(Math.abs(O.x-O.startX)>3||Math.abs(O.y-O.startY)>3),K=rl(Q);!L&&W&&(O._vx.reset(),O._vy.reset(),c&&fe&&_t.delayedCall(.08,function(){if(Rl()-Er>300&&!Q.defaultPrevented){if(Q.target.click)Q.target.click();else if(Ue.createEvent){var U=Ue.createEvent("MouseEvents");U.initMouseEvent("click",!0,!0,xn,1,K.screenX,K.screenY,K.clientX,K.clientY,!1,!1,!1,!1,0,null),Q.target.dispatchEvent(U)}}})),O.isDragging=O.isGesturing=O.isPressed=!1,d&&ce&&!R&&Xe.restart(!0),x&&ce&&x(O),_&&_(O,L)}},Ai=function(W){return W.touches&&W.touches.length>1&&(O.isGesturing=!0)&&I(W,O.isDragging)},Hn=function(){return(O.isGesturing=!1)||k(O)},Yn=function(W){if(!Ke(W)){var ce=Qe(),L=Yr();Ro((ce-Di)*xe,(L-zo)*xe,1),Di=ce,zo=L,d&&Xe.restart(!0)}},Xn=function(W){if(!Ke(W)){W=rl(W,c),B&&(Be=!0);var ce=(W.deltaMode===1?a:W.deltaMode===2?xn.innerHeight:1)*y;Ro(W.deltaX*ce,W.deltaY*ce,0),d&&!R&&Xe.restart(!0)}},Bi=function(W){if(!Ke(W)){var ce=W.clientX,L=W.clientY,K=ce-O.x,U=L-O.y;O.x=ce,O.y=L,ue=!0,d&&Xe.restart(!0),(K||U)&&No(K,U)}},bo=function(W){O.event=W,X(O)},Tr=function(W){O.event=W,Z(O)},Vs=function(W){return Ke(W)||rl(W,c)&&le(O)};Xe=O._dc=_t.delayedCall(p||.25,Ta).pause(),O.deltaX=O.deltaY=0,O._vx=vp(0,50,!0),O._vy=vp(0,50,!0),O.scrollX=Qe,O.scrollY=Yr,O.isDragging=O.isGesturing=O.isPressed=!1,Iy(this),O.enable=function(Q){return O.isEnabled||(Lt(Xr?Ue:l,"scroll",xp),s.indexOf("scroll")>=0&&Lt(Xr?Ue:l,"scroll",Yn,Hr,pe),s.indexOf("wheel")>=0&&Lt(l,"wheel",Xn,Hr,pe),(s.indexOf("touch")>=0&&by||s.indexOf("pointer")>=0)&&(Lt(l,qn[0],$i,Hr,pe),Lt(Ue,qn[2],ee),Lt(Ue,qn[3],ee),fe&&Lt(l,"click",Ws,!0,!0),le&&Lt(l,"click",Vs),I&&Lt(Ue,"gesturestart",Ai),k&&Lt(Ue,"gestureend",Hn),X&&Lt(l,Gi+"enter",bo),Z&&Lt(l,Gi+"leave",Tr),G&&Lt(l,Gi+"move",Bi)),O.isEnabled=!0,Q&&Q.type&&$i(Q),H&&H(O)),O},O.disable=function(){O.isEnabled&&(rs.filter(function(Q){return Q!==O&&Nl(Q.target)}).length||It(Xr?Ue:l,"scroll",xp),O.isPressed&&(O._vx.reset(),O._vy.reset(),It(R?l:Ue,qn[1],Qr,!0)),It(Xr?Ue:l,"scroll",Yn,pe),It(l,"wheel",Xn,pe),It(l,qn[0],$i,pe),It(Ue,qn[2],ee),It(Ue,qn[3],ee),It(l,"click",Ws,!0),It(l,"click",Vs),It(Ue,"gesturestart",Ai),It(Ue,"gestureend",Hn),It(l,Gi+"enter",bo),It(l,Gi+"leave",Tr),It(l,Gi+"move",Bi),O.isEnabled=O.isPressed=O.isDragging=!1,nt&&nt(O))},O.kill=O.revert=function(){O.disable();var Q=rs.indexOf(O);Q>=0&&rs.splice(Q,1),Ir===O&&(Ir=0)},rs.push(O),R&&Nl(l)&&(Ir=O),O.enable(g)},FE(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t}();Ye.version="3.12.5";Ye.create=function(t){return new Ye(t)};Ye.register=$y;Ye.getAll=function(){return rs.slice()};Ye.getById=function(t){return rs.filter(function(e){return e.vars.id===t})[0]};Ly()&&_t.registerPlugin(Ye);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var D,Ao,oe,ze,tr,Se,Ay,wc,ma,bl,dl,Za,jt,tf,yp,$t,Qm,Km,Bo,By,Vf,Uy,Ft,_p,Wy,Vy,ni,wp,Hh,hs,Yh,Sc,Sp,Hf,Ja=1,Ot=Date.now,Yf=Ot(),$n=0,pl=0,qm=function(e,n,r){var i=hn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return r["_"+n+"Clamp"]=i,i?e.substr(6,e.length-7):e},Zm=function(e,n){return n&&(!hn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},$E=function t(){return pl&&requestAnimationFrame(t)},Jm=function(){return tf=1},eg=function(){return tf=0},pr=function(e){return e},hl=function(e){return Math.round(e*1e5)/1e5||0},Hy=function(){return typeof window<"u"},Yy=function(){return D||Hy()&&(D=window.gsap)&&D.registerPlugin&&D},So=function(e){return!!~Ay.indexOf(e)},Xy=function(e){return(e==="Height"?Yh:oe["inner"+e])||tr["client"+e]||Se["client"+e]},Gy=function(e){return Ti(e,"getBoundingClientRect")||(So(e)?function(){return Mu.width=oe.innerWidth,Mu.height=Yh,Mu}:function(){return Nr(e)})},AE=function(e,n,r){var i=r.d,o=r.d2,s=r.a;return(s=Ti(e,"getBoundingClientRect"))?function(){return s()[i]}:function(){return(n?Xy(o):e["client"+o])||0}},BE=function(e,n){return!n||~Sr.indexOf(e)?Gy(e):function(){return Mu}},vr=function(e,n){var r=n.s,i=n.d2,o=n.d,s=n.a;return Math.max(0,(r="scroll"+i)&&(s=Ti(e,r))?s()-Gy(e)()[o]:So(e)?(tr[r]||Se[r])-Xy(i):e[r]-e["offset"+i])},eu=function(e,n){for(var r=0;r<Bo.length;r+=3)(!n||~n.indexOf(Bo[r+1]))&&e(Bo[r],Bo[r+1],Bo[r+2])},hn=function(e){return typeof e=="string"},Wt=function(e){return typeof e=="function"},ml=function(e){return typeof e=="number"},Qi=function(e){return typeof e=="object"},il=function(e,n,r){return e&&e.progress(n?0:1)&&r&&e.pause()},Xf=function(e,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return n(e)}):n(e);r&&r.totalTime&&(e.callbackAnimation=r)}},Fo=Math.abs,Qy="left",Ky="top",Xh="right",Gh="bottom",co="width",fo="height",Ml="Right",Il="Left",Ll="Top",Fl="Bottom",qe="padding",bn="margin",Ls="Width",Qh="Height",it="px",Mn=function(e){return oe.getComputedStyle(e)},UE=function(e){var n=Mn(e).position;e.style.position=n==="absolute"||n==="fixed"?n:"relative"},tg=function(e,n){for(var r in n)r in e||(e[r]=n[r]);return e},Nr=function(e,n){var r=n&&Mn(e)[yp]!=="matrix(1, 0, 0, 1, 0, 0)"&&D.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return r&&r.progress(0).kill(),i},kc=function(e,n){var r=n.d2;return e["offset"+r]||e["client"+r]||0},qy=function(e){var n=[],r=e.labels,i=e.duration(),o;for(o in r)n.push(r[o]/i);return n},WE=function(e){return function(n){return D.utils.snap(qy(e),n)}},Kh=function(e){var n=D.utils.snap(e),r=Array.isArray(e)&&e.slice(0).sort(function(i,o){return i-o});return r?function(i,o,s){s===void 0&&(s=.001);var l;if(!o)return n(i);if(o>0){for(i-=s,l=0;l<r.length;l++)if(r[l]>=i)return r[l];return r[l-1]}else for(l=r.length,i+=s;l--;)if(r[l]<=i)return r[l];return r[0]}:function(i,o,s){s===void 0&&(s=.001);var l=n(i);return!o||Math.abs(l-i)<s||l-i<0==o<0?l:n(o<0?i-e:i+e)}},VE=function(e){return function(n,r){return Kh(qy(e))(n,r.direction)}},tu=function(e,n,r,i){return r.split(",").forEach(function(o){return e(n,o,i)})},ft=function(e,n,r,i,o){return e.addEventListener(n,r,{passive:!i,capture:!!o})},ct=function(e,n,r,i){return e.removeEventListener(n,r,!!i)},nu=function(e,n,r){r=r&&r.wheelHandler,r&&(e(n,"wheel",r),e(n,"touchmove",r))},ng={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ru={toggleActions:"play",anticipatePin:0},Cc={top:0,left:0,center:.5,bottom:1,right:1},zu=function(e,n){if(hn(e)){var r=e.indexOf("="),i=~r?+(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(i*=n/100),e=e.substr(0,r-1)),e=i+(e in Cc?Cc[e]*n:~e.indexOf("%")?parseFloat(e)*n/100:parseFloat(e)||0)}return e},iu=function(e,n,r,i,o,s,l,a){var u=o.startColor,c=o.endColor,d=o.fontSize,p=o.indent,h=o.fontWeight,y=ze.createElement("div"),g=So(r)||Ti(r,"pinType")==="fixed",w=e.indexOf("scroller")!==-1,x=g?Se:r,m=e.indexOf("start")!==-1,v=m?u:c,_="border-color:"+v+";font-size:"+d+";color:"+v+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return _+="position:"+((w||a)&&g?"fixed;":"absolute;"),(w||a||!g)&&(_+=(i===st?Xh:Gh)+":"+(s+parseFloat(p))+"px;"),l&&(_+="box-sizing:border-box;text-align:left;width:"+l.offsetWidth+"px;"),y._isStart=m,y.setAttribute("class","gsap-marker-"+e+(n?" marker-"+n:"")),y.style.cssText=_,y.innerText=n||n===0?e+"-"+n:e,x.children[0]?x.insertBefore(y,x.children[0]):x.appendChild(y),y._offset=y["offset"+i.op.d2],Ru(y,0,i,m),y},Ru=function(e,n,r,i){var o={display:"block"},s=r[i?"os2":"p2"],l=r[i?"p2":"os2"];e._isFlipped=i,o[r.a+"Percent"]=i?-100:0,o[r.a]=i?"1px":0,o["border"+s+Ls]=1,o["border"+l+Ls]=0,o[r.p]=n+"px",D.set(e,o)},J=[],kp={},ga,rg=function(){return Ot()-$n>34&&(ga||(ga=requestAnimationFrame(Fr)))},Do=function(){(!Ft||!Ft.isPressed||Ft.startX>Se.clientWidth)&&(te.cache++,Ft?ga||(ga=requestAnimationFrame(Fr)):Fr(),$n||Co("scrollStart"),$n=Ot())},Gf=function(){Vy=oe.innerWidth,Wy=oe.innerHeight},gl=function(){te.cache++,!jt&&!Uy&&!ze.fullscreenElement&&!ze.webkitFullscreenElement&&(!_p||Vy!==oe.innerWidth||Math.abs(oe.innerHeight-Wy)>oe.innerHeight*.25)&&wc.restart(!0)},ko={},HE=[],Zy=function t(){return ct(re,"scrollEnd",t)||to(!0)},Co=function(e){return ko[e]&&ko[e].map(function(n){return n()})||HE},dn=[],Jy=function(e){for(var n=0;n<dn.length;n+=5)(!e||dn[n+4]&&dn[n+4].query===e)&&(dn[n].style.cssText=dn[n+1],dn[n].getBBox&&dn[n].setAttribute("transform",dn[n+2]||""),dn[n+3].uncache=1)},qh=function(e,n){var r;for($t=0;$t<J.length;$t++)r=J[$t],r&&(!n||r._ctx===n)&&(e?r.kill(1):r.revert(!0,!0));Sc=!0,n&&Jy(n),n||Co("revert")},e_=function(e,n){te.cache++,(n||!At)&&te.forEach(function(r){return Wt(r)&&r.cacheID++&&(r.rec=0)}),hn(e)&&(oe.history.scrollRestoration=Hh=e)},At,po=0,ig,YE=function(){if(ig!==po){var e=ig=po;requestAnimationFrame(function(){return e===po&&to(!0)})}},t_=function(){Se.appendChild(hs),Yh=!Ft&&hs.offsetHeight||oe.innerHeight,Se.removeChild(hs)},og=function(e){return ma(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n){return n.style.display=e?"none":"block"})},to=function(e,n){if($n&&!e&&!Sc){ft(re,"scrollEnd",Zy);return}t_(),At=re.isRefreshing=!0,te.forEach(function(i){return Wt(i)&&++i.cacheID&&(i.rec=i())});var r=Co("refreshInit");By&&re.sort(),n||qh(),te.forEach(function(i){Wt(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),J.slice(0).forEach(function(i){return i.refresh()}),Sc=!1,J.forEach(function(i){if(i._subPinOffset&&i.pin){var o=i.vars.horizontal?"offsetWidth":"offsetHeight",s=i.pin[o];i.revert(!0,1),i.adjustPinSpacing(i.pin[o]-s),i.refresh()}}),Sp=1,og(!0),J.forEach(function(i){var o=vr(i.scroller,i._dir),s=i.vars.end==="max"||i._endClamp&&i.end>o,l=i._startClamp&&i.start>=o;(s||l)&&i.setPositions(l?o-1:i.start,s?Math.max(l?o:i.start+1,o):i.end,!0)}),og(!1),Sp=0,r.forEach(function(i){return i&&i.render&&i.render(-1)}),te.forEach(function(i){Wt(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),e_(Hh,1),wc.pause(),po++,At=2,Fr(2),J.forEach(function(i){return Wt(i.vars.onRefresh)&&i.vars.onRefresh(i)}),At=re.isRefreshing=!1,Co("refresh")},Cp=0,Nu=1,Dl,Fr=function(e){if(e===2||!At&&!Sc){re.isUpdating=!0,Dl&&Dl.update(0);var n=J.length,r=Ot(),i=r-Yf>=50,o=n&&J[0].scroll();if(Nu=Cp>o?-1:1,At||(Cp=o),i&&($n&&!tf&&r-$n>200&&($n=0,Co("scrollEnd")),dl=Yf,Yf=r),Nu<0){for($t=n;$t-- >0;)J[$t]&&J[$t].update(0,i);Nu=1}else for($t=0;$t<n;$t++)J[$t]&&J[$t].update(0,i);re.isUpdating=!1}ga=0},Ep=[Qy,Ky,Gh,Xh,bn+Fl,bn+Ml,bn+Ll,bn+Il,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],bu=Ep.concat([co,fo,"boxSizing","max"+Ls,"max"+Qh,"position",bn,qe,qe+Ll,qe+Ml,qe+Fl,qe+Il]),XE=function(e,n,r){ms(r);var i=e._gsap;if(i.spacerIsNative)ms(i.spacerState);else if(e._gsap.swappedIn){var o=n.parentNode;o&&(o.insertBefore(e,n),o.removeChild(n))}e._gsap.swappedIn=!1},Qf=function(e,n,r,i){if(!e._gsap.swappedIn){for(var o=Ep.length,s=n.style,l=e.style,a;o--;)a=Ep[o],s[a]=r[a];s.position=r.position==="absolute"?"absolute":"relative",r.display==="inline"&&(s.display="inline-block"),l[Gh]=l[Xh]="auto",s.flexBasis=r.flexBasis||"auto",s.overflow="visible",s.boxSizing="border-box",s[co]=kc(e,Ut)+it,s[fo]=kc(e,st)+it,s[qe]=l[bn]=l[Ky]=l[Qy]="0",ms(i),l[co]=l["max"+Ls]=r[co],l[fo]=l["max"+Qh]=r[fo],l[qe]=r[qe],e.parentNode!==n&&(e.parentNode.insertBefore(n,e),n.appendChild(e)),e._gsap.swappedIn=!0}},GE=/([A-Z])/g,ms=function(e){if(e){var n=e.t.style,r=e.length,i=0,o,s;for((e.t._gsap||D.core.getCache(e.t)).uncache=1;i<r;i+=2)s=e[i+1],o=e[i],s?n[o]=s:n[o]&&n.removeProperty(o.replace(GE,"-$1").toLowerCase())}},ou=function(e){for(var n=bu.length,r=e.style,i=[],o=0;o<n;o++)i.push(bu[o],r[bu[o]]);return i.t=e,i},QE=function(e,n,r){for(var i=[],o=e.length,s=r?8:0,l;s<o;s+=2)l=e[s],i.push(l,l in n?n[l]:e[s+1]);return i.t=e.t,i},Mu={left:0,top:0},sg=function(e,n,r,i,o,s,l,a,u,c,d,p,h,y){Wt(e)&&(e=e(a)),hn(e)&&e.substr(0,3)==="max"&&(e=p+(e.charAt(4)==="="?zu("0"+e.substr(3),r):0));var g=h?h.time():0,w,x,m;if(h&&h.seek(0),isNaN(e)||(e=+e),ml(e))h&&(e=D.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,p,e)),l&&Ru(l,r,i,!0);else{Wt(n)&&(n=n(a));var v=(e||"0").split(" "),_,C,E,S;m=Gt(n,a)||Se,_=Nr(m)||{},(!_||!_.left&&!_.top)&&Mn(m).display==="none"&&(S=m.style.display,m.style.display="block",_=Nr(m),S?m.style.display=S:m.style.removeProperty("display")),C=zu(v[0],_[i.d]),E=zu(v[1]||"0",r),e=_[i.p]-u[i.p]-c+C+o-E,l&&Ru(l,E,i,r-E<20||l._isStart&&E>20),r-=r-E}if(y&&(a[y]=e||-.001,e<0&&(e=0)),s){var T=e+r,z=s._isStart;w="scroll"+i.d2,Ru(s,T,i,z&&T>20||!z&&(d?Math.max(Se[w],tr[w]):s.parentNode[w])<=T+1),d&&(u=Nr(l),d&&(s.style[i.op.p]=u[i.op.p]-i.op.m-s._offset+it))}return h&&m&&(w=Nr(m),h.seek(p),x=Nr(m),h._caScrollDist=w[i.p]-x[i.p],e=e/h._caScrollDist*p),h&&h.seek(g),h?e:Math.round(e)},KE=/(webkit|moz|length|cssText|inset)/i,lg=function(e,n,r,i){if(e.parentNode!==n){var o=e.style,s,l;if(n===Se){e._stOrig=o.cssText,l=Mn(e);for(s in l)!+s&&!KE.test(s)&&l[s]&&typeof o[s]=="string"&&s!=="0"&&(o[s]=l[s]);o.top=r,o.left=i}else o.cssText=e._stOrig;D.core.getCache(e).uncache=1,n.appendChild(e)}},n_=function(e,n,r){var i=n,o=i;return function(s){var l=Math.round(e());return l!==i&&l!==o&&Math.abs(l-i)>3&&Math.abs(l-o)>3&&(s=l,r&&r()),o=i,i=s,s}},su=function(e,n,r){var i={};i[n.p]="+="+r,D.set(e,i)},ag=function(e,n){var r=Ni(e,n),i="_scroll"+n.p2,o=function s(l,a,u,c,d){var p=s.tween,h=a.onComplete,y={};u=u||r();var g=n_(r,u,function(){p.kill(),s.tween=0});return d=c&&d||0,c=c||l-u,p&&p.kill(),a[i]=l,a.inherit=!1,a.modifiers=y,y[i]=function(){return g(u+c*p.ratio+d*p.ratio*p.ratio)},a.onUpdate=function(){te.cache++,s.tween&&Fr()},a.onComplete=function(){s.tween=0,h&&h.call(p)},p=s.tween=D.to(e,a),p};return e[i]=r,r.wheelHandler=function(){return o.tween&&o.tween.kill()&&(o.tween=0)},ft(e,"wheel",r.wheelHandler),re.isTouch&&ft(e,"touchmove",r.wheelHandler),o},re=function(){function t(n,r){Ao||t.register(D)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),wp(this),this.init(n,r)}var e=t.prototype;return e.init=function(r,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!pl){this.update=this.refresh=this.kill=pr;return}r=tg(hn(r)||ml(r)||r.nodeType?{trigger:r}:r,ru);var o=r,s=o.onUpdate,l=o.toggleClass,a=o.id,u=o.onToggle,c=o.onRefresh,d=o.scrub,p=o.trigger,h=o.pin,y=o.pinSpacing,g=o.invalidateOnRefresh,w=o.anticipatePin,x=o.onScrubComplete,m=o.onSnapComplete,v=o.once,_=o.snap,C=o.pinReparent,E=o.pinSpacer,S=o.containerAnimation,T=o.fastScrollEnd,z=o.preventOverlaps,j=r.horizontal||r.containerAnimation&&r.horizontal!==!1?Ut:st,$=!d&&d!==0,M=Gt(r.scroller||oe),V=D.core.getCache(M),X=So(M),Z=("pinType"in r?r.pinType:Ti(M,"pinType")||X&&"fixed")==="fixed",G=[r.onEnter,r.onLeave,r.onEnterBack,r.onLeaveBack],A=$&&r.toggleActions.split(" "),R="markers"in r?r.markers:ru.markers,I=X?0:parseFloat(Mn(M)["border"+j.p2+Ls])||0,k=this,B=r.onRefreshInit&&function(){return r.onRefreshInit(k)},H=AE(M,X,j),nt=BE(M,X),le=0,xe=0,pe=0,fe=Ni(M,j),Ae,Ce,Tn,Xe,Ge,ue,Be,Xt,an,O,un,Cr,Hr,Qe,Yr,Di,zo,at,Xr,Ue,Vn,Pn,Er,Ws,Ke,Ta,Gr,Ro,No,Qr,$i,ee,Ai,Hn,Yn,Xn,Bi,bo,Tr;if(k._startClamp=k._endClamp=!1,k._dir=j,w*=45,k.scroller=M,k.scroll=S?S.time.bind(S):fe,Xe=fe(),k.vars=r,i=i||r.animation,"refreshPriority"in r&&(By=1,r.refreshPriority===-9999&&(Dl=k)),V.tweenScroll=V.tweenScroll||{top:ag(M,st),left:ag(M,Ut)},k.tweenTo=Ae=V.tweenScroll[j.p],k.scrubDuration=function(L){Ai=ml(L)&&L,Ai?ee?ee.duration(L):ee=D.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ai,paused:!0,onComplete:function(){return x&&x(k)}}):(ee&&ee.progress(1).kill(),ee=0)},i&&(i.vars.lazy=!1,i._initted&&!k.isReverted||i.vars.immediateRender!==!1&&r.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),k.animation=i.pause(),i.scrollTrigger=k,k.scrubDuration(d),Qr=0,a||(a=i.vars.id)),_&&((!Qi(_)||_.push)&&(_={snapTo:_}),"scrollBehavior"in Se.style&&D.set(X?[Se,tr]:M,{scrollBehavior:"auto"}),te.forEach(function(L){return Wt(L)&&L.target===(X?ze.scrollingElement||tr:M)&&(L.smooth=!1)}),Tn=Wt(_.snapTo)?_.snapTo:_.snapTo==="labels"?WE(i):_.snapTo==="labelsDirectional"?VE(i):_.directional!==!1?function(L,K){return Kh(_.snapTo)(L,Ot()-xe<500?0:K.direction)}:D.utils.snap(_.snapTo),Hn=_.duration||{min:.1,max:2},Hn=Qi(Hn)?bl(Hn.min,Hn.max):bl(Hn,Hn),Yn=D.delayedCall(_.delay||Ai/2||.1,function(){var L=fe(),K=Ot()-xe<500,U=Ae.tween;if((K||Math.abs(k.getVelocity())<10)&&!U&&!tf&&le!==L){var Y=(L-ue)/Qe,ut=i&&!$?i.totalProgress():Y,ie=K?0:(ut-$i)/(Ot()-dl)*1e3||0,We=D.utils.clamp(-Y,1-Y,Fo(ie/2)*ie/.185),kt=Y+(_.inertia===!1?0:We),Le,Ee,me=_,Gn=me.onStart,je=me.onInterrupt,cn=me.onComplete;if(Le=Tn(kt,k),ml(Le)||(Le=kt),Ee=Math.round(ue+Le*Qe),L<=Be&&L>=ue&&Ee!==L){if(U&&!U._initted&&U.data<=Fo(Ee-L))return;_.inertia===!1&&(We=Le-Y),Ae(Ee,{duration:Hn(Fo(Math.max(Fo(kt-ut),Fo(Le-ut))*.185/ie/.05||0)),ease:_.ease||"power3",data:Fo(Ee-L),onInterrupt:function(){return Yn.restart(!0)&&je&&je(k)},onComplete:function(){k.update(),le=fe(),i&&(ee?ee.resetTo("totalProgress",Le,i._tTime/i._tDur):i.progress(Le)),Qr=$i=i&&!$?i.totalProgress():k.progress,m&&m(k),cn&&cn(k)}},L,We*Qe,Ee-L-We*Qe),Gn&&Gn(k,Ae.tween)}}else k.isActive&&le!==L&&Yn.restart(!0)}).pause()),a&&(kp[a]=k),p=k.trigger=Gt(p||h!==!0&&h),Tr=p&&p._gsap&&p._gsap.stRevert,Tr&&(Tr=Tr(k)),h=h===!0?p:Gt(h),hn(l)&&(l={targets:p,className:l}),h&&(y===!1||y===bn||(y=!y&&h.parentNode&&h.parentNode.style&&Mn(h.parentNode).display==="flex"?!1:qe),k.pin=h,Ce=D.core.getCache(h),Ce.spacer?Yr=Ce.pinState:(E&&(E=Gt(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Ce.spacerIsNative=!!E,E&&(Ce.spacerState=ou(E))),Ce.spacer=at=E||ze.createElement("div"),at.classList.add("pin-spacer"),a&&at.classList.add("pin-spacer-"+a),Ce.pinState=Yr=ou(h)),r.force3D!==!1&&D.set(h,{force3D:!0}),k.spacer=at=Ce.spacer,No=Mn(h),Ws=No[y+j.os2],Ue=D.getProperty(h),Vn=D.quickSetter(h,j.a,it),Qf(h,at,No),zo=ou(h)),R){Cr=Qi(R)?tg(R,ng):ng,O=iu("scroller-start",a,M,j,Cr,0),un=iu("scroller-end",a,M,j,Cr,0,O),Xr=O["offset"+j.op.d2];var Vs=Gt(Ti(M,"content")||M);Xt=this.markerStart=iu("start",a,Vs,j,Cr,Xr,0,S),an=this.markerEnd=iu("end",a,Vs,j,Cr,Xr,0,S),S&&(bo=D.quickSetter([Xt,an],j.a,it)),!Z&&!(Sr.length&&Ti(M,"fixedMarkers")===!0)&&(UE(X?Se:M),D.set([O,un],{force3D:!0}),Ta=D.quickSetter(O,j.a,it),Ro=D.quickSetter(un,j.a,it))}if(S){var Q=S.vars.onUpdate,W=S.vars.onUpdateParams;S.eventCallback("onUpdate",function(){k.update(0,0,1),Q&&Q.apply(S,W||[])})}if(k.previous=function(){return J[J.indexOf(k)-1]},k.next=function(){return J[J.indexOf(k)+1]},k.revert=function(L,K){if(!K)return k.kill(!0);var U=L!==!1||!k.enabled,Y=jt;U!==k.isReverted&&(U&&(Xn=Math.max(fe(),k.scroll.rec||0),pe=k.progress,Bi=i&&i.progress()),Xt&&[Xt,an,O,un].forEach(function(ut){return ut.style.display=U?"none":"block"}),U&&(jt=k,k.update(U)),h&&(!C||!k.isActive)&&(U?XE(h,at,Yr):Qf(h,at,Mn(h),Ke)),U||k.update(U),jt=Y,k.isReverted=U)},k.refresh=function(L,K,U,Y){if(!((jt||!k.enabled)&&!K)){if(h&&L&&$n){ft(t,"scrollEnd",Zy);return}!At&&B&&B(k),jt=k,Ae.tween&&!U&&(Ae.tween.kill(),Ae.tween=0),ee&&ee.pause(),g&&i&&i.revert({kill:!1}).invalidate(),k.isReverted||k.revert(!0,!0),k._subPinOffset=!1;var ut=H(),ie=nt(),We=S?S.duration():vr(M,j),kt=Qe<=.01,Le=0,Ee=Y||0,me=Qi(U)?U.end:r.end,Gn=r.endTrigger||p,je=Qi(U)?U.start:r.start||(r.start===0||!p?0:h?"0 0":"0 100%"),cn=k.pinnedContainer=r.pinnedContainer&&Gt(r.pinnedContainer,k),lr=p&&Math.max(0,J.indexOf(k))||0,xt=lr,vt,Ct,Ui,Pa,Et,rt,ar,nf,Jh,Hs,ur,Ys,ja;for(R&&Qi(U)&&(Ys=D.getProperty(O,j.p),ja=D.getProperty(un,j.p));xt--;)rt=J[xt],rt.end||rt.refresh(0,1)||(jt=k),ar=rt.pin,ar&&(ar===p||ar===h||ar===cn)&&!rt.isReverted&&(Hs||(Hs=[]),Hs.unshift(rt),rt.revert(!0,!0)),rt!==J[xt]&&(lr--,xt--);for(Wt(je)&&(je=je(k)),je=qm(je,"start",k),ue=sg(je,p,ut,j,fe(),Xt,O,k,ie,I,Z,We,S,k._startClamp&&"_startClamp")||(h?-.001:0),Wt(me)&&(me=me(k)),hn(me)&&!me.indexOf("+=")&&(~me.indexOf(" ")?me=(hn(je)?je.split(" ")[0]:"")+me:(Le=zu(me.substr(2),ut),me=hn(je)?je:(S?D.utils.mapRange(0,S.duration(),S.scrollTrigger.start,S.scrollTrigger.end,ue):ue)+Le,Gn=p)),me=qm(me,"end",k),Be=Math.max(ue,sg(me||(Gn?"100% 0":We),Gn,ut,j,fe()+Le,an,un,k,ie,I,Z,We,S,k._endClamp&&"_endClamp"))||-.001,Le=0,xt=lr;xt--;)rt=J[xt],ar=rt.pin,ar&&rt.start-rt._pinPush<=ue&&!S&&rt.end>0&&(vt=rt.end-(k._startClamp?Math.max(0,rt.start):rt.start),(ar===p&&rt.start-rt._pinPush<ue||ar===cn)&&isNaN(je)&&(Le+=vt*(1-rt.progress)),ar===h&&(Ee+=vt));if(ue+=Le,Be+=Le,k._startClamp&&(k._startClamp+=Le),k._endClamp&&!At&&(k._endClamp=Be||-.001,Be=Math.min(Be,vr(M,j))),Qe=Be-ue||(ue-=.01)&&.001,kt&&(pe=D.utils.clamp(0,1,D.utils.normalize(ue,Be,Xn))),k._pinPush=Ee,Xt&&Le&&(vt={},vt[j.a]="+="+Le,cn&&(vt[j.p]="-="+fe()),D.set([Xt,an],vt)),h&&!(Sp&&k.end>=vr(M,j)))vt=Mn(h),Pa=j===st,Ui=fe(),Pn=parseFloat(Ue(j.a))+Ee,!We&&Be>1&&(ur=(X?ze.scrollingElement||tr:M).style,ur={style:ur,value:ur["overflow"+j.a.toUpperCase()]},X&&Mn(Se)["overflow"+j.a.toUpperCase()]!=="scroll"&&(ur.style["overflow"+j.a.toUpperCase()]="scroll")),Qf(h,at,vt),zo=ou(h),Ct=Nr(h,!0),nf=Z&&Ni(M,Pa?Ut:st)(),y?(Ke=[y+j.os2,Qe+Ee+it],Ke.t=at,xt=y===qe?kc(h,j)+Qe+Ee:0,xt&&(Ke.push(j.d,xt+it),at.style.flexBasis!=="auto"&&(at.style.flexBasis=xt+it)),ms(Ke),cn&&J.forEach(function(Xs){Xs.pin===cn&&Xs.vars.pinSpacing!==!1&&(Xs._subPinOffset=!0)}),Z&&fe(Xn)):(xt=kc(h,j),xt&&at.style.flexBasis!=="auto"&&(at.style.flexBasis=xt+it)),Z&&(Et={top:Ct.top+(Pa?Ui-ue:nf)+it,left:Ct.left+(Pa?nf:Ui-ue)+it,boxSizing:"border-box",position:"fixed"},Et[co]=Et["max"+Ls]=Math.ceil(Ct.width)+it,Et[fo]=Et["max"+Qh]=Math.ceil(Ct.height)+it,Et[bn]=Et[bn+Ll]=Et[bn+Ml]=Et[bn+Fl]=Et[bn+Il]="0",Et[qe]=vt[qe],Et[qe+Ll]=vt[qe+Ll],Et[qe+Ml]=vt[qe+Ml],Et[qe+Fl]=vt[qe+Fl],Et[qe+Il]=vt[qe+Il],Di=QE(Yr,Et,C),At&&fe(0)),i?(Jh=i._initted,Vf(1),i.render(i.duration(),!0,!0),Er=Ue(j.a)-Pn+Qe+Ee,Gr=Math.abs(Qe-Er)>1,Z&&Gr&&Di.splice(Di.length-2,2),i.render(0,!0,!0),Jh||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Vf(0)):Er=Qe,ur&&(ur.value?ur.style["overflow"+j.a.toUpperCase()]=ur.value:ur.style.removeProperty("overflow-"+j.a));else if(p&&fe()&&!S)for(Ct=p.parentNode;Ct&&Ct!==Se;)Ct._pinOffset&&(ue-=Ct._pinOffset,Be-=Ct._pinOffset),Ct=Ct.parentNode;Hs&&Hs.forEach(function(Xs){return Xs.revert(!1,!0)}),k.start=ue,k.end=Be,Xe=Ge=At?Xn:fe(),!S&&!At&&(Xe<Xn&&fe(Xn),k.scroll.rec=0),k.revert(!1,!0),xe=Ot(),Yn&&(le=-1,Yn.restart(!0)),jt=0,i&&$&&(i._initted||Bi)&&i.progress()!==Bi&&i.progress(Bi||0,!0).render(i.time(),!0,!0),(kt||pe!==k.progress||S||g)&&(i&&!$&&i.totalProgress(S&&ue<-.001&&!pe?D.utils.normalize(ue,Be,0):pe,!0),k.progress=kt||(Xe-ue)/Qe===pe?0:pe),h&&y&&(at._pinOffset=Math.round(k.progress*Er)),ee&&ee.invalidate(),isNaN(Ys)||(Ys-=D.getProperty(O,j.p),ja-=D.getProperty(un,j.p),su(O,j,Ys),su(Xt,j,Ys-(Y||0)),su(un,j,ja),su(an,j,ja-(Y||0))),kt&&!At&&k.update(),c&&!At&&!Hr&&(Hr=!0,c(k),Hr=!1)}},k.getVelocity=function(){return(fe()-Ge)/(Ot()-dl)*1e3||0},k.endAnimation=function(){il(k.callbackAnimation),i&&(ee?ee.progress(1):i.paused()?$||il(i,k.direction<0,1):il(i,i.reversed()))},k.labelToScroll=function(L){return i&&i.labels&&(ue||k.refresh()||ue)+i.labels[L]/i.duration()*Qe||0},k.getTrailing=function(L){var K=J.indexOf(k),U=k.direction>0?J.slice(0,K).reverse():J.slice(K+1);return(hn(L)?U.filter(function(Y){return Y.vars.preventOverlaps===L}):U).filter(function(Y){return k.direction>0?Y.end<=ue:Y.start>=Be})},k.update=function(L,K,U){if(!(S&&!U&&!L)){var Y=At===!0?Xn:k.scroll(),ut=L?0:(Y-ue)/Qe,ie=ut<0?0:ut>1?1:ut||0,We=k.progress,kt,Le,Ee,me,Gn,je,cn,lr;if(K&&(Ge=Xe,Xe=S?fe():Y,_&&($i=Qr,Qr=i&&!$?i.totalProgress():ie)),w&&h&&!jt&&!Ja&&$n&&(!ie&&ue<Y+(Y-Ge)/(Ot()-dl)*w?ie=1e-4:ie===1&&Be>Y+(Y-Ge)/(Ot()-dl)*w&&(ie=.9999)),ie!==We&&k.enabled){if(kt=k.isActive=!!ie&&ie<1,Le=!!We&&We<1,je=kt!==Le,Gn=je||!!ie!=!!We,k.direction=ie>We?1:-1,k.progress=ie,Gn&&!jt&&(Ee=ie&&!We?0:ie===1?1:We===1?2:3,$&&(me=!je&&A[Ee+1]!=="none"&&A[Ee+1]||A[Ee],lr=i&&(me==="complete"||me==="reset"||me in i))),z&&(je||lr)&&(lr||d||!i)&&(Wt(z)?z(k):k.getTrailing(z).forEach(function(Ui){return Ui.endAnimation()})),$||(ee&&!jt&&!Ja?(ee._dp._time-ee._start!==ee._time&&ee.render(ee._dp._time-ee._start),ee.resetTo?ee.resetTo("totalProgress",ie,i._tTime/i._tDur):(ee.vars.totalProgress=ie,ee.invalidate().restart())):i&&i.totalProgress(ie,!!(jt&&(xe||L)))),h){if(L&&y&&(at.style[y+j.os2]=Ws),!Z)Vn(hl(Pn+Er*ie));else if(Gn){if(cn=!L&&ie>We&&Be+1>Y&&Y+1>=vr(M,j),C)if(!L&&(kt||cn)){var xt=Nr(h,!0),vt=Y-ue;lg(h,Se,xt.top+(j===st?vt:0)+it,xt.left+(j===st?0:vt)+it)}else lg(h,at);ms(kt||cn?Di:zo),Gr&&ie<1&&kt||Vn(Pn+(ie===1&&!cn?Er:0))}}_&&!Ae.tween&&!jt&&!Ja&&Yn.restart(!0),l&&(je||v&&ie&&(ie<1||!Hf))&&ma(l.targets).forEach(function(Ui){return Ui.classList[kt||v?"add":"remove"](l.className)}),s&&!$&&!L&&s(k),Gn&&!jt?($&&(lr&&(me==="complete"?i.pause().totalProgress(1):me==="reset"?i.restart(!0).pause():me==="restart"?i.restart(!0):i[me]()),s&&s(k)),(je||!Hf)&&(u&&je&&Xf(k,u),G[Ee]&&Xf(k,G[Ee]),v&&(ie===1?k.kill(!1,1):G[Ee]=0),je||(Ee=ie===1?1:3,G[Ee]&&Xf(k,G[Ee]))),T&&!kt&&Math.abs(k.getVelocity())>(ml(T)?T:2500)&&(il(k.callbackAnimation),ee?ee.progress(1):il(i,me==="reverse"?1:!ie,1))):$&&s&&!jt&&s(k)}if(Ro){var Ct=S?Y/S.duration()*(S._caScrollDist||0):Y;Ta(Ct+(O._isFlipped?1:0)),Ro(Ct)}bo&&bo(-Y/S.duration()*(S._caScrollDist||0))}},k.enable=function(L,K){k.enabled||(k.enabled=!0,ft(M,"resize",gl),X||ft(M,"scroll",Do),B&&ft(t,"refreshInit",B),L!==!1&&(k.progress=pe=0,Xe=Ge=le=fe()),K!==!1&&k.refresh())},k.getTween=function(L){return L&&Ae?Ae.tween:ee},k.setPositions=function(L,K,U,Y){if(S){var ut=S.scrollTrigger,ie=S.duration(),We=ut.end-ut.start;L=ut.start+We*L/ie,K=ut.start+We*K/ie}k.refresh(!1,!1,{start:Zm(L,U&&!!k._startClamp),end:Zm(K,U&&!!k._endClamp)},Y),k.update()},k.adjustPinSpacing=function(L){if(Ke&&L){var K=Ke.indexOf(j.d)+1;Ke[K]=parseFloat(Ke[K])+L+it,Ke[1]=parseFloat(Ke[1])+L+it,ms(Ke)}},k.disable=function(L,K){if(k.enabled&&(L!==!1&&k.revert(!0,!0),k.enabled=k.isActive=!1,K||ee&&ee.pause(),Xn=0,Ce&&(Ce.uncache=1),B&&ct(t,"refreshInit",B),Yn&&(Yn.pause(),Ae.tween&&Ae.tween.kill()&&(Ae.tween=0)),!X)){for(var U=J.length;U--;)if(J[U].scroller===M&&J[U]!==k)return;ct(M,"resize",gl),X||ct(M,"scroll",Do)}},k.kill=function(L,K){k.disable(L,K),ee&&!K&&ee.kill(),a&&delete kp[a];var U=J.indexOf(k);U>=0&&J.splice(U,1),U===$t&&Nu>0&&$t--,U=0,J.forEach(function(Y){return Y.scroller===k.scroller&&(U=1)}),U||At||(k.scroll.rec=0),i&&(i.scrollTrigger=null,L&&i.revert({kill:!1}),K||i.kill()),Xt&&[Xt,an,O,un].forEach(function(Y){return Y.parentNode&&Y.parentNode.removeChild(Y)}),Dl===k&&(Dl=0),h&&(Ce&&(Ce.uncache=1),U=0,J.forEach(function(Y){return Y.pin===h&&U++}),U||(Ce.spacer=0)),r.onKill&&r.onKill(k)},J.push(k),k.enable(!1,!1),Tr&&Tr(k),i&&i.add&&!Qe){var ce=k.update;k.update=function(){k.update=ce,ue||Be||k.refresh()},D.delayedCall(.01,k.update),Qe=.01,ue=Be=0}else k.refresh();h&&YE()},t.register=function(r){return Ao||(D=r||Yy(),Hy()&&window.document&&t.enable(),Ao=pl),Ao},t.defaults=function(r){if(r)for(var i in r)ru[i]=r[i];return ru},t.disable=function(r,i){pl=0,J.forEach(function(s){return s[i?"kill":"disable"](r)}),ct(oe,"wheel",Do),ct(ze,"scroll",Do),clearInterval(Za),ct(ze,"touchcancel",pr),ct(Se,"touchstart",pr),tu(ct,ze,"pointerdown,touchstart,mousedown",Jm),tu(ct,ze,"pointerup,touchend,mouseup",eg),wc.kill(),eu(ct);for(var o=0;o<te.length;o+=3)nu(ct,te[o],te[o+1]),nu(ct,te[o],te[o+2])},t.enable=function(){if(oe=window,ze=document,tr=ze.documentElement,Se=ze.body,D&&(ma=D.utils.toArray,bl=D.utils.clamp,wp=D.core.context||pr,Vf=D.core.suppressOverwrites||pr,Hh=oe.history.scrollRestoration||"auto",Cp=oe.pageYOffset,D.core.globals("ScrollTrigger",t),Se)){pl=1,hs=document.createElement("div"),hs.style.height="100vh",hs.style.position="absolute",t_(),$E(),Ye.register(D),t.isTouch=Ye.isTouch,ni=Ye.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),_p=Ye.isTouch===1,ft(oe,"wheel",Do),Ay=[oe,ze,tr,Se],D.matchMedia?(t.matchMedia=function(a){var u=D.matchMedia(),c;for(c in a)u.add(c,a[c]);return u},D.addEventListener("matchMediaInit",function(){return qh()}),D.addEventListener("matchMediaRevert",function(){return Jy()}),D.addEventListener("matchMedia",function(){to(0,1),Co("matchMedia")}),D.matchMedia("(orientation: portrait)",function(){return Gf(),Gf})):console.warn("Requires GSAP 3.11.0 or later"),Gf(),ft(ze,"scroll",Do);var r=Se.style,i=r.borderTopStyle,o=D.core.Animation.prototype,s,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",s=Nr(Se),st.m=Math.round(s.top+st.sc())||0,Ut.m=Math.round(s.left+Ut.sc())||0,i?r.borderTopStyle=i:r.removeProperty("border-top-style"),Za=setInterval(rg,250),D.delayedCall(.5,function(){return Ja=0}),ft(ze,"touchcancel",pr),ft(Se,"touchstart",pr),tu(ft,ze,"pointerdown,touchstart,mousedown",Jm),tu(ft,ze,"pointerup,touchend,mouseup",eg),yp=D.utils.checkPrefix("transform"),bu.push(yp),Ao=Ot(),wc=D.delayedCall(.2,to).pause(),Bo=[ze,"visibilitychange",function(){var a=oe.innerWidth,u=oe.innerHeight;ze.hidden?(Qm=a,Km=u):(Qm!==a||Km!==u)&&gl()},ze,"DOMContentLoaded",to,oe,"load",to,oe,"resize",gl],eu(ft),J.forEach(function(a){return a.enable(0,1)}),l=0;l<te.length;l+=3)nu(ct,te[l],te[l+1]),nu(ct,te[l],te[l+2])}},t.config=function(r){"limitCallbacks"in r&&(Hf=!!r.limitCallbacks);var i=r.syncInterval;i&&clearInterval(Za)||(Za=i)&&setInterval(rg,i),"ignoreMobileResize"in r&&(_p=t.isTouch===1&&r.ignoreMobileResize),"autoRefreshEvents"in r&&(eu(ct)||eu(ft,r.autoRefreshEvents||"none"),Uy=(r.autoRefreshEvents+"").indexOf("resize")===-1)},t.scrollerProxy=function(r,i){var o=Gt(r),s=te.indexOf(o),l=So(o);~s&&te.splice(s,l?6:2),i&&(l?Sr.unshift(oe,i,Se,i,tr,i):Sr.unshift(o,i))},t.clearMatchMedia=function(r){J.forEach(function(i){return i._ctx&&i._ctx.query===r&&i._ctx.kill(!0,!0)})},t.isInViewport=function(r,i,o){var s=(hn(r)?Gt(r):r).getBoundingClientRect(),l=s[o?co:fo]*i||0;return o?s.right-l>0&&s.left+l<oe.innerWidth:s.bottom-l>0&&s.top+l<oe.innerHeight},t.positionInViewport=function(r,i,o){hn(r)&&(r=Gt(r));var s=r.getBoundingClientRect(),l=s[o?co:fo],a=i==null?l/2:i in Cc?Cc[i]*l:~i.indexOf("%")?parseFloat(i)*l/100:parseFloat(i)||0;return o?(s.left+a)/oe.innerWidth:(s.top+a)/oe.innerHeight},t.killAll=function(r){if(J.slice(0).forEach(function(o){return o.vars.id!=="ScrollSmoother"&&o.kill()}),r!==!0){var i=ko.killAll||[];ko={},i.forEach(function(o){return o()})}},t}();re.version="3.12.5";re.saveStyles=function(t){return t?ma(t).forEach(function(e){if(e&&e.style){var n=dn.indexOf(e);n>=0&&dn.splice(n,5),dn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),D.core.getCache(e),wp())}}):dn};re.revert=function(t,e){return qh(!t,e)};re.create=function(t,e){return new re(t,e)};re.refresh=function(t){return t?gl():(Ao||re.register())&&to(!0)};re.update=function(t){return++te.cache&&Fr(t===!0?2:0)};re.clearScrollMemory=e_;re.maxScroll=function(t,e){return vr(t,e?Ut:st)};re.getScrollFunc=function(t,e){return Ni(Gt(t),e?Ut:st)};re.getById=function(t){return kp[t]};re.getAll=function(){return J.filter(function(t){return t.vars.id!=="ScrollSmoother"})};re.isScrolling=function(){return!!$n};re.snapDirectional=Kh;re.addEventListener=function(t,e){var n=ko[t]||(ko[t]=[]);~n.indexOf(e)||n.push(e)};re.removeEventListener=function(t,e){var n=ko[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)};re.batch=function(t,e){var n=[],r={},i=e.interval||.016,o=e.batchMax||1e9,s=function(u,c){var d=[],p=[],h=D.delayedCall(i,function(){c(d,p),d=[],p=[]}).pause();return function(y){d.length||h.restart(!0),d.push(y.trigger),p.push(y),o<=d.length&&h.progress(1)}},l;for(l in e)r[l]=l.substr(0,2)==="on"&&Wt(e[l])&&l!=="onRefreshInit"?s(l,e[l]):e[l];return Wt(o)&&(o=o(),ft(re,"refresh",function(){return o=e.batchMax()})),ma(t).forEach(function(a){var u={};for(l in r)u[l]=r[l];u.trigger=a,n.push(re.create(u))}),n};var ug=function(e,n,r,i){return n>i?e(i):n<0&&e(0),r>i?(i-n)/(r-n):r<0?n/(n-r):1},Kf=function t(e,n){n===!0?e.style.removeProperty("touch-action"):e.style.touchAction=n===!0?"auto":n?"pan-"+n+(Ye.isTouch?" pinch-zoom":""):"none",e===tr&&t(Se,n)},lu={auto:1,scroll:1},qE=function(e){var n=e.event,r=e.target,i=e.axis,o=(n.changedTouches?n.changedTouches[0]:n).target,s=o._gsap||D.core.getCache(o),l=Ot(),a;if(!s._isScrollT||l-s._isScrollT>2e3){for(;o&&o!==Se&&(o.scrollHeight<=o.clientHeight&&o.scrollWidth<=o.clientWidth||!(lu[(a=Mn(o)).overflowY]||lu[a.overflowX]));)o=o.parentNode;s._isScroll=o&&o!==r&&!So(o)&&(lu[(a=Mn(o)).overflowY]||lu[a.overflowX]),s._isScrollT=l}(s._isScroll||i==="x")&&(n.stopPropagation(),n._gsapAllow=!0)},r_=function(e,n,r,i){return Ye.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:n,onWheel:i=i&&qE,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return r&&ft(ze,Ye.eventTypes[0],fg,!1,!0)},onDisable:function(){return ct(ze,Ye.eventTypes[0],fg,!0)}})},ZE=/(input|label|select|textarea)/i,cg,fg=function(e){var n=ZE.test(e.target.tagName);(n||cg)&&(e._gsapAllow=!0,cg=n)},JE=function(e){Qi(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var n=e,r=n.normalizeScrollX,i=n.momentum,o=n.allowNestedScroll,s=n.onRelease,l,a,u=Gt(e.target)||tr,c=D.core.globals().ScrollSmoother,d=c&&c.get(),p=ni&&(e.content&&Gt(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=Ni(u,st),y=Ni(u,Ut),g=1,w=(Ye.isTouch&&oe.visualViewport?oe.visualViewport.scale*oe.visualViewport.width:oe.outerWidth)/oe.innerWidth,x=0,m=Wt(i)?function(){return i(l)}:function(){return i||2.8},v,_,C=r_(u,e.type,!0,o),E=function(){return _=!1},S=pr,T=pr,z=function(){a=vr(u,st),T=bl(ni?1:0,a),r&&(S=bl(0,vr(u,Ut))),v=po},j=function(){p._gsap.y=hl(parseFloat(p._gsap.y)+h.offset)+"px",p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(p._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},$=function(){if(_){requestAnimationFrame(E);var R=hl(l.deltaY/2),I=T(h.v-R);if(p&&I!==h.v+h.offset){h.offset=I-h.v;var k=hl((parseFloat(p&&p._gsap.y)||0)-h.offset);p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+k+", 0, 1)",p._gsap.y=k+"px",h.cacheID=te.cache,Fr()}return!0}h.offset&&j(),_=!0},M,V,X,Z,G=function(){z(),M.isActive()&&M.vars.scrollY>a&&(h()>a?M.progress(1)&&h(a):M.resetTo("scrollY",a))};return p&&D.set(p,{y:"+=0"}),e.ignoreCheck=function(A){return ni&&A.type==="touchmove"&&$()||g>1.05&&A.type!=="touchstart"||l.isGesturing||A.touches&&A.touches.length>1},e.onPress=function(){_=!1;var A=g;g=hl((oe.visualViewport&&oe.visualViewport.scale||1)/w),M.pause(),A!==g&&Kf(u,g>1.01?!0:r?!1:"x"),V=y(),X=h(),z(),v=po},e.onRelease=e.onGestureStart=function(A,R){if(h.offset&&j(),!R)Z.restart(!0);else{te.cache++;var I=m(),k,B;r&&(k=y(),B=k+I*.05*-A.velocityX/.227,I*=ug(y,k,B,vr(u,Ut)),M.vars.scrollX=S(B)),k=h(),B=k+I*.05*-A.velocityY/.227,I*=ug(h,k,B,vr(u,st)),M.vars.scrollY=T(B),M.invalidate().duration(I).play(.01),(ni&&M.vars.scrollY>=a||k>=a-1)&&D.to({},{onUpdate:G,duration:I})}s&&s(A)},e.onWheel=function(){M._ts&&M.pause(),Ot()-x>1e3&&(v=0,x=Ot())},e.onChange=function(A,R,I,k,B){if(po!==v&&z(),R&&r&&y(S(k[2]===R?V+(A.startX-A.x):y()+R-k[1])),I){h.offset&&j();var H=B[2]===I,nt=H?X+A.startY-A.y:h()+I-B[1],le=T(nt);H&&nt!==le&&(X+=le-nt),h(le)}(I||R)&&Fr()},e.onEnable=function(){Kf(u,r?!1:"x"),re.addEventListener("refresh",G),ft(oe,"resize",G),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=y.smooth=!1),C.enable()},e.onDisable=function(){Kf(u,!0),ct(oe,"resize",G),re.removeEventListener("refresh",G),C.kill()},e.lockAxis=e.lockAxis!==!1,l=new Ye(e),l.iOS=ni,ni&&!h()&&h(1),ni&&D.ticker.add(pr),Z=l._dc,M=D.to(l,{ease:"power4",paused:!0,inherit:!1,scrollX:r?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:n_(h,h(),function(){return M.pause()})},onUpdate:Fr,onComplete:Z.vars.onComplete}),l};re.sort=function(t){return J.sort(t||function(e,n){return(e.vars.refreshPriority||0)*-1e6+e.start-(n.start+(n.vars.refreshPriority||0)*-1e6)})};re.observe=function(t){return new Ye(t)};re.normalizeScroll=function(t){if(typeof t>"u")return Ft;if(t===!0&&Ft)return Ft.enable();if(t===!1){Ft&&Ft.kill(),Ft=t;return}var e=t instanceof Ye?t:JE(t);return Ft&&Ft.target===e.target&&Ft.kill(),So(e.target)&&(Ft=e),e};re.core={_getVelocityProp:vp,_inputObserver:r_,_scrollers:te,_proxies:Sr,bridge:{ss:function(){$n||Co("scrollStart"),$n=Ot()},ref:function(){return jt}}};Yy()&&D.registerPlugin(re);wo.registerPlugin(Ea,re);const eT=P.section`
    position: relative;
    height: 1429px;
    @media (max-width: 999px) {
        height: 1529px;
        width: 440px;
        left: 50%;
        transform: translateX(-50%);
    }
    @media (min-width: 1000px) and (max-width: 1300px) {
        height: 1270px;
        width: 800px;
        margin: 0 auto;
    }
    @media (min-width: 450px) and (max-width: 576px) {
        width: 575px;
    }
`,tT=P.img`
    position: absolute;
    left: 51px;
    @media (min-width: 1000px) and (max-width: 1300px) {
        width: 450px;
        left: 0%;
    }
    @media (max-width: 999px) {
        top: -100px;
        left: 4%;
        width: 380px;
    }
    @media (max-width: 381px) {
        width: 375px;
        left: 0%;
    }
`,nT=P.img`
    position: absolute;
    top: 198px;
    right: 35px;
    @media (min-width: 1000px) and (max-width: 1300px) {
        display: none;
    }
    @media (max-width: 999px) {
        display: none;
    }
`,rT=P.img`
    display: none;
    @media (max-width: 1300px) {
        display: block;
        position: absolute;
        top: 260px;
        right: 0;
    }
    @media (min-width: 1000px) and (max-width: 1300px) {
        left: unset;
        right: 0;
    }
    @media (min-width: 800px) and (max-width: 1000px) {
        left: 10%;
    }
    @media (min-width: 576px) and (max-width: 800px) {
        left: 10%;
    }
    @media (max-width: 575px) {
        left: 20%;
    }
    @media (max-width: 381px) {
        left: 15%;
    }
`,iT=P.div`
    position: absolute;
    top: 480px;
    right: 275px;
    z-index: 10;
    width: 289px;
    opacity: 0;
    @media (min-width: 1000px) and (max-width: 1300px) {
        right: 9%;
        width: 250px;
        top: 465px;
    }
    @media (max-width: 999px) {
        width: 220px;
        top: 470px;
        left: 17%;
    }
    @media (min-width: 382px) and (max-width: 576px) {
        left: 26%;
    }
    @media (max-width: 381px) {
        left: 23%;
    }
`,oT=P.img`
    z-index: 10;
    opacity: 0;
    @media (max-width: 999px) {
        display: none;
    }
`,sT=P.div`
    position: absolute;
    bottom: 244px;
    width: 100%;
    display: flex;
    justify-content: center;
    @media (min-width: 1000px) and (max-width: 1300px) {
        bottom: 150px;
    }
    @media (max-width: 999px) {
        bottom: 600px;
    }
`,lT=P.img`
    position: absolute;
    width: 80%;
    opacity: 0;
    z-index: 11;
    @media (min-width: 1000px) {
        display: none;
    }
    @media (min-width: 450px) and (max-width: 576px) {
        width: 65%;
    }
`,aT=P.div`
    position: absolute;
    left: 50%;
    bottom: 295px;
    translate: -50% 0;
    z-index: 11;
    width: 289px;
    @media (min-width: 1000px) and (max-width: 1300px) {
        bottom: 190px;
    }
    @media (max-width: 999px) {
        width: 220px;
        bottom: 168px;
    }
`,uT=P.div`
    position: absolute;
    left: 50%;
    bottom: 105px;
    translate: -50% 0;
    z-index: 10;
    width: 289px;
    @media (min-width: 1000px) and (max-width: 1300px) {
        bottom: 70px;
    }
    @media (max-width: 999px) {
        width: 220px;
        bottom: 30px;
    }
`,cT=P.img`
    position: absolute;
    left: 50%;
    bottom: 450px;
    translate: -50% 0;
    height: 50px;
    z-index: 11;
    @media (min-width: 1000px) and (max-width: 1300px) {
        bottom: 300px;
    }
    @media (max-width: 999px) {
        bottom: 350px;
        height: 40px;
    }
`,fT=P.p`
    position: absolute;
    left: 50%;
    bottom: 380px;
    translate: -50% 0;
    height: 35px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    z-index: 11;
    @media (min-width: 1000px) and (max-width: 1300px) {
        bottom: 260px;
        width: 430px;
    }
    @media (max-width: 999px) {
        bottom: 280px;
        height: 40px;
        width: 280px;
    }
`,dT=P.img`
    position: absolute;
    top: 50px;
    left: 150px;
    z-index: -1;
    @media (max-width: 999px) {
        display: none;
    }
`,pT=P.img`
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    @media (min-width: 1000px) {
        display: none;
    }
`,hT=P.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    position: absolute;
    top: 90px;
    left: 182px;
    > img {
        height: 60px;
    }
    @media (max-width: 999px) {
        top: -40px;
        left: 14%;
        transform: translateX(-46%);
        width: 320px;
         > img {
            height: 40px;
        }
    }
    @media (min-width: 1000px) and (max-width: 1300px) {
        left: 6%;
        top: 60px;
        > img {
            height: 55px;
        }
    }
    @media (min-width: 450px) and (max-width: 576px) {
        left: 120px;
    }
`,mT=P.div`
    position: absolute;
    z-index: 1;
    top: 280px;
    left: 182px;
    line-height: 35px;
    letter-spacing: 4px;
    font-size: 20px;
    > strong {
        font-size: 20px;
    }
    > strong > span {
        color: #2496F0;
    }
    @media (min-width: 1000px) and (max-width: 1300px) {
        top: 260px;
        left: 5%;
        font-size: 16px;
    }
    @media (max-width: 999px) {
        top: 120px;
        left: 14%;
        transform: translateX(-42%);
        line-height: 35px;
        letter-spacing: 1px;
        width: 350px;
        font-size: 16px;
    }
    @media (min-width: 450px) and (max-width: 576px) {
        left: 20%;
    }
`,gT=P.img`
    position: absolute;
    top: 580px;
    right: 6%;
    width: 304px;
    opacity: 0;
    @media (min-width: 1000px) and (max-width: 1300px) {
        top: 560px;
        width: 250px;
    }
    @media (max-width: 999px) {
        width: 195px;
        top: 580px;
        right: 12%;
    }
`,xT=P.img`
    position: absolute;
    top: 740px;
    left: 114px;
    width: 254px;
    z-index: 20;
     opacity: 0;
    @media (min-width: 1000px) and (max-width: 1300px) {
        top: 740px;
        width: 200px;
        left: 0%;
    }
    @media (max-width: 999px) {
        width: 150px;
        top: 840px;
        left: 12%;
    }
`,vT=()=>{const{fadeInFromBottom:t,fadeInFromLeft:e,btnFadeInFromBottom:n,fadeInFromRight:r}=qc(),i=N.useRef(null);return Ea(()=>{const o={img1:"0%",img2:"-42%",img3:"-50%",img4:"-50%"};wo.utils.toArray(".event-content").forEach(s=>{const l=o[s.id];wo.fromTo(s,{y:100,transform:`translateX(${l})`,opacity:0},{y:0,transform:`translateX(${l})`,opacity:1,duration:1,ease:"power3.out",scrollTrigger:{trigger:s,start:"top 80%",toggleActions:"play none none none"}})})},{scope:i,dependencies:[]}),f.jsxs(eT,{ref:i,children:[f.jsx(tT,{ref:e,id:"sec3",src:"./home/first-insure-event-tower.svg"}),f.jsx(nT,{ref:t,src:"./home/first-insure-event.svg",className:"event-content",id:"img1"}),f.jsx(rT,{ref:t,src:"./home/first-insure-event-mobile.svg",className:"event-content",id:"img2"}),f.jsx(iT,{ref:n,children:f.jsx("a",{target:"_blank",href:"https://e-commerce.transglobe.com.tw/product/eta?utm_source=ec_eventpage&utm_medium=button&utm_campaign=ec_eventpage_transglobe-journey_first-time&utm_term=2024q4&utm_content=eta",children:f.jsx(Zt,{color:"blue",height:"60px",children:"投保立即抽"})})}),f.jsx(gT,{ref:r,src:"./home/english-title4.png"}),f.jsx(xT,{ref:e,src:"./home/english-title5.png"}),f.jsxs(hT,{ref:e,children:[f.jsx("img",{src:"./home/first-insure-event-title.svg"}),f.jsx("img",{src:"./home/common-title-lottery.svg"})]}),f.jsxs(mT,{ref:e,children:[f.jsx("strong",{children:"2024/10/1~2025/1/31期間"}),f.jsx("br",{}),f.jsxs("strong",{children:[f.jsx("span",{children:"首次"}),"成功",f.jsx("span",{className:"text-c-red",children:"網路投保"}),f.jsx("span",{children:"「國內外旅平險」"})]}),f.jsx("br",{}),"（限從未網路投保全球人壽任一險種者）"]}),f.jsxs(sT,{children:[f.jsx(oT,{ref:t,src:"./home/line-points-people.png",className:"event-content",id:"img3"}),f.jsx(lT,{ref:t,src:"./home/line-points-people-mobile.png",className:"event-content",id:"img4"})]}),f.jsx(cT,{src:"./home/line-points-event-title.svg"}),f.jsx(fT,{children:"快推薦好友，就有機會獲得 LINE POINTS 喔！"}),f.jsx(aT,{ref:t,children:f.jsx(nr,{to:"/mgm",children:f.jsx(Zt,{color:"red",height:"60px",children:"立即前往"})})}),f.jsx(uT,{children:f.jsx(nr,{to:"/policy",children:f.jsx(Zt,{color:"white",height:"60px",hoverBgColor:"#FF837E",children:"活動辦法"})})}),f.jsx(dT,{src:"./home/first-insure-line-points-flower.svg"}),f.jsx(pT,{src:"./home/first-insure-line-points-flower-mobile.svg"})]})},yT=P.div`
  padding-top: 90px;
  background-color: #FFFAF1;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  z-index: 0;
`,_T=P.div`
  width: 100%;
  max-width: 1500px;
  position: relative;
  z-index: 0;
  @media (max-width: 1300px) and (min-width: 1000px) {
    max-width: 800px;
  }
`;P.div`
  height: 2563px;
  width: 1px;
  position: absolute;
  left: 112px;
  top: 680px;
  z-index: 10;
	width: 50px;
	border-left: 1px solid black;
	@media screen and (max-width: 1300px) {
		left: 30px;
		top: 880px;
		z-index: 0;
		display: none;
	}
`;P.img`
	width: 50px;
	height: 50px;
	position: absolute;
	transform: translate(-50%, 0%);
	will-change: transform;
	@media screen and (max-width: 1300px) {
		display: none;
	}
`;P.div`
	width: 10px;
	height: 10px;
	border-radius: 50%;
	position: absolute;
	bottom: 0;
	left: 0;
	transform: translate(-50%, 0%);
`;const wT=P.img`
    position: absolute;
    top: 240px;
    left: 0;
    width:1180px;
	z-index: 0;
    @media (max-width: 1560px) {
        top: 500px;
        left: 0px;
        width: 800px;
    }

    @media (max-width: 1301px) {
        top: 330px;
        left: 0;
        width: 480px;
		max-width: 100%;
    }
    @media (max-width: 999px) {
        top: 680px;
    }
`;P.img`
    display: none;
    @media (max-width: 1560px) and (min-width: 1301px) {
        display: block;
        position: absolute;
        top: 1500px;
        z-index: 0;
        width: 100%;
    }
`;const ST=P.img`
    position: absolute;
    top: 840px;
    left: 0;
    width: 100%;
    height: auto;
    display: block;
    z-index: -1;
    @media (min-width: 800px) {
        display: none;
    }
`,kT=P.img`
    position: absolute;
    top: 22%;
    left: 0;
    width: 100%;
    z-index: -1;
    display: none;
	@media (min-width: 800px) and (max-width: 1300px) {
		display: block;
	}
`,CT=P.img`
    position: absolute;
    top: 27%;
    left: 0;
    width: 100%;
    height: auto;
    display: block;
    z-index: -1;

    @media (max-width: 1301px) {
        display: none;
    }
		
`,ET=P.img`
    position: absolute;
    width: 100%;
    bottom: 0px;
	z-index: -1;
    @media (min-width:570px) {
        display: none;
    }

`,TT=P.img`
    position: absolute;
    width: 100%;
    bottom: 0px;
	z-index: -1;
    display: none;
    @media (min-width:570px) and (max-width: 1300px) {
        display: block;
    }
    @media (min-width: 990px) and (max-width: 1300px) {
        content: url("./home/line-points-blue-background-ipad-h.svg");
    }
`,PT=P.img`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: none;
    z-index: -1;
    @media (max-width: 1600px) and (min-width: 1301px) {
        display: block;
    }
`,jT=P.img`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: block;
    z-index: -1;
    @media (max-width: 1600px) {
        display: none;
    }
`,OT=P.img`
  position: absolute;
  height: 1862px;
  width: 55px;
  left: 105px;
  top: 630px;
  z-index: 10;
  back-ground-color: red;
	@media screen and (max-width: 1300px) {
		display: none;
	}
`;function zT(){return f.jsxs(yT,{children:[f.jsx(wT,{src:"./home/home-polygon.svg"}),f.jsx(ST,{src:"./home/reach-insure-amount-event-trapezoid-mobile.svg"}),f.jsx(kT,{src:"./home/reach-insure-amount-event-trapezoid.svg"}),f.jsx(CT,{src:"./home/reach-insure-amount-event-trapezoid-large.svg"}),f.jsxs(_T,{children:[f.jsx(Q2,{}),f.jsx(_C,{}),f.jsx(vT,{}),f.jsx(OT,{src:"./verticalline-v1.svg",alt:"verticalline"})]}),f.jsx(PT,{src:"./home/home-blue-bg-3.svg",alt:"blue background"}),f.jsx(TT,{src:"./home/line-points-blue-background-ipad.svg",alt:"ipad blue background"}),f.jsx(jT,{src:"./home/home-blue-lg-bg-3.svg",alt:"large blue background"}),f.jsx(ET,{src:"./home/line-points-blue-background-mobile.svg",alt:"mobile blue background"})]})}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Tp=function(){return Tp=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Tp.apply(this,arguments)};function RT(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}var gs="",$l=null,Iu=null,i_=null;function Zh(){gs="",$l!==null&&$l.disconnect(),Iu!==null&&(window.clearTimeout(Iu),Iu=null)}function dg(t){var e=["BUTTON","INPUT","SELECT","TEXTAREA"],n=["A","AREA"];return e.includes(t.tagName)&&!t.hasAttribute("disabled")||n.includes(t.tagName)&&t.hasAttribute("href")}function pg(){var t=null;if(gs==="#")t=document.body;else{var e=gs.replace("#","");t=document.getElementById(e),t===null&&gs==="#top"&&(t=document.body)}if(t!==null){i_(t);var n=t.getAttribute("tabindex");return n===null&&!dg(t)&&t.setAttribute("tabindex",-1),t.focus({preventScroll:!0}),n===null&&!dg(t)&&(t.blur(),t.removeAttribute("tabindex")),Zh(),!0}return!1}function NT(t){window.setTimeout(function(){pg()===!1&&($l===null&&($l=new MutationObserver(pg)),$l.observe(document,{attributes:!0,childList:!0,subtree:!0}),Iu=window.setTimeout(function(){Zh()},t||1e4))},0)}function o_(t){return Pi.forwardRef(function(e,n){var r="";typeof e.to=="string"&&e.to.includes("#")?r="#"+e.to.split("#").slice(1).join("#"):typeof e.to=="object"&&typeof e.to.hash=="string"&&(r=e.to.hash);var i={};t===J1&&(i.isActive=function(l,a){return l&&l.isExact&&a.hash===r});function o(l){Zh(),gs=e.elementId?"#"+e.elementId:r,e.onClick&&e.onClick(l),gs!==""&&!l.defaultPrevented&&l.button===0&&(!e.target||e.target==="_self")&&!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)&&(i_=e.scroll||function(a){return e.smooth?a.scrollIntoView({behavior:"smooth"}):a.scrollIntoView()},NT(e.timeout))}var s=RT(e,["scroll","smooth","timeout","elementId"]);return Pi.createElement(t,Tp({},i,s,{onClick:o,ref:n}),e.children)})}var bT=o_(nr);o_(J1);const MT=P.div`
  padding-top: 90px;
  background-color: #FFFAF1;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative; 
  z-index: 0;

  @media (max-width: 1300px) {
    padding-top: 65px;
  }
`,IT=P.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 211px;
  background-color: #2496F0;
  z-index: 1;


  @media (max-width: 999px) {
     width: 100%;
     height: 400px;
  }
`,LT=P.div`
  width: 100%;
  max-width: 1500px;
  position: relative;
  height: 2780px;

  @media (max-width: 1300px) and (min-width: 1000px) {
    width: 800px;
    height: 2180px;
  }

  @media (max-width: 999px) {
    width: 415px;
    height: 2500px;
  }
`,FT=P.img`
  position: absolute;
  top: 427px;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  aspect-ratio: 1640 / 1260;
  background-size: cover;
  z-index: 1;

  @media (max-width: 1024px) {
    top: 530px;
    aspect-ratio: 410 / 700;
  }
`,DT=P.img`
  position: absolute;
  top: 700px;
  left: 60px;
  width: 1300px;
  z-index: 1;

  @media (max-width: 1300px) and (min-width: 1000px) {
    top: 700px;
    width: 80%;
  }

  @media (max-width: 999px) {
    display: none;
  }
`,$T=P.img`
  position: absolute;
  top: 585px;
  left: 25px;
  width: 373px;
    z-index: 1;

  @media (max-width: 1300px) and (min-width: 1000px) {
    display: none;
  }

  @media (min-width: 999px) {
    display: none;
  }
`,AT=P.img`
  position: absolute;
  top: 660px;
  left: 78px;
  width: 1360px;
  z-index: 1;

  @media (max-width: 1300px) and (min-width: 1000px) {
    width:80%;
  }

  @media (max-width: 999px) {
    display: none;
  }
`,BT=P.div`
  position: absolute;
  bottom: 375px;
  left: 50%;
  transform: translateX(-50%);
  width: 1312px;
  height: 353px;
  background: url('./mgm/mgm-building.svg') no-repeat center center;
  z-index: 1;

  @media (max-width: 1300px) and (min-width: 1000px) {
   bottom: 400px;
  }

  @media (max-width: 999px) {
    width: 414px;
    height: 218px;
    bottom: -20px;
    background-size: cover;

  }
`,UT=P.div`
  position: absolute;
  bottom: -20px;
  transform: translateX(-50%);
  left: 50%;
  width: 1371px;
  height: 278px;
  background: url('./mgm/mgm-blue-building.png') no-repeat center center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  z-index: 2;
  @media (max-width: 1300px) and (min-width: 1000px) {  
    background:none;
}
  @media (max-width: 999px) {
    bottom: 0;
    height: 400px;
    width: 100vw;
    padding-top: 40px;
    align-items: start;
    background:none;
    left: 53%;
  }

  @media (max-width: 800px) {
    bottom: 0;
    height: 400px;
    width: 100vw;
    background:none;
    left: 51%;
  }
`,WT=P.div`
    display: flex;
    align-items: center;
    width: 1039px;
    gap: 73px;
    > a {
      width: 100%;
    }

    @media (max-width: 1300px) and (min-width: 1000px) {
      // 如果需要，在這裡添加 1000px - 1300px 範圍的樣式
    }

    @media (max-width: 999px) {
        flex-direction: column;
        gap: 29px;
        width: 294px;
        z-index: 10;
    }
`,VT=P.div`
  display: none;
  position: absolute;
  top: 20px;
  width: 422px;
  aspect-ratio: 422 / 327;
  z-index: 0;
  left:50%;
  transform: translateX(-50%);  
  @media (max-width: 999px) {
    display: flex;
    position: relative;
  }
`,HT=P.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 422px;
  height: 327px;
  z-index: 0;
  opacity: 0;
  @media (max-width: 999px) {
    display: block;
  }
`,YT=P.img`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 422px;
  height: 327px;
  z-index: -1;
  opacity: 0;
  @media (max-width: 999px) {
    display: block;
  }
`,XT=P.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 422px;
  object-fit: contain;
  background-size: contain;
  z-index: 0;
  opacity: 0;
  @media (max-width: 999px) {
    display: block;
  }
`,GT=P.video`
  position: absolute;
  top: 50px;
  right: 150px;
  width: 650px;
  z-index: 0;
  clip-path: inset(1px 1px);

  @media (max-width: 1300px) and (min-width: 1000px) {
  top:60px;  
  right: -5%;
  width: 450px;
  }

  @media (max-width: 999px) {
    display: none;
  }
`,QT=P.img`
    position: absolute;
    top: 50px;
    left: 100px;
    width: 500px;
    z-index: 1; 
    animation: fadeIn 1s ease-in-out backwards;

    @media (max-width: 1300px) and (min-width: 1000px) {
      left: 0;
      top: 60px;
      width: 50%;
    }

    @media (max-width: 999px) {
        width: 354px;
        top: 340px;
        left: 7%;
    }
`,KT=P.img`
    position: absolute;
    top: 50px;
    left: 100px;
    width: 500px;
    animation: fadeIn 1s ease-in-out backwards;
    animation-delay: .5s;
    z-index: 1;

    @media (max-width: 1300px) and (min-width: 1000px) {
      left: 0;
      top: 60px;
      width: 50%;
    }

    @media (max-width: 999px) {
        width: 354px;
        top: 340px;
        left: 7%;
    }
`,s_=P.div`
    position: absolute;
    top: 320px;
    left: 120px;
    width: 456px;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 35px;
    letter-spacing: 4px;
    font-size: 25px;
    font-weight: bold;
    z-index: 1;
    > p > span {
        color:  ${t=>t.isBlue?"#2496F0":"#FF837E"};
    }

    @media (max-width: 1300px) and (min-width: 1000px) {
      left: 0;
      top: 300px;
      width: 50%;
    }

    @media (max-width: 999px) {
        top: 530px;
        left: 0px;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 2px;
        width: 100%;
    }
`,qT=P.img`
  position: absolute;
  top: 475px;
  left: 112px;
  z-index: 2;
  width: 754px;
  height: auto;
  object-fit: contain; 
  opacity:0;

  @media (max-width: 1300px) and (min-width: 1000px) {
    top: 430px;
    width: 80%;
    left: 0;
  }

  @media (max-width: 999px) {
    display: none;
  }
`,ZT=P.img`
  display: none;
  position: absolute;
  top: 475px;
  left: 10%;
  z-index: 2;
  top: 668px;
  width: 270px;
  object-fit: contain; 
  opacity:0;

  @media (max-width: 999px) {
    display: block;
  }
`,JT=P.br`
  display: ${t=>t.reverse?"block":"none"};

  @media (max-width: 1300px) and (min-width: 1000px) {
    // 如果需要，在這裡添加 1000px - 1300px 範圍的樣式
  }

  @media (max-width: 999px) {
    display: ${t=>t.reverse?"none":"block"};
  }
`,e3=P(s_)`
    font-size: 20px;
    top: 730px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;

    @media (max-width: 1300px) and (min-width: 1000px) {
      top: 600px;
      width: 90%;
    }

    @media (max-width: 999px) {
      top: 780px;
      font-size: 20px;
      height: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 280px;
      text-align: center;
    }
`,t3=P.img`
    position: absolute;
    top: 790px;
    left: 50%;
    transform: translateX(-50%);
    width: 387px;
    z-index: 2;

    @media (max-width: 1300px) and (min-width: 1000px) {
      top: 670px;
    }

    @media (max-width: 999px) {
      top: 850px;
      width: 340px;
    }
`,n3=P.div`
  position: absolute;
  top: 900px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  width: 974px;
  height: 900px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  max-width: 1008px;

  @media (max-width: 1300px) and (min-width: 1000px) {
    width: 700px;
    height: 500px;
    top:750px
  }

  @media (max-width: 999px) {
    top:950px;
    min-width: 350px;
    width: 400px;
    height: 530px;
  }
`,r3=P.div`
    z-index: 1;
    width: 1008px;
    height: 307px;
    background: url('./mgm/mgm-content1.png') no-repeat center center;
    background-size: cover;

    @media (max-width: 1300px) and (min-width: 1000px) {
      background-size: contain;
      width: 80%;
    }

    @media (max-width: 999px) {
      width: 95%;
      background: url('./mgm/mgm-content1-mobile.png') no-repeat center center;
      background-size: contain;
    }    
`,i3=P.div`
    width: 1008px;
    height: 307px;
    z-index: 1;
    background: url('./mgm/mgm-content2.png') no-repeat center center;
    background-size: cover;
    margin-top: -50px;

    @media (max-width: 1300px) and (min-width: 1000px) {
      background-size: contain;
      width: 80%;
    }

    @media (max-width: 999px) {
      background: url('./mgm/mgm-content2-mobile.png') no-repeat center center;
      width: 95%;
      background-size: contain;
    }  
`,o3=P.div`
    width: 1008px;
    height: 307px;
    z-index: 1;
    background: url('./mgm/mgm-content3.png') no-repeat center center;
    background-size: cover;
     margin-top:-30px;

    @media (max-width: 1300px) and (min-width: 1000px) {
      background-size: contain;
      width: 80%;
    }

    @media (max-width: 999px) {
      width: 95%;
      margin-top:-40px;
      background: url('./mgm/mgm-content3-mobile.png') no-repeat center center;
      background-size: contain;
    }  
`,s3=P.div`
    width: 821px;
    height: 683px;
    background: url('./mgm/mgm-people-and-frame.png') no-repeat center center;
    background-size: contain; 
    object-fit: contain;  
    pointer-events: none;
    z-index: 1;


    @media (max-width: 999px) {
        width: 95%;
        height: 601px;
        background: url('./mgm/mgm-people-and-frame-mobile.png') no-repeat center center;
        background-size: contain; 
    }
`,l3=P.div`
    position: absolute;
    top: 1800px;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: center;

    @media (max-width: 1300px) and (min-width: 1000px) {
      top: 1250px;
    }

    @media (max-width: 999px) {
        top: 1490px;
        width: 409px; 
        height: 601px;
    }
`,a3=P.div`
    display: flex;
    justify-content: center;
    width: 294px;
    z-index:1;
    > a {
      width: 100%;
    }

    @media (max-width: 1300px) and (min-width: 1000px) {
      // 如果需要，在這裡添加 1000px - 1300px 範圍的樣式
    }

    @media (max-width: 999px) {
        width: 229px;
    }

    @media (max-width: 800px) {
        width: 229px;
    }
     @media (max-width: 400px) {
        width: 229px;
    }
`,u3=P.div`
  position: absolute;
  top: 2290px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 1300px) and (min-width: 1000px) {
     top: 1730px;
  }

  @media (max-width: 999px) {
      top: 1880px;
  }
`,c3=P.div`
  @media (max-width: 1300px) and (min-width: 1000px) {
    // 如果需要，在這裡添加 1000px - 1300px 範圍的樣式
  }

  @media (max-width: 999px) {
      display: none;
  }
`,f3=P.img`
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50%;
  object-fit: cover;
  z-index: 0;
  object-fit: contain;
  object-position: bottom;
  left: 30%;

  @media (max-width: 1000px) {
    display: hidden;
    width: 100%;
    left: 0;
  }
`,d3=P.img`
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50%;
  object-fit: cover;
  z-index: -1;
  object-fit: contain;
  object-position: bottom;
  left: 30%;

  @media (min-width: 501px) and (max-width: 1300px) {
    display: block;  
    width: 100%;
    left: 0;
    height: 100%;
  }

  @media (max-width: 500px) {
    display: block;
    left: 0;
  }
`,p3=()=>{const{fadeInFromBottom:t,fadeInEnlarge:e,fadeInFromLeft:n,fadeInFromRight:r}=qc(),[i,o]=N.useState(!0);return Ea(()=>{wo.utils.toArray(".mgm-content").forEach(s=>{wo.from(s,{y:100,opacity:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:s,start:"top 80%",toggleActions:"play none none none"}})})}),N.useEffect(()=>{const s=setInterval(()=>{o(!i)},1e3);return()=>clearInterval(s)},[i]),f.jsxs(MT,{children:[f.jsx(FT,{src:"./mgm/mgm-trapezoid.png",alt:"yellow background"}),f.jsxs(LT,{children:[f.jsxs(VT,{children:[f.jsx(HT,{ref:r,src:"./mgm/mb-kv-ppl.png",alt:"mobile kv people"}),f.jsx(YT,{ref:e,src:"./mgm/mb-kv-flower.png",alt:"mobile kv flower"}),f.jsx(XT,{ref:n,src:"./mgm/mb-kv-house.png",alt:"mobile kv house"})]}),f.jsx(GT,{poster:"./mgm/mgm-kv-backup.png",src:"./mgm/mgm-banner-video-desktop.mp4",autoPlay:!0,muted:!0,playsInline:!0}),f.jsx(QT,{src:"./mgm/mgm-title.png",alt:"mgm title"}),f.jsx(KT,{src:"./mgm/mgm-title-p.png",alt:"mgm title point"}),f.jsxs(s_,{isBlue:i,children:[f.jsx("p",{children:"推薦好友全球旅平險"}),f.jsxs("p",{children:["快樂",f.jsx("span",{children:"+1+1+1+1+1+1+1+1+1"})]})]}),f.jsx(qT,{ref:n,src:"./mgm/english-title.png",alt:"English Title"}),f.jsx(ZT,{ref:n,src:"./mgm/english-title-mobile.png",alt:"English Title"}),f.jsx($T,{src:"./mgm/mgm-points-and-flower-mobile.svg",alt:"mobile content flower"}),f.jsxs(e3,{children:[f.jsx("p",{children:"2024/10/1~2025/1/31"}),f.jsx("p",{children:"成功邀請親友投保旅平險，達指定筆數"})]}),f.jsx(t3,{src:"./mgm/mgm-line-points-text.svg",alt:"line points text"}),f.jsxs(n3,{children:[f.jsx(r3,{className:"mgm-content"}),f.jsx(i3,{className:"mgm-content"}),f.jsx(o3,{className:"mgm-content"})]}),f.jsxs(c3,{children:[f.jsx(DT,{src:"./mgm/mgm-info-flower.svg",alt:"content flower"}),f.jsx(AT,{src:"./mgm/mgm-content-p-point.svg",alt:"content point"})]}),f.jsx(BT,{}),f.jsx(l3,{children:f.jsx(s3,{className:"mgm-content",alt:"people"})}),f.jsx(u3,{children:f.jsx(a3,{ref:t,children:f.jsx("a",{target:"_blank",href:"https://e-commerce.transglobe.com.tw/member/missionActivities/etamgm?utm_source=ec_eventpage&utm_medium=button&utm_campaign=ec_eventpage_transglobe-journey_etamgm&utm_term=2024q4&utm_content=missionActivities",children:f.jsx(Zt,{color:"red",alt:"立即推薦親友",children:"立即推薦親友"})})})}),f.jsxs(UT,{children:[f.jsxs(WT,{children:[f.jsx("a",{target:"_blank",href:"https://e-commerce.transglobe.com.tw/member/missionActivities?utm_source=ec_eventpage&utm_medium=button&utm_campaign=ec_eventpage_transglobe-journey_mgmsearch&utm_term=2024q4&utm_content=missionActivities",children:f.jsxs(Zt,{color:"yellow",height:"82px",alt:"推薦好友 成功筆數查詢",children:["推薦好友 ",f.jsx(JT,{reverse:!0}),"成功筆數查詢"]})}),f.jsx(bT,{to:"/",children:f.jsx(Zt,{color:"yellow",height:"82px",alt:"參加更多抽獎",children:"參加更多抽獎"})}),f.jsx(nr,{to:"/policy",children:f.jsx(Zt,{color:"white",hoverBgColor:"#FF837E",height:"82px",alt:"活動辦法",children:"活動辦法"})})]}),f.jsx(f3,{src:"./mgm/mgm-building-mb.svg"}),f.jsx(d3,{src:"./mgm/mgm-building-ipad.svg"})]})]}),f.jsx(IT,{})]})},h3=P.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,m3=()=>f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",title:"減號圖標",children:f.jsx("path",{d:"M6 12L18 12",stroke:"#000000",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),g3=()=>f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",title:"加號圖標",children:f.jsx("path",{d:"M12 6V18M6 12H18",stroke:"#000000",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),x3=P.div`
  width: ${t=>t.$width||"100%"};
  height: ${t=>t.$height||"65px"};
  background-color: #FFFAF1;
  border-radius: 8px;
  position: absolute;
  top: 5px;
  left: 5px;
  transition: all 0.3s ease;
`,v3=P.div`
  width: ${t=>t.$width||"100%"};
  height: ${t=>t.$height||"65px"};
  font-size: 25px;
  font-weight: bold;
  border: solid 2px black;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition: all 0.3s ease;
  @media (max-width: 480px) {
    font-size: 20px;
  }
`,y3=P.button`
  width: ${t=>t.$width||"100%"};
  height: ${t=>t.$height||"65px"};
  font-size: 25px;
  font-weight: bold;
  color: black;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  cursor: pointer;
  border: none;
  padding: 0;
`,hg=P.div`
  position: relative;
  right: 50px;
`;function Pp({title:t,isOpen:e,onClick:n,children:r}){return f.jsxs(h3,{children:[f.jsxs(y3,{onClick:n,children:[f.jsx(x3,{}),f.jsx(v3,{children:f.jsx("div",{style:{zIndex:5},children:t})}),e?f.jsx(hg,{children:f.jsx(m3,{})}):f.jsx(hg,{children:f.jsx(g3,{})})]}),e&&r]})}Pp.propTypes={title:zn.string.isRequired,isOpen:zn.bool.isRequired,onClick:zn.func.isRequired,children:zn.node.isRequired};const _3=P.ol`
  padding-left: 20px;
`,Kn=P.li`
  margin-bottom: 10px;
  list-style: decimal;
  padding-left: 18px;
`,jn=P.p`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: #000000;
`,mg=P.a`
  color: #000000;
  text-decoration: underline;
	cursor: pointer;
`;function jp({isPart2:t=!1}){return f.jsx("div",{children:f.jsxs(_3,{children:[f.jsx(Kn,{children:t?f.jsx(jn,{children:"凡邀請人於活動期間（2024/10/1-2025/1/31）透過投保邀請連結，邀請親友成功投保國內外旅行平安險（其投保流程之「會員推薦碼」欄位須顯示邀請人推薦碼，若系統無自動帶入，可由被邀請人自行輸入，恕不接受補登），且該保單無撤銷或終止契約之情事者，始具備抽獎及中獎資格。"}):f.jsx(jn,{children:"本活動限定全球人壽網路投保會員參加，需於活動期間（2024/10/1-2025/1/31）成功網路投保「國內外旅行平安險」，並符合各獎項參加門檻，且該保單無撤銷或終止契約之情事者，始具備抽獎及中獎資格。"})}),f.jsx(Kn,{children:f.jsx(jn,{children:"本活動將於2025/3/31前以電腦隨機抽出獎項，2025/4/30前於本網站公告中獎名單。本公司將主動以電子郵件/簡訊通知活動中獎人，請活動中獎人於指定回覆資料截止日期前登錄系統，並提供真實姓名、身分證字號、地址、電話等個人資料，以完成相關領獎作業（上傳代扣稅收據及中獎人身分證正反面影本），逾期回覆或未回覆者視為放棄中獎資格，本公司不遞補名額。"})}),f.jsx(Kn,{children:f.jsxs(jn,{children:["本活動所提供獎品之電子禮券使用方式及限制等，悉依各項獎品或服務之製造或提供廠商的說明為準，詳情請前往",f.jsx(mg,{href:"https://tx.edenred.tw/",target:"_blank",children:"Edenred好禮即享券網站"}),"查詢。因廠商或品牌之電子禮券序號大多具有兌換時效性，建議您在獲得中獎序號同時立即進行兌換，若因逾期未兌換而失效者，不得要求本公司重新提供或更換獎項；若序號遺失或遭盜用、竄改等情形，亦恕不補發。"]})}),f.jsx(Kn,{children:f.jsx(jn,{children:"本活動所提供之獎項內容，不得折換現金、兌換其他商品或優惠，亦不得將本活動中獎資格轉讓或轉售予他人；本活動獎項如遇缺貨或不可抗力之因素無法提供時，本公司有權以其他等值商品替代。獎項實際金額以本公司購入之當時金額為準，獎項所衍生之費用皆由中獎者自行負擔。"})}),f.jsx(Kn,{children:f.jsx(jn,{children:"參加本活動即視為同意本公司得因本活動之需要，依個人資料保護法相關規定，於本活動期間內，以電子檔或紙本形式於我國境內蒐集、處理，及向活動廠商、稅捐機關等對象利用其個人資料（包含姓名、身分證字號/居留證、電話、電子郵件等）。參加本活動者可自由選擇是否提供完整個人資訊，惟若不願提供或提供資訊不完整、不正確者，將無法參加本活動或喪失中獎資格。"})}),f.jsx(Kn,{children:f.jsx(jn,{children:"本活動如有任何因電腦、網路、電話、技術或其他不可歸責於本公司之事由，致本系統誤送活動訊息或中獎通知，或使參加本活動者所寄出、填寫或登錄之資料有遺失、錯誤、無法辨識或毀損等情形，本公司不負任何法律責任。"})}),f.jsx(Kn,{children:f.jsx(jn,{children:"本公司有權檢視本活動是否有人為操作之行為，對於以偽造、詐欺或其他不正當之方式意圖兌領之參加者，本公司有權撤銷其中獎資格或拒絕其參與本活動，並對於任何破壞本活動行為保留相關權利。活動中獎人若取消保單將喪失中獎資格。"})}),f.jsx(Kn,{children:f.jsx(jn,{children:"依稅法規定，中獎者若為中華民國境內居住之個人，且所中獎項價值超過新臺幣（以下同）1,000元時，本公司將於翌年開立所得稅扣繳憑單予中獎者，如所中獎項價值為20,000元（含）以上者，中獎者須先繳交10%機會中獎稅金，始可領獎。中獎者若為非中華民國境內居住之個人（即在中華民國境內居住未達183天之本國人及外國人），不論中獎獎項價值，均須先就中獎所得扣繳20％機會中獎稅金，始可領獎，且本公司須開立所得稅扣繳憑單。若未能依法繳納應繳稅額，即視為喪失中獎資格。參加者因參加本活動而須支付之任何稅捐皆為參加者之義務，概與本公司無關。前述稅捐法規如有更新或變動者，依修正後之規定辦理。"})}),f.jsx(Kn,{children:f.jsxs(jn,{children:["本活動連結之保險完整商品內容與給付限制，請參閱",f.jsx(mg,{href:"https://e-commerce.transglobe.com.tw/product/eta",target:"_blank",children:"e路平安旅行平安保險"}),"商品頁之保單條款。"]})}),f.jsx(Kn,{children:f.jsx(jn,{children:"本公司非獎品製造者或提供者，與各項獎品或服務之製造或提供廠商無任何代理或合夥關係，對於各項獎品不負任何擔保責任，且本活動獎品之保固期限均依廠商出廠時實際提供者為準。得獎者如因本活動各項獎品、服務或保固發生任何爭議，概與本公司無關。"})}),f.jsx(Kn,{children:f.jsx(jn,{children:"本活動如因故無法舉行，本公司有權取消、終止、延期、修改活動內容、更換獎項內容或暫停本活動進行等之相關決定，並得以公告方式通知參加者。如有未盡事宜或疑義時，悉依本公司相關規定或解釋辦理。"})})]})})}jp.propTypes={isPart2:zn.bool};const w3=P.ol`
  display: flex;
  flex-direction: column;
  gap: 24px;
  counter-reset: item;
`,xs=P.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2496F0;
  border-radius: 100%;
  width: 15px;
  height: 15px;
  flex-shrink: 0;
`,gg=P.li`
  counter-increment: item;
  display: flex;
  align-items: baseline;
  line-height: 1.5;
  &::before {
    content: counter(item);
		min-width: 30px;
    font-size: 65px;
    font-weight: bold;
    margin-right: 30px;
    line-height: 65px;
    color: #2496F0;
  }
	@media (max-width: 480px) {
		&::before {
			font-size: 50px;
			margin-right: 20px;
			line-height: 40px;
		}
	}
`,xg=P.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
	@media (max-width: 480px) {
		gap: 20px;
	}
`,Eo=P.div`
  font-size: 40px;
  font-weight: bold;
  line-height: 40px;
	font-family: "Noto Serif TC";
`,et=P.div`
  font-size: 20px;
  font-weight: 300;
  line-height: ${({lineHeight:t})=>t}px;
  color: ${({highlight:t})=>t?"#2496F0":"#000000"};
  white-space: pre-wrap;
  font-family: Noto TC;
	@media (max-width: 480px) {
		margin-left: ${({marginLeft:t})=>t};
	}
`,Al=P.div`
  display: flex;
  align-items: flex-end;
  gap: 22px;
	@media (max-width: 480px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 10px;
	}
`,Ec=P.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2496F0;
  color: #FFFFFF;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  font-size: 20px;
  font-weight: bold;
  flex-shrink: 0;
	@media (max-width: 480px) {
		margin-left: ${({marginLeft:t})=>t};
	}
`,qf=P.div`
  font-size: 25px;
  line-height: 25px;
  color: #000000;
  font-weight: bold;
`;function S3(){return f.jsxs(w3,{children:[f.jsx(gg,{className:"mt-[-50px]",children:f.jsxs(xg,{children:[f.jsx(Al,{children:f.jsx(Eo,{children:"投保滿額抽獎趣"})}),f.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"22px"},children:[f.jsx(Ec,{marginLeft:"-50px",children:"1"}),f.jsx(et,{lineHeight:30,children:"單筆保費滿200元，該筆保單即享「500元好禮即享券」抽獎機會乙次（共抽100名，每人獲獎次數不限）。"})]}),f.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"22px"},children:[f.jsx(Ec,{marginLeft:"-50px",children:"2"}),f.jsxs("div",{children:[f.jsx(et,{lineHeight:30,children:"單筆保費滿500元，該筆保單即享「星宇航空東京來回機票」抽獎機會乙次（價值20,000元旅遊商品兌換券乙組，共抽5名，每人限獲獎乙次）。"}),f.jsx(et,{highlight:!0,lineHeight:30,children:"註：上述活動採擇優最高門檻計，每筆保單享乙個獎項抽獎機會一次。"})]})]})]})}),f.jsx(gg,{children:f.jsxs(xg,{children:[f.jsx(Al,{children:f.jsx(Eo,{children:"首次投保抽獎趣"})}),f.jsxs("div",{children:[f.jsx(et,{lineHeight:30,children:"活動期間於本公司網路投保首次成功投保者*，不限該筆旅平險保費金額，即享「200元全聯禮券」抽獎機會乙次（共抽200名，每人限獲獎乙次）。"}),f.jsx(et,{highlight:!0,lineHeight:30,children:"註：「首次成功投保者」係指自註冊後從未網路投保本公司任一險種之網路投保會員，且於活動期間成功投保旅平險為其首筆保單。"})]})]})})]})}const k3=()=>f.jsxs("div",{children:[f.jsxs("div",{style:{marginTop:"10px"},children:[f.jsx("div",{style:{marginBottom:"30px"},children:f.jsx(Eo,{children:"投保滿額抽獎趣"})}),f.jsx(Al,{style:{marginBottom:"20px"},children:f.jsxs(qf,{children:["500元好禮即享券",f.jsx("span",{className:"text-[1rem] font-light lg:text-[1.25rem]",children:"（無效期餘額型）"})]})}),f.jsxs(et,{children:["可分次抵用。五大品牌擇一使用，一旦選定品牌，限全額度單一品牌兌換使用。",f.jsx("br",{}),"適用通路：家樂福、遠東SOGO百貨、遠東百貨、王品集團、7-ELEVEN。"]})]}),f.jsxs("div",{style:{marginTop:"40px",paddingBottom:"40px",borderBottom:"1px solid #000000"},children:[f.jsx(Al,{children:f.jsxs(qf,{children:["星宇航空東京來回機票",f.jsx("span",{className:"text-[1rem] font-light lg:text-[1.25rem]",children:"   （以ezfly 優惠碼形式提供「價值20,000元旅遊兌換券」）"})]})}),f.jsx("div",{style:{marginTop:"20px"},children:f.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"20px"},children:[f.jsx(xs,{}),f.jsx(et,{lineHeight:30,children:"本優惠碼ezfly易飛網全品項都可使用，恕無法兌換現金或找零，請一次抵用完畢，不可重複使用。"})]})}),f.jsx("div",{style:{marginTop:"20px"},children:f.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"20px"},children:[f.jsx(xs,{}),f.jsx(et,{lineHeight:30,children:"兌換方式：本優惠碼需以人工訂票方式預約行程並成功開票或確認完成訂房、訂票，方可使用。"})]})}),f.jsx("div",{style:{marginTop:"20px"},children:f.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"20px"},children:[f.jsx(xs,{}),f.jsx(et,{lineHeight:30,children:"本優惠碼因訂票方式，若預定品項為國內外機票或其他旅遊行程等預定品項，則另需支付人工訂票手續費，詳細費用請洽ezfly專人。"})]})})]}),f.jsxs("div",{style:{marginTop:"40px"},children:[f.jsx("div",{style:{marginBottom:"30px"},children:f.jsx(Eo,{children:"首次投保抽獎趣"})}),f.jsxs(Al,{style:{marginBottom:"20px"},children:[f.jsx(qf,{children:"200元全聯禮券"}),f.jsx(et,{lineHeight:20,children:"（無效期餘額型）"})]}),f.jsx(et,{children:"限全聯實體門市使用，可分次使用至面額兌換完畢，恕無法支付線上購物（含PXGo!、分批取、小時達等)、外送平台、代收業務（含雙北專用購物袋)、服務事項、兌換現金/儲值金/禮券/禮卡及菸品等相關受法令限制商品。"})]})]});function C3(){return f.jsxs("div",{style:{width:"100%"},children:[f.jsx(Eo,{children:"邀請人"}),f.jsxs("div",{style:{marginTop:"24px",display:"flex",flexDirection:"column",gap:"20px"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"20px"},children:[f.jsx(xs,{}),f.jsx(et,{lineHeight:30,children:"成功邀請1筆保單，享「50點LINE POINTS好禮即享券」抽獎機會乙次（共抽200名）。"})]}),f.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"20px"},children:[f.jsx(xs,{}),f.jsx(et,{lineHeight:30,children:"成功邀請2筆保單，享「150點LINE POINTS好禮即享券」抽獎機會乙次（共抽200名）。"})]}),f.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"20px"},children:[f.jsx(xs,{}),f.jsx(et,{lineHeight:30,children:"成功邀請3筆以上保單，享「300點LINE POINTS好禮即享券」抽獎機會乙次（共抽100名）。"})]})]})]})}function E3(){return f.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:"20px"},children:[f.jsx(Eo,{children:"被邀請人"}),f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[f.jsx(et,{children:"不限單筆保費金額，該筆保單即享「50點LINE POINTS好禮即享券」抽獎機會乙次（共抽300名，每人限獲獎乙次）。"}),f.jsx(et,{highlight:!0,children:"註：被邀請人投保時須填入「邀請人推薦碼」資訊（不可為本人推薦碼），雙方方符合抽獎資格。"})]})]})}const l_=P.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	width: 183px;
	height: 42px;
	border: 1px solid #000000;
	@media (max-width: 480px) {
		width: fit-content;
		padding: 0 20px;
	}
`;function T3(){return f.jsxs("div",{children:[f.jsx(l_,{children:"案例說明"}),f.jsx("div",{style:{marginTop:"20px"},children:f.jsx(et,{children:"全小球邀請五位朋友參與此活動，其中有兩位朋友於活動期間共成功投保3筆旅平險（且皆有填寫全小球之推薦碼)，則全小球可享「300點LINE POINTS好禮即享券」抽獎機會乙次; 而兩位朋友分別享有「50點LINE POINTS好禮即享券」1次與2次之抽獎機會。"})})]})}function P3(){return f.jsxs(f.Fragment,{children:[f.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:"24px"},children:[f.jsxs(Eo,{children:["50點、150點、300點",f.jsx("br",{}),"LINE POINTS好禮即享券"]}),f.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"22px"},children:[f.jsx(Ec,{children:"1"}),f.jsx(et,{lineHeight:30,children:"LINE POINTS即享券僅限LINE帳號註冊國家為台灣的用戶使用。"})]}),f.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"22px"},children:[f.jsx(Ec,{children:"2"}),f.jsxs(et,{lineHeight:30,children:["LINE POINTS的有效期限為最後一次獲得點數當天起算180天內，",f.jsx("br",{}),"一旦超過有效期限，您所持有的點數將會全數失效。"]})]})]}),f.jsxs("div",{style:{marginTop:"24px"},children:[f.jsx(l_,{children:"活動獎項發放說明"}),f.jsx("div",{style:{marginTop:"20px"},children:f.jsx(et,{children:"本活動獎項採電子票券形式，將以Edenred之LINE「好禮即享券領券通知」的官方帳號發送通知型訊息予中獎者。 若您無法接收到通知型訊息，活動小組將另發送好禮即享券簡訊通知。"})})]})]})}const j3=P.div`
  padding-top: 73px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 500px) {
    padding-top: 65px;
  }
`,vg=P.div`
  width: 100%;
  height: 100%;
  background-color: ${t=>t.bg||"#FFF5CD"};
  display: flex;
  justify-content: center;
`,yg=P.div`
  width: 100%;
  max-width: 1366px;
  position: relative;
  padding: 62px 166px 49px;
  display: flex;
  flex-direction: column;
  align-items: center;
	z-index: 2;
	@media (max-width: 850px) {
		padding: 62px 60px 49px;
	}
	@media (max-width: 480px) {
		padding: 62px 20px 49px;
	}
`,O3=P.img`
  width: 100%;
  position: absolute;
  pointer-events: none;
`,z3=P.div`
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 63px;
	font-family: "Noto Serif TC";
	@media (max-width: 480px) {
		font-size: 40px;
	}
`,_g=P.div`
  width: 613px;
  display: flex;
  gap: 25px;
  margin-bottom: 37px;
	> a {
		width: 100%;
	}
	@media (max-width: 480px) {
		width: 100%;
	}
`,Zr=P.div`
  width: 100%;
  height: 1px;
  border: 1px solid #000;
  border-style: ${t=>t.dashed?"dashed":"solid"};
`,wg=P.img`
  width: 419px;
`,Sg=P.img`
  width: 419px;
  position: absolute;
  top: 4px;
`,kg=P.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 56px;
`,Jr=P.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 30px;
	@media (max-width: 480px) {
		flex-direction: column;
		gap: 20px;
	}
`,ei=P.div`
  width: 183px;
  min-width: 183px;
  height: 42px;
  background-color: #2496F0;
  color: #FFFAF1;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
	font-family: "Noto Sans TC";
	letter-spacing: 2px;
	@media (max-width: 480px) {
		width: 128px;
		min-width: 128px;
	}
`,$o=P.div`
  font-weight: bold;
  font-size: 20px;
	font-family: "Noto Sans TC";
	padding-top: 10px;
`,Oe=P.div`
  width: 100%;
  height: ${t=>t.height}px;
`,R3=P.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px 50px;
  background-color: #FED430;
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .text {
    font-size: 20px;
  }
	@media (max-width: 480px) {
		padding: 36px 34px;
	}
`,Cg=P.br`
  display: ${t=>t.reverse?"block":"none"};
  @media (max-width: 1300px) {
    display: ${t=>t.reverse?"none":"block"};
  }
`;function N3(){const[t,e]=N.useState(!1),[n,r]=N.useState(!1);return f.jsxs(j3,{children:[f.jsxs(vg,{children:[f.jsxs(yg,{children:[f.jsx(z3,{children:"活動辦法"}),f.jsxs(_g,{children:[f.jsx(Zt,{onClick:()=>{const i=document.getElementById("sec1"),o=document.querySelector(".menu").offsetHeight,s=i.getBoundingClientRect().top+window.scrollY-o-60;window.scrollTo({top:s,behavior:"smooth"})},children:"旅行全球抽獎趣"}),f.jsx(Zt,{onClick:()=>{const i=document.getElementById("sec2"),o=document.querySelector(".menu").offsetHeight,s=i.getBoundingClientRect().top+window.scrollY-o-60;window.scrollTo({top:s,behavior:"smooth"})},children:"分享全球樂透抽"})]}),f.jsx(Zr,{}),f.jsxs(kg,{id:"sec1",children:[f.jsx(wg,{src:"./home/event-banner-title.png"}),f.jsx(Sg,{src:"./home/event-banner-airplane.png"})]}),f.jsxs(Jr,{children:[f.jsx(ei,{children:"活動期間"}),f.jsx($o,{children:"2024/10/1-2025/1/31"})]}),f.jsx(Oe,{height:32}),f.jsx(Zr,{}),f.jsx(Oe,{height:32}),f.jsxs(Jr,{children:[f.jsx(ei,{children:"活動辦法"}),f.jsxs($o,{children:["凡於活動期間內成功網路投保「國內外旅行平安險」，",f.jsx(Cg,{reverse:!0}),"並達指定活動條件，即符合該項抽獎資格。"]})]}),f.jsx(Oe,{height:83}),f.jsx(S3,{}),f.jsx(Oe,{height:40}),f.jsx(Zr,{}),f.jsx(Oe,{height:53}),f.jsxs(Jr,{children:[f.jsx(ei,{children:"得獎公告"}),f.jsx($o,{children:"得獎者將於2025/4/30前於本網站統一公告。"})]}),f.jsx(Oe,{height:44}),f.jsx(Zr,{}),f.jsx(Oe,{height:53}),f.jsx(Jr,{children:f.jsx(ei,{children:"獎項說明"})}),f.jsx(Oe,{height:25}),f.jsx(k3,{}),f.jsx(Oe,{height:40}),f.jsxs(R3,{children:[f.jsx("div",{className:"title",children:"活動獎項發放說明"}),f.jsx("div",{className:"text",children:"本活動獎項採電子票券形式，將以Edenred之LINE「好禮即享券領券通知」的官方帳號發送通知型訊息予中獎者。若您無法接收到通知型訊息，活動小組將另發送好禮即享券簡訊通知。"})]}),f.jsx(Oe,{height:58}),f.jsx(Pp,{title:"注意事項",isOpen:t,onClick:()=>e(!t),children:f.jsx(jp,{})})]}),f.jsx(O3,{src:"./policy/flower.svg",alt:""})]}),f.jsx(vg,{bg:"#FED430",children:f.jsxs(yg,{id:"sec2",children:[f.jsxs(kg,{id:"sec1",children:[f.jsx(wg,{src:"./mgm/mgm-title.png"}),f.jsx(Sg,{src:"./mgm/mgm-title-p.png"})]}),f.jsxs(Jr,{children:[f.jsx(ei,{children:"活動期間"}),f.jsx($o,{children:"2024/10/1-2025/1/31"})]}),f.jsx(Oe,{height:32}),f.jsx(Zr,{}),f.jsx(Oe,{height:32}),f.jsxs(Jr,{children:[f.jsx(ei,{children:"活動辦法"}),f.jsxs($o,{children:["活動期間邀請親友成功網路投保國內外旅平險達指定筆數，",f.jsx(Cg,{reverse:!0}),"即符合LINE POINTS抽獎資格。"]})]}),f.jsx(Oe,{height:42}),f.jsx(C3,{}),f.jsx(Oe,{height:42}),f.jsx(E3,{}),f.jsx(Oe,{height:42}),f.jsx(T3,{}),f.jsx(Oe,{height:45}),f.jsx(Zr,{}),f.jsx(Oe,{height:54}),f.jsxs(Jr,{children:[f.jsx(ei,{children:"得獎公告"}),f.jsx($o,{children:"得獎者將於2025/4/30前於本網站統一公告。"})]}),f.jsx(Oe,{height:44}),f.jsx(Zr,{}),f.jsx(Oe,{height:53}),f.jsx(Jr,{children:f.jsx(ei,{children:"獎項說明"})}),f.jsx(Oe,{height:42}),f.jsx(P3,{}),f.jsx(Oe,{height:42}),f.jsx(Pp,{title:"注意事項",isOpen:n,onClick:()=>{r(!n)},children:f.jsx(jp,{isPart2:!0})}),f.jsx(Oe,{height:50}),f.jsx(Zr,{}),f.jsx(Oe,{height:35}),f.jsxs(_g,{children:[f.jsx(nr,{to:"/",children:f.jsx(Zt,{color:"blue",children:"旅行全球抽獎趣"})}),f.jsx(nr,{to:"/mgm",children:f.jsx(Zt,{color:"blue",children:"分享全球樂透抽"})})]})]})})]})}const Eg=""+new URL("../logo.png",import.meta.url).href;function b3(){const[t,e]=N.useState(!1),n=Q1(),r=Bs(),[i,o]=N.useState(r.hash||r.pathname);N.useEffect(()=>{window.scrollTo(0,0),o(r.hash||r.pathname)},[r]);const s=()=>{e(!t)},l=N.useCallback((u,c)=>{u.preventDefault(),e(!1);const d=window.location.pathname==="/"||window.location.pathname==="/index.html",p=()=>{const h=document.querySelector(c);if(h){const y=document.querySelector(".menu").offsetHeight,g=h.getBoundingClientRect().top+window.scrollY-y-60;window.scrollTo({top:g,behavior:"smooth"}),o(c)}else console.log("can not find target")};d?(window.history.pushState(null,"",c),p()):(n(`/${c}`),setTimeout(()=>{window.history.pushState(null,"",c),p()},200))},[n]),a=u=>i===u?"menu-text bg-c-orange":"menu-text";return f.jsxs(f.Fragment,{children:[f.jsx("header",{className:"menu justify-center bg-bg-yellow",children:f.jsxs("div",{className:"flex justify-between w-full px-6 max-w-[1500px]",children:[f.jsx("div",{className:"flex-shrink-0 ml-[3vw]",children:f.jsx("a",{href:"https://www.transglobe.com.tw/",target:"_blank",rel:"noopener noreferrer",children:f.jsx("img",{src:Eg,alt:"Logo",className:""})})}),f.jsxs("nav",{className:"flex space-x-7",children:[f.jsx("a",{href:"/",className:`menu-text ${a("#sec2")}`,onClick:u=>l(u,"#sec2"),children:"投保滿額抽"}),f.jsx("a",{href:"/",className:`menu-text ${a("#sec3")}`,onClick:u=>l(u,"#sec3"),children:"首次投保抽"}),f.jsx(nr,{to:"/mgm",className:`menu-text ${a("/mgm")}`,children:"分享全球抽"}),f.jsx(nr,{to:"/policy",className:`menu-text ${a("/policy")}`,children:"活動辦法"})]})]})}),f.jsxs("header",{className:`mobile-menu lg:hidden ${t?"h-full":""}`,children:[f.jsx("div",{className:`flex-shrink-0 w-[30vw] ml-[3vw] mt-1 ${t?"hidden":"block"}`,children:f.jsx("a",{href:"https://www.transglobe.com.tw/",target:"_blank",rel:"noopener noreferrer",children:f.jsx("img",{src:Eg,alt:"Logo",className:""})})}),f.jsxs("button",{className:"absolute top-3 right-4 flex items-center justify-center",onClick:s,children:[f.jsx("img",{src:"./menu/menu-hamburger.svg",alt:"Open Menu",className:`h-12 w-12 transition-opacity duration-300 ${t?"opacity-0":"opacity-100"}`}),f.jsx("img",{src:"./menu/menu-close-sm.svg",alt:"Close Menu",className:`h-12 w-12 absolute transition-opacity duration-300 ${t?"opacity-100":"opacity-0"}`})]}),f.jsx("div",{className:"flex flex-col items-center justify-center w-[100vw]",children:f.jsx("nav",{className:`static flex flex-col items-center justify-center space-y-4 ${t?"":"hidden"}`,children:f.jsxs("nav",{className:"flex flex-col space-y-6 px-14",children:[f.jsx("a",{href:"/",className:"mobile-text",onClick:u=>l(u,"#sec2"),children:"投保滿額抽"}),f.jsx("a",{href:"/",className:"mobile-text",onClick:u=>l(u,"#sec3"),children:"首次投保抽"}),f.jsx(nr,{to:"/mgm",className:"mobile-text",onClick:s,children:"分享全球抽"}),f.jsx(nr,{to:"/policy",className:"mobile-text",onClick:s,children:"活動辦法"})]})})})]})]})}function M3(){const[t,e]=N.useState(!1),n=()=>{e(!t)};return f.jsxs("footer",{children:[f.jsx("div",{className:"footer_top",children:f.jsxs("div",{className:"footer_inner",children:[f.jsxs("div",{className:"footer_link",children:[f.jsx("div",{className:"footer_title",children:"相關連結"}),f.jsx("div",{className:"style_pc",children:f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx("a",{href:"https://www.transglobe.com.tw/",target:"_blank",children:"全球人壽官網"})}),f.jsx("li",{children:f.jsx("a",{href:"https://www.facebook.com/TGLlife/?fref=ts",className:"icon_footer_fb",target:"_blank",children:"全球人壽粉絲YA　"})}),f.jsx("li",{children:f.jsx("a",{href:"https://eservice.transglobe.com.tw/cs/Logon/Logon.xhtml",target:"_blank",children:"保戶專區"})}),f.jsx("li",{children:f.jsx("a",{href:"https://www.transglobe.com.tw/service-contact-location.html?",target:"_blank",children:"服務據點　"})}),f.jsx("li",{children:f.jsx("a",{href:"https://www.transglobe.com.tw/law-lawcom.html",target:"_blank",children:"電子商務自律規範主管機關連結"})}),f.jsx("li",{children:f.jsx("a",{href:"https://e-commerce.transglobe.com.tw/assets/tgl/pdf/TGLECContract.pdf",target:"_blank",children:"網路投保業務暨網路保險服務契約"})})]})}),f.jsxs("div",{className:"style_mb",children:[f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx("a",{href:"http://www.transglobe.com.tw/transglobe-web",target:"_blank",children:"全球人壽官網"})}),f.jsx("li",{children:f.jsx("a",{href:"https://www.fsc.gov.tw/ch/index.jsp",target:"_blank",children:"主管機關連結"})})]}),f.jsxs("div",{className:"footer_more",children:[f.jsxs("div",{className:"footer_title btn_footer_more",children:["更多相關連結",f.jsx("svg",{className:"icon-footer-arrow",onClick:n,children:f.jsx("use",{"xlink:href":"images/icon-re.svg?svg=#ico-accor"})})]}),f.jsx("div",{className:`footer_more_content ${t?"active2":""}`,children:f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx("a",{href:"https://www.facebook.com/TGLlife/?fref=ts",className:"icon_footer_fb",target:"_blank",children:"全球人壽粉絲YA　"})}),f.jsx("li",{children:f.jsx("a",{href:"https://eservice.transglobe.com.tw/cs/Logon/Logon.xhtml",target:"_blank",children:"保戶專區"})}),f.jsx("li",{children:f.jsx("a",{href:"https://www.transglobe.com.tw/service-contact-location.html?",target:"_blank",children:"服務據點　"})}),f.jsx("li",{children:f.jsx("a",{href:"https://www.transglobe.com.tw/law-lawcom.html",target:"_blank",children:"電子商務自律規範主管機關連結"})}),f.jsx("li",{children:f.jsx("a",{href:"https://e-commerce.transglobe.com.tw/assets/tgl/pdf/TGLECContract.pdf",target:"_blank",children:"網路投保業務暨網路保險服務契約"})})]})})]})]})]}),f.jsxs("div",{className:"footer_info",children:[f.jsx("div",{className:"footer_title",children:"聯絡我們"}),f.jsxs("ul",{children:[f.jsx("li",{className:"icon_footer_map",children:f.jsxs("span",{children:["台北市110信義區市民大道六段288號16樓",f.jsx("a",{href:"https://www.google.com/maps?q=%E5%8F%B0%E5%8C%97%E5%B8%82%E4%BF%A1%E7%BE%A9%E5%8D%80%E5%B8%82%E6%B0%91%E5%A4%A7%E9%81%93%E5%85%AD%E6%AE%B5288%E8%99%9F16%E6%A8%93&t=m&z=16",target:"_blank",className:"link_map",children:"地圖"})]})}),f.jsx("li",{className:"icon_footer_phone",children:"免付費服務專線：0800-000-662"})]})]})]})}),f.jsx("div",{className:"footer_bottom",children:f.jsx("div",{className:"footer_inner",children:f.jsx("span",{className:"copyright",children:"2024 ©本網站版權屬 全球人壽保險股份有限公司所有"})})})]})}const I3=P.img`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 10;
  cursor: pointer;
  display: ${t=>t.$show?"block":"none"};
  @media (max-width: 1301px) {
    width: 50px;
  }
`;function L3(){const e=window.location.hostname==="siaochi.github.io"?"/travel-web/":"",[n,r]=N.useState(!1),i=()=>{window.scrollTo({top:0,behavior:"smooth"})};return N.useEffect(()=>{window.addEventListener("scroll",()=>{window.scrollY>500?r(!0):r(!1)})},[]),f.jsxs(zk,{basename:e,children:[f.jsx(b3,{}),f.jsxs(Sk,{children:[f.jsx(_u,{path:"/",element:f.jsx(zT,{})}),f.jsx(_u,{path:"/mgm",element:f.jsx(p3,{})}),f.jsx(_u,{path:"/policy",element:f.jsx(N3,{})})]}),f.jsx(M3,{}),f.jsx(I3,{src:"./top-btn.svg",onClick:i,$show:n})]})}$1(document.getElementById("root")).render(f.jsx(N.StrictMode,{children:f.jsx(L3,{})}));
