"use strict";
// Question Number 45
function carInfo(manufacturer, modelName, ...additionalInfo) {
    let car = {
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
