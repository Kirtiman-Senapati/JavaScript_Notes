function addTwoNumbers(num1,num2)
{
    return num1 + num2
}
console.log(addTwoNumbers(90,10));/// it showing output undefined because not store num1 + num2 value if i write return keyword then show right output


//* another way right this function

function subTwoNumbers()
{
    let first_number = 78
    let second_number = 60
    let result = first_number - second_number
    console.log(result)
}
subTwoNumbers()


//* funtion arguments and parameters 

function greetUser(FirstName,lastName, MiddleName)
{
    console.log(`hello ${FirstName} + ${lastName} + tell your Middle name my middle name is ${MiddleName}`)
}


greetUser()// it shows undefined in result because no arguments used 


/*  //* in function no call itself means example
funtion add(a,b)
{
    a + b
    console.log(add(10,20))
}// it shows error

then if call outside of funtion it works perfectly but i print result with new variable, new varible not stored result so need used return keyword for store the value in new variable then print it

Example


function addTwoNumbers(number1, number2)
{
    number1 + number2
    

    
}

const result = addTwoNumbers(19,20)// not Returned Value So not stored value in result so console .log print output undefined   


console.log(`result is ${result}`);
*/