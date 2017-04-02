(function() {
  var $, Hex;

  $ = require('jquery');

  Hex = require('./Hex');

  module.exports = (function() {
    function _Class(selector, size) {
      var col, i, j, k, l, m, n, ref, ref1, ref2, ref3, root, row;
      this.selector = selector;
      this.size = size != null ? size : 11;
      this.state = [];
      for (i = k = 0, ref = this.size; 0 <= ref ? k < ref : k > ref; i = 0 <= ref ? ++k : --k) {
        this.state[i] = [];
        for (j = l = 0, ref1 = this.size; 0 <= ref1 ? l < ref1 : l > ref1; j = 0 <= ref1 ? ++l : --l) {
          this.state[i][j] = new Hex({
            x: i,
            y: j,
            value: Math.round(Math.random(1)) ? 'blue' : Math.round(Math.random(1)) ? 'red' : 'neutral'
          });
        }
      }
      root = $(this.selector);
      for (i = m = 0, ref2 = this.size; 0 <= ref2 ? m < ref2 : m > ref2; i = 0 <= ref2 ? ++m : --m) {
        root.append(row = $('<div class="hex row"></div>'));
        for (j = n = 0, ref3 = this.size; 0 <= ref3 ? n < ref3 : n > ref3; j = 0 <= ref3 ? ++n : --n) {
          row.append(col = '<div class="hex cell"></div>');
        }
      }
    }

    _Class.prototype.update = function() {
      var hex, i, j, k, l, len, len1, ref, ref1, results, row, value;
      i = j = 0;
      ref = $('.hex.row');
      results = [];
      for (k = 0, len = ref.length; k < len; k++) {
        row = ref[k];
        ref1 = $(row).children();
        for (l = 0, len1 = ref1.length; l < len1; l++) {
          hex = ref1[l];
          value = this.state[i][j].value;
          $(hex).removeClass('neutral');
          $(hex).removeClass('red');
          $(hex).removeClass('blue');
          $(hex).addClass(value);
          j++;
        }
        j = 0;
        results.push(i++);
      }
      return results;
    };

    return _Class;

  })();

}).call(this);
