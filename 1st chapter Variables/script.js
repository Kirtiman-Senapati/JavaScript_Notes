console.log("hello Js")
/* Important Rules in Javascript Variables

 1.  let use in Modern WEB not use Var
 2. no Use Number in first Line of name
    Example let 12kirti not acceptable
 3. Javascript variables case Sensitive
    Example Test, test consider Separate Varible Both Are not Same

*/


/*DIFFERENE BETWEEN const, var,let  
    var use in web es6 line escript Technology and Anyone Declare same variable again
    Example var a=13;  
            var a=4;
            here 'a' Declare 2 times js not provide error if use var.
    but if i use let then not declare again 2nd time provide error but changed the value easily 
    Example  Let a=15;
                 a=8;   
   N.B. Var work in whole Progrograme but const and let work only scope if scope end  then need again declare same variable.
   
     

*/

// Using var
{
   var a = 20; // same variable, value changed everywhere
    console.log("var a inside block =", a);
}
console.log("var a after block =", a); // stil 20
 // here both block  print javascript Engine because use var show display 20,20


   // Using let
{
    let b = 40; // new variable only inside block
    console.log("let b inside block =", b);
}
console.log("let b outside block =", b);
 /* here only inner block size  print javascript Engine because use let show display only 40 with uncatched error for 
console.log("let b outside block =", b);*/

// Using const

{
    const c = 60; // new variable only inside block
    console.log("const c inside block =", c);
}
console.log("const c after block =", c); //  /* here only inner block size  print javascript Engine because use const show display only 60 with uncatched error for console.log("const c after block =", c);


/******** Another Example With const *******************/


{
   const c = 60; // new variable only inside block
   console.log("const c inside block =", c);
   //const c =70;
   //c=89
}
/*
VM167:4 Uncaught SyntaxError: Identifier 'c' has already been declared because not  able to declare or change const inside the block means not assign const c value again after Declaration but easily declare outside of block */ 
const c = 90; 
console.log("const c after block =", c);