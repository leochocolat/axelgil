var controller = new ScrollMagic.Controller();

let parallax = new TimelineMax();

parallax.add([
  TweenMax.to(".scrollmagic-parallax", 1, {y: 200})
]);


var scene = new ScrollMagic.Scene({
  triggerElement: '.scrollmagic-parallax-trigger',
  triggerHook: 0,
  duration: 1000,
  offset: 5,
})
.setTween(parallax)
.addTo(controller);
