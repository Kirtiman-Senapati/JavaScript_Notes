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

getNames(...names)//best

getNames(names)


//* Rest in object

let students ={
    name:"Ajay",
    Age:56,
    hobies:["playing cricket,Watching Tv"]
}


// u use this way console.log(students.Age);

//ya right const age = students.Age
//then use console.log(age)


//* if i want combine other things then write this way 

const {age,...other} = students

console.log(other);




//*Spread in object

let newStudents = {
    ...students,
    //override value
    Age: 60
}

console.log(newStudents);
