const funcs = [f1, f2, f3, f4, f5, f6]


function f1(letter = 'a') {
    let eng = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let rus = "абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"
    return eng.includes(letter) ? "eng" : (rus.includes(letter) ? "rus" : null)
}

function f2(arr = [2, 34, 63, 7747, 74848]) {
    return arr.sort(() => Math.random() - 0.5);
}

function f3(str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, cum?") {
    let obj = {}
    str_arr = str.split(' ')
    for (const i of str_arr) {
        if (!(i[0] in obj)) {
            obj[i[0]] = []
        }
        obj[i[0]].push(i)
    }
    return obj;
}
function f4() {
    return numToStr()(12345)
}
function f5(num = 11 * 17) {
    let arr = []
    let primes = getPrimes(num);
    for (const i of primes) {
        if (num % i == 0) {
            arr.push(i);
        }
    }

    function getPrimes(border) {
        function isPrime(num) {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) return false;
            }
            return num !== 1;
        }

        function getPrimesArray(max) {
            let arr = []
            for (let i = 2; i <= max; i++) {
                if (isPrime(i)) arr.push(i);
            }
            return arr
        }

        return getPrimesArray(border);
    }
    return arr
}
function f6() {

    return(syllabify("словарик"))


    function syllabify(words) {
        const syllableRegex = /[^уеыаоэяиюё]*[уеыаоэяиюё]+(?:[^уеыаоэяиюё]*$|[^уеыаоэяиюё](?=[^уеыаоэяиюё]))?/gi;
        return words.match(syllableRegex);
    }
}
function f7() {
    console.log(+task_7_inp1.value + +task_7_inp2.value);;
}


function f8() {
    task_8__result.innerText = getDivNumber(document.querySelector(".task-8"));;
}
function getDivNumber(div) {
    return div.getElementsByTagName("div").length;
}

function f9() {
    console.log(task_9_inp.value.length);
}
function f10() {
    let i = 1;
    for (const p of task_10__paragraphs.getElementsByTagName("p")) {
        p.innerText = i++;
    }
}

function exec() {
    let i = 1
    for (const func of funcs) {
        console.log(func.name);
        console.log(func());
        i++;
    }
}

exec()









function numToStr() {
    'use strict';

    var words = [
        [
            '', 'один', 'два', 'три', 'четыре', 'пять', 'шесть',
            'семь', 'восемь', 'девять', 'десять', 'одиннадцать',
            'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать',
            'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'
        ],
        [
            '', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят',
            'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'
        ],
        [
            '', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот',
            'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'
        ]
    ];

    var toFloat = function (number) {
        return parseFloat(number);
    };

    var plural = function (count, options) {
        if (options.length !== 3) {
            return false;
        }

        count = Math.abs(count) % 100;
        var rest = count % 10;

        if (count > 10 && count < 20) {
            return options[2];
        }

        if (rest > 1 && rest < 5) {
            return options[1];
        }

        if (rest === 1) {
            return options[0];
        }

        return options[2];
    };

    var parseNumber = function (number, count) {
        var first;
        var second;
        var numeral = '';

        if (number.length === 3) {
            first = number.substr(0, 1);
            number = number.substr(1, 3);
            numeral = '' + words[2][first] + ' ';
        }

        if (number < 20) {
            numeral = numeral + words[0][toFloat(number)] + ' ';
        } else {
            first = number.substr(0, 1);
            second = number.substr(1, 2);
            numeral = numeral + words[1][first] + ' ' + words[0][second] + ' ';
        }

        // if (count === 0) {
        //   numeral = numeral + plural(number, ['рубль', 'рубля', 'рублей']);
        // } else 
        if (count === 1) {
            if (numeral !== '  ') {
                numeral = numeral + plural(number, ['тысяча ', 'тысячи ', 'тысяч ']);
                numeral = numeral.replace('один ', 'одна ').replace('два ', 'две ');
            }
        } else if (count === 2) {
            if (numeral !== '  ') {
                numeral = numeral + plural(number, ['миллион ', 'миллиона ', 'миллионов ']);
            }
        } else if (count === 3) {
            numeral = numeral + plural(number, ['миллиард ', 'миллиарда ', 'миллиардов ']);
        }

        return numeral;
    };

    // var parseDecimals = function(number) {
    //   var text = plural(number, ['копейка', 'копейки', 'копеек']);

    //   if (number === 0) {
    //     number = '00';
    //   } else if (number < 10) {
    //     number = '0' + number;
    //   }

    //   return ' ' + number + ' ' + text;
    // };

    var rubles = function (number) {
        if (!number) {
            return false;
        }

        var type = typeof number;
        if (type !== 'number' && type !== 'string') {
            return false;
        }

        if (type === 'string') {
            number = toFloat(number.replace(',', '.'));

            if (isNaN(number)) {
                return false;
            }
        }

        if (number <= 0) {
            return false;
        }

        var splt;
        // var decimals;

        number = number.toFixed(2);
        if (number.indexOf('.') !== -1) {
            splt = number.split('.');
            number = splt[0];
            // decimals = splt[1];
        }

        var numeral = '';
        var length = number.length - 1;
        var parts = '';
        var count = 0;
        var digit;

        while (length >= 0) {
            digit = number.substr(length, 1);
            parts = digit + parts;

            if ((parts.length === 3 || length === 0) && !isNaN(toFloat(parts))) {
                numeral = parseNumber(parts, count) + numeral;
                parts = '';
                count++;
            }

            length--;
        }

        numeral = numeral.replace(/\s+/g, ' ');

        // if (decimals) {
        //   numeral = numeral + parseDecimals(toFloat(decimals));
        // }

        return numeral;
    };

    var globals;

    if (typeof module !== 'undefined' && module !== null) {
        globals = exports;
    } else {
        globals = window;
    }

    // globals.rubles = rubles;
    return rubles;

}