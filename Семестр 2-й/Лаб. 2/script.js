// Вызов функции при загрузке страницы

var zooDatabase = [];

async function initDatabase() {
  let promise = await fetch("http://localhost:3000/api/zoo");
  zooDatabase = await promise.json();
  populateSelect();
}

initDatabase();




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
      let tr = document.createElement("tr");
      let td_animal = document.createElement("td");
      let td_enclosure = document.createElement("td");
      let td_status = document.createElement("td");
      let td_name = document.createElement("td");
      let td_count = document.createElement("td");
      td_animal.innerText = animal.name;
      td_enclosure.innerText = animal.enclosure;
      td_status.innerText = name.status;
      td_name.innerText = name.name;
      td_count.innerText = animal.count;
      tr.appendChild(td_animal);
      tr.appendChild(td_enclosure);
      tr.appendChild(td_status);
      tr.appendChild(td_count);
      tr.appendChild(td_name);

      animals_table.appendChild(tr);
    }
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
    // zooDatabase.forEach(animal => {
    //   if (animal.enclosure == select.options[select.selectedIndex].value) {
    //     animal.status = status;
    //   }
    // })
    let disapearedAnimal = zooDatabase.findIndex(animal => animal.names.find(name => name.name == disapearedAnimalName));
    console.log(disapearedAnimal);
    let animal = zooDatabase[disapearedAnimal].names.findIndex(name => name.name == disapearedAnimal);
    zooDatabase[disapearedAnimal].names[animal].status = status;
  }
  countAnimals = document.getElementById("animalCount").value;

})

function generateReport() {
  let date = document.getElementById('dateInput').value;
  let enclosure = document.getElementById('enclosureInput').value;
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
      Какого черта в вольере с пингвинами делает слон: ${elephantAction}
    `;

  // Сохранение отчета в текстовый файл
  downloadFile(report, 'Zoo_Report.txt');
}

async function sendZoo() {
  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(zooDatabase)
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
