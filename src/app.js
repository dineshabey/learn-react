const view = (
  <div style={{ color: "red" }}>
    <h2>This is ES6 Specifications</h2>
  </div>
);

class student {
  constructor(name, regNo) {
    this.name = name;
    this.regNo = regNo;
  }
}

const dinesh = new student("Dinesh", "20");
const dinesh1 = { name: "Dinesh", regNo: "20" };

console.log(dinesh);
console.log(dinesh1);

const reactStudent = class student {
  constructor(name, regNo) {
    this.name = name;
    this.regNo = regNo;
  }
};

const rs = new reactStudent("Radika", "R3000");

console.log(rs);

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  claArea() {
    return this.height * this.width;
  }
  get area() {
    return this.height * this.width;
  }
  set reactColor(color) {
    if (color === "red") {
      // this.color = color;
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }
}

let myVal = new Rectangle(10, 10);

// myVal.color = 'red';

myVal.reactColor = "red";

console.log(myVal);

console.log("Cal-area", myVal.claArea());

console.log("Get-area", myVal.area);

const appDiv = document.getElementById("app");
const root = ReactDOM.createRoot(appDiv);
root.render(view);
