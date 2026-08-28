/* Some tesing using function  */




/* *********************************1st Experiment************************ */

function multiple(){

    sayName(),add(10,4),sub(),r(4,2)
    
}


function sayName(){
    let name = "Kirtiman";
    console.log(name)
}

function add(a,b){
    console.log(a+b);
}

function sub (){
    return (a-b);
}



function r(c,d)//r means function name 
{
    let divide = c/d
    return divide
}
console.log(divide)//error in  divide not define


multiple();





/* *****************************Exp2************************** */

function multiple(){

 att();
 add(10,4);
 sub(22,10);
 r(4,2);
    
}


function att(){
    let name = "Kirtiman";
    console.log(name)
}

function add(a,b){
    console.log(a+b);
}

function sub (){
    return (a-b);// return (a-b); ReferenceError: a is not defined
}



function r(c,d)//r means function name 
{
    let divide = c/d 
    return divide
}



multiple()


/* *****************************Exp3************************** */

function multiple(){

 att();
 add(10,4);
 sub(22,10);
 r(4,2);
    
}


function att(){
    let name = "Kirtiman";
    console.log(name)
}

function add(a,b){
    console.log(a+b);
}
let a =10;
let b=4;
function sub (){
    return (a-b);//only output kirtiman and 14 without error 
}



function r(c,d)//r means function name 
{
    let divide = c/d 
    return divide
}



multiple()





/* ****************************Exp4********************** */

function multiple(att,add,r,sub){

 att();
 add(10,4);
 sub(22,10);
 r(4,2);
    
}


function att(){
    let name = "Kirtiman";
    console.log(name)
}

function add(a,b){
    console.log(a+b);
}

function sub (){
    return (a-b);
}



function r(c,d)//r means function name 
{
    let divide = c/d 
    return divide
}



multiple()// att();TypeError: att is not a function



/* *******************Exp5********************* */


function multiple(att,add,r,sub){

 att();
 add(10,4);
 sub(22,10);
 r(4,2);
    
}


function att(){
    let name = "Kirtiman";
    console.log(name)
}

function add(a,b){
    console.log(a+b);
}

function sub (){
    return (a-b);
}



function r(c,d)//r means function name 
{
    let divide = c/d 
    return divide
}



multiple(att,add,sub,r)// only output kirtiman,14 no error and no goes to sub function

/* *****************Exp6********************* */

function multiple(att,add,sub,r){

 att();
 add(10,4);
 sub(22,10);
 r(4,2);
    
}


function att(){
    let name = "Kirtiman";
    console.log(name)
}

function add(a,b){
    console.log(a+b);
}

let storeone;
function sub (a,b){
 storeone = a-b;
 return storeone;

}
console.log(storeone)


let divideone;
function r(c,d)//r means function name 
{
    let divideone = c/d 
    return divideone
   
}
console.log(divideone)

multiple(att,add,sub,r) /* output undefined
undefined
Kirtiman
14 


here function call hone se pehele console.log(storeOne)=undefined ,console.log(divideone)=undefined print hua uske baad multiple function call hua then after call sub function ke pass gaya but update result store one variable mein  gaya lekin print karne ke liye phir se console karna padega after function so hamesha function ke baad console kare resut show karwane ke liye exp 10 dekhe  */


/* *************************Exp7******************** */


function multiple(att,add,sub,r){

 att();
 add(10,4);
 let res = sub(22,10);
 let ans = r(4,2);// function ke andar varible declare ya initialize hoga toh dusre function ishe use nahi kar payenge eea local variable honge so yadi baki same variable use karna chahetain hain toh function se pehele globally declare karo exp 9 dekho  
    
}


function att(){
    let name = "Kirtiman";
    console.log(name)
}

function add(a,b){
    console.log(a+b);
}

let store;
function sub (a,b){
 store = a-b;
 return store;

}
console.log(res)/* console.log(res)  ReferenceError: res is not defined */


let divide;
function r(c,d)//r means function name 
{
    let divide = c/d 
    return divide
   
}
console.log(ans)

multiple(att,add,sub,r)



/* ***************************Exp8********************** */

function multiple(att,add,sub,r){

 att();
 add(10,4);
 sub(22,10);
 r(4,2);
    
}


function att(){
    let name = "Kirtiman";
    console.log(name)
}

function add(a,b){
    console.log(a+b);
}


function sub (a,b){
 store = a-b;
 return storeTwo;

}
console.log(storeTwo)



function r(c,d)//r means function name 
{
    let divide = c/d 
    return divide
   
}
console.log(divide)// error divide not defined

multiple(att,add,sub,r)





/* *************************exp9****************** */

let storeTwo;
let divisionResult;

function multiple(att,add,sub,r){

 att();
 add(10,4);
 sub(22,10);
 r(4,2);
    
}


function att(){
    let name = "Kirtiman";
    console.log(name)
}

function add(a,b){
    console.log(a+b);
}


function sub (a,b){
 storeTwo = a-b;
 return storeTwo;

}
console.log(storeTwo)



