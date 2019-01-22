class Test{
    constructor(){
        this.fullName="Bob";
    }

    
    nestedPrintName1(){
        return function(){return this.fullName}
    }

    nestedPrintName2(){
        return ()=>this.fullName
    }

}

let obj=new Test();
console.log(obj.nestedPrintName2()());  //--> Bob
console.log(obj.nestedPrintName1()());  //--> TypeError: Cannot read property 'fullName' of undefined
