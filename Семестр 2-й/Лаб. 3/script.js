
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

explainArray();
visualizeArray();
arrayOperations();
multiDimensionalArray();