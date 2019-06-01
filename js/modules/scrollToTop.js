$(document).ready(function() {

  let displayBtn = TweenMax.fromTo(".scrollToTop-button", .5, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeInOut});

  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: 'body',
    triggerHook: 0,
    offset: window.innerHeight
  })
  .setTween(displayBtn)
  .addTo(controller);


});



$(".scrollToTop-button").click(function() {

  TweenLite.to(window, 1, {scrollTo:0});

});
