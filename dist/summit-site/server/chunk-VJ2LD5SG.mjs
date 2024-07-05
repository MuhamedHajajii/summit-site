import './polyfills.server.mjs';
import{a as V,b as z}from"./chunk-LIFPNNG5.mjs";import"./chunk-IDUBEATG.mjs";import"./chunk-5KLHBRCP.mjs";import{Da as F,Y as A,e as L,ya as E}from"./chunk-DDH5ZC66.mjs";import{Ab as r,Bb as a,Cb as s,Gb as O,Mb as C,Na as M,Nb as d,Ua as c,Va as _,Vb as m,Xb as S,Yb as T,_ as b,_b as w,ac as B,ia as g,ja as p,lb as P,rb as u,ua as v,vb as k,wb as y,xb as I,yb as f,zb as x}from"./chunk-PAQJOJRS.mjs";import{h}from"./chunk-VVCT4QZE.mjs";var j=e=>({AR:e});function N(e,o){if(e&1&&(r(0,"li",16),m(1),a()),e&2){let n=o.$implicit;c(),S(" ",n," ")}}function D(e,o){if(e&1){let n=O();r(0,"div",3)(1,"div",7),C("click",function(){let i=g(n).$implicit,l=d();return p(l.toggleLightBox(i))}),r(2,"div",8)(3,"div",9)(4,"div",10),s(5,"img",11),a()(),r(6,"div",12),s(7,"img",13),a()()(),r(8,"div",14)(9,"p",15),m(10),a(),r(11,"ul"),f(12,N,2,1,"li",16,y),a()()()}if(e&2){let n=o.$implicit,t=o.$index;u("ngClass",B(5,j,t%2!==0)),c(5),u("src",n.ImageUrl,M)("alt",n.Instractor_Name),c(5),T(" ",n.Instractor_Name," - ",n.Instractor_Job," "),c(2),x(n.Instractor_Info)}}function R(e,o){if(e&1){let n=O();r(0,"div",17),C("click",function(){g(n);let i=d();return p(i.toggleLightBox())}),r(1,"div",18),C("click",function(){g(n);let i=d();return p(i.toggleLightBox())}),s(2,"app-videos",19),a()()}if(e&2){let n=d();c(2),u("cuurentInstractor",n.cuurentInstractor)}}var Z=(()=>{let o=class o{constructor(t,i,l){this._Team=t,this.document=i,this.platformId=l,this.isLightBox=!1}ngOnInit(){F(this.platformId)&&(this.document.readyState!=="loading"?this.loadAOS():this.document.addEventListener("DOMContentLoaded",()=>this.loadAOS()))}loadAOS(){return h(this,null,function*(){let{default:t}=yield import("./chunk-BRKGCAII.mjs");t.init(),t.refresh()})}toggleLightBox(t){this.isLightBox=!this.isLightBox,this.cuurentInstractor=t}stopProp(t){t.stopPropagation()}};o.\u0275fac=function(i){return new(i||o)(_(z),_(L),_(v))},o.\u0275cmp=b({type:o,selectors:[["app-ourteamblank"]],standalone:!0,features:[w],decls:11,vars:1,consts:[[1,"Header","Text-Secondary","fw-bolder","fs-1","d-flex","justify-content-center","align-items-center","position-relative"],["data-aos","zoom-out","data-aos-duration","1000",1,"mb-0","AR"],[1,"container","p-lg-5"],[1,"row","p-lg-5",3,"ngClass"],["href","https://docs.google.com/forms/d/e/1FAIpQLSduDpkgMLTgSDVpNT4edhKESL7Orn5jdw7HqCLg3yQ7nnpEbA/viewform","target","_blank",1,"position-fixed","bottom-0","end-0","me-3","mb-3","btn-main","px-4","border-0"],[1,"mx-2","fa-solid","fa-chalkboard-user"],[1,"LightBoxContainer"],["role","button","tabindex","0","data-aos","fade-up","data-aos-duration","1000",1,"col-12","col-lg-6","p-5",3,"click"],[1,"flip-content","h-100"],[1,"p-5","section__Container"],[1,"section__OneImage--Container","Front","rounded-5"],["loading","lazy",1,"w-100","h-100","rounded-5","object-fit-fill",3,"src","alt"],[1,"Bg-Main","Back","rounded-4","d-flex","justify-content-center","align-items-center"],["role","button","tabindex","0","width","150","height","150","src","assets/play-video.svg","alt","play-video",1,"position-absolute","top-50","start-50","translate-middle","z-3","play"],[1,"col-12","col-lg-6","AR","p-5"],[1,"h1","Text-Main","fw-medium","instractor__Name","mb-5"],[1,"mb-2","fw-bold","AR"],[1,"LightBoxContainer",3,"click"],[1,"lightBoxContent",3,"click"],[3,"cuurentInstractor"]],template:function(i,l){i&1&&(r(0,"section")(1,"div",0)(2,"p",1),m(3,"\u0641\u0631\u064A\u0642\u0646\u0627"),a()(),r(4,"div",2),f(5,D,14,7,"div",3,I),a(),r(7,"a",4),s(8,"i",5),m(9," \u0627\u0646\u0636\u0645 \u0625\u0644\u064A\u0646\u0627 "),a()(),P(10,R,3,1,"div",6)),i&2&&(c(5),x(l._Team.Team),c(5),k(10,l.isLightBox?10:-1))},dependencies:[E,A,V],styles:['.text-main-headers[_ngcontent-%COMP%]{font-family:Cairo,sans-serif}.Text-Main[_ngcontent-%COMP%]{color:#0c7261}.Text-Secondary[_ngcontent-%COMP%]{color:#fde751}.Text-Third[_ngcontent-%COMP%]{color:#5e5c5c}.AR[_ngcontent-%COMP%]{direction:rtl}.text-shadow[_ngcontent-%COMP%]{text-shadow:1px 1px #0c7261}.Bg-Main[_ngcontent-%COMP%]{background-color:#0c7261;color:#fff}.Bg-Secondary[_ngcontent-%COMP%]{background-color:#fde751;color:#000}.Bg-Third[_ngcontent-%COMP%]{background-color:#5e5c5c;color:#000}.border-main[_ngcontent-%COMP%]{border-color:#0c7261}.border-secondary[_ngcontent-%COMP%]{border-color:#fde751}.Header[_ngcontent-%COMP%]{padding-block:100px;min-height:40vh;background-image:url(/assets/About/backgrounds/about-backgroud.png);background-size:cover;position:relative;z-index:2}.Header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-top:100px}.Header[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;opacity:.75;background-color:#0c7261;z-index:-1}.section__Container[_ngcontent-%COMP%]{height:600px}.section__Container[_ngcontent-%COMP%]   .section__OneImage--Container[_ngcontent-%COMP%]{transition:.3s All;position:relative}.section__Container[_ngcontent-%COMP%]   .section__OneImage--Container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;bottom:10px;left:10px;z-index:2}.section__Container[_ngcontent-%COMP%]   .section__OneImage--Container[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:10px 10px -10px -10px;background-color:#0c7261;border-radius:2rem;z-index:1}@media screen and (max-width: 992px){.section__Container[_ngcontent-%COMP%]{height:300px}}.instractor__Name[_ngcontent-%COMP%]{position:relative}.instractor__Name[_ngcontent-%COMP%]:after{content:"";margin-top:1.5rem;position:absolute;height:3px;width:34%;background-color:#0c7261;right:0;top:100%}.col-12[_ngcontent-%COMP%]{perspective:1000px}.col-12[_ngcontent-%COMP%]:hover   .flip-content[_ngcontent-%COMP%]{transform:rotateY(180deg)}.col-12[_ngcontent-%COMP%]   .flip-content[_ngcontent-%COMP%]{position:relative;transform-style:preserve-3d;transition:.5s all;backface-visibility:hidden}.col-12[_ngcontent-%COMP%]   .Front[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%]   .Back[_ngcontent-%COMP%]{position:absolute;inset:0;height:100%;backface-visibility:hidden}.col-12[_ngcontent-%COMP%]   .Back[_ngcontent-%COMP%]{transform:rotateY(180deg);transform-style:preserve-3d}.col-12[_ngcontent-%COMP%]   .Back[_ngcontent-%COMP%]   .Back__content[_ngcontent-%COMP%]{transform:translateZ(90px)}']});let e=o;return e})();export{Z as OurteamblankComponent};
