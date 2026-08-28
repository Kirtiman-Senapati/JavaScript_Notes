function greet()
{
    console.log("hi Iam recurssion")
    greet();//ek function apne body mein khud apne ko call nahi kar sakta nahi toh error aayega
    /* hi Iam recurssion
    hi Iam recurssion
    hi Iam recurssion
    hi Iam recurssion
    ... (thousands of times) ...
    Uncaught RangeError: Maximum call stack size exceeded */
}

/* Another example yadi codition de kab call hona stop hoga  toh eea error stop ho sakta hai  */


function greet(n)
{
    if(n===0)
    {
        console.log("Stop Recurssion")
        return n;
    }
    console.log("hi Iam second example recurssion")
    greet(n-1);
}
greet(6)