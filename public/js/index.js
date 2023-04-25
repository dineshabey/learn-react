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
myFunction({
  fName: "dinesh",
  lName: "Abeysinghe"
});
console.log("---------- ES6 Features :- Functions destructure-----------");
var myNextFunctions = function myNextFunctions(myPara) {
  var fName = myPara.fName,
    lName = myPara.lName;
  console.log(fName);
  console.log(lName);
};
var myObject = {
  fName: "Charith",
  lName: "Dinesh"
};
myNextFunctions(myObject);
var appDiv = document.getElementById("app");
var root = ReactDOM.createRoot(appDiv);
root.render(view);

//# sourceMappingURL=index.js.map