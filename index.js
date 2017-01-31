


$(document).ready(function(){

  console.log("Hello this is dog.");

  $(".flex-container").css("display", "flex");

  // set height onload && window resize
  $(window).on("resize", function () {
    var height = $(window).height();
    $(".mock-div").css('height', height);
    height = height - 80;
    $('.flex-container').css('height', height + 'px');
  }).resize();

  // fade to reveal, then hide
  $(".mock-div").delay(300).animate({"opacity": "0"}, 1000, function() {
    $(".mock-div").hide();
  }); // end mock div reveal

  // icon stuff
  var imgArr = [
    "img/bacon.png",
    "img/cherries.png",
    "img/cocktail.png",
    "img/corn.png",
    "img/gingerbread-man.png",
    "img/honey.png",
    "img/ketchup.png",
    "img/lollipop.png",
    "img/onion-rings.png",
    "img/pancakes.png",
    "img/toast.png"
  ];

  var arrLength = imgArr.length;  // 11

  // - setInterval - //
  window.setInterval(fadeImg, 800);
  var counter = 1;

  function fadeImg() {
    $("#the-img").fadeOut("slow", function() {
      $("#the-img").attr("src", imgArr[counter]);
      $("#the-img").fadeIn("slow");

      if (counter == (arrLength)) {
        counter = 0;
      }

      counter++;
    });
  } // end fadeImg fxn

}); // end pg load
