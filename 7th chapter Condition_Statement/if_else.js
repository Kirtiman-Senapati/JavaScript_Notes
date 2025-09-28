

let age = prompt("enter your age")

if (age>=80) 
{
    console.log("Yes you are Adult");
        
}

else if(age >= 18)

{
    console.log("Yes you can vote");
    
}

else
{
    console.log("No you cannot vote");
    
}    



//Ternary operator

const age1 = 90;


age1>= 18 ? console.log("Yes"):console.log("False");


//Another Way


const age2 = 90;


let result= age1 >= 18 ? "Yes": "No"


console.log(result); 
