//import { Product } from "./Product.js";
//import { Category } from "./Category.js";
//import { Basket } from "./Basket.js";
//import { User } from "./User.js";
let categories = [];


let technicCategory = new Category("technic", new Product("Washing machine ASD 231-2", 599, 7.02),
    new Product("Vacuum cleaner Ultr skr 3", 459, 6.84),
    new Product("Mixer Vench M-2", 289, 8.58));


let furnitureCategory = new Category("furniture", new Product("Table PS234", 159, 9.03),
    new Product("Sofa Rester 7AB", 399, 7.87),
    new Product("Armchair", 269, 8.56),);

categories.push(technicCategory);
categories.push(furnitureCategory);

let alexUser = new User("alex2000", "0002Xela",
    new Basket(technicCategory.products[1], furnitureCategory.products[1]));

let mariaUser = new User("mariaAAA37", "Passwar23",
    new Basket(technicCategory.products[2], technicCategory.products[0]));



function createProductButton(sign, onclick) {
    let button = document.createElement("input");
    button.type = "button";
    button.value = sign;
    button.onclick = onclick;
    button.classList.add("product__button");
    return button;
}

function createPlusButton(product) {
    let button = createProductButton("+", () => addProduct(product));
    button.classList.add("plus-button");
    return button;
}

function createMinusButton(product) {
    let button = createProductButton("-", () => removeProduct(product));
    button.classList.add("minus-button");
    return button;
}

function addProduct(product) {
    checkAutorization();
    let user = JSON.parse(getCookie(getCookie("login")));
    user.basket.products.push(product);
    saveNewUser(user);
    console.log(product);
}

function removeProduct(product) {
    checkAutorization();
    let user = JSON.parse(getCookie(getCookie("login")));
    let jsonProduct = JSON.stringify(product);
    let products = user.basket.products;
    for (const _product of products) {
        if (JSON.stringify(_product) == jsonProduct) {
            products.splice(products.indexOf(_product), 1);
            break;
        }
    }
    saveNewUser(user);
    console.log(product);
}

function decorateHtml(element, tag) {
    let tagHtml = document.createElement(tag);
    tagHtml.append(element);
    return tagHtml;
}

saveUser(alexUser);
saveUser(mariaUser);

let table = document.querySelector("table");

for (const category of categories) {
    let categoryHtml = document.createElement("tr");
    let categoryNameHtml = document.createElement("td");
    categoryNameHtml.classList.add("category");
    categoryNameHtml.setAttribute("colspan", 3)
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

