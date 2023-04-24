const view = <div style={{ color: "red" }}> Hi </div>;

const student = [{ name: "dinesh", name: "roshan" }];
let username = "Dinesh";
let regNo = "R122321";
let msg = regNo + "" + username;
let msg2 = `${regNo} ${username}`; //ES6 concat
let arr = ["A", "B", "C", "D", "E", "F"];

for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log(element);
}

//for in loop - ES6
console.log("============= ES6 for in loop ==========");

for (let index in arr) {
  console.log(arr[index]);
}

console.log("============= ES6 for-in-object =====");

const user = { name: "Dinesh", skill: "react" };

for (let key in user) {
  console.log(key, user[key]);
}

console.log("============= ES6 for-of =====");

for (let val of arr) {
  console.log(val);
}

console.log("============= ES6 for-of usages =====");

let myWord = "React is my life";
for (let val of myWord) {
  console.log(val);
}

console.log("============= ES6 deafault parameters =====");

function welcome(user = "Guest") {
  return `Hello ${user} !`;
}

console.log(welcome("Dinesh"));

console.log("============= ES6 object ==========");

const newStudent = { name: "Dinesh", regno: "R45454" };

// let maths = 39;
// let alMaths;

// alMaths = maths;

// console.log('maths',maths);
// console.log('alMaths',alMaths);

// const alStudent = {};
// Object.assign(alStudent,student);

// let alStudent;
// alStudent = student;

let developer = { skills: "React", project: "Class App" };
let developerStudent = {};
Object.assign(developerStudent, newStudent, developer);
console.log(developerStudent);

// console.log('student',student);
// console.log('alStudent',alStudent);

console.log(msg);
console.log(msg2);

console.log(student);

const appDiv = document.getElementById("app");
const root = ReactDOM.createRoot(appDiv);
root.render(view);
