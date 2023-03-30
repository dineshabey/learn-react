const sample = (
  <div>
    hifssas
    <hr />
  </div>
);


//basic function
function validNameOfBasicFunction(a, b, c) {
  console.log(arguments[0]);
  
  return a + b + c;
}

validNameOfBasicFunction(10,20,30);

//function expression

const appDiv = document.getElementById("app");

const root = ReactDOM.createRoot(appDiv);

root.render(sample);
