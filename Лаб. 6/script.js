const funcs = [f1,f2,f3,f4,f5]

function f1(str = " Куда идём мы с  Пяточком? на п остановку   за бычком.   ") {
    return str.trim().replace(/\s+/g, ' ').replace(/\s[^уавсояик\s]\s?[.,!?:-]?\s/g, " ").split(" ").length;
}
function f2(str = "mister.nubik@list.ru") {
    return str.match(/\S{1,50}@\w+\.\w+/g)[0] === str;
}
function f3(str = "Олесь, составь мне натальную карту! Я родился 29 апреля 2005-го года или 29.04.2005") {
    //10.10.1010
    //31 марта 2003
    //1010.10.10
    //(\d{1,2}\.\d{1,2}.\d{1,4})|(\d{1,2} (Январ|Феврал|Март|Апрел|Ма|Июн|Июл|Август|Сентябр|Октябр|Ноябр|Декабр){1}[ая]? \d{1,4})
    let regex = /(\d{1,2}\.\d{1,2}.\d{1,4})|(\d{1,2} (Январ|Феврал|Март|Апрел|Ма|Июн|Июл|Август|Сентябр|Октябр|Ноябр|Декабр){1}[ая]? \d{1,4})/gi;
    return str.match(regex);
}
function f4() {
    
}
function f5() {
    
}

function exec() {
    let i = 1
    for (const func of funcs) {
        console.log(func.name);
        console.log(func());
        i++;
    }
}

exec();