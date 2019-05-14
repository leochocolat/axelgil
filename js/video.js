var video = document.getElementById("video");


$("#video").ready(function() {
  console.log('loaded');
  TweenMax.to(video, .5, {autoAlpha: 1});
})

// video.addEventListener('click', function() {
//
//   if(video.muted == false) {
//     video.muted = true
//   } else {
//     video.muted = false
//   }
//
// });
