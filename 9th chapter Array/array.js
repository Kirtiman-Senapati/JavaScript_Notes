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