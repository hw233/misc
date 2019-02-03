COLORS={APPEND_ATTR:"#33ff33",ITEM_TIP_FORCELEVELLBL:"#EAD16D",FORCELEVELSTAR:"#F3D825",EMPTY_FORCELEVELSTAR:"#808080",ITEM_TIP_DESC:"#FEFEFE",ITEM_TIP_BIND:"#FEFEFE",ITEM_TIP_BASEATTR:"#33ff33",ITEM_TIP_SPEEDATTR:"#5685A1",ITEM_TIP_SECATTR:"#8D5989",ITEM_TIP_SKILLLEVELATTR:"#8E5989",ITEM_TIP_BESETGEMLBL:"#EAD16D",ITEM_TIP_BESETGEMNAME:"#33ff33",ITEM_TIP_SALELPRICE:"#EAD16D",ITEM_TIP_BUYLIMIT:"#EAD16D",FRIENDCHAT_MYCOLOR:"#00FFFF",FRIENDCHAT_OTHERCOLOR:"#FFFFFF",NO_ENOUGH_ITEM:"#FF3300",ENOUGH_ITEM:"#33ff33",HERO_TIP_BASEATTR:"#FEFEFE",VALID_ROLE_NAME:"#20ff20",INVALID_ROLE_NAME:"#ff0000",ENOUGH_SIGNINDAYS:"green",NOENOUGH_SIGNINDAYS:"red",ROLESTATE_NORMAL:"#20ff20",ROLESTATE_DECLARING_FIGHT:"#f3d825",ROLESTATE_FIGHTING:"#ff3300",HEALTH_HEALTH:"#20ff20",HEALTH_FLESH_WOUND:"#f0f060",HEALTH_DEEP_WOUND:"#ff3300",SKILL_TIP_NAME:"#00FFFF",SKILL_TIP_FIVE_ELEM:"#FFFF00",SKILL_TIP_DESC:"#40FF00",SKILL_TIP_NEXTLEVEL:"#FF0000",ENOUGH_GOLD:"#33ff33",NOTENOUGH_GOLD:"#FF3300"},HEALTH_TYPE={HEALTH:0,FLESH_WOUND:1,DEEP_WOUND:2},ITEM_COLORS=["#fefefe","#30ff30","#3080ff","#AD23CE","#ff8040","#ff3030"],HERO_COLORS=["#fefefe","#30ff30","#3080ff","#AD23CE","#ff8040","#ff3030"],HeroNAttrColorGetter=Class.extern(function(){var a=null;this.init=function(b){a=this},this.getColorVal=function(a,c,d){var e=TQ.formatColorStr(d,b(a,c,d));return e},this.getLevel=function(a,b,c){var d=5,e=res_heronature_max_attrs[a][b];c>e&&(d=6);var f=(e-res_heronature_min_attrval)/d,g=Math.floor((c-res_heronature_min_attrval)/f)+1;return g>d?d:g};var b=function(b,c,d){var e=ITEM_COLORS[a.getLevel(b,c,d)-1];return e?e:ITEM_COLORS[0]}}).snew(),HeroNAttrFactorColorGetter=Class.extern(function(){var a=null,b=null,c=[{min:3.3,max:12.1},{min:12.2,max:13.2},{min:13.3,max:14.3},{min:14.4,max:15.4},{min:15.5,max:res_nattr_max_level},{min:res_nattr_max_level+1,max:1e3}];this.init=function(){a=this},this.initOneTime=function(a){b=a},this.getNatureFactor=function(a){return f(a)},this.getColorVal=function(a){var b=f(a),c=TQ.formatColorStr(b,d(b));return c},this.isMaxVal=function(a){var b=f(a);return Math.abs(b-res_nattr_max_level)<1e-4},this.getBorderClass=function(a){var b=f(a);return"item_icon_border_level"+e(b)};var d=function(a){var b=ITEM_COLORS[e(a)-1];return b?b:ITEM_COLORS[0]},e=function(a){for(var b=0;b<c.length;++b){var d=c[b];if(a>=d.min&&a<=d.max)return b+1}return 0},f=function(a){var c={};c[ATTR.AG_B]=ATTR.NAG,c[ATTR.PH_B]=ATTR.NPH,c[ATTR.ST_B]=ATTR.NST;var d=res_hero_main_sec_last_attrs["prof"+a.prof].attrs,e=c[d[0]],f=c[d[1]],g=c[d[2]],h=b.getImgr(),i=HeroNAttrColorGetter.getLevel(a.prof,e,h.getHeroAttrVal(a,e)),j=HeroNAttrColorGetter.getLevel(a.prof,f,h.getHeroAttrVal(a,f)),k=HeroNAttrColorGetter.getLevel(a.prof,g,h.getHeroAttrVal(a,g));return a.prof==HERO_PROF.YONGSHI?(1.1*i+1.1*j+1.1*k).toFixed(1):(1.2*i+1.1*j+1*k).toFixed(1)}}).snew(),SubjectColorGetter=Class.extern(function(){this.getColorVal=function(a){var b=a-1;return b<0&&(b=0),TQ.formatColorStr(rstr.herodlg.lbl.subjectlevel[a],ITEM_COLORS[b])}}).snew(),ItemNameColorGetter=Class.extern(function(){this.getColorVal=function(a,b){var c=0;return a&&(c=a-1),c<0&&(c=0),TQ.formatColorStr(b,ITEM_COLORS[c])}}).snew(),HeroNameColorGetter=Class.extern(function(){var a=null;this.initOneTime=function(b){a=b},this.getColorName=function(b){var c=a.getImgr().getHeroAttrVal(b,ATTR.IF),d=0;return c<50?d=0:c<150?d=1:c<250?d=2:c<350?d=3:c<450?d=4:d=5,TQ.formatColorStr(b.name,HERO_COLORS[d])}}).snew()