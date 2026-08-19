// let b = Number( prompt("Enter a number"))
// let c = Number (prompt ("enter 2nd numbert"))
// let ans = b*c
// console.log(ans)


/* let age = 90
if (age <18)
{
    console.log ("Not Eligible for vote")    
}
else if (age>55)
{
    console.log("you Are senior citizen")
}
else
{
    console.log("you are elegible for vote")
}

function add (num1,num2)
{
   result= num1+num2;
    return result
}
add(90,79);
console.log(result)

object.someMethod() */


/* function restParameter(num1,num2,num3)
{
    result = num1 + num2 + num3
    return result

    
}

console.log(restParameter(20,30,50)) */


// function restParameter(num1,num2,num3)
// {
//    return  num1 + num2 + num3

    
// }

// console.log(restParameter(20,30,50))







/* Another example */

/* function restParameter(num1,num2,num3,...rest)
{
    return num1 + num2 + num3 + rest

    
}
let result =restParameter(20,30,50,40,70,60,10)
console.log(result) */



// function test(a, b, ...rest)
// {
//     console.log(a);
//     console.log(b);
//     console.log(rest);
// }

// test(10, 20, 30, 40, 50);

function restParameter(num1, num2, num3, ...rest)
{
    let sum = num1 + num2 + num3;

    for (let num of rest)
    {
        sum = sum + num;
    }

    return sum;
}

let result = restParameter(20, 30, 50, 40, 70, 60, 10);

console.log(result);