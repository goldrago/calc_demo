// Create the text boxes
var firstNumber = document.getElementById("firstNumber");
var secondNumber = document.getElementById("secondNumber");

// Create the drop-down list
var operation = document.getElementById("operation");
operation.options[0].text = "Addition";
operation.options[1].text = "Subtraction";
operation.options[2].text = "Multiplication";
operation.options[3].text = "Division";

// Create the button
var calculateButton = document.getElementById("calculateButton");

// Add an event listener to the calculate button
calculateButton.addEventListener("click", function() {

  // Get the values of the text boxes
  var firstNumberValue = parseInt(firstNumber.value);
  var secondNumberValue = parseInt(secondNumber.value);

  // Get the operation that was selected
  var operationValue = operation.options[operation.selectedIndex].textContent;

  // Do the calculation
  var result;
  switch (operationValue) {
    case "חי addition":
      result = firstNumberValue + secondNumberValue;
      break;
    case "חיסור subtraction":
      result = firstNumberValue - secondNumberValue;
      break;
    case "כפל multiplication":
      result = firstNumberValue * secondNumberValue;
      break;
    case "חלוקה division":
      result = firstNumberValue / secondNumberValue;
      break;
  }

  // Display the result
  var resultTextBox = document.getElementById("result");
  resultTextBox.textContent = result;
});
