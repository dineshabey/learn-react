const sample = (
  <div>
    hifssas
    <hr />
  </div>
);

//basic function
// function validNameOfBasicFunction(a, b, c) {
//   console.log(arguments);

//   return a + b + c;
// }

// validNameOfBasicFunction(10, 20, 30);

//function expression / anonymous functions

const functionExpression = function () {
  console.log("work anonymus function expression");
};

functionExpression();

(function () {
  console.log("Anonymus function working");
})();

const numbersArray = [10, 20, 30, 40, 50, 60, 7000];

// function mapInner(element, index) {
//   // console.log(element);
//   console.log("index = " + index + " element = " + element);
// }

numbersArray.map(function (element, index) {
  console.log("index = " + index + " element = " + element);
});

//arrow function
const anofunc = (x) => {
  return x * x;
};
console.log(anofunc(10));

//arrow function short-hand syntax
const arrowFuntionShorthandSyntax = (x, y) => x * y;

console.log(arrowFuntionShorthandSyntax(10, 2));

const appDiv = document.getElementById("app");

const root = ReactDOM.createRoot(appDiv);

root.render(sample);
