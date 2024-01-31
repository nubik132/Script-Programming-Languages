  // Пример базы данных
  //  let zooDatabase = [
  //  { name: 'Лев', enclosure: 'Вольер 1', status: 'Жив', count: 2, names: ['Симба', 'Муфаса'] },
  //  { name: 'Пингвин', enclosure: 'Вольер 2', status: 'Жив', count: 5, names: ['Пингвин1', 'Пингвин2', 'Пингвин3', 'Пингвин4', 'Пингвин5'] },
  //  { name: 'Змея', enclosure: 'Вольер 3', status: 'Жив', count: 1, names: ['Слизняк'] },
  //  { name: 'Тигр', enclosure: 'Вольер 4', status: 'Жив', count: 3, names: ['Шерхан', 'Ричард', 'Тайга'] },
  //  { name: 'Крокодил', enclosure: 'Вольер 5', status: 'Жив', count: 2, names: ['Гена', 'Чебурашка'] },
  //  { name: 'Кенгуру', enclosure: 'Вольер 6', status: 'Жив', count: 2, names: ['Скок', 'Бок'] },
  //  { name: 'Гепард', enclosure: 'Вольер 7', status: 'Жив', count: 1, names: ['Спринт'] },
  //  { name: 'Слон', enclosure: 'Вольер 8', status: 'Жив', count: 1, names: ['Дамбо'] },
  //  { name: 'Жираф', enclosure: 'Вольер 9', status: 'Жив', count: 1, names: ['Высун'] },
  //  { name: 'Медведь', enclosure: 'Вольер 10', status: 'Жив', count: 2, names: ['Белый', 'Черный'] },
  //];
  var zooDatabase = {};
  async function initDatabase() {
    let promise = await fetch("http://localhost:3000/api/zoo");
    zooDatabase = await promise.json();
    console.log(zooDatabase);
  }

  initDatabase()

  function searchAnimals() {
    let searchTerm = document.getElementById('searchInput').value.toLowerCase();
    let searchResults = zooDatabase.filter(animal =>
      animal.name.toLowerCase().includes(searchTerm) || animal.enclosure.toLowerCase().includes(searchTerm)
    );
    while (animals_table.children.length > 1) {
      animals_table.removeChild(animals_table.lastChild);
    }
    
    // Вывести результаты поиска



    for(const animal of searchResults){
      let tr = document.createElement("tr");
      let td_name = document.createElement("td");
      let td_enclosure = document.createElement("td");
      let td_status = document.createElement("td");
      let td_names = document.createElement("td");
      let td_count = document.createElement("td");
      td_name.innerText = animal.name;
      td_enclosure.innerText = animal.enclosure;
      td_status.innerText = animal.status;
      td_names.innerText = animal.names;
      td_count.innerText = animal.count;
      tr.appendChild(td_name);
      tr.appendChild(td_enclosure);
      tr.appendChild(td_status);
      tr.appendChild(td_count);
      tr.appendChild(td_names);

      animals_table.appendChild(tr);
    }
  }

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

  function downloadFile(content, filename) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }