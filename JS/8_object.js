const course_1={
    section:10,
    video:3,
    name:"javascript class"
};

console.log(course_1);
course_1.value="newvaluue"; // adding a new property to the object
console.log(course_1);

const course_2={
    period:6,
    subject:4,
    name:"s5 classes",
    enroll(){
        console.log("enroll successfully");
    },
    submit:{
        total:25
    }
};


course_2.submit.total=10; 

course_2.enroll();

console.log(course_2.submit.total);



//object for function creation

// const course_3={
//     sum:24,
//     value:"amal",
//     calling(){
//         console.log("fuction in a class");
//     },
//     newOne:{
//         newvalue:30
//     }

// };


// Factory Fuction --camal case



function createClass(){
    return{
        sum:24,
        value:"amal",
        calling(){
            console.log("fuction in a class");
        },
        newOne:{
            newvalue:30
        }

    }
};

const newClass = createClass();
console.log(newClass);



// Cunstruction Fuctions pascal case


function Cunstructor(value){//generally use name of the class
    this.sum= 24,
    this.value = value,
    this.calling = function(){
        console.log("fuction in a class");
    }
};

const course_4= new Cunstructor("amma");
course_4.calling();
console.log(course_4);

// deleting a property in a object

delete course_4.value; 


course_4.check=function(){
    console.log("checked successfully");
}
console.log(course_4);


//constructor function


const course_5= new Function('title',`
    this.title=title,
    this.enroll=function()
    {
        console.log("enroll successfully");
    }`);



const course_6= new course_5("adding to course_6");

console.log(course_6.title);




//Data Type

//Premitive Datatype

//Pass by Value
let number_1=10;
let number_2=number_1;

number_1=15;

console.log(number_1);
console.log(number_2);

// Reference Datatype

// Pass by Reference
const obj_1={number_1:10};
const obj_2=obj_1;

obj_1.number_1=15;

console.log(obj_1);
console.log(obj_2);


// Copy content in one object to another object

const course_7={...course_2};
course_7.period=8;

    // another way
    console.log("another way");
const course_8=Object.assign({},course_2);

for(let key in course_8){
    console.log(key,course_8[key]);
}
