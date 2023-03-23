const studentsArray = [
  {
    name: "Tharushi Nethmini",
    regNo: "R122321",
    email: "thru@gmail.com",
    marks: "50",
  },
  {
    name: "Dinesh Abeyrathna",
    regNo: "R172321",
    email: "dinesh@gmail.com",
    marks: "70",
  },
];



function getResult(mark) {
  if (mark <= 100 && 0 <= mark) {
    if (mark >= 80) {
      return "A";
    } else if (mark >= 60) {
      return "B";
    } else if (mark >= 50) {
      return "C";
    } else if (mark >= 40) {
      return "S";
    } else {
      return "F";
    }
  } else {
    return "Invalid Result";
  }
}

const student1 = (
    <>
      <h2> Name : {studentsArray[0].name} </h2>
      <p>Reg No : {studentsArray[0].regNo}</p>
      <p>Email : {studentsArray[0].email}</p>
      <p>Marks : {studentsArray[0].marks}</p>
      <p>Result : {getResult(studentsArray[0].marks)}</p>
    </>
  );

const student2 = (
  <>
    <h2> Name : {studentsArray[1].name} </h2>
    <p>Reg No : {studentsArray[1].regNo}</p>
    <p>Email : {studentsArray[1].email}</p>
    <p>Marks : {studentsArray[1].marks}</p>
    <p>Result : {getResult(studentsArray[1].marks)}</p>

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
