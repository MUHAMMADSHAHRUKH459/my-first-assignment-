// Question Number 15

let guests : string[] = ["Nikola Tesla","Elon Musk","Sam Altman"];


let notAttend = "Elon Musk";

console.log(`${notAttend} Unfortunately, can't make it to the dinner.`);

let new_guest = "Jeff Bezos";

guests[guests.indexOf(notAttend)] = new_guest;

guests.forEach(guest => {
   console.log(`Respected ${guest} would you like to join me for dinner?`);
   
});