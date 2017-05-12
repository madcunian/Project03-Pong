import { SVG_NS, KEYS } from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';

export default class Game {

	constructor(element, width, height) {
		this.width = width;
		this.height = height;
	
		this.gameElement = document.getElementById(element);

		this.board = new Board(this.width, this.height);

		this.paddleWidth = 8;
		this.paddleHeight = 56;
		this.padding = 10;
		this.player1 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.padding,
			(this.height - this.paddleHeight)/2,
			KEYS.a,
			KEYS.z
			);
		this.player2 = new Paddle(
			this.height, 
			this.paddleWidth,
			this.paddleHeight,
			(this.width - this.paddleWidth - this.padding),
			(this.height - this.paddleHeight)/2,
			KEYS.up,
			KEYS.down
			);

		document.addEventListener('keydown', event => {
			if (event.key === KEYS.spaceBar) {
				this.pause = !this.pause;
			}
		})

		this.radius = 8;
		this.ball = new Ball(
			this.radius,
			this.width,
			this.height,
			// this.boardWidth,
			// this.boardHeight,
			// this.direction
		);
	}

	render() {

		if (this.pause === true) {
			return;
		}

		this.gameElement.innerHTML = '';

		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);
		this.board.render(svg);
		this.player1.render(svg);
		this.player2.render(svg);
		this.ball.render(svg, this.player1, this.player2);
	}

}