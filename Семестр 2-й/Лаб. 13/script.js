async function makeAsyncRequests() {
    const request1 = fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(json => json.results[0].name.first)
        .catch(error => {
            console.error('Error in request 1:', error);
            throw error;
        });

    const request2 = fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(json => json.fact)
        .catch(error => {
            console.error('Error in request 2:', error);
            throw error;
        });

    const request3 = fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(json => json.value)
        .catch(error => {
            console.error('Error in request 3:', error);
            throw error;
        });

    return Promise.all([request1, request2, request3]);
}

// Вызов функции и обработка результатов в цепочке промисов
makeAsyncRequests()
    .then(results => {
        printResults(results);
    })
    .catch(error => {
        console.error('Error in async requests:', error);
    });


function printResults(results) {
    $("#newuser").text(results[0]);
    $("#catfact").text(results[1]);
    $("#chucknorris").text(results[2]);
}
// Функция для выполнения запроса к серверу с повторной попыткой через 5 секунд в случае ошибки 404
function doRequest() {
    const url = "https://ru.wikipedia.org/wiki/%D0%A2%D1%83%D1%82_%D0%BE%D1%88%D0%B8%D0%B1%D0%BA%D0%B0_404";
    const delay = 5000;
    fetch(url, { mode: "no-cors" })
        .then(response => {
            if (response.status === 404) {
                console.log(`Received 404 error, retrying in ${delay / 1000} seconds...`);
                setTimeout(() => doRequest(), delay);
            }
        })
        .catch(error => {
            console.log(error);
        });
}
doRequest();


// $("#newuser")