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