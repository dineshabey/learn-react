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

const studentsArray = [
  {
    name: "Tharushi Nethmini",
    regNo: "R122321",
    email: "thru@gmail.com",
  },
  {
    name: "Dinesh Abeyrathna",
    regNo: "R172321",
    email: "dinesh@gmail.com",
  },
];

const student1 = (
  <>
    <h2> Name : {studentsArray[0].name} </h2>
    <p>Reg No : {studentsArray[0].regNo}</p>
    <p>Email : {studentsArray[0].email}</p>
  </>
);

const student2 = (
  <>
    <h2> Name : {studentsArray[1].name} </h2>
    <p>Reg No : {studentsArray[1].regNo}</p>
    <p>Email : {studentsArray[1].email}</p>
  </>
);

const student = (
  <div>
    {student1} <hr /> {student2}
    <hr />
  </div>
);

const appDiv = document.getElementById("app");

const root = ReactDOM.createRoot(appDiv);

root.render(student);
