const view = (
  <div style={{ color: "red" }}>
    <h2>This is ES6 Specifications</h2>
  </div>
);

class student {
  constructor(name,regNo) {
    this.name = name;
    this.regNo = regNo;
  }
}

const dinesh = new student('Dinesh','20');
console.log(dinesh);

const appDiv = document.getElementById("app");
const root = ReactDOM.createRoot(appDiv);
root.render(view);
