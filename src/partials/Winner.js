import { SVG_NS } from '../settings';

export default class Winner {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  render(svg, winner) {
    let back = document.createElementNS(SVG_NS, 'rect');
    back.setAttributeNS(null, 'width', 412);
    back.setAttributeNS(null, 'height', 56);
    back.setAttributeNS(null, 'x', '50');
    back.setAttributeNS(null, 'y', '100');
    back.setAttributeNS(null, 'stroke', '#fff');
    back.setAttributeNS(null, 'stroke-width', '3');
    back.setAttributeNS(null, 'fill', 'red');
    svg.appendChild(back);

    let text = document.createElementNS(SVG_NS, 'text');
    text.setAttributeNS(null, 'x', this.x);
    text.setAttributeNS(null, 'y', this.y);
    text.setAttributeNS(null, 'fill', '#fff');
    text.setAttributeNS(null, 'font-size', this.size);
    text.setAttributeNS(null, 'font-family', 'Silkscreen Web, monotype');
    text.textContent = winner;
    svg.appendChild(text);
  }
}