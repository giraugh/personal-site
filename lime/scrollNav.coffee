#speed at which nav updates
window.navUpdateSpeed = .9

lerp = (a, b, t)->
    return a * (1-t) + b * t


#make # tags jump slowly
$('a[href*=\\#]').on 'click', (event)->
    href = $.attr(this, 'href');
    event.preventDefault()
    $('html,body').animate {scrollTop:$(this.hash).offset().top},
      500,
      ()->window.location.hash = href

#Update function, moves nav
window.updateLeftNav = ->

  #get navbar element
  side = $ "#left-column"
  if side
    if side.css("margin-top")

      #get top of window
      target = $(window).scrollTop()

      #get current position
      cur = +(side.css("margin-top").replace("px", ""))

      #Interpolate towards target
      side.css("margin-top", lerp(cur, target, .2))

  #Do it again next frame!
  requestAnimationFrame updateLeftNav

#do it for the first times
window.updateLeftNav()
