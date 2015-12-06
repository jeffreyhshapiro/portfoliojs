$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "https://api.github.com/users/jeffreyhshapiro/repos",
    success: function(repos){
      console.log(repos);
      for (i = 0; i < repos.length; i++);
      $(".repos-table").append("<p>"+repos[i]+"</p>");
      
    }

  })

})

