"use strict";

var view = /*#__PURE__*/React.createElement("div", {
  style: {
    color: "red"
  }
}, " Es6 Features ");
var results = [30, 50, 80];
var maths = results[0];
var chemistry = results[1];
var bio = results[2];
console.log('maths', maths);
console.log('chemistry', chemistry);
console.log('bio', bio);
console.log('---------- ES6 Features :- Array destructuring -----------');
var math1 = results[0],
  chem1 = results[1],
  bio1 = results[2];
console.log('maths', math1);
console.log('chemistry', chem1);
console.log('bio', bio1);
console.log('---------- ES6 Features :- Variyabale slaping -----------');
var width = 100;
var height = 200;
console.log('--------Normal process-----------');
var tem = width;
width = height;
height = tem;
console.log('width', width);
console.log('height', height);
console.log('--------ES6 process-----------');
var _ref = [height, width];
width = _ref[0];
height = _ref[1];
console.log('width', width);
console.log('height', height);
var appDiv = document.getElementById("app");
var root = ReactDOM.createRoot(appDiv);
root.render(view);

//# sourceMappingURL=index.js.map