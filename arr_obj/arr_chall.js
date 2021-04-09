

// Find the average of all the students grades

 students = [
    {
        name: "Andy",
        grade: 3.0
    },
    {
        name: "Bill",
        grade: 2.8
    },
    {
        name: "Jackie",
        grade: 3.0
    },
    {
        name: "Eli",
        grade: 4.0
    },
    {
        name: "Zach",
        grade: 2.1
    }
]

// 1
let total = 0
for (let student of students){
    console.log(student.grade)
    total += student.grade
}
let average = total / students.length

console.log(average)

// 2
let total2 = 0
students.forEach(s => total2 += s.grade)
let average2 = total2 / students.length
console.log(average2)

// 3
console.log(
    students.reduce((gpa, student) => gpa += student.grade, 0) / students.length
)

/*
let x = [1, 2, 3]
let res = x.map((x) => x * x)
res.reduce((totalVal, curValue) => {totalVal += curValue}, 0)
*/

let result3 = [1, 2, 3]
    .map((x) => x * x)
    .reduce((totalVal, curValue) => totalVal += curValue, 0)

console.log(result3)