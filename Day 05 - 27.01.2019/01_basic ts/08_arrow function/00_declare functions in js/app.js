

//דרך רגילה להגדרת פונקציות 
function f1(){
    console.log("f1");
}

f1();


//פונקציה אנונימית - מושמת לתוך משתנה
let f2=function (){
    console.log("f2");
};

f2();

//פונקציית חץ - מושמת לתוך משתנה
let f3= ()=>{
    console.log("f3");
};

f3();


//אחסון מצביע לפונקציה לתוך משתנה
let f4= f1;

f4();