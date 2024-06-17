import './polyfills.server.mjs';
import{a as R,d as I}from"./chunk-SXJSLUOS.mjs";import{a as H}from"./chunk-FF7RMRJH.mjs";import{f as T,g as F,k as V,l as v,m as j,n as U,o as D}from"./chunk-MPDL46MU.mjs";import{s as N}from"./chunk-FXJL4ZPU.mjs";import{$a as C,Aa as y,Da as O,Db as f,Eb as L,Ga as h,Ha as b,Ma as P,P as w,Z as p,_ as S,ga as c,ha as d,hc as B,ib as e,jb as t,kb as i,ob as E,pb as s,ub as x,va as M,vb as A,wb as _,yb as u}from"./chunk-VHJONPQK.mjs";var K=["navbarUL"],X=["NavBar"],Z=()=>({exact:!0}),Q=(()=>{let o=class o{constructor(m,r){this._Renderer2=m,this.router=r}CloseNavBar(){this.navbarUL.nativeElement.classList.contains("show")&&this._Renderer2.removeClass(this.navbarUL.nativeElement,"show")}onWindowScroll(){this.router.url==="/"&&(scrollY>=500?this._Renderer2.addClass(this.NavBar.nativeElement,"Bg-Main"):this._Renderer2.removeClass(this.NavBar.nativeElement,"Bg-Main"))}};o.\u0275fac=function(r){return new(r||o)(b(P),b(V))},o.\u0275cmp=p({type:o,selectors:[["app-blank-navbar"]],viewQuery:function(r,a){if(r&1&&(x(K,5),x(X,7)),r&2){let l;A(l=_())&&(a.navbarUL=l.first),A(l=_())&&(a.NavBar=l.first)}},hostBindings:function(r,a){r&1&&s("scroll",function(){return a.onWindowScroll()},!1,O)},standalone:!0,features:[f],decls:37,vars:5,consts:[["NavBar",""],["navbarUL",""],[1,"navbar","navbar-expand-lg","fixed-top"],[1,"container"],[1,"d-flex","justify-content-center","align-items-center"],[1,"Logo","me-2"],["loading","lazy","alt","Summit-Logo",1,"w-100","rounded-circle",3,"src","width","height"],["routerLink","",1,"navbar-brand","Font-Secondary-Cairo","text-white","fw-bold","fs-1"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapsibleNavId","aria-controls","collapsibleNavId","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","d-lg-none","border-white"],[1,"navbar-toggler-icon"],["id","collapsibleNavId",1,"collapse","navbar-collapse"],[1,"navbar-nav","ms-auto","mt-4","mt-lg-0","flex-column","text-end","text-lg-center","flex-lg-row-reverse","align-items-end","px-3","px-lg-0"],[1,"mb-3","mb-lg-0","nav-item","mx-1","mx-xl-2",3,"click"],["id","main","routerLink","","routerLinkActive","active main",1,"nav-link","text-white","p-2",3,"routerLinkActiveOptions"],[1,"fa-solid","fa-house","ms-1"],["routerLink","about","routerLinkActive","active",1,"nav-link","text-white","p-2"],[1,"pi","pi-building-columns","ms-1"],["routerLink","courses","routerLinkActive","active",1,"nav-link","AR","text-white","p-2"],[1,"pi","pi-book","ms-1"],["routerLink","vision","routerLinkActive","active",1,"nav-link","AR","text-white","p-2"],[1,"fa-solid","fa-tag","ms-1"],["routerLink","ourteam","routerLinkActive","active",1,"AR","nav-link","text-white","p-2"],[1,"pi","pi-users","ms-1"],["routerLink","contact","routerLinkActive","active",1,"AR","nav-link","text-white","p-2"],[1,"fa-solid","fa-headphones-simple","ms-1"]],template:function(r,a){if(r&1){let l=E();e(0,"nav",2,0)(2,"div",3)(3,"div",4)(4,"span",5),i(5,"img",6),t(),e(6,"a",7),u(7,"SUMMIT"),t()(),e(8,"button",8),i(9,"span",9),t(),e(10,"div",10,1)(12,"ul",11)(13,"li",12),s("click",function(){return c(l),d(a.CloseNavBar())}),e(14,"a",13),u(15," \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 "),i(16,"i",14),t()(),e(17,"li",12),s("click",function(){return c(l),d(a.CloseNavBar())}),e(18,"a",15),u(19,"\u0639\u0646 \u0627\u0644\u0634\u0631\u0643\u0629 "),i(20,"i",16),t()(),e(21,"li",12),s("click",function(){return c(l),d(a.CloseNavBar())}),e(22,"a",17),i(23,"i",18),u(24," \u0643\u0648\u0631\u0633\u0627\u062A Summit "),t()(),e(25,"li",12),s("click",function(){return c(l),d(a.CloseNavBar())}),e(26,"a",19),i(27,"i",20),u(28," \u0641\u0644\u0633\u0641\u062A\u0646\u0627 "),t()(),e(29,"li",12),s("click",function(){return c(l),d(a.CloseNavBar())}),e(30,"a",21),i(31,"i",22),u(32," \u0641\u0631\u064A\u0642\u0646\u0627 "),t()(),e(33,"li",12),s("click",function(){return c(l),d(a.CloseNavBar())}),e(34,"a",23),i(35,"i",24),u(36," \u0627\u062A\u0635\u0644 \u0628\u0646\u0627 "),t()()()()()()}r&2&&(h(5),C("src","assets/Summit-Logo/navbar__Logo.jpg",y)("width",60)("height",60),h(9),C("routerLinkActiveOptions",L(4,Z)))},dependencies:[v,j],styles:[".text-main-headers[_ngcontent-%COMP%]{font-family:Cairo,sans-serif}.Text-Main[_ngcontent-%COMP%]{color:#345fb4}.Text-Secondary[_ngcontent-%COMP%]{color:#fde651}.Text-Third[_ngcontent-%COMP%]{color:#5e5c5c}.AR[_ngcontent-%COMP%]{direction:rtl}.text-shadow[_ngcontent-%COMP%]{text-shadow:1px 1px #345fb4}.Bg-Main[_ngcontent-%COMP%]{background-color:#345fb4;color:#fff}.Bg-Secondary[_ngcontent-%COMP%]{background-color:#fde651;color:#000}.Bg-Third[_ngcontent-%COMP%]{background-color:#5e5c5c;color:#000}.border-main[_ngcontent-%COMP%]{border-color:#345fb4}.border-secondary[_ngcontent-%COMP%]{border-color:#fde651}.Logo[_ngcontent-%COMP%]{display:inline-block;width:60px;height:60px}.nav-link[_ngcontent-%COMP%]{transition:.3s all;transform-origin:right center;font-weight:400;border:1px solid transparent;border-radius:100vh}.nav-link[_ngcontent-%COMP%]:hover{transform:scale(1.1);font-weight:500;border:1px solid white}.nav-link.active[_ngcontent-%COMP%]{font-weight:600;text-shadow:2px 2px #558abb;border:1px solid white;border-radius:100vh}*[_ngcontent-%COMP%]{transition:.3s all}nav[_ngcontent-%COMP%]:not(:has(.nav-link.main.active)){background-color:#345fb4!important}#collapsibleNavId.show[_ngcontent-%COMP%]{background-color:#345fb4;border-radius:15px}"]});let n=o;return n})();var z=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=p({type:o,selectors:[["app-footer"]],standalone:!0,features:[f],decls:97,vars:0,consts:[[1,"footer"],[1,"container-fluid"],[1,"row","p-5","pb-3","justify-content-center"],[1,"col-12","col-xl-3"],[1,"text-center","mb-3"],["loading","lazy","src","assets/Summit-Logo/logo2.jpg","alt","logo",1,"rounded-4"],[1,"text-white","text-end","AR"],[1,"col-12","col-xl-5","second"],[1,"text-white","d-flex","justify-content-evenly","align-items-center","align-items-lg-start","flex-column","flex-lg-row"],[1,"fs-4","Text-Secondary","fw-bold"],[1,"list-unstyled"],["routerLink","courses",1,"mb-3"],[1,"fa-solid","pe-3","fa-chevron-left"],["routerLink","contact",1,"mb-3"],["routerLink","",1,"mb-2"],["routerLink","about",1,"mb-2"],["routerLink","ourteam",1,"mb-2"],["routerLink","courses",1,"mb-2"],["routerLink","contact",1,"mb-2"],[1,"col-12","col-lg-3","third"],[1,"text-white","AR"],[1,"list-unstyled","d-flex","justify-content-start","gap-3"],[1,"social-icons-container","bg-white","Text-Main","fs-3"],["href","https://www.facebook.com/profile.php?id=61559931065136&_rdc=1&_rdr","target","_blank","aria-label","Visit our Facebook Profile"],[1,"fa-brands","fa-facebook"],["href","https://wa.me/+966543271082","target","_blank","aria-label","Conect us on whatsapp"],[1,"fa-brands","fa-whatsapp"],["href","https://www.instagram.com/summitonline2024/","target","_blank","aria-label","find us on instagram"],[1,"fa-brands","fa-instagram"],[1,"list-unstyled","third"],[1,"mb-3","d-flex","justify-content-start","align-items-start"],[1,"fa-solid","fa-location-dot","fs-2","ms-3"],[1,"d-flex","justify-content-center","align-items-center","flex-column"],[1,"mb-1","text-decoration-none","text-white"],[1,"fa-regular","fa-envelope","fs-2","ms-3"],["href","mailto:summit.school2024@gmail.com","target","_blank",1,"mb-1","text-decoration-none","text-white"],[1,"list-unstyled","p-0","m-0"],[1,"row","mb-2","text-center","g-3"],[1,"col-2"],[1,"fa-solid","fa-headphones-simple","fs-2","ms-3"],[1,"col-10"],["href","https://wa.me/+201552751988","target","_blank",1,"mb-2","text-decoration-none","text-white"],[1,"fa-brands","fa-whatsapp","fs-2","ms-3"],["href","https://wa.me/+966582009746","target","_blank",1,"mb-2","text-decoration-none","text-white"],["href","https://wa.me/+966543271082","target","_blank",1,"mb-2","text-decoration-none","text-white"],[1,"bg-dark","text-center","text-white","py-1","mb-0"]],template:function(r,a){r&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),i(5,"img",5),t(),e(6,"p",6),u(7," \u0641\u064A \u0639\u0635\u0631 \u0627\u0644\u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0631\u0642\u0645\u064A\u060C \u062A\u0628\u0631\u0632 \u0645\u062F\u0631\u0633\u062A\u0646\u0627 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629 \u0643\u0648\u0627\u062D\u062F\u0629 \u0645\u0646 \u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062A \u0627\u0644\u0631\u0627\u0626\u062F\u0629 \u0641\u064A \u062A\u0642\u062F\u064A\u0645 \u0627\u0644\u0645\u0646\u0647\u062C \u0627\u0644\u0645\u0635\u0631\u064A \u0644\u0644\u0637\u0644\u0627\u0628 \u0627\u0644\u0645\u0633\u062C\u0644\u064A\u0646 \u0641\u064A \u0627\u0644\u0633\u0641\u0627\u0631\u0629 \u0627\u0644\u0645\u0635\u0631\u064A\u0629 \u0628\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629 \u0648\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629. \u0646\u062D\u0646 \u0645\u0644\u062A\u0632\u0645\u0648\u0646 \u0628\u062A\u0642\u062F\u064A\u0645 \u062A\u0639\u0644\u064A\u0645 \u0639\u0627\u0644\u064A \u0627\u0644\u062C\u0648\u062F\u0629 \u064A\u062A\u0645\u0627\u0634\u0649 \u0645\u0639 \u0645\u062A\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0645\u0646\u0647\u062C \u0627\u0644\u0645\u0635\u0631\u064A \u0627\u0644\u0631\u0633\u0645\u064A\u060C \u0645\u0639 \u062A\u0648\u0641\u064A\u0631 \u0628\u064A\u0626\u0629 \u062A\u0639\u0644\u064A\u0645\u064A\u0629 \u0645\u062A\u0642\u062F\u0645\u0629 \u0648\u0645\u062A\u0643\u0627\u0645\u0644\u0629 \u062A\u062A\u064A\u062D \u0644\u0644\u0637\u0644\u0627\u0628 \u062A\u062D\u0642\u064A\u0642 \u0623\u0642\u0635\u0649 \u0625\u0645\u0643\u0627\u0646\u0627\u062A\u0647\u0645 \u0627\u0644\u0623\u0643\u0627\u062F\u064A\u0645\u064A\u0629. "),t()(),e(8,"div",7)(9,"div",8)(10,"div")(11,"p",9),u(12,"\u0635\u0641\u062D\u0627\u062A \u0647\u0627\u0645\u0629"),t(),e(13,"ul",10)(14,"li",11),i(15,"i",12),e(16,"span"),u(17," \u0643\u0648\u0631\u0633\u0627\u062A \u0645\u062A\u0646\u0648\u0639\u0629 \u0644\u0644\u0623\u0637\u0641\u0627\u0644 "),t()(),e(18,"li",11),i(19,"i",12),e(20,"span"),u(21," \u0628\u0631\u0627\u0645\u062C \u062A\u062F\u0631\u064A\u0628 \u0627\u0644\u0645\u0639\u0644\u0645\u064A\u0646 "),t()(),e(22,"li",13),i(23,"i",12),e(24,"span"),u(25," \u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 "),t()()()(),e(26,"div")(27,"p",9),u(28,"\u0631\u0648\u0627\u0628\u0637 \u0633\u0631\u064A\u0639\u0629"),t(),e(29,"ul",10)(30,"li",14),i(31,"i",12),e(32,"span"),u(33," \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 "),t()(),e(34,"li",15),i(35,"i",12),e(36,"span"),u(37," \u0639\u0646 \u0627\u0644\u0634\u0631\u0643\u0629 "),t()(),e(38,"li",16),i(39,"i",12),e(40,"span"),u(41," \u0641\u0631\u064A\u0642\u0646\u0627 "),t()(),e(42,"li",17),i(43,"i",12),e(44,"span"),u(45," \u0643\u0648\u0631\u0633\u0627\u062A Summit "),t()(),e(46,"li",18),i(47,"i",12),e(48,"span"),u(49," \u0627\u062A\u0635\u0644 \u0628\u0646\u0627 "),t()()()()()(),e(50,"div",19)(51,"div",20)(52,"ul",21)(53,"li",22)(54,"a",23),i(55,"i",24),t()(),e(56,"li",22)(57,"a",25),i(58,"i",26),t()(),e(59,"li",22)(60,"a",27),i(61,"i",28),t()()(),e(62,"ul",29)(63,"li",30)(64,"div"),i(65,"i",31),t(),e(66,"div",32)(67,"span",33),u(68,"\u0627\u0644\u0631\u064A\u0627\u0636 \u0627\u0644\u0645\u0645\u0644\u0643\u0647 \u0627\u0644\u0639\u0631\u0628\u064A\u0647 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0647"),t()()(),e(69,"li",30)(70,"div"),i(71,"i",34),t(),e(72,"div",32)(73,"a",35),u(74,"summit.school2024@gmail.com"),t()()(),e(75,"li",30)(76,"ul",36)(77,"li",37)(78,"div",38),i(79,"i",39),t(),e(80,"div",40)(81,"a",41),u(82,"201552751988+"),t()()(),e(83,"li",37)(84,"div",38),i(85,"i",42),t(),e(86,"div",40)(87,"a",43),u(88,"966582009746+"),t()()(),e(89,"li",37)(90,"div",38),i(91,"i",42),t(),e(92,"div",40)(93,"a",44),u(94,"966543271082+"),t()()()()()()()()()(),e(95,"p",45),u(96," \xA9 2024 Summit - All rights reserved "),t()())},dependencies:[v],styles:[".text-main-headers[_ngcontent-%COMP%]{font-family:Cairo,sans-serif}.Text-Main[_ngcontent-%COMP%]{color:#345fb4}.Text-Secondary[_ngcontent-%COMP%]{color:#fde651}.Text-Third[_ngcontent-%COMP%]{color:#5e5c5c}.AR[_ngcontent-%COMP%]{direction:rtl}.text-shadow[_ngcontent-%COMP%]{text-shadow:1px 1px #345fb4}.Bg-Main[_ngcontent-%COMP%]{background-color:#345fb4;color:#fff}.Bg-Secondary[_ngcontent-%COMP%]{background-color:#fde651;color:#000}.Bg-Third[_ngcontent-%COMP%]{background-color:#5e5c5c;color:#000}.border-main[_ngcontent-%COMP%]{border-color:#345fb4}.border-secondary[_ngcontent-%COMP%]{border-color:#fde651}img[_ngcontent-%COMP%]{width:150px;margin:auto}.footer[_ngcontent-%COMP%]{background-color:#171f50}.second[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{transition:.3s all;cursor:pointer}.second[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{transform:translate(-10px);text-shadow:1px 1px black;color:#fde651}ul.third[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{transition:.3s all}ul.third[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{transform:translate(-10px);text-shadow:1px 1px black;color:#fde651!important}.social-icons-container[_ngcontent-%COMP%]{transition:.3s}.social-icons-container[_ngcontent-%COMP%]:hover{background-color:#fde651!important}"]});let n=o;return n})();var W=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=S({type:o}),o.\u0275inj=w({imports:[N]});let n=o;return n})();var q=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=p({type:o,selectors:[["app-root"]],standalone:!0,features:[f],decls:6,vars:0,template:function(r,a){r&1&&(e(0,"header"),i(1,"app-blank-navbar"),t(),e(2,"main"),i(3,"app-blank-layout"),t(),e(4,"footer"),i(5,"app-footer"),t())},dependencies:[W,Q,z,H],styles:["[_nghost-%COMP%], Html[_ngcontent-%COMP%], Body[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100vh;justify-content:space-between}"]});let n=o;return n})();var G=[{path:"",loadComponent:()=>import("./chunk-BGFMYUEF.mjs").then(n=>n.BlankLayoutComponent),children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"",loadComponent:()=>import("./chunk-HYAORBYU.mjs").then(n=>n.HomeComponent),title:"SUMMIT Online School - \u0633\u0627\u0645\u064A\u062A \u0627\u0648\u0646 \u0644\u0627\u064A\u0646 \u0633\u0643\u0648\u0644"},{path:"about",loadComponent:()=>import("./chunk-X7M7NXYF.mjs").then(n=>n.AboutComponent),title:"SUMMIT - \u0639\u0646 \u0627\u0644\u0634\u0631\u0643\u0629"},{path:"courses",loadComponent:()=>import("./chunk-CTZRXMQY.mjs").then(n=>n.CoursesComponent),title:"SUMMIT - \u0643\u0648\u0631\u0633\u0627\u062A"},{path:"vision",loadComponent:()=>import("./chunk-TRZ5U36W.mjs").then(n=>n.OurVisionComponent),title:"SUMMIT - \u0641\u0644\u0633\u0641\u062A\u0646\u0627"},{path:"ourteam",loadComponent:()=>import("./chunk-GOKYD63Z.mjs").then(n=>n.OurteamComponent),title:"SUMMIT - \u0641\u0631\u064A\u0642\u0646\u0627"},{path:"contact",loadComponent:()=>import("./chunk-4BOJ2QJ7.mjs").then(n=>n.ContactComponent),title:"SUMMIT - \u0627\u062A\u0635\u0644 \u0628\u0646\u0627"}]},{path:"**",loadComponent:()=>import("./chunk-P3JVX6ME.mjs").then(n=>n.NotFoundComponent)}];var te={scrollPositionRestoration:"top",anchorScrolling:"enabled"},ne=D(te),Y={providers:[U(G,ne),F(),[R()],{provide:M,useValue:{disableImageSizeWarning:!0,disableImageLazyLoadWarning:!0}}]};var ie={providers:[I()]},J=B(Y,ie);var oe=()=>T(q,J),Ne=oe;export{Ne as a};
