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


