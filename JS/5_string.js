let strings1 = "hello all' good morning";
let strings2 = 'hello all \' good morning'// \ must use while using a ' in a string
let string3 = strings1 + strings2 ;
let s1="100";
let sToN=Number(s1);
console.log(sToN);
let nToS=sToN.toString();
console.log(nToS);

//template literals
`${strings1 + strings2} your score is ${sToN}`

// methods 

 console.log(strings1.length); //length

 console.log(strings1[0]);  //character at a position

 console.log(strings1.indexOf("good")) ;//postion of a alphabet or word

 console.log(strings1.slice(0,5)); // a slice of the string according to the starting index and ending index

var smallString="my nAme Is aMaL";


console.log(smallString.toUpperCase());

console.log(smallString.toLowerCase());