function r(c,d)//r means function name 
{
    divisionResult = c/d 
    return divisionResult
   
}
console.log(divisionResult)

multiple(att,add,sub,r)  /* undefined
undefined
Kirtiman
14 
here function call hone se pehele console.log(storeTwo)=undefined ,console.log(divisionResult)=undefined print hua uske baad multiple function call hua then after call sub function ke pass gaya but update result store Two variable mein  gaya lekin print karne ke liye phir se console karna padega after function so hamesha function ke baad console kare resut show karwane ke liye exp 10 dekhe  */



/* ******************Exp10******************* correct provides desired output *****************************************************/


let storeThree;
let divisionResultOne;

function multiple(att,add,sub,r){

 att();
 add(10,4);
 sub(22,10);
 r(4,2);
    
}


function att(){
    let name = "Kirtiman";
    console.log(name)
}

function add(a,b){
    console.log(a+b);
}


function sub (a,b){
 storeThree = a-b;
 return storeThree;

}




function r(c,d)//r means function name 
{
    divisionResultOne = c/d 
    return divisionResultOne
   
}


multiple(att,add,sub,r)
console.log(storeThree)
console.log(divisionResultOne)





/* *******************Exp11******************** */
let storeFive
let divideFive
function multiple(sayName,add,sub,r){

    sayName(),add(10,4),sub(),r(4,2)// here eshe karne se bhi function call hoga lekin eea valid nahi hai hai biche jaise call hua hai exp 12 dekho 
/* att();
 add(10,4);
 sub(22,10);
 r(4,2); */
    
}


function sayName(){
    let name = "Kirtiman";
    console.log(name)
}

function add(a,b){
    console.log(a+b);
}

function sub (a,b){
    storeFive = a-b;
    return storeFive
}



function r(c,d)//r means function name 
{
    let divideFive = c/d   //here divide Five phir se declare hua so output update hua return ka nahi aaya eea khali ho ke gaya console hone exp 11,12 dekho samajh aa jayega 
    return divideFive    // eea gaya  1st global divide five ke pass jo function multiple se jo phele tha wahan store hua result 2 ya c/d 
}



multiple(sayName,add,sub,r);
console.log(storeFive)
console.log(divideFive)/* output kirtiman,14,Nan,undefined */






/* *******************Exp12******************** */

let storeSix;
let divisionResultSix;

function multiple(att,add,sub,r){

 att();
 add(10,4);
 sub(22,10);
 r(4,2);
    
}


function att(){
    let name = "Kirtiman";
    console.log(name)
}

function add(a,b){
    console.log(a+b);
}


function sub (a,b){
 storeSix = a-b;
 return storeSix;

}




function r(c,d)//r means function name 
{
    divisionResultSix = c/d 
    return divisionResultSix
   
}


multiple(att,add,sub,r)
console.log(storeSix)
console.log(divisionResultSix)/* accurate outputaccurate output  Kirtiman
14
12
2*/


/* ***************************************************** EXP13 ********************************************************/

let storeSeven,divideSeven;
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
   storeSeven= a-b;
   return storeSeven;
}



function r(c,d)//r means function name 
{
    divideSeven = c/d
    return divideSeven
}



multiple(sayName,add,sub,r);

console.log(storeSeven)
console.log(divideSeven) /* accurate outputaccurate output  Kirtiman
14
20
2*/



/* *******************************exp14***************************/
let storeseven;
function multiple(sayName,add,sub)
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
multiple(sayName,add,sub)/* modern function calling mein ek function ke andar bahat sare nested functions nested hoke rehete hain toh again as a argument unhe call karna kuch need nahi hai ish se error aayega  */

console.log(storeseven)

/* *************************exp15************************** */

let storeeight;
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
        storeeight =a-b;
        return storeeight;
    }
    sub(10,8)
}
multiple()

console.log(storeeight)


/* ******************************nested call function*********************** */

/* **********************************exp16************************** */


let greet =function(){
   
    function hi(){
        function medium(){
            function small(){
         console.log("hi iam arrow function ")
        }
        }
    }
}
greet()/*onetime call nothing print means Yahan sirf:

greet();

call hua hai.

Baaki kisi function ko call nahi kiya.*/





/* **********************************exp17************************** */


let greetone =function(){
   
    function hi(){
        function medium(){
            function small(){
         console.log("hi iam arrow function ")
        }
        }
    }
}
greetone()()/* Pehla () call greet greet run ho gaya Lekin greet mein return nahi hai: so JavaScript automatically return karta hai:

undefined So:greet()ka result:undefined  Ab second () kya karega?

Tumne likha:

greet()()

JavaScript isko roughly aise dekhta hai:

undefined()

Aur problem ye hai:

undefined koi function nahi hai.

Isliye error:

TypeError: greet(...) is not a function

*/  

/* **********************************exp18************************** */

let greetTwo =function(){
   
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
greetTwo()()()()/* greet()()()();   
// greet() → hi
//      () → medium
//          () → small
//              () → runs small(), prints the message */

