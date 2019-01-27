let obj = {
    "name": "Bob",
    "age": 12,
    "hobies": "Math" 
};



for(let x in obj){  
    console.log(x);
}


for(let x of obj){  //--> RUNTIME ERROR: TypeError: obj is not iterable
    console.log(x);
}