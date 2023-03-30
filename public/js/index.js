"use strict";

var sample = /*#__PURE__*/React.createElement("div", null, "hifssas", /*#__PURE__*/React.createElement("hr", null));

//basic function
function validNameOfBasicFunction(a, b, c) {
  console.log(arguments[0]);
  return a + b + c;
}
validNameOfBasicFunction(10, 20, 30);

//function expression / anonymous functions

var functionExpression = function functionExpression() {
  console.log('work anonymus function expression');
};
functionExpression();
(function () {
  console.log('Anonymus function working');
})();
var appDiv = document.getElementById("app");
var root = ReactDOM.createRoot(appDiv);
root.render(sample);
