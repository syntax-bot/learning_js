//constructors
//instance methods and feilds
//static methods and static fields
//not hoisted
class Myclass{
    //construnctor
    constructor(enter){
        this.myfield=enter;
    }

    //instance field
    myfield;
    //instance methods
    myname(enter){
        
    }

    // Static field
    static myStaticField = "bar";

    static myStaticMethod() {
        // myStaticMethod body
      }
    
    // Fields, methods, static fields, and static methods all have
    // "private" forms
    #myPrivateField = "bar";

}


Myclass.prototype.myname=function(enter){
        this.myfield+=enter;
        console.log(this.myfield);
};


let newclass=new Myclass("testing");
console.log(newclass.myfield);
newclass.myname(" instance method");




