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
    email: "",
    marks: "90",
  },
];

function getResult(mark) {
  if (mark <= 100 && 0 <= mark) {
    if (mark >= 80) {
      return (
        <span style={{ color: "green", fontSize: "40px", fontWeight: "bold" }}>
          A
        </span>
      );
    } else if (mark >= 60) {
      return <span style={{ color: "yellow" }}>B</span>;
    } else if (mark >= 50) {
      return <span style={{ color: "blue" }}>C</span>;
    } else if (mark >= 40) {
      return <span>{{ color: "black" }}>A</span>;
    } else {
      return <span style={{ color: "red" }}>A</span>;
    }
  } else {
    return <span style={{ color: "red" }}>Invalid result</span>;
  }
}

function checkEmail(email) {
  if (email) {
    return <p>Email : {email}</p>;
  }
}

function isSelected(marks) {
  if (marks >= 90) {
    return <span style={{ color: "red" }}>Can do special degree</span>;
  } else {
    return "Can do only general degree only";
  }
}

const student1 = (
  <>
    <h2> Name : {studentsArray[0].name} </h2>
    <p>Reg No : {studentsArray[0].regNo}</p>
    {checkEmail(studentsArray[0].email)}
    {/* <p>Email : {studentsArray[0].email}</p> */}
    <p>Marks : {studentsArray[0].marks}</p>
    {isSelected(studentsArray[0].marks)}
    {studentsArray[0].marks >= 90 ? <p>Special degree</p> : <p>General</p>}
    {studentsArray[0].email && <p> Email : {studentsArray[0].email}</p>}

    <p>Result : {getResult(studentsArray[0].marks)}</p>
  </>
);

const student2 = (
  <>
    <h2> Name : {studentsArray[1].name} </h2>
    <p>Reg No : {studentsArray[1].regNo}</p>
    {/* <p>Email : {studentsArray[1].email}</p> */}
    {checkEmail(studentsArray[1].email)}
    <p>Marks : {studentsArray[1].marks}</p>
    {isSelected(studentsArray[1].marks)}
    {studentsArray[1].marks >= 90 ? <p>Special degree</p> : <p>General</p>}
    {studentsArray[1].email && <p> Email :{studentsArray[1].email}</p>}

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
