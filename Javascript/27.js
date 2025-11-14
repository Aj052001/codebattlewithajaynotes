
//function declaration 
// function printHello()
// {
//     console.log("Hello world")
//     console.log(8 + 9)
//     console.log(9-8)
// }


// printHello()
// printHello()
// printHello()
// printHello()
// printHello()
// printHello()
// printHello()
// printHello()


// console.log(printHello)

//function expression

// const printHello = function (){
//     console.log("hello")

// }

// printHello()
// printHello()


//arrow function 

// const printHello =  ()=>{
//     console.log("hello")

// }

// printHello()
// printHello()

// function addTwo(a,b)//parameter 
// {
//     return (a + b)
// }
// let sum1 = addTwo(6,5)  //argumets
// console.log(sum1)

// let sum2 = addTwo(9,9)
// console.log(sum2)


// function sumOfN(n)
// {
//     let sum = 0;
//     for(let i = 1 ;i<=n;i++)
//     {
//         sum += i
//     }

//     return sum
// }


// let sum = sumOfN(25)
// console.log(sum)



//default parameter 


// function addTwo(a,b =  8)//parameter 

// {
//     console.log(a)
//     console.log(b)
//     return (a + b)
// }
// let sum1 = addTwo(6,4)  //argumets
// console.log(sum1)


//reset parameter 


// function addTwo(a,b,...c)//parameter 

// {
//     console.log(a)
//     console.log(Array.isArray(c))
//     console.log(c)
//     return (a + b)
// }
// let sum1 = addTwo(6,4,7,8,9)  //argumets
// console.log(sum1)



//parameter destructuring 
const obj = {
    fname : "ravi",
    lname : "singh"
}


function printObj({fname,lname})
{

   console.log(fname)
   console.log(lname)
}

printObj(obj)









Day 62 [function in javascript]


-> Defination 
-> Type of function 
       -> Function Declaration 
       -> Function Expression 
       -> Arrow Function

-> void , return 
-> parameter, argument
-> default parameter
-> rest parameter
-> parameter destructuring 


