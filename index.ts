//1 

enum DocType {
    passport = "Passport",
    IDCard = "ID Card",
    birthCertificate = "birthCertificate" 
}

interface Owner {
    surname: string;
    name: string;
    patronymic: string;
    dateOfBirth: number;
    docType: DocType;
    docSeries: number;
    docNum: number;
    print(): void;
}

interface Vehicle {
    brand: string;
    model: string;
    releaseYear: number;
    VIN: string;
    regNumber: number;
    owner: Owner;
    print(): void;
}

