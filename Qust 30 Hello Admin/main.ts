// Question Number 30

let userName : string[] = ["admin","shahrukh","ahsan","uzair","anik"];

userName.forEach(username => {
   if (username == "admin"){
      console.log("Hello admin, would you like to see a status report");
      
   } else {
      console.log(`Hello ${username}, thanks for logging in again.`);
      
   }
});