function* func() {
    yield "Hello";
    yield "World";
}



let x = func();

for (let y of x) {
    console.log(y)
}

/*

OUTPUT:
______________________
Hello
World

*/