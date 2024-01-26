let main = document.querySelector("main");

let basket = getCookie(getCookie("login")).basket;

let table = document.querySelector("table");

function countProducts() {
    let obj = {}
    for (const product of basket.products) {
        if (product.name in obj) {
            obj[product.name]
        }
    }
}

for (const category of basket.products) {
    categoryNameHtml.innerText = category.name
    categoryHtml.appendChild(categoryNameHtml);
    table.appendChild(categoryHtml);

    for (const product of category.products) {
        let productRowHtml = document.createElement("tr");
        productRowHtml.classList.add("product");

        let productHtml = document.createElement("td");
        productHtml.innerText = product.name;

        productRowHtml.appendChild(productHtml);
        let td = decorateHtml(createPlusButton(product), "td");
        productRowHtml.appendChild(td);
        
        productRowHtml.appendChild(decorateHtml(createMinusButton(product), "td"));

        table.appendChild(productRowHtml);
    }
}