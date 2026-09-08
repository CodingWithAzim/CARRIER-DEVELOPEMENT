function add(a, b) { 
    return a + b; 
}
function subtract(a, b) { 
    return a - b; 
}
function multiply(a, b) { 
    return a * b; 
}
function divide(a, b) { 
  if (b == 0){
    return "Error";
  }
  return a / b;
}


function runCalculator() {
  const num1 = parseFloat(prompt("Enter the first number:"));
  const operator = prompt("Enter the operator (+, -, *, /):");
  const num2 = parseFloat(prompt("Enter the second number:"));

  let result;

  
  if (operator === '+') {
    result = add(num1, num2);
  } else if (operator === '-') {
    result = subtract(num1, num2);
  } else if (operator === '*') {
    result = multiply(num1, num2);
  } else if (operator === '/') {
    result = divide(num1, num2);
  } else {
    console.log("Error: Enter cract operator (+, -, *, /)");
    return;
  }


  console.log(`Output: ${num1} ${operator} ${num2} = ${result}`);
}


runCalculator();