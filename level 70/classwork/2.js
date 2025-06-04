function changeElements() {
  const input = document.getElementById("myInput");
  const button = document.getElementById("myButton");
  const title = document.getElementById("myTitle");
  const body = document.getElementById("body");

  console.log(input.value);

  button.style.backgroundColor = "black";
  button.style.color = "white";

  title.style.textAlign = "center";

  body.style.backgroundColor = "green";
}
