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



