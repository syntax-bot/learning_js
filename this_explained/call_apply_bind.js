let name1={
    firstname:"Harsh",
    lastname:"Gupta",
    printFullname:function(){
        console.log(this.firstname+" "+this.lastname);
    }
};

let name2={
    firstname:"Yati",
    lastname:"Gupta",
    printFullname:function(){
        console.log(this.firstname+" "+this.lastname);
    }
};

//its like function borrowing
name1.printFullname.call(name2); //log yati gupta
let printFullnamecopy=name1.printFullname.bind();
console.log(printFullnamecopy);
printFullnamecopy();  //creates a bound copy of function 


