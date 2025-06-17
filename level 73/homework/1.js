// 1
let p = document.createElement("p");
p.textContent = "This is a new paragraph.";
document.body.appendChild(p);

// 2
let h1 = document.createElement("h1");
h1.textContent = "This is a heading.";
let div1 = document.createElement("div");
div1.appendChild(h1);
document.body.appendChild(div1);

// 3
let img = document.createElement("img");
img.src = "https://via.placeholder.com/150";
document.body.appendChild(img);

// 4
let button = document.createElement("button");
button.textContent = "Click me";
document.body.appendChild(button);

// 5
let ul = document.createElement("ul");
let li1 = document.createElement("li");
li1.textContent = "First";
let li2 = document.createElement("li");
li2.textContent = "Second";
let li3 = document.createElement("li");
li3.textContent = "Third";
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
document.body.appendChild(ul);

// 6
let div2 = document.createElement("div");
div2.id = "content";
let p1 = document.createElement("p");
let span = document.createElement("span");
div2.appendChild(p1);
div2.appendChild(span);
document.body.appendChild(div2);
div2.removeChild(div2.firstChild);

// 7
let ul2 = document.createElement("ul");
let liA = document.createElement("li");
let liB = document.createElement("li");
let liC = document.createElement("li");
liA.textContent = "A";
liB.textContent = "B";
liC.textContent = "C";
ul2.appendChild(liA);
ul2.appendChild(liB);
ul2.appendChild(liC);
document.body.appendChild(ul2);
ul2.removeChild(ul2.lastChild);

// 8
let textContainer = document.createElement("div");
textContainer.id = "textContainer";
let oldP = document.createElement("p");
oldP.textContent = "Old paragraph";
textContainer.appendChild(oldP);
document.body.appendChild(textContainer);

let newP = document.createElement("p");
newP.textContent = "New paragraph";
textContainer.replaceChild(newP, oldP);

// 9
let div3 = document.createElement("div");
let oldButton = document.createElement("button");
oldButton.textContent = "Old Button";
div3.appendChild(oldButton);
document.body.appendChild(div3);

let spanNew = document.createElement("span");
spanNew.textContent = "New Span";
div3.replaceChild(spanNew, oldButton);

// 10
let ul3 = document.createElement("ul");
let oldLi = document.createElement("li");
oldLi.textContent = "Old item";
ul3.appendChild(oldLi);
document.body.appendChild(ul3);

let newLi = document.createElement("li");
newLi.textContent = "New item";
ul3.replaceChild(newLi, oldLi);

// 11
let h2 = document.createElement("h2");
h2.textContent = "Old H2";
document.body.appendChild(h2);

let newH1 = document.createElement("h1");
newH1.textContent = "New H1";
document.body.replaceChild(newH1, h2);
