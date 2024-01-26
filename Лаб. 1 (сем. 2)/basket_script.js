let main = document.querySelector("main");

let basket = getCookie(getCookie("login")).basket;

let table = document.querySelector("table");

function countProducts() {
    let obj = {}
    for (const product of basket.products) {
        if (product.name in obj) {
            obj[product.name]++;
        } else {
            obj[product.name] = 1;
        }
    }
    return obj;
}
function init(products) {
    for (const key in products) {
        let productRowHtml = document.createElement("tr");
        productRowHtml.classList.add("product");

        let productHtml = document.createElement("td");
        productHtml.innerText = key;

        productRowHtml.appendChild(productHtml);

        let count = document.createElement("td");
        count.innerText = products[key];
        productRowHtml.appendChild(count);

        productRowHtml.appendChild(decorateHtml(createPlusButton(product), "td"));
        productRowHtml.appendChild(decorateHtml(createMinusButton(product), "td"));

        table.appendChild(productRowHtml);
    }
}