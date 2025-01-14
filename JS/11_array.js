let array=[1,2,3,4,5,6,7,8,9];

//Push --at last
array.push(10,11);

//Unshift --push at starting
array.unshift(0);

//Pop --at last
array.pop();

//Shift --pop at starting
array.shift();

//changing value
array[0]="100";





const names=['Amal','Akash','ammu','Akash','babu','Akash'];



const person=[{name:"amal",age:20},{name:"anjitha",age:26},{name:"geetha",age:53}];



//Index of
console.log(names.indexOf('Akash'));
console.log(names.indexOf('Akash',2));
console.log(names.lastIndexOf('Akash'));

// Include --Only for primitive datatype
console.log(names.includes("Akash"));
console.log(names.includes("ammu",2));
console.log(names.includes("ammu",3));

// Find -- for reference/primitive datatype
console.log(person.find(function(element){
    return element.name==='amal';
}));
console.log(person.find(function(element){
    return element.name==='ajmal';
}));

console.log(person.find(element => element.name=='anjitha'));



const n1=['Amal','Akash','ammu'];
const n2=['Akash','babu','Akash'];

//Concatination

let n3=n1.concat(n2);
console.log(n3); 

let n4=[...n1,...n2];

//Slice

console.log(n3.slice(3,6));

//For loop

for(let i=0;i<names.length;i++)
{
    // console.log(names[i]);
}

// For in

for(let index in names){
    // console.log(names[index]);
}

// For of

for(let name of names){
    // console.log(name);
}

//Join

let student=['a','m','a','l'];



student = student.join("-");
console.log(student);


//Split

student=student.split('-');
console.log(student);

//Filter

console.log(person.filter(human=>human.age>20));

//Map

let map1=person.map(x=>x.age*2);
console.log(map1);