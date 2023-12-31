class Square {
  constructor(shapecolor, text, textcolor) {
    this.shapecolor = shapecolor;
    this.text = text;
    this.textcolor = textcolor;
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="35" width="150" height="150" fill="${this.shapecolor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text></svg>`;
  }
}

module.exports = Square;
