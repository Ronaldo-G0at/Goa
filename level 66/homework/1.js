// 1-5: Number comparisons
function runNumberComparisons() {
  // 1. Check if two numbers are equal
  let number1 = 10, number2 = 10;
  console.log("1. Are numbers equal? ", number1 == number2);

  // 2. Check if a number is greater than another
  let a = 15, b = 8;
  console.log("2. Is a > b? ", a > b);

  // 3. Check if a number is less than or equal to another
  let c = 5, d = 10;
  console.log("3. Is c <= d? ", c <= d);

  // 4. Check if two numbers are not equal
  let e = 7, f = 12;
  console.log("4. Are e and f not equal? ", e != f);

  // 5. Check if a number is >= 100
  let g = 120;
  console.log("5. Is g >= 100? ", g >= 100);
}

// Attach click event for running number comparisons
document.getElementById('runComparisonsBtn').addEventListener('click', runNumberComparisons);

// 6. Confirm box on page load & alert result immediately
window.addEventListener('load', function() {
  let userResponse = confirm("6. Do you want to start?");
  alert("6. You clicked: " + userResponse);
});

// 7. Show a confirm box asking a question, log result to console
document.getElementById('confirmQuestionBtn').addEventListener('click', function() {
  let result = confirm("7. Are you sure?");
  console.log("7. User clicked:", result);
});

// 8. Confirm box when a button is clicked, store result in variable
document.getElementById('confirmButtonClickBtn').addEventListener('click', function() {
  let userConfirmed = confirm("8. Do you want to continue?");
  console.log("8. User clicked:", userConfirmed);
});

// 9. On form submit, log username input value
document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let username = this.elements['username'].value;
  console.log("9. Username submitted:", username);
});

// 10. Clear the value of input with name="email" on button click
document.getElementById('clearEmailBtn').addEventListener('click', function() {
  document.getElementsByName('email')[0].value = '';
});

// 11. Alert the value of input with name="phone" on button click
document.getElementById('alertPhoneBtn').addEventListener('click', function() {
  let phoneValue = document.getElementsByName('phone')[0].value;
  alert("11. Phone number entered: " + phoneValue);
});