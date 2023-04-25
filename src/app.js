const view = <div style={{ color: "blue" }}>ES6 Functions</div>;

console.log("---------- ES6 Features :- Functions -----------");

const myFunction = (myAvg) => {
  console.log(myAvg);
};

// const myNextFunctions = (myPara) => {
//   let { fName, lName } = myPara;
//   console.log(fName);
//   console.log(lName);
// };

// const myObject = { fName: "Charith", lName: "Dinesh" };

// myNextFunctions(myObject);

myFunction({ fName: "dinesh", lName: "Abeysinghe" });

const appDiv = document.getElementById("app");
const root = ReactDOM.createRoot(appDiv);
root.render(view);
