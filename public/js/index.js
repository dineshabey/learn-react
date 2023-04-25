"use strict";

var view = /*#__PURE__*/React.createElement("div", {
  style: {
    color: "blue"
  }
}, "ES6 Functions");
console.log("---------- ES6 Features :- Functions -----------");
var myFunction = function myFunction(myAvg) {
  console.log(myAvg);
};

// const myNextFunctions = (myPara) => {
//   let { fName, lName } = myPara;
//   console.log(fName);
//   console.log(lName);
// };

// const myObject = { fName: "Charith", lName: "Dinesh" };

// myNextFunctions(myObject);

myFunction({
  fName: "dinesh",
  lName: "Abeysinghe"
});
var appDiv = document.getElementById("app");
var root = ReactDOM.createRoot(appDiv);
root.render(view);

//# sourceMappingURL=index.js.map