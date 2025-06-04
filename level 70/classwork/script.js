function userLoop() {
  let num1 = Number(prompt("enter first number:"));
  let num2 = Number(prompt("enter second number:"));

    if (isNaN(num1) || isNaN(num2)) {
        console.log("enter number");
    return;
  }

  if (num1 > num2) {
    for (let i = num1; i >= num2; i--) {
      console.log(i);
    }
  } else {
    for (let i = num1; i <= num2; i++) {
      console.log(i);
    }
  }
}

window.onload = userLoop;
