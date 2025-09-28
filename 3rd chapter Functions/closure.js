
message = "global morning"

function hello1()
{
    let message = "Good Morning"
        //let message = "Good Afternoon"
        console.log(`Hello 1 ${message}`);
    let cap = function hello2()
    {
        console.log(`Iam a c ${message}`);
            
    }
    return cap
}

cap = hello1()
cap()



//* MDN

function init()
{
    let name = "Mozila"//created Local variable init function

    function displayName()//displayname() inner function a closure
    {
        console.log(`inner ${name}`);//use declared variable in parent function
        
    }
    name = "Kirtiman"
    return displayName;
}

let c = init();

c()