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

