"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4486],{4486:(P,C,r)=>{r.r(C),r.d(C,{TurmaPageModule:()=>y});var l=r(1368),d=r(6504),p=r(7048),t=r(2112),u=r(2992),n=r(4496),g=r(3476),f=r(2892),i=r(3524);function h(e,c){if(1&e&&(n.I0R(0,"ion-avatar",16),n.wR5(1,"ion-img",17),n.C$Y()),2&e){const a=n.GaO();n.yG2(),n.E7m("src","https://ui-avatars.com/api/?name="+a.gerarSVG(a.usuario.username))}}let M=(()=>{var e;class c{constructor(o,s,m,_){this.authService=o,this.usuarioService=s,this.router=m,this.menuCtrl=_,this.exibirMenu=!0,this.usuario=[]}ngOnInit(){this.objLocal=localStorage.getItem("usuario"),this.usuario=this.objLocal?JSON.parse(this.objLocal):[],console.log(this.usuario)}logout(){this.fecharMenu(),this.router.navigate(["/login"])}gerarSVG(o){return this.usuarioService.generateInitials(o)}fecharMenu(){this.menuCtrl.close()}}return(e=c).\u0275fac=function(o){return new(o||e)(n.GI1(g.A),n.GI1(i.e),n.GI1(u.E5),n.GI1(t.yX))},e.\u0275cmp=n.In1({type:e,selectors:[["app-side-menu-professor"]],decls:31,vars:2,consts:[["side","start","contentId","main-content"],["color","primary"],["size","3"],["style","width: 45px; height: 45px; margin: 5px;",4,"ngIf"],["size","9",2,"margin","auto"],[1,"ion-no-padding","ion-no-margin",2,"height","100%"],["mode","md","lines","none"],["mode","ios"],[1,"logout",3,"click"],["name","log-out"],["size","8",1,"ion-text-center"],[2,"opacity","0.5","font-size","12px"],["mode","md"],["slot","start"],["auto-hide","false"],["slot","icon-only","name","menu"],[2,"width","45px","height","45px","margin","5px"],[3,"src"]],template:function(o,s){1&o&&(n.I0R(0,"ion-menu",0)(1,"ion-header")(2,"ion-toolbar",1)(3,"ion-row")(4,"ion-col",2),n.yuY(5,h,2,1,"ion-avatar",3),n.C$Y(),n.I0R(6,"ion-col",4),n.OEk(7),n.C$Y()()()(),n.I0R(8,"ion-content",5)(9,"ion-list",6)(10,"ion-list-header",7)(11,"ion-label"),n.OEk(12,"Conta"),n.C$Y()(),n.I0R(13,"ion-item",8),n.qCj("click",function(){return s.logout()}),n.I0R(14,"ion-label"),n.OEk(15,"Sair"),n.C$Y(),n.wR5(16,"ion-icon",9),n.C$Y()()(),n.I0R(17,"ion-footer")(18,"ion-col",10)(19,"p",11),n.OEk(20,"Desenvolvido por Jo\xe3o Marins,"),n.wR5(21,"br"),n.OEk(22," Departamento de Tecnologia e Marketing do Col\xe9gio Anglo Tatu\xed."),n.C$Y()()()(),n.I0R(23,"ion-header",12)(24,"ion-toolbar")(25,"ion-buttons",13)(26,"ion-menu-toggle",14)(27,"ion-button"),n.wR5(28,"ion-icon",15),n.C$Y()()(),n.I0R(29,"ion-title"),n.OEk(30," Turmas "),n.C$Y()()()),2&o&&(n.yG2(5),n.E7m("ngIf",s.usuario.username),n.yG2(2),n.oRS(" Bem vindo, ",s.usuario.username," "))},dependencies:[l.u_,t.O7,t.sn,t.GS,t.Kk,t._i,t.eV,t.wB,t.Ko,t.Eh,t.Yb,t.QR,t.OC,t.zz,t.$C,t.WY,t.qo,t.tM,t.Md],styles:[".block[_ngcontent-%COMP%]{width:100%;height:300px;display:flex;align-items:center;justify-content:center}.turma[_ngcontent-%COMP%]{cursor:pointer}ion-modal[_ngcontent-%COMP%]{--height: auto}.select[_ngcontent-%COMP%]{border-radius:8px;padding-left:20px;background:#aaaaaa3a}ion-card[_ngcontent-%COMP%]:hover{transition:.5s;transform:scale(.95);animation:alternate 2s}.card-ensino-M[_ngcontent-%COMP%]:hover{box-shadow:3px 3px 0 3px #b10329a9}.card-ensino-FI[_ngcontent-%COMP%]:hover{box-shadow:3px 3px 0 3px #f3dc0dab}.card-ensino-FII[_ngcontent-%COMP%]:hover{box-shadow:3px 3px 0 3px #006effa4}ion-item[_ngcontent-%COMP%]{border-radius:8px;transition:background-color .3s,color .3s}ion-item[_ngcontent-%COMP%]:hover{background-color:#0000006b!important;color:#1970c0;cursor:pointer}ion-item[_ngcontent-%COMP%]{margin:10px;border-radius:8px;outline:0px solid rgba(25,111,192,.5215686275)}ion-list-header[_ngcontent-%COMP%]{font-size:18px}ion-item[_ngcontent-%COMP%]:hover{transition:.5s;outline:1px solid var(--ion-color-primary);color:#269bdf;font-weight:50px;cursor:pointer}ion-item[_ngcontent-%COMP%]:hover   ion-icon[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%]:hover   ion-label[_ngcontent-%COMP%]{transition:.3s;color:var(--ion-color-primary)}.spinner[_ngcontent-%COMP%]{position:absolute}.logout[_ngcontent-%COMP%]{color:#b10707ce}.logout[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], .logout[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{transition:.3s;color:#b10707ce}.logout[_ngcontent-%COMP%]:hover{outline:1px solid rgba(177,7,7,.8078431373);color:#b10707ce}.logout[_ngcontent-%COMP%]:hover   ion-icon[_ngcontent-%COMP%], .logout[_ngcontent-%COMP%]:hover   ion-label[_ngcontent-%COMP%]{transition:.3s;color:#b10707ce}"]}),c})();function O(e,c){1&e&&(n.I0R(0,"ion-col",15),n.wR5(1,"ion-spinner",16),n.C$Y())}function I(e,c){if(1&e){const a=n.KQA();n.I0R(0,"ion-card",19),n.qCj("click",function(){n.usT(a);const s=n.GaO().$implicit,m=n.GaO();return n.CGJ(m.accessTurma(s))}),n.I0R(1,"ion-card-header")(2,"ion-card-title"),n.OEk(3),n.C$Y(),n.S2Z(),n.I0R(4,"svg",20),n.wR5(5,"path",21),n.I0R(6,"defs")(7,"linearGradient",22),n.wR5(8,"stop",23)(9,"stop",24),n.C$Y()(),n.I0R(10,"defs")(11,"linearGradient",25),n.wR5(12,"stop",26)(13,"stop",27),n.C$Y()(),n.I0R(14,"defs")(15,"linearGradient",28),n.wR5(16,"stop",29)(17,"stop",30),n.C$Y()()()(),n.gRP(),n.I0R(18,"ion-card-content"),n.OEk(19),n.C$Y(),n.I0R(20,"ion-row",31)(21,"ion-col",32),n.wR5(22,"ion-icon",33),n.C$Y()()()}if(2&e){const a=n.GaO().$implicit,o=n.GaO();n.E7m("ngClass",o.defineColor(a.ensino)),n.yG2(3),n.cNF(a.nome_turma),n.yG2(2),n.E7m("ngStyle",o.getGradientStyle(a.ensino)),n.yG2(14),n.CAO(" ",a.ensino," - ",a.turno," ")}}function v(e,c){if(1&e&&(n.I0R(0,"ion-col",17),n.yuY(1,I,23,5,"ion-card",18),n.C$Y()),2&e){const a=n.GaO();n.yG2(),n.E7m("ngIf",!a.isLoading)}}const x=[{path:"",component:(()=>{var e;class c{constructor(o,s,m,_,b,T){this.loadingCtrl=o,this.authService=s,this.router=m,this.route=_,this.turmasService=b,this.usuarioService=T,this.turmas=[],this.usuario=[],this.turmasFilter=[],this.ensinoSelected="",this.isLoading=!0}ngOnInit(){localStorage.removeItem("turma"),this.objLocal=localStorage.getItem("usuario"),this.usuario=this.objLocal?JSON.parse(this.objLocal):[],console.log(this.usuario),this.listar_turmas(),this.filtrarTurmas()}filtrarTurmas(){this.turmasFilter=""===this.ensinoSelected?this.turmas:this.turmas.filter(o=>o.ensino===this.ensinoSelected)}listar_turmas(){setTimeout(()=>{this.isLoading=!1},200),this.turmasService.read().subscribe(o=>{this.isLoading=!0,console.log(o),this.turmas=o.turmas,this.turmasFilter=this.turmas,(!o.success||1!=o.success)&&(this.turmas=[])})}getGradientStyle(o){return"Ensino M\xe9dio"===o?{fill:"url(#paint0_linear_red)"}:"Ensino Fundamental II"===o?{fill:"url(#paint0_linear_blue)"}:"Ensino Fundamental I"===o?{fill:"url(#paint0_linear_yellow)"}:{fill:"#000000"}}defineColor(o){return"Ensino M\xe9dio"==o?"card-ensino-M":"Ensino Fundamental I"==o?"card-ensino-FI":"Ensino Fundamental II"==o?"card-ensino-FII":void 0}accessTurma(o){console.log(o),localStorage.setItem("turma",JSON.stringify(o))}logout(){this.router.navigate(["/login"])}gerarSVG(o){return this.usuarioService.generateInitials(o)}}return(e=c).\u0275fac=function(o){return new(o||e)(n.GI1(t.Kg),n.GI1(g.A),n.GI1(u.E5),n.GI1(u.gV),n.GI1(f.M),n.GI1(i.e))},e.\u0275cmp=n.In1({type:e,selectors:[["app-turma"]],decls:24,vars:4,consts:[["id","main-content","mode","md",3,"fullscreen"],[1,"main-content"],[1,"ion-justify-content-start","ion-text-center"],["size","11",1,"ion-margin"],[1,"ion-justify-content-center"],["size","12"],["interface","popover","placeholder","Ensino",1,"select",3,"ngModel","ngModelChange","ionChange"],["value",""],["value","Ensino Fundamental I"],["value","Ensino Fundamental II"],["value","Ensino M\xe9dio"],["class","ion-text-center ion-justify-content-center ion-align-items-center spinner_cont","size","12",4,"ngIf"],["size","10"],["wrap",""],["class","turma","size","12","size-md","6","size-lg","4",4,"ngFor","ngForOf"],["size","12",1,"ion-text-center","ion-justify-content-center","ion-align-items-center","spinner_cont"],["color","danger","name","dots",1,"spinner",2,"margin","0 auto"],["size","12","size-md","6","size-lg","4",1,"turma"],["routerLink","/turma-aulas",3,"ngClass","click",4,"ngIf"],["routerLink","/turma-aulas",3,"ngClass","click"],["width","38","height","100","viewBox","0 0 218 529","fill","none","xmlns","http://www.w3.org/2000/svg",2,"position","absolute","right","1.5em","top","0"],["d","M0 0H218V529L109 439L0 529V0Z",3,"ngStyle"],["id","paint0_linear_red","x1","218","y1","0","x2","1.09733e-05","y2","529","gradientUnits","userSpaceOnUse"],["stop-color","#741515"],["offset","1","stop-color","#C22929"],["id","paint0_linear_blue","x1","218","y1","0","x2","1.09733e-05","y2","529","gradientUnits","userSpaceOnUse"],["stop-color","#1C2BB6"],["offset","1","stop-color","#2871DF"],["id","paint0_linear_yellow","x1","218","y1","0","x2","1.09733e-05","y2","529","gradientUnits","userSpaceOnUse"],["stop-color","#EDAD07"],["offset","1","stop-color","#FFF61A"],[1,"ion-align-items-center","ion-justify-content-end"],["size","auto"],["name","caret-down-outline",1,"ion-margin","icon"]],template:function(o,s){1&o&&(n.wR5(0,"app-side-menu-professor"),n.I0R(1,"ion-content",0)(2,"div",1)(3,"ion-row",2)(4,"ion-col",3),n.SAx(5),n.I0R(6,"ion-row",4)(7,"ion-col",5)(8,"ion-select",6),n.iHE("ngModelChange",function(_){return n.kNx(s.ensinoSelected,_)||(s.ensinoSelected=_),_}),n.qCj("ionChange",function(){return s.filtrarTurmas()}),n.I0R(9,"ion-select-option",7),n.OEk(10,"Todos"),n.C$Y(),n.I0R(11,"ion-select-option",8),n.OEk(12,"Ensino Fundamental I"),n.C$Y(),n.I0R(13,"ion-select-option",9),n.OEk(14,"Ensino Fundamental II"),n.C$Y(),n.I0R(15,"ion-select-option",10),n.OEk(16,"Ensino M\xe9dio"),n.C$Y()()()(),n.k70(),n.C$Y()(),n.I0R(17,"ion-row"),n.yuY(18,O,2,0,"ion-col",11),n.I0R(19,"ion-col")(20,"ion-col",12)(21,"ion-grid")(22,"ion-row",13),n.yuY(23,v,2,1,"ion-col",14),n.C$Y()()()()()()()),2&o&&(n.yG2(),n.E7m("fullscreen",!0),n.yG2(7),n.OKB("ngModel",s.ensinoSelected),n.yG2(10),n.E7m("ngIf",s.isLoading),n.yG2(5),n.E7m("ngForOf",s.turmasFilter))},dependencies:[l.QF,l.ay,l.u_,l.Qt,d.ue,d._G,t.KC,t.Gg,t.YY,t.I7,t.Kk,t._i,t.YP,t.Ko,t.qo,t.Cy,t.gd,t.YA,t.IT,t.mY,u.ER,M],styles:[".turma[_ngcontent-%COMP%]{cursor:pointer}.select[_ngcontent-%COMP%]{border-radius:8px;padding-left:20px;background:#aaaaaa3a}ion-card[_ngcontent-%COMP%]:hover{transition:.5s;transform:scale(.95);animation:alternate 2s}.card-ensino-M[_ngcontent-%COMP%]:hover{box-shadow:3px 3px 0 3px #b10329a9}.card-ensino-FI[_ngcontent-%COMP%]:hover{box-shadow:3px 3px 0 3px #f3dc0dab}.card-ensino-FII[_ngcontent-%COMP%]:hover{box-shadow:3px 3px 0 3px #006effa4}ion-item[_ngcontent-%COMP%]{border-radius:8px;transition:background-color .3s,color .3s}ion-item[_ngcontent-%COMP%]:hover{background-color:#0000006b!important;color:#1970c0;cursor:pointer}ion-item[_ngcontent-%COMP%]{margin:10px;border-radius:8px;outline:0px solid rgba(25,111,192,.5215686275)}ion-list-header[_ngcontent-%COMP%]{font-size:18px}ion-item[_ngcontent-%COMP%]:hover{transition:.5s;outline:1px solid var(--ion-color-primary);color:#269bdf;font-weight:50px;cursor:pointer}ion-item[_ngcontent-%COMP%]:hover   ion-icon[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%]:hover   ion-label[_ngcontent-%COMP%]{transition:.3s;color:var(--ion-color-primary)}.spinner[_ngcontent-%COMP%]{position:absolute}.logout[_ngcontent-%COMP%]{color:#b10707ce}.logout[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], .logout[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{transition:.3s;color:#b10707ce}.logout[_ngcontent-%COMP%]:hover{outline:1px solid rgba(177,7,7,.8078431373);color:#b10707ce}.logout[_ngcontent-%COMP%]:hover   ion-icon[_ngcontent-%COMP%], .logout[_ngcontent-%COMP%]:hover   ion-label[_ngcontent-%COMP%]{transition:.3s;color:#b10707ce}"]}),c})()}];let E=(()=>{var e;class c{}return(e=c).\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.a4G({type:e}),e.\u0275inj=n.s3X({imports:[u.qQ.forChild(x),u.qQ]}),c})(),y=(()=>{var e;class c{}return(e=c).\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.a4G({type:e}),e.\u0275inj=n.s3X({providers:[f.M,i.e],imports:[l.MD,d.y,t.wZ,E,p.SU]}),c})()},2892:(P,C,r)=>{r.d(C,{M:()=>u});var l=r(6716),d=r(9212),p=r(4496),t=r(7048);let u=(()=>{var n;class g{constructor(i){this.httpClient=i,this.API=l.O.baseApiUrl,this.turmas=[]}create(i){return this.httpClient.post(this.API+"turma/create_turma.php",i)}read(){return this.httpClient.get(this.API+"turma/read_turma.php").pipe((0,d.y)(i=>{console.log(i),this.turmas=i}))}readOne(i){return this.httpClient.post(this.API+"turma/readOne_turma.php",i)}}return(n=g).\u0275fac=function(i){return new(i||n)(p.CoB(t.KK))},n.\u0275prov=p.wxM({token:n,factory:n.\u0275fac,providedIn:"root"}),g})()},3524:(P,C,r)=>{r.d(C,{e:()=>u});var l=r(6716),d=r(9212),p=r(4496),t=r(7048);let u=(()=>{var n;class g{constructor(i){this.httpClient=i,this.API=l.O.baseApiUrl}create(i){return this.httpClient.post(this.API+"usuario/create_usuario.php",i)}read(){return this.httpClient.get(this.API+"usuario/read_usuario.php").pipe((0,d.y)(i=>{console.log(i)}))}readProf(){return this.httpClient.get(this.API+"usuario/read_prof_usuario.php")}update(i){return this.httpClient.put(this.API+"usuario/update_usuario.php",i)}delete(i){return this.httpClient.delete(this.API+`usuario/delete_usuario.php?id_usuario=${i}`)}changePassword(i){return this.httpClient.put(this.API+"usuario/changePassword_usuario.php",i)}generateInitials(i){const h=i.split(" ");return 1===h.length?h[0].charAt(0).toUpperCase():(h[0].charAt(0)+h[h.length-1].charAt(0)).toUpperCase()}}return(n=g).\u0275fac=function(i){return new(i||n)(p.CoB(t.KK))},n.\u0275prov=p.wxM({token:n,factory:n.\u0275fac,providedIn:"root"}),g})()}}]);