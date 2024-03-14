"use strict";
// Question Number 42
function make_great(magicians) {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push(`The Great ${magician}`);
    }
    return great_magicians;
}
let magician_names = ["Dr.Strange", "Captain America", "Thor", "The Witcher", "Wonder Women"];
let great_magicians = make_great(magician_names);
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
show_magicians(great_magicians);
