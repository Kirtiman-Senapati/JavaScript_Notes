/* One function easily call multiple Function that is called higher order function  */

/* Traditional method one function call multiple function  */

let store,divide;
function multiple(sayName,add,sub,r){

    sayName(),add(10,4),sub(40,20),r(4,2)
    
}


function sayName(){
    let name = "Kirtiman";
    console.log(name)
}

function add(a,b){
    console.log(a+b);
}

function sub (a,b){
   store= a-b;
   return store;
}



function r(c,d)//r means function name 
{
    divide = c/d
    return divide
}



multiple(sayName,add,sub,r);

console.log(store)
console.log(divide)

