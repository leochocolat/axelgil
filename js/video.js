var video = document.getElementById("video");

var soundIcon = $(".sound-icon");

$("#video").ready(function() {
  TweenMax.to(video, .5, {autoAlpha: 1});
})

video.addEventListener('mousemove', function(e) {

  var posX = e.clientX;
  var posY = e.clientY;

  TweenMax.to(".sound-icon", .3, {left: posX, top: posY, ease: Power1.easeInOut});

})

video.addEventListener('click', function() {

  if(video.muted == false) {
    // soundIcon.src="";
    video.muted = true
  } else {
    // soundIcon.src="";
    video.muted = false
  }

});
