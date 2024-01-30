const fs = require('fs');

class Animal {
    constructor(specie, name, cell) {
        this.specie = specie;
        this.name = name;
        this.cell = cell;
    }
}

class Cell {
    constructor(name, number, type) {
        this.number = number;
        this.name = name;
        this.type = type;
    }
}

const cellTypes = {
    CELL: "cell",
    GLASS: 'glass'
}

function createData() {
    let data = {};
    let animals = [["Змея", cellTypes.GLASS, ["Игорь", "Геша", "Гатя"]],
    ["Хомяк", cellTypes.GLASS, ["Том", "Тюбик", "Тапок"]],
    ["Тигр", cellTypes.CELL, ["Тигро", "Белик"]]]

    for (const animal of animals) {
        console.log(animal[2]);
        for (const name of animal[2]) {
            data[name] = new Animal(animal[0], name, animal[1]);
        }
    }
    return data;
}
function writeData() {
    fs.writeFileSync("./data.json", JSON.stringify(createData()));
}

writeData();