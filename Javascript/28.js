

// hoisting 

// pHello()

// function pHello()
// {
//     console.log("Hello world")
// }


// pHello()
// var pHello = function ()
// {
//     console.log("Hello")
// }




// console.log(x)
// console.log(y)
// console.log(z)

// var x = 10


// let y = 10

// const z = 20



//function inside function 
// function Helper()
// {
//     console.log("Helper")
// }

// function Main(add)
// {
//     console.log("Main")
//      add()
// }

// Main(Helper)




// lexical scope 


// let x = 19

// function Main()
// {

//     let y = 10;
//     console.log(x)

//     function Main2()
//     {

//         let z = 11
//         function Main3()
//         {
//             console.log(
//                 x,y,z
//             )
//         }

//         Main3()
//         console.log(x,y)
//     }
//     Main2()

// }



// Main()


// block scope vs fun scope 

function main()
{
    let  x = 10
    var y = 10
}

console.log(x)