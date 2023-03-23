"use strict";

var myH2 = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, " H2 tag worked - React JS "), /*#__PURE__*/React.createElement("p", null, "P tag working "));
var appDiv = document.getElementById("app");
var root = ReactDOM.createRoot(appDiv);
root.render(myH2);
