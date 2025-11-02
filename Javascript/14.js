// and , or operator 



// and  &&

// a   b      a and b

// t   t  =    t
// f   t  =    f
// t   f   =   f
// f   f  =   f


// or  ||


// a    b  a or b
// t    t = t
// t    f = t
// f    t = t
// f    f = f



let age = 19

let firstName = "ajay"
let gender = "Male"

if(age >=18  && firstName[0] === 'a'  && gender === "Male")
{
    console.log("user is valid")

}
else{
    console.log("user is not valid ")
}