// Question Number 42

function make_great(magicians: string[]): string[] {
   let great_magicians: string[] = [];
   for (let magician of magicians) {
       great_magicians.push(`The Great ${magician}`);
   }
   return great_magicians;
}

let magician_names: string[] = ["Dr.Strange", "Captain America", "Thor", "The Witcher", "Wonder Women"];

let great_magicians: string[] = make_great(magician_names);

function show_magicians(magicians: string[]): void {
   for (let magician of magicians) {
       console.log(magician);
   }
}

show_magicians(great_magicians);