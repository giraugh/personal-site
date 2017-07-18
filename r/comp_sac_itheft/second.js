/* global $ */
$(() => {
  window.goBack = () => {
    $('*').animate({
      opacity: 0
    }, 400, () => {
      window.location = 'index.html'
    })
  }

  $('*').animate({
    opacity: 1
  }, 400)
})
