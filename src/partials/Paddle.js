import { SVG_NS } from '../settings';

export default class Paddle {
  constructor(boardHeight, width, height, x, y) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;
  }
  render(svg) {
    const rect = document.createElementNS(SVG_NS, 'rect');
    // rect2.setAttributeNS(null, 'boardHeight', this.boardHeight);
    rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'x', this.x);
    rect.setAttributeNS(null, 'y', this.y);
    rect.setAttributeNS(null, 'speed', this.speed);
    rect.setAttributeNS(null, 'score', this.score);
    rect.setAttributeNS(null, 'fill', '#fff');
    svg.appendChild(rect);

  }
}