//1 
var DocType;
(function (DocType) {
    DocType["passport"] = "Passport";
    DocType["IDCard"] = "ID Card";
    DocType["birthCertificate"] = "birthCertificate";
})(DocType || (DocType = {}));
var BodyType;
(function (BodyType) {
    BodyType["Hatchback"] = "Hatchback";
    BodyType["Coupe"] = "Coupe";
    BodyType["Sedan"] = "Sedan";
})(BodyType || (BodyType = {}));
var CarClass;
(function (CarClass) {
    CarClass["Economy"] = "Economy";
    CarClass["Standard"] = "Standard";
    CarClass["Luxury"] = "Luxury";
})(CarClass || (CarClass = {}));
var Owner = /** @class */ (function () {
    function Owner(surname, name, patronymic, dateOfBirth, docType, docSeries, docNum) {
        this._surname = surname;
        this._name = name;
        this._patronymic = patronymic;
        this._dateOfBirth = dateOfBirth;
        this._docType = docType;
        this._docSeries = docSeries;
        this._docNum = docNum;
    }
    Object.defineProperty(Owner.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "patronymic", {
        get: function () {
            return this._patronymic;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "dateOfBirth", {
        get: function () {
            return this._dateOfBirth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "docType", {
        get: function () {
            return this._docType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "docSeries", {
        get: function () {
            return this._docSeries;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "docNum", {
        get: function () {
            return this._docNum;
        },
        enumerable: false,
        configurable: true
    });
    Owner.prototype.print = function () {
        console.log("\u0424\u0430\u043C\u0438\u043B\u0438\u044F: ".concat(this.surname));
        console.log("\u0418\u043C\u044F ".concat(this.name));
        console.log("\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E: ".concat(this.patronymic));
        console.log("\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ".concat(this.dateOfBirth));
        console.log("\u0422\u0438\u043F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ".concat(this.docType));
        console.log("\u041D\u043E\u043C\u0435\u0440 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ".concat(this.docNum));
    };
    return Owner;
}());
var Vehicle = /** @class */ (function () {
    function Vehicle(brand, model, releaseYear, VIN, regNumber, owner) {
        this._brand = brand;
        this._model = model;
        this._releaseYear = releaseYear;
        this._VIN = VIN;
        this._regNumber = regNumber;
        this._owner = owner;
    }
    Vehicle.prototype.print = function () {
        console.log("\u0411\u0440\u044D\u043D\u0434: ".concat(this._brand));
        console.log("\u041C\u043E\u0434\u0435\u043B\u044C: ".concat(this._model));
        console.log("\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ".concat(this._releaseYear));
        console.log("VIN: ".concat(this._VIN));
        console.log("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440: ".concat(this._regNumber));
    };
    Object.defineProperty(Vehicle.prototype, "brand", {
        get: function () {
            return this._brand;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "releaseYear", {
        get: function () {
            return this._releaseYear;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "VIN", {
        get: function () {
            return this._VIN;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "regNumber", {
        get: function () {
            return this._regNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        enumerable: false,
        configurable: true
    });
    return Vehicle;
}());
var Car = /** @class */ (function () {
    function Car(brand, model, releaseYear, VIN, regNumber, owner, bodyType, carClass) {
        this._brand = brand;
        this._model = model;
        this._releaseYear = releaseYear;
        this._VIN = VIN;
        this._regNumber = regNumber;
        this._owner = owner;
        this._bodyType = bodyType;
        this._carClass = carClass;
    }
    Car.prototype.print = function () {
        console.log("\u0411\u0440\u044D\u043D\u0434: ".concat(this._brand));
        console.log("\u041C\u043E\u0434\u0435\u043B\u044C: ".concat(this._model));
        console.log("\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ".concat(this._releaseYear));
        console.log("VIN: ".concat(this._VIN));
        console.log("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440: ".concat(this._regNumber));
        console.log("\u0422\u0438\u043F \u043A\u0443\u0437\u043E\u0432\u0430: ".concat(this._bodyType));
        console.log("\u041A\u043B\u0430\u0441\u0441 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F: ".concat(this._carClass));
    };
    Object.defineProperty(Car.prototype, "brand", {
        get: function () {
            return this._brand;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "releaseYear", {
        get: function () {
            return this._releaseYear;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "VIN", {
        get: function () {
            return this._VIN;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "regNumber", {
        get: function () {
            return this._regNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "bodyType", {
        get: function () {
            return this.bodyType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "carClass", {
        get: function () {
            return this._carClass;
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
var Motorbike = /** @class */ (function () {
    function Motorbike(brand, model, releaseYear, VIN, regNumber, owner, frameType, isSport) {
        this._brand = brand;
        this._model = model;
        this._releaseYear = releaseYear;
        this._VIN = VIN;
        this._regNumber = regNumber;
        this._owner = owner;
        this._frameType = frameType;
        this._isSport = isSport;
    }
    Motorbike.prototype.print = function () {
        console.log("\u0411\u0440\u044D\u043D\u0434: ".concat(this._brand));
        console.log("\u041C\u043E\u0434\u0435\u043B\u044C: ".concat(this._model));
        console.log("\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ".concat(this._releaseYear));
        console.log("VIN: ".concat(this._VIN));
        console.log("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440: ".concat(this._regNumber));
        console.log("\u0422\u0438\u043F \u0440\u0430\u043C\u044B: ".concat(this._frameType));
        console.log("\u041F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u043B\u0438 \u0434\u043B\u044F \u0441\u043F\u043E\u0440\u0442\u0430: ".concat(this._isSport));
    };
    Object.defineProperty(Motorbike.prototype, "brand", {
        get: function () {
            return this._brand;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorbike.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorbike.prototype, "releaseYear", {
        get: function () {
            return this._releaseYear;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorbike.prototype, "VIN", {
        get: function () {
            return this._VIN;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorbike.prototype, "regNumber", {
        get: function () {
            return this._regNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorbike.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorbike.prototype, "frameType", {
        get: function () {
            return this._frameType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorbike.prototype, "isSport", {
        get: function () {
            return this._isSport;
        },
        enumerable: false,
        configurable: true
    });
    return Motorbike;
}());
var VehicleStorage = /** @class */ (function () {
    function VehicleStorage() {
        this._creationDate = new Date();
        this._vehicles = [];
    }
    VehicleStorage.prototype.getAllVehicle = function () {
        return this._vehicles;
    };
    VehicleStorage.prototype.addVehicle = function (vehicle) {
        this._vehicles.push(vehicle);
    };
    Object.defineProperty(VehicleStorage.prototype, "creationDate", {
        get: function () {
            return this._creationDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleStorage.prototype, "vehicles", {
        get: function () {
            return this._vehicles;
        },
        enumerable: false,
        configurable: true
    });
    return VehicleStorage;
}());
