webpackJsonp([2],{0:function(n,l,t){n.exports=t("cDNt")},cDNt:function(n,l,t){"use strict";function u(n){return j._36(0,[(n()(),j._17(0,0,null,null,13,"div",[["class","container"]],null,null,null,null,null)),(n()(),j._35(-1,null,["\n  "])),(n()(),j._17(2,0,null,null,1,"h1",[["class","text-primary"]],null,null,null,null,null)),(n()(),j._35(-1,null,["Welcome to the scrumbled word game!!!"])),(n()(),j._35(-1,null,["\n  "])),(n()(),j._17(5,0,null,null,4,"h3",[],null,null,null,null,null)),(n()(),j._35(-1,null,["\n    "])),(n()(),j._17(7,0,null,null,1,"small",[["class","text-muted"]],null,null,null,null,null)),(n()(),j._35(-1,null,["Here you lear English while having fun"])),(n()(),j._35(-1,null,["\n  "])),(n()(),j._35(-1,null,["\n  "])),(n()(),j._17(11,0,null,null,1,"button",[["class","btn btn-dark btn-lg"],["type","button"]],null,[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==e.play()&&u}return u},null,null)),(n()(),j._35(-1,null,["Play"])),(n()(),j._35(-1,null,["\n"])),(n()(),j._35(-1,null,["\n"]))],null,null)}function e(n){return j._36(0,[(n()(),j._17(0,0,null,null,1,"app-home",[],null,null,null,u,K)),j._15(1,114688,null,0,A,[R.k],null,null)],function(n,l){n(l,1,0)},null)}function r(n){return j._36(0,[(n()(),j._17(0,0,null,null,1,"span",[["class","badge badge-pill badge-dark scrambled-letter"]],null,null,null,null,null)),(n()(),j._35(1,null,["",""]))],null,function(n,l){n(l,1,0,l.context.$implicit)})}function o(n){return j._36(0,[(n()(),j._17(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),j._35(1,null,["",""]))],null,function(n,l){n(l,1,0,l.component.scrambledWord.original)})}function i(n){return j._36(0,[(n()(),j._17(0,0,null,null,10,"div",[],null,null,null,null,null)),(n()(),j._35(-1,null,["\n  "])),(n()(),j._17(2,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),j._35(-1,null,["\n    "])),(n()(),j._11(16777216,null,null,1,null,r)),j._15(5,802816,null,0,V.i,[j.Z,j.W,j.y],{ngForOf:[0,"ngForOf"]},null),(n()(),j._35(-1,null,["\n  "])),(n()(),j._35(-1,null,["\n  "])),(n()(),j._11(16777216,null,null,1,null,o)),j._15(9,16384,null,0,V.j,[j.Z,j.W],{ngIf:[0,"ngIf"]},null),(n()(),j._35(-1,null,["\n"]))],function(n,l){var t=l.component;n(l,5,0,t.scrambledWord.scrambled.split("")),n(l,9,0,t.isDevMode)},null)}function s(n){return j._36(0,[(n()(),j._11(16777216,null,null,1,null,i)),j._15(1,16384,null,0,V.j,[j.Z,j.W],{ngIf:[0,"ngIf"]},null),(n()(),j._35(-1,null,["\n"]))],function(n,l){n(l,1,0,l.component.scrambledWord)},null)}function a(n){return j._36(0,[(n()(),j._17(0,0,null,null,1,"app-scrambled-word",[],null,null,null,s,Q)),j._15(1,114688,null,0,z,[],null,null)],function(n,l){n(l,1,0)},null)}function c(n){return j._36(0,[(n()(),j._17(0,0,null,null,1,"h2",[["class","text-primary"]],null,null,null,null,null)),(n()(),j._35(-1,null,["Can you guess this word?"]))],null,null)}function p(n){return j._36(0,[(n()(),j._17(0,0,null,null,1,"app-challenge-question",[],null,null,null,c,X)),j._15(1,114688,null,0,J,[],null,null)],function(n,l){n(l,1,0)},null)}function _(n){return j._36(0,[j._33(402653184,1,{guessInput:0}),(n()(),j._17(1,0,[[1,0],["guessInput",1]],null,5,"input",[["class","form-group"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup.enter"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var u=!0,e=n.component;if("input"===l){u=!1!==j._29(n,2)._handleInput(t.target.value)&&u}if("blur"===l){u=!1!==j._29(n,2).onTouched()&&u}if("compositionstart"===l){u=!1!==j._29(n,2)._compositionStart()&&u}if("compositionend"===l){u=!1!==j._29(n,2)._compositionEnd(t.target.value)&&u}if("ngModelChange"===l){u=!1!==(e.guessWord=t)&&u}if("keyup.enter"===l){u=!1!==e.guess()&&u}return u},null,null)),j._15(2,16384,null,0,tn.b,[j.N,j.n,[2,tn.a]],null,null),j._32(1024,null,tn.d,function(n){return[n]},[tn.b]),j._15(4,671744,null,0,tn.g,[[8,null],[8,null],[8,null],[2,tn.d]],{model:[0,"model"]},{update:"ngModelChange"}),j._32(2048,null,tn.e,null,[tn.g]),j._15(6,16384,null,0,tn.f,[tn.e],null,null),(n()(),j._35(-1,null,["\n"])),(n()(),j._17(8,0,null,null,1,"button",[["class","btn btn-dark"]],null,[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==e.guess()&&u}return u},null,null)),(n()(),j._35(-1,null,["Try out!"]))],function(n,l){n(l,4,0,l.component.guessWord)},function(n,l){n(l,1,0,j._29(l,6).ngClassUntouched,j._29(l,6).ngClassTouched,j._29(l,6).ngClassPristine,j._29(l,6).ngClassDirty,j._29(l,6).ngClassValid,j._29(l,6).ngClassInvalid,j._29(l,6).ngClassPending)})}function f(n){return j._36(0,[(n()(),j._17(0,0,null,null,1,"app-guess-input",[],null,null,null,_,en)),j._15(1,114688,null,0,ln,[],null,null)],function(n,l){n(l,1,0)},null)}function d(n){return j._36(0,[(n()(),j._17(0,0,null,null,3,"span",[["class","badge badge-primary"]],null,null,null,null,null)),(n()(),j._35(-1,null,["\n  "])),(n()(),j._17(2,0,null,null,0,"i",[["class","fa fa-star "]],null,null,null,null,null)),(n()(),j._35(3,null,[" ",""])),(n()(),j._35(-1,null,[" "]))],null,function(n,l){n(l,3,0,l.component.hits)})}function h(n){return j._36(0,[(n()(),j._17(0,0,null,null,1,"app-hits-badge",[],null,null,null,d,fn)),j._15(1,114688,null,0,pn,[cn],null,null)],function(n,l){n(l,1,0)},null)}function g(n){return j._36(0,[(n()(),j._17(0,0,null,null,3,"span",[["class","badge badge-primary"]],null,null,null,null,null)),(n()(),j._35(-1,null,["\n  "])),(n()(),j._17(2,0,null,null,0,"i",[["class","fa fa-shield "]],null,null,null,null,null)),(n()(),j._35(3,null,[" ",""])),(n()(),j._35(-1,null,["\n"]))],null,function(n,l){n(l,3,0,l.component.level)})}function m(n){return j._36(0,[(n()(),j._17(0,0,null,null,1,"app-level-badge",[],null,null,null,g,mn)),j._15(1,114688,null,0,hn,[cn],null,null)],function(n,l){n(l,1,0)},null)}function y(n){return j._36(0,[(n()(),j._17(0,0,null,null,3,"span",[["class","badge badge-primary"]],null,null,null,null,null)),(n()(),j._35(-1,null,["\n  "])),(n()(),j._17(2,0,null,null,0,"i",[["class","fa fa-list "]],null,null,null,null,null)),(n()(),j._35(3,null,[" ",""])),(n()(),j._35(-1,null,[" "]))],null,function(n,l){n(l,3,0,l.component.wordListName)})}function v(n){return j._36(0,[(n()(),j._17(0,0,null,null,1,"app-word-list-badge",[],null,null,null,y,bn)),j._15(1,114688,null,0,vn,[cn],null,null)],function(n,l){n(l,1,0)},null)}function w(n){return j._36(0,[(n()(),j._17(0,0,null,null,4,"p",[],null,null,null,null,null)),(n()(),j._35(-1,null,["\n    "])),(n()(),j._17(2,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),j._35(3,null,[""," : "])),(n()(),j._35(4,null,[" ",""]))],null,function(n,l){n(l,3,0,l.context.$implicit.name),n(l,4,0,l.context.$implicit.value)})}function b(n){return j._36(0,[(n()(),j._17(0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),j._35(-1,null,["\n  "])),(n()(),j._11(16777216,null,null,1,null,w)),j._15(3,802816,null,0,V.i,[j.Z,j.W,j.y],{ngForOf:[0,"ngForOf"]},null),(n()(),j._35(-1,null,["\n"]))],function(n,l){n(l,3,0,l.component.result.statistics)},null)}function k(n){return j._36(0,[(n()(),j._17(0,0,null,null,1,"h1",[["class","text-primary"]],null,null,null,null,null)),(n()(),j._35(1,null,["",""])),(n()(),j._35(-1,null,["\n"])),(n()(),j._17(3,0,null,null,1,"h3",[["class","text-muted"]],null,null,null,null,null)),(n()(),j._35(4,null,["",""])),(n()(),j._35(-1,null,["\n"])),(n()(),j._11(16777216,null,null,1,null,b)),j._15(7,16384,null,0,V.j,[j.Z,j.W],{ngIf:[0,"ngIf"]},null),(n()(),j._35(-1,null,["\n\n"])),(n()(),j._17(9,0,null,null,3,"button",[["class","btn btn-primary"]],null,[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==e.newGame()&&u}return u},null,null)),(n()(),j._35(-1,null,["\n  "])),(n()(),j._17(11,0,null,null,0,"i",[["class","fa fa-play"]],null,null,null,null,null)),(n()(),j._35(-1,null,[" New Game"])),(n()(),j._35(-1,null,["\n"])),(n()(),j._17(14,0,null,null,3,"button",[["class","btn btn-outline-danger"]],null,[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==e.reset()&&u}return u},null,null)),(n()(),j._35(-1,null,["\n  "])),(n()(),j._17(16,0,null,null,0,"i",[["class","fa fa-refresh"]],null,null,null,null,null)),(n()(),j._35(-1,null,[" Reset "])),(n()(),j._35(-1,null,["\n"]))],function(n,l){n(l,7,0,l.component.result.statistics)},function(n,l){var t=l.component;n(l,1,0,t.result.message.main),n(l,4,0,t.result.message.second)})}function L(n){return j._36(0,[(n()(),j._17(0,0,null,null,1,"app-score-result",[],null,null,null,k,In)),j._15(1,114688,null,0,Cn,[Wn],null,null)],function(n,l){n(l,1,0)},null)}function W(n){return j._36(0,[(n()(),j._17(0,0,null,null,2,"app-scrambled-word",[],null,null,null,s,Q)),j._15(1,114688,null,0,z,[],{scrambledWord:[0,"scrambledWord"]},null),(n()(),j._35(-1,null,["\n    "]))],function(n,l){n(l,1,0,l.component.gameEngine.currentMove)},null)}function C(n){return j._36(0,[(n()(),j._17(0,0,null,null,24,null,null,null,null,null,null,null)),(n()(),j._35(-1,null,["\n    "])),(n()(),j._17(2,0,null,null,1,"app-challenge-question",[],null,null,null,c,X)),j._15(3,114688,null,0,J,[],null,null),(n()(),j._35(-1,null,["\n    "])),(n()(),j._11(16777216,null,null,1,null,W)),j._15(6,16384,null,0,V.j,[j.Z,j.W],{ngIf:[0,"ngIf"]},null),(n()(),j._35(-1,null,["\n    "])),(n()(),j._17(8,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),j._35(-1,null,["\n    "])),(n()(),j._17(10,0,null,null,1,"app-guess-input",[],null,[[null,"onGuessWord"]],function(n,l,t){var u=!0,e=n.component;if("onGuessWord"===l){u=!1!==e.guess(t)&&u}return u},_,en)),j._15(11,114688,null,0,ln,[],null,{onGuessWord:"onGuessWord"}),(n()(),j._35(-1,null,["\n    "])),(n()(),j._17(13,0,null,null,10,"div",[["class","scoreContainer"]],null,null,null,null,null)),(n()(),j._35(-1,null,["\n      "])),(n()(),j._17(15,0,null,null,1,"app-hits-badge",[],null,null,null,d,fn)),j._15(16,114688,null,0,pn,[cn],null,null),(n()(),j._35(-1,null,["\n      "])),(n()(),j._17(18,0,null,null,1,"app-level-badge",[],null,null,null,g,mn)),j._15(19,114688,null,0,hn,[cn],null,null),(n()(),j._35(-1,null,["\n      "])),(n()(),j._17(21,0,null,null,1,"app-word-list-badge",[],null,null,null,y,bn)),j._15(22,114688,null,0,vn,[cn],null,null),(n()(),j._35(-1,null,["\n    "])),(n()(),j._35(-1,null,["\n  "]))],function(n,l){var t=l.component;n(l,3,0),n(l,6,0,t.gameEngine.currentMove),n(l,11,0),n(l,16,0),n(l,19,0),n(l,22,0)},null)}function G(n){return j._36(0,[(n()(),j._35(-1,null,["\n    "])),(n()(),j._17(1,0,null,null,1,"app-score-result",[],null,[[null,"newGameClick"]],function(n,l,t){var u=!0,e=n.component;if("newGameClick"===l){u=!1!==e.startGame()&&u}return u},k,In)),j._15(2,114688,null,0,Cn,[Wn],{result:[0,"result"]},{newGameClick:"newGameClick"}),(n()(),j._35(-1,null,["\n  "]))],function(n,l){n(l,2,0,l.component.engine.result)},null)}function I(n){return j._36(0,[(n()(),j._17(0,0,null,null,6,"div",[["class","container"]],null,null,null,null,null)),(n()(),j._35(-1,null,["\n  "])),(n()(),j._11(16777216,null,null,1,null,C)),j._15(3,16384,null,0,V.j,[j.Z,j.W],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),j._35(-1,null,["\n  "])),(n()(),j._11(0,[["resultTemplate",2]],null,0,null,G)),(n()(),j._35(-1,null,["\n\n\n"])),(n()(),j._35(-1,null,["\n"]))],function(n,l){n(l,3,0,!l.component.engine.result,j._29(l,5))},null)}function S(n){return j._36(0,[(n()(),j._17(0,0,null,null,1,"app-game",[],null,null,null,I,An)),j._15(1,114688,null,0,Dn,[Tn],null,null)],function(n,l){n(l,1,0)},null)}function P(n){return j._36(0,[(n()(),j._17(0,0,null,null,27,"nav",[["class","navbar navbar-expand-lg navbar-dark bg-primary"]],null,null,null,null,null)),(n()(),j._35(-1,null,["\n  "])),(n()(),j._17(2,0,null,null,3,"a",[["class","navbar-brand"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0;if("click"===l){u=!1!==j._29(n,3).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u}return u},null,null)),j._15(3,671744,null,0,R.l,[R.k,R.a,V.g],{routerLink:[0,"routerLink"]},null),j._30(4,1),(n()(),j._35(-1,null,["Scrambled Word Game"])),(n()(),j._35(-1,null,["\n  "])),(n()(),j._17(7,0,null,null,3,"button",[["aria-controls","navbarColor01"],["aria-expanded","false"],["aria-label","Toggle navigation"],["class","navbar-toggler"],["data-target","#navbarColor01"],["data-toggle","collapse"],["type","button"]],null,[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==e.toggleMenu()&&u}return u},null,null)),(n()(),j._35(-1,null,["\n    "])),(n()(),j._17(9,0,null,null,0,"span",[["class","navbar-toggler-icon"]],null,null,null,null,null)),(n()(),j._35(-1,null,["\n  "])),(n()(),j._35(-1,null,["\n\n  "])),(n()(),j._17(12,0,null,null,14,"div",[["class","collapse navbar-collapse"],["id","navbarColor01"]],null,null,null,null,null)),j._15(13,278528,null,0,V.h,[j.y,j.z,j.n,j.M],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),j._31(14,{collapse:0}),(n()(),j._35(-1,null,["\n    "])),(n()(),j._17(16,0,null,null,9,"ul",[["class","navbar-nav mr-auto"]],null,null,null,null,null)),(n()(),j._35(-1,null,["\n      "])),(n()(),j._17(18,0,null,null,6,"li",[["class","nav-item"]],null,null,null,null,null)),(n()(),j._35(-1,null,["\n        "])),(n()(),j._17(20,0,null,null,3,"a",[["class","nav-link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==j._29(n,21).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u}if("click"===l){u=!1!==e.toggleMenu()&&u}return u},null,null)),j._15(21,671744,null,0,R.l,[R.k,R.a,V.g],{routerLink:[0,"routerLink"]},null),j._30(22,1),(n()(),j._35(-1,null,["Play"])),(n()(),j._35(-1,null,["\n      "])),(n()(),j._35(-1,null,["\n    "])),(n()(),j._35(-1,null,["\n  "])),(n()(),j._35(-1,null,["\n"])),(n()(),j._35(-1,null,["\n"]))],function(n,l){var t=l.component;n(l,3,0,n(l,4,0,"/home"));n(l,13,0,"collapse navbar-collapse",n(l,14,0,!t.toogleMenu)),n(l,21,0,n(l,22,0,"/play"))},function(n,l){n(l,2,0,j._29(l,3).target,j._29(l,3).href),n(l,20,0,j._29(l,21).target,j._29(l,21).href)})}function M(n){return j._36(0,[(n()(),j._17(0,0,null,null,1,"app-nav-bar",[],null,null,null,P,Vn)),j._15(1,114688,null,0,Zn,[],null,null)],function(n,l){n(l,1,0)},null)}function N(n){return j._36(0,[(n()(),j._17(0,0,null,null,1,"app-nav-bar",[],null,null,null,P,Vn)),j._15(1,114688,null,0,Zn,[],null,null),(n()(),j._35(-1,null,["\n"])),(n()(),j._17(3,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),j._15(4,212992,null,0,R.n,[R.b,j.Z,j.k,[8,null],j.i],null,null),(n()(),j._35(-1,null,["\n"]))],function(n,l){n(l,1,0),n(l,4,0)},null)}function O(n){return j._36(0,[(n()(),j._17(0,0,null,null,1,"app-root",[],null,null,null,N,Hn)),j._15(1,49152,null,0,T,[],null,null)],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var x,j=t("/oeL"),B={production:!0},E=function(){function n(){}return n}(),T=function(){function n(){this.title="app"}return n}(),D=[""],R=t("BkNc"),A=function(){function n(n){this.router=n}return n.prototype.ngOnInit=function(){},n.prototype.play=function(){this.router.navigate(["play"])},n.ctorParameters=function(){return[{type:R.k}]},n}(),F=[D],K=j._14({encapsulation:0,styles:F,data:{}}),q=j._12("app-home",A,e,{},{},[]),Z=[""],U=[""],V=t("qbdv"),z=function(){function n(){}return n.prototype.ngOnInit=function(){},n.ctorParameters=function(){return[]},n}(),H=[U],Q=j._14({encapsulation:0,styles:H,data:{}}),Y=(j._12("app-scrambled-word",z,a,{scrambledWord:"scrambledWord"},{},[]),[""]),J=function(){function n(){}return n.prototype.ngOnInit=function(){},n.ctorParameters=function(){return[]},n}(),$=[Y],X=j._14({encapsulation:0,styles:$,data:{}}),nn=(j._12("app-challenge-question",J,p,{},{},[]),[""]),ln=function(){function n(){this.onGuessWord=new j.p,this.guessWord=""}return n.prototype.ngOnInit=function(){this.guessInput.nativeElement.focus()},n.prototype.guess=function(){this.onGuessWord.emit(this.guessWord),this.guessWord="",this.guessInput.nativeElement.focus()},n.ctorParameters=function(){return[]},n}(),tn=t("bm2B"),un=[nn],en=j._14({encapsulation:0,styles:un,data:{}}),rn=(j._12("app-guess-input",ln,f,{},{onGuessWord:"onGuessWord"},[]),[""]),on=function(){function n(){this.statistics=[]}return n}(),sn=t("TO51");!function(n){n[n.Won=0]="Won",n[n.Lost=1]="Lost",n[n.NoMoreWordList=2]="NoMoreWordList"}(x||(x={}));var an,cn=function(){function n(){this.hits=0,this.startLevel=1,this.currentLevel=1,this.wordListName="",this.hitsChanged=new sn.a,this.levelChanged=new sn.a,this.wordListChanged=new sn.a,this.messageWin="You Win, Congratulations!|Try again soon, there is always wordlists being added.",this.messageLost="You Lose, Try again|Practice leads to perfection.",this.messageTryAgainSoon="No more wordlists available|Try again soon, there is always wordlists being added."}return n.prototype.start=function(n){this.startLevel=n,this.currentLevel=n,this.levelChanged.next(this.currentLevel)},n.prototype.addHit=function(){this.hits++,this.hitsChanged.next(this.hits)},n.prototype.levelUp=function(){this.currentLevel++,this.levelChanged.next(this.currentLevel)},n.prototype.setListName=function(n){this.wordListName=n,this.wordListChanged.next(this.wordListName)},n.prototype.generateResults=function(n){var l=new on;return l.type=n,l.statistics.push({name:"Hits",value:this.hits}),l.statistics.push({name:"Level up",value:this.currentLevel-this.startLevel}),n==x.Won?l.message={main:this.messageWin.split("|")[0],second:this.messageWin.split("|")[1]}:n==x.Lost?l.message={main:this.messageLost.split("|")[0],second:this.messageLost.split("|")[1]}:n==x.NoMoreWordList&&(l.message={main:this.messageTryAgainSoon.split("|")[0],second:this.messageTryAgainSoon.split("|")[1]},l.statistics=[]),l},n.prototype.getListName=function(){return this.wordListName},n.prototype.getLevel=function(){return this.currentLevel},n}(),pn=function(){function n(n){this.scoreService=n}return n.prototype.ngOnInit=function(){var n=this;this.hits=0,this.scoreService.hitsChanged.subscribe(function(l){return n.hits=l})},n.ctorParameters=function(){return[{type:cn}]},n}(),_n=[rn],fn=j._14({encapsulation:0,styles:_n,data:{}}),dn=(j._12("app-hits-badge",pn,h,{},{},[]),[""]),hn=function(){function n(n){var l=this;this.scoreService=n,this.level=this.scoreService.getLevel(),this.scoreService.levelChanged.subscribe(function(n){return l.level=n})}return n.prototype.ngOnInit=function(){},n.ctorParameters=function(){return[{type:cn}]},n}(),gn=[dn],mn=j._14({encapsulation:0,styles:gn,data:{}}),yn=(j._12("app-level-badge",hn,m,{},{},[]),[""]),vn=function(){function n(n){var l=this;this.scoreService=n,this.wordListName=this.scoreService.getListName(),this.scoreService.wordListChanged.subscribe(function(n){l.wordListName=n})}return n.prototype.ngOnInit=function(){},n.ctorParameters=function(){return[{type:cn}]},n}(),wn=[yn],bn=j._14({encapsulation:0,styles:wn,data:{}}),kn=(j._12("app-word-list-badge",vn,v,{},{},[]),[""]),Ln=function(){function n(){this.name="Player 1",this.level=1,this.pointsRecord=0,this.completedLists=[]}return n}(),Wn=function(){function n(){this.playerStorageKey="scrambled-game-player"}return n.prototype.getPlayer=function(){return this.loadPlayer(),this.player},n.prototype.save=function(n){this.player=n,this.savePlayer()},n.prototype.resetUser=function(){this.player=new Ln,this.savePlayer()},n.prototype.savePlayer=function(){localStorage.setItem(this.playerStorageKey,JSON.stringify(this.player))},n.prototype.loadPlayer=function(){var n=localStorage.getItem(this.playerStorageKey);n?this.player=Object.assign(new Ln,JSON.parse(n)):(this.player=new Ln,this.savePlayer())},n}(),Cn=function(){function n(n){this.playerService=n,this.newGameClick=new j.p}return n.prototype.ngOnInit=function(){},n.prototype.newGame=function(){this.newGameClick.emit()},n.prototype.reset=function(){this.playerService.resetUser(),this.newGameClick.emit()},n.ctorParameters=function(){return[{type:Wn}]},n}(),Gn=[kn],In=j._14({encapsulation:0,styles:Gn,data:{}}),Sn=(j._12("app-score-result",Cn,L,{result:"result"},{newGameClick:"newGameClick"},[]),function(){function n(){}return n.prototype.scramble=function(n){return n.split("").reverse().join("")},n}()),Pn=function(){function n(){}return n.prototype.scramble=function(n){return n.split("").sort().join("")},n}(),Mn=function(){function n(){this.alphabet="abcdefghijklmnopqrstuvwxyz".split("")}return n.prototype.scramble=function(n){var l=this,t="",u="";return n.split("").forEach(function(n){l.alphabet.indexOf(n)%2==0?u+=n:t+=n}),u+t},n}(),Nn=function(){function n(){}return n.prototype.scramble=function(n){var l=this,t="",u="";return n.split("").forEach(function(n){l.isVoewl(n)?t+=n:u+=n}),t+u},n.prototype.isVoewl=function(n){return n.match(/[aeiou]/gi)},n}(),On=function(){function n(){}return n.getRandomInteger=function(n,l){return Math.floor(Math.random()*(l-n))+n},n.shuffleArray=function(n){var l,t,u;for(l=n.length-1;l>0;l--)t=Math.floor(Math.random()*(l+1)),u=n[l],n[l]=n[t],n[t]=u;return n},n}(),xn=function(){function n(n,l){this.original=n,this.scrambled=l.scramble(this.original)}return n.prototype.verifyGuess=function(n){return this.original.trim().toLowerCase()==n.trim().toLowerCase()},n}(),jn=function(){function n(){}return n.getRandomScrambler=function(){var n=[new Sn,new Pn,new Mn,new Nn];return n[On.getRandomInteger(0,n.length)]},n.newScrambledWord=function(n,l){return void 0===l&&(l=this.getRandomScrambler()),new xn(n,l)},n.ctorParameters=function(){return[]},n}();!function(n){n[n.newWord=0]="newWord",n[n.noWords=1]="noWords"}(an||(an={}));var Bn=function(){function n(){this.wordQueue=[]}return n.fromWordList=function(l){if(l){var t=new n;return t.wordList=l,t.wordsLength=l.words.length,t.wordQueue=On.shuffleArray(t.wordList.words),t}},n.prototype.newWord=function(){var n=this.wordQueue.pop();return n?{word:jn.newScrambledWord(n),result:an.newWord}:{result:an.noWords}},n.prototype.getWordListName=function(){return this.wordList.name},n.prototype.getLevel=function(){return this.wordList.level},n}(),En=function(){function n(){this.wordLists=[],this.wordLists=Object.assign(new Array,this.jsonData().slice())}return n.prototype.getWordList=function(n,l){void 0===l&&(l=[]);var t=this.wordLists.filter(function(t){return t.level==n&&!l.find(function(n){return t.name==n})});return 0==t.length&&(t=this.wordLists.filter(function(t){return t.level==n+1&&!l.find(function(n){return t.name==n})})),t.length>0?t[On.getRandomInteger(0,t.length-1)]:void 0},n.prototype.jsonData=function(){return[{name:"Colors I",shortDescription:"List with colours name",level:1,words:["red","blue","yellow","white","black","green"]},{name:"Senses I",shortDescription:"Verbs related to senses",level:2,words:["see","taste","smell","touch","hear","snif"]}]},n.ctorParameters=function(){return[]},n}(),Tn=function(){function n(n,l,t){this.wordListRepo=n,this.playerService=l,this.scoreService=t}return n.prototype.newGame=function(){this.player=this.playerService.getPlayer(),this.result=void 0;var n=this.tryGetNewWordBank();this.scoreService.start(this.player.level),void 0==n?this.finishGame(x.NoMoreWordList):(this.setWordBank(n),this.currentMove=this.wordBank.newWord().word)},n.prototype.tryGetNewWordBank=function(){var n=this.wordListRepo.getWordList(this.player.level,this.player.completedLists);return Bn.fromWordList(n)},n.prototype.guess=function(n){this.currentMove.verifyGuess(n)?(this.scoreService.addHit(),this.newMove()):this.finishGame(x.Lost)},n.prototype.newMove=function(){var n=this.wordBank.newWord();if(n.result==an.newWord)this.currentMove=n.word;else{this.completePlayerList(this.wordBank.getWordListName());var l=this.tryGetNewWordBank();void 0==l?(l=this.tryGetNewWordBank(),void 0==l?this.finishGame(x.Won):(this.setWordBank(l),n=this.wordBank.newWord(),this.currentMove=n.word)):(this.setWordBank(l),n=this.wordBank.newWord(),this.currentMove=n.word)}},n.prototype.setWordBank=function(n){this.wordBank=n,this.scoreService.setListName(this.wordBank.getWordListName()),this.setPlayerLevel()},n.prototype.setPlayerLevel=function(){this.wordBank.getLevel()>this.player.level&&(this.player.level++,this.scoreService.levelUp())},n.prototype.completePlayerList=function(n){this.player.completedLists.push(n)},n.prototype.finishGame=function(n){this.result=this.scoreService.generateResults(n),this.playerService.save(this.player)},n.ctorParameters=function(){return[{type:En},{type:Wn},{type:cn}]},n}(),Dn=function(){function n(n){this.engine=n,this.gameEngine=n}return n.prototype.ngOnInit=function(){this.startGame()},n.prototype.guess=function(n){this.engine.guess(n)},n.prototype.startGame=function(){this.gameEngine.newGame()},n.ctorParameters=function(){return[{type:Tn}]},n}(),Rn=[Z],An=j._14({encapsulation:0,styles:Rn,data:{}}),Fn=j._12("app-game",Dn,S,{},{},[]),Kn=[""],qn=[""],Zn=function(){function n(){this.toogleMenu=!1}return n.prototype.ngOnInit=function(){},n.prototype.toggleMenu=function(){this.toogleMenu=!this.toogleMenu},n.ctorParameters=function(){return[]},n}(),Un=[qn],Vn=j._14({encapsulation:0,styles:Un,data:{}}),zn=(j._12("app-nav-bar",Zn,M,{},{},[]),[Kn]),Hn=j._14({encapsulation:0,styles:zn,data:{}}),Qn=j._12("app-root",T,O,{},{},[]),Yn=t("fc+i"),Jn=j._13(E,[T],function(n){return j._27([j._28(512,j.k,j._9,[[8,[q,Fn,Qn]],[3,j.k],j.E]),j._28(4608,tn.i,tn.i,[]),j._28(5120,j.A,j._26,[[3,j.A]]),j._28(4608,V.l,V.k,[j.A]),j._28(5120,j.c,j._18,[]),j._28(5120,j.y,j._23,[]),j._28(5120,j.z,j._24,[]),j._28(4608,Yn.b,Yn.s,[V.c]),j._28(6144,j.Q,null,[Yn.b]),j._28(4608,Yn.e,Yn.f,[]),j._28(5120,Yn.c,function(n,l,t,u){return[new Yn.k(n),new Yn.o(l),new Yn.n(t,u)]},[V.c,V.c,V.c,Yn.e]),j._28(4608,Yn.d,Yn.d,[Yn.c,j.G]),j._28(135680,Yn.m,Yn.m,[V.c]),j._28(4608,Yn.l,Yn.l,[Yn.d,Yn.m]),j._28(6144,j.O,null,[Yn.l]),j._28(6144,Yn.p,null,[Yn.m]),j._28(4608,j.X,j.X,[j.G]),j._28(4608,Yn.g,Yn.g,[V.c]),j._28(4608,Yn.i,Yn.i,[V.c]),j._28(5120,R.a,R.w,[R.k]),j._28(4608,R.d,R.d,[]),j._28(6144,R.f,null,[R.d]),j._28(135680,R.o,R.o,[R.k,j.D,j.j,j.w,R.f]),j._28(4608,R.e,R.e,[]),j._28(5120,R.h,R.z,[R.x]),j._28(5120,j.b,function(n){return[n]},[R.h]),j._28(4608,En,En,[]),j._28(4608,Wn,Wn,[]),j._28(4608,cn,cn,[]),j._28(4608,Tn,Tn,[En,Wn,cn]),j._28(1024,R.r,R.u,[[3,R.k]]),j._28(1024,j.o,Yn.q,[]),j._28(1024,j.F,function(){return[R.s()]},[]),j._28(512,R.x,R.x,[j.w]),j._28(1024,j.d,function(n,l,t){return[Yn.r(n,l),R.y(t)]},[[2,Yn.h],[2,j.F],R.x]),j._28(512,j.e,j.e,[[2,j.d]]),j._28(131584,j._16,j._16,[j.G,j._10,j.w,j.o,j.k,j.e]),j._28(2048,j.g,null,[j._16]),j._28(512,R.q,R.c,[]),j._28(512,R.b,R.b,[]),j._28(256,R.g,{},[]),j._28(1024,V.g,R.t,[V.n,[2,V.a],R.g]),j._28(512,V.f,V.f,[V.g]),j._28(512,j.j,j.j,[]),j._28(512,j.D,j.U,[j.j,[2,j.V]]),j._28(1024,R.i,function(){return[[{path:"home",component:A},{path:"play",component:Dn}]]},[]),j._28(1024,R.k,R.v,[j.g,R.q,R.b,V.f,j.w,j.D,j.j,R.i,R.g,[2,R.p],[2,R.j]]),j._28(512,R.m,R.m,[[2,R.r],[2,R.k]]),j._28(512,tn.h,tn.h,[]),j._28(512,tn.c,tn.c,[]),j._28(512,V.b,V.b,[]),j._28(512,j.f,j.f,[j.g]),j._28(512,Yn.a,Yn.a,[[3,Yn.a]]),j._28(512,E,E,[])])});B.production&&Object(j._3)(),Object(Yn.j)().bootstrapModuleFactory(Jn).catch(function(n){return console.log(n)})},gFIY:function(n,l){function t(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="gFIY"}},[0]);