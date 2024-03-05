let person = {
    name: "",
    lastname: ""
};

const nametb = document.getElementById("name");
const lastnametb = document.getElementById("lastname")

function hi() {
    
    person.name = nametb.value;
    person.lastname = lastnametb.value;
    let {name, lastname} = person;
    alert("Привет, " + lastname + " " + name);
}