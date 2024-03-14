"use strict";
// Question Number 19
let guests = ["Nikola Tesla", "Elon Musk", "Sam Altman", "Jeff Bezos", "Bill Gates", "Robert Kiaosaki"];
console.log(`You're having a dinner party with ${guests.length}.`);
console.log("We can only invite two people to supper because the new table will not arrive in time.");
while (guests.length > 2) {
    let remove_guest = guests.pop();
    console.log(`We are sorry, ${remove_guest}, you are not invited to dinner.`);
}
guests.forEach(guest => {
    console.log(`Respected ${guest} you are invited to dinner.`);
});
guests.pop();
guests.pop();
console.log(guests);
