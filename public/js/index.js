"use strict";

var sample = /*#__PURE__*/React.createElement("div", null, "hifssas", /*#__PURE__*/React.createElement("hr", null));

//basic function
function validNameOfBasicFunction(a, b, c) {
  console.log(arguments);
  return a + b + c;
}
validNameOfBasicFunction(10, 20, 30);

//function expression / anonymous functions

var functionExpression = function functionExpression() {
  console.log("work anonymus function expression");
};
functionExpression();
(function () {
  console.log("Anonymus function working");
})();
var numbersArray = [10, 20, 30, 40, 50, 60, 70];

// function mapInner(element, index) {
//   // console.log(element);
//   console.log("index = " + index + " element = " + element);
// }

numbersArray.map(function (element, index) {
  console.log("index = " + index + " element = " + element);
});
var appDiv = document.getElementById("app");
var root = ReactDOM.createRoot(appDiv);
root.render(sample);
