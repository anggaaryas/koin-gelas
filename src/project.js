window.__require=function e(t,o,s){function i(n,c){if(!o[n]){if(!t[n]){var h=n.split("/");if(h=h[h.length-1],!t[h]){var a="function"==typeof __require&&__require;if(!c&&a)return a(h,!0);if(r)return r(h,!0);throw new Error("Cannot find module '"+n+"'")}}var p=o[n]={exports:{}};t[n][0].call(p.exports,function(e){return i(t[n][1][e]||e)},p,p.exports,e,t,o,s)}return o[n].exports}for(var r="function"==typeof __require&&__require,n=0;n<s.length;n++)i(s[n]);return i}({Game:[function(e,t,o){"use strict";cc._RF.push(t,"91252gahJ5LRoubqz9jnSt8","Game"),Object.defineProperty(o,"__esModule",{value:!0});var s=cc._decorator,i=s.ccclass,r=(s.property,function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.playerFirst=!1,t.playerChoose=!1,t.choosePhase=!1,t.firstMove=!0,t.animating=[!1,!1,!1,!1],t.round=0,t.multiPowerUps=!1,t.powerups=!1,t.powerupsPos=-1,t.currentPowerups="",t.playerPowerups=[!1,!1,!1,!1],t.powerUpsPhase=0,t.currentChoose=[-1,-1,-1,-1],t.currentCoinPos=-1,t.heartCount=[3,3,3,3],t}return __extends(t,e),t.prototype.playMusic=function(e){this.node.getChildByName(e).getComponent(cc.AudioSource).play()},t.prototype.setEnterAnimation=function(e){for(var t=["shadow1","shadow2","shadow3","shadow4"],o=[new cc.Vec2(0,150),new cc.Vec2(-150,0),new cc.Vec2(0,-150),new cc.Vec2(150,0)],s=(this.node.getChildByName("user1"),this.node.getChildByName("user2"),this.node.getChildByName("user3"),this.node.getChildByName("user4"),0);s<4;s++){var i=this.node.getChildByName(t[s]);cc.moveTo(.2,o[(s+1)%4]);e&&(i.opacity=0,i.runAction(cc.fadeTo(1,255))),i.runAction(cc.sequence(cc.moveTo(.2,o[(s+1)%4]),cc.moveTo(.2,o[(s+2)%4]),cc.moveTo(.2,o[(s+3)%4]),cc.moveTo(.2,o[(s+4)%4])))}this.node.getChildByName("plate").runAction(cc.rotateBy(.8,360)),this.playMusic("Shadow"),this.node.getChildByName("info").position=new cc.Vec2(-700,0)},t.prototype.setGlassClickListener=function(){for(var e=["glass1","glass2","glass3","glass4"],t=["ring1","ring2","ring3","ring4"],o=["shadow1","shadow2","shadow3","shadow4"],s=0;s<4;s++){var i=this.node.getChildByName(o[s]).getChildByName(e[s]),r=this.node.getChildByName("plate").getChildByName(t[s]).getChildByName("tap");i.getComponent(cc.Button).node.on("click",this.callback,this),r.getComponent(cc.Button).node.on("click",this.callback,this)}this.node.getChildByName("home").getComponent(cc.Button).node.on("click",function(){this.node.getChildByName("bg").getComponent(cc.AudioSource).pause(),this.node.getChildByName("bg").getComponent(cc.AudioSource).stop(),this.playMusic("home"),cc.director.loadScene("lobby")},this)},t.prototype.choosePlayerOrder=function(){for(var e=[],t=0;t<4;t++){var o=0;do{o=Math.floor(4*Math.random())}while(-1!==e.indexOf(o));e.push(o)}return e},t.prototype.placeCoinBOT=function(){var e=[new cc.Vec2(0,150),new cc.Vec2(-150,0),new cc.Vec2(0,-150),new cc.Vec2(150,0)],t=Math.floor(4*Math.random());this.node.getChildByName("koin").position=e[t],this.currentCoinPos=t},t.prototype.placeCoin=function(e){var t=[new cc.Vec2(0,150),new cc.Vec2(-150,0),new cc.Vec2(0,-150),new cc.Vec2(150,0)];this.node.getChildByName("koin").position=t[e],this.playMusic("koin"),this.playerFirst=!1,this.currentCoinPos=e,this.showUserChoose(),this.finishGlassPlayer(),this.stopGlassInfo()},t.prototype.chooseGlassBOT=function(){return Math.floor(5*Math.random())},t.prototype.chooseGlass=function(e,t){void 0===t&&(t=!0);for(var o=0;o<4;o++)if(this.playerOrder[(this.round-1)%4]!==o&&this.heartCount[o]>0){var s,i=!0;if(0===o)s=e;else if(t){do{s=this.chooseGlassBOT()}while(this.powerups&&s===this.powerupsPos);0===Math.floor(2*Math.random())&&(i=!1)}else s=-1;-1!==s&&4!==s&&!this.animating[o]&&i&&(console.log(o+" choose "+s),this.currentChoose[o]=s,console.log(this.currentChoose),this.updatePlayerChoosePos(o))}else this.currentChoose[o]=-1;this.firstMove=!1,t||this.stopGlassInfo()},t.prototype.updatePlayerChoosePos=function(e){for(var t=["userChoose1","userChoose2","userChoose3","userChoose4"],o=[new cc.Vec2(0,150),new cc.Vec2(-150,0),new cc.Vec2(0,-150),new cc.Vec2(150,0)],s=-1,i=[0,0,0,0],r=0;r<4;r++)if(-1!==this.currentChoose[r]){s=this.currentChoose[r];var n=this.node.getChildByName(t[r]),c=o[this.currentChoose[r]];this.currentChoose.filter(function(e){return e===s}).length;this.firstMove?n.setPosition(new cc.Vec2(c.x-33*(i[s]-2)-15,c.y-80)):(this.playMusic("wussPermen"),n.stopActionByTag(22),n.runAction(cc.moveTo(.2,new cc.Vec2(c.x-33*(i[s]-2)-15,c.y-80))).setTag(22)),i[s]++}},t.prototype.startGlassPlayer=function(){for(var e=["shadow1","shadow2","shadow3","shadow4"],t=0;t<4;t++){var o=this.node.getChildByName(e[t]),s=0,i=0;0===t?s=140:1===t?i=140:2===t?s=-140:3===t&&(i=-140),o.runAction(cc.moveBy(.3,new cc.Vec2(s,i)))}this.playMusic("playerCoinGlass")},t.prototype.finishGlassPlayer=function(){for(var e=["shadow1","shadow2","shadow3","shadow4"],t=0;t<4;t++){var o=this.node.getChildByName(e[t]),s=0,i=0;0===t?s=-140:1===t?i=-140:2===t?s=140:3===t&&(i=140),o.runAction(cc.moveBy(.3,new cc.Vec2(s,i)))}this.playMusic("playerCoinGlass")},t.prototype.showInfo=function(e,t,o){void 0===o&&(o=!1);var s=this.node.getChildByName("info"),i=s.getChildByName("playerName"),r=s.getChildByName("desc");0!==e?i.getComponent(cc.Label).string="CPU "+e:(o&&(this.playerFirst=!0),i.getComponent(cc.Label).string="Kamu"),r.getComponent(cc.Label).string=t;s.position=new cc.Vec2(-700,0),s.runAction(cc.moveTo(.3,new cc.Vec2(0,0))),this.playMusic("info"),this.scheduleOnce(function(){this.playMusic("info"),s.runAction(cc.moveTo(.3,new cc.Vec2(700,0))),this.playerFirst&&this.startGlassPlayer()},1.5)},t.prototype.animatingGlassInfo=function(e){void 0===e&&(e=null);var t=this.node.getChildByName("glassInfo"),o=this.node.getChildByName("bgGlassInfo");null!==e&&(t.getComponent(cc.Label).string=e),o.position=t.position,o.opacity=255,this.playMusic("glassInfo"),t.runAction(cc.repeatForever(cc.sequence(cc.fadeTo(.35,0),cc.delayTime(.15),cc.fadeTo(.35,255),cc.delayTime(.15))))},t.prototype.stopGlassInfo=function(){var e=this.node.getChildByName("glassInfo"),t=this.node.getChildByName("bgGlassInfo");e.stopAllActions(),e.opacity=0,t.runAction(cc.moveTo(.5,new cc.Vec2(0,-1024))),this.playMusic("bgGlassInfo")},t.prototype.showTimer=function(){var e=this.node.getChildByName("timer"),t=this.node.getChildByName("timerBar");e.opacity=255,t.opacity=255,t.getComponent(cc.ProgressBar).progress=1,this.playMusic("timer")},t.prototype.hideTimer=function(){var e=this.node.getChildByName("timer"),t=this.node.getChildByName("timerBar");e.opacity=0,t.opacity=0},t.prototype.hidePlayerChooser=function(){for(var e=["userChoose1","userChoose2","userChoose3","userChoose4"],t=0;t<4;t++){this.node.getChildByName(e[t]).position=new cc.Vec2(-500,-300)}},t.prototype.hideKoin=function(){this.node.getChildByName("koin").position=new cc.Vec2(-500,-300)},t.prototype.hideUserChoose=function(){for(var e=["userChoose1","userChoose2","userChoose3","userChoose4"],t=0;t<4;t++){this.node.getChildByName(e[t]).opacity=0}},t.prototype.showUserChoose=function(){for(var e=["userChoose1","userChoose2","userChoose3","userChoose4"],t=0;t<4;t++){this.node.getChildByName(e[t]).runAction(cc.fadeTo(.5,255))}},t.prototype.onLoad=function(){this.powerClone=new cc.NodePool,this.setEnterAnimation(!0),this.setGlassClickListener(),this.node.getChildByName("glassInfo").opacity=0,this.hideTimer()},t.prototype.start=function(){this.playMusic("bg"),this.playerOrder=this.choosePlayerOrder(),this.coreGame()},t.prototype.activatePowerUps=function(e){var t=["powerUpsShield","powerUpsMirror"];e!==this.currentCoinPos&&(console.log("Activate "+this.currentPowerups),this.currentPowerups===t[0]||this.currentPowerups===t[1]&&this.evaluateHeart(this.playerOrder[(this.round-1)%4]))},t.prototype.blessingSurvivor=function(){for(var e=["user1","user2","user3","user4"],t=["heart1","heart2","heart3"],o=!1,s=0;s<4;s++){var i=this.heartCount[s];if(1===i)o=!0,this.node.getChildByName(e[s]).getChildByName(t[i]).getComponent("Heart").blessing(),this.heartCount[s]++}o&&this.playMusic("plate")},t.prototype.evaluateHeart=function(e){var t=this.node.getChildByName(["user1","user2","user3","user4"][e]),o=t.getChildByName(["heart1","heart2","heart3"][this.heartCount[e]-1]);t.getComponent("UserAvatar").onHit(),0!==this.heartCount[e]&&o.getComponent("Heart").lostHeart(),this.heartCount[e]--,0===e&&this.playMusic("noWin"),0===this.heartCount[e]&&t.getComponent("UserAvatar").onGameOver()},t.prototype.showSkillInfo=function(){var e=["bgSkillInfoShield","bgSkillInfoMirror"],t=["powerUpsShield","powerUpsMirror"];if(this.currentPowerups===t[0])(o=this.node.getChildByName(e[0])).position=new cc.Vec2(0,1024),o.runAction(cc.sequence(cc.moveTo(.5,new cc.Vec2(0,260)),cc.delayTime(2.25),cc.moveTo(.5,new cc.Vec2(0,1024))));else if(this.currentPowerups===t[1]){var o;(o=this.node.getChildByName(e[1])).position=new cc.Vec2(0,1024),o.runAction(cc.sequence(cc.moveTo(.5,new cc.Vec2(0,260)),cc.delayTime(2.25),cc.moveTo(.5,new cc.Vec2(0,1024))))}},t.prototype.animatingPowerups=function(e){this.scheduleOnce(function(){console.log("powerups buat "+e);var t=0===e||3===e?1:-1,o=this.node.getChildByName(["user1","user2","user3","user4"][e]),s=this.node.getChildByName(this.currentPowerups);console.log("x adalah "+t+" y adalah 1"),this.multiPowerUps||(console.log(e),this.playMusic("powerUpsShield"),s.runAction(cc.moveTo(.2,new cc.Vec2(o.x+60*t,o.y+20))),s.runAction(cc.scaleTo(.2,.05))),0===this.heartCount[e]?this.scheduleOnce(function(){this.resetPowerUps(e)},.2):this.showSkillInfo(),console.log(s.position),this.multiPowerUps=!0},.4)},t.prototype.revealItem=function(){var e=["shadow1","shadow2","shadow3","shadow4"],t=this.node.getChildByName(e[this.currentCoinPos]),o=0,s=0;if(0===this.currentCoinPos?o=140:1===this.currentCoinPos?s=140:2===this.currentCoinPos?o=-140:3===this.currentCoinPos&&(s=-140),t.runAction(cc.moveBy(.3,new cc.Vec2(o,s))),this.powerups){var i=this.node.getChildByName(e[this.powerupsPos]);o=0,s=0,0===this.powerupsPos?o=140:1===this.powerupsPos?s=140:2===this.powerupsPos?o=-140:3===this.powerupsPos&&(s=-140),i.runAction(cc.moveBy(.3,new cc.Vec2(o,s)))}},t.prototype.backItem=function(){var e=["shadow1","shadow2","shadow3","shadow4"],t=this.node.getChildByName(e[this.currentCoinPos]),o=0,s=0;if(0===this.currentCoinPos?o=-140:1===this.currentCoinPos?s=-140:2===this.currentCoinPos?o=140:3===this.currentCoinPos&&(s=140),t.runAction(cc.moveBy(.3,new cc.Vec2(o,s))),this.powerups){var i=this.node.getChildByName(e[this.powerupsPos]);o=0,s=0,0===this.powerupsPos?o=-140:1===this.powerupsPos?s=-140:2===this.powerupsPos?o=140:3===this.powerupsPos&&(s=140),i.runAction(cc.moveBy(.3,new cc.Vec2(o,s)))}},t.prototype.evaluateScore=function(){console.log("Jatah player "+this.playerOrder[(this.round-1)%4]),-1!==this.currentCoinPos&&this.revealItem();for(var e=!1,t=0;t<4;t++){if(-1===this.currentCoinPos){this.playerFirst=!1,this.showUserChoose(),this.evaluateHeart(this.playerOrder[(this.round-1)%4]);break}this.playerPowerups[t]&&1===this.powerUpsPhase?this.activatePowerUps(this.currentChoose[t]):this.currentChoose[t]!==this.currentCoinPos&&t!==this.playerOrder[(this.round-1)%4]&&this.heartCount[t]>0?this.evaluateHeart(t):this.currentChoose[t]===this.currentCoinPos&&this.playMusic("userChoose1"),this.currentChoose[t]===this.powerupsPos&&this.powerups&&(this.playerPowerups[t]=!0,e=!0,this.animatingPowerups(t))}if(this.cekHome(),this.heartCount.filter(function(e){return 0===e}).length<3)this.scheduleOnce(function(){!e&&this.powerups&&this.resetPowerUps(),-1!==this.currentCoinPos&&this.backItem(),this.currentChoose=[-1,-1,-1,-1],this.currentCoinPos=-1,this.coreGame()},1.1);else{if(""!==this.currentPowerups){var o=[new cc.Vec2(0,150),new cc.Vec2(-150,0),new cc.Vec2(0,-150),new cc.Vec2(150,0)];this.node.getChildByName(this.currentPowerups).position=o[this.powerupsPos],this.node.getChildByName(this.currentPowerups).scale=.17}for(t=0;t<4;t++)if(this.heartCount[t]>0){this.playMusic("playerWin"),this.showInfo(t,"Menang",!1);break}}},t.prototype.roundPowerUps=function(){for(var e=[new cc.Vec2(0,150),new cc.Vec2(-150,0),new cc.Vec2(0,-150),new cc.Vec2(150,0)],t=Math.floor(2*Math.random()),o=Math.floor(4*Math.random());o===this.currentCoinPos;)o=Math.floor(4*Math.random());this.currentPowerups=["powerUpsShield","powerUpsMirror"][t],this.node.getChildByName(this.currentPowerups).position=e[o],this.node.getChildByName(this.currentPowerups).scale=.17,this.powerupsPos=o,console.log(this.currentPowerups)},t.prototype.resetPowerUps=function(e){void 0===e&&(e=null);if(console.log("cek clone = "+this.multiPowerUps),""!==this.currentPowerups){var t=this.node.getChildByName(this.currentPowerups);t.position=new cc.Vec2(-500,-400),t.scale=.17,this.powerClone.size()>0&&(console.log(this.powerClone.get().position),console.log(this.powerClone.size()),this.powerClone.clear())}this.multiPowerUps=!1,this.currentPowerups="",this.playerPowerups=[!1,!1,!1,!1]},t.prototype.cekHome=function(){var e=this.heartCount.filter(function(e){return 0===e}).length;if(0===this.heartCount[0]||3===e){var t=this.node.getChildByName("home");t.opacity=255,t.getComponent(cc.Button).interactable=!0}},t.prototype.coreGame=function(){this.firstMove=!0;var e=0;for(this.round>0&&(e=.75,this.scheduleOnce(function(){0==--this.powerUpsPhase&&this.resetPowerUps(),console.log("phase "+this.powerUpsPhase),this.powerups=!1,this.setEnterAnimation(!1)},e)),this.round%3==2&&(e+=1.1,this.scheduleOnce(function(){this.powerups=!0,this.powerUpsPhase=2,this.blessingSurvivor(),this.setEnterAnimation(!1)},e)),this.hidePlayerChooser(),this.hideKoin();0===this.heartCount[this.playerOrder[this.round%4]];)this.round++;this.scheduleOnce(function(){this.showInfo(this.playerOrder[this.round++%4],"Memasukkan Koin",!0)},1.1+e),this.scheduleOnce(function(){this.playerFirst?(this.animatingGlassInfo("Pilih gelas yang \ningin dimasukkan koin"),this.hideUserChoose()):(0!==this.heartCount[0]&&this.animatingGlassInfo("Silahkan Pilih gelas \nyang terdapat koin"),this.placeCoinBOT(),this.playerChoose=!0,this.powerups&&this.roundPowerUps()),this.choosePhase=!0,this.showTimer()},3.1+e)},t.prototype.callback=function(e){var t=["glass1","glass2","glass3","glass4"],o=["ring1","ring2","ring3","ring4"],s=["shadow1","shadow2","shadow3","shadow4"];console.log(e),e===this.node.getChildByName("plate").getChildByName(o[0]).getChildByName("tap").getComponent(cc.Button)||e===this.node.getChildByName(s[0]).getChildByName(t[0]).getComponent(cc.Button)?this.playerFirst?(this.placeCoin(0),this.powerups&&this.roundPowerUps()):this.playerChoose&&this.chooseGlass(0,!1):e===this.node.getChildByName(s[1]).getChildByName(t[1]).getComponent(cc.Button)||e===this.node.getChildByName("plate").getChildByName(o[1]).getChildByName("tap").getComponent(cc.Button)?this.playerFirst?(this.placeCoin(1),this.powerups&&this.roundPowerUps()):this.playerChoose&&this.chooseGlass(1,!1):e===this.node.getChildByName(s[2]).getChildByName(t[2]).getComponent(cc.Button)||e===this.node.getChildByName("plate").getChildByName(o[2]).getChildByName("tap").getComponent(cc.Button)?this.playerFirst?(this.placeCoin(2),this.powerups&&this.roundPowerUps()):this.playerChoose&&this.chooseGlass(2,!1):e!==this.node.getChildByName(s[3]).getChildByName(t[3]).getComponent(cc.Button)&&e!==this.node.getChildByName("plate").getChildByName(o[3]).getChildByName("tap").getComponent(cc.Button)||(this.playerFirst?(this.placeCoin(3),this.powerups&&this.roundPowerUps()):this.playerChoose&&this.chooseGlass(3,!1))},t.prototype.update=function(e){if(this.choosePhase){var t=this.node.getChildByName("timer").getComponent(cc.Label),o=this.node.getChildByName("timerBar").getComponent(cc.ProgressBar);if(o.progress>0){o.progress=o.progress-.1*e;var s=Math.floor(100*Math.random());(44===s||24===s)&&o.progress>.1&&this.chooseGlass(-1)}o.progress>.8?t.string="5":o.progress>.6?t.string="4":o.progress>.4?t.string="3":o.progress>.2?t.string="2":o.progress>0?t.string="1":(t.string="0",this.choosePhase=!1,this.playerChoose=!1,this.playerFirst&&this.powerups&&-1===this.currentCoinPos&&this.roundPowerUps(),this.stopGlassInfo(),this.hideTimer(),this.evaluateScore())}},t=__decorate([i],t)}(cc.Component));o.default=r,cc._RF.pop()},{}],Glass:[function(e,t,o){"use strict";cc._RF.push(t,"255d78s4gFNKrcNnUwzJAfU","Glass"),Object.defineProperty(o,"__esModule",{value:!0});var s=cc._decorator,i=s.ccclass,r=s.property,n=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.glassNumber=0,t}return __extends(t,e),t.prototype.setNumber=function(e){this.glassNumber=e},t.prototype.start=function(){},__decorate([r],t.prototype,"glassNumber",void 0),t=__decorate([i],t)}(cc.Component);o.default=n,cc._RF.pop()},{}],Heart:[function(e,t,o){"use strict";cc._RF.push(t,"98a182fYHpHiq/LTWsxSpwz","Heart"),Object.defineProperty(o,"__esModule",{value:!0});var s=cc._decorator,i=s.ccclass,r=s.property,n=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.playerId=0,t}return __extends(t,e),t.prototype.start=function(){},t.prototype.lostHeart=function(){var e=this.playerId-2;e=e<0?-1:1;var t=cc.moveBy(.75,new cc.Vec2(0,20*e)),o=cc.fadeTo(.75,0);this.node.runAction(t),this.node.runAction(o)},t.prototype.blessing=function(){var e=this.playerId-2;e=e<0?-1:1;var t=cc.moveBy(.75,new cc.Vec2(0,-20*e)),o=cc.fadeTo(.75,255);this.node.runAction(t),this.node.runAction(o)},__decorate([r],t.prototype,"playerId",void 0),t=__decorate([i],t)}(cc.Component);o.default=n,cc._RF.pop()},{}],MenuGame:[function(e,t,o){"use strict";cc._RF.push(t,"b04e6TYXY1DZqPS+OTPKyIa","MenuGame"),Object.defineProperty(o,"__esModule",{value:!0});var s=cc._decorator,i=s.ccclass,r=s.property,n=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.label=null,t.text="hello",t}return __extends(t,e),t.prototype.playMusic=function(e){this.node.getChildByName(e).getComponent(cc.AudioSource).play()},t.prototype.stopMusic=function(e){this.node.getChildByName(e).getComponent(cc.AudioSource).stop()},t.prototype.animatingTitle=function(){var e=this.node.getChildByName("Title");e.scale=0,e.runAction(cc.scaleTo(.3,.25));var t=this.node.getChildByName("user1");t.opacity=0,t.runAction(cc.fadeTo(.75,255))},t.prototype.onLoad=function(){this.animatingTitle(),this.playMusic("Title"),this.node.getChildByName("play").getComponent(cc.Button).node.on("click",function(){this.stopMusic("play"),this.playMusic("play"),cc.director.loadScene("ob1")},this)},t.prototype.start=function(){},__decorate([r(cc.Label)],t.prototype,"label",void 0),__decorate([r],t.prototype,"text",void 0),t=__decorate([i],t)}(cc.Component);o.default=n,cc._RF.pop()},{}],Opening:[function(e,t,o){"use strict";cc._RF.push(t,"32c5bWK/F9GnbJAzhk+JSAB","Opening"),Object.defineProperty(o,"__esModule",{value:!0});var s=cc._decorator,i=s.ccclass,r=(s.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.start=function(){this.scheduleOnce(function(){cc.director.loadScene("on2")},1.5)},t=__decorate([i],t)}(cc.Component));o.default=r,cc._RF.pop()},{}],UserAvatar:[function(e,t,o){"use strict";cc._RF.push(t,"a3819IPih1F6r2hhWY6ui3f","UserAvatar"),Object.defineProperty(o,"__esModule",{value:!0});var s=cc._decorator,i=s.ccclass,r=(s.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.start=function(){},t.prototype.onHit=function(){this.node.runAction(cc.sequence(cc.moveBy(.1,new cc.Vec2(-15,0)),cc.moveBy(.1,new cc.Vec2(30,0)),cc.moveBy(.1,new cc.Vec2(-30,0)),cc.moveBy(.1,new cc.Vec2(30,0)),cc.moveBy(.1,new cc.Vec2(-15,0))))},t.prototype.onGameOver=function(){this.node.runAction(cc.fadeTo(.5,70))},t=__decorate([i],t)}(cc.Component));o.default=r,cc._RF.pop()},{}],test:[function(e,t,o){"use strict";cc._RF.push(t,"2bbccg8iwdJtYNICksnc/hv","test"),Object.defineProperty(o,"__esModule",{value:!0});var s=cc._decorator,i=s.ccclass,r=s.property,n=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.label=null,t.text="hello",t}return __extends(t,e),t.prototype.start=function(){},__decorate([r(cc.Label)],t.prototype,"label",void 0),__decorate([r],t.prototype,"text",void 0),t=__decorate([i],t)}(cc.Component);o.default=n,cc._RF.pop()},{}]},{},["Game","Glass","Heart","MenuGame","Opening","UserAvatar","test"]);