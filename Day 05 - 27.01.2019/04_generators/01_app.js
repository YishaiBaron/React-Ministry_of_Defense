function *func(){
    yield "Hello";
    yield "World";
}



let x=func();

console.log("first return:", x.next());
console.log("second return:", x.next());

/*

OUTPUT:
______________________
first return: { value: 'Hello', done: false }
second return: { value: 'World', done: false }

*/