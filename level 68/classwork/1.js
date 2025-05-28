function compareNums() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const result = document.getElementById('result');

  if (num1 > num2) {
    result.textContent = num1;
  } else if (num2 > num1) {
    result.textContent = num2;
  } else {
    result.textContent = "Numbers are equal";
  }
}