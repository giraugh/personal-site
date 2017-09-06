class Pacman {
	constructor(x, y) {
		this.x = x
		this.y = y
		this.closed = false
		this.direction = ''
		this.nextDirection = ''
		this.dotCount = 0
	}
	
	show(display) {
		display.draw(this.x, this.y, this.getChar(), 'yellow')
	}
	
	animate() {
		this.closed = !this.closed
	}
	
	onkeydown(key) {
		switch (key) {
			case 'ArrowRight':
				this.nextDirection = 'right'
				return true
				break
			case 'ArrowLeft':
				this.nextDirection = 'left'
				return true
				break
			case 'ArrowUp':
				this.nextDirection = 'up'
				return true
				break
			case 'ArrowDown':
				this.nextDirection = 'down'
				return true
				break
		}
	}
	
	updateDir(map) {
		let {xm, ym} = Directions.QuantDir(this.nextDirection)
		if (map.at(this.x + xm, this.y + ym) !== '#') {
			this.direction = this.nextDirection
		}
	}
	
	checkDead(ghosts) {
		for (let ghost of ghosts) {
			if (ghost.x == this.x && ghost.y == this.y) {
				if (ghost.scared) {
					ghost.x = ghost.home.x
					ghost.y = ghost.home.y
					ghost.scared = false
					ghost.exited = false
					ghost.paused = true
					setTimeout(()=>ghost.paused = false, 1000)
					ghost.init()
				} else {
					window.lives -= 1
					window.initGame()
					return true
				}
			}
		}
	}
	
	move(map, ghosts) {
		//Am i Dead?
		if (!this.checkDead(ghosts)) {
			//Move
			let {xm, ym} = Directions.QuantDir(this.direction)
			let tile = map.at(this.x + xm, this.y + ym)
			if (tile !== '#' && tile !== '"') {
				this.x += xm
				this.y += ym
				this.animate()
			}
			
			//How bout now?
			this.checkDead(ghosts)
		}
	
		//Wrap Around
		if (this.x < 0) this.x = 20
		if (this.x > 20) this.x = 0
		
		//Eat Dots
		if (map.at(this.x, this.y) === '.') {
			map.set(this.x, this.y, ' ')
			window.score += 10
			window.dotCount++
		}
		
		//Power
		if (map.at(this.x, this.y) === 'o') {
			map.set(this.x, this.y, ' ')
			window.score += 50
			window.power = 50
			window.dotCount++
			for (let ghost of ghosts) {
				ghost.scare()
			}
		}
	}
	
	getChar() {
		switch (this.direction) {
			case 'right':
				return this.closed ? '-' : '<'
				break
			case 'left':
				return this.closed ? '-' : '>'
				break
			case 'up':
				return this.closed ? '|' : 'V'
				break
			case 'down':
				return this.closed ? '|' : String.fromCharCode(923)
				break
		}
		return 'O'
	}
}