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

//Another Example i Can use default parameters means default value  so yadi arguments bhi nahi hai phir bhi default value lega   koi undefined output nahi aayega 


function greetUser2(name = "Kirtiman")
{
    console.log(name);//output here kirtiman 
}

greetUser2();

// common mistake


function greetUser3(name = "Kirtiman")
{
    console.log(greetUser3)
}

greetUser3();//output here [Function: greetUser3] ish se function jis variable mein store hai woh print hoga eshe result aayega 



/* Rest parameter  

 jab pata nahi user kitne arguments dega matlab supppose user ne 7 arguments diya lekin code mein 2 parameters hai toh error aa sakta hai isliye rest use hota hai yahan rest 2 arguments ko 2 parameter mein assign kar dega aur baki bache hue parameters ko array mein convert karke dikhayaga */


// example 1
function test(a, b, ...rest)
{
    console.log(a);
    console.log(b);
    console.log(rest);
}

test(10, 20, 30, 40, 50);//output 10 , 20 ,[ 30, 40, 50 ]

/* common mistake 2 */

function restParameter(num1,num2,num3,...rest)
{
    return num1 + num2 + num3 + rest

    
}
let result =restParameter(20,30,50,40,70,60,10)
console.log(result) //output 10040,70,60,10


/* Haan, tumhari expectation ka reason samajh mein aa raha hai. Yahan main important concept **`+` operator ka behaviour** hai.

Tumhara code:

```javascript
function restParameter(num1, num2, num3, ...rest)
{
    return num1 + num2 + num3 + rest;
}

let result = restParameter(20, 30, 50, 40, 70, 60, 10);

console.log(result);
```

Tum expect kar rahe the:

```text
100[40,70,60,10]
```

Lekin JavaScript output deta hai:

```text
10040,70,60,10
```

## 1. Sabse pehle `rest` mein kya store hua?

Tumne call kiya:

```javascript
restParameter(20, 30, 50, 40, 70, 60, 10)
```

Function ke parameters:

```javascript
num1 = 20
num2 = 30
num3 = 50
rest = [40, 70, 60, 10]
```

So ye bilkul sahi hai:

```text
rest = [40, 70, 60, 10]
```

---

## 2. Ab problem yahan hai

Tumne likha:

```javascript
return num1 + num2 + num3 + rest;
```

Pehle:

```text
num1 + num2 + num3
20 + 30 + 50
= 100
```

Ab expression ban gaya:

```javascript
100 + rest
```

Aur:

```text
rest = [40,70,60,10]
```

Toh effectively:

```javascript
100 + [40,70,60,10]
```

### Yahan JavaScript kya karta hai?

`+` operator jab **number + array** dekhta hai, toh array ko string mein convert kar deta hai.

Array:

```javascript
[40, 70, 60, 10]
```

string mein convert hota hai:

```text
"40,70,60,10"
```

Phir:

```javascript
100 + "40,70,60,10"
```

ban gaya.

Aur number + string mein `+` **concatenation** karta hai:

```text
"10040,70,60,10"
```

Isliye output:

```text
10040,70,60,10
```

---

# 3. Tum jo output chahte the

Tum chahte ho:

```text
100[40,70,60,10]
```

Toh tumhe explicitly string banana padega:

```javascript
function restParameter(num1, num2, num3, ...rest)
{
    return num1 + num2 + num3 + `[${rest}]`;
}

let result = restParameter(20, 30, 50, 40, 70, 60, 10);

console.log(result);
```

Output:

```text
100[40,70,60,10]
```

Yahan:

```javascript
`[${rest}]`
```

`rest` array ko string ke andar `[ ]` ke saath put kar raha hai.

---

# 4. Lekin agar tum actual array ko preserve karna chahte ho

Ye important difference hai.

Tum agar console mein:

```javascript
100[40,70,60,10]
```

**ek combined mathematical value** samajh rahe ho, toh JavaScript mein aisi single value normally nahi hoti.

Tum instead array ke andar dono values rakh sakte ho:

```javascript
function restParameter(num1, num2, num3, ...rest)
{
    return [num1 + num2 + num3, rest];
}

let result = restParameter(20, 30, 50, 40, 70, 60, 10);

console.log(result);
```

Output:

```text
[100, [40, 70, 60, 10]]
```

Ye actual structure hoga:

```text
100
[40,70,60,10]
```

ya conceptually:

```text
[
    100,
    [40, 70, 60, 10]
]
```

---

# 5. Ek aur important cheez: `rest` array hai

Ye:

```javascript
...rest
```

remaining arguments ko **array mein collect** karta hai.

Example:

```javascript
function test(a, b, ...rest)
{
    console.log(a);
    console.log(b);
    console.log(rest);
}

test(10, 20, 30, 40, 50);
```

Output:

```text
10
20
[30, 40, 50]
```

So:

```text
a → 10
b → 20
rest → [30,40,50]
```

---

## 6. `+` ka behaviour yaad rakho

### Number + Number

```javascript
100 + 20
```

→

```text
120
```

### String + Number

```javascript
"100" + 20
```

→

```text
10020
```

### Number + Array

```javascript
100 + [40, 70, 60, 10]
```

Array string ban jaata hai:

```text
100 + "40,70,60,10"
```

Result:

```text
10040,70,60,10
```

---

### Tumhare case ka complete flow

```javascript
return num1 + num2 + num3 + rest;
```

becomes:

```text
20 + 30 + 50 + [40,70,60,10]
```

↓

```text
100 + [40,70,60,10]
```

↓

array converts to string:

```text
100 + "40,70,60,10"
```

↓

string concatenation:

```text
"10040,70,60,10"
```

✅ **Isi wajah se tumhe `10040,70,60,10` mila.**

Aur ek correction: **`rest` ko square brackets mein dekhna chahte ho toh `console.log(result)` mein actual array chahiye, string nahi.** Isliye `[100, [40,70,60,10]]` wala example conceptually zyada correct hai.
=========================================================End about example 1 and mistake 2 ===================================================*/


