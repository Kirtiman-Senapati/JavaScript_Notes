

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



/* common mistake */

function subtractTwonumber(a,b)
{
    let a;
    let b;
    result = a-b;
    console.log(result)
}
subtractTwonumber(10,8)

/* Haan, yahan **`var` aur `let` ka important difference** hai. Tumhara confusion exactly `a` aur `b` ko dobara declare karne ki wajah se aa raha hai.

Tumhara code:

```javascript
function subtractTwonumber(a, b)
{
    var a, b;

    result = a - b;

    console.log(result);
}

subtractTwonumber(10, 8);
```

Tum keh rahe ho `var` se output `2` aaya aur `let` se:

```text
Identifier 'a' has already been declared
```

Ye samajhne ke liye 2 concepts alag karo.

---

## 1. Sabse pehle: `a` aur `b` already parameters hain

Function declaration:

```javascript
function subtractTwonumber(a, b)
```

already bana chuka hai:

```text
a
b
```

Aur function call:

```javascript
subtractTwonumber(10, 8)
```

par:

```text
a = 10
b = 8
```

So function ke andar entering time:

```text
a → 10
b → 8
```

---

# 2. `var a, b` kyun error nahi deta?

Tumne likha:

```javascript
var a, b;
```

JavaScript mein `var` ko **same function scope mein dobara declare karna allowed hai**.

Matlab:

```javascript
function test(a)
{
    var a;
}
```

ye legal hai.

Important: `var a;` yahan `a` ko **10 se undefined nahi karta**.

Sirf dobara declaration hai, nayi value assign nahi ki.

So:

```text
a = 10
b = 8
```

hi rehte hain.

---

# 3. Isliye subtraction kya hua?

```javascript
result = a - b;
```

Current values:

```text
a = 10
b = 8
```

Therefore:

```text
10 - 8 = 2
```

**Is code ka output `2` hona chahiye, `8` nahi.**

Agar tumhare console mein `8` aa raha hai, to likely tum jis exact code ko run kar rahe ho usmein `result = a-b` wali line ya surrounding code alag hai, ya console mein purana output dekh rahe ho.

For this exact code:

```javascript
function subtractTwonumber(a, b)
{
    var a, b;
    result = a - b;
    console.log(result);
}

subtractTwonumber(10, 8);
```

expected output:

```text
2
```

---

# 4. Ab `let a, b` kyun error deta hai?

Tum agar likho:

```javascript
function subtractTwonumber(a, b)
{
    let a, b;

    result = a - b;
    console.log(result);
}
```

to error aayega:

```text
Identifier 'a' has already been declared
```

Reason:

Function ke parameters already:

```javascript
a
b
```

hain.

Aur `let a` keh raha hai:

> Main isi scope mein ek aur `a` banana chahta hoon.

Lekin same scope mein `let` ko duplicate declaration allowed nahi hai.

So:

```text
function parameter → a
                 ↓
              let a
                 ↓
        ❌ duplicate declaration
```

---

# 5. `var` vs `let` ka main difference

### `var`

```javascript
function test(a)
{
    var a;
}
```

✅ Allowed.

`var` same function scope mein redeclare ho sakta hai.

### `let`

```javascript
function test(a)
{
    let a;
}
```

❌ Not allowed.

`let` same scope mein same identifier ko dobara declare nahi kar sakta.

---

# 6. Sabse important: `var a` aur `a = 10` same nahi hain

Ye distinction bahut important hai.

### Declaration

```javascript
var a;
```

Matlab:

> `a` naam ka variable declare karo.

### Assignment

```javascript
a = 10;
```

Matlab:

> `a` mein 10 rakho.

### Initialization

```javascript
var a = 10;
```

Matlab:

> `a` declare karo aur starting value 10 do.

---

# 7. Tumhare function ko actually `var a,b` ki zarurat hi nahi hai

Correct code:

```javascript
function subtractTwonumber(a, b)
{
    let result = a - b;
    console.log(result);
}

subtractTwonumber(10, 8);
```

Output:

```text
2
```

Yahan:

```text
a = 10
b = 8
```

aur:

```text
result = 10 - 8
       = 2
```

---

## Ek aur interesting example

```javascript
function test(a)
{
    var a = 20;
    console.log(a);
}

test(10);
```

Output:

```text
20
```

Kyunki `var a = 20` ne parameter `a` ki value replace kar di.

Lekin:

```javascript
function test(a)
{
    let a = 20;
}
```

❌ Error, because `a` already parameter ke form mein declared hai.

---

### Ek line mein yaad rakho:

**Function parameter bhi variable declaration hota hai.**

Isliye:

```javascript
function test(a) { ... }
```

ke andar:

```javascript
var a;
```

✅ allowed

lekin:

```javascript
let a;
```

❌ duplicate declaration error.
 */

//Another Example 
function discussScope()
{
    let a = 10
    let b = 20
    result = a+b;
    console.log(result) //output 30 here function eassily access let a,b  because a and declare in inside function and it is example of local scope 
}
discussScope();

/* Another example of global scope  */

let scope ="kirtiman"

function globalScope()
{
    console .log(scope) // output kirtiman easily access variable scope because it is declare before creating function for this reason it is accesseble by function 
}
globalScope();



/* Example 3 create variable outside after creating Function */

function scope()
{
    console.log(scopeAftercreatingFunction) // accessible  varriable print output kirtiman Senapati here console.log(scopeAftercreatingFunction) /task inside function but variable declare outside function 
}

let scopeAftercreatingFunction = "kirtiman Senapati"

scope() 


/* Example 4  of function scope  */

function printoutsideSope()
{
    let insidescope = "hi iam inside function so You donot accept Outside function"
}
console.log(insidescope) //ReferenceError: insidescope is not defined because Variable  inside function so You donot accept Outside function
printoutsideScope() 

//here console.log(insidescope) /task outside function but variable declare inside function


/* example 4 of function scope with function expression  */

let globalName = "hi iam global variable of function expression "
let expression = function ()
{
    console.log(globalName); // output hi iam global variable of function expression easily access by function 
}
expression();


/* example 5 of function scope with function expression here create variable after creating function   */

let expression2 = function ()
{
    console.log(scopeAftercreatingFunctionExpression) //output hi iam created lately outside after function accessible variable 
}
let scopeAftercreatingFunctionExpression = "hi iam created lately outside after function "

expression2()



/* example 6 of function scope with function expression here task outside function but declare varible inside function  */

let taskOutsidefunction = function()
{
    let insidescope = "hi iam inside function so You donot accept Outside function"
}
console.log(insidescope) //ReferenceError: insidescope is not defined because Variable  inside function so You donot accept Outside function

taskOutsidefunction();


/* Difference between Function expression and declaration with scope  */

printName();
function printName(){
    let myName = "kirtiman";
    console.log(myName)
}
// easily call before creating function no provide error in function declaration 
/* but same code provide error in function expression  */

//***********************Example 2 *********************************/

printName2();
let printName2 =function(){
    let myName = "kirtiman";
    console.log(myName)// output Uncaught ReferenceError: Cannot access 'printName2' before initialization
}