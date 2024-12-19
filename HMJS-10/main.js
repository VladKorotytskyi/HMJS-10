// 1
const processArray = (array, callback) => {
    return callback(array);
};

const getSum = (arr) => {
    let sum = 0;
    for(let num of arr) {
        sum += num;
    }
    return sum;
}
const getMin = (arr) => Math.min(...arr);
const getMax = (arr) => Math.max(...arr);

const array1 = [1, 2, 3, 4, 5]; //15
const array2 = [-15, 0, 36, -29, 125]; //-29
const array3 = [125, 85, 255, 12, 36, -10]; //255

console.log(processArray(array1, getSum));
console.log(processArray(array2, getMin));
console.log(processArray(array3, getMax));


// 2
const operate = (a, b, callback) => { 
    return callback(a, b);
}; 

const add = (a, b) => a + b;
const subtrack = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : 'Ділення на нуль неможливе';
console.log(operate(10, 5, subtrack)); // Віднімання 
console.log(operate(10, 5, add)); // Додавання 
console.log(operate(10, 5, multiply)); // Множення 
console.log(operate(10, 5, divide)); // Ділення