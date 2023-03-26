"use strict";

var studentsArray = [{
  name: "Tharushi Nethmini",
  regNo: "R122321",
  email: "thru@gmail.com",
  marks: "50"
}, {
  name: "Dinesh Abeyrathna",
  regNo: "R172321",
  email: "",
  marks: "90"
}];
function getResult(mark) {
  if (mark <= 100 && 0 <= mark) {
    if (mark >= 80) {
      return /*#__PURE__*/React.createElement("span", {
        style: {
          color: "green",
          fontSize: "40px",
          fontWeight: "bold"
        }
      }, "A");
    } else if (mark >= 60) {
      return /*#__PURE__*/React.createElement("span", {
        style: {
          color: "yellow"
        }
      }, "B");
    } else if (mark >= 50) {
      return /*#__PURE__*/React.createElement("span", {
        style: {
          color: "blue"
        }
      }, "C");
    } else if (mark >= 40) {
      return /*#__PURE__*/React.createElement("span", null, {
        color: "black"
      }, ">A");
    } else {
      return /*#__PURE__*/React.createElement("span", {
        style: {
          color: "red"
        }
      }, "A");
    }
  } else {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        color: "red"
      }
    }, "Invalid result");
  }
}
function checkEmail(email) {
  if (email) {
    return /*#__PURE__*/React.createElement("p", null, "Email : ", email);
  }
}
function isSelected(marks) {
  if (marks >= 90) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        color: "red"
      }
    }, "Can do special degree");
  } else {
    return "Can do only general degree only";
  }
}
var student1 = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, " Name : ", studentsArray[0].name, " "), /*#__PURE__*/React.createElement("p", null, "Reg No : ", studentsArray[0].regNo), checkEmail(studentsArray[0].email), /*#__PURE__*/React.createElement("p", null, "Marks : ", studentsArray[0].marks), isSelected(studentsArray[0].marks), studentsArray[0].marks >= 90 ? /*#__PURE__*/React.createElement("p", null, "Special degree") : /*#__PURE__*/React.createElement("p", null, "General"), studentsArray[0].email && /*#__PURE__*/React.createElement("p", null, " Email : ", studentsArray[0].email), /*#__PURE__*/React.createElement("p", null, "Result : ", getResult(studentsArray[0].marks)));
var student2 = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, " Name : ", studentsArray[1].name, " "), /*#__PURE__*/React.createElement("p", null, "Reg No : ", studentsArray[1].regNo), checkEmail(studentsArray[1].email), /*#__PURE__*/React.createElement("p", null, "Marks : ", studentsArray[1].marks), isSelected(studentsArray[1].marks), studentsArray[1].marks >= 90 ? /*#__PURE__*/React.createElement("p", null, "Special degree") : /*#__PURE__*/React.createElement("p", null, "General"), studentsArray[1].email && /*#__PURE__*/React.createElement("p", null, " Email :", studentsArray[1].email), /*#__PURE__*/React.createElement("p", null, "Result : ", getResult(studentsArray[1].marks)));
var student = /*#__PURE__*/React.createElement("div", null, student1, " ", /*#__PURE__*/React.createElement("hr", null), " ", student2, /*#__PURE__*/React.createElement("hr", null));
var appDiv = document.getElementById("app");
var root = ReactDOM.createRoot(appDiv);
root.render(student);
