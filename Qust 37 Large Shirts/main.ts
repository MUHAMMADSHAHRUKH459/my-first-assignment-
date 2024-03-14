// Question Number 37

function make_shirt(size : string = "Large", message : string = "I Love Typescript" ) : void {
   console.log(`The Shirt size is ${size} and the printed message is "${message}" . `);
   
}

make_shirt();

make_shirt("Medium");

make_shirt("Small", "Hello Wold");