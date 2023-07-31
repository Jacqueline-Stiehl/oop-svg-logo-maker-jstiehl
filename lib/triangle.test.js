const Triangle = require("./triangle.js");

describe("Test of Triangle", () => {
  describe("Instantiate an object successfully", () => {
    it("should create an object with polygon points=150, 18 244, 182 56, 182 and fill color is blue", () => {
      const testTriangle = new Triangle("blue", "abc", "pink");
      expect(testTriangle.render()).toEqual(
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="pink">abc</text></svg>'
      );
    });
  });
});