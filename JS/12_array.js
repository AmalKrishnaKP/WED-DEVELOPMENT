let characters=[
    {
        name:'amal',
        height:'273',
        mass:'165',
        eye_color:'black',
        gender:'male'
    },
    {
        name:'jethlal',
        height:'149',
        mass:'133',
        eye_color:'black',
        gender:'male'
    },
    {
        name:'bobita',
        height:'158',
        mass:'149',
        eye_color:'grey',
        gender:'female'
    },
    {
        name:'krishnan',
        height:'169',
        mass:'84',
        eye_color:'black',
        gender:'male'
    }
];

//get an array of all names

const map1=characters.map((x)=>
    {
        return x.name;
    }
);
console.log(map1);

//get an array of name and height
const map2=characters.map((y)=>
    {
        return {
            name:y.name,
            height:y.height
        };
    }
);
console.log(map2);
let total=0;

//total height of all characters
for(let h of characters){
    console.log(h.height);
    total=total+Number(h.height);
}
console.log(total);


//get characters with mass greater than 100
console.log(characters.filter((e)=>e.mass>100));

// get all male characters
console.log(characters.filter(e=>e.gender=='male'));

//sort by name
let sortName=characters.sort((a, b) => {
    const nameA=a.name.toUpperCase();
    const nameB=b.name.toUpperCase();
    if(nameA<nameB)
        return -1;
    if(nameA>nameB)
        return 1;
    return 0
});
console.log(sortName);

//sort by gender

let sortGender=characters.sort((a,b)=>{
    let g_1=a.gender.toUpperCase();
    let g_2=b.gender.toUpperCase();
    if(g_1<g_2)
        return -1;
    if(g_1>g_2)
        return 1;
    return 0;
})
console.log(sortGender);

// does every character has mass more than 40

let ans=characters.every((currentValue)=>{
    return Number(currentValue.mass)>40;
}
);
// console.log(ans);
//same
console.log(characters.every((x)=>x.mass>40));

// does every character has blue eye


let ans_1=characters.every((x)=>{
    return x.eye_color=='blue';
}
);
// console.log(ans_1);
//same
console.log(characters.every((x)=>x.eye_color=='blue'));

// is there is atleast one male character

console.log(characters.some((x)=>x.gender=='male'));

//is there is atleast one taller than 200?

console.log(characters.some((x)=>x.height>200));
