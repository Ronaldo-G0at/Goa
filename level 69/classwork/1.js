function discountFunc() {
    let age = prompt("Please enter your age:");
    age = Number(age);

    if (isNaN(age)) {
        document.getElementById("result").innerText = "Please enter a valid number.";
        return;
    }

    if (age < 18) {
        document.getElementById("result").innerText = "Your discount is: 20%";
    } else if (age >= 18 && age < 65) {
        document.getElementById("result").innerText = "Your discount is: 5%";
    } else {
        document.getElementById("result").innerText = "Your discount is: 10%";
    }
}

let number = 0;

while (number < 100) {
    console.log(number);
    number += 5;
}