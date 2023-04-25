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
var myNextFunctions = function myNextFunctions(_ref) {
  var fName = _ref.fName,
    lName = _ref.lName;
  //   let { fName, lName } = myPara;
  console.log(fName);
  console.log(lName);
};
var myObject = {
  fName: "Charith",
  lName: "Dinesh"
};
myNextFunctions(myObject);
console.log("---------- ES6 Features :- Functions arguments -----------");
var myArgumentFunc = function myArgumentFunc(a, b) {
  console.log("a", a);
  console.log("b", b);
  for (var _len = arguments.length, restParams = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    restParams[_key - 2] = arguments[_key];
  }
  console.log("rest param", restParams);
  restParams.forEach(function (val) {
    console.log(val);
  });
};
console.log("---------- ES5 Features :- Functions with array push / concat method -----------");
myArgumentFunc(10, 20, 30, 40);
var startNumber = [20, 30, 40];
var endNumber = [60, 70];
var _final = [10];
startNumber.forEach(function (val) {
  _final.push(val);
});
_final.push(50);
endNumber.forEach(function (val) {
  _final.push(val);
});
console.log(_final);
console.log("---------- ES6 Features :- Functions with array push / Spread operator )-----------");
var finalES6 = [10].concat(startNumber, [50], endNumber, [80]);
console.log(finalES6);
console.log("---------- ES6 Features :- Functions with array push / Spread operator )-----------");
var finalES6Arr = [10, startNumber, 50, endNumber, 80];
console.log(finalES6Arr);
var appDiv = document.getElementById("app");
var root = ReactDOM.createRoot(appDiv);
root.render(view);

//# sourceMappingURL=index.js.map