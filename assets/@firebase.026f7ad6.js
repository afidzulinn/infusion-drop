import{_ as Yn}from"./tslib.3c1e63d7.js";import{o as vo}from"./idb.13e98345.js";/**
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
 */const Vr=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},_o=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const a=i[n++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const h=i[n++];e[s++]=String.fromCharCode((a&31)<<6|h&63)}else if(a>239&&a<365){const h=i[n++],l=i[n++],m=i[n++],I=((a&7)<<18|(h&63)<<12|(l&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(I>>10)),e[s++]=String.fromCharCode(56320+(I&1023))}else{const h=i[n++],l=i[n++];e[s++]=String.fromCharCode((a&15)<<12|(h&63)<<6|l&63)}}return e.join("")},Hr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const h=i[a],l=a+1<i.length,m=l?i[a+1]:0,I=a+2<i.length,w=I?i[a+2]:0,S=h>>2,C=(h&3)<<4|m>>4;let P=(m&15)<<2|w>>6,x=w&63;I||(x=64,l||(P=64)),s.push(n[S],n[C],n[P],n[x])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Vr(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):_o(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const h=n[i.charAt(a++)],m=a<i.length?n[i.charAt(a)]:0;++a;const w=a<i.length?n[i.charAt(a)]:64;++a;const C=a<i.length?n[i.charAt(a)]:64;if(++a,h==null||m==null||w==null||C==null)throw new yo;const P=h<<2|m>>4;if(s.push(P),w!==64){const x=m<<4&240|w>>2;if(s.push(x),C!==64){const R=w<<6&192|C;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class yo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Io=function(i){const e=Vr(i);return Hr.encodeByteArray(e,!0)},$r=function(i){return Io(i).replace(/\./g,"")},Wr=function(i){try{return Hr.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Eo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wo=()=>Eo().__FIREBASE_DEFAULTS__,To=()=>{if(typeof process>"u"||typeof process.env>"u")return;const i=process.env.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Ao=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Wr(i[1]);return e&&JSON.parse(e)},Qn=()=>{try{return wo()||To()||Ao()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},So=i=>{var e,n;return(n=(e=Qn())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},zr=()=>{var i;return(i=Qn())===null||i===void 0?void 0:i.config},Gr=i=>{var e;return(e=Qn())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class Co{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function W(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(W())}function Ro(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Po(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ko(){const i=W();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Oo(){try{return typeof indexedDB=="object"}catch{return!1}}function No(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var h;e(((h=a.error)===null||h===void 0?void 0:h.message)||"")}}catch(n){e(n)}})}/**
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
 */const Do="FirebaseError";class ge extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Do,Object.setPrototypeOf(this,ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tt.prototype.create)}}class Tt{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},a=`${this.service}/${e}`,h=this.errors[e],l=h?Lo(h,s):"Error",m=`${this.serviceName}: ${l} (${a}).`;return new ge(a,m,s)}}function Lo(i,e){return i.replace(Mo,(n,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const Mo=/\{\$([^}]+)}/g;function Uo(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Xt(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const a of n){if(!s.includes(a))return!1;const h=i[a],l=e[a];if(cr(h)&&cr(l)){if(!Xt(h,l))return!1}else if(h!==l)return!1}for(const a of s)if(!n.includes(a))return!1;return!0}function cr(i){return i!==null&&typeof i=="object"}/**
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
 */function At(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function vt(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,h]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(h)}}),e}function _t(i){const e=i.indexOf("?");if(!e)return"";const n=i.indexOf("#",e);return i.substring(e,n>0?n:void 0)}function xo(i,e){const n=new Fo(i,e);return n.subscribe.bind(n)}class Fo{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let a;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");jo(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:s},a.next===void 0&&(a.next=Fn),a.error===void 0&&(a.error=Fn),a.complete===void 0&&(a.complete=Fn);const h=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),h}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jo(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Fn(){}/**
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
 */function Ce(i){return i&&i._delegate?i._delegate:i}class Me{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const De="[DEFAULT]";/**
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
 */class Bo{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Co;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(h){if(a)return null;throw h}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ho(e))try{this.getOrInitializeService({instanceIdentifier:De})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const h=this.getOrInitializeService({instanceIdentifier:a});s.resolve(h)}catch{}}}}clearInstance(e=De){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=De){return this.instances.has(e)}getOptions(e=De){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[h,l]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(h);s===m&&l.resolve(a)}return a}onInit(e,n){var s;const a=this.normalizeInstanceIdentifier(n),h=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;h.add(e),this.onInitCallbacks.set(a,h);const l=this.instances.get(a);return l&&e(l,a),()=>{h.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const a of s)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Vo(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=De){return this.component?this.component.multipleInstances?e:De:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vo(i){return i===De?void 0:i}function Ho(i){return i.instantiationMode==="EAGER"}/**
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
 */class $o{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Bo(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var O;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(O||(O={}));const Wo={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},zo=O.INFO,Go={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},qo=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=Go[e];if(a)console[a](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zn{constructor(e){this.name=e,this._logLevel=zo,this._logHandler=qo,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}/**
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
 */class Ko{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jo(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Jo(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $n="@firebase/app",lr="0.10.5";/**
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
 */const Ue=new Zn("@firebase/app"),Xo="@firebase/app-compat",Yo="@firebase/analytics-compat",Qo="@firebase/analytics",Zo="@firebase/app-check-compat",ea="@firebase/app-check",ta="@firebase/auth",na="@firebase/auth-compat",ia="@firebase/database",ra="@firebase/database-compat",sa="@firebase/functions",oa="@firebase/functions-compat",aa="@firebase/installations",ha="@firebase/installations-compat",ca="@firebase/messaging",la="@firebase/messaging-compat",ua="@firebase/performance",da="@firebase/performance-compat",fa="@firebase/remote-config",pa="@firebase/remote-config-compat",ga="@firebase/storage",ma="@firebase/storage-compat",va="@firebase/firestore",_a="@firebase/vertexai-preview",ya="@firebase/firestore-compat",Ia="firebase",Ea="10.12.2";/**
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
 */const Wn="[DEFAULT]",wa={[$n]:"fire-core",[Xo]:"fire-core-compat",[Qo]:"fire-analytics",[Yo]:"fire-analytics-compat",[ea]:"fire-app-check",[Zo]:"fire-app-check-compat",[ta]:"fire-auth",[na]:"fire-auth-compat",[ia]:"fire-rtdb",[ra]:"fire-rtdb-compat",[sa]:"fire-fn",[oa]:"fire-fn-compat",[aa]:"fire-iid",[ha]:"fire-iid-compat",[ca]:"fire-fcm",[la]:"fire-fcm-compat",[ua]:"fire-perf",[da]:"fire-perf-compat",[fa]:"fire-rc",[pa]:"fire-rc-compat",[ga]:"fire-gcs",[ma]:"fire-gcs-compat",[va]:"fire-fst",[ya]:"fire-fst-compat",[_a]:"fire-vertex","fire-js":"fire-js",[Ia]:"fire-js-all"};/**
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
 */const Yt=new Map,Ta=new Map,zn=new Map;function ur(i,e){try{i.container.addComponent(e)}catch(n){Ue.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function Xe(i){const e=i.name;if(zn.has(e))return Ue.debug(`There were multiple attempts to register component ${e}.`),!1;zn.set(e,i);for(const n of Yt.values())ur(n,i);for(const n of Ta.values())ur(n,i);return!0}function qr(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function ie(i){return i.settings!==void 0}/**
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
 */const Aa={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},Se=new Tt("app","Firebase",Aa);/**
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
 */class Sa{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Me("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Se.create("app-deleted",{appName:this._name})}}/**
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
 */const Ye=Ea;function Ca(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Wn,automaticDataCollectionEnabled:!1},e),a=s.name;if(typeof a!="string"||!a)throw Se.create("bad-app-name",{appName:String(a)});if(n||(n=zr()),!n)throw Se.create("no-options");const h=Yt.get(a);if(h){if(Xt(n,h.options)&&Xt(s,h.config))return h;throw Se.create("duplicate-app",{appName:a})}const l=new $o(a);for(const I of zn.values())l.addComponent(I);const m=new Sa(n,s,l);return Yt.set(a,m),m}function ba(i=Wn){const e=Yt.get(i);if(!e&&i===Wn&&zr())return Ca();if(!e)throw Se.create("no-app",{appName:i});return e}function Le(i,e,n){var s;let a=(s=wa[i])!==null&&s!==void 0?s:i;n&&(a+=`-${n}`);const h=a.match(/\s|\//),l=e.match(/\s|\//);if(h||l){const m=[`Unable to register library "${a}" with version "${e}":`];h&&m.push(`library name "${a}" contains illegal characters (whitespace or "/")`),h&&l&&m.push("and"),l&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ue.warn(m.join(" "));return}Xe(new Me(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const Ra="firebase-heartbeat-database",Pa=1,It="firebase-heartbeat-store";let jn=null;function Kr(){return jn||(jn=vo(Ra,Pa,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(It)}catch(n){console.warn(n)}}}}).catch(i=>{throw Se.create("idb-open",{originalErrorMessage:i.message})})),jn}async function ka(i){try{const n=(await Kr()).transaction(It),s=await n.objectStore(It).get(Jr(i));return await n.done,s}catch(e){if(e instanceof ge)Ue.warn(e.message);else{const n=Se.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ue.warn(n.message)}}}async function dr(i,e){try{const s=(await Kr()).transaction(It,"readwrite");await s.objectStore(It).put(e,Jr(i)),await s.done}catch(n){if(n instanceof ge)Ue.warn(n.message);else{const s=Se.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ue.warn(s.message)}}}function Jr(i){return`${i.name}!${i.options.appId}`}/**
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
 */const Oa=1024,Na=30*24*60*60*1e3;class Da{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ma(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),h=fr();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===h||this._heartbeatsCache.heartbeats.some(l=>l.date===h)))return this._heartbeatsCache.heartbeats.push({date:h,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const m=new Date(l.date).valueOf();return Date.now()-m<=Na}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=fr(),{heartbeatsToSend:s,unsentEntries:a}=La(this._heartbeatsCache.heartbeats),h=$r(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),h}}function fr(){return new Date().toISOString().substring(0,10)}function La(i,e=Oa){const n=[];let s=i.slice();for(const a of i){const h=n.find(l=>l.agent===a.agent);if(h){if(h.dates.push(a.date),pr(n)>e){h.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),pr(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ma{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oo()?No().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ka(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return dr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return dr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function pr(i){return $r(JSON.stringify({version:2,heartbeats:i})).length}/**
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
 */function Ua(i){Xe(new Me("platform-logger",e=>new Ko(e),"PRIVATE")),Xe(new Me("heartbeat",e=>new Da(e),"PRIVATE")),Le($n,lr,i),Le($n,lr,"esm2017"),Le("fire-js","")}Ua("");function Xr(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xa=Xr,Yr=new Tt("auth","Firebase",Xr());/**
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
 */const Qt=new Zn("@firebase/auth");function Fa(i,...e){Qt.logLevel<=O.WARN&&Qt.warn(`Auth (${Ye}): ${i}`,...e)}function Gt(i,...e){Qt.logLevel<=O.ERROR&&Qt.error(`Auth (${Ye}): ${i}`,...e)}/**
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
 */function ne(i,...e){throw ei(i,...e)}function re(i,...e){return ei(i,...e)}function Qr(i,e,n){const s=Object.assign(Object.assign({},xa()),{[e]:n});return new Tt("auth","Firebase",s).create(e,{appName:i.name})}function fe(i){return Qr(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ei(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return Yr.create(i,...e)}function A(i,e,...n){if(!i)throw ei(e,...n)}function le(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Gt(e),new Error(e)}function pe(i,e){i||le(e)}/**
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
 */function Gn(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function ja(){return gr()==="http:"||gr()==="https:"}function gr(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function Ba(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ja()||Ro()||"connection"in navigator)?navigator.onLine:!0}function Va(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class St{constructor(e,n){this.shortDelay=e,this.longDelay=n,pe(n>e,"Short delay should be less than long delay!"),this.isMobile=bo()||Po()}get(){return Ba()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ti(i,e){pe(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Zr{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;le("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;le("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;le("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ha={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const $a=new St(3e4,6e4);function be(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Re(i,e,n,s,a={}){return es(i,a,async()=>{let h={},l={};s&&(e==="GET"?l=s:h={body:JSON.stringify(s)});const m=At(Object.assign({key:i.config.apiKey},l)).slice(1),I=await i._getAdditionalHeaders();return I["Content-Type"]="application/json",i.languageCode&&(I["X-Firebase-Locale"]=i.languageCode),Zr.fetch()(ts(i,i.config.apiHost,n,m),Object.assign({method:e,headers:I,referrerPolicy:"no-referrer"},h))})}async function es(i,e,n){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},Ha),e);try{const a=new za(i),h=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const l=await h.json();if("needConfirmation"in l)throw Wt(i,"account-exists-with-different-credential",l);if(h.ok&&!("errorMessage"in l))return l;{const m=h.ok?l.errorMessage:l.error.message,[I,w]=m.split(" : ");if(I==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wt(i,"credential-already-in-use",l);if(I==="EMAIL_EXISTS")throw Wt(i,"email-already-in-use",l);if(I==="USER_DISABLED")throw Wt(i,"user-disabled",l);const S=s[I]||I.toLowerCase().replace(/[_\s]+/g,"-");if(w)throw Qr(i,S,w);ne(i,S)}}catch(a){if(a instanceof ge)throw a;ne(i,"network-request-failed",{message:String(a)})}}async function Ct(i,e,n,s,a={}){const h=await Re(i,e,n,s,a);return"mfaPendingCredential"in h&&ne(i,"multi-factor-auth-required",{_serverResponse:h}),h}function ts(i,e,n,s){const a=`${e}${n}?${s}`;return i.config.emulator?ti(i.config,a):`${i.config.apiScheme}://${a}`}function Wa(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class za{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(re(this.auth,"network-request-failed")),$a.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wt(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const a=re(i,e,s);return a.customData._tokenResponse=n,a}function mr(i){return i!==void 0&&i.enterprise!==void 0}class Ga{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Wa(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function qa(i,e){return Re(i,"GET","/v2/recaptchaConfig",be(i,e))}/**
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
 */async function Ka(i,e){return Re(i,"POST","/v1/accounts:delete",e)}async function ns(i,e){return Re(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function yt(i){if(!!i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ja(i,e=!1){const n=Ce(i),s=await n.getIdToken(e),a=ni(s);A(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const h=typeof a.firebase=="object"?a.firebase:void 0,l=h==null?void 0:h.sign_in_provider;return{claims:a,token:s,authTime:yt(Bn(a.auth_time)),issuedAtTime:yt(Bn(a.iat)),expirationTime:yt(Bn(a.exp)),signInProvider:l||null,signInSecondFactor:(h==null?void 0:h.sign_in_second_factor)||null}}function Bn(i){return Number(i)*1e3}function ni(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return Gt("JWT malformed, contained fewer than 3 sections"),null;try{const a=Wr(n);return a?JSON.parse(a):(Gt("Failed to decode base64 JWT payload"),null)}catch(a){return Gt("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function vr(i){const e=ni(i);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Et(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ge&&Xa(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function Xa({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class Ya{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class qn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=yt(this.lastLoginAt),this.creationTime=yt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zt(i){var e;const n=i.auth,s=await i.getIdToken(),a=await Et(i,ns(n,{idToken:s}));A(a==null?void 0:a.users.length,n,"internal-error");const h=a.users[0];i._notifyReloadListener(h);const l=!((e=h.providerUserInfo)===null||e===void 0)&&e.length?is(h.providerUserInfo):[],m=Za(i.providerData,l),I=i.isAnonymous,w=!(i.email&&h.passwordHash)&&!(m!=null&&m.length),S=I?w:!1,C={uid:h.localId,displayName:h.displayName||null,photoURL:h.photoUrl||null,email:h.email||null,emailVerified:h.emailVerified||!1,phoneNumber:h.phoneNumber||null,tenantId:h.tenantId||null,providerData:m,metadata:new qn(h.createdAt,h.lastLoginAt),isAnonymous:S};Object.assign(i,C)}async function Qa(i){const e=Ce(i);await Zt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Za(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function is(i){return i.map(e=>{var{providerId:n}=e,s=Yn(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function eh(i,e){const n=await es(i,{},async()=>{const s=At({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:h}=i.config,l=ts(i,a,"/v1/token",`key=${h}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",Zr.fetch()(l,{method:"POST",headers:m,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function th(i,e){return Re(i,"POST","/v2/accounts:revokeToken",be(i,e))}/**
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
 */class Ge{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){A(e.length!==0,"internal-error");const n=vr(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:a,expiresIn:h}=await eh(e,n);this.updateTokensAndExpiration(s,a,Number(h))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:a,expirationTime:h}=n,l=new Ge;return s&&(A(typeof s=="string","internal-error",{appName:e}),l.refreshToken=s),a&&(A(typeof a=="string","internal-error",{appName:e}),l.accessToken=a),h&&(A(typeof h=="number","internal-error",{appName:e}),l.expirationTime=h),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ge,this.toJSON())}_performRefresh(){return le("not implemented")}}/**
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
 */function Ie(i,e){A(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class ue{constructor(e){var{uid:n,auth:s,stsTokenManager:a}=e,h=Yn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ya(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=h.displayName||null,this.email=h.email||null,this.emailVerified=h.emailVerified||!1,this.phoneNumber=h.phoneNumber||null,this.photoURL=h.photoURL||null,this.isAnonymous=h.isAnonymous||!1,this.tenantId=h.tenantId||null,this.providerData=h.providerData?[...h.providerData]:[],this.metadata=new qn(h.createdAt||void 0,h.lastLoginAt||void 0)}async getIdToken(e){const n=await Et(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ja(this,e)}reload(){return Qa(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ue(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Zt(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ie(this.auth.app))return Promise.reject(fe(this.auth));const e=await this.getIdToken();return await Et(this,Ka(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,a,h,l,m,I,w,S;const C=(s=n.displayName)!==null&&s!==void 0?s:void 0,P=(a=n.email)!==null&&a!==void 0?a:void 0,x=(h=n.phoneNumber)!==null&&h!==void 0?h:void 0,R=(l=n.photoURL)!==null&&l!==void 0?l:void 0,U=(m=n.tenantId)!==null&&m!==void 0?m:void 0,L=(I=n._redirectEventId)!==null&&I!==void 0?I:void 0,oe=(w=n.createdAt)!==null&&w!==void 0?w:void 0,J=(S=n.lastLoginAt)!==null&&S!==void 0?S:void 0,{uid:j,emailVerified:ee,isAnonymous:Pe,providerData:q,stsTokenManager:_}=n;A(j&&_,e,"internal-error");const u=Ge.fromJSON(this.name,_);A(typeof j=="string",e,"internal-error"),Ie(C,e.name),Ie(P,e.name),A(typeof ee=="boolean",e,"internal-error"),A(typeof Pe=="boolean",e,"internal-error"),Ie(x,e.name),Ie(R,e.name),Ie(U,e.name),Ie(L,e.name),Ie(oe,e.name),Ie(J,e.name);const f=new ue({uid:j,auth:e,email:P,emailVerified:ee,displayName:C,isAnonymous:Pe,photoURL:R,phoneNumber:x,tenantId:U,stsTokenManager:u,createdAt:oe,lastLoginAt:J});return q&&Array.isArray(q)&&(f.providerData=q.map(p=>Object.assign({},p))),L&&(f._redirectEventId=L),f}static async _fromIdTokenResponse(e,n,s=!1){const a=new Ge;a.updateFromServerResponse(n);const h=new ue({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Zt(h),h}static async _fromGetAccountInfoResponse(e,n,s){const a=n.users[0];A(a.localId!==void 0,"internal-error");const h=a.providerUserInfo!==void 0?is(a.providerUserInfo):[],l=!(a.email&&a.passwordHash)&&!(h!=null&&h.length),m=new Ge;m.updateFromIdToken(s);const I=new ue({uid:a.localId,auth:e,stsTokenManager:m,isAnonymous:l}),w={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new qn(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(h!=null&&h.length)};return Object.assign(I,w),I}}/**
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
 */const _r=new Map;function de(i){pe(i instanceof Function,"Expected a class definition");let e=_r.get(i);return e?(pe(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,_r.set(i,e),e)}/**
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
 */class rs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}rs.type="NONE";const yr=rs;/**
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
 */function qt(i,e,n){return`firebase:${i}:${e}:${n}`}class qe{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:a,name:h}=this.auth;this.fullUserKey=qt(this.userKey,a.apiKey,h),this.fullPersistenceKey=qt("persistence",a.apiKey,h),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ue._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new qe(de(yr),e,s);const a=(await Promise.all(n.map(async w=>{if(await w._isAvailable())return w}))).filter(w=>w);let h=a[0]||de(yr);const l=qt(s,e.config.apiKey,e.name);let m=null;for(const w of n)try{const S=await w._get(l);if(S){const C=ue._fromJSON(e,S);w!==h&&(m=C),h=w;break}}catch{}const I=a.filter(w=>w._shouldAllowMigration);return!h._shouldAllowMigration||!I.length?new qe(h,e,s):(h=I[0],m&&await h._set(l,m.toJSON()),await Promise.all(n.map(async w=>{if(w!==h)try{await w._remove(l)}catch{}})),new qe(h,e,s))}}/**
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
 */function Ir(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(as(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ss(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cs(e))return"Blackberry";if(ls(e))return"Webos";if(ii(e))return"Safari";if((e.includes("chrome/")||os(e))&&!e.includes("edge/"))return"Chrome";if(hs(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ss(i=W()){return/firefox\//i.test(i)}function ii(i=W()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function os(i=W()){return/crios\//i.test(i)}function as(i=W()){return/iemobile/i.test(i)}function hs(i=W()){return/android/i.test(i)}function cs(i=W()){return/blackberry/i.test(i)}function ls(i=W()){return/webos/i.test(i)}function on(i=W()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function nh(i=W()){var e;return on(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ih(){return ko()&&document.documentMode===10}function us(i=W()){return on(i)||hs(i)||ls(i)||cs(i)||/windows phone/i.test(i)||as(i)}function rh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ds(i,e=[]){let n;switch(i){case"Browser":n=Ir(W());break;case"Worker":n=`${Ir(W())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ye}/${s}`}/**
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
 */class sh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=h=>new Promise((l,m)=>{try{const I=e(h);l(I)}catch(I){m(I)}});s.onAbort=n,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function oh(i,e={}){return Re(i,"GET","/v2/passwordPolicy",be(i,e))}/**
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
 */const ah=6;class hh{constructor(e){var n,s,a,h;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:ah,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(h=e.forceUpgradeOnSignin)!==null&&h!==void 0?h:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,a,h,l,m;const I={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,I),this.validatePasswordCharacterOptions(e,I),I.isValid&&(I.isValid=(n=I.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),I.isValid&&(I.isValid=(s=I.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),I.isValid&&(I.isValid=(a=I.containsLowercaseLetter)!==null&&a!==void 0?a:!0),I.isValid&&(I.isValid=(h=I.containsUppercaseLetter)!==null&&h!==void 0?h:!0),I.isValid&&(I.isValid=(l=I.containsNumericCharacter)!==null&&l!==void 0?l:!0),I.isValid&&(I.isValid=(m=I.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),I}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),a&&(n.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,a,h){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=h))}}/**
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
 */class ch{constructor(e,n,s,a){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Er(this),this.idTokenSubscription=new Er(this),this.beforeStateQueue=new sh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=de(n)),this._initializationPromise=this.queue(async()=>{var s,a;if(!this._deleted&&(this.persistenceManager=await qe.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ns(this,{idToken:e}),s=await ue._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ie(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,h=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,m=a==null?void 0:a._redirectEventId,I=await this.tryRedirectSignIn(e);(!l||l===m)&&(I==null?void 0:I.user)&&(a=I.user,h=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(h)try{await this.beforeStateQueue.runMiddleware(a)}catch(l){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zt(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Va()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ie(this.app))return Promise.reject(fe(this));const n=e?Ce(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ie(this.app)?Promise.reject(fe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ie(this.app)?Promise.reject(fe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(de(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oh(this),n=new hh(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Tt("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await th(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&de(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await qe.create(this,[de(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,a){if(this._deleted)return()=>{};const h=typeof n=="function"?n:n.next.bind(n);let l=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(m,this,"internal-error"),m.then(()=>{l||h(this.currentUser)}),typeof n=="function"){const I=e.addObserver(n,s,a);return()=>{l=!0,I()}}else{const I=e.addObserver(n);return()=>{l=!0,I()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ds(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(n["X-Firebase-AppCheck"]=a),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Fa(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function je(i){return Ce(i)}class Er{constructor(e){this.auth=e,this.observer=null,this.addObserver=xo(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let an={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lh(i){an=i}function fs(i){return an.loadJS(i)}function uh(){return an.recaptchaEnterpriseScript}function dh(){return an.gapiScript}function fh(i){return`__${i}${Math.floor(Math.random()*1e6)}`}const ph="recaptcha-enterprise",gh="NO_RECAPTCHA";class mh{constructor(e){this.type=ph,this.auth=je(e)}async verify(e="verify",n=!1){async function s(h){if(!n){if(h.tenantId==null&&h._agentRecaptchaConfig!=null)return h._agentRecaptchaConfig.siteKey;if(h.tenantId!=null&&h._tenantRecaptchaConfigs[h.tenantId]!==void 0)return h._tenantRecaptchaConfigs[h.tenantId].siteKey}return new Promise(async(l,m)=>{qa(h,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(I=>{if(I.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const w=new Ga(I);return h.tenantId==null?h._agentRecaptchaConfig=w:h._tenantRecaptchaConfigs[h.tenantId]=w,l(w.siteKey)}}).catch(I=>{m(I)})})}function a(h,l,m){const I=window.grecaptcha;mr(I)?I.enterprise.ready(()=>{I.enterprise.execute(h,{action:e}).then(w=>{l(w)}).catch(()=>{l(gh)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((h,l)=>{s(this.auth).then(m=>{if(!n&&mr(window.grecaptcha))a(m,h,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let I=uh();I.length!==0&&(I+=m),fs(I).then(()=>{a(m,h,l)}).catch(w=>{l(w)})}}).catch(m=>{l(m)})})}}async function wr(i,e,n,s=!1){const a=new mh(i);let h;try{h=await a.verify(n)}catch{h=await a.verify(n,!0)}const l=Object.assign({},e);return s?Object.assign(l,{captchaResp:h}):Object.assign(l,{captchaResponse:h}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Kn(i,e,n,s){var a;if(!((a=i._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await wr(i,e,n,n==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await wr(i,e,n,n==="getOobCode");return s(i,l)}else return Promise.reject(h)})}/**
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
 */function vh(i,e){const n=qr(i,"auth");if(n.isInitialized()){const a=n.getImmediate(),h=n.getOptions();if(Xt(h,e!=null?e:{}))return a;ne(a,"already-initialized")}return n.initialize({options:e})}function _h(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(de);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function yh(i,e,n){const s=je(i);A(s._canInitEmulator,s,"emulator-config-failed"),A(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!!(n!=null&&n.disableWarnings),h=ps(e),{host:l,port:m}=Ih(e),I=m===null?"":`:${m}`;s.config.emulator={url:`${h}//${l}${I}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:l,port:m,protocol:h.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||Eh()}function ps(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function Ih(i){const e=ps(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const h=a[1];return{host:h,port:Tr(s.substr(h.length+1))}}else{const[h,l]=s.split(":");return{host:h,port:Tr(l)}}}function Tr(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function Eh(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class ri{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return le("not implemented")}_getIdTokenResponse(e){return le("not implemented")}_linkToIdToken(e,n){return le("not implemented")}_getReauthenticationResolver(e){return le("not implemented")}}async function wh(i,e){return Re(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Th(i,e){return Ct(i,"POST","/v1/accounts:signInWithPassword",be(i,e))}/**
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
 */async function Ah(i,e){return Ct(i,"POST","/v1/accounts:signInWithEmailLink",be(i,e))}async function Sh(i,e){return Ct(i,"POST","/v1/accounts:signInWithEmailLink",be(i,e))}/**
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
 */class wt extends ri{constructor(e,n,s,a=null){super("password",s),this._email=e,this._password=n,this._tenantId=a}static _fromEmailAndPassword(e,n){return new wt(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new wt(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kn(e,n,"signInWithPassword",Th);case"emailLink":return Ah(e,{email:this._email,oobCode:this._password});default:ne(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kn(e,s,"signUpPassword",wh);case"emailLink":return Sh(e,{idToken:n,email:this._email,oobCode:this._password});default:ne(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ke(i,e){return Ct(i,"POST","/v1/accounts:signInWithIdp",be(i,e))}/**
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
 */const Ch="http://localhost";class xe extends ri{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ne("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=n,h=Yn(n,["providerId","signInMethod"]);if(!s||!a)return null;const l=new xe(s,a);return l.idToken=h.idToken||void 0,l.accessToken=h.accessToken||void 0,l.secret=h.secret,l.nonce=h.nonce,l.pendingToken=h.pendingToken||null,l}_getIdTokenResponse(e){const n=this.buildRequest();return Ke(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ke(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ke(e,n)}buildRequest(){const e={requestUri:Ch,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=At(n)}return e}}/**
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
 */function bh(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Rh(i){const e=vt(_t(i)).link,n=e?vt(_t(e)).deep_link_id:null,s=vt(_t(i)).deep_link_id;return(s?vt(_t(s)).link:null)||s||n||e||i}class si{constructor(e){var n,s,a,h,l,m;const I=vt(_t(e)),w=(n=I.apiKey)!==null&&n!==void 0?n:null,S=(s=I.oobCode)!==null&&s!==void 0?s:null,C=bh((a=I.mode)!==null&&a!==void 0?a:null);A(w&&S&&C,"argument-error"),this.apiKey=w,this.operation=C,this.code=S,this.continueUrl=(h=I.continueUrl)!==null&&h!==void 0?h:null,this.languageCode=(l=I.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(m=I.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const n=Rh(e);try{return new si(n)}catch{return null}}}/**
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
 */class Qe{constructor(){this.providerId=Qe.PROVIDER_ID}static credential(e,n){return wt._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=si.parseLink(n);return A(s,"argument-error"),wt._fromEmailAndCode(e,s.code,s.tenantId)}}Qe.PROVIDER_ID="password";Qe.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class gs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class bt extends gs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ee extends bt{constructor(){super("facebook.com")}static credential(e){return xe._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ee.credentialFromTaggedObject(e)}static credentialFromError(e){return Ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ee.credential(e.oauthAccessToken)}catch{return null}}}Ee.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ee.PROVIDER_ID="facebook.com";/**
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
 */class we extends bt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xe._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return we.credentialFromTaggedObject(e)}static credentialFromError(e){return we.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return we.credential(n,s)}catch{return null}}}we.GOOGLE_SIGN_IN_METHOD="google.com";we.PROVIDER_ID="google.com";/**
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
 */class Te extends bt{constructor(){super("github.com")}static credential(e){return xe._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Te.credential(e.oauthAccessToken)}catch{return null}}}Te.GITHUB_SIGN_IN_METHOD="github.com";Te.PROVIDER_ID="github.com";/**
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
 */class Ae extends bt{constructor(){super("twitter.com")}static credential(e,n){return xe._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Ae.credential(n,s)}catch{return null}}}Ae.TWITTER_SIGN_IN_METHOD="twitter.com";Ae.PROVIDER_ID="twitter.com";/**
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
 */async function Ph(i,e){return Ct(i,"POST","/v1/accounts:signUp",be(i,e))}/**
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
 */class Fe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,a=!1){const h=await ue._fromIdTokenResponse(e,s,a),l=Ar(s);return new Fe({user:h,providerId:l,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const a=Ar(s);return new Fe({user:e,providerId:a,_tokenResponse:s,operationType:n})}}function Ar(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class en extends ge{constructor(e,n,s,a){var h;super(n.code,n.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,en.prototype),this.customData={appName:e.name,tenantId:(h=e.tenantId)!==null&&h!==void 0?h:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,a){return new en(e,n,s,a)}}function ms(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(h=>{throw h.code==="auth/multi-factor-auth-required"?en._fromErrorAndOperation(i,h,e,s):h})}async function kh(i,e,n=!1){const s=await Et(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return Fe._forOperation(i,"link",s)}/**
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
 */async function Oh(i,e,n=!1){const{auth:s}=i;if(ie(s.app))return Promise.reject(fe(s));const a="reauthenticate";try{const h=await Et(i,ms(s,a,e,i),n);A(h.idToken,s,"internal-error");const l=ni(h.idToken);A(l,s,"internal-error");const{sub:m}=l;return A(i.uid===m,s,"user-mismatch"),Fe._forOperation(i,a,h)}catch(h){throw(h==null?void 0:h.code)==="auth/user-not-found"&&ne(s,"user-mismatch"),h}}/**
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
 */async function vs(i,e,n=!1){if(ie(i.app))return Promise.reject(fe(i));const s="signIn",a=await ms(i,s,e),h=await Fe._fromIdTokenResponse(i,s,a);return n||await i._updateCurrentUser(h.user),h}async function Nh(i,e){return vs(je(i),e)}/**
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
 */async function _s(i){const e=je(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function fl(i,e,n){if(ie(i.app))return Promise.reject(fe(i));const s=je(i),l=await Kn(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ph).catch(I=>{throw I.code==="auth/password-does-not-meet-requirements"&&_s(i),I}),m=await Fe._fromIdTokenResponse(s,"signIn",l);return await s._updateCurrentUser(m.user),m}function pl(i,e,n){return ie(i.app)?Promise.reject(fe(i)):Nh(Ce(i),Qe.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&_s(i),s})}function Dh(i,e,n,s){return Ce(i).onIdTokenChanged(e,n,s)}function Lh(i,e,n){return Ce(i).beforeAuthStateChanged(e,n)}function gl(i,e,n,s){return Ce(i).onAuthStateChanged(e,n,s)}const tn="__sak";/**
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
 */class ys{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(tn,"1"),this.storage.removeItem(tn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Mh(){const i=W();return ii(i)||on(i)}const Uh=1e3,xh=10;class Is extends ys{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Mh()&&rh(),this.fallbackToPolling=us(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),a=this.localCache[n];s!==a&&e(n,a,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((l,m,I)=>{this.notifyListeners(l,I)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const l=this.storage.getItem(s);if(e.newValue!==l)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const a=()=>{const l=this.storage.getItem(s);!n&&this.localCache[s]===l||this.notifyListeners(s,l)},h=this.storage.getItem(s);ih()&&h!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,xh):a()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Uh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Is.type="LOCAL";const Fh=Is;/**
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
 */class Es extends ys{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Es.type="SESSION";const ws=Es;/**
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
 */function jh(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class hn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(a=>a.isListeningto(e));if(n)return n;const s=new hn(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:a,data:h}=n.data,l=this.handlersMap[a];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const m=Array.from(l).map(async w=>w(n.origin,h)),I=await jh(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:I})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hn.receivers=[];/**
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
 */function oi(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
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
 */class Bh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let h,l;return new Promise((m,I)=>{const w=oi("",20);a.port1.start();const S=setTimeout(()=>{I(new Error("unsupported_event"))},s);l={messageChannel:a,onMessage(C){const P=C;if(P.data.eventId===w)switch(P.data.status){case"ack":clearTimeout(S),h=setTimeout(()=>{I(new Error("timeout"))},3e3);break;case"done":clearTimeout(h),m(P.data.response);break;default:clearTimeout(S),clearTimeout(h),I(new Error("invalid_response"));break}}},this.handlers.add(l),a.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:w,data:n},[a.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
 */function se(){return window}function Vh(i){se().location.href=i}/**
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
 */function Ts(){return typeof se().WorkerGlobalScope<"u"&&typeof se().importScripts=="function"}async function Hh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $h(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function Wh(){return Ts()?self:null}/**
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
 */const As="firebaseLocalStorageDb",zh=1,nn="firebaseLocalStorage",Ss="fbase_key";class Rt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cn(i,e){return i.transaction([nn],e?"readwrite":"readonly").objectStore(nn)}function Gh(){const i=indexedDB.deleteDatabase(As);return new Rt(i).toPromise()}function Jn(){const i=indexedDB.open(As,zh);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(nn,{keyPath:Ss})}catch(a){n(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(nn)?e(s):(s.close(),await Gh(),e(await Jn()))})})}async function Sr(i,e,n){const s=cn(i,!0).put({[Ss]:e,value:n});return new Rt(s).toPromise()}async function qh(i,e){const n=cn(i,!1).get(e),s=await new Rt(n).toPromise();return s===void 0?null:s.value}function Cr(i,e){const n=cn(i,!0).delete(e);return new Rt(n).toPromise()}const Kh=800,Jh=3;class Cs{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jn(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Jh)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ts()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hn._getInstance(Wh()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Hh(),!this.activeServiceWorker)return;this.sender=new Bh(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$h()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jn();return await Sr(e,tn,"1"),await Cr(e,tn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Sr(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>qh(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cr(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const h=cn(a,!1).getAll();return new Rt(h).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:h}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(h)&&(this.notifyListeners(a,h),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Kh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cs.type="LOCAL";const Xh=Cs;new St(3e4,6e4);/**
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
 */function Yh(i,e){return e?de(e):(A(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class ai extends ri{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ke(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ke(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ke(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Qh(i){return vs(i.auth,new ai(i),i.bypassAuthState)}function Zh(i){const{auth:e,user:n}=i;return A(n,e,"internal-error"),Oh(n,new ai(i),i.bypassAuthState)}async function ec(i){const{auth:e,user:n}=i;return A(n,e,"internal-error"),kh(n,new ai(i),i.bypassAuthState)}/**
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
 */class bs{constructor(e,n,s,a,h=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=h,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:a,tenantId:h,error:l,type:m}=e;if(l){this.reject(l);return}const I={auth:this.auth,requestUri:n,sessionId:s,tenantId:h||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(I))}catch(w){this.reject(w)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qh;case"linkViaPopup":case"linkViaRedirect":return ec;case"reauthViaPopup":case"reauthViaRedirect":return Zh;default:ne(this.auth,"internal-error")}}resolve(e){pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const tc=new St(2e3,1e4);class ze extends bs{constructor(e,n,s,a,h){super(e,n,a,h),this.provider=s,this.authWindow=null,this.pollId=null,ze.currentPopupAction&&ze.currentPopupAction.cancel(),ze.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){pe(this.filter.length===1,"Popup operations only handle one event");const e=oi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(re(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(re(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ze.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(re(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tc.get())};e()}}ze.currentPopupAction=null;/**
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
 */const nc="pendingRedirect",Kt=new Map;class ic extends bs{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Kt.get(this.auth._key());if(!e){try{const s=await rc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Kt.set(this.auth._key(),e)}return this.bypassAuthState||Kt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rc(i,e){const n=ac(e),s=oc(i);if(!await s._isAvailable())return!1;const a=await s._get(n)==="true";return await s._remove(n),a}function sc(i,e){Kt.set(i._key(),e)}function oc(i){return de(i._redirectPersistence)}function ac(i){return qt(nc,i.config.apiKey,i.name)}async function hc(i,e,n=!1){if(ie(i.app))return Promise.reject(fe(i));const s=je(i),a=Yh(s,e),l=await new ic(s,a,n).execute();return l&&!n&&(delete l.user._redirectEventId,await s._persistUserIfCurrent(l.user),await s._setRedirectUser(null,e)),l}/**
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
 */const cc=10*60*1e3;class lc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uc(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Rs(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(re(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cc&&this.cachedEventUids.clear(),this.cachedEventUids.has(br(e))}saveEventToCache(e){this.cachedEventUids.add(br(e)),this.lastProcessedEventTime=Date.now()}}function br(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Rs({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uc(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rs(i);default:return!1}}/**
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
 */async function dc(i,e={}){return Re(i,"GET","/v1/projects",e)}/**
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
 */const fc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pc=/^https?/;async function gc(i){if(i.config.emulator)return;const{authorizedDomains:e}=await dc(i);for(const n of e)try{if(mc(n))return}catch{}ne(i,"unauthorized-domain")}function mc(i){const e=Gn(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const l=new URL(i);return l.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===s}if(!pc.test(n))return!1;if(fc.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const vc=new St(3e4,6e4);function Rr(){const i=se().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function _c(i){return new Promise((e,n)=>{var s,a,h;function l(){Rr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rr(),n(re(i,"network-request-failed"))},timeout:vc.get()})}if(!((a=(s=se().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((h=se().gapi)===null||h===void 0)&&h.load)l();else{const m=fh("iframefcb");return se()[m]=()=>{gapi.load?l():n(re(i,"network-request-failed"))},fs(`${dh()}?onload=${m}`).catch(I=>n(I))}}).catch(e=>{throw Jt=null,e})}let Jt=null;function yc(i){return Jt=Jt||_c(i),Jt}/**
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
 */const Ic=new St(5e3,15e3),Ec="__/auth/iframe",wc="emulator/auth/iframe",Tc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ac=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sc(i){const e=i.config;A(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?ti(e,wc):`https://${i.config.authDomain}/${Ec}`,s={apiKey:e.apiKey,appName:i.name,v:Ye},a=Ac.get(i.config.apiHost);a&&(s.eid=a);const h=i._getFrameworks();return h.length&&(s.fw=h.join(",")),`${n}?${At(s).slice(1)}`}async function Cc(i){const e=await yc(i),n=se().gapi;return A(n,i,"internal-error"),e.open({where:document.body,url:Sc(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tc,dontclear:!0},s=>new Promise(async(a,h)=>{await s.restyle({setHideOnLeave:!1});const l=re(i,"network-request-failed"),m=se().setTimeout(()=>{h(l)},Ic.get());function I(){se().clearTimeout(m),a(s)}s.ping(I).then(I,()=>{h(l)})}))}/**
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
 */const bc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rc=500,Pc=600,kc="_blank",Oc="http://localhost";class Pr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Nc(i,e,n,s=Rc,a=Pc){const h=Math.max((window.screen.availHeight-a)/2,0).toString(),l=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const I=Object.assign(Object.assign({},bc),{width:s.toString(),height:a.toString(),top:h,left:l}),w=W().toLowerCase();n&&(m=os(w)?kc:n),ss(w)&&(e=e||Oc,I.scrollbars="yes");const S=Object.entries(I).reduce((P,[x,R])=>`${P}${x}=${R},`,"");if(nh(w)&&m!=="_self")return Dc(e||"",m),new Pr(null);const C=window.open(e||"",m,S);A(C,i,"popup-blocked");try{C.focus()}catch{}return new Pr(C)}function Dc(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Lc="__/auth/handler",Mc="emulator/auth/handler",Uc=encodeURIComponent("fac");async function kr(i,e,n,s,a,h){A(i.config.authDomain,i,"auth-domain-config-required"),A(i.config.apiKey,i,"invalid-api-key");const l={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:Ye,eventId:a};if(e instanceof gs){e.setDefaultLanguage(i.languageCode),l.providerId=e.providerId||"",Uo(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[S,C]of Object.entries(h||{}))l[S]=C}if(e instanceof bt){const S=e.getScopes().filter(C=>C!=="");S.length>0&&(l.scopes=S.join(","))}i.tenantId&&(l.tid=i.tenantId);const m=l;for(const S of Object.keys(m))m[S]===void 0&&delete m[S];const I=await i._getAppCheckToken(),w=I?`#${Uc}=${encodeURIComponent(I)}`:"";return`${xc(i)}?${At(m).slice(1)}${w}`}function xc({config:i}){return i.emulator?ti(i,Mc):`https://${i.authDomain}/${Lc}`}/**
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
 */const Vn="webStorageSupport";class Fc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ws,this._completeRedirectFn=hc,this._overrideRedirectResult=sc}async _openPopup(e,n,s,a){var h;pe((h=this.eventManagers[e._key()])===null||h===void 0?void 0:h.manager,"_initialize() not called before _openPopup()");const l=await kr(e,n,s,Gn(),a);return Nc(e,l,oi())}async _openRedirect(e,n,s,a){await this._originValidation(e);const h=await kr(e,n,s,Gn(),a);return Vh(h),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:a,promise:h}=this.eventManagers[n];return a?Promise.resolve(a):(pe(h,"If manager is not set, promise should be"),h)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Cc(e),s=new lc(e);return n.register("authEvent",a=>(A(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vn,{type:Vn},a=>{var h;const l=(h=a==null?void 0:a[0])===null||h===void 0?void 0:h[Vn];l!==void 0&&n(!!l),ne(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=gc(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return us()||ii()||on()}}const jc=Fc;var Or="@firebase/auth",Nr="1.7.4";/**
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
 */class Bc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Vc(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hc(i){Xe(new Me("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),h=e.getProvider("app-check-internal"),{apiKey:l,authDomain:m}=s.options;A(l&&!l.includes(":"),"invalid-api-key",{appName:s.name});const I={apiKey:l,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ds(i)},w=new ch(s,a,h,I);return _h(w,n),w},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Xe(new Me("auth-internal",e=>{const n=je(e.getProvider("auth").getImmediate());return(s=>new Bc(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Le(Or,Nr,Vc(i)),Le(Or,Nr,"esm2017")}/**
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
 */const $c=5*60,Wc=Gr("authIdTokenMaxAge")||$c;let Dr=null;const zc=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Wc)return;const a=n==null?void 0:n.token;Dr!==a&&(Dr=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function ml(i=ba()){const e=qr(i,"auth");if(e.isInitialized())return e.getImmediate();const n=vh(i,{popupRedirectResolver:jc,persistence:[Xh,Fh,ws]}),s=Gr("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const h=new URL(s,location.origin);if(location.origin===h.origin){const l=zc(h.toString());Lh(n,l,()=>l(n.currentUser)),Dh(n,m=>l(m))}}const a=So("auth");return a&&yh(n,`http://${a}`),n}function Gc(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}lh({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const h=re("internal-error");h.customData=a,n(h)},s.type="text/javascript",s.charset="UTF-8",Gc().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Hc("Browser");var Lr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ps;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,u){function f(){}f.prototype=u.prototype,_.D=u.prototype,_.prototype=new f,_.prototype.constructor=_,_.C=function(p,g,y){for(var d=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)d[ae-2]=arguments[ae];return u.prototype[g].apply(p,d)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(_,u,f){f||(f=0);var p=Array(16);if(typeof u=="string")for(var g=0;16>g;++g)p[g]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(g=0;16>g;++g)p[g]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=_.g[0],f=_.g[1],g=_.g[2];var y=_.g[3],d=u+(y^f&(g^y))+p[0]+3614090360&4294967295;u=f+(d<<7&4294967295|d>>>25),d=y+(g^u&(f^g))+p[1]+3905402710&4294967295,y=u+(d<<12&4294967295|d>>>20),d=g+(f^y&(u^f))+p[2]+606105819&4294967295,g=y+(d<<17&4294967295|d>>>15),d=f+(u^g&(y^u))+p[3]+3250441966&4294967295,f=g+(d<<22&4294967295|d>>>10),d=u+(y^f&(g^y))+p[4]+4118548399&4294967295,u=f+(d<<7&4294967295|d>>>25),d=y+(g^u&(f^g))+p[5]+1200080426&4294967295,y=u+(d<<12&4294967295|d>>>20),d=g+(f^y&(u^f))+p[6]+2821735955&4294967295,g=y+(d<<17&4294967295|d>>>15),d=f+(u^g&(y^u))+p[7]+4249261313&4294967295,f=g+(d<<22&4294967295|d>>>10),d=u+(y^f&(g^y))+p[8]+1770035416&4294967295,u=f+(d<<7&4294967295|d>>>25),d=y+(g^u&(f^g))+p[9]+2336552879&4294967295,y=u+(d<<12&4294967295|d>>>20),d=g+(f^y&(u^f))+p[10]+4294925233&4294967295,g=y+(d<<17&4294967295|d>>>15),d=f+(u^g&(y^u))+p[11]+2304563134&4294967295,f=g+(d<<22&4294967295|d>>>10),d=u+(y^f&(g^y))+p[12]+1804603682&4294967295,u=f+(d<<7&4294967295|d>>>25),d=y+(g^u&(f^g))+p[13]+4254626195&4294967295,y=u+(d<<12&4294967295|d>>>20),d=g+(f^y&(u^f))+p[14]+2792965006&4294967295,g=y+(d<<17&4294967295|d>>>15),d=f+(u^g&(y^u))+p[15]+1236535329&4294967295,f=g+(d<<22&4294967295|d>>>10),d=u+(g^y&(f^g))+p[1]+4129170786&4294967295,u=f+(d<<5&4294967295|d>>>27),d=y+(f^g&(u^f))+p[6]+3225465664&4294967295,y=u+(d<<9&4294967295|d>>>23),d=g+(u^f&(y^u))+p[11]+643717713&4294967295,g=y+(d<<14&4294967295|d>>>18),d=f+(y^u&(g^y))+p[0]+3921069994&4294967295,f=g+(d<<20&4294967295|d>>>12),d=u+(g^y&(f^g))+p[5]+3593408605&4294967295,u=f+(d<<5&4294967295|d>>>27),d=y+(f^g&(u^f))+p[10]+38016083&4294967295,y=u+(d<<9&4294967295|d>>>23),d=g+(u^f&(y^u))+p[15]+3634488961&4294967295,g=y+(d<<14&4294967295|d>>>18),d=f+(y^u&(g^y))+p[4]+3889429448&4294967295,f=g+(d<<20&4294967295|d>>>12),d=u+(g^y&(f^g))+p[9]+568446438&4294967295,u=f+(d<<5&4294967295|d>>>27),d=y+(f^g&(u^f))+p[14]+3275163606&4294967295,y=u+(d<<9&4294967295|d>>>23),d=g+(u^f&(y^u))+p[3]+4107603335&4294967295,g=y+(d<<14&4294967295|d>>>18),d=f+(y^u&(g^y))+p[8]+1163531501&4294967295,f=g+(d<<20&4294967295|d>>>12),d=u+(g^y&(f^g))+p[13]+2850285829&4294967295,u=f+(d<<5&4294967295|d>>>27),d=y+(f^g&(u^f))+p[2]+4243563512&4294967295,y=u+(d<<9&4294967295|d>>>23),d=g+(u^f&(y^u))+p[7]+1735328473&4294967295,g=y+(d<<14&4294967295|d>>>18),d=f+(y^u&(g^y))+p[12]+2368359562&4294967295,f=g+(d<<20&4294967295|d>>>12),d=u+(f^g^y)+p[5]+4294588738&4294967295,u=f+(d<<4&4294967295|d>>>28),d=y+(u^f^g)+p[8]+2272392833&4294967295,y=u+(d<<11&4294967295|d>>>21),d=g+(y^u^f)+p[11]+1839030562&4294967295,g=y+(d<<16&4294967295|d>>>16),d=f+(g^y^u)+p[14]+4259657740&4294967295,f=g+(d<<23&4294967295|d>>>9),d=u+(f^g^y)+p[1]+2763975236&4294967295,u=f+(d<<4&4294967295|d>>>28),d=y+(u^f^g)+p[4]+1272893353&4294967295,y=u+(d<<11&4294967295|d>>>21),d=g+(y^u^f)+p[7]+4139469664&4294967295,g=y+(d<<16&4294967295|d>>>16),d=f+(g^y^u)+p[10]+3200236656&4294967295,f=g+(d<<23&4294967295|d>>>9),d=u+(f^g^y)+p[13]+681279174&4294967295,u=f+(d<<4&4294967295|d>>>28),d=y+(u^f^g)+p[0]+3936430074&4294967295,y=u+(d<<11&4294967295|d>>>21),d=g+(y^u^f)+p[3]+3572445317&4294967295,g=y+(d<<16&4294967295|d>>>16),d=f+(g^y^u)+p[6]+76029189&4294967295,f=g+(d<<23&4294967295|d>>>9),d=u+(f^g^y)+p[9]+3654602809&4294967295,u=f+(d<<4&4294967295|d>>>28),d=y+(u^f^g)+p[12]+3873151461&4294967295,y=u+(d<<11&4294967295|d>>>21),d=g+(y^u^f)+p[15]+530742520&4294967295,g=y+(d<<16&4294967295|d>>>16),d=f+(g^y^u)+p[2]+3299628645&4294967295,f=g+(d<<23&4294967295|d>>>9),d=u+(g^(f|~y))+p[0]+4096336452&4294967295,u=f+(d<<6&4294967295|d>>>26),d=y+(f^(u|~g))+p[7]+1126891415&4294967295,y=u+(d<<10&4294967295|d>>>22),d=g+(u^(y|~f))+p[14]+2878612391&4294967295,g=y+(d<<15&4294967295|d>>>17),d=f+(y^(g|~u))+p[5]+4237533241&4294967295,f=g+(d<<21&4294967295|d>>>11),d=u+(g^(f|~y))+p[12]+1700485571&4294967295,u=f+(d<<6&4294967295|d>>>26),d=y+(f^(u|~g))+p[3]+2399980690&4294967295,y=u+(d<<10&4294967295|d>>>22),d=g+(u^(y|~f))+p[10]+4293915773&4294967295,g=y+(d<<15&4294967295|d>>>17),d=f+(y^(g|~u))+p[1]+2240044497&4294967295,f=g+(d<<21&4294967295|d>>>11),d=u+(g^(f|~y))+p[8]+1873313359&4294967295,u=f+(d<<6&4294967295|d>>>26),d=y+(f^(u|~g))+p[15]+4264355552&4294967295,y=u+(d<<10&4294967295|d>>>22),d=g+(u^(y|~f))+p[6]+2734768916&4294967295,g=y+(d<<15&4294967295|d>>>17),d=f+(y^(g|~u))+p[13]+1309151649&4294967295,f=g+(d<<21&4294967295|d>>>11),d=u+(g^(f|~y))+p[4]+4149444226&4294967295,u=f+(d<<6&4294967295|d>>>26),d=y+(f^(u|~g))+p[11]+3174756917&4294967295,y=u+(d<<10&4294967295|d>>>22),d=g+(u^(y|~f))+p[2]+718787259&4294967295,g=y+(d<<15&4294967295|d>>>17),d=f+(y^(g|~u))+p[9]+3951481745&4294967295,_.g[0]=_.g[0]+u&4294967295,_.g[1]=_.g[1]+(g+(d<<21&4294967295|d>>>11))&4294967295,_.g[2]=_.g[2]+g&4294967295,_.g[3]=_.g[3]+y&4294967295}s.prototype.u=function(_,u){u===void 0&&(u=_.length);for(var f=u-this.blockSize,p=this.B,g=this.h,y=0;y<u;){if(g==0)for(;y<=f;)a(this,_,y),y+=this.blockSize;if(typeof _=="string"){for(;y<u;)if(p[g++]=_.charCodeAt(y++),g==this.blockSize){a(this,p),g=0;break}}else for(;y<u;)if(p[g++]=_[y++],g==this.blockSize){a(this,p),g=0;break}}this.h=g,this.o+=u},s.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var u=1;u<_.length-8;++u)_[u]=0;var f=8*this.o;for(u=_.length-8;u<_.length;++u)_[u]=f&255,f/=256;for(this.u(_),_=Array(16),u=f=0;4>u;++u)for(var p=0;32>p;p+=8)_[f++]=this.g[u]>>>p&255;return _};function h(_,u){var f=m;return Object.prototype.hasOwnProperty.call(f,_)?f[_]:f[_]=u(_)}function l(_,u){this.h=u;for(var f=[],p=!0,g=_.length-1;0<=g;g--){var y=_[g]|0;p&&y==u||(f[g]=y,p=!1)}this.g=f}var m={};function I(_){return-128<=_&&128>_?h(_,function(u){return new l([u|0],0>u?-1:0)}):new l([_|0],0>_?-1:0)}function w(_){if(isNaN(_)||!isFinite(_))return C;if(0>_)return L(w(-_));for(var u=[],f=1,p=0;_>=f;p++)u[p]=_/f|0,f*=4294967296;return new l(u,0)}function S(_,u){if(_.length==0)throw Error("number format error: empty string");if(u=u||10,2>u||36<u)throw Error("radix out of range: "+u);if(_.charAt(0)=="-")return L(S(_.substring(1),u));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=w(Math.pow(u,8)),p=C,g=0;g<_.length;g+=8){var y=Math.min(8,_.length-g),d=parseInt(_.substring(g,g+y),u);8>y?(y=w(Math.pow(u,y)),p=p.j(y).add(w(d))):(p=p.j(f),p=p.add(w(d)))}return p}var C=I(0),P=I(1),x=I(16777216);i=l.prototype,i.m=function(){if(U(this))return-L(this).m();for(var _=0,u=1,f=0;f<this.g.length;f++){var p=this.i(f);_+=(0<=p?p:4294967296+p)*u,u*=4294967296}return _},i.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(R(this))return"0";if(U(this))return"-"+L(this).toString(_);for(var u=w(Math.pow(_,6)),f=this,p="";;){var g=ee(f,u).g;f=oe(f,g.j(u));var y=((0<f.g.length?f.g[0]:f.h)>>>0).toString(_);if(f=g,R(f))return y+p;for(;6>y.length;)y="0"+y;p=y+p}},i.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function R(_){if(_.h!=0)return!1;for(var u=0;u<_.g.length;u++)if(_.g[u]!=0)return!1;return!0}function U(_){return _.h==-1}i.l=function(_){return _=oe(this,_),U(_)?-1:R(_)?0:1};function L(_){for(var u=_.g.length,f=[],p=0;p<u;p++)f[p]=~_.g[p];return new l(f,~_.h).add(P)}i.abs=function(){return U(this)?L(this):this},i.add=function(_){for(var u=Math.max(this.g.length,_.g.length),f=[],p=0,g=0;g<=u;g++){var y=p+(this.i(g)&65535)+(_.i(g)&65535),d=(y>>>16)+(this.i(g)>>>16)+(_.i(g)>>>16);p=d>>>16,y&=65535,d&=65535,f[g]=d<<16|y}return new l(f,f[f.length-1]&-2147483648?-1:0)};function oe(_,u){return _.add(L(u))}i.j=function(_){if(R(this)||R(_))return C;if(U(this))return U(_)?L(this).j(L(_)):L(L(this).j(_));if(U(_))return L(this.j(L(_)));if(0>this.l(x)&&0>_.l(x))return w(this.m()*_.m());for(var u=this.g.length+_.g.length,f=[],p=0;p<2*u;p++)f[p]=0;for(p=0;p<this.g.length;p++)for(var g=0;g<_.g.length;g++){var y=this.i(p)>>>16,d=this.i(p)&65535,ae=_.i(g)>>>16,Ze=_.i(g)&65535;f[2*p+2*g]+=d*Ze,J(f,2*p+2*g),f[2*p+2*g+1]+=y*Ze,J(f,2*p+2*g+1),f[2*p+2*g+1]+=d*ae,J(f,2*p+2*g+1),f[2*p+2*g+2]+=y*ae,J(f,2*p+2*g+2)}for(p=0;p<u;p++)f[p]=f[2*p+1]<<16|f[2*p];for(p=u;p<2*u;p++)f[p]=0;return new l(f,0)};function J(_,u){for(;(_[u]&65535)!=_[u];)_[u+1]+=_[u]>>>16,_[u]&=65535,u++}function j(_,u){this.g=_,this.h=u}function ee(_,u){if(R(u))throw Error("division by zero");if(R(_))return new j(C,C);if(U(_))return u=ee(L(_),u),new j(L(u.g),L(u.h));if(U(u))return u=ee(_,L(u)),new j(L(u.g),u.h);if(30<_.g.length){if(U(_)||U(u))throw Error("slowDivide_ only works with positive integers.");for(var f=P,p=u;0>=p.l(_);)f=Pe(f),p=Pe(p);var g=q(f,1),y=q(p,1);for(p=q(p,2),f=q(f,2);!R(p);){var d=y.add(p);0>=d.l(_)&&(g=g.add(f),y=d),p=q(p,1),f=q(f,1)}return u=oe(_,g.j(u)),new j(g,u)}for(g=C;0<=_.l(u);){for(f=Math.max(1,Math.floor(_.m()/u.m())),p=Math.ceil(Math.log(f)/Math.LN2),p=48>=p?1:Math.pow(2,p-48),y=w(f),d=y.j(u);U(d)||0<d.l(_);)f-=p,y=w(f),d=y.j(u);R(y)&&(y=P),g=g.add(y),_=oe(_,d)}return new j(g,_)}i.A=function(_){return ee(this,_).h},i.and=function(_){for(var u=Math.max(this.g.length,_.g.length),f=[],p=0;p<u;p++)f[p]=this.i(p)&_.i(p);return new l(f,this.h&_.h)},i.or=function(_){for(var u=Math.max(this.g.length,_.g.length),f=[],p=0;p<u;p++)f[p]=this.i(p)|_.i(p);return new l(f,this.h|_.h)},i.xor=function(_){for(var u=Math.max(this.g.length,_.g.length),f=[],p=0;p<u;p++)f[p]=this.i(p)^_.i(p);return new l(f,this.h^_.h)};function Pe(_){for(var u=_.g.length+1,f=[],p=0;p<u;p++)f[p]=_.i(p)<<1|_.i(p-1)>>>31;return new l(f,_.h)}function q(_,u){var f=u>>5;u%=32;for(var p=_.g.length-f,g=[],y=0;y<p;y++)g[y]=0<u?_.i(y+f)>>>u|_.i(y+f+1)<<32-u:_.i(y+f);return new l(g,_.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=w,l.fromString=S,Ps=l}).apply(typeof Lr<"u"?Lr:typeof self<"u"?self:typeof window<"u"?window:{});var zt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,r,o){return t==Array.prototype||t==Object.prototype||(t[r]=o.value),t};function n(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof zt=="object"&&zt];for(var r=0;r<t.length;++r){var o=t[r];if(o&&o.Math==Math)return o}throw Error("Cannot find global object")}var s=n(this);function a(t,r){if(r)e:{var o=s;t=t.split(".");for(var c=0;c<t.length-1;c++){var v=t[c];if(!(v in o))break e;o=o[v]}t=t[t.length-1],c=o[t],r=r(c),r!=c&&r!=null&&e(o,t,{configurable:!0,writable:!0,value:r})}}function h(t,r){t instanceof String&&(t+="");var o=0,c=!1,v={next:function(){if(!c&&o<t.length){var E=o++;return{value:r(E,t[E]),done:!1}}return c=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}a("Array.prototype.values",function(t){return t||function(){return h(this,function(r,o){return o})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},m=this||self;function I(t){var r=typeof t;return r=r!="object"?r:t?Array.isArray(t)?"array":r:"null",r=="array"||r=="object"&&typeof t.length=="number"}function w(t){var r=typeof t;return r=="object"&&t!=null||r=="function"}function S(t,r,o){return t.call.apply(t.bind,arguments)}function C(t,r,o){if(!t)throw Error();if(2<arguments.length){var c=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,c),t.apply(r,v)}}return function(){return t.apply(r,arguments)}}function P(t,r,o){return P=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?S:C,P.apply(null,arguments)}function x(t,r){var o=Array.prototype.slice.call(arguments,1);return function(){var c=o.slice();return c.push.apply(c,arguments),t.apply(this,c)}}function R(t,r){function o(){}o.prototype=r.prototype,t.aa=r.prototype,t.prototype=new o,t.prototype.constructor=t,t.Qb=function(c,v,E){for(var T=Array(arguments.length-2),N=2;N<arguments.length;N++)T[N-2]=arguments[N];return r.prototype[v].apply(c,T)}}function U(t){const r=t.length;if(0<r){const o=Array(r);for(let c=0;c<r;c++)o[c]=t[c];return o}return[]}function L(t,r){for(let o=1;o<arguments.length;o++){const c=arguments[o];if(I(c)){const v=t.length||0,E=c.length||0;t.length=v+E;for(let T=0;T<E;T++)t[v+T]=c[T]}else t.push(c)}}class oe{constructor(r,o){this.i=r,this.j=o,this.h=0,this.g=null}get(){let r;return 0<this.h?(this.h--,r=this.g,this.g=r.next,r.next=null):r=this.i(),r}}function J(t){return/^[\s\xa0]*$/.test(t)}function j(){var t=m.navigator;return t&&(t=t.userAgent)?t:""}function ee(t){return ee[" "](t),t}ee[" "]=function(){};var Pe=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function q(t,r,o){for(const c in t)r.call(o,t[c],c,t)}function _(t,r){for(const o in t)r.call(void 0,t[o],o,t)}function u(t){const r={};for(const o in t)r[o]=t[o];return r}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function p(t,r){let o,c;for(let v=1;v<arguments.length;v++){c=arguments[v];for(o in c)t[o]=c[o];for(let E=0;E<f.length;E++)o=f[E],Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o])}}function g(t){var r=1;t=t.split(":");const o=[];for(;0<r&&t.length;)o.push(t.shift()),r--;return t.length&&o.push(t.join(":")),o}function y(t){m.setTimeout(()=>{throw t},0)}function d(){var t=un;let r=null;return t.g&&(r=t.g,t.g=t.g.next,t.g||(t.h=null),r.next=null),r}class ae{constructor(){this.h=this.g=null}add(r,o){const c=Ze.get();c.set(r,o),this.h?this.h.next=c:this.g=c,this.h=c}}var Ze=new oe(()=>new Ls,t=>t.reset());class Ls{constructor(){this.next=this.g=this.h=null}set(r,o){this.h=r,this.g=o,this.next=null}reset(){this.next=this.g=this.h=null}}let et,tt=!1,un=new ae,li=()=>{const t=m.Promise.resolve(void 0);et=()=>{t.then(Ms)}};var Ms=()=>{for(var t;t=d();){try{t.h.call(t.g)}catch(o){y(o)}var r=Ze;r.j(t),100>r.h&&(r.h++,t.next=r.g,r.g=t)}tt=!1};function me(){this.s=this.s,this.C=this.C}me.prototype.s=!1,me.prototype.ma=function(){this.s||(this.s=!0,this.N())},me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function B(t,r){this.type=t,this.g=this.target=r,this.defaultPrevented=!1}B.prototype.h=function(){this.defaultPrevented=!0};var Us=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var t=!1,r=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const o=()=>{};m.addEventListener("test",o,r),m.removeEventListener("test",o,r)}catch{}return t}();function nt(t,r){if(B.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var o=this.type=t.type,c=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=r,r=t.relatedTarget){if(Pe){e:{try{ee(r.nodeName);var v=!0;break e}catch{}v=!1}v||(r=null)}}else o=="mouseover"?r=t.fromElement:o=="mouseout"&&(r=t.toElement);this.relatedTarget=r,c?(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:xs[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&nt.aa.h.call(this)}}R(nt,B);var xs={2:"touch",3:"pen",4:"mouse"};nt.prototype.h=function(){nt.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var it="closure_listenable_"+(1e6*Math.random()|0),Fs=0;function js(t,r,o,c,v){this.listener=t,this.proxy=null,this.src=r,this.type=o,this.capture=!!c,this.ha=v,this.key=++Fs,this.da=this.fa=!1}function Pt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function kt(t){this.src=t,this.g={},this.h=0}kt.prototype.add=function(t,r,o,c,v){var E=t.toString();t=this.g[E],t||(t=this.g[E]=[],this.h++);var T=fn(t,r,c,v);return-1<T?(r=t[T],o||(r.fa=!1)):(r=new js(r,this.src,E,!!c,v),r.fa=o,t.push(r)),r};function dn(t,r){var o=r.type;if(o in t.g){var c=t.g[o],v=Array.prototype.indexOf.call(c,r,void 0),E;(E=0<=v)&&Array.prototype.splice.call(c,v,1),E&&(Pt(r),t.g[o].length==0&&(delete t.g[o],t.h--))}}function fn(t,r,o,c){for(var v=0;v<t.length;++v){var E=t[v];if(!E.da&&E.listener==r&&E.capture==!!o&&E.ha==c)return v}return-1}var pn="closure_lm_"+(1e6*Math.random()|0),gn={};function ui(t,r,o,c,v){if(c&&c.once)return fi(t,r,o,c,v);if(Array.isArray(r)){for(var E=0;E<r.length;E++)ui(t,r[E],o,c,v);return null}return o=yn(o),t&&t[it]?t.K(r,o,w(c)?!!c.capture:!!c,v):di(t,r,o,!1,c,v)}function di(t,r,o,c,v,E){if(!r)throw Error("Invalid event type");var T=w(v)?!!v.capture:!!v,N=vn(t);if(N||(t[pn]=N=new kt(t)),o=N.add(r,o,c,T,E),o.proxy)return o;if(c=Bs(),o.proxy=c,c.src=t,c.listener=o,t.addEventListener)Us||(v=T),v===void 0&&(v=!1),t.addEventListener(r.toString(),c,v);else if(t.attachEvent)t.attachEvent(gi(r.toString()),c);else if(t.addListener&&t.removeListener)t.addListener(c);else throw Error("addEventListener and attachEvent are unavailable.");return o}function Bs(){function t(o){return r.call(t.src,t.listener,o)}const r=Vs;return t}function fi(t,r,o,c,v){if(Array.isArray(r)){for(var E=0;E<r.length;E++)fi(t,r[E],o,c,v);return null}return o=yn(o),t&&t[it]?t.L(r,o,w(c)?!!c.capture:!!c,v):di(t,r,o,!0,c,v)}function pi(t,r,o,c,v){if(Array.isArray(r))for(var E=0;E<r.length;E++)pi(t,r[E],o,c,v);else c=w(c)?!!c.capture:!!c,o=yn(o),t&&t[it]?(t=t.i,r=String(r).toString(),r in t.g&&(E=t.g[r],o=fn(E,o,c,v),-1<o&&(Pt(E[o]),Array.prototype.splice.call(E,o,1),E.length==0&&(delete t.g[r],t.h--)))):t&&(t=vn(t))&&(r=t.g[r.toString()],t=-1,r&&(t=fn(r,o,c,v)),(o=-1<t?r[t]:null)&&mn(o))}function mn(t){if(typeof t!="number"&&t&&!t.da){var r=t.src;if(r&&r[it])dn(r.i,t);else{var o=t.type,c=t.proxy;r.removeEventListener?r.removeEventListener(o,c,t.capture):r.detachEvent?r.detachEvent(gi(o),c):r.addListener&&r.removeListener&&r.removeListener(c),(o=vn(r))?(dn(o,t),o.h==0&&(o.src=null,r[pn]=null)):Pt(t)}}}function gi(t){return t in gn?gn[t]:gn[t]="on"+t}function Vs(t,r){if(t.da)t=!0;else{r=new nt(r,this);var o=t.listener,c=t.ha||t.src;t.fa&&mn(t),t=o.call(c,r)}return t}function vn(t){return t=t[pn],t instanceof kt?t:null}var _n="__closure_events_fn_"+(1e9*Math.random()>>>0);function yn(t){return typeof t=="function"?t:(t[_n]||(t[_n]=function(r){return t.handleEvent(r)}),t[_n])}function V(){me.call(this),this.i=new kt(this),this.M=this,this.F=null}R(V,me),V.prototype[it]=!0,V.prototype.removeEventListener=function(t,r,o,c){pi(this,t,r,o,c)};function z(t,r){var o,c=t.F;if(c)for(o=[];c;c=c.F)o.push(c);if(t=t.M,c=r.type||r,typeof r=="string")r=new B(r,t);else if(r instanceof B)r.target=r.target||t;else{var v=r;r=new B(c,t),p(r,v)}if(v=!0,o)for(var E=o.length-1;0<=E;E--){var T=r.g=o[E];v=Ot(T,c,!0,r)&&v}if(T=r.g=t,v=Ot(T,c,!0,r)&&v,v=Ot(T,c,!1,r)&&v,o)for(E=0;E<o.length;E++)T=r.g=o[E],v=Ot(T,c,!1,r)&&v}V.prototype.N=function(){if(V.aa.N.call(this),this.i){var t=this.i,r;for(r in t.g){for(var o=t.g[r],c=0;c<o.length;c++)Pt(o[c]);delete t.g[r],t.h--}}this.F=null},V.prototype.K=function(t,r,o,c){return this.i.add(String(t),r,!1,o,c)},V.prototype.L=function(t,r,o,c){return this.i.add(String(t),r,!0,o,c)};function Ot(t,r,o,c){if(r=t.i.g[String(r)],!r)return!0;r=r.concat();for(var v=!0,E=0;E<r.length;++E){var T=r[E];if(T&&!T.da&&T.capture==o){var N=T.listener,F=T.ha||T.src;T.fa&&dn(t.i,T),v=N.call(F,c)!==!1&&v}}return v&&!c.defaultPrevented}function mi(t,r,o){if(typeof t=="function")o&&(t=P(t,o));else if(t&&typeof t.handleEvent=="function")t=P(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(r)?-1:m.setTimeout(t,r||0)}function vi(t){t.g=mi(()=>{t.g=null,t.i&&(t.i=!1,vi(t))},t.l);const r=t.h;t.h=null,t.m.apply(null,r)}class Hs extends me{constructor(r,o){super(),this.m=r,this.l=o,this.h=null,this.i=!1,this.g=null}j(r){this.h=arguments,this.g?this.i=!0:vi(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rt(t){me.call(this),this.h=t,this.g={}}R(rt,me);var _i=[];function yi(t){q(t.g,function(r,o){this.g.hasOwnProperty(o)&&mn(r)},t),t.g={}}rt.prototype.N=function(){rt.aa.N.call(this),yi(this)},rt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var In=m.JSON.stringify,$s=m.JSON.parse,Ws=class{stringify(t){return m.JSON.stringify(t,void 0)}parse(t){return m.JSON.parse(t,void 0)}};function En(){}En.prototype.h=null;function Ii(t){return t.h||(t.h=t.i())}function zs(){}var st={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wn(){B.call(this,"d")}R(wn,B);function Tn(){B.call(this,"c")}R(Tn,B);var Be={},Ei=null;function An(){return Ei=Ei||new V}Be.La="serverreachability";function wi(t){B.call(this,Be.La,t)}R(wi,B);function ot(t){const r=An();z(r,new wi(r))}Be.STAT_EVENT="statevent";function Ti(t,r){B.call(this,Be.STAT_EVENT,t),this.stat=r}R(Ti,B);function G(t){const r=An();z(r,new Ti(r,t))}Be.Ma="timingevent";function Ai(t,r){B.call(this,Be.Ma,t),this.size=r}R(Ai,B);function at(t,r){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){t()},r)}function ht(){this.g=!0}ht.prototype.xa=function(){this.g=!1};function Gs(t,r,o,c,v,E){t.info(function(){if(t.g)if(E)for(var T="",N=E.split("&"),F=0;F<N.length;F++){var k=N[F].split("=");if(1<k.length){var H=k[0];k=k[1];var $=H.split("_");T=2<=$.length&&$[1]=="type"?T+(H+"="+k+"&"):T+(H+"=redacted&")}}else T=null;else T=E;return"XMLHTTP REQ ("+c+") [attempt "+v+"]: "+r+`
`+o+`
`+T})}function qs(t,r,o,c,v,E,T){t.info(function(){return"XMLHTTP RESP ("+c+") [ attempt "+v+"]: "+r+`
`+o+`
`+E+" "+T})}function Ve(t,r,o,c){t.info(function(){return"XMLHTTP TEXT ("+r+"): "+Js(t,o)+(c?" "+c:"")})}function Ks(t,r){t.info(function(){return"TIMEOUT: "+r})}ht.prototype.info=function(){};function Js(t,r){if(!t.g)return r;if(!r)return null;try{var o=JSON.parse(r);if(o){for(t=0;t<o.length;t++)if(Array.isArray(o[t])){var c=o[t];if(!(2>c.length)){var v=c[1];if(Array.isArray(v)&&!(1>v.length)){var E=v[0];if(E!="noop"&&E!="stop"&&E!="close")for(var T=1;T<v.length;T++)v[T]=""}}}}return In(o)}catch{return r}}var Sn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xs={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cn;function Nt(){}R(Nt,En),Nt.prototype.g=function(){return new XMLHttpRequest},Nt.prototype.i=function(){return{}},Cn=new Nt;function ve(t,r,o,c){this.j=t,this.i=r,this.l=o,this.R=c||1,this.U=new rt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Si}function Si(){this.i=null,this.g="",this.h=!1}var Ci={},bn={};function Rn(t,r,o){t.L=1,t.v=Ut(he(r)),t.m=o,t.P=!0,bi(t,null)}function bi(t,r){t.F=Date.now(),Dt(t),t.A=he(t.v);var o=t.A,c=t.R;Array.isArray(c)||(c=[String(c)]),Vi(o.i,"t",c),t.C=0,o=t.j.J,t.h=new Si,t.g=sr(t.j,o?r:null,!t.m),0<t.O&&(t.M=new Hs(P(t.Y,t,t.g),t.O)),r=t.U,o=t.g,c=t.ca;var v="readystatechange";Array.isArray(v)||(v&&(_i[0]=v.toString()),v=_i);for(var E=0;E<v.length;E++){var T=ui(o,v[E],c||r.handleEvent,!1,r.h||r);if(!T)break;r.g[T.key]=T}r=t.H?u(t.H):{},t.m?(t.u||(t.u="POST"),r["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,r)):(t.u="GET",t.g.ea(t.A,t.u,null,r)),ot(),Gs(t.i,t.u,t.A,t.l,t.R,t.m)}ve.prototype.ca=function(t){t=t.target;const r=this.M;r&&ce(t)==3?r.j():this.Y(t)},ve.prototype.Y=function(t){try{if(t==this.g)e:{const $=ce(this.g);var r=this.g.Ba();const We=this.g.Z();if(!(3>$)&&($!=3||this.g&&(this.h.h||this.g.oa()||Ki(this.g)))){this.J||$!=4||r==7||(r==8||0>=We?ot(3):ot(2)),Pn(this);var o=this.g.Z();this.X=o;t:if(Ri(this)){var c=Ki(this.g);t="";var v=c.length,E=ce(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ke(this),ct(this);var T="";break t}this.h.i=new m.TextDecoder}for(r=0;r<v;r++)this.h.h=!0,t+=this.h.i.decode(c[r],{stream:!(E&&r==v-1)});c.length=0,this.h.g+=t,this.C=0,T=this.h.g}else T=this.g.oa();if(this.o=o==200,qs(this.i,this.u,this.A,this.l,this.R,$,o),this.o){if(this.T&&!this.K){t:{if(this.g){var N,F=this.g;if((N=F.g?F.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!J(N)){var k=N;break t}}k=null}if(o=k)Ve(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kn(this,o);else{this.o=!1,this.s=3,G(12),ke(this),ct(this);break e}}if(this.P){o=!0;let te;for(;!this.J&&this.C<T.length;)if(te=Ys(this,T),te==bn){$==4&&(this.s=4,G(14),o=!1),Ve(this.i,this.l,null,"[Incomplete Response]");break}else if(te==Ci){this.s=4,G(15),Ve(this.i,this.l,T,"[Invalid Chunk]"),o=!1;break}else Ve(this.i,this.l,te,null),kn(this,te);if(Ri(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$!=4||T.length!=0||this.h.h||(this.s=1,G(16),o=!1),this.o=this.o&&o,!o)Ve(this.i,this.l,T,"[Invalid Chunked Response]"),ke(this),ct(this);else if(0<T.length&&!this.W){this.W=!0;var H=this.j;H.g==this&&H.ba&&!H.M&&(H.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),Un(H),H.M=!0,G(11))}}else Ve(this.i,this.l,T,null),kn(this,T);$==4&&ke(this),this.o&&!this.J&&($==4?tr(this.j,this):(this.o=!1,Dt(this)))}else go(this.g),o==400&&0<T.indexOf("Unknown SID")?(this.s=3,G(12)):(this.s=0,G(13)),ke(this),ct(this)}}}catch{}finally{}};function Ri(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function Ys(t,r){var o=t.C,c=r.indexOf(`
`,o);return c==-1?bn:(o=Number(r.substring(o,c)),isNaN(o)?Ci:(c+=1,c+o>r.length?bn:(r=r.slice(c,c+o),t.C=c+o,r)))}ve.prototype.cancel=function(){this.J=!0,ke(this)};function Dt(t){t.S=Date.now()+t.I,Pi(t,t.I)}function Pi(t,r){if(t.B!=null)throw Error("WatchDog timer not null");t.B=at(P(t.ba,t),r)}function Pn(t){t.B&&(m.clearTimeout(t.B),t.B=null)}ve.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Ks(this.i,this.A),this.L!=2&&(ot(),G(17)),ke(this),this.s=2,ct(this)):Pi(this,this.S-t)};function ct(t){t.j.G==0||t.J||tr(t.j,t)}function ke(t){Pn(t);var r=t.M;r&&typeof r.ma=="function"&&r.ma(),t.M=null,yi(t.U),t.g&&(r=t.g,t.g=null,r.abort(),r.ma())}function kn(t,r){try{var o=t.j;if(o.G!=0&&(o.g==t||On(o.h,t))){if(!t.K&&On(o.h,t)&&o.G==3){try{var c=o.Da.g.parse(r)}catch{c=null}if(Array.isArray(c)&&c.length==3){var v=c;if(v[0]==0){e:if(!o.u){if(o.g)if(o.g.F+3e3<t.F)Ht(o),Bt(o);else break e;Mn(o),G(18)}}else o.za=v[1],0<o.za-o.T&&37500>v[2]&&o.F&&o.v==0&&!o.C&&(o.C=at(P(o.Za,o),6e3));if(1>=Ni(o.h)&&o.ca){try{o.ca()}catch{}o.ca=void 0}}else Ne(o,11)}else if((t.K||o.g==t)&&Ht(o),!J(r))for(v=o.Da.g.parse(r),r=0;r<v.length;r++){let k=v[r];if(o.T=k[0],k=k[1],o.G==2)if(k[0]=="c"){o.K=k[1],o.ia=k[2];const H=k[3];H!=null&&(o.la=H,o.j.info("VER="+o.la));const $=k[4];$!=null&&(o.Aa=$,o.j.info("SVER="+o.Aa));const We=k[5];We!=null&&typeof We=="number"&&0<We&&(c=1.5*We,o.L=c,o.j.info("backChannelRequestTimeoutMs_="+c)),c=o;const te=t.g;if(te){const $t=te.g?te.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($t){var E=c.h;E.g||$t.indexOf("spdy")==-1&&$t.indexOf("quic")==-1&&$t.indexOf("h2")==-1||(E.j=E.l,E.g=new Set,E.h&&(Nn(E,E.h),E.h=null))}if(c.D){const xn=te.g?te.g.getResponseHeader("X-HTTP-Session-Id"):null;xn&&(c.ya=xn,D(c.I,c.D,xn))}}o.G=3,o.l&&o.l.ua(),o.ba&&(o.R=Date.now()-t.F,o.j.info("Handshake RTT: "+o.R+"ms")),c=o;var T=t;if(c.qa=rr(c,c.J?c.ia:null,c.W),T.K){Di(c.h,T);var N=T,F=c.L;F&&(N.I=F),N.B&&(Pn(N),Dt(N)),c.g=T}else Zi(c);0<o.i.length&&Vt(o)}else k[0]!="stop"&&k[0]!="close"||Ne(o,7);else o.G==3&&(k[0]=="stop"||k[0]=="close"?k[0]=="stop"?Ne(o,7):Ln(o):k[0]!="noop"&&o.l&&o.l.ta(k),o.v=0)}}ot(4)}catch{}}var Qs=class{constructor(t,r){this.g=t,this.map=r}};function ki(t){this.l=t||10,m.PerformanceNavigationTiming?(t=m.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Oi(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ni(t){return t.h?1:t.g?t.g.size:0}function On(t,r){return t.h?t.h==r:t.g?t.g.has(r):!1}function Nn(t,r){t.g?t.g.add(r):t.h=r}function Di(t,r){t.h&&t.h==r?t.h=null:t.g&&t.g.has(r)&&t.g.delete(r)}ki.prototype.cancel=function(){if(this.i=Li(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Li(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let r=t.i;for(const o of t.g.values())r=r.concat(o.D);return r}return U(t.i)}function Zs(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(I(t)){for(var r=[],o=t.length,c=0;c<o;c++)r.push(t[c]);return r}r=[],o=0;for(c in t)r[o++]=t[c];return r}function eo(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(I(t)||typeof t=="string"){var r=[];t=t.length;for(var o=0;o<t;o++)r.push(o);return r}r=[],o=0;for(const c in t)r[o++]=c;return r}}}function Mi(t,r){if(t.forEach&&typeof t.forEach=="function")t.forEach(r,void 0);else if(I(t)||typeof t=="string")Array.prototype.forEach.call(t,r,void 0);else for(var o=eo(t),c=Zs(t),v=c.length,E=0;E<v;E++)r.call(void 0,c[E],o&&o[E],t)}var Ui=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function to(t,r){if(t){t=t.split("&");for(var o=0;o<t.length;o++){var c=t[o].indexOf("="),v=null;if(0<=c){var E=t[o].substring(0,c);v=t[o].substring(c+1)}else E=t[o];r(E,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Oe(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Oe){this.h=t.h,Lt(this,t.j),this.o=t.o,this.g=t.g,Mt(this,t.s),this.l=t.l;var r=t.i,o=new dt;o.i=r.i,r.g&&(o.g=new Map(r.g),o.h=r.h),xi(this,o),this.m=t.m}else t&&(r=String(t).match(Ui))?(this.h=!1,Lt(this,r[1]||"",!0),this.o=lt(r[2]||""),this.g=lt(r[3]||"",!0),Mt(this,r[4]),this.l=lt(r[5]||"",!0),xi(this,r[6]||"",!0),this.m=lt(r[7]||"")):(this.h=!1,this.i=new dt(null,this.h))}Oe.prototype.toString=function(){var t=[],r=this.j;r&&t.push(ut(r,Fi,!0),":");var o=this.g;return(o||r=="file")&&(t.push("//"),(r=this.o)&&t.push(ut(r,Fi,!0),"@"),t.push(encodeURIComponent(String(o)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o=this.s,o!=null&&t.push(":",String(o))),(o=this.l)&&(this.g&&o.charAt(0)!="/"&&t.push("/"),t.push(ut(o,o.charAt(0)=="/"?ro:io,!0))),(o=this.i.toString())&&t.push("?",o),(o=this.m)&&t.push("#",ut(o,oo)),t.join("")};function he(t){return new Oe(t)}function Lt(t,r,o){t.j=o?lt(r,!0):r,t.j&&(t.j=t.j.replace(/:$/,""))}function Mt(t,r){if(r){if(r=Number(r),isNaN(r)||0>r)throw Error("Bad port number "+r);t.s=r}else t.s=null}function xi(t,r,o){r instanceof dt?(t.i=r,ao(t.i,t.h)):(o||(r=ut(r,so)),t.i=new dt(r,t.h))}function D(t,r,o){t.i.set(r,o)}function Ut(t){return D(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function lt(t,r){return t?r?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ut(t,r,o){return typeof t=="string"?(t=encodeURI(t).replace(r,no),o&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function no(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Fi=/[#\/\?@]/g,io=/[#\?:]/g,ro=/[#\?]/g,so=/[#\?@]/g,oo=/#/g;function dt(t,r){this.h=this.g=null,this.i=t||null,this.j=!!r}function _e(t){t.g||(t.g=new Map,t.h=0,t.i&&to(t.i,function(r,o){t.add(decodeURIComponent(r.replace(/\+/g," ")),o)}))}i=dt.prototype,i.add=function(t,r){_e(this),this.i=null,t=He(this,t);var o=this.g.get(t);return o||this.g.set(t,o=[]),o.push(r),this.h+=1,this};function ji(t,r){_e(t),r=He(t,r),t.g.has(r)&&(t.i=null,t.h-=t.g.get(r).length,t.g.delete(r))}function Bi(t,r){return _e(t),r=He(t,r),t.g.has(r)}i.forEach=function(t,r){_e(this),this.g.forEach(function(o,c){o.forEach(function(v){t.call(r,v,c,this)},this)},this)},i.na=function(){_e(this);const t=Array.from(this.g.values()),r=Array.from(this.g.keys()),o=[];for(let c=0;c<r.length;c++){const v=t[c];for(let E=0;E<v.length;E++)o.push(r[c])}return o},i.V=function(t){_e(this);let r=[];if(typeof t=="string")Bi(this,t)&&(r=r.concat(this.g.get(He(this,t))));else{t=Array.from(this.g.values());for(let o=0;o<t.length;o++)r=r.concat(t[o])}return r},i.set=function(t,r){return _e(this),this.i=null,t=He(this,t),Bi(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[r]),this.h+=1,this},i.get=function(t,r){return t?(t=this.V(t),0<t.length?String(t[0]):r):r};function Vi(t,r,o){ji(t,r),0<o.length&&(t.i=null,t.g.set(He(t,r),U(o)),t.h+=o.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],r=Array.from(this.g.keys());for(var o=0;o<r.length;o++){var c=r[o];const E=encodeURIComponent(String(c)),T=this.V(c);for(c=0;c<T.length;c++){var v=E;T[c]!==""&&(v+="="+encodeURIComponent(String(T[c]))),t.push(v)}}return this.i=t.join("&")};function He(t,r){return r=String(r),t.j&&(r=r.toLowerCase()),r}function ao(t,r){r&&!t.j&&(_e(t),t.i=null,t.g.forEach(function(o,c){var v=c.toLowerCase();c!=v&&(ji(this,c),Vi(this,v,o))},t)),t.j=r}function ho(t,r){const o=new ht;if(m.Image){const c=new Image;c.onload=x(ye,o,"TestLoadImage: loaded",!0,r,c),c.onerror=x(ye,o,"TestLoadImage: error",!1,r,c),c.onabort=x(ye,o,"TestLoadImage: abort",!1,r,c),c.ontimeout=x(ye,o,"TestLoadImage: timeout",!1,r,c),m.setTimeout(function(){c.ontimeout&&c.ontimeout()},1e4),c.src=t}else r(!1)}function co(t,r){const o=new ht,c=new AbortController,v=setTimeout(()=>{c.abort(),ye(o,"TestPingServer: timeout",!1,r)},1e4);fetch(t,{signal:c.signal}).then(E=>{clearTimeout(v),E.ok?ye(o,"TestPingServer: ok",!0,r):ye(o,"TestPingServer: server error",!1,r)}).catch(()=>{clearTimeout(v),ye(o,"TestPingServer: error",!1,r)})}function ye(t,r,o,c,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),c(o)}catch{}}function lo(){this.g=new Ws}function uo(t,r,o){const c=o||"";try{Mi(t,function(v,E){let T=v;w(v)&&(T=In(v)),r.push(c+E+"="+encodeURIComponent(T))})}catch(v){throw r.push(c+"type="+encodeURIComponent("_badmap")),v}}function xt(t){this.l=t.Ub||null,this.j=t.eb||!1}R(xt,En),xt.prototype.g=function(){return new Ft(this.l,this.j)},xt.prototype.i=function(t){return function(){return t}}({});function Ft(t,r){V.call(this),this.D=t,this.o=r,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ft,V),i=Ft.prototype,i.open=function(t,r){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=r,this.readyState=1,pt(this)},i.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const r={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(r.body=t),(this.D||m).fetch(new Request(this.A,r)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ft(this)),this.readyState=0},i.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,pt(this)),this.g&&(this.readyState=3,pt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hi(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hi(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}i.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var r=t.value?t.value:new Uint8Array(0);(r=this.v.decode(r,{stream:!t.done}))&&(this.response=this.responseText+=r)}t.done?ft(this):pt(this),this.readyState==3&&Hi(this)}},i.Ra=function(t){this.g&&(this.response=this.responseText=t,ft(this))},i.Qa=function(t){this.g&&(this.response=t,ft(this))},i.ga=function(){this.g&&ft(this)};function ft(t){t.readyState=4,t.l=null,t.j=null,t.v=null,pt(t)}i.setRequestHeader=function(t,r){this.u.append(t,r)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],r=this.h.entries();for(var o=r.next();!o.done;)o=o.value,t.push(o[0]+": "+o[1]),o=r.next();return t.join(`\r
`)};function pt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ft.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function $i(t){let r="";return q(t,function(o,c){r+=c,r+=":",r+=o,r+=`\r
`}),r}function Dn(t,r,o){e:{for(c in o){var c=!1;break e}c=!0}c||(o=$i(o),typeof t=="string"?o!=null&&encodeURIComponent(String(o)):D(t,r,o))}function M(t){V.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(M,V);var fo=/^https?$/i,po=["POST","PUT"];i=M.prototype,i.Ha=function(t){this.J=t},i.ea=function(t,r,o,c){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);r=r?r.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cn.g(),this.v=this.o?Ii(this.o):Ii(Cn),this.g.onreadystatechange=P(this.Ea,this);try{this.B=!0,this.g.open(r,String(t),!0),this.B=!1}catch(E){Wi(this,E);return}if(t=o||"",o=new Map(this.headers),c)if(Object.getPrototypeOf(c)===Object.prototype)for(var v in c)o.set(v,c[v]);else if(typeof c.keys=="function"&&typeof c.get=="function")for(const E of c.keys())o.set(E,c.get(E));else throw Error("Unknown input type for opt_headers: "+String(c));c=Array.from(o.keys()).find(E=>E.toLowerCase()=="content-type"),v=m.FormData&&t instanceof m.FormData,!(0<=Array.prototype.indexOf.call(po,r,void 0))||c||v||o.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[E,T]of o)this.g.setRequestHeader(E,T);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qi(this),this.u=!0,this.g.send(t),this.u=!1}catch(E){Wi(this,E)}};function Wi(t,r){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=r,t.m=5,zi(t),jt(t)}function zi(t){t.A||(t.A=!0,z(t,"complete"),z(t,"error"))}i.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,z(this,"complete"),z(this,"abort"),jt(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jt(this,!0)),M.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Gi(this):this.bb())},i.bb=function(){Gi(this)};function Gi(t){if(t.h&&typeof l<"u"&&(!t.v[1]||ce(t)!=4||t.Z()!=2)){if(t.u&&ce(t)==4)mi(t.Ea,0,t);else if(z(t,"readystatechange"),ce(t)==4){t.h=!1;try{const T=t.Z();e:switch(T){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}var o;if(!(o=r)){var c;if(c=T===0){var v=String(t.D).match(Ui)[1]||null;!v&&m.self&&m.self.location&&(v=m.self.location.protocol.slice(0,-1)),c=!fo.test(v?v.toLowerCase():"")}o=c}if(o)z(t,"complete"),z(t,"success");else{t.m=6;try{var E=2<ce(t)?t.g.statusText:""}catch{E=""}t.l=E+" ["+t.Z()+"]",zi(t)}}finally{jt(t)}}}}function jt(t,r){if(t.g){qi(t);const o=t.g,c=t.v[0]?()=>{}:null;t.g=null,t.v=null,r||z(t,"ready");try{o.onreadystatechange=c}catch{}}}function qi(t){t.I&&(m.clearTimeout(t.I),t.I=null)}i.isActive=function(){return!!this.g};function ce(t){return t.g?t.g.readyState:0}i.Z=function(){try{return 2<ce(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(t){if(this.g){var r=this.g.responseText;return t&&r.indexOf(t)==0&&(r=r.substring(t.length)),$s(r)}};function Ki(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function go(t){const r={};t=(t.g&&2<=ce(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let c=0;c<t.length;c++){if(J(t[c]))continue;var o=g(t[c]);const v=o[0];if(o=o[1],typeof o!="string")continue;o=o.trim();const E=r[v]||[];r[v]=E,E.push(o)}_(r,function(c){return c.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function gt(t,r,o){return o&&o.internalChannelParams&&o.internalChannelParams[t]||r}function Ji(t){this.Aa=0,this.i=[],this.j=new ht,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=gt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=gt("baseRetryDelayMs",5e3,t),this.cb=gt("retryDelaySeedMs",1e4,t),this.Wa=gt("forwardChannelMaxRetries",2,t),this.wa=gt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new ki(t&&t.concurrentRequestLimit),this.Da=new lo,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Ji.prototype,i.la=8,i.G=1,i.connect=function(t,r,o,c){G(0),this.W=t,this.H=r||{},o&&c!==void 0&&(this.H.OSID=o,this.H.OAID=c),this.F=this.X,this.I=rr(this,null,this.W),Vt(this)};function Ln(t){if(Xi(t),t.G==3){var r=t.U++,o=he(t.I);if(D(o,"SID",t.K),D(o,"RID",r),D(o,"TYPE","terminate"),mt(t,o),r=new ve(t,t.j,r),r.L=2,r.v=Ut(he(o)),o=!1,m.navigator&&m.navigator.sendBeacon)try{o=m.navigator.sendBeacon(r.v.toString(),"")}catch{}!o&&m.Image&&(new Image().src=r.v,o=!0),o||(r.g=sr(r.j,null),r.g.ea(r.v)),r.F=Date.now(),Dt(r)}ir(t)}function Bt(t){t.g&&(Un(t),t.g.cancel(),t.g=null)}function Xi(t){Bt(t),t.u&&(m.clearTimeout(t.u),t.u=null),Ht(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&m.clearTimeout(t.s),t.s=null)}function Vt(t){if(!Oi(t.h)&&!t.s){t.s=!0;var r=t.Ga;et||li(),tt||(et(),tt=!0),un.add(r,t),t.B=0}}function mo(t,r){return Ni(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=r.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=at(P(t.Ga,t,r),nr(t,t.B)),t.B++,!0)}i.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const v=new ve(this,this.j,t);let E=this.o;if(this.S&&(E?(E=u(E),p(E,this.S)):E=this.S),this.m!==null||this.O||(v.H=E,E=null),this.P)e:{for(var r=0,o=0;o<this.i.length;o++){t:{var c=this.i[o];if("__data__"in c.map&&(c=c.map.__data__,typeof c=="string")){c=c.length;break t}c=void 0}if(c===void 0)break;if(r+=c,4096<r){r=o;break e}if(r===4096||o===this.i.length-1){r=o+1;break e}}r=1e3}else r=1e3;r=Qi(this,v,r),o=he(this.I),D(o,"RID",t),D(o,"CVER",22),this.D&&D(o,"X-HTTP-Session-Id",this.D),mt(this,o),E&&(this.O?r="headers="+encodeURIComponent(String($i(E)))+"&"+r:this.m&&Dn(o,this.m,E)),Nn(this.h,v),this.Ua&&D(o,"TYPE","init"),this.P?(D(o,"$req",r),D(o,"SID","null"),v.T=!0,Rn(v,o,null)):Rn(v,o,r),this.G=2}}else this.G==3&&(t?Yi(this,t):this.i.length==0||Oi(this.h)||Yi(this))};function Yi(t,r){var o;r?o=r.l:o=t.U++;const c=he(t.I);D(c,"SID",t.K),D(c,"RID",o),D(c,"AID",t.T),mt(t,c),t.m&&t.o&&Dn(c,t.m,t.o),o=new ve(t,t.j,o,t.B+1),t.m===null&&(o.H=t.o),r&&(t.i=r.D.concat(t.i)),r=Qi(t,o,1e3),o.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Nn(t.h,o),Rn(o,c,r)}function mt(t,r){t.H&&q(t.H,function(o,c){D(r,c,o)}),t.l&&Mi({},function(o,c){D(r,c,o)})}function Qi(t,r,o){o=Math.min(t.i.length,o);var c=t.l?P(t.l.Na,t.l,t):null;e:{var v=t.i;let E=-1;for(;;){const T=["count="+o];E==-1?0<o?(E=v[0].g,T.push("ofs="+E)):E=0:T.push("ofs="+E);let N=!0;for(let F=0;F<o;F++){let k=v[F].g;const H=v[F].map;if(k-=E,0>k)E=Math.max(0,v[F].g-100),N=!1;else try{uo(H,T,"req"+k+"_")}catch{c&&c(H)}}if(N){c=T.join("&");break e}}}return t=t.i.splice(0,o),r.D=t,c}function Zi(t){if(!t.g&&!t.u){t.Y=1;var r=t.Fa;et||li(),tt||(et(),tt=!0),un.add(r,t),t.v=0}}function Mn(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=at(P(t.Fa,t),nr(t,t.v)),t.v++,!0)}i.Fa=function(){if(this.u=null,er(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=at(P(this.ab,this),t)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,G(10),Bt(this),er(this))};function Un(t){t.A!=null&&(m.clearTimeout(t.A),t.A=null)}function er(t){t.g=new ve(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var r=he(t.qa);D(r,"RID","rpc"),D(r,"SID",t.K),D(r,"AID",t.T),D(r,"CI",t.F?"0":"1"),!t.F&&t.ja&&D(r,"TO",t.ja),D(r,"TYPE","xmlhttp"),mt(t,r),t.m&&t.o&&Dn(r,t.m,t.o),t.L&&(t.g.I=t.L);var o=t.g;t=t.ia,o.L=1,o.v=Ut(he(r)),o.m=null,o.P=!0,bi(o,t)}i.Za=function(){this.C!=null&&(this.C=null,Bt(this),Mn(this),G(19))};function Ht(t){t.C!=null&&(m.clearTimeout(t.C),t.C=null)}function tr(t,r){var o=null;if(t.g==r){Ht(t),Un(t),t.g=null;var c=2}else if(On(t.h,r))o=r.D,Di(t.h,r),c=1;else return;if(t.G!=0){if(r.o)if(c==1){o=r.m?r.m.length:0,r=Date.now()-r.F;var v=t.B;c=An(),z(c,new Ai(c,o)),Vt(t)}else Zi(t);else if(v=r.s,v==3||v==0&&0<r.X||!(c==1&&mo(t,r)||c==2&&Mn(t)))switch(o&&0<o.length&&(r=t.h,r.i=r.i.concat(o)),v){case 1:Ne(t,5);break;case 4:Ne(t,10);break;case 3:Ne(t,6);break;default:Ne(t,2)}}}function nr(t,r){let o=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(o*=2),o*r}function Ne(t,r){if(t.j.info("Error code "+r),r==2){var o=P(t.fb,t),c=t.Xa;const v=!c;c=new Oe(c||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Lt(c,"https"),Ut(c),v?ho(c.toString(),o):co(c.toString(),o)}else G(2);t.G=0,t.l&&t.l.sa(r),ir(t),Xi(t)}i.fb=function(t){t?(this.j.info("Successfully pinged google.com"),G(2)):(this.j.info("Failed to ping google.com"),G(1))};function ir(t){if(t.G=0,t.ka=[],t.l){const r=Li(t.h);(r.length!=0||t.i.length!=0)&&(L(t.ka,r),L(t.ka,t.i),t.h.i.length=0,U(t.i),t.i.length=0),t.l.ra()}}function rr(t,r,o){var c=o instanceof Oe?he(o):new Oe(o);if(c.g!="")r&&(c.g=r+"."+c.g),Mt(c,c.s);else{var v=m.location;c=v.protocol,r=r?r+"."+v.hostname:v.hostname,v=+v.port;var E=new Oe(null);c&&Lt(E,c),r&&(E.g=r),v&&Mt(E,v),o&&(E.l=o),c=E}return o=t.D,r=t.ya,o&&r&&D(c,o,r),D(c,"VER",t.la),mt(t,c),c}function sr(t,r,o){if(r&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return r=t.Ca&&!t.pa?new M(new xt({eb:o})):new M(t.pa),r.Ha(t.J),r}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function or(){}i=or.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Z(t,r){V.call(this),this.g=new Ji(r),this.l=t,this.h=r&&r.messageUrlParams||null,t=r&&r.messageHeaders||null,r&&r.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=r&&r.initMessageHeaders||null,r&&r.messageContentType&&(t?t["X-WebChannel-Content-Type"]=r.messageContentType:t={"X-WebChannel-Content-Type":r.messageContentType}),r&&r.va&&(t?t["X-WebChannel-Client-Profile"]=r.va:t={"X-WebChannel-Client-Profile":r.va}),this.g.S=t,(t=r&&r.Sb)&&!J(t)&&(this.g.m=t),this.v=r&&r.supportsCrossDomainXhr||!1,this.u=r&&r.sendRawJson||!1,(r=r&&r.httpSessionIdParam)&&!J(r)&&(this.g.D=r,t=this.h,t!==null&&r in t&&(t=this.h,r in t&&delete t[r])),this.j=new $e(this)}R(Z,V),Z.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Z.prototype.close=function(){Ln(this.g)},Z.prototype.o=function(t){var r=this.g;if(typeof t=="string"){var o={};o.__data__=t,t=o}else this.u&&(o={},o.__data__=In(t),t=o);r.i.push(new Qs(r.Ya++,t)),r.G==3&&Vt(r)},Z.prototype.N=function(){this.g.l=null,delete this.j,Ln(this.g),delete this.g,Z.aa.N.call(this)};function ar(t){wn.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var r=t.__sm__;if(r){e:{for(const o in r){t=o;break e}t=void 0}(this.i=t)&&(t=this.i,r=r!==null&&t in r?r[t]:void 0),this.data=r}else this.data=t}R(ar,wn);function hr(){Tn.call(this),this.status=1}R(hr,Tn);function $e(t){this.g=t}R($e,or),$e.prototype.ua=function(){z(this.g,"a")},$e.prototype.ta=function(t){z(this.g,new ar(t))},$e.prototype.sa=function(t){z(this.g,new hr)},$e.prototype.ra=function(){z(this.g,"b")},Z.prototype.send=Z.prototype.o,Z.prototype.open=Z.prototype.m,Z.prototype.close=Z.prototype.close,Sn.NO_ERROR=0,Sn.TIMEOUT=8,Sn.HTTP_ERROR=6,Xs.COMPLETE="complete",zs.EventType=st,st.OPEN="a",st.CLOSE="b",st.ERROR="c",st.MESSAGE="d",V.prototype.listen=V.prototype.K,M.prototype.listenOnce=M.prototype.L,M.prototype.getLastError=M.prototype.Ka,M.prototype.getLastErrorCode=M.prototype.Ba,M.prototype.getStatus=M.prototype.Z,M.prototype.getResponseJson=M.prototype.Oa,M.prototype.getResponseText=M.prototype.oa,M.prototype.send=M.prototype.ea,M.prototype.setWithCredentials=M.prototype.Ha}).apply(typeof zt<"u"?zt:typeof self<"u"?self:typeof window<"u"?window:{});const Mr="@firebase/firestore";/**
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
 */class K{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}K.UNAUTHENTICATED=new K(null),K.GOOGLE_CREDENTIALS=new K("google-credentials-uid"),K.FIRST_PARTY=new K("first-party-uid"),K.MOCK_USER=new K("mock-user");/**
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
 */let ln="10.12.1";/**
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
 */const rn=new Zn("@firebase/firestore");function Q(i,...e){if(rn.logLevel<=O.DEBUG){const n=e.map(ks);rn.debug(`Firestore (${ln}): ${i}`,...n)}}function hi(i,...e){if(rn.logLevel<=O.ERROR){const n=e.map(ks);rn.error(`Firestore (${ln}): ${i}`,...n)}}function ks(i){if(typeof i=="string")return i;try{/**
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
*/return function(n){return JSON.stringify(n)}(i)}catch{return i}}/**
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
 */function Os(i="Unexpected state"){const e=`FIRESTORE (${ln}) INTERNAL ASSERTION FAILED: `+i;throw hi(e),new Error(e)}function Xn(i,e){i||Os()}/**
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
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends ge{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Je{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class qc{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Kc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(K.UNAUTHENTICATED))}shutdown(){}}class Jc{constructor(e){this.t=e,this.currentUser=K.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const a=I=>this.i!==s?(s=this.i,n(I)):Promise.resolve();let h=new Je;this.o=()=>{this.i++,this.currentUser=this.u(),h.resolve(),h=new Je,e.enqueueRetryable(()=>a(this.currentUser))};const l=()=>{const I=h;e.enqueueRetryable(async()=>{await I.promise,await a(this.currentUser)})},m=I=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=I,this.auth.addAuthTokenListener(this.o),l()};this.t.onInit(I=>m(I)),setTimeout(()=>{if(!this.auth){const I=this.t.getImmediate({optional:!0});I?m(I):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),h.resolve(),h=new Je)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Xn(typeof s.accessToken=="string"),new qc(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Xn(e===null||typeof e=="string"),new K(e)}}class Xc{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=K.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Yc{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new Xc(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(K.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Qc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zc{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=h=>{h.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${h.error.message}`);const l=h.token!==this.R;return this.R=h.token,Q("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(h.token):Promise.resolve()};this.o=h=>{e.enqueueRetryable(()=>s(h))};const a=h=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=h,this.appCheck.addTokenListener(this.o)};this.A.onInit(h=>a(h)),setTimeout(()=>{if(!this.appCheck){const h=this.A.getImmediate({optional:!0});h?a(h):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Xn(typeof n.token=="string"),this.R=n.token,new Qc(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function el(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<i;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class tl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const a=el(40);for(let h=0;h<a.length;++h)s.length<20&&a[h]<n&&(s+=e.charAt(a[h]%e.length))}return s}}function Ns(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class nl{constructor(e,n,s,a,h,l,m,I,w){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=a,this.ssl=h,this.forceLongPolling=l,this.autoDetectLongPolling=m,this.longPollingOptions=I,this.useFetchStreams=w}}class sn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new sn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof sn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var Ur,b;(b=Ur||(Ur={}))[b.OK=0]="OK",b[b.CANCELLED=1]="CANCELLED",b[b.UNKNOWN=2]="UNKNOWN",b[b.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",b[b.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",b[b.NOT_FOUND=5]="NOT_FOUND",b[b.ALREADY_EXISTS=6]="ALREADY_EXISTS",b[b.PERMISSION_DENIED=7]="PERMISSION_DENIED",b[b.UNAUTHENTICATED=16]="UNAUTHENTICATED",b[b.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",b[b.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",b[b.ABORTED=10]="ABORTED",b[b.OUT_OF_RANGE=11]="OUT_OF_RANGE",b[b.UNIMPLEMENTED=12]="UNIMPLEMENTED",b[b.INTERNAL=13]="INTERNAL",b[b.UNAVAILABLE=14]="UNAVAILABLE",b[b.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Ps([4294967295,4294967295],0);function Hn(){return typeof document<"u"?document:null}/**
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
 */class il{constructor(e,n,s=1e3,a=1.5,h=6e4){this.oi=e,this.timerId=n,this.No=s,this.Lo=a,this.Bo=h,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),s=Math.max(0,Date.now()-this.Qo),a=Math.max(0,n-s);a>0&&Q("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,a,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class ci{constructor(e,n,s,a,h){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=a,this.removalCallback=h,this.deferred=new Je,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,a,h){const l=Date.now()+s,m=new ci(e,n,l,a,h);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rl(i,e){if(hi("AsyncQueue",`${e}: ${i}`),Ns(i))return new Y(X.UNAVAILABLE,`${e}: ${i}`);throw i}var xr,Fr;(Fr=xr||(xr={})).J_="default",Fr.Cache="cache";/**
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
 */class sl{constructor(e,n,s,a){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=a,this.user=K.UNAUTHENTICATED,this.clientId=tl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async h=>{Q("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(Q("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Y(X.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Je;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=rl(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}/**
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
 */function Ds(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const jr=new Map;function ol(i,e,n,s){if(e===!0&&s===!0)throw new Y(X.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}/**
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
 */class Br{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ol("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ds((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(h){if(h.timeoutSeconds!==void 0){if(isNaN(h.timeoutSeconds))throw new Y(X.INVALID_ARGUMENT,`invalid long polling timeout: ${h.timeoutSeconds} (must not be NaN)`);if(h.timeoutSeconds<5)throw new Y(X.INVALID_ARGUMENT,`invalid long polling timeout: ${h.timeoutSeconds} (minimum allowed value is 5)`);if(h.timeoutSeconds>30)throw new Y(X.INVALID_ARGUMENT,`invalid long polling timeout: ${h.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class al{constructor(e,n,s,a){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Br({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Y(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Y(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Br(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Kc;switch(s.type){case"firstParty":return new Yc(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new Y(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=jr.get(n);s&&(Q("ComponentProvider","Removing Datastore"),jr.delete(n),s.terminate())}(this),Promise.resolve()}}/**
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
 */class hl{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new il(this,"async_queue_retry"),this.hu=()=>{const n=Hn();n&&Q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Hn();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Hn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Je;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Ns(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(s=>{this.au=s,this.uu=!1;const a=function(l){let m=l.message||"";return l.stack&&(m=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),m}(s);throw hi("INTERNAL UNHANDLED ERROR: ",a),s}).then(s=>(this.uu=!1,s))));return this.iu=n,n}enqueueAfterDelay(e,n,s){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const a=ci.createAndSchedule(this,e,n,s,h=>this.Eu(h));return this._u.push(a),a}Pu(){this.au&&Os()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class cl extends al{constructor(e,n,s,a){super(e,n,s,a),this.type="firestore",this._queue=function(){return new hl}(),this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ll(this),this._firestoreClient.terminate()}}function ll(i){var e,n,s;const a=i._freezeSettings(),h=function(m,I,w,S){return new nl(m,I,w,S.host,S.ssl,S.experimentalForceLongPolling,S.experimentalAutoDetectLongPolling,Ds(S.experimentalLongPollingOptions),S.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._firestoreClient=new sl(i._authCredentials,i._appCheckCredentials,i._queue,h),((n=a.localCache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((s=a.localCache)===null||s===void 0?void 0:s._onlineComponentProvider)&&(i._firestoreClient._uninitializedComponentsProvider={_offlineKind:a.localCache.kind,_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider})}(function(e,n=!0){(function(a){ln=a})(Ye),Xe(new Me("firestore",(s,{instanceIdentifier:a,options:h})=>{const l=s.getProvider("app").getImmediate(),m=new cl(new Jc(s.getProvider("auth-internal")),new Zc(s.getProvider("app-check-internal")),function(w,S){if(!Object.prototype.hasOwnProperty.apply(w.options,["projectId"]))throw new Y(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sn(w.options.projectId,S)}(l,a),l);return h=Object.assign({useFetchStreams:n},h),m._setSettings(h),m},"PUBLIC").setMultipleInstances(!0)),Le(Mr,"4.6.3",e),Le(Mr,"4.6.3","esm2017")})();export{fl as c,ml as g,Ca as i,gl as o,Le as r,pl as s};
