// Функция для вывода текущей даты и времени с обновлением каждую секунду
function displayCurrentDateTime() {
        const currentDate = new Date();
        const formattedDateTime = currentDate.toLocaleString('ru-RU', { second: 'numeric' });
        console.log(`Текущая дата и время: ${formattedDateTime}`);
}

// Функция для подсчета секунд с определенной даты
function secondsSinceSpecificDate() {
    const specificDate = new Date('2009-04-17T00:00:00');
        const currentDate = new Date();
        const secondsDifference = Math.floor((currentDate - specificDate) / 1000);
        console.log(`Прошло секунд с 17.04.2009: ${secondsDifference}`);
}

// Функция для подсчета дней и недель между двумя датами
function daysAndWeeksBetweenDates(date1, date2) {
    const startDate = new Date(date1);
    const endDate = new Date(date2);

    const millisecondsDifference = Math.abs(endDate - startDate);
    const daysDifference = Math.floor(millisecondsDifference / (1000 * 60 * 60 * 24));
    const weeksDifference = Math.floor(daysDifference / 7);

    console.log(`Между ${date1} и ${date2}: ${daysDifference} дней, ${weeksDifference} недель`);
}

// Функция для возвращения названия дня и месяца по дате
function dayAndMonthNameFromDate(dateString) {
    const date = new Date(dateString);
    const dayName = date.toLocaleDateString('ru-RU', { weekday: 'long' });
    const monthName = date.toLocaleDateString('ru-RU', { month: 'long' });

    console.log(`День: ${dayName}, Месяц: ${monthName}`);
}

displayCurrentDateTime();
secondsSinceSpecificDate();
daysAndWeeksBetweenDates('2004-03-18', '2017-07-28');
dayAndMonthNameFromDate('2024-02-18');
