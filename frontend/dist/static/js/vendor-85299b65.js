function zA(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var aw={},jA={get exports(){return aw},set exports(t){aw=t}},Eh={},Ot={},BA={get exports(){return Ot},set exports(t){Ot=t}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ou=Symbol.for("react.element"),qA=Symbol.for("react.portal"),KA=Symbol.for("react.fragment"),WA=Symbol.for("react.strict_mode"),GA=Symbol.for("react.profiler"),HA=Symbol.for("react.provider"),QA=Symbol.for("react.context"),YA=Symbol.for("react.forward_ref"),XA=Symbol.for("react.suspense"),JA=Symbol.for("react.memo"),ZA=Symbol.for("react.lazy"),uw=Symbol.iterator;function eN(t){return t===null||typeof t!="object"?null:(t=uw&&t[uw]||t["@@iterator"],typeof t=="function"?t:null)}var O1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$1=Object.assign,L1={};function ko(t,e,n){this.props=t,this.context=e,this.refs=L1,this.updater=n||O1}ko.prototype.isReactComponent={};ko.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ko.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function M1(){}M1.prototype=ko.prototype;function sg(t,e,n){this.props=t,this.context=e,this.refs=L1,this.updater=n||O1}var og=sg.prototype=new M1;og.constructor=sg;$1(og,ko.prototype);og.isPureReactComponent=!0;var lw=Array.isArray,F1=Object.prototype.hasOwnProperty,ag={current:null},U1={key:!0,ref:!0,__self:!0,__source:!0};function V1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)F1.call(e,r)&&!U1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ou,type:t,key:s,ref:o,props:i,_owner:ag.current}}function tN(t,e){return{$$typeof:Ou,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ug(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ou}function nN(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cw=/\/+/g;function tf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?nN(""+t.key):e.toString(36)}function Kl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ou:case qA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+tf(o,0):r,lw(i)?(n="",t!=null&&(n=t.replace(cw,"$&/")+"/"),Kl(i,e,n,"",function(l){return l})):i!=null&&(ug(i)&&(i=tN(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(cw,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",lw(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+tf(s,a);o+=Kl(s,e,n,u,i)}else if(u=eN(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+tf(s,a++),o+=Kl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ml(t,e,n){if(t==null)return t;var r=[],i=0;return Kl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function rN(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var It={current:null},Wl={transition:null},iN={ReactCurrentDispatcher:It,ReactCurrentBatchConfig:Wl,ReactCurrentOwner:ag};G.Children={map:ml,forEach:function(t,e,n){ml(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ml(t,function(){e++}),e},toArray:function(t){return ml(t,function(e){return e})||[]},only:function(t){if(!ug(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};G.Component=ko;G.Fragment=KA;G.Profiler=GA;G.PureComponent=sg;G.StrictMode=WA;G.Suspense=XA;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iN;G.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=$1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ag.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)F1.call(e,u)&&!U1.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:Ou,type:t.type,key:i,ref:s,props:r,_owner:o}};G.createContext=function(t){return t={$$typeof:QA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:HA,_context:t},t.Consumer=t};G.createElement=V1;G.createFactory=function(t){var e=V1.bind(null,t);return e.type=t,e};G.createRef=function(){return{current:null}};G.forwardRef=function(t){return{$$typeof:YA,render:t}};G.isValidElement=ug;G.lazy=function(t){return{$$typeof:ZA,_payload:{_status:-1,_result:t},_init:rN}};G.memo=function(t,e){return{$$typeof:JA,type:t,compare:e===void 0?null:e}};G.startTransition=function(t){var e=Wl.transition;Wl.transition={};try{t()}finally{Wl.transition=e}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(t,e){return It.current.useCallback(t,e)};G.useContext=function(t){return It.current.useContext(t)};G.useDebugValue=function(){};G.useDeferredValue=function(t){return It.current.useDeferredValue(t)};G.useEffect=function(t,e){return It.current.useEffect(t,e)};G.useId=function(){return It.current.useId()};G.useImperativeHandle=function(t,e,n){return It.current.useImperativeHandle(t,e,n)};G.useInsertionEffect=function(t,e){return It.current.useInsertionEffect(t,e)};G.useLayoutEffect=function(t,e){return It.current.useLayoutEffect(t,e)};G.useMemo=function(t,e){return It.current.useMemo(t,e)};G.useReducer=function(t,e,n){return It.current.useReducer(t,e,n)};G.useRef=function(t){return It.current.useRef(t)};G.useState=function(t){return It.current.useState(t)};G.useSyncExternalStore=function(t,e,n){return It.current.useSyncExternalStore(t,e,n)};G.useTransition=function(){return It.current.useTransition()};G.version="18.2.0";(function(t){t.exports=G})(BA);const sN=zA(Ot);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oN=Ot,aN=Symbol.for("react.element"),uN=Symbol.for("react.fragment"),lN=Object.prototype.hasOwnProperty,cN=oN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hN={key:!0,ref:!0,__self:!0,__source:!0};function z1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)lN.call(e,r)&&!hN.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:aN,type:t,key:s,ref:o,props:i,_owner:cN.current}}Eh.Fragment=uN;Eh.jsx=z1;Eh.jsxs=z1;(function(t){t.exports=Eh})(jA);var hw={},mc={},dN={get exports(){return mc},set exports(t){mc=t}},Kt={},lp={},fN={get exports(){return lp},set exports(t){lp=t}},j1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,q){var K=L.length;L.push(q);e:for(;0<K;){var Te=K-1>>>1,Fe=L[Te];if(0<i(Fe,q))L[Te]=q,L[K]=Fe,K=Te;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var q=L[0],K=L.pop();if(K!==q){L[0]=K;e:for(var Te=0,Fe=L.length,fl=Fe>>>1;Te<fl;){var hi=2*(Te+1)-1,ef=L[hi],di=hi+1,pl=L[di];if(0>i(ef,K))di<Fe&&0>i(pl,ef)?(L[Te]=pl,L[di]=K,Te=di):(L[Te]=ef,L[hi]=K,Te=hi);else if(di<Fe&&0>i(pl,K))L[Te]=pl,L[di]=K,Te=di;else break e}}return q}function i(L,q){var K=L.sortIndex-q.sortIndex;return K!==0?K:L.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],l=[],c=1,h=null,d=3,f=!1,y=!1,v=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var q=n(l);q!==null;){if(q.callback===null)r(l);else if(q.startTime<=L)r(l),q.sortIndex=q.expirationTime,e(u,q);else break;q=n(l)}}function I(L){if(v=!1,g(L),!y)if(n(u)!==null)y=!0,Jd(T);else{var q=n(l);q!==null&&Zd(I,q.startTime-L)}}function T(L,q){y=!1,v&&(v=!1,m(O),O=-1),f=!0;var K=d;try{for(g(q),h=n(u);h!==null&&(!(h.expirationTime>q)||L&&!Ye());){var Te=h.callback;if(typeof Te=="function"){h.callback=null,d=h.priorityLevel;var Fe=Te(h.expirationTime<=q);q=t.unstable_now(),typeof Fe=="function"?h.callback=Fe:h===n(u)&&r(u),g(q)}else r(u);h=n(u)}if(h!==null)var fl=!0;else{var hi=n(l);hi!==null&&Zd(I,hi.startTime-q),fl=!1}return fl}finally{h=null,d=K,f=!1}}var N=!1,b=null,O=-1,Z=5,V=-1;function Ye(){return!(t.unstable_now()-V<Z)}function qo(){if(b!==null){var L=t.unstable_now();V=L;var q=!0;try{q=b(!0,L)}finally{q?Ko():(N=!1,b=null)}}else N=!1}var Ko;if(typeof p=="function")Ko=function(){p(qo)};else if(typeof MessageChannel<"u"){var ow=new MessageChannel,VA=ow.port2;ow.port1.onmessage=qo,Ko=function(){VA.postMessage(null)}}else Ko=function(){E(qo,0)};function Jd(L){b=L,N||(N=!0,Ko())}function Zd(L,q){O=E(function(){L(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){y||f||(y=!0,Jd(T))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var q=3;break;default:q=d}var K=d;d=q;try{return L()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,q){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var K=d;d=L;try{return q()}finally{d=K}},t.unstable_scheduleCallback=function(L,q,K){var Te=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?Te+K:Te):K=Te,L){case 1:var Fe=-1;break;case 2:Fe=250;break;case 5:Fe=1073741823;break;case 4:Fe=1e4;break;default:Fe=5e3}return Fe=K+Fe,L={id:c++,callback:q,priorityLevel:L,startTime:K,expirationTime:Fe,sortIndex:-1},K>Te?(L.sortIndex=K,e(l,L),n(u)===null&&L===n(l)&&(v?(m(O),O=-1):v=!0,Zd(I,K-Te))):(L.sortIndex=Fe,e(u,L),y||f||(y=!0,Jd(T))),L},t.unstable_shouldYield=Ye,t.unstable_wrapCallback=function(L){var q=d;return function(){var K=d;d=q;try{return L.apply(this,arguments)}finally{d=K}}}})(j1);(function(t){t.exports=j1})(fN);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B1=Ot,zt=lp;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var q1=new Set,ja={};function ss(t,e){Zs(t,e),Zs(t+"Capture",e)}function Zs(t,e){for(ja[t]=e,t=0;t<e.length;t++)q1.add(e[t])}var Xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cp=Object.prototype.hasOwnProperty,pN=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dw={},fw={};function mN(t){return cp.call(fw,t)?!0:cp.call(dw,t)?!1:pN.test(t)?fw[t]=!0:(dw[t]=!0,!1)}function gN(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function yN(t,e,n,r){if(e===null||typeof e>"u"||gN(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Et(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rt[t]=new Et(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rt[e]=new Et(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rt[t]=new Et(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rt[t]=new Et(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rt[t]=new Et(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rt[t]=new Et(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rt[t]=new Et(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rt[t]=new Et(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rt[t]=new Et(t,5,!1,t.toLowerCase(),null,!1,!1)});var lg=/[\-:]([a-z])/g;function cg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(lg,cg);rt[e]=new Et(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(lg,cg);rt[e]=new Et(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(lg,cg);rt[e]=new Et(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rt[t]=new Et(t,1,!1,t.toLowerCase(),null,!1,!1)});rt.xlinkHref=new Et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rt[t]=new Et(t,1,!1,t.toLowerCase(),null,!0,!0)});function hg(t,e,n,r){var i=rt.hasOwnProperty(e)?rt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(yN(e,n,i,r)&&(n=null),r||i===null?mN(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var sr=B1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gl=Symbol.for("react.element"),Ss=Symbol.for("react.portal"),Ts=Symbol.for("react.fragment"),dg=Symbol.for("react.strict_mode"),hp=Symbol.for("react.profiler"),K1=Symbol.for("react.provider"),W1=Symbol.for("react.context"),fg=Symbol.for("react.forward_ref"),dp=Symbol.for("react.suspense"),fp=Symbol.for("react.suspense_list"),pg=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),G1=Symbol.for("react.offscreen"),pw=Symbol.iterator;function Wo(t){return t===null||typeof t!="object"?null:(t=pw&&t[pw]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Object.assign,nf;function ha(t){if(nf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nf=e&&e[1]||""}return`
`+nf+t}var rf=!1;function sf(t,e){if(!t||rf)return"";rf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{rf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ha(t):""}function vN(t){switch(t.tag){case 5:return ha(t.type);case 16:return ha("Lazy");case 13:return ha("Suspense");case 19:return ha("SuspenseList");case 0:case 2:case 15:return t=sf(t.type,!1),t;case 11:return t=sf(t.type.render,!1),t;case 1:return t=sf(t.type,!0),t;default:return""}}function pp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ts:return"Fragment";case Ss:return"Portal";case hp:return"Profiler";case dg:return"StrictMode";case dp:return"Suspense";case fp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case W1:return(t.displayName||"Context")+".Consumer";case K1:return(t._context.displayName||"Context")+".Provider";case fg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pg:return e=t.displayName||null,e!==null?e:pp(t.type)||"Memo";case gr:e=t._payload,t=t._init;try{return pp(t(e))}catch{}}return null}function wN(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pp(e);case 8:return e===dg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function H1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _N(t){var e=H1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function yl(t){t._valueTracker||(t._valueTracker=_N(t))}function Q1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=H1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function gc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function mp(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function mw(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Y1(t,e){e=e.checked,e!=null&&hg(t,"checked",e,!1)}function gp(t,e){Y1(t,e);var n=Fr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?yp(t,e.type,n):e.hasOwnProperty("defaultValue")&&yp(t,e.type,Fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gw(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function yp(t,e,n){(e!=="number"||gc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var da=Array.isArray;function Ms(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Fr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function vp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function yw(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(da(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Fr(n)}}function X1(t,e){var n=Fr(e.value),r=Fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function vw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function J1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?J1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var vl,Z1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(vl=vl||document.createElement("div"),vl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=vl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},IN=["Webkit","ms","Moz","O"];Object.keys(Sa).forEach(function(t){IN.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Sa[e]=Sa[t]})});function eI(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Sa.hasOwnProperty(t)&&Sa[t]?(""+e).trim():e+"px"}function tI(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=eI(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var EN=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _p(t,e){if(e){if(EN[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function Ip(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ep=null;function mg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sp=null,Fs=null,Us=null;function ww(t){if(t=Mu(t)){if(typeof Sp!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Ah(e),Sp(t.stateNode,t.type,e))}}function nI(t){Fs?Us?Us.push(t):Us=[t]:Fs=t}function rI(){if(Fs){var t=Fs,e=Us;if(Us=Fs=null,ww(t),e)for(t=0;t<e.length;t++)ww(e[t])}}function iI(t,e){return t(e)}function sI(){}var of=!1;function oI(t,e,n){if(of)return t(e,n);of=!0;try{return iI(t,e,n)}finally{of=!1,(Fs!==null||Us!==null)&&(sI(),rI())}}function qa(t,e){var n=t.stateNode;if(n===null)return null;var r=Ah(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var Tp=!1;if(Xn)try{var Go={};Object.defineProperty(Go,"passive",{get:function(){Tp=!0}}),window.addEventListener("test",Go,Go),window.removeEventListener("test",Go,Go)}catch{Tp=!1}function SN(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var Ta=!1,yc=null,vc=!1,kp=null,TN={onError:function(t){Ta=!0,yc=t}};function kN(t,e,n,r,i,s,o,a,u){Ta=!1,yc=null,SN.apply(TN,arguments)}function CN(t,e,n,r,i,s,o,a,u){if(kN.apply(this,arguments),Ta){if(Ta){var l=yc;Ta=!1,yc=null}else throw Error(C(198));vc||(vc=!0,kp=l)}}function os(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function aI(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _w(t){if(os(t)!==t)throw Error(C(188))}function AN(t){var e=t.alternate;if(!e){if(e=os(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return _w(i),t;if(s===r)return _w(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function uI(t){return t=AN(t),t!==null?lI(t):null}function lI(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=lI(t);if(e!==null)return e;t=t.sibling}return null}var cI=zt.unstable_scheduleCallback,Iw=zt.unstable_cancelCallback,NN=zt.unstable_shouldYield,bN=zt.unstable_requestPaint,ke=zt.unstable_now,RN=zt.unstable_getCurrentPriorityLevel,gg=zt.unstable_ImmediatePriority,hI=zt.unstable_UserBlockingPriority,wc=zt.unstable_NormalPriority,PN=zt.unstable_LowPriority,dI=zt.unstable_IdlePriority,Sh=null,bn=null;function xN(t){if(bn&&typeof bn.onCommitFiberRoot=="function")try{bn.onCommitFiberRoot(Sh,t,void 0,(t.current.flags&128)===128)}catch{}}var hn=Math.clz32?Math.clz32:$N,DN=Math.log,ON=Math.LN2;function $N(t){return t>>>=0,t===0?32:31-(DN(t)/ON|0)|0}var wl=64,_l=4194304;function fa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _c(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=fa(a):(s&=o,s!==0&&(r=fa(s)))}else o=n&~i,o!==0?r=fa(o):s!==0&&(r=fa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-hn(e),i=1<<n,r|=t[n],e&=~i;return r}function LN(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function MN(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-hn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=LN(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Cp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fI(){var t=wl;return wl<<=1,!(wl&4194240)&&(wl=64),t}function af(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $u(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-hn(e),t[e]=n}function FN(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-hn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function yg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-hn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var te=0;function pI(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var mI,vg,gI,yI,vI,Ap=!1,Il=[],Ar=null,Nr=null,br=null,Ka=new Map,Wa=new Map,vr=[],UN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ew(t,e){switch(t){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":Ka.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wa.delete(e.pointerId)}}function Ho(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Mu(e),e!==null&&vg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function VN(t,e,n,r,i){switch(e){case"focusin":return Ar=Ho(Ar,t,e,n,r,i),!0;case"dragenter":return Nr=Ho(Nr,t,e,n,r,i),!0;case"mouseover":return br=Ho(br,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ka.set(s,Ho(Ka.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Wa.set(s,Ho(Wa.get(s)||null,t,e,n,r,i)),!0}return!1}function wI(t){var e=ki(t.target);if(e!==null){var n=os(e);if(n!==null){if(e=n.tag,e===13){if(e=aI(n),e!==null){t.blockedOn=e,vI(t.priority,function(){gI(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Np(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ep=r,n.target.dispatchEvent(r),Ep=null}else return e=Mu(n),e!==null&&vg(e),t.blockedOn=n,!1;e.shift()}return!0}function Sw(t,e,n){Gl(t)&&n.delete(e)}function zN(){Ap=!1,Ar!==null&&Gl(Ar)&&(Ar=null),Nr!==null&&Gl(Nr)&&(Nr=null),br!==null&&Gl(br)&&(br=null),Ka.forEach(Sw),Wa.forEach(Sw)}function Qo(t,e){t.blockedOn===e&&(t.blockedOn=null,Ap||(Ap=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,zN)))}function Ga(t){function e(i){return Qo(i,t)}if(0<Il.length){Qo(Il[0],t);for(var n=1;n<Il.length;n++){var r=Il[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ar!==null&&Qo(Ar,t),Nr!==null&&Qo(Nr,t),br!==null&&Qo(br,t),Ka.forEach(e),Wa.forEach(e),n=0;n<vr.length;n++)r=vr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<vr.length&&(n=vr[0],n.blockedOn===null);)wI(n),n.blockedOn===null&&vr.shift()}var Vs=sr.ReactCurrentBatchConfig,Ic=!0;function jN(t,e,n,r){var i=te,s=Vs.transition;Vs.transition=null;try{te=1,wg(t,e,n,r)}finally{te=i,Vs.transition=s}}function BN(t,e,n,r){var i=te,s=Vs.transition;Vs.transition=null;try{te=4,wg(t,e,n,r)}finally{te=i,Vs.transition=s}}function wg(t,e,n,r){if(Ic){var i=Np(t,e,n,r);if(i===null)yf(t,e,r,Ec,n),Ew(t,r);else if(VN(i,t,e,n,r))r.stopPropagation();else if(Ew(t,r),e&4&&-1<UN.indexOf(t)){for(;i!==null;){var s=Mu(i);if(s!==null&&mI(s),s=Np(t,e,n,r),s===null&&yf(t,e,r,Ec,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else yf(t,e,r,null,n)}}var Ec=null;function Np(t,e,n,r){if(Ec=null,t=mg(r),t=ki(t),t!==null)if(e=os(t),e===null)t=null;else if(n=e.tag,n===13){if(t=aI(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ec=t,null}function _I(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(RN()){case gg:return 1;case hI:return 4;case wc:case PN:return 16;case dI:return 536870912;default:return 16}default:return 16}}var Sr=null,_g=null,Hl=null;function II(){if(Hl)return Hl;var t,e=_g,n=e.length,r,i="value"in Sr?Sr.value:Sr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Hl=i.slice(t,1<r?1-r:void 0)}function Ql(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function El(){return!0}function Tw(){return!1}function Wt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?El:Tw,this.isPropagationStopped=Tw,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),e}var Co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ig=Wt(Co),Lu=ve({},Co,{view:0,detail:0}),qN=Wt(Lu),uf,lf,Yo,Th=ve({},Lu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yo&&(Yo&&t.type==="mousemove"?(uf=t.screenX-Yo.screenX,lf=t.screenY-Yo.screenY):lf=uf=0,Yo=t),uf)},movementY:function(t){return"movementY"in t?t.movementY:lf}}),kw=Wt(Th),KN=ve({},Th,{dataTransfer:0}),WN=Wt(KN),GN=ve({},Lu,{relatedTarget:0}),cf=Wt(GN),HN=ve({},Co,{animationName:0,elapsedTime:0,pseudoElement:0}),QN=Wt(HN),YN=ve({},Co,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),XN=Wt(YN),JN=ve({},Co,{data:0}),Cw=Wt(JN),ZN={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tb[t])?!!e[t]:!1}function Eg(){return nb}var rb=ve({},Lu,{key:function(t){if(t.key){var e=ZN[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ql(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?eb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eg,charCode:function(t){return t.type==="keypress"?Ql(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ql(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ib=Wt(rb),sb=ve({},Th,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Aw=Wt(sb),ob=ve({},Lu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eg}),ab=Wt(ob),ub=ve({},Co,{propertyName:0,elapsedTime:0,pseudoElement:0}),lb=Wt(ub),cb=ve({},Th,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hb=Wt(cb),db=[9,13,27,32],Sg=Xn&&"CompositionEvent"in window,ka=null;Xn&&"documentMode"in document&&(ka=document.documentMode);var fb=Xn&&"TextEvent"in window&&!ka,EI=Xn&&(!Sg||ka&&8<ka&&11>=ka),Nw=String.fromCharCode(32),bw=!1;function SI(t,e){switch(t){case"keyup":return db.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function TI(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ks=!1;function pb(t,e){switch(t){case"compositionend":return TI(e);case"keypress":return e.which!==32?null:(bw=!0,Nw);case"textInput":return t=e.data,t===Nw&&bw?null:t;default:return null}}function mb(t,e){if(ks)return t==="compositionend"||!Sg&&SI(t,e)?(t=II(),Hl=_g=Sr=null,ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return EI&&e.locale!=="ko"?null:e.data;default:return null}}var gb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gb[t.type]:e==="textarea"}function kI(t,e,n,r){nI(r),e=Sc(e,"onChange"),0<e.length&&(n=new Ig("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ca=null,Ha=null;function yb(t){LI(t,0)}function kh(t){var e=Ns(t);if(Q1(e))return t}function vb(t,e){if(t==="change")return e}var CI=!1;if(Xn){var hf;if(Xn){var df="oninput"in document;if(!df){var Pw=document.createElement("div");Pw.setAttribute("oninput","return;"),df=typeof Pw.oninput=="function"}hf=df}else hf=!1;CI=hf&&(!document.documentMode||9<document.documentMode)}function xw(){Ca&&(Ca.detachEvent("onpropertychange",AI),Ha=Ca=null)}function AI(t){if(t.propertyName==="value"&&kh(Ha)){var e=[];kI(e,Ha,t,mg(t)),oI(yb,e)}}function wb(t,e,n){t==="focusin"?(xw(),Ca=e,Ha=n,Ca.attachEvent("onpropertychange",AI)):t==="focusout"&&xw()}function _b(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kh(Ha)}function Ib(t,e){if(t==="click")return kh(e)}function Eb(t,e){if(t==="input"||t==="change")return kh(e)}function Sb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fn=typeof Object.is=="function"?Object.is:Sb;function Qa(t,e){if(fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!cp.call(e,i)||!fn(t[i],e[i]))return!1}return!0}function Dw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ow(t,e){var n=Dw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dw(n)}}function NI(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?NI(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function bI(){for(var t=window,e=gc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gc(t.document)}return e}function Tg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Tb(t){var e=bI(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&NI(n.ownerDocument.documentElement,n)){if(r!==null&&Tg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ow(n,s);var o=Ow(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var kb=Xn&&"documentMode"in document&&11>=document.documentMode,Cs=null,bp=null,Aa=null,Rp=!1;function $w(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rp||Cs==null||Cs!==gc(r)||(r=Cs,"selectionStart"in r&&Tg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Aa&&Qa(Aa,r)||(Aa=r,r=Sc(bp,"onSelect"),0<r.length&&(e=new Ig("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Cs)))}function Sl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var As={animationend:Sl("Animation","AnimationEnd"),animationiteration:Sl("Animation","AnimationIteration"),animationstart:Sl("Animation","AnimationStart"),transitionend:Sl("Transition","TransitionEnd")},ff={},RI={};Xn&&(RI=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function Ch(t){if(ff[t])return ff[t];if(!As[t])return t;var e=As[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in RI)return ff[t]=e[n];return t}var PI=Ch("animationend"),xI=Ch("animationiteration"),DI=Ch("animationstart"),OI=Ch("transitionend"),$I=new Map,Lw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ei(t,e){$I.set(t,e),ss(e,[t])}for(var pf=0;pf<Lw.length;pf++){var mf=Lw[pf],Cb=mf.toLowerCase(),Ab=mf[0].toUpperCase()+mf.slice(1);ei(Cb,"on"+Ab)}ei(PI,"onAnimationEnd");ei(xI,"onAnimationIteration");ei(DI,"onAnimationStart");ei("dblclick","onDoubleClick");ei("focusin","onFocus");ei("focusout","onBlur");ei(OI,"onTransitionEnd");Zs("onMouseEnter",["mouseout","mouseover"]);Zs("onMouseLeave",["mouseout","mouseover"]);Zs("onPointerEnter",["pointerout","pointerover"]);Zs("onPointerLeave",["pointerout","pointerover"]);ss("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ss("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ss("onBeforeInput",["compositionend","keypress","textInput","paste"]);ss("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ss("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ss("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nb=new Set("cancel close invalid load scroll toggle".split(" ").concat(pa));function Mw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,CN(r,e,void 0,t),t.currentTarget=null}function LI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Mw(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Mw(i,a,l),s=u}}}if(vc)throw t=kp,vc=!1,kp=null,t}function ae(t,e){var n=e[$p];n===void 0&&(n=e[$p]=new Set);var r=t+"__bubble";n.has(r)||(MI(e,t,2,!1),n.add(r))}function gf(t,e,n){var r=0;e&&(r|=4),MI(n,t,r,e)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function Ya(t){if(!t[Tl]){t[Tl]=!0,q1.forEach(function(n){n!=="selectionchange"&&(Nb.has(n)||gf(n,!1,t),gf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Tl]||(e[Tl]=!0,gf("selectionchange",!1,e))}}function MI(t,e,n,r){switch(_I(e)){case 1:var i=jN;break;case 4:i=BN;break;default:i=wg}n=i.bind(null,e,n,t),i=void 0,!Tp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function yf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ki(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}oI(function(){var l=s,c=mg(n),h=[];e:{var d=$I.get(t);if(d!==void 0){var f=Ig,y=t;switch(t){case"keypress":if(Ql(n)===0)break e;case"keydown":case"keyup":f=ib;break;case"focusin":y="focus",f=cf;break;case"focusout":y="blur",f=cf;break;case"beforeblur":case"afterblur":f=cf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=kw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=WN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=ab;break;case PI:case xI:case DI:f=QN;break;case OI:f=lb;break;case"scroll":f=qN;break;case"wheel":f=hb;break;case"copy":case"cut":case"paste":f=XN;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Aw}var v=(e&4)!==0,E=!v&&t==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var p=l,g;p!==null;){g=p;var I=g.stateNode;if(g.tag===5&&I!==null&&(g=I,m!==null&&(I=qa(p,m),I!=null&&v.push(Xa(p,I,g)))),E)break;p=p.return}0<v.length&&(d=new f(d,y,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==Ep&&(y=n.relatedTarget||n.fromElement)&&(ki(y)||y[Jn]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(y=n.relatedTarget||n.toElement,f=l,y=y?ki(y):null,y!==null&&(E=os(y),y!==E||y.tag!==5&&y.tag!==6)&&(y=null)):(f=null,y=l),f!==y)){if(v=kw,I="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=Aw,I="onPointerLeave",m="onPointerEnter",p="pointer"),E=f==null?d:Ns(f),g=y==null?d:Ns(y),d=new v(I,p+"leave",f,n,c),d.target=E,d.relatedTarget=g,I=null,ki(c)===l&&(v=new v(m,p+"enter",y,n,c),v.target=g,v.relatedTarget=E,I=v),E=I,f&&y)t:{for(v=f,m=y,p=0,g=v;g;g=ms(g))p++;for(g=0,I=m;I;I=ms(I))g++;for(;0<p-g;)v=ms(v),p--;for(;0<g-p;)m=ms(m),g--;for(;p--;){if(v===m||m!==null&&v===m.alternate)break t;v=ms(v),m=ms(m)}v=null}else v=null;f!==null&&Fw(h,d,f,v,!1),y!==null&&E!==null&&Fw(h,E,y,v,!0)}}e:{if(d=l?Ns(l):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var T=vb;else if(Rw(d))if(CI)T=Eb;else{T=_b;var N=wb}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=Ib);if(T&&(T=T(t,l))){kI(h,T,n,c);break e}N&&N(t,d,l),t==="focusout"&&(N=d._wrapperState)&&N.controlled&&d.type==="number"&&yp(d,"number",d.value)}switch(N=l?Ns(l):window,t){case"focusin":(Rw(N)||N.contentEditable==="true")&&(Cs=N,bp=l,Aa=null);break;case"focusout":Aa=bp=Cs=null;break;case"mousedown":Rp=!0;break;case"contextmenu":case"mouseup":case"dragend":Rp=!1,$w(h,n,c);break;case"selectionchange":if(kb)break;case"keydown":case"keyup":$w(h,n,c)}var b;if(Sg)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else ks?SI(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(EI&&n.locale!=="ko"&&(ks||O!=="onCompositionStart"?O==="onCompositionEnd"&&ks&&(b=II()):(Sr=c,_g="value"in Sr?Sr.value:Sr.textContent,ks=!0)),N=Sc(l,O),0<N.length&&(O=new Cw(O,t,null,n,c),h.push({event:O,listeners:N}),b?O.data=b:(b=TI(n),b!==null&&(O.data=b)))),(b=fb?pb(t,n):mb(t,n))&&(l=Sc(l,"onBeforeInput"),0<l.length&&(c=new Cw("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:l}),c.data=b))}LI(h,e)})}function Xa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=qa(t,n),s!=null&&r.unshift(Xa(t,s,i)),s=qa(t,e),s!=null&&r.push(Xa(t,s,i))),t=t.return}return r}function ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fw(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=qa(n,s),u!=null&&o.unshift(Xa(n,u,a))):i||(u=qa(n,s),u!=null&&o.push(Xa(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var bb=/\r\n?/g,Rb=/\u0000|\uFFFD/g;function Uw(t){return(typeof t=="string"?t:""+t).replace(bb,`
`).replace(Rb,"")}function kl(t,e,n){if(e=Uw(e),Uw(t)!==e&&n)throw Error(C(425))}function Tc(){}var Pp=null,xp=null;function Dp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Op=typeof setTimeout=="function"?setTimeout:void 0,Pb=typeof clearTimeout=="function"?clearTimeout:void 0,Vw=typeof Promise=="function"?Promise:void 0,xb=typeof queueMicrotask=="function"?queueMicrotask:typeof Vw<"u"?function(t){return Vw.resolve(null).then(t).catch(Db)}:Op;function Db(t){setTimeout(function(){throw t})}function vf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ga(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ga(e)}function Rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function zw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ao=Math.random().toString(36).slice(2),wn="__reactFiber$"+Ao,Ja="__reactProps$"+Ao,Jn="__reactContainer$"+Ao,$p="__reactEvents$"+Ao,Ob="__reactListeners$"+Ao,$b="__reactHandles$"+Ao;function ki(t){var e=t[wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Jn]||n[wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=zw(t);t!==null;){if(n=t[wn])return n;t=zw(t)}return e}t=n,n=t.parentNode}return null}function Mu(t){return t=t[wn]||t[Jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Ah(t){return t[Ja]||null}var Lp=[],bs=-1;function ti(t){return{current:t}}function ue(t){0>bs||(t.current=Lp[bs],Lp[bs]=null,bs--)}function se(t,e){bs++,Lp[bs]=t.current,t.current=e}var Ur={},ft=ti(Ur),Pt=ti(!1),Vi=Ur;function eo(t,e){var n=t.type.contextTypes;if(!n)return Ur;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function xt(t){return t=t.childContextTypes,t!=null}function kc(){ue(Pt),ue(ft)}function jw(t,e,n){if(ft.current!==Ur)throw Error(C(168));se(ft,e),se(Pt,n)}function FI(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,wN(t)||"Unknown",i));return ve({},n,r)}function Cc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ur,Vi=ft.current,se(ft,t),se(Pt,Pt.current),!0}function Bw(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=FI(t,e,Vi),r.__reactInternalMemoizedMergedChildContext=t,ue(Pt),ue(ft),se(ft,t)):ue(Pt),se(Pt,n)}var Vn=null,Nh=!1,wf=!1;function UI(t){Vn===null?Vn=[t]:Vn.push(t)}function Lb(t){Nh=!0,UI(t)}function ni(){if(!wf&&Vn!==null){wf=!0;var t=0,e=te;try{var n=Vn;for(te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Vn=null,Nh=!1}catch(i){throw Vn!==null&&(Vn=Vn.slice(t+1)),cI(gg,ni),i}finally{te=e,wf=!1}}return null}var Rs=[],Ps=0,Ac=null,Nc=0,Ht=[],Qt=0,zi=null,zn=1,jn="";function pi(t,e){Rs[Ps++]=Nc,Rs[Ps++]=Ac,Ac=t,Nc=e}function VI(t,e,n){Ht[Qt++]=zn,Ht[Qt++]=jn,Ht[Qt++]=zi,zi=t;var r=zn;t=jn;var i=32-hn(r)-1;r&=~(1<<i),n+=1;var s=32-hn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,zn=1<<32-hn(e)+i|n<<i|r,jn=s+t}else zn=1<<s|n<<i|r,jn=t}function kg(t){t.return!==null&&(pi(t,1),VI(t,1,0))}function Cg(t){for(;t===Ac;)Ac=Rs[--Ps],Rs[Ps]=null,Nc=Rs[--Ps],Rs[Ps]=null;for(;t===zi;)zi=Ht[--Qt],Ht[Qt]=null,jn=Ht[--Qt],Ht[Qt]=null,zn=Ht[--Qt],Ht[Qt]=null}var Vt=null,Ft=null,de=!1,un=null;function zI(t,e){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qw(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Vt=t,Ft=Rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Vt=t,Ft=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zi!==null?{id:zn,overflow:jn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Vt=t,Ft=null,!0):!1;default:return!1}}function Mp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fp(t){if(de){var e=Ft;if(e){var n=e;if(!qw(t,e)){if(Mp(t))throw Error(C(418));e=Rr(n.nextSibling);var r=Vt;e&&qw(t,e)?zI(r,n):(t.flags=t.flags&-4097|2,de=!1,Vt=t)}}else{if(Mp(t))throw Error(C(418));t.flags=t.flags&-4097|2,de=!1,Vt=t}}}function Kw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Vt=t}function Cl(t){if(t!==Vt)return!1;if(!de)return Kw(t),de=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Dp(t.type,t.memoizedProps)),e&&(e=Ft)){if(Mp(t))throw jI(),Error(C(418));for(;e;)zI(t,e),e=Rr(e.nextSibling)}if(Kw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ft=Rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ft=null}}else Ft=Vt?Rr(t.stateNode.nextSibling):null;return!0}function jI(){for(var t=Ft;t;)t=Rr(t.nextSibling)}function to(){Ft=Vt=null,de=!1}function Ag(t){un===null?un=[t]:un.push(t)}var Mb=sr.ReactCurrentBatchConfig;function on(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var bc=ti(null),Rc=null,xs=null,Ng=null;function bg(){Ng=xs=Rc=null}function Rg(t){var e=bc.current;ue(bc),t._currentValue=e}function Up(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function zs(t,e){Rc=t,Ng=xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(At=!0),t.firstContext=null)}function en(t){var e=t._currentValue;if(Ng!==t)if(t={context:t,memoizedValue:e,next:null},xs===null){if(Rc===null)throw Error(C(308));xs=t,Rc.dependencies={lanes:0,firstContext:t}}else xs=xs.next=t;return e}var Ci=null;function Pg(t){Ci===null?Ci=[t]:Ci.push(t)}function BI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Pg(e)):(n.next=i.next,i.next=n),e.interleaved=n,Zn(t,r)}function Zn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yr=!1;function xg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Hn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Pr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Zn(t,n)}return i=r.interleaved,i===null?(e.next=e,Pg(r)):(e.next=i.next,i.next=e),r.interleaved=e,Zn(t,n)}function Yl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,yg(t,n)}}function Ww(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pc(t,e,n,r){var i=t.updateQueue;yr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=l:a.next=l,c.lastBaseUpdate=u))}if(s!==null){var h=i.baseState;o=0,c=l=u=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,f=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(f,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(f,h,d):y,d==null)break e;h=ve({},h,d);break e;case 2:yr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(l=c=f,u=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Bi|=o,t.lanes=o,t.memoizedState=h}}function Gw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var KI=new B1.Component().refs;function Vp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bh={isMounted:function(t){return(t=t._reactInternals)?os(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=vt(),i=Dr(t),s=Hn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Pr(t,s,i),e!==null&&(dn(e,t,i,r),Yl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=vt(),i=Dr(t),s=Hn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Pr(t,s,i),e!==null&&(dn(e,t,i,r),Yl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=vt(),r=Dr(t),i=Hn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Pr(t,i,r),e!==null&&(dn(e,t,r,n),Yl(e,t,r))}};function Hw(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Qa(n,r)||!Qa(i,s):!0}function WI(t,e,n){var r=!1,i=Ur,s=e.contextType;return typeof s=="object"&&s!==null?s=en(s):(i=xt(e)?Vi:ft.current,r=e.contextTypes,s=(r=r!=null)?eo(t,i):Ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qw(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&bh.enqueueReplaceState(e,e.state,null)}function zp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=KI,xg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=en(s):(s=xt(e)?Vi:ft.current,i.context=eo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&bh.enqueueReplaceState(i,i.state,null),Pc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Xo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===KI&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function Al(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Yw(t){var e=t._init;return e(t._payload)}function GI(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Or(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,g,I){return p===null||p.tag!==6?(p=Cf(g,m.mode,I),p.return=m,p):(p=i(p,g),p.return=m,p)}function u(m,p,g,I){var T=g.type;return T===Ts?c(m,p,g.props.children,I,g.key):p!==null&&(p.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===gr&&Yw(T)===p.type)?(I=i(p,g.props),I.ref=Xo(m,p,g),I.return=m,I):(I=nc(g.type,g.key,g.props,null,m.mode,I),I.ref=Xo(m,p,g),I.return=m,I)}function l(m,p,g,I){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Af(g,m.mode,I),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function c(m,p,g,I,T){return p===null||p.tag!==7?(p=Oi(g,m.mode,I,T),p.return=m,p):(p=i(p,g),p.return=m,p)}function h(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Cf(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case gl:return g=nc(p.type,p.key,p.props,null,m.mode,g),g.ref=Xo(m,null,p),g.return=m,g;case Ss:return p=Af(p,m.mode,g),p.return=m,p;case gr:var I=p._init;return h(m,I(p._payload),g)}if(da(p)||Wo(p))return p=Oi(p,m.mode,g,null),p.return=m,p;Al(m,p)}return null}function d(m,p,g,I){var T=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:a(m,p,""+g,I);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case gl:return g.key===T?u(m,p,g,I):null;case Ss:return g.key===T?l(m,p,g,I):null;case gr:return T=g._init,d(m,p,T(g._payload),I)}if(da(g)||Wo(g))return T!==null?null:c(m,p,g,I,null);Al(m,g)}return null}function f(m,p,g,I,T){if(typeof I=="string"&&I!==""||typeof I=="number")return m=m.get(g)||null,a(p,m,""+I,T);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case gl:return m=m.get(I.key===null?g:I.key)||null,u(p,m,I,T);case Ss:return m=m.get(I.key===null?g:I.key)||null,l(p,m,I,T);case gr:var N=I._init;return f(m,p,g,N(I._payload),T)}if(da(I)||Wo(I))return m=m.get(g)||null,c(p,m,I,T,null);Al(p,I)}return null}function y(m,p,g,I){for(var T=null,N=null,b=p,O=p=0,Z=null;b!==null&&O<g.length;O++){b.index>O?(Z=b,b=null):Z=b.sibling;var V=d(m,b,g[O],I);if(V===null){b===null&&(b=Z);break}t&&b&&V.alternate===null&&e(m,b),p=s(V,p,O),N===null?T=V:N.sibling=V,N=V,b=Z}if(O===g.length)return n(m,b),de&&pi(m,O),T;if(b===null){for(;O<g.length;O++)b=h(m,g[O],I),b!==null&&(p=s(b,p,O),N===null?T=b:N.sibling=b,N=b);return de&&pi(m,O),T}for(b=r(m,b);O<g.length;O++)Z=f(b,m,O,g[O],I),Z!==null&&(t&&Z.alternate!==null&&b.delete(Z.key===null?O:Z.key),p=s(Z,p,O),N===null?T=Z:N.sibling=Z,N=Z);return t&&b.forEach(function(Ye){return e(m,Ye)}),de&&pi(m,O),T}function v(m,p,g,I){var T=Wo(g);if(typeof T!="function")throw Error(C(150));if(g=T.call(g),g==null)throw Error(C(151));for(var N=T=null,b=p,O=p=0,Z=null,V=g.next();b!==null&&!V.done;O++,V=g.next()){b.index>O?(Z=b,b=null):Z=b.sibling;var Ye=d(m,b,V.value,I);if(Ye===null){b===null&&(b=Z);break}t&&b&&Ye.alternate===null&&e(m,b),p=s(Ye,p,O),N===null?T=Ye:N.sibling=Ye,N=Ye,b=Z}if(V.done)return n(m,b),de&&pi(m,O),T;if(b===null){for(;!V.done;O++,V=g.next())V=h(m,V.value,I),V!==null&&(p=s(V,p,O),N===null?T=V:N.sibling=V,N=V);return de&&pi(m,O),T}for(b=r(m,b);!V.done;O++,V=g.next())V=f(b,m,O,V.value,I),V!==null&&(t&&V.alternate!==null&&b.delete(V.key===null?O:V.key),p=s(V,p,O),N===null?T=V:N.sibling=V,N=V);return t&&b.forEach(function(qo){return e(m,qo)}),de&&pi(m,O),T}function E(m,p,g,I){if(typeof g=="object"&&g!==null&&g.type===Ts&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case gl:e:{for(var T=g.key,N=p;N!==null;){if(N.key===T){if(T=g.type,T===Ts){if(N.tag===7){n(m,N.sibling),p=i(N,g.props.children),p.return=m,m=p;break e}}else if(N.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===gr&&Yw(T)===N.type){n(m,N.sibling),p=i(N,g.props),p.ref=Xo(m,N,g),p.return=m,m=p;break e}n(m,N);break}else e(m,N);N=N.sibling}g.type===Ts?(p=Oi(g.props.children,m.mode,I,g.key),p.return=m,m=p):(I=nc(g.type,g.key,g.props,null,m.mode,I),I.ref=Xo(m,p,g),I.return=m,m=I)}return o(m);case Ss:e:{for(N=g.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Af(g,m.mode,I),p.return=m,m=p}return o(m);case gr:return N=g._init,E(m,p,N(g._payload),I)}if(da(g))return y(m,p,g,I);if(Wo(g))return v(m,p,g,I);Al(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=Cf(g,m.mode,I),p.return=m,m=p),o(m)):n(m,p)}return E}var no=GI(!0),HI=GI(!1),Fu={},Rn=ti(Fu),Za=ti(Fu),eu=ti(Fu);function Ai(t){if(t===Fu)throw Error(C(174));return t}function Dg(t,e){switch(se(eu,e),se(Za,t),se(Rn,Fu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wp(e,t)}ue(Rn),se(Rn,e)}function ro(){ue(Rn),ue(Za),ue(eu)}function QI(t){Ai(eu.current);var e=Ai(Rn.current),n=wp(e,t.type);e!==n&&(se(Za,t),se(Rn,n))}function Og(t){Za.current===t&&(ue(Rn),ue(Za))}var ge=ti(0);function xc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _f=[];function $g(){for(var t=0;t<_f.length;t++)_f[t]._workInProgressVersionPrimary=null;_f.length=0}var Xl=sr.ReactCurrentDispatcher,If=sr.ReactCurrentBatchConfig,ji=0,ye=null,Oe=null,Ve=null,Dc=!1,Na=!1,tu=0,Fb=0;function ot(){throw Error(C(321))}function Lg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!fn(t[n],e[n]))return!1;return!0}function Mg(t,e,n,r,i,s){if(ji=s,ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xl.current=t===null||t.memoizedState===null?jb:Bb,t=n(r,i),Na){s=0;do{if(Na=!1,tu=0,25<=s)throw Error(C(301));s+=1,Ve=Oe=null,e.updateQueue=null,Xl.current=qb,t=n(r,i)}while(Na)}if(Xl.current=Oc,e=Oe!==null&&Oe.next!==null,ji=0,Ve=Oe=ye=null,Dc=!1,e)throw Error(C(300));return t}function Fg(){var t=tu!==0;return tu=0,t}function vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?ye.memoizedState=Ve=t:Ve=Ve.next=t,Ve}function tn(){if(Oe===null){var t=ye.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=Ve===null?ye.memoizedState:Ve.next;if(e!==null)Ve=e,Oe=t;else{if(t===null)throw Error(C(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Ve===null?ye.memoizedState=Ve=t:Ve=Ve.next=t}return Ve}function nu(t,e){return typeof e=="function"?e(t):e}function Ef(t){var e=tn(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,l=s;do{var c=l.lane;if((ji&c)===c)u!==null&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:t(r,l.action);else{var h={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};u===null?(a=u=h,o=r):u=u.next=h,ye.lanes|=c,Bi|=c}l=l.next}while(l!==null&&l!==s);u===null?o=r:u.next=a,fn(r,e.memoizedState)||(At=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ye.lanes|=s,Bi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Sf(t){var e=tn(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);fn(s,e.memoizedState)||(At=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function YI(){}function XI(t,e){var n=ye,r=tn(),i=e(),s=!fn(r.memoizedState,i);if(s&&(r.memoizedState=i,At=!0),r=r.queue,Ug(eE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,ru(9,ZI.bind(null,n,r,i,e),void 0,null),je===null)throw Error(C(349));ji&30||JI(n,e,i)}return i}function JI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ZI(t,e,n,r){e.value=n,e.getSnapshot=r,tE(e)&&nE(t)}function eE(t,e,n){return n(function(){tE(e)&&nE(t)})}function tE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!fn(t,n)}catch{return!0}}function nE(t){var e=Zn(t,1);e!==null&&dn(e,t,1,-1)}function Xw(t){var e=vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nu,lastRenderedState:t},e.queue=t,t=t.dispatch=zb.bind(null,ye,t),[e.memoizedState,t]}function ru(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function rE(){return tn().memoizedState}function Jl(t,e,n,r){var i=vn();ye.flags|=t,i.memoizedState=ru(1|e,n,void 0,r===void 0?null:r)}function Rh(t,e,n,r){var i=tn();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&Lg(r,o.deps)){i.memoizedState=ru(e,n,s,r);return}}ye.flags|=t,i.memoizedState=ru(1|e,n,s,r)}function Jw(t,e){return Jl(8390656,8,t,e)}function Ug(t,e){return Rh(2048,8,t,e)}function iE(t,e){return Rh(4,2,t,e)}function sE(t,e){return Rh(4,4,t,e)}function oE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function aE(t,e,n){return n=n!=null?n.concat([t]):null,Rh(4,4,oE.bind(null,e,t),n)}function Vg(){}function uE(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function lE(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function cE(t,e,n){return ji&21?(fn(n,e)||(n=fI(),ye.lanes|=n,Bi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,At=!0),t.memoizedState=n)}function Ub(t,e){var n=te;te=n!==0&&4>n?n:4,t(!0);var r=If.transition;If.transition={};try{t(!1),e()}finally{te=n,If.transition=r}}function hE(){return tn().memoizedState}function Vb(t,e,n){var r=Dr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dE(t))fE(e,n);else if(n=BI(t,e,n,r),n!==null){var i=vt();dn(n,t,r,i),pE(n,e,r)}}function zb(t,e,n){var r=Dr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dE(t))fE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,fn(a,o)){var u=e.interleaved;u===null?(i.next=i,Pg(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=BI(t,e,i,r),n!==null&&(i=vt(),dn(n,t,r,i),pE(n,e,r))}}function dE(t){var e=t.alternate;return t===ye||e!==null&&e===ye}function fE(t,e){Na=Dc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function pE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,yg(t,n)}}var Oc={readContext:en,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},jb={readContext:en,useCallback:function(t,e){return vn().memoizedState=[t,e===void 0?null:e],t},useContext:en,useEffect:Jw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Jl(4194308,4,oE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Jl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Jl(4,2,t,e)},useMemo:function(t,e){var n=vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=vn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Vb.bind(null,ye,t),[r.memoizedState,t]},useRef:function(t){var e=vn();return t={current:t},e.memoizedState=t},useState:Xw,useDebugValue:Vg,useDeferredValue:function(t){return vn().memoizedState=t},useTransition:function(){var t=Xw(!1),e=t[0];return t=Ub.bind(null,t[1]),vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ye,i=vn();if(de){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),je===null)throw Error(C(349));ji&30||JI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Jw(eE.bind(null,r,s,t),[t]),r.flags|=2048,ru(9,ZI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=vn(),e=je.identifierPrefix;if(de){var n=jn,r=zn;n=(r&~(1<<32-hn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=tu++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Fb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Bb={readContext:en,useCallback:uE,useContext:en,useEffect:Ug,useImperativeHandle:aE,useInsertionEffect:iE,useLayoutEffect:sE,useMemo:lE,useReducer:Ef,useRef:rE,useState:function(){return Ef(nu)},useDebugValue:Vg,useDeferredValue:function(t){var e=tn();return cE(e,Oe.memoizedState,t)},useTransition:function(){var t=Ef(nu)[0],e=tn().memoizedState;return[t,e]},useMutableSource:YI,useSyncExternalStore:XI,useId:hE,unstable_isNewReconciler:!1},qb={readContext:en,useCallback:uE,useContext:en,useEffect:Ug,useImperativeHandle:aE,useInsertionEffect:iE,useLayoutEffect:sE,useMemo:lE,useReducer:Sf,useRef:rE,useState:function(){return Sf(nu)},useDebugValue:Vg,useDeferredValue:function(t){var e=tn();return Oe===null?e.memoizedState=t:cE(e,Oe.memoizedState,t)},useTransition:function(){var t=Sf(nu)[0],e=tn().memoizedState;return[t,e]},useMutableSource:YI,useSyncExternalStore:XI,useId:hE,unstable_isNewReconciler:!1};function io(t,e){try{var n="",r=e;do n+=vN(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Tf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function jp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Kb=typeof WeakMap=="function"?WeakMap:Map;function mE(t,e,n){n=Hn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Lc||(Lc=!0,Jp=r),jp(t,e)},n}function gE(t,e,n){n=Hn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){jp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){jp(t,e),typeof r!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Zw(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Kb;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=sR.bind(null,t,e,n),e.then(t,t))}function e0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function t0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Hn(-1,1),e.tag=2,Pr(n,e,1))),n.lanes|=1),t)}var Wb=sr.ReactCurrentOwner,At=!1;function pt(t,e,n,r){e.child=t===null?HI(e,null,n,r):no(e,t.child,n,r)}function n0(t,e,n,r,i){n=n.render;var s=e.ref;return zs(e,i),r=Mg(t,e,n,r,s,i),n=Fg(),t!==null&&!At?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,er(t,e,i)):(de&&n&&kg(e),e.flags|=1,pt(t,e,r,i),e.child)}function r0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Hg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,yE(t,e,s,r,i)):(t=nc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qa,n(o,r)&&t.ref===e.ref)return er(t,e,i)}return e.flags|=1,t=Or(s,r),t.ref=e.ref,t.return=e,e.child=t}function yE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Qa(s,r)&&t.ref===e.ref)if(At=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(At=!0);else return e.lanes=t.lanes,er(t,e,i)}return Bp(t,e,n,r,i)}function vE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(Os,Lt),Lt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,se(Os,Lt),Lt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,se(Os,Lt),Lt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,se(Os,Lt),Lt|=r;return pt(t,e,i,n),e.child}function wE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bp(t,e,n,r,i){var s=xt(n)?Vi:ft.current;return s=eo(e,s),zs(e,i),n=Mg(t,e,n,r,s,i),r=Fg(),t!==null&&!At?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,er(t,e,i)):(de&&r&&kg(e),e.flags|=1,pt(t,e,n,i),e.child)}function i0(t,e,n,r,i){if(xt(n)){var s=!0;Cc(e)}else s=!1;if(zs(e,i),e.stateNode===null)Zl(t,e),WI(e,n,r),zp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=en(l):(l=xt(n)?Vi:ft.current,l=eo(e,l));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&Qw(e,o,r,l),yr=!1;var d=e.memoizedState;o.state=d,Pc(e,r,o,i),u=e.memoizedState,a!==r||d!==u||Pt.current||yr?(typeof c=="function"&&(Vp(e,n,c,r),u=e.memoizedState),(a=yr||Hw(e,n,a,r,d,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,qI(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:on(e.type,a),o.props=l,h=e.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=en(u):(u=xt(n)?Vi:ft.current,u=eo(e,u));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==u)&&Qw(e,o,r,u),yr=!1,d=e.memoizedState,o.state=d,Pc(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||Pt.current||yr?(typeof f=="function"&&(Vp(e,n,f,r),y=e.memoizedState),(l=yr||Hw(e,n,l,r,d,y,u)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return qp(t,e,n,r,s,i)}function qp(t,e,n,r,i,s){wE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Bw(e,n,!1),er(t,e,s);r=e.stateNode,Wb.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=no(e,t.child,null,s),e.child=no(e,null,a,s)):pt(t,e,a,s),e.memoizedState=r.state,i&&Bw(e,n,!0),e.child}function _E(t){var e=t.stateNode;e.pendingContext?jw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jw(t,e.context,!1),Dg(t,e.containerInfo)}function s0(t,e,n,r,i){return to(),Ag(i),e.flags|=256,pt(t,e,n,r),e.child}var Kp={dehydrated:null,treeContext:null,retryLane:0};function Wp(t){return{baseLanes:t,cachePool:null,transitions:null}}function IE(t,e,n){var r=e.pendingProps,i=ge.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),se(ge,i&1),t===null)return Fp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Dh(o,r,0,null),t=Oi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Wp(n),e.memoizedState=Kp,t):zg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Gb(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Or(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Or(a,s):(s=Oi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Wp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Kp,r}return s=t.child,t=s.sibling,r=Or(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function zg(t,e){return e=Dh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Nl(t,e,n,r){return r!==null&&Ag(r),no(e,t.child,null,n),t=zg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Gb(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Tf(Error(C(422))),Nl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Dh({mode:"visible",children:r.children},i,0,null),s=Oi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&no(e,t.child,null,o),e.child.memoizedState=Wp(o),e.memoizedState=Kp,s);if(!(e.mode&1))return Nl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(C(419)),r=Tf(s,r,void 0),Nl(t,e,o,r)}if(a=(o&t.childLanes)!==0,At||a){if(r=je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Zn(t,i),dn(r,t,i,-1))}return Gg(),r=Tf(Error(C(421))),Nl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=oR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ft=Rr(i.nextSibling),Vt=e,de=!0,un=null,t!==null&&(Ht[Qt++]=zn,Ht[Qt++]=jn,Ht[Qt++]=zi,zn=t.id,jn=t.overflow,zi=e),e=zg(e,r.children),e.flags|=4096,e)}function o0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Up(t.return,e,n)}function kf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function EE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(pt(t,e,r.children,n),r=ge.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&o0(t,n,e);else if(t.tag===19)o0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(se(ge,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&xc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),kf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&xc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}kf(e,!0,n,null,s);break;case"together":kf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Bi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=Or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Hb(t,e,n){switch(e.tag){case 3:_E(e),to();break;case 5:QI(e);break;case 1:xt(e.type)&&Cc(e);break;case 4:Dg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;se(bc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(se(ge,ge.current&1),e.flags|=128,null):n&e.child.childLanes?IE(t,e,n):(se(ge,ge.current&1),t=er(t,e,n),t!==null?t.sibling:null);se(ge,ge.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return EE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(ge,ge.current),r)break;return null;case 22:case 23:return e.lanes=0,vE(t,e,n)}return er(t,e,n)}var SE,Gp,TE,kE;SE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gp=function(){};TE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ai(Rn.current);var s=null;switch(n){case"input":i=mp(t,i),r=mp(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=vp(t,i),r=vp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Tc)}_p(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(ja.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(ja.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&ae("scroll",t),s||a===u||(s=[])):(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};kE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Jo(t,e){if(!de)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function at(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Qb(t,e,n){var r=e.pendingProps;switch(Cg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(e),null;case 1:return xt(e.type)&&kc(),at(e),null;case 3:return r=e.stateNode,ro(),ue(Pt),ue(ft),$g(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Cl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,un!==null&&(tm(un),un=null))),Gp(t,e),at(e),null;case 5:Og(e);var i=Ai(eu.current);if(n=e.type,t!==null&&e.stateNode!=null)TE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return at(e),null}if(t=Ai(Rn.current),Cl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[wn]=e,r[Ja]=s,t=(e.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<pa.length;i++)ae(pa[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":mw(r,s),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ae("invalid",r);break;case"textarea":yw(r,s),ae("invalid",r)}_p(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&kl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&kl(r.textContent,a,t),i=["children",""+a]):ja.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ae("scroll",r)}switch(n){case"input":yl(r),gw(r,s,!0);break;case"textarea":yl(r),vw(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Tc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=J1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[wn]=e,t[Ja]=r,SE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ip(n,r),n){case"dialog":ae("cancel",t),ae("close",t),i=r;break;case"iframe":case"object":case"embed":ae("load",t),i=r;break;case"video":case"audio":for(i=0;i<pa.length;i++)ae(pa[i],t);i=r;break;case"source":ae("error",t),i=r;break;case"img":case"image":case"link":ae("error",t),ae("load",t),i=r;break;case"details":ae("toggle",t),i=r;break;case"input":mw(t,r),i=mp(t,r),ae("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),ae("invalid",t);break;case"textarea":yw(t,r),i=vp(t,r),ae("invalid",t);break;default:i=r}_p(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?tI(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Z1(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ba(t,u):typeof u=="number"&&Ba(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ja.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ae("scroll",t):u!=null&&hg(t,s,u,o))}switch(n){case"input":yl(t),gw(t,r,!1);break;case"textarea":yl(t),vw(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Fr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ms(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ms(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Tc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return at(e),null;case 6:if(t&&e.stateNode!=null)kE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=Ai(eu.current),Ai(Rn.current),Cl(e)){if(r=e.stateNode,n=e.memoizedProps,r[wn]=e,(s=r.nodeValue!==n)&&(t=Vt,t!==null))switch(t.tag){case 3:kl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&kl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wn]=e,e.stateNode=r}return at(e),null;case 13:if(ue(ge),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(de&&Ft!==null&&e.mode&1&&!(e.flags&128))jI(),to(),e.flags|=98560,s=!1;else if(s=Cl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[wn]=e}else to(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;at(e),s=!1}else un!==null&&(tm(un),un=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ge.current&1?$e===0&&($e=3):Gg())),e.updateQueue!==null&&(e.flags|=4),at(e),null);case 4:return ro(),Gp(t,e),t===null&&Ya(e.stateNode.containerInfo),at(e),null;case 10:return Rg(e.type._context),at(e),null;case 17:return xt(e.type)&&kc(),at(e),null;case 19:if(ue(ge),s=e.memoizedState,s===null)return at(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Jo(s,!1);else{if($e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=xc(t),o!==null){for(e.flags|=128,Jo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return se(ge,ge.current&1|2),e.child}t=t.sibling}s.tail!==null&&ke()>so&&(e.flags|=128,r=!0,Jo(s,!1),e.lanes=4194304)}else{if(!r)if(t=xc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Jo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!de)return at(e),null}else 2*ke()-s.renderingStartTime>so&&n!==1073741824&&(e.flags|=128,r=!0,Jo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ke(),e.sibling=null,n=ge.current,se(ge,r?n&1|2:n&1),e):(at(e),null);case 22:case 23:return Wg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Lt&1073741824&&(at(e),e.subtreeFlags&6&&(e.flags|=8192)):at(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function Yb(t,e){switch(Cg(e),e.tag){case 1:return xt(e.type)&&kc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ro(),ue(Pt),ue(ft),$g(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Og(e),null;case 13:if(ue(ge),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));to()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ue(ge),null;case 4:return ro(),null;case 10:return Rg(e.type._context),null;case 22:case 23:return Wg(),null;case 24:return null;default:return null}}var bl=!1,ct=!1,Xb=typeof WeakSet=="function"?WeakSet:Set,$=null;function Ds(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(t,e,r)}else n.current=null}function Hp(t,e,n){try{n()}catch(r){_e(t,e,r)}}var a0=!1;function Jb(t,e){if(Pp=Ic,t=bI(),Tg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,l=0,c=0,h=t,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break t;if(d===n&&++l===i&&(a=o),d===s&&++c===r&&(u=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(xp={focusedElem:t,selectionRange:n},Ic=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,E=y.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:on(e.type,v),E);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(I){_e(e,e.return,I)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return y=a0,a0=!1,y}function ba(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Hp(e,n,s)}i=i.next}while(i!==r)}}function Ph(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Qp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function CE(t){var e=t.alternate;e!==null&&(t.alternate=null,CE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wn],delete e[Ja],delete e[$p],delete e[Ob],delete e[$b])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function AE(t){return t.tag===5||t.tag===3||t.tag===4}function u0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||AE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Tc));else if(r!==4&&(t=t.child,t!==null))for(Yp(t,e,n),t=t.sibling;t!==null;)Yp(t,e,n),t=t.sibling}function Xp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Xp(t,e,n),t=t.sibling;t!==null;)Xp(t,e,n),t=t.sibling}var Xe=null,an=!1;function hr(t,e,n){for(n=n.child;n!==null;)NE(t,e,n),n=n.sibling}function NE(t,e,n){if(bn&&typeof bn.onCommitFiberUnmount=="function")try{bn.onCommitFiberUnmount(Sh,n)}catch{}switch(n.tag){case 5:ct||Ds(n,e);case 6:var r=Xe,i=an;Xe=null,hr(t,e,n),Xe=r,an=i,Xe!==null&&(an?(t=Xe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(an?(t=Xe,n=n.stateNode,t.nodeType===8?vf(t.parentNode,n):t.nodeType===1&&vf(t,n),Ga(t)):vf(Xe,n.stateNode));break;case 4:r=Xe,i=an,Xe=n.stateNode.containerInfo,an=!0,hr(t,e,n),Xe=r,an=i;break;case 0:case 11:case 14:case 15:if(!ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Hp(n,e,o),i=i.next}while(i!==r)}hr(t,e,n);break;case 1:if(!ct&&(Ds(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){_e(n,e,a)}hr(t,e,n);break;case 21:hr(t,e,n);break;case 22:n.mode&1?(ct=(r=ct)||n.memoizedState!==null,hr(t,e,n),ct=r):hr(t,e,n);break;default:hr(t,e,n)}}function l0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Xb),e.forEach(function(r){var i=aR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function sn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Xe=a.stateNode,an=!1;break e;case 3:Xe=a.stateNode.containerInfo,an=!0;break e;case 4:Xe=a.stateNode.containerInfo,an=!0;break e}a=a.return}if(Xe===null)throw Error(C(160));NE(s,o,i),Xe=null,an=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(l){_e(i,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)bE(e,t),e=e.sibling}function bE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(sn(e,t),yn(t),r&4){try{ba(3,t,t.return),Ph(3,t)}catch(v){_e(t,t.return,v)}try{ba(5,t,t.return)}catch(v){_e(t,t.return,v)}}break;case 1:sn(e,t),yn(t),r&512&&n!==null&&Ds(n,n.return);break;case 5:if(sn(e,t),yn(t),r&512&&n!==null&&Ds(n,n.return),t.flags&32){var i=t.stateNode;try{Ba(i,"")}catch(v){_e(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Y1(i,s),Ip(a,o);var l=Ip(a,s);for(o=0;o<u.length;o+=2){var c=u[o],h=u[o+1];c==="style"?tI(i,h):c==="dangerouslySetInnerHTML"?Z1(i,h):c==="children"?Ba(i,h):hg(i,c,h,l)}switch(a){case"input":gp(i,s);break;case"textarea":X1(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?Ms(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ms(i,!!s.multiple,s.defaultValue,!0):Ms(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ja]=s}catch(v){_e(t,t.return,v)}}break;case 6:if(sn(e,t),yn(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){_e(t,t.return,v)}}break;case 3:if(sn(e,t),yn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ga(e.containerInfo)}catch(v){_e(t,t.return,v)}break;case 4:sn(e,t),yn(t);break;case 13:sn(e,t),yn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(qg=ke())),r&4&&l0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(ct=(l=ct)||c,sn(e,t),ct=l):sn(e,t),yn(t),r&8192){if(l=t.memoizedState!==null,(t.stateNode.isHidden=l)&&!c&&t.mode&1)for($=t,c=t.child;c!==null;){for(h=$=c;$!==null;){switch(d=$,f=d.child,d.tag){case 0:case 11:case 14:case 15:ba(4,d,d.return);break;case 1:Ds(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){_e(r,n,v)}}break;case 5:Ds(d,d.return);break;case 22:if(d.memoizedState!==null){h0(h);continue}}f!==null?(f.return=d,$=f):h0(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,l?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=eI("display",o))}catch(v){_e(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=l?"":h.memoizedProps}catch(v){_e(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:sn(e,t),yn(t),r&4&&l0(t);break;case 21:break;default:sn(e,t),yn(t)}}function yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(AE(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ba(i,""),r.flags&=-33);var s=u0(t);Xp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=u0(t);Yp(t,a,o);break;default:throw Error(C(161))}}catch(u){_e(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Zb(t,e,n){$=t,RE(t)}function RE(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||bl;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||ct;a=bl;var l=ct;if(bl=o,(ct=u)&&!l)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?d0(i):u!==null?(u.return=o,$=u):d0(i);for(;s!==null;)$=s,RE(s),s=s.sibling;$=i,bl=a,ct=l}c0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):c0(t)}}function c0(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ct||Ph(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ct)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:on(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gw(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gw(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ga(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ct||e.flags&512&&Qp(e)}catch(d){_e(e,e.return,d)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function h0(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function d0(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ph(4,e)}catch(u){_e(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){_e(e,i,u)}}var s=e.return;try{Qp(e)}catch(u){_e(e,s,u)}break;case 5:var o=e.return;try{Qp(e)}catch(u){_e(e,o,u)}}}catch(u){_e(e,e.return,u)}if(e===t){$=null;break}var a=e.sibling;if(a!==null){a.return=e.return,$=a;break}$=e.return}}var eR=Math.ceil,$c=sr.ReactCurrentDispatcher,jg=sr.ReactCurrentOwner,Zt=sr.ReactCurrentBatchConfig,X=0,je=null,xe=null,et=0,Lt=0,Os=ti(0),$e=0,iu=null,Bi=0,xh=0,Bg=0,Ra=null,kt=null,qg=0,so=1/0,Un=null,Lc=!1,Jp=null,xr=null,Rl=!1,Tr=null,Mc=0,Pa=0,Zp=null,ec=-1,tc=0;function vt(){return X&6?ke():ec!==-1?ec:ec=ke()}function Dr(t){return t.mode&1?X&2&&et!==0?et&-et:Mb.transition!==null?(tc===0&&(tc=fI()),tc):(t=te,t!==0||(t=window.event,t=t===void 0?16:_I(t.type)),t):1}function dn(t,e,n,r){if(50<Pa)throw Pa=0,Zp=null,Error(C(185));$u(t,n,r),(!(X&2)||t!==je)&&(t===je&&(!(X&2)&&(xh|=n),$e===4&&wr(t,et)),Dt(t,r),n===1&&X===0&&!(e.mode&1)&&(so=ke()+500,Nh&&ni()))}function Dt(t,e){var n=t.callbackNode;MN(t,e);var r=_c(t,t===je?et:0);if(r===0)n!==null&&Iw(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Iw(n),e===1)t.tag===0?Lb(f0.bind(null,t)):UI(f0.bind(null,t)),xb(function(){!(X&6)&&ni()}),n=null;else{switch(pI(r)){case 1:n=gg;break;case 4:n=hI;break;case 16:n=wc;break;case 536870912:n=dI;break;default:n=wc}n=FE(n,PE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function PE(t,e){if(ec=-1,tc=0,X&6)throw Error(C(327));var n=t.callbackNode;if(js()&&t.callbackNode!==n)return null;var r=_c(t,t===je?et:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Fc(t,r);else{e=r;var i=X;X|=2;var s=DE();(je!==t||et!==e)&&(Un=null,so=ke()+500,Di(t,e));do try{rR();break}catch(a){xE(t,a)}while(1);bg(),$c.current=s,X=i,xe!==null?e=0:(je=null,et=0,e=$e)}if(e!==0){if(e===2&&(i=Cp(t),i!==0&&(r=i,e=em(t,i))),e===1)throw n=iu,Di(t,0),wr(t,r),Dt(t,ke()),n;if(e===6)wr(t,r);else{if(i=t.current.alternate,!(r&30)&&!tR(i)&&(e=Fc(t,r),e===2&&(s=Cp(t),s!==0&&(r=s,e=em(t,s))),e===1))throw n=iu,Di(t,0),wr(t,r),Dt(t,ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:mi(t,kt,Un);break;case 3:if(wr(t,r),(r&130023424)===r&&(e=qg+500-ke(),10<e)){if(_c(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){vt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Op(mi.bind(null,t,kt,Un),e);break}mi(t,kt,Un);break;case 4:if(wr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-hn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*eR(r/1960))-r,10<r){t.timeoutHandle=Op(mi.bind(null,t,kt,Un),r);break}mi(t,kt,Un);break;case 5:mi(t,kt,Un);break;default:throw Error(C(329))}}}return Dt(t,ke()),t.callbackNode===n?PE.bind(null,t):null}function em(t,e){var n=Ra;return t.current.memoizedState.isDehydrated&&(Di(t,e).flags|=256),t=Fc(t,e),t!==2&&(e=kt,kt=n,e!==null&&tm(e)),t}function tm(t){kt===null?kt=t:kt.push.apply(kt,t)}function tR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!fn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wr(t,e){for(e&=~Bg,e&=~xh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-hn(e),r=1<<n;t[n]=-1,e&=~r}}function f0(t){if(X&6)throw Error(C(327));js();var e=_c(t,0);if(!(e&1))return Dt(t,ke()),null;var n=Fc(t,e);if(t.tag!==0&&n===2){var r=Cp(t);r!==0&&(e=r,n=em(t,r))}if(n===1)throw n=iu,Di(t,0),wr(t,e),Dt(t,ke()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,mi(t,kt,Un),Dt(t,ke()),null}function Kg(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(so=ke()+500,Nh&&ni())}}function qi(t){Tr!==null&&Tr.tag===0&&!(X&6)&&js();var e=X;X|=1;var n=Zt.transition,r=te;try{if(Zt.transition=null,te=1,t)return t()}finally{te=r,Zt.transition=n,X=e,!(X&6)&&ni()}}function Wg(){Lt=Os.current,ue(Os)}function Di(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Pb(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(Cg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&kc();break;case 3:ro(),ue(Pt),ue(ft),$g();break;case 5:Og(r);break;case 4:ro();break;case 13:ue(ge);break;case 19:ue(ge);break;case 10:Rg(r.type._context);break;case 22:case 23:Wg()}n=n.return}if(je=t,xe=t=Or(t.current,null),et=Lt=e,$e=0,iu=null,Bg=xh=Bi=0,kt=Ra=null,Ci!==null){for(e=0;e<Ci.length;e++)if(n=Ci[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ci=null}return t}function xE(t,e){do{var n=xe;try{if(bg(),Xl.current=Oc,Dc){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Dc=!1}if(ji=0,Ve=Oe=ye=null,Na=!1,tu=0,jg.current=null,n===null||n.return===null){$e=1,iu=e,xe=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=et,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=e0(o);if(f!==null){f.flags&=-257,t0(f,o,a,s,e),f.mode&1&&Zw(s,l,e),e=f,u=l;var y=e.updateQueue;if(y===null){var v=new Set;v.add(u),e.updateQueue=v}else y.add(u);break e}else{if(!(e&1)){Zw(s,l,e),Gg();break e}u=Error(C(426))}}else if(de&&a.mode&1){var E=e0(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),t0(E,o,a,s,e),Ag(io(u,a));break e}}s=u=io(u,a),$e!==4&&($e=2),Ra===null?Ra=[s]:Ra.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=mE(s,u,e);Ww(s,m);break e;case 1:a=u;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(xr===null||!xr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var I=gE(s,a,e);Ww(s,I);break e}}s=s.return}while(s!==null)}$E(n)}catch(T){e=T,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(1)}function DE(){var t=$c.current;return $c.current=Oc,t===null?Oc:t}function Gg(){($e===0||$e===3||$e===2)&&($e=4),je===null||!(Bi&268435455)&&!(xh&268435455)||wr(je,et)}function Fc(t,e){var n=X;X|=2;var r=DE();(je!==t||et!==e)&&(Un=null,Di(t,e));do try{nR();break}catch(i){xE(t,i)}while(1);if(bg(),X=n,$c.current=r,xe!==null)throw Error(C(261));return je=null,et=0,$e}function nR(){for(;xe!==null;)OE(xe)}function rR(){for(;xe!==null&&!NN();)OE(xe)}function OE(t){var e=ME(t.alternate,t,Lt);t.memoizedProps=t.pendingProps,e===null?$E(t):xe=e,jg.current=null}function $E(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Yb(n,e),n!==null){n.flags&=32767,xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$e=6,xe=null;return}}else if(n=Qb(n,e,Lt),n!==null){xe=n;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);$e===0&&($e=5)}function mi(t,e,n){var r=te,i=Zt.transition;try{Zt.transition=null,te=1,iR(t,e,n,r)}finally{Zt.transition=i,te=r}return null}function iR(t,e,n,r){do js();while(Tr!==null);if(X&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(FN(t,s),t===je&&(xe=je=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rl||(Rl=!0,FE(wc,function(){return js(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Zt.transition,Zt.transition=null;var o=te;te=1;var a=X;X|=4,jg.current=null,Jb(t,n),bE(n,t),Tb(xp),Ic=!!Pp,xp=Pp=null,t.current=n,Zb(n),bN(),X=a,te=o,Zt.transition=s}else t.current=n;if(Rl&&(Rl=!1,Tr=t,Mc=i),s=t.pendingLanes,s===0&&(xr=null),xN(n.stateNode),Dt(t,ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Lc)throw Lc=!1,t=Jp,Jp=null,t;return Mc&1&&t.tag!==0&&js(),s=t.pendingLanes,s&1?t===Zp?Pa++:(Pa=0,Zp=t):Pa=0,ni(),null}function js(){if(Tr!==null){var t=pI(Mc),e=Zt.transition,n=te;try{if(Zt.transition=null,te=16>t?16:t,Tr===null)var r=!1;else{if(t=Tr,Tr=null,Mc=0,X&6)throw Error(C(331));var i=X;for(X|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var l=a[u];for($=l;$!==null;){var c=$;switch(c.tag){case 0:case 11:case 15:ba(8,c,s)}var h=c.child;if(h!==null)h.return=c,$=h;else for(;$!==null;){c=$;var d=c.sibling,f=c.return;if(CE(c),c===l){$=null;break}if(d!==null){d.return=f,$=d;break}$=f}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var E=v.sibling;v.sibling=null,v=E}while(v!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ba(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,$=m;break e}$=s.return}}var p=t.current;for($=p;$!==null;){o=$;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,$=g;else e:for(o=p;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ph(9,a)}}catch(T){_e(a,a.return,T)}if(a===o){$=null;break e}var I=a.sibling;if(I!==null){I.return=a.return,$=I;break e}$=a.return}}if(X=i,ni(),bn&&typeof bn.onPostCommitFiberRoot=="function")try{bn.onPostCommitFiberRoot(Sh,t)}catch{}r=!0}return r}finally{te=n,Zt.transition=e}}return!1}function p0(t,e,n){e=io(n,e),e=mE(t,e,1),t=Pr(t,e,1),e=vt(),t!==null&&($u(t,1,e),Dt(t,e))}function _e(t,e,n){if(t.tag===3)p0(t,t,n);else for(;e!==null;){if(e.tag===3){p0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xr===null||!xr.has(r))){t=io(n,t),t=gE(e,t,1),e=Pr(e,t,1),t=vt(),e!==null&&($u(e,1,t),Dt(e,t));break}}e=e.return}}function sR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=vt(),t.pingedLanes|=t.suspendedLanes&n,je===t&&(et&n)===n&&($e===4||$e===3&&(et&130023424)===et&&500>ke()-qg?Di(t,0):Bg|=n),Dt(t,e)}function LE(t,e){e===0&&(t.mode&1?(e=_l,_l<<=1,!(_l&130023424)&&(_l=4194304)):e=1);var n=vt();t=Zn(t,e),t!==null&&($u(t,e,n),Dt(t,n))}function oR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),LE(t,n)}function aR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),LE(t,n)}var ME;ME=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pt.current)At=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return At=!1,Hb(t,e,n);At=!!(t.flags&131072)}else At=!1,de&&e.flags&1048576&&VI(e,Nc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Zl(t,e),t=e.pendingProps;var i=eo(e,ft.current);zs(e,n),i=Mg(null,e,r,t,i,n);var s=Fg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xt(r)?(s=!0,Cc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xg(e),i.updater=bh,e.stateNode=i,i._reactInternals=e,zp(e,r,t,n),e=qp(null,e,r,!0,s,n)):(e.tag=0,de&&s&&kg(e),pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Zl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=lR(r),t=on(r,t),i){case 0:e=Bp(null,e,r,t,n);break e;case 1:e=i0(null,e,r,t,n);break e;case 11:e=n0(null,e,r,t,n);break e;case 14:e=r0(null,e,r,on(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:on(r,i),Bp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:on(r,i),i0(t,e,r,i,n);case 3:e:{if(_E(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,qI(t,e),Pc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=io(Error(C(423)),e),e=s0(t,e,r,n,i);break e}else if(r!==i){i=io(Error(C(424)),e),e=s0(t,e,r,n,i);break e}else for(Ft=Rr(e.stateNode.containerInfo.firstChild),Vt=e,de=!0,un=null,n=HI(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(to(),r===i){e=er(t,e,n);break e}pt(t,e,r,n)}e=e.child}return e;case 5:return QI(e),t===null&&Fp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Dp(r,i)?o=null:s!==null&&Dp(r,s)&&(e.flags|=32),wE(t,e),pt(t,e,o,n),e.child;case 6:return t===null&&Fp(e),null;case 13:return IE(t,e,n);case 4:return Dg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=no(e,null,r,n):pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:on(r,i),n0(t,e,r,i,n);case 7:return pt(t,e,e.pendingProps,n),e.child;case 8:return pt(t,e,e.pendingProps.children,n),e.child;case 12:return pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,se(bc,r._currentValue),r._currentValue=o,s!==null)if(fn(s.value,o)){if(s.children===i.children&&!Pt.current){e=er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Hn(-1,n&-n),u.tag=2;var l=s.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?u.next=u:(u.next=c.next,c.next=u),l.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Up(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Up(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,zs(e,n),i=en(i),r=r(i),e.flags|=1,pt(t,e,r,n),e.child;case 14:return r=e.type,i=on(r,e.pendingProps),i=on(r.type,i),r0(t,e,r,i,n);case 15:return yE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:on(r,i),Zl(t,e),e.tag=1,xt(r)?(t=!0,Cc(e)):t=!1,zs(e,n),WI(e,r,i),zp(e,r,i,n),qp(null,e,r,!0,t,n);case 19:return EE(t,e,n);case 22:return vE(t,e,n)}throw Error(C(156,e.tag))};function FE(t,e){return cI(t,e)}function uR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(t,e,n,r){return new uR(t,e,n,r)}function Hg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lR(t){if(typeof t=="function")return Hg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fg)return 11;if(t===pg)return 14}return 2}function Or(t,e){var n=t.alternate;return n===null?(n=Xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Hg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ts:return Oi(n.children,i,s,e);case dg:o=8,i|=8;break;case hp:return t=Xt(12,n,e,i|2),t.elementType=hp,t.lanes=s,t;case dp:return t=Xt(13,n,e,i),t.elementType=dp,t.lanes=s,t;case fp:return t=Xt(19,n,e,i),t.elementType=fp,t.lanes=s,t;case G1:return Dh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case K1:o=10;break e;case W1:o=9;break e;case fg:o=11;break e;case pg:o=14;break e;case gr:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=Xt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Oi(t,e,n,r){return t=Xt(7,t,r,e),t.lanes=n,t}function Dh(t,e,n,r){return t=Xt(22,t,r,e),t.elementType=G1,t.lanes=n,t.stateNode={isHidden:!1},t}function Cf(t,e,n){return t=Xt(6,t,null,e),t.lanes=n,t}function Af(t,e,n){return e=Xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=af(0),this.expirationTimes=af(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=af(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qg(t,e,n,r,i,s,o,a,u){return t=new cR(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xg(s),t}function hR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ss,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function UE(t){if(!t)return Ur;t=t._reactInternals;e:{if(os(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(xt(n))return FI(t,n,e)}return e}function VE(t,e,n,r,i,s,o,a,u){return t=Qg(n,r,!0,t,i,s,o,a,u),t.context=UE(null),n=t.current,r=vt(),i=Dr(n),s=Hn(r,i),s.callback=e??null,Pr(n,s,i),t.current.lanes=i,$u(t,i,r),Dt(t,r),t}function Oh(t,e,n,r){var i=e.current,s=vt(),o=Dr(i);return n=UE(n),e.context===null?e.context=n:e.pendingContext=n,e=Hn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Pr(i,e,o),t!==null&&(dn(t,i,o,s),Yl(t,i,o)),o}function Uc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function m0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yg(t,e){m0(t,e),(t=t.alternate)&&m0(t,e)}function dR(){return null}var zE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Xg(t){this._internalRoot=t}$h.prototype.render=Xg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));Oh(t,e,null,null)};$h.prototype.unmount=Xg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qi(function(){Oh(null,t,null,null)}),e[Jn]=null}};function $h(t){this._internalRoot=t}$h.prototype.unstable_scheduleHydration=function(t){if(t){var e=yI();t={blockedOn:null,target:t,priority:e};for(var n=0;n<vr.length&&e!==0&&e<vr[n].priority;n++);vr.splice(n,0,t),n===0&&wI(t)}};function Jg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Lh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function g0(){}function fR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var l=Uc(o);s.call(l)}}var o=VE(e,r,t,0,null,!1,!1,"",g0);return t._reactRootContainer=o,t[Jn]=o.current,Ya(t.nodeType===8?t.parentNode:t),qi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var l=Uc(u);a.call(l)}}var u=Qg(t,0,!1,null,null,!1,!1,"",g0);return t._reactRootContainer=u,t[Jn]=u.current,Ya(t.nodeType===8?t.parentNode:t),qi(function(){Oh(e,u,n,r)}),u}function Mh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Uc(o);a.call(u)}}Oh(e,o,t,i)}else o=fR(n,e,t,i,r);return Uc(o)}mI=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fa(e.pendingLanes);n!==0&&(yg(e,n|1),Dt(e,ke()),!(X&6)&&(so=ke()+500,ni()))}break;case 13:qi(function(){var r=Zn(t,1);if(r!==null){var i=vt();dn(r,t,1,i)}}),Yg(t,1)}};vg=function(t){if(t.tag===13){var e=Zn(t,134217728);if(e!==null){var n=vt();dn(e,t,134217728,n)}Yg(t,134217728)}};gI=function(t){if(t.tag===13){var e=Dr(t),n=Zn(t,e);if(n!==null){var r=vt();dn(n,t,e,r)}Yg(t,e)}};yI=function(){return te};vI=function(t,e){var n=te;try{return te=t,e()}finally{te=n}};Sp=function(t,e,n){switch(e){case"input":if(gp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ah(r);if(!i)throw Error(C(90));Q1(r),gp(r,i)}}}break;case"textarea":X1(t,n);break;case"select":e=n.value,e!=null&&Ms(t,!!n.multiple,e,!1)}};iI=Kg;sI=qi;var pR={usingClientEntryPoint:!1,Events:[Mu,Ns,Ah,nI,rI,Kg]},Zo={findFiberByHostInstance:ki,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},mR={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=uI(t),t===null?null:t.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||dR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{Sh=Pl.inject(mR),bn=Pl}catch{}}Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pR;Kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jg(e))throw Error(C(200));return hR(t,e,null,n)};Kt.createRoot=function(t,e){if(!Jg(t))throw Error(C(299));var n=!1,r="",i=zE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Qg(t,1,!1,null,null,n,!1,r,i),t[Jn]=e.current,Ya(t.nodeType===8?t.parentNode:t),new Xg(e)};Kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=uI(e),t=t===null?null:t.stateNode,t};Kt.flushSync=function(t){return qi(t)};Kt.hydrate=function(t,e,n){if(!Lh(e))throw Error(C(200));return Mh(null,t,e,!0,n)};Kt.hydrateRoot=function(t,e,n){if(!Jg(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=zE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=VE(e,null,t,1,n??null,i,!1,s,o),t[Jn]=e.current,Ya(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new $h(e)};Kt.render=function(t,e,n){if(!Lh(e))throw Error(C(200));return Mh(null,t,e,!1,n)};Kt.unmountComponentAtNode=function(t){if(!Lh(t))throw Error(C(40));return t._reactRootContainer?(qi(function(){Mh(null,null,t,!1,function(){t._reactRootContainer=null,t[Jn]=null})}),!0):!1};Kt.unstable_batchedUpdates=Kg;Kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Lh(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return Mh(t,e,n,!1,r)};Kt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Kt})(dN);var y0=mc;hw.createRoot=y0.createRoot,hw.hydrateRoot=y0.hydrateRoot;var nm={},gR={get exports(){return nm},set exports(t){nm=t}},jE={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oo=Ot;function yR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vR=typeof Object.is=="function"?Object.is:yR,wR=oo.useState,_R=oo.useEffect,IR=oo.useLayoutEffect,ER=oo.useDebugValue;function SR(t,e){var n=e(),r=wR({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return IR(function(){i.value=n,i.getSnapshot=e,Nf(i)&&s({inst:i})},[t,n,e]),_R(function(){return Nf(i)&&s({inst:i}),t(function(){Nf(i)&&s({inst:i})})},[t]),ER(n),n}function Nf(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vR(t,n)}catch{return!0}}function TR(t,e){return e()}var kR=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?TR:SR;jE.useSyncExternalStore=oo.useSyncExternalStore!==void 0?oo.useSyncExternalStore:kR;(function(t){t.exports=jE})(gR);var v0={},CR={get exports(){return v0},set exports(t){v0=t}},BE={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh=Ot,AR=nm;function NR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var bR=typeof Object.is=="function"?Object.is:NR,RR=AR.useSyncExternalStore,PR=Fh.useRef,xR=Fh.useEffect,DR=Fh.useMemo,OR=Fh.useDebugValue;BE.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=PR(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=DR(function(){function u(f){if(!l){if(l=!0,c=f,f=r(f),i!==void 0&&o.hasValue){var y=o.value;if(i(y,f))return h=y}return h=f}if(y=h,bR(c,f))return y;var v=r(f);return i!==void 0&&i(y,v)?y:(c=f,h=v)}var l=!1,c,h,d=n===void 0?null:n;return[function(){return u(e())},d===null?void 0:function(){return u(d())}]},[e,n,r,i]);var a=RR(t,s[0],s[1]);return xR(function(){o.hasValue=!0,o.value=a},[a]),OR(a),a};(function(t){t.exports=BE})(CR);function $R(t){t()}let qE=$R;const LR=t=>qE=t,MR=()=>qE,ao=Ot.createContext(null);function FR(){return Ot.useContext(ao)}var rm={},UR={get exports(){return rm},set exports(t){rm=t}},re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var We=typeof Symbol=="function"&&Symbol.for,Zg=We?Symbol.for("react.element"):60103,ey=We?Symbol.for("react.portal"):60106,Uh=We?Symbol.for("react.fragment"):60107,Vh=We?Symbol.for("react.strict_mode"):60108,zh=We?Symbol.for("react.profiler"):60114,jh=We?Symbol.for("react.provider"):60109,Bh=We?Symbol.for("react.context"):60110,ty=We?Symbol.for("react.async_mode"):60111,qh=We?Symbol.for("react.concurrent_mode"):60111,Kh=We?Symbol.for("react.forward_ref"):60112,Wh=We?Symbol.for("react.suspense"):60113,VR=We?Symbol.for("react.suspense_list"):60120,Gh=We?Symbol.for("react.memo"):60115,Hh=We?Symbol.for("react.lazy"):60116,zR=We?Symbol.for("react.block"):60121,jR=We?Symbol.for("react.fundamental"):60117,BR=We?Symbol.for("react.responder"):60118,qR=We?Symbol.for("react.scope"):60119;function Gt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Zg:switch(t=t.type,t){case ty:case qh:case Uh:case zh:case Vh:case Wh:return t;default:switch(t=t&&t.$$typeof,t){case Bh:case Kh:case Hh:case Gh:case jh:return t;default:return e}}case ey:return e}}}function KE(t){return Gt(t)===qh}re.AsyncMode=ty;re.ConcurrentMode=qh;re.ContextConsumer=Bh;re.ContextProvider=jh;re.Element=Zg;re.ForwardRef=Kh;re.Fragment=Uh;re.Lazy=Hh;re.Memo=Gh;re.Portal=ey;re.Profiler=zh;re.StrictMode=Vh;re.Suspense=Wh;re.isAsyncMode=function(t){return KE(t)||Gt(t)===ty};re.isConcurrentMode=KE;re.isContextConsumer=function(t){return Gt(t)===Bh};re.isContextProvider=function(t){return Gt(t)===jh};re.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zg};re.isForwardRef=function(t){return Gt(t)===Kh};re.isFragment=function(t){return Gt(t)===Uh};re.isLazy=function(t){return Gt(t)===Hh};re.isMemo=function(t){return Gt(t)===Gh};re.isPortal=function(t){return Gt(t)===ey};re.isProfiler=function(t){return Gt(t)===zh};re.isStrictMode=function(t){return Gt(t)===Vh};re.isSuspense=function(t){return Gt(t)===Wh};re.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Uh||t===qh||t===zh||t===Vh||t===Wh||t===VR||typeof t=="object"&&t!==null&&(t.$$typeof===Hh||t.$$typeof===Gh||t.$$typeof===jh||t.$$typeof===Bh||t.$$typeof===Kh||t.$$typeof===jR||t.$$typeof===BR||t.$$typeof===qR||t.$$typeof===zR)};re.typeOf=Gt;(function(t){t.exports=re})(UR);var WE=rm,KR={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},WR={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},GE={};GE[WE.ForwardRef]=KR;GE[WE.Memo]=WR;var w0={},GR={get exports(){return w0},set exports(t){w0=t}},ie={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny=Symbol.for("react.element"),ry=Symbol.for("react.portal"),Qh=Symbol.for("react.fragment"),Yh=Symbol.for("react.strict_mode"),Xh=Symbol.for("react.profiler"),Jh=Symbol.for("react.provider"),Zh=Symbol.for("react.context"),HR=Symbol.for("react.server_context"),ed=Symbol.for("react.forward_ref"),td=Symbol.for("react.suspense"),nd=Symbol.for("react.suspense_list"),rd=Symbol.for("react.memo"),id=Symbol.for("react.lazy"),QR=Symbol.for("react.offscreen"),HE;HE=Symbol.for("react.module.reference");function rn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case ny:switch(t=t.type,t){case Qh:case Xh:case Yh:case td:case nd:return t;default:switch(t=t&&t.$$typeof,t){case HR:case Zh:case ed:case id:case rd:case Jh:return t;default:return e}}case ry:return e}}}ie.ContextConsumer=Zh;ie.ContextProvider=Jh;ie.Element=ny;ie.ForwardRef=ed;ie.Fragment=Qh;ie.Lazy=id;ie.Memo=rd;ie.Portal=ry;ie.Profiler=Xh;ie.StrictMode=Yh;ie.Suspense=td;ie.SuspenseList=nd;ie.isAsyncMode=function(){return!1};ie.isConcurrentMode=function(){return!1};ie.isContextConsumer=function(t){return rn(t)===Zh};ie.isContextProvider=function(t){return rn(t)===Jh};ie.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===ny};ie.isForwardRef=function(t){return rn(t)===ed};ie.isFragment=function(t){return rn(t)===Qh};ie.isLazy=function(t){return rn(t)===id};ie.isMemo=function(t){return rn(t)===rd};ie.isPortal=function(t){return rn(t)===ry};ie.isProfiler=function(t){return rn(t)===Xh};ie.isStrictMode=function(t){return rn(t)===Yh};ie.isSuspense=function(t){return rn(t)===td};ie.isSuspenseList=function(t){return rn(t)===nd};ie.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Qh||t===Xh||t===Yh||t===td||t===nd||t===QR||typeof t=="object"&&t!==null&&(t.$$typeof===id||t.$$typeof===rd||t.$$typeof===Jh||t.$$typeof===Zh||t.$$typeof===ed||t.$$typeof===HE||t.getModuleId!==void 0)};ie.typeOf=rn;(function(t){t.exports=ie})(GR);function YR(){const t=MR();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=e;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!i||e===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const _0={notify(){},get:()=>[]};function XR(t,e){let n,r=_0;function i(h){return u(),r.subscribe(h)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return!!n}function u(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=YR())}function l(){n&&(n(),n=void 0,r.clear(),r=_0)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:u,tryUnsubscribe:l,getListeners:()=>r};return c}const JR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ZR=JR?Ot.useLayoutEffect:Ot.useEffect;function OV({store:t,context:e,children:n,serverState:r}){const i=Ot.useMemo(()=>{const a=XR(t);return{store:t,subscription:a,getServerState:r?()=>r:void 0}},[t,r]),s=Ot.useMemo(()=>t.getState(),[t]);ZR(()=>{const{subscription:a}=i;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==t.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[i,s]);const o=e||ao;return sN.createElement(o.Provider,{value:i},n)}function QE(t=ao){const e=t===ao?FR:()=>Ot.useContext(t);return function(){const{store:r}=e();return r}}const eP=QE();function tP(t=ao){const e=t===ao?eP:QE(t);return function(){return e().dispatch}}const $V=tP();LR(mc.unstable_batchedUpdates);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},XE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;u||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(YE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new rP;const d=s<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iP=function(t){const e=YE(t);return XE.encodeByteArray(e,!0)},Vc=function(t){return iP(t).replace(/\./g,"")},JE=function(t){try{return XE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function zc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!sP(n)||(t[n]=zc(t[n],e[n]));return t}function sP(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP=()=>oP().__FIREBASE_DEFAULTS__,uP=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&JE(t[1]);return e&&JSON.parse(e)},iy=()=>{try{return aP()||uP()||lP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cP=()=>{var t;return(t=iy())===null||t===void 0?void 0:t.config},hP=t=>{var e;return(e=iy())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Vc(JSON.stringify(n)),Vc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function sy(){var t;const e=(t=iy())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mP(){return typeof self=="object"&&self.self===self}function ZE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function oy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eS(){const t=we();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gP(){return!sy()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function su(){try{return typeof indexedDB=="object"}catch{return!1}}function yP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP="FirebaseError";class wt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vP,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,as.prototype.create)}}class as{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?wP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new wt(i,a,r)}}function wP(t,e){return t.replace(_P,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const _P=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function IP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function im(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(E0(s)&&E0(o)){if(!im(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function E0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $s(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ma(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function tS(t,e){const n=new EP(t,e);return n.subscribe.bind(n)}class EP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");SP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=bf),i.error===void 0&&(i.error=bf),i.complete===void 0&&(i.complete=bf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t){return t&&t._delegate?t._delegate:t}class $n{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(CP(e))try{this.getOrInitializeService({instanceIdentifier:gi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=gi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gi){return this.instances.has(e)}getOptions(e=gi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=gi){return this.component?this.component.multipleInstances?e:gi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kP(t){return t===gi?void 0:t}function CP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new TP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=[];var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const nS={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},NP=Q.INFO,bP={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},RP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=bP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sd{constructor(e){this.name=e,this._logLevel=NP,this._logHandler=RP,this._userLogHandler=null,ay.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}function PP(t){ay.forEach(e=>{e.setLogLevel(t)})}function xP(t,e){for(const n of ay){let r=null;e&&e.level&&(r=nS[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&t({level:Q[s].toLowerCase(),message:a,args:o,type:i.name})}}}const DP=(t,e)=>e.some(n=>t instanceof n);let S0,T0;function OP(){return S0||(S0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $P(){return T0||(T0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rS=new WeakMap,sm=new WeakMap,iS=new WeakMap,Rf=new WeakMap,uy=new WeakMap;function LP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n($r(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rS.set(n,t)}).catch(()=>{}),uy.set(e,t),e}function MP(t){if(sm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});sm.set(t,e)}let om={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||iS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function FP(t){om=t(om)}function UP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pf(this),e,...n);return iS.set(r,e.sort?e.sort():[e]),$r(r)}:$P().includes(t)?function(...e){return t.apply(Pf(this),e),$r(rS.get(this))}:function(...e){return $r(t.apply(Pf(this),e))}}function VP(t){return typeof t=="function"?UP(t):(t instanceof IDBTransaction&&MP(t),DP(t,OP())?new Proxy(t,om):t)}function $r(t){if(t instanceof IDBRequest)return LP(t);if(Rf.has(t))return Rf.get(t);const e=VP(t);return e!==t&&(Rf.set(t,e),uy.set(e,t)),e}const Pf=t=>uy.get(t);function zP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=$r(o);return r&&o.addEventListener("upgradeneeded",u=>{r($r(o.result),u.oldVersion,u.newVersion,$r(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const jP=["get","getKey","getAll","getAllKeys","count"],BP=["put","add","delete","clear"],xf=new Map;function k0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xf.get(e))return xf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=BP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jP.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&u.done]))[0]};return xf.set(e,s),s}FP(t=>({...t,get:(e,n,r)=>k0(e,n)||t.get(e,n,r),has:(e,n)=>!!k0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const am="@firebase/app",C0="0.9.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=new sd("@firebase/app"),WP="@firebase/app-compat",GP="@firebase/analytics-compat",HP="@firebase/analytics",QP="@firebase/app-check-compat",YP="@firebase/app-check",XP="@firebase/auth",JP="@firebase/auth-compat",ZP="@firebase/database",ex="@firebase/database-compat",tx="@firebase/functions",nx="@firebase/functions-compat",rx="@firebase/installations",ix="@firebase/installations-compat",sx="@firebase/messaging",ox="@firebase/messaging-compat",ax="@firebase/performance",ux="@firebase/performance-compat",lx="@firebase/remote-config",cx="@firebase/remote-config-compat",hx="@firebase/storage",dx="@firebase/storage-compat",fx="@firebase/firestore",px="@firebase/firestore-compat",mx="firebase",gx="9.21.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="[DEFAULT]",yx={[am]:"fire-core",[WP]:"fire-core-compat",[HP]:"fire-analytics",[GP]:"fire-analytics-compat",[YP]:"fire-app-check",[QP]:"fire-app-check-compat",[XP]:"fire-auth",[JP]:"fire-auth-compat",[ZP]:"fire-rtdb",[ex]:"fire-rtdb-compat",[tx]:"fire-fn",[nx]:"fire-fn-compat",[rx]:"fire-iid",[ix]:"fire-iid-compat",[sx]:"fire-fcm",[ox]:"fire-fcm-compat",[ax]:"fire-perf",[ux]:"fire-perf-compat",[lx]:"fire-rc",[cx]:"fire-rc-compat",[hx]:"fire-gcs",[dx]:"fire-gcs-compat",[fx]:"fire-fst",[px]:"fire-fst-compat","fire-js":"fire-js",[mx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new Map,ou=new Map;function jc(t,e){try{t.container.addComponent(e)}catch(n){Ki.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function sS(t,e){t.container.addOrOverwriteComponent(e)}function jr(t){const e=t.name;if(ou.has(e))return Ki.debug(`There were multiple attempts to register component ${e}.`),!1;ou.set(e,t);for(const n of zr.values())jc(n,t);return!0}function oS(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function vx(t,e,n=Vr){oS(t,e).clearInstance(n)}function wx(){ou.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qn=new as("app","Firebase",_x);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ix=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=gx;function ly(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Qn.create("bad-app-name",{appName:String(i)});if(n||(n=cP()),!n)throw Qn.create("no-options");const s=zr.get(i);if(s){if(im(n,s.options)&&im(r,s.config))return s;throw Qn.create("duplicate-app",{appName:i})}const o=new AP(i);for(const u of ou.values())o.addComponent(u);const a=new Ix(n,r,o);return zr.set(i,a),a}function Ex(t=Vr){const e=zr.get(t);if(!e&&t===Vr)return ly();if(!e)throw Qn.create("no-app",{appName:t});return e}function Sx(){return Array.from(zr.values())}async function aS(t){const e=t.name;zr.has(e)&&(zr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Pn(t,e,n){var r;let i=(r=yx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ki.warn(a.join(" "));return}jr(new $n(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function uS(t,e){if(t!==null&&typeof t!="function")throw Qn.create("invalid-log-argument");xP(t,e)}function lS(t){PP(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx="firebase-heartbeat-database",kx=1,au="firebase-heartbeat-store";let Df=null;function cS(){return Df||(Df=zP(Tx,kx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(au)}}}).catch(t=>{throw Qn.create("idb-open",{originalErrorMessage:t.message})})),Df}async function Cx(t){try{return(await cS()).transaction(au).objectStore(au).get(hS(t))}catch(e){if(e instanceof wt)Ki.warn(e.message);else{const n=Qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ki.warn(n.message)}}}async function A0(t,e){try{const r=(await cS()).transaction(au,"readwrite");return await r.objectStore(au).put(e,hS(t)),r.done}catch(n){if(n instanceof wt)Ki.warn(n.message);else{const r=Qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ki.warn(r.message)}}}function hS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax=1024,Nx=30*24*60*60*1e3;class bx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Px(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=N0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Nx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=N0(),{heartbeatsToSend:n,unsentEntries:r}=Rx(this._heartbeatsCache.heartbeats),i=Vc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function N0(){return new Date().toISOString().substring(0,10)}function Rx(t,e=Ax){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),b0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),b0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Px{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return su()?yP().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Cx(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return A0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return A0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function b0(t){return Vc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xx(t){jr(new $n("platform-logger",e=>new qP(e),"PRIVATE")),jr(new $n("heartbeat",e=>new bx(e),"PRIVATE")),Pn(am,C0,t),Pn(am,C0,"esm2017"),Pn("fire-js","")}xx("");const Dx=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:wt,SDK_VERSION:ri,_DEFAULT_ENTRY_NAME:Vr,_addComponent:jc,_addOrOverwriteComponent:sS,_apps:zr,_clearComponents:wx,_components:ou,_getProvider:oS,_registerComponent:jr,_removeServiceInstance:vx,deleteApp:aS,getApp:Ex,getApps:Sx,initializeApp:ly,onLog:uS,registerVersion:Pn,setLogLevel:lS},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e,n){this._delegate=e,this.firebase=n,jc(e,new $n("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),aS(this._delegate)))}_getService(e,n=Vr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Vr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){jc(this._delegate,e)}_addOrOverwriteComponent(e){sS(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},R0=new as("app-compat","Firebase",$x);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lx(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Pn,setLogLevel:lS,onLog:uS,apps:null,SDK_VERSION:ri,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:Dx}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||Vr,!I0(e,l))throw R0.create("no-app",{appName:l});return e[l]}i.App=t;function s(l,c={}){const h=ly(l,c);if(I0(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const c=l.name,h=c.replace("-compat","");if(jr(l)&&l.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw R0.create("invalid-app-argument",{appName:c});return f[h]()};l.serviceProps!==void 0&&zc(d,l.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,c).apply(this,l.multipleInstances?f:[])}}return l.type==="PUBLIC"?n[h]:null}function u(l,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(){const t=Lx(Ox);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:dS,extendNamespace:e,createSubscribe:tS,ErrorFactory:as,deepExtend:zc});function e(n){zc(t,n)}return t}const Mx=dS();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0=new sd("@firebase/app-compat"),Fx="@firebase/app-compat",Ux="0.2.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(t){Pn(Fx,Ux,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(mP()&&self.firebase!==void 0){P0.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&P0.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Uu=Mx;Vx();var zx="firebase",jx="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Uu.registerVersion(zx,jx,"app-compat");function cy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const ea={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},gs={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function fS(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qx=Bx,Kx=fS,pS=new as("auth","Firebase",fS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=new sd("@firebase/auth");function Wx(t,...e){Bc.logLevel<=Q.WARN&&Bc.warn(`Auth (${ri}): ${t}`,...e)}function rc(t,...e){Bc.logLevel<=Q.ERROR&&Bc.error(`Auth (${ri}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t,...e){throw hy(t,...e)}function tt(t,...e){return hy(t,...e)}function mS(t,e,n){const r=Object.assign(Object.assign({},Kx()),{[e]:n});return new as("auth","Firebase",r).create(e,{appName:t.name})}function bo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&it(t,"argument-error"),mS(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function hy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pS.create(t,...e)}function A(t,e,...n){if(!t)throw hy(e,...n)}function kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rc(e),new Error(e)}function pn(t,e){t||kn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dy(){return x0()==="http:"||x0()==="https:"}function x0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dy()||ZE()||"connection"in navigator)?navigator.onLine:!0}function Hx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n){this.shortDelay=e,this.longDelay=n,pn(n>e,"Short delay should be less than long delay!"),this.isMobile=pP()||oy()}get(){return Gx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(t,e){pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx=new Vu(3e4,6e4);function De(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Me(t,e,n,r,i={}){return yS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=No(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),gS.fetch()(vS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function yS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Qx),e);try{const i=new Xx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ga(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ga(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ga(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ga(t,"user-disabled",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw mS(t,c,l);it(t,c)}}catch(i){if(i instanceof wt)throw i;it(t,"network-request-failed",{message:String(i)})}}async function or(t,e,n,r,i={}){const s=await Me(t,e,n,r,i);return"mfaPendingCredential"in s&&it(t,"multi-factor-auth-required",{_serverResponse:s}),s}function vS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?fy(t.config,i):`${t.config.apiScheme}://${i}`}class Xx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tt(this.auth,"network-request-failed")),Yx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ga(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=tt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jx(t,e){return Me(t,"POST","/v1/accounts:delete",e)}async function Zx(t,e){return Me(t,"POST","/v1/accounts:update",e)}async function eD(t,e){return Me(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tD(t,e=!1){const n=U(t),r=await n.getIdToken(e),i=od(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:xa(Of(i.auth_time)),issuedAtTime:xa(Of(i.iat)),expirationTime:xa(Of(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Of(t){return Number(t)*1e3}function od(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return rc("JWT malformed, contained fewer than 3 sections"),null;try{const i=JE(n);return i?JSON.parse(i):(rc("Failed to decode base64 JWT payload"),null)}catch(i){return rc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function nD(t){const e=od(t);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wt&&rD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xa(this.lastLoginAt),this.creationTime=xa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await tr(t,eD(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?aD(s.providerUserInfo):[],a=oD(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new wS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function sD(t){const e=U(t);await lu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function aD(t){return t.map(e=>{var{providerId:n}=e,r=cy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uD(t,e){const n=await yS(t,{},async()=>{const r=No({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=vS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nD(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return A(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await uD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new cu;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cu,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t,e){A(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $i{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=cy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new wS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await tr(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tD(this,e)}reload(){return sD(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $i(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await lu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await tr(this,Jx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,m=(l=n.createdAt)!==null&&l!==void 0?l:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:I,isAnonymous:T,providerData:N,stsTokenManager:b}=n;A(g&&b,e,"internal-error");const O=cu.fromJSON(this.name,b);A(typeof g=="string",e,"internal-error"),dr(h,e.name),dr(d,e.name),A(typeof I=="boolean",e,"internal-error"),A(typeof T=="boolean",e,"internal-error"),dr(f,e.name),dr(y,e.name),dr(v,e.name),dr(E,e.name),dr(m,e.name),dr(p,e.name);const Z=new $i({uid:g,auth:e,email:d,emailVerified:I,displayName:h,isAnonymous:T,photoURL:y,phoneNumber:f,tenantId:v,stsTokenManager:O,createdAt:m,lastLoginAt:p});return N&&Array.isArray(N)&&(Z.providerData=N.map(V=>Object.assign({},V))),E&&(Z._redirectEventId=E),Z}static async _fromIdTokenResponse(e,n,r=!1){const i=new cu;i.updateFromServerResponse(n);const s=new $i({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await lu(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0=new Map;function Ut(t){pn(t instanceof Function,"Expected a class definition");let e=D0.get(t);return e?(pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,D0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_S.type="NONE";const uo=_S;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(t,e,n){return`firebase:${t}:${e}:${n}`}class Bs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Li(this.userKey,i.apiKey,s),this.fullPersistenceKey=Li("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$i._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bs(Ut(uo),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Ut(uo);const o=Li(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const h=$i._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Bs(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Bs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(SS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(IS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(TS(e))return"Blackberry";if(kS(e))return"Webos";if(py(e))return"Safari";if((e.includes("chrome/")||ES(e))&&!e.includes("edge/"))return"Chrome";if(zu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function IS(t=we()){return/firefox\//i.test(t)}function py(t=we()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ES(t=we()){return/crios\//i.test(t)}function SS(t=we()){return/iemobile/i.test(t)}function zu(t=we()){return/android/i.test(t)}function TS(t=we()){return/blackberry/i.test(t)}function kS(t=we()){return/webos/i.test(t)}function Ro(t=we()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lD(t=we()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function cD(t=we()){var e;return Ro(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hD(){return eS()&&document.documentMode===10}function CS(t=we()){return Ro(t)||zu(t)||kS(t)||TS(t)||/windows phone/i.test(t)||SS(t)}function dD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(t,e=[]){let n;switch(t){case"Browser":n=O0(we());break;case"Worker":n=`${O0(we())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ri}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fD(t){return(await Me(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function NS(t,e){return Me(t,"GET","/v2/recaptchaConfig",De(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(t){return t!==void 0&&t.getResponse!==void 0}function L0(t){return t!==void 0&&t.enterprise!==void 0}class bS{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function my(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=tt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",pD().appendChild(r)})}function RS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const mD="https://www.google.com/recaptcha/enterprise.js?render=",gD="recaptcha-enterprise",yD="NO_RECAPTCHA";class PS{constructor(e){this.type=gD,this.auth=be(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{NS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new bS(u);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;L0(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(yD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&L0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}my(mD+a).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Br(t,e,n,r=!1){const i=new PS(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new M0(this),this.idTokenSubscription=new M0(this),this.beforeStateQueue=new vD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ut(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Bs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?U(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ut(e))})}async initializeRecaptchaConfig(){const e=await NS(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new bS(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new PS(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new as("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ut(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await Bs.create(this,[Ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return A(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=AS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Wx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function be(t){return U(t)}class M0{constructor(e){this.auth=e,this.observer=null,this.addObserver=tS(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function _D(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ID(t,e,n){const r=be(t);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=xS(e),{host:o,port:a}=ED(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||SD()}function xS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ED(t){const e=xS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:F0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:F0(o)}}}function F0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function SD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kn("not implemented")}_getIdTokenResponse(e){return kn("not implemented")}_linkToIdToken(e,n){return kn("not implemented")}_getReauthenticationResolver(e){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DS(t,e){return Me(t,"POST","/v1/accounts:resetPassword",De(t,e))}async function OS(t,e){return Me(t,"POST","/v1/accounts:update",e)}async function TD(t,e){return Me(t,"POST","/v1/accounts:update",De(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $f(t,e){return or(t,"POST","/v1/accounts:signInWithPassword",De(t,e))}async function ad(t,e){return Me(t,"POST","/v1/accounts:sendOobCode",De(t,e))}async function kD(t,e){return ad(t,e)}async function Lf(t,e){return ad(t,e)}async function Mf(t,e){return ad(t,e)}async function CD(t,e){return ad(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AD(t,e){return or(t,"POST","/v1/accounts:signInWithEmailLink",De(t,e))}async function ND(t,e){return or(t,"POST","/v1/accounts:signInWithEmailLink",De(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu extends Po{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new hu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new hu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Br(e,r,"signInWithPassword");return $f(e,i)}else return $f(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Br(e,r,"signInWithPassword");return $f(e,s)}else return Promise.reject(i)});case"emailLink":return AD(e,{email:this._email,oobCode:this._password});default:it(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return OS(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ND(e,{idToken:n,email:this._email,oobCode:this._password});default:it(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yn(t,e){return or(t,"POST","/v1/accounts:signInWithIdp",De(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bD="http://localhost";class Ln extends Po{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ln(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):it("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=cy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ln(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yn(e,n)}buildRequest(){const e={requestUri:bD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=No(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RD(t,e){return Me(t,"POST","/v1/accounts:sendVerificationCode",De(t,e))}async function PD(t,e){return or(t,"POST","/v1/accounts:signInWithPhoneNumber",De(t,e))}async function xD(t,e){const n=await or(t,"POST","/v1/accounts:signInWithPhoneNumber",De(t,e));if(n.temporaryProof)throw ga(t,"account-exists-with-different-credential",n);return n}const DD={USER_NOT_FOUND:"user-not-found"};async function OD(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return or(t,"POST","/v1/accounts:signInWithPhoneNumber",De(t,n),DD)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends Po{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Mi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Mi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return PD(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return xD(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return OD(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Mi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $D(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function LD(t){const e=$s(ma(t)).link,n=e?$s(ma(e)).deep_link_id:null,r=$s(ma(t)).deep_link_id;return(r?$s(ma(r)).link:null)||r||n||e||t}class ud{constructor(e){var n,r,i,s,o,a;const u=$s(ma(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,h=$D((i=u.mode)!==null&&i!==void 0?i:null);A(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=LD(e);try{return new ud(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(){this.providerId=ii.PROVIDER_ID}static credential(e,n){return hu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ud.parseLink(n);return A(r,"argument-error"),hu._fromEmailAndCode(e,r.code,r.tenantId)}}ii.PROVIDER_ID="password";ii.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ii.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends ar{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class qs extends xo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return A("providerId"in n&&"signInMethod"in n,"argument-error"),Ln._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return A(e.idToken||e.accessToken,"argument-error"),Ln._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return qs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return qs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new qs(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends xo{constructor(){super("facebook.com")}static credential(e){return Ln._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch{return null}}}_n.FACEBOOK_SIGN_IN_METHOD="facebook.com";_n.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends xo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ln._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return In.credential(n,r)}catch{return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com";In.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends xo{constructor(){super("github.com")}static credential(e){return Ln._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD="http://localhost";class lo extends Po{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Yn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new lo(r,s)}static _create(e,n){return new lo(e,n)}buildRequest(){return{requestUri:MD,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD="saml.";class qc extends ar{constructor(e){A(e.startsWith(FD),"argument-error"),super(e)}static credentialFromResult(e){return qc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return qc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=lo.fromJSON(e);return A(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return lo._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends xo{constructor(){super("twitter.com")}static credential(e,n){return Ln._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Sn.credential(n,r)}catch{return null}}}Sn.TWITTER_SIGN_IN_METHOD="twitter.com";Sn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ic(t,e){return or(t,"POST","/v1/accounts:signUp",De(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await $i._fromIdTokenResponse(e,r,i),o=U0(r);return new nn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=U0(r);return new nn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function U0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UD(t){var e;const n=be(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new nn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await ic(n,{returnSecureToken:!0}),i=await nn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc extends wt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Kc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Kc(e,n,r,i)}}function $S(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Kc._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VD(t,e){const n=U(t);await ld(!0,n,e);const{providerUserInfo:r}=await Zx(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=LS(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function gy(t,e,n=!1){const r=await tr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return nn._forOperation(t,"link",r)}async function ld(t,e,n){await lu(e);const r=LS(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";A(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MS(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await tr(t,$S(r,i,e,t),n);A(s.idToken,r,"internal-error");const o=od(s.idToken);A(o,r,"internal-error");const{sub:a}=o;return A(t.uid===a,r,"user-mismatch"),nn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&it(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FS(t,e,n=!1){const r="signIn",i=await $S(t,r,e),s=await nn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function cd(t,e){return FS(be(t),e)}async function US(t,e){const n=U(t);return await ld(!1,n,e.providerId),gy(n,e)}async function VS(t,e){return MS(U(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zD(t,e){return or(t,"POST","/v1/accounts:signInWithCustomToken",De(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jD(t,e){const n=be(t),r=await zD(n,{token:e,returnSecureToken:!0}),i=await nn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?yy._fromServerResponse(e,n):"totpInfo"in n?vy._fromServerResponse(e,n):it(e,"internal-error")}}class yy extends ju{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new yy(n)}}class vy extends ju{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new vy(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(t,e,n){var r;A(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),A(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(A(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(A(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BD(t,e,n){var r;const i=be(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await Br(i,s,"getOobCode",!0);n&&Ks(i,o,n),await Lf(i,o)}else n&&Ks(i,s,n),await Lf(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Br(i,s,"getOobCode",!0);n&&Ks(i,a,n),await Lf(i,a)}else return Promise.reject(o)})}async function qD(t,e,n){await DS(U(t),{oobCode:e,newPassword:n})}async function KD(t,e){await TD(U(t),{oobCode:e})}async function zS(t,e){const n=U(t),r=await DS(n,{oobCode:e}),i=r.requestType;switch(A(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":A(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":A(r.mfaInfo,n,"internal-error");default:A(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=ju._fromServerResponse(be(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function WD(t,e){const{data:n}=await zS(U(t),e);return n.email}async function GD(t,e,n){var r;const i=be(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Br(i,s,"signUpPassword");o=ic(i,l)}else o=ic(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Br(i,s,"signUpPassword");return ic(i,c)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),u=await nn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(u.user),u}function HD(t,e,n){return cd(U(t),ii.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QD(t,e,n){var r;const i=be(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,u){A(u.handleCodeInApp,i,"argument-error"),u&&Ks(i,a,u)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await Br(i,s,"getOobCode",!0);o(a,n),await Mf(i,a)}else o(s,n),await Mf(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const u=await Br(i,s,"getOobCode",!0);o(u,n),await Mf(i,u)}else return Promise.reject(a)})}function YD(t,e){const n=ud.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function XD(t,e,n){const r=U(t),i=ii.credentialWithLink(e,n||uu());return A(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),cd(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JD(t,e){return Me(t,"POST","/v1/accounts:createAuthUri",De(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZD(t,e){const n=dy()?uu():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await JD(U(t),r);return i||[]}async function eO(t,e){const n=U(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Ks(n.auth,i,e);const{email:s}=await kD(n.auth,i);s!==t.email&&await t.reload()}async function tO(t,e,n){const r=U(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Ks(r.auth,s,n);const{email:o}=await CD(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nO(t,e){return Me(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rO(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=U(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await tr(r,nO(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function iO(t,e){return jS(U(t),e,null)}function sO(t,e){return jS(U(t),null,e)}async function jS(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await tr(t,OS(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oO(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=od(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Ws(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new aO(s,i);case"github.com":return new uO(s,i);case"google.com":return new lO(s,i);case"twitter.com":return new cO(s,i,t.screenName||null);case"custom":case"anonymous":return new Ws(s,null);default:return new Ws(s,r,i)}}class Ws{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class BS extends Ws{constructor(e,n,r,i){super(e,n,r),this.username=i}}class aO extends Ws{constructor(e,n){super(e,"facebook.com",n)}}class uO extends BS{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class lO extends Ws{constructor(e,n){super(e,"google.com",n)}}class cO extends BS{constructor(e,n,r){super(e,"twitter.com",n,r)}}function hO(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:oO(n)}class Ni{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new Ni("enroll",e,n)}static _fromMfaPendingCredential(e){return new Ni("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Ni._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Ni._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=be(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>ju._fromServerResponse(r,a));A(i.mfaPendingCredential,r,"internal-error");const o=Ni._fromMfaPendingCredential(i.mfaPendingCredential);return new wy(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const c=await nn._fromIdTokenResponse(r,n.operationType,l);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return A(n.user,r,"internal-error"),nn._forOperation(n.user,n.operationType,l);default:it(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function dO(t,e){var n;const r=U(t),i=e;return A(e.customData.operationType,r,"argument-error"),A((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),wy._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fO(t,e){return Me(t,"POST","/v2/accounts/mfaEnrollment:start",De(t,e))}function pO(t,e){return Me(t,"POST","/v2/accounts/mfaEnrollment:finalize",De(t,e))}function mO(t,e){return Me(t,"POST","/v2/accounts/mfaEnrollment:withdraw",De(t,e))}class _y{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>ju._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new _y(e)}async getSession(){return Ni._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await tr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await tr(this.user,mO(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Ff=new WeakMap;function gO(t){const e=U(t);return Ff.has(e)||Ff.set(e,_y._fromUser(e)),Ff.get(e)}const Wc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wc,"1"),this.storage.removeItem(Wc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yO(){const t=we();return py(t)||Ro(t)}const vO=1e3,wO=10;class KS extends qS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=yO()&&dD(),this.fallbackToPolling=CS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);hD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,wO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}KS.type="LOCAL";const Iy=KS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS extends qS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}WS.type="SESSION";const Wi=WS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _O(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new hd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await _O(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=Bu("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return window}function EO(t){Pe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(){return typeof Pe().WorkerGlobalScope<"u"&&typeof Pe().importScripts=="function"}async function SO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kO(){return Ey()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS="firebaseLocalStorageDb",CO=1,Gc="firebaseLocalStorage",HS="fbase_key";class qu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dd(t,e){return t.transaction([Gc],e?"readwrite":"readonly").objectStore(Gc)}function AO(){const t=indexedDB.deleteDatabase(GS);return new qu(t).toPromise()}function um(){const t=indexedDB.open(GS,CO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Gc,{keyPath:HS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Gc)?e(r):(r.close(),await AO(),e(await um()))})})}async function V0(t,e,n){const r=dd(t,!0).put({[HS]:e,value:n});return new qu(r).toPromise()}async function NO(t,e){const n=dd(t,!1).get(e),r=await new qu(n).toPromise();return r===void 0?null:r.value}function z0(t,e){const n=dd(t,!0).delete(e);return new qu(n).toPromise()}const bO=800,RO=3;class QS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await um(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>RO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ey()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hd._getInstance(kO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await SO(),!this.activeServiceWorker)return;this.sender=new IO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await um();return await V0(e,Wc,"1"),await z0(e,Wc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>V0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>NO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>z0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=dd(i,!1).getAll();return new qu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}QS.type="LOCAL";const du=QS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PO(t,e){return Me(t,"POST","/v2/accounts/mfaSignIn:start",De(t,e))}function xO(t,e){return Me(t,"POST","/v2/accounts/mfaSignIn:finalize",De(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DO=500,OO=6e4,xl=1e12;class $O{constructor(e){this.auth=e,this.counter=xl,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new LO(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||xl;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||xl;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||xl;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class LO{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;A(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=MO(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},OO)},DO))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function MO(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf=RS("rcb"),FO=new Vu(3e4,6e4),UO="https://www.google.com/recaptcha/api.js?";class VO{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Pe().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return A(zO(n),e,"argument-error"),this.shouldResolveImmediately(n)&&$0(Pe().grecaptcha)?Promise.resolve(Pe().grecaptcha):new Promise((r,i)=>{const s=Pe().setTimeout(()=>{i(tt(e,"network-request-failed"))},FO.get());Pe()[Uf]=()=>{Pe().clearTimeout(s),delete Pe()[Uf];const a=Pe().grecaptcha;if(!a||!$0(a)){i(tt(e,"internal-error"));return}const u=a.render;a.render=(l,c)=>{const h=u(l,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${UO}?${No({onload:Uf,render:"explicit",hl:n})}`;my(o).catch(()=>{clearTimeout(s),i(tt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Pe().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function zO(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class jO{async load(e){return new $O(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS="recaptcha",BO={theme:"light",type:"image"};let qO=class{constructor(e,n=Object.assign({},BO),r){this.parameters=n,this.type=YS,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=be(r),this.isInvisible=this.parameters.size==="invisible",A(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;A(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new jO:new VO,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){A(!this.parameters.sitekey,this.auth,"argument-error"),A(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),A(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Pe()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){A(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){A(dy()&&!Ey(),this.auth,"internal-error"),await KO(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await fD(this.auth);A(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return A(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function KO(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Mi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function WO(t,e,n){const r=be(t),i=await fd(r,e,U(n));return new Sy(i,s=>cd(r,s))}async function GO(t,e,n){const r=U(t);await ld(!1,r,"phone");const i=await fd(r.auth,e,U(n));return new Sy(i,s=>US(r,s))}async function HO(t,e,n){const r=U(t),i=await fd(r.auth,e,U(n));return new Sy(i,s=>VS(r,s))}async function fd(t,e,n){var r;const i=await n.verify();try{A(typeof i=="string",t,"argument-error"),A(n.type===YS,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return A(o.type==="enroll",t,"internal-error"),(await fO(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{A(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return A(a,t,"missing-multi-factor-info"),(await PO(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await RD(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function QO(t,e){await gy(U(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gi=class sc{constructor(e){this.providerId=sc.PROVIDER_ID,this.auth=be(e)}verifyPhoneNumber(e,n){return fd(this.auth,e,U(n))}static credential(e,n){return Mi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return sc.credentialFromTaggedObject(n)}static credentialFromError(e){return sc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Mi._fromTokenResponse(n,r):null}};Gi.PROVIDER_ID="phone";Gi.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(t,e){return e?Ut(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty extends Po{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function YO(t){return FS(t.auth,new Ty(t),t.bypassAuthState)}function XO(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),MS(n,new Ty(t),t.bypassAuthState)}async function JO(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),gy(n,new Ty(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YO;case"linkViaPopup":case"linkViaRedirect":return JO;case"reauthViaPopup":case"reauthViaRedirect":return XO;default:it(this.auth,"internal-error")}}resolve(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZO=new Vu(2e3,1e4);async function e2(t,e,n){const r=be(t);bo(t,e,ar);const i=us(r,n);return new Bn(r,"signInViaPopup",e,i).executeNotNull()}async function t2(t,e,n){const r=U(t);bo(r.auth,e,ar);const i=us(r.auth,n);return new Bn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function n2(t,e,n){const r=U(t);bo(r.auth,e,ar);const i=us(r.auth,n);return new Bn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Bn extends XS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Bn.currentPopupAction&&Bn.currentPopupAction.cancel(),Bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){pn(this.filter.length===1,"Popup operations only handle one event");const e=Bu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZO.get())};e()}}Bn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2="pendingRedirect",Da=new Map;class i2 extends XS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Da.get(this.auth._key());if(!e){try{const r=await s2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Da.set(this.auth._key(),e)}return this.bypassAuthState||Da.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function s2(t,e){const n=ZS(e),r=JS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function ky(t,e){return JS(t)._set(ZS(e),"true")}function o2(){Da.clear()}function Cy(t,e){Da.set(t._key(),e)}function JS(t){return Ut(t._redirectPersistence)}function ZS(t){return Li(r2,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a2(t,e,n){return u2(t,e,n)}async function u2(t,e,n){const r=be(t);bo(t,e,ar),await r._initializationPromise;const i=us(r,n);return await ky(i,r),i._openRedirect(r,e,"signInViaRedirect")}function l2(t,e,n){return c2(t,e,n)}async function c2(t,e,n){const r=U(t);bo(r.auth,e,ar),await r.auth._initializationPromise;const i=us(r.auth,n);await ky(i,r.auth);const s=await eT(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function h2(t,e,n){return d2(t,e,n)}async function d2(t,e,n){const r=U(t);bo(r.auth,e,ar),await r.auth._initializationPromise;const i=us(r.auth,n);await ld(!1,r,e.providerId),await ky(i,r.auth);const s=await eT(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function f2(t,e){return await be(t)._initializationPromise,pd(t,e,!1)}async function pd(t,e,n=!1){const r=be(t),i=us(r,e),o=await new i2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function eT(t){const e=Bu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2=10*60*1e3;class tT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!m2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!nT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=p2&&this.cachedEventUids.clear(),this.cachedEventUids.has(j0(e))}saveEventToCache(e){this.cachedEventUids.add(j0(e)),this.lastProcessedEventTime=Date.now()}}function j0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function nT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function m2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rT(t,e={}){return Me(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,y2=/^https?/;async function v2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rT(t);for(const n of e)try{if(w2(n))return}catch{}it(t,"unauthorized-domain")}function w2(t){const e=uu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!y2.test(n))return!1;if(g2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2=new Vu(3e4,6e4);function B0(){const t=Pe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function I2(t){return new Promise((e,n)=>{var r,i,s;function o(){B0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{B0(),n(tt(t,"network-request-failed"))},timeout:_2.get()})}if(!((i=(r=Pe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Pe().gapi)===null||s===void 0)&&s.load)o();else{const a=RS("iframefcb");return Pe()[a]=()=>{gapi.load?o():n(tt(t,"network-request-failed"))},my(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw oc=null,e})}let oc=null;function E2(t){return oc=oc||I2(t),oc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2=new Vu(5e3,15e3),T2="__/auth/iframe",k2="emulator/auth/iframe",C2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},A2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function N2(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fy(e,k2):`https://${t.config.authDomain}/${T2}`,r={apiKey:e.apiKey,appName:t.name,v:ri},i=A2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${No(r).slice(1)}`}async function b2(t){const e=await E2(t),n=Pe().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:N2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:C2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=tt(t,"network-request-failed"),a=Pe().setTimeout(()=>{s(o)},S2.get());function u(){Pe().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},P2=500,x2=600,D2="_blank",O2="http://localhost";class q0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $2(t,e,n,r=P2,i=x2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},R2),{width:r.toString(),height:i.toString(),top:s,left:o}),l=we().toLowerCase();n&&(a=ES(l)?D2:n),IS(l)&&(e=e||O2,u.scrollbars="yes");const c=Object.entries(u).reduce((d,[f,y])=>`${d}${f}=${y},`,"");if(cD(l)&&a!=="_self")return L2(e||"",a),new q0(null);const h=window.open(e||"",a,c);A(h,t,"popup-blocked");try{h.focus()}catch{}return new q0(h)}function L2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2="__/auth/handler",F2="emulator/auth/handler",U2=encodeURIComponent("fac");async function lm(t,e,n,r,i,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ri,eventId:i};if(e instanceof ar){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",IP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof xo){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const u=await t._getAppCheckToken(),l=u?`#${U2}=${encodeURIComponent(u)}`:"";return`${V2(t)}?${No(a).slice(1)}${l}`}function V2({config:t}){return t.emulator?fy(t,F2):`https://${t.authDomain}/${M2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="webStorageSupport";class z2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wi,this._completeRedirectFn=pd,this._overrideRedirectResult=Cy}async _openPopup(e,n,r,i){var s;pn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await lm(e,n,r,uu(),i);return $2(e,o,Bu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await lm(e,n,r,uu(),i);return EO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(pn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await b2(e),r=new tT(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vf,{type:Vf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Vf];o!==void 0&&n(!!o),it(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=v2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return CS()||py()||Ro()}}const j2=z2;class B2{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return kn("unexpected MultiFactorSessionType")}}}class Ay extends B2{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Ay(e)}_finalizeEnroll(e,n,r){return pO(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return xO(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class iT{constructor(){}static assertion(e){return Ay._fromCredential(e)}}iT.FACTOR_ID="phone";var K0="@firebase/auth",W0="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function W2(t){jr(new $n("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),A(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:AS(t)},l=new wD(r,i,s,u);return _D(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),jr(new $n("auth-internal",e=>{const n=be(e.getProvider("auth").getImmediate());return(r=>new q2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(K0,W0,K2(t)),Pn(K0,W0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G2=5*60;hP("authIdTokenMaxAge");W2("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2=2e3;async function Q2(t,e,n){var r;const{BuildInfo:i}=Hi();pn(e.sessionId,"AuthEvent did not contain a session ID");const s=await e$(e.sessionId),o={};return Ro()?o.ibi=i.packageName:zu()?o.apn=i.packageName:it(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,lm(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function Y2(t){const{BuildInfo:e}=Hi(),n={};Ro()?n.iosBundleId=e.packageName:zu()?n.androidPackageName=e.packageName:it(t,"operation-not-supported-in-this-environment"),await rT(t,n)}function X2(t){const{cordova:e}=Hi();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,lD()?"_blank":"_system","location=yes"),n(i)})})}async function J2(t,e,n){const{cordova:r}=Hi();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(tt(t,"redirect-cancelled-by-user"))},H2))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(u),document.addEventListener("resume",l,!1),zu()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function Z2(t){var e,n,r,i,s,o,a,u,l,c;const h=Hi();A(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),A(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),A(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),A(typeof((u=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),A(typeof((c=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function e$(t){const e=t$(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function t$(t){if(pn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n$=20;class r$ extends tT{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function i$(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:a$(),postBody:null,tenantId:t.tenantId,error:tt(t,"no-auth-event")}}function s$(t,e){return cm()._set(hm(t),e)}async function G0(t){const e=await cm()._get(hm(t));return e&&await cm()._remove(hm(t)),e}function o$(t,e){var n,r;const i=l$(e);if(i.includes("/__/auth/callback")){const s=ac(i),o=s.firebaseError?u$(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=a?tt(a):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function a$(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<n$;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function cm(){return Ut(Iy)}function hm(t){return Li("authEvent",t.config.apiKey,t.name)}function u$(t){try{return JSON.parse(t)}catch{return null}}function l$(t){const e=ac(t),n=e.link?decodeURIComponent(e.link):void 0,r=ac(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return ac(i).link||i||r||n||t}function ac(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return $s(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c$=500;class h${constructor(){this._redirectPersistence=Wi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=pd,this._overrideRedirectResult=Cy}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new r$(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){it(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){Z2(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),o2(),await this._originValidation(e);const o=i$(e,r,i);await s$(e,o);const a=await Q2(e,o,n),u=await X2(a);return J2(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Y2(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Hi(),o=setTimeout(async()=>{await G0(e),n.onEvent(H0())},c$),a=async c=>{clearTimeout(o);const h=await G0(e);let d=null;h&&(c!=null&&c.url)&&(d=o$(h,c.url)),n.onEvent(d||H0())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,l=`${s.packageName.toLowerCase()}://`;Hi().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(l)&&a({url:c}),typeof u=="function")try{u(c)}catch(h){console.error(h)}}}}const d$=h$;function H0(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:tt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f$(t,e){be(t)._logFramework(e)}var p$="@firebase/auth-compat",m$="0.4.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g$=1e3;function Oa(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function y$(){return Oa()==="http:"||Oa()==="https:"}function sT(t=we()){return!!((Oa()==="file:"||Oa()==="ionic:"||Oa()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function v$(){return oy()||sy()}function w$(){return eS()&&(document==null?void 0:document.documentMode)===11}function _$(t=we()){return/Edge\/\d+/.test(t)}function I$(t=we()){return w$()||_$(t)}function oT(){try{const t=self.localStorage,e=Bu();if(t)return t.setItem(e,"1"),t.removeItem(e),I$()?su():!0}catch{return Ny()&&su()}return!1}function Ny(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function zf(){return(y$()||ZE()||sT())&&!v$()&&oT()&&!Ny()}function aT(){return sT()&&typeof document<"u"}async function E$(){return aT()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},g$);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function S$(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt={LOCAL:"local",NONE:"none",SESSION:"session"},ta=A,uT="persistence";function T$(t,e){if(ta(Object.values(Mt).includes(e),t,"invalid-persistence-type"),oy()){ta(e!==Mt.SESSION,t,"unsupported-persistence-type");return}if(sy()){ta(e===Mt.NONE,t,"unsupported-persistence-type");return}if(Ny()){ta(e===Mt.NONE||e===Mt.LOCAL&&su(),t,"unsupported-persistence-type");return}ta(e===Mt.NONE||oT(),t,"unsupported-persistence-type")}async function dm(t){await t._initializationPromise;const e=lT(),n=Li(uT,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function k$(t,e){const n=lT();if(!n)return[];const r=Li(uT,t,e);switch(n.getItem(r)){case Mt.NONE:return[uo];case Mt.LOCAL:return[du,Wi];case Mt.SESSION:return[Wi];default:return[]}}function lT(){var t;try{return((t=S$())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C$=A;class kr{constructor(){this.browserResolver=Ut(j2),this.cordovaResolver=Ut(d$),this.underlyingResolver=null,this._redirectPersistence=Wi,this._completeRedirectFn=pd,this._overrideRedirectResult=Cy}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return aT()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return C$(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await E$();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(t){return t.unwrap()}function A$(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N$(t){return hT(t)}function b$(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new R$(t,dO(t,e))}else if(r){const i=hT(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function hT(t){const{_tokenResponse:e}=t instanceof wt?t.customData:t;if(!e)return null;if(!(t instanceof wt)&&"temporaryProof"in e&&"phoneNumber"in e)return Gi.credentialFromResult(t);const n=e.providerId;if(!n||n===ea.PASSWORD)return null;let r;switch(n){case ea.GOOGLE:r=In;break;case ea.FACEBOOK:r=_n;break;case ea.GITHUB:r=En;break;case ea.TWITTER:r=Sn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?lo._create(n,a):Ln._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new qs(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof wt?r.credentialFromError(t):r.credentialFromResult(t)}function St(t,e){return e.catch(n=>{throw n instanceof wt&&b$(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:N$(n),additionalUserInfo:hO(n),user:qn.getOrCreate(i)}})}async function fm(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>St(t,n.confirm(r))}}class R${constructor(e,n){this.resolver=n,this.auth=A$(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return St(cT(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this._delegate=e,this.multiFactor=gO(e)}static getOrCreate(e){return qn.USER_MAP.has(e)||qn.USER_MAP.set(e,new qn(e)),qn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return St(this.auth,US(this._delegate,e))}async linkWithPhoneNumber(e,n){return fm(this.auth,GO(this._delegate,e,n))}async linkWithPopup(e){return St(this.auth,n2(this._delegate,e,kr))}async linkWithRedirect(e){return await dm(be(this.auth)),h2(this._delegate,e,kr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return St(this.auth,VS(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return fm(this.auth,HO(this._delegate,e,n))}reauthenticateWithPopup(e){return St(this.auth,t2(this._delegate,e,kr))}async reauthenticateWithRedirect(e){return await dm(be(this.auth)),l2(this._delegate,e,kr)}sendEmailVerification(e){return eO(this._delegate,e)}async unlink(e){return await VD(this._delegate,e),this}updateEmail(e){return iO(this._delegate,e)}updatePassword(e){return sO(this._delegate,e)}updatePhoneNumber(e){return QO(this._delegate,e)}updateProfile(e){return rO(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return tO(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}qn.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=A;class pm{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;na(r,"invalid-api-key",{appName:e.name}),na(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?kr:void 0;this._delegate=n.initialize({options:{persistence:P$(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(qx),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?qn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){ID(this._delegate,e,n)}applyActionCode(e){return KD(this._delegate,e)}checkActionCode(e){return zS(this._delegate,e)}confirmPasswordReset(e,n){return qD(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return St(this._delegate,GD(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return ZD(this._delegate,e)}isSignInWithEmailLink(e){return YD(this._delegate,e)}async getRedirectResult(){na(zf(),this._delegate,"operation-not-supported-in-this-environment");const e=await f2(this._delegate,kr);return e?St(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){f$(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=Q0(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=Q0(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return QD(this._delegate,e,n)}sendPasswordResetEmail(e,n){return BD(this._delegate,e,n||void 0)}async setPersistence(e){T$(this._delegate,e);let n;switch(e){case Mt.SESSION:n=Wi;break;case Mt.LOCAL:n=await Ut(du)._isAvailable()?du:Iy;break;case Mt.NONE:n=uo;break;default:return it("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return St(this._delegate,UD(this._delegate))}signInWithCredential(e){return St(this._delegate,cd(this._delegate,e))}signInWithCustomToken(e){return St(this._delegate,jD(this._delegate,e))}signInWithEmailAndPassword(e,n){return St(this._delegate,HD(this._delegate,e,n))}signInWithEmailLink(e,n){return St(this._delegate,XD(this._delegate,e,n))}signInWithPhoneNumber(e,n){return fm(this._delegate,WO(this._delegate,e,n))}async signInWithPopup(e){return na(zf(),this._delegate,"operation-not-supported-in-this-environment"),St(this._delegate,e2(this._delegate,e,kr))}async signInWithRedirect(e){return na(zf(),this._delegate,"operation-not-supported-in-this-environment"),await dm(this._delegate),a2(this._delegate,e,kr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return WD(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}pm.Persistence=Mt;function Q0(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&qn.getOrCreate(o)),error:e,complete:n}}function P$(t,e){const n=k$(t,e);if(typeof self<"u"&&!n.includes(du)&&n.push(du),typeof window<"u")for(const r of[Iy,Wi])n.includes(r)||n.push(r);return n.includes(uo)||n.push(uo),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(){this.providerId="phone",this._delegate=new Gi(cT(Uu.auth()))}static credential(e,n){return Gi.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}by.PHONE_SIGN_IN_METHOD=Gi.PHONE_SIGN_IN_METHOD;by.PROVIDER_ID=Gi.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x$=A;class D${constructor(e,n,r=Uu.app()){var i;x$((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new qO(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O$="auth-compat";function $$(t){t.INTERNAL.registerComponent(new $n(O$,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new pm(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:gs.EMAIL_SIGNIN,PASSWORD_RESET:gs.PASSWORD_RESET,RECOVER_EMAIL:gs.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:gs.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:gs.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:gs.VERIFY_EMAIL}},EmailAuthProvider:ii,FacebookAuthProvider:_n,GithubAuthProvider:En,GoogleAuthProvider:In,OAuthProvider:qs,SAMLAuthProvider:qc,PhoneAuthProvider:by,PhoneMultiFactorGenerator:iT,RecaptchaVerifier:D$,TwitterAuthProvider:Sn,Auth:pm,AuthCredential:Po,Error:wt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(p$,m$)}$$(Uu);var L$=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,Ry=Ry||{},z=L$||self;function Hc(){}function md(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ku(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function M$(t){return Object.prototype.hasOwnProperty.call(t,jf)&&t[jf]||(t[jf]=++F$)}var jf="closure_uid_"+(1e9*Math.random()>>>0),F$=0;function U$(t,e,n){return t.call.apply(t.bind,arguments)}function V$(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ht(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ht=U$:ht=V$,ht.apply(null,arguments)}function Dl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ge(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function si(){this.s=this.s,this.o=this.o}var z$=0;si.prototype.s=!1;si.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),z$!=0)&&M$(this)};si.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const dT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Py(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Y0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(md(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function dt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var j$=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",Hc,e),z.removeEventListener("test",Hc,e)}catch{}return t}();function Qc(t){return/^[\s\xa0]*$/.test(t)}var X0=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Bf(t,e){return t<e?-1:t>e?1:0}function gd(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function Tn(t){return gd().indexOf(t)!=-1}function xy(t){return xy[" "](t),t}xy[" "]=Hc;function fT(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var B$=Tn("Opera"),co=Tn("Trident")||Tn("MSIE"),pT=Tn("Edge"),mm=pT||co,mT=Tn("Gecko")&&!(gd().toLowerCase().indexOf("webkit")!=-1&&!Tn("Edge"))&&!(Tn("Trident")||Tn("MSIE"))&&!Tn("Edge"),q$=gd().toLowerCase().indexOf("webkit")!=-1&&!Tn("Edge");function gT(){var t=z.document;return t?t.documentMode:void 0}var Yc;e:{var qf="",Kf=function(){var t=gd();if(mT)return/rv:([^\);]+)(\)|;)/.exec(t);if(pT)return/Edge\/([\d\.]+)/.exec(t);if(co)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(q$)return/WebKit\/(\S+)/.exec(t);if(B$)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Kf&&(qf=Kf?Kf[1]:""),co){var Wf=gT();if(Wf!=null&&Wf>parseFloat(qf)){Yc=String(Wf);break e}}Yc=qf}var K$={};function W$(){return fT(K$,9,function(){let t=0;const e=X0(String(Yc)).split("."),n=X0("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Bf(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Bf(i[2].length==0,s[2].length==0)||Bf(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var gm;if(z.document&&co){var J0=gT();gm=J0||parseInt(Yc,10)||void 0}else gm=void 0;var G$=gm;function fu(t,e){if(dt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(mT){e:{try{xy(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:H$[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&fu.$.h.call(this)}}Ge(fu,dt);var H$={2:"touch",3:"pen",4:"mouse"};fu.prototype.h=function(){fu.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Wu="closure_listenable_"+(1e6*Math.random()|0),Q$=0;function Y$(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++Q$,this.fa=this.ia=!1}function yd(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Dy(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function yT(t){const e={};for(const n in t)e[n]=t[n];return e}const Z0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vT(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Z0.length;s++)n=Z0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function vd(t){this.src=t,this.g={},this.h=0}vd.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=vm(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Y$(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function ym(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=dT(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(yd(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function vm(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Oy="closure_lm_"+(1e6*Math.random()|0),Gf={};function wT(t,e,n,r,i){if(r&&r.once)return IT(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)wT(t,e[s],n,r,i);return null}return n=My(n),t&&t[Wu]?t.O(e,n,Ku(r)?!!r.capture:!!r,i):_T(t,e,n,!1,r,i)}function _T(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ku(i)?!!i.capture:!!i,a=Ly(t);if(a||(t[Oy]=a=new vd(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=X$(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)j$||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(ST(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function X$(){function t(n){return e.call(t.src,t.listener,n)}const e=J$;return t}function IT(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)IT(t,e[s],n,r,i);return null}return n=My(n),t&&t[Wu]?t.P(e,n,Ku(r)?!!r.capture:!!r,i):_T(t,e,n,!0,r,i)}function ET(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)ET(t,e[s],n,r,i);else r=Ku(r)?!!r.capture:!!r,n=My(n),t&&t[Wu]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=vm(s,n,r,i),-1<n&&(yd(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ly(t))&&(e=t.g[e.toString()],t=-1,e&&(t=vm(e,n,r,i)),(n=-1<t?e[t]:null)&&$y(n))}function $y(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Wu])ym(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ST(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ly(e))?(ym(n,t),n.h==0&&(n.src=null,e[Oy]=null)):yd(t)}}}function ST(t){return t in Gf?Gf[t]:Gf[t]="on"+t}function J$(t,e){if(t.fa)t=!0;else{e=new fu(e,this);var n=t.listener,r=t.la||t.src;t.ia&&$y(t),t=n.call(r,e)}return t}function Ly(t){return t=t[Oy],t instanceof vd?t:null}var Hf="__closure_events_fn_"+(1e9*Math.random()>>>0);function My(t){return typeof t=="function"?t:(t[Hf]||(t[Hf]=function(e){return t.handleEvent(e)}),t[Hf])}function Ke(){si.call(this),this.i=new vd(this),this.S=this,this.J=null}Ge(Ke,si);Ke.prototype[Wu]=!0;Ke.prototype.removeEventListener=function(t,e,n,r){ET(this,t,e,n,r)};function nt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new dt(e,t);else if(e instanceof dt)e.target=e.target||t;else{var i=e;e=new dt(r,t),vT(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ol(o,r,!0,e)&&i}if(o=e.g=t,i=Ol(o,r,!0,e)&&i,i=Ol(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ol(o,r,!1,e)&&i}Ke.prototype.N=function(){if(Ke.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)yd(n[r]);delete t.g[e],t.h--}}this.J=null};Ke.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ke.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ol(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&ym(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var Fy=z.JSON.stringify;function Z$(){var t=CT;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class eL{constructor(){this.h=this.g=null}add(e,n){const r=TT.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var TT=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new tL,t=>t.reset());class tL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function nL(t){z.setTimeout(()=>{throw t},0)}function kT(t,e){wm||rL(),_m||(wm(),_m=!0),CT.add(t,e)}var wm;function rL(){var t=z.Promise.resolve(void 0);wm=function(){t.then(iL)}}var _m=!1,CT=new eL;function iL(){for(var t;t=Z$();){try{t.h.call(t.g)}catch(n){nL(n)}var e=TT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}_m=!1}function wd(t,e){Ke.call(this),this.h=t||1,this.g=e||z,this.j=ht(this.qb,this),this.l=Date.now()}Ge(wd,Ke);x=wd.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),nt(this,"tick"),this.ga&&(Uy(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Uy(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}x.N=function(){wd.$.N.call(this),Uy(this),delete this.g};function Vy(t,e,n){if(typeof t=="function")n&&(t=ht(t,n));else if(t&&typeof t.handleEvent=="function")t=ht(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function AT(t){t.g=Vy(()=>{t.g=null,t.i&&(t.i=!1,AT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class sL extends si{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:AT(this)}N(){super.N(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pu(t){si.call(this),this.h=t,this.g={}}Ge(pu,si);var e_=[];function NT(t,e,n,r){Array.isArray(n)||(n&&(e_[0]=n.toString()),n=e_);for(var i=0;i<n.length;i++){var s=wT(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function bT(t){Dy(t.g,function(e,n){this.g.hasOwnProperty(n)&&$y(e)},t),t.g={}}pu.prototype.N=function(){pu.$.N.call(this),bT(this)};pu.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function _d(){this.g=!0}_d.prototype.Ea=function(){this.g=!1};function oL(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function aL(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ls(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+lL(t,n)+(r?" "+r:"")})}function uL(t,e){t.info(function(){return"TIMEOUT: "+e})}_d.prototype.info=function(){};function lL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Fy(n)}catch{return e}}var ls={},t_=null;function Id(){return t_=t_||new Ke}ls.Ta="serverreachability";function RT(t){dt.call(this,ls.Ta,t)}Ge(RT,dt);function mu(t){const e=Id();nt(e,new RT(e))}ls.STAT_EVENT="statevent";function PT(t,e){dt.call(this,ls.STAT_EVENT,t),this.stat=e}Ge(PT,dt);function yt(t){const e=Id();nt(e,new PT(e,t))}ls.Ua="timingevent";function xT(t,e){dt.call(this,ls.Ua,t),this.size=e}Ge(xT,dt);function Gu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var Ed={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},DT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function zy(){}zy.prototype.h=null;function n_(t){return t.h||(t.h=t.i())}function OT(){}var Hu={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function jy(){dt.call(this,"d")}Ge(jy,dt);function By(){dt.call(this,"c")}Ge(By,dt);var Im;function Sd(){}Ge(Sd,zy);Sd.prototype.g=function(){return new XMLHttpRequest};Sd.prototype.i=function(){return{}};Im=new Sd;function Qu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new pu(this),this.P=cL,t=mm?125:void 0,this.V=new wd(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new $T}function $T(){this.i=null,this.g="",this.h=!1}var cL=45e3,Em={},Xc={};x=Qu.prototype;x.setTimeout=function(t){this.P=t};function Sm(t,e,n){t.L=1,t.v=kd(nr(e)),t.s=n,t.S=!0,LT(t,null)}function LT(t,e){t.G=Date.now(),Yu(t),t.A=nr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),qT(n.i,"t",r),t.C=0,n=t.l.I,t.h=new $T,t.g=hk(t.l,n?e:null,!t.s),0<t.O&&(t.M=new sL(ht(t.Pa,t,t.g),t.O)),NT(t.U,t.g,"readystatechange",t.nb),e=t.I?yT(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),mu(),oL(t.j,t.u,t.A,t.m,t.W,t.s)}x.nb=function(t){t=t.target;const e=this.M;e&&Kn(t)==3?e.l():this.Pa(t)};x.Pa=function(t){try{if(t==this.g)e:{const c=Kn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||mm||this.g&&(this.h.h||this.g.ja()||o_(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?mu(3):mu(2)),Td(this);var n=this.g.da();this.aa=n;t:if(MT(this)){var r=o_(this.g);t="";var i=r.length,s=Kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bi(this),$a(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,aL(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Qc(a)){var l=a;break t}}l=null}if(n=l)Ls(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Tm(this,n);else{this.i=!1,this.o=3,yt(12),bi(this),$a(this);break e}}this.S?(FT(this,c,o),mm&&this.i&&c==3&&(NT(this.U,this.V,"tick",this.mb),this.V.start())):(Ls(this.j,this.m,o,null),Tm(this,o)),c==4&&bi(this),this.i&&!this.J&&(c==4?ak(this.l,this):(this.i=!1,Yu(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,yt(12)):(this.o=0,yt(13)),bi(this),$a(this)}}}catch{}finally{}};function MT(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function FT(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=hL(t,n),i==Xc){e==4&&(t.o=4,yt(14),r=!1),Ls(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Em){t.o=4,yt(15),Ls(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ls(t.j,t.m,i,null),Tm(t,i);MT(t)&&i!=Xc&&i!=Em&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,yt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Yy(e),e.L=!0,yt(11))):(Ls(t.j,t.m,n,"[Invalid Chunked Response]"),bi(t),$a(t))}x.mb=function(){if(this.g){var t=Kn(this.g),e=this.g.ja();this.C<e.length&&(Td(this),FT(this,t,e),this.i&&t!=4&&Yu(this))}};function hL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Xc:(n=Number(e.substring(n,r)),isNaN(n)?Em:(r+=1,r+n>e.length?Xc:(e=e.substr(r,n),t.C=r+n,e)))}x.cancel=function(){this.J=!0,bi(this)};function Yu(t){t.Y=Date.now()+t.P,UT(t,t.P)}function UT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Gu(ht(t.lb,t),e)}function Td(t){t.B&&(z.clearTimeout(t.B),t.B=null)}x.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(uL(this.j,this.A),this.L!=2&&(mu(),yt(17)),bi(this),this.o=2,$a(this)):UT(this,this.Y-t)};function $a(t){t.l.H==0||t.J||ak(t.l,t)}function bi(t){Td(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,Uy(t.V),bT(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function Tm(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||km(n.h,t))){if(!t.K&&km(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)eh(n),Nd(n);else break e;Qy(n),yt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=Gu(ht(n.ib,n),6e3));if(1>=GT(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Ri(n,11)}else if((t.K||n.g==t)&&eh(n),!Qc(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.J=l[1],n.oa=l[2];const c=l[3];c!=null&&(n.qa=c,n.j.info("VER="+n.qa));const h=l[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(qy(s,s.h),s.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,fe(r.G,r.F,v))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=ck(r,r.I?r.oa:null,r.Y),o.K){HT(r.h,o);var a=o,u=r.K;u&&a.setTimeout(u),a.B&&(Td(a),Yu(a)),r.g=o}else sk(r);0<n.i.length&&bd(n)}else l[0]!="stop"&&l[0]!="close"||Ri(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ri(n,7):Hy(n):l[0]!="noop"&&n.l&&n.l.Aa(l),n.A=0)}}mu(4)}catch{}}function dL(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(md(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function fL(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(md(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function VT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(md(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=fL(t),r=dL(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var zT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Fi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Fi){this.h=e!==void 0?e:t.h,Jc(this,t.j),this.s=t.s,this.g=t.g,Zc(this,t.m),this.l=t.l,e=t.i;var n=new gu;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),r_(this,n),this.o=t.o}else t&&(n=String(t).match(zT))?(this.h=!!e,Jc(this,n[1]||"",!0),this.s=ya(n[2]||""),this.g=ya(n[3]||"",!0),Zc(this,n[4]),this.l=ya(n[5]||"",!0),r_(this,n[6]||"",!0),this.o=ya(n[7]||"")):(this.h=!!e,this.i=new gu(null,this.h))}Fi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(va(e,i_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(va(e,i_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(va(n,n.charAt(0)=="/"?yL:gL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",va(n,wL)),t.join("")};function nr(t){return new Fi(t)}function Jc(t,e,n){t.j=n?ya(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Zc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function r_(t,e,n){e instanceof gu?(t.i=e,_L(t.i,t.h)):(n||(e=va(e,vL)),t.i=new gu(e,t.h))}function fe(t,e,n){t.i.set(e,n)}function kd(t){return fe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ya(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function va(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,mL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function mL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var i_=/[#\/\?@]/g,gL=/[#\?:]/g,yL=/[#\?]/g,vL=/[#\?@]/g,wL=/#/g;function gu(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function oi(t){t.g||(t.g=new Map,t.h=0,t.i&&pL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=gu.prototype;x.add=function(t,e){oi(this),this.i=null,t=Do(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function jT(t,e){oi(t),e=Do(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function BT(t,e){return oi(t),e=Do(t,e),t.g.has(e)}x.forEach=function(t,e){oi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};x.sa=function(){oi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};x.Z=function(t){oi(this);let e=[];if(typeof t=="string")BT(this,t)&&(e=e.concat(this.g.get(Do(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return oi(this),this.i=null,t=Do(this,t),BT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function qT(t,e,n){jT(t,e),0<n.length&&(t.i=null,t.g.set(Do(t,e),Py(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Do(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function _L(t,e){e&&!t.j&&(oi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(jT(this,r),qT(this,i,n))},t)),t.j=e}var IL=class{constructor(t,e){this.h=t,this.g=e}};function KT(t){this.l=t||EL,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ka&&z.g.Ka()&&z.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var EL=10;function WT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function GT(t){return t.h?1:t.g?t.g.size:0}function km(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function qy(t,e){t.g?t.g.add(e):t.h=e}function HT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}KT.prototype.cancel=function(){if(this.i=QT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function QT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Py(t.i)}function Ky(){}Ky.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};Ky.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function SL(){this.g=new Ky}function TL(t,e,n){const r=n||"";try{VT(t,function(i,s){let o=i;Ku(i)&&(o=Fy(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function kL(t,e){const n=new _d;if(z.Image){const r=new Image;r.onload=Dl($l,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Dl($l,n,r,"TestLoadImage: error",!1,e),r.onabort=Dl($l,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Dl($l,n,r,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function $l(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Xu(t){this.l=t.fc||null,this.j=t.ob||!1}Ge(Xu,zy);Xu.prototype.g=function(){return new Cd(this.l,this.j)};Xu.prototype.i=function(t){return function(){return t}}({});function Cd(t,e){Ke.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Wy,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ge(Cd,Ke);var Wy=0;x=Cd.prototype;x.open=function(t,e){if(this.readyState!=Wy)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,yu(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ju(this)),this.readyState=Wy};x.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,yu(this)),this.g&&(this.readyState=3,yu(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;YT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function YT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}x.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ju(this):yu(this),this.readyState==3&&YT(this)}};x.Za=function(t){this.g&&(this.response=this.responseText=t,Ju(this))};x.Ya=function(t){this.g&&(this.response=t,Ju(this))};x.ka=function(){this.g&&Ju(this)};function Ju(t){t.readyState=4,t.l=null,t.j=null,t.A=null,yu(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function yu(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Cd.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var CL=z.JSON.parse;function Ee(t){Ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=XT,this.L=this.M=!1}Ge(Ee,Ke);var XT="",AL=/^https?$/i,NL=["POST","PUT"];x=Ee.prototype;x.Oa=function(t){this.M=t};x.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Im.g(),this.C=this.u?n_(this.u):n_(Im),this.g.onreadystatechange=ht(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){s_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=z.FormData&&t instanceof z.FormData,!(0<=dT(NL,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ek(this),0<this.B&&((this.L=bL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ht(this.ua,this)):this.A=Vy(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){s_(this,s)}};function bL(t){return co&&W$()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.ua=function(){typeof Ry<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nt(this,"timeout"),this.abort(8))};function s_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,JT(t),Ad(t)}function JT(t){t.F||(t.F=!0,nt(t,"complete"),nt(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,nt(this,"complete"),nt(this,"abort"),Ad(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ad(this,!0)),Ee.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?ZT(this):this.kb())};x.kb=function(){ZT(this)};function ZT(t){if(t.h&&typeof Ry<"u"&&(!t.C[1]||Kn(t)!=4||t.da()!=2)){if(t.v&&Kn(t)==4)Vy(t.La,0,t);else if(nt(t,"readystatechange"),Kn(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.I).match(zT)[1]||null;if(!i&&z.self&&z.self.location){var s=z.self.location.protocol;i=s.substr(0,s.length-1)}r=!AL.test(i?i.toLowerCase():"")}n=r}if(n)nt(t,"complete"),nt(t,"success");else{t.m=6;try{var o=2<Kn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",JT(t)}}finally{Ad(t)}}}}function Ad(t,e){if(t.g){ek(t);const n=t.g,r=t.C[0]?Hc:null;t.g=null,t.C=null,e||nt(t,"ready");try{n.onreadystatechange=r}catch{}}}function ek(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function Kn(t){return t.g?t.g.readyState:0}x.da=function(){try{return 2<Kn(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),CL(e)}};function o_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case XT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function tk(t){let e="";return Dy(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Gy(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=tk(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):fe(t,e,n))}function ra(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function nk(t){this.Ga=0,this.i=[],this.j=new _d,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ra("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ra("baseRetryDelayMs",5e3,t),this.hb=ra("retryDelaySeedMs",1e4,t),this.eb=ra("forwardChannelMaxRetries",2,t),this.xa=ra("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new KT(t&&t.concurrentRequestLimit),this.Ja=new SL,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}x=nk.prototype;x.qa=8;x.H=1;function Hy(t){if(rk(t),t.H==3){var e=t.W++,n=nr(t.G);fe(n,"SID",t.J),fe(n,"RID",e),fe(n,"TYPE","terminate"),Zu(t,n),e=new Qu(t,t.j,e,void 0),e.L=2,e.v=kd(nr(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=hk(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Yu(e)}lk(t)}function Nd(t){t.g&&(Yy(t),t.g.cancel(),t.g=null)}function rk(t){Nd(t),t.u&&(z.clearTimeout(t.u),t.u=null),eh(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function bd(t){WT(t.h)||t.m||(t.m=!0,kT(t.Na,t),t.C=0)}function RL(t,e){return GT(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Gu(ht(t.Na,t,e),uk(t,t.C)),t.C++,!0)}x.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Qu(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=yT(s),vT(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ik(this,i,e),n=nr(this.G),fe(n,"RID",t),fe(n,"CVER",22),this.F&&fe(n,"X-HTTP-Session-Id",this.F),Zu(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(tk(s)))+"&"+e:this.o&&Gy(n,this.o,s)),qy(this.h,i),this.bb&&fe(n,"TYPE","init"),this.P?(fe(n,"$req",e),fe(n,"SID","null"),i.ba=!0,Sm(i,n,null)):Sm(i,n,e),this.H=2}}else this.H==3&&(t?a_(this,t):this.i.length==0||WT(this.h)||a_(this))};function a_(t,e){var n;e?n=e.m:n=t.W++;const r=nr(t.G);fe(r,"SID",t.J),fe(r,"RID",n),fe(r,"AID",t.V),Zu(t,r),t.o&&t.s&&Gy(r,t.o,t.s),n=new Qu(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=ik(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),qy(t.h,n),Sm(n,r,e)}function Zu(t,e){t.ma&&Dy(t.ma,function(n,r){fe(e,r,n)}),t.l&&VT({},function(n,r){fe(e,r,n)})}function ik(t,e,n){n=Math.min(t.i.length,n);var r=t.l?ht(t.l.Va,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=s,0>l)s=Math.max(0,i[u].h-100),a=!1;else try{TL(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function sk(t){t.g||t.u||(t.ba=1,kT(t.Ma,t),t.A=0)}function Qy(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Gu(ht(t.Ma,t),uk(t,t.A)),t.A++,!0)}x.Ma=function(){if(this.u=null,ok(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Gu(ht(this.jb,this),t)}};x.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,yt(10),Nd(this),ok(this))};function Yy(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function ok(t){t.g=new Qu(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=nr(t.wa);fe(e,"RID","rpc"),fe(e,"SID",t.J),fe(e,"CI",t.M?"0":"1"),fe(e,"AID",t.V),fe(e,"TYPE","xmlhttp"),Zu(t,e),t.o&&t.s&&Gy(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=kd(nr(e)),n.s=null,n.S=!0,LT(n,t)}x.ib=function(){this.v!=null&&(this.v=null,Nd(this),Qy(this),yt(19))};function eh(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function ak(t,e){var n=null;if(t.g==e){eh(t),Yy(t),t.g=null;var r=2}else if(km(t.h,e))n=e.F,HT(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Id(),nt(r,new xT(r,n)),bd(t)}else sk(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(r==1&&RL(t,e)||r==2&&Qy(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ri(t,5);break;case 4:Ri(t,10);break;case 3:Ri(t,6);break;default:Ri(t,2)}}}function uk(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Ri(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=ht(t.pb,t);n||(n=new Fi("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||Jc(n,"https"),kd(n)),kL(n.toString(),r)}else yt(2);t.H=0,t.l&&t.l.za(e),lk(t),rk(t)}x.pb=function(t){t?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function lk(t){if(t.H=0,t.pa=[],t.l){const e=QT(t.h);(e.length!=0||t.i.length!=0)&&(Y0(t.pa,e),Y0(t.pa,t.i),t.h.i.length=0,Py(t.i),t.i.length=0),t.l.ya()}}function ck(t,e,n){var r=n instanceof Fi?nr(n):new Fi(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Zc(r,r.m);else{var i=z.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Fi(null,void 0);r&&Jc(s,r),e&&(s.g=e),i&&Zc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&fe(r,n,e),fe(r,"VER",t.qa),Zu(t,r),r}function hk(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ee(new Xu({ob:!0})):new Ee(t.va),e.Oa(t.I),e}function dk(){}x=dk.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.Va=function(){};function th(){if(co&&!(10<=Number(G$)))throw Error("Environmental error: no available transport.")}th.prototype.g=function(t,e){return new jt(t,e)};function jt(t,e){Ke.call(this),this.g=new nk(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Qc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Qc(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Oo(this)}Ge(jt,Ke);jt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;yt(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=ck(t,null,t.Y),bd(t)};jt.prototype.close=function(){Hy(this.g)};jt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Fy(t),t=n);e.i.push(new IL(e.fb++,t)),e.H==3&&bd(e)};jt.prototype.N=function(){this.g.l=null,delete this.j,Hy(this.g),delete this.g,jt.$.N.call(this)};function fk(t){jy.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ge(fk,jy);function pk(){By.call(this),this.status=1}Ge(pk,By);function Oo(t){this.g=t}Ge(Oo,dk);Oo.prototype.Ba=function(){nt(this.g,"a")};Oo.prototype.Aa=function(t){nt(this.g,new fk(t))};Oo.prototype.za=function(t){nt(this.g,new pk)};Oo.prototype.ya=function(){nt(this.g,"b")};function PL(){this.blockSize=-1}function mn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ge(mn,PL);mn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Qf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}mn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Qf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Qf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Qf(this,r),i=0;break}}this.h=i,this.i+=e};mn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ne(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var xL={};function Xy(t){return-128<=t&&128>t?fT(xL,t,function(e){return new ne([e|0],0>e?-1:0)}):new ne([t|0],0>t?-1:0)}function Cn(t){if(isNaN(t)||!isFinite(t))return Gs;if(0>t)return Ze(Cn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Cm;return new ne(e,0)}function mk(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ze(mk(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Cn(Math.pow(e,8)),r=Gs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Cn(Math.pow(e,s)),r=r.R(s).add(Cn(o))):(r=r.R(n),r=r.add(Cn(o)))}return r}var Cm=4294967296,Gs=Xy(0),Am=Xy(1),u_=Xy(16777216);x=ne.prototype;x.ea=function(){if(Yt(this))return-Ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Cm+r)*e,e*=Cm}return t};x.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Wn(this))return"0";if(Yt(this))return"-"+Ze(this).toString(t);for(var e=Cn(Math.pow(t,6)),n=this,r="";;){var i=rh(n,e).g;n=nh(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Wn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};x.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Wn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Yt(t){return t.h==-1}x.X=function(t){return t=nh(this,t),Yt(t)?-1:Wn(t)?0:1};function Ze(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ne(n,~t.h).add(Am)}x.abs=function(){return Yt(this)?Ze(this):this};x.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ne(n,n[n.length-1]&-2147483648?-1:0)};function nh(t,e){return t.add(Ze(e))}x.R=function(t){if(Wn(this)||Wn(t))return Gs;if(Yt(this))return Yt(t)?Ze(this).R(Ze(t)):Ze(Ze(this).R(t));if(Yt(t))return Ze(this.R(Ze(t)));if(0>this.X(u_)&&0>t.X(u_))return Cn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,u=t.D(i)&65535;n[2*r+2*i]+=o*u,Ll(n,2*r+2*i),n[2*r+2*i+1]+=s*u,Ll(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Ll(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Ll(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ne(n,0)};function Ll(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ia(t,e){this.g=t,this.h=e}function rh(t,e){if(Wn(e))throw Error("division by zero");if(Wn(t))return new ia(Gs,Gs);if(Yt(t))return e=rh(Ze(t),e),new ia(Ze(e.g),Ze(e.h));if(Yt(e))return e=rh(t,Ze(e)),new ia(Ze(e.g),e.h);if(30<t.g.length){if(Yt(t)||Yt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Am,r=e;0>=r.X(t);)n=l_(n),r=l_(r);var i=ys(n,1),s=ys(r,1);for(r=ys(r,2),n=ys(n,2);!Wn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ys(r,1),n=ys(n,1)}return e=nh(t,i.R(e)),new ia(i,e)}for(i=Gs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Cn(n),o=s.R(e);Yt(o)||0<o.X(t);)n-=r,s=Cn(n),o=s.R(e);Wn(s)&&(s=Am),i=i.add(s),t=nh(t,o)}return new ia(i,t)}x.gb=function(t){return rh(this,t).h};x.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ne(n,this.h&t.h)};x.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ne(n,this.h|t.h)};x.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ne(n,this.h^t.h)};function l_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ne(n,t.h)}function ys(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ne(i,t.h)}th.prototype.createWebChannel=th.prototype.g;jt.prototype.send=jt.prototype.u;jt.prototype.open=jt.prototype.m;jt.prototype.close=jt.prototype.close;Ed.NO_ERROR=0;Ed.TIMEOUT=8;Ed.HTTP_ERROR=6;DT.COMPLETE="complete";OT.EventType=Hu;Hu.OPEN="a";Hu.CLOSE="b";Hu.ERROR="c";Hu.MESSAGE="d";Ke.prototype.listen=Ke.prototype.O;Ee.prototype.listenOnce=Ee.prototype.P;Ee.prototype.getLastError=Ee.prototype.Sa;Ee.prototype.getLastErrorCode=Ee.prototype.Ia;Ee.prototype.getStatus=Ee.prototype.da;Ee.prototype.getResponseJson=Ee.prototype.Wa;Ee.prototype.getResponseText=Ee.prototype.ja;Ee.prototype.send=Ee.prototype.ha;Ee.prototype.setWithCredentials=Ee.prototype.Oa;mn.prototype.digest=mn.prototype.l;mn.prototype.reset=mn.prototype.reset;mn.prototype.update=mn.prototype.j;ne.prototype.add=ne.prototype.add;ne.prototype.multiply=ne.prototype.R;ne.prototype.modulo=ne.prototype.gb;ne.prototype.compare=ne.prototype.X;ne.prototype.toNumber=ne.prototype.ea;ne.prototype.toString=ne.prototype.toString;ne.prototype.getBits=ne.prototype.D;ne.fromNumber=Cn;ne.fromString=mk;var DL=function(){return new th},OL=function(){return Id()},Yf=Ed,$L=DT,LL=ls,c_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ML=Xu,Ml=OT,FL=Ee,UL=mn,Hs=ne;const h_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $o="9.21.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new sd("@firebase/firestore");function Nm(){return qr.logLevel}function VL(t){qr.setLogLevel(t)}function k(t,...e){if(qr.logLevel<=Q.DEBUG){const n=e.map(Jy);qr.debug(`Firestore (${$o}): ${t}`,...n)}}function Ce(t,...e){if(qr.logLevel<=Q.ERROR){const n=e.map(Jy);qr.error(`Firestore (${$o}): ${t}`,...n)}}function gn(t,...e){if(qr.logLevel<=Q.WARN){const n=e.map(Jy);qr.warn(`Firestore (${$o}): ${t}`,...n)}}function Jy(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t="Unexpected state"){const e=`FIRESTORE (${$o}) INTERNAL ASSERTION FAILED: `+t;throw Ce(e),new Error(e)}function F(t,e){t||D()}function zL(t,e){t||D()}function P(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let S=class extends wt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gk=class{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},jL=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ze.UNAUTHENTICATED))}shutdown(){}},BL=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}},qL=class{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Be;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Be,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Be)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(F(typeof r.accessToken=="string"),new gk(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return F(e===null||typeof e=="string"),new ze(e)}},KL=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}},WL=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new KL(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}};class GL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HL{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,k("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(F(typeof n.token=="string"),this.T=n.token,new GL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=QL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function j(t,e){return t<e?-1:t>e?1:0}function ho(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function vk(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new S(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new S(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new S(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new S(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new me(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.timestamp=e}static fromTimestamp(e){return new M(e)}static min(){return new M(new me(0,0))}static max(){return new M(new me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,n,r){n===void 0?n=0:n>e.length&&D(),r===void 0?r=e.length-n:r>e.length-n&&D(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return vu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Y extends vu{construct(e,n,r){return new Y(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new S(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Y(n)}static emptyPath(){return new Y([])}}const YL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ae extends vu{construct(e,n,r){return new Ae(e,n,r)}static isValidIdentifier(e){return YL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ae(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new S(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new S(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new S(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new S(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ae(n)}static emptyPath(){return new Ae([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.path=e}static fromPath(e){return new R(Y.fromString(e))}static fromName(e){return new R(Y.fromString(e).popFirst(5))}static empty(){return new R(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Y.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Y.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new R(new Y(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function bm(t){return t.fields.find(e=>e.kind===2)}function yi(t){return t.fields.filter(e=>e.kind!==2)}wk.UNKNOWN_ID=-1;class XL{constructor(e,n){this.fieldPath=e,this.kind=n}}class ih{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new ih(0,Bt.min())}}function _k(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=M.fromTimestamp(r===1e9?new me(n+1,0):new me(n,r));return new Bt(i,R.empty(),e)}function Ik(t){return new Bt(t.readTime,t.key,-1)}class Bt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Bt(M.min(),R.empty(),-1)}static max(){return new Bt(M.max(),R.empty(),-1)}}function Zy(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=R.comparator(t.documentKey,e.documentKey),n!==0?n:j(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Sk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ai(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==Ek)throw t;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&D(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,r)=>{n(e)})}static reject(e){return new w((n,r)=>{r(e)})}static waitFor(e){return new w((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=w.resolve(!1);for(const r of e)n=n.next(i=>i?w.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new w((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;n(e[l]).next(c=>{o[l]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new w((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.R=new Be,this.transaction.oncomplete=()=>{this.R.resolve()},this.transaction.onabort=()=>{n.error?this.R.reject(new La(e,n.error)):this.R.resolve()},this.transaction.onerror=r=>{const i=ev(r.target.error);this.R.reject(new La(e,i))}}static open(e,n,r,i){try{return new Rd(n,e.transaction(i,r))}catch(s){throw new La(n,s)}}get v(){return this.R.promise}abort(e){e&&this.R.reject(e),this.aborted||(k("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new ZL(n)}}class cn{constructor(e,n,r){this.name=e,this.version=n,this.V=r,cn.S(we())===12.2&&Ce("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return k("SimpleDb","Removing database:",e),_i(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!su())return!1;if(cn.C())return!0;const e=we(),n=cn.S(e),r=0<n&&n<10,i=cn.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(k("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new La(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new S(_.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new S(_.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new La(e,o))},i.onupgradeneeded=s=>{k("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.$(o,i.transaction,s.oldVersion,this.version).next(()=>{k("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=n=>this.F(n)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Rd.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(l=>(a.P(),l)).catch(l=>(a.abort(l),w.reject(l))).toPromise();return u.catch(()=>{}),await a.v,u}catch(a){const u=a,l=u.name!=="FirebaseError"&&o<3;if(k("SimpleDb","Transaction failed with error:",u.message,"Retrying:",l),this.close(),!l)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class JL{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return _i(this.L.delete())}}class La extends S{constructor(e,n){super(_.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function ui(t){return t.name==="IndexedDbTransactionError"}class ZL{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(k("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(k("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),_i(r)}add(e){return k("SimpleDb","ADD",this.store.name,e,e),_i(this.store.add(e))}get(e){return _i(this.store.get(e)).next(n=>(n===void 0&&(n=null),k("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return k("SimpleDb","DELETE",this.store.name,e),_i(this.store.delete(e))}count(){return k("SimpleDb","COUNT",this.store.name),_i(this.store.count())}j(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new w((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new w((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,n){k("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}X(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Z(e){const n=this.cursor({});return new w((r,i)=>{n.onerror=s=>{const o=ev(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new w((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new JL(a),l=n(a.primaryKey,a.value,u);if(l instanceof w){const c=l.catch(h=>(u.done(),w.reject(h)));r.push(c)}u.isDone?i():u.K===null?a.continue():a.continue(u.K)}}).next(()=>w.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function _i(t){return new w((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=ev(r.target.error);n(i)}})}let d_=!1;function ev(t){const e=cn.S(we());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new S("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return d_||(d_=!0,setTimeout(()=>{throw r},0)),r}}return t}class eM{constructor(e,n){this.asyncQueue=e,this.tt=n,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){k("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{k("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(n){ui(n)?k("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await ai(n)}await this.et(6e4)})}}class tM{constructor(e,n){this.localStore=e,this.persistence=n}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.st(n,e))}st(e,n){const r=new Set;let i=n,s=!0;return w.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return k("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}it(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(k("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}rt(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=Ik(s);Zy(o,r)>0&&(r=o)}),new Bt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Nt.ct=-1;function el(t){return t==null}function wu(t){return t===0&&1/t==-1/0}function Tk(t){return typeof t=="number"&&Number.isInteger(t)&&!wu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=f_(e)),e=nM(t.get(n),e);return f_(e)}function nM(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function f_(t){return t+""}function An(t){const e=t.length;if(F(e>=2),e===2)return F(t.charAt(0)===""&&t.charAt(1)===""),Y.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&D(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:D()}s=o+2}return new Y(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(t,e){return[t,_t(e)]}function kk(t,e,n){return[t,_t(e),n]}const rM={},iM=["prefixPath","collectionGroup","readTime","documentId"],sM=["prefixPath","collectionGroup","documentId"],oM=["collectionGroup","readTime","prefixPath","documentId"],aM=["canonicalId","targetId"],uM=["targetId","path"],lM=["path","targetId"],cM=["collectionId","parent"],hM=["indexId","uid"],dM=["uid","sequenceNumber"],fM=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],pM=["indexId","uid","orderedDocumentKey"],mM=["userId","collectionPath","documentId"],gM=["userId","collectionPath","largestBatchId"],yM=["userId","collectionGroup","largestBatchId"],Ck=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],vM=[...Ck,"documentOverlays"],Ak=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Nk=Ak,wM=[...Nk,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm extends Sk{constructor(e,n){super(),this.at=e,this.currentSequenceNumber=n}}function He(t,e){const n=P(t);return cn.M(n.at,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function cs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function bk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fl(this.root,e,this.comparator,!0)}}class Fl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Je.RED,this.left=i??Je.EMPTY,this.right=s??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw D();const e=this.left.check();if(e!==this.right.check())throw D();return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw D()}get value(){throw D()}get color(){throw D()}get left(){throw D()}get right(){throw D()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Je(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.comparator=e,this.data=new oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new g_(this.data.getIterator())}getIteratorFrom(e){return new g_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof le)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new le(this.comparator);return n.data=e,n}}class g_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function vs(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.fields=e,e.sort(Ae.comparator)}static empty(){return new bt([])}unionWith(e){let n=new le(Ae.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ho(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _M(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Rk("Invalid base64 string: "+i):i}}(e);return new Le(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Le(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Le.EMPTY_BYTE_STRING=new Le("");const IM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kr(t){if(F(!!t),typeof t=="string"){let e=0;const n=IM.exec(t);if(F(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ie(t.seconds),nanos:Ie(t.nanos)}}function Ie(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Wr(t){return typeof t=="string"?Le.fromBase64String(t):Le.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function tv(t){const e=t.mapValue.fields.__previous_value__;return Pd(e)?tv(e):e}function _u(t){const e=Kr(t.mapValue.fields.__local_write_time__.timestampValue);return new me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(e,n,r,i,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Gr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Gr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Gr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},lc={nullValue:"NULL_VALUE"};function Qi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Pd(t)?4:Pk(t)?9007199254740991:10:D()}function Mn(t,e){if(t===e)return!0;const n=Qi(t);if(n!==Qi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _u(t).isEqual(_u(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Kr(r.timestampValue),o=Kr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Wr(r.bytesValue).isEqual(Wr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ie(r.geoPointValue.latitude)===Ie(i.geoPointValue.latitude)&&Ie(r.geoPointValue.longitude)===Ie(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ie(r.integerValue)===Ie(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ie(r.doubleValue),o=Ie(i.doubleValue);return s===o?wu(s)===wu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ho(t.arrayValue.values||[],e.arrayValue.values||[],Mn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(m_(s)!==m_(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Mn(s[a],o[a])))return!1;return!0}(t,e);default:return D()}}function Iu(t,e){return(t.values||[]).find(n=>Mn(n,e))!==void 0}function Hr(t,e){if(t===e)return 0;const n=Qi(t),r=Qi(e);if(n!==r)return j(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return j(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ie(i.integerValue||i.doubleValue),a=Ie(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return y_(t.timestampValue,e.timestampValue);case 4:return y_(_u(t),_u(e));case 5:return j(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Wr(i),a=Wr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=j(o[u],a[u]);if(l!==0)return l}return j(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=j(Ie(i.latitude),Ie(s.latitude));return o!==0?o:j(Ie(i.longitude),Ie(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=Hr(o[u],a[u]);if(l)return l}return j(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Cr.mapValue&&s===Cr.mapValue)return 0;if(i===Cr.mapValue)return 1;if(s===Cr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=j(a[c],l[c]);if(h!==0)return h;const d=Hr(o[a[c]],u[l[c]]);if(d!==0)return d}return j(a.length,l.length)}(t.mapValue,e.mapValue);default:throw D()}}function y_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return j(t,e);const n=Kr(t),r=Kr(e),i=j(n.seconds,r.seconds);return i!==0?i:j(n.nanos,r.nanos)}function fo(t){return Pm(t)}function Pm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Kr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Wr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,R.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Pm(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Pm(r.fields[a])}`;return s+"}"}(t.mapValue):D();var e,n}function Yi(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function xm(t){return!!t&&"integerValue"in t}function Eu(t){return!!t&&"arrayValue"in t}function v_(t){return!!t&&"nullValue"in t}function w_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function cc(t){return!!t&&"mapValue"in t}function Ma(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return cs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ma(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ma(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Pk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function SM(t){return"nullValue"in t?lc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Yi(Gr.empty(),R.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:D()}function TM(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Yi(Gr.empty(),R.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Cr:D()}function __(t,e){const n=Hr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function I_(t,e){const n=Hr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ct=class Dm{constructor(e){this.value=e}static empty(){return new Dm({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!cc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ma(n)}setAll(e){let n=Ae.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ma(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());cc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];cc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){cs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Dm(Ma(this.value))}};function xk(t){const e=[];return cs(t.fields,(n,r)=>{const i=new Ae([n]);if(cc(r)){const s=xk(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qe=class vi{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new vi(e,0,M.min(),M.min(),M.min(),Ct.empty(),0)}static newFoundDocument(e,n,r,i){return new vi(e,1,n,M.min(),r,i,0)}static newNoDocument(e,n){return new vi(e,2,n,M.min(),M.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new vi(e,3,n,M.min(),M.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(M.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vi&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vi(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,n){this.position=e,this.inclusive=n}}function E_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=R.comparator(R.fromName(o.referenceValue),n.key):r=Hr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function S_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n="asc"){this.field=e,this.dir=n}}function kM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{}class W extends Dk{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new CM(e,n,r):n==="array-contains"?new bM(e,r):n==="in"?new Uk(e,r):n==="not-in"?new RM(e,r):n==="array-contains-any"?new PM(e,r):new W(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new AM(e,r):new NM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Hr(n,this.value)):n!==null&&Qi(this.value)===Qi(n)&&this.matchesComparison(Hr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return D()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ee extends Dk{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new ee(e,n)}matches(e){return po(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function po(t){return t.op==="and"}function Om(t){return t.op==="or"}function nv(t){return Ok(t)&&po(t)}function Ok(t){for(const e of t.filters)if(e instanceof ee)return!1;return!0}function $m(t){if(t instanceof W)return t.field.canonicalString()+t.op.toString()+fo(t.value);if(nv(t))return t.filters.map(e=>$m(e)).join(",");{const e=t.filters.map(n=>$m(n)).join(",");return`${t.op}(${e})`}}function $k(t,e){return t instanceof W?function(n,r){return r instanceof W&&n.op===r.op&&n.field.isEqual(r.field)&&Mn(n.value,r.value)}(t,e):t instanceof ee?function(n,r){return r instanceof ee&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&$k(s,r.filters[o]),!0):!1}(t,e):void D()}function Lk(t,e){const n=t.filters.concat(e);return ee.create(n,t.op)}function Mk(t){return t instanceof W?function(e){return`${e.field.canonicalString()} ${e.op} ${fo(e.value)}`}(t):t instanceof ee?function(e){return e.op.toString()+" {"+e.getFilters().map(Mk).join(" ,")+"}"}(t):"Filter"}class CM extends W{constructor(e,n,r){super(e,n,r),this.key=R.fromName(r.referenceValue)}matches(e){const n=R.comparator(e.key,this.key);return this.matchesComparison(n)}}class AM extends W{constructor(e,n){super(e,"in",n),this.keys=Fk("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class NM extends W{constructor(e,n){super(e,"not-in",n),this.keys=Fk("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Fk(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>R.fromName(r.referenceValue))}class bM extends W{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Eu(n)&&Iu(n.arrayValue,this.value)}}class Uk extends W{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Iu(this.value.arrayValue,n)}}class RM extends W{constructor(e,n){super(e,"not-in",n)}matches(e){if(Iu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Iu(this.value.arrayValue,n)}}class PM extends W{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Eu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Iu(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Lm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new xM(t,e,n,r,i,s,o)}function Xi(t){const e=P(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>$m(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),el(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>fo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>fo(r)).join(",")),e.ft=n}return e.ft}function tl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!kM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!$k(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!S_(t.startAt,e.startAt)&&S_(t.endAt,e.endAt)}function sh(t){return R.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function oh(t,e){return t.filters.filter(n=>n instanceof W&&n.field.isEqual(e))}function T_(t,e,n){let r=lc,i=!0;for(const s of oh(t,e)){let o=lc,a=!0;switch(s.op){case"<":case"<=":o=SM(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=lc}__({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];__({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function k_(t,e,n){let r=Cr,i=!0;for(const s of oh(t,e)){let o=Cr,a=!0;switch(s.op){case">=":case">":o=TM(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Cr}I_({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];I_({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.dt=null,this._t=null,this.startAt,this.endAt}}function Vk(t,e,n,r,i,s,o,a){return new ur(t,e,n,r,i,s,o,a)}function Lo(t){return new ur(t)}function C_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function rv(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function xd(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function iv(t){return t.collectionGroup!==null}function Ui(t){const e=P(t);if(e.dt===null){e.dt=[];const n=xd(e),r=rv(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Qs(n)),e.dt.push(new Qs(Ae.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Qs(Ae.keyField(),s))}}}return e.dt}function $t(t){const e=P(t);if(!e._t)if(e.limitType==="F")e._t=Lm(e.path,e.collectionGroup,Ui(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ui(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Qs(s.field,o))}const r=e.endAt?new Qr(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Qr(e.startAt.position,e.startAt.inclusive):null;e._t=Lm(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Mm(t,e){e.getFirstInequalityField(),xd(t);const n=t.filters.concat([e]);return new ur(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ah(t,e,n){return new ur(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function nl(t,e){return tl($t(t),$t(e))&&t.limitType===e.limitType}function zk(t){return`${Xi($t(t))}|lt:${t.limitType}`}function Fm(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>Mk(r)).join(", ")}]`),el(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>fo(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>fo(r)).join(",")),`Target(${n})`}($t(t))}; limitType=${t.limitType})`}function rl(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):R.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Ui(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=E_(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ui(n),r)||n.endAt&&!function(i,s,o){const a=E_(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ui(n),r))}(t,e)}function jk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Bk(t){return(e,n)=>{let r=!1;for(const i of Ui(t)){const s=DM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function DM(t,e,n){const r=t.field.isKeyField()?R.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?Hr(a,u):D()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return D()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){cs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return bk(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OM=new oe(R.comparator);function Rt(){return OM}const qk=new oe(R.comparator);function wa(...t){let e=qk;for(const n of t)e=e.insert(n.key,n);return e}function Kk(t){let e=qk;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Nn(){return Fa()}function Wk(){return Fa()}function Fa(){return new li(t=>t.toString(),(t,e)=>t.isEqual(e))}const $M=new oe(R.comparator),LM=new le(R.comparator);function B(...t){let e=LM;for(const n of t)e=e.add(n);return e}const MM=new le(j);function sv(){return MM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wu(e)?"-0":e}}function Hk(t){return{integerValue:""+t}}function Qk(t,e){return Tk(e)?Hk(e):Gk(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(){this._=void 0}}function FM(t,e,n){return t instanceof mo?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Pd(i)&&(i=tv(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Ji?Xk(t,e):t instanceof Zi?Jk(t,e):function(r,i){const s=Yk(r,i),o=A_(s)+A_(r.wt);return xm(s)&&xm(r.wt)?Hk(o):Gk(r.serializer,o)}(t,e)}function UM(t,e,n){return t instanceof Ji?Xk(t,e):t instanceof Zi?Jk(t,e):n}function Yk(t,e){return t instanceof go?xm(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class mo extends Dd{}class Ji extends Dd{constructor(e){super(),this.elements=e}}function Xk(t,e){const n=Zk(e);for(const r of t.elements)n.some(i=>Mn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Zi extends Dd{constructor(e){super(),this.elements=e}}function Jk(t,e){let n=Zk(e);for(const r of t.elements)n=n.filter(i=>!Mn(i,r));return{arrayValue:{values:n}}}class go extends Dd{constructor(e,n){super(),this.serializer=e,this.wt=n}}function A_(t){return Ie(t.integerValue||t.doubleValue)}function Zk(t){return Eu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n){this.field=e,this.transform=n}}function VM(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ji&&r instanceof Ji||n instanceof Zi&&r instanceof Zi?ho(n.elements,r.elements,Mn):n instanceof go&&r instanceof go?Mn(n.wt,r.wt):n instanceof mo&&r instanceof mo}(t.transform,e.transform)}class zM{constructor(e,n){this.version=e,this.transformResults=n}}class pe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new pe}static exists(e){return new pe(void 0,e)}static updateTime(e){return new pe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Od{}function eC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Fo(t.key,pe.none()):new Mo(t.key,t.data,pe.none());{const n=t.data,r=Ct.empty();let i=new le(Ae.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new lr(t.key,r,new bt(i.toArray()),pe.none())}}function jM(t,e,n){t instanceof Mo?function(r,i,s){const o=r.value.clone(),a=b_(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof lr?function(r,i,s){if(!hc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=b_(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(tC(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ua(t,e,n,r){return t instanceof Mo?function(i,s,o,a){if(!hc(i.precondition,s))return o;const u=i.value.clone(),l=R_(i.fieldTransforms,a,s);return u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof lr?function(i,s,o,a){if(!hc(i.precondition,s))return o;const u=R_(i.fieldTransforms,a,s),l=s.data;return l.setAll(tC(i)),l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return hc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function BM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Yk(r.transform,i||null);s!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,s))}return n||null}function N_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ho(n,r,(i,s)=>VM(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Mo extends Od{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class lr extends Od{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function tC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function b_(t,e,n){const r=new Map;F(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,UM(o,a,n[i]))}return r}function R_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,FM(s,o,e))}return r}class Fo extends Od{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ov extends Od{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&jM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ua(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ua(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Wk();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=eC(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(M.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),B())}isEqual(e){return this.batchId===e.batchId&&ho(this.mutations,e.mutations,(n,r)=>N_(n,r))&&ho(this.baseMutations,e.baseMutations,(n,r)=>N_(n,r))}}class uv{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){F(e.mutations.length===r.length);let i=$M;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new uv(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,H;function nC(t){switch(t){default:return D();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function rC(t){if(t===void 0)return Ce("GRPC error has no .code"),_.UNKNOWN;switch(t){case Re.OK:return _.OK;case Re.CANCELLED:return _.CANCELLED;case Re.UNKNOWN:return _.UNKNOWN;case Re.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case Re.INTERNAL:return _.INTERNAL;case Re.UNAVAILABLE:return _.UNAVAILABLE;case Re.UNAUTHENTICATED:return _.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case Re.NOT_FOUND:return _.NOT_FOUND;case Re.ALREADY_EXISTS:return _.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return _.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case Re.ABORTED:return _.ABORTED;case Re.OUT_OF_RANGE:return _.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return _.UNIMPLEMENTED;case Re.DATA_LOSS:return _.DATA_LOSS;default:return D()}}(H=Re||(Re={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ul}static getOrCreateInstance(){return Ul===null&&(Ul=new cv),Ul}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Ul=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KM=new Hs([4294967295,4294967295],0);function P_(t){const e=iC().encode(t),n=new UL;return n.update(e),new Uint8Array(n.digest())}function x_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Hs([n,r],0),new Hs([i,s],0)]}class hv{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new _a(`Invalid padding: ${n}`);if(r<0)throw new _a(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new _a(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new _a(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=Hs.fromNumber(this.yt)}Tt(e,n,r){let i=e.add(n.multiply(Hs.fromNumber(r)));return i.compare(KM)===1&&(i=new Hs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=P_(e),[r,i]=x_(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);if(!this.Et(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new hv(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=P_(e),[r,i]=x_(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class _a extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ol.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new sl(M.min(),i,new oe(j),Rt(),B())}}class ol{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ol(r,n,B(),B(),B())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n,r,i){this.vt=e,this.removedTargetIds=n,this.key=r,this.Pt=i}}class sC{constructor(e,n){this.targetId=e,this.bt=n}}class oC{constructor(e,n,r=Le.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class D_{constructor(){this.Vt=0,this.St=$_(),this.Dt=Le.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=B(),n=B(),r=B();return this.St.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:D()}}),new ol(this.Dt,this.Ct,e,n,r)}$t(){this.xt=!1,this.St=$_()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class WM{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=Rt(),this.jt=O_(),this.zt=new oe(j)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const r=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&r.Mt(e.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(e.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(r.Ut(),r.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),r.Mt(e.resumeToken));break;default:D()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((r,i)=>{this.Zt(i)&&n(i)})}ee(e){var n;const r=e.targetId,i=e.bt.count,s=this.ne(r);if(s){const o=s.target;if(sh(o))if(i===0){const a=new R(o.path);this.Jt(r,a,qe.newNoDocument(a,M.min()))}else F(i===1);else{const a=this.se(r);if(a!==i){const u=this.ie(e,a);if(u!==0){this.te(r);const l=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,l)}(n=cv.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,c,h){var d,f,y,v,E,m;const p={localCacheCount:c,existenceFilterCount:h.count},g=h.unchangedNames;return g&&(p.bloomFilter={applied:l===0,hashCount:(d=g==null?void 0:g.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(y=(f=g==null?void 0:g.bits)===null||f===void 0?void 0:f.bitmap)===null||y===void 0?void 0:y.length)!==null&&v!==void 0?v:0,padding:(m=(E=g==null?void 0:g.bits)===null||E===void 0?void 0:E.padding)!==null&&m!==void 0?m:0}),p}(u,a,e.bt))}}}}ie(e,n){const{unchangedNames:r,count:i}=e.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let u,l;try{u=Wr(s).toUint8Array()}catch(c){if(c instanceof Rk)return gn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{l=new hv(u,o,a)}catch(c){return gn(c instanceof _a?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return l.yt===0?1:i!==n-this.re(e.targetId,l)?2:0}re(e,n){const r=this.Kt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.At(a)||(this.Jt(e,s,null),i++)}),i}ue(e){const n=new Map;this.Gt.forEach((s,o)=>{const a=this.ne(o);if(a){if(s.current&&sh(a.target)){const u=new R(a.target.path);this.Qt.get(u)!==null||this.ce(o,u)||this.Jt(o,u,qe.newNoDocument(u,e))}s.kt&&(n.set(o,s.Ot()),s.$t())}});let r=B();this.jt.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.ne(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qt.forEach((s,o)=>o.setReadTime(e));const i=new sl(e,n,this.zt,this.Qt,r);return this.Qt=Rt(),this.jt=O_(),this.zt=new oe(j),i}Ht(e,n){if(!this.Zt(e))return;const r=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,r),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,r){if(!this.Zt(e))return;const i=this.Xt(e);this.ce(e,n)?i.Ft(n,1):i.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),r&&(this.Qt=this.Qt.insert(n,r))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new D_,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new le(j),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||k("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new D_),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function O_(){return new oe(R.comparator)}function $_(){return new oe(R.comparator)}const GM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),HM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),QM=(()=>({and:"AND",or:"OR"}))();class YM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Um(t,e){return t.useProto3Json||el(e)?e:{value:e}}function yo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function aC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function XM(t,e){return yo(t,e.toTimestamp())}function Ne(t){return F(!!t),M.fromTimestamp(function(e){const n=Kr(e);return new me(n.seconds,n.nanos)}(t))}function dv(t,e){return function(n){return new Y(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function uC(t){const e=Y.fromString(t);return F(yC(e)),e}function Su(t,e){return dv(t.databaseId,e.path)}function xn(t,e){const n=uC(e);if(n.get(1)!==t.databaseId.projectId)throw new S(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new S(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new R(cC(n))}function Vm(t,e){return dv(t.databaseId,e)}function lC(t){const e=uC(t);return e.length===4?Y.emptyPath():cC(e)}function Tu(t){return new Y(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function cC(t){return F(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function L_(t,e,n){return{name:Su(t,e),fields:n.value.mapValue.fields}}function hC(t,e,n){const r=xn(t,e.name),i=Ne(e.updateTime),s=e.createTime?Ne(e.createTime):M.min(),o=new Ct({mapValue:{fields:e.fields}}),a=qe.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function JM(t,e){return"found"in e?function(n,r){F(!!r.found),r.found.name,r.found.updateTime;const i=xn(n,r.found.name),s=Ne(r.found.updateTime),o=r.found.createTime?Ne(r.found.createTime):M.min(),a=new Ct({mapValue:{fields:r.found.fields}});return qe.newFoundDocument(i,s,o,a)}(t,e):"missing"in e?function(n,r){F(!!r.missing),F(!!r.readTime);const i=xn(n,r.missing),s=Ne(r.readTime);return qe.newNoDocument(i,s)}(t,e):D()}function ZM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:D()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(F(l===void 0||typeof l=="string"),Le.fromBase64String(l||"")):(F(l===void 0||l instanceof Uint8Array),Le.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?_.UNKNOWN:rC(u.code);return new S(l,u.message||"")}(o);n=new oC(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=xn(t,r.document.name),s=Ne(r.document.updateTime),o=r.document.createTime?Ne(r.document.createTime):M.min(),a=new Ct({mapValue:{fields:r.document.fields}}),u=qe.newFoundDocument(i,s,o,a),l=r.targetIds||[],c=r.removedTargetIds||[];n=new dc(l,c,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=xn(t,r.document),s=r.readTime?Ne(r.readTime):M.min(),o=qe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new dc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=xn(t,r.document),s=r.removedTargetIds||[];n=new dc([],s,i,null)}else{if(!("filter"in e))return D();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new qM(i,s),a=r.targetId;n=new sC(a,o)}}return n}function ku(t,e){let n;if(e instanceof Mo)n={update:L_(t,e.key,e.value)};else if(e instanceof Fo)n={delete:Su(t,e.key)};else if(e instanceof lr)n={update:L_(t,e.key,e.data),updateMask:sF(e.fieldMask)};else{if(!(e instanceof ov))return D();n={verify:Su(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof mo)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ji)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Zi)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof go)return{fieldPath:s.field.canonicalString(),increment:o.wt};throw D()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:XM(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:D()}(t,e.precondition)),n}function zm(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?pe.updateTime(Ne(i.updateTime)):i.exists!==void 0?pe.exists(i.exists):pe.none()}(e.currentDocument):pe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)F(o.setToServerValue==="REQUEST_TIME"),a=new mo;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new Ji(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new Zi(l)}else"increment"in o?a=new go(s,o.increment):D();const u=Ae.fromServerFormat(o.fieldPath);return new il(u,a)}(t,i)):[];if(e.update){e.update.name;const i=xn(t,e.update.name),s=new Ct({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const u=a.fieldPaths||[];return new bt(u.map(l=>Ae.fromServerFormat(l)))}(e.updateMask);return new lr(i,s,o,n,r)}return new Mo(i,s,n,r)}if(e.delete){const i=xn(t,e.delete);return new Fo(i,n)}if(e.verify){const i=xn(t,e.verify);return new ov(i,n)}return D()}function eF(t,e){return t&&t.length>0?(F(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Ne(r.updateTime):Ne(i);return s.isEqual(M.min())&&(s=Ne(i)),new zM(s,r.transformResults||[])}(n,e))):[]}function dC(t,e){return{documents:[Vm(t,e.path)]}}function fC(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Vm(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Vm(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length!==0)return gC(ee.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(l=>function(c){return{field:_s(c.field),direction:nF(c.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Um(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function pC(t){let e=lC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){F(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=mC(c);return h instanceof ee&&nv(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Qs(Is(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,el(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(c){const h=!!c.before,d=c.values||[];return new Qr(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const h=!c.before,d=c.values||[];return new Qr(d,h)}(n.endAt)),Vk(e,i,o,s,a,"F",u,l)}function tF(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return D()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function mC(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Is(e.unaryFilter.field);return W.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Is(e.unaryFilter.field);return W.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Is(e.unaryFilter.field);return W.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Is(e.unaryFilter.field);return W.create(s,"!=",{nullValue:"NULL_VALUE"});default:return D()}}(t):t.fieldFilter!==void 0?function(e){return W.create(Is(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return D()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ee.create(e.compositeFilter.filters.map(n=>mC(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return D()}}(e.compositeFilter.op))}(t):D()}function nF(t){return GM[t]}function rF(t){return HM[t]}function iF(t){return QM[t]}function _s(t){return{fieldPath:t.canonicalString()}}function Is(t){return Ae.fromServerFormat(t.fieldPath)}function gC(t){return t instanceof W?function(e){if(e.op==="=="){if(w_(e.value))return{unaryFilter:{field:_s(e.field),op:"IS_NAN"}};if(v_(e.value))return{unaryFilter:{field:_s(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(w_(e.value))return{unaryFilter:{field:_s(e.field),op:"IS_NOT_NAN"}};if(v_(e.value))return{unaryFilter:{field:_s(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_s(e.field),op:rF(e.op),value:e.value}}}(t):t instanceof ee?function(e){const n=e.getFilters().map(r=>gC(r));return n.length===1?n[0]:{compositeFilter:{op:iF(e.op),filters:n}}}(t):D()}function sF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n,r,i,s=M.min(),o=M.min(),a=Le.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e){this.le=e}}function oF(t,e){let n;if(e.document)n=hC(t.le,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=R.fromSegments(e.noDocument.path),i=ts(e.noDocument.readTime);n=qe.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return D();{const r=R.fromSegments(e.unknownDocument.path),i=ts(e.unknownDocument.version);n=qe.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new me(r[0],r[1]);return M.fromTimestamp(i)}(e.readTime)),n}function M_(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:uh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:Su(i,s.key),fields:s.data.value.mapValue.fields,updateTime:yo(i,s.version.toTimestamp()),createTime:yo(i,s.createTime.toTimestamp())}}(t.le,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:es(e.version)};else{if(!e.isUnknownDocument())return D();r.unknownDocument={path:n.path.toArray(),version:es(e.version)}}return r}function uh(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function es(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ts(t){const e=new me(t.seconds,t.nanoseconds);return M.fromTimestamp(e)}function Ii(t,e){const n=(e.baseMutations||[]).map(s=>zm(t.le,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>zm(t.le,s)),i=me.fromMillis(e.localWriteTimeMs);return new av(e.batchId,i,n,r)}function Ia(t){const e=ts(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?ts(t.lastLimboFreeSnapshotVersion):M.min();let r;var i;return t.query.documents!==void 0?(F((i=t.query).documents.length===1),r=$t(Lo(lC(i.documents[0])))):r=function(s){return $t(pC(s))}(t.query),new Gn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Le.fromBase64String(t.resumeToken))}function wC(t,e){const n=es(e.snapshotVersion),r=es(e.lastLimboFreeSnapshotVersion);let i;i=sh(e.target)?dC(t.le,e.target):fC(t.le,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Xi(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function fv(t){const e=pC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ah(e,e.limit,"L"):e}function Xf(t,e){return new lv(e.largestBatchId,zm(t.le,e.overlayMutation))}function F_(t,e){const n=e.path.lastSegment();return[t,_t(e.path.popLast()),n]}function U_(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:es(r.readTime),documentKey:_t(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aF{getBundleMetadata(e,n){return V_(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:ts(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return V_(e).put({bundleId:(r=n).id,createTime:es(Ne(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return z_(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:fv(i.bundledQuery),readTime:ts(i.readTime)};var i})}saveNamedQuery(e,n){return z_(e).put(function(r){return{name:r.name,readTime:es(Ne(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function V_(t){return He(t,"bundles")}function z_(t){return He(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,n){this.serializer=e,this.userId=n}static fe(e,n){const r=n.uid||"";return new $d(e,r)}getOverlay(e,n){return sa(e).get(F_(this.userId,n)).next(r=>r?Xf(this.serializer,r):null)}getOverlays(e,n){const r=Nn();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new lv(n,o);i.push(this.de(e,a))}),w.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(_t(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(sa(e).J("collectionPathOverlayIndex",a))}),w.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Nn(),s=_t(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return sa(e).j("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const l=Xf(this.serializer,u);i.set(l.getKey(),l)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Nn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return sa(e).X({index:"collectionGroupOverlayIndex",range:a},(u,l,c)=>{const h=Xf(this.serializer,l);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):c.done()}).next(()=>s)}de(e,n){return sa(e).put(function(r,i,s){const[o,a,u]=F_(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:u,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:ku(r.le,s.mutation)}}(this.serializer,this.userId,n))}}function sa(t){return He(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){}_e(e,n){this.we(e,n),n.me()}we(e,n){if("nullValue"in e)this.ge(n,5);else if("booleanValue"in e)this.ge(n,10),n.ye(e.booleanValue?1:0);else if("integerValue"in e)this.ge(n,15),n.ye(Ie(e.integerValue));else if("doubleValue"in e){const r=Ie(e.doubleValue);isNaN(r)?this.ge(n,13):(this.ge(n,15),wu(r)?n.ye(0):n.ye(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ge(n,20),typeof r=="string"?n.pe(r):(n.pe(`${r.seconds||""}`),n.ye(r.nanos||0))}else if("stringValue"in e)this.Ie(e.stringValue,n),this.Te(n);else if("bytesValue"in e)this.ge(n,30),n.Ee(Wr(e.bytesValue)),this.Te(n);else if("referenceValue"in e)this.Ae(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.ge(n,45),n.ye(r.latitude||0),n.ye(r.longitude||0)}else"mapValue"in e?Pk(e)?this.ge(n,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,n),this.Te(n)):"arrayValue"in e?(this.ve(e.arrayValue,n),this.Te(n)):D()}Ie(e,n){this.ge(n,25),this.Pe(e,n)}Pe(e,n){n.pe(e)}Re(e,n){const r=e.fields||{};this.ge(n,55);for(const i of Object.keys(r))this.Ie(i,n),this.we(r[i],n)}ve(e,n){const r=e.values||[];this.ge(n,50);for(const i of r)this.we(i,n)}Ae(e,n){this.ge(n,37),R.fromName(e).path.forEach(r=>{this.ge(n,60),this.Pe(r,n)})}ge(e,n){e.ye(n)}Te(e){e.ye(2)}}Ei.be=new Ei;function uF(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function j_(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=uF(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class lF{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ve(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Se(r.value),r=n.next();this.De()}Ce(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.xe(r.value),r=n.next();this.Ne()}ke(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Se(r);else if(r<2048)this.Se(960|r>>>6),this.Se(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Se(480|r>>>12),this.Se(128|63&r>>>6),this.Se(128|63&r);else{const i=n.codePointAt(0);this.Se(240|i>>>18),this.Se(128|63&i>>>12),this.Se(128|63&i>>>6),this.Se(128|63&i)}}this.De()}Me(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.xe(r);else if(r<2048)this.xe(960|r>>>6),this.xe(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.xe(480|r>>>12),this.xe(128|63&r>>>6),this.xe(128|63&r);else{const i=n.codePointAt(0);this.xe(240|i>>>18),this.xe(128|63&i>>>12),this.xe(128|63&i>>>6),this.xe(128|63&i)}}this.Ne()}Oe(e){const n=this.$e(e),r=j_(n);this.Fe(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Be(e){const n=this.$e(e),r=j_(n);this.Fe(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Le(){this.qe(255),this.qe(255)}Ue(){this.Ke(255),this.Ke(255)}reset(){this.position=0}seed(e){this.Fe(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ge(){return this.buffer.slice(0,this.position)}$e(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Se(e){const n=255&e;n===0?(this.qe(0),this.qe(255)):n===255?(this.qe(255),this.qe(0)):this.qe(n)}xe(e){const n=255&e;n===0?(this.Ke(0),this.Ke(255)):n===255?(this.Ke(255),this.Ke(0)):this.Ke(e)}De(){this.qe(0),this.qe(1)}Ne(){this.Ke(0),this.Ke(1)}qe(e){this.Fe(1),this.buffer[this.position++]=e}Ke(e){this.Fe(1),this.buffer[this.position++]=~e}Fe(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class cF{constructor(e){this.Qe=e}Ee(e){this.Qe.Ve(e)}pe(e){this.Qe.ke(e)}ye(e){this.Qe.Oe(e)}me(){this.Qe.Le()}}class hF{constructor(e){this.Qe=e}Ee(e){this.Qe.Ce(e)}pe(e){this.Qe.Me(e)}ye(e){this.Qe.Be(e)}me(){this.Qe.Ue()}}class oa{constructor(){this.Qe=new lF,this.je=new cF(this.Qe),this.ze=new hF(this.Qe)}seed(e){this.Qe.seed(e)}We(e){return e===0?this.je:this.ze}Ge(){return this.Qe.Ge()}reset(){this.Qe.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}He(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Si(this.indexId,this.documentKey,this.arrayValue,r)}}function fr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=B_(t.arrayValue,e.arrayValue),n!==0?n:(n=B_(t.directionalValue,e.directionalValue),n!==0?n:R.comparator(t.documentKey,e.documentKey)))}function B_(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dF{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Je=e.orderBy,this.Ye=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xe=r:this.Ye.push(r)}}Ze(e){F(e.collectionGroup===this.collectionId);const n=bm(e);if(n!==void 0&&!this.tn(n))return!1;const r=yi(e);let i=0,s=0;for(;i<r.length&&this.tn(r[i]);++i);if(i===r.length)return!0;if(this.Xe!==void 0){const o=r[i];if(!this.en(this.Xe,o)||!this.nn(this.Je[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Je.length||!this.nn(this.Je[s++],o))return!1}return!0}tn(e){for(const n of this.Ye)if(this.en(n,e))return!0;return!1}en(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}nn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(t){var e,n;if(F(t instanceof W||t instanceof ee),t instanceof W){if(t instanceof Uk){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>W.create(t.field,"==",s)))||[];return ee.create(i,"or")}return t}const r=t.filters.map(i=>_C(i));return ee.create(r,t.op)}function fF(t){if(t.getFilters().length===0)return[];const e=qm(_C(t));return F(IC(e)),jm(e)||Bm(e)?[e]:e.getFilters()}function jm(t){return t instanceof W}function Bm(t){return t instanceof ee&&nv(t)}function IC(t){return jm(t)||Bm(t)||function(e){if(e instanceof ee&&Om(e)){for(const n of e.getFilters())if(!jm(n)&&!Bm(n))return!1;return!0}return!1}(t)}function qm(t){if(F(t instanceof W||t instanceof ee),t instanceof W)return t;if(t.filters.length===1)return qm(t.filters[0]);const e=t.filters.map(r=>qm(r));let n=ee.create(e,t.op);return n=lh(n),IC(n)?n:(F(n instanceof ee),F(po(n)),F(n.filters.length>1),n.filters.reduce((r,i)=>pv(r,i)))}function pv(t,e){let n;return F(t instanceof W||t instanceof ee),F(e instanceof W||e instanceof ee),n=t instanceof W?e instanceof W?function(r,i){return ee.create([r,i],"and")}(t,e):q_(t,e):e instanceof W?q_(e,t):function(r,i){if(F(r.filters.length>0&&i.filters.length>0),po(r)&&po(i))return Lk(r,i.getFilters());const s=Om(r)?r:i,o=Om(r)?i:r,a=s.filters.map(u=>pv(u,o));return ee.create(a,"or")}(t,e),lh(n)}function q_(t,e){if(po(e))return Lk(e,t.getFilters());{const n=e.filters.map(r=>pv(t,r));return ee.create(n,"or")}}function lh(t){if(F(t instanceof W||t instanceof ee),t instanceof W)return t;const e=t.getFilters();if(e.length===1)return lh(e[0]);if(Ok(t))return t;const n=e.map(i=>lh(i)),r=[];return n.forEach(i=>{i instanceof W?r.push(i):i instanceof ee&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ee.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pF{constructor(){this.sn=new mv}addToCollectionParentIndex(e,n){return this.sn.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(Bt.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(Bt.min())}updateCollectionGroup(e,n,r){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class mv{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new le(Y.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new le(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=new Uint8Array(0);class mF{constructor(e,n){this.user=e,this.databaseId=n,this.rn=new mv,this.on=new li(r=>Xi(r),(r,i)=>tl(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.rn.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.rn.add(n)});const s={collectionId:r,parent:_t(i)};return K_(e).put(s)}return w.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[vk(n),""],!1,!0);return K_(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(An(o.parent))}return r})}addFieldIndex(e,n){const r=zl(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=ua(e);return s.next(a=>{o.put(U_(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=zl(e),i=ua(e),s=aa(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=aa(e);let i=!0;const s=new Map;return w.forEach(this.un(n),o=>this.cn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=B();const a=[];return w.forEach(s,(u,l)=>{var c;k("IndexedDbIndexManager",`Using index ${c=u,`id=${c.indexId}|cg=${c.collectionGroup}|f=${c.fields.map(g=>`${g.fieldPath}:${g.kind}`).join(",")}`} to execute ${Xi(n)}`);const h=function(g,I){const T=bm(I);if(T===void 0)return null;for(const N of oh(g,T.fieldPath))switch(N.op){case"array-contains-any":return N.value.arrayValue.values||[];case"array-contains":return[N.value]}return null}(l,u),d=function(g,I){const T=new Map;for(const N of yi(I))for(const b of oh(g,N.fieldPath))switch(b.op){case"==":case"in":T.set(N.fieldPath.canonicalString(),b.value);break;case"not-in":case"!=":return T.set(N.fieldPath.canonicalString(),b.value),Array.from(T.values())}return null}(l,u),f=function(g,I){const T=[];let N=!0;for(const b of yi(I)){const O=b.kind===0?T_(g,b.fieldPath,g.startAt):k_(g,b.fieldPath,g.startAt);T.push(O.value),N&&(N=O.inclusive)}return new Qr(T,N)}(l,u),y=function(g,I){const T=[];let N=!0;for(const b of yi(I)){const O=b.kind===0?k_(g,b.fieldPath,g.endAt):T_(g,b.fieldPath,g.endAt);T.push(O.value),N&&(N=O.inclusive)}return new Qr(T,N)}(l,u),v=this.an(u,l,f),E=this.an(u,l,y),m=this.hn(u,l,d),p=this.ln(u.indexId,h,v,f.inclusive,E,y.inclusive,m);return w.forEach(p,g=>r.H(g,n.limit).next(I=>{I.forEach(T=>{const N=R.fromSegments(T.documentKey);o.has(N)||(o=o.add(N),a.push(N))})}))}).next(()=>a)}return w.resolve(null)})}un(e){let n=this.on.get(e);return n||(e.filters.length===0?n=[e]:n=fF(ee.create(e.filters,"and")).map(r=>Lm(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.on.set(e,n),n)}ln(e,n,r,i,s,o,a){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),l=u/(n!=null?n.length:1),c=[];for(let h=0;h<u;++h){const d=n?this.fn(n[h/l]):Vl,f=this.dn(e,d,r[h%l],i),y=this._n(e,d,s[h%l],o),v=a.map(E=>this.dn(e,d,E,!0));c.push(...this.createRange(f,y,v))}return c}dn(e,n,r,i){const s=new Si(e,R.empty(),n,r);return i?s:s.He()}_n(e,n,r,i){const s=new Si(e,R.empty(),n,r);return i?s.He():s}cn(e,n){const r=new dF(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.Ze(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.un(n);return w.forEach(i,s=>this.cn(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let u=new le(Ae.comparator),l=!1;for(const c of a.filters)for(const h of c.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?l=!0:u=u.add(h.field));for(const c of a.orderBy)c.field.isKeyField()||(u=u.add(c.field));return u.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(n)&&i.length>1&&r===2?1:r)}wn(e,n){const r=new oa;for(const i of yi(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.We(i.kind);Ei.be._e(s,o)}return r.Ge()}fn(e){const n=new oa;return Ei.be._e(e,n.We(0)),n.Ge()}mn(e,n){const r=new oa;return Ei.be._e(Yi(this.databaseId,n),r.We(function(i){const s=yi(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Ge()}hn(e,n,r){if(r===null)return[];let i=[];i.push(new oa);let s=0;for(const o of yi(e)){const a=r[s++];for(const u of i)if(this.gn(n,o.fieldPath)&&Eu(a))i=this.yn(i,o,a);else{const l=u.We(o.kind);Ei.be._e(a,l)}}return this.pn(i)}an(e,n,r){return this.hn(e,n,r.position)}pn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Ge();return n}yn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new oa;u.seed(a.Ge()),Ei.be._e(o,u.We(n.kind)),s.push(u)}return s}gn(e,n){return!!e.filters.find(r=>r instanceof W&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=zl(e),i=ua(e);return(n?r.j("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.j()).next(s=>{const o=[];return w.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(l,c){const h=c?new ih(c.sequenceNumber,new Bt(ts(c.readTime),new R(An(c.documentKey)),c.largestBatchId)):ih.empty(),d=l.fields.map(([f,y])=>new XL(Ae.fromServerFormat(f),y));return new wk(l.indexId,l.collectionGroup,d,h)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:j(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=zl(e),s=ua(e);return this.In(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>w.forEach(a,u=>s.put(U_(u.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return w.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?w.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),w.forEach(a,u=>this.Tn(e,i,u).next(l=>{const c=this.En(s,u);return l.isEqual(c)?w.resolve():this.An(e,s,u,l,c)}))))})}Rn(e,n,r,i){return aa(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,n.key),documentKey:n.key.path.toArray()})}vn(e,n,r,i){return aa(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,n.key),n.key.path.toArray()])}Tn(e,n,r){const i=aa(e);let s=new le(fr);return i.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,n)])},(o,a)=>{s=s.add(new Si(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}En(e,n){let r=new le(fr);const i=this.wn(n,e);if(i==null)return r;const s=bm(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Eu(o))for(const a of o.arrayValue.values||[])r=r.add(new Si(n.indexId,e.key,this.fn(a),i))}else r=r.add(new Si(n.indexId,e.key,Vl,i));return r}An(e,n,r,i,s){k("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,u,l,c,h){const d=a.getIterator(),f=u.getIterator();let y=vs(d),v=vs(f);for(;y||v;){let E=!1,m=!1;if(y&&v){const p=l(y,v);p<0?m=!0:p>0&&(E=!0)}else y!=null?m=!0:E=!0;E?(c(v),v=vs(f)):m?(h(y),y=vs(d)):(y=vs(d),v=vs(f))}}(i,s,fr,a=>{o.push(this.Rn(e,n,r,a))},a=>{o.push(this.vn(e,n,r,a))}),w.waitFor(o)}In(e){let n=1;return ua(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>fr(o,a)).filter((o,a,u)=>!a||fr(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=fr(o,e),u=fr(o,n);if(a===0)i[0]=e.He();else if(a>0&&u<0)i.push(o),i.push(o.He());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Pn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Vl,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Vl,[]];s.push(IDBKeyRange.bound(a,u))}return s}Pn(e,n){return fr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(W_)}getMinOffset(e,n){return w.mapArray(this.un(n),r=>this.cn(e,r).next(i=>i||D())).next(W_)}}function K_(t){return He(t,"collectionParents")}function aa(t){return He(t,"indexEntries")}function zl(t){return He(t,"indexConfiguration")}function ua(t){return He(t,"indexState")}function W_(t){F(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Zy(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Bt(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Tt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Tt(e,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.X({range:o},(c,h,d)=>(a++,d.delete()));s.push(u.next(()=>{F(a===1)}));const l=[];for(const c of n.mutations){const h=kk(e,c.key.path,n.batchId);s.push(i.delete(h)),l.push(c.key)}return w.waitFor(s).next(()=>l)}function ch(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw D();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(41943040,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);class Ld{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.bn={}}static fe(e,n,r,i){F(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Ld(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return pr(e).X({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Es(e),o=pr(e);return o.add({}).next(a=>{F(typeof a=="number");const u=new av(a,n,r,i),l=function(d,f,y){const v=y.baseMutations.map(m=>ku(d.le,m)),E=y.mutations.map(m=>ku(d.le,m));return{userId:f,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:v,mutations:E}}(this.serializer,this.userId,u),c=[];let h=new le((d,f)=>j(d.canonicalString(),f.canonicalString()));for(const d of i){const f=kk(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(l)),c.push(s.put(f,rM))}return h.forEach(d=>{c.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.bn[a]=u.keys()}),w.waitFor(c).next(()=>u)})}lookupMutationBatch(e,n){return pr(e).get(n).next(r=>r?(F(r.userId===this.userId),Ii(this.serializer,r)):null)}Vn(e,n){return this.bn[n]?w.resolve(this.bn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.bn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return pr(e).X({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(F(a.batchId>=r),s=Ii(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return pr(e).X({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return pr(e).j("userMutationsIndex",n).next(r=>r.map(i=>Ii(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=uc(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Es(e).X({range:i},(o,a,u)=>{const[l,c,h]=o,d=An(c);if(l===this.userId&&n.path.isEqual(d))return pr(e).get(h).next(f=>{if(!f)throw D();F(f.userId===this.userId),s.push(Ii(this.serializer,f))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new le(j);const i=[];return n.forEach(s=>{const o=uc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=Es(e).X({range:a},(l,c,h)=>{const[d,f,y]=l,v=An(f);d===this.userId&&s.path.isEqual(v)?r=r.add(y):h.done()});i.push(u)}),w.waitFor(i).next(()=>this.Sn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=uc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new le(j);return Es(e).X({range:o},(u,l,c)=>{const[h,d,f]=u,y=An(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(f)):c.done()}).next(()=>this.Sn(e,a))}Sn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(pr(e).get(s).next(o=>{if(o===null)throw D();F(o.userId===this.userId),r.push(Ii(this.serializer,o))}))}),w.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return EC(e.at,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Dn(n.batchId)}),w.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Dn(e){delete this.bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return w.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return Es(e).X({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=An(s[1]);i.push(u)}else a.done()}).next(()=>{F(i.length===0)})})}containsKey(e,n){return SC(e,this.userId,n)}Cn(e){return TC(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function SC(t,e,n){const r=uc(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Es(t).X({range:s,Y:!0},(a,u,l)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function pr(t){return He(t,"mutations")}function Es(t){return He(t,"documentMutations")}function TC(t){return He(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new ns(0)}static kn(){return new ns(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gF{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Mn(e).next(n=>{const r=new ns(n.highestTargetId);return n.highestTargetId=r.next(),this.On(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Mn(e).next(n=>M.fromTimestamp(new me(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Mn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Mn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.On(e,i)))}addTargetData(e,n){return this.$n(e,n).next(()=>this.Mn(e).next(r=>(r.targetCount+=1,this.Fn(n,r),this.On(e,r))))}updateTargetData(e,n){return this.$n(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ws(e).delete(n.targetId)).next(()=>this.Mn(e)).next(r=>(F(r.targetCount>0),r.targetCount-=1,this.On(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return ws(e).X((o,a)=>{const u=Ia(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>w.waitFor(s)).next(()=>i)}forEachTarget(e,n){return ws(e).X((r,i)=>{const s=Ia(i);n(s)})}Mn(e){return H_(e).get("targetGlobalKey").next(n=>(F(n!==null),n))}On(e,n){return H_(e).put("targetGlobalKey",n)}$n(e,n){return ws(e).put(wC(this.serializer,n))}Fn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Mn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Xi(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ws(e).X({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const l=Ia(a);tl(n,l.target)&&(s=l,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=_r(e);return n.forEach(o=>{const a=_t(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),w.waitFor(i)}removeMatchingKeys(e,n,r){const i=_r(e);return w.forEach(n,s=>{const o=_t(s.path);return w.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=_r(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=_r(e);let s=B();return i.X({range:r,Y:!0},(o,a,u)=>{const l=An(o[1]),c=new R(l);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=_t(n.path),i=IDBKeyRange.bound([r],[vk(r)],!1,!0);let s=0;return _r(e).X({index:"documentTargetsIndex",Y:!0,range:i},([o,a],u,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}he(e,n){return ws(e).get(n).next(r=>r?Ia(r):null)}}function ws(t){return He(t,"targets")}function H_(t){return He(t,"targetGlobal")}function _r(t){return He(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_([t,e],[n,r]){const i=j(t,n);return i===0?j(e,r):i}class yF{constructor(e){this.Bn=e,this.buffer=new le(Q_),this.Ln=0}qn(){return++this.Ln}Un(e){const n=[e,this.qn()];if(this.buffer.size<this.Bn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Q_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class vF{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Kn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Gn(6e4)}stop(){this.Kn&&(this.Kn.cancel(),this.Kn=null)}get started(){return this.Kn!==null}Gn(e){k("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Kn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Kn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ui(n)?k("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await ai(n)}await this.Gn(3e5)})}}class wF{constructor(e,n){this.Qn=e,this.params=n}calculateTargetCount(e,n){return this.Qn.jn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return w.resolve(Nt.ct);const r=new yF(n);return this.Qn.forEachTarget(e,i=>r.Un(i.sequenceNumber)).next(()=>this.Qn.zn(e,i=>r.Un(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Qn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Qn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(k("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(G_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(k("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),G_):this.Wn(e,n))}getCacheSize(e){return this.Qn.getCacheSize(e)}Wn(e,n){let r,i,s,o,a,u,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(k("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),Nm()<=Q.DEBUG&&k("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(l-u)+`ms
Total Duration: ${l-c}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function _F(t,e){return new wF(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IF{constructor(e,n){this.db=e,this.garbageCollector=_F(this,n)}jn(e){const n=this.Hn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Hn(e){let n=0;return this.zn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}zn(e,n){return this.Jn(e,(r,i)=>n(i))}addReference(e,n,r){return jl(e,r)}removeReference(e,n,r){return jl(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return jl(e,n)}Yn(e,n){return function(r,i){let s=!1;return TC(r).Z(o=>SC(r,o,i).next(a=>(a&&(s=!0),w.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Jn(e,(o,a)=>{if(a<=n){const u=this.Yn(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,M.min()),_r(e).delete([0,_t(o.path)])))});i.push(u)}}).next(()=>w.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return jl(e,n)}Jn(e,n){const r=_r(e);let i,s=Nt.ct;return r.X({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:l})=>{o===0?(s!==Nt.ct&&n(new R(An(i)),s),s=l,i=u):s=Nt.ct}).next(()=>{s!==Nt.ct&&n(new R(An(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function jl(t,e){return _r(t).put(function(n,r){return{targetId:0,path:_t(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(){this.changes=new li(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,qe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?w.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EF{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return fi(e).put(r)}removeEntry(e,n,r){return fi(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],uh(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Xn(e,r)))}getEntry(e,n){let r=qe.newInvalidDocument(n);return fi(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(la(n))},(i,s)=>{r=this.Zn(n,s)}).next(()=>r)}ts(e,n){let r={size:0,document:qe.newInvalidDocument(n)};return fi(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(la(n))},(i,s)=>{r={document:this.Zn(n,s),size:ch(s)}}).next(()=>r)}getEntries(e,n){let r=Rt();return this.es(e,n,(i,s)=>{const o=this.Zn(i,s);r=r.insert(i,o)}).next(()=>r)}ns(e,n){let r=Rt(),i=new oe(R.comparator);return this.es(e,n,(s,o)=>{const a=this.Zn(s,o);r=r.insert(s,a),i=i.insert(s,ch(o))}).next(()=>({documents:r,ss:i}))}es(e,n,r){if(n.isEmpty())return w.resolve();let i=new le(J_);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(la(i.first()),la(i.last())),o=i.getIterator();let a=o.getNext();return fi(e).X({index:"documentKeyIndex",range:s},(u,l,c)=>{const h=R.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&J_(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,l),a=o.hasNext()?o.getNext():null),a?c.G(la(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i){const s=n.path,o=[s.popLast().toArray(),s.lastSegment(),uh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return fi(e).j(IDBKeyRange.bound(o,a,!0)).next(u=>{let l=Rt();for(const c of u){const h=this.Zn(R.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);h.isFoundDocument()&&(rl(n,h)||i.has(h.key))&&(l=l.insert(h.key,h))}return l})}getAllFromCollectionGroup(e,n,r,i){let s=Rt();const o=X_(n,r),a=X_(n,Bt.max());return fi(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,l,c)=>{const h=this.Zn(R.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);s=s.insert(h.key,h),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new SF(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return Y_(e).get("remoteDocumentGlobalKey").next(n=>(F(!!n),n))}Xn(e,n){return Y_(e).put("remoteDocumentGlobalKey",n)}Zn(e,n){if(n){const r=oF(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(M.min())))return r}return qe.newInvalidDocument(e)}}function CC(t){return new EF(t)}class SF extends kC{constructor(e,n){super(),this.rs=e,this.trackRemovals=n,this.os=new li(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new le((s,o)=>j(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.os.get(s);if(n.push(this.rs.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=M_(this.rs.serializer,o);i=i.add(s.path.popLast());const l=ch(u);r+=l-a.size,n.push(this.rs.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=M_(this.rs.serializer,o.convertToNoDocument(M.min()));n.push(this.rs.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.rs.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.rs.updateMetadata(e,r)),w.waitFor(n)}getFromCache(e,n){return this.rs.ts(e,n).next(r=>(this.os.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.rs.ns(e,n).next(({documents:r,ss:i})=>(i.forEach((s,o)=>{this.os.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Y_(t){return He(t,"remoteDocumentGlobal")}function fi(t){return He(t,"remoteDocumentsV14")}function la(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function X_(t,e){const n=e.documentKey.path.toArray();return[t,uh(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function J_(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=j(n[s],r[s]),i)return i;return i=j(n.length,r.length),i||(i=j(n[n.length-2],r[r.length-2]),i||j(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ua(r.mutation,i,bt.empty(),me.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,B()).next(()=>r))}getLocalViewOfDocuments(e,n,r=B()){const i=Nn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=wa();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Nn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,B()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Rt();const o=Fa(),a=Fa();return n.forEach((u,l)=>{const c=r.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof lr)?s=s.insert(l.key,l):c!==void 0?(o.set(l.key,c.mutation.getFieldMask()),Ua(c.mutation,l,c.mutation.getFieldMask(),me.now())):o.set(l.key,bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new TF(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Fa();let i=new oe((o,a)=>o-a),s=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=r.get(u)||bt.empty();c=a.applyToLocalView(l,c),r.set(u,c);const h=(i.get(a.batchId)||B()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=Wk();c.forEach(d=>{if(!s.has(d)){const f=eC(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return w.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return R.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):iv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):w.resolve(Nn());let a=-1,u=s;return o.next(l=>w.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?w.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{u=u.insert(c,d)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,u,l,B())).next(c=>({batchId:a,changes:Kk(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new R(n)).next(r=>{let i=wa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=wa();return this.indexManager.getCollectionParents(e,i).next(o=>w.forEach(o,a=>{const u=function(l,c){return new ur(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r).next(l=>{l.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,u)=>{const l=u.getKey();s.get(l)===null&&(s=s.insert(l,qe.newInvalidDocument(l)))});let o=wa();return s.forEach((a,u)=>{const l=i.get(a);l!==void 0&&Ua(l.mutation,u,bt.empty(),me.now()),rl(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kF{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return w.resolve(this.us.get(n))}saveBundleMetadata(e,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:Ne(r.createTime)}),w.resolve()}getNamedQuery(e,n){return w.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(r){return{name:r.name,query:fv(r.bundledQuery),readTime:Ne(r.readTime)}}(n)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CF{constructor(){this.overlays=new oe(R.comparator),this.hs=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Nn();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.de(e,n,s)}),w.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hs.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hs.delete(r)),w.resolve()}getOverlaysForCollection(e,n,r){const i=Nn(),s=n.length+1,o=new R(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return w.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new oe((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let c=s.get(l.largestBatchId);c===null&&(c=Nn(),s=s.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=Nn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return w.resolve(a)}de(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(r.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lv(n,r));let s=this.hs.get(n);s===void 0&&(s=B(),this.hs.set(n,s)),this.hs.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(){this.ls=new le(Ue.fs),this.ds=new le(Ue._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gs(new Ue(e,n))}ys(e,n){e.forEach(r=>this.removeReference(r,n))}ps(e){const n=new R(new Y([])),r=new Ue(n,e),i=new Ue(n,e+1),s=[];return this.ds.forEachInRange([r,i],o=>{this.gs(o),s.push(o.key)}),s}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new R(new Y([])),r=new Ue(n,e),i=new Ue(n,e+1);let s=B();return this.ds.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ue(e,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return R.comparator(e.key,n.key)||j(e.Es,n.Es)}static _s(e,n){return j(e.Es,n.Es)||R.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new le(Ue.fs)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new av(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Ue(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ps(r),s=i<0?0:i;return w.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),i=new Ue(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.vs(o.Es);s.push(a)}),w.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new le(j);return n.forEach(i=>{const s=new Ue(i,0),o=new Ue(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.Es)})}),w.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;R.isDocumentKey(s)||(s=s.child(""));const o=new Ue(new R(s),0);let a=new le(j);return this.Rs.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.Es)),!0)},o),w.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(r=>{const i=this.vs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){F(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return w.forEach(n.mutations,i=>{const s=new Ue(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Dn(e){}containsKey(e,n){const r=new Ue(n,0),i=this.Rs.firstAfterOrEqual(r);return w.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NF{constructor(e){this.Ss=e,this.docs=new oe(R.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return w.resolve(r?r.document.mutableCopy():qe.newInvalidDocument(n))}getEntries(e,n){let r=Rt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():qe.newInvalidDocument(i))}),w.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Rt();const o=n.path,a=new R(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:l,value:{document:c}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Zy(Ik(c),r)<=0||(i.has(c.key)||rl(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return w.resolve(s)}getAllFromCollectionGroup(e,n,r,i){D()}Ds(e,n){return w.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new bF(this)}getSize(e){return w.resolve(this.size)}}class bF extends kC{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.rs.addEntry(e,i)):this.rs.removeEntry(r)}),w.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RF{constructor(e){this.persistence=e,this.Cs=new li(n=>Xi(n),tl),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.xs=0,this.Ns=new gv,this.targetCount=0,this.ks=ns.Nn()}forEachTarget(e,n){return this.Cs.forEach((r,i)=>n(i)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),w.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new ns(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.$n(n),w.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),w.waitFor(s).next(()=>i)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cs.get(n)||null;return w.resolve(r)}addMatchingKeys(e,n,r){return this.Ns.ws(n,r),w.resolve()}removeMatchingKeys(e,n,r){this.Ns.ys(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),w.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),w.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ns.Ts(n);return w.resolve(r)}containsKey(e,n){return w.resolve(this.Ns.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e,n){this.Ms={},this.overlays={},this.Os=new Nt(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new RF(this),this.indexManager=new pF,this.remoteDocumentCache=function(r){return new NF(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new vC(n),this.Ls=new kF(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new CF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ms[e.toKey()];return r||(r=new AF(n,this.referenceDelegate),this.Ms[e.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,r){k("MemoryPersistence","Starting transaction:",e);const i=new PF(this.Os.next());return this.referenceDelegate.qs(),r(i).next(s=>this.referenceDelegate.Us(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ks(e,n){return w.or(Object.values(this.Ms).map(r=>()=>r.containsKey(e,n)))}}class PF extends Sk{constructor(e){super(),this.currentSequenceNumber=e}}class Md{constructor(e){this.persistence=e,this.Gs=new gv,this.Qs=null}static js(e){return new Md(e)}get zs(){if(this.Qs)return this.Qs;throw D()}addReference(e,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),w.resolve()}removeReference(e,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),w.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(i=>this.zs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.zs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.zs,r=>{const i=R.fromPath(r);return this.Ws(e,i).next(s=>{s||n.removeEntry(i,M.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return w.or([()=>w.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xF{constructor(e){this.serializer=e}$(e,n,r,i){const s=new Rd("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",p_,{unique:!0}),a.createObjectStore("documentMutations")}(e),Z_(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=w.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),Z_(e)),o=o.next(()=>function(a){const u=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:M.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,u){return u.store("mutations").j().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",p_,{unique:!0});const c=u.store("mutations"),h=l.map(d=>c.put(d));return w.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Js(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ys(s)))),r<7&&i>=7&&(o=o.next(()=>this.Xs(s))),r<8&&i>=8&&(o=o.next(()=>this.Zs(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ti(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const u=a.createObjectStore("documentOverlays",{keyPath:mM});u.createIndex("collectionPathOverlayIndex",gM,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",yM,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const u=a.createObjectStore("remoteDocumentsV14",{keyPath:iM});u.createIndex("documentKeyIndex",sM),u.createIndex("collectionGroupIndex",oM)}(e)).next(()=>this.ei(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ni(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:hM}).createIndex("sequenceNumberIndex",dM,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:fM}).createIndex("documentKeyIndex",pM,{unique:!1})}(e))),o}Ys(e){let n=0;return e.store("remoteDocuments").X((r,i)=>{n+=ch(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Js(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.j().next(i=>w.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>w.forEach(a,u=>{F(u.userId===s.userId);const l=Ii(this.serializer,u);return EC(e,s.userId,l).next(()=>{})}))}))}Xs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.X((o,a)=>{const u=new Y(o),l=function(c){return[0,_t(c)]}(u);s.push(n.get(l).next(c=>c?w.resolve():(h=>n.put({targetId:0,path:_t(h),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>w.waitFor(s))})}Zs(e,n){e.createObjectStore("collectionParents",{keyPath:cM});const r=n.store("collectionParents"),i=new mv,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:_t(u)})}};return n.store("remoteDocuments").X({Y:!0},(o,a)=>{const u=new Y(o);return s(u.popLast())}).next(()=>n.store("documentMutations").X({Y:!0},([o,a,u],l)=>{const c=An(a);return s(c.popLast())}))}ti(e){const n=e.store("targets");return n.X((r,i)=>{const s=Ia(i),o=wC(this.serializer,s);return n.put(o)})}ei(e,n){const r=n.store("remoteDocuments"),i=[];return r.X((s,o)=>{const a=n.store("remoteDocumentsV14"),u=(l=o,l.document?new R(Y.fromString(l.document.name).popFirst(5)):l.noDocument?R.fromSegments(l.noDocument.path):l.unknownDocument?R.fromSegments(l.unknownDocument.path):D()).path.toArray();var l;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>w.waitFor(i))}ni(e,n){const r=n.store("mutations"),i=CC(this.serializer),s=new NC(Md.js,this.serializer.le);return r.j().next(o=>{const a=new Map;return o.forEach(u=>{var l;let c=(l=a.get(u.userId))!==null&&l!==void 0?l:B();Ii(this.serializer,u).keys().forEach(h=>c=c.add(h)),a.set(u.userId,c)}),w.forEach(a,(u,l)=>{const c=new ze(l),h=$d.fe(this.serializer,c),d=s.getIndexManager(c),f=Ld.fe(c,this.serializer,d,s.referenceDelegate);return new AC(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Rm(n,Nt.ct),u).next()})})}}function Z_(t){t.createObjectStore("targetDocuments",{keyPath:uM}).createIndex("documentTargetsIndex",lM,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",aM,{unique:!0}),t.createObjectStore("targetGlobal")}const Jf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class yv{constructor(e,n,r,i,s,o,a,u,l,c,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.si=s,this.window=o,this.document=a,this.ii=l,this.ri=c,this.oi=h,this.Os=null,this.$s=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.ai=null,this.hi=Number.NEGATIVE_INFINITY,this.li=d=>Promise.resolve(),!yv.D())throw new S(_.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new IF(this,i),this.fi=n+"main",this.serializer=new vC(u),this.di=new cn(this.fi,this.oi,new xF(this.serializer)),this.Fs=new gF(this.referenceDelegate,this.serializer),this.remoteDocumentCache=CC(this.serializer),this.Ls=new aF,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,c===!1&&Ce("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new S(_.FAILED_PRECONDITION,Jf);return this.mi(),this.gi(),this.yi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Fs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new Nt(e,this.ii)}).then(()=>{this.$s=!0}).catch(e=>(this.di&&this.di.close(),Promise.reject(e)))}pi(e){return this.li=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.di.B(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.si.enqueueAndForget(async()=>{this.started&&await this.wi()}))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Bl(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ii(e).next(n=>{n||(this.isPrimary=!1,this.si.enqueueRetryable(()=>this.li(!1)))})}).next(()=>this.Ti(e)).next(n=>this.isPrimary&&!n?this.Ei(e).next(()=>!1):!!n&&this.Ai(e).next(()=>!0))).catch(e=>{if(ui(e))return k("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return k("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.si.enqueueRetryable(()=>this.li(e)),this.isPrimary=e})}Ii(e){return ca(e).get("owner").next(n=>w.resolve(this.Ri(n)))}vi(e){return Bl(e).delete(this.clientId)}async Pi(){if(this.isPrimary&&!this.bi(this.hi,18e5)){this.hi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=He(n,"clientMetadata");return r.j().next(i=>{const s=this.Vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return w.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const n of e)this._i.removeItem(this.Si(n.clientId))}}yi(){this.ai=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.wi().then(()=>this.Pi()).then(()=>this.yi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ti(e){return this.ri?w.resolve(!0):ca(e).get("owner").next(n=>{if(n!==null&&this.bi(n.leaseTimestampMs,5e3)&&!this.Di(n.ownerId)){if(this.Ri(n)&&this.networkEnabled)return!0;if(!this.Ri(n)){if(!n.allowTabSynchronization)throw new S(_.FAILED_PRECONDITION,Jf);return!1}}return!(!this.networkEnabled||!this.inForeground)||Bl(e).j().next(r=>this.Vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&k("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.$s=!1,this.Ci(),this.ai&&(this.ai.cancel(),this.ai=null),this.xi(),this.Ni(),await this.di.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Rm(e,Nt.ct);return this.Ei(n).next(()=>this.vi(n))}),this.di.close(),this.ki()}Vi(e,n){return e.filter(r=>this.bi(r.updateTimeMs,n)&&!this.Di(r.clientId))}Mi(){return this.runTransaction("getActiveClients","readonly",e=>Bl(e).j().next(n=>this.Vi(n,18e5).map(r=>r.clientId)))}get started(){return this.$s}getMutationQueue(e,n){return Ld.fe(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new mF(e,this.serializer.le.databaseId)}getDocumentOverlayCache(e){return $d.fe(this.serializer,e)}getBundleCache(){return this.Ls}runTransaction(e,n,r){k("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.oi)===15?wM:o===14?Nk:o===13?Ak:o===12?vM:o===11?Ck:void D();var o;let a;return this.di.runTransaction(e,i,s,u=>(a=new Rm(u,this.Os?this.Os.next():Nt.ct),n==="readwrite-primary"?this.Ii(a).next(l=>!!l||this.Ti(a)).next(l=>{if(!l)throw Ce(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.si.enqueueRetryable(()=>this.li(!1)),new S(_.FAILED_PRECONDITION,Ek);return r(a)}).next(l=>this.Ai(a).next(()=>l)):this.Oi(a).next(()=>r(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Oi(e){return ca(e).get("owner").next(n=>{if(n!==null&&this.bi(n.leaseTimestampMs,5e3)&&!this.Di(n.ownerId)&&!this.Ri(n)&&!(this.ri||this.allowTabSynchronization&&n.allowTabSynchronization))throw new S(_.FAILED_PRECONDITION,Jf)})}Ai(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ca(e).put("owner",n)}static D(){return cn.D()}Ei(e){const n=ca(e);return n.get("owner").next(r=>this.Ri(r)?(k("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):w.resolve())}bi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Ce(`Detected an update time that is in the future: ${e} > ${r}`),!1))}mi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ci=()=>{this.si.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.wi()))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground=this.document.visibilityState==="visible")}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ui=()=>{this.Ci();const n=/(?:Version|Mobile)\/1[456]/;gP()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ui))}Ni(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Di(e){var n;try{const r=((n=this._i)===null||n===void 0?void 0:n.getItem(this.Si(e)))!==null;return k("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ce("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ci(){if(this._i)try{this._i.setItem(this.Si(this.clientId),String(Date.now()))}catch(e){Ce("Failed to set zombie client id.",e)}}ki(){if(this._i)try{this._i.removeItem(this.Si(this.clientId))}catch{}}Si(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ca(t){return He(t,"owner")}function Bl(t){return He(t,"clientMetadata")}function vv(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Fi=i}static Bi(e,n){let r=B(),i=B();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new wv(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ui(e,n).next(s=>s||this.Ki(e,n,i,r)).next(s=>s||this.Gi(e,n))}Ui(e,n){if(C_(n))return w.resolve(null);let r=$t(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ah(n,null,"F"),r=$t(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=B(...s);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const l=this.Qi(n,a);return this.ji(n,l,o,u.readTime)?this.Ui(e,ah(n,null,"F")):this.zi(e,l,n,u)}))})))}Ki(e,n,r,i){return C_(n)||i.isEqual(M.min())?this.Gi(e,n):this.qi.getDocuments(e,r).next(s=>{const o=this.Qi(n,s);return this.ji(n,o,r,i)?this.Gi(e,n):(Nm()<=Q.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Fm(n)),this.zi(e,o,n,_k(i,-1)))})}Qi(e,n){let r=new le(Bk(e));return n.forEach((i,s)=>{rl(e,s)&&(r=r.add(s))}),r}ji(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(e,n){return Nm()<=Q.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Fm(n)),this.qi.getDocumentsMatchingQuery(e,n,Bt.min())}zi(e,n,r,i){return this.qi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DF{constructor(e,n,r,i){this.persistence=e,this.Wi=n,this.serializer=i,this.Hi=new oe(j),this.Ji=new li(s=>Xi(s),tl),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(r)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new AC(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function RC(t,e,n,r){return new DF(t,e,n,r)}async function PC(t,e){const n=P(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Zi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=B();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of s){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(r,u).next(l=>({tr:l,removedBatchIds:o,addedBatchIds:a}))})})}function OF(t,e){const n=P(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let d=w.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(y=>{const v=u.docVersions.get(f);F(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),l.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=B();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function xC(t){const e=P(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function $F(t,e){const n=P(t),r=e.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Fs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Le.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(y,v,E){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,f,c)&&a.push(n.Fs.updateTargetData(s,f))});let u=Rt(),l=B();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(DC(s,o,e.documentUpdates).next(c=>{u=c.er,l=c.nr})),!r.isEqual(M.min())){const c=n.Fs.getLastRemoteSnapshotVersion(s).next(h=>n.Fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return w.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(n.Hi=i,s))}function DC(t,e,n){let r=B(),i=B();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Rt();return n.forEach((a,u)=>{const l=s.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(M.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):k("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{er:o,nr:i}})}function LF(t,e){const n=P(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vo(t,e){const n=P(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Fs.getTargetData(r,e).next(s=>s?(i=s,w.resolve(i)):n.Fs.allocateTargetId(r).next(o=>(i=new Gn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Hi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(r.targetId,r),n.Ji.set(e,r.targetId)),r})}async function wo(t,e,n){const r=P(t),i=r.Hi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ui(o))throw o;k("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Hi=r.Hi.remove(e),r.Ji.delete(i.target)}function hh(t,e,n){const r=P(t);let i=M.min(),s=B();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=P(a),h=c.Ji.get(l);return h!==void 0?w.resolve(c.Hi.get(h)):c.Fs.getTargetData(u,l)}(r,o,$t(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,e,n?i:M.min(),n?s:B())).next(a=>(LC(r,jk(e),a),{documents:a,sr:s})))}function OC(t,e){const n=P(t),r=P(n.Fs),i=n.Hi.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.he(s,e).next(o=>o?o.target:null))}function $C(t,e){const n=P(t),r=n.Yi.get(e)||M.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Xi.getAllFromCollectionGroup(i,e,_k(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(LC(n,e,i),i))}function LC(t,e,n){let r=t.Yi.get(e)||M.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Yi.set(e,r)}async function MF(t,e,n,r){const i=P(t);let s=B(),o=Rt();for(const l of n){const c=e.ir(l.metadata.name);l.document&&(s=s.add(c));const h=e.rr(l);h.setReadTime(e.ur(l.metadata.readTime)),o=o.insert(c,h)}const a=i.Xi.newChangeBuffer({trackRemovals:!0}),u=await vo(i,function(l){return $t(Lo(Y.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",l=>DC(l,a,o).next(c=>(a.apply(l),c)).next(c=>i.Fs.removeMatchingKeysForTargetId(l,u.targetId).next(()=>i.Fs.addMatchingKeys(l,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(l,c.er,c.nr)).next(()=>c.er)))}async function FF(t,e,n=B()){const r=await vo(t,$t(fv(e.bundledQuery))),i=P(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Ne(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ls.saveNamedQuery(s,e);const a=r.withResumeToken(Le.EMPTY_BYTE_STRING,o);return i.Hi=i.Hi.insert(a.targetId,a),i.Fs.updateTargetData(s,a).next(()=>i.Fs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Fs.addMatchingKeys(s,n,r.targetId)).next(()=>i.Ls.saveNamedQuery(s,e))})}function e1(t,e){return`firestore_clients_${t}_${e}`}function t1(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Zf(t,e){return`firestore_targets_${t}_${e}`}class dh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static cr(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new S(i.error.code,i.error.message))),o?new dh(e,n,i.state,s):(Ce("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ar(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Va{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static cr(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new S(r.error.code,r.error.message))),s?new Va(e,r.state,i):(Ce("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ar(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class fh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static cr(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=sv();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=Tk(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new fh(e,s):(Ce("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class _v{constructor(e,n){this.clientId=e,this.onlineState=n}static cr(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new _v(n.clientId,n.onlineState):(Ce("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Km{constructor(){this.activeTargetIds=sv()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ep{constructor(e,n,r,i,s){this.window=e,this.si=n,this.persistenceKey=r,this.dr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.wr.bind(this),this.mr=new oe(j),this.started=!1,this.gr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.yr=e1(this.persistenceKey,this.dr),this.pr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.mr=this.mr.insert(this.dr,new Km),this.Ir=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Tr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Er=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Ar=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Mi();for(const r of e){if(r===this.dr)continue;const i=this.getItem(e1(this.persistenceKey,r));if(i){const s=fh.cr(r,i);s&&(this.mr=this.mr.insert(s.clientId,s))}}this.vr();const n=this.storage.getItem(this.Ar);if(n){const r=this.Pr(n);r&&this.br(r)}for(const r of this.gr)this.wr(r);this.gr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.pr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Vr(this.mr)}isActiveQueryTarget(e){let n=!1;return this.mr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Sr(e,"pending")}updateMutationState(e,n,r){this.Sr(e,n,r),this.Dr(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Zf(this.persistenceKey,e));if(r){const i=Va.cr(e,r);i&&(n=i.state)}}return this.Cr.hr(e),this.vr(),n}removeLocalQueryTarget(e){this.Cr.lr(e),this.vr()}isLocalQueryTarget(e){return this.Cr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Zf(this.persistenceKey,e))}updateQueryState(e,n,r){this.Nr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Dr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.kr(e)}notifyBundleLoaded(e){this.Mr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.yr),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return k("SharedClientState","READ",e,n),n}setItem(e,n){k("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){k("SharedClientState","REMOVE",e),this.storage.removeItem(e)}wr(e){const n=e;if(n.storageArea===this.storage){if(k("SharedClientState","EVENT",n.key,n.newValue),n.key===this.yr)return void Ce("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Ir.test(n.key)){if(n.newValue==null){const r=this.Or(n.key);return this.$r(r,null)}{const r=this.Fr(n.key,n.newValue);if(r)return this.$r(r.clientId,r)}}else if(this.Tr.test(n.key)){if(n.newValue!==null){const r=this.Br(n.key,n.newValue);if(r)return this.Lr(r)}}else if(this.Er.test(n.key)){if(n.newValue!==null){const r=this.qr(n.key,n.newValue);if(r)return this.Ur(r)}}else if(n.key===this.Ar){if(n.newValue!==null){const r=this.Pr(n.newValue);if(r)return this.br(r)}}else if(n.key===this.pr){const r=function(i){let s=Nt.ct;if(i!=null)try{const o=JSON.parse(i);F(typeof o=="number"),s=o}catch(o){Ce("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==Nt.ct&&this.sequenceNumberHandler(r)}else if(n.key===this.Rr){const r=this.Kr(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Gr(i)))}}}else this.gr.push(n)})}}get Cr(){return this.mr.get(this.dr)}vr(){this.setItem(this.yr,this.Cr.ar())}Sr(e,n,r){const i=new dh(this.currentUser,e,n,r),s=t1(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ar())}Dr(e){const n=t1(this.persistenceKey,this.currentUser,e);this.removeItem(n)}kr(e){const n={clientId:this.dr,onlineState:e};this.storage.setItem(this.Ar,JSON.stringify(n))}Nr(e,n,r){const i=Zf(this.persistenceKey,e),s=new Va(e,n,r);this.setItem(i,s.ar())}Mr(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Rr,n)}Or(e){const n=this.Ir.exec(e);return n?n[1]:null}Fr(e,n){const r=this.Or(e);return fh.cr(r,n)}Br(e,n){const r=this.Tr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return dh.cr(new ze(s),i,n)}qr(e,n){const r=this.Er.exec(e),i=Number(r[1]);return Va.cr(i,n)}Pr(e){return _v.cr(e)}Kr(e){return JSON.parse(e)}async Lr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Qr(e.batchId,e.state,e.error);k("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Ur(e){return this.syncEngine.jr(e.targetId,e.state,e.error)}$r(e,n){const r=n?this.mr.insert(e,n):this.mr.remove(e),i=this.Vr(this.mr),s=this.Vr(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.zr(o,a).then(()=>{this.mr=r})}br(e){this.mr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Vr(e){let n=sv();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class MC{constructor(){this.Wr=new Km,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,r){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new Km,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UF{Jr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ql=null;function tp(){return ql===null?ql=268435456+Math.round(2147483648*Math.random()):ql++,"0x"+ql.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zF{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection";class jF extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,r,i,s){const o=tp(),a=this.Io(e,n);k("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const u={};return this.To(u,i,s),this.Eo(e,a,u,r).then(l=>(k("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw gn("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",r),l})}Ao(e,n,r,i,s,o){return this.po(e,n,r,i,s)}To(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+$o,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Io(e,n){const r=VF[e];return`${this.wo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,r,i){const s=tp();return new Promise((o,a)=>{const u=new FL;u.setWithCredentials(!0),u.listenOnce($L.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Yf.NO_ERROR:const c=u.getResponseJson();k(ut,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Yf.TIMEOUT:k(ut,`RPC '${e}' ${s} timed out`),a(new S(_.DEADLINE_EXCEEDED,"Request time out"));break;case Yf.HTTP_ERROR:const h=u.getStatus();if(k(ut,`RPC '${e}' ${s} failed with status:`,h,"response text:",u.getResponseText()),h>0){let d=u.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const y=function(v){const E=v.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(E)>=0?E:_.UNKNOWN}(f.status);a(new S(y,f.message))}else a(new S(_.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new S(_.UNAVAILABLE,"Connection failed."));break;default:D()}}finally{k(ut,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);k(ut,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",l,r,15)})}Ro(e,n,r){const i=tp(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=DL(),a=OL(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(u.xmlHttpFactory=new ML({})),this.To(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const l=s.join("");k(ut,`Creating RPC '${e}' stream ${i}: ${l}`,u);const c=o.createWebChannel(l,u);let h=!1,d=!1;const f=new zF({io:v=>{d?k(ut,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(h||(k(ut,`Opening RPC '${e}' stream ${i} transport.`),c.open(),h=!0),k(ut,`RPC '${e}' stream ${i} sending:`,v),c.send(v))},ro:()=>c.close()}),y=(v,E,m)=>{v.listen(E,p=>{try{m(p)}catch(g){setTimeout(()=>{throw g},0)}})};return y(c,Ml.EventType.OPEN,()=>{d||k(ut,`RPC '${e}' stream ${i} transport opened.`)}),y(c,Ml.EventType.CLOSE,()=>{d||(d=!0,k(ut,`RPC '${e}' stream ${i} transport closed`),f.fo())}),y(c,Ml.EventType.ERROR,v=>{d||(d=!0,gn(ut,`RPC '${e}' stream ${i} transport errored:`,v),f.fo(new S(_.UNAVAILABLE,"The operation could not be completed")))}),y(c,Ml.EventType.MESSAGE,v=>{var E;if(!d){const m=v.data[0];F(!!m);const p=m,g=p.error||((E=p[0])===null||E===void 0?void 0:E.error);if(g){k(ut,`RPC '${e}' stream ${i} received error:`,g);const I=g.status;let T=function(b){const O=Re[b];if(O!==void 0)return rC(O)}(I),N=g.message;T===void 0&&(T=_.INTERNAL,N="Unknown error status: "+I+" with message "+g.message),d=!0,f.fo(new S(T,N)),c.close()}else k(ut,`RPC '${e}' stream ${i} received:`,m),f._o(m)}}),y(a,LL.STAT_EVENT,v=>{v.stat===c_.PROXY?k(ut,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===c_.NOPROXY&&k(ut,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{f.lo()},0),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(){return typeof window<"u"?window:null}function fc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t){return new YM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.vo=r,this.Po=i,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-r);i>0&&k("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,n,r,i,s,o,a,u){this.si=e,this.Mo=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new Iv(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Ce(n.toString()),Ce("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.$o===n&&this.Xo(r,i)},r=>{e(()=>{const i=new S(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(i)})})}Xo(e,n){const r=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{r(()=>this.Zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return k("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class BF extends UC{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=ZM(this.serializer,e),r=function(i){if(!("targetChange"in i))return M.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?M.min():s.readTime?Ne(s.readTime):M.min()}(e);return this.listener.eu(n,r)}nu(e){const n={};n.database=Tu(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=sh(a)?{documents:dC(i,a)}:{query:fC(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=aC(i,s.resumeToken);const u=Um(i,s.expectedCount);u!==null&&(o.expectedCount=u)}else if(s.snapshotVersion.compareTo(M.min())>0){o.readTime=yo(i,s.snapshotVersion.toTimestamp());const u=Um(i,s.expectedCount);u!==null&&(o.expectedCount=u)}return o}(this.serializer,e);const r=tF(this.serializer,e);r&&(n.labels=r),this.zo(n)}su(e){const n={};n.database=Tu(this.serializer),n.removeTarget=e,this.zo(n)}}class qF extends UC{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(F(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=eF(e.writeResults,e.commitTime),r=Ne(e.commitTime);return this.listener.uu(r,n)}return F(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=Tu(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ku(this.serializer,r))};this.zo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KF extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new S(_.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.po(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new S(_.UNKNOWN,i.toString())})}Ao(e,n,r,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new S(_.UNKNOWN,s.toString())})}terminate(){this.hu=!0}}class WF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(Ce(n),this.wu=!1):k("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GF{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=s,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{ci(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=P(a);u.Au.add(4),await Uo(u),u.Pu.set("Unknown"),u.Au.delete(4),await ul(u)}(this))})}),this.Pu=new WF(r,i)}}async function ul(t){if(ci(t))for(const e of t.Ru)await e(!0)}async function Uo(t){for(const e of t.Ru)await e(!1)}function Fd(t,e){const n=P(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),Tv(n)?Sv(n):zo(n).Uo()&&Ev(n,e))}function Cu(t,e){const n=P(t),r=zo(n);n.Eu.delete(e),r.Uo()&&VC(n,e),n.Eu.size===0&&(r.Uo()?r.Qo():ci(n)&&n.Pu.set("Unknown"))}function Ev(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(M.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}zo(t).nu(e)}function VC(t,e){t.bu.Lt(e),zo(t).su(e)}function Sv(t){t.bu=new WM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),zo(t).start(),t.Pu.mu()}function Tv(t){return ci(t)&&!zo(t).qo()&&t.Eu.size>0}function ci(t){return P(t).Au.size===0}function zC(t){t.bu=void 0}async function HF(t){t.Eu.forEach((e,n)=>{Ev(t,e)})}async function QF(t,e){zC(t),Tv(t)?(t.Pu.pu(e),Sv(t)):t.Pu.set("Unknown")}async function YF(t,e,n){if(t.Pu.set("Online"),e instanceof oC&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Eu.delete(o),r.bu.removeTarget(o))}(t,e)}catch(r){k("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ph(t,r)}else if(e instanceof dc?t.bu.Wt(e):e instanceof sC?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(M.min()))try{const r=await xC(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.bu.ue(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.Eu.get(u);l&&i.Eu.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,u)=>{const l=i.Eu.get(a);if(!l)return;i.Eu.set(a,l.withResumeToken(Le.EMPTY_BYTE_STRING,l.snapshotVersion)),VC(i,a);const c=new Gn(l.target,a,u,l.sequenceNumber);Ev(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){k("RemoteStore","Failed to raise snapshot:",r),await ph(t,r)}}async function ph(t,e,n){if(!ui(e))throw e;t.Au.add(1),await Uo(t),t.Pu.set("Offline"),n||(n=()=>xC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await ul(t)})}function jC(t,e){return e().catch(n=>ph(t,n,e))}async function Vo(t){const e=P(t),n=Yr(e);let r=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;XF(e);)try{const i=await LF(e.localStore,r);if(i===null){e.Tu.length===0&&n.Qo();break}r=i.batchId,JF(e,i)}catch(i){await ph(e,i)}BC(e)&&qC(e)}function XF(t){return ci(t)&&t.Tu.length<10}function JF(t,e){t.Tu.push(e);const n=Yr(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function BC(t){return ci(t)&&!Yr(t).qo()&&t.Tu.length>0}function qC(t){Yr(t).start()}async function ZF(t){Yr(t).au()}async function eU(t){const e=Yr(t);for(const n of t.Tu)e.ou(n.mutations)}async function tU(t,e,n){const r=t.Tu.shift(),i=uv.from(r,e,n);await jC(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Vo(t)}async function nU(t,e){e&&Yr(t).ru&&await async function(n,r){if(i=r.code,nC(i)&&i!==_.ABORTED){const s=n.Tu.shift();Yr(n).Go(),await jC(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Vo(n)}var i}(t,e),BC(t)&&qC(t)}async function r1(t,e){const n=P(t);n.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const r=ci(n);n.Au.add(3),await Uo(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await ul(n)}async function Wm(t,e){const n=P(t);e?(n.Au.delete(2),await ul(n)):e||(n.Au.add(2),await Uo(n),n.Pu.set("Unknown"))}function zo(t){return t.Vu||(t.Vu=function(e,n,r){const i=P(e);return i.lu(),new BF(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:HF.bind(null,t),co:QF.bind(null,t),eu:YF.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),Tv(t)?Sv(t):t.Pu.set("Unknown")):(await t.Vu.stop(),zC(t))})),t.Vu}function Yr(t){return t.Su||(t.Su=function(e,n,r){const i=P(e);return i.lu(),new qF(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:ZF.bind(null,t),co:nU.bind(null,t),cu:eU.bind(null,t),uu:tU.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await Vo(t)):(await t.Su.stop(),t.Tu.length>0&&(k("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Be,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new kv(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new S(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jo(t,e){if(Ce("AsyncQueue",`${e}: ${t}`),ui(t))return new S(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.comparator=e?(n,r)=>e(n,r)||R.comparator(n.key,r.key):(n,r)=>R.comparator(n.key,r.key),this.keyedMap=wa(),this.sortedSet=new oe(this.comparator)}static emptySet(e){return new Ys(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ys)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ys;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(){this.Du=new oe(R.comparator)}track(e){const n=e.doc.key,r=this.Du.get(n);r?e.type!==0&&r.type===3?this.Du=this.Du.insert(n,e):e.type===3&&r.type!==1?this.Du=this.Du.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Du=this.Du.remove(n):e.type===1&&r.type===2?this.Du=this.Du.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):D():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,r)=>{e.push(r)}),e}}class _o{constructor(e,n,r,i,s,o,a,u,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new _o(e,n,Ys.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rU{constructor(){this.xu=void 0,this.listeners=[]}}class iU{constructor(){this.queries=new li(e=>zk(e),nl),this.onlineState="Unknown",this.Nu=new Set}}async function Cv(t,e){const n=P(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new rU),i)try{s.xu=await n.onListen(r)}catch(o){const a=jo(o,`Initialization of query '${Fm(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.ku(n.onlineState),s.xu&&e.Mu(s.xu)&&Nv(n)}async function Av(t,e){const n=P(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function sU(t,e){const n=P(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Mu(i)&&(r=!0);o.xu=i}}r&&Nv(n)}function oU(t,e,n){const r=P(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Nv(t){t.Nu.forEach(e=>{e.next()})}class bv{constructor(e,n,r){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new _o(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Uu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=_o.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aU{constructor(e,n){this.Ku=e,this.byteLength=n}Gu(){return"metadata"in this.Ku}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e){this.serializer=e}ir(e){return xn(this.serializer,e)}rr(e){return e.metadata.exists?hC(this.serializer,e.document,!1):qe.newNoDocument(this.ir(e.metadata.name),this.ur(e.metadata.readTime))}ur(e){return Ne(e)}}class uU{constructor(e,n,r){this.Qu=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=KC(e)}ju(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.Ku.namedQuery)this.queries.push(e.Ku.namedQuery);else if(e.Ku.documentMetadata){this.documents.push({metadata:e.Ku.documentMetadata}),e.Ku.documentMetadata.exists||++n;const r=Y.fromString(e.Ku.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Ku.document&&(this.documents[this.documents.length-1].document=e.Ku.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}zu(e){const n=new Map,r=new s1(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.ir(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||B()).add(s);n.set(o,a)}}return n}async complete(){const e=await MF(this.localStore,new s1(this.serializer),this.documents,this.Qu.id),n=this.zu(this.documents);for(const r of this.queries)await FF(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Wu:this.collectionGroups,Hu:e}}}function KC(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.key=e}}class GC{constructor(e){this.key=e}}class HC{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=B(),this.mutatedKeys=B(),this.Zu=Bk(e),this.tc=new Ys(this.Zu)}get ec(){return this.Ju}nc(e,n){const r=n?n.sc:new i1,i=n?n.tc:this.tc;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=rl(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;d&&f?d.data.isEqual(f.data)?y!==v&&(r.track({type:3,doc:f}),E=!0):this.ic(d,f)||(r.track({type:2,doc:f}),E=!0,(u&&this.Zu(f,u)>0||l&&this.Zu(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),E=!0):d&&!f&&(r.track({type:1,doc:d}),E=!0,(u||l)&&(a=!0)),E&&(f?(o=o.add(f),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{tc:o,sc:r,ji:a,mutatedKeys:s}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const s=e.sc.Cu();s.sort((l,c)=>function(h,d){const f=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return D()}};return f(h)-f(d)}(l.type,c.type)||this.Zu(l.doc,c.doc)),this.rc(r);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,u=a!==this.Yu;return this.Yu=a,s.length!==0||u?{snapshot:new _o(this.query,e.tc,i,s,e.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new i1,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=B(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const n=[];return e.forEach(r=>{this.Xu.has(r)||n.push(new GC(r))}),this.Xu.forEach(r=>{e.has(r)||n.push(new WC(r))}),n}ac(e){this.Ju=e.sr,this.Xu=B();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return _o.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class lU{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class cU{constructor(e){this.key=e,this.lc=!1}}class hU{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new li(a=>zk(a),nl),this._c=new Map,this.wc=new Set,this.mc=new oe(R.comparator),this.gc=new Map,this.yc=new gv,this.Ic={},this.Tc=new Map,this.Ec=ns.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function dU(t,e){const n=Ov(t);let r,i;const s=n.dc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const o=await vo(n.localStore,$t(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Rv(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Fd(n.remoteStore,o)}return i}async function Rv(t,e,n,r,i){t.Rc=(h,d,f)=>async function(y,v,E,m){let p=v.view.nc(E);p.ji&&(p=await hh(y.localStore,v.query,!1).then(({documents:T})=>v.view.nc(T,p)));const g=m&&m.targetChanges.get(v.targetId),I=v.view.applyChanges(p,y.isPrimaryClient,g);return Gm(y,v.targetId,I.uc),I.snapshot}(t,h,d,f);const s=await hh(t.localStore,e,!0),o=new HC(e,s.sr),a=o.nc(s.documents),u=ol.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,u);Gm(t,n,l.uc);const c=new lU(e,n,o);return t.dc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function fU(t,e){const n=P(t),r=n.dc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!nl(s,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await wo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Cu(n.remoteStore,r.targetId),Io(n,r.targetId)}).catch(ai)):(Io(n,r.targetId),await wo(n.localStore,r.targetId,!0))}async function pU(t,e,n){const r=$v(t);try{const i=await function(s,o){const a=P(s),u=me.now(),l=o.reduce((d,f)=>d.add(f.key),B());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Rt(),y=B();return a.Xi.getEntries(d,l).next(v=>{f=v,f.forEach((E,m)=>{m.isValidDocument()||(y=y.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(v=>{c=v;const E=[];for(const m of o){const p=BM(m,c.get(m.key).overlayedDocument);p!=null&&E.push(new lr(m.key,p,xk(p.value.mapValue),pe.exists(!0)))}return a.mutationQueue.addMutationBatch(d,u,E,o)}).next(v=>{h=v;const E=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,v.batchId,E)})}).then(()=>({batchId:h.batchId,changes:Kk(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.Ic[s.currentUser.toKey()];u||(u=new oe(j)),u=u.insert(o,a),s.Ic[s.currentUser.toKey()]=u}(r,i.batchId,n),await cr(r,i.changes),await Vo(r.remoteStore)}catch(i){const s=jo(i,"Failed to persist write");n.reject(s)}}async function QC(t,e){const n=P(t);try{const r=await $F(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.gc.get(s);o&&(F(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?F(o.lc):i.removedDocuments.size>0&&(F(o.lc),o.lc=!1))}),await cr(n,r,e)}catch(r){await ai(r)}}function o1(t,e,n){const r=P(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.dc.forEach((s,o)=>{const a=o.view.ku(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=P(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.ku(o)&&(u=!0)}),u&&Nv(a)}(r.eventManager,e),i.length&&r.fc.eu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function mU(t,e,n){const r=P(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.gc.get(e),s=i&&i.key;if(s){let o=new oe(R.comparator);o=o.insert(s,qe.newNoDocument(s,M.min()));const a=B().add(s),u=new sl(M.min(),new Map,new oe(j),o,a);await QC(r,u),r.mc=r.mc.remove(s),r.gc.delete(e),Dv(r)}else await wo(r.localStore,e,!1).then(()=>Io(r,e,n)).catch(ai)}async function gU(t,e){const n=P(t),r=e.batch.batchId;try{const i=await OF(n.localStore,e);xv(n,r,null),Pv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await cr(n,i)}catch(i){await ai(i)}}async function yU(t,e,n){const r=P(t);try{const i=await function(s,o){const a=P(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.mutationQueue.lookupMutationBatch(u,o).next(c=>(F(c!==null),l=c.keys(),a.mutationQueue.removeMutationBatch(u,c))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>a.localDocuments.getDocuments(u,l))})}(r.localStore,e);xv(r,e,n),Pv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await cr(r,i)}catch(i){await ai(i)}}async function vU(t,e){const n=P(t);ci(n.remoteStore)||k("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=P(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Tc.get(r)||[];i.push(e),n.Tc.set(r,i)}catch(r){const i=jo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Pv(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function xv(t,e,n){const r=P(t);let i=r.Ic[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ic[r.currentUser.toKey()]=i}}function Io(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.dc.delete(r),n&&t.fc.vc(r,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(r=>{t.yc.containsKey(r)||YC(t,r)})}function YC(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(Cu(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),Dv(t))}function Gm(t,e,n){for(const r of n)r instanceof WC?(t.yc.addReference(r.key,e),wU(t,r)):r instanceof GC?(k("SyncEngine","Document no longer in limbo: "+r.key),t.yc.removeReference(r.key,e),t.yc.containsKey(r.key)||YC(t,r.key)):D()}function wU(t,e){const n=e.key,r=n.path.canonicalString();t.mc.get(n)||t.wc.has(r)||(k("SyncEngine","New document in limbo: "+n),t.wc.add(r),Dv(t))}function Dv(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new R(Y.fromString(e)),r=t.Ec.next();t.gc.set(r,new cU(n)),t.mc=t.mc.insert(n,r),Fd(t.remoteStore,new Gn($t(Lo(n.path)),r,"TargetPurposeLimboResolution",Nt.ct))}}async function cr(t,e,n){const r=P(t),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,u)=>{o.push(r.Rc(u,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const c=wv.Bi(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.fc.eu(i),await async function(a,u){const l=P(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>w.forEach(u,h=>w.forEach(h.$i,d=>l.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>w.forEach(h.Fi,d=>l.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!ui(c))throw c;k("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const d=l.Hi.get(h),f=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(f);l.Hi=l.Hi.insert(h,y)}}}(r.localStore,s))}async function _U(t,e){const n=P(t);if(!n.currentUser.isEqual(e)){k("SyncEngine","User change. New user:",e.toKey());const r=await PC(n.localStore,e);n.currentUser=e,function(i,s){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new S(_.CANCELLED,s))})}),i.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await cr(n,r.tr)}}function IU(t,e){const n=P(t),r=n.gc.get(e);if(r&&r.lc)return B().add(r.key);{let i=B();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.dc.get(o);i=i.unionWith(a.view.ec)}return i}}async function EU(t,e){const n=P(t),r=await hh(n.localStore,e.query,!0),i=e.view.ac(r);return n.isPrimaryClient&&Gm(n,e.targetId,i.uc),i}async function SU(t,e){const n=P(t);return $C(n.localStore,e).then(r=>cr(n,r))}async function TU(t,e,n,r){const i=P(t),s=await function(o,a){const u=P(o),l=P(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",c=>l.Vn(c,a).next(h=>h?u.localDocuments.getDocuments(c,h):w.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Vo(i.remoteStore):n==="acknowledged"||n==="rejected"?(xv(i,e,r||null),Pv(i,e),function(o,a){P(P(o).mutationQueue).Dn(a)}(i.localStore,e)):D(),await cr(i,s)):k("SyncEngine","Cannot apply mutation batch with id: "+e)}async function kU(t,e){const n=P(t);if(Ov(n),$v(n),e===!0&&n.Ac!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await a1(n,r.toArray());n.Ac=!0,await Wm(n.remoteStore,!0);for(const s of i)Fd(n.remoteStore,s)}else if(e===!1&&n.Ac!==!1){const r=[];let i=Promise.resolve();n._c.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Io(n,o),wo(n.localStore,o,!0))),Cu(n.remoteStore,o)}),await i,await a1(n,r),function(s){const o=P(s);o.gc.forEach((a,u)=>{Cu(o.remoteStore,u)}),o.yc.Is(),o.gc=new Map,o.mc=new oe(R.comparator)}(n),n.Ac=!1,await Wm(n.remoteStore,!1)}}async function a1(t,e,n){const r=P(t),i=[],s=[];for(const o of e){let a;const u=r._c.get(o);if(u&&u.length!==0){a=await vo(r.localStore,$t(u[0]));for(const l of u){const c=r.dc.get(l),h=await EU(r,c);h.snapshot&&s.push(h.snapshot)}}else{const l=await OC(r.localStore,o);a=await vo(r.localStore,l),await Rv(r,XC(l),o,!1,a.resumeToken)}i.push(a)}return r.fc.eu(s),i}function XC(t){return Vk(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function CU(t){const e=P(t);return P(P(e.localStore).persistence).Mi()}async function AU(t,e,n,r){const i=P(t);if(i.Ac)return void k("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await $C(i.localStore,jk(s[0])),a=sl.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Le.EMPTY_BYTE_STRING);await cr(i,o,a);break}case"rejected":await wo(i.localStore,e,!0),Io(i,e,r);break;default:D()}}async function NU(t,e,n){const r=Ov(t);if(r.Ac){for(const i of e){if(r._c.has(i)){k("SyncEngine","Adding an already active target "+i);continue}const s=await OC(r.localStore,i),o=await vo(r.localStore,s);await Rv(r,XC(s),o.targetId,!1,o.resumeToken),Fd(r.remoteStore,o)}for(const i of n)r._c.has(i)&&await wo(r.localStore,i,!1).then(()=>{Cu(r.remoteStore,i),Io(r,i)}).catch(ai)}}function Ov(t){const e=P(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=QC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IU.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mU.bind(null,e),e.fc.eu=sU.bind(null,e.eventManager),e.fc.vc=oU.bind(null,e.eventManager),e}function $v(t){const e=P(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gU.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yU.bind(null,e),e}function bU(t,e,n){const r=P(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const f=P(h),y=Ne(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",v=>f.Ls.getBundleMetadata(v,d.id)).then(v=>!!v&&v.createTime.compareTo(y)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(KC(a));const u=new uU(a,i.localStore,s.serializer);let l=await s.Pc();for(;l;){const h=await u.ju(l);h&&o._updateProgress(h),l=await s.Pc()}const c=await u.complete();return await cr(i,c.Hu,void 0),await function(h,d){const f=P(h);return f.persistence.runTransaction("Save bundle","readwrite",y=>f.Ls.saveBundleMetadata(y,d))}(i.localStore,a),o._completeWith(c.progress),Promise.resolve(c.Wu)}catch(a){return gn("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Hm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=al(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return RC(this.persistence,new bC,e.initialUser,this.serializer)}createPersistence(e){return new NC(Md.js,this.serializer)}createSharedClientState(e){return new MC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class JC extends Hm{constructor(e,n,r){super(),this.bc=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.bc.initialize(this,e),await $v(this.bc.syncEngine),await Vo(this.bc.remoteStore),await this.persistence.pi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return RC(this.persistence,new bC,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new vF(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new tM(n,this.persistence);return new eM(e.asyncQueue,r)}createPersistence(e){const n=vv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new yv(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,FC(),fc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new MC}}class RU extends JC{constructor(e,n){super(e,n,!1),this.bc=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.bc.syncEngine;this.sharedClientState instanceof ep&&(this.sharedClientState.syncEngine={Qr:TU.bind(null,n),jr:AU.bind(null,n),zr:NU.bind(null,n),Mi:CU.bind(null,n),Gr:SU.bind(null,n)},await this.sharedClientState.start()),await this.persistence.pi(async r=>{await kU(this.bc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=FC();if(!ep.D(n))throw new S(_.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=vv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ep(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Lv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>o1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=_U.bind(null,this.syncEngine),await Wm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new iU}createDatastore(e){const n=al(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new jF(i));var i;return function(s,o,a,u){return new KF(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>o1(this.syncEngine,a,0),o=n1.D()?new n1:new UF,new GF(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const c=new hU(r,i,s,o,a,u);return l&&(c.Ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=P(e);k("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await Uo(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):Ce("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PU{constructor(e,n){this.Dc=e,this.serializer=n,this.metadata=new Be,this.buffer=new Uint8Array,this.Cc=new TextDecoder("utf-8"),this.xc().then(r=>{r&&r.Gu()?this.metadata.resolve(r.Ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Ku)}`))},r=>this.metadata.reject(r))}close(){return this.Dc.cancel()}async getMetadata(){return this.metadata.promise}async Pc(){return await this.getMetadata(),this.xc()}async xc(){const e=await this.Nc();if(e===null)return null;const n=this.Cc.decode(e),r=Number(n);isNaN(r)&&this.kc(`length string (${n}) is not valid number`);const i=await this.Mc(r);return new aU(JSON.parse(i),e.length+r)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Nc(){for(;this.Oc()<0&&!await this.$c(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.kc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Mc(e){for(;this.buffer.length<e;)await this.$c()&&this.kc("Reached the end of bundle when more is expected.");const n=this.Cc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}kc(e){throw this.Dc.cancel(),new Error(`Invalid bundle format: ${e}`)}async $c(){const e=await this.Dc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xU{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new S(_.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=P(r),o=Tu(s.serializer)+"/documents",a={documents:i.map(h=>Su(s.serializer,h))},u=await s.Ao("BatchGetDocuments",o,a,i.length),l=new Map;u.forEach(h=>{const d=JM(s.serializer,h);l.set(d.key.toString(),d)});const c=[];return i.forEach(h=>{const d=l.get(h.toString());F(!!d),c.push(d)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Fo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=R.fromPath(r);this.mutations.push(new ov(i,this.precondition(i)))}),await async function(n,r){const i=P(n),s=Tu(i.serializer)+"/documents",o={writes:r.map(a=>ku(i.serializer,a))};await i.po("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw D();n=M.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new S(_.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(M.min())?pe.exists(!1):pe.updateTime(n):pe.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(M.min()))throw new S(_.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return pe.updateTime(n)}return pe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DU{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Fc=r.maxAttempts,this.Lo=new Iv(this.asyncQueue,"transaction_retry")}run(){this.Fc-=1,this.Bc()}Bc(){this.Lo.xo(async()=>{const e=new xU(this.datastore),n=this.Lc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.qc(i)}))}).catch(r=>{this.qc(r)})})}Lc(e){try{const n=this.updateFunction(e);return!el(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}qc(e){this.Fc>0&&this.Uc(e)?(this.Fc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Bc(),Promise.resolve()))):this.deferred.reject(e)}Uc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!nC(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OU{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ze.UNAUTHENTICATED,this.clientId=yk.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{k("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(k("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Be;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=jo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function pc(t,e){t.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await PC(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Qm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Mv(t);k("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>r1(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>r1(e.remoteStore,s)),t._onlineComponents=e}function ZC(t){return t.name==="FirebaseError"?t.code===_.FAILED_PRECONDITION||t.code===_.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Mv(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){k("FirestoreClient","Using user provided OfflineComponentProvider");try{await pc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!ZC(n))throw n;gn("Error using user provided cache. Falling back to memory cache: "+n),await pc(t,new Hm)}}else k("FirestoreClient","Using default OfflineComponentProvider"),await pc(t,new Hm);return t._offlineComponents}async function Vd(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(k("FirestoreClient","Using user provided OnlineComponentProvider"),await Qm(t,t._uninitializedComponentsProvider._online)):(k("FirestoreClient","Using default OnlineComponentProvider"),await Qm(t,new Lv))),t._onlineComponents}function eA(t){return Mv(t).then(e=>e.persistence)}function Fv(t){return Mv(t).then(e=>e.localStore)}function tA(t){return Vd(t).then(e=>e.remoteStore)}function Uv(t){return Vd(t).then(e=>e.syncEngine)}function $U(t){return Vd(t).then(e=>e.datastore)}async function Eo(t){const e=await Vd(t),n=e.eventManager;return n.onListen=dU.bind(null,e.syncEngine),n.onUnlisten=fU.bind(null,e.syncEngine),n}function LU(t){return t.asyncQueue.enqueue(async()=>{const e=await eA(t),n=await tA(t);return e.setNetworkEnabled(!0),function(r){const i=P(r);return i.Au.delete(0),ul(i)}(n)})}function MU(t){return t.asyncQueue.enqueue(async()=>{const e=await eA(t),n=await tA(t);return e.setNetworkEnabled(!1),async function(r){const i=P(r);i.Au.add(0),await Uo(i),i.Pu.set("Offline")}(n)})}function FU(t,e){const n=new Be;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,u){const l=P(a);return l.persistence.runTransaction("read document","readonly",c=>l.localDocuments.getDocument(c,u))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new S(_.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=jo(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await Fv(t),e,n)),n.promise}function nA(t,e,n={}){const r=new Be;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Ud({next:h=>{s.enqueueAndForget(()=>Av(i,c));const d=h.docs.has(o);!d&&h.fromCache?u.reject(new S(_.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?u.reject(new S(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new bv(Lo(o.path),l,{includeMetadataChanges:!0,Uu:!0});return Cv(i,c)}(await Eo(t),t.asyncQueue,e,n,r)),r.promise}function UU(t,e){const n=new Be;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await hh(r,i,!0),a=new HC(i,o.sr),u=a.nc(o.documents),l=a.applyChanges(u,!1);s.resolve(l.snapshot)}catch(o){const a=jo(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await Fv(t),e,n)),n.promise}function rA(t,e,n={}){const r=new Be;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Ud({next:h=>{s.enqueueAndForget(()=>Av(i,c)),h.fromCache&&a.source==="server"?u.reject(new S(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new bv(o,l,{includeMetadataChanges:!0,Uu:!0});return Cv(i,c)}(await Eo(t),t.asyncQueue,e,n,r)),r.promise}function VU(t,e){const n=new Ud(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){P(r).Nu.add(i),i.next()}(await Eo(t),n)),()=>{n.Sc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){P(r).Nu.delete(i)}(await Eo(t),n))}}function zU(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?iC().encode(s):s,function(u,l){return new PU(u,l)}(function(u,l){if(u instanceof Uint8Array)return u1(u,l);if(u instanceof ArrayBuffer)return u1(new Uint8Array(u),l);if(u instanceof ReadableStream)return u.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,al(e));t.asyncQueue.enqueueAndForget(async()=>{bU(await Uv(t),i,r)})}function jU(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=P(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.Ls.getNamedQuery(s,r))}(await Fv(t),e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(t,e,n){if(!n)throw new S(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function iA(t,e,n,r){if(e===!0&&r===!0)throw new S(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function c1(t){if(!R.isDocumentKey(t))throw new S(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function h1(t){if(R.isDocumentKey(t))throw new S(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function zd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":D()}function J(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new S(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zd(t);throw new S(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function sA(t,e){if(e<=0)throw new S(_.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new S(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new S(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}iA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new d1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new S(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new d1(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new jL;switch(n.type){case"firstParty":return new WL(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new S(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=l1.get(e);n&&(k("ComponentProvider","Removing Datastore"),l1.delete(e),n.terminate())}(this),Promise.resolve()}}function BU(t,e,n,r={}){var i;const s=(t=J(t,ll))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&gn("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=ze.MOCK_USER;else{o=fP(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new S(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ze(u)}t._authCredentials=new BL(new gk(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ce(this.firestore,e,this._key)}}class st{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new st(this.firestore,e,this._query)}}class Dn extends st{constructor(e,n,r){super(e,n,Lo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ce(this.firestore,null,new R(e))}withConverter(e){return new Dn(this.firestore,e,this._path)}}function oA(t,e,...n){if(t=U(t),Vv("collection","path",e),t instanceof ll){const r=Y.fromString(e,...n);return h1(r),new Dn(t,null,r)}{if(!(t instanceof ce||t instanceof Dn))throw new S(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Y.fromString(e,...n));return h1(r),new Dn(t.firestore,null,r)}}function qU(t,e){if(t=J(t,ll),Vv("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new S(_.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new st(t,null,function(n){return new ur(Y.emptyPath(),n)}(e))}function mh(t,e,...n){if(t=U(t),arguments.length===1&&(e=yk.A()),Vv("doc","path",e),t instanceof ll){const r=Y.fromString(e,...n);return c1(r),new ce(t,null,new R(r))}{if(!(t instanceof ce||t instanceof Dn))throw new S(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Y.fromString(e,...n));return c1(r),new ce(t.firestore,t instanceof Dn?t.converter:null,new R(r))}}function aA(t,e){return t=U(t),e=U(e),(t instanceof ce||t instanceof Dn)&&(e instanceof ce||e instanceof Dn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function uA(t,e){return t=U(t),e=U(e),t instanceof st&&e instanceof st&&t.firestore===e.firestore&&nl(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KU{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new Iv(this,"async_queue_retry"),this.Yc=()=>{const n=fc();n&&k("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=fc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=fc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new Be;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!ui(e))throw e;k("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(r=>{this.zc=r,this.Wc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Ce("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(e,n,r){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const i=kv.createAndSchedule(this,e,n,r,s=>this.ea(s));return this.jc.push(i),i}Xc(){this.zc&&D()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}function Ym(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class WU{constructor(){this._progressObserver={},this._taskCompletionResolver=new Be,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GU=-1;class Se extends ll{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new KU,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||lA(this),this._firestoreClient.terminate()}}function Qe(t){return t._firestoreClient||lA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function lA(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,u,l){return new EM(o,a,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new OU(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function HU(t,e){hA(t=J(t,Se));const n=Qe(t);if(n._uninitializedComponentsProvider)throw new S(_.FAILED_PRECONDITION,"SDK cache is already specified.");gn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new Lv;return cA(n,i,new JC(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function QU(t){hA(t=J(t,Se));const e=Qe(t);if(e._uninitializedComponentsProvider)throw new S(_.FAILED_PRECONDITION,"SDK cache is already specified.");gn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new Lv;return cA(e,r,new RU(r,n.cacheSizeBytes))}function cA(t,e,n){const r=new Be;return t.asyncQueue.enqueue(async()=>{try{await pc(t,n),await Qm(t,e),r.resolve()}catch(i){const s=i;if(!ZC(s))throw s;gn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function YU(t){if(t._initialized&&!t._terminated)throw new S(_.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Be;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!cn.D())return Promise.resolve();const r=n+"main";await cn.delete(r)}(vv(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function XU(t){return function(e){const n=new Be;return e.asyncQueue.enqueueAndForget(async()=>vU(await Uv(e),n)),n.promise}(Qe(t=J(t,Se)))}function JU(t){return LU(Qe(t=J(t,Se)))}function ZU(t){return MU(Qe(t=J(t,Se)))}function e4(t,e){const n=Qe(t=J(t,Se)),r=new WU;return zU(n,t._databaseId,e,r),r}function t4(t,e){return jU(Qe(t=J(t,Se)),e).then(n=>n?new st(t,null,n.query):null)}function hA(t){if(t._initialized||t._terminated)throw new S(_.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fn(Le.fromBase64String(e))}catch(n){throw new S(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Fn(Le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new S(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new S(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new S(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n4=/^__.*__$/;class r4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Mo(e,this.data,n,this.fieldTransforms)}}class dA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new lr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function fA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw D()}}class Bd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.oa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new Bd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.la(e),i}fa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.oa(),i}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return gh(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(fA(this.ua)&&n4.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class i4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||al(e)}ga(e,n,r,i=!1){return new Bd({ua:e,methodName:n,ma:r,path:Ae.emptyPath(),ha:!1,wa:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ds(t){const e=t._freezeSettings(),n=al(t._databaseId);return new i4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function qd(t,e,n,r,i,s={}){const o=t.ga(s.merge||s.mergeFields?2:0,e,n,i);qv("Data must be an object, but it was:",o,r);const a=gA(r,o);let u,l;if(s.merge)u=new bt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Xm(e,h,n);if(!o.contains(d))throw new S(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);vA(c,d)||c.push(d)}u=new bt(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new r4(new Ct(a),u,l)}class cl extends hs{_toFieldTransform(e){if(e.ua!==2)throw e.ua===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cl}}function pA(t,e,n){return new Bd({ua:3,ma:e.settings.ma,methodName:t._methodName,ha:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class zv extends hs{_toFieldTransform(e){return new il(e.path,new mo)}isEqual(e){return e instanceof zv}}class s4 extends hs{constructor(e,n){super(e),this.ya=n}_toFieldTransform(e){const n=pA(this,e,!0),r=this.ya.map(s=>fs(s,n)),i=new Ji(r);return new il(e.path,i)}isEqual(e){return this===e}}class o4 extends hs{constructor(e,n){super(e),this.ya=n}_toFieldTransform(e){const n=pA(this,e,!0),r=this.ya.map(s=>fs(s,n)),i=new Zi(r);return new il(e.path,i)}isEqual(e){return this===e}}class a4 extends hs{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=new go(e.serializer,Qk(e.serializer,this.pa));return new il(e.path,n)}isEqual(e){return this===e}}function jv(t,e,n,r){const i=t.ga(1,e,n);qv("Data must be an object, but it was:",i,r);const s=[],o=Ct.empty();cs(r,(u,l)=>{const c=Kv(e,u,n);l=U(l);const h=i.fa(c);if(l instanceof cl)s.push(c);else{const d=fs(l,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new bt(s);return new dA(o,a,i.fieldTransforms)}function Bv(t,e,n,r,i,s){const o=t.ga(1,e,n),a=[Xm(e,r,n)],u=[i];if(s.length%2!=0)throw new S(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Xm(e,s[d])),u.push(s[d+1]);const l=[],c=Ct.empty();for(let d=a.length-1;d>=0;--d)if(!vA(l,a[d])){const f=a[d];let y=u[d];y=U(y);const v=o.fa(f);if(y instanceof cl)l.push(f);else{const E=fs(y,v);E!=null&&(l.push(f),c.set(f,E))}}const h=new bt(l);return new dA(c,h,o.fieldTransforms)}function mA(t,e,n,r=!1){return fs(n,t.ga(r?4:3,e))}function fs(t,e){if(yA(t=U(t)))return qv("Unsupported field value:",e,t),gA(t,e);if(t instanceof hs)return function(n,r){if(!fA(r.ua))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=fs(o,r.da(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=U(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Qk(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=me.fromDate(n);return{timestampValue:yo(r.serializer,i)}}if(n instanceof me){const i=new me(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:yo(r.serializer,i)}}if(n instanceof jd)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Fn)return{bytesValue:aC(r.serializer,n._byteString)};if(n instanceof ce){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:dv(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${zd(n)}`)}(t,e)}function gA(t,e){const n={};return bk(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cs(t,(r,i)=>{const s=fs(i,e.aa(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function yA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof me||t instanceof jd||t instanceof Fn||t instanceof ce||t instanceof hs)}function qv(t,e,n){if(!yA(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=zd(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function Xm(t,e,n){if((e=U(e))instanceof Xr)return e._internalPath;if(typeof e=="string")return Kv(t,e);throw gh("Field path arguments must be of type string or ",t,!1,void 0,n)}const u4=new RegExp("[~\\*/\\[\\]]");function Kv(t,e,n){if(e.search(u4)>=0)throw gh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xr(...e.split("."))._internalPath}catch{throw gh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function gh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new S(_.INVALID_ARGUMENT,a+t+u)}function vA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new l4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Kd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class l4 extends Au{data(){return super.data()}}function Kd(t,e){return typeof e=="string"?Kv(t,e):e instanceof Xr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new S(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wv{}class hl extends Wv{}function mr(t,e,...n){let r=[];e instanceof Wv&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Gv).length,o=i.filter(a=>a instanceof Wd).length;if(s>1||s>0&&o>0)throw new S(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Wd extends hl{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Wd(e,n,r)}_apply(e){const n=this._parse(e);return IA(e._query,n),new st(e.firestore,e.converter,Mm(e._query,n))}_parse(e){const n=ds(e.firestore);return function(i,s,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new S(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){p1(c,l);const d=[];for(const f of c)d.push(f1(a,i,f));h={arrayValue:{values:d}}}else h=f1(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||p1(c,l),h=mA(o,s,c,l==="in"||l==="not-in");return W.create(u,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function c4(t,e,n){const r=e,i=Kd("where",t);return Wd._create(i,r,n)}class Gv extends Wv{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Gv(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ee.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)IA(s,a),s=Mm(s,a)}(e._query,n),new st(e.firestore,e.converter,Mm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hv extends hl{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Hv(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new S(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new S(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Qs(i,s);return function(a,u){if(rv(a)===null){const l=xd(a);l!==null&&EA(a,l,u.field)}}(r,o),o}(e._query,this._field,this._direction);return new st(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new ur(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function h4(t,e="asc"){const n=e,r=Kd("orderBy",t);return Hv._create(r,n)}class Gd extends hl{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Gd(e,n,r)}_apply(e){return new st(e.firestore,e.converter,ah(e._query,this._limit,this._limitType))}}function d4(t){return sA("limit",t),Gd._create("limit",t,"F")}function f4(t){return sA("limitToLast",t),Gd._create("limitToLast",t,"L")}class Hd extends hl{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Hd(e,n,r)}_apply(e){const n=_A(e,this.type,this._docOrFields,this._inclusive);return new st(e.firestore,e.converter,function(r,i){return new ur(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function p4(...t){return Hd._create("startAt",t,!0)}function m4(...t){return Hd._create("startAfter",t,!1)}class Qd extends hl{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Qd(e,n,r)}_apply(e){const n=_A(e,this.type,this._docOrFields,this._inclusive);return new st(e.firestore,e.converter,function(r,i){return new ur(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function g4(...t){return Qd._create("endBefore",t,!1)}function y4(...t){return Qd._create("endAt",t,!0)}function _A(t,e,n,r){if(n[0]=U(n[0]),n[0]instanceof Au)return function(i,s,o,a,u){if(!a)throw new S(_.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const c of Ui(i))if(c.field.isKeyField())l.push(Yi(s,a.key));else{const h=a.data.field(c.field);if(Pd(h))throw new S(_.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new S(_.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new Qr(l,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=ds(t.firestore);return function(s,o,a,u,l,c){const h=s.explicitOrderBy;if(l.length>h.length)throw new S(_.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<l.length;f++){const y=l[f];if(h[f].field.isKeyField()){if(typeof y!="string")throw new S(_.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof y}`);if(!iv(s)&&y.indexOf("/")!==-1)throw new S(_.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${y}' contains a slash.`);const v=s.path.child(Y.fromString(y));if(!R.isDocumentKey(v))throw new S(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const E=new R(v);d.push(Yi(o,E))}else{const v=mA(a,u,y);d.push(v)}}return new Qr(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function f1(t,e,n){if(typeof(n=U(n))=="string"){if(n==="")throw new S(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!iv(e)&&n.indexOf("/")!==-1)throw new S(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Y.fromString(n));if(!R.isDocumentKey(r))throw new S(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Yi(t,new R(r))}if(n instanceof ce)return Yi(t,n._key);throw new S(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zd(n)}.`)}function p1(t,e){if(!Array.isArray(t)||t.length===0)throw new S(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function IA(t,e){if(e.isInequality()){const r=xd(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new S(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=rv(t);s!==null&&EA(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new S(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new S(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function EA(t,e,n){if(!n.isEqual(e))throw new S(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Qv{convertValue(e,n="none"){switch(Qi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw D()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return cs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new jd(Ie(e.latitude),Ie(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=tv(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_u(e));default:return null}}convertTimestamp(e){const n=Kr(e);return new me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Y.fromString(e);F(yC(r));const i=new Gr(r.get(1),r.get(3)),s=new R(r.popFirst(5));return i.isEqual(n)||Ce(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class v4 extends Qv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ce(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rr extends Au{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new za(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Kd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class za extends rr{data(e={}){return super.data(e)}}class Jr{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Pi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new za(this._firestore,this._userDataWriter,r.key,r,new Pi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new S(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new za(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Pi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new za(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Pi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:w4(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function w4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return D()}}function SA(t,e){return t instanceof rr&&e instanceof rr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Jr&&e instanceof Jr&&t._firestore===e._firestore&&uA(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _4(t){t=J(t,ce);const e=J(t.firestore,Se);return nA(Qe(e),t._key).then(n=>Yv(e,t,n))}class ps extends Qv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ce(this.firestore,null,n)}}function I4(t){t=J(t,ce);const e=J(t.firestore,Se),n=Qe(e),r=new ps(e);return FU(n,t._key).then(i=>new rr(e,r,t._key,i,new Pi(i!==null&&i.hasLocalMutations,!0),t.converter))}function E4(t){t=J(t,ce);const e=J(t.firestore,Se);return nA(Qe(e),t._key,{source:"server"}).then(n=>Yv(e,t,n))}function S4(t){t=J(t,st);const e=J(t.firestore,Se),n=Qe(e),r=new ps(e);return wA(t._query),rA(n,t._query).then(i=>new Jr(e,r,t,i))}function T4(t){t=J(t,st);const e=J(t.firestore,Se),n=Qe(e),r=new ps(e);return UU(n,t._query).then(i=>new Jr(e,r,t,i))}function k4(t){t=J(t,st);const e=J(t.firestore,Se),n=Qe(e),r=new ps(e);return rA(n,t._query,{source:"server"}).then(i=>new Jr(e,r,t,i))}function m1(t,e,n){t=J(t,ce);const r=J(t.firestore,Se),i=Yd(t.converter,e,n);return dl(r,[qd(ds(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,pe.none())])}function g1(t,e,n,...r){t=J(t,ce);const i=J(t.firestore,Se),s=ds(i);let o;return o=typeof(e=U(e))=="string"||e instanceof Xr?Bv(s,"updateDoc",t._key,e,n,r):jv(s,"updateDoc",t._key,e),dl(i,[o.toMutation(t._key,pe.exists(!0))])}function C4(t){return dl(J(t.firestore,Se),[new Fo(t._key,pe.none())])}function A4(t,e){const n=J(t.firestore,Se),r=mh(t),i=Yd(t.converter,e);return dl(n,[qd(ds(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,pe.exists(!1))]).then(()=>r)}function TA(t,...e){var n,r,i;t=U(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ym(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Ym(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof ce)l=J(t.firestore,Se),c=Lo(t._key.path),u={next:h=>{e[o]&&e[o](Yv(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=J(t,st);l=J(h.firestore,Se),c=h._query;const d=new ps(l);u={next:f=>{e[o]&&e[o](new Jr(l,d,h,f))},error:e[o+1],complete:e[o+2]},wA(t._query)}return function(h,d,f,y){const v=new Ud(y),E=new bv(d,v,f);return h.asyncQueue.enqueueAndForget(async()=>Cv(await Eo(h),E)),()=>{v.Sc(),h.asyncQueue.enqueueAndForget(async()=>Av(await Eo(h),E))}}(Qe(l),c,a,u)}function N4(t,e){return VU(Qe(t=J(t,Se)),Ym(e)?e:{next:e})}function dl(t,e){return function(n,r){const i=new Be;return n.asyncQueue.enqueueAndForget(async()=>pU(await Uv(n),r,i)),i.promise}(Qe(t),e)}function Yv(t,e,n){const r=n.docs.get(e._key),i=new ps(t);return new rr(t,i,e._key,r,new Pi(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b4={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R4{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ds(e)}set(e,n,r){this._verifyNotCommitted();const i=Ir(e,this._firestore),s=Yd(i.converter,n,r),o=qd(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,pe.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Ir(e,this._firestore);let o;return o=typeof(n=U(n))=="string"||n instanceof Xr?Bv(this._dataReader,"WriteBatch.update",s._key,n,r,i):jv(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,pe.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Ir(e,this._firestore);return this._mutations=this._mutations.concat(new Fo(n._key,pe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new S(_.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ir(t,e){if((t=U(t)).firestore!==e)throw new S(_.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P4 extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=ds(e)}get(e){const n=Ir(e,this._firestore),r=new v4(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return D();const s=i[0];if(s.isFoundDocument())return new Au(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new Au(this._firestore,r,n._key,null,n.converter);throw D()})}set(e,n,r){const i=Ir(e,this._firestore),s=Yd(i.converter,n,r),o=qd(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=Ir(e,this._firestore);let o;return o=typeof(n=U(n))=="string"||n instanceof Xr?Bv(this._dataReader,"Transaction.update",s._key,n,r,i):jv(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=Ir(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Ir(e,this._firestore),r=new ps(this._firestore);return super.get(e).then(i=>new rr(this._firestore,r,n._key,i._document,new Pi(!1,!1),n.converter))}}function x4(t,e,n){t=J(t,Se);const r=Object.assign(Object.assign({},b4),n);return function(i){if(i.maxAttempts<1)throw new S(_.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new Be;return i.asyncQueue.enqueueAndForget(async()=>{const u=await $U(i);new DU(i.asyncQueue,u,o,s,a).run()}),a.promise}(Qe(t),i=>e(new P4(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D4(){return new cl("deleteField")}function O4(){return new zv("serverTimestamp")}function $4(...t){return new s4("arrayUnion",t)}function L4(...t){return new o4("arrayRemove",t)}function M4(t){return new a4("increment",t)}(function(t,e=!0){(function(n){$o=n})(ri),jr(new $n("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Se(new qL(n.getProvider("auth-internal")),new HL(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new S(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gr(a.options.projectId,u)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Pn(h_,"3.11.0",t),Pn(h_,"3.11.0","esm2017")})();const F4="@firebase/firestore-compat",U4="0.3.8";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new S("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(){if(typeof Uint8Array>"u")throw new S("unimplemented","Uint8Arrays are not available in this environment.")}function v1(){if(!_M())throw new S("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Nu{constructor(e){this._delegate=e}static fromBase64String(e){return v1(),new Nu(Fn.fromBase64String(e))}static fromUint8Array(e){return y1(),new Nu(Fn.fromUint8Array(e))}toBase64(){return v1(),this._delegate.toBase64()}toUint8Array(){return y1(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(t){return V4(t,["next","error","complete"])}function V4(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z4{enableIndexedDbPersistence(e,n){return HU(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return QU(e._delegate)}clearIndexedDbPersistence(e){return YU(e._delegate)}}class kA{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Gr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&gn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){BU(this._delegate,e,n,r)}enableNetwork(){return JU(this._delegate)}disableNetwork(){return ZU(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,iA("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return XU(this._delegate)}onSnapshotsInSync(e){return N4(this._delegate,e)}get app(){if(!this._appCompat)throw new S("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new So(this,oA(this._delegate,e))}catch(n){throw gt(n,"collection()","Firestore.collection()")}}doc(e){try{return new Jt(this,mh(this._delegate,e))}catch(n){throw gt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new mt(this,qU(this._delegate,e))}catch(n){throw gt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return x4(this._delegate,n=>e(new CA(this,n)))}batch(){return Qe(this._delegate),new AA(new R4(this._delegate,e=>dl(this._delegate,e)))}loadBundle(e){return e4(this._delegate,e)}namedQuery(e){return t4(this._delegate,e).then(n=>n?new mt(this,n):null)}}class Xd extends Qv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nu(new Fn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Jt.forKey(n,this.firestore,null)}}function j4(t){VL(t)}class CA{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Xd(e)}get(e){const n=xi(e);return this._delegate.get(n).then(r=>new bu(this._firestore,new rr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=xi(e);return r?(Xv("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=xi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=xi(e);return this._delegate.delete(n),this}}class AA{constructor(e){this._delegate=e}set(e,n,r){const i=xi(e);return r?(Xv("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=xi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=xi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class rs{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new za(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Ru(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=rs.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new rs(e,new Xd(e),n),i.set(n,s)),s}}rs.INSTANCES=new WeakMap;class Jt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Xd(e)}static forPath(e,n,r){if(e.length%2!==0)throw new S("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Jt(n,new ce(n._delegate,r,new R(e)))}static forKey(e,n,r){return new Jt(n,new ce(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new So(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new So(this.firestore,oA(this._delegate,e))}catch(n){throw gt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=U(e),e instanceof ce?aA(this._delegate,e):!1}set(e,n){n=Xv("DocumentReference.set",n);try{return n?m1(this._delegate,e,n):m1(this._delegate,e)}catch(r){throw gt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?g1(this._delegate,e):g1(this._delegate,e,n,...r)}catch(i){throw gt(i,"updateDoc()","DocumentReference.update()")}}delete(){return C4(this._delegate)}onSnapshot(...e){const n=NA(e),r=bA(e,i=>new bu(this.firestore,new rr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return TA(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=I4(this._delegate):(e==null?void 0:e.source)==="server"?n=E4(this._delegate):n=_4(this._delegate),n.then(r=>new bu(this.firestore,new rr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Jt(this.firestore,e?this._delegate.withConverter(rs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function gt(t,e,n){return t.message=t.message.replace(e,n),t}function NA(t){for(const e of t)if(typeof e=="object"&&!Jm(e))return e;return{}}function bA(t,e){var n,r;let i;return Jm(t[0])?i=t[0]:Jm(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class bu{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Jt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return SA(this._delegate,e._delegate)}}class Ru extends bu{data(e){const n=this._delegate.data(e);return zL(n!==void 0),n}}class mt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Xd(e)}where(e,n,r){try{return new mt(this.firestore,mr(this._delegate,c4(e,n,r)))}catch(i){throw gt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new mt(this.firestore,mr(this._delegate,h4(e,n)))}catch(r){throw gt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new mt(this.firestore,mr(this._delegate,d4(e)))}catch(n){throw gt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new mt(this.firestore,mr(this._delegate,f4(e)))}catch(n){throw gt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new mt(this.firestore,mr(this._delegate,p4(...e)))}catch(n){throw gt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new mt(this.firestore,mr(this._delegate,m4(...e)))}catch(n){throw gt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new mt(this.firestore,mr(this._delegate,g4(...e)))}catch(n){throw gt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new mt(this.firestore,mr(this._delegate,y4(...e)))}catch(n){throw gt(n,"endAt()","Query.endAt()")}}isEqual(e){return uA(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=T4(this._delegate):(e==null?void 0:e.source)==="server"?n=k4(this._delegate):n=S4(this._delegate),n.then(r=>new Zm(this.firestore,new Jr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=NA(e),r=bA(e,i=>new Zm(this.firestore,new Jr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return TA(this._delegate,n,r)}withConverter(e){return new mt(this.firestore,e?this._delegate.withConverter(rs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class B4{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Ru(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Zm{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new mt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Ru(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new B4(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Ru(this._firestore,r))})}isEqual(e){return SA(this._delegate,e._delegate)}}class So extends mt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Jt(this.firestore,e):null}doc(e){try{return e===void 0?new Jt(this.firestore,mh(this._delegate)):new Jt(this.firestore,mh(this._delegate,e))}catch(n){throw gt(n,"doc()","CollectionReference.doc()")}}add(e){return A4(this._delegate,e).then(n=>new Jt(this.firestore,n))}isEqual(e){return aA(this._delegate,e._delegate)}withConverter(e){return new So(this.firestore,e?this._delegate.withConverter(rs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function xi(t){return J(t,ce)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(...e){this._delegate=new Xr(...e)}static documentId(){return new Jv(Ae.keyField().canonicalString())}isEqual(e){return e=U(e),e instanceof Xr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this._delegate=e}static serverTimestamp(){const e=O4();return e._methodName="FieldValue.serverTimestamp",new Ti(e)}static delete(){const e=D4();return e._methodName="FieldValue.delete",new Ti(e)}static arrayUnion(...e){const n=$4(...e);return n._methodName="FieldValue.arrayUnion",new Ti(n)}static arrayRemove(...e){const n=L4(...e);return n._methodName="FieldValue.arrayRemove",new Ti(n)}static increment(e){const n=M4(e);return n._methodName="FieldValue.increment",new Ti(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q4={Firestore:kA,GeoPoint:jd,Timestamp:me,Blob:Nu,Transaction:CA,WriteBatch:AA,DocumentReference:Jt,DocumentSnapshot:bu,Query:mt,QueryDocumentSnapshot:Ru,QuerySnapshot:Zm,CollectionReference:So,FieldPath:Jv,FieldValue:Ti,setLogLevel:j4,CACHE_SIZE_UNLIMITED:GU};function K4(t,e){t.INTERNAL.registerComponent(new $n("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},q4)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W4(t){K4(t,(e,n)=>new kA(e,n,new z4)),t.registerVersion(F4,U4)}W4(Uu);function ln(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Zr(t){return!!t&&!!t[he]}function ir(t){var e;return!!t&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===tV}(t)||Array.isArray(t)||!!t[k1]||!!(!((e=t.constructor)===null||e===void 0)&&e[k1])||Zv(t)||ew(t))}function is(t,e,n){n===void 0&&(n=!1),Bo(t)===0?(n?Object.keys:Js)(t).forEach(function(r){n&&typeof r=="symbol"||e(r,t[r],t)}):t.forEach(function(r,i){return e(i,r,t)})}function Bo(t){var e=t[he];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:Zv(t)?2:ew(t)?3:0}function Xs(t,e){return Bo(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function G4(t,e){return Bo(t)===2?t.get(e):t[e]}function RA(t,e,n){var r=Bo(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function PA(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function Zv(t){return Z4&&t instanceof Map}function ew(t){return eV&&t instanceof Set}function wi(t){return t.o||t.t}function tw(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=DA(t);delete e[he];for(var n=Js(e),r=0;r<n.length;r++){var i=n[r],s=e[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function nw(t,e){return e===void 0&&(e=!1),rw(t)||Zr(t)||!ir(t)||(Bo(t)>1&&(t.set=t.add=t.clear=t.delete=H4),Object.freeze(t),e&&is(t,function(n,r){return nw(r,!0)},!0)),t}function H4(){ln(2)}function rw(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function On(t){var e=rg[t];return e||ln(18,t),e}function Q4(t,e){rg[t]||(rg[t]=e)}function eg(){return Pu}function np(t,e){e&&(On("Patches"),t.u=[],t.s=[],t.v=e)}function yh(t){tg(t),t.p.forEach(Y4),t.p=null}function tg(t){t===Pu&&(Pu=t.l)}function w1(t){return Pu={p:[],l:Pu,h:t,m:!0,_:0}}function Y4(t){var e=t[he];e.i===0||e.i===1?e.j():e.g=!0}function rp(t,e){e._=e.p.length;var n=e.p[0],r=t!==void 0&&t!==n;return e.h.O||On("ES5").S(e,t,r),r?(n[he].P&&(yh(e),ln(4)),ir(t)&&(t=vh(e,t),e.l||wh(e,t)),e.u&&On("Patches").M(n[he].t,t,e.u,e.s)):t=vh(e,n,[]),yh(e),e.u&&e.v(e.u,e.s),t!==xA?t:void 0}function vh(t,e,n){if(rw(e))return e;var r=e[he];if(!r)return is(e,function(a,u){return _1(t,r,e,a,u,n)},!0),e;if(r.A!==t)return e;if(!r.P)return wh(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=tw(r.k):r.o,s=i,o=!1;r.i===3&&(s=new Set(i),i.clear(),o=!0),is(s,function(a,u){return _1(t,r,i,a,u,n,o)}),wh(t,i,!1),n&&t.u&&On("Patches").N(r,n,t.u,t.s)}return r.o}function _1(t,e,n,r,i,s,o){if(Zr(i)){var a=vh(t,i,s&&e&&e.i!==3&&!Xs(e.R,r)?s.concat(r):void 0);if(RA(n,r,a),!Zr(a))return;t.m=!1}else o&&n.add(i);if(ir(i)&&!rw(i)){if(!t.h.D&&t._<1)return;vh(t,i),e&&e.A.l||wh(t,i)}}function wh(t,e,n){n===void 0&&(n=!1),!t.l&&t.h.D&&t.m&&nw(e,n)}function ip(t,e){var n=t[he];return(n?wi(n):t)[e]}function I1(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function Er(t){t.P||(t.P=!0,t.l&&Er(t.l))}function sp(t){t.o||(t.o=tw(t.t))}function ng(t,e,n){var r=Zv(e)?On("MapSet").F(e,n):ew(e)?On("MapSet").T(e,n):t.O?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:eg(),P:!1,I:!1,R:{},l:s,t:i,k:null,o:null,j:null,C:!1},u=a,l=xu;o&&(u=[a],l=Ea);var c=Proxy.revocable(u,l),h=c.revoke,d=c.proxy;return a.k=d,a.j=h,d}(e,n):On("ES5").J(e,n);return(n?n.A:eg()).p.push(r),r}function X4(t){return Zr(t)||ln(22,t),function e(n){if(!ir(n))return n;var r,i=n[he],s=Bo(n);if(i){if(!i.P&&(i.i<4||!On("ES5").K(i)))return i.t;i.I=!0,r=E1(n,s),i.I=!1}else r=E1(n,s);return is(r,function(o,a){i&&G4(i.t,o)===a||RA(r,o,e(a))}),s===3?new Set(r):r}(t)}function E1(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return tw(t)}function J4(){function t(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var u=this[he];return xu.get(u,s)},set:function(u){var l=this[he];xu.set(l,s,u)}},a}function e(s){for(var o=s.length-1;o>=0;o--){var a=s[o][he];if(!a.P)switch(a.i){case 5:r(a)&&Er(a);break;case 4:n(a)&&Er(a)}}}function n(s){for(var o=s.t,a=s.k,u=Js(a),l=u.length-1;l>=0;l--){var c=u[l];if(c!==he){var h=o[c];if(h===void 0&&!Xs(o,c))return!0;var d=a[c],f=d&&d[he];if(f?f.t!==h:!PA(d,h))return!0}}var y=!!o[he];return u.length!==Js(o).length+(y?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var u=0;u<o.length;u++)if(!o.hasOwnProperty(u))return!0;return!1}var i={};Q4("ES5",{J:function(s,o){var a=Array.isArray(s),u=function(c,h){if(c){for(var d=Array(h.length),f=0;f<h.length;f++)Object.defineProperty(d,""+f,t(f,!0));return d}var y=DA(h);delete y[he];for(var v=Js(y),E=0;E<v.length;E++){var m=v[E];y[m]=t(m,c||!!y[m].enumerable)}return Object.create(Object.getPrototypeOf(h),y)}(a,s),l={i:a?5:4,A:o?o.A:eg(),P:!1,I:!1,R:{},l:o,t:s,k:u,o:null,g:!1,C:!1};return Object.defineProperty(u,he,{value:l,writable:!0}),u},S:function(s,o,a){a?Zr(o)&&o[he].A===s&&e(s.p):(s.u&&function u(l){if(l&&typeof l=="object"){var c=l[he];if(c){var h=c.t,d=c.k,f=c.R,y=c.i;if(y===4)is(d,function(g){g!==he&&(h[g]!==void 0||Xs(h,g)?f[g]||u(d[g]):(f[g]=!0,Er(c)))}),is(h,function(g){d[g]!==void 0||Xs(d,g)||(f[g]=!1,Er(c))});else if(y===5){if(r(c)&&(Er(c),f.length=!0),d.length<h.length)for(var v=d.length;v<h.length;v++)f[v]=!1;else for(var E=h.length;E<d.length;E++)f[E]=!0;for(var m=Math.min(d.length,h.length),p=0;p<m;p++)d.hasOwnProperty(p)||(f[p]=!0),f[p]===void 0&&u(d[p])}}}}(s.p[0]),e(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var S1,Pu,iw=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",Z4=typeof Map<"u",eV=typeof Set<"u",T1=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",xA=iw?Symbol.for("immer-nothing"):((S1={})["immer-nothing"]=!0,S1),k1=iw?Symbol.for("immer-draftable"):"__$immer_draftable",he=iw?Symbol.for("immer-state"):"__$immer_state",tV=""+Object.prototype.constructor,Js=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,DA=Object.getOwnPropertyDescriptors||function(t){var e={};return Js(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},rg={},xu={get:function(t,e){if(e===he)return t;var n=wi(t);if(!Xs(n,e))return function(i,s,o){var a,u=I1(s,o);return u?"value"in u?u.value:(a=u.get)===null||a===void 0?void 0:a.call(i.k):void 0}(t,n,e);var r=n[e];return t.I||!ir(r)?r:r===ip(t.t,e)?(sp(t),t.o[e]=ng(t.A.h,r,t)):r},has:function(t,e){return e in wi(t)},ownKeys:function(t){return Reflect.ownKeys(wi(t))},set:function(t,e,n){var r=I1(wi(t),e);if(r!=null&&r.set)return r.set.call(t.k,n),!0;if(!t.P){var i=ip(wi(t),e),s=i==null?void 0:i[he];if(s&&s.t===n)return t.o[e]=n,t.R[e]=!1,!0;if(PA(n,i)&&(n!==void 0||Xs(t.t,e)))return!0;sp(t),Er(t)}return t.o[e]===n&&(n!==void 0||e in t.o)||Number.isNaN(n)&&Number.isNaN(t.o[e])||(t.o[e]=n,t.R[e]=!0),!0},deleteProperty:function(t,e){return ip(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,sp(t),Er(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=wi(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty:function(){ln(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){ln(12)}},Ea={};is(xu,function(t,e){Ea[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),Ea.deleteProperty=function(t,e){return Ea.set.call(this,t,e,void 0)},Ea.set=function(t,e,n){return xu.set.call(this,t[0],e,n,t[0])};var nV=function(){function t(n){var r=this;this.O=T1,this.D=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var u=r;return function(v){var E=this;v===void 0&&(v=a);for(var m=arguments.length,p=Array(m>1?m-1:0),g=1;g<m;g++)p[g-1]=arguments[g];return u.produce(v,function(I){var T;return(T=s).call.apply(T,[E,I].concat(p))})}}var l;if(typeof s!="function"&&ln(6),o!==void 0&&typeof o!="function"&&ln(7),ir(i)){var c=w1(r),h=ng(r,i,void 0),d=!0;try{l=s(h),d=!1}finally{d?yh(c):tg(c)}return typeof Promise<"u"&&l instanceof Promise?l.then(function(v){return np(c,o),rp(v,c)},function(v){throw yh(c),v}):(np(c,o),rp(l,c))}if(!i||typeof i!="object"){if((l=s(i))===void 0&&(l=i),l===xA&&(l=void 0),r.D&&nw(l,!0),o){var f=[],y=[];On("Patches").M(i,l,f,y),o(f,y)}return l}ln(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(l){for(var c=arguments.length,h=Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];return r.produceWithPatches(l,function(f){return i.apply(void 0,[f].concat(h))})};var o,a,u=r.produce(i,s,function(l,c){o=l,a=c});return typeof Promise<"u"&&u instanceof Promise?u.then(function(l){return[l,o,a]}):[u,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){ir(n)||ln(8),Zr(n)&&(n=X4(n));var r=w1(this),i=ng(this,n,void 0);return i[he].C=!0,tg(r),i},e.finishDraft=function(n,r){var i=n&&n[he],s=i.A;return np(s,r),rp(void 0,s)},e.setAutoFreeze=function(n){this.D=n},e.setUseProxies=function(n){n&&!T1&&ln(20),this.O=n},e.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=On("Patches").$;return Zr(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},t}(),qt=new nV,OA=qt.produce;qt.produceWithPatches.bind(qt);qt.setAutoFreeze.bind(qt);qt.setUseProxies.bind(qt);qt.applyPatches.bind(qt);qt.createDraft.bind(qt);qt.finishDraft.bind(qt);function Du(t){return Du=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Du(t)}function rV(t,e){if(Du(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Du(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function iV(t){var e=rV(t,"string");return Du(e)==="symbol"?e:String(e)}function sV(t,e,n){return e=iV(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function C1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function A1(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?C1(Object(n),!0).forEach(function(r){sV(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function lt(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var N1=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),op=function(){return Math.random().toString(36).substring(7).split("").join(".")},_h={INIT:"@@redux/INIT"+op(),REPLACE:"@@redux/REPLACE"+op(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+op()}};function oV(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function $A(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(lt(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(lt(1));return n($A)(t,e)}if(typeof t!="function")throw new Error(lt(2));var i=t,s=e,o=[],a=o,u=!1;function l(){a===o&&(a=o.slice())}function c(){if(u)throw new Error(lt(3));return s}function h(v){if(typeof v!="function")throw new Error(lt(4));if(u)throw new Error(lt(5));var E=!0;return l(),a.push(v),function(){if(E){if(u)throw new Error(lt(6));E=!1,l();var p=a.indexOf(v);a.splice(p,1),o=null}}}function d(v){if(!oV(v))throw new Error(lt(7));if(typeof v.type>"u")throw new Error(lt(8));if(u)throw new Error(lt(9));try{u=!0,s=i(s,v)}finally{u=!1}for(var E=o=a,m=0;m<E.length;m++){var p=E[m];p()}return v}function f(v){if(typeof v!="function")throw new Error(lt(10));i=v,d({type:_h.REPLACE})}function y(){var v,E=h;return v={subscribe:function(p){if(typeof p!="object"||p===null)throw new Error(lt(11));function g(){p.next&&p.next(c())}g();var I=E(g);return{unsubscribe:I}}},v[N1]=function(){return this},v}return d({type:_h.INIT}),r={dispatch:d,subscribe:h,getState:c,replaceReducer:f},r[N1]=y,r}function aV(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:_h.INIT});if(typeof r>"u")throw new Error(lt(12));if(typeof n(void 0,{type:_h.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(lt(13))})}function uV(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var s=Object.keys(n),o;try{aV(n)}catch(a){o=a}return function(u,l){if(u===void 0&&(u={}),o)throw o;for(var c=!1,h={},d=0;d<s.length;d++){var f=s[d],y=n[f],v=u[f],E=y(v,l);if(typeof E>"u")throw l&&l.type,new Error(lt(14));h[f]=E,c=c||E!==v}return c=c||s.length!==Object.keys(u).length,c?h:u}}function Ih(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function lV(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(lt(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(u){return u(o)});return s=Ih.apply(void 0,a)(i.dispatch),A1(A1({},i),{},{dispatch:s})}}}function LA(t){var e=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,t):o(a)}}};return e}var MA=LA();MA.withExtraArgument=LA;const b1=MA;var FA=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),cV=globalThis&&globalThis.__generator||function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(c){return u([l,c])}}function u(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=l[0]&2?i.return:l[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,l[1])).done)return s;switch(i=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){n.label=l[1];break}if(l[0]===6&&n.label<s[1]){n.label=s[1],s=l;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(l);break}s[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(c){l=[6,c],i=0}finally{r=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},To=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t},hV=Object.defineProperty,dV=Object.defineProperties,fV=Object.getOwnPropertyDescriptors,R1=Object.getOwnPropertySymbols,pV=Object.prototype.hasOwnProperty,mV=Object.prototype.propertyIsEnumerable,P1=function(t,e,n){return e in t?hV(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},Lr=function(t,e){for(var n in e||(e={}))pV.call(e,n)&&P1(t,n,e[n]);if(R1)for(var r=0,i=R1(e);r<i.length;r++){var n=i[r];mV.call(e,n)&&P1(t,n,e[n])}return t},ap=function(t,e){return dV(t,fV(e))},gV=function(t,e,n){return new Promise(function(r,i){var s=function(u){try{a(n.next(u))}catch(l){i(l)}},o=function(u){try{a(n.throw(u))}catch(l){i(l)}},a=function(u){return u.done?r(u.value):Promise.resolve(u.value).then(s,o)};a((n=n.apply(t,e)).next())})},yV=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Ih:Ih.apply(null,arguments)};function vV(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}var wV=function(t){FA(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,To([void 0],n[0].concat(this)))):new(e.bind.apply(e,To([void 0],n.concat(this))))},e}(Array),_V=function(t){FA(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,To([void 0],n[0].concat(this)))):new(e.bind.apply(e,To([void 0],n.concat(this))))},e}(Array);function ig(t){return ir(t)?OA(t,function(){}):t}function IV(t){return typeof t=="boolean"}function EV(){return function(e){return SV(e)}}function SV(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var r=new wV;return n&&(IV(n)?r.push(b1):r.push(b1.withExtraArgument(n.extraArgument))),r}var TV=!0;function KV(t){var e=EV(),n=t||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?e():s,a=n.devTools,u=a===void 0?!0:a,l=n.preloadedState,c=l===void 0?void 0:l,h=n.enhancers,d=h===void 0?void 0:h,f;if(typeof i=="function")f=i;else if(vV(i))f=uV(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var y=o;typeof y=="function"&&(y=y(e));var v=lV.apply(void 0,y),E=Ih;u&&(E=yV(Lr({trace:!TV},typeof u=="object"&&u)));var m=new _V(v),p=m;Array.isArray(d)?p=To([v],d):typeof d=="function"&&(p=d(m));var g=E.apply(void 0,p);return $A(f,c,g)}function Mr(t,e){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(e){var s=e.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return Lr(Lr({type:t,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:t,payload:r[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(r){return r.type===t},n}function UA(t){var e={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return t(i),[e,n,r]}function kV(t){return typeof t=="function"}function CV(t,e,n,r){n===void 0&&(n=[]);var i=typeof e=="function"?UA(e):[e,n,r],s=i[0],o=i[1],a=i[2],u;if(kV(t))u=function(){return ig(t())};else{var l=ig(t);u=function(){return l}}function c(h,d){h===void 0&&(h=u());var f=To([s[d.type]],o.filter(function(y){var v=y.matcher;return v(d)}).map(function(y){var v=y.reducer;return v}));return f.filter(function(y){return!!y}).length===0&&(f=[a]),f.reduce(function(y,v){if(v)if(Zr(y)){var E=y,m=v(E,d);return m===void 0?y:m}else{if(ir(y))return OA(y,function(p){return v(p,d)});var m=v(y,d);if(m===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}return y},h)}return c.getInitialState=u,c}function AV(t,e){return t+"/"+e}function WV(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof t.initialState=="function"?t.initialState:ig(t.initialState),r=t.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(c){var h=r[c],d=AV(e,c),f,y;"reducer"in h?(f=h.reducer,y=h.prepare):f=h,s[c]=f,o[d]=f,a[c]=y?Mr(d,y):Mr(d)});function u(){var c=typeof t.extraReducers=="function"?UA(t.extraReducers):[t.extraReducers],h=c[0],d=h===void 0?{}:h,f=c[1],y=f===void 0?[]:f,v=c[2],E=v===void 0?void 0:v,m=Lr(Lr({},d),o);return CV(n,function(p){for(var g in m)p.addCase(g,m[g]);for(var I=0,T=y;I<T.length;I++){var N=T[I];p.addMatcher(N.matcher,N.reducer)}E&&p.addDefaultCase(E)})}var l;return{name:e,reducer:function(c,h){return l||(l=u()),l(c,h)},actions:a,caseReducers:s,getInitialState:function(){return l||(l=u()),l.getInitialState()}}}var NV="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",bV=function(t){t===void 0&&(t=21);for(var e="",n=t;n--;)e+=NV[Math.random()*64|0];return e},RV=["name","message","stack","code"],up=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),x1=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),PV=function(t){if(typeof t=="object"&&t!==null){for(var e={},n=0,r=RV;n<r.length;n++){var i=r[n];typeof t[i]=="string"&&(e[i]=t[i])}return e}return{message:String(t)}};(function(){function t(e,n,r){var i=Mr(e+"/fulfilled",function(l,c,h,d){return{payload:l,meta:ap(Lr({},d||{}),{arg:h,requestId:c,requestStatus:"fulfilled"})}}),s=Mr(e+"/pending",function(l,c,h){return{payload:void 0,meta:ap(Lr({},h||{}),{arg:c,requestId:l,requestStatus:"pending"})}}),o=Mr(e+"/rejected",function(l,c,h,d,f){return{payload:d,error:(r&&r.serializeError||PV)(l||"Rejected"),meta:ap(Lr({},f||{}),{arg:h,requestId:c,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function l(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return l.prototype.abort=function(){},l}();function u(l){return function(c,h,d){var f=r!=null&&r.idGenerator?r.idGenerator(l):bV(),y=new a,v;function E(p){v=p,y.abort()}var m=function(){return gV(this,null,function(){var p,g,I,T,N,b,O;return cV(this,function(Z){switch(Z.label){case 0:return Z.trys.push([0,4,,5]),T=(p=r==null?void 0:r.condition)==null?void 0:p.call(r,l,{getState:h,extra:d}),DV(T)?[4,T]:[3,2];case 1:T=Z.sent(),Z.label=2;case 2:if(T===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return N=new Promise(function(V,Ye){return y.signal.addEventListener("abort",function(){return Ye({name:"AbortError",message:v||"Aborted"})})}),c(s(f,l,(g=r==null?void 0:r.getPendingMeta)==null?void 0:g.call(r,{requestId:f,arg:l},{getState:h,extra:d}))),[4,Promise.race([N,Promise.resolve(n(l,{dispatch:c,getState:h,extra:d,requestId:f,signal:y.signal,abort:E,rejectWithValue:function(V,Ye){return new up(V,Ye)},fulfillWithValue:function(V,Ye){return new x1(V,Ye)}})).then(function(V){if(V instanceof up)throw V;return V instanceof x1?i(V.payload,f,l,V.meta):i(V,f,l)})])];case 3:return I=Z.sent(),[3,5];case 4:return b=Z.sent(),I=b instanceof up?o(null,f,l,b.payload,b.meta):o(b,f,l),[3,5];case 5:return O=r&&!r.dispatchConditionRejection&&o.match(I)&&I.meta.condition,O||c(I),[2,I]}})})}();return Object.assign(m,{abort:E,requestId:f,arg:l,unwrap:function(){return m.then(xV)}})}}return Object.assign(u,{pending:s,rejected:o,fulfilled:i,typePrefix:e})}return t.withTypes=function(){return t},t})();function xV(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function DV(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var sw="listenerMiddleware";Mr(sw+"/add");Mr(sw+"/removeAll");Mr(sw+"/remove");var D1;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);J4();export{In as G,OV as P,KV as a,hw as b,WV as c,Uu as f,aw as j,e2 as s,$V as u};
