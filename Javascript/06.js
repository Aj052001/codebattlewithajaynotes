let box = document.querySelector(".box")
console.log(box)


let heading  = document.createElement("h1")
heading.textContent = "Codebattle with ajay"

// box.append(heading)

// box.prepend(heading)

// box.before(heading)

// box.after(heading)

let image = document.createElement("img")
// image.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWIHjjRLE7XfDw8BQnS3N0Z8hYTQ&s")
image.setAttribute("alt","image")
console.log(image)

box.append(image)
