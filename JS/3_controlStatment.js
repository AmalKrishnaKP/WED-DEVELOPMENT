// //IF ELSE


// let times=prompt("enter the time");
// if(times>4 && times<12)
// {
//     console.log("good morning");
//     alert("good morning");
// }
// else if(times>=12 && times<18)
// {
//     console.log("good evening");
//     alert("good evening");
// } 
// else{
//     console.log("good night");
//     alert("good night");
// }


// // SWITCH

//  let myvar=prompt("enter the item fan,tv,fridge,light");
// switch(myvar)
// {
//     case "fan":alert("fan is on");
//     break;
//     case "tv":alert("tv is on");
//     break;
//     case "fridge":alert("fridge is on");
//     break;
//     case "light":alert("light is on");
//     break;
//     default:alert(myvar+" is not there fuck off");
//     break;
// }


//FOR LOOP

for(let x=0;x<4;x++)
{
    console.log("for");
}
    
let i=0;

// While
while(i<10)
{
    console.log("while")
    i++
}

// DO..While

let x=0;
do{
    console.log("do..while");
    x++;
}while(x<10)


// For.. In
//Object

let animal={
    full:"amal",
    leg:4


};

for(let x in animal){
    console.log(x,animal[x]);
}
// Array

let names=["amak","ajith","rahul"];
for(let index in names)
{
    console.log(index,names[index]);
}

//For...Of

for(let name of names){
    console.log(name);
}