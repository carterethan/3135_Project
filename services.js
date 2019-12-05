<!-- jQuery call to the accordion() method. -->
$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "https://api.myjson.com/bins/1bqlxm",
    timeout: 10000,
    error: function(xhr, status, error) {
      alert("Error: " + xhr.status + " - " + error);
    },
    dataType: "json",
    success: function(data){
      $.each(data.services, function(i, item) {
        $(".content").append(
          "<h2 class=\"sectionHeading\">" + data.services[i].name + "</h2>" +
          "<div id=\"tabs-" + (i + 1) + "\">" +
          "<h1>" + data.services[i].header + "</h1>" +
          "<p class=\"description\"><img src=\"" + data.services[i].image + "\" class=\"sectionImage\" alt=\"" + data.services[i].name + "\">" +
          data.services[i].description +
          "</p>" +
          "</div>"
        );
      });
      $("#accordion").accordion(
        {
          event: "click",
          collapsible: true
        });
    }

  });


  });
