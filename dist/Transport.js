export var Transport;
(function (Transport) {
    let DocType;
    (function (DocType) {
        DocType["passport"] = "Passport";
        DocType["IDCard"] = "ID Card";
        DocType["birthCertificate"] = "birthCertificate";
    })(DocType = Transport.DocType || (Transport.DocType = {}));
    let BodyType;
    (function (BodyType) {
        BodyType["Hatchback"] = "Hatchback";
        BodyType["Coupe"] = "Coupe";
        BodyType["Sedan"] = "Sedan";
    })(BodyType = Transport.BodyType || (Transport.BodyType = {}));
    let CarClass;
    (function (CarClass) {
        CarClass["Economy"] = "Economy";
        CarClass["Standard"] = "Standard";
        CarClass["Luxury"] = "Luxury";
    })(CarClass = Transport.CarClass || (Transport.CarClass = {}));
    class Owner {
        constructor(surname, name, patronymic, dateOfBirth, docType, docSeries, docNum) {
            this._surname = surname;
            this._name = name;
            this._patronymic = patronymic;
            this._dateOfBirth = dateOfBirth;
            this._docType = docType;
            this._docSeries = docSeries;
            this._docNum = docNum;
        }
        get surname() {
            return this._surname;
        }
        get name() {
            return this._name;
        }
        get patronymic() {
            return this._patronymic;
        }
        get dateOfBirth() {
            return this._dateOfBirth;
        }
        get docType() {
            return this._docType;
        }
        get docSeries() {
            return this._docSeries;
        }
        get docNum() {
            return this._docNum;
        }
        print() {
            console.log(`Фамилия: ${this.surname}`);
            console.log(`Имя ${this.name}`);
            console.log(`Отчество: ${this.patronymic}`);
            console.log(`Дата рождения: ${this.dateOfBirth}`);
            console.log(`Тип документа: ${this.docType}`);
            console.log(`Номер документа: ${this.docNum}`);
        }
    }
    Transport.Owner = Owner;
    class Vehicle {
        print() {
            console.log(`Брэнд: ${this._brand}`);
            console.log(`Модель: ${this._model}`);
            console.log(`Год выпуска: ${this._releaseYear}`);
            console.log(`VIN: ${this._VIN}`);
            console.log(`Регистрационный номер: ${this._regNumber}`);
        }
        getShortInfo() {
            const fullName = `${this.owner.surname} ${this.owner.name} ${this.owner.patronymic}`;
            return `ФИО: ${fullName}\nVIN: ${this.VIN}\nРегистрационный номер: ${this.regNumber}`;
        }
        constructor(brand, model, releaseYear, VIN, regNumber, owner) {
            this._brand = brand;
            this._model = model;
            this._releaseYear = releaseYear;
            this._VIN = VIN;
            this._regNumber = regNumber;
            this._owner = owner;
        }
        get brand() {
            return this._brand;
        }
        get model() {
            return this._model;
        }
        get releaseYear() {
            return this._releaseYear;
        }
        get VIN() {
            return this._VIN;
        }
        get regNumber() {
            return this._regNumber;
        }
        get owner() {
            return this._owner;
        }
    }
    Transport.Vehicle = Vehicle;
    class Car extends Vehicle {
        constructor(brand, model, releaseYear, VIN, regNumber, owner, bodyType, carClass) {
            super(brand, model, releaseYear, VIN, regNumber, owner);
            this._bodyType = bodyType;
            this._carClass = carClass;
        }
        print() {
            super.print();
            console.log(`Тип кузова: ${this._bodyType}`);
            console.log(`Класс автомобиля: ${this._carClass}`);
        }
        get bodyType() {
            return this.bodyType;
        }
        get carClass() {
            return this._carClass;
        }
    }
    Transport.Car = Car;
    class Motorbike extends Vehicle {
        constructor(brand, model, releaseYear, VIN, regNumber, owner, frameType, isSport) {
            super(brand, model, releaseYear, VIN, regNumber, owner);
            this._frameType = frameType;
            this._isSport = isSport;
        }
        print() {
            super.print();
            console.log(`Тип рамы: ${this._frameType}`);
            console.log(`Подходит ли для спорта: ${this._isSport}`);
        }
        get frameType() {
            return this._frameType;
        }
        get isSport() {
            return this._isSport;
        }
    }
    Transport.Motorbike = Motorbike;
    class VehicleStorage {
        constructor(vehicles) {
            this._creationDate = new Date();
            this._vehicles = vehicles;
        }
        getAllVehicle() {
            return this._vehicles;
        }
        addVehicle(vehicle) {
            this._vehicles.push(vehicle);
        }
        sortByBrand() {
            return this._vehicles.sort((a, b) => a.brand.localeCompare(b.brand));
        }
        getVehicleBySurname(surname) {
            return this.vehicles.filter(vechicle => vechicle.owner.surname.toLocaleUpperCase() === surname.toUpperCase());
        }
        get creationDate() {
            return this._creationDate;
        }
        get vehicles() {
            return this._vehicles;
        }
    }
    Transport.VehicleStorage = VehicleStorage;
})(Transport || (Transport = {}));
