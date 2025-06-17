function modifyContent() {
  let myDiv = document.getElementById("myDiv");
  let button = document.getElementById("myButton");
  myDiv.removeChild(button);
  let paragraph = document.getElementById("myParagraph");
  let italic = document.createElement("i");
  italic.textContent = "This is new italic text";
  myDiv.replaceChild(italic, paragraph);
}

