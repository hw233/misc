TaskGuide=Class.extern(function(){this.g_=null,this.items_=null,this._isShow=!1,this._tasks=[],this.init=function(a,b){this.g_=a,this.items_=b,this._createPanel(),this._regEvents(),this._setCallers(),this._onClickExpand()},this.expandPanel=function(){this._onClickExpand()},this.getTasks=function(){return this._tasks},this.scrollTop=function(){this.items_.taskGuide.items.taskList.scrollPos(0)},this.getTaskBtnById=function(a){if(!TQ.find(this._tasks,"id",a))return null;var b=this.items_.taskGuide.items.taskList.getItem(TQ.getLastFindIdx());return b.exsubs.opBtn},this._createPanel=function(){this.items_.taskGuide.items={};var a=uicfg.main.mainpanel.t_[1];this.g_.getGUI().buildDomItems(this.items_.taskGuide,a,uicfg.main.mainpanel.t_,this.items_.taskGuide.items),TQ.fixIE6Png(this.items_.taskGuide)},this._regEvents=function(){this.g_.regEvent(EVT.TASKCHANGE,0,this,this._onTaskChange)},this._setCallers=function(){this.items_.expandTaskGuideBtn.setCaller({self:this,caller:this._onClickExpand}),this.items_.collapseTaskGuideBtn.setCaller({self:this,caller:this._onClickCollapse}),TQ.isMobile()||this.items_.taskGuideToggleBtn.setCaller({self:this,caller:this._onClickToggle}),this.items_.taskGuide.items.seeMoreTasks.setCaller({self:this,caller:this._onClickSeeMore})},this._show=function(){TQ.setCSS(this.items_.taskGuide,"display","block"),TQ.setCSS(this.items_.expandTaskGuideBtn.getParent(),"display","none"),TQ.setCSS(this.items_.collapseTaskGuideBtn.getParent(),"display","block"),this._isShow=!0,this._update()},this._hide=function(){TQ.setCSS(this.items_.taskGuide,"display","none"),TQ.setCSS(this.items_.expandTaskGuideBtn.getParent(),"display","block"),TQ.setCSS(this.items_.collapseTaskGuideBtn.getParent(),"display","none"),this._isShow=!1},this._update=function(){if(!this._isShow)return;var a=this.g_.getImgr().getTask().growups;this._tasks=[],TQ.dictCopy(this._tasks,a),this._tasks.sort(function(a,b){return a.state==1&&b.state!=1?-1:b.state==1&&a.state!=1?1:a.id-b.id});var b=this.items_.taskGuide.items.taskList;b.setItemCount(this._tasks.length);for(var c=0;c<b.getCount();++c){var d=b.getItem(c),e=this._tasks[c];TQ.setTextEx(d.exsubs.title,e.itemres.name),TQ.setTextEx(d.exsubs.desc,e.itemres.targetDesc),TQ.setClass(d.exsubs.state,this._getStateCssClass(e.state)),TQ.setTextEx(d.exsubs.state,rstr.task.taskdlg.states[e.state]),e.state==TASK_STATE.WAIT_GET?(d.exsubs.opBtn.setText(rstr.task.taskdlg.btn.getTaskReward),TQ.setCSS(d.exsubs.hotFlag,"display","none")):(d.exsubs.opBtn.setText(rstr.task.taskdlg.btn.seeTaskDetail),TQ.setCSS(d.exsubs.hotFlag,"display",e.itemres.hotTip?"block":"none")),d.exsubs.opBtn.setId(c),d.exsubs.opBtn.setCaller({self:this,caller:this._onClickOp})}},this._getStateCssClass=function(a){var b=["wait_complete_state","wait_get_state","complete_state"];return b[a]},this._onClickExpand=function(){this._show(),TQ.isMobile()||this.items_.taskGuideToggleBtn.setPress(!0)},this._onClickCollapse=function(){this._hide(),TQ.isMobile()||this.items_.taskGuideToggleBtn.setPress(!1)},this._onClickToggle=function(){this.items_.taskGuideToggleBtn.isPress()?this._show():this._hide()},this._onClickSeeMore=function(){UIM.openDlg("task","growup")},this._onTaskChange=function(){this._update()},this._onClickOp=function(a){var b=this._tasks[a];b.state==TASK_STATE.WAIT_GET?TaskSender.sendGetReward(this.g_,b.id):(UIM.getDlg("task").openDlg(),UIM.getDlg("task").selectTask("growup",a))}})