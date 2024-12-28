"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Transport_js_1 = require("./Transport.js");
const me = new Transport_js_1.Transport.Owner("Zhestkov", "Andrey", "Alekseevich", "30.03.2006", Transport_js_1.Transport.DocType.passport, 1234, 344444);
const myCar = new Transport_js_1.Transport.Car("Toyota", "Camry", 2024, "1HGCM82633A123456", 123456, me, Transport_js_1.Transport.BodyType.Sedan, Transport_js_1.Transport.CarClass.Luxury);
myCar.print();
