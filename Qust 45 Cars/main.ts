// Question Number 45

function carInfo(manufacturer: string, modelName: string, ...additionalInfo: { [key: string]: any }[]): { manufacturer: string, modelName: string, [key: string]: any } {
   let car: { manufacturer: string, modelName: string, [key: string] : any } = {
       manufacturer: manufacturer,
       modelName: modelName
   };

   for (let info of additionalInfo) {
       for (let key in info) {
          car[key] = info[key];
       }
   }
   return car;
}

let carDetails = carInfo('Toyota', 'Tacoma', { color: 'red' }, { year: 2023 });

console.log(carDetails);