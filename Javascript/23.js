// array destructuring 



// const array = [1,2,3,4,5,6]

// let item1 = array[0]
// let item2 = array[1]

// let [item1,item2,...item3] = array

// console.log(item1,item2,item3)

// console.log(item1 + item2)

// let sum = 0

// for(let x of item3)
// {
//     sum += x
// }

// console.log(sum)


let array = ["apple","mango","banana"]
let [a,b,...c] = array
console.log(a)
console.log(b)
console.log(c)