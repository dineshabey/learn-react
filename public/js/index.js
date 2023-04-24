"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
console.log('============= ES6 for loop');
for (var _index in arr) {
  console.log(arr[_index]);
}
console.log(msg);
console.log(msg2);
console.log(student);
var appDiv = document.getElementById("app");
var root = ReactDOM.createRoot(appDiv);
root.render(view);

//# sourceMappingURL=index.js.map