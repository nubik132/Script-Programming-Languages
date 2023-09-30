const funcs = [f1, f2, f3, f4, f5, f6]

function exec(functions) {
    let n = 1
    for (const i of functions) {
        console.log("#" + n);
        console.log(i());
        n++;
    }
}

function f1(num = 526274) {
    let str = num.toString();
    return str.split('').sort((a, b) => a - b).join('');
}

function factorial(n) {
    let ans = 1
    for (let i = 2; i <= n; i++) {
        ans = ans * i
    }
    return ans
}
// fact / (n_arr.length - 1)
function f2(n = 3269) {
    let fact = factorial(n.toString().length);
    let nums = []
    let n_arr = n.toString().split('');
    for (let i = 0; i < n_arr.length; i++) {
        for (let i = 1; i < n_arr.length; i++) {
            let last_i = n_arr.length - i;
            let a = n_arr[last_i];
            let b = n_arr[last_i - 1];
            n_arr[last_i] = b;
            n_arr[last_i - 1] = a;
            nums.push(n_arr.join(''));
        }
    }
    return nums.sort((a, b) => a - b).slice(0, nums.length / 2);
}
function f3(num = 13) {
    if (num % 2 === 0) return false;
    for (let i = 3; i < num; i += 2) {
        if (num % i === 0) return false;
    }
    return num !== 1;
}
function f4(num = 24) {
    if (f3(num)) num++;
    let prime = num;
    for (let i = num; !f3(i); i++) {
        prime = i
    }
    return ++prime;
}
function f5(str = "прррча, прррр чача. Амана кукарена ша на на на.") {
    const arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    return str2;
}
function f6(str = "dfhdfh") {
    let alphabet = "abcdefghijklmnopqrstuvwxyzабвгдеёжзийклмнопрстуфхцчшщъыьэюя"
    if (str === str.toUpperCase()) {
        return 1;
    }
    // } else  {
    //     for (const i of alphabet) {
    //         if (str.includes(i)) {
    //             return 0
    //         }
    //     }
    //    return -1
    // } 
    return 0;
}


exec(funcs)
