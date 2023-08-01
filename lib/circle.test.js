const Circle = require("./circle.js");

describe("Test of Circle", () => {
  describe("Instantiate an object successfully", () => {
    it("should create circle with fill color blue, text of xyz and text color of pink", () => {
      const testCircle = new Circle("blue", "xyz", "pink");
      expect(testCircle.render()).toEqual(
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="pink">xyz</text></svg>'
      );
    });
  });
});
