let start = new Date(2018, 03, 15);
let end = new Date(2018, 03, 22);
let now = new Date();

if (now > start && now < end) {
  extinctionRebellionBlackout();
} else {
  console.log('%cExtinction Rebellion', 'background: red; color: yellow; font-weight: bold; font-size: 30px');
}

extinctionRebellionBlackout(); // always on for development

function extinctionRebellionBlackout() {


  body = document.querySelector("body");
  body.innerHTML=`

  <style>
    #wrapper {
      background: rgba(0,0,0,0.8);
      color: white;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      font-family: sans-serif;
      z-index: 99999999;
    }

    .green {
      color: green;
    }


  </style>


  <div id="wrapper">
    <h1>Extinction Rebellion<br>Fight for <span class="green">Life</span></h1>
    <p>We are facing an unprecedented global emergency. The government has failed to protect us. To survive, it’s going to take everything we’ve got.</p>
    <h2>Our demands:</h2>
    <ol class="big-numbers">
      <li>The Government must tell the truth about the climate and wider ecological emergency, reverse inconsistent policies and work alongside the media to communicate with citizens.</li>
      <li>The Government must enact legally binding policy measures to reduce carbon emissions to net zero by 2025 and to reduce consumption levels.</li>
      <li>We becoming the Government by participating in elections as the &quot;Climate Party&quot;</li>
    </ol>
    <p><a href="">proceed to the website</a></p> <!-- not implemented yet -->
  </div>

  `

}