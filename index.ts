//Вариант 2

//2

const sumStrings = (str1:string, str2:string, str3:string): string => {
    return str1+str2+str3;
}

console.log(sumStrings("Hello, ", "What is your name? ", "How are you?"))

//3

let isActive: boolean = true;

const age: number = 18;

const surname: string = "Petrov";

let info: any = {
    isActive: true,
    age: 20,
    surname: "Ivanov",
    arr: [1,2,3,4,5]
};

const binarySet: boolean[] = [true, false, false, true];

let dimensions: [number, number] = [1920, 1080];

//4

interface Entity {
    id: number;
}

interface ToJsonStringify extends
Entity {
    e1: string;
    e2: string;
}

const data: ToJsonStringify = {
    id: 2,
    e1: "Поле 1",
    e2: "Поле 2",
}

const jsonData: string = JSON.stringify(data);
console.log(jsonData);

