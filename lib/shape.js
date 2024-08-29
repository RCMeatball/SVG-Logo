class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="75" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="100" y="100" height="100" width="100" fill="${this.color}" />`
    }
}
class Triangle extends Shape {
    render() {
        return `<polygon points="105,0 300,300 0,300 fill="${this.color}" />`
    }
}

module.exports = { Circle, Square, Triangle}