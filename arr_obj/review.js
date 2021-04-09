let result3 = [1, 2, 3]
    .map((x) => x *x)
    .reduce((totalVal, curValue) => totalVal += curValue, 0)

console.log(result3)

let sqr = (x) => {
    return x*x
}

//                  V--- This is a function obj
let callbackUser = (cb) => {
    cb()
//  ^ calling the function
}

console.log(typeof console.log)
callbackUser(console.log) // argument

// let x = []
// console.log(x)

myMap(console.log, [1, 2, 3])

function myMap(cb, iter) {
    for (let item of iter){
        cb(item)
    }
}

// Filter [1, 2, 3].filter() => [2] if the check is for evens
function myFilter(cb, iter){
    let retArr = []
    for (let item of iter){
        if(cb(item)){
            retArr.push(item)
        }
    }
    return retArr
}

myFilter((x) => {
    return x % 2 === 0
}, [1, 2, 3])

console.log(filterArr)

// Reduce [1, 2, 3].reduce() => 6 if the cb totaled two numbers

console.log(testArr.reduce((acc, x) => acc + x, 0))

function myReduce(cb, iter){
    total = 0
    for (let item of iter){
        cb(total, item)
    }
    return total
}

myReduce((acc, x) => acc + x, [1, 2, 3])