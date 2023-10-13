funcs = [f1];

function f1(tbody_id = "task_1_table") {
    const tbody = document.getElementById(tbody_id).children[0];
    let columns = tbody.children[0].children.length;
    const row = document.createElement("tr");        
    for (let i = 0; i < columns; i++) {
        const td = document.createElement("td");
        td.innerText = i + 1;
        row.append(td);
    }
    row.className = "table__row";
    tbody.append(row);
}

function f2(tbody_id = "task_2_table") {
    const tbody = document.getElementById(tbody_id).children[0];
    let columns = tbody.children[0].children.length;
    let rows = tbody.children.length;
    for (let i = 0; i < rows; i++) {
        const td = document.createElement("td");
        td.innerText = columns + 1;
        tbody.children[i].append(td);
    }
}

function f3(tbody_id = "task_3_table") {
    f1(tbody_id)
    f2(tbody_id)
}

function f4_begin(tbody_id = "task_4_table") {
    const tbody = document.getElementById(tbody_id).children[0];
    for (const row of tbody.children) {
        for (const cell of row.children) {
            const input = document.createElement('input');
            input.type = "text";
            input.addEventListener('change', () => {
                cell.innerText = input.value;
                cell.append(input); 
                input.classList.toggle("cell-class-input");
            });
            
            input.className = "cell-class-input";
            cell.append(input);
            cell.addEventListener('click', () => {
                input.classList.toggle("cell-class-input");
                input.focus();
            });
        }
    }
}

let lab5_cells = [];
let lab6_cells = [];

function f5_begin(tbody_id = "task_5_table", arr = lab5_cells) {
    const tbody = document.getElementById(tbody_id).children[0];
    for (const row of tbody.children) {
        for (const cell of row.children) {
            arr.push(cell);
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function f5(arr = lab5_cells) {
    if(arr.length == 0) return;
    let i = getRandomInt(lab5_cells.length);
    let cell = arr[i];
    cell.style = 'background-color: red';
    arr.splice(i, 1);
}

function f6(arr = lab6_cells) {
    if(arr.length == 0) return;
    let cell = arr.shift();
    cell.style = 'background-color: red';
}

let suits = ["clubs", "diamonds", "hearts", "spades"]
let cards_names = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"]
let cards = [];

function f7_begin(arr = cards) {
    for (const suit of suits) {
        for (const card of cards_names) {
            cards.push(`cards/${suit}_${card}.svg`);
        }
    }
}

function f7(cards_id = "cards") {
    let cards_container = document.getElementById(cards_id);
    for (const card of cards_container.children) {
        card.setAttribute("src", cards[getRandomInt(cards.length)])
    }
}

function exec(){
    for (const func of funcs) {
        func();
    }
}
f4_begin();
f5_begin();
f5_begin("task_6_table", lab6_cells);
f7_begin();
// exec()