/* ===========================================Example sum with rest ===============================================  */

function restParameter(num1, num2, num3, ...rest)
{
    let sum = num1 + num2 + num3;

    for (let num of rest)
    {
        sum = sum + num;
    }

    return sum;
}

let resultSum = restParameter(20, 30, 50, 40, 70, 60, 10);

console.log(resultSum);
/* {-------------Another Example of rest operator sum -----------------------}
Bilkul. Is code ko **ekdum line-by-line** aur execution ke order mein samjhte hain.

Tumhara code:

```javascript
function restParameter(num1, num2, num3, ...rest)
{
    let sum = num1 + num2 + num3;

    for (let num of rest)
    {
        sum = sum + num;
    }

    return sum;
}

let resultSum = restParameter(20, 30, 50, 40, 70, 60, 10);

console.log(resultSum);
```

## 1. Function banana

```javascript
function restParameter(num1, num2, num3, ...rest)
```

Yahan hum `restParameter` naam ka function bana rahe hain.

Is function ke paas 4 parameters hain:

```text
num1
num2
num3
...rest
```

Lekin `...rest` normal parameter se alag hai.

### `...rest` ka matlab

Jo bhi arguments `num1`, `num2`, `num3` ke baad bachenge, woh sab `rest` naam ke **array** mein chale jayenge.

---

## 2. Function call

Baad mein humne likha:

```javascript
let result = restParameter(20, 30, 50, 40, 70, 60, 10);
```

Ab JavaScript function ko call karta hai.

Values assign hongi:

```text
num1 = 20
num2 = 30
num3 = 50
```

Aur baaki values:

```text
40, 70, 60, 10
```

`rest` mein chali jayengi:

```javascript
rest = [40, 70, 60, 10]
```

So function ke andar ab:

```text
num1 → 20
num2 → 30
num3 → 50
rest → [40, 70, 60, 10]
```

---

# 3. Ye line

```javascript
let sum = num1 + num2 + num3;
```

Ab:

```text
num1 = 20
num2 = 30
num3 = 50
```

Isliye:

```text
sum = 20 + 30 + 50
```

```text
sum = 100
```

So ab:

```text
sum = 100
```

---

# 4. Ab `for...of` loop

```javascript
for (let num of rest)
```

Yahan `rest` hai:

```javascript
[40, 70, 60, 10]
```

`for...of` array ke **har element ko ek-ek karke** `num` variable mein rakhta hai.

So loop 4 times chalega.

---

# 5. First loop

`rest` ka first value:

```text
40
```

So:

```text
num = 40
```

Ab ye line chalegi:

```javascript
sum = sum + num;
```

Current value:

```text
sum = 100
num = 40
```

So:

```text
sum = 100 + 40
```

Result:

```text
sum = 140
```

---

# 6. Second loop

Next value:

```text
num = 70
```

Ab:

```javascript
sum = sum + num;
```

Current:

```text
sum = 140
num = 70
```

So:

```text
sum = 140 + 70
```

Result:

```text
sum = 210
```

---

# 7. Third loop

Next:

```text
num = 60
```

Current:

```text
sum = 210
num = 60
```

So:

```text
sum = 210 + 60
```

Result:

```text
sum = 270
```

---

# 8. Fourth loop

Next:

```text
num = 10
```

Current:

```text
sum = 270
num = 10
```

So:

```text
sum = 270 + 10
```

Result:

```text
sum = 280
```

Ab `rest` mein aur koi value nahi bachi.

Loop khatam.

---

# 9. `return sum`

Ab ye line chalegi:

```javascript
return sum;
```

Current:

```text
sum = 280
```

So function:

```text
280
```

return karega.

---

# 10. `result` mein value store

Ye line thi:

```javascript
let result = restParameter(20, 30, 50, 40, 70, 60, 10);
```

Function ne `280` return kiya.

So:

```text
result = 280
```

---

# 11. Finally `console.log`

```javascript
console.log(result);
```

Ab:

```text
result = 280
```

Isliye output:

```text
280
```

---

# Pura execution ek saath

Ye tumhari code ki complete journey hai:

```text
restParameter(20, 30, 50, 40, 70, 60, 10)
                     ↓
num1 = 20
num2 = 30
num3 = 50
rest = [40, 70, 60, 10]
                     ↓
sum = 20 + 30 + 50
                     ↓
sum = 100
                     ↓
num = 40 → sum = 100 + 40 = 140
                     ↓
num = 70 → sum = 140 + 70 = 210
                     ↓
num = 60 → sum = 210 + 60 = 270
                     ↓
num = 10 → sum = 270 + 10 = 280
                     ↓
return 280
                     ↓
result = 280
                     ↓
console.log(result)
                     ↓
280
```

## Sabse important `...rest` concept

Is example ko yaad rakho:

```javascript
function test(a, b, ...rest)
```

Aur:

```javascript
test(10, 20, 30, 40, 50)
```

Toh:

```text
a = 10
b = 20
rest = [30, 40, 50]
```

**`...rest` remaining arguments ko ek array mein collect karta hai.**

Aur tumhare code mein `for...of` us array ke numbers ko **one by one lekar sum mein add** kar raha hai.
============================================End====================================*/
 



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