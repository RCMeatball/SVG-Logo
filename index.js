const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shape");
var shape;

const questions = [
  {
    type: "input",
    message: "Enter name for logo (Max 3 char.)",
    name: "Name",
    validate: (value) => {
      if (value.length <= 3) {
        return true;
      } else {
        return "3 characters max";
      }
    },
  },
  {
    type: "input",
    message: "What color do you want your text?",
    name: "TextColor",
  },
  {
    type: "list",
    message: "What shape do you want?",
    name: "Shape",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "input",
    message: "What color do you want your shape?",
    name: "ShapeColor",
  },
];

function init() {
    inquirer.prompt(questions).then((answer) => {
      if (answer.Shape === "Circle") {
        shape = new Circle(answer.ShapeColor, answer.Shape);
      } else if (answer.Shape === "Triangle") {
        shape = new Triangle(answer.ShapeColor, answer.Shape);
      } else {
        shape = new Square(answer.ShapeColor, answer.Shape);
      }
  
      var svgLogo = ``;
  
      fs.writeFile(`logo.svg`, svgLogo, () => {
        console.log("Logo created");
      });
    });
  }

init();
