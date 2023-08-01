const Square = require("./square.js");

describe("Test of Square", () => {
  describe("Instantiate an object successfully", () => {
    it("should create a square with fill color orange, text of jms and text color blue", () => {
      const testSquare = new Square("orange", "jms", "blue");
      expect(testSquare.render()).toEqual(
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="35" width="150" height="150" fill="orange"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">jms</text></svg>'
      );
    });
  });
});
