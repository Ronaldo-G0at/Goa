document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var inputValue = this.elements["myInput"].value;

  alert("Input value: " + inputValue);
});

