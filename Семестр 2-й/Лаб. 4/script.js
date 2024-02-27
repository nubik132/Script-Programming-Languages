const currentTime = document.getElementById("current-time")
const secondsFrom2009 = document.getElementById("seconds-from-2009")
const difference = document.getElementById("difference")
const dayAndMonth = document.getElementById("day-and-month")

const firstDif = document.getElementById("first-dif")
const secondDif = document.getElementById("second-dif")
const dayAndMonthInput = document.getElementById("day-and-month-input")

firstDif.addEventListener('change', dayAndMonthNameFromDateEvent);
secondDif.addEventListener('change', dayAndMonthNameFromDateEvent);
dayAndMonthInput.addEventListener('change', () => { dayAndMonthNameFromDate(dayAndMonthInput.value) })


function displayCurrentDateTime() {
    const currentDate = new Date();
    currentTime.textContent = currentDate.toLocaleString('ru-RU');
}

function secondsSinceSpecificDate() {
    const specificDate = new Date('2009-04-17T00:00:00');
    const currentDate = new Date();
    const secondsDifference = Math.floor((currentDate - specificDate) / 1000);
    secondsFrom2009.textContent = secondsDifference;
}

function daysAndWeeksBetweenDates(date1, date2) {
    const startDate = new Date(date1);
    const endDate = new Date(date2);

    const millisecondsDifference = Math.abs(endDate - startDate);
    const daysDifference = Math.floor(millisecondsDifference / (1000 * 60 * 60 * 24));
    const weeksDifference = Math.floor(daysDifference / 7);

    difference.textContent = `Между ${date1} и ${date2}: ${daysDifference} дней, ${weeksDifference} недель`;
}

function dayAndMonthNameFromDateEvent() {
    daysAndWeeksBetweenDates(firstDif.value, secondDif.value);
}

function dayAndMonthNameFromDate(dateString) {
    const date = new Date(dateString);
    const dayName = date.toLocaleDateString('ru-RU', { weekday: 'long' });
    const monthName = date.toLocaleDateString('ru-RU', { month: 'long' });

    dayAndMonth.textContent = `День: ${dayName}, Месяц: ${monthName}`;
}
setInterval(() => {
    displayCurrentDateTime();
    secondsSinceSpecificDate();
}, 1000);
daysAndWeeksBetweenDates('2004-03-18', '2017-07-28');
dayAndMonthNameFromDate('2024-02-18');
