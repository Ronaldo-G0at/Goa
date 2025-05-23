function runNumberComparisons() {
  // 1.
  let number1 = 10, number2 = 10;
  console.log("1. Are numbers equal? ", number1 == number2);

  // 2.
  let a = 15, b = 8;
  console.log("2. Is a > b? ", a > b);

  // 3
  let c = 5, d = 10;
  console.log("3. Is c <= d? ", c <= d);

  // 4
  let e = 7, f = 12;
  console.log("4. Are e and f not equal? ", e != f);

  // 5
  let g = 120;
  console.log("5. Is g >= 100? ", g >= 100);
}


document.getElementById('runComparisonsBtn').addEventListener('click', runNumberComparisons);

// 6
window.addEventListener('load', function() {
  let userResponse = confirm("6. Do you want to start?");
  alert("6. You clicked: " + userResponse);
});

// 7
document.getElementById('confirmQuestionBtn').addEventListener('click', function() {
  let result = confirm("7. Are you sure?");
  console.log("7. User clicked:", result);
});

// 8
document.getElementById('confirmButtonClickBtn').addEventListener('click', function() {
  let userConfirmed = confirm("8. Do you want to continue?");
  console.log("8. User clicked:", userConfirmed);
});

// 9
document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let username = this.elements['username'].value;
  console.log("9. Username submitted:", username);
});

// 10
document.getElementById('clearEmailBtn').addEventListener('click', function() {
  document.getElementsByName('email')[0].value = '';
});
// 11
document.getElementById('alertPhoneBtn').addEventListener('click', function() {
  let phoneValue = document.getElementsByName('phone')[0].value;
  alert("11. Phone number entered: " + phoneValue);
});
