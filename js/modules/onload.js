//EVERY ON LOAD ANIMATIONS
var controller = new ScrollMagic.Controller();

 $(document).ready(function() {

   TweenMax.fromTo('body', .5, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeInOut})

   if ($('body').height() > window.innerHeight && $(".scroll-anim-trigger")[0] != undefined) {

     $(".scroll-anim-trigger").each(function() {

       var tl = new TimelineMax();

       tl.add([
         TweenMax.fromTo($(this).find('.appear'), 1, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeInOut}),
         TweenMax.staggerFromTo($(this).find('.stagger-appear'), 1, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeInOut}, 0.08),
         TweenMax.from($(this).find('.move'), 1, {autoAlpha: 0, x: 20, ease: Power1.easeInOut}),
         TweenMax.staggerFrom($(this).find('.calque'), 1, {autoAlpha: 0, transformOrigin: "center", rotation: 90}, -.1)
       ]);

       var scene = new ScrollMagic.Scene({
         triggerElement: this,
         triggerHook: .5
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
       TweenMax.fromTo($(this).find('.appear') , 1, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeInOut}),
       TweenMax.staggerFromTo($(this).find('.stagger-appear'), 1, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeInOut}, 0.08),
       TweenMax.from($(this).find('.move'), 1, {autoAlpha: 0, x: 20, ease: Power1.easeInOut})
     ]);

   }

 });
