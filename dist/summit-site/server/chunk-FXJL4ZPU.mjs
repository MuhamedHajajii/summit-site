import './polyfills.server.mjs';
import{$ as D,$b as z,Fa as x,Ha as a,Ja as E,M as L,Ma as m,N as B,O as c,P as R,Qa as F,R as g,T as l,U as h,Y as O,_ as T,_b as U,aa as P,fa as k,na as p,oa as N,sa as $}from"./chunk-VHJONPQK.mjs";var K=null;function y(){return K}function We(i){K??=i}var V=class{};var _=new g(""),I=(()=>{let t=class t{historyGo(e){throw new Error("")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=c({token:t,factory:()=>h(J),providedIn:"platform"});let i=t;return i})(),Ze=new g(""),J=(()=>{let t=class t extends I{constructor(){super(),this._doc=h(_),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return y().getBaseHref(this._doc)}onPopState(e){let n=y().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=y().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=c({token:t,factory:()=>new t,providedIn:"platform"});let i=t;return i})();function M(i,t){if(i.length==0)return t;if(t.length==0)return i;let s=0;return i.endsWith("/")&&s++,t.startsWith("/")&&s++,s==2?i+t.substring(1):s==1?i+t:i+"/"+t}function j(i){let t=i.match(/#|\?|$/),s=t&&t.index||i.length,e=s-(i[s-1]==="/"?1:0);return i.slice(0,e)+i.slice(s)}function d(i){return i&&i[0]!=="?"?"?"+i:i}var C=(()=>{let t=class t{historyGo(e){throw new Error("")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=c({token:t,factory:()=>h(ee),providedIn:"root"});let i=t;return i})(),q=new g(""),ee=(()=>{let t=class t extends C{constructor(e,n){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??h(_).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return M(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+d(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,o){let u=this.prepareExternalUrl(r+d(o));this._platformLocation.pushState(e,n,u)}replaceState(e,n,r,o){let u=this.prepareExternalUrl(r+d(o));this._platformLocation.replaceState(e,n,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}};t.\u0275fac=function(n){return new(n||t)(l(I),l(q,8))},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),Ke=(()=>{let t=class t extends C{constructor(e,n){super(),this._platformLocation=e,this._baseHref="",this._removeListenerFns=[],n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=M(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,r,o){let u=this.prepareExternalUrl(r+d(o));u.length==0&&(u=this._platformLocation.pathname),this._platformLocation.pushState(e,n,u)}replaceState(e,n,r,o){let u=this.prepareExternalUrl(r+d(o));u.length==0&&(u=this._platformLocation.pathname),this._platformLocation.replaceState(e,n,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}};t.\u0275fac=function(n){return new(n||t)(l(I),l(q,8))},t.\u0275prov=c({token:t,factory:t.\u0275fac});let i=t;return i})(),te=(()=>{let t=class t{constructor(e){this._subject=new N,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=re(j(G(n))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+d(n))}normalize(e){return t.stripTrailingSlash(ie(this._basePath,G(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+d(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+d(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n,complete:r})}};t.normalizeQueryParams=d,t.joinWithSlash=M,t.stripTrailingSlash=j,t.\u0275fac=function(n){return new(n||t)(l(C))},t.\u0275prov=c({token:t,factory:()=>ne(),providedIn:"root"});let i=t;return i})();function ne(){return new te(l(C))}function ie(i,t){if(!i||!t.startsWith(i))return t;let s=t.substring(i.length);return s===""||["/",";","?","#"].includes(s[0])?s:t}function G(i){return i.replace(/\/index.html$/,"")}function re(i){if(new RegExp("^(https?:)?//").test(i)){let[,s]=i.split(/\/\/[^\/]+/);return s}return i}function qe(i,t){t=encodeURIComponent(t);for(let s of i.split(";")){let e=s.indexOf("="),[n,r]=e==-1?[s,""]:[s.slice(0,e),s.slice(e+1)];if(n.trim()===t)return decodeURIComponent(r)}return null}var w=/\s+/,H=[],Xe=(()=>{let t=class t{constructor(e,n){this._ngEl=e,this._renderer=n,this.initialClasses=H,this.stateMap=new Map}set klass(e){this.initialClasses=e!=null?e.trim().split(w):H}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(w):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==n&&(r.changed=!0,r.enabled=n),r.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],r=e[1];r.changed?(this._toggleClass(n,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),r.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(w).forEach(r=>{n?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}};t.\u0275fac=function(n){return new(n||t)(a(p),a(m))},t.\u0275dir=D({type:t,selectors:[["","ngClass",""]],inputs:{klass:[O.None,"class","klass"],ngClass:"ngClass"},standalone:!0});let i=t;return i})();var A=class{constructor(t,s,e,n){this.$implicit=t,this.ngForOf=s,this.index=e,this.count=n}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Qe=(()=>{let t=class t{set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}constructor(e,n,r){this._viewContainer=e,this._template=n,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;if(!this._differ&&e)if(0)try{}catch{}else this._differ=this._differs.find(e).create(this.ngForTrackBy)}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((r,o,u)=>{if(r.previousIndex==null)n.createEmbeddedView(this._template,new A(r.item,this._ngForOf,-1,-1),u===null?void 0:u);else if(u==null)n.remove(o===null?void 0:o);else if(o!==null){let f=n.get(o);n.move(f,u),Y(f,r)}});for(let r=0,o=n.length;r<o;r++){let f=n.get(r).context;f.index=r,f.count=o,f.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{let o=n.get(r.currentIndex);Y(o,r)})}static ngTemplateContextGuard(e,n){return!0}};t.\u0275fac=function(n){return new(n||t)(a(F),a(E),a(U))},t.\u0275dir=D({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});let i=t;return i})();function Y(i,t){i.context.$implicit=t.item}var Je=(()=>{let t=class t{constructor(e,n){this._viewContainer=e,this._context=new S,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){W("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){W("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(e,n){return!0}};t.\u0275fac=function(n){return new(n||t)(a(F),a(E))},t.\u0275dir=D({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0});let i=t;return i})(),S=class{constructor(){this.$implicit=null,this.ngIf=null}};function W(i,t){if(!!!(!t||t.createEmbeddedView))throw new Error(`${i} must be a TemplateRef, but received '${B(t)}'.`)}var et=(()=>{let t=class t{constructor(e,n,r){this._ngEl=e,this._differs=n,this._renderer=r,this._ngStyle=null,this._differ=null}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[r,o]=e.split("."),u=r.indexOf("-")===-1?void 0:x.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${n}${o}`:n,u):this._renderer.removeStyle(this._ngEl.nativeElement,r,u)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}};t.\u0275fac=function(n){return new(n||t)(a(p),a(z),a(m))},t.\u0275dir=D({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"},standalone:!0});let i=t;return i})(),tt=(()=>{let t=class t{constructor(e){this._viewContainerRef=e,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,r):!1,get:(e,n,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,r)}})}};t.\u0275fac=function(n){return new(n||t)(a(F))},t.\u0275dir=D({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[k]});let i=t;return i})();function se(i,t){return new L(2100,!1)}var nt=(()=>{let t=class t{transform(e,n,r){if(e==null)return null;if(!this.supports(e))throw se(t,e);return e.slice(n,r)}supports(e){return typeof e=="string"||Array.isArray(e)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=P({name:"slice",type:t,pure:!1,standalone:!0});let i=t;return i})();var it=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=T({type:t}),t.\u0275inj=R({});let i=t;return i})(),oe="browser",ue="server";function ae(i){return i===oe}function rt(i){return i===ue}var st=(()=>{let t=class t{};t.\u0275prov=c({token:t,providedIn:"root",factory:()=>ae(h($))?new b(h(_),window):new v});let i=t;return i})(),b=class{constructor(t,s){this.document=t,this.window=s,this.offset=()=>[0,0]}setOffset(t){Array.isArray(t)?this.offset=()=>t:this.offset=t}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(t){this.window.scrollTo(t[0],t[1])}scrollToAnchor(t){let s=ce(this.document,t);s&&(this.scrollToElement(s),s.focus())}setHistoryScrollRestoration(t){this.window.history.scrollRestoration=t}scrollToElement(t){let s=t.getBoundingClientRect(),e=s.left+this.window.pageXOffset,n=s.top+this.window.pageYOffset,r=this.offset();this.window.scrollTo(e-r[0],n-r[1])}};function ce(i,t){let s=i.getElementById(t)||i.getElementsByName(t)[0];if(s)return s;if(typeof i.createTreeWalker=="function"&&i.body&&typeof i.body.attachShadow=="function"){let e=i.createTreeWalker(i.body,NodeFilter.SHOW_ELEMENT),n=e.currentNode;for(;n;){let r=n.shadowRoot;if(r){let o=r.getElementById(t)||r.querySelector(`[name="${t}"]`);if(o)return o}n=e.nextNode()}}return null}var v=class{setOffset(t){}getScrollPosition(){return[0,0]}scrollToPosition(t){}scrollToAnchor(t){}setHistoryScrollRestoration(t){}},Z=class{};export{y as a,We as b,V as c,_ as d,I as e,Ze as f,C as g,q as h,ee as i,Ke as j,te as k,qe as l,Xe as m,Qe as n,Je as o,et as p,tt as q,nt as r,it as s,oe as t,ue as u,ae as v,rt as w,st as x,v as y,Z as z};
