// Question Number 32

let current_users : string[] = ["Admin","Shahrukh","Ahsan","Zain","Uzair","Umar"];

let new_users : string[] = ["Ali","Shahrukh","Usman","Abubakar","Khalid"];

new_users.forEach(newUsers => {
   if(current_users.some(currentUsers => currentUsers.toLowerCase() === newUsers.toLowerCase())){
      console.log(`${newUsers} will need to enter a new Username`);
      
   } else {
      console.log(`${newUsers} is available.`);
      
   }
});