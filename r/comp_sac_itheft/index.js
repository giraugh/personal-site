/* global $ */
$(() => {
  let j = 0.05
  $.each($('.card'), (i, card) => {
    $(card).css({top: '-200px'})
    $(card).css('display', 'block')
    card.off = j
    card.rl = i % 2 === 0
    j += 0.15
    console.log(j)
  })

  $('#load-0').css({opacity: '1'})

  window.keepGoing = () => {
    if ($('#keep-going').parent().hasClass('current')) {
      $('*').animate({
        opacity: 0
      }, 1000, () => {
        window.location = 'second.html'
      })
    }
  }

  let update = () => {
    let scrollPercent = ($(window).scrollTop() / $(document).height()) * 100 / 67.9
    scrollPercent = scrollPercent <= 1 ? scrollPercent : 1

    let closest = 0
    let closestdist = Infinity

    $.each($('.card'), (i, card) => {
      let sp = scrollPercent
      sp -= card.off
      sp *= 1
      $(card).css({top: sp * $(document).height() + 'px'})
      $(card).css({transform: 'rotate(' + (card.rl ? '-' : '') + Math.sin(sp) * 90 + 'deg)'})
      $(card).css('display', 'block')
      let pos = $('#wallet').position().left + $('#wallet').width() / 3
      $(card).css({left: pos + Math.sin(i * 8.5) * 80 + 'px'})

      let dist = Math.abs($(card).position().top - $('#wallet').position().top)
      if (dist < closestdist) {
        closestdist = dist
        closest = i + 1
      }
    })

    if (closestdist < 100) {
      if (!$('#load-' + closest).hasClass('current')) {
        $('.load').animate({opacity: 0}, 'fast')
        $('.load').removeClass('current')
        $('#load-' + closest).animate({opacity: 1}, 'fast')
        $('#load-' + closest).addClass('current')
      }
    } else {

    }

    if ($('#keep-going').parent().hasClass('current')) {
      $('#keep-going').css({cursor: 'pointer'})
    } else {
      $('#keep-going').css({cursor: 'default'})
    }
    window.requestAnimationFrame(update)
  }
  update()
})
