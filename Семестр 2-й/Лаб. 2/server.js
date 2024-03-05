const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;
app.use(express.static("./"));
app.get('/api/zoo', (req, res) => {
  fs.readFile(path.join(__dirname, 'zooDatabase.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const zooDatabase = JSON.parse(data);
    res.json(zooDatabase);
  });
});

app.get('/', (req, res) => { res.sendFile(__dirname + "/index.html") })
// const urlencodedParser = express.urlencoded({ extended: false });
const jsonParser = express.json();
app.post('/', jsonParser, function (request, response) {
  fs.writeFile("./zooDatabase.json", JSON.stringify(request.body), function (error) {
    if (error) {  // если ошибка
      return console.log(error);
    }
    console.log("Файл успешно записан");
  });
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});