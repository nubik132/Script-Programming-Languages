
function f1() {
    let sum = 0
    for (let i = 1; i <= 100; i++) {
        sum += i
    }
    return sum
}

function f2() {
    let sum = 0
    for (let i = 2; i <= 100; i += 2) {
        sum += i
    }
    return sum
}

function f3() {
    let sum = 0;
    for (let i = 1; i < 100; i += 2) {
        sum += i
    }
    return sum
}

function f4(n1, n2) {
    return n1 % n2
}

function f5(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        console.log(str[i]);
    }
}

function sumOf(nums, func) {
    let sum = 0
    for (const i of nums) {
        sum += func(i);
    }
    return sum;
}

function f6(nums) {
    return sumOf(nums, (i) => i ** 2)
}

function f7(nums){
    return sumOf(nums, (i) => Math.sqrt(i))
}

function f8(nums) {
    return sumOf(nums, (i) => {if(i > 0) return i})
}

function f9(nums) {
    return sumOf(nums, (i) => {if(i > 0 && i < 10) return i})
}

function f10(str = 'abcde') {
    return str.split('')
}

function f11(num = 12345){
    return num.toString().split('')
}

function f12(num = 12345) {
    return Number.parseInt(num.toString().split('').reverse().join(''))
}

function f13(num = 12345) {
    let sum = 0
    num.toString().split('').forEach((i) => {sum += Number.parseInt(i)})
    return sum;
}

function f14() {
    return Array.from(Array(11).keys()).slice(1)
}

function f15() {
    return Array.from(Array(101).keys()).slice(1).filter((i) => (i % 2 === 0))
}

function f16(array = [1.456, 2.125, 3.32, 4.1, 5.34]) {
    return array.map((i) => i.toFixed(1))
}

function f17(strings) {
    return strings.filter((str) => str.startsWith('https://'))   
}

function f18(strings) {
    return strings.filter((str) => str.endsWith('.html'))   
}

function f19(nums) {
    return nums.map((i) => i * 1.1)
}
let numbers = [1, 2, 3, 4];
let funcs = [f1, f2, f3, [f4, [10, 3]], [f5, 'строка'], [f6, [numbers]], [f7, [numbers]], [f8, [numbers]], [f9, [numbers]], f10, f11, f12, f13, f14, f15, f16, [f17, [['https://link.com', "http://source.com.html", 'str']]], [f18, [['https://link.com', "http://source.com.html", 'str']]], [f19, [numbers]]]
exec(funcs);

function exec(funcs) {
    let i = 1
    for (const func of funcs) {
        console.log('#' + i);
        if (typeof func === 'object') {
            console.log(execWithArg(func[0], func[1]));
        }
        else{
            console.log(func());
        }
        i += 1;
    }
}

function execWithArg(func, args) {
    console.log('Args: ' + args);
    if (typeof args === 'object') {
        return func(...args);        
    }
    return func(args);
}
