// Area of a square of side 5 using obj
let square={
    side:5,
    area:function(){
        return this.side**2;
    },
};

console.log(square.area());   

// join multipe item using obj

function join(seperator,...string)
{
    let value='';
    string.forEach((str,i)=>{
        if (i==str.length-1)
        value+=str+seperator;
        else
            value+=str;
    });
    return value;
}
let strig1=['amal','ajith','adil'];
let x=join(',',strig1);
console.log(x);

// destructuring

let [first,second,third,...other]=[1,2,3,4,5,6,7];
console.log(first)


function total(x){
    if(x==1)
        return 6;
    else
        w= 6+(5*(x-1));
        return w;
}
console.log(total(4));