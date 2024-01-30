const http = require("http");
const fs = require("fs");

http.createServer(server).listen(3000, () => console.log("Server started at 3000"));



function server(request, response) {
    openPage(request, response, () => {
        let zooData = getZooData();
        console.log("zoo: " + zooData);
    });

}

function openPage(request, response, callback) {
    const filePath = request.url.substring(1);
    fs.access(filePath, fs.constants.R_OK, err => {
        // если произошла ошибка - отправляем статусный код 404
        console.log(err);
        if (err) {
            response.statusCode = 404;
            response.end("Resourse not found!");
        }
        else {
            callback();
            fs.createReadStream(filePath).pipe(response);
        }
    });
}

function getZooData() {
    return fs.readFileSync("./data.json");
}