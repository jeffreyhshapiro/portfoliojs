$(document).ready(function(){

  $("#about-me").hide();
  $("#skills").hide();
  $("#dev-activity").hide();
  $("#contact-me").hide();
  $("#nav-about-me").on("click",function(){
    $("#introduction").hide();
    $("#skills").hide();
    $("#dev-activity").hide();
    $("#contact-me").hide();
    $("#about-me").show();
  });

  $("#nav-skills").on("click", function(){
    $("#introduction").hide();
    $("#about-me").hide();
    $("#dev-activity").hide();
    $("#contact-me").hide();
    $("#skills").show();
  })

  $("#nav-home").on("click", function(){
    $("#about-me").hide();
    $("#skills").hide();
    $("#dev-activity").hide();
    $("#contact-me").hide();
    $("#introduction").show();
  });

  $("#nav-dev-activity").on("click", function(){
    $("#about-me").hide();
    $("#skills").hide();
    $("#introduction").hide();
    $("#contact-me").hide();
    $("#dev-activity").show();
  });

  $("#nav-contact-me").on("click", function(){
    $("#about-me").hide();
    $("#skills").hide();
    $("#introduction").hide();
    $("#dev-activity").hide();
    $("#contact-me").show();
  });



});