const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

async function isNegative(num: number): Promise<boolean> {
    if (num >= 0) {
        throw new Error('num >= 0');
    }
    return true;
}

async function isNegRow(arr: number[]): Promise<number[]> {
    let promises = arr.map((element: number) => isNegative(element));
    await Promise.any(promises);
    return arr;
}

function findNegRow(arr: number[][]): Promise<number[]> {
    return new Promise(async (resolve, reject) => {
        try {
            let promises = arr.map((row: number[]) => isNegRow(row));
            const results = await Promise.any(promises);
            resolve(results);
        } catch (error) {
            reject('No neg. row');
        }
    });
}

findNegRow(array2D_3).then((row) => console.log('Row w/ neg:', row)).catch((error) => console.error(error));
