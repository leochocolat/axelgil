var video = document.getElementById("video");
var soundIcon = document.querySelector(".sound-icon");
var soundIconOff = document.querySelector(".sound-icon-off");

$("#video").ready(function() {
  TweenMax.to(video, .5, {autoAlpha: 1});
})

video.addEventListener('mousemove', function(e) {
  var posX = e.clientX;
  var posY = e.clientY;
  TweenMax.to(".sound-icon", .4, {left: posX, top: posY, ease: Power3.easeOut});
  TweenMax.to(".sound-icon-off", .4, {left: posX, top: posY, ease: Power3.easeOut});
});

video.addEventListener('mouseenter', function() {
  TweenMax.to(".sound-icon", .3, {autoAlpha: 1, ease: Power3.easeOut});
  TweenMax.to(".sound-icon-off", .3, {autoAlpha: 1, ease: Power3.easeOut});
});

video.addEventListener('mouseleave', function() {
  TweenMax.to(".sound-icon", .3, {autoAlpha: 0, ease: Power3.easeOut});
  TweenMax.to(".sound-icon-off", .3, {autoAlpha: 0, ease: Power3.easeOut});
});

video.addEventListener('click', function() {
  if(video.muted == false) {
    soundIcon.style.display = "inherit";
    soundIconOff.style.display = "none";
    video.muted = true
  } else {
    soundIcon.style.display = "none";
    soundIconOff.style.display = "inherit";
    video.muted = false
  }
});
