

const user = {
    fname  : 'ravi',
    lname : 'singh',
    age : 21,
    gender : 'male'
}

// console.log(user)

/// type 

// console.log(typeof(user))

//access item 

// dot 
// console.log(user.fname)
// console.log(user.age)

//square []

// console.log(user['first name'] )
// console.log(user['lname'])

//add item into user

user.address = "rajasthan"
// console.log(user)


// for in loop 

// for( let  i in user)
// {
//     console.log(user[i])
// }

// .keys 

const data = Object.keys(user)
console.log(Array.isArray(data)
)


for(let i of data)
{
    console.log(user[i])
}