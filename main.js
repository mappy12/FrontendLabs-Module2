"use strict";
const me = new Transport.Owner("Zhestkov", "Andrey", "Alekseevich", "30.03.2006", Transport.DocType.passport, 1234, 344444);
const myCar = new Transport.Car("Toyota", "Camry", 2024, "1HGCM82633A123456", 123456, me, Transport.BodyType.Sedan, Transport.CarClass.Luxury);
myCar.print();
