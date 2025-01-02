import { Transport } from "./transport.js";

const owner = new Transport.Owner(
    'Иванов',
    'Иван',
    'Иванович',
    '15.05.1985',
    Transport.DocType.passport,
    1234,
    567890 
);

const mercedes = new Transport.Car(
    'Mercedes-Benz',
    'S-Class',
    2022,
    'WDD22212345678901',
    987654,
    owner,
    Transport.BodyType.Sedan,
    Transport.CarClass.Luxury
);

(mercedes as any).hello = "hello";
console.log((mercedes as any).hello);

/*(Transport.Car as any).prototype.testFunc = function() {
    console.log("test");
}*/

console.log(mercedes.brand)



