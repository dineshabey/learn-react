"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
console.log("---------- ES6 Features :- Functions object Spread operator )-----------");
var userName = {
  fName: "Radika",
  lName: "Dilanka"
};
var cource = {
  cName: "React",
  cNo: "1235"
};
var address = {
  city: "Anamaduwa",
  street: "Kalaniya",
  postalCode: "454656"
};
var fullDetails = _objectSpread(_objectSpread(_objectSpread({}, userName), cource), address);
console.log(fullDetails);
console.log("---------- ES7 Features :- key,val)-----------");
var ingedients = {
  egs: 4,
  lemon: 5,
  sugar: "500g",
  butter: "1kg"
};
console.log(Object.keys(ingedients));
console.log(Object.values(ingedients));
console.log(Object.entries(ingedients));
var appDiv = document.getElementById("app");
var root = ReactDOM.createRoot(appDiv);
root.render(view);

//# sourceMappingURL=index.js.map