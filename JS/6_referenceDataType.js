//reference datatype

// Object

let animal={
    name:"Cow",
    legs:4
}

console.log(animal);

// Dot Notation
console.log(animal.name);

// Bracket Notation
console.log(animal["name"]);

// Array

let selectBooks=["one","two","three"];
console.log(selectBooks);

console.log(selectBooks[0]); 

console.log(selectBooks.length);

//Function
let name="amal";

function hello(name){
    console.log("hello "+name+" goood morning");
}
hello(name);

function addition(a,b)
{
    return a+b;
}
console.log(addition(14,34));