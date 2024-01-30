const funcs = [f1, f2, f3, f4, f5]

function f1(str = "aggygy 4254 vy35435vgf435gfc gchg46546cvgh chg") {
    return str.trim().replace(/\s+/g, ' ').match(/\b[^\d\s]+\b/g)
    // return str.trim().replace(/\s+/g, ' ').replace(/\s[^уавсояик\s]\s?[.,!?:-]?\s/g, " ").split(" ").length;
}
function f2(str = "mistervh-g@gfn.hfb.yuytgu") {
    let res = str.match(/\S+@\w+(\.\w*)+/g)[0];
    return res === str && res.length < 51;
}
function f3(str = "12.09.2006 12.13.2095 29 января 2024") {
    let regex = /(\d{1,2}\.\d{1,2}.\d{1,4})|(\d{1,2} (Январ|Феврал|Март|Апрел|Ма|Июн|Июл|Август|Сентябр|Октябр|Ноябр|Декабр){1}[ая]? \d{1,4})/gi;
    let match = str.match(regex);
    let filter = match.map((str) => {
        let arr = str.split('.');
        if (arr.length === 3) {
            return +arr[0] < 32 && +arr[0] > 0 &&
                +arr[1] < 13 && +arr[1] > 0;
        }
        return true
    })
    let filtered_dates = match.filter((str, i) => filter[i]);
    return filtered_dates;
}
function f4(str = "         gfyugyu yguygu            yguygy         ") {
    let regex = /[^ ][\wА-я\W]+[^ ]/g
    return str.match(regex)[0];
}
function f5(num = "24F") {
    let regex = /[\dA-F]+/g;
    return num === num.match(regex)[0];
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