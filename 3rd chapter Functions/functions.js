function add(){
    const a =19
    const b = 20
    let value = a + b ;
    console.log(value);
    
}

add()


// Another Way right Same code Means Funtion As Arguments


function addTwoNumbers(number1, number2)
{
    console.log(number1 + number2);

    
}

const result = addTwoNumbers(19,20)// not Returned Value So not stored value in result so console .log print output undefined   


console.log(`result is ${result}`);