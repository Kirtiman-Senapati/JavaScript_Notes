/* in java ya c only similar type data store in array but in js different types data store in array  */

let b =[1,"kirtiman",null,true,{name:"kirtiman",age:89}]



/* Array ka index */
let fruits = ["Banana","Apple","orange"]

console.log(fruits[0])//output banana in array starting from index 0



/* Array length matlab array mein kitne elements hai use array.length for showing total elements / items in array  */
let a = ["Banana","Apple","orange"]

console.log(a.length)// total output 3 

/* N.B 
length =count/elements starting from 1
index = position it starts from 0 
*/



/* creating Array */

//1st method 

let z = ["Banana","Apple","orange"]

//2nd method 
const  cars = [] //empty array

cars[0]="honda"
cars[1]="Safari"
cars[3]= "suzuki"// 2nd element empty hoga because 1 ke baad index 3 hai  

console.log(cars)

//3rd method using javascript keyword new 

const bike = new Array("tvs","hero","suzuki")

console.log(bike)



/* Array methods  */

// push() // it push elements from ending ya last 

let vegetables =["carrot","onion","potato"]

console.log(vegetables)// output ["carrot","onion","potato"]

vegetables.push("ladiis finger","cucummber","beat")


console.log(vegetables)//output ["carrot","onion","potato,ladiis finger","cucummber","beat"]




//pop() it delete from lasting ya ending 

    vegetables.pop()
    

console.log(vegetables)//[ 'carrot', 'onion', 'potato', 'ladiis finger', 'cucummber' ] only delete beat element 


vegetables.pop("ladiis finger")//wrong provide parameter 

console.log(vegetables) //[ 'carrot', 'onion', 'potato', 'ladiis finger' ] only delete item from last if give arguments or not 


//Shift() method delete from start 

vegetables.shift()

console.log(vegetables)//[ 'onion', 'potato', 'ladiis finger' ] delete carrot from starting

//unshift() method add element from starting

vegetables.unshift("pumpkin")

console.log(vegetables)//[ 'pumpkin','onion', 'potato', 'ladiis finger' ] add pumpkin from starting 





/* ******************************************** Splice method ********************************************** */

//eea method remove,add,replace  karta hai specific items ko ya range ko

let arr =["Ankit","Rohan","Ayush","kirtiman","cheeranjeeb"]

arr.splice(2)//here index  2 se elements katna start kiya end tak because gives 1 argument only start index 2

console.log(arr)


let arr2 =["Ankit","Rohan","Ayush","kirtiman","cheeranjeeb"]

arr2.splice(1,3)//index 1 se start karo aur total 3 elements remove karo

console.log(arr2)  //['Ankit,'cheeranjeeb'] because provides parameter 1,3 so "Rohan","Ayush","kirtiman" deleted ya remove 


/* Splice with add  */

let s=[10,79,60,45,55]
s.splice(2,1,"kirtiman")//here 2 index se 1 element delete karega then same 2 index se last index ke beech "kirtiman"add kar dega 
console.log(s)//[10,79,"kirtiman",45,55]

let s2=[10,79,60,45,55,88,99,77]

s2.splice(2,4,"Ayush")

console.log(s2)//[10,79,'Ayush',99,77]




/* ******************************************* Slice method ************************************************ */

let arr3 = ["subham","kirtiman", "Ankush","rohit","Rohan","Ansuman"]

newArray = arr3.slice(1,3) //eea starting index 1 se element ko cut kar raha hai index 2 tak hamesha right value ya last value -1 tak elements ko cut karega here starting index 1 and last /end index 3 means 3-1 = 2 index ya 2 elements ko cut karke separate array karega 

console.log(arr3)////this method not store perform operation in same array eea specially values ko cut ya part niklta hai and dusre varriable mein store karta hai isilye updated result ko dekhne ke liye new varriable mein operation store karna padega 

console.log(newArray)//["kirtiman""Ankush"]




/**************************************************************  Sort method ***************************************/


let array = ["subham","kirtiman", "Ankush","rohit","Rohan","Ansuman"]

array.sort()

console.log(array)//['Ankush', 'Ansuman', 'Rohan', 'kirtiman', 'rohit', 'subham'] sorting through ascii value 


