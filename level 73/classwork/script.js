///js-ში შექმენით ფუნქცია სახელად addNewElement. ამ ფუნქციაში ჯერ წამოიღეთ დივ ბლოკი, შემდეგ შექმენით ღილაკი.
//  ღილაკს გაუწერეთ თავისი ტექსტი - გამოიყენეთ პირდაპირ textContent ან createTextNode
//  და appendChild მეთოდები. საბოლოოდ ღილაკი ჩაამატეთ დივ ბლოკში. 
///ამ დავალებისთვის დაგჭირდებათ შემდეგი მეთოდები და კუთვნილებები: getElementById, textContent, createTextNode, appendChild
function addNewElement() {

  let myDiv = document.getElementById("myDiv");

  let button = document.createElement("button");

  let buttonText = document.createTextNode("Click Me!");

  button.appendChild(buttonText);

    myDiv.appendChild(button);
  }