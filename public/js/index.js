"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var view = /*#__PURE__*/React.createElement("div", {
  style: {
    color: "red"
  }
}, " Hi ");
var student = [_defineProperty({
  name: "dinesh"
}, "name", "roshan")];
var username = "Dinesh";
var regNo = "R122321";
var msg = regNo + "" + username;
var msg2 = "".concat(regNo, " ").concat(username); //ES6 concat
var arr = ["A", "B", "C", "D", "E", "F"];
for (var index = 0; index < arr.length; index++) {
  var element = arr[index];
  console.log(element);
}

//for in loop - ES6
console.log("============= ES6 for in loop ==========");
for (var _index in arr) {
  console.log(arr[_index]);
}
console.log("============= ES6 for-in-object =====");
var user = {
  name: "Dinesh",
  skill: "react"
};
for (var key in user) {
  console.log(key, user[key]);
}
console.log("============= ES6 for-of =====");
for (var _i = 0, _arr = arr; _i < _arr.length; _i++) {
  var val = _arr[_i];
  console.log(val);
}
console.log("============= ES6 for-of usages =====");
var myWord = "React is my life";
var _iterator = _createForOfIteratorHelper(myWord),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var _val = _step.value;
    console.log(_val);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
console.log("============= ES6 deafault parameters =====");
function welcome() {
  var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Guest";
  return "Hello ".concat(user, " !");
}
console.log(welcome("Dinesh"));
console.log("============= ES6 object ==========");
var newStudent = {
  name: "Dinesh",
  regno: "R45454"
};

// let maths = 39;
// let alMaths;

// alMaths = maths;

// console.log('maths',maths);
// console.log('alMaths',alMaths);

// const alStudent = {};
// Object.assign(alStudent,student);

// let alStudent;
// alStudent = student;

var developer = {
  skills: "React",
  project: "Class App"
};
var developerStudent = {};
Object.assign(developerStudent, newStudent, developer);
console.log(developerStudent);

// console.log('student',student);
// console.log('alStudent',alStudent);

console.log(msg);
console.log(msg2);
console.log(student);
var appDiv = document.getElementById("app");
var root = ReactDOM.createRoot(appDiv);
root.render(view);

//# sourceMappingURL=index.js.map