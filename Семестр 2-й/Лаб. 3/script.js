function explainArray() {
    console.log("Массив (Array) - это упорядоченная коллекция элементов.");
    console.log("Элементы в массиве могут быть любого типа данных, включая числа, строки, объекты и т.д.");
}

function visualizeArray() {
    let myArray = [1, 2, 3, 4, 5];
    console.log("Пример массива:", myArray);
}

// Функция для демонстрации работы с массивом
function arrayOperations() {
    let myArray = [];
    // Человек вводит данные в массив

    let number = 23;
    myArray.push(number);

    // Выводим массив
    console.log("Ваш массив:", myArray);

    // Выводим транспонированную матрицу (в данном контексте просто переворачиваем массив)
    console.log("Транспонированная матрица:", myArray.reverse());
}

// Функция для работы с многомерным массивом
function multiDimensionalArray() {
    let matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    console.log("Пример многомерного массива (матрицы):", matrix);
}
let firstArray = [1, 2, 3, 4, 5];
function addElement() {
    let element = prompt("Напишите элемент");
    firstArray.push(element);
    updateFirstArray();

}

function deleteElement() {
    firstArray.pop();
    updateFirstArray();
}

function updateFirstArray(array = firstArray) {
    let firstArrayHtml = document.getElementById("first-array");
    firstArrayHtml.innerText = "[" + array.join(", ") + "]";
}

let addingArray = [];

function addToAddingArray() {
    let input = document.getElementById("input");
    let addingArrayHtml = document.getElementById("adding-array");
    addingArray = input.value.split("\n").map(str => str.split(", "));
    addingArrayHtml.innerText = addingArray.map(array => "[" + array.join(", ") + "]").join("\n");
}

function transposeArray(array, arrayLength) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push([]);
    };

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < arrayLength; j++) {
            newArray[j].push(array[i][j]);
        };
    };

    return newArray;
}

updateFirstArray(firstArray);
explainArray();
visualizeArray();
arrayOperations();
multiDimensionalArray();

