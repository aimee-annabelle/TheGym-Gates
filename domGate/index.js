/* Create an HTML document with two inputs and a button. Those inputs should take numbers, when the button is clicked the bigger number is displayed.*/

let button = document.getElementById("button");

function displayNumber() {
  let numberOne = document.getElementById("numberOne").value;
  let numberTwo = document.getElementById("numberTwo").value;
  let result = document.getElementById("bigNum");
  if (Number(numberOne) > Number(numberTwo)) {
    console.log(`${numberOne}`);
    result.textContent = `${numberOne}`;
  } else {
    result.textContent = `${numberTwo}`;
  }
  //   console.log(input1);
}

button.addEventListener("click", displayNumber);
