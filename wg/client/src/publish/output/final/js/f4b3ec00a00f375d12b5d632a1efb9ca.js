FilterItemDlg=Class.extern(function(){var a=74,b=5,c=6,d=null,e=null,f=null,g={},h={},i={},j=null,k=null,l=null,m=null;this.init=function(a){d=a,e=this,d.regEvent(EVT.PKG_CHANGE,0,e,F),n(),o()},this.openDlg=function(a){p(a),q(),r(),u(),v(),C(),HelpGuider.getNewcomerSpirit().onDlgOpen("uselistitem",{parent:f.getParent(),items:i,data:m})},this.setCaller=function(a){k=a},this.isShow=function(){return f?f.isShow():!1},this.clickItem=function(a){var b=i.itemlist.getItem(a).exsubs.usebtn;b.click()};var n=function(){g.effect=UseItemByEffectFilter.snew(d),g.itemids=UseItemByItemIdsFilter.snew(d)},o=function(){h.comm=CommItemInfoGetter.snew(d),h.buildGold=BuildGoldItemInfoGetter.snew(d),h.cultureGold=CultureLearnGoldItemInfoGetter.snew(d),h.skeletonGold=SkeletonSteelGoldItemInfoGetter.snew(d),h.skillGold=SkillSteelGoldItemInfoGetter.snew(d),h.cityDefGold=CityDefGoldItemInfoGetter.snew(d),h.tradingGold=TradingGoldItemInfoGetter.snew(d),h.roletaskGold=RoleTaskGoldItemInfoGetter.snew(d)},p=function(a){m=a},q=function(){j=g[m.filter]},r=function(){if(f)return;s(),t()},s=function(){f=Dialog.snew(d,{modal:!1,title:".",pos:{x:"center",y:25}}),d.getGUI().initDlg(f,uicfg.useitem.filterdlg,i)},t=function(){f.setCaller({self:e,caller:H})},u=function(){f.show()},v=function(){f.setTitle(m.title),G(),w(),A(),B()},w=function(){var a=x();y(a),z(a)},x=function(){var b=l.length;return b>c&&(b=c),a*b},y=function(a){var b=i.itemlist.getScroller();b.setSize(-1,a),b.refresh()},z=function(a){var c=i.itemlist.getScroller(),d=c.getDom(),e=parseInt(d.style.top)+a+b,g=f.getConDom();TQ.setDomHeight(g,e),TQ.setDomHeight(g.firstChild,e),f.refreshBack()},A=function(){TQ.setTextEx(i.desc,typeof m.desc=="function"?m.desc():m.desc)},B=function(){var a=i.itemlist;a.setItemCount(l.length);for(var b=0;b<l.length;++b){var c=l[b],d=a.getItem(b);CommDrawItem.drawItemIconAndName(d.exsubs.icon,d.exsubs.name,c.itemres),TQ.setTextEx(d.exsubs.number,c.number),TQ.setTextEx(d.exsubs.desc,c.desc);var f=d.exsubs.usebtn;f.setId(b),f.setText(m.btntext),f.setCaller({self:e,caller:D})}a.scrollPos(0)},C=function(){if(!m.targetitem)return;(m.targetitem.stoptime||m.targetitem.starttime||typeof m.desc=="function")&&d.regUpdater(e,E,1e3)},D=function(a){if(!k)return;var b=l[a],c=k.caller.call(k.self,b);c==RET_END&&f.hide()},E=function(a){if(m.targetitem.stoptime){var b=Math.max(0,m.targetitem.stoptime-d.getSvrTimeS());TQ.setTextEx(i.desc,TQ.formatTime(0,b))}else if(m.targetitem.starttime){var b=Math.max(0,d.getSvrTimeS()-m.targetitem.starttime);TQ.setTextEx(i.desc,TQ.formatTime(0,b))}else TQ.setTextEx(i.desc,m.desc())},F=function(){if(!e.isShow())return;G();for(var a=0;a<i.itemlist.getCount();++a){var b=l[a],c=i.itemlist.getItem(a);TQ.setTextEx(c.exsubs.number,b.number)}i.itemlist.scrollPos(0)},G=function(){l=j.filter(m);for(var a in l){var b=l[a],c=I(b);b.needNumber=c.needNumber,b.isGiftGold=c.isGiftGold,b.number=c.number,b.desc=c.desc}},H=function(a){a==C_SYS_DLG_HIDE&&(d.unregUpdater(e,E),HelpGuider.getNewcomerSpirit().onDlgClose("uselistitem"))},I=function(a){return J(a).getInfo(a,L())},J=function(a){var b=null;return K(a,RES_EFF.FULL_ACC_BUILDING_USEGIFTGOLD)?b=h.buildGold:K(a,RES_EFF.FULL_ACC_CULTURELEARN_USEGIFTGOLD)?b=h.cultureGold:K(a,RES_EFF.FULL_ACC_SKELETONSTEEL_USEGIFTGOLD)?b=h.skeletonGold:K(a,RES_EFF.FULL_ACC_SKILLSTEEL_USEGIFTGOLD)?b=h.skillGold:K(a,RES_EFF.FULL_ACC_CITYDEF_USEGIFTGOLD)?b=h.cityDefGold:K(a,RES_EFF.FULL_ACC_TRADING_USEGIFTGOLD)?b=h.tradingGold:K(a,RES_EFF.FULL_ACC_TASK_USEGIFTGOLD)?b=h.roletaskGold:b=h.comm,b},K=function(a,b){return TQ.find(a.itemres.effects,"id",b)!=null},L=function(){var a=0;if(m.targetitem.stoptime){var a=m.targetitem.stoptime-d.getSvrTimeS();a<0&&(a=0)}return a}})