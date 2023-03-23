"use strict";

var studentsArray = [{
  name: "Tharushi Nethmini",
  regNo: "R122321",
  email: "thru@gmail.com",
  marks: "50"
}, {
  name: "Dinesh Abeyrathna",
  regNo: "R172321",
  email: "dinesh@gmail.com",
  marks: "70"
}];
var student1 = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, " Name : ", studentsArray[0].name, " "), /*#__PURE__*/React.createElement("p", null, "Reg No : ", studentsArray[0].regNo), /*#__PURE__*/React.createElement("p", null, "Email : ", studentsArray[0].email), /*#__PURE__*/React.createElement("p", null, "Marks : ", studentsArray[0].marks), /*#__PURE__*/React.createElement("p", null, "Result : ", getResult()));
function getResult() {
  var mark = 80;
  if (mark <= 100 && 0 <= mark) {
    if (mark <= 80) {
      return "A";
    } else if (mark <= 60) {
      return "B";
    } else if (mark <= 50) {
      return "C";
    } else if (mark <= 40) {
      return "S";
    } else {
      return "F";
    }
  } else {
    return "Invalid Result";
  }
}
var student2 = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, " Name : ", studentsArray[1].name, " "), /*#__PURE__*/React.createElement("p", null, "Reg No : ", studentsArray[1].regNo), /*#__PURE__*/React.createElement("p", null, "Email : ", studentsArray[1].email), /*#__PURE__*/React.createElement("p", null, "Marks : ", studentsArray[1].marks), /*#__PURE__*/React.createElement("p", null, "Result : ", getResult()));
var student = /*#__PURE__*/React.createElement("div", null, student1, " ", /*#__PURE__*/React.createElement("hr", null), " ", student2, /*#__PURE__*/React.createElement("hr", null));
var appDiv = document.getElementById("app");
var root = ReactDOM.createRoot(appDiv);
root.render(student);
