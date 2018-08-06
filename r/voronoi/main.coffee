#INIT
point_count = 20
size_x = 2000
size_y = 1600

chance = new Chance(Math.random())

rgb = (r, g, b)->
  return "rgb(#{r}, #{g}, #{b})"

dist = (p1, p2) ->
  [a, b] = [p1?.x - p2?.x, p1?.y - p2?.y]
  Math.sqrt Math.pow(a, 2) + Math.pow(b, 2)

draw = (type)->

  #Get canvas context
  canvas = document.getElementById 'main'
  ctx = canvas.getContext('2d')

  #Define points
  points = []

  for i in [0...point_count]
    points[i] =
      x: chance.random()*size_x
      y: chance.random()*size_y
      col: 20 + chance.random()*210


  #draw
  for point in points
    ctx.fillRect point.x, point.y, 4, 4

  for i in [0..size_x]
    for j in [0..size_y]
      d = 10000000
      saved = undefined
      for point in points
        if d > dist point, {x: i, y: j}
          d = dist point, {x: i, y: j}
          saved = point
      if type is "r"
        ctx.fillStyle = rgb saved.col|0, 255, 255
      if type is "g"
        ctx.fillStyle = rgb 255,saved.col|0, 255
      if type is "b"
        ctx.fillStyle = rgb 255, 255, saved.col|0
      ctx.fillRect i, j, 1, 1

draw(["r", "g", "b"][(chance.random()*2)|0])