let arraynum =[8,6,7,2,5,1,3]

arraynum.sort()

console.log(arraynum)//[1, 2, 3, 5, 6, 7, 8] working perfectly but issue comes in 2 digit words 



let  array2 =[8,6,7,2,5,1,3,55,11,44,33]

array2.sort()

console.log(array2)//[1, 11, 2, 3, 33, 44, 5, 55, 6, 7, 8] not sorted properly so use function a-b for providing accurated result 


let  array3 =[8,6,7,2,5,1,3,55,11,44,33]

array3.sort((a,b) => a-b)  //convert array value in numbers then store in a and b then check with a - b yadi "a" small then  a mein store smallest value like this check till ending the array length   so now sorting work properly, for desending use b-a instead a-b  

console.log(array3) //[1, 2, 3, 5, 6, 7, 8, 11, 33, 44, 55]  


/****************************************   Most important methods ************************  */


/* ********************************************  Map  ******************************************************************** */


let arrayMap = [8,6,7,2,5,1,3,55,11,44,33]

arrayMap.map()
console.log(arrayMap)//Uncaught TypeError: undefined is not a function at Array.map (<anonymous>) eea isliye aaya kyun ki map mein function nahi tha map mein hamesha function use hote hai and it always do  operation in new array so new operation ko store ke baad result show hoga 

/* Another example */

let u = [8,6,7,2,5,1,3,55,11,44,33]

let result = u.map( a => a+10 )//single annonymous arrow function sab value ko a mein store karke 10 add karke same length ka updated array  miilta hai here sab vale ke saath 10 add karke same length ka array de raha hai 


console.log(result)//[18, 16, 17, 12, 15, 11, 13, 65, 21, 54, 43]


/* Simplification mdn documentation */



