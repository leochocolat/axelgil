var svg = document.querySelectorAll("svg");

$("svg").hover(function() {

  TweenMax.fromTo($(this).find(".calque")[0], .5, {transformOrigin: "center", rotation: 0}, {transformOrigin: "center", rotation: -10, ease: Power1.easeOut});
  TweenMax.fromTo($(this).find(".calque")[1], .5, {transformOrigin: "center", rotation: 0}, {transformOrigin: "center", rotation: 10, ease: Power1.easeOut})

});

$("svg").mouseleave(function() {

  TweenMax.fromTo($(this).find(".calque")[0], .5, {transformOrigin: "center", rotation: -10}, {transformOrigin: "center", rotation: 0, ease: Power1.easeOut});
  TweenMax.fromTo($(this).find(".calque")[1], .5, {transformOrigin: "center", rotation: -10}, {transformOrigin: "center", rotation: 0, ease: Power1.easeOut})

});
