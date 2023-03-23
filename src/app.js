const myH2 = (
  <>
    <h2> H2 tag worked - React JS </h2>
    <p>P tag working </p>
  </>
);

const appDiv = document.getElementById("app");

const root = ReactDOM.createRoot(appDiv);

root.render(myH2);
