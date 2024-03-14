"use strict";
// Question Number 43
function make_great(magicians) {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push(`The great ${magician}`); // Use magician variable instead of magicians
    }
    return great_magicians;
}
let magician_names = ["Dr.Strange", "Captain America", "Thor", "The Witcher", "Wonder Women"];
let magician_names_copy = magician_names.slice();
let great_magicians = make_great(magician_names_copy);
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
console.log('Original Magicians:');
show_magicians(magician_names);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
