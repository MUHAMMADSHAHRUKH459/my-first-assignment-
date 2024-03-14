// Question Number 43

function make_great(magicians: string[]): string[] {
   let great_magicians: string[] = [];
   for (let magician of magicians) {
       great_magicians.push(`The great ${magician}`); // Use magician variable instead of magicians
   }
   return great_magicians;
}

let magician_names: string[] = ["Dr.Strange", "Captain America", "Thor", "The Witcher", "Wonder Women"];

let magician_names_copy: string[] = magician_names.slice();

let great_magicians: string[] = make_great(magician_names_copy);

function show_magicians(magicians: string[]): void {
   for (let magician of magicians) {
       console.log(magician);
   }
}

console.log('Original Magicians:');
show_magicians(magician_names);

console.log("\nGreat Magicians:");
show_magicians(great_magicians);