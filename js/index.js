//start of password form
(function () {
  //Display modal on click
  $(".show-prompt-box").click(function (e) {
    e.preventDefault();
    $(".overlay, .prompt-box, .prompt-wrap").fadeIn();
  });

  //Fade out overlay and prompt-box
  $(".overlay, .close").click(function () {
    $(".overlay, .prompt-box").fadeOut();
    $(".code-error").removeClass("is-error");
    e.stopPropagation();
  });

  //Get value and compare to password
  $(".prompt-box form").submit(function (e) {
    e.preventDefault();
    var codeWord = $(".clients").val();

    if (codeWord.toLowerCase() == "hi") {
      $(".bg_heart, #carousel, .wavesOuterDiv").fadeIn();
      $(".introPasswordModal").fadeOut();
    } else {
      $(".code-error").addClass("is-error");
      $(".prompt-box").addClass("shake");
      setTimeout(function () {
        $(".prompt-box").removeClass("shake");
      }, 1000);
    }
  });
})();
//end of password form

// start of background hearts
$("#header-plugin").load(
  "https://vivinantony.github.io/header-plugin/",
  function () {
    $("a.back-to-link").attr(
      "href",
      "https://blog.thelittletechie.com/2015/03/love-heart-animation-using-css3.html#tlt"
    );
  }
);

var love = setInterval(function () {
  var r_num = Math.floor(Math.random() * 40) + 1;
  var r_size = Math.floor(Math.random() * 65) + 10;
  var r_left = Math.floor(Math.random() * 100) + 1;
  var r_bg = Math.floor(Math.random() * 25) + 100;
  var r_time = Math.floor(Math.random() * 5) + 5;

  $(".bg_heart").append(
    "<div class='heart' style='width:" +
      r_size +
      "px;height:" +
      r_size +
      "px;left:" +
      r_left +
      "%;background:rgba(255," +
      (r_bg - 25) +
      "," +
      r_bg +
      ",1);-webkit-animation:love " +
      r_time +
      "s ease;-moz-animation:love " +
      r_time +
      "s ease;-ms-animation:love " +
      r_time +
      "s ease;animation:love " +
      r_time +
      "s ease'></div>"
  );

  $(".bg_heart").append(
    "<div class='heart' style='width:" +
      (r_size - 10) +
      "px;height:" +
      (r_size - 10) +
      "px;left:" +
      (r_left + r_num) +
      "%;background:rgba(255," +
      (r_bg - 25) +
      "," +
      (r_bg + 25) +
      ",1);-webkit-animation:love " +
      (r_time + 5) +
      "s ease;-moz-animation:love " +
      (r_time + 5) +
      "s ease;-ms-animation:love " +
      (r_time + 5) +
      "s ease;animation:love " +
      (r_time + 5) +
      "s ease'></div>"
  );

  $(".heart").each(function () {
    var top = $(this)
      .css("top")
      .replace(/[^-\d\.]/g, "");
    var width = $(this)
      .css("width")
      .replace(/[^-\d\.]/g, "");
    if (top <= -100 || width >= 150) {
      $(this).detach();
    }
  });
}, 500);
//end of background hearts

//start of carousel
$(".carousel").carousel();
//end of carousel
