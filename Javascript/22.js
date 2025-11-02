// loop in array


const array = [1,2,3,4,5,6]
console.log(array)

// for(let i = 0;i<array.length;i++)
// {
//     console.log(array[i]-1)
// }


// let sum = 0

// for(let i = 0;i<array.length;i++)
// {
//     sum = sum + array[i]

// }

// console.log(sum)


// for(let i = 0;i<array.length;i++)
// {
//     console.log(`index ${i}`)
//     console.log(`item ${array[i]}`)
// }


// for(let x of array)
// {
//     console.log(x)
// }


// for(let x in array)
// {
//     console.log(x)
//     console.log(array[x])
// }



let sum = 0

for(let item of array)
{
    sum = sum + item

}

console.log(sum)