let obj = {
    "name": "Bob",
    "age": 12,
    "hobies": "Math" 
};

function *iterateObj(p){
    for(let x in p){  //--> RUNTIME ERROR: TypeError: obj is not iterable
        yield p[x];
    }   
}


for(let x of iterateObj(obj)){
    console.log(x);
}


/*

OUTPUT:
________________________

Bob
12
Math

*/