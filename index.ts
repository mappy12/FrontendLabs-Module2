const findMinValue = (arr: number[]): number => {
    let minValue = arr[0];

    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
    }

    return minValue;
}

const arr1: number[] = [32,21,24,6,522,124,67,4,523]

const minValue = findMinValue(arr1);
console.log(minValue);

const findCountZero = (arr: number[][]): number => {
    let count = 0;

    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr[i].length; ++j) {
            if (arr[i][j] === 0) {
                ++count;
            }
        }
    }

    return count;
}

const arr2: number[][] = [
    [1,2,4],
    [43,0,2],
    [0,23,543],
    [0,534,23]
];

const count = findCountZero(arr2);
console.log(count);