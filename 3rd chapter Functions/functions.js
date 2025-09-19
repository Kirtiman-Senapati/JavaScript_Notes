function add(){
    const a =19
    const b = 20
    let value = a + b ;
    console.log(value);
    
}

add()


// Another Way right Same code Means Funtion As Arguments


function addTwoNumbers(number1, number2)
{
    console.log(number1 + number2);

    
}

const result = addTwoNumbers(19,20)// not Returned Value So not stored value in result so console .log print output undefined   


console.log(`result is ${result}`);



//* how to Store value in result and return value

// Method 1


function addTwoNumbers(number1, number2)
{
    
    let result = number1 + number2
    return result
    console.log("kirtiman");// after return code not work because after return keyword function finish if you want princonsole.log kirtiman then write it before return 
    
}

console.log("Result tell ", result);


// Method 2


function addTwoNumbers(number1, number2)
{
    
    return number1 + number2
    
}

const Result2 = addTwoNumbers(100,700)

console.log(`Result 2 is ${Result2}`);


// * here Discuss how use parameter or arguments better way

function loginUserMessage(username)
{
    if(username === undefined)
    {
        console.log("user not declared please entre a user name");
        
    }
    return`${username} logged in sucessfully`
    
}console.log(loginUserMessage())



console.log (loginUserMessage());// undefined user logged in sucessfully


console.log (loginUserMessage("")); //"" user logged in sucessfully


console.log (loginUserMessage("kirtiman")); // kirtiman user logged in sucessfully

//*username === undefined is equal to ! if i write if(!username) same with username === undefined because ! change the values trues values false false values true



//if i want user not enter/pass undefined value then use that way  function loginUserMessage(username ="rahul") then if block not worked because value not undefined


function loginUserMessage(username ="rahul")
{
    return`${username} logged in sucessfully`
    
}
console.log(loginUserMessage())




//* how to add cart in Project


function calculateCartPrice(num1,num2,num3)
{
   
    
}

 console.log(calculateCartPrice(400,899,779));
 
calculateCartPrice()



/* i write functions in Different ways

1. function Declaration

2. function expression

3. arrow Functiom

4.  functions executes immediately after creation


syntax: function variable name(parameters)
{
    body of code

    use return keyword  if you store value in variables
}

*/