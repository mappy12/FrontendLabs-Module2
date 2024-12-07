"use strict";
//Вариант 2
//1.1
const findMinValue = (arr) => {
    let minValue = arr[0];
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
    }
    return minValue;
};
const arr1 = [32, 21, 24, 6, 522, 124, 67, 4, 523];
const minValue = findMinValue(arr1);
console.log(minValue);
//1.2
const findCountZero = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr[i].length; ++j) {
            if (arr[i][j] === 0) {
                ++count;
            }
        }
    }
    return count;
};
const arr2 = [
    [1, 2, 4],
    [43, 0, 2],
    [0, 23, 543],
    [0, 534, 23]
];
const count = findCountZero(arr2);
console.log(count);
//2
const strConcat = (tuple) => {
    return tuple[0] + tuple[1] + tuple[2];
};
const tuple = ["Hello, ", "How are you? ", "What is your name?"];
const concatStr = strConcat(tuple);
console.log(concatStr);
//3
var TypesOfPrinters;
(function (TypesOfPrinters) {
    TypesOfPrinters["dotMatrix"] = "DotMatrix";
    TypesOfPrinters["inkjet"] = "Inkjet";
    TypesOfPrinters["laser"] = "Laser";
    TypesOfPrinters["sublimation"] = "Sublimation";
    TypesOfPrinters["threeD"] = "3D";
})(TypesOfPrinters || (TypesOfPrinters = {}));
;
const printer = TypesOfPrinters.laser;
console.log(printer);
//4
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function printPetInfo(pet) {
    console.log(`Type: ${pet.constructor.name}`);
    console.log(`Name: ${pet.name}`);
    console.log(`Age: ${pet.age}`);
    console.log(`Speak: ${pet.speak()}`);
}
const myDog = new Dog();
const myCat = new Cat();
console.log("-----------Dog-----------");
printPetInfo(myDog);
console.log("-----------Cat-----------");
printPetInfo(myCat);
const myPrinter = {
    type: TypesOfPrinters.laser,
    model: "HP LaserJet M110we",
    isColor: false,
    price: 16199
};
console.log(JSON.stringify(myPrinter, null, 2));
