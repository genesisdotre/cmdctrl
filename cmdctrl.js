window.addEventListener("message", function(event) {
  if(event.data === "remove_iframe") {
    var iframe = document.getElementById("cmdctrl");
    iframe.parentNode.removeChild(iframe);
  }
});

var iframe = document.createElement("iframe");
iframe.src = "http://genesis.re/cmdctrl/cmdctrl-iframe.html";
iframe.style.position = "fixed";
iframe.style.top = 0;
iframe.style.left = 0;
iframe.style.height = "100%";
iframe.style.width = "100%";
iframe.style["z-index"] = 9999999;
document.body.appendChild(iframe);