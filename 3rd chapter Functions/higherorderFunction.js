/* One function easily call multiple Function that is called higher order function  */

/* Traditional method one function call multiple function  */

function multiple(){

    sayName(),add(10,4),sub(),r(4,2)
    
}


function sayName(){
    let name = "Kirtiman";
    console.log(name)
}

function add(a,b){
    console.log(a+b);
}

function sub (){
    return (a-b);
}



function r(c,d)//r means function name 
{
    let divide = c/d
    return divide
}
console.log(divide)
