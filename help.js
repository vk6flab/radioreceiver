"use strict";(()=>{var ie=globalThis,re=ie.ShadowRoot&&(ie.ShadyCSS===void 0||ie.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ae=Symbol(),Ei=new WeakMap,It=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Ae)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(re&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=Ei.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ei.set(e,t))}return t}toString(){return this.cssText}},zi=r=>new It(typeof r=="string"?r:r+"",void 0,Ae),g=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new It(e,r,Ae)},Re=(r,t)=>{if(re)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),s=ie.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},se=re?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return zi(e)})(r):r;var{is:Wr,defineProperty:Zr,getOwnPropertyDescriptor:Vr,getOwnPropertyNames:Yr,getOwnPropertySymbols:Xr,getPrototypeOf:Gr}=Object,oe=globalThis,Ai=oe.trustedTypes,Kr=Ai?Ai.emptyScript:"",Qr=oe.reactiveElementPolyfillSupport,kt=(r,t)=>r,jt={toAttribute(r,t){switch(t){case Boolean:r=r?Kr:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},ne=(r,t)=>!Wr(r,t),Ri={attribute:!0,type:String,converter:jt,reflect:!1,hasChanged:ne};Symbol.metadata??=Symbol("metadata"),oe.litPropertyMetadata??=new WeakMap;var rt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ri){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Zr(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:o}=Vr(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s?.call(this)},set(n){let a=s?.call(this);o.call(this,n),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ri}static _$Ei(){if(this.hasOwnProperty(kt("elementProperties")))return;let t=Gr(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(kt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(kt("properties"))){let e=this.properties,i=[...Yr(e),...Xr(e)];for(let s of i)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(se(s))}else t!==void 0&&e.push(se(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Re(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){let o=(i.converter?.toAttribute!==void 0?i.converter:jt).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let o=i.getPropertyOptions(s),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:jt;this._$Em=s,this[s]=n.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??ne)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,o]of i)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],o)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}};rt.elementStyles=[],rt.shadowRootOptions={mode:"open"},rt[kt("elementProperties")]=new Map,rt[kt("finalized")]=new Map,Qr?.({ReactiveElement:rt}),(oe.reactiveElementVersions??=[]).push("2.0.4");var Fe=globalThis,ae=Fe.trustedTypes,Mi=ae?ae.createPolicy("lit-html",{createHTML:r=>r}):void 0,Fi="$lit$",pt=`lit$${Math.random().toFixed(9).slice(2)}$`,Ti="?"+pt,Jr=`<${Ti}>`,yt=document,Ut=()=>yt.createComment(""),Wt=r=>r===null||typeof r!="object"&&typeof r!="function",Te=Array.isArray,ts=r=>Te(r)||typeof r?.[Symbol.iterator]=="function",Me=`[ 	
\f\r]`,Ht=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pi=/-->/g,qi=/>/g,bt=RegExp(`>|${Me}(?:([^\\s"'>=/]+)(${Me}*=${Me}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Bi=/'/g,Oi=/"/g,Li=/^(?:script|style|textarea|title)$/i,Le=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),c=Le(1),A=Le(2),ws=Le(3),wt=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),Ni=new WeakMap,vt=yt.createTreeWalker(yt,129);function Ii(r,t){if(!Te(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Mi!==void 0?Mi.createHTML(t):t}var es=(r,t)=>{let e=r.length-1,i=[],s,o=t===2?"<svg>":t===3?"<math>":"",n=Ht;for(let a=0;a<e;a++){let h=r[a],p,u,d=-1,w=0;for(;w<h.length&&(n.lastIndex=w,u=n.exec(h),u!==null);)w=n.lastIndex,n===Ht?u[1]==="!--"?n=Pi:u[1]!==void 0?n=qi:u[2]!==void 0?(Li.test(u[2])&&(s=RegExp("</"+u[2],"g")),n=bt):u[3]!==void 0&&(n=bt):n===bt?u[0]===">"?(n=s??Ht,d=-1):u[1]===void 0?d=-2:(d=n.lastIndex-u[2].length,p=u[1],n=u[3]===void 0?bt:u[3]==='"'?Oi:Bi):n===Oi||n===Bi?n=bt:n===Pi||n===qi?n=Ht:(n=bt,s=void 0);let v=n===bt&&r[a+1].startsWith("/>")?" ":"";o+=n===Ht?h+Jr:d>=0?(i.push(p),h.slice(0,d)+Fi+h.slice(d)+pt+v):h+pt+(d===-2?a:v)}return[Ii(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},Zt=class r{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0,a=t.length-1,h=this.parts,[p,u]=es(t,e);if(this.el=r.createElement(p,i),vt.currentNode=this.el.content,e===2||e===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=vt.nextNode())!==null&&h.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(let d of s.getAttributeNames())if(d.endsWith(Fi)){let w=u[n++],v=s.getAttribute(d).split(pt),O=/([.?@])?(.*)/.exec(w);h.push({type:1,index:o,name:O[2],strings:v,ctor:O[1]==="."?qe:O[1]==="?"?Be:O[1]==="@"?Oe:Et}),s.removeAttribute(d)}else d.startsWith(pt)&&(h.push({type:6,index:o}),s.removeAttribute(d));if(Li.test(s.tagName)){let d=s.textContent.split(pt),w=d.length-1;if(w>0){s.textContent=ae?ae.emptyScript:"";for(let v=0;v<w;v++)s.append(d[v],Ut()),vt.nextNode(),h.push({type:2,index:++o});s.append(d[w],Ut())}}}else if(s.nodeType===8)if(s.data===Ti)h.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(pt,d+1))!==-1;)h.push({type:7,index:o}),d+=pt.length-1}o++}}static createElement(t,e){let i=yt.createElement("template");return i.innerHTML=t,i}};function _t(r,t,e=r,i){if(t===wt)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl,o=Wt(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=_t(r,s._$AS(r,t.values),s,i)),t}var Pe=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??yt).importNode(e,!0);vt.currentNode=s;let o=vt.nextNode(),n=0,a=0,h=i[0];for(;h!==void 0;){if(n===h.index){let p;h.type===2?p=new Vt(o,o.nextSibling,this,t):h.type===1?p=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(p=new Ne(o,this,t)),this._$AV.push(p),h=i[++a]}n!==h?.index&&(o=vt.nextNode(),n++)}return vt.currentNode=yt,s}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Vt=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=_t(this,t,e),Wt(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==wt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ts(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==f&&Wt(this._$AH)?this._$AA.nextSibling.data=t:this.T(yt.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Zt.createElement(Ii(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let o=new Pe(s,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=Ni.get(t.strings);return e===void 0&&Ni.set(t.strings,e=new Zt(t)),e}k(t){Te(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let o of t)s===e.length?e.push(i=new r(this.O(Ut()),this.O(Ut()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Et=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=f}_$AI(t,e=this,i,s){let o=this.strings,n=!1;if(o===void 0)t=_t(this,t,e,0),n=!Wt(t)||t!==this._$AH&&t!==wt,n&&(this._$AH=t);else{let a=t,h,p;for(t=o[0],h=0;h<o.length-1;h++)p=_t(this,a[i+h],e,h),p===wt&&(p=this._$AH[h]),n||=!Wt(p)||p!==this._$AH[h],p===f?t=f:t!==f&&(t+=(p??"")+o[h+1]),this._$AH[h]=p}n&&!s&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},qe=class extends Et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}},Be=class extends Et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}},Oe=class extends Et{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=_t(this,t,e,0)??f)===wt)return;let i=this._$AH,s=t===f&&i!==f||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==f&&(i===f||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Ne=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){_t(this,t)}};var is=Fe.litHtmlPolyfillSupport;is?.(Zt,Vt),(Fe.litHtmlVersions??=[]).push("3.2.1");var ki=(r,t,e)=>{let i=e?.renderBefore??t,s=i._$litPart$;if(s===void 0){let o=e?.renderBefore??null;i._$litPart$=s=new Vt(t.insertBefore(Ut(),o),o,void 0,e??{})}return s._$AI(r),s};var m=class extends rt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ki(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return wt}};m._$litElement$=!0,m.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:m});var rs=globalThis.litElementPolyfillSupport;rs?.({LitElement:m});(globalThis.litElementVersions??=[]).push("4.1.1");var b=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var ss={attribute:!0,type:String,converter:jt,reflect:!1,hasChanged:ne},os=(r=ss,t,e)=>{let{kind:i,metadata:s}=e,o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(e.name,r),i==="accessor"){let{name:n}=e;return{set(a){let h=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,h,r)},init(a){return a!==void 0&&this.P(n,void 0,r),a}}}if(i==="setter"){let{name:n}=e;return function(a){let h=this[n];t.call(this,a),this.requestUpdate(n,h,r)}}throw Error("Unsupported decorator location: "+i)};function l(r){return(t,e)=>typeof e=="object"?os(r,t,e):((i,s,o)=>{let n=s.hasOwnProperty(o);return s.constructor.createProperty(o,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(s,o):void 0})(r,t,e)}function I(r){return l({...r,state:!0,attribute:!1})}var xt=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);function y(r,t){return(e,i,s)=>{let o=n=>n.renderRoot?.querySelector(r)??null;if(t){let{get:n,set:a}=typeof i=="object"?e:s??(()=>{let h=Symbol();return{get(){return this[h]},set(p){this[h]=p}}})();return xt(e,i,{get(){let h=n.call(this);return h===void 0&&(h=o(this),(h!==null||this.hasUpdated)&&a.call(this,h)),h}})}return xt(e,i,{get(){return o(this)}})}}function ji(){return[...Hi.keys()]}function Ie(r){let t=Ui(r);return new t.config(r).mode}function U(r){let t=Ui(r);return new t.config(r)}var Hi=new Map;function Ui(r){let t=typeof r=="string"?r:r.scheme,e=Hi.get(t);if(!e)throw`Scheme "${t}" was not registered.`;return e}function N(r,t){return c`<svg version="1.1" width="16" height="16">
    <title>${r}</title>
    ${t}
  </svg>`}var Wi=N("Close",A`<g><path d="M2 4v-2h2l4 4 4 -4h2v2l-4 4 4 4v2h-2l-4 -4 -4 4h-2v-2l4 -4z"></path></g>`),Zi=N("Resize",A`<g><path d="M2,2V8L4.25,5.75 10.25,11.75 8,14 14,14 14,8 11.75,10.25 5.75,4.25 8,2Z"></path></g>`),le=N("Stop playing",A`<g><path d="M3 3v10h10V3z"></path></g>`),he=N("Start playing",A`<g><path d="M3 2v12l10 -6z"></path></g>`),ce=N("Settings",A`<g><path d="M5 1A4 4 0 0 0 3.7 1.2L6.5 4 6 6 4 6.5 1.2 3.7A4 4 0 0 0 1 5 4 4 0 0 0 5 9 4 4 0 0 0 6.6 8.6L12.5 14.5A1.4 1.4 0 0 0 13.6 15 1.4 1.4 0 0 0 15 13.6 1.4 1.4 0 0 0 14.5 12.5L8.6 6.6A4 4 0 0 0 9 5 4 4 0 0 0 5 1z"></path></g>`),Vi=N("Help",A`<g>
    <path
      d="M8 1A5 4.5 0 0 0 3 5.5L3 6L5 6L5 5.5A3 2.5 0 0 1 8 3A3 2.5 0 0 1 11 5.5A3 2.5 0 0 1 8 8L7 8L7 9L7 10L7 12L9 12L9 10A5 4.5 0 0 0 13 5.5A5 4.5 0 0 0 8 1z"
    ></path>
    <circle cy="14" cx="8" r="1"></circle>
  </g>`),de=N("Scroll left",A`<g><path d="m11 2v2l-4 4 4 4v2H9L3 8 9 2Z"></path></g>`),pe=N("Scroll right",A`<g><path d="m5 2v2l4 4 -4 4v2h2L13 8 7 2Z"></path></g>`);function Yi(r,t){return N(r,A`<g>
        <path
          d="M7 1A6 6 0 0 0 1 7A6 6 0 0 0 7 13A6 6 0 0 0 13 7A6 6 0 0 0 7 1zM7 3A4 4 0 0 1 11 7A4 4 0 0 1 7 11A4 4 0 0 1 3 7A4 4 0 0 1 7 3z"
        ></path>
        <path d="M14.5 13l-1.5 1.5 -4 -4 1.5 -1.5z"></path>
        ${t}
      </g>`)}var ue=Yi("Zoom in",A`<path d="M4 6v2h2v2h2v-2h2v-2h-2v-2h-2v2Z"></path>`),fe=Yi("Zoom out",A`<path d="M4 6v2h6v-2Z"></path>`),Xi=N("Stereo",A`<g><path d="M 6 3A 5 5 0 0 0 1 8A 5 5 0 0 0 6 13A 5 5 0 0 0 8 13A 5 5 0 0 0 10 13A 5 5 0 0 0 15 8A 5 5 0 0 0 10 3A 5 5 0 0 0 8 3A 5 5 0 0 0 6 3zM 6 5A 3 3 0 0 1 9 8A 3 3 0 0 1 6 11A 3 3 0 0 1 3 8A 3 3 0 0 1 6 5zM 10 5A 3 3 0 0 1 13 8A 3 3 0 0 1 10 11A 3 3 0 0 1 10 11A 5 5 0 0 0 11 8A 5 5 0 0 0 10 5z"></g>`),Gi=N("Error state",A`<g>
    <path d="M 2.5 8A 1.5 1.5 0 0 0 1 9.5A 1.5 1.5 0 0 0 2.5 11A 1.5 1.5 0 0 0 3.7 10.4L 12 13.5A 1.5 1.5 0 0 0 12 13.5A 1.5 1.5 0 0 0 13.5 15A 1.5 1.5 0 0 0 15 13.5A 1.5 1.5 0 0 0 13.5 12A 1.5 1.5 0 0 0 12.3 12.6L 4 9.5A 1.5 1.5 0 0 0 4 9.5A 1.5 1.5 0 0 0 2.5 8z"></path>
    <path d="M 13.5 8A 1.5 1.5 0 0 0 12 9.5A 1.5 1.5 0 0 0 12 9.5L 3.7 12.6A 1.5 1.5 0 0 0 2.5 12A 1.5 1.5 0 0 0 1 13.5A 1.5 1.5 0 0 0 2.5 15A 1.5 1.5 0 0 0 4 13.5A 1.5 1.5 0 0 0 4 13.5L 12.3 10.4A 1.5 1.5 0 0 0 13.5 11A 1.5 1.5 0 0 0 15 9.5A 1.5 1.5 0 0 0 13.5 8z"></path>
    <path d="M 8 1A 5 4.5 0 0 0 3 5.5A 5 4.5 0 0 0 5 9.1L 5 12.1A 5 4.5 0 0 0 8 13A 5 4.5 0 0 0 11 12.1L 11 9.1A 5 4.5 0 0 0 13 5.5A 5 4.5 0 0 0 8 1zM 5.8 4A 1.8 1.5 0 0 1 7.5 5.5A 1.8 1.5 0 0 1 5.8 7A 1.8 1.5 0 0 1 4 5.5A 1.8 1.5 0 0 1 5.8 4zM 10.2 4A 1.8 1.5 0 0 1 12 5.5A 1.8 1.5 0 0 1 10.2 7A 1.8 1.5 0 0 1 8.5 5.5A 1.8 1.5 0 0 1 10.2 4zM 8 7.5A 1.5 0.8 0 0 1 9.5 8.2A 1.5 0.8 0 0 1 8 9A 1.5 0.8 0 0 1 6.5 8.2A 1.5 0.8 0 0 1 8 7.5z"></path>
  </g>`),Yt=N("Add",A`<g><path d="M2,7h5v-5h2v5h5v2h-5v5h-2v-5h-5z"></path></g>`),me=N("Edit",A`<g><path d="M1.9,15.37A1,1 0 0 1 0.63,14.1L2,10 12,0 16,4 6,14ZM2,14 5,13 3,11ZM6,12 14,4 12,2 4,10Z"></path></g>`),ge=N("Delete",A`<g><path d="M2 2h1l5 5 5 -5h1v1l-5 5 5 5v1h-1l-5 -5 -5 5h-1v-1l5 -5l-5 -5z"></path></g>`),co=N("Update",A`<g><path d="M1 1L3 3A7 7 0 0 0 1 8A7 7 0 0 0 8 15v-2A5 5 0 0 1 3 8A5 5 0 0 1 4.5 4.5L7 7v-6h-6zM8 1v2A5 5 0 0 1 13 8A5 5 0 0 1 11.5 11.5L9 9v6h6L13 13A7 7 0 0 0 15 8A7 7 0 0 0 8 1z"></path></g>`),be=N("Presets",A`<g><path d="M1,1h6v6h-6zM3,3v2h2v-2zM9,1h6v6h-6zM11,3v2h2v-2zM1,9h6v6h-6zM3,11v2h2v-2zM9,9h6v6h-6zM11,11v2h2v-2z"></path></g>`),Ki=c`<svg version="1.1" width="10" height="9">
  <g><path d="M1,8h8l-4,-6z"></path></g>
</svg>`,Qi=c`<svg version="1.1" width="10" height="9">
  <g><path d="M1,1h8l-4,6z"></path></g>
</svg>`;var At=class extends CustomEvent{constructor(t){super("spectrum-tap",{detail:t,bubbles:!0,composed:!0})}},$t=class extends CustomEvent{constructor(t){super("spectrum-drag",{detail:t,bubbles:!0,composed:!0})}},ve=class extends CustomEvent{constructor(t){super("spectrum-highlight-changed",{detail:t,bubbles:!0,composed:!0})}},St=class extends CustomEvent{constructor(t){super("spectrum-zoom",{detail:t,bubbles:!0,composed:!0})}},Xt=class extends CustomEvent{constructor(t){super("spectrum-decibel-range-changed",{detail:t,bubbles:!0,composed:!0})}};var k=class{constructor(t,e,i,s,o){this.width=e;this.bins=i;this.centerFreq=s;this.bandwidth=o;this.leftBin=Math.floor(t.leftFraction*i),this.visibleBins=Math.floor(t.spanFraction*i),this.leftFrequency=this.binNumberToFrequency(this.leftBin-.5),this.rightFrequency=this.binNumberToFrequency(this.leftBin+this.visibleBins-.5)}zoomed(t){return(t*this.bins-this.leftBin+.5)/this.visibleBins}unzoomed(t){return(this.leftBin+this.visibleBins*t-.5)/this.bins}screenBinToFftBin(t){return(t+this.bins/2)%this.bins}leftCoordToBinNumber(t){return Math.round(this.leftBin+t*this.visibleBins/this.width)}binNumberToCenterCoord(t){return this.width*(t+.5-this.leftBin)/this.visibleBins}binNumberToFrequency(t){return this.centerFreq&&this.bandwidth?this.centerFreq+this.bandwidth*(t/this.bins-.5):this.centerFreq||0}};var Ji=1,tr=16,x=class r{constructor(t,e){t===void 0&&(t=1),e===void 0&&(e=.5),t<Ji&&(t=Ji),t>tr&&(t=tr);let i=1/(2*t);e-i<0&&(e=i),e+i>1&&(e=1-i),this.center=e,this.level=t}zoomed(t){return .5+this.level*(t-this.center)}unzoomed(t){return this.center+(t-.5)/this.level}get leftFraction(){return this.center-1/(2*this.level)}get rightFraction(){return this.center+1/(2*this.level)}get spanFraction(){return 1/this.level}isVisible(t){let e=this.zoomed(t);return 0<=e&&e<1}withCenter(t){return new r(this.level,t)}withMovedCenter(t){return this.withCenter(this.center+t)}withLevel(t){return new r(t,this.center)}withLevelInContext(t,e){let i=this.zoomed(e);if(i<0||i>=1)return this.withLevel(t);let s=e+(.5-i)/t;return new r(t,s)}},B=new x;var Rt=function(r,t,e,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,t,e,i);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(o=(s<3?n(o):s>3?n(t,e,o):n(t,e))||o);return s>3&&o&&Object.defineProperty(t,e,o),o},Mt=function(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)},er,ir,Q=class extends m{static get styles(){return[g`
        #scope {
          color: var(--rr-scope-color, yellow);
          width: 100%;
          height: 100%;
        }
      `]}render(){return c`<canvas id="scope"></canvas>`}constructor(){super(),this.minDecibels=-100,this.maxDecibels=-30,this.fftSize=2048,this.zoom=B,this.spectrum=new Float32Array(this.fftSize),this.width=this.fftSize,this.addEventListener("click",t=>this.onClick(t))}addFloatSpectrum(t){this.fftSize!=t.length&&(this.fftSize=t.length,this.spectrum=new Float32Array(this.fftSize)),this.spectrum.set(t),this.redraw()}updated(t){super.updated(t),t.has("zoom")&&this.redraw()}redraw(){let t=this.getContext();if(!t)return;let e=t.canvas.offsetWidth,i=t.canvas.offsetHeight;t.canvas.width!=e&&(t.canvas.width=e),t.canvas.height!=i&&(t.canvas.height=i),this.width!=e&&(this.width=e);let s=this.minDecibels,o=this.maxDecibels,n=o-s,a=(1-i)/n;t.clearRect(0,0,t.canvas.width,t.canvas.height),t.strokeStyle=getComputedStyle(this.canvas).getPropertyValue("color"),t.beginPath();let h=new k(this.zoom,this.width,this.fftSize),p=u=>(this.spectrum[h.screenBinToFftBin(u)]-o)*a;if(h.visibleBins<=e){let u=d=>h.binNumberToCenterCoord(d);t.moveTo(u(h.leftBin-1),p(h.leftBin-1));for(let d=0;d<h.visibleBins+1;++d)t.lineTo(u(h.leftBin+d),p(h.leftBin+d))}else for(let u=0;u<e;++u){let d=h.leftCoordToBinNumber(u),w=h.leftCoordToBinNumber(u+1),v=p(d);for(let O=d+1;O<w;++O)v=Math.min(v,p(O));u==0?t.moveTo(u,v):t.lineTo(u,v)}t.stroke()}onClick(t){let i=new k(this.zoom,this.width,this.fftSize).unzoomed(t.offsetX/this.offsetWidth);this.dispatchEvent(new At({fraction:i,target:"scope"})),t.preventDefault()}getContext(){if(this.context)return this.context;if(this.canvas)return this.canvas.width=this.fftSize,this.canvas.height=this.maxDecibels-this.minDecibels,this.context=this.canvas.getContext("2d"),this.context}};Rt([l({type:Number,reflect:!0,attribute:"min-decibels"}),Mt("design:type",Number)],Q.prototype,"minDecibels",void 0);Rt([l({type:Number,reflect:!0,attribute:"max-decibels"}),Mt("design:type",Number)],Q.prototype,"maxDecibels",void 0);Rt([l({type:Number,reflect:!0}),Mt("design:type",Number)],Q.prototype,"fftSize",void 0);Rt([l({attribute:!1}),Mt("design:type",typeof(er=typeof x<"u"&&x)=="function"?er:Object)],Q.prototype,"zoom",void 0);Rt([y("#scope"),Mt("design:type",typeof(ir=typeof HTMLCanvasElement<"u"&&HTMLCanvasElement)=="function"?ir:Object)],Q.prototype,"canvas",void 0);Q=Rt([b("rr-scope-line"),Mt("design:paramtypes",[])],Q);var st=function(r,t,e,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,t,e,i);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(o=(s<3?n(o):s>3?n(t,e,o):n(t,e))||o);return s>3&&o&&Object.defineProperty(t,e,o),o},ot=function(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)},rr,sr,J=class extends m{static get styles(){return[g`
        canvas {
          color: var(--rr-captions-color, rgba(255, 255, 255, 0.5));
          width: 100%;
          height: 100%;
        }
      `]}render(){return c`<canvas id="canvas"></canvas>`}constructor(){super(),this.centerFrequency=0,this.frequencyScale=1,this.minDecibels=-100,this.maxDecibels=-30,this.fftSize=2048,this.zoom=B,this.resizeObserver=new ResizeObserver(()=>this.redraw())}connectedCallback(){super.connectedCallback(),this.resizeObserver?.disconnect(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect()}firstUpdated(t){super.firstUpdated(t),this.redraw()}updated(t){super.updated(t),!(t.size==0||t.size==1&&t.has("lines"))&&this.redraw()}redraw(){let t=this.getContext();if(!t)return;let e=t.canvas;e.width!=e.offsetWidth&&(e.width=this.offsetWidth),e.height!=e.offsetHeight&&(e.height=this.offsetHeight);let i=e.width,s=e.height,o=16,n=24,a=getComputedStyle(t.canvas).getPropertyValue("color"),h=this.computeLines(i-n,s-o);t.clearRect(0,0,i,s),t.save(),t.fillStyle=a;for(let{position:p,value:u,horizontal:d}of h){let[w,v]=[n+p*(i-n),o+p*(s-o)],O=String(d?u:u/(this.frequencyScale||1));if(d){t.textBaseline="middle",t.textAlign="right",w=n-2;let V=t.measureText(O);v-V.actualBoundingBoxAscent<o&&(v=V.actualBoundingBoxAscent+o),v+V.actualBoundingBoxDescent>s&&(v=s-V.actualBoundingBoxDescent)}else{t.textBaseline="bottom",t.textAlign="center",v=o-2;let V=t.measureText(O);w-V.actualBoundingBoxLeft<n&&(w=V.actualBoundingBoxLeft+n),w+V.actualBoundingBoxRight>i&&(w=i-V.actualBoundingBoxRight)}t.fillText(O,w,v)}t.restore(),t.save(),t.strokeStyle=a,t.beginPath();for(let{position:p,horizontal:u}of h)if(u){let d=o+p*(s-o);t.moveTo(n,d),t.lineTo(i,d)}else{let d=n+p*(i-n);t.moveTo(d,o),t.lineTo(d,s)}t.stroke(),t.restore()}getContext(){if(this.context)return this.context;if(this.canvas)return this.context=this.canvas.getContext("2d"),this.context}computeLines(t,e){let i=[];if(this.minDecibels!==void 0&&this.maxDecibels!==void 0&&i.push(...or(this.minDecibels,this.maxDecibels,20,25,e,Gt.Descending,Kt.Horizontal,[1,2,3,5,6,10])),this.bandwidth!==void 0){let s=new k(this.zoom,1,this.fftSize,this.centerFrequency,this.bandwidth);i.push(...or(s.leftFrequency,s.rightFrequency,50,80,t,Gt.Ascending,Kt.Vertical))}else{let s=this.zoom.zoomed(.5);s>=0&&s<=1&&i.push({value:this.centerFrequency,position:s,horizontal:!1})}return i}};st([l({type:Number,reflect:!0}),ot("design:type",Number)],J.prototype,"bandwidth",void 0);st([l({type:Number,reflect:!0,attribute:"center-frequency"}),ot("design:type",Number)],J.prototype,"centerFrequency",void 0);st([l({type:Number,reflect:!0,attribute:"frequency-scale"}),ot("design:type",Number)],J.prototype,"frequencyScale",void 0);st([l({type:Number,reflect:!0,attribute:"min-decibels"}),ot("design:type",Number)],J.prototype,"minDecibels",void 0);st([l({type:Number,reflect:!0,attribute:"max-decibels"}),ot("design:type",Number)],J.prototype,"maxDecibels",void 0);st([l({type:Number,reflect:!0}),ot("design:type",Number)],J.prototype,"fftSize",void 0);st([l({attribute:!1}),ot("design:type",typeof(rr=typeof x<"u"&&x)=="function"?rr:Object)],J.prototype,"zoom",void 0);st([y("#canvas"),ot("design:type",typeof(sr=typeof HTMLCanvasElement<"u"&&HTMLCanvasElement)=="function"?sr:Object)],J.prototype,"canvas",void 0);J=st([b("rr-scope-background"),ot("design:paramtypes",[])],J);var Gt;(function(r){r[r.Ascending=0]="Ascending",r[r.Descending=1]="Descending"})(Gt||(Gt={}));var Kt;(function(r){r[r.Horizontal=0]="Horizontal",r[r.Vertical=1]="Vertical"})(Kt||(Kt={}));function or(r,t,e,i,s,o,n,a=[1,2,5,10]){let h=t-r,p=Math.pow(10,Math.floor(Math.log10(h/2))),u=ke(e/s,i/s,h,p,a),d=n==Kt.Horizontal,w=[],v=r;for(v%u!=0&&(v+=u-v%u);v<=t;){let O=o==Gt.Ascending?(v-r)/h:(t-v)/h;w.push({position:O,value:v,horizontal:d}),v+=u}return w}function ke(r,t,e,i,s){let o=e*r/i,n=e*t/i,a=(o+n)/2;if(n<s[0])return ke(r,t,e,i/10,s);if(o>s[s.length-1])return ke(r,t,e,i*10,s);let h=s[0],p=Math.abs(h-a),u=h>=o&&h<=n;for(let d=1;d<s.length;++d){let w=s[d]>=o&&s[d]<=n;if(u&&!w)continue;let v=Math.abs(s[d]-a);v<p&&(h=s[d],p=v,u=w)}return h*i}var nt=function(r,t,e,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,t,e,i);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(o=(s<3?n(o):s>3?n(t,e,o):n(t,e))||o);return s>3&&o&&Object.defineProperty(t,e,o),o},ut=function(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)},nr,ar,F=class extends m{constructor(){super(...arguments),this.centerFrequency=0,this.frequencyScale=1,this.minDecibels=-100,this.maxDecibels=-30,this.fftSize=2048,this.zoom=B}static get styles(){return[g`
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
      `]}render(){return c`<div id="container">
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
    </div> `}addFloatSpectrum(t){t.length!=this.fftSize&&(this.fftSize=t.length),this.line?.addFloatSpectrum(t)}};nt([l({type:Number,reflect:!0}),ut("design:type",Number)],F.prototype,"bandwidth",void 0);nt([l({type:Number,reflect:!0,attribute:"center-frequency"}),ut("design:type",Number)],F.prototype,"centerFrequency",void 0);nt([l({type:Number,reflect:!0,attribute:"frequency-scale"}),ut("design:type",Number)],F.prototype,"frequencyScale",void 0);nt([l({type:Number,reflect:!0,attribute:"min-decibels"}),ut("design:type",Number)],F.prototype,"minDecibels",void 0);nt([l({type:Number,reflect:!0,attribute:"max-decibels"}),ut("design:type",Number)],F.prototype,"maxDecibels",void 0);nt([l({type:Number,reflect:!0}),ut("design:type",Number)],F.prototype,"fftSize",void 0);nt([l({attribute:!1}),ut("design:type",typeof(nr=typeof x<"u"&&x)=="function"?nr:Object)],F.prototype,"zoom",void 0);nt([y("#line"),ut("design:type",typeof(ar=typeof Q<"u"&&Q)=="function"?ar:Object)],F.prototype,"line",void 0);F=nt([b("rr-scope")],F);function ns(r,t,e,i){let s=new Array(256),o=s.length;for(let n=0;n<o;++n){let a=n/(o-1),h=Math.pow(a,i),p=2*Math.PI*(r/3+t*a),u=e*h*(1-h)/2,d=Math.cos(p),w=Math.sin(p),v=h+u*(-.14861*d+1.78277*w),O=h+u*(-.29227*d-.90649*w),V=h+u*1.97294*d;s[n]=[Math.floor(Math.max(0,Math.min(255,256*v))),Math.floor(Math.max(0,Math.min(255,256*O))),Math.floor(Math.max(0,Math.min(255,256*V)))]}return s}var Pt=ns(2,1,3,1);function as(){let r=[.13572138,4.6153926,-42.66032258,132.13108234,-152.94239396,59.28637943],t=[.09140261,2.19418839,4.84296658,-14.18503333,4.27729857,2.82956604],e=[.1066733,12.64194608,-60.58204836,110.36276771,-89.90310912,27.34824973],i=(n,a)=>n[0]*a[0]+n[1]*a[1]+n[2]*a[2]+n[3]*a[3]+n[4]*a[4]+n[5]*a[5],s=new Array(256),o=s.length;for(let n=0;n<o;++n){let a=n/255,h=[1,a,a*a,a*a*a,a*a*a*a,a*a*a*a*a];s[n]=[Math.floor(Math.max(0,Math.min(255,255*i(h,r)))),Math.floor(Math.max(0,Math.min(255,255*i(h,t)))),Math.floor(Math.max(0,Math.min(255,255*i(h,e))))]}return s}var Io=as();var P=class{constructor(t,e=4){this.handler=t;this.minPixelDelta=e;this.onPointerMove=i=>this.drag(i),this.onPointerUp=i=>this.finish(i),this.onPointerCancel=i=>this.cancel(i)}startDragging(t){t.button==0&&(this.dragData&&(this.handler.cancelDrag(),this.dragData.release()),this.dragData=new je(t,this.minPixelDelta,this.onPointerMove,this.onPointerUp,this.onPointerCancel),this.dragData.capture(),this.drag(t),t.preventDefault())}drag(t){if(this.dragData===void 0)return;t.preventDefault();let{start:e,moved:i,x:s,y:o}=this.dragData.delta(t);i&&(e&&this.handler.startDrag(),this.handler.drag(s,o))}finish(t){this.dragData!==void 0&&(this.dragData.hasMoved()?(this.handler.finishDrag(),t.preventDefault()):this.handler.onClick(t),this.release())}cancel(t){this.dragData!==void 0&&(this.handler.cancelDrag(),t.preventDefault(),this.release())}release(){this.dragData?.release(),this.dragData=void 0}},je=class{constructor(t,e,i,s,o){this.minPixelDelta=e;this.move=i;this.up=s;this.cancel=o;this.moved=!1,this.startX=t.clientX,this.startY=t.clientY,this.pointerId=t.pointerId,this.target=t.target}capture(){this.target.addEventListener("pointermove",this.move),this.target.addEventListener("pointerup",this.up),this.target.addEventListener("pointercancel",this.cancel),this.target.setPointerCapture(this.pointerId)}release(){this.target.removeEventListener("pointermove",this.move),this.target.removeEventListener("pointerup",this.up),this.target.removeEventListener("pointercancel",this.cancel),this.target.releasePointerCapture(this.pointerId)}hasMoved(){return this.moved}delta(t){let e=!1;!this.moved&&this.minPixelDelta==0&&(e=!0,this.moved=!0);let i={start:e,moved:this.moved,x:t.clientX-this.startX,y:t.clientY-this.startY};return i.moved||Math.max(Math.abs(i.x),Math.abs(i.y))>=this.minPixelDelta&&(this.moved=!0,i.moved=!0,i.start=!0),i}};var ye=class{constructor(){this.palette=Pt;this.images=[]}addFloatSpectrum(t,e,i,s,o){let n=t.length;if(this.prepareImageStack(n),s!==void 0&&o!==void 0){if(s!==this.frequency&&this.frequency!==void 0){let p=(s-this.frequency)/o;this.images.map(u=>u.scroll(p))}this.frequency=s}let a=this.images.map(p=>p.startRow(n,e,i)),h=n/2;for(let p=0;p<n;++p)a.map(u=>u.addBin(t[(p+h)%n]))}draw(t,e){let i=e.level*t.canvas.offsetWidth;(this.images.find(o=>o.width>=i)||this.images[this.images.length-1])?.draw(t,e)}prepareImageStack(t){let e=this.images[this.images.length-1];if((e?.width||0)==t)return;let s=[1024,2048,8192,32768].filter(a=>a<t);s.push(t);let o=0,n=0;for(;o<s.length||n<this.images.length;){let a=s[o],h=this.images[n]?.width;if(a===void 0||a>h){this.images.splice(n,1);continue}(h===void 0||a<h)&&this.images.splice(n,0,e?.resizeTo(a)||new He(a,this.palette)),++o,++n}}},He=class r{constructor(t,e){this.width=t;this.palette=e;this.scrollError=0;this.height=screen.height,this.data=new Uint8ClampedArray(4*this.width*(this.height+1)),this.xOffset=0,this.yOffset=0}startRow(t,e,i){return this.deltaY(-1),new Ue(this.data,(this.xOffset+this.yOffset*this.width)*4,t/this.width,e,i,this.palette)}draw(t,e){let i=new k(e,this.width,this.width);t.canvas.width!=i.visibleBins&&(t.canvas.width=i.visibleBins),t.canvas.height!=t.canvas.offsetHeight&&(t.canvas.height=t.canvas.offsetHeight);let s=Math.min(this.height-this.yOffset,t.canvas.height),o=(this.xOffset+this.yOffset*this.width)*4,n=o+s*this.width*4;t.putImageData(new ImageData(this.data.subarray(o,n),this.width),-i.leftBin,0);let a=t.canvas.height-s;if(a<=0)return;let h=(this.xOffset+a*this.width)*4;t.putImageData(new ImageData(this.data.subarray(this.xOffset*4,h),this.width),-i.leftBin,s)}scroll(t){if(t>=1||t<=-1){this.data.fill(0),this.xOffset=0,this.yOffset=0,this.scrollError=0;return}t+=this.scrollError;let e=Math.round(this.width*t);if(this.scrollError=t-e/this.width,e==0)return;this.deltaX(e);let i=e>0?-e:0,s=e>0?0:-e;for(let o=0;o<=this.height;++o){let n=o*this.width+this.xOffset;this.data.fill(0,(n+i)*4,(n+s)*4)}}resizeTo(t){let e=new OffscreenCanvas(this.width,this.height);e.getContext("2d").putImageData(new ImageData(this.data.subarray(this.xOffset*4,(this.xOffset+this.height*this.width)*4),this.width),0,0);let o=new OffscreenCanvas(t,this.height).getContext("2d");o.drawImage(e,0,0,t,this.height);let n=new r(t,this.palette);return n.data.set(o.getImageData(0,0,t,this.height).data),n.xOffset=0,n.yOffset=this.yOffset,n.scrollError=this.scrollError,n}deltaX(t){let e=this.xOffset+t,i=0;if(e<0){let s=this.height*this.width*4;for(this.data.copyWithin(s+this.xOffset*4,this.xOffset*4,this.width*4);e<0;)e+=this.width,i--}if(e>=this.width){let s=this.height*this.width*4;for(this.data.copyWithin(0,s,s+this.xOffset*4);e>=this.width;)e-=this.width,i++}this.xOffset=e,i!=0&&this.deltaY(i)}deltaY(t){let e=this.yOffset+t;for(;e<0;)e+=this.height;for(;e>=this.height;)e-=this.height;this.yOffset=e}},Ue=class{constructor(t,e,i,s,o,n){this.data=t;this.offset=e;this.ratio=i;this.palette=n;this.p=0;this.value=0;this.sub=s,this.mul=256/(o-s)}addBin(t){if((this.p==0||t>this.value)&&(this.value=t),this.p++,this.p<this.ratio)return;let e=Math.max(0,Math.min(255,Math.floor(this.mul*(this.value-this.sub)))),i=this.palette[isNaN(e)?0:e];this.data[this.offset++]=i[0],this.data[this.offset++]=i[1],this.data[this.offset++]=i[2],this.data[this.offset++]=255,this.p=0}};var at=function(r,t,e,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,t,e,i);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(o=(s<3?n(o):s>3?n(t,e,o):n(t,e))||o);return s>3&&o&&Object.defineProperty(t,e,o),o},lt=function(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)},lr,hr,T=class extends m{static get styles(){return[g`
        #waterfall {
          width: 100%;
          height: 100%;
        }
      `]}render(){return c`<canvas id="waterfall"></canvas>`}constructor(){super(),this.minDecibels=-100,this.maxDecibels=-30,this.palette=Pt,this.fftSize=2048,this.zoom=B,this.draggable=!1,this.image=new ye,this.addEventListener("pointerdown",t=>this.onPointerDown(t))}firstUpdated(t){super.firstUpdated(t),this.dragController=new P(new We(this))}updated(t){super.updated(t),t.has("zoom")&&this.redraw()}addFloatSpectrum(t,e){this.image.addFloatSpectrum(e,this.minDecibels,this.maxDecibels,t,this.bandwidth),this.redraw()}redraw(){let t=this.getContext();t&&this.image.draw(t,this.zoom)}getContext(){return this.context?this.context:this.canvas?(this.context=this.canvas.getContext("2d"),new ResizeObserver(()=>this.redraw()).observe(this.canvas),this.context):void 0}onPointerDown(t){this.draggable&&this.dragController?.startDragging(t)}};at([l({type:Number,reflect:!0,attribute:"min-decibels"}),lt("design:type",Number)],T.prototype,"minDecibels",void 0);at([l({type:Number,reflect:!0,attribute:"max-decibels"}),lt("design:type",Number)],T.prototype,"maxDecibels",void 0);at([l({attribute:!1}),lt("design:type",Object)],T.prototype,"palette",void 0);at([l({type:Number,reflect:!0}),lt("design:type",Number)],T.prototype,"fftSize",void 0);at([l({attribute:!1}),lt("design:type",typeof(lr=typeof x<"u"&&x)=="function"?lr:Object)],T.prototype,"zoom",void 0);at([l({type:Number,reflect:!0}),lt("design:type",Number)],T.prototype,"bandwidth",void 0);at([l({type:Boolean,reflect:!0}),lt("design:type",Boolean)],T.prototype,"draggable",void 0);at([y("#waterfall"),lt("design:type",typeof(hr=typeof HTMLCanvasElement<"u"&&HTMLCanvasElement)=="function"?hr:Object)],T.prototype,"canvas",void 0);T=at([b("rr-waterfall"),lt("design:paramtypes",[])],T);var We=class{constructor(t){this.waterfall=t,this.fraction=0}startDrag(){this.fraction=0,this.waterfall.dispatchEvent(new $t({fraction:0,target:"waterfall",operation:"start"}))}drag(t,e){this.fraction=t/(this.waterfall.clientWidth*this.waterfall.zoom.level),this.waterfall.dispatchEvent(new $t({fraction:this.fraction,target:"waterfall"}))}finishDrag(){this.waterfall.dispatchEvent(new $t({fraction:this.fraction,target:"waterfall",operation:"finish"}))}cancelDrag(){this.waterfall.dispatchEvent(new $t({fraction:0,target:"waterfall",operation:"cancel"}))}onClick(t){let i=new k(this.waterfall.zoom,this.waterfall.offsetWidth,this.waterfall.fftSize).unzoomed(t.offsetX/this.waterfall.offsetWidth);this.waterfall.dispatchEvent(new At({fraction:i,target:"waterfall"})),t.preventDefault()}};var ht=function(r,t,e,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,t,e,i);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(o=(s<3?n(o):s>3?n(t,e,o):n(t,e))||o);return s>3&&o&&Object.defineProperty(t,e,o),o},ft=function(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)},cr,dr,pr,ur,fr,tt=class extends m{constructor(){super(...arguments),this.minDecibels=-100,this.maxDecibels=-30,this.palette=Pt}static get styles(){return[g`
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
      `]}render(){return c` <input
        id="min"
        type="text"
        .value=${qt(this.minDecibels)}
        @focus=${this.onMinFocus}
        @blur=${this.onMinBlur}
        @change=${this.onMinChange}
      />
      <canvas id="palette" width="256" height="24"></canvas>
      <input
        id="max"
        type="text"
        .value=${qt(this.maxDecibels)}
        @focus=${this.onMaxFocus}
        @blur=${this.onMaxBlur}
        @change=${this.onMaxChange}
      />
      <div id="minThumb" @pointerdown=${this.onMinPointerDown}>
        <div class="touchArea"></div>
      </div>
      <div id="maxThumb" @pointerdown=${this.onMaxPointerDown}>
        <div class="touchArea"></div>
      </div>`}firstUpdated(t){super.firstUpdated(t),this.minDragController=new P(new we("min",this,this.paletteBox),0),this.maxDragController=new P(new we("max",this,this.paletteBox),0),new ResizeObserver(()=>this.repaintPalette()).observe(document.body),this.repaintPalette()}updated(t){super.updated(t),this.repaintPalette()}repaintPalette(){let t=this.getContext();if(t){for(let e=0;e<t.canvas.width;++e){let s=255*(e*150/255+-150-this.minDecibels)/(this.maxDecibels-this.minDecibels);s<0&&(s=0),s>255&&(s=255),s=Math.floor(s),t.fillStyle=Ze(this.palette[s]),t.fillRect(e,0,1,24)}this.minBox&&(this.minBox.style.backgroundColor=Ze(this.palette[0]),this.minBox.style.color=mr(this.palette[0])?"white":"black"),this.maxBox&&(this.maxBox.style.backgroundColor=Ze(this.palette[255]),this.maxBox.style.color=mr(this.palette[255])?"white":"black"),this.minThumb&&this.paletteBox&&(this.minThumb.style.right=(this.minDecibels-0)*this.paletteBox.offsetWidth/-150+this.paletteBox.offsetLeft+"px"),this.maxThumb&&this.paletteBox&&(this.maxThumb.style.left=(this.maxDecibels- -150)*this.paletteBox.offsetWidth/150+this.paletteBox.offsetLeft+"px")}}getContext(){if(this.context)return this.context;if(this.paletteBox)return this.context=this.paletteBox.getContext("2d"),this.context}onMinFocus(t){let e=t.target;e.value=Ve(this.minDecibels)}onMinBlur(t){let e=t.target;e.value=qt(this.minDecibels)}onMinChange(t){let e=t.target,i=e.value;i.endsWith("dB")&&(i=i.substring(0,i.length-2).trim());let s=Number(i);isNaN(s)?e.value=qt(this.minDecibels):gr(s,this)}onMaxFocus(t){let e=t.target;e.value=Ve(this.maxDecibels)}onMaxBlur(t){let e=t.target;e.value=qt(this.maxDecibels)}onMaxChange(t){let e=t.target,i=e.value;i.endsWith("dB")&&(i=i.substring(0,i.length-2).trim());let s=Number(i);isNaN(s)?e.value=qt(this.maxDecibels):br(s,this)}onMinPointerDown(t){this.minDragController?.startDragging(t)}onMaxPointerDown(t){this.maxDragController?.startDragging(t)}};ht([l({type:Number,reflect:!0,attribute:"min-decibels"}),ft("design:type",Number)],tt.prototype,"minDecibels",void 0);ht([l({type:Number,reflect:!0,attribute:"max-decibels"}),ft("design:type",Number)],tt.prototype,"maxDecibels",void 0);ht([l({attribute:!1}),ft("design:type",Object)],tt.prototype,"palette",void 0);ht([y("#min"),ft("design:type",typeof(cr=typeof HTMLElement<"u"&&HTMLElement)=="function"?cr:Object)],tt.prototype,"minBox",void 0);ht([y("#max"),ft("design:type",typeof(dr=typeof HTMLElement<"u"&&HTMLElement)=="function"?dr:Object)],tt.prototype,"maxBox",void 0);ht([y("#palette"),ft("design:type",typeof(pr=typeof HTMLCanvasElement<"u"&&HTMLCanvasElement)=="function"?pr:Object)],tt.prototype,"paletteBox",void 0);ht([y("#minThumb"),ft("design:type",typeof(ur=typeof HTMLElement<"u"&&HTMLElement)=="function"?ur:Object)],tt.prototype,"minThumb",void 0);ht([y("#maxThumb"),ft("design:type",typeof(fr=typeof HTMLElement<"u"&&HTMLElement)=="function"?fr:Object)],tt.prototype,"maxThumb",void 0);tt=ht([b("rr-decibel-range")],tt);function Ze(r){return`rgb(${r[0]}, ${r[1]}, ${r[2]})`}function mr(r){return Math.max(r[0],r[1],r[2])<96}var we=class{constructor(t,e,i){this.type=t,this.range=e,this.box=i,this.startDb=0}startDrag(){this.startDb=this.type==="min"?this.range.minDecibels:this.range.maxDecibels}drag(t,e){let i=t/this.box.offsetWidth;this.changeDb(this.startDb+i*150)}finishDrag(){}cancelDrag(){this.changeDb(this.startDb)}onClick(){}changeDb(t){this.type=="min"?gr(t,this.range):br(t,this.range)}};function gr(r,t){r=Math.round(r),r<-150&&(r=-150),r>0&&(r=0),r>t.maxDecibels-6&&(r=t.maxDecibels-6),t.minDecibels=r,t.dispatchEvent(new Xt({min:r}))}function br(r,t){r=Math.round(r),r<-150&&(r=-150),r>0&&(r=0),r<t.minDecibels+6&&(r=t.minDecibels+6),t.maxDecibels=r,t.dispatchEvent(new Xt({max:r}))}function qt(r){return Ve(r)+" dB"}function Ve(r){return String(r)}var Dt=function(r,t,e,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,t,e,i);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(o=(s<3?n(o):s>3?n(t,e,o):n(t,e))||o);return s>3&&o&&Object.defineProperty(t,e,o),o},Bt=function(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)},vr,mt=class extends m{constructor(){super(...arguments),this.draggablePoint=!1,this.draggableLeft=!1,this.draggableRight=!1,this.fftSize=2048,this.zoom=B}static get styles(){return[g`
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
      `]}render(){return c`${this.renderBand()}${this.renderPoint()}`}renderPoint(){if(this.selection?.point===void 0)return f;let e=new k(this.zoom,this.offsetWidth,this.fftSize).zoomed(this.selection.point);return e<0||e>1?f:c`<div id="point" style="left:calc(${100*e}% - 1px)"></div>
      ${this.draggablePoint?c`<div
            id="pointHandle"
            class="handle"
            style="left:calc(${100*e}% - 2px)"
            @pointerdown=${this.onPointPointerDown}
          >
            <div class="touchArea"></div>
          </div>`:f}`}renderBand(){if(this.selection?.band===void 0)return f;let t=new k(this.zoom,this.offsetWidth,this.fftSize),e=t.zoomed(this.selection.band.left),i=t.zoomed(this.selection.band.right);if(e>1||i<0)return f;let s=Math.max(0,e),o=Math.min(i,1);return c`<div
        id="band"
        style="left:${100*s}%;width:${100*(o-s)}%"
      ></div>
      ${this.draggableLeft&&e==s?c`<div
            id="leftBandHandle"
            class="handle"
            style="left:calc(${100*e}% - 2px)"
            @pointerdown=${this.onLeftPointerDown}
          >
            <div class="touchArea"></div>
          </div>`:f}${this.draggableRight&&i==o?c`<div
            id="rightBandHandle"
            class="handle"
            style="left:calc(${100*i}% - 2px)"
            @pointerdown=${this.onRightPointerDown}
          >
            <div class="touchArea"></div>
          </div>`:f}`}firstUpdated(t){super.firstUpdated(t),this.pointDragController=new P(new Qt("point",this),0),this.leftDragController=new P(new Qt("start",this),0),this.rightDragController=new P(new Qt("end",this),0)}onPointPointerDown(t){this.pointDragController?.startDragging(t)}onLeftPointerDown(t){this.leftDragController?.startDragging(t)}onRightPointerDown(t){this.rightDragController?.startDragging(t)}};Dt([l({type:Boolean,reflect:!0,attribute:"draggable-point"}),Bt("design:type",Boolean)],mt.prototype,"draggablePoint",void 0);Dt([l({type:Boolean,reflect:!0,attribute:"draggable-left"}),Bt("design:type",Boolean)],mt.prototype,"draggableLeft",void 0);Dt([l({type:Boolean,reflect:!0,attribute:"draggable-right"}),Bt("design:type",Boolean)],mt.prototype,"draggableRight",void 0);Dt([l({type:Number,reflect:!0}),Bt("design:type",Number)],mt.prototype,"fftSize",void 0);Dt([l({attribute:!1}),Bt("design:type",typeof(vr=typeof x<"u"&&x)=="function"?vr:Object)],mt.prototype,"zoom",void 0);Dt([l({attribute:!1}),Bt("design:type",Object)],mt.prototype,"selection",void 0);mt=Dt([b("rr-highlight")],mt);var Qt=class{constructor(t,e){this.type=t,this.highlight=e}startDrag(){this.original=this.highlight.selection}drag(t,e){let i=this.highlight.zoom===void 0?1:this.highlight.zoom.level,s=this.getFraction();s!==void 0&&(s+=t/(this.highlight.offsetWidth*i),s<0&&(s=0),s>1&&(s=1),this.highlight.dispatchEvent(this.getEvent(s)))}finishDrag(){}cancelDrag(){let t=this.getFraction();t!==void 0&&this.highlight.dispatchEvent(this.getEvent(t))}onClick(){}getFraction(){return this.type=="point"?this.original?.point:this.type=="start"?this.original?.band?.left:this.original?.band?.right}getEvent(t){return new ve(this.type=="point"?{fraction:t}:this.type=="start"?{startFraction:t}:{endFraction:t})}};var Z=g`
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
`;var Xe=function(r,t,e,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,t,e,i);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(o=(s<3?n(o):s>3?n(t,e,o):n(t,e))||o);return s>3&&o&&Object.defineProperty(t,e,o),o},xr=function(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)},yr,wr,xe=class extends m{constructor(){super(...arguments),this.zoom=B}static get styles(){return[Z,g`
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
      `]}render(){return c`<button @click=${this.onClickButtonLeft}>
        ${de}
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
      <button @click=${this.onClickButtonRight}>${pe}</button>`}firstUpdated(t){super.firstUpdated(t),this.dragController=new P(new Ye(this,this.scrollBox),0)}onClickButtonLeft(){this.moveZoom(-1/20)}onClickButtonRight(){this.moveZoom(1/20)}onClickAreaLeft(){this.moveZoom(-.6)}onClickAreaRight(){this.moveZoom(.6)}moveZoom(t){let e=this.zoom.withMovedCenter(t/this.zoom.level);this.zoom=e,this.dispatchEvent(new St(e))}onPointerDown(t){this.dragController?.startDragging(t)}};Xe([l({attribute:!1}),xr("design:type",typeof(yr=typeof x<"u"&&x)=="function"?yr:Object)],xe.prototype,"zoom",void 0);Xe([y("#scroll"),xr("design:type",typeof(wr=typeof HTMLElement<"u"&&HTMLElement)=="function"?wr:Object)],xe.prototype,"scrollBox",void 0);xe=Xe([b("rr-scrollbar")],xe);var Ye=class{constructor(t,e){this.scrollbar=t,this.box=e,this.startZoom=B}startDrag(){this.startZoom=this.scrollbar.zoom}drag(t,e){let i=t/this.box.offsetWidth;this.moveZoom(i)}finishDrag(){}cancelDrag(){this.moveZoom(0)}onClick(){}moveZoom(t){let e=this.startZoom.withMovedCenter(t);this.scrollbar.zoom=e,this.scrollbar.dispatchEvent(new St(this.scrollbar.zoom))}};var Ke=function(r,t,e,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,t,e,i);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(o=(s<3?n(o):s>3?n(t,e,o):n(t,e))||o);return s>3&&o&&Object.defineProperty(t,e,o),o},Sr=function(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)},$r,$e=class extends m{constructor(){super(...arguments),this.zoom=B}static get styles(){return[Z,g`
        :host {
          display: flex;
          flex-direction: row;
        }

        #zoomInput {
          width: 6ex;
        }
      `]}render(){return c`<button @click=${this.onClickMinus}>${fe}</button>
      <input
        id="zoomInput"
        type="text"
        .value=${Ge(this.zoom.level)}
        @focus=${this.onZoomFocus}
        @blur=${this.onZoomBlur}
        @change=${this.onZoomChange}
      />
      <button @click=${this.onClickPlus}>${ue}</button>`}onZoomFocus(t){let e=t.target;e.value=Dr(this.zoom.level)}onZoomBlur(t){let e=t.target;e.value=Ge(this.zoom.level)}onZoomChange(t){let e=t.target,i=e.value;i.endsWith("x")&&(i=i.substring(0,i.length-1));let s=Number(i);isNaN(s)?e.value=Ge(this.zoom.level):this.setZoom(s)}onClickMinus(){this.setZoom(this.zoom.level/Math.sqrt(2))}onClickPlus(){this.setZoom(this.zoom.level*Math.sqrt(2))}setZoom(t){Math.abs(t-Math.round(t))<.01&&(t=Math.round(t));let e=this.zoom;this.highlight?.point!==void 0?e=e.withLevelInContext(t,this.highlight.point):e=e.withLevel(t),this.zoom=e,this.dispatchEvent(new St(e))}};Ke([l({attribute:!1}),Sr("design:type",typeof($r=typeof x<"u"&&x)=="function"?$r:Object)],$e.prototype,"zoom",void 0);Ke([l({attribute:!1}),Sr("design:type",Object)],$e.prototype,"highlight",void 0);$e=Ke([b("rr-zoombar")],$e);function Ge(r){return Dr(r)+"x"}function Dr(r){return String(Math.round(r*100)/100)}var L=function(r,t,e,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,t,e,i);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(o=(s<3?n(o):s>3?n(t,e,o):n(t,e))||o);return s>3&&o&&Object.defineProperty(t,e,o),o},j=function(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)},Cr,_r,Er,D=class extends m{constructor(){super(...arguments),this.centerFrequency=0,this.frequencyScale=1,this.minDecibels=-100,this.maxDecibels=-30,this.fftSize=2048,this.zoom=B,this.highlightDraggablePoint=!1,this.highlightDraggableLeft=!1,this.highlightDraggableRight=!1,this.waterfallDraggable=!1}static get styles(){return[g`
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
      `]}render(){return c`<div id="view">
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
      </div>`}addFloatSpectrum(t,e){this.fftSize!=e.length&&(this.fftSize=e.length),this.scope?.addFloatSpectrum(e),this.waterfall?.addFloatSpectrum(t,e)}onZoom(t){this.zoom=t.detail}onDecibelRangeChanged(t){t.detail.min!==void 0&&(this.minDecibels=t.detail.min),t.detail.max!==void 0&&(this.maxDecibels=t.detail.max)}};L([l({type:Number,reflect:!0}),j("design:type",Number)],D.prototype,"bandwidth",void 0);L([l({type:Number,reflect:!0,attribute:"center-frequency"}),j("design:type",Number)],D.prototype,"centerFrequency",void 0);L([l({type:Number,reflect:!0,attribute:"frequency-scale"}),j("design:type",Number)],D.prototype,"frequencyScale",void 0);L([l({type:Number,reflect:!0,attribute:"min-decibels"}),j("design:type",Number)],D.prototype,"minDecibels",void 0);L([l({type:Number,reflect:!0,attribute:"max-decibels"}),j("design:type",Number)],D.prototype,"maxDecibels",void 0);L([l({type:Number,reflect:!0}),j("design:type",Number)],D.prototype,"fftSize",void 0);L([l({attribute:!1}),j("design:type",typeof(Cr=typeof x<"u"&&x)=="function"?Cr:Object)],D.prototype,"zoom",void 0);L([l({attribute:!1}),j("design:type",Object)],D.prototype,"highlight",void 0);L([l({attribute:!1}),j("design:type",Boolean)],D.prototype,"highlightDraggablePoint",void 0);L([l({attribute:!1}),j("design:type",Boolean)],D.prototype,"highlightDraggableLeft",void 0);L([l({attribute:!1}),j("design:type",Boolean)],D.prototype,"highlightDraggableRight",void 0);L([l({attribute:!1}),j("design:type",Boolean)],D.prototype,"waterfallDraggable",void 0);L([y("#scope"),j("design:type",typeof(_r=typeof F<"u"&&F)=="function"?_r:Object)],D.prototype,"scope",void 0);L([y("#waterfall"),j("design:type",typeof(Er=typeof T<"u"&&T)=="function"?Er:Object)],D.prototype,"waterfall",void 0);D=L([b("rr-spectrum")],D);var H=function(r,t,e,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,t,e,i);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(o=(s<3?n(o):s>3?n(t,e,o):n(t,e))||o);return s>3&&o&&Object.defineProperty(t,e,o),o},q=function(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)},zr,C=class extends m{constructor(){super(...arguments),this.label="",this.resizeable=!1,this.closeable=!1,this.fixed=!1,this.closed=!1,this.modal=!1,this.moving=!1}set position(t){this.pendingPosition=t}get position(){return this.pendingPosition||this.getPosition()}set size(t){this.pendingSize=t}get size(){return this.pendingSize||this.getSize()}static get styles(){return[Z,g`
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
      `]}render(){return this.closed?f:c`${this.modal?c`<div class="modalbg"></div>`:f}
      <div
        class="label${this.moving?" moving":""}${this.modal?" modal":""}"
        @pointerdown=${this.onLabelPointerDown}
      >
        <div class="label-left" @pointerdown=${this.noPointerDown}>
          <slot name="label-left"></slot>
        </div>
        <div class="label-middle"><slot name="label">${this.label}</slot></div>
        <div class="label-right" @pointerdown=${this.noPointerDown}>
          <slot name="label-right"></slot>${this.closeable?c`<button id="close" @click=${this.onClosePressed}>
                ${Wi}
              </button>`:f}
        </div>
      </div>
      <div class="content${this.resizeable?" resizeable":""}">
        <div class="contentView"><slot></slot></div>
        ${this.resizeable?c`<div
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
                ${Zi}
              </div>`:f}
      </div>`}connectedCallback(){super.connectedCallback(),this.addEventListener("click",t=>this.onSelect(t)),Jt?.register(this)}disconnectedCallback(){super.disconnectedCallback(),Jt?.unregister(this)}firstUpdated(t){super.firstUpdated(t),this.doUpdates(t)}updated(t){super.updated(t),this.doUpdates(t)}doUpdates(t){t.has("closed")&&(Jt?.show(!this.closed,this),this.closed||(this.modal||(this.moveController=new P(new Qe(this),0)),this.rightResizeController=new P(new te(this,this.content,!0,!1),0),this.bottomResizeController=new P(new te(this,this.content,!1,!0),0),this.cornerResizeController=new P(new te(this,this.content,!0,!0),0),this.dispatchEvent(new ei))),this.closed||(this.modal&&(this.pendingSize=void 0,this.pendingPosition=void 0,this.setCenterPosition(),setTimeout(()=>Jt?.select(this),0)),this.pendingSize&&(this.setSize(this.pendingSize),this.pendingSize=void 0),this.pendingPosition&&(this.setPosition(this.pendingPosition),this.pendingPosition=void 0))}getPosition(){if(!(this.closed||this.offsetWidth==0&&this.offsetHeight==0)&&getComputedStyle(this).position=="absolute")return{top:this.offsetTop,left:this.offsetLeft,bottom:visualViewport.height-this.offsetTop-this.offsetHeight,right:visualViewport.width-this.offsetLeft-this.offsetWidth}}getSize(){if(!(!this.resizeable||!this.content||this.closed||this.offsetWidth==0&&this.offsetWidth==0)&&getComputedStyle(this).position=="absolute")return{width:this.offsetWidth,height:this.content.offsetHeight}}setCenterPosition(){let t=this.offsetWidth,e=this.offsetHeight;this.style.left=`calc(50vw - ${t/2}px)`,this.style.top=`calc(50vh - ${e/2}px)`,this.style.right="auto",this.style.bottom="auto"}setPosition(t){let e=visualViewport.width,i=visualViewport.height,s=t.left+this.offsetWidth<=e,o=t.right+this.offsetWidth<=e,n=t.top+this.offsetHeight<=i,a=t.bottom+this.offsetHeight<=i,h=t.left<=t.right,p=t.top<=t.bottom;h&&s?(this.style.left=`${t.left}px`,this.style.right="auto"):!h&&o?(this.style.right=`${t.right}px`,this.style.left="auto"):(this.style.left=`${Math.max(0,Math.floor((e-this.offsetWidth)/2))}px`,this.style.right="auto"),p&&n?(this.style.top=`${t.top}px`,this.style.bottom="auto"):!p&&a?(this.style.bottom=`${t.bottom}px`,this.style.top="auto"):(this.style.top=`${Math.max(0,Math.floor((i-this.offsetHeight)/2))}px`,this.style.bottom="auto")}setSize(t){if(this.content===void 0)return;let e=visualViewport.width,i=visualViewport.height,s=this.offsetTop+this.content.offsetTop,o=this.offsetLeft+this.content.offsetLeft;t.width>=e&&(t.width=Math.floor(e)),t.height+this.content.offsetTop>=i&&(t.height=Math.floor(i-this.content.offsetTop));let n=o+this.content.offsetWidth<=e,a=s+this.content.offsetHeight<=i;if(!n){let h=Math.floor(e-t.width-this.content.offsetLeft);this.style.left=`${h}px`,this.style.right="auto"}if(!a){let h=Math.floor(i-t.height-this.content.offsetTop);this.style.top=`${h}px`,this.style.bottom="auto"}ii(this,this.content,t.width,t.height)}onClosePressed(){this.closed=!0,this.dispatchEvent(new ti)}onSelect(t){Jt?.select(this)&&t.stopPropagation()}noPointerDown(t){t.stopPropagation()}onLabelPointerDown(t){this.fixed||this.moveController?.startDragging(t)}onRightResizerPointerDown(t){this.fixed||this.rightResizeController?.startDragging(t)}onBottomResizerPointerDown(t){this.fixed||this.bottomResizeController?.startDragging(t)}onCornerResizerPointerDown(t){this.fixed||this.cornerResizeController?.startDragging(t)}};H([l({type:String,reflect:!0}),q("design:type",String)],C.prototype,"label",void 0);H([l({type:Boolean,reflect:!0}),q("design:type",Boolean)],C.prototype,"resizeable",void 0);H([l({type:Boolean,reflect:!0}),q("design:type",Boolean)],C.prototype,"closeable",void 0);H([l({type:Boolean,reflect:!0}),q("design:type",Boolean)],C.prototype,"fixed",void 0);H([l({type:Boolean,reflect:!0}),q("design:type",Boolean)],C.prototype,"closed",void 0);H([l({type:Boolean,reflect:!0}),q("design:type",Boolean)],C.prototype,"modal",void 0);H([l({attribute:!1}),q("design:type",Object),q("design:paramtypes",[Object])],C.prototype,"position",null);H([l({attribute:!1}),q("design:type",Object),q("design:paramtypes",[Object])],C.prototype,"size",null);H([I(),q("design:type",Boolean)],C.prototype,"moving",void 0);H([y(".content"),q("design:type",typeof(zr=typeof HTMLDivElement<"u"&&HTMLDivElement)=="function"?zr:Object)],C.prototype,"content",void 0);C=H([b("rr-window")],C);function Ot(r){class t extends r{set closed(i){this.pendingClosed=i}get closed(){return this.pendingClosed!==void 0?this.pendingClosed:this.window?.closed||!1}set position(i){this.pendingPosition=i}get position(){return this.pendingPosition||this.window?.position}set size(i){this.pendingSize=i}get size(){return this.pendingSize||this.window?.size}firstUpdated(i){super.firstUpdated(i),this.doUpdate()}updated(i){super.updated(i),this.doUpdate()}doUpdate(){this.pendingClosed!==void 0&&this.window&&(this.window.closed=this.pendingClosed,this.pendingClosed=void 0),this.pendingSize!==void 0&&this.window&&(this.window.size=this.pendingSize,this.pendingSize=void 0),this.pendingPosition!==void 0&&this.window&&(this.window.position=this.pendingPosition,this.pendingPosition=void 0)}}return H([l({type:Boolean,reflect:!0}),q("design:type",Boolean),q("design:paramtypes",[Boolean])],t.prototype,"closed",null),H([l({attribute:!1}),q("design:type",Object),q("design:paramtypes",[Object])],t.prototype,"position",null),H([l({attribute:!1}),q("design:type",Object),q("design:paramtypes",[Object])],t.prototype,"size",null),t}function Ar(r){let t=r.getBoundingClientRect(),e=t.left+window.scrollX,i=t.top+window.scrollY;r.style.left=`${e}px`,r.style.top=`${i}px`,r.style.right="auto",r.style.bottom="auto"}function ls(r,t,e){let i=r.offsetLeft,s=r.offsetTop;t>visualViewport.width-r.offsetWidth&&(t=visualViewport.width-r.offsetWidth),e>visualViewport.height-r.offsetHeight&&(e=visualViewport.height-r.offsetHeight),t<0&&(t=0),e<0&&(e=0),(t!=i||e!=s)&&Rr(r,Math.floor(t),Math.floor(e))}function hs(r,t,e,i){let s=r.offsetLeft,o=r.offsetTop,n=t.offsetTop;s+e>visualViewport.width&&(e=visualViewport.width-s),o+n+i>visualViewport.height&&(i=visualViewport.height-o-n),i<32&&(i=32),(e!=t.offsetWidth||i!=t.offsetHeight)&&ii(r,t,Math.floor(e),Math.floor(i))}function Rr(r,t,e){r.style.left=t+"px",r.style.top=e+"px"}function ii(r,t,e,i){t.style.width=e+"px",t.style.height=i+"px",t.offsetWidth<r.offsetWidth&&(t.style.width=r.offsetWidth+"px")}var Qe=class{constructor(t){this.window=t,this.elemX=t.offsetLeft,this.elemY=t.offsetTop}startDrag(){Ar(this.window),this.window.moving=!0,this.elemX=this.window.offsetLeft,this.elemY=this.window.offsetTop}drag(t,e){ls(this.window,this.elemX+t,this.elemY+e)}finishDrag(){this.window.moving=!1,this.window.dispatchEvent(new Se)}cancelDrag(){this.window.moving=!1,Rr(this.window,this.elemX,this.elemY)}onClick(){}},te=class{constructor(t,e,i,s){this.window=t,this.content=e,this.right=i,this.bottom=s,this.sizeX=e.offsetWidth,this.sizeY=e.offsetHeight}startDrag(){Ar(this.window),this.sizeX=this.content.offsetWidth,this.sizeY=this.content.offsetHeight}drag(t,e){hs(this.window,this.content,this.right?this.sizeX+t:this.sizeX,this.bottom?this.sizeY+e:this.sizeY)}finishDrag(){this.window.dispatchEvent(new Se),this.window.dispatchEvent(new Je)}cancelDrag(){ii(this.window,this.content,this.sizeX,this.sizeY)}onClick(){}};var Jt;var Se=class extends Event{constructor(){super("rr-window-moved",{bubbles:!0,composed:!0})}},Je=class extends Event{constructor(){super("rr-window-resized",{bubbles:!0,composed:!0})}},ti=class extends Event{constructor(){super("rr-window-closed",{bubbles:!0,composed:!0})}},ei=class extends Event{constructor(){super("rr-window-open",{bubbles:!0,composed:!0})}};var Ft=function(r,t,e,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,t,e,i);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(o=(s<3?n(o):s>3?n(t,e,o):n(t,e))||o);return s>3&&o&&Object.defineProperty(t,e,o),o},Nt=function(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)},Ct=class extends m{constructor(){super(...arguments),this.min=0,this.frequency=0,this._scale=1,this.step=1}get scale(){return this._scale}set scale(t){if(t!=1&&t!=1e3&&t!=1e6)return;let e=this._scale;this._scale=t,this.requestUpdate("scale",e)}static get styles(){return[g`
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
      `]}render(){return c`<input
        type="number"
        id="frequency"
        .step=${String(this.step/this.scale)}
        .value=${String(this.frequency/this.scale)}
        @change=${this.onFrequencyChange}
      /><select id="scale" @change=${this.onScaleChange}>
        <option value="1" .selected=${this.scale==1}>Hz</option>
        <option value="1000" .selected=${this.scale==1e3}>kHz</option>
        <option value="1000000" .selected=${this.scale==1e6}>MHz</option>
      </select>`}onFrequencyChange(t){let e=t.target,i=Number(e.value);if(!isNaN(i)){let s=i*this.scale;if(s>=this.min&&(this.max===void 0||s<=this.max)){this.frequency=i*this.scale,this.dispatchEvent(new Event("change"));return}}e.value=String(this.frequency/this.scale)}onScaleChange(t){let e=t.target,i=Number(e.selectedOptions[0].value);this.scale=i,this.dispatchEvent(new Event("scale-change"))}};Ft([l({type:Number,reflect:!0}),Nt("design:type",Number)],Ct.prototype,"min",void 0);Ft([l({type:Number,reflect:!0}),Nt("design:type",Number)],Ct.prototype,"max",void 0);Ft([l({type:Number,reflect:!0}),Nt("design:type",Number)],Ct.prototype,"frequency",void 0);Ft([l({type:Number,reflect:!0}),Nt("design:type",Number),Nt("design:paramtypes",[Number])],Ct.prototype,"scale",null);Ft([l({type:Number,reflect:!0}),Nt("design:type",Number)],Ct.prototype,"step",void 0);Ct=Ft([b("rr-frequency-input")],Ct);var z=function(r,t,e,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,t,e,i);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(o=(s<3?n(o):s>3?n(t,e,o):n(t,e))||o);return s>3&&o&&Object.defineProperty(t,e,o),o},R=function(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)},Mr,_=class extends Ot(m){constructor(){super(...arguments),this.inline=!1,this.showSettings=!0,this.showHelp=!0,this.errorState=!1,this.playing=!1,this.scale=1e3,this.centerFrequency=885e5,this.tunedFrequency=885e5,this.tuningStep=1e3,this.availableSchemes=ji(),this.scheme="WBFM",this.bandwidth=15e4,this.stereo=!0,this.squelch=0,this.stereoStatus=!1,this.gain=null,this.gainDisabled=!1,this.savedGain=0}static get styles(){return[Z,g`
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
      `]}render(){return c`<rr-window
      label="Controls"
      id="controls"
      class=${this.inline?"inline":""}
      .position=${this.position}
      .fixed=${this.inline}
    >
      ${this.errorState?c`<button slot="label-left" id="errorState" disabled>
            ${Gi}
          </button>`:this.playing?c`<button slot="label-left" id="stop" @click=${this.onStop}>
              ${le}
            </button>`:c`<button slot="label-left" id="start" @click=${this.onStart}>
              ${he}
            </button>`}
      <button slot="label-right" id="presets" @click=${this.onPresets}>
        ${be}
      </button>
      ${this.showSettings?c`<button
            slot="label-right"
            id="settings"
            @click=${this.onSettings}
          >
            ${ce}
          </button>`:f}
      ${this.showHelp?c`<a slot="label-right" href="help.html" target="_blank"
            ><button id="help">${Vi}</button></a
          >`:f}
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
          ${this.availableSchemes.map(t=>c`<option value="${t}" .selected=${this.scheme==t}>
                ${t}
              </option>`)}
        </select>
        <div class="cfgBlock">
          <span .hidden=${!U(this.scheme).hasBandwidth()}
            ><label for="bandwidth">Bandwidth: </label
            ><input
              type="number"
              id="bandwidth"
              min="0"
              max="20000"
              step="1"
              .value=${String(this.bandwidth)}
              @change=${this.onBandwidthChange} /></span
          ><span .hidden=${!U(this.scheme).hasStereo()}>
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
              .hidden=${!U(this.scheme).hasStereo()||!this.stereo}
              >${Xi}</span
            ></span
          ><span .hidden=${!U(this.scheme).hasSquelch()}>
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
    </rr-window>`}onStart(){this.dispatchEvent(new ri)}onStop(){this.dispatchEvent(new si)}onPresets(){this.dispatchEvent(new oi)}onSettings(){this.dispatchEvent(new ni)}onScaleChange(t){let e=t.target;this.scale=e.scale,this.dispatchEvent(new ai)}onCenterFrequencyChange(t){let e=t.target;this.centerFrequency=e.frequency,this.dispatchEvent(new li)}onTunedFrequencyChange(t){let e=t.target;this.tunedFrequency=e.frequency,this.dispatchEvent(new hi)}onTuningStepChange(t){let e=t.target,i=Number(e.value);if(isNaN(i)){e.value=String(this.tuningStep);return}this.tuningStep=i,this.dispatchEvent(new ci)}onModeChange(t){this.scheme=t.target.selectedOptions[0].value,this.dispatchEvent(new di)}onBandwidthChange(t){let e=t.target,i=Number(e.value);if(isNaN(i)){e.value=String(this.bandwidth);return}this.bandwidth=i,this.dispatchEvent(new pi)}onStereoChange(t){let e=t.target;this.stereo=e.checked,this.dispatchEvent(new ui)}onSquelchChange(t){let e=t.target,i=Number(e.value);(isNaN(i)||i<0)&&(i=0,e.value=String(i)),i>6&&(i=6,e.value=String(i)),this.squelch=i,this.dispatchEvent(new fi)}onGainInput(t){let e=t.target,i=Number(e.value);if(isNaN(i)){e.value=this.gain==null?"":String(this.gain);return}this.gain=i,this.dispatchEvent(new De)}onGainAutoChange(t){t.target.checked?(this.gain!=null&&(this.savedGain=this.gain),this.gain=null):this.gain=this.savedGain,this.dispatchEvent(new De)}};z([l({attribute:!1}),R("design:type",Boolean)],_.prototype,"inline",void 0);z([l({attribute:!1}),R("design:type",Boolean)],_.prototype,"showSettings",void 0);z([l({attribute:!1}),R("design:type",Boolean)],_.prototype,"showHelp",void 0);z([l({attribute:!1}),R("design:type",Boolean)],_.prototype,"errorState",void 0);z([l({attribute:!1}),R("design:type",Boolean)],_.prototype,"playing",void 0);z([l({attribute:!1}),R("design:type",Number)],_.prototype,"scale",void 0);z([l({attribute:!1}),R("design:type",Number)],_.prototype,"centerFrequency",void 0);z([l({attribute:!1}),R("design:type",Number)],_.prototype,"tunedFrequency",void 0);z([l({attribute:!1}),R("design:type",Number)],_.prototype,"tuningStep",void 0);z([l({attribute:!1}),R("design:type",Array)],_.prototype,"availableSchemes",void 0);z([l({attribute:!1}),R("design:type",Object)],_.prototype,"scheme",void 0);z([l({attribute:!1}),R("design:type",Number)],_.prototype,"bandwidth",void 0);z([l({attribute:!1}),R("design:type",Boolean)],_.prototype,"stereo",void 0);z([l({attribute:!1}),R("design:type",Number)],_.prototype,"squelch",void 0);z([l({attribute:!1}),R("design:type",Boolean)],_.prototype,"stereoStatus",void 0);z([l({attribute:!1}),R("design:type",Object)],_.prototype,"gain",void 0);z([l({attribute:!1}),R("design:type",Boolean)],_.prototype,"gainDisabled",void 0);z([I(),R("design:type",Number)],_.prototype,"savedGain",void 0);z([y("rr-window"),R("design:type",typeof(Mr=typeof C<"u"&&C)=="function"?Mr:Object)],_.prototype,"window",void 0);_=z([b("rr-main-controls")],_);var ri=class extends Event{constructor(){super("rr-start",{bubbles:!0,composed:!0})}},si=class extends Event{constructor(){super("rr-stop",{bubbles:!0,composed:!0})}},oi=class extends Event{constructor(){super("rr-presets",{bubbles:!0,composed:!0})}},ni=class extends Event{constructor(){super("rr-settings",{bubbles:!0,composed:!0})}},ai=class extends Event{constructor(){super("rr-scale-changed",{bubbles:!0,composed:!0})}},li=class extends Event{constructor(){super("rr-center-frequency-changed",{bubbles:!0,composed:!0})}},hi=class extends Event{constructor(){super("rr-tuned-frequency-changed",{bubbles:!0,composed:!0})}},ci=class extends Event{constructor(){super("rr-tuning-step-changed",{bubbles:!0,composed:!0})}},di=class extends Event{constructor(){super("rr-scheme-changed",{bubbles:!0,composed:!0})}},pi=class extends Event{constructor(){super("rr-bandwidth-changed",{bubbles:!0,composed:!0})}},ui=class extends Event{constructor(){super("rr-stereo-changed",{bubbles:!0,composed:!0})}},fi=class extends Event{constructor(){super("rr-squelch-changed",{bubbles:!0,composed:!0})}},De=class extends Event{constructor(){super("rr-gain-changed",{bubbles:!0,composed:!0})}};var S=function(r,t,e,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,t,e,i);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(o=(s<3?n(o):s>3?n(t,e,o):n(t,e))||o);return s>3&&o&&Object.defineProperty(t,e,o),o},E=function(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)},Pr,qr,$=class extends Ot(m){constructor(){super(...arguments),this.inline=!1,this.hidden=!1,this.tunedFrequency=885e5,this.scale=1e3,this.tuningStep=1e3,this.scheme="WBFM",this.bandwidth=15e4,this.stereo=!0,this.squelch=0,this.gain=null,this.sortColumn="frequency",this.presets=[],this.sortedIndices=[],this.editorOpen=!1,this.editorContent={name:"",tunedFrequency:this.tunedFrequency,scale:this.scale,tuningStep:this.tuningStep,scheme:this.scheme,bandwidth:this.bandwidth,stereo:this.stereo,squelch:this.squelch,gain:this.gain}}static get styles(){return[Z,g`
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
      `]}render(){return c`<rr-window
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
          ${Yt}
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
          ${this.sortedIndices.map(t=>c`<tr
                data-index=${t}
                class=${t==this.selectedIndex?"active":""}
                @click=${this.onRowClick}
              >
                <td>${this.presets[t].name}</td>
                <td>
                  ${Ce(this.presets[t].tunedFrequency,this.presets[t].scale)}
                </td>
                <td>${this.presets[t].scheme}</td>
                <td>
                  <a href="javascript:0" @click=${this.onRowEditClick}
                    >${me}</a
                  ><a href="javascript:0" @click=${this.onRowDeleteClick}
                    >${ge}</a
                  >
                </td>
              </tr>`)}
        </table>
        ${this.presets.length==0?c`<p style="max-width: 50ex">
              You can use Presets to flip quickly to your favorite stations or
              frequencies. Click the
              <button disabled class="buttonIllustration">${Yt}</button>
              button on this window's top left corner to add the current
              frequency to the presets.
            </p>`:f}
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
            >${Ce(this.editorContent.tunedFrequency,this.editorContent.scale)}</b
          >, Tuning step:
          <b>${Ce(this.editorContent.tuningStep,1)}</b>
        </div>
        <div>
          Modulation:
          <b
            >${this.editorContent.scheme}${U(this.editorContent.scheme).hasStereo()?this.editorContent.stereo?" Stereo":" Mono":f}</b
          >${U(this.editorContent.scheme).hasBandwidth()?c`, Bandwidth:
                <b>${Ce(this.editorContent.bandwidth,1)}</b>`:f}
        </div>
        <div>
          Gain:
          <b
            >${this.editorContent.gain===null?"Auto":this.editorContent.gain}</b
          >${U(this.editorContent.scheme).hasSquelch()?c`, Squelch: <b>${this.editorContent.squelch}</b>`:f}
        </div>
        ${this.editorIndex!==void 0?c`<div>
              <button @click=${this.onEditorReplaceClick}>
                Replace with current settings
              </button>
            </div>`:f}
        <div>
          <button
            .disabled=${this.editorValidationError!==void 0}
            @click=${this.onEditorSaveClick}
          >
            Save</button
          >${this.editorValidationError!==void 0?c` <i>${this.editorValidationError}</i>`:f}
        </div>
      </rr-window>`}willUpdate(t){super.willUpdate(t),(t.has("presets")||t.has("sortColumn"))&&this.updatePresetLists(),this.findSelectedIndex()}updatePresetLists(){let t=[...this.presets.keys()];t.sort(this.getSortFormula()),this.sortedIndices=t}onAddClick(t){this.editorTitle="New Preset",this.editorIndex=void 0,this.editorContent={name:"",tunedFrequency:this.tunedFrequency,scale:this.scale,tuningStep:this.tuningStep,scheme:this.scheme,bandwidth:this.bandwidth,stereo:this.stereo,squelch:this.squelch,gain:this.gain},this.checkValidEditor(),this.editorOpen=!0}onEditorNameKeydown(t){t.key=="Enter"?(t.preventDefault(),this.onEditorSaveClick()):t.key=="Escape"&&(t.preventDefault(),this.onEditorClosed())}onEditorNameChange(t){let i=t.target.value;this.editorContent.name=i,this.checkValidEditor()}onEditorReplaceClick(){this.editorContent={name:this.editorContent.name,tunedFrequency:this.tunedFrequency,scale:this.scale,tuningStep:this.tuningStep,scheme:this.scheme,bandwidth:this.bandwidth,stereo:this.stereo,squelch:this.squelch,gain:this.gain},this.checkValidEditor()}checkValidEditor(){if(this.editorContent.name==""){this.editorValidationError="Preset name is empty";return}let t=this.presets.findIndex(e=>e.name==this.editorContent.name);if(t>=0&&t!=this.editorIndex){this.editorValidationError="There is another preset with that name";return}if(t=this.presets.findIndex(e=>Br(e,this.editorContent)),t>=0&&t!=this.editorIndex){this.editorValidationError=`There is an identical preset: ${this.presets[t].name}`;return}this.editorValidationError=void 0}onEditorSaveClick(){let t=[...this.presets];this.editorIndex===void 0||this.editorIndex>=t.length?t.push({...this.editorContent}):t[this.editorIndex]={...this.editorContent},this.editorOpen=!1,this.presets=t,this.dispatchEvent(new _e)}onEditorOpen(){this.presetName&&this.presetName.focus()}onEditorClosed(){this.editorOpen=!1}onRowClick(t){let e=this.getIndex(t);e!==void 0&&(this.selectedIndex=e,this.dispatchEvent(new mi))}onRowEditClick(t){t.stopPropagation();let e=this.getIndex(t);if(e===void 0)return;let i={...this.presets[e]};this.editorTitle=`Editing Preset "${i.name}"`,this.editorIndex=e,this.editorContent=i,this.checkValidEditor(),this.editorOpen=!0}onRowDeleteClick(t){t.stopPropagation();let e=this.getIndex(t);if(e===void 0)return;let i=[...this.presets];i.splice(e,1),this.selectedIndex=void 0,this.presets=i,this.dispatchEvent(new _e)}getIndex(t){let e=t.target;for(;e!=null&&e.tagName!="TR";)e=e.parentElement;if(e==null)return;let i=Number(e.dataset.index);if(!isNaN(i))return i}onHeaderClick(t){let e=t.currentTarget.id,i=`-${e}`;this.sortColumn===e?this.sortColumn=i:this.sortColumn=e,this.dispatchEvent(new gi)}getSortArrow(t){return this.sortColumn===t?Qi:this.sortColumn===`-${t}`?Ki:f}getSortFormula(){let t=this.sortColumn||"frequency",e=t[0]=="-";e&&(t=t.substring(1));let i;switch(t){case"name":i=(s,o)=>this.presets[s].name.localeCompare(this.presets[o].name);break;case"mode":i=(s,o)=>this.presets[s].scheme.localeCompare(this.presets[o].scheme);break;default:i=(s,o)=>this.presets[s].tunedFrequency-this.presets[o].tunedFrequency;break}return e?(s,o)=>i(o,s):i}findSelectedIndex(){let t=this.presets.findIndex(e=>Br(e,this));t<0?this.selectedIndex=void 0:this.selectedIndex=t}};S([l({attribute:!1}),E("design:type",Boolean)],$.prototype,"inline",void 0);S([l({attribute:!1}),E("design:type",Boolean)],$.prototype,"hidden",void 0);S([l({attribute:!1}),E("design:type",Number)],$.prototype,"tunedFrequency",void 0);S([l({attribute:!1}),E("design:type",Number)],$.prototype,"scale",void 0);S([l({attribute:!1}),E("design:type",Number)],$.prototype,"tuningStep",void 0);S([l({attribute:!1}),E("design:type",Object)],$.prototype,"scheme",void 0);S([l({attribute:!1}),E("design:type",Number)],$.prototype,"bandwidth",void 0);S([l({attribute:!1}),E("design:type",Boolean)],$.prototype,"stereo",void 0);S([l({attribute:!1}),E("design:type",Number)],$.prototype,"squelch",void 0);S([l({attribute:!1}),E("design:type",Object)],$.prototype,"gain",void 0);S([l({attribute:!1}),E("design:type",Number)],$.prototype,"selectedIndex",void 0);S([l({attribute:!1}),E("design:type",String)],$.prototype,"sortColumn",void 0);S([l({attribute:!1}),E("design:type",Array)],$.prototype,"presets",void 0);S([I(),E("design:type",Array)],$.prototype,"sortedIndices",void 0);S([I(),E("design:type",String)],$.prototype,"editorTitle",void 0);S([I(),E("design:type",Boolean)],$.prototype,"editorOpen",void 0);S([I(),E("design:type",Number)],$.prototype,"editorIndex",void 0);S([I(),E("design:type",String)],$.prototype,"editorValidationError",void 0);S([I(),E("design:type",Object)],$.prototype,"editorContent",void 0);S([y("#presets"),E("design:type",typeof(Pr=typeof C<"u"&&C)=="function"?Pr:Object)],$.prototype,"window",void 0);S([y("#presetName"),E("design:type",typeof(qr=typeof HTMLInputElement<"u"&&HTMLInputElement)=="function"?qr:Object)],$.prototype,"presetName",void 0);$=S([b("rr-presets")],$);var mi=class extends Event{constructor(){super("rr-preset-selected",{bubbles:!0,composed:!0})}},_e=class extends Event{constructor(){super("rr-presets-changed",{bubbles:!0,composed:!0})}},gi=class extends Event{constructor(){super("rr-presets-sorted",{bubbles:!0,composed:!0})}};function Br(r,t){return r.tunedFrequency===t.tunedFrequency&&r.scale===t.scale&&r.tuningStep===t.tuningStep&&r.bandwidth===t.bandwidth&&r.stereo===t.stereo&&r.squelch===t.squelch&&r.gain===t.gain}function Ce(r,t){switch(t){case 1e3:return`${String(r/1e3)} kHz`;case 1e6:return`${String(r/1e6)} MHz`;default:return`${String(r)} Hz`}}var ct=function(r,t,e,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,t,e,i);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(o=(s<3?n(o):s>3?n(t,e,o):n(t,e))||o);return s>3&&o&&Object.defineProperty(t,e,o),o},gt=function(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)},Or,cs=(()=>{let r=new Set([256e3]);for(let e=1024e3;e<3e6;e+=256e3)r.add(e);for(let e=96e4;e<3e6;e+=192e3)r.add(e);let t=[...r];return t.sort((e,i)=>Number(e)-Number(i)),t})(),ds=(()=>{let r=new Array;for(let t=32;t<=32768;t*=2)r.push(t);return r})(),ps=new Map([["default","Default method"],["directSampling","Direct sampling"],["upconverter","External upconverter"]]),us=new Map([["Q","Q"],["I","I"]]),et=class extends Ot(m){constructor(){super(...arguments),this.inline=!1,this.playing=!1,this.sampleRate=1024e3,this.ppm=0,this.fftSize=2048,this.biasTee=!1,this.lowFrequencyMethod={name:"default",channel:"Q",frequency:1e8,biasTee:!1}}static get styles(){return[Z]}render(){return c`<rr-window
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
          ${cs.map(t=>c`<option value=${t} .selected=${this.sampleRate==t}>
                ${t}
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
          ${ds.map(t=>c`<option value=${t} .selected=${this.fftSize==t}>
                ${t}
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
          ${ps.entries().map(([t,e])=>c`<option
                value=${String(t)}
                .selected=${this.lowFrequencyMethod.name==t}
              >
                ${e}
              </option>`)}
        </select>
      </div>
      <div .hidden=${this.lowFrequencyMethod.name!="directSampling"}>
        <label for="directSamplingChannel">Direct sampling channel: </label
        ><select
          id="directSamplingChannel"
          @change=${this.onDirectSamplingChannelChange}
        >
          ${us.entries().map(([t,e])=>c`<option
                value=${String(t)}
                .selected=${this.lowFrequencyMethod.channel==t}
              >
                ${e}
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
    </rr-window>`}onSampleRateChange(t){this.sampleRate=Number(t.target.selectedOptions[0].value),this.dispatchEvent(new bi)}onPpmChange(t){let e=t.target,i=Number(e.value);if(isNaN(i)){e.value=String(this.ppm);return}this.ppm=i,this.dispatchEvent(new vi)}onFftSizeChange(t){this.fftSize=Number(t.target.selectedOptions[0].value),this.dispatchEvent(new yi)}onBiasTeeChange(t){this.biasTee=t.target.checked,this.dispatchEvent(new wi)}onLowFrequencyMethodChange(t){let e={...this.lowFrequencyMethod};e.name=t.target.selectedOptions[0].value,this.lowFrequencyMethod=e,this.dispatchEvent(new Tt)}onDirectSamplingChannelChange(t){let e={...this.lowFrequencyMethod};e.channel=t.target.selectedOptions[0].value,this.lowFrequencyMethod=e,this.dispatchEvent(new Tt)}onUpconverterFrequencyChange(t){let e=t.target,i=Number(e.value);if(isNaN(i)){e.value=String(this.lowFrequencyMethod.frequency);return}let s={...this.lowFrequencyMethod};s.frequency=i,this.lowFrequencyMethod=s,this.dispatchEvent(new Tt)}onUpconverterBiasTeeChange(t){let e={...this.lowFrequencyMethod};e.biasTee=t.target.checked,this.lowFrequencyMethod=e,this.dispatchEvent(new Tt)}};ct([l({attribute:!1}),gt("design:type",Boolean)],et.prototype,"inline",void 0);ct([l({attribute:!1}),gt("design:type",Boolean)],et.prototype,"playing",void 0);ct([l({attribute:!1}),gt("design:type",Number)],et.prototype,"sampleRate",void 0);ct([l({attribute:!1}),gt("design:type",Number)],et.prototype,"ppm",void 0);ct([l({attribute:!1}),gt("design:type",Number)],et.prototype,"fftSize",void 0);ct([l({attribute:!1}),gt("design:type",Boolean)],et.prototype,"biasTee",void 0);ct([l({attribute:!1}),gt("design:type",Object)],et.prototype,"lowFrequencyMethod",void 0);ct([y("rr-window"),gt("design:type",typeof(Or=typeof C<"u"&&C)=="function"?Or:Object)],et.prototype,"window",void 0);et=ct([b("rr-settings")],et);var bi=class extends Event{constructor(){super("rr-sample-rate-changed",{bubbles:!0,composed:!0})}},vi=class extends Event{constructor(){super("rr-ppm-changed",{bubbles:!0,composed:!0})}},yi=class extends Event{constructor(){super("rr-fft-size-changed",{bubbles:!0,composed:!0})}},wi=class extends Event{constructor(){super("rr-bias-tee-changed",{bubbles:!0,composed:!0})}},Tt=class extends Event{constructor(){super("rr-low-frequency-method-changed",{bubbles:!0,composed:!0})}};var M=function(r,t,e,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,t,e,i);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(o=(s<3?n(o):s>3?n(t,e,o):n(t,e))||o);return s>3&&o&&Object.defineProperty(t,e,o),o},dt=function(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)},Nr,Fr,Tr,Lr,Lt=class extends m{connectedCallback(){super.connectedCallback(),this.observer?.disconnect(),this.observer=new IntersectionObserver(t=>this.onVisible(t),{threshold:[.05,.1]}),this.observer.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.observer=void 0}onVisible(t){t[0].intersectionRatio>.09?this.player===void 0&&(this.player=Hr.subscribe(e=>this.addSpectrum(e))):t[0].intersectionRatio<=.05&&this.player!==void 0&&(Hr.unsubscribe(this.player),this.player=void 0)}},xi=class extends Lt{static get styles(){return[g`
        #container {
          position: relative;
          width: 133%;
          aspect-ratio: 2/1;
          transform: scale(0.75);
          transform-origin: left top;
          margin-bottom: -16.5%;
        }

        rr-spectrum {
          height: 100%;
        }
      `]}render(){return c`<div id="container">
      <rr-spectrum
        id="spectrum"
        .centerFrequency=${939e5}
        .bandwidth=${1e6}
        .frequencyScale=${1e6}
      ></rr-spectrum>
    </div>`}addSpectrum(t){this.spectrumView?.addFloatSpectrum(939e5,t)}};M([y("#spectrum"),dt("design:type",typeof(Nr=typeof D<"u"&&D)=="function"?Nr:Object)],xi.prototype,"spectrumView",void 0);xi=M([b("rr-demo-spectrum")],xi);var $i=class extends Lt{static get styles(){return[g`
        #container {
          position: relative;
          width: 100%;
          aspect-ratio: 5/1;
        }

        rr-scope {
          height: 100%;
        }
      `]}render(){return c`<div id="container">
      <rr-scope
        id="scope"
        .centerFrequency=${939e5}
        .bandwidth=${1e6}
        .frequencyScale=${1e6}
      ></rr-scope>
    </div>`}addSpectrum(t){this.scopeView?.addFloatSpectrum(t)}};M([y("#scope"),dt("design:type",typeof(Fr=typeof F<"u"&&F)=="function"?Fr:Object)],$i.prototype,"scopeView",void 0);$i=M([b("rr-demo-scope")],$i);var Si=class extends Lt{static get styles(){return[g`
        #container {
          position: relative;
          width: 100%;
          aspect-ratio: 5/1;
          background-color: black;
        }

        rr-waterfall {
          height: 100%;
        }
      `]}render(){return c`<div id="container">
      <rr-waterfall id="waterfall"></rr-waterfall>
    </div>`}addSpectrum(t){this.waterfallView?.addFloatSpectrum(939e5,t)}};M([y("#waterfall"),dt("design:type",typeof(Tr=typeof T<"u"&&T)=="function"?Tr:Object)],Si.prototype,"waterfallView",void 0);Si=M([b("rr-demo-waterfall")],Si);var Ir=class extends m{static get styles(){return[g`
        #controls {
          position: relative;
          width: 100%;
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
          min-width: 250px;
        }
      `]}render(){return c` <div id="controls">
      <rr-decibel-range></rr-decibel-range>
      <div id="zoomControls">
        <rr-zoombar></rr-zoombar>
        <rr-scrollbar></rr-scrollbar>
      </div>
    </div>`}};Ir=M([b("rr-demo-bottombar")],Ir);var Ee=class extends m{constructor(){super(...arguments),this.scheme="WBFM",this.mode=Ie(this.scheme)}static get styles(){return[g`
        :host {
          display: block;
        }

        #container {
          position: relative;
        }

        rr-main-controls {
          height: 100%;
        }
      `]}render(){return c`<div id="container">
      <rr-main-controls
        id="controls"
        .inline=${!0}
        .showHelp=${!1}
        .centerFrequency=${939e5}
        .frequencyScale=${1e6}
        .scheme=${this.mode.scheme}
        .bandwidth=${U(this.mode).getBandwidth()}
        .stereo=${U(this.mode).getStereo()}
        .stereoStatus=${!0}
        .squelch=${U(this.mode).getSquelch()}
        @rr-scheme-changed=${this.onSchemeChanged}
      ></rr-main-controls>
    </div>`}onSchemeChanged(t){this.scheme=t.target.scheme}willUpdate(t){t.has("scheme")&&(this.mode=Ie(this.scheme))}};M([l({type:String,reflect:!0}),dt("design:type",Object)],Ee.prototype,"scheme",void 0);M([I(),dt("design:type",Object)],Ee.prototype,"mode",void 0);Ee=M([b("rr-demo-controls")],Ee);var kr=class extends m{static get styles(){return[g`
        :host {
          display: block;
        }

        #container {
          position: relative;
        }

        rr-settings {
          height: 100%;
        }
      `]}render(){return c`<div id="container">
      <rr-settings id="settings" .inline=${!0}></rr-settings>
    </div>`}};kr=M([b("rr-demo-settings")],kr);var jr=class extends m{static get styles(){return[g`
        :host {
          display: block;
        }

        #container {
          position: relative;
          width: 100%;
        }

        rr-presets {
          height: 100%;
        }
      `]}render(){return c`<div id="container">
      <rr-presets
        id="presets"
        .inline=${!0}
        .presets=${[{name:"Rock & Roll FM station",tunedFrequency:897e5,scale:1e6,tuningStep:1e5,scheme:"WBFM",bandwidth:15e4,stereo:!0,squelch:0,gain:30},{name:"Talk Radio AM",tunedFrequency:12e5,scale:1e3,tuningStep:1e4,scheme:"AM",bandwidth:1e4,stereo:!1,squelch:0,gain:30},{name:"Frequency standard",tunedFrequency:1e7,scale:1,tuningStep:1e4,scheme:"AM",bandwidth:1e4,stereo:!1,squelch:0,gain:30},{name:"Ham radio net",tunedFrequency:143e5,scale:1e3,tuningStep:1e3,scheme:"USB",bandwidth:2800,stereo:!1,squelch:0,gain:30}]}
      ></rr-presets>
    </div>`}};jr=M([b("rr-demo-presets")],jr);var Ur=new Map([["play",he],["stop",le],["add",Yt],["edit",me],["delete",ge],["presets",be],["settings",ce],["zoom-in",ue],["zoom-out",fe],["scroll-left",de],["scroll-right",pe]]),Di=class extends m{constructor(){super(...arguments),this.name="play"}static get styles(){return[g`
        :host {
          display: inline-block;
          vertical-align: middle;
          margin-top: -2px;
          margin-bottom: -2px;
        }
        button {
          padding-inline: 0;
          width: 24px;
          height: 24px;
        }
        button > svg {
          display: block;
          width: 16px;
          height: 16px;
          margin: auto;
        }
      `]}render(){return c`<button>${Ur.get(this.name)}</button>`}};M([l({type:String,reflect:!0}),dt("design:type",String)],Di.prototype,"name",void 0);Di=M([b("rr-demo-button")],Di);var Ci=class extends m{constructor(){super(...arguments),this.name="play"}static get styles(){return[g`
        :host {
          display: inline-block;
          vertical-align: middle;
          margin-top: -2px;
          margin-bottom: -2px;
        }
        button > svg {
          display: inline-block;
          width: 16px;
          height: 16px;
          margin: auto;
        }
      `]}render(){return c`${Ur.get(this.name)}`}};M([l({type:String,reflect:!0}),dt("design:type",String)],Ci.prototype,"name",void 0);Ci=M([b("rr-demo-icon")],Ci);var ze=class extends Lt{constructor(){super(...arguments),this.highlight={point:.5,band:{left:.5-.035,right:.5+.035}}}static get styles(){return[g`
        #container {
          position: relative;
          width: 133%;
          aspect-ratio: 2/1;
          transform: scale(0.75);
          transform-origin: left top;
          margin-bottom: -16.5%;
        }

        rr-spectrum {
          height: 100%;
        }
      `]}render(){return c`<div id="container">
      <rr-spectrum
        id="spectrum"
        .centerFrequency=${939e5}
        .bandwidth=${1e6}
        .frequencyScale=${1e6}
        .highlight=${this.highlight}
        .highlightDraggableLeft=${!0}
        .highlightDraggablePoint=${!0}
        .highlightDraggableRight=${!0}
      ></rr-spectrum>
    </div>`}addSpectrum(t){this.spectrumView?.addFloatSpectrum(939e5,t)}};M([I(),dt("design:type",Object)],ze.prototype,"highlight",void 0);M([y("#spectrum"),dt("design:type",typeof(Lr=typeof D<"u"&&D)=="function"?Lr:Object)],ze.prototype,"spectrumView",void 0);ze=M([b("rr-demo-highlight")],ze);var it=class{constructor(t,e,i){this.fraction=t,this.width=e,this.pulses=i,this.sample=0}add(t){let e=t.length,i=0;for(let s=0;s<this.pulses.length;++s){let{max:o,period:n,phase:a}=this.pulses[s],h=a+2*Math.PI*this.sample/n;i+=o*(Math.cos(h)+1)/2}for(let s=0;s<e;++s){let o=s/e+.5;o>1&&(o-=1);let n=this.fraction-o,a=1-n*n/this.width;t[s]=t[s]+Math.max(0,a*i)}this.sample+=1}};function ee(r,t,e){for(let i=0;i<r.length;i+=e){let s=t*Math.random();for(let o=0;o<e;++o)r[i+o]+=s}}var _i=class{constructor(t){this.generators=t,this.spectrumAdders=[],this.playing=!1,this.spectrum=new Float32Array(2048)}subscribe(t){let e=this.spectrumAdders.push(t);return this.play(),e-1}unsubscribe(t){if(!(t>=this.spectrumAdders.length))for(this.spectrumAdders[t]=null;this.spectrumAdders.length>0&&this.spectrumAdders[this.spectrumAdders.length-1]==null;)this.spectrumAdders.pop()}play(){this.playing||(this.playing=!0,requestAnimationFrame(t=>this.frame(t,0)))}stop(){this.playing=!1}frame(t,e){if(this.spectrumAdders.length==0&&(this.playing=!1),!this.playing)return;let s=Math.floor(20*t/1e3);if(s>e){this.spectrum.fill(-105),ee(this.spectrum,8,1),ee(this.spectrum,6,2),ee(this.spectrum,4,4),ee(this.spectrum,2,8),ee(this.spectrum,1,16);for(let o of this.generators)o.add(this.spectrum);for(let o of this.spectrumAdders)o?.(this.spectrum)}requestAnimationFrame(o=>this.frame(o,s))}};function fs(){return[new it(.1,.001,[{max:20,period:10,phase:1},{max:10,period:7,phase:2},{max:7,period:3.2,phase:3}]),new it(.1,1e-4,[{max:10,period:10,phase:1},{max:5,period:7,phase:2},{max:3.5,period:3.2,phase:3}]),new it(.5,.001,[{max:13,period:9,phase:4},{max:15,period:11,phase:5},{max:4,period:4,phase:6},{max:4,period:7,phase:7}]),new it(.5,1e-4,[{max:9,period:9,phase:4},{max:10,period:11,phase:5},{max:3,period:4,phase:6},{max:3,period:7,phase:7}]),new it(.7,.001,[{max:4,period:6,phase:8},{max:5,period:10,phase:9},{max:3,period:4,phase:10}]),new it(.7,1e-4,[{max:2,period:6,phase:8},{max:2.5,period:10,phase:9},{max:1.5,period:4,phase:10}]),new it(.9,.001,[{max:12,period:7,phase:11},{max:17,period:12,phase:12},{max:8,period:5,phase:13}]),new it(.9,1e-4,[{max:6,period:7,phase:11},{max:8,period:12,phase:12},{max:4,period:5,phase:13}])]}var Hr=new _i(fs());function ms(){let r=0,t=document.createElement("UL"),e=document.body.firstElementChild;for(;e!=null;){let i=e.tagName=="H1"?1:e.tagName=="H2"?2:0;if(i>0&&!e.classList.contains("title")){if(r>0&&i>r){let o=document.createElement("UL");t.lastElementChild?.append(o),t=o}else i<r&&(t=t.parentElement);let s=document.createElement("LI");if(e.id){let o=document.createElement("A");o.textContent=e.textContent,o.href="#"+e.id,s.append(o)}else s.textContent=e.textContent;t.appendChild(s),r=i}e=e.nextElementSibling}for(;t.parentElement!=null;)t=t.parentElement;t.hasChildNodes()&&document.getElementById("toc")?.append(t)}window.addEventListener("load",ms);})();
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
