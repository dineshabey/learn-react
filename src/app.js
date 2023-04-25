const view = <div style={{ color: "red" }}> Es6 Features </div>;

const results = [30, 50, 80];

let maths = results[0];
let chemistry = results[1];
let bio = results[2];

console.log("maths", maths);
console.log("chemistry", chemistry);
console.log("bio", bio);

console.log("---------- ES6 Features :- Array destructuring -----------");

let [math1, chem1, bio1] = results;

console.log("maths", math1);
console.log("chemistry", chem1);
console.log("bio", bio1);

console.log("---------- ES6 Features :- Variyabale slaping -----------");

let width = 100;
let height = 200;

console.log("-------- Normal process -----------");

let tem = width;
width = height;
height = tem;

console.log("width", width);
console.log("height", height);

console.log("-------- ES6 process -----------");

[width, height] = [height, width];

console.log("width", width);
console.log("height", height);

console.log("---------- ES6 Features :- objet destruturing -----------");

const student = { Fname: "Dinesh", Lname: "Abeysinghe" };

let firstName = student.Fname;
let lastName = student.Lname;

console.log("Last name :- ", firstName);
console.log("First name :- ", firstName);

console.log("-------- ES6 process -----------");

let { Fname, Lname } = student;

console.log("Last name :- ", Fname);
console.log("First name :- ", Lname);

const appDiv = document.getElementById("app");
const root = ReactDOM.createRoot(appDiv);
root.render(view);
