// Task 6
document.getElementById("textForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let value = document.getElementById("textInput").value;
  alert(value);
});

// Task 7
document.getElementById("colorForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let color = document.getElementById("colorInput").value;
  document.body.style.backgroundColor = color;
});

// Task 8
document.getElementById("nameForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let first = document.getElementById("firstNameInput").value;
  let last = document.getElementById("lastNameInput").value;
  let fullName = first + " " + last;
  document.getElementById("fullNameDisplay").textContent = fullName;
});
