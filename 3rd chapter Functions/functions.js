function add(){
    const a =19
    const b = 20
    let value = a + b ;
    //console.log(value);
    
}

add()


// Another Way right Same code Means Funtion As Arguments


function addTwoNumbers(number1, number2)
{
    //console.log(number1 + number2);

    
}

const result = addTwoNumbers(19,20)// not Returned Value So not stored value in result so //console .log print output undefined   


//console.log(`result is ${result}`);



//* how to Store value in result and return value

// Method 1


function addTwoNumbers(number1, number2)
{
    
    let result = number1 + number2
    return result
    console.log("kirtiman");// after return code not work because after return keyword function finish if you want print console.log kirtiman then write it before return 
    
}

console.log("Result tell ", result);


// Method 2


function addTwoNumbers(number1, number2)
{
    
    return number1 + number2
    
}

const Result2 = addTwoNumbers(100,700)

console.log(`Result 2 is ${Result2}`);
