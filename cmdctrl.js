// var displayCondition = function() {
//   var notOK = ["genesis.re/cmdctrl", "mostlydoing.com"];
//   for (var i=0; i<notOK.length; i++) {
//     if (document.referrer.indexOf(notOK[i]) !== -1) {
//       return false;
//     }
//   }

//   return true;
// };

// if (displayCondition()) {
//   window.addEventListener("message", function(event) {
//     if(event.data === "remove_iframe") {
//       var iframe = document.getElementById("cmdctrl");
//       iframe.parentNode.removeChild(iframe);
//     }
//   });
  
//   var iframe = document.createElement("iframe");
//   iframe.id = "cmdctrl";
//   // iframe.src = "http://genesis.re/cmdctrl/cmdctrl-iframe.html";
//   iframe.src = "cmdctrl-iframe.html";
//   iframe.style.position = "fixed";
//   iframe.style.top = 0;
//   iframe.style.left = 0;
//   iframe.style.height = "100%";
//   iframe.style.width = "100%";
//   iframe.style["z-index"] = 9999999;
//   document.body.appendChild(iframe);
// }


// var style = document.createElement("style");
// style.innerText = "h1 { color : red }";
// document.body.appendChild(style);

//$("body").append("<h1>helloworld</h1>");

var markup =  "<div id='cmdctrl'>" +
              "  <canvas id='cmdctrl-animation'></canvas>" +
              "  <div id='cmdctrl-fade'></div>" +
              "  <div id='cmdctrl-overlay'>" +
              "    <a href='#' id='cmdctrl-closebutton'>" +
              "      <img src='close-icon.png'/>" +
              "    </a>" +
              "    <img id='cmdctrl-logo' src='genesis-logo.png'>" +
              "    <div id='cmdctrl-links'>" +
              "      <a class='cmdctrl-link' href='https://genesis.re'>genesis.re</a>" +
              "      <a class='cmdctrl-link' href='http://michalstefanow.com'>michalstefanow.com</a>" +
              "      <a class='cmdctrl-link' href='http://mailhustle.com'>mailhustle.com</a>" +
              "      <a class='cmdctrl-link' href='http://mostlydoing.com'>mostlydoing.com</a>" +
              "      <a class='cmdctrl-link' href='http://hackeryoga.com'>hackeryoga.com</a>" +
              "      <a class='cmdctrl-link' href='http://quantumshift.org'>quantumshift.org</a>" +
              "      <a class='cmdctrl-link' href='http://nomadland.org'>nomadland.org</a>" +
              "    </div>" +
              "  </div>" +
              "</div>";

$(markup).appendTo("body");

$(function() {

  var _closePopup = function() {
    $("#cmdctrl-overlay").addClass("hidden");
    $("#cmdctrl-fade").addClass("hidden");
    $("#cmdctrl-animation").addClass("hidden");
    setTimeout(function() { 
      parent.postMessage("remove_iframe", "*");
    }, 1000);
    return false;
  };

  $("#cmdctrl-closebutton, #cmdctrl-closetext, #cmdctrl-fade").on("click", _closePopup);

  backgroundAnimationInit();
});