"use strict";

// let studentName1 = "Dinesh Abeysinghe";
// let studentRegNo1 = "R182321";
// let studentEmail1 = "dinabeysinghe@gmail.com";

// let studentName2 = "Rasika Pathum";
// let studentRegNo2 = "R122321";
// let studentEmail2 = "rasika@gmail.com";

// let student1obj = {

//     name : 'Tharushi Nethmini',
//     regNo: :'R122321',
//     email : 'thru@gmail.com'
// };

// let student2obj = {

//     name : 'Dinesh Abeyrathna',
//     regNo: :'R172321',
//     email : 'dinesh@gmail.com'
// };

var studentsArray = [{
  name: "Tharushi Nethmini",
  regNo: "R122321",
  email: "thru@gmail.com"
}, {
  name: "Dinesh Abeyrathna",
  regNo: "R172321",
  email: "dinesh@gmail.com"
}];
var student1 = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, " Name : ", studentsArray[0].name, " "), /*#__PURE__*/React.createElement("p", null, "Reg No : ", studentsArray[0].regNo), /*#__PURE__*/React.createElement("p", null, "Email : ", studentsArray[0].email));
var student2 = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, " Name : ", studentsArray[1].name, " "), /*#__PURE__*/React.createElement("p", null, "Reg No : ", studentsArray[1].regNo), /*#__PURE__*/React.createElement("p", null, "Email : ", studentsArray[1].email));
var student = /*#__PURE__*/React.createElement("div", null, student1, " ", /*#__PURE__*/React.createElement("hr", null), " ", student2, /*#__PURE__*/React.createElement("hr", null));
var appDiv = document.getElementById("app");
var root = ReactDOM.createRoot(appDiv);
root.render(student);
