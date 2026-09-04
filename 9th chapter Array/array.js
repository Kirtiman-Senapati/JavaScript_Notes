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

//eea method delete karta hai specific items ko ya range ko

let arr =["Ankit","Rohan","Ayush","kirtiman","cheeranjeeb"]

arr.splice(2)//here index  2 se elements katna start kiya end tak because gives 1 argument only start index 2

console.log(arr)


let arr2 =["Ankit","Rohan","Ayush","kirtiman","cheeranjeeb"]

arr2.splice(1,3)//here index  1 se elements katna start kiya index 3 tak only 2 elements deleted hamesha last parameter -1 tak elements delete karega 

console.log(arr2)  //['Ankit,'cheeranjeeb'] because provides parameter 1,3 so only 2 elements index 1 and index 2 ka