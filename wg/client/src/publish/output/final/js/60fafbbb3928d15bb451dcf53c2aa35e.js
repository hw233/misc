Expend=Class.extern(function(){this.init=function(a,b){this.g=a,this.expend=b},this.getAttr=function(){return this.expend.attr},this.getVal=function(){return this.expend.val}}),ItemExpend=Expend.extern(function(){this.isEnough=function(){var a=this.g.getImgr().getItemNumByResId(this.expend.resid),b=a&&a.number>=this.expend.val;return b}}),RoleAttrExpend=Expend.extern(function(){this.isEnough=function(){var a=this.g.getImgr().getRoleAttrVal(this.expend.attr),b=a&&a.val>=this.expend.val}}),HeroAttrExpend=Expend.extern(function(){this.init=function(a,b,c){this.g=a,this.heroid=b,this.expend=c},this.isEnough=function(a){var b=this.g.getImgr().getHero(this.heroid),c=b.attrs[this.expend.attr],d=c&&c.val>=this.expend.val;if(!d&&!a){var e=MsgTipUtil.formatIdMsg(this.g,100002,["@heroid"+this.heroid,"@attrid"+this.expend.attr,this.expend.val]);this.g.getGUI().sysMsgTips(SMT_ERROR,e)}return d}}),MoneyExpend=Expend.extern(function(){this.isEnough=function(a){var b=this.g.getImgr().getMoney()>=this.expend.val;if(!b&&!a){var c=MsgTipUtil.formatIdMsg(this.g,100004,["@attrid"+this.expend.attr,this.expend.val]);this.g.getGUI().sysMsgTips(SMT_ERROR,c)}return b}}),BindMoneyExpend=Expend.extern(function(){this.isEnough=function(a){var b=this.g.getImgr().getMoney()>=this.expend.val;if(!b&&!a){var c=MsgTipUtil.formatIdMsg(this.g,100004,["@attrid"+this.expend.attr,this.expend.val]);this.g.getGUI().sysMsgTips(SMT_ERROR,c)}return b}}),GoldExpend=Expend.extern(function(){this.isEnough=function(){return this.g.getImgr().getGold()>=this.expend.val}}),GiftGoldExpend=Expend.extern(function(){this.isEnough=function(a){var b=this.g.getImgr().getAllGold()>=this.expend.val;if(!b&&!a){var c=MsgTipUtil.formatIdMsg(this.g,100006,[this.expend.val]);this.g.getGUI().sysMsgTips(SMT_ERROR,c)}return b}}),ExpendUtil=new function(){this.createExpendObjs=function(a,b,c){var d=[];for(var e=0;e<c.length;++e){var f=c[e];f.type==EXPEND_TYPE.ROLEATTR?d.push(RoleAttrExpend.snew(a,f)):f.type==EXPEND_TYPE.HEROATTR?d.push(HeroAttrExpend.snew(a,b,f)):f.type==EXPEND_TYPE.ITEM?d.push(ItemExpend.snew(a,f)):f.type==EXPEND_TYPE.MONEY?d.push(MoneyExpend.snew(a,f)):f.type==EXPEND_TYPE.GOLD?d.push(GoldExpend.snew(a,f)):f.type==EXPEND_TYPE.GIFTGOLD&&d.push(GiftGoldExpend.snew(a,f))}return d},this.isEnough=function(a){for(var b=0;b<a.length;++b)if(!a[b].isEnough())return!1;return!0},this.getExpend=function(a,b){for(var c=0;c<a.length;++c)if(a[c].getAttr()==b)return a[c];return null}},MsgTipUtil=new function(){var a="@itemid",b="@heroid",c="@attrid",d="@skillid",e="@cityid",f="@armpos",g="@effid",h="@buptip",i="@cuptip";this.formatIdMsg=function(a,b,c){return this.formatParams(a,c),TQ.formatArgs(rstr.ids[b].msg,c)},this.formatParams=function(a,b){for(var c=0;c<b.length;++c)b[c]=j(a,b[c])};var j=function(j,l){if(typeof l=="string"){if(l.indexOf(a)==0){var m=k(l,a.length),n=ItemResUtil.findItemres(m);return n?n.level?ItemNameColorGetter.getColorVal(n.level,n.name):TQ.formatColorStr(n.name,ITEM_COLORS[0]):""}if(l.indexOf(b)==0){var o=k(l,b.length),p=j.getImgr().getHero(o);if(p)return p.name}else if(l.indexOf(c)==0){var q=k(l,c.length),n=TQ.qfind(res_attrs,"id",q);if(n)return n.name}else if(l.indexOf(d)==0){var r=k(l,d.length),n=ItemResUtil.findItemres(r);if(n)return n.name}else if(l.indexOf(e)==0){var s=k(l,e.length),n=ItemResUtil.findItemres(s);if(n)return n.name}else{if(l.indexOf(f)==0){var t=k(l,f.length);return rstr.comm.armPosName[t]}if(l.indexOf(g)==0){var u=k(l,g.length),n=TQ.qfind(res_effects,"id",u);if(n&&n.name)return n.name}else if(l.indexOf(h)==0){var v=k(l,h.length),n=TQ.qfind(res_items_builds,"id",v);if(n&&n.uptip)return n.uptip}else if(l.indexOf(i)==0){var w=k(l,i.length),n=TQ.qfind(res_items_cultures,"id",w);if(n&&n.uptip)return n.uptip}}}return l},k=function(a,b){return parseInt(a.substr(b,a.length-b),10)}}