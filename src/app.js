const view = <div style={{ color: "blue" }}>ES6 Functions</div>;

console.log("---------- ES6 Features :- Functions -----------");

const myFunction = (myAvg) => {
  console.log(myAvg);
};

myFunction({ fName: "dinesh", lName: "Abeysinghe" });

console.log("---------- ES6 Features :- Functions destructure-----------");

const myNextFunctions = ({ fName, lName }) => {
  //   let { fName, lName } = myPara;
  console.log(fName);
  console.log(lName);
};

const myObject = { fName: "Charith", lName: "Dinesh" };

myNextFunctions(myObject);

console.log("---------- ES6 Features :- Functions arguments -----------");

const myArgumentFunc = (a, b, ...restParams) => {
  console.log("a", a);
  console.log("b", b);
  console.log("rest param", restParams);
  restParams.forEach((val) => {
    console.log(val);
  });
};

console.log("---------- ES5 Features :- Functions with array push / concat method -----------");


myArgumentFunc(10, 20, 30, 40);

let startNumber = [20, 30, 40];
let endNumber = [60, 70];

let final = [10];

startNumber.forEach((val) => {
  final.push(val);
});

final.push(50);

endNumber.forEach((val) => {
  final.push(val);
});


console.log(final);

console.log("---------- ES6 Features :- Functions with array push / Spread operator )-----------");

const finalES6 = [10, ...startNumber, 50, ...endNumber, 80];

console.log(finalES6);



const appDiv = document.getElementById("app");
const root = ReactDOM.createRoot(appDiv);
root.render(view);
