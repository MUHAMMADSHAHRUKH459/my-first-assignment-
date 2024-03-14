"use strict";
// Question Number 31
let userNames = ["Shahrukh", "Ahsan", "Uzair"];
if (userNames.length > 0) {
    console.log("Current Users");
    for (let user of userNames) {
        console.log(user);
    }
}
else {
    console.log("we need some users:");
}
userNames = [];
if (userNames.length > 0) {
    console.log("\nRemaining Users: ");
    for (let user of userNames) {
        console.log(user);
    }
}
else {
    console.log("\nwe need to find some users:");
};
