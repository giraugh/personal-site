var targetBlank;

targetBlank = function() {
  var el, href, i, internal, len, ref, results;
  internal = window.location.href.replace("www.", "");
  internal = new RegExp(internal, "i");
  ref = document.getElementsByTagName('a');
  results = [];
  for (i = 0, len = ref.length; i < len; i++) {
    el = ref[i];
    href = el.host;
    if (!internal.test(href)) {
      results.push(el.setAttribute('target', '_blank'));
    } else {
      results.push(void 0);
    }
  }
  return results;
};

targetBlank();
