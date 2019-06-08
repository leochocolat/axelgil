//AUTOSCROLL STUFF
var allowAutoScroll = true;
var scrollLevel = 0;
var previousScrollLevel = 0;
var targetIndex = 0;

var targets = document.querySelectorAll(".autoScroll-target");

window.addEventListener('scroll', function(e) {

  console.log(e);

  scrollLevel = window.scrollY;

  if(scrollLevel > previousScrollLevel + 5 && allowAutoScroll) {
    TweenMax.to(window, 1, {scrollTo: targets[targetIndex], onComplete: Done});
  }

  previousScrollLevel = scrollLevel;

  console.log('allowAutoScroll', allowAutoScroll);

});

function Done() {

  if(targets.length > targetIndex + 1) {
    targetIndex++;
  }

}
