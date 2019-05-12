var video = document.getElementById("video");


video.addEventListener('load', function() {

  


});

video.addEventListener('click', function() {

  if(video.muted == false) {
    video.muted = true
  } else {
    video.muted = false
  }

});
