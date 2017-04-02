(function() {
  var Grid;

  Grid = require('./Grid');

  if (!window.grid) {
    window.grid = new Grid('#hex-grid');
    window.grid.update();
  }

}).call(this);
