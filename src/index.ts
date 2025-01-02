import { Transport } from "./transport.js";

import Car = Transport.Car;
import Owner = Transport.Owner;

const me: Owner = new Owner(
    "Zhestkov",
    "Andrey",
    "Alekseevich",
    "30.03.2006",
    Transport.DocType.passport,
    1234,
    344444
);

const alexander: Owner = new Owner(
    "Milekhin",
    "Alexander",
    "Nikolaevich",
    "23.11.2005",
    Transport.DocType.passport,
    1234,
    335462
)

const car1: Car = new Car(
    "Toyota",
    "Camry",
    2024,
    "1HGCM82633A123456",
    123456,
    me,
    Transport.BodyType.Sedan,
    Transport.CarClass.Luxury
)

const car2: Car = new Car(
    "BMW",
    "X5",
    2022,
    "5UXCR6C53M9F20939",
    67890,
    me,
    Transport.BodyType.Coupe,
    Transport.CarClass.Luxury
)

const car3: Car = new Car(
    "Audi",
    "A4",
    2021,
    "WAUZB4FF4FN012345",
    11223,
    alexander,
    Transport.BodyType.Hatchback,
    Transport.CarClass.Standard
)

const car4: Car = new Car(
    "Lada",
    "Vesta",
    2015,
    "XTAGFL110KY313115",
    44321,
    me,
    Transport.BodyType.Sedan,
    Transport.CarClass.Economy
)

const car5: Car = new Car(
    "Mitsubishi",
    "Outlander",
    2021,
    "JA4AD31G2MZ012345",
    543210,
    alexander,
    Transport.BodyType.Coupe,
    Transport.CarClass.Luxury
)

const vehicleStorage: Transport.VehicleStorage<Car> = new Transport.VehicleStorage<Car>([car1, car2, car3, car4, car5]);

console.log(vehicleStorage.sortByBrand());

console.log(vehicleStorage.getVehicleBySurname("milekhin"));

console.log(car1.getShortInfo());