targetBlank = ()->
  # remove subdomain of current site's url and setup regex
  internal = window.location.href.replace "www.", ""
  internal = new RegExp internal, "i"

  for el in document.getElementsByTagName 'a' # get every anchor
    href = el.host # set the host of each link
    if not internal.test(href) # make sure the href doesn't contain current site's host
      el.setAttribute 'target', '_blank' # if it doesn't, set attributes

targetBlank()
