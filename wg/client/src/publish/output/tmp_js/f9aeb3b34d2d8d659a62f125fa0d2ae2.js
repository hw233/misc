HelpGuider={},HelpGuider.initOneTime=function(a){HelpGuider.g_=a},HelpGuider.spirit=function(a){HelpGuider.spirit_||(HelpGuider.spirit_=HelpGuider.SpiritDlg.snew(HelpGuider.g_)),a.shape=1,HelpGuider.spirit_.openDlg(a),HelpGuider.hideSpiritRhombus()},HelpGuider.spiritRhombus=function(a){HelpGuider.spiritRhombus_||(HelpGuider.spiritRhombus_=HelpGuider.SpiritDlg.snew(HelpGuider.g_)),a.shape=2,HelpGuider.spiritRhombus_.openDlg(a),HelpGuider.hideSpirit()},HelpGuider.spiritTip=function(a){HelpGuider.spiritTip_||(HelpGuider.spiritTip_=HelpGuider.SpiritTipDlg.snew(HelpGuider.g_)),a.shape=1,HelpGuider.spiritTip_.openDlg(a)},HelpGuider.hideSpirit=function(){if(!HelpGuider.spirit_)return;HelpGuider.spirit_.hideDlg()},HelpGuider.hideSpiritRhombus=function(){if(!HelpGuider.spiritRhombus_)return;HelpGuider.spiritRhombus_.hideDlg()},HelpGuider.hideAllSpirits=function(){HelpGuider.hideSpirit(),HelpGuider.hideSpiritRhombus()},HelpGuider.hideSpiritTip=function(){if(!HelpGuider.spiritTip_)return;HelpGuider.spiritTip_.hideDlg()},HelpGuider.getNewcomerSpirit=function(){return HelpGuider.newcomerSpirit_||(HelpGuider.newcomerSpirit_=HelpGuider.NewcomerSpirit.snew(HelpGuider.g_)),HelpGuider.newcomerSpirit_},HelpGuider.SpiritDlg=JBaseDlg.ex({_innerInit:function(){this.C_ARROW_W=57,this.C_ARROW_H=57,this.C_SPACE=6,this.C_UPD_DRT=50,this.parent_=null,this.uibody_=TQ.getUiBody(),this.blinking_=null,this.arraw_=null,this.caller_=null,this.timer_=null,this.arrawPos_={x:0,y:0},this.arrawDir_=0,this.arrawDrt_=0},_getDlgCfg:function(){return{modal:!1,pos:{x:"center",y:0},uiback:uiback.dlg.helpspirit,uicfg:uicfg.help.SpiritDlg}},_afterCreate:function(){this._createBlinkRect(),this._createArraw()},_createBlinkRect:function(){var a=-1,b=[];this.params_.shape==1?b=["spirit_select_0","spirit_select_1","spirit_select_2","spirit_select_3","spirit_select_4","spirit_select_5","spirit_select_6","spirit_select_7"]:this.params_.shape==2&&(b=["spirit_select_rhombus"]),this.blinking_=BlinkingPanel.snew(this.g_,{zIndex:a,bakImgs:b}),this.blinking_.setCaller({self:this,caller:this._onBlinkingEvent})},_createArraw:function(){this.arraw_=TQ.createDom("div"),TQ.setCSS(this.arraw_,"position","absolute"),TQ.setCSS(this.arraw_,"zIndex",9e4)},_setCallers:function(){this.dlg_.setCaller({self:this,caller:this._onDlgEvent})},_initInfo:function(){this.info_=this.params_,this._setDlgInfo(),this._changeParent(),this._setPosAndShow(),this.timer_||(this.timer_=window.setInterval(this._onTimer(),this.C_UPD_DRT))},_changeParent:function(){var a=this.parent_;this.parent_=this.info_.parent,this._resetArrawParent(a,this.parent_),this.dlg_.changeParent(this.parent_)},_resetArrawParent:function(a,b){a&&TQ.remove(a,this.arraw_),TQ.append(b,this.arraw_)},_onDlgEvent:function(a){a==C_SYS_DLG_HIDE&&(TQ.setCSS(this.arraw_,"display","none"),this.blinking_.unbind(),this.caller_&&this.caller_.caller.call(this.caller_.self,-1),this.timer_&&(window.clearInterval(this.timer_),this.timer_=null))},_onBlinkingEvent:function(){this.dlg_.hide()},_setDlgInfo:function(){this.info_&&this.info_.text&&TQ.setRichText(this.items_.con,this.info_.text)},_setPosAndShow:function(){var a=this.info_.binfo;this.blinking_.bind(this.parent_,a.dom,BLINKING_TYPE.FLOAT,a.x,a.y,a.w,a.h),a.isShow&&this.blinking_.start(this.info_.blinktime);var b=this.blinking_.getRect(),c=TQ.domOffset(this.uibody_);c.left=0,c.top=0;var d=b.x+b.w/2-c.left,e=b.y+b.h/2-c.top,f=this.uibody_.offsetWidth/2,g=this.uibody_.offsetHeight/2,h=f-d,i=g-e,j=TQ.domOffset(this.parent_),k=this.dlg_.getDom(),l=0,m=0,n=0,o=0,p=isNull(this.info_.arrawdir)?this._calcArrawDir():this.info_.arrawdir;p==0?(l=b.x+b.w+this.C_ARROW_W/2+this.C_SPACE+a.offsetx,m=b.y+b.h/2+a.offsety,n=l+this.C_ARROW_W/2+this.C_SPACE-c.left,o=m-k.offsetHeight/2-c.top):p==1?(l=b.x+b.w/2+a.offsetx,m=b.y+b.h+this.C_ARROW_H/2+this.C_SPACE+a.offsety,n=l-k.offsetWidth/2-c.left,o=m+this.C_ARROW_H/2+this.C_SPACE-c.top):p==3?(l=b.x+b.w/2+a.offsetx,m=b.y-this.C_ARROW_H/2-this.C_SPACE+a.offsety,n=l-k.offsetWidth/2-c.left,o=m-this.C_ARROW_H/2-this.C_SPACE-k.offsetHeight-c.top):p==2&&(l=b.x-this.C_ARROW_W/2-this.C_SPACE+a.offsetx,m=b.y+b.h/2+a.offsety,n=l-this.C_ARROW_W/2-this.C_SPACE-k.offsetWidth-c.left,o=m-k.offsetHeight/2-c.top),this._setArrowPos(p,l,m),n=n+c.left-j.left,o=o+c.top-j.top,this.dlg_.show({x:n,y:o}),TQ.setCSS(this.arraw_,"zIndex",this.dlg_.getZIndex())},_calcArrawDir:function(){var a=this.blinking_.getRect(),b=TQ.domOffset(this.uibody_),c=a.x+a.w/2-b.left,d=a.y+a.h/2-b.top,e=this.uibody_.offsetWidth/2,f=this.uibody_.offsetHeight/2,g=e-c,h=f-d,i=0;return g>0&&Math.abs(g)>Math.abs(h)?i=0:h>0&&Math.abs(h)>Math.abs(g)?i=1:h<0&&Math.abs(h)>Math.abs(g)?i=3:i=2,i},_setArrowPos:function(a,b,c){var d=this.C_ARROW_W,e=this.C_ARROW_H,f=TQ.domOffset(this.parent_);this.arrawPos_.x=b-Math.floor(d/2)-f.left,this.arrawPos_.y=c-Math.floor(e/2)-f.top,this.arrawDir_=a,TQ.setDomRect(this.arraw_,this.arrawPos_.x,this.arrawPos_.y,d,e);var g=["left.png","up.png","right.png","down.png"];IMG.setBKImage(this.arraw_,IMG.makeImg("newcomerhelp/spirit/arraw/"+g[a])),TQ.fixIE6Png(this.arraw_),TQ.setCSS(this.arraw_,"display","block")},_onTimer:function(){var a=this;return function(){a._updateArrow()}},_updateArrow:function(){this.arrawDrt_+=this.C_UPD_DRT;var a=Math.floor(Math.cos(this.arrawDrt_*.008)*5),b=this.arrawPos_.x,c=this.arrawPos_.y;this.arrawDir_==0||this.arrawDir_==2?b-=a:c-=a,TQ.setDomPos(this.arraw_,b,c)}}),HelpGuider.SpiritTipDlg=JBaseDlg.ex({_innerInit:function(){this.C_UPD_DRT=50,this.parent_=null,this.posInfos={dir0:{con:[18,22,102,52],closeBtn:[113,9,20,20]},dir1:{con:[18,37,102,52],closeBtn:[113,24,20,20]},dir2:{con:[18,37,102,52],closeBtn:[113,24,20,20]}}},_getDlgCfg:function(){return{modal:!1,pos:{x:"center",y:0},uiback:uiback.dlg.noborder,uicfg:uicfg.help.helptipdlg}},_afterCreate:function(){TQ.fixIE6Png(this.items_.bak)},_setCallers:function(){this.dlg_.setCaller({self:this,caller:this._onDlgEvent}),this.items_.closeBtn.setCaller({self:this,caller:this._onCloseDlg})},_initInfo:function(){this.info_=this.params_,this._duration=1e4,this._setDlgBack(),this._setElemsPos(),this._setDlgInfo(),this._changeParent(),this._setPos(),this.timer_||(this.timer_=window.setInterval(this._onTimer(),this.C_UPD_DRT))},_setDlgBack:function(){TQ.setClass(this.items_.bak,"helptipdlg"+this.info_.arrawdir),TQ.fixIE6Png(this.items_.bak)},_setElemsPos:function(){var a=this.posInfos["dir"+this.info_.arrawdir];TQ.setDomRect(this.items_.closeBtn.getParent(),a.closeBtn[0],a.closeBtn[1],a.closeBtn[2],a.closeBtn[3]),TQ.setDomRect(this.items_.con,a.con[0],a.con[1],a.con[2],a.con[3])},_setDlgInfo:function(){this.info_&&this.info_.text&&TQ.setRichText(this.items_.con,this.info_.text)},_changeParent:function(){var a=this.parent_;this.parent_=this.info_.parent,this.dlg_.changeParent(this.parent_)},_setPos:function(){var a=this.info_.binfo,b=TQ.domOffset(this.parent_),c=TQ.domOffset(a.dom),d=this.dlg_.getDom(),e=c.left-b.left+d.offsetWidth/2+a.offsetx,f=c.top-b.top-d.offsetHeight+a.offsety;this.dlg_.show({x:e,y:f})},_onDlgEvent:function(a){a==C_SYS_DLG_HIDE&&(this.caller_&&this.caller_.caller.call(this.caller_.self,-1),this.timer_&&(window.clearInterval(this.timer_),this.timer_=null))},_onCloseDlg:function(){this.hideDlg()},_onTimer:function(){var a=this;return function(){a._updateDuration()}},_updateDuration:function(){this._duration-=this.C_UPD_DRT,this._duration<=0&&this.hideDlg()}}),HelpGuider.RoleCanDoSomethingChecker=Class.extern(function(){this.init=function(){},this._checkPPAssign=function(){},this._checkHeroExpsAssign=function(){}}),HelpGuider.TaskCanDoSomethingChecker=Class.extern(function(){this.init=function(){},this._checkCanGetCommAward=function(){},this._checkCanGetPrestigeAward=function(){},this._checkCanDoRoleTask=function(){}}),HelpGuider.HeroCanDoSomethingChecker=Class.extern(function(){this.init=function(){},this._checkPPAssign=function(){},this._checkCanWearArm=function(){},this._checkCanOfficial=function(){}}),HelpGuider.AlliCanDoSomethingChecker=Class.extern(function(){this.init=function(){},this._hasApplyJoin=function(){}}),HelpGuider.HasNewArmyChecker=Class.extern(function(){this.init=function(){}}),HelpGuider.HasNewMailChecker=Class.extern(function(){this.init=function(){}}),HelpGuider.HasCanExchangeChecker=Class.extern(function(){this.init=function(){}}),HelpGuider.HasCanCompleteFarmChecker=Class.extern(function(){this.init=function(){}}),HelpGuider.ActValCanDoSomethingChecker=Class.extern(function(){this.init=function(){},this._checkCanGetAward=function(){},this._checkTodaySignin=function(){}}),HelpGuider.CanDoSomething=Class.extern(function(){this.init=function(){this._regCheckers=[]}}),HelpGuider.NewerMainEmptyBlock=Class.extern(function(){}),HelpGuider.NewerMainBuild=Class.extern(function(){}),HelpGuider.NewerRoleDlgChecker=Class.extern(function(){}),HelpGuider.NewerTaskDlgChecker=Class.extern(function(){}),HelpGuider.NewerHeroDlgChecker=Class.extern(function(){}),HelpGuider.NewerAlliDlgChecker=Class.extern(function(){}),HelpGuider.NewerExpedDlgChecker=Class.extern(function(){}),HelpGuider.NewerAssignHeroDlgChecker=Class.extern(function(){}),HelpGuider.NewerAssignSoldierDlgChecker=Class.extern(function(){}),HelpGuider.NewerMilitaryDlgChecker=Class.extern(function(){}),HelpGuider.NewerMilitaryDlgChecker=Class.extern(function(){}),HelpGuider.NewerPkgDlgChecker=Class.extern(function(){}),HelpGuider.NewerChecker=Class.extern(function(){this.init=function(){this._regCheckers=[]}})