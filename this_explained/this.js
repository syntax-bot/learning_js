
//In strict mode this points to some value
//In sloopy Mode this points to some object

console.log(this); //points to window object (current execution context)


function Car(name){
    this.name=name;
    this.start=function(){
        console.log(this);
    }
}
let sudan=new Car('sudan');
console.log(sudan);
sudan.start();       //here this points to its calling object

//if object is initalized without new keyword,'this' will point to window obj

let swift=Car('swift');
//here swift is undefind as it is the  return value of function Car
console.log(this); 
this.start();

/*this is bound to the new object being constructed,
no matter which object the constructor function is 
accessed on. The value of this becomes the value of 
the new expression unless the constructor returns 
another non–primitive value*/

function C() {
    this.a = 37;
    return { a: 38 };
  }
  
let o = new C();
console.log(o.a); // 38

//points to current object only in object function
const obj = {
    a: this,
  };
  
console.log(obj.a ===globalThis); // true

