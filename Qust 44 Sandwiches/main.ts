// Question Number 44

function makeSandwich(...items: string[]) : void {
   console.log('Sandwich Summary:');
   console.log('Bread');
   for (let item of items) {
       console.log(item);
   }
   console.log("Enjoy your Sandwich"); // Add this line to indicate the end of the sandwich
}

makeSandwich('B.B.Q', 'Club', 'Cheese');
makeSandwich('Italian', 'Ham');
makeSandwich('Avocado');