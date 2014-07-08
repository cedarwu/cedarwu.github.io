var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?0f2f09845a8903551f722e5901eccd40";
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
  	xmlhttp.open("GET","http://counter.cedar.tk/www",true);
  	xmlhttp.send();
  }
})();
