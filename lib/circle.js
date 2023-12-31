class Circle {
  constructor(shapecolor, text, textcolor) {
    this.shapecolor = shapecolor;
    this.text = text;
    this.textcolor = textcolor;
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.shapecolor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text></svg>`;
  }
}

module.exports = Circle;
