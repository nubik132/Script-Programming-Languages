let zooDatabase = [{ "name": "Лев", "enclosure": "Вольер 1", "status": "Жив", "count": 2, "names": ["Симба", "Муфаса"] }, { "name": "Пингвин", "enclosure": "Вольер 2", "status": "Жив", "count": 5, "names": ["Пингвин1", "Пингвин2", "Пингвин3", "Пингвин4", "Пингвин5"] }, { "name": "Змея", "enclosure": "Вольер 3", "status": "Жив", "count": 1, "names": ["Слизняк"] }, { "name": "Тигр", "enclosure": "Вольер 4", "status": "Жив", "count": 3, "names": ["Шерхан", "Ричард", "Тайга"] }, { "name": "Крокодил", "enclosure": "Вольер 4", "status": "Жив", "count": 2, "names": ["Гена", "Чебурашка"] }, { "name": "Кенгуру", "enclosure": "Вольер 6", "status": "Жив", "count": 2, "names": ["Скок", "Бок"] }, { "name": "Гепард", "enclosure": "Вольер 6", "status": "Жив", "count": 1, "names": ["Спринт"] }, { "name": "Слон", "enclosure": "Вольер 8", "status": "Жив", "count": 1, "names": ["Дамбо"] }, { "name": "Жираф", "enclosure": "Вольер 8", "status": "Жив", "count": 1, "names": ["Высун"] }, { "name": "Медведь", "enclosure": "Вольер 8", "status": "Жив", "count": 2, "names": ["Белый", "Черный"] }];

zooDatabase.forEach(animal => {
    let names = [];
    for (const name of animal.names) {
        names.push({ name: name, status: "Жив" });
    }
    animal.names = names;
})

console.log(zooDatabase);

console.log(JSON.stringify(zooDatabase));