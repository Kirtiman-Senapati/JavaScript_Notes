

/* 4types of scopes in funtion 

    1.Global Scope
    2.Funtion Scope
    3.Block Scope
    4. Lexical Scope
*/



//*Global
let globalVar = "Outside variable in Funtion"
function showGlobal()
{
    console.log(globalVar);
    
}
showGlobal();



//* Funtional Scope

function funtionalScope()
{
    let local_Variable = "Inside Funtion"
    console.log(local_Variable);
    
}

funtionalScope();




//* Block Scope

if(true){
    let blockVar = "Iam only work in true{} block"
    console.log(blockVar);
    
}



//* lexical Scope and closure

function outer()
{
    let outerVar = "Iam ousider of inner Funtion"
    //if you right innerFuntion then you get outerVar
    function inner()
    {
        let testValue ="age"
        console.log("inner",outerVar);
    }
    inner();

    function innerTwo()
    {
        console.log("innerTwo", outerVar);
        
    }
    innerTwo();

}
outer();
console.log("TOO OUTER" , outerVar);//provide error outerVar not defined



// here 1st no acess outervar so use inner funtion in outer funtion


/*   N.B 

point1. Easily two child funtions brings data from parent funtion

2. but child not give data to parent

3. child not share data with other 

*/