/* Sure. Let’s understand this **`map()` syntax from zero**, in very simple language.

---

# 1. First understand what `map()` does

The easiest definition is:

> **`map()` takes every element of an array, does something with each element, and creates a NEW array containing the results.**

Example:

```javascript
let numbers = [1, 2, 3, 4];

let result = numbers.map(function(value) {
    return value * 2;
});

console.log(result);
```

Output:

```text
[2, 4, 6, 8]
```

### What happened?

`map()` went through the array one by one:

```text
1 → 1 × 2 → 2
2 → 2 × 2 → 4
3 → 3 × 2 → 6
4 → 4 × 2 → 8
```

So:

```javascript
[1, 2, 3, 4]
```

became:

```javascript
[2, 4, 6, 8]
```

---

# 2. Now your syntax

You showed:

```javascript
map(
    callbackfn: (value: number, index: number, array: number[]) => any,
    thisArg?: any
): any[]
```

Don't get scared by this 😄.

This is **TypeScript/VS Code's description of the `map()` method**, not the normal JavaScript code you have to write.

We can break it into pieces.

```text
map(
   callbackfn,
   thisArg?
)
   ↓
returns an array
```

The important part is:

```javascript
array.map(callbackfn)
```

---

# 3. What is `callbackfn`?

`callbackfn` means:

> **A function that `map()` will call for every element of the array.**

For example:

```javascript
let numbers = [10, 20, 30];

let result = numbers.map(function(value) {
    return value * 2;
});
```

Here:

```javascript
function(value) {
    return value * 2;
}
```

is the **callback function**.

`map()` calls this function once for every element.

So internally, think:

```text
10 → callback function → 20
20 → callback function → 40
30 → callback function → 60
```

Final:

```javascript
[20, 40, 60]
```

---

# 4. `value` — first argument

The callback can receive:

```javascript
(value, index, array)
```

The first one is:

```javascript
value
```

### `value` means:

> **The current element of the array.**

Example:

```javascript
let numbers = [10, 20, 30];

numbers.map(function(value) {
    console.log(value);
});
```

Output:

```text
10
20
30
```

Because `map()` gives each element to `value`.

Think:

```text
First round:
value = 10

Second round:
value = 20

Third round:
value = 30
```

---

# 5. `index` — second argument

The second argument is:

```javascript
index
```

It means:

> **The position of the current element.**

Example:

```javascript
let numbers = [10, 20, 30];

numbers.map(function(value, index) {
    console.log(value, index);
});
```

Output:

```text
10 0
20 1
30 2
```

Because array positions start from `0`.

```text
Array:

index:    0    1    2
          ↓    ↓    ↓
value:   10   20   30
```

So:

```text
value = 10, index = 0
value = 20, index = 1
value = 30, index = 2
```

---

# 6. `array` — third argument

The third argument is:

```javascript
array
```

It means:

> **The complete original array on which `map()` is being used.**

Example:

```javascript
let numbers = [10, 20, 30];

numbers.map(function(value, index, array) {
    console.log(value);
    console.log(index);
    console.log(array);
});
```

During each callback:

```text
value  → current element
index  → current position
array  → complete original array
```

For example, first round:

```text
value = 10
index = 0
array = [10, 20, 30]
```

Second round:

```text
value = 20
index = 1
array = [10, 20, 30]
```

Third round:

```text
value = 30
index = 2
array = [10, 20, 30]
```

---

# 7. Why does it say `number`?

Your VS Code shows:

```javascript
(value: number, index: number, array: number[])
```

Because your array is probably something like:

```javascript
let numbers = [10, 20, 30];
```

These are numbers.

Therefore:

```text
value: number
```

means:

> `value` will contain a number.

And:

```text
index: number
```

means:

> `index` will also be a number.

And:

```text
array: number[]
```

means:

> `array` is an array containing numbers.

For example:

```javascript
[10, 20, 30]
```

is a:

```text
number[]
```

---

# 8. What does `=> any` mean?

You see:

```javascript
(value: number, index: number, array: number[]) => any
```

The:

```javascript
=>
```

means **"returns"** in this type description.

So this:

```javascript
(value, index, array) => any
```

basically says:

> The callback function can receive `value`, `index`, and `array`, and it can return any type of result.

For example, callback can return a number:

```javascript
function(value) {
    return value * 2;
}
```

It returns:

```text
number
```

Or it can return a string:

```javascript
function(value) {
    return "Hello " + value;
}
```

It returns:

```text
string
```

---

# 9. What does `any[]` at the end mean?

Your syntax ends with:

```javascript
): any[]
```

This means:

> **`map()` returns an array.**

For example:

```javascript
let numbers = [1, 2, 3];

let result = numbers.map(function(value) {
    return value * 2;
});
```

`map()` returns:

```javascript
[2, 4, 6]
```

Therefore:

```text
any[]
 ↓
an array containing the results
```

---

# 10. Most important rule of `map()`

Remember this:

```javascript
map()
```

**doesn't normally change your original array.**

Example:

```javascript
let numbers = [1, 2, 3];

let result = numbers.map(function(value) {
    return value * 10;
});

console.log(numbers);
console.log(result);
```

Output:

```text
[1, 2, 3]
[10, 20, 30]
```

Original:

```javascript
numbers
↓
[1, 2, 3]
```

New array:

```javascript
result
↓
[10, 20, 30]
```

So you can think:

```text
Original array
      ↓
    map()
      ↓
callback runs on every element
      ↓
New array
```

---

# 11. Very simple real-life example

Suppose you have:

```javascript
let prices = [100, 200, 300];
```

You want to add ₹10 to every price.

```javascript
let newPrices = prices.map(function(price) {
    return price + 10;
});

console.log(newPrices);
```

Output:

```text
[110, 210, 310]
```

`map()` does:

```text
100 → 100 + 10 → 110
200 → 200 + 10 → 210
300 → 300 + 10 → 310
```

---

# 12. Same thing using arrow function

Instead of:

```javascript
let newPrices = prices.map(function(price) {
    return price + 10;
});
```

you can write:

```javascript
let newPrices = prices.map((price) => {
    return price + 10;
});
```

Or even shorter:

```javascript
let newPrices = prices.map(price => price + 10);
```

All three do the same thing.

---

# 13. Using all three arguments

Let's use:

```javascript
let names = ["Ankit", "Rohan", "Ayush"];
```

Code:

```javascript
names.map(function(value, index, array) {
    console.log(value);
    console.log(index);
    console.log(array);
});
```

Think of `map()` doing this:

### First time

```text
value = "Ankit"
index = 0
array = ["Ankit", "Rohan", "Ayush"]
```

### Second time

```text
value = "Rohan"
index = 1
array = ["Ankit", "Rohan", "Ayush"]
```

### Third time

```text
value = "Ayush"
index = 2
array = ["Ankit", "Rohan", "Ayush"]
```

So the three parameters have a very simple meaning:

```text
value  → current element
index  → current position
array  → complete original array
```

---

# 14. Do I have to write all three?

**No.**

You can use only what you need.

### Only value

```javascript
numbers.map(function(value) {
    return value * 2;
});
```

### Value + index

```javascript
numbers.map(function(value, index) {
    return value + index;
});
```

### Value + index + array

```javascript
numbers.map(function(value, index, array) {
    // use all three
});
```

Usually, you will use only:

```javascript
(value)
```

or:

```javascript
(value, index)
```

---

# 15. What is `thisArg?: any`?

This is an **optional** argument.

The `?` means:

> **You don't have to provide it.**

So:

```javascript
thisArg?: any
```

means:

```text
thisArg is optional
```

For normal beginner-level `map()` usage, you can mostly ignore `thisArg`.

For example, this is completely normal:

```javascript
numbers.map(function(value) {
    return value * 2;
});
```

You don't need to provide `thisArg`.

---

# 16. Understand the entire syntax in one picture

Your VS Code says:

```javascript
map(
    callbackfn: (value: number, index: number, array: number[]) => any,
    thisArg?: any
): any[]
```

Translate it into simple English:

```text
map()
 │
 ├── callback function
 │      │
 │      ├── value → current element
 │      ├── index → current index
 │      └── array → original array
 │
 ├── thisArg → optional
 │
 └── returns → a NEW array
```

---

# 17. The one example you should remember

```javascript
let numbers = [10, 20, 30];

let result = numbers.map(function(value, index, array) {
    return value * 2;
});

console.log(result);
```

Think:

```text
numbers
   ↓
[10, 20, 30]
   ↓
   map()
   ↓
┌──────────────────────┐
│ value = 10 → ×2 = 20│
│ value = 20 → ×2 = 40│
│ value = 30 → ×2 = 60│
└──────────────────────┘
   ↓
[20, 40, 60]
```

### Final memory trick:

> **`map()` = "Go through every element and make a new array from the results."**

And inside the callback:

```javascript
(value, index, array)
```

means:

```text
value = "What is the current element?"
index = "Where is it?"
array = "Which array are we working on?"
```

That's the core of `map()`.

*/

