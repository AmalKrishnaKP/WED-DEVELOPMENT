// Exercise Object
//itemName
//price
//discount
//itemCode
const product={
    itemName:"Flower",
    price:50,
    discount:20,
    itemCode:"F40"
};

// Factory Fuction

    
function itemF(itemName,price,discount,itemCode){
    return{
        itemName:itemName,
        price:price,
        discount:discount,
        itemCode:itemCode
    }
};

const foodball=itemF("foodball",250,10,'F21');

// Constructor Function

function Item_c(itemName,price,discount,itemCode){
    this.itemName=itemName,
    this.price=price,
    this.discount=discount,
    this.itemCode=itemCode,
    this.dicountPrice=function(){
        return price*discount/100;
    }
};

const bat=new Item_c("bat",300,15,'F22');

console.log(foodball);
console.log(bat);
console.log(bat.dicountPrice());
 

