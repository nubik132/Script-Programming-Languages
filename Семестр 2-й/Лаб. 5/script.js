let user = {
    name: "Василий Иванович",
    age: 35
}
let json = JSON.stringify(user);
console.log(json);

let newUser = JSON.parse(json);

console.log(newUser);