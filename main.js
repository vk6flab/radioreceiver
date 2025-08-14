"use strict";(()=>{var Ct=globalThis,Dt=Ct.ShadowRoot&&(Ct.ShadyCSS===void 0||Ct.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ui=Symbol(),$s=new WeakMap,rt=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ui)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Dt&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=$s.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&$s.set(t,e))}return e}toString(){return this.cssText}},Ms=r=>new rt(typeof r=="string"?r:r+"",void 0,ui),v=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new rt(t,r,ui)},pi=(r,e)=>{if(Dt)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),s=Ct.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},_t=Dt?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return Ms(t)})(r):r;var{is:Kr,defineProperty:Jr,getOwnPropertyDescriptor:en,getOwnPropertyNames:tn,getOwnPropertySymbols:sn,getPrototypeOf:rn}=Object,qt=globalThis,Cs=qt.trustedTypes,nn=Cs?Cs.emptyScript:"",on=qt.reactiveElementPolyfillSupport,nt=(r,e)=>r,ot={toAttribute(r,e){switch(e){case Boolean:r=r?nn:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Ft=(r,e)=>!Kr(r,e),Ds={attribute:!0,type:String,converter:ot,reflect:!1,hasChanged:Ft};Symbol.metadata??=Symbol("metadata"),qt.litPropertyMetadata??=new WeakMap;var pe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ds){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Jr(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){let{get:s,set:n}=en(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return s?.call(this)},set(o){let a=s?.call(this);n.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ds}static _$Ei(){if(this.hasOwnProperty(nt("elementProperties")))return;let e=rn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(nt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(nt("properties"))){let t=this.properties,i=[...tn(t),...sn(t)];for(let s of i)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let s of i)t.unshift(_t(s))}else e!==void 0&&t.push(_t(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pi(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){let i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){let n=(i.converter?.toAttribute!==void 0?i.converter:ot).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){let i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let n=i.getPropertyOptions(s),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:ot;this._$Em=s,this[s]=o.fromAttribute(t,n.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??Ft)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,n]of i)n.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],n)}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(e){}firstUpdated(e){}};pe.elementStyles=[],pe.shadowRootOptions={mode:"open"},pe[nt("elementProperties")]=new Map,pe[nt("finalized")]=new Map,on?.({ReactiveElement:pe}),(qt.reactiveElementVersions??=[]).push("2.0.4");var vi=globalThis,Et=vi.trustedTypes,_s=Et?Et.createPolicy("lit-html",{createHTML:r=>r}):void 0,Bs="$lit$",Se=`lit$${Math.random().toFixed(9).slice(2)}$`,zs="?"+Se,an=`<${zs}>`,Ee=document,ht=()=>Ee.createComment(""),lt=r=>r===null||typeof r!="object"&&typeof r!="function",xi=Array.isArray,hn=r=>xi(r)||typeof r?.[Symbol.iterator]=="function",fi=`[ 	
\f\r]`,at=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qs=/-->/g,Fs=/>/g,qe=RegExp(`>|${fi}(?:([^\\s"'>=/]+)(${fi}*=${fi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Es=/'/g,Ps=/"/g,Ts=/^(?:script|style|textarea|title)$/i,Si=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),p=Si(1),k=Si(2),An=Si(3),Pe=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),As=new WeakMap,Fe=Ee.createTreeWalker(Ee,129);function ks(r,e){if(!xi(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return _s!==void 0?_s.createHTML(e):e}var ln=(r,e)=>{let t=r.length-1,i=[],s,n=e===2?"<svg>":e===3?"<math>":"",o=at;for(let a=0;a<t;a++){let h=r[a],c,d,u=-1,b=0;for(;b<h.length&&(o.lastIndex=b,d=o.exec(h),d!==null);)b=o.lastIndex,o===at?d[1]==="!--"?o=qs:d[1]!==void 0?o=Fs:d[2]!==void 0?(Ts.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=qe):d[3]!==void 0&&(o=qe):o===qe?d[0]===">"?(o=s??at,u=-1):d[1]===void 0?u=-2:(u=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?qe:d[3]==='"'?Ps:Es):o===Ps||o===Es?o=qe:o===qs||o===Fs?o=at:(o=qe,s=void 0);let f=o===qe&&r[a+1].startsWith("/>")?" ":"";n+=o===at?h+an:u>=0?(i.push(c),h.slice(0,u)+Bs+h.slice(u)+Se+f):h+Se+(u===-2?a:f)}return[ks(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},ct=class r{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,o=0,a=e.length-1,h=this.parts,[c,d]=ln(e,t);if(this.el=r.createElement(c,i),Fe.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=Fe.nextNode())!==null&&h.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(let u of s.getAttributeNames())if(u.endsWith(Bs)){let b=d[o++],f=s.getAttribute(u).split(Se),E=/([.?@])?(.*)/.exec(b);h.push({type:1,index:n,name:E[2],strings:f,ctor:E[1]==="."?gi:E[1]==="?"?bi:E[1]==="@"?wi:We}),s.removeAttribute(u)}else u.startsWith(Se)&&(h.push({type:6,index:n}),s.removeAttribute(u));if(Ts.test(s.tagName)){let u=s.textContent.split(Se),b=u.length-1;if(b>0){s.textContent=Et?Et.emptyScript:"";for(let f=0;f<b;f++)s.append(u[f],ht()),Fe.nextNode(),h.push({type:2,index:++n});s.append(u[b],ht())}}}else if(s.nodeType===8)if(s.data===zs)h.push({type:2,index:n});else{let u=-1;for(;(u=s.data.indexOf(Se,u+1))!==-1;)h.push({type:7,index:n}),u+=Se.length-1}n++}}static createElement(e,t){let i=Ee.createElement("template");return i.innerHTML=e,i}};function Ue(r,e,t=r,i){if(e===Pe)return e;let s=i!==void 0?t._$Co?.[i]:t._$Cl,n=lt(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??=[])[i]=s:t._$Cl=s),s!==void 0&&(e=Ue(r,s._$AS(r,e.values),s,i)),e}var mi=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??Ee).importNode(t,!0);Fe.currentNode=s;let n=Fe.nextNode(),o=0,a=0,h=i[0];for(;h!==void 0;){if(o===h.index){let c;h.type===2?c=new dt(n,n.nextSibling,this,e):h.type===1?c=new h.ctor(n,h.name,h.strings,this,e):h.type===6&&(c=new yi(n,this,e)),this._$AV.push(c),h=i[++a]}o!==h?.index&&(n=Fe.nextNode(),o++)}return Fe.currentNode=Ee,s}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},dt=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ue(this,e,t),lt(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==Pe&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):hn(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&lt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ee.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ct.createElement(ks(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{let n=new mi(s,this),o=n.u(this.options);n.p(t),this.T(o),this._$AH=n}}_$AC(e){let t=As.get(e.strings);return t===void 0&&As.set(e.strings,t=new ct(e)),t}k(e){xi(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,s=0;for(let n of e)s===t.length?t.push(i=new r(this.O(ht()),this.O(ht()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},We=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=m}_$AI(e,t=this,i,s){let n=this.strings,o=!1;if(n===void 0)e=Ue(this,e,t,0),o=!lt(e)||e!==this._$AH&&e!==Pe,o&&(this._$AH=e);else{let a=e,h,c;for(e=n[0],h=0;h<n.length-1;h++)c=Ue(this,a[i+h],t,h),c===Pe&&(c=this._$AH[h]),o||=!lt(c)||c!==this._$AH[h],c===m?e=m:e!==m&&(e+=(c??"")+n[h+1]),this._$AH[h]=c}o&&!s&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},gi=class extends We{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}},bi=class extends We{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}},wi=class extends We{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=Ue(this,e,t,0)??m)===Pe)return;let i=this._$AH,s=e===m&&i!==m||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==m&&(i===m||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},yi=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Ue(this,e)}};var cn=vi.litHtmlPolyfillSupport;cn?.(ct,dt),(vi.litHtmlVersions??=[]).push("3.2.1");var Is=(r,e,t)=>{let i=t?.renderBefore??e,s=i._$litPart$;if(s===void 0){let n=t?.renderBefore??null;i._$litPart$=s=new dt(e.insertBefore(ht(),n),n,void 0,t??{})}return s._$AI(r),s};var g=class extends pe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Is(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Pe}};g._$litElement$=!0,g.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:g});var dn=globalThis.litElementPolyfillSupport;dn?.({LitElement:g});(globalThis.litElementVersions??=[]).push("4.1.1");var x=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};var un={attribute:!0,type:String,converter:ot,reflect:!1,hasChanged:Ft},pn=(r=un,e,t)=>{let{kind:i,metadata:s}=t,n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(t.name,r),i==="accessor"){let{name:o}=t;return{set(a){let h=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,h,r)},init(a){return a!==void 0&&this.P(o,void 0,r),a}}}if(i==="setter"){let{name:o}=t;return function(a){let h=this[o];e.call(this,a),this.requestUpdate(o,h,r)}}throw Error("Unsupported decorator location: "+i)};function l(r){return(e,t)=>typeof t=="object"?pn(r,e,t):((i,s,n)=>{let o=s.hasOwnProperty(n);return s.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(s,n):void 0})(r,e,t)}function y(r){return l({...r,state:!0,attribute:!1})}var Ae=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);function w(r,e){return(t,i,s)=>{let n=o=>o.renderRoot?.querySelector(r)??null;if(e){let{get:o,set:a}=typeof i=="object"?t:s??(()=>{let h=Symbol();return{get(){return this[h]},set(c){this[h]=c}}})();return Ae(t,i,{get(){let h=o.call(this);return h===void 0&&(h=n(this),(h!==null||this.hasUpdated)&&a.call(this,h)),h}})}return Ae(t,i,{get(){return n(this)}})}}function Be(r,e,t){Ri.set(r,{demod:e,config:t})}function je(){return[...Ri.keys()]}function Pt(r){let e=$i(r);return new e.config(r).mode}function Ls(r,e,t){let i=$i(t);return new i.demod(r,e,t)}function _(r){let e=$i(r);return new e.config(r)}var se=class{base;constructor(e){this.base=e}get mode(){return typeof this.base=="string"&&(this.base=this.create(this.base)),this.base}set mode(e){this.base=e}hasStereo(){return!1}getStereo(){return!1}setStereo(e){return this}hasBandwidth(){return!1}setBandwidth(e){return this}hasSquelch(){return!1}getSquelch(){return 0}setSquelch(e){return this}},Ri=new Map;function $i(r){let e=typeof r=="string"?r:r.scheme,t=Ri.get(e);if(!t)throw`Scheme "${e}" was not registered.`;return t}var At=class r{static OUT_RATE=48e3;static TIME_BUFFER=.05;constructor(){this.lastPlayedAt=-1,this.ac=void 0,this.gainNode=void 0,this.gain=0}lastPlayedAt;ac;gainNode;gain;play(e,t){(this.ac===void 0||this.gainNode===void 0)&&(this.ac=new AudioContext,this.gainNode=this.ac.createGain(),this.gainNode.gain.value=this.gain,this.gainNode.connect(this.ac.destination));let i=this.ac.createBuffer(2,e.length,r.OUT_RATE);i.getChannelData(0).set(e),i.getChannelData(1).set(t);let s=this.ac.createBufferSource();s.buffer=i,s.connect(this.gainNode),this.lastPlayedAt=Math.max(this.lastPlayedAt+e.length/r.OUT_RATE,this.ac.currentTime+r.TIME_BUFFER),s.start(this.lastPlayedAt)}setVolume(e){this.gain=e,this.gainNode!==void 0&&(this.gainNode.gain.value=e)}getVolume(){return this.gain}get sampleRate(){return this.ac?this.ac.sampleRate:48e3}};var Bt=class extends EventTarget{constructor(e){super(),this.inRate=1024e3,this.player=e||new At,this.squelchControl=new Ci(this.player.sampleRate),this.mode=Pt("WBFM"),this.demod=this.getScheme(this.mode),this.frequencyOffset=0,this.latestStereo=!1}inRate;player;squelchControl;mode;demod;frequencyOffset;latestStereo;expectingFrequency;setMode(e){this.demod=this.getScheme(e,this.demod),this.mode=e}getMode(){return this.mode}setFrequencyOffset(e){this.frequencyOffset=e}getFrequencyOffset(){return this.frequencyOffset}expectFrequencyAndSetOffset(e,t){this.expectingFrequency={center:e,offset:t}}setVolume(e){this.player.setVolume(e)}getVolume(){return this.player.getVolume()}getScheme(e,t){return e.scheme==t?.getMode().scheme?(t.setMode(e),t):Ls(this.inRate,this.player.sampleRate,e)}setSampleRate(e){this.inRate=e,this.demod=this.getScheme(this.mode,void 0)}receiveSamples(e,t,i){this.expectingFrequency?.center===i&&(this.frequencyOffset=this.expectingFrequency.offset,this.expectingFrequency=void 0);let{left:s,right:n,stereo:o,snr:a}=this.demod.demodulate(e,t,this.frequencyOffset);this.squelchControl.applySquelch(this.mode,s,n,a),this.player.play(s,n),o!=this.latestStereo&&(this.dispatchEvent(new Mi(o)),this.latestStereo=o)}addEventListener(e,t,i){super.addEventListener(e,t,i)}},Mi=class extends CustomEvent{constructor(e){super("stereo-status",{detail:e,bubbles:!0,composed:!0})}},Ci=class{sampleRate;constructor(e){this.sampleRate=e}countdown=0;applySquelch(e,t,i,s){let o=_(e);if(o.hasSquelch()){if(o.getSquelch()<s){this.countdown=.1*this.sampleRate;return}if(this.countdown>0){this.countdown-=t.length;return}t.fill(0),i.fill(0)}}};function U(r,e,t){t+=(t+1)%2;let i=e/r,s=new Float32Array(t),n=Math.floor(t/2),o=0;for(let a=0;a<t;++a){let h;a==n?h=2*Math.PI*i:(h=Math.sin(2*Math.PI*i*(a-n))/(a-n),h*=.54-.46*Math.cos(2*Math.PI*a/(t-1))),o+=h,s[a]=h}for(let a=0;a<t;++a)s[a]/=o;return s}function Ns(r){r+=(r+1)%2;let e=Math.floor(r/2),t=new Float32Array(r);for(let i=0;i<t.length;++i)i%2==0&&(t[i]=2/(Math.PI*(e-i)));return t}function Di(r){let e=new Float32Array(r);for(let t=0;t<r;++t)e[t]=.42-.5*Math.cos(2*Math.PI*t/(r-1))+.08*Math.cos(4*Math.PI*t/(r-1));return e}var P=class r{coefs;constructor(e){this.coefs=e,this.offset=this.coefs.length-1,this.center=Math.floor(this.coefs.length/2),this.curSamples=new Float32Array(this.offset)}offset;center;curSamples;setCoefficients(e){let t=this.curSamples;this.coefs=e,this.offset=this.coefs.length-1,this.center=Math.floor(this.coefs.length/2),this.curSamples=new Float32Array(this.offset),this.loadSamples(t)}clone(){return new r(this.coefs)}delay(){return this.center}inPlace(e){this.loadSamples(e);for(let t=0;t<e.length;++t)e[t]=this.get(t)}loadSamples(e){let t=e.length+this.offset;if(this.curSamples.length!=t){let i=new Float32Array(t);i.set(this.curSamples.subarray(this.curSamples.length-this.offset)),this.curSamples=i}else this.curSamples.copyWithin(0,e.length);this.curSamples.set(e,this.offset)}get(e){let t=0,i=0,s=this.coefs.length,n=4*Math.floor(s/4);for(;t<n;)i+=this.coefs[t++]*this.curSamples[e++]+this.coefs[t++]*this.curSamples[e++]+this.coefs[t++]*this.curSamples[e++]+this.coefs[t++]*this.curSamples[e++];let o=2*Math.floor(s/2);for(;t<o;)i+=this.coefs[t++]*this.curSamples[e++]+this.coefs[t++]*this.curSamples[e++];for(;t<s;)i+=this.coefs[t++]*this.curSamples[e++];return i}getDelayed(e){return this.curSamples[e+this.center]}},He=class r{sampleRate;constructor(e,t,i){this.sampleRate=e,this.dcBlocker=new _i(e),this.alpha=1-Math.exp(-1/(e*t)),this.counter=0,this.maxPower=0,this.maxGain=i||100}dcBlocker;alpha;counter;maxPower;maxGain;clone(){let e=new r(this.sampleRate,1,this.maxGain);return e.alpha=this.alpha,e}delay(){return 0}inPlace(e){let t=this.alpha,i=this.maxPower,s=this.counter,n;this.dcBlocker.inPlace(e);for(let o=0;o<e.length;++o){let a=e[o],h=a*a;h>.9*i?(s=this.sampleRate,h>i&&(i=h)):s>0?--s:i-=t*i,n=Math.min(this.maxGain,1/Math.sqrt(i)),e[o]*=n}this.maxPower=i,this.counter=s}},_i=class r{restricted;constructor(e,t){this.restricted=t,this.alpha=1-Math.exp(-1/(e/2)),this.dc=0,this.restricted=this.restricted||!1}alpha;dc;clone(){let e=new r(1e3);return e.alpha=this.alpha,e.dc=this.dc,e}delay(){return 0}inPlace(e){let t=this.alpha,i=this.dc;for(let s=0;s<e.length;++s)i+=t*(e[s]-i),(!this.restricted||i*i<6e-5)&&(e[s]-=i);this.dc=i}},ut=class r{constructor(e,t){this.alpha=1-Math.exp(-1/(e*t/1e6)),this.val=0}alpha;val;clone(){let e=new r(1,1);return e.alpha=this.alpha,e.val=this.val,e}delay(){return 0}inPlace(e){let t=this.alpha,i=this.val;for(let s=0;s<e.length;++s)i+=t*(e[s]-i),e[s]=i;this.val=i}},J=class{sampleRate;constructor(e){this.sampleRate=e,this.cosine=1,this.sine=0}cosine;sine;inPlace(e,t,i){let s=this.cosine,n=this.sine,o=Math.cos(2*Math.PI*i/this.sampleRate),a=Math.sin(2*Math.PI*i/this.sampleRate);for(let h=0;h<e.length;++h){let c=e[h]*s-t[h]*n;t[h]=e[h]*n+t[h]*s,e[h]=c;let d=s*a+n*o;s=s*o-n*a,n=d}this.cosine=s,this.sine=n}};var qi=class{make;constructor(e,t,i){this.make=e,this.buffers=[...Array(t).keys()].map(()=>e(i||0)),this.current=0}buffers;current;get(e){let t=this.buffers[this.current];return t.length!=e&&(t=this.make(e),this.buffers[this.current]=t),this.current=(this.current+1)%this.buffers.length,t}};var fe=class extends qi{constructor(e,t){super(i=>new Float32Array(i),e,t)}},ze=class{constructor(e,t){this.buffers=new fe(e*2,t)}buffers;get(e){return[this.buffers.get(e),this.buffers.get(e)]}},Fi=class{buffer;constructor(e){this.buffer=e,this.position=0}position;store(e){let t=Math.min(e.length,e.length,this.buffer.length),{dstOffset:i}=this.doCopy(t,e,0,this.buffer,this.position);this.position=i}copyTo(e){let t=Math.min(e.length,this.buffer.length,e.length),i=(this.position+this.buffer.length-t)%this.buffer.length;this.doCopy(t,this.buffer,i,e,0)}doCopy(e,t,i,s,n){for(;e>0;){let o=Math.min(e,t.length-i,s.length-n);s.set(t.subarray(i,i+o),n),i=(i+o)%t.length,n=(n+o)%s.length,e-=o}return{srcOffset:i,dstOffset:n}}},pt=class extends Fi{constructor(e){super(new Float32Array(e))}};var Ve;(function(r){r[r.Upper=0]="Upper",r[r.Lower=1]="Lower"})(Ve||(Ve={}));var zt=class{constructor(e){let i=Ns(151);this.filterDelay=new P(i),this.filterHilbert=new P(i),this.hilbertMul=e==Ve.Upper?-1:1}filterDelay;filterHilbert;hilbertMul;demodulate(e,t,i){this.filterDelay.loadSamples(e),this.filterHilbert.loadSamples(t);for(let s=0;s<i.length;++s)i[s]=this.filterDelay.getDelayed(s)+this.filterHilbert.get(s)*this.hilbertMul}},Tt=class{constructor(e){this.alpha=1-Math.exp(-1/(e/2)),this.carrierAmplitude=0}alpha;carrierAmplitude;demodulate(e,t,i){let s=this.alpha,n=this.carrierAmplitude;for(let o=0;o<i.length;++o){let a=e[o],h=t[o],c=a*a+h*h,d=Math.sqrt(c);n+=s*(d-n),i[o]=n==0?0:d/n-1}this.carrierAmplitude=n}},Ze=class{constructor(e){this.mul=1/(2*Math.PI*e),this.lI=0,this.lQ=0}mul;lI;lQ;setMaxDeviation(e){this.mul=1/(2*Math.PI*e)}demodulate(e,t,i){let s=this.mul,n=this.lI,o=this.lQ;for(let a=0;a<e.length;++a){let h=n*e[a]+o*t[a],c=n*t[a]-e[a]*o;n=e[a],o=t[a];let d=1,u=0,b=0,f=1;h<0&&(d=-d,h=-h,u=Math.PI),c<0&&(d=-d,c=-c,u=-u),h>c?f=c/h:h!=c&&(b=-Math.PI/2,f=h/c,d=-d);let E=u+d*(b+f/(.9841915835861736+f*(.0934857026296713+f*.19556307900617517)));i[a]=E*s}this.lI=n,this.lQ=o}},kt=class r{constructor(e,t){this.buffer=new fe(4),this.sin=0,this.cos=1,this.iavg=new ft(9999),this.qavg=new ft(9999),this.cavg=new ft(49999,!0),this.sinTable=new Float32Array(8001),this.cosTable=new Float32Array(8001);for(let i=0;i<8001;++i){let s=(t+i/100-40)*2*Math.PI/e;this.sinTable[i]=Math.sin(s),this.cosTable[i]=Math.cos(s)}}static STD_THRES=400;buffer;sin;cos;iavg;qavg;cavg;sinTable;cosTable;separate(e){let t=this.buffer.get(e.length),i=this.sin,s=this.cos;for(let n=0;n<t.length;++n){let o=this.iavg.add(e[n]*i),a=this.qavg.add(e[n]*s);t[n]*=i*s*2;let h;o>0?h=Math.max(-4,Math.min(4,a/o)):h=a==0?0:a>0?4:-4;let c=Math.round((h+4)*1e3),d=i*this.cosTable[c]+s*this.sinTable[c];s=s*this.cosTable[c]-i*this.sinTable[c],i=d,this.cavg.add(h*10)}return this.sin=i,this.cos=s,{found:this.cavg.getStd()<r.STD_THRES,diff:t}}},ft=class{weight;wantStd;constructor(e,t){this.weight=e,this.wantStd=t,this.avg=0,this.std=0}avg;std;add(e){let t=this.weight;return this.avg=(t*this.avg+e)/(t+1),this.wantStd&&(this.std=(t*this.std+(e-this.avg)*(e-this.avg))/(t+1)),this.avg}getStd(){return this.std}};function V(r,e){let t=0;for(let i=0;i<r.length;++i){let s=r[i],n=e[i];t+=s*s+n*n}return t/r.length}var mt=class{ratio;constructor(e,t){this.ratio=e,this.filter=new P(t),this.buffer=new fe(2)}filter;buffer;downsample(e){let t=this.ratio,i=Math.floor(e.length/t),s=this.buffer.get(i);this.filter.loadSamples(e);for(let n=0;n<i;++n)s[n]=this.filter.get(Math.floor(n*t));return s}},gt=class{constructor(e,t,i){let s=U(e,t/2,i);this.downsampler=new mt(e/t,s)}downsampler;downsample(e){return this.downsampler.downsample(e)}},re=class{constructor(e,t,i){let s=U(e,t/2,i);this.downsamplerI=new mt(e/t,s),this.downsamplerQ=new mt(e/t,s)}downsamplerI;downsamplerQ;downsample(e,t){return[this.downsamplerI.downsample(e),this.downsamplerQ.downsample(t)]}};var It=class{outRate;mode;constructor(e,t,i){this.outRate=t,this.mode=i,this.shifter=new J(e),this.downsampler=new re(e,t,151);let s=U(t,this.mode.bandwidth/2,151);this.filterI=new P(s),this.filterQ=new P(s),this.demodulator=new Tt(t)}shifter;downsampler;filterI;filterQ;demodulator;getMode(){return this.mode}setMode(e){this.mode=e;let t=U(this.outRate,e.bandwidth/2,151);this.filterI.setCoefficients(t),this.filterQ.setCoefficients(t)}demodulate(e,t,i){this.shifter.inPlace(e,t,-i);let[s,n]=this.downsampler.downsample(e,t),o=V(s,n);this.filterI.inPlace(s),this.filterQ.inPlace(n);let a=V(s,n)*this.outRate/this.mode.bandwidth;return this.demodulator.demodulate(s,n,s),{left:s,right:new Float32Array(s),stereo:!1,snr:a/o}}},Lt=class extends se{constructor(e){super(e)}create(){return{scheme:"AM",bandwidth:15e3,squelch:0}}hasBandwidth(){return!0}getBandwidth(){return this.mode.bandwidth}setBandwidth(e){return this.mode={...this.mode,bandwidth:Math.max(250,Math.min(e,3e4))},this}hasSquelch(){return!0}getSquelch(){return this.mode.squelch}setSquelch(e){return this.mode={...this.mode,squelch:Math.max(0,Math.min(e,6))},this}};var fn=600,Nt=class{outRate;mode;constructor(e,t,i){this.outRate=t,this.mode=i,this.shifter=new J(e),this.downsampler=new re(e,t,151);let s=U(t,i.bandwidth/2,351);this.filterI=new P(s),this.filterQ=new P(s),this.toneShifter=new J(t),this.agc=new He(t,10)}shifter;downsampler;filterI;filterQ;toneShifter;agc;getMode(){return this.mode}setMode(e){this.mode=e;let t=U(this.outRate,e.bandwidth/2,151);this.filterI.setCoefficients(t),this.filterQ.setCoefficients(t)}demodulate(e,t,i){this.shifter.inPlace(e,t,-i);let[s,n]=this.downsampler.downsample(e,t),o=V(s,n);this.filterI.inPlace(s),this.filterQ.inPlace(n);let a=V(s,n)*this.outRate/this.mode.bandwidth;return this.toneShifter.inPlace(s,n,fn),this.agc.inPlace(s),{left:s,right:new Float32Array(s),stereo:!1,snr:a/o}}},Ot=class extends se{constructor(e){super(e)}create(){return{scheme:"CW",bandwidth:50}}hasBandwidth(){return!0}getBandwidth(){return this.mode.bandwidth}setBandwidth(e){return this.mode={...this.mode,bandwidth:Math.max(5,Math.min(e,1e3))},this}};var Ut=class{outRate;mode;constructor(e,t,i){this.outRate=t,this.mode=i,this.shifter=new J(e),this.downsampler=new re(e,t,151);let s=U(t,i.maxF,151);this.filterI=new P(s),this.filterQ=new P(s),this.demodulator=new Ze(i.maxF/t)}shifter;downsampler;filterI;filterQ;demodulator;getMode(){return this.mode}setMode(e){this.mode=e;let t=U(this.outRate,e.maxF,151);this.filterI.setCoefficients(t),this.filterQ.setCoefficients(t),this.demodulator.setMaxDeviation(e.maxF/this.outRate)}demodulate(e,t,i){this.shifter.inPlace(e,t,-i);let[s,n]=this.downsampler.downsample(e,t),o=V(s,n);this.filterI.inPlace(s),this.filterQ.inPlace(n);let a=V(s,n)*this.outRate/(this.mode.maxF*2);return this.demodulator.demodulate(s,n,s),{left:s,right:new Float32Array(s),stereo:!1,snr:a/o}}},Wt=class extends se{constructor(e){super(e)}create(){return{scheme:"NBFM",maxF:5e3,squelch:0}}hasBandwidth(){return!0}getBandwidth(){return 2*this.mode.maxF}setBandwidth(e){return this.mode={...this.mode,maxF:Math.max(125,Math.min(e/2,15e3))},this}hasSquelch(){return!0}getSquelch(){return this.mode.squelch}setSquelch(e){return this.mode={...this.mode,squelch:Math.max(0,Math.min(e,6))},this}};var bt=class{outRate;mode;constructor(e,t,i){this.outRate=t,this.mode=i,this.shifter=new J(e),this.downsampler=new re(e,t,151);let s=U(this.outRate,i.bandwidth/2,151);this.filter=new P(s),this.demodulator=new zt(i.scheme=="USB"?Ve.Upper:Ve.Lower),this.agc=new He(t,3)}shifter;downsampler;filter;demodulator;agc;getMode(){return this.mode}setMode(e){this.mode=e;let t=U(this.outRate,e.bandwidth/2,151);this.filter.setCoefficients(t)}demodulate(e,t,i){this.shifter.inPlace(e,t,-i);let[s,n]=this.downsampler.downsample(e,t),o=V(s,n);this.demodulator.demodulate(s,n,s),this.filter.inPlace(s);let a=V(s,s)*this.outRate/(this.mode.bandwidth*2);return this.agc.inPlace(s),{left:s,right:new Float32Array(s),stereo:!1,snr:a/o}}},wt=class extends se{constructor(e){super(e)}create(e){return{scheme:e,bandwidth:2800,squelch:0}}hasBandwidth(){return!0}getBandwidth(){return this.mode.bandwidth}setBandwidth(e){return this.mode={...this.mode,bandwidth:Math.max(10,Math.min(e,15e3))},this}hasSquelch(){return!0}getSquelch(){return this.mode.squelch}setSquelch(e){return this.mode={...this.mode,squelch:Math.max(0,Math.min(e,6))},this}};var jt=class{mode;constructor(e,t,i){this.mode=i;let s=Math.min(e,336e3);this.stage1=new Ei(e,s,i),this.stage2=new Pi(s,t,i)}stage1;stage2;getMode(){return this.mode}setMode(e){this.mode=e,this.stage1.setMode(e),this.stage2.setMode(e)}demodulate(e,t,i){let s=this.stage1.demodulate(e,t,i),n=this.stage2.demodulate(s.left);return n.snr=s.snr,n}},Ei=class{outRate;mode;constructor(e,t,i){this.outRate=t,this.mode=i;let s=75e3;this.shifter=new J(e),e!=t&&(this.downsampler=new re(e,t,151));let n=U(t,s,151);this.filterI=new P(n),this.filterQ=new P(n),this.demodulator=new Ze(s/t)}shifter;downsampler;filterI;filterQ;demodulator;getMode(){return this.mode}setMode(e){this.mode=e}demodulate(e,t,i){this.shifter.inPlace(e,t,-i);let[s,n]=this.downsampler?this.downsampler.downsample(e,t):[e,t],o=V(s,n);this.filterI.inPlace(s),this.filterQ.inPlace(n);let a=V(s,n)*this.outRate/15e4;return this.demodulator.demodulate(s,n,s),{left:s,right:new Float32Array(s),stereo:!1,snr:a/o}}},Pi=class{mode;constructor(e,t,i){this.mode=i;let s=19e3,n=50;this.monoSampler=new gt(e,t,41),this.stereoSampler=new gt(e,t,41),this.stereoSeparator=new kt(e,s),this.leftDeemph=new ut(t,n),this.rightDeemph=new ut(t,n)}monoSampler;stereoSampler;stereoSeparator;leftDeemph;rightDeemph;getMode(){return this.mode}setMode(e){this.mode=e}demodulate(e){let t=this.monoSampler.downsample(e),i=new Float32Array(t),s=!1;if(this.mode.stereo){let n=this.stereoSeparator.separate(e);if(n.found){s=!0;let o=this.stereoSampler.downsample(n.diff);for(let a=0;a<o.length;++a)i[a]-=o[a],t[a]+=o[a]}}return this.leftDeemph.inPlace(t),this.rightDeemph.inPlace(i),{left:t,right:i,stereo:s,snr:1}}},Ht=class extends se{constructor(e){super(e)}create(){return{scheme:"WBFM",stereo:!0}}hasStereo(){return!0}getStereo(){return this.mode.stereo}setStereo(e){return this.mode={...this.mode,stereo:e},this}getBandwidth(){return 15e4}};Be("WBFM",jt,Ht);Be("NBFM",Ut,Wt);Be("AM",It,Lt);Be("USB",bt,wt);Be("LSB",bt,wt);Be("CW",Nt,Ot);var Vt=class extends EventTarget{clicksPerSecond;constructor(e){super(),this.clicksPerSecond=e,this.sampleRate=1024e3,this.samplesPerClick=this.getSamplesPerClick(),this.countedSamples=0}sampleRate;samplesPerClick;countedSamples;getSamplesPerClick(){return this.clicksPerSecond===void 0?void 0:Math.floor(this.sampleRate/this.clicksPerSecond)}setSampleRate(e){this.sampleRate=e,this.samplesPerClick=this.getSamplesPerClick()}receiveSamples(e,t){this.countedSamples+=e.length,!(this.samplesPerClick===void 0||this.samplesPerClick>this.countedSamples)&&(this.countedSamples%=this.samplesPerClick,this.dispatchEvent(new Ai))}addEventListener(e,t,i){super.addEventListener(e,t,i)}},Ai=class extends Event{constructor(){super("sample-click")}};function mn(r){if(r<2)return 0;if((r-1&r)==0)return r;let e=1;for(;e<r;)e<<=1;return e}var yt=class r{length;static ofLength(e){return new r(mn(e))}constructor(e){this.length=e,this.revIndex=bn(e);let[t,i]=gn(e);this.fwd=t,this.bwd=i,this.copy=new ze(2,e),this.out=new ze(2,e),this.window=new Float32Array(e),this.window.fill(1)}revIndex;fwd;bwd;copy;out;window;setWindow(e){this.window.set(e)}transform(e,t){let i=this.length,[s,n]=this.out.get(i);s.fill(0),n.fill(0);for(let o=0;o<i&&o<e.length&&o<t.length;++o){let a=this.revIndex[o];s[a]=this.window[o]*e[o]/i,n[a]=this.window[o]*t[o]/i}return Os(this.length,this.fwd,s,n),{real:s,imag:n}}transformCircularBuffers(e,t){let i=this.length,[s,n]=this.copy.get(i);return e.copyTo(s),t.copyTo(n),this.transform(s,n)}reverse(e,t){let i=this.length,[s,n]=this.out.get(i);s.fill(0),n.fill(0);for(let o=0;o<i&&o<e.length&&o<t.length;++o){let a=this.revIndex[o];s[a]=this.window[o]*e[o]/i,n[a]=this.window[o]*t[o]/i}return Os(this.length,this.bwd,s,n),{real:s,imag:n}}};function Os(r,e,t,i){for(let s=2,n=0;s<=r;s*=2,++n){let o=e[n],a=s/2;for(let h=0;h<r;h+=s)for(let c=0;c<a;++c){let d=h+c,u=d+a,b=t[d],f=i[d],E=o.real[c],G=o.imag[c],vs=t[u],xs=i[u],Ss=E*vs-G*xs,Rs=E*xs+G*vs;t[d]=b+Ss,i[d]=f+Rs,t[u]=b-Ss,i[u]=f-Rs}}}function gn(r){let e=Us(r),t=[],i=[];for(let s=0,n=1;s<e;++s,n*=2){t.push({real:new Float32Array(n),imag:new Float32Array(n)}),i.push({real:new Float32Array(n),imag:new Float32Array(n)});for(let o=0;o<n;++o){let a=-1*Math.PI*o/n;t[s].real[o]=Math.cos(a),t[s].imag[o]=Math.sin(a);let h=Math.PI*o/n;i[s].real[o]=Math.cos(h),i[s].imag[o]=Math.sin(h)}}return[t,i]}function bn(r){let e=Us(r),t=new Int32Array(r);for(let i=0;i<r;++i)t[i]=wn(i,e);return t}function Us(r){let e=0;for(let t=r-1;t>0;t>>=1)++e;return e}function wn(r,e){let t=0;for(let i=0;i<e;++i)t<<=1,t|=r&1,r>>=1;return t}var Zt=class{constructor(e){e===void 0?e=2048:e=Math.max(32,Math.min(131072,e)),this.I=new pt(131072),this.Q=new pt(131072),this.fft=yt.ofLength(e),this.fft.setWindow(Di(this.fft.length)),this.lastOutput=new Float32Array(this.fft.length),this.dirty=!0}I;Q;lastFrequency;fft;lastOutput;dirty;set size(e){this.fft=yt.ofLength(e),this.fft.setWindow(Di(this.fft.length)),this.lastOutput=new Float32Array(this.fft.length),this.dirty=!0}get size(){return this.fft.length}setSampleRate(e){}receiveSamples(e,t,i){this.I.store(e),this.Q.store(t),this.lastFrequency=i,this.dirty=!0}frequency(){return this.lastFrequency}getSpectrum(e){if(this.dirty){let t=this.fft.transformCircularBuffers(this.I,this.Q);this.lastOutput.fill(-1/0);for(let i=0;i<this.lastOutput.length;++i)this.lastOutput[i]=10*Math.log10(t.real[i]*t.real[i]+t.imag[i]*t.imag[i]);this.dirty=!1}e.set(this.lastOutput.subarray(0,e.length))}};var A=class extends Error{constructor(e,t,i){super(e,i!==void 0?i:typeof t=="object"?t:void 0),typeof t=="number"&&(this.type=t,this.name=`RadioError.${M[t]}`)}type},M;(function(r){r[r.NoUsbSupport=0]="NoUsbSupport",r[r.NoDeviceSelected=1]="NoDeviceSelected",r[r.UnsupportedDevice=2]="UnsupportedDevice",r[r.UsbTransferError=3]="UsbTransferError",r[r.TunerError=4]="TunerError",r[r.DemodulationError=5]="DemodulationError"})(M||(M={}));var Gt=class{constructor(e){this.buffer=new ze(4,e)}buffer;convert(e){let t=new Uint8Array(e),i=t.length/2,s=this.buffer.get(i),n=s[0],o=s[1];for(let a=0;a<i;++a)n[a]=t[2*a]/128-.995,o[a]=t[2*a+1]/128-.995;return s}};var j;(function(r){r[r.Off=0]="Off",r[r.I=1]="I",r[r.Q=2]="Q"})(j||(j={}));var Qt=class{constructor(){this.msgQueue=[],this.notifyQueue=[]}msgQueue;notifyQueue;send(e){let t=this.notifyQueue.shift();t!==void 0?t(e):this.msgQueue.push(e)}receive(){let e=this.msgQueue.shift();return e!==void 0?Promise.resolve(e):new Promise(t=>this.notifyQueue.push(t))}};var Te=class extends CustomEvent{constructor(e){super("radio",{detail:e})}},Re;(function(r){r[r.OFF=0]="OFF",r[r.PLAYING=1]="PLAYING"})(Re||(Re={}));var Xt=class extends EventTarget{rtlProvider;sampleReceiver;constructor(e,t){super(),this.rtlProvider=e,this.sampleReceiver=t,this.sampleRate=1024e3,this.state=Re.OFF,this.channel=new Qt,this.frequencyCorrection=0,this.gain=null,this.frequency=885e5,this.directSamplingMethod=j.Off,this.biasTeeEnabled=!1,this.runLoop()}sampleRate;state;channel;frequencyCorrection;gain;frequency;directSamplingMethod;biasTeeEnabled;start(){this.channel.send({type:"start"})}stop(){this.channel.send({type:"stop"})}isPlaying(){return this.state!=Re.OFF}setFrequency(e){this.channel.send({type:"frequency",value:e})}getFrequency(){return this.frequency}setFrequencyCorrection(e){this.channel.send({type:"frequencyCorrection",value:e})}getFrequencyCorrection(){return this.frequencyCorrection}setGain(e){this.channel.send({type:"gain",value:e})}getGain(){return this.gain}setDirectSamplingMethod(e){this.channel.send({type:"directSamplingMethod",value:e})}getDirectSamplingMethod(){return this.directSamplingMethod}setSampleRate(e){this.sampleRate=e}getSampleRate(){return this.sampleRate}enableBiasTee(e){this.channel.send({type:"biasTeeEnabled",value:e})}isBiasTeeEnabled(){return this.biasTeeEnabled}async runLoop(){let e,t;for(;;){let i=await this.channel.receive();try{switch(this.state){case Re.OFF:{if(i.type=="frequency"&&(this.frequency=i.value),i.type=="frequencyCorrection"&&(this.frequencyCorrection=i.value),i.type=="gain"&&(this.gain=i.value),i.type=="directSamplingMethod"&&(this.directSamplingMethod=i.value),i.type=="biasTeeEnabled"&&(this.biasTeeEnabled=i.value),i.type!="start")continue;t=await this.rtlProvider.get(),await t.setSampleRate(this.sampleRate),await t.setFrequencyCorrection(this.frequencyCorrection),await t.setGain(this.gain),await t.setDirectSamplingMethod(this.directSamplingMethod),await t.setCenterFrequency(this.frequency),await t.resetBuffer(),e=new Bi(t,this.sampleReceiver,this,this.sampleRate),e.startStream(),this.state=Re.PLAYING,this.dispatchEvent(new Te({type:"started"}));break}case Re.PLAYING:{switch(i.type){case"frequency":this.frequency!=i.value&&(this.frequency=i.value,await t.setCenterFrequency(this.frequency));break;case"gain":this.gain!=i.value&&(this.gain=i.value,await t.setGain(this.gain));break;case"frequencyCorrection":this.frequencyCorrection!=i.value&&(this.frequencyCorrection=i.value,await t.setFrequencyCorrection(this.frequencyCorrection));break;case"directSamplingMethod":this.directSamplingMethod!=i.value&&(this.directSamplingMethod=i.value,await t.setDirectSamplingMethod(this.directSamplingMethod));break;case"biasTeeEnabled":this.biasTeeEnabled!=i.value&&(this.biasTeeEnabled=i.value,await t.enableBiasTee(this.biasTeeEnabled));break;case"stop":await e.stopStream(),await t.close(),this.state=Re.OFF,this.dispatchEvent(new Te({type:"stopped"}));break;default:}break}}}catch(s){this.dispatchEvent(new Te({type:"error",exception:s}))}}}addEventListener(e,t,i){super.addEventListener(e,t,i)}},Bi=class r{rtl;sampleReceiver;radio;sampleRate;static BUFS_PER_SEC=20;constructor(e,t,i,s){this.rtl=e,this.sampleReceiver=t,this.radio=i,this.sampleRate=s,this.samplesPerBuf=512*Math.ceil(s/r.BUFS_PER_SEC/512),this.buffersWanted=0,this.buffersRunning=0,this.iqConverter=new Gt(this.samplesPerBuf),this.directSampling=!1,this.stopCallback=r.nilCallback}samplesPerBuf;buffersWanted;buffersRunning;iqConverter;directSampling;stopCallback;static PARALLEL_BUFFERS=2;async startStream(){for(this.sampleReceiver.setSampleRate(this.sampleRate),await this.rtl.resetBuffer(),this.buffersWanted=r.PARALLEL_BUFFERS;this.buffersRunning<this.buffersWanted;)++this.buffersRunning,this.readStream()}async stopStream(){if(this.buffersRunning==0&&this.buffersWanted==0)return;let e=new Promise(t=>{this.stopCallback=t});return this.buffersWanted=0,e}async readStream(){try{for(;this.buffersRunning<=this.buffersWanted;){let e=await this.rtl.readSamples(this.samplesPerBuf),[t,i]=this.iqConverter.convert(e.data);this.sampleReceiver.receiveSamples(t,i,e.frequency),this.directSampling!=e.directSampling&&(this.directSampling=e.directSampling,this.radio.dispatchEvent(new Te({type:"directSampling",active:this.directSampling})))}}catch(e){let t=new A("Sample transfer was interrupted. Did you unplug your device?",M.UsbTransferError,{cause:e}),i=new Te({type:"error",exception:t});this.radio.dispatchEvent(i)}--this.buffersRunning,this.buffersRunning==0&&(this.stopCallback(),this.stopCallback=r.nilCallback)}static nilCallback(){}};var Yt=class r{receivers;static of(e,...t){let i=[];e instanceof r?i.push(...e.receivers):i.push(e);for(let s of t)s instanceof r?i.push(...s.receivers):i.push(s);return i.length==1?i[0]:new r(i)}constructor(e){this.receivers=e}setSampleRate(e){for(let t of this.receivers)t.setSampleRate(e)}receiveSamples(e,t,i){for(let s of this.receivers)s.receiveSamples(e,t,i)}};var Kt=[[0,8,2,223],[50,8,2,190],[55,8,2,139],[60,8,2,123],[65,8,2,105],[70,8,2,88],[75,0,2,68],[90,0,2,52],[110,0,2,36],[140,0,2,20],[180,0,2,19],[250,0,2,17],[280,0,2,0],[310,0,65,0],[588,0,64,0]],$e=class r{com;i2c;muxCfgs;vcoPowerRef;static XTAL_FREQ=288e5;static REGISTERS=[131,50,117,192,64,214,108,245,99,117,104,108,131,128,0,15,0,192,48,72,204,96,0,84,174,74,192];static BIT_REVS=[0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15];static IF_FREQ=357e4;xtalFreq;hasPllLock;shadowRegs;static async check(e,t){await e.openI2C();let i=!1;try{i=await e.getI2CReg(t,0)==105}catch{}return await e.closeI2C(),i}constructor(e,t,i,s){this.com=e,this.i2c=t,this.muxCfgs=i,this.vcoPowerRef=s,this.xtalFreq=r.XTAL_FREQ,this.hasPllLock=!1,this.shadowRegs=new Uint8Array}async setFrequency(e){return await this._setMux(e+r.IF_FREQ),await this._setPll(e+r.IF_FREQ)-r.IF_FREQ}async open(){await this.com.setDemodReg(1,177,26,1),await this.com.setDemodReg(0,8,77,1),await this.com.setDemodReg(1,21,1,1),await this.com.openI2C(),this.shadowRegs=new Uint8Array(r.REGISTERS);for(let e=0;e<this.shadowRegs.length;++e)await this.com.setI2CReg(this.i2c,e+5,this.shadowRegs[e]);await this._initElectronics(),await this.com.closeI2C()}async close(){await this._writeRegMask(6,177,255),await this._writeRegMask(5,179,255),await this._writeRegMask(7,58,255),await this._writeRegMask(8,64,255),await this._writeRegMask(9,192,255),await this._writeRegMask(10,58,255),await this._writeRegMask(12,53,255),await this._writeRegMask(15,104,255),await this._writeRegMask(17,3,255),await this._writeRegMask(23,244,255),await this._writeRegMask(25,12,255)}async setAutoGain(){await this._writeRegMask(5,0,16),await this._writeRegMask(7,16,16),await this._writeRegMask(12,11,159)}async setManualGain(e){let t=Math.floor(e/3.5),i=e-3.5*t>=2.3?1:0;t<0&&(t=0),t>15&&(t=15),t==15&&(i=0);let s=t+i,n=t;await this._writeRegMask(5,16,16),await this._writeRegMask(7,0,16),await this._writeRegMask(12,8,159),await this._writeRegMask(5,s,15),await this._writeRegMask(7,n,15)}setXtalFrequency(e){this.xtalFreq=e}getIntermediateFrequency(){return r.IF_FREQ}getMinimumFrequency(){return r.XTAL_FREQ}async _calibrateFilter(){let e=!0;for(;;){if(await this._writeRegMask(11,96,96),await this._writeRegMask(15,4,4),await this._writeRegMask(16,0,3),await this._setPll(56e6),!this.hasPllLock)throw new A("PLL not locked -- cannot tune to the selected frequency.",M.TunerError);await this._writeRegMask(11,16,16),await this._writeRegMask(11,0,16),await this._writeRegMask(15,0,4);let t=await this._readRegBuffer(0,5),s=new Uint8Array(t)[4]&15;if(s==15&&(s=0),s==0||!e)return s;e=!1}}async _setMux(e){let t=e/1e6,i;for(i=0;i<this.muxCfgs.length-1&&!(t<this.muxCfgs[i+1][0]);++i);let s=this.muxCfgs[i];await this._writeRegMask(23,s[1],8),await this._writeRegMask(26,s[2],195),await this._writeRegMask(27,s[3],255),await this._writeRegMask(16,0,11),await this._writeRegMask(8,0,63),await this._writeRegMask(9,0,63)}async _setPll(e){let t=Math.floor(this.xtalFreq);await this._writeRegMask(16,0,16),await this._writeRegMask(26,0,12),await this._writeRegMask(18,128,224);let i=Math.min(6,Math.floor(Math.log(177e7/e)/Math.LN2)),s=1<<i+1,n=await this._readRegBuffer(0,5),a=(new Uint8Array(n)[4]&48)>>4;a>this.vcoPowerRef?--i:a<this.vcoPowerRef&&++i,await this._writeRegMask(16,i<<5,224);let h=e*s,c=Math.floor(h/(2*t)),d=h%(2*t);if(c>63)return this.hasPllLock=!1,0;let u=Math.floor((c-13)/4),b=(c-13)%4;await this._writeRegMask(20,u+(b<<6),255),await this._writeRegMask(18,d==0?8:0,8);let f=Math.min(65535,Math.floor(32768*d/t));return await this._writeRegMask(22,f>>8,255),await this._writeRegMask(21,f&255,255),await this._getPllLock(),await this._writeRegMask(26,8,8),2*t*(c+f/65536)/s}async _getPllLock(){let e=!0;for(;;){let t=await this._readRegBuffer(0,3);if(new Uint8Array(t)[2]&64){this.hasPllLock=!0;return}if(!e){this.hasPllLock=!0;return}await this._writeRegMask(18,96,224),e=!1}}async _initElectronics(){await this._writeRegMask(12,0,15),await this._writeRegMask(19,49,63),await this._writeRegMask(29,0,56);let e=await this._calibrateFilter();await this._writeRegMask(10,16|e,31),await this._writeRegMask(11,107,239),await this._writeRegMask(7,0,128),await this._writeRegMask(6,16,48),await this._writeRegMask(30,64,96),await this._writeRegMask(5,0,128),await this._writeRegMask(31,0,128),await this._writeRegMask(15,0,128),await this._writeRegMask(25,96,96),await this._writeRegMask(29,229,199),await this._writeRegMask(28,36,248),await this._writeRegMask(13,83,255),await this._writeRegMask(14,117,255),await this._writeRegMask(5,0,96),await this._writeRegMask(6,0,8),await this._writeRegMask(17,56,8),await this._writeRegMask(23,48,48),await this._writeRegMask(10,64,96),await this._writeRegMask(29,0,56),await this._writeRegMask(28,0,4),await this._writeRegMask(6,0,64),await this._writeRegMask(26,48,48),await this._writeRegMask(29,24,56),await this._writeRegMask(28,36,4),await this._writeRegMask(30,13,31),await this._writeRegMask(26,32,48)}async _readRegBuffer(e,t){let i=await this.com.getI2CRegBuffer(this.i2c,e,t),s=new Uint8Array(i);for(let n=0;n<s.length;++n){let o=s[n];s[n]=r.BIT_REVS[o&15]<<4|r.BIT_REVS[o>>4]}return s.buffer}async _writeRegMask(e,t,i){let n=this.shadowRegs[e-5]&~i|t&i;this.shadowRegs[e-5]=n,await this.com.setI2CReg(this.i2c,e,n)}};var Jt=class r extends $e{static async maybeInit(e){if(!await $e.check(e,52))return null;let i=new r(e);return await i.open(),i}constructor(e){super(e,52,Kt,2)}};var ei=class r extends $e{isRtlSdrBlogV4;input;static async maybeInit(e){if(!$e.check(e,116))return null;let{manufacturer:i,model:s}=e.getBranding(),n=i=="RTLSDRBlog"&&s=="Blog V4",o=new r(e,n);return await o.open(),o}constructor(e,t){super(e,116,t?yn:Kt,1),this.isRtlSdrBlogV4=t,this.input=0}async setFrequency(e){let t=0;this.isRtlSdrBlogV4&&e<288e5&&(t=288e5);let i=await super.setFrequency(e+t);if(this.isRtlSdrBlogV4){let s=e<=288e5?2:e<25e7?1:0;this.input!=s&&(this.input=s,s==0?(await this._writeRegMask(6,0,8),await this._writeRegMask(5,0,96)):s==1?(await this._writeRegMask(6,0,8),await this._writeRegMask(5,96,96)):(await this._writeRegMask(6,8,8),await this._writeRegMask(5,32,96)),await this.com.setGpioOutput(5),await this.com.setGpioBit(5,s==2?0:1))}else{let s=e>345e6?0:1;this.input!=s&&(this.input=s,await this._writeRegMask(5,s==0?0:96,96))}return i-t}getMinimumFrequency(){return this.isRtlSdrBlogV4?0:super.getMinimumFrequency()}},yn=[[0,0,2,223],[2.2,8,2,223],[50,8,2,190],[55,8,2,139],[60,8,2,123],[65,8,2,105],[70,8,2,88],[75,8,2,68],[85,0,2,68],[90,0,2,52],[110,0,2,36],[112,8,2,36],[140,8,2,20],[172,0,2,20],[180,0,2,19],[242,8,2,19],[250,8,2,17],[280,8,2,0],[310,8,65,0],[588,8,64,0]];var ti=class r{constructor(e){this.device=e}device;static WRITE_FLAG=16;async claimInterface(){try{await this.device.claimInterface(0)}catch(e){throw new A("Could not connect to the RTL-SDR stick. Are you using it in another application?",M.UsbTransferError,{cause:e})}}async releaseInterface(){await this.device.releaseInterface(0)}getBranding(){return{manufacturer:this.device.manufacturerName,model:this.device.productName}}async setUsbReg(e,t,i){await this._setReg(256,e,t,i)}async setSysReg(e,t){await this._setReg(512,e,t,1)}async getSysReg(e){return this._getReg(512,e,1)}async setDemodReg(e,t,i,s){return await this._setRegBuffer(e,t<<8|32,this._numberToBuffer(i,s,!0)),this._getReg(10,288,1)}async getI2CReg(e,t){return await this._setRegBuffer(1536,e,new Uint8Array([t]).buffer),this._getReg(1536,e,1)}async setI2CReg(e,t,i){await this._setRegBuffer(1536,e,new Uint8Array([t,i]).buffer)}async getI2CRegBuffer(e,t,i){return await this._setRegBuffer(1536,e,new Uint8Array([t]).buffer),this._getRegBuffer(1536,e,i)}async setGpioOutput(e){e=1<<e;let t=await this.getSysReg(12292);await this.setSysReg(12292,t&~e),t=await this.getSysReg(12291),await this.setSysReg(12291,t|e)}async setGpioBit(e,t){e=1<<e;let i=await this.getSysReg(12289);i=t?i|e:i&~e,await this.setSysReg(12289,i)}async getSamples(e){let t=await this.device.transferIn(1,e);if(t.status=="ok")return t.data.buffer;if(t.status=="stall")return await this.device.clearHalt("in",1),new ArrayBuffer(e);throw new A(`USB bulk read failed length 0x${e.toString(16)} status=${t.status}`,M.UsbTransferError)}async openI2C(){await this.setDemodReg(1,1,24,1)}async closeI2C(){await this.setDemodReg(1,1,16,1)}async close(){await this.device.close()}async _setReg(e,t,i,s){try{await this._writeCtrlMsg(t,e|r.WRITE_FLAG,this._numberToBuffer(i,s))}catch(n){throw new A(`setReg failed block=0x${e.toString(16)} reg=${t.toString(16)} value=${i.toString(16)} length=${s}`,M.UsbTransferError,{cause:n})}}async _getReg(e,t,i){try{return this._bufferToNumber(await this._readCtrlMsg(t,e,i))}catch(s){throw new A(`getReg failed block=0x${e.toString(16)} reg=${t.toString(16)} length=${i}`,M.UsbTransferError,{cause:s})}}async _setRegBuffer(e,t,i){try{await this._writeCtrlMsg(t,e|r.WRITE_FLAG,i)}catch(s){throw new A(`setRegBuffer failed block=0x${e.toString(16)} reg=${t.toString(16)}`,M.UsbTransferError,{cause:s})}}async _getRegBuffer(e,t,i){try{return this._readCtrlMsg(t,e,i)}catch(s){throw new A(`getRegBuffer failed block=0x${e.toString(16)} reg=${t.toString(16)} length=${i}`,M.UsbTransferError,{cause:s})}}_bufferToNumber(e){let t=e.byteLength,i=new DataView(e);if(t==0)return 0;if(t==1)return i.getUint8(0);if(t==2)return i.getUint16(0,!0);if(t==4)return i.getUint32(0,!0);throw new A(`Cannot parse ${t}-byte number`,M.UsbTransferError)}_numberToBuffer(e,t,i){let s=new ArrayBuffer(t),n=new DataView(s);if(t==1)n.setUint8(0,e);else if(t==2)n.setUint16(0,e,!i);else if(t==4)n.setUint32(0,e,!i);else throw new A(`Cannot write ${t}-byte number`,M.UsbTransferError);return s}async _readCtrlMsg(e,t,i){let s={requestType:"vendor",recipient:"device",request:0,value:e,index:t},n=await this.device.controlTransferIn(s,Math.max(8,i));if(n.status=="ok")return n.data.buffer.slice(0,i);throw new A(`USB read failed value=0x${e.toString(16)} index=0x${t.toString(16)} status=${n.status}`,M.UsbTransferError)}async _writeCtrlMsg(e,t,i){let s={requestType:"vendor",recipient:"device",request:0,value:e,index:t},n=await this.device.controlTransferOut(s,i);if(n.status!="ok")throw new A(`USB write failed value=0x${e.toString(16)} index=0x${t.toString(16)} status=${n.status}`,M.UsbTransferError)}};var vn=[{vendorId:3034,productId:10290},{vendorId:3034,productId:10296}],ii=class{constructor(){this.device=void 0}device;async get(){return this.device===void 0&&(this.device=await this.getDevice()),await this.device.open(),zi.open(this.device)}async getDevice(){if(navigator.usb===void 0)throw new A("This browser does not support the HTML5 USB API",M.NoUsbSupport);try{return navigator.usb.requestDevice({filters:vn})}catch(e){throw new A("No device was selected",M.NoDeviceSelected,{cause:e})}}},zi=class r{com;tuner;static XTAL_FREQ=288e5;static BYTES_PER_SAMPLE=2;constructor(e,t){this.com=e,this.tuner=t,this.centerFrequency=0,this.ppm=0,this.gain=null,this.directSamplingMethod=j.Off,this.directSampling=j.Off,this.biasTeeEnabled=!1}centerFrequency;ppm;gain;directSamplingMethod;directSampling;biasTeeEnabled;static async open(e){let t=new ti(e);await t.claimInterface(),await r._init(t);let i=await r._findTuner(t),s=new r(t,i);return await s.setGain(s.gain),await s.setFrequencyCorrection(s.ppm),s}static async _init(e){await e.setUsbReg(8192,9,1),await e.setUsbReg(8536,512,2),await e.setUsbReg(8520,528,2),await e.setSysReg(12299,34),await e.setSysReg(12288,232),await e.setDemodReg(1,1,20,1),await e.setDemodReg(1,1,16,1),await e.setDemodReg(1,21,0,1),await e.setDemodReg(1,22,0,1),await e.setDemodReg(1,23,0,1),await e.setDemodReg(1,24,0,1),await e.setDemodReg(1,25,0,1),await e.setDemodReg(1,26,0,1),await e.setDemodReg(1,27,0,1),await e.setDemodReg(1,28,202,1),await e.setDemodReg(1,29,220,1),await e.setDemodReg(1,30,215,1),await e.setDemodReg(1,31,216,1),await e.setDemodReg(1,32,224,1),await e.setDemodReg(1,33,242,1),await e.setDemodReg(1,34,14,1),await e.setDemodReg(1,35,53,1),await e.setDemodReg(1,36,6,1),await e.setDemodReg(1,37,80,1),await e.setDemodReg(1,38,156,1),await e.setDemodReg(1,39,13,1),await e.setDemodReg(1,40,113,1),await e.setDemodReg(1,41,17,1),await e.setDemodReg(1,42,20,1),await e.setDemodReg(1,43,113,1),await e.setDemodReg(1,44,116,1),await e.setDemodReg(1,45,25,1),await e.setDemodReg(1,46,65,1),await e.setDemodReg(1,47,165,1),await e.setDemodReg(0,25,5,1),await e.setDemodReg(1,147,240,1),await e.setDemodReg(1,148,15,1),await e.setDemodReg(1,17,0,1),await e.setDemodReg(1,4,0,1),await e.setDemodReg(0,97,96,1),await e.setDemodReg(0,6,128,1),await e.setDemodReg(1,177,27,1),await e.setDemodReg(0,13,131,1)}static async _findTuner(e){let t=await Jt.maybeInit(e);if(t===null&&(t=await ei.maybeInit(e)),t===null)throw await e.releaseInterface(),new A("Sorry, your USB dongle has an unsupported tuner chip.",M.UnsupportedDevice);return t}async setSampleRate(e){let t=Math.floor(this._getXtalFrequency()*4194304/e);t&=268435452;let i=Math.floor(this._getXtalFrequency()*(1<<22)/t);return await this.com.setDemodReg(1,159,t>>16&65535,2),await this.com.setDemodReg(1,161,t&65535,2),await this._resetDemodulator(),i}async setFrequencyCorrection(e){this.ppm=e;let t=-1*Math.floor(this.ppm*(1<<24)/1e6);await this.com.setDemodReg(1,62,t>>8&63,1),await this.com.setDemodReg(1,63,t&255,1);let i=this._getXtalFrequency();this.tuner.setXtalFrequency(i);let s=this.tuner.getIntermediateFrequency();s!=0&&await this._setIfFrequency(s),this.centerFrequency!=0&&await this.setCenterFrequency(this.centerFrequency)}async _setIfFrequency(e){let t=this._getXtalFrequency(),i=-1*Math.floor(e*(1<<22)/t);return await this.com.setDemodReg(1,25,i>>16&63,1),await this.com.setDemodReg(1,26,i>>8&255,1),await this.com.setDemodReg(1,27,i&255,1),Math.floor(-1*i*t/(1<<22))}getFrequencyCorrection(){return this.ppm}async setGain(e){this.gain=e,await this.com.openI2C(),this.directSampling?this._enableRtlAgc(e==null):this.gain===null?await this.tuner.setAutoGain():await this.tuner.setManualGain(this.gain),await this.com.closeI2C()}getGain(){return this.gain}async enableBiasTee(e){this.biasTeeEnabled=e,await this.com.setGpioOutput(0),await this.com.setGpioBit(0,e?1:0)}isBiasTeeEnabled(){return this.biasTeeEnabled}async _enableRtlAgc(e){await this.com.setDemodReg(0,25,e?37:5,1)}_getXtalFrequency(){return Math.floor(r.XTAL_FREQ*(1+this.ppm/1e6))}async _resetDemodulator(){await this.com.setDemodReg(1,1,20,1),await this.com.setDemodReg(1,1,16,1)}async setCenterFrequency(e){await this._maybeSetDirectSampling(e);let t;return this.directSampling?t=this._setIfFrequency(e):(await this.com.openI2C(),t=await this.tuner.setFrequency(e),await this.com.closeI2C()),this.centerFrequency=e,t}async setDirectSamplingMethod(e){this.directSamplingMethod!=e&&(this.directSamplingMethod=e,this.centerFrequency!=0&&await this.setCenterFrequency(this.centerFrequency))}getDirectSamplingMethod(){return this.directSamplingMethod}async _maybeSetDirectSampling(e){let i=e<this.tuner.getMinimumFrequency()?this.directSamplingMethod:j.Off;if(this.directSampling==i)return;let s=this.directSampling==j.Off,n=i!=j.Off;if(this.directSampling=i,n){s&&(await this.com.openI2C(),await this.tuner.close(),await this.com.closeI2C()),await this.com.setDemodReg(1,177,26,1),await this.com.setDemodReg(1,21,0,1);let o=i==j.I?128:144;await this.com.setDemodReg(0,6,o,1),await this._enableRtlAgc(!0)}else{await this.com.openI2C(),await this.tuner.open(),await this.com.closeI2C();let o=this.tuner.getIntermediateFrequency();o!=0&&await this._setIfFrequency(o),await this.com.setDemodReg(1,21,1,1),await this.com.setDemodReg(0,6,128,1),await this._enableRtlAgc(!1),await this.setGain(this.getGain())}}async resetBuffer(){await this.com.setUsbReg(8520,528,2),await this.com.setUsbReg(8520,0,2)}async readSamples(e){let t=await this.com.getSamples(e*r.BYTES_PER_SAMPLE),i=this.centerFrequency,s=this.directSampling!=j.Off;return{frequency:i,directSampling:s,data:t}}async close(){await this.com.openI2C(),await this.tuner.close(),await this.com.closeI2C(),await this.com.releaseInterface(),await this.com.close()}};function Ws(){let r=localStorage.getItem("config"),e=js();return r!=null&&(e=Hs(e,JSON.parse(r))),new Ti(e)}var Ti=class{constructor(e){this.cfg={...js,...e}}save(){localStorage.setItem("config",JSON.stringify(this.cfg)),clearTimeout(this.timeout)}get(){return{...this.cfg.v1}}update(e){e(this.cfg.v1),this.scheduleSave()}scheduleSave(){clearTimeout(this.timeout),this.timeout=window.setTimeout(()=>this.save())}};function js(){return{v1:{modes:{WBFM:{scheme:"WBFM",stereo:!0},NBFM:{scheme:"NBFM",maxF:5e3,squelch:0},AM:{scheme:"AM",bandwidth:15e3,squelch:0},LSB:{scheme:"LSB",bandwidth:2800,squelch:0},USB:{scheme:"USB",bandwidth:2800,squelch:0},CW:{scheme:"CW",bandwidth:50}},mode:"WBFM",centerFrequency:885e5,tunedFrequency:885e5,tuningStep:1e3,frequencyScale:1e3,gain:null,sampleRate:1024e3,ppm:0,fftSize:2048,biasTee:!1,lowFrequencyMethod:{name:"directSampling",channel:"Q",frequency:1e8,biasTee:!1},minDecibels:-90,maxDecibels:-20,presets:{sortColumn:"frequency",list:[]},windows:{controls:{},settings:{},presets:{}}}}}function Hs(r,e){let t=s=>s&&typeof s=="object"&&!Array.isArray(s);if(!t(r)||!t(e))return e;let i={...r};for(let s in e)i[s]=Hs(i[s],e[s]);return i}var N=class{constructor(e,t=4){this.handler=e;this.minPixelDelta=t;this.onPointerMove=i=>this.drag(i),this.onPointerUp=i=>this.finish(i),this.onPointerCancel=i=>this.cancel(i)}startDragging(e){e.button==0&&(this.dragData&&(this.handler.cancelDrag(),this.dragData.release()),this.dragData=new ki(e,this.minPixelDelta,this.onPointerMove,this.onPointerUp,this.onPointerCancel),this.dragData.capture(),this.drag(e),e.preventDefault())}drag(e){if(this.dragData===void 0)return;e.preventDefault();let{start:t,moved:i,x:s,y:n}=this.dragData.delta(e);i&&(t&&this.handler.startDrag(),this.handler.drag(s,n))}finish(e){this.dragData!==void 0&&(this.dragData.hasMoved()?(this.handler.finishDrag(),e.preventDefault()):this.handler.onClick(e),this.release())}cancel(e){this.dragData!==void 0&&(this.handler.cancelDrag(),e.preventDefault(),this.release())}release(){this.dragData?.release(),this.dragData=void 0}},ki=class{constructor(e,t,i,s,n){this.minPixelDelta=t;this.move=i;this.up=s;this.cancel=n;this.moved=!1,this.startX=e.clientX,this.startY=e.clientY,this.pointerId=e.pointerId,this.target=e.target}capture(){this.target.addEventListener("pointermove",this.move),this.target.addEventListener("pointerup",this.up),this.target.addEventListener("pointercancel",this.cancel),this.target.setPointerCapture(this.pointerId)}release(){this.target.removeEventListener("pointermove",this.move),this.target.removeEventListener("pointerup",this.up),this.target.removeEventListener("pointercancel",this.cancel),this.target.releasePointerCapture(this.pointerId)}hasMoved(){return this.moved}delta(e){let t=!1;!this.moved&&this.minPixelDelta==0&&(t=!0,this.moved=!0);let i={start:t,moved:this.moved,x:e.clientX-this.startX,y:e.clientY-this.startY};return i.moved||Math.max(Math.abs(i.x),Math.abs(i.y))>=this.minPixelDelta&&(this.moved=!0,i.moved=!0,i.start=!0),i}};function H(r,e){return p`<svg version="1.1" width="16" height="16">
    <title>${r}</title>
    ${e}
  </svg>`}var Vs=H("Close",k`<g><path d="M2 4v-2h2l4 4 4 -4h2v2l-4 4 4 4v2h-2l-4 -4 -4 4h-2v-2l4 -4z"></path></g>`),Zs=H("Resize",k`<g><path d="M2,2V8L4.25,5.75 10.25,11.75 8,14 14,14 14,8 11.75,10.25 5.75,4.25 8,2Z"></path></g>`),Gs=H("Stop playing",k`<g><path d="M3 3v10h10V3z"></path></g>`),Qs=H("Start playing",k`<g><path d="M3 2v12l10 -6z"></path></g>`),Xs=H("Settings",k`<g><path d="M5 1A4 4 0 0 0 3.7 1.2L6.5 4 6 6 4 6.5 1.2 3.7A4 4 0 0 0 1 5 4 4 0 0 0 5 9 4 4 0 0 0 6.6 8.6L12.5 14.5A1.4 1.4 0 0 0 13.6 15 1.4 1.4 0 0 0 15 13.6 1.4 1.4 0 0 0 14.5 12.5L8.6 6.6A4 4 0 0 0 9 5 4 4 0 0 0 5 1z"></path></g>`),Ys=H("Help",k`<g>
    <path
      d="M8 1A5 4.5 0 0 0 3 5.5L3 6L5 6L5 5.5A3 2.5 0 0 1 8 3A3 2.5 0 0 1 11 5.5A3 2.5 0 0 1 8 8L7 8L7 9L7 10L7 12L9 12L9 10A5 4.5 0 0 0 13 5.5A5 4.5 0 0 0 8 1z"
    ></path>
    <circle cy="14" cx="8" r="1"></circle>
  </g>`),Ks=H("Scroll left",k`<g><path d="m11 2v2l-4 4 4 4v2H9L3 8 9 2Z"></path></g>`),Js=H("Scroll right",k`<g><path d="m5 2v2l4 4 -4 4v2h2L13 8 7 2Z"></path></g>`);function er(r,e){return H(r,k`<g>
        <path
          d="M7 1A6 6 0 0 0 1 7A6 6 0 0 0 7 13A6 6 0 0 0 13 7A6 6 0 0 0 7 1zM7 3A4 4 0 0 1 11 7A4 4 0 0 1 7 11A4 4 0 0 1 3 7A4 4 0 0 1 7 3z"
        ></path>
        <path d="M14.5 13l-1.5 1.5 -4 -4 1.5 -1.5z"></path>
        ${e}
      </g>`)}var tr=er("Zoom in",k`<path d="M4 6v2h2v2h2v-2h2v-2h-2v-2h-2v2Z"></path>`),ir=er("Zoom out",k`<path d="M4 6v2h6v-2Z"></path>`),sr=H("Stereo",k`<g><path d="M 6 3A 5 5 0 0 0 1 8A 5 5 0 0 0 6 13A 5 5 0 0 0 8 13A 5 5 0 0 0 10 13A 5 5 0 0 0 15 8A 5 5 0 0 0 10 3A 5 5 0 0 0 8 3A 5 5 0 0 0 6 3zM 6 5A 3 3 0 0 1 9 8A 3 3 0 0 1 6 11A 3 3 0 0 1 3 8A 3 3 0 0 1 6 5zM 10 5A 3 3 0 0 1 13 8A 3 3 0 0 1 10 11A 3 3 0 0 1 10 11A 5 5 0 0 0 11 8A 5 5 0 0 0 10 5z"></g>`),rr=H("Error state",k`<g>
    <path d="M 2.5 8A 1.5 1.5 0 0 0 1 9.5A 1.5 1.5 0 0 0 2.5 11A 1.5 1.5 0 0 0 3.7 10.4L 12 13.5A 1.5 1.5 0 0 0 12 13.5A 1.5 1.5 0 0 0 13.5 15A 1.5 1.5 0 0 0 15 13.5A 1.5 1.5 0 0 0 13.5 12A 1.5 1.5 0 0 0 12.3 12.6L 4 9.5A 1.5 1.5 0 0 0 4 9.5A 1.5 1.5 0 0 0 2.5 8z"></path>
    <path d="M 13.5 8A 1.5 1.5 0 0 0 12 9.5A 1.5 1.5 0 0 0 12 9.5L 3.7 12.6A 1.5 1.5 0 0 0 2.5 12A 1.5 1.5 0 0 0 1 13.5A 1.5 1.5 0 0 0 2.5 15A 1.5 1.5 0 0 0 4 13.5A 1.5 1.5 0 0 0 4 13.5L 12.3 10.4A 1.5 1.5 0 0 0 13.5 11A 1.5 1.5 0 0 0 15 9.5A 1.5 1.5 0 0 0 13.5 8z"></path>
    <path d="M 8 1A 5 4.5 0 0 0 3 5.5A 5 4.5 0 0 0 5 9.1L 5 12.1A 5 4.5 0 0 0 8 13A 5 4.5 0 0 0 11 12.1L 11 9.1A 5 4.5 0 0 0 13 5.5A 5 4.5 0 0 0 8 1zM 5.8 4A 1.8 1.5 0 0 1 7.5 5.5A 1.8 1.5 0 0 1 5.8 7A 1.8 1.5 0 0 1 4 5.5A 1.8 1.5 0 0 1 5.8 4zM 10.2 4A 1.8 1.5 0 0 1 12 5.5A 1.8 1.5 0 0 1 10.2 7A 1.8 1.5 0 0 1 8.5 5.5A 1.8 1.5 0 0 1 10.2 4zM 8 7.5A 1.5 0.8 0 0 1 9.5 8.2A 1.5 0.8 0 0 1 8 9A 1.5 0.8 0 0 1 6.5 8.2A 1.5 0.8 0 0 1 8 7.5z"></path>
  </g>`),Ii=H("Add",k`<g><path d="M2,7h5v-5h2v5h5v2h-5v5h-2v-5h-5z"></path></g>`),nr=H("Edit",k`<g><path d="M1.9,15.37A1,1 0 0 1 0.63,14.1L2,10 12,0 16,4 6,14ZM2,14 5,13 3,11ZM6,12 14,4 12,2 4,10Z"></path></g>`),or=H("Delete",k`<g><path d="M2 2h1l5 5 5 -5h1v1l-5 5 5 5v1h-1l-5 -5 -5 5h-1v-1l5 -5l-5 -5z"></path></g>`),fh=H("Update",k`<g><path d="M1 1L3 3A7 7 0 0 0 1 8A7 7 0 0 0 8 15v-2A5 5 0 0 1 3 8A5 5 0 0 1 4.5 4.5L7 7v-6h-6zM8 1v2A5 5 0 0 1 13 8A5 5 0 0 1 11.5 11.5L9 9v6h6L13 13A7 7 0 0 0 15 8A7 7 0 0 0 8 1z"></path></g>`),ar=H("Presets",k`<g><path d="M1,1h6v6h-6zM3,3v2h2v-2zM9,1h6v6h-6zM11,3v2h2v-2zM1,9h6v6h-6zM3,11v2h2v-2zM9,9h6v6h-6zM11,11v2h2v-2z"></path></g>`),hr=p`<svg version="1.1" width="10" height="9">
  <g><path d="M1,8h8l-4,-6z"></path></g>
</svg>`,lr=p`<svg version="1.1" width="10" height="9">
  <g><path d="M1,1h8l-4,6z"></path></g>
</svg>`;var Q=v`
  :host {
    font-family: Arial, Helvetica, sans-serif;
  }

  @media (prefers-color-scheme: dark) {
    input,
    select {
      background: #222;
      color: #ddd;
    }
  }

  rr-window {
    bottom: calc(1em + 24px);
    right: 1em;
  }

  @media (max-width: 778px) {
    rr-window {
      bottom: calc(1em + 48px);
    }
  }

  button:has(svg[width="16"][height="16"]) {
    padding-inline: 0;
    width: 24px;
    height: 24px;
  }

  button > svg[width="16"][height="16"] {
    display: block;
    width: 16px;
    height: 16px;
    margin: auto;
  }
`;var X=function(r,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,i);else for(var a=r.length-1;a>=0;a--)(o=r[a])&&(n=(s<3?o(n):s>3?o(e,t,n):o(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},O=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)},cr,B=class extends g{constructor(){super(...arguments),this.label="",this.resizeable=!1,this.closeable=!1,this.fixed=!1,this.closed=!1,this.modal=!1,this.moving=!1}set position(e){this.pendingPosition=e}get position(){return this.pendingPosition||this.getPosition()}set size(e){this.pendingSize=e}get size(){return this.pendingSize||this.getSize()}static get styles(){return[Q,v`
        :host {
          position: absolute;
          width: auto;
          height: auto;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        :host(.inline) {
          position: initial;
          display: inline-block;
        }

        .label {
          display: flex;
          flex-direction: row;
          align-items: center;
          border: 2px solid var(--ips-border-color);
          border-bottom: none;
          border-radius: 10px 10px 0 0;
          padding: 3px 8px;
          background: var(--ips-label-bg-active);
          color: var(--ips-label-color);
          cursor: grab;
        }

        .label.modal {
          cursor: default;
        }

        :host(.inactive) .label {
          background: var(--ips-label-bg-idle);
        }

        .label.moving {
          cursor: grabbing;
        }

        .label-left,
        .label-middle,
        .label-right {
          display: inline-block;
        }

        .label-middle {
          flex: 1;
        }

        .label-left {
          margin-right: 8px;
        }

        .label-right {
          margin-left: 8px;
        }

        .content {
          position: relative;
          box-sizing: border-box;
          border: 2px solid var(--ips-border-color);
          border-radius: 0 0 10px 10px;
          padding: 1ex;
          background: var(--ips-background);
          color: var(--ips-color);
        }

        .contentView {
          width: 100%;
          height: 100%;
        }

        .content.resizeable {
          padding: 1ex max(1ex + 6px, 16px) max(1ex + 6px, 16px) 1ex;
          border-bottom-right-radius: 0;
        }

        .content.resizeable .contentView {
          overflow: auto;
        }

        .right-resizer {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 16px;
          width: 2px;
          border: solid var(--ips-background);
          border-width: 8px 4px 0 11px;
          background: var(--ips-border-color);
          cursor: ew-resize;
        }

        .bottom-resizer {
          position: absolute;
          left: 0;
          bottom: 0;
          right: 16px;
          height: 2px;
          border: solid var(--ips-background);
          border-width: 11px 0 4px 8px;
          border-bottom-left-radius: 10px;
          background: var(--ips-border-color);
          cursor: ns-resize;
        }

        .corner-resizer {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 16px;
          height: 16px;
          fill: var(--ips-border-color);
          cursor: nwse-resize;
        }

        .modalbg {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.5);
          z-index: -1;
        }

        :host {
          --ips-border-color: var(--rr-window-border-color, black);
          --ips-background: var(--rr-window-background, white);
          --ips-color: var(--rr-window-color, black);
          --ips-label-bg-idle: var(--rr-label-bg-idle, #53577f);
          --ips-label-bg-active: var(--rr-label-bg-active, #4f5fff);
          --ips-label-color: var(--rr-label-color, white);
        }

        @media (prefers-color-scheme: dark) {
          :host {
            --ips-border-color: var(--rr-window-border-color, #ddd);
            --ips-background: var(--rr-window-background, black);
            --ips-color: var(--rr-window-color, #ddd);
            --ips-label-bg-idle: var(--rr-label-bg-idle, #53577f);
            --ips-label-bg-active: var(--rr-label-bg-active, #1f2f7f);
            --ips-label-color: var(--rr-label-color, white);
          }
        }

        @media (max-width: 450px) {
          :host {
            position: initial;
            max-height: 40vh;
          }

          :host(.inactive) .content {
            display: none;
          }

          :host:has(.modalbg) {
            position: absolute;
            .content {
              display: block;
            }
          }

          .label {
            border: 1px solid var(--ips-border-color);
            border-bottom: none;
            border-radius: 0;
          }

          .content {
            border: 1px solid var(--ips-border-color);
            border-radius: 0;
            overflow: scroll;
          }

          .content.resizeable {
            padding: 1ex;
            width: 100% !important;
            height: 100% !important;
          }

          .right-resizer,
          .bottom-resizer,
          .corner-resizer {
            display: none;
          }
        }
      `]}render(){return this.closed?m:p`${this.modal?p`<div class="modalbg"></div>`:m}
      <div
        class="label${this.moving?" moving":""}${this.modal?" modal":""}"
        @pointerdown=${this.onLabelPointerDown}
      >
        <div class="label-left" @pointerdown=${this.noPointerDown}>
          <slot name="label-left"></slot>
        </div>
        <div class="label-middle"><slot name="label">${this.label}</slot></div>
        <div class="label-right" @pointerdown=${this.noPointerDown}>
          <slot name="label-right"></slot>${this.closeable?p`<button id="close" @click=${this.onClosePressed}>
                ${Vs}
              </button>`:m}
        </div>
      </div>
      <div class="content${this.resizeable?" resizeable":""}">
        <div class="contentView"><slot></slot></div>
        ${this.resizeable?p`<div
                class="right-resizer"
                @pointerdown=${this.onRightResizerPointerDown}
              ></div>
              <div
                class="bottom-resizer"
                @pointerdown=${this.onBottomResizerPointerDown}
              ></div>
              <div
                class="corner-resizer"
                @pointerdown=${this.onCornerResizerPointerDown}
              >
                ${Zs}
              </div>`:m}
      </div>`}connectedCallback(){super.connectedCallback(),this.addEventListener("click",e=>this.onSelect(e)),ke?.register(this)}disconnectedCallback(){super.disconnectedCallback(),ke?.unregister(this)}firstUpdated(e){super.firstUpdated(e),this.doUpdates(e)}updated(e){super.updated(e),this.doUpdates(e)}doUpdates(e){e.has("closed")&&(ke?.show(!this.closed,this),this.closed||(this.modal||(this.moveController=new N(new Li(this),0)),this.rightResizeController=new N(new xt(this,this.content,!0,!1),0),this.bottomResizeController=new N(new xt(this,this.content,!1,!0),0),this.cornerResizeController=new N(new xt(this,this.content,!0,!0),0),this.dispatchEvent(new Wi))),this.closed||(this.modal&&(this.pendingSize=void 0,this.pendingPosition=void 0,this.setCenterPosition(),setTimeout(()=>ke?.select(this),0)),this.pendingSize&&(this.setSize(this.pendingSize),this.pendingSize=void 0),this.pendingPosition&&(this.setPosition(this.pendingPosition),this.pendingPosition=void 0))}getPosition(){if(!(this.closed||this.offsetWidth==0&&this.offsetHeight==0)&&getComputedStyle(this).position=="absolute")return{top:this.offsetTop,left:this.offsetLeft,bottom:visualViewport.height-this.offsetTop-this.offsetHeight,right:visualViewport.width-this.offsetLeft-this.offsetWidth}}getSize(){if(!(!this.resizeable||!this.content||this.closed||this.offsetWidth==0&&this.offsetWidth==0)&&getComputedStyle(this).position=="absolute")return{width:this.offsetWidth,height:this.content.offsetHeight}}setCenterPosition(){let e=this.offsetWidth,t=this.offsetHeight;this.style.left=`calc(50vw - ${e/2}px)`,this.style.top=`calc(50vh - ${t/2}px)`,this.style.right="auto",this.style.bottom="auto"}setPosition(e){let t=visualViewport.width,i=visualViewport.height,s=e.left+this.offsetWidth<=t,n=e.right+this.offsetWidth<=t,o=e.top+this.offsetHeight<=i,a=e.bottom+this.offsetHeight<=i,h=e.left<=e.right,c=e.top<=e.bottom;h&&s?(this.style.left=`${e.left}px`,this.style.right="auto"):!h&&n?(this.style.right=`${e.right}px`,this.style.left="auto"):(this.style.left=`${Math.max(0,Math.floor((t-this.offsetWidth)/2))}px`,this.style.right="auto"),c&&o?(this.style.top=`${e.top}px`,this.style.bottom="auto"):!c&&a?(this.style.bottom=`${e.bottom}px`,this.style.top="auto"):(this.style.top=`${Math.max(0,Math.floor((i-this.offsetHeight)/2))}px`,this.style.bottom="auto")}setSize(e){if(this.content===void 0)return;let t=visualViewport.width,i=visualViewport.height,s=this.offsetTop+this.content.offsetTop,n=this.offsetLeft+this.content.offsetLeft;e.width>=t&&(e.width=Math.floor(t)),e.height+this.content.offsetTop>=i&&(e.height=Math.floor(i-this.content.offsetTop));let o=n+this.content.offsetWidth<=t,a=s+this.content.offsetHeight<=i;if(!o){let h=Math.floor(t-e.width-this.content.offsetLeft);this.style.left=`${h}px`,this.style.right="auto"}if(!a){let h=Math.floor(i-e.height-this.content.offsetTop);this.style.top=`${h}px`,this.style.bottom="auto"}ji(this,this.content,e.width,e.height)}onClosePressed(){this.closed=!0,this.dispatchEvent(new Ui)}onSelect(e){ke?.select(this)&&e.stopPropagation()}noPointerDown(e){e.stopPropagation()}onLabelPointerDown(e){this.fixed||this.moveController?.startDragging(e)}onRightResizerPointerDown(e){this.fixed||this.rightResizeController?.startDragging(e)}onBottomResizerPointerDown(e){this.fixed||this.bottomResizeController?.startDragging(e)}onCornerResizerPointerDown(e){this.fixed||this.cornerResizeController?.startDragging(e)}};X([l({type:String,reflect:!0}),O("design:type",String)],B.prototype,"label",void 0);X([l({type:Boolean,reflect:!0}),O("design:type",Boolean)],B.prototype,"resizeable",void 0);X([l({type:Boolean,reflect:!0}),O("design:type",Boolean)],B.prototype,"closeable",void 0);X([l({type:Boolean,reflect:!0}),O("design:type",Boolean)],B.prototype,"fixed",void 0);X([l({type:Boolean,reflect:!0}),O("design:type",Boolean)],B.prototype,"closed",void 0);X([l({type:Boolean,reflect:!0}),O("design:type",Boolean)],B.prototype,"modal",void 0);X([l({attribute:!1}),O("design:type",Object),O("design:paramtypes",[Object])],B.prototype,"position",null);X([l({attribute:!1}),O("design:type",Object),O("design:paramtypes",[Object])],B.prototype,"size",null);X([y(),O("design:type",Boolean)],B.prototype,"moving",void 0);X([w(".content"),O("design:type",typeof(cr=typeof HTMLDivElement<"u"&&HTMLDivElement)=="function"?cr:Object)],B.prototype,"content",void 0);B=X([x("rr-window")],B);function Ge(r){class e extends r{set closed(i){this.pendingClosed=i}get closed(){return this.pendingClosed!==void 0?this.pendingClosed:this.window?.closed||!1}set position(i){this.pendingPosition=i}get position(){return this.pendingPosition||this.window?.position}set size(i){this.pendingSize=i}get size(){return this.pendingSize||this.window?.size}firstUpdated(i){super.firstUpdated(i),this.doUpdate()}updated(i){super.updated(i),this.doUpdate()}doUpdate(){this.pendingClosed!==void 0&&this.window&&(this.window.closed=this.pendingClosed,this.pendingClosed=void 0),this.pendingSize!==void 0&&this.window&&(this.window.size=this.pendingSize,this.pendingSize=void 0),this.pendingPosition!==void 0&&this.window&&(this.window.position=this.pendingPosition,this.pendingPosition=void 0)}}return X([l({type:Boolean,reflect:!0}),O("design:type",Boolean),O("design:paramtypes",[Boolean])],e.prototype,"closed",null),X([l({attribute:!1}),O("design:type",Object),O("design:paramtypes",[Object])],e.prototype,"position",null),X([l({attribute:!1}),O("design:type",Object),O("design:paramtypes",[Object])],e.prototype,"size",null),e}function dr(r){let e=r.getBoundingClientRect(),t=e.left+window.scrollX,i=e.top+window.scrollY;r.style.left=`${t}px`,r.style.top=`${i}px`,r.style.right="auto",r.style.bottom="auto"}function xn(r,e,t){let i=r.offsetLeft,s=r.offsetTop;e>visualViewport.width-r.offsetWidth&&(e=visualViewport.width-r.offsetWidth),t>visualViewport.height-r.offsetHeight&&(t=visualViewport.height-r.offsetHeight),e<0&&(e=0),t<0&&(t=0),(e!=i||t!=s)&&ur(r,Math.floor(e),Math.floor(t))}function Sn(r,e,t,i){let s=r.offsetLeft,n=r.offsetTop,o=e.offsetTop;s+t>visualViewport.width&&(t=visualViewport.width-s),n+o+i>visualViewport.height&&(i=visualViewport.height-n-o),i<32&&(i=32),(t!=e.offsetWidth||i!=e.offsetHeight)&&ji(r,e,Math.floor(t),Math.floor(i))}function ur(r,e,t){r.style.left=e+"px",r.style.top=t+"px"}function ji(r,e,t,i){e.style.width=t+"px",e.style.height=i+"px",e.offsetWidth<r.offsetWidth&&(e.style.width=r.offsetWidth+"px")}var Li=class{constructor(e){this.window=e,this.elemX=e.offsetLeft,this.elemY=e.offsetTop}startDrag(){dr(this.window),this.window.moving=!0,this.elemX=this.window.offsetLeft,this.elemY=this.window.offsetTop}drag(e,t){xn(this.window,this.elemX+e,this.elemY+t)}finishDrag(){this.window.moving=!1,this.window.dispatchEvent(new si)}cancelDrag(){this.window.moving=!1,ur(this.window,this.elemX,this.elemY)}onClick(){}},xt=class{constructor(e,t,i,s){this.window=e,this.content=t,this.right=i,this.bottom=s,this.sizeX=t.offsetWidth,this.sizeY=t.offsetHeight}startDrag(){dr(this.window),this.sizeX=this.content.offsetWidth,this.sizeY=this.content.offsetHeight}drag(e,t){Sn(this.window,this.content,this.right?this.sizeX+e:this.sizeX,this.bottom?this.sizeY+t:this.sizeY)}finishDrag(){this.window.dispatchEvent(new si),this.window.dispatchEvent(new Oi)}cancelDrag(){ji(this.window,this.content,this.sizeX,this.sizeY)}onClick(){}},Ni=class{constructor(){this.windows=[]}register(e){this.windows.unshift(e),this.update()}unregister(e){let t=this.windows.findIndex(i=>i===e);t<0||(this.windows.splice(t,1),this.update())}show(e,t){e||this.hide(t)}select(e){if(this.windows[this.windows.length-1]===e)return!1;let t=this.windows.findIndex(i=>i===e&&!i.closed);return t<0?!1:(this.windows.splice(t,1),this.windows.push(e),this.update(),!0)}hide(e){if(this.windows[0]===e)return;let t=this.windows.findIndex(i=>i===e);t<0||(this.windows.splice(t,1),this.windows.unshift(e),this.update())}update(){if(this.windows.length==0)return;let e=this.windows.length-1;for(let t=0;t<e;++t)this.windows[t].classList.add("inactive"),this.windows[t].style.zIndex=String(t);this.windows[e].classList.remove("inactive"),this.windows[e].style.zIndex=String(e)}},ke;function pr(){ke||(ke=new Ni)}var si=class extends Event{constructor(){super("rr-window-moved",{bubbles:!0,composed:!0})}},Oi=class extends Event{constructor(){super("rr-window-resized",{bubbles:!0,composed:!0})}},Ui=class extends Event{constructor(){super("rr-window-closed",{bubbles:!0,composed:!0})}},Wi=class extends Event{constructor(){super("rr-window-open",{bubbles:!0,composed:!0})}};var Xe=function(r,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,i);else for(var a=r.length-1;a>=0;a--)(o=r[a])&&(n=(s<3?o(n):s>3?o(e,t,n):o(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},Qe=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)},Ie=class extends g{constructor(){super(...arguments),this.min=0,this.frequency=0,this._scale=1,this.step=1}get scale(){return this._scale}set scale(e){if(e!=1&&e!=1e3&&e!=1e6)return;let t=this._scale;this._scale=e,this.requestUpdate("scale",t)}static get styles(){return[v`
        input {
          width: 13ex;
        }

        @media (prefers-color-scheme: dark) {
          input,
          select {
            background: #222;
            color: #ddd;
          }
        }
      `]}render(){return p`<input
        type="number"
        id="frequency"
        .step=${String(this.step/this.scale)}
        .value=${String(this.frequency/this.scale)}
        @change=${this.onFrequencyChange}
      /><select id="scale" @change=${this.onScaleChange}>
        <option value="1" .selected=${this.scale==1}>Hz</option>
        <option value="1000" .selected=${this.scale==1e3}>kHz</option>
        <option value="1000000" .selected=${this.scale==1e6}>MHz</option>
      </select>`}onFrequencyChange(e){let t=e.target,i=Number(t.value);if(!isNaN(i)){let s=i*this.scale;if(s>=this.min&&(this.max===void 0||s<=this.max)){this.frequency=i*this.scale,this.dispatchEvent(new Event("change"));return}}t.value=String(this.frequency/this.scale)}onScaleChange(e){let t=e.target,i=Number(t.selectedOptions[0].value);this.scale=i,this.dispatchEvent(new Event("scale-change"))}};Xe([l({type:Number,reflect:!0}),Qe("design:type",Number)],Ie.prototype,"min",void 0);Xe([l({type:Number,reflect:!0}),Qe("design:type",Number)],Ie.prototype,"max",void 0);Xe([l({type:Number,reflect:!0}),Qe("design:type",Number)],Ie.prototype,"frequency",void 0);Xe([l({type:Number,reflect:!0}),Qe("design:type",Number),Qe("design:paramtypes",[Number])],Ie.prototype,"scale",null);Xe([l({type:Number,reflect:!0}),Qe("design:type",Number)],Ie.prototype,"step",void 0);Ie=Xe([x("rr-frequency-input")],Ie);var F=function(r,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,i);else for(var a=r.length-1;a>=0;a--)(o=r[a])&&(n=(s<3?o(n):s>3?o(e,t,n):o(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},z=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)},fr,mr,R=class extends Ge(g){constructor(){super(...arguments),this.inline=!1,this.hidden=!1,this.tunedFrequency=885e5,this.scale=1e3,this.tuningStep=1e3,this.scheme="WBFM",this.bandwidth=15e4,this.stereo=!0,this.squelch=0,this.gain=null,this.sortColumn="frequency",this.presets=[],this.sortedIndices=[],this.editorOpen=!1,this.editorContent={name:"",tunedFrequency:this.tunedFrequency,scale:this.scale,tuningStep:this.tuningStep,scheme:this.scheme,bandwidth:this.bandwidth,stereo:this.stereo,squelch:this.squelch,gain:this.gain}}static get styles(){return[Q,v`
        table {
          border-collapse: collapse;
          width: 100%;
          cursor: default;
        }

        tr.active {
          background: #7bd;
        }

        tr:nth-child(even) {
          background: #eee;
          &.active {
            background: #6bd;
          }
        }

        td:nth-child(n + 2) {
          width: 0;
        }

        th,
        td {
          text-wrap: nowrap;
          padding: 0.4ex 0.8ex;
          cursor: pointer;
        }

        td:first-child {
          max-width: 15ex;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        svg {
          vertical-align: text-top;
        }

        a svg {
          fill: #22e;
        }

        .buttonIllustration {
          position: relative;
          top: 0.5ex;
          margin-top: -2ex;
          z-index: 0;
        }

        #preset-editor {
          bottom: inherit;
          right: inherit;
          margin: auto;

          div:first-child {
            margin-bottom: 1ex;
          }
          div:last-child {
            margin-top: 1ex;
          }
        }

        @media (prefers-color-scheme: dark) {
          tr.active {
            background: #135;
          }

          tr:nth-child(even) {
            background: #333;
            &.active {
              background: #147;
            }
          }

          a svg {
            fill: #55f;
          }
        }
      `]}render(){return p`<rr-window
        label=${this.selectedIndex===void 0?"Presets":`Current preset: ${this.presets[this.selectedIndex].name}`}
        id="presets"
        class=${this.inline?"inline":""}
        closeable
        .closed=${this.closed}
        .position=${this.position}
        .size=${this.size}
        .fixed=${this.inline}
        .resizeable=${!0}
      >
        <button
          slot="label-left"
          .disabled=${this.selectedIndex!==void 0}
          @click=${this.onAddClick}
        >
          ${Ii}
        </button>
        <table>
          <tr>
            <th id="name" @click=${this.onHeaderClick}>
              Name${this.getSortArrow("name")}
            </th>
            <th id="frequency" @click=${this.onHeaderClick}>
              Frequency${this.getSortArrow("frequency")}
            </th>
            <th id="mode" @click=${this.onHeaderClick}>
              Mode${this.getSortArrow("mode")}
            </th>
            <th></th>
          </tr>
          ${this.sortedIndices.map(e=>p`<tr
                data-index=${e}
                class=${e==this.selectedIndex?"active":""}
                @click=${this.onRowClick}
              >
                <td>${this.presets[e].name}</td>
                <td>
                  ${ri(this.presets[e].tunedFrequency,this.presets[e].scale)}
                </td>
                <td>${this.presets[e].scheme}</td>
                <td>
                  <a href="javascript:0" @click=${this.onRowEditClick}
                    >${nr}</a
                  ><a href="javascript:0" @click=${this.onRowDeleteClick}
                    >${or}</a
                  >
                </td>
              </tr>`)}
        </table>
        ${this.presets.length==0?p`<p style="max-width: 50ex">
              You can use Presets to flip quickly to your favorite stations or
              frequencies. Click the
              <button disabled class="buttonIllustration">${Ii}</button>
              button on this window's top left corner to add the current
              frequency to the presets.
            </p>`:m}
      </rr-window>

      <rr-window
        id="preset-editor"
        .label=${this.editorTitle||""}
        closeable
        modal
        .closed=${!this.editorOpen}
        @rr-window-open=${this.onEditorOpen}
        @rr-window-closed=${this.onEditorClosed}
      >
        <div>
          <label for="presetName">Name: </label
          ><input
            id="presetName"
            type="text"
            .value=${this.editorContent.name}
            @keydown=${this.onEditorNameKeydown}
            @input=${this.onEditorNameChange}
          />
        </div>
        <div>
          Frequency:
          <b
            >${ri(this.editorContent.tunedFrequency,this.editorContent.scale)}</b
          >, Tuning step:
          <b>${ri(this.editorContent.tuningStep,1)}</b>
        </div>
        <div>
          Modulation:
          <b
            >${this.editorContent.scheme}${_(this.editorContent.scheme).hasStereo()?this.editorContent.stereo?" Stereo":" Mono":m}</b
          >${_(this.editorContent.scheme).hasBandwidth()?p`, Bandwidth:
                <b>${ri(this.editorContent.bandwidth,1)}</b>`:m}
        </div>
        <div>
          Gain:
          <b
            >${this.editorContent.gain===null?"Auto":this.editorContent.gain}</b
          >${_(this.editorContent.scheme).hasSquelch()?p`, Squelch: <b>${this.editorContent.squelch}</b>`:m}
        </div>
        ${this.editorIndex!==void 0?p`<div>
              <button @click=${this.onEditorReplaceClick}>
                Replace with current settings
              </button>
            </div>`:m}
        <div>
          <button
            .disabled=${this.editorValidationError!==void 0}
            @click=${this.onEditorSaveClick}
          >
            Save</button
          >${this.editorValidationError!==void 0?p` <i>${this.editorValidationError}</i>`:m}
        </div>
      </rr-window>`}willUpdate(e){super.willUpdate(e),(e.has("presets")||e.has("sortColumn"))&&this.updatePresetLists(),this.findSelectedIndex()}updatePresetLists(){let e=[...this.presets.keys()];e.sort(this.getSortFormula()),this.sortedIndices=e}onAddClick(e){this.editorTitle="New Preset",this.editorIndex=void 0,this.editorContent={name:"",tunedFrequency:this.tunedFrequency,scale:this.scale,tuningStep:this.tuningStep,scheme:this.scheme,bandwidth:this.bandwidth,stereo:this.stereo,squelch:this.squelch,gain:this.gain},this.checkValidEditor(),this.editorOpen=!0}onEditorNameKeydown(e){e.key=="Enter"?(e.preventDefault(),this.onEditorSaveClick()):e.key=="Escape"&&(e.preventDefault(),this.onEditorClosed())}onEditorNameChange(e){let i=e.target.value;this.editorContent.name=i,this.checkValidEditor()}onEditorReplaceClick(){this.editorContent={name:this.editorContent.name,tunedFrequency:this.tunedFrequency,scale:this.scale,tuningStep:this.tuningStep,scheme:this.scheme,bandwidth:this.bandwidth,stereo:this.stereo,squelch:this.squelch,gain:this.gain},this.checkValidEditor()}checkValidEditor(){if(this.editorContent.name==""){this.editorValidationError="Preset name is empty";return}let e=this.presets.findIndex(t=>t.name==this.editorContent.name);if(e>=0&&e!=this.editorIndex){this.editorValidationError="There is another preset with that name";return}if(e=this.presets.findIndex(t=>gr(t,this.editorContent)),e>=0&&e!=this.editorIndex){this.editorValidationError=`There is an identical preset: ${this.presets[e].name}`;return}this.editorValidationError=void 0}onEditorSaveClick(){let e=[...this.presets];this.editorIndex===void 0||this.editorIndex>=e.length?e.push({...this.editorContent}):e[this.editorIndex]={...this.editorContent},this.editorOpen=!1,this.presets=e,this.dispatchEvent(new ni)}onEditorOpen(){this.presetName&&this.presetName.focus()}onEditorClosed(){this.editorOpen=!1}onRowClick(e){let t=this.getIndex(e);t!==void 0&&(this.selectedIndex=t,this.dispatchEvent(new Hi))}onRowEditClick(e){e.stopPropagation();let t=this.getIndex(e);if(t===void 0)return;let i={...this.presets[t]};this.editorTitle=`Editing Preset "${i.name}"`,this.editorIndex=t,this.editorContent=i,this.checkValidEditor(),this.editorOpen=!0}onRowDeleteClick(e){e.stopPropagation();let t=this.getIndex(e);if(t===void 0)return;let i=[...this.presets];i.splice(t,1),this.selectedIndex=void 0,this.presets=i,this.dispatchEvent(new ni)}getIndex(e){let t=e.target;for(;t!=null&&t.tagName!="TR";)t=t.parentElement;if(t==null)return;let i=Number(t.dataset.index);if(!isNaN(i))return i}onHeaderClick(e){let t=e.currentTarget.id,i=`-${t}`;this.sortColumn===t?this.sortColumn=i:this.sortColumn=t,this.dispatchEvent(new Vi)}getSortArrow(e){return this.sortColumn===e?lr:this.sortColumn===`-${e}`?hr:m}getSortFormula(){let e=this.sortColumn||"frequency",t=e[0]=="-";t&&(e=e.substring(1));let i;switch(e){case"name":i=(s,n)=>this.presets[s].name.localeCompare(this.presets[n].name);break;case"mode":i=(s,n)=>this.presets[s].scheme.localeCompare(this.presets[n].scheme);break;default:i=(s,n)=>this.presets[s].tunedFrequency-this.presets[n].tunedFrequency;break}return t?(s,n)=>i(n,s):i}findSelectedIndex(){let e=this.presets.findIndex(t=>gr(t,this));e<0?this.selectedIndex=void 0:this.selectedIndex=e}};F([l({attribute:!1}),z("design:type",Boolean)],R.prototype,"inline",void 0);F([l({attribute:!1}),z("design:type",Boolean)],R.prototype,"hidden",void 0);F([l({attribute:!1}),z("design:type",Number)],R.prototype,"tunedFrequency",void 0);F([l({attribute:!1}),z("design:type",Number)],R.prototype,"scale",void 0);F([l({attribute:!1}),z("design:type",Number)],R.prototype,"tuningStep",void 0);F([l({attribute:!1}),z("design:type",Object)],R.prototype,"scheme",void 0);F([l({attribute:!1}),z("design:type",Number)],R.prototype,"bandwidth",void 0);F([l({attribute:!1}),z("design:type",Boolean)],R.prototype,"stereo",void 0);F([l({attribute:!1}),z("design:type",Number)],R.prototype,"squelch",void 0);F([l({attribute:!1}),z("design:type",Object)],R.prototype,"gain",void 0);F([l({attribute:!1}),z("design:type",Number)],R.prototype,"selectedIndex",void 0);F([l({attribute:!1}),z("design:type",String)],R.prototype,"sortColumn",void 0);F([l({attribute:!1}),z("design:type",Array)],R.prototype,"presets",void 0);F([y(),z("design:type",Array)],R.prototype,"sortedIndices",void 0);F([y(),z("design:type",String)],R.prototype,"editorTitle",void 0);F([y(),z("design:type",Boolean)],R.prototype,"editorOpen",void 0);F([y(),z("design:type",Number)],R.prototype,"editorIndex",void 0);F([y(),z("design:type",String)],R.prototype,"editorValidationError",void 0);F([y(),z("design:type",Object)],R.prototype,"editorContent",void 0);F([w("#presets"),z("design:type",typeof(fr=typeof B<"u"&&B)=="function"?fr:Object)],R.prototype,"window",void 0);F([w("#presetName"),z("design:type",typeof(mr=typeof HTMLInputElement<"u"&&HTMLInputElement)=="function"?mr:Object)],R.prototype,"presetName",void 0);R=F([x("rr-presets")],R);var Hi=class extends Event{constructor(){super("rr-preset-selected",{bubbles:!0,composed:!0})}},ni=class extends Event{constructor(){super("rr-presets-changed",{bubbles:!0,composed:!0})}},Vi=class extends Event{constructor(){super("rr-presets-sorted",{bubbles:!0,composed:!0})}};function gr(r,e){return r.tunedFrequency===e.tunedFrequency&&r.scale===e.scale&&r.tuningStep===e.tuningStep&&r.bandwidth===e.bandwidth&&r.stereo===e.stereo&&r.squelch===e.squelch&&r.gain===e.gain}function ri(r,e){switch(e){case 1e3:return`${String(r/1e3)} kHz`;case 1e6:return`${String(r/1e6)} MHz`;default:return`${String(r)} Hz`}}var T=function(r,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,i);else for(var a=r.length-1;a>=0;a--)(o=r[a])&&(n=(s<3?o(n):s>3?o(e,t,n):o(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},I=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)},br,q=class extends Ge(g){constructor(){super(...arguments),this.inline=!1,this.showSettings=!0,this.showHelp=!0,this.errorState=!1,this.playing=!1,this.scale=1e3,this.centerFrequency=885e5,this.tunedFrequency=885e5,this.tuningStep=1e3,this.availableSchemes=je(),this.scheme="WBFM",this.bandwidth=15e4,this.stereo=!0,this.squelch=0,this.stereoStatus=!1,this.gain=null,this.gainDisabled=!1,this.savedGain=0}static get styles(){return[Q,v`
        rr-window {
          right: auto;
          left: 1em;
        }

        .cfgBlock {
          display: inline-flex;
          flex-direction: column;
        }

        #bandwidth {
          width: 9ex;
        }

        #stereoIcon {
          vertical-align: bottom;
          fill: #bbb;
        }

        #stereoIcon.stereo {
          fill: #060;
        }

        #squelch {
          width: 12ex;
        }

        @media (prefers-color-scheme: dark) {
          #stereoIcon {
            fill: #666;
          }

          #stereoIcon.stereo {
            fill: #0b0;
          }
        }

        label[for="centerFrequency"],
        label[for="tunedFrequency"],
        label[for="tuningStep"] {
          width: 16ex;
          display: inline-block;
          text-align: right;
          padding-right: 0.5ex;
        }
      `]}render(){return p`<rr-window
      label="Controls"
      id="controls"
      class=${this.inline?"inline":""}
      .position=${this.position}
      .fixed=${this.inline}
    >
      ${this.errorState?p`<button slot="label-left" id="errorState" disabled>
            ${rr}
          </button>`:this.playing?p`<button slot="label-left" id="stop" @click=${this.onStop}>
              ${Gs}
            </button>`:p`<button slot="label-left" id="start" @click=${this.onStart}>
              ${Qs}
            </button>`}
      <button slot="label-right" id="presets" @click=${this.onPresets}>
        ${ar}
      </button>
      ${this.showSettings?p`<button
            slot="label-right"
            id="settings"
            @click=${this.onSettings}
          >
            ${Xs}
          </button>`:m}
      ${this.showHelp?p`<a slot="label-right" href="help.html" target="_blank"
            ><button id="help">${Ys}</button></a
          >`:m}
      <div>
        <label for="centerFrequency">Center frequency: </label
        ><rr-frequency-input
          id="centerFrequency"
          .min=${0}
          .max=${18e8}
          .frequency=${this.centerFrequency}
          .scale=${this.scale}
          .step=${this.tuningStep}
          @change=${this.onCenterFrequencyChange}
          @scale-change=${this.onScaleChange}
        ></rr-frequency-input>
      </div>
      <div>
        <label for="tunedFrequency">Tuned frequency: </label
        ><rr-frequency-input
          id="tunedFrequency"
          min=${0}
          max=${18e8}
          .frequency=${this.tunedFrequency}
          .scale=${this.scale}
          .step=${this.tuningStep}
          @change=${this.onTunedFrequencyChange}
          @scale-change=${this.onScaleChange}
        ></rr-frequency-input>
      </div>
      <div>
        <label for="tuningStep">Tuning step: </label
        ><input
          id="tuningStep"
          type="number"
          min="1"
          max="500000"
          .value=${String(this.tuningStep)}
          @change=${this.onTuningStepChange}
        />
        Hz
      </div>
      <div>
        <label for="scheme">Modulation: </label>
        <select id="scheme" @change=${this.onModeChange}>
          ${this.availableSchemes.map(e=>p`<option value="${e}" .selected=${this.scheme==e}>
                ${e}
              </option>`)}
        </select>
        <div class="cfgBlock">
          <span .hidden=${!_(this.scheme).hasBandwidth()}
            ><label for="bandwidth">Bandwidth: </label
            ><input
              type="number"
              id="bandwidth"
              min="0"
              max="20000"
              step="1"
              .value=${String(this.bandwidth)}
              @change=${this.onBandwidthChange} /></span
          ><span .hidden=${!_(this.scheme).hasStereo()}>
            <label for="stereo">Stereo: </label
            ><input
              type="checkbox"
              id="stereo"
              .checked=${this.stereo}
              @change=${this.onStereoChange}
            />
            <span
              id="stereoIcon"
              class=${this.stereoStatus?"stereo":"mono"}
              .hidden=${!_(this.scheme).hasStereo()||!this.stereo}
              >${sr}</span
            ></span
          ><span .hidden=${!_(this.scheme).hasSquelch()}>
            <label for="squelch">Squelch: </label
            ><input
              type="range"
              id="squelch"
              min="0"
              max="6"
              step="0.1"
              .value=${String(this.squelch)}
              @input=${this.onSquelchChange}
            />
          </span>
        </div>
      </div>
      <div>
        <label for="gain">Gain: </label
        ><input
          type="range"
          id="gain"
          min="0"
          max="50"
          .value=${this.gain===null?String(this.savedGain):String(this.gain)}
          .disabled=${this.gain===null||this.gainDisabled}
          @input=${this.onGainInput}
        />
        <input
          type="checkbox"
          id="gainAuto"
          .checked=${this.gain===null||this.gainDisabled}
          .disabled=${this.gainDisabled}
          @change=${this.onGainAutoChange}
        />
        <label for="gainAuto">Auto gain</label>
      </div>
    </rr-window>`}onStart(){this.dispatchEvent(new Zi)}onStop(){this.dispatchEvent(new Gi)}onPresets(){this.dispatchEvent(new Qi)}onSettings(){this.dispatchEvent(new Xi)}onScaleChange(e){let t=e.target;this.scale=t.scale,this.dispatchEvent(new Yi)}onCenterFrequencyChange(e){let t=e.target;this.centerFrequency=t.frequency,this.dispatchEvent(new Ki)}onTunedFrequencyChange(e){let t=e.target;this.tunedFrequency=t.frequency,this.dispatchEvent(new Ji)}onTuningStepChange(e){let t=e.target,i=Number(t.value);if(isNaN(i)){t.value=String(this.tuningStep);return}this.tuningStep=i,this.dispatchEvent(new es)}onModeChange(e){this.scheme=e.target.selectedOptions[0].value,this.dispatchEvent(new ts)}onBandwidthChange(e){let t=e.target,i=Number(t.value);if(isNaN(i)){t.value=String(this.bandwidth);return}this.bandwidth=i,this.dispatchEvent(new is)}onStereoChange(e){let t=e.target;this.stereo=t.checked,this.dispatchEvent(new ss)}onSquelchChange(e){let t=e.target,i=Number(t.value);(isNaN(i)||i<0)&&(i=0,t.value=String(i)),i>6&&(i=6,t.value=String(i)),this.squelch=i,this.dispatchEvent(new rs)}onGainInput(e){let t=e.target,i=Number(t.value);if(isNaN(i)){t.value=this.gain==null?"":String(this.gain);return}this.gain=i,this.dispatchEvent(new oi)}onGainAutoChange(e){e.target.checked?(this.gain!=null&&(this.savedGain=this.gain),this.gain=null):this.gain=this.savedGain,this.dispatchEvent(new oi)}};T([l({attribute:!1}),I("design:type",Boolean)],q.prototype,"inline",void 0);T([l({attribute:!1}),I("design:type",Boolean)],q.prototype,"showSettings",void 0);T([l({attribute:!1}),I("design:type",Boolean)],q.prototype,"showHelp",void 0);T([l({attribute:!1}),I("design:type",Boolean)],q.prototype,"errorState",void 0);T([l({attribute:!1}),I("design:type",Boolean)],q.prototype,"playing",void 0);T([l({attribute:!1}),I("design:type",Number)],q.prototype,"scale",void 0);T([l({attribute:!1}),I("design:type",Number)],q.prototype,"centerFrequency",void 0);T([l({attribute:!1}),I("design:type",Number)],q.prototype,"tunedFrequency",void 0);T([l({attribute:!1}),I("design:type",Number)],q.prototype,"tuningStep",void 0);T([l({attribute:!1}),I("design:type",Array)],q.prototype,"availableSchemes",void 0);T([l({attribute:!1}),I("design:type",Object)],q.prototype,"scheme",void 0);T([l({attribute:!1}),I("design:type",Number)],q.prototype,"bandwidth",void 0);T([l({attribute:!1}),I("design:type",Boolean)],q.prototype,"stereo",void 0);T([l({attribute:!1}),I("design:type",Number)],q.prototype,"squelch",void 0);T([l({attribute:!1}),I("design:type",Boolean)],q.prototype,"stereoStatus",void 0);T([l({attribute:!1}),I("design:type",Object)],q.prototype,"gain",void 0);T([l({attribute:!1}),I("design:type",Boolean)],q.prototype,"gainDisabled",void 0);T([y(),I("design:type",Number)],q.prototype,"savedGain",void 0);T([w("rr-window"),I("design:type",typeof(br=typeof B<"u"&&B)=="function"?br:Object)],q.prototype,"window",void 0);q=T([x("rr-main-controls")],q);var Zi=class extends Event{constructor(){super("rr-start",{bubbles:!0,composed:!0})}},Gi=class extends Event{constructor(){super("rr-stop",{bubbles:!0,composed:!0})}},Qi=class extends Event{constructor(){super("rr-presets",{bubbles:!0,composed:!0})}},Xi=class extends Event{constructor(){super("rr-settings",{bubbles:!0,composed:!0})}},Yi=class extends Event{constructor(){super("rr-scale-changed",{bubbles:!0,composed:!0})}},Ki=class extends Event{constructor(){super("rr-center-frequency-changed",{bubbles:!0,composed:!0})}},Ji=class extends Event{constructor(){super("rr-tuned-frequency-changed",{bubbles:!0,composed:!0})}},es=class extends Event{constructor(){super("rr-tuning-step-changed",{bubbles:!0,composed:!0})}},ts=class extends Event{constructor(){super("rr-scheme-changed",{bubbles:!0,composed:!0})}},is=class extends Event{constructor(){super("rr-bandwidth-changed",{bubbles:!0,composed:!0})}},ss=class extends Event{constructor(){super("rr-stereo-changed",{bubbles:!0,composed:!0})}},rs=class extends Event{constructor(){super("rr-squelch-changed",{bubbles:!0,composed:!0})}},oi=class extends Event{constructor(){super("rr-gain-changed",{bubbles:!0,composed:!0})}};var me=function(r,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,i);else for(var a=r.length-1;a>=0;a--)(o=r[a])&&(n=(s<3?o(n):s>3?o(e,t,n):o(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},Me=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)},wr,Rn=(()=>{let r=new Set([256e3]);for(let t=1024e3;t<3e6;t+=256e3)r.add(t);for(let t=96e4;t<3e6;t+=192e3)r.add(t);let e=[...r];return e.sort((t,i)=>Number(t)-Number(i)),e})(),$n=(()=>{let r=new Array;for(let e=32;e<=32768;e*=2)r.push(e);return r})(),Mn=new Map([["default","Default method"],["directSampling","Direct sampling"],["upconverter","External upconverter"]]),Cn=new Map([["Q","Q"],["I","I"]]),ee=class extends Ge(g){constructor(){super(...arguments),this.inline=!1,this.playing=!1,this.sampleRate=1024e3,this.ppm=0,this.fftSize=2048,this.biasTee=!1,this.lowFrequencyMethod={name:"default",channel:"Q",frequency:1e8,biasTee:!1}}static get styles(){return[Q]}render(){return p`<rr-window
      label="Settings"
      id="settings"
      closeable
      class=${this.inline?"inline":""}
      .position=${this.position}
      .fixed=${this.inline}
    >
      <div>
        <label for="sampleRate">Sample rate: </label
        ><select
          id="sampleRate"
          .disabled=${this.playing}
          @change=${this.onSampleRateChange}
        >
          ${Rn.map(e=>p`<option value=${e} .selected=${this.sampleRate==e}>
                ${e}
              </option>`)}
        </select>
      </div>
      <div>
        <label for="ppm">Clock correction: </label
        ><input
          id="ppm"
          type="number"
          min="-500"
          max="500"
          step="1"
          .value=${String(this.ppm)}
          @change=${this.onPpmChange}
        />PPM
      </div>
      <div>
        <label for="fftSize">FFT size: </label
        ><select id="fftSize" @change=${this.onFftSizeChange}>
          ${$n.map(e=>p`<option value=${e} .selected=${this.fftSize==e}>
                ${e}
              </option>`)}
        </select>
      </div>
      <div>
        <label for="biasTee">Bias T: </label
        ><input
          type="checkbox"
          id="biasTee"
          .checked=${this.biasTee}
          @change=${this.onBiasTeeChange}
        />
      </div>
      <div>
        <label for="lowFreqMethod">0-29MHz method: </label
        ><select id="lowFreqMethod" @change=${this.onLowFrequencyMethodChange}>
          ${Mn.entries().map(([e,t])=>p`<option
                value=${String(e)}
                .selected=${this.lowFrequencyMethod.name==e}
              >
                ${t}
              </option>`)}
        </select>
      </div>
      <div .hidden=${this.lowFrequencyMethod.name!="directSampling"}>
        <label for="directSamplingChannel">Direct sampling channel: </label
        ><select
          id="directSamplingChannel"
          @change=${this.onDirectSamplingChannelChange}
        >
          ${Cn.entries().map(([e,t])=>p`<option
                value=${String(e)}
                .selected=${this.lowFrequencyMethod.channel==e}
              >
                ${t}
              </option>`)}
        </select>
      </div>
      <div .hidden=${this.lowFrequencyMethod.name!="upconverter"}>
        <label for="upconverterFrequency">Upconverter frequency: </label
        ><input
          type="number"
          id="upconverterFrequency"
          min="1"
          max="1800000000"
          step="1"
          .value=${String(this.lowFrequencyMethod.frequency)}
          @change=${this.onUpconverterFrequencyChange}
        />
      </div>
      <div .hidden=${this.lowFrequencyMethod.name!="upconverter"}>
        <label for="upconverterBiasTee">Use bias T for upconverter: </label
        ><input
          type="checkbox"
          id="upconverterBiasTee"
          .checked=${this.lowFrequencyMethod.biasTee}
          @change=${this.onUpconverterBiasTeeChange}
        />
      </div>
    </rr-window>`}onSampleRateChange(e){this.sampleRate=Number(e.target.selectedOptions[0].value),this.dispatchEvent(new ns)}onPpmChange(e){let t=e.target,i=Number(t.value);if(isNaN(i)){t.value=String(this.ppm);return}this.ppm=i,this.dispatchEvent(new os)}onFftSizeChange(e){this.fftSize=Number(e.target.selectedOptions[0].value),this.dispatchEvent(new as)}onBiasTeeChange(e){this.biasTee=e.target.checked,this.dispatchEvent(new hs)}onLowFrequencyMethodChange(e){let t={...this.lowFrequencyMethod};t.name=e.target.selectedOptions[0].value,this.lowFrequencyMethod=t,this.dispatchEvent(new Ye)}onDirectSamplingChannelChange(e){let t={...this.lowFrequencyMethod};t.channel=e.target.selectedOptions[0].value,this.lowFrequencyMethod=t,this.dispatchEvent(new Ye)}onUpconverterFrequencyChange(e){let t=e.target,i=Number(t.value);if(isNaN(i)){t.value=String(this.lowFrequencyMethod.frequency);return}let s={...this.lowFrequencyMethod};s.frequency=i,this.lowFrequencyMethod=s,this.dispatchEvent(new Ye)}onUpconverterBiasTeeChange(e){let t={...this.lowFrequencyMethod};t.biasTee=e.target.checked,this.lowFrequencyMethod=t,this.dispatchEvent(new Ye)}};me([l({attribute:!1}),Me("design:type",Boolean)],ee.prototype,"inline",void 0);me([l({attribute:!1}),Me("design:type",Boolean)],ee.prototype,"playing",void 0);me([l({attribute:!1}),Me("design:type",Number)],ee.prototype,"sampleRate",void 0);me([l({attribute:!1}),Me("design:type",Number)],ee.prototype,"ppm",void 0);me([l({attribute:!1}),Me("design:type",Number)],ee.prototype,"fftSize",void 0);me([l({attribute:!1}),Me("design:type",Boolean)],ee.prototype,"biasTee",void 0);me([l({attribute:!1}),Me("design:type",Object)],ee.prototype,"lowFrequencyMethod",void 0);me([w("rr-window"),Me("design:type",typeof(wr=typeof B<"u"&&B)=="function"?wr:Object)],ee.prototype,"window",void 0);ee=me([x("rr-settings")],ee);var ns=class extends Event{constructor(){super("rr-sample-rate-changed",{bubbles:!0,composed:!0})}},os=class extends Event{constructor(){super("rr-ppm-changed",{bubbles:!0,composed:!0})}},as=class extends Event{constructor(){super("rr-fft-size-changed",{bubbles:!0,composed:!0})}},hs=class extends Event{constructor(){super("rr-bias-tee-changed",{bubbles:!0,composed:!0})}},Ye=class extends Event{constructor(){super("rr-low-frequency-method-changed",{bubbles:!0,composed:!0})}};var Ke=class extends CustomEvent{constructor(e){super("spectrum-tap",{detail:e,bubbles:!0,composed:!0})}},Le=class extends CustomEvent{constructor(e){super("spectrum-drag",{detail:e,bubbles:!0,composed:!0})}},ai=class extends CustomEvent{constructor(e){super("spectrum-highlight-changed",{detail:e,bubbles:!0,composed:!0})}},Ne=class extends CustomEvent{constructor(e){super("spectrum-zoom",{detail:e,bubbles:!0,composed:!0})}},St=class extends CustomEvent{constructor(e){super("spectrum-decibel-range-changed",{detail:e,bubbles:!0,composed:!0})}};var Y=class{constructor(e,t,i,s,n){this.width=t;this.bins=i;this.centerFreq=s;this.bandwidth=n;this.leftBin=Math.floor(e.leftFraction*i),this.visibleBins=Math.floor(e.spanFraction*i),this.leftFrequency=this.binNumberToFrequency(this.leftBin-.5),this.rightFrequency=this.binNumberToFrequency(this.leftBin+this.visibleBins-.5)}zoomed(e){return(e*this.bins-this.leftBin+.5)/this.visibleBins}unzoomed(e){return(this.leftBin+this.visibleBins*e-.5)/this.bins}screenBinToFftBin(e){return(e+this.bins/2)%this.bins}leftCoordToBinNumber(e){return Math.round(this.leftBin+e*this.visibleBins/this.width)}binNumberToCenterCoord(e){return this.width*(e+.5-this.leftBin)/this.visibleBins}binNumberToFrequency(e){return this.centerFreq&&this.bandwidth?this.centerFreq+this.bandwidth*(e/this.bins-.5):this.centerFreq||0}};var yr=1,vr=16,S=class r{constructor(e,t){e===void 0&&(e=1),t===void 0&&(t=.5),e<yr&&(e=yr),e>vr&&(e=vr);let i=1/(2*e);t-i<0&&(t=i),t+i>1&&(t=1-i),this.center=t,this.level=e}zoomed(e){return .5+this.level*(e-this.center)}unzoomed(e){return this.center+(e-.5)/this.level}get leftFraction(){return this.center-1/(2*this.level)}get rightFraction(){return this.center+1/(2*this.level)}get spanFraction(){return 1/this.level}isVisible(e){let t=this.zoomed(e);return 0<=t&&t<1}withCenter(e){return new r(this.level,e)}withMovedCenter(e){return this.withCenter(this.center+e)}withLevel(e){return new r(e,this.center)}withLevelInContext(e,t){let i=this.zoomed(t);if(i<0||i>=1)return this.withLevel(e);let s=t+(.5-i)/e;return new r(e,s)}},W=new S;var Je=function(r,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,i);else for(var a=r.length-1;a>=0;a--)(o=r[a])&&(n=(s<3?o(n):s>3?o(e,t,n):o(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},et=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)},xr,Sr,ce=class extends g{static get styles(){return[v`
        #scope {
          color: var(--rr-scope-color, yellow);
          width: 100%;
          height: 100%;
        }
      `]}render(){return p`<canvas id="scope"></canvas>`}constructor(){super(),this.minDecibels=-100,this.maxDecibels=-30,this.fftSize=2048,this.zoom=W,this.spectrum=new Float32Array(this.fftSize),this.width=this.fftSize,this.addEventListener("click",e=>this.onClick(e))}addFloatSpectrum(e){this.fftSize!=e.length&&(this.fftSize=e.length,this.spectrum=new Float32Array(this.fftSize)),this.spectrum.set(e),this.redraw()}updated(e){super.updated(e),e.has("zoom")&&this.redraw()}redraw(){let e=this.getContext();if(!e)return;let t=e.canvas.offsetWidth,i=e.canvas.offsetHeight;e.canvas.width!=t&&(e.canvas.width=t),e.canvas.height!=i&&(e.canvas.height=i),this.width!=t&&(this.width=t);let s=this.minDecibels,n=this.maxDecibels,o=n-s,a=(1-i)/o;e.clearRect(0,0,e.canvas.width,e.canvas.height),e.strokeStyle=getComputedStyle(this.canvas).getPropertyValue("color"),e.beginPath();let h=new Y(this.zoom,this.width,this.fftSize),c=d=>(this.spectrum[h.screenBinToFftBin(d)]-n)*a;if(h.visibleBins<=t){let d=u=>h.binNumberToCenterCoord(u);e.moveTo(d(h.leftBin-1),c(h.leftBin-1));for(let u=0;u<h.visibleBins+1;++u)e.lineTo(d(h.leftBin+u),c(h.leftBin+u))}else for(let d=0;d<t;++d){let u=h.leftCoordToBinNumber(d),b=h.leftCoordToBinNumber(d+1),f=c(u);for(let E=u+1;E<b;++E)f=Math.min(f,c(E));d==0?e.moveTo(d,f):e.lineTo(d,f)}e.stroke()}onClick(e){let i=new Y(this.zoom,this.width,this.fftSize).unzoomed(e.offsetX/this.offsetWidth);this.dispatchEvent(new Ke({fraction:i,target:"scope"})),e.preventDefault()}getContext(){if(this.context)return this.context;if(this.canvas)return this.canvas.width=this.fftSize,this.canvas.height=this.maxDecibels-this.minDecibels,this.context=this.canvas.getContext("2d"),this.context}};Je([l({type:Number,reflect:!0,attribute:"min-decibels"}),et("design:type",Number)],ce.prototype,"minDecibels",void 0);Je([l({type:Number,reflect:!0,attribute:"max-decibels"}),et("design:type",Number)],ce.prototype,"maxDecibels",void 0);Je([l({type:Number,reflect:!0}),et("design:type",Number)],ce.prototype,"fftSize",void 0);Je([l({attribute:!1}),et("design:type",typeof(xr=typeof S<"u"&&S)=="function"?xr:Object)],ce.prototype,"zoom",void 0);Je([w("#scope"),et("design:type",typeof(Sr=typeof HTMLCanvasElement<"u"&&HTMLCanvasElement)=="function"?Sr:Object)],ce.prototype,"canvas",void 0);ce=Je([x("rr-scope-line"),et("design:paramtypes",[])],ce);var ge=function(r,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,i);else for(var a=r.length-1;a>=0;a--)(o=r[a])&&(n=(s<3?o(n):s>3?o(e,t,n):o(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},be=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)},Rr,$r,de=class extends g{static get styles(){return[v`
        canvas {
          color: var(--rr-captions-color, rgba(255, 255, 255, 0.5));
          width: 100%;
          height: 100%;
        }
      `]}render(){return p`<canvas id="canvas"></canvas>`}constructor(){super(),this.centerFrequency=0,this.frequencyScale=1,this.minDecibels=-100,this.maxDecibels=-30,this.fftSize=2048,this.zoom=W,this.resizeObserver=new ResizeObserver(()=>this.redraw())}connectedCallback(){super.connectedCallback(),this.resizeObserver?.disconnect(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect()}firstUpdated(e){super.firstUpdated(e),this.redraw()}updated(e){super.updated(e),!(e.size==0||e.size==1&&e.has("lines"))&&this.redraw()}redraw(){let e=this.getContext();if(!e)return;let t=e.canvas;t.width!=t.offsetWidth&&(t.width=this.offsetWidth),t.height!=t.offsetHeight&&(t.height=this.offsetHeight);let i=t.width,s=t.height,n=16,o=24,a=getComputedStyle(e.canvas).getPropertyValue("color"),h=this.computeLines(i-o,s-n);e.clearRect(0,0,i,s),e.save(),e.fillStyle=a;for(let{position:c,value:d,horizontal:u}of h){let[b,f]=[o+c*(i-o),n+c*(s-n)],E=String(u?d:d/(this.frequencyScale||1));if(u){e.textBaseline="middle",e.textAlign="right",b=o-2;let G=e.measureText(E);f-G.actualBoundingBoxAscent<n&&(f=G.actualBoundingBoxAscent+n),f+G.actualBoundingBoxDescent>s&&(f=s-G.actualBoundingBoxDescent)}else{e.textBaseline="bottom",e.textAlign="center",f=n-2;let G=e.measureText(E);b-G.actualBoundingBoxLeft<o&&(b=G.actualBoundingBoxLeft+o),b+G.actualBoundingBoxRight>i&&(b=i-G.actualBoundingBoxRight)}e.fillText(E,b,f)}e.restore(),e.save(),e.strokeStyle=a,e.beginPath();for(let{position:c,horizontal:d}of h)if(d){let u=n+c*(s-n);e.moveTo(o,u),e.lineTo(i,u)}else{let u=o+c*(i-o);e.moveTo(u,n),e.lineTo(u,s)}e.stroke(),e.restore()}getContext(){if(this.context)return this.context;if(this.canvas)return this.context=this.canvas.getContext("2d"),this.context}computeLines(e,t){let i=[];if(this.minDecibels!==void 0&&this.maxDecibels!==void 0&&i.push(...Mr(this.minDecibels,this.maxDecibels,20,25,t,Rt.Descending,$t.Horizontal,[1,2,3,5,6,10])),this.bandwidth!==void 0){let s=new Y(this.zoom,1,this.fftSize,this.centerFrequency,this.bandwidth);i.push(...Mr(s.leftFrequency,s.rightFrequency,50,80,e,Rt.Ascending,$t.Vertical))}else{let s=this.zoom.zoomed(.5);s>=0&&s<=1&&i.push({value:this.centerFrequency,position:s,horizontal:!1})}return i}};ge([l({type:Number,reflect:!0}),be("design:type",Number)],de.prototype,"bandwidth",void 0);ge([l({type:Number,reflect:!0,attribute:"center-frequency"}),be("design:type",Number)],de.prototype,"centerFrequency",void 0);ge([l({type:Number,reflect:!0,attribute:"frequency-scale"}),be("design:type",Number)],de.prototype,"frequencyScale",void 0);ge([l({type:Number,reflect:!0,attribute:"min-decibels"}),be("design:type",Number)],de.prototype,"minDecibels",void 0);ge([l({type:Number,reflect:!0,attribute:"max-decibels"}),be("design:type",Number)],de.prototype,"maxDecibels",void 0);ge([l({type:Number,reflect:!0}),be("design:type",Number)],de.prototype,"fftSize",void 0);ge([l({attribute:!1}),be("design:type",typeof(Rr=typeof S<"u"&&S)=="function"?Rr:Object)],de.prototype,"zoom",void 0);ge([w("#canvas"),be("design:type",typeof($r=typeof HTMLCanvasElement<"u"&&HTMLCanvasElement)=="function"?$r:Object)],de.prototype,"canvas",void 0);de=ge([x("rr-scope-background"),be("design:paramtypes",[])],de);var Rt;(function(r){r[r.Ascending=0]="Ascending",r[r.Descending=1]="Descending"})(Rt||(Rt={}));var $t;(function(r){r[r.Horizontal=0]="Horizontal",r[r.Vertical=1]="Vertical"})($t||($t={}));function Mr(r,e,t,i,s,n,o,a=[1,2,5,10]){let h=e-r,c=Math.pow(10,Math.floor(Math.log10(h/2))),d=ls(t/s,i/s,h,c,a),u=o==$t.Horizontal,b=[],f=r;for(f%d!=0&&(f+=d-f%d);f<=e;){let E=n==Rt.Ascending?(f-r)/h:(e-f)/h;b.push({position:E,value:f,horizontal:u}),f+=d}return b}function ls(r,e,t,i,s){let n=t*r/i,o=t*e/i,a=(n+o)/2;if(o<s[0])return ls(r,e,t,i/10,s);if(n>s[s.length-1])return ls(r,e,t,i*10,s);let h=s[0],c=Math.abs(h-a),d=h>=n&&h<=o;for(let u=1;u<s.length;++u){let b=s[u]>=n&&s[u]<=o;if(d&&!b)continue;let f=Math.abs(s[u]-a);f<c&&(h=s[u],c=f,d=b)}return h*i}var we=function(r,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,i);else for(var a=r.length-1;a>=0;a--)(o=r[a])&&(n=(s<3?o(n):s>3?o(e,t,n):o(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},Ce=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)},Cr,Dr,te=class extends g{constructor(){super(...arguments),this.centerFrequency=0,this.frequencyScale=1,this.minDecibels=-100,this.maxDecibels=-30,this.fftSize=2048,this.zoom=W}static get styles(){return[v`
        :host {
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          background: black;
          position: relative;

          --top-caption-margin: 16px;
          --left-caption-margin: 24px;
        }

        #container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        #background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        #line {
          position: absolute;
          top: var(--top-caption-margin);
          left: var(--left-caption-margin);
          width: calc(100% - var(--left-caption-margin));
          height: calc(100% - var(--top-caption-margin));
        }
      `]}render(){return p`<div id="container">
      <rr-scope-background
        id="background"
        .centerFrequency=${this.centerFrequency}
        .bandwidth=${this.bandwidth}
        .frequencyScale=${this.frequencyScale}
        .minDecibels=${this.minDecibels}
        .maxDecibels=${this.maxDecibels}
        .fftSize=${this.fftSize}
        .zoom=${this.zoom}
      ></rr-scope-background>
      <rr-scope-line
        id="line"
        .minDecibels=${this.minDecibels}
        .maxDecibels=${this.maxDecibels}
        .fftSize=${this.fftSize}
        .zoom=${this.zoom}
      ></rr-scope-line>
    </div> `}addFloatSpectrum(e){e.length!=this.fftSize&&(this.fftSize=e.length),this.line?.addFloatSpectrum(e)}};we([l({type:Number,reflect:!0}),Ce("design:type",Number)],te.prototype,"bandwidth",void 0);we([l({type:Number,reflect:!0,attribute:"center-frequency"}),Ce("design:type",Number)],te.prototype,"centerFrequency",void 0);we([l({type:Number,reflect:!0,attribute:"frequency-scale"}),Ce("design:type",Number)],te.prototype,"frequencyScale",void 0);we([l({type:Number,reflect:!0,attribute:"min-decibels"}),Ce("design:type",Number)],te.prototype,"minDecibels",void 0);we([l({type:Number,reflect:!0,attribute:"max-decibels"}),Ce("design:type",Number)],te.prototype,"maxDecibels",void 0);we([l({type:Number,reflect:!0}),Ce("design:type",Number)],te.prototype,"fftSize",void 0);we([l({attribute:!1}),Ce("design:type",typeof(Cr=typeof S<"u"&&S)=="function"?Cr:Object)],te.prototype,"zoom",void 0);we([w("#line"),Ce("design:type",typeof(Dr=typeof ce<"u"&&ce)=="function"?Dr:Object)],te.prototype,"line",void 0);te=we([x("rr-scope")],te);function Dn(r,e,t,i){let s=new Array(256),n=s.length;for(let o=0;o<n;++o){let a=o/(n-1),h=Math.pow(a,i),c=2*Math.PI*(r/3+e*a),d=t*h*(1-h)/2,u=Math.cos(c),b=Math.sin(c),f=h+d*(-.14861*u+1.78277*b),E=h+d*(-.29227*u-.90649*b),G=h+d*1.97294*u;s[o]=[Math.floor(Math.max(0,Math.min(255,256*f))),Math.floor(Math.max(0,Math.min(255,256*E))),Math.floor(Math.max(0,Math.min(255,256*G)))]}return s}var tt=Dn(2,1,3,1);function _n(){let r=[.13572138,4.6153926,-42.66032258,132.13108234,-152.94239396,59.28637943],e=[.09140261,2.19418839,4.84296658,-14.18503333,4.27729857,2.82956604],t=[.1066733,12.64194608,-60.58204836,110.36276771,-89.90310912,27.34824973],i=(o,a)=>o[0]*a[0]+o[1]*a[1]+o[2]*a[2]+o[3]*a[3]+o[4]*a[4]+o[5]*a[5],s=new Array(256),n=s.length;for(let o=0;o<n;++o){let a=o/255,h=[1,a,a*a,a*a*a,a*a*a*a,a*a*a*a*a];s[o]=[Math.floor(Math.max(0,Math.min(255,255*i(h,r)))),Math.floor(Math.max(0,Math.min(255,255*i(h,e)))),Math.floor(Math.max(0,Math.min(255,255*i(h,t))))]}return s}var Dl=_n();var hi=class{constructor(){this.palette=tt;this.images=[]}addFloatSpectrum(e,t,i,s,n){let o=e.length;if(this.prepareImageStack(o),s!==void 0&&n!==void 0){if(s!==this.frequency&&this.frequency!==void 0){let c=(s-this.frequency)/n;this.images.map(d=>d.scroll(c))}this.frequency=s}let a=this.images.map(c=>c.startRow(o,t,i)),h=o/2;for(let c=0;c<o;++c)a.map(d=>d.addBin(e[(c+h)%o]))}draw(e,t){let i=t.level*e.canvas.offsetWidth;(this.images.find(n=>n.width>=i)||this.images[this.images.length-1])?.draw(e,t)}prepareImageStack(e){let t=this.images[this.images.length-1];if((t?.width||0)==e)return;let s=[1024,2048,8192,32768].filter(a=>a<e);s.push(e);let n=0,o=0;for(;n<s.length||o<this.images.length;){let a=s[n],h=this.images[o]?.width;if(a===void 0||a>h){this.images.splice(o,1);continue}(h===void 0||a<h)&&this.images.splice(o,0,t?.resizeTo(a)||new cs(a,this.palette)),++n,++o}}},cs=class r{constructor(e,t){this.width=e;this.palette=t;this.scrollError=0;this.height=screen.height,this.data=new Uint8ClampedArray(4*this.width*(this.height+1)),this.xOffset=0,this.yOffset=0}startRow(e,t,i){return this.deltaY(-1),new ds(this.data,(this.xOffset+this.yOffset*this.width)*4,e/this.width,t,i,this.palette)}draw(e,t){let i=new Y(t,this.width,this.width);e.canvas.width!=i.visibleBins&&(e.canvas.width=i.visibleBins),e.canvas.height!=e.canvas.offsetHeight&&(e.canvas.height=e.canvas.offsetHeight);let s=Math.min(this.height-this.yOffset,e.canvas.height),n=(this.xOffset+this.yOffset*this.width)*4,o=n+s*this.width*4;e.putImageData(new ImageData(this.data.subarray(n,o),this.width),-i.leftBin,0);let a=e.canvas.height-s;if(a<=0)return;let h=(this.xOffset+a*this.width)*4;e.putImageData(new ImageData(this.data.subarray(this.xOffset*4,h),this.width),-i.leftBin,s)}scroll(e){if(e>=1||e<=-1){this.data.fill(0),this.xOffset=0,this.yOffset=0,this.scrollError=0;return}e+=this.scrollError;let t=Math.round(this.width*e);if(this.scrollError=e-t/this.width,t==0)return;this.deltaX(t);let i=t>0?-t:0,s=t>0?0:-t;for(let n=0;n<=this.height;++n){let o=n*this.width+this.xOffset;this.data.fill(0,(o+i)*4,(o+s)*4)}}resizeTo(e){let t=new OffscreenCanvas(this.width,this.height);t.getContext("2d").putImageData(new ImageData(this.data.subarray(this.xOffset*4,(this.xOffset+this.height*this.width)*4),this.width),0,0);let n=new OffscreenCanvas(e,this.height).getContext("2d");n.drawImage(t,0,0,e,this.height);let o=new r(e,this.palette);return o.data.set(n.getImageData(0,0,e,this.height).data),o.xOffset=0,o.yOffset=this.yOffset,o.scrollError=this.scrollError,o}deltaX(e){let t=this.xOffset+e,i=0;if(t<0){let s=this.height*this.width*4;for(this.data.copyWithin(s+this.xOffset*4,this.xOffset*4,this.width*4);t<0;)t+=this.width,i--}if(t>=this.width){let s=this.height*this.width*4;for(this.data.copyWithin(0,s,s+this.xOffset*4);t>=this.width;)t-=this.width,i++}this.xOffset=t,i!=0&&this.deltaY(i)}deltaY(e){let t=this.yOffset+e;for(;t<0;)t+=this.height;for(;t>=this.height;)t-=this.height;this.yOffset=t}},ds=class{constructor(e,t,i,s,n,o){this.data=e;this.offset=t;this.ratio=i;this.palette=o;this.p=0;this.value=0;this.sub=s,this.mul=256/(n-s)}addBin(e){if((this.p==0||e>this.value)&&(this.value=e),this.p++,this.p<this.ratio)return;let t=Math.max(0,Math.min(255,Math.floor(this.mul*(this.value-this.sub)))),i=this.palette[isNaN(t)?0:t];this.data[this.offset++]=i[0],this.data[this.offset++]=i[1],this.data[this.offset++]=i[2],this.data[this.offset++]=255,this.p=0}};var ye=function(r,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,i);else for(var a=r.length-1;a>=0;a--)(o=r[a])&&(n=(s<3?o(n):s>3?o(e,t,n):o(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},ve=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)},_r,qr,ie=class extends g{static get styles(){return[v`
        #waterfall {
          width: 100%;
          height: 100%;
        }
      `]}render(){return p`<canvas id="waterfall"></canvas>`}constructor(){super(),this.minDecibels=-100,this.maxDecibels=-30,this.palette=tt,this.fftSize=2048,this.zoom=W,this.draggable=!1,this.image=new hi,this.addEventListener("pointerdown",e=>this.onPointerDown(e))}firstUpdated(e){super.firstUpdated(e),this.dragController=new N(new us(this))}updated(e){super.updated(e),e.has("zoom")&&this.redraw()}addFloatSpectrum(e,t){this.image.addFloatSpectrum(t,this.minDecibels,this.maxDecibels,e,this.bandwidth),this.redraw()}redraw(){let e=this.getContext();e&&this.image.draw(e,this.zoom)}getContext(){return this.context?this.context:this.canvas?(this.context=this.canvas.getContext("2d"),new ResizeObserver(()=>this.redraw()).observe(this.canvas),this.context):void 0}onPointerDown(e){this.draggable&&this.dragController?.startDragging(e)}};ye([l({type:Number,reflect:!0,attribute:"min-decibels"}),ve("design:type",Number)],ie.prototype,"minDecibels",void 0);ye([l({type:Number,reflect:!0,attribute:"max-decibels"}),ve("design:type",Number)],ie.prototype,"maxDecibels",void 0);ye([l({attribute:!1}),ve("design:type",Object)],ie.prototype,"palette",void 0);ye([l({type:Number,reflect:!0}),ve("design:type",Number)],ie.prototype,"fftSize",void 0);ye([l({attribute:!1}),ve("design:type",typeof(_r=typeof S<"u"&&S)=="function"?_r:Object)],ie.prototype,"zoom",void 0);ye([l({type:Number,reflect:!0}),ve("design:type",Number)],ie.prototype,"bandwidth",void 0);ye([l({type:Boolean,reflect:!0}),ve("design:type",Boolean)],ie.prototype,"draggable",void 0);ye([w("#waterfall"),ve("design:type",typeof(qr=typeof HTMLCanvasElement<"u"&&HTMLCanvasElement)=="function"?qr:Object)],ie.prototype,"canvas",void 0);ie=ye([x("rr-waterfall"),ve("design:paramtypes",[])],ie);var us=class{constructor(e){this.waterfall=e,this.fraction=0}startDrag(){this.fraction=0,this.waterfall.dispatchEvent(new Le({fraction:0,target:"waterfall",operation:"start"}))}drag(e,t){this.fraction=e/(this.waterfall.clientWidth*this.waterfall.zoom.level),this.waterfall.dispatchEvent(new Le({fraction:this.fraction,target:"waterfall"}))}finishDrag(){this.waterfall.dispatchEvent(new Le({fraction:this.fraction,target:"waterfall",operation:"finish"}))}cancelDrag(){this.waterfall.dispatchEvent(new Le({fraction:0,target:"waterfall",operation:"cancel"}))}onClick(e){let i=new Y(this.waterfall.zoom,this.waterfall.offsetWidth,this.waterfall.fftSize).unzoomed(e.offsetX/this.waterfall.offsetWidth);this.waterfall.dispatchEvent(new Ke({fraction:i,target:"waterfall"})),e.preventDefault()}};var xe=function(r,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,i);else for(var a=r.length-1;a>=0;a--)(o=r[a])&&(n=(s<3?o(n):s>3?o(e,t,n):o(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},De=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)},Fr,Er,Pr,Ar,Br,ue=class extends g{constructor(){super(...arguments),this.minDecibels=-100,this.maxDecibels=-30,this.palette=tt}static get styles(){return[v`
        :host {
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: stretch;
        }

        #palette {
          flex: 1;
          height: 24px;
          min-width: ${1.25*150}px;
        }

        @media (max-width: 375px) {
          #palette {
            min-width: ${150}px;
          }
        }

        #min,
        #max {
          width: 7ex;
          align-content: center;
        }

        #min {
          text-align: right;
          padding-right: 8px;
        }

        #max {
          text-align: left;
          padding-left: 8px;
        }

        #minThumb,
        #maxThumb {
          position: absolute;
          cursor: ew-resize;
          box-sizing: border-box;
          width: 8px;
          height: 24px;
          background: lightgray;
          border: 1px outset;
        }

        #minThumb {
          border-radius: 4px 0 0 4px;
        }

        #maxThumb {
          border-radius: 0 4px 4px 0;
        }

        .touchArea {
          position: absolute;
          top: -5px;
          bottom: -5px;
          left: -15px;
          right: -15px;
        }
      `]}render(){return p` <input
        id="min"
        type="text"
        .value=${it(this.minDecibels)}
        @focus=${this.onMinFocus}
        @blur=${this.onMinBlur}
        @change=${this.onMinChange}
      />
      <canvas id="palette" width="256" height="24"></canvas>
      <input
        id="max"
        type="text"
        .value=${it(this.maxDecibels)}
        @focus=${this.onMaxFocus}
        @blur=${this.onMaxBlur}
        @change=${this.onMaxChange}
      />
      <div id="minThumb" @pointerdown=${this.onMinPointerDown}>
        <div class="touchArea"></div>
      </div>
      <div id="maxThumb" @pointerdown=${this.onMaxPointerDown}>
        <div class="touchArea"></div>
      </div>`}firstUpdated(e){super.firstUpdated(e),this.minDragController=new N(new li("min",this,this.paletteBox),0),this.maxDragController=new N(new li("max",this,this.paletteBox),0),new ResizeObserver(()=>this.repaintPalette()).observe(document.body),this.repaintPalette()}updated(e){super.updated(e),this.repaintPalette()}repaintPalette(){let e=this.getContext();if(e){for(let t=0;t<e.canvas.width;++t){let s=255*(t*150/255+-150-this.minDecibels)/(this.maxDecibels-this.minDecibels);s<0&&(s=0),s>255&&(s=255),s=Math.floor(s),e.fillStyle=ps(this.palette[s]),e.fillRect(t,0,1,24)}this.minBox&&(this.minBox.style.backgroundColor=ps(this.palette[0]),this.minBox.style.color=zr(this.palette[0])?"white":"black"),this.maxBox&&(this.maxBox.style.backgroundColor=ps(this.palette[255]),this.maxBox.style.color=zr(this.palette[255])?"white":"black"),this.minThumb&&this.paletteBox&&(this.minThumb.style.right=(this.minDecibels-0)*this.paletteBox.offsetWidth/-150+this.paletteBox.offsetLeft+"px"),this.maxThumb&&this.paletteBox&&(this.maxThumb.style.left=(this.maxDecibels- -150)*this.paletteBox.offsetWidth/150+this.paletteBox.offsetLeft+"px")}}getContext(){if(this.context)return this.context;if(this.paletteBox)return this.context=this.paletteBox.getContext("2d"),this.context}onMinFocus(e){let t=e.target;t.value=fs(this.minDecibels)}onMinBlur(e){let t=e.target;t.value=it(this.minDecibels)}onMinChange(e){let t=e.target,i=t.value;i.endsWith("dB")&&(i=i.substring(0,i.length-2).trim());let s=Number(i);isNaN(s)?t.value=it(this.minDecibels):Tr(s,this)}onMaxFocus(e){let t=e.target;t.value=fs(this.maxDecibels)}onMaxBlur(e){let t=e.target;t.value=it(this.maxDecibels)}onMaxChange(e){let t=e.target,i=t.value;i.endsWith("dB")&&(i=i.substring(0,i.length-2).trim());let s=Number(i);isNaN(s)?t.value=it(this.maxDecibels):kr(s,this)}onMinPointerDown(e){this.minDragController?.startDragging(e)}onMaxPointerDown(e){this.maxDragController?.startDragging(e)}};xe([l({type:Number,reflect:!0,attribute:"min-decibels"}),De("design:type",Number)],ue.prototype,"minDecibels",void 0);xe([l({type:Number,reflect:!0,attribute:"max-decibels"}),De("design:type",Number)],ue.prototype,"maxDecibels",void 0);xe([l({attribute:!1}),De("design:type",Object)],ue.prototype,"palette",void 0);xe([w("#min"),De("design:type",typeof(Fr=typeof HTMLElement<"u"&&HTMLElement)=="function"?Fr:Object)],ue.prototype,"minBox",void 0);xe([w("#max"),De("design:type",typeof(Er=typeof HTMLElement<"u"&&HTMLElement)=="function"?Er:Object)],ue.prototype,"maxBox",void 0);xe([w("#palette"),De("design:type",typeof(Pr=typeof HTMLCanvasElement<"u"&&HTMLCanvasElement)=="function"?Pr:Object)],ue.prototype,"paletteBox",void 0);xe([w("#minThumb"),De("design:type",typeof(Ar=typeof HTMLElement<"u"&&HTMLElement)=="function"?Ar:Object)],ue.prototype,"minThumb",void 0);xe([w("#maxThumb"),De("design:type",typeof(Br=typeof HTMLElement<"u"&&HTMLElement)=="function"?Br:Object)],ue.prototype,"maxThumb",void 0);ue=xe([x("rr-decibel-range")],ue);function ps(r){return`rgb(${r[0]}, ${r[1]}, ${r[2]})`}function zr(r){return Math.max(r[0],r[1],r[2])<96}var li=class{constructor(e,t,i){this.type=e,this.range=t,this.box=i,this.startDb=0}startDrag(){this.startDb=this.type==="min"?this.range.minDecibels:this.range.maxDecibels}drag(e,t){let i=e/this.box.offsetWidth;this.changeDb(this.startDb+i*150)}finishDrag(){}cancelDrag(){this.changeDb(this.startDb)}onClick(){}changeDb(e){this.type=="min"?Tr(e,this.range):kr(e,this.range)}};function Tr(r,e){r=Math.round(r),r<-150&&(r=-150),r>0&&(r=0),r>e.maxDecibels-6&&(r=e.maxDecibels-6),e.minDecibels=r,e.dispatchEvent(new St({min:r}))}function kr(r,e){r=Math.round(r),r<-150&&(r=-150),r>0&&(r=0),r<e.minDecibels+6&&(r=e.minDecibels+6),e.maxDecibels=r,e.dispatchEvent(new St({max:r}))}function it(r){return fs(r)+" dB"}function fs(r){return String(r)}var Oe=function(r,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,i);else for(var a=r.length-1;a>=0;a--)(o=r[a])&&(n=(s<3?o(n):s>3?o(e,t,n):o(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},st=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)},Ir,_e=class extends g{constructor(){super(...arguments),this.draggablePoint=!1,this.draggableLeft=!1,this.draggableRight=!1,this.fftSize=2048,this.zoom=W}static get styles(){return[v`
        :host {
          pointer-events: none;
        }

        .handle {
          pointer-events: all;
        }

        #point,
        #band,
        .handle {
          position: absolute;
          top: 0;
          bottom: 0;
        }

        #point {
          width: 2px;
          background: var(--rr-highlight-color, rgba(255, 255, 0, 0.25));
        }

        #band {
          background: var(--rr-highlight-area-color, rgba(255, 255, 255, 0.25));
        }

        .handle {
          width: 4px;
          cursor: ew-resize;
        }

        #pointHandle {
          cursor: col-resize;
        }

        #pointHandle:hover {
          background: var(--rr-highlight-handle-color, rgba(255, 255, 0, 1));
        }

        #leftBandHandle:hover,
        #rightBandHandle:hover {
          background: var(
            --rr-highlight-area-handle-color,
            rgba(255, 255, 255, 1)
          );
        }

        .touchArea {
          position: absolute;
          top: 0;
          bottom: 0;
          left: -10px;
          right: -10px;
        }
      `]}render(){return p`${this.renderBand()}${this.renderPoint()}`}renderPoint(){if(this.selection?.point===void 0)return m;let t=new Y(this.zoom,this.offsetWidth,this.fftSize).zoomed(this.selection.point);return t<0||t>1?m:p`<div id="point" style="left:calc(${100*t}% - 1px)"></div>
      ${this.draggablePoint?p`<div
            id="pointHandle"
            class="handle"
            style="left:calc(${100*t}% - 2px)"
            @pointerdown=${this.onPointPointerDown}
          >
            <div class="touchArea"></div>
          </div>`:m}`}renderBand(){if(this.selection?.band===void 0)return m;let e=new Y(this.zoom,this.offsetWidth,this.fftSize),t=e.zoomed(this.selection.band.left),i=e.zoomed(this.selection.band.right);if(t>1||i<0)return m;let s=Math.max(0,t),n=Math.min(i,1);return p`<div
        id="band"
        style="left:${100*s}%;width:${100*(n-s)}%"
      ></div>
      ${this.draggableLeft&&t==s?p`<div
            id="leftBandHandle"
            class="handle"
            style="left:calc(${100*t}% - 2px)"
            @pointerdown=${this.onLeftPointerDown}
          >
            <div class="touchArea"></div>
          </div>`:m}${this.draggableRight&&i==n?p`<div
            id="rightBandHandle"
            class="handle"
            style="left:calc(${100*i}% - 2px)"
            @pointerdown=${this.onRightPointerDown}
          >
            <div class="touchArea"></div>
          </div>`:m}`}firstUpdated(e){super.firstUpdated(e),this.pointDragController=new N(new Mt("point",this),0),this.leftDragController=new N(new Mt("start",this),0),this.rightDragController=new N(new Mt("end",this),0)}onPointPointerDown(e){this.pointDragController?.startDragging(e)}onLeftPointerDown(e){this.leftDragController?.startDragging(e)}onRightPointerDown(e){this.rightDragController?.startDragging(e)}};Oe([l({type:Boolean,reflect:!0,attribute:"draggable-point"}),st("design:type",Boolean)],_e.prototype,"draggablePoint",void 0);Oe([l({type:Boolean,reflect:!0,attribute:"draggable-left"}),st("design:type",Boolean)],_e.prototype,"draggableLeft",void 0);Oe([l({type:Boolean,reflect:!0,attribute:"draggable-right"}),st("design:type",Boolean)],_e.prototype,"draggableRight",void 0);Oe([l({type:Number,reflect:!0}),st("design:type",Number)],_e.prototype,"fftSize",void 0);Oe([l({attribute:!1}),st("design:type",typeof(Ir=typeof S<"u"&&S)=="function"?Ir:Object)],_e.prototype,"zoom",void 0);Oe([l({attribute:!1}),st("design:type",Object)],_e.prototype,"selection",void 0);_e=Oe([x("rr-highlight")],_e);var Mt=class{constructor(e,t){this.type=e,this.highlight=t}startDrag(){this.original=this.highlight.selection}drag(e,t){let i=this.highlight.zoom===void 0?1:this.highlight.zoom.level,s=this.getFraction();s!==void 0&&(s+=e/(this.highlight.offsetWidth*i),s<0&&(s=0),s>1&&(s=1),this.highlight.dispatchEvent(this.getEvent(s)))}finishDrag(){}cancelDrag(){let e=this.getFraction();e!==void 0&&this.highlight.dispatchEvent(this.getEvent(e))}onClick(){}getFraction(){return this.type=="point"?this.original?.point:this.type=="start"?this.original?.band?.left:this.original?.band?.right}getEvent(e){return new ai(this.type=="point"?{fraction:e}:this.type=="start"?{startFraction:e}:{endFraction:e})}};var gs=function(r,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,i);else for(var a=r.length-1;a>=0;a--)(o=r[a])&&(n=(s<3?o(n):s>3?o(e,t,n):o(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},Or=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)},Lr,Nr,ci=class extends g{constructor(){super(...arguments),this.zoom=W}static get styles(){return[Q,v`
        :host {
          display: flex;
          flex-direction: row;
          width: 100%;
        }

        #scroll {
          flex: 1;
          display: flex;
          flex-direction: row;
          border: solid ButtonBorder;
          border-width: 1px 0 1px 0;
        }

        #thumb {
          flex: 1;
        }

        #left,
        #right {
          background: color-mix(in srgb, ButtonFace, lightgray 35%);
        }

        #thumb {
          background: lightgray;
          border: 1px outset;
        }
      `]}render(){return p`<button @click=${this.onClickButtonLeft}>
        ${Ks}
      </button>
      <div id="scroll">
        <div
          id="left"
          style="width: ${this.zoom?100*this.zoom.leftFraction:0}%"
          @click=${this.onClickAreaLeft}
        ></div>
        <div id="thumb" @pointerdown=${this.onPointerDown}></div>
        <div
          id="right"
          style="width: ${this.zoom?100*(1-this.zoom.rightFraction):0}%"
          @click=${this.onClickAreaRight}
        ></div>
      </div>
      <button @click=${this.onClickButtonRight}>${Js}</button>`}firstUpdated(e){super.firstUpdated(e),this.dragController=new N(new ms(this,this.scrollBox),0)}onClickButtonLeft(){this.moveZoom(-1/20)}onClickButtonRight(){this.moveZoom(1/20)}onClickAreaLeft(){this.moveZoom(-.6)}onClickAreaRight(){this.moveZoom(.6)}moveZoom(e){let t=this.zoom.withMovedCenter(e/this.zoom.level);this.zoom=t,this.dispatchEvent(new Ne(t))}onPointerDown(e){this.dragController?.startDragging(e)}};gs([l({attribute:!1}),Or("design:type",typeof(Lr=typeof S<"u"&&S)=="function"?Lr:Object)],ci.prototype,"zoom",void 0);gs([w("#scroll"),Or("design:type",typeof(Nr=typeof HTMLElement<"u"&&HTMLElement)=="function"?Nr:Object)],ci.prototype,"scrollBox",void 0);ci=gs([x("rr-scrollbar")],ci);var ms=class{constructor(e,t){this.scrollbar=e,this.box=t,this.startZoom=W}startDrag(){this.startZoom=this.scrollbar.zoom}drag(e,t){let i=e/this.box.offsetWidth;this.moveZoom(i)}finishDrag(){}cancelDrag(){this.moveZoom(0)}onClick(){}moveZoom(e){let t=this.startZoom.withMovedCenter(e);this.scrollbar.zoom=t,this.scrollbar.dispatchEvent(new Ne(this.scrollbar.zoom))}};var ws=function(r,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,i);else for(var a=r.length-1;a>=0;a--)(o=r[a])&&(n=(s<3?o(n):s>3?o(e,t,n):o(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},Wr=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)},Ur,di=class extends g{constructor(){super(...arguments),this.zoom=W}static get styles(){return[Q,v`
        :host {
          display: flex;
          flex-direction: row;
        }

        #zoomInput {
          width: 6ex;
        }
      `]}render(){return p`<button @click=${this.onClickMinus}>${ir}</button>
      <input
        id="zoomInput"
        type="text"
        .value=${bs(this.zoom.level)}
        @focus=${this.onZoomFocus}
        @blur=${this.onZoomBlur}
        @change=${this.onZoomChange}
      />
      <button @click=${this.onClickPlus}>${tr}</button>`}onZoomFocus(e){let t=e.target;t.value=jr(this.zoom.level)}onZoomBlur(e){let t=e.target;t.value=bs(this.zoom.level)}onZoomChange(e){let t=e.target,i=t.value;i.endsWith("x")&&(i=i.substring(0,i.length-1));let s=Number(i);isNaN(s)?t.value=bs(this.zoom.level):this.setZoom(s)}onClickMinus(){this.setZoom(this.zoom.level/Math.sqrt(2))}onClickPlus(){this.setZoom(this.zoom.level*Math.sqrt(2))}setZoom(e){Math.abs(e-Math.round(e))<.01&&(e=Math.round(e));let t=this.zoom;this.highlight?.point!==void 0?t=t.withLevelInContext(e,this.highlight.point):t=t.withLevel(e),this.zoom=t,this.dispatchEvent(new Ne(t))}};ws([l({attribute:!1}),Wr("design:type",typeof(Ur=typeof S<"u"&&S)=="function"?Ur:Object)],di.prototype,"zoom",void 0);ws([l({attribute:!1}),Wr("design:type",Object)],di.prototype,"highlight",void 0);di=ws([x("rr-zoombar")],di);function bs(r){return jr(r)+"x"}function jr(r){return String(Math.round(r*100)/100)}var Z=function(r,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,i);else for(var a=r.length-1;a>=0;a--)(o=r[a])&&(n=(s<3?o(n):s>3?o(e,t,n):o(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},K=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)},Hr,Vr,Zr,L=class extends g{constructor(){super(...arguments),this.centerFrequency=0,this.frequencyScale=1,this.minDecibels=-100,this.maxDecibels=-30,this.fftSize=2048,this.zoom=W,this.highlightDraggablePoint=!1,this.highlightDraggableLeft=!1,this.highlightDraggableRight=!1,this.waterfallDraggable=!1}static get styles(){return[v`
        :host {
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          background: black;
          position: relative;

          --top-caption-margin: 16px;
          --left-caption-margin: 24px;
        }

        #view {
          display: flex;
          flex-direction: column;
          flex: 1;
          position: relative;
        }

        #controls {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        #controls rr-decibel-range {
          flex: 1;
          max-width: 100%;
        }

        #zoomControls {
          display: flex;
          flex-direction: row;
          flex: 10;
        }

        #zoomControls rr-scrollbar {
          min-width: 300px;
        }

        @media (max-width: 415px) {
          #zoomControls rr-scrollbar {
            min-width: 260px;
          }
        }

        .box {
          position: relative;
          width: 100%;
          height: 0;
        }

        .box > * {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }

        #scopeBox {
          flex: 1;
          max-height: 150px;
        }

        #waterfallBox {
          flex: 2;
        }

        #waterfallBox > * {
          margin-left: var(--left-caption-margin);
        }

        #highlight {
          position: absolute;
          left: var(--left-caption-margin);
          top: var(--top-caption-margin);
          right: 0;
          bottom: 0;
        }
      `]}render(){return p`<div id="view">
        <div id="scopeBox" class="box">
          <rr-scope
            id="scope"
            .minDecibels=${this.minDecibels}
            .maxDecibels=${this.maxDecibels}
            .centerFrequency=${this.centerFrequency}
            .bandwidth=${this.bandwidth}
            .frequencyScale=${this.frequencyScale}
            .fftSize=${this.fftSize}
            .zoom=${this.zoom}
          ></rr-scope>
        </div>
        <div id="waterfallBox" class="box">
          <rr-waterfall
            id="waterfall"
            .minDecibels=${this.minDecibels}
            .maxDecibels=${this.maxDecibels}
            .bandwidth=${this.bandwidth}
            .fftSize=${this.fftSize}
            .zoom=${this.zoom}
            .draggable=${this.waterfallDraggable}
          ></rr-waterfall>
        </div>
        <rr-highlight
          id="highlight"
          .selection=${this.highlight}
          .draggableLeft=${this.highlightDraggableLeft}
          .draggableRight=${this.highlightDraggableRight}
          .draggablePoint=${this.highlightDraggablePoint}
          .fftSize=${this.fftSize}
          .zoom=${this.zoom}
        ></rr-highlight>
      </div>
      <div id="controls">
        <rr-decibel-range
          .minDecibels=${this.minDecibels}
          .maxDecibels=${this.maxDecibels}
          @spectrum-decibel-range-changed=${this.onDecibelRangeChanged}
        ></rr-decibel-range>
        <div id="zoomControls">
          <rr-zoombar
            .zoom=${this.zoom}
            .highlight=${this.highlight}
            @spectrum-zoom=${this.onZoom}
          ></rr-zoombar>
          <rr-scrollbar
            .zoom=${this.zoom}
            @spectrum-zoom=${this.onZoom}
          ></rr-scrollbar>
        </div>
      </div>`}addFloatSpectrum(e,t){this.fftSize!=t.length&&(this.fftSize=t.length),this.scope?.addFloatSpectrum(t),this.waterfall?.addFloatSpectrum(e,t)}onZoom(e){this.zoom=e.detail}onDecibelRangeChanged(e){e.detail.min!==void 0&&(this.minDecibels=e.detail.min),e.detail.max!==void 0&&(this.maxDecibels=e.detail.max)}};Z([l({type:Number,reflect:!0}),K("design:type",Number)],L.prototype,"bandwidth",void 0);Z([l({type:Number,reflect:!0,attribute:"center-frequency"}),K("design:type",Number)],L.prototype,"centerFrequency",void 0);Z([l({type:Number,reflect:!0,attribute:"frequency-scale"}),K("design:type",Number)],L.prototype,"frequencyScale",void 0);Z([l({type:Number,reflect:!0,attribute:"min-decibels"}),K("design:type",Number)],L.prototype,"minDecibels",void 0);Z([l({type:Number,reflect:!0,attribute:"max-decibels"}),K("design:type",Number)],L.prototype,"maxDecibels",void 0);Z([l({type:Number,reflect:!0}),K("design:type",Number)],L.prototype,"fftSize",void 0);Z([l({attribute:!1}),K("design:type",typeof(Hr=typeof S<"u"&&S)=="function"?Hr:Object)],L.prototype,"zoom",void 0);Z([l({attribute:!1}),K("design:type",Object)],L.prototype,"highlight",void 0);Z([l({attribute:!1}),K("design:type",Boolean)],L.prototype,"highlightDraggablePoint",void 0);Z([l({attribute:!1}),K("design:type",Boolean)],L.prototype,"highlightDraggableLeft",void 0);Z([l({attribute:!1}),K("design:type",Boolean)],L.prototype,"highlightDraggableRight",void 0);Z([l({attribute:!1}),K("design:type",Boolean)],L.prototype,"waterfallDraggable",void 0);Z([w("#scope"),K("design:type",typeof(Vr=typeof te<"u"&&te)=="function"?Vr:Object)],L.prototype,"scope",void 0);Z([w("#waterfall"),K("design:type",typeof(Zr=typeof ie<"u"&&ie)=="function"?Zr:Object)],L.prototype,"waterfall",void 0);L=Z([x("rr-spectrum")],L);var C=function(r,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,i);else for(var a=r.length-1;a>=0;a--)(o=r[a])&&(n=(s<3?o(n):s>3?o(e,t,n):o(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},D=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)},Gr,Qr,Xr,Yr,$=class extends g{static get styles(){return[Q,v`
        :host {
          height: 100%;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          touch-action: none;
        }

        #spectrum {
          width: 100%;
          height: 0;
          flex: 1;
          margin: 0;
        }
      `]}render(){return p`<rr-spectrum
        id="spectrum"
        .minDecibels=${this.minDecibels}
        .maxDecibels=${this.maxDecibels}
        .centerFrequency=${this.frequency.center}
        .bandwidth=${this.bandwidth}
        .frequencyScale=${this.scale}
        .highlight=${{point:this.frequency.offset/this.bandwidth+.5,band:{left:(this.frequency.offset-this.frequency.leftBand)/this.bandwidth+.5,right:(this.frequency.offset+this.frequency.rightBand)/this.bandwidth+.5}}}
        .highlightDraggablePoint=${!0}
        .highlightDraggableLeft=${this.mode.scheme!="WBFM"&&this.mode.scheme!="USB"}
        .highlightDraggableRight=${this.mode.scheme!="WBFM"&&this.mode.scheme!="LSB"}
        .waterfallDraggable=${!0}
        @spectrum-tap=${this.onSpectrumTap}
        @spectrum-drag=${this.onSpectrumDrag}
        @spectrum-highlight-changed=${this.onSpectrumHighlightChanged}
        @spectrum-decibel-range-changed=${this.onDecibelRangeChanged}
      ></rr-spectrum>

      <rr-main-controls
        .position=${this.windowState.controls.position}
        .playing=${this.playing}
        .errorState=${this.errorState}
        .centerFrequency=${this.frequency.center}
        .tunedFrequency=${this.frequency.center+this.frequency.offset}
        .tuningStep=${this.tuningStep}
        .scale=${this.scale}
        .availableModes=${je()}
        .scheme=${this.mode.scheme}
        .bandwidth=${_(this.mode).getBandwidth()}
        .stereo=${_(this.mode).getStereo()}
        .squelch=${_(this.mode).getSquelch()}
        .stereoStatus=${this.stereoStatus}
        .gain=${this.gain}
        .gainDisabled=${this.gainDisabled}
        @rr-start=${this.onStart}
        @rr-stop=${this.onStop}
        @rr-presets=${this.onPresets}
        @rr-settings=${this.onSettings}
        @rr-scale-changed=${this.onScaleChange}
        @rr-center-frequency-changed=${this.onCenterFrequencyChange}
        @rr-tuned-frequency-changed=${this.onTunedFrequencyChange}
        @rr-tuning-step-changed=${this.onTuningStepChange}
        @rr-scheme-changed=${this.onSchemeChange}
        @rr-bandwidth-changed=${this.onBandwidthChange}
        @rr-stereo-changed=${this.onStereoChange}
        @rr-squelch-changed=${this.onSquelchChange}
        @rr-gain-changed=${this.onGainChange}
        @rr-window-moved=${this.onWindowMoved}
      ></rr-main-controls>

      <rr-settings
        .closed=${!this.windowState.settings.open}
        .position=${this.windowState.settings.position}
        .playing=${this.playing}
        .sampleRate=${this.sampleRate}
        .ppm=${this.ppm}
        .fftSize=${this.fftSize}
        .biasTee=${this.biasTee}
        .lowFrequencyMethod=${this.lowFrequencyMethod}
        @rr-sample-rate-changed=${this.onSampleRateChange}
        @rr-ppm-changed=${this.onPpmChange}
        @rr-fft-size-changed=${this.onFftSizeChange}
        @rr-bias-tee-changed=${this.onBiasTeeChange}
        @rr-low-frequency-method-changed=${this.onLowFrequencyMethodChange}
        @rr-window-moved=${this.onWindowMoved}
        @rr-window-closed=${this.onWindowClosed}
      ></rr-settings>

      <rr-presets
        .closed=${!this.windowState.presets.open}
        .size=${this.windowState.presets.size}
        .position=${this.windowState.presets.position}
        .tunedFrequency=${this.frequency.center+this.frequency.offset}
        .tuningStep=${this.tuningStep}
        .scale=${this.scale}
        .availableModes=${je()}
        .scheme=${this.mode.scheme}
        .bandwidth=${_(this.mode).getBandwidth()}
        .stereo=${_(this.mode).getStereo()}
        .squelch=${_(this.mode).getSquelch()}
        .gain=${this.gain}
        .presets=${this.presets}
        .sortColumn=${this.presetSortColumn}
        @rr-preset-selected=${this.onPresetSelected}
        @rr-presets-changed=${this.onPresetsChanged}
        @rr-presets-sorted=${this.onPresetsSorted}
        @rr-window-moved=${this.onWindowMoved}
        @rr-window-resized=${this.onWindowResized}
        @rr-window-closed=${this.onWindowClosed}
      ></rr-presets>`}constructor(){super(),this.availableModes=new Map(je().map(e=>[e,Pt(e)])),this.sampleRate=1024e3,this.ppm=0,this.fftSize=2048,this.biasTee=!1,this.bandwidth=this.sampleRate,this.stereoStatus=!1,this.minDecibels=-90,this.maxDecibels=-20,this.playing=!1,this.errorState=!1,this.scale=1e3,this.frequency={center:885e5,offset:0,leftBand:75e3,rightBand:75e3},this.tuningStep=1e3,this.mode=this.availableModes.get("WBFM"),this.gain=null,this.gainDisabled=!1,this.lowFrequencyMethod={name:"default",channel:"Q",frequency:1e8,biasTee:!1},this.windowState={controls:{position:void 0},settings:{open:!1,position:void 0},presets:{open:!1,position:void 0,size:void 0}},this.presetSortColumn="frequency",this.presets=[],this.configProvider=Ws(),this.spectrumBuffer=new fe(2,2048),this.spectrum=new Zt,this.spectrum.size=this.fftSize,this.demodulator=new Bt,this.sampleCounter=new Vt(20),this.radio=new Xt(new ii,Yt.of(this.spectrum,this.demodulator,this.sampleCounter)),this.demodulator.setVolume(1),this.demodulator.setMode(this.mode),this.demodulator.addEventListener("stereo-status",e=>this.onStereoStatusEvent(e)),this.radio.addEventListener("radio",e=>this.onRadioEvent(e)),this.sampleCounter.addEventListener("sample-click",e=>this.onSampleClickEvent(e))}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.onScreenResize()),this.resizeObserver.observe(document.body)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect()}firstUpdated(e){super.firstUpdated(e),this.applyConfig()}applyConfig(){let e=this.configProvider.get();for(let t of this.availableModes.keys()){let i={...this.availableModes.get(t),...e.modes[t]};this.availableModes.set(t,i),t==e.mode&&this.setMode(i)}this.setLowFrequencyMethod(e.lowFrequencyMethod),this.setCenterFrequency(e.centerFrequency),this.setTunedFrequency(e.tunedFrequency),this.tuningStep=e.tuningStep,this.scale=e.frequencyScale,this.setGain(e.gain),this.setSampleRate(e.sampleRate),this.setPpm(e.ppm),this.setFftSize(e.fftSize),this.enableBiasTee(e.biasTee),this.minDecibels=e.minDecibels,this.maxDecibels=e.maxDecibels,this.presetSortColumn=e.presets.sortColumn,this.presets=e.presets.list,this.windowState=e.windows}isFrequencyValid(e){let t=e.offset-e.leftBand,i=e.offset+e.rightBand;return-this.bandwidth/2<=t&&i<=this.bandwidth/2}onSampleClickEvent(e){let t=this.spectrumBuffer.get(this.spectrum.size);this.spectrum.getSpectrum(t),this.spectrumView.addFloatSpectrum(this.spectrum.frequency(),t)}onStart(e){this.bandwidth=this.radio.getSampleRate(),this.radio.start(),e.preventDefault()}onStop(e){this.radio.stop(),e.preventDefault()}onScreenResize(){this.requestUpdate()}onPresets(){this.changeWindowState(e=>e.presets.open=!0)}onSettings(){this.changeWindowState(e=>e.settings.open=!0)}changeWindowState(e){let t={...this.windowState};e(t),this.windowState=t,this.configProvider.update(i=>i.windows=this.windowState)}getWindowName(e){return e===this.mainControlsWindow?"controls":e===this.settingsWindow?"settings":e===this.presetsWindow?"presets":void 0}onWindowClosed(e){let t=this.getWindowName(e.target);if(t===void 0)return;let s=e.target?.closed;s!==void 0&&this.changeWindowState(n=>n[t].open=!s)}onWindowMoved(e){let t=this.getWindowName(e.target);if(t===void 0)return;let s=e.target?.position;s&&this.changeWindowState(n=>n[t].position=s)}onWindowResized(e){let t=this.getWindowName(e.target);if(t===void 0)return;let s=e.target?.size;s&&this.changeWindowState(n=>n[t].size=s)}onScaleChange(e){let i=e.target.scale;this.scale=i}onCenterFrequencyChange(e){let i=e.target.centerFrequency;this.setCenterFrequency(i)}setCenterFrequency(e){let t={...this.frequency,center:e,offset:this.frequency.center+this.frequency.offset-e};this.isFrequencyValid(t)||(t={...t,offset:0}),this.setFrequency(t)}onTunedFrequencyChange(e){let i=e.target.tunedFrequency;this.setTunedFrequency(i)}onTuningStepChange(e){let i=e.target.tuningStep;this.tuningStep=i,this.configProvider.update(s=>s.tuningStep=i)}setTunedFrequency(e){let t={...this.frequency,offset:e-this.frequency.center};this.isFrequencyValid(t)||(t={...t,center:t.center+t.offset,offset:0}),this.setFrequency(t)}setFrequency(e,t){if(e.center!=this.frequency.center||t){let i=e.center<288e5&&this.lowFrequencyMethod.name=="upconverter",s=i?this.lowFrequencyMethod.frequency:0;e.offset!=this.frequency.offset&&this.demodulator.expectFrequencyAndSetOffset(e.center+s,e.offset),this.radio.setFrequency(e.center+s),this.radio.enableBiasTee(this.biasTee||i&&this.lowFrequencyMethod.biasTee)}else e.offset!=this.frequency.offset&&this.demodulator.setFrequencyOffset(e.offset);this.frequency=e,this.configProvider.update(i=>{i.centerFrequency=e.center,i.tunedFrequency=e.center+e.offset})}onSchemeChange(e){let i=e.target.scheme,s=this.availableModes.get(i);s!==void 0&&this.setMode(s)}onBandwidthChange(e){let i=e.target.bandwidth;this.setMode(_(this.mode).setBandwidth(i).mode)}onStereoChange(e){let i=e.target.stereo;this.setMode(_(this.mode).setStereo(i).mode)}onSquelchChange(e){let i=e.target.squelch;this.setMode(_(this.mode).setSquelch(i).mode)}setMode(e){this.demodulator.setMode(e),this.mode=e,this.availableModes.set(e.scheme,e),this.updateFrequencyBands(),this.configProvider.update(t=>{t.mode=e.scheme,t.modes[e.scheme]=e})}updateFrequencyBands(){let e=_(this.mode).getBandwidth(),t={...this.frequency};this.mode.scheme=="USB"?(t.leftBand=0,t.rightBand=e):this.mode.scheme=="LSB"?(t.leftBand=e,t.rightBand=0):t.leftBand=t.rightBand=e/2,this.isFrequencyValid(t)||(t={...t,center:t.center+t.offset,offset:0}),this.setFrequency(t)}onGainChange(e){let t=e.target;this.setGain(t.gain)}setGain(e){this.radio.setGain(e),this.gain=e,this.configProvider.update(t=>t.gain=e)}onSampleRateChange(e){let t=e.target;this.setSampleRate(t.sampleRate)}setSampleRate(e){this.sampleRate=e,this.radio.setSampleRate(e),this.configProvider.update(t=>t.sampleRate=e),!this.radio.isPlaying()&&(this.bandwidth=e,this.setTunedFrequency(this.frequency.center+this.frequency.offset))}onPpmChange(e){let t=e.target;this.setPpm(t.ppm)}setPpm(e){this.radio.setFrequencyCorrection(this.ppm),this.ppm=e,this.configProvider.update(t=>t.ppm=e)}onFftSizeChange(e){let t=e.target;this.setFftSize(t.fftSize)}setFftSize(e){this.fftSize=e,this.spectrum.size=e,this.configProvider.update(t=>t.fftSize=e)}onBiasTeeChange(e){let t=e.target;this.enableBiasTee(t.biasTee)}enableBiasTee(e){this.radio.enableBiasTee(e),this.biasTee=e,this.configProvider.update(t=>t.biasTee=e)}onLowFrequencyMethodChange(e){let t=e.target;this.setLowFrequencyMethod(t.lowFrequencyMethod)}setLowFrequencyMethod(e){let t=e.name!="directSampling"?j.Off:e.channel=="Q"?j.Q:j.I;this.radio.setDirectSamplingMethod(t),this.lowFrequencyMethod={...e},this.setFrequency({...this.frequency},!0),this.configProvider.update(i=>i.lowFrequencyMethod=e)}onPresetSelected(e){let t=e.target,i=t.selectedIndex;if(i===void 0)return;let s=t.presets[i];this.setTunedFrequency(s.tunedFrequency),this.scale=s.scale,this.tuningStep=s.tuningStep,this.setMode(_(s.scheme).setBandwidth(s.bandwidth).setStereo(s.stereo).setSquelch(s.squelch).mode),this.setGain(s.gain)}onPresetsChanged(e){let i=[...e.target.presets];this.presets=i,this.configProvider.update(s=>s.presets.list=i)}onPresetsSorted(e){let i=e.target.sortColumn;this.presetSortColumn=i,this.configProvider.update(s=>s.presets.sortColumn=i)}onSpectrumTap(e){this.setTunedFrequencyFraction(e.detail.fraction)}onSpectrumDrag(e){e.detail.operation=="start"?(this.centerFrequencyScroller?.cancel(),this.centerFrequencyScroller=new ys(this.bandwidth,this.scale,this.frequency,t=>this.setFrequency(t))):e.detail.operation=="cancel"?(this.centerFrequencyScroller?.cancel(),this.centerFrequencyScroller=void 0):e.detail.operation=="finish"?(this.centerFrequencyScroller?.finish(),this.centerFrequencyScroller=void 0):this.centerFrequencyScroller?.drag(e)}onDecibelRangeChanged(e){let{min:t,max:i}=e.detail;t!==void 0&&(this.minDecibels=t,this.configProvider.update(s=>s.minDecibels=t)),i!==void 0&&(this.maxDecibels=i,this.configProvider.update(s=>s.maxDecibels=i))}onSpectrumHighlightChanged(e){e.detail.fraction!==void 0?this.setTunedFrequencyFraction(e.detail.fraction):e.detail.startFraction!==void 0?this.setSidebandFraction("left",e.detail.startFraction):e.detail.endFraction!==void 0&&this.setSidebandFraction("right",e.detail.endFraction)}setTunedFrequencyFraction(e){let t=this.frequency.center-this.bandwidth/2+this.frequency.leftBand,i=this.frequency.center+this.bandwidth/2-this.frequency.rightBand,s=Math.max(t,Math.min(this.frequency.center+this.bandwidth*(e-.5),i));s=this.tuningStep*Math.round(s/this.tuningStep),s<t&&(s+=this.tuningStep),s>i&&(s-=this.tuningStep),this.setTunedFrequency(s)}setSidebandFraction(e,t){let i=Math.floor(this.frequency.offset+this.bandwidth/2),s=Math.floor(this.bandwidth/2-this.frequency.offset),n=Math.floor(Math.abs(this.frequency.offset-this.bandwidth*(t-.5))),o=_(this.mode);switch(this.mode.scheme){case"WBFM":return;case"NBFM":case"AM":case"CW":o.setBandwidth(Math.min(n,i,s)*2);break;case"LSB":if(e=="right")return;o.setBandwidth(Math.min(n,i));break;case"USB":if(e=="left")return;o.setBandwidth(Math.min(n,s));break}this.setMode(o.mode)}onStereoStatusEvent(e){this.stereoStatus=e.detail}onRadioEvent(e){switch(e.detail.type){case"started":this.playing=!0;break;case"stopped":this.playing=!1;break;case"directSampling":this.gainDisabled=e.detail.active;break;case"error":let t=e.detail.exception;if(t.type===M.NoDeviceSelected&&t.cause.name==="NotFoundError")return;t.type==M.NoUsbSupport?alert("This browser does not support the HTML5 USB API. Please try Chrome, Edge, or Opera on a computer or Android."):this.errorState||(this.errorState=!0,t.cause?alert(`${t.message}

