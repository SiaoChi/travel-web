function a_(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Tg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var jg={exports:{}},Pc={},Pg={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xa=Symbol.for("react.element"),u_=Symbol.for("react.portal"),c_=Symbol.for("react.fragment"),f_=Symbol.for("react.strict_mode"),d_=Symbol.for("react.profiler"),p_=Symbol.for("react.provider"),h_=Symbol.for("react.context"),m_=Symbol.for("react.forward_ref"),g_=Symbol.for("react.suspense"),x_=Symbol.for("react.memo"),v_=Symbol.for("react.lazy"),n0=Symbol.iterator;function y_(t){return t===null||typeof t!="object"?null:(t=n0&&t[n0]||t["@@iterator"],typeof t=="function"?t:null)}var Og={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zg=Object.assign,bg={};function Ds(t,e,n){this.props=t,this.context=e,this.refs=bg,this.updater=n||Og}Ds.prototype.isReactComponent={};Ds.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ds.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Rg(){}Rg.prototype=Ds.prototype;function bp(t,e,n){this.props=t,this.context=e,this.refs=bg,this.updater=n||Og}var Rp=bp.prototype=new Rg;Rp.constructor=bp;zg(Rp,Ds.prototype);Rp.isPureReactComponent=!0;var r0=Array.isArray,Ng=Object.prototype.hasOwnProperty,Np={current:null},Mg={key:!0,ref:!0,__self:!0,__source:!0};function Ig(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Ng.call(e,r)&&!Mg.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:xa,type:t,key:o,ref:s,props:i,_owner:Np.current}}function __(t,e){return{$$typeof:xa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mp(t){return typeof t=="object"&&t!==null&&t.$$typeof===xa}function w_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var i0=/\/+/g;function of(t,e){return typeof t=="object"&&t!==null&&t.key!=null?w_(""+t.key):e.toString(36)}function cu(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case xa:case u_:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+of(s,0):r,r0(i)?(n="",t!=null&&(n=t.replace(i0,"$&/")+"/"),cu(i,e,n,"",function(u){return u})):i!=null&&(Mp(i)&&(i=__(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(i0,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",r0(t))for(var l=0;l<t.length;l++){o=t[l];var a=r+of(o,l);s+=cu(o,e,n,a,i)}else if(a=y_(t),typeof a=="function")for(t=a.call(t),l=0;!(o=t.next()).done;)o=o.value,a=r+of(o,l++),s+=cu(o,e,n,a,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function za(t,e,n){if(t==null)return t;var r=[],i=0;return cu(t,r,"","",function(o){return e.call(n,o,i++)}),r}function S_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},fu={transition:null},k_={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:fu,ReactCurrentOwner:Np};function Lg(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:za,forEach:function(t,e,n){za(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return za(t,function(){e++}),e},toArray:function(t){return za(t,function(e){return e})||[]},only:function(t){if(!Mp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=Ds;ne.Fragment=c_;ne.Profiler=d_;ne.PureComponent=bp;ne.StrictMode=f_;ne.Suspense=g_;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k_;ne.act=Lg;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=zg({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Np.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Ng.call(e,a)&&!Mg.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:xa,type:t.type,key:i,ref:o,props:r,_owner:s}};ne.createContext=function(t){return t={$$typeof:h_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:p_,_context:t},t.Consumer=t};ne.createElement=Ig;ne.createFactory=function(t){var e=Ig.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:m_,render:t}};ne.isValidElement=Mp;ne.lazy=function(t){return{$$typeof:v_,_payload:{_status:-1,_result:t},_init:S_}};ne.memo=function(t,e){return{$$typeof:x_,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=fu.transition;fu.transition={};try{t()}finally{fu.transition=e}};ne.unstable_act=Lg;ne.useCallback=function(t,e){return Yt.current.useCallback(t,e)};ne.useContext=function(t){return Yt.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};ne.useEffect=function(t,e){return Yt.current.useEffect(t,e)};ne.useId=function(){return Yt.current.useId()};ne.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return Yt.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};ne.useRef=function(t){return Yt.current.useRef(t)};ne.useState=function(t){return Yt.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return Yt.current.useTransition()};ne.version="18.3.1";Pg.exports=ne;var R=Pg.exports;const Pi=Tg(R),C_=a_({__proto__:null,default:Pi},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_=R,T_=Symbol.for("react.element"),j_=Symbol.for("react.fragment"),P_=Object.prototype.hasOwnProperty,O_=E_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,z_={key:!0,ref:!0,__self:!0,__source:!0};function Fg(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)P_.call(e,r)&&!z_.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:T_,type:t,key:o,ref:s,props:i,_owner:O_.current}}Pc.Fragment=j_;Pc.jsx=Fg;Pc.jsxs=Fg;jg.exports=Pc;var f=jg.exports,Dg={exports:{}},Cn={},$g={exports:{}},Ag={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,I){var k=b.length;b.push(I);e:for(;0<k;){var B=k-1>>>1,H=b[B];if(0<i(H,I))b[B]=I,b[k]=H,k=B;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var I=b[0],k=b.pop();if(k!==I){b[0]=k;e:for(var B=0,H=b.length,nt=H>>>1;B<nt;){var le=2*(B+1)-1,ve=b[le],pe=le+1,fe=b[pe];if(0>i(ve,k))pe<H&&0>i(fe,ve)?(b[B]=fe,b[pe]=k,B=pe):(b[B]=ve,b[le]=k,B=le);else if(pe<H&&0>i(fe,k))b[B]=fe,b[pe]=k,B=pe;else break e}}return I}function i(b,I){var k=b.sortIndex-I.sortIndex;return k!==0?k:b.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var a=[],u=[],c=1,d=null,p=3,h=!1,y=!1,g=!1,w=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(b){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=b)r(u),I.sortIndex=I.expirationTime,e(a,I);else break;I=n(u)}}function _(b){if(g=!1,v(b),!y)if(n(a)!==null)y=!0,G(C);else{var I=n(u);I!==null&&A(_,I.startTime-b)}}function C(b,I){y=!1,g&&(g=!1,x(j),j=-1),h=!0;var k=p;try{for(v(I),d=n(a);d!==null&&(!(d.expirationTime>I)||b&&!$());){var B=d.callback;if(typeof B=="function"){d.callback=null,p=d.priorityLevel;var H=B(d.expirationTime<=I);I=t.unstable_now(),typeof H=="function"?d.callback=H:d===n(a)&&r(a),v(I)}else r(a);d=n(a)}if(d!==null)var nt=!0;else{var le=n(u);le!==null&&A(_,le.startTime-I),nt=!1}return nt}finally{d=null,p=k,h=!1}}var E=!1,S=null,j=-1,z=5,P=-1;function $(){return!(t.unstable_now()-P<z)}function M(){if(S!==null){var b=t.unstable_now();P=b;var I=!0;try{I=S(!0,b)}finally{I?V():(E=!1,S=null)}}else E=!1}var V;if(typeof m=="function")V=function(){m(M)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,Z=X.port2;X.port1.onmessage=M,V=function(){Z.postMessage(null)}}else V=function(){w(M,0)};function G(b){S=b,E||(E=!0,V())}function A(b,I){j=w(function(){b(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){y||h||(y=!0,G(C))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(b){switch(p){case 1:case 2:case 3:var I=3;break;default:I=p}var k=p;p=I;try{return b()}finally{p=k}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,I){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var k=p;p=b;try{return I()}finally{p=k}},t.unstable_scheduleCallback=function(b,I,k){var B=t.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?B+k:B):k=B,b){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=k+H,b={id:c++,callback:I,priorityLevel:b,startTime:k,expirationTime:H,sortIndex:-1},k>B?(b.sortIndex=k,e(u,b),n(a)===null&&b===n(u)&&(g?(x(j),j=-1):g=!0,A(_,k-B))):(b.sortIndex=H,e(a,b),y||h||(y=!0,G(C))),b},t.unstable_shouldYield=$,t.unstable_wrapCallback=function(b){var I=p;return function(){var k=p;p=I;try{return b.apply(this,arguments)}finally{p=k}}}})(Ag);$g.exports=Ag;var b_=$g.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_=R,Sn=b_;function N(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bg=new Set,Bl={};function jo(t,e){ys(t,e),ys(t+"Capture",e)}function ys(t,e){for(Bl[t]=e,t=0;t<e.length;t++)Bg.add(e[t])}var $r=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ed=Object.prototype.hasOwnProperty,N_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,o0={},s0={};function M_(t){return ed.call(s0,t)?!0:ed.call(o0,t)?!1:N_.test(t)?s0[t]=!0:(o0[t]=!0,!1)}function I_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function L_(t,e,n,r){if(e===null||typeof e>"u"||I_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var St={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){St[t]=new Xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];St[e]=new Xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){St[t]=new Xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){St[t]=new Xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){St[t]=new Xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){St[t]=new Xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){St[t]=new Xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){St[t]=new Xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){St[t]=new Xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ip=/[\-:]([a-z])/g;function Lp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ip,Lp);St[e]=new Xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ip,Lp);St[e]=new Xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ip,Lp);St[e]=new Xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){St[t]=new Xt(t,1,!1,t.toLowerCase(),null,!1,!1)});St.xlinkHref=new Xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){St[t]=new Xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Fp(t,e,n,r){var i=St.hasOwnProperty(e)?St[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(L_(e,n,i,r)&&(n=null),r||i===null?M_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Hr=R_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ba=Symbol.for("react.element"),Wo=Symbol.for("react.portal"),Vo=Symbol.for("react.fragment"),Dp=Symbol.for("react.strict_mode"),td=Symbol.for("react.profiler"),Ug=Symbol.for("react.provider"),Wg=Symbol.for("react.context"),$p=Symbol.for("react.forward_ref"),nd=Symbol.for("react.suspense"),rd=Symbol.for("react.suspense_list"),Ap=Symbol.for("react.memo"),ii=Symbol.for("react.lazy"),Vg=Symbol.for("react.offscreen"),l0=Symbol.iterator;function Qs(t){return t===null||typeof t!="object"?null:(t=l0&&t[l0]||t["@@iterator"],typeof t=="function"?t:null)}var Le=Object.assign,sf;function sl(t){if(sf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sf=e&&e[1]||""}return`
`+sf+t}var lf=!1;function af(t,e){if(!t||lf)return"";lf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=s&&0<=l);break}}}finally{lf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?sl(t):""}function F_(t){switch(t.tag){case 5:return sl(t.type);case 16:return sl("Lazy");case 13:return sl("Suspense");case 19:return sl("SuspenseList");case 0:case 2:case 15:return t=af(t.type,!1),t;case 11:return t=af(t.type.render,!1),t;case 1:return t=af(t.type,!0),t;default:return""}}function id(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vo:return"Fragment";case Wo:return"Portal";case td:return"Profiler";case Dp:return"StrictMode";case nd:return"Suspense";case rd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Wg:return(t.displayName||"Context")+".Consumer";case Ug:return(t._context.displayName||"Context")+".Provider";case $p:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ap:return e=t.displayName||null,e!==null?e:id(t.type)||"Memo";case ii:e=t._payload,t=t._init;try{return id(t(e))}catch{}}return null}function D_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return id(e);case 8:return e===Dp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Oi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $_(t){var e=Hg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ra(t){t._valueTracker||(t._valueTracker=$_(t))}function Yg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Hg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Du(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function od(t,e){var n=e.checked;return Le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function a0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Oi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Xg(t,e){e=e.checked,e!=null&&Fp(t,"checked",e,!1)}function sd(t,e){Xg(t,e);var n=Oi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ld(t,e.type,n):e.hasOwnProperty("defaultValue")&&ld(t,e.type,Oi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function u0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ld(t,e,n){(e!=="number"||Du(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ll=Array.isArray;function os(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Oi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ad(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(N(91));return Le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function c0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(N(92));if(ll(n)){if(1<n.length)throw Error(N(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Oi(n)}}function Gg(t,e){var n=Oi(e.value),r=Oi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function f0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Qg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ud(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Qg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Na,Kg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Na=Na||document.createElement("div"),Na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ul(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var vl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},A_=["Webkit","ms","Moz","O"];Object.keys(vl).forEach(function(t){A_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),vl[e]=vl[t]})});function qg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||vl.hasOwnProperty(t)&&vl[t]?(""+e).trim():e+"px"}function Zg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=qg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var B_=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cd(t,e){if(e){if(B_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(N(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(N(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(N(61))}if(e.style!=null&&typeof e.style!="object")throw Error(N(62))}}function fd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dd=null;function Bp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pd=null,ss=null,ls=null;function d0(t){if(t=_a(t)){if(typeof pd!="function")throw Error(N(280));var e=t.stateNode;e&&(e=Nc(e),pd(t.stateNode,t.type,e))}}function Jg(t){ss?ls?ls.push(t):ls=[t]:ss=t}function ex(){if(ss){var t=ss,e=ls;if(ls=ss=null,d0(t),e)for(t=0;t<e.length;t++)d0(e[t])}}function tx(t,e){return t(e)}function nx(){}var uf=!1;function rx(t,e,n){if(uf)return t(e,n);uf=!0;try{return tx(t,e,n)}finally{uf=!1,(ss!==null||ls!==null)&&(nx(),ex())}}function Wl(t,e){var n=t.stateNode;if(n===null)return null;var r=Nc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(N(231,e,typeof n));return n}var hd=!1;if($r)try{var Ks={};Object.defineProperty(Ks,"passive",{get:function(){hd=!0}}),window.addEventListener("test",Ks,Ks),window.removeEventListener("test",Ks,Ks)}catch{hd=!1}function U_(t,e,n,r,i,o,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var yl=!1,$u=null,Au=!1,md=null,W_={onError:function(t){yl=!0,$u=t}};function V_(t,e,n,r,i,o,s,l,a){yl=!1,$u=null,U_.apply(W_,arguments)}function H_(t,e,n,r,i,o,s,l,a){if(V_.apply(this,arguments),yl){if(yl){var u=$u;yl=!1,$u=null}else throw Error(N(198));Au||(Au=!0,md=u)}}function Po(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ix(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function p0(t){if(Po(t)!==t)throw Error(N(188))}function Y_(t){var e=t.alternate;if(!e){if(e=Po(t),e===null)throw Error(N(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return p0(i),t;if(o===r)return p0(i),e;o=o.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?t:e}function ox(t){return t=Y_(t),t!==null?sx(t):null}function sx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=sx(t);if(e!==null)return e;t=t.sibling}return null}var lx=Sn.unstable_scheduleCallback,h0=Sn.unstable_cancelCallback,X_=Sn.unstable_shouldYield,G_=Sn.unstable_requestPaint,Ye=Sn.unstable_now,Q_=Sn.unstable_getCurrentPriorityLevel,Up=Sn.unstable_ImmediatePriority,ax=Sn.unstable_UserBlockingPriority,Bu=Sn.unstable_NormalPriority,K_=Sn.unstable_LowPriority,ux=Sn.unstable_IdlePriority,Oc=null,yr=null;function q_(t){if(yr&&typeof yr.onCommitFiberRoot=="function")try{yr.onCommitFiberRoot(Oc,t,void 0,(t.current.flags&128)===128)}catch{}}var rr=Math.clz32?Math.clz32:ew,Z_=Math.log,J_=Math.LN2;function ew(t){return t>>>=0,t===0?32:31-(Z_(t)/J_|0)|0}var Ma=64,Ia=4194304;function al(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Uu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=al(l):(o&=s,o!==0&&(r=al(o)))}else s=n&~i,s!==0?r=al(s):o!==0&&(r=al(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-rr(e),i=1<<n,r|=t[n],e&=~i;return r}function tw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-rr(o),l=1<<s,a=i[s];a===-1?(!(l&n)||l&r)&&(i[s]=tw(l,e)):a<=e&&(t.expiredLanes|=l),o&=~l}}function gd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cx(){var t=Ma;return Ma<<=1,!(Ma&4194240)&&(Ma=64),t}function cf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-rr(e),t[e]=n}function rw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-rr(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Wp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-rr(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function fx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var dx,Vp,px,hx,mx,xd=!1,La=[],gi=null,xi=null,vi=null,Vl=new Map,Hl=new Map,si=[],iw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function m0(t,e){switch(t){case"focusin":case"focusout":gi=null;break;case"dragenter":case"dragleave":xi=null;break;case"mouseover":case"mouseout":vi=null;break;case"pointerover":case"pointerout":Vl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hl.delete(e.pointerId)}}function qs(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=_a(e),e!==null&&Vp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ow(t,e,n,r,i){switch(e){case"focusin":return gi=qs(gi,t,e,n,r,i),!0;case"dragenter":return xi=qs(xi,t,e,n,r,i),!0;case"mouseover":return vi=qs(vi,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Vl.set(o,qs(Vl.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Hl.set(o,qs(Hl.get(o)||null,t,e,n,r,i)),!0}return!1}function gx(t){var e=qi(t.target);if(e!==null){var n=Po(e);if(n!==null){if(e=n.tag,e===13){if(e=ix(n),e!==null){t.blockedOn=e,mx(t.priority,function(){px(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function du(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);dd=r,n.target.dispatchEvent(r),dd=null}else return e=_a(n),e!==null&&Vp(e),t.blockedOn=n,!1;e.shift()}return!0}function g0(t,e,n){du(t)&&n.delete(e)}function sw(){xd=!1,gi!==null&&du(gi)&&(gi=null),xi!==null&&du(xi)&&(xi=null),vi!==null&&du(vi)&&(vi=null),Vl.forEach(g0),Hl.forEach(g0)}function Zs(t,e){t.blockedOn===e&&(t.blockedOn=null,xd||(xd=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,sw)))}function Yl(t){function e(i){return Zs(i,t)}if(0<La.length){Zs(La[0],t);for(var n=1;n<La.length;n++){var r=La[n];r.blockedOn===t&&(r.blockedOn=null)}}for(gi!==null&&Zs(gi,t),xi!==null&&Zs(xi,t),vi!==null&&Zs(vi,t),Vl.forEach(e),Hl.forEach(e),n=0;n<si.length;n++)r=si[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<si.length&&(n=si[0],n.blockedOn===null);)gx(n),n.blockedOn===null&&si.shift()}var as=Hr.ReactCurrentBatchConfig,Wu=!0;function lw(t,e,n,r){var i=he,o=as.transition;as.transition=null;try{he=1,Hp(t,e,n,r)}finally{he=i,as.transition=o}}function aw(t,e,n,r){var i=he,o=as.transition;as.transition=null;try{he=4,Hp(t,e,n,r)}finally{he=i,as.transition=o}}function Hp(t,e,n,r){if(Wu){var i=vd(t,e,n,r);if(i===null)_f(t,e,r,Vu,n),m0(t,r);else if(ow(i,t,e,n,r))r.stopPropagation();else if(m0(t,r),e&4&&-1<iw.indexOf(t)){for(;i!==null;){var o=_a(i);if(o!==null&&dx(o),o=vd(t,e,n,r),o===null&&_f(t,e,r,Vu,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else _f(t,e,r,null,n)}}var Vu=null;function vd(t,e,n,r){if(Vu=null,t=Bp(r),t=qi(t),t!==null)if(e=Po(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ix(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Vu=t,null}function xx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Q_()){case Up:return 1;case ax:return 4;case Bu:case K_:return 16;case ux:return 536870912;default:return 16}default:return 16}}var ai=null,Yp=null,pu=null;function vx(){if(pu)return pu;var t,e=Yp,n=e.length,r,i="value"in ai?ai.value:ai.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return pu=i.slice(t,1<r?1-r:void 0)}function hu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fa(){return!0}function x0(){return!1}function En(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Fa:x0,this.isPropagationStopped=x0,this}return Le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fa)},persist:function(){},isPersistent:Fa}),e}var $s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xp=En($s),ya=Le({},$s,{view:0,detail:0}),uw=En(ya),ff,df,Js,zc=Le({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(ff=t.screenX-Js.screenX,df=t.screenY-Js.screenY):df=ff=0,Js=t),ff)},movementY:function(t){return"movementY"in t?t.movementY:df}}),v0=En(zc),cw=Le({},zc,{dataTransfer:0}),fw=En(cw),dw=Le({},ya,{relatedTarget:0}),pf=En(dw),pw=Le({},$s,{animationName:0,elapsedTime:0,pseudoElement:0}),hw=En(pw),mw=Le({},$s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gw=En(mw),xw=Le({},$s,{data:0}),y0=En(xw),vw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_w={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ww(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_w[t])?!!e[t]:!1}function Gp(){return ww}var Sw=Le({},ya,{key:function(t){if(t.key){var e=vw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gp,charCode:function(t){return t.type==="keypress"?hu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kw=En(Sw),Cw=Le({},zc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_0=En(Cw),Ew=Le({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gp}),Tw=En(Ew),jw=Le({},$s,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pw=En(jw),Ow=Le({},zc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zw=En(Ow),bw=[9,13,27,32],Qp=$r&&"CompositionEvent"in window,_l=null;$r&&"documentMode"in document&&(_l=document.documentMode);var Rw=$r&&"TextEvent"in window&&!_l,yx=$r&&(!Qp||_l&&8<_l&&11>=_l),w0=" ",S0=!1;function _x(t,e){switch(t){case"keyup":return bw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ho=!1;function Nw(t,e){switch(t){case"compositionend":return wx(e);case"keypress":return e.which!==32?null:(S0=!0,w0);case"textInput":return t=e.data,t===w0&&S0?null:t;default:return null}}function Mw(t,e){if(Ho)return t==="compositionend"||!Qp&&_x(t,e)?(t=vx(),pu=Yp=ai=null,Ho=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return yx&&e.locale!=="ko"?null:e.data;default:return null}}var Iw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function k0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Iw[t.type]:e==="textarea"}function Sx(t,e,n,r){Jg(r),e=Hu(e,"onChange"),0<e.length&&(n=new Xp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wl=null,Xl=null;function Lw(t){Nx(t,0)}function bc(t){var e=Go(t);if(Yg(e))return t}function Fw(t,e){if(t==="change")return e}var kx=!1;if($r){var hf;if($r){var mf="oninput"in document;if(!mf){var C0=document.createElement("div");C0.setAttribute("oninput","return;"),mf=typeof C0.oninput=="function"}hf=mf}else hf=!1;kx=hf&&(!document.documentMode||9<document.documentMode)}function E0(){wl&&(wl.detachEvent("onpropertychange",Cx),Xl=wl=null)}function Cx(t){if(t.propertyName==="value"&&bc(Xl)){var e=[];Sx(e,Xl,t,Bp(t)),rx(Lw,e)}}function Dw(t,e,n){t==="focusin"?(E0(),wl=e,Xl=n,wl.attachEvent("onpropertychange",Cx)):t==="focusout"&&E0()}function $w(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bc(Xl)}function Aw(t,e){if(t==="click")return bc(e)}function Bw(t,e){if(t==="input"||t==="change")return bc(e)}function Uw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var sr=typeof Object.is=="function"?Object.is:Uw;function Gl(t,e){if(sr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ed.call(e,i)||!sr(t[i],e[i]))return!1}return!0}function T0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function j0(t,e){var n=T0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=T0(n)}}function Ex(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ex(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Tx(){for(var t=window,e=Du();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Du(t.document)}return e}function Kp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ww(t){var e=Tx(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ex(n.ownerDocument.documentElement,n)){if(r!==null&&Kp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=j0(n,o);var s=j0(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Vw=$r&&"documentMode"in document&&11>=document.documentMode,Yo=null,yd=null,Sl=null,_d=!1;function P0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_d||Yo==null||Yo!==Du(r)||(r=Yo,"selectionStart"in r&&Kp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sl&&Gl(Sl,r)||(Sl=r,r=Hu(yd,"onSelect"),0<r.length&&(e=new Xp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Yo)))}function Da(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xo={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionend:Da("Transition","TransitionEnd")},gf={},jx={};$r&&(jx=document.createElement("div").style,"AnimationEvent"in window||(delete Xo.animationend.animation,delete Xo.animationiteration.animation,delete Xo.animationstart.animation),"TransitionEvent"in window||delete Xo.transitionend.transition);function Rc(t){if(gf[t])return gf[t];if(!Xo[t])return t;var e=Xo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jx)return gf[t]=e[n];return t}var Px=Rc("animationend"),Ox=Rc("animationiteration"),zx=Rc("animationstart"),bx=Rc("transitionend"),Rx=new Map,O0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mi(t,e){Rx.set(t,e),jo(e,[t])}for(var xf=0;xf<O0.length;xf++){var vf=O0[xf],Hw=vf.toLowerCase(),Yw=vf[0].toUpperCase()+vf.slice(1);Mi(Hw,"on"+Yw)}Mi(Px,"onAnimationEnd");Mi(Ox,"onAnimationIteration");Mi(zx,"onAnimationStart");Mi("dblclick","onDoubleClick");Mi("focusin","onFocus");Mi("focusout","onBlur");Mi(bx,"onTransitionEnd");ys("onMouseEnter",["mouseout","mouseover"]);ys("onMouseLeave",["mouseout","mouseover"]);ys("onPointerEnter",["pointerout","pointerover"]);ys("onPointerLeave",["pointerout","pointerover"]);jo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jo("onBeforeInput",["compositionend","keypress","textInput","paste"]);jo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ul));function z0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,H_(r,e,void 0,t),t.currentTarget=null}function Nx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;z0(i,l,u),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;z0(i,l,u),o=a}}}if(Au)throw t=md,Au=!1,md=null,t}function we(t,e){var n=e[Ed];n===void 0&&(n=e[Ed]=new Set);var r=t+"__bubble";n.has(r)||(Mx(e,t,2,!1),n.add(r))}function yf(t,e,n){var r=0;e&&(r|=4),Mx(n,t,r,e)}var $a="_reactListening"+Math.random().toString(36).slice(2);function Ql(t){if(!t[$a]){t[$a]=!0,Bg.forEach(function(n){n!=="selectionchange"&&(Xw.has(n)||yf(n,!1,t),yf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$a]||(e[$a]=!0,yf("selectionchange",!1,e))}}function Mx(t,e,n,r){switch(xx(e)){case 1:var i=lw;break;case 4:i=aw;break;default:i=Hp}n=i.bind(null,e,n,t),i=void 0,!hd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function _f(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=qi(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}rx(function(){var u=o,c=Bp(n),d=[];e:{var p=Rx.get(t);if(p!==void 0){var h=Xp,y=t;switch(t){case"keypress":if(hu(n)===0)break e;case"keydown":case"keyup":h=kw;break;case"focusin":y="focus",h=pf;break;case"focusout":y="blur",h=pf;break;case"beforeblur":case"afterblur":h=pf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=v0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=fw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Tw;break;case Px:case Ox:case zx:h=hw;break;case bx:h=Pw;break;case"scroll":h=uw;break;case"wheel":h=zw;break;case"copy":case"cut":case"paste":h=gw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=_0}var g=(e&4)!==0,w=!g&&t==="scroll",x=g?p!==null?p+"Capture":null:p;g=[];for(var m=u,v;m!==null;){v=m;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,x!==null&&(_=Wl(m,x),_!=null&&g.push(Kl(m,_,v)))),w)break;m=m.return}0<g.length&&(p=new h(p,y,null,n,c),d.push({event:p,listeners:g}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",p&&n!==dd&&(y=n.relatedTarget||n.fromElement)&&(qi(y)||y[Ar]))break e;if((h||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,h?(y=n.relatedTarget||n.toElement,h=u,y=y?qi(y):null,y!==null&&(w=Po(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=u),h!==y)){if(g=v0,_="onMouseLeave",x="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(g=_0,_="onPointerLeave",x="onPointerEnter",m="pointer"),w=h==null?p:Go(h),v=y==null?p:Go(y),p=new g(_,m+"leave",h,n,c),p.target=w,p.relatedTarget=v,_=null,qi(c)===u&&(g=new g(x,m+"enter",y,n,c),g.target=v,g.relatedTarget=w,_=g),w=_,h&&y)t:{for(g=h,x=y,m=0,v=g;v;v=Io(v))m++;for(v=0,_=x;_;_=Io(_))v++;for(;0<m-v;)g=Io(g),m--;for(;0<v-m;)x=Io(x),v--;for(;m--;){if(g===x||x!==null&&g===x.alternate)break t;g=Io(g),x=Io(x)}g=null}else g=null;h!==null&&b0(d,p,h,g,!1),y!==null&&w!==null&&b0(d,w,y,g,!0)}}e:{if(p=u?Go(u):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var C=Fw;else if(k0(p))if(kx)C=Bw;else{C=$w;var E=Dw}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=Aw);if(C&&(C=C(t,u))){Sx(d,C,n,c);break e}E&&E(t,p,u),t==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&ld(p,"number",p.value)}switch(E=u?Go(u):window,t){case"focusin":(k0(E)||E.contentEditable==="true")&&(Yo=E,yd=u,Sl=null);break;case"focusout":Sl=yd=Yo=null;break;case"mousedown":_d=!0;break;case"contextmenu":case"mouseup":case"dragend":_d=!1,P0(d,n,c);break;case"selectionchange":if(Vw)break;case"keydown":case"keyup":P0(d,n,c)}var S;if(Qp)e:{switch(t){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Ho?_x(t,n)&&(j="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(yx&&n.locale!=="ko"&&(Ho||j!=="onCompositionStart"?j==="onCompositionEnd"&&Ho&&(S=vx()):(ai=c,Yp="value"in ai?ai.value:ai.textContent,Ho=!0)),E=Hu(u,j),0<E.length&&(j=new y0(j,t,null,n,c),d.push({event:j,listeners:E}),S?j.data=S:(S=wx(n),S!==null&&(j.data=S)))),(S=Rw?Nw(t,n):Mw(t,n))&&(u=Hu(u,"onBeforeInput"),0<u.length&&(c=new y0("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=S))}Nx(d,e)})}function Kl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Wl(t,n),o!=null&&r.unshift(Kl(t,o,i)),o=Wl(t,e),o!=null&&r.push(Kl(t,o,i))),t=t.return}return r}function Io(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function b0(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Wl(n,o),a!=null&&s.unshift(Kl(n,a,l))):i||(a=Wl(n,o),a!=null&&s.push(Kl(n,a,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Gw=/\r\n?/g,Qw=/\u0000|\uFFFD/g;function R0(t){return(typeof t=="string"?t:""+t).replace(Gw,`
`).replace(Qw,"")}function Aa(t,e,n){if(e=R0(e),R0(t)!==e&&n)throw Error(N(425))}function Yu(){}var wd=null,Sd=null;function kd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cd=typeof setTimeout=="function"?setTimeout:void 0,Kw=typeof clearTimeout=="function"?clearTimeout:void 0,N0=typeof Promise=="function"?Promise:void 0,qw=typeof queueMicrotask=="function"?queueMicrotask:typeof N0<"u"?function(t){return N0.resolve(null).then(t).catch(Zw)}:Cd;function Zw(t){setTimeout(function(){throw t})}function wf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Yl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yl(e)}function yi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function M0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var As=Math.random().toString(36).slice(2),mr="__reactFiber$"+As,ql="__reactProps$"+As,Ar="__reactContainer$"+As,Ed="__reactEvents$"+As,Jw="__reactListeners$"+As,eS="__reactHandles$"+As;function qi(t){var e=t[mr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ar]||n[mr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=M0(t);t!==null;){if(n=t[mr])return n;t=M0(t)}return e}t=n,n=t.parentNode}return null}function _a(t){return t=t[mr]||t[Ar],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Go(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(N(33))}function Nc(t){return t[ql]||null}var Td=[],Qo=-1;function Ii(t){return{current:t}}function Ce(t){0>Qo||(t.current=Td[Qo],Td[Qo]=null,Qo--)}function _e(t,e){Qo++,Td[Qo]=t.current,t.current=e}var zi={},Mt=Ii(zi),Jt=Ii(!1),go=zi;function _s(t,e){var n=t.type.contextTypes;if(!n)return zi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function en(t){return t=t.childContextTypes,t!=null}function Xu(){Ce(Jt),Ce(Mt)}function I0(t,e,n){if(Mt.current!==zi)throw Error(N(168));_e(Mt,e),_e(Jt,n)}function Ix(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(N(108,D_(t)||"Unknown",i));return Le({},n,r)}function Gu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zi,go=Mt.current,_e(Mt,t),_e(Jt,Jt.current),!0}function L0(t,e,n){var r=t.stateNode;if(!r)throw Error(N(169));n?(t=Ix(t,e,go),r.__reactInternalMemoizedMergedChildContext=t,Ce(Jt),Ce(Mt),_e(Mt,t)):Ce(Jt),_e(Jt,n)}var zr=null,Mc=!1,Sf=!1;function Lx(t){zr===null?zr=[t]:zr.push(t)}function tS(t){Mc=!0,Lx(t)}function Li(){if(!Sf&&zr!==null){Sf=!0;var t=0,e=he;try{var n=zr;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}zr=null,Mc=!1}catch(i){throw zr!==null&&(zr=zr.slice(t+1)),lx(Up,Li),i}finally{he=e,Sf=!1}}return null}var Ko=[],qo=0,Qu=null,Ku=0,bn=[],Rn=0,xo=null,Nr=1,Mr="";function Yi(t,e){Ko[qo++]=Ku,Ko[qo++]=Qu,Qu=t,Ku=e}function Fx(t,e,n){bn[Rn++]=Nr,bn[Rn++]=Mr,bn[Rn++]=xo,xo=t;var r=Nr;t=Mr;var i=32-rr(r)-1;r&=~(1<<i),n+=1;var o=32-rr(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Nr=1<<32-rr(e)+i|n<<i|r,Mr=o+t}else Nr=1<<o|n<<i|r,Mr=t}function qp(t){t.return!==null&&(Yi(t,1),Fx(t,1,0))}function Zp(t){for(;t===Qu;)Qu=Ko[--qo],Ko[qo]=null,Ku=Ko[--qo],Ko[qo]=null;for(;t===xo;)xo=bn[--Rn],bn[Rn]=null,Mr=bn[--Rn],bn[Rn]=null,Nr=bn[--Rn],bn[Rn]=null}var _n=null,vn=null,je=!1,tr=null;function Dx(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function F0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_n=t,vn=yi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_n=t,vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xo!==null?{id:Nr,overflow:Mr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_n=t,vn=null,!0):!1;default:return!1}}function jd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pd(t){if(je){var e=vn;if(e){var n=e;if(!F0(t,e)){if(jd(t))throw Error(N(418));e=yi(n.nextSibling);var r=_n;e&&F0(t,e)?Dx(r,n):(t.flags=t.flags&-4097|2,je=!1,_n=t)}}else{if(jd(t))throw Error(N(418));t.flags=t.flags&-4097|2,je=!1,_n=t}}}function D0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_n=t}function Ba(t){if(t!==_n)return!1;if(!je)return D0(t),je=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!kd(t.type,t.memoizedProps)),e&&(e=vn)){if(jd(t))throw $x(),Error(N(418));for(;e;)Dx(t,e),e=yi(e.nextSibling)}if(D0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(N(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vn=yi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vn=null}}else vn=_n?yi(t.stateNode.nextSibling):null;return!0}function $x(){for(var t=vn;t;)t=yi(t.nextSibling)}function ws(){vn=_n=null,je=!1}function Jp(t){tr===null?tr=[t]:tr.push(t)}var nS=Hr.ReactCurrentBatchConfig;function el(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,t))}return t}function Ua(t,e){throw t=Object.prototype.toString.call(e),Error(N(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $0(t){var e=t._init;return e(t._payload)}function Ax(t){function e(x,m){if(t){var v=x.deletions;v===null?(x.deletions=[m],x.flags|=16):v.push(m)}}function n(x,m){if(!t)return null;for(;m!==null;)e(x,m),m=m.sibling;return null}function r(x,m){for(x=new Map;m!==null;)m.key!==null?x.set(m.key,m):x.set(m.index,m),m=m.sibling;return x}function i(x,m){return x=ki(x,m),x.index=0,x.sibling=null,x}function o(x,m,v){return x.index=v,t?(v=x.alternate,v!==null?(v=v.index,v<m?(x.flags|=2,m):v):(x.flags|=2,m)):(x.flags|=1048576,m)}function s(x){return t&&x.alternate===null&&(x.flags|=2),x}function l(x,m,v,_){return m===null||m.tag!==6?(m=Of(v,x.mode,_),m.return=x,m):(m=i(m,v),m.return=x,m)}function a(x,m,v,_){var C=v.type;return C===Vo?c(x,m,v.props.children,_,v.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ii&&$0(C)===m.type)?(_=i(m,v.props),_.ref=el(x,m,v),_.return=x,_):(_=wu(v.type,v.key,v.props,null,x.mode,_),_.ref=el(x,m,v),_.return=x,_)}function u(x,m,v,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=zf(v,x.mode,_),m.return=x,m):(m=i(m,v.children||[]),m.return=x,m)}function c(x,m,v,_,C){return m===null||m.tag!==7?(m=oo(v,x.mode,_,C),m.return=x,m):(m=i(m,v),m.return=x,m)}function d(x,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Of(""+m,x.mode,v),m.return=x,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ba:return v=wu(m.type,m.key,m.props,null,x.mode,v),v.ref=el(x,null,m),v.return=x,v;case Wo:return m=zf(m,x.mode,v),m.return=x,m;case ii:var _=m._init;return d(x,_(m._payload),v)}if(ll(m)||Qs(m))return m=oo(m,x.mode,v,null),m.return=x,m;Ua(x,m)}return null}function p(x,m,v,_){var C=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:l(x,m,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ba:return v.key===C?a(x,m,v,_):null;case Wo:return v.key===C?u(x,m,v,_):null;case ii:return C=v._init,p(x,m,C(v._payload),_)}if(ll(v)||Qs(v))return C!==null?null:c(x,m,v,_,null);Ua(x,v)}return null}function h(x,m,v,_,C){if(typeof _=="string"&&_!==""||typeof _=="number")return x=x.get(v)||null,l(m,x,""+_,C);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ba:return x=x.get(_.key===null?v:_.key)||null,a(m,x,_,C);case Wo:return x=x.get(_.key===null?v:_.key)||null,u(m,x,_,C);case ii:var E=_._init;return h(x,m,v,E(_._payload),C)}if(ll(_)||Qs(_))return x=x.get(v)||null,c(m,x,_,C,null);Ua(m,_)}return null}function y(x,m,v,_){for(var C=null,E=null,S=m,j=m=0,z=null;S!==null&&j<v.length;j++){S.index>j?(z=S,S=null):z=S.sibling;var P=p(x,S,v[j],_);if(P===null){S===null&&(S=z);break}t&&S&&P.alternate===null&&e(x,S),m=o(P,m,j),E===null?C=P:E.sibling=P,E=P,S=z}if(j===v.length)return n(x,S),je&&Yi(x,j),C;if(S===null){for(;j<v.length;j++)S=d(x,v[j],_),S!==null&&(m=o(S,m,j),E===null?C=S:E.sibling=S,E=S);return je&&Yi(x,j),C}for(S=r(x,S);j<v.length;j++)z=h(S,x,j,v[j],_),z!==null&&(t&&z.alternate!==null&&S.delete(z.key===null?j:z.key),m=o(z,m,j),E===null?C=z:E.sibling=z,E=z);return t&&S.forEach(function($){return e(x,$)}),je&&Yi(x,j),C}function g(x,m,v,_){var C=Qs(v);if(typeof C!="function")throw Error(N(150));if(v=C.call(v),v==null)throw Error(N(151));for(var E=C=null,S=m,j=m=0,z=null,P=v.next();S!==null&&!P.done;j++,P=v.next()){S.index>j?(z=S,S=null):z=S.sibling;var $=p(x,S,P.value,_);if($===null){S===null&&(S=z);break}t&&S&&$.alternate===null&&e(x,S),m=o($,m,j),E===null?C=$:E.sibling=$,E=$,S=z}if(P.done)return n(x,S),je&&Yi(x,j),C;if(S===null){for(;!P.done;j++,P=v.next())P=d(x,P.value,_),P!==null&&(m=o(P,m,j),E===null?C=P:E.sibling=P,E=P);return je&&Yi(x,j),C}for(S=r(x,S);!P.done;j++,P=v.next())P=h(S,x,j,P.value,_),P!==null&&(t&&P.alternate!==null&&S.delete(P.key===null?j:P.key),m=o(P,m,j),E===null?C=P:E.sibling=P,E=P);return t&&S.forEach(function(M){return e(x,M)}),je&&Yi(x,j),C}function w(x,m,v,_){if(typeof v=="object"&&v!==null&&v.type===Vo&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ba:e:{for(var C=v.key,E=m;E!==null;){if(E.key===C){if(C=v.type,C===Vo){if(E.tag===7){n(x,E.sibling),m=i(E,v.props.children),m.return=x,x=m;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ii&&$0(C)===E.type){n(x,E.sibling),m=i(E,v.props),m.ref=el(x,E,v),m.return=x,x=m;break e}n(x,E);break}else e(x,E);E=E.sibling}v.type===Vo?(m=oo(v.props.children,x.mode,_,v.key),m.return=x,x=m):(_=wu(v.type,v.key,v.props,null,x.mode,_),_.ref=el(x,m,v),_.return=x,x=_)}return s(x);case Wo:e:{for(E=v.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(x,m.sibling),m=i(m,v.children||[]),m.return=x,x=m;break e}else{n(x,m);break}else e(x,m);m=m.sibling}m=zf(v,x.mode,_),m.return=x,x=m}return s(x);case ii:return E=v._init,w(x,m,E(v._payload),_)}if(ll(v))return y(x,m,v,_);if(Qs(v))return g(x,m,v,_);Ua(x,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(x,m.sibling),m=i(m,v),m.return=x,x=m):(n(x,m),m=Of(v,x.mode,_),m.return=x,x=m),s(x)):n(x,m)}return w}var Ss=Ax(!0),Bx=Ax(!1),qu=Ii(null),Zu=null,Zo=null,eh=null;function th(){eh=Zo=Zu=null}function nh(t){var e=qu.current;Ce(qu),t._currentValue=e}function Od(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function us(t,e){Zu=t,eh=Zo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(qt=!0),t.firstContext=null)}function Bn(t){var e=t._currentValue;if(eh!==t)if(t={context:t,memoizedValue:e,next:null},Zo===null){if(Zu===null)throw Error(N(308));Zo=t,Zu.dependencies={lanes:0,firstContext:t}}else Zo=Zo.next=t;return e}var Zi=null;function rh(t){Zi===null?Zi=[t]:Zi.push(t)}function Ux(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,rh(e)):(n.next=i.next,i.next=n),e.interleaved=n,Br(t,r)}function Br(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var oi=!1;function ih(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Lr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _i(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Br(t,n)}return i=r.interleaved,i===null?(e.next=e,rh(r)):(e.next=i.next,i.next=e),r.interleaved=e,Br(t,n)}function mu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wp(t,n)}}function A0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ju(t,e,n,r){var i=t.updateQueue;oi=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?o=u:s.next=u,s=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==s&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(o!==null){var d=i.baseState;s=0,c=u=a=null,l=o;do{var p=l.lane,h=l.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=t,g=l;switch(p=e,h=n,g.tag){case 1:if(y=g.payload,typeof y=="function"){d=y.call(h,d,p);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=g.payload,p=typeof y=="function"?y.call(h,d,p):y,p==null)break e;d=Le({},d,p);break e;case 2:oi=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else h={eventTime:h,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=h,a=d):c=c.next=h,s|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);yo|=s,t.lanes=s,t.memoizedState=d}}function B0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var wa={},_r=Ii(wa),Zl=Ii(wa),Jl=Ii(wa);function Ji(t){if(t===wa)throw Error(N(174));return t}function oh(t,e){switch(_e(Jl,e),_e(Zl,t),_e(_r,wa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ud(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ud(e,t)}Ce(_r),_e(_r,e)}function ks(){Ce(_r),Ce(Zl),Ce(Jl)}function Vx(t){Ji(Jl.current);var e=Ji(_r.current),n=ud(e,t.type);e!==n&&(_e(Zl,t),_e(_r,n))}function sh(t){Zl.current===t&&(Ce(_r),Ce(Zl))}var Re=Ii(0);function ec(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kf=[];function lh(){for(var t=0;t<kf.length;t++)kf[t]._workInProgressVersionPrimary=null;kf.length=0}var gu=Hr.ReactCurrentDispatcher,Cf=Hr.ReactCurrentBatchConfig,vo=0,Ie=null,ot=null,dt=null,tc=!1,kl=!1,ea=0,rS=0;function Tt(){throw Error(N(321))}function ah(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!sr(t[n],e[n]))return!1;return!0}function uh(t,e,n,r,i,o){if(vo=o,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gu.current=t===null||t.memoizedState===null?lS:aS,t=n(r,i),kl){o=0;do{if(kl=!1,ea=0,25<=o)throw Error(N(301));o+=1,dt=ot=null,e.updateQueue=null,gu.current=uS,t=n(r,i)}while(kl)}if(gu.current=nc,e=ot!==null&&ot.next!==null,vo=0,dt=ot=Ie=null,tc=!1,e)throw Error(N(300));return t}function ch(){var t=ea!==0;return ea=0,t}function fr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?Ie.memoizedState=dt=t:dt=dt.next=t,dt}function Un(){if(ot===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=ot.next;var e=dt===null?Ie.memoizedState:dt.next;if(e!==null)dt=e,ot=t;else{if(t===null)throw Error(N(310));ot=t,t={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},dt===null?Ie.memoizedState=dt=t:dt=dt.next=t}return dt}function ta(t,e){return typeof e=="function"?e(t):e}function Ef(t){var e=Un(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=ot,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,u=o;do{var c=u.lane;if((vo&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,s=r):a=a.next=d,Ie.lanes|=c,yo|=c}u=u.next}while(u!==null&&u!==o);a===null?s=r:a.next=l,sr(r,e.memoizedState)||(qt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Ie.lanes|=o,yo|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Tf(t){var e=Un(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);sr(o,e.memoizedState)||(qt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function Hx(){}function Yx(t,e){var n=Ie,r=Un(),i=e(),o=!sr(r.memoizedState,i);if(o&&(r.memoizedState=i,qt=!0),r=r.queue,fh(Qx.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||dt!==null&&dt.memoizedState.tag&1){if(n.flags|=2048,na(9,Gx.bind(null,n,r,i,e),void 0,null),mt===null)throw Error(N(349));vo&30||Xx(n,e,i)}return i}function Xx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gx(t,e,n,r){e.value=n,e.getSnapshot=r,Kx(e)&&qx(t)}function Qx(t,e,n){return n(function(){Kx(e)&&qx(t)})}function Kx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!sr(t,n)}catch{return!0}}function qx(t){var e=Br(t,1);e!==null&&ir(e,t,1,-1)}function U0(t){var e=fr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},e.queue=t,t=t.dispatch=sS.bind(null,Ie,t),[e.memoizedState,t]}function na(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Zx(){return Un().memoizedState}function xu(t,e,n,r){var i=fr();Ie.flags|=t,i.memoizedState=na(1|e,n,void 0,r===void 0?null:r)}function Ic(t,e,n,r){var i=Un();r=r===void 0?null:r;var o=void 0;if(ot!==null){var s=ot.memoizedState;if(o=s.destroy,r!==null&&ah(r,s.deps)){i.memoizedState=na(e,n,o,r);return}}Ie.flags|=t,i.memoizedState=na(1|e,n,o,r)}function W0(t,e){return xu(8390656,8,t,e)}function fh(t,e){return Ic(2048,8,t,e)}function Jx(t,e){return Ic(4,2,t,e)}function e1(t,e){return Ic(4,4,t,e)}function t1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function n1(t,e,n){return n=n!=null?n.concat([t]):null,Ic(4,4,t1.bind(null,e,t),n)}function dh(){}function r1(t,e){var n=Un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ah(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function i1(t,e){var n=Un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ah(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function o1(t,e,n){return vo&21?(sr(n,e)||(n=cx(),Ie.lanes|=n,yo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,qt=!0),t.memoizedState=n)}function iS(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=Cf.transition;Cf.transition={};try{t(!1),e()}finally{he=n,Cf.transition=r}}function s1(){return Un().memoizedState}function oS(t,e,n){var r=Si(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},l1(t))a1(e,n);else if(n=Ux(t,e,n,r),n!==null){var i=Ht();ir(n,t,r,i),u1(n,e,r)}}function sS(t,e,n){var r=Si(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(l1(t))a1(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,sr(l,s)){var a=e.interleaved;a===null?(i.next=i,rh(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Ux(t,e,i,r),n!==null&&(i=Ht(),ir(n,t,r,i),u1(n,e,r))}}function l1(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function a1(t,e){kl=tc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function u1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wp(t,n)}}var nc={readContext:Bn,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useInsertionEffect:Tt,useLayoutEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useMutableSource:Tt,useSyncExternalStore:Tt,useId:Tt,unstable_isNewReconciler:!1},lS={readContext:Bn,useCallback:function(t,e){return fr().memoizedState=[t,e===void 0?null:e],t},useContext:Bn,useEffect:W0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xu(4194308,4,t1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xu(4194308,4,t,e)},useInsertionEffect:function(t,e){return xu(4,2,t,e)},useMemo:function(t,e){var n=fr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=fr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=oS.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=fr();return t={current:t},e.memoizedState=t},useState:U0,useDebugValue:dh,useDeferredValue:function(t){return fr().memoizedState=t},useTransition:function(){var t=U0(!1),e=t[0];return t=iS.bind(null,t[1]),fr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,i=fr();if(je){if(n===void 0)throw Error(N(407));n=n()}else{if(n=e(),mt===null)throw Error(N(349));vo&30||Xx(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,W0(Qx.bind(null,r,o,t),[t]),r.flags|=2048,na(9,Gx.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=fr(),e=mt.identifierPrefix;if(je){var n=Mr,r=Nr;n=(r&~(1<<32-rr(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=rS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},aS={readContext:Bn,useCallback:r1,useContext:Bn,useEffect:fh,useImperativeHandle:n1,useInsertionEffect:Jx,useLayoutEffect:e1,useMemo:i1,useReducer:Ef,useRef:Zx,useState:function(){return Ef(ta)},useDebugValue:dh,useDeferredValue:function(t){var e=Un();return o1(e,ot.memoizedState,t)},useTransition:function(){var t=Ef(ta)[0],e=Un().memoizedState;return[t,e]},useMutableSource:Hx,useSyncExternalStore:Yx,useId:s1,unstable_isNewReconciler:!1},uS={readContext:Bn,useCallback:r1,useContext:Bn,useEffect:fh,useImperativeHandle:n1,useInsertionEffect:Jx,useLayoutEffect:e1,useMemo:i1,useReducer:Tf,useRef:Zx,useState:function(){return Tf(ta)},useDebugValue:dh,useDeferredValue:function(t){var e=Un();return ot===null?e.memoizedState=t:o1(e,ot.memoizedState,t)},useTransition:function(){var t=Tf(ta)[0],e=Un().memoizedState;return[t,e]},useMutableSource:Hx,useSyncExternalStore:Yx,useId:s1,unstable_isNewReconciler:!1};function Jn(t,e){if(t&&t.defaultProps){e=Le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function zd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Lc={isMounted:function(t){return(t=t._reactInternals)?Po(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ht(),i=Si(t),o=Lr(r,i);o.payload=e,n!=null&&(o.callback=n),e=_i(t,o,i),e!==null&&(ir(e,t,i,r),mu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ht(),i=Si(t),o=Lr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=_i(t,o,i),e!==null&&(ir(e,t,i,r),mu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ht(),r=Si(t),i=Lr(n,r);i.tag=2,e!=null&&(i.callback=e),e=_i(t,i,r),e!==null&&(ir(e,t,r,n),mu(e,t,r))}};function V0(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Gl(n,r)||!Gl(i,o):!0}function c1(t,e,n){var r=!1,i=zi,o=e.contextType;return typeof o=="object"&&o!==null?o=Bn(o):(i=en(e)?go:Mt.current,r=e.contextTypes,o=(r=r!=null)?_s(t,i):zi),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Lc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function H0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Lc.enqueueReplaceState(e,e.state,null)}function bd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ih(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Bn(o):(o=en(e)?go:Mt.current,i.context=_s(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(zd(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Lc.enqueueReplaceState(i,i.state,null),Ju(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Cs(t,e){try{var n="",r=e;do n+=F_(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function jf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Rd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var cS=typeof WeakMap=="function"?WeakMap:Map;function f1(t,e,n){n=Lr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ic||(ic=!0,Ud=r),Rd(t,e)},n}function d1(t,e,n){n=Lr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Rd(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Rd(t,e),typeof r!="function"&&(wi===null?wi=new Set([this]):wi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Y0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new cS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=CS.bind(null,t,e,n),e.then(t,t))}function X0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function G0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Lr(-1,1),e.tag=2,_i(n,e,1))),n.lanes|=1),t)}var fS=Hr.ReactCurrentOwner,qt=!1;function Dt(t,e,n,r){e.child=t===null?Bx(e,null,n,r):Ss(e,t.child,n,r)}function Q0(t,e,n,r,i){n=n.render;var o=e.ref;return us(e,i),r=uh(t,e,n,r,o,i),n=ch(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ur(t,e,i)):(je&&n&&qp(e),e.flags|=1,Dt(t,e,r,i),e.child)}function K0(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!_h(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,p1(t,e,o,r,i)):(t=wu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Gl,n(s,r)&&t.ref===e.ref)return Ur(t,e,i)}return e.flags|=1,t=ki(o,r),t.ref=e.ref,t.return=e,e.child=t}function p1(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Gl(o,r)&&t.ref===e.ref)if(qt=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(qt=!0);else return e.lanes=t.lanes,Ur(t,e,i)}return Nd(t,e,n,r,i)}function h1(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(es,pn),pn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(es,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,_e(es,pn),pn|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,_e(es,pn),pn|=r;return Dt(t,e,i,n),e.child}function m1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nd(t,e,n,r,i){var o=en(n)?go:Mt.current;return o=_s(e,o),us(e,i),n=uh(t,e,n,r,o,i),r=ch(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ur(t,e,i)):(je&&r&&qp(e),e.flags|=1,Dt(t,e,n,i),e.child)}function q0(t,e,n,r,i){if(en(n)){var o=!0;Gu(e)}else o=!1;if(us(e,i),e.stateNode===null)vu(t,e),c1(e,n,r),bd(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Bn(u):(u=en(n)?go:Mt.current,u=_s(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&H0(e,s,r,u),oi=!1;var p=e.memoizedState;s.state=p,Ju(e,r,s,i),a=e.memoizedState,l!==r||p!==a||Jt.current||oi?(typeof c=="function"&&(zd(e,n,c,r),a=e.memoizedState),(l=oi||V0(e,n,l,r,p,a,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,Wx(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Jn(e.type,l),s.props=u,d=e.pendingProps,p=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=Bn(a):(a=en(n)?go:Mt.current,a=_s(e,a));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==d||p!==a)&&H0(e,s,r,a),oi=!1,p=e.memoizedState,s.state=p,Ju(e,r,s,i);var y=e.memoizedState;l!==d||p!==y||Jt.current||oi?(typeof h=="function"&&(zd(e,n,h,r),y=e.memoizedState),(u=oi||V0(e,n,u,r,p,y,a)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,a)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),s.props=r,s.state=y,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Md(t,e,n,r,o,i)}function Md(t,e,n,r,i,o){m1(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&L0(e,n,!1),Ur(t,e,o);r=e.stateNode,fS.current=e;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Ss(e,t.child,null,o),e.child=Ss(e,null,l,o)):Dt(t,e,l,o),e.memoizedState=r.state,i&&L0(e,n,!0),e.child}function g1(t){var e=t.stateNode;e.pendingContext?I0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&I0(t,e.context,!1),oh(t,e.containerInfo)}function Z0(t,e,n,r,i){return ws(),Jp(i),e.flags|=256,Dt(t,e,n,r),e.child}var Id={dehydrated:null,treeContext:null,retryLane:0};function Ld(t){return{baseLanes:t,cachePool:null,transitions:null}}function x1(t,e,n){var r=e.pendingProps,i=Re.current,o=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(Re,i&1),t===null)return Pd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=$c(s,r,0,null),t=oo(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Ld(n),e.memoizedState=Id,t):ph(e,s));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return dS(t,e,s,r,l,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=ki(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=ki(l,o):(o=oo(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Ld(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Id,r}return o=t.child,t=o.sibling,r=ki(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ph(t,e){return e=$c({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wa(t,e,n,r){return r!==null&&Jp(r),Ss(e,t.child,null,n),t=ph(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function dS(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=jf(Error(N(422))),Wa(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=$c({mode:"visible",children:r.children},i,0,null),o=oo(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Ss(e,t.child,null,s),e.child.memoizedState=Ld(s),e.memoizedState=Id,o);if(!(e.mode&1))return Wa(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(N(419)),r=jf(o,r,void 0),Wa(t,e,s,r)}if(l=(s&t.childLanes)!==0,qt||l){if(r=mt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Br(t,i),ir(r,t,i,-1))}return yh(),r=jf(Error(N(421))),Wa(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ES.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,vn=yi(i.nextSibling),_n=e,je=!0,tr=null,t!==null&&(bn[Rn++]=Nr,bn[Rn++]=Mr,bn[Rn++]=xo,Nr=t.id,Mr=t.overflow,xo=e),e=ph(e,r.children),e.flags|=4096,e)}function J0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Od(t.return,e,n)}function Pf(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function v1(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Dt(t,e,r.children,n),r=Re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&J0(t,n,e);else if(t.tag===19)J0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(Re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ec(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Pf(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ec(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Pf(e,!0,n,null,o);break;case"together":Pf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ur(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),yo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(N(153));if(e.child!==null){for(t=e.child,n=ki(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ki(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function pS(t,e,n){switch(e.tag){case 3:g1(e),ws();break;case 5:Vx(e);break;case 1:en(e.type)&&Gu(e);break;case 4:oh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(qu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(Re,Re.current&1),e.flags|=128,null):n&e.child.childLanes?x1(t,e,n):(_e(Re,Re.current&1),t=Ur(t,e,n),t!==null?t.sibling:null);_e(Re,Re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return v1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Re,Re.current),r)break;return null;case 22:case 23:return e.lanes=0,h1(t,e,n)}return Ur(t,e,n)}var y1,Fd,_1,w1;y1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fd=function(){};_1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ji(_r.current);var o=null;switch(n){case"input":i=od(t,i),r=od(t,r),o=[];break;case"select":i=Le({},i,{value:void 0}),r=Le({},r,{value:void 0}),o=[];break;case"textarea":i=ad(t,i),r=ad(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Yu)}cd(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bl.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bl.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&we("scroll",t),o||l===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};w1=function(t,e,n,r){n!==r&&(e.flags|=4)};function tl(t,e){if(!je)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function hS(t,e,n){var r=e.pendingProps;switch(Zp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return en(e.type)&&Xu(),jt(e),null;case 3:return r=e.stateNode,ks(),Ce(Jt),Ce(Mt),lh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ba(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,tr!==null&&(Hd(tr),tr=null))),Fd(t,e),jt(e),null;case 5:sh(e);var i=Ji(Jl.current);if(n=e.type,t!==null&&e.stateNode!=null)_1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(N(166));return jt(e),null}if(t=Ji(_r.current),Ba(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[mr]=e,r[ql]=o,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<ul.length;i++)we(ul[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":a0(r,o),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},we("invalid",r);break;case"textarea":c0(r,o),we("invalid",r)}cd(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Aa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Aa(r.textContent,l,t),i=["children",""+l]):Bl.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&we("scroll",r)}switch(n){case"input":Ra(r),u0(r,o,!0);break;case"textarea":Ra(r),f0(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Yu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Qg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[mr]=e,t[ql]=r,y1(t,e,!1,!1),e.stateNode=t;e:{switch(s=fd(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<ul.length;i++)we(ul[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":a0(t,r),i=od(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Le({},r,{value:void 0}),we("invalid",t);break;case"textarea":c0(t,r),i=ad(t,r),we("invalid",t);break;default:i=r}cd(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?Zg(t,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Kg(t,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ul(t,a):typeof a=="number"&&Ul(t,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Bl.hasOwnProperty(o)?a!=null&&o==="onScroll"&&we("scroll",t):a!=null&&Fp(t,o,a,s))}switch(n){case"input":Ra(t),u0(t,r,!1);break;case"textarea":Ra(t),f0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Oi(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?os(t,!!r.multiple,o,!1):r.defaultValue!=null&&os(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Yu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)w1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(N(166));if(n=Ji(Jl.current),Ji(_r.current),Ba(e)){if(r=e.stateNode,n=e.memoizedProps,r[mr]=e,(o=r.nodeValue!==n)&&(t=_n,t!==null))switch(t.tag){case 3:Aa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Aa(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mr]=e,e.stateNode=r}return jt(e),null;case 13:if(Ce(Re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(je&&vn!==null&&e.mode&1&&!(e.flags&128))$x(),ws(),e.flags|=98560,o=!1;else if(o=Ba(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(N(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(N(317));o[mr]=e}else ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),o=!1}else tr!==null&&(Hd(tr),tr=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Re.current&1?lt===0&&(lt=3):yh())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return ks(),Fd(t,e),t===null&&Ql(e.stateNode.containerInfo),jt(e),null;case 10:return nh(e.type._context),jt(e),null;case 17:return en(e.type)&&Xu(),jt(e),null;case 19:if(Ce(Re),o=e.memoizedState,o===null)return jt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)tl(o,!1);else{if(lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=ec(t),s!==null){for(e.flags|=128,tl(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(Re,Re.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ye()>Es&&(e.flags|=128,r=!0,tl(o,!1),e.lanes=4194304)}else{if(!r)if(t=ec(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),tl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!je)return jt(e),null}else 2*Ye()-o.renderingStartTime>Es&&n!==1073741824&&(e.flags|=128,r=!0,tl(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ye(),e.sibling=null,n=Re.current,_e(Re,r?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return vh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?pn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(N(156,e.tag))}function mS(t,e){switch(Zp(e),e.tag){case 1:return en(e.type)&&Xu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ks(),Ce(Jt),Ce(Mt),lh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sh(e),null;case 13:if(Ce(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(N(340));ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ce(Re),null;case 4:return ks(),null;case 10:return nh(e.type._context),null;case 22:case 23:return vh(),null;case 24:return null;default:return null}}var Va=!1,zt=!1,gS=typeof WeakSet=="function"?WeakSet:Set,F=null;function Jo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function Dd(t,e,n){try{n()}catch(r){De(t,e,r)}}var em=!1;function xS(t,e){if(wd=Wu,t=Tx(),Kp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,u=0,c=0,d=t,p=null;t:for(;;){for(var h;d!==n||i!==0&&d.nodeType!==3||(l=s+i),d!==o||r!==0&&d.nodeType!==3||(a=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(h=d.firstChild)!==null;)p=d,d=h;for(;;){if(d===t)break t;if(p===n&&++u===i&&(l=s),p===o&&++c===r&&(a=s),(h=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=h}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sd={focusedElem:t,selectionRange:n},Wu=!1,F=e;F!==null;)if(e=F,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,F=t;else for(;F!==null;){e=F;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var g=y.memoizedProps,w=y.memoizedState,x=e.stateNode,m=x.getSnapshotBeforeUpdate(e.elementType===e.type?g:Jn(e.type,g),w);x.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(_){De(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,F=t;break}F=e.return}return y=em,em=!1,y}function Cl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Dd(e,n,o)}i=i.next}while(i!==r)}}function Fc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function $d(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function S1(t){var e=t.alternate;e!==null&&(t.alternate=null,S1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mr],delete e[ql],delete e[Ed],delete e[Jw],delete e[eS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function k1(t){return t.tag===5||t.tag===3||t.tag===4}function tm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||k1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yu));else if(r!==4&&(t=t.child,t!==null))for(Ad(t,e,n),t=t.sibling;t!==null;)Ad(t,e,n),t=t.sibling}function Bd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Bd(t,e,n),t=t.sibling;t!==null;)Bd(t,e,n),t=t.sibling}var yt=null,er=!1;function qr(t,e,n){for(n=n.child;n!==null;)C1(t,e,n),n=n.sibling}function C1(t,e,n){if(yr&&typeof yr.onCommitFiberUnmount=="function")try{yr.onCommitFiberUnmount(Oc,n)}catch{}switch(n.tag){case 5:zt||Jo(n,e);case 6:var r=yt,i=er;yt=null,qr(t,e,n),yt=r,er=i,yt!==null&&(er?(t=yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):yt.removeChild(n.stateNode));break;case 18:yt!==null&&(er?(t=yt,n=n.stateNode,t.nodeType===8?wf(t.parentNode,n):t.nodeType===1&&wf(t,n),Yl(t)):wf(yt,n.stateNode));break;case 4:r=yt,i=er,yt=n.stateNode.containerInfo,er=!0,qr(t,e,n),yt=r,er=i;break;case 0:case 11:case 14:case 15:if(!zt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Dd(n,e,s),i=i.next}while(i!==r)}qr(t,e,n);break;case 1:if(!zt&&(Jo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){De(n,e,l)}qr(t,e,n);break;case 21:qr(t,e,n);break;case 22:n.mode&1?(zt=(r=zt)||n.memoizedState!==null,qr(t,e,n),zt=r):qr(t,e,n);break;default:qr(t,e,n)}}function nm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new gS),e.forEach(function(r){var i=TS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:yt=l.stateNode,er=!1;break e;case 3:yt=l.stateNode.containerInfo,er=!0;break e;case 4:yt=l.stateNode.containerInfo,er=!0;break e}l=l.return}if(yt===null)throw Error(N(160));C1(o,s,i),yt=null,er=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){De(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)E1(e,t),e=e.sibling}function E1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kn(e,t),cr(t),r&4){try{Cl(3,t,t.return),Fc(3,t)}catch(g){De(t,t.return,g)}try{Cl(5,t,t.return)}catch(g){De(t,t.return,g)}}break;case 1:Kn(e,t),cr(t),r&512&&n!==null&&Jo(n,n.return);break;case 5:if(Kn(e,t),cr(t),r&512&&n!==null&&Jo(n,n.return),t.flags&32){var i=t.stateNode;try{Ul(i,"")}catch(g){De(t,t.return,g)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Xg(i,o),fd(l,s);var u=fd(l,o);for(s=0;s<a.length;s+=2){var c=a[s],d=a[s+1];c==="style"?Zg(i,d):c==="dangerouslySetInnerHTML"?Kg(i,d):c==="children"?Ul(i,d):Fp(i,c,d,u)}switch(l){case"input":sd(i,o);break;case"textarea":Gg(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?os(i,!!o.multiple,h,!1):p!==!!o.multiple&&(o.defaultValue!=null?os(i,!!o.multiple,o.defaultValue,!0):os(i,!!o.multiple,o.multiple?[]:"",!1))}i[ql]=o}catch(g){De(t,t.return,g)}}break;case 6:if(Kn(e,t),cr(t),r&4){if(t.stateNode===null)throw Error(N(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(g){De(t,t.return,g)}}break;case 3:if(Kn(e,t),cr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yl(e.containerInfo)}catch(g){De(t,t.return,g)}break;case 4:Kn(e,t),cr(t);break;case 13:Kn(e,t),cr(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(gh=Ye())),r&4&&nm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(u=zt)||c,Kn(e,t),zt=u):Kn(e,t),cr(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(F=t,c=t.child;c!==null;){for(d=F=c;F!==null;){switch(p=F,h=p.child,p.tag){case 0:case 11:case 14:case 15:Cl(4,p,p.return);break;case 1:Jo(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(g){De(r,n,g)}}break;case 5:Jo(p,p.return);break;case 22:if(p.memoizedState!==null){im(d);continue}}h!==null?(h.return=p,F=h):im(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,a=d.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=qg("display",s))}catch(g){De(t,t.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){De(t,t.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Kn(e,t),cr(t),r&4&&nm(t);break;case 21:break;default:Kn(e,t),cr(t)}}function cr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(k1(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ul(i,""),r.flags&=-33);var o=tm(t);Bd(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=tm(t);Ad(t,l,s);break;default:throw Error(N(161))}}catch(a){De(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vS(t,e,n){F=t,T1(t)}function T1(t,e,n){for(var r=(t.mode&1)!==0;F!==null;){var i=F,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Va;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||zt;l=Va;var u=zt;if(Va=s,(zt=a)&&!u)for(F=i;F!==null;)s=F,a=s.child,s.tag===22&&s.memoizedState!==null?om(i):a!==null?(a.return=s,F=a):om(i);for(;o!==null;)F=o,T1(o),o=o.sibling;F=i,Va=l,zt=u}rm(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,F=o):rm(t)}}function rm(t){for(;F!==null;){var e=F;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||Fc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!zt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Jn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&B0(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}B0(e,s,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Yl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}zt||e.flags&512&&$d(e)}catch(p){De(e,e.return,p)}}if(e===t){F=null;break}if(n=e.sibling,n!==null){n.return=e.return,F=n;break}F=e.return}}function im(t){for(;F!==null;){var e=F;if(e===t){F=null;break}var n=e.sibling;if(n!==null){n.return=e.return,F=n;break}F=e.return}}function om(t){for(;F!==null;){var e=F;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fc(4,e)}catch(a){De(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){De(e,i,a)}}var o=e.return;try{$d(e)}catch(a){De(e,o,a)}break;case 5:var s=e.return;try{$d(e)}catch(a){De(e,s,a)}}}catch(a){De(e,e.return,a)}if(e===t){F=null;break}var l=e.sibling;if(l!==null){l.return=e.return,F=l;break}F=e.return}}var yS=Math.ceil,rc=Hr.ReactCurrentDispatcher,hh=Hr.ReactCurrentOwner,$n=Hr.ReactCurrentBatchConfig,ae=0,mt=null,tt=null,wt=0,pn=0,es=Ii(0),lt=0,ra=null,yo=0,Dc=0,mh=0,El=null,Kt=null,gh=0,Es=1/0,jr=null,ic=!1,Ud=null,wi=null,Ha=!1,ui=null,oc=0,Tl=0,Wd=null,yu=-1,_u=0;function Ht(){return ae&6?Ye():yu!==-1?yu:yu=Ye()}function Si(t){return t.mode&1?ae&2&&wt!==0?wt&-wt:nS.transition!==null?(_u===0&&(_u=cx()),_u):(t=he,t!==0||(t=window.event,t=t===void 0?16:xx(t.type)),t):1}function ir(t,e,n,r){if(50<Tl)throw Tl=0,Wd=null,Error(N(185));va(t,n,r),(!(ae&2)||t!==mt)&&(t===mt&&(!(ae&2)&&(Dc|=n),lt===4&&li(t,wt)),tn(t,r),n===1&&ae===0&&!(e.mode&1)&&(Es=Ye()+500,Mc&&Li()))}function tn(t,e){var n=t.callbackNode;nw(t,e);var r=Uu(t,t===mt?wt:0);if(r===0)n!==null&&h0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&h0(n),e===1)t.tag===0?tS(sm.bind(null,t)):Lx(sm.bind(null,t)),qw(function(){!(ae&6)&&Li()}),n=null;else{switch(fx(r)){case 1:n=Up;break;case 4:n=ax;break;case 16:n=Bu;break;case 536870912:n=ux;break;default:n=Bu}n=M1(n,j1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function j1(t,e){if(yu=-1,_u=0,ae&6)throw Error(N(327));var n=t.callbackNode;if(cs()&&t.callbackNode!==n)return null;var r=Uu(t,t===mt?wt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=sc(t,r);else{e=r;var i=ae;ae|=2;var o=O1();(mt!==t||wt!==e)&&(jr=null,Es=Ye()+500,io(t,e));do try{SS();break}catch(l){P1(t,l)}while(!0);th(),rc.current=o,ae=i,tt!==null?e=0:(mt=null,wt=0,e=lt)}if(e!==0){if(e===2&&(i=gd(t),i!==0&&(r=i,e=Vd(t,i))),e===1)throw n=ra,io(t,0),li(t,r),tn(t,Ye()),n;if(e===6)li(t,r);else{if(i=t.current.alternate,!(r&30)&&!_S(i)&&(e=sc(t,r),e===2&&(o=gd(t),o!==0&&(r=o,e=Vd(t,o))),e===1))throw n=ra,io(t,0),li(t,r),tn(t,Ye()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(N(345));case 2:Xi(t,Kt,jr);break;case 3:if(li(t,r),(r&130023424)===r&&(e=gh+500-Ye(),10<e)){if(Uu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Cd(Xi.bind(null,t,Kt,jr),e);break}Xi(t,Kt,jr);break;case 4:if(li(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-rr(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yS(r/1960))-r,10<r){t.timeoutHandle=Cd(Xi.bind(null,t,Kt,jr),r);break}Xi(t,Kt,jr);break;case 5:Xi(t,Kt,jr);break;default:throw Error(N(329))}}}return tn(t,Ye()),t.callbackNode===n?j1.bind(null,t):null}function Vd(t,e){var n=El;return t.current.memoizedState.isDehydrated&&(io(t,e).flags|=256),t=sc(t,e),t!==2&&(e=Kt,Kt=n,e!==null&&Hd(e)),t}function Hd(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function _S(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!sr(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function li(t,e){for(e&=~mh,e&=~Dc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-rr(e),r=1<<n;t[n]=-1,e&=~r}}function sm(t){if(ae&6)throw Error(N(327));cs();var e=Uu(t,0);if(!(e&1))return tn(t,Ye()),null;var n=sc(t,e);if(t.tag!==0&&n===2){var r=gd(t);r!==0&&(e=r,n=Vd(t,r))}if(n===1)throw n=ra,io(t,0),li(t,e),tn(t,Ye()),n;if(n===6)throw Error(N(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xi(t,Kt,jr),tn(t,Ye()),null}function xh(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(Es=Ye()+500,Mc&&Li())}}function _o(t){ui!==null&&ui.tag===0&&!(ae&6)&&cs();var e=ae;ae|=1;var n=$n.transition,r=he;try{if($n.transition=null,he=1,t)return t()}finally{he=r,$n.transition=n,ae=e,!(ae&6)&&Li()}}function vh(){pn=es.current,Ce(es)}function io(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Kw(n)),tt!==null)for(n=tt.return;n!==null;){var r=n;switch(Zp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xu();break;case 3:ks(),Ce(Jt),Ce(Mt),lh();break;case 5:sh(r);break;case 4:ks();break;case 13:Ce(Re);break;case 19:Ce(Re);break;case 10:nh(r.type._context);break;case 22:case 23:vh()}n=n.return}if(mt=t,tt=t=ki(t.current,null),wt=pn=e,lt=0,ra=null,mh=Dc=yo=0,Kt=El=null,Zi!==null){for(e=0;e<Zi.length;e++)if(n=Zi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Zi=null}return t}function P1(t,e){do{var n=tt;try{if(th(),gu.current=nc,tc){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}tc=!1}if(vo=0,dt=ot=Ie=null,kl=!1,ea=0,hh.current=null,n===null||n.return===null){lt=1,ra=e,tt=null;break}e:{var o=t,s=n.return,l=n,a=e;if(e=wt,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=X0(s);if(h!==null){h.flags&=-257,G0(h,s,l,o,e),h.mode&1&&Y0(o,u,e),e=h,a=u;var y=e.updateQueue;if(y===null){var g=new Set;g.add(a),e.updateQueue=g}else y.add(a);break e}else{if(!(e&1)){Y0(o,u,e),yh();break e}a=Error(N(426))}}else if(je&&l.mode&1){var w=X0(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),G0(w,s,l,o,e),Jp(Cs(a,l));break e}}o=a=Cs(a,l),lt!==4&&(lt=2),El===null?El=[o]:El.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var x=f1(o,a,e);A0(o,x);break e;case 1:l=a;var m=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(wi===null||!wi.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var _=d1(o,l,e);A0(o,_);break e}}o=o.return}while(o!==null)}b1(n)}catch(C){e=C,tt===n&&n!==null&&(tt=n=n.return);continue}break}while(!0)}function O1(){var t=rc.current;return rc.current=nc,t===null?nc:t}function yh(){(lt===0||lt===3||lt===2)&&(lt=4),mt===null||!(yo&268435455)&&!(Dc&268435455)||li(mt,wt)}function sc(t,e){var n=ae;ae|=2;var r=O1();(mt!==t||wt!==e)&&(jr=null,io(t,e));do try{wS();break}catch(i){P1(t,i)}while(!0);if(th(),ae=n,rc.current=r,tt!==null)throw Error(N(261));return mt=null,wt=0,lt}function wS(){for(;tt!==null;)z1(tt)}function SS(){for(;tt!==null&&!X_();)z1(tt)}function z1(t){var e=N1(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?b1(t):tt=e,hh.current=null}function b1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=mS(n,e),n!==null){n.flags&=32767,tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{lt=6,tt=null;return}}else if(n=hS(n,e,pn),n!==null){tt=n;return}if(e=e.sibling,e!==null){tt=e;return}tt=e=t}while(e!==null);lt===0&&(lt=5)}function Xi(t,e,n){var r=he,i=$n.transition;try{$n.transition=null,he=1,kS(t,e,n,r)}finally{$n.transition=i,he=r}return null}function kS(t,e,n,r){do cs();while(ui!==null);if(ae&6)throw Error(N(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(N(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(rw(t,o),t===mt&&(tt=mt=null,wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ha||(Ha=!0,M1(Bu,function(){return cs(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=$n.transition,$n.transition=null;var s=he;he=1;var l=ae;ae|=4,hh.current=null,xS(t,n),E1(n,t),Ww(Sd),Wu=!!wd,Sd=wd=null,t.current=n,vS(n),G_(),ae=l,he=s,$n.transition=o}else t.current=n;if(Ha&&(Ha=!1,ui=t,oc=i),o=t.pendingLanes,o===0&&(wi=null),q_(n.stateNode),tn(t,Ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ic)throw ic=!1,t=Ud,Ud=null,t;return oc&1&&t.tag!==0&&cs(),o=t.pendingLanes,o&1?t===Wd?Tl++:(Tl=0,Wd=t):Tl=0,Li(),null}function cs(){if(ui!==null){var t=fx(oc),e=$n.transition,n=he;try{if($n.transition=null,he=16>t?16:t,ui===null)var r=!1;else{if(t=ui,ui=null,oc=0,ae&6)throw Error(N(331));var i=ae;for(ae|=4,F=t.current;F!==null;){var o=F,s=o.child;if(F.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(F=u;F!==null;){var c=F;switch(c.tag){case 0:case 11:case 15:Cl(8,c,o)}var d=c.child;if(d!==null)d.return=c,F=d;else for(;F!==null;){c=F;var p=c.sibling,h=c.return;if(S1(c),c===u){F=null;break}if(p!==null){p.return=h,F=p;break}F=h}}}var y=o.alternate;if(y!==null){var g=y.child;if(g!==null){y.child=null;do{var w=g.sibling;g.sibling=null,g=w}while(g!==null)}}F=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,F=s;else e:for(;F!==null;){if(o=F,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Cl(9,o,o.return)}var x=o.sibling;if(x!==null){x.return=o.return,F=x;break e}F=o.return}}var m=t.current;for(F=m;F!==null;){s=F;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,F=v;else e:for(s=m;F!==null;){if(l=F,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Fc(9,l)}}catch(C){De(l,l.return,C)}if(l===s){F=null;break e}var _=l.sibling;if(_!==null){_.return=l.return,F=_;break e}F=l.return}}if(ae=i,Li(),yr&&typeof yr.onPostCommitFiberRoot=="function")try{yr.onPostCommitFiberRoot(Oc,t)}catch{}r=!0}return r}finally{he=n,$n.transition=e}}return!1}function lm(t,e,n){e=Cs(n,e),e=f1(t,e,1),t=_i(t,e,1),e=Ht(),t!==null&&(va(t,1,e),tn(t,e))}function De(t,e,n){if(t.tag===3)lm(t,t,n);else for(;e!==null;){if(e.tag===3){lm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wi===null||!wi.has(r))){t=Cs(n,t),t=d1(e,t,1),e=_i(e,t,1),t=Ht(),e!==null&&(va(e,1,t),tn(e,t));break}}e=e.return}}function CS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ht(),t.pingedLanes|=t.suspendedLanes&n,mt===t&&(wt&n)===n&&(lt===4||lt===3&&(wt&130023424)===wt&&500>Ye()-gh?io(t,0):mh|=n),tn(t,e)}function R1(t,e){e===0&&(t.mode&1?(e=Ia,Ia<<=1,!(Ia&130023424)&&(Ia=4194304)):e=1);var n=Ht();t=Br(t,e),t!==null&&(va(t,e,n),tn(t,n))}function ES(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),R1(t,n)}function TS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(e),R1(t,n)}var N1;N1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return qt=!1,pS(t,e,n);qt=!!(t.flags&131072)}else qt=!1,je&&e.flags&1048576&&Fx(e,Ku,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;vu(t,e),t=e.pendingProps;var i=_s(e,Mt.current);us(e,n),i=uh(null,e,r,t,i,n);var o=ch();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(r)?(o=!0,Gu(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ih(e),i.updater=Lc,e.stateNode=i,i._reactInternals=e,bd(e,r,t,n),e=Md(null,e,r,!0,o,n)):(e.tag=0,je&&o&&qp(e),Dt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(vu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=PS(r),t=Jn(r,t),i){case 0:e=Nd(null,e,r,t,n);break e;case 1:e=q0(null,e,r,t,n);break e;case 11:e=Q0(null,e,r,t,n);break e;case 14:e=K0(null,e,r,Jn(r.type,t),n);break e}throw Error(N(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jn(r,i),Nd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jn(r,i),q0(t,e,r,i,n);case 3:e:{if(g1(e),t===null)throw Error(N(387));r=e.pendingProps,o=e.memoizedState,i=o.element,Wx(t,e),Ju(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Cs(Error(N(423)),e),e=Z0(t,e,r,n,i);break e}else if(r!==i){i=Cs(Error(N(424)),e),e=Z0(t,e,r,n,i);break e}else for(vn=yi(e.stateNode.containerInfo.firstChild),_n=e,je=!0,tr=null,n=Bx(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ws(),r===i){e=Ur(t,e,n);break e}Dt(t,e,r,n)}e=e.child}return e;case 5:return Vx(e),t===null&&Pd(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,kd(r,i)?s=null:o!==null&&kd(r,o)&&(e.flags|=32),m1(t,e),Dt(t,e,s,n),e.child;case 6:return t===null&&Pd(e),null;case 13:return x1(t,e,n);case 4:return oh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ss(e,null,r,n):Dt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jn(r,i),Q0(t,e,r,i,n);case 7:return Dt(t,e,e.pendingProps,n),e.child;case 8:return Dt(t,e,e.pendingProps.children,n),e.child;case 12:return Dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,_e(qu,r._currentValue),r._currentValue=s,o!==null)if(sr(o.value,s)){if(o.children===i.children&&!Jt.current){e=Ur(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Lr(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Od(o.return,n,e),l.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(N(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Od(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Dt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,us(e,n),i=Bn(i),r=r(i),e.flags|=1,Dt(t,e,r,n),e.child;case 14:return r=e.type,i=Jn(r,e.pendingProps),i=Jn(r.type,i),K0(t,e,r,i,n);case 15:return p1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jn(r,i),vu(t,e),e.tag=1,en(r)?(t=!0,Gu(e)):t=!1,us(e,n),c1(e,r,i),bd(e,r,i,n),Md(null,e,r,!0,t,n);case 19:return v1(t,e,n);case 22:return h1(t,e,n)}throw Error(N(156,e.tag))};function M1(t,e){return lx(t,e)}function jS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,r){return new jS(t,e,n,r)}function _h(t){return t=t.prototype,!(!t||!t.isReactComponent)}function PS(t){if(typeof t=="function")return _h(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$p)return 11;if(t===Ap)return 14}return 2}function ki(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wu(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")_h(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Vo:return oo(n.children,i,o,e);case Dp:s=8,i|=8;break;case td:return t=Ln(12,n,e,i|2),t.elementType=td,t.lanes=o,t;case nd:return t=Ln(13,n,e,i),t.elementType=nd,t.lanes=o,t;case rd:return t=Ln(19,n,e,i),t.elementType=rd,t.lanes=o,t;case Vg:return $c(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ug:s=10;break e;case Wg:s=9;break e;case $p:s=11;break e;case Ap:s=14;break e;case ii:s=16,r=null;break e}throw Error(N(130,t==null?t:typeof t,""))}return e=Ln(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function oo(t,e,n,r){return t=Ln(7,t,r,e),t.lanes=n,t}function $c(t,e,n,r){return t=Ln(22,t,r,e),t.elementType=Vg,t.lanes=n,t.stateNode={isHidden:!1},t}function Of(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function zf(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function OS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cf(0),this.expirationTimes=cf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wh(t,e,n,r,i,o,s,l,a){return t=new OS(t,e,n,l,a),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Ln(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ih(o),t}function zS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function I1(t){if(!t)return zi;t=t._reactInternals;e:{if(Po(t)!==t||t.tag!==1)throw Error(N(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(N(171))}if(t.tag===1){var n=t.type;if(en(n))return Ix(t,n,e)}return e}function L1(t,e,n,r,i,o,s,l,a){return t=wh(n,r,!0,t,i,o,s,l,a),t.context=I1(null),n=t.current,r=Ht(),i=Si(n),o=Lr(r,i),o.callback=e??null,_i(n,o,i),t.current.lanes=i,va(t,i,r),tn(t,r),t}function Ac(t,e,n,r){var i=e.current,o=Ht(),s=Si(i);return n=I1(n),e.context===null?e.context=n:e.pendingContext=n,e=Lr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=_i(i,e,s),t!==null&&(ir(t,i,s,o),mu(t,i,s)),s}function lc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function am(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sh(t,e){am(t,e),(t=t.alternate)&&am(t,e)}function bS(){return null}var F1=typeof reportError=="function"?reportError:function(t){console.error(t)};function kh(t){this._internalRoot=t}Bc.prototype.render=kh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(N(409));Ac(t,e,null,null)};Bc.prototype.unmount=kh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_o(function(){Ac(null,t,null,null)}),e[Ar]=null}};function Bc(t){this._internalRoot=t}Bc.prototype.unstable_scheduleHydration=function(t){if(t){var e=hx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<si.length&&e!==0&&e<si[n].priority;n++);si.splice(n,0,t),n===0&&gx(t)}};function Ch(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Uc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function um(){}function RS(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=lc(s);o.call(u)}}var s=L1(e,r,t,0,null,!1,!1,"",um);return t._reactRootContainer=s,t[Ar]=s.current,Ql(t.nodeType===8?t.parentNode:t),_o(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=lc(a);l.call(u)}}var a=wh(t,0,!1,null,null,!1,!1,"",um);return t._reactRootContainer=a,t[Ar]=a.current,Ql(t.nodeType===8?t.parentNode:t),_o(function(){Ac(e,a,n,r)}),a}function Wc(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=lc(s);l.call(a)}}Ac(e,s,t,i)}else s=RS(n,e,t,i,r);return lc(s)}dx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=al(e.pendingLanes);n!==0&&(Wp(e,n|1),tn(e,Ye()),!(ae&6)&&(Es=Ye()+500,Li()))}break;case 13:_o(function(){var r=Br(t,1);if(r!==null){var i=Ht();ir(r,t,1,i)}}),Sh(t,1)}};Vp=function(t){if(t.tag===13){var e=Br(t,134217728);if(e!==null){var n=Ht();ir(e,t,134217728,n)}Sh(t,134217728)}};px=function(t){if(t.tag===13){var e=Si(t),n=Br(t,e);if(n!==null){var r=Ht();ir(n,t,e,r)}Sh(t,e)}};hx=function(){return he};mx=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};pd=function(t,e,n){switch(e){case"input":if(sd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Nc(r);if(!i)throw Error(N(90));Yg(r),sd(r,i)}}}break;case"textarea":Gg(t,n);break;case"select":e=n.value,e!=null&&os(t,!!n.multiple,e,!1)}};tx=xh;nx=_o;var NS={usingClientEntryPoint:!1,Events:[_a,Go,Nc,Jg,ex,xh]},nl={findFiberByHostInstance:qi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},MS={bundleType:nl.bundleType,version:nl.version,rendererPackageName:nl.rendererPackageName,rendererConfig:nl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ox(t),t===null?null:t.stateNode},findFiberByHostInstance:nl.findFiberByHostInstance||bS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ya.isDisabled&&Ya.supportsFiber)try{Oc=Ya.inject(MS),yr=Ya}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NS;Cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ch(e))throw Error(N(200));return zS(t,e,null,n)};Cn.createRoot=function(t,e){if(!Ch(t))throw Error(N(299));var n=!1,r="",i=F1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=wh(t,1,!1,null,null,n,!1,r,i),t[Ar]=e.current,Ql(t.nodeType===8?t.parentNode:t),new kh(e)};Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(N(188)):(t=Object.keys(t).join(","),Error(N(268,t)));return t=ox(e),t=t===null?null:t.stateNode,t};Cn.flushSync=function(t){return _o(t)};Cn.hydrate=function(t,e,n){if(!Uc(e))throw Error(N(200));return Wc(null,t,e,!0,n)};Cn.hydrateRoot=function(t,e,n){if(!Ch(t))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=F1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=L1(e,null,t,1,n??null,i,!1,o,s),t[Ar]=e.current,Ql(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Bc(e)};Cn.render=function(t,e,n){if(!Uc(e))throw Error(N(200));return Wc(null,t,e,!1,n)};Cn.unmountComponentAtNode=function(t){if(!Uc(t))throw Error(N(40));return t._reactRootContainer?(_o(function(){Wc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ar]=null})}),!0):!1};Cn.unstable_batchedUpdates=xh;Cn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Uc(n))throw Error(N(200));if(t==null||t._reactInternals===void 0)throw Error(N(38));return Wc(t,e,n,!1,r)};Cn.version="18.3.1-next-f1338f8080-20240426";function D1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D1)}catch(t){console.error(t)}}D1(),Dg.exports=Cn;var IS=Dg.exports,$1,cm=IS;$1=cm.createRoot,cm.hydrateRoot;/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ia(){return ia=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ia.apply(this,arguments)}var ci;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ci||(ci={}));const fm="popstate";function LS(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:l}=r.location;return Yd("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ac(i)}return DS(e,n,null,t)}function Ae(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function A1(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function FS(){return Math.random().toString(36).substr(2,8)}function dm(t,e){return{usr:t.state,key:t.key,idx:e}}function Yd(t,e,n,r){return n===void 0&&(n=null),ia({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Bs(e):e,{state:n,key:e&&e.key||r||FS()})}function ac(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Bs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function DS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=ci.Pop,a=null,u=c();u==null&&(u=0,s.replaceState(ia({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function d(){l=ci.Pop;let w=c(),x=w==null?null:w-u;u=w,a&&a({action:l,location:g.location,delta:x})}function p(w,x){l=ci.Push;let m=Yd(g.location,w,x);u=c()+1;let v=dm(m,u),_=g.createHref(m);try{s.pushState(v,"",_)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(_)}o&&a&&a({action:l,location:g.location,delta:1})}function h(w,x){l=ci.Replace;let m=Yd(g.location,w,x);u=c();let v=dm(m,u),_=g.createHref(m);s.replaceState(v,"",_),o&&a&&a({action:l,location:g.location,delta:0})}function y(w){let x=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof w=="string"?w:ac(w);return m=m.replace(/ $/,"%20"),Ae(x,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,x)}let g={get action(){return l},get location(){return t(i,s)},listen(w){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(fm,d),a=w,()=>{i.removeEventListener(fm,d),a=null}},createHref(w){return e(i,w)},createURL:y,encodeLocation(w){let x=y(w);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:p,replace:h,go(w){return s.go(w)}};return g}var pm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(pm||(pm={}));function $S(t,e,n){return n===void 0&&(n="/"),AS(t,e,n,!1)}function AS(t,e,n,r){let i=typeof e=="string"?Bs(e):e,o=Ts(i.pathname||"/",n);if(o==null)return null;let s=B1(t);BS(s);let l=null;for(let a=0;l==null&&a<s.length;++a){let u=ZS(o);l=KS(s[a],u,r)}return l}function B1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let a={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};a.relativePath.startsWith("/")&&(Ae(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Ci([r,a.relativePath]),c=n.concat(a);o.children&&o.children.length>0&&(Ae(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),B1(o.children,e,c,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:GS(u,o.index),routesMeta:c})};return t.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let a of U1(o.path))i(o,s,a)}),e}function U1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=U1(r.join("/")),l=[];return l.push(...s.map(a=>a===""?o:[o,a].join("/"))),i&&l.push(...s),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function BS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:QS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const US=/^:[\w-]+$/,WS=3,VS=2,HS=1,YS=10,XS=-2,hm=t=>t==="*";function GS(t,e){let n=t.split("/"),r=n.length;return n.some(hm)&&(r+=XS),e&&(r+=VS),n.filter(i=>!hm(i)).reduce((i,o)=>i+(US.test(o)?WS:o===""?HS:YS),r)}function QS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function KS(t,e,n){let{routesMeta:r}=t,i={},o="/",s=[];for(let l=0;l<r.length;++l){let a=r[l],u=l===r.length-1,c=o==="/"?e:e.slice(o.length)||"/",d=uc({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c),p=a.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=uc({path:a.relativePath,caseSensitive:a.caseSensitive,end:!1},c)),!d)return null;Object.assign(i,d.params),s.push({params:i,pathname:Ci([o,d.pathname]),pathnameBase:nk(Ci([o,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(o=Ci([o,d.pathnameBase]))}return s}function uc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=qS(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:p,isOptional:h}=c;if(p==="*"){let g=l[d]||"";s=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}const y=l[d];return h&&!y?u[p]=void 0:u[p]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:t}}function qS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),A1(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ZS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return A1(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ts(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function JS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Bs(t):t;return{pathname:n?n.startsWith("/")?n:ek(n,e):e,search:rk(r),hash:ik(i)}}function ek(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function bf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function tk(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function W1(t,e){let n=tk(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function V1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Bs(t):(i=ia({},t),Ae(!i.pathname||!i.pathname.includes("?"),bf("?","pathname","search",i)),Ae(!i.pathname||!i.pathname.includes("#"),bf("#","pathname","hash",i)),Ae(!i.search||!i.search.includes("#"),bf("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=n;else{let d=e.length-1;if(!r&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}l=d>=0?e[d]:"/"}let a=JS(i,l),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const Ci=t=>t.join("/").replace(/\/\/+/g,"/"),nk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),rk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ik=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ok(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const H1=["post","put","patch","delete"];new Set(H1);const sk=["get",...H1];new Set(sk);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oa(){return oa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},oa.apply(this,arguments)}const Vc=R.createContext(null),Y1=R.createContext(null),Fi=R.createContext(null),Hc=R.createContext(null),Oo=R.createContext({outlet:null,matches:[],isDataRoute:!1}),X1=R.createContext(null);function lk(t,e){let{relative:n}=e===void 0?{}:e;Sa()||Ae(!1);let{basename:r,navigator:i}=R.useContext(Fi),{hash:o,pathname:s,search:l}=Yc(t,{relative:n}),a=s;return r!=="/"&&(a=s==="/"?r:Ci([r,s])),i.createHref({pathname:a,search:l,hash:o})}function Sa(){return R.useContext(Hc)!=null}function Us(){return Sa()||Ae(!1),R.useContext(Hc).location}function G1(t){R.useContext(Fi).static||R.useLayoutEffect(t)}function Q1(){let{isDataRoute:t}=R.useContext(Oo);return t?_k():ak()}function ak(){Sa()||Ae(!1);let t=R.useContext(Vc),{basename:e,future:n,navigator:r}=R.useContext(Fi),{matches:i}=R.useContext(Oo),{pathname:o}=Us(),s=JSON.stringify(W1(i,n.v7_relativeSplatPath)),l=R.useRef(!1);return G1(()=>{l.current=!0}),R.useCallback(function(u,c){if(c===void 0&&(c={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let d=V1(u,JSON.parse(s),o,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Ci([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,s,o,t])}function Yc(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=R.useContext(Fi),{matches:i}=R.useContext(Oo),{pathname:o}=Us(),s=JSON.stringify(W1(i,r.v7_relativeSplatPath));return R.useMemo(()=>V1(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function uk(t,e){return ck(t,e)}function ck(t,e,n,r){Sa()||Ae(!1);let{navigator:i}=R.useContext(Fi),{matches:o}=R.useContext(Oo),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let u=Us(),c;if(e){var d;let w=typeof e=="string"?Bs(e):e;a==="/"||(d=w.pathname)!=null&&d.startsWith(a)||Ae(!1),c=w}else c=u;let p=c.pathname||"/",h=p;if(a!=="/"){let w=a.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice(w.length).join("/")}let y=$S(t,{pathname:h}),g=mk(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:Ci([a,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:Ci([a,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,n,r);return e&&g?R.createElement(Hc.Provider,{value:{location:oa({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:ci.Pop}},g):g}function fk(){let t=yk(),e=ok(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),n?R.createElement("pre",{style:i},n):null,null)}const dk=R.createElement(fk,null);class pk extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?R.createElement(Oo.Provider,{value:this.props.routeContext},R.createElement(X1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hk(t){let{routeContext:e,match:n,children:r}=t,i=R.useContext(Vc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(Oo.Provider,{value:e},r)}function mk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let c=s.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);c>=0||Ae(!1),s=s.slice(0,Math.min(s.length,c+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<s.length;c++){let d=s[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:p,errors:h}=n,y=d.route.loader&&p[d.route.id]===void 0&&(!h||h[d.route.id]===void 0);if(d.route.lazy||y){a=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,d,p)=>{let h,y=!1,g=null,w=null;n&&(h=l&&d.route.id?l[d.route.id]:void 0,g=d.route.errorElement||dk,a&&(u<0&&p===0?(y=!0,w=null):u===p&&(y=!0,w=d.route.hydrateFallbackElement||null)));let x=e.concat(s.slice(0,p+1)),m=()=>{let v;return h?v=g:y?v=w:d.route.Component?v=R.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=c,R.createElement(hk,{match:d,routeContext:{outlet:c,matches:x,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?R.createElement(pk,{location:n.location,revalidation:n.revalidation,component:g,error:h,children:m(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):m()},null)}var K1=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(K1||{}),cc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(cc||{});function gk(t){let e=R.useContext(Vc);return e||Ae(!1),e}function xk(t){let e=R.useContext(Y1);return e||Ae(!1),e}function vk(t){let e=R.useContext(Oo);return e||Ae(!1),e}function q1(t){let e=vk(),n=e.matches[e.matches.length-1];return n.route.id||Ae(!1),n.route.id}function yk(){var t;let e=R.useContext(X1),n=xk(cc.UseRouteError),r=q1(cc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function _k(){let{router:t}=gk(K1.UseNavigateStable),e=q1(cc.UseNavigateStable),n=R.useRef(!1);return G1(()=>{n.current=!0}),R.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,oa({fromRouteId:e},o)))},[t,e])}function Su(t){Ae(!1)}function wk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ci.Pop,navigator:o,static:s=!1,future:l}=t;Sa()&&Ae(!1);let a=e.replace(/^\/*/,"/"),u=R.useMemo(()=>({basename:a,navigator:o,static:s,future:oa({v7_relativeSplatPath:!1},l)}),[a,l,o,s]);typeof r=="string"&&(r=Bs(r));let{pathname:c="/",search:d="",hash:p="",state:h=null,key:y="default"}=r,g=R.useMemo(()=>{let w=Ts(c,a);return w==null?null:{location:{pathname:w,search:d,hash:p,state:h,key:y},navigationType:i}},[a,c,d,p,h,y,i]);return g==null?null:R.createElement(Fi.Provider,{value:u},R.createElement(Hc.Provider,{children:n,value:g}))}function Sk(t){let{children:e,location:n}=t;return uk(Xd(e),n)}new Promise(()=>{});function Xd(t,e){e===void 0&&(e=[]);let n=[];return R.Children.forEach(t,(r,i)=>{if(!R.isValidElement(r))return;let o=[...e,i];if(r.type===R.Fragment){n.push.apply(n,Xd(r.props.children,o));return}r.type!==Su&&Ae(!1),!r.props.index||!r.props.children||Ae(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Xd(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fc(){return fc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fc.apply(this,arguments)}function Z1(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function kk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Ck(t,e){return t.button===0&&(!e||e==="_self")&&!kk(t)}const Ek=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Tk=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],jk="6";try{window.__reactRouterVersion=jk}catch{}const Pk=R.createContext({isTransitioning:!1}),Ok="startTransition",mm=C_[Ok];function zk(t){let{basename:e,children:n,future:r,window:i}=t,o=R.useRef();o.current==null&&(o.current=LS({window:i,v5Compat:!0}));let s=o.current,[l,a]=R.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=R.useCallback(d=>{u&&mm?mm(()=>a(d)):a(d)},[a,u]);return R.useLayoutEffect(()=>s.listen(c),[s,c]),R.createElement(wk,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const bk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Rk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,In=R.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:l,target:a,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,p=Z1(e,Ek),{basename:h}=R.useContext(Fi),y,g=!1;if(typeof u=="string"&&Rk.test(u)&&(y=u,bk))try{let v=new URL(window.location.href),_=u.startsWith("//")?new URL(v.protocol+u):new URL(u),C=Ts(_.pathname,h);_.origin===v.origin&&C!=null?u=C+_.search+_.hash:g=!0}catch{}let w=lk(u,{relative:i}),x=Mk(u,{replace:s,state:l,target:a,preventScrollReset:c,relative:i,unstable_viewTransition:d});function m(v){r&&r(v),v.defaultPrevented||x(v)}return R.createElement("a",fc({},p,{href:y||w,onClick:g||o?r:m,ref:n,target:a}))}),J1=R.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:l,to:a,unstable_viewTransition:u,children:c}=e,d=Z1(e,Tk),p=Yc(a,{relative:d.relative}),h=Us(),y=R.useContext(Y1),{navigator:g,basename:w}=R.useContext(Fi),x=y!=null&&Ik(p)&&u===!0,m=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,v=h.pathname,_=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(v=v.toLowerCase(),_=_?_.toLowerCase():null,m=m.toLowerCase()),_&&w&&(_=Ts(_,w)||_);const C=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let E=v===m||!s&&v.startsWith(m)&&v.charAt(C)==="/",S=_!=null&&(_===m||!s&&_.startsWith(m)&&_.charAt(m.length)==="/"),j={isActive:E,isPending:S,isTransitioning:x},z=E?r:void 0,P;typeof o=="function"?P=o(j):P=[o,E?"active":null,S?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let $=typeof l=="function"?l(j):l;return R.createElement(In,fc({},d,{"aria-current":z,className:P,ref:n,style:$,to:a,unstable_viewTransition:u}),typeof c=="function"?c(j):c)});var Gd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Gd||(Gd={}));var gm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(gm||(gm={}));function Nk(t){let e=R.useContext(Vc);return e||Ae(!1),e}function Mk(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:l}=e===void 0?{}:e,a=Q1(),u=Us(),c=Yc(t,{relative:s});return R.useCallback(d=>{if(Ck(d,n)){d.preventDefault();let p=r!==void 0?r:ac(u)===ac(c);a(t,{replace:p,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:l})}},[u,a,c,r,i,n,t,o,s,l])}function Ik(t,e){e===void 0&&(e={});let n=R.useContext(Pk);n==null&&Ae(!1);let{basename:r}=Nk(Gd.useViewTransitionState),i=Yc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let o=Ts(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=Ts(n.nextLocation.pathname,r)||n.nextLocation.pathname;return uc(i.pathname,s)!=null||uc(i.pathname,o)!=null}var Zt=function(){return Zt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Zt.apply(this,arguments)};function sa(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var Se="-ms-",jl="-moz-",de="-webkit-",ev="comm",Xc="rule",Eh="decl",Lk="@import",tv="@keyframes",Fk="@layer",nv=Math.abs,Th=String.fromCharCode,Qd=Object.assign;function Dk(t,e){return pt(t,0)^45?(((e<<2^pt(t,0))<<2^pt(t,1))<<2^pt(t,2))<<2^pt(t,3):0}function rv(t){return t.trim()}function Pr(t,e){return(t=e.exec(t))?t[0]:t}function q(t,e,n){return t.replace(e,n)}function ku(t,e,n){return t.indexOf(e,n)}function pt(t,e){return t.charCodeAt(e)|0}function js(t,e,n){return t.slice(e,n)}function hr(t){return t.length}function iv(t){return t.length}function cl(t,e){return e.push(t),t}function $k(t,e){return t.map(e).join("")}function xm(t,e){return t.filter(function(n){return!Pr(n,e)})}var Gc=1,Ps=1,ov=0,Wn=0,et=0,Ws="";function Qc(t,e,n,r,i,o,s,l){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:Gc,column:Ps,length:s,return:"",siblings:l}}function ni(t,e){return Qd(Qc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Lo(t){for(;t.root;)t=ni(t.root,{children:[t]});cl(t,t.siblings)}function Ak(){return et}function Bk(){return et=Wn>0?pt(Ws,--Wn):0,Ps--,et===10&&(Ps=1,Gc--),et}function or(){return et=Wn<ov?pt(Ws,Wn++):0,Ps++,et===10&&(Ps=1,Gc++),et}function so(){return pt(Ws,Wn)}function Cu(){return Wn}function Kc(t,e){return js(Ws,t,e)}function Kd(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Uk(t){return Gc=Ps=1,ov=hr(Ws=t),Wn=0,[]}function Wk(t){return Ws="",t}function Rf(t){return rv(Kc(Wn-1,qd(t===91?t+2:t===40?t+1:t)))}function Vk(t){for(;(et=so())&&et<33;)or();return Kd(t)>2||Kd(et)>3?"":" "}function Hk(t,e){for(;--e&&or()&&!(et<48||et>102||et>57&&et<65||et>70&&et<97););return Kc(t,Cu()+(e<6&&so()==32&&or()==32))}function qd(t){for(;or();)switch(et){case t:return Wn;case 34:case 39:t!==34&&t!==39&&qd(et);break;case 40:t===41&&qd(t);break;case 92:or();break}return Wn}function Yk(t,e){for(;or()&&t+et!==57;)if(t+et===84&&so()===47)break;return"/*"+Kc(e,Wn-1)+"*"+Th(t===47?t:or())}function Xk(t){for(;!Kd(so());)or();return Kc(t,Wn)}function Gk(t){return Wk(Eu("",null,null,null,[""],t=Uk(t),0,[0],t))}function Eu(t,e,n,r,i,o,s,l,a){for(var u=0,c=0,d=s,p=0,h=0,y=0,g=1,w=1,x=1,m=0,v="",_=i,C=o,E=r,S=v;w;)switch(y=m,m=or()){case 40:if(y!=108&&pt(S,d-1)==58){ku(S+=q(Rf(m),"&","&\f"),"&\f",nv(u?l[u-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:S+=Rf(m);break;case 9:case 10:case 13:case 32:S+=Vk(y);break;case 92:S+=Hk(Cu()-1,7);continue;case 47:switch(so()){case 42:case 47:cl(Qk(Yk(or(),Cu()),e,n,a),a);break;default:S+="/"}break;case 123*g:l[u++]=hr(S)*x;case 125*g:case 59:case 0:switch(m){case 0:case 125:w=0;case 59+c:x==-1&&(S=q(S,/\f/g,"")),h>0&&hr(S)-d&&cl(h>32?ym(S+";",r,n,d-1,a):ym(q(S," ","")+";",r,n,d-2,a),a);break;case 59:S+=";";default:if(cl(E=vm(S,e,n,u,c,i,l,v,_=[],C=[],d,o),o),m===123)if(c===0)Eu(S,e,E,E,_,o,d,l,C);else switch(p===99&&pt(S,3)===110?100:p){case 100:case 108:case 109:case 115:Eu(t,E,E,r&&cl(vm(t,E,E,0,0,i,l,v,i,_=[],d,C),C),i,C,d,l,r?_:C);break;default:Eu(S,E,E,E,[""],C,0,l,C)}}u=c=h=0,g=x=1,v=S="",d=s;break;case 58:d=1+hr(S),h=y;default:if(g<1){if(m==123)--g;else if(m==125&&g++==0&&Bk()==125)continue}switch(S+=Th(m),m*g){case 38:x=c>0?1:(S+="\f",-1);break;case 44:l[u++]=(hr(S)-1)*x,x=1;break;case 64:so()===45&&(S+=Rf(or())),p=so(),c=d=hr(v=S+=Xk(Cu())),m++;break;case 45:y===45&&hr(S)==2&&(g=0)}}return o}function vm(t,e,n,r,i,o,s,l,a,u,c,d){for(var p=i-1,h=i===0?o:[""],y=iv(h),g=0,w=0,x=0;g<r;++g)for(var m=0,v=js(t,p+1,p=nv(w=s[g])),_=t;m<y;++m)(_=rv(w>0?h[m]+" "+v:q(v,/&\f/g,h[m])))&&(a[x++]=_);return Qc(t,e,n,i===0?Xc:l,a,u,c,d)}function Qk(t,e,n,r){return Qc(t,e,n,ev,Th(Ak()),js(t,2,-2),0,r)}function ym(t,e,n,r,i){return Qc(t,e,n,Eh,js(t,0,r),js(t,r+1,-1),r,i)}function sv(t,e,n){switch(Dk(t,e)){case 5103:return de+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return de+t+t;case 4789:return jl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return de+t+jl+t+Se+t+t;case 5936:switch(pt(t,e+11)){case 114:return de+t+Se+q(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return de+t+Se+q(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return de+t+Se+q(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return de+t+Se+t+t;case 6165:return de+t+Se+"flex-"+t+t;case 5187:return de+t+q(t,/(\w+).+(:[^]+)/,de+"box-$1$2"+Se+"flex-$1$2")+t;case 5443:return de+t+Se+"flex-item-"+q(t,/flex-|-self/g,"")+(Pr(t,/flex-|baseline/)?"":Se+"grid-row-"+q(t,/flex-|-self/g,""))+t;case 4675:return de+t+Se+"flex-line-pack"+q(t,/align-content|flex-|-self/g,"")+t;case 5548:return de+t+Se+q(t,"shrink","negative")+t;case 5292:return de+t+Se+q(t,"basis","preferred-size")+t;case 6060:return de+"box-"+q(t,"-grow","")+de+t+Se+q(t,"grow","positive")+t;case 4554:return de+q(t,/([^-])(transform)/g,"$1"+de+"$2")+t;case 6187:return q(q(q(t,/(zoom-|grab)/,de+"$1"),/(image-set)/,de+"$1"),t,"")+t;case 5495:case 3959:return q(t,/(image-set\([^]*)/,de+"$1$`$1");case 4968:return q(q(t,/(.+:)(flex-)?(.*)/,de+"box-pack:$3"+Se+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+de+t+t;case 4200:if(!Pr(t,/flex-|baseline/))return Se+"grid-column-align"+js(t,e)+t;break;case 2592:case 3360:return Se+q(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Pr(r.props,/grid-\w+-end/)})?~ku(t+(n=n[e].value),"span",0)?t:Se+q(t,"-start","")+t+Se+"grid-row-span:"+(~ku(n,"span",0)?Pr(n,/\d+/):+Pr(n,/\d+/)-+Pr(t,/\d+/))+";":Se+q(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Pr(r.props,/grid-\w+-start/)})?t:Se+q(q(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return q(t,/(.+)-inline(.+)/,de+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(hr(t)-1-e>6)switch(pt(t,e+1)){case 109:if(pt(t,e+4)!==45)break;case 102:return q(t,/(.+:)(.+)-([^]+)/,"$1"+de+"$2-$3$1"+jl+(pt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~ku(t,"stretch",0)?sv(q(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return q(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,l,a,u){return Se+i+":"+o+u+(s?Se+i+"-span:"+(l?a:+a-+o)+u:"")+t});case 4949:if(pt(t,e+6)===121)return q(t,":",":"+de)+t;break;case 6444:switch(pt(t,pt(t,14)===45?18:11)){case 120:return q(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+de+(pt(t,14)===45?"inline-":"")+"box$3$1"+de+"$2$3$1"+Se+"$2box$3")+t;case 100:return q(t,":",":"+Se)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return q(t,"scroll-","scroll-snap-")+t}return t}function dc(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function Kk(t,e,n,r){switch(t.type){case Fk:if(t.children.length)break;case Lk:case Eh:return t.return=t.return||t.value;case ev:return"";case tv:return t.return=t.value+"{"+dc(t.children,r)+"}";case Xc:if(!hr(t.value=t.props.join(",")))return""}return hr(n=dc(t.children,r))?t.return=t.value+"{"+n+"}":""}function qk(t){var e=iv(t);return function(n,r,i,o){for(var s="",l=0;l<e;l++)s+=t[l](n,r,i,o)||"";return s}}function Zk(t){return function(e){e.root||(e=e.return)&&t(e)}}function Jk(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Eh:t.return=sv(t.value,t.length,n);return;case tv:return dc([ni(t,{value:q(t.value,"@","@"+de)})],r);case Xc:if(t.length)return $k(n=t.props,function(i){switch(Pr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Lo(ni(t,{props:[q(i,/:(read-\w+)/,":"+jl+"$1")]})),Lo(ni(t,{props:[i]})),Qd(t,{props:xm(n,r)});break;case"::placeholder":Lo(ni(t,{props:[q(i,/:(plac\w+)/,":"+de+"input-$1")]})),Lo(ni(t,{props:[q(i,/:(plac\w+)/,":"+jl+"$1")]})),Lo(ni(t,{props:[q(i,/:(plac\w+)/,Se+"input-$1")]})),Lo(ni(t,{props:[i]})),Qd(t,{props:xm(n,r)});break}return""})}}var e2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},fn={},Os=typeof process<"u"&&fn!==void 0&&(fn.REACT_APP_SC_ATTR||fn.SC_ATTR)||"data-styled",lv="active",av="data-styled-version",qc="6.1.13",jh=`/*!sc*/
`,pc=typeof window<"u"&&"HTMLElement"in window,t2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&fn!==void 0&&fn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&fn.REACT_APP_SC_DISABLE_SPEEDY!==""?fn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&fn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&fn!==void 0&&fn.SC_DISABLE_SPEEDY!==void 0&&fn.SC_DISABLE_SPEEDY!==""&&fn.SC_DISABLE_SPEEDY!=="false"&&fn.SC_DISABLE_SPEEDY),Zc=Object.freeze([]),zs=Object.freeze({});function n2(t,e,n){return n===void 0&&(n=zs),t.theme!==n.theme&&t.theme||e||n.theme}var uv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),r2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,i2=/(^-|-$)/g;function _m(t){return t.replace(r2,"-").replace(i2,"")}var o2=/(a)(d)/gi,Xa=52,wm=function(t){return String.fromCharCode(t+(t>25?39:97))};function Zd(t){var e,n="";for(e=Math.abs(t);e>Xa;e=e/Xa|0)n=wm(e%Xa)+n;return(wm(e%Xa)+n).replace(o2,"$1-$2")}var Nf,cv=5381,ts=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},fv=function(t){return ts(cv,t)};function dv(t){return Zd(fv(t)>>>0)}function s2(t){return t.displayName||t.name||"Component"}function Mf(t){return typeof t=="string"&&!0}var pv=typeof Symbol=="function"&&Symbol.for,hv=pv?Symbol.for("react.memo"):60115,l2=pv?Symbol.for("react.forward_ref"):60112,a2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},u2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},mv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c2=((Nf={})[l2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Nf[hv]=mv,Nf);function Sm(t){return("type"in(e=t)&&e.type.$$typeof)===hv?mv:"$$typeof"in t?c2[t.$$typeof]:a2;var e}var f2=Object.defineProperty,d2=Object.getOwnPropertyNames,km=Object.getOwnPropertySymbols,p2=Object.getOwnPropertyDescriptor,h2=Object.getPrototypeOf,Cm=Object.prototype;function gv(t,e,n){if(typeof e!="string"){if(Cm){var r=h2(e);r&&r!==Cm&&gv(t,r,n)}var i=d2(e);km&&(i=i.concat(km(e)));for(var o=Sm(t),s=Sm(e),l=0;l<i.length;++l){var a=i[l];if(!(a in u2||n&&n[a]||s&&a in s||o&&a in o)){var u=p2(e,a);try{f2(t,a,u)}catch{}}}}return t}function bs(t){return typeof t=="function"}function Ph(t){return typeof t=="object"&&"styledComponentId"in t}function eo(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Jd(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function la(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function ep(t,e,n){if(n===void 0&&(n=!1),!n&&!la(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=ep(t[r],e[r]);else if(la(e))for(var r in e)t[r]=ep(t[r],e[r]);return t}function Oh(t,e){Object.defineProperty(t,"toString",{value:e})}function ka(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var m2=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw ka(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(e+1),a=(s=0,n.length);s<a;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[e]++,l++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(jh);return n},t}(),Tu=new Map,hc=new Map,ju=1,Ga=function(t){if(Tu.has(t))return Tu.get(t);for(;hc.has(ju);)ju++;var e=ju++;return Tu.set(t,e),hc.set(e,t),e},g2=function(t,e){ju=e+1,Tu.set(t,e),hc.set(e,t)},x2="style[".concat(Os,"][").concat(av,'="').concat(qc,'"]'),v2=new RegExp("^".concat(Os,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),y2=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},_2=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(jh),i=[],o=0,s=r.length;o<s;o++){var l=r[o].trim();if(l){var a=l.match(v2);if(a){var u=0|parseInt(a[1],10),c=a[2];u!==0&&(g2(c,u),y2(t,c,a[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},Em=function(t){for(var e=document.querySelectorAll(x2),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(Os)!==lv&&(_2(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function w2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var xv=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(l){var a=Array.from(l.querySelectorAll("style[".concat(Os,"]")));return a[a.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Os,lv),r.setAttribute(av,qc);var s=w2();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},S2=function(){function t(e){this.element=xv(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw ka(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),k2=function(){function t(e){this.element=xv(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),C2=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Tm=pc,E2={isServer:!pc,useCSSOMInjection:!t2},vv=function(){function t(e,n,r){e===void 0&&(e=zs),n===void 0&&(n={});var i=this;this.options=Zt(Zt({},E2),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&pc&&Tm&&(Tm=!1,Em(this)),Oh(this,function(){return function(o){for(var s=o.getTag(),l=s.length,a="",u=function(d){var p=function(x){return hc.get(x)}(d);if(p===void 0)return"continue";var h=o.names.get(p),y=s.getGroup(d);if(h===void 0||!h.size||y.length===0)return"continue";var g="".concat(Os,".g").concat(d,'[id="').concat(p,'"]'),w="";h!==void 0&&h.forEach(function(x){x.length>0&&(w+="".concat(x,","))}),a+="".concat(y).concat(g,'{content:"').concat(w,'"}').concat(jh)},c=0;c<l;c++)u(c);return a}(i)})}return t.registerId=function(e){return Ga(e)},t.prototype.rehydrate=function(){!this.server&&pc&&Em(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Zt(Zt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new C2(i):r?new S2(i):new k2(i)}(this.options),new m2(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Ga(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Ga(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Ga(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),T2=/&/g,j2=/^\s*\/\/.*$/gm;function yv(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=yv(n.children,e)),n})}function P2(t){var e,n,r,i=zs,o=i.options,s=o===void 0?zs:o,l=i.plugins,a=l===void 0?Zc:l,u=function(p,h,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(e):p},c=a.slice();c.push(function(p){p.type===Xc&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(T2,n).replace(r,u))}),s.prefix&&c.push(Jk),c.push(Kk);var d=function(p,h,y,g){h===void 0&&(h=""),y===void 0&&(y=""),g===void 0&&(g="&"),e=g,n=h,r=new RegExp("\\".concat(n,"\\b"),"g");var w=p.replace(j2,""),x=Gk(y||h?"".concat(y," ").concat(h," { ").concat(w," }"):w);s.namespace&&(x=yv(x,s.namespace));var m=[];return dc(x,qk(c.concat(Zk(function(v){return m.push(v)})))),m};return d.hash=a.length?a.reduce(function(p,h){return h.name||ka(15),ts(p,h.name)},cv).toString():"",d}var O2=new vv,tp=P2(),_v=Pi.createContext({shouldForwardProp:void 0,styleSheet:O2,stylis:tp});_v.Consumer;Pi.createContext(void 0);function jm(){return R.useContext(_v)}var wv=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=tp);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Oh(this,function(){throw ka(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=tp),this.name+e.hash},t}(),z2=function(t){return t>="A"&&t<="Z"};function Pm(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;z2(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var Sv=function(t){return t==null||t===!1||t===""},kv=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!Sv(o)&&(Array.isArray(o)&&o.isCss||bs(o)?r.push("".concat(Pm(i),":"),o,";"):la(o)?r.push.apply(r,sa(sa(["".concat(i," {")],kv(o),!1),["}"],!1)):r.push("".concat(Pm(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in e2||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function lo(t,e,n,r){if(Sv(t))return[];if(Ph(t))return[".".concat(t.styledComponentId)];if(bs(t)){if(!bs(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return lo(i,e,n,r)}var o;return t instanceof wv?n?(t.inject(n,r),[t.getName(r)]):[t]:la(t)?kv(t):Array.isArray(t)?Array.prototype.concat.apply(Zc,t.map(function(s){return lo(s,e,n,r)})):[t.toString()]}function b2(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(bs(n)&&!Ph(n))return!1}return!0}var R2=fv(qc),N2=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&b2(e),this.componentId=n,this.baseHash=ts(R2,n),this.baseStyle=r,vv.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=eo(i,this.staticRulesId);else{var o=Jd(lo(this.rules,e,n,r)),s=Zd(ts(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}i=eo(i,s),this.staticRulesId=s}else{for(var a=ts(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var p=Jd(lo(d,e,n,r));a=ts(a,p+c),u+=p}}if(u){var h=Zd(a>>>0);n.hasNameForId(this.componentId,h)||n.insertRules(this.componentId,h,r(u,".".concat(h),void 0,this.componentId)),i=eo(i,h)}}return i},t}(),Cv=Pi.createContext(void 0);Cv.Consumer;var If={};function M2(t,e,n){var r=Ph(t),i=t,o=!Mf(t),s=e.attrs,l=s===void 0?Zc:s,a=e.componentId,u=a===void 0?function(_,C){var E=typeof _!="string"?"sc":_m(_);If[E]=(If[E]||0)+1;var S="".concat(E,"-").concat(dv(qc+E+If[E]));return C?"".concat(C,"-").concat(S):S}(e.displayName,e.parentComponentId):a,c=e.displayName,d=c===void 0?function(_){return Mf(_)?"styled.".concat(_):"Styled(".concat(s2(_),")")}(t):c,p=e.displayName&&e.componentId?"".concat(_m(e.displayName),"-").concat(e.componentId):e.componentId||u,h=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,y=e.shouldForwardProp;if(r&&i.shouldForwardProp){var g=i.shouldForwardProp;if(e.shouldForwardProp){var w=e.shouldForwardProp;y=function(_,C){return g(_,C)&&w(_,C)}}else y=g}var x=new N2(n,p,r?i.componentStyle:void 0);function m(_,C){return function(E,S,j){var z=E.attrs,P=E.componentStyle,$=E.defaultProps,M=E.foldedComponentIds,V=E.styledComponentId,X=E.target,Z=Pi.useContext(Cv),G=jm(),A=E.shouldForwardProp||G.shouldForwardProp,b=n2(S,Z,$)||zs,I=function(ve,pe,fe){for(var Be,Ee=Zt(Zt({},pe),{className:void 0,theme:fe}),Tn=0;Tn<ve.length;Tn+=1){var Ge=bs(Be=ve[Tn])?Be(Ee):Be;for(var Qe in Ge)Ee[Qe]=Qe==="className"?eo(Ee[Qe],Ge[Qe]):Qe==="style"?Zt(Zt({},Ee[Qe]),Ge[Qe]):Ge[Qe]}return pe.className&&(Ee.className=eo(Ee.className,pe.className)),Ee}(z,S,b),k=I.as||X,B={};for(var H in I)I[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&I.theme===b||(H==="forwardedAs"?B.as=I.forwardedAs:A&&!A(H,k)||(B[H]=I[H]));var nt=function(ve,pe){var fe=jm(),Be=ve.generateAndInjectStyles(pe,fe.styleSheet,fe.stylis);return Be}(P,I),le=eo(M,V);return nt&&(le+=" "+nt),I.className&&(le+=" "+I.className),B[Mf(k)&&!uv.has(k)?"class":"className"]=le,B.ref=j,R.createElement(k,B)}(v,_,C)}m.displayName=d;var v=Pi.forwardRef(m);return v.attrs=h,v.componentStyle=x,v.displayName=d,v.shouldForwardProp=y,v.foldedComponentIds=r?eo(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=p,v.target=r?i.target:t,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(_){this._foldedDefaultProps=r?function(C){for(var E=[],S=1;S<arguments.length;S++)E[S-1]=arguments[S];for(var j=0,z=E;j<z.length;j++)ep(C,z[j],!0);return C}({},i.defaultProps,_):_}}),Oh(v,function(){return".".concat(v.styledComponentId)}),o&&gv(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Om(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var zm=function(t){return Object.assign(t,{isCss:!0})};function Ev(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(bs(t)||la(t))return zm(lo(Om(Zc,sa([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?lo(r):zm(lo(Om(r,e)))}function np(t,e,n){if(n===void 0&&(n=zs),!e)throw ka(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,Ev.apply(void 0,sa([i],o,!1)))};return r.attrs=function(i){return np(t,e,Zt(Zt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return np(t,e,Zt(Zt({},n),i))},r}var Tv=function(t){return np(M2,t)},T=Tv;uv.forEach(function(t){T[t]=Tv(t)});function jv(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Jd(Ev.apply(void 0,sa([t],e,!1))),i=dv(r);return new wv(i,r)}function Zr(t={}){const e=R.useRef([]),{threshold:n=.1,rootMargin:r="0px",animationClass:i}=t;return R.useEffect(()=>{const s=new IntersectionObserver(l=>{l.forEach(a=>{a.isIntersecting&&a.target.classList.add(i)})},{threshold:n,rootMargin:r});return e.current.forEach(l=>{l&&s.observe(l)}),()=>{e.current.forEach(l=>{l&&s.unobserve(l)})}},[i,n,r]),s=>{s&&!e.current.includes(s)&&e.current.push(s)}}function Ca(){return{fadeIn:Zr({animationClass:"fade-in"}),fadeInFromLeft:Zr({animationClass:"fade-in-from-left"}),fadeInFromRight:Zr({animationClass:"fade-in-from-right"}),fadeInFromTop:Zr({animationClass:"fade-in-from-top"}),fadeInFromBottom:Zr({animationClass:"fade-in-from-bottom"}),fadeInAndPulse:Zr({animationClass:"fade-in-and-pulse"}),fadeInEnlarge:Zr({animationClass:"fade-in-enlarge"}),btnFadeInFromBottom:Zr({animationClass:"btn-fade-in-from-bottom"})}}const I2=T.section`
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
`,L2=T.video`
    position: absolute;
    top: 0;
    right: 50px;
    width: 760px;
    z-index: -1;
    clip-path: inset(1px 1px);
    @media (max-width: 1300px) and (min-width: 1000px) {
        width: 500px;
        right: -8%;
        top: 50px;
    }
    @media (max-width: 999px) {
        display: none;
    }
`,F2=T.div`
  display: none;
  position: absolute;
  top: 20px;
  width: 422px;
  aspect-ratio: 422 / 327;
  z-index: 0;
  @media (max-width: 999px) {
    display: flex;
    position: relative;
    width: 95%;
  }
`,D2=T.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
  opacity: 0;
  @media (max-width: 999px) {
    display: block;
  }
`,$2=T.img`
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
`,A2=T.img`
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
`;T.video`
    display: none;
    z-index: 0;
    @media (max-width: 999px) {
        display:none;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 400px;
    }
`;const B2=T.div`
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
`,U2=jv`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,W2=jv`
    0% {
        opacity: 0;
        transform: scale(0.8);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`,V2=T.img`
    padding-top: 70px;
    width: 486px;
    animation: ${W2} 1s ease-in-out backwards;
    @media (max-width: 1300px) and (min-width: 1000px) {
        
    }
`,H2=T.img`
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
`,Y2=T.div`
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
`,X2=T.img`
    position: relative;
    margin-left: 74px;
    width: 850px;
    height: auto;
    object-fit: contain; 
    @media (max-width: 1300px) and (min-width: 1000px) {
        width: 85%;
        margin-left: 0;
        top: 430px;
    }
    @media (max-width: 999px) {
        display: none;
    }
`,G2=T.img`
    display: none;
    @media (max-width: 999px) {
     display: block;
        position: absolute;
        top: 679px;
        width: 300px;
        left: 10%;
    }
`;T.img`
    display: none;
`;T.img`
    display: none;
`;const Q2=()=>{const{fadeInFromBottom:t,fadeInEnlarge:e,fadeInFromLeft:n,fadeInFromRight:r}=Ca(),[i,o]=R.useState(!0);return R.useEffect(()=>{const s=setInterval(()=>{o(!i)},1e3);return()=>clearInterval(s)},[i]),f.jsxs(I2,{children:[f.jsx(L2,{src:"./home/event-banner-video-desktop.mp4",autoPlay:!0,muted:!0,playsInline:!0,preload:"auto"}),f.jsxs(F2,{children:[f.jsx(D2,{ref:t,src:"./home/mb-kv-case.png"}),f.jsx($2,{ref:e,src:"./home/mb-kv-flower.png"}),f.jsx(A2,{ref:r,src:"./home/mb-kv-flight.png"})]}),f.jsxs(B2,{children:[f.jsx(V2,{src:"./home/event-banner-title.png"}),f.jsx(H2,{src:"./home/event-banner-airplane.png"})]}),f.jsxs(Y2,{$isBlue:i,children:[f.jsx("p",{children:"投保全球旅平險"}),f.jsxs("p",{children:["驚喜",f.jsx("span",{children:"多多多多多多"}),"到滿出來！"]})]}),f.jsx(X2,{ref:n,src:"./home/english-title1.png",alt:"english title"}),f.jsx(G2,{ref:n,src:"./home/english-title1-mobile.png",alt:"mobile english title"})]})};var Pv={exports:{}},K2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",q2=K2,Z2=q2;function Ov(){}function zv(){}zv.resetWarningCache=Ov;var J2=function(){function t(r,i,o,s,l,a){if(a!==Z2){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:zv,resetWarningCache:Ov};return n.PropTypes=n,n};Pv.exports=J2();var eC=Pv.exports;const zn=Tg(eC),tC={white:"#FFFFFF",yellow:"#FED430",red:"#FF837E",blue:"#2496F0"},nC={white:"#000000",yellow:"#000000",red:"#000000",blue:"#FFFFFF"},rC={white:"#000000",yellow:"#000000",red:"#FF837E",blue:"#2496F0"},bv=T.div`
  width: ${t=>t.$width||"100%"};
  height: ${t=>t.$height||"65px"};
  background-color: ${t=>tC[t.$color]};
  border-radius: 8px;
  position: absolute;
  top: 5px;
  left: 5px;
  transition: all 0.3s ease;
`,Rv=T.div`
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
`,iC=T.button`
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
    ${bv} {
      background-color: ${t=>t.$hoverBgColor||"#FFFFFF"};
    }
    ${Rv} {
      color: ${t=>rC[t.$color]};
    }
  }
`,oC=T.div`
  position: relative;
  right: 50px;
`,Vt=({color:t="yellow",hoverBgColor:e,children:n,onClick:r,icon:i,width:o,height:s})=>f.jsxs(iC,{$color:t,$hoverBgColor:e,onClick:r,$width:o,$height:s,children:[f.jsx(bv,{$color:t,$width:o,$height:s}),f.jsx(Rv,{$color:t,$isAccordion:!!i,$width:o,$height:s,children:f.jsx("div",{style:{zIndex:5},children:n})}),i&&f.jsx(oC,{children:i})]});Vt.propTypes={color:zn.string,children:zn.node.isRequired,onClick:zn.func,icon:zn.node,hoverBgColor:zn.string,width:zn.string,height:zn.string};const sC=T.section`
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
`,lC=T.div`
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
`,aC=T.div`
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
        left: 10%;
        top: 390px;
        font-size: 18px;
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
`,uC=T.img`
    position: absolute;
    top: 60px;
    left: 40px;
    width: 1500px;
    height: 800px;
    z-index: 0;
    @media (max-width: 1300px) {
        display: none;
    }
`,cC=T.img`
    position: absolute;
    top: 220px;
    left: 50%;
    transform: translateX(-40%);
    width: 299px;
    z-index: 0;
    @media (min-width:999px) {
        display: none;
    }
`,fC=T.img`
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
`,dC=T.img`
    position: absolute;
    left: -65px;
    bottom: 20px;
    width: 343px;
    @media (max-width: 1301px) {
        display: none;
    }
`,pC=T.img`
    position: absolute;
    left: 269px;
    bottom: 20px;
    width: 383px;
    transform:rotate(-5deg);
    @media (max-width: 1301px) {
        display: none;
    }
`;T.img`
    display: none;
    @media (max-width: 1000px) {
        display: block;
        position: absolute;
        top: 400px;
        left: 50%;
        transform: translateX(-50%);
        width: 414px;
        
    }
`;const hC=T.img`
    position: absolute;
    top: 100px;
    right: 41px;
    width: 350px;
    height: auto;
    object-fit: contain; 
    z-index: 0;
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
`,mC=T.img`
    position: absolute;
    bottom: 20px;
    right: 48px;
    opacity: 0;
    @media (max-width: 1301px) {
        display: none;
    }
`,gC=T.img`
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
`,xC=T.img`
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
`,vC=T.div`
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
`,yC=()=>{const{fadeInEnlarge:t,fadeInFromLeft:e,fadeInFromRight:n,fadeInAndPulse:r,fadeInFromBottom:i,btnFadeInFromBottom:o}=Ca();return f.jsxs(sC,{children:[f.jsx(fC,{ref:t,id:"sec1",src:"./home/new-year-event-fire.png",alt:"fireworks"}),f.jsx(dC,{src:"./home/shadow-line1.svg",alt:"line one"}),f.jsx(pC,{src:"./home/shadow-line2.svg",alt:"line two"}),f.jsxs(lC,{ref:e,children:[f.jsx("img",{src:"./home/new-year-event-title.svg",alt:"title"}),f.jsx("img",{src:"./home/common-title-lottery.svg",alt:"common title lottery"})]}),f.jsxs(aC,{ref:e,children:[f.jsx("span",{children:"2024/12/15-2025/1/20"}),"期間，",f.jsx("br",{}),"成功網路投保",f.jsx("span",{children:"「國外旅平險」"})]}),f.jsx(hC,{ref:n,src:"./home/english-title2.png",alt:"english title"}),f.jsx(mC,{ref:i,src:"./home/new-year-event.svg",alt:"event"}),f.jsx(gC,{ref:i,src:"./home/new-year-event-mobile.svg",alt:"mobile event"}),f.jsx(xC,{ref:r,src:"./home/new-year-event-surprise.png",alt:"surprise"}),f.jsx(vC,{ref:o,children:f.jsx("a",{target:"_blank",href:"https://e-commerce.transglobe.com.tw/product/eta?utm_source=ec_eventpage&utm_medium=button&utm_campaign=ec_eventpage_transglobe-journey_newyear&utm_term=2024q4&utm_content=eta",children:f.jsx(Vt,{color:"blue",height:"60px",alt:"投保立即抽",children:"投保立即抽"})})}),f.jsx(uC,{src:"./home/new-year-event-flower.svg",alt:"flower"}),f.jsx(cC,{src:"./home/new-year-event-flower-mobile.svg",alt:"mobile flower"})]})},_C=T.section`
    position: relative;
    height: 1127px;
    @media (max-width: 999px) {
        overflow: hidden;
        height: 1390px;
        width: 440px;
        left: 50%;
        transform: translateX(-50%);
    }
    @media (min-width: 1000px) and (max-width: 1300px) {
        height: 800px;
`,wC=T.img`
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
`,SC=T.img`
    position: absolute;
    z-index: 1;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 387;
    @media (min-width: 1000px) {
        display: none;
    }
`,kC=T.img`
    position: absolute;
    top: 170px;
    left: 62px;
    width: 678px;
    @media (max-width: 1301px) {
        top: 80px;
        left: 0%;
        width: 500px;
    }
    @media (max-width: 381px) {
        width: 380px;
        left: 0%;
    }
`,CC=T.img`
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
`,EC=T.div`
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
`,TC=T.div`
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
`,jC=T.img`
    position: absolute;
    top: 200px;
    right: 80px;
    width: 268px;
    height: auto;
    object-fit: contain; 
    z-index: 10;
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
`,PC=T.img`
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

    
`,OC=T.img`
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
`,zC=T.img`
    position: absolute;
    top: 380px;
    left: 5%;
    @media (min-width: 1301px) {
        display: none;
    }
    @media (max-width: 999px) {
    position: absolute;
    top: 520px;
    left: 5%;
    }
`,bC=T.div`
    position: absolute;
    bottom: 150px;
    left: 280px;
    z-index: 10;
    width: 289px;
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
`,RC=T.div`
    position: absolute;
    bottom: 150px;
    right: 320px;
    z-index: 10;
    width: 289px;
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
`,NC=T.img`
    position: absolute;
    top: 355px;
    right: 2%;
    @media (min-width: 1301px) {
        display: none;
    }
    @media (max-width: 999px) {
        top: 860px;
        left: 15%;
    }
`,bm="https://e-commerce.transglobe.com.tw/product/eta?utm_source=ec_eventpage&utm_medium=button&utm_campaign=ec_eventpage_transglobe-journey_domestic%26foreign&utm_term=2024q4&utm_content=eta",MC=()=>{const{fadeInFromBottom:t,fadeInFromLeft:e,btnFadeInFromBottom:n,fadeInFromRight:r}=Ca();return f.jsxs(_C,{children:[f.jsx(kC,{ref:e,id:"sec2",src:"./home/reach-insure-amount-event-temple.png"}),f.jsx(CC,{src:"./home/reach-insure-amount-event-mountain.svg"}),f.jsxs(EC,{ref:e,children:[f.jsx("img",{src:"./home/reach-insure-amount-event-title.svg"}),f.jsx("img",{src:"./home/common-title-lottery.svg"})]}),f.jsxs(TC,{ref:e,children:["2024/10/1~2025/1/31期間，",f.jsx("br",{}),"成功網路投保",f.jsx("span",{children:"「國內外旅平險」"}),"，單筆保費滿額即可抽！"]}),f.jsx(jC,{ref:r,src:"./home/english-title3.png"}),f.jsx(PC,{ref:t,src:"./home/reach-insure-amount-event1.svg",id:"img1"}),f.jsx(zC,{ref:t,src:"./home/reach-insure-amount-event1-mobile.svg",id:"img2"}),f.jsx(bC,{ref:n,children:f.jsx("a",{target:"_blank",href:bm,children:f.jsx(Vt,{color:"blue",height:"60px",children:"投保立即抽"})})}),f.jsx(OC,{ref:t,src:"./home/reach-insure-amount-event2.svg",id:"img3"}),f.jsx(NC,{ref:t,src:"./home/reach-insure-amount-event2-mobile.svg",id:"img4"}),f.jsx(RC,{ref:n,children:f.jsx("a",{target:"_blank",href:bm,children:f.jsx(Vt,{color:"blue",height:"60px",children:"投保立即抽"})})}),f.jsx(wC,{src:"./home/reach-insure-amount-event-flower.svg"}),f.jsx(SC,{src:"./home/reach-insure-amount-event-flower-mobile.svg"})]})};function Or(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Nv(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var wn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Rs={duration:.5,overwrite:!1,delay:0},zh,Rt,Pe,Fn=1e8,ye=1/Fn,rp=Math.PI*2,IC=rp/4,LC=0,Mv=Math.sqrt,FC=Math.cos,DC=Math.sin,gt=function(e){return typeof e=="string"},$e=function(e){return typeof e=="function"},Wr=function(e){return typeof e=="number"},bh=function(e){return typeof e>"u"},kr=function(e){return typeof e=="object"},nn=function(e){return e!==!1},Rh=function(){return typeof window<"u"},Qa=function(e){return $e(e)||gt(e)},Iv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Nt=Array.isArray,ip=/(?:-?\.?\d|\.)+/gi,Lv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ns=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Lf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Fv=/[+-]=-?[.\d]+/,Dv=/[^,'"\[\]\s]+/gi,$C=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ne,dr,op,Nh,kn={},mc={},$v,Av=function(e){return(mc=wo(e,kn))&&ln},Mh=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},aa=function(e,n){return!n&&console.warn(e)},Bv=function(e,n){return e&&(kn[e]=n)&&mc&&(mc[e]=n)||kn},ua=function(){return 0},AC={suppressEvents:!0,isStart:!0,kill:!1},Pu={suppressEvents:!0,kill:!1},BC={suppressEvents:!0},Ih={},Ei=[],sp={},Uv,mn={},Ff={},Rm=30,Ou=[],Lh="",Fh=function(e){var n=e[0],r,i;if(kr(n)||$e(n)||(e=[e]),!(r=(n._gsap||{}).harness)){for(i=Ou.length;i--&&!Ou[i].targetTest(n););r=Ou[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new dy(e[i],r)))||e.splice(i,1);return e},ao=function(e){return e._gsap||Fh(Dn(e))[0]._gsap},Wv=function(e,n,r){return(r=e[n])&&$e(r)?e[n]():bh(r)&&e.getAttribute&&e.getAttribute(n)||r},rn=function(e,n){return(e=e.split(",")).forEach(n)||e},He=function(e){return Math.round(e*1e5)/1e5||0},ht=function(e){return Math.round(e*1e7)/1e7||0},fs=function(e,n){var r=n.charAt(0),i=parseFloat(n.substr(2));return e=parseFloat(e),r==="+"?e+i:r==="-"?e-i:r==="*"?e*i:e/i},UC=function(e,n){for(var r=n.length,i=0;e.indexOf(n[i])<0&&++i<r;);return i<r},gc=function(){var e=Ei.length,n=Ei.slice(0),r,i;for(sp={},Ei.length=0,r=0;r<e;r++)i=n[r],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Vv=function(e,n,r,i){Ei.length&&!Rt&&gc(),e.render(n,r,Rt&&n<0&&(e._initted||e._startAt)),Ei.length&&!Rt&&gc()},Hv=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(Dv).length<2?n:gt(e)?e.trim():e},Yv=function(e){return e},Vn=function(e,n){for(var r in n)r in e||(e[r]=n[r]);return e},WC=function(e){return function(n,r){for(var i in r)i in n||i==="duration"&&e||i==="ease"||(n[i]=r[i])}},wo=function(e,n){for(var r in n)e[r]=n[r];return e},Nm=function t(e,n){for(var r in n)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(e[r]=kr(n[r])?t(e[r]||(e[r]={}),n[r]):n[r]);return e},xc=function(e,n){var r={},i;for(i in e)i in n||(r[i]=e[i]);return r},Pl=function(e){var n=e.parent||Ne,r=e.keyframes?WC(Nt(e.keyframes)):Vn;if(nn(e.inherit))for(;n;)r(e,n.vars.defaults),n=n.parent||n._dp;return e},VC=function(e,n){for(var r=e.length,i=r===n.length;i&&r--&&e[r]===n[r];);return r<0},Xv=function(e,n,r,i,o){var s=e[i],l;if(o)for(l=n[o];s&&s[o]>l;)s=s._prev;return s?(n._next=s._next,s._next=n):(n._next=e[r],e[r]=n),n._next?n._next._prev=n:e[i]=n,n._prev=s,n.parent=n._dp=e,n},Jc=function(e,n,r,i){r===void 0&&(r="_first"),i===void 0&&(i="_last");var o=n._prev,s=n._next;o?o._next=s:e[r]===n&&(e[r]=s),s?s._prev=o:e[i]===n&&(e[i]=o),n._next=n._prev=n.parent=null},bi=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},uo=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var r=e;r;)r._dirty=1,r=r.parent;return e},HC=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},lp=function(e,n,r,i){return e._startAt&&(Rt?e._startAt.revert(Pu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,i))},YC=function t(e){return!e||e._ts&&t(e.parent)},Mm=function(e){return e._repeat?Ns(e._tTime,e=e.duration()+e._rDelay)*e:0},Ns=function(e,n){var r=Math.floor(e/=n);return e&&r===e?r-1:r},vc=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},ef=function(e){return e._end=ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||ye)||0))},tf=function(e,n){var r=e._dp;return r&&r.smoothChildTiming&&e._ts&&(e._start=ht(r._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),ef(e),r._dirty||uo(r,e)),e},Gv=function(e,n){var r;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(r=vc(e.rawTime(),n),(!n._dur||Ea(0,n.totalDuration(),r)-n._tTime>ye)&&n.render(r,!0)),uo(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(r=e;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;e._zTime=-ye}},gr=function(e,n,r,i){return n.parent&&bi(n),n._start=ht((Wr(r)?r:r||e!==Ne?On(e,r,n):e._time)+n._delay),n._end=ht(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),Xv(e,n,"_first","_last",e._sort?"_start":0),ap(n)||(e._recent=n),i||Gv(e,n),e._ts<0&&tf(e,e._tTime),e},Qv=function(e,n){return(kn.ScrollTrigger||Mh("scrollTrigger",n))&&kn.ScrollTrigger.create(n,e)},Kv=function(e,n,r,i,o){if($h(e,n,o),!e._initted)return 1;if(!r&&e._pt&&!Rt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Uv!==gn.frame)return Ei.push(e),e._lazy=[o,i],1},XC=function t(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},ap=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},GC=function(e,n,r,i){var o=e.ratio,s=n<0||!n&&(!e._start&&XC(e)&&!(!e._initted&&ap(e))||(e._ts<0||e._dp._ts<0)&&!ap(e))?0:1,l=e._rDelay,a=0,u,c,d;if(l&&e._repeat&&(a=Ea(0,e._tDur,n),c=Ns(a,l),e._yoyo&&c&1&&(s=1-s),c!==Ns(e._tTime,l)&&(o=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==o||Rt||i||e._zTime===ye||!n&&e._zTime){if(!e._initted&&Kv(e,n,i,r,a))return;for(d=e._zTime,e._zTime=n||(r?ye:0),r||(r=n&&!d),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=a,u=e._pt;u;)u.r(s,u.d),u=u._next;n<0&&lp(e,n,r,!0),e._onUpdate&&!r&&yn(e,"onUpdate"),a&&e._repeat&&!r&&e.parent&&yn(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===s&&(s&&bi(e,1),!r&&!Rt&&(yn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},QC=function(e,n,r){var i;if(r>n)for(i=e._first;i&&i._start<=r;){if(i.data==="isPause"&&i._start>n)return i;i=i._next}else for(i=e._last;i&&i._start>=r;){if(i.data==="isPause"&&i._start<n)return i;i=i._prev}},Ms=function(e,n,r,i){var o=e._repeat,s=ht(n)||0,l=e._tTime/e._tDur;return l&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=o?o<0?1e10:ht(s*(o+1)+e._rDelay*o):s,l>0&&!i&&tf(e,e._tTime=e._tDur*l),e.parent&&ef(e),r||uo(e.parent,e),e},Im=function(e){return e instanceof Bt?uo(e):Ms(e,e._dur)},KC={_start:0,endTime:ua,totalDuration:ua},On=function t(e,n,r){var i=e.labels,o=e._recent||KC,s=e.duration()>=Fn?o.endTime(!1):e._dur,l,a,u;return gt(n)&&(isNaN(n)||n in i)?(a=n.charAt(0),u=n.substr(-1)==="%",l=n.indexOf("="),a==="<"||a===">"?(l>=0&&(n=n.replace(/=/,"")),(a==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(n.substr(1))||0)*(u?(l<0?o:r).totalDuration()/100:1)):l<0?(n in i||(i[n]=s),i[n]):(a=parseFloat(n.charAt(l-1)+n.substr(l+1)),u&&r&&(a=a/100*(Nt(r)?r[0]:r).totalDuration()),l>1?t(e,n.substr(0,l-1),r)+a:s+a)):n==null?s:+n},Ol=function(e,n,r){var i=Wr(n[1]),o=(i?2:1)+(e<2?0:1),s=n[o],l,a;if(i&&(s.duration=n[1]),s.parent=r,e){for(l=s,a=r;a&&!("immediateRender"in l);)l=a.vars.defaults||{},a=nn(a.vars.inherit)&&a.parent;s.immediateRender=nn(l.immediateRender),e<2?s.runBackwards=1:s.startAt=n[o-1]}return new Je(n[0],s,n[o+1])},Di=function(e,n){return e||e===0?n(e):n},Ea=function(e,n,r){return r<e?e:r>n?n:r},bt=function(e,n){return!gt(e)||!(n=$C.exec(e))?"":n[1]},qC=function(e,n,r){return Di(r,function(i){return Ea(e,n,i)})},up=[].slice,qv=function(e,n){return e&&kr(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&kr(e[0]))&&!e.nodeType&&e!==dr},ZC=function(e,n,r){return r===void 0&&(r=[]),e.forEach(function(i){var o;return gt(i)&&!n||qv(i,1)?(o=r).push.apply(o,Dn(i)):r.push(i)})||r},Dn=function(e,n,r){return Pe&&!n&&Pe.selector?Pe.selector(e):gt(e)&&!r&&(op||!Is())?up.call((n||Nh).querySelectorAll(e),0):Nt(e)?ZC(e,r):qv(e)?up.call(e,0):e?[e]:[]},cp=function(e){return e=Dn(e)[0]||aa("Invalid scope")||{},function(n){var r=e.current||e.nativeElement||e;return Dn(n,r.querySelectorAll?r:r===e?aa("Invalid scope")||Nh.createElement("div"):e)}},Zv=function(e){return e.sort(function(){return .5-Math.random()})},Jv=function(e){if($e(e))return e;var n=kr(e)?e:{each:e},r=co(n.ease),i=n.from||0,o=parseFloat(n.base)||0,s={},l=i>0&&i<1,a=isNaN(i)||l,u=n.axis,c=i,d=i;return gt(i)?c=d={center:.5,edges:.5,end:1}[i]||0:!l&&a&&(c=i[0],d=i[1]),function(p,h,y){var g=(y||n).length,w=s[g],x,m,v,_,C,E,S,j,z;if(!w){if(z=n.grid==="auto"?0:(n.grid||[1,Fn])[1],!z){for(S=-Fn;S<(S=y[z++].getBoundingClientRect().left)&&z<g;);z<g&&z--}for(w=s[g]=[],x=a?Math.min(z,g)*c-.5:i%z,m=z===Fn?0:a?g*d/z-.5:i/z|0,S=0,j=Fn,E=0;E<g;E++)v=E%z-x,_=m-(E/z|0),w[E]=C=u?Math.abs(u==="y"?_:v):Mv(v*v+_*_),C>S&&(S=C),C<j&&(j=C);i==="random"&&Zv(w),w.max=S-j,w.min=j,w.v=g=(parseFloat(n.amount)||parseFloat(n.each)*(z>g?g-1:u?u==="y"?g/z:z:Math.max(z,g/z))||0)*(i==="edges"?-1:1),w.b=g<0?o-g:o,w.u=bt(n.amount||n.each)||0,r=r&&g<0?uy(r):r}return g=(w[p]-w.min)/w.max||0,ht(w.b+(r?r(g):g)*w.v)+w.u}},fp=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(r){var i=ht(Math.round(parseFloat(r)/e)*e*n);return(i-i%1)/n+(Wr(r)?0:bt(r))}},ey=function(e,n){var r=Nt(e),i,o;return!r&&kr(e)&&(i=r=e.radius||Fn,e.values?(e=Dn(e.values),(o=!Wr(e[0]))&&(i*=i)):e=fp(e.increment)),Di(n,r?$e(e)?function(s){return o=e(s),Math.abs(o-s)<=i?o:s}:function(s){for(var l=parseFloat(o?s.x:s),a=parseFloat(o?s.y:0),u=Fn,c=0,d=e.length,p,h;d--;)o?(p=e[d].x-l,h=e[d].y-a,p=p*p+h*h):p=Math.abs(e[d]-l),p<u&&(u=p,c=d);return c=!i||u<=i?e[c]:s,o||c===s||Wr(s)?c:c+bt(s)}:fp(e))},ty=function(e,n,r,i){return Di(Nt(e)?!n:r===!0?!!(r=0):!i,function(){return Nt(e)?e[~~(Math.random()*e.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((e-r/2+Math.random()*(n-e+r*.99))/r)*r*i)/i})},JC=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(i){return n.reduce(function(o,s){return s(o)},i)}},eE=function(e,n){return function(r){return e(parseFloat(r))+(n||bt(r))}},tE=function(e,n,r){return ry(e,n,0,1,r)},ny=function(e,n,r){return Di(r,function(i){return e[~~n(i)]})},nE=function t(e,n,r){var i=n-e;return Nt(e)?ny(e,t(0,e.length),n):Di(r,function(o){return(i+(o-e)%i)%i+e})},rE=function t(e,n,r){var i=n-e,o=i*2;return Nt(e)?ny(e,t(0,e.length-1),n):Di(r,function(s){return s=(o+(s-e)%o)%o||0,e+(s>i?o-s:s)})},ca=function(e){for(var n=0,r="",i,o,s,l;~(i=e.indexOf("random(",n));)s=e.indexOf(")",i),l=e.charAt(i+7)==="[",o=e.substr(i+7,s-i-7).match(l?Dv:ip),r+=e.substr(n,i-n)+ty(l?o:+o[0],l?0:+o[1],+o[2]||1e-5),n=s+1;return r+e.substr(n,e.length-n)},ry=function(e,n,r,i,o){var s=n-e,l=i-r;return Di(o,function(a){return r+((a-e)/s*l||0)})},iE=function t(e,n,r,i){var o=isNaN(e+n)?0:function(h){return(1-h)*e+h*n};if(!o){var s=gt(e),l={},a,u,c,d,p;if(r===!0&&(i=1)&&(r=null),s)e={p:e},n={p:n};else if(Nt(e)&&!Nt(n)){for(c=[],d=e.length,p=d-2,u=1;u<d;u++)c.push(t(e[u-1],e[u]));d--,o=function(y){y*=d;var g=Math.min(p,~~y);return c[g](y-g)},r=n}else i||(e=wo(Nt(e)?[]:{},e));if(!c){for(a in n)Dh.call(l,e,a,"get",n[a]);o=function(y){return Uh(y,l)||(s?e.p:e)}}}return Di(r,o)},Lm=function(e,n,r){var i=e.labels,o=Fn,s,l,a;for(s in i)l=i[s]-n,l<0==!!r&&l&&o>(l=Math.abs(l))&&(a=s,o=l);return a},yn=function(e,n,r){var i=e.vars,o=i[n],s=Pe,l=e._ctx,a,u,c;if(o)return a=i[n+"Params"],u=i.callbackScope||e,r&&Ei.length&&gc(),l&&(Pe=l),c=a?o.apply(u,a):o.call(u),Pe=s,c},fl=function(e){return bi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Rt),e.progress()<1&&yn(e,"onInterrupt"),e},rs,iy=[],oy=function(e){if(e)if(e=!e.name&&e.default||e,Rh()||e.headless){var n=e.name,r=$e(e),i=n&&!r&&e.init?function(){this._props=[]}:e,o={init:ua,render:Uh,add:Dh,kill:_E,modifier:yE,rawVars:0},s={targetTest:0,get:0,getSetter:Bh,aliases:{},register:0};if(Is(),e!==i){if(mn[n])return;Vn(i,Vn(xc(e,o),s)),wo(i.prototype,wo(o,xc(e,s))),mn[i.prop=n]=i,e.targetTest&&(Ou.push(i),Ih[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}Bv(n,i),e.register&&e.register(ln,i,on)}else iy.push(e)},ge=255,dl={aqua:[0,ge,ge],lime:[0,ge,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ge],navy:[0,0,128],white:[ge,ge,ge],olive:[128,128,0],yellow:[ge,ge,0],orange:[ge,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ge,0,0],pink:[ge,192,203],cyan:[0,ge,ge],transparent:[ge,ge,ge,0]},Df=function(e,n,r){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(r-n)*e*6:e<.5?r:e*3<2?n+(r-n)*(2/3-e)*6:n)*ge+.5|0},sy=function(e,n,r){var i=e?Wr(e)?[e>>16,e>>8&ge,e&ge]:0:dl.black,o,s,l,a,u,c,d,p,h,y;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),dl[e])i=dl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),s=e.charAt(2),l=e.charAt(3),e="#"+o+o+s+s+l+l+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ge,i&ge,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ge,e&ge]}else if(e.substr(0,3)==="hsl"){if(i=y=e.match(ip),!n)a=+i[0]%360/360,u=+i[1]/100,c=+i[2]/100,s=c<=.5?c*(u+1):c+u-c*u,o=c*2-s,i.length>3&&(i[3]*=1),i[0]=Df(a+1/3,o,s),i[1]=Df(a,o,s),i[2]=Df(a-1/3,o,s);else if(~e.indexOf("="))return i=e.match(Lv),r&&i.length<4&&(i[3]=1),i}else i=e.match(ip)||dl.transparent;i=i.map(Number)}return n&&!y&&(o=i[0]/ge,s=i[1]/ge,l=i[2]/ge,d=Math.max(o,s,l),p=Math.min(o,s,l),c=(d+p)/2,d===p?a=u=0:(h=d-p,u=c>.5?h/(2-d-p):h/(d+p),a=d===o?(s-l)/h+(s<l?6:0):d===s?(l-o)/h+2:(o-s)/h+4,a*=60),i[0]=~~(a+.5),i[1]=~~(u*100+.5),i[2]=~~(c*100+.5)),r&&i.length<4&&(i[3]=1),i},ly=function(e){var n=[],r=[],i=-1;return e.split(Ti).forEach(function(o){var s=o.match(ns)||[];n.push.apply(n,s),r.push(i+=s.length+1)}),n.c=r,n},Fm=function(e,n,r){var i="",o=(e+i).match(Ti),s=n?"hsla(":"rgba(",l=0,a,u,c,d;if(!o)return e;if(o=o.map(function(p){return(p=sy(p,n,1))&&s+(n?p[0]+","+p[1]+"%,"+p[2]+"%,"+p[3]:p.join(","))+")"}),r&&(c=ly(e),a=r.c,a.join(i)!==c.c.join(i)))for(u=e.replace(Ti,"1").split(ns),d=u.length-1;l<d;l++)i+=u[l]+(~a.indexOf(l)?o.shift()||s+"0,0,0,0)":(c.length?c:o.length?o:r).shift());if(!u)for(u=e.split(Ti),d=u.length-1;l<d;l++)i+=u[l]+o[l];return i+u[d]},Ti=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in dl)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),oE=/hsl[a]?\(/,ay=function(e){var n=e.join(" "),r;if(Ti.lastIndex=0,Ti.test(n))return r=oE.test(n),e[1]=Fm(e[1],r),e[0]=Fm(e[0],r,ly(e[1])),!0},fa,gn=function(){var t=Date.now,e=500,n=33,r=t(),i=r,o=1e3/240,s=o,l=[],a,u,c,d,p,h,y=function g(w){var x=t()-i,m=w===!0,v,_,C,E;if((x>e||x<0)&&(r+=x-n),i+=x,C=i-r,v=C-s,(v>0||m)&&(E=++d.frame,p=C-d.time*1e3,d.time=C=C/1e3,s+=v+(v>=o?4:o-v),_=1),m||(a=u(g)),_)for(h=0;h<l.length;h++)l[h](C,p,E,w)};return d={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(w){return p/(1e3/(w||60))},wake:function(){$v&&(!op&&Rh()&&(dr=op=window,Nh=dr.document||{},kn.gsap=ln,(dr.gsapVersions||(dr.gsapVersions=[])).push(ln.version),Av(mc||dr.GreenSockGlobals||!dr.gsap&&dr||{}),iy.forEach(oy)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,a&&d.sleep(),u=c||function(w){return setTimeout(w,s-d.time*1e3+1|0)},fa=1,y(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(a),fa=0,u=ua},lagSmoothing:function(w,x){e=w||1/0,n=Math.min(x||33,e)},fps:function(w){o=1e3/(w||240),s=d.time*1e3+o},add:function(w,x,m){var v=x?function(_,C,E,S){w(_,C,E,S),d.remove(v)}:w;return d.remove(w),l[m?"unshift":"push"](v),Is(),v},remove:function(w,x){~(x=l.indexOf(w))&&l.splice(x,1)&&h>=x&&h--},_listeners:l},d}(),Is=function(){return!fa&&gn.wake()},se={},sE=/^[\d.\-M][\d.\-,\s]/,lE=/["']/g,aE=function(e){for(var n={},r=e.substr(1,e.length-3).split(":"),i=r[0],o=1,s=r.length,l,a,u;o<s;o++)a=r[o],l=o!==s-1?a.lastIndexOf(","):a.length,u=a.substr(0,l),n[i]=isNaN(u)?u.replace(lE,"").trim():+u,i=a.substr(l+1).trim();return n},uE=function(e){var n=e.indexOf("(")+1,r=e.indexOf(")"),i=e.indexOf("(",n);return e.substring(n,~i&&i<r?e.indexOf(")",r+1):r)},cE=function(e){var n=(e+"").split("("),r=se[n[0]];return r&&n.length>1&&r.config?r.config.apply(null,~e.indexOf("{")?[aE(n[1])]:uE(e).split(",").map(Hv)):se._CE&&sE.test(e)?se._CE("",e):r},uy=function(e){return function(n){return 1-e(1-n)}},cy=function t(e,n){for(var r=e._first,i;r;)r instanceof Bt?t(r,n):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==n&&(r.timeline?t(r.timeline,n):(i=r._ease,r._ease=r._yEase,r._yEase=i,r._yoyo=n)),r=r._next},co=function(e,n){return e&&($e(e)?e:se[e]||cE(e))||n},zo=function(e,n,r,i){r===void 0&&(r=function(a){return 1-n(1-a)}),i===void 0&&(i=function(a){return a<.5?n(a*2)/2:1-n((1-a)*2)/2});var o={easeIn:n,easeOut:r,easeInOut:i},s;return rn(e,function(l){se[l]=kn[l]=o,se[s=l.toLowerCase()]=r;for(var a in o)se[s+(a==="easeIn"?".in":a==="easeOut"?".out":".inOut")]=se[l+"."+a]=o[a]}),o},fy=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},$f=function t(e,n,r){var i=n>=1?n:1,o=(r||(e?.3:.45))/(n<1?n:1),s=o/rp*(Math.asin(1/i)||0),l=function(c){return c===1?1:i*Math.pow(2,-10*c)*DC((c-s)*o)+1},a=e==="out"?l:e==="in"?function(u){return 1-l(1-u)}:fy(l);return o=rp/o,a.config=function(u,c){return t(e,u,c)},a},Af=function t(e,n){n===void 0&&(n=1.70158);var r=function(s){return s?--s*s*((n+1)*s+n)+1:0},i=e==="out"?r:e==="in"?function(o){return 1-r(1-o)}:fy(r);return i.config=function(o){return t(e,o)},i};rn("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var n=e<5?e+1:e;zo(t+",Power"+(n-1),e?function(r){return Math.pow(r,n)}:function(r){return r},function(r){return 1-Math.pow(1-r,n)},function(r){return r<.5?Math.pow(r*2,n)/2:1-Math.pow((1-r)*2,n)/2})});se.Linear.easeNone=se.none=se.Linear.easeIn;zo("Elastic",$f("in"),$f("out"),$f());(function(t,e){var n=1/e,r=2*n,i=2.5*n,o=function(l){return l<n?t*l*l:l<r?t*Math.pow(l-1.5/e,2)+.75:l<i?t*(l-=2.25/e)*l+.9375:t*Math.pow(l-2.625/e,2)+.984375};zo("Bounce",function(s){return 1-o(1-s)},o)})(7.5625,2.75);zo("Expo",function(t){return t?Math.pow(2,10*(t-1)):0});zo("Circ",function(t){return-(Mv(1-t*t)-1)});zo("Sine",function(t){return t===1?1:-FC(t*IC)+1});zo("Back",Af("in"),Af("out"),Af());se.SteppedEase=se.steps=kn.SteppedEase={config:function(e,n){e===void 0&&(e=1);var r=1/e,i=e+(n?0:1),o=n?1:0,s=1-ye;return function(l){return((i*Ea(0,s,l)|0)+o)*r}}};Rs.ease=se["quad.out"];rn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return Lh+=t+","+t+"Params,"});var dy=function(e,n){this.id=LC++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:Wv,this.set=n?n.getSetter:Bh},da=function(){function t(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Ms(this,+n.duration,1,1),this.data=n.data,Pe&&(this._ctx=Pe,Pe.data.push(this)),fa||gn.wake()}var e=t.prototype;return e.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},e.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},e.totalDuration=function(r){return arguments.length?(this._dirty=0,Ms(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(r,i){if(Is(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(tf(this,r),!o._dp||o.parent||Gv(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&gr(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ye||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),Vv(this,r,i)),this},e.time=function(r,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+Mm(this))%(this._dur+this._rDelay)||(r?this._dur:0),i):this._time},e.totalProgress=function(r,i){return arguments.length?this.totalTime(this.totalDuration()*r,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(r,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+Mm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(r,i){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*o,i):this._repeat?Ns(this._tTime,o)+1:1},e.timeScale=function(r,i){if(!arguments.length)return this._rts===-ye?0:this._rts;if(this._rts===r)return this;var o=this.parent&&this._ts?vc(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-ye?0:this._rts,this.totalTime(Ea(-Math.abs(this._delay),this._tDur,o),i!==!1),ef(this),HC(this)},e.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Is(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ye&&(this._tTime-=ye)))),this):this._ps},e.startTime=function(r){if(arguments.length){this._start=r;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&gr(i,this,r-this._delay),this}return this._start},e.endTime=function(r){return this._start+(nn(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(r){var i=this.parent||this._dp;return i?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?vc(i.rawTime(r),this):this._tTime:this._tTime},e.revert=function(r){r===void 0&&(r=BC);var i=Rt;return Rt=r,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),Rt=i,this},e.globalTime=function(r){for(var i=this,o=arguments.length?r:i.rawTime();i;)o=i._start+o/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(r):o},e.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,Im(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(r){if(arguments.length){var i=this._time;return this._rDelay=r,Im(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},e.seek=function(r,i){return this.totalTime(On(this,r),nn(i))},e.restart=function(r,i){return this.play().totalTime(r?-this._delay:0,nn(i))},e.play=function(r,i){return r!=null&&this.seek(r,i),this.reversed(!1).paused(!1)},e.reverse=function(r,i){return r!=null&&this.seek(r||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(r,i){return r!=null&&this.seek(r,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-ye:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ye,this},e.isActive=function(){var r=this.parent||this._dp,i=this._start,o;return!!(!r||this._ts&&this._initted&&r.isActive()&&(o=r.rawTime(!0))>=i&&o<this.endTime(!0)-ye)},e.eventCallback=function(r,i,o){var s=this.vars;return arguments.length>1?(i?(s[r]=i,o&&(s[r+"Params"]=o),r==="onUpdate"&&(this._onUpdate=i)):delete s[r],this):s[r]},e.then=function(r){var i=this;return new Promise(function(o){var s=$e(r)?r:Yv,l=function(){var u=i.then;i.then=null,$e(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=u),o(s),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){fl(this)},t}();Vn(da.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ye,_prom:0,_ps:!1,_rts:1});var Bt=function(t){Nv(e,t);function e(r,i){var o;return r===void 0&&(r={}),o=t.call(this,r)||this,o.labels={},o.smoothChildTiming=!!r.smoothChildTiming,o.autoRemoveChildren=!!r.autoRemoveChildren,o._sort=nn(r.sortChildren),Ne&&gr(r.parent||Ne,Or(o),i),r.reversed&&o.reverse(),r.paused&&o.paused(!0),r.scrollTrigger&&Qv(Or(o),r.scrollTrigger),o}var n=e.prototype;return n.to=function(i,o,s){return Ol(0,arguments,this),this},n.from=function(i,o,s){return Ol(1,arguments,this),this},n.fromTo=function(i,o,s,l){return Ol(2,arguments,this),this},n.set=function(i,o,s){return o.duration=0,o.parent=this,Pl(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new Je(i,o,On(this,s),1),this},n.call=function(i,o,s){return gr(this,Je.delayedCall(0,i,o),s)},n.staggerTo=function(i,o,s,l,a,u,c){return s.duration=o,s.stagger=s.stagger||l,s.onComplete=u,s.onCompleteParams=c,s.parent=this,new Je(i,s,On(this,a)),this},n.staggerFrom=function(i,o,s,l,a,u,c){return s.runBackwards=1,Pl(s).immediateRender=nn(s.immediateRender),this.staggerTo(i,o,s,l,a,u,c)},n.staggerFromTo=function(i,o,s,l,a,u,c,d){return l.startAt=s,Pl(l).immediateRender=nn(l.immediateRender),this.staggerTo(i,o,l,a,u,c,d)},n.render=function(i,o,s){var l=this._time,a=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=i<=0?0:ht(i),d=this._zTime<0!=i<0&&(this._initted||!u),p,h,y,g,w,x,m,v,_,C,E,S;if(this!==Ne&&c>a&&i>=0&&(c=a),c!==this._tTime||s||d){if(l!==this._time&&u&&(c+=this._time-l,i+=this._time-l),p=c,_=this._start,v=this._ts,x=!v,d&&(u||(l=this._zTime),(i||!o)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,w=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(w*100+i,o,s);if(p=ht(c%w),c===a?(g=this._repeat,p=u):(g=~~(c/w),g&&g===c/w&&(p=u,g--),p>u&&(p=u)),C=Ns(this._tTime,w),!l&&this._tTime&&C!==g&&this._tTime-C*w-this._dur<=0&&(C=g),E&&g&1&&(p=u-p,S=1),g!==C&&!this._lock){var j=E&&C&1,z=j===(E&&g&1);if(g<C&&(j=!j),l=j?0:c%u?u:c,this._lock=1,this.render(l||(S?0:ht(g*w)),o,!u)._lock=0,this._tTime=c,!o&&this.parent&&yn(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),l&&l!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,a=this._tDur,z&&(this._lock=2,l=j?u:-1e-4,this.render(l,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;cy(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=QC(this,ht(l),ht(p)),m&&(c-=p-(p=m._start))),this._tTime=c,this._time=p,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,l=0),!l&&p&&!o&&!g&&(yn(this,"onStart"),this._tTime!==c))return this;if(p>=l&&i>=0)for(h=this._first;h;){if(y=h._next,(h._act||p>=h._start)&&h._ts&&m!==h){if(h.parent!==this)return this.render(i,o,s);if(h.render(h._ts>0?(p-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(p-h._start)*h._ts,o,s),p!==this._time||!this._ts&&!x){m=0,y&&(c+=this._zTime=-ye);break}}h=y}else{h=this._last;for(var P=i<0?i:p;h;){if(y=h._prev,(h._act||P<=h._end)&&h._ts&&m!==h){if(h.parent!==this)return this.render(i,o,s);if(h.render(h._ts>0?(P-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(P-h._start)*h._ts,o,s||Rt&&(h._initted||h._startAt)),p!==this._time||!this._ts&&!x){m=0,y&&(c+=this._zTime=P?-ye:ye);break}}h=y}}if(m&&!o&&(this.pause(),m.render(p>=l?0:-ye)._zTime=p>=l?1:-1,this._ts))return this._start=_,ef(this),this.render(i,o,s);this._onUpdate&&!o&&yn(this,"onUpdate",!0),(c===a&&this._tTime>=this.totalDuration()||!c&&l)&&(_===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(c===a&&this._ts>0||!c&&this._ts<0)&&bi(this,1),!o&&!(i<0&&!l)&&(c||l||!a)&&(yn(this,c===a&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<a&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(i,o){var s=this;if(Wr(o)||(o=On(this,o,i)),!(i instanceof da)){if(Nt(i))return i.forEach(function(l){return s.add(l,o)}),this;if(gt(i))return this.addLabel(i,o);if($e(i))i=Je.delayedCall(0,i);else return this}return this!==i?gr(this,i,o):this},n.getChildren=function(i,o,s,l){i===void 0&&(i=!0),o===void 0&&(o=!0),s===void 0&&(s=!0),l===void 0&&(l=-Fn);for(var a=[],u=this._first;u;)u._start>=l&&(u instanceof Je?o&&a.push(u):(s&&a.push(u),i&&a.push.apply(a,u.getChildren(!0,o,s)))),u=u._next;return a},n.getById=function(i){for(var o=this.getChildren(1,1,1),s=o.length;s--;)if(o[s].vars.id===i)return o[s]},n.remove=function(i){return gt(i)?this.removeLabel(i):$e(i)?this.killTweensOf(i):(Jc(this,i),i===this._recent&&(this._recent=this._last),uo(this))},n.totalTime=function(i,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ht(gn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),t.prototype.totalTime.call(this,i,o),this._forcing=0,this):this._tTime},n.addLabel=function(i,o){return this.labels[i]=On(this,o),this},n.removeLabel=function(i){return delete this.labels[i],this},n.addPause=function(i,o,s){var l=Je.delayedCall(0,o||ua,s);return l.data="isPause",this._hasPause=1,gr(this,l,On(this,i))},n.removePause=function(i){var o=this._first;for(i=On(this,i);o;)o._start===i&&o.data==="isPause"&&bi(o),o=o._next},n.killTweensOf=function(i,o,s){for(var l=this.getTweensOf(i,s),a=l.length;a--;)fi!==l[a]&&l[a].kill(i,o);return this},n.getTweensOf=function(i,o){for(var s=[],l=Dn(i),a=this._first,u=Wr(o),c;a;)a instanceof Je?UC(a._targets,l)&&(u?(!fi||a._initted&&a._ts)&&a.globalTime(0)<=o&&a.globalTime(a.totalDuration())>o:!o||a.isActive())&&s.push(a):(c=a.getTweensOf(l,o)).length&&s.push.apply(s,c),a=a._next;return s},n.tweenTo=function(i,o){o=o||{};var s=this,l=On(s,i),a=o,u=a.startAt,c=a.onStart,d=a.onStartParams,p=a.immediateRender,h,y=Je.to(s,Vn({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:l,overwrite:"auto",duration:o.duration||Math.abs((l-(u&&"time"in u?u.time:s._time))/s.timeScale())||ye,onStart:function(){if(s.pause(),!h){var w=o.duration||Math.abs((l-(u&&"time"in u?u.time:s._time))/s.timeScale());y._dur!==w&&Ms(y,w,0,1).render(y._time,!0,!0),h=1}c&&c.apply(y,d||[])}},o));return p?y.render(0):y},n.tweenFromTo=function(i,o,s){return this.tweenTo(o,Vn({startAt:{time:On(this,i)}},s))},n.recent=function(){return this._recent},n.nextLabel=function(i){return i===void 0&&(i=this._time),Lm(this,On(this,i))},n.previousLabel=function(i){return i===void 0&&(i=this._time),Lm(this,On(this,i),1)},n.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ye)},n.shiftChildren=function(i,o,s){s===void 0&&(s=0);for(var l=this._first,a=this.labels,u;l;)l._start>=s&&(l._start+=i,l._end+=i),l=l._next;if(o)for(u in a)a[u]>=s&&(a[u]+=i);return uo(this)},n.invalidate=function(i){var o=this._first;for(this._lock=0;o;)o.invalidate(i),o=o._next;return t.prototype.invalidate.call(this,i)},n.clear=function(i){i===void 0&&(i=!0);for(var o=this._first,s;o;)s=o._next,this.remove(o),o=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),uo(this)},n.totalDuration=function(i){var o=0,s=this,l=s._last,a=Fn,u,c,d;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(d=s.parent;l;)u=l._prev,l._dirty&&l.totalDuration(),c=l._start,c>a&&s._sort&&l._ts&&!s._lock?(s._lock=1,gr(s,l,c-l._delay,1)._lock=0):a=c,c<0&&l._ts&&(o-=c,(!d&&!s._dp||d&&d.smoothChildTiming)&&(s._start+=c/s._ts,s._time-=c,s._tTime-=c),s.shiftChildren(-c,!1,-1/0),a=0),l._end>o&&l._ts&&(o=l._end),l=u;Ms(s,s===Ne&&s._time>o?s._time:o,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(Ne._ts&&(Vv(Ne,vc(i,Ne)),Uv=gn.frame),gn.frame>=Rm){Rm+=wn.autoSleep||120;var o=Ne._first;if((!o||!o._ts)&&wn.autoSleep&&gn._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||gn.sleep()}}},e}(da);Vn(Bt.prototype,{_lock:0,_hasPause:0,_forcing:0});var fE=function(e,n,r,i,o,s,l){var a=new on(this._pt,e,n,0,1,vy,null,o),u=0,c=0,d,p,h,y,g,w,x,m;for(a.b=r,a.e=i,r+="",i+="",(x=~i.indexOf("random("))&&(i=ca(i)),s&&(m=[r,i],s(m,e,n),r=m[0],i=m[1]),p=r.match(Lf)||[];d=Lf.exec(i);)y=d[0],g=i.substring(u,d.index),h?h=(h+1)%5:g.substr(-5)==="rgba("&&(h=1),y!==p[c++]&&(w=parseFloat(p[c-1])||0,a._pt={_next:a._pt,p:g||c===1?g:",",s:w,c:y.charAt(1)==="="?fs(w,y)-w:parseFloat(y)-w,m:h&&h<4?Math.round:0},u=Lf.lastIndex);return a.c=u<i.length?i.substring(u,i.length):"",a.fp=l,(Fv.test(i)||x)&&(a.e=0),this._pt=a,a},Dh=function(e,n,r,i,o,s,l,a,u,c){$e(i)&&(i=i(o||0,e,s));var d=e[n],p=r!=="get"?r:$e(d)?u?e[n.indexOf("set")||!$e(e["get"+n.substr(3)])?n:"get"+n.substr(3)](u):e[n]():d,h=$e(d)?u?gE:gy:Ah,y;if(gt(i)&&(~i.indexOf("random(")&&(i=ca(i)),i.charAt(1)==="="&&(y=fs(p,i)+(bt(p)||0),(y||y===0)&&(i=y))),!c||p!==i||dp)return!isNaN(p*i)&&i!==""?(y=new on(this._pt,e,n,+p||0,i-(p||0),typeof d=="boolean"?vE:xy,0,h),u&&(y.fp=u),l&&y.modifier(l,this,e),this._pt=y):(!d&&!(n in e)&&Mh(n,i),fE.call(this,e,n,p,i,h,a||wn.stringFilter,u))},dE=function(e,n,r,i,o){if($e(e)&&(e=zl(e,o,n,r,i)),!kr(e)||e.style&&e.nodeType||Nt(e)||Iv(e))return gt(e)?zl(e,o,n,r,i):e;var s={},l;for(l in e)s[l]=zl(e[l],o,n,r,i);return s},py=function(e,n,r,i,o,s){var l,a,u,c;if(mn[e]&&(l=new mn[e]).init(o,l.rawVars?n[e]:dE(n[e],i,o,s,r),r,i,s)!==!1&&(r._pt=a=new on(r._pt,o,e,0,1,l.render,l,0,l.priority),r!==rs))for(u=r._ptLookup[r._targets.indexOf(o)],c=l._props.length;c--;)u[l._props[c]]=a;return l},fi,dp,$h=function t(e,n,r){var i=e.vars,o=i.ease,s=i.startAt,l=i.immediateRender,a=i.lazy,u=i.onUpdate,c=i.runBackwards,d=i.yoyoEase,p=i.keyframes,h=i.autoRevert,y=e._dur,g=e._startAt,w=e._targets,x=e.parent,m=x&&x.data==="nested"?x.vars.targets:w,v=e._overwrite==="auto"&&!zh,_=e.timeline,C,E,S,j,z,P,$,M,V,X,Z,G,A;if(_&&(!p||!o)&&(o="none"),e._ease=co(o,Rs.ease),e._yEase=d?uy(co(d===!0?o:d,Rs.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!_&&!!i.runBackwards,!_||p&&!i.stagger){if(M=w[0]?ao(w[0]).harness:0,G=M&&i[M.prop],C=xc(i,Ih),g&&(g._zTime<0&&g.progress(1),n<0&&c&&l&&!h?g.render(-1,!0):g.revert(c&&y?Pu:AC),g._lazy=0),s){if(bi(e._startAt=Je.set(w,Vn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!g&&nn(a),startAt:null,delay:0,onUpdate:u&&function(){return yn(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Rt||!l&&!h)&&e._startAt.revert(Pu),l&&y&&n<=0&&r<=0){n&&(e._zTime=n);return}}else if(c&&y&&!g){if(n&&(l=!1),S=Vn({overwrite:!1,data:"isFromStart",lazy:l&&!g&&nn(a),immediateRender:l,stagger:0,parent:x},C),G&&(S[M.prop]=G),bi(e._startAt=Je.set(w,S)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Rt?e._startAt.revert(Pu):e._startAt.render(-1,!0)),e._zTime=n,!l)t(e._startAt,ye,ye);else if(!n)return}for(e._pt=e._ptCache=0,a=y&&nn(a)||a&&!y,E=0;E<w.length;E++){if(z=w[E],$=z._gsap||Fh(w)[E]._gsap,e._ptLookup[E]=X={},sp[$.id]&&Ei.length&&gc(),Z=m===w?E:m.indexOf(z),M&&(V=new M).init(z,G||C,e,Z,m)!==!1&&(e._pt=j=new on(e._pt,z,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(b){X[b]=j}),V.priority&&(P=1)),!M||G)for(S in C)mn[S]&&(V=py(S,C,e,Z,z,m))?V.priority&&(P=1):X[S]=j=Dh.call(e,z,S,"get",C[S],Z,m,0,i.stringFilter);e._op&&e._op[E]&&e.kill(z,e._op[E]),v&&e._pt&&(fi=e,Ne.killTweensOf(z,X,e.globalTime(n)),A=!e.parent,fi=0),e._pt&&a&&(sp[$.id]=1)}P&&yy(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!A,p&&n<=0&&_.render(Fn,!0,!0)},pE=function(e,n,r,i,o,s,l,a){var u=(e._pt&&e._ptCache||(e._ptCache={}))[n],c,d,p,h;if(!u)for(u=e._ptCache[n]=[],p=e._ptLookup,h=e._targets.length;h--;){if(c=p[h][n],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==n&&c.fp!==n;)c=c._next;if(!c)return dp=1,e.vars[n]="+=0",$h(e,l),dp=0,a?aa(n+" not eligible for reset"):1;u.push(c)}for(h=u.length;h--;)d=u[h],c=d._pt||d,c.s=(i||i===0)&&!o?i:c.s+(i||0)+s*c.c,c.c=r-c.s,d.e&&(d.e=He(r)+bt(d.e)),d.b&&(d.b=c.s+bt(d.b))},hE=function(e,n){var r=e[0]?ao(e[0]).harness:0,i=r&&r.aliases,o,s,l,a;if(!i)return n;o=wo({},n);for(s in i)if(s in o)for(a=i[s].split(","),l=a.length;l--;)o[a[l]]=o[s];return o},mE=function(e,n,r,i){var o=n.ease||i||"power1.inOut",s,l;if(Nt(n))l=r[e]||(r[e]=[]),n.forEach(function(a,u){return l.push({t:u/(n.length-1)*100,v:a,e:o})});else for(s in n)l=r[s]||(r[s]=[]),s==="ease"||l.push({t:parseFloat(e),v:n[s],e:o})},zl=function(e,n,r,i,o){return $e(e)?e.call(n,r,i,o):gt(e)&&~e.indexOf("random(")?ca(e):e},hy=Lh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",my={};rn(hy+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return my[t]=1});var Je=function(t){Nv(e,t);function e(r,i,o,s){var l;typeof i=="number"&&(o.duration=i,i=o,o=null),l=t.call(this,s?i:Pl(i))||this;var a=l.vars,u=a.duration,c=a.delay,d=a.immediateRender,p=a.stagger,h=a.overwrite,y=a.keyframes,g=a.defaults,w=a.scrollTrigger,x=a.yoyoEase,m=i.parent||Ne,v=(Nt(r)||Iv(r)?Wr(r[0]):"length"in i)?[r]:Dn(r),_,C,E,S,j,z,P,$;if(l._targets=v.length?Fh(v):aa("GSAP target "+r+" not found. https://gsap.com",!wn.nullTargetWarn)||[],l._ptLookup=[],l._overwrite=h,y||p||Qa(u)||Qa(c)){if(i=l.vars,_=l.timeline=new Bt({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:v}),_.kill(),_.parent=_._dp=Or(l),_._start=0,p||Qa(u)||Qa(c)){if(S=v.length,P=p&&Jv(p),kr(p))for(j in p)~hy.indexOf(j)&&($||($={}),$[j]=p[j]);for(C=0;C<S;C++)E=xc(i,my),E.stagger=0,x&&(E.yoyoEase=x),$&&wo(E,$),z=v[C],E.duration=+zl(u,Or(l),C,z,v),E.delay=(+zl(c,Or(l),C,z,v)||0)-l._delay,!p&&S===1&&E.delay&&(l._delay=c=E.delay,l._start+=c,E.delay=0),_.to(z,E,P?P(C,z,v):0),_._ease=se.none;_.duration()?u=c=0:l.timeline=0}else if(y){Pl(Vn(_.vars.defaults,{ease:"none"})),_._ease=co(y.ease||i.ease||"none");var M=0,V,X,Z;if(Nt(y))y.forEach(function(G){return _.to(v,G,">")}),_.duration();else{E={};for(j in y)j==="ease"||j==="easeEach"||mE(j,y[j],E,y.easeEach);for(j in E)for(V=E[j].sort(function(G,A){return G.t-A.t}),M=0,C=0;C<V.length;C++)X=V[C],Z={ease:X.e,duration:(X.t-(C?V[C-1].t:0))/100*u},Z[j]=X.v,_.to(v,Z,M),M+=Z.duration;_.duration()<u&&_.to({},{duration:u-_.duration()})}}u||l.duration(u=_.duration())}else l.timeline=0;return h===!0&&!zh&&(fi=Or(l),Ne.killTweensOf(v),fi=0),gr(m,Or(l),o),i.reversed&&l.reverse(),i.paused&&l.paused(!0),(d||!u&&!y&&l._start===ht(m._time)&&nn(d)&&YC(Or(l))&&m.data!=="nested")&&(l._tTime=-ye,l.render(Math.max(0,-c)||0)),w&&Qv(Or(l),w),l}var n=e.prototype;return n.render=function(i,o,s){var l=this._time,a=this._tDur,u=this._dur,c=i<0,d=i>a-ye&&!c?a:i<ye?0:i,p,h,y,g,w,x,m,v,_;if(!u)GC(this,i,o,s);else if(d!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(p=d,v=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+i,o,s);if(p=ht(d%g),d===a?(y=this._repeat,p=u):(y=~~(d/g),y&&y===ht(d/g)&&(p=u,y--),p>u&&(p=u)),x=this._yoyo&&y&1,x&&(_=this._yEase,p=u-p),w=Ns(this._tTime,g),p===l&&!s&&this._initted&&y===w)return this._tTime=d,this;y!==w&&(v&&this._yEase&&cy(v,x),this.vars.repeatRefresh&&!x&&!this._lock&&this._time!==g&&this._initted&&(this._lock=s=1,this.render(ht(g*y),!0).invalidate()._lock=0))}if(!this._initted){if(Kv(this,c?i:p,s,o,d))return this._tTime=0,this;if(l!==this._time&&!(s&&this.vars.repeatRefresh&&y!==w))return this;if(u!==this._dur)return this.render(i,o,s)}if(this._tTime=d,this._time=p,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=m=(_||this._ease)(p/u),this._from&&(this.ratio=m=1-m),p&&!l&&!o&&!y&&(yn(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(m,h.d),h=h._next;v&&v.render(i<0?i:v._dur*v._ease(p/this._dur),o,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!o&&(c&&lp(this,i,o,s),yn(this,"onUpdate")),this._repeat&&y!==w&&this.vars.onRepeat&&!o&&this.parent&&yn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&lp(this,i,!0,!0),(i||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&bi(this,1),!o&&!(c&&!l)&&(d||l||x)&&(yn(this,d===a?"onComplete":"onReverseComplete",!0),this._prom&&!(d<a&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),t.prototype.invalidate.call(this,i)},n.resetTo=function(i,o,s,l,a){fa||gn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||$h(this,u),c=this._ease(u/this._dur),pE(this,i,o,s,l,c,u,a)?this.resetTo(i,o,s,l,1):(tf(this,0),this.parent||Xv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(i,o){if(o===void 0&&(o="all"),!i&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?fl(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,o,fi&&fi.vars.overwrite!==!0)._first||fl(this),this.parent&&s!==this.timeline.totalDuration()&&Ms(this,this._dur*this.timeline._tDur/s,0,1),this}var l=this._targets,a=i?Dn(i):l,u=this._ptLookup,c=this._pt,d,p,h,y,g,w,x;if((!o||o==="all")&&VC(l,a))return o==="all"&&(this._pt=0),fl(this);for(d=this._op=this._op||[],o!=="all"&&(gt(o)&&(g={},rn(o,function(m){return g[m]=1}),o=g),o=hE(l,o)),x=l.length;x--;)if(~a.indexOf(l[x])){p=u[x],o==="all"?(d[x]=o,y=p,h={}):(h=d[x]=d[x]||{},y=o);for(g in y)w=p&&p[g],w&&((!("kill"in w.d)||w.d.kill(g)===!0)&&Jc(this,w,"_pt"),delete p[g]),h!=="all"&&(h[g]=1)}return this._initted&&!this._pt&&c&&fl(this),this},e.to=function(i,o){return new e(i,o,arguments[2])},e.from=function(i,o){return Ol(1,arguments)},e.delayedCall=function(i,o,s,l){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:o,onReverseComplete:o,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:l})},e.fromTo=function(i,o,s){return Ol(2,arguments)},e.set=function(i,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(i,o)},e.killTweensOf=function(i,o,s){return Ne.killTweensOf(i,o,s)},e}(da);Vn(Je.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});rn("staggerTo,staggerFrom,staggerFromTo",function(t){Je[t]=function(){var e=new Bt,n=up.call(arguments,0);return n.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,n)}});var Ah=function(e,n,r){return e[n]=r},gy=function(e,n,r){return e[n](r)},gE=function(e,n,r,i){return e[n](i.fp,r)},xE=function(e,n,r){return e.setAttribute(n,r)},Bh=function(e,n){return $e(e[n])?gy:bh(e[n])&&e.setAttribute?xE:Ah},xy=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},vE=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},vy=function(e,n){var r=n._pt,i="";if(!e&&n.b)i=n.b;else if(e===1&&n.e)i=n.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*e):Math.round((r.s+r.c*e)*1e4)/1e4)+i,r=r._next;i+=n.c}n.set(n.t,n.p,i,n)},Uh=function(e,n){for(var r=n._pt;r;)r.r(e,r.d),r=r._next},yE=function(e,n,r,i){for(var o=this._pt,s;o;)s=o._next,o.p===i&&o.modifier(e,n,r),o=s},_E=function(e){for(var n=this._pt,r,i;n;)i=n._next,n.p===e&&!n.op||n.op===e?Jc(this,n,"_pt"):n.dep||(r=1),n=i;return!r},wE=function(e,n,r,i){i.mSet(e,n,i.m.call(i.tween,r,i.mt),i)},yy=function(e){for(var n=e._pt,r,i,o,s;n;){for(r=n._next,i=o;i&&i.pr>n.pr;)i=i._next;(n._prev=i?i._prev:s)?n._prev._next=n:o=n,(n._next=i)?i._prev=n:s=n,n=r}e._pt=o},on=function(){function t(n,r,i,o,s,l,a,u,c){this.t=r,this.s=o,this.c=s,this.p=i,this.r=l||xy,this.d=a||this,this.set=u||Ah,this.pr=c||0,this._next=n,n&&(n._prev=this)}var e=t.prototype;return e.modifier=function(r,i,o){this.mSet=this.mSet||this.set,this.set=wE,this.m=r,this.mt=o,this.tween=i},t}();rn(Lh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return Ih[t]=1});kn.TweenMax=kn.TweenLite=Je;kn.TimelineLite=kn.TimelineMax=Bt;Ne=new Bt({sortChildren:!1,defaults:Rs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});wn.stringFilter=ay;var fo=[],zu={},SE=[],Dm=0,kE=0,Bf=function(e){return(zu[e]||SE).map(function(n){return n()})},pp=function(){var e=Date.now(),n=[];e-Dm>2&&(Bf("matchMediaInit"),fo.forEach(function(r){var i=r.queries,o=r.conditions,s,l,a,u;for(l in i)s=dr.matchMedia(i[l]).matches,s&&(a=1),s!==o[l]&&(o[l]=s,u=1);u&&(r.revert(),a&&n.push(r))}),Bf("matchMediaRevert"),n.forEach(function(r){return r.onMatch(r,function(i){return r.add(null,i)})}),Dm=e,Bf("matchMedia"))},_y=function(){function t(n,r){this.selector=r&&cp(r),this.data=[],this._r=[],this.isReverted=!1,this.id=kE++,n&&this.add(n)}var e=t.prototype;return e.add=function(r,i,o){$e(r)&&(o=i,i=r,r=$e);var s=this,l=function(){var u=Pe,c=s.selector,d;return u&&u!==s&&u.data.push(s),o&&(s.selector=cp(o)),Pe=s,d=i.apply(s,arguments),$e(d)&&s._r.push(d),Pe=u,s.selector=c,s.isReverted=!1,d};return s.last=l,r===$e?l(s,function(a){return s.add(null,a)}):r?s[r]=l:l},e.ignore=function(r){var i=Pe;Pe=null,r(this),Pe=i},e.getTweens=function(){var r=[];return this.data.forEach(function(i){return i instanceof t?r.push.apply(r,i.getTweens()):i instanceof Je&&!(i.parent&&i.parent.data==="nested")&&r.push(i)}),r},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(r,i){var o=this;if(r?function(){for(var l=o.getTweens(),a=o.data.length,u;a--;)u=o.data[a],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return l.splice(l.indexOf(c),1)}));for(l.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(r)}),a=o.data.length;a--;)u=o.data[a],u instanceof Bt?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Je)&&u.revert&&u.revert(r);o._r.forEach(function(c){return c(r,o)}),o.isReverted=!0}():this.data.forEach(function(l){return l.kill&&l.kill()}),this.clear(),i)for(var s=fo.length;s--;)fo[s].id===this.id&&fo.splice(s,1)},e.revert=function(r){this.kill(r||{})},t}(),CE=function(){function t(n){this.contexts=[],this.scope=n,Pe&&Pe.data.push(this)}var e=t.prototype;return e.add=function(r,i,o){kr(r)||(r={matches:r});var s=new _y(0,o||this.scope),l=s.conditions={},a,u,c;Pe&&!s.selector&&(s.selector=Pe.selector),this.contexts.push(s),i=s.add("onMatch",i),s.queries=r;for(u in r)u==="all"?c=1:(a=dr.matchMedia(r[u]),a&&(fo.indexOf(s)<0&&fo.push(s),(l[u]=a.matches)&&(c=1),a.addListener?a.addListener(pp):a.addEventListener("change",pp)));return c&&i(s,function(d){return s.add(null,d)}),this},e.revert=function(r){this.kill(r||{})},e.kill=function(r){this.contexts.forEach(function(i){return i.kill(r,!0)})},t}(),yc={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];n.forEach(function(i){return oy(i)})},timeline:function(e){return new Bt(e)},getTweensOf:function(e,n){return Ne.getTweensOf(e,n)},getProperty:function(e,n,r,i){gt(e)&&(e=Dn(e)[0]);var o=ao(e||{}).get,s=r?Yv:Hv;return r==="native"&&(r=""),e&&(n?s((mn[n]&&mn[n].get||o)(e,n,r,i)):function(l,a,u){return s((mn[l]&&mn[l].get||o)(e,l,a,u))})},quickSetter:function(e,n,r){if(e=Dn(e),e.length>1){var i=e.map(function(c){return ln.quickSetter(c,n,r)}),o=i.length;return function(c){for(var d=o;d--;)i[d](c)}}e=e[0]||{};var s=mn[n],l=ao(e),a=l.harness&&(l.harness.aliases||{})[n]||n,u=s?function(c){var d=new s;rs._pt=0,d.init(e,r?c+r:c,rs,0,[e]),d.render(1,d),rs._pt&&Uh(1,rs)}:l.set(e,a);return s?u:function(c){return u(e,a,r?c+r:c,l,1)}},quickTo:function(e,n,r){var i,o=ln.to(e,wo((i={},i[n]="+=0.1",i.paused=!0,i),r||{})),s=function(a,u,c){return o.resetTo(n,a,u,c)};return s.tween=o,s},isTweening:function(e){return Ne.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=co(e.ease,Rs.ease)),Nm(Rs,e||{})},config:function(e){return Nm(wn,e||{})},registerEffect:function(e){var n=e.name,r=e.effect,i=e.plugins,o=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(l){return l&&!mn[l]&&!kn[l]&&aa(n+" effect requires "+l+" plugin.")}),Ff[n]=function(l,a,u){return r(Dn(l),Vn(a||{},o),u)},s&&(Bt.prototype[n]=function(l,a,u){return this.add(Ff[n](l,kr(a)?a:(u=a)&&{},this),u)})},registerEase:function(e,n){se[e]=co(n)},parseEase:function(e,n){return arguments.length?co(e,n):se},getById:function(e){return Ne.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var r=new Bt(e),i,o;for(r.smoothChildTiming=nn(e.smoothChildTiming),Ne.remove(r),r._dp=0,r._time=r._tTime=Ne._time,i=Ne._first;i;)o=i._next,(n||!(!i._dur&&i instanceof Je&&i.vars.onComplete===i._targets[0]))&&gr(r,i,i._start-i._delay),i=o;return gr(Ne,r,0),r},context:function(e,n){return e?new _y(e,n):Pe},matchMedia:function(e){return new CE(e)},matchMediaRefresh:function(){return fo.forEach(function(e){var n=e.conditions,r,i;for(i in n)n[i]&&(n[i]=!1,r=1);r&&e.revert()})||pp()},addEventListener:function(e,n){var r=zu[e]||(zu[e]=[]);~r.indexOf(n)||r.push(n)},removeEventListener:function(e,n){var r=zu[e],i=r&&r.indexOf(n);i>=0&&r.splice(i,1)},utils:{wrap:nE,wrapYoyo:rE,distribute:Jv,random:ty,snap:ey,normalize:tE,getUnit:bt,clamp:qC,splitColor:sy,toArray:Dn,selector:cp,mapRange:ry,pipe:JC,unitize:eE,interpolate:iE,shuffle:Zv},install:Av,effects:Ff,ticker:gn,updateRoot:Bt.updateRoot,plugins:mn,globalTimeline:Ne,core:{PropTween:on,globals:Bv,Tween:Je,Timeline:Bt,Animation:da,getCache:ao,_removeLinkedListItem:Jc,reverting:function(){return Rt},context:function(e){return e&&Pe&&(Pe.data.push(e),e._ctx=Pe),Pe},suppressOverwrites:function(e){return zh=e}}};rn("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return yc[t]=Je[t]});gn.add(Bt.updateRoot);rs=yc.to({},{duration:0});var EE=function(e,n){for(var r=e._pt;r&&r.p!==n&&r.op!==n&&r.fp!==n;)r=r._next;return r},TE=function(e,n){var r=e._targets,i,o,s;for(i in n)for(o=r.length;o--;)s=e._ptLookup[o][i],s&&(s=s.d)&&(s._pt&&(s=EE(s,i)),s&&s.modifier&&s.modifier(n[i],e,r[o],i))},Uf=function(e,n){return{name:e,rawVars:1,init:function(i,o,s){s._onInit=function(l){var a,u;if(gt(o)&&(a={},rn(o,function(c){return a[c]=1}),o=a),n){a={};for(u in o)a[u]=n(o[u]);o=a}TE(l,o)}}}},ln=yc.registerPlugin({name:"attr",init:function(e,n,r,i,o){var s,l,a;this.tween=r;for(s in n)a=e.getAttribute(s)||"",l=this.add(e,"setAttribute",(a||0)+"",n[s],i,o,0,0,s),l.op=s,l.b=a,this._props.push(s)},render:function(e,n){for(var r=n._pt;r;)Rt?r.set(r.t,r.p,r.b,r):r.r(e,r.d),r=r._next}},{name:"endArray",init:function(e,n){for(var r=n.length;r--;)this.add(e,r,e[r]||0,n[r],0,0,0,0,0,1)}},Uf("roundProps",fp),Uf("modifiers"),Uf("snap",ey))||yc;Je.version=Bt.version=ln.version="3.12.5";$v=1;Rh()&&Is();se.Power0;se.Power1;se.Power2;se.Power3;se.Power4;se.Linear;se.Quad;se.Cubic;se.Quart;se.Quint;se.Strong;se.Elastic;se.Back;se.SteppedEase;se.Bounce;se.Sine;se.Expo;se.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var $m,di,ds,Wh,to,Am,Vh,jE=function(){return typeof window<"u"},Vr={},Gi=180/Math.PI,ps=Math.PI/180,Fo=Math.atan2,Bm=1e8,Hh=/([A-Z])/g,PE=/(left|right|width|margin|padding|x)/i,OE=/[\s,\(]\S/,xr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},hp=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},zE=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},bE=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},RE=function(e,n){var r=n.s+n.c*e;n.set(n.t,n.p,~~(r+(r<0?-.5:.5))+n.u,n)},wy=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},Sy=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},NE=function(e,n,r){return e.style[n]=r},ME=function(e,n,r){return e.style.setProperty(n,r)},IE=function(e,n,r){return e._gsap[n]=r},LE=function(e,n,r){return e._gsap.scaleX=e._gsap.scaleY=r},FE=function(e,n,r,i,o){var s=e._gsap;s.scaleX=s.scaleY=r,s.renderTransform(o,s)},DE=function(e,n,r,i,o){var s=e._gsap;s[n]=r,s.renderTransform(o,s)},Me="transform",sn=Me+"Origin",$E=function t(e,n){var r=this,i=this.target,o=i.style,s=i._gsap;if(e in Vr&&o){if(this.tfm=this.tfm||{},e!=="transform")e=xr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(l){return r.tfm[l]=br(i,l)}):this.tfm[e]=s.x?s[e]:br(i,e),e===sn&&(this.tfm.zOrigin=s.zOrigin);else return xr.transform.split(",").forEach(function(l){return t.call(r,l,n)});if(this.props.indexOf(Me)>=0)return;s.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(sn,n,"")),e=Me}(o||n)&&this.props.push(e,n,o[e])},ky=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},AE=function(){var e=this.props,n=this.target,r=n.style,i=n._gsap,o,s;for(o=0;o<e.length;o+=3)e[o+1]?n[e[o]]=e[o+2]:e[o+2]?r[e[o]]=e[o+2]:r.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(Hh,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),o=Vh(),(!o||!o.isStart)&&!r[Me]&&(ky(r),i.zOrigin&&r[sn]&&(r[sn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Cy=function(e,n){var r={target:e,props:[],revert:AE,save:$E};return e._gsap||ln.core.getCache(e),n&&n.split(",").forEach(function(i){return r.save(i)}),r},Ey,mp=function(e,n){var r=di.createElementNS?di.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):di.createElement(e);return r&&r.style?r:di.createElement(e)},wr=function t(e,n,r){var i=getComputedStyle(e);return i[n]||i.getPropertyValue(n.replace(Hh,"-$1").toLowerCase())||i.getPropertyValue(n)||!r&&t(e,Ls(n)||n,1)||""},Um="O,Moz,ms,Ms,Webkit".split(","),Ls=function(e,n,r){var i=n||to,o=i.style,s=5;if(e in o&&!r)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Um[s]+e in o););return s<0?null:(s===3?"ms":s>=0?Um[s]:"")+e},gp=function(){jE()&&window.document&&($m=window,di=$m.document,ds=di.documentElement,to=mp("div")||{style:{}},mp("div"),Me=Ls(Me),sn=Me+"Origin",to.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ey=!!Ls("perspective"),Vh=ln.core.reverting,Wh=1)},Wf=function t(e){var n=mp("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=this.parentNode,i=this.nextSibling,o=this.style.cssText,s;if(ds.appendChild(n),n.appendChild(this),this.style.display="block",e)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=t}catch{}else this._gsapBBox&&(s=this._gsapBBox());return r&&(i?r.insertBefore(this,i):r.appendChild(this)),ds.removeChild(n),this.style.cssText=o,s},Wm=function(e,n){for(var r=n.length;r--;)if(e.hasAttribute(n[r]))return e.getAttribute(n[r])},Ty=function(e){var n;try{n=e.getBBox()}catch{n=Wf.call(e,!0)}return n&&(n.width||n.height)||e.getBBox===Wf||(n=Wf.call(e,!0)),n&&!n.width&&!n.x&&!n.y?{x:+Wm(e,["x","cx","x1"])||0,y:+Wm(e,["y","cy","y1"])||0,width:0,height:0}:n},jy=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ty(e))},So=function(e,n){if(n){var r=e.style,i;n in Vr&&n!==sn&&(n=Me),r.removeProperty?(i=n.substr(0,2),(i==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),r.removeProperty(i==="--"?n:n.replace(Hh,"-$1").toLowerCase())):r.removeAttribute(n)}},pi=function(e,n,r,i,o,s){var l=new on(e._pt,n,r,0,1,s?Sy:wy);return e._pt=l,l.b=i,l.e=o,e._props.push(r),l},Vm={deg:1,rad:1,turn:1},BE={grid:1,flex:1},Ri=function t(e,n,r,i){var o=parseFloat(r)||0,s=(r+"").trim().substr((o+"").length)||"px",l=to.style,a=PE.test(n),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(a?"Width":"Height"),d=100,p=i==="px",h=i==="%",y,g,w,x;if(i===s||!o||Vm[i]||Vm[s])return o;if(s!=="px"&&!p&&(o=t(e,n,r,"px")),x=e.getCTM&&jy(e),(h||s==="%")&&(Vr[n]||~n.indexOf("adius")))return y=x?e.getBBox()[a?"width":"height"]:e[c],He(h?o/y*d:o/100*y);if(l[a?"width":"height"]=d+(p?s:i),g=~n.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,x&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===di||!g.appendChild)&&(g=di.body),w=g._gsap,w&&h&&w.width&&a&&w.time===gn.time&&!w.uncache)return He(o/w.width*d);if(h&&(n==="height"||n==="width")){var m=e.style[n];e.style[n]=d+i,y=e[c],m?e.style[n]=m:So(e,n)}else(h||s==="%")&&!BE[wr(g,"display")]&&(l.position=wr(e,"position")),g===e&&(l.position="static"),g.appendChild(to),y=to[c],g.removeChild(to),l.position="absolute";return a&&h&&(w=ao(g),w.time=gn.time,w.width=g[c]),He(p?y*o/d:y&&o?d/y*o:0)},br=function(e,n,r,i){var o;return Wh||gp(),n in xr&&n!=="transform"&&(n=xr[n],~n.indexOf(",")&&(n=n.split(",")[0])),Vr[n]&&n!=="transform"?(o=ha(e,i),o=n!=="transformOrigin"?o[n]:o.svg?o.origin:wc(wr(e,sn))+" "+o.zOrigin+"px"):(o=e.style[n],(!o||o==="auto"||i||~(o+"").indexOf("calc("))&&(o=_c[n]&&_c[n](e,n,r)||wr(e,n)||Wv(e,n)||(n==="opacity"?1:0))),r&&!~(o+"").trim().indexOf(" ")?Ri(e,n,o,r)+r:o},UE=function(e,n,r,i){if(!r||r==="none"){var o=Ls(n,e,1),s=o&&wr(e,o,1);s&&s!==r?(n=o,r=s):n==="borderColor"&&(r=wr(e,"borderTopColor"))}var l=new on(this._pt,e.style,n,0,1,vy),a=0,u=0,c,d,p,h,y,g,w,x,m,v,_,C;if(l.b=r,l.e=i,r+="",i+="",i==="auto"&&(g=e.style[n],e.style[n]=i,i=wr(e,n)||i,g?e.style[n]=g:So(e,n)),c=[r,i],ay(c),r=c[0],i=c[1],p=r.match(ns)||[],C=i.match(ns)||[],C.length){for(;d=ns.exec(i);)w=d[0],m=i.substring(a,d.index),y?y=(y+1)%5:(m.substr(-5)==="rgba("||m.substr(-5)==="hsla(")&&(y=1),w!==(g=p[u++]||"")&&(h=parseFloat(g)||0,_=g.substr((h+"").length),w.charAt(1)==="="&&(w=fs(h,w)+_),x=parseFloat(w),v=w.substr((x+"").length),a=ns.lastIndex-v.length,v||(v=v||wn.units[n]||_,a===i.length&&(i+=v,l.e+=v)),_!==v&&(h=Ri(e,n,g,v)||0),l._pt={_next:l._pt,p:m||u===1?m:",",s:h,c:x-h,m:y&&y<4||n==="zIndex"?Math.round:0});l.c=a<i.length?i.substring(a,i.length):""}else l.r=n==="display"&&i==="none"?Sy:wy;return Fv.test(i)&&(l.e=0),this._pt=l,l},Hm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},WE=function(e){var n=e.split(" "),r=n[0],i=n[1]||"50%";return(r==="top"||r==="bottom"||i==="left"||i==="right")&&(e=r,r=i,i=e),n[0]=Hm[r]||r,n[1]=Hm[i]||i,n.join(" ")},VE=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var r=n.t,i=r.style,o=n.u,s=r._gsap,l,a,u;if(o==="all"||o===!0)i.cssText="",a=1;else for(o=o.split(","),u=o.length;--u>-1;)l=o[u],Vr[l]&&(a=1,l=l==="transformOrigin"?sn:Me),So(r,l);a&&(So(r,Me),s&&(s.svg&&r.removeAttribute("transform"),ha(r,1),s.uncache=1,ky(i)))}},_c={clearProps:function(e,n,r,i,o){if(o.data!=="isFromStart"){var s=e._pt=new on(e._pt,n,r,0,0,VE);return s.u=i,s.pr=-10,s.tween=o,e._props.push(r),1}}},pa=[1,0,0,1,0,0],Py={},Oy=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ym=function(e){var n=wr(e,Me);return Oy(n)?pa:n.substr(7).match(Lv).map(He)},Yh=function(e,n){var r=e._gsap||ao(e),i=e.style,o=Ym(e),s,l,a,u;return r.svg&&e.getAttribute("transform")?(a=e.transform.baseVal.consolidate().matrix,o=[a.a,a.b,a.c,a.d,a.e,a.f],o.join(",")==="1,0,0,1,0,0"?pa:o):(o===pa&&!e.offsetParent&&e!==ds&&!r.svg&&(a=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent)&&(u=1,l=e.nextElementSibling,ds.appendChild(e)),o=Ym(e),a?i.display=a:So(e,"display"),u&&(l?s.insertBefore(e,l):s?s.appendChild(e):ds.removeChild(e))),n&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},xp=function(e,n,r,i,o,s){var l=e._gsap,a=o||Yh(e,!0),u=l.xOrigin||0,c=l.yOrigin||0,d=l.xOffset||0,p=l.yOffset||0,h=a[0],y=a[1],g=a[2],w=a[3],x=a[4],m=a[5],v=n.split(" "),_=parseFloat(v[0])||0,C=parseFloat(v[1])||0,E,S,j,z;r?a!==pa&&(S=h*w-y*g)&&(j=_*(w/S)+C*(-g/S)+(g*m-w*x)/S,z=_*(-y/S)+C*(h/S)-(h*m-y*x)/S,_=j,C=z):(E=Ty(e),_=E.x+(~v[0].indexOf("%")?_/100*E.width:_),C=E.y+(~(v[1]||v[0]).indexOf("%")?C/100*E.height:C)),i||i!==!1&&l.smooth?(x=_-u,m=C-c,l.xOffset=d+(x*h+m*g)-x,l.yOffset=p+(x*y+m*w)-m):l.xOffset=l.yOffset=0,l.xOrigin=_,l.yOrigin=C,l.smooth=!!i,l.origin=n,l.originIsAbsolute=!!r,e.style[sn]="0px 0px",s&&(pi(s,l,"xOrigin",u,_),pi(s,l,"yOrigin",c,C),pi(s,l,"xOffset",d,l.xOffset),pi(s,l,"yOffset",p,l.yOffset)),e.setAttribute("data-svg-origin",_+" "+C)},ha=function(e,n){var r=e._gsap||new dy(e);if("x"in r&&!n&&!r.uncache)return r;var i=e.style,o=r.scaleX<0,s="px",l="deg",a=getComputedStyle(e),u=wr(e,sn)||"0",c,d,p,h,y,g,w,x,m,v,_,C,E,S,j,z,P,$,M,V,X,Z,G,A,b,I,k,B,H,nt,le,ve;return c=d=p=g=w=x=m=v=_=0,h=y=1,r.svg=!!(e.getCTM&&jy(e)),a.translate&&((a.translate!=="none"||a.scale!=="none"||a.rotate!=="none")&&(i[Me]=(a.translate!=="none"?"translate3d("+(a.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(a.rotate!=="none"?"rotate("+a.rotate+") ":"")+(a.scale!=="none"?"scale("+a.scale.split(" ").join(",")+") ":"")+(a[Me]!=="none"?a[Me]:"")),i.scale=i.rotate=i.translate="none"),S=Yh(e,r.svg),r.svg&&(r.uncache?(b=e.getBBox(),u=r.xOrigin-b.x+"px "+(r.yOrigin-b.y)+"px",A=""):A=!n&&e.getAttribute("data-svg-origin"),xp(e,A||u,!!A||r.originIsAbsolute,r.smooth!==!1,S)),C=r.xOrigin||0,E=r.yOrigin||0,S!==pa&&($=S[0],M=S[1],V=S[2],X=S[3],c=Z=S[4],d=G=S[5],S.length===6?(h=Math.sqrt($*$+M*M),y=Math.sqrt(X*X+V*V),g=$||M?Fo(M,$)*Gi:0,m=V||X?Fo(V,X)*Gi+g:0,m&&(y*=Math.abs(Math.cos(m*ps))),r.svg&&(c-=C-(C*$+E*V),d-=E-(C*M+E*X))):(ve=S[6],nt=S[7],k=S[8],B=S[9],H=S[10],le=S[11],c=S[12],d=S[13],p=S[14],j=Fo(ve,H),w=j*Gi,j&&(z=Math.cos(-j),P=Math.sin(-j),A=Z*z+k*P,b=G*z+B*P,I=ve*z+H*P,k=Z*-P+k*z,B=G*-P+B*z,H=ve*-P+H*z,le=nt*-P+le*z,Z=A,G=b,ve=I),j=Fo(-V,H),x=j*Gi,j&&(z=Math.cos(-j),P=Math.sin(-j),A=$*z-k*P,b=M*z-B*P,I=V*z-H*P,le=X*P+le*z,$=A,M=b,V=I),j=Fo(M,$),g=j*Gi,j&&(z=Math.cos(j),P=Math.sin(j),A=$*z+M*P,b=Z*z+G*P,M=M*z-$*P,G=G*z-Z*P,$=A,Z=b),w&&Math.abs(w)+Math.abs(g)>359.9&&(w=g=0,x=180-x),h=He(Math.sqrt($*$+M*M+V*V)),y=He(Math.sqrt(G*G+ve*ve)),j=Fo(Z,G),m=Math.abs(j)>2e-4?j*Gi:0,_=le?1/(le<0?-le:le):0),r.svg&&(A=e.getAttribute("transform"),r.forceCSS=e.setAttribute("transform","")||!Oy(wr(e,Me)),A&&e.setAttribute("transform",A))),Math.abs(m)>90&&Math.abs(m)<270&&(o?(h*=-1,m+=g<=0?180:-180,g+=g<=0?180:-180):(y*=-1,m+=m<=0?180:-180)),n=n||r.uncache,r.x=c-((r.xPercent=c&&(!n&&r.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*r.xPercent/100:0)+s,r.y=d-((r.yPercent=d&&(!n&&r.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*r.yPercent/100:0)+s,r.z=p+s,r.scaleX=He(h),r.scaleY=He(y),r.rotation=He(g)+l,r.rotationX=He(w)+l,r.rotationY=He(x)+l,r.skewX=m+l,r.skewY=v+l,r.transformPerspective=_+s,(r.zOrigin=parseFloat(u.split(" ")[2])||!n&&r.zOrigin||0)&&(i[sn]=wc(u)),r.xOffset=r.yOffset=0,r.force3D=wn.force3D,r.renderTransform=r.svg?YE:Ey?zy:HE,r.uncache=0,r},wc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Vf=function(e,n,r){var i=bt(n);return He(parseFloat(n)+parseFloat(Ri(e,"x",r+"px",i)))+i},HE=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,zy(e,n)},Vi="0deg",rl="0px",Hi=") ",zy=function(e,n){var r=n||this,i=r.xPercent,o=r.yPercent,s=r.x,l=r.y,a=r.z,u=r.rotation,c=r.rotationY,d=r.rotationX,p=r.skewX,h=r.skewY,y=r.scaleX,g=r.scaleY,w=r.transformPerspective,x=r.force3D,m=r.target,v=r.zOrigin,_="",C=x==="auto"&&e&&e!==1||x===!0;if(v&&(d!==Vi||c!==Vi)){var E=parseFloat(c)*ps,S=Math.sin(E),j=Math.cos(E),z;E=parseFloat(d)*ps,z=Math.cos(E),s=Vf(m,s,S*z*-v),l=Vf(m,l,-Math.sin(E)*-v),a=Vf(m,a,j*z*-v+v)}w!==rl&&(_+="perspective("+w+Hi),(i||o)&&(_+="translate("+i+"%, "+o+"%) "),(C||s!==rl||l!==rl||a!==rl)&&(_+=a!==rl||C?"translate3d("+s+", "+l+", "+a+") ":"translate("+s+", "+l+Hi),u!==Vi&&(_+="rotate("+u+Hi),c!==Vi&&(_+="rotateY("+c+Hi),d!==Vi&&(_+="rotateX("+d+Hi),(p!==Vi||h!==Vi)&&(_+="skew("+p+", "+h+Hi),(y!==1||g!==1)&&(_+="scale("+y+", "+g+Hi),m.style[Me]=_||"translate(0, 0)"},YE=function(e,n){var r=n||this,i=r.xPercent,o=r.yPercent,s=r.x,l=r.y,a=r.rotation,u=r.skewX,c=r.skewY,d=r.scaleX,p=r.scaleY,h=r.target,y=r.xOrigin,g=r.yOrigin,w=r.xOffset,x=r.yOffset,m=r.forceCSS,v=parseFloat(s),_=parseFloat(l),C,E,S,j,z;a=parseFloat(a),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,a+=c),a||u?(a*=ps,u*=ps,C=Math.cos(a)*d,E=Math.sin(a)*d,S=Math.sin(a-u)*-p,j=Math.cos(a-u)*p,u&&(c*=ps,z=Math.tan(u-c),z=Math.sqrt(1+z*z),S*=z,j*=z,c&&(z=Math.tan(c),z=Math.sqrt(1+z*z),C*=z,E*=z)),C=He(C),E=He(E),S=He(S),j=He(j)):(C=d,j=p,E=S=0),(v&&!~(s+"").indexOf("px")||_&&!~(l+"").indexOf("px"))&&(v=Ri(h,"x",s,"px"),_=Ri(h,"y",l,"px")),(y||g||w||x)&&(v=He(v+y-(y*C+g*S)+w),_=He(_+g-(y*E+g*j)+x)),(i||o)&&(z=h.getBBox(),v=He(v+i/100*z.width),_=He(_+o/100*z.height)),z="matrix("+C+","+E+","+S+","+j+","+v+","+_+")",h.setAttribute("transform",z),m&&(h.style[Me]=z)},XE=function(e,n,r,i,o){var s=360,l=gt(o),a=parseFloat(o)*(l&&~o.indexOf("rad")?Gi:1),u=a-i,c=i+u+"deg",d,p;return l&&(d=o.split("_")[1],d==="short"&&(u%=s,u!==u%(s/2)&&(u+=u<0?s:-s)),d==="cw"&&u<0?u=(u+s*Bm)%s-~~(u/s)*s:d==="ccw"&&u>0&&(u=(u-s*Bm)%s-~~(u/s)*s)),e._pt=p=new on(e._pt,n,r,i,u,zE),p.e=c,p.u="deg",e._props.push(r),p},Xm=function(e,n){for(var r in n)e[r]=n[r];return e},GE=function(e,n,r){var i=Xm({},r._gsap),o="perspective,force3D,transformOrigin,svgOrigin",s=r.style,l,a,u,c,d,p,h,y;i.svg?(u=r.getAttribute("transform"),r.setAttribute("transform",""),s[Me]=n,l=ha(r,1),So(r,Me),r.setAttribute("transform",u)):(u=getComputedStyle(r)[Me],s[Me]=n,l=ha(r,1),s[Me]=u);for(a in Vr)u=i[a],c=l[a],u!==c&&o.indexOf(a)<0&&(h=bt(u),y=bt(c),d=h!==y?Ri(r,a,u,y):parseFloat(u),p=parseFloat(c),e._pt=new on(e._pt,l,a,d,p-d,hp),e._pt.u=y||0,e._props.push(a));Xm(l,i)};rn("padding,margin,Width,Radius",function(t,e){var n="Top",r="Right",i="Bottom",o="Left",s=(e<3?[n,r,i,o]:[n+o,n+r,i+r,i+o]).map(function(l){return e<2?t+l:"border"+l+t});_c[e>1?"border"+t:t]=function(l,a,u,c,d){var p,h;if(arguments.length<4)return p=s.map(function(y){return br(l,y,u)}),h=p.join(" "),h.split(p[0]).length===5?p[0]:h;p=(c+"").split(" "),h={},s.forEach(function(y,g){return h[y]=p[g]=p[g]||p[(g-1)/2|0]}),l.init(a,h,d)}});var by={name:"css",register:gp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,r,i,o){var s=this._props,l=e.style,a=r.vars.startAt,u,c,d,p,h,y,g,w,x,m,v,_,C,E,S,j;Wh||gp(),this.styles=this.styles||Cy(e),j=this.styles.props,this.tween=r;for(g in n)if(g!=="autoRound"&&(c=n[g],!(mn[g]&&py(g,n,r,i,e,o)))){if(h=typeof c,y=_c[g],h==="function"&&(c=c.call(r,i,e,o),h=typeof c),h==="string"&&~c.indexOf("random(")&&(c=ca(c)),y)y(this,e,g,c,r)&&(S=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",Ti.lastIndex=0,Ti.test(u)||(w=bt(u),x=bt(c)),x?w!==x&&(u=Ri(e,g,u,x)+x):w&&(c+=w),this.add(l,"setProperty",u,c,i,o,0,0,g),s.push(g),j.push(g,0,l[g]);else if(h!=="undefined"){if(a&&g in a?(u=typeof a[g]=="function"?a[g].call(r,i,e,o):a[g],gt(u)&&~u.indexOf("random(")&&(u=ca(u)),bt(u+"")||u==="auto"||(u+=wn.units[g]||bt(br(e,g))||""),(u+"").charAt(1)==="="&&(u=br(e,g))):u=br(e,g),p=parseFloat(u),m=h==="string"&&c.charAt(1)==="="&&c.substr(0,2),m&&(c=c.substr(2)),d=parseFloat(c),g in xr&&(g==="autoAlpha"&&(p===1&&br(e,"visibility")==="hidden"&&d&&(p=0),j.push("visibility",0,l.visibility),pi(this,l,"visibility",p?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=xr[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in Vr,v){if(this.styles.save(g),_||(C=e._gsap,C.renderTransform&&!n.parseTransform||ha(e,n.parseTransform),E=n.smoothOrigin!==!1&&C.smooth,_=this._pt=new on(this._pt,l,Me,0,1,C.renderTransform,C,0,-1),_.dep=1),g==="scale")this._pt=new on(this._pt,C,"scaleY",C.scaleY,(m?fs(C.scaleY,m+d):d)-C.scaleY||0,hp),this._pt.u=0,s.push("scaleY",g),g+="X";else if(g==="transformOrigin"){j.push(sn,0,l[sn]),c=WE(c),C.svg?xp(e,c,0,E,0,this):(x=parseFloat(c.split(" ")[2])||0,x!==C.zOrigin&&pi(this,C,"zOrigin",C.zOrigin,x),pi(this,l,g,wc(u),wc(c)));continue}else if(g==="svgOrigin"){xp(e,c,1,E,0,this);continue}else if(g in Py){XE(this,C,g,p,m?fs(p,m+c):c);continue}else if(g==="smoothOrigin"){pi(this,C,"smooth",C.smooth,c);continue}else if(g==="force3D"){C[g]=c;continue}else if(g==="transform"){GE(this,c,e);continue}}else g in l||(g=Ls(g)||g);if(v||(d||d===0)&&(p||p===0)&&!OE.test(c)&&g in l)w=(u+"").substr((p+"").length),d||(d=0),x=bt(c)||(g in wn.units?wn.units[g]:w),w!==x&&(p=Ri(e,g,u,x)),this._pt=new on(this._pt,v?C:l,g,p,(m?fs(p,m+d):d)-p,!v&&(x==="px"||g==="zIndex")&&n.autoRound!==!1?RE:hp),this._pt.u=x||0,w!==x&&x!=="%"&&(this._pt.b=u,this._pt.r=bE);else if(g in l)UE.call(this,e,g,u,m?m+c:c);else if(g in e)this.add(e,g,u||e[g],m?m+c:c,i,o);else if(g!=="parseTransform"){Mh(g,c);continue}v||(g in l?j.push(g,0,l[g]):j.push(g,1,u||e[g])),s.push(g)}}S&&yy(this)},render:function(e,n){if(n.tween._time||!Vh())for(var r=n._pt;r;)r.r(e,r.d),r=r._next;else n.styles.revert()},get:br,aliases:xr,getSetter:function(e,n,r){var i=xr[n];return i&&i.indexOf(",")<0&&(n=i),n in Vr&&n!==sn&&(e._gsap.x||br(e,"x"))?r&&Am===r?n==="scale"?LE:IE:(Am=r||{})&&(n==="scale"?FE:DE):e.style&&!bh(e.style[n])?NE:~n.indexOf("-")?ME:Bh(e,n)},core:{_removeProperty:So,_getMatrix:Yh}};ln.utils.checkPrefix=Ls;ln.core.getStyleSaver=Cy;(function(t,e,n,r){var i=rn(t+","+e+","+n,function(o){Vr[o]=1});rn(e,function(o){wn.units[o]="deg",Py[o]=1}),xr[i[13]]=t+","+e,rn(r,function(o){var s=o.split(":");xr[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");rn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){wn.units[t]="px"});ln.registerPlugin(by);var ko=ln.registerPlugin(by)||ln;ko.core.Tween;/*!
 * @gsap/react 2.1.1
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let Gm=typeof window<"u"?R.useLayoutEffect:R.useEffect,Qm=t=>t&&!Array.isArray(t)&&typeof t=="object",Ka=[],QE={},Ry=ko;const Ta=(t,e=Ka)=>{let n=QE;Qm(t)?(n=t,t=null,e="dependencies"in n?n.dependencies:Ka):Qm(e)&&(n=e,e="dependencies"in n?n.dependencies:Ka),t&&typeof t!="function"&&console.warn("First parameter must be a function or config object");const{scope:r,revertOnUpdate:i}=n,o=R.useRef(!1),s=R.useRef(Ry.context(()=>{},r)),l=R.useRef(u=>s.current.add(null,u)),a=e&&e.length&&!i;return Gm(()=>{if(t&&s.current.add(t,r),!a||!o.current)return()=>s.current.revert()},e),a&&Gm(()=>(o.current=!0,()=>s.current.revert()),Ka),{context:s.current,contextSafe:l.current}};Ta.register=t=>{Ry=t};Ta.headless=!0;function KE(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function qE(t,e,n){return e&&KE(t.prototype,e),t}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _t,bu,xn,hi,mi,hs,Ny,Qi,bl,My,Ir,Zn,Iy,Ly=function(){return _t||typeof window<"u"&&(_t=window.gsap)&&_t.registerPlugin&&_t},Fy=1,is=[],te=[],Sr=[],Rl=Date.now,vp=function(e,n){return n},ZE=function(){var e=bl.core,n=e.bridge||{},r=e._scrollers,i=e._proxies;r.push.apply(r,te),i.push.apply(i,Sr),te=r,Sr=i,vp=function(s,l){return n[s](l)}},ji=function(e,n){return~Sr.indexOf(e)&&Sr[Sr.indexOf(e)+1][n]},Nl=function(e){return!!~My.indexOf(e)},Lt=function(e,n,r,i,o){return e.addEventListener(n,r,{passive:i!==!1,capture:!!o})},It=function(e,n,r,i){return e.removeEventListener(n,r,!!i)},qa="scrollLeft",Za="scrollTop",yp=function(){return Ir&&Ir.isPressed||te.cache++},Sc=function(e,n){var r=function i(o){if(o||o===0){Fy&&(xn.history.scrollRestoration="manual");var s=Ir&&Ir.isPressed;o=i.v=Math.round(o)||(Ir&&Ir.iOS?1:0),e(o),i.cacheID=te.cache,s&&vp("ss",o)}else(n||te.cache!==i.cacheID||vp("ref"))&&(i.cacheID=te.cache,i.v=e());return i.v+i.offset};return r.offset=0,e&&r},Ut={s:qa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Sc(function(t){return arguments.length?xn.scrollTo(t,st.sc()):xn.pageXOffset||hi[qa]||mi[qa]||hs[qa]||0})},st={s:Za,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ut,sc:Sc(function(t){return arguments.length?xn.scrollTo(Ut.sc(),t):xn.pageYOffset||hi[Za]||mi[Za]||hs[Za]||0})},Qt=function(e,n){return(n&&n._ctx&&n._ctx.selector||_t.utils.toArray)(e)[0]||(typeof e=="string"&&_t.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Ni=function(e,n){var r=n.s,i=n.sc;Nl(e)&&(e=hi.scrollingElement||mi);var o=te.indexOf(e),s=i===st.sc?1:2;!~o&&(o=te.push(e)-1),te[o+s]||Lt(e,"scroll",yp);var l=te[o+s],a=l||(te[o+s]=Sc(ji(e,r),!0)||(Nl(e)?i:Sc(function(u){return arguments.length?e[r]=u:e[r]})));return a.target=e,l||(a.smooth=_t.getProperty(e,"scrollBehavior")==="smooth"),a},_p=function(e,n,r){var i=e,o=e,s=Rl(),l=s,a=n||50,u=Math.max(500,a*3),c=function(y,g){var w=Rl();g||w-s>a?(o=i,i=y,l=s,s=w):r?i+=y:i=o+(y-o)/(w-l)*(s-l)},d=function(){o=i=r?0:i,l=s=0},p=function(y){var g=l,w=o,x=Rl();return(y||y===0)&&y!==i&&c(y),s===l||x-l>u?0:(i+(r?w:-w))/((r?x:s)-g)*1e3};return{update:c,reset:d,getVelocity:p}},il=function(e,n){return n&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Km=function(e){var n=Math.max.apply(Math,e),r=Math.min.apply(Math,e);return Math.abs(n)>=Math.abs(r)?n:r},Dy=function(){bl=_t.core.globals().ScrollTrigger,bl&&bl.core&&ZE()},$y=function(e){return _t=e||Ly(),!bu&&_t&&typeof document<"u"&&document.body&&(xn=window,hi=document,mi=hi.documentElement,hs=hi.body,My=[xn,hi,mi,hs],_t.utils.clamp,Iy=_t.core.context||function(){},Qi="onpointerenter"in hs?"pointer":"mouse",Ny=Xe.isTouch=xn.matchMedia&&xn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in xn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Zn=Xe.eventTypes=("ontouchstart"in mi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in mi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Fy=0},500),Dy(),bu=1),bu};Ut.op=st;te.cache=0;var Xe=function(){function t(n){this.init(n)}var e=t.prototype;return e.init=function(r){bu||$y(_t)||console.warn("Please gsap.registerPlugin(Observer)"),bl||Dy();var i=r.tolerance,o=r.dragMinimum,s=r.type,l=r.target,a=r.lineHeight,u=r.debounce,c=r.preventDefault,d=r.onStop,p=r.onStopDelay,h=r.ignore,y=r.wheelSpeed,g=r.event,w=r.onDragStart,x=r.onDragEnd,m=r.onDrag,v=r.onPress,_=r.onRelease,C=r.onRight,E=r.onLeft,S=r.onUp,j=r.onDown,z=r.onChangeX,P=r.onChangeY,$=r.onChange,M=r.onToggleX,V=r.onToggleY,X=r.onHover,Z=r.onHoverEnd,G=r.onMove,A=r.ignoreCheck,b=r.isNormalizer,I=r.onGestureStart,k=r.onGestureEnd,B=r.onWheel,H=r.onEnable,nt=r.onDisable,le=r.onClick,ve=r.scrollSpeed,pe=r.capture,fe=r.allowClicks,Be=r.lockAxis,Ee=r.onLockAxis;this.target=l=Qt(l)||mi,this.vars=r,h&&(h=_t.utils.toArray(h)),i=i||1e-9,o=o||0,y=y||1,ve=ve||1,s=s||"wheel,touch,pointer",u=u!==!1,a||(a=parseFloat(xn.getComputedStyle(hs).lineHeight)||22);var Tn,Ge,Qe,ue,Ue,Gt,an,O=this,un=0,Cr=0,Yr=r.passive||!c,Ke=Ni(l,Ut),Xr=Ni(l,st),$i=Ke(),bo=Xr(),at=~s.indexOf("touch")&&!~s.indexOf("pointer")&&Zn[0]==="pointerdown",Gr=Nl(l),We=l.ownerDocument||hi,Hn=[0,0,0],jn=[0,0,0],Er=0,Vs=function(){return Er=Rl()},qe=function(W,ce){return(O.event=W)&&h&&~h.indexOf(W.target)||ce&&at&&W.pointerType!=="touch"||A&&A(W,ce)},ja=function(){O._vx.reset(),O._vy.reset(),Ge.pause(),d&&d(O)},Qr=function(){var W=O.deltaX=Km(Hn),ce=O.deltaY=Km(jn),L=Math.abs(W)>=i,K=Math.abs(ce)>=i;$&&(L||K)&&$(O,W,ce,Hn,jn),L&&(C&&O.deltaX>0&&C(O),E&&O.deltaX<0&&E(O),z&&z(O),M&&O.deltaX<0!=un<0&&M(O),un=O.deltaX,Hn[0]=Hn[1]=Hn[2]=0),K&&(j&&O.deltaY>0&&j(O),S&&O.deltaY<0&&S(O),P&&P(O),V&&O.deltaY<0!=Cr<0&&V(O),Cr=O.deltaY,jn[0]=jn[1]=jn[2]=0),(ue||Qe)&&(G&&G(O),Qe&&(m(O),Qe=!1),ue=!1),Gt&&!(Gt=!1)&&Ee&&Ee(O),Ue&&(B(O),Ue=!1),Tn=0},Ro=function(W,ce,L){Hn[L]+=W,jn[L]+=ce,O._vx.update(W),O._vy.update(ce),u?Tn||(Tn=requestAnimationFrame(Qr)):Qr()},No=function(W,ce){Be&&!an&&(O.axis=an=Math.abs(W)>Math.abs(ce)?"x":"y",Gt=!0),an!=="y"&&(Hn[2]+=W,O._vx.update(W,!0)),an!=="x"&&(jn[2]+=ce,O._vy.update(ce,!0)),u?Tn||(Tn=requestAnimationFrame(Qr)):Qr()},Kr=function(W){if(!qe(W,1)){W=il(W,c);var ce=W.clientX,L=W.clientY,K=ce-O.x,U=L-O.y,Y=O.isDragging;O.x=ce,O.y=L,(Y||Math.abs(O.startX-ce)>=o||Math.abs(O.startY-L)>=o)&&(m&&(Qe=!0),Y||(O.isDragging=!0),No(K,U),Y||w&&w(O))}},Ai=O.onPress=function(Q){qe(Q,1)||Q&&Q.button||(O.axis=an=null,Ge.pause(),O.isPressed=!0,Q=il(Q),un=Cr=0,O.startX=O.x=Q.clientX,O.startY=O.y=Q.clientY,O._vx.reset(),O._vy.reset(),Lt(b?l:We,Zn[1],Kr,Yr,!0),O.deltaX=O.deltaY=0,v&&v(O))},ee=O.onRelease=function(Q){if(!qe(Q,1)){It(b?l:We,Zn[1],Kr,!0);var W=!isNaN(O.y-O.startY),ce=O.isDragging,L=ce&&(Math.abs(O.x-O.startX)>3||Math.abs(O.y-O.startY)>3),K=il(Q);!L&&W&&(O._vx.reset(),O._vy.reset(),c&&fe&&_t.delayedCall(.08,function(){if(Rl()-Er>300&&!Q.defaultPrevented){if(Q.target.click)Q.target.click();else if(We.createEvent){var U=We.createEvent("MouseEvents");U.initMouseEvent("click",!0,!0,xn,1,K.screenX,K.screenY,K.clientX,K.clientY,!1,!1,!1,!1,0,null),Q.target.dispatchEvent(U)}}})),O.isDragging=O.isGesturing=O.isPressed=!1,d&&ce&&!b&&Ge.restart(!0),x&&ce&&x(O),_&&_(O,L)}},Bi=function(W){return W.touches&&W.touches.length>1&&(O.isGesturing=!0)&&I(W,O.isDragging)},Yn=function(){return(O.isGesturing=!1)||k(O)},Xn=function(W){if(!qe(W)){var ce=Ke(),L=Xr();Ro((ce-$i)*ve,(L-bo)*ve,1),$i=ce,bo=L,d&&Ge.restart(!0)}},Gn=function(W){if(!qe(W)){W=il(W,c),B&&(Ue=!0);var ce=(W.deltaMode===1?a:W.deltaMode===2?xn.innerHeight:1)*y;Ro(W.deltaX*ce,W.deltaY*ce,0),d&&!b&&Ge.restart(!0)}},Ui=function(W){if(!qe(W)){var ce=W.clientX,L=W.clientY,K=ce-O.x,U=L-O.y;O.x=ce,O.y=L,ue=!0,d&&Ge.restart(!0),(K||U)&&No(K,U)}},Mo=function(W){O.event=W,X(O)},Tr=function(W){O.event=W,Z(O)},Hs=function(W){return qe(W)||il(W,c)&&le(O)};Ge=O._dc=_t.delayedCall(p||.25,ja).pause(),O.deltaX=O.deltaY=0,O._vx=_p(0,50,!0),O._vy=_p(0,50,!0),O.scrollX=Ke,O.scrollY=Xr,O.isDragging=O.isGesturing=O.isPressed=!1,Iy(this),O.enable=function(Q){return O.isEnabled||(Lt(Gr?We:l,"scroll",yp),s.indexOf("scroll")>=0&&Lt(Gr?We:l,"scroll",Xn,Yr,pe),s.indexOf("wheel")>=0&&Lt(l,"wheel",Gn,Yr,pe),(s.indexOf("touch")>=0&&Ny||s.indexOf("pointer")>=0)&&(Lt(l,Zn[0],Ai,Yr,pe),Lt(We,Zn[2],ee),Lt(We,Zn[3],ee),fe&&Lt(l,"click",Vs,!0,!0),le&&Lt(l,"click",Hs),I&&Lt(We,"gesturestart",Bi),k&&Lt(We,"gestureend",Yn),X&&Lt(l,Qi+"enter",Mo),Z&&Lt(l,Qi+"leave",Tr),G&&Lt(l,Qi+"move",Ui)),O.isEnabled=!0,Q&&Q.type&&Ai(Q),H&&H(O)),O},O.disable=function(){O.isEnabled&&(is.filter(function(Q){return Q!==O&&Nl(Q.target)}).length||It(Gr?We:l,"scroll",yp),O.isPressed&&(O._vx.reset(),O._vy.reset(),It(b?l:We,Zn[1],Kr,!0)),It(Gr?We:l,"scroll",Xn,pe),It(l,"wheel",Gn,pe),It(l,Zn[0],Ai,pe),It(We,Zn[2],ee),It(We,Zn[3],ee),It(l,"click",Vs,!0),It(l,"click",Hs),It(We,"gesturestart",Bi),It(We,"gestureend",Yn),It(l,Qi+"enter",Mo),It(l,Qi+"leave",Tr),It(l,Qi+"move",Ui),O.isEnabled=O.isPressed=O.isDragging=!1,nt&&nt(O))},O.kill=O.revert=function(){O.disable();var Q=is.indexOf(O);Q>=0&&is.splice(Q,1),Ir===O&&(Ir=0)},is.push(O),b&&Nl(l)&&(Ir=O),O.enable(g)},qE(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t}();Xe.version="3.12.5";Xe.create=function(t){return new Xe(t)};Xe.register=$y;Xe.getAll=function(){return is.slice()};Xe.getById=function(t){return is.filter(function(e){return e.vars.id===t})[0]};Ly()&&_t.registerPlugin(Xe);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var D,Bo,oe,be,nr,ke,Ay,kc,ma,Ml,pl,Ja,Pt,nf,wp,$t,qm,Zm,Uo,By,Hf,Uy,Ft,Sp,Wy,Vy,ri,kp,Xh,ms,Gh,Cc,Cp,Yf,eu=1,Ot=Date.now,Xf=Ot(),An=0,hl=0,Jm=function(e,n,r){var i=hn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return r["_"+n+"Clamp"]=i,i?e.substr(6,e.length-7):e},eg=function(e,n){return n&&(!hn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},JE=function t(){return hl&&requestAnimationFrame(t)},tg=function(){return nf=1},ng=function(){return nf=0},pr=function(e){return e},ml=function(e){return Math.round(e*1e5)/1e5||0},Hy=function(){return typeof window<"u"},Yy=function(){return D||Hy()&&(D=window.gsap)&&D.registerPlugin&&D},Co=function(e){return!!~Ay.indexOf(e)},Xy=function(e){return(e==="Height"?Gh:oe["inner"+e])||nr["client"+e]||ke["client"+e]},Gy=function(e){return ji(e,"getBoundingClientRect")||(Co(e)?function(){return Lu.width=oe.innerWidth,Lu.height=Gh,Lu}:function(){return Rr(e)})},eT=function(e,n,r){var i=r.d,o=r.d2,s=r.a;return(s=ji(e,"getBoundingClientRect"))?function(){return s()[i]}:function(){return(n?Xy(o):e["client"+o])||0}},tT=function(e,n){return!n||~Sr.indexOf(e)?Gy(e):function(){return Lu}},vr=function(e,n){var r=n.s,i=n.d2,o=n.d,s=n.a;return Math.max(0,(r="scroll"+i)&&(s=ji(e,r))?s()-Gy(e)()[o]:Co(e)?(nr[r]||ke[r])-Xy(i):e[r]-e["offset"+i])},tu=function(e,n){for(var r=0;r<Uo.length;r+=3)(!n||~n.indexOf(Uo[r+1]))&&e(Uo[r],Uo[r+1],Uo[r+2])},hn=function(e){return typeof e=="string"},Wt=function(e){return typeof e=="function"},gl=function(e){return typeof e=="number"},Ki=function(e){return typeof e=="object"},ol=function(e,n,r){return e&&e.progress(n?0:1)&&r&&e.pause()},Gf=function(e,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return n(e)}):n(e);r&&r.totalTime&&(e.callbackAnimation=r)}},Do=Math.abs,Qy="left",Ky="top",Qh="right",Kh="bottom",po="width",ho="height",Il="Right",Ll="Left",Fl="Top",Dl="Bottom",Ze="padding",Nn="margin",Fs="Width",qh="Height",it="px",Mn=function(e){return oe.getComputedStyle(e)},nT=function(e){var n=Mn(e).position;e.style.position=n==="absolute"||n==="fixed"?n:"relative"},rg=function(e,n){for(var r in n)r in e||(e[r]=n[r]);return e},Rr=function(e,n){var r=n&&Mn(e)[wp]!=="matrix(1, 0, 0, 1, 0, 0)"&&D.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return r&&r.progress(0).kill(),i},Ec=function(e,n){var r=n.d2;return e["offset"+r]||e["client"+r]||0},qy=function(e){var n=[],r=e.labels,i=e.duration(),o;for(o in r)n.push(r[o]/i);return n},rT=function(e){return function(n){return D.utils.snap(qy(e),n)}},Zh=function(e){var n=D.utils.snap(e),r=Array.isArray(e)&&e.slice(0).sort(function(i,o){return i-o});return r?function(i,o,s){s===void 0&&(s=.001);var l;if(!o)return n(i);if(o>0){for(i-=s,l=0;l<r.length;l++)if(r[l]>=i)return r[l];return r[l-1]}else for(l=r.length,i+=s;l--;)if(r[l]<=i)return r[l];return r[0]}:function(i,o,s){s===void 0&&(s=.001);var l=n(i);return!o||Math.abs(l-i)<s||l-i<0==o<0?l:n(o<0?i-e:i+e)}},iT=function(e){return function(n,r){return Zh(qy(e))(n,r.direction)}},nu=function(e,n,r,i){return r.split(",").forEach(function(o){return e(n,o,i)})},ft=function(e,n,r,i,o){return e.addEventListener(n,r,{passive:!i,capture:!!o})},ct=function(e,n,r,i){return e.removeEventListener(n,r,!!i)},ru=function(e,n,r){r=r&&r.wheelHandler,r&&(e(n,"wheel",r),e(n,"touchmove",r))},ig={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},iu={toggleActions:"play",anticipatePin:0},Tc={top:0,left:0,center:.5,bottom:1,right:1},Ru=function(e,n){if(hn(e)){var r=e.indexOf("="),i=~r?+(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(i*=n/100),e=e.substr(0,r-1)),e=i+(e in Tc?Tc[e]*n:~e.indexOf("%")?parseFloat(e)*n/100:parseFloat(e)||0)}return e},ou=function(e,n,r,i,o,s,l,a){var u=o.startColor,c=o.endColor,d=o.fontSize,p=o.indent,h=o.fontWeight,y=be.createElement("div"),g=Co(r)||ji(r,"pinType")==="fixed",w=e.indexOf("scroller")!==-1,x=g?ke:r,m=e.indexOf("start")!==-1,v=m?u:c,_="border-color:"+v+";font-size:"+d+";color:"+v+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return _+="position:"+((w||a)&&g?"fixed;":"absolute;"),(w||a||!g)&&(_+=(i===st?Qh:Kh)+":"+(s+parseFloat(p))+"px;"),l&&(_+="box-sizing:border-box;text-align:left;width:"+l.offsetWidth+"px;"),y._isStart=m,y.setAttribute("class","gsap-marker-"+e+(n?" marker-"+n:"")),y.style.cssText=_,y.innerText=n||n===0?e+"-"+n:e,x.children[0]?x.insertBefore(y,x.children[0]):x.appendChild(y),y._offset=y["offset"+i.op.d2],Nu(y,0,i,m),y},Nu=function(e,n,r,i){var o={display:"block"},s=r[i?"os2":"p2"],l=r[i?"p2":"os2"];e._isFlipped=i,o[r.a+"Percent"]=i?-100:0,o[r.a]=i?"1px":0,o["border"+s+Fs]=1,o["border"+l+Fs]=0,o[r.p]=n+"px",D.set(e,o)},J=[],Ep={},ga,og=function(){return Ot()-An>34&&(ga||(ga=requestAnimationFrame(Fr)))},$o=function(){(!Ft||!Ft.isPressed||Ft.startX>ke.clientWidth)&&(te.cache++,Ft?ga||(ga=requestAnimationFrame(Fr)):Fr(),An||To("scrollStart"),An=Ot())},Qf=function(){Vy=oe.innerWidth,Wy=oe.innerHeight},xl=function(){te.cache++,!Pt&&!Uy&&!be.fullscreenElement&&!be.webkitFullscreenElement&&(!Sp||Vy!==oe.innerWidth||Math.abs(oe.innerHeight-Wy)>oe.innerHeight*.25)&&kc.restart(!0)},Eo={},oT=[],Zy=function t(){return ct(re,"scrollEnd",t)||no(!0)},To=function(e){return Eo[e]&&Eo[e].map(function(n){return n()})||oT},dn=[],Jy=function(e){for(var n=0;n<dn.length;n+=5)(!e||dn[n+4]&&dn[n+4].query===e)&&(dn[n].style.cssText=dn[n+1],dn[n].getBBox&&dn[n].setAttribute("transform",dn[n+2]||""),dn[n+3].uncache=1)},Jh=function(e,n){var r;for($t=0;$t<J.length;$t++)r=J[$t],r&&(!n||r._ctx===n)&&(e?r.kill(1):r.revert(!0,!0));Cc=!0,n&&Jy(n),n||To("revert")},e_=function(e,n){te.cache++,(n||!At)&&te.forEach(function(r){return Wt(r)&&r.cacheID++&&(r.rec=0)}),hn(e)&&(oe.history.scrollRestoration=Xh=e)},At,mo=0,sg,sT=function(){if(sg!==mo){var e=sg=mo;requestAnimationFrame(function(){return e===mo&&no(!0)})}},t_=function(){ke.appendChild(ms),Gh=!Ft&&ms.offsetHeight||oe.innerHeight,ke.removeChild(ms)},lg=function(e){return ma(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n){return n.style.display=e?"none":"block"})},no=function(e,n){if(An&&!e&&!Cc){ft(re,"scrollEnd",Zy);return}t_(),At=re.isRefreshing=!0,te.forEach(function(i){return Wt(i)&&++i.cacheID&&(i.rec=i())});var r=To("refreshInit");By&&re.sort(),n||Jh(),te.forEach(function(i){Wt(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),J.slice(0).forEach(function(i){return i.refresh()}),Cc=!1,J.forEach(function(i){if(i._subPinOffset&&i.pin){var o=i.vars.horizontal?"offsetWidth":"offsetHeight",s=i.pin[o];i.revert(!0,1),i.adjustPinSpacing(i.pin[o]-s),i.refresh()}}),Cp=1,lg(!0),J.forEach(function(i){var o=vr(i.scroller,i._dir),s=i.vars.end==="max"||i._endClamp&&i.end>o,l=i._startClamp&&i.start>=o;(s||l)&&i.setPositions(l?o-1:i.start,s?Math.max(l?o:i.start+1,o):i.end,!0)}),lg(!1),Cp=0,r.forEach(function(i){return i&&i.render&&i.render(-1)}),te.forEach(function(i){Wt(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),e_(Xh,1),kc.pause(),mo++,At=2,Fr(2),J.forEach(function(i){return Wt(i.vars.onRefresh)&&i.vars.onRefresh(i)}),At=re.isRefreshing=!1,To("refresh")},Tp=0,Mu=1,$l,Fr=function(e){if(e===2||!At&&!Cc){re.isUpdating=!0,$l&&$l.update(0);var n=J.length,r=Ot(),i=r-Xf>=50,o=n&&J[0].scroll();if(Mu=Tp>o?-1:1,At||(Tp=o),i&&(An&&!nf&&r-An>200&&(An=0,To("scrollEnd")),pl=Xf,Xf=r),Mu<0){for($t=n;$t-- >0;)J[$t]&&J[$t].update(0,i);Mu=1}else for($t=0;$t<n;$t++)J[$t]&&J[$t].update(0,i);re.isUpdating=!1}ga=0},jp=[Qy,Ky,Kh,Qh,Nn+Dl,Nn+Il,Nn+Fl,Nn+Ll,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Iu=jp.concat([po,ho,"boxSizing","max"+Fs,"max"+qh,"position",Nn,Ze,Ze+Fl,Ze+Il,Ze+Dl,Ze+Ll]),lT=function(e,n,r){gs(r);var i=e._gsap;if(i.spacerIsNative)gs(i.spacerState);else if(e._gsap.swappedIn){var o=n.parentNode;o&&(o.insertBefore(e,n),o.removeChild(n))}e._gsap.swappedIn=!1},Kf=function(e,n,r,i){if(!e._gsap.swappedIn){for(var o=jp.length,s=n.style,l=e.style,a;o--;)a=jp[o],s[a]=r[a];s.position=r.position==="absolute"?"absolute":"relative",r.display==="inline"&&(s.display="inline-block"),l[Kh]=l[Qh]="auto",s.flexBasis=r.flexBasis||"auto",s.overflow="visible",s.boxSizing="border-box",s[po]=Ec(e,Ut)+it,s[ho]=Ec(e,st)+it,s[Ze]=l[Nn]=l[Ky]=l[Qy]="0",gs(i),l[po]=l["max"+Fs]=r[po],l[ho]=l["max"+qh]=r[ho],l[Ze]=r[Ze],e.parentNode!==n&&(e.parentNode.insertBefore(n,e),n.appendChild(e)),e._gsap.swappedIn=!0}},aT=/([A-Z])/g,gs=function(e){if(e){var n=e.t.style,r=e.length,i=0,o,s;for((e.t._gsap||D.core.getCache(e.t)).uncache=1;i<r;i+=2)s=e[i+1],o=e[i],s?n[o]=s:n[o]&&n.removeProperty(o.replace(aT,"-$1").toLowerCase())}},su=function(e){for(var n=Iu.length,r=e.style,i=[],o=0;o<n;o++)i.push(Iu[o],r[Iu[o]]);return i.t=e,i},uT=function(e,n,r){for(var i=[],o=e.length,s=r?8:0,l;s<o;s+=2)l=e[s],i.push(l,l in n?n[l]:e[s+1]);return i.t=e.t,i},Lu={left:0,top:0},ag=function(e,n,r,i,o,s,l,a,u,c,d,p,h,y){Wt(e)&&(e=e(a)),hn(e)&&e.substr(0,3)==="max"&&(e=p+(e.charAt(4)==="="?Ru("0"+e.substr(3),r):0));var g=h?h.time():0,w,x,m;if(h&&h.seek(0),isNaN(e)||(e=+e),gl(e))h&&(e=D.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,p,e)),l&&Nu(l,r,i,!0);else{Wt(n)&&(n=n(a));var v=(e||"0").split(" "),_,C,E,S;m=Qt(n,a)||ke,_=Rr(m)||{},(!_||!_.left&&!_.top)&&Mn(m).display==="none"&&(S=m.style.display,m.style.display="block",_=Rr(m),S?m.style.display=S:m.style.removeProperty("display")),C=Ru(v[0],_[i.d]),E=Ru(v[1]||"0",r),e=_[i.p]-u[i.p]-c+C+o-E,l&&Nu(l,E,i,r-E<20||l._isStart&&E>20),r-=r-E}if(y&&(a[y]=e||-.001,e<0&&(e=0)),s){var j=e+r,z=s._isStart;w="scroll"+i.d2,Nu(s,j,i,z&&j>20||!z&&(d?Math.max(ke[w],nr[w]):s.parentNode[w])<=j+1),d&&(u=Rr(l),d&&(s.style[i.op.p]=u[i.op.p]-i.op.m-s._offset+it))}return h&&m&&(w=Rr(m),h.seek(p),x=Rr(m),h._caScrollDist=w[i.p]-x[i.p],e=e/h._caScrollDist*p),h&&h.seek(g),h?e:Math.round(e)},cT=/(webkit|moz|length|cssText|inset)/i,ug=function(e,n,r,i){if(e.parentNode!==n){var o=e.style,s,l;if(n===ke){e._stOrig=o.cssText,l=Mn(e);for(s in l)!+s&&!cT.test(s)&&l[s]&&typeof o[s]=="string"&&s!=="0"&&(o[s]=l[s]);o.top=r,o.left=i}else o.cssText=e._stOrig;D.core.getCache(e).uncache=1,n.appendChild(e)}},n_=function(e,n,r){var i=n,o=i;return function(s){var l=Math.round(e());return l!==i&&l!==o&&Math.abs(l-i)>3&&Math.abs(l-o)>3&&(s=l,r&&r()),o=i,i=s,s}},lu=function(e,n,r){var i={};i[n.p]="+="+r,D.set(e,i)},cg=function(e,n){var r=Ni(e,n),i="_scroll"+n.p2,o=function s(l,a,u,c,d){var p=s.tween,h=a.onComplete,y={};u=u||r();var g=n_(r,u,function(){p.kill(),s.tween=0});return d=c&&d||0,c=c||l-u,p&&p.kill(),a[i]=l,a.inherit=!1,a.modifiers=y,y[i]=function(){return g(u+c*p.ratio+d*p.ratio*p.ratio)},a.onUpdate=function(){te.cache++,s.tween&&Fr()},a.onComplete=function(){s.tween=0,h&&h.call(p)},p=s.tween=D.to(e,a),p};return e[i]=r,r.wheelHandler=function(){return o.tween&&o.tween.kill()&&(o.tween=0)},ft(e,"wheel",r.wheelHandler),re.isTouch&&ft(e,"touchmove",r.wheelHandler),o},re=function(){function t(n,r){Bo||t.register(D)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),kp(this),this.init(n,r)}var e=t.prototype;return e.init=function(r,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!hl){this.update=this.refresh=this.kill=pr;return}r=rg(hn(r)||gl(r)||r.nodeType?{trigger:r}:r,iu);var o=r,s=o.onUpdate,l=o.toggleClass,a=o.id,u=o.onToggle,c=o.onRefresh,d=o.scrub,p=o.trigger,h=o.pin,y=o.pinSpacing,g=o.invalidateOnRefresh,w=o.anticipatePin,x=o.onScrubComplete,m=o.onSnapComplete,v=o.once,_=o.snap,C=o.pinReparent,E=o.pinSpacer,S=o.containerAnimation,j=o.fastScrollEnd,z=o.preventOverlaps,P=r.horizontal||r.containerAnimation&&r.horizontal!==!1?Ut:st,$=!d&&d!==0,M=Qt(r.scroller||oe),V=D.core.getCache(M),X=Co(M),Z=("pinType"in r?r.pinType:ji(M,"pinType")||X&&"fixed")==="fixed",G=[r.onEnter,r.onLeave,r.onEnterBack,r.onLeaveBack],A=$&&r.toggleActions.split(" "),b="markers"in r?r.markers:iu.markers,I=X?0:parseFloat(Mn(M)["border"+P.p2+Fs])||0,k=this,B=r.onRefreshInit&&function(){return r.onRefreshInit(k)},H=eT(M,X,P),nt=tT(M,X),le=0,ve=0,pe=0,fe=Ni(M,P),Be,Ee,Tn,Ge,Qe,ue,Ue,Gt,an,O,un,Cr,Yr,Ke,Xr,$i,bo,at,Gr,We,Hn,jn,Er,Vs,qe,ja,Qr,Ro,No,Kr,Ai,ee,Bi,Yn,Xn,Gn,Ui,Mo,Tr;if(k._startClamp=k._endClamp=!1,k._dir=P,w*=45,k.scroller=M,k.scroll=S?S.time.bind(S):fe,Ge=fe(),k.vars=r,i=i||r.animation,"refreshPriority"in r&&(By=1,r.refreshPriority===-9999&&($l=k)),V.tweenScroll=V.tweenScroll||{top:cg(M,st),left:cg(M,Ut)},k.tweenTo=Be=V.tweenScroll[P.p],k.scrubDuration=function(L){Bi=gl(L)&&L,Bi?ee?ee.duration(L):ee=D.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Bi,paused:!0,onComplete:function(){return x&&x(k)}}):(ee&&ee.progress(1).kill(),ee=0)},i&&(i.vars.lazy=!1,i._initted&&!k.isReverted||i.vars.immediateRender!==!1&&r.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),k.animation=i.pause(),i.scrollTrigger=k,k.scrubDuration(d),Kr=0,a||(a=i.vars.id)),_&&((!Ki(_)||_.push)&&(_={snapTo:_}),"scrollBehavior"in ke.style&&D.set(X?[ke,nr]:M,{scrollBehavior:"auto"}),te.forEach(function(L){return Wt(L)&&L.target===(X?be.scrollingElement||nr:M)&&(L.smooth=!1)}),Tn=Wt(_.snapTo)?_.snapTo:_.snapTo==="labels"?rT(i):_.snapTo==="labelsDirectional"?iT(i):_.directional!==!1?function(L,K){return Zh(_.snapTo)(L,Ot()-ve<500?0:K.direction)}:D.utils.snap(_.snapTo),Yn=_.duration||{min:.1,max:2},Yn=Ki(Yn)?Ml(Yn.min,Yn.max):Ml(Yn,Yn),Xn=D.delayedCall(_.delay||Bi/2||.1,function(){var L=fe(),K=Ot()-ve<500,U=Be.tween;if((K||Math.abs(k.getVelocity())<10)&&!U&&!nf&&le!==L){var Y=(L-ue)/Ke,ut=i&&!$?i.totalProgress():Y,ie=K?0:(ut-Ai)/(Ot()-pl)*1e3||0,Ve=D.utils.clamp(-Y,1-Y,Do(ie/2)*ie/.185),kt=Y+(_.inertia===!1?0:Ve),Fe,Te,me=_,Qn=me.onStart,Oe=me.onInterrupt,cn=me.onComplete;if(Fe=Tn(kt,k),gl(Fe)||(Fe=kt),Te=Math.round(ue+Fe*Ke),L<=Ue&&L>=ue&&Te!==L){if(U&&!U._initted&&U.data<=Do(Te-L))return;_.inertia===!1&&(Ve=Fe-Y),Be(Te,{duration:Yn(Do(Math.max(Do(kt-ut),Do(Fe-ut))*.185/ie/.05||0)),ease:_.ease||"power3",data:Do(Te-L),onInterrupt:function(){return Xn.restart(!0)&&Oe&&Oe(k)},onComplete:function(){k.update(),le=fe(),i&&(ee?ee.resetTo("totalProgress",Fe,i._tTime/i._tDur):i.progress(Fe)),Kr=Ai=i&&!$?i.totalProgress():k.progress,m&&m(k),cn&&cn(k)}},L,Ve*Ke,Te-L-Ve*Ke),Qn&&Qn(k,Be.tween)}}else k.isActive&&le!==L&&Xn.restart(!0)}).pause()),a&&(Ep[a]=k),p=k.trigger=Qt(p||h!==!0&&h),Tr=p&&p._gsap&&p._gsap.stRevert,Tr&&(Tr=Tr(k)),h=h===!0?p:Qt(h),hn(l)&&(l={targets:p,className:l}),h&&(y===!1||y===Nn||(y=!y&&h.parentNode&&h.parentNode.style&&Mn(h.parentNode).display==="flex"?!1:Ze),k.pin=h,Ee=D.core.getCache(h),Ee.spacer?Xr=Ee.pinState:(E&&(E=Qt(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Ee.spacerIsNative=!!E,E&&(Ee.spacerState=su(E))),Ee.spacer=at=E||be.createElement("div"),at.classList.add("pin-spacer"),a&&at.classList.add("pin-spacer-"+a),Ee.pinState=Xr=su(h)),r.force3D!==!1&&D.set(h,{force3D:!0}),k.spacer=at=Ee.spacer,No=Mn(h),Vs=No[y+P.os2],We=D.getProperty(h),Hn=D.quickSetter(h,P.a,it),Kf(h,at,No),bo=su(h)),b){Cr=Ki(b)?rg(b,ig):ig,O=ou("scroller-start",a,M,P,Cr,0),un=ou("scroller-end",a,M,P,Cr,0,O),Gr=O["offset"+P.op.d2];var Hs=Qt(ji(M,"content")||M);Gt=this.markerStart=ou("start",a,Hs,P,Cr,Gr,0,S),an=this.markerEnd=ou("end",a,Hs,P,Cr,Gr,0,S),S&&(Mo=D.quickSetter([Gt,an],P.a,it)),!Z&&!(Sr.length&&ji(M,"fixedMarkers")===!0)&&(nT(X?ke:M),D.set([O,un],{force3D:!0}),ja=D.quickSetter(O,P.a,it),Ro=D.quickSetter(un,P.a,it))}if(S){var Q=S.vars.onUpdate,W=S.vars.onUpdateParams;S.eventCallback("onUpdate",function(){k.update(0,0,1),Q&&Q.apply(S,W||[])})}if(k.previous=function(){return J[J.indexOf(k)-1]},k.next=function(){return J[J.indexOf(k)+1]},k.revert=function(L,K){if(!K)return k.kill(!0);var U=L!==!1||!k.enabled,Y=Pt;U!==k.isReverted&&(U&&(Gn=Math.max(fe(),k.scroll.rec||0),pe=k.progress,Ui=i&&i.progress()),Gt&&[Gt,an,O,un].forEach(function(ut){return ut.style.display=U?"none":"block"}),U&&(Pt=k,k.update(U)),h&&(!C||!k.isActive)&&(U?lT(h,at,Xr):Kf(h,at,Mn(h),qe)),U||k.update(U),Pt=Y,k.isReverted=U)},k.refresh=function(L,K,U,Y){if(!((Pt||!k.enabled)&&!K)){if(h&&L&&An){ft(t,"scrollEnd",Zy);return}!At&&B&&B(k),Pt=k,Be.tween&&!U&&(Be.tween.kill(),Be.tween=0),ee&&ee.pause(),g&&i&&i.revert({kill:!1}).invalidate(),k.isReverted||k.revert(!0,!0),k._subPinOffset=!1;var ut=H(),ie=nt(),Ve=S?S.duration():vr(M,P),kt=Ke<=.01,Fe=0,Te=Y||0,me=Ki(U)?U.end:r.end,Qn=r.endTrigger||p,Oe=Ki(U)?U.start:r.start||(r.start===0||!p?0:h?"0 0":"0 100%"),cn=k.pinnedContainer=r.pinnedContainer&&Qt(r.pinnedContainer,k),lr=p&&Math.max(0,J.indexOf(k))||0,xt=lr,vt,Ct,Wi,Pa,Et,rt,ar,rf,t0,Ys,ur,Xs,Oa;for(b&&Ki(U)&&(Xs=D.getProperty(O,P.p),Oa=D.getProperty(un,P.p));xt--;)rt=J[xt],rt.end||rt.refresh(0,1)||(Pt=k),ar=rt.pin,ar&&(ar===p||ar===h||ar===cn)&&!rt.isReverted&&(Ys||(Ys=[]),Ys.unshift(rt),rt.revert(!0,!0)),rt!==J[xt]&&(lr--,xt--);for(Wt(Oe)&&(Oe=Oe(k)),Oe=Jm(Oe,"start",k),ue=ag(Oe,p,ut,P,fe(),Gt,O,k,ie,I,Z,Ve,S,k._startClamp&&"_startClamp")||(h?-.001:0),Wt(me)&&(me=me(k)),hn(me)&&!me.indexOf("+=")&&(~me.indexOf(" ")?me=(hn(Oe)?Oe.split(" ")[0]:"")+me:(Fe=Ru(me.substr(2),ut),me=hn(Oe)?Oe:(S?D.utils.mapRange(0,S.duration(),S.scrollTrigger.start,S.scrollTrigger.end,ue):ue)+Fe,Qn=p)),me=Jm(me,"end",k),Ue=Math.max(ue,ag(me||(Qn?"100% 0":Ve),Qn,ut,P,fe()+Fe,an,un,k,ie,I,Z,Ve,S,k._endClamp&&"_endClamp"))||-.001,Fe=0,xt=lr;xt--;)rt=J[xt],ar=rt.pin,ar&&rt.start-rt._pinPush<=ue&&!S&&rt.end>0&&(vt=rt.end-(k._startClamp?Math.max(0,rt.start):rt.start),(ar===p&&rt.start-rt._pinPush<ue||ar===cn)&&isNaN(Oe)&&(Fe+=vt*(1-rt.progress)),ar===h&&(Te+=vt));if(ue+=Fe,Ue+=Fe,k._startClamp&&(k._startClamp+=Fe),k._endClamp&&!At&&(k._endClamp=Ue||-.001,Ue=Math.min(Ue,vr(M,P))),Ke=Ue-ue||(ue-=.01)&&.001,kt&&(pe=D.utils.clamp(0,1,D.utils.normalize(ue,Ue,Gn))),k._pinPush=Te,Gt&&Fe&&(vt={},vt[P.a]="+="+Fe,cn&&(vt[P.p]="-="+fe()),D.set([Gt,an],vt)),h&&!(Cp&&k.end>=vr(M,P)))vt=Mn(h),Pa=P===st,Wi=fe(),jn=parseFloat(We(P.a))+Te,!Ve&&Ue>1&&(ur=(X?be.scrollingElement||nr:M).style,ur={style:ur,value:ur["overflow"+P.a.toUpperCase()]},X&&Mn(ke)["overflow"+P.a.toUpperCase()]!=="scroll"&&(ur.style["overflow"+P.a.toUpperCase()]="scroll")),Kf(h,at,vt),bo=su(h),Ct=Rr(h,!0),rf=Z&&Ni(M,Pa?Ut:st)(),y?(qe=[y+P.os2,Ke+Te+it],qe.t=at,xt=y===Ze?Ec(h,P)+Ke+Te:0,xt&&(qe.push(P.d,xt+it),at.style.flexBasis!=="auto"&&(at.style.flexBasis=xt+it)),gs(qe),cn&&J.forEach(function(Gs){Gs.pin===cn&&Gs.vars.pinSpacing!==!1&&(Gs._subPinOffset=!0)}),Z&&fe(Gn)):(xt=Ec(h,P),xt&&at.style.flexBasis!=="auto"&&(at.style.flexBasis=xt+it)),Z&&(Et={top:Ct.top+(Pa?Wi-ue:rf)+it,left:Ct.left+(Pa?rf:Wi-ue)+it,boxSizing:"border-box",position:"fixed"},Et[po]=Et["max"+Fs]=Math.ceil(Ct.width)+it,Et[ho]=Et["max"+qh]=Math.ceil(Ct.height)+it,Et[Nn]=Et[Nn+Fl]=Et[Nn+Il]=Et[Nn+Dl]=Et[Nn+Ll]="0",Et[Ze]=vt[Ze],Et[Ze+Fl]=vt[Ze+Fl],Et[Ze+Il]=vt[Ze+Il],Et[Ze+Dl]=vt[Ze+Dl],Et[Ze+Ll]=vt[Ze+Ll],$i=uT(Xr,Et,C),At&&fe(0)),i?(t0=i._initted,Hf(1),i.render(i.duration(),!0,!0),Er=We(P.a)-jn+Ke+Te,Qr=Math.abs(Ke-Er)>1,Z&&Qr&&$i.splice($i.length-2,2),i.render(0,!0,!0),t0||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Hf(0)):Er=Ke,ur&&(ur.value?ur.style["overflow"+P.a.toUpperCase()]=ur.value:ur.style.removeProperty("overflow-"+P.a));else if(p&&fe()&&!S)for(Ct=p.parentNode;Ct&&Ct!==ke;)Ct._pinOffset&&(ue-=Ct._pinOffset,Ue-=Ct._pinOffset),Ct=Ct.parentNode;Ys&&Ys.forEach(function(Gs){return Gs.revert(!1,!0)}),k.start=ue,k.end=Ue,Ge=Qe=At?Gn:fe(),!S&&!At&&(Ge<Gn&&fe(Gn),k.scroll.rec=0),k.revert(!1,!0),ve=Ot(),Xn&&(le=-1,Xn.restart(!0)),Pt=0,i&&$&&(i._initted||Ui)&&i.progress()!==Ui&&i.progress(Ui||0,!0).render(i.time(),!0,!0),(kt||pe!==k.progress||S||g)&&(i&&!$&&i.totalProgress(S&&ue<-.001&&!pe?D.utils.normalize(ue,Ue,0):pe,!0),k.progress=kt||(Ge-ue)/Ke===pe?0:pe),h&&y&&(at._pinOffset=Math.round(k.progress*Er)),ee&&ee.invalidate(),isNaN(Xs)||(Xs-=D.getProperty(O,P.p),Oa-=D.getProperty(un,P.p),lu(O,P,Xs),lu(Gt,P,Xs-(Y||0)),lu(un,P,Oa),lu(an,P,Oa-(Y||0))),kt&&!At&&k.update(),c&&!At&&!Yr&&(Yr=!0,c(k),Yr=!1)}},k.getVelocity=function(){return(fe()-Qe)/(Ot()-pl)*1e3||0},k.endAnimation=function(){ol(k.callbackAnimation),i&&(ee?ee.progress(1):i.paused()?$||ol(i,k.direction<0,1):ol(i,i.reversed()))},k.labelToScroll=function(L){return i&&i.labels&&(ue||k.refresh()||ue)+i.labels[L]/i.duration()*Ke||0},k.getTrailing=function(L){var K=J.indexOf(k),U=k.direction>0?J.slice(0,K).reverse():J.slice(K+1);return(hn(L)?U.filter(function(Y){return Y.vars.preventOverlaps===L}):U).filter(function(Y){return k.direction>0?Y.end<=ue:Y.start>=Ue})},k.update=function(L,K,U){if(!(S&&!U&&!L)){var Y=At===!0?Gn:k.scroll(),ut=L?0:(Y-ue)/Ke,ie=ut<0?0:ut>1?1:ut||0,Ve=k.progress,kt,Fe,Te,me,Qn,Oe,cn,lr;if(K&&(Qe=Ge,Ge=S?fe():Y,_&&(Ai=Kr,Kr=i&&!$?i.totalProgress():ie)),w&&h&&!Pt&&!eu&&An&&(!ie&&ue<Y+(Y-Qe)/(Ot()-pl)*w?ie=1e-4:ie===1&&Ue>Y+(Y-Qe)/(Ot()-pl)*w&&(ie=.9999)),ie!==Ve&&k.enabled){if(kt=k.isActive=!!ie&&ie<1,Fe=!!Ve&&Ve<1,Oe=kt!==Fe,Qn=Oe||!!ie!=!!Ve,k.direction=ie>Ve?1:-1,k.progress=ie,Qn&&!Pt&&(Te=ie&&!Ve?0:ie===1?1:Ve===1?2:3,$&&(me=!Oe&&A[Te+1]!=="none"&&A[Te+1]||A[Te],lr=i&&(me==="complete"||me==="reset"||me in i))),z&&(Oe||lr)&&(lr||d||!i)&&(Wt(z)?z(k):k.getTrailing(z).forEach(function(Wi){return Wi.endAnimation()})),$||(ee&&!Pt&&!eu?(ee._dp._time-ee._start!==ee._time&&ee.render(ee._dp._time-ee._start),ee.resetTo?ee.resetTo("totalProgress",ie,i._tTime/i._tDur):(ee.vars.totalProgress=ie,ee.invalidate().restart())):i&&i.totalProgress(ie,!!(Pt&&(ve||L)))),h){if(L&&y&&(at.style[y+P.os2]=Vs),!Z)Hn(ml(jn+Er*ie));else if(Qn){if(cn=!L&&ie>Ve&&Ue+1>Y&&Y+1>=vr(M,P),C)if(!L&&(kt||cn)){var xt=Rr(h,!0),vt=Y-ue;ug(h,ke,xt.top+(P===st?vt:0)+it,xt.left+(P===st?0:vt)+it)}else ug(h,at);gs(kt||cn?$i:bo),Qr&&ie<1&&kt||Hn(jn+(ie===1&&!cn?Er:0))}}_&&!Be.tween&&!Pt&&!eu&&Xn.restart(!0),l&&(Oe||v&&ie&&(ie<1||!Yf))&&ma(l.targets).forEach(function(Wi){return Wi.classList[kt||v?"add":"remove"](l.className)}),s&&!$&&!L&&s(k),Qn&&!Pt?($&&(lr&&(me==="complete"?i.pause().totalProgress(1):me==="reset"?i.restart(!0).pause():me==="restart"?i.restart(!0):i[me]()),s&&s(k)),(Oe||!Yf)&&(u&&Oe&&Gf(k,u),G[Te]&&Gf(k,G[Te]),v&&(ie===1?k.kill(!1,1):G[Te]=0),Oe||(Te=ie===1?1:3,G[Te]&&Gf(k,G[Te]))),j&&!kt&&Math.abs(k.getVelocity())>(gl(j)?j:2500)&&(ol(k.callbackAnimation),ee?ee.progress(1):ol(i,me==="reverse"?1:!ie,1))):$&&s&&!Pt&&s(k)}if(Ro){var Ct=S?Y/S.duration()*(S._caScrollDist||0):Y;ja(Ct+(O._isFlipped?1:0)),Ro(Ct)}Mo&&Mo(-Y/S.duration()*(S._caScrollDist||0))}},k.enable=function(L,K){k.enabled||(k.enabled=!0,ft(M,"resize",xl),X||ft(M,"scroll",$o),B&&ft(t,"refreshInit",B),L!==!1&&(k.progress=pe=0,Ge=Qe=le=fe()),K!==!1&&k.refresh())},k.getTween=function(L){return L&&Be?Be.tween:ee},k.setPositions=function(L,K,U,Y){if(S){var ut=S.scrollTrigger,ie=S.duration(),Ve=ut.end-ut.start;L=ut.start+Ve*L/ie,K=ut.start+Ve*K/ie}k.refresh(!1,!1,{start:eg(L,U&&!!k._startClamp),end:eg(K,U&&!!k._endClamp)},Y),k.update()},k.adjustPinSpacing=function(L){if(qe&&L){var K=qe.indexOf(P.d)+1;qe[K]=parseFloat(qe[K])+L+it,qe[1]=parseFloat(qe[1])+L+it,gs(qe)}},k.disable=function(L,K){if(k.enabled&&(L!==!1&&k.revert(!0,!0),k.enabled=k.isActive=!1,K||ee&&ee.pause(),Gn=0,Ee&&(Ee.uncache=1),B&&ct(t,"refreshInit",B),Xn&&(Xn.pause(),Be.tween&&Be.tween.kill()&&(Be.tween=0)),!X)){for(var U=J.length;U--;)if(J[U].scroller===M&&J[U]!==k)return;ct(M,"resize",xl),X||ct(M,"scroll",$o)}},k.kill=function(L,K){k.disable(L,K),ee&&!K&&ee.kill(),a&&delete Ep[a];var U=J.indexOf(k);U>=0&&J.splice(U,1),U===$t&&Mu>0&&$t--,U=0,J.forEach(function(Y){return Y.scroller===k.scroller&&(U=1)}),U||At||(k.scroll.rec=0),i&&(i.scrollTrigger=null,L&&i.revert({kill:!1}),K||i.kill()),Gt&&[Gt,an,O,un].forEach(function(Y){return Y.parentNode&&Y.parentNode.removeChild(Y)}),$l===k&&($l=0),h&&(Ee&&(Ee.uncache=1),U=0,J.forEach(function(Y){return Y.pin===h&&U++}),U||(Ee.spacer=0)),r.onKill&&r.onKill(k)},J.push(k),k.enable(!1,!1),Tr&&Tr(k),i&&i.add&&!Ke){var ce=k.update;k.update=function(){k.update=ce,ue||Ue||k.refresh()},D.delayedCall(.01,k.update),Ke=.01,ue=Ue=0}else k.refresh();h&&sT()},t.register=function(r){return Bo||(D=r||Yy(),Hy()&&window.document&&t.enable(),Bo=hl),Bo},t.defaults=function(r){if(r)for(var i in r)iu[i]=r[i];return iu},t.disable=function(r,i){hl=0,J.forEach(function(s){return s[i?"kill":"disable"](r)}),ct(oe,"wheel",$o),ct(be,"scroll",$o),clearInterval(Ja),ct(be,"touchcancel",pr),ct(ke,"touchstart",pr),nu(ct,be,"pointerdown,touchstart,mousedown",tg),nu(ct,be,"pointerup,touchend,mouseup",ng),kc.kill(),tu(ct);for(var o=0;o<te.length;o+=3)ru(ct,te[o],te[o+1]),ru(ct,te[o],te[o+2])},t.enable=function(){if(oe=window,be=document,nr=be.documentElement,ke=be.body,D&&(ma=D.utils.toArray,Ml=D.utils.clamp,kp=D.core.context||pr,Hf=D.core.suppressOverwrites||pr,Xh=oe.history.scrollRestoration||"auto",Tp=oe.pageYOffset,D.core.globals("ScrollTrigger",t),ke)){hl=1,ms=document.createElement("div"),ms.style.height="100vh",ms.style.position="absolute",t_(),JE(),Xe.register(D),t.isTouch=Xe.isTouch,ri=Xe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Sp=Xe.isTouch===1,ft(oe,"wheel",$o),Ay=[oe,be,nr,ke],D.matchMedia?(t.matchMedia=function(a){var u=D.matchMedia(),c;for(c in a)u.add(c,a[c]);return u},D.addEventListener("matchMediaInit",function(){return Jh()}),D.addEventListener("matchMediaRevert",function(){return Jy()}),D.addEventListener("matchMedia",function(){no(0,1),To("matchMedia")}),D.matchMedia("(orientation: portrait)",function(){return Qf(),Qf})):console.warn("Requires GSAP 3.11.0 or later"),Qf(),ft(be,"scroll",$o);var r=ke.style,i=r.borderTopStyle,o=D.core.Animation.prototype,s,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",s=Rr(ke),st.m=Math.round(s.top+st.sc())||0,Ut.m=Math.round(s.left+Ut.sc())||0,i?r.borderTopStyle=i:r.removeProperty("border-top-style"),Ja=setInterval(og,250),D.delayedCall(.5,function(){return eu=0}),ft(be,"touchcancel",pr),ft(ke,"touchstart",pr),nu(ft,be,"pointerdown,touchstart,mousedown",tg),nu(ft,be,"pointerup,touchend,mouseup",ng),wp=D.utils.checkPrefix("transform"),Iu.push(wp),Bo=Ot(),kc=D.delayedCall(.2,no).pause(),Uo=[be,"visibilitychange",function(){var a=oe.innerWidth,u=oe.innerHeight;be.hidden?(qm=a,Zm=u):(qm!==a||Zm!==u)&&xl()},be,"DOMContentLoaded",no,oe,"load",no,oe,"resize",xl],tu(ft),J.forEach(function(a){return a.enable(0,1)}),l=0;l<te.length;l+=3)ru(ct,te[l],te[l+1]),ru(ct,te[l],te[l+2])}},t.config=function(r){"limitCallbacks"in r&&(Yf=!!r.limitCallbacks);var i=r.syncInterval;i&&clearInterval(Ja)||(Ja=i)&&setInterval(og,i),"ignoreMobileResize"in r&&(Sp=t.isTouch===1&&r.ignoreMobileResize),"autoRefreshEvents"in r&&(tu(ct)||tu(ft,r.autoRefreshEvents||"none"),Uy=(r.autoRefreshEvents+"").indexOf("resize")===-1)},t.scrollerProxy=function(r,i){var o=Qt(r),s=te.indexOf(o),l=Co(o);~s&&te.splice(s,l?6:2),i&&(l?Sr.unshift(oe,i,ke,i,nr,i):Sr.unshift(o,i))},t.clearMatchMedia=function(r){J.forEach(function(i){return i._ctx&&i._ctx.query===r&&i._ctx.kill(!0,!0)})},t.isInViewport=function(r,i,o){var s=(hn(r)?Qt(r):r).getBoundingClientRect(),l=s[o?po:ho]*i||0;return o?s.right-l>0&&s.left+l<oe.innerWidth:s.bottom-l>0&&s.top+l<oe.innerHeight},t.positionInViewport=function(r,i,o){hn(r)&&(r=Qt(r));var s=r.getBoundingClientRect(),l=s[o?po:ho],a=i==null?l/2:i in Tc?Tc[i]*l:~i.indexOf("%")?parseFloat(i)*l/100:parseFloat(i)||0;return o?(s.left+a)/oe.innerWidth:(s.top+a)/oe.innerHeight},t.killAll=function(r){if(J.slice(0).forEach(function(o){return o.vars.id!=="ScrollSmoother"&&o.kill()}),r!==!0){var i=Eo.killAll||[];Eo={},i.forEach(function(o){return o()})}},t}();re.version="3.12.5";re.saveStyles=function(t){return t?ma(t).forEach(function(e){if(e&&e.style){var n=dn.indexOf(e);n>=0&&dn.splice(n,5),dn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),D.core.getCache(e),kp())}}):dn};re.revert=function(t,e){return Jh(!t,e)};re.create=function(t,e){return new re(t,e)};re.refresh=function(t){return t?xl():(Bo||re.register())&&no(!0)};re.update=function(t){return++te.cache&&Fr(t===!0?2:0)};re.clearScrollMemory=e_;re.maxScroll=function(t,e){return vr(t,e?Ut:st)};re.getScrollFunc=function(t,e){return Ni(Qt(t),e?Ut:st)};re.getById=function(t){return Ep[t]};re.getAll=function(){return J.filter(function(t){return t.vars.id!=="ScrollSmoother"})};re.isScrolling=function(){return!!An};re.snapDirectional=Zh;re.addEventListener=function(t,e){var n=Eo[t]||(Eo[t]=[]);~n.indexOf(e)||n.push(e)};re.removeEventListener=function(t,e){var n=Eo[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)};re.batch=function(t,e){var n=[],r={},i=e.interval||.016,o=e.batchMax||1e9,s=function(u,c){var d=[],p=[],h=D.delayedCall(i,function(){c(d,p),d=[],p=[]}).pause();return function(y){d.length||h.restart(!0),d.push(y.trigger),p.push(y),o<=d.length&&h.progress(1)}},l;for(l in e)r[l]=l.substr(0,2)==="on"&&Wt(e[l])&&l!=="onRefreshInit"?s(l,e[l]):e[l];return Wt(o)&&(o=o(),ft(re,"refresh",function(){return o=e.batchMax()})),ma(t).forEach(function(a){var u={};for(l in r)u[l]=r[l];u.trigger=a,n.push(re.create(u))}),n};var fg=function(e,n,r,i){return n>i?e(i):n<0&&e(0),r>i?(i-n)/(r-n):r<0?n/(n-r):1},qf=function t(e,n){n===!0?e.style.removeProperty("touch-action"):e.style.touchAction=n===!0?"auto":n?"pan-"+n+(Xe.isTouch?" pinch-zoom":""):"none",e===nr&&t(ke,n)},au={auto:1,scroll:1},fT=function(e){var n=e.event,r=e.target,i=e.axis,o=(n.changedTouches?n.changedTouches[0]:n).target,s=o._gsap||D.core.getCache(o),l=Ot(),a;if(!s._isScrollT||l-s._isScrollT>2e3){for(;o&&o!==ke&&(o.scrollHeight<=o.clientHeight&&o.scrollWidth<=o.clientWidth||!(au[(a=Mn(o)).overflowY]||au[a.overflowX]));)o=o.parentNode;s._isScroll=o&&o!==r&&!Co(o)&&(au[(a=Mn(o)).overflowY]||au[a.overflowX]),s._isScrollT=l}(s._isScroll||i==="x")&&(n.stopPropagation(),n._gsapAllow=!0)},r_=function(e,n,r,i){return Xe.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:n,onWheel:i=i&&fT,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return r&&ft(be,Xe.eventTypes[0],pg,!1,!0)},onDisable:function(){return ct(be,Xe.eventTypes[0],pg,!0)}})},dT=/(input|label|select|textarea)/i,dg,pg=function(e){var n=dT.test(e.target.tagName);(n||dg)&&(e._gsapAllow=!0,dg=n)},pT=function(e){Ki(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var n=e,r=n.normalizeScrollX,i=n.momentum,o=n.allowNestedScroll,s=n.onRelease,l,a,u=Qt(e.target)||nr,c=D.core.globals().ScrollSmoother,d=c&&c.get(),p=ri&&(e.content&&Qt(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=Ni(u,st),y=Ni(u,Ut),g=1,w=(Xe.isTouch&&oe.visualViewport?oe.visualViewport.scale*oe.visualViewport.width:oe.outerWidth)/oe.innerWidth,x=0,m=Wt(i)?function(){return i(l)}:function(){return i||2.8},v,_,C=r_(u,e.type,!0,o),E=function(){return _=!1},S=pr,j=pr,z=function(){a=vr(u,st),j=Ml(ri?1:0,a),r&&(S=Ml(0,vr(u,Ut))),v=mo},P=function(){p._gsap.y=ml(parseFloat(p._gsap.y)+h.offset)+"px",p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(p._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},$=function(){if(_){requestAnimationFrame(E);var b=ml(l.deltaY/2),I=j(h.v-b);if(p&&I!==h.v+h.offset){h.offset=I-h.v;var k=ml((parseFloat(p&&p._gsap.y)||0)-h.offset);p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+k+", 0, 1)",p._gsap.y=k+"px",h.cacheID=te.cache,Fr()}return!0}h.offset&&P(),_=!0},M,V,X,Z,G=function(){z(),M.isActive()&&M.vars.scrollY>a&&(h()>a?M.progress(1)&&h(a):M.resetTo("scrollY",a))};return p&&D.set(p,{y:"+=0"}),e.ignoreCheck=function(A){return ri&&A.type==="touchmove"&&$()||g>1.05&&A.type!=="touchstart"||l.isGesturing||A.touches&&A.touches.length>1},e.onPress=function(){_=!1;var A=g;g=ml((oe.visualViewport&&oe.visualViewport.scale||1)/w),M.pause(),A!==g&&qf(u,g>1.01?!0:r?!1:"x"),V=y(),X=h(),z(),v=mo},e.onRelease=e.onGestureStart=function(A,b){if(h.offset&&P(),!b)Z.restart(!0);else{te.cache++;var I=m(),k,B;r&&(k=y(),B=k+I*.05*-A.velocityX/.227,I*=fg(y,k,B,vr(u,Ut)),M.vars.scrollX=S(B)),k=h(),B=k+I*.05*-A.velocityY/.227,I*=fg(h,k,B,vr(u,st)),M.vars.scrollY=j(B),M.invalidate().duration(I).play(.01),(ri&&M.vars.scrollY>=a||k>=a-1)&&D.to({},{onUpdate:G,duration:I})}s&&s(A)},e.onWheel=function(){M._ts&&M.pause(),Ot()-x>1e3&&(v=0,x=Ot())},e.onChange=function(A,b,I,k,B){if(mo!==v&&z(),b&&r&&y(S(k[2]===b?V+(A.startX-A.x):y()+b-k[1])),I){h.offset&&P();var H=B[2]===I,nt=H?X+A.startY-A.y:h()+I-B[1],le=j(nt);H&&nt!==le&&(X+=le-nt),h(le)}(I||b)&&Fr()},e.onEnable=function(){qf(u,r?!1:"x"),re.addEventListener("refresh",G),ft(oe,"resize",G),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=y.smooth=!1),C.enable()},e.onDisable=function(){qf(u,!0),ct(oe,"resize",G),re.removeEventListener("refresh",G),C.kill()},e.lockAxis=e.lockAxis!==!1,l=new Xe(e),l.iOS=ri,ri&&!h()&&h(1),ri&&D.ticker.add(pr),Z=l._dc,M=D.to(l,{ease:"power4",paused:!0,inherit:!1,scrollX:r?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:n_(h,h(),function(){return M.pause()})},onUpdate:Fr,onComplete:Z.vars.onComplete}),l};re.sort=function(t){return J.sort(t||function(e,n){return(e.vars.refreshPriority||0)*-1e6+e.start-(n.start+(n.vars.refreshPriority||0)*-1e6)})};re.observe=function(t){return new Xe(t)};re.normalizeScroll=function(t){if(typeof t>"u")return Ft;if(t===!0&&Ft)return Ft.enable();if(t===!1){Ft&&Ft.kill(),Ft=t;return}var e=t instanceof Xe?t:pT(t);return Ft&&Ft.target===e.target&&Ft.kill(),Co(e.target)&&(Ft=e),e};re.core={_getVelocityProp:_p,_inputObserver:r_,_scrollers:te,_proxies:Sr,bridge:{ss:function(){An||To("scrollStart"),An=Ot()},ref:function(){return Pt}}};Yy()&&D.registerPlugin(re);ko.registerPlugin(Ta,re);const hT=T.section`
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
`,mT=T.img`
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
`,gT=T.img`
    position: absolute;
    top: 198px;
    right: 35px;
    @media (min-width: 1000px) and (max-width: 1300px) {
        display: none;
    }
    @media (max-width: 999px) {
        display: none;
    }
`,xT=T.img`
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
`,vT=T.div`
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
`,yT=T.img`
    z-index: 10;
    opacity: 0;
    @media (max-width: 999px) {
        display: none;
    }
`,_T=T.div`
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
`,wT=T.img`
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
`,ST=T.div`
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
`,kT=T.div`
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
`,CT=T.img`
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
`,ET=T.p`
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
`,TT=T.img`
    position: absolute;
    top: 50px;
    left: 150px;
    z-index: -1;
    @media (max-width: 999px) {
        display: none;
    }
`,jT=T.img`
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    @media (min-width: 1000px) {
        display: none;
    }
`,PT=T.div`
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
`,OT=T.div`
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
`,zT=T.img`
    position: absolute;
    top: 580px;
    right: 6%;
    width: 304px;
    @media (min-width: 1000px) and (max-width: 1300px) {
        top: 560px;
        width: 250px;
    }
    @media (max-width: 999px) {
        width: 195px;
        top: 580px;
        right: 12%;
    }
`,bT=T.img`
    position: absolute;
    top: 740px;
    left: 114px;
    width: 254px;
    z-index: 20;
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
`,RT=()=>{const{fadeInFromBottom:t,fadeInFromLeft:e,btnFadeInFromBottom:n,fadeInFromRight:r}=Ca(),i=R.useRef(null);return Ta(()=>{const o={img1:"0%",img2:"-42%",img3:"-50%",img4:"-50%"};ko.utils.toArray(".event-content").forEach(s=>{const l=o[s.id];ko.fromTo(s,{y:100,transform:`translateX(${l})`,opacity:0},{y:0,transform:`translateX(${l})`,opacity:1,duration:1,ease:"power3.out",scrollTrigger:{trigger:s,start:"top 80%",toggleActions:"play none none none"}})})},{scope:i,dependencies:[]}),f.jsxs(hT,{ref:i,children:[f.jsx(mT,{ref:e,id:"sec3",src:"./home/first-insure-event-tower.svg"}),f.jsx(gT,{ref:t,src:"./home/first-insure-event.svg",className:"event-content",id:"img1"}),f.jsx(xT,{ref:t,src:"./home/first-insure-event-mobile.svg",className:"event-content",id:"img2"}),f.jsx(vT,{ref:n,children:f.jsx("a",{target:"_blank",href:"https://e-commerce.transglobe.com.tw/product/eta?utm_source=ec_eventpage&utm_medium=button&utm_campaign=ec_eventpage_transglobe-journey_first-time&utm_term=2024q4&utm_content=eta",children:f.jsx(Vt,{color:"blue",height:"60px",children:"投保立即抽"})})}),f.jsx(zT,{ref:r,src:"./home/english-title4.png"}),f.jsx(bT,{ref:e,src:"./home/english-title5.png"}),f.jsxs(PT,{ref:e,children:[f.jsx("img",{src:"./home/first-insure-event-title.svg"}),f.jsx("img",{src:"./home/common-title-lottery.svg"})]}),f.jsxs(OT,{ref:e,children:[f.jsx("strong",{children:"2024/10/1~2025/1/31期間，"}),f.jsx("br",{}),f.jsxs("strong",{children:[f.jsx("span",{children:"首次"}),"成功",f.jsx("span",{className:"text-c-red",children:"網路投保"}),f.jsx("span",{children:"「國內外旅平險」"})]}),f.jsx("br",{}),"（限從未網路投保全球人壽任一險種者）"]}),f.jsxs(_T,{children:[f.jsx(yT,{ref:t,src:"./home/line-points-people.png",className:"event-content",id:"img3"}),f.jsx(wT,{ref:t,src:"./home/line-points-people-mobile.png",className:"event-content",id:"img4"})]}),f.jsx(CT,{src:"./home/line-points-event-title.svg"}),f.jsx(ET,{children:"快推薦好友，就有機會獲得 LINE POINTS 喔！"}),f.jsx(ST,{ref:t,children:f.jsx(In,{to:"/mgm",children:f.jsx(Vt,{color:"red",height:"60px",children:"立即前往"})})}),f.jsx(kT,{children:f.jsx(In,{to:"/policy",children:f.jsx(Vt,{color:"white",height:"60px",hoverBgColor:"#FF837E",children:"活動辦法"})})}),f.jsx(TT,{src:"./home/first-insure-line-points-flower.svg"}),f.jsx(jT,{src:"./home/first-insure-line-points-flower-mobile.svg"})]})},NT=T.div`
  padding-top: 90px;
  background-color: #FFFAF1;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  z-index: 0;
`,MT=T.div`
  width: 100%;
  max-width: 1500px;
  position: relative;
  z-index: 0;
  @media (max-width: 1300px) and (min-width: 1000px) {
    max-width: 800px;
  }
`,IT=T.div`
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
`,LT=T.img`
	width: 50px;
	height: 50px;
	position: absolute;
	transform: translate(-50%, 0%);
	will-change: transform;
	@media screen and (max-width: 1300px) {
		display: none;
	}
`,FT=T.div`
	width: 10px;
	height: 10px;
	border-radius: 50%;
	position: absolute;
	bottom: 0;
	left: 0;
	transform: translate(-50%, 0%);
`,DT=T.img`
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
`,$T=T.img`
    display: none;
    @media (max-width: 1560px) and (min-width: 1301px) {
        display: block;
        position: absolute;
        top: 1500px;
        z-index: 0;
        width: 100%;
    }
`,AT=T.img`
    position: absolute;
    top: 1480px;
    left: 0;
    width: 100%;
    height: auto;
    display: block;
    z-index: -1;
    @media (min-width: 800px) {
        display: none;
    }
`,BT=T.img`
    position: absolute;
    top: 1250px;
    left: 0;
    width: 100%;
    z-index: -1;
    display: none;
	@media (min-width: 800px) and (max-width: 1300px) {
		display: block;
	}
`,UT=T.img`
    position: absolute;
    top: 1480px;
    left: 0;
    width: 100%;
    height: auto;
    display: block;
    z-index: 0;

    @media (max-width: 1301px) {
        display: none;
    }
		
`,WT=T.img`
    position: absolute;
    width: 100%;
    bottom: 0px;
	z-index: -1;
    @media (min-width:570px) {
        display: none;
    }

`,VT=T.img`
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
`,HT=T.img`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: none;
    z-index: -1;
    @media (max-width: 1600px) and (min-width: 1301px) {
        display: block;
    }
`,YT=T.img`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: block;
    z-index: -1;
    @media (max-width: 1600px) {
        display: none;
    }
`;function XT(){return R.useEffect(()=>{const t=document.getElementById("vertical-line"),{y:e}=t.getBoundingClientRect();let n=t.getBoundingClientRect();const r=document.getElementById("fly"),s=document.getElementById("pointer").getBoundingClientRect().y;r.style.position="fixed",r.style.top=`${n.y}px`,r.style.left=`${n.x}px`;const l=()=>{const u=window.scrollY+e;if(u>s){r.style.position="absolute",r.style.top="calc(100% - 50px)",r.style.left="0px";return}u<s+50&&(r.style.position="fixed",r.style.top=`${e-50}px`,r.style.left=`${n.x}px`)};let a;return window.addEventListener("resize",()=>{clearTimeout(a),a=setTimeout(()=>{n=t.getBoundingClientRect(),r.style.position!=="absolute"&&(r.style.left=`${n.x}px`)},250)}),window.addEventListener("scroll",l),l(),()=>{window.removeEventListener("scroll",l)}},[]),f.jsxs(NT,{children:[f.jsx(DT,{src:"./home/home-polygon.svg",alt:"yellow polygon"}),f.jsx($T,{src:"./home/reach-insure-amount-event-trapezoid.svg",alt:"yellow trapezoid"}),f.jsx(AT,{src:"./home/reach-insure-amount-event-trapezoid-mobile.svg",alt:"mobile yellow trapezoid"}),f.jsx(BT,{src:"./home/reach-insure-amount-event-trapezoid.svg",alt:"ipad yellow trapezoid"}),f.jsx(UT,{src:"./home/reach-insure-amount-event-trapezoid-large.svg",alt:"large yellow trapezoid"}),f.jsxs(MT,{children:[f.jsx(Q2,{}),f.jsx(yC,{}),f.jsx(MC,{}),f.jsx(RT,{}),f.jsxs(IT,{id:"vertical-line",children:[f.jsx(LT,{id:"fly",src:"./home/home-fly.svg"}),f.jsx(FT,{id:"pointer"})]})]}),f.jsx(HT,{src:"./home/home-blue-bg-3.svg",alt:"blue background"}),f.jsx(VT,{src:"./home/line-points-blue-background-ipad.svg",alt:"ipad blue background"}),f.jsx(YT,{src:"./home/home-blue-lg-bg-3.svg",alt:"large blue background"}),f.jsx(WT,{src:"./home/line-points-blue-background-mobile.svg",alt:"mobile blue background"})]})}/*! *****************************************************************************
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
***************************************************************************** */var Pp=function(){return Pp=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Pp.apply(this,arguments)};function GT(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}var xs="",Al=null,Fu=null,i_=null;function e0(){xs="",Al!==null&&Al.disconnect(),Fu!==null&&(window.clearTimeout(Fu),Fu=null)}function hg(t){var e=["BUTTON","INPUT","SELECT","TEXTAREA"],n=["A","AREA"];return e.includes(t.tagName)&&!t.hasAttribute("disabled")||n.includes(t.tagName)&&t.hasAttribute("href")}function mg(){var t=null;if(xs==="#")t=document.body;else{var e=xs.replace("#","");t=document.getElementById(e),t===null&&xs==="#top"&&(t=document.body)}if(t!==null){i_(t);var n=t.getAttribute("tabindex");return n===null&&!hg(t)&&t.setAttribute("tabindex",-1),t.focus({preventScroll:!0}),n===null&&!hg(t)&&(t.blur(),t.removeAttribute("tabindex")),e0(),!0}return!1}function QT(t){window.setTimeout(function(){mg()===!1&&(Al===null&&(Al=new MutationObserver(mg)),Al.observe(document,{attributes:!0,childList:!0,subtree:!0}),Fu=window.setTimeout(function(){e0()},t||1e4))},0)}function o_(t){return Pi.forwardRef(function(e,n){var r="";typeof e.to=="string"&&e.to.includes("#")?r="#"+e.to.split("#").slice(1).join("#"):typeof e.to=="object"&&typeof e.to.hash=="string"&&(r=e.to.hash);var i={};t===J1&&(i.isActive=function(l,a){return l&&l.isExact&&a.hash===r});function o(l){e0(),xs=e.elementId?"#"+e.elementId:r,e.onClick&&e.onClick(l),xs!==""&&!l.defaultPrevented&&l.button===0&&(!e.target||e.target==="_self")&&!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)&&(i_=e.scroll||function(a){return e.smooth?a.scrollIntoView({behavior:"smooth"}):a.scrollIntoView()},QT(e.timeout))}var s=GT(e,["scroll","smooth","timeout","elementId"]);return Pi.createElement(t,Pp({},i,s,{onClick:o,ref:n}),e.children)})}var KT=o_(In);o_(J1);const qT=T.div`
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
`,ZT=T.div`
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
`,JT=T.div`
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
`,e3=T.div`
  position: absolute;
  top: 427px;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  aspect-ratio: 1640 / 1260;
  background: url('./mgm/mgm-trapezoid.png') no-repeat center center;
  background-size: cover;
  z-index: 1;

  @media (max-width: 1300px) and (min-width: 1000px) {
    // 如果需要，在這裡添加 1000px - 1300px 範圍的樣式
  }

  @media (max-width: 999px) {
    top: 530px;
    aspect-ratio: 410 / 700;
  }
`,t3=T.img`
  position: absolute;
  top: 700px;
  left: 60px;
  width: 1300px;
  z-index: 1;

  @media (max-width: 1300px) and (min-width: 1000px) {
    // 如果需要，在這裡添加 1000px - 1300px 範圍的樣式
  }

  @media (max-width: 999px) {
    display: none;
  }
`,n3=T.img`
  position: absolute;
  top: 585px;
  left: 25px;
  width: 373px;
    z-index: 1;

  @media (max-width: 1300px) and (min-width: 1000px) {
    // 如果需要，在這裡添加 1000px - 1300px 範圍的樣式
  }

  @media (min-width: 999px) {
    display: none;
  }
`,r3=T.img`
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
`,i3=T.div`
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
`,o3=T.div`
  position: absolute;
  bottom: -20px;
  transform: translateX(-50%);
  left: 50%;
  width: 100%;
  height: 278px;
  background: url('./mgm/mgm-blue-building.svg') no-repeat center center;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

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
`,s3=T.div`
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
`,l3=T.div`
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
`,a3=T.img`
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
`,u3=T.img`
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
`,c3=T.img`
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
`,f3=T.video`
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
`,d3=T.img`
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
`,p3=T.img`
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
`,s_=T.div`
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
`,h3=T.img`
  position: absolute;
  top: 475px;
  left: 112px;
  z-index: 2;
  width: 754px;
  height: auto;
  object-fit: contain; 

  @media (max-width: 1300px) and (min-width: 1000px) {
    top: 430px;
    width: 80%;
    left: 0;
  }

  @media (max-width: 999px) {
    display: none;
  }
`,m3=T.img`
  display: none;
  position: absolute;
  top: 475px;
  left: 10%;
  z-index: 2;
  top: 668px;
  width: 270px;
  object-fit: contain; 

  @media (max-width: 999px) {
    display: block;
  }
`,g3=T.br`
  display: ${t=>t.reverse?"block":"none"};

  @media (max-width: 1300px) and (min-width: 1000px) {
    // 如果需要，在這裡添加 1000px - 1300px 範圍的樣式
  }

  @media (max-width: 999px) {
    display: ${t=>t.reverse?"none":"block"};
  }
`,x3=T(s_)`
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
`,v3=T.img`
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
`,y3=T.div`
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
`,_3=T.div`
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
`,w3=T.div`
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
`,S3=T.div`
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
`,k3=T.div`
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
`,C3=T.div`
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
`,E3=T.div`
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
`,T3=T.div`
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
`,j3=T.div`
  @media (max-width: 1300px) and (min-width: 1000px) {
    // 如果需要，在這裡添加 1000px - 1300px 範圍的樣式
  }

  @media (max-width: 999px) {
      display: none;
  }
`,P3=T.img`
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
`,O3=T.img`
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
`,z3=()=>{const{fadeInFromBottom:t,fadeInEnlarge:e,fadeInFromLeft:n,fadeInFromRight:r}=Ca(),[i,o]=R.useState(!0);return Ta(()=>{ko.utils.toArray(".mgm-content").forEach(s=>{ko.from(s,{y:100,opacity:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:s,start:"top 80%",toggleActions:"play none none none"}})})}),R.useEffect(()=>{const s=setInterval(()=>{o(!i)},1e3);return()=>clearInterval(s)},[i]),f.jsxs(qT,{children:[f.jsx(e3,{}),f.jsxs(JT,{children:[f.jsxs(l3,{children:[f.jsx(a3,{ref:r,src:"./mgm/mb-kv-ppl.png",alt:"mobile kv people"}),f.jsx(u3,{ref:e,src:"./mgm/mb-kv-flower.png",alt:"mobile kv flower"}),f.jsx(c3,{ref:n,src:"./mgm/mb-kv-house.png",alt:"mobile kv house"})]}),f.jsx(f3,{src:"./mgm/mgm-banner-video-desktop.mp4",autoPlay:!0,muted:!0,playsInline:!0}),f.jsx(d3,{src:"./mgm/mgm-title.png",alt:"mgm title"}),f.jsx(p3,{src:"./mgm/mgm-title-p.png",alt:"mgm title point"}),f.jsxs(s_,{isBlue:i,children:[f.jsx("p",{children:"推薦好友全球旅平險"}),f.jsxs("p",{children:["快樂",f.jsx("span",{children:"+1+1+1+1+1+1+1+1+1"})]})]}),f.jsx(h3,{src:"./mgm/english-title.png",alt:"English Title"}),f.jsx(m3,{src:"./mgm/english-title-mobile.png",alt:"English Title"}),f.jsx(n3,{src:"./mgm/mgm-points-and-flower-mobile.svg",alt:"mobile content flower"}),f.jsxs(x3,{children:[f.jsx("p",{children:"2024/10/1~2025/1/31"}),f.jsx("p",{children:"成功邀請親友投保旅平險，達指定筆數"})]}),f.jsx(v3,{src:"./mgm/mgm-line-points-text.svg",alt:"line points text"}),f.jsxs(y3,{children:[f.jsx(_3,{className:"mgm-content"}),f.jsx(w3,{className:"mgm-content"}),f.jsx(S3,{className:"mgm-content"})]}),f.jsxs(j3,{children:[f.jsx(t3,{src:"./mgm/mgm-info-flower.svg",alt:"content flower"}),f.jsx(r3,{src:"./mgm/mgm-content-p-point.svg",alt:"content point"})]}),f.jsx(i3,{}),f.jsx(C3,{children:f.jsx(k3,{className:"mgm-content",alt:"people"})}),f.jsx(T3,{children:f.jsx(E3,{ref:t,children:f.jsx("a",{target:"_blank",href:"https://e-commerce.transglobe.com.tw/member/missionActivities/etamgm?utm_source=ec_eventpage&utm_medium=button&utm_campaign=ec_eventpage_transglobe-journey_etamgm&utm_term=2024q4&utm_content=missionActivities",children:f.jsx(Vt,{color:"red",alt:"立即推薦親友",children:"立即推薦親友"})})})}),f.jsxs(o3,{children:[f.jsxs(s3,{children:[f.jsx("a",{target:"_blank",href:"https://e-commerce.transglobe.com.tw/member/missionActivities?utm_source=ec_eventpage&utm_medium=button&utm_campaign=ec_eventpage_transglobe-journey_mgmsearch&utm_term=2024q4&utm_content=missionActivities",children:f.jsxs(Vt,{color:"yellow",height:"82px",alt:"推薦好友 成功筆數查詢",children:["推薦好友 ",f.jsx(g3,{reverse:!0}),"成功筆數查詢"]})}),f.jsx(KT,{to:"/#sec2",scroll:s=>{const a=s.getBoundingClientRect().top+window.scrollY+-80;window.scrollTo({top:a,behavior:"smooth"})},children:f.jsx(Vt,{color:"yellow",height:"82px",alt:"參加更多抽獎",children:"參加更多抽獎"})}),f.jsx(In,{to:"/policy",children:f.jsx(Vt,{color:"white",hoverBgColor:"#FF837E",height:"82px",alt:"活動辦法",children:"活動辦法"})})]}),f.jsx(P3,{src:"./mgm/mgm-building-mb.svg"}),f.jsx(O3,{src:"./mgm/mgm-building-ipad.svg"})]})]}),f.jsx(ZT,{})]})},b3=T.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,R3=()=>f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",title:"減號圖標",children:f.jsx("path",{d:"M6 12L18 12",stroke:"#000000",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),N3=()=>f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",title:"加號圖標",children:f.jsx("path",{d:"M12 6V18M6 12H18",stroke:"#000000",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),M3=T.div`
  width: ${t=>t.$width||"100%"};
  height: ${t=>t.$height||"65px"};
  background-color: #FFFAF1;
  border-radius: 8px;
  position: absolute;
  top: 5px;
  left: 5px;
  transition: all 0.3s ease;
`,I3=T.div`
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
`,L3=T.button`
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
`,gg=T.div`
  position: relative;
  right: 50px;
`;function Op({title:t,isOpen:e,onClick:n,children:r}){return f.jsxs(b3,{children:[f.jsxs(L3,{onClick:n,children:[f.jsx(M3,{}),f.jsx(I3,{children:f.jsx("div",{style:{zIndex:5},children:t})}),e?f.jsx(gg,{children:f.jsx(R3,{})}):f.jsx(gg,{children:f.jsx(N3,{})})]}),e&&r]})}Op.propTypes={title:zn.string.isRequired,isOpen:zn.bool.isRequired,onClick:zn.func.isRequired,children:zn.node.isRequired};const F3=T.ol`
  padding-left: 20px;
`,qn=T.li`
  margin-bottom: 10px;
  list-style: decimal;
  padding-left: 18px;
`,Pn=T.p`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: #000000;
`,xg=T.a`
  color: #000000;
  text-decoration: underline;
	cursor: pointer;
`;function zp({isPart2:t=!1}){return f.jsx("div",{children:f.jsxs(F3,{children:[f.jsx(qn,{children:t?f.jsx(Pn,{children:"凡邀請人於活動期間（2024/10/1-2025/1/31）透過投保邀請連結，邀請親友成功投保國內外旅行平安險（其投保流程之「會員推薦碼」欄位須顯示邀請人推薦碼，若系統無自動帶入，可由被邀請人自行輸入，恕不接受補登），且該保單無撤銷或終止契約之情事者，始具備抽獎及中獎資格。"}):f.jsx(Pn,{children:"本活動限定全球人壽網路投保會員參加，需於活動期間（2024/10/1-2025/1/31）成功網路投保「國內外旅行平安險」，並符合各獎項參加門檻，且該保單無撤銷或終止契約之情事者，始具備抽獎及中獎資格。"})}),f.jsx(qn,{children:f.jsx(Pn,{children:"本活動將於2025/3/31前以電腦隨機抽出獎項，2025/4/30前於本網站公告中獎名單。本公司將主動以電子郵件/簡訊通知活動中獎人，請活動中獎人於指定回覆資料截止日期前登錄系統，並提供真實姓名、身分證字號、地址、電話等個人資料，以完成相關領獎作業（上傳代扣稅收據及中獎人身分證正反面影本），逾期回覆或未回覆者視為放棄中獎資格，本公司不遞補名額。"})}),f.jsx(qn,{children:f.jsxs(Pn,{children:["本活動所提供獎品之電子禮券使用方式及限制等，悉依各項獎品或服務之製造或提供廠商的說明為準，詳情請前往",f.jsx(xg,{href:"https://tx.edenred.tw/",target:"_blank",children:"Edenred好禮即享券網站"}),"查詢。因廠商或品牌之電子禮券序號大多具有兌換時效性，建議您在獲得中獎序號同時立即進行兌換，若因逾期未兌換而失效者，不得要求本公司重新提供或更換獎項；若序號遺失或遭盜用、竄改等情形，亦恕不補發。"]})}),f.jsx(qn,{children:f.jsx(Pn,{children:"本活動所提供之獎項內容，不得折換現金、兌換其他商品或優惠，亦不得將本活動中獎資格轉讓或轉售予他人；本活動獎項如遇缺貨或不可抗力之因素無法提供時，本公司有權以其他等值商品替代。獎項實際金額以本公司購入之當時金額為準，獎項所衍生之費用皆由中獎者自行負擔。"})}),f.jsx(qn,{children:f.jsx(Pn,{children:"參加本活動即視為同意本公司得因本活動之需要，依個人資料保護法相關規定，於本活動期間內，以電子檔或紙本形式於我國境內蒐集、處理，及向活動廠商、稅捐機關等對象利用其個人資料（包含姓名、身分證字號/居留證、電話、電子郵件等）。參加本活動者可自由選擇是否提供完整個人資訊，惟若不願提供或提供資訊不完整、不正確者，將無法參加本活動或喪失中獎資格。"})}),f.jsx(qn,{children:f.jsx(Pn,{children:"本活動如有任何因電腦、網路、電話、技術或其他不可歸責於本公司之事由，致本系統誤送活動訊息或中獎通知，或使參加本活動者所寄出、填寫或登錄之資料有遺失、錯誤、無法辨識或毀損等情形，本公司不負任何法律責任。"})}),f.jsx(qn,{children:f.jsx(Pn,{children:"本公司有權檢視本活動是否有人為操作之行為，對於以偽造、詐欺或其他不正當之方式意圖兌領之參加者，本公司有權撤銷其中獎資格或拒絕其參與本活動，並對於任何破壞本活動行為保留相關權利。活動中獎人若取消保單將喪失中獎資格。"})}),f.jsx(qn,{children:f.jsx(Pn,{children:"依稅法規定，中獎者若為中華民國境內居住之個人，且所中獎項價值超過新臺幣（以下同）1,000元時，本公司將於翌年開立所得稅扣繳憑單予中獎者，如所中獎項價值為20,000元（含）以上者，中獎者須先繳交10%機會中獎稅金，始可領獎。中獎者若為非中華民國境內居住之個人（即在中華民國境內居住未達183天之本國人及外國人），不論中獎獎項價值，均須先就中獎所得扣繳20％機會中獎稅金，始可領獎，且本公司須開立所得稅扣繳憑單。若未能依法繳納應繳稅額，即視為喪失中獎資格。參加者因參加本活動而須支付之任何稅捐皆為參加者之義務，概與本公司無關。前述稅捐法規如有更新或變動者，依修正後之規定辦理。"})}),f.jsx(qn,{children:f.jsxs(Pn,{children:["本活動連結之保險完整商品內容與給付限制，請參閱",f.jsx(xg,{href:"https://e-commerce.transglobe.com.tw/product/eta",target:"_blank",children:"e路平安旅行平安保險"}),"商品頁之保單條款。"]})}),f.jsx(qn,{children:f.jsx(Pn,{children:"本公司非獎品製造者或提供者，與各項獎品或服務之製造或提供廠商無任何代理或合夥關係，對於各項獎品不負任何擔保責任，且本活動獎品之保固期限均依廠商出廠時實際提供者為準。得獎者如因本活動各項獎品、服務或保固發生任何爭議，概與本公司無關。"})}),f.jsx(qn,{children:f.jsx(Pn,{children:"本活動如因故無法舉行，本公司有權取消、終止、延期、修改活動內容、更換獎項內容或暫停本活動進行等之相關決定，並得以公告方式通知參加者。如有未盡事宜或疑義時，悉依本公司相關規定或解釋辦理。"})})]})})}zp.propTypes={isPart2:zn.bool};const D3=T.ol`
  display: flex;
  flex-direction: column;
  gap: 24px;
  counter-reset: item;
`,vs=T.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2496F0;
  border-radius: 100%;
  width: 15px;
  height: 15px;
  flex-shrink: 0;
`,Zf=T.li`
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
`,Jf=T.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
	@media (max-width: 480px) {
		gap: 20px;
	}
`,Dr=T.div`
  font-size: 40px;
  font-weight: bold;
  line-height: 40px;
	font-family: "Noto Serif TC";
`,xe=T.div`
  font-size: 20px;
  font-weight: 300;
  line-height: ${({lineHeight:t})=>t}px;
  color: ${({highlight:t})=>t?"#2496F0":"#000000"};
  white-space: pre-wrap;
  font-family: Noto TC;
	@media (max-width: 480px) {
		margin-left: ${({marginLeft:t})=>t};
	}
`,ro=T.div`
  display: flex;
  align-items: flex-end;
  gap: 22px;
	@media (max-width: 480px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 10px;
	}
`,jc=T.div`
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
`,uu=T.div`
  font-size: 25px;
  line-height: 25px;
  color: #000000;
  font-weight: bold;
`;function $3(){return f.jsxs(D3,{children:[f.jsx(Zf,{children:f.jsxs(Jf,{children:[f.jsxs(ro,{children:[f.jsx(Dr,{children:"跨年出國抽獎趣"}),f.jsx(xe,{lineHeight:20,children:"(僅限國外旅平險)"})]}),f.jsx(xe,{lineHeight:30,children:"於2024/12/15-2025/1/20期間成功投保「國外旅平險」，不限單筆保費金額，可額外享「8,800元旅遊大紅包」加碼抽獎機會乙次（價值8,800元好禮即享券，共抽5名，每人限獲獎乙次）。"})]})}),f.jsx(Zf,{children:f.jsxs(Jf,{children:[f.jsx(ro,{children:f.jsx(Dr,{children:"投保滿額抽獎趣"})}),f.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"22px"},children:[f.jsx(jc,{marginLeft:"-50px",children:"1"}),f.jsx(xe,{lineHeight:30,children:"單筆保費滿200元，該筆保單即享「500元好禮即享券」抽獎機會乙次（共抽100名，每人獲獎次數不限）。"})]}),f.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"22px"},children:[f.jsx(jc,{marginLeft:"-50px",children:"2"}),f.jsxs("div",{children:[f.jsx(xe,{lineHeight:30,children:"單筆保費滿500元，該筆保單即享「星宇航空東京來回機票」抽獎機會乙次（價值20,000元旅遊商品兌換券乙組，共抽5名，每人限獲獎乙次）。"}),f.jsx(xe,{highlight:!0,lineHeight:30,children:"註：上述活動採擇優最高門檻計，每筆保單享乙個獎項抽獎機會一次。"})]})]})]})}),f.jsx(Zf,{children:f.jsxs(Jf,{children:[f.jsxs(ro,{children:[f.jsx(Dr,{children:"首次投保抽獎趣"}),f.jsx(xe,{lineHeight:20,children:"(僅限國外旅平險)"})]}),f.jsxs("div",{children:[f.jsx(xe,{lineHeight:30,children:"活動期間於本公司網路投保首次成功投保者*，不限該筆旅平險保費金額，即享「200元全聯禮券」抽獎機會乙次（共抽200名，每人限獲獎乙次）。"}),f.jsx(xe,{highlight:!0,lineHeight:30,children:"註：「首次成功投保者」係指自註冊後從未網路投保本公司任一險種之網路投保會員，且於活動期間成功投保旅平險為其首筆保單。"})]})]})})]})}const A3=()=>f.jsxs("div",{children:[f.jsxs("div",{style:{paddingBottom:"40px",borderBottom:"1px solid #000000"},children:[f.jsx("div",{style:{marginBottom:"30px"},children:f.jsx(Dr,{children:"跨年出國抽獎趣"})}),f.jsxs(ro,{style:{marginBottom:"20px"},children:[f.jsx(uu,{children:"8,800元好禮即享券"}),f.jsx(xe,{lineHeight:20,children:"（無效期餘額型）"})]}),f.jsxs(xe,{children:["20大品牌讓收券者自選面額，可多次自由選配。",f.jsx("br",{}),"適用通路：全聯、王品集團、7-ELEVEN、全家、家樂福、大潤發、屈臣氏、特力集團、漢來美食通用券、遠東SOGO百貨、遠東百貨、遠東巨城購物中心、foodpanda、寶雅集團、漢神百貨/漢神巨蛋、瓦城集團、爭鮮集團、小北百貨、美廉社&三友藥妝通用、楓康超市。"]})]}),f.jsxs("div",{style:{marginTop:"40px"},children:[f.jsx("div",{style:{marginBottom:"30px"},children:f.jsx(Dr,{children:"投保滿額抽獎趣"})}),f.jsxs(ro,{style:{marginBottom:"20px"},children:[f.jsx(uu,{children:"500元好禮即享券"}),f.jsx(xe,{lineHeight:20,children:"（無效期餘額型）"})]}),f.jsxs(xe,{children:["可分次抵用。五大品牌擇一使用，一旦選定品牌，限全額度單一品牌兌換使用。",f.jsx("br",{}),"適用通路：家樂福、遠東SOGO百貨、遠東百貨、王品集團、7-ELEVEN。"]})]}),f.jsxs("div",{style:{marginTop:"40px",paddingBottom:"40px",borderBottom:"1px solid #000000"},children:[f.jsxs(ro,{children:[f.jsx(uu,{children:"星宇航空東京來回機票"}),f.jsx(xe,{lineHeight:20,children:"（以ezfly 優惠碼形式提供「價值20,000元旅遊兌換券」）"})]}),f.jsx("div",{style:{marginTop:"20px"},children:f.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"20px"},children:[f.jsx(vs,{}),f.jsx(xe,{lineHeight:30,children:"本優惠碼ezfly易飛網全品項都可使用，恕無法兌換現金或找零，請一次抵用完畢，不可重複使用。"})]})}),f.jsx("div",{style:{marginTop:"20px"},children:f.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"20px"},children:[f.jsx(vs,{}),f.jsx(xe,{lineHeight:30,children:"兌換方式：本優惠碼需以人工訂票方式預約行程並成功開票或確認完成訂房、訂票，方可使用。"})]})}),f.jsx("div",{style:{marginTop:"20px"},children:f.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"20px"},children:[f.jsx(vs,{}),f.jsx(xe,{lineHeight:30,children:"本優惠碼因訂票方式，若預定品項為國內外機票或其他旅遊行程等預定品項，則另需支付人工訂票手續費，詳細費用請洽ezfly專人。"})]})})]}),f.jsxs("div",{style:{marginTop:"40px"},children:[f.jsx("div",{style:{marginBottom:"30px"},children:f.jsx(Dr,{children:"首次投保抽獎趣"})}),f.jsxs(ro,{style:{marginBottom:"20px"},children:[f.jsx(uu,{children:"200元全聯禮券"}),f.jsx(xe,{lineHeight:20,children:"（無效期餘額型）"})]}),f.jsx(xe,{children:"限全聯實體門市使用，可分次使用至面額兌換完畢，恕無法支付線上購物（含PXGo!、分批取、小時達等)、外送平台、代收業務（含雙北專用購物袋)、服務事項、兌換現金/儲值金/禮券/禮卡及菸品等相關受法令限制商品。"})]})]});function B3(){return f.jsxs("div",{style:{width:"100%"},children:[f.jsx(Dr,{children:"邀請人"}),f.jsxs("div",{style:{marginTop:"24px",display:"flex",flexDirection:"column",gap:"20px"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"20px"},children:[f.jsx(vs,{}),f.jsx(xe,{lineHeight:30,children:"成功邀請1筆保單，享「50點LINE POINTS好禮即享券」抽獎機會乙次（共抽200名）。"})]}),f.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"20px"},children:[f.jsx(vs,{}),f.jsx(xe,{lineHeight:30,children:"成功邀請2筆保單，享「150點LINE POINTS好禮即享券」抽獎機會乙次（共抽200名）。"})]}),f.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"20px"},children:[f.jsx(vs,{}),f.jsx(xe,{lineHeight:30,children:"成功邀請3筆以上保單，享「300點LINE POINTS好禮即享券」抽獎機會乙次（共抽100名）。"})]})]})]})}function U3(){return f.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:"20px"},children:[f.jsx(Dr,{children:"被邀請人"}),f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[f.jsx(xe,{children:"不限單筆保費金額，該筆保單即享「50點LINE POINTS好禮即享券」抽獎機會乙次（共抽300名，每人限獲獎乙次）。"}),f.jsx(xe,{highlight:!0,children:"註：被邀請人投保時須填入「邀請人推薦碼」資訊（不可為本人推薦碼），雙方方符合抽獎資格。"})]})]})}const l_=T.div`
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
`;function W3(){return f.jsxs("div",{children:[f.jsx(l_,{children:"案例說明"}),f.jsx("div",{style:{marginTop:"20px"},children:f.jsx(xe,{children:"全小球邀請五位朋友參與此活動，其中有兩位朋友於活動期間共成功投保3筆旅平險（且皆有填寫全小球之推薦碼)，則全小球可享「300點LINE POINTS好禮即享券」抽獎機會乙次; 而兩位朋友分別享有「50點LINE POINTS好禮即享券」1次與2次之抽獎機會。"})})]})}function V3(){return f.jsxs(f.Fragment,{children:[f.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:"24px"},children:[f.jsxs(Dr,{children:["50點、150點、300點",f.jsx("br",{}),"LINE POINTS好禮即享券"]}),f.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"22px"},children:[f.jsx(jc,{children:"1"}),f.jsx(xe,{lineHeight:30,children:"LINE POINTS即享券僅限LINE帳號註冊國家為台灣的用戶使用。"})]}),f.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"22px"},children:[f.jsx(jc,{children:"2"}),f.jsxs(xe,{lineHeight:30,children:["LINE POINTS的有效期限為最後一次獲得點數當天起算180天內，",f.jsx("br",{}),"一旦超過有效期限，您所持有的點數將會全數失效。"]})]})]}),f.jsxs("div",{style:{marginTop:"24px"},children:[f.jsx(l_,{children:"活動獎項發放說明"}),f.jsx("div",{style:{marginTop:"20px"},children:f.jsx(xe,{children:"本活動獎項採電子票券形式，將以Edenred之LINE「好禮即享券領券通知」的官方帳號發送通知型訊息予中獎者。 若您無法接收到通知型訊息，活動小組將另發送好禮即享券簡訊通知。"})})]})]})}const H3=T.div`
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
`,vg=T.div`
  width: 100%;
  height: 100%;
  background-color: ${t=>t.bg||"#FFF5CD"};
  display: flex;
  justify-content: center;
`,yg=T.div`
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
`,Y3=T.img`
  width: 100%;
  position: absolute;
  pointer-events: none;
`,X3=T.div`
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 63px;
	font-family: "Noto Serif TC";
	@media (max-width: 480px) {
		font-size: 40px;
	}
`,_g=T.div`
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
`,Jr=T.div`
  width: 100%;
  height: 1px;
  border: 1px solid #000;
  border-style: ${t=>t.dashed?"dashed":"solid"};
`,wg=T.img`
  width: 419px;
`,Sg=T.img`
  width: 419px;
  position: absolute;
  top: 4px;
`,kg=T.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 56px;
`,ei=T.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 30px;
	@media (max-width: 480px) {
		flex-direction: column;
		gap: 20px;
	}
`,ti=T.div`
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
`,Ao=T.div`
  font-weight: bold;
  font-size: 20px;
	font-family: "Noto Sans TC";
	padding-top: 10px;
`,ze=T.div`
  width: 100%;
  height: ${t=>t.height}px;
`,G3=T.div`
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
`,Cg=T.br`
  display: ${t=>t.reverse?"block":"none"};
  @media (max-width: 1300px) {
    display: ${t=>t.reverse?"none":"block"};
  }
`;function Q3(){const[t,e]=R.useState(!1),[n,r]=R.useState(!1);return f.jsxs(H3,{children:[f.jsxs(vg,{children:[f.jsxs(yg,{children:[f.jsx(X3,{children:"活動辦法"}),f.jsxs(_g,{children:[f.jsx(Vt,{onClick:()=>{const i=document.getElementById("sec1"),o=document.querySelector(".menu").offsetHeight,s=i.getBoundingClientRect().top+window.scrollY-o-60;window.scrollTo({top:s,behavior:"smooth"})},children:"旅行全球抽獎趣"}),f.jsx(Vt,{onClick:()=>{const i=document.getElementById("sec2"),o=document.querySelector(".menu").offsetHeight,s=i.getBoundingClientRect().top+window.scrollY-o-60;window.scrollTo({top:s,behavior:"smooth"})},children:"分享全球樂透抽"})]}),f.jsx(Jr,{}),f.jsxs(kg,{id:"sec1",children:[f.jsx(wg,{src:"./home/event-banner-title.png"}),f.jsx(Sg,{src:"./home/event-banner-airplane.png"})]}),f.jsxs(ei,{children:[f.jsx(ti,{children:"活動期間"}),f.jsx(Ao,{children:"2024/10/1-2025/1/31"})]}),f.jsx(ze,{height:32}),f.jsx(Jr,{}),f.jsx(ze,{height:32}),f.jsxs(ei,{children:[f.jsx(ti,{children:"活動辦法"}),f.jsxs(Ao,{children:["凡於活動期間內成功網路投保「國內外旅行平安險」，",f.jsx(Cg,{reverse:!0}),"並達指定活動條件，即符合該項抽獎資格。"]})]}),f.jsx(ze,{height:83}),f.jsx($3,{}),f.jsx(ze,{height:40}),f.jsx(Jr,{}),f.jsx(ze,{height:53}),f.jsxs(ei,{children:[f.jsx(ti,{children:"得獎公告"}),f.jsx(Ao,{children:"得獎者將於2025/4/30前於本網站統一公告。"})]}),f.jsx(ze,{height:44}),f.jsx(Jr,{}),f.jsx(ze,{height:53}),f.jsx(ei,{children:f.jsx(ti,{children:"獎項說明"})}),f.jsx(ze,{height:25}),f.jsx(A3,{}),f.jsx(ze,{height:40}),f.jsxs(G3,{children:[f.jsx("div",{className:"title",children:"活動獎項發放說明"}),f.jsx("div",{className:"text",children:"本活動獎項採電子票券形式，將以Edenred之LINE「好禮即享券領券通知」的官方帳號發送通知型訊息予中獎者。若您無法接收到通知型訊息，活動小組將另發送好禮即享券簡訊通知。"})]}),f.jsx(ze,{height:58}),f.jsx(Op,{title:"注意事項",isOpen:t,onClick:()=>e(!t),children:f.jsx(zp,{})})]}),f.jsx(Y3,{src:"./policy/flower.svg",alt:""})]}),f.jsx(vg,{bg:"#FED430",children:f.jsxs(yg,{id:"sec2",children:[f.jsxs(kg,{id:"sec1",children:[f.jsx(wg,{src:"./mgm/mgm-title.png"}),f.jsx(Sg,{src:"./mgm/mgm-title-p.png"})]}),f.jsxs(ei,{children:[f.jsx(ti,{children:"活動期間"}),f.jsx(Ao,{children:"2024/10/1-2025/1/31"})]}),f.jsx(ze,{height:32}),f.jsx(Jr,{}),f.jsx(ze,{height:32}),f.jsxs(ei,{children:[f.jsx(ti,{children:"活動辦法"}),f.jsxs(Ao,{children:["活動期間邀請親友成功投保國內外旅平險達指定筆數，",f.jsx(Cg,{reverse:!0}),"即符合LINE POINTS抽獎資格。"]})]}),f.jsx(ze,{height:42}),f.jsx(B3,{}),f.jsx(ze,{height:42}),f.jsx(U3,{}),f.jsx(ze,{height:42}),f.jsx(W3,{}),f.jsx(ze,{height:45}),f.jsx(Jr,{}),f.jsx(ze,{height:54}),f.jsxs(ei,{children:[f.jsx(ti,{children:"得獎公告"}),f.jsx(Ao,{children:"得獎者將於2025/4/30前於本網站統一公告。"})]}),f.jsx(ze,{height:44}),f.jsx(Jr,{}),f.jsx(ze,{height:53}),f.jsx(ei,{children:f.jsx(ti,{children:"獎項說明"})}),f.jsx(ze,{height:42}),f.jsx(V3,{}),f.jsx(ze,{height:42}),f.jsx(Op,{title:"注意事項",isOpen:n,onClick:()=>{r(!n)},children:f.jsx(zp,{isPart2:!0})}),f.jsx(ze,{height:50}),f.jsx(Jr,{}),f.jsx(ze,{height:35}),f.jsxs(_g,{children:[f.jsx(In,{to:"/",children:f.jsx(Vt,{color:"blue",children:"旅行全球抽獎趣"})}),f.jsx(In,{to:"/mgm",children:f.jsx(Vt,{color:"blue",children:"分享全球樂透抽"})})]})]})})]})}const Eg=""+new URL("../logo.png",import.meta.url).href;function K3(){const[t,e]=R.useState(!1),n=Q1(),r=Us(),[i,o]=R.useState(r.hash||r.pathname);R.useEffect(()=>{window.scrollTo(0,0),o(r.hash||r.pathname)},[r]);const s=()=>{e(!t)},l=R.useCallback((u,c)=>{u.preventDefault(),e(!1);const d=window.location.pathname==="/"||window.location.pathname==="/index.html",p=()=>{const h=document.querySelector(c);if(h){const y=document.querySelector(".menu").offsetHeight,g=h.getBoundingClientRect().top+window.scrollY-y-60;window.scrollTo({top:g,behavior:"smooth"}),o(c)}else console.log("can not find target")};d?(window.history.pushState(null,"",c),p()):(n(`/${c}`),setTimeout(()=>{window.history.pushState(null,"",c),p()},200))},[n]),a=u=>i===u?"menu-text bg-c-orange":"menu-text";return f.jsxs(f.Fragment,{children:[f.jsx("header",{className:"menu justify-center bg-bg-yellow",children:f.jsxs("div",{className:"flex justify-between w-full px-6 max-w-[1500px]",children:[f.jsx("div",{className:"flex-shrink-0 ml-[3vw]",children:f.jsx("a",{href:"https://www.transglobe.com.tw/",target:"_blank",rel:"noopener noreferrer",children:f.jsx("img",{src:Eg,alt:"Logo",className:""})})}),f.jsxs("nav",{className:"flex space-x-7",children:[f.jsxs(In,{to:"/",className:`relative menu-text ${a("#sec1")}`,onClick:u=>l(u,"#sec1"),children:["跨年出國抽",f.jsx("p",{className:"color-changing-text absolute top-[-13%] right-[-2%] w-7 h-7 transfer-position-xy-1 flex items-center justify-center text-xs font-bold font-roboto transform rotate-12",children:"NEW"})]}),f.jsx("a",{href:"/",className:`menu-text ${a("#sec2")}`,onClick:u=>l(u,"#sec2"),children:"投保滿額抽"}),f.jsx("a",{href:"/",className:`menu-text ${a("#sec3")}`,onClick:u=>l(u,"#sec3"),children:"首次投保抽"}),f.jsx(In,{to:"/mgm",className:`menu-text ${a("/mgm")}`,children:"分享全球抽"}),f.jsx(In,{to:"/policy",className:`menu-text ${a("/policy")}`,children:"活動辦法"})]})]})}),f.jsxs("header",{className:`mobile-menu  xl:hidden ${t?"h-full":""}`,children:[f.jsx("div",{className:`flex-shrink-0 w-[30vw] ml-[3vw] mt-1 ${t?"hidden":"block"}`,children:f.jsx("a",{href:"https://www.transglobe.com.tw/",target:"_blank",rel:"noopener noreferrer",children:f.jsx("img",{src:Eg,alt:"Logo",className:""})})}),f.jsxs("button",{className:"absolute top-3 right-4 flex items-center justify-center",onClick:s,children:[f.jsx("img",{src:"./menu/menu-hamburger.svg",alt:"Open Menu",className:`h-12 w-12 transition-opacity duration-300 ${t?"opacity-0":"opacity-100"}`}),f.jsx("img",{src:"./menu/menu-close-sm.svg",alt:"Close Menu",className:`h-12 w-12 absolute transition-opacity duration-300 ${t?"opacity-100":"opacity-0"}`})]}),f.jsx("div",{className:"flex flex-col items-center justify-center w-[100vw]",children:f.jsx("nav",{className:`static flex flex-col items-center justify-center space-y-4 ${t?"":"hidden"}`,children:f.jsxs("nav",{className:"flex flex-col space-y-6 px-14",children:[f.jsxs("a",{href:"/",className:"relative mobile-text",onClick:u=>l(u,"#sec1"),children:["跨年出國抽",f.jsx("p",{className:"color-changing-text absolute top-[-13%] right-[-2%] w-5 h-7 transfer-position-xy-1 flex items-center justify-center text-xs font-bold font-roboto transform rotate-30",children:"NEW"})]}),f.jsx("a",{href:"/",className:"mobile-text",onClick:u=>l(u,"#sec2"),children:"投保滿額抽"}),f.jsx("a",{href:"/",className:"mobile-text",onClick:u=>l(u,"#sec3"),children:"首次投保抽"}),f.jsx(In,{to:"/mgm",className:"mobile-text",onClick:s,children:"分享全球抽"}),f.jsx(In,{to:"/policy",className:"mobile-text",onClick:s,children:"活動辦法"})]})})})]})]})}function q3(){const[t,e]=R.useState(!1),n=()=>{e(!t)};return f.jsxs("footer",{children:[f.jsx("div",{className:"footer_top",children:f.jsxs("div",{className:"footer_inner",children:[f.jsxs("div",{className:"footer_link",children:[f.jsx("div",{className:"footer_title",children:"相關連結"}),f.jsx("div",{className:"style_pc",children:f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx("a",{href:"https://www.transglobe.com.tw/",target:"_blank",children:"全球人壽官網"})}),f.jsx("li",{children:f.jsx("a",{href:"https://www.facebook.com/TGLlife/?fref=ts",className:"icon_footer_fb",target:"_blank",children:"全球人壽粉絲YA　"})}),f.jsx("li",{children:f.jsx("a",{href:"https://eservice.transglobe.com.tw/cs/Logon/Logon.xhtml",target:"_blank",children:"保戶專區"})}),f.jsx("li",{children:f.jsx("a",{href:"https://www.transglobe.com.tw/service-contact-location.html?",target:"_blank",children:"服務據點　"})}),f.jsx("li",{children:f.jsx("a",{href:"https://www.transglobe.com.tw/law-lawcom.html",target:"_blank",children:"電子商務自律規範主管機關連結"})}),f.jsx("li",{children:f.jsx("a",{href:"https://e-commerce.transglobe.com.tw/assets/tgl/pdf/TGLECContract.pdf",target:"_blank",children:"網路投保業務暨網路保險服務契約"})})]})}),f.jsxs("div",{className:"style_mb",children:[f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx("a",{href:"http://www.transglobe.com.tw/transglobe-web",target:"_blank",children:"全球人壽官網"})}),f.jsx("li",{children:f.jsx("a",{href:"https://www.fsc.gov.tw/ch/index.jsp",target:"_blank",children:"主管機關連結"})})]}),f.jsxs("div",{className:"footer_more",children:[f.jsxs("div",{className:"footer_title btn_footer_more",children:["更多相關連結",f.jsx("svg",{className:"icon-footer-arrow",onClick:n,children:f.jsx("use",{"xlink:href":"images/icon-re.svg?svg=#ico-accor"})})]}),f.jsx("div",{className:`footer_more_content ${t?"active2":""}`,children:f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx("a",{href:"https://www.facebook.com/TGLlife/?fref=ts",className:"icon_footer_fb",target:"_blank",children:"全球人壽粉絲YA　"})}),f.jsx("li",{children:f.jsx("a",{href:"https://eservice.transglobe.com.tw/cs/Logon/Logon.xhtml",target:"_blank",children:"保戶專區"})}),f.jsx("li",{children:f.jsx("a",{href:"https://www.transglobe.com.tw/service-contact-location.html?",target:"_blank",children:"服務據點　"})}),f.jsx("li",{children:f.jsx("a",{href:"https://www.transglobe.com.tw/law-lawcom.html",target:"_blank",children:"電子商務自律規範主管機關連結"})}),f.jsx("li",{children:f.jsx("a",{href:"https://e-commerce.transglobe.com.tw/assets/tgl/pdf/TGLECContract.pdf",target:"_blank",children:"網路投保業務暨網路保險服務契約"})})]})})]})]})]}),f.jsxs("div",{className:"footer_info",children:[f.jsx("div",{className:"footer_title",children:"聯絡我們"}),f.jsxs("ul",{children:[f.jsx("li",{className:"icon_footer_map",children:f.jsxs("span",{children:["台北市110信義區市民大道六段288號16樓",f.jsx("a",{href:"https://www.google.com/maps?q=%E5%8F%B0%E5%8C%97%E5%B8%82%E4%BF%A1%E7%BE%A9%E5%8D%80%E5%B8%82%E6%B0%91%E5%A4%A7%E9%81%93%E5%85%AD%E6%AE%B5288%E8%99%9F16%E6%A8%93&t=m&z=16",target:"_blank",className:"link_map",children:"地圖"})]})}),f.jsx("li",{className:"icon_footer_phone",children:"免付費服務專線：0800-000-662"})]})]})]})}),f.jsx("div",{className:"footer_bottom",children:f.jsx("div",{className:"footer_inner",children:f.jsx("span",{className:"copyright",children:"2024 ©本網站版權屬 全球人壽保險股份有限公司所有"})})})]})}const Z3=T.img`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 10;
  cursor: pointer;
  display: ${t=>t.$show?"block":"none"};
  @media (max-width: 1301px) {
    width: 50px;
  }
`;function J3(){const e=window.location.hostname==="siaochi.github.io"?"/travel-web":"/",[n,r]=R.useState(!1),i=()=>{window.scrollTo({top:0,behavior:"smooth"})};return R.useEffect(()=>{window.addEventListener("scroll",()=>{window.scrollY>500?r(!0):r(!1)})},[]),f.jsxs(zk,{basename:e,children:[f.jsx(K3,{}),f.jsxs(Sk,{children:[f.jsx(Su,{path:"/",element:f.jsx(XT,{})}),f.jsx(Su,{path:"/mgm",element:f.jsx(z3,{})}),f.jsx(Su,{path:"/policy",element:f.jsx(Q3,{})})]}),f.jsx(q3,{}),f.jsx(Z3,{src:"./top-btn.svg",onClick:i,$show:n})]})}$1(document.getElementById("root")).render(f.jsx(R.StrictMode,{children:f.jsx(J3,{})}));
