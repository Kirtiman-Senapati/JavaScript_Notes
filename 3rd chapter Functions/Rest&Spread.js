//* Rest & Spread

//Example Rest

function addNumbers(num1,num2,num3,...other)
{
    console.log(other);
    
    return  num1 + num2 + num3

}
console.log(addNumbers(60,30,10,80,20))


//* Spread means combine to divide 

// Example 

let names = ["Ajay","Anuj","Rohan"];

function getNames(name1,name2,name3)
{
    console.log(name1,name2,name3);
    
}

getNames(names[0],names[1],names[2])

//Advance way

getNames(...names)

getNames(names)