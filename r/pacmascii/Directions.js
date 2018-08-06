class Directions {
	static QuantDir(dir) {
		let xm = 0
		let ym = 0
		switch (dir) {
			case 'right':
				xm = 1
				break
			case 'left':
				xm = -1
				break
			case 'up':
				ym = -1
				break
			case 'down':
				ym = 1
				break
		}
		return {xm, ym}
	}
	
	static ToDir({x, y}) {
		let dx = Math.sign(x)
		let dy = Math.sign(y)
		switch (true) {
			case dx === 0 && dy ===  1:
				return 'down'
			case dx === 0 && dy === -1:
				return 'up'
			case dy === 0 && dx ===  1:
				return 'right'
			case dy === 0 && dx === -1:
				return 'left'
		}
	}
	
	static Opposite(d) {
		switch (d) {
			case 'left':
				return 'right'
			case 'right':
				return 'left'
			case 'up':
				return 'down'
			case 'down':
				return 'up'
		}
	}
	
	static IsOpposite(d1, d2) {
		if (d1 === d2) {return false}
		switch (d1) {
			case 'right':
				return d2 === 'left'
			case 'left':
				return d2 === 'right'
			case 'up':
				return d2 === 'down'
			case 'down':
				return d2 === 'up'
		}
	}
}