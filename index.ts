//1 

enum DocType {
    passport = "Passport",
    IDCard = "ID Card",
    birthCertificate = "birthCertificate" 
}

enum BodyType {
    Hatchback = "Hatchback",
    Coupe = "Coupe",
    Sedan = "Sedan",
}

enum CarClass {
    Economy = "Economy",
    Standard = "Standard",
    Luxury = "Luxury",
}

interface IOwner {
    surname: string;
    name: string;
    patronymic: string;
    dateOfBirth: number;
    docType: DocType;
    docSeries: number;
    docNum: number;
    print(): void;
}

interface IVehicle {
    brand: string;
    model: string;
    releaseYear: number;
    VIN: string;
    regNumber: number;
    owner: Owner;
    print(): void;
}


class Owner implements IOwner {
    private _surname: string;
    private _name: string;
    private _patronymic: string;
    private _dateOfBirth: number;
    private _docType: DocType;
    private _docSeries: number;
    private _docNum: number;

    constructor(surname: string, name: string, patronymic: string, dateOfBirth: number,
        docType: DocType, docSeries: number, docNum: number) {
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
        return this._docType
    }

    get docSeries() {
        return this._docSeries;
    }

    get docNum() {
        return this._docNum;
    }
    
    public print(): void {
        console.log(`Фамилия: ${this.surname}`);
        console.log(`Имя ${this.name}`);
        console.log(`Отчество: ${this.patronymic}`);
        console.log(`Дата рождения: ${this.dateOfBirth}`);
        console.log(`Тип документа: ${this.docType}`);
        console.log(`Номер документа: ${this.docNum}`);
    }
}

class Vehicle implements IVehicle {
    private _brand: string;
    private _model: string;
    private _releaseYear: number;
    private _VIN: string;
    private _regNumber: number;
    private _owner: Owner;

    public print(): void {
        console.log(`Брэнд: ${this._brand}`);
        console.log(`Модель: ${this._model}`);
        console.log(`Год выпуска: ${this._releaseYear}`);
        console.log(`VIN: ${this._VIN}`);
        console.log(`Регистрационный номер: ${this._regNumber}`);
        console.log(`Владелец: ${this._owner}`);
    }

    constructor(brand: string, model: string, releaseYear: number, VIN: string,
         regNumber: number, owner: Owner) {
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

interface ICar extends IVehicle {

}