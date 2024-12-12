//1 

enum DocType {
    passport = "Passport",
    IDCard = "ID Card",
    birthCertificate = "birthCertificate" 
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
    private surname: string;
    private name: string;
    private patronymic: string;
    private dateOfBirth: number;
    private docType: DocType;
    private docSeries: number;
    private docNum: number;

    constructor(surname: string, name: string, patronymic: string, dateOfBirth: number,
        docType: DocType, docSeries: number, docNum: number) {
            this.surname = surname;
            this.name = name;
            this.patronymic = patronymic;
            this.dateOfBirth = dateOfBirth;
            this.docType = docType;
            this.docSeries = docSeries;
            this.docNum = docNum;
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

