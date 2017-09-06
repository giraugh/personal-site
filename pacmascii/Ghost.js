/*
http://gameinternals.com/post/2072558330/understanding-pac-man-ghost-behavior
*/

let dist = (a, b) => 
	Math.sqrt(
		Math.pow((b.x - a.x), 2)
		+
		Math.pow((b.y - a.y), 2)
	)

class Ghost {
	constructor(x, y, colour) {
		this.x = x
		this.y = y
		this.home = {
			x: x,
			y: y
		}
		this.colour = colour
		this.direction = 'right'
		this.released = false
		this.exited = false
		this.delay = 2
		this.scatter = false
		this.scared = false
		this.paused = false
		this.target = {
			x: x,
			y: y,
		}
		
		//Init based on colour
		this.init()
	}
	
	init () {
		switch (this.colour) {
			case 'red':
				this.released = true
				this.exited = true
			case 'pink':
				this.released = true
				this.direction = 'up'
				break
			case 'blue':
				this.direction = 'right'
			case 'orange':
				this.direction = 'left'
		}
	}
	
	show(display) {
		display.draw(
			this.x,
			this.y,
			'@',
			this.scared
			 ? time % 4 == 0 ? 'blue' : 'white'
			 : this.drawColour()
		)
	}
	
	move(map) {
		if (this.released && !this.paused) {
			let {xm, ym} = Directions.QuantDir(this.direction)
			let tile = map.at(this.x + xm, this.y + ym)
			if (tile !== '#') {
				this.x += xm
				this.y += ym
			}
		}
		
		//Wrap Around
		if (this.x < 0) this.x = 20
		if (this.x > 20) this.x = 0
	}
	
	reverse() {
		this.direction = Directions.Opposite(this.direction)
	}
	
	scare() {
		this.scared = true
		this.reverse()
	}
	
	update(pacman, ghosts) {
		let shouldScatter = time % 100 > 80
		if (this.scatter !== shouldScatter) {
			this.scatter = shouldScatter
			this.reverse()
		}
		
		switch (this.colour) {
			case 'red':
				if (this.scatter)
					this.target = {
						x: 23,
						y: -23,
					}
				else
					this.target = pacman
				
				if (score > 1200 && time % 100 > 40 && !this.scared) {
					this.delay = 1
				} else {
					this.delay = 2
				}
				break
			case 'pink':
				if (this.scatter) {
					this.target = {
						x: -23,
						y: -23,
					}
				} else {
					let {xm, ym} = Directions.QuantDir(pacman.direction)
					this.target = {
						x: pacman.x + (xm * 4),
						y: pacman.y + (ym * 4),
					}
				}
			case 'blue':
				if (!this.exited) {
					if (this.x == 10 && this.y == 9) this.direction = 'up'
				}
				if (window.dotCount > 30) {
					this.released = true
				}
				if (this.scatter) {
					this.target = {
						x: 23,
						y: 23,
					}
				} else {
					let {xm, ym} = Directions.QuantDir(pacman.direction)
					let blinky = ghosts.reduce((a, b) => a.colour === 'red' ? a : b)
					let fp = {
						x: pacman.x + (xm * 2),
						y: pacman.y + (ym * 2),
					}
					let d = {
						x: fp.x - blinky.x,
						y: fp.y - blinky.y,
					}
					this.target = {
						x: fp.x + (d.x * 2),
						y: fp.y + (d.y * 2),
					}
				}
			case 'orange':
				if (!this.exited) {
					if (this.x == 10 && this.y == 9) this.direction = 'up'
				}
				if (window.dotCount > 60) {
					this.released = true
				}
				if (this.scatter) {
					this.target = {
						x: -23,
						y: 23,
					}
				} else {
					let d = dist(this, pacman)
					if (d > 8) {
						this.target = pacman
					} else {
						this.target = {
							x: -23,
							y: 23,
						}
					}
					
				}
		}
		
		if (this.scared) {
			this.target = pacman
		}
		
		if (this.x == 10 && this.y == 7) {
			this.exited = true
		}
	}
	
	ai(map) {
		if (this.released && this.exited) {	
			//Which directions can i go?
			let possible = []
			for (let i of [-1, 0, 1]) {
				for (let j of [-1, 0, 1]) {
					if (!(i === 0 && j === 0)) {
						let xx = this.x + i
						let yy = this.y + j
						let tile = map.at(xx, yy)
						if (tile !== '#' && tile !== '"') {
							possible.push({
								x: i,
								y: j,
							})
						}
					}
				}
			}
			
			if (possible.length > 0) {
				let best = possible
					.filter((d) => d.x === 0 || d.y === 0)
					.filter((d) => {
						return !Directions.IsOpposite(
							this.direction,
							Directions.ToDir(d)
						)
					})
					.map((d) => ({x: d.x + this.x, y: d.y + this.y}))
				    .reduce((a, b) => {
						return this.scared
							? dist(b, this.target) > dist(a, this.target)
								? b
								: a
							: dist(b, this.target) < dist(a, this.target)
								? b
								: a
					})
				let rel = {
					x: best.x - this.x,
					y: best.y - this.y
				}
				let bdir = Directions.ToDir(rel)
				if (bdir) {
					this.direction = bdir
				}
			}
			
			if (map.at(this.x, this.y) === '"') {
				this.out = true
				console.log(this.colour + ' is out')
				this.direction = 'right'
			}
		}
	}
	
	drawColour() {
		switch (this.colour) {
			case 'red':
				return '#f23700'
				break
			case 'orange':
				return '#fabe58'
				break
			case 'blue':
				return '#64e0cc'
				break
			case 'pink':
				return '#f9c1d3'
				break
		}
	}
}