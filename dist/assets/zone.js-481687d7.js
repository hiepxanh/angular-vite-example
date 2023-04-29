var Ye=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/**
 * @license Angular v<unknown>
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */(function(e){const t=e.performance;function c(H){t&&t.mark&&t.mark(H)}function s(H,r){t&&t.measure&&t.measure(H,r)}c("Zone");const a=e.__Zone_symbol_prefix||"__zone_symbol__";function l(H){return a+H}const m=e[l("forceDuplicateZoneCheck")]===!0;if(e.Zone){if(m||typeof e.Zone.__symbol__!="function")throw new Error("Zone already loaded.");return e.Zone}class _{static assertZonePatched(){if(e.Promise!==oe.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let r=_.current;for(;r.parent;)r=r.parent;return r}static get current(){return U.zone}static get currentTask(){return ne}static __load_patch(r,n,o=!1){if(oe.hasOwnProperty(r)){if(!o&&m)throw Error("Already loaded patch: "+r)}else if(!e["__Zone_disable_"+r]){const b="Zone:"+r;c(b),oe[r]=n(e,_,z),s(b,b)}}get parent(){return this._parent}get name(){return this._name}constructor(r,n){this._parent=r,this._name=n?n.name||"unnamed":"<root>",this._properties=n&&n.properties||{},this._zoneDelegate=new k(this,this._parent&&this._parent._zoneDelegate,n)}get(r){const n=this.getZoneWith(r);if(n)return n._properties[r]}getZoneWith(r){let n=this;for(;n;){if(n._properties.hasOwnProperty(r))return n;n=n._parent}return null}fork(r){if(!r)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,r)}wrap(r,n){if(typeof r!="function")throw new Error("Expecting function got: "+r);const o=this._zoneDelegate.intercept(this,r,n),b=this;return function(){return b.runGuarded(o,this,arguments,n)}}run(r,n,o,b){U={parent:U,zone:this};try{return this._zoneDelegate.invoke(this,r,n,o,b)}finally{U=U.parent}}runGuarded(r,n=null,o,b){U={parent:U,zone:this};try{try{return this._zoneDelegate.invoke(this,r,n,o,b)}catch(G){if(this._zoneDelegate.handleError(this,G))throw G}}finally{U=U.parent}}runTask(r,n,o){if(r.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(r.zone||$).name+"; Execution: "+this.name+")");if(r.state===j&&(r.type===K||r.type===P))return;const b=r.state!=T;b&&r._transitionTo(T,L),r.runCount++;const G=ne;ne=r,U={parent:U,zone:this};try{r.type==P&&r.data&&!r.data.isPeriodic&&(r.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,r,n,o)}catch(ee){if(this._zoneDelegate.handleError(this,ee))throw ee}}finally{r.state!==j&&r.state!==d&&(r.type==K||r.data&&r.data.isPeriodic?b&&r._transitionTo(L,T):(r.runCount=0,this._updateTaskCount(r,-1),b&&r._transitionTo(j,T,j))),U=U.parent,ne=G}}scheduleTask(r){if(r.zone&&r.zone!==this){let o=this;for(;o;){if(o===r.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${r.zone.name}`);o=o.parent}}r._transitionTo(X,j);const n=[];r._zoneDelegates=n,r._zone=this;try{r=this._zoneDelegate.scheduleTask(this,r)}catch(o){throw r._transitionTo(d,X,j),this._zoneDelegate.handleError(this,o),o}return r._zoneDelegates===n&&this._updateTaskCount(r,1),r.state==X&&r._transitionTo(L,X),r}scheduleMicroTask(r,n,o,b){return this.scheduleTask(new p(N,r,n,o,b,void 0))}scheduleMacroTask(r,n,o,b,G){return this.scheduleTask(new p(P,r,n,o,b,G))}scheduleEventTask(r,n,o,b,G){return this.scheduleTask(new p(K,r,n,o,b,G))}cancelTask(r){if(r.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(r.zone||$).name+"; Execution: "+this.name+")");if(!(r.state!==L&&r.state!==T)){r._transitionTo(x,L,T);try{this._zoneDelegate.cancelTask(this,r)}catch(n){throw r._transitionTo(d,x),this._zoneDelegate.handleError(this,n),n}return this._updateTaskCount(r,-1),r._transitionTo(j,x),r.runCount=0,r}}_updateTaskCount(r,n){const o=r._zoneDelegates;n==-1&&(r._zoneDelegates=null);for(let b=0;b<o.length;b++)o[b]._updateTaskCount(r.type,n)}}_.__symbol__=l;const w={name:"",onHasTask:(H,r,n,o)=>H.hasTask(n,o),onScheduleTask:(H,r,n,o)=>H.scheduleTask(n,o),onInvokeTask:(H,r,n,o,b,G)=>H.invokeTask(n,o,b,G),onCancelTask:(H,r,n,o)=>H.cancelTask(n,o)};class k{constructor(r,n,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=r,this._parentDelegate=n,this._forkZS=o&&(o&&o.onFork?o:n._forkZS),this._forkDlgt=o&&(o.onFork?n:n._forkDlgt),this._forkCurrZone=o&&(o.onFork?this.zone:n._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:n._interceptZS),this._interceptDlgt=o&&(o.onIntercept?n:n._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this.zone:n._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:n._invokeZS),this._invokeDlgt=o&&(o.onInvoke?n:n._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this.zone:n._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:n._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?n:n._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this.zone:n._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:n._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?n:n._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this.zone:n._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:n._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?n:n._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this.zone:n._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:n._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?n:n._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this.zone:n._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const b=o&&o.onHasTask,G=n&&n._hasTaskZS;(b||G)&&(this._hasTaskZS=b?o:w,this._hasTaskDlgt=n,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=r,o.onScheduleTask||(this._scheduleTaskZS=w,this._scheduleTaskDlgt=n,this._scheduleTaskCurrZone=this.zone),o.onInvokeTask||(this._invokeTaskZS=w,this._invokeTaskDlgt=n,this._invokeTaskCurrZone=this.zone),o.onCancelTask||(this._cancelTaskZS=w,this._cancelTaskDlgt=n,this._cancelTaskCurrZone=this.zone))}fork(r,n){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,r,n):new _(r,n)}intercept(r,n,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,r,n,o):n}invoke(r,n,o,b,G){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,r,n,o,b,G):n.apply(o,b)}handleError(r,n){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,r,n):!0}scheduleTask(r,n){let o=n;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,r,n),o||(o=n);else if(n.scheduleFn)n.scheduleFn(n);else if(n.type==N)R(n);else throw new Error("Task is missing scheduleFn.");return o}invokeTask(r,n,o,b){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,r,n,o,b):n.callback.apply(o,b)}cancelTask(r,n){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,r,n);else{if(!n.cancelFn)throw Error("Task is not cancelable");o=n.cancelFn(n)}return o}hasTask(r,n){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,r,n)}catch(o){this.handleError(r,o)}}_updateTaskCount(r,n){const o=this._taskCounts,b=o[r],G=o[r]=b+n;if(G<0)throw new Error("More tasks executed then were scheduled.");if(b==0||G==0){const ee={microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:r};this.hasTask(this.zone,ee)}}}class p{constructor(r,n,o,b,G,ee){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=r,this.source=n,this.data=b,this.scheduleFn=G,this.cancelFn=ee,!o)throw new Error("callback is not defined");this.callback=o;const u=this;r===K&&b&&b.useG?this.invoke=p.invokeTask:this.invoke=function(){return p.invokeTask.call(e,u,this,arguments)}}static invokeTask(r,n,o){r||(r=this),Q++;try{return r.runCount++,r.zone.runTask(r,n,o)}finally{Q==1&&E(),Q--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(j,X)}_transitionTo(r,n,o){if(this._state===n||this._state===o)this._state=r,r==j&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${r}', expecting state '${n}'${o?" or '"+o+"'":""}, was '${this._state}'.`)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const I=l("setTimeout"),Z=l("Promise"),O=l("then");let B=[],M=!1,J;function q(H){if(J||e[Z]&&(J=e[Z].resolve(0)),J){let r=J[O];r||(r=J.then),r.call(J,H)}else e[I](H,0)}function R(H){Q===0&&B.length===0&&q(E),H&&B.push(H)}function E(){if(!M){for(M=!0;B.length;){const H=B;B=[];for(let r=0;r<H.length;r++){const n=H[r];try{n.zone.runTask(n,null,null)}catch(o){z.onUnhandledError(o)}}}z.microtaskDrainDone(),M=!1}}const $={name:"NO ZONE"},j="notScheduled",X="scheduling",L="scheduled",T="running",x="canceling",d="unknown",N="microTask",P="macroTask",K="eventTask",oe={},z={symbol:l,currentZoneFrame:()=>U,onUnhandledError:W,microtaskDrainDone:W,scheduleMicroTask:R,showUncaughtError:()=>!_[l("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:W,patchMethod:()=>W,bindArguments:()=>[],patchThen:()=>W,patchMacroTask:()=>W,patchEventPrototype:()=>W,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>W,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>W,wrapWithCurrentZone:()=>W,filterProperties:()=>[],attachOriginToPatched:()=>W,_redefineProperty:()=>W,patchCallbacks:()=>W,nativeScheduleMicroTask:q};let U={parent:null,zone:new _(null,null)},ne=null,Q=0;function W(){}return s("Zone","Zone"),e.Zone=_})(typeof window<"u"&&window||typeof self<"u"&&self||Ye);const me=Object.getOwnPropertyDescriptor,Ne=Object.defineProperty,Ie=Object.getPrototypeOf,ct=Object.create,at=Array.prototype.slice,Le="addEventListener",Me="removeEventListener",Se=Zone.__symbol__(Le),De=Zone.__symbol__(Me),ie="true",ce="false",pe=Zone.__symbol__("");function Ae(e,t){return Zone.current.wrap(e,t)}function je(e,t,c,s,a){return Zone.current.scheduleMacroTask(e,t,c,s,a)}const A=Zone.__symbol__,we=typeof window<"u",Te=we?window:void 0,Y=we&&Te||typeof self=="object"&&self||Ye,lt="removeAttribute";function He(e,t){for(let c=e.length-1;c>=0;c--)typeof e[c]=="function"&&(e[c]=Ae(e[c],t+"_"+c));return e}function ut(e,t){const c=e.constructor.name;for(let s=0;s<t.length;s++){const a=t[s],l=e[a];if(l){const m=me(e,a);if(!$e(m))continue;e[a]=(_=>{const w=function(){return _.apply(this,He(arguments,c+"."+a))};return ae(w,_),w})(l)}}}function $e(e){return e?e.writable===!1?!1:!(typeof e.get=="function"&&typeof e.set>"u"):!0}const Je=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Pe=!("nw"in Y)&&typeof Y.process<"u"&&{}.toString.call(Y.process)==="[object process]",xe=!Pe&&!Je&&!!(we&&Te.HTMLElement),Ke=typeof Y.process<"u"&&{}.toString.call(Y.process)==="[object process]"&&!Je&&!!(we&&Te.HTMLElement),be={},We=function(e){if(e=e||Y.event,!e)return;let t=be[e.type];t||(t=be[e.type]=A("ON_PROPERTY"+e.type));const c=this||e.target||Y,s=c[t];let a;if(xe&&c===Te&&e.type==="error"){const l=e;a=s&&s.call(this,l.message,l.filename,l.lineno,l.colno,l.error),a===!0&&e.preventDefault()}else a=s&&s.apply(this,arguments),a!=null&&!a&&e.preventDefault();return a};function qe(e,t,c){let s=me(e,t);if(!s&&c&&me(c,t)&&(s={enumerable:!0,configurable:!0}),!s||!s.configurable)return;const a=A("on"+t+"patched");if(e.hasOwnProperty(a)&&e[a])return;delete s.writable,delete s.value;const l=s.get,m=s.set,_=t.slice(2);let w=be[_];w||(w=be[_]=A("ON_PROPERTY"+_)),s.set=function(k){let p=this;if(!p&&e===Y&&(p=Y),!p)return;typeof p[w]=="function"&&p.removeEventListener(_,We),m&&m.call(p,null),p[w]=k,typeof k=="function"&&p.addEventListener(_,We,!1)},s.get=function(){let k=this;if(!k&&e===Y&&(k=Y),!k)return null;const p=k[w];if(p)return p;if(l){let I=l.call(this);if(I)return s.set.call(this,I),typeof k[lt]=="function"&&k.removeAttribute(t),I}return null},Ne(e,t,s),e[a]=!0}function Qe(e,t,c){if(t)for(let s=0;s<t.length;s++)qe(e,"on"+t[s],c);else{const s=[];for(const a in e)a.slice(0,2)=="on"&&s.push(a);for(let a=0;a<s.length;a++)qe(e,s[a],c)}}const re=A("originalInstance");function ge(e){const t=Y[e];if(!t)return;Y[A(e)]=t,Y[e]=function(){const a=He(arguments,e);switch(a.length){case 0:this[re]=new t;break;case 1:this[re]=new t(a[0]);break;case 2:this[re]=new t(a[0],a[1]);break;case 3:this[re]=new t(a[0],a[1],a[2]);break;case 4:this[re]=new t(a[0],a[1],a[2],a[3]);break;default:throw new Error("Arg list too long.")}},ae(Y[e],t);const c=new t(function(){});let s;for(s in c)e==="XMLHttpRequest"&&s==="responseBlob"||function(a){typeof c[a]=="function"?Y[e].prototype[a]=function(){return this[re][a].apply(this[re],arguments)}:Ne(Y[e].prototype,a,{set:function(l){typeof l=="function"?(this[re][a]=Ae(l,e+"."+a),ae(this[re][a],l)):this[re][a]=l},get:function(){return this[re][a]}})}(s);for(s in t)s!=="prototype"&&t.hasOwnProperty(s)&&(Y[e][s]=t[s])}function le(e,t,c){let s=e;for(;s&&!s.hasOwnProperty(t);)s=Ie(s);!s&&e[t]&&(s=e);const a=A(t);let l=null;if(s&&(!(l=s[a])||!s.hasOwnProperty(a))){l=s[a]=s[t];const m=s&&me(s,t);if($e(m)){const _=c(l,a,t);s[t]=function(){return _(this,arguments)},ae(s[t],l)}}return l}function ft(e,t,c){let s=null;function a(l){const m=l.data;return m.args[m.cbIdx]=function(){l.invoke.apply(this,arguments)},s.apply(m.target,m.args),l}s=le(e,t,l=>function(m,_){const w=c(m,_);return w.cbIdx>=0&&typeof _[w.cbIdx]=="function"?je(w.name,_[w.cbIdx],w,a):l.apply(m,_)})}function ae(e,t){e[A("OriginalDelegate")]=t}let Xe=!1,Ze=!1;function ht(){try{const e=Te.navigator.userAgent;if(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1)return!0}catch{}return!1}function dt(){if(Xe)return Ze;Xe=!0;try{const e=Te.navigator.userAgent;(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1||e.indexOf("Edge/")!==-1)&&(Ze=!0)}catch{}return Ze}Zone.__load_patch("ZoneAwarePromise",(e,t,c)=>{const s=Object.getOwnPropertyDescriptor,a=Object.defineProperty;function l(u){if(u&&u.toString===Object.prototype.toString){const f=u.constructor&&u.constructor.name;return(f||"")+": "+JSON.stringify(u)}return u?u.toString():Object.prototype.toString.call(u)}const m=c.symbol,_=[],w=e[m("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]===!0,k=m("Promise"),p=m("then"),I="__creationTrace__";c.onUnhandledError=u=>{if(c.showUncaughtError()){const f=u&&u.rejection;f?console.error("Unhandled Promise rejection:",f instanceof Error?f.message:f,"; Zone:",u.zone.name,"; Task:",u.task&&u.task.source,"; Value:",f,f instanceof Error?f.stack:void 0):console.error(u)}},c.microtaskDrainDone=()=>{for(;_.length;){const u=_.shift();try{u.zone.runGuarded(()=>{throw u.throwOriginal?u.rejection:u})}catch(f){O(f)}}};const Z=m("unhandledPromiseRejectionHandler");function O(u){c.onUnhandledError(u);try{const f=t[Z];typeof f=="function"&&f.call(this,u)}catch{}}function B(u){return u&&u.then}function M(u){return u}function J(u){return n.reject(u)}const q=m("state"),R=m("value"),E=m("finally"),$=m("parentPromiseValue"),j=m("parentPromiseState"),X="Promise.then",L=null,T=!0,x=!1,d=0;function N(u,f){return i=>{try{z(u,f,i)}catch(h){z(u,!1,h)}}}const P=function(){let u=!1;return function(i){return function(){u||(u=!0,i.apply(null,arguments))}}},K="Promise resolved with itself",oe=m("currentTaskTrace");function z(u,f,i){const h=P();if(u===i)throw new TypeError(K);if(u[q]===L){let g=null;try{(typeof i=="object"||typeof i=="function")&&(g=i&&i.then)}catch(v){return h(()=>{z(u,!1,v)})(),u}if(f!==x&&i instanceof n&&i.hasOwnProperty(q)&&i.hasOwnProperty(R)&&i[q]!==L)ne(i),z(u,i[q],i[R]);else if(f!==x&&typeof g=="function")try{g.call(i,h(N(u,f)),h(N(u,!1)))}catch(v){h(()=>{z(u,!1,v)})()}else{u[q]=f;const v=u[R];if(u[R]=i,u[E]===E&&f===T&&(u[q]=u[j],u[R]=u[$]),f===x&&i instanceof Error){const y=t.currentTask&&t.currentTask.data&&t.currentTask.data[I];y&&a(i,oe,{configurable:!0,enumerable:!1,writable:!0,value:y})}for(let y=0;y<v.length;)Q(u,v[y++],v[y++],v[y++],v[y++]);if(v.length==0&&f==x){u[q]=d;let y=i;try{throw new Error("Uncaught (in promise): "+l(i)+(i&&i.stack?`
`+i.stack:""))}catch(C){y=C}w&&(y.throwOriginal=!0),y.rejection=i,y.promise=u,y.zone=t.current,y.task=t.currentTask,_.push(y),c.scheduleMicroTask()}}}return u}const U=m("rejectionHandledHandler");function ne(u){if(u[q]===d){try{const f=t[U];f&&typeof f=="function"&&f.call(this,{rejection:u[R],promise:u})}catch{}u[q]=x;for(let f=0;f<_.length;f++)u===_[f].promise&&_.splice(f,1)}}function Q(u,f,i,h,g){ne(u);const v=u[q],y=v?typeof h=="function"?h:M:typeof g=="function"?g:J;f.scheduleMicroTask(X,()=>{try{const C=u[R],S=!!i&&E===i[E];S&&(i[$]=C,i[j]=v);const D=f.run(y,void 0,S&&y!==J&&y!==M?[]:[C]);z(i,!0,D)}catch(C){z(i,!1,C)}},i)}const W="function ZoneAwarePromise() { [native code] }",H=function(){},r=e.AggregateError;class n{static toString(){return W}static resolve(f){return z(new this(null),T,f)}static reject(f){return z(new this(null),x,f)}static any(f){if(!f||typeof f[Symbol.iterator]!="function")return Promise.reject(new r([],"All promises were rejected"));const i=[];let h=0;try{for(let y of f)h++,i.push(n.resolve(y))}catch{return Promise.reject(new r([],"All promises were rejected"))}if(h===0)return Promise.reject(new r([],"All promises were rejected"));let g=!1;const v=[];return new n((y,C)=>{for(let S=0;S<i.length;S++)i[S].then(D=>{g||(g=!0,y(D))},D=>{v.push(D),h--,h===0&&(g=!0,C(new r(v,"All promises were rejected")))})})}static race(f){let i,h,g=new this((C,S)=>{i=C,h=S});function v(C){i(C)}function y(C){h(C)}for(let C of f)B(C)||(C=this.resolve(C)),C.then(v,y);return g}static all(f){return n.allWithCallback(f)}static allSettled(f){return(this&&this.prototype instanceof n?this:n).allWithCallback(f,{thenCallback:h=>({status:"fulfilled",value:h}),errorCallback:h=>({status:"rejected",reason:h})})}static allWithCallback(f,i){let h,g,v=new this((D,V)=>{h=D,g=V}),y=2,C=0;const S=[];for(let D of f){B(D)||(D=this.resolve(D));const V=C;try{D.then(F=>{S[V]=i?i.thenCallback(F):F,y--,y===0&&h(S)},F=>{i?(S[V]=i.errorCallback(F),y--,y===0&&h(S)):g(F)})}catch(F){g(F)}y++,C++}return y-=2,y===0&&h(S),v}constructor(f){const i=this;if(!(i instanceof n))throw new Error("Must be an instanceof Promise.");i[q]=L,i[R]=[];try{const h=P();f&&f(h(N(i,T)),h(N(i,x)))}catch(h){z(i,!1,h)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return n}then(f,i){var y;let h=(y=this.constructor)==null?void 0:y[Symbol.species];(!h||typeof h!="function")&&(h=this.constructor||n);const g=new h(H),v=t.current;return this[q]==L?this[R].push(v,g,f,i):Q(this,v,g,f,i),g}catch(f){return this.then(null,f)}finally(f){var v;let i=(v=this.constructor)==null?void 0:v[Symbol.species];(!i||typeof i!="function")&&(i=n);const h=new i(H);h[E]=E;const g=t.current;return this[q]==L?this[R].push(g,h,f,f):Q(this,g,h,f,f),h}}n.resolve=n.resolve,n.reject=n.reject,n.race=n.race,n.all=n.all;const o=e[k]=e.Promise;e.Promise=n;const b=m("thenPatched");function G(u){const f=u.prototype,i=s(f,"then");if(i&&(i.writable===!1||!i.configurable))return;const h=f.then;f[p]=h,u.prototype.then=function(g,v){return new n((C,S)=>{h.call(this,C,S)}).then(g,v)},u[b]=!0}c.patchThen=G;function ee(u){return function(f,i){let h=u.apply(f,i);if(h instanceof n)return h;let g=h.constructor;return g[b]||G(g),h}}return o&&(G(o),le(e,"fetch",u=>ee(u))),Promise[t.__symbol__("uncaughtPromiseErrors")]=_,n});Zone.__load_patch("toString",e=>{const t=Function.prototype.toString,c=A("OriginalDelegate"),s=A("Promise"),a=A("Error"),l=function(){if(typeof this=="function"){const k=this[c];if(k)return typeof k=="function"?t.call(k):Object.prototype.toString.call(k);if(this===Promise){const p=e[s];if(p)return t.call(p)}if(this===Error){const p=e[a];if(p)return t.call(p)}}return t.call(this)};l[c]=t,Function.prototype.toString=l;const m=Object.prototype.toString,_="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?_:m.call(this)}});let _e=!1;if(typeof window<"u")try{const e=Object.defineProperty({},"passive",{get:function(){_e=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{_e=!1}const _t={useG:!0},te={},et={},tt=new RegExp("^"+pe+"(\\w+)(true|false)$"),nt=A("propagationStopped");function rt(e,t){const c=(t?t(e):e)+ce,s=(t?t(e):e)+ie,a=pe+c,l=pe+s;te[e]={},te[e][ce]=a,te[e][ie]=l}function Et(e,t,c,s){const a=s&&s.add||Le,l=s&&s.rm||Me,m=s&&s.listeners||"eventListeners",_=s&&s.rmAll||"removeAllListeners",w=A(a),k="."+a+":",p="prependListener",I="."+p+":",Z=function(R,E,$){if(R.isRemoved)return;const j=R.callback;typeof j=="object"&&j.handleEvent&&(R.callback=T=>j.handleEvent(T),R.originalDelegate=j);let X;try{R.invoke(R,E,[$])}catch(T){X=T}const L=R.options;if(L&&typeof L=="object"&&L.once){const T=R.originalDelegate?R.originalDelegate:R.callback;E[l].call(E,$.type,T,L)}return X};function O(R,E,$){if(E=E||e.event,!E)return;const j=R||E.target||e,X=j[te[E.type][$?ie:ce]];if(X){const L=[];if(X.length===1){const T=Z(X[0],j,E);T&&L.push(T)}else{const T=X.slice();for(let x=0;x<T.length&&!(E&&E[nt]===!0);x++){const d=Z(T[x],j,E);d&&L.push(d)}}if(L.length===1)throw L[0];for(let T=0;T<L.length;T++){const x=L[T];t.nativeScheduleMicroTask(()=>{throw x})}}}const B=function(R){return O(this,R,!1)},M=function(R){return O(this,R,!0)};function J(R,E){if(!R)return!1;let $=!0;E&&E.useG!==void 0&&($=E.useG);const j=E&&E.vh;let X=!0;E&&E.chkDup!==void 0&&(X=E.chkDup);let L=!1;E&&E.rt!==void 0&&(L=E.rt);let T=R;for(;T&&!T.hasOwnProperty(a);)T=Ie(T);if(!T&&R[a]&&(T=R),!T||T[w])return!1;const x=E&&E.eventNameToString,d={},N=T[w]=T[a],P=T[A(l)]=T[l],K=T[A(m)]=T[m],oe=T[A(_)]=T[_];let z;E&&E.prepend&&(z=T[A(E.prepend)]=T[E.prepend]);function U(i,h){return!_e&&typeof i=="object"&&i?!!i.capture:!_e||!h?i:typeof i=="boolean"?{capture:i,passive:!0}:i?typeof i=="object"&&i.passive!==!1?{...i,passive:!0}:i:{passive:!0}}const ne=function(i){if(!d.isExisting)return N.call(d.target,d.eventName,d.capture?M:B,d.options)},Q=function(i){if(!i.isRemoved){const h=te[i.eventName];let g;h&&(g=h[i.capture?ie:ce]);const v=g&&i.target[g];if(v){for(let y=0;y<v.length;y++)if(v[y]===i){v.splice(y,1),i.isRemoved=!0,v.length===0&&(i.allRemoved=!0,i.target[g]=null);break}}}if(i.allRemoved)return P.call(i.target,i.eventName,i.capture?M:B,i.options)},W=function(i){return N.call(d.target,d.eventName,i.invoke,d.options)},H=function(i){return z.call(d.target,d.eventName,i.invoke,d.options)},r=function(i){return P.call(i.target,i.eventName,i.invoke,i.options)},n=$?ne:W,o=$?Q:r,b=function(i,h){const g=typeof h;return g==="function"&&i.callback===h||g==="object"&&i.originalDelegate===h},G=E&&E.diff?E.diff:b,ee=Zone[A("UNPATCHED_EVENTS")],u=e[A("PASSIVE_EVENTS")],f=function(i,h,g,v,y=!1,C=!1){return function(){const S=this||e;let D=arguments[0];E&&E.transferEventName&&(D=E.transferEventName(D));let V=arguments[1];if(!V)return i.apply(this,arguments);if(Pe&&D==="uncaughtException")return i.apply(this,arguments);let F=!1;if(typeof V!="function"){if(!V.handleEvent)return i.apply(this,arguments);F=!0}if(j&&!j(i,V,S,arguments))return;const ue=_e&&!!u&&u.indexOf(D)!==-1,se=U(arguments[2],ue);if(ee){for(let he=0;he<ee.length;he++)if(D===ee[he])return ue?i.call(S,D,V,se):i.apply(this,arguments)}const Re=se?typeof se=="boolean"?!0:se.capture:!1,Ge=se&&typeof se=="object"?se.once:!1,it=Zone.current;let Ce=te[D];Ce||(rt(D,x),Ce=te[D]);const Ve=Ce[Re?ie:ce];let de=S[Ve],Fe=!1;if(de){if(Fe=!0,X){for(let he=0;he<de.length;he++)if(G(de[he],V))return}}else de=S[Ve]=[];let ke;const Be=S.constructor.name,Ue=et[Be];Ue&&(ke=Ue[D]),ke||(ke=Be+h+(x?x(D):D)),d.options=se,Ge&&(d.options.once=!1),d.target=S,d.capture=Re,d.eventName=D,d.isExisting=Fe;const ye=$?_t:void 0;ye&&(ye.taskData=d);const fe=it.scheduleEventTask(ke,V,ye,g,v);if(d.target=null,ye&&(ye.taskData=null),Ge&&(se.once=!0),!_e&&typeof fe.options=="boolean"||(fe.options=se),fe.target=S,fe.capture=Re,fe.eventName=D,F&&(fe.originalDelegate=V),C?de.unshift(fe):de.push(fe),y)return S}};return T[a]=f(N,k,n,o,L),z&&(T[p]=f(z,I,H,o,L,!0)),T[l]=function(){const i=this||e;let h=arguments[0];E&&E.transferEventName&&(h=E.transferEventName(h));const g=arguments[2],v=g?typeof g=="boolean"?!0:g.capture:!1,y=arguments[1];if(!y)return P.apply(this,arguments);if(j&&!j(P,y,i,arguments))return;const C=te[h];let S;C&&(S=C[v?ie:ce]);const D=S&&i[S];if(D)for(let V=0;V<D.length;V++){const F=D[V];if(G(F,y)){if(D.splice(V,1),F.isRemoved=!0,D.length===0&&(F.allRemoved=!0,i[S]=null,typeof h=="string")){const ue=pe+"ON_PROPERTY"+h;i[ue]=null}return F.zone.cancelTask(F),L?i:void 0}}return P.apply(this,arguments)},T[m]=function(){const i=this||e;let h=arguments[0];E&&E.transferEventName&&(h=E.transferEventName(h));const g=[],v=ot(i,x?x(h):h);for(let y=0;y<v.length;y++){const C=v[y];let S=C.originalDelegate?C.originalDelegate:C.callback;g.push(S)}return g},T[_]=function(){const i=this||e;let h=arguments[0];if(h){E&&E.transferEventName&&(h=E.transferEventName(h));const g=te[h];if(g){const v=g[ce],y=g[ie],C=i[v],S=i[y];if(C){const D=C.slice();for(let V=0;V<D.length;V++){const F=D[V];let ue=F.originalDelegate?F.originalDelegate:F.callback;this[l].call(this,h,ue,F.options)}}if(S){const D=S.slice();for(let V=0;V<D.length;V++){const F=D[V];let ue=F.originalDelegate?F.originalDelegate:F.callback;this[l].call(this,h,ue,F.options)}}}}else{const g=Object.keys(i);for(let v=0;v<g.length;v++){const y=g[v],C=tt.exec(y);let S=C&&C[1];S&&S!=="removeListener"&&this[_].call(this,S)}this[_].call(this,"removeListener")}if(L)return this},ae(T[a],N),ae(T[l],P),oe&&ae(T[_],oe),K&&ae(T[m],K),!0}let q=[];for(let R=0;R<c.length;R++)q[R]=J(c[R],s);return q}function ot(e,t){if(!t){const l=[];for(let m in e){const _=tt.exec(m);let w=_&&_[1];if(w&&(!t||w===t)){const k=e[m];if(k)for(let p=0;p<k.length;p++)l.push(k[p])}}return l}let c=te[t];c||(rt(t),c=te[t]);const s=e[c[ce]],a=e[c[ie]];return s?a?s.concat(a):s.slice():a?a.slice():[]}function Tt(e,t){const c=e.Event;c&&c.prototype&&t.patchMethod(c.prototype,"stopImmediatePropagation",s=>function(a,l){a[nt]=!0,s&&s.apply(a,l)})}function yt(e,t,c,s,a){const l=Zone.__symbol__(s);if(t[l])return;const m=t[l]=t[s];t[s]=function(_,w,k){return w&&w.prototype&&a.forEach(function(p){const I=`${c}.${s}::`+p,Z=w.prototype;try{if(Z.hasOwnProperty(p)){const O=e.ObjectGetOwnPropertyDescriptor(Z,p);O&&O.value?(O.value=e.wrapWithCurrentZone(O.value,I),e._redefineProperty(w.prototype,p,O)):Z[p]&&(Z[p]=e.wrapWithCurrentZone(Z[p],I))}else Z[p]&&(Z[p]=e.wrapWithCurrentZone(Z[p],I))}catch{}}),m.call(t,_,w,k)},e.attachOriginToPatched(t[s],m)}function st(e,t,c){if(!c||c.length===0)return t;const s=c.filter(l=>l.target===e);if(!s||s.length===0)return t;const a=s[0].ignoreProperties;return t.filter(l=>a.indexOf(l)===-1)}function ze(e,t,c,s){if(!e)return;const a=st(e,t,c);Qe(e,a,s)}function Oe(e){return Object.getOwnPropertyNames(e).filter(t=>t.startsWith("on")&&t.length>2).map(t=>t.substring(2))}function mt(e,t){if(Pe&&!Ke||Zone[e.symbol("patchEvents")])return;const c=t.__Zone_ignore_on_properties;let s=[];if(xe){const a=window;s=s.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const l=ht()?[{target:a,ignoreProperties:["error"]}]:[];ze(a,Oe(a),c&&c.concat(l),Ie(a))}s=s.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let a=0;a<s.length;a++){const l=t[s[a]];l&&l.prototype&&ze(l.prototype,Oe(l.prototype),c)}}Zone.__load_patch("util",(e,t,c)=>{const s=Oe(e);c.patchOnProperties=Qe,c.patchMethod=le,c.bindArguments=He,c.patchMacroTask=ft;const a=t.__symbol__("BLACK_LISTED_EVENTS"),l=t.__symbol__("UNPATCHED_EVENTS");e[l]&&(e[a]=e[l]),e[a]&&(t[a]=t[l]=e[a]),c.patchEventPrototype=Tt,c.patchEventTarget=Et,c.isIEOrEdge=dt,c.ObjectDefineProperty=Ne,c.ObjectGetOwnPropertyDescriptor=me,c.ObjectCreate=ct,c.ArraySlice=at,c.patchClass=ge,c.wrapWithCurrentZone=Ae,c.filterProperties=st,c.attachOriginToPatched=ae,c._redefineProperty=Object.defineProperty,c.patchCallbacks=yt,c.getGlobalObjects=()=>({globalSources:et,zoneSymbolEventNames:te,eventNames:s,isBrowser:xe,isMix:Ke,isNode:Pe,TRUE_STR:ie,FALSE_STR:ce,ZONE_SYMBOL_PREFIX:pe,ADD_EVENT_LISTENER_STR:Le,REMOVE_EVENT_LISTENER_STR:Me})});const ve=A("zoneTask");function Ee(e,t,c,s){let a=null,l=null;t+=s,c+=s;const m={};function _(k){const p=k.data;return p.args[0]=function(){return k.invoke.apply(this,arguments)},p.handleId=a.apply(e,p.args),k}function w(k){return l.call(e,k.data.handleId)}a=le(e,t,k=>function(p,I){if(typeof I[0]=="function"){const Z={isPeriodic:s==="Interval",delay:s==="Timeout"||s==="Interval"?I[1]||0:void 0,args:I},O=I[0];I[0]=function(){try{return O.apply(this,arguments)}finally{Z.isPeriodic||(typeof Z.handleId=="number"?delete m[Z.handleId]:Z.handleId&&(Z.handleId[ve]=null))}};const B=je(t,I[0],Z,_,w);if(!B)return B;const M=B.data.handleId;return typeof M=="number"?m[M]=B:M&&(M[ve]=B),M&&M.ref&&M.unref&&typeof M.ref=="function"&&typeof M.unref=="function"&&(B.ref=M.ref.bind(M),B.unref=M.unref.bind(M)),typeof M=="number"||M?M:B}else return k.apply(e,I)}),l=le(e,c,k=>function(p,I){const Z=I[0];let O;typeof Z=="number"?O=m[Z]:(O=Z&&Z[ve],O||(O=Z)),O&&typeof O.type=="string"?O.state!=="notScheduled"&&(O.cancelFn&&O.data.isPeriodic||O.runCount===0)&&(typeof Z=="number"?delete m[Z]:Z&&(Z[ve]=null),O.zone.cancelTask(O)):k.apply(e,I)})}function pt(e,t){const{isBrowser:c,isMix:s}=t.getGlobalObjects();if(!c&&!s||!e.customElements||!("customElements"in e))return;const a=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"];t.patchCallbacks(t,e.customElements,"customElements","define",a)}function gt(e,t){if(Zone[t.symbol("patchEventTarget")])return;const{eventNames:c,zoneSymbolEventNames:s,TRUE_STR:a,FALSE_STR:l,ZONE_SYMBOL_PREFIX:m}=t.getGlobalObjects();for(let w=0;w<c.length;w++){const k=c[w],p=k+l,I=k+a,Z=m+p,O=m+I;s[k]={},s[k][l]=Z,s[k][a]=O}const _=e.EventTarget;if(!(!_||!_.prototype))return t.patchEventTarget(e,t,[_&&_.prototype]),!0}function kt(e,t){t.patchEventPrototype(e,t)}Zone.__load_patch("legacy",e=>{const t=e[Zone.__symbol__("legacyPatch")];t&&t()});Zone.__load_patch("queueMicrotask",(e,t,c)=>{c.patchMethod(e,"queueMicrotask",s=>function(a,l){t.current.scheduleMicroTask("queueMicrotask",l[0])})});Zone.__load_patch("timers",e=>{const t="set",c="clear";Ee(e,t,c,"Timeout"),Ee(e,t,c,"Interval"),Ee(e,t,c,"Immediate")});Zone.__load_patch("requestAnimationFrame",e=>{Ee(e,"request","cancel","AnimationFrame"),Ee(e,"mozRequest","mozCancel","AnimationFrame"),Ee(e,"webkitRequest","webkitCancel","AnimationFrame")});Zone.__load_patch("blocking",(e,t)=>{const c=["alert","prompt","confirm"];for(let s=0;s<c.length;s++){const a=c[s];le(e,a,(l,m,_)=>function(w,k){return t.current.run(l,e,k,_)})}});Zone.__load_patch("EventTarget",(e,t,c)=>{kt(e,c),gt(e,c);const s=e.XMLHttpRequestEventTarget;s&&s.prototype&&c.patchEventTarget(e,c,[s.prototype])});Zone.__load_patch("MutationObserver",(e,t,c)=>{ge("MutationObserver"),ge("WebKitMutationObserver")});Zone.__load_patch("IntersectionObserver",(e,t,c)=>{ge("IntersectionObserver")});Zone.__load_patch("FileReader",(e,t,c)=>{ge("FileReader")});Zone.__load_patch("on_property",(e,t,c)=>{mt(c,e)});Zone.__load_patch("customElements",(e,t,c)=>{pt(e,c)});Zone.__load_patch("XHR",(e,t)=>{w(e);const c=A("xhrTask"),s=A("xhrSync"),a=A("xhrListener"),l=A("xhrScheduled"),m=A("xhrURL"),_=A("xhrErrorBeforeScheduled");function w(k){const p=k.XMLHttpRequest;if(!p)return;const I=p.prototype;function Z(d){return d[c]}let O=I[Se],B=I[De];if(!O){const d=k.XMLHttpRequestEventTarget;if(d){const N=d.prototype;O=N[Se],B=N[De]}}const M="readystatechange",J="scheduled";function q(d){const N=d.data,P=N.target;P[l]=!1,P[_]=!1;const K=P[a];O||(O=P[Se],B=P[De]),K&&B.call(P,M,K);const oe=P[a]=()=>{if(P.readyState===P.DONE)if(!N.aborted&&P[l]&&d.state===J){const U=P[t.__symbol__("loadfalse")];if(P.status!==0&&U&&U.length>0){const ne=d.invoke;d.invoke=function(){const Q=P[t.__symbol__("loadfalse")];for(let W=0;W<Q.length;W++)Q[W]===d&&Q.splice(W,1);!N.aborted&&d.state===J&&ne.call(d)},U.push(d)}else d.invoke()}else!N.aborted&&P[l]===!1&&(P[_]=!0)};return O.call(P,M,oe),P[c]||(P[c]=d),T.apply(P,N.args),P[l]=!0,d}function R(){}function E(d){const N=d.data;return N.aborted=!0,x.apply(N.target,N.args)}const $=le(I,"open",()=>function(d,N){return d[s]=N[2]==!1,d[m]=N[1],$.apply(d,N)}),j="XMLHttpRequest.send",X=A("fetchTaskAborting"),L=A("fetchTaskScheduling"),T=le(I,"send",()=>function(d,N){if(t.current[L]===!0||d[s])return T.apply(d,N);{const P={target:d,url:d[m],isPeriodic:!1,args:N,aborted:!1},K=je(j,R,P,q,E);d&&d[_]===!0&&!P.aborted&&K.state===J&&K.invoke()}}),x=le(I,"abort",()=>function(d,N){const P=Z(d);if(P&&typeof P.type=="string"){if(P.cancelFn==null||P.data&&P.data.aborted)return;P.zone.cancelTask(P)}else if(t.current[X]===!0)return x.apply(d,N)})}});Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&ut(e.navigator.geolocation,["getCurrentPosition","watchPosition"])});Zone.__load_patch("PromiseRejectionEvent",(e,t)=>{function c(s){return function(a){ot(e,s).forEach(m=>{const _=e.PromiseRejectionEvent;if(_){const w=new _(s,{promise:a.promise,reason:a.rejection});m.invoke(w)}})}}e.PromiseRejectionEvent&&(t[A("unhandledPromiseRejectionHandler")]=c("unhandledrejection"),t[A("rejectionHandledHandler")]=c("rejectionhandled"))});