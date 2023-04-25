const view = <div style={{ color: "red" }}> Es6 Features </div>;


const results = [30,50,80];

let maths = results[0];
let chemistry = results[1];
let bio = results[2];

console.log('maths',maths);
console.log('chemistry',chemistry);
console.log('bio',bio);

console.log('---------- ES6 Features :- Array destructuring -----------');

let [math1,chem1,bio1] = results;

console.log('maths',math1);
console.log('chemistry',chem1);
console.log('bio',bio1);




const appDiv = document.getElementById("app");
const root = ReactDOM.createRoot(appDiv);
root.render(view);
