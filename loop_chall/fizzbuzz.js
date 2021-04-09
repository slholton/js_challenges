/*
for a range of numbers (0 .. 100:):
    if the number is div evenly by:
        3 -> fizz
        5 -> buzz
        3 & 5 -> fizzBuzz
        otherwise ->
*/

for(let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzBuzz")
    } else if (i % 3 === 0){
        console.log("fizz")
    } else if (i % 5 === 0){
        console.log("buzz")
    } else {
        console.log(i)
    }
}

let x = 1
while(x <= 100){
    switch (true){
        case x % 15 === 0:
            console.log("fizzBuzz")
            break;
        case x % 3 === 0:
            console.log("fizz")
            break;
        case x % 5 === 0:
            console.log("buzz")
        default:
            console.log(x)
    }
    x++
}

for(let z = 1; z <= 100; z++){
    (z % 3 === 0 && z % 5 === 0) ? console.log("fizzBuzz")
    : (z % 5 === 0) ? console.log("buzz")
    : (z % 3 === 0) ? console.log("fizz")
    :console.log(z)
}

for(let i = 1; i <= 100; i++){
    if (i %3 === 0){
        if (i % 5 === 0) console.log("fizzBuzz")
        else console.log("fizz")
    } 
    else if (i % 5 === 0) console.log("buzz")
    else console.log(i)
}