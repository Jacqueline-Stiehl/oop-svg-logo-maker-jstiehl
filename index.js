const fs = require("fs");
const inquirer = require("inquirer");
const Circle = require("./lib/circle.js");
const Square = require("./lib/square.js");
const Triangle = require("./lib/triangle.js");

inquirer
  .prompt([
    {
      type: "input",
      message: "Please select up to three characters for your logo.",
      name: "text",
      validate: function (data) {
        return data.length <= 3;
      },
    },
    {
      type: "input",
      message: "Please select a color for the text of your logo.",
      name: "textcolor",
    },
    {
      type: "list",
      message: "Select a shape for your logo.",
      name: "logoshape",
      choices: ["circle", "square", "triangle"],
      default: "Use arrow key",
    },
    {
      type: "input",
      message: "Please select a color for your shape.",
      name: "shapecolor",
    },
  ])
  .then((response) => {
    if (response.logoshape === "circle") {
      const circleObj = new Circle(
        response.shapecolor,
        response.text,
        response.textcolor
      );
      fs.writeFile("logo.svg", circleObj.render(), (err) =>
        err ? console.error(err) : console.log("Generated logo.svg")
      );
    } else if (response.logoshape === "square") {
      const squareObj = new Square(
        response.shapecolor,
        response.text,
        response.textcolor
      );
      fs.writeFile("logo.svg", squareObj.render(), (err) =>
        err ? console.error(err) : console.log("Generated logo.svg")
      );
    } else if (response.logoshape === "triangle") {
      const triangleObj = new Triangle(
        response.shapecolor,
        response.text,
        response.textcolor
      );
      fs.writeFile("logo.svg", triangleObj.render(), (err) =>
        err ? console.error(err) : console.log("Generated logo.svg")
      );
    }
  });
