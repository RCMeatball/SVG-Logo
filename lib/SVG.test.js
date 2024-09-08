const index = require('../index.js');

describe("Render", () => {
    it('should render the logo', () => {
        const logo = <svg version="1.1"
         width="300" height="200"
         xmlns="http://www.w3.org/2000/svg">
  
        <rect x="100" y="100" height="100" width="100" fill="blue" />
  
        <text x="150" y="125" font-size="45" text-anchor="middle" fill="green">Logo</text>
        </svg>;

        const generate = {
            color: "green",
            ShapeColor: "blue",
            Shape: "Square",
            text: "Logo"
        };
        expect(index.Render(generate)).toEqual(logo)
    })
})