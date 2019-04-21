var path;
var canvas = document.getElementById("morph-circle");

var view = {
  x: window.innerWidth,
  y: window.innerHeight,
}

path = new Path.Circle({
  center: [view.x/2, view.y/2],
  radius: view.y/4
});
path.fillColor = "#95b8e2"
path.flatten(10);
path.smooth();

var circlePos = {
  x: [],
  y: []
}

var circlePosX = [];
var circlePosY = [];

for(i = 0; i < path.segments.length; i++) {
  circlePosX.push(path.segments[i].point.x);
  circlePosY.push(path.segments[i].point.y);
}

var simplex = new SimplexNoise();
var value2d = simplex.noise2D(1, 10);
console.log(value2d);

$(".menu-elt").mouseenter(function() {
  TweenMax.to(path.style.fillColor, .5, {hue: "+=" + 80 , ease: Power3.easeOut});
  for(i = 0; i < path.segments.length; i++) {
    TweenMax.to(path.segments[i].point, .5, {x: (circlePosX[i]), ease: Power3.easeOut});
    TweenMax.to(path.segments[i].point, .5, {y: (circlePosY[i]), ease: Power3.easeOut});
  }
  setTimeout(function() {
    for(i = 0; i < path.segments.length; i++) {
      if(path.segments[i].point.x < path.position.x) {
        TweenMax.to(path.segments[i].point, 1, {x: "-=" + ((Math.random()*50)-25), ease: Power3.easeOut})
      } else if(path.segments[i].point.x > path.position.x) {
        TweenMax.to(path.segments[i].point, 1, {x: "+=" + ((Math.random()*50)-25), ease: Power3.easeOut})
      }

      if (path.segments[i].point.y < path.position.y) {
        TweenMax.to(path.segments[i].point, 1, {y: "-=" + ((Math.random()*50)-25), ease: Power3.easeOut})
      } else if(path.segments[i].point.y > path.position.y) {
        TweenMax.to(path.segments[i].point, 1, {y: "+=" + ((Math.random()*50)-25), ease: Power3.easeOut})
      }
    }
  }, 500)
});

$(".menu-elt").mouseleave(function() {
  for(i = 0; i < path.segments.length; i++) {
    TweenMax.to(path.segments[i].point, 1, {x: (circlePosX[i]), ease: Power3.easeOut});
    TweenMax.to(path.segments[i].point, 1, {y: (circlePosY[i]), ease: Power3.easeOut});
  }
});

function onFrame(event) {

	// path.
}
