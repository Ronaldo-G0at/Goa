function compareNums(num1, num2) {
  console.log("Comparing " + num1 + " and " + num2);
  console.log("Greater than: " + (num1 > num2));
  console.log("Greater than or equal: " + (num1 >= num2));
  console.log("Less than: " + (num1 < num2));
  console.log("Less than or equal: " + (num1 <= num2));
  console.log("Equal (==): " + (num1 == num2));
  console.log("Strict equal (===): " + (num1 === num2));
  console.log("Not equal (!=): " + (num1 != num2));
  console.log("Strict not equal (!==): " + (num1 !== num2));
  console.log("--------------");
}

documentdocument.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var inputValue = this.elements["myInput"].value;

  alert("Input value: " + inputValue);
});getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var inputValue = this.elements["myInput"].value;

  alert("Input value: " + inputValue);
});