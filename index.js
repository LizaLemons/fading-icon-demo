


$(document).ready(function(){

  $(".flex-container").css("display", "flex");

  // set div height on load && window resize
  $(window).on("resize", function () {
    var height = $(window).height();
    $(".mock-div").css('height', height);
    height = height - 80;
    $('.flex-container').css('height', height + 'px');
  }).resize();

  // fade to reveal, then hide so that <a> links are clickable
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
        console.log("counter is at limit");
        counter = 0;
      }

      counter++;
    });
  } // end fadeImg fxn

}); // end pg load
