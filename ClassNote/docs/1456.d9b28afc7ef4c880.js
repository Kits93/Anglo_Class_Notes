"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1456],{1456:(b,p,a)=>{a.r(p),a.d(p,{LoginPageModule:()=>x});var f=a(1368),e=a(4716),c=a(7048),r=a(2112),m=a(422),d=a(1528),o=a(4496),h=a(6716);let u=(()=>{var n;class s{constructor(t){this.httpClient=t,this.API=h.O.baseApiUrl}autorizarJwt(t){localStorage.setItem("token",t)}loginState(){let t=localStorage.getItem("token");return this.httpClient.post(this.API+"login/verificarLogin.php",{token:t})}loginVerify(t){return console.log(t),this.httpClient.post(this.API+"login/login.php",t)}}return(n=s).\u0275fac=function(t){return new(t||n)(o.CoB(c.KK))},n.\u0275prov=o.wxM({token:n,factory:n.\u0275fac,providedIn:"root"}),s})();const v=[{path:"",component:(()=>{var n;class s{constructor(t,i,g,C){this.router=t,this.http=i,this.toastController=g,this.loginService=C}ngOnInit(){this.createFormAdd()}get username(){return this.UserForm.get("username")}createFormAdd(){this.UserForm=new e.WC({username:new e.Ku("",e.AQ.compose([e.AQ.maxLength(70),e.AQ.minLength(3),e.AQ.required])),password:new e.Ku("",e.AQ.compose([e.AQ.required]))})}validarLogin(t){this.loginService.loginVerify(t).subscribe(i=>{console.log(i),"1"==i.success?(this.loginService.autorizarJwt(i.token),this.presentToast("ok"),this.router.navigate(["../turma"])):(this.presentToast("error"),console.log("Formul\xe1rio inv\xe1lido!"))})}presentToast(t){var i=this;return(0,d.c)(function*(){let g;g="ok"==t?yield i.toastController.create({message:`Dados corretos! bem vindo, ${i.UserForm.value.username}`,duration:2500,color:"success",position:"bottom"}):yield i.toastController.create({message:"Falha no login, tente novamente.",duration:2500,color:"danger",position:"bottom"}),yield g.present(),console.log(t)})()}}return(n=s).\u0275fac=function(t){return new(t||n)(o.GI1(m.E5),o.GI1(c.KK),o.GI1(r.Gq),o.GI1(u))},n.\u0275cmp=o.In1({type:n,selectors:[["app-login"]],decls:44,vars:2,consts:[["rel","preconnect","href","https://fonts.googleapis.com"],["rel","preconnect","href","https://fonts.gstatic.com","crossorigin",""],["href","https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap","rel","stylesheet"],["name","viewport","content","width=device-width, initial-scale=1.0"],["mode","ios",1,"ion-padding",3,"fullscreen"],[1,"center-content"],["id","bubble1","width","316","height","316","viewBox","0 0 316 316","fill","none","xmlns","http://www.w3.org/2000/svg"],["cx","117","cy","117","r","117","fill","#1970C0","opacity","0.5"],["id","bubble2","width","234","height","234","viewBox","0 0 234 234","fill","none","xmlns","http://www.w3.org/2000/svg"],["cx","117","cy","117","r","117","fill","#1970C0","opacity","0.2"],["id","bubble3","width","187","height","187","viewBox","0 0 237 237","fill","none","xmlns","http://www.w3.org/2000/svg"],["cx","117","cy","117","r","117","fill","#1970C0","opacity","0.8"],["id","bubble4","width","234","height","234","viewBox","0 0 234 234","fill","none","xmlns","http://www.w3.org/2000/svg"],["cx","117","cy","117","r","117","fill","#1970C0","opacity","0.3"],["id","bubble5","width","234","height","234","viewBox","0 0 234 234","fill","none","xmlns","http://www.w3.org/2000/svg"],["cx","117","cy","117","r","117","fill","#1970C0","opacity","0.6"],[1,"ion-justify-content-center","ion-padding"],[1,"ion-justify-content-center"],["size-sm","8","size","12",1,"ion-text-center"],["src","../../../assets/img/logo-anglo-tatui.png","alt","Logo","width","70%",2,"max-width","225px"],["size-sm","8","size-md","6","size","12",1,"ion-text-center","ion-padding","form-col"],[3,"formGroup","ngSubmit"],["FormLogin","ngForm"],["lines","none"],["position","floating",2,"color","#4D4D4D","opacity","1"],["formControlName","username","ngModel","","name","username","id","username","type","text","required",""],["formControlName","password","ngModel","","name","password","id","password","type","password","required",""],["expand","block","type","submit","fill","outline",1,"ion-margin-top",2,"font-family","Josefin Sans","font-weight","bold","opacity","1"],[2,"cursor","pointer"],[1,"footer"],["size","8",1,"ion-text-center","ion-padding"],[2,"opacity","0.5","font-size","12px","margin-top","40px"]],template:function(t,i){1&t&&(o.wR5(0,"link",0)(1,"link",1)(2,"link",2)(3,"meta",3),o.I0R(4,"ion-content",4)(5,"div",5),o.S2Z(),o.I0R(6,"svg",6),o.wR5(7,"circle",7),o.C$Y(),o.I0R(8,"svg",8),o.wR5(9,"circle",9),o.C$Y(),o.I0R(10,"svg",10),o.wR5(11,"circle",11),o.C$Y(),o.I0R(12,"svg",12),o.wR5(13,"circle",13),o.C$Y(),o.I0R(14,"svg",14),o.wR5(15,"circle",15),o.C$Y(),o.gRP(),o.I0R(16,"ion-grid",16)(17,"ion-row",17)(18,"ion-col",18),o.wR5(19,"img",19),o.C$Y()(),o.I0R(20,"ion-row",17)(21,"ion-col",20)(22,"form",21,22),o.qCj("ngSubmit",function(){return i.validarLogin(i.UserForm.value)}),o.I0R(24,"ion-item",23)(25,"ion-label",24),o.OEk(26,"Usu\xe1rio"),o.C$Y(),o.wR5(27,"ion-input",25),o.C$Y(),o.I0R(28,"ion-item",23)(29,"ion-label",24),o.OEk(30,"Senha"),o.C$Y(),o.wR5(31,"ion-input",26),o.C$Y(),o.I0R(32,"ion-button",27),o.OEk(33,"Entrar"),o.C$Y()(),o.I0R(34,"ion-row")(35,"ion-col")(36,"span"),o.OEk(37,"Esqueceu sua senha? "),o.C$Y(),o.I0R(38,"a",28),o.OEk(39,"Clique aqui!"),o.C$Y()()()(),o.I0R(40,"ion-row",29)(41,"ion-col",30)(42,"p",31),o.OEk(43,"Desenvolvido pelo Departamento de Tecnologia e Marketing do Col\xe9gio Anglo Tatu\xed."),o.C$Y()()()()()()()),2&t&&(o.yG2(4),o.E7m("fullscreen",!0),o.yG2(18),o.E7m("formGroup",i.UserForm))},dependencies:[e.sz,e.ue,e.u,e.eJ,e.uW,e.Wo,r.sn,r.Kk,r._i,r.YP,r.A5,r.Yb,r.QR,r.qo,r.qG],styles:[".center-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%}.footer[_ngcontent-%COMP%]{position:absolute;bottom:0;align-items:center;justify-content:center;text-align:center}.form-col[_ngcontent-%COMP%]{background-color:#fff;padding:20px;border-radius:10px;outline:1px solid rgba(25,111,192,.3490196078);opacity:.8}#bubble1[_ngcontent-%COMP%]{transform-origin:bottom;position:fixed;animation:_ngcontent-%COMP%_moving 8s infinite alternate}@keyframes _ngcontent-%COMP%_moving{0%{transform:translate(65px,40px)}to{transform:translate(-65px,-180px)}}#bubble2[_ngcontent-%COMP%]{transform-origin:bottom;position:fixed;animation:_ngcontent-%COMP%_moving2 8s infinite alternate}@keyframes _ngcontent-%COMP%_moving2{0%{transform:translate(150px,-130)}to{transform:translate(-250px,-230px)}}#bubble3[_ngcontent-%COMP%]{transform-origin:bottom;position:fixed;animation:_ngcontent-%COMP%_moving3 8s infinite alternate}@keyframes _ngcontent-%COMP%_moving3{0%{transform:translate(40px,-60px)}to{transform:translate(130px,-260px)}}#bubble4[_ngcontent-%COMP%]{transform-origin:bottom;position:fixed;animation:_ngcontent-%COMP%_moving4 8s infinite alternate}@keyframes _ngcontent-%COMP%_moving4{0%{transform:translate(-110px,-50px)}0%{transform:translate(30px,-120px)}to{transform:translate(170px,-190px)}}#bubble5[_ngcontent-%COMP%]{transform-origin:bottom;position:fixed;animation:_ngcontent-%COMP%_moving5 8s infinite alternate}@keyframes _ngcontent-%COMP%_moving5{0%{transform:translate(-10px,-150px)}to{transform:translate(190px,20px)}}"]}),s})()}];let w=(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.a4G({type:n}),n.\u0275inj=o.s3X({imports:[m.qQ.forChild(v),m.qQ]}),s})(),x=(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.a4G({type:n}),n.\u0275inj=o.s3X({providers:[u],imports:[f.MD,e.y,e.sl,r.wZ,w,c.SU]}),s})()}}]);