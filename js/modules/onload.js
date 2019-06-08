//EVERY ON LOAD ANIMATIONS
var allowRevealPage = false;
var animFinished = false;
var loaderDuration = 1900;
var controller = new ScrollMagic.Controller();
document.body.style.overflowY = "hidden";
var element = document.querySelector(".logo-loading-page");

if(!element) {
  TweenMax.fromTo('body', .5, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeInOut});
  animateIn();
} else {
  $(document).ready(function() {
    loading();
  });
}

function loading() {

  TweenMax.fromTo('body', .5, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeInOut})

  let intro = new TimelineMax();
  intro.add([
    TweenMax.from('.logo-loading-page', .8, {autoAlpha: 0, ease: Power1.easeInOut}),
    TweenMax.from('.name-left', 1, {autoAlpha: 0, ease: Power1.easeOut, delay: .4}),
    TweenMax.from('.name-right', 1.5, {autoAlpha: 0, ease: Power1.easeOut, delay: .4}),
    TweenMax.from('.name-left', 1.5, {x: -50, ease: Power2.easeOut, delay: .4}),
    TweenMax.from('.name-right', 1.5, {x: 50, ease: Power2.easeOut, delay: .4}),
  ]);

  setTimeout(function() {
    animFinished = true;
  }, loaderDuration);

}

 $(document).ready(function() {
   allowRevealPage = true;
   animFinishedHandler();
 });

function animateIn() {

  TweenMax.fromTo('.loading-page', .4, {autoAlpha: 1}, {autoAlpha: 0, ease: Power1.easeInOut})
  document.body.style.overflowY = "visible";
  if(document.getElementById("home")) {
    document.getElementById("home").style.overflowY = "hidden";
  }

  setTimeout(function(){

    if ($('body').height() > window.innerHeight && $(".scroll-anim-trigger")[0] != undefined) {

      $(".scroll-anim-trigger").each(function() {

        var tl = new TimelineMax();
        tl.add([
          TweenMax.fromTo($(this).find('.appear'), 1, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeInOut}),
          TweenMax.staggerFromTo($(this).find('.stagger-appear'), 1, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeInOut}, 0.08),
          TweenMax.fromTo($(this).find('.move'), 1, {autoAlpha: 0, x: 20}, {autoAlpha: 1, x: 0, ease: Power1.easeInOut}),
          TweenMax.staggerFromTo($(this).find('.calque'), 1, {autoAlpha: 0, transformOrigin: "50% 50%", rotation: 90}, {autoAlpha: 1, transformOrigin: "50% 50%", rotation: 0}, -.1)
        ]);

        var scene = new ScrollMagic.Scene({
          triggerElement: this,
          triggerHook: .95
        })
        .setTween(tl)
        .addTo(controller);

        var tlCustom = new TimelineMax();
        tlCustom.add(
          TweenMax.fromTo($(this).find('.appear-custom'), .5, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeInOut, delay: .2})
        );

        let sceneCustom = new ScrollMagic.Scene({
          triggerElement: this,
          triggerHook: .95
        })
        .setTween(tlCustom)
        .addTo(controller);

      })

    } else {

      var tl = new TimelineMax();
      tl.add([
        TweenMax.fromTo($('.appear') , 1, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeInOut}),
        TweenMax.staggerFromTo($('.stagger-appear'), 1, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeInOut}, 0.08),
        TweenMax.fromTo($('.move'), 1, {autoAlpha: 0, x: 20}, {autoAlpha: 1, x: 0, ease: Power1.easeInOut})
      ]);

    }

  }, 300);

}

function animFinishedHandler() {

  if(animFinished === true) {
    animateIn();
    videoManager();
  } else {
    requestAnimationFrame(animFinishedHandler);
  }

}

function videoManager() {

  if(document.getElementById("video")) {
    // console.log(document.querySelector("video"))
    $("#video").ready(function() {
      document.getElementById("video").play();
    });
  }

}
