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



/* Modern method one Function call multiple Function  */

let storeseven;
function multiple()
{
    function sayName(){
        console.log("Kirtiman");
    }
    sayName()

    function add(a,b){
        console.log(a+b)
    }
    add(10,5)

    function sub(a,b){
        storeseven =a-b;
        return storeseven;
    }
    sub(10,8)
}
multiple()

console.log(storeseven)/* output Kirtiman
15
2 */




/* ******************************nested call function*********************** */
let greet =function(){
   
    function hi()
    {
        function medium()
        {
            function small()
            {
             console.log("hi iam arrow function ")
            }
            return small
        }
        return medium
    }
    return hi
}
greet()()()()/* greet()()()();   
// greet() → hi
//      () → medium
//          () → small
//              () → runs small(), prints the message */




/* ******************************************* Another Example*********************************** */


let greetsecond = function(){
    console.log("level 1: greet running");
    return function hi(){
        console.log("level 2: hi running");
        return function medium(){
            console.log("level 3: medium running");
            return function small(){
                console.log("level 4: small running, printing message");
            };
        };
    };
};

greetsecond()()()();/* output level 1: greet running
level 2: hi running
level 3: medium running
level 4: small running, printing message */