// Create the text boxes
var firstNumber = document.getElementById("firstNumber");
var secondNumber = document.getElementById("secondNumber");

// Create the drop-down list
var operation = document.getElementById("operation");

// Create the button
var calculateButton = document.getElementById("calculateButton");

// Add an event listener to the calculate button
calculateButton.addEventListener("click", function() {

  // Get the values of the text boxes
  var firstNumberValue = parseInt(firstNumber.value);
  var secondNumberValue = parseInt(secondNumber.value);

  // Get the operation that was selected
  var operationValue = operation.options[operation.selectedIndex].textContent;

  // Validate the first number
  if (firstNumberValue < 0 || firstNumberValue > 100) {
    firstNumberError.textContent = "Please enter a number between 0 and 100";
    return;
  }

  // Validate the second number
  if (secondNumberValue < 0 || secondNumberValue > 100) {
    secondNumberError.textContent = "Please enter a number between 0 and 100";
    return;
  }

  // Do the calculation
  var result;
  switch (operationValue) {
    case "Addition":
      result = firstNumberValue + secondNumberValue;
      break;
    case "Subtraction":
      result = firstNumberValue - secondNumberValue;
      break;
    case "Multiplication":
      result = firstNumberValue * secondNumberValue;
