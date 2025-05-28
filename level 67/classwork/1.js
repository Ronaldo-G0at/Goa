const obj1 = {
    name: "Julbasa",
    surname: "jeka",
    academy: "GOA",
    city: "New York",
    role: "CEO",
    favColor: "Red",

    printFullName: function() {
        console.log(this.name + this.surname);
    },

    printFavColor: function() {
        console.log(this.favColor);
    }
};

console.log(obj1);

console.log(obj1.academy);

obj1.printFullName();
obj1.printFavColor();

obj1.city = "Tbilisi";
console.log(obj1.city);