// let counter={
//     count:0,
//     increment:function(){
//          this.count++;
//          console.log(this);
//     }
// };

// Factory function
let counter_1=createCounter();
let counter_2=createCounter();  

function createCounter(){
    return {
        count:0,
        increment:function(){
             this.count++;
            //  console.log(this);
        }
    };
};

var count=0;
function increment(){
    this.count++;
    // console.log(this);
};

increment();
counter_1.increment();
counter_2.increment();


function Car(name){
    this.name=name;
    this.start=function(){
        console.log(this.name+' started');
        console.log(this);  
    }
}
const swift=new Car('swift');
swift.start();