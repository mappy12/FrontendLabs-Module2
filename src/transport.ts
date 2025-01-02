import { seal, toUpperCase} from "./decor.js";

namespace Transport {
    export enum DocType {
        passport = "Passport",
        IDCard = "ID Card",
        birthCertificate = "birthCertificate" 
    }

    export enum BodyType {
        Hatchback = "Hatchback",
        Coupe = "Coupe",
        Sedan = "Sedan",
    }

    export enum CarClass {
        Economy = "Economy",
        Standard = "Standard",
        Luxury = "Luxury",
    }

    export interface IOwner {
        surname: string;
        name: string;
        patronymic: string;
        dateOfBirth: string;
        docType: DocType;
        docSeries: number;
        docNum: number;
        print(): void;
    }

    export interface IVehicle {
        brand: string;
        model: string;
        releaseYear: number;
        VIN: string;
        regNumber: number;
        owner: Owner;
        print(): void;
    }


    export class Owner implements IOwner {
        private _surname: string;
        private _name: string;
        private _patronymic: string;
        private _dateOfBirth: string;
        private _docType: DocType;
        private _docSeries: number;
        private _docNum: number;

        constructor(surname: string, name: string, patronymic: string, dateOfBirth: string,
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

    export class Vehicle implements IVehicle {
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

    export interface ICar extends IVehicle {
        bodyType: BodyType;
        carClass: CarClass;
    }

    @seal
    export class Car implements ICar {
        private _brand: string;
        private _model: string;
        private _releaseYear: number;
        private _VIN: string;
        private _regNumber: number;
        private _owner: Owner;

        private _bodyType: BodyType;
        private _carClass: CarClass;

        constructor(brand: string, model: string, releaseYear: number, VIN: string,
            regNumber: number, owner: Owner, bodyType: BodyType, carClass: CarClass) {
            this._brand = brand;
            this._model = model;
            this._releaseYear = releaseYear;
            this._VIN = VIN;
            this._regNumber = regNumber;
            this._owner = owner;

            this._bodyType = bodyType;
            this._carClass = carClass;
        }

        public print(): void {
            console.log(`Брэнд: ${this._brand}`);
            console.log(`Модель: ${this._model}`);
            console.log(`Год выпуска: ${this._releaseYear}`);
            console.log(`VIN: ${this._VIN}`);
            console.log(`Регистрационный номер: ${this._regNumber}`);
            console.log(`Тип кузова: ${this._bodyType}`);
            console.log(`Класс автомобиля: ${this._carClass}`)
        }
        
        @toUpperCase
        get brand() {
            return this._brand;
        }

        @toUpperCase
        get model() {
            return this._model;
        }

        get releaseYear() {
            return this._releaseYear;
        }

        @toUpperCase
        get VIN() {
            return this._VIN;
        }

        get regNumber() {
            return this._regNumber;
        }

        get owner() {
            return this._owner;
        }

        get bodyType(): BodyType {
            return this.bodyType;
        }

        get carClass(): CarClass {
            return this._carClass;
        }
    }

    export interface IMotorbike extends IVehicle {
        frameType: string;
        isSport: boolean;
    }

    export class Motorbike implements IMotorbike {
        private _brand: string;
        private _model: string;
        private _releaseYear: number;
        private _VIN: string;
        private _regNumber: number;
        private _owner: Owner;

        private _frameType: string;
        private _isSport: boolean;

        constructor(brand: string, model: string, releaseYear: number, VIN: string,
            regNumber: number, owner: Owner, frameType: string, isSport: boolean) {
            this._brand = brand;
            this._model = model;
            this._releaseYear = releaseYear;
            this._VIN = VIN;
            this._regNumber = regNumber;
            this._owner = owner;

            this._frameType = frameType;
            this._isSport = isSport;
        }

        public print(): void {
            console.log(`Брэнд: ${this._brand}`);
            console.log(`Модель: ${this._model}`);
            console.log(`Год выпуска: ${this._releaseYear}`);
            console.log(`VIN: ${this._VIN}`);
            console.log(`Регистрационный номер: ${this._regNumber}`);

            console.log(`Тип рамы: ${this._frameType}`);
            console.log(`Подходит ли для спорта: ${this._isSport}`);
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

        get frameType() {
            return this._frameType;
        }

        get isSport(){
            return this._isSport;
        }
    }

    export interface IVehicleStorage<T extends IVehicle> {
        creationDate: Date;
        vehicles: T[];
        getAllVehicle(): T[];

        addVehicle(vehicle: T): void;
    }

    export class VehicleStorage<T extends Vehicle> implements IVehicleStorage<T> {
        private _creationDate: Date;
        private _vehicles: T[];

        constructor() {
            this._creationDate = new Date();
            this._vehicles = [];
        }

        getAllVehicle(): T[] {
            return this._vehicles;
        }

        addVehicle(vehicle: T): void {
            this._vehicles.push(vehicle);
        }

        get creationDate() {
            return this._creationDate;
        }

        get vehicles() {
            return this._vehicles;
        }
    }
}

export {Transport}