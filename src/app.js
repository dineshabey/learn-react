const view = <div style={{ color: "red" }}> Hi </div>;

const student = [{ name: "dinesh", name: "roshan" }];
let username = "Dinesh";
let regNo = "R122321";
let msg = regNo + "" + username;
let msg2 = `${regNo} ${username}`;

console.log(msg)
console.log(msg2)



console.log(student);

const appDiv = document.getElementById("app");
const root = ReactDOM.createRoot(appDiv);
root.render(view);
