function sum(n1,n2){
    return n1+n2;
}


let f1=sum;
let f2=sum.bind(this, 2,3);


console.log(f1(2,4));  //--> 6
console.log(f2());     //--> 5

