AJAX_STATE={INIT:0,GETTING:1,RECVOK:2,ERROR:3},MyAjax=function(){var a,b,c,d,e,f,g=0;this.init=function(b,c){a=this,d=AJAX_STATE.INIT,e=b,j(),f=c},this.setCaller=function(a){c=a},this.getId=function(){return f},this.send=function(a){TQ.getBrowserType()==BS_MSIE?(j(),b.open("GET",e+"?d="+a+"&s="+g++,!0)):b.open("GET",e+"?d="+a,!0),b.send(null),d=AJAX_STATE.GETTING},this.getState=function(){return d};var h=function(){try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(a){}try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(a){}try{return new XMLHttpRequest}catch(a){}return null},i=function(a){a.readyState==4&&(d=AJAX_STATE.RECVOK,a.status==200&&a.responseText=="err!"&&(d=AJAX_STATE.ERROR));if(a.readyState==4&&a.status==200){var b=a.responseText.substr(1,a.responseText.length-2);c.caller.call(c.self,b)}},j=function(){b=new h,b.onreadystatechange=function(){i(b)},d=AJAX_STATE.INIT};this.init.apply(this,arguments)}