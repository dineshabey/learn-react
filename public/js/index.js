"use strict";

var sample = /*#__PURE__*/React.createElement("div", null, "hifssas", /*#__PURE__*/React.createElement("hr", null));

//basic function
function validNameOfBasicFunction(a, b, c) {
  console.log(arguments[0]);
  return a + b + c;
}
validNameOfBasicFunction(10, 20, 30);

//function expression

var appDiv = document.getElementById("app");
var root = ReactDOM.createRoot(appDiv);
root.render(sample);
