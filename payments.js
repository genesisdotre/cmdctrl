var config = {
    stripe_pk: "pk_live_2DAE0pRgfhU4eH7NxiQ4jLbD",
    stripe_endpoint: "https://genesis-charge.herokuapp.com/charge",
    stripe_name: "astralship.org",
    stripe_description: "pre-Kickstarter campaign",
    BTC: "17zVA88xk4Ma7Cza4NXGYcP4Z1Qz7TUdzV", // TODO: reliably generate QR code http://stackoverflow.com/questions/25339587/how-do-i-generate-a-qr-code-for-a-bitcoin-address-with-amount
    paypal_business: "email@genesis.re",
    currency: "gbp",
    reward: "night",

  };


  // TODO: be international, accept more currencies
  // TODO: get recent currency exchange rates via API

  var currencies = [ 
    { symbol: "gbp", icon: "£", rate: 1.00 },
    // { symbol: "USD", icon: "$", rate: 0.80 }, 
    // { symbol: "EUR", icon: "€", rate: 0.85 }
  ];

  var rewards = [
    { name: "meal", description: "Lunch packed with superfoods", cost: 6},
    { name: "night", description: "Come and visit us", cost: 30 },
    { name: "week", description: "Why don't you stay", cost: 180 },
    { name: "month", description: "Treat this as your second home", cost: 600 },
    { name: "investor", description: "Own 1% of the chapel", cost: 3000 },
  ];

  var markupButt = "";
  var markupDesc = "";
  rewards.forEach(function(reward) {
    markupButt += "<a class='pure-button' data-reward='" + reward.name + "'><strong>£" + reward.cost + "</strong> " + reward.name + "</div>"
    markupDesc += "<div class='description' data-reward='" + reward.name + "'>" + reward.description + "</div>"
  });

  $(".markupButt").html(markupButt);
  $(".markupDesc").html(markupDesc);
  


  $(".markupButt").on("click", "a", function() {
    config.reward = $(this).data("reward");
    _selectReward(config.reward);
  })

  var _selectReward = function(reward) {
    $(".markupDesc").find("[data-reward=" + reward).addClass("active");

    
    var active = $(".markupButt").find(".pure-button-primary"); // First remove any active button class
    if (active.length > 0) {
      active.removeClass("pure-button-primary");
    }
    
    $(".markupButt").find("[data-reward=" + reward).addClass("pure-button-primary");
  };

  _selectReward(config.reward);



    var handler = StripeCheckout.configure({
        key: 'pk_live_2DAE0pRgfhU4eH7NxiQ4jLbD',
        // key: 'pk_test_gorhMMGRx3KOzCuhkkwX6iah',
        image: '/images/genesis.png',
        locale: 'auto',
        token: function(token) {
          console.log(token);

          var data = {
            id : token.id,
            howmany : currency === "usd" ? (valNumber * 1000000) : (valNumber * 800000),
            currency : currency
          };

          // $.post("http://localhost:3002/charge", data, function(response) {
          $.post(config.stripe_endpoint, data, function(response) {
            console.log(response);

            // alert(response + "\r\nwhich is as you can tell is " + (response === "OK" ? "super cool" : "not that good"));

            $('.payments').css({visibility: "hidden"});

            if(response === "OK") {
              $("#thankyou").show();
            } else {
              $("#error").show();
              $("#exact-error").text(response.message);
            }

          });

        }
      });

      $('#stripe-button').on('click', function(e) {
        // Open Checkout with further options
        handler.open({
          name: config.stripe_name,
          description: config.stripe_description,
          currency: currency,
          amount: amount
        });
        e.preventDefault();
      });

      // Close Checkout on page navigation
      $(window).on('popstate', function() {
        handler.close();
      });