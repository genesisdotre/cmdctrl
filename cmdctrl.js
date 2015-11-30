var displayCondition = function() {
  var notOK = ["genesis.re/cmdctrl", "mostlydoing.com"];
  for (var i=0; i<notOK.length; i++) {
    if (document.referrer.indexOf(notOK[i]) !== -1) {
      return false;
    }
  }

  return true;
};

if (displayCondition()) {
  window.addEventListener("message", function(event) {
    if(event.data === "remove_iframe") {
      var iframe = document.getElementById("cmdctrl");
      iframe.parentNode.removeChild(iframe);
    }
  });
  
  var iframe = document.createElement("iframe");
  iframe.id = "cmdctrl";
  // iframe.src = "http://genesis.re/cmdctrl/cmdctrl-iframe.html";
  iframe.src = "cmdctrl-iframe.html";
  iframe.style.position = "fixed";
  iframe.style.top = 0;
  iframe.style.left = 0;
  iframe.style.height = "100%";
  iframe.style.width = "100%";
  iframe.style["z-index"] = 9999999;
  document.body.appendChild(iframe);
}


var style = document.createElement("style");
style.innerText = "h1 { color : red }";
document.body.appendChild(style);