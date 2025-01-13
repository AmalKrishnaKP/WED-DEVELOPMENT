
// eg 1
function cookMaggi(maggi,water)
{
    console.log("your maggi will be ready in "
        +maggi*2+
        " minute it requred "
        +water+
        " glass of water");
}

cookMaggi(2,5);

// eg 2

let  name=prompt("what is your name");
let age=prompt("your age please");
function voting(name,age){
    let Yeligible;
    if(age<18)
    {
        Yeligible =name+" you are not eligible";
    }
    else{
        Yeligible =name+" you are eligible";
    }
    return Yeligible;
    
}
let output=voting(name,age);
console.log(output);