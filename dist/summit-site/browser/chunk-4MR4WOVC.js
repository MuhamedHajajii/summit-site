import{x as v}from"./chunk-GMVGKQPA.js";import{$ as s,Ab as d,Ca as g,Fb as y,Ia as a,Q as r,S as o,_ as p,kb as l,lb as u,mb as m}from"./chunk-AIY2YFS2.js";import{a as h,b as f}from"./chunk-YHOLSLLF.js";var A={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},oe=f(h({},A),{"[class.ng-submitted]":"isSubmitted"});var _=new o("CallSetDisabledState",{providedIn:"root",factory:()=>c}),c="always";var M=new o("");var C=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=s({type:e}),e.\u0275inj=r({});let n=e;return n})();var V=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:_,useValue:t.callSetDisabledState??c}]}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=s({type:e}),e.\u0275inj=r({imports:[C]});let n=e;return n})(),D=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:M,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:_,useValue:t.callSetDisabledState??c}]}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=s({type:e}),e.\u0275inj=r({imports:[C]});let n=e;return n})();var ce=(()=>{let e=class e{constructor(t){this.http=t,this.formData={name:"",email:"",mobile:"",pdfFile:null},this.scriptURL="https://script.google.com/macros/s/AKfycbxcRYPEVDDm2IquAi2PVZtLexW75N60ZfM2RUXZlKpqSkmm6oRTJaUHYAwlkXNJSXaDKw/exec"}submitForm(){let t=new FormData;t.append("name",this.formData.name),t.append("email",this.formData.email),t.append("mobile",this.formData.mobile),this.formData.pdfFile&&t.append("pdfFile",this.formData.pdfFile,this.formData.pdfFile.name),this.http.post(this.scriptURL,t).subscribe(i=>{console.log("Form submission successful:",i),alert("Thanks for contacting us! We will contact you soon.")},i=>{console.error("Error submitting form:",i),alert("An error occurred. Please try again later.")})}onFileSelected(t){let i=t.target;i.files&&(this.formData.pdfFile=i.files[0])}};e.\u0275fac=function(i){return new(i||e)(a(v))},e.\u0275cmp=p({type:e,selectors:[["app-joinusform"]],standalone:!0,features:[y],decls:8,vars:0,consts:[[1,"text-center"],["src",g`https://docs.google.com/forms/d/e/1FAIpQLSeSRpMbxqiwV6wWotoxYzhxzMg0xkXg6gA7oNKaiBWYmHZ-2w/viewform?embedded=true`,"width","640","height","1146","frameborder","0","marginheight","0","marginwidth","0"]],template:function(i,E){i&1&&(l(0,"h3"),d(1,"Using Angular to Submit Data to Google Sheets"),u(),m(2,"br")(3,"hr")(4,"br"),l(5,"div",0)(6,"iframe",1),d(7,"Loading\u2026"),u()())},dependencies:[D,V],styles:[".form_container[_ngcontent-%COMP%]{margin-top:90px;margin-bottom:50px;min-height:100vh}iframe[_ngcontent-%COMP%]{width:100%;text-align:center;margin:auto}"]});let n=e;return n})();export{ce as JoinusformComponent};