import { array1 } from './a.js';
import { array2 } from './b.js';

function compare4DArrays(array1, array2) {
    const result = [];

    for (let i = 0; i < array1.length; i++) {
        result[i] = [];
        for (let j = 0; j < array1[i].length; j++) {
            result[i][j] = [];
            for (let k = 0; k < array1[i][j].length; k++) {
                result[i][j][k] = [];
                for (let l = 0; l < array1[i][j][k].length; l++) {
                    const value1 = array1[i][j][k][l];
                    const value2 = array2[i][j][k][l];

                    if (value1 === 0 && value2 === 0) {
                        result[i][j][k][l] = 0;
                    } else if (value1 === 0) {
                        result[i][j][k][l] = value2;
                    } else if (value2 === 0) {
                        result[i][j][k][l] = value1;
                    } else {
                        result[i][j][k][l] = "Wrong";
                    }
                }
            }
        }
    }

    return result;
}

// Example usage

const resultArray = compare4DArrays(array1, array2);
console.log(resultArray);
