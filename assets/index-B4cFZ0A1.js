function jp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function vc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yc={exports:{}},kl={},wc={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jr=Symbol.for("react.element"),kp=Symbol.for("react.portal"),Ep=Symbol.for("react.fragment"),Cp=Symbol.for("react.strict_mode"),_p=Symbol.for("react.profiler"),Pp=Symbol.for("react.provider"),Np=Symbol.for("react.context"),Tp=Symbol.for("react.forward_ref"),$p=Symbol.for("react.suspense"),zp=Symbol.for("react.memo"),Lp=Symbol.for("react.lazy"),Ra=Symbol.iterator;function Ip(e){return e===null||typeof e!="object"?null:(e=Ra&&e[Ra]||e["@@iterator"],typeof e=="function"?e:null)}var Sc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jc=Object.assign,kc={};function tr(e,t,n){this.props=e,this.context=t,this.refs=kc,this.updater=n||Sc}tr.prototype.isReactComponent={};tr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ec(){}Ec.prototype=tr.prototype;function Is(e,t,n){this.props=e,this.context=t,this.refs=kc,this.updater=n||Sc}var Rs=Is.prototype=new Ec;Rs.constructor=Is;jc(Rs,tr.prototype);Rs.isPureReactComponent=!0;var Oa=Array.isArray,Cc=Object.prototype.hasOwnProperty,Os={current:null},_c={key:!0,ref:!0,__self:!0,__source:!0};function Pc(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)Cc.call(t,r)&&!_c.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Jr,type:e,key:l,ref:o,props:i,_owner:Os.current}}function Rp(e,t){return{$$typeof:Jr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jr}function Op(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fa=/\/+/g;function Kl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Op(""+e.key):t.toString(36)}function Ni(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Jr:case kp:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Kl(o,0):r,Oa(i)?(n="",e!=null&&(n=e.replace(Fa,"$&/")+"/"),Ni(i,t,n,"",function(c){return c})):i!=null&&(Fs(i)&&(i=Rp(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Fa,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Oa(e))for(var a=0;a<e.length;a++){l=e[a];var u=r+Kl(l,a);o+=Ni(l,t,n,u,i)}else if(u=Ip(e),typeof u=="function")for(e=u.call(e),a=0;!(l=e.next()).done;)l=l.value,u=r+Kl(l,a++),o+=Ni(l,t,n,u,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function si(e,t,n){if(e==null)return e;var r=[],i=0;return Ni(e,r,"","",function(l){return t.call(n,l,i++)}),r}function Fp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},Ti={transition:null},Mp={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Ti,ReactCurrentOwner:Os};function Nc(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:si,forEach:function(e,t,n){si(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return si(e,function(){t++}),t},toArray:function(e){return si(e,function(t){return t})||[]},only:function(e){if(!Fs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=tr;O.Fragment=Ep;O.Profiler=_p;O.PureComponent=Is;O.StrictMode=Cp;O.Suspense=$p;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mp;O.act=Nc;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=jc({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=Os.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Cc.call(t,u)&&!_c.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Jr,type:e.type,key:i,ref:l,props:r,_owner:o}};O.createContext=function(e){return e={$$typeof:Np,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Pp,_context:e},e.Consumer=e};O.createElement=Pc;O.createFactory=function(e){var t=Pc.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Tp,render:e}};O.isValidElement=Fs;O.lazy=function(e){return{$$typeof:Lp,_payload:{_status:-1,_result:e},_init:Fp}};O.memo=function(e,t){return{$$typeof:zp,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Ti.transition;Ti.transition={};try{e()}finally{Ti.transition=t}};O.unstable_act=Nc;O.useCallback=function(e,t){return xe.current.useCallback(e,t)};O.useContext=function(e){return xe.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};O.useEffect=function(e,t){return xe.current.useEffect(e,t)};O.useId=function(){return xe.current.useId()};O.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return xe.current.useMemo(e,t)};O.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};O.useRef=function(e){return xe.current.useRef(e)};O.useState=function(e){return xe.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return xe.current.useTransition()};O.version="18.3.1";wc.exports=O;var P=wc.exports;const Wn=vc(P),Dp=jp({__proto__:null,default:Wn},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap=P,Bp=Symbol.for("react.element"),Up=Symbol.for("react.fragment"),Wp=Object.prototype.hasOwnProperty,Hp=Ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vp={key:!0,ref:!0,__self:!0,__source:!0};function Tc(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Wp.call(t,r)&&!Vp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Bp,type:e,key:l,ref:o,props:i,_owner:Hp.current}}kl.Fragment=Up;kl.jsx=Tc;kl.jsxs=Tc;yc.exports=kl;var s=yc.exports,$c={exports:{}},Le={},zc={exports:{}},Lc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,z){var L=N.length;N.push(z);e:for(;0<L;){var B=L-1>>>1,U=N[B];if(0<i(U,z))N[B]=z,N[L]=U,L=B;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var z=N[0],L=N.pop();if(L!==z){N[0]=L;e:for(var B=0,U=N.length,Zt=U>>>1;B<Zt;){var We=2*(B+1)-1,yt=N[We],_e=We+1,lt=N[_e];if(0>i(yt,L))_e<U&&0>i(lt,yt)?(N[B]=lt,N[_e]=L,B=_e):(N[B]=yt,N[We]=L,B=We);else if(_e<U&&0>i(lt,L))N[B]=lt,N[_e]=L,B=_e;else break e}}return z}function i(N,z){var L=N.sortIndex-z.sortIndex;return L!==0?L:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],c=[],m=1,h=null,g=3,y=!1,w=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=N)r(c),z.sortIndex=z.expirationTime,t(u,z);else break;z=n(c)}}function v(N){if(S=!1,p(N),!w)if(n(u)!==null)w=!0,or(E);else{var z=n(c);z!==null&&Kt(v,z.startTime-N)}}function E(N,z){w=!1,S&&(S=!1,f($),$=-1),y=!0;var L=g;try{for(p(z),h=n(u);h!==null&&(!(h.expirationTime>z)||N&&!Ce());){var B=h.callback;if(typeof B=="function"){h.callback=null,g=h.priorityLevel;var U=B(h.expirationTime<=z);z=e.unstable_now(),typeof U=="function"?h.callback=U:h===n(u)&&r(u),p(z)}else r(u);h=n(u)}if(h!==null)var Zt=!0;else{var We=n(c);We!==null&&Kt(v,We.startTime-z),Zt=!1}return Zt}finally{h=null,g=L,y=!1}}var C=!1,j=null,$=-1,W=5,R=-1;function Ce(){return!(e.unstable_now()-R<W)}function Yt(){if(j!==null){var N=e.unstable_now();R=N;var z=!0;try{z=j(!0,N)}finally{z?Gt():(C=!1,j=null)}}else C=!1}var Gt;if(typeof d=="function")Gt=function(){d(Yt)};else if(typeof MessageChannel<"u"){var li=new MessageChannel,Yl=li.port2;li.port1.onmessage=Yt,Gt=function(){Yl.postMessage(null)}}else Gt=function(){_(Yt,0)};function or(N){j=N,C||(C=!0,Gt())}function Kt(N,z){$=_(function(){N(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,or(E))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var L=g;g=z;try{return N()}finally{g=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=g;g=N;try{return z()}finally{g=L}},e.unstable_scheduleCallback=function(N,z,L){var B=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?B+L:B):L=B,N){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=L+U,N={id:m++,callback:z,priorityLevel:N,startTime:L,expirationTime:U,sortIndex:-1},L>B?(N.sortIndex=L,t(c,N),n(u)===null&&N===n(c)&&(S?(f($),$=-1):S=!0,Kt(v,L-B))):(N.sortIndex=U,t(u,N),w||y||(w=!0,or(E))),N},e.unstable_shouldYield=Ce,e.unstable_wrapCallback=function(N){var z=g;return function(){var L=g;g=z;try{return N.apply(this,arguments)}finally{g=L}}}})(Lc);zc.exports=Lc;var Xp=zc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp=P,ze=Xp;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ic=new Set,zr={};function mn(e,t){Hn(e,t),Hn(e+"Capture",t)}function Hn(e,t){for(zr[e]=t,e=0;e<t.length;e++)Ic.add(t[e])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),To=Object.prototype.hasOwnProperty,Yp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ma={},Da={};function Gp(e){return To.call(Da,e)?!0:To.call(Ma,e)?!1:Yp.test(e)?Da[e]=!0:(Ma[e]=!0,!1)}function Kp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Zp(e,t,n,r){if(t===null||typeof t>"u"||Kp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ve(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ms=/[\-:]([a-z])/g;function Ds(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ms,Ds);ce[t]=new ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ms,Ds);ce[t]=new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ms,Ds);ce[t]=new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function As(e,t,n,r){var i=ce.hasOwnProperty(t)?ce[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Zp(t,n,i,r)&&(n=null),r||i===null?Gp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var vt=Qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ai=Symbol.for("react.element"),jn=Symbol.for("react.portal"),kn=Symbol.for("react.fragment"),Bs=Symbol.for("react.strict_mode"),$o=Symbol.for("react.profiler"),Rc=Symbol.for("react.provider"),Oc=Symbol.for("react.context"),Us=Symbol.for("react.forward_ref"),zo=Symbol.for("react.suspense"),Lo=Symbol.for("react.suspense_list"),Ws=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),Fc=Symbol.for("react.offscreen"),Aa=Symbol.iterator;function ar(e){return e===null||typeof e!="object"?null:(e=Aa&&e[Aa]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Zl;function gr(e){if(Zl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Zl=t&&t[1]||""}return`
`+Zl+e}var Jl=!1;function ql(e,t){if(!e||Jl)return"";Jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,a=l.length-1;1<=o&&0<=a&&i[o]!==l[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==l[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==l[a]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{Jl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?gr(e):""}function Jp(e){switch(e.tag){case 5:return gr(e.type);case 16:return gr("Lazy");case 13:return gr("Suspense");case 19:return gr("SuspenseList");case 0:case 2:case 15:return e=ql(e.type,!1),e;case 11:return e=ql(e.type.render,!1),e;case 1:return e=ql(e.type,!0),e;default:return""}}function Io(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kn:return"Fragment";case jn:return"Portal";case $o:return"Profiler";case Bs:return"StrictMode";case zo:return"Suspense";case Lo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Oc:return(e.displayName||"Context")+".Consumer";case Rc:return(e._context.displayName||"Context")+".Provider";case Us:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ws:return t=e.displayName||null,t!==null?t:Io(e.type)||"Memo";case _t:t=e._payload,e=e._init;try{return Io(e(t))}catch{}}return null}function qp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Io(t);case 8:return t===Bs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bp(e){var t=Mc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ui(e){e._valueTracker||(e._valueTracker=bp(e))}function Dc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Mc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ro(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ba(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ac(e,t){t=t.checked,t!=null&&As(e,"checked",t,!1)}function Oo(e,t){Ac(e,t);var n=Wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fo(e,t.type,Wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ua(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fo(e,t,n){(t!=="number"||Qi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xr=Array.isArray;function On(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Mo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(xr(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wt(n)}}function Bc(e,t){var n=Wt(t.value),r=Wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ha(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Uc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Do(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Uc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ci,Wc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ci=ci||document.createElement("div"),ci.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ci.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Lr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eh=["Webkit","ms","Moz","O"];Object.keys(Sr).forEach(function(e){eh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sr[t]=Sr[e]})});function Hc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sr.hasOwnProperty(e)&&Sr[e]?(""+t).trim():t+"px"}function Vc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Hc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var th=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ao(e,t){if(t){if(th[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Bo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uo=null;function Hs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wo=null,Fn=null,Mn=null;function Va(e){if(e=ei(e)){if(typeof Wo!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Nl(t),Wo(e.stateNode,e.type,t))}}function Xc(e){Fn?Mn?Mn.push(e):Mn=[e]:Fn=e}function Qc(){if(Fn){var e=Fn,t=Mn;if(Mn=Fn=null,Va(e),t)for(e=0;e<t.length;e++)Va(t[e])}}function Yc(e,t){return e(t)}function Gc(){}var bl=!1;function Kc(e,t,n){if(bl)return e(t,n);bl=!0;try{return Yc(e,t,n)}finally{bl=!1,(Fn!==null||Mn!==null)&&(Gc(),Qc())}}function Ir(e,t){var n=e.stateNode;if(n===null)return null;var r=Nl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Ho=!1;if(ht)try{var ur={};Object.defineProperty(ur,"passive",{get:function(){Ho=!0}}),window.addEventListener("test",ur,ur),window.removeEventListener("test",ur,ur)}catch{Ho=!1}function nh(e,t,n,r,i,l,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var jr=!1,Yi=null,Gi=!1,Vo=null,rh={onError:function(e){jr=!0,Yi=e}};function ih(e,t,n,r,i,l,o,a,u){jr=!1,Yi=null,nh.apply(rh,arguments)}function lh(e,t,n,r,i,l,o,a,u){if(ih.apply(this,arguments),jr){if(jr){var c=Yi;jr=!1,Yi=null}else throw Error(k(198));Gi||(Gi=!0,Vo=c)}}function gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xa(e){if(gn(e)!==e)throw Error(k(188))}function oh(e){var t=e.alternate;if(!t){if(t=gn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Xa(i),e;if(l===r)return Xa(i),t;l=l.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o){for(a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Jc(e){return e=oh(e),e!==null?qc(e):null}function qc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qc(e);if(t!==null)return t;e=e.sibling}return null}var bc=ze.unstable_scheduleCallback,Qa=ze.unstable_cancelCallback,sh=ze.unstable_shouldYield,ah=ze.unstable_requestPaint,b=ze.unstable_now,uh=ze.unstable_getCurrentPriorityLevel,Vs=ze.unstable_ImmediatePriority,ed=ze.unstable_UserBlockingPriority,Ki=ze.unstable_NormalPriority,ch=ze.unstable_LowPriority,td=ze.unstable_IdlePriority,El=null,rt=null;function dh(e){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(El,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:hh,fh=Math.log,ph=Math.LN2;function hh(e){return e>>>=0,e===0?32:31-(fh(e)/ph|0)|0}var di=64,fi=4194304;function vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=vr(a):(l&=o,l!==0&&(r=vr(l)))}else o=n&~i,o!==0?r=vr(o):l!==0&&(r=vr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ke(t),i=1<<n,r|=e[n],t&=~i;return r}function mh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Ke(l),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=mh(a,t)):u<=t&&(e.expiredLanes|=a),l&=~a}}function Xo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nd(){var e=di;return di<<=1,!(di&4194240)&&(di=64),e}function eo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function xh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ke(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Xs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var D=0;function rd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var id,Qs,ld,od,sd,Qo=!1,pi=[],It=null,Rt=null,Ot=null,Rr=new Map,Or=new Map,Nt=[],vh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ya(e,t){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Rr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Or.delete(t.pointerId)}}function cr(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=ei(t),t!==null&&Qs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function yh(e,t,n,r,i){switch(t){case"focusin":return It=cr(It,e,t,n,r,i),!0;case"dragenter":return Rt=cr(Rt,e,t,n,r,i),!0;case"mouseover":return Ot=cr(Ot,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Rr.set(l,cr(Rr.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Or.set(l,cr(Or.get(l)||null,e,t,n,r,i)),!0}return!1}function ad(e){var t=en(e.target);if(t!==null){var n=gn(t);if(n!==null){if(t=n.tag,t===13){if(t=Zc(n),t!==null){e.blockedOn=t,sd(e.priority,function(){ld(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $i(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Uo=r,n.target.dispatchEvent(r),Uo=null}else return t=ei(n),t!==null&&Qs(t),e.blockedOn=n,!1;t.shift()}return!0}function Ga(e,t,n){$i(e)&&n.delete(t)}function wh(){Qo=!1,It!==null&&$i(It)&&(It=null),Rt!==null&&$i(Rt)&&(Rt=null),Ot!==null&&$i(Ot)&&(Ot=null),Rr.forEach(Ga),Or.forEach(Ga)}function dr(e,t){e.blockedOn===t&&(e.blockedOn=null,Qo||(Qo=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,wh)))}function Fr(e){function t(i){return dr(i,e)}if(0<pi.length){dr(pi[0],e);for(var n=1;n<pi.length;n++){var r=pi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(It!==null&&dr(It,e),Rt!==null&&dr(Rt,e),Ot!==null&&dr(Ot,e),Rr.forEach(t),Or.forEach(t),n=0;n<Nt.length;n++)r=Nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nt.length&&(n=Nt[0],n.blockedOn===null);)ad(n),n.blockedOn===null&&Nt.shift()}var Dn=vt.ReactCurrentBatchConfig,Ji=!0;function Sh(e,t,n,r){var i=D,l=Dn.transition;Dn.transition=null;try{D=1,Ys(e,t,n,r)}finally{D=i,Dn.transition=l}}function jh(e,t,n,r){var i=D,l=Dn.transition;Dn.transition=null;try{D=4,Ys(e,t,n,r)}finally{D=i,Dn.transition=l}}function Ys(e,t,n,r){if(Ji){var i=Yo(e,t,n,r);if(i===null)co(e,t,r,qi,n),Ya(e,r);else if(yh(i,e,t,n,r))r.stopPropagation();else if(Ya(e,r),t&4&&-1<vh.indexOf(e)){for(;i!==null;){var l=ei(i);if(l!==null&&id(l),l=Yo(e,t,n,r),l===null&&co(e,t,r,qi,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else co(e,t,r,null,n)}}var qi=null;function Yo(e,t,n,r){if(qi=null,e=Hs(r),e=en(e),e!==null)if(t=gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qi=e,null}function ud(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uh()){case Vs:return 1;case ed:return 4;case Ki:case ch:return 16;case td:return 536870912;default:return 16}default:return 16}}var $t=null,Gs=null,zi=null;function cd(){if(zi)return zi;var e,t=Gs,n=t.length,r,i="value"in $t?$t.value:$t.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return zi=i.slice(e,1<r?1-r:void 0)}function Li(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hi(){return!0}function Ka(){return!1}function Ie(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?hi:Ka,this.isPropagationStopped=Ka,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hi)},persist:function(){},isPersistent:hi}),t}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ks=Ie(nr),br=J({},nr,{view:0,detail:0}),kh=Ie(br),to,no,fr,Cl=J({},br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fr&&(fr&&e.type==="mousemove"?(to=e.screenX-fr.screenX,no=e.screenY-fr.screenY):no=to=0,fr=e),to)},movementY:function(e){return"movementY"in e?e.movementY:no}}),Za=Ie(Cl),Eh=J({},Cl,{dataTransfer:0}),Ch=Ie(Eh),_h=J({},br,{relatedTarget:0}),ro=Ie(_h),Ph=J({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Nh=Ie(Ph),Th=J({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$h=Ie(Th),zh=J({},nr,{data:0}),Ja=Ie(zh),Lh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ih={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Oh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rh[e])?!!t[e]:!1}function Zs(){return Oh}var Fh=J({},br,{key:function(e){if(e.key){var t=Lh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ih[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zs,charCode:function(e){return e.type==="keypress"?Li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mh=Ie(Fh),Dh=J({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qa=Ie(Dh),Ah=J({},br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zs}),Bh=Ie(Ah),Uh=J({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wh=Ie(Uh),Hh=J({},Cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vh=Ie(Hh),Xh=[9,13,27,32],Js=ht&&"CompositionEvent"in window,kr=null;ht&&"documentMode"in document&&(kr=document.documentMode);var Qh=ht&&"TextEvent"in window&&!kr,dd=ht&&(!Js||kr&&8<kr&&11>=kr),ba=" ",eu=!1;function fd(e,t){switch(e){case"keyup":return Xh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var En=!1;function Yh(e,t){switch(e){case"compositionend":return pd(t);case"keypress":return t.which!==32?null:(eu=!0,ba);case"textInput":return e=t.data,e===ba&&eu?null:e;default:return null}}function Gh(e,t){if(En)return e==="compositionend"||!Js&&fd(e,t)?(e=cd(),zi=Gs=$t=null,En=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dd&&t.locale!=="ko"?null:t.data;default:return null}}var Kh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kh[e.type]:t==="textarea"}function hd(e,t,n,r){Xc(r),t=bi(t,"onChange"),0<t.length&&(n=new Ks("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Er=null,Mr=null;function Zh(e){Cd(e,0)}function _l(e){var t=Pn(e);if(Dc(t))return e}function Jh(e,t){if(e==="change")return t}var md=!1;if(ht){var io;if(ht){var lo="oninput"in document;if(!lo){var nu=document.createElement("div");nu.setAttribute("oninput","return;"),lo=typeof nu.oninput=="function"}io=lo}else io=!1;md=io&&(!document.documentMode||9<document.documentMode)}function ru(){Er&&(Er.detachEvent("onpropertychange",gd),Mr=Er=null)}function gd(e){if(e.propertyName==="value"&&_l(Mr)){var t=[];hd(t,Mr,e,Hs(e)),Kc(Zh,t)}}function qh(e,t,n){e==="focusin"?(ru(),Er=t,Mr=n,Er.attachEvent("onpropertychange",gd)):e==="focusout"&&ru()}function bh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _l(Mr)}function em(e,t){if(e==="click")return _l(t)}function tm(e,t){if(e==="input"||e==="change")return _l(t)}function nm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qe=typeof Object.is=="function"?Object.is:nm;function Dr(e,t){if(qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!To.call(t,i)||!qe(e[i],t[i]))return!1}return!0}function iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lu(e,t){var n=iu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=iu(n)}}function xd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vd(){for(var e=window,t=Qi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qi(e.document)}return t}function qs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rm(e){var t=vd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xd(n.ownerDocument.documentElement,n)){if(r!==null&&qs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=lu(n,l);var o=lu(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var im=ht&&"documentMode"in document&&11>=document.documentMode,Cn=null,Go=null,Cr=null,Ko=!1;function ou(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ko||Cn==null||Cn!==Qi(r)||(r=Cn,"selectionStart"in r&&qs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Cr&&Dr(Cr,r)||(Cr=r,r=bi(Go,"onSelect"),0<r.length&&(t=new Ks("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cn)))}function mi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _n={animationend:mi("Animation","AnimationEnd"),animationiteration:mi("Animation","AnimationIteration"),animationstart:mi("Animation","AnimationStart"),transitionend:mi("Transition","TransitionEnd")},oo={},yd={};ht&&(yd=document.createElement("div").style,"AnimationEvent"in window||(delete _n.animationend.animation,delete _n.animationiteration.animation,delete _n.animationstart.animation),"TransitionEvent"in window||delete _n.transitionend.transition);function Pl(e){if(oo[e])return oo[e];if(!_n[e])return e;var t=_n[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in yd)return oo[e]=t[n];return e}var wd=Pl("animationend"),Sd=Pl("animationiteration"),jd=Pl("animationstart"),kd=Pl("transitionend"),Ed=new Map,su="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vt(e,t){Ed.set(e,t),mn(t,[e])}for(var so=0;so<su.length;so++){var ao=su[so],lm=ao.toLowerCase(),om=ao[0].toUpperCase()+ao.slice(1);Vt(lm,"on"+om)}Vt(wd,"onAnimationEnd");Vt(Sd,"onAnimationIteration");Vt(jd,"onAnimationStart");Vt("dblclick","onDoubleClick");Vt("focusin","onFocus");Vt("focusout","onBlur");Vt(kd,"onTransitionEnd");Hn("onMouseEnter",["mouseout","mouseover"]);Hn("onMouseLeave",["mouseout","mouseover"]);Hn("onPointerEnter",["pointerout","pointerover"]);Hn("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sm=new Set("cancel close invalid load scroll toggle".split(" ").concat(yr));function au(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,lh(r,t,void 0,e),e.currentTarget=null}function Cd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==l&&i.isPropagationStopped())break e;au(i,a,c),l=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==l&&i.isPropagationStopped())break e;au(i,a,c),l=u}}}if(Gi)throw e=Vo,Gi=!1,Vo=null,e}function V(e,t){var n=t[es];n===void 0&&(n=t[es]=new Set);var r=e+"__bubble";n.has(r)||(_d(t,e,2,!1),n.add(r))}function uo(e,t,n){var r=0;t&&(r|=4),_d(n,e,r,t)}var gi="_reactListening"+Math.random().toString(36).slice(2);function Ar(e){if(!e[gi]){e[gi]=!0,Ic.forEach(function(n){n!=="selectionchange"&&(sm.has(n)||uo(n,!1,e),uo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gi]||(t[gi]=!0,uo("selectionchange",!1,t))}}function _d(e,t,n,r){switch(ud(t)){case 1:var i=Sh;break;case 4:i=jh;break;default:i=Ys}n=i.bind(null,t,n,e),i=void 0,!Ho||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function co(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=en(a),o===null)return;if(u=o.tag,u===5||u===6){r=l=o;continue e}a=a.parentNode}}r=r.return}Kc(function(){var c=l,m=Hs(n),h=[];e:{var g=Ed.get(e);if(g!==void 0){var y=Ks,w=e;switch(e){case"keypress":if(Li(n)===0)break e;case"keydown":case"keyup":y=Mh;break;case"focusin":w="focus",y=ro;break;case"focusout":w="blur",y=ro;break;case"beforeblur":case"afterblur":y=ro;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Za;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Ch;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Bh;break;case wd:case Sd:case jd:y=Nh;break;case kd:y=Wh;break;case"scroll":y=kh;break;case"wheel":y=Vh;break;case"copy":case"cut":case"paste":y=$h;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=qa}var S=(t&4)!==0,_=!S&&e==="scroll",f=S?g!==null?g+"Capture":null:g;S=[];for(var d=c,p;d!==null;){p=d;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Ir(d,f),v!=null&&S.push(Br(d,v,p)))),_)break;d=d.return}0<S.length&&(g=new y(g,w,null,n,m),h.push({event:g,listeners:S}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==Uo&&(w=n.relatedTarget||n.fromElement)&&(en(w)||w[mt]))break e;if((y||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=c,w=w?en(w):null,w!==null&&(_=gn(w),w!==_||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(S=Za,v="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(S=qa,v="onPointerLeave",f="onPointerEnter",d="pointer"),_=y==null?g:Pn(y),p=w==null?g:Pn(w),g=new S(v,d+"leave",y,n,m),g.target=_,g.relatedTarget=p,v=null,en(m)===c&&(S=new S(f,d+"enter",w,n,m),S.target=p,S.relatedTarget=_,v=S),_=v,y&&w)t:{for(S=y,f=w,d=0,p=S;p;p=yn(p))d++;for(p=0,v=f;v;v=yn(v))p++;for(;0<d-p;)S=yn(S),d--;for(;0<p-d;)f=yn(f),p--;for(;d--;){if(S===f||f!==null&&S===f.alternate)break t;S=yn(S),f=yn(f)}S=null}else S=null;y!==null&&uu(h,g,y,S,!1),w!==null&&_!==null&&uu(h,_,w,S,!0)}}e:{if(g=c?Pn(c):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var E=Jh;else if(tu(g))if(md)E=tm;else{E=bh;var C=qh}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=em);if(E&&(E=E(e,c))){hd(h,E,n,m);break e}C&&C(e,g,c),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&Fo(g,"number",g.value)}switch(C=c?Pn(c):window,e){case"focusin":(tu(C)||C.contentEditable==="true")&&(Cn=C,Go=c,Cr=null);break;case"focusout":Cr=Go=Cn=null;break;case"mousedown":Ko=!0;break;case"contextmenu":case"mouseup":case"dragend":Ko=!1,ou(h,n,m);break;case"selectionchange":if(im)break;case"keydown":case"keyup":ou(h,n,m)}var j;if(Js)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else En?fd(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(dd&&n.locale!=="ko"&&(En||$!=="onCompositionStart"?$==="onCompositionEnd"&&En&&(j=cd()):($t=m,Gs="value"in $t?$t.value:$t.textContent,En=!0)),C=bi(c,$),0<C.length&&($=new Ja($,e,null,n,m),h.push({event:$,listeners:C}),j?$.data=j:(j=pd(n),j!==null&&($.data=j)))),(j=Qh?Yh(e,n):Gh(e,n))&&(c=bi(c,"onBeforeInput"),0<c.length&&(m=new Ja("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:c}),m.data=j))}Cd(h,t)})}function Br(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Ir(e,n),l!=null&&r.unshift(Br(e,l,i)),l=Ir(e,t),l!=null&&r.push(Br(e,l,i))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function uu(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Ir(n,l),u!=null&&o.unshift(Br(n,u,a))):i||(u=Ir(n,l),u!=null&&o.push(Br(n,u,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var am=/\r\n?/g,um=/\u0000|\uFFFD/g;function cu(e){return(typeof e=="string"?e:""+e).replace(am,`
`).replace(um,"")}function xi(e,t,n){if(t=cu(t),cu(e)!==t&&n)throw Error(k(425))}function el(){}var Zo=null,Jo=null;function qo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bo=typeof setTimeout=="function"?setTimeout:void 0,cm=typeof clearTimeout=="function"?clearTimeout:void 0,du=typeof Promise=="function"?Promise:void 0,dm=typeof queueMicrotask=="function"?queueMicrotask:typeof du<"u"?function(e){return du.resolve(null).then(e).catch(fm)}:bo;function fm(e){setTimeout(function(){throw e})}function fo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Fr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fr(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var rr=Math.random().toString(36).slice(2),nt="__reactFiber$"+rr,Ur="__reactProps$"+rr,mt="__reactContainer$"+rr,es="__reactEvents$"+rr,pm="__reactListeners$"+rr,hm="__reactHandles$"+rr;function en(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mt]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fu(e);e!==null;){if(n=e[nt])return n;e=fu(e)}return t}e=n,n=e.parentNode}return null}function ei(e){return e=e[nt]||e[mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Nl(e){return e[Ur]||null}var ts=[],Nn=-1;function Xt(e){return{current:e}}function Q(e){0>Nn||(e.current=ts[Nn],ts[Nn]=null,Nn--)}function H(e,t){Nn++,ts[Nn]=e.current,e.current=t}var Ht={},he=Xt(Ht),je=Xt(!1),cn=Ht;function Vn(e,t){var n=e.type.contextTypes;if(!n)return Ht;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ke(e){return e=e.childContextTypes,e!=null}function tl(){Q(je),Q(he)}function pu(e,t,n){if(he.current!==Ht)throw Error(k(168));H(he,t),H(je,n)}function Pd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,qp(e)||"Unknown",i));return J({},n,r)}function nl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ht,cn=he.current,H(he,e),H(je,je.current),!0}function hu(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Pd(e,t,cn),r.__reactInternalMemoizedMergedChildContext=e,Q(je),Q(he),H(he,e)):Q(je),H(je,n)}var at=null,Tl=!1,po=!1;function Nd(e){at===null?at=[e]:at.push(e)}function mm(e){Tl=!0,Nd(e)}function Qt(){if(!po&&at!==null){po=!0;var e=0,t=D;try{var n=at;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}at=null,Tl=!1}catch(i){throw at!==null&&(at=at.slice(e+1)),bc(Vs,Qt),i}finally{D=t,po=!1}}return null}var Tn=[],$n=0,rl=null,il=0,Oe=[],Fe=0,dn=null,ut=1,ct="";function qt(e,t){Tn[$n++]=il,Tn[$n++]=rl,rl=e,il=t}function Td(e,t,n){Oe[Fe++]=ut,Oe[Fe++]=ct,Oe[Fe++]=dn,dn=e;var r=ut;e=ct;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var l=32-Ke(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ut=1<<32-Ke(t)+i|n<<i|r,ct=l+e}else ut=1<<l|n<<i|r,ct=e}function bs(e){e.return!==null&&(qt(e,1),Td(e,1,0))}function ea(e){for(;e===rl;)rl=Tn[--$n],Tn[$n]=null,il=Tn[--$n],Tn[$n]=null;for(;e===dn;)dn=Oe[--Fe],Oe[Fe]=null,ct=Oe[--Fe],Oe[Fe]=null,ut=Oe[--Fe],Oe[Fe]=null}var $e=null,Te=null,G=!1,Ye=null;function $d(e,t){var n=Me(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function mu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,Te=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,Te=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:ut,overflow:ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Me(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,Te=null,!0):!1;default:return!1}}function ns(e){return(e.mode&1)!==0&&(e.flags&128)===0}function rs(e){if(G){var t=Te;if(t){var n=t;if(!mu(e,t)){if(ns(e))throw Error(k(418));t=Ft(n.nextSibling);var r=$e;t&&mu(e,t)?$d(r,n):(e.flags=e.flags&-4097|2,G=!1,$e=e)}}else{if(ns(e))throw Error(k(418));e.flags=e.flags&-4097|2,G=!1,$e=e}}}function gu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function vi(e){if(e!==$e)return!1;if(!G)return gu(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qo(e.type,e.memoizedProps)),t&&(t=Te)){if(ns(e))throw zd(),Error(k(418));for(;t;)$d(e,t),t=Ft(t.nextSibling)}if(gu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Te=Ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Te=null}}else Te=$e?Ft(e.stateNode.nextSibling):null;return!0}function zd(){for(var e=Te;e;)e=Ft(e.nextSibling)}function Xn(){Te=$e=null,G=!1}function ta(e){Ye===null?Ye=[e]:Ye.push(e)}var gm=vt.ReactCurrentBatchConfig;function pr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var a=i.refs;o===null?delete a[l]:a[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function yi(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xu(e){var t=e._init;return t(e._payload)}function Ld(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=Bt(f,d),f.index=0,f.sibling=null,f}function l(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,p,v){return d===null||d.tag!==6?(d=wo(p,f.mode,v),d.return=f,d):(d=i(d,p),d.return=f,d)}function u(f,d,p,v){var E=p.type;return E===kn?m(f,d,p.props.children,v,p.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===_t&&xu(E)===d.type)?(v=i(d,p.props),v.ref=pr(f,d,p),v.return=f,v):(v=Ai(p.type,p.key,p.props,null,f.mode,v),v.ref=pr(f,d,p),v.return=f,v)}function c(f,d,p,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=So(p,f.mode,v),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function m(f,d,p,v,E){return d===null||d.tag!==7?(d=sn(p,f.mode,v,E),d.return=f,d):(d=i(d,p),d.return=f,d)}function h(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=wo(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ai:return p=Ai(d.type,d.key,d.props,null,f.mode,p),p.ref=pr(f,null,d),p.return=f,p;case jn:return d=So(d,f.mode,p),d.return=f,d;case _t:var v=d._init;return h(f,v(d._payload),p)}if(xr(d)||ar(d))return d=sn(d,f.mode,p,null),d.return=f,d;yi(f,d)}return null}function g(f,d,p,v){var E=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(f,d,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ai:return p.key===E?u(f,d,p,v):null;case jn:return p.key===E?c(f,d,p,v):null;case _t:return E=p._init,g(f,d,E(p._payload),v)}if(xr(p)||ar(p))return E!==null?null:m(f,d,p,v,null);yi(f,p)}return null}function y(f,d,p,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,a(d,f,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ai:return f=f.get(v.key===null?p:v.key)||null,u(d,f,v,E);case jn:return f=f.get(v.key===null?p:v.key)||null,c(d,f,v,E);case _t:var C=v._init;return y(f,d,p,C(v._payload),E)}if(xr(v)||ar(v))return f=f.get(p)||null,m(d,f,v,E,null);yi(d,v)}return null}function w(f,d,p,v){for(var E=null,C=null,j=d,$=d=0,W=null;j!==null&&$<p.length;$++){j.index>$?(W=j,j=null):W=j.sibling;var R=g(f,j,p[$],v);if(R===null){j===null&&(j=W);break}e&&j&&R.alternate===null&&t(f,j),d=l(R,d,$),C===null?E=R:C.sibling=R,C=R,j=W}if($===p.length)return n(f,j),G&&qt(f,$),E;if(j===null){for(;$<p.length;$++)j=h(f,p[$],v),j!==null&&(d=l(j,d,$),C===null?E=j:C.sibling=j,C=j);return G&&qt(f,$),E}for(j=r(f,j);$<p.length;$++)W=y(j,f,$,p[$],v),W!==null&&(e&&W.alternate!==null&&j.delete(W.key===null?$:W.key),d=l(W,d,$),C===null?E=W:C.sibling=W,C=W);return e&&j.forEach(function(Ce){return t(f,Ce)}),G&&qt(f,$),E}function S(f,d,p,v){var E=ar(p);if(typeof E!="function")throw Error(k(150));if(p=E.call(p),p==null)throw Error(k(151));for(var C=E=null,j=d,$=d=0,W=null,R=p.next();j!==null&&!R.done;$++,R=p.next()){j.index>$?(W=j,j=null):W=j.sibling;var Ce=g(f,j,R.value,v);if(Ce===null){j===null&&(j=W);break}e&&j&&Ce.alternate===null&&t(f,j),d=l(Ce,d,$),C===null?E=Ce:C.sibling=Ce,C=Ce,j=W}if(R.done)return n(f,j),G&&qt(f,$),E;if(j===null){for(;!R.done;$++,R=p.next())R=h(f,R.value,v),R!==null&&(d=l(R,d,$),C===null?E=R:C.sibling=R,C=R);return G&&qt(f,$),E}for(j=r(f,j);!R.done;$++,R=p.next())R=y(j,f,$,R.value,v),R!==null&&(e&&R.alternate!==null&&j.delete(R.key===null?$:R.key),d=l(R,d,$),C===null?E=R:C.sibling=R,C=R);return e&&j.forEach(function(Yt){return t(f,Yt)}),G&&qt(f,$),E}function _(f,d,p,v){if(typeof p=="object"&&p!==null&&p.type===kn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ai:e:{for(var E=p.key,C=d;C!==null;){if(C.key===E){if(E=p.type,E===kn){if(C.tag===7){n(f,C.sibling),d=i(C,p.props.children),d.return=f,f=d;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===_t&&xu(E)===C.type){n(f,C.sibling),d=i(C,p.props),d.ref=pr(f,C,p),d.return=f,f=d;break e}n(f,C);break}else t(f,C);C=C.sibling}p.type===kn?(d=sn(p.props.children,f.mode,v,p.key),d.return=f,f=d):(v=Ai(p.type,p.key,p.props,null,f.mode,v),v.ref=pr(f,d,p),v.return=f,f=v)}return o(f);case jn:e:{for(C=p.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=So(p,f.mode,v),d.return=f,f=d}return o(f);case _t:return C=p._init,_(f,d,C(p._payload),v)}if(xr(p))return w(f,d,p,v);if(ar(p))return S(f,d,p,v);yi(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,p),d.return=f,f=d):(n(f,d),d=wo(p,f.mode,v),d.return=f,f=d),o(f)):n(f,d)}return _}var Qn=Ld(!0),Id=Ld(!1),ll=Xt(null),ol=null,zn=null,na=null;function ra(){na=zn=ol=null}function ia(e){var t=ll.current;Q(ll),e._currentValue=t}function is(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function An(e,t){ol=e,na=zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(we=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(na!==e)if(e={context:e,memoizedValue:t,next:null},zn===null){if(ol===null)throw Error(k(308));zn=e,ol.dependencies={lanes:0,firstContext:e}}else zn=zn.next=e;return t}var tn=null;function la(e){tn===null?tn=[e]:tn.push(e)}function Rd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,la(t)):(n.next=i.next,i.next=n),t.interleaved=n,gt(e,r)}function gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pt=!1;function oa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Od(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,gt(e,n)}return i=r.interleaved,i===null?(t.next=t,la(r)):(t.next=i.next,i.next=t),r.interleaved=t,gt(e,n)}function Ii(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xs(e,n)}}function vu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function sl(e,t,n,r){var i=e.updateQueue;Pt=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?l=c:o.next=c,o=u;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==o&&(a===null?m.firstBaseUpdate=c:a.next=c,m.lastBaseUpdate=u))}if(l!==null){var h=i.baseState;o=0,m=c=u=null,a=l;do{var g=a.lane,y=a.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,S=a;switch(g=t,y=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){h=w.call(y,h,g);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,g=typeof w=="function"?w.call(y,h,g):w,g==null)break e;h=J({},h,g);break e;case 2:Pt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else y={eventTime:y,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(c=m=y,u=h):m=m.next=y,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(m===null&&(u=h),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);pn|=o,e.lanes=o,e.memoizedState=h}}function yu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var ti={},it=Xt(ti),Wr=Xt(ti),Hr=Xt(ti);function nn(e){if(e===ti)throw Error(k(174));return e}function sa(e,t){switch(H(Hr,t),H(Wr,e),H(it,ti),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Do(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Do(t,e)}Q(it),H(it,t)}function Yn(){Q(it),Q(Wr),Q(Hr)}function Fd(e){nn(Hr.current);var t=nn(it.current),n=Do(t,e.type);t!==n&&(H(Wr,e),H(it,n))}function aa(e){Wr.current===e&&(Q(it),Q(Wr))}var K=Xt(0);function al(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ho=[];function ua(){for(var e=0;e<ho.length;e++)ho[e]._workInProgressVersionPrimary=null;ho.length=0}var Ri=vt.ReactCurrentDispatcher,mo=vt.ReactCurrentBatchConfig,fn=0,Z=null,re=null,le=null,ul=!1,_r=!1,Vr=0,xm=0;function de(){throw Error(k(321))}function ca(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qe(e[n],t[n]))return!1;return!0}function da(e,t,n,r,i,l){if(fn=l,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ri.current=e===null||e.memoizedState===null?Sm:jm,e=n(r,i),_r){l=0;do{if(_r=!1,Vr=0,25<=l)throw Error(k(301));l+=1,le=re=null,t.updateQueue=null,Ri.current=km,e=n(r,i)}while(_r)}if(Ri.current=cl,t=re!==null&&re.next!==null,fn=0,le=re=Z=null,ul=!1,t)throw Error(k(300));return e}function fa(){var e=Vr!==0;return Vr=0,e}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Z.memoizedState=le=e:le=le.next=e,le}function Be(){if(re===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=le===null?Z.memoizedState:le.next;if(t!==null)le=t,re=e;else{if(e===null)throw Error(k(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},le===null?Z.memoizedState=le=e:le=le.next=e}return le}function Xr(e,t){return typeof t=="function"?t(e):t}function go(e){var t=Be(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=re,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=o=null,u=null,c=l;do{var m=c.lane;if((fn&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=h,o=r):u=u.next=h,Z.lanes|=m,pn|=m}c=c.next}while(c!==null&&c!==l);u===null?o=r:u.next=a,qe(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,Z.lanes|=l,pn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xo(e){var t=Be(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);qe(l,t.memoizedState)||(we=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Md(){}function Dd(e,t){var n=Z,r=Be(),i=t(),l=!qe(r.memoizedState,i);if(l&&(r.memoizedState=i,we=!0),r=r.queue,pa(Ud.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,Qr(9,Bd.bind(null,n,r,i,t),void 0,null),se===null)throw Error(k(349));fn&30||Ad(n,t,i)}return i}function Ad(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bd(e,t,n,r){t.value=n,t.getSnapshot=r,Wd(t)&&Hd(e)}function Ud(e,t,n){return n(function(){Wd(t)&&Hd(e)})}function Wd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qe(e,n)}catch{return!0}}function Hd(e){var t=gt(e,1);t!==null&&Ze(t,e,1,-1)}function wu(e){var t=et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:e},t.queue=e,e=e.dispatch=wm.bind(null,Z,e),[t.memoizedState,e]}function Qr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Vd(){return Be().memoizedState}function Oi(e,t,n,r){var i=et();Z.flags|=e,i.memoizedState=Qr(1|t,n,void 0,r===void 0?null:r)}function $l(e,t,n,r){var i=Be();r=r===void 0?null:r;var l=void 0;if(re!==null){var o=re.memoizedState;if(l=o.destroy,r!==null&&ca(r,o.deps)){i.memoizedState=Qr(t,n,l,r);return}}Z.flags|=e,i.memoizedState=Qr(1|t,n,l,r)}function Su(e,t){return Oi(8390656,8,e,t)}function pa(e,t){return $l(2048,8,e,t)}function Xd(e,t){return $l(4,2,e,t)}function Qd(e,t){return $l(4,4,e,t)}function Yd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gd(e,t,n){return n=n!=null?n.concat([e]):null,$l(4,4,Yd.bind(null,t,e),n)}function ha(){}function Kd(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ca(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zd(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ca(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Jd(e,t,n){return fn&21?(qe(n,t)||(n=nd(),Z.lanes|=n,pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=n)}function vm(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=mo.transition;mo.transition={};try{e(!1),t()}finally{D=n,mo.transition=r}}function qd(){return Be().memoizedState}function ym(e,t,n){var r=At(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bd(e))ef(t,n);else if(n=Rd(e,t,n,r),n!==null){var i=ge();Ze(n,e,r,i),tf(n,t,r)}}function wm(e,t,n){var r=At(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bd(e))ef(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,a=l(o,n);if(i.hasEagerState=!0,i.eagerState=a,qe(a,o)){var u=t.interleaved;u===null?(i.next=i,la(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Rd(e,t,i,r),n!==null&&(i=ge(),Ze(n,e,r,i),tf(n,t,r))}}function bd(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function ef(e,t){_r=ul=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xs(e,n)}}var cl={readContext:Ae,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},Sm={readContext:Ae,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Su,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Oi(4194308,4,Yd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oi(4,2,e,t)},useMemo:function(e,t){var n=et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ym.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:wu,useDebugValue:ha,useDeferredValue:function(e){return et().memoizedState=e},useTransition:function(){var e=wu(!1),t=e[0];return e=vm.bind(null,e[1]),et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,i=et();if(G){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),se===null)throw Error(k(349));fn&30||Ad(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Su(Ud.bind(null,r,l,e),[e]),r.flags|=2048,Qr(9,Bd.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=et(),t=se.identifierPrefix;if(G){var n=ct,r=ut;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=xm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jm={readContext:Ae,useCallback:Kd,useContext:Ae,useEffect:pa,useImperativeHandle:Gd,useInsertionEffect:Xd,useLayoutEffect:Qd,useMemo:Zd,useReducer:go,useRef:Vd,useState:function(){return go(Xr)},useDebugValue:ha,useDeferredValue:function(e){var t=Be();return Jd(t,re.memoizedState,e)},useTransition:function(){var e=go(Xr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Md,useSyncExternalStore:Dd,useId:qd,unstable_isNewReconciler:!1},km={readContext:Ae,useCallback:Kd,useContext:Ae,useEffect:pa,useImperativeHandle:Gd,useInsertionEffect:Xd,useLayoutEffect:Qd,useMemo:Zd,useReducer:xo,useRef:Vd,useState:function(){return xo(Xr)},useDebugValue:ha,useDeferredValue:function(e){var t=Be();return re===null?t.memoizedState=e:Jd(t,re.memoizedState,e)},useTransition:function(){var e=xo(Xr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Md,useSyncExternalStore:Dd,useId:qd,unstable_isNewReconciler:!1};function Xe(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ls(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zl={isMounted:function(e){return(e=e._reactInternals)?gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),i=At(e),l=ft(r,i);l.payload=t,n!=null&&(l.callback=n),t=Mt(e,l,i),t!==null&&(Ze(t,e,i,r),Ii(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),i=At(e),l=ft(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Mt(e,l,i),t!==null&&(Ze(t,e,i,r),Ii(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=At(e),i=ft(n,r);i.tag=2,t!=null&&(i.callback=t),t=Mt(e,i,r),t!==null&&(Ze(t,e,r,n),Ii(t,e,r))}};function ju(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Dr(n,r)||!Dr(i,l):!0}function nf(e,t,n){var r=!1,i=Ht,l=t.contextType;return typeof l=="object"&&l!==null?l=Ae(l):(i=ke(t)?cn:he.current,r=t.contextTypes,l=(r=r!=null)?Vn(e,i):Ht),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function ku(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zl.enqueueReplaceState(t,t.state,null)}function os(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},oa(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Ae(l):(l=ke(t)?cn:he.current,i.context=Vn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ls(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&zl.enqueueReplaceState(i,i.state,null),sl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Gn(e,t){try{var n="",r=t;do n+=Jp(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function vo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ss(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Em=typeof WeakMap=="function"?WeakMap:Map;function rf(e,t,n){n=ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){fl||(fl=!0,xs=r),ss(e,t)},n}function lf(e,t,n){n=ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ss(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ss(e,t),typeof r!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Eu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Em;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Dm.bind(null,e,t,n),t.then(e,e))}function Cu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _u(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ft(-1,1),t.tag=2,Mt(n,t,1))),n.lanes|=1),e)}var Cm=vt.ReactCurrentOwner,we=!1;function me(e,t,n,r){t.child=e===null?Id(t,null,n,r):Qn(t,e.child,n,r)}function Pu(e,t,n,r,i){n=n.render;var l=t.ref;return An(t,i),r=da(e,t,n,r,l,i),n=fa(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xt(e,t,i)):(G&&n&&bs(t),t.flags|=1,me(e,t,r,i),t.child)}function Nu(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!ja(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,of(e,t,l,r,i)):(e=Ai(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Dr,n(o,r)&&e.ref===t.ref)return xt(e,t,i)}return t.flags|=1,e=Bt(l,r),e.ref=t.ref,e.return=t,t.child=e}function of(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Dr(l,r)&&e.ref===t.ref)if(we=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(we=!0);else return t.lanes=e.lanes,xt(e,t,i)}return as(e,t,n,r,i)}function sf(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(In,Ne),Ne|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(In,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,H(In,Ne),Ne|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,H(In,Ne),Ne|=r;return me(e,t,i,n),t.child}function af(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function as(e,t,n,r,i){var l=ke(n)?cn:he.current;return l=Vn(t,l),An(t,i),n=da(e,t,n,r,l,i),r=fa(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xt(e,t,i)):(G&&r&&bs(t),t.flags|=1,me(e,t,n,i),t.child)}function Tu(e,t,n,r,i){if(ke(n)){var l=!0;nl(t)}else l=!1;if(An(t,i),t.stateNode===null)Fi(e,t),nf(t,n,r),os(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ae(c):(c=ke(n)?cn:he.current,c=Vn(t,c));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&ku(t,o,r,c),Pt=!1;var g=t.memoizedState;o.state=g,sl(t,r,o,i),u=t.memoizedState,a!==r||g!==u||je.current||Pt?(typeof m=="function"&&(ls(t,n,m,r),u=t.memoizedState),(a=Pt||ju(t,n,a,r,g,u,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Od(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Xe(t.type,a),o.props=c,h=t.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ae(u):(u=ke(n)?cn:he.current,u=Vn(t,u));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||g!==u)&&ku(t,o,r,u),Pt=!1,g=t.memoizedState,o.state=g,sl(t,r,o,i);var w=t.memoizedState;a!==h||g!==w||je.current||Pt?(typeof y=="function"&&(ls(t,n,y,r),w=t.memoizedState),(c=Pt||ju(t,n,c,r,g,w,u)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return us(e,t,n,r,l,i)}function us(e,t,n,r,i,l){af(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&hu(t,n,!1),xt(e,t,l);r=t.stateNode,Cm.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Qn(t,e.child,null,l),t.child=Qn(t,null,a,l)):me(e,t,a,l),t.memoizedState=r.state,i&&hu(t,n,!0),t.child}function uf(e){var t=e.stateNode;t.pendingContext?pu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pu(e,t.context,!1),sa(e,t.containerInfo)}function $u(e,t,n,r,i){return Xn(),ta(i),t.flags|=256,me(e,t,n,r),t.child}var cs={dehydrated:null,treeContext:null,retryLane:0};function ds(e){return{baseLanes:e,cachePool:null,transitions:null}}function cf(e,t,n){var r=t.pendingProps,i=K.current,l=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),H(K,i&1),e===null)return rs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Rl(o,r,0,null),e=sn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ds(n),t.memoizedState=cs,e):ma(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return _m(e,t,o,r,a,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Bt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=Bt(a,l):(l=sn(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?ds(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=cs,r}return l=e.child,e=l.sibling,r=Bt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ma(e,t){return t=Rl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wi(e,t,n,r){return r!==null&&ta(r),Qn(t,e.child,null,n),e=ma(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _m(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=vo(Error(k(422))),wi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Rl({mode:"visible",children:r.children},i,0,null),l=sn(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Qn(t,e.child,null,o),t.child.memoizedState=ds(o),t.memoizedState=cs,l);if(!(t.mode&1))return wi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(k(419)),r=vo(l,r,void 0),wi(e,t,o,r)}if(a=(o&e.childLanes)!==0,we||a){if(r=se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,gt(e,i),Ze(r,e,i,-1))}return Sa(),r=vo(Error(k(421))),wi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Am.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,Te=Ft(i.nextSibling),$e=t,G=!0,Ye=null,e!==null&&(Oe[Fe++]=ut,Oe[Fe++]=ct,Oe[Fe++]=dn,ut=e.id,ct=e.overflow,dn=t),t=ma(t,r.children),t.flags|=4096,t)}function zu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),is(e.return,t,n)}function yo(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function df(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(me(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zu(e,n,t);else if(e.tag===19)zu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(K,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&al(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),yo(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&al(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}yo(t,!0,n,null,l);break;case"together":yo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pm(e,t,n){switch(t.tag){case 3:uf(t),Xn();break;case 5:Fd(t);break;case 1:ke(t.type)&&nl(t);break;case 4:sa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;H(ll,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?cf(e,t,n):(H(K,K.current&1),e=xt(e,t,n),e!==null?e.sibling:null);H(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return df(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,sf(e,t,n)}return xt(e,t,n)}var ff,fs,pf,hf;ff=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fs=function(){};pf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,nn(it.current);var l=null;switch(n){case"input":i=Ro(e,i),r=Ro(e,r),l=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),l=[];break;case"textarea":i=Mo(e,i),r=Mo(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=el)}Ao(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(zr.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(l||(l=[]),l.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(l=l||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(zr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&V("scroll",e),l||a===u||(l=[])):(l=l||[]).push(c,u))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};hf=function(e,t,n,r){n!==r&&(t.flags|=4)};function hr(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Nm(e,t,n){var r=t.pendingProps;switch(ea(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(t),null;case 1:return ke(t.type)&&tl(),fe(t),null;case 3:return r=t.stateNode,Yn(),Q(je),Q(he),ua(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(ws(Ye),Ye=null))),fs(e,t),fe(t),null;case 5:aa(t);var i=nn(Hr.current);if(n=t.type,e!==null&&t.stateNode!=null)pf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return fe(t),null}if(e=nn(it.current),vi(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[nt]=t,r[Ur]=l,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<yr.length;i++)V(yr[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Ba(r,l),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},V("invalid",r);break;case"textarea":Wa(r,l),V("invalid",r)}Ao(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&xi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&xi(r.textContent,a,e),i=["children",""+a]):zr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&V("scroll",r)}switch(n){case"input":ui(r),Ua(r,l,!0);break;case"textarea":ui(r),Ha(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=el)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Uc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[nt]=t,e[Ur]=r,ff(e,t,!1,!1),t.stateNode=e;e:{switch(o=Bo(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<yr.length;i++)V(yr[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":Ba(e,r),i=Ro(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),V("invalid",e);break;case"textarea":Wa(e,r),i=Mo(e,r),V("invalid",e);break;default:i=r}Ao(n,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="style"?Vc(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Wc(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Lr(e,u):typeof u=="number"&&Lr(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(zr.hasOwnProperty(l)?u!=null&&l==="onScroll"&&V("scroll",e):u!=null&&As(e,l,u,o))}switch(n){case"input":ui(e),Ua(e,r,!1);break;case"textarea":ui(e),Ha(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?On(e,!!r.multiple,l,!1):r.defaultValue!=null&&On(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=el)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return fe(t),null;case 6:if(e&&t.stateNode!=null)hf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=nn(Hr.current),nn(it.current),vi(t)){if(r=t.stateNode,n=t.memoizedProps,r[nt]=t,(l=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:xi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xi(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r}return fe(t),null;case 13:if(Q(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Te!==null&&t.mode&1&&!(t.flags&128))zd(),Xn(),t.flags|=98560,l=!1;else if(l=vi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(k(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(k(317));l[nt]=t}else Xn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;fe(t),l=!1}else Ye!==null&&(ws(Ye),Ye=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?ie===0&&(ie=3):Sa())),t.updateQueue!==null&&(t.flags|=4),fe(t),null);case 4:return Yn(),fs(e,t),e===null&&Ar(t.stateNode.containerInfo),fe(t),null;case 10:return ia(t.type._context),fe(t),null;case 17:return ke(t.type)&&tl(),fe(t),null;case 19:if(Q(K),l=t.memoizedState,l===null)return fe(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)hr(l,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=al(e),o!==null){for(t.flags|=128,hr(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(K,K.current&1|2),t.child}e=e.sibling}l.tail!==null&&b()>Kn&&(t.flags|=128,r=!0,hr(l,!1),t.lanes=4194304)}else{if(!r)if(e=al(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),hr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!G)return fe(t),null}else 2*b()-l.renderingStartTime>Kn&&n!==1073741824&&(t.flags|=128,r=!0,hr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=b(),t.sibling=null,n=K.current,H(K,r?n&1|2:n&1),t):(fe(t),null);case 22:case 23:return wa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Tm(e,t){switch(ea(t),t.tag){case 1:return ke(t.type)&&tl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yn(),Q(je),Q(he),ua(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return aa(t),null;case 13:if(Q(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Xn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(K),null;case 4:return Yn(),null;case 10:return ia(t.type._context),null;case 22:case 23:return wa(),null;case 24:return null;default:return null}}var Si=!1,pe=!1,$m=typeof WeakSet=="function"?WeakSet:Set,T=null;function Ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function ps(e,t,n){try{n()}catch(r){q(e,t,r)}}var Lu=!1;function zm(e,t){if(Zo=Ji,e=vd(),qs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,m=0,h=e,g=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==l||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(y=h.firstChild)!==null;)g=h,h=y;for(;;){if(h===e)break t;if(g===n&&++c===i&&(a=o),g===l&&++m===r&&(u=o),(y=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jo={focusedElem:e,selectionRange:n},Ji=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,_=w.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?S:Xe(t.type,S),_);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){q(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return w=Lu,Lu=!1,w}function Pr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&ps(t,n,l)}i=i.next}while(i!==r)}}function Ll(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function hs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function mf(e){var t=e.alternate;t!==null&&(e.alternate=null,mf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[Ur],delete t[es],delete t[pm],delete t[hm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gf(e){return e.tag===5||e.tag===3||e.tag===4}function Iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ms(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=el));else if(r!==4&&(e=e.child,e!==null))for(ms(e,t,n),e=e.sibling;e!==null;)ms(e,t,n),e=e.sibling}function gs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(gs(e,t,n),e=e.sibling;e!==null;)gs(e,t,n),e=e.sibling}var ae=null,Qe=!1;function St(e,t,n){for(n=n.child;n!==null;)xf(e,t,n),n=n.sibling}function xf(e,t,n){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(El,n)}catch{}switch(n.tag){case 5:pe||Ln(n,t);case 6:var r=ae,i=Qe;ae=null,St(e,t,n),ae=r,Qe=i,ae!==null&&(Qe?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(Qe?(e=ae,n=n.stateNode,e.nodeType===8?fo(e.parentNode,n):e.nodeType===1&&fo(e,n),Fr(e)):fo(ae,n.stateNode));break;case 4:r=ae,i=Qe,ae=n.stateNode.containerInfo,Qe=!0,St(e,t,n),ae=r,Qe=i;break;case 0:case 11:case 14:case 15:if(!pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&ps(n,t,o),i=i.next}while(i!==r)}St(e,t,n);break;case 1:if(!pe&&(Ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){q(n,t,a)}St(e,t,n);break;case 21:St(e,t,n);break;case 22:n.mode&1?(pe=(r=pe)||n.memoizedState!==null,St(e,t,n),pe=r):St(e,t,n);break;default:St(e,t,n)}}function Ru(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $m),t.forEach(function(r){var i=Bm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function He(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ae=a.stateNode,Qe=!1;break e;case 3:ae=a.stateNode.containerInfo,Qe=!0;break e;case 4:ae=a.stateNode.containerInfo,Qe=!0;break e}a=a.return}if(ae===null)throw Error(k(160));xf(l,o,i),ae=null,Qe=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){q(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vf(t,e),t=t.sibling}function vf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(t,e),be(e),r&4){try{Pr(3,e,e.return),Ll(3,e)}catch(S){q(e,e.return,S)}try{Pr(5,e,e.return)}catch(S){q(e,e.return,S)}}break;case 1:He(t,e),be(e),r&512&&n!==null&&Ln(n,n.return);break;case 5:if(He(t,e),be(e),r&512&&n!==null&&Ln(n,n.return),e.flags&32){var i=e.stateNode;try{Lr(i,"")}catch(S){q(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Ac(i,l),Bo(a,o);var c=Bo(a,l);for(o=0;o<u.length;o+=2){var m=u[o],h=u[o+1];m==="style"?Vc(i,h):m==="dangerouslySetInnerHTML"?Wc(i,h):m==="children"?Lr(i,h):As(i,m,h,c)}switch(a){case"input":Oo(i,l);break;case"textarea":Bc(i,l);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?On(i,!!l.multiple,y,!1):g!==!!l.multiple&&(l.defaultValue!=null?On(i,!!l.multiple,l.defaultValue,!0):On(i,!!l.multiple,l.multiple?[]:"",!1))}i[Ur]=l}catch(S){q(e,e.return,S)}}break;case 6:if(He(t,e),be(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(S){q(e,e.return,S)}}break;case 3:if(He(t,e),be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fr(t.containerInfo)}catch(S){q(e,e.return,S)}break;case 4:He(t,e),be(e);break;case 13:He(t,e),be(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(va=b())),r&4&&Ru(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(pe=(c=pe)||m,He(t,e),pe=c):He(t,e),be(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(T=e,m=e.child;m!==null;){for(h=T=m;T!==null;){switch(g=T,y=g.child,g.tag){case 0:case 11:case 14:case 15:Pr(4,g,g.return);break;case 1:Ln(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(S){q(r,n,S)}}break;case 5:Ln(g,g.return);break;case 22:if(g.memoizedState!==null){Fu(h);continue}}y!==null?(y.return=g,T=y):Fu(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{i=h.stateNode,c?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Hc("display",o))}catch(S){q(e,e.return,S)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(S){q(e,e.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:He(t,e),be(e),r&4&&Ru(e);break;case 21:break;default:He(t,e),be(e)}}function be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gf(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Lr(i,""),r.flags&=-33);var l=Iu(e);gs(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Iu(e);ms(e,a,o);break;default:throw Error(k(161))}}catch(u){q(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lm(e,t,n){T=e,yf(e)}function yf(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Si;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||pe;a=Si;var c=pe;if(Si=o,(pe=u)&&!c)for(T=i;T!==null;)o=T,u=o.child,o.tag===22&&o.memoizedState!==null?Mu(i):u!==null?(u.return=o,T=u):Mu(i);for(;l!==null;)T=l,yf(l),l=l.sibling;T=i,Si=a,pe=c}Ou(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,T=l):Ou(e)}}function Ou(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||Ll(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Xe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&yu(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}yu(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Fr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}pe||t.flags&512&&hs(t)}catch(g){q(t,t.return,g)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Fu(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Mu(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ll(4,t)}catch(u){q(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){q(t,i,u)}}var l=t.return;try{hs(t)}catch(u){q(t,l,u)}break;case 5:var o=t.return;try{hs(t)}catch(u){q(t,o,u)}}}catch(u){q(t,t.return,u)}if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,T=a;break}T=t.return}}var Im=Math.ceil,dl=vt.ReactCurrentDispatcher,ga=vt.ReactCurrentOwner,De=vt.ReactCurrentBatchConfig,F=0,se=null,te=null,ue=0,Ne=0,In=Xt(0),ie=0,Yr=null,pn=0,Il=0,xa=0,Nr=null,ye=null,va=0,Kn=1/0,ot=null,fl=!1,xs=null,Dt=null,ji=!1,zt=null,pl=0,Tr=0,vs=null,Mi=-1,Di=0;function ge(){return F&6?b():Mi!==-1?Mi:Mi=b()}function At(e){return e.mode&1?F&2&&ue!==0?ue&-ue:gm.transition!==null?(Di===0&&(Di=nd()),Di):(e=D,e!==0||(e=window.event,e=e===void 0?16:ud(e.type)),e):1}function Ze(e,t,n,r){if(50<Tr)throw Tr=0,vs=null,Error(k(185));qr(e,n,r),(!(F&2)||e!==se)&&(e===se&&(!(F&2)&&(Il|=n),ie===4&&Tt(e,ue)),Ee(e,r),n===1&&F===0&&!(t.mode&1)&&(Kn=b()+500,Tl&&Qt()))}function Ee(e,t){var n=e.callbackNode;gh(e,t);var r=Zi(e,e===se?ue:0);if(r===0)n!==null&&Qa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Qa(n),t===1)e.tag===0?mm(Du.bind(null,e)):Nd(Du.bind(null,e)),dm(function(){!(F&6)&&Qt()}),n=null;else{switch(rd(r)){case 1:n=Vs;break;case 4:n=ed;break;case 16:n=Ki;break;case 536870912:n=td;break;default:n=Ki}n=Pf(n,wf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wf(e,t){if(Mi=-1,Di=0,F&6)throw Error(k(327));var n=e.callbackNode;if(Bn()&&e.callbackNode!==n)return null;var r=Zi(e,e===se?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=hl(e,r);else{t=r;var i=F;F|=2;var l=jf();(se!==e||ue!==t)&&(ot=null,Kn=b()+500,on(e,t));do try{Fm();break}catch(a){Sf(e,a)}while(!0);ra(),dl.current=l,F=i,te!==null?t=0:(se=null,ue=0,t=ie)}if(t!==0){if(t===2&&(i=Xo(e),i!==0&&(r=i,t=ys(e,i))),t===1)throw n=Yr,on(e,0),Tt(e,r),Ee(e,b()),n;if(t===6)Tt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Rm(i)&&(t=hl(e,r),t===2&&(l=Xo(e),l!==0&&(r=l,t=ys(e,l))),t===1))throw n=Yr,on(e,0),Tt(e,r),Ee(e,b()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:bt(e,ye,ot);break;case 3:if(Tt(e,r),(r&130023424)===r&&(t=va+500-b(),10<t)){if(Zi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=bo(bt.bind(null,e,ye,ot),t);break}bt(e,ye,ot);break;case 4:if(Tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ke(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=b()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Im(r/1960))-r,10<r){e.timeoutHandle=bo(bt.bind(null,e,ye,ot),r);break}bt(e,ye,ot);break;case 5:bt(e,ye,ot);break;default:throw Error(k(329))}}}return Ee(e,b()),e.callbackNode===n?wf.bind(null,e):null}function ys(e,t){var n=Nr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=hl(e,t),e!==2&&(t=ye,ye=n,t!==null&&ws(t)),e}function ws(e){ye===null?ye=e:ye.push.apply(ye,e)}function Rm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!qe(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tt(e,t){for(t&=~xa,t&=~Il,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function Du(e){if(F&6)throw Error(k(327));Bn();var t=Zi(e,0);if(!(t&1))return Ee(e,b()),null;var n=hl(e,t);if(e.tag!==0&&n===2){var r=Xo(e);r!==0&&(t=r,n=ys(e,r))}if(n===1)throw n=Yr,on(e,0),Tt(e,t),Ee(e,b()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bt(e,ye,ot),Ee(e,b()),null}function ya(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(Kn=b()+500,Tl&&Qt())}}function hn(e){zt!==null&&zt.tag===0&&!(F&6)&&Bn();var t=F;F|=1;var n=De.transition,r=D;try{if(De.transition=null,D=1,e)return e()}finally{D=r,De.transition=n,F=t,!(F&6)&&Qt()}}function wa(){Ne=In.current,Q(In)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,cm(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(ea(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&tl();break;case 3:Yn(),Q(je),Q(he),ua();break;case 5:aa(r);break;case 4:Yn();break;case 13:Q(K);break;case 19:Q(K);break;case 10:ia(r.type._context);break;case 22:case 23:wa()}n=n.return}if(se=e,te=e=Bt(e.current,null),ue=Ne=t,ie=0,Yr=null,xa=Il=pn=0,ye=Nr=null,tn!==null){for(t=0;t<tn.length;t++)if(n=tn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}tn=null}return e}function Sf(e,t){do{var n=te;try{if(ra(),Ri.current=cl,ul){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ul=!1}if(fn=0,le=re=Z=null,_r=!1,Vr=0,ga.current=null,n===null||n.return===null){ie=1,Yr=t,te=null;break}e:{var l=e,o=n.return,a=n,u=t;if(t=ue,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=a,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Cu(o);if(y!==null){y.flags&=-257,_u(y,o,a,l,t),y.mode&1&&Eu(l,c,t),t=y,u=c;var w=t.updateQueue;if(w===null){var S=new Set;S.add(u),t.updateQueue=S}else w.add(u);break e}else{if(!(t&1)){Eu(l,c,t),Sa();break e}u=Error(k(426))}}else if(G&&a.mode&1){var _=Cu(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),_u(_,o,a,l,t),ta(Gn(u,a));break e}}l=u=Gn(u,a),ie!==4&&(ie=2),Nr===null?Nr=[l]:Nr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=rf(l,u,t);vu(l,f);break e;case 1:a=u;var d=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Dt===null||!Dt.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var v=lf(l,a,t);vu(l,v);break e}}l=l.return}while(l!==null)}Ef(n)}catch(E){t=E,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function jf(){var e=dl.current;return dl.current=cl,e===null?cl:e}function Sa(){(ie===0||ie===3||ie===2)&&(ie=4),se===null||!(pn&268435455)&&!(Il&268435455)||Tt(se,ue)}function hl(e,t){var n=F;F|=2;var r=jf();(se!==e||ue!==t)&&(ot=null,on(e,t));do try{Om();break}catch(i){Sf(e,i)}while(!0);if(ra(),F=n,dl.current=r,te!==null)throw Error(k(261));return se=null,ue=0,ie}function Om(){for(;te!==null;)kf(te)}function Fm(){for(;te!==null&&!sh();)kf(te)}function kf(e){var t=_f(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?Ef(e):te=t,ga.current=null}function Ef(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Tm(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,te=null;return}}else if(n=Nm(n,t,Ne),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);ie===0&&(ie=5)}function bt(e,t,n){var r=D,i=De.transition;try{De.transition=null,D=1,Mm(e,t,n,r)}finally{De.transition=i,D=r}return null}function Mm(e,t,n,r){do Bn();while(zt!==null);if(F&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(xh(e,l),e===se&&(te=se=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ji||(ji=!0,Pf(Ki,function(){return Bn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=De.transition,De.transition=null;var o=D;D=1;var a=F;F|=4,ga.current=null,zm(e,n),vf(n,e),rm(Jo),Ji=!!Zo,Jo=Zo=null,e.current=n,Lm(n),ah(),F=a,D=o,De.transition=l}else e.current=n;if(ji&&(ji=!1,zt=e,pl=i),l=e.pendingLanes,l===0&&(Dt=null),dh(n.stateNode),Ee(e,b()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(fl)throw fl=!1,e=xs,xs=null,e;return pl&1&&e.tag!==0&&Bn(),l=e.pendingLanes,l&1?e===vs?Tr++:(Tr=0,vs=e):Tr=0,Qt(),null}function Bn(){if(zt!==null){var e=rd(pl),t=De.transition,n=D;try{if(De.transition=null,D=16>e?16:e,zt===null)var r=!1;else{if(e=zt,zt=null,pl=0,F&6)throw Error(k(331));var i=F;for(F|=4,T=e.current;T!==null;){var l=T,o=l.child;if(T.flags&16){var a=l.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(T=c;T!==null;){var m=T;switch(m.tag){case 0:case 11:case 15:Pr(8,m,l)}var h=m.child;if(h!==null)h.return=m,T=h;else for(;T!==null;){m=T;var g=m.sibling,y=m.return;if(mf(m),m===c){T=null;break}if(g!==null){g.return=y,T=g;break}T=y}}}var w=l.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var _=S.sibling;S.sibling=null,S=_}while(S!==null)}}T=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,T=o;else e:for(;T!==null;){if(l=T,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Pr(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,T=f;break e}T=l.return}}var d=e.current;for(T=d;T!==null;){o=T;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,T=p;else e:for(o=d;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ll(9,a)}}catch(E){q(a,a.return,E)}if(a===o){T=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,T=v;break e}T=a.return}}if(F=i,Qt(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(El,e)}catch{}r=!0}return r}finally{D=n,De.transition=t}}return!1}function Au(e,t,n){t=Gn(n,t),t=rf(e,t,1),e=Mt(e,t,1),t=ge(),e!==null&&(qr(e,1,t),Ee(e,t))}function q(e,t,n){if(e.tag===3)Au(e,e,n);else for(;t!==null;){if(t.tag===3){Au(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dt===null||!Dt.has(r))){e=Gn(n,e),e=lf(t,e,1),t=Mt(t,e,1),e=ge(),t!==null&&(qr(t,1,e),Ee(t,e));break}}t=t.return}}function Dm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(ue&n)===n&&(ie===4||ie===3&&(ue&130023424)===ue&&500>b()-va?on(e,0):xa|=n),Ee(e,t)}function Cf(e,t){t===0&&(e.mode&1?(t=fi,fi<<=1,!(fi&130023424)&&(fi=4194304)):t=1);var n=ge();e=gt(e,t),e!==null&&(qr(e,t,n),Ee(e,n))}function Am(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cf(e,n)}function Bm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Cf(e,n)}var _f;_f=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)we=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return we=!1,Pm(e,t,n);we=!!(e.flags&131072)}else we=!1,G&&t.flags&1048576&&Td(t,il,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fi(e,t),e=t.pendingProps;var i=Vn(t,he.current);An(t,n),i=da(null,t,r,e,i,n);var l=fa();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(l=!0,nl(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,oa(t),i.updater=zl,t.stateNode=i,i._reactInternals=t,os(t,r,e,n),t=us(null,t,r,!0,l,n)):(t.tag=0,G&&l&&bs(t),me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Wm(r),e=Xe(r,e),i){case 0:t=as(null,t,r,e,n);break e;case 1:t=Tu(null,t,r,e,n);break e;case 11:t=Pu(null,t,r,e,n);break e;case 14:t=Nu(null,t,r,Xe(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),as(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),Tu(e,t,r,i,n);case 3:e:{if(uf(t),e===null)throw Error(k(387));r=t.pendingProps,l=t.memoizedState,i=l.element,Od(e,t),sl(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=Gn(Error(k(423)),t),t=$u(e,t,r,n,i);break e}else if(r!==i){i=Gn(Error(k(424)),t),t=$u(e,t,r,n,i);break e}else for(Te=Ft(t.stateNode.containerInfo.firstChild),$e=t,G=!0,Ye=null,n=Id(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xn(),r===i){t=xt(e,t,n);break e}me(e,t,r,n)}t=t.child}return t;case 5:return Fd(t),e===null&&rs(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,qo(r,i)?o=null:l!==null&&qo(r,l)&&(t.flags|=32),af(e,t),me(e,t,o,n),t.child;case 6:return e===null&&rs(t),null;case 13:return cf(e,t,n);case 4:return sa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Qn(t,null,r,n):me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),Pu(e,t,r,i,n);case 7:return me(e,t,t.pendingProps,n),t.child;case 8:return me(e,t,t.pendingProps.children,n),t.child;case 12:return me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,H(ll,r._currentValue),r._currentValue=o,l!==null)if(qe(l.value,o)){if(l.children===i.children&&!je.current){t=xt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=ft(-1,n&-n),u.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),is(l.return,n,t),a.lanes|=n;break}u=u.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),is(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,An(t,n),i=Ae(i),r=r(i),t.flags|=1,me(e,t,r,n),t.child;case 14:return r=t.type,i=Xe(r,t.pendingProps),i=Xe(r.type,i),Nu(e,t,r,i,n);case 15:return of(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),Fi(e,t),t.tag=1,ke(r)?(e=!0,nl(t)):e=!1,An(t,n),nf(t,r,i),os(t,r,i,n),us(null,t,r,!0,e,n);case 19:return df(e,t,n);case 22:return sf(e,t,n)}throw Error(k(156,t.tag))};function Pf(e,t){return bc(e,t)}function Um(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,n,r){return new Um(e,t,n,r)}function ja(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wm(e){if(typeof e=="function")return ja(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Us)return 11;if(e===Ws)return 14}return 2}function Bt(e,t){var n=e.alternate;return n===null?(n=Me(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ai(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")ja(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case kn:return sn(n.children,i,l,t);case Bs:o=8,i|=8;break;case $o:return e=Me(12,n,t,i|2),e.elementType=$o,e.lanes=l,e;case zo:return e=Me(13,n,t,i),e.elementType=zo,e.lanes=l,e;case Lo:return e=Me(19,n,t,i),e.elementType=Lo,e.lanes=l,e;case Fc:return Rl(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rc:o=10;break e;case Oc:o=9;break e;case Us:o=11;break e;case Ws:o=14;break e;case _t:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Me(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function sn(e,t,n,r){return e=Me(7,e,r,t),e.lanes=n,e}function Rl(e,t,n,r){return e=Me(22,e,r,t),e.elementType=Fc,e.lanes=n,e.stateNode={isHidden:!1},e}function wo(e,t,n){return e=Me(6,e,null,t),e.lanes=n,e}function So(e,t,n){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Hm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=eo(0),this.expirationTimes=eo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ka(e,t,n,r,i,l,o,a,u){return e=new Hm(e,t,n,a,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Me(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},oa(l),e}function Vm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Nf(e){if(!e)return Ht;e=e._reactInternals;e:{if(gn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(ke(n))return Pd(e,n,t)}return t}function Tf(e,t,n,r,i,l,o,a,u){return e=ka(n,r,!0,e,i,l,o,a,u),e.context=Nf(null),n=e.current,r=ge(),i=At(n),l=ft(r,i),l.callback=t??null,Mt(n,l,i),e.current.lanes=i,qr(e,i,r),Ee(e,r),e}function Ol(e,t,n,r){var i=t.current,l=ge(),o=At(i);return n=Nf(n),t.context===null?t.context=n:t.pendingContext=n,t=ft(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Mt(i,t,o),e!==null&&(Ze(e,i,o,l),Ii(e,i,o)),o}function ml(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ea(e,t){Bu(e,t),(e=e.alternate)&&Bu(e,t)}function Xm(){return null}var $f=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ca(e){this._internalRoot=e}Fl.prototype.render=Ca.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Ol(e,t,null,null)};Fl.prototype.unmount=Ca.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hn(function(){Ol(null,e,null,null)}),t[mt]=null}};function Fl(e){this._internalRoot=e}Fl.prototype.unstable_scheduleHydration=function(e){if(e){var t=od();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nt.length&&t!==0&&t<Nt[n].priority;n++);Nt.splice(n,0,e),n===0&&ad(e)}};function _a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uu(){}function Qm(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var c=ml(o);l.call(c)}}var o=Tf(t,r,e,0,null,!1,!1,"",Uu);return e._reactRootContainer=o,e[mt]=o.current,Ar(e.nodeType===8?e.parentNode:e),hn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ml(u);a.call(c)}}var u=ka(e,0,!1,null,null,!1,!1,"",Uu);return e._reactRootContainer=u,e[mt]=u.current,Ar(e.nodeType===8?e.parentNode:e),hn(function(){Ol(t,u,n,r)}),u}function Dl(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var a=i;i=function(){var u=ml(o);a.call(u)}}Ol(t,o,e,i)}else o=Qm(n,t,e,i,r);return ml(o)}id=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=vr(t.pendingLanes);n!==0&&(Xs(t,n|1),Ee(t,b()),!(F&6)&&(Kn=b()+500,Qt()))}break;case 13:hn(function(){var r=gt(e,1);if(r!==null){var i=ge();Ze(r,e,1,i)}}),Ea(e,1)}};Qs=function(e){if(e.tag===13){var t=gt(e,134217728);if(t!==null){var n=ge();Ze(t,e,134217728,n)}Ea(e,134217728)}};ld=function(e){if(e.tag===13){var t=At(e),n=gt(e,t);if(n!==null){var r=ge();Ze(n,e,t,r)}Ea(e,t)}};od=function(){return D};sd=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};Wo=function(e,t,n){switch(t){case"input":if(Oo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Nl(r);if(!i)throw Error(k(90));Dc(r),Oo(r,i)}}}break;case"textarea":Bc(e,n);break;case"select":t=n.value,t!=null&&On(e,!!n.multiple,t,!1)}};Yc=ya;Gc=hn;var Ym={usingClientEntryPoint:!1,Events:[ei,Pn,Nl,Xc,Qc,ya]},mr={findFiberByHostInstance:en,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gm={bundleType:mr.bundleType,version:mr.version,rendererPackageName:mr.rendererPackageName,rendererConfig:mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Jc(e),e===null?null:e.stateNode},findFiberByHostInstance:mr.findFiberByHostInstance||Xm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ki.isDisabled&&ki.supportsFiber)try{El=ki.inject(Gm),rt=ki}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ym;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_a(t))throw Error(k(200));return Vm(e,t,null,n)};Le.createRoot=function(e,t){if(!_a(e))throw Error(k(299));var n=!1,r="",i=$f;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ka(e,1,!1,null,null,n,!1,r,i),e[mt]=t.current,Ar(e.nodeType===8?e.parentNode:e),new Ca(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Jc(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return hn(e)};Le.hydrate=function(e,t,n){if(!Ml(t))throw Error(k(200));return Dl(null,e,t,!0,n)};Le.hydrateRoot=function(e,t,n){if(!_a(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=$f;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Tf(t,null,e,1,n??null,i,!1,l,o),e[mt]=t.current,Ar(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Fl(t)};Le.render=function(e,t,n){if(!Ml(t))throw Error(k(200));return Dl(null,e,t,!1,n)};Le.unmountComponentAtNode=function(e){if(!Ml(e))throw Error(k(40));return e._reactRootContainer?(hn(function(){Dl(null,null,e,!1,function(){e._reactRootContainer=null,e[mt]=null})}),!0):!1};Le.unstable_batchedUpdates=ya;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ml(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Dl(e,t,n,!1,r)};Le.version="18.3.1-next-f1338f8080-20240426";function zf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zf)}catch(e){console.error(e)}}zf(),$c.exports=Le;var Km=$c.exports,Lf,Wu=Km;Lf=Wu.createRoot,Wu.hydrateRoot;/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gr(){return Gr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gr.apply(this,arguments)}var Lt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Lt||(Lt={}));const Hu="popstate";function Zm(e){e===void 0&&(e={});function t(r,i){let{pathname:l,search:o,hash:a}=r.location;return Ss("",{pathname:l,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:gl(i)}return qm(t,n,null,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function If(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Jm(){return Math.random().toString(36).substr(2,8)}function Vu(e,t){return{usr:e.state,key:e.key,idx:t}}function Ss(e,t,n,r){return n===void 0&&(n=null),Gr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ir(t):t,{state:n,key:t&&t.key||r||Jm()})}function gl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ir(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function qm(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,o=i.history,a=Lt.Pop,u=null,c=m();c==null&&(c=0,o.replaceState(Gr({},o.state,{idx:c}),""));function m(){return(o.state||{idx:null}).idx}function h(){a=Lt.Pop;let _=m(),f=_==null?null:_-c;c=_,u&&u({action:a,location:S.location,delta:f})}function g(_,f){a=Lt.Push;let d=Ss(S.location,_,f);c=m()+1;let p=Vu(d,c),v=S.createHref(d);try{o.pushState(p,"",v)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(v)}l&&u&&u({action:a,location:S.location,delta:1})}function y(_,f){a=Lt.Replace;let d=Ss(S.location,_,f);c=m();let p=Vu(d,c),v=S.createHref(d);o.replaceState(p,"",v),l&&u&&u({action:a,location:S.location,delta:0})}function w(_){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof _=="string"?_:gl(_);return d=d.replace(/ $/,"%20"),ne(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let S={get action(){return a},get location(){return e(i,o)},listen(_){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Hu,h),u=_,()=>{i.removeEventListener(Hu,h),u=null}},createHref(_){return t(i,_)},createURL:w,encodeLocation(_){let f=w(_);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:y,go(_){return o.go(_)}};return S}var Xu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Xu||(Xu={}));function bm(e,t,n){return n===void 0&&(n="/"),e0(e,t,n,!1)}function e0(e,t,n,r){let i=typeof t=="string"?ir(t):t,l=Pa(i.pathname||"/",n);if(l==null)return null;let o=Rf(e);t0(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=f0(l);a=c0(o[u],c,r)}return a}function Rf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(l,o,a)=>{let u={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};u.relativePath.startsWith("/")&&(ne(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ut([r,u.relativePath]),m=n.concat(u);l.children&&l.children.length>0&&(ne(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Rf(l.children,t,m,c)),!(l.path==null&&!l.index)&&t.push({path:c,score:a0(c,l.index),routesMeta:m})};return e.forEach((l,o)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))i(l,o);else for(let u of Of(l.path))i(l,o,u)}),t}function Of(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let o=Of(r.join("/")),a=[];return a.push(...o.map(u=>u===""?l:[l,u].join("/"))),i&&a.push(...o),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function t0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:u0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const n0=/^:[\w-]+$/,r0=3,i0=2,l0=1,o0=10,s0=-2,Qu=e=>e==="*";function a0(e,t){let n=e.split("/"),r=n.length;return n.some(Qu)&&(r+=s0),t&&(r+=i0),n.filter(i=>!Qu(i)).reduce((i,l)=>i+(n0.test(l)?r0:l===""?l0:o0),r)}function u0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function c0(e,t,n){let{routesMeta:r}=e,i={},l="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,m=l==="/"?t:t.slice(l.length)||"/",h=Yu({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},m),g=u.route;if(!h&&c&&n&&!r[r.length-1].route.index&&(h=Yu({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},m)),!h)return null;Object.assign(i,h.params),o.push({params:i,pathname:Ut([l,h.pathname]),pathnameBase:g0(Ut([l,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(l=Ut([l,h.pathnameBase]))}return o}function Yu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=d0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,m,h)=>{let{paramName:g,isOptional:y}=m;if(g==="*"){let S=a[h]||"";o=l.slice(0,l.length-S.length).replace(/(.)\/+$/,"$1")}const w=a[h];return y&&!w?c[g]=void 0:c[g]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:l,pathnameBase:o,pattern:e}}function d0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),If(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function f0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return If(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Pa(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function p0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ir(e):e;return{pathname:n?n.startsWith("/")?n:h0(n,t):t,search:x0(r),hash:v0(i)}}function h0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function jo(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function m0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ff(e,t){let n=m0(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Mf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ir(e):(i=Gr({},e),ne(!i.pathname||!i.pathname.includes("?"),jo("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),jo("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),jo("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,a;if(o==null)a=n;else{let h=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}a=h>=0?t[h]:"/"}let u=p0(i,a),c=o&&o!=="/"&&o.endsWith("/"),m=(l||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||m)&&(u.pathname+="/"),u}const Ut=e=>e.join("/").replace(/\/\/+/g,"/"),g0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),x0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,v0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function y0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Df=["post","put","patch","delete"];new Set(Df);const w0=["get",...Df];new Set(w0);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kr(){return Kr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Kr.apply(this,arguments)}const Na=P.createContext(null),S0=P.createContext(null),xn=P.createContext(null),Al=P.createContext(null),vn=P.createContext({outlet:null,matches:[],isDataRoute:!1}),Af=P.createContext(null);function j0(e,t){let{relative:n}=t===void 0?{}:t;ni()||ne(!1);let{basename:r,navigator:i}=P.useContext(xn),{hash:l,pathname:o,search:a}=Wf(e,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Ut([r,o])),i.createHref({pathname:u,search:a,hash:l})}function ni(){return P.useContext(Al)!=null}function ri(){return ni()||ne(!1),P.useContext(Al).location}function Bf(e){P.useContext(xn).static||P.useLayoutEffect(e)}function Uf(){let{isDataRoute:e}=P.useContext(vn);return e?O0():k0()}function k0(){ni()||ne(!1);let e=P.useContext(Na),{basename:t,future:n,navigator:r}=P.useContext(xn),{matches:i}=P.useContext(vn),{pathname:l}=ri(),o=JSON.stringify(Ff(i,n.v7_relativeSplatPath)),a=P.useRef(!1);return Bf(()=>{a.current=!0}),P.useCallback(function(c,m){if(m===void 0&&(m={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let h=Mf(c,JSON.parse(o),l,m.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Ut([t,h.pathname])),(m.replace?r.replace:r.push)(h,m.state,m)},[t,r,o,l,e])}function Wf(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=P.useContext(xn),{matches:i}=P.useContext(vn),{pathname:l}=ri(),o=JSON.stringify(Ff(i,r.v7_relativeSplatPath));return P.useMemo(()=>Mf(e,JSON.parse(o),l,n==="path"),[e,o,l,n])}function E0(e,t){return C0(e,t)}function C0(e,t,n,r){ni()||ne(!1);let{navigator:i}=P.useContext(xn),{matches:l}=P.useContext(vn),o=l[l.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=ri(),m;if(t){var h;let _=typeof t=="string"?ir(t):t;u==="/"||(h=_.pathname)!=null&&h.startsWith(u)||ne(!1),m=_}else m=c;let g=m.pathname||"/",y=g;if(u!=="/"){let _=u.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(_.length).join("/")}let w=bm(e,{pathname:y}),S=$0(w&&w.map(_=>Object.assign({},_,{params:Object.assign({},a,_.params),pathname:Ut([u,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?u:Ut([u,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),l,n,r);return t&&S?P.createElement(Al.Provider,{value:{location:Kr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Lt.Pop}},S):S}function _0(){let e=R0(),t=y0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),n?P.createElement("pre",{style:i},n):null,null)}const P0=P.createElement(_0,null);class N0 extends P.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?P.createElement(vn.Provider,{value:this.props.routeContext},P.createElement(Af.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function T0(e){let{routeContext:t,match:n,children:r}=e,i=P.useContext(Na);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(vn.Provider,{value:t},r)}function $0(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let m=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);m>=0||ne(!1),o=o.slice(0,Math.min(o.length,m+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<o.length;m++){let h=o[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=m),h.route.id){let{loaderData:g,errors:y}=n,w=h.route.loader&&g[h.route.id]===void 0&&(!y||y[h.route.id]===void 0);if(h.route.lazy||w){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((m,h,g)=>{let y,w=!1,S=null,_=null;n&&(y=a&&h.route.id?a[h.route.id]:void 0,S=h.route.errorElement||P0,u&&(c<0&&g===0?(w=!0,_=null):c===g&&(w=!0,_=h.route.hydrateFallbackElement||null)));let f=t.concat(o.slice(0,g+1)),d=()=>{let p;return y?p=S:w?p=_:h.route.Component?p=P.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=m,P.createElement(T0,{match:h,routeContext:{outlet:m,matches:f,isDataRoute:n!=null},children:p})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?P.createElement(N0,{location:n.location,revalidation:n.revalidation,component:S,error:y,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var Hf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Hf||{}),xl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(xl||{});function z0(e){let t=P.useContext(Na);return t||ne(!1),t}function L0(e){let t=P.useContext(S0);return t||ne(!1),t}function I0(e){let t=P.useContext(vn);return t||ne(!1),t}function Vf(e){let t=I0(),n=t.matches[t.matches.length-1];return n.route.id||ne(!1),n.route.id}function R0(){var e;let t=P.useContext(Af),n=L0(xl.UseRouteError),r=Vf(xl.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function O0(){let{router:e}=z0(Hf.UseNavigateStable),t=Vf(xl.UseNavigateStable),n=P.useRef(!1);return Bf(()=>{n.current=!0}),P.useCallback(function(i,l){l===void 0&&(l={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Kr({fromRouteId:t},l)))},[e,t])}function Bi(e){ne(!1)}function F0(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Lt.Pop,navigator:l,static:o=!1,future:a}=e;ni()&&ne(!1);let u=t.replace(/^\/*/,"/"),c=P.useMemo(()=>({basename:u,navigator:l,static:o,future:Kr({v7_relativeSplatPath:!1},a)}),[u,a,l,o]);typeof r=="string"&&(r=ir(r));let{pathname:m="/",search:h="",hash:g="",state:y=null,key:w="default"}=r,S=P.useMemo(()=>{let _=Pa(m,u);return _==null?null:{location:{pathname:_,search:h,hash:g,state:y,key:w},navigationType:i}},[u,m,h,g,y,w,i]);return S==null?null:P.createElement(xn.Provider,{value:c},P.createElement(Al.Provider,{children:n,value:S}))}function M0(e){let{children:t,location:n}=e;return E0(js(t),n)}new Promise(()=>{});function js(e,t){t===void 0&&(t=[]);let n=[];return P.Children.forEach(e,(r,i)=>{if(!P.isValidElement(r))return;let l=[...t,i];if(r.type===P.Fragment){n.push.apply(n,js(r.props.children,l));return}r.type!==Bi&&ne(!1),!r.props.index||!r.props.children||ne(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=js(r.props.children,l)),n.push(o)}),n}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ks(){return ks=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ks.apply(this,arguments)}function D0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,l;for(l=0;l<r.length;l++)i=r[l],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function A0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function B0(e,t){return e.button===0&&(!t||t==="_self")&&!A0(e)}const U0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],W0="6";try{window.__reactRouterVersion=W0}catch{}const H0="startTransition",Gu=Dp[H0];function V0(e){let{basename:t,children:n,future:r,window:i}=e,l=P.useRef();l.current==null&&(l.current=Zm({window:i,v5Compat:!0}));let o=l.current,[a,u]=P.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},m=P.useCallback(h=>{c&&Gu?Gu(()=>u(h)):u(h)},[u,c]);return P.useLayoutEffect(()=>o.listen(m),[o,m]),P.createElement(F0,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const X0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Q0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ei=P.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:l,replace:o,state:a,target:u,to:c,preventScrollReset:m,unstable_viewTransition:h}=t,g=D0(t,U0),{basename:y}=P.useContext(xn),w,S=!1;if(typeof c=="string"&&Q0.test(c)&&(w=c,X0))try{let p=new URL(window.location.href),v=c.startsWith("//")?new URL(p.protocol+c):new URL(c),E=Pa(v.pathname,y);v.origin===p.origin&&E!=null?c=E+v.search+v.hash:S=!0}catch{}let _=j0(c,{relative:i}),f=Y0(c,{replace:o,state:a,target:u,preventScrollReset:m,relative:i,unstable_viewTransition:h});function d(p){r&&r(p),p.defaultPrevented||f(p)}return P.createElement("a",ks({},g,{href:w||_,onClick:S||l?r:d,ref:n,target:u}))});var Ku;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ku||(Ku={}));var Zu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Zu||(Zu={}));function Y0(e,t){let{target:n,replace:r,state:i,preventScrollReset:l,relative:o,unstable_viewTransition:a}=t===void 0?{}:t,u=Uf(),c=ri(),m=Wf(e,{relative:o});return P.useCallback(h=>{if(B0(h,n)){h.preventDefault();let g=r!==void 0?r:gl(c)===gl(m);u(e,{replace:g,state:i,preventScrollReset:l,relative:o,unstable_viewTransition:a})}},[c,u,m,r,i,n,e,l,o,a])}var Se=function(){return Se=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},Se.apply(this,arguments)};function vl(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,l;r<i;r++)(l||!(r in t))&&(l||(l=Array.prototype.slice.call(t,0,r)),l[r]=t[r]);return e.concat(l||Array.prototype.slice.call(t))}var X="-ms-",$r="-moz-",M="-webkit-",Xf="comm",Bl="rule",Ta="decl",G0="@import",Qf="@keyframes",K0="@layer",Yf=Math.abs,$a=String.fromCharCode,Es=Object.assign;function Z0(e,t){return oe(e,0)^45?(((t<<2^oe(e,0))<<2^oe(e,1))<<2^oe(e,2))<<2^oe(e,3):0}function Gf(e){return e.trim()}function st(e,t){return(e=t.exec(e))?e[0]:e}function I(e,t,n){return e.replace(t,n)}function Ui(e,t,n){return e.indexOf(t,n)}function oe(e,t){return e.charCodeAt(t)|0}function Zn(e,t,n){return e.slice(t,n)}function tt(e){return e.length}function Kf(e){return e.length}function wr(e,t){return t.push(e),e}function J0(e,t){return e.map(t).join("")}function Ju(e,t){return e.filter(function(n){return!st(n,t)})}var Ul=1,Jn=1,Zf=0,Ue=0,ee=0,lr="";function Wl(e,t,n,r,i,l,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:l,line:Ul,column:Jn,length:o,return:"",siblings:a}}function Ct(e,t){return Es(Wl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function wn(e){for(;e.root;)e=Ct(e.root,{children:[e]});wr(e,e.siblings)}function q0(){return ee}function b0(){return ee=Ue>0?oe(lr,--Ue):0,Jn--,ee===10&&(Jn=1,Ul--),ee}function Je(){return ee=Ue<Zf?oe(lr,Ue++):0,Jn++,ee===10&&(Jn=1,Ul++),ee}function an(){return oe(lr,Ue)}function Wi(){return Ue}function Hl(e,t){return Zn(lr,e,t)}function Cs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function eg(e){return Ul=Jn=1,Zf=tt(lr=e),Ue=0,[]}function tg(e){return lr="",e}function ko(e){return Gf(Hl(Ue-1,_s(e===91?e+2:e===40?e+1:e)))}function ng(e){for(;(ee=an())&&ee<33;)Je();return Cs(e)>2||Cs(ee)>3?"":" "}function rg(e,t){for(;--t&&Je()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return Hl(e,Wi()+(t<6&&an()==32&&Je()==32))}function _s(e){for(;Je();)switch(ee){case e:return Ue;case 34:case 39:e!==34&&e!==39&&_s(ee);break;case 40:e===41&&_s(e);break;case 92:Je();break}return Ue}function ig(e,t){for(;Je()&&e+ee!==57;)if(e+ee===84&&an()===47)break;return"/*"+Hl(t,Ue-1)+"*"+$a(e===47?e:Je())}function lg(e){for(;!Cs(an());)Je();return Hl(e,Ue)}function og(e){return tg(Hi("",null,null,null,[""],e=eg(e),0,[0],e))}function Hi(e,t,n,r,i,l,o,a,u){for(var c=0,m=0,h=o,g=0,y=0,w=0,S=1,_=1,f=1,d=0,p="",v=i,E=l,C=r,j=p;_;)switch(w=d,d=Je()){case 40:if(w!=108&&oe(j,h-1)==58){Ui(j+=I(ko(d),"&","&\f"),"&\f",Yf(c?a[c-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:j+=ko(d);break;case 9:case 10:case 13:case 32:j+=ng(w);break;case 92:j+=rg(Wi()-1,7);continue;case 47:switch(an()){case 42:case 47:wr(sg(ig(Je(),Wi()),t,n,u),u);break;default:j+="/"}break;case 123*S:a[c++]=tt(j)*f;case 125*S:case 59:case 0:switch(d){case 0:case 125:_=0;case 59+m:f==-1&&(j=I(j,/\f/g,"")),y>0&&tt(j)-h&&wr(y>32?bu(j+";",r,n,h-1,u):bu(I(j," ","")+";",r,n,h-2,u),u);break;case 59:j+=";";default:if(wr(C=qu(j,t,n,c,m,i,a,p,v=[],E=[],h,l),l),d===123)if(m===0)Hi(j,t,C,C,v,l,h,a,E);else switch(g===99&&oe(j,3)===110?100:g){case 100:case 108:case 109:case 115:Hi(e,C,C,r&&wr(qu(e,C,C,0,0,i,a,p,i,v=[],h,E),E),i,E,h,a,r?v:E);break;default:Hi(j,C,C,C,[""],E,0,a,E)}}c=m=y=0,S=f=1,p=j="",h=o;break;case 58:h=1+tt(j),y=w;default:if(S<1){if(d==123)--S;else if(d==125&&S++==0&&b0()==125)continue}switch(j+=$a(d),d*S){case 38:f=m>0?1:(j+="\f",-1);break;case 44:a[c++]=(tt(j)-1)*f,f=1;break;case 64:an()===45&&(j+=ko(Je())),g=an(),m=h=tt(p=j+=lg(Wi())),d++;break;case 45:w===45&&tt(j)==2&&(S=0)}}return l}function qu(e,t,n,r,i,l,o,a,u,c,m,h){for(var g=i-1,y=i===0?l:[""],w=Kf(y),S=0,_=0,f=0;S<r;++S)for(var d=0,p=Zn(e,g+1,g=Yf(_=o[S])),v=e;d<w;++d)(v=Gf(_>0?y[d]+" "+p:I(p,/&\f/g,y[d])))&&(u[f++]=v);return Wl(e,t,n,i===0?Bl:a,u,c,m,h)}function sg(e,t,n,r){return Wl(e,t,n,Xf,$a(q0()),Zn(e,2,-2),0,r)}function bu(e,t,n,r,i){return Wl(e,t,n,Ta,Zn(e,0,r),Zn(e,r+1,-1),r,i)}function Jf(e,t,n){switch(Z0(e,t)){case 5103:return M+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+e+e;case 4789:return $r+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+$r+e+X+e+e;case 5936:switch(oe(e,t+11)){case 114:return M+e+X+I(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return M+e+X+I(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return M+e+X+I(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return M+e+X+e+e;case 6165:return M+e+X+"flex-"+e+e;case 5187:return M+e+I(e,/(\w+).+(:[^]+)/,M+"box-$1$2"+X+"flex-$1$2")+e;case 5443:return M+e+X+"flex-item-"+I(e,/flex-|-self/g,"")+(st(e,/flex-|baseline/)?"":X+"grid-row-"+I(e,/flex-|-self/g,""))+e;case 4675:return M+e+X+"flex-line-pack"+I(e,/align-content|flex-|-self/g,"")+e;case 5548:return M+e+X+I(e,"shrink","negative")+e;case 5292:return M+e+X+I(e,"basis","preferred-size")+e;case 6060:return M+"box-"+I(e,"-grow","")+M+e+X+I(e,"grow","positive")+e;case 4554:return M+I(e,/([^-])(transform)/g,"$1"+M+"$2")+e;case 6187:return I(I(I(e,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),e,"")+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+X+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+e+e;case 4200:if(!st(e,/flex-|baseline/))return X+"grid-column-align"+Zn(e,t)+e;break;case 2592:case 3360:return X+I(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,st(r.props,/grid-\w+-end/)})?~Ui(e+(n=n[t].value),"span",0)?e:X+I(e,"-start","")+e+X+"grid-row-span:"+(~Ui(n,"span",0)?st(n,/\d+/):+st(n,/\d+/)-+st(e,/\d+/))+";":X+I(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return st(r.props,/grid-\w+-start/)})?e:X+I(I(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,M+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(tt(e)-1-t>6)switch(oe(e,t+1)){case 109:if(oe(e,t+4)!==45)break;case 102:return I(e,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+$r+(oe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ui(e,"stretch",0)?Jf(I(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return I(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,l,o,a,u,c){return X+i+":"+l+c+(o?X+i+"-span:"+(a?u:+u-+l)+c:"")+e});case 4949:if(oe(e,t+6)===121)return I(e,":",":"+M)+e;break;case 6444:switch(oe(e,oe(e,14)===45?18:11)){case 120:return I(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+M+(oe(e,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+X+"$2box$3")+e;case 100:return I(e,":",":"+X)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return I(e,"scroll-","scroll-snap-")+e}return e}function yl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ag(e,t,n,r){switch(e.type){case K0:if(e.children.length)break;case G0:case Ta:return e.return=e.return||e.value;case Xf:return"";case Qf:return e.return=e.value+"{"+yl(e.children,r)+"}";case Bl:if(!tt(e.value=e.props.join(",")))return""}return tt(n=yl(e.children,r))?e.return=e.value+"{"+n+"}":""}function ug(e){var t=Kf(e);return function(n,r,i,l){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,l)||"";return o}}function cg(e){return function(t){t.root||(t=t.return)&&e(t)}}function dg(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ta:e.return=Jf(e.value,e.length,n);return;case Qf:return yl([Ct(e,{value:I(e.value,"@","@"+M)})],r);case Bl:if(e.length)return J0(n=e.props,function(i){switch(st(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":wn(Ct(e,{props:[I(i,/:(read-\w+)/,":"+$r+"$1")]})),wn(Ct(e,{props:[i]})),Es(e,{props:Ju(n,r)});break;case"::placeholder":wn(Ct(e,{props:[I(i,/:(plac\w+)/,":"+M+"input-$1")]})),wn(Ct(e,{props:[I(i,/:(plac\w+)/,":"+$r+"$1")]})),wn(Ct(e,{props:[I(i,/:(plac\w+)/,X+"input-$1")]})),wn(Ct(e,{props:[i]})),Es(e,{props:Ju(n,r)});break}return""})}}var fg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Pe={},qn=typeof process<"u"&&Pe!==void 0&&(Pe.REACT_APP_SC_ATTR||Pe.SC_ATTR)||"data-styled",qf="active",bf="data-styled-version",Vl="6.1.13",za=`/*!sc*/
`,wl=typeof window<"u"&&"HTMLElement"in window,pg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Pe!==void 0&&Pe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Pe.REACT_APP_SC_DISABLE_SPEEDY!==""?Pe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Pe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Pe!==void 0&&Pe.SC_DISABLE_SPEEDY!==void 0&&Pe.SC_DISABLE_SPEEDY!==""&&Pe.SC_DISABLE_SPEEDY!=="false"&&Pe.SC_DISABLE_SPEEDY),Xl=Object.freeze([]),bn=Object.freeze({});function hg(e,t,n){return n===void 0&&(n=bn),e.theme!==n.theme&&e.theme||t||n.theme}var ep=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),mg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gg=/(^-|-$)/g;function ec(e){return e.replace(mg,"-").replace(gg,"")}var xg=/(a)(d)/gi,Ci=52,tc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ps(e){var t,n="";for(t=Math.abs(e);t>Ci;t=t/Ci|0)n=tc(t%Ci)+n;return(tc(t%Ci)+n).replace(xg,"$1-$2")}var Eo,tp=5381,Rn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},np=function(e){return Rn(tp,e)};function vg(e){return Ps(np(e)>>>0)}function yg(e){return e.displayName||e.name||"Component"}function Co(e){return typeof e=="string"&&!0}var rp=typeof Symbol=="function"&&Symbol.for,ip=rp?Symbol.for("react.memo"):60115,wg=rp?Symbol.for("react.forward_ref"):60112,Sg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},lp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},kg=((Eo={})[wg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Eo[ip]=lp,Eo);function nc(e){return("type"in(t=e)&&t.type.$$typeof)===ip?lp:"$$typeof"in e?kg[e.$$typeof]:Sg;var t}var Eg=Object.defineProperty,Cg=Object.getOwnPropertyNames,rc=Object.getOwnPropertySymbols,_g=Object.getOwnPropertyDescriptor,Pg=Object.getPrototypeOf,ic=Object.prototype;function op(e,t,n){if(typeof t!="string"){if(ic){var r=Pg(t);r&&r!==ic&&op(e,r,n)}var i=Cg(t);rc&&(i=i.concat(rc(t)));for(var l=nc(e),o=nc(t),a=0;a<i.length;++a){var u=i[a];if(!(u in jg||n&&n[u]||o&&u in o||l&&u in l)){var c=_g(t,u);try{Eg(e,u,c)}catch{}}}}return e}function er(e){return typeof e=="function"}function La(e){return typeof e=="object"&&"styledComponentId"in e}function rn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function lc(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Zr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ns(e,t,n){if(n===void 0&&(n=!1),!n&&!Zr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ns(e[r],t[r]);else if(Zr(t))for(var r in t)e[r]=Ns(e[r],t[r]);return e}function Ia(e,t){Object.defineProperty(e,"toString",{value:t})}function ii(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ng=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,l=i;t>=l;)if((l<<=1)<0)throw ii(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(r),this.length=l;for(var o=i;o<l;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var l=r;l<i;l++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),l=i+r,o=i;o<l;o++)n+="".concat(this.tag.getRule(o)).concat(za);return n},e}(),Vi=new Map,Sl=new Map,Xi=1,_i=function(e){if(Vi.has(e))return Vi.get(e);for(;Sl.has(Xi);)Xi++;var t=Xi++;return Vi.set(e,t),Sl.set(t,e),t},Tg=function(e,t){Xi=t+1,Vi.set(e,t),Sl.set(t,e)},$g="style[".concat(qn,"][").concat(bf,'="').concat(Vl,'"]'),zg=new RegExp("^".concat(qn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Lg=function(e,t,n){for(var r,i=n.split(","),l=0,o=i.length;l<o;l++)(r=i[l])&&e.registerName(t,r)},Ig=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(za),i=[],l=0,o=r.length;l<o;l++){var a=r[l].trim();if(a){var u=a.match(zg);if(u){var c=0|parseInt(u[1],10),m=u[2];c!==0&&(Tg(m,c),Lg(e,m,u[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},oc=function(e){for(var t=document.querySelectorAll($g),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(qn)!==qf&&(Ig(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Rg(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var sp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(qn,"]")));return u[u.length-1]}(n),l=i!==void 0?i.nextSibling:null;r.setAttribute(qn,qf),r.setAttribute(bf,Vl);var o=Rg();return o&&r.setAttribute("nonce",o),n.insertBefore(r,l),r},Og=function(){function e(t){this.element=sp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,l=r.length;i<l;i++){var o=r[i];if(o.ownerNode===n)return o}throw ii(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Fg=function(){function e(t){this.element=sp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Mg=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),sc=wl,Dg={isServer:!wl,useCSSOMInjection:!pg},ap=function(){function e(t,n,r){t===void 0&&(t=bn),n===void 0&&(n={});var i=this;this.options=Se(Se({},Dg),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&wl&&sc&&(sc=!1,oc(this)),Ia(this,function(){return function(l){for(var o=l.getTag(),a=o.length,u="",c=function(h){var g=function(f){return Sl.get(f)}(h);if(g===void 0)return"continue";var y=l.names.get(g),w=o.getGroup(h);if(y===void 0||!y.size||w.length===0)return"continue";var S="".concat(qn,".g").concat(h,'[id="').concat(g,'"]'),_="";y!==void 0&&y.forEach(function(f){f.length>0&&(_+="".concat(f,","))}),u+="".concat(w).concat(S,'{content:"').concat(_,'"}').concat(za)},m=0;m<a;m++)c(m);return u}(i)})}return e.registerId=function(t){return _i(t)},e.prototype.rehydrate=function(){!this.server&&wl&&oc(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Se(Se({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Mg(i):r?new Og(i):new Fg(i)}(this.options),new Ng(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(_i(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(_i(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(_i(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ag=/&/g,Bg=/^\s*\/\/.*$/gm;function up(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=up(n.children,t)),n})}function Ug(e){var t,n,r,i=bn,l=i.options,o=l===void 0?bn:l,a=i.plugins,u=a===void 0?Xl:a,c=function(g,y,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):g},m=u.slice();m.push(function(g){g.type===Bl&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Ag,n).replace(r,c))}),o.prefix&&m.push(dg),m.push(ag);var h=function(g,y,w,S){y===void 0&&(y=""),w===void 0&&(w=""),S===void 0&&(S="&"),t=S,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var _=g.replace(Bg,""),f=og(w||y?"".concat(w," ").concat(y," { ").concat(_," }"):_);o.namespace&&(f=up(f,o.namespace));var d=[];return yl(f,ug(m.concat(cg(function(p){return d.push(p)})))),d};return h.hash=u.length?u.reduce(function(g,y){return y.name||ii(15),Rn(g,y.name)},tp).toString():"",h}var Wg=new ap,Ts=Ug(),cp=Wn.createContext({shouldForwardProp:void 0,styleSheet:Wg,stylis:Ts});cp.Consumer;Wn.createContext(void 0);function ac(){return P.useContext(cp)}var Hg=function(){function e(t,n){var r=this;this.inject=function(i,l){l===void 0&&(l=Ts);var o=r.name+l.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,l(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Ia(this,function(){throw ii(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ts),this.name+t.hash},e}(),Vg=function(e){return e>="A"&&e<="Z"};function uc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Vg(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var dp=function(e){return e==null||e===!1||e===""},fp=function(e){var t,n,r=[];for(var i in e){var l=e[i];e.hasOwnProperty(i)&&!dp(l)&&(Array.isArray(l)&&l.isCss||er(l)?r.push("".concat(uc(i),":"),l,";"):Zr(l)?r.push.apply(r,vl(vl(["".concat(i," {")],fp(l),!1),["}"],!1)):r.push("".concat(uc(i),": ").concat((t=i,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in fg||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function un(e,t,n,r){if(dp(e))return[];if(La(e))return[".".concat(e.styledComponentId)];if(er(e)){if(!er(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var i=e(t);return un(i,t,n,r)}var l;return e instanceof Hg?n?(e.inject(n,r),[e.getName(r)]):[e]:Zr(e)?fp(e):Array.isArray(e)?Array.prototype.concat.apply(Xl,e.map(function(o){return un(o,t,n,r)})):[e.toString()]}function Xg(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(er(n)&&!La(n))return!1}return!0}var Qg=np(Vl),Yg=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Xg(t),this.componentId=n,this.baseHash=Rn(Qg,n),this.baseStyle=r,ap.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=rn(i,this.staticRulesId);else{var l=lc(un(this.rules,t,n,r)),o=Ps(Rn(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(l,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=rn(i,o),this.staticRulesId=o}else{for(var u=Rn(this.baseHash,r.hash),c="",m=0;m<this.rules.length;m++){var h=this.rules[m];if(typeof h=="string")c+=h;else if(h){var g=lc(un(h,t,n,r));u=Rn(u,g+m),c+=g}}if(c){var y=Ps(u>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(c,".".concat(y),void 0,this.componentId)),i=rn(i,y)}}return i},e}(),pp=Wn.createContext(void 0);pp.Consumer;var _o={};function Gg(e,t,n){var r=La(e),i=e,l=!Co(e),o=t.attrs,a=o===void 0?Xl:o,u=t.componentId,c=u===void 0?function(v,E){var C=typeof v!="string"?"sc":ec(v);_o[C]=(_o[C]||0)+1;var j="".concat(C,"-").concat(vg(Vl+C+_o[C]));return E?"".concat(E,"-").concat(j):j}(t.displayName,t.parentComponentId):u,m=t.displayName,h=m===void 0?function(v){return Co(v)?"styled.".concat(v):"Styled(".concat(yg(v),")")}(e):m,g=t.displayName&&t.componentId?"".concat(ec(t.displayName),"-").concat(t.componentId):t.componentId||c,y=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,w=t.shouldForwardProp;if(r&&i.shouldForwardProp){var S=i.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;w=function(v,E){return S(v,E)&&_(v,E)}}else w=S}var f=new Yg(n,g,r?i.componentStyle:void 0);function d(v,E){return function(C,j,$){var W=C.attrs,R=C.componentStyle,Ce=C.defaultProps,Yt=C.foldedComponentIds,Gt=C.styledComponentId,li=C.target,Yl=Wn.useContext(pp),or=ac(),Kt=C.shouldForwardProp||or.shouldForwardProp,N=hg(j,Yl,Ce)||bn,z=function(yt,_e,lt){for(var sr,Jt=Se(Se({},_e),{className:void 0,theme:lt}),Gl=0;Gl<yt.length;Gl+=1){var oi=er(sr=yt[Gl])?sr(Jt):sr;for(var wt in oi)Jt[wt]=wt==="className"?rn(Jt[wt],oi[wt]):wt==="style"?Se(Se({},Jt[wt]),oi[wt]):oi[wt]}return _e.className&&(Jt.className=rn(Jt.className,_e.className)),Jt}(W,j,N),L=z.as||li,B={};for(var U in z)z[U]===void 0||U[0]==="$"||U==="as"||U==="theme"&&z.theme===N||(U==="forwardedAs"?B.as=z.forwardedAs:Kt&&!Kt(U,L)||(B[U]=z[U]));var Zt=function(yt,_e){var lt=ac(),sr=yt.generateAndInjectStyles(_e,lt.styleSheet,lt.stylis);return sr}(R,z),We=rn(Yt,Gt);return Zt&&(We+=" "+Zt),z.className&&(We+=" "+z.className),B[Co(L)&&!ep.has(L)?"class":"className"]=We,B.ref=$,P.createElement(L,B)}(p,v,E)}d.displayName=h;var p=Wn.forwardRef(d);return p.attrs=y,p.componentStyle=f,p.displayName=h,p.shouldForwardProp=w,p.foldedComponentIds=r?rn(i.foldedComponentIds,i.styledComponentId):"",p.styledComponentId=g,p.target=r?i.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(E){for(var C=[],j=1;j<arguments.length;j++)C[j-1]=arguments[j];for(var $=0,W=C;$<W.length;$++)Ns(E,W[$],!0);return E}({},i.defaultProps,v):v}}),Ia(p,function(){return".".concat(p.styledComponentId)}),l&&op(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function cc(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var dc=function(e){return Object.assign(e,{isCss:!0})};function Kg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(er(e)||Zr(e))return dc(un(cc(Xl,vl([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?un(r):dc(un(cc(r,t)))}function $s(e,t,n){if(n===void 0&&(n=bn),!t)throw ii(1,t);var r=function(i){for(var l=[],o=1;o<arguments.length;o++)l[o-1]=arguments[o];return e(t,n,Kg.apply(void 0,vl([i],l,!1)))};return r.attrs=function(i){return $s(e,t,Se(Se({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return $s(e,t,Se(Se({},n),i))},r}var hp=function(e){return $s(Gg,e)},x=hp;ep.forEach(function(e){x[e]=hp(e)});const Zg=x.section`
    position: relative;
    height: 660px;
    @media (max-width: 1301px) {
        height: 900px;
        width: 414px;
        left: 50%;
        transform: translateX(-50%);
    }
`,Jg=x.img`
    position: absolute;
    top: 380px;
    left: 0;
    width: 755px;
    @media (max-width: 1301px) {
        top: 617px;
        left: 50%;
        transform: translateX(-50%);
        width: 414px;
    }
`,qg=x.video`
    position: absolute;
    top: 0;
    right: 50px;
    width: 760px;
    @media (max-width: 1301px) {
        display: none;
    }
`,bg=x.video`
    display: none;
    @media (max-width: 1301px) {
        display: block;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 400px;
    }
`,e1=x.div`
    position: relative;
    margin: 20px 0px 20px 91px;
    @media (max-width: 1301px) {
        margin: 0;
        position: absolute;
        top: 255px;
        width: 359px;
        left: 50%;
        transform: translateX(-50%);
    }
`,t1=x.img`
    padding-top: 70px;
    width: 486px;
    animation: fadeIn 1s ease-in-out backwards;
`,n1=x.img`
    width: 520px;
    position: absolute;
    top: 58px;
    left: -10px;
    animation: fadeIn 1s ease-in-out backwards;
    animation-delay: .5s;
`,r1=x.div`
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
    > p > span {
        color: ${e=>e.$isBlue?"#2496F0":"#FF837E"};
    }
    @media (max-width: 1301px) {
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
`,i1=x.p`
    position: relative;
    z-index: 1;
    font-size: 65px;
    line-height: 65px;
    margin-left: 74px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #2496F0;
    text-shadow: 0px 5px 5px lightgrey;
    @media (max-width: 1301px) {
        font-size: 40px;
        line-height: 45px;
        margin: 0;
        position: absolute;
        top: 679px;
        width: 354px;
        left: 50%;
        transform: translateX(-50%);
    }
`;x.img`
    position: absolute;
    right: 50px;
    width: 795px;
    @media (max-width: 1301px) {
        width: 414px;
        height: 294px;
        left: 50%;
        transform: translateX(-50%);
    }
`;const l1=x.img`
    position: absolute;
    top: 308px;
    left: 364px;
    width: 343px;
    @media (max-width: 1301px) {
        display: none;
    }
`,o1=x.img`
    display: none;
    @media (max-width: 1301px) {
        display: block;
        position: absolute;
        top: 240px;
        left: 0;
        width: 80px;
    }
`,s1=x.img`
    position: absolute;
    top: 300px;
    right: 0;
    width: 383px;
    transform:rotate(-5deg);  
    @media (max-width: 1301px) {
        display: none;
    }
`,a1=x.img`
    display: none;
    @media (max-width: 1301px) {
        display: block;
        position: absolute;
        top: 200px;
        right: 0;
        width: 70px;
    }
`,u1=()=>{const[e,t]=P.useState(!0);return P.useEffect(()=>{const n=setInterval(()=>{t(!e)},1e3);return()=>clearInterval(n)},[e]),s.jsxs(Zg,{children:[s.jsx(Jg,{src:"./home/home-polygon.svg"}),s.jsx(l1,{src:"./home/shadow-line1.svg"}),s.jsx(o1,{src:"./home/shadow-line1-mobile.svg"}),s.jsx(s1,{src:"./home/shadow-line2.svg"}),s.jsx(a1,{src:"./home/shadow-line2-mobile.svg"}),s.jsx(qg,{src:"./home/event-banner-video-desktop.mp4",autoPlay:!0,muted:!0}),s.jsx(bg,{src:"./home/event-banner-video-mobile.mp4",autoPlay:!0,muted:!0,playsInline:!0,preload:"auto"}),s.jsxs(e1,{children:[s.jsx(t1,{src:"./home/event-banner-title.png"}),s.jsx(n1,{src:"./home/event-banner-airplane.png"})]}),s.jsxs(r1,{$isBlue:e,children:[s.jsx("p",{children:"保全球旅平險"}),s.jsxs("p",{children:["驚喜",s.jsx("span",{children:"多多多多多多"}),"到滿出來！"]})]}),s.jsxs(i1,{children:["TRAVEL",s.jsx("br",{}),"A TRANSGLOBE JOURNEY"]})]})};var mp={exports:{}},c1="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",d1=c1,f1=d1;function gp(){}function xp(){}xp.resetWarningCache=gp;var p1=function(){function e(r,i,l,o,a,u){if(u!==f1){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:xp,resetWarningCache:gp};return n.PropTypes=n,n};mp.exports=p1();var h1=mp.exports;const dt=vc(h1),m1={white:"#FFFFFF",yellow:"#FED430",red:"#FF837E",blue:"#2496F0"},g1={white:"#000000",yellow:"#000000",red:"#000000",blue:"#FFFFFF"},x1={white:"#000000",yellow:"#000000",red:"#FF837E",blue:"#2496F0"},vp=x.div`
  width: ${e=>e.$width||"100%"};
  height: ${e=>e.$height||"65px"};
  background-color: ${e=>m1[e.$color]};
  border-radius: 8px;
  position: absolute;
  top: 5px;
  left: 5px;
  transition: all 0.3s ease;
`,yp=x.div`
  width: ${e=>e.$width||"100%"};
  height: ${e=>e.$height||"65px"};
  font-size: 25px;
  font-weight: bold;
  border: solid 2px black;
  border-radius: ${e=>e.$isAccordion?"0":"8px"};
  color: ${e=>g1[e.$color]};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition: all 0.3s ease;
  font-family: "Noto Serif TC", "Noto Serif", serif; 
  font-weight: 700;
  @media (max-width: 480px) {
    font-size: 20px;
  }
`,v1=x.button`
  width: ${e=>e.$width||"100%"};
  height: ${e=>e.$height||"65px"};
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
    ${vp} {
      background-color: ${e=>e.$hoverBgColor||"#FFFFFF"};
    }
    ${yp} {
      color: ${e=>x1[e.$color]};
    }
  }
`,y1=x.div`
  position: relative;
  right: 50px;
`,Ge=({color:e="yellow",hoverBgColor:t,children:n,onClick:r,icon:i,width:l,height:o})=>s.jsxs(v1,{$color:e,$hoverBgColor:t,onClick:r,$width:l,$height:o,children:[s.jsx(vp,{$color:e,$width:l,$height:o}),s.jsx(yp,{$color:e,$isAccordion:!!i,$width:l,$height:o,children:s.jsx("div",{style:{zIndex:5},children:n})}),i&&s.jsx(y1,{children:i})]});Ge.propTypes={color:dt.string,children:dt.node.isRequired,onClick:dt.func,icon:dt.node};const w1=x.section`
    position: relative;
    height: 730px;
    @media (max-width: 1301px) {
        width: 414px;
        left: 50%;
        transform: translateX(-50%);
    }
`,S1=x.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    position: absolute;
    left: 182px;
    top: 160px;
    > img {
        height: 60px;
    }
    @media (max-width: 1301px) {
        top: 0px;
        left: 50%;
        transform: translateX(-46%);
        width: 320px;
         > img {
            height: 40px;
        }
    }
`,j1=x.div`
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
    @media (max-width: 1301px) {
        top: 160px;
        left: 50%;
        transform: translateX(-46%);
        font-size: 20px;
        line-height: 35px;
        letter-spacing: 1px;
        width: 320px;
    }
`,k1=x.img`
    position: absolute;
    top: 60px;
    left: 40px;
    width: 1500px;
    height: 800px;
    @media (max-width: 1301px) {
        display: none;
    }
`,E1=x.img`
    position: absolute;
    top: 220px;
    left: 50%;
    transform: translateX(-40%);
    width: 299px;
    @media (min-width: 1301px) {
        display: none;
    }
`,C1=x.img`
    position: absolute;
    top: 72px;
    left: 62px;
    width: 584px;
    @media (max-width: 1301px) {
        top: -60px;
        left: 50%;
        transform: translateX(-50%);
        width: 400px;
    }
`,_1=x.img`
    position: absolute;
    left: -65px;
    bottom: 20px;
    width: 343px;
    @media (max-width: 1301px) {
        display: none;
    }
`,P1=x.img`
    position: absolute;
    left: 269px;
    bottom: 20px;
    width: 383px;
    transform:rotate(-5deg);
    @media (max-width: 1301px) {
        display: none;
    }
`,N1=x.img`
    display: none;
    @media (max-width: 1301px) {
        display: block;
        position: absolute;
        top: 400px;
        left: 50%;
        transform: translateX(-50%);
        width: 414px;
    }
`,T1=x.div`
    position: absolute;
    top: 100px;
    right: 41px;
    font-size: 65px;
    line-height: 65px;
    font-weight: bold;
    color: #FED430;
    text-align: right;
    @media (max-width: 1301px) {
        top: 260px;
        left: 50%;
        transform: translateX(-40%);
        font-size: 40px;
        line-height: 40px;
        min-width: 300px;
    }
`,$1=x.img`
    position: absolute;
    bottom: 20px;
    right: 48px;
    @media (max-width: 1301px) {
        display: none;
    }
`,z1=x.img`
    position: absolute;
    top: 330px;
    left: 50%;
    transform: translateX(-50%);
    width: 414px;
    @media (min-width: 1301px) {
        display: none;
    }
`,L1=x.div`
    position: absolute;
    bottom: 80px;
    right: 250px;
    z-index: 10;
    width: 289px;
    @media (max-width: 1301px) {
        width: 220px;
        left: 50%;
        transform: translateX(-50%);
    }
`,I1=()=>s.jsxs(w1,{children:[s.jsx(C1,{id:"sec1",src:"./home/new-year-event-fire.png"}),s.jsx(_1,{src:"./home/shadow-line1.svg"}),s.jsx(P1,{src:"./home/shadow-line2.svg"}),s.jsx(N1,{src:"./home/shadow-line-mobile.svg"}),s.jsxs(S1,{children:[s.jsx("img",{src:"./home/new-year-event-title.svg"}),s.jsx("img",{src:"./home/common-title-lottery.svg"})]}),s.jsxs(j1,{children:[s.jsx("span",{children:"2024/12/15-2025/1/20"}),"期間，",s.jsx("br",{}),"成功網路投保",s.jsx("span",{children:"「國外旅平險」"})]}),s.jsxs(T1,{children:["HAPPY",s.jsx("br",{}),"NEW YEAR",s.jsx("br",{}),"2025"]}),s.jsx($1,{src:"./home/new-year-event.svg"}),s.jsx(z1,{src:"./home/new-year-event-mobile.svg"}),s.jsx(L1,{children:s.jsx(Ge,{color:"blue",height:"60px",children:"投保立即抽"})}),s.jsx(k1,{src:"./home/new-year-event-flower.svg"}),s.jsx(E1,{src:"./home/new-year-event-flower-mobile.svg"})]}),R1=x.section`
    position: relative;
    height: 1127px;
    @media (max-width: 1301px) {
        overflow: hidden;
        height: 1390px;
        width: 414px;
        left: 50%;
        transform: translateX(-50%);
    }
`,O1=x.img`
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    @media (max-width: 1301px) {
        display: none;
    }
`,F1=x.img`
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 414px;
    @media (min-width: 1301px) {
        display: none;
    }
`,M1=x.img`
    position: absolute;
    z-index: 1;
    top: 100px;
    left: 100px;
    width: 95%;
    height: 940px;
    @media (max-width: 1301px) {
        display: none;
    }
`,D1=x.img`
    position: absolute;
    z-index: 1;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 387;
    @media (min-width: 1301px) {
        display: none;
    }
`,A1=x.img`
    position: absolute;
    top: 170px;
    left: 62px;
    width: 678px;
    @media (max-width: 1301px) {
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        width: 400px;
    }
`,B1=x.img`
    position: absolute;
    top: 220px;
    right: -40px;
    width: 428px;
    @media (max-width: 1301px) {
        top: 380px;
        left: 50%;
        transform: translateX(-40%);
    }
`,U1=x.div`
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
        left: 50%;
        transform: translateX(-46%);
        width: 320px;
         > img {
            height: 40px;
        }
    }
`,W1=x.div`
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
        top: 260px;
        left: 50%;
        transform: translateX(-48%);
        font-size: 20px;
        line-height: 35px;
        letter-spacing: 1px;
        width: 300px;
    }
`,H1=x.div`
    position: absolute;
    top: 200px;
    right: 80px;
    font-size: 65px;
    line-height: 65px;
    font-weight: bold;
    color: #2496F0;
    text-align: right;
    @media (max-width: 1301px) {
        top: 420px;
        left: 50%;
        transform: translateX(-40%);
        font-size: 40px;
        line-height: 40px;
        min-width: 300px;
    }
`,V1=x.img`
    position: absolute;
    bottom: 170px;
    left: 122px;
    @media (max-width: 1301px) {
        display: none;
    }
`,X1=x.img`
    position: absolute;
    top: 520px;
    left: 50%;
    transform: translateX(-52%);
    @media (min-width: 1301px) {
        display: none;
        
    }
`,Q1=x.div`
    position: absolute;
    bottom: 150px;
    left: 280px;
    z-index: 10;
    width: 289px;
    @media (max-width: 1301px) {
        width: 220px;
        top: 790px;
        left: 50%;
        transform: translateX(-45%);
    }
`,Y1=x.img`
    position: absolute;
    bottom: 170px;
    right: 60px;
    @media (max-width: 1301px) {
        display: none;
    }
`,G1=x.img`
    position: absolute;
    top: 860px;
    left: 50%;
    transform: translateX(-38%);
    @media (min-width: 1301px) {
        display: none;
    }
`,K1=x.div`
    position: absolute;
    bottom: 150px;
    right: 320px;
    z-index: 10;
    width: 289px;
    @media (max-width: 1301px) {
        width: 220px;
        top: 1150px;
        left: 50%;
        transform: translateX(-45%);
    }
`,Z1=()=>s.jsxs(R1,{children:[s.jsx(O1,{src:"./home/reach-insure-amount-event-trapezoid.svg"}),s.jsx(F1,{src:"./home/reach-insure-amount-event-trapezoid-mobile.svg"}),s.jsx(A1,{id:"sec2",src:"./home/reach-insure-amount-event-temple.svg"}),s.jsx(B1,{src:"./home/reach-insure-amount-event-mountain.svg"}),s.jsxs(U1,{children:[s.jsx("img",{src:"./home/reach-insure-amount-event-title.svg"}),s.jsx("img",{src:"./home/common-title-lottery.svg"})]}),s.jsxs(W1,{children:["2024/10/1~2025/1/31期間，",s.jsx("br",{}),"成功網路投保",s.jsx("span",{children:"「國外旅平險」"}),"，單筆保費滿額即可抽！"]}),s.jsxs(H1,{children:["TRAVEL",s.jsx("br",{}),"JAPAN",s.jsx("br",{}),"TOKYO"]}),s.jsx(V1,{src:"./home/reach-insure-amount-event1.svg"}),s.jsx(X1,{src:"./home/reach-insure-amount-event1-mobile.svg"}),s.jsx(Q1,{children:s.jsx(Ge,{color:"blue",height:"60px",children:"投保立即抽"})}),s.jsx(Y1,{src:"./home/reach-insure-amount-event2.svg"}),s.jsx(G1,{src:"./home/reach-insure-amount-event2-mobile.svg"}),s.jsx(K1,{children:s.jsx(Ge,{color:"blue",height:"60px",children:"投保立即抽"})}),s.jsx(M1,{src:"./home/reach-insure-amount-event-flower.svg"}),s.jsx(D1,{src:"./home/reach-insure-amount-event-flower-mobile.svg"})]}),J1=x.section`
    position: relative;
    height: 1429px;
    @media (max-width: 1301px) {
        height: 1529px;
        width: 414px;
        left: 50%;
        transform: translateX(-50%);
    }
`,q1=x.img`
    position: absolute;
    top: 414px;
    left: 244px;
    @media (max-width: 1301px) {
        top: 620px;
        left: 50%;
        transform: translateX(-60%);
        width: 294px;
    }
`,b1=x.img`
    position: absolute;
    bottom: -220px;
    width: 100%;
    @media (max-width: 1301px) {
        display: none;
    }
`,ex=x.img`
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    width: 414px;
    @media (min-width: 1301px) {
        display: none;
    }
`,tx=x.img`
    position: absolute;
    left: 51px;
    @media (max-width: 1301px) {
        top: -100px;
        left: 50%;
        transform: translateX(-50%);
        width: 400px;
    }
`,nx=x.img`
    position: absolute;
    top: 198px;
    right: 35px;
    @media (max-width: 1301px) {
        display: none;
    }
`,rx=x.img`
    position: absolute;
    top: 260px;
    left: 50%;
    transform: translateX(-42%);
    @media (min-width: 1301px) {
        display: none;
    }
`,ix=x.div`
    position: absolute;
    top: 480px;
    right: 275px;
    z-index: 10;
    width: 289px;
    @media (max-width: 1301px) {
        width: 220px;
        top: 470px;
        left: 50%;
        transform: translateX(-50%);
    }
`,lx=x.img`
    position: absolute;
    left: 50%;
    bottom: 244px;
    translate: -50% 0;
    @media (max-width: 1301px) {
        display: none;
    }
`,ox=x.img`
    position: absolute;
    left: 50%;
    bottom: 120px;
    translate: -50% 0;
    @media (min-width: 1301px) {
        display: none;
    }
`,sx=x.div`
    position: absolute;
    left: 50%;
    bottom: 295px;
    translate: -50% 0;
    z-index: 10;
    width: 289px;
    @media (max-width: 1301px) {
        width: 220px;
        bottom: 168px;
    }
`,ax=x.div`
    position: absolute;
    left: 50%;
    bottom: 105px;
    translate: -50% 0;
    z-index: 10;
    width: 289px;
    @media (max-width: 1301px) {
        width: 220px;
        bottom: 30px;
    }
`,ux=x.img`
    position: absolute;
    left: 50%;
    bottom: 450px;
    translate: -50% 0;
    height: 50px;
    @media (max-width: 1301px) {
        bottom: 350px;
        height: 40px;
    }
`,cx=x.p`
    position: absolute;
    left: 50%;
    bottom: 380px;
    translate: -50% 0;
    height: 35px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    @media (max-width: 1301px) {
        bottom: 280px;
        height: 40px;
        width: 280px;
    }
`,dx=x.img`
    position: absolute;
    top: 50px;
    left: 150px;
    @media (max-width: 1301px) {
        display: none;
    }
`,fx=x.img`
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    @media (min-width: 1301px) {
        display: none;
    }
`,px=x.div`
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
    @media (max-width: 1301px) {
        top: -40px;
        left: 50%;
        transform: translateX(-46%);
        width: 320px;
         > img {
            height: 40px;
        }
    }
`,hx=x.div`
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
    @media (max-width: 1301px) {
        top: 120px;
        left: 50%;
        transform: translateX(-42%);
        line-height: 35px;
        letter-spacing: 1px;
        width: 350px;
        font-size: 16px;
    }
`,wp=x.div`
    font-size: 65px;
    line-height: 65px;
    font-weight: bold;
    color: #FED430;
    @media (max-width: 1301px) {
        left: 50%;
        font-size: 40px;
        line-height: 40px;
        min-width: 300px;
    }
`,mx=x(wp)`
    position: absolute;
    top: 580px;
    right: 87px;
    text-align: right;
    @media (max-width: 1301px) {
        transform: translateX(-40%);
    }
`,gx=x(wp)`
    position: absolute;
    top: 737px;
    left: 114px;
    text-align: left;
    @media (max-width: 1301px) {
        top: 840px;
        transform: translateX(-26%);
    }
`,xx=()=>s.jsxs(J1,{children:[s.jsx(tx,{id:"sec3",src:"./home/first-insure-event-tower.svg"}),s.jsx(nx,{src:"./home/first-insure-event.svg"}),s.jsx(rx,{src:"./home/first-insure-event-mobile.svg"}),s.jsx(ix,{children:s.jsx(Ge,{color:"blue",height:"60px",children:"投保立即抽"})}),s.jsxs(mx,{children:["PX MART",s.jsx("br",{}),"COUPON"]}),s.jsxs(px,{children:[s.jsx("img",{src:"./home/first-insure-event-title.svg"}),s.jsx("img",{src:"./home/common-title-lottery.svg"})]}),s.jsxs(hx,{children:[s.jsx("strong",{children:"2024/10/1~2025/1/31期間，"}),s.jsx("br",{}),s.jsxs("strong",{children:[s.jsx("span",{children:"首次"}),"成功網路投保",s.jsx("span",{children:"「國內外旅平險」"})]}),s.jsx("br",{}),"（限從未投保全球人壽任一險種者）"]}),s.jsx(q1,{src:"./home/first-insure-event-italy.svg"}),s.jsx(b1,{src:"./home/line-points-blue-background.svg"}),s.jsx(ex,{src:"./home/line-points-blue-background-mobile.svg"}),s.jsx(lx,{src:"./home/line-points-people.svg"}),s.jsx(ox,{src:"./home/line-points-people-mobile.svg"}),s.jsxs(gx,{children:["LINE",s.jsx("br",{}),"POINTS"]}),s.jsx(ux,{src:"./home/line-points-event-title.svg"}),s.jsx(cx,{children:"快推薦好友，就有機會獲得 LINE POINTS 喔！"}),s.jsx(sx,{children:s.jsx(Ge,{color:"red",height:"60px",children:"立即前往"})}),s.jsx(ax,{children:s.jsx(Ge,{color:"white",height:"60px",hoverBgColor:"#FF837E",children:"活動辦法"})}),s.jsx(dx,{src:"./home/first-insure-line-points-flower.svg"}),s.jsx(fx,{src:"./home/first-insure-line-points-flower-mobile.svg"})]}),vx=x.div`
  padding-top: 90px;
  background-color: #FFFAF1;
  display: flex;
  justify-content: center;
  overflow: hidden;
`,yx=x.div`
  width: 100%;
  max-width: 1500px;
  position: relative;
`;x.div`
  height: 2563px;
  width: 1px;
  position: absolute;
  left: 112px;
  top: 687px;
  background-color: black;
   @media (max-width: 1301px) {
        top: 200px;
        right: -100px;
        width: 204px;
        transform: scaleY(-1) rotate(-10deg);
    }
`;const wx=x.img`
  position: fixed;
  left: calc((100vw - 1500px)/2 + 90px);
  top: calc(687px + 120px);
`;function Sx(){return s.jsx(vx,{children:s.jsxs(yx,{children:[s.jsx(u1,{}),s.jsx(I1,{}),s.jsx(Z1,{}),s.jsx(xx,{}),s.jsx(wx,{src:"./home/home-fly.svg"})]})})}const jx=x.div`
  padding-top: 90px;
  background-color: #FFFAF1;
  display: flex;
  justify-content: center;
  overflow: hidden;
  @media (max-width: 1300px) {
    padding-top: 65px;
  }
`,kx=x.div`
  width: 100%;
  max-width: 1500px;
  position: relative;
  height: 2780px;
  @media (max-width: 1300px) {
    width: 414px;
  }
`,Ex=x.img`
  position: absolute;
  top: 427px;
  left: 0;
  width: 100%;
`,Cx=x.img`
  position: absolute;
  top: 0;
  right: 20px;
  width: 900px;
  @media (max-width: 1300px) {
    display: none;
  }
`,_x=x.img`
  position: absolute;
  top: 700px;
  left: 60px;
  width: 1300px;
`,Px=x.img`
  position: absolute;
  top: 660px;
  left: 78px;
  width: 1360px;
`,Nx=x.img`
  position: absolute;
  bottom: 375px;
  left: 100px;
  width: 1312px;
`,Tx=x.img`
  position: absolute;
  bottom: -32px;
  width: 100%;
`,$x=x.video`
  position: absolute;
  top: 0;
  right: 50px;
  @media (max-width: 1300px) {
    align-self: center;
    position: static;
  }
`,zx=x.img`
    position: absolute;
    top: 50px;
    left: 100px;
    width: 500px;
    animation: fadeIn 1s ease-in-out backwards;
    @media (max-width: 1300px) {
        width: 100%;
        top: 330px;
        left: 15px;
    }
`,Lx=x.img`
    position: absolute;
    top: 50px;
    left: 100px;
    width: 500px;
    animation: fadeIn 1s ease-in-out backwards;
    animation-delay: .5s;
    @media (max-width: 1300px) {
        width: 100%;
        top: 330px;
        left: 15px;
    }
`,Ql=x.div`
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
    > p > span {
        color:  ${e=>e.isBlue?"#2496F0":"#FF837E"};
    }
    @media (max-width: 1300px) {
        top: 550px;
        left: 0px;
        font-size: 20px;
        line-height: 20px;
        width: 100%;
    }
`,Ix=x.p`
    position: absolute;
    top: 471px;
    left: 74px;
    font-size: 65px;
    line-height: 65px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #2496F0;
    @media (max-width: 1300px) {
      font-size: 40px;
      line-height: 40px;
      top: 660px;
      left: 20px;
    }
`,Rx=x.br`
  display: ${e=>e.reverse?"block":"none"};
  @media (max-width: 1300px) {
    display: ${e=>e.reverse?"none":"block"};
  }
`,Ox=x(Ql)`
    font-size: 20px;
    top: 730px;
    left: 50%;
    transform: translateX(-50%);
    @media (max-width: 1300px) {
      top: 800px;
      font-size: 16px;
      height: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
    }
`,Fx=x.img`
    position: absolute;
    top: 790px;
    left: 50%;
    transform: translateX(-50%);
    width: 387px;
    @media (max-width: 1300px) {
      top: 850px;
    }
`,Mx=x.div`
    position: absolute;
    top: 900px;
    left: 50%;
    transform: translateX(-50%);
    width: 974px;
    height: 263px;
    background: url('./mgm/mgm-content1.svg') no-repeat center center;
    background-size: cover;
    @media (max-width: 1300px) {
      top: 950px;
      width: 404px;
      height: 207px;
      background: url('./mgm/mgm-content1-mobile.svg') no-repeat center center;
    }
`,Dx=x.div`
    position: absolute;
    top: 1163px;
    left: 50%;
    transform: translateX(-48%);
    width: 1012px;
    height: 308px;
    background: url('./mgm/mgm-content2.svg') no-repeat center center;
    background-size: cover;
    @media (max-width: 1300px) {
      top: 1120px;
      width: 409px;
      height: 187px;
      background: url('./mgm/mgm-content2-mobile.svg') no-repeat center center;
    }
`,Ax=x.div`
    position: absolute;
    top: 1463px;
    left: 50%;
    transform: translateX(-52%);
    width: 929px;
    height: 299px;
    background: url('./mgm/mgm-content3.svg') no-repeat center center;
    background-size: cover;
    @media (max-width: 1300px) {
      top: 1300px;
      width: 414px;
      height: 189px;
      background: url('./mgm/mgm-content3-mobile.svg') no-repeat center center;
    }
`,Bx=x.img`
    position: absolute;
    top: 1800px;
    left: 50%;
    transform: translateX(-50%);
    width: 821px;
`,Ux=x(Ql)`
    font-size: 20px;
    top: 2110px;
    left: 50%;
    transform: translateX(-50%);
    letter-spacing: 1px;
`,Wx=x.img`
    position: absolute;
    top: 2160px;
    left: 50%;
    transform: translateX(-50%);
    width: 717px;
`,Hx=x(Ql)`
    font-size: 16px;
    font-weight: 400;
    top: 2380px;
    left: 50%;
    transform: translateX(-50%);
    line-height: 25px;
    letter-spacing: 1px;
`,Vx=x.div`
  @media (max-width: 1300px) {
      display: none;
  }
`,Xx=()=>{const[e,t]=P.useState(!0);return P.useEffect(()=>{const n=setInterval(()=>{t(!e)},1e3);return()=>clearInterval(n)},[e]),s.jsx(jx,{children:s.jsxs(kx,{children:[s.jsxs(Vx,{children:[s.jsx(Ex,{src:"./mgm/mgm-trapezoid.svg"}),s.jsx(Cx,{src:"./mgm/mgm-banner-flower.svg"}),s.jsx(_x,{src:"./mgm/mgm-info-flower.svg"}),s.jsx(Px,{src:"./mgm/mgm-content-p-point.svg"}),s.jsx(Nx,{src:"./mgm/mgm-building.svg"}),s.jsx(Tx,{src:"./mgm/mgm-blue-building.svg"})]}),s.jsx($x,{src:"./mgm/mgm-banner-video-mobile.mp4",autoPlay:!0,muted:!0}),s.jsx(zx,{src:"./mgm/mgm-title.png"}),s.jsx(Lx,{src:"./mgm/mgm-title-p.png"}),s.jsxs(Ql,{isBlue:e,children:[s.jsx("p",{children:"推薦好友全球旅平險"}),s.jsxs("p",{children:["快樂",s.jsx("span",{children:"+1+1+1+1+1+1+1+1+1"})]})]}),s.jsxs(Ix,{children:["COLLECT",s.jsx(Rx,{reverse:!0})," A LOT OF LINE POINTS"]}),s.jsxs(Ox,{children:[s.jsx("p",{children:"2024/10/1~2025/1/31"}),s.jsx("p",{children:"成功邀請親友投保旅平險，達指定筆數"})]}),s.jsx(Fx,{src:"./mgm/mgm-line-points-text.svg"}),s.jsx(Mx,{}),s.jsx(Dx,{}),s.jsx(Ax,{}),s.jsx(Bx,{src:"./mgm/mgm-people-and-frame.svg"}),s.jsx(Ux,{children:s.jsx("p",{children:"只要親友點選「你的推薦連結」成功投保"})}),s.jsx(Wx,{src:"./mgm/mgm-bottom-info-title.svg"}),s.jsxs(Hx,{children:[s.jsx("p",{children:"點擊上方按鈕後，註冊或登入取得邀請碼"}),s.jsx("p",{children:"就能分享給親友，一起抽點數！"})]})]})})},Qx=x.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Yx=()=>s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",title:"減號圖標",children:s.jsx("path",{d:"M6 12L18 12",stroke:"#000000",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),Gx=()=>s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",title:"加號圖標",children:s.jsx("path",{d:"M12 6V18M6 12H18",stroke:"#000000",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),Kx=x.div`
  width: ${e=>e.$width||"100%"};
  height: ${e=>e.$height||"65px"};
  background-color: #FFFAF1;
  border-radius: 8px;
  position: absolute;
  top: 5px;
  left: 5px;
  transition: all 0.3s ease;
`,Zx=x.div`
  width: ${e=>e.$width||"100%"};
  height: ${e=>e.$height||"65px"};
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
`,Jx=x.button`
  width: ${e=>e.$width||"100%"};
  height: ${e=>e.$height||"65px"};
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
`,fc=x.div`
  position: relative;
  right: 50px;
`;function zs({title:e,isOpen:t,onClick:n,children:r}){return s.jsxs(Qx,{children:[s.jsxs(Jx,{onClick:n,children:[s.jsx(Kx,{}),s.jsx(Zx,{children:s.jsx("div",{style:{zIndex:5},children:e})}),t?s.jsx(fc,{children:s.jsx(Yx,{})}):s.jsx(fc,{children:s.jsx(Gx,{})})]}),t&&r]})}zs.propTypes={title:dt.string.isRequired,isOpen:dt.bool.isRequired,onClick:dt.func.isRequired,children:dt.node.isRequired};const qx=x.ol`
  padding-left: 20px;
`,Ve=x.li`
  margin-bottom: 10px;
  list-style: decimal;
  padding-left: 18px;
`,Re=x.p`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: #000000;
`,pc=x.a`
  color: #000000;
  text-decoration: underline;
	cursor: pointer;
`;function Ls({isPart2:e=!1}){return s.jsx("div",{children:s.jsxs(qx,{children:[s.jsx(Ve,{children:e?s.jsx(Re,{children:"凡邀請人於活動期間（2024/10/1-2025/1/31）透過投保邀請連結，邀請親友成功投保國內外旅行平安險（其投保流程之「會員推薦碼」欄位須顯示邀請人推薦碼，若系統無自動帶入，可由被邀請人自行輸入，恕不接受補登），且該保單無撤銷或終止契約之情事者，始具備抽獎及中獎資格。"}):s.jsx(Re,{children:"本活動限定全球人壽網路投保會員參加，需於活動期間（2024/10/1-2025/1/31）成功網路投保「國內外旅行平安險」，並符合各獎項參加門檻，且該保單無撤銷或終止契約之情事者，始具備抽獎及中獎資格。"})}),s.jsx(Ve,{children:s.jsx(Re,{children:"本活動將於2025/3/31前以電腦隨機抽出獎項，2025/4/30前於本網站公告中獎名單。本公司將主動以電子郵件/簡訊通知活動中獎人，請活動中獎人於指定回覆資料截止日期前登錄系統，並提供真實姓名、身分證字號、地址、電話等個人資料，以完成相關領獎作業（上傳代扣稅收據及中獎人身分證正反面影本），逾期回覆或未回覆者視為放棄中獎資格，本公司不遞補名額。"})}),s.jsx(Ve,{children:s.jsxs(Re,{children:["本活動所提供獎品之電子禮券使用方式及限制等，悉依各項獎品或服務之製造或提供廠商的說明為準，詳情請前往",s.jsx(pc,{href:"https://tx.edenred.tw/",target:"_blank",children:"Edenred好禮即享券網站"}),"查詢。因廠商或品牌之電子禮券序號大多具有兌換時效性，建議您在獲得中獎序號同時立即進行兌換，若因逾期未兌換而失效者，不得要求本公司重新提供或更換獎項；若序號遺失或遭盜用、竄改等情形，亦恕不補發。"]})}),s.jsx(Ve,{children:s.jsx(Re,{children:"本活動所提供之獎項內容，不得折換現金、兌換其他商品或優惠，亦不得將本活動中獎資格轉讓或轉售予他人；本活動獎項如遇缺貨或不可抗力之因素無法提供時，本公司有權以其他等值商品替代。獎項實際金額以本公司購入之當時金額為準，獎項所衍生之費用皆由中獎者自行負擔。"})}),s.jsx(Ve,{children:s.jsx(Re,{children:"參加本活動即視為同意本公司得因本活動之需要，依個人資料保護法相關規定，於本活動期間內，以電子檔或紙本形式於我國境內蒐集、處理，及向活動廠商、稅捐機關等對象利用其個人資料（包含姓名、身分證字號/居留證、電話、電子郵件等）。參加本活動者可自由選擇是否提供完整個人資訊，惟若不願提供或提供資訊不完整、不正確者，將無法參加本活動或喪失中獎資格。"})}),s.jsx(Ve,{children:s.jsx(Re,{children:"本活動如有任何因電腦、網路、電話、技術或其他不可歸責於本公司之事由，致本系統誤送活動訊息或中獎通知，或使參加本活動者所寄出、填寫或登錄之資料有遺失、錯誤、無法辨識或毀損等情形，本公司不負任何法律責任。"})}),s.jsx(Ve,{children:s.jsx(Re,{children:"本公司有權檢視本活動是否有人為操作之行為，對於以偽造、詐欺或其他不正當之方式意圖兌領之參加者，本公司有權撤銷其中獎資格或拒絕其參與本活動，並對於任何破壞本活動行為保留相關權利。活動中獎人若取消保單將喪失中獎資格。"})}),s.jsx(Ve,{children:s.jsx(Re,{children:"依稅法規定，中獎者若為中華民國境內居住之個人，且所中獎項價值超過新臺幣（以下同）1,000元時，本公司將於翌年開立所得稅扣繳憑單予中獎者，如所中獎項價值為20,000元（含）以上者，中獎者須先繳交10%機會中獎稅金，始可領獎。中獎者若為非中華民國境內居住之個人（即在中華民國境內居住未達183天之本國人及外國人），不論中獎獎項價值，均須先就中獎所得扣繳20％機會中獎稅金，始可領獎，且本公司須開立所得稅扣繳憑單。若未能依法繳納應繳稅額，即視為喪失中獎資格。參加者因參加本活動而須支付之任何稅捐皆為參加者之義務，概與本公司無關。前述稅捐法規如有更新或變動者，依修正後之規定辦理。"})}),s.jsx(Ve,{children:s.jsxs(Re,{children:["本活動連結之保險完整商品內容與給付限制，請參閱",s.jsx(pc,{href:"https://e-commerce.transglobe.com.tw/product/eta",target:"_blank",children:"e路平安旅行平安保險"}),"商品頁之保單條款。"]})}),s.jsx(Ve,{children:s.jsx(Re,{children:"本公司非獎品製造者或提供者，與各項獎品或服務之製造或提供廠商無任何代理或合夥關係，對於各項獎品不負任何擔保責任，且本活動獎品之保固期限均依廠商出廠時實際提供者為準。得獎者如因本活動各項獎品、服務或保固發生任何爭議，概與本公司無關。"})}),s.jsx(Ve,{children:s.jsx(Re,{children:"本活動如因故無法舉行，本公司有權取消、終止、延期、修改活動內容、更換獎項內容或暫停本活動進行等之相關決定，並得以公告方式通知參加者。如有未盡事宜或疑義時，悉依本公司相關規定或解釋辦理。"})})]})})}Ls.propTypes={isPart2:dt.bool};const bx=x.ol`
  display: flex;
  flex-direction: column;
  gap: 24px;
  counter-reset: item;
`,Un=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2496F0;
  border-radius: 100%;
  width: 15px;
  height: 15px;
  flex-shrink: 0;
`,Po=x.li`
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
`,No=x.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
	@media (max-width: 480px) {
		gap: 20px;
	}
`,pt=x.div`
  font-size: 40px;
  font-weight: bold;
  line-height: 40px;
	font-family: "Noto Serif TC";
`,A=x.div`
  font-size: 20px;
  font-weight: 300;
  line-height: ${({lineHeight:e})=>e}px;
  color: ${({highlight:e})=>e?"#2496F0":"#000000"};
  white-space: pre-wrap;
  font-family: Noto TC;
	@media (max-width: 480px) {
		margin-left: ${({marginLeft:e})=>e};
	}
`,ln=x.div`
  display: flex;
  align-items: flex-end;
  gap: 22px;
	@media (max-width: 480px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 10px;
	}
`,jl=x.div`
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
		margin-left: ${({marginLeft:e})=>e};
	}
`,Pi=x.div`
  font-size: 25px;
  line-height: 25px;
  color: #000000;
  font-weight: bold;
`;function ev(){return s.jsxs(bx,{children:[s.jsx(Po,{children:s.jsxs(No,{children:[s.jsxs(ln,{children:[s.jsx(pt,{children:"跨年出國抽獎趣"}),s.jsx(A,{lineHeight:20,children:"(僅限國外旅平險)"})]}),s.jsx(A,{lineHeight:30,children:"於2024/12/15-2025/1/20期間成功投保「國外旅平險」，不限單筆保費金額，可額外享「8,800元旅遊大紅包」加碼抽獎機會乙次（價值8,800元好禮即享券，共抽5名，每人限獲獎乙次）。"})]})}),s.jsx(Po,{children:s.jsxs(No,{children:[s.jsx(ln,{children:s.jsx(pt,{children:"投保滿額抽獎趣"})}),s.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"22px"},children:[s.jsx(jl,{marginLeft:"-50px",children:"1"}),s.jsxs(A,{lineHeight:30,children:["單筆保費滿200元，該筆保單即享「500元好禮即享券」抽獎機會乙次",s.jsx("br",{}),"（共抽100名，每人獲獎次數不限）。"]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"22px"},children:[s.jsx(jl,{marginLeft:"-50px",children:"2"}),s.jsxs("div",{children:[s.jsxs(A,{lineHeight:30,children:["單筆保費滿500元，該筆保單即享「星宇航空東京來回機票」抽獎機會乙次",s.jsx("br",{}),"（價值20,000元旅遊商品兌換券乙組，共抽5名，每人限獲獎乙次）。"]}),s.jsx(A,{highlight:!0,lineHeight:30,children:"註：「首次成功投保者」係指自註冊後從未投保任一險種之網路投保會員，且於活動期間成功投保旅平險為其首筆保單。"})]})]})]})}),s.jsx(Po,{children:s.jsxs(No,{children:[s.jsxs(ln,{children:[s.jsx(pt,{children:"首次投保抽獎趣"}),s.jsx(A,{lineHeight:20,children:"(僅限國外旅平險)"})]}),s.jsxs("div",{children:[s.jsx(A,{lineHeight:30,children:"活動期間於本公司網路投保首次成功投保者*，不限該筆旅平險保費金額，即享「200元全聯禮券」抽獎機會乙次（共抽200名，每人限獲獎乙次）。"}),s.jsx(A,{highlight:!0,lineHeight:30,children:"註：「首次成功投保者」係指自註冊後從未投保任一險種之網路投保會員，且於活動期間成功投保旅平險為其首筆保單。"})]})]})})]})}const tv=()=>s.jsxs("div",{children:[s.jsxs("div",{style:{paddingBottom:"40px",borderBottom:"1px solid #000000"},children:[s.jsx("div",{style:{marginBottom:"30px"},children:s.jsx(pt,{children:"跨年出國抽獎趣"})}),s.jsxs(ln,{style:{marginBottom:"20px"},children:[s.jsx(Pi,{children:"8,800元好禮即享券"}),s.jsx(A,{lineHeight:20,children:"（無效期餘額型）"})]}),s.jsxs(A,{children:["20大品牌讓收券者自選面額，可多次自由選配。",s.jsx("br",{}),"適用通路：全聯、王品集團、7-ELEVEN、全家、家樂福、大潤發、屈臣氏、特力集團、漢來美食通用券、遠東SOGO百貨、遠東百貨、遠東巨城購物中心、foodpanda、寶雅集團、漢神百貨/漢神巨蛋、瓦城集團、爭鮮集團、小北百貨、美廉社&三友藥妝通用、楓康超市。"]})]}),s.jsxs("div",{style:{marginTop:"40px"},children:[s.jsx("div",{style:{marginBottom:"30px"},children:s.jsx(pt,{children:"投保滿額抽獎趣"})}),s.jsxs(ln,{style:{marginBottom:"20px"},children:[s.jsx(Pi,{children:"500元好禮即享券"}),s.jsx(A,{lineHeight:20,children:"（無效期餘額型）"})]}),s.jsxs(A,{children:["可分次抵用。五大品牌擇一使用，一旦選定品牌，限全額度單一品牌兌換使用。",s.jsx("br",{}),"適用通路：家樂福、遠東SOGO百貨、遠東百貨、王品集團、7-ELEVEN。"]})]}),s.jsxs("div",{style:{marginTop:"40px",paddingBottom:"40px",borderBottom:"1px solid #000000"},children:[s.jsxs(ln,{children:[s.jsx(Pi,{children:"星宇航空東京來回機票"}),s.jsx(A,{lineHeight:20,children:"（以ezfly 優惠碼形式提供「價值20,000元旅遊兌換券」）"})]}),s.jsx("div",{style:{marginTop:"20px"},children:s.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"20px"},children:[s.jsx(Un,{}),s.jsx(A,{lineHeight:30,children:"本優惠碼ezfly易飛網全品項都可使用，恕無法兌換現金或找零，請一次抵用完畢，不可重複使用。"})]})}),s.jsx("div",{style:{marginTop:"20px"},children:s.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"20px"},children:[s.jsx(Un,{}),s.jsx(A,{lineHeight:30,children:"兌換方式：本優惠碼需以人工訂票方式預約行程並成功開票或確認完成訂房、訂票，方可使用。"})]})}),s.jsx("div",{style:{marginTop:"20px"},children:s.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"20px"},children:[s.jsx(Un,{}),s.jsx(A,{lineHeight:30,children:"本優惠碼因訂票方式，若預定品項為國內外機票或其他旅遊行程等預定品項，則另需支付人工訂票手續費，詳細費用請洽ezfly專人。"})]})})]}),s.jsxs("div",{style:{marginTop:"40px"},children:[s.jsx("div",{style:{marginBottom:"30px"},children:s.jsx(pt,{children:"首次投保抽獎趣"})}),s.jsxs(ln,{style:{marginBottom:"20px"},children:[s.jsx(Pi,{children:"200元全聯禮券"}),s.jsx(A,{lineHeight:20,children:"（無效期餘額型）"})]}),s.jsx(A,{children:"限全聯實體門市使用，可分次使用至面額兌換完畢，恕無法支付線上購物（含PXGo!、分批取、小時達等)、外送平台、代收業務（含雙北專用購物袋)、服務事項、兌換現金/儲值金/禮券/禮卡及菸品等相關受法令限制商品。"})]})]});function nv(){return s.jsxs("div",{style:{width:"100%"},children:[s.jsx(pt,{children:"邀請人"}),s.jsxs("div",{style:{marginTop:"24px",display:"flex",flexDirection:"column",gap:"20px"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"20px"},children:[s.jsx(Un,{}),s.jsx(A,{lineHeight:30,children:"成功邀請1筆保單，享「50點LINE POINTS好禮即享券」抽獎機會乙次（共抽200名）。"})]}),s.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"20px"},children:[s.jsx(Un,{}),s.jsx(A,{lineHeight:30,children:"成功邀請2筆保單，享「150點LINE POINTS好禮即享券」抽獎機會乙次（共抽200名）。"})]}),s.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"20px"},children:[s.jsx(Un,{}),s.jsx(A,{lineHeight:30,children:"成功邀請3筆以上保單，享「300點LINE POINTS好禮即享券」抽獎機會乙次（共抽100名）。"})]})]})]})}function rv(){return s.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:"20px"},children:[s.jsx(pt,{children:"被邀請人"}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[s.jsx(A,{children:"不限單筆保費金額，該筆保單即享「50點LINE POINTS好禮即享券」抽獎機會乙次"}),s.jsx(A,{children:"（共抽300名，每人限獲獎乙次）。"}),s.jsx(A,{highlight:!0,children:"註：被邀請人投保時須填入「邀請人推薦碼」資訊（不可為本人推薦碼），雙方方符合抽獎資格。"})]})]})}const Sp=x.div`
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
`;function iv(){return s.jsxs("div",{children:[s.jsx(Sp,{children:"案例說明"}),s.jsx("div",{style:{marginTop:"20px"},children:s.jsx(A,{children:"全小球邀請五位朋友參與此活動，其中有兩位朋友於活動期間共成功投保3筆旅平險（且皆有填寫全小球之推薦碼)，則全小球可享「300點LINE POINTS好禮即享券」抽獎機會乙次; 而兩位朋友分別享有「50點LINE POINTS好禮即享券」1次與2次之抽獎機會。"})})]})}function lv(){return s.jsxs(s.Fragment,{children:[s.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:"24px"},children:[s.jsxs(pt,{children:["50點、150點、300點",s.jsx("br",{}),"LINE POINTS好禮即享券"]}),s.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"22px"},children:[s.jsx(jl,{children:"1"}),s.jsx(A,{lineHeight:30,children:"LINE POINTS即享券僅限LINE帳號註冊國家為台灣的用戶使用。"})]}),s.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"22px"},children:[s.jsx(jl,{children:"2"}),s.jsxs(A,{lineHeight:30,children:["LINE POINTS的有效期限為最後一次獲得點數當天起算180天內，",s.jsx("br",{}),"一旦超過有效期限，您所持有的點數將會全數失效。"]})]})]}),s.jsxs("div",{style:{marginTop:"24px"},children:[s.jsx(Sp,{children:"活動獎項發放說明"}),s.jsx("div",{style:{marginTop:"20px"},children:s.jsx(A,{children:"本活動獎項採電子票券形式，將以Edenred之LINE「好禮即享券領券通知」的官方帳號發送通知型訊息予中獎者。 若您無法接收到通知型訊息，活動小組將另發送好禮即享券簡訊通知。"})})]})]})}const ov=x.div`
  padding-top: 121px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`,hc=x.div`
  width: 100%;
  height: 100%;
  background-color: ${e=>e.bg||"#FFF5CD"};
  display: flex;
  justify-content: center;
  z-index: ${e=>e.zIndex||0};
`,mc=x.div`
  width: 100%;
  max-width: 1366px;
  position: relative;
  padding: 62px 166px 49px;
  display: flex;
  flex-direction: column;
  align-items: center;
	@media (max-width: 850px) {
		padding: 62px 60px 49px;
	}
	@media (max-width: 480px) {
		padding: 62px 20px 49px;
	}
`,sv=x.img`
  width: 100%;
  position: absolute;
  pointer-events: none;
`,av=x.div`
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 63px;
	font-family: "Noto Serif TC";
	@media (max-width: 480px) {
		font-size: 40px;
	}
`,gc=x.div`
  width: 613px;
  display: flex;
  gap: 25px;
  margin-bottom: 37px;
	@media (max-width: 480px) {
		width: 100%;
	}
`,jt=x.div`
  width: 100%;
  height: 1px;
  border: 1px solid #000;
  border-style: ${e=>e.dashed?"dashed":"solid"};
`,uv=x.img`
  width: 419px;
`,cv=x.img`
  width: 419px;
  position: absolute;
  top: 4px;
  left: -10px;
`,dv=x.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 56px;
`,kt=x.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 30px;
	@media (max-width: 480px) {
		flex-direction: column;
		gap: 20px;
	}
`,Et=x.div`
  width: 183px;
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
	}
`,Sn=x.div`
  font-weight: bold;
  font-size: 18px;
	font-family: "Noto Sans TC";
`,Y=x.div`
  width: 100%;
  height: ${e=>e.height}px;
`,fv=x.div`
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
`;function pv(){const[e,t]=P.useState(!1),[n,r]=P.useState(!1);return s.jsxs(ov,{children:[s.jsx(hc,{children:s.jsxs(mc,{children:[s.jsx(av,{children:"活動辦法"}),s.jsxs(gc,{children:[s.jsx(Ge,{children:"旅行全球抽獎趣"}),s.jsx(Ge,{children:"分享全球樂透抽"})]}),s.jsx(jt,{}),s.jsxs(dv,{children:[s.jsx(uv,{src:"./home/event-banner-title.png"}),s.jsx(cv,{src:"./home/event-banner-airplane.png"})]}),s.jsxs(kt,{children:[s.jsx(Et,{children:"活動期間"}),s.jsx(Sn,{children:"2024/10/1-2025/1/31"})]}),s.jsx(Y,{height:32}),s.jsx(jt,{}),s.jsx(Y,{height:32}),s.jsxs(kt,{children:[s.jsx(Et,{children:"活動辦法"}),s.jsx(Sn,{children:"凡於活動期間內成功網路投保「國內外旅行平安險」， 並達指定活動條件，即符合該項抽獎資格。"})]}),s.jsx(Y,{height:83}),s.jsx(ev,{}),s.jsx(Y,{height:40}),s.jsx(jt,{}),s.jsx(Y,{height:53}),s.jsxs(kt,{children:[s.jsx(Et,{children:"得獎公告"}),s.jsx(Sn,{children:"得獎者將於2025/4/30前於本網站統一公告。"})]}),s.jsx(Y,{height:44}),s.jsx(jt,{}),s.jsx(Y,{height:53}),s.jsx(kt,{children:s.jsx(Et,{children:"獎項說明"})}),s.jsx(Y,{height:25}),s.jsx(tv,{}),s.jsx(Y,{height:40}),s.jsxs(fv,{children:[s.jsx("div",{className:"title",children:"活動獎項發放說明"}),s.jsx("div",{className:"text",children:"本活動獎項採電子票券形式，將以Edenred之LINE「好禮即享券領券通知」的官方帳號發送通知型訊息予中獎者。若您無法接收到通知型訊息，活動小組將另發送好禮即享券簡訊通知。"})]}),s.jsx(Y,{height:58}),s.jsx(zs,{title:"注意事項",isOpen:e,onClick:()=>t(!e),children:s.jsx(Ls,{})})]})}),s.jsx(hc,{bg:"#FED430",children:s.jsxs(mc,{children:[s.jsx("img",{src:"./policy/event2-banner.svg",alt:"event2-banner"}),s.jsx(Y,{height:66}),s.jsxs(kt,{children:[s.jsx(Et,{children:"活動期間"}),s.jsx(Sn,{children:"2024/10/1-2025/1/31"})]}),s.jsx(Y,{height:32}),s.jsx(jt,{}),s.jsx(Y,{height:32}),s.jsxs(kt,{children:[s.jsx(Et,{children:"活動辦法"}),s.jsxs(Sn,{children:["活動期間邀請親友成功投保國內外旅平險達指定筆數，",s.jsx("br",{}),"即符合LINE POINTS抽獎資格。"]})]}),s.jsx(Y,{height:42}),s.jsx(nv,{}),s.jsx(Y,{height:42}),s.jsx(rv,{}),s.jsx(Y,{height:42}),s.jsx(iv,{}),s.jsx(Y,{height:45}),s.jsx(jt,{}),s.jsx(Y,{height:54}),s.jsxs(kt,{children:[s.jsx(Et,{children:"得獎公告"}),s.jsx(Sn,{children:"得獎者將於2025/4/30前於本網站統一公告。"})]}),s.jsx(Y,{height:44}),s.jsx(jt,{}),s.jsx(Y,{height:53}),s.jsx(kt,{children:s.jsx(Et,{children:"獎項說明"})}),s.jsx(Y,{height:42}),s.jsx(lv,{}),s.jsx(Y,{height:42}),s.jsx(zs,{title:"注意事項",isOpen:n,onClick:()=>{r(!n)},children:s.jsx(Ls,{isPart2:!0})}),s.jsx(Y,{height:50}),s.jsx(jt,{}),s.jsx(Y,{height:35}),s.jsxs(gc,{children:[s.jsx(Ge,{color:"blue",children:"旅行全球抽獎趣"}),s.jsx(Ge,{color:"blue",children:"分享全球樂透抽"})]})]})}),s.jsx(sv,{src:"./policy/flower.svg",alt:""})]})}const xc=""+new URL("../logo.png",import.meta.url).href;function hv(){const[e,t]=P.useState(!1),n=Uf(),r=ri();P.useEffect(()=>{window.scrollTo(0,0)},[r.pathname]);const i=()=>{t(!e)},l=P.useCallback((o,a)=>{o.preventDefault(),t(!1);const u=window.location.pathname==="/"||window.location.pathname==="/index.html",c=()=>{const m=document.querySelector(a);if(m){const h=document.querySelector(".menu").offsetHeight,g=m.getBoundingClientRect().top+window.scrollY-h-60;window.scrollTo({top:g,behavior:"smooth"})}else console.log("can not find target")};u?(window.history.pushState(null,"",a),c()):(n(`/${a}`),setTimeout(()=>{window.history.pushState(null,"",a),c()},200))},[]);return s.jsxs(s.Fragment,{children:[s.jsxs("header",{className:"menu w-full px-6",children:[s.jsx("div",{className:"flex-shrink-0 ml-[3vw]",children:s.jsx("a",{href:"https://www.transglobe.com.tw/",target:"_blank",rel:"noopener noreferrer",children:s.jsx("img",{src:xc,alt:"Logo",className:""})})}),s.jsxs("nav",{className:"flex space-x-7",children:[s.jsxs("a",{href:"/",className:"relative menu-text",onClick:o=>l(o,"#sec1"),children:["跨年出國抽",s.jsx("p",{className:"color-changing-text absolute top-[-13%] right-[-2%] w-7 h-7 transfer-position-xy-1 flex items-center justify-center text-xs font-bold font-roboto transform rotate-12",children:"NEW"})]}),s.jsx("a",{href:"/",className:"menu-text",onClick:o=>l(o,"#sec2"),children:"投保滿額抽"}),s.jsx("a",{href:"/",className:"menu-text",onClick:o=>l(o,"#sec3"),children:"首次投保抽"}),s.jsx(Ei,{to:"/mgm",className:"menu-text",children:"分享全球抽"}),s.jsx(Ei,{to:"/policy",className:"menu-text",children:"活動辦法"})]})]}),s.jsxs("header",{className:`mobile-menu xl:hidden ${e?"h-full":""}`,children:[s.jsx("div",{className:`flex-shrink-0 w-[26vw] ml-[3vw] mt-2 ${e?"hidden":"block"}`,children:s.jsx("a",{href:"https://www.transglobe.com.tw/",target:"_blank",rel:"noopener noreferrer",children:s.jsx("img",{src:xc,alt:"Logo",className:""})})}),s.jsxs("button",{className:"absolute top-3 right-4 flex items-center justify-center",onClick:i,children:[s.jsx("img",{src:"./menu/menu-hamburger.svg",alt:"Open Menu",className:`h-12 w-12 transition-opacity duration-300 ${e?"opacity-0":"opacity-100"}`}),s.jsx("img",{src:"./menu/menu-close-sm.svg",alt:"Close Menu",className:`h-12 w-12 absolute transition-opacity duration-300 ${e?"opacity-100":"opacity-0"}`})]}),s.jsx("div",{className:"flex flex-col items-center justify-center w-[100vw]",children:s.jsx("nav",{className:`static flex flex-col items-center justify-center space-y-4 ${e?"":"hidden"}`,children:s.jsxs("nav",{className:"flex flex-col space-y-6 px-14",children:[s.jsxs("a",{href:"/",className:"relative mobile-text",onClick:o=>l(o,"#sec1"),children:["跨年出國抽",s.jsx("p",{className:"color-changing-text absolute top-[-13%] right-[-2%] w-5 h-7 transfer-position-xy-1 flex items-center justify-center text-xs font-bold font-roboto transform rotate-30",children:"NEW"})]}),s.jsx("a",{href:"/",className:"mobile-text",onClick:o=>l(o,"#sec2"),children:"投保滿額抽"}),s.jsx("a",{href:"/",className:"mobile-text",onClick:o=>l(o,"#sec3"),children:"首次投保抽"}),s.jsx(Ei,{to:"/mgm",className:"mobile-text",onClick:i,children:"分享全球抽"}),s.jsx(Ei,{to:"/policy",className:"mobile-text",onClick:i,children:"活動辦法"})]})})})]})]})}function mv(){const[e,t]=P.useState(!1),n=()=>{t(!e)};return s.jsxs("footer",{children:[s.jsx("div",{className:"footer_top",children:s.jsxs("div",{className:"footer_inner",children:[s.jsxs("div",{className:"footer_link",children:[s.jsx("div",{className:"footer_title",children:"相關連結"}),s.jsx("div",{className:"style_pc",children:s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx("a",{href:"https://www.transglobe.com.tw/",target:"_blank",children:"全球人壽官網"})}),s.jsx("li",{children:s.jsx("a",{href:"https://www.facebook.com/TGLlife/?fref=ts",className:"icon_footer_fb",target:"_blank",children:"全球人壽粉絲YA　"})}),s.jsx("li",{children:s.jsx("a",{href:"https://eservice.transglobe.com.tw/cs/Logon/Logon.xhtml",target:"_blank",children:"保戶專區"})}),s.jsx("li",{children:s.jsx("a",{href:"https://www.transglobe.com.tw/service-contact-location.html?",target:"_blank",children:"服務據點　"})}),s.jsx("li",{children:s.jsx("a",{href:"https://www.transglobe.com.tw/law-lawcom.html",target:"_blank",children:"電子商務自律規範主管機關連結"})}),s.jsx("li",{children:s.jsx("a",{href:"https://e-commerce.transglobe.com.tw/assets/tgl/pdf/TGLECContract.pdf",target:"_blank",children:"網路投保業務暨網路保險服務契約"})})]})}),s.jsxs("div",{className:"style_mb",children:[s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx("a",{href:"http://www.transglobe.com.tw/transglobe-web",target:"_blank",children:"全球人壽官網"})}),s.jsx("li",{children:s.jsx("a",{href:"https://www.fsc.gov.tw/ch/index.jsp",target:"_blank",children:"主管機關連結"})})]}),s.jsxs("div",{className:"footer_more",children:[s.jsxs("div",{className:"footer_title btn_footer_more",children:["更多相關連結",s.jsx("svg",{className:"icon-footer-arrow",onClick:n,children:s.jsx("use",{"xlink:href":"images/icon-re.svg?svg=#ico-accor"})})]}),s.jsx("div",{className:`footer_more_content ${e?"active2":""}`,children:s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx("a",{href:"https://www.facebook.com/TGLlife/?fref=ts",className:"icon_footer_fb",target:"_blank",children:"全球人壽粉絲YA　"})}),s.jsx("li",{children:s.jsx("a",{href:"https://eservice.transglobe.com.tw/cs/Logon/Logon.xhtml",target:"_blank",children:"保戶專區"})}),s.jsx("li",{children:s.jsx("a",{href:"https://www.transglobe.com.tw/service-contact-location.html?",target:"_blank",children:"服務據點　"})}),s.jsx("li",{children:s.jsx("a",{href:"https://www.transglobe.com.tw/law-lawcom.html",target:"_blank",children:"電子商務自律規範主管機關連結"})}),s.jsx("li",{children:s.jsx("a",{href:"https://e-commerce.transglobe.com.tw/assets/tgl/pdf/TGLECContract.pdf",target:"_blank",children:"網路投保業務暨網路保險服務契約"})})]})})]})]})]}),s.jsxs("div",{className:"footer_info",children:[s.jsx("div",{className:"footer_title",children:"聯絡我們"}),s.jsxs("ul",{children:[s.jsx("li",{className:"icon_footer_map",children:s.jsxs("span",{children:["台北市110信義區市民大道六段288號16樓",s.jsx("a",{href:"https://www.google.com/maps?q=%E5%8F%B0%E5%8C%97%E5%B8%82%E4%BF%A1%E7%BE%A9%E5%8D%80%E5%B8%82%E6%B0%91%E5%A4%A7%E9%81%93%E5%85%AD%E6%AE%B5288%E8%99%9F16%E6%A8%93&t=m&z=16",target:"_blank",className:"link_map",children:"地圖"})]})}),s.jsx("li",{className:"icon_footer_phone",children:"免付費服務專線：0800-000-662"})]})]})]})}),s.jsx("div",{className:"footer_bottom",children:s.jsx("div",{className:"footer_inner",children:s.jsx("span",{className:"copyright",children:"2024 ©本網站版權屬 全球人壽保險股份有限公司所有"})})})]})}const gv=x.img`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 10;
  cursor: pointer;
  display: ${e=>e.$show?"block":"none"};
  @media (max-width: 1301px) {
    width: 50px;
  }
`;function xv(){const t=window.location.hostname==="siaochi.github.io"?"/travel-web":"/",[n,r]=P.useState(!1),i=()=>{window.scrollTo({top:0,behavior:"smooth"})};return P.useEffect(()=>{window.addEventListener("scroll",()=>{window.scrollY>500?r(!0):r(!1)})},[]),s.jsxs(V0,{basename:t,children:[s.jsx(hv,{}),s.jsxs(M0,{children:[s.jsx(Bi,{path:"/",element:s.jsx(Sx,{})}),s.jsx(Bi,{path:"/mgm",element:s.jsx(Xx,{})}),s.jsx(Bi,{path:"/policy",element:s.jsx(pv,{})})]}),s.jsx(mv,{}),s.jsx(gv,{src:"./top-btn.svg",onClick:i,$show:n})]})}Lf(document.getElementById("root")).render(s.jsx(P.StrictMode,{children:s.jsx(xv,{})}));
