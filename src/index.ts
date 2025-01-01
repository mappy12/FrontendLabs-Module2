const me = new Transport.Owner(
    "Zhestkov",
    "Andrey",
    "Alekseevich",
    "30.03.2006",
    Transport.DocType.passport,
    1234,
    344444
);

const car1 = new Transport.Car(
    "Toyota",
    "Camry",
    2024,
    "1HGCM82633A123456",
    123456,
    me,
    Transport.BodyType.Sedan,
    Transport.CarClass.Luxury
)

const car2 = new Transport.Car(
    "BMW",
    "X5",
    2022,
    "5UXCR6C53M9F20939",
    67890,
    me,
    Transport.BodyType.Coupe,
    Transport.CarClass.Luxury
)

const car3 = new Transport.Car(
    "Audi",
    "A4",
    2021,
    "WAUZB4FF4FN012345",
    11223,
    me,
    Transport.BodyType.Hatchback,
    Transport.CarClass.Economy
)

const carStorage = new Transport.VehicleStorage<Transport.Car>([car1, car2, car3]);
