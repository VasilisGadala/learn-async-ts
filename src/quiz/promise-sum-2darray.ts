const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

async function sum1Darr(arr: number[]): Promise<number> {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function sum2Darr(arr: number[][]): Promise<number> {
    return new Promise(async (resolve, reject) => {
        try {
            let promises = arr.map((element: number[]) => sum1Darr(element));
            const results = await Promise.all(promises);
            const totalSum = results.reduce((acc, curr) => acc + curr, 0);
            resolve(totalSum);
        } catch (error) {
            reject(error);
        }
    });
}

sum2Darr(array2D_1).then((status) => console.log(status)).catch((error) => console.error(error));

// the code below adds console.logs to see that the asynchronous functionality works
/*
const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Sleep function to create a delay
function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sum1Darr(arr: number[]): Promise<number> {
    console.log(`Starting sum for: ${arr}`);
    await sleep(Math.random() * 1000); // Random delay between 0 and 1000 ms
    let sum = 0;
    arr.forEach((element: number) => { sum += element });
    console.log(`Completed sum for: ${arr} = ${sum}`);
    return sum;
}

function sum2Darr(arr: number[][]): Promise<number> {
    return new Promise(async (resolve, reject) => {
        try {
            let promises = arr.map((element: number[]) => sum1Darr(element));
            const results = await Promise.all(promises);
            const totalSum = results.reduce((acc, curr) => acc + curr, 0);
            console.log(`Total sum for 2D array is: ${totalSum}`);
            resolve(totalSum);
        } catch (error) {
            reject(error);
        }
    });
}

sum2Darr(array2D_1).then((status) => console.log(`Final Status: ${status}`)).catch((error) => console.error(error));
 */