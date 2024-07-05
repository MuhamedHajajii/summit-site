import{Ea as Ne,Ka as Ae,X as Re,e as Pe}from"./chunk-LVYA2WDB.js";import{$ as pe,D as K,K as de,M as he,N as ue,P as D,Q as fe,S as E,U as P,V as g,Za as Te,_a as we,c as G,ca as ye,fa as me,ga as ge,i as ae,ib as Y,j as V,lc as Ee,mc as ve,n as F,nc as be,ua as S,v as ce,y as le,za as C}from"./chunk-5XT5VZIE.js";import{a as q,c as ie,e as W}from"./chunk-YHOLSLLF.js";var L=class{},U=class{},v=class e{constructor(n){this.normalizedNames=new Map,this.lazyUpdate=null,n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(t=>{let r=t.indexOf(":");if(r>0){let s=t.slice(0,r),o=s.toLowerCase(),a=t.slice(r+1).trim();this.maybeSetNormalizedName(s,o),this.headers.has(o)?this.headers.get(o).push(a):this.headers.set(o,[a])}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((t,r)=>{this.setHeaderEntries(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let t=this.headers.get(n.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,t){return this.clone({name:n,value:t,op:"a"})}set(n,t){return this.clone({name:n,value:t,op:"s"})}delete(n,t){return this.clone({name:n,value:t,op:"d"})}maybeSetNormalizedName(n,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,n)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(t=>{this.headers.set(t,n.headers.get(t)),this.normalizedNames.set(t,n.normalizedNames.get(t))})}clone(n){let t=new e;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([n]),t}applyUpdate(n){let t=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(n.name,t);let s=(n.op==="a"?this.headers.get(t):void 0)||[];s.push(...r),this.headers.set(t,s);break;case"d":let o=n.value;if(!o)this.headers.delete(t),this.normalizedNames.delete(t);else{let a=this.headers.get(t);if(!a)return;a=a.filter(i=>o.indexOf(i)===-1),a.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,a)}break}}setHeaderEntries(n,t){let r=(Array.isArray(t)?t:[t]).map(o=>o.toString()),s=n.toLowerCase();this.headers.set(s,r),this.maybeSetNormalizedName(n,s)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>n(this.normalizedNames.get(t),this.headers.get(t)))}};var H=class{encodeKey(n){return Oe(n)}encodeValue(n){return Oe(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function Ke(e,n){let t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(s=>{let o=s.indexOf("="),[a,i]=o==-1?[n.decodeKey(s),""]:[n.decodeKey(s.slice(0,o)),n.decodeValue(s.slice(o+1))],u=t.get(a)||[];u.push(i),t.set(a,u)}),t}var Se=/%(\d[a-f0-9])/gi,Ce={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Oe(e){return encodeURIComponent(e).replace(Se,(n,t)=>Ce[t]??n)}function X(e){return`${e}`}var N=class e{constructor(n={}){if(this.updates=null,this.cloneFrom=null,this.encoder=n.encoder||new H,n.fromString){if(n.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=Ke(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(t=>{let r=n.fromObject[t],s=Array.isArray(r)?r.map(X):[X(r)];this.map.set(t,s)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let t=this.map.get(n);return t?t[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,t){return this.clone({param:n,value:t,op:"a"})}appendAll(n){let t=[];return Object.keys(n).forEach(r=>{let s=n[r];Array.isArray(s)?s.forEach(o=>{t.push({param:r,value:o,op:"a"})}):t.push({param:r,value:s,op:"a"})}),this.clone(t)}set(n,t){return this.clone({param:n,value:t,op:"s"})}delete(n,t){return this.clone({param:n,value:t,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let t=this.encoder.encodeKey(n);return this.map.get(n).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let t=new e({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(n),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let t=(n.op==="a"?this.map.get(n.param):void 0)||[];t.push(X(n.value)),this.map.set(n.param,t);break;case"d":if(n.value!==void 0){let r=this.map.get(n.param)||[],s=r.indexOf(X(n.value));s!==-1&&r.splice(s,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};var ee=class{constructor(){this.map=new Map}set(n,t){return this.map.set(n,t),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}};function Ye(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Ie(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function Me(e){return typeof Blob<"u"&&e instanceof Blob}function De(e){return typeof FormData<"u"&&e instanceof FormData}function Ze(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var j=class e{constructor(n,t,r,s){this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=n.toUpperCase();let o;if(Ye(this.method)||s?(this.body=r!==void 0?r:null,o=s):o=r,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new v,this.context??=new ee,!this.params)this.params=new N,this.urlWithParams=t;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=t;else{let i=t.indexOf("?"),u=i===-1?"?":i<t.length-1?"&":"";this.urlWithParams=t+u+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Ie(this.body)||Me(this.body)||De(this.body)||Ze(this.body)?this.body:this.body instanceof N?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||De(this.body)?null:Me(this.body)?this.body.type||null:Ie(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof N?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(n={}){let t=n.method||this.method,r=n.url||this.url,s=n.responseType||this.responseType,o=n.transferCache??this.transferCache,a=n.body!==void 0?n.body:this.body,i=n.withCredentials??this.withCredentials,u=n.reportProgress??this.reportProgress,c=n.headers||this.headers,f=n.params||this.params,y=n.context??this.context;return n.setHeaders!==void 0&&(c=Object.keys(n.setHeaders).reduce((l,w)=>l.set(w,n.setHeaders[w]),c)),n.setParams&&(f=Object.keys(n.setParams).reduce((l,w)=>l.set(w,n.setParams[w]),f)),new e(t,r,a,{params:f,headers:c,context:y,reportProgress:u,responseType:s,withCredentials:i,transferCache:o})}},A=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(A||{}),B=class{constructor(n,t=z.Ok,r="OK"){this.headers=n.headers||new v,this.status=n.status!==void 0?n.status:t,this.statusText=n.statusText||r,this.url=n.url||null,this.ok=this.status>=200&&this.status<300}},J=class e extends B{constructor(n={}){super(n),this.type=A.ResponseHeader}clone(n={}){return new e({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},M=class e extends B{constructor(n={}){super(n),this.type=A.Response,this.body=n.body!==void 0?n.body:null}clone(n={}){return new e({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},R=class extends B{constructor(n){super(n,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},z=function(e){return e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableEntity=422]="UnprocessableEntity",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",e}(z||{});function Z(e,n){return{body:n,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}var Qe=(()=>{let n=class n{constructor(r){this.handler=r}request(r,s,o={}){let a;if(r instanceof j)a=r;else{let c;o.headers instanceof v?c=o.headers:c=new v(o.headers);let f;o.params&&(o.params instanceof N?f=o.params:f=new N({fromObject:o.params})),a=new j(r,s,o.body!==void 0?o.body:null,{headers:c,context:o.context,params:f,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache})}let i=V(a).pipe(le(c=>this.handler.handle(c)));if(r instanceof j||o.observe==="events")return i;let u=i.pipe(ce(c=>c instanceof M));switch(o.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return u.pipe(F(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return u.pipe(F(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return u.pipe(F(c=>{if(c.body!==null&&typeof c.body!="string")throw new Error("Response is not a string.");return c.body}));case"json":default:return u.pipe(F(c=>c.body))}case"response":return u;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(r,s={}){return this.request("DELETE",r,s)}get(r,s={}){return this.request("GET",r,s)}head(r,s={}){return this.request("HEAD",r,s)}jsonp(r,s){return this.request("JSONP",r,{params:new N().append(s,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(r,s={}){return this.request("OPTIONS",r,s)}patch(r,s,o={}){return this.request("PATCH",r,Z(o,s))}post(r,s,o={}){return this.request("POST",r,Z(o,s))}put(r,s,o={}){return this.request("PUT",r,Z(o,s))}};n.\u0275fac=function(s){return new(s||n)(P(L))},n.\u0275prov=D({token:n,factory:n.\u0275fac});let e=n;return e})(),He=/^\)\]\}',?\n/,en="X-Request-URL";function xe(e){if(e.url)return e.url;let n=en.toLocaleLowerCase();return e.headers.get(n)}var Q=(()=>{let n=class n{constructor(){this.fetchImpl=g(ne,{optional:!0})?.fetch??fetch.bind(globalThis),this.ngZone=g(we)}handle(r){return new G(s=>{let o=new AbortController;return this.doRequest(r,o.signal,s).then(re,a=>s.error(new R({error:a}))),()=>o.abort()})}doRequest(r,s,o){return W(this,null,function*(){let a=this.createRequestInit(r),i;try{let m=this.fetchImpl(r.urlWithParams,q({signal:s},a));nn(m),o.next({type:A.Sent}),i=yield m}catch(m){o.error(new R({error:m,status:m.status??0,statusText:m.statusText,url:r.urlWithParams,headers:m.headers}));return}let u=new v(i.headers),c=i.statusText,f=xe(i)??r.urlWithParams,y=i.status,l=null;if(r.reportProgress&&o.next(new J({headers:u,status:y,statusText:c,url:f})),i.body){let m=i.headers.get("content-length"),O=[],d=i.body.getReader(),h=0,T,b,p=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>W(this,null,function*(){for(;;){let{done:I,value:k}=yield d.read();if(I)break;if(O.push(k),h+=k.length,r.reportProgress){b=r.responseType==="text"?(b??"")+(T??=new TextDecoder).decode(k,{stream:!0}):void 0;let oe=()=>o.next({type:A.DownloadProgress,total:m?+m:void 0,loaded:h,partialText:b});p?p.run(oe):oe()}}}));let x=this.concatChunks(O,h);try{let I=i.headers.get("Content-Type")??"";l=this.parseBody(r,x,I)}catch(I){o.error(new R({error:I,headers:new v(i.headers),status:i.status,statusText:i.statusText,url:xe(i)??r.urlWithParams}));return}}y===0&&(y=l?z.Ok:0),y>=200&&y<300?(o.next(new M({body:l,headers:u,status:y,statusText:c,url:f})),o.complete()):o.error(new R({error:l,headers:u,status:y,statusText:c,url:f}))})}parseBody(r,s,o){switch(r.responseType){case"json":let a=new TextDecoder().decode(s).replace(He,"");return a===""?null:JSON.parse(a);case"text":return new TextDecoder().decode(s);case"blob":return new Blob([s],{type:o});case"arraybuffer":return s.buffer}}createRequestInit(r){let s={},o=r.withCredentials?"include":void 0;if(r.headers.forEach((a,i)=>s[a]=i.join(",")),s.Accept??="application/json, text/plain, */*",!s["Content-Type"]){let a=r.detectContentTypeHeader();a!==null&&(s["Content-Type"]=a)}return{body:r.serializeBody(),method:r.method,headers:s,credentials:o}}concatChunks(r,s){let o=new Uint8Array(s),a=0;for(let i of r)o.set(i,a),a+=i.length;return o}};n.\u0275fac=function(s){return new(s||n)},n.\u0275prov=D({token:n,factory:n.\u0275fac});let e=n;return e})(),ne=class{};function re(){}function nn(e){e.then(re,re)}function Je(e,n){return n(e)}function rn(e,n){return(t,r)=>n.intercept(t,{handle:s=>e(s,r)})}function tn(e,n,t){return(r,s)=>ge(t,()=>n(r,o=>e(o,s)))}var sn=new E(""),te=new E(""),$e=new E(""),qe=new E("");function on(){let e=null;return(n,t)=>{e===null&&(e=(g(sn,{optional:!0})??[]).reduceRight(rn,Je));let r=g(Y),s=r.add();return e(n,t).pipe(K(()=>r.remove(s)))}}var ke=(()=>{let n=class n extends L{constructor(r,s){super(),this.backend=r,this.injector=s,this.chain=null,this.pendingTasks=g(Y);let o=g(qe,{optional:!0});this.backend=o??r}handle(r){if(this.chain===null){let o=Array.from(new Set([...this.injector.get(te),...this.injector.get($e,[])]));this.chain=o.reduceRight((a,i)=>tn(a,i,this.injector),Je)}let s=this.pendingTasks.add();return this.chain(r,o=>this.backend.handle(o)).pipe(K(()=>this.pendingTasks.remove(s)))}};n.\u0275fac=function(s){return new(s||n)(P(U),P(me))},n.\u0275prov=D({token:n,factory:n.\u0275fac});let e=n;return e})();var an=/^\)\]\}',?\n/;function cn(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}var Fe=(()=>{let n=class n{constructor(r){this.xhrFactory=r}handle(r){if(r.method==="JSONP")throw new ue(-2800,!1);let s=this.xhrFactory;return(s.\u0275loadImpl?ae(s.\u0275loadImpl()):V(null)).pipe(de(()=>new G(a=>{let i=s.build();if(i.open(r.method,r.urlWithParams),r.withCredentials&&(i.withCredentials=!0),r.headers.forEach((d,h)=>i.setRequestHeader(d,h.join(","))),r.headers.has("Accept")||i.setRequestHeader("Accept","application/json, text/plain, */*"),!r.headers.has("Content-Type")){let d=r.detectContentTypeHeader();d!==null&&i.setRequestHeader("Content-Type",d)}if(r.responseType){let d=r.responseType.toLowerCase();i.responseType=d!=="json"?d:"text"}let u=r.serializeBody(),c=null,f=()=>{if(c!==null)return c;let d=i.statusText||"OK",h=new v(i.getAllResponseHeaders()),T=cn(i)||r.url;return c=new J({headers:h,status:i.status,statusText:d,url:T}),c},y=()=>{let{headers:d,status:h,statusText:T,url:b}=f(),p=null;h!==z.NoContent&&(p=typeof i.response>"u"?i.responseText:i.response),h===0&&(h=p?z.Ok:0);let x=h>=200&&h<300;if(r.responseType==="json"&&typeof p=="string"){let I=p;p=p.replace(an,"");try{p=p!==""?JSON.parse(p):null}catch(k){p=I,x&&(x=!1,p={error:k,text:p})}}x?(a.next(new M({body:p,headers:d,status:h,statusText:T,url:b||void 0})),a.complete()):a.error(new R({error:p,headers:d,status:h,statusText:T,url:b||void 0}))},l=d=>{let{url:h}=f(),T=new R({error:d,status:i.status||0,statusText:i.statusText||"Unknown Error",url:h||void 0});a.error(T)},w=!1,m=d=>{w||(a.next(f()),w=!0);let h={type:A.DownloadProgress,loaded:d.loaded};d.lengthComputable&&(h.total=d.total),r.responseType==="text"&&i.responseText&&(h.partialText=i.responseText),a.next(h)},O=d=>{let h={type:A.UploadProgress,loaded:d.loaded};d.lengthComputable&&(h.total=d.total),a.next(h)};return i.addEventListener("load",y),i.addEventListener("error",l),i.addEventListener("timeout",l),i.addEventListener("abort",l),r.reportProgress&&(i.addEventListener("progress",m),u!==null&&i.upload&&i.upload.addEventListener("progress",O)),i.send(u),a.next({type:A.Sent}),()=>{i.removeEventListener("error",l),i.removeEventListener("abort",l),i.removeEventListener("load",y),i.removeEventListener("timeout",l),r.reportProgress&&(i.removeEventListener("progress",m),u!==null&&i.upload&&i.upload.removeEventListener("progress",O)),i.readyState!==i.DONE&&i.abort()}})))}};n.\u0275fac=function(s){return new(s||n)(P(Ae))},n.\u0275prov=D({token:n,factory:n.\u0275fac});let e=n;return e})(),We=new E(""),ln="XSRF-TOKEN",dn=new E("",{providedIn:"root",factory:()=>ln}),hn="X-XSRF-TOKEN",un=new E("",{providedIn:"root",factory:()=>hn}),$=class{},fn=(()=>{let n=class n{constructor(r,s,o){this.doc=r,this.platform=s,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let r=this.doc.cookie||"";return r!==this.lastCookieString&&(this.parseCount++,this.lastToken=Re(r,this.cookieName),this.lastCookieString=r),this.lastToken}};n.\u0275fac=function(s){return new(s||n)(P(Pe),P(S),P(dn))},n.\u0275prov=D({token:n,factory:n.\u0275fac});let e=n;return e})();function pn(e,n){let t=e.url.toLowerCase();if(!g(We)||e.method==="GET"||e.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return n(e);let r=g($).getToken(),s=g(un);return r!=null&&!e.headers.has(s)&&(e=e.clone({headers:e.headers.set(s,r)})),n(e)}var se=function(e){return e[e.Interceptors=0]="Interceptors",e[e.LegacyInterceptors=1]="LegacyInterceptors",e[e.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",e[e.NoXsrfProtection=3]="NoXsrfProtection",e[e.JsonpSupport=4]="JsonpSupport",e[e.RequestsMadeViaParent=5]="RequestsMadeViaParent",e[e.Fetch=6]="Fetch",e}(se||{});function Ge(e,n){return{\u0275kind:e,\u0275providers:n}}function yn(...e){let n=[Qe,Fe,ke,{provide:L,useExisting:ke},{provide:U,useExisting:Fe},{provide:te,useValue:pn,multi:!0},{provide:We,useValue:!0},{provide:$,useClass:fn}];for(let t of e)n.push(...t.\u0275providers);return ye(n)}var je=new E("");function mn(){return Ge(se.LegacyInterceptors,[{provide:je,useFactory:on},{provide:te,useExisting:je,multi:!0}])}function Ln(){return Ge(se.Fetch,[Q,{provide:U,useExisting:Q},{provide:qe,useExisting:Q}])}var Un=(()=>{let n=class n{};n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=pe({type:n}),n.\u0275inj=fe({providers:[yn(mn())]});let e=n;return e})();var Le="b",Ue="h",Be="s",ze="st",Ve="u",Xe="rt",_=new E(""),gn=["GET","HEAD"];function Tn(e,n){let y=g(_),{isCacheActive:t}=y,r=ie(y,["isCacheActive"]),{transferCache:s,method:o}=e;if(!t||o==="POST"&&!r.includePostRequests&&!s||o!=="POST"&&!gn.includes(o)||s===!1||r.filter?.(e)===!1)return n(e);let a=g(C),i=En(e),u=a.get(i,null),c=r.includeHeaders;if(typeof s=="object"&&s.includeHeaders&&(c=s.includeHeaders),u){let{[Le]:l,[Xe]:w,[Ue]:m,[Be]:O,[ze]:d,[Ve]:h}=u,T=l;switch(w){case"arraybuffer":T=new TextEncoder().encode(l).buffer;break;case"blob":T=new Blob([l]);break}let b=new v(m);return V(new M({body:T,headers:b,status:O,statusText:d,url:h}))}let f=Ne(g(S));return n(e).pipe(he(l=>{l instanceof M&&f&&a.set(i,{[Le]:l.body,[Ue]:wn(l.headers,c),[Be]:l.status,[ze]:l.statusText,[Ve]:l.url||"",[Xe]:e.responseType})}))}function wn(e,n){if(!n)return{};let t={};for(let r of n){let s=e.getAll(r);s!==null&&(t[r]=s)}return t}function _e(e){return[...e.keys()].sort().map(n=>`${n}=${e.getAll(n)}`).join("&")}function En(e){let{params:n,method:t,responseType:r,url:s}=e,o=_e(n),a=e.serializeBody();a instanceof URLSearchParams?a=_e(a):typeof a!="string"&&(a="");let i=[t,r,s,a,o].join("|"),u=vn(i);return u}function vn(e){let n=0;for(let t of e)n=Math.imul(31,n)+t.charCodeAt(0)<<0;return n+=2147483648,n.toString()}function Bn(e){return[{provide:_,useFactory:()=>(Te("NgHttpTransferCache"),q({isCacheActive:!0},e))},{provide:$e,useValue:Tn,multi:!0,deps:[C,_]},{provide:Ee,multi:!0,useFactory:()=>{let n=g(ve),t=g(_);return()=>{be(n).then(()=>{t.isCacheActive=!1})}}}]}export{Qe as a,yn as b,Ln as c,Un as d,Bn as e};
