//Question1

var name="Durga Devi"
var age=26
var isstudent=true
console.log(name,age,isstudent);


// Question no 2:
// area and perimeter of a rectangle 

let length =15
let width = 20

let area =length*width

let perimeter = 2*(length+width);
console.log(area);
console.log(perimeter);

//question no 3 :

var greeting = "Hello," 
var userName = "Durga"

var welomeMessage = greeting+userName
console.log(welomeMessage);

// question no 4:
// type conversion

var stringNumber ="123"
var convertedNumber = Number(stringNumber)

console.log(typeof(stringNumber));
console.log(typeof(convertedNumber));

// question no 5:

let a=5;
let b=4;

console.log(a==b)
console.log(a===b)
console.log(a!=b)
console.log(a!==b)
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)

// question no 6:

issunny=true
isweekend=true
hashomework=false


if(issunny=="true" && isweekend=="true"){
    if(hashomework=="true"){
    console.log("you can play and have a blast")
}}

else {

console.log("you should study well no playing");
}


// question no 7:

let temp = 38;
let weather = temp > 30? "Hot":"Cold"
console.log("weather:", weather);

// question no 8:

let string="Hello";
let number=30;
let boolean=true;
let obj={
    name:"dev",
    age:20
}
let undef;

console.log(typeof string);
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof obj);
console.log(typeof undef);

// question no 9:

let c = parseFloat(prompt("Enter the first number:"));
let d = parseFloat(prompt("Enter the second number:"));
let operator = prompt("Enter the operator (+, -, *, /):");

if(operator == '+'){
    let A = c + d;
    console.log(A);
}
else if(operator == '-'){
    let B = c - d;
    console.log(B);
}
else if(operator == '*'){
    let C = c * d;
    console.log(C);
}
else if(operator == '/'){
    let D = c / d;
    console.log(D);
}
else{
    console.log("Invalid operator entered");
}




//Question 10: Type Checker

let name2 = "Hello, Durga";  // string
let num = 42;               // number
let bool = true;            // boolean
let obj2 = {
    name: "durga",
    age:26
};                          // object
let undef2;                 // undefined


let typeOfString=typeof name2;
let typeOfNumber=typeof num;
let typeOfBoolean=typeof bool;
let typeOfObject=typeof obj2;
let typeOfUndefined=typeof Undef2;


console.log("Type of name2: " + typeOfString);
console.log("Type of num: " + typeOfNumber);
console.log("Type of bool: " + typeOfBoolean);
console.log("Type of obj: " + typeOfObject);
console.log("Type of Undef2: " + typeOfUndefined);