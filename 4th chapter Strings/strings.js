
/* OPERATIONS  */

let str1 ="kirti"
let str2 ="man"
let str3 = str1 + str2
console.log(str3);


//* interview Question

console.log(typeof "1" + 2);//result 12 //string2

console.log(typeof 1 + "2");//result 12 //number2

console.log(typeof "1"+"2");//result 12 // string2

console.log(typeof "1" + 2 + 2);//result 122 // string22

console.log(typeof 1 + 2 + "2");// result 32 // number 22console.log(+ true); // value print 1console.log(typeof + true); // type numberconsole.log(typeof + ""); //value print 0 // type number

//* new testing with String outdated method
const name = "kirti"
const Roll = 50

console.log("roll_no"+ " "+ name +" is " + Roll);

//new method/ modern way use bar ticks and doller with brackets
//console.log(`roll_no ${name} is ${Roll}`);


// use objects in String and new way declare string

const hero = new String('test kirtiman')
console.log(hero[10]); //use String Length
console.log(hero.__proto__); // use prototype ya object parameter 
console.log(hero.length);// this way use length for showing value means entire value not shows in arrays

console.log(hero.toUpperCase())

console.log(hero.charAt(5));//This is a method called on the string hero that returns the character at a specific position, or index.


console.log(hero.indexOf('k')); // Index 3: In JavaScript, string indexes are zero-based, meaning the first character is at index 0, the second at index 1, and so on. The number 3 specifies the fourth character of the string. 


console.log(hero.substring(0,6));// it prints only upto parameter not obey negative parameter 


//* discuss slice

const newString = (hero.slice(-12,9))
console.log(newString);
 
//Example 1: Basic Slicing javascript
const text = "Hello World";
console.log(text.slice(0, 5)); // "Hello"
console.log(text.slice(6));    // "World"

//*Explanation:

//slice(0, 5) = Start from position 0, end before position 5

//slice(6) = Start from position 6, go till the end



const fullname = "Kirtiman";
//            01234567  (position numbers)

console.log(name.slice(0, 4)); // "Kirt"
console.log(name.slice(4, 6)); // "im" 
console.log(name.slice(6));    // "an"



//* How Negative Indexing Works:



const text_slice = "test kirtiman";
//            0123456789...  (forward counting)
//            ...987654321-  (backward counting)
console.log(text_slice.slice(3,5));
/*  Positions:

-1 = last character (n)

-2 = second last character (a)

-3 = third last character (m)

-12 = 12th character from end (e)

const text_with = Javascript

console.log(str.slice(0, -3));  // "JavaScr" (start to 3rd last)
*/


//* Discuss Strim method in JS

const another_String = "    hello Spacing   "
console.log(another_String);

const AfterTrim = another_String.trim()
console.log(AfterTrim);

//please Study trim in MDN documentation 

//* replace And includes in url


const url = "https://kirtiman.35&_codelove.com"
console.log(url.replace("35&","210@"));// if anyone using  space in website url js not detect Space and write % 35/%20 so using replace methods 