/* *****************Filter****************************** */


let arr5 =[8,6,7,2,5,1,3,55,11,44,33]

let res = arr5.filter(function(a){
    return  a > 5
})

console.log(res)//eea map ke tarah similar hai sare array elements ko function ke andar new value mein store karta hai lekin sare values ko update ya return nahi karta eea user ke Diye gaye condition ke basis per result ko new array mein store karke dikhata hai here check kiya array mein kaunsa elements 5 se bada hai then same elements ko new array mein store karke print kardiya  isliye output [8,6,7,55,11,44,33] 




/* Simplification mdn documentation */


/* 
Yes 👍 `filter()` is very similar to `map()`, but there is **one very important difference**:

> **`map()` changes/transforms every element and returns the results.**
> **`filter()` checks every element and keeps only the elements that satisfy a condition.**

Let's understand your VS Code definition step by step.

---

# 1. First understand `filter()` in simple language

Suppose:

```javascript
let numbers = [10, 15, 20, 25, 30];
```

You want only numbers greater than `20`.

```javascript
let result = numbers.filter(function(value) {
    return value > 20;
});

console.log(result);
```

Output:

```text
[25, 30]
```

Why?

```text
10 → 10 > 20 ? ❌ → remove
15 → 15 > 20 ? ❌ → remove
20 → 20 > 20 ? ❌ → remove
25 → 25 > 20 ? ✅ → keep
30 → 30 > 20 ? ✅ → keep
```

So:

```text
Original array
[10, 15, 20, 25, 30]
          ↓
       filter()
          ↓
Check each element
          ↓
[25, 30]
```

---

# 2. Your VS Code syntax

You have:

```javascript
filter(
    predicate: (value: number, index: number, array: number[]) => value is number,
    thisArg?: any
): number[]
```

It looks complicated, but we can simplify it to:

```javascript
array.filter(callback)
```

The important thing is the **predicate**.

---

# 3. What is `predicate`?

Your syntax says:

```javascript
predicate: (...)
```

A **predicate function** is simply:

> A function that checks a condition and gives a `true` or `false` answer.

For example:

```javascript
function(value) {
    return value > 20;
}
```

This function asks:

```text
Is value greater than 20?
```

It gives:

```text
true
```

or:

```text
false
```

That's why `filter()` needs a predicate.

---

# 4. Why `true` and `false`?

This is the **most important concept** of `filter()`.

Suppose:

```javascript
let numbers = [10, 20, 30];
```

And:

```javascript
let result = numbers.filter(function(value) {
    return value > 15;
});
```

`filter()` checks each element.

### First:

```text
value = 10

10 > 15
   ↓
false
```

Because it's `false`, **10 is not included**.

### Second:

```text
value = 20

20 > 15
   ↓
true
```

Because it's `true`, **20 is included**.

### Third:

```text
value = 30

30 > 15
   ↓
true
```

Because it's `true`, **30 is included**.

Final result:

```javascript
[20, 30]
```

So remember:

```text
true  → KEEP
false → REMOVE
```

---

# 5. `value`

Just like `map()`, the first parameter is:

```javascript
value
```

It means:

> **Current element of the array.**

Example:

```javascript
let numbers = [10, 20, 30];

numbers.filter(function(value) {
    console.log(value);
    return value > 15;
});
```

The callback receives:

```text
value = 10
value = 20
value = 30
```

One at a time.

---

# 6. `index`

The second parameter is:

```javascript
index
```

It means:

> **Position of the current element.**

Example:

```javascript
let numbers = [10, 20, 30];

numbers.filter(function(value, index) {
    console.log(value, index);

    return value > 15;
});
```

Output:

```text
10 0
20 1
30 2
```

So:

```text
value    index

10       0
20       1
30       2
```

Same as `map()`.

---

# 7. `array`

The third parameter:

```javascript
array
```

means:

> **The complete original array.**

Example:

```javascript
let numbers = [10, 20, 30];

numbers.filter(function(value, index, array) {
    console.log(value);
    console.log(index);
    console.log(array);

    return value > 15;
});
```

During every callback:

```text
value  → current element
index  → current position
array  → complete original array
```

Again, this is exactly like `map()`.

---

# 8. So what does this part mean?

You have:

```javascript
(value: number, index: number, array: number[])
```

It means:

```text
value
 ↓
number

index
 ↓
number

array
 ↓
array of numbers
```

For:

```javascript
let numbers = [10, 20, 30];
```

you can think:

```text
value = 10
index = 0
array = [10, 20, 30]
```

---

# 9. Now the confusing part: `value is number`

Your VS Code shows:

```javascript
(value: number, index: number, array: number[]) => value is number
```

This looks strange.

For **normal JavaScript learning**, don't worry too much about this part.

It is TypeScript's **type-predicate syntax**.

The simple idea is that the callback is expected to work as a **condition/test**.

For your JavaScript understanding, think:

```javascript
(value, index, array) => true or false
```

For example:

```javascript
(value) => value > 20
```

The result is:

```text
true
```

or:

```text
false
```

That's what matters for understanding `filter()`.

---

# 10. Why is it `number[]` at the end?

Your definition ends with:

```javascript
): number[]
```

This means:

> `filter()` returns an array of numbers.

Example:

```javascript
let numbers = [10, 20, 30, 40];

let result = numbers.filter(function(value) {
    return value > 20;
});
```

Result:

```javascript
[30, 40]
```

That's a:

```text
number[]
```

because it is an array containing numbers.

---

# 11. `thisArg?: any`

Just like with `map()`, you see:

```javascript
thisArg?: any
```

The `?` means:

> **Optional.**

You don't need it for normal `filter()` usage.

So you can simply write:

```javascript
numbers.filter(function(value) {
    return value > 20;
});
```

and ignore `thisArg` for now.

---

# 12. Very important: `filter()` does NOT modify the original array

Example:

```javascript
let numbers = [10, 20, 30, 40];

let result = numbers.filter(function(value) {
    return value > 20;
});

console.log(numbers);
console.log(result);
```

Output:

```text
[10, 20, 30, 40]
[30, 40]
```

Original array stays:

```javascript
[10, 20, 30, 40]
```

New filtered array is:

```javascript
[30, 40]
```

---

# 13. `map()` vs `filter()` — VERY IMPORTANT

This is where you should clearly understand the difference.

### `map()`

```javascript
let numbers = [1, 2, 3, 4];

let result = numbers.map(function(value) {
    return value * 10;
});
```

Output:

```text
[10, 20, 30, 40]
```

`map()` says:

> **"What should each element become?"**

```text
1 → 10
2 → 20
3 → 30
4 → 40
```

---

### `filter()`

```javascript
let numbers = [1, 2, 3, 4];

let result = numbers.filter(function(value) {
    return value > 2;
});
```

Output:

```text
[3, 4]
```

`filter()` says:

> **"Should I keep this element?"**

```text
1 → false → remove
2 → false → remove
3 → true  → keep
4 → true  → keep
```

---

# 14. Easy way to remember

Think of a classroom.

Students:

```text
Ankit
Rohan
Ayush
Kirtiman
```

You say:

> "Give me only students whose name has more than 5 letters."

That's a **filter**.

```text
Ankit     → 5 letters → ❌
Rohan     → 5 letters → ❌
Ayush     → 5 letters → ❌
Kirtiman  → 8 letters → ✅
```

Result:

```javascript
["Kirtiman"]
```

So:

> **Filter = Select/Keep the elements that pass a condition.**

---

# 15. More examples

### Get even numbers

```javascript
let numbers = [1, 2, 3, 4, 5, 6];

let even = numbers.filter(function(value) {
    return value % 2 === 0;
});

console.log(even);
```

Output:

```text
[2, 4, 6]
```

Because:

```text
1 → odd  → false → ❌
2 → even → true  → ✅
3 → odd  → false → ❌
4 → even → true  → ✅
5 → odd  → false → ❌
6 → even → true  → ✅
```

---

# 16. Using arrow function

Instead of:

```javascript
let even = numbers.filter(function(value) {
    return value % 2 === 0;
});
```

You can write:

```javascript
let even = numbers.filter(value => value % 2 === 0);
```

Same result:

```text
[2, 4, 6]
```

---

# 17. One more important example

Suppose:

```javascript
let ages = [12, 18, 25, 15, 30];
```

You want people who are adults:

```javascript
let adults = ages.filter(function(age) {
    return age >= 18;
});

console.log(adults);
```

Output:

```text
[18, 25, 30]
```

The process is:

```text
12 → 12 >= 18 → false → ❌
18 → 18 >= 18 → true  → ✅
25 → 25 >= 18 → true  → ✅
15 → 15 >= 18 → false → ❌
30 → 30 >= 18 → true  → ✅
```

---

# 18. Final meaning of your complete definition

Your VS Code says:

```javascript
filter(
    predicate: (value: number, index: number, array: number[]) => value is number,
    thisArg?: any
): number[]
```

Simple English:

```text
filter()
   ↓
takes a callback/predicate function
   ↓
calls it once for every element
   ↓
the callback checks a condition
   ↓
true  → keep the element
false → remove the element
   ↓
returns a NEW array
```

And the callback can receive:

```text
value → current element
index → current position
array → original array
```

### The main thing to remember:

> **`filter()` = "Check every element and keep only the elements for which the condition is TRUE."**

```javascript
let numbers = [10, 15, 20, 25, 30];

let result = numbers.filter(value => value > 20);

console.log(result);
```

```text
10 → false ❌
15 → false ❌
20 → false ❌
25 → true  ✅
30 → true  ✅

Result → [25, 30]
```

So if **`map()` = transform**, then **`filter()` = select/keep**.


*/