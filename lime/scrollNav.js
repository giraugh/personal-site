var lerp;

window.navUpdateSpeed = .9;

lerp = function(a, b, t) {
  return a * (1 - t) + b * t;
};

$('a[href*=\\#]').on('click', function(event) {
  var href;
  href = $.attr(this, 'href');
  event.preventDefault();
  return $('html,body').animate({
    scrollTop: $(this.hash).offset().top
  }, 500, function() {
    return window.location.hash = href;
  });
});

window.updateLeftNav = function() {
  var cur, side, target;
  side = $("#left-column");
  if (side) {
    if (side.css("margin-top")) {
      target = $(window).scrollTop();
      cur = +(side.css("margin-top").replace("px", ""));
      side.css("margin-top", lerp(cur, target, .2));
    }
  }
  return requestAnimationFrame(updateLeftNav);
};

window.updateLeftNav();
