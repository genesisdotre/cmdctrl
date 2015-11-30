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
      $("#cmdctrl-closebutton, #cmdctrl-closetext, #cmdctrl-fade").remove();
    }, 600);
    return false;
  };

  $("#cmdctrl-closebutton, #cmdctrl-closetext, #cmdctrl-fade").on("click", _closePopup);

  backgroundAnimationInit();
});