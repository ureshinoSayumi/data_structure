class Circle {
  constructor(red) {
    this.red = red;
  }
  getArea() {
    return this.red;
  }
}

let a = new Circle(10);
console.log(a.getArea()) 