$(document).ready(function() {
  console.log("Running...");
  //Link to Flickr gallery containing shirt images
  var flickr = "https://api.flickr.com/services/feeds/photos_public.gne?id=185718350@N08&format=json&jsoncallback=?";

  //External AJAX request pulling photos and photo data
  $.ajax({
    type: "GET",
    url: flickr,
    timeout: 10000,
    error: function(xhr, status, error) {
      alert("Error: " + xhr.status + " - " + error);
    },
    dataType: "json",
    success: function(data){
      $.each(data.items, function(i, item){
        //Addends the lightbox information to document
        $("#shirts").append(
          "<a href=\"" + item.media.m + "\"" + "data-lightbox=\"shirts\" data-title=\"" + item.title + "\">" +
          "<img src=\"" + item.media.m + "\">" +
          "</a>"
        );
      });
    }
  });
});
