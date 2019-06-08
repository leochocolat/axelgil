var svg = document.querySelectorAll("svg");

$("svg").hover(function() {

  TweenMax.to($(this).find(".calque")[0], .5, {transformOrigin: "center", rotation: -10, ease: Power1.easeOut});
  TweenMax.to($(this).find(".calque")[1], .5, {transformOrigin: "center", rotation: 10, ease: Power1.easeOut})

});

$("svg").mouseleave(function() {

  TweenMax.to($(this).find(".calque")[0], .5, {transformOrigin: "center", rotation: 0 });
  TweenMax.to($(this).find(".calque")[1], .5, {transformOrigin: "center", rotation: 0 })

});
