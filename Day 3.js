//forstart//

console.log("Yay It Works")

//no.//

const numbers = [1,2,3,4,5,6]

numbers.forEach(eachNumber => {
 console.log(eachNumber+2)
})

//spliting//

const myName = "Hello World Hello World"

console.log(myName.split("lo"))

//namething//

const myObject2 = {
    "name":"Shubhan",
    "age":16,
    "grade":7
}

//typeof//

console.log(typeof(JSON.stringify(myObject2)))

for (const key in myObject2) {
    console.log(key, myObject2[key])
}

//calculator//

for (const key in myObject2) {
    console.log(key, myObject2[key])
}


function multiply(x,y) {
    return x*y
}

console.log(multiply(7642,9387))

//local storage//

localStorage.setItem("name","Shubhan Bhasin")
const valueFromLocalStorage = localStorage. getItem("age")

console.log(valueFromLocalStorage) 