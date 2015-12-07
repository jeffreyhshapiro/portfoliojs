$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "https://api.github.com/users/jeffreyhshapiro/repos",
    success: function(repos){
      console.log(repos);
      for (i = 0; i < repos.length; i++){
        $(".repos-table").append("<p>"+repos[i].name+"</p>");
      };
    },
    error: function(jqXHR, textStatus, errorThrown){
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
    }

  })

})

