import { SVG_NS, KEYS, PADDLE, SCORE, WINNER } from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';
import Winner from './Winner';

export default class Game {

	constructor(element, width, height) {
		this.width = width;
		this.height = height;
	
		this.gameElement = document.getElementById(element);

		this.board = new Board(this.width, this.height);
		
		this.player1Score = new Score(this.width/2 - 50, SCORE.topDistance, SCORE.size);
		this.player2Score = new Score(this.width/2 + 30, SCORE.topDistance, SCORE.size);

		this.player1 = new Paddle(
			this.height,
			PADDLE.width,
			PADDLE.height,
			PADDLE.padding,
			(this.height - PADDLE.height)/2,
			KEYS.a,
			KEYS.z
			);
		this.player2 = new Paddle(
			this.height, 
			PADDLE.width,
			PADDLE.height,
			(this.width - PADDLE.width - PADDLE.padding),
			(this.height - PADDLE.height)/2,
			KEYS.up,
			KEYS.down
			);

		this.winner = new Winner(WINNER.distance, WINNER.topDistance, WINNER.size);

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

		this.player1Score.render(svg, this.player1.score);
		this.player2Score.render(svg, this.player2.score);

		let player1Win = 'Player 1 won!';
    let player2Win = 'Player 2 won!';
		
    if (this.player1.score === 10) {
      this.winner.render(svg, player1Win);
			this.pause();
    } else if (this.player2.score === 10) {
      this.winner.render(svg, player2Win);
			this.pause();
    }
	}

}