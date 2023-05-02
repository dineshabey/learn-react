"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var view = /*#__PURE__*/React.createElement("div", {
  style: {
    color: "red"
  }
}, /*#__PURE__*/React.createElement("h2", null, "This is ES6 Specifications"));
var student = /*#__PURE__*/_createClass(function student(name, regNo) {
  _classCallCheck(this, student);
  this.name = name;
  this.regNo = regNo;
});
var dinesh = new student("Dinesh", "20");
var dinesh1 = {
  name: "Dinesh",
  regNo: "20"
};
console.log(dinesh);
console.log(dinesh1);
var reactStudent = /*#__PURE__*/_createClass(function student(name, regNo) {
  _classCallCheck(this, student);
  this.name = name;
  this.regNo = regNo;
});
var rs = new reactStudent("Radika", "R3000");
console.log(rs);
var Rectangle = /*#__PURE__*/function () {
  function Rectangle(width, height) {
    _classCallCheck(this, Rectangle);
    this.width = width;
    this.height = height;
  }
  _createClass(Rectangle, [{
    key: "claArea",
    value: function claArea() {
      return this.height * this.width;
    }
  }, {
    key: "area",
    get: function get() {
      return this.height * this.width;
    }
  }, {
    key: "reactColor",
    set: function set(color) {
      if (color === "red") {
        // this.color = color;
        this.isActive = false;
      } else {
        this.isActive = true;
      }
    }
  }]);
  return Rectangle;
}();
var myVal = new Rectangle(10, 10);

// myVal.color = 'red';

myVal.reactColor = "red";
console.log(myVal);
console.log("Cal-area", myVal.claArea());
console.log("Get-area", myVal.area);
var appDiv = document.getElementById("app");
var root = ReactDOM.createRoot(appDiv);
root.render(view);

//# sourceMappingURL=index.js.map