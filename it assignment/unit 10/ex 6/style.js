var output = '';

// Loop through numbers 1 to 10
for (var i = 1; i <= 10; i++) {
  // Calculate the result of 5 * i
  var result = 5 * i;
  
  // Create the multiplication expression
  var expression = "5 * " + i + " = " + result;

  // Append the expression to the output
  output += expression + '<br>';

  // Output the multiplication expression to the console
  console.log(expression);
}

// Output the entire table to the webpage
document.write(output);
