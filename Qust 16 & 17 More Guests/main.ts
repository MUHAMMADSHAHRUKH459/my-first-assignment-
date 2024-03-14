// Question Number 16 & 17 combined

let guests : string[] = ["Nikola Tesla","Elon Musk","Sam Altman"];

console.log("Great News! We found bigger dinner table");

guests.unshift("Bill Gates");

guests.splice(guests.length / 2,0, "Jeff bezos");

guests.push("Robert Kiaosaki");

guests.forEach(guest => {
   console.log(`Respected ${guest} You are invited to dinner.`);
   
});



// Question Number 17

console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner");


while (guests.length > 2){
   let remove_guest = guests.pop();
   console.log(`Sorry ${remove_guest} we can't invite you to dinner`);
   
}

guests.forEach(guest => {
   console.log(`Respected ${guest} you are invited to dinner.`);
   
})

guests.pop();
guests.pop();

console.log(guests);