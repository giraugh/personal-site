window.lives = 3
window.score = 0
window.dotCount = 0

window.onload = () => {
	let size = Math.min(
		document.body.clientWidth / 100,
		document.body.clientHeight / 100
	)
	
	//Create Display
	let display = new ROT.Display({
		width: 21,
		height: 23,
		forceSquareRatio: true,
		fontSize: size * 3.5
	})
	document.getElementById('game').append(display.getContainer())
	
	
	let pacman, 
		ghosts,
		map;
		
	//Make Map
	map = new Map()
		
	window.initGame = () => {
		if (lives <= 0) {
			map = new Map()
			window.time = 0
			window.score = 0
			window.dotCount = 0
			window.lives = 3
		}
		
		//Make Pacman
		pacman = new Pacman(10, 15)
		
		//Make Ghosts
		ghosts = [
			new Ghost(10, 7, 'red'),
			new Ghost(9, 9, 'blue'),
			new Ghost(10, 9, 'pink'),
			new Ghost(11, 9, 'orange'),
		]
		
		//Starting Score & Lives & Time
		window.time = 0
		
		//Power timer
		window.power = -1
	}
	
	initGame()

	window.onkeydown = (e)=> {
		let cancel = pacman.onkeydown(e.key)
		if (cancel) e.preventDefault()
	}
	
	
	window.updateGame = ()=> {
		//Clear Display
		display.clear()
		
		//Draw Map
		map.show(display)
		
		//Draw n' Update Ghosts
		for (let ghost of ghosts) {
			if (time % ghost.delay == 0) {
				ghost.update(pacman, ghosts)
				ghost.ai(map)
				ghost.move(map)
			}
			ghost.show(display)
		}
		
		//Update 'n draw Pacman
		pacman.updateDir(map)
		pacman.move(map, ghosts)
		pacman.show(display)
		
		
		
		//Score
		display.drawText(21 - 4, 22, window.score.toString())
		
		//Lives
		for (i = 0;i<lives;i++) {
			display.draw(i + 1, 22, '<', 'yellow')
		}
		
		if (dotCount == 149) {
			map = new Map()
			
			ghosts = [
				new Ghost(10, 7, 'red'),
				new Ghost(9, 9, 'blue'),
				new Ghost(10, 9, 'pink'),
				new Ghost(11, 9, 'orange'),
			]
			
			for (let ghost of ghosts) {
				ghost.released = true
			}
			
			pacman = new Pacman(10, 15)
			dotCount = 0
			score += 1000
		}
		
		//Time
		time++
		
		//Power reduction
		if (window.power > 0) {
			window.power -= 1
			if (window.power == 0) {
				window.power = -1
				for (let ghost of ghosts) {
					ghost.scared = false
				}
			}
		}
		
		//Again!
		setTimeout(updateGame, 100)
	}
	updateGame()
}