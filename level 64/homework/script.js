function showHobby() {
  let hobby = prompt("What is your favorite hobby?");
  alert(hobby);
}

function showFullName() {
  let firstName = prompt("Enter your first name:");
  let lastName = prompt("Enter your last name:");
  let fullName = firstName + " " + lastName;
  alert(fullName);
}

function updateMessage() {
  let msg = prompt("Enter a message:");
  document.getElementById("message").textContent = msg;
}

function showEmoji() {
  let emoji = prompt("What is your favorite emoji?");
  alert("Thanks! You chose: " + emoji);
}

function changeTitle() {
  let word = prompt("Enter a word:");
  document.title = word;
}
