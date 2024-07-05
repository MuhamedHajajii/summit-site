import{a as lt,b as ut}from"./chunk-2OGULN3C.js";import{a as nt,b as st,c as rt}from"./chunk-DWGP4D37.js";import{a as X,b as E,c as tt,f as o,g as et,k as it,l as ot}from"./chunk-ILESNU3P.js";import"./chunk-WXI33M2S.js";import"./chunk-PCEZ76VB.js";import"./chunk-C2J7WICD.js";import{Da as Q,ya as w}from"./chunk-LVYA2WDB.js";import{$ as D,Ab as L,Bb as Y,Cb as $,Eb as C,Kb as m,La as F,Lb as h,Q as H,Qa as V,Sa as a,Sb as G,Ta as p,Tb as d,Va as k,Vb as I,Ya as z,Yb as J,Z as r,_ as A,_a as R,aa as M,ab as N,db as W,fc as K,ha as S,ia as T,ja as b,jb as y,pa as B,pb as f,tb as j,ua as P,vb as Z,wb as U,xb as q,xc as _,yb as l,yc as g,zb as c}from"./chunk-5XT5VZIE.js";import{a as O}from"./chunk-YHOLSLLF.js";var at=(()=>{class n{platformId;el;zone;config;renderer;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:X()+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;scrollHandler;resizeListener;constructor(t,e,i,s,v,x){this.platformId=t,this.el=e,this.zone=i,this.config=s,this.renderer=v,this.viewContainer=x}ngAfterViewInit(){Q(this.platformId)&&this.zone.runOutsideAngular(()=>{let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),t==="focus"||t==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let e=this.el.nativeElement.querySelector(".p-component");e||(e=this.getTarget(this.el.nativeElement)),e.addEventListener("focus",this.focusListener),e.addEventListener("blur",this.blurListener)}})}ngOnChanges(t){t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.content&&(this.setOption({tooltipLabel:t.content.currentValue}),this.active&&(t.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.autoHide&&this.setOption({autoHide:t.autoHide.currentValue}),t.id&&this.setOption({id:t.id.currentValue}),t.tooltipOptions&&(this._tooltipOptions=O(O({},this._tooltipOptions),t.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(t){this.isAutoHide()?this.deactivate():!(o.hasClass(t.relatedTarget,"p-tooltip")||o.hasClass(t.relatedTarget,"p-tooltip-text")||o.hasClass(t.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(t){this.activate()}onBlur(t){this.deactivate()}onInputClick(t){this.deactivate()}onPressEscape(){this.hideOnEscape&&this.deactivate()}activate(){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},t)}}deactivate(){this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let t=document.createElement("div");t.className="p-tooltip-arrow",this.container.appendChild(t),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?o.appendChild(this.container,this.el.nativeElement):o.appendChild(this.container,this.getOption("appendTo")),this.container.style.display="inline-block",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let t=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(t,"mouseleave",e=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&this.align()},100):this.align(),o.fadeIn(this.container,250),this.getOption("tooltipZIndex")==="auto"?E.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&E.clear(this.container),this.remove()}updateText(){let t=this.getOption("tooltipLabel");if(t instanceof k){let e=this.viewContainer.createEmbeddedView(t);e.detectChanges(),e.rootNodes.forEach(i=>this.tooltipText.appendChild(i))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(t))):this.tooltipText.innerHTML=t}align(){switch(this.getOption("tooltipPosition")){case"top":this.alignTop(),this.isOutOfBounds()&&(this.alignBottom(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&this.alignLeft()));break;case"bottom":this.alignBottom(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&this.alignLeft()));break;case"left":this.alignLeft(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&this.alignBottom()));break;case"right":this.alignRight(),this.isOutOfBounds()&&(this.alignLeft(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&this.alignBottom()));break}}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let t=this.el.nativeElement.getBoundingClientRect(),e=t.left+o.getWindowScrollLeft(),i=t.top+o.getWindowScrollTop();return{left:e,top:i}}else return{left:0,top:0}}alignRight(){this.preAlign("right");let t=this.activeElement,e=this.getHostOffset(),i=e.left+o.getOuterWidth(t),s=e.top+(o.getOuterHeight(t)-o.getOuterHeight(this.container))/2;this.container.style.left=i+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}get activeElement(){return this.el.nativeElement.nodeName.includes("P-")?o.findSingle(this.el.nativeElement,".p-component")||this.el.nativeElement:this.el.nativeElement}alignLeft(){this.preAlign("left");let t=this.getHostOffset(),e=t.left-o.getOuterWidth(this.container),i=t.top+(o.getOuterHeight(this.el.nativeElement)-o.getOuterHeight(this.container))/2;this.container.style.left=e+this.getOption("positionLeft")+"px",this.container.style.top=i+this.getOption("positionTop")+"px"}alignTop(){this.preAlign("top");let t=this.getHostOffset(),e=t.left+(o.getOuterWidth(this.el.nativeElement)-o.getOuterWidth(this.container))/2,i=t.top-o.getOuterHeight(this.container);this.container.style.left=e+this.getOption("positionLeft")+"px",this.container.style.top=i+this.getOption("positionTop")+"px"}alignBottom(){this.preAlign("bottom");let t=this.getHostOffset(),e=t.left+(o.getOuterWidth(this.el.nativeElement)-o.getOuterWidth(this.container))/2,i=t.top+o.getOuterHeight(this.el.nativeElement);this.container.style.left=e+this.getOption("positionLeft")+"px",this.container.style.top=i+this.getOption("positionTop")+"px"}setOption(t){this._tooltipOptions=O(O({},this._tooltipOptions),t)}getOption(t){return this._tooltipOptions[t]}getTarget(t){return o.hasClass(t,"p-inputwrapper")?o.findSingle(t,"input"):t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px";let e="p-tooltip p-component p-tooltip-"+t;this.container.className=this.getOption("tooltipStyleClass")?e+" "+this.getOption("tooltipStyleClass"):e}isOutOfBounds(){let t=this.container.getBoundingClientRect(),e=t.top,i=t.left,s=o.getOuterWidth(this.container),v=o.getOuterHeight(this.container),x=o.getViewport();return i+s>x.width||i<0||e<0||e+v>x.height}onWindowResize(t){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new et(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),t==="focus"||t==="both"){let e=this.el.nativeElement.querySelector(".p-component");e||(e=this.getTarget(this.el.nativeElement)),e.removeEventListener("focus",this.focusListener),e.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):o.removeChild(this.container,this.getOption("appendTo"))),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),this.container&&E.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null)}static \u0275fac=function(e){return new(e||n)(p(P),p(B),p(R),p(tt),p(z),p(N))};static \u0275dir=M({type:n,selectors:[["","pTooltip",""]],hostAttrs:[1,"p-element"],hostBindings:function(e,i){e&1&&m("keydown.escape",function(v){return i.onPressEscape(v)},!1,V)},inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[r.HasDecoratorInputTransform,"escape","escape",_],showDelay:[r.HasDecoratorInputTransform,"showDelay","showDelay",g],hideDelay:[r.HasDecoratorInputTransform,"hideDelay","hideDelay",g],life:[r.HasDecoratorInputTransform,"life","life",g],positionTop:[r.HasDecoratorInputTransform,"positionTop","positionTop",g],positionLeft:[r.HasDecoratorInputTransform,"positionLeft","positionLeft",g],autoHide:[r.HasDecoratorInputTransform,"autoHide","autoHide",_],fitContent:[r.HasDecoratorInputTransform,"fitContent","fitContent",_],hideOnEscape:[r.HasDecoratorInputTransform,"hideOnEscape","hideOnEscape",_],content:[r.None,"pTooltip","content"],disabled:[r.None,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},features:[W,S]})}return n})(),pt=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=D({type:n});static \u0275inj=H({imports:[w]})}return n})();function dt(n,u){n&1&&(l(0,"div",17)(1,"span"),d(2," Play Video "),c()())}function ft(n,u){if(n&1){let t=C();l(0,"div",11),L(1,"img",12),l(2,"div",13),m("click",function(){T(t);let i=h().$implicit,s=h();return b(s.clickedImage(i))})("click",function(){T(t);let i=h(2);return b(i.toggleLightBox())}),L(3,"p-button",14),y(4,dt,3,0,"ng-template",null,0,K),c()(),l(6,"div",3)(7,"p",15),d(8),c(),l(9,"p",16),d(10),c()()}if(n&2){let t=G(5),e=h().$implicit;a(),f("height",450)("src",e.ImageUrl,F)("alt",e.Instractor_Name)("title",e.Instractor_Name),a(2),f("pTooltip",t),a(5),I(" ",e.Instractor_Name," "),a(2),I(" ",e.Instractor_Job," ")}}function mt(n,u){if(n&1&&(Y(0),y(1,ft,11,7,"ng-template",10),$()),n&2){let t=u.$implicit;a(),f("id",t.Instractor_Name)}}function gt(n,u){if(n&1){let t=C();l(0,"div",18),m("click",function(){T(t);let i=h();return b(i.toggleLightBox())}),l(1,"div",19),m("click",function(){T(t);let i=h();return b(i.toggleLightBox())}),L(2,"app-videos",20),c()()}if(n&2){let t=h();a(2),f("cuurentInstractor",t.currentSlide)}}var Ft=(()=>{let u=class u{constructor(e){this._Team=e,this.customOptions={lazyLoad:!0,loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,margin:15,dots:!1,rtl:!0,autoplay:!0,autoplaySpeed:500,navSpeed:700,navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],responsive:{0:{items:1},400:{items:2},740:{items:3},940:{items:4}},nav:!0},this.isToggleLightBox=!1}clickedImage(e){this.currentSlide=e,console.log(e.Instractor_Name)}toggleLightBox(){this.isToggleLightBox=!this.isToggleLightBox}};u.\u0275fac=function(i){return new(i||u)(p(ut))},u.\u0275cmp=A({type:u,selectors:[["app-home-team"]],standalone:!0,features:[J],decls:14,vars:2,consts:[["tooltipContent",""],["data-aos","fade-left","data-aos-duration","1000",1,"py-5"],[1,"container","pb-5"],[1,"text-center"],[1,"AR","Text-Main","fw-bold","mb-3"],[1,"text-shadow","text-uppercase"],["data-aos","fade-left","data-aos-duration","1000",1,"fw-semibold"],["data-aos","fade-right","data-aos-duration","1000"],[3,"options"],[1,"LightBoxContainer"],["carouselSlide","",3,"id"],[1,"position-relative"],["loading","lazy","decoding","async","data-aos","flip-right","data-aos-duration","1000","referrerpolicy","no-referrer",1,"rounded-3","ratio","ratio-16x9","w-100",3,"height","src","alt","title"],[1,"flex","justify-content-center","position-absolute","end-0","bottom-0","m-2",3,"click"],["icon","fa-regular fa-circle-play fs-2","severity","contrast","tooltipPosition","top",3,"pTooltip"],["data-aos","flip-left","data-aos-duration","1000",1,"Text-Third","fw-bolder","my-2","fw-bold"],["data-aos","flip-up","data-aos-duration","1000",1,"fw-bold"],[1,"flex","align-items-center"],[1,"LightBoxContainer",3,"click"],[1,"lightBoxContent",3,"click"],[3,"cuurentInstractor"]],template:function(i,s){i&1&&(l(0,"section",1)(1,"div",2)(2,"div",3)(3,"h2",4),d(4," \u0641\u0631\u064A\u0642 "),l(5,"span",5),d(6,"Summit"),c()(),l(7,"p",6),d(8," \u064A\u062F\u0639\u0645 \u0645\u0624\u0633\u0633\u0629 \u0625\u062F\u064A\u0648\u0641\u0631\u0633 \u0623\u0648\u0646\u0644\u0627\u064A\u0646 \u0641\u0631\u064A\u0642 \u0627\u0633\u062A\u062B\u0646\u0627\u0626\u064A \u064A\u0636\u0645 \u0623\u0643\u062B\u0631 \u0645\u0646 300 \u0645\u062F\u0631\u0633 \u0645\u062A\u0641\u0627\u0646\u060C \u0645\u0647\u062A\u0645\u0648\u0646 \u0628\u0627\u0644\u062A\u0639\u0644\u064A\u0645 \u0648\u0645\u0644\u062A\u0632\u0645\u064A\u0646 \u0628\u0646\u062C\u0627\u062D \u0637\u0644\u0627\u0628\u0646\u0627 \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0630\u0644\u0643\u060C \u064A\u062A\u0643\u0648\u0646 \u0641\u0631\u064A\u0642\u0646\u0627 \u0627\u0644\u0625\u062F\u0627\u0631\u064A \u0645\u0646 \u062D\u0648\u0627\u0644\u064A 30 \u0641\u0631\u062F\u0627 \u0645\u0646 \u0630\u0648\u064A \u0627\u0644\u062E\u0628\u0631\u0627\u062A \u0627\u0644\u0648\u0627\u0633\u0639\u0629 \u0641\u064A \u0645\u062C\u0627\u0644 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u060C \u064A\u0634\u0631\u0641\u0648\u0646 \u0639\u0644\u0649 \u0633\u064A\u0631 \u0627\u0644\u0639\u0645\u0644 \u0628\u0633\u0644\u0627\u0633\u0629 \u0648\u0643\u0641\u0627\u0621\u0629. \u064A\u0634\u0645\u0644 \u0647\u0630\u0627 \u0627\u0644\u0641\u0631\u064A\u0642 \u0631\u0624\u0633\u0627\u0621 \u0627\u0644\u0623\u0642\u0633\u0627\u0645\u060C \u0645\u0646\u0633\u0642\u064A \u0627\u0644\u0645\u0648\u0627\u062F\u060C \u0648\u0645\u062F\u064A\u0631\u0648 \u0627\u0644\u0645\u0631\u0627\u062D\u0644. \u0643\u0645\u0627 \u064A\u0636\u0645 \u0627\u0644\u0641\u0631\u064A\u0642 \u0645\u062C\u0645\u0648\u0639\u0629 \u0645\u062A\u0645\u064A\u0632\u0629 \u0645\u0646 \u0645\u0648\u0638\u0641\u064A \u0625\u062F\u062E\u0627\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A\u060C \u0645\u0645\u062B\u0644\u064A \u062E\u062F\u0645\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621\u060C \u0648\u0645\u062A\u062E\u0635\u0635\u064A \u0627\u0644\u062F\u0639\u0645 \u0627\u0644\u0641\u0646\u064A "),c()(),l(9,"div",7)(10,"owl-carousel-o",8),U(11,mt,2,1,"ng-container",null,Z),c()()()(),y(13,gt,3,1,"div",9)),i&2&&(a(10),f("options",s.customOptions),a(),q(s._Team.Team),a(2),j(13,s.isToggleLightBox?13:-1))},dependencies:[rt,st,nt,w,pt,at,ot,it,lt],styles:["p[_ngcontent-%COMP%]{text-wrap:balance}.text-main-headers[_ngcontent-%COMP%]{font-family:Cairo,sans-serif}.Text-Main[_ngcontent-%COMP%]{color:#0c7261}.Text-Secondary[_ngcontent-%COMP%]{color:#fde751}.Text-Third[_ngcontent-%COMP%]{color:#5e5c5c}.AR[_ngcontent-%COMP%]{direction:rtl}.text-shadow[_ngcontent-%COMP%]{text-shadow:1px 1px #0c7261}.Bg-Main[_ngcontent-%COMP%]{background-color:#0c7261;color:#fff}.Bg-Secondary[_ngcontent-%COMP%]{background-color:#fde751;color:#000}.Bg-Third[_ngcontent-%COMP%]{background-color:#5e5c5c;color:#000}.border-main[_ngcontent-%COMP%]{border-color:#0c7261}.border-secondary[_ngcontent-%COMP%]{border-color:#fde751}.owl__Image[_ngcontent-%COMP%]{width:140px}[_nghost-%COMP%]     .owl-carousel .owl-nav{display:flex;justify-content:space-between;position:absolute;top:10%;width:100%;transform:translateY(-50%)}[_nghost-%COMP%]     .owl-carousel .owl-nav .owl-prev, [_nghost-%COMP%]     .owl-carousel .owl-nav .owl-next{background-color:#5e5c5c;color:#fff;border:none;padding:10px 20px;border-radius:50%;cursor:pointer}[_nghost-%COMP%]     .owl-carousel .owl-nav .owl-prev:hover, [_nghost-%COMP%]     .owl-carousel .owl-nav .owl-next:hover{filter:brightness(110%)}[_nghost-%COMP%]     .owl-carousel .owl-nav .owl-prev{position:absolute;left:1px;transform:translateY(-100%)}[_nghost-%COMP%]     .owl-carousel .owl-nav .owl-next{position:absolute;right:10px;transform:translateY(-100%)}[_nghost-%COMP%]     .p-button.p-button-contrast, [_nghost-%COMP%]     .p-button-group.p-button-contrast>.p-button, [_nghost-%COMP%]     .p-splitbutton.p-button-contrast>.p-button, [_nghost-%COMP%]     .p-button.p-button-contrast:enabled:focus{border-radius:50%;width:50px;background-color:transparent!important;border-color:transparent!important;height:50px}"]});let n=u;return n})();export{Ft as HomeTeamComponent};
