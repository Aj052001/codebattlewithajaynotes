// how to clone array


// const array1 = [1,2,3,4,5]
// const array2 = array1

// console.log(array1)
// console.log(array2)

// array1.pop()


// console.log(array1)
// console.log(array2)


//  method 1

// const array1 = [1,2,3,4,5]
// const array2 = [1,2,3,4,5]

// console.log(array1)
// console.log(array2)

// array1.pop()


// console.log(array1)
// console.log(array2)

// slice 

// const array1 = [1,2,3,4,5]
// const array2 = array1.slice(0)

// console.log(array1)
// console.log(array2)

// array1.pop()


// console.log(array1)
// console.log(array2)

//concat 



// const array1 = [1,2,3,4,5]
// const array2 = [].concat(array1)

// console.log(array1)
// console.log(array2)

// array1.pop()
// array1.pop()


// console.log(array1)
// console.log(array2)


//  spread opertor 

// const array1 = [1,2,3,4,5]
// const array2 = [...array1]

// console.log(array1)
// console.log(array2)

// array1.pop()
// array1.pop()


// console.log(array1)
// console.log(array2)



const array1 = [1,2,3,4,5]
const array2 = [7,8,9]

// const array = [...array1,...array2]
const array =[].concat(array1).concat(array2)
console.log(array)