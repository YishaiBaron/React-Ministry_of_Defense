let obj={
    "fullName":"Bob",
    "printName1":function(){return this.fullName},
    "printName2":()=>{return this.fullName}
};




console.log(obj.printName1());  //--> Bob
console.log(obj.printName2());  //--> undefined