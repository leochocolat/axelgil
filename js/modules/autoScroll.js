//AUTOSCROLL STUFF
var allowAutoScroll = true;
var scrollLevel = 0;
var previousScrollLevel = 0;
var targetIndex = 0;

var targets = document.querySelectorAll(".autoScroll-target");

window.addEventListener('scroll', function(e) {

  scrollLevel = window.scrollY;

  currentTarget = targets[targetIndex];
  targetPosition = currentTarget.offsetTop - window.innerHeight/2 + currentTarget.clientHeight/2;

  if(scrollLevel > previousScrollLevel + 5 && allowAutoScroll) {

    TweenMax.to(window, 1, {scrollTo: {y: targetPosition}, onComplete: Done});
    e.stopPropagation();

  } else if(scrollLevel + 10 < previousScrollLevel) {
    allowAutoScroll = false;
  }

  previousScrollLevel = scrollLevel;

  // console.log('allowAutoScroll', allowAutoScroll);

});

function Done() {

  allowAutoScroll = true;

  if(targets.length > targetIndex + 1) {
    targetIndex++;
  }


}
