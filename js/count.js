var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?a05584b3744c1ec70a3fddde0edb93b7";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
(function() {
  var xmlhttp=null;
  if (window.XMLHttpRequest) {
    xmlhttp=new XMLHttpRequest();
  }
  else if (window.ActiveXObject) {
  	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (xmlhttp!=null) {
  	xmlhttp.open("GET","http://counter.cedar.tk",true);
  	xmlhttp.send();
  }
})();
