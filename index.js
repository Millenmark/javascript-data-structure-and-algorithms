class Cookie {
  constructor(color) {
    this._color = color;
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
  }

  sayHello() {
    return `Hello Cookie ${this.color}`;
  }
}

let cookieOne = new Cookie("green");

cookieOne.color = "red";

console.log(cookieOne.sayHello());
