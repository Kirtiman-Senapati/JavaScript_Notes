//* 1st method/way Declaration functions


function sub_Numbers(num1,num2)// (num1,num2 works as paremeter )
{
    console.log(num1 - num2);
}
sub_Numbers(78,54)



//* 2nd Method /Way Declaration Funtion


function sub_Numbers1()
{
    const first_number = 100
    const second_number = 80
    const result = first_number - second_number
    console.log(result);
    

}
sub_Numbers1()


//* 3rd method /way Declaration Function

function sub_Numbers2(a,b)
{
    return a-b;
}
console.log(sub_Numbers2(200,40))


//*function expression

let add = function(x,y)
{
    return x - y ;
}
console.log(add(800,700));




//* arrow funtion


let multi = (c,d) =>
{
    return c*d
}
console.log(multi(60,8));


//* Another way function

let addTwoNumbers = (e,f) => e+f;
console.log(addTwoNumbers(677,90));


//*IIFE function immediately invoked function Expression

(function()
{
    console.log("I run immediately  when called");
    
})();


//let third_Number = 67   
//let fourth_Number = 40 if i not declare variable in funtion parameter means if i write this way subract() it provied error result not work console.log(subract(900,600)) arguments




/* function subract(third_Number,fourth_Number)
{
    third_Number - fourth_Number
}
console.log(subract(900,600));

it provides output undefined because not store third_Number - fourth_Number this value result so write return third_Number - fourth_Number its correct code
*/


//*Another Method /Way Declaration Funtion

function subract(third_Number,fourth_Number)
{
    return third_Number - fourth_Number
}
console.log(subract(900,600));




//* javascript funtion andar kudhko call nahi kar sakta 
/* 
function subract(fifth_number,sixth_Number)
{
    fifth_number - sixth_Number
    console.log (subract(900,600)); so koi output nahi aata isliye 
}
 */




/* common mistake  */

function subtractTwonumber(a,b)
{
    var a= 10;
    var b = 5;
    result = a-b;
    console.log(result)
}
subtractTwonumber(70,30);

//N.B. Ek simple rule yaad rakho: Parameter mein value bheji → function ke andar us parameter ko dobara value doge → purani value replace ho jayegi.so first function call time  a = 70,b=30 hua then phir se values reassign ho gaya function ke andar now a= 10,b= 5



/* some examples write function another way */


function addTwonumber()      // 1st way 
{
    let num1 = Number(prompt("enter 1st number"))
    let num2 = Number (prompt("Enter 2nd number"))
    return num1 + num2;
}
console.log(addTwonumber());




let addTwonumbers = ()=>  // 2nd way in arrow function 
{
    let num1 = Number(prompt("enter 1st number"))
    let num2 = Number (prompt("Enter 2nd number"))
    return num1 + num2;
}
console.log(addTwonumbers());



console.log((()=> //3rd way console.log ke andar function immediately invoked function Expression rakh diya hai 
{
    let num1 = Number(prompt("enter 1st number"))
    let num2 = Number (prompt("Enter 2nd number"))
    return num1 + num2;
})())