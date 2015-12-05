$(document).ready(function(){

  $("#about-me").hide();
  $("#nav-about-me").on("click",function(){
    $("#introduction").hide();
    $("#about-me").show();
  })

});