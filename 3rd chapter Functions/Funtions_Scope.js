

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
        console.log("inner",outerVar);
    }
    inner();
}
outer();
console.log("TOO OUTER" , outerVar);



// here 1st no acess outervar so use inner funtion in outer funtion


//Example From Mdn 
