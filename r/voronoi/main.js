var chance, dist, draw, point_count, rgb, size_x, size_y;

point_count = 20;

size_x = 2000;

size_y = 1600;

chance = new Chance(Math.random());

rgb = function(r, g, b) {
  return "rgb(" + r + ", " + g + ", " + b + ")";
};

dist = function(p1, p2) {
  var a, b, ref;
  ref = [(p1 != null ? p1.x : void 0) - (p2 != null ? p2.x : void 0), (p1 != null ? p1.y : void 0) - (p2 != null ? p2.y : void 0)], a = ref[0], b = ref[1];
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
};

draw = function(type) {
  var canvas, ctx, d, i, j, k, l, len, m, point, points, ref, ref1, results, saved;
  canvas = document.getElementById('main');
  ctx = canvas.getContext('2d');
  points = [];
  for (i = k = 0, ref = point_count; 0 <= ref ? k < ref : k > ref; i = 0 <= ref ? ++k : --k) {
    points[i] = {
      x: chance.random() * size_x,
      y: chance.random() * size_y,
      col: 20 + chance.random() * 210
    };
  }
  for (l = 0, len = points.length; l < len; l++) {
    point = points[l];
    ctx.fillRect(point.x, point.y, 4, 4);
  }
  results = [];
  for (i = m = 0, ref1 = size_x; 0 <= ref1 ? m <= ref1 : m >= ref1; i = 0 <= ref1 ? ++m : --m) {
    results.push((function() {
      var len1, n, o, ref2, results1;
      results1 = [];
      for (j = n = 0, ref2 = size_y; 0 <= ref2 ? n <= ref2 : n >= ref2; j = 0 <= ref2 ? ++n : --n) {
        d = 10000000;
        saved = void 0;
        for (o = 0, len1 = points.length; o < len1; o++) {
          point = points[o];
          if (d > dist(point, {
            x: i,
            y: j
          })) {
            d = dist(point, {
              x: i,
              y: j
            });
            saved = point;
          }
        }
        if (type === "r") {
          ctx.fillStyle = rgb(saved.col | 0, 255, 255);
        }
        if (type === "g") {
          ctx.fillStyle = rgb(255, saved.col | 0, 255);
        }
        if (type === "b") {
          ctx.fillStyle = rgb(255, 255, saved.col | 0);
        }
        results1.push(ctx.fillRect(i, j, 1, 1));
      }
      return results1;
    })());
  }
  return results;
};

draw(["r", "g", "b"][(chance.random() * 2) | 0]);
