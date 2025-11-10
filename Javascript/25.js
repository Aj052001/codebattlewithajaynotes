
//spread operator in object
// const user = {
//     fname : "ravi",
//     lname : "singh",
//     age : 21
// }





// const user2 = {...user,gender : "male"}


// console.log(user)
// console.log(user2)

// object destructuring 


// const user = {
//     fname : "ravi",
//     lname : "singh",
//     age : 21
// }

// console.log(user)

// // let fname = user.fname
// // let lname = user.lname
// // let age = user.age

// const {fname,lname,age} = user
// console.log(fname,lname,age)

//computed property 

const key1 = "key11"
const key2 = "key12"

const value1 = "value11"
const value2 = "value12"

const obj = {
    [key1] : value1,
    [key2] : value2
}
console.log(obj)
