﻿copyToClipboard = function(txt){   
      if(window.clipboardData) {   
              window.clipboardData.clearData();   
              window.clipboardData.setData("Text", txt);
			  return true;
      } else if(navigator.userAgent.indexOf("Opera") != -1) {   
           window.location = txt;   
		   return true;
      } else if (window.netscape) {   
           try {   
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");   
           } catch (e) {   
                //alert("如果您正在使用FireFox！\n请在浏览器地址栏输入'about:config'并回车\n然后将'signed.applets.codebase_principal_support'设置为'true'");   
				return false;
           }   
           var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);   
           if (!clip)   
                return false;
           var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);   
           if (!trans)   
                return false;
           trans.addDataFlavor('text/unicode');   
           var str = new Object();   
           var len = new Object();   
           var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);   
           var copytext = txt;   
           str.data = copytext;   
           trans.setTransferData("text/unicode",str,copytext.length*2);   
           var clipid = Components.interfaces.nsIClipboard;   
           if (!clip)   
                return false;   
           clip.setData(trans,null,clipid.kGlobalClipboard);   
           return true;
      } 
	  return false;
};

isCanCopyToClipboard = function(){   
	return false;
	//return copyToClipboard('.');
};