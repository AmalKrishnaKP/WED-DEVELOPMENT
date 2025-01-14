// Declare a class
class product1{
    constructor(itemName,price,discount,productCode)
    {
        this.itemName=itemName,
        this.price=price,
        this.discount=discount,
        this.productCode=productCode
    }
}

let pencil= new product1("pencil",50,10,'F21');

const product2=class product1{
    constructor(itemName,price,discount,productCode)
    {
        this.itemName=itemName,
        this.price=price,
        this.discount=discount,
        this.productCode=productCode
    }

    //Get method
    get getDiscount(){
        return this.discount;
    }
    //Set method
    set setDiscount(value){
        this.discount=value;
    }
    //Normal method
    DiscountValue(){
        return this.discount*this.price/100;
    }
}
let chair=new product2("chair",2500,10,'F22');
//Extend a class

//Super class
class prd1{
    constructor(name)
    {
        this.name=name;
    }
    product(){
        return "this is a "+this.name;
    }

}

//subclass
class prd2 extends prd1{
    constructor(name)
    {
        super(name);
    }
    product(){
        return "this is a "+this.name;
    }
}
let stool=new prd2("stool",2500,10,'F22');

