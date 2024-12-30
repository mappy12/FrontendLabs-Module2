//1

function getCurrentDate(): void {
    console.log(Date.now());
}

addEventListener('DOMContentLoaded', () => {
    console.log('Страница загружена');

    const intervalId = setInterval(() => {
        getCurrentDate();
    }, 5000)

    setTimeout(() => {
        clearInterval(intervalId);

        console.log('Минута прошла');
    }, 60000)
})

//2

function doAddition(n: number) {
    return function(value: number) {
        return n + value;
    }
}

const addTen = doAddition(10);

console.log(addTen);
console.log(addTen(20));