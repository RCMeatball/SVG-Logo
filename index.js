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
  
      var svgLogo = `<svg version="1.1"
         width="300" height="200"
         xmlns="http://www.w3.org/2000/svg">
  
        ${shape.render()}
  
        <text x="150" y="125" font-size="45" text-anchor="middle" fill="${answer.TextColor}">${answer.Name}</text>
        </svg>`;
  
      fs.writeFile(`logo.svg`, svgLogo, () => {
        console.log("Logo created");
      });
    });
  }

init();
