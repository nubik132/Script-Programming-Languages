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
            input.addEventListener('submit', () => {
                cell.innerHTML = input.value;
                cell.append(input); 
            });
            input.className = "cell-class-input";
            cell.append(input);
            cell.addEventListener('click', () => input.classList.toggle("cell-class-input"));
        }
    }
}

function exec(){
    for (const func of funcs) {
        func();
    }
}
f4_begin();

// exec()