function sum2DArray(arr: number[][]): Promise<number> {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(arr.length === 0) {
            reject('Cannot sum an empty array');
        }
        setTimeout(() => {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    console.log(`Adding ${arr[i][j]} to sum`);
                    sum += arr[i][j];
                }
            }
            resolve(sum);
        }, 0);
        console.log('returning from sum');
    });
}

// Example usage:
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// const sumPromise1 = sum2DArray(array2D);
// console.log('sumPromise1:', sumPromise1);
//
// const sumPromise2 = sum2DArray([]);
// console.log('sumPromise2:', sumPromise2);

// There are 2 issues here caused by the same faulty code. For sumPromise1, it prints Promise { <pending> } instead
// of the actual value, and for sumPromise2 it throws the error instead of using reject, and prints Promise { <rejected> 'cannot sum an empty array' }
// instead of just printing the error.
// The issue was that we were not waiting for the promises to execute. When we make something a promise, it gets
// defined as a long task and added to the event queue, meaning all tasks on the main thread will execute first.
// Thus the console.log() occurs before the promise has executed, and we don't print the desired output. To fix this, we
// can use .then() to wait for the promise to finish before performing the print:

sum2DArray(array2D).then(res => console.log(res)).catch(console.error);
sum2DArray([]).then(res => console.log(res)).catch(console.error);
