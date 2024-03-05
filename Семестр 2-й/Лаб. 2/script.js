// Вызов функции при загрузке страницы

var zooDatabase = [];
var deletedAnimals = [];

async function initDatabase() {
  let promise = await fetch("http://localhost:3000/api/zoo");
  let json = await promise.json();
  zooDatabase = json[0];
  deletedAnimals = json[1];
  populateSelect();
}

initDatabase();


var statusSelect = document.createElement("select");
statusSelect.add(new Option("Жив", "Жив"));
statusSelect.add(new Option("Умер", "Умер"));
statusSelect.add(new Option("Съеден", "Съеден"));
statusSelect.add(new Option("Продан", "Продан"));

function onStatusChanged() {
  findAnimal(this.animal).status = this.value;
  if (this.value != "Жив") {
    deletedAnimals.push(findAnimal(this.animal));
    deleteAnimal(this.animal);
  }
  else {
    addAnimal(deletedAnimals.find(animal => animal.name == this.animal), prompt("Введите вид животного"));
    deletedAnimals = deletedAnimals.filter(animal => {
      let animalName = animal.name + "";
      let name = this.animal + "";
      return animalName != name;
    });
  }
  sendZoo();
  searchAnimals();
}

function searchAnimals() {
  let searchTerm = document.getElementById('searchInput').value.toLowerCase();
  let searchResults = zooDatabase.filter(animal =>
    animal.name.toLowerCase().includes(searchTerm) || animal.enclosure.toLowerCase().includes(searchTerm)
  );
  while (animals_table.children.length > 1) {
    animals_table.removeChild(animals_table.lastChild);
  }

  // Вывести результаты поиска

  for (const animal of searchResults) {

    for (const name of animal.names) {
      if (name.status != "Жив") {
        continue;
      }
      let tr = document.createElement("tr");
      let td_animal = document.createElement("td");
      let td_enclosure = document.createElement("td");
      let td_status = document.createElement("td");
      let td_name = document.createElement("td");
      let td_count = document.createElement("td");
      td_animal.innerText = animal.name;
      td_enclosure.innerText = animal.enclosure;
      let newStatusSelect = statusSelect.cloneNode(true);
      newStatusSelect.animal = name.name;
      newStatusSelect.addEventListener('change', onStatusChanged)
      td_status.appendChild(newStatusSelect);
      td_name.innerText = name.name;
      td_count.innerText = animal.names.length;
      tr.appendChild(td_animal);
      tr.appendChild(td_enclosure);
      tr.appendChild(td_count);
      tr.appendChild(td_name);
      tr.appendChild(td_status);

      animals_table.appendChild(tr);
    }
  }
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  td.colSpan = 5;
  td.innerText = "Животные не в зоопарке";
  tr.appendChild(td);
  animals_table.appendChild(tr);

  searchResults = deletedAnimals.filter(animal =>
    animal.name.toLowerCase().includes(searchTerm) || animal.status.toLowerCase().includes(searchTerm)
  );
  for (const animal of searchResults) {
    let tr = document.createElement("tr");
    let td_name = document.createElement("td");
    td_name.colSpan = 4;
    let td_status = document.createElement("td");
    td_name.innerText = animal.name;
    let newStatusSelect = statusSelect.cloneNode(true);
    newStatusSelect.animal = animal.name;
    newStatusSelect.addEventListener('change', onStatusChanged);
    switch (animal.status) {
      case "Умер":
        newStatusSelect.selectedIndex = 1;
        break;
      case "Съеден":
        newStatusSelect.selectedIndex = 2;
        break;
      case "Продан":
        newStatusSelect.selectedIndex = 3;
        break;
    }
    td_status.appendChild(newStatusSelect);
    tr.appendChild(td_name);
    tr.appendChild(td_status);
    animals_table.appendChild(tr);
  }
}
const select = document.getElementById("animal_select");
function populateSelect() {
  const existingEnclosures = new Set();
  zooDatabase.forEach(animal => {
    // Проверяем, есть ли такой вольер уже в Set
    if (!existingEnclosures.has(animal.enclosure)) {
      // Если нет, добавляем его в Set и создаем опцию
      existingEnclosures.add(animal.enclosure);
      const option = document.createElement("option");
      // Устанавливаем текст опции
      option.textContent = animal.enclosure;
      // Устанавливаем значение опции
      option.value = animal.enclosure;
      // Добавляем опцию в select элемент
      select.appendChild(option);
    }
  });
}
var countAnimals = 0;

select.addEventListener('change', () => {
  let selectedAnimals = [];
  let selectedNames = [];
  countAnimals = 0
  zooDatabase.forEach(animal => {
    if (select.options[select.selectedIndex].value == animal.enclosure) {
      selectedAnimals.push(animal.name);
      animal.names.forEach(animal_name => selectedNames.push(animal_name.name));
      countAnimals += animal.count;
    }

  })
  document.getElementById("possibleAnimals").value = selectedAnimals.join(", ");
  document.getElementById("currentAnimals").value = selectedNames.join(", ");
  document.getElementById("animalCount").value = countAnimals;
})

document.getElementById("animalCount").addEventListener("change", () => {
  if (document.getElementById("animalCount").value == countAnimals - 1) {
    let disapearedAnimalName = prompt("Запишите имя исчезнувшего животного");
    let status = prompt("Запишите статус этого животного (умер, съеден, продан)");
    let disapearedAnimal = findAnimal(disapearedAnimalName);
    disapearedAnimal.status = status;
    deletedAnimals.push(disapearedAnimal);
    deleteAnimal(disapearedAnimal.name);
  }
  countAnimals = document.getElementById("animalCount").value;
  sendZoo();
})

function findAnimal(name) {
  let findedAnimal = undefined;
  zooDatabase.forEach((animal) => {
    let result = animal.names.find(animalName => animalName.name == name);
    if (result) {
      findedAnimal = result;
      return;
    }
  })
  return findedAnimal;
}

function deleteAnimal(name) {
  zooDatabase.forEach(animal => animal.names.filter(naming => naming.name != name));
}

function addAnimal(animal, specie) {
  let row = zooDatabase.find(animal => animal.name == specie);
  row.names.push(animal);
}

function generateReport() {
  let date = document.getElementById('dateInput').value;
  let enclosure = select.options[select.selectedIndex].value;
  let possibleAnimals = document.getElementById('possibleAnimals').value;
  let currentAnimals = document.getElementById('currentAnimals').value;
  let animalCount = document.getElementById('animalCount').value;
  let elephantAction = document.getElementById('elephantAction').value;

  // Генерация отчета
  let report = `
      Дата составления отчета: ${date}
      Название и номер вольера: ${enclosure}
      Возможные обитатели вольера: ${possibleAnimals}
      Текущие виды животных и их имена в вольере: ${currentAnimals}
      Количество животных в вольере: ${animalCount}
      Дополнительная информация: ${elephantAction}
    `;

  // Сохранение отчета в текстовый файл
  downloadFile(report, 'Zoo_Report.txt');
}

async function sendZoo() {
  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 0: zooDatabase, 1: deletedAnimals })
  });
  const responseText = await response.text();
}

function downloadFile(content, filename) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