Caused by: ${t.cause}`):alert(t.message));break;default:}}};C([y(),D("design:type",Number)],$.prototype,"sampleRate",void 0);C([y(),D("design:type",Number)],$.prototype,"ppm",void 0);C([y(),D("design:type",Number)],$.prototype,"fftSize",void 0);C([y(),D("design:type",Boolean)],$.prototype,"biasTee",void 0);C([y(),D("design:type",Number)],$.prototype,"bandwidth",void 0);C([y(),D("design:type",Boolean)],$.prototype,"stereoStatus",void 0);C([y(),D("design:type",Number)],$.prototype,"minDecibels",void 0);C([y(),D("design:type",Number)],$.prototype,"maxDecibels",void 0);C([y(),D("design:type",Boolean)],$.prototype,"playing",void 0);C([y(),D("design:type",Boolean)],$.prototype,"errorState",void 0);C([y(),D("design:type",Number)],$.prototype,"scale",void 0);C([y(),D("design:type",Object)],$.prototype,"frequency",void 0);C([y(),D("design:type",Number)],$.prototype,"tuningStep",void 0);C([y(),D("design:type",Object)],$.prototype,"mode",void 0);C([y(),D("design:type",Object)],$.prototype,"gain",void 0);C([y(),D("design:type",Boolean)],$.prototype,"gainDisabled",void 0);C([y(),D("design:type",Object)],$.prototype,"lowFrequencyMethod",void 0);C([y(),D("design:type",Object)],$.prototype,"windowState",void 0);C([y(),D("design:type",String)],$.prototype,"presetSortColumn",void 0);C([y(),D("design:type",Array)],$.prototype,"presets",void 0);C([w("#spectrum"),D("design:type",typeof(Gr=typeof L<"u"&&L)=="function"?Gr:Object)],$.prototype,"spectrumView",void 0);C([w("rr-main-controls"),D("design:type",typeof(Qr=typeof q<"u"&&q)=="function"?Qr:Object)],$.prototype,"mainControlsWindow",void 0);C([w("rr-settings"),D("design:type",typeof(Xr=typeof ee<"u"&&ee)=="function"?Xr:Object)],$.prototype,"settingsWindow",void 0);C([w("rr-presets"),D("design:type",typeof(Yr=typeof R<"u"&&R)=="function"?Yr:Object)],$.prototype,"presetsWindow",void 0);$=C([x("radioreceiver-main"),D("design:paramtypes",[])],$);var ys=class{constructor(e,t,i,s){this.bandwidth=e,this.scale=t,this.setFrequency=s,this.original={...i}}drag(e){let i=-e.detail.fraction*this.bandwidth,s=this.original.center+i;s=this.scale*Math.round(s/this.scale);let n={...this.original,center:s,offset:this.original.center+this.original.offset-s};n.offset-n.leftBand<=-this.bandwidth/2&&(n.offset=n.leftBand-this.bandwidth/2),this.bandwidth/2<=n.offset+n.rightBand&&(n.offset=this.bandwidth/2-n.rightBand),this.scheduleFrequencyChange(n)}cancel(){this.newFreq=this.original,this.changeFrequency()}finish(){this.changeFrequency()}scheduleFrequencyChange(e){this.newFreq=e,this.timeout==null&&(this.timeout=window.setTimeout(()=>this.changeFrequency(),50))}changeFrequency(){this.newFreq!==void 0&&(this.setFrequency(this.newFreq),this.newFreq=void 0,clearTimeout(this.timeout),this.timeout=void 0)}};pr();"serviceWorker"in navigator&&navigator.serviceWorker.register("offline.js");})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
