

let student1={
    "name":"Bob",
    printName(){
        return this.name;
    }
};

let student2={
    "name":"Alice"
};


let f1=student1.printName;


let f2=student1.printName.bind(student2);


console.log(f1());  //--> undefined
console.log(f2());  //--> Alice

