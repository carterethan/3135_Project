$(document).ready(function() {
  console.log("Running...");
  var flickr = "https://api.flickr.com/services/feeds/photos_public.gne?id=185718350@N08&format=json&jsoncallback=?";

  $.ajax({
    type: "GET",
    url: flickr,
    timeout: 10000,
    error: function(xhr, status, error) {
      alert("Error: " + xhr.status + " - " + error);
    },
    dataType: "json",
    success: function(data){
      console.log(data);
      $.each(data.items, function(i, item){
        console.log(i);
        $("#shirts").append(
          "<a href=\"" + item.media.m + "\"" + "data-lightbox=\"shirts\" data-title=\"" + item.title + "\">" +
          "<img src=\"" + item.media.m + "\">" +
          "</a>"
        );
      });
    }
  });
});
