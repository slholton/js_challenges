let house = {
    rooms :[{
            name: "bedroom", 
            doors: 3,
            windows: 4,
            flooring: "carpet",
            occupant: []
        }, {
            name: "front", 
            doors: 0,
            windows: 2,
            flooring: "tile",
            occupant: []
        }, {
            name: "master", 
            doors: 2,
            windows: 6,
            flooring: "hardwood",
            occupant: []
    }],
    people: [{
            name: "Yvonne",
            age: 82
        }, {
            name: "Roger",
            age: 42
        }, {
            name: "Pam",
            age: 56
        }]
}

// 1
console.log(house.rooms[1].name) // bath
console.log(house.rooms.map(room => room.name)) // ["bedroom", "front", "master"]

house.rooms[2].occupant = house.people
console.log(house.rooms[2])
