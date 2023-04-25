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
var appDiv = document.getElementById("app");
var root = ReactDOM.createRoot(appDiv);
root.render(view);

//# sourceMappingURL=index.js.map