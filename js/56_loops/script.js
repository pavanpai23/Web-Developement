console.log("Hello I Am Conditional Turtorial")

let age = 6;
let grace = 3;

console.log(age + grace)
console.log(age - grace)
console.log(age * grace)
console.log(age / grace)
console.log(age ** grace)


if ((age + grace) > 18) {
    console.log("You Can Drive");
}

else if (age == 0) {
    console.log("Are You Kidding")
}

else {
    console.log("You Cannot Drive")
}

a = 6;
b = 5;
let c = a > b ? (a - b) : (b - a);

// translate to
// if (a > b) {
//     let c = a - b;
// }

// else {
//     let c = b - a;
// }